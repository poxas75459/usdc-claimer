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
    "3chkEDZ59aAixqZ7KENGxdhkfbvUAaPNH7snDMYzqRwWt4NJQiQS13wgUypubJEULraoWaRSUZ3bM8G3NFBfpK93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KqMZwG8AicUW8LkoVH1x8Hqx1WbPcdAoXJxnfNHqnuUmykNM61WoJ88eZD5pj22gt91MaaXyYmmVAdFbLZgn64r",
  "key1": "9LwBRVYYArZouthXfyPeWLgSBhqrTFWsFseQURTce2Fx8EvsCgRpp3oVjL1zmZamRj7qcHrjoFbCofHdoq4NBbr",
  "key2": "643jZ2w1ugrK4rV7itKcz7j4TgBZezQof3fdJWteqbJaHm9QYqhJAnQqgDrJ22JicbLNZLfFGu6xwpaLdPRZbEs2",
  "key3": "32WcXuS56baqNJBsJnLxaGBouLCLToiPcYhwiPHGyTXqRYtvfAYnauz4ted6RqVn68KwVhv6jdkxRdc4pYWhxYfc",
  "key4": "2uBxTSnZ3V3pBZMAb9MKQGN72TDSj5zkasZjkKW6hSJbuSmXwpJ9qAXYvtbvcySaPVGrCBGFEzJukSqDqTeD599b",
  "key5": "4S18jit8TybShDAUMW3SW6dVJv52xvzVFv1LKF7xRPtWn2CJsoLfDUWDJGNL9KR1HDiBCkd3JzHqZyJLt1E8DaGe",
  "key6": "46Ga3SgfSXA7dWK5R31EmYjXpwR4SrZCsHg8aCLCYpiJSUjn3VPzjzYssv8GBNwpyzV6ErjRZ2yPJJBe5WJxUSzS",
  "key7": "27Kc8bzFDffoxuHm6D7QkpvdfEcgrUGEtv22XDoT7nGkEBBBgi26Bjux5JxiZMbhSFv4nTYJ5fxG29tqKfELcjEa",
  "key8": "5MNVTLP8VJvYExnB5WQ3mqL8ge9rM9Rn6Hakoev2so5iWXyjppw7QCBChxFBWtaDaKGX4JJDQ6isUxESa9CKTuEN",
  "key9": "2e9N9Nps5kki3w5JQpp7Jmm33P5fjQczTuEqLQVrsEsfyujwzAkNG9EPA2BMSfXU9Yfv5Ssp6myyut4HqfydTvcG",
  "key10": "5Hybsm2qREHMB4xjMprW9QDRV9Mav2yBkC9brgV9CtfWpMLuiogH4ZXSjuFNkLvqDiUDKVkbdHsiik7dvcdtucga",
  "key11": "2EjBwU3gK8jmfhpcFGhX4fXKwwQD9TwaT4fPC1S1RkeD2i6FsBs7Dw9sxKbBvNrR9Lbpkt6jCtFFFqdnpyVKCrxJ",
  "key12": "DEBDPa6SAmp459j5HBcbYUAtkdSK1oCVAJhw4ju92eJ8L5ogFcfGVaXMGD5xW7N8eK9nVrRya22Yq1xKvEmDA65",
  "key13": "MQ73Nz1hgm8RVdYfKoLPNTnPzj2tpYj6o213bW255nrBfHzERF23Gbh6rWstbr89hccjxhSdaCdBpELQfccdqCa",
  "key14": "46wPiyDeKQAsSxLWkNwgt4GpV4hiPdL8AsmgNHhXaggxTjTYFZpd3XV1wYiMimrzVLpreHH9wJxDDdWuPdoouPHs",
  "key15": "43Vr65wB4NKU2Bzdb8LdBjkdu4an7RxWfQaZ7sZJH1rc6cQZx2wMx2erzbbuyUnNDxpG7WShq5EUjET3oSnNeJ5z",
  "key16": "5sNEP24LqrjjKw9ZX5zZJEKvwCBBUBDq75pF4eP3P2CRCK7KSqKh1RPxPqJ2jtTqYnjeSgFJhZBP7TauSPNV86u9",
  "key17": "3dFMUX4KmZ68AH1fy7gpRHg24YH2nQmfbHYT6b5odU11irJKPXz6uZ5JQPXGer4H7sdT3XKYd1zB9w8bNeTy33S6",
  "key18": "2DdvUQfov9fzg52v2jV7TBFtn3nma4EGXQYLdTtVxd1yz75EDyPu4x2PsKqGjur9Dk4YrTHodDTJqt3HC7L59Whd",
  "key19": "2DAJhBHkUQfdghaHdGEMeeqfmmVKR43LntBmTpnk8t99aGScceA4zL3f8CapqnjCeUS36TFvXFE9Zvym1sCPRG81",
  "key20": "2vgWoEkxgUPXJCEoQwTyiJN8Nyj8CbAduZc3SnzdAvzdcgmggUPvJaB3ji8g85JJHGTeW3aZTdpMfQiLNb4JfFHd",
  "key21": "4L3xdh4c1PnvdH8jWm4j3TiWjjdfXNjCNyHHgVi17YTrMuj5KxVEvrLH7A48dZL7UjTWNu26wSoLb2edR6xHpfjQ",
  "key22": "4cD6g5KYDJbum3VD5vxdxhKEETgNykdA7QLixQ89QmGzeWK1HJ2pX5FSmJrCrmUsXSnwm3zfwTWBTFfmJ2qww12Y",
  "key23": "54paKsdq1wvsZ9vWMoSA1pJzbAFqaWuwsNmAJ7hCyiirSrJ8YHaDbUp4QDA5jh3vxX4UHPrApBBe7ESv1rVUUYHp",
  "key24": "3aJytjXSBUfMcwq1ziiucwozmJoixRxNfP6PrhQPzwB43WX9wtT1oCuGpLYD1vuM7bahENTVVE2DXAtM4jRr4hpC",
  "key25": "5zAeP2Yf7wTeEt8UpTuYz6tTFTYLqAgAdhPtTNYJs5ikg1fvbNj2HS6gwWYnrNaC2pJkn4SoHZrf3ndgrwaT3wuV",
  "key26": "2Kg22W9qaa6ZRqnF7eEm4f6HPErwW9P5Be2VAAgoVmwydsTJCZnaHdmmft42x2DYarpi77mWX5osxC46HhxJ8JDE",
  "key27": "5aLrSLoPnJkEfvB26Enc9wjUKFZp1Hyta5TDj8kcNy2cXTEvugZg1VyLdr9HhBPbzdXtZdvt8q9hMsNEs5XVgg4H",
  "key28": "65DnaTfpCyFQMQBgTf7U18xmKdAmhhxB3YVvDftHWRgZoQHvNkXiDPWt59Wn5aCWi79MxfdJn8AhWTJsA8tGcQEu",
  "key29": "5fxS5ojDQAq98wQ4f7sfEgTNoUUkFNW2HeohFGUsd7kWpxz7FkrtAiKpfsQCTjdjg9Zmaym4QMHkTzXBDPwKLLak",
  "key30": "EXvGmcAdCFkMwF6K6dCGp6qz1syBK5R8YYUhtgbCTnaD7NFrHcnfVLkeLxNUi5K4ik6qrU8r3RQzJPtu8ExKeqU",
  "key31": "2zDeUqt8wux6ToCWE6W9FHcjEQJPpcLjUkv5MYAJUjgiftLHqFvgNBix4iQoRoUDy7VKnzKeHPwjAQpfsMWYCHGc",
  "key32": "3uUQModhdW1ijPGuWyaEpozATdxA5JPE7cTUxAHX1jepmvBLVeBTvKcWxzLYWDuJEXmhDrsMbBMKHTSR6kv59Rou",
  "key33": "4RSv6jmaoSzwmnkR4xkWk1VD6ky9FJZgQLu3b7QQVt8MdWNoygumHuH6TT4n46m4Qrdzi5yxLHqMeYFjGXayDMGK",
  "key34": "66nVSdKkUjtXHTJKuix6x8dhPUfFEerfbxTdQZJ4K1XoAoSKtuzd996SszrV95g1j3jRUGBZqeg7ttz4FsA4PGvT",
  "key35": "2KzUkixCwC8oJjKphB3H4EMtubSEJEGBpCi7fF8XcDSQmRSJH7v6TM3qEYVGubjqoU8sGBNqT6JJBenQuyPPLxQH",
  "key36": "B7rFyNJrYBUc6h1gr6czzKy1hLJ5Vp3dYJYcLPZB7immHYM5W7jGikDZZHSFUWvgykFNduLtefvVihWvYDsReTD",
  "key37": "3AVPsWBy5FUP4jy83yYevTZaS6EzUi6nnfvYJJ8qt7kmWopMKr2adSKLeYWZ5pnmG7xP3UUMhcg7sTQd3T5D8z4u",
  "key38": "4gdtAx3hkA5yhHS19r8oKCzEhDev52eaS11xhvsHACcw6qgTXQE2Frjgg6zgxp2mQis7bfbSsHbQ4gHrYPqpFPR4",
  "key39": "3pjuEnCufEmoT5FCPX2bXKDRVmKwy77AsgiZCE43STk4VdQnBcp4Jf2sXb12o4NYVpvSge7uUZ5ZDohpJ362oV2x",
  "key40": "48h79SyvnRN2e12HgmZfJPBa9jromLuB3C5Qi8yPbQ8FpEQK3PK5wexkCH9UgJ5cjjo4LsDZA2ocYqvxrzSndVvJ",
  "key41": "TuWAF19YurhekgbyiNSoAiP1xXwt8LTm7EoXGQN1CuyTKPq4zTC1rDA37fbxpweHafd53SYSKNT1qZZbTwQ9kWL",
  "key42": "4evGUGSs8JngrGwSyNnjvCqfF1r2hUb8G5iUKXD4FoTUZK7DA6CFPJfF4CEQdZDAnAzXYeSZqvnoygguQRfcWNYj",
  "key43": "9WvJwTJNSPJskfFuFk7YkbjjgJF5rFuTwarGFQaxVyjkpxz838a7XPxARN9BTEbdV9HrCSMPARWpM3Qp9755nA5",
  "key44": "xT1Afhn15Q2bb3RTshGiTK8RqSMJRFGPzx4ouxG4tktnv5kqMADMoEBtFxCyja7h4qEmYBBzBLcjEfJG43HWWHk",
  "key45": "aLGktUoCsDwsQD7NxsQzv43iSkwe3xWrHaFoBf3iUuD7crvJqRGdnMwLtHeSwChxpVAJfE1MpjqDcKYKXswhBti",
  "key46": "4p4Qmq9fpXPhQLu7GdftLANqnZSjtKiQrjg4yu6FwwGx8pKy5R6c4uesKnbD9MG8Fgd7C6TttF6orUohTbuo5gck",
  "key47": "5asveEKnakoDKxyZ5JzZgsEYqX5i4KZSAeKu4TfSxtgC1kwP6DwR1V1rV4a3austoQbnyEEQaZV2qmRi1zC4QTXA",
  "key48": "5YwSQ23hgjY2q2KZmBAzUPb18jCeSHbsdJZkxH8Gdx2eLbvZjvGBL4wDNnM34VgJoxVc89bZSeP5QA7SUSpzprgG"
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
