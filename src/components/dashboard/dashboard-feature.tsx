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
    "38gTLd9AJeoNx1pHaPV7i5drdZNUvxjDh5jEc6i74WBLTj3wvooTPJEMuV4irYD9TqSuPN1oemzT8Uh7CB4x4WiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ouPrGrJmK5aURjRE4CanCwJeu7wG8N8kWS8dh7YqeHwMY4Zjy3zw3TCVQeNW7ez3LfDuy5KPk5XvXuzonDQAhMX",
  "key1": "2tgQ4AjYq9jNmbNWifSCNggimr7D7wMbyNRcs6fsvB4nQvGsAAZr8gxCMmTSVQdhF8zBqhAWrWzvcyynQRHNGZow",
  "key2": "4RKaATiykq3XcZeV6GFVnSFuShdTxsQjTTSc9TUtKjZv6fUusCsYVKQtZW7ZVKkEV27B2VgjwBHoakdeh56Qh7Yu",
  "key3": "5EYjiw1yEDGpvxBfecHQ4qgANm1xgi7CfxDaJy8UUpgg5v6ywRRmDK45KxBb2z6B8XagUkbFZngWCXxYASMyZTdY",
  "key4": "3V3SGJX7dDqoFyNLbzP9kNie3SNqF6CiTSVt2QRwd33ogmtFTaXLPdZGikJEj6pbMDi6CbxkT2XoGrUHNtaXSH2",
  "key5": "3bbqLzBXQryX2YC5ekhmQFvnqAURdBUuRCQzFoC7zx3mKPXNVNGqp4rjYeEffquvfrkfwAeMHQZQgEAAwYCVMh7C",
  "key6": "5bEhQYsvs1ZV5NgRcfUTiXuuPWNjEEh1B1kxTuPSuq3grnE6icCUVLQxMujP5DgtEqhjQBtM4Ji3m1auGHqyq6Gp",
  "key7": "2n1R1eNe8WyALSPR7RPQzhCLeD4f6NXoy7KZRZK9PXSfCKs9ZtF4zAHJXUTZiFLKG2oxG3jD24kn7CFwTkPjN9NU",
  "key8": "4Hyh9oKUcRZpz5ekY72Rx2XZs28G7uk7ZkfMvZhEYAB6RV8tXjnLPYzEeYqLQbg9ryWEE2hoTxS33gWmh1RFSGHT",
  "key9": "rs39NMeDmiZftVrwSEawd1M4JDCYUp5vSPKGZuaaG3FFGwxk5bJrigDTo6fpRPvYXmqUctNziNMW3b6VADZni3z",
  "key10": "3559L77q6A99uvjLW9cqRqAzYi3exza5ACVy4MS2GF5pNP2K5cTaFc4cH6sU2nDhcL9uM5ve55wcyfcFBPDkkhLZ",
  "key11": "29MPjCnSmVsc4kLo26kenNi4zSwq8YEMD8bMzEmZMtgcgFyK9LL9JdVW7zqfLvmXFxPsxfM8LtGJWWCLhNu7jfZa",
  "key12": "5TLaobU3iZr4s3FHj6iBoPVhLvd1SG67NouDBL6ynXADfJ3q1L4NZ9axvUtb7Z7hjJZ4CAnFjMhHBCMogh2G6vZh",
  "key13": "4SvMymxth66x5c3YqGhUWSMTLNFo8CFSj8vGG2RtKujBaVAdCyWQsATUdvkBRwb9449vF8G3P5aqrrhGxMJaAXrR",
  "key14": "3dKHXrAepta5KG4afzeSNbQnzrGiQT1VEb4ay38Pw9wj4cULNWgzKDYESWzfaQwZ9NBZ3E1qd4GAqHE1F5U9mZ4J",
  "key15": "EcUXRt96gv8k4NbrDowa6c3gfQULoTDKs15PrSCKfSexgoEHwDAvaoZMznqnF5nCXBbbqWwmmyrqPidrR2wuBid",
  "key16": "3uVDDFdE2U52Pk7Pg2Jj4A4MNuQcMke6HhkSDvtJoGCH1rST1PcWFJAay69m4rRCtkMW4cEKmnGPimRxe5qDJ3tw",
  "key17": "vdeawnWUSXUUiDN49BSUcshkJidEfyphrPPZ3nEkm2ctqtvD65VteMwbuiazocbibh3WZmrmiL59SdTJJRTg48a",
  "key18": "4xyybMNG9v9WnFdQ1Suh9gjonusjRsuEhKfmY8KZizhZe3vL46wM2mZfkVG9vKqgUbAADPe61oNaYBmkmf79Ce7b",
  "key19": "44keR45EVaFZN9h6W5m3m34XPCVw8yGPNacoKm89Qr7ctHGFhfTLyeeKKtv9vVzYpA6oYSTEb2aBDHeahF5R8E8M",
  "key20": "4JdhV5gDKqFQPk3BpobrLFC93vzBwCrqHUXepCdTDufJkmC9UB6RMCxK9YnY6CfhoKMqYiy5QVJqfCayNkKkhLYf",
  "key21": "36YhMLysTcfdRybktpDWjJidGgXVQ1G9hcuY6ZTGwpsDer24XX7YbmvB432BmntmRWo3Jdo8nGM7xcYdpAxnfncP",
  "key22": "3Lpi9oKqRsGDdFaBrdh9HSp3fFhtnJ1vETqLRZQ6waRkfUFc37rveZ5iqQUqGcUnTx26LfL6UDxwVhKjxfgnKquT",
  "key23": "2pY1Bs1CKuH1QNrn88VaFkA4Az7oi3cDSs4H6FYfBWPzepX2zbapS8yqP84nuUwEq5ffD2bCyP9rvCrxW14Hnj3x",
  "key24": "3SjeB6wUnCQ8mF4B5nQw6959nNF7TPbRVK9ULdXg9bkhfa1gGPUXonQyrmL4eajotY1Pi6oRmRCzkCkSi31YPDq5",
  "key25": "3YCr7fsfEZwPn5mEoDxD2XUefapkkQQH3wcYtwku2VGnyd6DNnidjeRHz7MGJKGtYHWCcM3VaHCKViAbfzu8aZtf",
  "key26": "5WCGfjwARedxUNj11ZLKYxcLDyxQ6Y3YWXZe7h1TzaPL41bH3Vxua949PZ4S3tBb7zje6WMZZ92JoPMd7Zs19Upb",
  "key27": "2G8K6Hq4r5mABu9mTJhx8zxK6fF25NUESYX7WShiD5nyNJKwE4TcDJwa65gNhFscw9u7s3RWif2kMimcNXY9epv6",
  "key28": "v4L34G987mKhet5z6SLDsVS59DWX7dkbTZmi3AZwRAg7HwZ7PBsDSUDH9wyuGsdhHatRUTKgmFmBpwomqaqn4nh",
  "key29": "46L3sgts1LA3XUbhzX6QZu9BRT1V5jRE2bVjuaQKBH36ciX4RUw8L7uwYE7kesPMhjk37DiJAAezxFwt58GX52Jv",
  "key30": "14UxNoc7jX9EX2YeAK5ECfuEE9Fmu3baT6m5DrgTD1gQK4ySQgwX146HAERFgL2zSPFaAGSv1uZyGvZMKrtbRZ5",
  "key31": "5U6kEN6EaugzMFfHUkrF7nFr4sSv73nV3zbC3Znop6hpiuGCyTb286ZFmTrogbi5MSKr8tcNrcF6yoHbWiYDwcG",
  "key32": "4btXwUa5BhZXX2FEvbvzPtGr9EAqJMytU43bsfEmTPxN5G2jjKKADJFJRvJnDXk8vSoVzxXdsA3pd77kwg8PaLQJ",
  "key33": "5XqV5ZJ8sQVf26RqyMf93PVfibE6Vzb4LTXLvSEhFQFND9iLesQDpukjBFpdeC4Lu9t6TkLFPDgHsfMhY8wquUjD",
  "key34": "WW9zQWHmZCcYXx2pZmZBnxKJTG5LjAs8zDNE3gZkJHsLTwLJKUHpcWKdeT5pRdJwsXy3a27TrvqM7ERoaHxP3AR",
  "key35": "4Go9xmf7PjFstJfaXXwmg2DPYtxdJe8f3aXAJQgtCYK2r1aB7FFfBMu5jY4TVgEnJBimZuqYg9u1TUX7aYDrK4dU",
  "key36": "4cqpQELb7ywwLudWxQu35jCS9KWo22yvMSW94DrsJmG6iToeGVi97XLpKVwz1Ht3NLfyfU9J6BqJ8oHP43mEvEvg",
  "key37": "4AJVPgNXw2NCW33MTH3unQedDRp2o3DTgQQrAwPWAKR1zqWbFFnnPuLgR16BpQ5RjfjwUU2YnLcEarZHpVvhwYkz",
  "key38": "2ecJL3KCN2pjs5prSup2gryxFzDpjFjByJT66fCjXnThHsAHCWn59bZ9fN5GkJwJfPxokxG4X7uXN3Njsy4gtVvp",
  "key39": "2zHJqQXi5hUu3w1Uo2KjtxGQBnsuX9domSEKVPipkkgX5K9AkjqDcUw1Y1zw4hAaVnw7PwEZ1TNnwBLggqNLTad2",
  "key40": "4XJQ6E5BMEheP96UabhkPQfsxmgYZHGvoKHWkxVvBUKWsawjY2oVnB4uUv4FhwqbTZPAjHFjR9X2THA8UZsJvgvb"
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
