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
    "5baxBq8qpUzztvFktnihzP2uECW3g9xpACQiVqKNy161XduTS4rigMeXmGhVPQu1oamzdY6ubDhXkoXe3rb252Cj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f2Tmxo13RjjtJR889CW5K4MYCDQezP42e82pif3WdxZHnumFKvgM21nhc8x7pSx7JPUf1MV9ShfVGDR4MpcTAgb",
  "key1": "2o29JAerAB239XJRbhhK8N2zauXv5cpotj3VXhSabi81T4EAGPVbqSLyntvP9YxgKmZYjb3YfjuxXc5nehxgpCev",
  "key2": "5LR6nYvPynMR1MvdNcFRWPhKTnaExtfXQJRaetwo62AafCRoPPn1RE6pmrw9fNMWnDE5KRVRtVuUtu8cRPzGnvra",
  "key3": "5MQKeTQyVeKqfrDMuVyEiii93F8tof1Psi9Kf41mhrsQjC2YeXVee8xJUpqKTMmyCPXURhrJMGv8nYuRY6qhyANc",
  "key4": "2aST6HTk6zufR1KXQiuJ8NTFDvpPU8EpfmduBmv7oUyS42EG5uYUnXcRdkrzxS4L7ZFch84o2g6iqbnrPpHDi8Fb",
  "key5": "2nMR8qEKC4ir8ms2tzGrTbJn1hbV5ZLkB7GLEKvjDhALC6E4GZrsfVGpNu5v7Nj4h38kN4iEN2LXNzWC2vBGoUMN",
  "key6": "4zLdDg7fW2pwksU3S7TUCDaNvihJwQ1wMA57L2RyL55NiYtdUeuZ6QyZJYQ5Bs4gBkixHm85UWLa7trGSbP3eH7u",
  "key7": "MEH3Si6SRpd1MkKmwwePN3jgzBwJRirwiB9bhGdj2CU5oxWVsH5Jjuwkd3YRcpZEyFc6xgtX4ijC8DimpnscQiM",
  "key8": "2VN5AETsYTezt9eBpSr7evCXuBUobz1UKW2ksDAnCTdZvvBy7GSrizMe93xrkR6W9FFGTZqkXc6s1TCm582qFo3a",
  "key9": "cbEbJ8m5GYXrufAfkqRPmYirmXcY41PcWr7LTAjYotQsMg71ycHwnPoQNunKCghDsTq7k41Wdj1eiC9bRGTnWvw",
  "key10": "2PrhXFQwyyamTXcTg44aySwytxPHjuRGNJxSbbjZtvMUCUfdYem4cUqcF3oLq1UHieZrWMvYy1uqkq3m3DjzbLv4",
  "key11": "dWz3NyzSNYdm6d7yfYSFp3eDoRAvBpW9ekde2aFjsVutjFCB47DXJnv8H21W259kVc35HnbDUF7GrrrQ5qZEvL4",
  "key12": "3e9Rd1wFJEXwZM37Mmpfe4sphpVbqofzFu3cgdpvzpzRzdoo37ZaP1Q4J9hcwWHaHpgxK4aPBHVUrQea6tKxeafY",
  "key13": "5qvMmhWUdmz5NNpMg27EizzoGHixghrNfpPiAcsDwWqPGTpY8hfS2YaAPd4YrqbNFRyYukd6jpN8US4Ve2JUtuni",
  "key14": "3fhVvZZ3ZYWor54icGAGcSn67JE6SnyFLEJDTjTv8stWkHJFGd9t8EUzxTYj6V9e3zn6G9NPU49RXFfxopjvjgit",
  "key15": "5g4sDw87kZiQQCKpmaPEgnkD3LohQtchPa2zHt3jHw8MzFVoHk2nXfpNHNtAfLwfpYy6gwpWoFjssFCNQtz2Tb5H",
  "key16": "5pX5LzfT2N5FRuRtRACATko8BSKqZNARa68Rea5NP9eBjfx6tmJNT4BmZaNysybhYUhy4ZQ6nkyM1eWgoKTiMN4W",
  "key17": "229aoTAPSkjRWv3kDem1DVuyzdGHwgmApLRKxdWsePn84XmxoZokvuR92AKkr1M11u6u1T8Bup2t1MmDEjcaQrFC",
  "key18": "4Sn7yT885Ld4admAewyRjFH48AxJQJbLc3QQC5Kkv6wMgV135LnAZr1h14TJQzqbcJSbCTEXgdBFxvARbyLNUTJD",
  "key19": "4UP21SN2XG29yid5sqcDgLT7uscCGM1ddMUdfRC7hvk89JW9Cz2YoqUrningSGv1rvU76jUArhhTLP9LUPUPgSb6",
  "key20": "4ittNth7JJfSZBb6iqb9cRhZtzBRJJ2EmYQ32nDqaWpnw9cy8YFBqMREKBjVCVRCCnA9ENpVTjsRGQuqSXR9Sh6A",
  "key21": "5mttgCnbe5FKyJVdXUBq7Dv2aiJ5abCiiVAAbYn8DMXVcANyd9xEwPYAN3SkfCnNaj4ESouBuWqdYd9hhpnrWmEE",
  "key22": "XNf9g6GgWEDQi7K3P9bB1MBBNLVHh1D3kJouKCPS9UtDfagbRs6R4JDVLaqheiGofVqpP8MHD7G2fUS5Kt27xjC",
  "key23": "FZECFUHWneHCAhWnrFvUirdy6XSE6EwhNJkqAGXZ3eowLaNGP8dGukPz5eBRkv8oV1KUgcfoySwVzFDjBL9Cx3d",
  "key24": "5avGLm9Yo6qaFkMx5VkWEDaZMJ43fBJkmvf9hnccR46jw8nan5KuJdykt3PqUDEDunKe4pj6zQLbBvoUPsqpDWpT",
  "key25": "4bHkSDuQhWJah7c2Tua4HTYmnjuhT6Yn4suDxKmiBKD6idbr2bDrWXAr3xAxzsLZwuU4ssZmBkc5FR6kozqAc82e",
  "key26": "4xY43yC53ZyfFzp3kLoFJvuTgqSkQDJP5ewjwCednDA1Zw7pzykCCRQ15fLneaU88WAMZfepydeWLbXvZ6eQeQiv",
  "key27": "2tpSjSbccUafkWqnL5pP8t9Pk8xEo4ErvnyG2yEC6WB6VKZg9SvqG9EA2ZUC7ZTgucyMSS8rmfVbncv1HAy4trQk",
  "key28": "2CSizX86EgaiCDLsBPDaViq2GXfURqB2TNV2PZMJNjBxyFJ7Pcr9MSEufm2m3uK2mRsDxdjvLsS9mJJiN3a3AVQY",
  "key29": "kRH143UERwfmVaABCsgwo3k8zcn6MV5eUVJbwHRsrPX8MwPQbsabezY3Xjt52X8gtzgQNTRww6TmWyYxLEBaLJk",
  "key30": "41Vbg25CvaWogo6cKUtm4qBHJvLJskFxrVaykpCixgtP1GjG2LEr8c63qpFhdLBqHNjq3cZeQfT5vxd9npe4ejFP",
  "key31": "3k63mqdEkuj6nXStSma7epAjLpEvMBAChDZ5Yq7JWuwZCSWgBrhn9e6dkSS356F2rARAJJcF7N96MMzqqsGu4afS",
  "key32": "SJLG8fRjK4r17ADNWAswbb6CmyFAb11uRgkqc3mUP1xcurt73KaR29xSpCY53QZVtGKkjwNHVydtzfnLe8UDtrj",
  "key33": "63jALVUGv4Rr87xXVXjcf7ZczS8r1LJExzHx5pHY8GxYYHbydTCFNXUXBiLFCeCbyWCRzGcQ2VTwVBtKkhnbrno9",
  "key34": "5MMK5UbLnX7N4AMJwVEDhdRMCypFt4XBjo7PGn3qaM3KbZYDoyZ4aWyRewCRRrHUA7DKbxndTRfhdTBAJgz7mGuw",
  "key35": "5wKRodAFqhJNr8EFhTMv1GasWc4DXtWzmbXYJn3q7S6bV3Zno6ChyVmeiodDfPZYs4ecpa8FdL9LCBmgUxQU8JiR",
  "key36": "3B2gLZHYqpYdrxUGDkg3FSYiPWajfHCih8cKdhwVu7qtQdkgwXs1ydK9isdiQvwZ8wJVJf7LBUjjAL7AW4wPa6Z6",
  "key37": "3MaiTXpNMNdtWXoEQFwbpFjNjavzm93moM6jPyQ2RwsT4Gi4fKLqAv1uZA9f71cvMU2suPejLSaUVHWScw4p9pu8",
  "key38": "4sHr1PsMayUK364aaVrZYL95VMi8oSdekYEKGTYt53iT73fzGzycCE5sihd1KvsAwSetqkHADPTpB7P8NHBL1Uek",
  "key39": "5gPkgP765XRs6WNocPDyVGGwVP41WpjksyfXArMKorkYnDubg2Fo7UPatmoQWRAewpdMfugUPa685cMYiwQmZqrM",
  "key40": "44g42EaHAW2N8XtgnVnwV6QCqaH5owJSy6LoCx7Us5stvBPnoyKLzSH5VdimMNMEi68wjaeVqNz1Cd7V3YMiTphg"
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
