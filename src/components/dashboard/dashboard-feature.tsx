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
    "4Gbzai7aU2nwmrRHvLRzQWYAmFEFQxU4Yp2pQARYCyw4jppHXfhkXCumqrbf5azFjY3Grsx5ttfTpSyVz1bB6LNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EVx3MMdHxzuuht8bdKsjd6oWs9fqjDbQQE4NNeG6BNNH9vN3PkNNLUE8JKnvdSmH4xePQbnRPK9vDmUHU4fj5sA",
  "key1": "2AYcddKq2UvP5Js1Rpi43Que8J9XYi5qTvS17WK57JiMknrLc51ZP5dsZfTdZyxvz4ERwJMPmJEJ6bxgQQDV3Dz8",
  "key2": "5AweeBRZvY4toGaxdyPYYvoHJotFh2Pk6AfUiJ9kSwdh24FspCijtKXubU3trxwiAsd8GuWxePS2yNZWzLqei6GX",
  "key3": "3XzAtEQu98Pmbgt6u8Sy3v7GxBKqRZKPCXeoyUEcYK8zgwJ29vXQwKZq97HqRV56ds8gtvTB6pA96XSTaUpMTrGu",
  "key4": "TX7peab2vDETDCb2juvnT4CUSy6BLmtDUHJELstG7hmhgaodLQ5HZpvtWs43gbkkiRNpFpXVy5GeSxtFKawKsWM",
  "key5": "UznCNk6nCCBE91VBdugRwpPd2gVpabknB7h71gmCdgyKYK4hkTaXdRe3t7n9DBFaXiUYwdy5tyfwR9M4nXpszYE",
  "key6": "4Gfxzts5oyTp3YaxsdAzpPsRaSdgisNLX6oYEStjLd1FGqzCBGU1dxAwmmL9RzE4AAiD2k94kQtTh7zujzkQg7Wz",
  "key7": "2kLscQvhkSYYeDd9khPcNqjyKCTa2TUDYRt8L8mwPgM2Eix2V3VsAC79xt9CV313KgNSTtBKJDS4Hbtt57o71eey",
  "key8": "5zA5UESqNhuomWcW9iCv5eQFJRJzejcf9qLziMFjTMURWzFE86dmRb5nKmseD9ap2dZzXFWdQjs1jSPDTW3CrQGi",
  "key9": "2avLYmeb7QiT4SmB3wVvMZCoTVUzWd88Q41Zg5sRNWqr6XWxns4kvnLshhm1XA7wbEDxjPKZvsEk8jZVTPpyzZZ2",
  "key10": "45joXVqcoRVjonaPFVaoRuimswfiDLW8EvuMtAd4FuMyDFN3uGYWw2RTJ94VQ5GaAmwirGiz4C2Ue9qpoCu9wjRK",
  "key11": "4F9D8guM9JJ7cmeNBREBLY2xL59YY8nahpD27ZseF5HHpYBDmeHw232mLMqCYTwQf2FmwCNraebWrroVt8ovNuwc",
  "key12": "66gQmCvrQL3nrZGEj5TgeanJSYo9tsD4qZEnV2ZBEvxXD85D3drbbDiW4W4pkxoLusCHf2Qp1CmdLWAyvjQYmvFn",
  "key13": "2G3TCzsUifn487dCnfHmrwh7Hbfg4UjhsBDrswFycQstwHtn2oaWuExsTCJ12AEvYFaey21ZsE9eh3muwhrY1BLr",
  "key14": "5SSmD6eiK6inSggDcCrChoW79EDD9NhSXKoP7d4qZU442qfGCfMakS8pY3goZu5P8AzfGxdphbH1jGCjUSbYt5Tq",
  "key15": "3Rab2U6iBzpW8Womga5WGCVL7texAJQHPaqGeo32f6zn6vwABDNuajmFrCtKyAp3LftET3BJZC3Lhysaj4CTsrq1",
  "key16": "G1GWw9h2cANuxLLnJC7hJHrHjkXozGhfN7y7J4wS8CLeNjUxh9XoseeXZfy24gTDz5eCYpSkLrru8KrJk1hEua9",
  "key17": "9esTwNU28jKyKyEE2mhJojEZPubXzM6dC4aVK6b754LVzpmDNax25Gs8PJy5DuFNainEBNSa1y3sRyQM75h9VBP",
  "key18": "5FgTJg6UGMmYtSBbotyZV5tzCy7yePWAK599jxdq553bC5KrSnVm6MCSV7mBaLiNxdkAjCThDY2sxgHW5C6VMJ9N",
  "key19": "3mNESbktNSe4C2wZ8HFMgkqVWje89KkNnr5wkxs1VFyfH3mrSccDdHizFowGpnm9Qfhe3HASTsXD7RNN8MfKrEyx",
  "key20": "53TD2jbyDvcBmtKA1Bh39kw6d1vnW12Ka5CHmxbPX8vWptCbBbqqQRW1YByCs3XJjJQKEjS6NxvaL4AMtWwah4e4",
  "key21": "BVSuymUf3sHDgzJgDP2bWEwkNsPC919DhR1VQreJ1H7nBzWJSmx4YfgSFJwCxuUexJw5Lc4JVXxXDqumZNH3Ww4",
  "key22": "4WZnE52sc1DY4GR9PNfP25Z4eAVyMxqKowtS9jxENqiASE1e1S3w8yD5pecUepUP93GoyyGg6DENKiSnhVxjK6bn",
  "key23": "29DD84WjGqYWYHEMT7aLHbmn3GsWze6iaNta7H8s6ADsHSDXGZpAPY6VnhhRNohLAN3Fd4rkQPFSQRRDBBEwFtWS",
  "key24": "3zk8DGz3akGu37B11ibUL8hDENG3HEzSdFQpuihTQ2SkkTnQXqiSX8z6wMyHevdQ8e9B5o7fXsKLKmq6yvsPXSkm",
  "key25": "FzTnssjhevjUjyUbyi8ahb8yjjHA8CxPF24vcGGJK2X3iYxSQ4feDn34nc85Tq4pMybSYB3ZLpyKd7ioR9KT5oC",
  "key26": "2sUbR2pAH2vZhMbzSqJcAzb635u6mzCZt3skJPu6Ee9JVxmC7Cb1uzg81FETfjK8JLqWYQyFoyAkEHQFQZdQ4Ukk",
  "key27": "5ejURdtvRbZaGkabXuPYCZwyYCSJJPVGUq5XA7qKwf8v15tM4PWSHSFxA8RA7o9aUBnx1WiVw1prXCU5n5ENuCiG",
  "key28": "5gn3fE3VLA48VPaNJMish2T6TTVhnwECwFR6FwpcFH32bkUFra4YsDJLyivXzgymGMRfXLGLNShGqHtQ4ZbvDWpZ",
  "key29": "5fwViV9bfncFDoEq9wujbcbWbuS5Z4MFud5sDc5A9ChFHdSgHJTkqnDp9JnVEHg49DuGUKxT8tjMXMPGvZHSSrQ9",
  "key30": "3KTNiyLPkH48HfFYJVnd7QXhpmmbTpGjvEuRffAfUUCCejhfAZZ4xrHLXBTNZfMZ2dzu7cfQksWSBKiczbAm3LrE",
  "key31": "53HkWrVp2chAawDYAVQfVUFaGetgamdaLTuRchuFQDgZZ4HBwWHutCuwip8cCWGX4ANd6BwqJ7aMUrBjQzZhwe6Y",
  "key32": "SgGEUxxuFjGwbEdy6xZFPtxmWQ4VtY8TvaJHtQ3cv4VZWGVnuLxkoBzmH2DmBWDca7CMVGmzTq9v6nXFoMM6aRA",
  "key33": "5jsiTc4hL6er3UwqpQwZzMQ8YJ5tUWTecSF6kFMmqKE368KWxtsRUv11ZEYftK9D7rPZC47JMC41r5wgUv2ebycw",
  "key34": "2ixNiVS5WDsU2ssv8xCrJCwa67BQEyrQ3VRThgFowdHNpXthGVnj6w7GDwk3JeRCzAzt5akSwgbm9L1CgokY8rnw"
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
