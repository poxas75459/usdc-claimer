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
    "5Bd1cjaXqHjZPYdKDrpXpEBo9NuRgdtgbW5XdxF2rTPCspPC9u4iN4EkUqcWCLEfD1oW5Yfmh2AbNoGZ6EiHsgA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x8dxCDAHTeALMcER3HNnYHsdXzfzj9VHjin2ffFeqwx1wP7XgdyHqtiN94fvwcC6hAe6BVgZTwTiFpU4Rydqjpd",
  "key1": "3WsFdTFWLzTTX97rh6Xrt7uc15LsXetscsC5NcfdxocMHd4Zrr3UL34TTLT1FbJUvhQVUGowyHGQWjEdFp24Vuos",
  "key2": "3atV2kpye6mAZz5VG4cvc5d5gCStrPiPYa3yL3bTPzvbpJmfZeSHYeS5gc5XArNW6TGQ4xbHLuxnHxtvWZZ1AN1z",
  "key3": "Z6UjnFozzMGiF2FoN2dUVAdDcMbhdfpWcid9y29GVQFEe4L6BgBWPaHS7eYhF3wDpc6M7aQqz86zzqnGpesgb1c",
  "key4": "24rBN2Ty5xfyNDkVJ3D18iwBBjrPfoav3BGnodR24Y2HrYsVSaG7PnLvuzuTZqSXe7Auvkm1KUyqUcRvhkPv3Nig",
  "key5": "dGoCdZigjPHY2y2ejmWsJV5X4XKq23KzWvNMBoozGfnxfrsFnhS2aVBummzEH35rsP2eN1nWKYR1t7RXF3zMwt3",
  "key6": "4rdvpmcJm6ouq2JPWxfstdzXxw4kj8SoHqvLbZht7ZSFLEfhFdoavUP386K9PTQY1NQ6vk2TmTZAADQG2icHXDrr",
  "key7": "3zRnBogS1eTTwefjzVLFPwjLvKn91uvSikBus5KFM1DYC6h1Ce63GpkX8Xo2kFfmktkRAUFG8H1rkkd2nCPtdxmN",
  "key8": "3Ymh7UEjVGVehttRTbPtkGmWwPMAticarQ7f4c6ecwoPHNWrEFzFfbDtsZevx7yNJzihrJ19JgUGc4UUE45x5mSJ",
  "key9": "64yvj4HPXy6EBX9eENUTEyZ1ZiPuos6h7Rz5wJHgTDAfijkGdxkWeoNwZBejnUbFoZRHBGWahp11nX2ep4vAHcTh",
  "key10": "28wZaH4Xb2hvoVedfxoE6bAAt6jCP9rgYy5eEFe9kidWTne2uKyq42dc2xdcqs78gj9ZVjjibb9S6opVqpoh84kU",
  "key11": "64Pd4pELQVwZWx9PdzvwY6KenkqAdfs3wB9jLjZs2WqhiCqJkaeSsEmqjTrd97enRBgDMVwEMUyD85UBs7nLE8cm",
  "key12": "5bSSxvaqqvssRv8vD4PicV7t7VZLk6bvf4gAVRYPTeYZVf2PHoQ11gtaVshCqBzmJKs4BGTLt5cG7m1jaCJmpers",
  "key13": "3ydb1gfRcqwJkhyfcmStynYiugkLEzShytdhbVqVzVJv7AiHtMmtnVNJPQE1jUHVBLofjUCguDp1BUcioYEsX3X3",
  "key14": "4B6fHxHGSqEfhjHrJoj9Jhd8iMHNeLfNDKi3ehoCUiZtE1HLR9cdvRrd7VtULy5GqP88gDAF4g98B1zNzDPoCSnn",
  "key15": "FqjbdAZaNiqggVWtfjjpG2pW4qdRYTdxPy79jft7egUyNdt1GEHwabeL246prKqYD6218k7UHeUD97J99n8Xjsi",
  "key16": "iR5cqWxAy8uSiR27FQZu8gM3UKrL4yF1fm66F7J4ewx9uKiBNovAaywwEtfbGPdXQ7QQiPc7Jx4cHRNMtiETwmx",
  "key17": "5cjFY2jbLAWs3z2b35nB7922RKVzoWciJiW33FFn6XujVrZJULFUZKtuHsCm9seDS7qeeuec6tBMpPRqZr7pJqf3",
  "key18": "2CxHDmknv8q4o9iQrxmhnUeWjNX64MUACsJefQA5T9FUmmGtVUNFis2iDvWS6KfYUUjsKd83jM3t3Q1HWRohfX7W",
  "key19": "31YnXjjBJPSLY3zpMozHYaZ4xGbfb8BqMF66SxtorBE5xfWdJhLKxzLaJdfD34jMWrvLUA9LMLcZgtVL916ZdRSK",
  "key20": "56NkugQno3oqq5kMdHsfeGTPFv3JcHVXXdh3L41yvMceYRadRdw9Wgigrzf4evJsbdgqaQEn8YoXo9fhtZn8Visp",
  "key21": "2qGvvZYqD2HYka8LA2ZdZsPzdpdyyChgLP9UGGYp9SsRY3QJFbCCA8K2UmN4hPrvrG3hxD4niK9jgoKGz4ADS53R",
  "key22": "64yecXw6DGfkP7MoJY9uL1iF9CnudTyaCBoLMFD7UypF2Da1cSzmNjLRBLyYnsD41vLcxMQx82FNkSLQcEhwrFy8",
  "key23": "cUL6P7pjoXKQc5ETTjE9K46SJX8LLb5GiYQFNpYuc5K8LZfu1pNCrie3cma3PVXasgZriBEwepQR4oczheWx6cc",
  "key24": "2Ao7EaYeBpJbJX5qD1Afm3TwEFPcSAh3q74QqzChNEb7eTW9xHAwDTwydYikDKVt5daFkZaR8hbz3cnxPDr4h35t",
  "key25": "5JUst6KB9X9Lmsgp2WJ69giB1JSMDZdQ9BaHW5Xm6rryjiAjJ1kV1vG9SmGykuf6aWF6wGtXcJa57YGgFYiL1DTd",
  "key26": "5S9wBTD2G6SwFsskNezUjG5ViusiXjRR9s27MXEsVE6K7vWHu1h4naTzqgQ7HtTDdaZuxcGSaEgexoQyZoNKwre",
  "key27": "55kaEtegQSFeGbDpsJvtPZrsUQDJ8KiHdFvHHU1WuyfCorywYmKsD48XPdzAZaj33ej6MAnTXq1DKnS87m5yjFDZ",
  "key28": "2Km9ydrmNbjGvKuSjUPFqhfBzqppVXaNsW7xhinQnieUdmsJctmh13gkxLDzEiaWbTJVfmb3t1YtKVAYySpWenag",
  "key29": "2CjgFubp4XK7wnPJEksdYXQCPCp9HqdhnMzB3QKXKnpxdJSKygJrjwMGBPpwk9UwoA3X2GQPhXnQwLfY8j4bD998",
  "key30": "pZFGZ1ZuUMA5aiKSXTuHz5ugv99ZDr7cgRxH8mhUG3hKXbzkttBPbdWPz373ToZzgcXtY7vWhKAi5n2GveasAtK",
  "key31": "5XejzPKXnZzzG1JhQd7y4qjy6RLYZZ1DhULmoyS2ajDZipYtLeUCnj9yECCQHPmJKDCSTngHGaubi1iPyrGfiebt",
  "key32": "2qJpb6CM9j6b8iSiM11hdgV3mWeK6VqqoWXDKrZA8h94mCHhUk797Y4ACkoMcwyw2yMW1sJWdUZKWTNWrokbsKX3",
  "key33": "3TuEh7jhj1d9ULQvLnyhjDZGw4emJNdbWkjr64yatJyRoYPaJtE1MRDYNbdp6ji4w14Fvtx9sZW3uUZ6hzoDZmNN",
  "key34": "4B1aTvWr1e7nkW3qYNZzsZKuCTHPrLcU3sxoTrKeULupxfA4yZxVkVaeQLxhBhd4ApYRdDD8tVi9FGRJevvMmM5W",
  "key35": "4XZowoDs4FEs7GCZg4HzyYtAYC7wQnzkduSf85C6jXCkTMfTyX5mnvQCKbsFjb52qojrXupmA3un8w75tmAMzwZP",
  "key36": "WNsuXAymXSgGXmkyhn5viZxi8r8jiXXYCfTMEnyhPbbhVc4XpDBQvgTsfspJwFCsP2xKpsWW2Av9k96TEZBQffj",
  "key37": "3iGcy6XoQeTYytwYwtj66ahay16s7i3CXkxw3ThBsRKbu3uLRhqyY3eHDkfR2uZPjgu5nCJiqETWZQZt629rma52",
  "key38": "4cQhHEDSw2Er7aVLJxotvDXxncom744gEcH8maExY43pS7KghmezDSpyi5YJQyVcnUmi5vdf2gtZmx2sdBrWVoVL",
  "key39": "3KC8ZB3neVhWVmqUGE2YHk6mAiWbMCSdzJq3TCGjyUcU3xc68TfKmnneL6nh4qbU7rcHyVDe9jv1FmMUJJGg6Kwb",
  "key40": "4pmtBLBfY7e8C3JtYKgHjufvxeBoTPKYiMu1CpF3yfYbtCbGaMQgockoE6wsZWGjoiqaYnWQAb6KC3upskHgV6kS",
  "key41": "476tQB3kPMNd6iYQdGU2g3BcQ8dgRaTxp96bdXVdyYVyfTs2dpjGndgovQczR3AD7iNhLoT3m4RQzTzSwEpkSq7n",
  "key42": "42pDuYPmDVRbBD2vdA3MGut9mo28xx32uFhh7YFWgztzsobW9QKJBnUzkmBZMWn2kp3SiZdWFiJv6KDn6UHxBDYp",
  "key43": "5XFP6Rts3YQWDuzShHRXZJghsyHnNrqpHTshRGjhVJ7FMkrkNC5Pbkqy671JNdYdm923JQu19329XmAyRKKkHkE1",
  "key44": "5CXYhQ2SR2yangZDKap9qAH4h511npAbNpXRSL3Z89jCVWPxnper1LX5hcmZMJnQdp9PgEoAqM8Xo9GG68tJFhD3",
  "key45": "4yKPdcvxSCGUK1JMTXXPkgeVE7So7dkh1BJGbnbRmYP9G1pqqxAwzmab8MBZZNTJvHDNUqZo8m4i4LrwPS3YknQj",
  "key46": "44U7Uj7rCs1oWQ7E9PynC7RDpCeuSErdwBP8WWVzjJfqt9mu4beteJknMsvV3KrCjb2vqYFm4R2rmVsfu4LwiE1Y"
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
