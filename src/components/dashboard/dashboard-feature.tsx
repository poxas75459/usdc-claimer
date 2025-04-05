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
    "57Mapg1r5JHJXb4k65da5kA96UggFifdMREW6zoMfndL8PspkQH4gU7H1zcVShZE3s1FBP1mJKo7dRLGtdKMsa8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gfQsTCbx5qcjjZMQBvLh1UsbubKdjhhALdVQN7es1Vvyiew3EQbGhS2DhQtGKsGwMvNZNX7Ba1EeDSTD4EnQ6hv",
  "key1": "3wgQJRZfMGM1yHoAEw42fmzPaHoq4d5qgheuPve8w2uFjZAhLbU1RaLA7pfL91nUqZatTX5tpWeWHjtk9PLerPE7",
  "key2": "4X7A3G1YpwqfX29iRoYqqcficdLucNQfKGBuHbtgJi1qo53oNpvqthKiPaL1UEr9T2ZPYFCwi4NnPLivbdfCnfk9",
  "key3": "3rWh2hT9fwCTB6XXWf7MGwSDZ7TQkPw26q1daJar344D1KJijn7kcf6NXnAQoaMMqNg4aLVMuPTR1y2ehfpQJzhA",
  "key4": "22yqCjHkArDQKP5JHKAg3Vwk3PiPmLnLniXSbBrYjtFieurLnDnYYSXvr6Dw6dbf46gEuAMyugkBHxKgUZwoJs4r",
  "key5": "4yTUkokvwiQLBmkVyNtE2cqKvmpgVQErFNn5ehis6oJs6xPciT6U8TQTWEAZ2FSjFa85m4r8u63PEsW6fVMjt1Md",
  "key6": "2txH5SNdts7SN27T5WCnZzhXLbR33BP9cgL8EtAzuA9CMv3DDAP21oXoV3q2CZ1PhzPrHnWc1SaAbiQ9ANERN5cr",
  "key7": "2xUnQ6q1LbFwV2ocDePngtKLYHxyvWErZunKndZJyuKPe8AARev9Zg2fFDCpZKuXw4WRucGgL9zk3NA6Lj7LQ9Rk",
  "key8": "2VJypqwrKHf8JMMBY9of9UwhnvHoQCQTFcpU4vhube2Lo598gcUPnryiFcgk6yCcbDqnJPx4hKC74SNm4qQtfTpV",
  "key9": "3Yv9ZGg9JXU4QBV4oDRbWCMenorQaZ2VRamVaAnwEhy12ZmXh1FF7NLtxBVYSp72xWEZm9j42tFTv5DAZvpQwzP6",
  "key10": "3Q5aewziMqHv1AeSTEA1LnDW6j8f2Yf2UTwdaQrXJgK7oJcpTZDy1FVRvHYwH6j81ibgx8aFSTheBdyjEEHgRPn9",
  "key11": "3MMoDB2rn82hTp8DPytFCRnZUVChhz4AK4jeeiv4E8rXUwWLgzHLqEaAAKcejL8YXMDgWg4vkihCqbYGNVGBLTWP",
  "key12": "2TAMdtSqD1tobAT97RcMZuUJ2hRi3awrBUtWqU6tHbRkWJKoEK62HVfNgYvDb2NMdoj8cvGxzVz3uXbu3kXUfgRS",
  "key13": "4aeHkC7iHos5smYd6Tpugc3htpuRFMTH2P6jCwd4Fy8bu4Go4JQ36fFEF1U4VU1uxXsUK62FYqWVx2Pu2o7Bw9qR",
  "key14": "BHbhMqnYwdxmWBXMGvHYyHxTBt3mnUEH2AbAZtdg64xHwbxz29u2YSHVqzQoH2se6cWmLQazZygWczrzwLeYcAF",
  "key15": "RTRoek3jxey5CeDbDzB3kFTaMCL34m3yHX6diww8t1QqqKY5wPd2et5FnSRGufHMf7h9aiZFUaMEcdx3Dwk87fn",
  "key16": "5CRV8jbvRA8opD4CY3hLhm7UaWkuomi3GUfvJf8zc357S7zoXvxymfoU6gRCxmVM5EJbLi78wJ8ASg5ATtEk8Vaj",
  "key17": "2pYn8pH5BwNwPKguoeZfaEZzEFcGtxMdEbFM8K1VcmpsfE2XMVvRkeL6YSDBrWsS2uM8J2HJN5UvsGgiHtvshCGh",
  "key18": "2dzhvVRnFEvzBmtQs1khbB5yTy3sbQQ8YBNw8v8SKCShyimpFciDtR6RmMxYy66zeSnfi4LRCvQe8rYAELvQ2YSi",
  "key19": "5hmANsttEPi55aKxKFBXCeWMSrvmNYmRbqMPQz2AnciAsjvymrxvQC3kAPaZsvoZjhjwrcHB1KZanyY7cn1Sv6Uf",
  "key20": "2rUVLKBeXtL5mEK1EuDne3bEWpg9M8TkH7WZtJEnDhbRtiWaBXJ52CknyenzGUFHbHqk7oicWanusDSroFx7RZTa",
  "key21": "3HsByquG7p9jvB7Br3Zqup2a9JWwEFdXmXGfSipqAdohfDRYkNoHT82gqMqezLZXjNmXi34TYHXPejKfqneN2Ywg",
  "key22": "3kMdyPjufBHd7e5o7EdaNrjyEETbk51tDDSP1YuppTdkZWh3ucBXrRPoGDMy4F7EeZFYwgiqxix9EqH8dqYA472i",
  "key23": "5ffWSriQDTjPwX1yD8HPmb4W8q3qh2nubbssEqjUCezayXVAYXJ9EEAmBAVB1rS3sXRTvAr2Szf3VJLJzmFN8fvP",
  "key24": "3KhCbT5wwBNVZZAWSG3LAqnDAFmCgNtNNJ1UrppPtCv5pBjNL1pwn1vgRPyzk1EywkuBNW2rAUQgEzZyhH3e6q48",
  "key25": "4zCjQHWvsL87veywTfBoqV6xEFA3ExjsNiurx14ra1r82MCKjsTkceN73uePG6BqqMwWtFNzq4QgUGxDzX76gGWx",
  "key26": "89Y7RbS8eGeve4qYs842fNUz7qhkMifTFD2wFZSMwCrqPe4Ut4HsC9CgZ4ekbRoFzDLubpsKWGLLQHET5zFc1UT",
  "key27": "4Y5dPqNBXqDWiFpLvJCg5q38qjA5bFnrHvyTYcCCrDgQ1EgDeZ4uVrRQgvHo7G6FyRx8iwEwh2gZEJ82eerWkWfj",
  "key28": "MkKUfYjNXMFnDYmsyE5aDkAWSkbLbcuo8oBAbu31K4ew8LvTNEued9dtrTN5HehkGwDq8CPPmLzWUd46owULFCi",
  "key29": "Ezbf23sQnRCajyS14JPjafrf6rfNaQf7B6Fw3Zh2Nhm35Z2opyJGVozqtdbrV3Hc5nVwGTUPFRMYeLtHo7C2vvF",
  "key30": "55n7P9FxH5KY4mfeezTcFsixkaUYMCJD7RPwM3Hxvnf9yCQxDYVnJy3n3xhwsNbaCmHbczvPemptetow74RCaWgn",
  "key31": "2nYhEremLpaYx5SNYkrDsmmcB43r1EsZ5aTgC6MzUVrzQEwkjLvaWRM4zjnGvCL2zM3aFPj3m7StV3VFehTmLuJN",
  "key32": "5nGtbX7T4EHVDQH6tAaVS75LtLM6Bek9TvhCa3sBTT89fEdJfvDujXvoifihQL1kk1WLJRar3vMi63eNkubXtjZr",
  "key33": "4m6yAH2ejhDhADrYMsoCo2fjLHPCJ4FBHHSHEenvXoYQsHuXpUTj6JrFTwciKmaPDXRHUpgmuR4naX1Q6zGauxPM",
  "key34": "3cBWX6j2bpmQpquRgEibcaFXEMqrc641xvpZFje2v7PC8rJVbWQgZzpELNV5kUY4ggfxWVE6zEtMmUajGQA9yqRb",
  "key35": "3VFDCtgjf3H3UWtZmrSLbP7Vsq3ZBidwT58aD77f32LmFYyPxMfGcTyEg9q6sRMNGmjSca9cJeoQ8q3ubi6mPcm6",
  "key36": "55QBNzTSrVGWFsWNuFh9hcpe61Y2fV5VAGjteVW9dWfGMS4VDY86dEh7QTCQ8ej2fXEy45grgtRYDsPcua8HnH1h",
  "key37": "4G7nkLU46zx1gD2hzyZRWPxQGhf1oG8Mua2ZHwgk8WA8oAVpaBkzAzxFQxwt5VTTWHxiecJyb2PfYdAGiuLaBbWh",
  "key38": "nmUv2huyay5jcJTCgeExETszCRvntkPZ7wMjDMuqaWgjtYeM9LKh3fFXFKBmUS9brwh4XNZcBnqVCcpTsB6vX8S",
  "key39": "5HKAsxetE5wLPqs3xCsMsNEr1GYWedw71JPxeWXeCmmM5xfyGpmerfXJkheBve2TutNQ3xxtnTQkLcVqyp9qwt3T",
  "key40": "H2Ptx1nvNaDpHaxhfdvxvyppUJAyECyRWmM18sp74VjFHsr3GhSxhXFLnZey7YwpjwK9KHu4cPvPV9XK2j6powc",
  "key41": "5BsLAoWCo9oBVstmV17irmdBSVDxMPP1pVe5ca2JBhHFQtJso8FPkFz96rqcUZsnMeTSsmwd3rcQv3Ep9A154ggB",
  "key42": "3eQvgXAn2BGeNYDtsHwHpk7ygRAsD6qb2uXKoyG2s2ynHMf3QqNnuEqQMvCykGNw5Yn6G9cpirhX3BZX9QDM5dVw",
  "key43": "5H9Rs558VP4B5M8NBafQ7gFgSjbyDK7SXLcEkUEXrJutQ55CQaY9tZJy4XNsMEtAKACjSVj1QxL8cwHbVkgCYGeY",
  "key44": "28zRsWdNtFBsCpGghzTiaG59X6iDghbzE8FVpi4EBE5QruZmtk7myJ7uFuTtW3SfAF9DuQDgxYjVjEERbjAcJAGY",
  "key45": "Xpc4SAWgZxryL1rj8FMHtiwwxssrGZSMAKd5XeyVyQf5uncjFpoCLAU6GKnsW9xTxUDuTt1R83sUo6FbVGe4fRr"
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
