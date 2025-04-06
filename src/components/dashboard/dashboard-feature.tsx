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
    "p3HMxDBYaYScxRGneU5Y6zRfYodkFVorqNZEQEE256rBJJVJfyc4YmWJ4jce6TK8tfTF3mrad4k5a5a11by38Cx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zmZ5C9aCQbM3cLddycBynVVNM2GLLz3yS3h5E7NrSEx7mhdtZeRLkUFSUzKihCi22vYiFf8xh8ST52NEGua8kox",
  "key1": "3ZhiM9rmYe9SSAbNByekPHfxRLM16a98e9bQKsNr3J7QtpMHGztjCnyF8niW9RmqG8kP44VPd6ynDxtmjonwqUqu",
  "key2": "78kZvRZkNc5xfVQ9aJ1sj8AU6Ff9ZEuJzUqFyAKe9sGXUsHntxpgpKwAtuWCHidPKvbxGrcTL3WyHwJgG8qENqr",
  "key3": "H6fMcxwgp14S9SPYdkRRB2o42qjwPxz69unr9ybqAex9MYnF3tno4SbZYzHPKQK9sCnTHxf3K4Cp7bb3x3ZVnoe",
  "key4": "2YRJKKVLRPxWdPeG2ZybpAqspP6GgqzKYkwXHrgBdaDJyoMoAf8qyv5NxiYEtpf12JYu2EYmtoL5eBSA2cU22o19",
  "key5": "5HENe3ehzEcKi4oftB7efejnoVJR9GvzfQDFczm2trfm2e3T3hoJDBZA82pam6pehPPCxAaATX46EXkyTr5odTZi",
  "key6": "5gUihsWnstet6oJFdRcsJbuNKoqPibH14RF7QwmdQwGPCNP5WVgmvPwKZbCpPx8oriNJSYHNd5DAqiagmB2uLgZg",
  "key7": "ySzoobuAXb1NSETVkcuZsQeYVuxkKnyCnsFDjQuoLr2ij4SeRRHqFPDgkjz292a1G1s9YFZFoJVzZYRgHpLJRMr",
  "key8": "4k2oDdiTpdDowtHgFzhHvTny4DQhgy3cKzLd83CpGi9BQGcFa8TZforG2WYL6JQQUYXNaQTBiaZirruPaUbn7dLM",
  "key9": "674CtLBVSnTLBXuTwrARTfsWvoVYugv8B1uiynFhTN1RavrZWBXYXMrpbWovobVF2CNFSEkVTigdBxPNSivCZZGf",
  "key10": "3hz2scNTEyZ1fB7oVp7NhK6Lx94u7FEggnLtKWhQbaLhhifZNSvp8N2NvGdehCfEjNB4dWAUp3NauEdEWroHdcGw",
  "key11": "NTrd6LTgUA1hEHy7nsCNF1zZFt56xuJyH5YNkYkrGkjQE42Zwh3qeSc4EC3ZMoHFewNL9L7gCH7oEBHm3R7gXLx",
  "key12": "3WXvizTygigzxzeormfuKKMX513Jsz1p6PwARx7LnQWfcVnxddcx2Ba4eMtX3DR21QNU7Jfc7ZjQmZtJEhYWQHHD",
  "key13": "5n2sATu2BCbeiTF7riUp9Zihw5Ke4GoVjmdCfV9vf1guKJRBeURhiSbM6zuDp6ts6whF2y1ycCKyyE8P1Mb2p7bR",
  "key14": "51vyUjbuLPyyVNmoxCL26dZQwc63D9xpFnDnNo1vEHCmjo6ZZgWbWRYbSFZCFn8e2hMVk1wC2LjpCnQ1JkzQjcD4",
  "key15": "3zxfVUMAPceoSJPKD2R7BAgdhKUqWekYTsdF8i1kWmypWQ8e6mnR2ZnvHgPo5wBzuXf6iqu1GW88Hmt2T7WBkVbo",
  "key16": "qMVd7piihczJi15DYsSmNVomwwjFRvocaw1QvcksszDuYoNCFhpotrjNjMmYh9bt9beTsqHcD4NAtQ7MDAQaFzD",
  "key17": "2kxd5TfvhLmvtxkEbLQVye4Sa6HhbSfp2M1LfAQo34i1PZ1AYzbwnkZmbEytmZcDim82Kq3WCCBH7godUxCdKsNT",
  "key18": "13kvn1LBwEkdgJw3zK67BvbN7LkwxrE7179ubmvEFDyLEk9M13GXzAMU7VpDndQZgpqEn4yeGTHTXnEctXAAtdi",
  "key19": "4WyX1cPYFyUvNkQT66YEthhtCpUgq757siutFr9PBR7pJyCe9nCxTkmT2cdfXZEruRfojPXjzkvUC7BQwWA56FwA",
  "key20": "VQXB3gJFGZ7rtzNK4gCxDRpYy8MnDU5r2zJAWnWQqvUe6JAPy7vssbnHniz1joC4N8H4QXNSno7mXLbkyKWSJ2S",
  "key21": "4JwdQhD82KvD8pdgifizQkNBTiWJrEnbTW8UF2hpSJs718qaaTUsAS31KtiatbQgxdaAhbTsLMhbwPMDzUUjTFUa",
  "key22": "dndweiZeUL7TJsJnrgu7LsCKxxKxVQtbk76y7w4X5wKh29agmcUXo6bqL3GLZpsjor7apuh8ioyLsqdtPtbCbPm",
  "key23": "32dnyzzu5rrc2fhfbqoCogKehgP41mxmshiZTRRP1JS3vTNdn1YzPuLUMmTFghtkHMdWstBJoJm2BERyMzfNwiqL",
  "key24": "3J4kKkSgp5Zx6Ys1T8ZZdPJcgovGHwuuqm2thb1CwWZ6XowLwwy2WxTJ1umhVB8a32iXjpCJChPfupKBteBVKdH4",
  "key25": "65h1paFLHgskmGCPvSxc7xPmDpy9DuW83LvQusTBhtc9qRBg2kEUj253JERqqP3kCzSxfbiuvTWu2nYnNKhxa9gc",
  "key26": "5SwKLhT647bHowbTJ5BJWxEeJoazKG1sTYQ9i17FUtutaigVrzfv4cqRw2ApLQBjcEsDCWm6mKLYkcFeWshZWLZx",
  "key27": "61h6o7p1cGFYAQhkZfKUkTpi1sgAhGdh4x2yDdvi9sDfhjcZNy6NTE7JuQqf5gHBa4EXjeqUAU7fimXrEeNySLkH",
  "key28": "PGbr9kR1XVYtaWiwvDvPtPSTf4jbnvcBzuAP8BKDgarD5Vxj9R11tX4Nr4WYCuAR8LopPCMMK4nR4ZcvgZjq48i",
  "key29": "hKzBPdVT6TQFBAQY1VFgy5YXhJGRkJPbGp7tQzsDMcpkRMygkWQMddvKd1V4D89EJnXD1N2mYHVEfWeuToaAXaj",
  "key30": "2woF4pviaUavmh4HfPrLyL4VxoQMxJXvr2GRBxxcDN1WWHeyUByS9EuWE2CMfBLry9oNq3MNbTRidsRaNSsZ5SZS",
  "key31": "5T8xVhNSbhXvHXED7oT3MmZGvp1Xfu8BRSDZxsupEMWLnMNN7kGe3dmrcDQkw5yqG2zXjKKuE8EETnrfuomtywfK",
  "key32": "5decS7GaaEbQUK3Ja7JsZSNTdH5rDtLPH7LhG4bSiHCVB9vYDvBmcdbBB3VKbrwQUYgRhGufCD3XXX9Pk3PaAGp7",
  "key33": "4XEPaB5SNLXMPQrVPhSf1NiZNFSLVMbtirK6UdxmX49J2j5goc2czgumGEAhkAQhTRNgNApPBnUyU6ZP1FXhJ87x",
  "key34": "2Bh5nK82JcPsohpQL6ZwmDXErqRzeMEXdskMS67PwPmZUTk23S3Bp1qhNPofUj45Cu5EAjSrCwx6TaumgC94qQ82",
  "key35": "25Pc953gC9YXWVAkW6K2vyb9GVAm3QARsTiv5gKBqE8rURtvxfUXe2ZpbgjowLvePC47g1dZV9hxVvBQEiuLystF",
  "key36": "54D1EnYN82bPss29ZqcLEgtLDaVzL3n5hLkze1vDuX19kQ76c71xXrVY6deeUC8ukcCizJQggqEesun7SPSrWiE8",
  "key37": "2hXmobE9cjUrHfoyVEmVLNAqSHNnoU8o2N1GdFBJNvi8md5CD6gWWw22noH12pDnUhD24HbbCN7tjEgc6HcXooA5",
  "key38": "2ScdAPrYqfvbbYkmNToVwTUfzsQbUdiuTmjzWX8ZXB9qxjFxBzvNe4WtyT3R4xPLCDGnfYAs56h6LKn7emkkfiJj",
  "key39": "4iJJ4o6MHCYbFDAQZWrAtf2hSRXEYZvovvC1N3qzQYuM9ymXPZY8H1if3GXPvmNebbKFga1PZ8ADJ87B3HN8RPAd",
  "key40": "5sECPAvCDCFRBb6pPxVbLhvFvXEe4VKNuHp4tMdcTx5REV56vEeadNQZZ5qQFGeUR3zsDgrbCfF3CQoVikHrhnhH",
  "key41": "2RXKqWjJPa6oZgydsfoYfjVabvyS4QzCGwQCmzkBh62TmYGVx3BsfDMqSA812LxweptdXiBUDvrmUM2HS6oVMECE",
  "key42": "2GyR6ejN6CLVSp1JWfkh7xJfnnSCMmpVS7JNfn8Qt5ini3p21xdVUW1YiKkssyJVMxyKuvA8jMwaAmpBtdVH46Kb",
  "key43": "TR9xYyUQd5rcrKgTKxNXK4ZNaeWT2wQW4vdmWFvi4uYuGJQzyXhhNi6CVkCVVg1UaNEu9riaabvHbZVQUcwPXci",
  "key44": "oM8gkrMnf2AThMZypurBE7UVLiscw12txyHcF9fSDqrX9DyWNS5XrxceDq2Q89CZvDSgLSgLgkEGX7HMHExmGx4",
  "key45": "2sC1f58pAEsdQbus426h5Rw2LmQXjr5Rbscu2KNL74HQaCSHGBxXqxFWHuR9mAfoLCRitmvTrA47tiE3tmSNPX89",
  "key46": "36Fi588xncxdEZXKoMerisgbcFSYMa2MW1Kqojmi9Yc3mQmN95mfMKuyt7Lx1WJ5TYEfqgv6goW3jSr4w4hPb3NM",
  "key47": "4c8NzBb6WC7mEBKaqKU8v2ncssunsCNRC16W6DUGLk1bZR4KCUPYi3cWryws8BnmtMorPk9fztT6tHZjP3aZwUo8",
  "key48": "2AtdmimHWzLefZEjqwH7oAdSfT8EXPZk6Po3z2URoQCE5LdUEgRZZM9cGpws3K4LibU4FHZHiqAVTBDc8gQ3t9JF"
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
