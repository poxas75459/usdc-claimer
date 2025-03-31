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
    "SAVXvqXKeXqxwiHw3yj3ndmAQ5EP3FY2pYnzrci2e4FvdEuFuD42bzm68n3X8dU2J91rjYjL8HJNCBKxXvDyFrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FGniZDM7DmohH3WPWpxpw2cLYE4pVZ6S9ShXJk2fNpJ99Hs4sjDQp6Cq2cK8sUYxPWLm9Smu6zC59avqtsgXXWi",
  "key1": "31FuAH1jVRGahnPHUMoeQ1fQUGyKmxXa1TN7jH8Lze4pPRUxZ3gzZVCo5axahAKqJ9JeYpRq6ND2MofE3runpbCa",
  "key2": "2tJcUmWENKs9GeiRyjkX4gEEx4FbfLh4QysQDYZsEQY1FRZL9xQ7rnhEYQ9isabN8WW42vNVcr9MLfVxmgZ7SVGA",
  "key3": "5UPUXun6GRewWGjzvQcvWcacXeCsf6UBXS94sQLXbx7HkwAATVmiTMdfHmtw29s8t2kyCpYqquhYE4jwJ9mP27Af",
  "key4": "4huY4vGJ76Sg9PZfzoiaJK8frcGBA4eJJnZzdJUdpeMACeBq4nMaqDb758aQGtE85KSMR6tjWZomwoCJ7updiEZU",
  "key5": "39CiWFzm79QYUVmawMdE9DnVLheAgRyLxm8xp3chfHdX6bBLCtCrze7xGuVYGY2La1XLocbrx73BxcnofmpYTBGz",
  "key6": "4B3T2X9QpYuiV7i13TXRcZVo4E5Uyy2D7LpRSpkZWUmrk1vft2kd4DUJsvmD4o3FcmjV29eLi4sZwS5gaSe5n1bQ",
  "key7": "61zibyRefWjkX7ogu3nVqLukJXDe1w4v8Cw1kdvbhk73BK3VNN6c9p7WM6u3SuM1UZvR4ZgVMyXrVLxDjhb2zo12",
  "key8": "4MCVLrEHWp3n12wS5CovPc8rCZ67uz6gAszWuXAv8r8Kbjnw2djxx4JmWoYxmus1ZZ39AFMJTwaJq2ZVvDxHtQ8b",
  "key9": "5HmG5Vr6iSQSCDcVsrxa2TLXr4JduzwxiTybAoRksipQVLARwJEcwJZ5uyDQ47QQKeTBioJCTn3onEcRNWWa4g9q",
  "key10": "3SMTM1hmchDT4P4cAbJftjfKuQfEqmm63PYSzfWxqUfFbzixhetU3L5coNcrMkeiBkmUCjpFnuqUP9b4XCLEqMDq",
  "key11": "2mzgEBCDSL8XMrjjdAXmiaUAThgCCkYQTgE1Qp2rxSUkMEB2vtVL2i2ccDyMvWsapuEBLxVRjt2Zywtv4wHdw3Vf",
  "key12": "58Nz8jvdW1tZtNWVjtyzwPpayvdaLLCzovf24LfmRhdHBtzw2vYVvHAM7KEXTR3QjPNmak1c1kyK637mrJHD6iXy",
  "key13": "2JxTe6SGaaPoTcJoihJ5VmCNeFEtpyqbcMHTCGsoG4Me88bvAh8S521zGJZQXns5bHchtiJa3gGsGtATzLRuoSTU",
  "key14": "3BiVjvsYx1LoMFzT4fVci4tEWAYY5WhKr34Ajs4svfd5EeCrE2LgCodxWXh1unAqZxaG9j4fp71b4vMSurH355EA",
  "key15": "3uwe9NJ53kyn27jcVdF4gnQACbUBHfLZkumSgDqivepxgzQwzsr3GTY5s3YR7ay6wK7LBXeGGgkU6V8qRSkGVUxn",
  "key16": "3jM6a7Mn6M9UUmXkZyL7qpso2rXyWiwVP7boVnD74zXmBTKBhVU9HZ5y3FYu1KdgHthzSZ8DBLa592jiqissAixq",
  "key17": "cx7WEmphwgEXqSM8EMHGo3hBrfpV8pPPPfpEw1k9qMfJiePi2PrDcS748wBUkSgaW2p6vkPueMpUd93VbPGEnFq",
  "key18": "cc8mYSccwWSjtXprVA51sXFikWmnsQ1ZcwqBKATG8JN1mTthYUQWaVEiro4RrRJRUZKTH2VM6SCdUJVdScuiZnv",
  "key19": "3AtJK7bgk5QvmBn3nYAc1GJCJJKxiUpKaAfiLGyX7AV6p94wNeq1S2HVXqSiRN6utcHX74189s8mtj8Us8rizoDv",
  "key20": "2oJZhTGDFTD4wTUFTef5ACwrx3U5jZ7efRSkUq4GtoRHuqT6BjTiQN3uHLo9Bi9HVzYEFQC8w8NCmQAH7M5npmte",
  "key21": "3QgTBq2hLUXcgb5KvRBWXsG5BPMf7xwHV7d4FYARFnLvLJMaZnHb2dzeadDSphSyWYZofWaLA12tX3y34ndhEeZn",
  "key22": "3R2RpQbAp7oD4jovJ3UjMdHzUSLme8pvmn53d5HEX25ycftHPW8H7RQAW7JstzF4wzXuwFvrj65R8TbATQYyPzAt",
  "key23": "5pHntdD62k2SwpHXBk6GoLDk5eGNfvVSDa4He58cXFqVBkMX9djxrTwvrYPfzn4LNJcm2G7zYzivxbEitLC2AZpp",
  "key24": "oVKKZfn2ojh4Sh3NpKo2ZUAfaUtc1oLR172naB2iDpJvKnuH3NokR9jRBCv7eG3W2TAu4MT7EzzibH1CcPq3Nca",
  "key25": "4vJdTpJjY4wjMdAgEfRofryeEJba19pTXkPPSjzdQpGpEtkxzyRszz8Ed75fASVEY878hEDAVqVNBXKtvzAiGiF",
  "key26": "4jSdBA3U1GHruR9xkwNn4uCJd7AP6jNLrP6wBUup4KFDgJehTC2fdAabmLZJHp1f97qYsJ4BErhhNzQCVuaCugTL",
  "key27": "54YgPXqiksi4HKtZrwEX8b61j58hdiY9N7h1D6t8hNbt9ReE6WhxNKkiKkqB4LLWDzoWjMd6TMjGgbG6gp183ixh",
  "key28": "3iyvAmADfYpmSdSj1v5bkn3oUN8LFfLXySVPB1ctgcbSkwy1M6sRvuCR848k7ZTxwgae2wD8n2qvkHVMaMEEarNe",
  "key29": "52E9m3MeMk2b2YBSKSgGhbJz5hBvpqiR55ZwRPjW5yqu6VsEQdGL8n9micU6P5UNDg3ipcGWeL28kJo3GhjSq6Ep",
  "key30": "3yeRcXg5ecLK7bzjjPddkrkfC4jcocWdQNqdiuLEfxNS1cPakfroPrXWLxCc3Ath32brBPTCCto7eEZhJnuYuUdJ",
  "key31": "37wUdjkckA2FDqQN5MaQ81Lp6y8cMLaTYKvYLMyEdHvDkctEx5g8Cgun3jKbc8t2zuWi9Xmeebzwnhn8HD7tnUwV",
  "key32": "4EfpFH21iMNMAQJ3Tdjpzh4qCcfCscFKTSChWbNfE7eruDkKqM4cSBaxJqWu2asJxZfn1RqHeaGEbqPi4PkVz94n",
  "key33": "ykpnvA6z88XLhQkP41u8CDe4EaSX51uUawV6rBoSb9kAZFoVPt8cCAgAidVNPUgNwM1MFZsZwAKbbwxVNLeACdJ",
  "key34": "48emWz1hBtmfdyNoNa411FmwBA4MbGBJj48tJ98fErV8VtSJtR6PNeJHGcgPkZdoZgULpwsCi4hcDt5Fu18AjkfH",
  "key35": "5DgDs5jARvfehYrTYwq8zTNivDEo9fAcfDEX5AHSSFXc61nowxLsdZ6zagsuG6PymjJ6NKjFkz2sudKNDCKq86XH",
  "key36": "2pVryUaDp5yrEaRSsZTtvoneCKmU74cyz6Pwsr3keMYksNx6nqkQ5ZTRy8sSYu4WcrPEXUdD7rvKVPemixUGsQi",
  "key37": "2twA4VCUcnWrktuviDmxrF3uxHpiJ3b2dWg8CQKwKKunxDdg6UcsRFadLw3tAyDcQi6JuPE6pMcqEaZpwTGVWXpF",
  "key38": "568gsPSgMFKbq385DGtw2J22djMKviV5WZvSRgGfautj3uoqchnH6WJga9KAhcEjJBYuC6qNZ6kA3PApAhATEiCa",
  "key39": "2h2471AT1UUfPe6CAKdHDuuGDcHQHrVidRb9qwzoyNoC8ojm6qdV6YamC8y3QQbi5tWMixZhwyUJGFnULTW62xKy",
  "key40": "3WQCkhYHHdvcxPD23DYfghUV8gSRSr3bGT1HEBqswAbQLGfe6tLgedUhEscSXa8a2iDEdeno1WcnbPfa1VPHWweu",
  "key41": "5M6jb24dN1neHasX2WLBnak41VKYCZudWzhaqj2eQjoVGLo7rYgaqj9qbLHSwmry5PHHHiVYdP4jr1R79XrZXaAj",
  "key42": "PNPXXHapmDG9iezzjZrJTLVdfSusNfgQd6CjsFVocS3GPozQzLvwFB2PmMsx2GsGtJ9tNaMZJtDi1d5gQvxw9FA",
  "key43": "4iJLgnJXujBAoigs9HzioFFYF8ja6GeEBXg78RS5AqdVEBb4VWgAvjSP55BZik5fkh6S1M7bxA2zPyk2peoQWqR5",
  "key44": "4PC9Vru5LhNDJNJyQNHujcnnaVKPFju6DY4KR15LgWeomYaZjGLvh9PgVXhCZ7W31vhGgMSN9f5TcdzRD3MXtSH7",
  "key45": "4CcQLnSju4yvN6gT2thBSnhkJFdVgsK5c4z3RZrvpy5ZCgPpWSpEouEeRz7AUYb23SDwkAcHULedqA6KjZn2kszL",
  "key46": "2qY9PtJjigRp89LRP52VnhUcUjDWXb1zq2jN5fe8qZDmsv9sWVv452CrNSMKQdkSaVvqeKetzSvtjv9Jotv9EY6j",
  "key47": "5Qwe482hDMa2qW9wVoGs18BZVCfE8jFWxZBHhPQtmyGdFkHxZ4GnXuAQz1VtbgdvxFGN5sgq3ykfir8BV3nxUqgk",
  "key48": "tJQpYo7ftTEMGWfWVMcxdHoYdRXiryWGQCreUGvAh5uVtyx6WCZnhCdPTDdmioN3iCxvzfFCwSsz8RiwKM4BH3d"
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
