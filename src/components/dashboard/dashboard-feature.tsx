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
    "3qxuqeennuYvo7c739QSN1a9hW9mekBx4b4FbhWh88ZEVq6BpmCud6bxkE7jDG9pkJ4H1UzNYZNBeci39N1Bo4H3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mtGfqdyYrVDosPq5dLqqgKYTzvxHr3iFw5pduxQDTv5Nm7xcynub17722AZvw6mVJKfUqvx2nLr7KzNDp9RTWEU",
  "key1": "XsDDwDAim5bHibjQvd7KrJ11bosQupcPTHCc4tX4EfG3rTLzy3gAYFQ9Lm27WxhSHER8zQ3YxY94eWUKkstAQeJ",
  "key2": "5pA6Kg2NXtJ7vRGJWLYpPme3ik6f61ohAykuNopynUSxgY7jwh5oqX3EWrNXK9QTztSuQfQxNC8nrpwaLdZW82fQ",
  "key3": "28LZC9jvN5w356ymurYs12tNA54iLZxFEE3481XF5STMu5SGdBriGNYKLdibdh6cxpAsRX7bs6yJ9V485uxqEGAe",
  "key4": "3ZvCEirJ5AG7uHT6MYrysh2mpa2TkAhqhhXMntxmYsPSk33g9aW29hxSWH9mZfBaW5y9U9cM4GfxRYApS28J9TEJ",
  "key5": "2zSQvjkXL3MwcsU3ecQo7SbDTZKd2PaS3iZsuTkrPNVpYVJzHuYog9YVfMJZYtAu7z3nyRaT6BYHds39QmRKjqjY",
  "key6": "2NPXBJtABnFWNWRE37U3bUWzA5wj68aXvvZAst9B2YZuzLAvhi1DcdWPFtzyhHDJhJeyKfmqDMomFbU54jBHQxAV",
  "key7": "2RSbvgixCNSG5Ay5An73pUDT5Q2BbBtUwTemEbU7qwMAcdj6qYYtoWehqGbqfBw466tZSxWQPsWzFaMqyXYg9TrJ",
  "key8": "5tMee2iVkE327pcZJqqHwcgEMFsXQKaa1wTTpA9cpjKCvJVqYmRp1YWxn3wWmkNNms6TKGkqDVVisWsDuHybogf1",
  "key9": "43Jgz8o165DDxbAp3rAh9LmB5nKsWKuPuDoQHg9ATHRHFYDTz4eW1zfCbWFBFdjhSDFVMwpd34GFhNFnhETQVpA1",
  "key10": "YJ9iXFrz4keVe8u986zh4RrCc7ztGVvvzSMpZv9xTd2hwyiVMebMfU1qzxzXPYXzgWjYPwWaqaVtxN1c2pBtvwd",
  "key11": "58Uwt7d71K6fjZbCfmm5rrpdN6MaZUn52jozdvYjuWZL77YY1diQmBSwfoCE4xExF4b6N5SsJBXqbYRiTSXFg51g",
  "key12": "sNBKyR1oHHpdT7bEJG1aqjTk6YV2gnrHS7oddxxP16LLDKPVDsRJs3RyETVSNnL8Jk5RKUmU1Ne1B4WgUiYoaFa",
  "key13": "5wiqahNjW1FZbFfbNRwusWimkTTSB8sDLs2q1ZLhpicg9znFpMmwSWHkdfEB3rD2jeKCvVECYb53tDxw7o4SexBz",
  "key14": "2JXQy2yZHVcE9uNk5PHqk6Zq9A1AK5axosvToHimsu7h2DwHGAyo8FDMzXXSkmmJ3n5aVVee1zEPXdyRSsMi3q9o",
  "key15": "mV3ma4jWfHBNfQBgG3o3JRdFAzKg7ctWj5qVUvfoi9YAikUSGYsn4PQj4zJL7FZ3Q6h3UTRtxkWuf64X7MEfe8L",
  "key16": "4wF2ETARRMN1aXfQWUsj96Gq8W6NTssuJ9Vvok6Lk1PtvXPbgAoxT2zviY42rrPmtCrdHThnbjWbDzJV1hYka1rv",
  "key17": "iodJsvUzRYMRfRy8r21ZbkuiRDdhbcRVmog1WLCRipirdK539DrhQK5mSLdt2gsX5ao5zGgV1qRUha2xcRy99VY",
  "key18": "3H3YX66aFgPVYTaU2rtjxqVeVj2qfmYzuMFKhZt45XCziocBJdc3zSvErmfpwahnoCRczWdrByvoXVvBsyHg7cKq",
  "key19": "nfAC63E7ZHEqL7p3JcsTJNDG9Wqvbp1YHMEHrcgLXATLJPBBkte8j95yHwjnpcrwGf8uEo4disfuJU1rGrBGk4e",
  "key20": "42Hzq5GDPCfT8MVhYizoPiLnDS1uJoSNfhrZzLZ96QsjdyFc3Va1ijyZdfAFU5ike39s9wVgELxP53aoSUWursiY",
  "key21": "Puq6qawTGMkqPt4uqvF1uZ31kMqrc1VPHJzjrWczJwbHGJo1BKAikPDPYRCrdn2DzBWcd1LYarmTsqKVpDNSz4w",
  "key22": "1msimm5D99s4aKiB8ZkSmhW92S5vqqyi5oq5hDCmMDQdz5AF2nn9GZmhjRFAhkCy2dc3ik8892w64JnMbH89S6M",
  "key23": "52wKar6w8xzfEduY5ygdsKAR1oCjHDF4g63UJCDGM3W8at9F2SzzKUWGjuxsAU1VrPHZAKYytixVivhucovo4hhr",
  "key24": "4bRpD47jPBzKwGcBBLW2W2VraYgFvZRkKknTNKxLeuiPb7wwJN6NVrTFuXrdmGkRqLHjC6mcYyhZpCqh73XaKXW3",
  "key25": "5BLHE7truxBqqqkWx1WSTgNm2jMEHgUjAEvTt8WaRb1edwB1mpWBspRoFkMQFqF6ktGqtRpEPjvXHqZ5rMiG1oq4",
  "key26": "24r2xMKNeo3GwYGaDqoA8Ucec3rCrCXTP8bqRYdBAkQqCajQcNtxpGSKDHAjPtcU6mKrNpX3A3MqZNfzSYpLL5Xb",
  "key27": "3eNvxeRLwnKz8RwVSJ7X5AiAnLAFvqqjD5KLvvy4nfKoZj4TAkuXPoJpuRZ6mcQQWMxcPouiUKivx2wyn1HruTbt",
  "key28": "24EdqCBABkg45LdBHbTxmgnFKGQFquVd2qSKnkEZrXVVKZGZ2ZRKKp1skcNDjifQSuwP2esbBKLxuyGGE5Y61rbL",
  "key29": "3v43mVgXHt9KcAHThRCiirruN4Bs8GsxNhn1QYpEz6ciTjhHECRyBGBPZG5Yq1CiF94vrestVAnDwqB3qv51L6Ze",
  "key30": "nEL9ccmfdWoRJGbjXPKs2R1Yg9yEy37BVMLoRabH857E4t6s8wACb5Bvt6tLn1MLh3F3yBfqZxuM7MTLjewKmue",
  "key31": "42kogafbRmdc5kSiVYqAP5jQn5GfykGrKJmaJbNuWxvrf9BJhk8hCZsiS21VYEJ2UyheNQ4aMtdECKjXGRUmLJWm",
  "key32": "3DvqSArjGuAASr17gMNwouogHmRmpMvjpAbQhDBiaSaBwkk8xm1WSP4XVbZ4Zg4qKJVaL6fEXkp15EeFrfKYJv1S",
  "key33": "3fBs48nS3t2js7gQsETkv9umKDep5vk8G2JVKL16h2C12zQ814ZMtPvcJbduPzcDCBcpZAGjp9kEcHnyJEdjC3cs",
  "key34": "2hVDVkroo25HJJnEZtE4FP9eP2jd9LFVxHdQyBHZdV4S4phC3yKjmrRzB8p7UeS6EUSLRqfNMNgn5o9DnXYgiNq4",
  "key35": "4MJquaBFz1EGfq6RCSUChynTjStQpVtNFQyEKLi8inTHAeyMWysbKtNTcZexHPcfEhqrFCBd2xKpLxsL2Usci9oW",
  "key36": "4q4ruowPEbA4fW7ErwsYHAdgXoZopdHkS5dq2fvbYzqY8LAP4PFATeSmkTHgfaWnQPXQL8gnjj47Wi9pnQNizXff",
  "key37": "3ZJFUjcCSuiMacNZ5fwHwSFfiKCBbNo4YCPqftLbJtFEhVKnbSNpKKFUNMZ8CzL8wJz6Dm1SbmyCGCpLKwPsTH9U",
  "key38": "5f5cDEARKEcQLZH3EkZzQo2PCHwbF2vnsNfZJrfiTUwuT7tYfurnDHqZt7dz8W7eHatUAr1bQoS2g5FcyAZa1wwd",
  "key39": "4gUJz3QM4XsynL5FUojRxUnCMKLjbD5vkkSNdzbgGQcbKeFrKrPP8u2cAeBYrUJz6A1wBFKhG5oyixq5GJp4nG98",
  "key40": "5xCL7kYTDwtGXYfKXg6U8692nhEqU7DGpNc6eexv3EEQ1eX4BcsCux2Z4VMHbiVAjL6uS4sdxJERBSXehpr9Sg1D",
  "key41": "2SEZFXEDGrDefTHYQjj3BF4tqs81uJs64cBTWGyTNcrB48ixnNkAbPfMsA2KfU39NxYJzWqw2E7KdNUDzhcASZKX",
  "key42": "2iLy8enMn1eR4CP9RW3T4NxJQxYyPrRJHPeEJVVD4mtd6t99jJEfpmTMptGAupZjtoAaBCY3iTMdNA5RoHon5Hc3",
  "key43": "4ipStR9RsfShhTJr9FFqezxRX6i7yrb5sNeWM85qRxk6HMM12DNbFbKdkpB5bna8D4VPYpmRr3JdmgLa2tuNEGKD",
  "key44": "twV1ujuKbZuZ84FBApcJTTDFPNSkBjZMu4tHBn3c8sKm9E2SeQVxkxnaKHxgFGzHdwwT87V4fTTD4gWtBgWvEuS",
  "key45": "4mrgwD79nGt88gRXgUGj2sswU7ZAnFPeyHT9EhYjR9chaoJ2iwhZ1wSdiGnDLkSz5k7Ujj1ZVoVaJrL9RH4FGEpV",
  "key46": "5gD6VrByEaE6PV4jE2YsqTKNB6NX8wDhVFwi376zBSp15rctkS8NNmEznv4ZEx6Yh6TixukcSRrrsVBi7AUQoXEJ",
  "key47": "5tvNQkUBhf2ZMgiqtVZota2D8J8VL7SQx71SyBxKs9uethVd6xgg5gbf59vviVYkwMBiAM45edT567KYPaLgUh8v",
  "key48": "28sDrZVD1pc4poPrnz8LAJHeBDMdiHuvSNNb7CCUEUFERqAfXqbZZ7bNQQKdeGdp76LzCUiKF24wMdEjubNtcRDt"
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
