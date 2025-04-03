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
    "4f25H2VcDzQKZPr6PZS9kooxZhHAKWsaoGEGUJZkBcNytENze3fRZbnCBwpasNioc9fgWeA1zdbdiR3BFpwhkeEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tp6ENvN7ZkNGRsA8SD7RYdWH51B1hiT2HVH4L3t1VDVXphQHbYcNap2EbBCvykaP9bDHMhn4ZgquAeiAE52HJyc",
  "key1": "3GqCjNG6n5w3JpLQqj9HwwY2C9MLDpda8vz46MzREiVqv36hbwuW9wfeau6Si5kfHES1anjx3uSUQL7AZUEgdPTW",
  "key2": "5P8z79fBANEJAYTUnincE3DtNbw3zHtjGmTLjEUXWxpJB5yo41gXXnmUwDNRqd2DvhaKKqgCVrGFGGvev5RDR5JV",
  "key3": "5uztAGefcnSm67VcvghcTCTWByo5Fz8ScykvATCYDcjdK9mAg5VARgTc11k8r2hCsiRUdzcTqDv1AkpDwAEofdEW",
  "key4": "5N5kMaNJ3LWer5w6p6hht4PJucMLsGo4KRc5oAomyZWu1yZF2CbAfHzxFFjMrQqpBTPKjTouaZET9KZ8uyL8aDf2",
  "key5": "2jjurRYeK2kR95wBdsPuSqnCPZPCrTx4rhY2sMfG5pp4wXoxPcknKLyGRPBErE2Zj2rX7Dehxf8xiE3m8pdaNSca",
  "key6": "2CrVh3QzeBmWN3WpDEQ69TUHgjgajMsPJiUe8P9FepZtj3GswDq7WC6HcHfEe3Vf531nuRDZ1DXVSaH8hVHvDdq3",
  "key7": "5bwBtaE7ULsrf1eGwpUhHVdqZKN5w7xzyP5CiCJACaBCnCxdNrxQHMk7Q2rAokcJba6V1NVrvFYyXYg6A3LXATYn",
  "key8": "159QuJ6wthNA4aVVbxLmm3Jwk6cVKGjiEK8zJWJQTDNj3JfAeFQ1XaCgp3DA7p7UiXVqzJg5PzoUPCmTzTYBLUm",
  "key9": "2U8mxBNFWirHN3d8uzv1dB4BE3jD5usXm6RrJfqT66WCFCrCMAiGyGBSRg4xGeq4qnobeCMMopmin5X1dYx45HHx",
  "key10": "3gCv5ou3mj5H8MTMUu8udUj98eGWcQR6NP6ksiXodfVyuASZwamEjFXQQskN5kUZr1kdAyskgAC83LrFJtH7TgcA",
  "key11": "3kGdXvj44LA6nhi7vDpCxRZsGT6ZmshvzAm7Sw1F8PtjMkYksckghHHVziLNqVqFrdnmGegg731qiYsaih9MfW2s",
  "key12": "aX7q2AUQVM55uxh6HhWgskC9jtWYZMq38o7LGpaTV6v29a9DQ1t6vncHLfoWQH6y8pP59rbH7EcSbzK2mTd8vBo",
  "key13": "1pHz8G9xW6DDTDEkSpQrYifzCUJWUR54cvDqBhCwFMuK1FBzGooLu1Fx3LSJQCpVDVCiZxG9aDmrobUHU126oXg",
  "key14": "2BMruSdJP9KoJ7H3P84dNesADiVWr26nNJ4AzPUFAZwsA9UqmVFXGt7PoU8cYF7Pvx9JAd9VD527jexvc8beGrqV",
  "key15": "MAYaLQfDAbWpJ7ZQAhRfXq2CsCzAEdVkXepLYYgyJdBntpo4gqRR15PUue6U65kR6mp4KBqQsFDMzozjUhvzUWH",
  "key16": "kUPt9pX3hxwey2T3mQvhYzvcP9pg2wkWQefaNcHMAHzGBPy3RGXmy9NUtRfzjHVHKNYNMv4PpbhDVjNDjwKKi8e",
  "key17": "cQDYuAHjeJsbPMHMXKeqBJ1RMszSEkHB47eaMdsV1KUiMizrfijGhWfbeud1LvfZ4ARCGCeRvzcZE9FPezsSEzU",
  "key18": "FCqRgzfqwQpgqhqKdDvQsue3DTivcHi3KFBNFiydGxSXwjZnFTF7hzjjgCQzwkmpHpovEWn3aUD81mnxLbFq6Uy",
  "key19": "5Ekkes8Nfh3yFprWpEWdW8zf8R7c3rLUv2g1HD2pWXtgCG18KM4jbryCgm2cTqDejDh6me8YrTT1mh2MW6fdrJMF",
  "key20": "4FTaPVhDayttmaGNBfQPbDaiRqfHUuACZUvPCw9xGDhBpymQgPNobV2V89HBjY1W3NT8BxcT6HZbZs3UxjDesFa6",
  "key21": "43tufydrnXvqeV27btYnPjv2ANKsMKmDMMXUeANYJEmpAF4zJoAdCXybu9bZKbPK6xE99Y7GdE1sZiGbWBTuhroM",
  "key22": "5cC7CLPBrXkiTKNGNmVTjABB4CqmasDgfLnr2XvEHPGqQScyAT9TThuU5csiLHPZp94ijiz7HTuNnBfGErTe5XYu",
  "key23": "5pxzHCFviX4bKh8hHBWVo4Jo5wZkT9ULD5q2gQSgfCE4NZhprFCWxH9YgxD6LsUVmbkGNZLuEjEithUtCYKrmSdw",
  "key24": "LRqsnJfUMaWH2z673dUA6JgRVHBnWLTLLdAdd5FnTEgjHQfayh1cULewcgdVzACZmZrWtnLaqcqL5BYLfa1eXuq",
  "key25": "34E8pZFgj2B7N2AuKxKJKj4NhAbJnWb4ZKk8HHzBwqGr5g3tHezmxYABoXFgvx2BEpQE13ZfgtqBQ3wUirLHo2HF",
  "key26": "5gicjtmMGRA1VnPPZmdoEoN2QBnfJgVQ3n9rx5KymrUHWoF8mjoVCqtu8YPsQSHP1PqpHWWevWG6JYnCkqcXN81E",
  "key27": "49ZrvkJHw8nFbnCKCDzrScbPA2gc4poTdAr5E23UT6hBYR9unw6a2NzcBhmT4ssYUzWRuhY5v9aGVGcF3Q9fcMFk",
  "key28": "2VouNfmWLKiV5XL5ZkL6ZTigmjvUgJ3HHi37yf2gLqGiZN8owvZikwLUJvWCTS8CWjuRaR6pKmdxGJ6ABuwx3jCY",
  "key29": "4CvDjFbR7GeWuYUQYdPuVTodjB4oqu2RHpHZJaY5ow7T9GmQRwS4gbURewpCFEqNPdUNTCzRtLQ7zaMd4dBXhQKA",
  "key30": "5S2cVTT9LdvxQ5uMv3d1D3385F4onyD54T9HEzQw88hqGSkvMuoZKu15ByATq5Wti3naKCQ4bnLXvjLhozKCZW7R",
  "key31": "5yykeEa2HRawSwQhZQPCVnAhfz1b4QrKJyAxbAfWLX3mN9EgaB2YXvXfJa4XkV494vjohLZ5SEUH77LKyf6fBxRa",
  "key32": "5TYA9yvb3pPCc6K6ZAsRnxPtNz54ApFc7hXhqMHzSfzt8nNV7YFb7Ctr6iXvZyS8GudN6XC6SMdJuMhfMmz81waL",
  "key33": "5LSeBAAMKBteUe3fNzDCSKZoWnYjASzDJCptVmwqjHj1TJjPaAfUtrNo7zGwjb3QsVbtxMgYps17XFVtYN3txVvU",
  "key34": "4x5EjMwqu9HF4PbvHXbHwLetT9tvj9mVRcrb4o6sgW95c3YnwPZwu3qyYiJcegQPEUjxurQCeDPAjDrRW21eSgQH",
  "key35": "5QJP7tj9oAe1juyQZEx86PnAm6SNjLkXQgqvQtQFFtUmrUR88Zhhdp6aoh8ZM9tmRJdWvjmpdizG9nGp5PwJSTKW",
  "key36": "F2W78CDQoWMjJhFfA9bHdbz5jY5surVC1QJ5NSJ8EZepHXBrg6Daj4yuUuCHUAV9qSMfsoszRv6HYJrVf77oTQN",
  "key37": "4UUGejosb8ABtmwBTee5Rr2tS9ftsbo3RUBi8At28uzTmEtbu3hoJJJ79jhqQZ47bB6RUwFk2SxDS5ZxjMftXB5r",
  "key38": "4jQhBTQKbTbsvQLhwZ3Kj1DVN7VKUQuLyW4ZdVb1mr6z9pSXdwhpm1NvzBNEu3Ve7rXNSyWc3bFZogxfynkHsRFx",
  "key39": "5aHbA8ciKYcSkb5b1KLQmXfTAVbnWaHkbzw56Dj2zDZ66qMCF8n6ewfvDwPF1BZeXP7Cir8ySJu2aXVoQBcb8NMX",
  "key40": "25EeBfGgj9jkQgasdD8cziAwUSYYZj2Kkqqh9bVbJLRwLpMnkpXeJYvvnL6a57e4b1oQy2yx2dap966gYsEGrEsk",
  "key41": "3XXXV3Km5R8YM2RNKg7JDdHMBAqGfTTJjZsEkcESgyTKx5J5ogEkGh4rccxapMV4nEbcDntiMWkiKcNwpr6uBHhV",
  "key42": "2aDtw9L1uJquGb4MRBKWqpnkVU5V1jhzp2WFpJGWwQQXEK9yjterMhR9rCnCT4gfaZj5UEbAgyNLsM6BYG46SS7x",
  "key43": "2P9m163n321WvLxuQS1uZtsdMKjdxdpTorZkcyvkH9HBVaxeEkGHRYhYAL5v6vSd2jLtJz6KyprxqdzJEjqse8kp",
  "key44": "5qVLwh616APX7jF26ErYEXp8TxdXfDGbkfm1GtXMy1gYbwET48nokBHBQKtH2Dcgeg5y5hJN4yDWDMq9za8GW8jU",
  "key45": "W1Vay1tm1MqXZWUFL84taDUFszBNErvcFLtSdaTeDYpreAi9AAosCx5YbP94KivRnQywfxEw7GBVdQt2PZ9NSPC",
  "key46": "3rtUotEj9siaJM9Tx6t4w2jSKjo5R45nCVYRhvMuT7qPDNcLCeayzqGXTf1iZYNjirRbDF9NgRe6hH3zLquLgpbL",
  "key47": "5X7Zvfgix5FS46wmffNexkKSqT58jPzudEmmGaSznUqwmQ74YbeXU26WNU8peauSnZ8MctwMv7eMkyHMhgJqa9WS",
  "key48": "N74BnpqXfpB7wPWvt9vY6tvZxWYCJjAzn4vG2ZitQjhe3bBJjkuCFvzwPAf8ffCP4hzrfGTQ7WFH5SE6vV6p3na",
  "key49": "5KutTevPNcmixhk8wqiiNFchJaHWNs5MpHF5sLdo6vgYp7JBk1EZMGvaytAbBDm25nSoHhkAxwpAF6K7HDFNryxQ"
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
