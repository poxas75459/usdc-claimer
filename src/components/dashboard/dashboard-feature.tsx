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
    "67eRQjiooeH74dJihZGnL6QqF8tr1X5RXVgHkGAo8urBMa1MYRCnceK9yMWqy4eToNKTw2ZuieGEkxehR4yfWRZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V6xMix23y99wkRU5YGrX2RkDkhibxbsLfw4nSoNkeWGRLVfyB1L9yL34yDKNBgfjvAaZJTjPV3ta74YgoscgSue",
  "key1": "5JMzkreZ8ZMkwfdcsjdbX59Ar47TssFDSmyZcZiXQZ1cL17Ed8K32o8U4VHtaBTGB5Vj2vfhsEp7fzovkmGMNqVP",
  "key2": "4x23Wu9r38qJNmi6VNanMFcKnqqNxqQcDKncpuQ4jUN7QHdg6g2QrNsN1yH18vP8TyqDAmy5ZdGaW2SHWHc4UJmH",
  "key3": "4sgq13QGJGhtbm9UmZSJvZSHQSkJ1215BYwKqw5Y4wyTs6WtwhqBMgcwrPoiAFo5jyTRiQVhszCcBH9WM2NM9Fkd",
  "key4": "4Nc1a3MyJ8jxeeVrjK3ctRmMPExXSm6TzxTn9RQTh7EnACV111161nH9ngzBKjTnYHQipuBZ3p9sSnWjZRUoexQW",
  "key5": "ppZBaUFFN2oAEBD7GTfiNPfyzq952SgcW5zTHNrQbFKei8gjqu7i1yywKys68VDh2tYNKfrwuTLgxxqqViUVFrY",
  "key6": "5gxFWYE7axm3mUEABm6va8Unfw81W4F3F7qER3fw2PEkBJbpLiL8scbBRysH82mitUUPbfCRSBpKrarPWmBXqb8Q",
  "key7": "3BiWrET6NsC9XeXHdh5u2CQcD1zK2mx3irwjU9s6nb6JWjG6BTYzW6Q8hExazhjE2xYxhXDpYBR7BvsmonqdWV7S",
  "key8": "2dACqmCamQBajwLpNFWXf835ATo5dETjoJ8AXfp1FC4rksBQtT15D1RmQruhTdqpqoDeho3tFh62x9a5ZBeFnMD1",
  "key9": "2QpJQisThtUkFu2visSaSbJNdc41UcShLvLqJv1hKceCZBUbSJ8r7NqDioicTGwfNGrnx5CRshKPgtiGqYgqpqL8",
  "key10": "T2WXuvcrXHLogjhyANNnEXUMkTzHYhJ18xqMe4Hvj97gdyUvM2PGjQnghs3jtRwztd6jEQHcnKxZbRiZNNvMirT",
  "key11": "5w6WJhPZPmFy6bHc6bkW9rV3b5RTfXH7wtBAHUor3Co92F7sQtC12kCECMFaxfg35s86uFVJnetaCRsYxsBNrgYG",
  "key12": "3vM3K5PAvF62tD8yxvRgJuQTXDGnt9cfoRfhAGkgFeoEtThJqaY6rxvTTghz3ic6fV5W8Mx9hZ1f55dCSmrfbbKf",
  "key13": "4KYjkySqabYRSmueFLKRxXaaHZB8Pn2aGCguej5V5W4va9b5K7iD2A6jkfmb6vgZrd1e7xmZtfVZGs9TywB4LLXo",
  "key14": "5joG8fjgNC9tVCZHYu6PaQ1Aaz6Xw186JtY53iuSUR6gLLmgb6UXF9Y1d3PMaHfBbup5THP6jmctt83Q7f5ZbBk7",
  "key15": "4fLmfgLZL8ZHZvWZPDuqiUGJsPyh14sHbEMouCrDyXkw8Cc9de8pf9g6jt1AeKsoMC7dDRFx2z7WTK8qA5uuhmCd",
  "key16": "5Y53WAiQUF6VFBWR2aAbKdcHtbjmoCxq6FxiTVPKQi91tiLMf12w45tgUYbhAfUocfyWDAHpdHpvr5S9BUFKw9aH",
  "key17": "4vkz2gvqiwNgsKphkDJ62wtJrNfyMuSCvvH2wAcZjo1iwuPGKYRwmPmowtDWqGqjW2SRtUcz678QchFxEf7okeWr",
  "key18": "4573r1WriDTageG2XqcrUfDHhMTGx9iPPSaBa9bS3wkcL1FADkEpPJidR3XCpo2WFJdCaMeKNYEgQRkYn1BtCDur",
  "key19": "3w5cpJpw9UFaMaoabZQ1JwDCGhDtdNyKmtRdU8T5CCbsGDpPttcH3XoAi4HN79djmLps6fbD7zA6iYqmDDMAW2Ki",
  "key20": "3nhfLLgiygECpVnu8Rx9C5vjtFb3rZv4FCT8qTjHuBdKvPhWYxQAJKBxgKuZi4wnXkSyUuTDgsvXN4FxhptxpAR",
  "key21": "2ze7Fd6Cme3nkLfFgk58cid4fTiuxuNsfZuqWhH7KXj49oJBqDRcUv87THFyqcsXXMDTQdiPiBCWbMFbdrrmkQRt",
  "key22": "Jbu35tV9qsvdUfzE8zv216Epb5ouBMXfnSpgR8zynr2FQxmUqdAcXZcDd3Jz8TDqZiLgmCquvgjnL51Ewg7QjxB",
  "key23": "3offnmE5MT8XWZo3wk8ZQs6mvizNmmbCS7HuRyK1oRFK8jAZFaHDfKMWjRBfjowGBtdLx3NQaYGbpakKXsHRvGpD",
  "key24": "3Lyi66wZAqpT9TY5UENRKtuqALX3vUGEwgxHjB9zvvSz9fjsmpVKCUPTGdjMcCpiZKTjp9WMfPax1Bn3YAUz58gk",
  "key25": "3yJ4wywjoXcvwYW8ptA3zpuKJQwvQNZN1G7fExQuocqcQm8f5T6Du335qcogGUoA7DcZbU2VPWeedDBZA1Dzz4Eb",
  "key26": "4DqWq2XgAZHnEyePaEBxung43b1vPwfQ192MAsNjV3NW6vLp4iv41nTgunmKFxUrUJHnyiGvkZ15k37uYc8FZbAq",
  "key27": "2ZLBLPipCB1Mg8VPAR8fCoVVm1CyyYVnr7X8fekkDYYQkmpFWBfk3uhbaXZTwNnU6fjeBZU7Ajf94pTRRgQpBND5",
  "key28": "5n1NhCU7cHwNcZv4nMKLDAPNwWPqX4hL4LguLCusfDFnQX7oSTQx6bwm9yyxDK7qvMZyUKKCvwyFpxMniZ2kHS4s",
  "key29": "3DB1vPDh7FyetFEs52w1n4LJY61HatWdRGiSMkLfCjticKHBJpuSkaJXkkeyikiLAmtLSXf88tBrVJxxuyMzE6x4",
  "key30": "51jJ1D7YfPtnb5eU3UMdiJo7M5qWPa5NtbA55f7NvsCnNSjpzj1SNK42atbZsb6QoBHJx82jaCZMD2uTX1GvZP3Z",
  "key31": "5JemVsCYAv9J6kiNGi9oVBvkhVroc9DkftSXsPkt3qzRupPZu6bMcJkJPbvkLtVSfB2Jy3oSjLj3ka6qGVuCJt7k",
  "key32": "3BtrHg7RgNQ8FjeUDzVrSvAZ5cBJzjyZacm9i256Jo8KTdEFxo3ZEooLjGuVGizDvZPzCk1saWKCQftLSUGuqq8k",
  "key33": "4sKNy89UNf9DJMkGMfRdYGFhwrpPpW7Dscf3QbV3QDFLqx887ZAF5vzc3yH2bTJU9iM6xbuH6UxvxAr4RyGWY8Cu",
  "key34": "3EWfyRU6dUKHuETD2sQ5mAMNRYHuiXCx72sedKi5eFhcsDDDpa5nK6dhSso2LR5QGayQShaJxcfLiPAyT5U4AfEH",
  "key35": "3R7rcMmqdX71SYMAsFeGQqJw8NVzTFE4rS2eVLBP5wJEnWJ1PmsdmVEFg5NfEVYuotbSf55tBNA33CrprLkyLYjR",
  "key36": "23LPGvJpuYkNEfjMGtHtQy5occQQnotcrQu7XFozkn5obDAM4zYDGP4oSGzDHoJE6Unt8sFUSp9jq5doWfUXM2b4",
  "key37": "4EgDZMfym6CPwUMxJyc4DM5usAPcpeVSjFuPg8k9dumDNxRLCKJm7fdw3QN3R4GesRy1uZcrQV889tKDyovq3ksU",
  "key38": "4F1eRiNEu8az7513AR7ecgB7pC1dTKvS3xS7VxkPV3E69dtLR495a6t9zSqPKJZknELjZXq3kca5DhwTCtGqYWrz",
  "key39": "5pPDRhTikbFPWZMzXxkLRdCCW9MsT41Yb3MuXmDBrziZy5P2wcXKY3ViLMboKCFZf9zCNdWRQ82EeB4CpM8ErFz3",
  "key40": "4HawvCyFRRBpaDpxz933RgHFaoQBbDXw7D4GYb1XysCU7fCnU7zhmzGSzP8EsMQPoksfwLoJ3L4HL2BHn8SPuHNK",
  "key41": "edtdAjKL3vXuGN9a5BinH3bFEpYjb7wSXciXewZW2TUtLgYCAsii6MchyHjdA7caVaCNAniiQiPpP6GCQTmCPMY",
  "key42": "5Usz2u51EPTiD23AX5e1P2fZVwK4f7HkocXekyqp4JTF7skjcAqBTrTtpHZHbQb24rN6Hg2W9LVJ6Uy1vdijAnpk",
  "key43": "3NPMqXMeusGALCvotLWSJXC4mxgif3nLb722KrJ8uuGM4k5BZb8VjYkAjssm9DB7iG9UaE4gh2C7TNk5hCaYxxsP",
  "key44": "43S7kd25obB3m9mNBTsz9YWQfYg7YLhmqWERxDzhkBRcAySvjR1b4jvwzgcChTRdB3NaeTamD81NNYaioRpR7A3v",
  "key45": "2rsdPenTFQexiVREdNR973DSdrRsiytykwk7gpZzRcEqcbjofaDmdSUvq4t42pnvSVxjrp9tHmdJa3H8ekTDH3Uo",
  "key46": "55FEmZiHmmoAey87f9jLEfwG8muFxUvd3aUUYDzAA6ViG66UZjakyGXja1vac6V5qhUhKMQ9RzhU1no53PUaQxmS",
  "key47": "3gHiTCRcccB8HKTfuYJFyBv2HwmLhe4FbVxwtUYGmuLQzbyY4Cf5x6fQz8p1fd3gCHwWj5Yj8E3aVRGHQrHLzqAp",
  "key48": "41JAhoJRsHNPbFprCS7tRt2SXrNnwNFt41XJddAXAgYnQSi6KHjNQyKa8svPzEV5dwNpSVbzs1hcC6EmAmcudwYW"
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
