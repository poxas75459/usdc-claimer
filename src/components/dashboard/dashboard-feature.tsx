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
    "3H6ZASa2gpNuSu2ARKdyYLyV3AEHHPht1mQNXLCeUkM3tXqnP8jJM6Hjrb8EN8uW37ycmkYKR9fNceByafENXALt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29odGdE6ViA1Xx87gZeyhmZ7SDxiQ1w1w4cNr5rXXFq8DnaiUfNvQgukFWeJmLXevcorzPnn8dFN36g39pb7y6PU",
  "key1": "5iSKXHoTwfYscTPL3z65PNbbtP4dVs52vETxwnz7vH4LnahUzNWfp1DiDAAGffTEQYfQHyGKXiUicymsvtRnEVRy",
  "key2": "TEdJLSn2JzLSsGwhWNCGTXKc2euEZMo95n1MTaGVSwEYtnCKbWvMXpMjGTU6vWPtZcPF9axTJnkVd4yDoaSZpAg",
  "key3": "5NikyoZFv2QmtqYWLw24GPiSo5RoYdnMTKn4cy7bmeWjHkLPDAmk2MWWji64pmkhEY2XAsbcVhovnr2jRz8aNxuN",
  "key4": "BJNWdW4NYfKnGQj6dhZ6Z6JV6ijoJ6kycas9KWd3kCxnqKh29196jcYkGyfTr8BWaH7QGyUJtRYYaLYc91GfrL8",
  "key5": "3CPb4Dyu5Eg1e2MyrqRQraNrHqnWGet8ZqwmzNwrzqB5K1L1jtghJc4H1uZDDNfAvoFwqxZYhoL3jQmxoW5JXCwa",
  "key6": "5ECc1LSX5yZp7Tvyn8jnds56mqAnd3r3TKvmDek9X84cBHKuiMEKGXNhsqeKq7cJ9WKGuT3hyLkq5K5tgHkfGvpt",
  "key7": "5f7Va5LWtbtDrKLEmLYoDZVCkipRY4xW9LkX3MTvYtfKjuiaiurogfkrjDH5QACc79WNu5dzGJd6ctzHF2PeMHhM",
  "key8": "24oyAXxTrcRy2CbBGiRcsxiLoSThy8Ej1ZULqkt9MhnNdi1L9vcxvdq9cCKGavVQA5xU7pqZU3YS5R5jJJbfAjek",
  "key9": "43VoGyVgJ1a6fvXA2V7qcBvCfCAStKMbkBbJ4HEvp8GqnX5Z1AJp7wy3RCayrwB678eF8AHy8vhY1mq55seHY9sc",
  "key10": "38jbNFX1Q1tPAE8fj6DW28Q8ifb1bPaB6K2G4zk9wxq8sTHhUyKFFu6USKQDHH1pn1oJotvhG5TGdHktoXTZJA45",
  "key11": "7AUaqHKhPb67X6SceBzs5cHpU29vtVDSFeBmqzBdzMbsuJGiujiy1Nh62ZvnhD9wdSrhsTDezJnfLhRbgMPpDSG",
  "key12": "2F6ChxL3ho2VD38chhRzPEtFuuMUaK9pNUuu9tmhH5DuGZpPeWUwCnQ5YTFqFub2pfhZCPXJceXc1B6R1Q3KDmep",
  "key13": "3WnTcfFTcazaygjbdpVYp9ioKMQLxYkNYZqigeVhHex1qG8L4zNdeeFjuKpEr9q6cpCirZ1AGq4zYW57Wt7mnSBf",
  "key14": "5JZijU2XftCuxzAkYZPAtEaF3YhZWDiPGKBDLLMtmTpWbuRfGwcXhVxSZFiyVWtKUTwL81WngcNREZW9TCbdrH4b",
  "key15": "3TwbQDnGGw3dz1un642ToepVSuxK83m9o5k1H6e1shJBMdfUXh2Yk4Z9uZmYQ1XB3bLPbWuKcANhtnHUtZ3tqKXN",
  "key16": "5KwtCmzop98TTks2C32QkFXNJRfSYK35hY3tEnfeMdsDTLas3n3LHJ9Us9XaWCGbBTafKDbGxVk37ftvnSP2zWx1",
  "key17": "4uF9gFJvKsiarbsUtkiit9kri13tyr7iHWZMbtkjH2Xuwc72eobdfRrbM3c4CFhHPqMDcnsPWseQ19rS7tQFywWN",
  "key18": "3BCpyPiNcEPBtnLULAxzvVoFvPUXbPnWZhH3ihXe7vwauuiEgWwLM5DNQaCJf2dfyqbxvnF4cpPTrRnBKBn5du1D",
  "key19": "2CUYDNo3unHTqgvXpnfdLJt4rBeej5xUrBunkPuwJie1RPmt7LfwmvieR7LPQGzQS5vKBDENjtAfJBskWpp43Nkj",
  "key20": "3MiSwWpp4fRAcYr7HQy7KkXLgqUuz6bkvvG4Dt2d1h8r4CkxrLVdCswFBrwADwQLGunNTetCZZSBo1eFRbrUWBwh",
  "key21": "53jjQFrh2nWaJbzT7gSApwT4JFxQzb6Un8QBDsKoMASh13r3fPVQss3uqg9VGpUYebsHgkPVgbbRpT382HP3WcR",
  "key22": "3yUbTkiyobJvdDtBmHEdeY78U3V1g37wHt16fMkqWpe5x8drGjc6jc9XYNQBk8a1VM1mfstYPjZHzujrAieq5ZyA",
  "key23": "234EXx5DsV4HcoT8YqM5tzqJvUiz1GYrKkt17ybNWwqtMmUwh2LEr1xrX7n7N1CcgfyoTPhJiFuaBZCgsEoaz8Yw",
  "key24": "4y2oe4jJvxSCgdcByh2CxcVBC9Ka185qP18fshtB3VoTm6rxxxvwGjFaWmxwspfy63GnvwRex2x7KFcB8Znx4R6Q",
  "key25": "3J5NneYc6VnTXJLUXbEB8SgUjyJwr5Fid5tEE4oeyt4as76hwUgrrL2g4xBT97zsF5r1xRWYDegyeL59YX4RKedb",
  "key26": "4NwZp4AW9aGS3gKFejZdKg4AFhLiHVyoMPnnEKRiTd7jX3nc25bL3PCkdEMY8hs6rWRtNqeYpU8mfSax7ZnJRE3D",
  "key27": "5mpe3nX5dzB2oAMVg7q4iXRnDsSVkxbWbRoxJgJ8R4YGrfVE7hBxKU1w1VyDrNGX6eHzaCWa9HTzf96Y5DUGGE8o",
  "key28": "5W3uNtzcTkPMXbk9YmVq3WgStp57QVaMTUgQL9ZKNRptpm3dNdKEPf1BJ5wjXMjnUSe2GwTEjEF69TJJXeFEtPKF",
  "key29": "5zX5RYPgXKncm7BmM6RaCjuP9zq9fi8qdixuriFdDYSbpExgNzQJ4EAtAFdVTJvduSKdEckvruJG8wqpHxtzEWJQ",
  "key30": "5N7S93cEGM2MC8Z7Pv72qX68LZq4A6sm4ftmHqyaGjHKypxD3HxjJtNxeYBQ2J124UeKhNkJQrVhr3MVUiZEwprD",
  "key31": "5ix68ahgx2NyPcovWfxXjSxVz8RZBK1E5kyXH81FdzcBaKF7vNvisPJWWXM4wFMX1frWkmLb3XTWCFSZ71EEypPi",
  "key32": "cZpqVDV1K2uGuXC5gaERLxZar9tPa6xGdWXkyXkEd8VoTYzYxNrwYzNfo74KYBi83bYXFsoNnTqow8cdWQWTKj2",
  "key33": "4ATrRYKT66U8mCHBtQG3y97AKmY4MhcSsknPWuc3tm3ghrYTEMJiH9gyhKa1SjjbYccAUkzRBoGggQGAs8WbuQH8",
  "key34": "4X4yiW1XhvxVoAknWnH2eP5N9UgBFdAMcULKXQsS5rs3MqRekLcKwCC4fL2GjTJKBh48iGR1yeBWdTskCRfVBQZe",
  "key35": "y7wS2SsBqbF2EMTXtT89v36JoNWGQmRcbkoRHCub9v687Eb4zro1oARf3p4dgznz6fvWRuFzU22aRsEdR22y6jK",
  "key36": "5msdwyKMw9TxCLtw842xDt83TMvaKqHxnXVqgcqDjjuPdTFSr6mv2YwJHR4yqRiQRMREVqKbCZQzNCoizp8Nrcng",
  "key37": "mAzKR9NGqwpjfef8iKhYmd45unjhpoaRQwLE8pFz81nqvo1a8PvT3MwpXHU8qKKW9RcQgKxuB5KYoNN9sX1r9ko",
  "key38": "3h8ftf7RH7JdbNux5gqrLynFRJLM586g7c4596J9yrjkVWg23vhUAnsB5D9KC9Fen8TFR7JmvuB5rYa267cD6JSo",
  "key39": "5KioxokaA88fXsWwH5Q8eZNPPvf7xYJCkF7zXECKgkxSTW1CRaN2oHhBKjCnk3WGrfcHV1Wewr137x9vaRJbENUU",
  "key40": "FLS2YfWgqWw39xUwZr3cmQUGCStmaxEtEAqWyTJxGehG8wLPjZizqUScZDd4hyMVWXbC1KCLHqW1W3Q5P9tc1GQ",
  "key41": "Pa2UAtCFaLFRjHKpoNC83BFTpyMQeZmzxQLR8nvLdXxxvYxoyExnfWdgoqMziu44sw3Jb5zimbsMqRMXGhd6yWn",
  "key42": "2toxAZDM2T7fYBawW89bts2ut5PAKA5ds6vPczp3rBKysjFYWmyxh4rF2u4cd9fKpanLAiAAwFsnzGwcHJ55kvdK"
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
