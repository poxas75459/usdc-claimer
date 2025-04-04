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
    "f3NwvwyN6DNNMXAxQcAm4F7AfUHVQTLj1eSqQoUR2S4LjvuzJRY6qmXxmLWTP623HWtZYtE1C3bxSS11oGHYdPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C3peqh9ajVdA5ABD79sAQFNoP4H6dzxDdQBU45tVosP7EGecNxEgZ1T43KHm8ZmCUL3knxMDrcn4dytwVVHFLeB",
  "key1": "473ncDYvfsvEayQb9xJok1AtBEcVqkx6mf4KBbD11XnkZKv81SbU9aiJR6q5ASgA31RXSzKhe3nhPtbSmk9Ywbd5",
  "key2": "3xkjGgLYE8qbm2TS6QMGsSZ6MSvTJZxEX41m94xX2cXDxCTduFx1mvJaiyERzpaq6e5UAiM7ovAm3emGmRWEQVTB",
  "key3": "92wPnworC3zsrbA7egeXFpnqf29wR4prkpduodcmUeXPPK48q8SAiysTUvT6KHc7rm5tuUD4fYvXjW3jMEAxkJE",
  "key4": "NEFpT4o8oG76hbKmPGMaS3xeRbrQB2XDBodBT5JVsywxQrXkXfa8U7mZJfvbuqg7N6RRvdzbkRYGHaQEEy7fWPM",
  "key5": "54EQsb5rppyYnWa9uNa8KWMes2jZxor79ip3fAnJVeHLXAd1jomvSo3Gfg83ZPCfuxQWyXMiXL72CSZLCWeRWCCF",
  "key6": "5bFXEC6nK4kpbcCVJVbFNxvVoyc196pdesCGqwuE7498qLQSQWjWbwr5NZ3KVchcQyidftkudX3cwsuXfvvt5Xhm",
  "key7": "4WzTt9e6rVWCEYsHqFuJJuzEuEo7ZRdYG952wTJADbCUhhLbzfEkTyErGWnyAHz7hTdjbXyqiTVGDNQMZMWNW9tC",
  "key8": "2yKCqJKctARNbQNQA93JQGeJjZ3qapKCpyQr1Txj2bayvssmCz11Dg5SgGJLiQsC7rTKWq38VsfzwgcEfezmH1oz",
  "key9": "jWdqLdTSi4HiDEjEMbnPXkXbiiiKmFTvPziv1JP5inTyZW4wG9EevKMwAgPbe4nRuH1JzxVgRPpjtice68sRZCc",
  "key10": "29UgD2KDC4Vmy41Ne4uc7zCbyJs319AoRKFSsLw2G92wN25YKVDcW7bTkWoHFfWPDs4cyFGAGAHPX5nBJRXFEaxS",
  "key11": "5xPW9rfKsZms4kzTGch9tEVW6KtT9zrepiit3DztmGGrmVymJSXrTe1H7zNtAx4WN1LeMrwRjXqoSt865ehQZfof",
  "key12": "5H9brG5TYZRFLiT5qSzdunvV6SUMTjz2f8eznTuFNSBVo6dGtSxspVaMLyKCGKJBqbzYA4v5mFmTkuqSXCyLGa5",
  "key13": "33dW1YVYetMKBx4pvrsyuEkW9a5Pp5gEA32f9aJqiZ3tWJGFPFCXLdpL8AQbMBS3sdBmPnSFZR16fkC3LBKFqQ6M",
  "key14": "2RjgADW2LhbXBfwLzmFU7dfs7VnnpEPUKhrk21TqpP7ToLtV3SLnP21nLA7mfTuCDFFq3s1pDpvjTauzNUngtJYt",
  "key15": "66Zwxuf8JBCULJ7P2KGQXjpYbBsu2qXzHnsgHWUihywqZN9n1RXXsb3SNNBQ2MNLUtLhJBg4kSmkR55xdaci2a92",
  "key16": "2oS73s3xxorcGftQ11B8n9uSU1srKnCrMSw7fN83ApZk9KQLLWrq9XyM6zM4MWrqV6ysy6MTCepM6bmxm9AX1hN2",
  "key17": "5PUWNQpRovwnrkVU1D3tC533zAsXxzRDMSWZ9S4s6QVefUNxFvSesKkiBkUxRExni3QTHaEkuZP7pkUWuiktMSPV",
  "key18": "3Yv2WJQfPtHUAcvJbhkUwm4to5rbkm5TrLAQD1nc4oCRKnCZtC2k73si7L6XNNCT583vGGYDyXV7t95mBsXh1UtV",
  "key19": "3qpUv5zWViNkU4yLyqznCE7wWK2k3SkUWRNeAWKQK8zTpEWpzcwvvgyiLHjRpNDE5awVW2mrcZcPaxoZa5RymZuk",
  "key20": "5NPmbQbofWSSMZu95XiZNKjzqEVViBiWSWm1PMWoxCyYh42eJpZQJn8vVor7g7Lbf2B4NAJNjooCx44KnnZ9MEYs",
  "key21": "5TRjNgn2a8uHVXN9dY1oCYVi4ZpJzGPDf4eZ3MyDDas1UHnHhDzREnufLtB5GouJS9hzoG1XiZngpsT3fo4dqjZq",
  "key22": "4eTaynbqpbYx9DLyRK9RYFua12EzcUuzd3QwDrQLHM9TnqDJ9ufMDPN53JvXtGR4wceGzMK6cZiUYtyD2tsLDw6Q",
  "key23": "7XU5qmRSgz1Y53gUhrXMLfrDXCFHp2T81zzC2mXwEqyJmGhBpku6ZV8oJQvUV9RS656j2DZtvMAbpvRdwGb3o3W",
  "key24": "qpbEyyg5BxQmJ2mR4zkVzDmj7R5hT7QPnjGdsPFUYDUbH4vdDVLKVPifGNfhUtPv7EfUgyiguxv4BhNx748Ayhc",
  "key25": "4Enxrj3kZYxv253vXs4GjGVSiKsGsx38mhKJ4Hs1WkRmR6uSvRWfs1YLZF5MmUNRERiZ8emvUR6P96pzKAngqara",
  "key26": "62iXtu54jc18nDKgsjgyX7z8vrXuYC9wPvqWBxwDgkBdLZrZYraHa67f5VYehwgAhnaxHj871kCytffgdgkMYWDd",
  "key27": "2JKks4CpubBg4qcm7fvjTL8WRj8Ty9GBU4Tc55G8FiSQsx1aRWn6EJqaK6QvUZLy3vPAbMiYntvb8TQxTC7KT8HR",
  "key28": "5dpzRcxkzbrjunLsDr48ukrpYi3Ek4dvrPAoTC2N2QmThTeFumf3WACLSLWznWicXtZvu3A1gBhM5sAL7aTYBgtL",
  "key29": "494vMBFBfcw8jb4D485STTfFDsEM7njSHyvi84CtGJV5DQf2acBXnZnCdy6921SCd2AFfKLBshfwMm5ZzAL5EM6T",
  "key30": "WoaJ5sXgHjBzB2EmNnvwUYoABLESBemyBnm19Jc2vLoq4vSaUYBDu1ZmdoBy7c3aHRUCeQdB3wsZoqieryVcqEq",
  "key31": "LSg8A9Uj1BFSb8f1frdUx5xUTMQfFAiew2Zzm6cpLym6tmD4r58TcPLdu4YoYncZg4Ug2n2mf6bruAYQDUW2QJU",
  "key32": "4P2tyyf7PS2FacMDjXUCUfgEMVQgjwcZSwqYyFfe4nrzbLzkSQkk5tCheHco9C5ofrxS3rkPr9SfLD1yeb9tsrJy",
  "key33": "4AsxLw2XiMRJaZD4fFQDSFXuStEYBQbjjcEfg2YArM5qiDFKvbroQKeUyJxPxTPNSEWDjg1os8JmbgPFZ9d6wunU",
  "key34": "3BuUcc5y2zQDZiMp9F3SjRZvPfbQ1dMJxTwcrHAUPxJo9zRTBRnmxom2cLAGQPzofHvJYb4kZx4YTaK6aG2ZorV6",
  "key35": "25KzmrdQCgTXBbMDs3vbPWFTHNrcJAH3M75QToj9LVGvTtuFs4bcQf2cHDBJMrXga8QzT4p9LRhyviNA1mM33D49",
  "key36": "35X13qY9AgUJFZqM2eSD1EFvCERsiiQuVcJGCoHLqtkNeZF1xrnMsVpgxFTKh2UUm47Vg9aHnsAohFDRmxP78B7f",
  "key37": "4FsCb2yYwC9AhrdZ4L4DkinT9mp3AzQGCXHyoCzAKmzNUbBffCRZJob6TRYuRueDJj9JDDLGtKamat7SYZ2uho7Z",
  "key38": "2xjK9EPLGnfHQKYTeKuSAE5U9p5EXMLAZwfTZeCV7Qucn85GRVtiqv9YhZzWSJgKBb3D8U9dz5WfFJkkLW5wm7HX",
  "key39": "QwWjdQQwPd1LyvAr5ad13bnFQv8Fjch7UBD6kMhFwrSdTka1YH2tm2fBo5moQtGWtWxapDPrFJgReZytTfy4LWF",
  "key40": "4iNqPpz8UFgMpg67z9o7EPW9hr9uUMJ82F44ess6g2wrgL1KFyvagqSP33xtDESZoYC5xKBkWviXSoNdpVHbxK2x",
  "key41": "vHBSBcaAUdKyhg7CyvSm62Jdwb3mxpZCMnaGmimhRgBGbQgFAPa8ofE5pjXCSNo8P3ZZuBFirptUY4w4Abha3EU",
  "key42": "3tKKJ7pwSKc7hcKthpNX7ZCCEQmNFBF1xksT2P7BtHSdCxSEX4fXJBTKNpoq2oBhWPiDszBWjz1kmb6hzBN123ZC",
  "key43": "34Ypq7a7dkyjuRzng5C64y5RAPnUwZPCEvGD5v5asCsdNxUkwoqW1KLc4d51swDNa2Bt5UnX6CFtUpuGKChHeHcH",
  "key44": "76gHh1e8Xx61FSHfK9H4rCNWQ7C7ipngyzrPgbnE1mShxXjtinbEM57iS6ckAZYKaYn643TZUDNNUK1ESV9zdHy",
  "key45": "2okwA4XgUiPwWxmMsGPGL36c8DwZTfzw7bj45TU2LFBpK9RnHaGwZx5uQRS387Vt7TjZDC1bkp7rtSMqarVDmB2d"
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
