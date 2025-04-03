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
    "37M93W7ZwzoSCgEVm1s2pbMPWm9H52dFqmoXmzff1nVSxwPxtMAhSAbtFzowcx9FizAYDzMfvLtVKSeVYVPekJcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MPEoRqtGwBCRdKYc41Ld5iSe11ysHLLmLvYtKRXovV4ysuG8dSmkANSUF2tiDYWQiQJdtqDB2LRJ67ZDjdP2GQL",
  "key1": "2eM4YjRnrqDrAf5nQmux3zTuvXbvPcG1wERFyLTdcfqctnspRPe11excvujRqnWe2BKEjBSB8qzvjT8B8ZJ7nxhi",
  "key2": "4e4Zj8HUTK1GYt88gZTKmwYUiPqAhbaDyiDpKdr6b6GgtDaumi8tAtSxnoVAXtdJCyowufrtYaXD9xrzepKwCRqy",
  "key3": "4bqCwCCyWY1xD8q254FzFDuifhmj4UL3Y3J7fhbJvuKDTbQ9S8Crs5gJx6i6pfJKuo4a5cYb3ZS9zE4VE3Wac5Zb",
  "key4": "pMTxjX58S61sE1TEgfEwx9U893K4TgQCKTksFddYWeSjMqKdaxCMRqh2MYi6w4N5KCK1ogTdG4ZGzYTaiqNHubt",
  "key5": "5tJhjYjhu5dcyEipTxBwMWDFyMBebYdGTKN3dQtsYquACRMcJS4K3APmUVgPjYWYLstbKnju7Zm5Gr2LHq4bpnFg",
  "key6": "5vc4Y62biJ2cJ9YcJqpd6SEKX5Jy57Xd86ngKnZxXbSiY17aMASBuqj6e9iQ5QQyoByCDW55GQ5CbjbLYHWWDkyC",
  "key7": "38XVx9YPxW2mM3wyWThBUsxJjaA3HNjkFo8BApjhgCQSQTRrWffhu6XdXtrZkPHzahjk9p65qVaMo3CczjADGaWt",
  "key8": "55acv8sZkX5kd6UcxujEZa9ebR6w2YPx5GUpiSLwgXPLF8wUVXjKscymtfeLvuZk6mkyTStdbVGtV4g6hRNfC6dx",
  "key9": "d12oNPuoS2VML5tX6fEeXLgFawCWRLReRCEfKns2Cn5aho6q8SMMzbyANWKqEAS8zRC7nDdgfdboJtU14pEE8Xq",
  "key10": "4VqPo8Zs91TaKNkhLBG94GCPaSPTGaK17gXb689SaeznQSDGgkzBqVtn2rihdrgjsTCvWgV4KxAJrBQ6xyfqiM68",
  "key11": "pBHYETZz4qfNeUQhsWYFxaUJyXxgLpL3xbJiWYQgvnSiikQGoHyf7Mhhh9z9Dcs3uLtCykMPt7zrNqjZHnSKGuQ",
  "key12": "5r6Z9Z5EJgfigDwQQuntKS8KHs5geu98dEhNqhf85Xjk8BAWD3hhhwvunzGiJquhso4SZhZVqV2jTDtQmRgFnNRF",
  "key13": "3tg1wtbLL6wvBbaieHwKbXTAHW1oDVfNphnZVwV1vP1TYS7Rhh6yZ8eBeYTbodPfxB5oavZKPGvF6iQEGijmzwMZ",
  "key14": "fnhGZqjn929jfVpH5jpQPC519n5anRWzX6Q3YG9oFStotFGXBtdNSixYkhmnbSbcUJBn2btMLdt8zaUgmn82Saa",
  "key15": "3wbkQdKtdm1Fg9TJQH2reFesXt9HEATop3nv9rNKudzCSoqh7pQjWBNhEeYDCuR7C3YJicNqGwuvmmBGMbPMjXqW",
  "key16": "3Mvn5QX8sBZvMyEyTzMecN79ZFjBkV12TeC7jFdB2eVJrg2MamWgFPd5pm1wvRG8SYDEh3o7YdkN5BWYsRHnMNf2",
  "key17": "4yVxgXN4bAzJm9U74hgJkmSZTARufmjT11ViEpoCpMvaz5Gz6mb4FjqvmiTfsbEa84VGgwENn3RoVFf22GgdoAbJ",
  "key18": "2fAcPdvvEKiAnjcdzYkqWLtsjtX3CJqETed3R7YkWRDXGkqzDXq3PFPz7Gbhams1Nfpcq8cCfLqcKGr71mMCBMNv",
  "key19": "5Lu3Mk6aj1Gdm9qMD1HQXrrcfixejDMzQ85K2A2KufRj69UjMLyJcdC7Bb2b2X8zKZQdhUKyEFU7Mp8snzweMjb8",
  "key20": "45bAeNxbLmSMTBpduXEfeEWn6nLMqcMy4FPP8J5znSjy8VkEmu32Z5wcPpqASGVwjyoPmZrdmDULV2t9CxW5KnHe",
  "key21": "5BXu4A4mhCzHw6rBhQQj8mWm6ryp9waheAaFFBE5yhutxWHhK8hNHGGHFSU1h7uMDAYM4jesv95uXsYwSEgvstdn",
  "key22": "DmLucApGw3C5sDEauo7M2FcXSqSZ8WfwUmtmTJUrvNPxGfoui7oNhFNvTZJHNRArMzuVGVaaa3dqthnFypdZDfb",
  "key23": "2BLUuJZZegPpiWkSiqHnQZEu5dVMb89y86g2RQ9vRh3fV77tkgR8ptMtqvfS3LhBV2YUBrALb4UECs7evLkfxEkC",
  "key24": "5pCVpZmxeuumTHQhpScAnwkeWbYiMk4CGQW3b9BScxofqxuKGdyE9d2bKsdh1UNutwsw5TkYQD4g1kMWyU6J5xZx",
  "key25": "2a93A1v84TTRByTG5jQHxBKsXatg46YevyS6jVKNBqsP7gT3x19kgy4Hj2enCiEhD8goiBkBWJq4nQS5KNxv18G3",
  "key26": "21ui99xez1bU27KnjZWpDoUfpHXJdpLeWdTgg6okwUwZzkg1PX9S5KoJJMcY2KfuGgPYdgfX4rX48JaAzgKyK8gP",
  "key27": "GPy7F1J8FQVPR7JfBpN7dTggb5Ps9kcJQrktBNwwCTeBjsh8LTujYQukjXHVjcZggydxhMEMpUKS7kGAMVhzy95",
  "key28": "4WfJ5TKHqdkjDsmVAbLtTaWzR5TQiydyNkM7QYnKYRVzWJUYtmTM7vKUmT11299oawGHzLa2TEyZN2GAchdAwnr9",
  "key29": "4tAFpZWhwCJbtUAqJ98k6gam6QUAKQkVosTS9K48onA53ab7u1EZ5VHa6veBeQ92XxSyotzd2coqeUGNksargQ5s",
  "key30": "iXSzsLuU3a8BtrZDusbFLnpMELz4W98CcaUybJniVnAzg5a38QcHe4D6m2LKBzXtihBGH3SY3zLYXjP7LrvntAR",
  "key31": "4i71Xm9fruEZNbiqJC8HqKE7CGWoQP2pB9WiKoospa1yNhXduqpw1kuWJQGavg3xPuajK2uNqvMLkLJwqvoHgMoQ",
  "key32": "MBGnpZs2rdJCfyvj2NdBop5dRhX5BME4mEc4yKC6TEk7SHe6j8C7JAj2TyT6NX6NnvgKKkktj758Qy5UyQ1dDLf"
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
