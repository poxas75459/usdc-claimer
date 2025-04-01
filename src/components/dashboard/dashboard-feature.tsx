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
    "LSBHCvaZDqM1wLDNBRKG4awMKycjjZwYz5KSo343LrYgqRbY4JvVmwtbsRVYMCz9w2ncpyUwf3pFC5u6ec7wycd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "REbrXxjWpmQSsC3eYZ3RfM58mGXnBKNGZcn1jbawxVq5REgsDvUbafGebK9VNVhWypgu1BcArFnnykvfka87dBs",
  "key1": "i5Ya2sh9cPZJS9qePq7BzSZBTJKqRnXj3oQ6RKQPQsPQkg56tDaxBbtfZwmNJEDFDqmZADoD9mtjrJSsBNbgjgU",
  "key2": "3w9bBumcu9cD9o4hEEFkkRznBbVKeZ8D7LxEAhHM9cimWTo69sYvJENYKYyxc4eDquaWkpz6sum7MaeBM2rNFoef",
  "key3": "3h487abE9QxsL99ZLt3KuPA8zYnCNb7MF9v57Syf6apeKsPVYjjHYBWqRvr9hDp8nEaJBHUSst5htixeksAMtYjQ",
  "key4": "2gHPK9AKGiihbxesrk1iNK1669KwXRq4XJpcebFnpq9V1vVLJjrg3QxwuSGtf5aXXQHwZXmaJFMC9b3VY7626pNL",
  "key5": "4YKPWPV7jyrUremyRFLY2ntbAQGSor7VWx141Eq4CRs2azB6Htmk9rTDqSoEvZs8ZD2s9hNsQpk7q3fHXY59nKek",
  "key6": "2Na3qvXXY1zs4j8u3esqy64CSgFWUbV6qPLKTNYoEjxEyDadhJXF8XUpktCVSFfp79zvbJzUeXPy1zUZnoKULXyo",
  "key7": "4TiuE3XoVPLBTfzpctTpYwJpmRxp4MjkpAf2rGUksSoMWmYixwkmmpewTMVcEXfz2t48tevJiUWFR5JEmAernJHe",
  "key8": "5S6GjRmDjVdKTXmC39jbAEEF1LHrvjg1mAFVtGsZjeQ5sQ6Y3FHkuJS8HytsHrRz34uoy4CEWJZwpuS4Dzt7B7uf",
  "key9": "4PyCcNmu1cNh9m6eqEJ4N6ARwzQ5LLZjqxFuBahT3dS7kT2LVG6RAxGxuPg6XeWHaafSDnrwD3CFSMzQrBavKuXo",
  "key10": "U1o17YUUKoHpTixEHxW3azd5u8TNJcXNHHfnbq8ZXFRLK4HCybeGBhgnjvVrTUtNFTCTV6nueYqf52Zt44FoBfS",
  "key11": "9z8VdeBaDJe59mZjrRcX6w8iBSSpZ7Fen2C4a4qa3ZEC3mARqLxR1iKwTC2dq2RVjHkw5rrfGrwKpChpDwRjteG",
  "key12": "r67rLNqERn8Dj99bHk1yq6v4Gov4K3L3pyRg9BK3qz1Wn97g1ZGxkTE5fpNaTXAPfXMcpQ9Ho4ecKsdLcE3iJR7",
  "key13": "5KJ1nXmd6NWL8B8n7fWzvdxauMH2chBvNv5tGtQydrRJqze3UAeNo6AX8SKncvvMgEnyZLJPSyGFVM6Y16GPCRX1",
  "key14": "2FpCixtptmyRSLvTquxuFeDqmjxaHSLhbBYDh2Fa1boBDC2XoZQh5Tp5AfxTYb2pddjjZyaY1UVV8SR3229wBhLU",
  "key15": "2KKurHHxCAubqs1ntd6sqPi34uQSVoKSqMzq7JrYH8vEFZGWBC2UENwW3c5ddZ6tDi5JyRJEGcbhfwTq9AJi6BQa",
  "key16": "2wmMBqJqc14tWB6gp9usD3G2R7YtK9Pf2c2zRT9r6Zsh3WBELBDfdr7nRRxJcBuB7vNMb6gfhmYWDAKcF43bub4h",
  "key17": "5NCGBGiQfGRTkPkgQLz3W43keXd6S4h7PdoG7Rx9zExysFRbcibqqDH5NyZbH5pACmo23gbun73NS2P5Scjyrqo8",
  "key18": "2D3VFJWar9sKYtWLb327RWgWvMbMgV55QHJ29Pnzy3BQKku3eWhKfQYWcmQF7Ea4vmrbCu4P9op34wGrAeaAqCfd",
  "key19": "4EL7p3wG5EuPrx9kg73ib7K3hcszjnr45y2mB3bqzLxhK3ZghEwoGsJyULEhZLDSo76Hb4fdYwHjNALXeWc9R6QL",
  "key20": "3AC4da8YvMhtaHkHgBWzojjMax4B3514rnd7P7bvmaVKBpTDmBqqkJrpE3AhNy3LRtfUAT3uXbZtXXjmezaACCLr",
  "key21": "akRRXzQo1aHNyzJnCiABUcJTxQoMfDZ8B3MAy4MFLgjLrt7C8CgWwHEso3qMh1oqUATWvvUmsXSk9dv2nq2QnXg",
  "key22": "njy69DBwhPa3nBmRW8N4M3awFGm5NrH7ksDDcbHrrWtnM3qApjTM9v282LjBPcqQFN1gF1zCT1e4swHWxgFhTRz",
  "key23": "5jBqL6d4CDBvwwH2Witp6Lp5wwRe7WcWaGPVfJQwem8CB2arZiQQKavcHxGGWZAH2p4JeuaVPHTcBEUr5cWtSKZZ",
  "key24": "46R8R5m5fdhfLAsBgYj4mHHKqX8on51CxEPk6Kgrs96u8EwXZ4PW31r33NihndVL5GiAPNoWehkFvRBMkCFprGj2",
  "key25": "5DA6ijKx7prJXZHwR1HQLCgJMFWmz7Rnogxq9WGSfcrjgTtfTMonXTGDChMzw7B23avigk8nxraxZkPvEpcsxT8h",
  "key26": "5Uu5hR9ZHhF7MP82HgwKyvzh6PHjbJr9Qv4netjovnsKX7goS9dUkkk7wbypWdS1aKX5ZFajYGvpaA7qdEPDfd8L",
  "key27": "jBPgz44WBm11uGwBJzAKgs5mjikhYC2tvZTaVopfx4ViN4YrfGG1iS69AADRF8SkGuy8vZBzniqLavksKUd5y6w",
  "key28": "2DX8HM3n83Mi6EP8RzT8wgCP6WhkwyT49RJosUTPmqU8GNbDhWPTMzHbbbg9nqNan3dcDZHpzxWjDBbVPCDASTEQ",
  "key29": "23jtKLGL4dvxz8n4EPA1drkZ5EBLM6gHsYoXbM4LcCD9pvzSkb9jexfvUYuXkDg4P5FnqQEyunLgfkdABjWcjuHb",
  "key30": "VzPMuRMb3Msbts9X9KRQmVmSySVBT6tSUidRbJXfQta4QHcCuXgUs3EmFzt7GqpgefTV9wmBfNTGfYQKx1tdgzE",
  "key31": "56L35VdDV4dqWaFSukLpMUARfUQLcN8sWhgR44yBqLAkawEmwd3Va7wRk25nAkQz9Wvad4orheKHnVWMHt6QpRk",
  "key32": "4cSah4BGqPNNyA4859ERLVPbz4EYwy2xTWWePM686dMcTyiDdCXCgNrsu5FzqCaJneBsqjJ52yF4iScpeNhiQ2G9",
  "key33": "2uzfiemb71fLboiBGToV5RtmDGGCpBJ9qmagB2TGq3dvdNbWEjAgHUNi7k5trJBkts1yjrBWNNqFyW4xr6VpKtgF",
  "key34": "3sLVDaZ9YFau1D47rFMsFTi5xE4Z66DTBvtBBjPRfHZC1SNa8QY4mZJvAAnESCjFRZxZkdVzWPiTUGt2Sd4PD6Ph",
  "key35": "kfD4SDQeYVLZnCrisnE3bQUFb65TQmUHDYNZeLmzE5jNd9WvNxgsf8zmX8s37j6fLhBiKr6eHDjPNkdu6kUCTcz",
  "key36": "5nqDc3ZXKqsHTmUEdUVLL7gGmtErNzdeKf1FquGxpbiiub5kyLtUVDbQTb2mcTNUrRcNJ5eMNFDLUMqqyzpdRYSF",
  "key37": "hHKA1bfsy7rmbxJXDtWt27doaJXutS5ichgqJ2D3AsHeWK4HYvV9L1AhMbXFMuiwysWibtHncdzgbTLeztbvfUL",
  "key38": "41ogEje8nxpXAbYCFgB6uo9U6ZBcjXzpBzrxoktbHyxxnryJ9gAKabwW5gTPX2JNo9drVc9DF2xP77WQFXp3kzE8",
  "key39": "3y4tDr4b2MxoRvBrHbZvkrHMFD5r8ECy8474p9KVFitCQsAPdLxVKu3dLraYGLtgZrcttoAhG7FJTucUmwJbybmZ",
  "key40": "qPeuCFm5ft6VkXF75yAZBhqpjsjpGXeij15bh5E6THjNkwTjwy3dYrYp4stZUBoLWAJt2bnogcCUXLzg1dyGqea",
  "key41": "npE8UTRtsG43Yc1jPWBhmmQEYdm2GJXaCV5Lf8UtmxvTsZ5U9kDx6Hv4fGTcdmuyi5zSEq8qR8TBKzjLjTmG3rg",
  "key42": "4TAThxp3yBiuRYKtG1sUPihAPvmfvSt29f7emApsrWixLFtYu4HBbxLTZppB3Wwdk94Gd3m2zCkW7zKHeSGn2ECx",
  "key43": "2fxwPtSy5ZN75feiVszqNHmFrACykfFgRVrXekkronNjfXcobmdeTZ9jrGGyrmVjhRsChdUAP3KXxjMa3yHuFFYy",
  "key44": "5G9PsebviaS5SvqRpmafDbhjCMLK6c7qSDJZ5HkDTvQjXtzVg5w9uQyDHjcbrg33Q1BDJFhK9iBfjVuF4GfSnCpg",
  "key45": "3cg6TcmF1LNUaQsPWT91vWcJuEkSp9pYAP6xeJ7xUMN8mp6NAPx6DrB4PMau756HUowP1bUDK7WBoWyK6S1ukLa",
  "key46": "2TBMJEVLw6arerSC9PKtGvCkkbR892fsUSEj9sjKXcJMWzuxPC5Gd4CfsCmFSBkVTQXXeRvXNVbDY6GovZ7e3AZT",
  "key47": "3Q6d6i8bbsmC5Mw15EJ9PJjkT7az3DTE9JVV2XRZdxd9a8ynzj5bLspnC78bpaJA7RcmEhhuA1yTs4qEfH5TYhuS",
  "key48": "3W3EBjW9DgLtm6XSJcSGMxXS4njdx6Pf8rqmVB2tU2RfX4q6ZP3DhGGfA9H4JnHQGeTm9SDH6TspTPDY8V24FU61",
  "key49": "YqdNxA1NoLbYtJPYm38LRnZm4ixBamHDgdmvPjTtwcA6fYRuGnsbpqJHcHVtBSfsofpX95bW6HPk69yLPA6xJiQ"
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
