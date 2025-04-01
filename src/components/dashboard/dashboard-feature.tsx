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
    "5WoijhwBdg2xXjZsiSqBAyMwuAYFVVzGksnyrDfAJmEcWZ1Awja3Q73ithk1JKWepBf5b8E59HwzPt76q63siLEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34gWWNNHqjaoskWyzz7HB4jmrbBVgiQ65mYV9XJSZCHvbtrikQz7RaFd3x3QpMHQL6t4koQmnB7oEzb6VPwhREEL",
  "key1": "3LQYwyrwj59EJi9vxTvL4oHqg7VtXwGDVUUzAQkuuF5hD5RgFy3xgPgPYjcGsA14gbo3Uvmro5gruogPFacn2j6o",
  "key2": "63H8DAGzzrpKaEpd2EpnmVVQGdbdWQbmwCcF8vZMLaY6mmSkRJSDGgMMq2EYTnHLLNSh5WeQA6pAv2JPiv1WbLi8",
  "key3": "5Bfsum9No1SHpbEpQqBQKxQNrEAbRAE5vUUNAHLfMVcwggzJPdicUc6FqsD5zwSE44h2JdT6gX2DdXpqnzuA2tvC",
  "key4": "41Pj7eZ73aNBrirtzEryTCBdRi18UhVKLu5Qa6LauL2fREWAGBZo5j9nB7uMwufnXoSoqZRf85Y2BNGasUqP6c5f",
  "key5": "42WBBMJyUDtMTEYne1haUZ7HRpzR1nhT4VYaHBbJzrzZnRbcWAsnkyNmEtmGsmmKwF7tsjN4UT7ftfeb2g1fHWZ6",
  "key6": "2EBJqzYETcx1UTm5mQJA3Rgq3NBdBCbs7XB6pjwtBbnXZd9U84aSyBBPTD9pAzUUMNRmQNQeAgFU63N4fK4GAGJz",
  "key7": "RQzWrL9Ky3vwNptaLyvPwszzqHebbCjyqkvTUPf7swA7VT6hwVGr9xmWj49RcGR5TtesMSATvc7A2uR2iGWzwS7",
  "key8": "JwL3hUhsU23qgUvSZDoRmbrcTVeB2HCdMrcYduQiAJ2oBRgnSVnzKXUb8cz5hrKfg4ZRuDGnMKYr2tDmiB6dE4D",
  "key9": "22wdrwegUXLdNmmwXXi2vZJPy2jWRcvhNMEBrUujCvkJdK7B9UucVnEfiRxgcJRqrJb84ptSiCJGD7S8w1i1SoMV",
  "key10": "4XYeuaoumSYPcb7DeC5HWa3oBW8X3ftHmNQigGme9DzYUooyzPVTBkzP3NBFMa1GvsufJxgJcPg2xAgKskBQuf7H",
  "key11": "wR2HPhrDmALNWDbxxkRK4hsst4eqjrtrQJc8FSQjoaZvKAnTpBFYAqWAbm8aSpxn25MRKZwTiY7rSUHWE377w6m",
  "key12": "64PY9khkzHHzVGHGr7oa6VVcFWt3yzr1wgkWZFDHPKk5LYjBxh873nWBwKLKUuUeByHgejaEQT88B5n6SWPcNvjR",
  "key13": "D3vjNUZCoSU8re88KA295PxmyPWnwMrc3RHCN2pp7PvvweMqHs6UP6XUxp4mznDyG7vvQxBhQEaQMR8PMCK617b",
  "key14": "T4QQoe8RwzjccWo8ggMvdH4WZ4uqYXVC2NRSbrbyHMq3SzsTEwkfTutxAE6BCHPcxHnCaRBgf88zh3xvZmVxcSJ",
  "key15": "4Qwxx4fNiVbASR1ZdJAM93N41uuRX2gqFnHcwUo1dVG5TpAAxCeensC155ZXBd39k568CkbrX3CPkRshuunevpSP",
  "key16": "5KH7zXAPUo52fRFozcJBUdyPJV5i5YLGdVnFUgSSbzcogc5tSdcC1ME7iuqzB6Jp672RepUtWZhhEj7z1m6TeNX3",
  "key17": "2kbW38SQwCDi5d2nwonZapPK4Zbneo1X7UEAngZhs1fdYjkmb3aP258PvwsYhpuHRnv6RRaUgmViRpBM5ndGSn3A",
  "key18": "5aTKHC2qSqpHnb8wr8ao5ifgg5w8uWrKqKGHSCZEMmF6eQjkwDNekVqNUyfMsMzyYtYxe7hRpWix2EiDKpS8rkQG",
  "key19": "B1uEDTps6fkvqdBzSMWxYVnpMD3G9fMdtjJZWCmEuNcYwkwF7imxeGLzdxdiVYSUFWaL62cET8D1rX7rPpV9FL4",
  "key20": "3bowkSxym3qBYneZqRdWrWMK4NeDvvPBaixgLTjEndU5vvBvqZsPJm1qVz3MyHrhQAbVShKQxJzn6UJJR61FhLY4",
  "key21": "4KrxcYdwnU7L5xZzCY1Zd4zZDoffXALTCNSs36MZNHD7JUf1kv1tvMpAgYeWy6qMCaYCxTZQXdgt7Vz9rF9Los6j",
  "key22": "2Kh3ptqzvV9VkJMjHRnpqiiDbbpZFEbgdnGYPCyuXnP7gVHPCL5kb4AKeqaGXukZ6GvvMYSwQqkqSAsaijbDBXMb",
  "key23": "3FFRtUEXZRXFaUexzdH1jZGHapMjrek2BCpR3dVSLFHr7vJJwvVQRxYadRfuH7vzEciXt7Xiee1v1BpXucNAa1Hj",
  "key24": "5wyEfB4TEwe2w44kih1KVPw3q5jZ8Jsba7qrKL6cAtn1Eeev3wMs6cdJNdDtrBcCSDcCA7sfaxn6sDJjAAxvX5BQ",
  "key25": "3B5gfBsvW8SV6YTftTSHP4xSFYhyMxFgdg3CfhwtLmFC51b5MoGrgFCv3H6mxJcvniMehiqMnqCZf42yidDZMLvA",
  "key26": "qVP1CUJ7ieehZRzbw2y3QaTUmW2QvwN7CU6SXyA29e6nw7UKod1H65B8WRJZuBKGVZ2B735ak7aQHcY5CFhkDfF",
  "key27": "BLCuCC5p5qcooYbVCfU4EiCsfUhn5HS149jRmCQz49kdkuUoeLWc9o18g7QFundqmFfwXZbTBnG4EagbcL2yBhq",
  "key28": "2oRfAzLZZ63oyJJfZkr7fjVrBBX8z8wciG1bULSbhSfwMiX2C7ECbYYK55LFn3TnUmnyDyCa73fuuwQLDGvgkXFY",
  "key29": "4BqtAbZ7zNa9EuLc7HGZqQk6yzZZAMWDQxhnikqKQQYNDXsjjAkKc7gS3UqNmzutoNZT4Bxr7rKnXHhF8DcrRewc",
  "key30": "6puRyjYfsLsM7BawyXwWg3CU65oiBkG8i9DCLkuvwyV5Kt8sKtp5SD3QUKjcEhede8hFCYe8Sbw5jRL5AUZJRCc",
  "key31": "2imZrifti38CdUvZmxSkEcsFZ3iKz5eCdAdNAfuy381muQ76MwipsFCSSytzBHAV669njWg94kAPCCEZT79jmFa2",
  "key32": "62gif33cj5CVqtfqeN83GDrSUtWrEtUswocQgA6SZd147rUkWF8amr4YBX3Lfkug5RV3rdsXc6LJ4fsSPVScnb1P",
  "key33": "5zxiuH9UvL35iAC2KoGBvygzRZrgztusXh4CCjaXoRdmnwpBEMAttTe1fu5XGMMVF7iLMAgbNGXDohux9rc4r4ou",
  "key34": "2vyZR1c74HU6S8wxNxrHM1uBC7uD52AG9kwbq9tryX9L3p13XyDegT7K33o8k1M6CzchbgSgaB8CjLJVjAr3FSxT"
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
