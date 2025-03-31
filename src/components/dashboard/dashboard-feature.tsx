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
    "2mYHuGonW7WufT5ShCH3sXxUafF4uT4mqoSjLbDk8dhb3UyCTaL7EwtwwvwHABQn88bnBDAJLTTQ8zYaYWPPexz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uV9GTrkud4VM8hkQBmt1f1z63KMQQYQoS3o5XKdioHHt1iy9Ju9T1M3AGDPtV6AYecKFeTaDYSCwoJRRmzdPcJ9",
  "key1": "vh5mCFax3Cg8EMEpdxAxvTU9x7x9sBehLf4GKykUzM2RSMjr8L2bLX2f7owzko7D91KwpfGUd2YjPAoxL44KvoR",
  "key2": "4ZqT5XR2UM88kQpysk5fkeeVGQcznNT7bokgRvPWKdcHwZGCA8deH7qyfRPrqPpUAreJC55W8KKitJa1cmqUjwhf",
  "key3": "4kS3xbGxL6qvRJsWHCQyZJQFBVCPaMCT5Z75KjerKQDcH32vvYBtWnidm6a7sGveLyF8hGYsvEMkT2RL6puScei5",
  "key4": "3unKCYx9Wxjc3hesaVzxpvhj79kwMS47ZY2LdAUFrjHfAtDENTczjzgCFnKfijVpBUSaxqF9BwrpAqkiQyeVKByV",
  "key5": "ZE5A87jfcVL125E2QbSMdLRYvxZ1kG8BgW7B5LCzBs4mxpMx1WLTriRGheigFj5yhUoKTB9bJC1yyZwn2NEAK7H",
  "key6": "5ekrY5VF2y4BN3ySwqBQFjTFtz64Qiz1gD7Du1uHw3sCCoRXpU6eDj8WSyttMJPbTbnHhDcngA8S6oA62ucmKvHT",
  "key7": "2vzYt2FypWY2FfPSRU842mqSYg8sKvKuhw5YHtS62ocKub4bEoYFxYTdkKGp8P3em7GsxF5DU4xBMUgY96Uo6EYM",
  "key8": "tvRy7pWaV2q5nXau69r7EWJ7yiVBuTAfpjP8MHuWQG4Ezo5ZyX5AfYNeC1Xcx4vEp2w2RDdPpmaWt3mHdoUgKw2",
  "key9": "qHAzT4P9gqnYmqe5MQmrvhXhHUKpuZpVQXQcYSXvBqE7SuEiuATcbiBQQJZSf1VtdbPQiwuWVm5JDbQCTaKjn6C",
  "key10": "63FSn7xcubRyZwTrbu1QoaLY1AtYMu7sKRjcbjjfPo27WmUU9atwz85CvWg1bG155pNJX9p7XeGhx7Mtd2osaZiX",
  "key11": "4y1eKUPhHJsUye5K397ubTaP9cz94JhyQtR9z2vpS2cLh4W9NypsLe3ZgyMvgcdD9vyPrTMeTMu1KaisUYJH1kuW",
  "key12": "2bxQWA1GykfGsYd4damtvMzydhMYQZKuEemohaDYCfogHhQvtwXcaEs9iZptp2z9pQHqsF5MVMYj9dGFF34rGL1v",
  "key13": "5Dzk8ia4ivWdct33na69CheBLzf6SfzDsq1KEtwWzUmG2WN4jUaXoqiFaqftrp7GqcPLXktkkdJZyBSezApRoKua",
  "key14": "4NcR482MLdwmsthnYUrVtPGP7vn2BEYLh7gZ7MT3ijrM2Qni7CrK79EsRnaKiAwyRrTjCFzCd1SHHwtbiuD9npa4",
  "key15": "4isP3Rbw2ZKqHTCT2WbJQ4YPermAyRPBE44emV9cnMQzqGEMCeWyu147ATYMQTuJv97NpE86fY58ZqtjESPm3V9p",
  "key16": "51qKubidHsDbbTW4ZCWXxJnt3S4FS3bBfvN8wdzWQ8SHCWAFbFsr5B674wDpvjphjQquXWqWioib456ZQ2XpWck9",
  "key17": "3ZjkLtnmodqzqkKzjbBK1iNL4KBYCepjh42trJqtSUThzbvgFoaCJPCtoGHsPoHb3tfhnxnzWDymCviJALVu7KkK",
  "key18": "5GcbMU7twaRL8E1inXMXBunKKnb3fs16rCEiB9F8uVovaNX4paGHFNQa3ewNw6dZEWWsWRqSk5er7Z9HPhRgePU",
  "key19": "eDV7uZzpryZk9RsxgToo8yzXDLHtPZoGY7NyiMb9woKF7LKoRCwbqkfs7JRdiDXNideFX39Ngz2wqTQeDW9YJq5",
  "key20": "63q6ESyKygMBqBNtpVWEpGPCapQCu4kUvKh9Ag6bsaKDDtUoMfPJvzQGNrAtoLkh1XDEH6mYaVcTgNoL2m5UfXLs",
  "key21": "33yca8783rgk38V2CYUXB8z1YhQjkb76dmshd784ph7wVhxuvCKshiZMosLaf7z7QnAC4fajb7x1z1tfjTR5aREi",
  "key22": "5MCHH921FMiNZbZKV87xv76LHGe9vhJ1j6rhwCuEugn9RxTFUQvRccQ2BpXCsbPPVfF2DSRK6AjwXRAmjLRuhRWL",
  "key23": "2c59HiQNp7f3Vdpb4ePZySozSpZkoT2F8HndQazo1GxUzLQb5hJvVRLWzgGCJgg3X7a4wqqC2eB4dL7RyYWF3g9H",
  "key24": "22FmV2AYS3dvqaWsLBSM8oeBnjrVzvodJvw7UwjukyjLtw7SPnU6VJufx9UWd86JXq3CgyMBeA1fS8s5GMX1aDiz",
  "key25": "3HThbCoXex2sb7xQVKzDgwTgCdgfD8UHUjDgqSNnh3y9HWP8F2wmSxYQ2PEXJr8DKQrKv7aHZzLDR3pxzkb5a4EH",
  "key26": "3fC7moEr5TSQv8oFJnxJVwBwJEVViXdJpphrjMfByHs2BgbKSwZbeonLc3gQq1UxngoCj1Diz3VWaAbaCAk1drjp",
  "key27": "4QxQ26KiA5fUPpVTynHEZuDTFLodBvqFDrL5eUZfjfQr9aLhDr7ExfyJqbXn3U8TEXgJCzbxbXQvHEjYbHvuwEoG",
  "key28": "5kKk2r2G27jMQN3CkVwe7JZFeTff4WsDY4tiYGBWDiH4M7MFn2fhuogpcYUsTxwVtXtov8nWNgfDkwrLuF76jQKR",
  "key29": "5ndtons1hx1kY9xFRhX9ZVveFj6kFM4CP7PGzHhv9rYL82DktjqxVHahk7Z6Js991tuxKJt3Vt91LjjYpmtVx9dd",
  "key30": "4mCgmhCuX3djgo5ctLe1EsGJDNTYUmeqq79Duvn6Upvyyj5j4kVvoDNHG66KCQzoPC8Nwqch9ajquiDYp8aoacN1",
  "key31": "4sgCyMCN9tzveHpGuiofmBqcNyWmcLXo8m5Na1yV64S1zWsFQmWLPCgYLBWv3ruVaxYFjYjLciPaN5XfnhQEwt3c",
  "key32": "2NRzBCUL7ofYr9PR6psSCLtQqKojPuryxY7h187ompy2nhsBaSmtZkU1x5FvY15FDbN76awW5KYjHS6E29wVT3YS",
  "key33": "2D8maYt4JvMgL9hM3xqcZxL9JuUgxyjng3kKwidF512enmJeRGLWmHTHAVvfyRBhtsTeQ8u96SFajrEXmooN18Ms",
  "key34": "SpXso9vM2hhsKduKkRjGoSGysnSrkr5PqYX56JFfiTx3mXYftazbLzJKDMDPpd1aETjmupycimpozXZZ1ow5QbX",
  "key35": "4hhKjqRYaEmGecaGGhAhNZpnzzGwDEE2gQoXAqt3uK86zQ4F1W64a5jw82zWwVDdeei8JRTeKcDrCxyqABK8NVvT",
  "key36": "2hUAeT3oQHUAzaftyjw2cCn2reZE47qeNJjFwp85nMBAPo76yqpLtLYGJpXrPT5zps5o88s7yNumVBmb2z9jxzaV",
  "key37": "5kEogApBUhxSqCCqELzj7aBS8nZAiM6VTtC8M3C5vSieUnq1P6HfhykqZCMRf6mfwMwrMUmeWYoxAjHvkiTirT5W",
  "key38": "5MNZvtcW1zF8xEorNZLr37Famy48NJwtjhKUfTR9MPcuCh6AQKYkia9GAaJtjGLPsodxyqP9Spfi1uFW8Ca2BWKM",
  "key39": "5aCwZoZpVgW6XD1Eqdn1GUXV14bfCsxCFPqhPSN9wDFTEVjsvJow276NgrvpkfYWdsy66VfHPYGPikcbSXAQCZqE",
  "key40": "5FqzarrHhK74Kv4ZbcsLCS4XV2kWj98dDedCpP6UWDje8GpMCjpDSq1R8HMMuk5PSSzWxgxE1jbBQtQnmBo4tysR",
  "key41": "3otuNARmE84KwHC5f8RR78dxMN5PuMwAWRkHXZbVfuEpd9q9YZD9TGxT8YQJeTSy4Md7FTgtXPWWj92gmC16GgPH",
  "key42": "2cyVMrbMPH5R152XQDWjYqm3Mba9GFmSsomaV1TBy8BXhZ7pGDfySHYCFPbbCPjngZEtehwYHVba45UTHY4WCoeN",
  "key43": "3KF3hVDSvUG6ESkkDSV6SH3FLZFQHPcFzbJ2JBE4cEKyCMRxPPGkhK4mTugHJB535NfajAyNCvouEsUfpMH5ewLR",
  "key44": "4jFYgew7rwFEdksG5fV9qEGV6H7odtFWbu6wqq52VTcbJ5wEZTQ37Rz3d5mpUVZs2jmn17aVJ9ts2qAsy2mwdeWM",
  "key45": "HBr9BetL1x2jNtdGubmA3it63XXk7BG14mxnxemaANXNsPQv5k9zsbiZLTS22KtYYADGz16dJR8r8PbJSxpCxKn"
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
