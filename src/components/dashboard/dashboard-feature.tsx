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
    "214g2GMYf4gV92psGc1h3dJ3yk6nPqHZG3ekVzpkQZnbog4m7FyZxJUSzsYxneXaMF12y1Q6SeCv4DYgXV53m56u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nMGhKjTRQy9E7yhJZss5v5w2bdmDf6G3p4AKNEktJSAGaiGg9HP7pD612AnjW7BFL3TvqyE47pqEedfQ2WHpQjM",
  "key1": "2UGC3e8SZyoZfZDdSkjcNmsgVoHjDf9FHvos3xgzHgtX42GqhmrdDM6X9xEbchp8FSBZQWd7NwdtthwJgFrQpprH",
  "key2": "8arkPtaPvQvc7ibg42nw4Lo2hd7RKRvaa7UYRVQQq46JyvqebFFReUGe9jkL5yb9vCRTw2eMBKpdzEM6BjhkjWy",
  "key3": "58QJcdiD6DEojXpXp3Gzy2jRCnQKroqEAVojWsw1fiQwS1XwdwXUVWpW2TynEyJDhRXSVz99k59NJe3QdYGnCUr1",
  "key4": "5Aqrgx65FLyXaMYAqMadoD28jyDMiFtk5AgpRSfz5YVYiephUyVGir5dMiezP248oRiRuHHjnvA4v6hjwnBVzysC",
  "key5": "5RKgR2eerXUBeWc1uGdrYHQHMToLif9CscTukYuR2AZUJ6NQ4qwkqxjZYfBhaTQgpmbgwebHCvQHX3i1pfaUxHn4",
  "key6": "5zcvg5nf3dY93mmjpCm7Bm2t9K2hSys1qZBDJSu8ii6FmJnBHhW9QYrfRux3Scq7roZu2WFHLctp9iWnpm9AYTmb",
  "key7": "3v7nhFV4umGCEQd5foNnTKRpvjr9HFp7dUp2EouwMYrF75gyShZAUe6tuq4Bs7RMFiF1Ue5pLeKy1UMvpjrS1H5d",
  "key8": "gfFp3RjqxFnfDL1qWES2u66oMeZWaEYAatBnXDDuUgwNDfUuUejuE11WCE8mVh2Hj6xQb2LLWw7pEFT2tWgSvPu",
  "key9": "2LXJm3iThGEBz5avQenSNcfDxNmvVzDRo6r6EzrgipJjJoTMeWiRCCBtq4sX2P3MmFNc5fs1C7YN3Kw7xt2x6DYk",
  "key10": "54kLxuBd8nMeh1GPRB3nLQrwwPVaH8ujQnBtr9zkaRSuVaAPKBkLaF9VdFS4ReErVP5VDdttiA1ugcx8Uco3yP6f",
  "key11": "4KHeDWe31z1YTwYo2yNQfET1DEYgqd5FysQzRCzxRH2zjHWoQM6pEgYN8sQt3ZUwY9RzvJXdAtC4Gwkd2aM2qDrj",
  "key12": "4oQJJpKtVMA1qmYMohK1R2u1yQ7PRbQQyArkmWWMfRYDkPDZ9EqVv6HGoqnBecx1Fk5k7mbbnUbABxa3RVHMYYyK",
  "key13": "3wbcsgaEDzxQNbJGuSBR7DjWm9WHBzkHA14DjyoRTiMmXgfaRugVEwG9odDV7iCuxNi51rRXavTFkoRhRuRvbgS6",
  "key14": "2NmtJkruZV3daS4Eq4EFVAhwowRL8n7sRUsAkr4gdL4Ciuw9yJ5FScbzE7fETBKWyXj3dLe3pHdbXRgsS1LP8YkS",
  "key15": "3JHMnnBYMpyMyJmynjZtGr8gnUExWfPtG5J1cPvESxjM1hLdftre5KqFHWiV1TPahejREmttkYUjpwtMyfsXwvQK",
  "key16": "4GpfJJVroc5AF61oT6hTX9rkFGThtTHyVto9t74rMdFvpZznz1r5EKroxh2AKJ3PhhqjUgNK7VGarfm3sxmwFfpv",
  "key17": "2FUYZhKkWEEmkXf9uM6abutasMZXdFezfYrZmMNUCDYs3tz4bz3cTtGYtf8nHJowSpLSMoHoLda5geDZ8VT4VLXr",
  "key18": "54PkUH4hSgZdBqzbfXZmdhqCBo26d2foKFuo7f8vL3fbAvQYgKtRq5N2W2Rxs2vrC5RkXDfy6hkrRAhpm3EY4eV",
  "key19": "5ijrf5tgXKRJqxS5upU3SCmPUjh2dFKoaHrqswxcPQjqT6smuR69ybvBL59XAb6zyPvqmnKAiYBPka2Sphdehxip",
  "key20": "5btkki8dsC8DwpDXXnh9pGHANLEWNQ4EakM5jE5XrQrpppdAtR8nqYhHHZLzfh8ri5iuUEYDdr9vNPBcKG2Dkozk",
  "key21": "5q4h27ZcM6qhtFRqrnWxhPtdpB5ALPLRRQwkMfepJqceEFM9dTF6KbcJ9EqmVLkqDxbMEyGr3GMz6Q3Wm17fzkYg",
  "key22": "5iQTzsfxPoDdCYdmEva8c2ckR6aVdLaXuEr3w8XyRbvxkxVE77jsUmWoRXvBV1JnkXFAzQpXZ5b26sZo9b8zT44G",
  "key23": "5LuuZVLAMJbDVWYrZxYAt7pSGw1rrkdoxZpyKVV8NaE5SqpQL1nVeYSDyYQb9XQSCtKtsuiWHRm57pWijXFMvwsV",
  "key24": "uqQw8cL67jMPAirQy9BtoFQZFHuPw8KULrN1yiFAkJ4EasLYbGtEmfN73ECnXBXHSDWsn2ZTyKnkvdtz6mJ9nng",
  "key25": "2vYBK5ds6YSnKs987fKVdfud8tLfekj73JYakyVigeJLzUx1Diy3f2tmMDQHWtym7unfcQ9Fc3Fp1KTzgEvxWsYv",
  "key26": "3yBndmKScy4Chhq9kqSQ9ZtRdvV5BVzxFT2UVpJhViHVziZwNMtv1mdw1d1ZqD2aDmCRQJXt1e9XxevG8uQ1dTq7",
  "key27": "3TYtyYpzxLeFsw5s2wMvx1WYGwPNVQJQTJ6kywm5bAyTAGDVoMseJYdHbpAig3m2je67DVbXjxewoTt5REU52kvF",
  "key28": "5Ueonzeb8vrVVCz6xAF2Z8AJ7PvRVwxuZ358g1xtwEoKL9bgeopcADYshzefLwq5BrL1Rp9MMXrVui5iQXG5H4KB",
  "key29": "o1B14whycGZHA7XA4DJttiJVFPaAMrvXPC5kKqUU8Cun43RPgv7wYwPdhaSaQkDo9Uib9juN9XcFTWzvfQzs63s",
  "key30": "4WgXmeghjDRTmhqfWVQbdEMoG2KcFp8pEdafxkWXXw9x83MLfS4Nf5dNCWwR6fUzhBhtgHH2Ym1KQu9VD376dmqn",
  "key31": "5he7TMBNiDuRL5TupfPmiJeco2vDmQxo5gJdJ9Tp3hB2vAvBnaomTHzgyMbeXdv9X4jrPank2Nuu1nmMR62te6JA",
  "key32": "52oTxVg5iLyeJBj6H2PbvSoNDTJgdEtCRkDnza9SzPz229cPsBykbJsgCngZWWadR1CYN1rs5U3Encv6NqiKwcSL",
  "key33": "2bRQphBcnvWoKeW4Xy3mehTqZf9MW1dQS9X8Snhk1AheK2z8VwV7SyoqfNYP69XkW2dwuJPA7K4JhyGxcfcXVR7D",
  "key34": "56nBqAmYLC9DiFkZopsQv8jEcz7JGXc6Hqsj2vja7DHkgMdCeMJJjG3jUMpRBS7i5CAeMSB9k1n9EPjLGP7REHkd",
  "key35": "5ELTxV2XjYuC3VFXJw1VESc4EAcvXkyZyykm2S26Ked5zKgqL3TtKH3RSmEhiLFVNcqGanejyPET8WM4zvPSMBm7",
  "key36": "2uqEfmctC8mJRgyWtiP1dYsBdz6jzwHz9giBHMg7aJVw8mWJuwWbi3a4wg6DsNhtLc3CKNdEhdUU5sz9LfXapiTh",
  "key37": "x8fssRCQCS3AMaWSk6zTFxKYK9MYWX535jcnWQLQczdbvEdXTqoBy6ezgHeMcCfhCz3HjHCQHiZ4VomyApntumV",
  "key38": "56eq6zJsWnE5Ci4h2CLbr7fJLK3RD5WQTMV1VpEgKYGJ9DjJkrzW1YQy4kZqzQjjgywwzqGcSkRxozC8s1kx2V4L",
  "key39": "3RHJZzVy6B8kVqZ7M5uV75NuP1M4WBby66QLhbmREqh96HRqXELMT7ddtLAWxhHm1jStYegCUJRJA76SDqhN64J8"
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
