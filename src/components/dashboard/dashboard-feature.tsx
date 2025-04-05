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
    "5jsbKvuQx6DvkUv4Cx1hEJkzybhD9evGYPdKefMCcnTGsS54BJSUXZNsdXWRA9SbUMqCopz8F5a6SFdmVzR4QAL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kVZxjDCT7su7DJFimCHg6AxftWvhhPY2LW5C7NdE3xAS6qQDzthaZ5u3fLY5NnUQHfbTWpWfEYeyNCCwBXiXn5h",
  "key1": "4dvkcHEqfgN7Jw7iSuEtMbpwLK7CD21C2ADL5cNXivprxLgCoyZbRatQ4oFfzSaK7LeVypEjJS8QfbGJ3RJKQKnB",
  "key2": "37KVAC3ken8BCnEurjsuyg3148tdmU2Ye9zhmA67e6rysQQ8J42zQ3DtCAun7RqgGKAW6siTv3qnVg7gMZkiMTqk",
  "key3": "2vKnqYQAV1bya9KWeozgDmF1fgsq3eQpx5fBHgfPx2CYkLbmV8PNFuZeFgPoyywAfvjkz66pHNkGWtGqmmnWcU9C",
  "key4": "4btyNBLNxHL5KbFthvuvwXMLneYSfzDzJV1y8vK3BAziUkhjkGz5hmgXky9uUnGYgwAsUwyDJBQmewuffJZ7oY1w",
  "key5": "3a3NTvDSK4rXEocZHy8uezEyVoqDRjnMA7mqrRcjLNSN4cbDC1B4CvtBSCRt8Ha7xRTUVdnFHW7U2sXka3QV7iKj",
  "key6": "63pDejmthdwtfySD1VfQy5gWqXPtA9DqDRSftX2D1QmbiKgRBWLb72FoSVEKrgXDhJk25fbZLohkfwKZNtUUov4J",
  "key7": "5zn824DeSVKg6a3kQYH6oJRLzn5khAMtA3NjXuWQFM7BtLrKAXY8MgotJ2ghhMs12nj1PQDF9i6C64Bkur12zFYs",
  "key8": "243MCFPELayCGiCn7Rv676zQrBtz6tG79GZXZdFTHkENdujfAQFKJ7mvWa5J2Ujd3Dj7mw33vUtdyGqY92qHxhXG",
  "key9": "5DepFJtfNoY7MFHUNAfVjbM2M9XyCp9K1JrRrQvokufAuVsegUmQn6FDDczTNCy6NfGmbTZTo45eWNxdy2ACNDra",
  "key10": "3qbvNr5a23LmNSNdWvJFMLjHk6mKEXDBZ2hc1d1bK1x5EJ4AjFeEjTvU5cRuy7riXHDpw3ReiVrW4neWwUmY4PvP",
  "key11": "DerXVkVdZFtcAafAcSbkvG6rh35q95oG8vAP86QGijhT5Du2w3Hx3HH6M1DH8t43rvcQQgGp5jGw2p2YWQbLq2A",
  "key12": "2evewh6p3P3V7uZy91MiiDaNPkYKnHbYMvqk2Q2MW5BudyFHNBDWKZ2gr4XT1XeAm96RuXJZobmdWrVx5SLpNsrG",
  "key13": "4Yqkgnbo2SAWzaZrvBbDxWRhpkKEmpeeizc1dBCpDSEsYEfhVRRiyGjFeEk1AnVs5Unk1aqoTdebJTDafxBsY5Qc",
  "key14": "amNJ9TVQrh72omZQd7ih8hdEkVAmQAu7nTK1CXGfeHQbAkTAgQwPff9sjghKFxUYQYqaeapfgqPW9c13uVbkXDZ",
  "key15": "g1uHcd8ptnsZFAJ9vxX5BcUikaEYAEH7eNjcoSSegHgzZn1BGo2Sk6obSG46X9BCVv79VLEqjRVFkyrfsbE5fdk",
  "key16": "184xYdasrBjoHS8vCEVsibYz38rRJg1AtjjBRLyDcg17JNRXRDpwvHK1efxJJVpvyezpVWFwSgcpUAdwjXNDgWF",
  "key17": "4TDTcLXPHuYHLbteYav7w1tEHTU9LWXepYke8sVZHcKDexL2DkvKzTQjHDeSAQ6jHeXaVterCczuoVi1sNqLawAu",
  "key18": "Ao7VHvsAx2gy6L5U7G21y1vAvFW1hXXtbhdM51GcBBzn9Hq2QkXtWrqiYT1XEkqzjGuDknegJpReWo6c3nQZsbG",
  "key19": "3Kszb5MjEACavhmx7adg8yNcfche8JwjXz25n9R4Lh96WQkHxcaLqiRL2Pqk8B88mF1QQRVj4JXxhqBPd9j7PNCb",
  "key20": "43o9fYTfWL2c8AZ3XEZ2vQp6xFdLnQsEvhj3a69Zh4sXdQjFD6F92ebtiDaoouSz19xjmRoKV4pHYzuFogyQ5jui",
  "key21": "63JAseqsA8i7Q1KKKaJx5u1VEK8dhdZLviR6HLMDoac46a7mW8kbmmsM55uHBx14FkAEfir2SYDAgLYCfBPUawN3",
  "key22": "4Q7SKiWj7D78UjUPMCnN7dSBCy7TK5spc2fRmfhkDwEzygeu8wrNNBP6Nx8wPJUVgofnhzj6XiC5vLPuWHden2aM",
  "key23": "3jeySwj8j8w7UmwdebxGpry2fnGNxeaHeChwS2AYJtjMf83qFKekB1DcqSqFD8nA7T8roAy1uj55KFbsCqDWeqw3",
  "key24": "LwC9FH5Pfwgewp2FuNTrcaF4xhGJBUi3NJs5K8rv8etD4MftTT2nCXNFWeoc3xRKzWJRodyPvLvQcRNBfQBKaVD",
  "key25": "56mfGWSJoZWENSQzFPYGTuRCmZYYLcRcdHAWXqpqXPX6jPSHTAhgQkyXr9KCqip9H3UsWGxLSN59bdxrHsF3vqdi",
  "key26": "tDKp2DdQuJHZZPQkVLcGtGUwjBsyVaoiACVusbbwMD9MmjvUpFEFNJY2ap1eHk93fZcJ6ami6gZnRmFELCTW5rH",
  "key27": "T9p4BJYPVLf6KvBGoQ2ZWLFdseRYpt4r7ua7yBeA6fTuAjbcK76zg2jLqKE7ReM9xhzbXmtscfRFyH1hkPn9CoJ",
  "key28": "47J4jtU9CG94f7Ls1R1fXZZBMLAhQbfmgdirGwhNDo8EEywny8oopfFkgvTeQPjuCdDFWzaDzFy8YPcdKzwbQTGZ",
  "key29": "3k1izH63bQ3dHNQR1D9Urph2W8REcpzYyywas6T84a8Rd64Ai6Sj8F7dcp8TLmjhp5WqRgkXR8nyNKgbUgY1KGrj",
  "key30": "4fc81dAbTK7Zvn97EB7rMtJdwou79mDjmWAha8cKmcaeyuXDdxtUwFUvRWho5753vhvaUgL57P8oZWzNgGBKya7D",
  "key31": "2E9BJRV8z3M9yTqpGmS2DqQibtDVkhGkxe5Gokku5VeAVrKRHQPFi1KBQV2F73beHHN48dNP8Jcr5aKT8D3JLY97",
  "key32": "nre2EKtBndyyWtBrLEXZ1jbV1sTKvr7Ph8CTwEVxVVdkdGx7ZpcRg2FhV7whh6XcMAXp6zVt26LKomPxEdEwKtd",
  "key33": "4u45k9pq9gAkJ9xPjmtAKrcP2rRj8C4onRcFCsp6yEvSzbwmWxCiafvpEG32E5rUKmAvp6UwxrCfBT4bFHo71tfy"
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
