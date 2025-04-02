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
    "2gAj5WcjdRiAcCfWteTo8F7t58fnNUT5FKypobceYByDpRo3wfuhDjP8456qcwsYdaBwW7Fd9UgL1NXn8ehcEXRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mAvvvaU9twk3o6g3wUWiqYzWbpyhDuChgbNPi5Eafua6VbaCoK6uUL7VeN7jcYSbekKYoB9gbtew9gWPN2nbE1i",
  "key1": "5XjbwCJoF2T5JxiuBKKg1UP7hGqK1uY3h7MXVqpzLoD52dL7menffjUdfCihwYJdhshjZj6qB9FFi8x2ct8tEDzi",
  "key2": "3V2EdhFz2wH3T8jsUPtBUwVHQ2w6PCxvhqG1Rif3X3RwPCmJQ7kbi3Za5VUkzifUxUM5MSQ3vjNZYSqSFbpN2b1o",
  "key3": "5JhMeXyAJkPZTGpEGZRETc2Mi9tHnQt2FSubhszwqbPtjjiDATJ8pn9yYnGpASDF1s16JzrsfYFziKGmrkPhQjH3",
  "key4": "4FuHQHpRyuR4BCfonj4EiAG4SNhdj4CVqWw8GtEMGSoWGhB9ZKKXyTff6iCbmWP17SYKJiFgvt3xJ9GcSKmGVE6i",
  "key5": "5inc1f8gkmidHFmjE4XodXKZnGnX5bXjE7TiSY8JzJb3CWqWTDX8w12hzDfsx8trXFogiwZX1PTJBpe7jxSsuB5c",
  "key6": "51fEoWUGWVZeBK4QqJatQGSUPXKP2EiMxRtwMqdKmyNS4VJezhRx4hMFyVWcEj4vxYicr9ee5Z9L15qhaw962ztL",
  "key7": "kvu6YbW1EvfkZaQxr5gNFEiDXhmPGQbuYxGAxkt4FTNVtCE9kYQWCG36F8t7H4zjymbhqz5hwK7HwKwbHbYCZzT",
  "key8": "5xQkahdrqnwm6Ev8QfFUfSa6cTZJa8mYYg7kBXikqMnTBbZPs2dK2oEsrr4AdNeUVNnrU92kdTMGDzFYPA48pxQa",
  "key9": "2iP9gAhTwaLH8FduKekAiJNVvvj2at2KRAemGYoR2bnqFwQTTzD2pMVQsj2YabgdLcEiPjhLniDcVNr3i6NnE8xm",
  "key10": "LwtbbBoNxzxsZ7nwboqRwNQkmc2GiBVBQEcnZqVBxPgeuZkd6gtPAWXLfjDXJCnhx3XMpg8zgCK3XnmhEMz7Pug",
  "key11": "43f1HXc9MUmcW3BsDweTh58pKf7uWzHJszrKv6feaWcYZY7uLLzVZHdYhk5dxejacjLUGGqczznV3har6BdKZhXb",
  "key12": "2zD75hWizbTrF7KwEkGTfA8HEknuYbCK46mR4nL5FLf7qZhTXdY4LLsRwzCCPLRQ6K7cZUTEYC5yiY8fALLSdXeU",
  "key13": "V6xfAZtrMVhryX1CQRiy1pQGsVHEEopGf97B39yYMFhVYQjzge7j1rDVc12RJQXsbNaxCz1vfYiEhCxNMNC7eFq",
  "key14": "3ecw12yLq5werpjfXCVJBd5pPP53JFiwQqAbbkrY1hjkiMV69tLCgHWZLR9cx2nLD6icdrPtZm28KcQ4msBCyxE",
  "key15": "26EcqBfXJ213Zi5W1py3hzcyyyvMLSS17G3CdvtXMk8gasrJ8M7i319VDdtdkVrNTRhZE3yKeZ9SQ718JRGCnqCq",
  "key16": "4GfwMeraFRQBxzFrCk74ZrZNHvs3FN6LxjXFnx615cRCPKGZiSNHQSyfiuxAUKLddh3cgDVaFAq2k45afbewd2cm",
  "key17": "5UrZKrkyGmELTS4joX6uFD4WtC7viVcunGtADvZ233cEkotCnQMNQVcz1ovYB8wtUyLVggtxLCgcpqwqbCQPKRps",
  "key18": "3Uvwc3xsGpMaSVqd8tVm1tA5dDi8aVvfqiNof3TtD6NjeQ3rpaxQvTMXKzDQu7dE2dAiQU3vTQDn7LR4CKJeUtJR",
  "key19": "ocwvCvqQ5FiTai3wt6GsH36CkFXiTjm3pAv6Qpj6xYU8S4NHngsmzsubyyXaKYqyqYhPD7h1dotbTgaj4E2ZphV",
  "key20": "41axwbRMq4ZzDiQFm1N1xP13YhRaJQBSgZXzgXsciuhty9UTfUaw49GjMSJuuxAaswi7K5SoT3X5ETX4roeAHmxC",
  "key21": "sE3KkyeKs7VFwaHZeaGq6Xf8vMsrUNnkQyo3ZPPBdKDjBxy2bfnNTyBbnWTVCr5eJZDRnBBQuFGXqDBNguaVig9",
  "key22": "5BeJVENRaMbMwZN5LP6G8ZZfp6ztQcaxyPnKuVNoVzqDRf1A8S2cNeVF8brqACRS4PWw9NtKfgBTZ2xmLGTdNsTX",
  "key23": "2kV8E9vSYef7AuvJhbssydM8JhqEFX9wusLvLo9jdA1vtfqzW25iAiuihwprZTWK3fXF94RzUFfDRF5pzTtgcfCP",
  "key24": "5vAkBmkuFHK49wVtNzJzw2g4iZTUdrK2wq861nc1KQzavoACkFTQsYDeFoWjbijpGmFJUj9dmhR7bY1tVZbjjZo1",
  "key25": "4idohsJcTFk42fwPrhj2HXgAcjvTLX8qJ4sAUTV6ZpaUkdpsxFEUfPYEc6qdA7U3MeC3HhX7SBiFG5CfNW8TYrZg",
  "key26": "5j3wPWNotdLMXiqE26wNZfVKA44nuFimSDHPbqcUoYi5vnXvo6GfBvgEeUkukPNMam8KLDqNw8PR9QhKH85Nc1yG",
  "key27": "4PYTHpiva9ngXuMrrfw3RcXrkAeebydXidWdK1HbMA1GSWrqfF9UnLifSg17hGrwZMTH2JwsqqJkJAjAN3Xzp43S",
  "key28": "4AjyvoLhr2EHSxzemxe416yGxJy7Tb5SsPhtAsJyuoGdzo8FMKDdHJqLJi4rukb2GdfAjiJDiTB2uN2rutVZDPiz",
  "key29": "52RihABTp2Yz1oscMoZ3qPxgoTU42TLJwa3WDeHfFtGjh4EahSjHbaDrJubhYZ5Em7cMUoxqsmmNUmzqiXMQ9GKd",
  "key30": "f2VEZgG8ApwPnomBZMMB69V1qu1eyN4v19B4ZgTcZFqb3uvt4aNDcSkJFgH1n3JRLh92KCiCDioYwBzZ7gkZg3z",
  "key31": "2GzVwtybkrdAqTq43veCYKtuJWntk2VoPwVcjzcDcPsNQMBVaRY1JC2vg1XJeSpQFVyPSVpBZngm6mGGw9dowAah",
  "key32": "2Q64Z4CmQQYYZNP5wfabSJHZUuBsdVXKMaJDJ8feg8wqwC541VnTE8q2XSMnLF8K6XcpnutFBCSovixefN64Rqp1",
  "key33": "2Fh3QxixVg8bMbGyeFvtZ4Vz3eYAiqGAXVBGQJ188ZwPsx9aVpVCiEGKed48Hig6aqdHQKM89pWg12CjcAXBwNMW",
  "key34": "61dZFGb2mBTdraYpo7hh1KMG1f2bs5rMzyi5LtUTx96eArnkg8pMACv7bPJkX22nE4HGHLfxboeQQLecFpwM5MRA",
  "key35": "47foSPWVZEq5ZSDnvnNT6JJxQMqrGW5WqbE1LNeqXyeoneGc2AeA3c8jSX6kGdjPYrHqcADnW3ZdKvLkmnPKdYBj",
  "key36": "3eq3UWv2fUsw4q42gcojrxiuqptVtSwsdDAxvWfWryemWxWfX2VQQ5Zfx9d41Fq2WrfJHcC53NYbqKiQ8pd8PSqP",
  "key37": "nNn3hGxhLqPEwjsZwUyREYtdTLf6uxXXhYrnpAZX2PUhJEW7NQnGJCvoH8V74W2Zjc8nXHASvDYYTNaksY64QUE",
  "key38": "47SMfiC8gnZoZR4RsSTbvoKQKCTg4SvxZ3wBc2HpAcrZL8j1rDEEYFppjkUKRWW6Ux23PipEh5qFc2YFdeJXJGK3"
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
