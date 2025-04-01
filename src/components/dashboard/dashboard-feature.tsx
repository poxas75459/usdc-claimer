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
    "3ijbi4A1b9LW81SjPNeAXo7uUYVTfZpnWwxQWWWigURZkWMP9QsPVXTkucVvkVD6ZQderuee1PZafnXcrvK85nut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A9vJZ3bhCqiEDkNkev5RHB7vkah5o2ypb74xijZR7vJeEJodbmL4VWtsfFdbY7vaPjhQJEVMRaELSRGNNQkyfHk",
  "key1": "51HVGaig8GecgRiW32LksnGPruyVrSeqcdF31Uojff5NrN2D6xzTG2AnGqJQmdq6h4d4ADMvcyuDpHJuXhvGkpzt",
  "key2": "3cZsvgtotx7Ru8KX48HeCXVgninCnzW9F7aa7LtX5qJ15jdk2tfF7Q3Dn4tLzpQfKnSG7RvTppRikFNoKi2iv2NY",
  "key3": "64c6kbAcVr5prxFGnhP1ABPz3WpDFzQnajHnrpYCd6xWZgfbV27WATewYvowpdUkKD4cpucQknCP7nDTz1w79aDE",
  "key4": "3cZkck3m56bc4djHWdBCoYbGxDy8RmZMyLrv5omMGJtRjEMH8gt176z7cG32p6VxuqFCAV3KtNtmpbcwSnGiPPVR",
  "key5": "Scg1WsCi5rE5sfrvDQk3jzqBZ4t3wYNXySfh7yS7CGvKgd5A4z4ojqxZtqbbsr9aBLvab8xWkqjdbdj7VFrHL99",
  "key6": "3N1UzKGYff2AxESs9rs1ySEcUmF9BuL5ijrrE75E1uVNhUdu78DG4QyU8XQPFxuQpWnQzc3ZKHLcLyuNnCSqfTb4",
  "key7": "2afCGngNs82DGKKRG512sRBviyxe68NqBbS6YhyuCaKisJzMKCCou5LpbtXGtuQer6tw4rUmX1vJ9LDRAkb378vw",
  "key8": "3SsbM1q1Wkh3CjmNfqZRDFiQe5vXam1R6UvvQRpdTEK1C28PbbecVL9TyyA3epbpnqkAKcBtujNyvwTNDVcRQthb",
  "key9": "5iSVTEVXbeJ4CKFdT9gvrGerNvLcC4tRNaApxkdvqpwfVS1RT4CYxDZu2mvK1UnMNfFbUepPXDtcf1hhsHuV3myM",
  "key10": "M5FZn67ar9ZEnpwfAVPHv4P6FBt6m6MUaWS6yjQ63YyLK2ckN6qmWfnq3dWwZmDCV5KxoxpLb2BJ2AUUsXkA4gY",
  "key11": "2PJ1rcY2177YNjopQ5BdYPY6xfipuZEGMMzGm4rTzEpe25HPj1eKmq5dnfBaFLxHA8nA2WQXa1n4WeuqpSXvUxUY",
  "key12": "62JLfg6Y2oqzbm92qMh2r3rbxG9RkEhAZLih8UMvEiFeYMi4GsoYupaFYqBUNfWWAXUZFevEnqqq1tnRYNn4zdBy",
  "key13": "zHTv4wDutu4srEmyCArLEV9BoRKWyB5TQ2YwFG5AGtPpQBSEWKxkTdigttP4mzBMn1USpmwFxQ4rMQ6YbJ6dXbe",
  "key14": "xcAtXBbuzeVF7QMsStxQh6zxb9SLjKfXxtGDhax1p1rWK9NWumtpKv6igMrDcbMq8UbAEY9GNL1ZSJ7CVo34aoK",
  "key15": "W55Xts4Z4Usdx9DLLkykQ5iiGWbhA4qiVzpTz3goEAXMziM4SnveoQEiF9LiY7Q8sFp41s8LdVcEqK46UBTGvsS",
  "key16": "5UHGR7t8j6wEQWargQZ5APu5JkuVX5PUvFq1d9Hjaurgh77Cwis3vGdoMNKUtRxgeY7PMrKCWzmJrKnEiNen6aFZ",
  "key17": "4jfhRGraexZ3ZyYPUoAQxRrdnv3zpnAzsGNYL4rgociNof95ZcWBoeRGtQrcnQAKztafB3RrQYNfGbzBXyPFjbQv",
  "key18": "5AjVH9m964gpeoyUAESjx9tgoV2w41bwPDoS5nDjzKEjY2KBLzSGm5Hsmc493yACBQTrBkmVBAHW7qB2qYsnSY2Y",
  "key19": "2YCDSFDrKTFmZHib4J88cFje8VXgHZXSBigU7KN8dTqkXCWQU29FDCQ87pB7gqaKJwmfyUztutT5P4BKQfaixuUR",
  "key20": "3KtgH5NtmhZhhaDWfawHQuBsebXrYxCdL57YsSUy7vhwWgEHeCjtWFmPhXmY9erizd6kfj4uFBCqFCPcDktGAYVc",
  "key21": "5tMtrByNS2fW1ZMmaMHmRxSLfUk7wBWnxyfyQekwYLDfKdmKThNNP4DtNPxWuYzbpZ9JWyqtM5vF4tTxdg9HrckZ",
  "key22": "xx9wUWw22qXeCqcaXDRpqqAUyohTnmMcMBabqVxohqAUDUFwzCTmhi8AVadskvGKfrmzp77LkeWLYaP5i7fywBG",
  "key23": "46AQ5k4A4fDt4akYCtv1CwTaL5nVhd2cUWsxsCkNw4cfMjbGHjTmrSpNLJ1obY4Rrj2NgDkb5PVNhNdtmwbjff5U",
  "key24": "44mR1LUvJzFdM3DPiV1dwLM8StCKS3qQRkN8ga9U4ZzHYihDwSpRT5fnW1NmaD52HyUr8p3nsv7E3efbAq2PJARd",
  "key25": "2eenYdUsVsyHFoYbg7A2bZATNzU1SdESe9mdBYV7t6AYfKXCrW75LbCA4nf23dq83jX1xp45ZoJ42cfZ4ADy1Lwc",
  "key26": "2n8w7NAhKjPVhXPdgogJbkF7BtjN3BV2E8myRNHubQ7LStywojCKDrKZeFSrfjeqNKGSdZ4BgoJM3zsPG8SpmC3",
  "key27": "2KkKrFMnJ5dZRJGbxHC5GqG4XRvW85PDoghaW5QQYMVqs9cmeWnxEp5iHbwWRWkFgMn9dR4tfA1vnDpz2VfH5PAX",
  "key28": "5qGkjZGgh9npi3USBMGLoGTtDNtMYBVsDV24GAv2AJoBPBVg2tjLi13jvoamJu8FmCHHternk4oEcsSYeYG8uW8U",
  "key29": "4HygzNBUewmPBwfWq7btswdTuYxmpef3cxTW6mg812wzRkfwpERgEPB8BXHWXp4fkMFeWJkXmdLDkyyYHa2t6vU4",
  "key30": "4bnjX8hmPRgUNdxtACgi3S6JEocfYH25SrcoBCH2LNq4tp4o9MARnSbgDXiw3LZeHaXvREw67YQ6pcZWsRa2X7Hb",
  "key31": "5YkEzAm9pEgBnQ5gEDpD7ji8Dcm796bzgGejk6NPan1JRnEF4YJT58shjCwqEgzFRBQNcYP5M2GADjNffdpWHdW7"
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
