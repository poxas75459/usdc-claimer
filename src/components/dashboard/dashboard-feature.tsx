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
    "2GtgcswbyysEFSBX2wgtv31B3XmYu7GYRTKoikU8CCrasi3TLVCN2CnT1ySBkePDoLdniJ8GuWBG3QnR7YdujvTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PMxXCP5xSBtjm5hP4Znw8KzxGyLTtWBWJKdH1PP7UZ7DEfhLcDjAR5ZZmd562F5Wp8UzrxfD8j1PBobmmAwCbkv",
  "key1": "3cfnDNcDZppoih8hCJ67VBw5S6u2nPnHeRNLyt93njH1hEfzriXYf4JMgVx7AzwBwHh9poMCdEiLoDk1Rj5PHNMs",
  "key2": "39Pkfa2QrDrMqLXDCGN78ASa5PQ3DGgUup2tJoyB6xvMKuGipFo5nD6mfEvDVpMvqAjXirpCBwk5pBhu6ce9NgEi",
  "key3": "3dqfQhZSUv5mkt6Vq6N4gFoyexWNeF66ZtCvLMMD3WNTpBFQ8NHoYJPSQQQq3yEVpwhCsDvPy3uDXShPbyMfJVRp",
  "key4": "SneJ3zaoqmWh3rhVyJxhzES2rwKsgmNumqG2YLf6L3E96S44Yv6PMh5h73EubaS7z1aSfHmMuw7WgJcyii1Km48",
  "key5": "4dR9rRN5vek6SJwrDtAx3gXcpRoc29dnNHpeT48DeXPZUghknjroTizr6ZkAK8FGRaf4bs3wgpxbxTYXa2SXgExe",
  "key6": "57Egiq53cMEvQgZjozpf4Xm9odRxJceAswX1KqgUCQvzNZMwGbFXvXdSC8MGf62eGRPG8vPbTnMeeEWAGnoQA98h",
  "key7": "4mBXhMypw8Tg6B4szNsea4gxyogAx4MXd6HuJsdwkNcvLmgm3QgJmzWC3LnPFScpCQgmPGtRnR7xMm7Q678kFGKW",
  "key8": "4mVuGdAeHjFt4kjGqDqpkgsvamxjG4QfJiTzoYbYAe4LZggaNVwRquxieC4myquooyxBmuX2VtUFN1mc483R5uYw",
  "key9": "azV4iAM3PvqaShFAgKwyG3o73UBBRkhQmQxTiKkvCM82Px4TtY2rtFXdUT8DYiWD9tdp3uikd2uvggLbmBKxnzY",
  "key10": "2ajUUJKBxMYGj2ZAWeY8Mret5XkkaNx24pGAJDQteH85dSft7xttnyziyF4qu6vQiU3x9wzuFwmiAZtyb5kJTvGb",
  "key11": "2rMvLZsDisSheP2vdMxPZiiK7oQsWwysBDeW3aPiFQc1Vo8UZaQeAaSuzbzg37RUravFPwVLD8n3V7kxZGWABn2R",
  "key12": "2H4fkKr3GigeTmkBVRdCiQHQ2HyPcG9c8KPvZGJ9MsmCxFPL7ZRoi8QhAzYsfi35C2ttxcmo8vjj3GoUQhBJp4vJ",
  "key13": "21aAShuFCk9h5miqvLAU5mGvDAiphDLF9dBSCGQ2CPBGvYcvkrVKF83qyC6e8rEd6XTZJiq5idoVkccdMzYWjJ9u",
  "key14": "4wEPRiZMdm3vq8p1CxxFBZW2WsLszdkLQUpF5G5mqYAJgB96AmBNbuZ9ozjqb1vf6AgoTNBFQQAi1Yne8dUvKNJ6",
  "key15": "26DBSbw58agwH25hbahxt1ACngbgC38xYKg4KDfD1eKLBk6rbw6SmMRfMvX8uEjYhLpHLEgF88p1y7BqmpgB66FZ",
  "key16": "5MY7Qogz82Y72W6etR81a9gN9GtAyPwvzLDrnaZ8tAgotQY4yyagG2mecMtXXQxjYrqr9q3SKczzwyM47Z6GKGNd",
  "key17": "2swUNDHns8wJaxvkSdjLrNYBqJbQLakzuT4BMRBCMS8R7ws5NM1S7DFVCQugVapLAv6JeRuJKKYLVSGf3TM91PoT",
  "key18": "dWNAPmqnmr9RRsE2FcgCjqzJhJvYXtPswoKoSL2S9zZp7k3qkp8y74tu3AGLUBTLpHWZdxUn8pCcygawBZ6tY2g",
  "key19": "fcqARZsAWqKiovSF6cWTsqAJ8LYRWJn9J1aqEy8JXjUk1frTvMF8UX6XUKmgEkCntDKSs7v96F9nDCMrhJKp9Ym",
  "key20": "Rn6hEFw3SqAwBaVLAtNrWRZKBgWbxm2sPBoT3xLzCUg9Whaaod7FhGNoiggMD679yJP1ifGqGbeQ1c8R7tcp6Wa",
  "key21": "5hgpmZe5ouRUur6hSin1MGiFnrgU4y2aT4eu6Kn15oD5rjj2Z6iJGnBMWL4cDL2kQ1Njk1Mjrgcg4ueeMjXSv1Xq",
  "key22": "4YqfweMwHNNRZX8wVaPAGzDkKN4FHRg4jfrSKWiyfMXw6PZ4c3bGADSuq3w7r5kcyEDvkNovmpSbiXpj8sjyE3eb",
  "key23": "5FWwPdMvzh4r82RabZPPZXHchNKjuxKGTz5QWmB6WjSExt63d6E9uAwofWuNgCK6xJFzkABZvwsdAZBn7Kbssder",
  "key24": "4NJTjkxc3rqvZhypbCYcZKLruKd9AqFi3Aj6pbp4oCjZDjM9fwLP7M91xv31XELwXh1eCEUgDaYeir4A13rsiLCo",
  "key25": "2vAke9igoLNzBDcTLLqXWTjTUyLfjLjZq91iRQpqvzw3zcDSmyjLZX3AmgTCGePoi1HBNHabHmkHVvsK4mngUo5B",
  "key26": "2ZCvxri9Q6pPZRrwB86xnuqzPfph8wMt5rMwUJm6CyLLggB54HWL2bEn1tXcwsU2Z9PRxmx2sewQSHABL6DuMPf6",
  "key27": "4vvwhn2KQCr4m1ij9amFJVQN5jao3u3iAHSnKD1GJEjNQudJXBFgDQjiCysdbxaArcYKid6cKwM2jKVjN1Eip9rH",
  "key28": "52ftVLWgmLC3RW78CqGQwKZWdzBVeCWrgsTbKPWxBP21FHC1aFvmv7dr8zi1LrzJv4zsj9B84Ys331yP6aMU9JUz",
  "key29": "51sHwDBmZcNCd5pRwkj338NZTEcH7LfDhQ7LKKkjSQ3rmhZi6AJQXgt2pQSPvj9ZiBoBm84tmpqve9mcoDXMB3tQ",
  "key30": "4C6abSmySTMbXK4mUDHmu2Fb7w6b5U97JQxcRppKtJ5S9KMWb6M8ZXeoyGTHGg2rwWWe9oSHGaZi4WWG1CGag8mz"
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
