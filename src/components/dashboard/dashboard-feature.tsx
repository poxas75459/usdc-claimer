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
    "2xHY9kkE6WfAk7pvMTCEctSQVTLP61yxsB7AB3hGYUZvtFTk8HuM7Y7AKy1sE9mawPZuxBZESNMAkbAGEUw3fktC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q8p3FLDQmFRBD5gMRp932ZQaygko1CpVjMyjc573vnvw51gwdLbda92CoDwkdYefNAkxfhRXN1srjwp7hGU3QDN",
  "key1": "2fDdjwvMqT2P3ZgZ6v4T4J1PtGsv9Kjm4aHdEVWCBiAKeZrWzWaANo2gRUTvSjJkifxKZW4RFFTp3mN6ZvWrzDgE",
  "key2": "z3LXGpx7PCed6Da4vJsUG7vHiNMQbuV3iqE7FrkjnPR7THjUWUSKLiMmPyx6Jt35dYbLRX8HETxJ2A5DTJAqEpa",
  "key3": "3RFaBhrdcNd1PH3tG2foWMGUAXyFKM8A8qiHbZLJEG2xPLU5qqSacDqhiZnf7ePm5fnRLshDovE5psiozSpE29ww",
  "key4": "5rvSNbBbZzVUBdk75gaQiPuz3kJs4oTueZig45unLcppTn84srKPCcet6zQMgwFFZkdbfCFrywkda3YJiXu7nFuH",
  "key5": "41ULUzUqq2DsZSUVj7eT8S7da3xxYU7hUkWVeu6CCQGpbDzrPNonf6gWdtY5esvV6aDh31aSDRtEgonMBRgNTVq7",
  "key6": "5uQpbkiLFXiP7BJGtiuCbShMXN1qMK68vmkALTuRZY7EDJW2NVPMaYbuWn7iVfZZa9E8Bq91y8XPGTzUKykMt5B8",
  "key7": "Zs3WttP389zYaZoZhnDSC6vXZv3tbJQxBA4tDnc35sidHQPpCT139JTtT5swBN6VeV5myitNbf5B6gR4qcD8pY1",
  "key8": "2dqKCePc4hdue1aL2DxoEg91T6NmPnTvE69Sg7UAaWw7SrbznbLeXBc3f87hcWAuJY7HadAy8nRe1P2CVHCLzzv",
  "key9": "5uWcNtU3BvXfZCThh66tbs6w2JFKvvZdS5z13ewkLntkEvqkC9hDCzSf3rddi1CGFukSvq8oWot7MARRDJbQhJQ7",
  "key10": "2MuBPWTxSLpBDFy5TXMCDVRHa1GsjTJ9K8L8f9rdC2iNZRLnBosgtMoVyfr6w6WSQeCcecATWyvHQziLZLf6V5Ht",
  "key11": "4566nvZZtfWpWCqYa1iLM3FkyQVNVvZKTthbrXL8kKqkmA4MbchLovL95dG2h6j6NwMC5APn5ycjWfwQtjD4WjRa",
  "key12": "5GPfkxXYLC7SpnTNteyc8U3w68tm5MAiYipUHFy1nNRDfDmkY5cLA6bTSYTVbdrJAw9YHXpMZnUnh3Wa5TSZEGy4",
  "key13": "5NDpzXcBqDFKyaj4f5GmrWC2N2jBmYReTWCtNvfNtWUk7thBdHwaeUUAsKpeELhBfMytoGcBQiDco9WqFZdhwdnz",
  "key14": "3hqo1d2zpe6o6dANxs7uBwQF2qpDjK2qeYAuQhynZNXSvYBR7CueE8VrDAStP6HaUsyxj4CpRJCBm52gcwHzWu8x",
  "key15": "5cLD6gcTbpvc6NtkoiGhYGrmnujsugp3Fhyieys2KtiPNYxy8RWdFaYLau3WxrG7sBLQHDC4H3nBn2mzKvKRgtw2",
  "key16": "mDys2tuyMHVm2mruxgMEq3RoXnYtKayD61HxRNWZ29EP134Pf3MSD8iN4cKG6fjqJydwisNJFvdv1qWK43QQfx1",
  "key17": "5x21U1hu1LHx4Cc8mWPwaDjx8e88kN2ZPLmQqGdyzrCbuHFa9xCjsdSG2tcUuviAmnv7734ZK72Nrcn1FZSvLamk",
  "key18": "NTcVpevUFG2M88BqB88pv99mMAqNQN28zM3JNShCcnUJz7zQsKBr8MYuaPR7yj4gh8xTDSbQuBKicSTJRGLzwyh",
  "key19": "5UrqcG2GV7vNCYz9ByWzVjUbZNcE6E4TiTtgiThjq2Ef8WqA6gDWqv8bK37tPtLVn2LUV4nun1dVJ6cVMZK1D2pm",
  "key20": "YUUzfWKq9x2i1v7rRXTYbu5TvpPQ9sYZWhRyWTCVeTgNZXha6cBScR1NYgRkb4HdhsHkApCuFVefWzA4Ts83oun",
  "key21": "4FBCDaA9tY6WGg2HtbJ6wqSxEYfqSiRdjzkPCZSN4cX1WvA87uniwDob7C17qno76bLw9y8MbFLyVm4NJC2t8AmZ",
  "key22": "5aJxHqfJ7rM6GZUZJ4bxeVCS1nV7HpxkBtYfcj7kf7V7TWvQ8QHnoN1LojX1Kp2ZfvPWBkKN9wHemvvX8Cadx3jc",
  "key23": "46gh17LhcGGmeoy9KJH221aVWUu7Pi82fH77cRAgY6hbSkmJfZcga1fe8kEv5LjeJSrq5FBKTxMzvysZ7Lih7Yzy",
  "key24": "37i4LiACbgR6jCDQVPhYphf9GPT3hAC3kxzVanVXbAefs25fQRRh4noXf7on48nNX3WxJHVmTwuTapkaMFAVXXpe",
  "key25": "4CkQsbQaghBR13bABLEkANRuybTb9qB1fgkJZrG4fgeZWC4LoWwhNJhjgsEzEb9b3K4bW5duRJ8oeeCPGdJYHP8o",
  "key26": "5aSH9W2nrufkM8dSLrzzmxn26ygnrPxuhDFPYdzBMQyw7jGXp5Bk8XxgZGAifQsQuRKeWrKGRP1YsKLM7VZvp2bT",
  "key27": "4DKWjig25AiC1BuRgUzS9GrBtc47eJp4SiphWPDvW526ixQUmJs8iqosDHaGdnnmZFvgSjGks97hu4TFZfLSC8td",
  "key28": "3NyPxBDJR9f7Cdom97YksJ6JcKsgL2bZuSuxio59Rbhi9JfRL2Aemx51PCX9eUH2dbsYSPMChNFdJRTwaRTCxjnD"
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
