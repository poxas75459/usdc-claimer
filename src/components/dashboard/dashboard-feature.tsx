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
    "4QvTDzFikCHgDSkMqajxfY8pQC1WjVScxGe8rg2ZQCUs4YDTE9BodU3cFk33f7bPyH2XGUc65oYwoGYUwWhCEpT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z1R9VNTpxXyRrnGyudhNopWUGkBAuZ4D7ZSL63CVHHcw47UoDxj1srCXbgoHJ96xhPk6nqxp73ZigHRNms51PW5",
  "key1": "3LFNQDvrTXJbjBufWTirVr5SmSCwsAZAgZWsPoJjWwr14RrxYeF2jgbKqCVmWKhPVoazy1QjCSdERKwTtaPQr7cL",
  "key2": "29iRepXV8RUcd1B6ZfhF1LeyV7vPU2rvowfuMdjnbQbUm1598mG6CdvHsXxd9WaRRsNXff1q3uGdYNWFDBWZGTYD",
  "key3": "2DZGFGTgPe8XFWg5pwW6K4Xmnr9X6NUqGoZ1mGV25teCo1YkC8G1y34mPD9esKLcBRdAD6gyzTdQLc1crP9sYjtk",
  "key4": "4fhfA9WAiV8aZibA69cAo6mwxSPyn665cJYXW6zn3mKDdX49BKvzdqZaCmYtNrTNdWXYLHmpLL2uSwEsYK3jThVw",
  "key5": "5pt1xx7WyXJ2VnwTGaUKz2oqh7eMRURNQwDooHxasxrsgcKcP2CcVXUAPcA2qj96A2cvYLJKErFs3es9AkCeV6WE",
  "key6": "t4mzWF5H3jiFZs8xi811onDGbkz6DEUKTTSyjNgZE2HtFhYmi1S3Fk3Nv9hDGCWVWkRCtrKHBsEDkAW3bSuUcmm",
  "key7": "2j1J2PGJhfecXzFiDz9GscxRUFwYgmp8BrPhmivLE9SBG3njNb3aBBVvApKE4FEeEYh6wNAoei33NqDDpTfaMHjT",
  "key8": "3SoM777ovAvxVjnt44t3riYWLCE3gQtzQoGqquGRBuHiXQH17Yd3fhx5ecWuEHiFsGdCq7AZxgR1gwaXFXHWneGf",
  "key9": "2746eBsGq71A37SNJYoTM4tyg3sKXwGouZ5PUGdQFEJYK75Xd1z46cAMGNWkBWLM2AVRv62Pjee1orqMuDmxKyeo",
  "key10": "3iCbFGd1tK85iM3JWxQoNxsA4w6ZLGKPLqPEXKhNdgZ1MjQUabr1hRhbyoFznUXr7N68T34MhkrkPB5Afzw6rSff",
  "key11": "3RMd2wcAR9dABwZyNEKur3NbxHRLrzHmibsYvkJjTKHzNi9L2GrFonraom5WPr9U7GnrBMC7AKvPRCngzSy8Y7ek",
  "key12": "5JQAoFxqN3qEy9u4StsRGrwNUUoXHYgEo76QUUZQAEzXXfS72zxmJKc2aGgS92YQySUtejZbDGzp4JbQQ7gP6DGF",
  "key13": "9w72kpJexhaan5ekaYBwRar3T3bArK7XC2jUx3zDG6Mzvcx1BV8rG1GbFG2GrEfWsrKuGMpQ2vN21TnrEu4g8Xr",
  "key14": "4ZuTzCPprdsBamQ1SwnKxqR4ga9kuhDwJUSwYGvEYPGqHYBVVFV5i8Qc2QoTsYD4MrF5ReXUwL4kBrVDzCd9icWi",
  "key15": "9nKAbxcmjVvoPGkJapZtSeWAeJjhDZajMwZMz8Y8d6vstM83ApfbQrT9iceeR92mHPpDPMCnzntftgSUwvnoxfs",
  "key16": "37NWCAfmp7Jg76G25pzzdVTHzS5vt3iMYXPJV9BJSHCz6mqVyH2pmMwYkiEbs3HbaTGAS4LwqB2sugnBy3sTJumM",
  "key17": "4T4mMS8YXiZQNEfRbnRTUYURoi5Z2FmQbCqwZCFjbJHxXj351djHGvmYrj7qyDCwCnNyDQp7ryGNSRcWcE4j7wog",
  "key18": "NWa4JCWg6Uj3x8W6mgQYXr5YQaK1Phtjr4QTNCcuBjb99WCu4T7DU59hGUt5VKvGhNwxf27T5hMwvbiN412q2r6",
  "key19": "2WW3PDvcmZUJ38gzEoKp9isyqRuBH5tARyFt3L9x9s4hRhU6Xp4BKPicTrooJhxLAfKdHw9ycdcjmjhjoPYtUq3X",
  "key20": "3XZySskeTQWzBG48tUHXch7CazTM1EdCRpjqcr7uaA8KpT1pzszBsyFaEymZEChNKvdxaRT9TiXGGdeGBPWriV1B",
  "key21": "KEzyHwz11sCq4zkKYw3nsHsCNmc7dxdMVzMgiTPJyTfAuLR4DRytqdDjdw6KG9STZTp3GPn37mUKoxbJQNfENuc",
  "key22": "2Y1JtYhjTFFfpKbUgM21kwGKYfNidbEycqkHi817BdWNpa3SmLPuEZtw94bBCnEJD66yzZN9rt1pTwUXsB6d5w8G",
  "key23": "3uHMMRQArpstoqw8gcRwy8Y6PPhV5zydZLT4sm6tptGDNBZYkjYhkt8c7AhosnTe9aDpq2vi1dC5vc7M7wvmrrRo",
  "key24": "3UozWXCCH8ZdegHLPyUtpHyURun65C811gYwtA8jgQeh7gwqBRgDa1ZLeVSPi1YQrfkWnN6Dt2PzNyFGnJceJPbw",
  "key25": "3Qc7vqDDUyPssQeH6pr5iBE97GSBK6VFijs6G4C1pH7oGkRM5QUzNPEm9gKhLBcEbg8QPPo29Lh4sRaic15WP9wW",
  "key26": "45DqgN8dhcmwA8QiX9brKzHRwDNBKfUqFiKvp65bhFDQFX1mawGE34aEfrtob47vx9nLj2MS8FysDBEiLrr6C6x9"
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
