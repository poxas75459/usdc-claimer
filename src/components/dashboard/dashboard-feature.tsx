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
    "XARw948dVaUsAL9CK8XUFnap3Q6mcqHJt8uYrhCdpY9hj7oz2HqBMn6tbiH12zfSjyMqjiXbt6P1PYc47Huadgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "opeoYF1psVD62ND76GMU6FZ1ixkRNhMHg3A7UjEd6NDgGbr9ezxEnL6WDKmLJaPgPvRL8kFC22bV8nXwhprSUCA",
  "key1": "5rHjz2PmCnKqofb5M8yKKZBuaC33aGrpujitkp4wGSRkKiPryagva4hMVwNe5Sq11CcP38Yg8eVw2r5etDZYLQam",
  "key2": "4dGhoXcGaPYfEHrE8VV2jrDpVjGJ1kmLQ4cgqMnaBqx63Zv7feQaggmaZaPcH16pUg467bEyEDqV5NLy2Fq2SnuS",
  "key3": "5NAspAYDPA1prkrsQTvKxZByit7zkTS8gqbHYMQJ6LXq326FyhGDXA1MdcRBp7PXXtbhV2kpW6AXyJrFrijwwBYc",
  "key4": "4r85goLh3GBn4iFYKKWfzCfnWrxhC68EsnBifHjZADeKfSP2bVy3zN39B8cCYb8Pn57Gq2zkoGgkxxaPFPGxjEMV",
  "key5": "3dE9BrBesKDDY41Zm6udUGaJy3VZQDKHSMBvimjtFzoWhCHkrbvrF9AxUPuEdSSySihNVY6VjgNPeezRGRRJ1EXK",
  "key6": "516PM5isE9ie3SiwdAbCNWqcQ75RMLDHXJBYrKjsunLK9HF7kY1g7essosBm1J9d6eFkva1JYxgRV2A2WhzwoTDK",
  "key7": "2fbAvtdBNL5uSPKTKN1KMCTwYfU6ZkpsRHL7i1URNVEi7LTD2xyHwbgUmBa1qUMViKvT7nrWDFKHE95Chc2sXCzy",
  "key8": "2fVXfHvXJ4nsvDR4aT8ADKwoMtci2LbPLcUMV2imVN3UQJGxUNupK9Lby6aBNPjjLCrK4WwNr1As9AYfNyBrr2G2",
  "key9": "B8zcGjjmafaGcQpqAPRqE6C75ef6biEnPo1rnTVwKN4KXe3MKzRuDUWhfV77RAEJkqPWYFAJRG5CbE5FiN9se2s",
  "key10": "2BeNbJBbRSLb6YF7w83hCRdDrXid9JgHZfwejFU6wUKsU9ZaWBWAeDoXNarGNU8cAxpDTj4uuuhcoBcmB1MXRvvm",
  "key11": "5XqHKynRKHETq5uue8v3EfhDEq2nGrwk1kDBVhdXAGHbjSGQhgWFTT2gHHFRuXfGWhfMtEZ6wSg35xoeCBWeHpD5",
  "key12": "4DPAuwxntRUXhxgLvLEmc9xhQ4LTawYxKXAiGg8WJWxDEeQLQiXKmC4HZUQkgB3nqGsT6zPiXvQivocfMvcTACXw",
  "key13": "GcGHUaBaya2uABL3JEtiKjcoKzfhWLfoRai3APJsrqFiALnE6x7bqBeBRKQrnnjFbSFsq6xdk6HZZkpuiTW9543",
  "key14": "3HaQivK9tegdZmsBVP6ZPaY5iHGfTpeVvmBCLHr41WDRSgpU6pZBEz1GbVyDdaSkjCWZBM3XjVXsibQyo14q5xaN",
  "key15": "JSopSHbZigTKZ8kzJMw3cYYhVk7pv7Wq2nVFc12yoLj6UqSpaJAu8tHHxbYtb5QUhSNdDho1U8cm5rHehTy1FZg",
  "key16": "4Js7xC6MMpnH5huciGZ5gHqsdnbWkSxWWm8FnBdVLPhDsfsHAKyQbM6FkKi4CxRFDwyUrEKxAyxj1mgjviWrpZpD",
  "key17": "2yZPuJPVKUqEuNuczoqfKZ7y8PCTJNJxy4t2ueKDwdkEonpJqJ7ak7rWrmAHvNnStMZfMuy7R5YY9jga84vfabE3",
  "key18": "4FAaUhN5tHPyTwFfWFttBhtqyp2Te6nggHUymeNEoNTZTTjfz6PVn64SEvxU2iwJfpJEnxuyNQH3KPeG2CfiU31N",
  "key19": "2dYhHxHrnYoW3pUx5QkeYCzy2XpBMzeSKL7zEvSLC4QVTTpZwDQBot91gAVVtb9dZ8ZaPr94hUfd9xMUxwXSvDyH",
  "key20": "5ZfVu6JULHPS1ZhTQhyvaooHEtdgHp4r7tLY4ynxT83rtvQnHonD6V9BVrF2aZ5TcY6PrvhmryFd2S3rWUfJ4T8R",
  "key21": "r7jNeiSMuKPG71z2hD6t8SvNBeEWf1K1cWSAJQZUkxKVovigHFGAe5po5DRiDoAs9K8mnfxXP9AXzkgSVpKiPCp",
  "key22": "NBBZnJHL2Kq2neXVkwCMyWUDXUaa1adkzLaeqpppxAN1tWy6gpAgTmDuuR6B7iEWJ1nhta8t2hfwXUqKAL85aEU",
  "key23": "4Hq2iaUokAZUNo955UtC34QToKASxWt5reLa1zqsZKnt4wuYrEM2GGjANvBb1b6J1uSViGqx9iRhmhnYNAMuZXmZ",
  "key24": "4ADKFNczszx1u8S9yoHvecNaV6ztJo7b44aVV6dEKvwWDavEHQUjWzkfzxWPwpMScojATQfJiy97H8ccFvfAtvez",
  "key25": "rS3gJccB4qyMTUnwpsatp2b5NjHP2iZTZhstcjobUxusLj1Yr7xJ4rwnQhM1f3rra2kPBptnCMPK33spFripHRE",
  "key26": "2TYNFYUUbyQjDv8nGPNg1Sa4SQpdCqyPVGfkvtx5DeDE8LW4AFA5WTmH94T2k1WNhBoeiZx9eKo8z2JGwe2isdZ9",
  "key27": "4E8WLd6GN6peuYvdS6QYdUbFPLkXRi7Lft5gVHmBsMXH2asDCz1oAVbkkJpCDHTqq2wQJdQkSZM75T4HgHaWxwpS",
  "key28": "c9XNa7B9HKaZzfDMZrw3rrsGR9HR8QnuZ7tw98over7CNSEuyhNh9ydzQbLd2war1mSJSXQ2zZ83KCpBibMxUFX",
  "key29": "2hfKgDdatqRyweJzs3M9Pi4KpWuci2FXWDAqxXqsazFAazBpaxMKTSsLSC5hDhW49bJfPp44Q9tgEeUJgMxA5oiV",
  "key30": "3GNUuKTyQe7pAjBGKCfVFzF7r25oHDrfCoGHvnpjSpziu8QQ3752iWnVHDGHAVf2rybEkWpRELTsUzWKYsz5upQT",
  "key31": "2yoYEU1WNqhX7FZhAydqXDJKvpQTozAV5EsdgRgVQdTWxDx7wDEgUzEdiag2MSHcBnjSFX41TxeJR25hQL775eS1",
  "key32": "24hWWWGCfaV2iSBmbBZUszmpZ3WVSFbj4HZDVUshUA5g7rpoGCXV5FyYxuYBQWTmEjLP9ViDT4Z4fx65VoSXMnhP",
  "key33": "3zsWDGavLjNgzXLpWeTLfdM8aEHT5mZWN7VBYjNstbovjcocts8n2VGhx69tuN4Fm55mqEaANEgkib8baTzkmH1x",
  "key34": "5W4k2D1QFweKaXhkWNrZyNb5BBKZVipyH2WqfAqjV5pH27oUQwkKDiR8jcTPUrzv8nd1rD6Bigcg94tQJNs1qpDx",
  "key35": "5v1FAzWm9Xz5Sxiy73jATSJai9Zto7cUNmXnKQn5j8BVyVfGvhRCeB9eHAkMtcPbqqjC3QSas5F3nyvAQpoa1d2Z",
  "key36": "5a2bj6vNwdNPCLCwckaKuLP1BJGTdQCushsizm2gqc6SC8kbp4RPS9gpNTyV1CHJ5EEuyvUf4VXmdQff2js7teA9",
  "key37": "2je4f8HJEPWymsxHWHPsmpn28yDBD4DLZQnvehaL2MCLyXoUmkHwdP2TVXDnpRqy5dieQ2WDp5dKvQtTQPAeQ1Ys",
  "key38": "4VYXX9LXK2xU9YNdkTVL7vETDcALQueB7M8RQHpfrnMdvb3emLVwnGFkS3ppon5DfuYRq9ocDUCtVNQu2e4ejBG3",
  "key39": "4pgDz6qofZkVnFDfat1HxfFYZdJUtUUUk39TVWEupfSSdW9MBVh7gi114Mb57PoQzP8zrs11tszkHAjfaSZdxQA",
  "key40": "4GVKkvggDmKcawkAQdU3FUnNV4EHRv6CVdCDoTzC98wLkWZf6rzqH6BhU7iAymgaocDnbMJWjViKiZwhRtTjPiXA",
  "key41": "2Gy8MeBVjj3Za1egU3wuWc3poRt1bb3yCL8WCrGqnFbVwXqFPPgkYEpeFbVGQk4F8AVJ5MK7ge6wrwg9SKjRJaMN",
  "key42": "gBacz9hdi38KKB95ezuEW2C6fHYdbA5YPL3zf6q6kSRu7bz4Mn43VCT3bdyhaR3X8BnnnrqBTAakRy6yVehFcWb",
  "key43": "374fsCLy7r7URZhLi87iKcNfNJKa3VJLbvkc5ZZyvAyKZqpED1yG2cMgYY6j9Kod6mbqeH11Dc7UUCp8jPBKXecQ"
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
