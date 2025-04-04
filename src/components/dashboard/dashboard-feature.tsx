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
    "oYxnr92S3AJHZB3zNZR6reFSwZYyrZ9SstWz1gakDtXU9BoqHCC2Sjt89BJttTBmwnN72GZ29kj3QSxEA1mYA8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AJqM2njge8xnJ9Jxi9kCjJ6oft1UmTReXPCYWzrvbjyZgjZjTb3vfSp4d8nqq7J8qoNeFJdWAxEuRApBqCU2dqT",
  "key1": "3S6gr2oqdUSrW31cERnmq2X9xDNgveckrY7eNgFBWMnWqmmMzxdZewZrdp1KzDbBDDmVAMP7wDAJh3zJcHFMHqui",
  "key2": "3MsqxGHVFrw44Fs3b5ppjRBnT7TjTEBfedE6Uwr4rGtoxm97ii88XL2xV31tdH8sup4Se2srqJk9fVDD3MPk7Wg2",
  "key3": "5nfpHQ6mc7ALzADyhwSXPEjfmBoSyp6otM9qfqQuZtUFM5NPpp35yR2MFSW25yUV6amrGSxPe6rcPwmD4d14MvjB",
  "key4": "5zLHNZp6LdCke5UDijiRXj2mCgzhtwiPF3qfWcA78M7Jhdg8B1wFezitWhEA4HdJ1yPZrzjgQNKhNCPcwdEzA8ve",
  "key5": "3JG1Fjr3L2zMwWyZfE3S4np2LChcC1y5wbhU4g2zsJ1x1S4nHnP8MtJARsCT9CZUY4d8DpeyiyMSXVAdKQDfJ5VB",
  "key6": "3J7CvpeoWU54NfWVAbUvfrWb5rPgoXdtuxmg8iojd3fSHjSZMsypXyo6vLke1TJxJ3uHhRyQCfxT5Vbs4gp6yVpF",
  "key7": "5rEdgm5CBZ6WTseB3xKCqRZCHRsiod2u8KogkdFafY9uxKMKUTkJnfE5bxYfrQvMcRKayKDP8u4bD57uNuFFnb5U",
  "key8": "2MaFvGLj58cFcwBbJCCPDpPqhJwnndre7cByEzERYjzf8WkFmow79rUpkLJLDo4pUrvQKwhJRjGS3HsgvV74on5U",
  "key9": "64DfkHAjEB89j2LexivQ52B4tLrpBH58m9PXmaZbsL2tHvM6zS1Y49DBRCD5w1QCXqGp4yg1TDnSVocKs6XeAEXY",
  "key10": "3ctKzeW634ZFanEgKmuQKdgP27cKAN2tHnbgbabJtT6Nc6eXoFDaynrTF6mniQEHvbrZz6d89st9f1bFpphNX1RT",
  "key11": "7g879Pyhry8cH77UN9kiZXobpPwaTwZkVZPcKXoVwJsXdGWncAyiFoLzgrFMxhSy7KHmCaHRBxFodnoKDnfK9oT",
  "key12": "3exr5vJfGrdiAs3DngzzJya3kH3gWqoJNqDE7Ek1FSQW8EqiGBLvTt8kzAedoM9s42BTUoNxGdxi7NTApz9TneW9",
  "key13": "27VcteRw4kkYmvHrgH76pvjTS2ByhV3tFppvZ9W1a7rTmRrZhyg4wpVsqWs2zonok2syCunptqVu7ua9r4D7JzwN",
  "key14": "JXyshxV7AXVt29VHbZHVAppmj2HskjY7CBeeewrvxJJCvDuFJm1Fb1NQSJk4YydWwzYrhnxeZqs1dj6wV1XiKMt",
  "key15": "2ZnjSi98C1ND2pYGAHQ4thPbwyG45GQxdoBTtN5Vzb4qz258n4ZAVTbugMgbybPBnHtghSqD2T6VrgC6YyvM2ZQ1",
  "key16": "bgPSAeCZ6zFTMTXJGWTepkQFK48t47XiJ4Ba8YAtoptJ8yRpUNaA26eDowk2fGHy3Wdhmp4roh72tTnge2GXyiG",
  "key17": "5CkARgNUG91g6vktW3tgGQRLj8RjuJk1aE7PVkT7KAn5ZKkaYqJchXAPsXpj1VMiEmKf1gmaozLHMDiMKVVDZqiD",
  "key18": "3pQymgXsvZ565pNunZCZirbJ3Z5YLtDdXfAdZbykVZvuzZEZY551YptakAsiSFz3W1pAM8QspAAxAUQF4HxxT43p",
  "key19": "2qd4gEiMWd9RsCxuNmHEGqaDqiVxvs6ZjQBitvyMJ98vGedEE4fb7ZrkVKFboXYVecLzeFrAPSH6rMQ4VMzdBzWR",
  "key20": "YVSCRyLQvec4FbSgWf6PUraCuPVr1fwW9JgDmoz11UTnRAXNZQ8mgQd5NyoQG5aTBeZoM4Mrr7GgDU8CCXmEb21",
  "key21": "UFyGikDKoqoMBQYThUWdj6pw6AG9YPuA7bgitvdRRzqWRuD8GojzeVuREXEEHM6GNEmkLRkVUnavcMk4Bq2J8RU",
  "key22": "2GFbahv2L6MF8pCkMHAj3boBm6vf8Lpyyh7BbR6B81wdmQMqLNtMdBbpp5T8ivhxQdNMJGbKfsnRjtT2F6wYu9uW",
  "key23": "5LUaT7YNbhUuscm7RR1HpCkVhhkBzNk4t49SAeGamr3apvyrdXcNBBGk52PUvhDqkn8SVcZSCUSeCjitSZegGLkV",
  "key24": "3Dc3S7hfkq2hQJHY3pKvqj8mVxCM65CorjuXThMJdbNchUsjUTZGQrY5pkjZVyLNw7UBSGprSWhTnk3aVr5pYdX3",
  "key25": "44A5n8TGU4CBXNUWeGa2oBcpqgCgkHHqg2sxdKfhxV8LsVa9Ht4Rn78fZiQ7tSc7N7bpv8syT5kqaBskX9zkDu71",
  "key26": "61zGjWyXUoyVfUpoRDG9jJhixfqsZPhaeCSeDRhYCdVZir6V6whKUysAZjtyYem52wLaGHiM7VSAT6FSwtmPG9N7",
  "key27": "2cDg9eehy7Bnmoys4wMvsLTMYuxdZezWSrz7TYukvXbsuCQcJmBew6mw4ZSdrXwvpvoGYSZyCs5odQJmvfsU8Kcp",
  "key28": "3T97U7DFKCLydAVogsq8oGYhnQt8DThcBk5h7ck8S1LsNTBLKaNQD7q1ugrzdP9Xsc6b8PLZEdZUHJDur5oXKT7r",
  "key29": "uNvXZ2t4eRJbf6xxvLV6MiwwsNjnoxPYRFYqdSeLjfS4NznCsZP82nbnJaJHGKc1Rw5MDJfkvfrY8hXS6ZZYnHn",
  "key30": "2zqiT7vy1wkPgBEkLa3JZT18Nh7LS8RXi9p6REdBXTXpGqK7mRisFH3Mvt42o4oQ7mUeNhSyvEyroNWrGoGDLeny",
  "key31": "2ufz9mWVFWchR5aVaDik158jttCxJLdL1vJSCDyMd3thBUpyQjZRUtm7Hi7c34xWkxq7dNhrwSGLYWkpaEqz4pF9",
  "key32": "3YqHe86rdrQWa519jpDz2ZwayBaFSdrkLWR6h151CxCqQRageBtjoPtgRrnrMmLa4uUiw2Q1SieiWxXYSZaqSHJJ",
  "key33": "2cp89Yp7XfE88ZyA1q2SWs3xT9YEPUJHnH6eYPUGNndQKJhct3YRkAhkaS1LvKGSRvpjEF8GKPcfr5BMjazi5huc",
  "key34": "3fNbZe3qgXNXbFVRPoYDuNNym3DnX4VhPWqwiwxUPNGQsuoh9BxJM47fzHHJkZyjzZnEshK1VAMC2nA3YkpNm9S",
  "key35": "4xLtUKsWxtRGcWvaaQUCL8zMFFQU5X8WemfszaNszd9YBjm8MtJ7dMNz2UqDyix1d2UDyycS9Mdz5Z5xrwVqyEns",
  "key36": "9wZDSZYE4w3Liv4Ha1EyHtZwdHnjWCS55DRt9XJRab1EQQZoECCoWhiiGnpUMMKjSVL7B4qjb6PopC8fsgWFWXn",
  "key37": "57BxbgRQ4ejsyWubGue3dr2m41GCuotzbreWhsEegNo9f8yc64xjBiFpBUJDKwcsxePyExBVmBZLiPzsqgfkkSCH",
  "key38": "8m6CvdmAmCg9jrGyueMdFLfhJt4ASbPBDwHbYnsXTEQWjJ1uyjdjCpN9DFEzXCTVp6gPJyeRrqf6FZMCeC5enDe",
  "key39": "4utWB1jPNF7tULJVZHmTAoUk265RxHKja34NTv8TtQyVzZdXDF9QxgoMEJqbjjC4eYdvdYs3vuwNeXnRCWJ1Wjey",
  "key40": "Z7rnpEYwVRdMghdZRvFzHXwGUqm7Cq2TKTAGn48LjdFKdXPJSsovij837AqN3Ego8yFSVfopEKsDDPGeWZW2VmA",
  "key41": "4AcXGU6VT1wQNTkeGLuzN9Mvr8z72LVbYoELTZpZEq9ThcsxrwAMoBG38NNxt494YEwU4H2sBYkwwciLLzfy3tEi"
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
