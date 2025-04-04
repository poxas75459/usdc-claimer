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
    "45Bghcaj4YFPKWfW4JYp6zJrqPF2gSJzdVNvHSPt1sgriWjwQhv3inHSwcPrHrpNqExY8bAZjG3cmSD8qt5UbK16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DaBwnKs4LDmZ62bGqsMyJBp8d7TQK8gKbfwheAB9D2euaNCo2MYJWk58h7oUR5ar9CymWSsxPyMVnTHnzQAri6u",
  "key1": "xuaoT9DSSoMssCRTX1DUzG6GHxA7d7fTs55GdVwLvyVuFTaBHgT7eR3NtDsFqrskMJX38sYojEvtn9aUFK7fHNi",
  "key2": "4KWzj7eVyCuFoafazuBzwF7jWZGBVQxtEdjoN3DqHe1iiEA7soqGoPHxE3WnSAA1SR7yirxujogD8sWv2gutjXxZ",
  "key3": "5p3V9178SNxHJgcXKNnj7vjEFk75nMNVdpyKyT7zZKv4NDBYsefmw11uGwph9Fqz3cs7dfifnHfdfbVyvhh3nDfz",
  "key4": "4oo7nmPrR5C7fcN3Zk2LY9uSFr4X5VvSXETQHLXhzH4vvXtVHt5tFLM1oZN1LjcXvivFzvRk1TkhczxjDmzwVCs9",
  "key5": "2xVb9Z7C2zMfg14o1aGXvtsBMdVa1FXemCyxRuN51CqNg5vnDaViTC73mUpqPp9y7VjUEinFywrySmM1HmCGL4Ze",
  "key6": "5weNQz8fL2YZzrZzQ9yWYpLF1G72edYYAMp9n6QpSqPwTofMVb3wVKN3SHkj1irPAWvNHDGdzxUsAzPcixeb4ekU",
  "key7": "2u1HyQrn4RXMeh5J4ZmfKuowLzuRXzyk8PM5GfxD6rg4PkrimSdxTbbY2W75F4n5H5EUKD6HRpM3k13MHp2QRfkJ",
  "key8": "2erd9GQ3sWr5q5GhRzrqjjWTWFpuMoz1MnbxTJbMKsZtUk2VxKmAGB3uFChjnYh9aAPVFrfjvpt6N5fV8J89jpuQ",
  "key9": "5PLgqKeJECwrYY2w2WZnq7WDeC7bzmJ4f4pgUoc3CnjFMWZedTkYYydT6AYGBxT54TQoQDrnHVVntFBGoHnjoF9C",
  "key10": "4JSxsj72HjXYBJt56ET2AWuv18yDqk2kX7BVfkMGDaK5U12sBLKDxTN5FHZN2SnqsQzHzjxZW9ys1aYPaUrLv7VV",
  "key11": "QAs3Gw61xizCgrHp2MJELkHHJBY4nxDdDEEgX9y84jTH9hu7khob8RtPPitj5hpUVpsPKG43UZu76aHL61EgxXp",
  "key12": "HKsRPbv1hWd9N5nojybxcH7u8dDK6iZriTu7G6wNpLQxw7BVNdBC1VCbjgS7sH1D9t2Wr7mpT52465d375qbw2t",
  "key13": "49fRycfYGGLu9MoWWdqPUH7R3A7PuB1YtqpRDoua4YEt6JoikoarMD9Dkpn5LZt8pM4PmyGchopuXQRNgvHRPQqi",
  "key14": "5gDu8osUGyzKYQRh2LqMid3GgCjgb778ykNY8QT7vgrYMS5Lq2EVNU3vbgNCXQqVdureaWx2wbvKcbAJ9HcrMUk5",
  "key15": "3cmGHbkqFR3wG3RM6YyUnLw9s2sNJHuuEZv8CQ5sbdYhb6bSVPxemCnhEXBHuzoPe7qAjQNVU4PH7HihrywsvTMF",
  "key16": "mJskKUHaxK3HZgYcamhutFkbcbwF7etPqUKGCDFnuLCPeyBD5knd8ffoTdrMN2PKDbRszuZ8KkjxxvivvMukGTx",
  "key17": "4F1qmA7YYDJMdohaAeui3dSEVcNWESNBKUC3ZSr9ScqdWnwhAjvzGBd2XA2fGRF4qGy1i6T5hjyF119BNbpkFcxf",
  "key18": "3m9AvD6pep6eWFid1P8zLsiByRdSy8pjdF2U1gLYQBvk6gLmMy9RjLDvTnRTB5wodCa9RCCcKu46utjdUxj3qP2W",
  "key19": "2fqaoRd1BBZ7zhjLZzbERTsQBVMScyNAV1sbk4tS6cRkTJmdQkBBgnrVoqnkTvanUNkW9LtgN914TUUqvgJiAfZR",
  "key20": "2HsDxApsLE5rxe1ku6q1Shas2U6rCvdWhs9d9VVQz5nYqumNdCdePAsxHA33h5n2iJyDhdNRb6tBQV5e9QpkVXzR",
  "key21": "onR5thHJ5EQwJg2i8qJu1B5iZNHePKi4A1nJF4w87SKugkvRFQoQcMbZHej7dTWNVvAFYcU9KWL6fp4DpYiqqVa",
  "key22": "24SmjUrLKteQ4aMbSbqLD7iUr3q1cBXRa7a3XEG8JL4MWtmesUL65ZkPohKJx6prQhDJwZuB9EWTTxJLYNj5YMkg",
  "key23": "AXygqsTC6khafDJsgPApsszSd478NkMciKoMrQYVi12trqRCKDPGNJJDjANKNwmrUpaYwxRye8Qkx5JDuGnooSf",
  "key24": "2V8HnTJQs4JF4EGwKV2QbESDPD5dESCjVBZfbN1tJ4Ayh6gnz498U7tGo62LtJ6ryyUKoMmXmAtagHiFjNo1C92r",
  "key25": "7MYaV7y6EAy3nrRvWmL3FT5fzuk95BVKk8N8yWQgTpPtj3xBaf7A5RNUoMwcvLiCLJy94duWyULuLmCq25do6m8",
  "key26": "xuNTFT6fXk8sd7uPFbMV9iN3ipk89PFMMkirn7NPvrcWYjZA84HLGrPM1unKPNkaJ5MwtEiqF9t15TBGiKWuLqX",
  "key27": "34sd9arc68VWBphyDBy5VcrrCjC2gHXV94eyeBQyrCBTYTkFY5wJZ62NGZCn24h7JTbgQaARNmQCwfmWCWGfuTxA",
  "key28": "2dDUbGZY7Vnpr43VzR9JRxgG7QUX78EqKsrdDruPx5fRNNB3xtiLzzDbMeBGrP1yYshbDe9ekTT97HJBJo6VeCND",
  "key29": "3oQyUVHAsH3Np9Z5XC4GcNrnpo8KQhzQfFtLgUZSAmMXKpoAEyXhbkF3opvsQ5ZFjyPqbp13ehtXF1DXRzzH3Di8",
  "key30": "4zrZLsGezQxSip5WRfDqHRZcFX64Qr8xeobvKyLbzfTp6ck4RDoeCEJwegmrWCysWaUcVSPfoeBWewwXFw5dkda6",
  "key31": "4bPJMEMdKRMB5GTFMFuUJH2cKo26ZHjZBppfSbeQTfdjkeJmtTAeeXJ5xHxzTapqRMhVFQvjeyB5ELcaXqU3CNnm",
  "key32": "5qKLNt6AeNYsrZEuprWHbR9GEgbVMisoRUrB8g2ZMM9YoLfKU8NtogoKhem8QXKXqEVxQQwkZnDaivirrszWKQ6R",
  "key33": "31ZQpD2a3sCWekAb9LYMGeDtxo9wbF238opPqYL9QAXGaVTWQfpyHGj5A4HrTrHNqA38KhTS4qUNoY4KCbzSuRpu",
  "key34": "24VdivpBtVXDu1hfruY7UChSn1p6pt9rPHaH3hY76orhzHyBcSie8oL8m3buWdp9iqgEdFYakqxZeLBED8789Hht",
  "key35": "4ZeQ9s4Rj8pnbyAWEkxpzqK1pCMUkgLMGJp38gjTBDB5bBvuQx7uQuviZArTzdjzszX389PxqBk2bXCYgjnyo7Na",
  "key36": "w4HzPGBkyhaS5pQmZJTRpYBcK6Ww7MRYN6rQgaSmYuef6c9mvNfPmr87kigysB5iKQzmnJNYcaykYdR6zZWweWX",
  "key37": "2gbhjbC9gWfxA1gHRTKtsUgWpMNjccG26RBADrayqzFncrfg2SJY1HrAhR7CzDYbASk1bfdEwrSKPFuZ4ZvKHN8b",
  "key38": "5x6MqhriNhdLfQ1KW7hRLy6uG8sgz6UqrN6dPb6U8zqZabUkq6zvmH1DN8rGbahM66ShgLBSi8ykTHRwbFRXQMpy"
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
