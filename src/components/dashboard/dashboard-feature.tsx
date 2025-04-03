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
    "4ncYjeHAtvk5ei8ekBSEx7UCKxi9qVfdznz6eSZgY71WnMZawQ5WE9mVkKEftasJsBrANGujnxg8uw7oqw5rQLdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fgtpQykB8rBtd6MrNHBpBy1ziRiGcAvgj1y61YWHXBqrQw1RqZPVSSiGFmy631DHAFmxKbjXPNC8UJTapodwXpZ",
  "key1": "4haYoaDEfGCWznFgYrN4mEGPoCoLqdv4duWdnekaPZwSSh9bsAnKvgprBXm3hF1iM3XhoykdWhTPhbC3DyG9SPyd",
  "key2": "2R1C6HthAiyZGVaEJeRL6Gbr3s8B9ccqTksJmRNzqYTYTh9V4qfSBZxFhwTXnUuM83xG3gKnu5x1rSYRNNLcwAdH",
  "key3": "3x18D4QbuW8f6iL3nhSdEVxwUHdAUrCBwJiCZDdSDEURCesiNmHGWAxLPXBczZsye6WQ7iVHAAmNKQddzUR4EKU1",
  "key4": "65ommZ471GfAtg9SeiYWA1ZuLBCB81foJ6nyuRCu9URp39B4S4LHRkqVJUiLJBcGN7XtawPpchHkeohaEuuEG2X",
  "key5": "2qgUoAdBwBfVBR546vYuCHFANhnHYF5xUxHQoN1EzPKN6jcBkz4rqfmk4c17mZ5qx7UXGZhAQbSuXFbws6rM5e3K",
  "key6": "4SLzAdcrqL3nvshCVeYHyrvrSFrhwbdUBT7EoUGgQrQKWM7tZfQTg3GNKKAnMAW6cB4VmBNBzcVywwAStWRiNxhq",
  "key7": "fFFbG8Hw4dEEXcTiZooFnWsnZ5dqJGU8JChA2FJLq3MaEAnikrkQy6KsgMkiGwE6WyUqxr8Xg5QYS88ZF7HNXc8",
  "key8": "34163Wrb2CL32VMi7fkYWjCFbxoKc8dAwLfT6hU594MfT7ZMuhFyzwMuk1LH9mVsSbnm2rHkqGwY2mngfn7P3oEh",
  "key9": "3uqVAAKdXxEaEnd2rp21dxz768SneBfn7M1SAPXqR8J4upkKscPib4cv2LZb6D8WuTti3pRoNzXWyFhHP2d7GQDm",
  "key10": "331jiLBgRoxVREFvWZ8jtk5kJqikiLUvq4VQ4SdzAubUQgsu2PD96P2kEYdo5xmwdW2yRAeYpBfYxBEn1d4rEb6W",
  "key11": "jCuYXYFDfGAZUK7g5QE91tQrNa5DH7WfWtWVtorNYboCXpzXr1nAQ9kvoVqfo1GYd8z8RSSnumixNWvfEdjA87F",
  "key12": "42tjetdMUJftwyK8AeLFXT7PA9pzvKjfrf1559eSkBoVd6hTr3pwSMjJjUZ3grUngyWWnfWmz2uv3Bg6rcvZYk5S",
  "key13": "3PWH8oWCJLZsy4QwtoRHnt7JYj7aQWeN3MzLd4HML4FfFwy53dSzamM7ZFgVhGfx18enEoHGNoi13hodnNJqA6Ea",
  "key14": "zKwPWBXGv38ynRzoRvnoDPnSNMevZEH85fB7CzgwjFyTtzxPH3vSxJQcFQfA1M72ZHBb5vVk2QW2t3xcRRgZKYa",
  "key15": "rmaazRiHv8rNf9XbSL2xcrDvyKJRhnZ3yqujQirRowN5FLkQNUeCD6bWNeQ7zMkX7V4XDTUrUHCYnYEXWLj67QV",
  "key16": "4R3Tysxu6uix9gd3u69RLgtUumDcdtViHJtVK8jq6nxWmfvx2JaimHgcanjySaiMFvwuoWpUkgDRuF9w5cKkJnQ9",
  "key17": "53M8X3jK72xiLZxJYV73vZppmupusvK8KCVswym7ZqfUkzbx1uggBcdvZcz9NasvGrUYaVYm2wv9iYJSZQ6ZBdro",
  "key18": "5rAM7YurThDZzfZMnnmbz7vy4fSCXeanxNmAZKPQ3H6aoMk4oRgCsb1JEhGjY4iqofVPcbXEcBgG1SF5L4HUJJ93",
  "key19": "2Nqh5XF53sPwxUbUPCkZBSBHLfWPxsMDZa3qPJgzhjYp3wMXx614hktstU6yTKt8JxE3erE8WeJJXKatT6r9pbGN",
  "key20": "vN4t2hZRBgJH18h6Ryu3aEddfxT1pnnKxF29nCV2LAetXCQUfe6xgrLLdA7hFN9tgwRGeSS6zsgHpLmA4rf1wYs",
  "key21": "4MXBFZ8sX9QzpP1pLtTTVNq8DPB4fKL6EJFDLC3rnyXqLBAtxf4JGerqxcSKCWWUmfyU9xPh1a4xbdGgrW7JsBJY",
  "key22": "3fSAGJiZw3yqfJniEET5cXJ4JJhMbonQDUzpZtZyFkP8nTcd7Y4Ai1rKVieHd5SyHXNxrgQnqqCjEJuHc4n7F3g5",
  "key23": "5q5eYzivSmb9F52LWwt9iSNR5Ac6d9FDKDLfUVcewfcfwx87QJY2qxo2B8E5mbmkGgvgfBNQSMhaUF5cEh139b3y",
  "key24": "2GEjhdHZbWQ3C3eMDK2FyuyoZNKbsDSXgZu4HkrRyR8C3FcQCssm6aozSFbGVBe8A6z9ytKkJQRNnem9fTF1CdHh",
  "key25": "4mg6EJNfTMCS3mk9gbaZ6K7zuefKSXbgmdQQzgwkrZZdDYWPgAtdNT9n11grfgm9Z1TFE221KJzjdfNACuTYRmuf",
  "key26": "2WS161MdWrGrsQ5MMRnGQQWbwreXaMj4tDxoPmUoQnY4yJm8j5DqMU33CUAjqg8oT6SJamhYAMa9Pj6Sk5ZzDauJ",
  "key27": "5vsbiBib6D6bYmay93cDJx5CxARt4YeqXygsvwiBXRDKq1Pf6nsptMH3JTgZWrkskNNXJA12pQMxqmeMNGg777vo",
  "key28": "5KJYpxP5UTRQwWgzvPbAH3WPfPpRtsCX5zJQbdCcaVnjKimExKYfvfWV8tA6xLry4WHqibpTW49xHAmmWqJXLDG4",
  "key29": "2G3ZMywMaHwXCXiVx78wz34cqb3ZWjEKkKSCvXfKpmXCet7814uLcKghnC5sBdVxniVdvzdRtukNsqiDXCcen4Gk",
  "key30": "3YjWaC9G1jJbX8komxGU8vQ5QEbxHpNMobZy5rPv1ywLJzvSDYc7bkEjAYxjzqeN7VGexUQkbugQ81pxXb4NHdUQ",
  "key31": "5EFVz8CSz3Uk4M3SovVV67huGBS5W5Rsofq4mAxVaWLcxaxSoRsHHF4y5XffvNGqmg3tCHFfkcQ7ifH2re61D5Ph",
  "key32": "bMj8Exz6qWWPHeva1g7qRtrg4ZgL367QXeeFXSuAjBwPE4PYp9MfcDRWdaEsju9rhBQBetagSr7rxbJvYReTPUQ",
  "key33": "5GoA8dAATTaTfxw8j4VgED8N1JjU9D1RZxFwMUDwDzuGpv3iJxkxbavzpfgUPmht1o1kPpoUj8nh9zaa2wdiYfdt",
  "key34": "4BWyyYPjk7zhyAsPDpmENxgcUDoFRi9uwgHUDb4Dr2PbBAATzxKe8XyPBEs8ZmTKY3JPCqEVCLKWPk7v4LjYNnGo",
  "key35": "Vp1SFqEbiRj26T9Qg3XSeauhd6aGtboFyWsTKYTmCWPqi4Pjqqhdg19omccdJPzLPvaG7nRfitBa5pGGMsPfiTq",
  "key36": "4z162QwobasrSTF5BHnBjGAwd1DJuzr8czUjKR4umcgsZ8wbzU9LqyD37rpwAwozczSrPvBCfBPVpPTSde5ay5uC",
  "key37": "2EkhSGvb54LCfbRMPDqKbHrFVABbS4JJbAz753brRTHmYpUid7BHkGFgejgow5LD5X7uY8jb9DpDinddA5t8sndJ",
  "key38": "4URb65x6CtSofWymVq7tzmNiaPFcqHtCRNbqUayqzxJo8rNkwSnMjWwsJrQkqibKsQxHpfVRbLNWizR9ERNCxkmD",
  "key39": "4qMLsZpYzM6K6Lza2UH1N6yH5T5DQXKkjiJ8gRDSq8RReGAL8X5Xsxe6x4abbdL34Fo91HDedVmKtfNbW6Q386JR",
  "key40": "5jpiyx5AQRbepYwwAcu4wbq2HvbWn1HWSDAa88rdR9HCyJX3Dk6GyjL5tgUHPPjN598aJddFzGhAX63qne2hEf9e",
  "key41": "63NAm9pLbuVnzki16tgwBoAZ1J7wXyXcsjUn3NPSB2f3ytKZpSdtVcfk3A6PefXJBhKR9euTgFxgJXeJUZKc69gx",
  "key42": "Kb4wuXMLzrgv1ijn9yvJu51jKbjbX4REX1ZHtdRSVnQFHGGAcuqS6z9hMKUgHJbp1VLQLdLYJ1smrBmmGohy6QA",
  "key43": "3pm99aCCfoSAmexLLHpX7FAHZnm6bw7RpEfrXTXPkWAWyGWr9svhAQF7hUqEyGG2jHXsjKz9cuLML4pPjDdnvi6Q",
  "key44": "3xo41xGmVE6K1ofFb4R93h7WtGu2K4xNt3adV5LafjeSbxgd2WctVrJp7FC2gVPoEpDLiCnx9YKuTbfwn1uSVHfG",
  "key45": "5AjGHiVJzXe67iBe3cQMBLVQUmAmEkocUk9YB7VuJXBYF2shTsYadC2fLaeeL2VQXseZavCSGGss2bg4ihZvF7h8",
  "key46": "5B7L778cjVH3WvPXDfjyaqhed78ptYyM6ZvPpNfeH5RKmswHpyw77THJGHExA9un6SfCZsHj1iCMbNo2k2VGPN4f",
  "key47": "3Cyt9PMrxQfbMA3fxzQChgDDnCrHcGW4P65RvrizPAFn7895Gy97LBoXAwcRRSnFq37PnZT9gp3VpGaQwFvneBj4"
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
