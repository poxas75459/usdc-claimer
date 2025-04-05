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
    "3qyg4wxBACKT8cHuLFW9sLoHd5k3MeiovdjewuqMNa6BAb4U99BRiEnvh4witHxp94e12spjYg1uRg3wKngFK33E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aYGd8o8ZUtsKezCS2z3YQe7j39KZcwYsm8KzQTuzRPD5y7gL8T8zfDuyHdoeA2AQpKpmUWPxYDqew9A4AACvNV1",
  "key1": "4X1AzL4kpzaECukhJTKRBJ74d8ZsfeNMxfWzNt4mX7AHKHuBAGAxbiBGDhAkqvun3WqSWVnhfeRFPHYGtLW6uzs2",
  "key2": "CvjnG19esV8Z1EnXyeEmpcRCYs5LG1mxZdg4baJpv5qLqMY8dsBH4b8odbWtGf9eGFRPcapLfCoLVMMxFK9c7Ac",
  "key3": "4PtLwg2vvZNZonuJZncuRgsGwm1enktnQJsmZKtoNPtEuvEPqmLzsp4KprYcNJiayVcgTnLA8CpzS6QDks2M87pb",
  "key4": "5ESLQ2zpfymNoHt9yW9TM4N9mjQauRh5TATQseXrtExukgf2uPFsB53hRuvqcz5ohMajADKsvvNjoEJNXaXpNdN5",
  "key5": "2VyEgNNc1Btgqe5bGz3Y29CKQ3QmTcVPbU8MbZ95jHineBgkE6TEEazLycbRtqjnJXaApnsHpnMckZEikkRuscMa",
  "key6": "2VJV4uVBsYQL61uQMxDLMMNGMWdusMefdMaoHaWxR867hSJ1E21a3nsL5GqN4RzWpKTH3FNAquCx8BTeFeb1higo",
  "key7": "3psacjgPVjNvbEq8nMDF5C2kJpujxZgFqCSciosaFcpovxy2hk2YYJvtsKTgLs3kdTJyufuHjxTQbMRz6P2QryYR",
  "key8": "2DcwhtMHBHzARUVAAnjsNuJk3gs2qKMdTvgt8XALntMBnknx6TBxnoLPzSzE18nwp8GgCCvZCLSvaVq78oBoQzT9",
  "key9": "3nf6wJ2VjRCHjfHqhZm6CTGRyZKamqwPgaYZdmBMc2qrDnpT5kM3GE7UXybKxKBGLgopSnDp6851ZsStrQ3EMNeX",
  "key10": "JN7sAEdhSTnX4V3ywewc5KvmxNaoKZm9c8e9uieRAvM3G2AQSL2mhGVeW1Y9DyEwprTsM1ueLpsrJqGRvdE8U5u",
  "key11": "2MfbGXWw4DqdbXxqFDwLonD1Sur29vVjXwAWmEYGZpr29qAVxWbwAjzvWVUy24xdn1PXaMd6TotadE5tSZBrUn1f",
  "key12": "4MdDimpsViHGo5ncPELzenwj1qnHEi4EWyTrzNhJHzdpaCTyoK2KShCkFSvBhKbRiF722WSXtmk4smCkkks1G9rx",
  "key13": "3bSCVggnhZyvBY35JuFpu2L2r6G2fsF3rvBJh4eQ2KL7DtbE1Rz9MYd6zUE4B4q4N5PMHuVicVTpMEtrr3s3UsSz",
  "key14": "T6rs3M5Yq2ntokDejqcrHXdnu3mQxWYpWti6NeXmFj7rEaQn5kU2YNLF825Auuej33mhR3imqmYASBb6wRDmNdg",
  "key15": "4txDxkev3YDeYTwGBg8z6x647ohmWFbM8j47wZxJ7GduCgXmmyWsaJfy5rcjJdr3oTtmkRZgS22NT7GpsrGzK3Sq",
  "key16": "bsEK3HabMGWeg7egnQyDzcD8Ax28WvtZ5dAZyPfMRkPExW8pptQAzCqGGbtgD3R4i6J3coNbWuGrqhmHbUXausv",
  "key17": "3qZ3yJmNe26zLbsvDwFTriraW2aBDVAEfvfQdaZhauTMnuwWqhYJCmdRvrb6WErtgFR19rpX1ERvwmUbK4oqPGK6",
  "key18": "4EJZTo1TPguu2vgUaa3EHczxmYk5AdD7eyLD7uxQAxz4Vepu5YHV6m5CSaJis1iAr8gMHgW9sWZGm7N8TaR4g3B9",
  "key19": "4nCyXqnPU7CFHSURFNBMpP9122vbWEAuUtuE6YPJy623EFk6ZyTje3iJzEuyoDX5qEUnjvL8W2YFeKn5o3xfTozy",
  "key20": "4TqzSdHGSmTfTKVUbKnzC3HTydiWMMoeyEFxC2t5HcXYATr3cvhffGECH3j3xGsWTEWNvDomy9qW6j61vxdKGwSZ",
  "key21": "3g5vVHcpV7Njdu2rdkd3ZvAyCzTQaUdmgumqxoThzUm2VCYyVEGQnEv14SyzRajjMQj1ubFoeqAf5bKBZVeGMjTo",
  "key22": "LZABgqabpKcNZJZp9jt57hoLk4FiZ6xuHXSktmqoXbPE4ijU4Htvr7YN5r8NzEf4on7hbBi297LGXvzWrj7NYdV",
  "key23": "3QLUe8No4zuYAFnMePkjvaLyTFt4wWy7FYuY38X1GXawoaoWaR6FNCo8NofWdtbXGvoi5reByzk6aJpPLrrrDekW",
  "key24": "36TVQby5v5MrqBdL4bP9Z8rwUoRtQmPdFdSzYH3bNaH4DeLZEkH8Q9Wn2DqDW7W1jtm6esepenc3hGDAug6uv6Ar",
  "key25": "129eUXixDEHy5MxJZhUZ57ybX2JPUZKgxkhEn7qHSVZYiCPVfg4d4agfBFddmtebkVWJq6hAG7TWWJedkesYgZLc",
  "key26": "3hAMoM7PF3NqRRrG2ktLoDu2pk6S6HjXJnAFuhmqxYttvp4EVWSYiRapyYAsbUwA6b5ucEEsopgypUFSXEuWpo1p",
  "key27": "DBnRtpGN3hBXVEXHgLEckR6WjKAUDTMHmr8yKV1jtP1TXQKYRdWfutzgCvXfAAwgkPMvUfNWY9SyPrqQSdUkSuf",
  "key28": "4XTTRLH8cUuHJdtNT6TM1pEQ4pi8ZXFwoh4FCYHyKquvDpmArXv3JzFy48G1FLmkbeRAZvEccVTvmnAEJtukdFre",
  "key29": "2oZEpF9jU6onFCSKJB3xMgaFGh6UnK5GCrf4qRAdyjTbMuV7oyCTG7bFwECdPXQNUT1veKk1T1azgJk7v7e6oye5"
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
