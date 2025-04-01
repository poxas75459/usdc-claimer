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
    "2oYBhAkqP2AZdCcScyXzz9BJfbysRVy6btzH64jWWsNSGFfd4UzGJSVUEwWmco9ideLnaJDqV8TeRudFwMGigxHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pSUEbaFfMGL9jtAiPyXWEjVEXVhM8cVFA5dWN3jChms7cuneUcKxNhVMZxKJifxD6GYopvX4A8bGzBs4dHNCPAD",
  "key1": "3CzGNAGYkjZTLfLZPgQPK2b8P5d2sLM8s35pQWzNi9xsazjCCo4jthyWSp8gvnkd1XLEDP4bmxnM923qwtoBW7o7",
  "key2": "5oLtY2SoNca5kVRn71F2QTRBQU2Gm2RLLsUVPpNTaodzf68XNTnMNRYMjvz4XeJmaF5Kvk61dFJuXScsngTzWGPY",
  "key3": "Eh6CEfPnbxQmWf7cYpZMwWXacPcwbMHdfusPNzj57e4Nv16MYrLYkbwA4T4ggETZgnHMWaL4xZPsykehtrRCr3v",
  "key4": "Vmj3pD4xT7dwemvJR1iobGKps8cBmXg2iwXeKqngeG48VpzXGQdgapi3GiqTmc8Ek5ff6GPUeFNCQVQw8P4zgLS",
  "key5": "2HMcga9oU19KAuQWkvxHxSZKaupiEt7dahgcmgoRqXiXs1cMbx2VR7nzW66dnLwVGX2xQpyuD6ZSWg7bjLcjjN1s",
  "key6": "3vCgBETyHzvgbSRGzZ7f9YFiiFeWHwWk4wzut1LoEkFVT3LrJG2kuJjwYy4VpGknQLMNouD33HzYXtHTg1jb4JK8",
  "key7": "3MJNJ96kkvyuq1BzJikRo6asJ2ush78DY64PWVGqkyYuvfPsjbMRj71c2bDi7xrG9LEGhXmvtQvcD7YPeqrC8XSK",
  "key8": "4rxLY4zjbQ8EScvbufKW1LcA8V7siaNWNvh9KqHwhtb9UZtSqk39CSpv4NTTSusiRuT5pMyR6ff4o5SFKWKzm1ez",
  "key9": "5s4BzyUUeB3ZEtnzQMQB2seu1ppJMt5jLNK7BGtH4nnCJ67pSAzN1kQ4uHb8JW99WmYHRbCRhyJsb2wMipDdC5ER",
  "key10": "4XYNjH5fVLHZgxMmNBAuXx3rfEZtBfrxox5Jqb338boVMVAWKwkU8PyctMoncoxkepza2NBZPnPayAmjHBYgp2FK",
  "key11": "2RpsB3j2aTShLqWy9WMEpQoD5abPA1hx6Ys2UfyWrXPqDQUL2SXXHw3mq5JKdiphek8N1GLF98kbdD4gpeF2krsA",
  "key12": "4mK5aJeeGszsrpaMMUTqsj7YcJHQ9A5GCMzmuZ14zV7VrdZuko5dYJxevEj7uKvK6Hpuvf4ZmBCfnuuTcp92HnCk",
  "key13": "5VtnGA3autJy1ysETfNt9rmV6UVcD2Ci8RkMBc6ofzb4VHioSzk2SBzUswysxaTrEDqK9G1hLg4L4AU3uXxT3UsM",
  "key14": "2ezqSyqkAv17e9tjTUqyyQ3JpMy2Vko82hK7JKwzHo7ddcPSvsZakpdccTSDunxm64sdroX4fPpNib3DWTjjbvAX",
  "key15": "62XxKTpWi6diRY8ivjvG2X8FoYg8nbxR49JccQqdf647CeGPHsYsA7bCrf9KaoBmWEuBeKNHmQVePDoqn5YuoBVk",
  "key16": "3cqYrxNHeNZu6GhsMsL6zZEgrW3gA25aEGEWAw8zg8b2VowkaZQCptWCgqR3s6C1Gu7XuCzxPy72PpJNpEYZzwEk",
  "key17": "3s9wq9jrdEWkWwJauXx4ZKRBuG39NRKk4XmWNKaE3X63g7zWw7BBxejfCRfBuKHNSPA9nz5mrqYcVWAFa9AqJy1z",
  "key18": "7B3Bcuh2BRYBLqQDkKf4ia5FXSsX41s8zcsyAusYnxetx1o34LVLmuYmMCeanheSFyQx6h9Yi7mbSVrjfsCv7UB",
  "key19": "zVPvUL9YnUFreutAzXNF6CwEJ1rTh6M9MQ1hAjjpmWrccRbHaiqFFitAXXcG3H2r78PApBLvHCEq3J8zCpx4sRF",
  "key20": "2psPyWQCJtResxGkabsWQ6udQPYjBoevmMYhD5BjTQszqZpqdbSNK9kE6oZy9aVPR2vYTKUaCuww9ZjNHhDRo3Co",
  "key21": "48XfTWu29FosJ45ekAxkDDbiBe6KKvLUP2q4QS3koGqFfzQG49EWJkoXzSXHsVfaxRsbhQndkseQXoBphEb6qghE",
  "key22": "4RGF45BkGtk5xuQeEoTSTs89f7JuPQ6gxxCAZyd8SYPiVb8JBhXy47JBpvtVEhtJpNESm73HrHHLMM7fx2GgycME",
  "key23": "67oFh5JXXmyBh3NPBBsdBAWtzHAL8Z34XmNBJiFG2vfXmv9guWktEGqPAF9oDtFVCK23oUboGqep2MsoPrLT7eNM",
  "key24": "5nNiUTdtU53K5gxNJCs7iC8uPDwZJd4KFJD997MpMRek42ZjcbWEuCTFrxcCqAi2DaLZA7e5Y3HR4UEsRnzAZjZK",
  "key25": "2Sis3hPT29UAWvCjdekTAy1MG3BDPxjyiCSj8w7rTK7aWxZrPn1vqDxMZ6tfUammR26tYAiKMy8rxZk6J4MgnVQP",
  "key26": "4fknrXxLwz3qBF6RoLobNPdjn3RCGdEXdNfKc9Xg8X2V8ycz3g2nuE2DaasDTf4tbPvDrXjcDNAfgMteustwqEWU",
  "key27": "327kBQK7CLmfESWowdddy1gGHwzXeB5ESrAwKCoJgTzoxDSZqLxxRE3qiDF3ygShXXWbfMDXpYfRuD3jBMv3Pr9X",
  "key28": "4asAH39M6eSstuNURLfiMq9LGb3bwiaYpfEviXF2JfKt9MxADv663sGCXQJQCLGDSvUQZQwmf31cxSQ3StggABde",
  "key29": "JAp7TbmM51J5n3eDpf5nmsitnYbMuYV51NyMK3iNNDgswn9VdLFB4zLV2PWnjcLNsfVs3jXXNJ1EpR7ASEPLicc",
  "key30": "4G66DqeKdXbN6mfocH9WeDNhQAyaGx9wxshSm5aLXAQV7gLEafXVgp6EqT15afxqf4gzs61T9Y5B88Wd5BKRjAwV",
  "key31": "26ptydLznBTJS4KL8Us2T9jKNK96vjGMni2Qkzu9UW9LCpABj9rtCAL5CXBs2LgsAKxqen6AKJvpE1Bd6EJuL6GL",
  "key32": "aGdRXyC7353imvuw41Wo2kBQK1bJ8cSv1eDGcxh9TtWL2d7oEBJEMMWRTfKYPvzSgWmPGk5m88tCUkBRQXuR5hH",
  "key33": "22ytyXMfFhFTF25g14mU1KibzrrAfWFERXvavzWEVvLz19YvbGH8gwrPSx9yk55ErRW7ffM8zRweKdaMDWRHLbX9",
  "key34": "41SGQabnXbV22YdpKMgB1JN22Vrp1hmBM1GAjgjUJE5atUUwUZD8ETz4puu6ZNQV1HCp6NCpTuJuifqYbtQ5D3py",
  "key35": "4nTTsU2b9gK1y3DfWoiCDvvKSpbYZJVzTaAEEs3Sst3BmCasaegXPoUtYAF5rnmKdU8fgrJMXhpR9kjwW5HviQhg",
  "key36": "491mCKRWjZZFsGcnAvZP96QAQn3XyhPHcQCQH2p8KvJGhvU278g9HMn9PSQGSLzaS9pZqpxunHUoUNozKBCTB4Da",
  "key37": "236ggKNW2ENVUec9Fw2iXBJubqW49MywvLmCu1aKJwGV14S4d2TjTUWd96AZc9WbqLFs5tUEdSvV8Snag56wr1Mv",
  "key38": "4eFkBmaz3UTTNiY6xHfQYL16HCpmz3NGD1ooM2ksDMZTpoRQJVCzyv2NnQTMWcfxV2t3LHW1UKXoG8X1JaBKinzP",
  "key39": "CzELRs6KxsRaTgKmcL8rjbHYhLHZikM9geK2qEDmAs3Ak6Yb5UCy4zV36RfsJowejaE5CWraphKfcx5BcnbxeUc",
  "key40": "YXLapmaTLH7vHk32H9uchc3LyaumPR32TGuVpJd3s9u9jhKpfazd9P6yAhhX4q18ygBmDKGGxxTayD3CZ8ZrXtG",
  "key41": "RNjsrjpsDMdvj5RAG5e54JdoPXiqKYzUTx6u9gHYHBwSu2rySRnheDMf6D1JtBkhBEqJn7bqYCULH9udDnmB9N3",
  "key42": "2FpJfPnWKA2oJUSx8dZkdCzPjnf8HVVn1PwebkpMJWBvZxLiCHichGM6XWJW1DJT7o6Ht8UNJF1GALYdJbGUhzVD",
  "key43": "648u77nPGmn5puN9RMdbzGnCaPzbNsYEenK4Uz5Y8J3mTRVaQn7adKZqZevFGNuAiibu6svVMRRqmzmJfM8LfCXG",
  "key44": "48gpGpBr2217miYLK7udpjMxMukRPEUPqG7ByQqFDRN1ZuMTRcDtpMZPE24KDRKjA3RhrQnfB6X5PWJB2k4r4XJ8",
  "key45": "37e5gStYZnCB7E65Jxgx4ttRtJYv7RaLp6FNeecak6qGLNd5wFbYLUcAZLqSkhsvZBa4J77GZuBcuGtfpeHjvsrb"
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
