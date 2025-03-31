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
    "4522mf69aBS1NGHkCTN5D2xnT5c1pADqdrrFVQmxq3brFHrZ9hrPCoBtKWfRFZqoU9oH6MuoDXVWtMyrx25YhWBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BbbHY6Sy3G1uvQx85jdnipqLh1Z9hvPyUarqHegdsxCJyhBAhKRryTvD9VoBmrCfV9ir1dpLthB38aGpXcHSTma",
  "key1": "5tRobFE67nyPjYtdTdiPUzgsjsq1wyDpfRRiLKmA5SBMM5cN72Xi3Rkk7vQpGU1U9jHMEgorPMmoe6haWyRezVPv",
  "key2": "nNkKRF7PdMD2A4UGTMaKfqwcaYdX8KMkhk6Js8Exb73mL3HCzBMMiWrAjGXL1A5W3r845g9QcJ5vamVqRTabCJD",
  "key3": "8NwGxs8SZpYqhYuWjZ9pEAXGyQCJCiHH4Covf4CjXcph6LQiNxHNnSJy2e1tycZUUWkV5RcZymgRYuF1R2DjxBG",
  "key4": "e95V5XEaWQvswYtyCKes5pxumg9dTBvUFcKQfvYwcaC3H1SuMdrrhvH4pN6Tr7RGtKM6SeAyPNwYT48trjagQMJ",
  "key5": "2Xixgwfc21z7aMCiBRQUP1iyWjcr933Ziv3jHzfuLYcaWCQv4pWzTHxRfpyEkczpUYAz8FhiJcDerE2S9yn3srcS",
  "key6": "2ohU6NoNsoNp3Sy8ixwWzkUgrPxsrPvHTsgD1MEf5vZikA9xDEUTAaK2HSWKxJtgxGxA31MrnM2uLmNJ6YYzGkxY",
  "key7": "3ygugmWgCr1B4FckH344j26oF8JGjRwimgTDJ2vT3My4aR1V2R2a5vt7ATDtgB7CoorqFTZY8hutT5aU5QwYgE5a",
  "key8": "23pudUKs9QvwYczvJZA5xdKVHhTdXQ3dovPznxUTF51em4awBxHWgZZt5kFoJaJxR4bPrXQanf7Dj4RaYvQJ2xGg",
  "key9": "2TUFcKrT19hTL4s4nXBvtUYEkohqTMneByowBUggCnW7r6NHtnCnxNRCjusVwyprnnRmd2BacfSCPZpNeDAq9SgG",
  "key10": "45yg4fpf2A3q6PTccSVaPjTEVSmfNfgjFRncxpU5uQCshbw4fh5aSnfdv67cSFD7ZEvrVuq6qCBp8A221q4faJeU",
  "key11": "2UKJ3s2dYAouaVpaw5STobAUmMRZPfjvwNkcD3pJixyTMuhsn7vqRut8V9oD7pgGt7vX6aWCNN4ArX53cwsg2Qxr",
  "key12": "4XNGNiQyFfcmFZgMESFm7e7gxwEtobrY42fLSHgGHT16pdr3N9HtnYQt28huR5YfBoD7sHmcMxD8uGjvnvHRWm4p",
  "key13": "4VxpzA7Nc1NegghvpvnTA3bgRxxJzU9hVYtDr8hZSe1zK93L6ZmvqzD4UDtQojkoTjqiiPLtzQRYnudvN3tyxU1P",
  "key14": "oLC3cGWLwm3WWCUehqWvwMXe4TdfE6n4uQAa1Q2Zi9x6ge61Q17ZjMXbyrmfS3af7qgEd5uaA7xw8cSWUJNfhVS",
  "key15": "GTCXmeA7Fj33STXcc2w6o4RuQAFym3rhqzGooNcnR571MJxvEi8YHDFbgWeApjUV55HhYST8tQHNGf9xaJHAs7x",
  "key16": "4kiUaBVfH5ajwqfVNYdxVp5fDk2qhX8DESvL3kczYcm7tWkPkzDkq96UE9NgMoerFinj2VYJZepyJndZ8V3Gs35c",
  "key17": "5L8sTz9gvemLceRWeRmtNKaYhwAqkgy2unUnTy9apLbw6qX3ZyxFY52Z4nih4h5F4xVK3HEqCnSncqiWoDLehktB",
  "key18": "qk5nESpfRfRhCUGXQR6KMBdjPCsJxjiYBfgLjnmrSZEKN5RzEdtegG8qsnqZQg5XLHe1YBWVatyGKiWoyNjpyDv",
  "key19": "39BJ5ngwf99bfQsrEsiMLc3sWMcVtdG85vM5hUqbzshu5ms2v9MRJT7utEXfE1EuboqfzfMqck8oAJXf51acoGjJ",
  "key20": "4Q2C22DVwrc81S7k72EjfhTJ5kaerKpmBWiczEDHxojMMumChFAGPq8PK7oDzVWgB7GJwjiMRQKYNyGQ3gaydfdV",
  "key21": "3X3iKLbTKXtupd5VxAtix4LQxVBr1vzuXWe2tF9DnRpBn1G6E1jSZQimdizUyozbK5h1VFgph78a1avfubFWWSUc",
  "key22": "4gRGWb3HaZUqghmxqJveUkxTXodp2Jb8txS8bs46VnuY3T6b9AEGunYwf3R6ZkWWmNLMShBtcDDzw9i1FWqjAZhs",
  "key23": "4z6evLSzacREJEMPpZsPzo27tA7LS5LQMgZvsPCsxe4gK7k81rwcdwmoQBFH7uVvwn7wJEqVk9NGCCjkFbZRpo9F",
  "key24": "5f4GfVwK8YiP2AYSUBNokE4qJG2825stMZvDji97V21brrKBxiDHhSCGG8mRHdjPE7G4XHXqQNAchjuLLupuomtC",
  "key25": "qQ49wipL69EYn4KMfaN2nLBS79zcXWn8XokeEa1sfi4jzUk8GcmLHmQv7TXtifb5XFvGFBiQBiKx4KcMiP3JiRm",
  "key26": "4tVBzpim9hF39TtReZz2TxJ6Y2tCPMobUCdYrjotAzr5z812ypdBk5Kz2Tj4h4jWJr9Ekze4Vgz8pZxRdFTpsRVC",
  "key27": "gbgUdmgk53uZ1oigeFYYvaaW7vanYDYFhdf6evv7ojprKwuwj6tkSw7PJvHRcrvA4dsNVoyTnB3xtEDaUXe1Tws",
  "key28": "c88Ui1oQcinz64jFNWMZpYBGwrKrQ8RATX6mcsdKd2ahogjenVsaTLK2NydUXdc9jxht7fTRns5cK64NGreQ2Y2",
  "key29": "5KmiXXJVWLJjngooUmnqfT4j4YP8EFnevmFimZthfSHaA8WqYxg1E2b68cawVwxYr4EJQYaUq8PPeRGxuZi1nT3a",
  "key30": "3ZLsra67Jmm4ntiWPHzE57FAS1q4NSwj5rBzN9hZJdXwAmR4R1JRMjd3H9nyRdZjarC1fzwaC3iGHD2zMYPek1g6",
  "key31": "2aaeKXDHCx279k54jrxsMa4ByFxRWQ1xnM8HR6aHArjaQM1EE6s4r9reWpCk2Y2bUV4z2rNUmAcJTqbSwEemMqhF",
  "key32": "5cAsRhjGEPorCdLhT2nrfC3KnktVquYrm7AGGYJ9PEuXS3terRzCwsHP6mPvd2CY9QQbw7wCosWWAGwh21enwygR",
  "key33": "3BDYZa9EKvwo7b27tHSwnBhuaDQ1r61yaK7FuuD85dA6HfkWi2pSeUSs29QqDnsnPd7vfzGnhaCBh3Ti8D7Ezhd8",
  "key34": "PsadfNADZtNx9EA2h7Md2QvKLRgZQqQosnN5mGwy6itEnpMJCpmULvtqY5wDvYjFnPgscDiSS5tYkFdkyvgdZcP",
  "key35": "2yHaed3oUmf8MmNhpPRqHcKhKzvEbeMFt9mt4Zb9XXcqUbFE4h3qcHimPswfpenNZHRw12N5S9Xf2yV8KZs3aHC7",
  "key36": "3zFMvNEPWmGWcWfMvt9Y2SDdcWsejXRtQxgfciir75EGhhwWjDdrp8bevLXjg1cKsevmCu86AnMKwf4X8EvdZg1",
  "key37": "367kBqRphUnwVcrAZB7hLtvpbkLXBzFjYbqGd4Vte8U19BCSse35VW7FXvGz3cVwYijib884HVTZWuDcMqzx64Yb"
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
