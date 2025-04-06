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
    "3oMD9LjCwA9TxkeBMtQTzb5Byt6RkvjnQjdyRsJa3vhRYdTx5KvkqFoHwUZBbdYQAsHd89pRXpiQRxjupWHfqG86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BnqY5Tr2oeWkg5CSmPhZvvVBtNDEPQRY42sbmcXfqpkLgU8VgZXFb7oSiMtRRTHjh5UtrfxcBRFj39viKUUzm5F",
  "key1": "4geWM1wg3Afx5S8SaXnSN552nYXpHzdzUYEfqpBePiSJWvhci1mvTD1ryoSPwEWJhDBXYhVAuSN6cMr3WFHYxR9L",
  "key2": "3PbPHkfBuvm55emoGVRa5n5Myq73ip2hgDcADfJgsDrPeLzYGTrEru1LEkFfF54c5sxWoKhbYTnYzWbk36Bif2re",
  "key3": "F4AeNeVRXDyrcMw3yhxqiiUFzespA52Pzc7eZYjc7iovHHfwe6vtoATYbJT7mpVYZQ3ZDtveXg1Xj7dHUKDemEH",
  "key4": "3zRaRWHpQeEAPCL61Q4o1UHhRQoX1gftqwYm548wypKdZ8zP2RFbp6qoaGZ1v3w8t1iKYuLE1G2EnczdoM8spQhk",
  "key5": "2nHnWVgagyYtEiihzb4nJypi6H2YqMowpB2SRNnLHVdW54uHv1kJcFB92byGGCXsxyRpBRNwESUB9zfFKnos7hH4",
  "key6": "5xNjCbUSAcGp8LbHo9K9TWXbKtbAzzkLwdSYPMWnWqYmeZ9LEYmgeePqyDU8jXdzcXscu7P6Dy5iyNxG1r7qY6jc",
  "key7": "5PFxWtrxryDpc2y2Dv8NoMZfB2YYpfu55MR37UYn5AtjpBSS65oWrVkBtuZeUt3ZbQsR5Exqp3Z65cV8Ayd7w7yC",
  "key8": "5Kinroif5CJzSxdsbWvAjkdFCaXej1vsNHLBfLF3ex5GmdpFuVoTdjrU2KBYhmTDJwDCo9T6fp9ojgf9J9uC2aFR",
  "key9": "e9tvtPATESfJtzusfHi2WDC8BHgKRdi8CTrQL1NWWRB3AY4CiTWLWvJLqUdihxrwtjnTQ7wegAmKUbXC2R9jT1c",
  "key10": "5gdkaPhK1aFjf5h3KMdoLwEzURvisvawEA5PonYyaMn8DjhWxLoa58aoQG4ruaNkqi4tWiWLSwtmEuQMDxV61Dyi",
  "key11": "HPRpppSEJ1mrcUCVg4H18UJWuyjL3tHsf4A9itY9NuDjwQasdwDdrS69tgzk5mpeibZPWegQaMEtXMcLSMgbnbC",
  "key12": "CvUPdwjkmDjtSxoLnDwmg5hWEK4FhfRztx19Mvzoj84K1Yf8wpB4RGZ14YhHzozC4abMsL9P82DzSbHmGyx9SpP",
  "key13": "2vD9QvYeu6vsaUgirBwViR99WzBdaHbXAyXcypyobsNPMp1tyTQofFRXY1VAsLEb11QMJU2V85cLKH8tv3YvMLzf",
  "key14": "65zTPvizke92WsEP176GeD8CqGJkbVvoqeL8EkLeeS2UdanpVDfHU1F9U8XyDcD1XbKQxrVamWmEX6XPd74opFvW",
  "key15": "3nud8vU6n4Hw1LCbtPNRicgVicpdv21w2DHHSUbhUvRABQUUg2rASMXqCsDioxxuTVPiigj1adWr6JjSutg9wvWr",
  "key16": "2JSWZL4CvAPjnEJgNEg2Cw4NkKaERmAbCvHWboWxsKdW5iDArp7dsdRBdzSqjGZAD6DWTDizyjEgq9vAUCzAXFZt",
  "key17": "42Kq8HJ3YRkhhRUGNX3aBa64N7keYBtn9gbueH4Z1VXhYCoxgxyaGpAmusLAt3cWC4MC9QqJD7w8mHf2SAW9N8X6",
  "key18": "G2QjLF3LJ2HeJnNT88wCjaezMy4dhg2V9iWewXC4TK61m5XBAp99bgY5STjGhRbZ99M6Dhi6XbuBzmgRuTir1zM",
  "key19": "d7XzHS9bCGP2uJPL1ypNdxJUR8a7XxS7W91QtezPcADzPAmyyUCdpDX3mpLe7seDdeRnKVymKwR7s2qNhcYTTUy",
  "key20": "3HxKHC6C3ViTL4FRcQaPx1Q7SNGmQvrmihWbz7LQvQ4pqi9odnQBHbUqUfJbe12itjqaYbt41JZsj53jFbxZqJW4",
  "key21": "4jbujKShBDMRGcgYQjVUo51MTuTE7ZkZehgLEZZAMPwU9NN3JJRGSyLLvr5n7qLAeJpxo37f89UHUqUFB8dWREN6",
  "key22": "5qs52DM2iEJPWMFJiMj6PQL9FrJaZJH7rSDw83gkHPjcBopq6QjsEyaEYX2UoofPSHDQaEkAJUKDRLJzW85UTDJs",
  "key23": "3hR92FzJiiEZtxYfdedyAApT8zRyHi8YKebiod8eB5LeZBB3MP66iZ3YXX3iuPLfAKPktwvze1N5qR7eiWwzYdbZ",
  "key24": "5VnHb9JBwpErjoNo6RLBBxTGxaCcbPQxaGojLfottXNLitY3mZMbV7MkUyjT9ueyrFm7EwMtHLHbStgRHuYu89F6",
  "key25": "2JzqQoFw2YR4gMwuh9gk2gfqPdRNDFGzNYv1BdGhcShG3g4dLWZiLreYSyW93tg2HUuwroJAYUJmc4YPTbBwAGvY",
  "key26": "j3fiLXoyrmVzhm6zeNSKQB7CdPJeen34mrRebcnFe1VJ5oqu19WZxC2u7EwrRYqMAHWbP8HBwVmUqwxAPxrw5qn",
  "key27": "48eqEQVTSak82wYvj6bixXoziJPzLq3WDhTB7JVZ13sxpHggjJkBNnSWwvyj5LXto89ebW4dBUcF62LFNtmdVf4i",
  "key28": "5FDJraa39U6KMGTWegkQ5g72ahdVyKHaberTm46xjQLMEwgUaFP9NBeHkCEoiVPPMQrH4qWJfC9LDfeD4cfrPaYR",
  "key29": "LuAws4aKYuim9y4XafVHBQxrX4QNPsqC5M6td5A3Y4zHLyV1KggTVAnKjJb3XR6p3MGcDEVF1N5ksWj3q7NFMXs",
  "key30": "63335qaikM3LGGRRN3st1udQnUSTP2MNd3PcbiwF1gvyyWKF7mX9dKoCMVeW6ddhtzpyB9Y1dCKKsKUHNq7aMBs9",
  "key31": "2x5UVHtcAAR2ArawEseKCo9LF9iTDApQ7EBaBJen1vWS6YALoDkvHgpNmyRBxC9iCabkcHJzAkEsruvDoLyUprrY",
  "key32": "2JnxVWjeAy5H6AGK28Vg2NMtjsrzbEomVtTZKDPEPrAxxfMu9vsAbGycCXhayKFTz1pZ8Qs9M57Atecz2EQmMMXb",
  "key33": "4dHBcYHo6vtKKjj8FNNUMA8mPoo49RrRTwAKHt6YS8gorVEvdMXN9y3tYWCHLwXZ8kdwbX6JMUGavWHTPs4WUTmj",
  "key34": "5uAyozwZeFanSLnu5g4T61q1aVxi4zbTxarJvp1QYWN4nqY24tgryrgrChRJwWhk5dMHKc47s3YJ33msRUNEKq5M",
  "key35": "2paLud4FeruJ3BPNWPPNeLb1ZMjxtfFo5xbLkVAtMgiYM3ghZMz7HSBXRcoj7e4ike3aGZE8i6ddP2VBLAUrwUHo",
  "key36": "BXobRorXa5AzvqArZpGYCCRghwz3EKwjGFMhE25h9LrNxQqhtw2x7bXHwKNWbFupwewoBJoHX8uEQn4G1MQ2vLd"
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
