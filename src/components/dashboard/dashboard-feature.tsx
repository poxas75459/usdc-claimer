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
    "5Nv4LbgeR2ZxGW8Rim55Cf8Gc3wRTLuxa9bcySJa2AQipUBJVpGSZaCcgaYyy5Dh5KxBf1oAmAHygKv98y1sNHRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P7qrcmuiLqgjtixdaDFJyYTdC8hLssDzDS9WfM1xaKx4jKke4t6s6GhnsGbVc3iAerF9GhmURYQXQGWyVzkdKoj",
  "key1": "41SX5V82fcM7TrTSpWzxFHURCi5zBLfu22haZsrPor2twKbzjPiREBmw4QJustjBMuQJaqz6vxSvk4PAPRM3g71G",
  "key2": "5RPo9qfJgkU453CGBh9cVPPufC9oTubKEfFpiBEc9TbayoRrTwAk8cMUDPA1nZxVWeg3nZ6UpkBCiCPrSNJWhH9d",
  "key3": "a5CxqCqV2AzpWA3Jddv2qeJuDpvfxGGNc2cKqX2nF2ddDLVtAXAXmVrHn4EqKns5WPLw1vTVkdXt8wt6UKVp2kE",
  "key4": "4U3oC5Ndm4wfSBvD39eaoBZq23yife86WPctWAzAXLd74UQYsPptWgeaRDv3zJZ8cMducuWqxPs4s4mMGrSvnPwt",
  "key5": "54xUY9zCsc7B5ZWUk4oJ3TThagP1WWYUof1T6AWbefx2f355Emsumq1CRLfabEk65JFDb8ELT2bV3MUdNnojrsfy",
  "key6": "22KSDTXWCjcjxE9bZFdESpNLkG1xHiHFHE4FtQ61QHy3JNMi2QWFKDTJn63s6MJGgKjF3KcyF2PfhstY9AuhCLiV",
  "key7": "fpSWEdmP8vRDsscBNrNxsKn4rMakcQjGKMgfW65umZvLiQTYLFCC67Qbg9RonTH1t2xjGpDAArVmtnPv7jNSwce",
  "key8": "3jnnkWobmVxXtfgEywepyn5SrEzFiTvuB9iyXeWsAdJxP9dWQ6vCaDuZdzVSf6HmTYFmoNkQDURP1iFgfynQD2Nq",
  "key9": "MfRyyzuVkvj47uxpCcKjkLffkux4ZV99Hx56iNXrmejE49vvkfmcs3k11CHyd4QkP6eeuH3LCNrjr7ZJoY3rrZu",
  "key10": "4ydXyepxhYeHVR8ZrHYUdPboEAPtQ2N4bYM6gvpUGaf7bjJnvByS3dSK6WCXJiXDsyekK5UvWqXXfMwTc67qKBBX",
  "key11": "5u2rojvBwzGp1GRgppcrWmjPJ32fjk2QH28Z5PT7hzkXCBvKZyYNmRV1Q3P71D3FDYzMcG6frvek3KztDv2SeHC1",
  "key12": "51DhHVTH13XWtYZN35tcjZASJk6Vxaj9ibNuc51ugaGMjk8kToQWMfTDzw8Jy4R9fC5yv85VTbgLLG8Uc7dHvzi5",
  "key13": "4E4HTRCjhPk9wWxy8a3HB92GBvYxskpeA112ypk1PdN3deKQb6BQkaYjYM4J748JCA3v2diPmb9an3p4BA5retpa",
  "key14": "4GspAsMgFXcgKvcyMCTTGqDCdQNBzLd9mPNvNXERKkyaLgdoB212USSbufVCcbGtQRNok8GHi7rcNLa1hvwRgBFn",
  "key15": "4e1MwJR5NGPdkqWCmUUfKG5bqt5e92yPR4TeJexBDWzLyUbb1dvbssFr6H4N3Trv6evPLwmhuKgq9pv2Quo3oMb2",
  "key16": "5miMndrP4KcX4RDNAWjavPx1UDPtsQVT53WjkSyA9Bk6abyUZ8i9qkcauB6NvZPP4tGbtjsuQxpZ9TYkzmqNUWoM",
  "key17": "2Jd59MAegaxBKfsbiSJXYnquxU3AEQCYarseBSYenqbFJZhVs6WEsm2dNGM8gYyr6w2T18o2ASayxMWyQ9JjUy2w",
  "key18": "3HjhJedqL8CQCf1mCjYwmtgAXs3YZ7rc5KYmuCByre2r1BT2cGCsi39SXu2HPP836ii7at9U9Xdd4s72tgGhZ6F9",
  "key19": "5wHFgmVUsmGpzgKFEVzKCMTYf4K6ba9MyGwxjFCHsTpbcrRk4N4r94e1zTHbRHFRj6VkmS9giEt712cicbBRKabg",
  "key20": "45w9aqCnfwbkXdo1iWQo5ohtb2S5XUvtHwUwGgQzcti3o5pHfckstfxLUJoJnXxL9oiZMoMFRHKaW6CsBHdmqXdJ",
  "key21": "B3ZBk1tYubF9MmYYEAdyCNJRwpJ968hoMzoQBvT6rG71DCVDnQJeWmWRLCRH4v5bDjdMXX8YBG5Q5JdZ6rzBUma",
  "key22": "cK1TeiWvdZxT836CsCzpHipoxkZJ28ECeFupEtZxDQy1afwkKsUBRFA8K6g9dwqW23TZyBsHL32zjNh6qrxwjPy",
  "key23": "4LRAkx7ngoumL2FWhJBuhEQoTQNnJzR7k5PgQingAmbCZh6tADvqQvDKXPAdxtf9Tt7M24a4VvJAGZm5D5rszLbj",
  "key24": "3tATGB4RaRFy7gnPGdZXhTsvwPu6djTVY9LRDZzLbb1f4WhX1Cmeu3jjw3PeBfKrtRjHfgSCXZdj7fBvpd6ZJHKx",
  "key25": "3duZsrSxKohyCnmq3PbHC2eL95Wr9YdEV8uYaU9iqVaWJ7wn87bSHzMniwTXAPZD68Sh24qpSJsVsYif8daLAdj3",
  "key26": "5uvF2wf9MLuTPfpQf9z7wuBxDpR2478JVbBFqyTSXdJejmguhKaatNdmYE1oQN7E9mE4tQYktPp6KbkG22doymZ5",
  "key27": "5rfD7Zt7esQKCZjFiaj3UvGTZKdscy21r2cAAKP8PTVaaaV5toUVKNcFeAMnJyEaJC6wJsqXsfstaZB7sqkB7b53",
  "key28": "93DtnFe5bVdJWycuLHhBoc9YE1WkNVg8ChbnRE3U98E1iHxt414rZgqpsYe4NMSA2iY9B3ru1yfgEWv7uADaFrn",
  "key29": "hB7gcNhSxfLQefvfwEsMYidFQ3S3T6qE4Zzfctzwrt7miQdbPDcNvBXiqCVimYmxn23rUxSACWTwMjrYLWbvuGX",
  "key30": "3H9tz4GUV5EaE7mFUvb1meEjxS8z7knVrNjbHv4QZ8RqBmiacz4LpKoZpacvQ3gCuP4prLBzVGnARfQFcvhHAEy"
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
