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
    "4bjqkXQLaesvzP4SV34PiwcbF23XDd9guq8g29EGhviSzgu3Ap2pZSmarZqC9pHYnZMd2571b3kmEKpEM9KU2vjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jKrT8e2h1ieKBp4Zgogu99iCsjtj8XoV3yheBfNSTEQ1hUkhLHotP1BAACHS1RN3SMnMVVkE1mKfA8muwEqcvcd",
  "key1": "X7SzwEuEzLzaGBVv9cFPUNenVvNsdMmnuNFRVuxL4aP8ebQmURhMc4SafpirBXbosUP2PBKivyqArFasdQTo6xf",
  "key2": "3C7mfjip9Z39PxGYVrHGdrnhiDgjnLdm6Vj5cshDreuNo5HpXKYSpsENtpXAwAsXo1f8JVjeHV2xxc9NgBeBgvJz",
  "key3": "2PfH5HCfvwhsxkVFoJPPmAfDAyrRbxqNTG4keQ6cdoGjHWt5LMhrceH8JNSmKjD9waZuf5XCsREFgWdV6gW9Cs6E",
  "key4": "5oTUMtv99F9ZrzLZmNebh92sJWHdbVxbmYojr6kz4eMGkbTdpcyx1fDhGJX3S5X3gMBCG1xt3NVc8V5c6z9UWU5f",
  "key5": "2xrarabLg1yWy1eVnU4AjDK7KzwxeUC3pBsyCxSKfU1iXddmUbwKjuPFmCFFx65hrTEkZEGXHcsoWc3rv9xyWckc",
  "key6": "2TRGg1nxtienbCYuCB17P5ok2vMgcFuzTkJSyneMwRYM59EjrQBXsoyJ1YoqSxWrkA9MdauboGWucTdz8NXW2C1M",
  "key7": "4qkJSAomKQP1WtCyfLoqRQAPRR2BLHdzMHeCMwWCcjraXCyFQL1PGYfeWi5CPmMyQFYWgQicvW1f4bDv37bAbMcJ",
  "key8": "3RFAfmkLFkiEdBRDgQWPywXejHgBj94kAP3YcNge5T1vEKJHD2b4u47pkN8D6Wod2hNyvgjfPue3gXEgpUf2ancp",
  "key9": "2QXwpYDLhvmmkd5fMjzA3MSv3jzKd84SA8yrKi58FnrqrzHEo2BDWHbVgyGfCNLzqjJNK7aucAQohwVNFL6esHLn",
  "key10": "4x5FH6k7nmgdCkYMedmzc6XF25VPNxGHLzFtmtitYXVYajvWGsmRLZfBgvJeVS7KiPBjaHLkJLw4TPR6s5XtErJi",
  "key11": "3evqnLUd3ssepdgNea1L8PYMZTMCwX1UEkiXrjRU2z3rGMRDg9JfrsyAeCUfKb7p8aRos6shhYpmREXjaZxE7nFn",
  "key12": "5rTrwf1kn2wa6b6QcjxxLphbUdjLAvDZ5zf9D4gHMcHFrB4MUj8x1KbfrCnxWBxZiRpYr1y7C8m6hxTGLpgFJXu",
  "key13": "YJhtXWU2TYPQEeeEzABPb1jc9sL5azupjrLxQumZNJBDqRxFzoJ7MQ6mSkX4e4isknMviTHaHLZvAdURfQiS6nb",
  "key14": "uHxZU7R6CNuibbGiayKppsYuvgGxwSMpL8fno3nNGM9xGN4kvdp9BNLbX26YhHc3Lz4FKRgV7V8cC8Sj8qtsWUB",
  "key15": "3QnVn63zvUaHsQ7ssrxQFDpVn1Yzq3ekCTBMM6BhXfrzFgK7RKN9xNwVc47wjSYUsZg9V428KrB9s6tbACjLVV1U",
  "key16": "5KgwWud9mc9NP8Hr5XoGqew4udBgS6B1yYkSNnqbEA324uznwm3uNVGmATWF2YvZP8tk3mUB6o7WZ9bj7YL3PTjc",
  "key17": "oFhocDJtwMtRjfPof3PnfFKz7ZT3F5EBebNL3BqXbpU6y3tZpJsGHhuGL4EopkppCSQyxkync1szVx98HU8CWdq",
  "key18": "yyzwA82MCxriie4hocduZvsgExFiEs5wuxfaY1Lne87V5t338L6YDUVsqWNqkCYfbTXS5gwtv1xNE1pZ6WipErg",
  "key19": "5gLYTKYLs9KCUvTsCDPy93Mn7NzpENnetkuXNa4NpyBGAerPVQjLAWDpQ88KDk8RehRczGnWAHW8g6Pdbip3ugdS",
  "key20": "4QoT1bYuui952aJLZ4sgUBXhD6zEBcPcQib1QbErrNXnVYFPAELPRXPfxBo3jjDLjUJc72y9PV8ucvvTAjmmpom3",
  "key21": "5azL5fJc8mJT6pucF5vczTpyM3MgYn81JwqpWh4KckQkvWVRcYozJqnTKQHYEgSeMgPvDBkX6TpUyyGxo1ZSLWew",
  "key22": "3fGAFqV5KoAMPDJz7rMoBg7ri7KTaBUhW6dAsVDpqv34teZBiVN41h4XSTsU35TUuk7PaEM972SVzj65GxnuNUeh",
  "key23": "39JYFKfh8om9QhtST3VLR2Jbgd1ks2xjZq28bytGDVVBZXrKk9xKdn9amf8Xd3L8LjpdYRGGPFtZ15V4eCRmpqop",
  "key24": "4xCRLzXiNUntZRinSCcaxc7eZVBz4DhYSh57pWCio9gNGG1X2GrMaHuYAiUhhgsTPsRPVaBGob9sma6ssoWzsQEu",
  "key25": "362SnY9zrkEq8wxDSniAkQLLZ4huTvTA3rGF3vgYVNnMjWZ5ZoD8ctc2iuHAsdTiveCi9xGhY8fRfCJqcSVqhTW3",
  "key26": "3Z1GjvEtDXmxAZeYKLFsk7YVps8NPntTWZEB5Ujzt4b3pmTcTNCniHmPYFqaHDJGpAHHjo3nr4ba41UoNvqfj474",
  "key27": "2E8gnBiK1o3fyYgL1tPCEYZvG1fYhGS4V5DsvpvLwsFoGqefMWuktojsoQ1LsDTiNC5Xnd25exiYLmVFp7u1r4KJ",
  "key28": "6DtYk71fyWgJYEA3yUZpgM5a6aTSGkJgrb9sN1uX4UDvN7V2T3iZwRb58ckqh1XcmSe3fp81dBD9LgKaQ2eJF5y",
  "key29": "4dRE6kUfAfKDxYAZuRofazHjynAJSKoxqqpvPH91vVPNgm2XgzWNnray3ijMT3Dxnut3Cw3DearE1LGi9mYixuoe",
  "key30": "4yuvc42yMWBcQdKoSLbYB4K8jmeWrunggc9KyYGxvEtCcN1fiL9eyeNMftiAiq67vmVDBujB8wTm2eijkCEJ7GiC",
  "key31": "5M2b43MEfTjsTJbMrzbJryeaBXtaCBLUsiTbkWwuZL2g6wwuzosCzhfZHwvRoyCiwR7obye1erv67SaCg1e1rxYK",
  "key32": "5yvNGeFndh5aKzhrk4Y4B6yKfceRskQfKfoncnnnvsREhLVsmiBTVihbyv5NqWV9B6ctReEq2EVQeqpCrVmf6yUb",
  "key33": "2PBgP4jVMhksGmYNQnoD16CKqzdxHVeAwZM53nUozqg4G6HnpWpoqLAEpheiT4MY4yiNAAmwkU2K1DuWJq22Kce2",
  "key34": "4zU4k8H2JSeTz6wPFsJZNrg5eaw4Z4fss73iNyTPACtUv52XiXvnyMZoWArRK2jZyjuyqiBUVye9jrXXtUYpJuGV",
  "key35": "5jTZPJsD5L382aVdc6hf7xUQihcJLEtEBMQLDBk7JZPmgtx4JyeVSz7DDrtKg4Em7ngzHpeuoNJqAfVj1ji1fQHB",
  "key36": "5phmyugE3giF25r7jZTMcmtERLuYKyzzUBvWTxmNHMhh4qGaQnpdRJ4VEpSPj8tpu452z5G3K1A5gYxSMhnvzRAL",
  "key37": "5Hfm2L9MX1AvMNDB5ts9jzvFcet7YqJuuGwx7pM8PwzUZBPLgLjGr7anWJ7K927egtGGG9xBXEySyJR6vudgNJok",
  "key38": "4ZjjRjYcQW75JZos7U542n5u8jduzCKANgycWSDwkQ8QPFBG7gxy4T4C5WW8hgXEiLmqmX8Nh8s7kT2YR7hkqUq8",
  "key39": "61VfwjHnHdXYqeog9V1LG4e27zLHZ4jVK8pCMyZpaB7Y8RstzzCPubG1dFysHdNTi6SuwjimnFX2GWYogw9L7e3P",
  "key40": "4WCWCHxB51qG73eBecBw7Xz8weNuVh3aVSAnVfGhcvMAjHeMCdroa9jP38wM15UoXVicMEapvEcL9udrRraHHbTA",
  "key41": "P4cKsgw4fGixrKbR6YozTCXu8CYYQMmK35EFqpZTNfnib3HfHf8VNeZScf3E4UDvn83rcj8uedneUErbQHMDZRE",
  "key42": "kehxg2jaoyZibJuLkCRxzc2wr6ZRWgGSeQoCnsZ15L1upzyeYcBkxT4CM8eayn7EwHbPQiGy6Xj6LSCA2Pzkj3h",
  "key43": "5PGz3uW2VMtTiSxdQwHHSQMZX6dndzNWyvpgT4CnNxFgoXyLW1VUpWK9LKQKs8w7hdWyoCvMNgXhvrVNGNmkPEkt",
  "key44": "5QihpcdvL8Wh9nHGC4DyGTC1migvb7KNavo3VH2hKivBepM4ez4opno2EUFziDyMV8KBFRdhWnXfvw2PAx1bVG1W",
  "key45": "pXpjiGRvQ6nGRFrnHQWESM9QLmjzBpG1h3KXUGpmSnWz5ARipWp2nJi7zXqSnXkJTtivgNPgQTiVLLXwa4k2KRC",
  "key46": "4RmvN2XjFXZCeto6pKpZ1Y5yoLxozS9sJR3QXAEu79PtbGJj85K9pAVcgq61oaB1AoYetqJfPajTkBt9LznsFPzS",
  "key47": "5ytzmaTXnpWpUdjqjR3E6NpUHgDmtpbHQbqLENT7JQu4w1v2qzmwJxxCp9DHz15Yb316bfVq15nGomVBApX7ysE6"
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
