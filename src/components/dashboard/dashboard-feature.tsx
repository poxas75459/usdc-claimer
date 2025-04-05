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
    "2VfzymC4untGwcmKRpJVv36iAMxuUmf9jEhtATS16CBmV8aNyC3npdJQ2byvYjiiuUJkdM9NRxJGHLeTqhNX6f8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YmpGZ7ceGKdagjqdcrZaReHr44BR8tHCBRb9n3qwV8h5sw7FYELXsgCKibewJW9mLqKvgB9hYtamBnzTUhUv133",
  "key1": "4kJgLETWRSjH4ANq8yVRHKb1NFKhSmGk7U6qwmLBfHNSk5hjwiwDbJYvNk4Krtk85JrB8Gjq3X37FciRcBnFxfDs",
  "key2": "2BTQqozj45x9XNrZQDMGySKnQGjA1Rn1r6USqWs9p1ToKZvoBZDmZddCKPFGHz8a3qSbAzYuyDGmD1At8odScVfp",
  "key3": "4dWG2xnGcxAw61hsFHuh1ChUkEXotBnpgASKsg4EW4ZJbaVCZj6yKdJMPk1tkAoguhCMGCzVVTe14d34TqwdfbfW",
  "key4": "4Dkk4Qi6nd2Fc67SZwfyNrNxmokp3tMZKMZtEWGve2Mu3PdAxrn9Q5hWtKo5jfoqKh4YjLo8p24VcxH7V2NLhfpF",
  "key5": "4uwpegVMoep4auArfRjSPXrgARAjnNF98RhXE7GVFm9yCXprmX8ZAWwMDStgr8njaVZDYhT96px8XM8xnZAPiLTm",
  "key6": "2AbBnpFVRmKnBDT7HHw2icQPh7LQAuWAsnZs8sWyWDABuFDqgr2cLvFLvpYHyjzB8JoRyqXTsBmdDJQJE5Uu8fb9",
  "key7": "56Ro4c6ZSvgM7AwpeyDstJAkzk4x2uzxHTRdfxMwnXDAtZe4jK8SGwztZgVEKL3QqtaDR1crcvUevAdFQQZtS7uJ",
  "key8": "n4TcHLjS5aug1hzGDXifZGSXp2sJGcQjc57vv6ob8iwj8ZmjNnHyYM383RdWzjcctvE5ZkTN7R9BiCoRjA2hrAG",
  "key9": "5o9dUU6QK1qb6DvkLoV1bA2fa4FXMUwwu5tq7bKhdthNNLZbSPrGd9hVPQGrTSHyz4EdBgNssvzrfxAJ3ToTrxmY",
  "key10": "5wUjGme1NaN91j24PDBnAefAQ7vaF3zj31NgRARu2HcuemuZqMXhDSvjFYfVzTr6URefiF9k6H6ZusskHuUqvLb8",
  "key11": "BnD594sNuoegHr5Zuuhkv8oSnuiNka47XoQEfv3nr3QBwLCQH3YifJtDBmTHm1X5hm1J5hGTHBhwmDp1WxnScpH",
  "key12": "2VHvu8oRypE5UVEejRGoBHucoLaKcC9n2xY7T5RPhZ9dJeTGgKPMexhSNmsEtXk2yR8CmUybnjuxaotcqw6Rb9wP",
  "key13": "2Bsgmq6iJSocBpyuvFXBxfNipLrqfyGp2LVKWXWegw83UqhA2H19rjgbuCyFmoq2AEA8xjyeHYwbyRaytnyeWbWq",
  "key14": "5eoxHpetKPdDMs5YSf8rZWM5K6spdbXvsgxZJxiByJdniZGe2xjqezAHdaW7FxunLepWxna6Amxh1NzT3Dxcu2XF",
  "key15": "29NDGEJTQCn2hoeQfjcEKVH3X3Bs13D4FwkysGy1587vZmCstHe66jyfuGAukjZzHqXMkwhP4h8ozCWxMhXm7LbN",
  "key16": "tKGZEjKrriVv3Td6bVrVRVRGxmG6Q1Wdbpu3GPMVg49wiL4ocFDQmEnSdrDnN5WMWF1pR5VH2knCmf4Zy1LohZ2",
  "key17": "5hcuJiG56vqi9yRej8pQgH2jYnymPakogyDSo2ZZNzENMs2J74JWubEriWa2UAvjkC1hBSYFmYao9s4FVVCMyodk",
  "key18": "5E5NPaUFtUZ8mtWjU63wQs6Qn3UGMDbBmeC9G7YpFcGLGKhCFJjgACMS5USPbVPnKsEHKBnC8XAEXbXiyhwxEZaY",
  "key19": "4gefxKae6CLET2oimGoyTHY3SEajjHgB85VKkM3qtLGdWxx6hhK1hhkLREorECfvRbQgzgmH9QX1TaEovpDKbBKZ",
  "key20": "5iUhDk3MrCUeCH6ZUgPS5gp17HXkpvKFCyjVeuBvQn4gcHXae7P7gQzCvCcEtvvUTByTzZaSCwnsd8ULNU1AtT5P",
  "key21": "2BX8Q8dY8fv2FMKFQLZ5rMyQt7SPsrhJMf28dfLdN3zc1X6uRj8DgtKeJJN9iYga41s61Lx2hsvGrqGdVT33FHoL",
  "key22": "3tVQ5N1DZSRQrFFK3GXbRtrYHYJTVDVEAuQ6gVcvKaap8c5VhkFrZNRn9F94varPJGeuveQz8cxbVW5tenjTewr7",
  "key23": "3CKwB6rjAvM871TiVKRmqN77FRfxxK6i9nBoBLa2rqjLr7jCpK2F8RbZx4sjgCAEVBmkzbtX8gNEXikfuADfVTRA",
  "key24": "5zaskmURcpLhSN3stnEzoUynAq7e3fGNFnVKkjdxuGfQoro5vRg76WZafSmUbPBDf6LoxaG7UCE7b4cQdJU4Dnz9",
  "key25": "34Zoh45hAFxvFQeNLsv113nGr63jYKQfreA3jFs9mSHCyzZkKqewJNM6GYTJFqZTbf76QVihMqNbjhDkqsErzwJT",
  "key26": "K7PiKFcyvVed1QWEiKnjaUvAVF6DVxSaoWUtKCRyWSdURBCq3bPLTtCh9t8HyCrAjHP1icAKkN7nYq9ucEWuJNN",
  "key27": "2CbK398Mu7VFyATZ2ccFJabWhHb3eD7S3aCNzeP58pn1zRE7S3C2uW1WXJ9dqUyXdWy8SGu6Ld2XyY9Srp4K1DzV"
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
