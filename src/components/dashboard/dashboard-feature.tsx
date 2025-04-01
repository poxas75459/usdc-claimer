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
    "3k67mh7BGbHcegaoPZUxBt9yvLiArKT1DDZ8aGSeJcvMrTttuoaHWoZftoiPATMk7qVtrSFMFGCPUiboyS6nySWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YDSSqqrXCygszyNRy3bqqUp4ck6YBCC1NakqLKLcWqX3aMpn8Sqgvywnkxi6n6M5wPG5xPHRGBXLf86WJYVehX4",
  "key1": "3mDQzUDMDow5MdehTb5C6UebWRosFUtMVYwbMzDbpKjnrgMsxRTf5QLfmaNer9veR4sCSjEYGCEZWatAqb14Gfzh",
  "key2": "3iBxratfKht8sXe4f1YuYXHcsgtDZwHytcePHForHK8LRJeMRZ13TpvetQr8A4CbjwKJpc4ydgFVheKDGZ2ghiCg",
  "key3": "2XsTHbhyetsx8MCuCcURMJEsSnxpofv6or9xNnY5fmtEwHrkjLYC9qLPWbRuiQ4DvX63NzBEMYeQ8K9P9kLxbvF7",
  "key4": "3Cjw35RSJuu2dGc2u3URj8KxKZQu2L3AqYtWA4qX5z7Ai71r5dNVDcgtpBoAHVP2BhT7RctEtKVUXsddgoZB3CXD",
  "key5": "2vrEipwcVfrsQL488rUjC4JTPWE6bRWhK8MgbLY2BzYgcf8FVktLJJ5McnZCh6rNDVbGKcsxcjLZCS1v1So3Dnn1",
  "key6": "2xGzQMD5LgMv3LH4joWhAwBugWEWcNRWgv3fQGwQ97V7PdjHZpkVpDJthUdG15ns8jPkDcKi5e9m7pgFcrSYGuwL",
  "key7": "2K3ijDDYgZ2hwEsb7iKBuxVZZqy9krm5WK9ZskozJBxLZAuDKjgNZsuoR426TLjRskGhjGdvpTd84ZKsY5h7zeUi",
  "key8": "5VhWaeUwqFGQtoxWXCKZcYSgTMAC4iLQGLY2AgPCGtCGzpEjCSpYxaaWWcUndZQ9bkNS5n1fnpcnmRpHnyfmns3s",
  "key9": "2oRLyVXabhBDfgwP3DV8EVNMHnSXc3ArUvbqevKRdsQbQrdzd5FmbYSssynPtGy1RWQRLAXnPiZ9viRU66maJ1fJ",
  "key10": "4DCXccLRFMr1hC8fpcpiLTKtFJxkmuZNpouACKveUeRdL8xbT4XsBmd3BjCJU8ZVjb81vUYnmt6o59sJhjVV2Up8",
  "key11": "CTRSGnHVBgx5PhNrKRPdW5pSVjEfSsdhxqFTNrxZdYBxnzdNHmXjrLtSoS8sciiX155uqqXHKWZwUgBE96pcTkZ",
  "key12": "G5bWKrRPiH3BV1fgogiJR52hVpVieKVcuKstSzk54PtYToKHCCDMTXRAbMRXoiYga3HuoZjVx6zR8cuukaUaEih",
  "key13": "4JEzMCUW9mLcb6XCmvto5vp6WarSS2GYcz2fpd4G3DpYWedL6yF5KZe5jicXts1MHZdi4PH4zPEJkNdwpkRmB8sG",
  "key14": "4D2q29QLBiDjZxBa6fS8A7Wbsxi373BkMQVhTSWNRbhW9Lj3M7tL5wY1cTSsucDffjMGu9rGDL4BJJ6sbqn6C8d5",
  "key15": "2YqAv7f9B7hs7wJ7kdc7VWeFXiJX8LnZwUnvX4gooa5QV6p6ZemhiaQTRSvWogqAA6AK3iVXa4KUT363A8PNRNun",
  "key16": "3AHyTFEQWSuGFS28Xkd782DbW3EkicV56k1r9ZJBhjb17qhimc8yhZQCL79PC3KBch8JEkYywU3vTBUqkawV5vng",
  "key17": "256SFBFpA7W45cbNpJNbqaLaqicZMdnddyieSicdqwXHHsUoSTYADFeigwHFMEXxKzHPQs3bqdkTif8DGKcRd2Ne",
  "key18": "53Vq5xYnFVcSANMGV7PXCYxoP8BApSatZStEzFPfuPicaH8PNfFcZfbkGFXacREAmTvdxVHUfCYHYKH3Fg5Yhvn8",
  "key19": "Wzm9UVkxLBxv3Qo2CcenL6CqNT9Q5XahHRm65W1pAGN8mrwc1Py8jDhhJ4UcNRyERXuSuuaipEv8WuCfRaqZedg",
  "key20": "bdAGoUsWAR3nGtpzYo8K3KWii5jLLycLR4JmqFS6z4cFJbanFNbi6c9gT2SFLjScvF8WYr9UsKb2hWkfqz5KPD6",
  "key21": "554xjDipKtjBgfpscN996aVusehCBGzxCyMo9fZA37jRmntMKdEtqLiAMuE27cYsqMHq6NpSvnQqRwDdGnDbCJiX",
  "key22": "5tbyPk7uxfUmPdtSDq5XQPqoFuNAGzTPtvmcRmGRg1Tkpk7rqU49Jhqz5yWow3wXhV7puVxkC5SnRRHwXCFCiNFd",
  "key23": "4aEnugHLH3A3B6NXhSrQz33BDG12s9KrKQzcriX9grG8uoDJRkisgkkGwbyj9x5u5yUHBduDLCcS4eLFnzRy9Joq",
  "key24": "3xLqM37r7WJ5Ypn9d4zR9c5stvfodgk4Q8dUw5RjK8eofwX6Xf4MShvQe1kgRJvAPGEPH33aDsdovLmXaHV8gRJc",
  "key25": "5hTmU56cCexHR2LiTJwdx2dbqbseJyFRxXqWZTFwuZ1Luz96cbfq4KikWdmH6Kwd5ECth9Yc86W1Xsw5cpR3fv7A",
  "key26": "4T4nw6RTpiEkEMqC41iVpaKv6TELeMiQVY5iwMdyVMK2ZJVBXT1VZGMbX29Zgoh497iCpTMj44cVyVhEacapYpsq",
  "key27": "2bPZ9hF7spZXNgnGBQenQux9NyvgQQYgicwnwf9dzX3FR4oGutt29BPDq3CMiVfHUVyN6RsyUrcMGhTgWJD5pVU4",
  "key28": "379yHSvu5KwSfY6ArLesqCkRV9Mo7rnG48EFzs11aKk8VEJvGeUa6mpRzrUMAothTRSN4b5JQXVL7edLXCWwmYWn",
  "key29": "3uiSrha2gsewPRhEyxsKKCRZGD8o97mMo7bMSoBAD9pkk7kP5ceq6gmk8QwV3Ue8w9KyNgPUcgqqKDwaf2rjpCBq",
  "key30": "4hBRxg3HpKyo3z56ZW7aypwZHjHwwYhQuqLgu69KVDBMZiRqbeKzdg4R33SEycAJS3BsbWT9H6rVPsFVw8GrcN8g",
  "key31": "4B6wnQoSbCTTZR1UtRkveorrHUAd4jboR6qeif9GVLcpGau2ndCodAUX9UWHcrN5QC7MkgsSLqrABz7bk1DiNuJB",
  "key32": "2aZrsfYrJvGv4ok6RmJL7TEXHtfgVseHYXug6NWsr2Wxk5mh2R8BMh22FfPqVmsoj4zxyfyYapDp1Xzp6e7iizUF",
  "key33": "4N5LhzdVQEps8tebbeELMbG49N5ohTovNiLJBuXZCHCSkgC7er1HnaxTh49LHakLThhP1HWBbeTVSLZbxL7bh3Bu",
  "key34": "5yKhTediGJnkAJiMMoMFPxNJzD7ZJP3SZ68dXEHp3JuxEBx77XAuroNE1PF2tW6UPUzkLkbzP6aYgjREWCYQvNUL"
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
