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
    "5r1xQB4aDQqZJQ3fydWSm3n3nrsFCdFAmZEDsJLhLCVwWximZJffWEUDrrPc8FR6WwQ7ML4TLEgZ8ufwnBj6rewd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QRGXeoBdvKUiRPPNGVA4khBzZ9YEj7vm5wYeqt3PdxjdDX4RkTAxDMDcXMTxfyktfY3F5cw3CoQpjsQxfwjikRd",
  "key1": "5JfBrL15AMKtn1UnbXYcEo3StuoWYRAPywHaVe7quzo7mqduarTLVXhHZaF4yy69fY8Px1AWNp1xFtxvbBA99Jrd",
  "key2": "YFhv2rRXvgHHegNUSZJ1LUac64Tx3AJwLxqjDFDvrsWECp6uLxrnPkCdNyQeJLEZANtKJNFw3Y55ziYg4E3ctmP",
  "key3": "4QU1yHR8iHSc3cvai1R3u5hR2FqSD98jS3k8ZSNxu6EAHG7XeivXhjFKPsNnxp42Y7JXaePdN7vUKMTr2rFowGdE",
  "key4": "3DsyA8WkvpbcRBtUpWPYzkACh5UGfpiLNk6XyvCqJ8g2YgG8uYxVjoUXyHvw8ZADMSPjA9t8vf5RwBXxqJLakBhj",
  "key5": "397214gHiBYxx9crtfRTYGo1SLKV7YgxSfWZKAH6yyQiDiCaG8fqifzhbW2hG99RTjoVyEj1x5rkYkE8K1mjvGo3",
  "key6": "2vSskngdyQgfXKVj87qZKhFPhFZV9odK4k57heLDSXGkdpEEjr7j68KJJntbzayu7cZBuHnh7qzDpuyPqzhgNm8C",
  "key7": "2zDRmxgScBWkUxPuL1tEo5ZKvJ55K51BQmhtpbYgs6B7fm7gfguDqv7PNg5pLofsLDrFYZtiQJTGvT4WTuQcyyws",
  "key8": "4oxMsR55ATxXftCPWSfHGZYdtsNwXs5GhKjzhe3P6c4nkxLSnUNTkktvL7cVbFhz69j85LB3b8f42yKay3zA12eP",
  "key9": "5KcgfgWaNDhghYJfGYxsJeCZneAHdhUX5TFaDsp4sC2ydEwiippM72qgSV4Bn5YnVe21b8gLwyXoqYSeFgx8VjuE",
  "key10": "4fmcVcN3PUyty4rBjaRvMWWqBnr5vpE92CePWf9gSWMWcuManDk2ujwPPc5ZbRdSgy1QHQT6UvQCet28SGKWVaou",
  "key11": "3aoiUZHiLhAF1Djw81QWZnoiEietngmpk2w16RWyvmZUTyKHWuHaQKf1U9NtkW2nbLMLCPDT1PoYjSMW9sQ7grpE",
  "key12": "339mSyDT4UmaKb5Ux8aipcnp3jShH1L4z59nMMAQUsYi61tJ61RyHaBWNaU17tM3LaDNvTnCvyFxyoKnkdLkrCMd",
  "key13": "47EXwverhKJmWDuqqCsbUwfEmhZvALGGvA2iU6JHxr5MLQxugcEroCmEDQxMQQMwFVUx711C6uajUrfKmpgyuo1B",
  "key14": "21Gbcpbc1FUSe8acjnmxskpFHJJvRJqywz5pBC2zZA3aGXwxCXRbR4nxVtXrXHCA1CNKKDF6cewmCvzavgH3FjsD",
  "key15": "2HS3M6Vu37DTMAbDqdAPbcazhvsxtYyV2UWGgAfMiQNoCv3GLAsEWmeUFbguF3DZycRwEjQ8s427wyXFWCT9qeMN",
  "key16": "5AUDVH3FZn634RM4NFYGQ6RRx1Fz89DXFbA4PjrAgPTvfaornKoYP6j7pCAf14SRBFgT3QyKU8fJNJvwpvyzSQR3",
  "key17": "3qnaZbybtEKK5GdDqQiWaabrHj2uywk53aKs2Y1vvhcj1zWnaLPRJsGeMLPAzB6xxgCgabdf235REE5faGSc96Pc",
  "key18": "3bAtrWLfL8PRr9Y37ihHZ8txobfwCiERiv9gALsTHD1qye38jndSZKhxJRSmTBk7pHby4Gad6WzA1S5cjjK2sga",
  "key19": "3b8xeHSJQB7R5QzonFDXqbr4bfZ98yfBsSejQp6nXyk3gGWzPsH4KDE3Cdvwx7HdMzJyWFu4JiEA3uLnETQfpJuq",
  "key20": "2AjM9Mi5RpKmRwjCNV3FfXzSMsRmMoqwNB5pGYue354Qw9qA5txbMHe9GZj6dpyZz1oyMqcDK35bDJLXho7v8WCW",
  "key21": "3iPPmnXxrpLrZEqq5icYTEfUCpWtmWQHmaoak7b54aP6xz1C3iXiMdJLyYximdn1yAoyEKgBE926jMNsy6jqaUZu",
  "key22": "3g1vPn3T2J7C4cx382cwmSU2guZpvGheGq6LepPEdKXU8c5HFj74KosRyxFSFLEMV3BwuSNJqf4aAGJk1bwJVkMH",
  "key23": "5xcKmMkUxLEUXR82MBoi7j96yx9pdfQpdZqTBo6gPQZgWnrGcT8UtmxQNhPxYWiurLTDPGWvWV1TJ2R9J1aSUqBw",
  "key24": "3w2gfAYjNR3We3hdB7FJemg2moAjQsP26cTok3MeRd8nbVxtQR8frt3Us4hHWVRkL2A1ozi87TeyE9FQS1AABde7",
  "key25": "CtUZY5q6y5TZWW1JcnBc2nUUuQLZoBeropkokFM2Hha7g9eQvCQt5gH8gXdzVAQkfRjLUNwkXvMpHyL43gxhvaJ",
  "key26": "5sKEHN6AYf5HX9JMRre7N7tifzZ6riyvQax7UuJEYRqy5X3deoXENuJ7Fn7i9RHZuhmDfeKK3U2rrXzrTUUPDDUA",
  "key27": "F7DdBBCejY57Y9E2dhMYergVi85qqnjiFuSMoacNrghKDAgoCVLHFihnChti4GJPip2Di8ZUPr1UMNZipQvRNn5",
  "key28": "4Urpo8UZ97mQhYgHQmdngmFrsA7muJVgiYxJN9zyYM8L4wdiVXFNv1mb7PJFKyM79k9AzpqXMa2cF8cgD2SpmqPP",
  "key29": "63ndBs8JSWGqxDzuhCReVARTcFxv2BQiAye2fwqAeC9fP7TE9yFzRgqTD1W8TRX9GnTBUgWz1fCbTYnYHDXN9czd",
  "key30": "3vofYNYb6P41f8ESAdFKT4MUabzX17vYLhKq1XNsbLSUTwwTZRDtCbzUu7LZBXnXTHYsf7jqHjGZkb1qt248Z7o5",
  "key31": "2zTDumEVJnt7GLqQhdJqsQkLm7KHPgp5sxsYMyV5xH7HnRSFMmVjPhPKCcVJTvm3ZBqzjjU7EW69nskHz4htcewJ"
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
