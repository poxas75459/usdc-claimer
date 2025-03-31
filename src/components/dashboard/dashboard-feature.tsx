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
    "4jVFWNNndBEgWmtyqwT81ghnS3Yx3bxxrx3jtnZ7oxmuyUnUosnaxg2DbSGqJpzFwfJfvejFhytCrM1karfXxhQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ETZncmZ5TabMFn6g9Lf1ryvSKTjgMWknocU49f8fWZXBe2hkm2bMnmTqExE8h83PZED18NMHztjQf9KsBRSgqRD",
  "key1": "2LT5VGG3R61h91fTtPAhnPGKBJpZp24P4MHkQT7TMMAyiYRTN5WEjqGhGFE5Ru1NExpnaHWGi2A7Yq7ika1HFg2y",
  "key2": "2tdbhtWU7uRNhKXwkL7sXMJBp6wX75fPyNeSjXcU1DUAUwWEMgNVev7Bwk1yLRp2srBQ3BUCVUPcNvUTTqy7LDp8",
  "key3": "4VMXoaCfUXkirfAu4i1Z9QU2WN7SAAz3yGap3a3vt7xomTQcEtjpmgpY2jaGDSJz3mQTbbmDo6C76EpLMN134Hcc",
  "key4": "3PqwaDGgdskSbMrRZgJXmHVMQj7hfmsBmQFvj3mL3eqyv1GB9N6NmgKhgxzngStdNWcu8A4e9sPWbEuXYHqu3gxn",
  "key5": "5PfsSBZZkjtUKcCWWmnN3DHtgziXv2DGz5K6E6HfnMVA9Si5dRqxz4TFPP1uLbpkdZPtNSZmPXUqwCB5ZdfQ5q3h",
  "key6": "RVedLUivKGAbw2h9ueYtQbHEwTuPMhaQ1MzzGXJ5bEKTdY3mr6ea9HtR63AxmpsEMLm2Dut9nkstnE6n2MVmScQ",
  "key7": "3BQ5SkPLd3nw3RBF3aqGdqGcJhyRSXYoJvTXcAYBLmEhJC7mDGtCs3TfQiXfg1UMCq8QnMNWPZwKcVJuDkoM236q",
  "key8": "5a4KkoSJHJufE3FKRr8gW1MK5NrS9aR8oRPdJ8eYuXRGkhQDrDVXDxSioPVNYvBFeo7a5d63dS3TPeRxB9TRXDHo",
  "key9": "5wQzRz6bpAxEmjGGz3SaPRZheBd1txFos4PWM6BaoUP96vHmC4QFFnHtykcTajkRooqQ4nJCGXUz6GxZH62tp18M",
  "key10": "N6f4mnTeGMDQfhuBU3ibuKSKsncjyWhBM9E2jz7MAgoahsxb6zguHpNG16Ed3LRwyNrrAMthoihkX9yxYryjCzy",
  "key11": "L5YK5u4FkjwV2vCcHXMpK44hS6uhcRRbsJssZVKFeLWTbiNCwAa21JKoSN9YFjQxbpkeXVjnoRkVBrHcywGJjbu",
  "key12": "4Z2zyf4CkyPaTV9J6eriDCMHMTH5CoLSsU5m8bJEA83eppdXFzEuUEUd3hVtSrWhFnPLafV4ASkz5uVnnm7ANqEE",
  "key13": "288biUcwJWfhRbugs789rR1sX6M6BJ9Mq1YBhTD57YS99VhEpExMs5LubrecYaR9Nh3TT5siwUdMBphxcdBB4wPf",
  "key14": "Aft47DntvZxXv7ax3cGtd7iWRxyc3b6EpYuxQ7jEbnhkbbX5YpMPeXjmzy55Xk2nfDWycrvGRUcgWfwfUpyTR6T",
  "key15": "632cvX3K2tVJAmABxbX8VxjTRNKynpVAtE65Shuo4DojNhy1AtDE4mSsUnmHSNH3iw2uZRzuxEk5J3AKGo3YSARx",
  "key16": "2iPN1ezSdBEy8p7zFXtb3PzXTrEaoMibVYZ3hwrWGgA2uG2mEvuAbZq8ZsJHD3GHeBfeSciKFqaaCvwWrSwp9qZB",
  "key17": "3H2okYKMoSc1Eudi6gMiUfp5NsW3A42jKhXw9YVuKZ8PGXhMWmbzXahEvH7CmMGx6BTHVfQmdLH8E7Tvh4nB6Lit",
  "key18": "4W8KTjaufcH54mjAJfa8sW7UCb5K3rxNHCvLnBWMRSN6HjQVfDUXwEFjzJTY9VF2xJrosvP8PzomrCtQ5gUr1tC2",
  "key19": "2fU9zLBtNrmBgzwho2nCxveunyVmJHkNqcWzXURbFHSSSgw9pH2cfckzZdvU1didaJVUGbkjQTXZeMRK6wP25Kvz",
  "key20": "3pbtRLzrh9aH9cKksBwMtsyWNaBqJ79fuvYSAjfgMjBmnycR4fPPU9Hp7KrThMNngZD7SCDQMdAuDgDc5Z9v7JYU",
  "key21": "3GcGZx4QZkK358SmPtpAJchRwNQ2cXaRpeDHBQqp5RhZB1MUQAAqdjDyzbEZWwtKEB5wG3dpUZLgJ6CR1ATnWkVu",
  "key22": "EjmnhPQWAaF2hpBjdYW6VbCva8iNMz5bwCNamnRJfsoW98dK7e2Yec518WvVf1e6yUN9EQPUmwXFxcPnussUPsb",
  "key23": "4yhcSw22MSygEa3XrHM1YrBCLswba1dpxwBdMKdSANp5xfwBVh2PPW7881oeqh336RgHtZ1LsfgNeJaeCc8EjZUa",
  "key24": "28MB4YDbzN6V82dwMMQ3nr7XMWEvCvRD4y4XXACW1vdMXDMWdQE7y6nm5HVhTs8npvFLofzTcoqot1SLChFGdKPZ",
  "key25": "65ha4nCP4FCQf5iRN9QUXZGKSSwLxydX4o3M6uzV45xrHLFqWKntjTZpX9HohiWiEhZHiwtCspwXdjRfnKfiQJ9T",
  "key26": "5pUVc6xjBufsqfLiYoFNHS3oPdaBfGkiWgbnfH3tMgubACma8oAAXQNEsQJWJu6Qo9nLootM4RFmBjEhvbuMszoi",
  "key27": "ZZfrgUycVAGxUsR2y5aKGDysMyD5G4cKHHZAXo87hVgxkjwNEt53aD5u44WDtBNaRvMc2SdXCq63EuuysPtnAdX",
  "key28": "4P5kbKCoPPVcjLVhcmcjmQrQX2qhzoLZ8D48Lc38vfHsUpyBcaFH6aUHZ6UDqGvti654F6zggyHWbvC1ZsTQbNVq",
  "key29": "2YkFYiVc73mefxvBKWsxhg9XB7SAvVC7fZ7sDbPsNVuNF2QvoCry5EC8Eogm1BhidfM5qU4eCbYvQsqGBJMpxQmS",
  "key30": "3ABKyKRSbBziDgGrfdfNEC1hLxwxeuPM8mKAVHbtHLY4f6SRc4hFJxDtuYRs4xTgo66QcYqCbe8doxyz1nPthzNX",
  "key31": "1dqMUoKWTpKTCYzo33v3FmPDSCYLBQNrDvPDn2bBAw8Qwz1WGJeKJxdYoJnoBpts73MmBz7ftYx6V9M9MyaQL7Y",
  "key32": "4bmWkjfH98aAjJKN5TgrgdKcviQqoSJSjCrw4WTj974XcEeB3C2grJzMhzwxMijJfm52jc3MNRbJrgZKVr5CvhSj",
  "key33": "5msa29bqPRHKPbCt3p7BDYyTT6f1Z5kGVKN7X6L7d3gRbDzWCwsH9F2puaHeQ9YzaW3tNV2zC9wi14zn9G3azrB5",
  "key34": "1gYuDw5xFTonS7gMssJrEKtebCJ9opXs6McxL5d2iZyaWYtpRUNfD7aH9nSMCfJR57uVgi9aDywYCgEMTAiWrUY",
  "key35": "46SB4kTk7hYM6b7WKR4xDodiCu7L8dYhs5FpKfof873kLrkqGD272ZcZNkRQmnt8Hb9WW7Q72Hxi2yMiabikzq2F",
  "key36": "3459Uph5eCbqjZC6R5HpqsSjzZAdTamAyw9W7Q6WSWevKpsbWJjhRRUjCsS8ziKHP38wAL3QiyxFJPBqymC7ro7x",
  "key37": "127Um9qKiU63VgsSr3YFkGKzvsnTU7GKxxeBdvgnMTacYMABaAdBNeq5UiK2ifvQkscscYGE8Z2pEDBhPrXt4Jfd",
  "key38": "5eWv7Rozx2ZkUpsRXMf714jYPQSTncTv1wCbn45yn5Uy7ZCyKNo91TXmHo4VcEA8vMqiksVeFicMp67dLGCAbFEo",
  "key39": "5g5GY9GpK9HxUzGZ2tBde5WPT4vHD6HtAaR3Wyhi6wwTLfvxiwae6jH2eb5ZKPT71gZ5SU2BecJQ8ZjfitAwkBKq",
  "key40": "CFWcPGXjJyHRTYezYn9q2op5eTkBqBZ2crP6D81jTwaX1fGFrnrJWur21ctMg3u8kPjqJCjjf6AAfg6mafXdsra",
  "key41": "3kpU8sCxQj5dmUgmSo2UnqDpFnSSeMuSniVHXznFzX543eYFTYqKVWawnFoofcfzVcbfRU5jTEyqTQzAnRaSUPZQ",
  "key42": "2xxxknZYqzv1CBGjGw6ijMD4ua88r44HH6WDGAsJP5a3ds4WiWf5gvUbMG6v9baAvdYUduA2bt6UTew9DEhEyxGL",
  "key43": "3xtLdTEjHQUApUzrzutmpjWFkHDFr4eJPuE8kjqSn2oFx8Gt8ZvAQrTuiheTvNS9FseJehLSo8mQVYPuWpASZ9oR",
  "key44": "Xt94NFkKMLLkadYSAHRw9dNgu5fonNygqexWucQbmVh9RxhJyLgt8EtyBZsK2vDqmV2nVPX6HeJQRgQnwxXbkXN",
  "key45": "355g266a8A5GSETRNdTybHX24HztM6GUGH5jc832Gki1PQcj9yuSkbc1EgaZBhzmX2VUhknN5FeZManpAc1xX6TX",
  "key46": "4Q78JMWoKVsseUm8sHRDPYbChc9DNPkgfh4SfgDsxLeMty8W5fKXhi8ZspcexxNoQCva6ND74EwG8SmQgPbhsMru",
  "key47": "3iu9NpHYctpipDn2L8VhCuN7CBnmGb7nxLnRNLzvQhRB7bYae8aUm5DZ67d1LFkJWcBJN8sEychct3qtixdBjk95",
  "key48": "593DfxAtEbq5sxto3vmFTEgZqkwyPZbNLryofWY67RpuPHznbJf42UVPms7HXJcvazbFXa3bzpe4knE3BZqozNxV"
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
