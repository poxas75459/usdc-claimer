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
    "3CGmEWPeEkgELhhHxk6tbSAXtb7KgvtgVio2ZAs66s8sM5gvgQnKUUi24NeafNdXg9Sn4fhvCGhLveb3P5sqmAMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UAs5DysYZNwTE7gxcLhRPFNecV3hczem2itikLxgdAFMDqpDTi6wQr4v7UUhQ9XJus1khTmnEnHbcbD6KVxqCkY",
  "key1": "2ganvde13xtinMagSqYEKCETvrAQ3fNnmfSFm3wBzu9FkQ2vQkDL7GESPTUw2ZNqKDLhm2WcCc447bpZM8Y7fTB3",
  "key2": "33Ly3B8sroA2x3ozvq1DtwEPfz8M9nhuzTxsaRSST8DaPYCRZQercYtuMuva5SQiWE8zQyvqvwbGphzPBS3S5u56",
  "key3": "5wBCqB9Vf9vV8FBgw7vicv2E8tR8ENMK9WBhcJvkj4RCztyTKJyEvL9UgBxAFDi7JFdmS9bAGRoxUdz7qDzrcSpp",
  "key4": "3KRcHCgU15k2VtHcgXzHftK8d6Aj9uSSif5T6Zo3X7544hFfpwtoX3jZHXiV3mCP5FqhCVHfSc5wf1YJV42V1Jad",
  "key5": "5MsqFVdXyq8jM8L6fEUBmHxnVBxTUhHErSrEUPtj4u7Nrffk59fD82SLGrwpHTvdpMNJ1LiiAVAbviDu7gtrN6ZS",
  "key6": "4NVTsLEe12gJJDgAMk4X6rLgYK35E75tk2zTbhfi3UxAXo4F8PE2Gd2DTxzbKi6zmvepKyGH3EKpuvDHUZbrwsNY",
  "key7": "57MhxW9fbXjgeuHpboavhmrtjXtJp1saax2YPZNpZQ7EAHCfbAN2ybDEfXHmaBQaZPb9ESFBVZ5rUopWnc3rJqTy",
  "key8": "BuZ5mLq7YPyvmc2mRkwSgDwUpmT9vBcxuvkgURo9wPqq7zWCwbPPLs8bBh7UNjSZY32ak4sarZr2Sq4SVVDmhAQ",
  "key9": "3nvFbNof3LrbfPb28WSymCuQ4Y4hBfP79biJR6u5Kdge6H6oPebq4tYWCNKqZzGdVUd44pNp1U928LwwSXLSMfDv",
  "key10": "5o6hEXxf4ez9Ca5iMp1hFhyRdhRAXMmtn6ZQttqctNFyg7mmEgoDMLq2ZVg1fCdknJr5P5wuzdrpgrgfCVo8LofR",
  "key11": "56ariwEJ4WUAmBqtVRTAfbeGG8pseYAMrgPpHozwUfz3wf26MS1JRLcEsQdSWvdVvb9THq34Fi2CEPp8jSa2sxQN",
  "key12": "4pbHgDs3pytEGYZEzoY1oJJ4GownhKpgpkeFAiWzEuWaRTErHEjJUvrSRnQ6HHPBhBhzABMfkmz1ZLygbD48NaNi",
  "key13": "2neTT1x9s27erePkhA3bbMgrbgXJfn5KbxZZpfLbcPuHYH8DSQFyBBcwRGn8c8yTgEBagYKdEUQuhkxKf9uNrP5g",
  "key14": "65zJVDsw4r1DDQZSKRaXunxgqbpjzM8iu82vyGNb9KpoGVQpVTxkZqRrsqPUEoAfrqd6Y3YwFJzjHozi25QB96J2",
  "key15": "4Hskj4SnaPAP2RhPUAa2YXnWbpkCSbaU9PwrvMjeJG9Cc4cNB1RpEeVdQrYqVQPZT9ty9avrGaUtHb9LccPmWuYt",
  "key16": "BgmDCraygv6WE55CrH11hvHsXQNhGucJuXEmcGfQriD5MrG7zvHzifA1gBp64vXkK5dAqqMMs1hP1PJpmGMvdqK",
  "key17": "Ebd5qu4nKWU2TQztZuC43eu51RwG8gzYdfSrGSBwfXqatHyCFS86x8B9k9Sp5JYTW9s4oraZ9an7iuvMpWcW1zX",
  "key18": "4S5FM6Bf2d48aqvEC2Qr1RkTQrGCbSB8sCpR9VEFfZaQ8H4x9w1ATWavkWmkbgHrVFRDU43A5Xu3ZYjX2otpXcuo",
  "key19": "5ZXhoRmL2F4QX2kxtbhsBaCTwuK3EuubPKcTaAZyph4pLQNqPpeVJqAujMuwj8moraHFXyrGT4pHc7ZSBKxNhwHu",
  "key20": "43EmHKHG4QPDRdgc93R8bsAN93a7grLkvPyPV7Qe1xiyDZwNJe5hu2h1dDXTSt4vynXNxhSr3hGvEmAcsuaqX1wZ",
  "key21": "36uDJqWnevLXeoEdzCrDeyLw8YjfG688punuNgeG25mXfgAa3W56XmN8w7y5wTThGHu3gb6WgSskhxnWP3rg3MJ7",
  "key22": "JwS3FDqn7SpHtmGPGtp5F4BBhrMvfTTCkA4A2TNPDKpHMPhPtk5hDws8Cd2SreidhD2tHMde1UqK8EUauJqN856",
  "key23": "3PgVdpQNw1qFvoX8h5reuuREnPRsBMWNogGevHXncZLMhG24WGfCtha9KLhU3zM5mtaigfTCVnBoYLa8Tmuy8ZdA",
  "key24": "2QyRtZ1DB7SuGUwBUjwbVdPRz9bqjSEnLUW2f5L1CJi1pm9yfRX8LTf8va8edvt35LGMvdWf2c3sfy2NaqJzcGe",
  "key25": "67X3o4YxtWokJFZJi2uFv5qYGBfw3uWczv7SWaBbPTCxApdADHeu9fLQpo7E1vSwqD7dD3YQ4s6JprvJEuNBD8dt",
  "key26": "41LpbWLuHeaJGsc9hZVEA11EewfgGGmHmxbNkUnLwniw8zL1aBYfGASVCkYfKbsPpyw94XcUBgrxKN1iiqasYZfT",
  "key27": "2PF4QLJKqfkLkpYk6Q8FsaVjcGHgvezDqmCjMzbmr6QkV3u2ErhoGa9TsxSztDNP6hUqkca2mLyELJqkspsKa6KQ",
  "key28": "3EffjsJgsXqjDndwVeGvGmP6FVmigNs99YDG2F4ER3UurP8CSH7oGSGnr2LqVwiVhof7fJ36Y9FWsD4v7UjyB1ux",
  "key29": "4UK8nm2Xzeeyj4cQm6m6XVFetuPGGv24a4QFe2gtzber2riCPhuh8KYLHWXjfexduEWnTWe9EZXA3uDANuVbp3pG",
  "key30": "6Jy1c2xi67TeB6AErxzHNVyLFDBWdJJYAujxtVZwHkXZ1CCYensJ74dYJa5hMWFeUbpdPyrBzNDY7pHbDsoEEWz",
  "key31": "3C6Pg6H9y5JhbKzy8122j2rg2MbHKRg5gGUd5ngWNMuVv6dLtN8bw21UrkMyPRHqDWiUm3BeR2sLyk3vzBQzqNZv",
  "key32": "WDSmgRdPcovQrBWUpeEaYrezQsKFvZhWzJ3Jvf1bj9EDr6dFMWnuZGFCZNKJhpyRkD3LjREfHfYWf6GmyU26TXa",
  "key33": "wZtELLzapDUBhkJ2HWS2Q9WV5eSbQJjiUYREnqEyrZWLVtSzThFsqX7vntCWJtvKMnKbiqkbfF4gDKsHH9Q3zns",
  "key34": "3DxkVGeHSAkYEaDg6rW5RVGLc7zYwFWvZTNCh5ExYRkMSaTktqsEzSBUmLYBeFkrhrt34PZ5aw2WLCCTjwEzGS2G",
  "key35": "4f2EkziKir44efbCwXzPb1BH4qHZUSyYTYpwD2TxDxMpLrhuvbrME6bkSBd2wXCkzv2ytNN4MmdaTynK4ZQwCAZw",
  "key36": "3EewtegQKvvz7CqzUtiWtFU7mmVWxDCAgBSw7fnXfHEVwZqcPYNRswxMHehpFxs5RwEncrk2Srfp6jGcXFnDNjfx",
  "key37": "2GRJotJdEHaFzekYyJd3SuX1oXVzVMJ5ZtYb9v4nriDUV6u3dRcWwiL3vj41dxoW64NyxCVVPLwRWhR8gkRPBe4y",
  "key38": "5qtMr19PWpDSG37WzdywydyP8MMrmzGDdLtMeReQ6t8y9ZKVxrmytETMAvVqHiXnc5R2L7VTnX7ZTUtiKBkHYy3x"
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
