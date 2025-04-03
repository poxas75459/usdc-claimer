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
    "DEX3wKufNSv7MyMrxPMVT9JeuoN2cT11p7LL8XYQiy1pC98umW1GdXCd4fzcLn7BckDY2kPBT6ud59eqvnCjAsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kSZV1u3oJuYtFyZNPGPAueN49zkkTHVpyvX8LK3WWiuMZfQMSrDt9B3M8LW7GuFGugw8A53DBuFZ8cJZYxmewNT",
  "key1": "3Szrbfi3CrNgdTtX9fBwv9Pz5r6ynGFT54Ze7zw9DjKRCWZALrHM44VEo2QkVQLGMCzBTQT84SkNekz6d5661zkj",
  "key2": "3fRAHjZoNPSRc8vSBJSbNkpGcpjnjHkbixgg8Soiev4jAmkuEszeMG2kRiuHHS86rxCbNpx1VLN9tH1S9AtQaXB6",
  "key3": "Bo3yErjf7kohHnVpzeR9ygh6CTBkWGanzrG8saMiXqavnm7KUK2ZtGEBYu41ymbHYbypvzQfoYLBBEKczFSJPkL",
  "key4": "RGj5uxiuw4yQSdpvMtPc4jp1ArDN67rhumM9QMx6k5Ybd6TTpSiyeWYz3PyyNG8FfvZsasdXEasyamYr2ojHZTc",
  "key5": "5z2vEymeYmLXLSR5etTbUTxM8YkXn4zmEnhFLnUJmbMakQESfvvKCXK1EQZwfFit5XfWU74mqcPF3ZtErrc34ybT",
  "key6": "3wznR5ptyRPievhWLjTuMQFjjw6HVbfjnWfGkkPvTn1eJBHqNG6CzYFmP3PvPM8v8U5H1Z7UxtDAovBjeCnw5LC8",
  "key7": "3RZEhvLWM9XAWWJ7Uahd8hmNJ3AdMtC5q2vg5Bt3THMpNGNvpYh5K1CATyKC4PPHiyvBKKbUQFZiAiP4UHtA4zXE",
  "key8": "uBXoQ82Htzoka736i66ymFUeeHMmtBvoBEMH6h7m3E2hTNfU1mrprgRDcd1s5yrmDNjv2Wd7XKD4YskUHgYFkj4",
  "key9": "3iWFjP51Dzn3NXdVgY816A3kKTAysNHtcNT9ERQxWjdtgn3Epgbk1dZYj5mDCXwLEiNiBSBfxJ9kZnXmnpeEzz2C",
  "key10": "5ZTXppRduRg2zhqxkk22zqgpcGJhFXYShQaXeQqwTtV4uJG2t2rRbyGpRhcChTkgZphj8ebxFkDhrkvc2HZRyLzZ",
  "key11": "3AhAKrG3sHTEQALd9ztRJA2ecGKiVrHwdjvncBmGcg5yNEU8qrjNwe1tZ6u2ZHvtE6CYvfAbiMYNtkvANX37mr2t",
  "key12": "5MXXg2jM5Aq62rSRTW8Hw1XQ87qnn9fMSbjdeSaejf1eDEAZh1Ev3eCXXEXcA7uHzEVNzYFPAJQMLT7VSKr7JD5V",
  "key13": "2ZwWoR7o9DV4zJ4QZgbVSEunHni29Db3nZ9x8Tfdn6LDK8TksoFJR4UAAxGCDJWKPj9avEnRes5d9JUtfyUZoa1S",
  "key14": "3kNnKCj488F2BpBZh67ighS6ntks2AygVUkywhoLt1tyyY3mRpej7dUGcdaBWmYsXmYMECfitC5NtComx6JiNgAy",
  "key15": "2J2tGJPjWMXCGmokYR1uVvKurTrov3LzpFi8dUfzDQiLWM1tHMFB2kFEkKt16v5cTMFSGX9yQVUoqZpuvW2zuV5x",
  "key16": "2XN2NXhVMucQib9gRTerhvzSrpBBRJh5XQGFnc4ZvbdgHmPAJkb3dqQ4T1v4Bi2dKnTktgrDFMe94QQL7sz2Kw8J",
  "key17": "2Q1cm7qbbrD9BSqs1uu1xRmzqyoJwzwX8PawkUCchbtpxqbi33B1WDQtWGxRREgVZuQii4Eg6jUBtWyM87fc8vaD",
  "key18": "32eA8KD5QuAkTCZ2nxXxr3GkefVsxobhRefQnkTNMaFh5sYp9eh6mjBeTAMnLC724znghQeyCwsTXnxPVaDgRowz",
  "key19": "4mtuXyFSwjPZiCv2zUghvA3BB8w3q8GKru2Mk4iMd7mDqbrig3MrZDx9tuuoGcxmvzTaifQ7jfeZb5Zy6G9z39Q9",
  "key20": "2G54y22u3PqcM8uhsbJjbBxx59DNevy2LXWtf5fhvAAD1meEqU6W8UWPqZNa7Ja5sL7CCnU4j7m35scvZWKqK1FV",
  "key21": "jtPyXUZNgUh1Yi6MozJC3EaCXdeEoRxE64TZABrgb9fyBcF68iRasA4Zg78mJv5rorS8wZZqZ6VqHKvtCjLSrPD",
  "key22": "4LxcAp8sCStBkJi3Z6znkXMU2bmHz7jQo7YG2NefLVLrJ6UXYhQvph19wc7F8QpQwc8B3zrdKssUoz7L8kfmVMFP",
  "key23": "k85xnTc4JmGNcu6NetpXKc2tkYD5mBbS5ZRCJ5imuQa7xeGFp2PootycWaAhoZujP12Xx9BY5wEC9eDf6AeCReV",
  "key24": "4mtvLdxBFdVnCq1LfZx3VEkBhPsRhaqsGUsfJd6U3j9eAxzfb9NuihKUuEmBgdyoRULkHwiJG3BpTAGirmGKn7q5",
  "key25": "58z26QwyxtcE1PgH4AqrpH8Pj8yLD8bwo68uETCcthgR66F81qi3F7LobiiMNKTv16WyFbREjXZAR4avTmsSSNb9",
  "key26": "2cKuS5bbpzWHqZVgDLpeM5azsV1QQKvaDAsu5wpVGbrB6LvDSaN3nwxKWSy6HgMcQ76QU34s1B6nGWV3cWSB3Dmn",
  "key27": "2wQgAtgWYJ3ngfseUXDtN7BrAu1oN1jSFHndUXAMHeyFzhXyguEuz6HNbcjXfBKCMEboVq8fnLfvabrTqP6M2GRk",
  "key28": "3q7xygWS593dGKE6HgDYP37NG6Bfpu9iCwuZaZgg6dBVvdnbAyQ1BfrE9qiyRV37keS6qhjdtvfZj6QKimo2a7ho",
  "key29": "tQJwCQRssUiJM1gW9qMm4L457eWq9uJSqS6CtC6cZbDfNsFBC61XNhzsL8sjEMegecmr8nLCK7ArwvrCHMEpUmF",
  "key30": "57K2RgkGTQcXcMv6pQmggFLZLyUMXCnNdMXjjpED4qk7spd98ehp4vJjwbjk7NrYqm2cqwpJU9BT1xPmkHfYkSbK",
  "key31": "2HfrraxdKtsZdakLxyK2A2H8M6HT6FJFtj7AMGw8Y3b3ZWxQpup3reZWaKdoHJJjLzccXzXjt9YC9vXhLSjkLQYv",
  "key32": "5Dt9AWJZc5aXtqmdUqdPQwqSJaFWYr5z3BQ7LfihbGLbELcQSxKnoWuYTNc23NCnmUQDXCmzzSF1imowT6ky5725",
  "key33": "6316gRpv6dofiiRxABieEPCySytnHaViZ9P9E9gXpmTgrbkYM9nXFtxv4F5HuxdWY6AdkLAf5GoWhT8aKVhDg3yk",
  "key34": "2QFmfczib9F8WrvejdXzCxkeaocRseuXbXUaU3CJq38fD3MnmdnXnD7hvzsHT9SNWh1g8eTbgqtcgT6N77id8Cd7",
  "key35": "2Wdtos1iypTwN6yWUNLopr9bTCxWXyPua1NJcuAmkHQPaDqr4ENvd8rENAty9oX4fnxYYGRRsLagqWGKjrq9LYui",
  "key36": "427nYzPMFaAgZ7FwyFWTQzbjP8tXa5dRSdWVBDSeYBAaR3vimsth7ktJM4p2ZSNcXJfzK49iHPG6ip8jUqeHxrws",
  "key37": "54Dhu5rsw9GnF6rqXwhGDvpJAmCstgVQdTRU3zrgYWRWQ5D65MYnfqE1JCvxXFMxT8XfvmWBXzCT7Qn5GuQikQxz"
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
