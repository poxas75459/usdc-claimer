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
    "4P9cX4qrHyXyzv7Dbe5c6BxNvNU1r3ABYgxommfbMjRKWjYk9kWNBEU11jDKaHta5LLdGvifrTDRrtrN9GEVtDiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oSSMRG6tH58w6wpGBbNoZpnXxivZLCUDdZZLwgboosmBxfqGYPYw9ick2aWHpQXfEV7DQSSqSdmjrvtncziwAG7",
  "key1": "53GtPkQFMj4qiPtgmC1D8qTdmajX2RSCzKqvtruYqhi23Abb1rvpjRCcp3mwNLd2Aih1HHQPvAJF3SPkH7jyL182",
  "key2": "wU6MiAVQyWxdGMhDnrbfdcjdvA9BPh6zokpy5PGxDStU2XNmJ3e13Jm1x9TLLoX8d73g44hbQ6BqW1XPqEVnLFL",
  "key3": "jXTRYTLwLZmNVPqHnXpMLdhS2fNdums2rhWjtKoLZi1sEWxv7jXooWndQVF5n3jDgFjguPrUHi2CmhR8H9NaDsd",
  "key4": "5MadpeEMSAPPt7QjrdqR43bzNjLfVDtKqpYmHCF3MCPUxLx98MJi4ZPtuCAHmmq22B4joLWPkdSe6LrRPL5zaA4Y",
  "key5": "3X8pRPnrea7mdCYsXAfDnzpkicKioUvuZPhiWhMko1pQGJ7NCBeiPov3jkNQS56VguJqK9qBZPmutzHKwLid6PAg",
  "key6": "5V5uJLjfM4qpjX6ojR2NsXaqwSYDTbNR2oo1F6DCr6BJXSw7RRkisG1YAc97r7xAPRpMNcKrKvUnM3t8DeqV5aHn",
  "key7": "4FJ5TCmdHc6cbKbyRxau2v9FKB2rPTnhY1S3HCxEhbUfkM6DBd9nkxvf4uK7hqn3a2HjCQE3rcEzuwp3uLMBexyx",
  "key8": "5AhwmPgoipi23Uu4URq2jfS9eVbi21N87UmVG8wzFnmfPZ6ZDsq5EcQPnyyWPShB5HQPcocHnVz2ff9pVoY4Kw2N",
  "key9": "5GXyynUoo2aqKUTdTip2Y91ziiTNHveGhwY79jCeBHA9biuCN6NBkHKDj2pQSVcdkF6ziYT3j42VpnxNCpcp8LRY",
  "key10": "2mmbhBAmDVKf7A81CHDMpaa69AjKTXH5VWStruPUNG9b4rezvQhUuw7xeqnwRYaewBV87pVRBbfKvDXBeAjmz4en",
  "key11": "5U5qQ8yJGVXSoFBoQVhJPo9JfGbhKJgKv4pC78SPDe9ScyGqWsYfGjCBbP4f7GhXN2u6v9thNjcusct3Lj8CxeXn",
  "key12": "2JqUVzjPoxcmhZnCuskUQdzF4kHFUSm6EW3xGFubT5Nhe9RuZqibNtQihsJ79Gfa7GGj4nX1sCfMsyx329jJzVR4",
  "key13": "5psGrHcvBhxZsyGsy4bj4Zh5fW6MQUge2SMsFrJGLbVUkKs9uzgxv1vjfsvBuVuhHm4o8EBgnsnK9xEBGZjijUCc",
  "key14": "5rp7T4mwCUgwth6MkE92ii13wRWbC252SN2xdCjFhgJeSoRGD5wWoGmcj1pisGy3heR7quiBDS5vPA5G3ZkFAtW1",
  "key15": "5zW8eRZaLX8XAkAUnGvS3dkVe4FkyMGgysm3aukukLPHjLrmmyfNnR4CHgdMw1fpSjssK5rGp6nXnnNFLPtE9gE4",
  "key16": "2jtYiCLJKaPXSbG9YZSUYFhwUAE6DGEjLv4PVoB1cgoJ3jJJuE25DJwz6qqG5YkCwsiEGjuGHubBKYrmL1NMNXXF",
  "key17": "eAxxRpB8uNXJp3JpjjNWycSXTM8J53r6SQRQ5qx18z6snGs92aLxhqkEw7JEJLjUD83LQfCDuxuTT16dHN4nrk5",
  "key18": "555gZv4FpX9gdzMybStEibVrEpim5ua6LHAxBbn84EYuxy7VtfTpcGJeJWfWM7W8SHzHdPK67Gk5W3KdWrGwVNXp",
  "key19": "3PwYyubnDTxkoo49RsbResG8QEFPtqHUCiyPH5g1SELsybmE2kWm6cTBW9NegSWBYafyXJiZNWwydBatKawDS1dK",
  "key20": "2edNYidcRY3UFZTUkM7mpQRkwEH3TSWDyMQUGnZUp77a9QdrSgLc71vHiYg46eANCrg7pc8QnMYJFHGL5H8VDPwu",
  "key21": "3HVDXdFFJMYdZ8i242nEQ6DYCr7s9nzUkVW7Vop1aN5eWKCDbEtgiUR36jNw5taoJPMFmTDr2JzaqpsU3MosbAdd",
  "key22": "XPjALdzqjG4mv2YHW8LmQ9VPkWnMFTWs4JxEda5cN7EhZZGtNe6eWC51bDudh3FB2WdTHmUUr7j5ixK85xHfUJo",
  "key23": "24P85YGuTRJwkz2ksJ1gVBQ8BTth6bKa8aQbwne29Pu1s7MUT7gVzp8HPv9LJ9h43r79D35dm9boSr7qPoUgu7qJ",
  "key24": "HLx5oKFz78BMZDiS6AUi5RKawUWnd4kZB64veB3jTCywv7pCQzbyT7raGvBmL3szpyTSJF8N89XPVgTbk1fbxqv",
  "key25": "4CCaWyHWWJT1C4T9Sg9FSEVUs46mCGwjS5JDY5aAL1G8Hwh5D7ahfsvhptRdLgUTiohSvpMsahVkChN4HJKx5mzL",
  "key26": "5SvrH96fWsSniFPVrYZ33qdHBbPPwxdGv6MW8rtFRsqm8VCPWnboy3BK7YLdT1994Jc3PnobhkpdJ62cKxoiDBv2",
  "key27": "3hgSMuFFAB6LkY2Y6oMBppQXVJVoykCcLbvdASjTVug9uywu8aZaz9oB7A6KFQcme1ZgxwTcjbVSJg79wzTUJvGA",
  "key28": "661R9f7CRbgcZjtg1T6NgSnh18VTKoKnYDJYHMWG4Jm3itLihcJvjhmUCLmmSQZ4k3g8wz8HxbK9Ee6gC4Zuo3pQ",
  "key29": "2gvEbMLDVghdbAi9XAkFACWGg5X6jeo8Ami9fvp14YCPrQSup8Nvqb1jn2XK2iFPSPWoHGzadh3D4pxCYWBCS2eY",
  "key30": "2kdd6zAkaLawkpfXSinxRmM1zASMgkjRE3J21vxfEUTZCyrXyLS73CPN9nrKgb1vd5x1J73f2s5Jnnfqf9wWnKUD",
  "key31": "54uY1pcVpD3ChRkmZa6jqWgXxgnziUPbftjFenfTJ3B84PeAJ3ShxTg9AeVapggKAtWRYHEDWn81FnYPRLhexod8",
  "key32": "22862C23jcSj6zKwfhzmZB4gSUjjxJUHrsCnvvd1K1UxxgDrX3QKWwhpWYkUGkwQpif8xNGoCFnKDTuFM1wSKkLj",
  "key33": "7nneSqMx6gict7WS5AQA3BoxPSrLcMwX9eM2K7MxcE4PM73WDvNzdZBjmEx1ggUC2BiYxzSRLL2yLUXbnXadvyr",
  "key34": "24gU1fqUUrTfVXFQiAdMoktHQ6JU1yDBe1fbp8LbEuFwYcGYoh8MrF7ZBfjYfs6c5rr2PT4C7Si5WoB5gSkyKFdR",
  "key35": "2jFcUYjxn9GZQmheEov6PU1nh2z7vT9VqSXHr8QcevJV4acYLxSft5rkCjNMcpciN4fDp1s341xYLFbKNkZJENKz",
  "key36": "3Sth8WX1TnUT7VVEiNerTEM7fUtQPsHtzGLcD8xK5QNLp2ww3o6DMY8CV2k4sGuFMMudkPjQrcnv7yoaq3fudPQq",
  "key37": "7TnHHptXTzwkncg52QGaw9kvaaPv6zqoQ9gd1uYzeJQ4GpkUNYrGrfLhUVuj5mYXT1yYeBe2FfHJZbqBpE4k56N",
  "key38": "28AhLsA26JCfMzwmSTNj889B2T8tDgKqgi6V5EabYpq7Moz4m5DgAc1mUxbHJV7kijehp2rcD4wpqa5Yz5i5UX5C",
  "key39": "23oAgFiamU3yZPWdL6BzvadNShKP8d4dWfQpDsJrJirnmYShoWFRcADHChq4jh37U3LYEoNZC7wD7MDCPZZLGL2u",
  "key40": "2V6qsgHDMAVBS9KRL8cTBmeWBkr92mzwvxP1vM5ysZSGBtnsK8NGDBAupm8LuZTXgtxMs7p3mj1fxvc5uu1oKso",
  "key41": "5Y7yxBu8h5viphTa4JM4txpZSCD4sGwbbYv1wFdUoQJwzNPijW2DCJBynoDU99FAJ7xp3PYnT9fNKmYor9qMibrT",
  "key42": "3pk6dvbwd11cgfBK93guDr3Mwt4xv2jav67dcHdNADpqA27xYynawYpTsd91pDkoTwKzYvGxLVL4NTSPPeGn54j9",
  "key43": "vHTiP9Yfh7zdz6FH8tWGhTLhuQihuNrrjUy72NKwtCAJQNwdcE2xHV9QPoPrPt4piA95h3Ef8vUEc7G7tA2APoU",
  "key44": "3FcCjHYqgVUbAfcbL4gbKPkR5iYNUHUJFCg8deD1hp1VeK8qvM7PwPwf36eBEuVTNxvpX9Ddsn6a3XHhuhCbyQnQ",
  "key45": "2ikKhMYRg6A3BSLdMJUnD8iXjzUo18YHDaeBJMuhPYcQhkJ5ywz3dXTr9tp8KxDsMtAKMyvWQJRzoYwKp3uT9qJB",
  "key46": "22DeLMG1JUsWwzKdtDoswoMQDHYuVMR8pmLMoZneweaAZaUdfbFpomyH9hwHqq52qAiZ9mdVK32bF3xpoNhKQfm3",
  "key47": "qjkqtUpyGtDjHuzDRvuYarbUeiuVsLVTzrP82DPPLmAFT96UZBjis4ssfQFyDRMkKovkZE9G71t7HkvxDbVeNLC",
  "key48": "2agdritHuAYdk43GrJfWvNiRozd2RPpmXRN2Ypg6i7T4o6Ad7XBG4ABXbgazM8zrfCEn5ZoHjRtHmEV9JJTtyJfW"
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
