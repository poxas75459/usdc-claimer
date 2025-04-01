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
    "kP5BsjRRPb7bmVaNMzirMwHdW9VTXywkFgkkwWEFjoG5sdupdzV51ZraonGWae22bvqkuDuszusrU4eKtKT6mmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oYVt99sDGoqP8dGvSnxzAnb1Rvx3BwctmZRdrCTb3Mez3vZJCSWhGksxCdccAB213saprbM7dXoUDDCHRh1cnDz",
  "key1": "2KUY3gRXpLQAcPLKgUe79SVKiM9CySatyqYmnjT6gw1YVdnxvKsfmBD4VehKmkuDDGivmKbPhwRFoDG8Lc9c1CgM",
  "key2": "3dRmwGEdZCULBhNnNQJHbw5wYU2H9jzUv8ZV3MkDt4goNrDARc9MYJ1yr85wpLmZVrEaxbpLrd8quoHWQJ1fxkHX",
  "key3": "45KGK55U1nsbpE43g8YP86WgFNBPMf4z4HGnRQKwK2uTDd3xW7to1hSxLWMxPnAaTv9FYbP5GFcrWGZYVLEDKNZT",
  "key4": "378KQmkHcqPKpvrsiqS14BMB6oE1ETyY65s6i47AXT3TdCjxW5KkEC6xctFHvsvpDozupRpjmNRvbDaJw5t1fUtX",
  "key5": "4MaQcyGsaQ2Ze4mHDfYk3oQDoKmd1B4jWEgwu3qViz3qmj1WpikP67SsJK1o1pucHwGGPJYvD6gRfpKBq3vtZVkR",
  "key6": "yeWKaPPmFWan86yPJYh6tqUvxmAZ4WTVVhviqF5A2sdTLU2M8FU7yJxPWg4sNtyvaNZNwQ3CahFtczwbBFKBQku",
  "key7": "42n6nk4GZ2sFQkEZim3HHRrJyThxuance7gvRW4RQ5vqJjuEqakTuBgwd5hbadJjVu8syPi4YDuEZtzgbtJA1gLg",
  "key8": "3vsyzRZY9fwYr4EY9X5MuvaNqg2RyWDHH7dWcQnSz81YGwmoQhjdVfAYGRrSH3jDHdQ67EAGvSVvEnUrPDYxgj3V",
  "key9": "5QyZSs138BKzrP6v5Jfmb4PqS7JgSV17cT9rKr3rjRKSFa5Jjy5GnQBKza64A7hrs3sVSANvQ5s2x3fsPEZbZzM7",
  "key10": "65drNXu97U18A5R2zWALXuty3oYqtY8Kn2tGVn4QXS2EgV3B1EjRPzDnQsT56r62x3QNKwRAjeozmtMxUsAi3adg",
  "key11": "SKLYhQSCzaoqQVd5No9HRADcyKCTxtMj7zypg2ubXBG9T9AGWXgnibuKWkNcVshzJJtkypoEHDKA3tD4hZAfcnT",
  "key12": "2eh46muEw4ynLY6NyWatEBa6mi43gitifdvcn3stJGg9zXAP5rekqUfBeArZxb7zEijUQ6Vbyca6gxSoPTzGR2JJ",
  "key13": "5TYU5KP4zcTdxhR8NhEEXNpePFieFgEjihcGD8TZikTsdMDCCSevH7nErJ1K1J6gnRF3XhFXwYL4y6z1kiRBGnNs",
  "key14": "3o4uY6pD8Lc2Pi3goY1dzGiYf613sDEvNJTSpk2U5kbUnFZq2XCuRsfg1GXiAxG6z5nAMHB7zu6JSbrkWPcadJiS",
  "key15": "4L4SNtzywrdU4cXwmLdsHn3nRxSXhA9VrtrSYLXQGKtsdhf78SuU52fSaV61bDWw1egvVVSfnpLoyFU5jGkgYz3x",
  "key16": "5qnfwuLVgA3Z6ED7DvJo5rXA1PAnr1Y1GNr7gZvdPu67JnEy21aueiQvbccGpheeMpQcsFVTr1YRCZ7AQyUQfcrt",
  "key17": "4bBgQcxNaxJpyzNiMK2QeWVHnnJ6DqtT9yboJXxev9UQv2xCgoUDnLbgHpVf2NGT3NCL4MErcXQBb24hAfL4K9NB",
  "key18": "5UMJM4NtvA6gvp7pCJUDjhazdyuJvqASWywfhdG2M3oxpmepARQ3gRqUm51Gf1G7h85NXZ3PEj4d9ACvpG2HA5RR",
  "key19": "3AQM6CPUAbJ489boeDAufYcBAYVoWkeN5cUruFnAQfn2sCwGCRviZfPE989xjLK5kFvp7rBxZhWKjY13kz1v3788",
  "key20": "4YZqdowr68TjGnepypYKxuiku3La6Nw19oj8VT32AEr1MsDx5u3hA3HpUNX6UDBQThRrMeAedk6JH2hEp9Em6BCZ",
  "key21": "594Wpz4NSyYaHHk1YPrJufRpSmeGLushkLmWzBMnMTQYRD7oaJvbrsFRjZ5KJ9iCVwfbFjzcJ5LYmYCSSaUbZApg",
  "key22": "4ZC9ychCqwqmaDtixmnmUPFRgk8HYV1EmvrQNUR2GeopcRfXmwNtum71xwribcrwsJ5PP6aP3x7Y2AozeAhBZdXt",
  "key23": "4ethJ8R1TTZBuT2HtWBDg4ek5eHx5AXmrej25auZbHtHkknSTR2ZjDuYFRNMUcZPvayUyV7nnFyaWbV2PFiGDhmW",
  "key24": "631istERZLsUTZ2Hrvf5heXgbAdRNhucWvt6iCY6qoqbu5iPm546fvvCafDX2zyKNSExZyU8pQRvNNHDbAwrgaeY",
  "key25": "26WDZKzA7qub6d2Dsqugj3XDmxsovqpqsMccBDB1Qhjejp7EJtNjhdCGeb6ubtJuxvD29EGTQod79VDTXTDqqAWd",
  "key26": "cxeUAkAKLehqXL6bkAAodfRYKAwcafkJoHRC6za9paTHRgG16De2TV5uDEF2GmfiaMtXQSgJzh1pbgAWbX2CcqP",
  "key27": "5aSMNqSN6G59H7B5zi3yMin6R4L7t8GhJbwSG5gX9T4BUtQngn9TXCCrHZpfDbraMdXz499qr3eMdaKYUWRdZdeA",
  "key28": "48td8uzhBp4Psfseq7HCWy959p7prJQyUBgXRWM4xuMYqNhFSC1bcpCNzMbMvpsKgzHpRccf1yHtpeWoq2wjTy93",
  "key29": "LawLDic2c9Ax1gu6H5iy7mCWkaYuMyXssd4ptT1EsjzTCrTUfueHgneeGM8UFo94Zw2UEmf3wFLtwwRaSY2nvm8",
  "key30": "udVLT45hdr2AmwPWVRBv31M5PGHA74mh52AEzsXiCkrkSrTRNdt8TAjfza8c5WnRyHNF95ggqb8tqBQwrnutF9X",
  "key31": "5SKS1Q8Q8vKZUs8wE74zQB1ZF3G65CSsKvuGwKrLS29q1GCdkrXFZfd9MpGZywv7N6HEsNaBud4jqdsRVWFq63QU",
  "key32": "4gAPRcorarMmBYfDrhV7P2BdtWn84KBDUbTeQUVGonf7iYr61pnWpjyxuffLB4bgN4AWZ4Hg89Rusn6yYFH64aDw",
  "key33": "2DsZKiAv31hN9SHF1VVBXA12jbLvr8oaMkBvQneGd3HqYbkX69rBbaxgrpmq9AEKmeo2jvWciCu7zJ2C6HaBNkAu"
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
