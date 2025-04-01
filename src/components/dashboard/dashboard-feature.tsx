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
    "4wWR3aYELNBaAv1sKX748JGZ63TYb5xrQWaG9ZBuaQePAzoKtQqShrQHovj8Q8gjuCTEpcwfoacgXeAxGYfYD58h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zTgpvuyBrieEvQZj8mwvZzX7bBpNBmwvUsZ2pAazZHqXsb3VaP3Rat9yMCMipLV6YYhsLBAveLsBJwGmopzUuUg",
  "key1": "57RwmHwyR3TTjk5b2CFkvk8KKE3SceegQfHnSxqjm9bq4G3T28STmnbJaqdChKsrZ4a2zShTNurF4VzGanGz4MvF",
  "key2": "4tyamgoHeRghGBtk9cgNFwNFaox11zDvT138CUCJE11Bu2DQB9U3a9TggBDxr38pV2q8DJRFRejRZAq3BHqavG7J",
  "key3": "4aQGvQTMRHX2oADDoWwqC9MSeD78cFwKsDkzEjza2qrYj88i6HJmaaYPvAP6G5GtNhjnGJJnu18JF16x2t7iphWK",
  "key4": "5QuUwP9gLDzgdT2BUwLLFzYcxUqcqJdAHM9YBq7NCYYxgnHaZrSj3G4fJSwwchLoMaMe4Y7RzZZ3H43NupSfx3RR",
  "key5": "5HNYQQLe2KZtQLb3e85NXUSYhLm5ZUtUAuPnchAcBnMxvn4zXbirGLTtEEewjLxBdMfW64bdkYK46uDojtUnNkHU",
  "key6": "xMsfYJYQuUz7iyKiWYJWNYEzGcLh2Ky3oT6jBP3UpbL1nUJmSvYompa4LzbpNEHnjvjGxmZvCxAzDfpiX33NZzg",
  "key7": "hm5deoMqnv2EU2XGUYVFBKLz6J68MN6Yw8WoAdcBBrs18JyyZmGxhMYUcaEwBNKoakgCEFcaKFe6v9LJvbVMASL",
  "key8": "3JT3K9DAUUSHzWvrGaihqKgpCBux9vcERS8EuDpQKMiy2yndXPTYpG1xopJMWwjSSJz5Yc214BWg58wNgZN9HPLh",
  "key9": "4WUvDN7X1EkL1j7QU5tn3ruk73rLwkBhhdhpaHJHgg5xdoYyePgXD5m9b9k8gW4jShxdvXsEACRZE8Ka5AYRKfjd",
  "key10": "4VFk7kbBExyQHXTLk4UEexbWfNvAiQTKZb1en4d7JEB85pWynhaALF1EQvRadartWoms2zC3aaLTieuZFwQ7HMyv",
  "key11": "4DuTpw59koM8KRn4i8AAL1SmBhQ2Gm9UXmXjy8W4KJrU6F5yYKrLhkYet1jii6KD1Koik4Xxpd3drJNXAoCxaLAz",
  "key12": "4BTFWGxhUb2GGG9MK76PVC1UYPSxtYgHier7wZDLqdWCYn39hN93ewWUe9NWzndurYVX1KWJuheyExUzLatDfkr3",
  "key13": "2mXigFv7ndzdhoMKBgfPFmWBY8aDNL9q2AYDsqXGW4E8WxXf9KWbX5CWrkQcx4aVK8hTvJtXJ13oDaqUMHXX4Xqf",
  "key14": "5BxwqEkjgdtS6UYwtHJMBBKW3WaG1eDQcB1uNyW8zfgpJRiumZCGFSgvioRBMTm9y8ESaPLpPHDLpbnnJcAd3wbv",
  "key15": "5H2Ni3pG1TktJ2iTEuVo2gxYAvpPvNt21aykmtn84W2QMs61Sm8d8VojQWxbzHEC49D3RQx4g7JFNM19gVFB4gk4",
  "key16": "4qFWtKvoGZVJtCep4rFtWaBT91pg6w7YoFoFN6mtXhd1wuN6QNQgeVU84M923NmfA6nMUy2TTm7D6dwSQ8UAZAV6",
  "key17": "2UZxgiCwVU84M7iZkzhkeX2NHjBrU58eXBmzHV7kCm2XzBhEQs7pks5Zz3K75gnepKUmDsqqVV6Lr5kZcUJYqGGm",
  "key18": "4xqcDLa7N85UZXR9H1tVaFWEDi9Qx4sZtYG8PyV2YL1Q1kZrBirX6kvkQNqnGhFx5DdpiRzZfVfG5K8RBC4YAWvf",
  "key19": "5Ywo5NEzb2g5n6LSwJEN4ZitudGKAzob3GKAcs5qRYZKPCkKiQgaAMegTVv2eXK84iHYkecWuxevtVnLREAS9NJ5",
  "key20": "21MzsKQZqLW1hQ8iExy89LiSkt1TrRRLSDEDCEcu347PbZ55n6Hh2zhrriKkRvqn3wgjubAykQK4Kto92HTEG1pS",
  "key21": "5HkgoHazNfYJA73eJD7jbK9ktiVCumevnApGk4Ss3M22qDkph7B8nHuzWbcGwECZGWn2KbqiYLbkiS1xHd2ymjGB",
  "key22": "8wkutRbReSPvZrXGEgVnSGdhWiNih2JUVv6UMdfuVTNzwoFC8NSueJQWPJ2T9oKF5kgsesZRRLbKUQuncVsc9fD",
  "key23": "5PuURjgqHjueoMEJmXew5YD8EeJskqwHkHumcSSEhcfevWHWCZiSukFVLvfB8SNnb5sHu4hvi4DHYAbSRrdP7dF5",
  "key24": "3e2gudx3qSCrGEmEGSiCRCuGZXNLyGQSURtrpKWaZpFGwNBfuRcxnShbaNWmJupRSsLeHsACso7dbPAQ6rrfkmce",
  "key25": "3kGhnZiB8gxJDKEbwbPHasS65fCUvWbWvVNKguoL4j1oSdQ9att8ANCTtzfN4vyoYU73KpLeDxSX56trLVhiKkn1",
  "key26": "5HQe9qbcGQuwjaeCTdJECs2JtVqAUJZSiv4vvKSbBnkMf35U4FJGDscPe923mdHcZ7PBCUpwRmuzJBeJwS9ftdoX",
  "key27": "4zbwSmYVTh4jeiNEApWZnCA7Yb1prLHj5ecB1A1x8UvPZ8Xh9ApR4mndGbo5q1HYZrYGmWv58qeghQbD5CezK7zs",
  "key28": "2qZeeG5bKUFaPuRztL6oVUdpEKtH3bEnRSPooUjeeUmyfGSefR22rnMqRqBv4mn8heTVh3s34td7chEvnda9wukP",
  "key29": "2gGjyM7rSRzLBDLxqgZhCRmsWX87dYhTF6KrED7Ywmw24F62LmY9Jg3FdbuUJUJLtsdogNSbxKJHVfXiBn2pkKw6",
  "key30": "3coS1dh5pS1esVpQ1egP9YhfghS1UGCuoamqoK2yo3w2PMqr5TvttvhxtVKXMg6NxkbUmX6Ryvr3gAsBhuMSzdVW",
  "key31": "Z419Kg8A7SeXx4XaHTkvrhmWCD1fQ1WQH6YLsJpF9wKwVN4NjMGiKBXciHq2eG6zZV3wwA3LNQ2k8776aFTdBZS",
  "key32": "3SK1XTBxkrUVuVv76ytTwvY9Cuqr2PhZxkpm38Kq6m8sB6iX1SR8d8Nk29sjVP975RbRUSNDNJgQu6gKT6mttQAw",
  "key33": "4MsAEz9BN65kE1vat9yabenSFL8Sk1vRa38cyMvzF2TTN7vYuT352dpXABKUdQvEsCSjRdveqLCxjwrR4o8YeXx3",
  "key34": "3yiWbNawiCVbQav7JFyJSwTJNvsps6VW8m4u9bAmd4DYfPQroerzqjiMyNi3LJxMJKV8rpcwD7Ve6ryNzvmNbAJu",
  "key35": "3LGvDKAGND1NnQ2GSLydTgjNGxMP2haW7Yi5xy3ZwAsNLuY6U97C7JR7VWsAygrwmTU9XvKqqMro7bRt1mpCqvtt",
  "key36": "3mkUr2VZkKm5mb1Sb66qfsYdFWvy9wsGBSuxVoJyx5KMv4aibVLKj8s2peJcTienPChAXxLhdgSebQxCdAX5mmMm",
  "key37": "67p47j7yJ78PTHqLRS4zNtmgwNoizkK8LUPHXKRZbxm4oeXaaQSop3eT7cxY5rJ3z8rwvZWizxkCDJNGmRqDYvrV",
  "key38": "5qDuZ64PR5XwuQTA7W9NEnsQiuart7Z3zocHFwF5jx5iGz2V49mgXWPPpNmw7KsEpo1BPW8CCwcHciEFUBaWtYSS",
  "key39": "4XeYY16tswGazYquTsd3YUNzNi6nW7XfppPucvAFnVXTa41aHpjeXa7gJzNcXNTPsqkuzffMqBGnzWTXEtau6Ek8",
  "key40": "5WXEd2oz1ehnaAvKxfvg2yPfsRYjaWUDQqksgn8B9GsUTRLeGmyfzu5RxWnqHGPQb9agiAZZsPwLCWtKcc4qB5Tz",
  "key41": "4Ht7M9khqcuNsGmcWozNKkCejoxbZYa6m5GUMQvwuBZzPhhUoHTCZ8rm4nZisVENrnR7RpxUmE8gjMwdYYkX4Ssx",
  "key42": "2D7aZKeDJJwUwAyuRruAS5eF1qodMVKLQo8ZToMnSuE8gXAH52Yt9npTJUE7NeZcf61ihU2DnqS6977CjfJbqJny",
  "key43": "jBpU5kvNAMc45zso5JcvRCkDMEvag1KuCS51XGKjfcpRays6DjszER7bgiERagp2VatGSLRfhaA6VPSrYXUBXTc",
  "key44": "4r94R4HZbReYsAS4P8txHWqjSpwJxumUYhg4wtaXDwWnKbhzHQ6YGSuU21sBtfybudQK3ysXoHBfsYi4Gu5zNfkb",
  "key45": "21QU2UxKxGXHxHExWugDYtXApPdiCPZYZAvcMArNYBdbQgWUs4KDrjSXsZhWiugVmgCidN4JdZdH3GLSHadB9qyH",
  "key46": "2YjLaof8dCSKc22w3cxEhM41zR649wATzr2xvKyvHpDH1P2dXobG6PjqrbpyPkctg4Q4gd85C6KgafxCwExbmh3",
  "key47": "eKVPRv1R9eMSqn4DmfroiA1qCuUbqAtHV4C5gRALtV3tA5ZVrwKaebvPxiQ3mVsfjdv7uJAwAWAeQxEjaXa4SR2"
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
