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
    "5WSCzqZ3csLrRwF9YF7zqJ8hyKAHwxzanK4pvuPnaHXjSCnYHvxDYmuxPhceNankM3KzDodUUrqMTkrvFeuMVKET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zwSwLj8DJvHWfQNNL4cbqQurqLbVtTi34Hdhn5kkDY92DnK5eZTkRDVSzwfmFTxD7ZXFteLK3o3Jr9oWHQVjVfF",
  "key1": "3ywZYjhAQQJGC3Qy6fsVLjjpCydj489Vk6Q44n5aomLbkpAQFo7JUeiXaG11Qjmtij5jhsgztGF2oRYxmfkeKZua",
  "key2": "5v2Dj3EgEJyYPuALrErpa1MbVzhXAS2D1J3cDPpQneCjiQWsewAQsq9jTSoqb5AtJ9MSEcR6zKKoGEJ4ktcmkUbV",
  "key3": "5FoAMwMyET3pctvMHxTCoZSibxYoaTPpijKoiiwoWAFMBh7YtTz8AhKSiYU5fbd4ULJBVCiYkZxo5cWf6sdrMjf5",
  "key4": "4zFW6nHi97sspw9egWkX9SPfEfuNN6MqeobxuNGew13HS3hk2XgpAdRhQTGgnfvqLXSThjQcbpXs4To3WV7j6NGZ",
  "key5": "2x188eGDaukAzVUzwsAHLRzYgsRQSivUx2DQNseoSXmuYkDTv69WV1m2VBLq9ArC3kHE2qZVoKVa9jzpLNqvYKuw",
  "key6": "4oho4WR1EotBoa85YUwT2FWxLtUrCXUY4CLgGt2ntSZrwcUaBC1rKZDhQykxma37PwxXkPR1cojvta5eNMza93yT",
  "key7": "3FkoSK7XSbHnG4DBpFrbHjudMD579DcZPiCFgBh4yhJ21JSBnqv5YPMPAxpXsyCkdvYSgQFQiYkc2QMtWcK5yFhQ",
  "key8": "4W62MabE4cepRKEwC7Nbj9EAr2s6jr4AUfWkW5aWsuArhQdHPekGrqJCgBTaHKWZrV9rEoXycUctYhB4EwZAkU2h",
  "key9": "2awGnTTn9pBVYm8HitbDspuePrSrr2Cr5ERBndKgiBhWnSfhBjC45WDN7899QaA5RQ4e24BkHgahEm3DYasiAw7e",
  "key10": "rNetd7devH95DsFgJym9LUwiGKAimawZdxTrqJN1sBDnUihAXQmUoH4WocGv2VZVkdtPfu1Ami7qrR56BfFMgQK",
  "key11": "Dcb15mRpEUXM86wE11cbzN3KwVNociTp3xdBfwT6yoEFA9Ktc2s3ug2e6TzhKXWUxrQqJ4FmpqDA5kiLyVHXypd",
  "key12": "1oDXLcpUeqrgSkhPLLSq6QqFXtVpPm5b2jM6p1WeKWywhCLdk2SSjps6CXDafXXbDU1pwp1fM6qAkVAMUAiKcuC",
  "key13": "4gppfak2wiD3D6Q69ouw2RcFKhwDREaFFrXuQKPKCmcmY1tnSjdFyrX58QwTDSTgLcKDHDK8sURMUzqGdY6aSku",
  "key14": "jykvTrRuAjaxFUBz4xWgF77oaU9BBmpaFJmWtQigjbXihCQ533dhzXpAebtioA5HhwbeVY3jaHnqmLJ2PQL4cY3",
  "key15": "2NEHqbzKM9jHnw3hjPxvo4vGWFa55578cN79uLXiY1td6Pum1pwZhXXbfe18d5HeJmNeJbQkoCVcubtTYChfwAYJ",
  "key16": "5FGqMYQtQDCxNNLW19H2bk3uvUNtg4sbKsZv7yNyB7UmkJ1vhGSDrqX5PX8vhfLyrLDkv5eRKGPvxyJdwa4iRu9q",
  "key17": "5XiMj1WKLAsx1CKE1Ydzu4XXZqGb4GwDs55Jpc7hSosQ6DXvnNdA5yvjtR5e59yEfGgAxj4J1pfdda5BXHDpxSgj",
  "key18": "4YUFNBgRA31cMyRjYfCnwRuArxoXQWXtYeursCJXP65ip4FN2BNt6VedJJynyZHoAmjTP9zdBjDWbrcvsmpeiwio",
  "key19": "3tb1xiMHBKEfF3bstKZDm6gcA6r3Mjacy19S8raASSnHLh9di6fibhdUNDzkGvMVk1wxLwthmUmB2gCFTpj9dM5R",
  "key20": "QMjVZS9Cn7VDAbcztU3ni2yJaFpxBbZEoy7bzN9S7CXFVremxqJDqiqt4jzs4rmFVXzEatxW6qS7c6GmHwwGRbr",
  "key21": "5FLZQMoPvG9P2yZ7Bf6NTXvSHCHbHhF5GsGkhuwpnYuGtaXU6iBD8nFEEBxx56gqToZobHsAnoX2WeUXnLBxJNCW",
  "key22": "3BoGi84LqDXfumBBJC1DJSN18Kcf3DXhPb27eEcQKoJ3UQYL8gQqWuPzWeu3PGKdecuNfdSoPmWh2y2vmqbpCdSE",
  "key23": "2Y29ahHQAgELkfDXJXM7aZhud5F4HGgzcKhwmUJcUoLttHZUuvad3xeMFEc3K4TDqGhTtSBEJYNCJYoxkyy55uiL",
  "key24": "5HvvHt2VNo9ii8emkXzUvjBSvFVnRDfYAFEyLJMvj6FKxWWKsK2Rwcz7YfMpfYmUpq18SVnP5vkA2cZbp4SpKhU5",
  "key25": "PVEFR3FWuVrRreJ5vnaM6Sc6B5xFJdYaqx8xGbh36CPYqojs55jzxWSubDiTkVSkoQq39gZsDs673P6RnKKPX3a",
  "key26": "5iMKbpeAbKZ8Ma8CSE2yhXrzxjQiJztU1wJqfc2nQYWyhnXUYRDAE3myQqcsLSmS5VpiwHEszvEmvbBesz49aFH7",
  "key27": "zvyoJ5rfQTrtGSdkEmtLjwm5jiLF7nYQuhoEYCUz8dPCkwESpSJwCTSUEzgKEGQX9eWQHaFLM9PanpxFBWm36Tt",
  "key28": "5pT27YFBgqhNU4Y9AEaWWUjTaj2mB7thyDFr3ZUTCTgRLSvKqkUjhWD92urm85KyHt9aKJvaTaBzFDqDxBzHVUtP",
  "key29": "2EEsAx5QCnBEfBPWoSgAhH7Dn19g4EDpiJyujFqeXi6pkL67no2tSwuYPsVkEx294edrh3Rh51nzkEghxUSzU8e2",
  "key30": "4wMxJ28XbXVFcg4XVANVYDqRcFpfcKw3WUt2MZNEVUsEGcdKrZyFwFjcqZCXc3r91RykLDThRnEhJySgRbhBhyqk",
  "key31": "66isZY2aYegkiorh2dMRN3GKzktj4bi9HHpGHfvtNn6z3VKZyza9HXNrdJXJbbeUTf7nforUQBwa13XF3qDkv1Ai",
  "key32": "4JnLd6X8JbJfRoEPdVYtdnCuMozQg4yJ49q2NonB7PJc6eLsqPG2p2U3ZKBa1t3sG4xZPy7V4BhCw4aypdss9iez",
  "key33": "rMs4iR7hZh52PtAWUGwKZjkwaebEqvJKzgv26zghFHEBeRUDrqeL3kDc7s89YcmHYKTgqbb9GAmUDqtkE8UCoDu",
  "key34": "4V3FHiLRM9brMVQPRndu3CaiNrQggFRDWf1UqFeHPGaF6uDveV9917o1ueJp7q2LWXjeSct4UvxWsRDkeb6HBNnX",
  "key35": "4SokdeLAuq1nQkUVv1azss4AvGP7QeqawDjjczoAKihTs29fcUA36UCxL9VgveHFzMKFVJyZavUTkDwmCW3SmWoN",
  "key36": "3T7NTnMKvHuZ3bE7ZkkVFotX1eeYuQwRbtzdcfa7W5Hf2FY1Hwrp5qZq5fSvtjgzF88EDbYV5LF2Ayr3JKTYLt9B",
  "key37": "uxa4U1NBW5pUjGzxnhfNP6cmCBGuCJZ9jG16GrqwUcZT9eiYV3es8G8VyKikQmyRqCehfPUF4JrMo2pQT9i2QNB",
  "key38": "33hP2hYuYkxS3Tyj553wh2u1RdJdVS4HBvEtnuvHd7n7JBcZHpY899e4XVFSg6EzpggCJA6JfD1M7rznnsbLEYLn",
  "key39": "4yEPUR7iDJhKPtqhW6wfQBXKJoFAFQ2jVWMNrLiN6qf6mRY2Y7TNvcEpxnEsUFWmeARZPZuLsKRHNGnFccnyt82a",
  "key40": "38pCKhDVqqkaNbbggrg7D583mi8wutTjEgBWj4s4LVEN6XbC8o3BcMagigDmdrqmLBCzMbekbtWPLKTbEkKx9HuB",
  "key41": "5MQCrQmV7Rtn1FbWHykT6tBeQoYrL3mtgjgStLhfpNjRFw9J1Q7udLESsohrtr9ewWHeCBjTHv3vsM5RCAqas647",
  "key42": "2CyJEeGqeTMQVqkWkfGiVowEfuMsS63g71QwPfdXGTxh9EUfGppAABdSq1Hi1xYU1XTMBaBa8AsrtJmdVrqEoWTm"
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
