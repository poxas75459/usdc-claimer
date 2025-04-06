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
    "5XuW4wai8U4BBkHzcBwSn6d3wNGEeNxtE16Mo39ZNBXf96Uiqc4NWc5Ls5vXUnvogdLwuppxDshDfK37QPqdCnQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35FUbsS7agQ1EsikUTWkxTpnWoaptpDyPpHavE4wywrGb6KdexkRNiFSUgLXw4MrYaVTXdFJ2bKd1H9XfKQb8b9b",
  "key1": "2Y3YGAKuVDMXvM2RXSWEnUchYj1cu6XmRYVkZHzs8QfqnEvCx2jVfmK1tB3GWYJjoureHTyVA1D2EeaBH8kNpGoQ",
  "key2": "2Arsps86Ka8opM31JRqhP5zpyJukp4VARqicyAQr2ocKzpbrFJnuJfm4xnuGwZ7h9WsCvGCbdWd5ArrpHPSLJGnf",
  "key3": "3sdXL6XY8roVF478BggyoDhPpWQDQ9iasCa4Wb7BPPyBMAip2nwjvdeEGLY26y2jTArMva6jYFp6KfpNsQBjRJJn",
  "key4": "GLRJrSy3U7GJiwrzTBeGs7gjSnx88m7cNVEDRKW4pSF4tubMDEZ4FdxGdZ2aEaSeECt6Ak9H4KGTzgsh4QinKjw",
  "key5": "ygt7yAfoVwexwZYQAUWRPCDXRXWtdvt2DaHB8unCwphqgm1VBDi3NoxFioKk72RTuvrpT33ENzAGroDjZWPuzPj",
  "key6": "5nFMipEwKEH2fpdXgqtcDwKZ83xesLVyJN6oDo4Wq5iWx9cjFUrSvTVp37dLfw5sChEXuDwJCWQmQiy7hKpM1ZTa",
  "key7": "5D128pa4mJ3pHm65cr4GJN5Hc3pR8qbDRXntzP1QG1mjAPaHDQerAZJUDNrDbLWd97RD5S8t94VsPsTjLKgYz3CG",
  "key8": "4cxSSuMBiB75WGENdZ18wtm83UUxq8imKKy4YNQLq2EVrUs88c1UdVHFQrroLStw8X854wN6keVgamQr7h5kaz9N",
  "key9": "4c8x6btgNtCPoXa5zsREw5qg7bPYqesGCPusdLcz5wfbGXiFmswfYqTy6yH2gL8TgwHsVtm39eFpdqcCMbcGQqHa",
  "key10": "4zhAxnYJj2R4ryDkPTVDvUvYyDcvVpd78AHGcXh9nc6pQ73eRpabfrZenJGXWQfAze6KgBZju36HQKPJDTMu5A3K",
  "key11": "63Taq2W9Uh2RqmeSvmzSp5xs2Hk8RhXEhijSSUsUNRMM64Skh5whXsLh7Am9SFijPUtAw9Q96aW5ED7pDLeFXEAG",
  "key12": "4nA2fHCsKKoFogFcm2esgDK56ZM1M8f7jQspuGbDdRQ5U4nknK8rJbuZTjn6UNhTvoPys1he8ekWX3vdzMTF8yvL",
  "key13": "1Yy18t8sMzcH3woargDV2sEmbXw6AJzDUQHAWbtD8bjsPu15V4T9f5Ns5X8PKKrZms9AkNeYyLDXqqTkreyKBS5",
  "key14": "5Dtb72UD8gPcDH4stamEvW2H1yF3Xsi15GZw8VxZ7kSzXBVQjhXQQ6wPGWaenYgELFshWGpFoA3aStNCwabxQNFZ",
  "key15": "4MnfqzDTu9rMUEauj8RpNpddGPZ8cDS16iAgSHLf41sXunUVuZLwGZzo8PX5ELrqF8iXf6UDKFvPiexA63si1Q35",
  "key16": "5brNqMjvWxD1M6NNLALiza9vtR3aNud4BNCTddF3nqR4NUrJiWsGZkvhjau5XFQY9pE17x6Z2oUQKCo3eH7X7q9i",
  "key17": "2pfcSYLzZZ9yqDHN2sbQSJhenDD7hiv19WfptZoMeFh5aeXFGbTznaR5D6w2Cpf5K4C5z7wBjdUkJoS8N39x9nbX",
  "key18": "AJZf3Tcdb2f8BzfYfc7ooHh7ZabbGbHodNGNQSQDs3Y1ofBLvgP8nwNmqQF32PYMroLPJauX5qSp2YS7oJa5mQ1",
  "key19": "46ayuDsRJJreeaTcEVSKn1gHJ1oPfXjL2aBsZ2KoUCqMwfNSc6JgNDYustc5zev2QmCoPqzgH95RGhN6qqAAKq1d",
  "key20": "559qGUVY3UswHdKQ5L1TJBxUFVL22ir6wBp9AY2LFtnY42xg21wrh5xyycR7pNuW9HW9Q1gf8dAjGwhyyMi3XcEd",
  "key21": "5H1MA7i2XYZFiQLydFZHFdFz1H7fWK13gXSfzzKWPQsRmyX9CKRjhcjp42yXF2CSvhS3kaSxcNwp7KU4NRzusb2c",
  "key22": "5ZW9AVTfVzn6ZG7bE7gkNjktfV4wcMjwYdAAh49zdba4wtMnk1RkYqjbGZGLGjkTfMpEkz6SoLnj2mvFy3iHNkKy",
  "key23": "2VYcs18Lv6MKpeNb1eJiEgK1iZxWiCC9C7S63tCc7ioXyQfdy39A3V5scLrEWzMjUXgNiEgsXaBCR2wLU6qss1AB",
  "key24": "59n7VxGQJoSKMJpJ7HQE3tVr6qCKUVLKLtLmWtFUXSWhu9Tvns2yEmMeRcGW425VEw93BVeEjfZXhA97B3c57kDG",
  "key25": "426226tnGjzspZppRQuxSyV8k9kgPBkFpEX95x3ARy4zJF7tQXnWeu1fEYwoBpRkavHwg8qT6N5AgtQjm5tCrCK",
  "key26": "669i4zerVVMu5e1iqqJLdRrMazVXAmFDfd3prRyeK8WhKzWG2fWmKV1JzJAtigL3W4XhuBSeLxzsTqS2dJPXsNYm",
  "key27": "34CWbgKfAd2pW4MSeNRUPRpDfSvWQPhasdTtaDfHmHt4ix7oWXutuF9W5yAVju7tyw2mVNAvUPUtpSLuTZZYoHTM",
  "key28": "47NKtCA3whzHcVMd9zKmy2BHAkQQA6ZYGxejt9qyhzoFRyU6vTzBYbvsVb4jpabDm3VRhPKrpf4QUjHAcg22b56d",
  "key29": "MoG1YEdBh9QWW736651BT9g1RURgzYYBxkGVZvMgoEkPoJXwzz87W4akj5GNtPR7SqAv6Bw7LyRehztAFSNRPUU",
  "key30": "Yn3AAFXkEFXvYbqWFuXepY5cbBoEq1tJZdjq4r9GK9dq6daPghrP9wigfcwr5TvZSUUjRUzcYLqgijXs3brFaXv",
  "key31": "3LToav83exarZaU3zx4C4AuXjKTF2PFHnQoYepuTTTM2h5Ln6Cg1nCZW8dRxZEc29P6fBRgyNHv9BHWqatrokpgs",
  "key32": "bSPNwRSK3XwjKBKoFhgD6HnSejEHsRKB9m7Wib8izbeS59DL1wcP7aqRhwD4mdNJc9hjYs5eP36LHgFLjJiX3E2",
  "key33": "f9pF275ZWywTKKYJ3WqY4CbYtfdDiHppvuyKLSqz9EqjDLtsnX25yEPjJUcG7ECjaDVaYe4djFbh9RAh54AsWSH",
  "key34": "TiLsEdrab3toDXP8LYyPQPLCN2mDMA9hZxoKBPMHGoa1N8dNqS1F6JxSSo1Wp1UpYbsSPaHCd3hk3MvxMDyARE2",
  "key35": "eU5dgxyt4kYZYNpqDxV7MC6YtoKwQ6teMXXduz32rNSGxdAdmYt2ximnh9bRBPd9sRQFbUJuxmG83FbGqpgmMaU",
  "key36": "4xvwDwdUuRpiZEgYUen2osqr1xgTBPkKvDPWng26ZY4f35mbdDB7ByEyMGmn1W2DEMwK9dn4qZaf5YzYFeW9St8i",
  "key37": "287bPFcVVwGbtjdVq6og2NdzJr8RBShWQLgYEcjTWuW4rBrk1zj6Ed9x3KcQt8UvGC8SxUEsubJJTQzPdwK6EtNa",
  "key38": "dSpmwim3qLKboBfRqVLZ3DBmS2jKRoVz2Yq1SMsuxDdk4gmaL8kZozTzFGoZgeHcSnQRARBTaytruuHNhBkSkPN",
  "key39": "4MhQkZA9TJBdbXUNdCJBPUqSDrP9QN1Jx7njJaEBwfsvtWc2JDsnWZu5DTfQni1MprpNug73dD2W7MiQqVJ34BuL",
  "key40": "4B2FLc1GuMm5E1eCAxxSEk2RNXeWxjvdn1KAynv2h3B41xUjTraESNxFSg6BYT7j7wmZwUVS12VMm2JdDDF2Twz5",
  "key41": "61qXXZCLvgVA45FjcMrcZKyF2HphMKYX1zJrMpSUnnU5EbWdoBuHr68C4cPWFTEJ8HdcgPoExUfVybNUp4aBMDpj",
  "key42": "55oiFbKJg8mEmCBvaR8ngUPS7hKASdUD6a24kpvKGFZCk7vUFUKaDfWbb9fVabNdG69wvZajLZf4G4sojJLfmQn"
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
