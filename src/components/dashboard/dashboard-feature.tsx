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
    "3BVi2VPFzgqFniqa5fZD2d7iJn8PaN5caTU44eidvDyeMPMQRngdZo4o8td2G61BLetfW1nyfbtBbVFHsPTq3JY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MkeCjuYRdS9jtdcRhPWLvtCzM7uLqXCfhZ7tYcEi8oVyVvYL1uxd8AFYJyqckhCuZps2rR8SAi5ZJeRXMBp69kn",
  "key1": "47LyeiqaqJ7MXXCKUi3NNEnYdzXTFSoC4FSmXDFxfKE12jDTKSRAnnYQmeQecSquomF7wSpxUnoyrvmxJXnyeNZi",
  "key2": "53LFsRLZTMLoSu2Fb4j3QWvBB2emEJcH9KBXEMeK6dHz8h8gXCdjkmNErpTM5EUGm4kPnqLRGrdMDjGP7u98Gqqi",
  "key3": "2zxBhFmP3kbJg6zUkSPfK9N86yHvvW2HTSppZ2YNvi85y8W1nVQN2p81osxZsf17tMrVLvwvKGnaVxdAoJ1GdWin",
  "key4": "3uXwjVGDzFRMJsFoDts1PpuHPoMxEWcjXJYTTuFJmsWUr3BSdPScy29fugq5wPHvJMJb6JpuSNCSyUd3sTEB4sPW",
  "key5": "4x2YwszcrT1H5xHp6tpwoXRkKuyptFt7PiQ1dMAUQXPhEAZJeEDvVSc4ZMfwVE8J4Jb6xbVXeiVgzbESesJnG3fq",
  "key6": "3ZJXDkyKWrsrbzaTJCjwEZRyG22PSX9rU2W3o46v9KpTNR2ZNkCHn8hGxaL3rUYmC2Tz9LmThh5Pt8LSvUw6hmFa",
  "key7": "9QCGvQbnUwsgYn7g1w4TJvTAfNETwfMuYsAqc38cPMqZX4g8fY331HA9YK63CfPNtfRjLt2VTDFcufATjSg9ZRc",
  "key8": "5vCCodpox6pVd8h5pGe3mvpc5BWbzGWBWkbMHtv2Pegag8GpsyRLFn5SSdF529Lj69UTXcCQS7ZrPrhgPrMUKQmW",
  "key9": "25DbqfB1MJPdmSMv1VxaHqXZcKKnAouy8QeNJNijLegQq12kN5mbHtpXmVjvURnrgQ15C9zLdMfFaMEh3jmdjZYM",
  "key10": "3W1EvgM6aMhKmnFE4kuX4pxxRFPEtR6ksaShtxsWp4o69SaYQot2Zk7eee31ZRUqFx5rtBUP92pofEUFmmL95Rcz",
  "key11": "2QBWkr8sZExPwqguCnz95YYYjZu5uJzUzZDKVqCF38bCS1Dzqbg6fdu2SYPgFiiyYHVkYBueM6q7AFAB7QFSeZk7",
  "key12": "2WtFbQ4JhDnr3Dn9gbR88zmnJ1HqgfL2uzLGfiKLySKjwb28g7zTgyjYefoXTeJPNEcz4NZjGwediopWG4XhgF53",
  "key13": "5ppeYtq8MTVUP8LwSbazvRor2Gnx8vF4nvQeCJ9hjSWDGxxeeyxXLGaxcQxtgvNmfyKSqwwFBWNHQg7HcF7cNWkq",
  "key14": "2oknjyTidRuHUGmHPApsiszayV39BM8aKVuqXCx177mgaiXUaiCdzsTA7PU8zEeh4WBREqDk26At8NsKLGfVa5ry",
  "key15": "3ScuZFm8uHoamskSSdHx4XhxTz2dxkN9LJvJNCyb9QMtxjfCVpWxN8qhkzN9KqXjHi8wCGKpcCQgbxzUhFVeFvnE",
  "key16": "24eusnWiwaBCLFbeCVNvPYWMKT1Me4Dd4oASrYvjiTGSLeod7itwoB52ffofdBTgvMHwYHdqBo9GaLRfYhj9x6pq",
  "key17": "2RcFMLzGe3xQSen2Swh8TGFngr1BTRciphrvSdvC1PrdFA4ZkBGKnu2KxQFu1fREj3hGAnBUPKJ4szyQzVPwCVE2",
  "key18": "2A4sUDE4LDenUt8CkEa9HUcoX8bUFjwLEj6ihLG4HXTX6Xu5izAe5nXYX2Y7peddJHbCKLQ4ACbBcDDPMAurt3xo",
  "key19": "XkpfssTxuhfa5vnwUzNJwnMYyee3SCQnVHK6b6oYchgaxjifR4nE7QWSqAdVYtQ1jUc7Xh9F1GjFzmwaCHw1fUm",
  "key20": "4DjncHyYnMhWkRYzAyyjzHrd7x2mrQg3r7VVMoLZzf1RURtz8SQ6pum7Mbd2PYS6QtHTfrQjsG9LpkJ1D6X92nxX",
  "key21": "3thFHGfy34Xwnj7a7ZSY1mMZKP33veSkz8NwCKJnA2v8oLAozWjWWmZFiqCLGQMA8kwFPJMDK1kLmVWfivFZYEQ2",
  "key22": "5BfCuZHVkAsbBak6gUphxPdJCXNPtPvVwByqUVqUG9CRt1iaVi9jYrHqJyrbg2VJrhddLTpQqYRi9cV2Ayje1rz",
  "key23": "m26Gur1HZKXAfofPbxin4RGqGpm38J9apBW6RkY2FDQWAiXKtDU1hAHdeoWgML6nzsQqTFD8P7sikDLM5dmtLvE",
  "key24": "Hu1aKDWUXjVo9F1qAqCHhsjJaQRnHqUuapcg5fnxEm14zcfpwaFA2Pkn9BADBen7JzZRxcVhYSwqGNLdLJgAPJG",
  "key25": "5isWuKvmxXVmFtnJ8PbrcihLEaTSPP1SryjUwx2JeRUuh6ponWiQQpKgWM2fuRBQ6WUMmDwYsUgBFWa1pa2CUHNY",
  "key26": "5C2Uz1vhs58B85GTSfgpKe3pU1QcHLB7yeajhQmN2QRky32Pm9nXgFVHvL8D9TBfLE6aiwEPE1Fj4cKex5MsMpNc",
  "key27": "2EqtVBuniGjJ9CVwrHCmZQ5wQCu9Tv4TyiByzmGudcsA55ve8fspFmjiBfTcWDyGjH7cEUixTs3xnMpohLNjv1xC",
  "key28": "ES9ZDA626yfdNm4QfsYPTpQxmNFVN3Q5UuZkHa5uuAz8H6TENSGd4qEQECV9uWDScjFVXirejTBBKR3JBmnjAhp",
  "key29": "3XXo6rR9xUBkU1J8CT16GJDyMWeWGFnF8hEFBW6ew4JksjUWsTBEyagHcavPfSLpgooG2RrC4ZabwHfQn1Mgg8Bj",
  "key30": "5MaCVxqfk4hXrqMVKThomJRfqqxobvk3H1HwFnuVHJHk8P5NKLy9qUXTXGRtb6LV5t73NXzCoTYfwxWudq74MkFd",
  "key31": "43kakuGGNb19iDZ34Z6GeDN4AF4FvgAtQfVwKUnKWYsxvcWj34s1aAcDk4es32bby4y3gDB2FLtto6BgrZAmx1xW",
  "key32": "3Aqybyh62d7mtxN89p2ebk5D9zv6wXY58HWbkHcCpJKoStMNtGCxwhWkg7w21GpyfihhebkJ5XPXRaJ8nYxjrTgU",
  "key33": "3pFbirExagpWrcfTJao6qD786Q2QSTN3ramXtKXpeUuqEgQgEnJBBdkRXyD7YJKbiXqx9jCZTpfBSQSeHU5GyTEv",
  "key34": "p1ug2HZz4HeShfvQPzhGhdnmgWh3t1FGPhW6wotm8abo44obV5MEehBz4KqXDKv8QRWXmkBRi1uvfyBJ4M7tVLJ",
  "key35": "4NNnaWnok4bcVbrBRCgyXhuthsXEEA9mM9vheriTGTJWajzSnfB1cVzVzxrrnuD2pSfxzP1fS4fyhPE9aE5cgHyN",
  "key36": "5HCiMEC3bx9QqAZLb1oKR3Sis4TMDqVzjy8x6hWmiLwW3ADhR2ew5Rk7421XYLcL7RmpR4qrXVrqPeXfCL1xrrJS",
  "key37": "3zEhz25n5LZmGRn7Ga8QYZ9XoYKmax33suwAQERCQ81NN2PEAgJCRTZFmGd1ssPLYdJAehYxx7ToynRLqgDAYLU8",
  "key38": "3Q5BbS7pr8HoXG8u1KPdESCsMeX8pWAPH3AWsTXC15d9ioSxaHn6qivEEJ8Wig6kZuVu8oGrQyTjokWc1FaHGDa8",
  "key39": "3iqqTF1CmPysFdNvHhz2LfqbxGWmHJ4EXF2Td6XkUGBPYnUhVHX6mBfWMnVC6sMSHyFpjhw1WusUYSwHf8RBXgMc",
  "key40": "3WD4pcCCT51pJzBfK2kcboB7g77QSLrjMaVxLshYWmn8wKkpXYaJNREbFdP3x4oANGXACSEBYg4eMwg7L5gQHPfJ",
  "key41": "sb8uoUMkThthpH9sRzRpPWUYpR32U7iGuij1RoBnMTMquHXLUV33rCBctiZiUCnf1naynifs5enGpqPGyQMYmzw",
  "key42": "3RYyt2pj2Md8pXCjY7fBd4hs6TymW3zwf4WdsFxwBZGKztQEKsNtjgJARGDFojCUAoo441RJ6s47WsiXrGG1RmiW",
  "key43": "2f4y6ppvN3a1p7L39e3dM5XpDKPazFhoQqSg1hsUhQ5Q9UXvrjNEFdXyBy7Nq3EYRuFATsEuqjyxxzHQKy7gfMHy",
  "key44": "2Noiqvmn8S545VVA8UuBKc32yWNs1PXiDo1VHQZDVJmrSDXhTdeyTGbvUNuNJvvdLUbHgF7qhfuKZHykxHBJLKrv"
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
