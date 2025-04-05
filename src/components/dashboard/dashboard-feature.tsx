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
    "28hr4sZHf4ZttJ8cpnhwYVqggBFmV278BB4rJDQ6BvdkB1h7jAKXBJfuLpwz8N5jR2e4DsSSE2wSAtB2FGP2cU4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pM8V6FmJ5BZWChbfYd8T3RUnY5esq6pfpy8CK5kXtNKFcZkZC7jyMgcDdwCeWzFmz7oJnPJgnnNweWZDkvaM58F",
  "key1": "4XfywKbkqEseVugGsAdRUvFvJVnWKRbXJn7viaURFbqqSeF18FpZPcaNBmuX866aaDUHLQBsNzc5Qki7zzfZU8qh",
  "key2": "8om2sKPy1RgNtFo75VtM6NTA92CNE6QTyE1vDJGuV3TeexJfnruosJKY55hLjirgstMLoHfijbmNVcyBaJScXjQ",
  "key3": "2vyZMybhStje5N5diKvTNkj4GkkwPw5osunCREYM6veTG4bc9BXN89S9sczWaW4KYHMzrWTXABW6wKEZdxQH9nyW",
  "key4": "3owAVJM9seqsUHRe7G7M8wEme8M1zo4d4SrGaU88LAnKJUdtAiU7vb5KgRCqHRLJ5XVNoh3HDqSoU2cPtGG11T5J",
  "key5": "48GtKRioDyDv9DDoK3ZZGCN4Y74zeZmA19oVMzbcUF4KVBYrcU7CFUBjzHoFVKm25LrgG3pGKVFsbcRPQS92EByG",
  "key6": "5rLPCGzQkyKoMeAf1yeJfSauQonjQupkXXmWQS6HwXuohcbQzNE8jZetGcUhuGwyByizmGTc5jk7tzqMBJPENCwN",
  "key7": "3z3qWtsZHqUL1L2NtvQFYgKse8hHJBPU7QJUgqivbu37WLfKpqWZmTNshqo6ggzy6xpz5H2BjkMbw1dVp7jzSmEy",
  "key8": "5KnTJUv5cPZ3nPorQAoYpkEFjJFvhsafK9Bp363kuRHdUEHMWLKzBFkmsx3Lo4kv4umDs9QJZVRS4GzvgASc89zR",
  "key9": "3UJNx2SgC8hbcyQJFEqqs3tGNcA918FB8SsSZUfirSLNFqjeQnV5fyVPBV8zHpBmEwAHPjkvzVxuiZomZSe1xog5",
  "key10": "3pRFXRocUVUuPDgjydgsoaoSc7FRZXspj21tySS2kwUs153gVDuLDRz3CeeR9c5geELhbtMT1XfmVdT8MetDGCiy",
  "key11": "3TZ6ru1WXc1DVyiHwkgNu2bfaManLg3V3XZHWeXML5BK3Pga6JfyxUZNR6opxu5gsyE5hck5WqSsDEYpJGoUaUFt",
  "key12": "4DvUSMKBCM99qH3Y7jTGwkv5XtjaeZAtEDtHpwjWfoGb8SKdq8JSKdURFZ3ksUiPdbhnmosMkmTz2xvyVyEWVE9B",
  "key13": "2bQUvzvB9VcBSTpZ2duX2K977GC2DBoNKdpA1yrU5DYmiuFzsSm3Bayym1Qrz7Exh1GaEDAotbsqNFHUAYsSXgTB",
  "key14": "56tywLWyPJKvQU3jzoSepfez8iuBmcxK7QTU7U1hsZK21kSZaiZX93VByDGyzwrkGRENihjYyMPNkXJvdA17evgy",
  "key15": "5tjtDwBQZXgvoMaFrs84nNYkvzbZrwKdyjhh3iN4jPatQ5WHCpvdYBhLoAJTVTNjq56RLsCDeuoAkvYpVkbsD5F6",
  "key16": "5d5NRWUZ6XGHuSYucE5PUJCbTUahj53KPxfw1e6m7uAZmWbttPB4Dr1yAq2G2Ru74DbAJzKppsviYLYfma1UTtFB",
  "key17": "jhD7mfurosz5HGBduJuiUBGXBfV55r1LjoJu6J2bEjVbMxLpzyn6sAY7wy4HAifdTj9ubkaSkFLJTJxhfggTuhe",
  "key18": "5WnVXJySCW32ckZWR8F2oeivteoDYgcHKXQ4exPz4gGyKXGyUrNL3aqmYGEim818qyhVinJ3S6dm5AXxFQ2C9cV",
  "key19": "ZZnbjXRBbm8spQ3avYqP8se1tpoTny1afknuR74f8wtXRNKKRS3agFsaeEuyDi6Hxz8KsgiRovp4Kkyow28vdDi",
  "key20": "UWY1S9nTPxobQzLkaLD5CKDtGwpBRaiBE8HAZaGWGdYjphMhjvjHTqSUDFshsZQ8FUVqH97YbuBBuzVGieUbdEs",
  "key21": "498mhjdh15sWRqzRVwCtnpeJPs6Ck4z4XDrKc1e2Rfhk3Yvk24ZMSF7prbQmWtTDouaayWbuZVZWkJcvM4AtiMrC",
  "key22": "MFUrkNy35J5Uy3Fa171JtDiy6nn3Fx7ZB3fPKzbMwN9Skc1q8BcKx9EycFfuJMQdR4LLVu24deBKFsepfjo7LZp",
  "key23": "658jkRkyQEeZCARXPog6sVXoCxjwMbNsMSVYr7oLoJXzVqFV79gv5WtX2qSz3DEMtdiKCwh2uecvGr48JGgwjU7q",
  "key24": "23uWYtbnVhpQ2GgUcZhxsy4NTeYWVX4ivDKu2M8tR7JzTyVgt5BFPWe7wUPctF1DWevzaYQN1hQguy3jzcbEnGi8",
  "key25": "3eTKAzUpTBThmgeRGsyct7w77Un6nqFUMYQFAAk7x7ZiN2c1bdgm9Ms2PpfQ1YEWG6WPyYpN3hZLYJ5Gmx8Zg6Nd",
  "key26": "2k2q1RdkBMTNxrLU2Wnu522AiuqHQe5K72769RKsTXMV4vX8tjAteskhrELaQc8G3pRUzMwrwJ6pPKxdtHQ2qmGB",
  "key27": "3ijKZQQ5ML9wjWQ2vXMHtte6rAmpm54W61uV9SKqVk6rhLGqdjsJFR4dt1C2VYdRPKz5CPcLgFEbN5vhtSb8ckv",
  "key28": "4ndsR7JMBrRZakpcPCJrZpQmCawsZDS1SkjP5iEqt1dBGtykZ1yCyCSn69Ys7DmqaizYLqkxeToa5Zd4cBuXZ4TV",
  "key29": "36XtzyJoHMdNvxGVCEmiS2t3cGXLE9zmxPyTwbdRrwZXxRDTncQ8bxLRkWAqNnsnBefQsJ2JysunFLD2esrv3e1e",
  "key30": "3GGmE2Zyn88hayc9yhKumuMtjKpVYmGz7zbrADd9qfPwvUPbNqBqMhXNYzdYzx3DjiqFkeVtHuBT9WXGgXdF6jsx",
  "key31": "5Nh51h6exizLofSviyCAxbyUhHD2nxqGRiCy3SEcgjj9NsgjAvUtwESfdfhFYMY2GB3bVuKr5WzXZgQgEB5uZ7F8",
  "key32": "ZcBJJTHu7AGXyiDv4oCVWPhbmi2eXuaVvBv6atWhM4sUuJspfD63oQAqWWDYCsAmXftTuzECBRNt6hF5KFa2uiu",
  "key33": "3ah6kFY83fhA6TaSNMffsrumT2amreva4WgtRv1GrQGk5NtUAEDjRwpz2fTFo5EUc7f7FmH4BtXNxV62vaP5QHJc",
  "key34": "3W2FamxUi6D5QF3wcyuRfa2CuuMajPG5uiJSErAM7huT7B7VYqmJwsHPnqFxcWe91s3aPcrwbJLAVQwGPfaMDo2B",
  "key35": "4UuCtj7WWxG9Puq5Z2587RMSVfdtphRZzY2JHqT4KtCFPLgrqFmQTBARapZho9VqenZ12UdxL1Lgrony1sRq6SQW",
  "key36": "5fes1JB5mjwDrCPrRAP4MoCsSoK5dz98PBNMvUQhxsKE1kyHMQb1VYo1K8NivkmvbzeSPA1dfEJFqi4VPDQLgMQP",
  "key37": "354jPuyizKAMQrRseTbXnRBTjWfKVPfab9z9m8tJwp19zwXiB5d3k4KAZtTATxCHrXiP5aBqmkPN21257KrsVUGa",
  "key38": "3Bc9rosMDNMAsTE2wcQTaTmHikcGJFrD9H1D9Bq8nbBGZ9arxCFCSGPR3KHrJ9iX81awnS9B5bbaiUn7Sd47uD1r",
  "key39": "HLougXSmASNVZfLr1CzRMbd3bxY7ERTFkXAefaTae6Q6caprWaFSuhUckbkPiJXUZ9523hvBMzzdzBEyWGGxxZ6"
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
