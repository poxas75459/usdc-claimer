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
    "2icp9bFzFUMuiPd4P1chtTb4D96qF3epNVEU1DPw7YKpbHHjR5Wo1gAHo6rVbjw6djjGQbzqG8ctJ1EtE3wj3cSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZAuXAWV7wXUmv8tMfNRjrZiM9L8qS2PpwLUUAy72oXr3SpqZyRZdWkCZAezwZLeAQVxPJ1s8tEMREcK8BXE7t6p",
  "key1": "2ipAE9XdR6qiypsq9BPzxbLfjnfXtY1UE1A2a4ExNKJWxKyGBYbXP3y4nauuk94oCMyJ1yEv76dLcqpovfc1FgzW",
  "key2": "253BBs98kRNzp5HdUL5hzjrnKtQRTEC2Ji5MUwFFy6VB9UwCJbQ7nMRbq5Ff19AnVsCgdWvRsrcHZC4BMJnhjwoJ",
  "key3": "inc5G28M1LBRCXfawswTdCyLtQrcBjhWWS4LVUQSjBbCTxZvTLWA4DHAa35NgN7hStgDpmpgMoJF3yLBgsQb7yq",
  "key4": "3fNXsRr6b5fqVeCm8pFmDqPbhrtJe5fTiz1YbXtztN2SzXXKm8QAu3QMQ8hqHmXCLZ44tqnHLxe3TaAAMy1BStuC",
  "key5": "W39KbMLgoRYnXkGwvFrhBubj2ed2yxYFsTtLuyPrcSqxNCG7EYKWnJFD8Gc2M9tmrjPBATrA8FPyQsdsGgPvcXa",
  "key6": "2n1TLmJwowPLiGRoaAGB1pxuE7MKo15rSccK1odeT1q8NBXJ5TGvVUpuQrNqZExw2fGVAqtm3NdFMtxUcCFDbCF2",
  "key7": "2MU3rka5qfyx3cd1zjNKsKqiDPjhRDsgEyDJ8fPREiswK64tqcjqGSxJdMZFJQq71u7EMwuDjJsgRKTE5psjuXkn",
  "key8": "2tSEXy6o1FNCxXTufx892r131Thaf5mzACy4LNAEsFqtGWtwFRHsnc7wiEZUEbTL7wkRcgv9L7BJ24N4TxAttrAy",
  "key9": "tRb12VqJU8Maz4oNBTZ6DxTxMFthsZM3FHLULvADe3hntnTL2o3ze1ET15y3mynny21SkFUN4XRnxVTqC1CkYkW",
  "key10": "JDKgRc8zSa23HRRL7giSQeRtPNEkx41DgUCLMqGmy3wDUuqreSbdyy6bTkNWPYtu9JdPGcA6YH5FixKKgQyC8E5",
  "key11": "41oeXoLDVRiQeTuFjMqr835N6onw5jGmjwJ5a4BiURE293kWMrn1poN3XvdzE6Badm44e2dQMpPPSsU6fDvyut4E",
  "key12": "3mBNqkMiWTPhRNtBuH9ER7UjK1TSC5bQ9azZdwGinKuiii4njc3aNp4kfMptUccnyKBPDW7eEUPhTkWEnHDi9WWx",
  "key13": "2sjw73Aqk13HPG5vppTXWToEVhukZWpE4pRYxRVPyK9QEowMZ5VnP4u4bHhoU9k62aziQhrithc3UmvM79M4UdDc",
  "key14": "5pDdDBZBRPkdPLo6QMJxkdqBofBbPWo7Pe5JGMRy8Qkx2GM7oPEuSPmyKiMGwxrsiiuhLySqaaNqsVmkoKJaRqTP",
  "key15": "5QuEicaZU2H5Y567LiqvT44PiowUVweo4y1JEPfV8kHyk7uMJ2jnHsqCc5GLmjPgPk41C8d7ZGL2x47xTLMPcTv7",
  "key16": "jobgyiNoeeSE4E82ha2mLDtY9AHe6NuYLcTiSYHreRc1xRsYz7msJ9CYjZhxUF8W78JVVW57AWYAWRideXQJu18",
  "key17": "5CiGjsz5PQJyW97wnVMoihniJMxZEaUJWARpcYEjApXKKWiNDbuSVnGvMdjf2XigEoSR8ECQbRGYzyyFji1n6VWU",
  "key18": "AkG8sajwqaxq37YS2MnHsc6RZyLUBcgztoY1LtRZ3sw3c5YFVXthrWFaehdKhkqrAQfPfTuX16ehf3RpkbFg4Xa",
  "key19": "5f7L3d987MV376f8owjJDVBsvyRSa5Ft3kgRTGp8zxTF6wWurkcjXNgRAWFTmM987KzPCKL8LAn7KCFaMQvuZYCV",
  "key20": "yQJE3aeLRMiPmie3rXiMJbox6TAzQnpV1jkXsJA9HTUZRYQ8u3TBBcuambxbYBHx4piBATrUeqKt2uydKCPt4xb",
  "key21": "gohvGEkSPfGAMoTPMQFWsCAtR2ahZj3EoEQu7TFs82f29e8VZWgoSJfcYV3KPrxz9Hc8v4SeRLpRhWoX72swnBt",
  "key22": "3E2eQGW4AaC7dBKs9FuTpyLke2Nnm76wGSzaBSDuZNDu6EYVFpgCe1DQLmrSvy7T3UJVM72CFSuFcBpwsiDt3hef",
  "key23": "5eXBNxFHVckGDcVnBukGSJ8UW56efScVzMXCQ9Uckq9HkNyJbtc98JLx7jMu7Se2hmiJjZDVcv6mXG3HohVn7Fi",
  "key24": "4nK9cHina9dGryHpor44LzFQw3zTTF9a84n1qiZUVn6NsLNNpumojDSJX5UQRBZRRyCPyezy1d1Fpzk6Z7ZhuG7h",
  "key25": "3BKMgFhyRjQu6CMF5VPsySjpwn3NurHXmKF99QRmxQamsQY3jac9j2fTW36Kq4DNaJf8pQd4XvpAf5cwNt2rjRAn",
  "key26": "5FZTSYyrXqKMfhK2siVQE732x68rCS1UuYSTzv4VyofKWeJTXkHUamMwA6P5RANBZgC29yNEQx3XNLwLDRWbmNh3"
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
