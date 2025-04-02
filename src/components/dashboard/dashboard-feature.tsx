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
    "1276QrmJvR4RUxaMkh1SYiNnE9Q9UUJbMwf1hemwmmZP7MQunRtXVRA2wRK3xLfkvHAumEXJc2x86JKPg749z43y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BwEfi6dDaRmW6dn6HTYysmtVf4X3KiN7HyT5XGtVzKb49Fv7VarV15G33g5kRXZWqSBMe83auevrNzZf3R9DTfM",
  "key1": "64ge4iEcMeYKtXLuKouef5y946D1sYMLQw2bvdUiWoWm23aQsMa757gfehkDMcrSz6iKo9dsEMbVLH5Nafr4tn6K",
  "key2": "5pW5sdJ2r5RJUkF4JbMYsr4jbNbg4i7b75pRwWwKrMbvAhwTmrRWCPbvZUS72AtNPyjiP4k2VuQQZ3ndYuiyxZuk",
  "key3": "5zgDqa22KsFX1uxG6R9YL1WRCtwY8sJEyb2YrFuXyoXTivAp7Eks1SLtgzBA1uo2WKrUH3Yc4TWHL1kjYtHMFgvn",
  "key4": "3Kwe7moRALGe34owjJswb3iaysZXEakc5jsYTiJtdHkQepW1akt6MrTPnSivdtKgEeff7pRwDcjmfLUkGUyZyKjg",
  "key5": "vXeMic74e1UzCMYp5ZfmALAhXuja13FVu9sRW9AD6Bqyyzc2PD7BbhZWRapfbR8WG89eWaWmXaqZ41nChEUSUqp",
  "key6": "2GK5QdVTaWDfJKbkd23PQz7Kqm8rQjVtvG74Mh3jKNGFnK87mNUePpd7FkUtNCzKJiX7RqNxAXisd6r3p1rFFgYN",
  "key7": "59AT8q8wgbPBJkhMnuKqUjZzuz6pMLkXo6x7fU1sZ1AfYErRppAk23Wc5iLtQeQomYCiha5rKsFZoJEwV124LoDZ",
  "key8": "3ZJMRFEuymYLhCByejozMW1dzy239ZpgFEq9JyCooXLCEgePatWhvSJdjsevjGPgPb7jFNiVouqpghDiFVbAUNK4",
  "key9": "5NMJWAaeUpe4vQWrtjQP4sBmnvsdx9cgBQiaR4cDrHVaEL9p9K43TSzTaH3eZFDeaw5WcXc79bGCCeuMKFcpSeZ1",
  "key10": "3uJALW4GQcgUoTuSmjq5hyMUrQTBhsHtt7ZxQhEpdpggyym7D2u6RZnACxsaZwL441NCx2uNvCV6LJFg5yXKzE1",
  "key11": "4gHvYaH5mm7fsUFsUsv9DrbzdpF2NyTNGmGkDzPSDjiqh7okCLpYAY7kNP74ta4SfRsEK7FnffDZkSwwBPv9GT1i",
  "key12": "2GLEZNDmKbt3MZJNpA9HmPLhhNq39YPs7z6JRaRtyy9ZBt3V1qxcajAcvDW7n9zCDTBuffe1GJCErNLqFdLt5Mi2",
  "key13": "GtNKra2Y2cAk7yN9McRRwwmQVREggW5baHhkvp37DpR1GqDzdj8Djrwt9LSSGq2SRJr8d6ZhVoQxgJLSnNK7D1v",
  "key14": "5uZUgwjbCiK33QyGvpmVzSZrspyQ7MNh4HM4TbD1KsqcXfQDMxw9DCQiiybXTxN677SxC4UdKBjcVS5pmpJUkbak",
  "key15": "5ZNmLPLSEKRAYQkBkBDJb5tHV26H8RVzQTLzUWhKznHgrXYC6LzcSTbdVn9EX4J89cKEJ17zPkxeUpxJLPc2gAzt",
  "key16": "f4cfV6Aq2ipsopoc3mXsm6zRagEuwoHZjvKMwFtNTVc8GQcibyuexBZQDzbGz9As6CEaqziKub3XaCmKD55CRyA",
  "key17": "APPaPYQ2izdVtrp7WZZ66jpKrJPaTMcCxjwdUNTDchQXgtWgGDom5E3WmxJYpH5ZdKZu3GiDRDXbuWeMefUTJm6",
  "key18": "3JBGeRHSAtxQN7S3ipV5VW6nih3YBWT9ncZ8tpA3DunKgKGkv9pL7rBpqrnApZte54NcppuRRN3hrTvAmsK81Q2N",
  "key19": "8YyiypkD8vTYwsaasCiHD1YLLchf5aWTB9r3FmuAR4dwZoE521QJbTJb5Ge9p3JuLWumxjPwWPzfnQ5vBgn7RB7",
  "key20": "49672iAdFyzU3Urti1z6sndES9FTm8qWpPWZfiEFyHetu98MbKX7Jt5Q8faLyjYHmNo8PchmFWv7QBqoKGzcFMrE",
  "key21": "4PfF4YPvpwJ2dcfnBXdDgYf8JLXg7TUSzuVRs5ChAZ4kZioeVVepMadKNU54Nq4AY3SpQDRLEnxyQqb4jRnTHWzz",
  "key22": "46v9rhbbdfKC5k9tpnE61v37HnzabEuBZCqr5m1a9QEYh6iDaZmEFB69QqV3feBkgz8W41MC7ih9tVD1bx8UEQKu",
  "key23": "4TLh6ZfAxqroB67a9KRtB7WuNDh45r8kJHk2AUGpXqxaaUCeCY8HEyDmtXjniw9Gt4Ksk2NP1ghh2oW26qBRNMN3",
  "key24": "4q5ahnkvQbDrgu2EEyJa76Ejijr8mfA3dSFMJWy31k1vfepSKr8YQm3AsaV8mdD5q2k1cXxQVPMy675K9DF2Cmf5",
  "key25": "2qDpADDooHsgzd4Wc9xjqckSX64qnsHyi519QbuRpaoawJm9xXLpMGkTP6BQK4HYGAio5mw7kiTEMnCNBcegi34i",
  "key26": "5AgYf5FJRzRBaxL6QCs25bNQ84fydJ2rmcWUY5ZZQ6y7KCWKYTeK5gmd3jSAdHHUUoR1FNPkpCVVcTsCZNoEZFYB",
  "key27": "474otbBrdQgMyjigXg6KdMbnuWLTwfv8TCMUSG4UJM3t5h82q494QErY3zhUkw4pHRhQ9gJLhrVBQo6qSGxeNPS6",
  "key28": "64eiadkUjw3CYdPQ2hu1vNDfsGYHS9tDhJcY9raLjL2nnHh2nYmksrwpEHT26HCqBMWzvnNW8CNNirdEyZjy9YDj",
  "key29": "5S3J6Hwo4T6gf69CaurxJDcGatCVUrjgBu53ePQvgVRQ7V3mtEiDXwMNBxdCQF4hpSzQUpPcaGgVb4jbUoN6f37G",
  "key30": "128Fo8kngMCHfzU4HdrxUFqLznEoB9nLebvaDb4TT5DSPmNpyAEMKgbTRjthALdjHoCqSEuxewu7SveX5QX6egG2",
  "key31": "KfFXdGhzkMG1hCW4iNMSTVQYStqK1X7iTe23iFSo8GAAnHGs7QWL2HrfbVmJaTwEaGPN2EptpQmWGrVcBPqMqhG",
  "key32": "3FBnRA6RjHKiV2j4QxMAwqsgWeRmNnGCrGcULjv6BTh61xdP4qZQiTabYNCxReKbHh249XdMEWLS645MUcoJtdsQ",
  "key33": "jBk2Ky4FQQ714rtCcAs3JrBVyQsuctBVz7oUzncvWvGWfYM3xra3YEkVJPDZi6NjDZ8r8VnQb7Lmc9psqAW6kP9",
  "key34": "3j3CvjrUQVJUJbUUdJw1ergvFnGqbZN4gVyBWrHvzR7Z4qPS5iU8DaVWDLPwNGpEKcQr9y9K5ewfkj1kC4U8Un9M",
  "key35": "29szZ3NJBpTLFTFomSEDivu4giAV529kD9oifSQJEunTgzztF7coyDqRjDj9H1GYb5PbbkX39SN6mHTuAvdpus3X",
  "key36": "2mUJRykGd72RR52iBgTJs3EwHU2t2omPA5fdZZoDwKVT3kFQ2SbMzba3dpxED3LF3LLVCcAcpoSfGKZcViVYyfLm",
  "key37": "2MBurcKyyhfDy7Zr6fsa8UJSpCvFaYMHp8b3rosd8XNES56HF8apMxSpmZJd6VroX4PhbwT1uYmKNix8kGAnqE8V",
  "key38": "4JohAteJiL8nY9ZcDS5WSBBimixp1XAx1WTUjXXUoCdgo8rVqwniJY4PjM6Fx45Yg35uyvovTjVUMBnc3eiJS3Vb",
  "key39": "49NgJby56ugABzWTtBrzPBxD578pKQvHs4FdWW2EgrDkEpKrphUrobbr8iUFCDWRYbRCHiSNApwVzaEJZYPgA2ge",
  "key40": "64XR5MRcJwaD83zzE2vMA5GFP3Ah4v5g5yXguwCaVavTRbsQ783AL8gtF64Ri7XV3wjykxemMm6vXuRU83SnUzVg",
  "key41": "2gzEUy2sL7Yb6EKsendFdBRocN1JaWavr6vfXzhFmX8RgPjb45PEJb43qVrrwwk9Jnm3Den6bqddauxeEnMmFKKs",
  "key42": "3PZZBPsbgxgL4n4vhxY3j9Ufo2gDEK5JEgEBEw2G8jnk3qJb3nQDfvtMveeqajUWaGmWtbxoM36MDmG985KDxGZZ",
  "key43": "4t7ZbCJ623nk2UZhNR1cxmuY8CVgEMu7X6kbZKBpzfRizGfW5oDFp5xXHAdEAhwhdDfcAEMxryWjx7owaaa7DYG2",
  "key44": "QxKy98XfUG7Csjq3puR437s6YLzeSucPedoSFm9cyhycS7XJZw2bEpfcQGpAfZ1dWTJFmE7sSGPAzwVTamNxxVs",
  "key45": "3gQWDmYUf7mGSKzs8fycYayvWXRxHiECvRUTVqoZhnGpiSveXwApsyuPaFQhqiDZz6x8TV5w6HZ1QBmUb3zWhNnM"
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
