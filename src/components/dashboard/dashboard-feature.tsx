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
    "4wiSGhFPcJRSRoispnfgLuu9rR7PSkPP6S2J2CnwEm1xEUEUc4U39iTBtye6X1PDfbZUjTfq4D4oyzmA74g6oJRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WekSPFjSUug8VotqxzddvJxnLVbWzwnhsdKLeg12gMP5bCrQCWk1vUC7KQALmMSQhcrBgBnFX1Hpu9XWvfF3gEJ",
  "key1": "FNAyTGKtpJeEYq5zWxxijnG4sP9svaAyrYmZNA51YSGmG894edCcgxXfb4GVzuPLwA4yFiTPoBAtNff8JEzisdu",
  "key2": "3N42QssT8LbacsKyVHrcUuev4uwfKesvgy7e4oBjMbwSxtLdY2SsCdP3HqdYVFWEyomAdA8uci1Xw1S2nbnyB5EN",
  "key3": "4cS32FiR3sEb9mDWas8L6gZhqF9WRyjvZw6ULHY4Efwj9QhdcUi9dPbSGwn2ko2VxYYvfSQaLXDG64QsLPHuKjH4",
  "key4": "4oAif7axeU3DDfThxHfL5z5RWDErBfQvgA9i3cenXNPY2SA3rQTgAMvoEMd82V83gMG3VsmUR7fuKFFcTd4LkQwT",
  "key5": "3AjCpSFhT2XHNyv8M4ZnhSZhEAxtcsKjmWyizJx1YAecorpjYhLVZb1RZiBBBRZzfyM5pDLUBkpnHC1iWFjL4rZv",
  "key6": "wVbjccr6a7sVrZqusBjbqLJDDnnKs9Lqpom4NxbnzxNc3VNCcSmVL8Kd78sNJqHPboyBXx9kDJj6MKppF3Wmfjc",
  "key7": "asLq3PZos4ncTa71k6F7Dr6BAgPxAsnmX2iEyMqJHbqs4f76Dep12fG2uCXpcN1ujHFudqyQMm2g5FQLPN6bUhi",
  "key8": "4fyvbB9su4kZFhboNcfZ86GNs9WR7psNqAuq57zPQtKG9w5ASJJygXoDs6DNiyfMfTh43ePBxrLbxdzg84Ss5Y8v",
  "key9": "3Yhfs1yvAyErCyv1BpWzgBWRLqAw6y3PNfabjGv4Pb4LUhTjEqV6ga4A2yuffD6zA5BYwCAe2DJdM7bGm32RPXyM",
  "key10": "5aMzJ24mfYtMR5HckTqXuncL4G4ZRq6MJdeoZNV5WKWcD6WcXzJ8QdKW474RxQRTUQG586aHh6o9UrN24SnK3Ffe",
  "key11": "PzZaVq3sQHABoZonCPJHSS4eYWo7VAjXTEdDm5g5jBnpStiDRwSfqJrtdP1Swf9YFPLNFwoCKrR9dRr5HrZmDnT",
  "key12": "37GDirPNtJSYdeduGvGTUy2TvtQe1sf8XNJvrLfvRTCoBmUmSf6hc98kAXL1AHFJiwgP8cp2WiicEZT3e1AZToZ1",
  "key13": "4CLwZs8ZUkbWrR5762Txm2Xw72WbhWS4VvC5LsBWDkXM65AReuDHwfgycY6T8CjZ2MGK2DoJrXqS2TpSjkZ4sZMU",
  "key14": "48ndbnGGfz9SKhCU2zPmTCpi6ZAqPtGXGQxfRVeR57TWnCHYvNVeaHgPqbAB8LgQWHXoCmUDdupmzQUmJCWwSn4n",
  "key15": "2RLVMrxqRxbsm6BYXbCfrFTvWy6f6cd7aKFYxd2jPUoZ8tgu94mTxVWgwY4V4fAxGL9qC58x8L8Zq4tPuaEusQxu",
  "key16": "GfE7SRPxdbEajurSN7yEQraMWcpuwZ4jJ6FeBQvyFxfy6mR3UEDNcnJpZFBJULcAqh9iMor8F1kxfNzAdfruYjX",
  "key17": "3jJi31KRrra2LfZUxMD4UtxpMAAR2KQMzZTpErbFv77N3YFYjRuKo2JqgmufxrGBx7dMDmzuWkFGASkVn44mStqv",
  "key18": "5gSvv9KxsN3EjyBnVV1MnCripnefMpwKm2rgUpMxFi3iLZA4tPoAabnzZapLXYdeeKqGtY1xMH6odWoUYfp6atAg",
  "key19": "53j4c9AhaQyv9rH6NqA6sLzbDbTwz9zZjsU8d8LCrKUjtq4nNzpfJYgLSyFB9W5yNpVNWYaFuDiLHMr9thoqVFZd",
  "key20": "d8bsLLtRLGeS9FtCZ7FJ5MCV7Jw76PEDv5ndxvtMiCWnQpaQrCMkV9TKbP35miwmwMZQZyLNz7BTijRr3REnLHq",
  "key21": "4HtJks1rNb3Pdxeanmr3bxAT9DG7B9cu7ctPQanwZ4y2NHcQxThDBmzMEkHEYMX7NfPNhmde1M3xgU3dLaf535px",
  "key22": "3raqcsbEG1paBr7Z1yHPnHfnQH3PoSqZtiezwrSPNa4QgjggAvA2JmqTGsgXCrgSNieX8kN5aDhVXsckkZiDum5m",
  "key23": "4GqFRuuTg7sJt7TxUWNx59EmCBoKLqubedgrTb3ZtowmRK4GCNWTSZQiF5r7px9Uq9wEeuoE35fYTCfJe7bFTFzW",
  "key24": "VjrFDTxrEZtNhDJ7DdfcoAijdWNtmbMUL5s1eCwzU3YJdkMMYCA6u5xtLsxfSP7zidygWTjstPgvH7kAHbLuGEX",
  "key25": "4sgV7LwHqczQdsSpf2T5uRFWEbu76fm8K2napRaLfgfeAJoMXrf6a38Ztq1fxRdKWAFppmQCiY8YaduM8XFsf4KC",
  "key26": "5BFDb17dNCp6s7fGEqKbQS9Jq1ueMMdSGqvtjR7rAMZ6vzuF6XXNzS7ffpxW9ZtP2KUS68XdueKZoAyFUmpXSjkL",
  "key27": "4GCEqw3AQBQzwHC1BA6aMkafpgq9hk2hfyNCoFiwJ3fPC67L3KzSWwLHndJy8k2dTH3sr8ReRYgKAeSQRVqZFuFv",
  "key28": "3CDC1zWJdSb3SkrPRSVrAxUmU19VvxRcNwn4J65tHriTZeURqVdkRsKrxshb8LbfEUBEQcr27VkrLz2Z7HNx9rEj",
  "key29": "5vr9VKppaXSD6MNsFRwncYxv4orr1ozpgvXm7mYiCQGQo39HLx3zyfE5tYGFbxGS6JyfQLkjF9f44gDuQ7uJ5iuv",
  "key30": "2wpRaSjitWRU7uxErVhrzhe7Q1Bis2EX3yzoekRvJYskpCG23jxQRoTGkJkPmqHnstykZpD69oh27iFmLzkFyBBV",
  "key31": "1sQf6JKoRSz7BxQkhS8n6CsRqWwseTccWhwSXTAy9ghzkNMYe5gmEbAv3TV7e2wrLrSzACRiXQeBrvMQMdW8AHD",
  "key32": "4qzMgYyM1K3Y4rHqnn4tNmrTqmfqE42L7tw13d9nWCzsujWe18E6tZ4XQxVmKwhr61YQUEFe6W3rBKaqJpwsUGDs",
  "key33": "4r1BH8KNgXsdyKbxSBohPaPEysS99Qt7bcR1JdXonpbJaM2up3LDjSBfduTsZVV3duMsrz33uQdqVXjA8W5wG1sE",
  "key34": "3aRJDJAgWkhJ47iJPdZMwt1L7YjSc2qt9w287JGu5Z87gEety7EYCtEbGbHC71A9BYdyLn2BJW8jyhYH5kjjgYMQ",
  "key35": "3GCgtZ7gL2Qiz94jRS69nJhohNYtpZfNRSYvDcjjJYS1ATaJLjV2xyGLWiEDbR9Sa7v6zBjZakfY5wSAp1YJpGDv"
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
