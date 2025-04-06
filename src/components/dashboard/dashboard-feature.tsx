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
    "5k1cs8qvYNMis68gp4HEVz55yzcugb6Qxw8msZZ1aBmMe95HfNHSZBVdv5pkD69NgUCKFm6yA73b8UCJWY79wK3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "376MjVYYGvfK6cziLwLawwEEQjnRAAtga9L4h8EFNtzgsn6XApzKeCPxLfHfpsxSpxUscVSFsHAarB7AbPysezkc",
  "key1": "5w3nnzBmqkjf3PXQikJTQNevm5SpFAXT6XsskftSAtPBGSSeUwPyZ5RiEkvz49gZ1zjVGoPFwFTTsrgSek58o9u5",
  "key2": "2Ntg9Wp7mGzBop17vbUrdxutS8suK62ab4CrDMmzNojXGNkzk3LYd8dZAHJoUeRq3upLLqpAWJUXjMvVd4E8E5W3",
  "key3": "5XTn3ME5EQ7iqWNmBwA7eCtGS443u4hEytumuqaBDoL7grrdSnhCxRuVQ8HA417ULBVuAj2Pb47pgioREk4Vm1vi",
  "key4": "5hvCzGEPHbuMt22QHwiQK3d8A1CyZWc8drc6cGLhBUWN1CH11oNjviMzbJUWcmkPXUes2LAEZfWDpsYthGwp57DE",
  "key5": "4bSfr2zBYgsgkBzjiHdhRKfXUjTxx4Yh6gxDfCN9bVz6dLSHZyiiXjL6wGqHJLt2EekyioYiSt1MCQpmcLjoMUzP",
  "key6": "3jrDExz4QoCSHMSR7MRPCuJawWUehGTx1zdLJcHexQ4vvY3NmikpWnSd5B75m13whKX6izwf4fXUZnxhWmJWT1jM",
  "key7": "2npszU7EzLU4Db1569MSYSas2fMECm1i6FGgvVjUvMcPj8qRVicfag14DVjf2o2mLkmdKLrMPbZvPKQhH5iPaBqk",
  "key8": "3F8Mhd8WTfidMyra11LVSyCYVY6cKMc6oFDjuUE3GS3DigTMTEnR7K1XTJt6Zuhk47kSDvUxyJhzUsyhegPY5zbQ",
  "key9": "61PxVn7qmQAcEKQ9SDgzJq4MkVWkPrtCvJKdEEejp8MXU3LQusQX9B2PqLrae1QhmEM2F8DQmTEVuRJWvMR8h1yG",
  "key10": "5h3K1c8bPfV8XBRuTK2iuxUSvSyqo5xUnxVqGoWZXhKA2VPbN81MRcUtLZHBiBbXiS2HMRiScmSKKtYAfhmean75",
  "key11": "4hCnx1QJJXActdC7YDpFUpMYZqX5wVF8hj1jHa9bVjWhMAgspUpn9dZygsxVCtkXtnYiW1YS7Ejy78Lu3TbLNGed",
  "key12": "3dmid9FTzmzaQ6DRxFmwK6vTaKhhY15tDJezTACBa6k7YXHFAMGgAg8qzLVsabKxhVELChdfx7uNzT9JetrVx68J",
  "key13": "4bQdcrvp93TqLxAwkw5SVJgCqEyahvHSoi6ZWeP2LNNjU3ADEd66tA1TFsLa9U5SAJ7qQeFKpDQpPprD7VT22qQ",
  "key14": "3Bkiiz892HVeGcQJCFt9qkmMsp3ZifRWD5Y9Hdy5ro8DJgXPTKW178tCFqiXEZSvUiTHGC5WQpMrxxHrvoTzJJdK",
  "key15": "2wcM96DFsJpV2sjmUxcUsxGWBpJXGxtsB4VwGCFrSeQeQ72LtSEyPpUzatJ7jZaGkNmvnkoTTKsjGRPoA8pQxH4m",
  "key16": "2z3w1ANveVCQrHr1rAnZ3W3q4NBn8uLCn2KZ6gcWcTHmmHxqqeZNq91Jpb2jBdaAW1wDyZdo7t55bN37NdjGrq8b",
  "key17": "3oFLKXAk4qPzUM2R8aCQQpodg3UzF9FJn6p61F552GWs7QxJbqd74D3fN3dEc2PK8pHYnLpANBNya8yRofdQVdQ",
  "key18": "58QqxFEyAct2eCEnRa9eLRAKcceFWPZ12jULGtkvWhpv69Q2JKJCXFxzG2m5Ud6urn8fLBFKboSx8Gm3q9Mge7zT",
  "key19": "35br9Edy3qWbp1BRr3oDRUFutbq3n5tc9kN6kYrrfEhxiyL2LobZrgG1PB46mK4hijpg9gdAWGdmQxGwNrGU6Aj6",
  "key20": "2hpGNvBCzz2sbyg47X39SoWMdj6immFyvuXz1aKGzJN4mozHM7EjkEGPCPG9b7BDfPCc7efh2JNMzepWC73356z8",
  "key21": "2nkTEop2YYcQMCZcSJDtsWQMJdBoHF49oHgERRgD2BGHsJhL4McbhH8ruapDMRRUfn1JNbWUMiFAy2W1wfc89SxA",
  "key22": "5fBeb6M1j2qvn4waTvnUjYwBXg4iZfgfinV4Z3VikN6JhFiXM3XyA3jQTHppWJ8pzBW1vgcNdR6AhFCPz18bQ7GF",
  "key23": "2KxZmdbUaw2JBKAKtDoKYS6bFuTSkNUnNE2sG5FeaNtTVuhyYnxzj4rugJMmTKNtZQ12SW1cHdEnaszzv9dUqSoQ",
  "key24": "sigxHJs1f8RsdaKbSWbmnWtCetza5wJTSX5xRWG7E59NeZKMgPAgidq13YVeT1o7J15TFJ5ZtPyh1n81KK8b9Yw",
  "key25": "25npUpZDbbPALhfqDjvCMaTWB3cd7gzd3FJUaLigGW8VorSCJhVipUhpWL5zL69LstEMFVxXfCoNJw21RbmztGKC",
  "key26": "5DtYhwEPfJ46v4xcRH4rUeVS6FGNqmFG5iyVnSstgMxNds4j8yUuJ3oihHUuycSh58B3DRC1cnMcSVcsn1gk6yca",
  "key27": "qNJvduM7BGenQQBzMjdYtHtq49BmkTagMPDYz3LNMEeuf9FAxgxSjtS1PfuAgm8SATgZYDkdSrNVZfQ3mA746oS",
  "key28": "25wHbSzRxB5fo3hNwLLfjQkMGQGoiBuQgJitnieaDon48yyLQq1s4wCdRQygBv9Sm7epEQNRpagEAAtz5VYrruxT",
  "key29": "4182rwfg9Pj5TGB9gCjpB1ctiEVrXdk3SRRuasfcogFGgYvhmbXAQRkhPfNrvzmraDD7WQexeU17PpQB7eTxBjhv",
  "key30": "2AgSpa5kPGMKcsQC9i98NCbeHf8TFz591ggcLwQ7YU5gMnF5asWip8zuLk2HQSgX4HK2jPEYhEjto5sFckg8QknJ",
  "key31": "3roA7GR8NkvBMGjKdR3i4yL7gKfRddRhCvZYjvsc4pwekzNEifqGZyaevrHfTfbVUPcvbTKwhuhUDnCAQ8T81Yjo",
  "key32": "5tquF54zD8oRMbdZqLUJJMGazp8KFvzof4mMGa72Cd36TN7v4TiR9HsNJu31yfgWEjTDFRnsgasMTxMXvGiJBupk",
  "key33": "2rq4LVXS53NY2vkitSfNbawBdVDxeBdpzycXPyta1UQWRcfoCtrSpzFisVHQA27VQ7MrxRmwBhh3dtRfLch7iEgp",
  "key34": "5YxrtggWcBjd8vihrPn8C98C4XGyF1c5a4R77d7HAEKdsazvcYuzZv4iyqH396nMQQtjLC4xBTNjMdgzcLbpfXqQ",
  "key35": "3nkmUZhLHennorYTt5mHfBBXwjhabrQaN8PFfZE47XdrMf9KuHYCFBYUQgedfVqp9UGdwJHQ4WUzyPBxCTn37f5u",
  "key36": "4d6MsxF2xEKDg6KHTF6nJfTg1Dmx7r1LQXxmG2gLLbKuQi4Lnyx7SQMJbeEbLeeGWuMwdxRPgQGXJCfYmSQrs3cp",
  "key37": "2mFNASNnFmxQ84X9p1K9JeHc3U5HLpRJS6cGXTFNB8M7HbFWdZxGgbYeBdjhGAQj5DqiJ4grFn9R8VbeEMy91wRn",
  "key38": "41rGNSWVfRR5pjAe29eFD68Kbqm6ZAgHmrAH4YJVnkxz9cq39vQeZ2uC944MzQtn1pr8LvagSWSXPrShCbKzmKDz",
  "key39": "43rWGDZdbzGAtoXdC7FDxGX28USvCtbjU9USrrRFNLpodDNjAE78rCPQRa2X8mVyLgAnTisMjjeDHyP4YyzE9zF5",
  "key40": "3W4KJNzmt62uV9Up9mNX3DRAXnJowh227ZTxceJHf9Kn1vq6oCyDcoPYD8YWkL1GTuNzN7R1AbaPbMDZToJ29RNk",
  "key41": "5HF5p4oX2r265SfcCXKtCnLPAYty39y1E4iaibuovwoiG2FnhyZYF2UN91DCQAggsrB7zewABbJBrnKchoYLBfmH",
  "key42": "2D17MefA485HH39MiSoFJ6kYTDfQ7jPePpyd6yhMkkRJNgasKbpcPp9H7HpvUuXwWbzfc2CN1tSNQ48VeReK2rtt",
  "key43": "5WSVpCXN7jWP9edLSkKebWRVyhex7E8UV6vUB1FjMQvF8vPD1wPWz8gbNaVUbo5kkaRbZanoQwrzyJFwMCXxKBwr",
  "key44": "3VDbnLxc26xhs3VnPA44P9SHGSdQ4CREgKx48ejjjQCrAjV2puyBUQ5PUkriAf5Ybi3F3mZj7zGDiYED4fi9t9Gq",
  "key45": "2eqcrYXfgoHLQW6FtMjK9nprMWg6MDb5myUzV2zu1eRBRiBoqVXaS3deUaUWcAQ1J84RHdFhysfLJoaTUqcRBfGU",
  "key46": "SbKZvZpCRgP14hB1GfPKsKbK7QD8fn2Gc4fJ3wNtRHa5v5v5M4MDXvdiTt7YkYZM5KEJBfNVrNU8XasD1stVEzi"
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
