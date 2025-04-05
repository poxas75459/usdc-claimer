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
    "HMhtsjUGam3D8SdSJ1aw2PoXSa4KWhCxS6aMEW2n5yu8peRZ5mmPjT6iDvvM2n4wuhZRmNdSJfEX5wv1LatVE2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "86yBfpufKDQNvKJcAA6G5u8f3FYNPRcHSWktBVgRYcS9WitysLEgVjDte7FUtVH58JmKsKP566MQg4Cafv4YvWo",
  "key1": "4ydCv8hMB5YhbZtvz4nPD98mVbkX4LpYPSg6w6yjDxBCUkr8EL3M8t9n3kqM7o1TsfFzAmrmTPNmXp3zCaS3ZZpY",
  "key2": "5Hsem3ReJZfLDdBdYTSzFif7Nn1NN1QCGopUSnFo1kNTDpBQD3TeG2vUKproNoSWgvKSYasFZ5qyp2EnFXCg1CgF",
  "key3": "39nkUXeeL5hYjQzpqegY7vooRUbPJDuUjeg3u5iYpTUSaQdbz8yVrEJiL8zeNK4CsnJ47yMLuwYZhwfjPG5zMrbQ",
  "key4": "4UcEoVZ4B44Z1mHESd1PaWBTsytvTpRrbNYWBYfd4audDNVDcUmgmbYKajo49myLewGTQrK1J5fNcyywmHTGQTPU",
  "key5": "5jPrTMkeKX5jB8KHkNzpiqAYrnSC2J3RCSppkKUgMxnm3oSmyavm4qyFK1rmyg7zv9pNYTxFpUDNdDk4Noyafj89",
  "key6": "5QF3Ke1xgNt3jj5iKeCTkQc96ee8eLG988pFfFKPvSYzraXSpuEwVss7F8ktD7QGD58zFUNWtDfgRmJ9QGKVxfKP",
  "key7": "4w8d8XGtP4vwycXzjanHj1R87y3z3kMBB2iPcb7iKdYm4DW8aGLBUvjuLzhmn8acbxrW3RrwStD7iTbzp12HxxRS",
  "key8": "3GCySUJAKeDZfGknJL12Ruk4b51VS1cXFSj2iwKx1HkCDvGQm2KGz6M2NWWWqJmGA5r5QeyMu7BFQ4yPDJbbAtNE",
  "key9": "RMA6NyAmeWH2HmCKXzchxy8HkPUjswZYTgmJmVxXAg19fnuAiDhfoKgsWpWyP8uHFSSzqJMnDo7yZzmCvkwquP9",
  "key10": "21tH7cdNUeHQ5vgf61yPFbEwmSZ2quDqyxp3dxcPKtdAiHHxKMunsqPzpBz5PmdfC5difZjcYhSp3uLaUJQ1iE3P",
  "key11": "3yQD4sEvDRaud8Ha9MqLjQkGukfqyLbgFuQMHcZ9NyYALPc3QatYskpd1wEnPyoaGAjWxYKb6G4a6KZRsjKCXQEM",
  "key12": "k4R8hCHNySHPAqw8Z7nfuY7b94QJoFge8aBxmGQcPJNQCx927JQmxfP5fauBNXEyoT4ikMBswLw3dJukYa2MDTk",
  "key13": "3prZRwAXDusLk6iEHCy6wbmHLdmiEmbNirRqrLwp4tyBArqLPmQi5N4TfT2q5L7bY5ewPgypCwHuBwurTZUWR5YE",
  "key14": "26CbtxrJhXaYSrW8eSfswEpp7XwRDev53LBQquGjDno5ceKBkS9CzJyjjyQG2PsndHNyubACmSxsQVWkdsFHMcPB",
  "key15": "5VZ584RWbF3Bvxuy6pHgdACDje6GKx6oqsFM32UjCHuFdGMw1Xi9U9Lg6NG24C1UY8WTDrU45wbpTobdgG4oT1y9",
  "key16": "2NFAE7zc2DPrFULP679CXLwydPdgCKyzUXMB5eCYs6faZKTUYuQPNA6cfvmRg8rQaqko34EHccZYBv2fQZSnSxyR",
  "key17": "3NDt4qRAVQnoLCk5y4z5TJ2UWGpD1nuWvhLJuMSDHhpL1prrHb7G2KrPNMzTxuy5BNqkXkjwc5b1ZsMxAJfHVspi",
  "key18": "58vp3U82KassEDdbYPbd1fJYT1x85R2Eeq5UckdoZ44L3iocCDWfXtqfo4TUSTA7DnCeTdhcGcnTnWnjzMV2y2uT",
  "key19": "52EGZ5kjRHd8JYMBg7kWnf6Shv5DRHm1HcWpXKJ1xFLTsWoKP3vHRYsGZZJZLYRRGEQxaygDEpBwSaFijC7jVadV",
  "key20": "388E9hGovdwfrAs9WtjnDwXs68ccRPxmawxQSW7CPi4TMR3bpvVYftvV77QvN6T6BDFJyjQqCzai3XtXRYfXijZg",
  "key21": "5Dfsts7LZ5h8Vs9b9RnR5b9BE6EJNo73SfEnTLWJCbMxBDJ5ifmLPwJzADQPS1oMSJof96dDmfS24Dnv1sdiU8cn",
  "key22": "2NkmK7zbXX6n1x8Nv2qYUnVHZaAvcHbFuSFbyRBUiAv4uW7x2KvbLQVFpCkPcz2Wpz7cSg2Fy4Yx3KLDbbCM67BZ",
  "key23": "UhnuHAfe4ABKxugrvWPeC3KHjuGKgFzJuSs5zYi6Ru2ifLbz9J3by1heVZDqB9cHqBvZRGkcCSewpvmjhgn8WoM",
  "key24": "5iFyNR6m9zd23ZBANDo67UPwgMqMKxQC1peDHkyJAU3kBUsLXPhf8AtSFj1QrHMc8eqDk1ZEA5gS8dBnzW2w6YuN",
  "key25": "2xSgpVXLambcW1494GA97cQeJEAVCGtAoJTcj2jbr3xDTb1jwnkXupSmH3TP11ggqKBxt9RUH8QA2oKYJTdFMiZi",
  "key26": "2itTtDGHVDf1xnSMDnVfpj21K53LQ6BCVqXeLaMBnJKLubAuzQYur7BmptDxRqTBQtQCrFVrDdmaukx1zGYCGfqK",
  "key27": "59Bujc9Z8fC9C2R6ZC3vuEt1Lz4e9UYQbAMvvFWA7L8bYgdn5GarFoQ17teHArFqZeLsZj1LqhWudzpDgokA9ycq",
  "key28": "3yXYQ98fSS1KeG3UVkwQLcKiWzKA5nh5YJL2wUzN5Lc6SM3HuRAh2Wg8YQYKMyPJKLJiuFnnUFp33SfNV1oo4d6x",
  "key29": "4PGa5VRBAcE4ysiuXDjV7SpHrfp4HUUqVNWGt8Mw7mgPYxWm132EajCaHVKAKkryvQTgK2PpA3kAT7kL48bKTnBs",
  "key30": "545Xt9RnWPY7nq1F8exmhEb7ARc3gCwRMsVnPzDigLY5QE5ZNya2gXiYPorvqw5Tvf6UMCrCr9UkeMYqKiA2r3d8",
  "key31": "3n3pMACoZv6X6jb4uNpSQPVHvmjmB96csKwGWBx9Thj4J96G5Wpos2XHoqbAP5Xd1kBqbyh9SczhWGP4EbN8WsuF",
  "key32": "5J2T5h6tpfiXp65xAoFoeXmrkdxxnGdS5DgrjK48Vu84JqpyJDqvNbMSSvELLiRftakm3ceCoe17puBVVXRZVnMA",
  "key33": "4kKztJAnLRsq56PCATcHSo7SBJBrtAXe3sWM8PphqBK6H6an9gYvUu26mpiBG95qAaujsLP9qz6SSDjv3EqFeF4e",
  "key34": "S3FiP1oZutxAzGvCnrXRbs7znGBTctjmKvFtQH996ZUdvqQmxLt3D8FHMXJPt4ATn5akNyB7YkAwPpDXR9tbwEH",
  "key35": "cKXU5FB31tkGvNDsmiTyP165iitrbVoSoLwFZce8JnfiYErrGtwoMrzrmSXHYi7f9iwiva3KtAHY6bTNLEFfTU7",
  "key36": "4fFw1DXQ6P1NAcEL4pWcw7S2KwPpqR7yEFAeqFAQM6dRYDkHZsaeuYKsKPFhbRo383z55mG54ezHU5ScKrQYsPCE",
  "key37": "SX5znE7ND79DsaQAoKeegqviyWUV7tfjQ2p2zaBKM2xNKK8W3Fii5u7xRDuM1ZVtkcKvx7sjtVaLEA8S4amWW9L",
  "key38": "5uMu74Rm76HcsgeJPWuduFaq25rAo266F9JtP2ExCEjX5V1w57MGLvmcHnDegFYPZTqgLkqBAuUG8LmiKWA8Rdh2",
  "key39": "4oaqAdhKHVTyUcGSLGQREnpgm27YrxLb8HCWkbbecNn26eSsQ8nUdEsyVdZLK2ESbq84cwxoLnUD4GZLQjp6QkR4",
  "key40": "4RUQnZUsjSUYnvDgb1FhF6EuxDKPz49f2tUbietWHMyswCYbUy3ypNeS9SP5axz9AkMWi6dbhPeEbSEDx7iMyRXS"
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
