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
    "5REwMDKQ3GNcm23RXdBSCWUBk3FSoNeg7QhmhGCnYNawZA46fYAXYw8JPyAurVX7RK5Gc1TDTNZ4BBL3dBvebtc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hKTKKVAduyJh2BqS8vdGytCkfEp52zJyJePXGuZ78EtRoPfAk2bZZzJH31jugEFFJQN5reSZYyC97fEYdAQTz5W",
  "key1": "4tDUfQsspwjwXYomyDB4Zqb2gh2N4BnxWnfrw9dpF5bCb3c5caP2mPFYfQbERbzXKg7ZVMai9qW5VtDQXXrULyMn",
  "key2": "552KErbcsXo1HcmdKCpBWkiZzeeSSk1eeQvDbf8tYCZeKoYsCB8EUtLkXzASrrAR7iu93d7dMgqd2bL9vqhTHrK4",
  "key3": "3XnFTDzQtjWZunmW7n461QimD1LqTTrdfLU3TBqhLXWDjRA6L4dSc7qpBgyfCf7wiDDZ4szNmee8eyCAeLME8Vds",
  "key4": "5XuEGouZmvLMZWpzUuJU69EdHn6mHRRpnVtmC85kZQ1gPWYGjd3N3DjSkVEpdn8KaVU5Y9nHYJWpY1vhRX5VDt4U",
  "key5": "TVFS5zsFYkyJY5zRV4ZRvdndjBP9kPtUErQCZyryQxj3b5c56SHjGjxUygbymgpiUC37m7FXt6cmHHVbjbwR5pg",
  "key6": "3wmv88x6MJ1UVYs9v11W712fKwi9ZponPhb7qLLqdEdZatXy5Rf3nnZfzkAepnD1Ec729ciFY1KP9tHRNeJc6L3j",
  "key7": "3mLF495pngqkHVcRPyM3NWk4eZwXsUiw8Vy8uia65KwTZn6hfmCGyzagC4gFmnLR6qjrKjGviQTbhyJheadRyqB3",
  "key8": "2vL8hSwvhCaGmBivzSuANmPZYA8LGaviYbrYCXsWAkoQBzGWrmgQtEKfvimLz2viNCedt96yPvdFMtd96NZuwx6e",
  "key9": "1GUMxq8PJyqSmfMBuzEJUv6KSsw4nA2apHHQgW8Zqmc67Pjp1c4x7hsAZ73nrNEtDMDk8rnh188WRmregrdoftx",
  "key10": "3aTkEQy9m61scDckcViP3Cb1pi6A1LzTTMU1NQmJ8G7yHoEJvBHbTStrJkqfgyjDUZR1FZapzUfBoPosRJr8QXbV",
  "key11": "3Lr3E8N7mwpnS7RdXEB4SPUDsgJQaukGs3qWJNbBgQbT7qXS5MYTFvLyxd6LVH47dQ6BgTaAGwL25AbVE6Doo49C",
  "key12": "5r4bdz9Jrt8p8roY91vGMSBhscNo7zWsZSforYpX4Pn2DzwQ5jhvHjiJKfcsE61JX4HEiBr3n4dJ8NVDEgsM3HRg",
  "key13": "QEr4qYQSL9iteQuCXsTCaq9fSwARsFeBSkBAXMjypwJU3rE4JQM4mhRXrqDhepNKzKb3wyafo9q86LCQxUfjDYY",
  "key14": "5DEN57Sen4xWeepCRNMKDKxwpamuTbHr4dXtBrwxAJUGjH22c1QyukzHJWBPd2W33xojfT98y9ss3o64REqXEvRh",
  "key15": "T4EiymMNszNSoFjYQ34GwQwd3ykaKFEFEeDL6vgaQYuAchKiZnrG7kaSvAXc2cHuSRCdssURuS1suA6C6hQkAqq",
  "key16": "4yQ8o5uh6FEiEerB4SLwgVezGUjYjQJZqzUvWmaUxGrYPwS3AcS9eEEH7ZTE8C6TsZ7p22sr6Pr3sstsPw5YKujP",
  "key17": "28nAiwV1z7K1QxkjKyda8Z2TE1yQMUzeSthZxq7KS6JDm7sbCuQr122Rn1ibZJB1mPBhL6mfv8kJDLbDd3eEcBsg",
  "key18": "56ik6Eino7J9sP4sJuSMvymT5HucvhuFgC2rmVxNmvvsjAjNR34h9UUZHiV5drourxVqhv6e11SVUPh6V9o8pNw7",
  "key19": "2a73jJ3KZKQS7PKf9f3kBbWpN6c2bnjPp5mPTL1vWYv3HjvnWsv2c5X53kJDbU9dLtHN81CSaexrEUJi2kkZeuHw",
  "key20": "5zFh9FiYKTMSbZWpSdXM6JnKaoTomfQYeMF6ZhP3w19TFo69qMbSQQtZgcFmsRMVEZLLmLud9HGqEZSnmf8q1uG3",
  "key21": "35rDNysUVgFrk1zrSoPAAcCpk8C2DJKi7xH2Tx3k3eXFZbjYc1RwD9jxdTenR4wxk4aPWKKZ1cF3miTXHxv4jZrF",
  "key22": "3hAoqze9yxnWebj9uTt963AFxr7Mi6jshqfcfvXEsUy2yKFkSganRkLEM9D4VGCG8NPDR9yEomqFLqQqPDHcTyDz",
  "key23": "2HPrDp31yhRvVocWR1QiyttQtkdoSw3zGT6HhKYY2amiNMKuFfQY9iNQwmkn7U8UTuPtpfBoxaQPZ3iwmrCbvrLZ",
  "key24": "5obDrxrB7wsrTgMq3aty5egozCXFMWd8ULxfhBTpJHWtxbTGyDtj9cUt5ZNHcA3fY6bngnBVauJHRuRRfFuWmcpd",
  "key25": "qfMzncMcWcxA2WQ6je7uut6Jv7p9p1vE14c1Vi5f43erpWz5tAWhS9C48PZPGt6ReD7jDSp4cMhQF5WumfNSAjA",
  "key26": "3cig731i6KYCEZKVT6dhHN8NTo1WtrRJtFMA1TMyb5DWv2RSLDTAt6qeJsun9wmdiY4jpGNjLBRhtxy6texX4EuA",
  "key27": "SAK3t8gKeSkvrLdwxDNTtj3Qie7A34Gt15YbkGwUAu9RUnxdqdtXa5AacpuVrDX6dgdJQFNM5yLugcShgfG9XYs",
  "key28": "2SRhAmMz5AjnrKqpU9HUxNL6uamagWkzTRXB9ahw4LtrHvSgJofgi8eXtPPrzMKDDcfJ4c6VrhsP6fjRdQXW8fCS",
  "key29": "3cQ7mgCaqnLqTcNcopwCiEFkarGKjbjaH9QGUAbXvV99sw7yR4TUxkiWX31nwKao1kV1wiTwdinbenBhXVvWPUm9",
  "key30": "kcmjEaeMNkZqZy7urDLAyQmc3GbuKq4pzssEBvYSLemw68HXkGX6h8TStFXssGGoZbmMNxzT6zQkDPipUdJjbHZ",
  "key31": "peZ8jPuZQVsRqsaRMxm2CZsBRXpX1fs5gwAfnGvEPv5S7Dyg6CqLZ3AHLyqmS9xST44CZretoTsnSh5yYx17Jyg",
  "key32": "2o1QzKYs8ULNJTMAAmJhPGh77KgmFM6kMJCHHRj2nYZavWDi3oAzGHV7BggSruSVX8HeMN7K3MrY7q6bRhT6LB5D",
  "key33": "2W4QnkDko1ng5yxVUPrnL6gRjZX3UxzyHnMKDJpC1GqZdSnqcwaqQsjS7JJAzQbwxL3p44fiyxzoazuBxaD5nzyh",
  "key34": "5hrdNEj6Se1xVVAeaHSiYWTrcWZwSEeoAV7uM5WFvxTZrVwycP4y54wQLR6rxG84F4s3VUQfk3ReiGScnSGBG9ox",
  "key35": "3KnDc2LLcpsyzTggoqLVfeDHbDYKu5w91zMe6ifMi9YLMzsrL4WbuWUh88Ng9u4VMsSWapjUZo6B5GJe4MnahYha",
  "key36": "3SWb5MNnT4XoZEv4nWXRYcBmVz3iMaucXMuPDLep37PEpomwu6REKDbRJjkJWx7XR9dB35p8BQbhRVAAXgMx13nZ",
  "key37": "5NfLG61ovSeNRRJSdZJ9JVevNecbH4HfV2zCNzpy7P1AHFBKa2SQ3GhFunNYgkEpNH9S2AGquf74TpvTw9a7GX31",
  "key38": "2shqDePPEoqLpT4qxqHyg2cuf2yuzuUg9dufzVw1XzoNf2cbYg8p8JdRk4fe6cLXjTeJwsNTULb4BuMTjf9uLZA3",
  "key39": "2VWLJCEpb5cdfMnp9auBBkK4RM926P5AhQs5Mztyx67bUkNDJerzSrpaqCLqsaorLzUYbRpsrfbddaZ8pYmKP9Wh",
  "key40": "uj9P51QXisJKsbXzv1mnHEy6523XjC9xMJELn2BjW8inSi68GrdF9u4oLcfuSD466HLCA4nNBo4Tttj39bSXJXU",
  "key41": "4njhrwe6PfFzf9J6Akr87Fn9ejcKT4oQsJpjKFL9B7n2Z3cS5oNRpSkUy92tLCLbeWieLKrdcypP96Wzu7i5P7tz",
  "key42": "4xt6E91APPha2ZJNutYFLbJYqPfoL7b7YpKf1JnjjXrtBpXjfiq3Fri3cTdbJrkcrzGsnPBLKoTbvgBeYFsdfhyu",
  "key43": "41sdpY4zdLPuZWs23dCr2ZBUAnTGNEq8FWKSsCHuLftThrvQopVb3b1kctQ1VYgv8SEK6eoTmWP6YFtSadgRab8Q"
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
