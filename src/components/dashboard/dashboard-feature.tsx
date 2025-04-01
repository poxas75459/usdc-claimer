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
    "3YYceAz6CkFSTUxHeiFVcmGAZGEuaA5dGutQSusTXGKaB3Qd3m6wsq3VvgxQTZo5sF4ewj3ueN8BX7fxodURGgpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pH5nkL9QDpctcUiWBjEz9nnFHfocDQZdh892Udt79qbz1bQBhuhE3aY38895cSkdrcMivMXduZPyqZCeBSSNWbM",
  "key1": "3dqiXSSF3pN6W41HA7eXTSut8hgcxfm99BpsKBEC9PGLpswftLzxd6FtGz2sX2m5KahZH4aVefSC2YS5A7WR6CJ3",
  "key2": "4qYSDNZ5LGGRmPgbAXHUYoH2AYpWBfNs4EBS1w8f1xbTYa8M822x7S4GPq7tc1hhJmHDFaGHmyFLD9np29t5kgfY",
  "key3": "6AMXnjVWmrGqT7e2oZRTAbro4a5xYqFSQTctMRYaD1ea66VA1gDu45bhhStLKxusfDtBXkfqBJvpLrubLuaoeyG",
  "key4": "4PjwF3VQP5NoFPyNvdTgCG7ABUdVC3aVNMcRwdjGtPJyWG1ETBYvfWh4F4VGnq2daFCMqHME6io5oHFCgKhtQGLa",
  "key5": "5Ct8Qsba5gPesNjxuXZfZyj2G8Q2NvQar69AFTD9YDtLupRCAW8R3UNXzQrCSBuSrqsHPMccF3FTJ6RA4dVdKfdA",
  "key6": "2j7kksKRZketzD1JNc3aC2nxy8w4CExps6j4Bc3Youd62AKC11tNGFyzYf2zYAubWUGupTAF7RA3tygE9y1XZSdH",
  "key7": "NLqN6MskpWu9CvExVW3pWQMMSJ3qom2sMwR9J4Mvo2dphyV4atGpZPWRBNe4j5CCZ5zAtNETe6TUWjtyXi85eKk",
  "key8": "2ZbwpWnpxnn6HiEzqd8txF8VX23ozoNEyczNxZ233p9zcDq6ESpGJykWvvvMyE5rtSCkH6QuyhCKe8APfURBKErL",
  "key9": "YNozkzYWxtJLhcydqLUZghhUv6gSakXVFnrDwZ4uFiK4K4mrYW9ZHkb88yiGHJaWopN4dJ6XWGLzfBWCx4N497K",
  "key10": "3MKw4vC3drNwWMDo5qEQtmGJmqSSeSQ91iXwUi6SkXUQuDZsrbwSGw4f8Hfd97H3gv8DQ7r8XsqQUsNKTmLhhCT6",
  "key11": "44nBdBv62W2fd5j6VWv2o1X8EvckYzXM9eTC9mtdmRDLT1CiYb4RsMfNsx6VKCuPS2pfF51bJgqhF3syyrd2FDuK",
  "key12": "4YsU3cRQDiEHVwJ1JHE2zcxEbDHfGdSev2b52ydTcpP41akVnxtaus3twL7D5TUM5UpjhjF4xgc24KHb6avFCooo",
  "key13": "66K6p9mp2TrEGp9r4FNybRFjAYn5Wb6Ctv7ge2WLnN2kpnG9xkucuCeCG3pmjUGM6QzXNBCXjr9SFdyV1LH5REcE",
  "key14": "2ZnUZeMAN62V99TfkcvKFKwC5KrTzVyrnaUmgQFgdUWRzA4hg2QUqPtfuJKDiGJ5HN1WbpaivcL6rokKtJZMxSLK",
  "key15": "4EHqoSHTLnckA5xPRz5raUhQKXQstqQoSftsPC783maZSYnMUonQNAXTkFBGMLoP7xpTTvvBnQjsikeKZ9AAJE1Q",
  "key16": "25A9ChrihdW4YGvr3o8V2FYH2M4z1eTgDgVZsXZkgYKb3MdDVFFenPCB4r3fa4SYFiPrMV8rMZaF2QCRf6V5DSgy",
  "key17": "4hHHg3DTKzWFDk6JsnnVXKoCavPngvjBPh8YRGteSjfMqT4YVW128m8pW1CLrXwN8DFHeQCpizErdZE3jHrLcVzM",
  "key18": "4KNSWStSTafZN9WSbySYGJR3uJoTBvmrJ7XmnjuepkhKf1cDv4NjdngjBEfBCzCk9P9R8T5Xg9FyEQ7C42Vo3L5R",
  "key19": "DzqFRsgpKBgTqU6L8dHXkuGaGUWHifPL7UX7ZcwryEeiCEhEaskyGGBHBKRLbKT1Hq71mvwjMsVhheHRmbXaD2Q",
  "key20": "2dWxM2RRikYQRunfASysYZQ2sGuvgmWHNHdHScnPBHse49kMitYD4d4mqoCb5UyKmuSdmMdLwGEEM2reRRXM1GDB",
  "key21": "3TBpkreW3QyLpdxwt1mS55ZoCtNnVHLHtCKLca1kJrZVT8ftxDW2wvvPnwtw7mVu7UxPegevuvTKRV7MB85rMzUL",
  "key22": "53BSfHUPWZJJQVU3p6ChgJepmkmoBCGSUrjJf84oB9HRRhsYUX1K9MWGXUwE9MLhSGcwmE3T4gQhwwemhU8DT8Ar",
  "key23": "3fYSvJGU2qoahqwjEiAquQ6HHCZz94cJFpVP4Phwmxy9pZR4jHyjjf4Gdhy6XGyg8bzaUmAB2whW8uax12xrNhoD",
  "key24": "hNqYTUsuf8F9U4MQpD8xLdjv9GQfj9yVXPvH9G5Adie1ja5ttf5HkvEjQcRSa9fJZfrGmW9ny84ceee2yZT6Amo",
  "key25": "5FCMSwy3ddhsuUsrak2sC1nPZWRbqALXv5pw85QZ5fDgS7AEx3yYYg8BFK3ffMheQbpqNT69ftgJgEHvatLbE5vP",
  "key26": "xfq2nrUA5gHfGxUG7oR2XetEaaDhEWLTWPModhgxDwqBwHX4WAjJrx7R3JkvnHunoEUKr23bfQNuFBHNmY4aybN",
  "key27": "3EKs4uGTuot3veGRJgamKkCtEu7g5idCBnuVtKg1ZNc61AYsFP5jMP5Wzt3o4TcEbDTwpTbMEiH3xdRCn9NUqTad",
  "key28": "9kHeqsMWtgxb8obGajq7DiQ8r5h8nA9agS9K5NVM6Cc48NcpJW1vEYYAfvZMxzATsU1d797Y2zsZ7JNFQ7AsXkt",
  "key29": "2dT6EGBgGJRaRuMfg4oVwBj88vTtsE2P7jzop9SVfCk7AmdQ3thBTKEQqygUUx2ASf2csmDyCiWqq7z9izSeP6Yv",
  "key30": "5Hd18wdMpZiCqLBryeoDQto1kEXTFaqVSCE6yJtGjuWKL7LexdZqM8D94qhy6u4jRoTyRp1qNMjjyvhjghCp5BV3",
  "key31": "4QybKiUUZBCe9HEnaNjK5ZqJtQH1eqkCoR3WR9awV6xQ1pLQ4zAFxdnC59uJf1B2aE2ivfA5CJP3kHUDrs4z2Agu",
  "key32": "3gT6vyL432MLCEaAzzbgmNxS6TCsWLNSj85xKVfgWCJFDZ7EzZEQu9CsjV7RCqPS5uNiV1C6r93YeYZJwn8XY96M",
  "key33": "5cPZYbLKQBs5pupdZnHN62QGoUqdhiSJhkLKGTDZQMr7rFEe1eWHv8nyTTJjy7iU5cerTKpYC5MCbiVt9SR1zYkR",
  "key34": "5LXoMRh2zLNgw3rN2wDg1M2WSmJVpxKxJGd94FpB9yrYJagZJcvf8L5tMzwRao2NNiJ1TkZw93vecaweh2MAPMjn",
  "key35": "3JD5LwyiSe6Rqo4XCT7Myet5XHE1o28o1Pba6a4b32dTXmzf8UWivhTpwjsh1TCezyDhQPMPSuieRXQiaeKGMqfq",
  "key36": "e13rf3rtwaZN4iJBa6dLRwsfk3nzkcCdpj5KUTcjUd8U36ZevuWvTHSwNofQsd7eLEgPSMEsqCgmnNp3dEwPni9",
  "key37": "4iuLxStrhXU7j6rLYim4ebiFmsiUr5n4KvjiySKtjXfbignn6MGrKVjP5trJBYRdtMrZr7pUFRnEXjVYukQcW8Da",
  "key38": "hmDRQ6vxQxoyKgYd4qdEuaBuELzF23yvuJ4mN19tSedihkgp9j27w8AMBugEHvW2WA7z1W8fBHjVaGGgWGSEZHf",
  "key39": "4FmZdipPo8HgmA9Um7picUEFQK2zAScZKSgRWjPP8rRoTWU6KwcpHCPjY6hf3E7iKRRNcxn6gwwgyfYJi9GfjCgj",
  "key40": "gJKEGWznsPoTfdcDBrJraxB6DEFTWka1Q3eghN2j17Prn2TeVpnwDzDHgHQyLUhtMAdncFKj2r3212Ea7fV6pjU",
  "key41": "dRtRSNTJPyp6ZQa6KBZfEnXr31DR3qj9QBDLw6YEouScPM3yWmMfBcPhBNEtwxXJytAALYSd6cyjbWAxSwjREwF",
  "key42": "3UpEYShZ7SXKGKn84VeZfnuLomhERMjkBNTiQ2Fbfu5USRRn2XrKqcmkdrmna4TEHNTeYKbHQnvXmEsF1rXYXAGa",
  "key43": "4GA9NxJGxFn8s2DZUKCsWKR95W4BkLUVyALaTp4KPHjSRATG9n9Qe2Dy6F6QrG7auGR21qet1frTGRSCs19veRHy",
  "key44": "5vzLFH7UcHGqCwSgKpg12b2y3gU4HTiL1rQYw3yNXiSQpWgFZDfDSTvbNmnUh3LC9ZpnXujPAXZWxRDmrVUr7b9Q",
  "key45": "4DjdvsvzsdB8C3VpYZXGnSWiPHV7zBAAhMcucoUkqi4sw64vKbmS6fDrAubkiWVZq8V68QbrRGUYNeoHnr7oJesa",
  "key46": "3ne9Gy27DiTmGDpQWmF1TFH6qLMRafdmMebrB4qq6ANwy8bxk8FhmCWvqBkFac3W2FaXnCBENtBqUQhhTPvQM8fF",
  "key47": "2eVAFVbF95QKxE7JLNhxA8LDKUvgWHDjbHPHUCCGAxyhLYiQchq4dZfFJegEtxriqVduj7fPHaWBVqchYJEdxvZC",
  "key48": "5zqNesUazzZPwRbka5cMwyKk1g3XV6mr5YPNgKVSAwUEBLctqahQzYrsrJM3sQZideXW7QGG12n97sxysaxXrgU2"
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
