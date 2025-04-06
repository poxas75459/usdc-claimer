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
    "5Gedw9u81EUibnPwa1tLN1e77xuYzDZi9mC4nbgUukYMoDMApPFmidMG1Xj4oBqaCmcdN33iDQpdQpzcg11NcZRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SBashCpAmh88znbMSNKFcuoXs86v4DvHpPtCW6TM5B6oe3Kw6vzFWFN4tVue6EjnUnoszwDEpTsLu7WFfmqcfw6",
  "key1": "3ceje5hnVBwJnER2nTAMvB8QyPjb9VnAiwdo3G7GtyeMZx3fJrgBkycTPmqzFCJFXgmZ7A1Xx4xVth8hftAkQi3y",
  "key2": "4BGEjKJ2B9cxLfGt62PQvGNggiTGpAYxHT4T4vg3n8fEXYC6W18dAy5hzEmkYUbePqqJyo6rbZihbUxTEQsCDjuH",
  "key3": "4BKvtXzriAatK98pDKsrTWW49ZRW53jZ1jrbe26Kuc9pwo6iRVK2XXbSeksv9magHJ6BsAYJ1C6RRxbyQ5hv9r7C",
  "key4": "ceg4pHyrdsGEu8C5pahSd8UPKYDaA3hjobuntjsDKA3RjfLbWADJmQBBHe8UrMUHeeWg49czVZnd1nZQAZyVEaA",
  "key5": "4PMUNpsCHQdujsnupKQ6BkCLkrxfDLKQms3QFn5des2KTsK4JezuZAV2eiHhu24LTSgneVSSoR2aX68xuB47UyDr",
  "key6": "5AjboXn3rjukPqjUFiQNGbVMib7jvvVCme9tcHvNF6h2eryZbzuHKTroBr87dqp2SKTsVhVoQe6XVGaF1LneHxS2",
  "key7": "5drnr5cnFEg6cfDgkBh3E298cnzP2tHkEo2pdTX1XCAC843oPTufKzmRngTXN13giLhF48B8JdHt7ZbzuS5hToLC",
  "key8": "34vArL277Hfhm94adgxrJu9X87nndjD5rxwwi1syju8p5gMrA65MBVhv8XGWkGYHS1DTTVNS8EBjHVUaTAiyDkek",
  "key9": "exfbfPDWCMaHcFChnXrEDbEuAWWeaQWKPMcy1ak2e8LszCSD2CcFKnv1FyLP4Bo8FRzHwh9Kw5R1RvPt434iinC",
  "key10": "3j1fPHgdhTLUEGoM8ua7Xgd5SXDjFN7PiSZTsyzoCoNpZEFBeFNVyENMKUed6U8cHk7369s8sUp1vyHmX6htw5Aq",
  "key11": "5KarmNvS5NPAMPUp4wXWtVoiHaDC6b6aVZwjqSw7fEkrbRAaseAUQu2GoueufbkZ9hcJtrAgkspfr19gpWNewPcA",
  "key12": "4Jm1oyHAFysaX4tx3ecujrLo1C968rUkz47wro1MwLxfmzXEgrEAP2EaoD2nR13V4BiHB7Y8gUCn66nmfj1qUzGv",
  "key13": "PBfVDTmkJBRg1LLqP6kAxDLJjGhC8U4UrvcTEWeVLHcPPJN2zBfGoNFinocNQzfcoRUFx9csfQGPJxMtJRx1zTW",
  "key14": "pkhMHih5oVy6F66hLwsqRr4Ew3eadbMJ6QGbFzgb7MwvtuZweoWFYArXTT3dkHpFrCxia7vvoRp1MPwiALD2PET",
  "key15": "evRW6u8HGHGkyTy3DGRd69HzMLLwuKQjpscq24MSiyMRQKBZaVifL3P2k5TspW5xWrsT2pYRPXnHo1RNKj7j9tm",
  "key16": "5qbhEXGUKYrJLHXTN1JQPCwYDjZZDN8AfAm7JtfQcPDFeW6yPHQ1q25AbsRFepSEmduGK3dTGYyWuyfuC9xNWpqb",
  "key17": "5MNoAdM3T8SiKi1KfNPBFThH554jwuR17mxg8KSt8VEGrVfUhuKsztM2XbpaLnD9HrmY3R1MLPh7AD4uYCeUNZcz",
  "key18": "5G6qpC9qaBtC9YwWD3XVzAdodVnr1UMN5e6QTbCUJfvsQTf6uGkUJgqPDDfCtphCxZMN5RgoWhm2b8staYHuXsZy",
  "key19": "2PU9UADKiWb4vpCDLPuEccXXUgyhcxncPHmPFCkdt4GgnzqBVrNwcFwrknjiyeDdSAHxA7BNBk9UwYGC4UQXCNjk",
  "key20": "4v9wFHsuep8yLzpETNE5hbKVkK12E4rtNdLQeMoXypBwdFHtQnCHS5deq8iw6ygcGQe933UN97E5CCRy6XNwesmX",
  "key21": "417FwsycWrcuRaUeCGiBZorx3cMtwuep5GhV5kQz6XRbaddLksnA4YEooUDCYmp9MiV1kuxjPu7mbCzz71G6j5bB",
  "key22": "5aRsVqw2MApXVqgko8uEweEmtNXut2c1i7x6p2DZm4WxDSjbqpjpkb7XskDhEKFhwkcATfeTMoBfAPstiTfJNeKt",
  "key23": "5H9bYE4gN7An1LofEg3QTvJNPvMhihdyEcLL8jznebrB9FW9PTRQW8UTEoezi24FXnCiX69sFvFR8kjkMWtEVLdZ",
  "key24": "3KCyim7AbB5tCYZSzDw5WWgKcfLEUNbGPStv4kTwxfJTSts6GrqyfjxmSST2vxUrkDonuaCkjdix5PJvNkF68K5R",
  "key25": "5MfJNfT4SG6Qw1Stz4JsAGANH5dX6yZUSzxdyH5vWm2TKa8fX2z8ATwV3gQTNJUZjtZkRrDBMzvY8T7MjDnxeJsM",
  "key26": "5TzxdV2Hqwzk7LqyjVHzARnhSwArNBBBNeJ7k9soyco9iHbzw3SASd1s8vWaNTzbT99LnB3D2DvLkegGcSddqEeY",
  "key27": "3j1fncVhrLWz7RzdUSJF9zQGyCpKFM5JQMdxXVMRmnF1bc8TD4TpNKdmM5UWjqkzkcsAeMP2Ua9jSSyw81yfnRUb",
  "key28": "2U7dYkXRmCF9QiiFzsCFJfqaWJ2py1Cr1aiPx7gaixu9KsNFprrXPXXPA6RXKdSWcVucoCJNynX2wyBvgAth6FKh",
  "key29": "3eAT3sJ9pLe6Dadv7BR75NCnAniKD5Jiyh3nBrHqBTbkk6Z3bNGscJoaBKYVLfauJW6TJYjjvKW9XxNsPyAkShxf",
  "key30": "3LLB97LyEmnFS1oiyUnuch7L3EpUMyBDhQgZbSQheriXAv7XkeZ5aJ8EEeZ6ojdZ3b6cvFP82Vz5WMH3vFveUXyu",
  "key31": "3xqwtuSQSyN3QJndND4YymaPvr1ecup2eL5aFSiaTdUwb13oxNV3VJn6MCJVMq35aRmbSVtPpWT8cSb42TQabzLx",
  "key32": "5QtJ7dMfeq36XxftGLXToLxg19Q9WZUPbqnGtkszgvM7nY4t41oExQ3MiR2L2jsP3CvHNNvhK8VUGJhrN1Ji2svC",
  "key33": "26WBRZuqv1oTm8qPykDikjPbrMjMfmZhTj8833tt7esMpErBWdFBY5BjMoXobkSVTgg9avEy85nPXMwkTdm6XCou",
  "key34": "3PcfxJnfZCCuZ7GQxTXd41W5G7vg2Nk3iAMiXEWp963YS4c3BkyYt36Fi8zi4ERGhN6NGXHqe97L3aComzcSfbNS",
  "key35": "4pXvEX14d33mpUfJhzNBW63TDP6X9qX2fWHH7JKaYCNGCfyEkW4gr7TfMS1v1253rpBLnxC3q7bwwZtDbvQrbpU",
  "key36": "3wZPZuWWYvKGPWX5mKAQcwayzkBBVsQfC5FtDS1xAeg7r36nBd1RJr779Qy3NmHaHnZLyvkc15Ef4MoVzfvH4pdr",
  "key37": "4FH7tYPW6xiNMEaQRGZNVuE3kX3RHhDMp9oKjwF2QMqG22bSUEgxnkaaLKK93h26c3yMUsnBa2u1y6GNiTKnWp8H",
  "key38": "4LT6wEca2mnTjD4RVyPCd621ag7nBcEKHG4msLQWdy2E3DUtEwJ63MmAMMRksDJPosHfUSmfFMB55TnxH9hTzuag",
  "key39": "4YLZVXmgXVsNL5tBnAfEt9gccwzYtG5UhyTK5Jf9DQBbEKeQKKGu4BQs92iuqTsuRmAHHEV1a1C2cn4Jep6ndgS4",
  "key40": "4Vdce2gr9dAkJMxTQV39qjW58BfqMDMWhXWYVPUE5qiTy2jhMQMsT4Y4KX1nKpb69zVtD8RtgXqKqceYTcMZC9KC",
  "key41": "BKNZNsGSDfyALu7YCYjtuQAJchW51mUZiQktAKrVpxSoNECfeeawgX2D8jAk5JUw45tA2tZDtnaxEXCu4mbiqn9",
  "key42": "2pwiwDjGvpUVhuEoh4bUhbYnVBZq6Azg4kJBg3hmk336xbxJC4TnieQcHiewuZfrDvRoMxWDrcd8usy3WD9EM1Mq",
  "key43": "34emvC1tVs6invHhrnL9pzDTaP4fpG2vkg7gUV5Per5JXpKETeDxYAqinK1tk1APmpJ9tLsEUWHrFysyxyHLWxnf"
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
