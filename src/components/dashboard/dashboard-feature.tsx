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
    "3hTLY28tLbE53L6W56XHBgHZDXCFXqAyFSpb3hxC4DHAkXSJStmoV4s6YxfhhLFBgoaL9rCYzWxocQWq82XBuoTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uv1xWRbv2xaNo2MFQVW6GGEaUgh3Dx28vQP8mUb9bpEmLbSauV2JTZA2Yvtn7pyHYch3te4AdXpQf3WDkT8PVFu",
  "key1": "4Uy6aXZ6RFAuVunkR1HtCRQph8zf4EczfW73JHuKRCeSwyG8ZmY5dSzCR5ybYCeiEEt88rdTyBaWc4tAxxeyCA91",
  "key2": "23ftxBHFPHcxQQpa1iBqaaDyj7uAXGsyNkvaE7JzJezzKgbZV7UhqJcvzMRLWEM9j33tSboCZNFfimf6GqEPq7oA",
  "key3": "25iPybGS9KP7UAYy4v143uXaVRnKbWHPhfdk5R9R6jL4qrq58AG6Y1NViE6JFWsQZY8puVqQLeAH5WscB2XcHUtM",
  "key4": "5ye3EiqWpW93W8tzDQw1o5prdNcVwMEG7rKhJZxGgm2u2W7pd1MJEK9HodVxCggBvsjPZma2Aa41rsj3eAgncV14",
  "key5": "41eN6EPpiPPBF5K3yEna6DGjqQ9HKKgdmAP1PVXjBTiAaYngLkg3bCAM3mQ53B4tXeJbpCZU54rAM44tyLBCduo9",
  "key6": "4w2jaRojyfqNn4yDepxL9ixaYfvP4vPMALH15mRKj7codZV2KHiyhW2pzhugKCxPRe6ZbFjuRLCFt7xDTyRHSaxx",
  "key7": "r3dLQ94yWJBgRSo69p3xcmsn3DeQTXc6NXnmT3dNWtfxrL9QRSQojsRBmJRdHcpn9Xd3sViQvNtHqvHLHwUe2pN",
  "key8": "5yFSPC61ZY1fPMqeEzNDLooJTMPkhV8s75Upj19F4qsnyLiJYDPGUhg3H6w6iiSYnzwg9TJmzUPhFy7QPmmsw6Ec",
  "key9": "4D4gKkHomjFVvd1s5X24euQp7uvKmVr8sHhfkGCzy3GD7a5sz5TTdbffm4A6XAy7eyVZdgbkfVb8BLryQp3stckN",
  "key10": "2EgsU9227pHU1QEermZYaSbEqX1F4iqeF24ddUp4JHVAUzkFQbTD1agFCoCyW6YPFLRj1Paw8rVtxi7GkWgECe9G",
  "key11": "56vZWNtMmU6jx4myqhEuWVetmKCjC1q8n6nu66oePef7Gfg5ZW3U7zvCXp9bf5iVmmf1tyZrt8BpqpgK5Aa1WN59",
  "key12": "5yuvmuQ7mLqmzx8sFBKS9dCTLcnEbgikSUFXtHK4kWnGK9B3ofqxFEkHBbK3nn51yJKCyHLirQqcAfBBnfAkjYB",
  "key13": "GGr3aDACbt49W1SECAfQdJ57roaiAhzprsxv6yFyBd8e4gTxinMQhwXi9FCEFAo5G16fuqAk2dfUhQZdaTUUmXg",
  "key14": "3GBjuWZw6fxSz6f3igLATpmqySCpJQ2zpJP5rr6zDM4CeVmCZBrJLcVMkTd8oG1KGoyB76pgTAeygqVqsrfSvV4F",
  "key15": "r1zZNTE2SAcUL3UwohBa1zqmxL4rNBjPPWvTGgVSe8dWsiHHcUDbhrk6MFgkMLSsmM5cwGwNY2hHgCMPBts8kYt",
  "key16": "3FiCRC3mJCcqVU3PwqnAmDS7BXAyPrBLGDLH435j1AeTUVrooPq2WbrdmtHp2tUpdPoVwutHJ1K1UutHnTKsoJ2j",
  "key17": "1Qv76pcZvTuR1Ke7wfVYWnz5KGK5PzouxGa17cJkkbLk52b26hr4bZTpTSJ5Kff8UjhC5LUhn73heZm2thS2LWB",
  "key18": "5Y2ghBDqSLWbUsinXRys3eEi8CH15NDicdtU8oU4mAQ8nkfuwJWQ4j8PVSVQXpdRiVo6jhohVfeKqMSNNjE1no1X",
  "key19": "3Wkj7mxJdx6hK5oFyxSwtwEPydjhM2nkYgfhG7bCi4J7RrNCjgxpcXFXh7gEUVsZFnV4u8WjBXAt5dqU3ujnaTQs",
  "key20": "287whirypG4hW2365CdFsP9ZLmW4Y7xvbkSkzXt2zRG9pUythvqCteu2tKEKnicTDKVtAJLQzyBpKpvS4ebGK2aq",
  "key21": "i2B33SKH4zRnkuQ4GXW8WqEBccWmtqvtUDMnrfL4BbZr84YwgA5iq16as6AJZtZn9uVKMrPBiDUXfWRKgTRZxbq",
  "key22": "4zp34h9pi4ZfmxYgVsF9iP5kUcfzqjGbzAMra8CTHm6A368CPdVEvkfamrERxv3Ctan4svBfLxXMzXUD5A4RD9iV",
  "key23": "2ryNaJRoM4z4YK52bcKuuE3DWuB1zdXmoQJdJPB35seGiPBYjbumFqt3TU6qfGhdQv7u2APHe9bxmj2eZVfzH9my",
  "key24": "4tMQooZoAAMAYwN1buihvj4zL4DXKZKXthQEcdePKHhMGn3aRd1qvMU7dsqzqSmAuT8WKpyDsfsiGQBgqCCkst6W",
  "key25": "5ETgUiqyHizUCJs167BM8ipvAzAYAw2TznwHFWjcuNfKBVpcQ34C6Z3fxiDRrGiEVHeBrvh3WxNEfJLkV6GnibNf",
  "key26": "38RzpY9iatNj97cvryR43nB1Trh544y5EgdMy75QpLA1X8869sSA1z3L4PtT8r6SHGufE5YGYQXmDXi4faT7GuaK",
  "key27": "3XYXs4biUiaVovNsCa9SniYc2AcxfwN4U7GEExReVr1X6PSDjPCTRgw1w6Hq2ZzNzq2syhyYR3KDPQL7DfUog8WR",
  "key28": "3GWUbiaqTQtNag9SV3VVgurAk5ZAQ7f3X2P2iTkq7RZWELQyGeaA1EzpTJ2WUJpJ3oA7EdokYAq23c6KokZtu5Td",
  "key29": "SJ4X56L7SAv5X4QCgAv5eXNpoVaNSqbTTVcRZGABEtdvgSAsmrruaQXhP9Fi93QcD2hcFuEUZJmaBgq68oZhxa6",
  "key30": "237zaCDF57zAH8YYpi3NqqjoUC844TbovPrUNFCjt4HzZaPnQ77b3Jb14BZFigGbdkSSMCEYfVkDqCQLwpPyUpZC",
  "key31": "22MXUzpsoqxQf6SKcwCqcL43kvMVj7uEpNztAd4jQNbtv2cbgJCKH2M6dUMdn2d2joGcm1N352JYtLf5Hcv9vEiD",
  "key32": "jxfvdZ8DjZesBqHpvabj5rKaah9j95HmrXCkwVjNyD4QHcXGgkSVqYYsv7TJysRBXiGNSG4jXcFiFbNWR6CTHC3",
  "key33": "3h8H1qYLjdpzh58JNyrc6R6vfjbkMgL7anbq8FzNbUFXTmd8SV9Mo4pAq8YwC3YEkCfq4DpwtJiPzsh9eopJzrYf",
  "key34": "2C36q6nEdqU3rTqbVQ2r4aD4UyV4rjwH61XEAuzkLJ3gN57Y7hRkUwq1qeFh59CZYmQezcyAdh8CtJaUCTivWZmg",
  "key35": "5Qe5adtQPk4nQr11J9ctR9eZBU6AVEYfd8gtmobqFpVq4fFE8rjuo1sFdAn6jVUQpU2M1cvMR1MDsfdztxKKxUcH",
  "key36": "2A4vnAi4wiQVYZHu9wFV1v7baUES3UZ6zxVMqcScbfmg4FcztjqUGPCrLFzVUGXWMtxmaASbtDW9Cv68t9fse9vX"
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
