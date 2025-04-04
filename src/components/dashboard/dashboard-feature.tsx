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
    "44kRbg4ahCrHiqSF68vVbGrJ98Pk6LNU9gEg8cV1U79FRnnzdsBjc5tojWgbgfgbrLYtRHy2e6z6gFFHbQNQPD1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mNe7NoLPWWKkHvBHnNKBryxtyu3QdusQuJedfyoHoRNosLRumvpkPLDsKYBpoewDbSpjgDd1kFZhWF1RCJQVfv1",
  "key1": "5fJXu8idrG8DEMxZh4YwvSAxMQnPQHQ6PvAzLbD8hU4uxAMbADMXjWBCWE27hmrLGma8KoJD9RSKkU2BxgB5EEzp",
  "key2": "R27KQyvRMgb6WJx6dgiyLyG9CQpQb5ASgdTk6ReyjeRzX11yufEmwvcouQzw1vEoyemzJDoitaqUcAMxsSX66T7",
  "key3": "jGRaMd8fLKT7CDU3EZsH2AsH8rUc2y8HYwVeNbVYKbp7UFGesJsgo4JtZH9nabcP6sS8GcB4wnMdkZNdLQyZs8A",
  "key4": "4x9dzhXJKiYNhD1tKerRjwMMjBKSvR67vZvQaSkJXm8XdyWi6TCugcuUfNmQgwryQJNW7gYmbwZgNwEgBP72wxcQ",
  "key5": "56w11B69Bgz9QACbmVxZezb2cyQUH88DXxuBzkmuAg9qMNEAYug4FoNZEwhQjVWCXo9EZa7jkdbke5ptyEGLX6aw",
  "key6": "5g4U743HNfLZanKEVCZ5UCRBx6nBVDmB47MHq435dc8a6KrZGyXKrYnTKFcmUCXn1nezVBdBD2DUGS7PRW1kUMR5",
  "key7": "2Sn7c97EmfbrpeHubjEagEzf7YLk18UsVfuF4ufYQmxy2bypgJKo1Gq6g3TJE2AjEr6zr15r4a1zmVQQihywQVeB",
  "key8": "44Gea2ipd1raFG5rkuFEbnoE8LWhT5QEoJPx5jd4tDRtu7CDhJ5rsrgCqLgv33Ab8CtfP55D2c2r1eGd6NJVcTkX",
  "key9": "2u3G6nqkHcZn67bp3SzjPkFk7E7xC2RYBvUY8QnFq76YhqKfvtf48ZPP8dorqeuJjefq8hMq8MxaWofdjr8sKaP8",
  "key10": "5ELqPNvvhEq5L2XQEYWV29BH3qkQSsxnqNknX2nTqdJW3FaNgg8cGeu6S9UPYotoZ6Xxd8VRHnUCsKfYRQvnjYRa",
  "key11": "36oZUxEGsgRBaLoWB2bHc1UBRFGbqbFZQvRPWNFv5uNkS2BwB9neciiQNztHQkRWHoXrSEKjrfJor311a2gSxj86",
  "key12": "5VsbCiQP5VZwX67dpqdcMrkh8zzvNXLFetughw1Vh5VSX1vp61zeUCNwf29rAqiCJsf9wKBnJqGkfe5rZMPuZ7nK",
  "key13": "3w1Vy7GE4hXWCJycNhgn63g3E5xBnhLx5mFgvdDUQmsB9YzyhTq9yJT5NSZHinSQrZvv4neNW1gkj4gFUpyjAAy4",
  "key14": "VvZ9gBmaGxvY3XSp7LpwJU3Uq5QTeG3hqn1YRr7ZmjtG5NKsJKwK9AhMPNRsfxW2rfqFJbYCJGxLzmx8pxaDtxS",
  "key15": "2m5kRK7hiaLr1umSAT19dMsvNur476LgcMPKo2s51RQAXd3C3w3z1HvrHdnt4edKArxvkYCM99FaGBV5Gd8VuehV",
  "key16": "k653DS4Kr17msAvjvCLXTsDgfe6CWjKjr5FKsbWPCsrcZs3RLkaQEXWZyY6qU9wcrNeQjyXYHWC19kGFSyuUgiY",
  "key17": "3RKzvb5VequW9ZbeLm1r1zxcALhpNZHpoDVt3WSMQjKn5L6BkrsGxuUBZ1bmSMgiQog1jHVxJL6qjfdogH9naDf9",
  "key18": "4956hmLadeKfuBniMBnuyD8DMkP8vhGbxFMHdZkbL8qV8jvz4AxRBCX8JveMCoaG7YEcZf9gRdNkbzA3u81TzDyg",
  "key19": "4abRS9MEsBZ9KwxU3Myuzui4dWQGzK4z3rPrx5opeUqdBbMUo3U1LG3sT3pRgH8oga7ajNMZCDRP4VVWVqENAqBo",
  "key20": "4GoHwXxQdJ5pAFrbjHypEK9y9JpAiPozM8XsrxANmohM4MCz65FhESxjjXsGbgjWf1E8tnTXS7nqcr79pXzJ5VZR",
  "key21": "2KTPjYNHwL3UVCu4fR6vMQ1eqUp1x3zg3boybjXxneQZVSZwAdSTSy1KrdiQBuxsimVxrHTWSJu9T1iJYLUz3acz",
  "key22": "5wtRQL12p8nkTFE6TgRYFSWgCqTS6FWSE6kFf3WJxjamk9GigPiRPmv8GzfrvixHP2TVbrrYo2qzo4YZgEbbkykR",
  "key23": "315aJNq8UzdfjvJxQMBG8SMxxRuB6kUdbVuqwenN1nYpHGdMhieiT4yePnakAt1n99RqmkHoWZGbSieoheLkSZ1n",
  "key24": "5t3ScbDvt8QYKYS3QWwarabAHudj7AKBkE7bu7vp7E4ASC4sbQgDfbyUqQN5kvN6uy9K58Z6LNuPm2VVdSu3ryuQ",
  "key25": "4U6eKmFSYtrLWroeLHsBGzrPLhPwT7EqNhxkY9ANGiYB9ozBNmixHsgswaADYFP3uoyhf5F6Lw6QPiUxmM8MPVpw",
  "key26": "5FAM97vgZGLkz3Xn8jvQefbrQ7Vt4RD1zKfeP81oDhotALHWaCh6vnfibMSA2G9xS84ToJTUvtGbNtEHMBPyjPMJ",
  "key27": "2KboFHqXkJB3Cmuc2iPA8trWdQhRe1ZLuYW8Lw1Zfr6Lkbp88nVyhn22BrC3utaBCKcfKSFq917tjCNG9NxkhzYf",
  "key28": "4BFbEFDEGkgvaz9r8kfEMudxzmLZGWW4gt9awwbrouTWs7Y1Txxt3ksGQLySJQnaSCncNJsVEfCbBom1Ar5EknWP",
  "key29": "5rAfaFCU8fKyWDycdDQ4SytxiaxgxjQjrEt66JV5YuyiEerLVKeKB2SoE652BP1Tg9o4iaXAk8RT1aKJis7NQcV",
  "key30": "5rNzDYJp9zaKxTCDe8j1XedYRPLDPLVKUq76WgoWiCT85btSRBp5S55qsXpffWRhfcYLZP8DbUJfSqCgL3iUakma",
  "key31": "3kpz62FSUGMddgtydtHAZpBEXSXn2dzRoGGj1Mbq1jxtUUQLSrrwxVgsui7jjQcLk66e1hWoeExz5rzgFYz3EoZg",
  "key32": "4oz5X5Q861TpBsa8RkTiXPxoKVrbTRsCU7hbc8i4gicpE3CBVpjxrtQ4Yo7KKYPcgYbQFfJJsN7rhWNjhAo8U7C3",
  "key33": "5puxpPDYY9JGjYk7bFVtKPw2QFKV9x68iHSvH8yTSTFwpr1SAhLffokxSvoQxmqcTycP6omXyhTsNx363aZ6wCCD",
  "key34": "4E1TM6Y1vjCSJ57NRbpusAxD642KqpjTZy8WApoXunnxEfGPSw1PyXFNdmFMLw4UiqLtknkATRFEeSTSe7Ntd5o8",
  "key35": "2yFpu8tGK25Z4LwhJp3r1yFpCUXyZkwvcjWucco8s3YMzWrET1zQQyCDAp9tiPvSn9U8GgFmCZHdXfoLJpqFdVxe"
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
