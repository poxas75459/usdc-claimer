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
    "33yS9is29R1BzZ6N9aCz4sF2etQzEYkf8wGeyKvLhZ3XfdeTJdSXD7uVQwzMvc7guJBbedT5rAGqKXUtCPn6h5Mp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "577BJbfA7by35VWswL9B9C8nj5yH8pCxA1QTQ9XoV6FZ8VaXYpMsRABfaPxsnZjpx3G8ta6BeuuM1JuGrSA5Zjc",
  "key1": "LGzU5T9wJoAzMCjHXQaeJ1JWUZww2RUbcAhU5bQFke4kxgKRv2JbecAK2krf4uDNHGyi7QivPo1svjWvjNLDnAh",
  "key2": "3mwpjDKRzGUHbXmrAZ63urEAZzxtVPqoCe1G4vXMrBG5rJ1uhk1c7GRHgCD17kfMDWgwmK8vfWf6bfbEbRhvHrP",
  "key3": "4PBpsVEi91nZ722xRiksPXMmS8xYoVMz8HJGUmmampNvBXPZxtYaTmPN7QbWuFU4AZw4iMLYzwxJEcnY8csjpkNo",
  "key4": "2zPtu4aFcF9MhUyUMoLfvKse1CfMXrxshnZQKH5aViBJyBrnpAjpMLVx6p7Y9HVPk8T91vGVPVrCUYFec1gWr4DD",
  "key5": "7cfwMD5E9V6cnP6oZYGvLJMxwRrfACuDoqs1KjVqfPmpJ6FHrTZtrJVV7bEWyWnqz9uUREBaKesyMe4QngeAPik",
  "key6": "2MLWBGNAFBk7hfi89mm6zHBMnjBaNc7N5ii7vyFDzkLz2WWrEVGk1cY9pFeLXXEbytaaaTyZcvMPbWtFzJSR4bGc",
  "key7": "4VmAAKikzNhjgPG9pqmsBTb43bTNntJHjRAexWhTfA9csXz8ycAhQfXGUT5YhuQ1hoouXpibL5LifS1487YsGTZh",
  "key8": "onbtU7pSYvhxrb5RHRTvvgeDcNDdDUKe9WP1pChqm5k69WSjM4cLVKKyQ7PEiRKmbMK2NVgrgNVgwFHeSi2CS7Q",
  "key9": "2gckd8HmBQ9dYRAmTD25Bzngiq5gjwXpkgyMs53AhEDaYuFP9h18tmRXjiWA1q3UgyonEqC66VCK9pwPHG51Xzdc",
  "key10": "5hGeae487fnHrD1qGZhQJFKTLJuWmxmXNNTjEDkBJVvDRxxrTZprEd3yPqNm8mewrzhS5QT3ZMvhEjYGZPigaq4t",
  "key11": "3T1goKier4iMr7cG8N6D49cBG9KPvzc2hwXFVP3bpGqpNLCrhQE2BynzMYLqCtGBi6M5yY6u9zK9eu6eyZHfgNVh",
  "key12": "4GRT5RLcCrGXDfFY6o5QX6pCZkU3czfMPo9usG3YvAdcEN5cTLtFNNugEcBbpYK5KHt9tz3TQWrF7tySUe6S2FKP",
  "key13": "26Ap5g3nRkAffyw1XZ3WpNY7LjHmHfqc4RFmzGqsZp66Mo5aSJhteeVdDKW5TDVu8xDRvAfbyzNBhGAvCyvwFuKS",
  "key14": "36f7v6mhAwHqHeQeK52KPTekiLSQBpgmiC43DG23xTfMoz9Wn3j93o4mDwikLPAjputLNexmvAutfTMi5iveA1E4",
  "key15": "5LEirzhpckHtHTaKvxoj9SSHDcVYicU77X2HU43uB3ec4hdd3hLxeb5b4e6ofAU6WBUwWsk9EFhFiWsDCHNeqQ7a",
  "key16": "57G7VPpvgUyZcRmTuinNb512tGUSQLGqDFepBBTR2qh9eeYaK9tGZHc8g14enCpPPxmH6Ao9KHHepJatSxD9iVV2",
  "key17": "XwmkZXSUVuuT2nGZooSx4vCrvpbpeESt3P3GrMwXZtzrec7NCkv79JVXfuhK8mssEuuPfiE9uoUVDXfEFENPwf2",
  "key18": "59whsEjJGmVMAz5evwfSgoMhiFMErKQVPF3eZFUQ3KvDwhPFfGJxhwueJEEEFfw14YjJDPmJn6ikZ7fMvJidX1BJ",
  "key19": "4fBg7LkDDjbYctGfQ8wDwz5p3jKtVGTiEdGrvywD2EJSHexKkHj4mA2aMSWSDiWQMTT1MmPjJ1EP9Nbj7qz5LmDj",
  "key20": "32U7pvAPfbcPxJwTjaDqgvgpaMUBRr7oZ8zcjWby2VDrbd5QYwP8SVE3aL3ez2Yg7YEFqYfjvMi5XztsEi5P5cry",
  "key21": "4CGv2TBL3ThkJo9f4ExnHpYy6E6CmBDTAKBbLnmW6fb6zWiQYL1urGRhFfUuXE3kwv2wfM2tig8hAqbdtmG9G3PX",
  "key22": "GqAfQBritGh7VWpBAS61ToGuLehLPxQiMQymk3T8AEmeeP5HShxkXt4o7ekusG8JLb2NBhdVJTwhV2HP5LLrCjW",
  "key23": "4ZeKMLnK4w1BNAVriJwDw3ZAWwk52wxU2eMG6LgG6pSinwZyo6f6o85mR95hUcdXCGEt5QtNEv98F7jA5MGW6z4A",
  "key24": "5LwbxPHdqCoXGW1RCaHcRqJJLFitYLEkW54rkx7KHtdibSGomyGi19qmvhPXAc4giNQ78G4hLZ3YxdSkpgz1tBDQ",
  "key25": "5xQWZXEVUpo4vmLLznzzuvmxQ3JvJvPs3XJmRTMZuZdYqzspPa1AUcwbn3LYAd13W31HFXdApdF6h29yKju13CrJ",
  "key26": "21ZBV9qXCZwtZ2ML5Pu9w6LoE1dxFpNUZTzbfCpFKigpVxiAVAnbZphSabRQ5DnJrWL5sPpRaHEha7Yzh89z7Wfh",
  "key27": "4HNRohvwtKwSuPYn4mLEwPeNHuWxFWNDKCXnHckZjFYZTbTvPTmUfphWF5nZKWYGT9oqygd9UgRTzroYUEWdBx3H",
  "key28": "2f1vxwPkWicLz6sCM2aBmwVEExq3ov9Z9XZXHU2mz41P3Qn37TTMM8WiMDjMJJdzrMdjA8hhAZuZdrQgsEtHnjLr"
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
