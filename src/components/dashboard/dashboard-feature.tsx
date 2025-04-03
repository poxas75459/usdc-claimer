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
    "2WXSqyn4f5wCaWZbkWnTPNizk6kZKf5S3yjgPqKQsS4r6k1Dc3PEmnHKf9BaY9Rx5iZKjXB4FYUGH5kSSmV3F8a2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "359Cm2JMpowXnEs4jgTVtzvxayqYar7NtnLZbnhQ1XpgumjNEnDxeVyRnq5s2FGay7hPW1TNxkTExwxXRjJ56wFo",
  "key1": "341Btfz9s2pYyNR83UZPfzbMVUrdoSmvKHcWagRYrbcZVT3ENtawYEeMthRrDA8AjvKgV8A5hfjkVqrUJD8DzCra",
  "key2": "5iCRMCyiMa3sKA2aeBvqSeNwxhcRCD2s7ZmKYBxcFNT9q3x4Kbq471mTkfCieTXfdGsyQhMPKua2JSCufQXmH7RE",
  "key3": "21EcmAnrjnCu5fdcQtD29gC3nRt8TZgAgLdaUPbFh7874Mzd86zAWr9DnsWsD5EeBSVNedxtu9js1wT3vt9ChFsA",
  "key4": "55GbDZr8p75jBwEy8R8UQ7T8tC1p9egRXJzmNXBp25xjdvGeSmN76aDBfLB6T3NcPRzb8QMKZv58bcnmLW32cRPr",
  "key5": "2p6varxL6szh8smpS13RBfTbyvRaXCKkPq14QRiCvLmMJs2M8qtJipejJrnFHnMjQmsY4ZPZDpHMbhiCq9UmS5Dx",
  "key6": "2iPikv9tFR9xDEfSUXGvBgJ91mUbqJq3ijwUG8QWdpxH4XNFmZm5Uh267BpfFbLfYH9PKiyMaEiTLmhHkoBp6k6F",
  "key7": "2Dxi5HLQGq1ZiQzUBqX6GesPqoEseq9YW87Z4eUBBeus7yUoYX8X1VHtHAAyf1R4CEXzuEHz6rv7d3yevHL6gaNq",
  "key8": "2WhHn6EfSSxvzKWTRu3tgCNZw5MQimqMi97QEsahirMZbg9Z33P46NrRwbey2CqUhVXSfeg8KJqvwG2c6sSDJXNs",
  "key9": "2M5C7XtUciTwfrRT7hEkfX1trtn3c1obQLjjD5y5pkuMaqqjEaSBiwAydnx3NeNkjfuEK4ygrgVCpbyrVz5TbxZu",
  "key10": "JMhE4NRWyC6VGdpiNJQ19vmjHBRcjwnbqDAgsf5gtKTGbR6DUe3BdAirytpJt6z4n4NSZcGZC8JRmWHVR43twcm",
  "key11": "55EVW9q6f9tFTzwd39ZmJyi5HP3troVhBRhFZhbSjU2ypuZMFpszsqA3SBYJwD7PGmtRf3FufYbXembPdydMomqe",
  "key12": "26ttng3ykKYqsB7zfn55E6vUBpAs8P3pRoEBXwDmAR8EysAYkJqrXViss9CNtborEspkXPc9B3ert22kjuQqtxhY",
  "key13": "3JUFnp7j4zNt7wD7P2PXfqXVmAaG9vN9MS2fEXcN1J5EXxwZowwn84AyNKrMZy9zo5pQqGP8daiMBHZGewRy6wUd",
  "key14": "21as4JRoRLRrjjJ4YYT9XmgMczkaBWmnKnTDH5UW92uvHBPFmpDW4r5d6tCUEBPks6uF6hrimG7hRQC2pJ2bCpZw",
  "key15": "3r7xYVp3bHHBLLfnSfa3kEJkbKWGuMoHQNvBiftesrbQ7T7nucVuj2c8JpvoomahqfRG1CCZLvEAbyqZ9ZKvUQHq",
  "key16": "dAKSPvz1vi2skThk8RnYJUVtqF55uD3Lq25zyMt2S2oPnE5YmuL6pcWxaEQhf1u7RRvVgu9A3nyfxi7dw45d7rC",
  "key17": "9RXF2QqSx9qxb1XGHN2vFXd3XqLep6obyrkDUFcqVDtaUr1tH8DWy6G2yo5rkoEngWtTahYs8rc6rsBLyqRQUY1",
  "key18": "25sCnDwhUG4JrCcAEuSRQuCDZfK885N3ggXXGtkUmgGrxLjEEsqCSMoFYVZ9zKEMkqp6D1KwvWmR1s3D27SQPExT",
  "key19": "3Pc8sLRwuC28D6Eeoy1CWQh6EgYzgdVjefVTRLSBkW8u9ndwzdPNhBaDAzkrN2CaDn3ty5F1fE3MxRmtMaxyCEMz",
  "key20": "25meixFiTZHbo8tTdShWiHcx9fWHB2gmxMwDKaWvsqQpw6SrGhtan7371tkkFsvEPEvzp8UJ2jPoNV1GvYC5T3Hn",
  "key21": "5uLgqRvC1Azk6TphoDog2jMHdgEtkqTVhPBTky8mYNmo9EcpFKZ3wvHHqMzK7EeraoYyuiL9JCkAjehcQZkJsrFB",
  "key22": "27fVJqsGEb2oXEcj2jTzJvcmxkpSq5WKUNY9tRxg29eWEzgJ8y12qcwoBph8EDd5iFGuvpx1mVmYFc6d5dYkJhPc",
  "key23": "d3PZ8nNchYiAZNSkbSWMvEse1BPJgV3DFmsi55zyj56R3L89T5KDB95RKJRb5CSFsQv8xEMuHm3ubyNPKfgM9aW",
  "key24": "2arNjtmzFaHoShYSE1HuMBXHSsbjTBXR7bqbpfL4aF9ygfVMbYRtgptAdbxN3imFh6k3Snnxppj2C12xs2bSFjBQ",
  "key25": "3AMs75fJaE6SDYNqGH8UZLGdv2xL2jMSDKEETPDj4vQFgKEcqHJDkfU42fh3vWA2G7Mfemsfpahf3ikom6AfWmHz",
  "key26": "3UDRbYBF7mkDFiGck7oRzNJzJML6nsimwKRqcSojVUFKSZc7dv8xfiar1goe2rQxpZmn19FzYkz3ofWeaMX2b438",
  "key27": "31ZzqoHFokWSHGnSPZDGXy1C1JUR9s9vdH9oRykJBZkWwmptFbnV5XmkFiXWRkQDnG88XK5b8P6TrJwfK69ojkJJ"
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
