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
    "62MvcGnP38yQxm1sNKSqW9m6v3PLamXwRBKAJvJdKPQnSFjCvyC44UzZw9skCCRmZVF1GYFGrrrqRymHQEUvTzZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HRJfCwnZjyJ3c9gCqSgeny1zK29zvnsnga7GHBqtRxb9zDb3DLzGg9DcAsbjicpVZXAZwLcpXszYqEaNSFquzGX",
  "key1": "66DffotYAiN6dRCL2m4Kt6ou6MZNEyzngov1S83uHEJZp28ibmtiaxDiPV3YVNVKNYJqx1CFnNktmC1BXMJUdjct",
  "key2": "EUkqG7Cc9SGK79Jzkp1SGTCkqrKxmSVfAA1m5k4Dvyy3dMPgD6Lsk8Ui7jEJhH2Xn5n8Xp7jSXicyv1QTyda8k8",
  "key3": "37LAjuhu9ZgT71JVWGfZeuwkZcfcGPtxy3erxxYnEQ6HZHNgbBsCprT3VpmTSopzeToB3fsqsjgYS4xEztfnppG2",
  "key4": "5Tei4LLHVmxn3e8YNbLUfevcuVmdTiKnzg3xpejADUYtAYxPy7FfvqwhhtJBy1fpdrezUsJVSzyp4SqdGfuWJyrc",
  "key5": "2CmpPwTw2a8eo8XD25TGo3tJ8U1HAndojXizPwa6n3Qu9bvCDqvdDGGKNVAQnDBZm5Az7kpuFbtJzWBJbyEyCcy5",
  "key6": "5afgRcaagoqq5WPC58QP4tNNxFViHxh3kXjm9FVeQraWoquFhDmvSu5mNjDtT98qG2bgtugpXXX3mPLU9PRemg7j",
  "key7": "5Rjs3gVDmtFA9JDnKyxvHVu39XaY2ALafpLsq94M9iHKZyZfRdJ467udfpxwiCab13cGJ3NDQV3CrajyNb1mj1YX",
  "key8": "5nXjzaUE4kzcNJLMSnp4THaitB1HBRjTGDdibKYr5HCmsATDQBVvmHQLFqP3jJ8haXesaboHgsALwwfUVZQ7ceSd",
  "key9": "5DJSjakcy1ye5i4Mcu5oum5CrTFSFwMSWDWF36CSpNwrHiQLvvEEg7ir1yV42cRh344EHnHYLsNPBTeTnEgdxFBr",
  "key10": "61EgDykAMgpZ9hzjkRDzbYLdj5TpJtj8LbNLGGCBMamjAMgTaigU6aRhtxrxan665heWuqDa2xYPXPSToRHThHCz",
  "key11": "3KbQ7TANRY5fCG3uLVveRxqohWK96nJHHBPTnNd43E8NpboFWRA9YJvUWPiHEfpxscikREa3Cqv2fq1mCTvKc94i",
  "key12": "3acR15D9W4nMQRMHLhcmjD4mQTVhX3CoJrFhwWsmW59yPzjSyovQCDiDXPD4eng7bwTknMqPKuGfqgeiyNaHx9MR",
  "key13": "2S5jRrcZg1HfKEmVjrJwTcHHPD2S5SG6jW234AFVVc3Bxe5DJ5nkFi72tNa3ZZximHTtWpnYieYPyauVZjGcqoAW",
  "key14": "3uUB4vsA1txBGVZocajjq8gqXQqtUDkog2aVak8fwu9Y8TxEBtLSS5HcwozibZCKrHwkgUBp5dZ4DFeojUyLhrgE",
  "key15": "5P6MGWH1fPQ6HLa4oMbtdEvxZRWdCyoopCysyP4rEv5UX5CPdmnDG1haDcT3pHsbNfVQfGqToBsj6Z8L8f32Np2Y",
  "key16": "5KCFTp6ft3wPVQ2ApUC5EmVMTifesXJGpkfD496JwgKay6KMVojM2QPo5ct7hTvUA15yYUt6xRNqw47Png6QmVij",
  "key17": "3q2T6Vda5Vaj72TKSFZJPGvtnNh6CY9EKxyrHWKjGJCTXNDU83uzFLC5jzEWyrxhCsDQfvyAPquq5AEJ7nNMmuE2",
  "key18": "7Ho2JnbxAe3XrCp41EbS4LnpsABAFkmYkJNppgb1k4AxRCbMi39dWuf7dNMf1jAk7g7x7T6kPYwH5h2Uht8dtNA",
  "key19": "3Acr6PGryss3KPD5yXhFJCnSSZ5xHmNCqXACEBpvkT7uzna2exSTb5CFYX1SwicQzkSFkfN92hpqAojzRJZjCVYX",
  "key20": "71Tn5PAMeriMS21N7KxFGPK9Fy46CpjicDLSad6Wmc1jMyMd6T13L6x4Vmwtde8dVqGq9Tqry4qcrM82htUDNq5",
  "key21": "4Kb9DHQHPUAqcEJ2s7WDkCdsEAv8tBbneGyUnhhzzbPFbyhyhDkboQnAPdK2ZGUPBJ2PzQt5SB9fdGtvKW4hrGU4",
  "key22": "2kLPQC3hS538wp7Z5qoR9r4L95fMurb9nV3cuvgCub4kw9dJvD4hpg1qAogjdmkKS79xqNMSfhxKdbdTCZhRu6Gy",
  "key23": "3Q4yGPqaVRDai16UEu6DWfWBKYBr41VNZfUhnjmfepLM9WnmxqALgBoqoULLDdspLGt7aR5iUHdy5NwoB1kudbdV",
  "key24": "5b2j39RBrSigHwDRdjv8pJHnJ9dwu7S1EcF3Dfit3tUCWqci3NDyujpiFbR4yaaN8SsmJapRGea1FsrRJBtNMmA3",
  "key25": "4ZGx44GcEMgSrmP379MnnKk245Dtvm83tumJEVe5Qqgi6pnsWQG3t4wMM9bZ5v3uyniGZ1QFNm1gSVtqwVeMAwHV",
  "key26": "3VMFPhjJpKpCTaFCyZ3KJP7sD6bBBBvtqKLebXZvHJwHXzzTAeWBKiPeEb5bJKR8bhiBHUxmaASvxZyRBXFAUEgs",
  "key27": "3mN1SuKtmAG2hRH4j9cCMuV6gQjVjoLf56BhsRpS47bYfxnPq5hTD1MkarSgQPNAnP1QFHxiw72QFrhidPYuYkph",
  "key28": "4dMZnvbLBQDuiSu8E4zHF6Tq3BXVr3wu32z4J4Cn86MB95hbCm1GEwz1MLVLfQRfdVdEQPFg7BTRu5Q3j5osTK7V",
  "key29": "UA9WunwhcyDTA6CsPPqTKSHnu3x2vLUH33HUPH2C3m1eeeqzf8Qu9NYY1uTCBuNyLKKuo1NnTR9aB7bMHZTnJeA",
  "key30": "2eSUFwv8cnPb1n9cn5gZYvsThGNQBtQ8dFH89PJbt37V4bzNgUZ5GGfukKnmjVyYdzbmrQLmnTEGeXhwbHxGntuy",
  "key31": "2v3mKnYziQDtj4G85j2xiKZimUHthnvkxBiYZsVZxhQhMk1yWNMXzkiFSbVBmLo2EoHBmrC5WsQCBJAVGrPmemd1",
  "key32": "4NvDBQFPkebiefeXPPQHynockgabUFZUvCe1By7bSUMf9zt4jxwF6WW3RfxeteBULLnr6YF7ZFeZ1yZT2icaf9Yz",
  "key33": "szvLpNx62oKkfKxzn4eUBjhFZdkRrjzXCB64NaKeXzBbF2PbLePDVYadengFALzNVs9aBR4JfCfqQvwAYVYt4XF",
  "key34": "4oXA7Ss9Cr9RCQP4DvuomWUmqMhZkBKS5fb8wGjqubNn8wjBAiv4pTJyKYzjWxTnAzD3f9uzgC1iTYnhBbMs3k8r",
  "key35": "3jBxCuvL3KqQCwVM5bCvkcy6tpDABbauuNWQFkpwWX746D7sWwDqXqsXFRfYxR4pWWMEpk2ReAJFepfvm9dAouTU",
  "key36": "53C5pVV6tMKZoLF9bX3GnURchypSMcq4uLpPwJPDGW42s1jZUD6MLGW9FVuBGPapLBb5HYrCp8ZAEHzqny4cNQXK",
  "key37": "4FMHchT6mrG4aMMFeazngX7nVsZgma88Wa29yDuhvy9JksGTFJXAg8tbcLPVF1wmJg9GdBzW5cWJjdzBP4ZQzZ52",
  "key38": "3ebRoZ4S21wokaWuLFnRufK2gSAbBViMt8jf1YXxEgQePGfPX5CDymLtePvTmupVjtBjFRiR8ChXeDQh7o3qYAE6",
  "key39": "2vsF1gmKUNCYR6xCX4Sc6FgVA8NSnkgM2du4FxjiHGWosY9SyRZRRryr2BceYaeEwY1LD71n2MsszPKr1imZTQ6J"
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
