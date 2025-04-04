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
    "65vX7gSZ6XnimhibDdxMQVX6v7LwCTfrmmBPwgTuarMKmcVi5cggsRPVvFvE5JTHPXuTmkBje9tdUbBQCjMEM8BB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zW3R3AMtj1zW3rtbEusARpdq8MhtRqnUPKD4YBFmn8a2AVRHW6FfnqrqeAPfW6RXKVeEoDfnKnz2b48vZFsVDg4",
  "key1": "42FQoXrs5Z9UM3wN9zbfgrELtmfVppzryYLVvrK1xoMXXQKiZvmNPAUBSra1uEPdWvm46sC4VUqYy1Py3BsMD4Cp",
  "key2": "4zofVByePW3W3bKkjyu3hHjNJxjP1Tebmeooi6ScXzeenHhxA9Xr6ertVy5WGwhA9h2LQpMX3uBfRzNszbhJZdw1",
  "key3": "28D4TKEe4rJTuDHiMU2LkWGB9zB4LfXnLXBjco5ng9JhemAabsWCkvhwisfiZXCMFbKsb3wmXP3GkraHyYVw32ne",
  "key4": "24WtsVFJ95ctAyDFfLgDL9HXannkXxzQbLEh39SALrRiENbi3ascNSrNNGyQvuzGopyL5EvbiSuBuo5TnKuZRGaB",
  "key5": "2EHU71fGKbJSKf5GgJ1DfdsoUEzhp7zMHS2ukJshNNFbbxhSbUx1oacNJN6zaoGSciugdkSBWKjcc2NsW8oTnvhM",
  "key6": "2YJr9xkRjUUDZzv11LKcht3UVSL9VdvuzdiuWrTuEntzrdZywgHazXFJeZ8Pyr3uZ77Hk7mBB2mHnf224kRpY7TM",
  "key7": "3F7QK7ywz397Kmrd55J63wybJgvFBFivNkjPuap1S5L7tnLFiBhhhUk5b6zGq13aGeREV58X93u17Je5gdaNyWJC",
  "key8": "2CYaZnPfV77Mi8QPAzH8rrcTawyVcMVNUD7qRoEbRUcay1ZroLM9woJFEdSYFNMPBYEkS1kFTYzMrhmmiVNtcS3T",
  "key9": "5JWgH7NNH516uQLFZmCNHQqMkf7Bd4jJiiHfvWAZh2yJC7Kt5KreHoRGu6Rp9nWCCKsASfByp5wS4d4bwC7wUrRH",
  "key10": "2vr1BjAW3qwPjeS6VpHY98tUR9dxcFmgk77erkKXa85DAsJTkdumiLqc1njH6uHx3us3Bx7LoxP22ibaeoQmFZFT",
  "key11": "4HQBsXqFCFBc9xKnqK1dWfBpBkiPcJ7RdxddkTw42etHpAry3YB2TyNRp6AdzCo99cFBEbXjCGwkiN8BWwHC2Cvz",
  "key12": "4DGSsjuPbThtm7F1uGinGfGFTCqeuFY4h47WDTGErKvVEfYFVi8Sk3FwBdRdBd8eKjxJi6gFW1KqG3AcEaf6RigB",
  "key13": "5NU92s9ttGgFuvaTawhDqgDxWuGNq8TLbAaPYZr34ksUaEHqaXd9QcJWpKsCKMyVB8guRcxcwYBnsbxRVRk7Q1UA",
  "key14": "2gFEacjs6YmmpXrgcRQnjqFM4m7dyPqwcqb7sYMpdMFKm6JxCVsJ2vChdKYcZeTn8TYDXc2pJYSEJVsTnvWbeKo1",
  "key15": "65aSfv1fYzgKFzPTqnFVLrqRmetErjZ51WuRXfNYLVMoKn32JrahKNJVFpeEeRtzqzTC2VU5DBL9F84ZmhA1vYXU",
  "key16": "41Y7Jbrxo2JCRpv1zDyUW5e6LwyRMGBKGuFwZYotwGkVea6hykmovGQz6DTCzf9JkyRneKztVjsk6kUjtt3fo4fD",
  "key17": "2ytDkvfyo82ubjY44dwkDteuedvx4or5XSQVdGjVpaXKxkfU8oS28L1WzoRGfwTMrvq4S79xfi3JRvKA2PVsXr86",
  "key18": "2uBvSwGr6iXYJcyTXqnGxGnxMiyS5Ac9KYhGPn5i9H7BrSiePHKJm6ULKxYR5hRhFu6gZpMgCtuX366Kh5dhtDTn",
  "key19": "LCdCRg5XrqgDBkQ3YSZPLVLB9CKVN8wFfiNbTsbgngcFchUY6zEAqJgPb5HUaDZQb3bH1fmtGq5UTCq3vgL9JSr",
  "key20": "37cfSaEjKiWnUufKB3LCfmmzHa79jj7Na5WfFkTrPmcjpTpJV2QxUS7YjAUtajkNLTYdNrir9pfvNPWofu4Zdod1",
  "key21": "gP1dZe9ST77H67Fk1piCo9tPi4SpfHZzm326rHKByAzZPwgZ2Hvw1apNV7LWr5vVUnoyr3u4vP4Zwu5Q1LmJ5CJ",
  "key22": "2n9GiTujEsjih2VnUfgGeWm7LzW699mzetKWRHXLvTWQTE7hrKaezk59xW4xSnt3i9y3qQPBmjyoiJAjRZPERZmQ",
  "key23": "279Ytf8fPU5k2az2rChNc4fAx6WteQ8MqfEHUdNZ8nCo8DwR8gzQKDrtjoL2bw1c7nnCrWFxAuxmAL7xHZSedNGC",
  "key24": "5ZGtYNiwm1gCw2ZQRSKL6pUNHp2Zj1LkZo83ey4bB4AZMikDUdHRiLY3ijSnq4dcMqFtDpJjEr9uQ514oBjJHqTZ",
  "key25": "mGNaTdaLfCbReziPUXA3ngRyLrJo6A7PSAsYckNSvG1nKjs1PpsJZEJXW6LY78BLKJjQbFzaMnSGPHJ6QKsa3qJ",
  "key26": "4xRQmCkDz6vMBZvxtM3njqcnKAZQBzP6SFHJaPBj3Gop2msK8soBvCu9SwARGXSpUdTAxijMGm4Wctf2qrV75Mh3",
  "key27": "zcX3yFS7HgzDcfmH2feJUvyfm3bNKv1x8tWzpS75A3H2ZSa2Jp9rki5mWC6xRrR22pdtnyi4NfUaj1WN3GhJEZM",
  "key28": "3oPzj1DeayzYz9fUWqijSSWxddhsuPEBeVxdB7b4vkqLNwXRCVioFGc5k9nJbRMfdgg8W3Ugj9Qm9tjQemfQcD1s",
  "key29": "5eFMhwyZo6VKSvw88rE4jA3a98NFxubzTo7SBJwaZdXTcGdvtQWCXELY7MYTf6rq5KtYGBbUxfrdsDGrmpZecoEV",
  "key30": "42sPkDEYJ7dmqFHuSXPpyjEr4V1LCN2nTFroRbJoBtRMJdXVTLZUrRjtUo7hKQZMM5k9WVmzdtUrd78hV6BAryCW",
  "key31": "3XFuA6uj8KjSyuV6i4ZWmeCCmGtVXjtLXxVeirNaj4Yo5MjDb9EptqMbJ1d1dGjmeGw8LeikSy9YBdg4YwdNAX7K",
  "key32": "1JYCeZ9U8SxS86gDufFHF5ZxhVQHt7XcezPZhm2vXZAVvRjcDdhgDHJm4X3qnt8jz2rhisjecsuXwQaGNeZkciZ",
  "key33": "3A8XJXc1Tr6fg5eL2ByK2XuRZfQV383Ne8pYHVqTgXLCWspKsnRkstuJdXUMrr4NjrYJo7kV9kVFWtigV6UYkzLT",
  "key34": "T6xCWqG9aAhXLgyVeXCBHhY84cS43LqU4C8USxtfqA5hkLbgYx2vEzj7M2CHFNQGwmEEjURr5GB2wbtBt4tHk1J",
  "key35": "3wqm4y6kKDRHc3oMHDDACL97UnShVX892VESLnYvnbdxSc8XyYSnnzBPHScbggKFQrftKdKRVHmE8CK6UzMF7rPd",
  "key36": "3aSWya6QimfwGT4NVzoaSLuLn3uaeMhdv2ouT11RijgGEc1Pw7zRA31g4WEctQPgycurLfASZzwtWc1bxQxnyPXN",
  "key37": "3Zg7CUzo3KKh1ucje3htGjHjyhBH5tk36vZnSZRK3HJvoUN8tC4qr3qYngn7zKqDThoy4F9G2wcdzAnJbFdsGKeH",
  "key38": "669L5cLM8YbnvmYBKQKSsKZSvg6wUxCVXwbNCzdx87AT5xWvKJdAaPLYZrHBnh5e8eQRPQjbJB8bNZLrrVhcqbY2",
  "key39": "5p86rFKatVpfRdKnapKP8YjuLqZxVBUjcipvWXUpds9cC252d3XbcUYNC7RtJPJMox2PC3n4MRhMnZnXjSGdajUi",
  "key40": "hBouruVQEvGmS87YoD5qpbt9qq81jy4CVWz8vqjPMULNVCTht26hJxFPv46x66B8ybnSPsuskPMVrS4LeMDH7SL",
  "key41": "3LGwfc8ssybNpcQJ7o9fVFTGUH4ZZuhwFZKKVnH9U5JwkDrgg7C8ECftZ2nsBDnq6U8N4QoLEQR8Twwr4o26mUMM"
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
