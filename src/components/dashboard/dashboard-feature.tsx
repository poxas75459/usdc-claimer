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
    "4Azv4Z1wbwsGYZ61FHFeY2hBFiwA1uddU4S3uDybszb44xdGmdvbX4gqENmUcGexBC3GhZrwzMTnytz3Vy7zeTEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jemGEfypU2fdLMLKx3d7DfGiYQJ6gwyUxqQZBRe2EybuPBZkVduM3WVYEPAZVdeYfLbKZzis8R4LACyYndniUKU",
  "key1": "2fryuRxxp55S5ApJeVHeeFanA9yiFsGCW9AbhmuY4W2aNr3Qc9n1N8PzdqSSmoAXokqRz2KJ7GyfJiUHM9BySQVE",
  "key2": "4wVDYmnHKfUfPp8yddQXdkBVU5k1WksbqGc6K19QXUV7419phQar6AMfyoYgKU9jVjEcyPBP27uwuqhJVFQmxvAT",
  "key3": "4RU8gSBE5TUHAmHdzLBz3PUmAXcVEn9ZtBSrthfqoKLrSwzWL68MGzEtqRijbFGaxYB6tsRuN9UZ2aRQP4ZHWPhq",
  "key4": "5GqMSTeaJcPFMBkLYknWKAvqBVqTzxfEi462nyGQKLJGFp9eCf8yHUvq2ALkBdkBnkdMPKdp5gX1bRbAikyfNVo5",
  "key5": "2sn676KBW9ctXT5JMuy2e4G1w1SvYmp2L7XPsqWYyRQwgE9Gtxw574UB5Ugznmt2tAS5pCJoypUuU1pjKdTU4SZa",
  "key6": "2F4wVkdm5Nwi7c18kUjyNwCrGj9izUgCqfF5t9yfBZNbzUfs8upnH5Wq3R8LAoV5nhgY9MsCTqBf78iJWRfxM1Si",
  "key7": "4HXWTExd1KnKTRewXRVuyPWniYTnmBBV7m3dt6esb7mKwqWaG7o1F5TnwSJ7drihXZP9iLxYDkcTnV4nFmRNX8uu",
  "key8": "4M2DNmFEpctByTf71uo6RX4mDUU2R511EoaEEoaRGv9y7bRUCgSUzNS7YY9r8tCDyERU9wG8S1cLFUNUrCgxL1vk",
  "key9": "5farD2tmqv2HBDHaehUHgt9CgK25j1zKn1SV1bong1duG2Hwjz9Hw3XyBsmNFBTGLLRHNG82TBLnPKZyuLRW9osW",
  "key10": "2ksjZPtnqr23rBC5ebMQpYRiu2aKar5UFLCP59p18Ys5sXTQTfhxAP2ATRr6PbtnHJkuiFh4psK9fj4nScuKk9WW",
  "key11": "2AGh67sYaBKGbCpVchqJ16EgT4xNGa9htrvd6916r61SDomYx29oJAzhW5nHBdkieJXrHYSPgVZrpq9GdyZg3tJb",
  "key12": "67hYsiW13fT4t67WLATBe4X9FV7ixQbG7iGtf6F45ESGbtxh9dCFkz9SzWi2JKqvNPyUHfwTerKkoxVH6hy2PaXE",
  "key13": "3dkwBomaChf5197kA73YZkQETmpJjNSYquAsvyp4D5NLjDVkj82akAubhJjYbYdC8nvzLvURDzYNGm2hZAkGUaz",
  "key14": "42fXdtRJMrFjXXBKhQM1bTvSvdBX73q7xqPu6ZKD8fRCv6nNq17btMSxPCLCe2cFECbJ9cUiGKyW2nBNvNvMzVS5",
  "key15": "2yCQ2TGewZpM2AsGfLiUZ146R7sgZHrapj5B995bMs5BrZkEweoKzSCGty4LKwsdwGKumjqAgrUhrPqEcC3Q1qg1",
  "key16": "5imjJ4wmRpKyULM6sg9KvPpxjYXhHdaVNaZX4n2dXU4AeCud4GsdYuLovYRCzqVy1LtxbmrgruJybcua1MzZotaZ",
  "key17": "4AcysZVReoNB3qaTmGK4XEoJAyHWpfYAoj7o7EfPM4cbSJoSzFCUFUZhj11Q9YBYjNeLMLhyYvDXye1CQzVQDvmy",
  "key18": "4kVPeR9szaugpEfeSonZmsiFgdG864FxMyihnMbbvAaKUycoRD6SRM57NPCggrYjsBK66pkffXwafoFbTzg5RGue",
  "key19": "3XVmCqzpnu9xmRGadoBSVpgimCJYPyhEbHhHr4NZcQ7QcaAGaStnGN4iVCiQRzLTh8LwwefbCq4mSjBgNsxRKFxw",
  "key20": "sSgMhJ8VPhbHVHDkkR9AbgoQJJXXvUGi5jBxRgcbs3qmZ96Y8ArtmzcmuH4hwWNKCaqs1hCbcc8LUssYJX47J46",
  "key21": "4wrwPNzMncWzNWMqmC2m1zVAuRwhE14tMRcv1u9oDtupoNzaDnRprQjm2zbDmfshZdfhnMJXdVLrSvSyz4z6RRu3",
  "key22": "4tTgua9mkUWco18KwrfjjnnL8zTtNp6PTi2442GyX43DYaa7uEuMKaLR6q3ZR2HSaWdbAxfWq3sPCQ3qqMX3c5mw",
  "key23": "2pXKKXymEaxWSKv1NCCsGf78fYxRGVvDb7q9mHw9Ynbaw3YctwrKKK3dqJABGtJHoH8VBrKiUbtTSck4zFqaKNMX",
  "key24": "VS466t7ZsTBLSffNwF4by33mEcVcoZQTbM9QYE8Bo7UQfUsSsys2Vd1FLVvvQRyg7zuFfomzBgVcXGP6cQvv91t",
  "key25": "4K3g2qVZoAr8ijt4YbyXzqtdnewiKyGvwKrYdfkSGyMyodsd317fBVzL9SQ3XRmrpCjiZUqN1eqiW6Y85csYRfj4",
  "key26": "5oo4zswk2xLJuHM6cue2EDATGzvJaqh88h6AhvkfKPgy7LLMMVFxE4tCuoCcrhx4utzqffNYbo7hBE1yZ1Y7XTpM",
  "key27": "3VhfLphaWzvEYWFsWBX8cD1RnoafjZMTUBasMocNHhe71Enck5EpE9uyxXhJvWt7Bfp4DaQ9Gnais8a1iwbquk6L",
  "key28": "3ACL6YHTcEAdQD1XDFgoTBDkcFxzj7nGsZfNLwEqvTSrxfaBvow2vyzWyRigY1jLfu1EV6MLpe6ifjUGJ54FRCfs",
  "key29": "5Es3pCD6gH1MaEaE68f9vqwmtt4N5suYkK8iSBHJddjfb7Py9UNVcYa82K1Cr8aM2bX5X8dkS6C9gJ7QCQVxTzFx",
  "key30": "2DW6dpgMYmpYnVHRXqr61qEiNosLECjc56mudxg5YQwoif8h9N7wc3vWRgAxj3vhw4Ut2qfqnfMKv6a8WUcSza2E",
  "key31": "4iPRzkK7XuLHDphydDbN5oYSe2iuKYUKdaSNdwyjG4Wkyt6KptUKRwZnZnBHyzqjnbFBaX3sJdAQeyxegxdnHoJc",
  "key32": "4b3bsu8K9Jgb759Z1d842aiEK4rk44JhRv7aJF4GwQNjqyHGMoPQ4CVGzW3BbpRTAfAYvkcuwXJBxhkWbxBPcThm",
  "key33": "31FDYGHtmGFPbt65Z2wVEqEgHpWqFEs3DAEW6wgkMF9JwKKnajiCsqRLzwpo6cHF23khXK7CnN4z9uU4vuuhpi5t",
  "key34": "2tbhTqf359dR2X1Wj3RHSwWmewhq1sz2CpLpnrJbhc6BP458TfhhFWj2eS28SkHnsQbRB178EXv4SCwHgCnTesWh",
  "key35": "27GMTmX858dAQV1Bbjp2t6rNtksgjsYrnsQTvUDBHSBEGjGMRzbA9mPCUC3YVn7oah489NDfzQmoXiHwbVyVGgfh",
  "key36": "5Pye6RzagCXVrSM6ZCQRmxF9Es1JcRe49hNFygCeV8EWUbZPNr7bwgJ5absSQpy9GveHa5MPmvzJKV1NswheK2De",
  "key37": "3a2LDBt7PQVxMZ6sfkrin6P3EyxSYCXdUWikVZGSCyZMcRSq81S2C6GEHjaabt8tgjxD6VBEyeQiPcPuhodbHHaV",
  "key38": "4LU7TLYGq6FxN6FJ4Nh7vAiEE912Q2JkMrqtQ918NRVSurTyAqswYxNhnqNP515jkpboz9BUaP8LdUB89sRjUCdW",
  "key39": "Uwgqvuo4chs8xz5AqnGkcp37ep2h7fw4aF5U7966K6cMynTRKGAAHqZqUkLYh2YEJtTZMCdqUMuxg2PbYZRj57o",
  "key40": "s8Ekyj1pY11ZeqoFSgzrAK3MQaiqco6tHXGUtLo26yDbPWBvfiEYXXEGKjbG96UJZYKusjY44sEqodAonjRv3SK",
  "key41": "4Ch1LwWiEQ8QoEMej6JfMM8N3W8MCNWTL8UHWpMRF9RQ4PGBXPPh9vnkWNh8s4BgS4Gz3maWq46Dg8j7P1iWs6tX"
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
