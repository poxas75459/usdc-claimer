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
    "5N2XV63Mf2Z3aXdNEhL8vhaULqXFib7bWudMCWjWNnRfT1WG2NiqkQ6ZVzsRyB83T54Eg1maXYp3CdVmZShvvu9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w7Q5ikMqNcAv7CByXdBDaG2csGn5JRzHGg7KxtJ5kLVXRo6MePKVgsf2tjTdkWrsdRAm56J1NMoEX5yLaUHbSca",
  "key1": "2AUJhQ5FK2f5ERh2BNZxwTGSw8tG185XZ7yGS7iEinckuAVZfoZEVi1vHR73H7z5gjURcatof3E7DvJkTtm6Cf9",
  "key2": "2op6iuLWogkoYEDXdYbiJowwMZ872uptkRd4z8QC3ATMXZaNtpkDwDktJcv3R4win6v4tUcmB7SkPUGgAETfXaAU",
  "key3": "5XVidFLKU4ksnx4ka37eczoj1W6f8AF6FAvtbfwh8qQ4fY9L2fVGeb4pCo9hKjQGhkfEnKbsVcmECmSvdiSzKE92",
  "key4": "2X8XKZHzMQBkJNmjS1T12hbcU7hBDwY4FxbDton81YxCfjBTyGQJotgevjzHYotq5Q9XgzoTtRhyW8wqZ7z1oTk8",
  "key5": "32oqq5KUj51TxWmVjjKnY3vrYYDvwqNJCoevti7MgNBs9fG2XzG6goKKgqsTHifAzsnAuJwaLpjkYXzrQpZNkRWW",
  "key6": "2gpdkixwB9ApfumpTWK4JV2Knwr48trk4GfFNHi23NZxNK8XH3wQWRtxsWmw6du4nkcHfQztkdyZFhUPFBC5ocr9",
  "key7": "DceatLpfoXDoeBMUoerKuc5DVkJq6RWVBhVU459jRaf8GCJ7PDyo6CUzTtbxozHJoBw5aXa9kmjeHmpx9dJmYYs",
  "key8": "2mpzSh3ye2Sa8e6iiRsvGJZhNuRVbXdzUrPLiWDVqcNUU4Ddtky41wS9vMZJwkRZQczBAf7wRXd7pA7jPihgE6V",
  "key9": "5hvYu4fUN4BHMqFgGV3Ex9SEFWh27Ho4gAACxRDvy61ViN4jsnV84DhiPCfECWGa7YNrT6SMpudYmnGCbYEi8UBX",
  "key10": "DXJLYQ72C44goGEVbF2fZrKPiusNwimZuKdEmSPzY26F9jGUUqZo72eawsZjboYj69YLahy7WmW58xvxdfsAWkk",
  "key11": "k3Bjb3FP8KuwbMzGy511kH7PWjkG2VzLQWSrXEAwAwrkGBMzpXqWNTpE9ctnNTTg5HbobGcUiekrwfot7QzoFCV",
  "key12": "2PLttNZ58Ww35n7T1wj1ujHXfAnioiiQkTtYBifbiKVqeR1bgHzZwRWRUo9EspPfQUDHLDaKfF6PxtvrScz5u4Pw",
  "key13": "33aipc9i2WdfPaFwNLigovywDRq4TFGmEyct4sAF2oFgK6akc1K2JpDKzVLYX1zTa1KQwFqB7xThGwHWpZ2c8feV",
  "key14": "5QL17fC75sT7KSaFyWpF1TbNx2p5hQtjymVBDfgsxJbMioJ5yBXzpwxHtUGMqDKArrDE88Z3B4m4PJRFJCnJuGRh",
  "key15": "4vMKA8WZy8dVWfH3gC4R7kqsDPsY8Nv9qqRMVvckHzx4agFDdNdw2pW79NTvR6qaRws3TCyF3yLoELSFWigywAT1",
  "key16": "37K9BHybzCziXEFHpvyFpVRKWUCwk894kVJwpQYvCEvkMUEj6T1SkKDubTtQe6sB3ucSqFU9ufH7vfLUeLgSxaaR",
  "key17": "597uFpiaeQoB3hPZxjDjoEpA9PWBDkqqdmNWy3Ryy3nHSbtZJZLAvjiBqftScYybXRLA26m3MKJogW7dpS8rcixu",
  "key18": "Na3EnYfAoFmFVwrXBjedP5Yj3RQ8ar3fsFBBTgGJbFdPuQxWqjENqzZ2p1RV1Y7auL87TUGuTjk7oyTJ8YchtvB",
  "key19": "3A6R4HyuZSusbvGgHfmkUj3SJcgNsoPAYJpSB6wAGbctFqb1GXmndxuEBxJdqRQvgFGTxCqUMg1ZZcaEQtNQ4nGA",
  "key20": "48uMsc4w9jAsviMGbVd2fmKBPBnaH6EaVyWHittKVo5ZuChHKU5zaCHZr6oWUrG9G9aTgt8wgxC6JvXWU6QoVwg3",
  "key21": "5QZco72f3GsYMCQTCMfTtXbBRWdwEnuu6emY99hY9CgZPzH9JaoTRXzTpPYvgVbw77iPtxPc1eeyAmuhFpNkq99t",
  "key22": "4jFoBNvKYYwPj3DgeiCjKo3uV6B2kXcF3dKB3GriihwbAmJnXZrPgKEmVQHy7CwQk44skSXU3vEai5uiZbtnpgsp",
  "key23": "5DuVi49XztQ1ta8mSbE8JJPLuqnNSdZh1NPbr7qPvJx9qgpwtT4pS2bBLkcox5egoyXvyLxzxa22taHxSN1cB6LG",
  "key24": "5RPrDKbtcXDB8wi41RvxoKUcBtHPrK7iyijr7daoiDwqSLNnCmCdMEwpXhkmrCcWE9UuapeeFGFrLkvhzsX3kmuY",
  "key25": "3mVrQtgrbJx4j6Ap8dv3UGNzUy3YTC8ejCS3Uncwf38DCfU1GhKbYvKACqke5zfEbD7Se2xrLczPKzwrMQ5fAnnF",
  "key26": "4kihKE1h9D63NWamuB3jeLZ1jNLsXN3ojBm8nC9Ho6ytvAVgKM42QUsRVQzVFQBEa3m1rrxeXWyM48AFczV3KpMW",
  "key27": "5o8rRJ8kkb5GrFyHPnNQhv6PXViK34BHBoEjZc4ZsKibAULtMLxLzwyJwpwp3C5ZZVM5Bdu2XMswC6vVWkUFG4hP",
  "key28": "5E5QKECJnYhGjugyLqrbDspCD3uuX9FHexkfVXqgh6c1yJsJKZiuNvNUehBb2raagzWaSLfFEhufPvkLqqnjy7JG"
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
