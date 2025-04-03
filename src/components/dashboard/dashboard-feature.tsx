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
    "ZSyvy4m2d2nSeWy1i8ncoyHxNo1C3gH95DP32WVpWoqa2aKjbqiqBgJUjZ3UBio8SrSEf9un14GNF6yQHxfUtis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F5mPLg9GKSppsUzewhjnceicLztmyH3CB8NLngCqcefvC87dSXLMazhqSmrigGHh4UngngfpeRXEsiAbUaHdZqY",
  "key1": "4EsNugZKfkkBN36Ac2hEgASiCHfqJX34hLFErWVeT6x9ARQYiw7hGx9XGLfTz9PiwwNWf4kEiDe3E4hwCdQLyjo3",
  "key2": "5vktGB4em93sUYMH2qnjjDq5NSUZqWhd3yR5j1Ce74EeRT72aCG7Fa1iaKrs1kMeSMrhvEZvPwDcL18ddgt16k13",
  "key3": "5csmsuVqF21CNKecGkyEokn9Bs4QCxq4iZw3sWMWq5QqDdz2dzLukfWU6pV1C2edfpQ98a1Yyvo7bvgzPgncVM1E",
  "key4": "46CqkuxoQciFECx7H66SQA6m9zmq827RB8g2EjJFTr5uRVmQfVUHGrB6L4HPS2NhJmrLZ31MftgfVe4YxWDHHeA3",
  "key5": "3tREugoVMmxMVJsbM295HAW8m8pAdmkoaZ6Nz5MtDT5zXzqUWHe2EoYLUDkw3JJpTpjmEMTkxLbxn5bQesARzKWD",
  "key6": "3xsjpek1W1gbqeZP8D211ihnaTwPNX1BDdzMwah2wxV7aJGDGG5FKmGgt1SAv8JgeY1WBrP4yYneG3nHkkk8rXBL",
  "key7": "24T7NzarbQKhQtrqXpVc4ME4g8hU251f1mjGiSbn9J9E3v4JahMNmLyYtpvFBxMoEwi3tg2VcdjSfbeaWdeME8Pv",
  "key8": "2BEfqpPTfDWpiHwfLtz9U6e4NVJLnvigCF4jbszz5muy2QvZyL3kkQ75fa7Jmxac3uiYBhYXT3gSFrLC8eXsjEMA",
  "key9": "3v4pTgojfqo4oHZgEbyduyeQLDnpfz5GUPtNXV27kZsANY6i9bS5rvXNtupb6yPqfaZRBreKzFTRJxXgnyud5MqX",
  "key10": "59ZUqKiwc9KXasedY7XA5pn6qzXwPrnGEhS42EyX8EuQ7rB1VmtGGRRBPeS3Y5yMz8HcBQy3AtuupSmfpDjXFf4N",
  "key11": "2gCbFkAUZM5n2kaoqqEja2gDqb4My49zJiksbLCQusPLwvN2BjJDgejg6MDk7x6vHFtc2Po2J3i5tUHP7dqWYkrG",
  "key12": "3rFnUh1vVzCPjefot71pDvYLfriRGvkAmcjx2D2GwJVR5gF6LfbR5DuWEyatuRMyCPwytQKprNU9dkPnJegqkJaX",
  "key13": "2mvf8Ghxqx139zz832b6YeQxr9kckUP6DNzxKQ184s7rqKK2TsjcUutg9SB9tcQfgenViKzzNJjqW3tEzDDqJAbo",
  "key14": "4SqCgiyyDpPp6Ey7DWVqVKmZbuYiYfeogimVsarQ3HZ6VsTSxWX4gPswQ2bzRuHNVpcChwpYLryqGnLSnvv8jDqF",
  "key15": "4c1ucQn5sEcbmLt6M4mjBvSaRdXZbAX6ngrprgeEUPXyyyooPzEUengE8jkxnqWvHjeEtnob3EbEP5369bJ41f7J",
  "key16": "4edWBb6joDamW6qY8e1PWFygzu37XdSHk74Ant3BcnrnwEBtpoECkAzchUCBa81fYtcFKzwKadaXpRab7bzH6R1n",
  "key17": "9BkFWWLmG2Rd6JXLh8Jo8HZ2AX1HF7pk9aSRyfL48AJbMFbZugdEcmYMxEEJsQNZRkb95rqWE9SkAAsCm5vZXAv",
  "key18": "5QRDNPcQFL334mpFdi7upWCrZdvr1e7ywyrZVsCGVzuTK6zg7XxS7UAxNNUyJ17uL131ve2BgE4PqBG2LQTCXdbX",
  "key19": "5q9XZjGgLA38a6RcVTKYZ3RLGJ6rH7q9gHhmiSFFZSHpJGef24ZAszSvxHr9zocAbKdrLD8izdBu2UoTQraqHVkS",
  "key20": "3jWBCSzdaiqHgpurjWv5NxsYtJsZxQWsL8Dv8nYk7QigJiUFiJm9oCGhrbJZwozVtBM6PyZxVfn6jmTZG4kXYWFF",
  "key21": "5RMQP4DmymCHh5u1F16cnjFqPvsPd5WEn3i8vwNvb5CUKamNJTY4hTdQSa46rsP3WN6VrL2AcQkwaAR2WM8VkkB2",
  "key22": "tPk6U2CQVuoa88RWeQezHkMB9mzETq7fvcL7K2zAT2QCxLyErpvqjTVFiQpbqMnNELS9SgDCENRHQ8MuaT4Sxit",
  "key23": "4hkJTe7CPCvDC1HHSsDNMicDc8to8W7UTNEay2zD1jY5sKp9JQKkDhMEs3SCod4UqwYRGJw1bTQcvTxDE1WeU8gq",
  "key24": "4VmTZoHLNndKcnz3D5bCUbMEZgAc96GVh9kCS9cKMiV7dByaab86Ui4GbDvj3dWvwKwgeALEVcVhm41N2aRXBaa4",
  "key25": "3RiVFrYC22PakmgCvWe31iS3eLvR4WEZJ4B6gHZfCYiaxu8s72yLGsPcAiNPpQBzMJ7vnQWFaSSZ3f38fMb6jxgR",
  "key26": "4Qnm1eJHdJRZmnbSDVs9aUFnQXBUPNxGrR7ybRkrQZbpNzWSQrvFb29fCJpQpc2e15RCWyE5g2tTs44ZHwRVr65K",
  "key27": "5mrVvUXChxkxTSHQHMxcrpruPjamRsFkvvy36hLVSn7wyWVibD42tmv5R5SHPxBz9jUSwDzvtQByniTiNHaL9A3Z",
  "key28": "4vZwhJFCNW8MGjd4QcbnjWR4ho446JtPaGduyWNypvNMA2CnStHZryUnRCoPgVaXZGdDwrHErf8aAtY8zkYjmhbs",
  "key29": "3AX3pkuFN3CNPh54yuGtpQGSFGuR4NaUDSGEWHEnnyQhUdh6RzM1oCboQqEvPtZoGonzpxi7N8SPMwU2C8Rc1R7G",
  "key30": "2reRUhdt8icAzw9TH4hoDJmwW99WD78gCJrCjrnASkfP9mqG7ihmeLkNnQwx1qE2bvqhkG6GPxttApsWgNin7vbg",
  "key31": "2NXjexhRj1UQDqHzNXxRnTq34XunaAGTnMi4fX6K2eBZDiAPMk3h93ixnxdnogRWunuRjLY5VvynvR3x5WuFLmV2"
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
