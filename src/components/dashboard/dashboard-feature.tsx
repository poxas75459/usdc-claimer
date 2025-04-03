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
    "3Bc4aYfaAdw2YtBZExJMYuoW4AEhehrhgQnY4gu2ZNT2JCWGbLnv2UUcuS3wfgeVyafTeTHS3ChLYmnfQ8XojPYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tpsk6wkjcCT9eJgjHc3phAi2hxQojVFVNucGL52KyQx8wqxtxEnNv9hhhnYFfBQJGZT163e8TJfRLJVz97S3n2d",
  "key1": "5dk3pLfEdQtUat7gZbUNLseWKyq2vBy1enaf12ohMy5juovR4Xit6gy57JtHSjM8U8gzqfyWu9cLddFrKWo2imZV",
  "key2": "3AqKnSZxz83NBGj8TCNY3XJgvWbVX3idgvy7n1Hw7VG95qYH3Uibjr8PmAsyigMm6pMQa4mLLyfWybAYFoPgFWP7",
  "key3": "3BVNDQLrh644rSp6sevRxZdWXKsr9CVUjJzy3X1oxBfjUapdDEKLDPvFztv5tov4Rs9KNcf6umxZx9zWFZRoKRxz",
  "key4": "5GHFRTYv98Fz23ZiSJ2UCJsiPWcNNgHTh2JXc7zTeHLv9vN1KhPhtKeoyaxbhFYRiwd5d41vhe1JDxP5R5f7mv4H",
  "key5": "41sdmw3tJj7L8EkS5PEAJgSLYtCjDHz8TH2fb1Uy6N4BPFVkic4T4MDjB4XMoVMxpWmCSLQBs3AdAf5oiUK2i3Aj",
  "key6": "UcynLodTz4XoGXhXgHB6D92rgheYLxXBgzU9Ch3napH3v51Y1CRmY8uMKz9qZfLqk5XBEvrqvYiySa1EHpgwkPo",
  "key7": "tozixP4ug8zMomuYG66imTLnbD8ySaet4sxLtvcQCM6oKJwCgdp1tXTsokh7L6EHDGgYzn3nAXuZKEkKh3xM6WD",
  "key8": "5ou6XtnbmNYZRDVwxUJYjqTd1BSn6yE6En53GVxNf895w5HTraFu3mmkGXAVnnt1jD8ULJS9WwunwfFReTgg5ZoS",
  "key9": "5a2wuNR4gNM1EsPH7nprAJtnudnMNRP8teaSsUMQZ7TwJrvTk95xgpLZHHLjw1ed9ciJouZ4bRNNmLsKposedKZQ",
  "key10": "3nAfHMZcx8CPkvwGRXBNpXS89ETDmJb6Fb7URtHWkLBBcLAmyT8M1Qgnz2dm3xE6G9nAk5Yu1RDBFdvMKVHwzWvP",
  "key11": "5jctupSbJzUsgPuJP57wwMnsJG1Yh5MW5zhXjH7B3vcF5EP4aVshmwfSnvFTrh776dwzf5bjNRhpLHHbpT6Q1LD3",
  "key12": "mZUt6noC2fRnvMKCYpZAf3irZMjhvvvXsiSngV5wjUuxv1byzjp5mZyL82Ad3Nfza2BhNhJ4BFerAH4HeuJKUVR",
  "key13": "4YUmKGaga1XLo5gQEHnNuSKNzPCoPTdRopvtWR8jiiekWqqNttM1GA8ohjkSrZvhRFgTxv85r5yF67BULFLrYVDZ",
  "key14": "v4v8fWbbNQj2avriNtNWg3sm9hJA9UiRKxcBfxvAgQ6MET9ktRn8cB6txVntcMbHmwgW3Rjds5kk99NuLpqrUGP",
  "key15": "2YxPHtwj9J1FNm839L7FCkGnS5dx7tk21Yzbz2cmGQFHiX6FoShHKrxG18kfzDHGZbwSuzWhN5Ho8xb3S6Srdrgm",
  "key16": "3PbfbjvCSWS66pYQy2vibwcVoTGTnF4oVxNZuLj9TJtTQqtG1BBWMqP4jgmMRwLEP7HYNGwgDpyLnqhL8DMYNeA9",
  "key17": "24DtavBCzvfjmWEfpKVpZHYraVqJTbWFEuhX1B4aDKwU1NbrpnsnB7uZtkwxCBZ3X1ecfVGQM2Af9BY2MbctEDGe",
  "key18": "3SFF2vfL6DzQzTFmWa7EtfUP7p62MmNunMnSXGL9r4r5XGmiGAQ2UCMgsNxWokxqUkwfFJLvRjGt88TaUR7KK5nw",
  "key19": "zuP8Cg9Rgmqa2mNpCgE3q5prjv6wVUSVzkEgFWmP1zZjzLtNXcZxh87vwQpsgm4GoWinvHkAZx2hT2NYqZyRpN8",
  "key20": "35GVDpMpa3R88rdyEsnypZUpfqX9mHRhtyVyodJJh4Evnc4TDsutytvwMuqr8C9XA4S7WpThfp2FpJi6bK2N5kG1",
  "key21": "5VnYEdYb6ig4gDVqvxKh1L9qKJ4iTw5QQWoac6s3dA542Mv7J3CrJ2hdRyJBuEqDY6phhMGswVSiGCoGDBSur7NX",
  "key22": "64qm9yznQoWRL9M83ZmhgXK76YBQbawdXj8Vgvqc78F254C8bkpwRSq1SZxt9KEYA7UYc6eRKArToEk8cfCryR1W",
  "key23": "5URB1KFKMkQqLpn2mvjaYLTLZWcbu4dN71qScgMETiyxo4vFfgnWEkDfmcd5pKacEacPysLrsgXkWK2RBeYdHonC",
  "key24": "4o5zR4754g8RWbAv4g3CGWjmCeccdbqaeTFLNk5gpQoSpRckmzhnucwdasgFzXBDFc7VJKk9uJsKbN4HUEmxD1Yb",
  "key25": "Un9SCec49fkyyhUjQRHcHiyp7EL15EH48222JtcH4cQswwF7bR8NdEipXYQJdzxSoTL4wQrynW7USy2Vxj6SXDM",
  "key26": "kD2pAMtZ2U9UGQMdHUmKdFKzJrhi2b2J5cnQtTzXhN2nNRzF5Dw7dcCQr25m6ryUVbEhpg6T5vdhXmTSCBm3mWG",
  "key27": "4ns5HECxiU2MdVm5RV63JUUXGpNeY2atRkSZExUbgy52tZBm2No9BsZuVpJCAXqFQ3aciqZBYTcd1RtDexSdEHXy",
  "key28": "Ec5ir3yMYfeyS2F9bsjJNcsLzvM7SzLHhKaJ2miAy6sMUXgELwEGu71asxnKi3hTCvsDSEeaV7sEZ5TzzkWSQLs",
  "key29": "3A58RD8pVR6ZzGp8jTmgWMSMzdrQBa5CnVx8QCP6f3xBE3nUrxu33tfrr5AF33cCp56UYRKjRDAhk8Rzi7y1FnHY",
  "key30": "4rAX2rMsmxLZpV7CoXewCKEUiJNwv6Lp2cHaXvwfCm8NsVfjAb8UVvLdghmWidefw8aGNv7DyLxycRu8z56ze9HL",
  "key31": "3Kf8s2YccRtdtRdagnoiFDF4E3BbfbxbHLzop816xd3csf1MjKgSR2cvYaQn8Tu2dF2AGTde7dLHKKtWkmZ5sUvv",
  "key32": "5D2io3b5bKuwAWRGTCn5ndagBFnfupJimfeYsbpnuhjYkB8gZULG7dcYBrVwB5gVkAkEQMqZUWvMGLbESUPRTL4g",
  "key33": "cHhjqM6AMPxbntNgS9eeFcyJ6bC7CGcR3v3biUPPJotyTBa83jKXGeyndsT7DNfmK2Snkh9ueZmmhUqtgWR1u1i",
  "key34": "4hWLCNNwtDRE1t4PdqfRa4JdzDnvkM1gttjbZgcLqh9iJLjZp6u6zwo3rRkmgthTaRzYkpHkBjPRdN67ZGzPZiAq"
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
