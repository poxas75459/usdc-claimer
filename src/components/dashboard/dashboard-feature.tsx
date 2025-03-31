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
    "37TC4VTUnsbd9hNAgtcK2kQu5HQwu1H4FyAHhydWeBgnk5pG7ZMnAQPHqzkh2jygWXiCPw5GVsPoTJaN5P5tn3UF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ob7dpvUZBbM2Qw2zFkpFJi9dctRJrc2YTCSyqSe9WnpE6AKxFxxqiMnoGHFHt4Ayn4QhMHcy4mQ65y511SjhE5t",
  "key1": "3t5dYYnKfkZAKEqRUbqkkMD8g9XZK4DohpAv95B8HaFquHLrAh1QMfbhzmmxLT1vFGVgk2m1n2Hx5RvFrgsi5J3W",
  "key2": "2kiWUK6qgwHzRcUsGUERnKaJBeKFHnyFcMaFsqCg2c4C1dUykTVjg3emg93P5Fd5dB6ECTioVQNyMhzdT9pzqLcL",
  "key3": "5v368MpG6zwBp27pEpAyFTgVt8fu8gckS4QhB1mVjVhb47yCXZ6DPLLnHTzZgpkQeFhZ4SgBTLvSgRgz6YdTfcZV",
  "key4": "4CdTzPsQRSqcq1W89L1AXSGLUCn2jMnZuAursVDoq4YU8up94h4ZjEnVKeWAFDnJnLb1HoMEDCuts2KS12m5BaDz",
  "key5": "2MztwNmYR3Q2Q6tgKMJ7SKg7ArcBzUxbSmg4qyabPMgTpU83Kbt3tsjA2NYjkG2DUU8ATJZb9MB2VTGN7DdifCH",
  "key6": "5izv9jz76bzCGWwunzu3SDmYgtAodq5R9fSiT278KELXzVaj7QUtvwDKbLyn5bPLU1dbbbidSM21HfU18nv4aaru",
  "key7": "TKd7aBLZYSLhTxHM16oeLrxJkStmzYex2cFXK1DWfWVJuABEoE7maWo91GMqjp5sRzyBeGSPWZduqo4AKRkjr9g",
  "key8": "62BHDn5YFNqUxag8x4fwmfGCcoas3KqLW5e1GJQiKQggTFFcfmNqE3E2w3wtvb7q7jsU2N7gW6im6RgowNxQwhwL",
  "key9": "2LVKFUg62QyKQBgqWSr56ZgViypH3sJ3NTisgN4Z9JbTJCXb3xgUCZLUUrvnwLkwZfqGSK8p6fDstC7dhuh5vTLM",
  "key10": "WtSjEUkCAjCYVU3DNpogKKqhfv5z3mTSZ2BxZQxZEYGeJrFAoeUEYmHr8y6QAfWdMdp8f837r7zFC1fttTKtfe9",
  "key11": "4CAWzLbjECt6nn4mcYwpkeCd2T4KLcYggLygKcthVMh831yFmicc7sR6ck5HBgiaR1y9xZrytwyFDYj1QV7gQhVe",
  "key12": "2U2qtJgge7pFR89uKbera4d2daTsE2zqz246Rk6zkS8fesdWT6Uyqqs48KM8vQQdQjhaQWhbZkEFSMGCXJj5JE1u",
  "key13": "5WqLwYdBCBzSKB35KZKjLFvLozeJGpW27BsJdHKW56xiKnWNmQKXVoMKfpjxMxppNFgvw5esRb7qHGjfkeDb2mgL",
  "key14": "2sbgUdqhFgN3vu14SBKYasMcb1N5zTvP6DecJk21rVXTTfSqVZr45BVgPphYxcqhTqnvJZa5JaWckuGZ9XSL4w1d",
  "key15": "5xCfm49hPWcyqEes4p9NVdWQyXXM1QMCVovQyPmwERWbZLvfD2bP1sGnf58rDkcheW1662xFDKJG48qocMHseN6Q",
  "key16": "2FE5MCM6DaE21md7VPszVKf7Mrba5C65oFHpT8M2cfNs4ZqmAhz1YdfEG6WPTAaJ2tD7dRBqyYnDGyUwm7SfrmuA",
  "key17": "2inc9Bo4sCxjYaXY8PsHb3NnD9a69Vbb1piV6nEQPxYbx2d4H4ybdmQPWUb5rwdRK7HrRpXWesHj3wpJLWh98qYr",
  "key18": "4LdhhWgbyE2QfcyKLZXN1XyNuYNC8kb7Brw6EBcNF761itWkZ1FnPd4ZZuPteSedqGpmfY7Pbta9DtudHx2mshzw",
  "key19": "BnpjyWtUvX6gX2AVmvRFVyB5fxH9qfQUwjAuAGjTeLAiFgkSUvmwD7hxVWC7ibdMmSY64MqG5rEg4SUsbDceRX8",
  "key20": "39aSSteGgbRyzfkuxwv6DjpPrC1sxgb6sjZCt3XviuqTZE2Qk7qYDL4gzqVAfxh4mfBzA4aMEdizExYBKjkSa1ZG",
  "key21": "KbDobR21xFGTREDQ7CKRPn6afdkdoVQ9SzH4DEBRGw8mv2REdH3Bf9h1D9KGPgvu5vTK7N4wesGKRSRK6dm72c1",
  "key22": "4vM4rvJqZ63mUXV7H8uEXRLq2SxVJRe4xLWTBjpmG4WEJcfPmjmhVGrNSiwsEAnrHqASmxrgbsyfGnqiS19cuhbe",
  "key23": "3ZLuEqJCYWjwxtkTuydRa5NEL3QAgwSVNAgrMCakvouZG9nHebtto6vNZPLLEFJNtNDF6MxviAXHTmcqYKTwmbc7",
  "key24": "3LRPxGBYdBPDgDeJPBW5RtzF2T49Yjt22eDuYNrYhuybyoeysyjgrduHAmHtspCgk8vcqwEymSmzsbv1MDjNQMQv",
  "key25": "5yxhEo2NNPjyHoG5gpBMG1j9jLpmBAn6WTMC9sLG7pQc43kN6RbPMnBxPL9CBtjecZAu3YmFEftnSp8UBSfkMzpB",
  "key26": "2Ej2DENdBAEb9Ki3w8cV6Nfu4dNs1yNBVLHsjV4TEXG2s9zGtYTDZp64xwW78JpRAktaPxHLkhtDzpPuPEds7N64",
  "key27": "3MRR5JD4piNVu5s7Kj6VzcBeEGx7hLtSdGw9h2AtJW22vJvqLfBCSKdX7o52V7G61LvKwvKk3WZW25wuNapE4zec",
  "key28": "oj4aD1LR4LTDtkGpBazFMkQxVZtXjZqd4b5U1Cu9nVs4puvMyRif13nea6kTM62QZgW1qaPE4xzwT2sQBGWJPbC",
  "key29": "PUTkueo4Rg1Pnx6JSQkd4uT2KKRamU5YmGfLh8azFazQMuaDT79VExV9cdvFPraZBTHjhJuQH36ZZ8aEKp5wKU5",
  "key30": "4KqVu4oYE8vc5TbNfc8UxhfsYPJoHaNec4KAphpwQ7LNAEffxZKg8TwAdVV8es6KUsoFVJjWkikRbfPDRVwsHaQE",
  "key31": "m6mKGw7X78ggtZ54Y2ML3YPKuB3KofZnaZgMT4PdaURSFSZVzKCbPJBq8N2GCeAonzz5TDSwvJUej1g93bnTLp7",
  "key32": "3YypLohSF1kMF2jjXLVtEqaQ2P6JS8h9uhzRsinxfg4D1Ga28UfPja3zAonmMTiAekY1FfbHDyvoBtDvu5dWqKLC",
  "key33": "uLxpovwtpycJiwC4vNm7v5n5LLYmnCqLrdR93wpLqgzsefiEuRi7m8TtriEbxgLLqJETKoQ1TWsSthT45LQNDCr",
  "key34": "4U58DN6Ffduk43nwzRy8MoJeFXd3FcS64zLRCEGgnNiLVVzecBdePD6WPALvFp4QkURzD2gvKg5J6MC8qBrZykQb"
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
