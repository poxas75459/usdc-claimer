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
    "TFqv7fhyesYMN8DoZm5gaakHRE24tCG2m3HWq4DbXsxZPfa6JKD6smycaqYdJyKKgA89prmW5ZHnEJzDccVbtBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vu3neWf4BQwNtLmrvr1ZFhnLhekspcBMe2fBujrcRbBvYvjspa35ADUb8tWdQ728Uk6FTNYwyxhMm632ECLfjxN",
  "key1": "3CdyTJt8maxGVBYzzFQj6fXstF559zfYmmaQkce21mJ6TL9oKqogqJM9ued78KF1KGG4yi3oyyRUt7XkiNeZrHFy",
  "key2": "2VLDSY9ru8ghbtWug91gwFv3wpP1f5YYo2h9qZKKj4HvtdenH7koH2f4sw2BnkVapcLDPxmeycYdfTQHrQ8DN6yK",
  "key3": "6441aDUAqUD4a67ydLSTkasrVJFE4Lt3ke9rBGqKJJbjCnsXdsSwoJKhFpvLX4QqhKHNgHGtfkurLN19yvbtQvXY",
  "key4": "23s1VJfCPDMmpFUXDnE8dnUjotYeYUsv2ZoG7KahH5RQxWqhsWrt5cSaLz28qwHdctnJq3aDYJHTgJEhq4Q1JXLK",
  "key5": "4UU35qvhVXeiPuRjAy2fbxdgzMp612xhDAQJruP9twkxEeFE5BCNbCt6MXbDyXhijzbJwHjV3GoUzLVyf64nosFC",
  "key6": "45dNeH3AgrXsNQ9VykZi1AgveseykgijtQJSMo5VoLKbrMXuPdVGmAMhzHV7PQTAtKr8GT4xTsMHHr7MLgvKMTZu",
  "key7": "22qxAhmm3ifPQqBzxfQCskedmG9Zk29w3szANiZBA4TXgWAV7Stpt3X3t47Aj9UL44fNUQwEe2SPEgCFzfXyGYQv",
  "key8": "5GAXBzzt6x6t6WVUgnZdGzEPRpg8vxtHpoHu3wFagDAVmdeD79UUVFiiZkQKtn5m4zQGWgLGdAkCSkCAUDEcgaf8",
  "key9": "24cqi4wd36rgbkoMurpcS1yW3J46HSkEU8C336DXP9iz6wR63bJLydfd7qAsReL452HkjRbztRWv84amVszDHKTc",
  "key10": "DQUJuBQAfs2naFBsLmNjeUZeJ5NJagP4suDwwSjtW67PuwLJocg6KodXmtqBosmCnBRMBATpX7GUgWbdfssTits",
  "key11": "4LCSdWJ1u1BgvQF7Xj3fXQcw5qZ8CoJB9Qu7qvw2GJ7JZJMQuq47qnSam8YtBKzHoHJSQjkwEKAR5MUW4GwtQyv",
  "key12": "5K8HYoTKAPjV2RFuLsJyp8dGD51LNHUnv7wSx7Zycvz5xJEFLFeAhEkU3ShD5Mns2BtCV5jjv2rRQu4jREHgtMRw",
  "key13": "2GeSfgPRb4riszRtvZvX3P8utHUcNxTWzU7XV1eJydNswFw1S7m8yQFxEXcmeXQzX7oLe6hopNNpuP9gWfVyj2QT",
  "key14": "4h4vcFF2VNghgDRC1HgueWtZ28hBseC5yREjwjRgGRHN4jbBdq4Sr1C2Sq9s76cCsfYAHNmCjdw2NLzPwgXKAw9a",
  "key15": "4nfKosDvUtuWaL15SuXsvaPSxRcxJmc6KjG53DKhjtAPsm83bSiBcbaWmFNLN9QxaNfqjzkLUW2Mtxg3x8FcDJsE",
  "key16": "5BTZXkargNP5XWWshkFYsTiURogSX5CRpPoseQqzaoV7xW7tFW9vRryScUZQsovsVXEh9xm7ZsYGA2GQrAijVrVe",
  "key17": "64safVaXKg9qa1iohYAMUgqHhGBMAtXhwfwUvgesbPknmGBsjvYMSNT1s58FrhrK6BLcQkMfK8jz8rUYnLhhY7Ca",
  "key18": "37CAVAbCRWaKgd9SdBkK88Wwdiox7mQZfFy3mUp7JMcc4ZVA3FNcnPCsX57ffcSDHu8iDVEW2YgLQWazgwWjuCH2",
  "key19": "WMAKuqe6EwpS2DGeVGXvs16JD69m6NXJtBJNKqq4AWEY8kY7eKeguLafPCCHcTTYLXjmSuuyXR2mWyUkdFDBedc",
  "key20": "5JNiYudtUv1YjGBq1gp314aDntNm3JRpGY1T8sG8a3E3H8tqAbKiBFEm48vYAfC9mr5rDEQRGMRy9VAD6sbhe3Aq",
  "key21": "bU3v2LUY29JtsJ5aaY1Na1GgQq9xGVNzUh7Ys9Y9Q1X5Vfu7T9QfoakizNDvetX4vtGKzBKH68LmzxVBbto6tMA",
  "key22": "dmN4B5XGuJmBihCJLggRsZWjNaEYywVYTzjq3tB1PjjVdUyKGpdPkJebWxgBxgGC5u8fUexgp2hdudymw3Ema79",
  "key23": "3URxZ6SyBJRqM54xf7taiSHwrzWUZQNDG2hK7Sm25FB7jdodVmCtixzJSFak5ekTpKFSeGphgA7fVzpbpbvqF4FU",
  "key24": "55gbcVfLh4jFDv8vWLrjFNiyfBJmnEAyL3RyJDqpUDUNXmMjo6DqEimFTZs9GkZUC3isokYvfWRYXznu2xQ9Cbb4",
  "key25": "61VWJ39cuL3PRzo8rDCMBRTYgGoi2xjSeRvbuf7cinLMcDQu8h6L5wpzzErcBPWLu5X4ZWLzkACajrhTt4rtjSNW",
  "key26": "3LZm3W9Q8s5xbs3p9K4CfP2mSiTamwnZd7vnN8kSBNaLNrmSicueJ3vaATfZkGHDi6z1tEWQMHJEvoChCufaKJ2i"
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
