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
    "2WtDN7GNmJB2wNqhFQYXWDxSuEZonjGFL2kCJdMn9bKghpy4VhaUqyBBppAMXG1pSoFaAA6gwyc5zMadegVTTaMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22M7jHfdERJzdQMyBG3sQuYFjtGMvPZdWLuXkWLmL8KKTqRFb1uFddKoXGGvKPK17vTHBzGdYv2zrxHCSouygb4p",
  "key1": "341jWrMwEQRikziSRbraiGcxGUGuSEYpSR4XCThKGjw8uDaHwKtTFc2tVmBsZ8BTmPjWmfqLDwHwzaiMua4mZKwS",
  "key2": "2XvgZ7iG2RD7NJWBxDKWB5Bi2mhGLoiSX6iDPgutSfP95GhEn8R6oNCCGwrCgZZF7h4GKTvVrRYYUZDZrgJtXePB",
  "key3": "5uiAK4H351foNKQ17k1KmXXQCgtG9uAERiSajkJsYZcc7CP3N16QWsmoJHTrz5m8UijbeX8g79ZVR9d9CHYvLU2c",
  "key4": "2sRfGJSMkHBoSe5AVBhUdEo3Hq8t9QY8jpqRABFB3Cn8yeRWByXAKeg1F2ifk5SUDwmDf2a9Y32n3CFVmhLdXtGW",
  "key5": "bymsrok7R4ej5wTvNQADSwVQP8puE5eydm3faqzgzNE7zdPiYsgzGyNRPACTV4NcvsckPLEoVUxewYh4vv7gG54",
  "key6": "5X3mKvtmQykCykrcDajmmYRrBvDtdZET3k64ikRw9jyjvp747QFX7zeKEA6YpCCno7m5TDDhyxLKDPYtFk4YS8pd",
  "key7": "3FjpiKoz6t21m3bA6NVdaNFBC57WysvKwsp1GV1fTGRcJxgCV3kcwTji4xduN9pnjwXepqsH34matW2DFAa3UFRg",
  "key8": "2NmrkBstNnoo5Zy3wqcmz3CdUGjfdeAsabUArnBS7zZWcZ5RS3or7VCc6GEMDXQMNGXY1YxmE8wFY597eZuLsExw",
  "key9": "5VxuJz2K9MWYF34HniUyhkrpYFGP5TAJVjDEHrjKrWCkVc1fbSZECatSBQJP2oE5XsSAWCgfvbg1JycqhKiSZiDa",
  "key10": "h4mTY83jN7ukFVX2QxoPmtzoiFXJMLEMKkQZ2Txm33rc6N7ivGp8VtcSt2D1GFvJwiSL7K9Z7urt5WgPvWUKB5s",
  "key11": "eAi8YShQrt3KWTC2n4aG81PKU4GtDhX5e2odhnm9q6HnRD2WvN4PBoqoJn919R1BC5NWbumuCBTUKURBwpD4eZS",
  "key12": "5et9wmTq4JdxUR1ruQg8nkwR3AKS7BC4MULhuXmqFpy8wxiSS7wsxX1exqC5uChENQ4fTUy6SPTuZpXd6Rp5Uf7p",
  "key13": "63iyV6S7EXvUsuEhtL5vvnLhtHc7qvMUztUf1uyEZd1dHmBkBDzWDPfnRdFhkHtASoEV1jDFXfxrwmwpuWzrxhhW",
  "key14": "4F2EnfF75oFN2mSmXncXyAoPVwXvc7h99do7JcbTuktvumhDTnHSpUuuAKvEt2zLa6TKmsZAmfjBqhtrSadDKknh",
  "key15": "juoSLXdv9HWkxHkFVbq9GVP1yTqvdP7bcooXty2VRAYmv5TfpTpRbK9f8wU7Au6FUnLxSmz3FBAen4p1oqg2guP",
  "key16": "3xm2Cjfum6qv6F9XuiTdQwS5mzsiV2XLXRn7vgpiFeb2skKgpHx5YrS8y3Ta7yMBcGzt1mmTepJvaJtGEo437zBP",
  "key17": "3YQdaoutPfk7uVP7VM7xMTZKGxL6TcCS2B4DH93m7iMs5pkS8zzhYW5dJLh3pngPD9CFwU2tHciqG3k6twg7CveP",
  "key18": "5BjwJsCUJsTYvgJmdEHC2PZqVR9KDbatpBR1X4YdDJa9MEVPWuQZScbpPzNEatD8JQArFNDMVU752jGg8iMcR5k5",
  "key19": "8HgZi8GRdbLzjmfw8bxHSz3qhAfF5AbBpyeny3cTggzvZ25E73DMUefeYWnGqQu8jbrDtCnZ7RxR2KSQdMM8GK5",
  "key20": "2T66SL3RrLXxGXgbBiDAexeFMy12srGTzREpGFBp1HeefL69rQYpJFGzgdLMZY1ucy4PT54L4o5QoadWJadeUXWd",
  "key21": "5UH2nDAL29Ex2n6XnUpcF7UxztEXHpmQ2U2kSXFcQxAYc8ZNAp9BNPao7uGE9oXqbFtnyJcNR5stfch25z9a6W2o",
  "key22": "53QotPpGo7wTSBUDUujPTvssS9p5J9cbkpTzPSfFNoh6Efv2ozzP4dKHBKNp4Lu7f6qbkqprz1oCpAiSRQVCoHy1",
  "key23": "4KXsx1BU8i5N8qE2DxRg117mndTTb5XZywQfs6iZt3gcRtpXz8kFJZSHv9bVe2TT8nrZcivScVpGKPHRZZguHnFS",
  "key24": "3U3653D9aUCgvTdvNZ4BT1pGGAbXAPXgeg9AqeXRWkptedfx4naMMQjkcaccmTant9NChTRtkHxJoJBjKXR9S2Wy",
  "key25": "3tuehMSpaESZD8vHxbJ5CgankoM4pqd2pMzTjf49X5Hbv9LYGbAKr9FDdKqjDuftjA8qTfWHomM7YQ2idPrKmkpk",
  "key26": "qsGQ8YHVys6Ytyz4mNXrHmEUeqSVFTq9ZSiXCj4AinCH2cAgoSpTieDFMmVs1wVKxRYnCfEqGsGYratAHM1JmfE",
  "key27": "5drBaiyMZxhLJyvC4XCqaHaWq6fM7eTrZXRRmnk8ZFy6YH6Qkjar9oTGbZuhtFxBUUZRH9BoGRc3rWVxCPyr7brf",
  "key28": "5zTMefxhGUAL25y3gKDZA19ZJgwYY5wgEWAGbscvAprW3PoogMMjBMfwdt6m56yk1NanjpBMTojZE81YaZUq8vsK",
  "key29": "W2YWVPzDuPokAChdmKPXWjKz5cPdwM43KWqDCRt8asmNipz7Rf35dXcmya6E7yhcszUi46tsthjsm3mcTnHAW7L",
  "key30": "67mCdWFc4aZaWGPJXweFjNtd16Aw7a7crvGSFCDZfrGeu68H8mackTA9ubHfypQQtbrWZmTwvzBpwwWWXp5FJBZi",
  "key31": "5Kiv3eqJr8W9wWFnrJ54RhrBaNJXnyVxesGfcqob7BAvx5uSzWPnHf5KYsYP7vYkzMLCWkxExdgedqUwiJR29qL2",
  "key32": "5uq8rRtboHwdNu784bSgAfSgZVQtMp1rdndQDtfVVLXwsySTQPNuE8U35x89wToyTzhRPhsTjBkmfPw6x3G3C3qK",
  "key33": "3crthDLkUE9LjYELM4Pp3S8fZFq8s7ac2XGnrngfuyBm2DDNsaqtYEzPAdxWhdVeHJE5HsL68mo7v2fSKxGFbERu",
  "key34": "3k2j6iMH65ke3aUnP75owbxzXQEHp9zZPVd1rgMNX2YYQ9uuiz2zM6r6fMpf6Asv7szoGtG2kB6drzxT6hmPgbWZ",
  "key35": "2dut5ePA1t28Qn4SwrcWyKk8Cab7eXmbGkYZN8TBEkrjLjdiGn4c6pixH2ypU67gmCUZMP6a7k6FJUkMPZYkGDJr"
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
