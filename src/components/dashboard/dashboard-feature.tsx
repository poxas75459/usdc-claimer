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
    "2bJ9xBhUvgLBQJJpk7pJGsZYbW22WFA2qrDnxzQCRYd9odGQHSD8btvD9TcdBrkz9CfGX6vxvFbdukeRuQUpLUUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P8hTPUkgNhTaGr6sZRfdH66C5ATcZ61DtBhGsTgRwwzT1yVtPSTabcQ3bbN8JVt6XVQRypUgyk1d8xxXG8fRevs",
  "key1": "351ayVGfcPdXAP5ah6pMhDHvkDJZTNbsUCTCoP95qkssmdKTzoJvqmo3hpy2Q9L85VjAs5tQUfQqep81b9X8PGm4",
  "key2": "24Jp1RcKcMEgwkp6oJr5hTD1Dy8hne3zWvQ8fwuA6d5cYZrS6dh6636JXr5httFsCLzWCFQDCy6ydsGNjBbBfxNw",
  "key3": "3ngp4J58j8gqhMrc1FzwXQCaP2bqYXjHGBUdvT1XN1nZXeEYqo6r5LcbmHuR5PAE1qXpzgCvLoUj9LL1Jqi4hbTX",
  "key4": "52nYohvAhCKUBBgppjtTgnwtJZKzuoS3Hb2b8STF8a17ekhHYRBvWQ2A8xkWvEYU7ULwMgGq1ZRN5FvKGNkd1t2s",
  "key5": "3vuGKYAKqC27g3oG3DELKCPRncJN7kR296H8jkFk4JLxxx3ZAxEwZG9cZUed6VU2qVQUSwFasDi9DTr6FH4LpfoR",
  "key6": "4wFjKKr66viTbLCd6pAL6txMLAaPiFVybYfnZRpZD4FaXo4YdQjEggp67GbptvZYqvFuE51WFyzFzFDVkiAwJLpF",
  "key7": "3E7GvyAHfcAio5eemEiMgrHGJbsEM77jbSSG3ayBWb2SeYkPHdqgQXMRnbHKdrjUHozbyjoyPsKS6jhbZyEjN4ZA",
  "key8": "3Kjofe1Vw2PbfYuXd5f2Y1mFcBMKNLMUz34PGgjS9A35Td1unKiYNgiVR2b3pDXqhTPCSe4VwT3fBU81KjDDK3TB",
  "key9": "483HyZmib3swduN1JnvuRD39CyxRjP75SjS3GTLmU1XNFbPSNJu4JM46DcVpqDms1GNYP6DoUPtwE38hsm5N3ef9",
  "key10": "KAdwfz2BpeRuE7csvEv2Wa7J6GnrrduoAdePKjwKQTtZK6LnPMjB3EZxd3cMGJqodrT5rtxNCQ1kR5qNbLuv6zq",
  "key11": "4YosftLGpPRzuF1ZStP7ai8YS3Wwyr2JgDZHXmXGh2uiMJbi6dxnfUTpYzTQrhym9bJgNKnbFFFZtHXSH1FJXZtS",
  "key12": "8YEAoLKv337AGgmVehpZ2HXTF2xKwJCqJejWdSutujNqakUnjoy3SzPq9mV5xn2miUdiduC6eBjGT3YK71QFwXa",
  "key13": "5MeZ1j6bn74uoayoYkCkwztBT1wZdiGpbitEWPSxXPfCRRuUk8GRATGZT16ByQywVCDrfp6jWoykbqj3qErTNxpT",
  "key14": "3PnBiTGd2ic5PN4v2JXpvYQDx4xE7crsXsnzAZTybiWNsLNQDHHvp5CBFvrxEoPxu9SrzSSrfKQjXerxA4N1YngM",
  "key15": "3GfVvMx87CPPGzrnW9j7dt7WfxBeuaxm2i4rmDPstJ1DBbg6u9q94CB6w3uwwPezeTUf3W8xejK65YN3GtMzX632",
  "key16": "3iPFjq5DhvTwguhfdZqmEiwZAUzTeASAA3ajTx5bpbAEEptzLknqyAbmqocyC9MxBAGRQho7Q3TNw63BwtSXYjLA",
  "key17": "3VeLJLJsbfHMSAkBAqeEbZKfNwT9JBxitHxvGsqrAes2Di3g2LLyKXHRiZJLGrfkFrD9PqpUy2PUgWNgR8zXNawm",
  "key18": "gzoD1xWdeiFnc27SwCbxCT1PeTTLiPS4dDh93gDZ3o6fqY9fAvgWegP4s2gxV44tirtQhNEEZPeKa7u6yeG9tsV",
  "key19": "2AXita7LWZobSs4Bj8i2HfogCiQZ44j9S71Y19uNSyzfpoXM5DWFQdz1KbkyzRTDPXWL5x6iGrxhZqVgKjzftdDQ",
  "key20": "5TESY6Vqf7MRtEtHffeR1bj5h17Ru4bfgP3M7ou9UD9WcZTR514pvu2xXG1cfGPZwjqxtixprFHYsmcP3Z6LDcwz",
  "key21": "AoxQPWaHTQdPU9uXAZcdMMFE1bj3hGM6MgZX8ajgpJkw9c5djxTbeCS4VQsoBFoF1J7u83Bz197r7pFZCoMnBah",
  "key22": "USiW9x8qXpY4FtjppTvUTVEjP38zM5yjprVSJunWLdPWR25SComEXs8bzpmrzxfvqS1PrWdKuGzJByQjntXyYo8",
  "key23": "41HsS9QTsYVLosh3JW2LrJsB7GvVhu7nQnEWaFgHhT7ufptyyTX2LRDbuXdpvy1dULmM92KVgAL7DYHVTGX1kjus",
  "key24": "kHmMQEWcyxTeSrgSnhur5M7RdoWkf2d1vksxRP4NkYoUD4VV1nHu3UkLz8fLcSkyCHHykDBtX7JoSXZp9Vs3ry3",
  "key25": "4KjettxL5YjhJro6j62L5bkVC16W48ayRDBUBxNEKGX9CvmqzZ8ndUH4XmuECnY8gDz7qLnxfMTxW75oFugS98Z9",
  "key26": "25p34R1Rb4XB7hXfCwsMXYiU93K7BZWxjURBVqPfJAxdMjVFCEJ6fJaYXPLfckLbF3y3n87qn7bJ6DLNLQFin8k4",
  "key27": "3kXtdmc2wRgYeh5MuSRJ5WQCKLiktSrP5YC5ZSHiT5APJRgm8MW9cxZqqMfZHab5myPbTpMwWZw5ad79sTTDNcvu",
  "key28": "2rtR7p2FANkvmLoDDLtC5QUwJkVKW1sHdJhKkYKRSsPvif4g3DCcUY8BAfatksWXDEkgyHfbH6qHsaaNkwj5g8Er",
  "key29": "64BDkmbxxvViwoxppW4tu9oBkJArPZHx4k9RGtRZNg7qtuY7Ve7tNbhWtQYnPR5gnwqEJ4bQfhPjaZASJUxUYaV6",
  "key30": "3ngRTHodg8hR3snfrDCDinpTZeUdwiwM3rv6tL298SbqH7GZsJZVVDpM4euBywiRTurv6eJFEUdMRRSAwXwjcvPf",
  "key31": "2YncrTSwYJynrEc5FwHMWcVsoTFE5ARx5BXPe89stofdHyqBf5xYT9nmBtTNuRxzEjbisAuGQT9fgGfr43Bo5cHE"
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
