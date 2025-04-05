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
    "4g6kv7NfyFaGAB2iE1T284KYFXcCPEK83QWLJ4sxS3wK5WCLdyWBwajvZCbjMuX5U1qzurBM6HWVBGZxEnjoSVsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mjQVQ6GVZmciWGKspf9s4iHJL45atF6G58Dh6NbzzAKXyfejBDwH7PpJhX86QTXYkzZkhxaMGWMf1StTjTeT21i",
  "key1": "5cjXFzCPfztrGQpxAjHXdN9SVJNnGyxEQYmac5jiBUc6MdX1Ef3RQ1oR1AvBWxmehQ2dhHFnTRYobGZKAFmUU3Jm",
  "key2": "5BvL3ztMyrKwdSBMMi83qDD8e9erB8vyo6AUEvu9peUo2FBUbEuLpRcMVeapSnh7dksdGVEvq7oiEVCX6mxuq6Cw",
  "key3": "X6iePFfj3aV32CmaCncEU3bYaYB5LXFemP1tm39q45PdZuaeYZkjW5mt5n6tGUD96AGv5fmD3DemjLbQEnFP63b",
  "key4": "2d8zw4nyAEVASMH49U2TziLzBrws8arTiyn3AHNsX7ojDo8cLJPQKzLFQrHnPYuSRVvDBH4idPqF1tWinsVjVZfT",
  "key5": "jGzA3yXB3msq2qqZ9BFr71oA8owm8odDQStrrF53k1u8MRzfK5anuo5e53VD1RfJ3eg99u1YbamrJLMTJXk9z1E",
  "key6": "57xYoHuWmzqMGaaWdWm3LxY6312DU5nKgmMZnUdji18rTw87gifiJeYUpnomV6sVvn8aJffudk7XDB6KAraVWbCD",
  "key7": "3d9MRrrBpkNuX8o2dNxuZFfrZiutcyjZMHjxRdMfD5wCuA1iwdBBQUhRvVNuxHYUWrhJ8YvvgF62sNFa3R2sN9Ji",
  "key8": "51joHR1aRkjfUF98j2GWhAECKnd3a2swPUWxd4GWY91t72GGG1Sn74ZKdsk6gS42vXSb5F5ymdobkKepH7aAvuED",
  "key9": "5psHaMXisEBg4xmbNFdK5vdBmdstx8rRykKLp8fhNmNwCxHbjvcByF7VjqcrCSFRVnyGoS82aAorc9j85pVTW4ou",
  "key10": "gETJMNZqTK2KWNDQZZgFWEYvQyXXqshv3UNa1YsYgZt3itKutX4uLM2x8gH7R4Vpk7T5WA2v37UN6x6CeowxCC7",
  "key11": "5Q6yYo3nS3c9dsC7wDH6LZiug2ri4hFJ5U9qx5fisKqL9htEi9tzEWPc1St9MBsGfRYewzpog9QZgWwUox4wyhmW",
  "key12": "3FXMPimZVPdDb1mANp4waZSGq3n67cmQhY8j4j1xXWDQhJpeNXGBjHiH8iJ9z3qCC7m5csBZJqo7bLEKqYujMZQr",
  "key13": "jAtyeeC5w8DKhKZduJzigceVVTz94EnR3CNss9KJWtinB1b7NiRH6cLKggG2VEKr6MZBLBWnctG8zTU1uP9RtpK",
  "key14": "31HMXSi78wdDwDQMCuyvAPf5qUkpFHwSDF3PPqWTTU4ajcUC8YxwAJBGXqHt4zvt2HB3Wk9PnNt1n4bCLuEQR8mv",
  "key15": "3v7MTWG2pirv57nHRTzapmQ21GyDQhicKqiMMEmArZuo1R7JvogmeK6gTwD8mhwoxhykhi5T5YDRDoH83rAr2P9K",
  "key16": "2dBFKXQaj4HFRDrfoc7TLqdvyLye8NEHNNtZvarRu5pK4zk8nNaKFsXwmTAe2ZvXoTYubd1PjLqSPbBV4vbnhneZ",
  "key17": "bLjYRAiGohvsdZZpXUqr8zJcUnRm3gdVwH6m8QFkpaoby57ZeVrA8sXvXV14qeiS7sBoaMPqFN7iJMbSsrdYfXf",
  "key18": "637peQ9uT51t7N6pXMxtBtZvQuUEGbHgUXrYao5rp95RJTf995tbc3uD1YZ22UmHVJswfvguQ6JqLLH6hUyC5rxo",
  "key19": "xdyQepR9GyeH9nZnYVdMyDAuFdL9VZhvjMDNmTJXgxLq1E17CeyvdftdPVog275NL96FYBEXtq55GqEQq4YHBrR",
  "key20": "511VTkyDLptPdVDbrLD1HVhd3oKAbR48AdAi1j2TXm58Xoc7QKQu5CfRK1quqAFYcaP7mzfaH4abdGoCx3ZbTVQg",
  "key21": "5s4rCx2FiZ6WTQ9h9Hz5nAqwR55XdrKpULwgqMXXpSi5th1U8zYpa4Bd2edHwDhXrFFAdxdzw5nC66iYy7Krz3bg",
  "key22": "2Rf2e6VF3ZoEqVfT4ocETPS8sSHLRsiLXJPAmVYBF8GLcGqei3KM2MkyqEJ2MPvTyfGTruf6w64x6d4JMiEQTYy9",
  "key23": "4aU31Gx6YWW6Pfd85BsGAocMezFmuwoFnywd6RAtKhJhvTKwTLU2LH38F7sBwMNVhJRgxBkoZYvCQykyraYsNf1N",
  "key24": "Y5iKFuJVj5QatQosNPDijUgV2KwsDxsXubWXTZamveUrPkCRxgZEq6BSMkWSYV79Y4CJK6nrU8AjexqvHJ5hnqY",
  "key25": "3CRerbNzsMQ7qJLobLGdYtcQmdfRrAkzgun5tt3wHtQM71fHAujTm3xGaMXWG2hedYVB6QWZ4vj2Qodutx9hXyKa",
  "key26": "4BxiaVh8vFPbrV3a4MWTPCSqYciFxnWCJJB9vQSjWVGyV5bBtyUNCnEdRMyPcjDtYK3c5UztqSSSR8cgYKSW8uwH",
  "key27": "2VquA4u3qtC1zUAY24rq5mJN28xiXuLBz5LjsX4wgxXm8UwBJn5BRHL8bVTz8BoMVBFyHaUXye4YZ5qivbzt7JAY",
  "key28": "52JGwJoe4KZktfQqQjEpR874tnJ57LkSGnTWoPTutBEC2534uZaBDUVwBfisM3NJXiHavteyqvQS2qLjdGhv4Zu6",
  "key29": "3TmdSznDuesssphEzhswuPyYvfYyWBSqdRzPGHAMAWWxkaATBnBiiZsy9U9rrarXg61VboXcYihyvyEjFgX9r5vK",
  "key30": "4VPf7jkaXKDCr757FVGVv4YcS71RqYDBiCMb4CoJyb3RgQoHcnNBrwFV7Wy7AWAwc1nFGx3yU5Tzn3KCUpLJn3sx",
  "key31": "2wHhpPAvrSav2xDmYeArZLjTbWaf2bjr67eFyu9Z2WsKMSNnkmoTjjPF1uAwfQfFXXdPzAh5tyUApiaMZxx8Uc3c",
  "key32": "3DS98bFY9wAJtfyi3GaMbdH233EeB4DTXCSS2raUxaFWPa8kPqToYc7boz9XHSJYx1tXkwrTvVUDjayX1d1KNMgN",
  "key33": "3hv3cA8JvQuAxbe3qYM6wVW7kP37mH9hgdmm714fdGa9NxcbfFyLvFfxYmpwehvA53Cq43cnfkZFxsVPMHPKDyuF",
  "key34": "3gYN9jTrgYKJ2c7UoNLKCyXqCbhR6WYuNMpd6d6gDtDfnBjsVR2ChtcvqXWvcsE6w3Qyx9m6b6BMBZtj6A6QVWMT",
  "key35": "WFxdSmTG3NoietRNochNJWhmHGVLPLVabGJCLqEBw8ejnBGceajZWgDL8zaRQHYUiX2Deo4VWMHzQspFQNW8uQC",
  "key36": "3c3GMtUH2edt1wK5cn7Wy4AjvQH7NqRcqmFQcTh86A6RzYE6yYuFPeVdb4bmhiPu4jUDq4tJokrkUki5BiyD3pzr",
  "key37": "3eMiMQopxbKLQhV7zSW1PTLBCqU8hkQRTaU4x4voG2FEWCQN3vsaGUxFbEe9qvYikPFivKsEFaykW4beCWfQXGkH",
  "key38": "UrkvLtqVxqhLrG2GqTPQFw2qvEdevas71mytS5y4qMvZd8uS9Fg13MeVF2Nn34uA1mPBnLoiXStnbLb1XtaYVo4",
  "key39": "1vatUBwhxC4mcuq18eKDbrM27pGstidip8w7VAfefS9gbHzT58U8nvrD2QT6M6ko6nAa9rcjskfgrjEjePH1kEt",
  "key40": "2w32ayxHpmogQpwU7MnEjTmomgmYgWi3VYuYQQS2YFMwkb7v431AzNXqY9UtpZ1eAYX19moFvXcw2XHhLmJN4h11",
  "key41": "5GTHi7u7rvfnLvvfVYpV92nu6jZT13rwXVZ8Ws1LZGUGVc2bCZmmkV6GohLuzwq4m46hyydQjdoYjez9Rj4BvZqV",
  "key42": "3WG6JghS4BDwxdCGNexzh9vLk6rJTLj29PQ5TJ9ii2AE6yUdt6AroJVjnwN6ja58hgJTWR7ffAJo1dJ4w2aPETki",
  "key43": "ZQwWRK7qibibzhXJ6vDxqKjaXvbv2rFaYPsAJY2QQVPo48XH5ngBrseFb1kWRSuBbrHkNWvpA47dsWedceLB4ZV"
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
