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
    "3ZSKubePJWbBTukDvKtgkKeVD6CDU4QxPdThKPzLJ8BCKnGtEFXEJXwgy1J5rAZdA2eZT45r8z7mtgKKEVNpg6bf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DEB1dnntQCNP1WN2pkWdKpaHP3xq6GhytALMpysuTdDaKHKNXCpt75sYtH9KGdptvJzpZS85k6spYJJUZduRmKh",
  "key1": "26zwcUPmm75cAvrKCYm7zrx4L4AxRmLyzzj7cFQVRUNXiGnZvbtWHXXb2X5SnFyAbmmHsJdbUaxUXziodrf48UkX",
  "key2": "4app8zbtTogEBJjv3Dtsx74p84ioeTnqz31ndLHE9FRPKip6A7JNFCf9vgvPpo9L41p4FDmQogHR5q8e9VVofQRW",
  "key3": "2MFUd6SubzJATob5khUSmVGpTG7MCkUwfMrtoHnCykCozdvstoZWM9tufGPgfqhNoWy9eiACzDE4yif4mTY5V6Yk",
  "key4": "2gs4AyvfeSrgKeSsdCVMQxhwRbTJKmi3CcgqFe7Pic3PcydeCoRqD8atMpXwUhr8RtqiHiieHHvnQWrbAWLpwfFq",
  "key5": "2LhxWoc3vHNgngupv73Zem2fj6rhFUWvPonzSJ4HNLuWnA8cdhHHFTgPvGDNw5EPGuTfZA8j7MLHgp7qVbb3HFmS",
  "key6": "3sRxYzfo478J8M2AMZDFs4n6prq2JtRMxxmmftne9JSWf7m6WysBieeLdXTZRkBEbChxNreHKVa3hyxqXY4gxpwb",
  "key7": "4pNSgeAqrUhxApkxyXM9E4x7XtYf44VQomwpcEuy1pYTHsqRtHjs8UVQ2CheAGxPiPkCDrCtKF2xgqGq11kEU5Jf",
  "key8": "nXeW1aYA7EaWXyfBYNFHUd7GcxT6PFHVmpsvGsWvK9gTXEZsAMMC4QPH9F323cJShqwAgpUnTkffYMK1yZBCp2b",
  "key9": "NXADMcVFXmR148P89gLgEHmu8Qd9YmHmTKY4RQRKpqA137K41QcqjbFcMrdVKp91xT1iRCwgj62W6PuFdd3J3bS",
  "key10": "4n2VNi4f7AvTBgwPqkTLv3AcrjbKoC43DTKMie3j4Rh9TGz6tG4Dg3oP66PeD78uaBd8BCq4RqTnqUj5Pmy2N9Ax",
  "key11": "4RnuEKJRUWt473toYsRjceUQqHKMUFH3KkzXJERHGpSTZfxrU8jpUJHzcvxLjSVNqL5MLe7BJYDTnE7rNnLCBuca",
  "key12": "5vPXrJtkERMTQJS893ig1YUGmu8BebKNG4vSgzk6c4d2TFXek7wYyXRC1UGzcL2EgRRRG84w7kEjZBtre5Xu1ZJf",
  "key13": "5uZbFJkjEuTa6kkRkU9jiQoQCc1udbFsoaz94Yxp6pk5pyxjbifT9qeTZ6tTj4C6HLPN72fLsX9dQi7Sb2opzS5Z",
  "key14": "FXwxYymrEoSd5rULmq2GCAx6rqPXAW4e58agK3pm4sB98ULguZWCm1n81RUZR3X7WKkHuthFREEGSuckpLXeTNr",
  "key15": "QbbLKh4fQMWzH3jnHSkgSgDNfQ5qhEy3FRWLkHjwbRAP5bwFbtPY3gGyV9KUyQkvYYpBZSymFtxmiMML24xRY2S",
  "key16": "LbNsBgV3h5DA6biYUWrfP1atMfF5nHhXh3sqjCuy4qhU3JbXWDNAZ31crrDs9a7zcENSDHyCZNyTRS6995SvAQD",
  "key17": "2LsFaYNHvynk5339p8JxC6BYrc4dPgfkx18pwqCDFVr1Ha4ehCNAwqcXADFYK7t38eXBsmzMVAzyNyYhGZ5WYjiv",
  "key18": "zZiT8MVpZxefYN2qmeSLytVd67z1nNBXQvzQdP1VgnZFGaxqYNn9obwjX8sASQxQV8kWxJ1Tcqpk1RxsyvSPHbf",
  "key19": "4HsuhLZFYyNR9m2gWeTt7mSs7x6ELo8G5ZvAg4socLcqTN2BMxDcpna3ooxQ3FLm5vAyaP8Tj7zD32AsHq4pzeRF",
  "key20": "27RknNdisaB15Wh88ba22gKjg4C7GGh3ZsKqYcphA7qcn1RF7NHMXx8J2qN2MzAqxdiJDUbwxjdXSDenVgPMkQ4F",
  "key21": "3PBG2RNSpe9FWu6PCiK1wFphXTmYpL4g3axZazWsBcpUKDWktYqPS8dgzSfengCMBink1QU5qyhAvEvYuL4KWhUs",
  "key22": "3Xjo7fpSjtmoq9tXBsJgtYL7F4LY5Jv2M1eHiK28DadqtCgdhhcwVyFtvhVXdfHfrVcNQ41fpfnMytpxoQUFH6nX",
  "key23": "279JxsL1epj3mp7PUrRUMfSEonueX1bQn6xtJme6UrCG7YYNU4JaL2c39x41renj6LzHuwYGgXUnAKkaxXFwXdtA",
  "key24": "WPBmYGXrNoerpUWHZvZvpmeGoMe9fDHJ2heqWp79N2snzj4MPmdVGudeNWmaTuZP5EfwG9BZ8jWhheYaLyU5RFs",
  "key25": "CYuEXat3eruLGxcj1fcRjM6PmMVcS51z16jZF4wFsosMmb1XvdcxiTGhweuF8fifnwtnJB4PFLAR9HVedMPEcZA",
  "key26": "65PCEw76DJr5Nc6m76DibiDNsAwXCEopVDfdyRrsNU3oV1z4oZY4RZ44i9rCAXxUMBehp3s2zD3e27gjtytWTKMj",
  "key27": "5rViFk46NPckpArcVL5X812d13nui4EhhVR3VUJ3zu2DUP9t1gzK1hwB5XfGo1GHP5WWCM9UpxHVqXnVdSVn99CP",
  "key28": "1tv7p6RMUrCXxAHyJhiEpQmb44tHmgivb7eZbNss8br5SoYjQdp3KViV5R5HYihvN5M58GiGFj58hvDu5Wx7QfW",
  "key29": "5zCXVHpq1skszng7hG4fcdPPHbKpMbnPPbs1D94TsEdgHhbXttEobpptqbZA24eu1jWA5afTef9xpzahGDRMrxaC",
  "key30": "2N2fvxAmY97qWULBGWw9qX3nwLWY4M2oYdmbLhgboUaFagA5kekzKBLezbb2Yj6LUy6fKvZPqA7pTn6KAXhqP8DG",
  "key31": "2UmESstefvK5SEzsnKLxmck6pqrGQu6FD5gsWdQaCBwGGfJwC31ZJKcomnT2A1J2cTwUX3HwCExJ6hwM78D4rJTF",
  "key32": "5Tw24DYrmXFRrpgR8H7kzYrVcQX4WioAG8RHA3f2R7sKuQG9CgcaDagDsUBcQ4YbmMzmNN1aJvWJkaNcBQX7cfC2",
  "key33": "4BVpqvZxo5czkcMPfPrgWqtqCpdJ6wwakHw3jSRkYXKKKQC6VWUjreZZB9vN1niFqjn65ALxcaaHEKweB9mh2Ltj",
  "key34": "4imxHCu6FuK7CmpmrAtMhiHPzYRZr9ZUQPW4Wmat3tTHDDLyJDRUC7ECVXvCNMBreK8e2j9xq4rCotYKpiDmuqtJ",
  "key35": "62cEY1zKeyaHfiY6DXj1Xxrisk5KBAwwhcQJG261HDwa2a6mcuNhBgvL1cRn7W2DCrMThnwdPpYUCahMuQmn1in5",
  "key36": "3TaZ9Hc2QB3A6HGvrGMWhjMVbAGDBe6ToSCtdjzs1weuWXzbxP42ebaWXLnmHiha8AZDX5xf138GXZcx7K9cSJS",
  "key37": "2bCEHbww2TsfiPcz4srn63G5wiQJNyGtksveB9oykdJkxoXGjsVQLYfLv8z83USXNr1kMZr2rp2smUbD1VdVL5Xu"
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
