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
    "56GpUFuixBfsWaMEuoT68GXUCN9LJp1kNHFMh7tKZE6kSuo8SKzypobxTizk3LWkvzq2WpPmbLZN1jU4z5h6Wv7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a4jTgobV4Um25CyAjgLsZwgLxGX3hisSFY5P3HUCfWCiLJtANWSPjzHrxpZZA9jb21cXFAa2UFrobErVLTjMdzw",
  "key1": "3wSCWFKVvRfdgppLTsZbJ3g4Eh37HZ8ZpTxCUnyAsPvwzMrTayAzcVrCwPXg9UznDUjmSn6mT4ucTZWYsEYqyjnD",
  "key2": "66PbJCfSGshpfmuvnYckizCSjLrMrFkkPmmNPYZajmBK4zo2bXzhDsJFAigJUVEmH8FpSNgBzoZ5uvKSbhEF7QqM",
  "key3": "6JDiiU6JvN43XNriB54u3At5VizxZsGZXUKhBmc5MF1fquhej9KNMJ5p4XKeLw2vkFBGShaxtqcfkJRiMoCcfAF",
  "key4": "5mynSN26AogBurz5WRpwrdFeH6hj9szLzgjgTMwBLksowBJVyo7H8QRV1rhtJWafxCjfMcodYQbHPZbxZM49EpcL",
  "key5": "4ALSvpzxzbBYNwMbqr59WbPS87Ny5feHwVPkAbuhqkJQ6XYpt4cVfZijodDuvaB4ByKVsnDkztxiq3i5CL9xD7tk",
  "key6": "2pYuX9fWpbEtXmsHdH59euJBSr8YAnvZk26aADrM5QAEPBwV17kiEHeUMe5nBcYLhRhexhzUQoKM5pSUR9AY5vJs",
  "key7": "5WTjtEyRXz1krU8KotfBiYNerydPbxy6zLwKZnkQuyALYoP3syp4thKDa46W6zf19RfBEQQxrdfiA4bE5Me1VQSB",
  "key8": "5eFr4sLw8gPoCVRphSHgo3rtEzZ5G5UukFxnFWF6HfanWnREyv6Zt4EdQYg1TopRHU49SBvEP8GzQCUYemxYDgvD",
  "key9": "4q9n6164cxaKPuTUQ4zxuXGtN7vbY4Pg38eWJYMWU5obsm1fhopDQ4mwxr3wZ9AuWjjkDJY9nSnhd1HFGGtLHUPt",
  "key10": "5Mb5D983sbfCvhhE1Q4CcPLJnLsLn1eG8N8Rs8YRBrXbkRVqx5hAJDFCW5LLYE9FMWevhipSsEktYTkuvdNcMY9z",
  "key11": "XivGSYdFgKMpDJStHQ7tYqYDFNhs5dMr4aUU1RFC55m31NH85KcucdBRA9AQvV6LCLrPPyQHC5UUZqz9dWvZXoe",
  "key12": "22JVscHNRH2owmPJBV2J2h6QS6ot7J2Ntp3u8SLnb8mkwpcxK2opFgSUR2nvRKM5NCVA7u39JDFVw1TpS6pPgEVK",
  "key13": "3gkAGnVbLr6CwM6CZD2Egq6szePLeJihXpaDtxWz87SfdatFhPhn5JavHzYzUMkau5ktpVXLh6XAKjozLShrUe9h",
  "key14": "4U8rytUXjtyGZJUQtZsfcq4jx29MLrbSjjwQdGZx8GVA8AUDhy86QaXSoNv3eekPL1sw27CxKPWpyuo9AVeaPc33",
  "key15": "FrX3in6QjtSWCUCv9gxZVHapQN592DbKGved4Z9EPvBNJXBqbb5N9bi9T5n3dDmUgqc5NtAGtFWwx2AjXVzwYQh",
  "key16": "tbggSYbHXsUos6K9M1SPnhgWAetLHACQWevcN6cMne18TjwLNinbNApUBQN5Qs9prbzHG5p2Hw3gBX3CYGpRuAw",
  "key17": "2UE5B5SnBvnipYmFhisvQQVLVrgmi2b8PBvqz6uuxSm6kYi19juRcxLK3QZgAvMVjcizW4hinZVA7Nr9KZSr1E82",
  "key18": "3zNF4JqzbayirWGywaazkZ2Atpv8AEYXjCZrrVdhFdhNqJwPuBawtFLv1Hw6ks9qDXzq4FvragisvpCuVuVj8zsC",
  "key19": "2y1bQ2nbtHYo8hVViBSmrKsRxHruosYiEQ7ANeJuzz5mrbPUr2x2Mk6HNtW9ijYcC9zNDvd7gA4NnEnRh2wdPwwR",
  "key20": "4EXC4jVBgTdPaiWGAtVB4D8MjyRLvntAJWymPZjAYvz5iDDa2tkg5wm1Yop6YyAoWh9i3JZ3RkpXfDL1sBi35Hu9",
  "key21": "44f5bAuwNK7nLtchgKAnMXogHoc1S6HK1ry6vFXrcP6uKAmCJb55XxFcdJiq8xxf1JK5VadzUvbD63cLNSoGbyDC",
  "key22": "32v9DQuXNkGQ8y4yFFXSuqAtFj9JCyHxJKKMrTFmbbHbLP1CppXitjgXDWPYhwPxUBQJeLWxyEgTKuYUmcDgWa3D",
  "key23": "5YBpcNGa2iJRASkEQ9VRqVsDYrrhwRxdnfzK2mcfgRH6ELLm1ovkU6Qex2ZzPeZezNT3YZLpgihvPVTByjv6t3CW",
  "key24": "3BYLJu8RmBx37ifFX1rcgf7mDcyrTfb2QiXfxWMFAzmTRC5ymq7rjfj4R7wAmNLWc9JMD5dc5rWesw6y8pVnLtf2",
  "key25": "3w29d11Ga1sxGDVpshKw856ymNpYP7ZcKZPaKoXajd1saTm1YgmBSDN1Dx1VTi1rA51PXHaSwx8PL6bY3AWMVvfH",
  "key26": "276drdNoz1VpDHP2k7guja2ZSNkdrzuFWTPQFgbmyAsbsvcZfuZuDJNKJDTsUSvny8kSb4eVYDW5X2PuUiL2sb26",
  "key27": "5qpAZRnyH5mo6srVzd6eNsQ1c5jLEtjDCDiThAUB8wYL84pR9TutoGNFDC7bDdXu42NogWRHodfG7U851VHAyHbz",
  "key28": "viPp6q6PKkhhdiH4xPXimkyiK2ojwrC2z89c45r6PoULdJmCwPG9qQDrT6PGB4nBmftBf4BBweVN48AF3uH7M6t",
  "key29": "4Fiz598gViuJ5f23L4zri73HCGrEVEfxjr3gYxSUFzrWkQCK1BJuMBBuR3X5f6dQEGwnfUmy2bLT6ftw538puWU4",
  "key30": "jnjJ17sohF6aj6T6MgTZ681MudkaTXBUuYj6wZ3NnTUXKYRdSWTjvHLAQpH1HNRauR2WASdJqoPB6HHvQsZGDj5",
  "key31": "3y7gg7k3erd8zLZKNLSgQo7SsEUjdMHtD7UeUAwvjJi2LZrUEGhZQ2e9iWUDntezepD6EXx5XsCLpRgjqC75pHzV",
  "key32": "3rm4SqL7pqpaLXXwBjweFcvXxMpahRG8De9GKeAgQnwLv1GtV1Zk6kRveM6THi12ni5zV1WXee2kxPahBn4dCDt2",
  "key33": "3okYZ4nXnAkHVVgB1YTukzTMrDXtWksCZXewQPURXGx6d4dZt8dDaYjv2SPPodVk9Pe29S9uRZeLHGrUQpCMDCgD",
  "key34": "jw6FpZZb9D4Dktz61u4B2tu889xJwkTo6F9ciiuycVmjvRmd4zS2w6mV7r3UX9UZmXXEjxkN8KNrjH4YyNLZajf",
  "key35": "64vXT51dShTWxhcjXej8mgNspvqKBsbepgHeEVueiin8GgeqBT42yoLeeVLMu8RT5bNK99RaqSr33n4RLN3mNXho"
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
