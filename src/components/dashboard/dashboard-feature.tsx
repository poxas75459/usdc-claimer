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
    "5g9MX7ZPzHgGdt9NseaxLeU88MeHYBRM3FNN9UhgC2X4wq6dtUAAPM5Ss8YDvMecG4ehiuvezLfqAgKURhAPoaqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zz9bTdLajqR69LWKJUWKnwap5HFTSUSCRYK6ydRikWMjMAUG3gnBnR8R1ANeSPiYPWrhGFGVVFERX95UMEhqhLD",
  "key1": "BVvq2AQhQgtTAyC9o2665nzK7Nb663KLEDy4Pp3JQwArtfm1asdJ3Rasa4wRsi8srEBV82uSE2Bgwhs6PbfSyRG",
  "key2": "5DkdLMGiFcLegwLfb9GYs8igCmQFv9wFiyCGUuz9VnsYeJPWVMaCTpYQTwPTVTwB1EzBncvCHXMmFjnvBXvSGcEp",
  "key3": "3fsbKn8YU7izsCt2cqi4nfcscToqTeCYYBL1fXEwNY2J1cXcMBciQwKPDs728snLNiDK2hucDX7jDS7eQHCPFHCg",
  "key4": "3TKNND8QMGMcJYEKTyvrDTkoBkWuyamrdaSD9a55ccab2DVygvQWYfSFgjkQo8uBq7ABaThYaB3xoELwySJcKo7z",
  "key5": "4uxib4UQRdz1wYbmzhn97fFpHLhCUNbRRExJzLuWA4VahVEvsnMSwbx5KQr7iHgHWXH6WUzdagBaryrPyEeXVCJ4",
  "key6": "4ZGNd9V6teo3YyinpBzG1fPD1xVhBMD75Msbi6ZML2pdk22neJwXRg6GixqmsViCkUFEENN7qpLkBZGkpxbSUThu",
  "key7": "3RY65CgmiC6B1msuhGTGLcWYu34AD4QAMGV9gjXNTgBNu3295oA7z4yAdnVseE5mYY8pedDtWG1jb4N8QNjHHknj",
  "key8": "2H2BqN6zJWyChQSdeLV84cUrq6xY94tvwyeSMxyRB2JU6ktysNG3wST2EJ5worcvE8PVqnguiFe2pWMdLFDNvcch",
  "key9": "3GQmXfYYgdyXg3JLywLp4Q6NdRo8Pnb5YPRjFEG9dK5nncs4HnVt1sg4bot9rDrExiHPni7fVSjRgYbfWryjwJfg",
  "key10": "4rnwL5PyGFVxbqxJ5X96ngPRFTue9vbUF7g14Y8mXKhG5UnePHP67faFxLmtEdkVUMVVhaGQADZakRpoYXZEGiYH",
  "key11": "5MNWhrRrKT6oYtCFKvawbVQVQDYusR3cV7XefmNPJYWAenfYEX2iu2JJA3VW5PLK6H758msEEy3mSBx6ZrL7XUSg",
  "key12": "JMcNnkngi96a3zQuGioL7VxU1doRhNXcLRmqBmbEqdDrtBpLZ9ek391MZpMT35vnrYBEcddc3xmjMiuRz9HrGMB",
  "key13": "3US6TebBJEswjfyCj9DxSjecEzADRbchuv1RMM2TTYvNsZvV6ZPKFERjpDbRkMkcxMy5G5oCCzWP17eeQZsFMt4V",
  "key14": "4yXyMEo3WVTwbxuABUtMUY4sN9cjdbTPY4ot4BtwX9QMC4kjRXm21MZsnrZk4GjEpPQU7kwbStrGBpEX9JBALxRc",
  "key15": "5WyStpECrr6uBxzzWGqBVKe63gRxgMRT3wUmLddH5iTLy6RTG9BDSCZqCU14hCtUR9xgJ6DnHK76uVtFCMqW5dhT",
  "key16": "z2t78fxCKtcqWBX4CbTVdqjxfpzrZqjg2rTpt7PEGKLZEeSJsjBK2MoeA7Pg4Gd2nmComa2bvcrkkfRdxsTaniU",
  "key17": "5UxESFbYvRc5kqwfrX4UXP9Tc6qVhGdbReG3wMVPzgqxDvDVhSLUnKESTPupeLjZaVQ2p7bRKnexCz5Ch1PxUQmm",
  "key18": "5dxpyt95621645MAeZVG1ZE21ootThALoke5Dwi3yHmzu1hcirfxHUs8YfneyzDoJbDS6p4pQjUqT6bD1rYBHkfd",
  "key19": "4z2fQRBnMx42T6PCucu4RSDfUYHhuXWP5YhgWzstZqgVhdH5shVCnX9Ps8CaSP3npmNZAauH5iw6LturTy16RcK",
  "key20": "3mfvSn94g172L4dEuqxhRBya4NY9dxnrnZ96dLvfK6GNvVNkQurETjXe6nihQRp8qfbFcVT9F1igarEc4Mkbx9vA",
  "key21": "5qS9vTgesE4fDM6tdXsbNF92WzQhv1xWDgN59hCb83JRkUXLeRFrfHUKqkKE1hfpVAY4goAEVBAG9sAkijdPFUeq",
  "key22": "jPmfbevNByR2RyWgciaJh24K4deYjxdCBkoHHwmqgD8MStTin2CcpNUFv8vhzNfhvTdw9GRGWnxZfSP3SSu9ikM",
  "key23": "2Twpz9bsR9ynTNgx4trFuQs8H5FJTsCoUTwbPAsZSzGHJ4h3ej1qsR5q38PGfGe34Y2ECUnQtWpvKiTYvfVkt4CE",
  "key24": "XQpaHfXC1AJH2im6ut231CopARUJqAriMpnnfTnMeXx4p44H9aDaNdkZRqXEmHxkswtEHtgU5ZVk8jNw3pJE1Ut",
  "key25": "27Mi3YqDjoxSiyW9BVsVakuog1S1fPrcPZqNMbkHvL8jK2zmPq6kbNMKAeYYN5zJq7e7PjJuqDh6Dg2dn5KgM6Uj",
  "key26": "2LvwGSFg7JKcKJURAwXfzwGKETLvc4umztCAHDLykphvKxUJVvhhn68FNrgJ4nFZqKB1EGjHKnruXSgHCyd8GFkD",
  "key27": "3v77vmXnd9YiZmnPUa5yuG3b8jK364jKLpYmgR7Ce3fw53zX3hRnXTACx6XTysEUQYaVnKnCxaAwnBmAXNok6aAu",
  "key28": "649D3Wv3NEh2arAg8W8tT61hS2NeHmHUDN93WUYidYHPw2emUZYCHLWxpeB7oQsPcoRJQ4h4cngPXC519tcemtR",
  "key29": "ske23b7gvYAS8rwNnqu2TUayP3AFaxLSivLQ6f7auWYQ1JYdBZXikVCRvk1NYAMEPoLVFdJKBTB2Lc3xS6AyvfK",
  "key30": "5pN5Wb9J34fUbfebnNUkY43kKgfASwEoU5qE3TdAreSTreKBXaTguyqTy9QtzARDeyfHQBKNosdULVEPFTo7s8TE",
  "key31": "4zvWCwknbdaMVKjUXsUn2N17cySiLx45SHH64yZgGuUA8TdSUt2SdxkVoPGCL8HC3fN98jsJPaQQGrKfVywjLfYz",
  "key32": "5Ty35JWUAGj3cR7fEsLYWZGc4d1fK2GUnPdgFGhHLfpZ8fq1TRc5yNgEkhuFkJDHvrinFEbjZTXNXhF2VA2CAkWj",
  "key33": "49LtmMMDpGEMA7rNfHcBWK6wrxJ7A96pBL6J1Z7MikXopNBxGGkPzqw5hsRQAgWvTbBNSUWE62itisvQp18pvpfL",
  "key34": "4dP8BZ3jeXyJPXf7ADBApjGXoZMq3SWQqmVJiMhcGRQTJk8ExAyGJVQv7ogwrh1YT87iPa6Sq55njXdW2puY79Xu",
  "key35": "5XSB9TJCWd7GJPeCsU4764baEditi3e83YiRZLm12aaf7HnbYaC2YPV5Scg9jXqX4xUi7PwrMGwiusVbxmmdNbp6"
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
