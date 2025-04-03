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
    "2335y9AEdAPnewc4ZMhxWYe6dojDc6ZDpKkgjvQyaDB6ieo8majhFqVjhE8LQHcWJ8oT5okqUHXtEUf6De9DYzCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8fgEXoQXHB2yjknRjtS7GFjzfFXyd2hCZZuT8nxM47jAzyEx7ZzuhxoHMcZqytBB7HbpwsxscgNcZ33oFfLA25d",
  "key1": "5P3WyGuGpHrTyqhyQkh3NvzDux8ro1U7pFf6bwB92zXkeu5UeUwWir4gqq24qrFuX3KahKLFdrwrps4iYK6TXiMp",
  "key2": "3REhst3tszHj49SNoUL18Ret7wsjvbLwMQteJEf9JcwGhcAQUagHGCZCakRPgvGpWWALC3CeQfyt8T26k1xDUrJ7",
  "key3": "3kg9hBn1Tj5XG3WfSqN5WzZZUfP7tRifJimDPb4S52TNTVn6wPbtJ2yiriUNEvPxfXxosQUTjGLAKWTT5z6NUBk2",
  "key4": "wN3CigPyjX89Y32JCMwDQmpVKwHiPgLbbpB6TmHc5z9mshD8oSJvnwgYFY9Lx2avGkmaM27XoC6mBiexdmyWh44",
  "key5": "4tsGdXXmeLCyqtckedT1d3dkPYCggxuoit4XEH6M2245ExzFz8fvGewgi6skuecDHjeBs2JckNHXmMVcdJg1PbMK",
  "key6": "4tt7MsBUdmi2xYrivJJb2X1agmQ9VqtxdNbviQS4aunb39mcTubNg4AqyAWiGJJd7VtFqHyzjRwMsJdLFPHwisCX",
  "key7": "5ATo7mUsGS9c8UuH639k31HnJRxmTWJQzRte5bjPbhwpCTQg1y386EyFUh5AWaU17o3bSxU3aeTZjTta1CTmjHsS",
  "key8": "2VDuLe5Z2q4j1DgpbwKdeBFZ6U2hGfxWrPqQdSxmmpj9MRHxGYVWZp4ogaMssWpLAXtTDMZwXtYsirQs8794awH5",
  "key9": "cso5nPCcW3MrMC3qyGMrecF86ja9N11ghCmxzAWA7fYN5r5dDb2n2TWBoKNAooFtnsfBVBRaXvVksmuo5AsrPjH",
  "key10": "2P5dHksMN1pgLhiKr457XKGXnQ6Z6xF7nC1E5UFNQ9V1Cbx8oev4oRfghvtMMUUtkZUYPQ3rokf5RQQuoMyzdSK8",
  "key11": "4e4V6z1NRVFZcdErrMCpHWpGw4Md2VWhE5B1NHcFgrfJb3pux4kJwXnAeRarU5CjRGBDmL3xNhJAcWp16LzVgrYT",
  "key12": "LGVwKcddRi42vQuxkV2XsmwEs1dpT4WBp7gTG6wa8UzW7g3z1rie8nfo5Aqx88sEqnRBDNac3JMhkZUnE4Fpzg3",
  "key13": "29KAW8mBUa2WpHLyUNDEfJWkV7jpzvZqsTgaP9WYEHEsGShWrMv5xiMuMMt75Gh8nEGnDgrSb8vsn4dtGuLBozmY",
  "key14": "5d1CGvscUct3oQtW6wpkZxW48tQBSb8W6ew9wtPjJiZ6kbeFaAc3GvAJhu7zdb548bQQGCarqs6TRUoeRYz5J3D7",
  "key15": "UBK76KJ4dFAW3x978eMy2ait44wpcnma9rWTbtLKzgYbHqizKSTfUu2yJgXcDWBDVrqyV4wET4ThpRPda43VQst",
  "key16": "5q8YKd72zRF5WXpDBSUMc7tXFWNEPjFjaghVgjUGDCoknZQdDgFhwVgPgsWCzks5mYN6y52wa87FovuzBpPtnzu6",
  "key17": "4n4UBNnvGb2gxu5WXewPfN9uQGZdaDQoEeDfjmTgggDsZM88nKUbcB7siyMoMsHu6EPWELSSmFdw8eibnFBH11Nn",
  "key18": "24L56HMaZK9aYpH5TmNMRDUzh2S1xK1BCFDhy3L3PtiAc8jxTtKdk2n1sDBTCkxWenyDLB5HLfEsHeqQHNRrP6Wq",
  "key19": "24cESa5TB1P4pVyGxX4RFCti9SdvjCSt976v35SAqFCazbWFheUT2G75pS4gvoDx5HSurj5MimYV9CTA7foo6Ekw",
  "key20": "4PNEmE37fiCsfF5k1vm12QFiitayQxY8Bt1ncxJC2ydmkHFTwp19Je5Lv7hpZTXZLveVHHgU1g5phfiVCTuR8PCS",
  "key21": "5VFLqkJKMUAZQcTXWutPZqF7nHBAqknQL4o33PmZswR9isk7Zv5prnYxPYZBrtynZwYjCq77448MnYwWPs8KQUgj",
  "key22": "3XH1Y2MwW4HBTVimFGURhrDUU3nbSEEk1AiaZAeGPmJoWE3ibzdGed29gEojgBhS45HcT73JQhhY5eHibdvTYDAH",
  "key23": "4YrqXZ7Cubf3jHSr4zQmr9VFbUvHmdJmJ9Pj2k2M6Fc42MbNqfAhTuDDFqe4YRr3KnWXEK9jp6Qtf3WEkq7Zb7kh",
  "key24": "FHoy2WgRJFw64NpApcNr5yBVt51Yj8EpGXA3FxVRN3gbamURpjLEJxS1G57uZL9wZo7XpBLTm46jHs6TYUbswnQ",
  "key25": "5UqHSv4FcBtWi62nGuBa4o12NY3CMSyYpGfbZBChWGbzP9hDFykN8rGdMFC5G4FD6hE1nJGb4i1AFrxnhdg7CnZd",
  "key26": "5VDZ51d2aJ8cvRqHsscr6MU7CDVSCTH2LRJxXsjwMFS2Lriqqmh5tZuYvXBmF9tS1obJMeP37LfhB9qbyUUyBt4p",
  "key27": "4CHjafaiuhumsadyuKLXWKoda1Duaakq39b7k6PYuZEX9ezE2WJLQwdmdrwfec1Y4KMNwBY8qTmNra1ARanxrGpJ"
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
