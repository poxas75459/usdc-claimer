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
    "3zoi8rNYU3GoXarJwG7Lq7AXP7RneYsc1vSfNiHbzDpmFbTdM3Boq45P7U3apk4hH21uVaRxuyx27ECZgVTE4724"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TMMrpu5GPtv4Zv5PPTK2suPXZMpRo7N5Q1Ck9vGGr2pGPh9S3PRtQ5TKonjUGMh3uVm6i7HQEaGxp6XTsbwm8ud",
  "key1": "4ksPz2RBRUQTsG85KRkrge3VkhpUS8KY1TeKHYjwQvyP9YkoSsYYPmLAE46ha7dPpdRctoyZ2hfHAF4LnSm3V8dV",
  "key2": "5ixpPyuANYEkABJ4x666oTKAAti8jPGeZmVXaD8ARB8wVKKiusu7vsnRoa1u69HcpPaoBH3F3md7WMnxUe2rMnwg",
  "key3": "5fq8P2Efbwt2X4PmzVU3cKB9rukqg7YLbPPSoGR6CNDrAz7rK1FYX1ensxZrn1GDDQJ5qxGGCWGi8wXuKCynkR7F",
  "key4": "4JVhSDt8T672ZJs3L1seonuYPTn4whixLCL5kkNKs6nNGX2GuSvZzyeFFwWaMamM746g3C5DsZr1AHSvZj1KdJE1",
  "key5": "2JAvaT6uJ7tYmnHzaSMvCViaTvHSgmUqEVPZee8HVaE6aG8uGEqwW4299abxLckxKb8P3FZwebSPD6qFkn5XoaAq",
  "key6": "5r6FcdFWv1NbciZdrF6i22edFd1VP37azsME7RcR4xcyqTtmW8qnpU6Kvq32cEngLKLu9SSxK44cRALfFG9YCjse",
  "key7": "3CqQAo7N7vKtLeHT6JTGbSfgvmcvkubhoXvsn5va1m29oA3iczYdDCFxG1VGB2tghjnUvn1KxQRAManFgtpm8gnJ",
  "key8": "2k7d4D5un7CSTbr4zcBLeGysFf1JrWBq6Bo2p6dVSuRHmtweqM5xFYKHchfcaVezoQxQgBGDkM1VUBoghtj5s96z",
  "key9": "5sjv87N3bAoyQncsrZjWmsYmdypyiorG1fFRuj9t1j3hxcryvSg4z263gYFgL47DmAKTisppWSmEMS4oBh3S5vhr",
  "key10": "4X1RZUDh5Y3oApiT3xnXAzjoABaFDu1gbnFRYd9vKKwRqDmXGgkqAJpX11otTws1mmgEWFwT2Mp5tTcNTW8EhUMy",
  "key11": "3WgzffmXTnjHGnyM7vEUok8aHYY4BQ42eVQsfVAUn1ccn2HpmEt2bcDMTjAQ1bPvvFcMeBjwrBXgMw6L6T1ZgjD1",
  "key12": "66cPTdasUcCvNvJ8gEzg7Y4ayJ4hSppaH4aYiXBJXghqna6uNZbRb4frousKXA43P1R8jZbixzedMrnw5kjn4vXn",
  "key13": "292xQXDtmRGzXiDoJwyEudAxn7DLZifz3GutP2Pp6PYNYdGWyd1XRVTaD9UmRL2Xp5Ffmh9BYp4mLDK3MmRR7K8k",
  "key14": "4RJ5hH6JmExDKetVXvSZc7sDAP6ynQoaQ2gePeecG56KXncgBovy83cjbxuHX19pnEnC8hks1de6hK3p1d4QWMgr",
  "key15": "TNRDoNzGiiWhXTo8L4gD4ngzohZQeYj5fsn4z9nycz1m8ZXhcyTr418TgnrVkhFT4AaYCe5Q7bmtmKX18jSk4hG",
  "key16": "AnoxfscwuXceSP42afNz75wwADPR28gQpbAoyxXjeF3N9vPtxegXaDBMWzQ1w2piQgrFqpVyz2JRgw3BnXTB7k6",
  "key17": "6EMvoaqEHe6S5FMpykoBYxtWUPHcB7GEXBBTMNbjK1kHvt4KP9K6d35gaqs7cXetmUkTVJ4GRKpTUm95Yb1hYcD",
  "key18": "4nL45ozLdhzVESgVsU8HSbdwHkeQQjD5FVAaeNvgReHMBWqbqzgzWu9JEYo51nXj7GrnmS5fXgXBg4NJ1CMdauqj",
  "key19": "FuoT6ANL9osgadfTxRDfBvZ2a2TUJSe69wyVDAWDkGZjim2eer2qdhQWG4ruHqGaL3gG8RAjvVTVY1qsj7aCRRz",
  "key20": "Y5beper6GeRbwGxoT9ELbnyZjvCYZ5GeHvWwnSLmsZnERYNMrWKw1QfhLyFnzsTLGPtvC9wsx1uVb7VhLNYDt1A",
  "key21": "2ZkECDdxibqeB3BdhGKaeyvauXU3MxL6i5MCNMk1A3uVpSu6v4H5tXJPNGAFudAwv9idi2rrrUxZniXbhzU9v9x6",
  "key22": "3YFgBFwyjx3JBP39X2nGFFzU8UYRRYhadfwhHyUfDBEFPRLbwYvbjySH6Atwn1D1rmsBmgWPMDzwHLMRtH1LBmzy",
  "key23": "4n9RZpkFCkYgxM6xdv18NkFmGeUuWWig5cs7KSv7KThQNAkaRenw78XsToUGAG6M58p5Dt31E5h4N6MrwneJwoAK",
  "key24": "8PkawqEJHe8iuC43he4dUXyca8DGR2m124kQiYh3hj1Cr1jtLC3EU19y9RPGfmEiUMsbquyjnPuaBTr8BaHZcKs",
  "key25": "4Bc1Me79EcshKGNJgyHFnRzmCUc9GgjALcFMxjRGNhbHSro2QnJZhrEoRorf9aFc8wSvGGQRoxmJn7a1XzmJd3xc",
  "key26": "2HeXAJP9tQEgGSsRLFFvp9mLNK6whJBgXg2Nk1CKtoEoePSU7PLf6AkDrvVwd3J92XLjfTTwL1c866roUKG2JBsv",
  "key27": "43JH1rtWKztagqyw2EQdoYvBQN5h3doe7XCoPC3QqDFahQo16eECA8KjpPd3VRtmUXxGX17ToAxhZKuvcvUYoCGe",
  "key28": "33QHjaYtP9yXAJJBzRRWSUESaQYXi65djvCb9XR1i4f5wj5d3AdDv6k98wH1eywUUCY8ssjhx847fLkV1PtSUq8a",
  "key29": "3h9eC6TPtCGYJvfiFeHHxez81vGk6krGVMAo7Z71Xi6CppNaSmham2R5HizFL4LarfzcftSPr6vtYNPfxy94Tp43",
  "key30": "2ygAXCXLJnZbP55QfkMV7hPBUYVSrpMqDKxNd4JHzmxc8mSrTiJGVH8PyeSWxCzXFxsoMvb3TWgni9pcVxAuhLbB"
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
