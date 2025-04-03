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
    "271T8eEMspMjSsvsNDU1BZAZ9dBH7Lnw1MsfEdotk97MM658cTDkRxGCvZLnYrDLGNyuW6FfMv1ehteRQWoFfSbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JtspMVJgQbYeQBcQ9bXmjWkk3HLxqusZpP6b5hhYjZce24N538bVfTncvYD9UxPKukWyfDojtqUZzhQHaGBBfdp",
  "key1": "4k41T28uRuzk1JVju3DcRLSghLrjCU1GtvEUTcWwwWBH1PAms84zWrBfpjtFfipfxXhJqCskET7axnKc7bZRKeeZ",
  "key2": "4pL9TD5Q1HpfadcXtZZgyDWACsQzZGtopCRs5zAJ3sJCtYvu2EJBKP3BUkQFvnSo1jJ2GoDsjvuhP8rTCx1oVn6R",
  "key3": "3jqRbnb4uW1MQmGSkCXVgGeD8c7ZYrAmt4LoxqHu9Sw6ZStUBwmH6JX8sbiJxALnJMzLKfxdz8qaDFbKm3zZXsaw",
  "key4": "4ChAKrEaz6JwaHNHgdnasATKUuSwnNCp8eAGBb5C8winJut5AHohVpfUzUeMEG6cLRH2ri2QGrQw7RWpnFUxJtHb",
  "key5": "5F7XFR2ozRE4Bj9kWorEekCfZdu1do3FUjusYQfxGKYzKZB3nhsxQZWXcKBwHvvhP633vrzUZmd3bF4YqD2nTaUs",
  "key6": "VpANd3HEmXEBE7BwzXcGrQTMR9XVoWempncmF2cPCpUyHj6XrWubrU9zwKeUt3bebY1Co7mptL5757KxB7Smxki",
  "key7": "n55GxzDt144G8TtxMrQNt825gGVkYZU1Avr6HquXGfr4qvp2h7NEQfoCQgygB5Y23er38dngDir4oD9ayM8unHj",
  "key8": "3vNbebHo7dqJExNMy9yVznBzrrxddbSxNrUzdXoZgKYntPM4SBaH1vZXUirpBWrcerjyLon78Sz1HzEFk14XumpN",
  "key9": "PMUkrt5gDryAgs19Rtaoywj1fWdTZtT9ncwgLriL5yGm1s48cUxFa4UtA6Sq1djv3pcKoQVkjYdKsJEcr2B2roR",
  "key10": "5Ub2geunkRHgiZJjyZmcRJcNwmakdNcuiBZFgeoVjuknfEwEMWWRqroMESgfwksAxj1gUTcXfGhhM6hVmQLMMBWW",
  "key11": "54e8UDNx1YEd9cXffDHqkPLNSNLexaeehw4jufRRnWob9ZtLiR8DSWM2FyXxRX8WXGaPEyudFT6SuEaJDEroDvE4",
  "key12": "5MDs1CYuhGmKyphsaSQqMyyCuXAivapr4VYDE2cF8NsPq7PP5sXXCXWXo1cp2EonBHvCoKVLhBazsN44ZMR8ZnCc",
  "key13": "5vB6A4TtKmtZLi5m73vZnDPWBmgHHYFWdtLDnqpuWxKHnPmWo6uDv4rEaRFQwitzTSfmQLk4NayPdczK2ZVk1UV7",
  "key14": "2KhLPscmTgGL2BCiC7Wtki9SdsoqpzYQLQ9xBC8BJ6ZpUFtNzjpgaGT5eZ2GMpcW4vWm53LFiuF1pMeGr83Pyys4",
  "key15": "3M4t7Ls4RjfTibuotkPEGJDm8Lz9fGsaEf7Pxkt157xxGtubFg1rkDpnvZmsNvZTkTBwG5MTh3LRJanXV5sMCtAH",
  "key16": "4ppTMjkHPQFSvE478E55DkExuet34jnnibS4BiFK2FLpUpgRsoEFrdKQeHM7jAWWiULUQKomiCrC5LDuBvW5diku",
  "key17": "3FZ1hixdsCnnKG4svxNZU9ioSPNH6wWsVKypSDyYPufht8EUksHszzAUkvheNXShcsc6akY26i37aWkEV7nEjCgW",
  "key18": "ctvu1SsFgELpiH7ucwGbetbqpDQ5Mpwsn1v6dEwtb2rWaXwu2ZE8uH6PHSFKhU3WfFpgKizmVcwGZgPb6abmWPx",
  "key19": "HSrXasiUbXyK6FeHnRupoMY1hZmCQno6jcutA9mFraHdNwXksiu6uX1ba8xyvej4R2ytQUY7sJisNLDjCjmBTbV",
  "key20": "4f3jgChaKvbuRJtCvnL9gxzZQrV7eSQENdLhTVZQ1FmpLYk4A6ctUFdsW6mHWib5u5TaXgh7bRRw6fWdVVVB437H",
  "key21": "5Grj1Sz56KPQRQg8GMiKqggn1ZghcMftJzJaTcAaBS5WYszHogXYhd3XsmXMqZsw9MsmUUrxLaVStq5d1C2oc9wS",
  "key22": "62jaoRCx8siVTzzNfqCNrSK2abESvo4C96T2oNfqjo4MgWsfFxdd285vyNKWzq6KAN41VD9WSsPvJRgubGcoDGia",
  "key23": "3PhT3bbCcV8Dd3WdmmgPXWUP5wjUj6vYeZVYn8j4dLVxnoFzhBrd9KxCoocpQtZLHmJkgNFeSdSWCvAKxNhRDMrp",
  "key24": "4VGhae6Zgk1dvk55f8F9zeKfMAk2VpbmSUkkRdbRkRLP3ZXgBq5J8XFXfuPQ5atQSSgAygi7F7NCnuvYaG4TnGX",
  "key25": "3dhJNN2gH9e4cuYFVXV9c4U9f8VGJfa5SZxM1GXtZfyBysyMroF153T91XJqCU8q23Uyo95VtmntLnaCzJs4gjXS",
  "key26": "4b4CNktdfrWD5RQcfj1rr6jMw78YSEsL6bFfdMLfByRfJLZzZ6q73q4bVXPqrDKvhSPzP9RyhhuJNq1XoeTMmAMM",
  "key27": "Wz8EQNty6EFjttXcJRBsTyoNTrsNdes22wKAxp6eLpwqygo24bETdXQnWgyaEcEe9WapebrySe8kYKRNTeSarXo",
  "key28": "4jy9JPZhgeqnSuHEH6M1TNLvhHHBGS7wPkjP2AnjXW7A2Pe13h1A8sygL3tEGSueLXJHt9nnouCMu9tDi1kHuvg8",
  "key29": "4daMriQw3phnzGmY39SqwbLoybB46m2N16TV9oacLaZpfxNcgmemhNaLaDZyxajSUktE3mKRVnK1ZN92tBeFM32t",
  "key30": "5vaGFVA83tTcX7QyBic55iD35m69iFHFS5R84pL9AjCKsstgeYCVQqUXaSTmZiioQq9sA46eRtwEhDs8HVw9VrHi",
  "key31": "2SZi7NJ6ka2z7RmA4Z3nCaEQQmwtT39wqAintTJbkMK6zQZMXYnv62AJX3GNpzVNJFVTEFTrjBBZzPVkeYaepFAW",
  "key32": "5duFnWykkCSUCrWXY4D1h16uGYnk9S25mFZwS7c7yzZr7nMZ6rCZ7Z42f6wiNxkzmsgKT4PvCPjADzgwqDFR7Tem",
  "key33": "2LA6sUE9AUSMcqVqH5GzqPFAJM3sgCTPuF6nkoYtBKo7tNUtFuqkK1HV9NFU849dnNCvNu4R5jGofDj6eEytvW6P",
  "key34": "HLRd7N9kZarGm14FeeEiYghJZWFF83Ldbzya4tCp8we4U8SxpbUGW8x6Bu9P9nWqF61AXQErGxHdKKPekyucXzx",
  "key35": "4rym3WUyfmDoP26VkDvwCG7LBMjBgThPAVDwFyyZ5L6mU9RzkrdRc7rXyaCNDmD1zVx1MQCb8bssyjjj6Ftcxp5V",
  "key36": "4UEnrAeZau1BaG71YSCpkWo4zYFuCpuuY3FpiynGVq3yRABExycrf2D5HrBxmHdeBWs43goren1inqGCrrFd5YUs",
  "key37": "5ki8Ry6ugTFGHvpNv9th11ffySADHR4gN6cUvbjQNtdhyCDKBR3iL8HQVU5w4ChF5wBHH7ckVR3H6tRUERnt1U7f",
  "key38": "63YhhcWgYvVFjRhzHwkvoVx1yN4bTNs7xWpkL4QttYErHjc3ciuBha2VyWXCesechgjgCEeLS6quafdQqz7dVEB2",
  "key39": "HnewrAtYBUft1YwZxsiPbbx9cghvtA4bt3tY34Z4BxemG7T8ij8ELJw6aEPJptAZfTprrVUde22gNdPRCW1KS4w",
  "key40": "37WVEQeZWtk37vodS5oSeCPa8Apzw7zgHkENhnYjX37nNrAYLV2k711qPgsKiFfxL61QPT4XJNt4JftHnxBobCez",
  "key41": "6179ZQc3YyNBMRbn5GhgBWkQProiRw6yBeriv4Dw34whcr6a9ecNjaKyQKrijpppduxQpGwgncsLqvQbSdN4dtpD",
  "key42": "PaTVxjhbzvsdVYsB1wb3AhhaES8X6TQmRATEK4rWWDYv768TDdhphxuSCuwqqpe3SxxELHbM3AvGqJEUjz3v8zm",
  "key43": "4HKdi8WnTMoAkKuUU6EkRf1rgRTumvvfQLeqxKufJab8bvDuqR5JtP5M3hoAAfSwfj1m4PjQryg2VfZbxsZTgrty",
  "key44": "4kXCwkYmR5kf7Ddhvqec2TtvqC8HTfrkwgS7vKrQkkbRhguT124JPAmuHUwurGHasUX71fETZWWoCD6zaHJzesGe"
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
