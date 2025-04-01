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
    "2HiqcYJAFTbjJZC1QKGDTFEZwN2SUauDrKUPcKXwZ23BmtgKbYBzW7AM2VUjyqSzibJ5XzoTG9QpsFvsoXHWix43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66DtFodn4mrPw1veKpQd4nwhPPQrFEZM56WohHiu3WA1yUUbRKq1tbBxviRg8tSGjEHR6Eg4HvLLPFrU2tULWuKU",
  "key1": "2TgXfxCnBVgS3VhZWmiqc19yVxsJ8jLynPPVrXj2x3iNmvMWYZqW4V3oexq5umPJTCx81Hkb1aQgwkauLnzttVwm",
  "key2": "4o1vCkLd9fUNBb6tiqAr3UipwUHehbLuJagTW68v9WwbP5Fxbc6bkWbrczMFdrwqEXcVdzRWbeSX2JwQV8idh5j2",
  "key3": "64YMevuGAvyiNWHLNCBp1fpBCaX1HcVKCS9LSr41z3XXftxaFUc6nGsKJe8BJAYVfdTt9kwB3Qc4rgUKtbVxb9St",
  "key4": "41BgVLTWZVfnfX1ryZN5pe4fcpsy5HHrFb8rxQFsBf1h3MSvK7Xw3igC2b2JW31fD3XJcMoMNRMQfDkJeUWnDt4T",
  "key5": "4yPtzPKmyPPi7pdqiSMkVDr13d4MsETwCzaTNGYuKasxSEwr21V72gdAzZKcuWEUyT5e7TbgiBMbAMFn4k6xcNaR",
  "key6": "3Y5Adot4wM2Y3vPaSwaWoEgtki2rMfctZLVjaFgLHSRmr9d6wLToerhyVi4sNi8vUBRUMPgVt5Mgr4p7StaAQWL3",
  "key7": "qhGWJXmBTB4bCgT5QWWBDarPAnJcVdu2kBfDgJYpJine6wiChgtKnUvexbgH3W21npL1dKK7o7cuXFVWoHSFCWA",
  "key8": "4SLUkNb7oqosSmWQscijSBCWWfWviEXe3KWaDyBRLXqYLDpRvNMVcSTkFAdGxubGb2B5G1YWvYv3n9jQNmAPcMWV",
  "key9": "NgUhSXwxbZQDLXEpFhjDMCFmDG2EN9Fp6K1szw3SDAs69vCL5McJJDuyJDbNtzm8veYNePsz1pqpmw7g6c176YT",
  "key10": "SEFqaYegSMD412BSswdB8sN6K3oZvGPAzamQruVbTJx59k1tyTxb2GaxHMLw6eZU52sn28hbZVK6zizWC9t8jmx",
  "key11": "55tvUWTn5rsgc5brLvqwCGg3dqtpWT8wJrs83q3ooz7NiRMQfhFFiatUgzPyWaqyjtfhHsLvgTarGe1L34QmtgMY",
  "key12": "1HJKqakAypPQYakgPKtSJFVJiJx7oYNG19nqtz33jmdz8TmE6kyM4gVFymmqGdzQTvuQSpF5sSV3gesr7EcPX59",
  "key13": "5addhW4MTQ8QkxYTun5ij6CuJwCTg4fbF8Zoh7cuPVdBBB1jhHw42SQB62GbxCGURzmSKMwXVdhovps9tmm9Xdnm",
  "key14": "3676fqWRxAmcP6UrVjtMmwC9NUp4MhLbiNvdJpneQ1bLrq2RL8BGbm33eA3r1oVzUDL2EiJRTod9L8RBBWFVBUBa",
  "key15": "CBM4WmUcWqhDaQVHs71SbUByWH1M9xkNNEYuwH4FUpUwfWWuJoxdTh8i6Eof41Xoqo6MYGjqChpX5JDjBmZTRdP",
  "key16": "2UnSwEzAYSE7yNPWnNJ2RtszW9ZhzLB431kZQ4ffgFgF3ESMEroTSw7oVXY3yNYZiYdr5JF9yxLC2dTH7a6ZvQv4",
  "key17": "59UP8WURKBrnmP1KHmCDnhvtFFbxqrns3xqsDMUGEM4JZXsHgko2XaSh6UUoGFb75bLf6rsP14fo3dDk6Mue6f7J",
  "key18": "2rKV4yiViQjjbC965X6Y68kS5SiCuncMvLtVTcEDV15MUyaHR1Dp4jawEzojw2dGKiqKMYhp4nPaFbm9YeKCsaDw",
  "key19": "41EtbUSBtLr13JTnW5gL2w2WZPjMb6UFFypAW1YeMMACsidkRdNtsW4St1gmG52UTPgqr4cuun7ntBwAtM6GPDZ5",
  "key20": "4ZdgTKuPKu3BsCgxhrHZ8RjyTtZvzwedb8N8WbohNhRnsQ8db8CixYKhgqXNrTKbSAfyKWA39BHsC4HGaChNAib9",
  "key21": "3CXE1KYGcnwm49fP5hazf1W3zDWYeYLqxeNreRWU8zEDbARHdR4CffFVpX9WkDdMHY6oZdfzp7bBJQw7DiWpkzoQ",
  "key22": "4eXMYTasHxRxou4tcLJA8gLT9iSQLuWexULbyt1k7ccH8Y8Xtqc9Sc4ruxoj9aNWU5nDbrpTXb8CyLD1xM4oVyqY",
  "key23": "4hG4K6bfagG121yxnGJvwHyLYro3yC9kzBP7RcrpE7ZWU8quzPQpYJuJ9XE4qDrERAdQyTXtNiuxziAAaJFxvMPb",
  "key24": "72Te8Fa9EJqmJs3BoKZJEmwAWhG87F393WsedJY7r6vGNpu3o1rk4RRoqYLZ6D2tCxEBAyUTqfVHaX3RK6WVDVA",
  "key25": "VWjgXAmDujV8SBQPaYfuuZtjJ3Ydio4RB2jtSfUaH4va1LYGAmKToQG9KWQJwo4dh6P4FgGwFW47bfTmkxEd98n",
  "key26": "5t2nNVKeFmyzLK2wU2ZJcNavHH4q4MJgjWPw1UqC22gDU1PrPfZPDcqDcE2XrjuqsNre2A7xgCs5eFEqTJq6AXai"
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
