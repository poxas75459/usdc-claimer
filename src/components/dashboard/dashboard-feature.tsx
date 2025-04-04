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
    "3F3C8mE8babVVatfv9sLb2oq54EeoEQMBk3hDadZ2fN75gpeNPVERhTsuyV138HukpY1CfjcPEj25s8bdJQDFJHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SFERjM6rivGizzteUSy4KFg5KQC9pSy5XFnwwmiFdxJtN18ZNktYKikh6atyzTMweMgrwdrSks7k7VS21WBAjHd",
  "key1": "5Y8Lu4XVaCQtoHGpWr22Khxh9uuxUXz8r5gqsoRS9AXGHigzsTHNFFN8FA54bxGmjJdXqpHzfqwShz15D9z2qRSy",
  "key2": "5jgGKAvG4Es3Z7FVavL7ZNWxmZw4uo7DKKaZk5DS58xntJY6aUUeuajCqXq2PHqST9rKiE5M4s7Vyg3WmCRYSfie",
  "key3": "UFvLpkwdU7pfvWnXLzuuAFZ1HWLz9px1MLz2z6rGT7Dd3de9SKGgahNkj1HwxviTeP8h4M222SPi3pbYpENT6kG",
  "key4": "3zwDsn64CMgEBz5cVRuxwzm4cffDziZU4fRvMC7iVScTbrGVC4piuVdQt56ooDGoW48ivfmeDoYbpYu3Y7qoh8Sn",
  "key5": "36zwGt7tJ4Nji5CQtnDgsPzK4BwHtG4CbmTM1Y3d9H7CMk63dWphxQvPnFa1k1aYEZNueXmhGipqrCzq9GRUCbdx",
  "key6": "HLiRW2yYgAo7u3qHaN5ym1cey7QBLDpYH7DGoZqeaNmUqKHN7DPBjbN3kjQYchvzUSyAA7C8HGDg56ai5DVxmkn",
  "key7": "4qGfMLExEuPTa6BUwETw41krbwnb9raJb9JQJUyMcw3FcuLBd614gZCN7WK2jPmAs3TTWz2yC6tUMTde2Cbws9Dy",
  "key8": "23psqhuuAQZ5XJtJSkBR6rCq8BfNLRydMNAkyodBgQfMHojqwSo1ysnoTP3zqKNuTrUmvLXRPjYMopdaRrM4E8S6",
  "key9": "Xv4wXR4A2wi26cxduLqCCPdMrpoDK9d1FbjvjvWbw6qvn7ok8JCt4u29edX4GXe529BfiwJdqP5z96ez5ZzTYmb",
  "key10": "qYRtxw9zKsgQEFKH5jZWNDnwkD6AsStSopCFV6tV4xbL6vPt9nF2VDkUgU7GEjk6WCHDFj6dMXx8aae17rNFe8T",
  "key11": "jRBxzTT7fkiqWA4nmcVaQYwBmNqZ3U9pRNMBJUNtiqpu5GCC5Ts3cH7GGcQBPJT8ChN3jjm8cxogQo3vSp6E3Dd",
  "key12": "3HXiqSXKk2qorS38FTMkRGtkQhWVP4yeARZARqx8h95ryro2DsvpQsVVKbMfHbNcERXUWW5TZJxEXF8T7xjntStm",
  "key13": "4FS7rEy7tzEkPyWH3XPaV6CiaVzKdnGkM7LQnkiDhnaKkYyPZv7FCDH7QqZRmWmtUwrTsz3aWZrYKxoUXH4iWZo5",
  "key14": "7fZ348VyAfV53JbQLGqsH9UvomKS99mviRAqFRRJUehnCBnQ94v35sX6BAfdqYLzGMSMcEgLSSz3TQn4J6Ux12B",
  "key15": "4goGJNQzm6S9QHFttumRYhaDZ1TxcXnLLKDwkdXaKpFGzTpLs9DyRhLXEPYxBq81ynrqv1eRZGi2VMqSEDoNweU6",
  "key16": "5M4sqhCw1yMHm5ron2w1xDJbu4KPdeKTEbm7eQ2VnjxEFwy1SXVrbrcJmLn5FDMYUSyj1PZTSa2qRMiFipdaVMBi",
  "key17": "4TezbWCfCiZM73kc77jg6CfZk4jckq8cnZxVg6wYiTiDKnrp9EAto4HHyK8zqhAtJvtQWo7HTfCJQCv6u7dyZRTA",
  "key18": "5TvzUJnuupk9rhx87KL6JZeChHvvgBGDy2Le9iRn688rQPFaSPrsmLbBVxvkGCbCKBGnTrEc7kQdEQaG2NZCKYd9",
  "key19": "2cFK4KPzzAddZxXqQVHsTst7CZMJP67X7bezyCAp1cMhCMyNxZoAHg9eULJEW9P7vK9CsSnAMxViUbZMA1yReuvo",
  "key20": "48wKxoUYvqoTrejTBusBbHR28vTTBJ17etQMe1BdTv9xzRrgMUR84hRx5KjcFJAa6bSZK1N6dajpKR7idJ42RuEd",
  "key21": "3yVq3QaV1pK9PLRk6EyhNJKejXq4m171323kDNVcH1Vbjvi4rFc9eJcA97UZbz8zSv8TBZincNCGt8JCw8XAwZx5",
  "key22": "HSB8ZLmFtqdAKt4s6PnDVmShja4LQ5aS4mnnHgpg7RcgY8CXKxqQrnDfb3ZLVXmypSMpJ6rpT5q4KxpHqG52e8Q",
  "key23": "PkrjfeRQoBWF3gnNKntvS4B8Smbw5afXRmsXPJntayySU7JuHvasN8cQqLVAiqgGLXSUhZW5LBFM16maP9uyD9e",
  "key24": "42fksN9uWmpDbqWAG9FKAa6Kf2xskrQMBsrtcuN4UWarYRVZinsbAbNYpEUz55tJ5exZpfeF34zusjZfEGNm9gZy",
  "key25": "4Ya4oxKKVermwW8PjU62aggrJfUSDHN7fymf7NHt2yZHKEFKfQWNwfQ59CU1HPFy1yJTdNRJkyNbqQVu3KJk4m9G",
  "key26": "4i1qrYbRn3nmTycgXnVwr5rqGA6acR8WdicRo3pSS2155ftAN8nVK1vPaEPCsBgKUtcQCbSLJvJnp1Voa1kMHT6f",
  "key27": "39MUh2gfvqttmqRetm65mChnHF7mAnzt2ZkT78cQ2C5fVTRp1QD1QtzYcJxxDWDxzjUXJwp4NfTAJ1XCC8nxxJGy",
  "key28": "2fem4eXyJDqCHokhH5ShL6Ke52pZ6dfz6DnpeNtJTiSSnRvA3jWd7aAuAzdurpd6C7sRGT8F31p7WyY7Un7JE7Mz",
  "key29": "45wnm65fKGFywRUoDDW7cesZvzDwaDYxT8PTbxEMxrpNk8zHTmwPBqAJg4EeWcncPiW4HyVB74vUdu56cNqr2t7b",
  "key30": "5oZ2iWpBGvGsrXuFnXMp169xarVRgGpsVmA8Ad4YBYeLASppabmNXJp42DxnPH5tKzGxMbZKPs3TmEEqkSqDwHPj",
  "key31": "4dLPFpL6QXqLaBhtW2xbVZRCQkZSn8wLV45daPTAB618DAPMxXzfnNNRuTBJUjCZvKWkikopdF4tGTCMzq3NU3ug",
  "key32": "JHKEPMGn7unPCfWaCs7WC4DK5gTsYbmZRG7yyUtb6agRgkiFC3ZCkGgJtjWtpGkytQiZbNkmUA4g4hgfPfdewkL",
  "key33": "5uqSyqGkB6zt5jK3H3brtsmEV43dG7j7RExogbK7nzeTL7aYaSS7YEVwyFq9qbzSQU9yCYp5j4aVGA7k8ouptGNr",
  "key34": "2azdpBmmVayhAdioark9npEttXsb62MVpZspiUH5eWiRAACVzuEGiUfqwjfWLAvCm66y8jnEtiSNxByto5v8bUgN",
  "key35": "3ejWki7dzFvJFwtUnmRJCiWi5Af3HxsVgZmZpiC1Zt331tMW2UyWaejoJV76uW8FsxTMtUmw54ZvH9Y6GGbuEqVK",
  "key36": "3Dk7cC59dxYcm8reNLbFz4Kum874xPqRv7Jfm2NkvNEeSKETf6eamjst1QKsajEQm2HBGbL3qpLBKRGahn2cWvmH",
  "key37": "5uMfkqpKxg83zPi5L8drP4z7omy7QPi25L5TyCwPRPxsf72XUEHe2cR8gGegVNiKa3fqEuutQZGkh7pXESMLW89v",
  "key38": "64U41FmBJ2icivwbMvQMBSVKSrhTLgcnCRQi6wt1KNeo1yVZ6aUgBkDzYuDMuEr92yseAJNnXoFGNqz2NckQuVJ4",
  "key39": "4Bbm4hgZ4TCwqwcHEzqr8paEr7bCQnZoWPWdHdGGCpHNMnMqBXfrf8yYa6F5qNAWiex2ddzFbuobxakxZxdrcbMq",
  "key40": "2L4EubewHJsyWfe6YUGr6uSkjoXe83y1bm6kJdUwUSKGoiHjk3zT1VkKwrULQRzLZtteY9v9shaLBQEbtjVJpip8",
  "key41": "jdnsGpy7warAvmfMj4gFTF39idvLq4orgd7vbBVuYt97hoP5bkYGj9MgZotB1CWzfpRqL3ZnV8axfHS9piQA8Yy",
  "key42": "MnTr62HYoSdAeJhx1JPEeiffKjCTdKChhrLWYjJdmidU5TmQCmEJjSitqSckZpetDZEwWf9LzAAnouE9iLyxeWq",
  "key43": "38Bs8tfVoMGWNrZjQbaoJWEi1NZJAedF3BHcDVm8tMh94tGH3bBGgZUgKuDrJu7X1BDHVYeN17j23XoSdi81sPrh",
  "key44": "5oS2hAZYqXb6Ug4BjQEnifmLcB8eT2GdrMKzvQP64SFRUGjdcz9TrmGFeoWkexgbSBsFP2KDCuCk6bwjspohRUrf",
  "key45": "4g67kVu6psTs2Hde3RVzJcRmUdDKtAyo5BHT3wgVPSyH6zFLvKTvXotSoCMfXhGSUWNWzLDcBQJcrKPmsHcnuzQN",
  "key46": "1qdi7grU1bghKz1wmWNg8MkidJZ67eHgVR1uZSDL96GtjRNFqJNNDxDDjWEJoMA3hADUAcb81khtgvazCUjXjym",
  "key47": "32HNezjvDdjDvmzmrgu9M88iYzLXqMByK3jftPUF9CAEe2jHHR8a1Gdv9yZSBcZWHTrKW1PgkjuGz5TJAurXuaG1",
  "key48": "36b96gs4DMGf6dnGgj84VJ5YP6jiZBPX4yF5x3oU6UAjUtn3noCtkdafVDC1NaV2toBLXvyGK7GFmE9VPDuQrkzh",
  "key49": "2VxyytTaPme2XYdVTomD4zRbGZzf2GiwzWPpinuU3GFHgM7KkMdaMYN6k1jLPZiz64yACrcYnXvqtp9EfNMVZhHL"
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
