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
    "3UEvqEmuV8TASH1FR9UXdcZmNZ2yr6sMHAqEEdpV9vTsZE9HMM7ZvagfTKSKAVcNGSrqzPNDTRW371o5g3WNZSpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EQE2NcsNL2p1tBgsWaMbyEgYQw46FF1TER24yNHwktNmyFyRvU2SsCG5GDi59kLVLLHL6WbGhPrSF8pmPKQx3TZ",
  "key1": "4FyAKxk8B3KZQPssDH6wsy9ATi5ne8TJzHgJyByzLGbgWXZrUSkzZ1m9jpQ4hiJon3vpGL1BqG7EmDNtQ2j8CdNs",
  "key2": "3LNpZN5gp5diQX7AdkD4a9uKzS9W8UuzBxmiDiDBTkyadSwGa5WDuuxWV6YTkcFgUVNAQLAAVCa7uMibR2aQzCmY",
  "key3": "2whsJNK9nTVVHP8YjwPahU22iGQUygFXLGEEpjmLTz8cjedTVQ1KAf3X1nQCStYWVZwXZ15hGtSyE8goAVSRC76Z",
  "key4": "44xxZYBsSntBBxzBmJMquYLg5xwzCa6WWJXdV7uLjiSJ4oiUaqeeP1LyX3BQzRkJu9EqNmo6HZdtWGZfuVPqRfeo",
  "key5": "4PMSmibJpDsKaX78bKseuS2VG3prXdywUZ2BeLeQxarSyqP3sGcmLmZyeETQBWQmrJohKZnuAk2WMpZYc5aDEaRh",
  "key6": "MqjiDXTPK2cwzWbQZuGwyiry963yBSqDMF8pcWsVhZggFu75JXKoT8ieopizetCDa2bFCpSgzmupd4axB5Tgxrs",
  "key7": "67M28Yc56hQVQEjjFcNfT8GuLWunvdhnd4tcDwFcmUvoMdDWY1AzyR44XFQaPfadEPXQR2tEtMNMuDDarPARyFjX",
  "key8": "59zwUvZYdBg1gLNUG7c4knkJTEGENcTs4HCFkChJ2NBaVstMVF2HdwDn9DX6YdhQgLemohZ4ir5tXj5K3KVBYVy9",
  "key9": "3FcMPmKDrw7WpCV9SjRKzxd5xts9AWvTXm5UD3vh9uWepKsUozBS1DwBetZVXpx2JeZDVJ4q9XB1dFaBytmKUACW",
  "key10": "3CyKQEtQUhM6y1fT39xTc5gPiCzhPSjwBDd3G7W1nWTaXyEnzfXHoY5WDNC61uMfbMfy73MrWmdmyMiRHWn6Aa7v",
  "key11": "y3nBcj4bzYg8wwqxBh3kw2SQ51znk62PMFjdvANHLcu7cKFY25Pf7xZJDCLFeH8TFxG3TDtCq9JQrDFWmbsG54s",
  "key12": "4vghUJsVZQvRoEZHBujk3H2f5orWxjsVRrb4qpiXdgovz4i6vn2kenZZ3DfyeWzAkrLM3Vj2EwcA7oMvi3ySzaK3",
  "key13": "5eU1dkvrVzXYjfmTv1fmdknaFtagrPMTmfSjeZvTjE4H5hn8WB7uoyRezpmFzbADMUww4Wg5pXjpnrQciC5fx7G5",
  "key14": "qNVuXDKoU3Gq6gYmZYFruocgYUq1xPess7c8mgCmALv5TqdNgooceWQavAgEwwxNL5Z9GGn5Y7jF72jgHuMS2Hc",
  "key15": "3r2mS76vS7PgP65f9vRSRAgRWENfrvLQYctM1GZMgHXFWxAb99GLngmLVyoeMi84uUpVXDDTH3NSfkyGzerjV72z",
  "key16": "61cTn1mHcAZxiCGMr2mSZQJcBF2oCCeVzaJPoLUwXztc98oz9chLcHUcWydGAzNj8sySf83E8wY8NC21EKHUGMwA",
  "key17": "pNQhnE2BP8BLuwWCLNAtSAMRteU4rArHV52nbsp5g3oEq9SG2fkixHMm2Rtfsk3vCrvjqYZ9c6HALYq5m5KQWQ7",
  "key18": "4ChZJipYmucftc9Hy2AzthXTVr3iX7HcfyS2pCo52DPxixRDqLKCWYrnpAuvrXB8by53wBxNLBdeQP9PTM9Xk7iA",
  "key19": "3BEDz3qfAoTkEK5VDtANDxmwUQwGbVzChKVn8EghR1sZ6dUgqYtdRpZkXNLGgs8gZs24S8X8AkaSCk1xBersJnz4",
  "key20": "2ixNJsksWY7RPcY8NgH5Xdri9uLk25PYopyk5pjXjx2ueiTKeQiqRLfAmrarbFX51CJM79k1wyD3zbEU3CYDTtvD",
  "key21": "4HLgSo6tBFh82JkDt966jFYLcvVPGR4EuYwzG4WT92oE4Lz9PK4BbhAd9erC6dhQedYcMNo6saLhsvxb35PeuQLP",
  "key22": "61yvpxp8GruQH6UdzUDtGDGirdTZKmPK8V4CMw669QnccrEdb26PehGk7um2LiYX9WM1z599DM25dnpK5juUNjz8",
  "key23": "2y7xwgyGGzV6BR3XmsnWDZE6NzHFh2Zj1sdD8r8YTeX8J4xs6vyTuvgYb2VHVKLenp4rUxQYDtEq4vetRD2YUQ4Z",
  "key24": "3mwguzDDugD6wb2jxAP2XM7Jbtacs8rwNfQ8cWJypm2SDXMcTjRo9y4UGTpzNp4827MX9zgNiFnnZc2xuw7i385n",
  "key25": "2LvxCy6T9vTpcjvtj9r7UnvCjHBCUK9DTUJFVohirdRgtUDMWkLG7dLmQYmgeQcuCczsUUinEkgmF2VKErcwNpzx",
  "key26": "59zPNpeX2WcZ4ZkmjHDGWQyF89xPhBBcKsCumpb9MFtKSPknwJdt9S48oRWd5gCE7SXhU519vPBEvWWmKXHW6X8K",
  "key27": "46EVvy48NwYtPaQXzg3KaYFyLTAv8mTgyndgEdMrWsaircf5q3iBFmzow5XRucJKmxCkbK7RpXANVsgUMuPe9yhe",
  "key28": "66KXBeBKc46RyTQEw97fwPggM9CiU83jReUVx9w9ze2Xua8U923oHS4moAWH5TahWKuLRkqg9PdFdRqxzHXu7kLZ",
  "key29": "2cWoRyuzJTmpYgcds6hFkokW3UtAPTyz9RHZZ42wrWs8eQMaXs8RTX8ZGd36xoyhn34QYSjXB6X64VY5yUh4qDG",
  "key30": "3g87zNCv8Xnc8ukKupeGBQiJZV9mH1YSTLSdLrMz175RtN7GNt63No5i5VE37xmt8gG224o6zA6Y86gnDuGm5X6m",
  "key31": "5UrCMQmpTTYSErRzg8qGZnhhU5v5vFPJRYUwPMrZ4sRpbTK5HsQRgTYk1WgCDmDUZiQphi8x5ryrZGdt9dvrhs3y",
  "key32": "jtHCima9WwqDneMzYgwWgJd4LZeHeHWz2XgH192Fn4XrHAcA8MQQv7SJWVLZdMhpnqhaLXoxAXn9dT6jFWp2ekZ",
  "key33": "4HH8NCsA2E1VLdWPGQcWZ7cjkvnGG5madGMs7m5BVxhiAz69nY9nN1Dpm4pnbWHp5h2g4F4NVPzHH9xLnou8qwLc",
  "key34": "58vVvuaeQTsAcZQk6tuNqQnmtfttu7BSUyMxRS18EZy43vevhE3t7nVoUHmYRvqMDkybkmdvcFQw9ytrDZJLp6aD",
  "key35": "2wMBm1E18g2fFbSWJ3FwG45R31GVmmHQi46qin6VLm7TJ3yUbmJ4pyo5atpDtJPzSUYKeUsySm3rmi5vxPhSYyNk",
  "key36": "XrYTzZsNDEQcuJVHFK5on96nLwrPkpAKYTqeaMiBXZZUdfxUbmNEYFiPujLAqY3F59ZmPaktWkKMYhbaL9TyyPz",
  "key37": "3iebRpMpoEGQSLBmvgVQrFhM2uAEcRoZEJKPCKmeWNrGABMstr3BoRtpaQg7vpschwmqZxPH8DZBWuxF1hVCYNTz",
  "key38": "3JuxCbVv5XxGmbdvcL1zsyCunxvT3UKiw4Hawsk1iHhwTdzDRHiWd9pyKBUdVmP1WFeTCRXVcrwfEETNDFAWQD9F",
  "key39": "3yayJFUcU37drENkSFG9WwyVKt8Skq2m1Av4esHHU1ND9dE2KfWvhqYj4fj5ByvKok166YtDuoqb6GxKaYzSdAbB",
  "key40": "5oJZuq2qyBP5sWMyyYeMo4LLD7NyBaKt4i494XfcU5DGVfeUeTdzeMLdDhcKC9BuhaNRCHd24DH9pisK7i3MGVKV",
  "key41": "42HD4umpJKS33CA2LiVqFMWu5dBRypfXg6X6tcj2qpbMcKubUoTCnQeQoFuf7k1adt2pDBKa1sCyWEz2uDpbffge",
  "key42": "5Fcx1r7auze3wzGGPRK1eNDtrfsZtRsBh3EKpq2iBAgVHcLv4N4WqnEBgYPNSHHnaERhkNqUUpv3GUCaRRd3QvLQ",
  "key43": "A1cNrChumGxWbvZeLvSayXDRQVvuH5iXFqUA7n7HHr7Amdkt97hYUNrHccsyFXaznyX1Dq8D25gutGFdvgcKEMQ",
  "key44": "4s4P37eLTFsVMg1zXQt7FTcygQnirYTi1aDe3FDtQ3qzzwLPeTDhs2wuLgfKWrRSTGLiNToLSvy15FUVJ5jhJVP1"
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
