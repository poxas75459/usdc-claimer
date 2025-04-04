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
    "22EtPmoff8ciS218i9gZ8qiHURu5ij5Kg4xg3k8wUYizJ8f2UB6tD1hqabUVyFVFkCquFNpm1C7ZPaoT88jKdeyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NWC6rUgouZ9H55sd1BKVmKwuouzRgxCSdauKxrk4Q3QioAYjfPYxX324T6vHQ7HV96sAVYEhu8TBduQbCFkosfv",
  "key1": "4ojzFYHksGTgfsDEZ4qSUzyhnHvUCkPUdf4pxgYpos6NPH6jXx69pz3KyXaAFgncNdzCPHaX1AjeumdePP1g9v9R",
  "key2": "5X2ootd16AubJgDDsGgToF8amABabiRhPb3ozMpo9cqGMpak3Pap4auhcDwtjkKTNJhw8pSZBC2vx2ggZoL94NGG",
  "key3": "368SEgLEqg54tA3B65LPGXto4udvaCpjWctxhc26Wpyx2Kg5fEFBDupo5Mm87BFdJjdW8cBDv4Can9zApLnmQwgD",
  "key4": "3PrUEjk2PuKVG6CWmyZDSBySDFsA7cjPwEBRu7ZoT42JRehhVP7PhRkBkfbmkXjwEnWVL7vNHE34XCvSZ1K5Tsv9",
  "key5": "4LXMFr6CskcL7nkMVx64VXaFqmqj877M9v7GA1bPid27ytt5S8n1sVcTuKezZUWxziV9BKQbCK5boMRRK8Xinhih",
  "key6": "3Qa5A9ioTdLv4MQzeogRZqDQiVnzEL8eqn5PvKPCchFTgmg8evKrY6y2XJVUbfro8ygrstMgzQnZPhWR31PPfhzu",
  "key7": "3eEDbjvBzHf73vCRxmTYqy6DT1PxbVxwHmNHyH2qwWDerEkUHLahnN2pCX4DovREhe5jm6ptNh1nTqc9rZJNg3gM",
  "key8": "4xszYn9wj8bWj2BL6Ejr2NozvVkEyRCbotzchZu3CaYpp1UUrECcrMVzfDgG2PmoUR3DHXpCuFvbtnGzG7uwE4Ly",
  "key9": "2idYJjwPy364ByFB4vWdmvRjsYFHfUY5sVAFdgtTaB1rzKnkN5XzYsTKrYxWSH6XSM9Ha8ctzzX69ZHukxbtXXXg",
  "key10": "3JqPyN2MvZgGz3UbyELjRK9vBTaF2NXJVqaRYRYQwmWvRjaziqBkU5WTDEVvf1kf2ikV8UtvUTo4vQLRshSQ1ofN",
  "key11": "9uC7HYs9s93g5Yc8Aefckz4hNEFXqKMMYTM56H5yQ2KPjKVAehQ8Ka32oVRkSxuFEdR9akmSBEfXfNRqtkW2nHU",
  "key12": "4BxkX3cZW8nVx85mWtoqrPrrePYJL7eranxusWwzhsciWeMK7aZyHZ1YKKrtccQAcHCHBZcvQAQcNKvCXynyj4WQ",
  "key13": "66GKRFwGYG21ZTcKj7TBfBMmEEZbj4fereJgB43zs5ng3gcTkNJfPs6RtnRYcEyDx7zaSYTWM1jaVgNoe6heug5F",
  "key14": "3sR4RUyX1MaV2CG2g2QExQdbFqMd7kniuHnjjUeRbFqHcdZn6yDWqRDcxodnvkDiRUazzmgPeQ9co1aebfSBH2Ed",
  "key15": "3qwt47hC3E28ctCiAGgfmdP4nAALXyS28XR3hVYJeei2jynebuga6ev7YKqDBF24E6CLmWBRKH9Z72Jd9M3QH8VG",
  "key16": "5AobiZx7ohdwg7t9MzqUzciHRYTpHqCJZFr8NHsZ3EwiCAGr5gXXRHBD9ZHVE7f7iVAMdMqMcdCZsaBAxpiVrFMD",
  "key17": "2muaCoaELAb8CEMiYHnBonrW5DRbjX7QAApn2TD1paverZT9Kv17CyZm1UaiZraA6mB1vTp1U3wZMqcsBCSuk63f",
  "key18": "3u3gFaZ9noxzXiWr17EBBV35BwxvZHPeAC429MguLjniLnRepvMyCz4kx4NHjevHfCaZQFpbDdyDJSnaReu5GTRW",
  "key19": "2nijLFGggDsya4i19r94xSMi1rBV6zXMtzgAqVaL6UwWF8P1pL1okX6Exx3Htcf6UBcydx57tsojMFrZegeYMque",
  "key20": "5k6XESVekmvVvU7iHAp8PKgVuQaP3nDvDVGmZ9Yjmsxj4aPisFmdbTBFWY8Bd7dEMEgJJ9T9727ozQkgrhddNAr9",
  "key21": "3hj6nFBrCSCeVgS3UGQwuhtpmqLLegYvUzfSxkxraoPmkzZ3XA1HXw6qPhgu26Q5Co4SHYpF67e7VxC7E9JTQGjW",
  "key22": "xw34hn8n8w33v6EEabjnHRtrYk2CNA6MPbU9etsZf7ucK7JFPfaR5hJMHyGA94LUpW76gEH78oYUT4cDY7gjCxP",
  "key23": "3uMhCLbXHVsDaiC7ffUgcWGG1okKvYuTxaKaaLL9gsJdniCgvPPzfWmU94uEu61AVrzVN5sTbS15fVXMEh1JrvCg",
  "key24": "3DVCB26ZrkmZzsrKRrrCzSgfe3M8u8kJZ8hEvA7m4kimFEECVjycPfmWZY9EvCGKJFr5yaDczgLeD5nzvAtyeJA1",
  "key25": "34hdhvjbGUBGQwAdEN2GPY2Vu1f7GnFcfCd6z9BVLT4iEmjnbDfwQfejy1SaMWzLcYHGdF3smoehSHL2w68CrpFc",
  "key26": "4R8XNWsQjh1QhLJ79WL5SCTmzTG3Lhve5RDuxNMK6Wpnk6qeSpe2b2Jsh8zMpDS3PvcoQbMpGABYUsGokHUZsehd",
  "key27": "5J5hsctbZWoA9ZMn5ZiEbYzZrYixqW2pjyvYbXPbDEsx9f19tNTUtxzSfZgau7ErsypkLGh4KV7HFh3KpGoBMW2h",
  "key28": "3tW31APShA1HaMaggQJnjJanhyVpBpLd241X8z8xqy81uCpSVPKmymeuoMX46wBP3qhCMMMJoqgwKrTfxJWFh2CU",
  "key29": "34uyx5WY9CEzmvJ1PLKaMBdp8fFAa3mjdYkL46nuUWnZ9bZCp1mgqiZvfSyUmeykcqmv2m7sRLdSGU6iRZ2kCbHG",
  "key30": "a1iRTMnWRFZ3BkAHZDMpz9QMAYQWZsSRrsB1vFasSG2SpDdzHgHtV964MVtkjfRYpkDzHTw5gorfwrZxFNfhZvE",
  "key31": "4mjt7M6DjNzUr9VsaeHLuDfAgPz7jsBZxyF1EDbP976oqX3ZWrVbNVsPzq8HR19Au7rN1hqH7QWPbZQuFvZjMzWn"
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
