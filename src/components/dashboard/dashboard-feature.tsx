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
    "3Wggh9LhWt3k1xeQh5H45663nbkAAnTiDekr7sY6gwg35ALLGxRxfUWd6XuKewZAdp8KYLh4vMso8WJQpQqqsAzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KEKyt8wUYx8TNgaLMArQUfoJMwTdUbWt8qivZyZq3HN5hfDd5ua8EFfYV1DENw4NNAbTFsb12yc6RH4vKkgxJv5",
  "key1": "t2oS1JoPG5nhyMf7s43eccKDK3uqAoQE16pWN8MzGMYpHC5py1a5TQDDr9Up7vxU5Nb8HWrTLMrVBeKideH4DnL",
  "key2": "4cEaLpiX7mbRhh6xAPBgxztBafjmy5WxM266XHVsn9hzsGmyXBGvXAk8yu3eHSuxDSqeq3rGxbWg4dpi1qA2qi9w",
  "key3": "5rtLjkJNdCoGxtUUDE3RF2imsS9ZKMEKCfQUySnD65788tBpR3NB5KUJru1fhH4vzr1cdtj7ctrS3K2wQCaUU6k2",
  "key4": "2odanmgYpKMFAi2pprm1axsTb64cPUtMv5WpfrAp6JfjXpg9Wpef9Mbsce1uVx3zuSi8R8vXBcaSdH6hiFBBxqyb",
  "key5": "4s9p6J4G7UkLPf9icSaCucLxS3wjPZUncyNMCevdjo7rUg3VcNPaNEvdXAAascoam9UUWGc7ABcywqVGS8jp7cYx",
  "key6": "2rAVeGfj9h94NiKmjem6ck16JteW9muaVgoEXY7syvh9scMjZbnTE22HE6xqALHY41WcwVgafQnQtTu41HsNumW2",
  "key7": "5m3PgyCWWudun2jn3B9vGkoMLmhnZpUqe6S3r587ysrPV5KYVzYrtQ8pTmdcQpBSUDJnnnTeNLNXuAwjZS8UEZLS",
  "key8": "3KiMCz5HnVXawMESHZDZyMrQiWzPYaPKY4vbDPZrMomwigztJxevyMQ7HpYsnRAW57TnKCfows6PfzjHujmgzLMz",
  "key9": "2XqRvuGn7NYvyfG6GKh5713Ux2SrBL4qEr3x3ij3XehLSFJXupq6c9A3HMsHCbMPrSz79vEX9NF8CMesrvxjh7c7",
  "key10": "3PvEgogP1cuCm3TaAi4rXsRepSEmEjoxwdS5kFFZmWxuak5odzVDvK9HtHJmktXMqYPeVd5heP4dMrwbK36pBPJZ",
  "key11": "vZ11KiJRpSpbrcAbcXzPCmH2qJwWyeBvZMyFfRj7X3gSpSnBV1dcauZyMnZA5wVjtAZuahMJG6xpDmCcUPbbTiJ",
  "key12": "36DZWxJx2Hk7tJCAHGjs74E2C8Xyv5tmLes9sq9BNtDTFcy23L6xm27L7cRHVr97HPgWTaeeTi1w2gmx8ANebMCe",
  "key13": "3xXMNpHYegXLXNNs8BdSyauxyxTLBjzYyxSTrxDDdBahTBXGvJMZPUY6Wiuud44MftsT7nV1AMNGm7EMCCaSxaru",
  "key14": "YaD5qVmHm3Tn6sUnxPjeLGCKByXvxp74fmADPknK8RyGwAchTztBGs4yHiBWJSMbAY6HNJkeRobTKR9dyvrRR9P",
  "key15": "5xVptS2sNqMigz3KDo9ynSffwaFSzFq2iHXDjBEQHqi8Dkk8NmTLv73FaZGwSczDTN1ovNMyZrZmrqswqENfsreA",
  "key16": "3QhpKKCZCfCqxxcFR6JgJTA3pKRG9d1o3g8qG3Dh1kRQL1UdULB888tpjCiSwgLnM6CAd4EESQxhrpkzVYSJbr8Q",
  "key17": "5g1qZKNpqNzjDWbt4qKzzJXcJAoHjkdo3VuS6MW6BeHKq3oNDbgQSgLXSC9PyuFaTvhrF6hNjEgdoJoRFnYU5YB",
  "key18": "3NLtxQsDmfMhwgdixKRUmRbs2MPjVmM6g3V9tyrExePVg7DYv1YmG8iB6zQfRxK8bzGDL2AuPuiwWx9kMUp3uvsc",
  "key19": "2iar2aydWqS8XbYhBgxyAy1ib3mJ13kNA3DtFayrgyAkZyeVeSDGyfLqkwTbXUPofC9NaTRCCSC1CYqNdbp5q7Nd",
  "key20": "Bsp3Xoa1mzqujgrTKPEaJrntLtWv3eRm1fa8qQTBzBFo5NNwLYr2dsDxpSSTN4ffvQ5KDxCQwHmWe2vxaL3xTaM",
  "key21": "2YLEBkUp8gcZL872ng2skPzqogPR8WsyJU32N8rfZ1i4p2tZ3VAdt7LKFJbqeYVhh5BhjwcnciyM4SPTaUnzB1q8",
  "key22": "6yYTfp3sRgz2jAaKP1mDEtw6xgsQLWaJxE1n4ELHMjN9nMF9mNpK9WVENz8f7VAxwQQPEd9RZXAGEccn4RQ9roL",
  "key23": "2ukq1vKFNWXELREUEGXfntiLcLGnXHqeoRRTdXyGK4GkDQJKGEFntEByHLaHsbhbbEEgdXqcdNuEfVfSHKiZH8nH",
  "key24": "42iZsMWUQHJc1ozGhAM9T4a2B9YkC64u9JvVPKUKhsEvuoPMFB8JPUoojVhw4NNbw3zsA9aaNqzm4pWRJa3PYFKB",
  "key25": "5qp7jG2tzfZM9ATnJDZY4XTzqtiLfA6TpZc11HF7yMTFqoxnXSvTcKkR1RkoiY1xB1rDbM6oG6xpQ8xAqFqKCM5N",
  "key26": "5gMWGeAMAWeXZdKsnnq7ZQcNxXVu7wVxcTTLBUjk51YvgQyvuaNSYrwKkmarL48zanYgm28pxMuNAc1kgD8iwWEy",
  "key27": "gavsz6tMD5mFemt4oJCuY2N6nfg769JMzsamB7pJzdLfdNpnmHcpYTPxC8u9fPe3NvMTj5rh2Jzsize9WaUzRmo",
  "key28": "43Dcc2ZoZFUJXM6gfy1Bgb79b2cjEZKF9abbBbRetFCwQvsgYqAjbcEAExbPijo6jLwGqLG2esAyVMPBUsG3pLZn",
  "key29": "3Lq8r4BtkHVmmykxPtphKRqoPXRV3v8u6r7uv9gbWExwoGPhyhyfDjUNsDRefjPpmh5y96e5huMJyGKH1dLGJw9K",
  "key30": "65oe9b5KBF4oodMccdntAjFT1ZjiC2rxAGCQ4fqqvbwXYvwK1evGkYP9XLyJ9Yvt4ZxyoHsXCNcAt5DCMcYV43xv",
  "key31": "4U3aY92F5iJaU9Rhk2ZD8suPjfURg3xFS9KPzakdcCD9GN64zGgDeyvz6kVgaBN8TPtuyrV1FQwaumxaj87fLu6K",
  "key32": "45YuGH3Tf6Deyn1k2iCPi6JMUk5A2Wzystr3RZkvixXcz5oUm6Yubu8P6QAVpx74rdSaFrojK6U8szLMNnJYXHMT",
  "key33": "2xQsvfrDniUawmZbEfSMxsvkW2YNJHDqFpETtuEErFLYndMzjNE4aaeQmDxESgHMj9urZGBpNBrm8EC2u8rnQiay",
  "key34": "3LJy8Qi86Euj5KvZEyiqhwh7Wd6uUgBGMQXg1Ri5hyAFSpA6D1ZRtDXLncEb8fqbyQ3mavgzjG8Ae3Go8KVsdpY5",
  "key35": "2GJJGq1bS9CciqAEuA6KN6dxmYetKGLL5EGvnfiA59NtCoBRsRLknVTsp6yk7nAYRdVd2DbR4btHWv8FzR3xHz8W",
  "key36": "249XX7vbjcqPnqVgLNGcH7mt7x2HVXhEMYdxn8tnzv1Nfk8tkF8bkiz9gS2chUuBeTJFJkBkKXHBXP3Phw2FdADV",
  "key37": "3kMxauKnN1NWPmPLLHm2wGCwrrVh97qsoX9HvgZFJXmCWQPAoUuXkBVuvcPXXotypdLGcfcTsz7RiTcuHM83v5ae",
  "key38": "6G7hSJ8UaBc42ykEZDpk7pfpkv8pCJNUQao1pktbqPnbgfu5cmN5ipSqRVp4ArerNFof3XjN4uRH7vBV8Rd7WYF",
  "key39": "27enURXrQf7jhDoyqKp2iodJJNGQxQpFCvfSNn6LLHj5HhxxbcaTRgr4y8Rs5wEH37a53W2EhnnZZ3uqFGM3Jiq3",
  "key40": "22VUctUyKufpgswxgEPbRXUJxViPUwc2WzbqrMJ7eytR5y4Cc1m83NVHPy8gYxADQHdFMLEqYqsDtsQFeWSMXjAn",
  "key41": "4FxjsZKAPDffjUaM6tX88LyEpECQPFfwYtLFzJkbjZwG2dHr3EffArvYXVXDm67a3EPJKxieRGVHzbnfhZyGwv9z",
  "key42": "3xuaq89RAyDCzTGznaV8ZcyupG9xTCvuWJidVHuZQs5QQ3yJw5FCPnMCPkY31aiWmgcTuMoMg12ecsADEwtSiAHn"
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
