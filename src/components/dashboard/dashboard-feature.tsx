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
    "574ujHg6ARzUsXv2pCWK5nSFwDUTbcW7RLmni9QuCPJg7gkdV3KEXkWQMFN7B4iurPy2e6tMdZhd1CucFqoamwqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ReyBf8JcVB3iV9UvAW24s3oa3Bnu4z3HHRw8UU4u4kYd5xcv4bckwjwaRcE6MP54ARMxEpZbZQLzShqTzBCckB",
  "key1": "4UUkjyMF7r4euRjPczQX969WGGFqDLPJMLVJnMp2dKwQqukJAGbeFTabxpfdiJK7EbdYHZXqbHCGnnzScwYoAw7A",
  "key2": "23UETkKPAh15CyEo3FMdGmCmQmp9PjgPEAW5N49XsSjzN9wKNgHHc9fKYEWKsQQmXLQMP8y8cDivujWWs7LfRHfX",
  "key3": "5LjeNKXUhy2qcLmrMjA8pd3BFSHDG6H6KsAVmF81urD6wYfA5aEHWPwo7pvpMsKW2Z1pqHzWvnYrwx35KxWtwpPE",
  "key4": "5tDkE23KgU8qFeU5AshJzbifCgj4PrYPpmXsqBAXFU5BTrGiszei7BmLS7sXQdUkytDY22sNFc22Pe8rnXZQDDBp",
  "key5": "tWH3FUxaBt7wuqQwAYeWdXvNz2R814xGSj53vvcohEqng9KhQtZStmBmTdrMgZ9cuLVDxz1gL8AvjSc7YZYuBdD",
  "key6": "tWP9DKRenmFF1cpEahqKzGXt19UZriNqHSUvo63Dy2EDod1WWmFfL7u4HRC8MaVggStVEuJRs6rfmK5PnsRj8MF",
  "key7": "5aojjt4Ey8YjSVbREXE3qvk2Sa2Bp4uGKsRxL8QBjDHqnLvR8QUor2VzmygRQA18n8LnzN4uuiWUjvmaF1jHs7Bq",
  "key8": "2PoTo7HoDarPK757fsN7GZzdVJoNRvyXF2un9UsYVmhEYifkXX1cRtYSyLtMxFLEw9RaSnbKqkySAFnKRihxxWqN",
  "key9": "5srUviKpadJm7YVFvxUSmLZVtvGA2McQFh9DZmt4Nc3Fzb57G1zhpwSXEwWjDnXzACExJSgcHyDZQRSkZWe3ye2o",
  "key10": "CMSnX28MKGEAwc3EJgj7swZi3F3tPnbLmTA65ioGyRw9BuUwyKhxA8rxWZHzR5o4t8vGTyxZiG6jdzyAq62Kshs",
  "key11": "cfK8JdktiyNKq6RBVNFsug6RwUtxPBd3oGYcqAwTNDnBy4rN6rj1xRVQHiew6gxgac9kmDgTjcfBUPtXykYJ4uC",
  "key12": "5pLWsQzNmpip2mchkSbwjLiurwC8QcUFXXbHcgt7sutkhBUddrLikYrb3Bp7UN73wksUurhhPf41nasg6s7nJC8G",
  "key13": "3CfcNTtmLcRUJDzxdWHTUGGcUFovKZjLD1yoTAo98P7GVeMRoxccwNKWNgwcpUHwuF5zrZuQn1qznQKbKXn6pkGN",
  "key14": "4emx22bgNL7oTPD7TBh2AkyfpGQsqg2HLh137WvwVgsiEyLPSwoQSr9DVcpYFQVV6TE6TZKXejzEnskqS7LxEt5d",
  "key15": "4u8tzzauZYpEBHdeuktPNrRj4mWPxKykzUsjFsdxXkaDuTqvuwBX6LpbTNqHzvg9aPDz8vQ1N8JU37HhbcrAP2T4",
  "key16": "RU3KeHe4YA2V2aYahk8gGjKz6pwwv3uZRbf8n2bAQB3Wr7k6gmrD9kcxsWjHezYEk4G5y1smi8nH1pCNswBYSZH",
  "key17": "3o2WqD9HeAW8bViCZoXnFNqa6Gukw5x6bw8PUXHmXZnyMABovBiU7gKjs9cNHegaTdJQj14YHJrB24pnohkhPTMG",
  "key18": "61RUpKnMf3mcTKUxuMxJmeeHhS3NnJ8EJMWZ2cmx1qxLudTk8m4ptACLkNhK9SWQLADnRUGDUoXV56S2EZvSFpDg",
  "key19": "T854HrRQCzt7RoQoXcCNDoTMYzvJZGfh7Kiw1eM14q2c3pfz8iDjwUSn4LNbYLZPbDSbEMn1NKWxPeXiVqfo6Bh",
  "key20": "4yo3B19UMhkkuJPKLvQCFDBLs6kfB9W6SgHohvKR5J75uyagEtDzVFGs4BJZZMGtmZMdWS6JaHKtbMiSePfArfPQ",
  "key21": "4f6kHAdYDRCYMAu5QFpYwZMJE7m1e6dQhLfgcxc3ENp4ABtAeRTvXtMtrL2wvY9mCNYVRCNCvXKDdkMeZVsUauJN",
  "key22": "3wFnRz6Wxbpb58bQC2m2B9Frd6V8HTqnCuzw4L9NuX5xj3S3uAi7fZWetVJts9gg61KgsLVSeSajj1AUwBVgbuh7",
  "key23": "tRCTgXaWtG1YDsu5Gp8QbVPA69WgvprQbkDwrcWcUM6Di2LJyPH23w8NitQCxUeYDE61sYzcV5YvQ3gjVYm3UYx",
  "key24": "jqwQTN5SwhqYuG3SASBikJHPgies5HQ23tRpbzdwg6uYk3nKjNgeJEdyJkDCJYUu8dJXy6JEH9ZZ4GHrceef6P1",
  "key25": "3T7xvm37vKZEmFYdNVggn4dooJStQE8x2GVyjfbd7shbmogsdiAanpao4mGZ2e31QxTJY1ydJgHixgPBn8GgDtZ5",
  "key26": "5SmVsyqHoDURk9H4c1LGrKHs8dSwnmhTMvTk26eMnLXviRT8TWpYvuDPcBVBi1ZBfePJRfg3WEnZuaten8ogStDy",
  "key27": "3VnfM4nHWVjhQRV2SrNKmEfD3HSnR1JK8gK9QRTKfQsjHbX2BUMCpLM1XEQSWG68dtkmjhTGvkjKxjuATzkhjEmz",
  "key28": "5spj2SuoX1dTcyHXAGav485T2KvffYKqbL594qeGuWRT9Pa7MkR9TmBZ9AVENJgJT8fgzKKVvuH8VGHLZN4SQEdZ",
  "key29": "3vEE2Vy14EU4VyQJNJBRYojzFXqSxDQ6zBfJtB5MsEQHRtCBBuqHqD5UFCWgJoMxxyiTZtKFijVDcSEaC7mKj4PY",
  "key30": "3y9jt73JwbeEkpDK1mG5yxexU7aLgBBpaBoNvPqGXv6d3u58NLZGc5jqo1zngfa736huEjK3KZULR1zvtE3YAcFq",
  "key31": "5v3dA8XiPwBcHi82d3kHBhxbBqdEkpKwwNLF8h1ZVcyNhjLTphAyVw3xwkQXYmwj9uAstKWtGKKejzSWzzXYDQau",
  "key32": "7TFyUrs32EEJDQ3BzJamEUkYPognPjYt86k7UtieLJ7YhTRjo5Wi32qBB19x4HSviCLGRpXsy8wvjLKAX5RUyBZ",
  "key33": "3F2xVKLMgJriWcp5SWiw22V5AnHrttZfcGhqZS3L7mu72xaEw5PqEaPrN31x6T7ZkwJTNG1oeqRNujMGsBKtAmZM",
  "key34": "VmjyFyA5B3dDmuaqgJRWfTtGysUojsvhC4JPcwgyc359KzWuG9CYm3vFufk7o4ndC5uyWNjT6E5JjhGEgMJuN2q",
  "key35": "4qqzXKXxQWLULpR2dmJArZPRPfDY5ijUNR29f4FBPCMC3fPkNmK773zJjMFqqRCdvBRberSXWUQMXFA4ZQeM3ysv",
  "key36": "4S6ctghTu92w7uTh45Tqsr7JpLF84Zgm1iCqanfPWAFZBrpQyHd1TnWcu7F3EbjyYRc87JajEcv5YBCU3ZN8u4Xv",
  "key37": "39z2gSHfamJs6Lcjw62Y9ZzUc46b4isebQwLESbAjTTHoMd3jUTUDYsUo8obhWdMJfpbAQEUMTSErFanB7CKDF8q",
  "key38": "3r57Hgqz16CSX1gbAYTfaxWXUS23wGyeN2ZxMAQxACpCNXgSj2S5R5UvXvFuCNp8aG2vX96EctYTBaGzRoKj1QUY",
  "key39": "4g3UPWXMqr1K3oF6YZ7StH7KTsUQw2ApTp8VATDZET5TfmBfHaiQzCfvR5FK4JwXkpgz4yQcHhP8q1tEJem5CmMK",
  "key40": "3ypqfHEbkuZpcdQFzqMzFYq4DaTqQ76SsNXbop9YEH4mSQijZMsQDbEsJZtED89RhovVnhFx4dmJJ5d8P74N8Szg",
  "key41": "2foAt5M7VYQUPTDPDp3ShFoyizqGQFeQQ2WSGocy1Ectanz8JidStpMyAmiE3xKAkP65snaWNiGqwsEnrt7rwnBr",
  "key42": "3xZ4CYmBSAgbyCnu97qFTsv2vfRUBiPVuvZYyQBBqzeKJ4d445X4UuGNZTew7d8TGJQf3fiwmUhnKPopvJWVqbzs",
  "key43": "6714EBPKqGYTKy3C4Pa19VZBZKneZpNjrK6U8qi6TFUNz9DSeHSbAEfCmRrsCmXSQ3bSnxsDXfxZUojb5bizSfDc",
  "key44": "3XHWA7ejgSWMRBVLtvjmnemEJmTPtG53Pu6d2ytgzzFEgAmm4Y2KoRPLeixLzew4AvmZhKnqVUxPJP8UacZ4jJ7o",
  "key45": "2wVKoYooLWm82WaKdEAGQtb1w2HCUeujL1zcTVu9h9RGfbQjyW13P1tLaP6KQUT83voqBkeJ3B5gpzNJFSytcd6w",
  "key46": "51Mc8qDX3YZuAXisBa9VC75uHaY8asNz82LrA9p8cue5jDyAnuqaSUuBw3G9jQuJCSJM2UH1jGHky1oELujURHsS",
  "key47": "4oqfCmN9qYbJvMik7topWtL29cQAbiPZxzQBcFYRcyS2SfShBcrSJVfVhwW94saJT2kym6efWHSYbw423fkjAndt",
  "key48": "3ESEFhQ96Zn83rPZZyRz4kYZ8s7xAe5ngLtrJcF993h8a5ZrjM2Hbkxaz9G7xaoo8SDeWBeBuWZnK5k7pbaUKBQy",
  "key49": "29xMZHDeDoGTaC3NTQ5jeNgBf2XhkbB7UnYyffeJbWrKWQLuyHwxZ8sNHyTxrk1Qwv7ms4pVC9gkzK3XCzuSDPen"
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
