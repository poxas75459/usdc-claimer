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
    "5kDKxZob4nbtL9N4JzjCLAX8S3Bp6fWqmCiYVWAUr3UgAYRV9SW7wbwHU7qMGNxTSUkvfZn6HQhXbuD5hKLjGoc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N3r7Du8TH62sYwLGiow5T9Ssh1WwjoaWV8iJfcxZCyJZPbLGMqwTFdHYBso5CkH9URqWH2J1ybxWeYagbvF1DLr",
  "key1": "4MWfh3yGnYkkqWWzZfdJ4Z59d4d66tchqZZfvgLq4ptmjhH3oVu6VR8m5B8WN3np3yyWR2Jh8BeLpnpSA6LKqKK6",
  "key2": "2ZTpGZwkLTX41Kf5ju3MxoQWsczvLPzwZfJxJ5JdGJihdEULm9AtGGHx8Ku5kV15cF5FG47v1yBfxfFzep3ovRnB",
  "key3": "243ZWZvbqz7yP7SrGUztQFSyr19h2SR9ovxGQrz3G3DNcsHTttpUnsh5CrunSA22gpHKGZkbQZn1neF2T4112DTD",
  "key4": "3GZz1Sy79W2a5NnGumcv5VGQRCHmYRJ4gsvoJQt2hRUnt8QSMveBBw5wkM6yXkaVK9FZbC426zBFoHF9xUyXvxZF",
  "key5": "2y1GKA5ep6zv1b6EH7pesPKZgEeEp99JJC39cjrG77KbBNmsMLG4CMrXf1BR92gVtkW5CuBdNM3E8S83aaSJnabP",
  "key6": "4QmN8RNzyYtBUDRo5g8BWcbDqUCg23gzrgp7kX9E1oMgkuZUiM1kmFjzdGiRhae7PMbaLuxfx43U8nfw4pX5h8sM",
  "key7": "5CqVyvSca2TADtf7M5S9eJhwjNjbewWz6twMS5P9JURSPp583YxHKTbx3SDFcke8Vx3kjWKsVqyVm52LVABoHj78",
  "key8": "ULkDqKfLUywEQTEk6Ey3V3wki4BLUNM98T47ZMC87abFq6m1xjuSLmzqk4kncpcG3CWfFcqj47cQqtVZosgEBEn",
  "key9": "3bqyZA7T1cxg3doeQQ1xTFkej5wcU2bfUu24NQatRcr3xGrFQ7jBDzfuDzv79VyAvZrmLeqnPWEnLztmhutcjBY9",
  "key10": "46eLCyNEVo7CPf7LugRwqrhLx4bPL9jes9ggTiACdou1LDR88bZYJxTGhJUQ9buo7QSaKLSxv6xBT8Fu4VmXtYij",
  "key11": "3ZYDcribjz9EorfewU8nCUKRmK4MrbW4MvRcTGXbadiogU3FboBLTr6sGQgswtExWuVDjtfvmy14hUoUd9LDzpaj",
  "key12": "4mcE9LagoyVJG4v4FJEruedjkZuC9BCoVB6JXCQVKiU8p7abo3K9L9JF2BaVFkqXN5CLEYj1HzznbE8Lam9ptxXp",
  "key13": "Zh4JT3skZM8mChGkYm14o343nLQz8yt4xwCL8w8nzmSdth5Kc4WfY75zbW1KNr1VJeiJAnkWV6GWZr1EADSjoWN",
  "key14": "2bcRM5XjBfoUjYMRRVZo8zvXJLDgGKM4utmU4c9PTN2caus7SpF4z7k524EEjNDshFVdqzv24h9TJsfukWzibLtw",
  "key15": "654gabRvx812wTR33D1Cbo9nYv3obLLUYed7rqEERVJA2xuvvn4FaH3UARd9q7MGQPEJzVvrBm9LoyyqGL5yFhuZ",
  "key16": "62iQ23AeAsyDu4CagJTvkqsDjPFbQtzkzKGWhWqRCjHn1vNXocW8Wmad3WhiLXqFT3dUg3UjHSAoUcdWZcRpBk6h",
  "key17": "5rjXxrXuVkrASALS843v5vg9CukkP1g9qU3L79Da7egJsxLxDXrkw4WKeBbyResPY5dMNciW5WUZSc5fFqmc63Cc",
  "key18": "8nTjNyTBiLRSmuErZCBjbTLKKVm4sWMgEfDWBBS4swTw3EeiUPyHu2GH71VbUNw75GU66AXnJowvsb5X8nMuytz",
  "key19": "4jJ4zH1aDdC9GRzaPZkDhkj7ffhkD8eYPyGB7rvqBnDDPVtWLSgi3bhm6HoHKZxZmQNSu2mUfFSwmkqMprCTVx8m",
  "key20": "uAjwPdXiHk4XzvjRJ6SSLWUHJG2ttchd3RZsbcbc5gTumnYXhGF9bvKyH8jsYwn4EnaeSRfj2FkenZNGjiezJA1",
  "key21": "5mZEV9WJqBZPEKRrdEF9vDzrF2wSoMYBbi3i687X6Jj8Fp5u29HFW8YiGbrcaSrDvQQeZSB6sy3G5uxMBwa2htTM",
  "key22": "2vMsddaSHPcCmMmcwVPRps8oWfyXdqHnrbra5QHJMozfnYNYbfEjpYXweM2BkK7wxFxSw578WJULj9dWdQT9v5nt",
  "key23": "4jbmXMUueHkxUBCfhKmPRYRGKDM9rsbMqAoULchKJ8cRKrysbaT5Toe7pbL9cwS6gRPtLckoHPksNyZEBad74Yz",
  "key24": "2mL6iEmrPj7JrXRezEPZkngXSbyVzWYZCmBjC9sLimdymYhdZQ6gG9b4M6TG3Yef3puqisEP2YpjDNhtUhJ46pCR",
  "key25": "4Ni4eAA2MAJfvuf9LvrJLbpqd6fTvvtRhaGbreWjrUFehZEwh4GT7AGJEw992FmPtoVzEMrPLvDmwPRimc4zANsU",
  "key26": "1N3foGKZV7cMYgJFsYwr15TiB3qhqz6WysN8i7Q7svi7smQGjJN3TWRGGfwCwju7PkYKZbTLBxQL7DDzUt7CXN2",
  "key27": "4ViSiy1DVmf2ym67MVj7C4Vxr5p6wUwwKiL1Ke2HqiuYB4FxuCTdsT1KiHwcNZGbW2arwomFdZfSZ6jPq4RZfcoj",
  "key28": "4qdxpGstggah4zRHvDHmoeJMmuA7srdqvxM5pMUADMff4zvFHpfcJ6bCa5RJyBPAVtfDfffzo3LBWjUV9D5hfCy",
  "key29": "2Wemd1c6rBo2iF5JDWxwD3qEpJuw9RxkF6E2dY4vtLsNpaDdYnQcLivn99ZL7oiWnGzvwKhw5Rz2Njh3bCjtKdE9",
  "key30": "5G8BF8tjvUr2xiTGepuPeDdib4VT2DFq6b9nVN4LFhHH3SqQNCiLnwM1q8ZhT7uju2R6C46db6tBH1subtkaVUDH",
  "key31": "3LW2jLPr3jDPgm1i7yvThHjtFQ2wTbG2hCWM2k87sEd17Z3gsfJnXWyuiY5DLuXA1T5QxqfGAMCTEtPbZFFFo9Kk",
  "key32": "3JuPvJqctfpvoY5T4BG9zDA3JdNJdRxUPXe6dd7cmR8cEVTYy6QaqCtpKhqNp41wpCxoHavuZe65Mpx8azyL9Woj",
  "key33": "2zfZZ86vsqEd76snFphHubHa3EkGQBtniUCpWBixeTdZDB7P2T8HC8AFVXXLHVtm9UqpuEap5VAqkrMXpahExXCi",
  "key34": "54TntwimwZ8MTkrfR1UF54nBTZTYEYCtVanfKjbivT32fGymaLdw34AtFBVZgSr4nMgnBphDqYyPLFvPNW3SPc9q",
  "key35": "4J5MBj2umRTQMigSgGc6Tbnmai1i15kcLcVhufsjXueyepWMRSMbYNCZrQ8Z2nsP1Zsa4pNXFHsdCF5R5ZqrmbvY",
  "key36": "4H15KnxLsxmPeUTdofsGakMG8mTvA9aVPpFrhKBSzwdmaojF1M3aMtc4kJKXCAjYBK2pzMefYWKbMpXocP1itvdd",
  "key37": "633WVkf3521KNzEcGtwmAeCfmwDoSYegfBn3MdeMwhoTLsGdo4bCzsMr6EZZYGJi1s9peBG4Z81DCy9TvbUHRQUU",
  "key38": "4gm7V8kqBWbdEjiGe9kDiYdAnJM7FSNSPcGosntzLk24FnzfySJk2Fp6himMkCJu4MmKNQUwXFCt33UBabGud9FN",
  "key39": "tfcNrwf2bDbtMsvAadLAfvNQqTTBZ14KBhxbZsvwLcUkdNrdC9666uiciZYXS8aQv7EhLmgFjyWLmezCxmmT7ca",
  "key40": "2FwYZByE9FfbVsJEAUkzTSkd3hdASqSTx7imTTonK46E5huZXV5qVTE5aM85ZfMFLvTNkfgqhJoZDP7eXdpYBYiF",
  "key41": "4yogzMgnrkBHdi6TkftmC3RUMAkRtGtX6gy29BSh99YF6j8Czx1GLUsL1qqpY5wUsQJyfb8o8ba5rmKmKVisJP8h",
  "key42": "3cgKZbY46k7qjPfNVbpWG92qEo9ESNaP7EFZt1tqxB7pV4HyBWThTajG4bHb3QAGw5A3jAGuerLizNTeQbgfCo5a",
  "key43": "3qZcWkyb44HUzL8dMafroiJ8QhNFLA8tnzJ7NF2mphYWDPtCTr9BLLhGkYv73Zksg48uTFxqCzrKeUThmrtfAz7",
  "key44": "2MQb8EKSGa7yBauXtsTXycADL5QBsTJFqqDzin3EqjjDsEKtbwryMPw7UQo8RV1fJtoSq83VY2T2DQB7QgDXKZZG",
  "key45": "3tGLq9Q8ixkUmz3vnBQNi36VaauN5KcBskeSVCgtT6G99B9bDcvnZH5GSAbJ6AzQgGbnguTRCE6TsV9TjmJ3BpFi",
  "key46": "4uczowHhJMJ4CUVf79wg6qexHRVfMCkb6FEk7nc9XK2CitV1nJ2ohKxvz2UVapyrE6Nsp85FuDhwDUDX9Wcpqja8"
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
