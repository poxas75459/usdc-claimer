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
    "4HSp1BssHXdhgouR6uZAhtRNhi1BF68PDf5WZNqmXEcu6VwxuJNZ8tfjTyQY88C7bK6EUSNUunrFqJGJPgmPRxFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kMZXRMBNBXtxBPMyKgAjBN3UuKsCWziMtQ5Ro1Bc7avr15sG6yao1XL5sBXUaMxNuzoCAcYerbhTDAifKPPPqDG",
  "key1": "4n1JasfFTmtMNAFy1E8bAcRA2qPVKb7Zj4NGpgNRpDZajP3aAvwprqhKtDaMVamWfHf64owqr8J2kyDmjNXkejyH",
  "key2": "4tEHUYrDNFSdsE28fnP1s8S9aK5VGFYwfjq3w4uc3rMW1g2JLdjvr94XwbYKyft3QyJCwRkLaLQdKFcHbycPpaY9",
  "key3": "4pkNhMKquwTGiSrZXehAzds666CnPT831zAVToBsKhSLVTGRJPA8pnPCQPWnY3rbN4fwdT4zSaxotSx6Xk7RadHZ",
  "key4": "44Ba6bY6jm1qTFKosMPGqoUtrxyzWvTHk9Vdeng3uiSXXQxxjvvEp8uBiSK23Qs6idbTLxwQM9thqT65WjVR4Rhz",
  "key5": "U5PepQqC6dkwuR9WrKhWooiPSo8N9ob5Gw3bLKbwkpgeUcYrM3uDP6izzZDWkRh7ngh2FeqQNiLPG3BFSeT3VoG",
  "key6": "2YsGUEqvjHNLBjgQfKPtuNyJUUd8WCsutkPQT3hhKQHYZhBdnU9hJ9jXeK5BQ4ieXoVsmJ9YTEVtekivqGtsJgJC",
  "key7": "61NJDHn6SpA6yesu9YPVpmcSegWnAvWYXspiz2QXexGMyLcwfuuAei7RUHFs85u46UMqq5FmC8dALSBn3xWHoTWT",
  "key8": "23zXgGU9LSEeVyxZuUSR2QhD5D16sF5dwyvXeaKwmiaLPmxDdYgoe82h6NzhzkC7Jtwvj24HsH9HAPfbvhmRDcUV",
  "key9": "4yYX4eTmMaz9423hBBpY1jxJLRxT7GcrRSLobGp6gYf7DunWCT4T2AYAwL59Mf5HD7u4BCpPfGzFFGmXj7iPBqBe",
  "key10": "VANeNGAMQBqWz8faNP1Fwir27gU7BxaRJpLmG2hk6PbFchMzpcG3mZZ8tBPwMhihsNeesExiDZEtQyRWtxA2N5c",
  "key11": "59tUEkUUZKcXLey3UaAnfbtWt4tipUCLXv8RxcDmsLYLdPTPfrcyssHuraCcgcwjbiAHgmHM6VhpJyNoWAJWQn4U",
  "key12": "2acmDc2Czund4nBoQU5r48Pw8JuZJnLySDzWSDSskvaHPkNCPYqsToA2P9SSfFayM7Ge6q1FZkXoy9cHCSw78MTW",
  "key13": "JL1tKWufmvNyA7hPkDe8Zf83NEDM1aY23x6Kfr7XWK1JhhoYhwLAQgufmG1oPx9Dq25BraZaqXYF2GrBAV3ea8i",
  "key14": "3XWu8cuU19P2Zruso6tii8ansHcHBxQxtqcVa9PKfkjgANzfnfH8MiztzW5BuyugRYbQi3Cmyf3c7ZMSjFdBMPLt",
  "key15": "3ZjjQFVNN146N23yWs5VfMALuJ6vvhacSTU1cw7vzuT2nvxZZpimuGHA6cQc1q864RPf3tY8jHH7fHexnjdxhTpp",
  "key16": "5H8iNUu7RXpxqorZoEXUf3jE3wbryEDfrNHAJGPx8X1HGnaVFhJyjnq3cEXnSKtXU99TmYzkjnhUBH4AH4pwDJPx",
  "key17": "3PZDrxaTFcpo4N7u1UFh8fhY9Cwxj8hemiEeWXTLUvCwMfu9XWf2YS1Xto9cCTE6aHt9MVMeaqKKUz9K8L1W9sUK",
  "key18": "2UceQ9TXPvNYT8bo8dFjLANgNxnSfjk8Rqxp1ca9vtd4Qawsk8vztwBGDWaQXsS7V2uTG2hn9v7Xg5xcpdFmduum",
  "key19": "2QwqHrQEK6ZSogkwGDftoujmYCo8JCMrFHLdH8mAAGbDifDiVtcLikmjtTPgDXAZfmUmEvU5c4RXKx4MqLJYju7A",
  "key20": "5RbAWHvcujdNxczGyNfQjWroatrCSuvhgvkh4kHFtk6NbxFnMDR9i5CTkhzTgdXCVBDmg4roQWtRmJ4VFPcuy166",
  "key21": "WNcpPqwPhp6wrB3vTdSDG7CyJuqBmDMqgfmkxE3mpbMzVgZGTMQUVw9eyTBgiKzKie2YjdtNEYSxUwVrj81ZBHc",
  "key22": "hH8YEBLzVGutTVawNeKGe1ypG2FNNvJpWH5gCkeAmMtW2W1dypzGFCu8MAaTVf5Jnm4FWdGX4pWK8Qw5XhnYddp",
  "key23": "2DWtos1NQFhSJZiEDn8FhcCBLutEXV1bMSvmvoWWdzj6UP8jvdicV57aTiX2kg5kPDuSs4RsWzBi92C23xBhkS2v",
  "key24": "PfSrnZaPBTUyEZST637jTEdkKmxWGMHVmCVDh1JfYYhEhuPWnF6KRqBQdRJQbRdjAwotgV5FoQbR3GMeNz1QNWd",
  "key25": "36yCc7zxt6VfduoYH1NDUXbsyVtifqEnAFkzrxzspndgR8nD46aHZxkeh1EjvVdf8eAgAWdiG165B7k8qCVmiUuK",
  "key26": "3E9mUqXw4mkSpXPUWdEHTYDicxSjTpcdY4Lv1L3mBoiQKcooKSHs8XVJmfVgfFeL5PRdMd1CmpQZvC4Fgkjanjvi",
  "key27": "4z3Tna9hQZ6bKqRsgXXwCmhZBjAYH2urnyh1i1bqqDBzPdBoh6evA2gXsEBxGNBMLXKsyiirHGSUwcSYGjFjcZha",
  "key28": "2M8pb2koHuwN3xcg1hKNVJM6JmBCs7JUpZYjvfNi98ErgJiu8mTjouqRPQK4h2gY3DStY7iPWHJ8CpfMkep4ZQE8",
  "key29": "2agD3DKoLS36PYwVWPpRq4xrztPNnfEed8hoeC6nsdM4nWJHL7gQLHBMbz9YoyoNs8D4nAPPAjeRTn4ntkxh8Nu9"
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
