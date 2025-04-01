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
    "5dTHdTBHYb7zYiHDeKFb9djgFxZDViUFNM9Dvz7sXExh4xHV3B62QS7TvBxKTAKciW2Qxa79DUU1vxvBYCtPpiUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hSGcK7FEexdXuhTGiDqdBDsfrWuZ5U9HWJJWESF7vez8LspZ3ym5CmiM9p1EXyDzYi377Nppz7ccpW2PfUVU3mU",
  "key1": "5C6e1LABYg8A7eyMzsxGm1ZHEafD7F8pxBQLU964gH8Z52qjbaRcx1mgMKFftKUp4ewcNkEbJ9hYMd2phkRRh8j4",
  "key2": "3ycWusawiDzAodDLYGbfZiz6SE949GoPHA5Z2t3r95a7piX2NgdgusVSnSUEz68Z9DatynrnCsvBWyDCZ8QdN1js",
  "key3": "9nGqnv7zY3QFJ2xyQdMjVFVrXf5e6FWVuNLaZ2zAB3ceNunfaFpHxwNXuPwzi4bqRQN2zWGmzYaG7dPCwT6RdQ8",
  "key4": "WBbmKv3RAvizFJ3fEZg1EYD5HH6PZLbiP8M4F9VTFBemQjneTp2uexEtL6kqfvytjptFfGTgCGrVJiabWLL8fAb",
  "key5": "5zbz5dGGkV96aUVwrPA1K2NuRtT12pLnZYCu2MHimStfLZGrtsXaA8jhR9ZR1xGRzkitVUXCcmtSz2aPLUZZfgib",
  "key6": "2d9nymFPgjiGLftdBT6UGXtxi5eiujdTi1B4GvJJ5EqJUwv47fVqnCxhPPbm1MsAFwkroZRtnof4VC82SPpSsyXq",
  "key7": "4gfHxhVSEAJEZTo34wZz4zSCC1LH8iyyyaWCg1GiTWpSs3wXXk8wfgh1zyu9DDt4MYyoZxMuugqermmAo74ydEd7",
  "key8": "2tUB29vietg9eEM54jq1E69VX5gdY338PaEE9ztZUQCipuEabddC9CWyN8uQXYASktQn3DeCXEBWt29Pw9RHCFS8",
  "key9": "5S8FZGwL71LHgRvDavxPL3Z2geBWd3D85XYaVBvmcZoCc6TQv2TqYsNQaueZVQTbh6mn3nxL7g2vBWtfjcUUtfSE",
  "key10": "FzTCePdD59HUdRrr3AAqAtHxHt5We1MGF6YkS2fMwDfiXn5ovUR4dTfnx3B7HZkCsgqYjiBsAF5pzbeCHsFPQAJ",
  "key11": "37cwc36BwBN7SrUyHiA3TDi2pL1PRwU33ti7RoTcWysVaquF1SNeGzsvYfnfoaTKGwiGXcP7LUv4sMLxoFDYvE2m",
  "key12": "5YyMcgUEsEdoqNfRFeboh7bYe3hxL7WZRV8GoCoFbxpEbq1ibJfV63YccumaepqD8LH6atvWGo5nUPKPrtBUg4oW",
  "key13": "3EAzWkdBWHGhKh16TKtDz1RuhBtW9Hbs2qrXufJi9MSzczmLhYLnUa9PyVnQEL6PpGhpNPhLiB6bv7VVVRq6N5js",
  "key14": "4QPwD22mtWGEHtKgcE38EgBpbk4KrSCz4bEC6ipgWX48a8tfitndLeRCgEHawsWFRcQSv5qPcogQugcWfgsC93JA",
  "key15": "2PGSFT63UXTm4mETW94HoFN1W7nXkpqfYb5qS82xBuFfMyaqrNTk6RVrrfCDDUQPqqJZEAX5c63ieA9iKKUPkb8t",
  "key16": "62Mt394ZftCs37q5pVaqXPCkGekBWiPvGgfUtasHfQquUaUX7VafsK3Tni2EjWwA3iQLTXQT2KGJc4v4p6hmegnn",
  "key17": "44KbW21oqpAHnt4LAyTzU67s2xumsrrs5KJzyW6HXWETDL9U8xH28YYTEggzfELqASMRwxMW2LaW3CLSDG4JUwYj",
  "key18": "4fKLcbdQJhVzW4VKmgzkGSNXWEme6wUwyyDGUrqWEH8y88hESFWeMZDR9w1rNGvG9H6AEW3igYJbq7uRCoxbXx41",
  "key19": "5q6Aj7DPJW9qPcziDyfa8zurYbhG2SQg2ap62BPF8xmPJthRDmCDcvm5kG3XbxhhhgabdCTtyYw3hGHdLgHMLq6H",
  "key20": "86uv3h9fsrfeceztL2TLrzYLWmsZBHm7nZFR4esj9Qin68Z6bUNzVLsCmsj555QXuwawtHig914wFiTAFUhUAdE",
  "key21": "5JnQ5a1ULFBtSoymhKS8S9QNVfu6AxoWeTy8bDyJQWibWseZUcruhQEfNqXmFC4GyQvYg9YzDAjFwxbTXLpUGKfh",
  "key22": "3vkZVvLD66QBbxTqoSpXXYKAEMTeEadHThSYmAywzxQTxLmiM8JoQXGh2SYEqDcJTsmXgwtwG5adFn9bykLeGx6H",
  "key23": "5WEvdagaVG8W74ARquSAC36jGxcEJQgiLHR1FZdzvcVh6BtVVa66A4UuYNqhey6t4Q4hsJsRDZikZbwxhyAxhRaq",
  "key24": "5ujPEjWmwkwSmrdMS6Dhi2on8XVPc9V9C1xSU37PzEyk737Mc4QhqCFwqbRp2vSFavYxdUrbZsNJhWhYZTQkLKBV",
  "key25": "2L9aieVwCDp6EJpwQuKrMn9rBnuMpCYKLJsi41A33G9XzXt9QdZxtSKkaHunr2zvpkA3xJ6hUQRmLeapk76fTXHj",
  "key26": "4QLapP2eomDXQAsFU2SdpQRvx58UDHUYJuGc4wb1EpoEGdZSBsAZ1V9wXH3ypxatsQ4vHiR2axeJMsFJqQvGMgED",
  "key27": "3MX4vrKxau1tjSFBxiEgqRAjEGL3DTnubQhfBRnVBKFkPGgGem9sYMEzqD7ZuRpENEZRgrjbe2Bj4TFDMPdWpZDP",
  "key28": "5wqjkWy6EVrkA921Bbp5vossCbqqS5dGAfAHL4nQHsNswgjNc3at2hyEGK5kcNM3jZHkZK7bocZWt1bWtEh37EjU",
  "key29": "4KpqjVCEVqbEWCs8yFVuyGT9LqLqVG3kuQbU4yEirigxijUej7hUfpRHLohGqP9wKozEoRjVJwEk4cQYxq8XDXfU",
  "key30": "Y29mFeNrzh9ucGdYYBYcZmGTMEA2ah3K5Aj8UxfbLtxhNbEkh9gUk7Ewk8gvyEQSo7FV2rTBrg31CSbV63j4Xvj",
  "key31": "Po9bJ5KccBXouCda9VG8Q6XojKo5Pjah54x7DoHLTKrmeDiRGk5U9V6jrSQqW22rrEeG3zupZjASkjHHDAtudEo",
  "key32": "2dg734n4BSFLgjzF8fPo4fadTLXfEUhsMTtdDmhTZdP95C7kVc9x24XtzKAvDz7UJ6LVaE5ofCoR9Xc1AsqWFNLH",
  "key33": "4fPoBPu9m2xa93Lx5F97cRPryt1W1wutLU1VPiqS8c2e4KNrSfVhboZouQKswg4EDUMGy55NqmUGJ2rMWEF6ZDLq",
  "key34": "4VqXhFP6j3Ah458YtykGit3htS5UyNwsrVrcSFnn36XBEPZdtRuonbLSnawkFcWsNUsmHsc4qVkVdC1AgqNicX64",
  "key35": "4C6zdEB2RW16tFFCHW93y3sCXwWwzuT1d9s1hGFvFm2Hid9JepChVEaFJNRbYKgjQMC6pBsVXS3eNxhuXnpWbLfr",
  "key36": "53ZVRp2VLXMCqWQed5GfF76o4sMikT3sXMEoNZFCCVbQwbwXSgAPAEe6wX5Hd2LC9tUvj14MfvCn8FnncDpvN6Fo",
  "key37": "3Y59qpi72qxNpJhFhfZb1ckdzdQz6UssnkRnZTpHx3jKbjjpmVZTJ7qa4ybVSdnRkCrUpKUpjUmDwtVNBuu1So2P",
  "key38": "7PRj8wBWmGFguUSWBuwBBiLs1dvMfdx62MtdhBjPeJFBwXBgkcwVpXFE1jMhcM7u61NhDPkUH3GygcemuCqQwua",
  "key39": "221cgLkvFESUcNxZ18H1PhrASNSPYjVUFSGoBkLLHedti4nYT93Gt8PCDRFhyVECvGGaDxmxAEH9TdPRNBehDTnB"
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
