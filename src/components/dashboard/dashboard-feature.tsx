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
    "5VCK32oCeKDcwU1UVvZf9nGSiBBQWBx7AwXKTxRu3EC3PKYWcq67iErQboSWyvTkXXQfBEU2eiZEjooei6ifDZnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qQvPD4SJHqhdNEcxttgu75ESZHqsRLj8pGHivSrHuCCK1aQoqnAriRFttSUrxVdvx8KA4THDTcoCfL4EqEnuJeN",
  "key1": "4hLiRre6TbNzbmpxYxQLrXH28Cux6KmVfcBczTmJhskHQUTRurdvf8KVadDsBkjtwXNKnKCg6GoWEt5ikykmZmPx",
  "key2": "2ZWeDTjpz4FL8BVivdyERRB4Ji2Sjm6mqD5qL3C2BidxA5zb9pYkcjSJpmREyrbQCiDL7d3LipRPLmeXb7SXpP7o",
  "key3": "4RGgWdhdWwJCj2TPiVwiza2uGr2eyjCSJWn3r2Y42aTYSarGViZy3xFq1PE94uWrJ9jbQ6Xe55vkSGh8MQvNbBQv",
  "key4": "2G5zqQezxqnbs91yNixMBja3YmAdWWPYhxyshmF4jUEgevByH6a2zYtnWcgKsNbDX7Znun1mnvWnfpj84BrU7k2R",
  "key5": "2rpZYjCT8cGiCKxmQGfr8U2AmRVv13CzeoDS1yPskAsyCSptkZmKe7h3zCmqaPsthknJAeSzjtCdE5Zv5Lo4V6zL",
  "key6": "3FPZvbZdfy8mK6bhBsaPEtqWUBsYATp8pxW4Fyf52vZD79DPrKRuwPXKYwJTXvj35WNiZfYcQyh8zjBdh7xYag5A",
  "key7": "38igNN5y6aqrLDJNBzQBHBPHsRNtUEdzK6UZCLHa8wpVnquHXB7dtusguPxpCJDVh349h77p679DAg2vNYMsnEok",
  "key8": "3q3oQ9D1WdLtx4eKSBxWtHrSiz9GwRDQZQD4kok3MysrFKMbkEe1EbTPg2zeoAtwPDrL5Ckpx8EzEHHdYS5vZ8Mq",
  "key9": "5AAJHMFuhPVV3nQ3cG8H7AAoNQH8iMNHncd4PzoPjT6dacKGFN49EVNXTeioJTZ4TxTvELPLYPd12Awo9ocsQTEm",
  "key10": "5Y4tuCVwTSFDy7hgLpRAhHKvnXGtJsAyksmYZtvmoFsLpkwTfAzP8xi6urFCN31ALU5cADnow8ut8PTFQjmgS9nb",
  "key11": "J9mHBKmvXJJACgKCpAQBfanPMb76Hw8CebWWbas1tNHvumypfdubWvH6vdBEAhMiYsuKGSDmz5uAXuRkB4wTeQD",
  "key12": "5XUipBRkAeEE1c6yB4ug6MTJ8S2uFvVMknwZKhFzdKSXTVFzpvBz9EhSFEBvEYVbmVtB4ygEsDeiMAjAGHDG5TCS",
  "key13": "2LftUGz6CpvtUcUyPQZPxjKB9GUaxt7SrW5fcBxZAVM5uBCS7BbdqZxU8hNDT7a1vrz8JcJqrbbQPTAVA1niy65H",
  "key14": "4keX1ZJpEzfQSMemkTD5ryZ7LYDeNKKzcGgFmacygmys735298ypa1exzqkc7suD9hVen338Q9rSS7ASq1Yk3ufH",
  "key15": "MzCnS5Z1SarLiMqPiACGtaP6C5V39Yx3iSJKXM3MSVkwvaaFs8bBRMDRPt9bb4i86S89LTJtZVK2fUPf7jrZyKq",
  "key16": "5zZmcDt2oxAV7Xhb1XLHfuzqrPLF5Sjdr3y9rbXhsJ5k9Rqthp7UKD2zioEqR45QSdDDG5L4YPohjpDhpzRfpw5Z",
  "key17": "qEuUjXBXdqypULqKFwSgFKSF6ePc6i3vqryxUgi6cJs5dxszgTbejDMnRw2Yi6oczz553JLDRSxb9NiVi7Dy8dP",
  "key18": "3sBb9M12WQ6cNsBS1RETq7KLEkEuHnb6cR1Unv8hngGEh4gxczYfdq2LCoRxegztZofK9Y1kJPNc3jmoG7cGDjUc",
  "key19": "2x2h3LJZPfqTqdaddvErVTgMWB88fxzVt3rtku1ig5D5HreHjUPCz6YavpheiYzH9fTLLEoijYLCsxgPeDkdgNzs",
  "key20": "5LRqQz9Nidv58Qyk8xrL9rEbHj43w8gJVnSLicLoAmrmKUa5Npomdak55U19yMgX1rR5yQwj1hFvRtiP8RywCuNB",
  "key21": "X29VWqvLTsT6iW3SHpNhhQbXFLemuK26n1RTUsxaXErpfqcjGTaszVLPRR6tKHMw28DmRW1Neqre3VWsz7TkLNa",
  "key22": "5jrJ2AmnxNee1BxfWLJiZK1D45UP4dK94NKXz4Ny2bLBi1962S83iwZWam8EoAPUSZxaiSSUkbnoZZqBCpkkDLcc",
  "key23": "3ijLws5FFHMSDtkrRELw35EcQrnAgN5ySvMocd7DK7skbwJp3J9NN26FMw1hJHiFnP8ZvSm47v2Mt9nbb4k3ZHKh",
  "key24": "2sfEcvh6tJhXPHTECjV8g8Nm5ZwmDmzsfDFy7of6n6yjVrZre7MRLyzuxcVXEMPrMbksdM78ytYK9ncarPFjNpfP",
  "key25": "38yKwLAoBvKVKbyqe4KEk4gzLx6RmUabJ4b8DsLRYe2iW7Ttw7CVuvh3hm1CAYy9Pz3MoD4raqGXVJj7ro4ZTSpT",
  "key26": "2XbRCZYQ9ASokaYjT3FjrxsDc3ANhjEuLVeEyA8Yqc5JPoCjsNYmiyBuCjjXoVJoCQmzyXfzqK1v7U72bsPzvnx8",
  "key27": "58rT5kkYuWpK5VDaCKY4zEYN6NxEhArDBCT6kFRNtQgCfpdUJ5zfuVnRt1qGZv9ML7uHQCwT4TR5wFEBvYmNLXY5",
  "key28": "3YXcxmLLFMxPyjCcCiARHEy8dL2xccEXKa53hxE3PvPfgeJndteYZLDDXwyX3hovHCk6wNRkHteLFP5ajiRyzAie",
  "key29": "KY83chmQ9EahZAWhBWTTs8qw1TGC9udzVrMTCXjeuqo9Ncatgx1D67EjKSC8wmFDXoqTwb1d3SSEFW7kGUksEwM",
  "key30": "5q8wzcpEtJM9xzUYMYzMxhjXSryiRGHaGz6toVLsAB9nF9qppxrevuSTEGmtxsw5fprePGuckZboePeGSQ1w5Ry6",
  "key31": "4rcznzyrZ7wWkdw9taj2ZaFEhYReBoteziPeNUvA42zirN9GeExK3oJYoRA5rWhzt62AS6Xz7aKPhsvihKntFvMM",
  "key32": "4hhZc4wrWHUXCUouPFhc5W7aJLU7fZ9Zfn3j8RYpZqJQdmmaE4AmuBXHFuvQdkyLXJNG4Twv7HhHBF3XXk61RWHz",
  "key33": "VoeLyTyWeTDLQXUyE3fYcVjmn9DH7qw7XaZErZfmXgTWgEnkQ3Mtdwja8SNY8EW6KaoUmMpBKVkYk5uNGdSYVBQ",
  "key34": "Pk8zT2xTEhAzV8v7q2gzRUGruBUW6icubJPQuzEYv1SNKsDtLCvJ2TpjeS2y2wpVM1L2UuoL9w9uDNqM6FxtozX"
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
