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
    "4MjPCPhMkohGJREsT98sZgAKJruuvpnjEgymsRkihyKWzk9vr3kniLShvYy8chdmy7BuHYUqKGXBg8yJipigZZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mp1m8w7dPg126dPqk6kybtegBftp1aGopCSiJuZey2Pa6YXh2MHKQ9TKjbgKqePyabNV1xN64Rs93sZq4ZB2mEh",
  "key1": "3ArsoVwQy2yyuayML2PzTLgbGc2Wv2BKrGQJgF2heHtnNdHdratjtiBk83jzWi3DYpsGo6ByZb9GwCpfT6ZueYLH",
  "key2": "5uRkXPwscPyd8ccFjjCMMEPKW9jvdW2KEaS6ipP9ERvcstrE2Wudx3Eqr4pEV6VoGCgbBnx2BcGnpP27gDyMwmZM",
  "key3": "pEokeivQuC41wQRUgDEQ3iTpTFDTRMxvYgzzhhLMBmwAayPnBwWf8HbdE3tc7F6MX7q73dpWUUF2X8adFgTGUMH",
  "key4": "3rXH46iiQ2uGEoMMP1LxiPpw9CE4kAqHWAkchJuwipwotqq2pwRpkCMDTMM8EFF4iCo1XKypFMyxoA2EcBS8qFCZ",
  "key5": "5KfSSiUVGF9gFRHu3q7QkTt41zRUdrWGZD9cV99GX7CcBehodmKAtRXhPTzLGBwRJooybRJFiWqVfyqTQLGb5uBe",
  "key6": "2xD5NhtM1WhdYBZtwFCvxs8rSaipppUALBZQsw3Y3cSndeVgbJK2VcgFU97YsM99D25RAKcL72TDC6UT7buSbMeV",
  "key7": "UT3ZftqNByrbMHyP4zeYmdwPwMuV3cR4FMNojw69uK5uXuCZGvr54UjnudLbysGNXHmzSp1xtWdB6u7uWUdEooz",
  "key8": "291UsBecF3QcLRJNgkF6hjrf5DZTubRw8kByDv84y4aDfyTdRnTLzymH498j2DQGEirfhACAj5v6NpgV74KhY9aN",
  "key9": "3CSPVesv4dRRftqaokKynZSyapkx9qGKUMeE9QZ5uge7FsqHLLqp6SL1uHvhUJHmohLCPbpjeB6XLYpvySCF39es",
  "key10": "2BHtdUYALptCZ4xaK7GxjzfLvgCipggdFikmkupabXAvKZ7ME8B2sbnFZ7bQ7P2fTVNWYTQVbCqoPUDQWxup7L5Y",
  "key11": "3gbueG5fPKYKaNG5KCBXDuuP9xu5t5qpAFZf3eokwRuny6G8n9DpW3VnKcZwuNaVnF5nh3DeCrKbdZx5pyt1DDgD",
  "key12": "63TCXNGC4Ump7SxLmh8FhrToakCg7kKyZ35ZjQdt2cJkzBPgcV33P1wmMvcK1uPgceSqSmjkD1J6h6tXPpF5V64t",
  "key13": "5r1MNcFCmThEmMye13uXWzfwTtjP5KS59m65X4KTD7EeDzixy6iUbkdGmsfyab9EYgJ7vn5DhWjeqNhvQQFnZ8oF",
  "key14": "2QhjEyHTyPcSfqqaTcLXubHpEE9Xjp3PSr4dKNvcVXoLTbqZGMPtG7Htr8FZBaz6WyQ4YTFefqGxGT81CvSTiF9g",
  "key15": "43meUB3F3uE1p8hXYYruBAP3zVpRA2ryaiX84En28eDkTvWxHtHztFmFX4hTaYffMr2DxC4NLuQVKYeB9QED6cX7",
  "key16": "2Hq8SD4Uwb1rdCUCRfkWgSSUBpasqA9jF5zsVHzX4EVRMJmuTFv4zEPXVBMRVwH1a9GE6FEGnSqb17BdXDk7onA2",
  "key17": "3R4942DbrHbYjwfTz7hCDACCVK735zAxGrmXNUu5GZsV3BwhQE3jge9XNv6nR6HNTFr52XXeDiXRApstEcGPJAyu",
  "key18": "55mZgacu1BU6jov5km5DYgni6aPgDxm3ffjrPoSib7jyYffMbMYxi9SmTQ1UMpKzUNiirTZMjVTUBWGsSaUTqvvm",
  "key19": "3FkGCQTC7Hm9fo5W1dhC9o7PFubXKct3a1t4MUdVRF8jZxVFi4cN7om1MX24ChEutFtVkjVj2Sznj4CvdQn9xaWv",
  "key20": "3Awc9PAsok5A8uBLMKSbRaAup35ZBi4DNw3GbtJa9wTm6TUjyzs2j9NnkkH3ojvn9cHe8S5dS6szqycuejXk1Mzj",
  "key21": "2Fhf9GYiY5xVQQeR6F4n2UasqYqKgdSNHMFxd1T398LuibqXGTcm5VJ8FnqQ4wUgkhQ1viEJ8ZZW7hD5KYyP1qSp",
  "key22": "4yWEtqJ2AN9Mx8Rosg3pAjtNoRFLBPmzwydhxwy7DbjaVoB4JDLVDc8QVLzXjmeBy9XUwDYokjdv3yB5g7Xs1FKe",
  "key23": "4ktSkdqPRuE1uRL8zBaWayzY2PCkXVSEzASPdMhDgrFHfABbK36jsHpPaWdtgibGUJWXVCcNNfzF9e54EBJ8EQ5p",
  "key24": "Kw6eCt9UnWuDi2Qq7WmJCfuat98JyTWJHpjbh3JneXcyhyxicA8fAxP5NRoqEodHpfRuMTn4HQaVo5w6XVDAzwm",
  "key25": "2fmijaiKxsZ659fscM3er1ZMVDSynnRr7MG54cDmbmyE3GBDX9rFjsLoxvU8bTnAH1U42fvDS9qAoyd6DHGEjEom",
  "key26": "41n6KbNRmAnBr8WmDPgkADdiXZhSjYDsTQUYrqRFrZXE3z5KvRAPs55mthboES84gwDC4a4CVkRt71ord8G1XVVg",
  "key27": "34ZE3LNXjgQXcL4iBuyqA34Bt1DvK82d9vdHQALiKa4wRnEHyA89bF4GexmiBm7p6JwJmhaDm14coYFLuFtL3bde",
  "key28": "Ec61e31DHGUdM8nnpqv2ueEtq7iFHp1EffAHYR4LQkZTnZ3PfWBTxaTQS8PuPpFBFLpckexCTKsXAZJZvaSGUgX",
  "key29": "3tWmFcLJwEL5FbCarE3eLaneqWPo5xFcsU9KbP9jqZFFTLAz1Lms8pvokpBB3sNBu1ZsU8EYDqxCHXz2CG57NmM8",
  "key30": "2ZX46z4AxP66X6dCzvGMYARVboXP9MtN51XwBawhASj4Y3rzH3xHXqHHZ2f24xDEVZtZcRsaSe143TaXQ5BthFxM",
  "key31": "5S8d3gtw7NazctBYEBszPWEzKR37HuC9u8eoYFZHka4qCSoyLm1Ru4wjSYUm6FFmnfLW8UPQKrwdgbpQfcuV5iDs",
  "key32": "34mYRCcrkcEvJD1GQYwA4BZmhw87Xo9DxtnSNMx4SJCsaS45u39n582W6XZLNUGo1uVXzLgq1XiUSvJHJp5wUUab",
  "key33": "5KpqNsoPz9WkR2fPicGrjyPMpvLTGQgY5U8WFVG2zj16iFhAAnWcF6c6eXjoDA9pBFLB2H6mqsxyBppytdW8bGNZ",
  "key34": "3dLgiXFrRuiJ1TyKoPKWDbWKjc7BqtThhVRPVU9An7KMHZkrchegxSPTEvVEo9ckv5kACUbKr1MxY47Lxn69SFfD",
  "key35": "4pMfyWFvZ7m6iVYExkevSpn8NEyNoXT81c3fNYLoBYHSvJton9Pg8h5d9MH3e5QDrjJL2WQp759AZrBZF8E3twuZ",
  "key36": "FQTAA4Yk675tdyrtVJquwhUNNdTvCZNr8Pd1tRH1P7S5EjkNAuoTaHnZfQc1iUtMjFTmDGEAgHJFnUXEN34Kvqi",
  "key37": "3cGFfLLiyHKZy9fB9jzk2mS7ki6RnLEJxn5MsQxneHym2mCCN4dJoFLDBuVHkcoUszF2sC8goSFeddteJuSQKQK5",
  "key38": "3emmEyqCeBaGrFD9K1bqVLrcuPSKs9MjRhVcWcqgAUZ8pYrJcpgdagbFLjwCmdYynxcco8NKJbsZ97b5mfkKfXyN",
  "key39": "5gDChqFrdcPs4pAe71JCj5MSUUyoft2hZUvLovHSMLZRaQi2qs1EKKjssAvNb1cTHyyGWWZEY5biBG1esTXB5NjS",
  "key40": "4dYMYt1pKxgbFAPSA6wCSCySE84BkDQS5dusQvwrSPJRb9QsAtWpx9GSHo8qQCLadxbagtVLY69NT9Qqzf1QtM7",
  "key41": "2S6R626VGL4dU8FbSbpJGcFtRFPDefkJ5DMnKfkKDd7bhaizj1TF7oHL8PKGyWJXvdEUxnv5uw4GDSP5GUcVxynH",
  "key42": "3JGu9AiaS5WtZp5p7EHZJCswEkyqwmXdLAyBHom18sc6jPPCAuwEt6q7uYzjDa5Zo8fJoejToYFSaCPGgqdF7mtc",
  "key43": "3VvNNX5rmpmV1kAQjHKHquSMyqzF6GYmY57J4KAtuwrwYkpEXjeJPUUPnzpUvgBBGHGJnzmFYbzYEJVPTA2mcrwH",
  "key44": "3m3a2fvZW8TsNdiyE3wEutnre5uzbUZpvwYebS2P1eCTSxu9zHgCMap4UdhV7KSpeoUjkLL4vMMq8LgHbV3sFGSq",
  "key45": "3wUNbtQehbeLRDkBRwazNm7c7jrUE84btPjh58vL8baxunThCJ5ReSy3VQNDwxmSfHBJ5ufJhrjGiab9dRCxak6e",
  "key46": "2ZHsV8smvCW2vWJbwhDKdxcFStu4dcVUFZuvriDwnXSo7asLckp1juN8oCNC2XfYvwKHQ4mNaizEQgzAENL7EaBR",
  "key47": "5SVgGnjoZSZnAASQWchuwSA2LjduaLiFAryTQ5ji4DLZcC1ifAz4F7gDQbdfkx8FqHPXgesr98eXeRCher6781ei",
  "key48": "66XHN24sV9RArqdjmNNDmyhKTAd2z4hsichZQLtAYbuPmtwHDnMzmS3s8PVcttZ68nFQy6WajvHnEtdWPsya8oGb",
  "key49": "xK4KarBubcHyLwRqPMLXvLe71w4tG4uA2EzwjdVVLh4Gx9NkeXSe2omj299CQbSucBLdTxnyN1SunzApJvsHz1g"
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
