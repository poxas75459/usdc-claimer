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
    "2rNyLPeGHgMvxfauhpY86oAUNjqrE2bCiBqCpX6XzDTWqk9ij9y7PGEtQGQqD21qAnKrXT9QQm7xK2dctFGMf1mw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qWmaRzUJLyQ7ptKf4ipZPBw5jhFTeUehRK9K5JUsYRaMiw5siAkdMhpZY6qGhUHpQu8wbQQJRKEoVumKXagUsKT",
  "key1": "4y4VS142PHZiML8DxW42eoCrYRvKk69W98YYo2sJRy77eFaJVk3UbNMPe5AmboAsB7VtkGG1RQwHQPWsMFdQfeW4",
  "key2": "4HZLfpLaf1Dht8dVrhDnfZfeqpCiqvNxFcnNj436xFuq5o5FU4cMcfdgrn65GWUtdmJdjjEhoAphfHwD6hQ8eMfv",
  "key3": "5dm7R9PCjQ9MmNGDkQ4d1T1zxGqSYwZGVz5HkDVGGFzZjygGwCuPPHtHskU1g4BexdQb7R5Dtc4hGv7WzW5PFpzK",
  "key4": "nvijE5Yiwox6BBJVUZM78CCg1KcThCN58Rn3C9NHXk1bFgcubQw68mXyGQuhGeATdNdPoiw6PM3WSEkLqDTs8Uf",
  "key5": "4qmpkrRKtK3h7pTcMpvUTJh3GV7ZptKPHXzKw5XiPFXfV2G45ZXjEfk2r3jjjhx5gJ4eg1FsLtpUrdcMuTjAweGc",
  "key6": "4xMRp2Bj8GpBEcTUwvZq9H4GiWaeKwRABhmzWX5nFxEXfNUqDjmUXxPRJ6MG1xPPp4pduWBYUEmfZj4RBrGq8tDp",
  "key7": "3iBxvEPpjAu1VigVaDshv76z7D9SK86GZ8aJPW3ELSozvsCaL9ZXZbqj63EmJGdcU7H575SJXvRWbCZyHWTFn1cd",
  "key8": "4R9H2BdLh3J3hbNqVzFcXS12uiiDS2r7xh4LxiGgJr8UcQbsWAS868ncwHQHXBEno1HjTZgwVJFieboPowh8TVh1",
  "key9": "5u5wDjKbP8P1pS7W5PGMk42UdXPBwTrKabzv8gK7wahuduMnDxLG5AggK2zgYiBBwaATmcUum1YT3PfZJuXzpGtj",
  "key10": "5SB1S2Pym8pkwKqNK29eHog474QnyoofamaQcLMiffvvv4gVr6QGTGdfMjZxm6SevXX7bp3WVEWHT8gxW9Kyad3z",
  "key11": "3eVV9xo9ivEnB4SCzsZ3VooV1MkKSLJgd5ikLjbbz8MuhXJ1DgdyQgZ6FAZVkZMbZ9uWWfmQFWy5ZrivJe9xZGmN",
  "key12": "3xnrYgcv5Nhs7ZWqVz1bMPVgPbakqrbLx4rVuJUtC3E6g1TMg2sjRsbxA88rNzaLVJS7qp232LfXsdNt7y3G61r1",
  "key13": "2gAHAdba7FpjfjhJwAqxh4tJ76AgYJSiq4UJG7WuYzzRTbV6ywocWjZj5i6ZgFdnyTG1UYMMXc4dhFyttz2HmhHY",
  "key14": "4coXhzB58pGWYmQEKpxibXU9CJYXWhnbmfH1gcr7Tz2dQFmVG78fiTmLMhp2L1W1x4BGBCjS852JhL8k3BCBLFoj",
  "key15": "PvzAvRCtjZk4NAL3zZhgAoXaGc5jMFKfJjyrcmjB2CVw7RuBpsw59U85En3irVuW9LVY9b9icBwihFkfu1dg5Gk",
  "key16": "5M9sKAp1ARSaacata5BE9xgCdXrQMxW41buoWkohZ5BUphqnyewCSV58xfGPghqpEtGVQdpRNTCJTqNbETEawPge",
  "key17": "5YbDgwLnEWYwLq7KimF5gkpWcHU2i7aa6ErqrbSkR3cwHtbcu7kUvaB2Q7XGwDkmsCjVhD4rYMhrKrfjaJLjkJ1o",
  "key18": "AAWL1xXWikT5X4YJ6RjZSNq2k1HuN6oi2wRVLJaAmcLYQCdnF1WYbxXERoXUy1Zhs1bruFgMB4GNbk3uuFptj81",
  "key19": "5UPAsAu7JeWa2jN115jf6Mc5kgLdaxVofqsag76SUwoMMRBMVMzLDt2xtTWhTW7bC9uxusFexw9DNGUM2Ek9H2eZ",
  "key20": "2DWXcayRZaSHVCa1fsSpTocCzWCePsUsqGyW7U3HmKPtuEtn6nmTh9Vd4qyMJhkHXDRYQEyDanbNnEyWDFYHaPyL",
  "key21": "2XYX2oavsc8aahmNgZn38y2WxQFdT1n9XFbP34mF7g12cGfBZRtzZRee97iGB82amFTUnTXG2kUY8U9Wt1u8nz7a",
  "key22": "3PGuaBWqF4pg4poyTnhCQC5p2sHyqSgpJYUCv8qoDEQRd2qN9dQYJTigEu6nVya7QyUGiQC2PTq7my1uJnChJzUA",
  "key23": "4Rekj7QY2Ki6ufqo2rFhBAA5wioiRnhP1PxXLshZ5gB2q92q5De9WDEAWnDUwhHCbrGzEaWVVghEtN1ERXDrTmxL",
  "key24": "2f7Lz1go7S5UaJs8vpNDAeFzqEKDbTtDApQBBciwzisRNRd6VFtzBMhfQALAxT3xuyimqnzM6GGoCwtMbXDdS4PG",
  "key25": "k2v9LBmep8WVPYE4kw9GQScGfsnQALXU83pqyhzE9SsWfQfY1Q2Mxjtbc6RaktQ6j8BvVBmYLXGpn3XjJdxLaDa",
  "key26": "38TNsaL2VgEULSPU8TgZnWiPEVsJcJjzyHy59gMNchr82yXdu2P3z43fWvVmFSnyEwuedvnhDgGrjEHLvcbQz7eN",
  "key27": "3K6N31CipeHMpmeL4izWdFYnZfjdNz1SYKb65EcmtE7ipnzZTCHBCCwhQxSoL42XJ8q35dPVAbiNaGLFeXSVH8Pu",
  "key28": "2Pmq7HN4uj8W8Ew2M7SynTVK54vMhAjyPmPS5yCauYsFyDPAWqXwVG9bbRimdCnghktgtuNXE9T5gGuxhd9ba1XE",
  "key29": "2truWeDkUrkJCNvjMgufdb2WGA5wXqHHajZ4CvaeSEymX2AAhRUMo2hHkcuCUFpr2JYH9xQygqjbXrCM8Sb685iw",
  "key30": "2iiRp7SvLTsN8ENDNfxmq4wzHUJqvKa3fzh2KqvGnYfp9SiNB3gV6NoV2wH3J3e18wW3mqJcd3uFsM78g6pvRF5y",
  "key31": "4KnkomvykJD1sZjbLxTz3e4rFiC58Mu9uK9UGFN5kdfUJuemUURK7n1iPqBzNoz2W4MeyAU1ha97LVw4ZEDWHDKM",
  "key32": "33eeMte7wANvAjYRHN81F2h7wFPSs3A9yjevPFi5QW3ZSiGEiPeMP1dyEQFAaX33d3hyGLpFT5Wf8Rgi9fMTozJU",
  "key33": "2rD3RxCcnaErBCQHBX7wkERRfbqEW6TxontvsufgnQzCf1qVZ6vLjsNmfQHXrh6WHuW5Fx8XLpeZZr3oPJQDRDYY",
  "key34": "4aWvfjHksvMMy1S1vGTUYWAwLGA4DzqpUqrA5smsnaxqr15rWynrJmAeWHTwjdwcccTXSg6okzu2EL4nvzRw721d",
  "key35": "4jouVhtNSJQJDEWowBKPERRr9s4k1yCjAEcXinFxkx9KHMXS6XWhN2ZgXqPMnGZMYvdy4cFAwQkiAiqZET8MdLoz",
  "key36": "3kcX1DNJUHS769K8R719LwiynE7taFvfvdk6mT35euURzpnM68aPtdFRjPdjqtpUs7CCnyBZ71ie2phG926D4oCM",
  "key37": "2vhAC9ZKKQSDN3eWYKopH5fR7eSBKBUgP1qZue9t4NJUMdqr77uZPEXEXyVcCvBW8TC8wNN2W9tDLfPAyzaGxjPt",
  "key38": "3mJKksZabBx2589DEER6y4PQehB6owvsP3BK5CTmK8sJmwWUMoJxLvvc1ve11QKSv2pRqjXWHWsMHvdJeAfKUoGA",
  "key39": "mdMhhf7jpkjAu4tVvchDeeQudKMnQFVi7fUmqcMDnQadszj52GWmPTqPVSA93MQzxdVCMq3ShxMVZK95EEqP1pD",
  "key40": "2yXdfBAKrq6K75imH6kEgXiyEufVvVvNvQpqi5BtCsgN87aVvNZSu7G5UhPsxidixvqY3bBuk3K1oGyHn4gvd5tx",
  "key41": "EJCgSzhGYwsrocMiMcRJNVoURioHmmmPfW92LMKyUiJvMVKeBrqmpVTizqBoQgfDW6MakvW1HAW2qfZr6cx5vSD",
  "key42": "5wpu3YDW8nYbc7avr5mJSKymCb3hmxUYifNvJZrD9xh3SeYc7Cs29Pzryzi3u1etiz7weTV4ZBNsUkY2TmwBiKF8",
  "key43": "3aSA9XWpwErf9aDWxRxCLP6ZgiHaENTACt4bY1xCfPCbGrxLZk4iEcdqsRNenGSF4VAptFqisANvRXXEUturcUod",
  "key44": "4eSnND84dfGZdecLpHXKyC3vG99PN1phpPoDndSMbSfbXdNtJ4GdUTzPpqWuNdoJzTC4TT9rHr6zeKFEQr8B8K4A",
  "key45": "678sHnueXGCL3w2LAz7HRpeD1h57tj9kXSsk8WH9iQxDgWNWxFYBQdMga6TNGLHvRmu8TCWQrzLnt27YMm7N2Uzz",
  "key46": "5Le4nUq75XXrjBn9Wt7JqLpkt1GvjStRpJVzZXM7BxsLL8pc6Qb6EWdRRB869Li37MgaEZi5YgSCoob51AEhgAEL",
  "key47": "5YFT8GZjNpA1mBHJ7A6StSfuW34WE6Sae9wToNUFQZUmzrCr1vTfSsohotNNBzzUcWYrxqQuLaESF8B5EVGzW1Pt"
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
