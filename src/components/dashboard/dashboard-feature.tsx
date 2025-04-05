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
    "3tpcHAJHsXKEex9jWukqQyTW8A615YUdiGPL6DZy7qZaAn8KvM8u5n6LQRpCYR2izf9NmaSww4pq8YaB75X44KTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67UMn38oj33NGKZTP4DSZj4EjkudwLDYwiKzL1ThDEeutpQkoag7wqVm2N7bZT5reWQ83rN4mSW3wG3WmRyk9jCT",
  "key1": "hGpvMJSgPTEquKTgLV8aQNPPqZBZshBL8QrvRA6N6SyY3wyaceJTXnhGGZGmM7hzzWUDXnQiB62TbfwasjbVWyy",
  "key2": "rX6xXxDcj473ZCmWWjRQakxiXgarVb3G9BNFHPt1CFLwX2xDLFVyev1sJfc7bUegpjuejxCbKTEFSGhAcCWvH5z",
  "key3": "mrkan867YFvCo21rZzuSroHQUKjnW1iXkJkhUiL7jBNSCxdvFZCfPCNPbnoCCnFGQRdyqXQNGbBGWLvjfjQxMCx",
  "key4": "5mANEk7HprYZ8vEwf8DaD7otQxK4Azdqvr6XLHEyTh3po6vfoyZ9XSXzcTBinPXvQWCoyDHA1HnD3ziKVxwAEdBU",
  "key5": "4DgKMjLDyeYZnaounPy58KvXnvuevVG69JzjThQRo8fycGtzwy9ThEQTnDBek9zYe4YNNj8w53qMkHtP8VUAW4CS",
  "key6": "aEVjN51VsUiU16ZMKNEzpcyKKMUTGjFAb2Yyk5n8VEyJ6nVCmUeD6NXeW8Cxg7XX98aNxFcL3JW8Aq2UcBjuuug",
  "key7": "4diwkAR7crw1bh8xQAdn15JLaXmxwwcDDGwMbSQPmKusbMKEbsrPtHJgqpQ3Q947ozJHMv75GK87R3Evq7Dm2Znq",
  "key8": "5pzhxmrCDTv3uoBBztbBRqHq4THrhdkmNdVK9Hqhf17FdTakwf76MTX449ZknJkNEWLvafEM3XmkJenkKiev1fTG",
  "key9": "67HHfYXsnn8sPKdWoMvg5oPBFZadjsr24qnFFfuqcdDAxFmMXKWsHBkwM5SyfsaRDV8RbCpQbiiDL5C3BhKnmrYm",
  "key10": "5pPPZfzrWjheDthjKhQwCnkxnMRyEXdSLEhDhVx6zVPDzsS4FEQzyJwfSoeZeGnvMbxRJwKDUzYKYLfQo7hDFebJ",
  "key11": "4TkPbNc69PAbJWpxs1BWrgxqrPMJhiQfyTtggsgvUpyMs4D9BaMqwb8twyKhfKfDVMfTmdwQcDuoCPuVFi9trciw",
  "key12": "37EuiRzrNeCcmydHLnW6cBnsHzBqdhNj9TpvG2EyZe5z7BSD4MwSXcD3kBSjcQuGxUcsnY6NtrAt5EyMCFr3XAtf",
  "key13": "4MwQFWz8ASbxYWnbwUa9AyTpee6As4k4sdZJCbnjjWvUmS6DEE9hsCxEz9TEkToAkqNMhqJgxwzkxa76P6ZiYte3",
  "key14": "5SVRfHfrUo5sdNifxPng3SJSa3SA2b1AVLHpVQB5gLbBCpPJzmBv7EovvFykczB6uhFEfNYA8UfvDokwc8Wwsmt1",
  "key15": "m9dUKGb6gRGfMBemVGZBojzUUwqCRvCfmNiGbc2hSRukCW3rtf153MQSCDmWbFGByNYuKXzH9itndrWsmhZLK5T",
  "key16": "3azABTnovCLRHZMHfNDS9ZKweHJBMuaFJMJAhpkk4pMVXchqcBpSpfZRL6noNPLi4bE3VEAGGwx5dAXEnu5PZj3b",
  "key17": "4cK1Mt9ei6Y7qQ5N2oAr4jQobm9PHTMxodoKGJdgspLzy4SQDEnAuSoRyjhg1HGMsHd2QtY4j6ZetwEEGKRhM2pD",
  "key18": "4dxkYdBV7GyjYjwxzXZBCHRGYomvTHumFNJohBZ5YCghYGDKLEZRRwpQBFQ3cPoxsjK4DmnSkVBhHGbcDsbBme1Q",
  "key19": "4GMujMfEPdfXYTQR2WYZ728vSV78o9g5SY5HFYyo4jSFHa7AgnyqkPUXdgS9dH6KnEVq4Wq9CDGHRnxJSPPKrWc2",
  "key20": "zYLa5YcEKksDNK69G51C4ugWvnBBRnS7xEiCGmMB7ooD34TkNowSY55EuU519S1Edx73M8u6XwCs9bR5Ls4gEik",
  "key21": "5jUJAgmkiwZoCT3eRXyBdCMmbVZHAGkenGmDRtLmXP2LnS6AaadTVrEMBCwrPUgRHSHLZGXkux34TPifM9w7WfYg",
  "key22": "2Br3rfvrP6FGYtqcoaeRrSzwUGxhdohf3iDEMtpwWrycs8269oNPmyzaUwhnUpg68jc3wpQzBDrf346gdCJdK1DR",
  "key23": "4724evKu9W5sv718fLf2trJSZsRrDbEnGYwm5v2ptBLnXAhWar3qpDy7Rvzp1b686VwsyP3zy29QW7aHATTr6Qv2",
  "key24": "2SkNiVZ1ucr1F5UjLLJEXYiZJvVfMtWWRVyPAffjMy7YSEuaYTLQjW8Ebgp7aXfNWwyT3Vgfi7pNst2bv8NvyggH",
  "key25": "PKSX33vrwwHfUhCqL737LhRwgz5uFoNEiEPUZRFQ5zUoYcfF4VQmp8NiVp4XQdNWUn5o1J7FCnPVTYxQvMd2g4V",
  "key26": "KE3pdvL5A5Xbnritt85ipgAzNtWsfHFcNQ3nZMatRc5gCLQyqE6aJysp8wDEyVLERvobqUEBzcjFr1StEKb4DbQ",
  "key27": "5GNDi7tfayuxBLdLzFJGWXh24Y7E1vcBGQCEVMujKAH4WnmfiuqmLWUzRXdtoUVNgzgSEAZNa47RTrPWoJvk8WYH",
  "key28": "Gfe6HgAJBdgcC7Nif1p7gUEsZ8jMzb1NpXCpBb9va4BiujDP9azmxVdjTkd65jkYEakoP72c6qCMQrHo8sh5Gi9",
  "key29": "4azCEK5ihES6DucBJyDAccjnCJ1ifo61UaVawsHWAypLjaLBB2iQahHfCoXHZrz5qkA8EVe59HdLcymAqHYBSutw",
  "key30": "46DzYtNGUdzkuRkdrCjnpd1wWRSBwjDJ1BRdisApeq24BYe1c7sbV4dN79Yae24riMCPXQcEmZV155pQmPEvt48K",
  "key31": "5ZZvsMKsYv8rzfd7jdM5NgCAiEL4Bssh7nuq43LeTsL36udRT3Q5dUcJFKx5yGyCP5r2Sa6qGfLYsnudoiCcV5Zv",
  "key32": "2Fn7H2nga1UN7eAPKkNCnkmJSRAHiv3mD6wqCogMvjCPFRCoFdH5CXvX2W8H3RJf9QFPenkmcCJX2R5w4z23eD4t",
  "key33": "28uDpFJM5V6fvxiTSLq6rowqyyxgJX5Z2T55HkKfTB2vmNyn7SoPK7jCXbc6bcKwLc7xZY7vASDVaXtqfQ4fKPnr",
  "key34": "3Pf5wUn24L33ozTZ7kbLkWkXpVSXVGnWACB18htGZnyMvfwZ517ebtarD8tBA3mBqjWpQsVLYrbsoRMXrTfdv27C",
  "key35": "3x6sXsHEDRNghnwxZv13yCujXC77yHNtX85rsRgXRKYioYEmWS2G1v64jyRymZGwi27yTG2mwDkgMFGu6E9NhUcF",
  "key36": "2PG5L6VUEmNnmsPwmmkUycTpCdQbcBv999SdN9S2uffRwjFz229py5QAq86AWon62WCLUMrusoXXZnAYZvuRNktF",
  "key37": "4hAb5zLXt2cZNjZ3VsUgtn92RBnrcMAtJ6aSuAhapLe5dbJtDdu2hCU1nqbpH1BwZPJubqJsYptvZUTVrj1dNKbc",
  "key38": "3zHGfEGRDDktrJppV2gohiEcBv6QNE4NxsX3nAY46HCRFB7xS7yAsGcXyXorpuVNxV9pDnCYUqx9MAGhuR26T6Qd",
  "key39": "nSmNMSS1Zft6qEHvBVkjbw8CXu2ygkBhcNHV98vwWNZxzn9RtmTwYryb5HnXBBoKxHA6aSk7wCh31R99Lcj8f8P",
  "key40": "3DZb4zdffwUym324RX2bKgsEsnDLxoc9HNcSEMT8TbU4U7iwH4vqtNDc3ksHGw5e95VfYCcgZQiDdbVhT2trq6DC"
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
