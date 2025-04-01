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
    "qxYjCFfsUE3yxZXtArc5zPutqXZ9owqbE74txNbUSPkBAZGkrRkuQCN7jXsNuphKtnFKU6cUk6RWS1BsyzZ78Fz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iHPyJ13wPWEsyP6YTVXD2P9XYdQrzu6DTxni4MU3TZBtHSubt2mNdVwoekk8wFC5Fe2AQSxJQDRzV1scfPfBXkv",
  "key1": "CnDvVcevFsXBfja3ro9hQ3y4Xd2GFQNWbzozkNrYJ9dYeSkQKmnqQZgHx9NXBdSCtdybjVsLX9ZHKSeXcJ8g9cG",
  "key2": "4J1HLAD7AM7MJv9Nkxypau2r7QfRqFNVqGstk1TSVhn1z2fVF5CwbaDYvQqnqD7yYqvD9CTXk3jJn6DYMtme4rrG",
  "key3": "3cjYByaeqLZXrbNQMa9r3rMDk4xjfK1pD2qkLsDo1tBDCYuXbG8yLXYhpqyNnQ6KGgFAqP8YgjWgAwfPq1DXyt3x",
  "key4": "45iGqUBeTNSNSnxYizx1kR8rrMeXz7rpJSZvqTonLuwoEJ9b9fcayp3mx97GFu7p8d5PWc28iwnnXWxzrZMVzRs7",
  "key5": "5Z2nt93r7LzGXXUqggZ8h9pX58XswetAjJqaKJn9M49BgRQr4n7y2pGpHA6PkJYccSnxeDyUgxrtk8GqLKZY4Sjb",
  "key6": "3oJU57Xb6ScwHELmHx8X8BL32ej8ZaGvSXKT7XoC8M2xS441RJ79WEhrEXfJd23JvDTkHACcYRUweojM8NpL7uXK",
  "key7": "JcsBY37dDKNthZguo32nxeMJ1QXNpMZWgSEgFBCiu7uYKn6LRJjcoM2EJDuXT5QKdxrYjwKDTAxPTvGzeSEgxjP",
  "key8": "45rF4dyucxZaFM8CPYa69CrrLL2nfSATw2kToBYuSMdW9mF2t3ifVyJrosQ84oicCbHkGgQ5mChpAyY6yg1mLdHp",
  "key9": "3Y6V3evocRLwuGDEb2SCiBkQCaSQGH9nnveRo4Zx8WrjYAF1WemnV1ybBH6kFQD5DSv1Cc8CqtrPZhNwr8ZGFZXi",
  "key10": "3D86z97Lof3yMwt1KKfzFbyMQWJPp8rN9XnSsJb6docmNBbuaekmXduaafjobjotduk2Cu3njW4XWCfGAe7ammTb",
  "key11": "2FZeDMyiiH5kDk9hxJMovumEjHXAmeFM4Y8ZF4wtesfRkeFRew3DSjDLUFb8j5qYqo7DhWHmXNd28B6pE21SnVsN",
  "key12": "4QytCXCcoH7xa1xD8cVN6chwQHF2R7vX9XUTyVNr7kRPa5GPjnapZQ3W6hvb98SNuTWxMneBCAbQ5rsvF6rKk9j6",
  "key13": "2FEaWFi7WG1ZrQVRGbcZdiW6fPLhNSkBW6Jumn6eug9Qcaz2vpSkg83QYG9TsjP6F6BzRgcTjur1QmGrYT2SqbW9",
  "key14": "3dL4zAcgttiP6U8sTQunb5UuCwrpRCt1rvTBEpUgjAmoTRdYZJ5qgW8JgCRBf4biQLti85aGvU4MU8nqoBnnUMTc",
  "key15": "2nNGRFzwjquY1awjSs3vKqSnmxPJTDMeu53Fw6Yrw9kuHPWBCvKyhSS5CAZFTN7At6WgJ3m79ukoF9b5VroviAah",
  "key16": "4X8DYPWBRjicRqxNzGbDaRdv2DRAPzqgnDxnkrct7dGujho4k5ySkTaVce4rH7Zvo7Xcs32EB2Naui6t5N3rNixV",
  "key17": "G9v4xJqmPeYKqKoSJFERGHHfCMiiBWtvqDqDNKh3Ag949Cb9uhUJPUw9w5ZwHLaChMBkrv2phUCYy9f5otixgJZ",
  "key18": "EhbtnHxj26BK9NDV3BcM6X2qkQSerkRe1766czYA92fEgGyTeZN7uf9wTUWoqB33Ms8S5hcyhBt4okEuszAiSps",
  "key19": "f58nFfbwhkiqkYpUqdKi8ZGR9orUmckAqEyMh1kyjgwgDvt5zK7WSdzxx4yvyt7Tn8h6yU4FQwMLRnE2no7FqZ2",
  "key20": "wfeB9Y3D94WMGfJQgdrZndzkb2LD8BJT4iF3rH5H3VtkVurzJemn9d861entzD6EyMDYcwW2RsWnWtL7E69iu2k",
  "key21": "4tCDLDAKPGKmLaQNrMLvR3fyC8Uqf7ZHaH2ryGADiaKp35MPrQExJCrhxzJC2qKfjosGP7neuG7didYGTqns9CPS",
  "key22": "61n5vjbopyLdpHEcB595DVu3E3nBhnb5iqEzxBgerWEV9igaccQ7JgMgUaepCrt3bjACjDamNSPnqswQmmKxKoGv",
  "key23": "4dKiTnHTznwn78ira2dAgTrJnbMpHe4G3go1tiYH5PukxRxNYGMjTn2fpJhXV8Qj3dMtjvySxG7w6KAF6sgPbgTz",
  "key24": "4RsUxWq6YqPbJPNdxoEdXEqq3HSuXiuSiAP4CtqQBaPCByfcG5NzeFJVTRJZD5xceruUsRVx2GoL7zewei7hBXru",
  "key25": "5dfyKKT6SJQEaqXHQvaWxkiMhY9tDiybJ4bMgegLrfSZnXVzJnqZmxiD8dNwZ7GQZ6zFwYDN9j1gP1JWJzLGs5az",
  "key26": "5b4Zm3VH8HQa2tDFPqavJ3mAJuicgUwdvVD2PxtEgDTzgB19tGrtdg6T7EfMV1tZxzj6oGpfyM1SwZVoMaf4vQEi",
  "key27": "RSCFYbvHnXrEcEdyrvUjMuDhxPC9NC1kpLD3xAz52KbmpTdJ8tK72AmV25cfP3E9af1LNaCKj6B3zLs8odkoefs",
  "key28": "3k68Rce5tzzx1RXqgbMwM7AHTjA3eMAoqbabxbJWe1fsQEwXrEtvrXyGpRkskECmnna5ojuExWWNQkYTKp1QTdeq",
  "key29": "LQfq9kdsqLUyBvAg6CTysXs1bngV2QWxBNx6Br7i3wkZv5coHWebDEem5FQHdyBokrva9dZbtVeoKFrE1DdLeoG",
  "key30": "4KP8MZe8utntqgPFa8rBihQmKGyu6omd6h4MNmcjGBWWeUJqitVFCpPBHHequWp3LieSir11h2NczWD98gxagYqt",
  "key31": "3Sfqw2kq6yaA8hn444o8CJ6dp1GLodTTVZPmQuEe1RXrEQHfZCMVxp1kZe3JSPSXRuK4dixHxRYJoF3MnPYFWhqo",
  "key32": "qHLgnFCRbKFKjivtDenmGx4u5yTbG2XijLE56y1tKhoHUcDD679bpE6Zx8oHWDkkaBs2NExFugFvA4xqxee1tBx",
  "key33": "25jcK1QnKkn3U8U21Qb37bUv3Gh2QHDa9U4cbGnnTcvugiicY9c8NEoYKD78yKppwNkWpgctRZVWYycrgyAFa2Jz",
  "key34": "45wrtQBPBQazpdUR3oT7p4oC5hgNLnytharijMs4ZxZ5MBJ3bvUFH6ScvbWJ67MD4vMhD2B1cjPtw95SyrLMSSNi",
  "key35": "wQcxGQWgSuhEPgav8KQXJfPgTSRhmCcTyvLY4NhaT62ct8oe3hFtMXPgAHYaqMq5Zmzhag4r88MGtjw3pxqVpgM",
  "key36": "5k49j8QKtKPR2eSsy5if4a4BbZAJngsHWuPtvPHnKVyyLPUTKy6PqXuW4crq8dca9Kta3Nj1xn1LGTYT3UQgYYhe",
  "key37": "3EGYMFzWTobfaoS1mCjYox9bBAnxB2fBXya1Ki21GFe1vfZRpkHrLz1PkHP1fwVJbqFHyToaqrmUtYyuDqwhmRBo",
  "key38": "3f4xnTzSKkLTDdiTNfADVMHQHMwggMmDTrHLwf68d6BWAR3Lpg36Pn8iAXSGsRsjtDwkBREUyLKKmjAR79kZogvY",
  "key39": "2PSBMKqvfSxSkBK6yRizdDaozaxV7XfYQQc1j8EdqwFw8KtHusqBTFP1SuGvfPhmc1jvkW3Ycf1b3Me3sKpTkvbM",
  "key40": "5zBBU6vBbg3TN6Fmvdck4cuhiG3Uc11D71WFDwCo3ihDrDCQBpNLQTv4ebeTh2nPYw41GQLuK7omQSepoUYSi8Hm",
  "key41": "VSZsT7pmuVmCqWKsEQXkkJ3qmALXg6JFwnGnfLZeLxrnkezV3q7Gtp9mfeZxSDwT4RQdxnMmL4Wne4z5hw6eo8U",
  "key42": "2NJzsKmttg8KofcJ3vCV23Zgdzo7QPu51Qm7BP3HxgHVqGwc8wTzm5qinuSVj9iTwx5HjpQNGqMGYitbZ7yWEmsc"
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
