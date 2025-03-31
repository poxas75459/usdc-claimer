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
    "4RMdKwBjxTge8ePZxF832UAgUYjCH7BGNtrw8Nqqq7j3VmHT5Bu1CmryPFVeGfyDCYLw3avZua66cSgP36RySjdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Qm9bpWFKosQ2Po3bXRwQdArSxoArnEjfmSahg2MfRrz2vEPVH9ZinMVsSNqRpsqa1cRCe19ixHcc7CHAHbgVHw",
  "key1": "r69LNe7VBGGfvLSE1umjtMexJPHhL2kGUgrj99s6qwQmLko3hBXRjmC4mqf1jjPRRq7zRJRiCSQA5Sg4cqiF5Pf",
  "key2": "39bZ3crJqoXVne7QfmWe4zzuFMS31zjhMXXhUE4fnTKjWJdboghKogCgYsgN82KL5cX96TfDgw5QNqPZMPLgskTA",
  "key3": "3XeQEBg7YSwxBBSTA8DUv5GZJYNoD7iTCtLUDaHq5sqKoe4LwJZJkjqUQrDoW9VVarbttCSTHS1Wzb8EbgZ8RbuS",
  "key4": "3SzPLjKyvj3T1jt1YnsMGYiAunbSbojhfKVNFRtzGjaPTwJiq8NHkycf3WikYSvqp8pSz4AWmgbDDg35YyFi5fw1",
  "key5": "gux4fPRn2JZnRzJjqfK3i2nc1qEUMPvLGkHGhzzdLUjEJjnrkJHSPb1ao6b6zXLeMZ3KFi2DMuPbrkNGW2LDVKt",
  "key6": "5HxG6tgCgE83zuBDmJHNCPcKfjrfkC4WrzjsSRhdsp7H7qDuSoTA3QMXTa7ToiqyUeg9a5FYkSyWeZxdkSiU6Eoe",
  "key7": "MFdFAc3Q4wTS7rhYqzmJnGP14D3KFjees8qEjsJ4rmzAHqHAWrgUKdfpDQFD1K2XC97AkYMbJJRZHg7DT7N23m3",
  "key8": "26EN7yNRtkYv5hLqksx8moMk3G5ir4K9mEwbw5DaijEzJPuRB7K2esL9Suiz9tbPsW253yEJC4dL9KFD5xQ443ys",
  "key9": "3mzAqBBWVzE5EpuGiZiKfw9unq47mKcR7wQri5neYnP43FsPVvu2tak3tBRJGwSRZnbpueN4gDMdom2cb1DkHnJQ",
  "key10": "1C7D5Yq3EGhKhHSvH9bLdB6gxxyZrLSZuLY3irJ51Hw551fsve6TffcG1KVXptnqhnxLX8eCimbRprdQZdTN2qu",
  "key11": "5axv525r6jpbFzFNaATJJ7yZPQFuE599Q7wmtW12EuaQqcmkhQmPz7L28cRi3kQESSaR1Nbi2cDhqQ2W1zHqcPcs",
  "key12": "3EVQSwVCF8abPcUKCusCE72TLfkofmqumm4sqEki2iJvBa2LQM3wtatUPdFsDbjtCMRFKc3Kk9fCBJhWWGjW2kRe",
  "key13": "4TZHRWHPQRUMftowjb21wMFCv7dVXJoTVFMP3kC6MbjWF6xm7XDD5GqceKhkFkqkkEGxqVvJSuAPFQWAZWaYm5gR",
  "key14": "3iBvDEJsKRaEn1D3iXLwJMzK7ZrGkXBtSWKS4K3MeNW4AeqvxMnxn3fxdxuq4XFUSfmnwoomfK2Nt3GvADf311Fa",
  "key15": "262JUjAVwQBhpDNok276ar5fHuoe3BZQrShpBCM32n43at51hY9VJdisHqREdrdmFPv1R7TfGWVBGQp5hZi7po12",
  "key16": "3iLjkYJq5f73JChx1Yawbk84tuKe3xGEdWVM758o4Wi3i2ycSZ2EzupSbH7vukjpteSVB5sEgU5UEKqbEeDZDo7e",
  "key17": "vAaz1aCemyCf6uUvNd9BmbS9AyMqwL7LnuLwwr61xZufHR66HBDh3o5SxMxKYJYNT8bAwkpvu1nJVKBkHib4Wh7",
  "key18": "22kvMDAZ9misnEX7v8GvYWUFj3iqB9fNDkssrk4VbW4p7QwMztxcjboPXEuSiYXrHSE2XauwBWCxPuB7sBqx5xK7",
  "key19": "4rppn6RbhnGHb56THHj1fLyXiCW4XP5xhifGEcxnCvorQRwe9yYJ3BieQhq9wVn7CWQ21KzVxXRLFPGYVf9GVXg2",
  "key20": "3cJzj2PDtgdYSExt2oXWZsa6hU7Ao6uS4JakE3xyoVSmnRJPBaKz3qju6N6qK7Q9BSKyF9DCmigP1hfVisP3f9Lw",
  "key21": "23TMvJS898YLq66yxAkp9Z2qGqo3ExmWEsW2hc49Bq22MYUDnPonPti1jrUVHX2a9KwYgFd24zLrhcTvgMiDtsUp",
  "key22": "5A4RS9aGQ5o5osnsVkDABY6muDg9AjrpgnUZsftkiBJXYRbfSbTvHiTXnm8CKzxpiW1TsHmskXw1HxYXY94oCmnR",
  "key23": "4e8dNQhN7diWVjn5FYn5itz5nRXZUD6rxwsCygF74Mni6jseuaAnjnLJ4N7cUEEtvMtDfhCevphfUzJA7mdioKyB",
  "key24": "3bA5uia3wXtXddCqBDwZzSv9K8Zy1VD1xsgenJAXeYQ7MjS7y8FERY1ufChhKksvhDiCMsn5pJ2QhwU5HRgQTTK5",
  "key25": "5zEvhHhsQnrEGVYUZWdVtjymXLfLm464PGaAcFNQE1Bzcip6HsLR27qve6Vv3fC4eWMonMFgWCunDNhmQcHyqxRi",
  "key26": "QrxhdPBjnGaZHUGwaDPsFYyPwxxYzJZZGTmK117BM1Jg4q3Xkp8GK8U7wYVs21uXWPjAFbBdK7tQ78QiYZfxkpQ",
  "key27": "1ki5GmPGP23YqPi9xV6CDVAR5R9ySL6YQr3JLfdaJvkFJqEFmk5PTTYUH8Yw3bWmAgzrszkifLYpcnhSdvZhTQe",
  "key28": "2a5FiJCbHZNLT45Pw7fU41hb5pZRbVwgdZGTh4uJHA4f2eYgqkWA85qiPWaMM8tFyQvtiZSyjwkqChqTiVJZiyog",
  "key29": "4JM179VwjEqPKeCYsFwo1j66kJatf2mp5T3KxaSS5H3ErRoN9pNbrwVq2JMtnnDQMou5959e1UdzaZJV2qrLjfQV",
  "key30": "2cE37n7Sra2qqSRzxurtrTqoCk7ieWFXzG4dbVm5ACzX46mXmwhgTtaYENjTC3ryUxD1v6B5oPnzxR9TkLTtnRTK",
  "key31": "2gSz7Ts1WxJF5HnGcapGXhv8ni62zGmnT7keRpbLqczGGsiUGDZwPN5hnL8nK118qgqrq14dCsxgVtQvzDwyfJq8",
  "key32": "4k385RaSLd8pCVT3AckBfBsMf2dJ7cES4s7i2pt6ZFjpEb2XckkHErzmPPCdrukDUb4g37SMqRyCBXCtcVWvtpnG",
  "key33": "QZhWFPFhGZkbrREgYzztDyCcN756AWDvwV1eCtXpVviXphSyHopDX3diRtA9Ncc3DBMoDkCu9maiaeBvHEVzLy1",
  "key34": "f59wpkbV7gAHkn2dEvimNBrPdah3FKshZkRqHZFYjsNa3Qmw9PN3hjTtKMKkPfhA3BxfXEF7vXonYPmkHJWjTrP",
  "key35": "5DgRDRazTZtxWGt9x2oLXqBDumkNF7dtPqwHd5uBmhcpvez4B7AKsCHZwa21qvYGZjM5a3Nnr1rdNZdQBXbwE4o7",
  "key36": "5K3QrXZkjjt9Hm4veFVrE4YGuqPctdDpFrjnkGC4P8RTaDwGfoszidFvEc2fJdJJWXC2to89RE7jeXU3jnbKW62v",
  "key37": "61UgQuH5QuuYiBVyfgQdumLgPztNonc26aXTUrDVgszfx7xCWVVCY7cxyf2njfThUNpqbigmu8gWGKHDdQUwiqXz",
  "key38": "5B9aRJ6425nNPZKZ3CjZkB9Wm2U1GdpzdSJAj7gxQVZEymLvx57ueuFpk2ADSsty6ymJ6SrhQuA2BK7z4Xe7njnV",
  "key39": "61YQfuqWGYvvDjt4LjYSeNmc6jJckztLVUbEX5KdDSBXhayVHwbk25X6hSGKmJNyezGgviKhnEaej7W1gwxEvC2D",
  "key40": "2gNRggMyP1KJKphpPoLUUjkbXJ16jLq8HChC5PodDVofkE3unHEyo8uuWoZ16PWtimybbmpcCQrdbWNka5Gbxju",
  "key41": "4sMM2imLjMRCAGmLSKnFsQ7qzkvUWCKssc6Pje7Cpi8Gvm6gBA3tN934VcZSrPbs98pDk9bhKRnBv6dvjvADY8jX",
  "key42": "37AqcHvciKNZCe6rWnULFKkjuCubt6pRa3SUWhjQMbZ795SsTa4chNCv7kLWW6uz6ESBd5d9AivjsxL9sU7uGrP4",
  "key43": "5LvGsidhY48rgguNdbH9aNY2eT16mxWqaDfgZGVPdFpGAPEz4bfSUbAbK3Wd9YJejcFvRFE1Gw4d3ukSk58VsV7m",
  "key44": "3YphZsF8yfbfXSh2J8bT8v8rD1dhL3K8VjTLHxGXcKXJ8bG5167dG8VVq5MBeLzC5cvhNiW87RYJSNdTJ5uK4Yqn"
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
