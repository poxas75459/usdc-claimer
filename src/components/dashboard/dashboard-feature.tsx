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
    "aQf1H8CfWh3srYjdnwvVgsiQydjDpAVab7x54WUD5QpxjBWBrEaYHeaJu2DxLC1reqEUdf1hcNQC36mMXsARJQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uYChBHiNqJ8S9WULgXxuGuoKDaxn2fWojZYfw2HmmyW1c2cAKDxwxpLgGsLETqyLyNGayWoALr4ao2ymZMt8cnP",
  "key1": "24R4uWt9fck4dz5UgWtuL1ad1y9ZDPCxiZf9qzoVUwR87Hif26ZvzH242cQxRUhsLpjPCJ95Efg2ByYZEcg8NrQV",
  "key2": "2J9m7kE4DTksxt34ofF2dYebZLh8oFBx84MKGszYJ25ga6D3pY5ChcB6KGWB8bM1XkN7tLoGfimQ1hanZfCghWp7",
  "key3": "46oYzh9C3FjwQZnoaP7zoF9Dj9gaX1do4N1gyAEP3U7g8CRvn39KP2hdrPfG92RzXPJAY6v9kXNfEW7d4NcXYrM5",
  "key4": "3cCgJdSnscQYZkxeqCmFm4fGmwPxWJNKJUoBLCd6x1np9Q2AFE8nooZ4cBcBTR4ngwzJBRbMtnMuGfqupzxi2uVn",
  "key5": "5yJBAgH2ymAYNkjaRwHAe84fjtuMcnp15Pm2G91Ucz55mLYeCxmd44zRW3KSnMu8QLbPyhjRv2m41ZUBSo6mkfoE",
  "key6": "2BKnxQodmZo5hBqWT6XjGsQaYrXEpsB6K7jpmqUwjuSfhxhm5VNUhfEomHugyodpS1gCGruYxJowYeXZE5Ay8gZv",
  "key7": "Wuo8JufkitCb4Rs7APPLnnSD9nJC667fEPVeEdxEgHHjEFMv9M79pigkokTstP5ggAHMzZm74ugAR8GBihnhYg4",
  "key8": "2rnrVXuJkCyBMkbcXYdxVa9jsFx1iVs4u78Q8pFnxjR5dm7NnCoZj7FGjQRMJB3Y7gctGxA516hrjU2ffzWqKSjb",
  "key9": "2N2ssNkcaFbsLzbrJDgHeP5yC3xaA3qs7okhLNUdc6xf1J7i5PsHrTGbFFprdhofbXy1sXD5QK4vSGGRqJ5eWAcJ",
  "key10": "5WDyF15Ch5VVjwUkB4k2DKrgEsNwLC4hLykWCrcHJjH7bYkkF9anQzhTxPVRT7YxCDiiMYSDJTd927TWpUyo1J9V",
  "key11": "2VmgWrNhJXnTCESFLMfZgUp2EtZeh7GdNVzswdBrEnNfq43NF9KWsJLMAGpZ5Jbhh9RYzZiF9ndL9opGQ6v1dS9u",
  "key12": "35qf6tjfNBkEVv3nSRwkg38khRXm3krW672txWgYqu9YD9zNjhcCzGqPWhiZ8gQZjsQ3Vei9Zw5jig8FjZM4MJLp",
  "key13": "3EUg9q7xRGZj7wRcH8Sm9qEKtbvKqy5tMxpFgd36TogjRoXDdaiMyKiMis3xYseUdZBppuNEkkDQuMsUsehgTUh1",
  "key14": "5A8Pqeuzrk5o7FHBeNipEUCiThppckBeGwrTjB8ExWR7pi6cqV4bc8Ew3DtEymBSu9anbPBuYhhMziF2nry4wF4A",
  "key15": "LaXfuEcUEtdXJf35faCanemospFv375MW3CpU1Tfb5pr7AzdUerUwYrWA6RD8J2N5Tr2ojdg6Abi1RhRNPgvFKU",
  "key16": "5EdYWsmmtjDSLK1AtLdvAaxd2MHsaBgmVbr5yJtLEX6BeGnht8dPmDiJf8Z7euBbtfvTSs3aiQh9Td3eRHkDVsqk",
  "key17": "X8jRu1QSmJ8Stj3UqCWE2azjuX7QTQpbVtBVkz3kb2CwRt61b5L4ZfCHQWsrDGm1RY1oBAusCZxBe5unrpvk1Fq",
  "key18": "2ZSZ5aqbqsY6sozD7Wj2a7W1zw8kZUJ5rs7GMF1pXVvHGtHFUNGYuG3vcn6onK4WHqZv4X45c7DvbVpdPuP7p2Xr",
  "key19": "5kNTshSTZ6mJHrZotYNpyHoVqMuRfC9AF7uVxrRTNB93fLKBRLBofLQShDo9fpd4sr69JYAiuqa33QSTVpYpQbcr",
  "key20": "5MU9bNF2CMRMhf28rg3B77ksefLQUkxk1gz5yqW31NvMGmbVcp8gqy8bGo3UDBXpH5M598NqbEqiR8NQErh5uwph",
  "key21": "5WjpXRS6rE8txpAAnEMfE9s2U8RbdTr81rBzzc24ryfeMfy1S8vGc4ZF4Qy3pT1HN544tM8GmFsnZzSjzZbHouKj",
  "key22": "P1aY78USm6LBgCTu38NkW89m5uS7iXmAqR2hsMNHUCa1yAsBzqrGu2YtAzXb1FGqqNy1NcFh7nwrR5MQ7BxERQP",
  "key23": "4TisGooYEyiFXCAGrV5DiFdTL6nJPXUEZ5voZ9rTFmqDrXRXyZgHP46DDXoGhcTNA9fy6jnLWv6xWtVsaCa1tZJM",
  "key24": "3om8v6uyWbmDiypYjEYWe48ZmXUZpTh1Xqrmu73txENWhppBqNzGVs5jVHnsQDKXhGqnwhHMG5te3F1nLGYdv9ER",
  "key25": "23EQgkCGxHRM2nCNUQaDat2e8He6XxbimUjKG8TgsYEGQgLcEucTwV1DcJ87HG7SbXy85z6HarRHzjzsYwCE3dCL",
  "key26": "5ixX1eKJNgMSYUY7eNChePNNpaggSnEBVgRw11GvewaUw2GRKSY2CKfrUCej6zCYw9pVXpyTFyeNCmerJ4JXXJsD",
  "key27": "9EbonS4Y22y4i3baXnfUfyqKKdxYVWq9NKHCX1PiNg943aK2GfVRZG2SmZ5M5wndDsJXxLyZV1DasQAU1CVrWGp",
  "key28": "2wL3EVfBEGP9eRzrQbR6vs4uW9w6SybmbfFGBkHQj5HUvdRiwgXswvGSMfp7fBfzXSESUdVmxj1aRLKoZtTpfenZ",
  "key29": "3RL4gYSjQyqBhh9rmBfx2CNwTpcA8iB4swuTzmLm75xn6u96ZrVvzfavX8D3zYuq1Q8u14GDCpVwWagtMKdpiott",
  "key30": "v8aKjrikHLbzXi3iSU2qHtRT1s4YMFUw9q9zFWiSL37sgqgziw2Xb3UUV5XfuL4KxT5RUjMP1Jt5vxDQPkUJ576",
  "key31": "vBfzQiXbcvh6nCcpPqzEKxUGcooz44fQehBixrL4wbnYYNEZGTLsRTFcfV9KWZj4RBQsibueunNKSXsc7GHrHF7",
  "key32": "2BT5zfy9KyPi98z2oUDY18QicJWVv8ExBkQ4n19Wc2LqF85shLjmuy1qnu2s2c8kB9XfCN4CJhYG6WuFtbSV7AEa",
  "key33": "s8U9stTf4EyhboyRg9UWRQRpzp9VWpLy3sMReM4mxfrkqsihxpG5rgKzUWBibMJjooz3YPHKfWbXgayMbFnoytx",
  "key34": "4HxzaX5kZAL2VzTF59tU91Vo6zmJA4X1k22tSUnSqFhxuBczQ7htdwp6BCXrWpNqHNojs8sapLQhJy9RNuCCk2dW",
  "key35": "2M4sfJDv6xiG6FWjAhamnLSHmp6RXFmgFfVt1Skv9EmkmFMTHsHAHk2pnYGEqRmPbEJiHFWqzvjkwLgsDCKJBEdH",
  "key36": "5xP5A5bF1cHyzLhmjcv5uDFD2Zfrs7sVnn53ZUE3AJgmDDrFBTjZy5ojqpYF2QofgU6xD2vQdGmbdkrsRJ1dc7Rr",
  "key37": "3HMg9xbR5HSsj7YBtNuDCR4pxTCgo7NUd5XxZDtyTsMszs9Wd7gAGkVHsxcFxjVgwwnaBmqgbEpdRAn5GgmimNLh"
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
