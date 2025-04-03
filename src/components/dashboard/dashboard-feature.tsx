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
    "3LiRGe4AZiWq2PPnGk3RU7KgWi2Z7yeRkYfiWEipmR18K5FzEefKJh6VnU8v3zTUATxmcbnsSVNahQUnq8yWujp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bi5JYcdLjaGtNrEwg8kheF7zsqvsMLdtmqmxoZvH3XWz1jHExgyWV2hQdGPzQVFDLL8Yevbd9x5mDhcjMPypwp3",
  "key1": "cdXkeB7fb2vh4WCJfNhwWjQTg7h92MEtCYq8jWQo6KmfGzrneZHV6z9xtUpcWK7beqx9uM3oDWzs6PVJmWv9mYe",
  "key2": "45XroazQuV4ASuWK8hcpRdjPUsT49gMwWS8bXQCEkchKdphs3MPfeDyRqNF5WNAoGKPp4brvxxN9XHyZ9sfGgmnF",
  "key3": "25QTNLEk6bK711v6f3oqZJchPB7hJ4W4pwXxnmujbwxgEuYQSPYRS3pgrMsfwdu75j7driiTVjtv6ErdSCxS6AmW",
  "key4": "3jRktLJMGNTYfheG75mQVAV7aXzPSPBHBixKYW21ge24iJgUvRMaG2uKE2EPUFKAGg7PHDs9Stcyie318Dp5bRFS",
  "key5": "44TvtCcbhLbZ5Nv7F89hZBwUhhZ4QremShrESqqathGh58LiR4Buu9WQdbdEQyrQzocsFrDKRMiu9bJbXPnxzbgY",
  "key6": "41BHvztwYCwFPEusNMqWySjh8JX7cFGgHgz9M6F59KpTu5yUbCtNc2Q4zKQYomnofaC8NjYBaGSRYUo9dRqgCTuk",
  "key7": "3dyzgHRwdjqi4pnpM92TvrQnBH9Jgh7uW8ZTAAXBzU8xswtt7ERWrsJPTQZeCYJ7csmcvktQ3hcbeMjxTjzi45qt",
  "key8": "sxGGm84hCaWfozCDCZ46vFzkk9syjB4MqUF3tAJDsmdEQh3PJ3J1tV4xW26PsRZWiKK3p2fXNfjLTiXrmA4gMQ4",
  "key9": "4gYyDdrDALFFw32yvcpdW3sxg8TkknDSABYXXxUxaTAxjiie8XnKfkeR1bYvLo1ZLCChS3UvYm8mao2pq7G65XDA",
  "key10": "5WNfTrbg7autEccL1fAPtFJqq6rctWtQAgJB19WyT1SLBCwoaKbLXrA4a4a1nyTZKcFWuafCfCZYUjXJGunjVNGB",
  "key11": "QceycsmCVn8sV3bNuUAbNzqR6gK8enNQyVKF86QaqeCU7VzrvMuQeL4iD6knV1DPpkeos4S95tecWftGpoDrFeQ",
  "key12": "2iGAXLRWaLULfMdDzeezrvwvDubd8iPcojyaoPPpsAqwcEhn5pK6JrnqszVdD2Zv672Aa35osSaEFTg9fkK3aJeB",
  "key13": "2fdkHuSRTZbX7GReTmD7XcsrDcx251ACns6kRfiFYhQKysoz9KUax8VJj5Fri5CdRWQBKEf46GMgwB8KDfCY74o9",
  "key14": "4kwRXLysfXa526JWyBgB9SYDoNipehqNaFxvpLm5C7qy34DpbKg9NYGhp6tKx9becNCj1jN9dJZiL1FCFFLgYVm1",
  "key15": "2q7tKeArKiRP9KsPgWMckLZnRn6R7ZXgRgKkbbghLU953zsfeRzRX33VNQnKBaZcSXFxT15fs4sfPyuuF1aXTLzg",
  "key16": "33mtCeYf8EkHJuFcP4JA9CpPYrpnCD7F7m8sqqueptys6MwZgZSVDQ36nT7k2A39onZRooC5H8RPo11Ufgpardxn",
  "key17": "zZxHqJQekmgYhzjzPPVLE4kDc4QPNyZwj9HZ6oF83dZs3jcQDzrTTMHgs7u8jN4J1zxkGjZLkEgtyjxGeejbnsK",
  "key18": "3UzXyfNARsL3TgyrqZ7E5pq6NJuKvvDy6TbjEwaaT4drBB7crM2b7RUFoHaAgXx1VfZZrsGo8VpeJwdZBwL36U59",
  "key19": "XuBa93UvFk2B5VTRDBoFmLRwNvsCqYT7RGNwM9FtJ7HTUWi5PV6Nui2JkL4DRHRScwsp19uK5CB9qzgnB7ko2Nf",
  "key20": "o7BdbCVxBvYUmQMNLyknYHwWXfsFPGGxkghEN3nhX82zU3huJ2WvUGG89W6VQgbDJGjPKwKpazXfucZG17fRmDv",
  "key21": "3j3mb3jSkNRsDE1EDsHkNStF7UUwngG2cm4jyEjjsrW1CrVDd6eDA7Xr3pa8nVje8UGr6WePaif62AS5KydPrz4e",
  "key22": "2bVfWBASyBJyFJTPMibF5vESmTUovWsQUnmJxTdQ2mkgcHwWxZi7F9BVkHmJvxUneykxg8RLG8NNtF7J8iVGiEqU",
  "key23": "5H1q7bqzcPv76jzzdy2yWE6nbbvNFBhkM2vZQnzKELZVVmHvCc7SkWePB52pLC2MAE6zRrz59v2v98mTY7QXxRkf",
  "key24": "5PJXGm2uaqcqyHyd5omej65TpcSNR9Ksw98VCu8NkGVADqFVeUCzFAmSZo7wg43QWvamQc9XiUfzFERT39MSp7Yn",
  "key25": "58VXfDGFFRaJZfkCr5HtoUoBAgYndmfn5sKJy2fTU725DZ95nAuAxreonHHVRpotYjmD6BF3bXaUVnFyeR18yB2C",
  "key26": "3EApcSQr5GH4YB2f4XYtj9TdVQr28mJEFyiRrjCfeJAgiUQS4s5pQ5JFWHDxQacweeaVGUquha4SpZphkLpezLur",
  "key27": "36omsg1u3pjaTbx6odch48wcQAJfxgwg5x9sF4DoPxHeDdtwASb8grU6pxK3ePL1yniuNUXQZ99wp8Tc9n8JxCiq",
  "key28": "5vT8gM2memNyKzZCiCDVrE4SU7pfqWQACqZeA7aXZUmrity1LKkrHZFf1wfCntvqomJNiM51CpoiuQ9CQGUJTJ9j",
  "key29": "2QsMidGuL35XHeKfee1y9Gj732YL5x9kz79y1VUvdB2NwnKsMNWNJHfQp5QpnvijPCudvDcNcPJjuGaUbDh9BcpE"
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
