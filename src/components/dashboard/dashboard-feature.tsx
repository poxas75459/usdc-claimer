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
    "3QC1PUy5fstHwYsVxiYYMdegHv6AYRPZA3uWTvSYkFPQ9ToyR2R8UHhM8VwwEBNqtDaowU25MhCixevSimpSFqkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49foNRS1zNpqhv9HUMBz4qvMHuBbeZX2v2B5BHJP1Fa5kcKQFkhPSP9jWWGT6nswd1fyfgSxWNjBVNrmUjDvbhQx",
  "key1": "57HfjFP6CTa7ExDbzAzfyW8zZNtZcrKZRb9Y1noQTZNK8vRVBTrLqeHrnMuVESZitfVUYSmbkQVJ9EMYe7unP8Gv",
  "key2": "2GtNCrLad1WokDr9m81g4CTzAYia14UvFk1VdjSpBrSQqRNdzbGqQcwXQqFkASQFdxGXPY3xMQ3AfxU2iQnwcVsE",
  "key3": "3TGQJW6bLpH1rPv3Ngm5e7DpodFCD9Wjd2cbLDAXpddEp6vAwPtxTQHyQjxxWtGhYDZ4WVBc8Z3mQvCvQHgRVSCu",
  "key4": "jjx28SdPWG61pf51zoG5VvCjaLtFqvcHpN1Ku3KQX8JLQWqwMnDyqqrqv9L2Evduh7W3GYgQpBwZYCA1p5VGAKF",
  "key5": "3EormX3uXFV8NSMaUHmi5raacvgoDetE5wm2ioEiFiJkcrEHTy7vdMirBc66TAwd6rB5BbTsDYT3vWNa58ArShtU",
  "key6": "4pADstJtHiWfQeYkPpxapmiAbCp1uDd9YXzJS1joihi11UCC1PrAKfac7MXt5kGMiuw22xPjPYfdYKbFDQAnhGeH",
  "key7": "vNW9ZoYW5tkCviNWD9yGvaJrYaL1VfnXMHXT5fqpd5MDumzQdRK75xDgL4ykytWgeVNmDHnwm5QPEquRW8YPjmj",
  "key8": "2uvgLAsNxU4rgmG4cEiRJeHgAueGveqAByJXZ5cdgXPDTv6FgRuQ19BFikS2XsLWyetZEWYumjeMrazmsfLakXdy",
  "key9": "423yGry6BoUycTDgpw8n9NE2wVYCF5vGwoA5rXJtz1481XnArGzp7WLqUeCYVREMkzoAdgf51igqYCWHoxwZFqx2",
  "key10": "2quMuhDX2DosjnxuPRnPrvvWCJvKGvmcDfPsEMDvcq4Sm8r9XYxQKDZuxYTdD7eHHzSbgJ8sc2jjrUnqpBMBbkUW",
  "key11": "4YC9PqA7FwroQmTGaiEbh3PThZ6XxSFh2RfBBH4vxH3hrkJzQxU5zELg57e8qKPpJTj1ouSCJEqih4iAdcqvcZ8x",
  "key12": "422TZ6EKj5dTn7J9tLZTtrv2DNWjdxgUSKoCofairehD5HEbycoWaWjtPWotJ6KP6krJV6YoyhR9aBJMJg5pqyms",
  "key13": "2WayYsNsVcxVY7VKGBUJtLcjQxpbWSmNXptp96o23kFF2n2owbWex94BqPXtCtzPtZnR2wmucyFp1pXWgaA8xTW9",
  "key14": "57ZAemM7fEL2LtXdcUFiqgGzsC7e72q7foaUmUafrzstgYVZeyXrnLmBwhjj3BuML6CZtfqCZqUccLsrACZ3L8F1",
  "key15": "s1ykXn4k9JfeenHZK9jwspx887hpxj7P1apzLU5Grj6USNKpvUfz389q2nEarh3d77RnxmGUs4pek8n7MQCy4VN",
  "key16": "2XosjnLbspFJ2sxLajfLLbKrj25rPPEcfvKPsd6V81mDwKwSzbfNX53QPFPnLhSixJ4aVxr4J7KTuiYsd7N5XAu7",
  "key17": "crxqEhsvNWJgooC2Pj928p1sDZgwfV4u1GufbWMM6yWpUeSKj1aj8x6eYyh8jYdjt86YR49WTkhJwcZUciVeAVm",
  "key18": "4eLbWY91YFGxifv1GmkVzPTXNfphZbLXuCqZ7zuNPGo4bCCLwNcMHDK18YLDRZEytdbHPntkBYmHcAsHu8MuuTtq",
  "key19": "D46GX3AQxwayHpTG6NUetN17yHutMQLG9LwaQTD6YtFn1tHQML7NCsChWvGsCoZJBfjhCGvhAAmXsytNPaoVTxc",
  "key20": "uRGcy6ppCf4QYuxaXuVuUqCUTTNA1mKbSUxcw7GhCbqpKd6dNp9gbdn4s5pY5DpetdM9ZZYG4yFUyn1GAfbNHcJ",
  "key21": "4TLTTuCn3u7ex9XwdT7qBXrTamwtQfQLCHqFKxY1Hirr3twGoj4aUaVm2EvxuF1d5nzbS934fcXDMA8K84TE4Fha",
  "key22": "3NsaKWaQ94tsvtDtUGYgKJtY1qPGhB6JXifkancebhZiHQC1qrWeFnSg76eBQMYkMgBgRU6RwmWWNLsxURkZ1M9S",
  "key23": "2qMWsoMU4g6bZXtiys114xPn3uhvvfhZ8rJWSLgSDPnaaUENnYc6dsMWYSRrGHEb442AmDVPsjdQE4V1iLdHfZQk",
  "key24": "42uQ3zrQN6pJbCPRjedUnUcteaeKq8cAn7n7ixbiy1oAw45tvdSk39rSoz6mJNV9FCqJRKNtUHTpHEXS5U4rd23m",
  "key25": "3q5zU37mzQ8fhEgb7BLEjLd4QVbUA22a2FAdSQpJaxdnKLyH1uWeJj1PjKjaB6PAHq5bDEsDcGh725U27KbpMrbT",
  "key26": "5xP1qzjWfw94HfoTwwEk37GbvHnjfo26oK6GgKjbZCq2yCX8cLeVMwuHoSsrQXUrZ31uHXNmi9JvWENzo4JVt59R",
  "key27": "5VpMFBqcHXrNWyuAt9TtppdWobgb6bPpuvK7nzmieMq3eJrBEUbZ1H8XcwhteB9e35DUoAKhsAmMoJatBWXVLCcU",
  "key28": "2UHVdskqZudTF2Q7bD9ormq5yB5BJpXtB7CM3NCcpJnRuVngceGoxgLJDZ2Df3zfy9jc57ztFJxbjnffQKkki1Nt",
  "key29": "2WD7GLqDwSQ4pVqqqx66AfgdKzmcq8gSPpFjjNQ3AQ8ktGeUfnfcnRyzE31ntrzsEcmVvPB5NXsTNhXhPEGK57hL",
  "key30": "252kCHRN5Bu4k5GNRLEsUwXMeL8pkxbEeMkJqAgBAJwQgCARvybMTNzUw5FY64eEFLywVKth6YFfU18UrJYfCebN",
  "key31": "YXjvmGxhaWjCP8eh6zY6rsrCH8BmyZTsRsitU8N38takxvbYD7Q6GBWCZEBhFhZUy3QCKtYvGhVUDxsXoWSFHdG",
  "key32": "DBcuypzjkms3qHoAznPQ3LBb9msp5ewBKCtRqWQz1xYRPga6bZMYMnh2CzhK6UmkMuZaUWQioC9MEucQj5Gdgt1",
  "key33": "3uNntMRgLF6DqjwQrepfBEaT5XEoo6KtmUKdf3vigtcXWLLTHBUbpEt6ZN8FuQ9iqEJA248z2t7jqVqwywQjUcP9",
  "key34": "2qvGJLT57baX5vMKEjereYsEENCHCy2PgPEpGn4nCmuJnHu6GLFX4mmtHy2ZYdsxWty8wxJ6ERqxbSjxuKaZUNRo",
  "key35": "57H4E9EbKeD9a2oUiQ2HJ89Jxd73TGKGnXJMC6M1vJPijvYHt1fbj2Jxxhvp8BLjdmw3KQvXZimvzcrmfuPQDAMN",
  "key36": "2pxhFc9TG6SvowJMdSRySc2VkUG6ZsxFAXqcf3eBnjrPuXSZF8Boj4WcdRdS3mfAfLPtct31uMwonK2E7b1Eko7o",
  "key37": "2GR3xF8d4zeKgbRTucDQHP5euX6rcFb1gaEMsL9FN1otAv733TBrovY1DFy3zqp1qLfudfx6zusV8kUnbrANFaYb",
  "key38": "4BsrL3gtc27Q1SrAeKLMZU4w4iac7WmXYx6Q5TAtnYb5GXkUgj9HTWuBed1ywN8dSn8Gh2fAKAP8EgK1Hzj4daR7"
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
