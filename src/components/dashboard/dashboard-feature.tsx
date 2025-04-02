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
    "2T4ebwRXk1ywa6AkT8V8F6xKrbtPaPQr1nwPofgeDVAxECY3UJMpevyGJ3DrwpWmh62HcDMKJi1cEVMovoVFkWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43tGVBtwQ16PNnEvgpsf8wmPzK8Zd2wf2yQMbPnBpAAYPx388JKv6NRe7Fr9HboPSbkBY1dKgQ91gLMZiT7fGkiw",
  "key1": "2xMh88CmpfVMkpvWJFzbMDCfu7bpryECPCQJJySu43Ro2kk44PpYntpUUu1HRtWZk9yx6izf8fekk448ZuG6w63s",
  "key2": "5D3SGjWERracnZWMdSMujKd5av93SVm9RNa9Ad6dfqiweZHSyAaUGwWpSwf9G7BTzCKrLEEY1jH31F7xdLT2dHpk",
  "key3": "5sZuteTc342jaLs9XewR5RDxt3FZCsd57UhE5yDAPBbRdfMhEvDJR6e7fVnEietExnjVsB29RUPN9XzDvWneyzaD",
  "key4": "D7UmCS3DWcmtXrqHppyp5nWMKnQw8Wv2cCWs4KCLiJ7z1p5DPFybjEpgpqa3EKfdmXNRREK8cuQPLLv3yXBRAnP",
  "key5": "4wSn8SVQMnHtDEZfH9vPrn9kkGuA8F2tkiY1WAiTbXcRXP12R4DeFRTMVAFVJWevsdBwCGNrh4pNkz9kw5tqEkUV",
  "key6": "2UUDVYzFbyHJK5v3ign4Cyycrb74ejnPCcKg7qFanoK6fwVGEqd2dRzqw3ohSjGVWq3aj4Veo5vY68psPBbVnYp4",
  "key7": "5EmEYH5V2mc4ASgpWRZu2ESopXUWm6qVYLhE3LWEmMHDfHaK1LsYpgDFfaVAN1M2hL1buA9c9EZ5cZMCLytahUMV",
  "key8": "2RBypvoCLMmtSfRfHe8PFo2SptjStUQgQVZ88GCoDDcVuiPRnPRsAJt5gs88R1uHVrPrBQtuzwvhCZa4oKdokGa4",
  "key9": "5EWJ45yFohhPYh3vKAxnLQRgJCicsRLfMwVDXWFHAuTSW2LrXTTenn1e6FVsYmUQewozCTaSLhcBE5skJRCaYmrT",
  "key10": "2e2NPuyEc2edtcx5HuaJuMbcPCfgiZAKNWqYLFPuoo9RtdCSUUrYP4zQioFpNZNc6Vm6p5StXzxjmcDQGLJwEZUa",
  "key11": "5KHB682xoaPcrymfHMgTauu19tsMnbsWFdfbsW9ybUB3HC51GAscfmXUz7SXdBPBSJMb1Tt8GY4rPjkhCQBr4VZU",
  "key12": "3JEJphmdfpYikq1Npc8ce7cybLiC4rdGTHbmx8BnymVmQZY4axx8PrE5p4Pz3dnqxLo2YutcKndZKFWDDyfNFep3",
  "key13": "2imQ7m4JeB8YtkfJcdsjw9MnqxdWUbUr36Vvy9EfHGWYymkLGu1BFxCUfB1nJCh8RG3TxSQF8QgtzSN5woTSBKx9",
  "key14": "3qRXWhQyFyyB9PrCZsKbPQHzREYERPFUDkfVEVavNBaPDBzBHGX6JWuyqsSDjWASsPBc5yb9MwRYAEhyumekcQs4",
  "key15": "5aeLNZB7LmwFFFAsnvzKStv2Fr57p166U3sCzCVQMnsGrkmq1qeV6KH2CH78dSWWoquPVhQjXZo4jAwYdSfucZ8f",
  "key16": "46FwK7rcEpYUzWJzTGU5yHm3jdfoXRvqKUT5ZhzZPVJHPQJ6CJ1Xhz2tBvjgS788AJsCPohD16trvwcyzuGMFr36",
  "key17": "2YkMiiPkuVqcZcBepsujuabj8o1bkwoWBYL3Pqiza17awCAt1e144z56zSEmfi9j5bSkU9CyTxVrSNQtepBXGjpM",
  "key18": "A2wjBDLwBnC28ckHzkoAyVmzz9yLyNWZC8wxd3yR7dp6XbQ2Uq7zPVCexGovDKzCQDRGZfQN56KEX2tbZnnFZ7Z",
  "key19": "3hDXMBh4b4iVwXirLyQ1qarwQxsB2zRFdM9ApvjZXRDCABPcUkVqu2ytvj2FQ7BTdqY5Nj5iZcrKH3KEJzofGCjk",
  "key20": "2g8oL6fh7nMYMjZAfvG1uapmBzjgFuTDeCAi9cwQBz5j1t5D4TB3Y1LqBUGbcNJJRGj4xK5cbeCnbVn19K7NLKQd",
  "key21": "2oih5FPAnTewzfHKSPFkNV8nNPo6yKBbJobdJXBUGooDHrx1WZkMyb88coHLU3nrCuC8EnA1jzWEAn2Y6en9RbLA",
  "key22": "5RgYnqPtLXPrvsUZqeXmM8TCkegoWAXYjuXvVF4BLTYuEfUVpYbwDkQfgXY82RHWR4t4PDNFordqQcqB4kWMRjX5",
  "key23": "ogtSU9aLqErGBXhj6bMHo6zrFLMAne6bT1fu22yn7SkugqNygz72bjSHwY4a95NtoTYdduApi2Dm2vQ7rdi8HZD",
  "key24": "2dweP6epNaNGYgdrDyf8FQJgaQHEupBdYNz35dqzP2Qi62KDn6NBptqD7MhymucbZwfHx7JhVDxQhSMjfKxkxuWK",
  "key25": "5Xrpcu9crQSY1Lgi46yscjRaQpDWDQzXE8MRrvb5Fj7smKa45FwoD74c5fg7BiVYomh4sC15788xT85g6n3fp1wA",
  "key26": "3ULJedyuhtng65VxepWcFQVxVZ5FDA77S3hBWegGTfDcko646a3eJ14ratdu8d1iBUseUgTMT6axQVT5epHAbER2",
  "key27": "3BaW7fzcAj1o6AxMCh4oX5QKkxA4CqPuBqzetj8C4zmhrNrkjLfm8wNgjdFadh99BnLtBr5V2onnGpaLAbPptKC5",
  "key28": "5X1jm6esTq7yyMs3mRctSdSsRGyabuX1MYTSJ14M1KvLtD2zCZML5YtGfhkZ2fgyA84PdLfxKo4Zn6F4U7mTTGww",
  "key29": "KipoC8xVgpiKC4Gypo2oXqsdLeH5fKJrg315ZCCJZDUZVb4rHPvXf1BdzjmfkQ9QpxLir9hsXij4TQx7uwCbxMw",
  "key30": "kcR3NbNW1KaxKAchZxwAd8CN9XFcVC1SvyRWz5kGPCEUr7WeDiYBQ7SrR3UdQQWcAawQpac8UaSs8JGCEJHwYUk",
  "key31": "JEhSN8u7GgHYkzGdqD6NTb7GGBc1VhADiWMHF8WxQ253fdiZtsZpWTdJJfddRDcWAt6thr23aeQLd1u65je63XB",
  "key32": "4ntbh8rCqxBP6AoeiedbW2neM3BVZViBnGWpYFhUgn5Har2ZNNcNv4dPskBjyTn6bfkyYzi8RR8A55Zu7GfDTGNL",
  "key33": "poPLbCTmFPFqhwvZVTPuNYMrbyMkoMuoBwPdT612rAsg1bGqbwC7aX1oL2mSG9r42GQX1AQY69eMrBpsw8gDEgu",
  "key34": "22HAdwUhTzpEA4Coe2Wswt62fJVvXKE8VVky9A6WATYs6yVzx3NvEFYB47Z7wDSaGMCce9YvsXxyGVDM8T9Tzxpn",
  "key35": "xLrT3DLhZnGJDTsvsnpsWXxDAjdZ2xZMnCg3AjDgQPFMP46VJHvW4SQefTMrS88htRT3hkN9dUHUnnxNuwm9RDp",
  "key36": "54pMKcpQWDHbVm8grNZBSb8FtG9F1DbhiNCn41ybabVwMXqCXjwrogKWp8mjhv8SoAUG3DhygjfNZeoUnHSoNSVW",
  "key37": "3o2by3w3d9ujLTPNDCdYLEojJu6HPY5QGfhA3BHU14R6T2nkSc4eDQNb5yoRoMkZzAjJ9rNSjwn2FDDxkRtVoA1E",
  "key38": "5r9wbXC9cX3zdsKjCyeCWYvw2uyu3ADxsc4EHf9WxQ2UyLfxk2BaZvhofU5CmZLyZ3mwvixm6w2p5ef3UomGFkLf",
  "key39": "2NhFwJtFiLGeT4yAucrKhrFykrXNRM5aFh9nPBx7QifBnN5HdFvnCfjMPZBAzxx1dMRMLVwYA2gE8vXCirXnhPDB",
  "key40": "614fECer6J2YdqEMwCaXNTMCN2h78dA5jKHqc5dArEpuhVZqZBJTNweUuxKAhr33HZrkDbXikwZZvySsxHC6owib",
  "key41": "5dDEWeKWmr6qWGYg3C47SvFEExZTE7WwV5uryKr4JpdFh1jRTEgoJQcGjDhES5HdRqL6s9H3L9qUi825nsF5ypdX",
  "key42": "2urKFWfbgqeBfQzVLJRiqYqvZ4eteMHNgZgxuaMzdEsfeqfZtbcb3rJp9wWGYgw51KHbeqTwddCkQaMMG697jmph"
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
