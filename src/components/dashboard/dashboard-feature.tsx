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
    "4uGDbcMAz54Yd2x1VzvVxi6ko13pAGfWfkBQbsj5GFPto1taZopz1jbeKKkR1QVHrPRd656izCYEfUurP4hnAFHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K4i4DV6BhxPkFNjtEjWqRVqKa3oXDuUkbRNqV1oSgnHSyfQZeb8dg4pG1VCbFQTY5rp9ioBcoph9NG27Bktba8b",
  "key1": "4c9HmhxHbJB3KKzvxARBP2ncf1sBABNeMB4pz8H2SZ5fHtB2XkLKXg6wqXmntdACcDgZFh5J1sxXEQxgLv4HzpfY",
  "key2": "jXYApua7PP384LFmmaqTRqrvCut6jCH1zNhtNbuZcZc5XPGj6psENZiYk4Mq6y2Sr9H4mbEadPCRJfD3TrbcpyV",
  "key3": "rF7RhBmVkbbwWVhCAtPt9HQj4rpBfc9Y88VqdWqnJTq6HtVEqTUF7Xq6x7YugcsHAfdSS5KpdRB3HdKbhfPjMav",
  "key4": "5VT1B9Pwe1N1LG6QPyuVWu8hRasLj3GuihyaLujMZaktRdY1F8BVeNvvJE5vyuAEiZZTyfA7Q97LNhPXMFdgL5em",
  "key5": "P6rprJRHH1YnQ4bAK3jv5QPk6rjRkdcAMeKZhR8HEr3L6zntdiHJeoVMDeYVLQaFnKkoHK3CjFGtkbANoQLVV6L",
  "key6": "3eG12gA686KEXcGy2ff2g1SZjj2umx7vKWTfyL8BNRYo26pB5Y2Q34U7tqMcKigjpM57aT6Sq8pjU8MpCckKLHSv",
  "key7": "24Xm3quig99h3V9rRzgt9bdfu1jCwf4EPBYsSX7za4eE1CnuiZufiLcwNh7k1duRzKuUH4GiHvLN67QJr7zGjjKD",
  "key8": "5T4HmGbZ3tNiVPKVTqswuqZYBezKHERLUMvrocM7hUG9HhjQTLVp3KK8mfJqhEXt9PRwbnXFEM1xkkEkMMstk8XM",
  "key9": "4YdAyXFsowQvK5SSzBWBavXxhKsHJytH8aRmc5t7FZrbgPUeu8RQYHHnnEkB55cmKv3zzR5vzZV3Hni8RUvJtbTY",
  "key10": "DWGEs3BCC6giC8NxMoQvcx2qSK2BbLkomsRxNdoeyY76rfcg4KNz8evX6eZWspU2qiFiKJcY18FRuxVpvCeqHAf",
  "key11": "5k6mH79vHptN7nweH3rDmMC6GpQ7t1XYvQHQSFdiUmfHYYj2YUUjuXsgizz64QPgL2EuPdmKB8Pn9VbwWXe1nBuX",
  "key12": "ABaF6uigfuohEJKv9wtSDHSARZx66FBFFmTUkAdbz8X1v72f7AxK7aBvvPMYWLJkPGz4U4hcQftoxMxTebSshnw",
  "key13": "3TLRLzvwWLPHhN7PoT5cMgk9VzfFGJasLqcsVVBPpbWS7dvAPLkd4PoWGf5A5PhJieUytXjme7k2Z93nzkGKahD3",
  "key14": "5zAm6kaY4sSSidEYDj8rwB6BbHN42wSDvPSNRrywFQRHyMeXdd6gzpge34eS3hdU4q5cNGMPQWjAxMWV7cTEKKX7",
  "key15": "5E2sUq6NfFrfCYLUQDfzUsZcDr3gsnPAFYqTJESdVFRAsu3dNqSurhF7EcRauiLDF3dSB6GbZWjo6S6yPcUL5pkZ",
  "key16": "3CqBRTNFdTcRm8Dm8PdFeCZhd6QJTA8rVXvqw45fGVZ3PjVzdVubZutuddvurGe9numge47P893rRvWXNwCugdrz",
  "key17": "4UUsjbNv8YtsKNc8EsasdwDn6RbwfRJadvqh5aRoFcC5zxf1CcAhg7w6sRCL4U4fGzWejtYyrmis9AkifSUaBTri",
  "key18": "5wDKYkvXe32tSRudPryBMBp9y8QxPgYfPTMyckPYW23zimjoACMHMTfJTxPmbpmqXbt6C6e1yRRjushhmHbkXtWe",
  "key19": "4zF2uwE7sgYSFPDZYS5TYgQGsLDjaaqexGzoQxNsfRP1Pp9b5PRwwMnwckiZinPpwG5ps7caL2U8ysQYRmMQqG3k",
  "key20": "3qaynnA3HvoDjFPfP6gmdHCnU9mkynHmdQ8NoknpHPtAHrpm23LwKVytN4rE69cYkBdKTzH3X3ibwTXsFpufvuEQ",
  "key21": "3wJL8LFUYVeN2fLSEeXhDoHAK23WjVjFJAyyhxpXHfTLzEwBEWsiz9PeNMPD41udkjhGEtaF2u7TBDLdhyovVNYF",
  "key22": "5GDTdeAQuUkiSFhGiub9sghoBVG4xiFDiNaLc8J1hqX2w23m7pC8DpZGvxfkMQRDBXJdGmWYMhd8BG3qENLyBqt8",
  "key23": "5zAVV4SByKhzxV9Q5hs37dWWgJtYXqc4TfFMB4boP2VxqQyu1qhj77BwswrNdgsftXCiMuHdzTGG8F7MMLgALAQk",
  "key24": "SNPnLWj7Ftt3Yj9KBg7aT8S9nBZcxMModMorGVBaoinUgu7YiMXwLkyATtQe4uw7XxrXRzWw4TERY2He2RX5fJg",
  "key25": "22r9CLS7Yges6XNXCVXDt7YjeeMvceeXP2e9kgQogbXNiEYApAZ1hNw6BPELgPAFhCSgEhxRCVfee5CopqLVhh5J",
  "key26": "4z8KepDNaCCJd1r84kwzUkrxEumtoNk3eBjTzDkbXfv6CprBASgy83gGmMBdHizYFSZZjy5f8HDnbLX4tAxqAXL4",
  "key27": "4VRd2hHS4yQTFYZ43HX3ZjunWgvnUSZEBGrBZZHTVDuqDYx6uKuumC51kRrfQU5YzRkj9tuxavy1is9eVv8ZZWaz",
  "key28": "2eBXavfo5tpZ3uSzAEbtaEPPCaUdwVZN9Pvm6K6AQBgTSRVr3n8o885VwQgKu6nSVYNSxxbesHyhYJAF3mDvx5is",
  "key29": "63da8gf1YuYFjbY3fn4Mav2HmZNdHUXuQ19xFUSgtahweQtSLdHDWbAJgpXdH3zbfYN6dCh6QYpV3EzHPczwCjVX",
  "key30": "LsKCPRSrkeqhdfeuQK6ZCbAgPNZJjdxHohWkYAHLbjTmK1CeStXfxQmxWJ86geLtNEKq7nbEHX7KNQeKX6GCXbm",
  "key31": "bo5BHJGruV8ppMkT3ycjwdehAWX9rPEYcYixVGgATzHdGaMr9ZVpfdTxcRdTWRQJt832HDKr1Kkk7QGTqN7KXAP",
  "key32": "4SrhQQLvwLsH2Weo7KgTXapeD3zgoEGJwyYhprN6HYVb2oN6WKSujN2sEH7aLj111V385Gr3kSyQGn9LmbAgUwrK",
  "key33": "4RHYVg39RKnmQDBR8gkf6TBKh4Rs7H6LgyMfxU6AQ2AioAdztuezo6wEh2Bkbq8Lbzo133gfZ5sh2iDkS2wi1gGF",
  "key34": "5zcjzWjCcdQXqMofRbyvWJq5V6brWAYqTg4NPJfpi5zZmACNDUYeMrJh7fnZCAL7LbvEiCj4d82HLXgG2LsTeRoE",
  "key35": "4pKdig2rpXqnF7uYNZZLNRKHkj5WcjeAcF9X9MQvv5g9ZpbmHLeipUi1SR6oJucbUtdRmC9w3Zfqdnzwr3wdeJno",
  "key36": "2Jjetzi5iFqUZaYJJ9yKz4jEkehSKWKazTKDHgA1nLvK9ng8p9D5eNJ6mkehgNsypJggx4wMQSe6aiWVQYFnAmst",
  "key37": "PFwed3jc6WSZcpJHony2RZWyV8U4A4ff4xxx2h7dvT4i4NzW587mBP4iyQy4WrADQA26t62ynqfAkgUzrDwpNwe",
  "key38": "3xGWJdxFXe6nFtMnJckBRnwhoFTVvN7R2bLyq9yfU9QKh5465DVapZgR3yfTm5567XLprZXCw1T5sQjjGQ24zQJ8",
  "key39": "5wjZkjAombUzB613icNjPiHKovEPokTaVRDF4sKkn2kH21rV6aSCVuqitwqmzyjWCxLF4kyRF2AUqLAj63SdeJdo",
  "key40": "41vF9WKatP79mNpmqvVXmqNoiqmgEUmtSLM3eFt2QCJLvYBF83sdzkkAfpXewPnbJcRsMZnYi7etX9JLT7LzKHh3",
  "key41": "B8YY1ftGvAAmmHpAQ59scDrsYkAEJT6ZvsAeYRzn9UeuFbDQC6vVKh7GvuyoqyhgPdpMRorDcvEHvt1Bc8DBdVg",
  "key42": "4GWULtzjwtE9LC9FELXm5VA8z6svUFMjpAiRc2RNiAT22eLT9nGd9G7EL5svHz5TVjiaNCDW8nSAxJpgG4ZenJR3",
  "key43": "4HUN8oqAxGxztTL76KY6ZYxeuf3kyKM5fxLxbbNAS23Z1DHPWZGZqFNC4zYPWfNY6VGJZHrvp1fCdVK6E3vA9iR6"
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
