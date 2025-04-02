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
    "gCNZo6KxY1aMGKkJfHaByAv7SC5ZChB5sADQDvfsxFvyqtDhU6m561eBmYjhWBEif8WrUSS67DgU533vmxoJyjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yBkh9MvuQfBtacjyeQ7X8D8CE5qHdBtodQeDrvkszsyozfSh9e1GgxHPuVAv8DEDGCuB2xsdRQp25WSaBcWCt39",
  "key1": "2dUVsTusc4wANNDd7so5or5yHXptt6XAYAcJiv6bCkHW53tmNKDHdZ3rTV7PV8Yn1bbJofD71CVwKTndMMKE7ghW",
  "key2": "67k3P95kEuAGA6rvcufCTjNNmSdW5HsYDh4AjWn9XTY7SvTzTJXeTDeVFsREfDXyoJDuUZT4bWnRCRZkLvhg4daL",
  "key3": "4Npm8kNMZVHtaxsYB24RVFcuUE3cQvoTkPDxoCQiuEyqYaY3tt4VVhwVzzNTmPM7SLCbWyDs2V9JgxYVYwF6GPDf",
  "key4": "2RfyLt1mDcvTYV1hyWuKGSTp2KprFaXXN6TS3QtmKk3joqzxzE6nn7sTXjk8Z9FoRSVFEsYQnfgEtN5sLQFG7vwt",
  "key5": "4j1PR5wkU21ZJfqx3CYFZw91XyHzxHS9RwoxgpHxr4sg9FUwkxjsRB3AvhY6AfTdUJbYgfdZ6LR8FhUwXsbCquSr",
  "key6": "5RzVt1i5ymjTn65yWX8zrJ36L5KVmaqvUZkaFKm7TttqMGAFE9RzcHSjBHSDodMJAc5T6FmEbRAe5dyhCoFKRF4X",
  "key7": "qPdyyUwfTE1MUapzwR8vz8X7u8TW75smK1Ln8xT6Rd6yJr6qVYPiJ6XbwSZQ6nKhkMG13APtoSNwugAXjmqzyD9",
  "key8": "5H2Ki3LCEbgBJcoVEjUHz5kGaqcjtXF1Nh8kUsBYiqWE4i2UU36TS5Y46AHXawqDSC6ovN4yocJ7UryUrJhHfxG2",
  "key9": "3zw5WszdQstwQzisMJQ2RimTQjhMZvSikjwKacHuD2c9wbu1Ymr58d7qAGxkasR6ZCFZt75ztsB5WUodAXW1BFVP",
  "key10": "5L5FqvPU8kLFz6dXNV7KacXzjzAgX3ZSJ2wyBTKdoKRZ2E3G8FPH3Wc4fY2hb1CYpxZssva2s62jxgV9NsekJg1D",
  "key11": "RPBDvYzEXd4ZHnfd9YW3ECNVarZjWUABbKH8ebo3cqizmHMCgxdjF8bJfTeHxLboSkZvgzuyY8bgj2sV7eD8ant",
  "key12": "53XhpaKq5mM68CtfJqdiExcG8eUBD89hYMeK4mofpCg8sWBgJLudd85qabuheVziqbVfafHtqZkMzEFzQKuWRdYA",
  "key13": "4LYkjUvWvZkyBH7gW2MDzGbiQMAi8fDw3HMsRH5sjakREgin2kZkGubadGeG86zm5b2a7ZdmEUxemWfd7W165dJV",
  "key14": "37xbg2XJBBFcEibahKKvhT7K5rN3XYXFhxQMH2KdnxDEQZWA2ssjnrdvrH9wcTWWGknmu2inwmC7axZSEincvQ7S",
  "key15": "5mYCnapmP8WGhmrPzLjrZ63WCjZHb75EQiCQk4TsDyB9FViCzAeGyhYkZ3rqFmvFEbVcdfLNbw1Ki8ss9273oWFc",
  "key16": "MGifZY3CGeubxnJUTxeAov5H5Fc4EtXi4zwVtSFnynn3pB88sHnq5k18VJgj1L6iQNbCGbTwViqKfnT2ov5YfpH",
  "key17": "4ny45NgihFaw22unkobd8j56q4i4HrwYNF1uvnUXyci6KNgYURYDFn5VnKJLjMtfWWjEHX9uAV1axUQJM8PAMcYy",
  "key18": "4T56HyYFF22ejaUF8q5S3yLGanquTYZSgJPyF6uaZJKa7vLLfVBRvHN56VGqZqh5jJHtPoqif9XRZSCnfWMPt9Bd",
  "key19": "2iFQvizKiE9bGM7CsgebY3Vc856PGnRQ25f5EKvNx72aYuV7SMRxxbCyHr9xJoJXU4Sx7hGWRPYdnqUqsh5XBSyK",
  "key20": "5WKvdw9HAedY7zxvrRTQE5PwcwP1fKqBHnfvRbPZ74TjUQFRTXnMpDJitX52jJe8DTyzL8DmMYEGB5Up5DUmtZZw",
  "key21": "5Gk9eXPicarqfAZ1puAYSqB6oFLRreE7PzhWJQP7BugXQga4sapWrUvhAL3KmgDyG2rD2fKQSPGdT3e4wBVCiRDk",
  "key22": "4oLKbdixFeeiVKjhD2GyBrLfJjztPqpJgqbWJae93PidkezqKB7f5vSGhieZgVQ62uMaHcyETQHEEEgp2sFeQbj",
  "key23": "X2hGHfD1vyoRPDCDTUWwBE45ethBz8tmMv6wtYrwTUqWAtpQoABWSCiWUaW1k54PPGzDvENuT5m7gk4qdsu2JnU",
  "key24": "JpgAMRhERaAg7iuvmTXLxYgcE6gTUjr8LGsZhLMmKegjWTpd4GpG6P9RYZXeX4oh6h9JsYcSYHRQadN1kRJLsHx",
  "key25": "Grs4T7NnqgVQMEujNf8hStbkTJgkGfjWtqm5zjmdzrfgGRN9ekQZB22GZ6Z8RsPFHHj6nSc4UqPaBUJiGT3ajuU",
  "key26": "2ufxhhu54x5Bx3ca9bpvJN5QBEDPXAYLfJ9P262fZcPzNbnJqBKfHB8mTSLLQ5kXiAwwwufVwKGYqzqEq5hJvTUP",
  "key27": "5dAeR7BcRjqhB2zd2nNbD72Eg5kRHAxfSvrxKEfcxtgL624C74feHfuuhqFRghHSdJ1L3JxEQ66a953aEuqNykNK",
  "key28": "NKLzJhbMtEXDGJ441fvqDniKas2bHq7AmoqrN1Dpwysx71EUyuj5WeipxUKVMr4WjcZqvKU4J77MC4fSTYmdwQh",
  "key29": "2D3k1E1bMZMMSdGSduHsWeNbwksMfPhns5Vjyj1PsPMC6b4Tybi2HBJdwiPvw4PuZWDDaTutzxzdzX4QBvyUMt27",
  "key30": "h185Ab86a7NreqvfCf4JgRZ4CBzdirCyX8DbyCN5s6rhRwWxkWGsKvKiYsea6Uhse9mPSDzXLqX6h9jBWcA1hBz",
  "key31": "5Mu4AUXKbLUE3AyX7D1c5J7VHCaQ81rqXA9ZZakcfEPKhRLgCakLSdrEuNDVcfD3CcM615d911LkpYqifUysyVQJ",
  "key32": "Hwkg296y7hdy1uZYdpijzVpxtNzwUiJVpMirJPY62gnFMP2oyZ1btHYigapLLqYqMknyp2fTdVf4kAinETygZXn",
  "key33": "2BSRrgYCDWhZPVW3BVma1djsuy7Jb9F5At4kSVPm1HGRkfnxVTiVEjftLjjeZeJHd128jfReSmgVsUHF4gaaQdJC",
  "key34": "3iiUoL6FDf23i4CzsJH1cTY1oafEP8eKn6GFHd2JauboxbbGuMTBKa98PBi3NDWZHh9w5C8C5CWoJq4pg9LywMMr",
  "key35": "45iCVH5zpE8jQvkVuF9P1BP7fgNZhREjmsz7UjhchvFMDaZzmqhspAfa9DyRwkiS8eeWbPawt6YQD4EZNQAHzhnF",
  "key36": "32Cgg9J7iS9iEx1Y6d5CT4gevct5bFA6ht5xYnMTAYoAfH9W3mopfbaReqXy8cZjGGBodnQM7ndqgrq6BffVP9M1",
  "key37": "2LSbDpXEDM7rGwjz4oWA1jMUdz62V72hPcynQGNwhf28CKeHp7qVbZXXbovH3L9oqZYJich4WMFNjsL1cMQoAPU6",
  "key38": "3SzY5d5VDii1JZfcFfxu1NPzu9wd9DZTAm3pWLYi7ZQFnyqspVhM16n1e9nyFoke2AV6uoxN5ReApeZ369Xdi3G5",
  "key39": "3BXqVXF1WWcjT1hESEAqp9CEjyF3cCVJpv2PD2tWFSePENRMRhnxCvtCtxjqze8AEgey1Hc7QctCZpDvhLaNoZhQ"
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
