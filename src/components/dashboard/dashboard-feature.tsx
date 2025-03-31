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
    "2KEDmRcepXuhg8AADMXAnPKpK6ydCgyJ2xQyCofzwiQW8d4c9VxFzaAoPtiQUo4iydJ3u5MxyWo7ANd6MYNadivV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DwbTFWVJJTBdxq78n4BRKdA9VAuiB1WWbuX9daT7EndoYwVTEyhTmbVhUcPdWkzv2kWyNkL2VQqZcB7DVNkw8t5",
  "key1": "PJEciAZBrk4HCbcbd1JkHxuex3T1cJPBDp68c96hbbexhdrHZdaLbV7ZBJ9TgdfUkmDLxSRZSRXrMKBtSFmxur3",
  "key2": "3VHpEUKGw9o164CBtKLSLx1kshvmkPC87ZFfniiLJh5Zvw5PYcc162kttjFVwcF4u7ob8wvmYCYjB8Y5oLbHuNAp",
  "key3": "2Y14btTGoV3Bpgva8sGi9qBw27UDNBCy9nAEuvcxkc3d51976kZuAXr9zjtB8vpGCxf269iRbgiwZ3FYqAM6RfTU",
  "key4": "3ZwodRSSLqnMcaWXZbcopg8hZnk8fNJ782tNqHv9xZtC2yrXTLzsadPeEB53ndtDDM7C1BMjxjAdxonBqFHPyed9",
  "key5": "4ivmEddi4PBGkKkmPqjhZ2HQvVRN86xH5Aeaf5E4jAjrEMDrLR8oDTzuX3ACcdZNbj9wqpkMDLLkwZDNpt8yJea1",
  "key6": "RHFJV3wEcbzrSSxpfWru9c2xPSaCvWeNWb82HWw9jgxapJMjZ9mwGmx9n71WfjVo5Dv7zwasuRb1R47pUd4Hgsm",
  "key7": "3p1cw8XoL18uhBq9br8PueCqThhAbeaPwvTgDvw1h4JnZq1gw34cis8Ren5TtriojTiGN8NoZ548sKEfwBHxCnGn",
  "key8": "gckkgighCnKmtqweA5weKiQmLcBuajbhQrPMP3imDvj5W7LG7p4P5xMZwU7f8Bx5KuMhAzaZVXFyrdMwmiDaPGG",
  "key9": "3m6VuhZ9G88pm9K9aK7DGNcjXwrRbxPdkSXCurCPrwioeSyC9ezgFvkSwzQJCcCY1iDhQ2kMakkCmS6E4kBLNe6i",
  "key10": "3Boe5wUwaNGoobB1Vu6hrGdoE9DUVffuu6uZPUFmChaJrRtdTBb4mphQPQ9s8TDEab7eS84TEij19ztXY5ndUPmR",
  "key11": "4i9N5UcxRRkgWEmF1bwPShGpbJehoRFNtwYT7JFJ6cxBKwaTJHPtfbz6U5drmVSEEkhBrL2P8X1BjighTzFHhzeg",
  "key12": "3Q4UDFyUnSErvV79juCCSzEFBjsBN5uMkdgEGLRkdXzF1W82Ry9idWMjQzVxGSsP4uDGJeWSgVFErUR5FptQKwnp",
  "key13": "27BBfVkAVbzMPfXT2Wpp7SvQNYLEMStVFcHNjRUDaGN5Mfh8eTzTeo9y2R9m15yBPTs7cGxxXRiawetTfoswdTk1",
  "key14": "5yFEs326z6XkgKD2oJUShLzMc8PaCwk3tf5ZoJjWJdDzhHW64q8wcKwFeLsTnuXz2gS8qVHQNdASBqetXbKzhJAQ",
  "key15": "3m5dkxJrMy416p8aZYhrXDt1t6aKGfAQxKyRiFapKNBKfn64XrzYuieRvmrHyQmC6KPNsEhJi2Zw9U66qa8CWEkM",
  "key16": "5HphXjbbwBJJ5aSXTu32bmxQUsb6AfAfqnGfRM9GtnzyVeCLrd5fnPSWEVLgdj7WejrAGYxwmN8LPbeDZ69RBhQY",
  "key17": "2Y2St3vnNMd4daRGre2TikCDeqfvVpXuMKfQDVmLyJoqxLUeQNZUwcZoNg1L4PPRx66pWJEoAL4wF2bNS13oXdhp",
  "key18": "ubRd4keJGLcj2NcWpXU2sWBVnK3ojQBAD9FhxLvCZaQ8jzfbfaDKePHVmhTyaCaMNVqss3oYdqZyGR5HtAQhEPd",
  "key19": "2hhnh7YPZV3X81XQBqVUaEWjiXfZKFTNNg1S3YzJaCHN2uSNFKfHJrK15Rv4nWwgd8YeUVRozoK6UZopqnACd6Ny",
  "key20": "2A4vDwYpeoX9MMzBy4FJd3qmz1thdCDoULeY9skVZGJzuU6iBwAxueZ6WmaC5NvvnNnukbEpAdApaScoF27tyLhp",
  "key21": "5RFXmGLgdiGByxTtpEQRs2J2HrT781KEqL5KcniV8JHyyT3go84g4Fog8LpSdiTyncKJfnP8ay1hHex3owqcjdNX",
  "key22": "5Zo2vZSSDJQ3S1xp5rt2kT9oVDAhzZhHmGyxUEkvh6qHQEgbwhRa52gBLWQXXpfjq8qu6FLXDmvqpeWmioAJ7UiD",
  "key23": "AqaKVjn4CXKQCJjBp2B3CMFny9r5VKHA3qXuRRzkD3Av82nPLgj5i3w5mYksYSXzANq85cZXYZErS7pXVT8Zozi",
  "key24": "4jKp7Sd1z44rPUmLUciwNwKKkXRkdsQExGNPawgunm763K3ccZYCueody8KzsxdHB6FqadY7JsfebSXQ55sXCPmQ",
  "key25": "28k4JQAgrxbAgfMxad5jN73Mafap92eWWdi7qsZoaJzehJ25rPCPXFfBR26ad5LHu75wJgEMyVcUfps9JBrsT9Gv",
  "key26": "5ThPrpUNB18TwmzCf6j8GMkmZTLNgUfydRw559S4zEE97yryksMUgytYDAsE2mBWANxSqxXJTNk2zVpCsNLWRQHZ",
  "key27": "xz1gQ2TWghKY8pReRBjKYcwxjo78HAxGz8nVNfG3YqooqkyM5KA6ARgFTYcKBNmSDyUXuGooKDBVqk8qiLh4bKN",
  "key28": "2y6PYw6TXFDXEDfnpGgdKYw7AaTxTcXRW1jeiNeEGe6sLQXgeXkmjnPFJ5ZkXA7nSXqVCwwSRu2nuRV649mNyWvT",
  "key29": "63P2o9LEQaPYK1L7BxoZaMuvT8cryL6TVobi3RRevsGo9CBnmb6LFeKGLoAQ42khke3fDtEckfV9EUUKeHaajM6d",
  "key30": "4ppMXwvnuw9UJUDmkYEfXDTCfhuU9c1VZoy2xSKLWZuC1cPjxrrYWyXnxm2awwgq4QP81dTvd12y1hHfDHAn5B3W",
  "key31": "3u26bnYv73ACZM323iU6CgzVQwQn2YfU4AWaU9QTVESqRt54RTHLXegEpo2STwe2fxE8yq7pmjkB53iTSN31Fz2f",
  "key32": "2tHKNdruEU78XE4QqSNmTaPMXH6HxqdZPaV3m8aMk4onXzh7PJipStdePaBDaRsHKvqXdAq7QXntbGavG33ur1us",
  "key33": "2aJiWunAFkpyrQVmQA196BYPiPgAFoAdePhQXivcqcMEbkyqhPGm5sBDdt6q6xVniinCxtMEY4jNX59xMRQvvUGM",
  "key34": "5vyxsf2AHAVRsbrDyu673bjSUCYE683nKenUDNra8F2YMRf2JncPvCxaxYJ143zvJKSs4p5uBZLkh2K4hQ3u2FE6",
  "key35": "2Q2iR2qRyXXMsUur3t9WuNAsdAkRPY8xeDy3KzzgsRTs2KCz5ijsjYHDBUENaDQ8ewEV42tTyNmy3JhozcPmiuXB",
  "key36": "4nfwh4L1upiRwS3Qz1W98Ky7bC3dgGU1bHUDhfzahWHdMSnubwdNyTxGQgmJJFVjkdRUyqALxmSLST28GzsZHzrj",
  "key37": "62oDQGyVCNcTEnR96HfR128dgactduRmdNskobGDQQpVZTo3ytZk23SVmHFnHQBiD1oQKgwEh3KhmhBfviqVKsro",
  "key38": "2sxrmYdvbHgM3idEa6J2DBwa7PqQe3CBg2ZbrFA8WkNRhBjsEWudE2T8eXmaGxxbXttqHYUtPw6PXeTRwNMZ955z",
  "key39": "3cYXJMDrwGPu5Ah8dwVcherFZ2HCHyPPfeTSWRcRp58vqiR7TCsMwMXGFqrwS2sMnhVAcPrak1qE6h35HNzzhGLw",
  "key40": "4EKfE9qMk863M8e9MQwzwqh3r5ee117qP4Wo3Zb3szhtNsUCFtCVHTSo87oswZd8eh6yuDdEyPNzycDS7S2obyEi",
  "key41": "3sKBrJBpVg7rhNFc1Nno9RRuBp2ezP5j49fcDRwBLHENEcjdaXYCDS9uy5H3UZjBVKfFC1eu4n8PnA9WvBhfiJ4t",
  "key42": "4M9BT4UBppeW1yxaWueYpH3ZRBaVu63wD5bfhr9iYv95qUVaLY2yC9rMgpYgaiKBoCaB7MHmUt6yJ8oSmjwM2EaN",
  "key43": "46HoriboHeA1uxEpRMGCf9L9zkinw2NHTj9TmvzL5wW6g1ipm9bGmUpGxjMsKF37iqg5bcZ8PFpP5PXjywiNrPu2",
  "key44": "4nAp9nMnUAYLVGKjwmdmTqU5DoN9ARUN6honiFyRfeQmBKG5gLXEL1oBHhQ5xQjMczUy1nsv3xkS46gCSYUzGkT",
  "key45": "4REaRPNMS5QtianAiCcstNwEVTXBVyMcMAGGuDSPnrAD6uzaV4G5U7g1vhW8YCYSaPh6Z6za3kH9K3GPA4WX17sZ"
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
