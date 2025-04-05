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
    "3JE6SMCXqSACdKbVFpeRVU7YsqK9jCduzSBXeMoPuC6W1G97nmU8nPWWbMwKk9aYeEZZJPrx8aLR6q5EjX72u56E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vbyv92We4Z3tLySXhQMviiKfW2KL2DLPPLYqxmoXvvWJ4QkNZ18zjMLsh7dS5wyh5J6wAk34PiuvMYEnbPedynJ",
  "key1": "5TvdYBacdno283oHUV5BoEeutVcRf6qYxkmc9JaCQPZT95ThNztzWfjSfecCm6wFQL8w9JAp5KTN13nPbHMz8AMZ",
  "key2": "4ic6aZSEwy25XAeDgJJpcF4JWrp42WocZzjZjyjJSLkoBymSdLRGjZkLMdywppLFJ2oT7TE5YhQP4aFgFHh41vRL",
  "key3": "424fywJCWZbFs1teuvkVQqC7BqVYFkiUMJjWdyWMoLS8NNTduPjeFtMPANKhxvvBr2BYjwjGCUMHBiR2f2YZURNd",
  "key4": "4ahcURyaCymSvv83YAm5DRRP3pfzFXvZwLFopqByDE8Ruhcbt1awymQdvBEqjQB6YDyNHUpBBzv2tVPoGanyHnTe",
  "key5": "81UrNjgWAwkEDPVk4SGRoVv4dJ8jMaPHPF1KBkKDrQBP5r7V9Tg36AYs8NtysgCAVoR2rW6P7T34LKSCAqEnjDp",
  "key6": "4gB4zN4RF6UiGh6Cf1UAzxFakxK25ZjCz9HGXuYfxsTREzthbZD43f917Suyh25skc4Dkw6jMjGn1fWmrvypSD3B",
  "key7": "3tCgt1cTc7rGQzJosAD48yPFp8s6fx2vi4yAT3UKxqBUCGQaQR474d6dAeqmB7H5N45GTztbt5vkvBaj3SszJDEj",
  "key8": "2NQoydzcQdaZY6djcXeBfqdVyEP9jtT4b9NBLHR5pEUrHaZAfLhpfAQoPZDUiXj4yMGEbvgXQkBeogfumNM2415h",
  "key9": "3q4HqkoDsVwGpPiGKCJES9QNwBAepkz7eK2riMpPoXakCdJxHQL1rx7WQX4fL1J85dH4h2PwbixxVTPRxwzvn2Pp",
  "key10": "Wpa3gHPHcUTnwdBQMyQnZtSbDJo5b11FNFvpBsBsqx4ZnnKUqYujGYsZGsibZCA5rBkpE992aEG4ceyFcCELJ7v",
  "key11": "aQE3aEJGQCL9Bn2qgDgQPA6e87jJD2hVvXXdXT5Ty6WMxUNzMUcGtdYU1vTcVA8Q5p3QqsbZxV4q1FvFDwaSLHU",
  "key12": "5B12SsvLZfxw43GESrN1Grrf3NHqStGsLQLCF9CvxT5yFThK6wbZLkvgBBiXoZwb8uWi8kdXgDkeRMmknvME1TFu",
  "key13": "5L15XGrWZGnqvAr3vueV4arRRRif3Ro6ScHYb7aXXU7STYz5UP8bC2MJC2A8S7vCRbQAik3HZqEdG4zk1wa5U9AY",
  "key14": "5qqYz14SyrXw9TJ9GSL57izvPycmFMYvQ1TB5rzumm2wQkZPffLjuzEXfFdhvu7Haew4eRhjonszwhMb1AeeH9RY",
  "key15": "2eTfiyqTU6RNM22pPzQLVPdN8YJ2N2WbBD9RscLuWWRfJo4bXgs2JAGqUirs2wMj5NRUip58eMZpvR96csorU5rq",
  "key16": "5ZbzYVyj2N9pxJs42kiQJ7y4d9nfkYZeaEXkorhT3tPVDtRrxV2PXDw2sK8S5ygzvTJxBKVcXeLXvF8YmsJ2Adq2",
  "key17": "5D9xnMw7BV4awhBLCysC44ph8VE9vsxbRLcGkfNbrK9fY8CzjZkVd7KM2oH9o3WCWrrshqh6FVnCnVYzWQe2RGT7",
  "key18": "3gMUg4W11TvF1eujuJUV8aXuj4toLvd2CkFX8jrLnrwX2NfWYBCeTdu2KvSb6dJ94cKgCzVLK7pxNeZ3v4xkotKN",
  "key19": "5xJwxXqVhwLToJfviedDdHA6kxca3ZbzNun8AUuxPFRdcrqDQBw3yaxAiwkZfZj5HQzAdtaDQLZ4nQbyGxZ6NarW",
  "key20": "2XbPhdThvACo1mS5LDF8Ve2AfVkqZPyFhq4AMx8YuT51XSLiuSt2mSjbCgGyxVs7zb8wvKZSCGR6UvcVVJkL6pgQ",
  "key21": "57Kjrhvo1LqBHiBV5EPQvmLKm7n9TSF3nazfp1FezQKkKA72FiUYBWWsvk5JNNEmjonKgeHVgep1wVy2Bbx9BTkh",
  "key22": "NTfBRTSSMhY87EHxmvkBpgSRzb1inuA5Aiy2bMrXUt2oqKtPv1CuF54cAuutT4ReTwkdVVb2C2CvzLxv9ThyTVJ",
  "key23": "5txzKCkXcB9LmDQy8vC8ACpu7wXgkNbMD4jDhciKvrshJncvT3JhMu2j1o8eDUfQvq5wUp95To9TCfQpsNzPy1GC",
  "key24": "326EJ1cDmYAfdcD7Kyata8dptbkMesZyumHnTsWBavK4PHLaZJKukgv3SunZC8tjf2gPAtFM9j4729A3pM64VVta",
  "key25": "5HJARDfmYUNCe1CFgChtqgGn3bVeSyEE8hNYNkf9ogUSWXv6L7PjqFLvoAnobUVSEWAQHn2VfKDoDFQ2ehLUmuJq",
  "key26": "456AoGhBAY89k6jumZssLuDmF1jrYNjx3PGQfz5vs73F2xiKDP9UYLDqaFCbjYX23D4QtEVWHvQHvmXVQmJECHZw",
  "key27": "28UFhWd6ufhixFXfitpvkSzjCabRiKe7j5Lj9Ae2NqN4gPWah4cmyciyrUnrVi95PaGRivwQFm863RCs6Utgki6P",
  "key28": "512AgdMbx637JLcChM6isSMeGzGc9DiTMg8wcBScbhW8rwTpAwjJ8ZPzwjCSS2QFDV2MTARCUsbgk2LBpMsfT84H"
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
