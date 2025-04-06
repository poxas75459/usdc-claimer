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
    "2EHGZcSyBKmnmRLHaGWZHgdbkowWgspwVEvFSx6qdnBEoJMwfGx64mLRfcPuWcdoCrVDWaH6Za7yenUqUV9VWu5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MnDhoKU7hqnrFqG29LYr456C95irrpBiQcmnkM8Wnm81byJPX8YDYCUJfn6s1tsGSNGKysvVsUmL6XmbqSJdbkY",
  "key1": "5rmG52DidAXCqCs3jtGSbox7VM7orC1dLz9ccYLA5sGbymFiqTQoNtHXgv92rocqdhtNro3VkpE5xepYBDMUqjfD",
  "key2": "4iU9efKkJz2yzCFXUmzK1wAZ8QLL1GygsMEvJpwfRjZR5vfUMqiMTyEBEomh6XCQhPq7spaG5HBkx5ezQKmJfpgS",
  "key3": "5ERa9koifhuTt66rMsBNVRR4kv8126FgeRVPUm87EhNYnrZp9DD5jzmmqKp8XN2R6tcUPokBBJUiqY5PhHrdEbS2",
  "key4": "EojRQ6TfRpjzQEhY9WmgudmWfNia3YAPEyEfU3WqyaJWw3GqhRBg684nAdL8Zprtd78r5QnH4i9x6XhMEDjSDsX",
  "key5": "WSYzh2psVz8vakwxDELT1hBaQoqrdwKJ5X6n5GZLgg8fxE8DH1o86S4Zcn1iJZQipezuH12quckLtt7QPpZKQ87",
  "key6": "4S7pDJ9hXiiQ8rGbqaaFbyPnJbocmQk2c5d4FWF2hbnfQHdVcwngHqqUfxERoy7Qkay3o37fNrgRrAcw7LJUG3Pa",
  "key7": "s7JTLXnbjPMcMUEpwXkqSa3yMvLLhTmjYtR3U6dSdgNNdZXWEZaRzmpSHhU3ZrZYs5rK5f54avRXjEE8udbzGaT",
  "key8": "5HJYcRXZVcVoEhqRzF55N5Pw7wqEuXufgDVcynkXFf21BGY8TGsxHkvfdWGyiMsrjdfnNtzctYgQdydAr6wthx6n",
  "key9": "XUC6AkeFAVeWpz4D2LJHgmpHjd9kERBuUDXSpHN3GKEJtTmGqW6DABLXGKC1aN6x46w2iYTJRvqDzfPQWkEbTvA",
  "key10": "3UfwoFbgrUYsnZ4bEX535yY1wJHeqT6nnN68coX8FsJRRY6EzYMZGJXhHEZzYDtcD6mNF71jVSSmwvLMW2GXdwHs",
  "key11": "3ogGQNTkbhEXZXxRFBfW1qkvrbZcUX21aBimqTwzUb5bbQ4T93aQ2DtHi46AaFbgMivFqpTXFxjHnVwPXuNs5qw6",
  "key12": "bHuMbTKpiBzrMQiiKf7N2Xh3UvyqPagLyUKcTYXePkSKQxVFEu5p91MeQAmdR5wb4YD8c1UKAdtvLntRA6zw1Ar",
  "key13": "3CNiD23QsVXAmSQUH6N3QkhwJQff45PRYKVrGNxWGCpEEXbndhinrNtrz1SCfa2gmUVbbp5wz9UAsDsagNABXBGc",
  "key14": "5NCtxR7JrDkheSE7rxsQJncJnGRR3WZwTfpQhzy5ZViUJREJMUm52WHH2NQCmNbRnpgQi6qf1ZYHtYAKMswHfdVG",
  "key15": "4g23LpVigRfn6BQP36yySwmHgwM4HGMCGaamXfwvSUSBVQfWKDSaxAGG27V7WHPAdzvsD96FDRoAJajHmw4JGKq5",
  "key16": "4jnFXmYKpY45VdoiaoikbRuQiMxxqX7cN3cmu1NxnrPUJLsrrBVXnkodhh72zv1yUjHrE2YEggtyF9MBwat8KGDd",
  "key17": "GKHW4XNyrRMb5fWxfRrGrCGJiJfQfrKgNd69EGa8xAyAKWaqzGySRhb91NkVZDYNPemCWAevXu85M26seCzcn1P",
  "key18": "3tzu3cbfFsgjTDd66a89fxvcxjTgvpGdHwGn3gEcRmBfsptwVRfYizYLCqYdAHPFMDY5RFFjgKqKia39TiAvveyk",
  "key19": "4shqqkc5GqzaJW1HM2xHkYK7KTvG3m9zq3LYCF2HJiDDbxDv71svR9nVaXCVugh2LGgGQDo73NvjRSXkzpez5vio",
  "key20": "4NiPqzDv7nScucB6R31FK6tY5UumddE94YPeBMn2uddFHnTcmZ74cxmRA98yEnTmg8q9TCBTbhX2he9x5FHFLvsH",
  "key21": "2VBh1KKzEhAhG5oaCKrRnHbbmSRcfVTYvtcsW1Y9YRmXPL9pmVSWxkJLSNbAZJdegwgUhfKYuQe9VJK6hjJqp3Pb",
  "key22": "2kpZGe9HCSG1YVS2akTpTXS5R9mTEYgPedxaAXqbJMpp9SEBVnHojASSj4BhXFigRi2AhCbkMpvvbRRVmuZ9raYZ",
  "key23": "3UCHqH6r5AsirTyJFfQXtWWb8LTCQ5epauvYhHu3yEGi5voVzzMERyAB1Qw7fzDQKvUsbovBDHvLNCpwgct5DGqu",
  "key24": "2RktM5mAczp7nRXiRKauu2zvKaFNKp11ovkV9aRhJ1L9zhVe7BQWSNSut39aER4zLgkvUEZjottkhAj6nncpYjFe",
  "key25": "ZswvYrCthc9y3gG6KT42anhkfm844ex8fhQZxN2ziGQDdZyXWJeSXWCwrUCuRE7idwF8aamVmBrWEw5dNQSsoYM",
  "key26": "3y8WYXnKEWj5NChkb3jbXYeV8GrWvvnZDJSPPUfS2z9WnDQhvBdax9ec7fb8RH1mEydykAGDqzkDgMUmReRd2YKo",
  "key27": "231k1sk6Wz4X95Kp4n2Q3Xpp78ioXJEMFyWdKV5Lxd1yL3gFe34qTFmGgVSMkWsMiqR3PG3ZsdHqXnJr8QgCmw3y",
  "key28": "3NbdQbsXij9JUgXY91iAYP3kkq2gxoAKut5fVLzkvVWBCNAWBkPBaWp2Nd1FNuqGa6pjMFynGDaAzha9aT6jyFeC",
  "key29": "2zjTWk7nMwNLujVRUKoqX4jtRDFr94bFSX7GciDhTMEUSGM8R6nf3pBUoyWZ73bsESSScDXf1PeXp7cVGLwRaaEm",
  "key30": "5kidQ9Bf9RKzJ8g3YxdaHyzJFkzoWw6ShVNVEoPDnnCgjhKnv6DiKtoPbADUwAp8qdUyvv84VBvikHoCt1fa742p",
  "key31": "3dYtz8e1eKLRzEqYBPbFrRiEdHaVEdkd3yKhVcUc8DRWKsxCZuNNJWcUCAxdcPo9wAGWmBsgDAeywo1zzfbrrVsS",
  "key32": "2yMuz2JQFAzNQK2SGxz3b6rEe3dvbx33nYyJt2z4KWPLnDXAg5kc6gQRfCdkVd3SrFC58VC9Uz6oKNkYrXwtrZhd",
  "key33": "uofajgDEan2RFB9cpPbXbByuuCb7jdQnJz7r86zQggByeLMqXJd6giDBRJTJbYHTZ14oSQcYrh6Q47dvh6tHoAr",
  "key34": "5zkJEmvhLqR8KEU9crZNsT2tqg8QfHUmM34hvJwBCQXQ2ENrMXA7QYbNT8h9Vuory7CsVr1zaPen6iecK8Bgwyyc",
  "key35": "4HxXkt2Zvd5cwmwp477TspKQE8FGV9jpk5eV1sWhcwF35vNTWaeieb5kcmDKUnV7N1g1gwp76Sf91h2NxG3KL1ex",
  "key36": "3zGBuLca3s3XCrqTMQAqwXuc7F5eXKUHmax8iqkudh2TxCedujg4r618Bg6u7L2bNRecjwzYkTeYk24zyirDbzBr",
  "key37": "2Xgd9DcS4wpCdxN1ebLtUm6TJFnBYhqFJWzopNmEentXmb9rzWd8bDuSSNiaCfKA7Hft6a6H9rog6nrrXcB3FRuH",
  "key38": "3NaZbgR2BSQXJ4pCUD85knfWXTDGzsNy9Nvai9SMDJZEou91Kf9USN9TwJvTD4mHaT6oAMnrrfTriCw3q1zfbqDR",
  "key39": "4r91ib6fM64K2qgD94xeyfc9C5rjiNuwgZqkohwEc5iTqBMth9Rv6gH8hEFqYJKBkqZRzZVGXSzdoCGw51cWKkdE",
  "key40": "4cdk44s128STowtQZgPfzb2H8HRRFxDE8cmZz4maq4AAHBtQp8VUzGwbALV4635vsVi6dGHJCai4HrkTz23TZni1",
  "key41": "YAGPGLijUZDrA3bfGAqsEXZn47WQnLMwp99TggDKVc9uSYJZrPbrmv3X45FDn6uTFLncHL2r3DsyARUcghoPCx1",
  "key42": "4P8KupjXFpnTuLAXP4f86ytuq1968Lh1V5JAAUFVvMQBYju7UNRvVnRmH1raGvnDEauGAfHuUMfDffc16dAPkAoz",
  "key43": "3DdFbwdMfFFxCiiZ5cPx7PwCvvDog5bmea131YJ8T7puPCfgobpLiA7f9G6y4SPaAzRd4vLTvQWwCtufd1F4ZQNd",
  "key44": "4TCPDZKQmoU78XMsdJPHMHKdy2k5DkM798v9KZ1YimMrGPLCoW6dMxSHFWPUgZcTgEzstttRjmg5qhzjwfkdVuJm",
  "key45": "4MYt7hxJNV37kpvu2P8C8k8Uvym8gn757PrHLzzHUH7QJg3X8PExWjVyAjWeLiR2Pz5Wb2m8GTxEypJaQEBu9u1Y",
  "key46": "2a59TSAxYtKEEL3z5dAM7rs6kUoaFEmA4GF3JEP71eswJh5hXRhuzk5PymFeum41xnw7FGuh8D1pvD44E2Z6iWMo",
  "key47": "5qjmsFwWwLJzzwpNpRxG6Z6Uz2kvA9qSTtpDthL2TLhjCbVHWcCZqfL13fmcAhkHwztERCNeeGJ3bFakMEePZzSX",
  "key48": "4EV5byvM1FVzNhUui7SuR4XYyBTj8RBoAkmccmpieusZ7mJ8RYKkiotW5dz47KKxBcixjVLGDuKmHR6EXetQbjb6"
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
