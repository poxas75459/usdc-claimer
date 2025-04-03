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
    "3d8FBDYTqWAN5xFMzkk6Mjw4AZ8nPrVjvUkRCPHETjbWFgThnGDNMCeBKLzYtjkybSYrskuEXgBcyhEF4rNg88zh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uhs98d7K3rH77pUQbvZn4URKcAu6uSzCkZKfYMbmedfs6Wv1ovE3e3GiwMbEqAVhABdPAjAkFveMH4WSPh1SB9Y",
  "key1": "2AsRVHcTZu6sSjA4QwY6uoSmjqNNQqHG2rH52sp6RCRKjTYRXUeH3JqHYEEqc4Rt15K75oknsK52CM5Y7WDDvxcr",
  "key2": "4iNM1tybfgYsUhUW8biNLdyGF8vQYwPw16girS4fJgRuqg2XiW8vyG1o6dyTP147v8pVtBWuFFBWSY1HJ79tJ2FA",
  "key3": "NFcFEcsb2R6mcWt3m7FRtkrtYdYHFrvjjoEBkxz9gXzYcg6rjo4t6Y1etZkfPiJCNNTJepA5VkfBkxT3uK2boLa",
  "key4": "FvB166yhB8sYu4BD9ezKgdc2EuF2WLSrd8joSUPJeRtfFxzkaQzkc5YxCB6Y9Yvsg5HBrKQheGnyQazUQC1k1BY",
  "key5": "5JmD3sZ1PjXzLam4yREan8xKrxqz3CRGoWo5sVWyRiNXVWjYtVo459918VHsNdQcoWHfnBV3uy44nunjTtHXJPMp",
  "key6": "JQC31i5a5HC7aeTrJ4g7H3UgV4S4d9FhscV1JY8MqWrgACwfHnnchZCFmz9n3gMRVnm5TQGTgin6GEDVttDEFHQ",
  "key7": "43XERbKmU9QDcdbzAorAgJegHMEL1WMhWK3uzbjSUCf2X8RLMLYi9pc74HBxnJ19zFQUT1CBugHRrc7RuPY6sAuU",
  "key8": "66qUnvDc4nYbnt8WQ84htCfkULzkAo8LvQMsViuG5bijETz5Ax2BjHQGH4TSb4YJdAHVBms48GP38MNq33NuTHMF",
  "key9": "Y2C4jY9iMjRW96xP1aCAkjGuAGUm5AnLwR112PoAnomabcWVPFRmEvsxJbzYL66pXT1grmPDaG9ovUMvziaYSGq",
  "key10": "4cmDyjmhardGm452ghDQ8VijA1hjQkNpa5vrg1RGhpdQncUBPRmo3ucoZZp8a4uW9TfEbUXR43dQJjYwDtK5j41h",
  "key11": "39E4Pdu5NQ44DBtH5csnieewZQFzP7uv9nsySPzBhMwFg7aoWW5sNd9iv3rAtfu5ACSFmtU5NuNrJ8fRAFhme26j",
  "key12": "5989FJKtzrFCUeRvv3soba24C2vyKVkNPcR6e98RvapnaQ8ESt8HpmPtAxB7KAKzKhr7vXdq1cWL6ZrqczyHTTxc",
  "key13": "5sBUzFaiRj5meENFDKiviJ8BNWWa6ZuRra9a1bYLGssG2nHDHwDuJVVtoNqYQsjq9UnYeNPUV9f6uEvP6YZP6jLg",
  "key14": "2MMs2DswCfjj9yghffroimdkrL3RPmCy8ruy1xx3u1WXEjTmMZ7d1GWQL2F9AmqxGgLuaNCDGAczsrsUcMYyDEj4",
  "key15": "2uHcYWNAV2jB4kMDV8PaJxgFFo8A5FxDGGxCUgDk4duSzh1Ajbe2n8XHRhD56zNMmAZuMg5KzpyAtHpt8zj9wLsk",
  "key16": "4zX7Lpa6Cm5TtH8TyZUq7svaXCP1NVeAUYAP8aDNcyomAZVBotVeh5o9SG2rRVBFpSRRCRBe3Acyc2LKM79U7Azi",
  "key17": "X6bWdebyfYTjoECppy4Dq8phG1yoVc2tWVmLbUf4evQTJJy98JfZfhGrfQ71a8kPJSqH37qBHYvm1dvASZR55ka",
  "key18": "3dQZLoFDPZ9CGpypAsXsGQ3DKe5XF92JhDxxuMDzAYLCf4kib8EUZpKMspfRHeGCMcWUB5BUtL8CWo7WAq4twAU6",
  "key19": "5W1HzV5deXQrW6gAnCkpHr8u1eomNaT8uJ3Y3ZMhj7MFUFFVaEHuDX5rzxYVyjojrduHU7KPD4rY1iHXdqWRQVP",
  "key20": "2sFz7dXfUdH9fTXEhc8xnYMfhwuV6nufDiXErVk5BYtBk5SzNouKTx3Kf8t9XTrBSU9JLepfJZXBxpUkfJkKNQaP",
  "key21": "4YLTVaL5MhDUX6nvvVYxXqi8hydLcHQka2xUihQgs5qCjDZeVdVjAMYnAgc1yj1rZ57HnboUntCW2mSn6C7Jnazr",
  "key22": "3MQfCGmtCAah3cxUfUiMgCxNfCuoqe6zuwYjhSxo9h4HVSdbwQExqgeKbJVPFUDydsDyQomS3yj2zqcrX7WYrvWa",
  "key23": "2gfJv7FbhcVdjM6RdD4QLQjGFYPTYmjs78Qg29EfwajLCTAwgShhVXAeJ5CDK4HP9cPhf6QUvk5aUDn3nQXNZNqc",
  "key24": "3X2uy3evoLzpUDW8ikbPLeaueqXY5NbmRprxGAqiV7o6mMFfKNJQ1UwxshzqNPe53ux53nz7LPFAUdbufRrBh1sL",
  "key25": "Sk39NCTKYZyxsHYFM3RivBZ3bByraNkxNkoLMB79R9GuT4razDvgzkDR9FWGRGFLbtMvRZgHB3ayUJnPg9L3Kho",
  "key26": "4ZSbfV732dHq2ykWyqwnxXLziMwfjGXiEvxZPEDx5EFVR6RG1Srie9Ga4pmRzBvjP7W5JXFmJtAw4MGx2F1JPUpd",
  "key27": "Es4D3gGyLj29F2iZMTWmKpPWwDFBd2YuUSwcQGCXB4JrWFMBuzt18VUUh7ZfRrBexx34qjz37H6eVAcuyj6cFHm",
  "key28": "63evLQAJqsxnrhQoWzRaYHmzhuZfV7dfiYQZKUqjepUVhvv4jKYDbVP1CEPACbrovz4PkHb6QsD9qFJKKLFSDBGw",
  "key29": "3G8knFo5jGoqnLubkbBmdReGzteCpURvPcDcgBSdP4a1gmvNGWTyWmwLDn7q1EUqJsp3fBY8bd9p9M9s9jY5rp8E",
  "key30": "5ttsYzmmfwMHtF2MYcfShzfCHMQePoNyW4jjLeeGUgQpjqDj8AXXDzccMf9zNsAswuwWf2gWEcR3MjM3HPLUteSe",
  "key31": "55Hty1kboHDRPDX32N9PazsPYjqk6jm2wktw5Tb1YoP6Ld7zE9Ye9jRfu68SW7w8WgixWszNRr42LtJ7JcyQjJJV",
  "key32": "2JsS46311EFqNnZxaez9HBL8JVkCB4cNtU2RidjAZvCBTmqabqbVuProzDvWBFhHe8C5v2ZCtyo8fRhwncTYTva8",
  "key33": "oF5gYrJ7pWYDHSabaLzU8eFzNCAnkJXMeH4qZ3M4MAL3x3kYSah8qVvpwfM1tHbuhbGSHpdhAcqu9HEPHy7oJNt",
  "key34": "3RZgTpqp3jRorp1aLGMo4WiKNkyYa8Ao3XMR38ynFo7V3uLNdonXUHmZNcucNPBzBjDPGnW73WXEJjg44557BHD",
  "key35": "32FBfACMazS1Lmvgkv62Ff6BFoti6cywoBhWofn7qA8JAtVjRcQi9DrYD2DRJVU1CZRA9yUb7REjvi4yZEtAp639",
  "key36": "2DqnhVB3vtc9M8RBc6Yy5E22BurLCu7cErJ1kR5RejaPErjesWx2YrTjERS4K5KmrYzsz25znJRdjx3pZFuKumy7",
  "key37": "2RNBVs2omLvzeBM9BneWexVbmzCXMtQSL9wEkNPkGWzd3kRQRmcvcZugMTfE1i6RnjuarpD5rYxPVG5V7SSGVVew",
  "key38": "4nb2YpCKxsHYuZHQuVqiJfLnM5k67F9hTt3U4BodfzhthbpFT8yCLMfKVWzzeGcGvxNLEDcDrLvP7ovu61nXr3y8",
  "key39": "4DvuCFAqpwKJo1zZjJGgXKAkc5faBdAu9NfM7tQqs9eVweySkN4RG5qdsiiTd3K9VYgEjJuYcNxzJvx4tf7mQdyM",
  "key40": "5y1HX1bQjprjyvF4uQxZGdBwXP4uoxnxCdxp3cyJJ9fhDixWaMEtm4UweU4ZkoAwSh4vMgYsiQaz7PxefuYAcpSj",
  "key41": "52EejU8d1FSkUZSWApB3M1Nps8X8Vfpkz5ATLPpMtVHhZfVHzQ5Sjei6ArFCS8XNcwV6xtBrJvmhw8YREkc7fR7m",
  "key42": "3NcdkRCus3MPMz81iLv7bMowYYjgjguS2XKS6GUtfrimGGbKi5n1DAfNo5EpDjWzVRWWJ65dA6BqpfC63TYaSqSz",
  "key43": "3reumQ9AoVyTE3RGoA4EAiXz8orE1mpBDykhx24yAAnYD1goP1UvQP8SU5pUBn2thJ8zA5er8dqVPTrcZ2K3G9tJ",
  "key44": "YveG1jj5Qh9nzQXTP5HurutCX6R6pDRfekS92e9ctS9Ga4jYiT6QwHNA8PhBCVFMZVZMXJcBCoZDKTLsDkepNmE",
  "key45": "54GHy1YVYeUtH6fEBHbXH4g8kEefavMQuDdQDVCBGSDnHRSUn3afmFBc6b4kkEQ1cQ7EgRoiN3aHXZHNRyZGjNoB",
  "key46": "3ofTDrRUkeGzDbSSfuFDNKpiWBXqGcbhmC2YoFMDekqdNMKWkqKa9UdWiWEZpGAHpMVPbTLQo3NjxAMnN58i634R"
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
