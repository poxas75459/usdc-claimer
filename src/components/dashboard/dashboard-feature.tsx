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
    "3SCYuW8Rd9NU8a99msAXQ9FQ2YKsFtBPLt6BmKo3vSnPX4N7PHmc3D2jogetiane3N9EuucaPzWyeHYHPXSMBs3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ykYJLGyL5VkKnLJuxfxyCSVsU2EpUHW4jp4Vk7HcDnJT5Kq8YRoyAHgNHhGWGe1UnU9iuYHfJE2oP11x1HxoqrN",
  "key1": "3JFfFeAY4zecJvtmqiuEVo1k7BdGZ9zKDDwoeX4L68FFibwywbb4NAc5Gnrkb2ym6b6is5465XNFZdPHKz3EkWBd",
  "key2": "4rzRJtGyxJJ6VjKzitvpQAvuSUmQVifKcCPi1BBAJxqaJsyAy8YfzGxrWn2mgHmpJFpQx8ZwhMaogKb5WKKZd2ji",
  "key3": "5W9KjKLpb6HZYCRnbSGb25x2K8rNyAW538MGGfyxuADjpZaBP4gJr143Q1e4RmgGqfmkmZaGN85wC3q45TmcCmEd",
  "key4": "kZHCNPFiRtQmDdqmCS6cDnjgSbxkCCVRPLAnaqCNTswgSYhseAHtt2n7igmHBkoakLMBZvJtwoU3mF6HJwuxN7M",
  "key5": "4qy8gJAzFdR9ktNBLrkiE3DPaNk9CoJJJvXFnxpt5ZTdpgpXkqYXrRBjWp8X9NhjmnFqScECVkrxkWHnZGQiDVj7",
  "key6": "31kANsfMPtZguAumbY5HbRZdc8K9xBZjMDDQ2QCM6b7ZuA4UhKT3oXx6NskSa3v6EXgjqbteMCm2962AKHzjwrKB",
  "key7": "36E9i3QPLN5s85C6uNsUN625HebmjoeSdVbH1c5WsTdKUs2bhhKk8MtZHGKnhdyp62YuKnbg1Y7XYSaWyPYgzXhx",
  "key8": "5gUkf9gGwHoBww6RyT8hwUDEb9KAKNQgcenxYNvL9hZMH2fBcBKfMQuUpnsV5zmJdTE14vaJ149suHixv5CmDnWU",
  "key9": "4qJJMFvMo45JG8yuw17YP671QxNGmqV9pTjtphb6tzbrXviaPF44MHpLqRwTvj8upqAgBvVmzDcwkLSqnWC4JieY",
  "key10": "65J6XYNkHXCCoKnmKb67RySj7aSQHHPY4LgiYvo2xNT8Dtb9T3pQakdS8C31hRbupevLj6cZAurWqEYmBcysCqxC",
  "key11": "5YGgUWDRPZfS3EH3ZGj2VoNEn1ucguaajdb5Gg5yb23PYHi1TTBvjxR2v6SHETXBs1Kpb1uMCN851QZ77EjPFyRY",
  "key12": "8KEwrzFuTTS8RzZjAUyQrQKrQUptvVhkwQTxcxbX5fgC8dKvNwWJgYA3SPBN96aRPARyD9UTzF3QVNX17T5zHc4",
  "key13": "2Z4dNq12uj3scaKP9QCNJkpvdKFBteM24zgkrGkkemCUTKHfF3voQtWAzF2B6QrLG6FmX2pijC3wagzQA8d8Q6T7",
  "key14": "66gwWaqtURuSifY9jjf19tV4hopSjWRVjRaH8PVn6QQALpXUKETjXX6SmuzJneERwex7Qfy6PNxcTmKd8SUMBtMb",
  "key15": "c3miij5tDrTFpBzbghiLTvpLEDmxtTaK2Jt9CSARCosxHv82bF7jeKwVSWpPkTAxvGL1jThJH1ALbxRLcc4tZEg",
  "key16": "4MGey1GfuXVmE4UZiQDT2WNhoXZBSchCbFY8nNkWad1Armt2Zmie6P4ST7htokiLjK614YGw7GG33LS2pgSpkuHT",
  "key17": "2D8AmoAoAZaXvsFJpPSxf6FVd94sLa1qc3A7eswjSaUqr6TMnpSfXEU5vGULBDoCVpvVkcRvpum658VdRA45NA9C",
  "key18": "3vTRuhcKvcr9wvmNkhzjmo3G7x16cTbzr1QaAGLhpvVLH2NBenaeEYjwGgp2P5pNtKJfribmGnTvWKvtcnr2MMRc",
  "key19": "47TJ3MT3T43owfSTtTWHy4rDKm6D5htYnduBS6kKQLxvydxTet6WB2V1cZQsqeGtVHkJdssipmz7oChgGc8JnUxJ",
  "key20": "gfC1zF3dbhyQ4hw8Wp6DMuzcJVXeujZrzXac9dBaCLwzf26qoy93YpsmiWjt1e1EXs258zyDddJHH3dB8uWEX3G",
  "key21": "56tpMuX9us6bEwvJtyG2SeheQYTk84HXXi6PxCVx2ymGCn8cncoQ5zor7Yw5VwDKhZp9cwcMm7U8YQ2YpwbFtUqs",
  "key22": "UwMvU4bkH56FRc1PRF8ZtdoKXuNsUAjBLfV1h912pQ1Dw2rjB5xeksH1yfGaQr8TAwzsUC9sjvepPcgftLzb1Yt",
  "key23": "3GPsQ5u4sJGgTfUacjtuqPwVRef2JLhwf7mU4mCPEjYvpUnnp84TR9zuF5wns9k3MHT11T627ueM4s1GnrqFfqAB",
  "key24": "4BcxDxueMT64SbgnaM91aurqFbm6xLdxqw22A4MRXcqBhyafeiBPiMMbFf5n6wucZVySgV9TF6eQpYoQAjM3iVvS",
  "key25": "4eEVa5zQFWVeP9iTpkzBNuRjXvsYwXX3cGWEYe9DyYWCM5MMsNycsfybuLapTzLssrkbxvvC8Rm4Nqho3XV7LZu6",
  "key26": "447SwQQ5gNpFBfYsMz829PYur2kAKCxE7K25Y61BNL6T87DrBaqpTvSGKACNLBfKa137SqLf2HfziQUMFCYj3dNj",
  "key27": "4AxX8Nkc5QPphR9P7cfPgNcFpZoL1PHhPEQ8wLPLQVgQCybBGjRH9DZXmcnnXxQx1tNwMzj9AxN66RbgKyN18i8z",
  "key28": "FvKLdtc2QudYw431nQgiQiKaFadWqEWGzUSxCaxhM1aNnywPke3CoT1BcSgUWpiMtHTau9AH1Y4cmSH7ZERHu11",
  "key29": "63C6J1Y8xTrGLTXNYeqHQWp6E4b9S3kJmzH2AeYGUjAE7cCyWWqG4HGKAnRfoJUqFUx4KZGzBQSCPGyGzyxmRETy",
  "key30": "3xCed7suSRVyrggUU97E7Mc5ofrVLo9SK9dRE2tXsbzKg2yNXuBeS4zCEJ2fNoYYUfjk1w7mDm7VcgcZ4puDYZpT",
  "key31": "2TAYcXmhsRfnDJbzizmRsGVm4U3W35ocfDcVcDhuYJHvAfn6pGfC5PsUNWJeeVTdtbTKc3EVZcr3bk54WcXfHgJg",
  "key32": "5UbcKbYCGjAC53U2dJR7Ktygv3cxxrhsDgePWPUsQeCL2noviWLDdzb4qmyyd4crekNuZBmTCY7aWFQ6FQ7WH8bQ",
  "key33": "5bHj1zj1bNvYknF5yDSe3ydPfeeWRrYbpEetkq2TW5JapCVJd2brJob51y9BFuVwMM6h3uwTcPANJwWi5rKpGV2M",
  "key34": "5LuVRNcvfHdH9thPsD6qcfXLspCbQYGxCCdtXzf9CTRSS1i7fL3RMBMh3kvidM8o9RLKGh9Hn6moG9hbDTnMTrdM",
  "key35": "3zvMGinVNnfkur7H2cf8TddRETbApsm6Z6rcYi6PewA2L9YSw4toz1L1iVifQ9JvzvZjhWYcQ9WrtGXaLgEmrdQ5",
  "key36": "4vsQvLedZvBtQR8WxN4P3oViqzkRkUheGh6JH1iu2SVKgx8U4cUeeohMq1nbZugVz3gS4J9MgyC8NQ8zz4i1NG7v",
  "key37": "4ZjaBiRAL8UDzFFK1E79noriohsxhJ2gm1dajFNErnFCqHJVNJ5SgUE5eCK4MaEwx1WbhACbFZuRFKceYwMid9zy",
  "key38": "4gAg5Uf9Lrcky8LxLCTi1XrcjAGiy791x86SfoKZGEwPJuti6HNB5cr3WsFrCGJXPJmMH22MtKEzYZtKdUk7kuVc",
  "key39": "2Qv2EJX5THQ9NR4fYhsLVAMUuc4tv9xfEbBiyRmC8oMQnzMdvzQMmnKDWzaMbqB2sePy7QmXS4P23Xwe5GpdZvTX",
  "key40": "5ojjzizTRcDzbzhM2GfvvZ2NS9keT1HcZFFKLrewsKZ2ZrxktoHrouGMN5YjTvwkx5uQ22ue4Up43R4rQEU2VRQf",
  "key41": "34HTKqwh7U4N1Hv1oEhpLZFhpK5X4GjrYnFdk6Eo4HcAs1d75nVNULpPV5iGdqFqsJm98UeVqz8PhhRyWRH6HSq2",
  "key42": "3QnyfX31YXm1k5MNaPgBZQvmCLoVxNDC7MfF9ix7QE83yQrvChgTKe8BoUJqZBJvXSKT2cWnH8XvUuj7BRYkXmnY",
  "key43": "4paMqwbVNamFwfx3RXbQGaRRCVNJAdm4V1riKbze8zGkExe6XwGVLakN2KyVtHu23gZ6AivjYtUVcGqrhd7tp5FF",
  "key44": "2LEAjoENgW9rUy8YkJPmeatigMDB78WqfmtKgtvxMm8pDTZcuE7U7scYBUmNkApk3YKkBcu2UReUU3ErgAWoZo1k",
  "key45": "66rf2uKHH3gVGCy4giWJcinToL6i9aJrLpMNNbuDkejZ6uNV5XAU5FPV44rogYeRE4oixZNx9wrPxknfWXAYrLkT",
  "key46": "2k4Q4HtHmrtafYvuM5qNumVaSvrE62sH1d1dNX4bKr7FP995oKi7zmi9ENwPiAHLLmoXbzWLub2WaNcqhXDCZbiV",
  "key47": "2uETp23yXrAvg2wXX82Se91X7LBhE5UR6opNsV5jishwXMLfMvxQDYYGHBV7E8pABUXAgqojru4Gxxax8tt6gdkb"
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
