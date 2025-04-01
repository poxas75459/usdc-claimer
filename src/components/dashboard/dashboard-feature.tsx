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
    "TSd2MVSJ258s2ZeEBLs236h5vNZAxWZvcJXT7wNYyyujLYMdkSM28pRDFEDbXD59s2kHNhhmodomBLpnn2TzzHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1kDucZkBhLvsXZ2Xgg3teinDE98QeUB9wdnKVkat3LUhy2oDkmR6L7ymPW2ZFRfNpe67XNdrRmCmPq1JWu7TpJb",
  "key1": "3KhuzhKo3rLnaRxxTvmasXMBmB1CBFnNZJMN7aStnPJSBtoyhJugYtghJtQkG2Y47Zdg5Geyb3ak95VHPGigcYx8",
  "key2": "Y67uzbEPz22wyc5xbmGbDEHoMDFQ3vxnGryxC3boeyvFTyU6xxZF84RovTGhUJZFhKxbsAKyo7FUk6jSrm1A19F",
  "key3": "3XdG3PMzja7BozzDxkFyS2kCXg8TC3Mw9Zm9DyGjx1Ryb1DPTQqAVAsTdWZD3ByERHfNapS75xppTZyGdoWh24TT",
  "key4": "481btw3JPcLy7ADTrcCSBt7LsHkxLgbUnqBorYPF5N4Ey1CqH8RceQQ2VcQHXuVG2wwt55627jjsTYU2mq4XLmWM",
  "key5": "3DH7dx4TxDCWLXZsqGYJom2e4zXE9X6AXcuFUiWuGhSXnzNrypLgV4Kvf1Pcg6yNjeopo95FrJWREH8wtxr1MKkv",
  "key6": "TGmedbxyX7fAY3nMxo5DkTuokHzBrdH216H7kFANdkYM5disQMJcNADUzmXUmRww8opwZ7xxSgHfuMEGwfxAfM4",
  "key7": "3qtmyMKxqJWSkCgLTXLx4GLvDbuToVKjVyrp9f7jmZ4XNWU2RWvTbVjmfwptQnEkpxh4HUpSpN8J6uLdHQdr7JEH",
  "key8": "39duwdXg5LJVFiSMvafU6xpN8jtjgxbXA1Z2vdjyACqVVvmUjFK1CUy76sJDZ4i2tWo2yjmvEwSM96jSUSmL28Yu",
  "key9": "4ZFnEvsHhMxDZq81FnZK8bXUzE3KK65nFGuVnyQorHfjUJdeECHf4CR3oduDNDp2uGPANHQCjKtT1ETrLUHqm6Uh",
  "key10": "2zWBAzgbKzXT7QXYxnVGT9ck5Lf8ysZbbBTMYjgmAFs6n3Jwm8dhRsUmg4hJ5ZmrFaLWGNaYEFmp7DoHpPdMym4X",
  "key11": "WZ5E4EJ3ef8qTowQTVctp7GiVkMagZpgL9EXaE5Cgey7oSAK9Aq3c36psS63y48WfFSYqV3LNaz12V11BfkmyCW",
  "key12": "22aM4VNo7z6TN6dNQV2bsFxmNS5GEu9iS6ichmdMWxvVSPLZRJFPio8PhnqdTpwxnTFwuZVhRFpVtDQYcqcq4L7b",
  "key13": "3geoSrM8AZ8BVm6woPiqQ5A8vnKfK3jeT3Fs2sPBLM72PEMTGeYWFjwmnD7qvyqFNAqce6qXVgJxUx5fqouUVQTf",
  "key14": "43cDj92i5qiACdFYy26MufNM6uw9M9koyeNNgwE1x3yku6GZ3fniuXes2nQZy1BVMFNYJeuZ8bXkEiHfBZcLGmAv",
  "key15": "cdSBjhohd1eMJnoaqFdv6FFn9NM1actWuvsx5BNjdsg5S8J32dSdYWEXKjprYyHvDp2swxs1GBERL8AbAdfmhmS",
  "key16": "Q4HWYYMBQZ3EgSMGDZCac9dsLUVXNVKEgYZkengNj519NXFvrhpuRBu1EUhKmvNTYdT6B26fbaajFYW9iVwaCYh",
  "key17": "4nvArdjbGqCjZrDvtKpXTwHpJRAXfYVxq3qTbxCxpsfZir7JPfycuGhmreEpzRpJTr2VC5nBz7kvuzvoxXtxKfsD",
  "key18": "2L9Pc9NBjmyFfScB3iCnnF1VShCUennwQXkvJfVTHVyTocCyX8ZRKc93kjppo2o27pn49ksMJa6eozcZDtaf2chN",
  "key19": "2rbhgFxq2D4W3P8FdfuoXotn628HHXo8fcHkdE6Mo5bUJMRei3d3fCBD8shtQWggc2mAeB8T9v4ZJfaanzZsWTZp",
  "key20": "2oTXEbgZu58HpXvKBU2b31QPHo7gKvCwYuQ1c3rXQBCjRTaw42nJytFwRARyBtRaUjeZvUBHJHA5yznJt2PX1eVB",
  "key21": "67iZHmA1QW2nZLWWceo5CoVV7KJc1TXNqxFLBQK9zmioEK1nDCWA9Ute1pbL6w9ZgcGrfx3np76uoAKEYP4pmnw6",
  "key22": "2arYxSeaKwxJd9sFNxWZJtTEjDoAvq1zXENASjKfa27cufv3ri5Kr4EzCnE9ZzRbwsUrw3R5giPFhWqEtvVwLEZd",
  "key23": "4Pnh8wW68fgVZgoK6wF6Km9Sd9wtGC4CwxYeRsAzYGTu19qxMoggB1tNtBUCw57gp23mrYQA5HMjoxcAbjVqwd1t",
  "key24": "dbmPH2kj17YNqSmviWqjencUwJxGTBsUxYpF58C8TaeZeHt7HHAw7vfJwGfDpfou1tP6NeV4BEgCXWN9LzsFhe6",
  "key25": "3hdYw2RBGxugNB91Gv5CSMhnjZVdUCg7PscZ1gLpHaCh6jCzEP7jUY7mJNnMfiupCErdjSSnsZpbut4mEFy1dqVy",
  "key26": "5jtJGcFyauJiKmcta9sjCAS98A72tKwFe7CtVChPoAdGx6j8DLXyznP6dEdo9xm2ozD3swdCYnB8niUiBAjLNv2",
  "key27": "GHruRjWdupmUP6kzkNJtNNFnKPjuEoDz7FLZD4LPEEEw1RWLWAUsPR2S47WYg6hasW4g5ZPCwJB1K94YxGkoQgK",
  "key28": "QoCGvwqZ3dzBxG4A7jrTgA6aarrvAVxUXM7Y8RUEzZaQNvJhMueGjKD145WZawbCiU1ZY4eFF7ZUtpJaZeUz9Yr"
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
