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
    "3hTQq4qv9uLBNR7tspaaab9M2jNe4SQxsv4RyFJEYxvPG9xkbL7L5FczdfjNmpfbJYD9yv1cx26WEsG6uff4eApz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wYCXVxbgocLsDRxpuNtmBKc31nnoNMfFkEEwep4tB3ytdcSte54MTik2LK14fYBuAKmRxdkKWqYsD28zHGkbpot",
  "key1": "4uG1T1EzooNVX9X4V25XAevD1U35iah4PwHqL8qtuuYtUjKZLB8jbEGMKBkN9nZej6ZSxhVxuKzkdNz9DF6FqSv",
  "key2": "5MdzTU4UvNKYFLmwezZgZ7GznNUnQcnMppMdAChaeCUtDmYXWk8VpWxb6xqGQoxzugpEZY64YNXeemReq6rsmR1m",
  "key3": "4Vg6yhZqb5SqZATAVRcK3rLjg4tx6WaazZ8sJiTZdzttREuaxJFEbovBn1yEWPrzHjqMW8w38ZCE259cyGoQUzEF",
  "key4": "MhQomnDWPgFkiTLCXpvocKko55NwpZ2taAU8fzL3d3YCnkiUwUXoki49xFX8VBvJMuDmTNwvjETGGTq8BRhaiGz",
  "key5": "3A3EDoXEKoQ61yPiAxxPmvKVEjKSoUWisuB18z6p3CvWTEtoXfQ31DVpjPUr3GqbktuUrqdSBVcei8F6aRDaA7eK",
  "key6": "3cJzwychEbFPj2perCLyX9NUsb1wNQDkifD8BgkPq41EQUQDyCcjsauSgoJapqkSKmPggDYQv8Q62u7bjsiEjNdR",
  "key7": "4EBesaQyksCTKvuvUzTsds13YFRM1xNS87eympyTgbpqs8JnAUzGm6myqUn8C8f6VqBKsvKNDpEejnezhVHiMQqw",
  "key8": "4qKhEohjNswFRj2QbZJir9xv4FeyihUcHDHrzCNKJhdM4VY3SFwxzvJerxXfDpUzDMA2PXzdrM8jeSJLSpobaJW3",
  "key9": "4MJ95uwi32So5HikMJKRSsmHSsJXFCXBkFWNcJujs5ZCfZLmjCixysFRfxG1CdAnoKUNh7wVaAn9btA5ufg8tm5z",
  "key10": "E2LKfUT1tLCmPbxbFh1CxBHEcdAVoVUGxpjVLYcG8H4max9mncsKXpk5SR2Yi87YitFuefeX96c3vsQXmeyiUok",
  "key11": "nnfgruLJ4FqXr3xvB9Gg1aKsTDRW9GUtXAZLnDFfYcNF2KvwywrxXe18VGGg1eSxFgMCkapHpYQQN94ULmBFcjg",
  "key12": "5E9FsyWUsky2yzYBzzvH89DHZpShJ1JyiAXbcMYijsSkGqC4jtHp17Ufdg5ZFEWi27qv1a3Fk7rjTdA4Rpi6dKrc",
  "key13": "2tuJ2Kkp8EPRzNWdBjbH8ERAjh9CzpUq6WDxK8gYZGLkrDUCmwTe8ZmudLe87vRrf9oGtmae5YugA7euon9Pj2XU",
  "key14": "4que9xeEfbcmrvTxZXhw69Q3KGbpfrDmqipMntEC8ifHGA5Tce1pGxYwRA7q7NECCpyH96GQD93kojsPTygJpyeW",
  "key15": "2JAWWMVvV3KVMCbqu97pnx1V4u4BPgvjQ3oqGgJJ6tieu8EF7ANzQJQnvyjjSgaUux3jNBc9MUMYZHVa3ZBapL5Y",
  "key16": "2G9QhxkLapgWNttW7X5dn6cw5a6JfqWqGAkHjHbKzvAsnxMPgUUvvYByrgpygJX8G3Yb68DYVhim7suNqVBfWsyP",
  "key17": "3pAMC8Mbep36KcztYoJ2oTZSCRaLNQufeDtNuej42mFoWUkdgRhNiercdc6iq1ZnuGVgxBNAa4f6nveEBJLSamvi",
  "key18": "3k3RL3ynrFy5pW26i6t3uB7KuQERcWLvz3qdPjruvG7ef5TkMuks8m1tquuFubXMFVRWsbPgEUiKgMPB91THbMKo",
  "key19": "4iVC6vMh6FDCjeimn8Dfeps5wCTUmBgj2JbuA4iKrHDUpHKJjsDHHCvLwAp9sUC2GqyJXBC241aFh4bfqaKgWH1k",
  "key20": "3MQcxhE8MRDAaywn4hiY5HVNdtwC6Niaz3k2yjjADV4Ko5Rn77ZAdSuC3jcoMNueRiz7jKk3Y6RBrz2FbfwLReoi",
  "key21": "2bcpEfAQLwZ68MKuuGbv5xo8GmM8U8Cm5M9Uvjz8pGtXfovQDYDjNf3cioTPaQvkgd4FxrpSKKBRGNgorQzrFbAX",
  "key22": "3GAvwj3JpDRHSraRChoZouGcrG7mkPWaW9VC5RSpgU4CKSH7BE6mR7RzY8Fxea58ZHjvigo32PRycoJ3gqEm5oeT",
  "key23": "2dn2U7m6wrc5caLipSMaCgXzLvWs4DgMiJfWwvrceeMMsdDhqTv9BrVhshiLVMjFsUojUGAfE9277Qyuc3x3ibzY",
  "key24": "4fC8bPpp6t5LeGLPD9WNESkkLoAt3Sou6Ns9x6y8ciCE6gG24b47vor6vPxFn7Fw2KZiA4GQ5a4E4wtfDQafB4nk",
  "key25": "5MwMzhkkHHg9d7hXaC24P94QbwNxEMUfDJrBnfZ22j3qwHxTst4KPeF7VarKKQuHVgZ3LecrULKFM23HwKd4oHjn",
  "key26": "3x4wSjymanD1v1RrKZEsnwwX2WLDtt9VA35mdekzDFbAPep87pSfueDoCyXe2KF2GSBDctrGGoAwRe6UHfpkkVMz",
  "key27": "5gMbkxHN77Z17X7zpKt9KAGm6SLVZEFJLicz33raeu6fHmnUaTTbBVWECDdXMbofRijZNdbckLQEXL2DwL5vkiXN",
  "key28": "3edCi1KYG6aqgJ4NYXV3pQTR1QN8Yw2ugcb9T38KN1hLtTSCGsAEammNQcQEiquRMRXLm6gd1s6aC8BRW6qE3HUn",
  "key29": "53wMJ9BwNLezUyFsYpBJpdtMZdBrF2VY9vrANjVoemVewPgHjr11AKvG8MQAzSmbf8AQ3vLmkhd1ceUv48puviW9",
  "key30": "5v5U6TVVmGRvbVkY87DcD5HXfTdjrjciZtqEpaFELSstNdoE5DPpgt8NyapQwns6XqzZb9pnXDYRdPpy5kVCQ8Aj",
  "key31": "4FYBnDh3eUSWGnALA3gQDzH3jFaT9s4kkctiuy4bUHVEZax8FCqiNyHx7bNs24TmMySXDpRyCsT8jf41ZuCvohU5",
  "key32": "2MT979M9XssNdKEd18miMbhcczaeZtEP4ua8F7MtDErfGshFjCFjY4sbmpL4o1mqKhqxAond4sYbfjKpPq5zF8gq",
  "key33": "4NhtYsFwQwc7Ujv58JBsxaFm8vb79Z6pwsuvQaS8iX3kTX732Ya56ejZTNZmAvrMnrak3SUc2vwtdrunVfvscz7S",
  "key34": "wq5BnJq4cQEQVAWWA9H8vAbZvgt6bayxQcYsUXs1NC2szWbgWTwnXKnepCYoxdW434VPkz4WXnqt8sN8c8Enpqj",
  "key35": "5A1BMt626wK5qLX3D4X5eCuKQkjfXm4jo7vbbA9ah3RSbHutiWjoSvKFKXLP4xH7zfx29QTcndvfUUQkvBqecsvz",
  "key36": "4WReevLRchYxndMESB2HP6bVxgcwGo7M5GD48aiuSZBVRm7e1riKF2fZbxbboHKfQ2QSwwmD7ievEFwyvkWtqhJk",
  "key37": "3x1poByj3ch599Wh9hYEN8mxghgW6XS9bmFTS76QFCPkBC4q6hEQ6DdMbkkCTfSNN9tvqWDX85GV7WYKT2qHgqW5",
  "key38": "4E6gsTKkGGzrQ2EYJHWFbquvrScehy45GV9jYnC7t6QGp7gFqs34vKz9XbJWnZaYA5k78FToHsvpjmCuQSDS1b7F",
  "key39": "5GaaaiEWPCUqnLposPb5xerdLY9VwWQ7FKTr2BSXxg2kgXeCq6xAenWQ7tmTHR1TXZd7qiAuvvh4R7aGGudThcWk",
  "key40": "26KPaoR5fmEwrQ3KwK8cjCeQe957Q5sN4hUKfmCFogaAw44WYriZ34W6sKRBt9cpdLjEn6DLy4kA1r6iP1uiuo6x",
  "key41": "5RYQ8bhxkvMstsArFFwzTkHk3i9DAcGxyqViG8u16qsheVZKC4nybHvHQPh8zcjHiMXRV5JTkaKkgowVkSmbXonf",
  "key42": "g9FjvPoMF1Zzn4BdGq8skCW5PjtizryjeKsPQURv9DYknEMJkTjrCt858M7RSVykSBfyyBXqSzTH7iZWFjipaAT",
  "key43": "21YPjbJUUp6GoyTqE43hn1Jbi4gERpDp1W9ijiLmc6cFL2LAUha9cQJjGMJU9A6kMgxcg6kaJbPKb6zGGuQTtxwy",
  "key44": "4qGrysjVHk23KJDcwaC1WmEqV35WZcDzTG5heUxN3ZeCSSnift11CzUB7F32zBhEg8yQXnzXfdrgGpnUjKR8SsfG",
  "key45": "4XECM3QsQsb9vz9DDRZCpi9yDkS1ghu71DMwnaf1c3j9Uu2JM2R3Z6xZagZvGgDi9erNKVyhS9366MzhvcxZdy6q",
  "key46": "YkQRZnaLgZVfAYYWwFpVeWE5rMeuBcszeG7kRBeVRNes5VyfUkAtuNf6D4nSJ8hkHxJ9g1qZZQESJAuGaDZ1tZC",
  "key47": "3z9MUXH8EWB9PDsewmgoNZt2nrX8PpryxdewbSVhGzjFVckEFiwsQPeXQDfiChfXkJUqHXD16v3TYxdM67H5USY6",
  "key48": "39mw6QbPwVMVYhfYaxgGCC59QviusgaQtVuNgvyMfctEcTtR3SN3gSpT5FEnBFtsq56pHpRPG2SffZrzDLCm56WD"
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
