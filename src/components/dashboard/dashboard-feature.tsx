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
    "4RZUkfFoBkqwADCiXRFpiYcx3xJzzkTa4VnM7amV3dPbKAAYPVFWn29CgEiqzPYtCVxDasWKU3igpoPSkDdgs5Fx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7EocQnvNQD5w92WPrjYUvVhNNitDBFgwepnKPUhrVbvMMz125RKmjN6KBdNrED5XSk7tqaYRDHfZFetjGeTei2G",
  "key1": "59gHAVBsqJzMTKVHukLsCaXqJxJvgxrxPcyizXgzcrjkL3jokUWBz75vHvVy6Jd2dZDFnZPdaEQfDWiSkLfr2VZ8",
  "key2": "5sY9DaBU6FxQref8NsDfaT7Dms2MrDwMFzEkSy5mvLyB99k2hT1NkhZ2gxUENQAaKo3ng5YHC8B1TLj9kta7GY5a",
  "key3": "2huSUYVYBXyQ682inUegcwT3Kwzg774khHytzQJa5ZcHdsD2j6jUzjq4LusdmP3MLuj3MUMn4FvwTavYoA5ybqqs",
  "key4": "ssPNKZ75W1MYNNiw8XeqGWNG8QG4ZyMdFtSzW8oGRFuRB3YXUcHtMMWHGrLxuN23npTf11wpkzdGX8fnY23zsAF",
  "key5": "2x2saM5eWbe2U2MK2pffPuudsGn6DGkpBVZfZu8hW2G87TpYuRWe62B6A6xmzZ6o7ULpQuwTnfjQWoq65myHD7xr",
  "key6": "4uHERYr6W3jfjfqUCqN75UjFvPgsVckwZxpAXz5Qq8LmBymADC3n5rNkZFPNJ1J8eaTfirvRZt1UQc7vPsms11TJ",
  "key7": "3wiXyHemHpcVNSGkcqweM3tRXCGSTvREcn1qvkAjhp45pVEdbDNcK4v6mYzKaxQK1HCrfp5bQMk2x24zxcaN9i34",
  "key8": "2aQiFdibCRqRwv3yLC7FZCz7YNyiTXZJFJoLbxDFvbkQovvfBonxDKM9kYQWqZiiacsB2Mf3XNX7LSpg9krV2VbS",
  "key9": "3kZhZpRvX8D398bVgNK3M2sYuBBC8fGFhZcTVodSWsmHEzZc3ZdCDVWwEaKkZEH7B5b6nrPPPk65vut9Dz5jLhBf",
  "key10": "35H71WZdz6LiZqS718LqARjeozj6yWYzmeW26S5zVp8bUHocFMY4QE5bVpmvqpSjeMJKYXfHiwySEGXkFe2JrJsj",
  "key11": "2NWjhp3nP5LRh27iUzVCYF4FM2jSthwShR1n9pvdTSPFEYdKDSig5FgTe9b5ef241jVYaYwSi4AMHXVqYuXSLXhg",
  "key12": "55Yd3w3fTXCgHe4r5kWS2KhHL9oiCw4bbqWj8AMqoV7ryz68jXvjiKf6N6JxYobAUFChKoSwbNveeXfPNnqko5Wj",
  "key13": "5zqu2TbN2XZdRSkEATXRHQW1SMdft3bfWDzAuo3aFRnktq7r6DfdCRm76ePwYw3KV2mCezc13XnZSwB31cTVgytw",
  "key14": "5GzRo6j7SPhLHfTD4J1XiCMnuzZY1bAkHaKnrmVT4aQJ6Lb6WMgCafXknpi4uDyqX7YmFZXmtk5ZQGtUW45k98Lt",
  "key15": "zA3hWehWjbDoi7jiLbThQjrbDbMgyxook7Mmx5oV2rogd3Y3uiALiNSzqAinLudPQPpSza2AAAC3NUeopproxrs",
  "key16": "5amQ7YauQfHBHaggSc8ZT28e3VckNiKzoUjUoyh2j6opXzofUBpgXat4ZkgN6EeoP15zJNQS1PPFs6K4bWvfGCyE",
  "key17": "4vWBDm6Fjnf7Vmd349bo1eA8mhaAUrpmWPHThCyRGf6GLskNZAyhkr1jrLe4c4RdS54Fvq4JpW6a5VsYTp61Uqpg",
  "key18": "2mZFzD9BL3uB9sbHDnxfyVakpW6yLu1nRgjpbHQaatiEDzUQ6r8oojYCzQW9Q5P8b8RKCry6vmQiTzim37R7qcJ2",
  "key19": "4LvdbzHYJDjfb52Ni4yY69jZ3g6WcTmSj5Hev2sKqb8atb22AUyjq31M9TGvKRFJa4qsu8ScU47vz4C3LUfRd8UF",
  "key20": "hMWN4FiNP1N2uhBxoUeVjokD1mAKHCgVsgcKPwMATVPjDiy8zg5pEZTV38SnnK6ZrWEeZP32MZT1mSwYyW1BxWY",
  "key21": "4tfM2GPhbVx7UAZHXD8CbahoYgRFULnPJYsoZvCDwd7fZDAaLWASMzobwG6sax6HYZ592j2ZecnVgz9beuP6ZGrM",
  "key22": "2XBncnAUNzbKX2mU4MTpw6APqR5Hq5NN3q3xKo4HaAXKRWLwYsKhLiqGmZEtdsSeCpudTnLWUiLBka59ZAGiwPb5",
  "key23": "3zFhAuV5G2vZrgXLb2BLmpfMut85ivQ4bsik3Yv7URgk2PDBE1eHJkT76C4WQDwrnqdB2nDcRwHM9xADSsmasaMS",
  "key24": "25qiivEbMzZgrxsa8WRDpAR1v1627yroRPBEeoFJWjMjvYkXk7wQ59WKpz3hnYe6Pm1MSne3WVxcFtK9WZ9ZQMPZ",
  "key25": "xUZ4VJWBQ4v5jrXS9bk71XFzsx6sb3VsgWsv43doT3DdWUKdEzaBnP1uLf8qQiuX4xiT4awTtJqqkYLwYPo1EJX",
  "key26": "6446oy3DaxriSvpTK25ECV3oNNWW9jKi8jgvf59uSFdjTohLy2fnNy2FCV8W6KcDjdwNiagAtXFFFY3je8rXsbb",
  "key27": "M4Nv4g1hRT3ALFKE3LtxB8HRephoatRzT8fDefqxMdPgjy9oSuLgM5c8Bf9mVf8y5o5DqXK4BApFKLYuMcr9cPM",
  "key28": "3abHrcvNVAwaMkVu3BwNT8qRUm8Zchtmtay4LHX59w1u5ktM8qviPaR1ourYFhrN29Ty5xRhK2BRNmefMXYwikkM",
  "key29": "34NCP72oCQUTphYmpJxmwss7M4AaaxhVL3dVCHseJLYSuPHGHKo8odnyRQxdKWYZAApfCTNudVZAi41vD1Tetthm",
  "key30": "2wbe637rZzJgZmvNVCSJWADP9TRQvwNPUvi71vZrJxFhe4vws5B1tJjWLuA7WJ6qs8USADpq9BhiC326gxZANAoQ",
  "key31": "1QWmbHBnRtfG67qGruWeJs9tvjJ8P2hK5mMtiNHcCe59rHkw4rsaSCPYousGm7XnABrQRuSGPbxZq1A6ZBWjUD8",
  "key32": "5VADbsKy4qLFuTZLWWdCvBAfmNwiMsYAeGrKmH6vDRvyJU2JM8kZE22Pn5zGp9uknLq7UQgUQEj9ex9R7Us4WqVF",
  "key33": "26j1tNQEvFXj5L1EwsLghAWncChSZ7P5n7QSNeUuoE2vuBPaVaFESnHo1qqBWRHWc1ddNuCpMMEBwYDy9WPuTe49",
  "key34": "5rQM6Gvaf6ARo1nj6P2UEJXvwewKmtTBNqiwV7FDyG7XyF5ZVxaQFn4QPiJa8TkwXYtph19L7fphSNBrFAiEgVqd",
  "key35": "3Lts8uJfoptPYNJUjnCJvUe2a4AgJMGDW9EDGKjLucGUzwXVPQjretKGsAJ999JwRPsi5HnBNbszZQryxSF76Q1A",
  "key36": "2fMYaoVUDzjWT5Ldxtq9yMXGWnvy57RZLTNoLZ7gE57qgMNkdQdy3eFSzpEX8d1KSdjEvDHJw7CdAxuCy4ie6tUG",
  "key37": "2mEEY6woSF8XgxfGYoZWGttamGXdgfQxqWcXcrQBXiLG6b6VhMSa4AEVLLfeSsL1NhjeVppZ9ci4TwrRLfidYbYe",
  "key38": "57g8AvHXJfpaYC8HtAWDYUqAgLMhkbjoiqY5T68ss2vqby92pZt5cW5McQ8CCDNqJ1Lu2GQAFbenWF7TQYj4sbUc",
  "key39": "5jQF81nhFpkLS21Jh25SNW9ceRhGe4UpZy6SoLdc1jgzS3eAD8UXv7iQmVZoXb5BNvPb2215pG2VduL6E5iz8LGW",
  "key40": "4EupLtvyjAswgZGT7rycb93C8WNZM4SLZ9wnBAa9V71iLHSh4Mym1vuKQSDsRyPwRgGzqtA31WnmLHqCfhnM5miq",
  "key41": "4Yj9eWx9QT6FoquHEwd4as2GkjE67rH5BsBUeYttbBzgefK4GdRhpzKTdqPoAVqcFf8hxcnbsFg2MAFcjxqE5WTR",
  "key42": "2mbPNLYJpd1QykapaSstgZivnG8BHuxd6ibhsCdvLe7xiNpzzYBkKgZvf3Qoj1LQ71QN4nTLTnpSPj1xZrRJQwNs",
  "key43": "67SUKdyZ3G2TXw6sYJS2uZHPXjRKxQiDebLcDww5grSiGKp5wRvvLiMxCSVrkFFYzRsieFhXe26K1hqrq2C4GDcL",
  "key44": "mky86jSD2XT7C54oTrVyxPBjrgYFtcuebDDnKjiM35Nssiz2tDp77VVe2YdZEWKv6hbwQCJKebReVjozUWz9taK",
  "key45": "5bAYopZUPa8RUZE55hzmxDqRA7NPcz4VLNGgKJVfqsKvHivX2Z43Bzq48jB86js4F7TvG6z4cqPZnT7U4UUgaZhn",
  "key46": "2WF9jzRfL4uzabKNgKiZKGQQGxYyAjNPsBAWFLdtqrm8Dh3sGvxfeJhHaVLpXzQ8XxT1Lk1s6tQLGN59wx6GkaXr"
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
