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
    "5txS6Bgw4fmjrMRfVKnobypawJxvQiW5UhkokwkZgWcuEfJEPLSWDUTE4trRaTYE2t3cGcTXgGPzdnuE7hvF6AH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51pe5dM4L2EfKmGCh7j6seiLkNhECjYWfyrzo1h42qKHSLSKZQDP48N1PfCou8EunZjZmVpRSgzVTaQN8DNB12ho",
  "key1": "4nqL6SmT8xUvhDVx13LaxSgD3qGrPdCsiFt3u1AzFnKdn8txFUvzCXosBXTqYpSLa5BVh1dzwDd3DAQgVm68KZK",
  "key2": "3DfQdxZiPtypNHekvjahBGXEwf5E2KW3mj2ebKComN2uqTEqJGjbR6EHCfipRECiS2ptkdJyhrMHEGKpj62YQaqk",
  "key3": "4E1DefLtfVQTTqwF8qpr1aiQxkBuW9StvxoZ1KUqAJExVpP5HxCMuqWsorAy9Fj8FJopQYutRYkUmBSn7ShuGiD8",
  "key4": "2CdBH1NneyayVUbZMANrEXju5PUzek9Fwq4h3gz2BJNQVwKTY1vAZep639EtLMXYZgQqVnHRWiJjuny44NDJRsU9",
  "key5": "4WPL4vLwdXYVuiEWd63uLxH14qX9VfsB6RgyNVmD3Xwm98iZ4uicTj4BUEzkYusryecfybqKFGxbLjtZSFqnLEZk",
  "key6": "3xLiJHLMxnsX1AFeBjJ2Vc16zbxVa2jTFY2gt5Gk3of5gGESP85qqeJi8SMofQ78x8sVuwPySM6eeFVrpwQ3qn83",
  "key7": "6YUvsaohMYsuCxSVatV7ecV5bJpTrMGEyZWfhRyqRGth6LdgktKqNvKDz3dSXwP3raULB7oj7zoRd34W6wCUZZv",
  "key8": "4m4ed3CUegSUx9wHh1ZvDd8uHg9XBkjoJzX8ixBM4WfmZedE6wqJnmHTiLF2ZVb41rmhwf9RLhYQUKhLSeofE93u",
  "key9": "3BP7GowG6maCaFd9GKkHds25Qua4MMPffjb2N5AYxkWR2E46bPYWvtzstiKt3U8P4mhDcFXnNakzm58dZjUDzzYi",
  "key10": "4MZa8mZag3HkU9d1sD3fsSNbFr79hTnSoGacmDc3jNa4vLMmtD294iCSavhmCf6ueuES7TcNzkVoGBN8mSUrNLf7",
  "key11": "63PfNXNqVCiHjYHtBNjcWJRZAi1VUFXnnK8VL5SamFv6Vj5j18KcsTZt7osw4DgYEDLtnFPwf27XrgokVC5TA9nw",
  "key12": "5LwkzU6Rx2yB5kBfJZMbH5MhDaQmnBr9THsN3z6ky5BBzSYGGUThPjvws7rwYXEKFyfLfXKbG8KYHzJPwnzqBaJ5",
  "key13": "5Ex39botXwx3oZ6MHAay5HjuanJ1kPkEuFSL6eYZ6px3avhqrLScMe8xsQVUf7Zgo1mFUBNxa795YnLzYDcm8fte",
  "key14": "2VYpme68ZGu9iTHadAWwnWVwxLmVH2GsTUugLUeUeBLiqhdeFe2xZV2rqcTx5ivB3igKYj2oeEWQHiCka12vUDHs",
  "key15": "2UMPC4BdwJYfVPtf6s4GU4zG2tneYKJizVnQcKZLoEHmJhak9atnRwSzcu6P8w79Dw3btSwZ3iUWR61uYXmYQmei",
  "key16": "3RUN8fMKeQZmNwo6TcHRypymHFbytETMQZzuASAsHdudo4aptMFH8kUEpEpRg9eTAf4VXzQLNsSsAPVJEbzkwygh",
  "key17": "2CqKuGBPNXy6dMcLxoCvKE3EhjHD89Rtc5rDChpgXE435M9L7umZ3EG9VY8aJXsq8x9L9yNKUgxfpjis3WxSYtm4",
  "key18": "3yC7LiMompFefyGrKbyFdduRe36XTmkYjPuQaU5CK7v9fU2dy8X8rfYwuquyCP8PbRfCvwbjmiwjxxTZ86p47DMQ",
  "key19": "2H73V3y8oq8RM4ZRzoAAPHC3NVqX26GdyaTEi2F3UC7qknnfuWkgUsrc6arRyCNopYcGYnXSUpsn7D2n2oYSxRWx",
  "key20": "wxbPFVGGFmgBDhSDNyADWfMTN2T51j7jXdM7etgF5MueAR9deXzhoWS5JbM7ruJkKvzrtm5mXk1qhu3jP1LaU3J",
  "key21": "45Lx6YnAbqi5grXGpJqmHFjDG1i4VDqrWvij6X9FVAPJmGSvcfy9eADXqngvL3yTtGXpYsEyGCU6hLaqhQpbz3b4",
  "key22": "UBSXiNfk2gnuojW64pzkTicoJGFDPRHc3hwiVMd34RA5Tnmt9uWvVT6tWevLmZPCuvDVeTsT7BeYJPkhfEpEKB7",
  "key23": "4PYRmuRpYoWTAekYLrg4SduCyGU7jTMtQsipcoSjvfdAzWWWqfGa5yxQZLRnRaPRwJseDa3ASZACnnQkrFvTY8aW",
  "key24": "tmg2TDnPqm1RvGbci8hkt5yUeUwT5iiRuvJzYegeuir5inHa5LKSUcYLuAuZjN27YS5V1pjBRXHpd86zLrMF5qZ",
  "key25": "59VaGxa1NcEntzy8w97RGUzwd59QCHu8jUqMNhYX6HbQxHt6W3rdedf53QSdU4kXzJ6CTpwTZrvkAXtvvPqNoAKB",
  "key26": "5Crh6vH3qcdVSV65f4iHYmhMuxqXCavmqw9TtgTPHQyXvjQ57W4f8K8BGC9CsZid4ifnFvSP4exWDhsunMbAyx9n",
  "key27": "4xtPzEBShzGF3Up7usrR437pZ2W7jRdzWCMqpP77b1AXiA2rTGMo29DJmKbx4p7Jemg6fgKxQ9HdoHSsiTVPzd2J",
  "key28": "2UJfmLLHmDqN62gePoXi32HH6HmUzfdK7j7SZDpAV5RAdLfiXBstXG9j2QZuk7e9GDvYaor7Ugr2nETvwF5ovMAx",
  "key29": "3hFuRVJ3gobbhc8uMREiDtwYuo7Nk61qNkd2dufcLD4txeGKGxd1h84LHqZSAmw8LF3voZkJRdBZCx1i5sXzypD1",
  "key30": "4WoweNfKXUZdn9i9PPhWE6DdrhGMjEMQyyGmAPXgg6dDGtWgUh7pVWrXowcpQoYqYwnfboGWETPBZiNGJXWutNhn",
  "key31": "5ww9qVnKshoTZ44GdcGTaBrvrsnp12W9y2DpveciqwLX8wEz23cuhe9ecAzxu7U5oZnXiF6M8T13sFuqKY7gDKzS",
  "key32": "49QK6xRwuhPS29omUrEH1PvgmX5uVMMo8SEDCJw25Rxr4EXRcCZ3PVtGn2uk1Zc9wEGP8s9uFeX6zx91txE8TACJ"
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
