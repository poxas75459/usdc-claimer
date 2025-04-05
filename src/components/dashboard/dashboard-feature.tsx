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
    "wWJxqUJruCkyuj97kKZp8v4fbKmBSWiz6Z1c6hTcHrPkZBEHen6E2ceLTjVnur8by3MGaYbrkbxRSxQXBQ6NVSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tFPteESnRmdzkWqxuKBQh61NFgQemYJV9vCDReJoJwzmLRpkRP2YaTtGijbnHfUc6Z6nyutCw7FdUKdSYGZewyB",
  "key1": "5QkAJFJ2KF8PwPPmeeusTnFjPVURJLqqjWDJxASQsad2ZbYNJHbXTnkARrpVwDBxESV56LKNpf9gDMXEWW3BVD5k",
  "key2": "3VZagwd2rpCppG8ibzHxCnqLrUu6MtMfoCzbKikTHdMwRGojgviokspmtmQwY8to9fjsYqRHk2aiL54rit1VDQTZ",
  "key3": "2B1QYNyPAJxTNCoUuMG9rWqzpQzKtHD8ByLD6pL42BBiidtCvqfGumaxRCgzjQXFfL71aC9DW59V24D9pDugRQbP",
  "key4": "VxLnWDK1cPk4bpva2iP1uf8gXDJPFdW1t6Xfc8nm7py2zfCBtamSYaKhCDX26jznKV8yNy4CSa5jvxHoAZia1Hr",
  "key5": "4dvrZT5LyDs9UPppZhuQY2JhQLBS88fbpWP3DdT5sC3gcahnyD2zdjHtJTNirbk5Vpw9VV2aReboSyFwqLgoKYAY",
  "key6": "XcHnL4mT6L77vhmMENXgsB83t1TDmMFTvszyYVKwQ45huKfzV8uXpc96mQyhSdHZcZJJEK3rURHBwqGzPDnGSLz",
  "key7": "5EksbksvDX3Y8YNzkcchCQtyrENvSjJLkvDsXpLJrmW3ovh3GqUEe2cnCznNEBJZUx8tjfVKi3j5THLYRVb3yb4j",
  "key8": "31J1N3Vm3QDkFBjTv5PmxqbphQZFsSE4g336m3Hnza4wWZ61he7voBqZnCWPU4GzpqjUWR8Lj1yvmzSjWVYQGVvh",
  "key9": "4i11R7uKvKFXsYBvDaVoYgkA7UXFajxmav3Du17CaeuxzPL1xLwjzrsGp8PjsJo3BGVZMc3TqxGpvwbgg1t6W9kJ",
  "key10": "FSb6Ku6vbYXsT4UDUMxmPiw2gWsCWdzyX7fB68JcKum31H1gB4oZ4wyiVkads2hXewxrTykSpz6hFkRyY7RAvij",
  "key11": "5eChKtvb59ENkArHJBGy6n4PSwysscfZRFhaSdavaDd3gGdaovn7o8PnBYeWzxrhkiijFb4d7PhP6JPqyWefDLJH",
  "key12": "5T4rQ8iejY7Umn8b1Mg7JPYvXqbcDXfdoEfusyrRZUNLeqvNGG84aumx2K9Ar97oeGW1vudj2VLb2bPnnhCRPFnR",
  "key13": "5W4AkLzne2drAtNsutqWzPgNNwcGHqtBQDpTxafxaaeVB6Zc8JB7LQgdbD6p3ZNXup6UQL8YpKJiB1g4iMcuEk78",
  "key14": "2LbTM4B6WY4sM5ECLDRuf7KCSEcCTRm8rpavAtNf9kPVdRh6m33vVfoBjwYktu6LuGGE1gaVdbx7XYsgcSUynE1U",
  "key15": "5woyj1pr8CrXGdjQf8YTS4Wq9tJ6MesiejAqoGRJ3q1PpTvpzuriVQy5UuKLAHBasMhifHSAjnZurrhaWGN94WGu",
  "key16": "4v2d1Wa69wtMLBdEB2HaJiUTpjt2jpwcSzekfoxRUMB6nGgGHaNhRwvUxry9mxLFkZSiaFLtHEFGk5X9Cs1bsH5A",
  "key17": "5S2AKRs8mmAhEtjNUQosCAWV7cuF8JQmdyDyYnbCunfSPU7UNa23zJQR3XKpyjhRkGAsa9ef2sCEESQoqNwxxPe5",
  "key18": "3ruzub7gwp4HLDVXWFmtH5m1kutoB9DwxJvT74MgnzCmEJZxRfWgzR3kfqcKfdc8j9A7yrrLWxn5RW8dQKv3RoQw",
  "key19": "KdSiWMbuHYSGuxZs512o7VfaB7Y8S6uYwTFTUKQyjWNKbwryc4EDu8wiGqioZzQa7k1pckhJmBax4au1Y9YwDfv",
  "key20": "B4qtAQwoFNu4Xcq3Ue1MPfR7NU5DZg7A8qqkjq1YCa4nChgg51aUCt3A7BCpbzXK5GvhMakq22oBMm13Qt8XifQ",
  "key21": "xbunsmHyvcqeuFWevaRiWKUJe1wbjpDeqrziPEspgtJRbCdqiBx1YmAfcNpPBY6uXTHnBiEqUMQMea5Yix7x3LS",
  "key22": "3cCEXYQdPnjV942138BCEXa7HuyF8ZsgawXwTgCRRmX8RzbrXfU6P2cY6CUyTyFbCVNra84kbrRzzy3u3Aeriwop",
  "key23": "c98LP6gM5jsRwuMoaNUauPbJ4HjR2sygZ6PboraKV1GSYYbx6QV1XRVNFUqg7U4x6wXnXYNv74533utacvpLzBx",
  "key24": "MwF9o3PcNdbqPvUCQtjhNrtwSwT8s1KYq65bVB4tiLpvJPUPp9Fs6tB6DCzhXbgGYde5cxcjGkZTjEjfLh6HRfQ",
  "key25": "39UxJYEv4dMqtGinjATMXnVY4YRdhuZonBarwW7RX56n9mzTduDF9bcuTFocDeeZNRsHeUr4XuUHoXUdrqMzFpdd",
  "key26": "4ZyujuidtzA4BU1aMf5ZL5kPv1hjLsVPHwgHDePVDyz1v6oFyaCtFDWw3ZcUcg8QT9LGxSe7fBWABnFFfd4VXsuH",
  "key27": "AZFNqAuUSXMRGVGSGTzdX1meHareDVVhXTPg6ixoa8cxAFo8SmvDk9bH5Z7y9UpZkmKuiQWZSBdBWjzrajhvY8d",
  "key28": "xAMM779uBUkx8H5mkWYWkctEcudxzQZyRKN74RH4ksfb8yt96KedLReeSaaLQCNywaENgHGgLi83EWEn7anKM6z",
  "key29": "4FWK6eWQ99dNQb6P256XPYbxW13AYVUqnQyEFs6nkmiXprRRwu5xkUcXfaa5dKErJzHimQ7P9FexSEWcNvfk7dpT",
  "key30": "cskGqcH5pvTQmkd3VtBTNwSopQzwYoRmh3WAUoNKrW4Hi3cu3QeFC1R3VKhfXMvefcNE8VcvyEwXmoqt6erAvEa",
  "key31": "2KqVMdVgoVcJZtn3YWEX5mo2d6tGcfKMnLmgZygXwPgk2R2MQ9GWfVk9y3bYWXnGGMXaBCcqxAvq9f5r2GyBCLN1",
  "key32": "FAgbyGFfvmnKhYuaGYPSQAxfibh1i2SYWpnZM6paEfZGUj69UAKkYDvrA3jojKnFEFgkhZ9E4HQrK1UM1Amwmrq",
  "key33": "65PhNP96wmKg2uw9Ndk2RYTQcKW8VSF5GqreFE31Z23tqpJ9Eg3kDB44tbPxAzZoknkHxhwjqKr4fdJWrgz2emrp",
  "key34": "TXBHMWbNyr1sLQKiSzfKURgs49fH1S2dLQTziRLtnsxpDwTP1Vp1FAs4xeF3Kod3x4r1FFpSLjr82TX3FpBoZBB",
  "key35": "336VR31AT7VN8JScCe5Soq3xtn983PmmfPe8JKR5L1qzogj6RFWb2V7dPNyRyhNYJwsJd1UUcZD2fTkzk7iVoUF1",
  "key36": "2H4GWShX9tNk8hdkqts65eXEQWcWoi7jejxHmia8D428PRAyYVjUu1KXSJCBGYi9MBKR7C4G6u5GgYx8M3NXQy1n",
  "key37": "LHfcTbvBZitxk95cNmCdSdhwrS45LkngWpN4f4149qJB4FzvChFGbeANWVnDqRrrhqXeUzsfooHrdpiBHx4xPYJ",
  "key38": "4nq2865ezQLAxQviRGVcd6cTQoTFqVuzuBwE3aJ4jXCMFRkeBquW4XhWDoL7diXBoP5Kj8ggnhiTXtfZhvEYypbg",
  "key39": "4RoNBH9RcbkyDBmWzLDLvFJ7WwREYmLKLZudeQANpXKTmQ8kjgf1NnLqGMrEinTDpJQdbBUEGJUyHYMBzCsR86pp",
  "key40": "5K59St1xzymgNRv4HLKN42oZSVK7SSyUVkMyWFeRiW2axV8DURVJ26cGmGLe5moJCPS3GYgpEnY6tAsTViifT3sn",
  "key41": "4rE81uYwpZ6M9jPTPKZbjFMFeCLbQR5h5soB5SJdkvnLBFQ81n3pFifkoxtQyBKjM2LGtxKzZ3oDQvTz8sMFeqYx"
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
