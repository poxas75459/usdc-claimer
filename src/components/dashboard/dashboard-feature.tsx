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
    "4DKQxCDxsUwEKboAf3AZ2bhP9jtBojQuLLWq99LaP8NDPBpnb3LpvFGtDyUkR5rQXpNHHv2YGJiWdLzD7wneWTvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ipWs6o3zEwyoPXvcNRbw44jzd1RZGXT1haD96kZ2xF3h3wLa3TDtkRLhdzLqNremcawKtpHWYU2Ce4a9YhSt6Vm",
  "key1": "5M6Z4EfkFsvFQyrk3nQZtMkQ38dTGB7zb41DpMp7vpEkSZn1F92iTZARt9m56ktcsGV7Jh8N4TwvawAt1QqfLJ4o",
  "key2": "3vz6UoA9BF1VyJLhxsDQHto3xCyBjXERytUGEr3Fbcn1tuRsRNqMrWfGy9SDLj8XNX4czj77qoPtGTHkjnk5X12t",
  "key3": "3tmhvjb1VoS8mZffbXaUAR5pfsV8F3XPyXefjRQRR2oZJcQtpnULqjS7Qr8fRANaqy3MpbcduaWcFzAH5ia3oMMc",
  "key4": "3CajqQDvKpkjJvn2nZqpa3BL5sBRGZzTBp8q1CTauhP2CEHcvYKZ7abkf7BQ1cgwHDdj3JvmgHEDQh7M4EWipsDd",
  "key5": "ZXPnHScPiJetnaFHcY3RdyT1yuzsGbx5Wm1MaLwpDdHqmkxjjxHEu44nYhPqB16JB6Fp38LDiDSDkitiFHG1B1C",
  "key6": "26y1ZjYkc8fQJSJathn96n1XzqJE1nNsREDmuPFBQtEucqdNqVKkzuuYieyapbjjvdTx7zcWVezhrQNfVxeADdLs",
  "key7": "3YCEUZcFEEAzuY2L96DZSTLPLRrwXxuLDrXC2fDag3G7RSzooKgWkm9jBM294sGnbdZeyiEnNwtGBckYDCBG3ELj",
  "key8": "46oNSL4cFgnuzxJo4XVbXds1M1FiEW2eRmbafXvVgAnSfke67vC96rE2Kvtmg3i4fNSquMEdyjotCRKv68ERixfC",
  "key9": "2rYksXCPN9ML6U1ZjiTNYMEFuJQ4sW9RieydSUMZMDNm39TWwzUjM8fenypSBXjE44efe63itfvu76qvgNQGdWwp",
  "key10": "534bafCk2Csq16QV5kC5CWMTrFirZN3NxMo5LKRTpWFKBFVQy3kwasSKPuYtMDm7NHsBdXjxHBmcqFKffM5qhqUg",
  "key11": "2vEZtiX9pihXCbUppZQQRsm1W3jJtewWF9Gg16u6SMDgETRNAuZzKxtog5Lk35t7y7s15qCYqTXPwYoaHAV15gKa",
  "key12": "26CKo71UyarWhLDBYRAbRgqDWfZwSA747vxvrL5bjcY2zAM4s5s1nPN8KALo1fdeLtKa2nT1ziyKGbc1t1SCtbWR",
  "key13": "3n2KLMhQxit5SUZHNAy2jYKwSVRAYTVhTCreFHgEswQo2kGNR7AgZoJUtK9yqA3h4pJuDSAJN2twskSsapK29RpP",
  "key14": "4nYtPSxD7jW9KcX93Y7cMgvDQYRHMJ8HGXDBmcsdkZvV54TiSKPWsHkFoDoTcEjEuYrovhKriakuRy1YepqqdxwG",
  "key15": "3XwEUtXUXugTbKS8HRWE4yKoKzFw67Tr9zbtddAXqPAZisGx8eE2CyGarzASueQDeet3Ef4mA4rFy4q4mE3ErpXb",
  "key16": "UFhvfgboaaD1MvmsKSAUk5mV4ccN5ex7WBKBn1UsARkFty2keJn5dz1rDG7GFsbVAqAEUWSL6x2iDQMbB5TEoBr",
  "key17": "2PWm6KDkCNAywLHL2cHt8qwuXwA1NAeJxoiT3pFy5FcTFw8e8EnagTSRZXMb1E42xMk8oNKZHSB9Fob1Y9ik6aLA",
  "key18": "2C8zCEm6XnNkEMBVS8xM3QUBnUgoWWJrHBNMa8JJNhmwsbVjHsVzsrz8fxsAKbVJQFkSMVCFnHu369hw9VV4FqBW",
  "key19": "4gCBcbCHpU5kDgHWhzr2xUGKCnS7hoopogcRLWMPdzfcphaPA1ngryh9HzqzyUGf1pfncku2Y6nHAHxV4X9MPh23",
  "key20": "2qpgQh3kZzbLdrtoUDq6s7ehnNAzY6ZpQQeD44Xwgnt2H7gEXJNx9tqWVZ4MGAcHKciaEm5RKpzTtyZXhCw8WPGD",
  "key21": "5twNkdFfVfNvDdts2bPRAhzkz9JdmvVtXNyFgHRrDr9YpCcBgMHh2HdjRoyowW45uymVEWhHGydPaAX9VtVdNiYC",
  "key22": "31owPPTdh5bEx4vmcjmxvvCWZnjTrd9WcTsm5nPjRHxTeiZFPnmLsVP6dk8X5ojqbM68KTzximGiNgwsVTJBqGCM",
  "key23": "5DcGUcZKxrffdaq44fm5R9DmW3w3BiZUUM84uM7ecbi5nBysNzEhDymRm5YrA82fC3ncT4vSEi1GaQzEaJtaLzp8",
  "key24": "2LijzqPbDRC5hMwdauWk5Yb465vUWtxPsct4sxft9o66s4tSy8WcFrDzUWQnDexxWTWFFotSgKYQVTCmcwzjZ8sU",
  "key25": "56qwkETtGTmSDobS6hZt2BUX1qWnuV6qTGpeNfbi35zZeJgmSyq8X4qaM3LRbPBisUn6t97Y6Jfsyptyz7uGRmKD",
  "key26": "4mdscBqRqa1eKTjREecpaQuzSn9oV9zvgchbgZKPetBGoPXAoTH4hDSwGoHTYeknzSkGMPznReTtNQ3D64Zacg4q",
  "key27": "RdBX2CG57fcfHTNfLJM5Kfm2BLHv5zwwepWpqRtLbvGfyG5iv4Cyzro21HN47kNwguR7sfU1GcEYcdmeRFr4G4i",
  "key28": "5Z7gXx7bbvu3MB3MH2hnAsRzwhU4Eczkj6jbdQmy5jZWaseAauYKYjfDJP9tVXUjyCsufrrnugEvDbuEbvXFnjpZ",
  "key29": "is73nh496dPer5Qty4osguSeGh1XDoJiLcmnnicH51h48CmJXscLfbWBYNw41qvVhYf2CRtfydgvWP1cYHpuYqM",
  "key30": "3ZDBvaHFcquhS5A7hjqgy72CC78oWrBDQJVXmJ1zKqPShpzZhyfcYwVwgNczmRNpp9kV79Va8MGcaX1h3iYoTrdf",
  "key31": "2u9Rp9GUvtGG4hrKsfYcpGJEWhgbkdnG4ATnvrtK7f7BURuieTFyJWj6QJvmt4T3zRVc3LpzQkc2ZvFA8oFg14Hk",
  "key32": "5q1LDkEsrT6yPZQ6BJw7VHYHJnpVJth5cpWfZjVuLvm4GVcPiB7DpNTfgLDApDQyiadc82nMqyGFH6HPs8mrf4YK",
  "key33": "32cQ52VSW8VWAtUBsbaRzo1mxxR6UtxkFXk4cUmBBCwygRn1L2DYZ1sEy8yKcUYyN83CWzriJrtv3nr2rkg3F5cq",
  "key34": "2Kzx3DffbWWsMrxUg3NuK9pGFD4pV3xv8dmuw4Me6U1GP8o2Ug4pd1JuvH69fAyBtJwLJcEfTH5TFcvAx6aFPojK",
  "key35": "5uSvRCXavCgdVPbFLhQiRXmpGP231DPBFjyWS3E1TQLJP2934C7MBJxyKnmhjJn8r7Ckx3u7cWvkouYTFc8b5Zza",
  "key36": "2c25MCk3vjpwKKcd9or6zdZRqw1YLnBckEdZQHV5S3JqiZEwZqFnLjTBtrTxGv78tQ4fPypr9b5zKc8RDJz6LJ3K",
  "key37": "2B3drrKS22cHPviHs33dV7M6NFaoaQwZRRK5QkWXBp2BgarifgHWoVcvwyzhhm3vWKjVd1hrw5jf1X3uV1X1F4UQ"
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
