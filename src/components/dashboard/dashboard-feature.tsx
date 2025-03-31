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
    "66q1J11fbWtG8wC7RraUHh1Mf4QidKdM5MD2rWzKa3amsM2XNE9QbciMjZ2QffU1Y9SbshNQQh5g3GaSip223V64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ytELfemLyCw2UUnCqND9Xb4h25c5YSG2Pnr2sRnpvFDJoP6AUtfZYNSbMH4Fg6f6E5MKrZ4tgjCEAeN2EBcyXR9",
  "key1": "5Sshp13SbgTbRhVSkwMVTmnkvPXS7UTuSAspPXvRvLijjA8VF7QwrRc4CgSkrLgxuXvUq4TXQC9HBNWLD61b7PRa",
  "key2": "4hvAkAgcFEydHZe9ymdwoi9iUD2XKgCsor6N62egxEQBPubv9fZKm7fVakMBTkyFwH7Pt7DD4t2asqdxcEFgJm5M",
  "key3": "QcJFAckK5matirSonAJyaVhNwkpB2nyU1RJw7dgRZdzEiaQv3USDwSw5MEMtLui6PYoRd3S75GFoaNiAZmcmK17",
  "key4": "3XstaoALaWkUf3LKBLLJd2R7Jrufdjx1nWouKdg7rpKMdBaeDwkeNZRzXKtus2KDhVpp5pJDLfBQ38dJsEV9wfTm",
  "key5": "4PM3ZK2TnxhPMr3VBUtHKc8pqP4ULmQZZ6ucaPEuPJGbMvoUF4s4HsKa8HzYenC3LBS9QSSRwURef6Uut7vJjSaP",
  "key6": "2XTtMTDiDVbtWmuEP2UXiJSUeBBAiFAAbtwjiRbwTm9feAVntcUNK6sSxzNbRYjqNmW4ksFfxNEHBDvyBuiB3k8b",
  "key7": "2Jf1u1Lksdip4aBnT81nKGDLuBgLaUrEfdz7dB2rpuehTqZL3pLd6KXt7wWqjofUH2Pz47NyZy8ui9Uv5ZKJDZcv",
  "key8": "4xiwvHdiYFESGi5vPAH7WSjCc5aaQdwLY1VpQmyeJ54VX29Rd5Wq9Jgn3Y2WQa17NqxQoZ9ugqSt4a5Gv8Ry92cr",
  "key9": "4Th5zZqFpnZTy3Rk7C63rVnzckZcz2GjEQvjSnw9pJwpFYhKLsE2YRucfC2Luu1vjY9uaE74LpZsDfGT9Ht6fpvx",
  "key10": "2rwtXDQ87tcumA6ZGmog2hUct5kMocuAy3Ti1w62NS4RG9aPxe8UoBv5Bhw6qHEqVm21NzBT7PLdb4z3tg1tGSFw",
  "key11": "4gmYJWwFYVkxMgjGhxqeE3SSLJVht79UBRjmzNWBWt2i6XV8BLV5WGSP5srgsbbCAPhyoFXNjceJiBi5HMyGuUux",
  "key12": "4PhZkkWtrGJTHNn9NzmQrvKJZMPAerhqcNP14MnJuJdB1BXrV2XQDNfbuyk9y7avGs3n61V6XFs2L2pExkW6Ekvw",
  "key13": "5KFjz5b4efKeDsiMu2qrLp5ozX7q7fSzxhuPzo9K5vBEVwbD628T4jd4BCGdo4E2qenVYn9eEKnjFNtMf2qy9tp4",
  "key14": "3E5UQZ51mTG1AKRyReSqFmHq4MaYRf8enwZmxTtsKwiVypaCSiZrwG93QCUEqLpMbTDyiJFwtjRxFfPzDow7Pcmp",
  "key15": "4QGQvzncJJRqV8whcHgxSP95chbSkLDWRNA11qXQ1TbM4feSSqP9uwtsRedaJzU5PVuyenMJ1oakDKo2dS4FNrpW",
  "key16": "3x4xAnyysnMDghKBrai1xGMDiwa1ucfs5NYkdHm6ceYvJLPZK5nGchYLTTPFUnsdq2nhbSEMdT5fAL6nARv6wYLZ",
  "key17": "4wkXz6yFz3NGxku8E4af7t5joJ2KaMCSk9Kup7yHJBevDvsVx5YRBkCQ2f6jPWYW5L1DPLZjKiW7VXPqz8x4WpxW",
  "key18": "3E8eL3t81MECPvUbHwW2wzLHo6Xxn2SEzvcZ1h5iRAtA3SdD4pdffKhDZcLfA3KrDPBtpJU2Fjw5CzZNrtWtLRPM",
  "key19": "51MVAfThBn8JbmJSyy81q6tu43qfJCMAQdTr6ck6sCcX3ugBYB46vdt2qDQWE4BsL2NbW19izbnXgpJ7HGNX1yPP",
  "key20": "5Vs4ZrW9VzY16Y5TTT2Eengqsziitq3RC6CpUciK5WBnq6vVx5xUWj8jBTVYmC472f4jUCqfk2oUyeAp85mYR9Au",
  "key21": "2V8qDMbzfGUt5dGEpkPxtHiakNQ7ANRv6bdffYsFsTzLdtEgHxzjxWY6ur69P6sFNRijDhcyXPG1BdozEsDabuw5",
  "key22": "5nKRaa8Ct7eJoVuqgnYb8LT7X4ysUDmimQ5o5SANhL4GTX4Nnuq2o6SUkJxy4PuYernRMT225bQMzVN1cV9Nkb3N",
  "key23": "5y5Gn8VQczbns3NnnmuBdBLnRuf3rj7Wm5qQRUWq9nwYvQYuUrTxSnyqXAGGjjNBzZWfbGuD6yoMnF3zXN5SbaWe",
  "key24": "5A1gaM7cAuvWNG8hpBZhm1X9SynLBBj9j72jNfhb8zcYDreJRTx3jrAhk4schfWwmcqceDwbgfeq7qEJRSGvP4eC",
  "key25": "5u9CEj6eyS3FeH5pVE27ShNoKwHZ7gBdx7JTKo33GX4mHJb6fHZo7c5Njg9U6ywJNfwd467i9c6kXqQuFYqPuuU6",
  "key26": "yHvmbNpzauGGbUZ7eXbUTrYnJFnMCAY4ricnpKsNwwk8cmnWU2oh2FB4qdKgg7R2JV23WkbsfKtXCKQaExwgzr2",
  "key27": "4kkjpAkt8yc2xEkfzGVGe7x8Wbt2RgL56Gbpa71HNc8KAk83cW36uh2ixw3MZdrNoSeG11jbngpkMKoCFE2seNvv",
  "key28": "3NNEMPcWHoMUmM68ZhLepfJJVdNErTa4Y7RUpDirPJC3ya2TApNgb1ZKmNcDmUQS3kwUDQgu5vgajRniMghe8cHG",
  "key29": "5ugX5Yjz15K5qJYPNaJGSfkdxoAxYnfYUZYjM66FG8kaPWJeF3hKrHeehB4xcQKQzzUniaGU3rfwdcyEXgF3Q4Ny",
  "key30": "2Z1D4Vc1JaUWns5iAn7oE5xSUguFZsPNsP8jK1WqKKeoVhKWQM3gD2ANdZBUQjaRkYehnjSBgVv4meZ9oVrLiXHm",
  "key31": "53tT6sAy6HnZCpYq4dexQvJag71m1PEoFaLKy6LwpDYk6oRjx3n7KBNBbo5vYVvBK1GAgUXCxGK9m2CrpAu5oRpF",
  "key32": "2SJPKtuHq5WPbvSUrAoX5444k1yU3Yp9Zbk7VkUvA4zDNVVWzQdRVpBfdTz9HoGuBzyJnmM5Ce75nptJ5mgE7S9q",
  "key33": "2S1sqYGzo1bRD654sucDEiTrhmztB73xLnxZBJjCoYM5sakFJEfCufRUyutXfxnW9LNuJjBWAb8irKgeuwE2NYtP",
  "key34": "2ZXTQz5zF2eA88n4i8wz7PC5J3LDxW8rZk2Jwgd9cKcBs2Ex65AbBHYnVKx9J5NJNfGrbMFqTFChfnx24ipdegEb",
  "key35": "4CV8NzSBJM2FEp5wYnGhbB6XcSNN9tN9nmoYvNMMBH3ZvN4V1azXBLbhvScQ4WdFNDz2imx2BmoYtxnYvroxXpd4",
  "key36": "4wuoC75bjtL1UQ1chuSMrwNVr5RiAruVTa4KApXvVyazqK1se5DHGFFUEWvuF1s9WVBJ8ZWNd9M4kBLrzN27qPYb",
  "key37": "2vTricCipzvhwXrs9Zx9kXiXaE3RLCSCp9Wx9Tri5fcY5Nnh4vffgg9893yhyktn2HLm7UFHpcGysLXRkN89AQUY",
  "key38": "62MeMiv54KWBJwL3MkfTR5CehNndtS952XwMYheLC6MsTsRE9LokEd2TmAu1rGtvjwq8gDsqX5rGGwSGEN93xYuf",
  "key39": "5afmWXqsPoyYjAkYkZ8ikTSUFHXTktrbUDC1t2BbzKPuBA5VwAwboWK7L4FhLec2GvoDvQqPfjCZR5ojysESsE3m",
  "key40": "5BkqSHqnkwTUTAZ7CNkgcvXoDREE7mWoWVHz1wtwgQmKtTf96PcMZ9TtE5jdqqrzJ1Q6PLARiEyLtKS55nEdNo8R",
  "key41": "gVvs6W1VU2MLDSP1QZrmftyQycUD9whRG33JMM75Aqt7K1fh3fPbsyFNE1EP5iTkRYVjvZ3do76x9HFwqQvB4kc",
  "key42": "5pgMpGGgpdkUXzV7rYpR3QMJSWCQXjzLWFrPFMbEBRLVoaVvm77U9VjuYHVwFjBKmA13yPigdQFtn2dWAq65PQLx",
  "key43": "4TwMyEz1HR3ezvQdd178ZNoLXD9PAkgPTkhwRvL6YAL3icqmJ7Kew6WVTdKQyT8GW6XUqqeFT9vQMki9XYeff5VB",
  "key44": "PkwzxV3BRXFYQFHjCHrzisiPDp9EqS2nDpULmrhbVsPYJdSb5fD9gQpQ9NkvfBq22LkBKKnjRyqa5tSJET7Sbeq",
  "key45": "5DUMWRTkV6xm4PAx41K69SYAGX1f6dFzHvuAa2zH82zyQfM1dXFcFb8NkocX3jdEmcAurJ8yDchWkUEc1nCmeuA"
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
