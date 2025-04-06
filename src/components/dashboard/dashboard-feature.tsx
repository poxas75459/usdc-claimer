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
    "79zTcsyipsSi5yJ2mYRa92tbXDA3nNgV13wZaqtZpzGXoLgp66BKWSoPx3pSpAEFfLUxifYTcVrb4JyS7MyZ3ey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rsQdxRFUtpJRZu7npf34C4vtw4sQaQLd6HBfW1hhj78dsgHNdRPaEtTZxWsp4xWj6Wsefg4JaH2pbSCoosPy5iB",
  "key1": "2CXcBdnWaUYPQDyeRs2Pd3kdwHU1emHkYZoYoDLPPoUdbmavwW8x8KerNFthihTU1vVkcDNvm6Rs8EpCTVkByZTU",
  "key2": "3v3EP6SGTJepH79swZnxggxaNi8gvT3wcVx67HWjEJ9R39zdkKBXyxXXko9MaKcLzWGmoj4ETWSonbCS8ySzBzXS",
  "key3": "5mS9mgFwtiHvWMckwpqGBue9yJD5yxZKLpyKDYN82vofkHqeq1LbkwK5FaVVyugiWnHZ2MTAX4pxzm5qVwDu46D6",
  "key4": "5ygxrYMRPCVaNMUdA9YpXkkkvkVtq6ZQUwrT3xodPGn2f4uBD7YHV8BEXVrBVxkBN6wmwpvwn8gDiHkC1fYZKkHK",
  "key5": "2YSQjG2WZEC7HvfQ647v3L83wwCVa46aedLvtmp2Xv6SaLFVH91SoSt13b8h5ZX885brByJ6xoHtoZXnQhyAY8oc",
  "key6": "5Dd7idrosraGdpGrzCKtfS8M2qE87jnZoyPt9oLvyzuBRyNt4PydmNVGcyNqXZCcZFyxWqbK6eaxrNvMdwCjGMfC",
  "key7": "5kBymRayctfUviRc4W3sMgPbp4Nwgsp2owbYJXtK1MKnNiC2gzWummmpheXFvvSoX1UkGt1CkymRF89REbGNJmuc",
  "key8": "5t8tTASQpyHLCUpkVTbd8GFYUfjiLz1xWxVaR6vj9g8rTneWH1B46DbamqqdKLkEJhUmRUE6Z2q4pwHvr1N2ESQG",
  "key9": "U8reLJy5BwAaSzDnPZgFCRC4X5L3A3go1bXuf1234JjncaeeEQfxfmqVxZrmjzjxmKCTCTufuuCtZEo3RTSwKEC",
  "key10": "5V9z4KnX7zg3bxaCbBq8AGH6wDe3XgXWGVRfgLpZnnNHnFsNAHZZaKeGTwGyWissiWwmb4nxUwKE9RoFytAHKa3F",
  "key11": "3hyge2unFoJ1aRHLkn6tNGcHv6QPn2d7sS9rWt32boC6cMDmmFJU7eaZMHTRDjmxvT71JKvKbReJfaXk4AnM2MDw",
  "key12": "5tEGFzzYYU7WFX2LcBGBWJSrri4JUrCQ8XdytnWMsAPKYzr17Hhqw2QgQmxFsrpNM6AZfqUGnSKmUuqGW1aQpkXP",
  "key13": "4VT1ivLswSetXAf4oB6Xbny5jEXjfyGa7aboRTgfv9y6P8vXRpYz8itZJdZ5KxnNRtG48vdgKFcvjn65b8vaKxUZ",
  "key14": "4YFXnEM9vQBix7mrGTg4NfqbFTUetUPZyrH9Ddm64qKwAJ3nfCX3tvMoAfFHkEhLx5EG1ccb4PXDaxQS7NNxtW17",
  "key15": "3H3xRooho2petrmCgPfCeAvcmY4KnrPMX16KZW9WtYZfTJLdo9gdpfWbrz3wVzU4QVZkc3bPadgy5H8Uqs22VxWk",
  "key16": "oN1HLdxQwra4cwuJz1qzAsm7LnfkeuN9Yy8uXvmL1L5sJo5DuqfLaQjn3ZHrtw3iTFRsnH7z8hs6PMW3NXMDcdN",
  "key17": "FpDdH4pLFZNGvAhuugN2WQwAV6s3Q3rbGUPtcqLhdY3aU2aZ9AcnnpxdmD82jDUKLk5CzuF4cai2aRK7yna1nZG",
  "key18": "3moppa2koXko3LRFheQf1LyjkryDjDPw4nnREGdBLTCNBVe8HU91MESVuons8DwisBeaLKmsoz7QAVMDv6Qhz3SP",
  "key19": "5rH4rPuCpJZTTjRWWTsYeXzKmsyQJvBF29qoBGDAUUUaaCW2Htxe3Hta6aDg6bLTi4v3MQ32YzKGfXShzVicQJ9T",
  "key20": "5sgoajZYwvWtuBVsWsvKPdgxFTzhToSh7wrCmLzKdzMFxvSLUbwBEDJgdvTpRWSxWFLCSnfWB6xmJFLEymfN5bDM",
  "key21": "67Q4JiJ3RbkzUWf2i6Le7XDYNZ7AD4LQHJxNvWixqBTqPSxv1rUDBzHf2Tpa8R9n1Y2zMTBxUxsMDZStUydqBsoA",
  "key22": "n3t7JsdKy1K1R7BFeYR8RTNWdmATXxyZc2gQpsNRgDdqoFBhsxUamuAn8qfvKeET7mRi2GzdnsTShbVFHyJ51aK",
  "key23": "3zwKvvdZWC6uAx9Vch77ocZHnNsENT5656rfuDELMZGaN2VJBs9YRtzqiw36uj348DSLsAa8ifLaoEGHXPZy5935",
  "key24": "4AftA59faGsrSsGont61fTa7VcfM2VrGdr4P77RShZ4e8hAirtgxkcPykYp7o9RZMqVJdpdTtpGPfE9D4xASMghX",
  "key25": "29UfDTKrscy1AHnXuQ4KHmYnSeoW1oU16yRkCJrVaydk6y1ZR4fMoxLjxYBWAHKSqTBqHN7eLXMZdeo9HUoEZm3X",
  "key26": "3QgMFp9JafraSWjYyoLNrxRDa1RUsJnWpA6SXm1y5g35t4TRDeHD68uAkysKLxVHfrT5gibgPgZhsoa4JeojwGY1",
  "key27": "4MhdvxPaxN3gFcZEyWo8be7xt19MS2tnHXvmJeYn8hAGREgGQ8UEdpwvicnbDmMkDF15ApMd8PkwYUeU4caY3oYa"
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
