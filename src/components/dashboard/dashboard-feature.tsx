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
    "UJz4NWCrK9HYLU8poF9neaqUZrdQLmJkGAAoUYMcDCekXRhrhrUzgqtPfYTjZ1hf4NiqR7eMbtV9ikoKWUeVhe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G4sSTLBg2a64cZNSLY84hGmCNqAnmw3CRK6XdYrQSipEr9Wv3JnV2Lu4KZXRUkwYMmsfSQoaapEcXR8ZcPXpCko",
  "key1": "4TLHAHPcZ4B99x39pNSjacw7gH8d5WjwTuTKgnMQb6kZqzDj3fzMj1eQd633xG9PQCete7XFdGVSf7Faf4bTF58E",
  "key2": "5A3waWGvytkAdRgzV9qogrznZUhBMNSCSiihywz5EgMayHtwu1rmpqD2de4AKeYFxC3KvSFDHnWC8Qxbm6ahh3Gs",
  "key3": "2PDhQnGVhfiAoRGLNMFze769ZfWQCZSYRAAUBXtmbBUEnVvCf2ze7WtuCma7CQYisPQUyvdGZiHm1QT4GyT7agpF",
  "key4": "3fEu3Ted8Hiy1mt5fueep9kt8ae6f5rEkoK2oX7CN9ZmmSmmmR3sYTPxFUWkjqVurB6RpszeyRiRFihUS8ZgvYqY",
  "key5": "2GgTL7yGqG8Mor64RhNu97YuBLMSsMpxhCrGUWC6Rwo9bE28jFj3H78wS5m7tJKHRsvFEPtmaB1zJ2SyHDkpeLfs",
  "key6": "3MDoSvxuJ4kwBCezRMcs6kKDJeyDePDuUjyafFVEvLLSKUTjCK9qfNdPXsVQ7FKj4aNgu3dbtzyWUZjiAaBX3vof",
  "key7": "5yi8NMWsiu9k9fHhDMX1iXPrYRtZoSqFoto76UkEGWsQxSAyrb8Udk5qSR4dJLakGoCDtGftFqScvmyLR6MNwX5L",
  "key8": "5iuWjmqNhHJTQos3G4gBM3RcebxS4nqTGMfCCw4ditFH3dgMcCZp4pK2YvqmuZM6k33kc7TgrMcTCuDEcGUTjvK1",
  "key9": "bQ5c8bC4TGBEKJsffHXtFQjXeFS4gr2pCbcyHvXPDsPFykkgAsq75JdXj2dY7kAahTE11siJ5tA6B6RvekQk75c",
  "key10": "3BvpVpr5GDEQyNvBbE9BxqJ9YQTHKK5hqv3QsGKxxn8rAQYDNskPBF5kctSq8tUZ5vGenPz2SQPUBoJeGCkCWUso",
  "key11": "DjvUD9FHC7kyuYevayhHP6oPveanwAoLimRABLyYvVvtm6nRJCQ6gZRpkbFzNfdArb82rLXzoxPRTpsxm4nxiix",
  "key12": "3BPBWM4g4v53HPkdL5pU5v5uV84Rr5PWwwj1Bn3MZ21CrZcqzeMw2Ym3SHRCiTwToSesBVZeM6nkS6zbzNLWjQoL",
  "key13": "mT95AgXzX71pZBAvJYaFFFwiEa98KSiHbc4n7rY9B6tr2dSE5wCogPvu5PYukYwQYMUDrrJqVpas2CYjVzAgiKx",
  "key14": "26PXVrTb77weeeuHZocVgzELKqkggKR2Ribeih9932s1f6rFQoGpvwJtrHVQZoNBF9j1VPeMUN7kNyHxPnbKBwEe",
  "key15": "3xjRGdqQcjyKbgJEnkJHZyPjcy2DHXbxPVmLnY6ruBeEMtowpeDMJCaGY7VKLpNwmnJSHE8mpN4yrEGmVzN2obz2",
  "key16": "5D37qG97VNKgnJYdz2SxEZXDuYrn7TETcK45RHTWV89GLzKvuz3BLoztswqtLLPMHp1wTJqhXgiDkGBHcBQSPk8g",
  "key17": "2SJkfGdCHMzs5wLHdbnRzZ5g7NAt8dxtbUeNKWXZnH2rWD9y85YL8HJBiSaYZEV2K6myaR8BUEbKHC7VTKHsQaXe",
  "key18": "2DKAwGbn7nekjiJHrvE6xHteL4kRxae3HNc9w4xAs9fjkhc41kcVa1YsSpa99xYihca1xfm8gG9ubpWw8wEyjNG6",
  "key19": "4AZYTqmcRDySwix1cteje9Hrhn724SWcgiNvfYgvuantwD4yUzbKz3CTjG32Ne1TA3LCGgwyXASDaDkHdQ6sfJ5c",
  "key20": "5AHCFeshRmN8T8ydBHAW9M8rmvWpXLhrAAnoQ4S5DmNpAYkxGZqqKwnT6rRp6GCSqLwyF32ERmCZ7cLakmqhyy13",
  "key21": "18GujLM1BxUAw5t9L2rRcnh1Tt3rbh5tPPR3AUFfQQyrWzkyYWDhQaihzRRB4VGpzSTMwBuuBgPGxfT56Vb8TRa",
  "key22": "2vZB5xDKmgx2FVVewwmw3MuTkntwZ2ts8jLbpdJRoDgJ9ov4spDktcmMvJXDUCAk9T6gVhvbEZ5jGvYCjBb5NktP",
  "key23": "2USFiiJgWE8fx7bFJ8355xM5C57LTGhcZnK4CrM1bnKcKorWZzsgScxJEQnh7oNBkqJJwZ3iWjnigN6gxQWAoKuV",
  "key24": "371zvR7DXShC4ipWZJuM4sswZdT7CxpqJ9KTrkWxacxnaJCaYZmJXQf2mUmgrU1gBsSQCtoHcN6HoLQaaFzQfwqN",
  "key25": "4NzYg7CENehLWomLDmsk4iyKYwnFxVq827LpwHLkF8UuoaRdhctsudyfWCbtQxXyzsmHK5Gg9qTk7zLesHkD7me6",
  "key26": "H54oM89xwYTP6bDvtffUyY1hhY9S1Yz46KRZdVHKTQP25p4Vqb5nnFnZeZxsmG2NBHeL6BGUpT1thTh29KSVx7v",
  "key27": "2p4zVZXcHsDwbgrCqV3HRQJDMWuBqZTEUHuNDDuqVNokDXf1taV1RWmjWz6Go5gyEV3YtzSf6FTf9Ae7h3ufkXTn"
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
