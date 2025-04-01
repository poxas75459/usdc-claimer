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
    "4hq5RCyeYKTKTXk7nxJ3Twmh2H8tEmCUVD2uhFLxdAggM2mtrfXnvarvX7r8y9gWUS3Ncn11554LVSE8XMSFqzxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pgZJreqWqK8oAorTUbC2Xjh6VeyCyU3S2dEZKyimHu22TcHtE3B3kJ2vJvruetYnaTc5B6dfk4VakMJamtiSgSS",
  "key1": "5fgtU5Q6ha26F3VQDvsWrjrCF5Pxz2Lcib7FRdVESDzR7dYZcFSBXCb1fzHK2WgUHTHpaVRjV4a8HCKXwzuFGi3n",
  "key2": "5HdVUDtpNe5Jx7MVbpyPtKan4ibJ7JQpuqEcGuYfVrFRREkiqqjkf7yk5bd4ix1Ac3Zik8DGYfea3Pc8hgLQAead",
  "key3": "3MV1n6gynPKHJX3WTGonWriQj5PB8g1jAoHmtv59pdQLFetNxmvQqZA3nzGSffizZ8Ecz91Rhhc1q14dqenGq7KQ",
  "key4": "3MPFRnHJ6HCB6NYxdVxt5A3y2iW8UWkzDLeGsFs1QZ153T98AhNpUWSd2JVK9XxpCMsesB13uHAJEKyNbKVimDh2",
  "key5": "BEWiRcfyzsVsbqk6V1dR9s7BAWuNbExjbRdSScxYPzw3Q1F6pZhpMdjxsHocJFD7TyP1zgj1iEFkQuegasYSqeD",
  "key6": "3KhCbwgiYKLKNZ1z9W45tfSFMS4QYAFnLVAnRj8C4CUfNWTZTmv6Yg7J1RWTBTBzGGYzhayzcpC15GND3GLfz7Xy",
  "key7": "5oqcuxLjpDUgfWNM66cki7R7v6sc1aESz7g1W43om1qzK7Bi2GyvvUZVDy3S35wXSezaEgoKSVbmCUku5bZG6968",
  "key8": "4BwabeXDE9GAprxpWC7jYuiqAai4KUj4kfaS5K4bfQs23iCkZkVw1YRv5mdzbetUdm84kXReZss7zp4B2iRbR3xC",
  "key9": "2RLzReJqbptCjLEY38b62mPSwmSdQZy9dkAJcoDYGjvy7kFycx3awZm262U4swHanbo5w6CWVRPHNAxbS6AR612G",
  "key10": "4pnEBjWVmb1PGS45BwsGM1oKSQRRjnLK1yd2xPPqA4fF8QV1HYRCuuGYyBL6gqdVV5YvhHuxTJXbqREGbujd6oXh",
  "key11": "dyNur59c7MUNmaaonYG9BUy7y69SJBricmV3f86g7bCtLZk7JG3mSXBybgkdCXdnPQJk3UJakigaWp3Ewjkgnbw",
  "key12": "4WpqGkNaWgxuKGsdF9gWAMXVeuJ9XEw5UZNzg3eCsKP3tssWbGK6tMjdcAMsGjRMPzNkEAhjLc626sRmTmePfkcc",
  "key13": "SzX7qCRmtpEUmopwEStANXLre9Dk7e2abzTS76UaXNystY5FDNGHp7oA2LW748VEY6MiDPC4uDrVxVtVGVEQY8V",
  "key14": "5zJ1TEZyBVWzLw13TzvHYvuFqnsnFBg3M6RTRtRTq72K8Jg2mZFa1gGZzzY5yUruGhNzBP7SC7ah9DKYBoAoYefE",
  "key15": "xgoRZd761gjrSxmHTxmijBxaB9LhQaWNknxQ8xRVAdtiPVcukfaz8fcPkG6nTLxjTXySDps5qncH4aPvxFmUbhQ",
  "key16": "3ERPPmt4TWyoVABqnJQ4CpUT3Reb5SqAeo8iq7TegRo2Sq3pudzSFCD4ADLZsy2t6QSxeDVgWiaHQvWsrkdDXbeV",
  "key17": "2HuCMRFCGCdJZi6jawyHXMv1n6BLSZMRT2QVf4LXuCjxkyjE3aUwgtdp2rc2FP7asLoMqtxYmXKzGYAF7Petrb8J",
  "key18": "4HtzUc5Rcfzu9iKXuRnGwcc5bmqezQjShbtKBPjsg6UwHRtTv98Np3mzBGkFtv5wgeD5MX4eUY4UuzuRaVnVLsEb",
  "key19": "2j6ouDQc2GpQvDmRyEdvgo7WTWVD8VCVtZiZpqLPhYPa8okHJ1ryaXa7nPzeUr3r4ymR37UQeC1aWGPCkjcWt1SZ",
  "key20": "m7JsfwrcKrbDZE9jwYCexshx2Z7iLhK4CzJR8miBXycKE35ub5knsEK38fmogsUt4rgYK1AwSypwNhTEGXuFRku",
  "key21": "YcFRZt1jjYVGue63V8j1Q1mTkdNHj7uuiFYHQHBrRYyjZroAfh1hydQUEgXBRsAKPVE34QuXigFixvsB5kUKD4H",
  "key22": "4XptYnmAcYYDiiWAaBxZbnRfwFBe7a4egxXPVVPgVSt83w5XXMDVXeSUP6Dmc1SaBRrmZMyvougaxw8YT5gKY3ot",
  "key23": "3SQA5rZKSELXcQ2qYpu3TuBS1uwM1Fmy6f4zjikN8hQEfeW9cMn69aPZAfVySdqxEgnxvGv55rzyxc7uCRLTYZgj",
  "key24": "5Tsn484pKyy7H7H3QHHwr8QE5Wd33c1axQRDDwKCvVLdQLZvq9UbcZakU2hcDqvN1WqFfkFEKFbBzWGuYgEiN5KS",
  "key25": "CNPiMiv71Bj2JkPtHEkkh74CDDBmaiJQu2Tfv1gP2f2joE666oAnbKWiAN85mf6K7HLjMspBBaWyii78qemKN2t",
  "key26": "6rL55nyMwaomAXeQMaRYHBDMS95sZ8QekFqH983yr5TeDTHcudKTQaZaM1t2Hi1vpaxHNqJL5f67ZRHxBrF2fwa",
  "key27": "27LzdXvD2ZTCs777wytQSh3whiHCcyFRM2QiyNUomB3WfPM4iBdziHEqKZJaQcoWc8N6PmZj8RuZMxMAmm8LwrUX",
  "key28": "327QJUHP6qae4waPDXx6e8EbRfKk8iw9VYAVQ1bgPbbF5YngtrhTCkrjvFxSvncJaLrydE2ZGpB6TshEVJHfwcdL",
  "key29": "3zF1eZUxmnt645GR3nnZWLzGD8apVWMc7u1JCn19R7YD2FBdhAYNQauFugFhQaz5WfPSqAKGMCwW7sdvHjpS2v3Q",
  "key30": "kTmEco7bfjdfPDgMXzBuZ13uwrLwMh7J2SbuA8DX5pvGj2pF6eGMKR4JsKcUsdafbEaPLQrRAdjsmpE2xyqZJQH",
  "key31": "66ioTktFFnKZ5gKAipUcbjRZKgPFqHKwu6re5GbimTyvFDZr4sTjdCmS4iY9vei9xFPPWVun639S7nBZFMXXnak5",
  "key32": "4Qisfg7iGA2ZU9jcdfEDsyc8JQQpSfSzjzSc9fERo3gf24GPiSrzsg3uQtz3KksJFFHTkAqcRKGXmW5fmPPsJ8Ry",
  "key33": "nHxfyfeVU8kJNStDcANLAm42DWVqGEj5oogcyJRMuYZiTuRypT3HS2hv7d4kJi1xCh2wTd7wwhcW2TBJP4K5wKE",
  "key34": "jJq3AYhqRMoYY24dsmQiYKnf1b5Sa6fdGoPn7GJRujQfEJ5KnhnmwhMMuinZHMM3baNV4YbKUJ52bnZ2KsErEG8"
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
