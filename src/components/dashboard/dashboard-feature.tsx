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
    "5RoVNPexVasxfqQ1QGZbkhNwgQXrqaCcwqRZHRNm7RtstZh2pJEc622UmcEPDj97qRNLuJoBvihRUX77nKwZmUUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u5m1G95PEbXZuSYvru2iMsQYkXAXk7eR4VTXcaKd27TawjWmRtMh8NmQAPt8o82uSNxDkLVpamiYYV7RZkywPZb",
  "key1": "67MnXA3PkHC1vLTr7h3fP7z9x29a6asFLXd37sT3fwgn9iTrKPPsFA29z8hF3sSowX25RTw41wJhFLhE5Bzj96Mu",
  "key2": "5HGbXWdCAMURRiKRAxDFe4PukC4ANe3EB6XtiXkQEK36ttp9433f7FUqFmPdmkoVb9mEcWTeueLqYkNYcwEbZmQC",
  "key3": "LTcWQzTcZfmdoQmTgtCExKLauPTPggjxw3guwpSaXtsJMkegwGyEtiY4ZsS3AmKFvH7h6A1X7Thx8ps3WYFAmw2",
  "key4": "5xhDqG2MqhtkN5w55QPdLYoqaaNF15FhnrDGqPt2Nn1JYFuRDrGqPc9FSY7eJZpCZR7VdEe4GyXz986ausXgxrx",
  "key5": "2Jzd3d2tarMEunqmjdQJ3cD1VHEUyGZjXm16VArdmyzjFew9jqjc3gTqj7de2VCLiDmVpQNcQboXKkw6tfEBTSiT",
  "key6": "3nveywrhy4diYeD78AguQEpw3jRgwFVX67CNzqciiGqExVUEQVd5H3YRtNqKVQvop873cuj5K4EaMmBGu1wWmhLM",
  "key7": "eWTkQMtTFQ3gbkytGyYR9At8eW1gEczfy3iFWdgfu9PxJn544cUE6nPwRqoeVozKabJx9VSyecfqVRVLAAvhm5Z",
  "key8": "3SjvGCUb4NHTSu6Mn2LH5QK3kBybk8embaKiQFPn9LNntenCSVPnzkNFKQxtTjfjCrdWtyXEThU1zVVpSGJgshzC",
  "key9": "5XSwQmuyNDSje4NoCRQdn2QhjCXqmVqa2gdsvz4mdUsB8MXeLviVFPCmHs479c2UXcGcSZTUABJhTRZZe8yAQqKU",
  "key10": "3aAq6ZGUDVGqYnfV5GoNLdXRpQiJvhAJ5BSKcuXUcy7YgFa2rT1xGKVRGf8QmPjqUdiQXdVJQDjjjzNnGNspfnQe",
  "key11": "2t7yRkKVj9Wh7Kkmay1Mbb5LFaoyAJ3HAZvqjoqvfhEFkKWnEJG2Dcgvk5aFpNg7NmvA6YV1SSaL9drZt2gmjsAp",
  "key12": "546BcUmFRqxQpRvCf7L92H6732XHHEck3qobYhnGsTkKnkt4FMb6TKWYz4F37zbdh58bWjCgfEC7gaFQH5e53xZx",
  "key13": "ouHRBV77ndUS1WhRMbKuvR5oQWqmhfL2JEJm5Pnz2AuuMaSg5ejWmnNumku4aKML5arhtrg1q6wSNSdq22m1jn1",
  "key14": "4Du247JcFcS9ZSg9fnxifWh21rUnRn2XxzEPuEjRWthUch2KGUG7eEgjRSWTiviTfDegU6q4vxxVP28HUd2CAz3q",
  "key15": "4Z5gUiCDjCP1mnMUKJ4g2a3c3Db2SvSgCERCnch13H1rdoy1SyNNtiJoFrh1jtJ2rCbP1poFeLuqNUUSQmyPUwrS",
  "key16": "4aYttRwWSkH7QKFtYFpTh5aByZjKKzhD5AFN6aURFhcPqZaf9VrHcnLBCUW7sA6MzZMmbh4oPyHxBbjPcX5RTWeq",
  "key17": "5iUXjogh9qJaFvupejFQkG6E3M1nc7D3rg7weSDMPiD24ecWmVKDWhBcrWCTEaJnmgxCCGrrY7Dfvtvwr5gqRzxW",
  "key18": "2d4DGsZBtLDprHNhHPo3BHtcKw2W1sDdkALAjp3QUeLbLg6P1if6qUVfRgxmXrAb4VS8PJTwFd5MXwMh8WVBQn5g",
  "key19": "44iRC3VdQcLuHXrRtGt2gXVprvndR3HwzMojRH1tGhVskfjp5H5f2WKv4vVeC8u6xHveB1agrWHCPu5qnbUJFDX3",
  "key20": "FgQuKNB4tG3EfstQbGSvCrovUfxoxs5Bt39dwWsDahXEkSbT2444aXCDyC3tCMFDyaQ3NSQus72EajcbmPN84cy",
  "key21": "48MyqXaJk5gLLjJL7wLQC6u1MrMGuTJhabhEQ3kXViG8Yco6ciDwkhDUi1Ydi77gQz6Ad3t8gNJ19k3aeMwmpoiu",
  "key22": "2wT8gSrEMupybLQiBoNJKMwQ2ghuvv76kKdpYRVZFxUxghHmhqggpPNCerTuEzsYp5WgPQ95RJw9o5Koxbs9sKys",
  "key23": "5VjSWxwZ2QcmDzDHKXsqgsEqW9Pdr81TPcoGGoJZMycH7UJcvmsYmKdKcnxMD72nYfJeeygps1qkxKrza4gonTR8",
  "key24": "giFwc49JfyCDgH6ZRTL8eww5haWZsvCfzKtW8MZPMw4wKLNsS37hTyZwdXcEfS5CfzpzeoGDmH2VYwwFVrgh7Bc",
  "key25": "2n8htPUn4t6vch3JfJ1Dv99CLx7N1aiY2VwDbBspqKnR7B9Q93YEZfaBnqcatJTLD5AMDRnak6Dpf56rcpfDbzKU",
  "key26": "5FzupCKwUwqj9pG7ZFAifvVDfrtZ2NkKSYrovEE1Ecqzrm9tfdRe2qcGtDcez2AC73uUtAh46SSUcMveXg7xC8zK",
  "key27": "2tjxfk6rjZWkiztAguwUCyPxb8cpsnKzZPvvGc2okiPFbvMaY3FdKP4R86hTH1XxZk5cHREsft5VHX8izUtQNcoH",
  "key28": "2qsdTxTDvevpPKeKThrE3itiHuDTdY8cJ93z3bXQpY5Ams4Zy94A1jcPEKwv8DAYfJBcMRmLFbzW2RNrciDrRqMw",
  "key29": "2TNNNE6wtitNojxqT9P3ZKgS5PJvJaJWMAvLxRvQxWq6K99TSfCdqR4ch547w5eDXvrT2JyVjQrqnBAV28ccUXgN",
  "key30": "58onCbMBpwfAELRFdEri31wpZ1RmFFTmmTcvnDwncdxTA3A4esfyBTLXVNGT15mxigNQKtKoaxVGbMcZaEj9CwZe"
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
