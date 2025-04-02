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
    "5oUfWM2y1uf1tqqJCcNaaswVavEyqUrLu1shVXi4znTRaebjBfR8ieg2r3NcDyhEvzvYaSfdkS3bDXWQbQ6Wj9k5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38PbcGVfhJMDjcJUeKnBiBgZ42NzsfeP9PS82JcmyM2bnrx6HXm5ryeA9oJprraoucUpJB5BJAoBy6iPVDhCbT1k",
  "key1": "2s1CCK9ukJXvmyaWE26FMye4uknnKTfqbwd2oiBLWM73U4p12QFi8BthE3SDJ3SVwDuK7zDBvbukYEBJ9rVaFnfh",
  "key2": "3UKW9QHaFpTJrENuPRKVf6yR5fkfvaK73SHEhu14DYpF7My9EhF381wFSYKdyqzAnp1ocosD3CujNr18UiEs6fMz",
  "key3": "rKQXX9gemTUfos321aZWvK9LMnJ4Q3xL6bAfZPXAkUYX3FrJCdKo26Urbuwjd8ZZ3x72JivmH1QvPogG6MFjLxR",
  "key4": "4QAAo9v1ecQR8PShouJREbrFiv9kjHqdHz7mRa3tm2zFikXAA1FjT7H6d4tJU2QpxYZbWidVkT6BT78GMRPR7syj",
  "key5": "2eZvD7wLjTc2Y1wxo19eJ1pVcWPJrwgBY1GwDhUxFfLAL2WqTwXzdiFXQ7mmAXN9SPN3KAfe4nZZZ4JsNTA3RL97",
  "key6": "oE2qmKqzeqr2AZ6DDYb1MUgzRN8TDZgMYsAgfN2dHtU9oK93seEs8NzYW5bVE1EBNr6gDLybK9oJfjeRnUZzZWp",
  "key7": "2tgQvM9g6bVr1jmecRJq4cx1tP6E8zCcqUGmGD4pByTEzwaaF3HE277U4Potuay7PpNep66AaPS7ue8jaLJTkyoQ",
  "key8": "3TgsCMZZNc4J3v8TsangpJDbDhpDTMJNG7XBT6GmbiRZkjQfusJHQ72jSeNqD5dXkPuwKwg8ZgLy74SAEV1dCsYW",
  "key9": "5Ek2eCFCYLFm9rzjPM8S753KqfeAhnYaqP96jGUUN4qiaZbLyq55ZoGRYRab1LMv9PB1QyLxHbbMkDY9FSeuvjgS",
  "key10": "3KbQqHL1yWxWU5sYK4nBMJ7RW72N4Cq1UMvVSC5hi9qxbiZjyxcf5tp5cnwLKWoBnSnsJxQeHbyAKag5tRuLvPAy",
  "key11": "2wy1RVrPeHxsiZrpaxKA1UXVDYx9PxEKBWXYGBzDsdToJUFj24cLr55QEtTr4Lpp1itUvKk6Fr2DK3LZVZV7wq22",
  "key12": "322sf9tsewXPwzRyByXFgohH8Cq9dRcMpdnMFXuZPirPwYdA7r1ZQkfz1sDDkv65wci47AaNr5XBoNRj2WDiPB4Y",
  "key13": "5WDGjkFM2gDtnYUtzGxHyoj1xQYAocfJC8tJMBqmCTe7fzpCdzM1Av7crK8zejAGoRYdiSnWjnBEdeZAoG2LiZ9E",
  "key14": "3UY6ShrjBbTJKXYcoZJUwWeYWVsZkmvUiPMk5QWGfXomiQAM6nyewenmqfaLNGHrFNe8EGW6Bq1Z5ytPkisyZAXQ",
  "key15": "5YGDV7rHiwKvXuEMtaRF34moaejsD5uuFiKiRN9496Lg9iMQEjJJupXzJrHTkw5PEPbCSpaDVkecerP8QrdKLGvd",
  "key16": "kHR1WpZkexpRCiavUKkjoTaf8rmYJ6JsyB2NPU7kMrX1GhX6DJGoKQTAhYNagUWbVvHAFd5fDWzVXZxLuVCm3GJ",
  "key17": "5SDfLuufb1hBjXMq3GuFhp7z4Us6UuToKZy1DNWDPpomMD2jBPDSrXcSt3nrSPEBMU9CtgB8JEoQK7WD6mEGJwsU",
  "key18": "4VgeHGL1qgkQX3HeZo3ptQNEYwQMeb9tz7ms91Cr8nfPdThpKoXbABzJuCGe4BLzijv3Sec8p8bEfRC7eXp1B5Lh",
  "key19": "5LbsMtwmAZt9qywbCyfkrud7V6gRbrmwemZy3RmbuxgQrBR9XJDV9N8mHc6vXucuwnr9z8KzN72fxVJiFkM2UrpW",
  "key20": "5SRbXS36WiLJyTBT5jVjQ6zddX55LkH11VikoU3zHXnUti98swMkiAVCr3xUjQzRiAaWb6MRW2GhAPhu3Gxs7vMN",
  "key21": "66ubZbRNf9B1mzjz2mXKtJBX44w3WBqXVfykp7dyjCeG9KJyaDYtY5mrgvu3PXmzHm1ySKYwgMWp6fAB3KGizC9P",
  "key22": "3v3mfkR5bbTCuRff5UcAukUzEJycDD4go8vKyLKK6t2XGYTwX2d51ZW8avdywQyGC3BGSwwRLFPjuxcdBREw9qeD",
  "key23": "3uQuvguJRQDtJpCw88vkR7GUpdGAauvbnZ4ihC33vXJmuq12kajpfYDmi1vU49FdeHrAtu8McEkbTnGYHX1w76F2",
  "key24": "58Meypi4Gx3wRPtVe33AT8U8XTmyQwpn1cd9ZbguBexm3Hs9ejtGAdtJmnf1d54mJ9SPtfuUWD5rxwmd37bpE5w3",
  "key25": "2KuUfyP1jfgMLSypz4jaU6hgUcFVQm2A6aTY81AHyF4QXcqx83qXBf1n1Z4FeHinW9AZwCjUX1CtgUeWKn9am1Vj",
  "key26": "4LdqXiQweNcKo8yW7njhmRxCUFydkFJvf29qL9DjswVYy8J26u1FLC1SZXKStTRdPMEahs9jwpHdjK2Qz8zj19Ur",
  "key27": "5LEMeuLbb4nb6R6T6GXV5HmgmfNjYWFTRdRJWUxmJWsCUPAJYvFTkXjTZ9bh2mn1dVktySrcvumnpKSmhuTUNxz2",
  "key28": "4GYGgy2enKMHEQJYh2PBWXuwE9aub9K68EAvFK6v86tKNMpvkaobY96Td3rTi1s1PrAYLnPdkrUw79BdYBUiQyrB",
  "key29": "2fJxJoocYa51Qu3K2LvJDTZxPB4txLBC61THLDjWFFURSif9ACzRTLQcTZeig1p4AsSz1DtKcXJGXfxahxEHkCho",
  "key30": "64gFYXbf1AKo1YsTfrSa3DnodpgtzURzQWskyBjjvE5Z6uiqgSAgtXUmQ4TBr5QwjyPQDUESSAgatv6sJW1XGpwZ",
  "key31": "4VrXxSd69S4H4YfGNVoGYgqxLs6Zj2BHX9mA2LJdU5LuFjwhxymfCiYA6KvoZtwXPrtWYny5D288wNGPPneQFH1t",
  "key32": "5HKnDTZSvm9TXV275YZCZFtKZuq7vwENh4RVHuraCTGEXp8tUbhivqMH1r2tA2LPFEVLqCH7BqqRqKofaqq2EzKp",
  "key33": "3PsVJz71wNfJRFp887D4JDCCZdf9qi8DQDo4xCUVcmj62twHepXjeb5zdhZhPtd1hmoAVwb6bBtnLeiPRBHkY1DR",
  "key34": "2tTGizZkBnMb6vNccE3vyW2CpsgoLN4rqysczzp3yjCqnrSSDy7HU9xxkuhJrbYwRw4A6dYJxzavy1susUhSnArB",
  "key35": "UGumEmKzMSBdgtXMcmM7vSwWLpf5Tk4161sbJCzfSZGzKBasRqmwTksMyZefHnajctEVb2rBe27xF1Jkf9Tr8PD",
  "key36": "4xWvteGriKRYr1ixr15pu9NeUeRjNAG9BAqWHc9juC9sKAP71G8FM5U7ww9H1XdpU9sWAvridNArcTyo9p3DyEZc",
  "key37": "4gaMJMV3VQKA7EaL4CY8f1hjnqzc852TroFDrmi2tKBhNRSJCRm7Jtz5G4W9HvL5ggX3im5GRs1xkUzX9o9yxviF",
  "key38": "4KZgLsGTs6zLwRJzdCS5wUXgDA5RKM8xLubDJxBh5MPr4iJov2EoD2EAYbH4vSKBisGGVGrx2WL6KWT6xFMH74jT",
  "key39": "5h8sEcPXjmXK3EUDDn4uuTGBsAEyqpQtB7ZyVZAh71QjjHp6gk3JKDcRV3HcFLTkK5jcNu1upWqKBYsm756Rinbq",
  "key40": "3tshHgXqhyNND2qAkzdVKSDzbr1ZYUW58L6inZqXXtkTCXJUsXb688YPTAuZtiKPt8o3sy1jn3MdoWTdDZXA57eQ",
  "key41": "V9KHTSKMKdUVkNDV3cvyDvSt8mXXj8fMA6tJRyBPn4Jc7EiFFh3PDq5SqXMBpA43KmNJJyJEznsKF5QcZ6WUCun",
  "key42": "4Hfow6Le2Wk45UWvLLEtmr8WBpPnTyjcZsbSzb6F93kyERFoqyMqgULYCrTcKNpBFHVvZcSupEGp6xVdiRnurpG6"
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
