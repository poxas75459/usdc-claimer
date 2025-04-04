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
    "4PyHz1AooUoECGuWU5xD8oPju2uEL1Bhv3DvSQuKQFGCrYVgPTKX6UMJNZpL6GJuteTkPr5apQmpmatxDDgngiNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e93BRWMvJ8faHQ8RnydmXcx6Ynwje5MtUi2BTtDcr8xbedkfb86hARP6ZVuA5JUexNaE3q1JZhkarRMn6SczPrb",
  "key1": "GCjk2sRnt9tXV9vfJZLhAaJbUxQNeeJeHdiL1VkWUKCZyku99QfUGB1VcMFhJRkYK22v42ZmkMGmcxeJvWTSoxf",
  "key2": "4fU3bwiTDXoSrnpjcSCz7i7DygQvxxu2Mg4m9776PwfMqrgdGS1vUANufh619cNM2D2DvxwtuYQJhWtJUQXfDTqG",
  "key3": "3yBxvXKzWnAXTr5hM9XFVAJsyeLjkLZCRaEZTJx93qQmr2EzCj7AbwzpHwbQHgtHrUbs4HUYy4fTYxm8zaCYaBJq",
  "key4": "26cF3XKFwF8Q5yjD9VRo22o3idYPiAbHHHXC4aLjxnebCEGt42KyBLwEbgHV941ahKeV6wkQxXbeHoYXpKvKZny6",
  "key5": "5EqBHKqssLTkD2N3TBTad8QDknSSVk2wt3jmx1HD8mZ6UGfmgyqbjckHu4k7ocjcdoWNXWQcGQbfQjwvnMEcQUbt",
  "key6": "2y32QQHftshMoxFDb41pmzozxD9Cipcq8L5pJW8p4YqLrT8MaFicRnF6ecdjPmLUGT8ufWGJTxYhsfwewJq3ZNCw",
  "key7": "2vWGBpV3tJoqeZedNNWApg4Pt8HjjkK3UtzedW4y2dLs8f9xVNCh94WndfePbjFidC1m3Pf7oV6FTx7CPemXP59U",
  "key8": "2C4hCnM4byHqFKZCDSEswVjuqCYHFmVvoFrsjbFRmtKV1f24Lfm27mJFxrLgYWJuuYAueb953EfDdYgrxBrCQ6ys",
  "key9": "2Km8a2e8mPGkh562xzrwbbgvKmgvXUMpxPkDVn8ECGAXB3aU7pDp7KdVrC2D61BKtqDiuzRoHPMbcbZuXUmHQFqo",
  "key10": "636EUUnFwVsqemWyTTXkGFChfvQ3VSeMhsy49qxtsfdTRz3hkvwuW58btfbZ9bLUQqDjuczmH6mPwPNXS3kyvKBt",
  "key11": "dWqCn5bz1SZMpdujociHjPxBWQLvFooDZn5ZGF4ub4GyuyY4tXwDtHFdUKGcWHCZTSdXs9QEqndhUimLAPdpyf3",
  "key12": "47M5uyrwtCysAJaGMGFeCLdkbKq4Srx9jaMMrJc9rG9CjoCSwcqFE5UVB5x6LdeMZn1dqdfkHiRazT8NzRiMmhAJ",
  "key13": "5JGJEwkkmXy32fmif46Nrk2Ueb5YVpDWdjqbcJyPvK9fWNcaMDofjUsoxpMHz3DvvG251VTX6kwJDSwZCU38Vcuh",
  "key14": "y7HdVRfGs7tyZTuV818XBsRtBKT6btmaia7RkUq1FiVgh3nGAFWh21s3c1N9JSmt3KtY48beExydL3eHMhMgzX6",
  "key15": "5yqZTdmj5MnP638azk641rtQrYvnDJ3HPnjCkdvrJTtSEFTsPs8gMrKL2zoRbxv11dPjQYAVCFYQvAX1aDhAprFj",
  "key16": "5Zn1CiTjQg9MC8eV8Q4shBdENBnYAH9C8579bVEip1b57tc8CxG1KDW2J6eS8PbgHy8D7uQTF6sc5f1Tfc5cURem",
  "key17": "14NUVJkM2E1mqG3FE7qY2tUdCfTUjCJMnTjaB7ocLFS4AccbdswdtvpCcaFi8UzXaVMdHPUtLEfS3pnmVoxwru7",
  "key18": "FqbcmSZarKoHxFrbKwNVNXwMCYcWjJjyKxBTAv5quGK9gQPsxbmJqt6cVFwe9o7ZX3kZTNQV5Dt3skRrx3LTff7",
  "key19": "VvVJrDxot55zvQVDEoQnD3RmcaxoiwpFHxbC2TnjxJGCrxcMEb9Vsj8HktfxT7K4w8VkJXgnDZX6mrPda3Mqypi",
  "key20": "8t2SL2BGkzQGTa38VKwajjGY6j6D7daNtXXWahgw3TUcNBJvzceuxxyZBatf3hP5JvLZiDD4jFuQQupj5u5dj15",
  "key21": "Jygn1VAcy78vvMjUSGL57DEjf2udqRWW71akQxkaR2aL8paNXnfEbfBki37BYibn678A3cghsXZJjP8zifRkdQu",
  "key22": "37ABN9EmpMZZ9qFNT9385hJAfjge8WfVtprpGMz4QZrKwwpVu5WRdEBMN5sV73ehSXY8NYKzc7aipUWAtK6s9Urs",
  "key23": "3V2Myxjemq82WxAauD3Kt2SE9WLrSkjEh3kEUYZ3GTL155xPhAdiQ5qxQA3v9xUKZ87NcKY1319mQKSBaT6nuR4A",
  "key24": "21rfRw9harL37A3egUgoLtF99SFiBLTsb6UmoVJRPvxspw1LViMxHNntjmXd9z4tm8XyWwctCYgjrPboJ19XpCVU",
  "key25": "1awRz6pPt9pH2JK8i8t693CA9j7A8qU7mHZGPpLcj8rJYJeb8iWs9aZZ7X8kJPsaKWhsUsT8rwvjNXZYsFhZatP",
  "key26": "4LLyWEmh7NdNaSnzbPk1D7kEdCNe23Fqm4o6Xprg23MggctRmHNsyp7Nm1Qsg1Y7Nws2Q72aLSonNEHQQjnLj9vM",
  "key27": "42fDJMnp3qe51Em4z9UfmW2AeXZXumB5K5hmgAt1E8hxAqEmLGir17PJFbvZonAzjFPExpQMgH4eRTGF9EbW6qab",
  "key28": "4yG2mgG9mhzHnSr5URW8uzzm5De3F58YtLvBJ9pykoCT8PpUqgFH9G63wwCnjkmvTyjTHGjV23mXX6hze92DMb7m",
  "key29": "2xsbnnffyp3jYqKm6LNuoQemCGUbMxNQgRQtULgskxPcupm7yaGW6oxcCD4JhqqBWDpWiPD58593U5oSS7yMt88R",
  "key30": "5fR2qpv4YdTehdnSiUBqkozccwVBE1jZbK8ieLqzqSq7SyY8aiDxHYbe57f3oY5QpBaAxD3PG6YxGhoKShdo3xzh",
  "key31": "3Z2m9v7qYkm2s8Lwgg5kffpHbvGv87pd3H9j8wjKDf8otKaX2DQ2gdGF2kYkK8e2UaDQb8wv67diutNSzFSq2uNp",
  "key32": "61LHkRzpV98xsp2fQveUYG5ditK4xZWfL8bj1SVX87HkEzp8MvziBwJPBR1rBdNK3EYULcMTTJ1RLWGrs3CNCpb8",
  "key33": "5iVoaSaJLFZXi6HfZjS4tnYR3S26jPsgbXJVUXBRopdHrd9c48vH7JhXzt41zFCuS1e3Aa17VWMkS56ZY4v3z4UW",
  "key34": "2fwkwD6WQYF4f8TSHCM2VcJtUuwJATwcZn3R8x8cNt5mgJh7JGrfoxzjaEvYvraEFzGzJnynNkgkRBgcqW3GMZhD",
  "key35": "2k4nvBBiYTJTM3dfZjJDYfKUwMaQxtFdiiNQtB6BHtANSL643nC2DTfgdUN3envmBRAYHjykjak4EqxG2pSwDkET"
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
