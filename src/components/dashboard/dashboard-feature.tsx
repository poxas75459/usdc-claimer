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
    "4utuijm63FvjLdtAWfoZ8LRLgwzG6kFhz5cqjribGmyCd3fgvbrkvGCCp8XLMMHddzir4zqx4Ss69zjGHFU9oKMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57YMhwCfAQ8VyyNiQ7eZxC3ngeiCQ9Ca6Y8G6zbHoYVDtixBRnVVgZD7AmDuiUucxhiHSA97CC7syHYzS15hRRGr",
  "key1": "5oUBZgi5vZUn8nxHN6GPhe1XbWCpu7iBACQrVL6jhm5tCHX71aTW5MSVra6u3z6NxqV5PecesNtkYWyuUsdYBxVG",
  "key2": "4soPGc6yuKFk2MTus4kt3tsjyCir3TrFp9ckVq8KLcgoyaxDPP8btyvAxMUn6B7vRYyZVZDsBrWhzijRegkiKjTa",
  "key3": "2XQGwhYJHkfbtUkqJG4TZwvPDnDxFV9tyFotSTxiBbxRt1o937eVkyA2QDkedWKgHBcMmtRDtkBRCVWJBA7MkWk9",
  "key4": "4wtwAux4cZZxudshpM2RhM9DnCSW2gENjioprf2H8kBJPy8fFw6vVwEDkvtt1rNLpstqXpbZGmDCsTKjS8Z8xQG",
  "key5": "4obgJpjZeErci5DxvSt2uCYvPkfW5WSHU4AgVFuPUBdgQt4Kb2v5hYbHWY2EWPexKov3qvyh8PmaGB2QaFAibeB8",
  "key6": "2oPAccQbeYZCq1xFcEGq7VjFVs4ZFouiwBFVMqGsdoX95Q24iLbE53WStNvJS1PvvpkdUvdZcMjd7gETdmjnYRAh",
  "key7": "2PQn1GGwpWsaxapubdt2MpvxUUc1BeeeHkNxJHprsWKBdFAMcWrbtTZyJGmaPCE6ombBxY6TGTzUUvn5sZ4GT5Qx",
  "key8": "5vkARGZsiAAegew3uwT8YJ1pyFKz4o2YvvMWK5YB3w5oCUgZxbbvxoyGtrnJNyEtN9M8wwGbNaXkMyeWu3SfoJfm",
  "key9": "4wJJXecpzY7JBK9KtkfiFh6TGaQZN4mehvEUzUzuMHzoviDoEiJTs4yb9bPqGHZ7LT6wEg8FbkMxRGcgGmfXGqqu",
  "key10": "31BsiVWpDwQJ4N2ftTqSrY2w1MtFXGBCCucxKuzwNx6FK2YBsnF8syXnPyw6qcRyk1qBEjJy2V6F1uYYcXx8DmVS",
  "key11": "3pqLyfb6nnkMwrgUWS8soK8AbXjeTCodDiwLbc3LABsBzoZvWpwp2J2nxXufbWiCPQ768HKJHhjwCmkrcHGwWwFo",
  "key12": "3qDXDXsmyCd4hiFfYdfAkjngdKbGkkuttyvKkAUsU3Zft49Hhyuf3vEenhos4VMy5Urs5kkkNW5T6sSwaMpR9Wcb",
  "key13": "24YwApCnsVWKoUYpbFfpJGJPBwYdp7m2sjKjH4QRsh5q7ZpzQ2gfn5gcyaJo576cRpZSvKbM4yD36VbtqYHyJwsu",
  "key14": "2xJQk3oHHHGt7MWBFoMZdCKfjT4f1vCjZ7XFSdSgoqG4U1fZQNGuAorTEh3uAvMFAnM2nJA9tF5nYwBwm4H3UvH4",
  "key15": "4BrmRVRMNZkZjMB1dwsh12xryz5knnf1ycjJbsm8MHYKHg95YMU5TYLWpf5HKqpC5WNr5dKW1wJRFg2ZwDwJ7QTN",
  "key16": "QKGr6q9nuiuPmAn1zZUV9uLa1QE1oABep93SnS7rxoz6aaK42ibJEG2qQ8KqJ1TEmXisMpnEgSN45LMqYc9xC7F",
  "key17": "Tmw9PKErywgkiYJuNCrcdrc2mwGbaVp8K9JECwfLYwSCQMrsrULjnWSa5MtfHZS5h64nk1oFLrHiRjBAsD4K2Y5",
  "key18": "61gqAnJBocsHY2LzuGyqzXTYqSqAFtAy8GvvdTbLpHvzMJiBDBqBPr6ucShSYaGn2AdhPGQDRJ5Gxp9726zm8mEv",
  "key19": "2FxpAuU9SaycCX33hP5PodsKeqaTa6dz8AimuxBdPJsAo7EvTp7oeW4rxo9V8ppKB8RrR5iFaC14dH98SyBLojZS",
  "key20": "2FYmBDAwPvunH5Nb6wNktydSppaJqE5ipFJLMGiTfVgC26vj91bsHjUSmeiGurKZQKYjQoSjA8swqjbJJtAsDTLY",
  "key21": "2a73aVCXCxYj7jGV8H7iMFjbC49Lo5fawhkZe59FtoGwediYmnFnvGV7Wb9Wq6sbzprCLrQHj2fdtbdxhfZfXyq6",
  "key22": "8ePkgCvyTsNBXeLi83wrAjLDcyVtdRz6grcHGMwYX4gEWh9U71uSm3mBvr8KVyk5Np7djwJ8JCfbd6oQNGJFHi4",
  "key23": "2UyAdH7EDbgv3BnPvQLfsKSNYfbtri67MXUF69FLTrvrrhTFmctPeMzWtUjW6hcBfWNDYvhETzWrcvieLyhLQJNn",
  "key24": "4PxwicrgCy1Ld8KBb9c9zZWF8niiKurYMtptN5FnXdBvtTdtNbhFAbGdkE6eNKoGs8vRk5GBvGz2zta7KveiWc1F",
  "key25": "2k6aJb2AMr6U4E9rtA1zMErdompUGe7k5vx7uXdAwFpLGbvVCGrYwskPhsPxnf5veHfwBqqYQcaaJG1qLqHQAMfA",
  "key26": "XZxNgZ9Sda1XmniNUPFVEcMEy4LJwdufPTevE4iPGBd2QYDbCTiHViabYzuiVBr9ijTSPUxyMnrsxyz7UsNBweH",
  "key27": "4NqA9HaCwQyJgFrTnPdHPbm28Q8R8iM49o4UZAvd9gVhTHA7YqspHdudueacTixnEpAGVd1NmZvH2jcRHUAyNWaz",
  "key28": "4z7NHo9BXpnJtygGxnamP3qxDgrcy8wfmGHxz98B1qtM5BmSqrrTcgp1ezVrFhy5LM1omhjWoBB4gi5FSmoGzvrr",
  "key29": "k7vNT7FowVGrBAUh4kfJ8abnEDzGQwb4gM3GGVtz2tLxd2e6WzPybgGooPkjDdXtPCWtqbn7ejWMaQTctRKc73M",
  "key30": "2uKbDU6TSWeWYyBnzt9h2STrYGSq9TrGkBw4tJY8UtGzUyQ4b9AjNSfz7vutZLUNDc94n3mJm8KXG6iqCD1tGu5w",
  "key31": "2XDMFt6ERudqjBYx3cu468HjJXEdpDdgxeQsFqc5MbnN3WPmhiTEMsJyLFPKCDuSAoDMzp1TiBCCXnT3cBfXDeSW",
  "key32": "3mj8Vrx8EMuq5fnveRwjLivyWfSNUH6aYsp2hjZhpckVz8L8fzza1WRxvp7Ar7BZJrcrnbjKQFbXuhxDNk7V5z4h",
  "key33": "bE5mDzGnQNrGbU67MWUMYgDxSXeozVbZvuEV81Pz7sg2Q44Liy4patKiKWM38VkfjURaxwqwHKsaRabqKWv6fFL",
  "key34": "b9rZ4XiEFZfs3bPXN3yKfAi9QkS9cd2tK7zv32aeWbKKkR4TmArBrVFknyuU3ANaZ5tWoeQBSCFwVfWPz2CF4JM",
  "key35": "4VTtWdBaNT5YS2Mpd6W8E6rbnntQr73E7vVwu3Jk3g3i3EHe9vSVk8i8UvvEQp4kpptQfFMB4xqMUNZvPEtHKS26",
  "key36": "2Q5HxpiZKPE74UnvgFBwwAdpWbx6dp7XAagrkPWCcEPEMvUKrSbx7hWZDrKnyt9SEbZkETF3zxsw5eQ56j7PmXgj"
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
