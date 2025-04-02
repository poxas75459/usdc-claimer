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
    "4L5Jo88QNJFoTvtvh648wAyWhaxqFLyQaP3FqYNehwDyeBkYBHHz1NNCb9gn7zbi2y952bCD314FiwGfEC3MUyjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w1JSBdfDAYaydCmYBPjj9kPwr2DcRYwgyqPAPYne69YZNX6jKD6nN4MfsvoFfDxM46GujUGeAddTR5eHGdM9Mg4",
  "key1": "496fWcgAeoMdPiHj3ygaZniuYLwMmsc4RR6nnnQnQohmmKhQ7WHuvmvnWWSWTfMxvnLGEU9quii8VxLEKugFECUc",
  "key2": "P8TjGa2x3PMpUXUMqAe1b3ePrw9R97yJZR3RgrpVvVMtSC7iQP6RrfVGvxiUfU7deJ81vxGNrjrKbkyxHmoMv7A",
  "key3": "HWUfaabkxzt167EMvdSSaLubdq9WcZ8W64WSiU6HzK973p5eR5Umove6HNs3T3qeKpr93hHuNrvntPkwrT4PQoD",
  "key4": "2L9uneN6NhnbXwhLbWhKFRpHpgwmHoQvKan9i9hfR61Usou7DYZs8oBxrWoLvELHNeChjog4jN7z2VvSTivmQfT3",
  "key5": "2YDQRw7jDcxyt7ipHN1kavkLniZwFGNF5pRVJKhRwYyddDQYEoBYyFscPojypWyuKrdkf1a3X8mx8zpwwzaXUYye",
  "key6": "kbSmStqjm2utEDggjVvhrY1FgwXutaX5b36LLYA54Nr2YioA58QJ3ppFpg9wBbP1xwm7wYTtivKLpoFhU5k1LBY",
  "key7": "zmCTd726k8Ggy8AC8RLRXZX7C7VS5EMmwDFfsXP2Rg3fEEk5L5J2H2gvH9i1GBmhnVtdi1Mqr8WFYyZKyB6fxgk",
  "key8": "5bnJFgtGzwfXEHRSoSnSNC7f9iysCa7giTygqh84NMhnn63crWWAu7MGszQLisH1rP1Y5pn6isRe7L2myHauhNvv",
  "key9": "3Wt2Wr4DUyCVfkvuEmX5wy8DYkG9CXs8nHXsmzNecht6wRCWxXMp4r2FSj4fgXrG4u8rWEqHtLTQqM3YMzhkSbmV",
  "key10": "297Uh6TriC86xwm5XY16YhVuabvS7WC5gmZAii1UR9Xhy6GYFKgLGx4fNj9H2cMweQF8HT1c91uoLgh9tu3mDGN7",
  "key11": "3gcVc8382KUejZSMWa7dFktgTF6qwQmAhtaTKy7csKCan7nDC86F5MrYkdCFf71YRj4ZTx8zjiqQ1KZD3mk4HaC6",
  "key12": "32vSuYD8Vk2srCFkSTPVUQK54BmCJUxwmBtueJbgJZH8SMUzbk5qjn733QzX8Spks6dBi8gVX6oi2dV7GZ3Zqpsw",
  "key13": "4p1H1Y6V9wHxFBs5XdzjpKEP4d7FV8xdkr7XBnbt4W5WGHb6aZb5KZ5u1smgfyWLjphCrhpq3bosMN97HfnECTT5",
  "key14": "rCGdBka74gQGhEBVhBr2H7quzzhUdDFC4ohziCaDY228DmDkbS3oJJDNiYnsYwv73yhwASFymSWKHk51Sp8mwsQ",
  "key15": "5XB2WhUoH9ANPXoBM2C7pDjSFupi1cAukqAy4xc23X3eeMi4UZ5WyJvotGhqcXHPRDzJ3Xo8A45TaRmHVkD9dxnQ",
  "key16": "2KHebrRSAwNTzCq2qkaUNYPvew1Y8RpFXbMbB5CQGAtXM31j9oCsVgMUGWiWkwfszDSMFnmpg1irV8DqVTt3GKTd",
  "key17": "4GyxsGVCXvVmKhFph4tDwX9EcP1FWQFDdZT7cuP6RJSYC6os6MYbvWiaN4rYRUTTa4FYJfe1V4kVjdKSBquYBjKG",
  "key18": "MjdkRfYKijQxpTt7fjY61ULQjM2EHwTNGGeWwyscqVmMTwf7vHzcG9LBQeS1Hn3eU7MFKAAFt2njpSc4Dri6zwt",
  "key19": "1kxjfXwdyhEuztKCz5MrD29779BHTfCQ8Bpy1BB3BqpmPvmJ2jZ54jqDZxPNS3f5bcKAcZV7AiWw7BEZe9qdRGt",
  "key20": "5B6jJVwht7P9KqStaKRbzX2Mxw6VReb8trHpcFuRGtmtRML6DXPMtcNnmd9jeq77QSWGXCC8HvjhsFLLHHTtNbMs",
  "key21": "21EVZnjMPFyVDyir8BKMtphFfEgG3bWpaJo3ZBbLZxJeRtBvcEag9Am7eMddDEacQBNuv5qNuQZFwichzkoBZhrp",
  "key22": "4rubTS94sntqEu8XNGvmuKA6xdWXicPpBoK4FM4TWFz7uH4yzNJ6oJLRzjSE95uzGrzwFs4ryo7RnhoAoxXdE4s2",
  "key23": "UNBUrRhCWwdXdCP8WcaNwR3MikNytNj26REVKpCTgj5fFzwu71PKbwoC51R5pciJgAoNHKNouSjh6fe9i2KnAB8",
  "key24": "ngw6XR6oKzx3DsyiADg2BR4GF18sCzQ3JgP8a7q4YygLTw8TMbFtwKmjjsMEw15M71gdTotPKK9mGHSNctsQJQE",
  "key25": "66EaZucZCd91u24yP1Gzr5e3U9As9TxdrF3RBGNgDAFzH8FteTZaxoW9ZDARXRUtquVGXuvKay6NFKdq1sKDBxCB",
  "key26": "4DJmUony66eozJGbXuj7Cm63ZYWR7H7ro3qd6ZqYJDizkMxBLJeCBWUkxTDiGJRsHpCRoWv35hfXaVhUncGsjEcP",
  "key27": "yoCPzxAAVZ5vp99rjREmpWD6Pv5hA1DDHzuYxuEXWuK13FHk6rDkGofkW19JFCfCE8qKS4jjjvvrrtc1hU43igd",
  "key28": "2cpy9sJzS8TU8aWKYuCgq2gSA3Ku8PQLmxLtfr8KZYZyWHK1LiWUwE6D1MaP9E4kpJdFR2E2v3hXGLNP2vRzzuMQ",
  "key29": "2imbALaQLnAop57tcndEG7FwkZ5gY3Hbybo6kdfxo8mkrCFUZsd4auX4W68g8qrdzevPxxMDdTnUHy5MpRcWLXQG",
  "key30": "23oDkfP4jqrUtqnF7SekqJKPc7T2J3LwFiBFgF4Bzynu7kbC3Pf7JiUizW3AdXopMGhCSEZA6yia5ZDxNVjDzXXW",
  "key31": "4BuqniiYMM99H62U7BMsUF4vJYN1KVyTjPAJHKM2qG5JWu4vt9oVtnvXVxKAF4UtfEB7Hr8HV6Eau4BNJDfTB6N3",
  "key32": "95ZRrov9mumbEwSiE9jSzDJnetjNH3sTrwY4VfUJLEdCuyuk4nM1MAoLUKudWAARU4nsthJqmuiushRRZiFKd88",
  "key33": "3SdkiiqNwKTqxtMDFHhjVH4WkssnhWn64VrHHHjdoFi5o1WQFLvc6FkEB6qcTuTFajAUPyoAtW9VfAH7Fwq1wwTX",
  "key34": "VnNmHeL35PNFLwfwsfzMja2mSZRut12psCyEYqgGKUXRjN3eWg3uGvx9nGkrJ2KdzQHn9am3hYvjYo5vSGk5jig",
  "key35": "hLezz2H9jyr4oNGXRUjQYkVrrMjtsXtbuMcagF1Y3kGTRpsYDem6xquHX5qsSsVVtgPpzJvvNCZz9pza1W96de3",
  "key36": "2XtgEfLp1mzuwn7FdaMPACaU9n8dgKWvBEHj754t9TbxbnUaPKtMtzviuUHjQ4YfqAdF9HdsHfhYZqLUr3JqSzhw",
  "key37": "49wB6VSMXfPnL5am2jcAE8KTsgq6P5VdEPPCUUPgo8w2EYJKYgUU8w4WUeqsu7aPmdcmGrQ6RCE3zkwCEdTAur2P",
  "key38": "4oYQFtF89F9DxVX8Ak3nJmyZ2ryN4QPBiVGBWXMTAb5g1X8ZAR6mXGwvMNwN9QicT9TK64SLaRzrJ7dhF1LaBRLS",
  "key39": "4xbZapau3s5gbxucezYKmVPfZtHBnismAbAstiobtbkK8ndzB2bwWdWZAigD1nHZsJbM5LwheLfetyi8zVAAfM7z",
  "key40": "2grdyu5eqEhSdb2PYsBBB9nckb9sMCqpGHaU16FLgp5stSMEtovGjco58SoRR69o59X5GXXXhKCRcEJdS5TE45eG",
  "key41": "4gHv4Ff6nCTAKxkeovFvv1wBms829NgVpvThswdSfmF8sG4xNHHuBFujEBhbbncXSBn3qmGQcdVQ2SAckjnRmqPW",
  "key42": "LTb6wvUGooi8L2RzDqSkXyfTTNSVZREsGJF9mzhm8zVo4pRM6C2EotxAe2YVrWaDr2Q4gcbuocs3QbGpVmiES2h",
  "key43": "2QBQWyi5LkHdvQ6pe9HEe4FN2UimD7e8u14xZC3GvGc2D9CQzTB5zFEicDTgUyJmMu2rgTDnTaKk44qPNgqtYpEa"
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
