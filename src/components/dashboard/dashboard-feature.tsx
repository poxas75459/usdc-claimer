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
    "72pDEqtiZX3rw7qUUk75dU69Cx2RWZjvvrVF99KnCKm6uvtZkYtVGaWSfvN78Mv2Cn9f9L5jrD7DCGoxQcY8Xek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z7BKFTbyWHmYBpBRsgJWF1QLq68eCQSK69oZSks2iyS5RtuSANDbfenL7L3hjL1akoX8rLhYa4ZLbvCjzUrLPYf",
  "key1": "4EBsdgBYEwBs2qvDojDMyBjw1uLRKpiRzqTpESFTcdLM3FEPA3wk6XoWTZaWWeSBNuUAj1HKZTVHEZV2pL5evoi8",
  "key2": "5nah2QRfc1G2UbZYsWn1BFLYVCt3XekcpaLUkrXZQEZHZr5uuNMJkYtmaiQACXLakWWbrqJHh8pUQ8wYSBsJq8Fr",
  "key3": "GvCfCBNKLSk2jS9YYZp37qYq7ngFV3AKXwajr4VqRsT5UK8co3fiC4istfwGyBcwQAAyHgQLUD7dfUuWKJiCGoM",
  "key4": "2hSrscCzAnhm5JzxFt89jp4qFw9GpPgmAdjrBoQoNw5p2fPqthu9eviGnSHryLAMV9HGbAdmE6mAK14RJkivmthd",
  "key5": "2jBY4YfNRnCEzHx3LgUWJd2RThMt5SJieoiYrpPMjAYq7vfo6v9WJg2kFAPW6Pk8XYcSCSqJPtyRLnsjBt8uUz7s",
  "key6": "2B1DphqimoCmfKCabh6stHSSEDCuSFmJYxofU1TY33NDJ2GTCdJn7TUQJCiAich1eMj7qWq4i9JEHQqwufJFF3wa",
  "key7": "5Vd7KKiN2vMbJzzcXpTxGxUjiF7Nw6h1TUM3XiNQCudcZaRUY7VJEdLzzpjaTeJoSxVuN5ZC9rb2eqErG3VEB3j7",
  "key8": "mKBNE4THYX5jfxbjsm58NDrVcjRCGNsSRKssmjsHhVm4njhZnQVyTPTziDngZiauW1FGwXBGhBrHhgtp7x62dky",
  "key9": "4fg9E6dT5hV9N2QYUemuQnxZTBAXmquMaAM3BxqGLJzRxDZRFkXZjrup1iGgbPNiHLVXAqX4LTXAjHwbyP9imoPQ",
  "key10": "2TorB2Sw6am4FktdN7uYDUCTaC8pzUseMh2xYqWpqm4AMsHSWGa7V5ZJ651X92DxP7N7DNQvq2KEL8KCx82yeoJK",
  "key11": "4hv7xeqZMaC72mc7dgatiYBvPjsZRszv591d5LtFwq7VY6cGawH16AQMJcXecWMBF4DwA1xVVnZMcUB4uhCHC5A6",
  "key12": "3fo4vADf1U1rof97mNYxqoUkcByPvNCM5eKR6oghEFAps8e7w6zNAkPevfPaxs2A6mrXninC6ALjd4r4YRHhB6yR",
  "key13": "3wHKrN5Nx1XME5wQonoGv6stpaDDcmiokf2AyyVQXH9LAboLkpauFtcyXeVLJFuUBot6VBsAY9wPDmwQ1JSJXkyc",
  "key14": "79shMDDCBso8GzVhgERZfGLve6tNRQRWaWeiiYTJ6y72szTaYYvEruaLfbVyRTHRHZC9bT34qzmZYkS9reYtJPF",
  "key15": "5EQEi4zfpG325xEtaMHn3Eud25VvG9MQbD1jrFpy4h2dLtkQ4PQeF1fFd2rKZqYQwXD36W3ihRxdzwMdLeyFT91n",
  "key16": "sfTXxjjugtQ2oyPd3dAxRkAZNqoUCiaQJ9WZqK3TTwyh7ztUDUztgzJtmQMRUECJfNTKMEr5eSzNEocn7Z5MD16",
  "key17": "i5MEhi3J2wMtseGCpiHfqvreePkRcpxP4qhdKT4cvWZe4GPqhJJVTko3McMZ1YLNieoT9xkaS666P2kd2Cr9JCe",
  "key18": "5ESat6nNTBp8Y3nHxtpJUYPcKn8PdJY4hpbEbaq3qsAZywFynz4Z5tVFwkeqFnkWAE9St7X8DXALjNPzadf3oSgb",
  "key19": "293xNWqvxSrn3wwdjnNWzAdZdbNZjzGQsQUa6ScvSk9VfPymfksgqdNZfJAuN5fVyEHXkCc9zds1dcQKrXNg61hL",
  "key20": "8JsG576f9QFviifEUHnt2SFEgRzqafiUgXR5Ra4TryRW42sBGmtPKknC9o2uFXtxgZYufdsx5LFAFDuAi7P4uYp",
  "key21": "o5Xje42DXLwyMMhABYR897m295aADSU4FQtgSaXNx3cjkbA7Udnhdkfwmh8PL8X5gduuH1viXnbAvfnoJo2FUv1",
  "key22": "5ZrAx11G2oSY1Lj36qze4BG18i7f8HjUD24ySuenty8QaWgWYLsVLLfXYWeXMPXy4uYW8HoMjiwMV6u9mdHJw6rA",
  "key23": "4Xgin7hELYXMaxahw6PreyKgSfkwo9picaGprZ4A7FY74B3ohYgwCqU5vC6pbTFSGWAZPDpi6FPEPNVarKsZPjLL",
  "key24": "TMMsq1ta3eDWM6ujrBiDkR1JZpsrhmmQCk2BdhQZCtHbYVvEJ4pRVccGjh99ETPF5BGGZiGK5L5GhRbpAYC3Lji",
  "key25": "fgd82Tj1X7qhtvkgQ25AXTg4nYJNeAW8ih3HAcUzvs7hUyP5YFzVGozeSWepg8vX9u5NbewirLzgycyknvbQH4J",
  "key26": "2QbThietV8PtVw8RprMyPvvraLJVfQUh5qRY2EEWXxAUYx1MAm3Xu8XkPa1P7TABRJ6cKVBtwncf33Hpz8XYL1f1",
  "key27": "bAXepSfsMrKRs7nAFJLGpQLBcynT1r9MK2x59pSKapBGKSfbGUn7RMNv7QD7YBa9zSyd51SoNLSdxYkgYLR45JU",
  "key28": "3Wx8awmCWRxudkRQwa97LQFcauWVb3YhNVq9zQkPX3hKThZmjPFE6jW7FhxAoWYV96DMqrLmvLXGgEEQN9hRFJTw"
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
