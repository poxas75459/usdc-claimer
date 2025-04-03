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
    "NiNXLUn3uzhzkCDXFJ4cWHvot69oAYHDrVYaVWD5mNWN96T2aQnxfcVMnrwMwvhmxYGgWW6mb1nBYM7UE27FBLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mRNTFEgrmchkRPuNHm6w1WUkuiP5Bhf3sasBXBDxUETeyyGF73G1woX995xbaMWLoc4XSHPkR3YSCP6XCZhijBZ",
  "key1": "7vs3vQ5fdPNi8q4Qw2y7s6Zdfbk9kncbw8yKYL51cHZt7Y8chzPjVGcF5PgDyRn5ykhMfEABBLbeKKKKMPnwitK",
  "key2": "63ufBqAvuwcd58d8ZoiRuhHwUDu3kJzJ2sLG2fXRiNtbh72JJ1q2KCvFEp31awLAPL99ed5i1opEaHw8LYfSwYRZ",
  "key3": "4R1hhDPD2yXzXxJYqdDq37JaQyTbsomk6foriNT6qZUGCPNaTEb31DC84CiuFX2vGVEATdFTW5EZwHsCai2ZnyFT",
  "key4": "5G114oujxAFxbJYvW2vEef5bJsyBea8pxYqsj1knWzhjDeUSi1a27cWar5CifQomL3igrKKCgtR97VeHF3ioeYjc",
  "key5": "24akUsgPRSHTjZnfnzZK2dmgE8XPGhasBht7TVALmjyBa6hja5PWxRkzV5U9srnqGN3WSVhnaEambHAuX85xHRjs",
  "key6": "3685d4ERskk7gjnpFmRY1Ud4fRwP2obvebaKcyAvLp19UuHL5wG4xzSoKv4WjZwnd7SxVvupzpnuWbT6D6ePYUjW",
  "key7": "2z2yQXD55kQPZ3EZ5rTY5iRRnSf3go6U6nmuXitBANh1gqSUiQeshz5Tg6J5FitWgqutiV4w8Dy8fVAn8bx18WsE",
  "key8": "3pApXmve82JVfFbRWBNYZkSeXd8EACuREAUYZRpoemMmFwLKdpspAYWCBLh1ty88kjVdRFeARe9JuSmF6NW4h7bx",
  "key9": "5ErDsx7wNTkJW2YAoMeZm9i24sBXRSJPF22NA69WxVz4M3DC3WJHmBUBEKztQsbLNMq4u84F4QuxLAibFNfo3KR3",
  "key10": "4dCdT5uGa1dBKDAVrV5YddqtrDzup8qRUMKZrgHL4UuzEotQ316kzi52HpdYzr1gPZGm6t31k7yrz3Ca7ZfCxkd3",
  "key11": "23P7a7f4nA43QMjBuTmfStXV7GTQp4AqdSmJzzeci2y14n1TRBdHiWfCGkuwXg1h79r1WmSDbB6GhyKANB5BVCMF",
  "key12": "4Xt2wSfvoZoveugL4QZhD5BXnvbqJHGTjEzXAt1DMkwirJqpfVFH3uC9EuWYZJffxexF5ZPVwfbkEek4CJew1biS",
  "key13": "376ESW959Zx4BgS8NKYZ2fbwu6PMZXNzEioJUkXgvjfwBRbGo5V3dbAtzhNvL5tP9NN4GowXsebqkiVttcvy1zMy",
  "key14": "3QFrXYw2NTcp4osqSkHTbJGEYTps1K19EmF2CYE9SrUTQDGH5cbMaYTG68c9H7NicGSCWhg3za2sPsr92k5AoJwr",
  "key15": "29HAudyNxTgeABuQmS9tEUSWXiSZL8o1f8NMjB7VBBTD3gyLjcgGMhYUYwRAjrjFfytPExgjdwT5yHGvFVokR2v2",
  "key16": "FfdupwS7UrNBXLuyoM2KEuUbh99fUBBDSD2S3u3aQPrn1Z9oEjtZk95FbUTGwzhLJPkVG929NWdRU5EvkQJV499",
  "key17": "3oY9RHmD2YZPaXgPBHEHwatuqFSHb129z1W2ZH8oSEpJVtirZQeA6buSHBdkZAY64hYzfJw4hkPWLWzA9ujNfS4a",
  "key18": "48eATZMyKcnAwovArkZV9srLY26BykEWXcUneJbD4cDcXhsRuze47rxqcEEHLW4w2ftDt9MnzNaukMcV3GzZ4cEb",
  "key19": "43MMDP7AYtzJTj53ZexFRmch8wVwLfsym5GCZKLidvhwCbAKMxKVvFfpJYLQgbKSMaNFgJpChNJZ6W6kSsfgE6Aw",
  "key20": "2kJDuxXjPqytN7yW8kXb3o3yjMDWFhqiWGLMpN6z3Mn8MHdskNF9ng4NpFh1vgtkftN6DpfcNG2FFaXGk5ZLkyRr",
  "key21": "wQ4UzgzAK8NhGDBb5xw7vb39wTogAPV9qTtDNojbmRKiGPqdRxayPgVRAiRJxA3toy8cwtfBt9bwKZD7voraPuj",
  "key22": "2M9wpVQcAVQd94QMR1BS4WsJTma1nBMkK1gZkcNSQTEqQjY1ZgXP8oLH56WRveen7vCjGSmb3tnA1fF7ZjQsRqxW",
  "key23": "5448BZBcEUEEKkzpEGkAhhuTdRMCrnaNUsxP4PEkR7UWzE36QPXTvNC4nvyf6QUgnEYDRs8pvZuH9ReYjQX3Yd9y",
  "key24": "4TFgb2izUYzuowFK2zevBR56GnAieBJ9Vph82W5jcGKRk8vAKpQ8tCca2c8B6uFarnoSJXs5LXbEgLi44Zfzn7v5",
  "key25": "4MX5pvsFpDStuXPmk4b7TbrYdySxjCfjY6CW2T1mmAhepMpkRRuqGc7Y5Yoe2yLBYMEfbkKaAyK2xTDxqzqUKQ6t",
  "key26": "2VzkcVsGQJqhGBBuwJfH5g8QDYcQqvgvwmArWAWrH2FHqfaXsiNao6JhPcNr4mGFvPRtRmr8vRbtP5wyrBU3cjVV",
  "key27": "5JaipxVnmgipTmTuKYSaUNUkkL428ucd8vjvHUr7pEyPzZgCGUXVf4F6nV5bxhnnTTJvB7W1XCx37GYHFz4rm48D"
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
