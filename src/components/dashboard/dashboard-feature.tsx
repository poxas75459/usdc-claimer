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
    "3V9LWPjVXL9PZL5KPGDhTCJ59PwofQzVup1SKNkAiUsNEGF3KJNjyAUrUQbK2UEHQd5vaPU4PB8i4cjh9oUgBC5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ySUvQHdXUoL6xMfVRy5vjrv79ovXsYut2ighJsQBxJjvtgNTs18bAgUBCJMEJBZm1EEWKaUeyt3RCWH31BGKM5A",
  "key1": "4tznVgcqkVbwAxz1oKunx47SP3MozET3TYhxryFvVgATZnGLgE3qs7KTWmeJaZK9z7KBrryEDG7vL2g71W7uzARf",
  "key2": "3ymq5r9QLwDN37Fjn1JEbyBqt7Nw6NGq4eQw3rTaGbLf3c8gKSgRdd2uq6uFjdNkuY8iWNFbgWSaRBVU3uYy1co3",
  "key3": "2k44n3MPsPBrdvaymcvyouQ91yFHezuLuSF9mJk36qXtpox7J4xdatvywz3HHXc6tQ3sCbQpCe58bN76bzkCcCVj",
  "key4": "5KR1ngwdvEqC6cpFEAHrJNaeZMMtBzwD4Wjk8ymFnMA4tXMYg22P3t8sLygcpd9zteuCSHJHNBKd2LYceGRAbNqn",
  "key5": "28qp9fcWZGNVdFc61WZGLwNfYpoq1Jcd6QTQtDoAEWuxF7cKnmMJyN2ADZnNM5cpGp4EnBXkfy1ERriBgNiEmq2t",
  "key6": "2XasxFcqyS8FHJ4n7uB4ScPwghwhriJoxq52YqQvLTxDkaog3JiQTFCvfY7Aphx5QbvQ7k5AHVkz5ueTNdJ5oLui",
  "key7": "3pXfK5Jn7r6RWd6gwVoPtUUPFjiuZSAupPHY91vfdPUFG3NnNqvk2jfG78fUVwTeFud8nzgSURAruiWysnnYWQCs",
  "key8": "24EMSLn7woFYyLTzknk1nX5ZyoLfzUnqLsdTQpEr547oHhpNpmZ67QxTiHs8LkZR4yBv92omcTPuLMzCUfK3xL2v",
  "key9": "41fhdv4qC9kPNx9BScvQUQ5XqSQfVgUMvcpwpqxjWe9FH92FTW9M1gWyd73nWqk2i96Y2BiHRovfwh861BuApneW",
  "key10": "2us4EPUVakfoUfygazXcLfF1nUQbm8FnmvyduXAsTXV2XyMJhGLGyRtFyQ4YA3DSVkApAmNbQjyw6p3XNyopWNSN",
  "key11": "4NnnecY9EFkHb7yaA5aFQ1sxQHWamxWzcHv4m3ytQd2VimHRZvSUTbAAvGu4U8CnoUnY6YpVkxtdRqGjVGbJcEcD",
  "key12": "5QAop6YH94vLZQEyNpSyuCmy1q48Yhmzi9oWLiBYkqzDMe5cmKBhUX3PNF3A3tqhF6Z7x1gQvSzPRK8t4YyeDBSJ",
  "key13": "z2dFGM3Vt1toT1Eo4if23Fv8Ym15MtHDuFtSzXhwK6W25dcoM9pEcgbN3tK51ZtdJSSbfYDRZpPc95B52XoKs7D",
  "key14": "5avyb7TL5dEKGuV2uKF29oAEH715UP1CnjFeSJKXrPhh9LELxANPgLDdq8ZeVNA6X6HLsT8v18o91mVNAmDbMni7",
  "key15": "3FTEetGDar9ndGVpEHUQJQJpnoW5CUpocTTD9KdFgdQpxLRUVmxnupePoHXHGPY1Ntx1YQxGKw31FcHi7scLeA8D",
  "key16": "2K3tSopjAzaMnupTasq267yjARZBJ8TNYb5Hy38Q8HLGBQrQGN5W17igfbYHeFD5ypwP6jmz68L8rryVMnzG9R5Z",
  "key17": "kH9vi2VqLYpT2ujHroK6PhSQbmZAzquPvVTTCMmsTE6fZ9XKQ2VthRGHLd8U6Tz8e75Qjct7vWma3rHe757yfiH",
  "key18": "Z3paFZ1JAeaJSV13CoGXv3sMhCqzKB7a9kJp6PQdTo2rQrQ6TkcApvBRvdFy5htDdCt4DAYYGHibUySxquPbbuS",
  "key19": "3v6QJC9gAjvoW8vypaXzb2qg8YLNB6GBnjhLYiTVPkKWasHVRVnG7PsrhRm6ChCzKMDEQcz2PBTrLRkwpbk7xbdK",
  "key20": "XmsNBFYJzPzAaEtBjxuwZvprPnbBe9XMfgAJibnsJPen3ByigZxxjPR6Qu7fMqLHKoSGicyrnFtsgHutSBjnibt",
  "key21": "5VHDJ7H1TcdjKfxLtB8JGtYmXYpbn5foTGpffbf6ihNHUrjsGLUDiYL1xfPJnufKRPkr95RymAaTeouPYhwCu31y",
  "key22": "5rMtjFrpCoM3UyBy9RgEiM4QK4PBqtJ6Smq4KKZzpLSaHcGxkZJyXFwrKZG77odyuD5DWG8M4hvLWeFzbkgqvqV2",
  "key23": "4N5R6t1iokagSQp6vNHNaJhkmnZXZMNCSgi2ZBowmGqrqJRQMJB5awZvNBMKB6SNgmBwsyYVHpkWp5KEq9gysKb1",
  "key24": "38JDKw8RTeKMhPVYEUQhq3svxm3XCrHkwdxMBbLsEFWuZH9Udd9omvsYbHkM47jqKox8BTLhHhhYiG9wBj8pNkDw",
  "key25": "54ZRwc2BMhyyAxdPN2CamheFpexatFTvh1dkNw55u7zeu4FrCcVzdbvG1gdMQsN5kUNkAqUhbxtVsUsZVkDBXsCz",
  "key26": "2nNzsMXARWQfP6KaSjA36yVYKxrj36xu7dPuFT3PnAgstXV94g9mUKPwQo18ZZiT7VfywKYZUniZ8mZHNEBgyXDv",
  "key27": "5kfRuPhu4Yx5hmzXWvwaLz1q9wHDDqgkbBfokhC4ztLGq9mrjU87sQRMMs1HhmTCxz1XjmeRXu9HSnPyFiJPYsiT",
  "key28": "4uuhTAc6n1zeCzxwbpSsJcjCSSnnGQpqta4nQCdchN1Zi32kwYerv5sEbQJRYNXc2d62JZXFu6wsnT2J7vXMd9Az",
  "key29": "nC6yeWaAFwKeWuVk8n98hpDwFXeFiaW8g18AKzg2x7Lye7ixe13dk6wrG2iU26nSbfte1jmYLDDBWkzSnewgjmq",
  "key30": "8qpoatxZThif8ZWeXj8ESUgzng7QtzNqF6HDdpEw9sBPGxNQXFGtz6buFbj944shwjjNqLFwAEEfyFt6xh2webW",
  "key31": "LAPdzKDwPa9bFGRTz19hxbcAG7pF6KZgviD6XsYa8D4L3SJmgoEDKEU6qRtZg74EkTMG99wDzpf5xoTLiEVgkjb",
  "key32": "5WbmVyf91mBv6z4SKPMHfpWiVc7zNGZiHZPNjyf5JmC4UVVYeeFLYjAJP1ockGbCzFtUyCLc1yRqMNgoHzZ9UN1U",
  "key33": "4p3ktyvQFDdQNeQK8MR44Di62KNFo61u6sFD5m49ziejJNXJcyjBizAQDvgKL2qKbg9MxGZ8B51ocVMrEc1bHf4C",
  "key34": "5g9H9JN3rbiV1qbwGyr3UG7V2UkTT9fjYG9jXzw48E4ruahTmrdtZpTWid8UKiy4Mn8TA9nbTF9rutRyNC5539Tt",
  "key35": "2m2H6hwQY7n3hHxZykWJNes2rVGJ4uuTbThVqMz6DRuiTC6rRhF15s5JQvEo6GNHMmZPgZwCGjNyMzybRVivqKAj",
  "key36": "515h9dk5fxig7rX9yGQx8H3yGgqxroxVGkfnzaxU65mhogdBfRC7mwDfCAyfLCZwF5QCbnhFiTZbYFS82vtbZdqk"
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
