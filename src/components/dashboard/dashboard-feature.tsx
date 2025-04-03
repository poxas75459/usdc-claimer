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
    "3W21Gpfw1f8HH6oV8rXD5LXKSRrfdLKfnBmvjPZvKb4FxKuzGX5F2nfzyxdGBGWgPGtJGEKxgkHCSt5p53i2ARPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AbzAJRDx8VPtZLGbEJozgMgVbiBSPpTtpqt9Km9ySEKPBMBrJUsDNZH1dRaz9SuoYEoebLJN6c9roiqZZPJqRrd",
  "key1": "4m3f6f1sjFVTAtyYh6Q81bE5pWaJtNz799ZqkhUkXPDNLPhwryMFYKX3GMCHkn2wK9gUDn1CCo9yZe87TVXhjs5Q",
  "key2": "41m4o2rVBwJLF5ZvoZrNweZJdovi1uHatXQV65xWNCeob6a4SX41PgWWZ9SMz5eReFG22pNAWvGadatHJx5xfGxo",
  "key3": "4gSGu4suGcR1DianEG2hbQU5f9tq5afrrRLnS8rrm73Jde1Fa43JMwPT2AYuaTMpEYeUFnpdFENeX1KBAMKHeHC",
  "key4": "5kvz3pBXqpv8jXEcVyie2JogKLusZkUnqqb7CCyZ4329VUMLHcsC1dVDDXoPqHWS8TU55DXeLPyZNB9paiLobZ9A",
  "key5": "4BtPowM14CeQZdDLqEi9r13jGSahWmdq87PdULbKA7uZ5yoK4oUhuNrdPVc5uyyrDPr9yeM1GXFPsCtQvbEWiEzX",
  "key6": "wgPcTtMkEoYGxuqLe3XfdYQowXgb8jyras2guXfKZhSnc72W2Nf8A7Dvx9bYLLgboyqxy2LE8pBuFHk2gG2MuMf",
  "key7": "4HjxhEEBxmy99UvGDCpRSGRnpUwPckVc2wmXtTPagsUr1QwxMy5kdCw1mnoj8EH4cNia8TKTZryQP7itBWsoM1bh",
  "key8": "664KByxw7Xj1u9fvmpf5ijQ2yD5tzW17Y9ntS59jYcZDgTLGKhPv5SSPPpwD4ouK3TpZKGebR6XNWrd8GgFyya6M",
  "key9": "3v5nkUxw3WFVZ3M5DNDhMRJryJnJ5LABubxAvNtYZSUfNSVFfrEHfaAAqaNaEADGixixNLA3Q7jN7Y88Ntg8Rumk",
  "key10": "2DRNEgGbSM59LRd3UHEayGUuhU5CVKW7R1rpsLq95qb5PLqBHFZoAbKmX2n7uuKaGhbhbsELkf7xuX9wtArcDgaF",
  "key11": "29npMh9MGcURvbeu1XM4qsX1VjBajbWSDUQnzJpFXjwuRtgB1hEfR6tg5nxb7Gr93DgY4VfAeewRSh8pGvXJoDiu",
  "key12": "64hCTeTGRuzZDHvHxD7QuY531gL7wxBF5EexXZTmjHpVWwqZSFXeY4Ym3NbQoUYHhsSwinX88K4Lb9ssh4f2p4QJ",
  "key13": "nHpp22UNtLykRYfh3YoJoZWz3e6bWqPSDVp6GLrXftX3NJvXjjNpQys1N42r7KwJcy1Qbat6Fkj7JeJHkago2HR",
  "key14": "4zVAhfcBV6mBLTCDWZCJcAFAz3twXUmivprGoPCs1VR63kNUKtY8JhKkwWTddTmL4cTmDXmuPoY8Mrpx1tnQRGyd",
  "key15": "45fgjBWH3FBGf6cJkvtCBw8KNUHGZ63yqVktYDzqR24q6kgWjL7jyuTGKmvpUp5PNsrhkUaJ51RrzfzPneiGwSLT",
  "key16": "2LgQcesmr4zTgovfecmetCeNjJ2H3Utjin2LD9KXtvQbjRXa1QvE8UR3x8wtEz4bwqeENRwX3Cz3SPwNRW6otxso",
  "key17": "2qvXJKZx3TXHgJKrckWuKzJEtujTh2RTMjaPRULWgoHwzHYisUsPGGvbat7hYgBaV57FCdqkiSkeYK7She8UqJJm",
  "key18": "JZPuGgX6QPZ9rFpsUmb4b2ENASJ6YMmM8wZfpTpQCjAQaBaSsVYcVZeYoiLTKJLGuXziGm5g6Cn2ssB4ZLkvLKp",
  "key19": "31cY3RKau6sdqotfN9fqBNnmrpTPSKfvKJVVr6smVHsTFrb5xr6LMEV423Xch6LkNjwx5X9WG7rjXCvSbqmJR6Yk",
  "key20": "4px9a9BenoqkGZVY8Tj6pg8ag5NA4iucG2ysdEbMj6jy8QJ5v4j9tViEZibrqByjytPsdKHhVADFH9H1sjoTb56h",
  "key21": "5rBYCShLuET8RjrUPfymGkgwCbC3imen5QD9q1NvSX8CWnRW7Zz8zGNkYzZQT6YuFXDKTRkZmMuZu1h8i5cLe4EL",
  "key22": "56xAYdYk8zPF6nA6HvfTtjoYS4cbDA4FYp5oYwdQ6wohVtwmqmu6EGjXfoXdQ8tr7jMajvqognk2Jn8TPEkvyxbt",
  "key23": "4YnDE3X4WxzQ2atdpTK8q22qUZXkQUPgBBfFDhXiEMFBg6RwG9XKn3TdQx7bNNKv9jWy1BNpNgZ3G6eFrXnGhKNH",
  "key24": "62F8HaKaJVPCyNFgDPksR7rE3xQSZPzScGrpPEJ3Vq9MwvSGixdq4Tj9Pzvzox5ehgi8R54C39L8HKr9d3gGak2R",
  "key25": "5uXpmPxFYVMkHkYkebcSKHnqWhS4iTcsW8qGsbHoSmFPG2DkCA9PLryvtWNgZzQEghF6eeBUSo9cBYvAcgVQ2nNS",
  "key26": "TvtHBaXYBLgVDYteJnX5nsY9Rd48W4svC3ertzoVAcMzzFFJdWisAvdgJQDgFQQ2ThkZRsF8BEKEXQPqdDoA86k",
  "key27": "45PW2Nfe2oowGrksRXuc1jysSaRjhAEUWPBDnjSTrCbUWkidHyU4wzUzCKKeZFKNVn2nyqN5g8u72J6DYqHmKUrx",
  "key28": "5GbMsooS8CNcDSfdjiDqiAuS1hX4EeLT9qETJD6xaczyH6T3csjEZLyN8rX1KeiYCa7g3ZheTej6ppJAG3TRkHdu",
  "key29": "4mCZR3EBUm763kN7CMWeHNhoJdNAQ8KcQiJTbfSpkPyyHB3NSrET3S5SvFfVCpgyGepi1KRhZsS95x7rnkCeNeGx",
  "key30": "5AMRbRbqfqWa5tt59EgkTaxpHJ4QuPZ8X9GwonFwGEsx1kfWYPtCWJzGoF5mTtHW4U4Mt6PL2hXH4ix4JQxJ7t9a",
  "key31": "5oEo1KuN4ELpuBLsZyRLag1DyiH95qgawYu5y11PszAV4yiS1BzKmh1jTPUpUpqfmu2dZBSozQyuxGbFGuyW5zFB",
  "key32": "4MoKMPgunN8TsK3q4XertupERnDJ92rUDUSGqNZ1E9XnH1xE7938FAcP4JbQRc3qXpvEon1QDEPR5ukTNzFCufyp",
  "key33": "4MkwWppK6fum1cvnsok1RBvDedLgVX8jgqDXVfiDjzAmt9974STjuyX4CYmTgkguYT6MUWn8yfsuBPNWrWZpuRtd",
  "key34": "4XkfV5pWbMQyYuTbC9Pz6uEQwxVMUMgq1zM8qqCDaYLsykSHaoRsY4ZYregNMTDkPAibezDDiaKZPwRRCoaC38tT",
  "key35": "612eTuRQxvvjzhQBw2LAYLU4KW5mKTsQSBmPKjB1SYwHRZpWFrt5KM9emHxqbaXwXRWFrjCMvEZjynSuM71nMzht",
  "key36": "5s3Zhm5jR7LzMPheHm5TogEZNXQtfcYEdNF61EvrtcdiwKeCzFC2CcvMZAz3preZvWt6sMcohqkSmTosNbkxhHU6",
  "key37": "2BBnUp2xEf2e7bgFYGGZM9K7kaZWxW5C9rdr8dLGDrpWeaYRXucN9cRqT1ANxweXZ3A7YJmoWZZSdu5Au9LrMQCs",
  "key38": "3rJhriZ5FVuU5EJhk7MK7WzaHJHU4yNSMDg85xdM119fyiKP9gVbkaRrmAXezYFGC4pgJtwDrxRpfLkYi4JTrobZ",
  "key39": "3nQEGTCEX14LyGTrmUM1eHuRe1DmLJS6ZtpZLgh6ngHNugAgN65gMknGd2Djq6tj3CMQmH4JxXQ6y65fqEK9JnRy",
  "key40": "3JwLhLRSX4GqWWujRWge9uswd3Ms1khFxkXmmDjQPCoGXH4wNziYAszesAvTXHW7LBZ7VhJs4VmPkJQm3veM7Vct"
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
