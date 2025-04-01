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
    "2iSfutWjUrff2PjV3DAodZX8oVBazn2ocqqqspUvpXZ2xb4ZRaixSEpDSq8kdLM9Ay9jbwU3dZdBJyH2t6nVd4TB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "452sbuTc54PfDJYt8h377nybbThkHD9nvHNv6mYqpGxK9Xgs9CF7ccE85K1ob5PdRVxxF3v48WX6PFF7jG9U6faT",
  "key1": "3iW9qSryVX4X11ejRYhNWUqVs6xBC8fUM5vQLf1DKCx3cUgxvH5fsRyMn1e6ckKtJVUgsm3JnCWofEBys75RgxVa",
  "key2": "3hTUdaM5iGDs4tH2LcZH5H9JHnuc8D4s5Z4L3pgMEdQxVzc2Hc1dkMziuX3QT12XRTk8hfNM7q8XhmkuVotnTPqt",
  "key3": "2XoXStronRHBbJnMXK8PGydT1mr5rvfkbvQbeb8cSjbH46aEf3fmfBQYXJ5KLfpU5burY7FcUvdLeM62P3WqfoFh",
  "key4": "5PWL3ThfPZwh1ebB4e7qUCJH2YLjcECPRcfRtcdsYz7okH9N7vyh3Tk4SwfMdSMUjYw8y1UwZkye3DZU3vBQSb6i",
  "key5": "nNUSAbv8qBefM43TQDKBCf1Ww4gLNrJUUCqxqXrQ5HBW4d9A5JChzC5Hcj9VpeJMKNNAGQoTZ6WnXEaBFvJzjX4",
  "key6": "5UkKPW48AynjYE7H5ud5ddwHLj4tNe2tQghkCCdtKmw9jfsXkUYxZeqXn5xNWarWty6fuUbRMNacNTPQkxYdV5De",
  "key7": "5is3kWWBZXosiPVL9UggWA8S59LzHmqf2cYRbjDBX4HHH71H4CQ6L1A3BGb3HXS8jdFjnPBrD8a5ys9HsNp2PSHg",
  "key8": "gKTkz2yChQNCva2yEoN1a1HyD9GXhSZr71nENc81rCsUfhd1Tofkc5qpvmfJrdZjhEdXccJgsM88ypsXX7tF3Qb",
  "key9": "5knMACZkZF3hQTJSXEPmwzoLuNm9DTz41EPn7EGpXVSLgCFbEvHsJxT56z4Zn1cgVG9ZCe1MUPKwoNRmusTp5qMV",
  "key10": "3XoxvFsUekDds7TF3P8RLdtQhaHWEfrpENrQnmjiEUrL1cSotMdgiJnfPdtjtTMBPQkGK8C8PG6FtEnaznoj2hLA",
  "key11": "4Q8uR6jFsB5kCZVRjCjzAjApMpfPcDdDGprvo5WtFPG76Y13kHkCYyuZJ5uz56wgXSDaL2oNhYUxUjKQhJvEVPpF",
  "key12": "4ybLmnEi5Lca6AJ73oH6uFermQvYv67KaTgT3mrgnb5352uEJN11X9mWEpauE6363uJRBDtZF5W11rYWrPzfTNQm",
  "key13": "65h5rwzw5JfSdo87hvcaxRHw9XGYPG1uZY2ZyAvaNRZeyyVcka8rx3sH3DAUGxEYfhic6vpvewivBhKGmhtnG5jd",
  "key14": "f5hrFz9w9o69f3idxdJ4K7qtCTuXYGbAudqcJ3yajchyk9jkZPHrHNXNCBKKzzjEdAfWDKepVJZuMqKMvdtWzyj",
  "key15": "3AtVkJzhPpbzjDPCRzwXhkQyvCRTUm4MasighgAWC3DzJYH29V9TEVEy6nUoZMGvAaDoiDRANWgxLKVSj3qNrqtA",
  "key16": "2eMp17WMTEuNXiGMgw9KoM74QxSMu8X7TccmDh6HT8FmCDnWKVmxUF3zc7xeC31XhG6NuCF8rXCCxx1jPc75AtDn",
  "key17": "35z7Vexb4NqsFPVKE8xhzTmcUTV2w9HSNR5mrMepi65BT3WxjgPK34kH1Pit22FzPcoLnzGMTjeP22fkRXhHarYX",
  "key18": "2gdDX5cM129pndyG9vN5JiNVd96EJnwvdxTJoa3xrMH29z3EUgpJFqjgFbRSw2zjV5Km4NnMk2tYbr1gaKAk8A9F",
  "key19": "2W4bfqJiXQB3bw4Az5X7C8351PYiRMtR47qD7Mtw4pgqKDkn367f9MupfBhHzCrH3ds2AKrv4jPAPwbNhzhFEn4P",
  "key20": "4WzhafMYWqQpJBvYWpB8Edq14rF59nEL82XJpQJbq57t4itkUQhQBE3fm6uqSME9Ec8wJFoCkJjrL55zJJnYKPbF",
  "key21": "53NcSTEFVHZTkKEpKi2FUJyTL7ZgteU45bDHat1zooRvZcjQVoGL8tgNKEUMFTV6XRokL2bicdthuqy78k6Hp9k2",
  "key22": "5yuV3TX2pTHno5hspsW1bSstBRTPH8WG1GA7ZvKv4CgN96XTwzNHzhbabWFT3Gz9FU4Q2Fu1pT1AtPp6U4vy6UVW",
  "key23": "48BB2AXyRy7UruDZBnD1TpaiMk5XM9F8ShbmXawSGp6SWXWzuF3WeoWe3K1vtTg8Z7XBfW46MXVpH1K3uKaLFnZr",
  "key24": "4cfyguR38pEQ9ZuZxuyafEwBNnFhmGWiUDtjJAcudk2732Ng1qQgGEyQDaomSfon7cdRYmnfMdzoe62pmPjnUPT2",
  "key25": "iaHXxsZEyuuMASJbeWSYDYuCZi51J2b9noHqiP9fcNfyHBe3JM6o9h8V3hmURYuc12ANscAJARpU9ts7KD1NgJp",
  "key26": "4LqNUoyeL64iafhWST8BdDZoinL2F7YTDYUTppmBKRegt3axMssDU2JLovaZpmeaABrjCbNAjuobcZoNuso7Y7dZ",
  "key27": "4yfGregauC56GzRc8CT3oA8BD4nGLShjHZPumXyersbaeTUyDVpbB2n1ZpuvMGofQGEft7EGCkkkzZpn87uHuTa8",
  "key28": "3JRna49Cckg1Xm1x8ej8w9ux5YPsXy7eBSk2PB5AwoWMrQSP82DSeTmks5kU14Fz5dwrdwqN7y55XzzcAaQ9XTA1",
  "key29": "2XCwJsJbL4SqrMp5eUSj85FuhVCL3TKX6P2onLzFsg6fKPtkYDTNbxKzhKgbBCajMHwr9sQUUF5UT5Aqv3ULjCFc",
  "key30": "BvvGfjBrThztNjdDtCxsqE4Tnajfu4Z4GjwRgpjAUaAhCC1egwdJfCNsVvdB2puaDX543TbSNzPYNpfdipGV34X",
  "key31": "3i4P9GjjNkZ6w7Shnn73veJxkwgoj9zd5eyZBp3qtK4ZDBNVEhhDFTVtU2kh55AJujWMJZAiQLVi95G9MKz4t3hM",
  "key32": "3n2Q3QtryDquqTcB8H5sR8dPZSMWJkaw9vDCwf7sMyBH62AuFjkhA2p7F8uNtGwhWyb2NCbLZCdiad4RxLTwjoze",
  "key33": "ZNxGSRAhNjKUiM9WS1Hqi1RZfoJbBxmmHHdppmzLwi6Y88c8vazRiG8BppveMGD24oMb8yfS8nFJTqS2Fn2YEQR",
  "key34": "3T3TsPrQvZj117gM9iRAyyLAwnb5DTh4tFsJMxDGvdqB5UHpF3QnWqKDobKBYy4LTZS6Mq4r2J9xGJ1ZavMJtG19",
  "key35": "42nwQBMF8ekyciFRLdgypkriMnhUdu2xAvV6icFFKoCpsrsmpx8A399FHEhj6TdqbAuJBU4PfuSuGn8YRRQokTwU",
  "key36": "5QRPE82UJMFDf7wuhAt7fbcb8pWztduAVCJQvWcgA62ve9j2XbB7N4HJ5YY1pPsgkLSMpDHdeLwck6fBYm1dnJvA",
  "key37": "4qDyLEZuGXP4BYTPedfJaKb3tj79m8BdcvuRisFxZXgc8ZgVVWQSo93r6yoz9ooGVokzDyG3ptRvZYM44BAzrPqr",
  "key38": "4ue9U9J2WNA9uMdb1yDGnaejct5jenEguzKe3svT6aAPMXfwZBujHUUnReaHVZHXAUMe5yFHxTLjQKZTFQPvP51j",
  "key39": "4nQs7jMcQMRETntmprH2YZn24gNTzPzhWrmPXYwxrbuJZAftTDubeuHzoHT6VAsXDqfQPe4G8gY57AKtDensyAqK",
  "key40": "5xunbM4vABuRUmKMxLQaXN2CHueQuSEajo1prrsCuNiznr3tNFrcDGSpRWue8Zx3dvAvHDowHxhNoNmso6nfgXDc",
  "key41": "4MCAZVpL21L9zzztsKYdHo6kTcovyXbhrRhHU81yc64bdRrEz2tNpKwU9WkdKXzQ3H2mGD1yAEWPxGE3Fu8bCp7P",
  "key42": "qBj6xRZE2qWgrUepoQQJaiS2bx3BUR5BzyWP5wqdDZFb2oE4iXusQxKNotCQ3spvhHxF8wKmy596Cwcz6zRkd7H",
  "key43": "59gKH3yQeiWYcCSUZmVJagSn5DFrVMbojuu6ay7HzwUo4ECNgbd6AsWpKFRNDwgykaMdnyAzah5xhdXcKDGdXCe7",
  "key44": "2ZSoFMqGhCHxgrBrLFju6REnEDu8zhrybK49v2z9EsUTFbFwCZFtZd3SSJkXvDonnLVZ4bneWgkPMKTYWmunygMs",
  "key45": "5RBst1zcFJ2BcTesLNJR61xitiSYNjkPTvxrksjyy8dKXv6K9GRBsYFxdYgtKxLFGGFH7KkrjJqusp45RAAywC4D",
  "key46": "4WqUWJbMfg9HQtGvcksrG1dJaYsdkB5F9GthYf3AU2hU3pPjVnWcKLai3bZZijtcRKpQidrcCxwm4FUYRAauug4s",
  "key47": "2y9aJ6MNtpvtx2xZd3pUdpoYHuEBhtNXokXsHguNRow8CDjXLAnSXgdKmcLpjLxThzMdRrUSsiAbMWPttx1SE1LL",
  "key48": "2nJFVS2YtWhyWPWJpxhWxDP9mKRw7FyQ6UqFxEoj3NufvaoCUC76TVcpXywmrfmEcyayVrr8a91ngBbcmg8n98q4"
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
