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
    "3DWohaGgxvWFmmos6VLF9j1hG7ta3VJq4x9aAmDKbaT1iCeERjTfT5MCDoxW75jSpem9ycKHkP1C9QXt8JMx7P1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hiSDo1BtgYLpHMb9bJbjrntnHtf79akqmGKWqXYdd65yWBju5BJzjaao3zoiXQg3JgmqufbV2CqTm9r3yGyEGoA",
  "key1": "3HDWAmNHVgk3AonXAs2rGBXzGWE8eP2DNvk73nVeTsLBmYMLAY9UhQimbKrRu6z6mWb4PqHmz9yfjfqQbVkBPLNM",
  "key2": "3ys4cGsH2ccUtk59pVKpVwqdVy2ftTmnXsjc4k8evfyK3ornoBKppWMZuFioJd7i8exfE2pzBtgc12K3DhRHJxqG",
  "key3": "4Aw8f91F3PfNsywS76qEpdRT7VkXpJ32HMdnzGNDxo9BHLJCeQossRTugijc6bemvJa69CJzWNK6bMzLYSpBNwhB",
  "key4": "4HmHg6JakkV5JNGtZBQcnAHXNL69XBzvjpBCdJCHrUQdrrYTyWgoJiQbTsxpTtHF7yVLr3bSRhmKUbuERVozaj5h",
  "key5": "5mALwqbgHTcydP2jXcSM1trWR9nJDrpbYfaKEEyuFd7uxfRs8HmKWGjTPWbk25iFvx9e6sYZ4Gb7WFZ15JPKHiy5",
  "key6": "5uQNJ5p2DjREXCW2Sgmu2CD3QAfLpdHMghUvrsSGaUZugAjAEKocq9kkqnnekvqVNjBStm45tqwjo2K7zd98Bua8",
  "key7": "a4Ha8VkNppHQXQAnFzEafSn11Vch2SNEsCCnNNZaPsqx2kRj7y8cLsS4oc4ti6vXEcka3mdCWzzRH6BjvFxZmB8",
  "key8": "47owqUdLJem5eDndDNxtupDBDimjwmB1fDcxTMfgLMTAXP8QdcFiKyAbRR1tJDNxzzgqu8chY5WsUcpNqdHK1xbb",
  "key9": "34dy9sFiDx65twa3hSFxjMq3JxS2qD4wnx9heT8R6ySdyxXihroDP1TjN7YYjw7cWaqfRjLtDYmySEGBHJ5eHMBP",
  "key10": "5cd23xDfBVcdHPLiX1ePMtwuDQaiUZq5CrQvAeQ2QqHigQRgadH7DcJnn8gwmH8J5VV2HXGDquFuyKXraKCS5vc1",
  "key11": "47h46Fz275tsvpKo53U7kttWuyhzKwVkAi6FzGD1xQaQedweBoW9RMMYZwG5zD6TkyNc81pt6c2p9v8MfiYVJfjH",
  "key12": "3xFDbCedLsd4dUDhZ6BYYDvpWL2no3G1U3JwspggZWorgq2svQJRX94uU88oqxpeaoQooVLtxFwWbzmGPitawRGj",
  "key13": "5mfnW4RC8F7mR8rJpBPJuqM7rFbdVZ7LmDhAoxbRxVSXPuZTuZ5Csxva1kYbPnLuvfA6rcj3RwxopqqxZ38CJBgj",
  "key14": "54c5pHW1ympBK6jpxpJZcVaLhJ419uC8EPxbJXhXbD682ZWPyJRF9z2AvAcFrz4n2CEwzaUD6359i9rULiohH1fs",
  "key15": "7nystMKTAPfuxTEuLfuTyPttzAndVVHpkNYouSEZd2yGC2tspf1S3VV3rjhGp5AAMEhFCWDRkjPeEht5YzydE3A",
  "key16": "Vi27ej6FEhfAebbtNwJF5hieWMDMtymSD6MYKG3a6YMoWRhY4kzqdz9peCPbb9dvGCt7zT4LCRKWqc2D1JP4CEX",
  "key17": "bX1r6zRKL3i9nKFZUGW2bEpDz21cUBbHV21GGMioF5YzbweKrKcMFoUzAeiTTKfdsV2SuGKazQLtmjqfsWDNqEk",
  "key18": "2XkUucHTjDa6PS7YUDRrPpZCGULNmC3tHrU5TAFmTvB7JwnnvpQFDYFaC65gtUr7kgnhMLjXuf9NbCnDMB7M68ar",
  "key19": "3ZJDQ7knSkbgYiFfgczTPSEgGDM5fN12dUDpVHyFdR7jFjeLy8gTuFBG11dGUpYRMpLmEchHmea6FhUfCsXNgCzj",
  "key20": "2CqTCZ7CC9SRpVo1ppR6gzUQHnFgDF7P4NDnJFQGUHDvAhvNpHCmVSfNXo966GWq2hLiqkf86bSmgV9tVkYFQuJf",
  "key21": "2EjAqhT8QEojGxnRVVEo9riSZtFTZ4EiLYbZc3ckYEv2dXejJmjikrza62SqTbuXvHg3PykTWdCcSnDqqgwzFets",
  "key22": "3YxgtRDPuiQxV1ghDyjnvkon6ap5dSo9LK4XAzrh3Q7o8UNXoMawH8MM4ePoPjGCwes8MaDdRTS4SSx3TbXoenuV",
  "key23": "5gsHj5wTSL7fBPVFZN61TxjH1QtHoPWpkpMPBSo9wpLZygLYryxk9hwGhnhW1SYwKSAV4X3vSRHM1cGmbQhDDVPS",
  "key24": "5Mcs47V8PgrppikVUuVR9qLi8JWErCQFpB5b3PSs6thQPDNroGMuR7a2ruRnzKjEf9ZZ5amdSeANfav5Hp3r3pG6",
  "key25": "54GEWFRT1fbXHS1MYk9bCMUhgM9pPkzak73BecUyACE3EZaQddBWpTw1T15VRmoD8B4r8BB1oM1YbE6PqF21EtoW",
  "key26": "2q3zKEuKfHK5YFG68RSeZr3i4MRZ2RPgEoy4cz7dMVt15cpkhHE12pSgiCJyqP8Uv2rGP9tv7eD1w2y3dVyugfnQ",
  "key27": "RJa9wkWR9vM9mBwNr6U25V4yJURRFpQxnPBkkbUWm867UhfJ3XHERsumfK4gHu84XRQU8TYEJfy1nK54QYMNQrj",
  "key28": "31ZpsdqWbuizmr9sXzmF42fSBcqxLXVcGdHhbvV6p5GrViiXXs84P4bk92C6x2B7AtTs1i79ZZvoKzmG4GnTu7ny",
  "key29": "3Gatjdkg8x2danc5xCkXGmhJWQNH3fdeSjHrGXfLVfbfyz67PXg7EcaQiiKqeFcFHTbKSxbqWxBF6k2BaEG6uj5"
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
