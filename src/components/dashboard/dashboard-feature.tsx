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
    "4NzZi6ozLBtZzCeB3Dt1WootpTWtbB82J3Y4X8LAUNAQhvzT6xo7MxXbcSpiHkZ3oACVi7PN3Hy8NybArYuNxJMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xrLQdcLGs25RAtU13uGUKiKgexjCDZDpEYXkpsjKe6tEASsUwnLHC3YFSek18VbMavQggoak4TNLta1ePDGPe3y",
  "key1": "5JGU1GH1fkhxPcaBE1a6NX8JSMje64Nbgzsw4tdkmRSLa8mNTkwib4ibk7oxBbgtkFjys8ryqWx8rdUgPUtRXJpn",
  "key2": "56U45z7DeUZfYK4upwzA3rQUEWe2otABghb8F4VgYotizPgxFxRXgERqd1FLkhsqN46LzxmRBxbbAJ1NaWJhHDgC",
  "key3": "5MLRayzPkytAq4Vx7b1WQXSJRxhrMEvGWZRV2UzH1jhdU1ZrGSmdEb6hvEym4e5aAoPkyu63CzSkkQQDoCu9wh2B",
  "key4": "31cqyJMC1L1XoLrzH5uP2LoZEkVREuFfhcpxMntYAGGrnyHvZ7RmDkFEDaXLCzGYChPRKFXaw6aZJZFBT6qYFFJu",
  "key5": "4gX56VoReZjYauByNpApKN8CT3DvTfjB5wBqeEUP9giDru5Q3TSjEoPedzQJmom9tUdC6CKxtWH2NkfUj9WqMU72",
  "key6": "56YqHTSmujvhAZHax9X8kFBu9sv5V6L36ndLM7ZE8ShFkDcfgMKup71ZgBK3dfYkzYWh54fPaWuyC4dmxNU6mAmo",
  "key7": "5o4mFSzeACaoNzGgUBQTZVeedzutUrTmmu25nC8u2RimGtULSmDnxCU9yAQpzfsVfYLeCY82xaNnmKKe7LUnNgqt",
  "key8": "4Et8WwjQP83VqaszJKFkMQ1o1EFtPLMprga1PSaNmBTyCv24N82KUys56b3GoL7WWC8v9rb8NnMnXHQW2pWnKW9y",
  "key9": "3wuLHqX5mRm176Q9Wucoeo6SDnG1i4qqpaiCxdynQ4e2wfamUsye3vgfULoZbwvBZtBQqDYkhPeq8BEhEC4Zzite",
  "key10": "5zKSaND8SvAK5MUh5HnV325w6ytSrtwFA4vVnQhePVGSiwYwTDSvWyE7kCxBKatJAiKSZ5S2GkK2YKUMdwjF6aX6",
  "key11": "2aLH7immsx4M9F38fQYcCvNyN3SFK854Zna6cPN4qWkc7GXE91Unooo8j4p2naThqwF2FerztEY4m3RUPeA8EdXF",
  "key12": "4NmJYb1hQj5UJJduPawkZvx5RQxGx3p4CT34MeA1Ekytj9XuCGu5ioMoq8tKHJHUPeSE4MNeQE1uMAgxJDgyPUVr",
  "key13": "2QJ4Yru4MmLWG57arED5c5teMuSoEgNwxJiRgZnEMFcuUMp611nmt7EVBFq8N9Ts65DTKTDshYJ6ubiewqWyyzJZ",
  "key14": "3XUX6f1zYN9M7Cs7z2bLtSz1e4uZsWwzS7AP3B75FTdswTWWw9Ss9NRVLPcpEuRjG8GG5TeM7F4nVNpuywmgFjov",
  "key15": "4Ju4S4uACxaRiN47Vwc2dg97DKP9yW5eRP8D16C2BD4xPT8L4Nm5xKSodcHNE2aQCw5djEDdE8dZkdLR1Jv7krAq",
  "key16": "4v8ZbTTRuLdC8zZdgqFNvFVUq1E3jKgspVwRJmx3SwaMpxaJaGT3tkEdJQNDhwQ7Xk4EPPFBQFcyKS3HyfgmES9t",
  "key17": "4DVuyu6HgX6rmrXUKKgKAV9FwefTrAh5R5njG1DNjEutkvQHsT4N4bt7nRa7eFRhcXnv8RPYFeUNrnGstFouNf8G",
  "key18": "byonqxr8pc7feJMtZT3D7Cti6Z9UdxEaGnjaMmvfCwQWRyZ96rdxrSCw6t75MtuhwmqL4vEdMcTufQD6L7em2EN",
  "key19": "4rKx8ZZ36GSAJYPMzABnFLZxd8ktqhJyiM9g8jjGSkpTZ8mGLQtfh1aRawAkTQUmCRrPFGmBukM1XdP7gWa56aNy",
  "key20": "5sLDbgTKU45h42jVhibu6zRGs3TfgKkrZgAU9dXJSrngJewHHB6PoMx3PFTcM7TB1Y7BVJQAvrbpfKCNPz6GQUaT",
  "key21": "2wgC2qRKKd9fATVUJwQVTPshnJjRTfvLnpp9f25ATu7LdTvYCnPDRobKzuiY8hqtFQrqNdYLMFr1Fd57fr129kax",
  "key22": "DbiQbkQfu1bziUfFEn1SrEaZ5hXMCDDsRPRyoaQTjZVAnhVxRCTj9h6cC19hrfsDta2mYnymED6Fmsi5Vn67BMo",
  "key23": "2dymvdG5EwzLnV6fz8rMYe4xbhM2GooiRP9UhXnZ8PQ2mf8TW2sRjmX1BPrc4G1hATMBNTbGzp88zPa4MmtQEViQ",
  "key24": "2cmrFutyhDoSkk4AwRCcx5bY9JNGY4rZACjHAc7J7ENt7NeBCGxVWMBA8a1GFQgX6cAoCT3gnTBPHGkTU6qyfuwh",
  "key25": "yWVLx1FBaYA5tRd1dP91pFFY2vCuvdSQhAHqbfQNu86fxsurT9aQZK8HbaMPRdShbBkEd1CLAGiCHckLB3qZKHN",
  "key26": "5cYvZHJpBwq5DsrQzjAh1yZw9paSyVNptwm8KH8TW9UJMJdPZNxxLJhS6DzKF3VD5Pt5iqdjjnst9MRuahRXSFmz",
  "key27": "3b27bGk2SaxZsgKsazuEdjbBKGYWCB8jJTuJDCcevZ7zk1KsoY38vrkSsK3c1h2sp7Y9QSWJ2FoREFZJjcyxe3n",
  "key28": "4k9Eh6UZnYvtcoYGvEAzdzBQ1yFkJ3ZQbLC1zBaMv6kX3VaNAb9QhZMNCAjNGfv1dtFw5ELs1iouaQVejT8DPSWf",
  "key29": "JcyVRCzjgzwuxdEqwZpouFwgTKqHBSAHzx4grKZeW1ptXT5o7FxrYVnfPaBBPC1fPDtJ833nRiqiuxhYy3juLwX",
  "key30": "4duhnr8XXq1WjSYYvTPGAnJJJxGUcDzdp9kbMkfkakYzPxCNEYVxwZBegTSWFVx4rgB9xdHRxpwnFaJNHcD5gybt",
  "key31": "26SVU7bz1PzBNDis8ygZNDpdznUNX84TWmccn14Jv6qBsVo5MHMXKgLq1dy1HusGwr5D5VRHi2Z8gySNngG4ZBeb"
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
