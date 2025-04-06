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
    "67eQemxX9cEfUvhfBNvGX5SMBWGDgyNu5KbFVUz2xHUvqHZvasgWWykRbxWdkd532axTfgt2tzTLF2uZUuVVmER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zofnSLDBaJmVivjmdMnMcUGfPXVFUQF5KDaY1JsNWJhTU1TG6rFHscQtc8CGnfwRkaK3BM2K2Gbt9Btoe2qFUjA",
  "key1": "MYGSvecrLNGn5EAtjbVu5sTSgQEuMiQQ7Zzx86ssQ1XmEyWuaLQ3GpRj2ihpxpjNKujA4bmziBi86tdDcn8hXar",
  "key2": "2fLU9B4qDdXYAPoBaeeVKJanxAQisEJt1LfhcMApf8kSxF7aRcToe8QVYnQjE7vCLfB8jigAKWVQ9GVAHVpw5fnH",
  "key3": "2WnQddUYbxDNSKYT7Gvm4bm7PpiZibG8bhtZPi7v8eJKHFiSZs8LHjUG6CF7M6HWySVsEEKHRKGW2au8Xze88QYT",
  "key4": "2FSby3YWNFG7cTFtgmtGNGEuAHLSiNVu6e476a33EqQHFuuWbPvLfjrReR3UnLUUrrTVam1RFjpPpTKpyanQCvQ5",
  "key5": "2obm4PmLAJgq6mSQ8KyJkf5BJDBhSsujLx1yNBWC7sBgq3qYtiUaRSACqvX19gRyBy6rdHdyA3ZDGKXPbsimV6v",
  "key6": "mdqA516cz7Rheb24cZENd4S7ANvnzV2DDURrimsoLDub2xpgozpYFeZUchS2AgVkWU5vn6y6Gnwaf3pypuVz2fY",
  "key7": "4w8PxXq7JztuzbhkAGtCX2f5wsWt5HR5tA1NT8mxbjiyUXAP9VdyGhhvQaQhwG4hvduRiEvuMZWMN3kRyLf2sJ9W",
  "key8": "58x8KQs3L4XGf4yJ2kRfU3mhHRazEdBSHCw7XhD6d9HybNVGf3SfkvaFK1di6eHTNG7jwDJpnuTFXnrsyP6RU364",
  "key9": "2sE3eknxEDV4q97NjJJGfM9FnUQT4woBptXScDxBf7M8QoiC5DUmFqdGj5ESTx24VTdboTMTfdou1W49GsfPQuVA",
  "key10": "65RzGE4PR6kXg6tfdKdu7zodDzGE3VYUbpNpHfkvAmS9hTywAvQNeduqhdqpexybe4DLLjw3jwx5E4iUcyJtbWhx",
  "key11": "4JuTpSmoix2rq8zPTu6TEpSxvr8CVyFq2PeQKUdY2h8XWrgmTCCPWXTa6CQHEidF9HbEZQDRvNopAHFhdgRR4kq2",
  "key12": "4NZxCFQxE3AWWrF4sziQHWG1qtFh7BupvArVQC6fBjiwXoczVtjqLaB2TbsAsKLzBEThYUeijg68AAZMP6uVbHqt",
  "key13": "5uJAxTizZE91AQJwRKQo25cZtZnKZTHgaR8B62qHkVH6CUDHpMo2TuQhX42DMTSWkkPsBpEmHXovMrXfNPXHZZyW",
  "key14": "48gBi3fSa5t8woyagp5brN1vwXbAxMDC3KddKwJtsJTiEDEsGnvkkkRKh76naQoiN6i85J6GvMRwCNtVJorMV5xa",
  "key15": "5cazSbSxUbC1BzJtR4SMS3DXCvh3vBTC1eUX3bBq7mSs2FhMNPX3hiPuS4arb6NSP8ZCNkxXzjL5xVv1ij66E7bg",
  "key16": "cZvNA3qDYSrr54XcAW9pp9ZoG9LchUn7zwms5rRm1vcj3zG3wgNSgoWBx3TkbJy6pUDLdxPY1MWEYb1vmK7piFA",
  "key17": "2UW1gwuyxRMzdWc9RhaBXLD7eDk96XiUpbejbfd4wM6tw6Q4HYGLhYGdymF2UYSQ3pf594FY1FWH7Nwzh6Nod4sj",
  "key18": "3orkh91BJ4Rieiz2ieSVUYT3J5VEVE7Prm9xr1jG7Tyg8cZBMQaGrhv7uULCKNvQ8Pk3S8Mfeo4vxtyUjWMkWRJx",
  "key19": "4vLQVGBD54a3vky4L9TireWXoF2yVNsYuEi1YL6Uy2dD69A9GcKpNgNUdVUxavN8qF8oUyuyCgnNEUBJ6WPUADQB",
  "key20": "3t8peENBP2mdauSvuqp6bs7SK3Ep2dngXuHCP9yBVvnMJg379JFmCwWeMFY3YKjMJPvoD2e8W1UNoMqcQ3k8ib1a",
  "key21": "Pwj3t2qYEM5CoNwbcABi2fP6DGK2S5bwqBgHuiJvtZ9CTx8Rc6EsUuBbERaKLotrRTyVbW1Rv7aeixdNsAeEwEi",
  "key22": "49yeko9ArnCEEbdthQrRyehms5tN7256YvXhkvAxq1GGCimXqMrwbnBuSxigkPWhqCFEi47bojBx8T44Krt5umfC",
  "key23": "5owyS3yzhfHyxJSDSs7sbGYdWHS17wfb7Xe69s9wNzLfTegVJvGeNVnPPqyQbCz4XyNpyjn75vCrbXF44suxNhJr",
  "key24": "4LKwkHGBiCY2pXVy4vkqBmVeAAjLwrhbpBPoLJC5hEhBRjDvumNtcfQTpnzeQesFtt418A9njFP4VJgC6wMXAgMX",
  "key25": "4M4TGoDKC7okVevnexBL45WCmN82ru3P9poDhZHZ9FA56WA9sEX7vsx1hJt92pipLqWav2nxM9QHNUTPSRECKbdn",
  "key26": "4Eg1WzJdUAEWfT4HQ5Ej3Y4Lb1tPiGAMmCV2o2EMqiV6mYqmzYR355Tnqy1vuQ5QCUHKS3xc78BapjRFQNUE4tb6",
  "key27": "3t6pf4CrU3hKTuZq2rEu7bQDqB6E7CvhdgPsx4gFvmo8k3jzaCNU3qofBc2481oEZ1u2yfhs5BBivVuwjTMk2p8f",
  "key28": "QxkQ9FmwWfH3c3BHgt1oZrN81F6yRDKCKxv4kzAcusEW7BsJz5i9LKYQ8uPjtuXMNCKjjRP4ZWS293MUFP9GnR1",
  "key29": "4WHGiZdPb2QP2bQsQE1RPTbMaDiANcnFwd5E45JzsLtdQ92RNDq2FVU2YCjEGiynqfUxpsMYAR2VA9denJSS3DoP",
  "key30": "We8AZq7TrZyXiwphQHmzuiRMhjRjDLxhcVwTLCDtYYjBoZ2iMkkwocqbjo6Jcin2YG4voFW16JfE6HYxpPsp5Ln",
  "key31": "4Nw36sa5kSmb4YHtYzM5nk5kTHzyiTMPjLbugsuXCUPq6buyMrY5z6fzJDHvZV4gqSzSky49UfXHSk5MdLMNuNhY",
  "key32": "Tcabzf4rUAPab94Zyo2VLaQakhop92Z4W5uQVbhPKh622AVubBDSYKvD6SrWW8CtzQuuA3ptpHuZLuHCtTVVf7K",
  "key33": "5p4drEQ4r7Zc6rFEBB3Jm4eimpVdDBgy3CrDWYBuc9rnSjeA9VYbWunKagHpXwbttrTLMWMGQ6ZFarX8YrjmecY1",
  "key34": "2i9wx2dDCGF6qV81mKZQQDDCC3AfBKAdXgqbN4z6CgF5QedsP9HRRaXRJ1F57HV1ccnvBACbdw6f1rCb6HvyXv8h",
  "key35": "3H8W5Ae5UgkSLKX2d9ZvQp5aHXFSBFoZshEQhPAyrWKKTKevWRRuNuVmdBPpT6vSgNEAvRgQBcELAWnExSKp2Boi",
  "key36": "3AQiBCB4HgEKidV4zVRfoGgaDJ3UXp4VUtoyaqdWAXJuXs7c6Qh2yEyndSAB6YD5uXmsQNBpZmYRAWXWzJQTb9B3",
  "key37": "4YuDfF6aZs1g5zzUCR1u5XFfBQH6bhEBFPyFSQha3NVrRvKFBM2kAGUrgMFZ4er95wBmyYYVnHRfDtDH5Jv5QeCC",
  "key38": "2WrsQou2zuEvbZMgFLhaU6YG8w7eaEYVPGBGwdcUXeKvd49ekKhM47DyuZioyVQd3ryt26Cci6VXtC7A8JKba74e",
  "key39": "4tvCnmpGNX1ZHbVLrgDDqF9oKPxgfWfhBvwYFJJQYVE63ZmjS9bvY6oiEZ1MuHhNXpHT8UAS4usRnYQUWNJgFN5P",
  "key40": "4mmAV6vf1FsCkbNut9Y1ovn61oRV2RSJQE9TrDNZZTQfHhrDgNRnfz4hakJQPxkha7Vsir8sWad2GcoWMHN3XK9X",
  "key41": "5sFQ7BkHXvK53ZtE4m39Dn5gazYvpmNHcEedjW5YQbuxK9LYkS7m3fv5kTafNCcp3pfpTb266MpJZruUbMZzJwVf"
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
