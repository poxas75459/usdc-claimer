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
    "5c9aLDsJ5RTgjd5twtpDt9m41Scg7pJe6W7ApQ2J1xGuHoprkXuwuJFi4NCuwNTpBzFQLmj79RFJHwie7pF8C5by"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43iVhqKuCjkRGZMfRD2kemD9bew2EExkG2TTQESzFKxVRTwU7rCCYJhE8SNn1vjGPjwTrPaMZWWSnv5VvDMfAwU8",
  "key1": "5AmECQ5Z81PcTLRSCiBjp3BxShk3QumTyp7r6CcDt1mfnpTN9wZwRH1eaT54cDHgoaBg9tN8roESEpzmhANG5pmM",
  "key2": "538KJ239n6XsHq3U3hiZ2AjS7eodgsVdhxZwsuCw3hgYyUHK761AaRpRGisvpbEWdTcnZ8nbTxPvDXGhko38DND3",
  "key3": "4M7GFBQUC8YT2BCMaBBh24gGcxaJjDeaMUAudU32dh63Y16U13LnMquPpBEJ75ycEvWVJKAiYj4kkzrN9e6xEpVV",
  "key4": "2SvDXdsVYu9WNzhhEBKWGymnNbbzk473ixttJFeYaERqvRiUqZtWg3jDKmUZt4gtQUXo84YbaincMEit88kHDgEa",
  "key5": "2d5HxA5b8J1CxNsEVNWbnbUz7q3ccDPpD175KmQPWjRaBjuDSCAsrGF93yRnuj2S63ot8PzdTwAUqpBtAqj5sMQW",
  "key6": "53hPxvdkCRUccYjaqVtNJiqRwv2mNBRPkMobVAYFMTjUUNH4dRYvyvkX2da9qJmax4pK8EsmFcRxpvuYrK7Cw1De",
  "key7": "5x3jS9nutnUT1yGfTwbDjFH49y53jF69S9kBhM5MiBtHLMdqTWWzmAhh2Qa6XjLiKrumDRsJgt4yxij3f8E9W5vh",
  "key8": "3HJBPMGteLjqHYixtRzqqPSGrRpavHrRpeduLD6WJtXENN7RLtPLt5XFMkKR5phqpKtRuTuQBYXxSnuJnQL2AeAQ",
  "key9": "46urKtRXNptnKMnQVFg5RoaW9QspP33frNqrUSeHkHuGUYnupCBb9x1FYqxb1sFhcf5AjSS64kwHDhCzwSuiTm7d",
  "key10": "2fmzmuWCZBPtz53H3A7ZBGtatbQdmM2Bh5NMom8s19AZMCN4JJYkXoS7VLBXDZ81Nqwwg74drTXswUQqLHkuRQn3",
  "key11": "62U2ULkqskaU6zpby48rUGtSCia6p1FBJYqdf4UEmLNwr8fP2LDkcF5tnF1RMTrwVGCHzep8T6iszv9KujiNbcN1",
  "key12": "3csqkNcfCZame611rmw8t2snLdpp4uu8FJW358an6q51aLHkzmCe2FfERmGy71ViZaZWP9ZLc3cZGT2aS7NuuGE6",
  "key13": "JCJWcvEUvKmkBs29uUbaKPCxouvDM8kSQHiV74eDyKAPs7iU9Ui8XVYMonqiAx3NBZ77t8McKMTMudYiWxVZBQv",
  "key14": "3h98UKqnokGS3zWg9ChX4ApR5uV738fdSnBWRE2r7uHM61Dx1uhQUXur2pCbNF6DyneKbD1Ypeg6ermtRnNAg9qL",
  "key15": "4pQvush2QJN5K4TbTfbsGHRLUyBdrMBqymQmBJw8tpzwz7LiX11dZvHqSsszy1VjBLsbJrYZKYKk8FSFsJPoPQX3",
  "key16": "5hKmDPhspoxE9qLoeNgBKSRUpxDKWzu8BmxRRhstLDbxeYo5MaEtSiMdpUHBrkz6S5GEbU5Qv7kT5xVgndjfxZJ6",
  "key17": "5WKpDiFfGGNwg1tiwPTTt1mReZzKXm4cxbDb7ByjQ1QcDAZ2JBWUyLvKdpH14LFyegPgMCLUDmRpn9TeBkgdLXE9",
  "key18": "3P9JeysyKRqo2EYNs6EBrYRQUmr8j8diAccTCjcHpa9VgGiXAa7e9wMwV7jaLTEtJAxMZTsh4edcABzqbdDPcHtj",
  "key19": "3ZJpk86ySLqJBLN5sicqdbqKnwzvXPLgPuu4axN5jE5pLEPqZ4HxobxJ921o2pYV9CNVRKqAvqzGvhhHh4b3WnfZ",
  "key20": "3uZj6FHdgYDgdyyXuk69ZhGzkZuXUHBT3UVmVnbXYjDfrGP3oLDB1ZJXgEkNGCakMwccQtMezg4oLEjmqDCcPR7i",
  "key21": "21DdRxg9MHhjyT2JBaUh9j7akLZucnWsscP5bR2KRYAAa1UAb1iErtoebQxxJnvTXFmwobn9oRjfJcWFe1MQiMT5",
  "key22": "4iH9KkbuYVkpz2iCKSkHuecehcayZdHL3ztTjJUFwrYNKC28tkR4xQ4nRRViw6y5gf4X2hCcKkdhHHmSBTk2fJnk",
  "key23": "5H7ZFrBj7aECoRJHrth2udBNvQZWLNUztQW4ofhSqdmTBXQpysonDzVX7GozPCvCL3pihurKFS4BAQ8t9i32ZCPD",
  "key24": "FxYSiTEHQhXFGU6XMjYB2GBS7B4LPrKcJekstSw2NLfstqCNxTgspmPBExykK863tTP1Kk48dm6rqiU9zqRLyLB",
  "key25": "4py2hjWdtx2jZvNmVXcnW9GpzrRvu4httjR1DoPeGM7CvMkG9Y5AahqTc9xh1vbbV75yeMwbmfkqCDKA85HhSXgd",
  "key26": "2Y4WXFMSvLEzMkA8BCUmV9bYMKp21u3khMT8BKAufCRQTsEWH9PSocxTrtVgPMj1co8tWeB4NvZjqLmRYr8WAgS2",
  "key27": "2m8CZ44AhdMBUZtrni7q6C3xTwEPEQ3Lwpe24BaiER7GHVQX2A6eUzqy7kLsGHrRXgVBAsmL4zTd5PhrmXxc37nx"
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
