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
    "54vt3zyoTqfaDXN43JVjNMEUtfdnG74PJyxrVgg8GX6wtkChLsi26pgkr35Ggn7jW4iDmGPFFvd2T6uoPBXbQBsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AZGGWTNk5mTtroYTsoUY4E1NjJBbcBEYPvZ4emkzzkyp4gUXGFrXRUxGiYoszTYt6UbRdKnLmoKieBn6ALMtpNT",
  "key1": "362i385KEh6XRQV7EPMudZR4snnZxZKDi6Y2eFLF83szPzLWbSUikVRCSSFe2hW66sg8vG32R29LWhp7qDYERN2h",
  "key2": "K1p2FFqjG6tEgJj1vnsjf3uepZWuuLbfD7ME7ESpnF1ztwJk3R9kuubcNZD3R7FJAPR6DBgTfPVR5W2YseMFTA1",
  "key3": "2VqjDD43WZmjfAZaTjZAToySAof8MVugCB8WELUcN18Wh3ethcTVWiL15s8AVCFVzFLabERm9yiFKZhwNSmKBG3R",
  "key4": "2fgpvdqZvd6C3birSPwxxDfh6opkXQyBsQcXFkQeFBmAWJGZkieY51spKVhhGuiRw8SKZmXcZnYgppKHtqgLuZu5",
  "key5": "564n9HSeNZ3CFyt6cRfT4HjzFYkgXNFQAwy2Nxgzuf956hEoFRzc6NuBCDDL88Db8K7xZ1YEtksVsBg9VMbzh4C2",
  "key6": "4eBityVNbzrCjM5uE6K79Urq13iqJ8SZj4Y89UoJ7MPW1z3hpB9gEVkSoNZPzBmL5XmdAPbZMJRxpKBKJgeeJBGp",
  "key7": "4po9kDtufXZrpiKiKv4yREfMxvducGb8wZDed5bQSs8d6GMVnPRyTB8TznR3Vnr2DjQqkPMXWmvYRwQv6ojgRkDU",
  "key8": "2ZhKDibUcAarSEFjekFBejwyXAkWrkc1s7CrqJTDtEJUToEX6PfMhc7JJL2L3k42s375weUq6rw7axpnv3qXZinj",
  "key9": "2t5hi9G2NS7RfvvpD61287jTqWx4ViKZ6ZP865VHJPeHf3AjEGyijNH6Fd4ofeYWP87E3GWjAJZGiZiEXbUQqXLf",
  "key10": "2G7jxgc9Wo9anUQthsmE8yrY2vU9NNfMGmNCXuqAaHWjbbvUg7DC99nczor9azADb1kNYmkgQmRTQvQfPGd1VNgn",
  "key11": "3KYsnj2xNWECWLvZMUYKaRE4MZEqU8J6yPHTr8GjJRrX5DDMRXtXoRUmkCJoiG3tJ9YHGrv37bkLmksmFm2DQPaz",
  "key12": "yQEZzT1qLzVcn9H5EDwWtaxs63Eq8n1mi4wQkMCH2NxbvLjLbZXJU2r8WoWcTymvPxk9VeMi3qWPami2UujVTXm",
  "key13": "4dBHd6eGh9EAPBzuv3taWYSYyDTBhypjzBTW6v4a4XyHwE7H3JSiM7jpxA41XbVGRCUNGsdPwYwWWchwcAwgBwiX",
  "key14": "3vRY6mZmKKqFr9TASVct8eo15PYY1NjaJbUW9Cadcx1xRrwutWWVWyH1gL4Jj1aw8ggj8jx3HdsVo9Mfe8y36bfc",
  "key15": "5gBY2Va6aCtGYktC7GH4PFcQsF9JUyUW4eYV5fSuLuhPfUMiWKgpFgYDVBmrC4DuHzEQHwnqnWWN1b8AbEoG3HpC",
  "key16": "5fL7jbHiUR6hL3u7CE6NX5PfkXFL95YUBr3E7ryqD2oqY6kvkWVoV6DdwcthqGKbSBWubLWBbaQmaWGKDrteZSe5",
  "key17": "34gvAx9iKnksHRR91mjk8T2g54ProBVabArGt3tek2tDwMGYm31TRxMCTMHMDfCQ6cnnBfq4pEPbiRMhGEJT5svs",
  "key18": "Af3PYUT2ZxwTLSrW36f1ik366HgaLdBvcffs8DcsEBMAmCY7Rfx3aKv47AeGurMgK6JvXoSpw4DhRsxJtzxeG4M",
  "key19": "2UjiqgCeo8thofpj1t9Hhg1kUk5Yac57NPujocYRZg71fbyp1q6Gc81sMG9d4xDQiaZ8LZYAaVvusFs4Bcd42Yav",
  "key20": "35npLcJMnD9FnQdeRn8tfjLphUJwam5wfYnv3GYrD6vT1w3mcH3WtzysFFZU9fufB8Hsh4Lr5CGnNzaozKYMHTSW",
  "key21": "4zYAuNg8juRCay7e8ShS3ZXpuHPzS4aBndbYrZftgUhKKyPQj1VGQLB7qjQytLJzveQGeW9HNcUHHCp1k6RbB2of",
  "key22": "3Yw7Jxru13BYz69YA6hFJCfctmGinbFDjjepn4WkjL7T4mfKmwcu6MvC4m3rFqxXG2LTGzqJEjoR8VAAVvBVwYMD",
  "key23": "4Foih4mKFXqUFnmpU6qAWs5S3KTtPRWy5ko51ewyuK86UaURwnjWEEax81FMY3oceSs9q6tDcVRusyuGgR9QU9Lp",
  "key24": "4v58YCjKjr95sJNL9cNWcjdrKZH49KfqaFsxHD8e2mtyTZrhT1nX2fWATCBZgctMA8Fe9mvdTCxEfRJbFHrEoqY9",
  "key25": "2ntahkhNa9AxojbBU1Qf6oCxXYgntJkKkawVMmQZnCpmNCgkkFK1E5FL5mMHQ8iZTj4qVjy5J7QmxPonxAVUhZxH",
  "key26": "4aFv2Gfa6rWqVFVD34vVH8cdLPYDEGMzAGRb9SQAbBYee8HtqMzGHP9jVrMNehw1mhz3LvNp6Y7Xcs9VRn5vCMTr",
  "key27": "5ZSt1QYHriVzyAVhvXLtGewEPqTJWF8Cq3KDnULq9rPiQHqDkpfWu31UPJeeVvEmv7EW8vjcARoUoDT4tiEzVNYk",
  "key28": "3ugAGRscYHCc3KAqymr9Dcn4xaAWMKdfmDWNwP8wJJpV63iWKLGE3gpx7wDvkfuRHxvJZCJokvtDhjAMHY7NEm6a",
  "key29": "513SNTW5wRZddc8FM4Kc8MMzvetA1GhgYJBCzWKptjwRYPBbh1Eh6ZRfCKmyvFEbhLQ2kwSnx2LVaWtXJP7BqF7d",
  "key30": "3m8RE7qjKgJmDwKcw3RgJofzhgFevGaVPjMZkSZtDFWDZB2KZiT5qWLQWz4EnmNc4AVnux6FuPe5zVtw5HXvPXGx",
  "key31": "3bMots1Jxmcsir3RUKNn5So7Xpijo8HEVJhvSFYGk6KDZFeq6dgDtcp8SL4EG7sKPtLid1yoZ5oTpXuFUAeY8qnz",
  "key32": "2BsDYvJSSCZJVj13AiKLFz3NhGQdBBb7oyxRFhXXnqKoyheZcNoQzLuKrdpykhZtNSSaUsMZT4tFWhfksfhHsRKh",
  "key33": "3NnPVFrZQB6S6WPZUTwQDhs6eYFg7EGPseUKx9siwd3bxwVv2YK8JgyXadnKdv1dCQeRFvSUMLjBpAee9ki4474B",
  "key34": "5x3W3YD8XrzwHLA4ebrU91wGc23saawnALZhB6qBwHxLeYwYVQWB7QHL3ARHAS5QXRCwYxsHbFKg7RGFUH1x64XG",
  "key35": "61932bRiyS4gT94aCsMmq3c59PfBbGqqJWGxRPKqayFCQDYGCPUxisD7fTnJkMkG9B797YUGeqXWneT88VXzDp9E",
  "key36": "5kYgq7MqFNTGRPP2fECLapFRMbMAPRR2jzjNCxi3w3xo9HpZy7sAfewXmXsuZTjFMdEXC7z3CM3BZ4Ej39L7HqjD",
  "key37": "4L1qUjuLd5nfauDk4nwohNC36mTYWe4SVD4Spe6N3Tgj36bozjdWBViLA49rqdfnvsrzKDbqZEcyjx6c2KNkJE3p",
  "key38": "37bBf7rK2E7uzkRqRKNdBvRkLxxmqABJ16LHDtMkWuBvd3J1KSizuzds5vVrtidF2B5qkaBm1SrAP4RiaTrvCv6c",
  "key39": "2YeRuZoRVHosK3V4e21PTiSoy2RfhCtRNr1fi6NefRm2iL1pKMkwmAQxXGVZ4o5k9BaS47aJh5t6yekTrPQMyL3a",
  "key40": "4Kxi85Rar7d8zWdiVsZy4rnDuoDcGJpYCCz87fF4nMTbdnXVDPP5LgtUDw7YH1wTiRQcj3UwcvnXLtdpCRQRphQf",
  "key41": "4yFKPw4HSVtKtyzoZJ76LQ4tk1AcCvf5Z5CuLVaWSGeffwTdYTPECX4aUXBhvfUzg8oBrKWUgiS4uB438CAF1TbQ",
  "key42": "4yMMaDDgeG8cGHb27HVk2rNf5iobuCwtLxCiHu9BpsspUtQTVzmokELfdUvAhZAVqzRi1RcaRboTrXRszNwxpZLz",
  "key43": "5N7L19EYzqDkUzNxFu7f5GAdvUXTrcy1BoZUG9Aq6TQE7jcRbsSS4JQKLsioqFT8WURo4HpsWdUCQ7ex6yqMiUJi",
  "key44": "45MU4EVEBSxrfgEQ7DJp7QV8QWq4zAHKF1XgPjFPZ96HTpjAT3ZsxhNXewKzcozRhwfNtgDNeZhVQYeb8F1KnyAm"
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
