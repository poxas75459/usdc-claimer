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
    "3GbyzuMgoz5pCHaHQvwdayH9nYXtJKqTng7TzYwNp7LyL1d72P6EGJiaDtEsPMPsGSyJ7sxWETYGxfcKmZPbgYbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TYBnTHVz9orREkRx1x1pzrAvaBtop9AbcYLAV7BL7Y5hgfpmPhD5Rsvkqa2ZYwLb8tHR79JcSAmM8iSuB9rYvD4",
  "key1": "2HMJocmE9XzsdaqHW4thqnW7KpfZyB7MFhEaqDCSov5krmi3KkPLe4fh3H7CMo9d3ETuRWeX9qK5yVcDYexECJ9o",
  "key2": "4n9bzoPpjfmuSntQRnUCsoq97qjtr3Anok92xiR7XwNwC7z12D3ZCSzGG7XPoGQXgEFNV4MtqJDoiCHKpfkTFfRf",
  "key3": "M9Pio3H1dGJfF4N8HYW4c6Deczkv1Q4Yzyu6azXBLv7d6VZ2Ydeyy65vrqrP8S5ynY9aAsKQzFtKhC3YcWxQBFn",
  "key4": "2YNRpUTTKYGMAg6uyB2CYj4Kz9bi8yz1f6JSaf1XKcV9CtkmnwTjZDXWpsfFmYG8GBSSZntKrA6ThwJPDZi7SSBh",
  "key5": "2HfqNeRMFnu52oqs97jyW9RM8Z1giLEnedzh4hRPoisoaJGt7We1FdXpvJGN2SRTzTmAwR7qcL9YPidHQqrc3SvP",
  "key6": "2aEjcz8KDGgKNp5Bc9vzd2RSDBzrqGk9dkGMm8WmyhxpFdUcGDR5VuVsjUNKhvJ7HCD6BRfCB7YAacZ8MbBKWgQj",
  "key7": "4LiR9tmTxdgUejJaQV1ej23L9CPJfyvYL3S3REqG2i6NqWzpUdd2FsuGAvqXVDZXvTguHR7t3GWZN2QDeYgpppdn",
  "key8": "52rSmZRrcEF6dkHR7esTSQjCJdGDha9Z9czTrdRZHVVP9jGGuLs9kg4HNP2JHJHdkQSQKRiDJNtzpxPFA98xB4Y9",
  "key9": "3UKLZGXbopc1hT8eNWdGXLUTH12br9jopVwP3JmLj6Kb8WsXUJLeqEMG93FhPMtBmNrseHgRzWDKGzqyjGKGKiKJ",
  "key10": "2EEvbq5x5WSvu18NXFXkLWyNBUZTd64uqNVt7J6YRfuZ9eUSfWTuecvbosMwSsUEVuJ59cKPcabDEsGv419Gu7CH",
  "key11": "3CbNqtsch9YbArQghtDdDMWGWqF7yyhztUcy1876Q56XWDoDNButyvPTiBcbrtdyBvxPzM8CFHiTBCPb6BkSrsNC",
  "key12": "3TzR6WkYafXzer6JkoVMv9S5kEaHsNFz93VUs5EH3dk9HciBoYWA4qBmYe5NptRFa75qbQRja3Xc61YF1gwLVadH",
  "key13": "1ov2GKPsoXsiADf1FogUKfYRRqqZdwh321nxYb3UfQJzpm57J3Dze5r3p27aZ1dDNpiGLDdfSPq3fuqmpDi2J8Y",
  "key14": "5Sqhaxh7mpET4KL2uZmgBN1tiTufBefXZPafPxx1e2B66iheyRzoznU5uVRBYvtfAuUaeAo5oJDT13JUKbwuKsjX",
  "key15": "5HCLWt93PBoxHGFogTbCs1hBx417HPjg8gPqUMBa9hdwZugfCdkpP1sEGiqhL4Uc9D2b8iL6mJ7UJX4HX2SM7SF8",
  "key16": "2HYafHtT7knzA9AfDoLTGAjb6jhRQ5pzLSCprvbb4uwVHfRzKtR4ZyAHuR29vhPFmrHUh2AXAp2PK4iA7Vm9afj3",
  "key17": "4oRSURXy2BhsLK6tAz7AVvdhxUseANikio7WvCgM4jowRHD6d7sfz4AEytzy44E8NREYgUXt9uFPDq4CBKQPHHTr",
  "key18": "3z5zNvgasSKNfArfrU3CoECc1d1HKJ7WHeNME9ATXeECS8EFfFuGfjUe3yPjCj8euxVtXqEuAY3fgRKGpD9R298R",
  "key19": "64LCo3vhnpRRyaQQVzy4GzeQqUkexvM5gXgfbit3deTNK6BjqnxNyWdkscReaW5d6k3ZwhhkR63FoYgdzD9EFsmF",
  "key20": "3VfLPFs3YdYx549SXxQN2bUYahvwwxJDMM1Qp73UTVUgD1buwaV4dUPeenEmLrdEQsQeHC3ARtdapMoQsVpv7hQa",
  "key21": "5m3ZNRax89wU2WyMvGn8rtmMBTU9Cg7aM2YcSmK5K5sp8jRjXQHDj4HxipLcJq9DRdASgKGidypJ6xpQieFoh2x",
  "key22": "4PWM38M9vuHdvvze3MDqxi4xZn3uXqtBcyMHh4KkrmaSBr1HEivcXeYdYtLo9CrBcVyDKezv7gFAxpiuP62ySjtQ",
  "key23": "4dGRBd5UDhRCbPqctyYT4xcVNvMncMhFVCRNh7tfeRVh9K5yfevFMD2LympDzBYW3TSUR2K3Z3yo2roBz5Xwp4u3",
  "key24": "JKEh8TxXxmC1oFpnmLjeKr2eKfH4bR32V9SjPVkd8PzmeuPL4hc5pC3TPcs8UeiTWs5rhX6wCqxRuPa71CpNbVx",
  "key25": "5mBg55NX3tvb13F5qNC1mKsMcCFrFvYksDLvmRA7VyVWUVFkdFKLoJpRBcU3YLLNN4uZmhqMg1uqmjF4cXYfwZGV",
  "key26": "4dpPh7NxPjLk8of1GrP1cxWoSsWMikix7cMYsjwj9uUw5cHiHFfkn52K6dD4Knm1X334NGA2ypMGRNrWHS9EYVuE",
  "key27": "4Gq8S83tJq8Q1j6nVXESSCAbFX37rqf2ugvhaiYMrdkjriCMVykojqDNmWGNn9JfsfQoLcHG4EW3ABTn6ip2Gnh2"
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
