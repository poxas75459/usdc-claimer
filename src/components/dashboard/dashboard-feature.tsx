/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3KWwgUBZ6bn2PtRoRLwNNjGZjVnmAjT6RSotbmfJkpZTAYFujdKCxugLq8TX8a6dFq9f5MVwfLMiWGrPsGLHH271"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nvyy6aS4VoNEbFKnRnL1ojr7hhqj6wZCHoPV2ppEfySAMyXczkHUdUVdjA6ELwJ8nTLFgVzf43QzeKwkeBX7ghq",
  "key1": "5fhn1pYuBf7qao7E36DodSZGCG3VF2Lmf5nwRYSXyyYMqSYjZ6nGP9TDEKMcXZPSqsnDibH5HfeoMR8B68zwZi2o",
  "key2": "3WG7SVSJByw4n1ZtPZHp2vuqBvSzhnDgPnP2Fo7cFLMMHxTuHreQgPi4pYfyrEK8ejScBF1WAXfQS1g7UmiGXZYA",
  "key3": "5RT8mC5kqy6TQzgYPzw61JtzwrVWDeaYRwA8UkJeMkhYzXjjggZceoehgJJ9N27fpn3kWAgnxSvuPMUo7d99ceL",
  "key4": "92odFUzXWUBmLvrf1fNUoBicXKpZpzv3sXGVnnpkhEuPFZYKsceuwiP36BnEurgNNqYje8YbPyexF2ysEcHYnMK",
  "key5": "2hezkcp2iqhuUmEaLDQWwkyL5dgHGD6GHoDVt6vqJMA9tQNLanhEmasjY1fFHRhaUVzmyrLL1s5F9TgKvHCLUEJA",
  "key6": "2EeHiCNPeg4BvJUuEHmLso5e739VQtKgCmxTYvVCAdHwDeULoV3HC7y3iqkGVzbfYw1UoFrEPxEoRoZj7qFXEJ8f",
  "key7": "3DhzPUiG1pro55RU1AV54FtZtG8CfFu63LRP8zgbnpuKghemPcrfWWX7r5gpyxy6fppb35eA3zWtPEeZk263Ua2A",
  "key8": "G9Uxdvo6AAvFBkJiHtikvT8kwBt2i9FJW31mEX4prGbC6CSjkeVvpmo8RVzFdpGcwLsxwq19adg4yvtqSQxohjH",
  "key9": "LbBiMkmaMpS7G8HJCneNtUB3pdU9Gq1cUUzHKtABPQYqdgjy79JkHnmEVc4B2ieDLgeoWaKVj1R7jXUtYkKoQhC",
  "key10": "2qnsC5RtXX5ycaih6m1iVWLspS7iedkDL9STcjgQUJr6aobTg9DG7i5fm8btFEhEJrxBvHX4vBc1rkVMCxBeWzpv",
  "key11": "65ARLRmqB71QKreZvKtywGvZu52R7JkTTbn2PUZSE3tN9MC59PPipqa44MdmCG19Pa3BeQyt7psAvUr2CRFrjTgS",
  "key12": "263WReAcf4Pdsw8fcSSfJZ5JqASn8Nt8sVdg8vF3PcBeES2biarM9wWPAcVe6mGFVJx3YnatgNR3gKonFDTe5dPH",
  "key13": "HRbedVc4PCua33BYsQBZCtWVZKcDr9MBz5mBpt79rKPE85LyPRZYi9yxwtM8WSJsCRRErCQjmATnYXuhtdbc8pw",
  "key14": "3CufUriVVsSst32J8k8CMDp8RH7VkEbVzvRXdbERKqPY1dezhSmhAvgisd1iZuitZqEPMCkXa6z9fAiJCRzuKkTn",
  "key15": "213hnhgr35uJZDk7m6fbFSzcRKfb2sJsWirJZAGCke4qbbLAJaAjcqPYT3b5i4ZiSyrh3Q9BRkPB7K9XdSrtSG7T",
  "key16": "5mcQE64puDK6MXfe9fiuhER2AJGkvmUBnx1r93B7zQ6iQzbyqZDeHH9QptsUCowUL9BnESZVvpQoUtrmhmq4ddN2",
  "key17": "ERx6c1ptXV54px3T2c5kWEh33KAeXSpU4x2ydScygkAab9kPGnMC4mx8HFAZDXSFz5gBxuaw7H7iahm3YpFzcTA",
  "key18": "KFS1ncgb5ihjUYUZLJZz7ZYj5mUDdvDc1CQ1ms7P4LaKT5oox8NkDpZERNthZABM3YXyhx1U3th5UgrFKEafDso",
  "key19": "2YMzmg9ym3skADwhzc5yfLMuhxiPToUR9YgJheBkCfVaP1A6kDbBvA9Q7oCLZdPqHLzUFMff8sHYqZQFhkKnappJ",
  "key20": "2E6X7bkrQ66tBwuRdxUgFic1qxd6wpkb61YBbMxE6h67BcxcTRYHffcEUpktyqK4c3GZPUwcZ4nXPiC7Aout4bTp",
  "key21": "2T9Ug7EFHvVsqk4Gv8BHboifJLyhtoJnkJfxmMBSpfQboHcLySNVvZujqYB5YURzjUSk9WmnVkXKdAhUeFi4uH3V",
  "key22": "2SBEmPyxxBvzZKTqH1wJMZ3o5teDDcGGtzdssz8k996FvTQeyUnTvWBjr6way4c3cbDttKeKiaYAq46w8Nfuv6xw",
  "key23": "4V12XuGLALR8BnvctxjiHpWeiM8rBAiUZwYkccdGwoyV5v3Mgb8jyR7WZs4cbTpeBLpFPq1FGAsxMGDrRckb1HXG",
  "key24": "3GMtAa5FXVGDuN3ZHQzaAkBkLQMKQs9aVpAQPYfsM3yUCLSFaHNaJ7vQJLTefNos6rcob7uLBhQXbdxW4EK3NAdM",
  "key25": "42eQZs1dCBdioyWCB77gGZ8YysYC4qyztX2RgVyCezyjtVn3QM5gJfQiFQsLMiTpKtS3ihXRA6QNVRejxxhbf8PA",
  "key26": "2a3HEcvCHiDMpQbrot61YiF3vQ9rRtn53xyMudTnQ4wELgyfNwsPLBYu3EpampzdQMreagGPLyLjEBDkr15ifBJ5",
  "key27": "2A6SSSAFWkoqbYtiRWYQpQbqpXNPqnwdFy3KYh84sufsKxMRPnYMgx3D6vBbuLEKHLfRFyVHHoH1byorkZg62Na1",
  "key28": "3UFxUoWU1Ef3GwukCL6d4yjpEB1RUYfTanqDK5bxBappQKSDworCyBr7CRUBQihfCj6u3BQwkB35T1pDGLX5EVGU",
  "key29": "3EqnrfXKVsYUpEWKh2BCc4gocQRGT9hUWuh3cQo9mmA1erPgmucwPhSgPwSZproGGffuzPgxZEWM5mM8D9rMJWxY",
  "key30": "2rKrZcnSQicj16bp6pXnBJrBTCbhtPfCCw2EMesNCeit8pQuoiMw113DrkpghY4kxhuSUtcZPUuYyn3sfSNK3W3t",
  "key31": "3NChMBhzvf8Hf7xx1ZDZ6H5h95i2oNWns46yHcmCLeu4CMm3GgxJ8DqmyCWEdFdTb1Ka9CRBH1JiySYPKB1oM2ng",
  "key32": "65d5KVqM3cFkccePchR9oZ6VX3iP3mwbpk6dTjPfG98WoXgYxvxvkRpZG9GmCX8wjCk35fzihpo5wUU6MV1zuarm",
  "key33": "3hGHqfuX1ppNczMnQAW1pnUUEpPGMGc1ftpDrHZvp4WYMkoZrk8HwRsQk4C6aHLaokDDFCifDaNwVzQa9fUuch7s",
  "key34": "3EivNXntWkHufH1UhVKkZe5TyA1kyn9FbgTLjzFJsQPqh6AYab3z9rsURNkrDzAWuVvGYNVjy2d7SPHomMaC7Ycv",
  "key35": "gPE1XTBiVwetENH97xmiHZNSB7t14Qqq78SxUe4zzWmoo7B3D1ktLVdVRTTryqowgXm1BF4Lg7WiMtmvG5785Sp",
  "key36": "3i88y9dQvtFjocf6FBhTz8eBbEhUSdnzzVYppz2McqmpXmkbLMTJMUnZ5nYuc2FN4BbamGQys2tLGRc9qXtv333k",
  "key37": "3GU2XsifGohbk2ZfSfMYKn4vQtfdc3d3jgU6jJv1B799nhCi3PfjLartk9HuWVdFcqwayjW6JG8wECh7TSXeKWwH",
  "key38": "5cWrtcu2Jeq9u6JML9g8M989uBEsRq4MLjEKfqKb96TvD86ULnUXoMe1DwTwpvXaRh9eVjRirkcByMRfWdhk8bHp",
  "key39": "6As8VvwTEvMx8ro2L9G6hVyvUEB1qemjxjQ1q7zHCoKThWbtJyFM2yaD7KiXtDjZ86d3cyKwhb6jrF2hMEwBMTs",
  "key40": "3YB65imk9k5qoChkzrssj63rPB42SqiBXjCd2Lhm67JeJQKTkED1EGJVqCvJ2pCbN7pyk62Axr1aKMmZeHmNHtZD",
  "key41": "yg9gfA35Mwviz6KpD8sdc9QhYtLRg1pSJJLDwa6be4LuCKFUdzrt8SqQok9srfUkhQtSWd2SS4HijN8ea7Bjcb8",
  "key42": "3AyGZXynFYUp5JZiRq4R298pEcJ4dtt7fgCqgTt1MS9UYV9piLYj5bUeaGwuDcxYVuVUHF44Wjhw71PjGyLepWEk",
  "key43": "24cuAderWd9mMFhqmzSm2mLF5xvqx9mA2Ytm3eZTsg3c8Nxanzcdcbqbt7YmnEWw5SWJDZTK8G7yTNVo67Cxqz1y",
  "key44": "5KEQrXyYiG7xXdzkUEk15xCq3mR1Cagdor7zZpRAovAuNbfM7fHF1of9x57bv8HBtc65Gx6huTtoGgNvoK69swkp",
  "key45": "M3pRkdjfMjGvNcJbrJoCUVt7XsLeN7vZNNVSmsH7v4DgmBdcPdZSNHXzcL8iDvseUD1QgKMhcGfLgHsCdYmitN2",
  "key46": "2bgGWiH5YmwdsZ1mz8Zr3KdmbSL5XHuiWCdefLKixJYygnE6CnZjLEoCaKCyv2JFDs2KFqHBogpwbsvFxAqdCm5U"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
