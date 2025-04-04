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
    "4Vaww6KaxegDaYg6jA6PX3wFQwMzvpvEkZ8ww4xY2B6LuYbnH1mtRPP1XDG3ucLACcjfh6cr6bnnWjnrax6qe82H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LcM76wrBCtgDZkp2uwk7QcJxxxw4S9aCEFxKxdeWmxPe6oJ4Q1XLiqa7yTXpLD2hH8RCRdRC63mSHni3uRoAPi4",
  "key1": "26xtEkMyxYvHzJm194rdZ6WUZgvN8Xs7zhSnubAYWaHtQqqEABGBJrPxNfKghn2M6rfgNT7EXNYJvyxjWLL85GcL",
  "key2": "2VnsmttWKPMyCputitcRvAEE1SEVtLEUAQk2GpeYprdQK6p83nhUSGR2vhFJW3pHM8jNqB1pDggtmJgmApPh7hWC",
  "key3": "578MVJv2VLfACgTsVrNknQfBTektWPHZENHznYR4BKX6EHz78rtiNSeF1AKrMFsPNWkZ1d5TcmxHXbi9SQ4nLDRC",
  "key4": "23pKonD7oa2y5b2weXdS4zjhvpnF4Qf3EArg77xgPP2Bu63MpeepAB3YgmG5kXi5fqxWsL5c3BK3JtMeQmWnTRqE",
  "key5": "5WFo8HNrMPMXwgY2jozecVWxUBuYCVNTuYBSBzdcHDwMtw9tc7KVY6ayL6DRhE566YGHZ6kbJXvg7k2sQi3CaBUi",
  "key6": "3ahZUYb2YSBXG6SXsyPCZCS1Je4rNBhfSrdAVdYXXuYxDsWokknuRnSrjncyKJTFcVrbz3YWkFY29KwEsBbJYa3L",
  "key7": "2tbPa2ZuBUvDePhpLKyrij5QMpmNPrzhssZTYoG14EFVDmvW7DCSoap8XAFRhZgwoPvmUwVa1xsZsxSohSGqdVg1",
  "key8": "4KcmsXTUUse698gXNo1vscBV7aQUPArD9Gi7hXJMeLacV5GBbpw7nt4MqYp9HgTrvUSEWBxA6Rw58CiRyaxqzksD",
  "key9": "3tHYcCPnLbrPg6kdcX7kaXiJRuufUjWv8TzinRmur9mDHfH9zZSSci26ug5LEN6wiCPAKc5ZGa3Di2EP36CcULoe",
  "key10": "4wB84Akg1qfZm28xNa9riVfUuppa79kDhawntaxQtvWUgJKK5ojrL5tCogUuRSAe8skNDztHpuBxjLhYJRYwAK6R",
  "key11": "5R8dUYDmwHauWy9GFcPfYJ7Qu5GpPyhseY4esfvMAvj5KmhEHedCSBiXFBQvH3uAvx2H7Sq913yxSRvXNfR9v6w4",
  "key12": "4oKQXZiG3D43QtHnV7MJMc7xfGkmVoCsTGCyuCqxQKUwBSMWyq1odwhdB3sHqwYBEqZStwJfntmnuYLk7838GdHG",
  "key13": "3zPLp5s1nnRrZZduYBqviYqsWvsrC75rWQ6ay78VKcWz9cpKKtnNwXJaD5CRrU3tJcVWcp8TKCsLVF184DiUb3Qz",
  "key14": "5VFdn2pjsQfcYU7gibrrrx6vmE1KRkJqUZoBgLfBYJqBanrR3Kh6qazH74gZnz1kH6GqsbEfCofW4rvyHNuEdeiA",
  "key15": "5paCRubigXt46haW6jKfVHia5pteFXMTjcyMFLtTK1vJm6mrwyJVpjBHboW4LQ8zw7mj5F2a8K114eD7D3AxEYz4",
  "key16": "PCnyHBVPUGNxzsMPhTJyVYpCLbbV4zPbF941rXdiDLHo2dZ7gAhpon5RLSfgcW4XrcpMFcENTojJpZxESBxwC1h",
  "key17": "4JPtEG3Bbzh4pk5uAdbukan4UF4ufFC9v1cDYyFw3JNf7grAkosV8huR1bQi1qW1gtvW8wzgjE4nmZR88G1iPQea",
  "key18": "A4HXNsqLGfj41vpAN6Zz8bWAAydgTuknvR7wpyaAatukw8zA9hi6sHARgmNzkuPXTRKe5EJ14H86PpR1SzjVzZt",
  "key19": "2sw7wrfgw15Si6i5exmVuQpSkBxVUo1BCcoXDc9jGXgG8NTt7prsdVrK7dJdgLhdH4DD1URvkddpGf6fbFdnRKFH",
  "key20": "2SbrbT82jvD8MFN2kJFMVgtoVZPeKGDXRDu1PcP6hJk3S3io19ZdEjZHe9PhAipDwFDpc8ore5UNuGFDYn6tVWpm",
  "key21": "KB8e3SMKyQ9sqPXBfqYvsm7gNW1f6UxQFYVo1rvTMLcXjDaSRQZhvpggYBxH2gGBztFwWA2owbgrUDNQe1BMoeM",
  "key22": "23ujsxQaAc69bBWyA8g98V5o59mrss5fwAbESursSWUrLNDepQqavr2HLGpqKpL93dAwHVrNqYjBhpuqyLLEbwzA",
  "key23": "3P1MFgeTETLH4Vk7oREMuXGjng7HgnWsas6ReSn5zPXj5qhCLLptdCyuv1W3ceGN3ZmhNevaxoeXnP6oBneK7mQt",
  "key24": "4uhnKUFmj3HSbb68QqSgjGsEh8sfspKLxucijntQBQpKEQ6ESU6ugMCroohQbXJMQECHKeER1E2RviHKjeGNLXNm",
  "key25": "61gnHJuCxKzKe5zQQBPc6BDBqoFBx9H9k2BJA2RZyb1bcg9XiWVrjgtVvuMnLaLHraY8kPxqW2Z3htzKS5r29pSu",
  "key26": "3ehfAM8c6tSKavpGsCnVx8cF2NcBUvzUnutwmiTXYBEKRiA2XeJiqZekW5qhBrH4i5BipKcSnaHdoh2MrCV9D94q",
  "key27": "3rj4tsGG7omrxpFSB8hd8rY3nuV1weUCd3knF6fgqjDS1ZrfFYk4AKr9T32ixfopaMKKguP7yKRaQpbVh6y3VKvy",
  "key28": "41gB5yNCBaWcwrbUaPknovcTdbw2PWzGZYGZdkJr1MWJngKcjtSWRSY8ohd25GTPVovZY3d1w8MPYsg5qaaAnynx",
  "key29": "3zon2d6UEckZrzHDsExceMFPB6QyJMiKbcJDRqg4BadjSy34yisagaqh2RrUVq7eBAGUqMSnxkqKxjscUn6AYxA9",
  "key30": "49ykM69516p8zNRWECztgjgyvaNv7Y5rwPwo8RAYcUMdG8EASMEZLKubDZ8oGJDDKT3gneqJKQogmmqRHVNTxa5Q",
  "key31": "4iuSwNqoqGn3UWr5MjNnKdJ8gWHZoXkH2T14dXpFTFfocgBjnkar2cYibgCViiGLnZU3b4Wtuw6FrQi2zSs8LLBe",
  "key32": "26VErmTCfoMRHdx2T4Le3t3LRvdvbEvhWuepqcAajGfQ3ciGaH8NkMwUb5GswSwxC7JmSYZcXmjRgWKWxtAsvucS",
  "key33": "5M88bpjuKZVnZeCD56PkpcBMB4X5jmxHXHLafS62WfLGi3hhTRuapTo1XCQq2ezXq4neWYoujFaXpkGX3YcEoZZR",
  "key34": "2Fz5x3qESqSYgfixDBZzKa5ubG9NeatBJ1oFvPPMh42DXtpLxbjtTwDP7obiWpzgKzEMKHpZEAQzKmgjLaViHH5U",
  "key35": "2rFCJAeQYGokHFSoGPhDHW2oaz1dZSEhFTViGxPDndb2iEHx2EtihWTpCo95CaYnaP9gvGrtKbviVA1XkJSUWQYo",
  "key36": "3r1avJAJomM42wvarpezj5qzFWY3bGxA3DzfS2Vp48m3if6vVkiNzx94uRY91VB4f7FQ8nkZLUhMKre866mrKy2Q",
  "key37": "3USzfMP2WdyWV3WGpzSUsf6JpjV4FuTqdPeCkc61X14wYTpqb3qpJJpsUMN2ex9jrdsMoNaZRMJ1BCxmhJDXkKi9",
  "key38": "yvy8EtEQ55EDsQvDmuC7ASfd5FrCTF5cwy9Wuvm1UvzNnU7ZvGHubWRScAG7AQyvKTqmHvbKhT9wXygo9EF7zpe"
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
