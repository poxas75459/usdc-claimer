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
    "3kZUNsoXmWnr89a5CHvEEMqanEN1RR9iDyNJZQe76me5oE81SbL3bbizoCzWHNR8rSyYc7u68YsVrS5buctqMSGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zZ6NnzKshw9FANcwUg4FGwnG96ZRCkrdGHtDRAXyrn49bURUHGuvKx6ph4zuNawdVS8x5Virxx4QAC65EPGoZik",
  "key1": "9ox852bUXrQbTyUNWtxmeKMHaYjVhXuMvpvVG1YYWcM3g7XGS6axg49AUN72uZqsz1MCTx1grwd3WrCgJPYaUNd",
  "key2": "26NYKcMSsDAMspwNhk8U7VcVA2HSdtjfMM7x4xFZV7vZKvTW4KBDoJsVv7H6bbWVjZZtDVZnwJbi5ciRngwPvZhz",
  "key3": "27JosmeJ1Mw4nHvVCYkuKsqQYNQSWr9Qkmbu7mZm1xUu7kSYCqF3CVQfwsFWRG9kV8BLHUZbk8tBMqGExMjS6h9Q",
  "key4": "4LAHYhcjr2bUaTxVyXE5bm6bpEJ3T7ZZ5vZuGbmN3mGYw46APPztFxyHzAxSdRYwCGv3GcsoUPigNWRgo7CsuUen",
  "key5": "32RQ8kqpaSEhrK2ibbHPDx6Y3iqzx4s4Cz2Ay8a8nw9EEfPMErT8vtt45PMiP9WM1R9eRd4oAtNwEVPRz2HTDr9S",
  "key6": "nPD9khQQg1RTJVq2JNA5o3pGSN8SmHDJERmnncDHNfgGXGXSSUr9aHz7eVpUe9JbAUBhdxZW3oNymarR4afvtM6",
  "key7": "2rQgt9dQrkN9PSJzVyzqfjXfDeSwWxwTJqcvWtfkMrPWG2qTMARL3ACSabgifWRS7HuZ1Sn1AcvcpdsfXGKzgWNr",
  "key8": "iDx7edqdG9YUiS8L1SL2pD4EjRXEFsvQwzajWyDoKZpLQS8gAKEFFPDk4dtok91CDNXy7TWAMndiMXHmNmeQzuR",
  "key9": "5ZscohWT5zD9KDsPrtehT4ZCZeUHFkxX3D9ym7HgNXQxM3yxX6LzbBMC7Sxdr4D1XDsB4Asutp6LkPtgQVqb7cFa",
  "key10": "3CkrUYmefTUuWTXz1EpC3qTVFrsuAmhzJu7mUa3VDFuFncacG3ECPbfnCHRC6B8zTz2bnsBzM9TrNF74bGhLgkkn",
  "key11": "5Q6vG4hUzGjXRegKx4W3XN1rDnAAPRo17CH99KJoRZGKDmg83yvfvDJqrVcp9bM8DwWeiEpghE4RsumWQbUpKU5C",
  "key12": "yeYTsJpPhrmyfEU9UKMoeU5HHr9CGLUbjMDTDkqEWyLPXcNTmKTBXN2YQvNie2FYBGU23DqSE26Zubrmnof7sDd",
  "key13": "Yo6qk1GWcazjiLtUb6598eSsz5KrwSMMs6iNJJVbaYSarmbCfvAC7EiwjEBwggJ7mppxhQPmSKuU42NrBtywrnT",
  "key14": "2RhdkfdpCZ49LvFbLDzthM5ucwK6skeZEzNt5rcpd6cNTrUn7NpGDHTnCw8SdjHmqt7UihisEeU7mQTjw8a3UdRi",
  "key15": "3HQvYDQHPGnexaRx543cBrQpMi7k8FAygvfgQXCwJbvDiBtjcaS7Lm7v8qbJLNfUmRBSs2eGNH1nk2rcE18RMJRj",
  "key16": "shFTee44tfnzecWvZLVoDRrfVC1L5hxeRDsn6KAafcqAyVGK1Aj9842LwxMQ4UBMVdkRFvCqgxSfDop5J71ceeU",
  "key17": "aCrzwtbqPGuM1DyukpdnFB3nzXax1LcVQUJfSFAdcjATeXhh4bZW8YoH5zJrQp8wxJ7JxCwxfCzYKznFHFu5KjW",
  "key18": "2k4uMe57rG7my3SK4yAbNizbW9bBgyXKfvpUjmwNxwAReoZbcjoTvpjoz35CcMKQj1amAGLWZJB5MMD2C1fqRejh",
  "key19": "Gb5ySi94zfXfPzBj5qJLPGigsSTpZAnLHz4AGCQ3UrKvwBTqvW8TW5SiMUb9Ky86JaWHQxRPCq7fw8rCemCjia8",
  "key20": "PRFDDenr1LiwdG2gnDLnKWBNNWtK3gfwFJMStxpkWSv4PpjJQRwSbiySa71jNWdHwEG4TR3U9iM2xvcqrx3L6Ea",
  "key21": "2gMvtUu8RNKAkv2SeKHmtu4mzXDMdQ85hdxjJkjQgyrMK6f9nCQCj8NHCJAz1t9SaqhePZTzE3NUcwahPQ74hfHT",
  "key22": "ZSCj48vUgmVp1ucaTRoTqnLDWdxwk3pB15E2Zg8isaQzC98yEuTkTM784CyjsdGLv8CdkJUbF19ap2V1o4B7TNG",
  "key23": "2SwyiX4duksUPJKw9rKkg6wB9YvS3fLYCQNBsqrxeRNt5dVq99Q96P6A3CQyzgPTJUXm7SBh5C2cyASYZ59UEePc",
  "key24": "3WhJoxzeg2ys12Kv3bjcQGqqFAka7T8X8vY8r4JzL3rwC8rCtEqbYZcMoNA5KGpMBnxKzDs7vvMNa1SrBvXWBArg",
  "key25": "4bHSirPENrtjmvvysrHE357tWEHJQ8FComxPckBcY2C9qVuVLQUs9i6ti2XLfsmZ8i8Tv9p2te3WJ1URGT4fm2jg",
  "key26": "JyGw158Xit8SToMnN6hn1DUb6k3y5BpvPXvDKwaQWge3NeJWvVYYDvRzrX2CMdzeVKXG4KyL22JmLhaHGtNnHat",
  "key27": "61GscfNCETudNywAbST2KiJr3SSvK1P49tCZ2zGWThSdVvFLXw6pL1TFzjRBMRFTnnEcUnRTRnp2yGmuLDpEnYWs",
  "key28": "3pUo83hqhi66jJhL6WVbs5P48XqAQaDWRsxKZ2VSbqESysou3dRGgyiidJsrZZJ2G15mThcbnNqcBDiYHyWFHgiJ",
  "key29": "3uHzAGJByAJo4CjhKYSudhdjakHTSB8L9GskvDhbNJzi3LXXbYRUzHA4hb6LgMnkxG8ntXGMxYcwMNrNZTXsrZca",
  "key30": "3GyqfdePnDPQsztWYVSQ8TNk6yLNaAwRrTXD8BEbq9QCcTSnX2AiUNxR6B9yAezczxtbDbgrkhNxgUFFKgE5cbfn",
  "key31": "iqaWhuDmpkxbtf8wCpP2jV28ZBMBkFmmMeEHrzWzqqLBoDnMJSHo3cjLWJZj2VLfPmiYUcXx6CdmfdRRSpRXQ9p",
  "key32": "ezKZjoYdvSnbUfSMVCn1V94qJBF4AuDwYupomipPmNA2zKbGM6whPUQrm4uPcJExCDQ6BZbRz7bHtifLfh7ortk",
  "key33": "4KWMzpyRLUMDMxzCsU9fWz2NofyrNrh7EWupZXj6vW4ydQ3TVFhM88Vvn1Aenqc4tzU5x4YnmsqVjAeNSfdrw3Q3",
  "key34": "5NghAXVe5bUZ7YmJ9rjGbhKCMZk6GvyARsqWgqzhfhoZWf21iPFF22vxoL4aNvCvqPBrDq2EW2t7SGnzLAYrAo3P",
  "key35": "4VTKuQew1Q7NZRfh7zSYW62qyytgQZzF3tc1Q7zU3hmBQrdPBdLAVzfv7otso4xm5LTvPLxjh6dYWo7DR1BwFBGe",
  "key36": "5wDHzVH8ZpbbcBmqVBHrp2C2J7ZcBRmWSntyTWa9U1kamqqXWcZnQZW1pcz6dM2jAAWRbEjs61Vy59wnkYDyWars"
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
