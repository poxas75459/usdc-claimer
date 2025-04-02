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
    "5N3XmAMAVijzH3zmbHyWAXRnrpB9xRdNL79og3QJP1zU2cT6AEY3AkDkCuv59UhhkvfMVtj5VCQD3AHnhSWvBKAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sHwEzJEn91Cg3eH8YDKLRZ2paNhq1KYppwY2GJvRuX66LNPo5vAW8NDoVfk9uU7EpiMjemon6KuVdMetyGiuGW9",
  "key1": "S7vKu3XPKKiDncDTBwQTK6VJVLRrGuSiRU7fMtw6YvypZrvEqMhdpHmYzSPjQGFNB7kTyrC56LUYFogq5e4Lyax",
  "key2": "3ZkarJ5QMr64phjt2Q6J72eGkgQnA1eM8X9sqWAk3suDcFc5GnMY3WWBMjuEb52khvZmm5X2LwpTkmM5NViv2ZJK",
  "key3": "5ByE5ESdNmu6VmnETed9ZSsBaF53pc8Ftc4e9krhxPVZZFV8b6P3FbcRCFJXyzEAL3K13mvte1L6HPewaRGTJ8Td",
  "key4": "5aUvcvN1NaFY4t6psfRNrnaj2W2pc86koeT7JjGCXNgaZ73ihTWGZNpCdTRUHqLnaYohRwmBeaXz7CebJvENv6cZ",
  "key5": "63f86bKif6iah5a4T2HT6xK418NT5WL4EyRhUTAbBaLgnXTGjviG2KuBCD2as6yLL6nY4Fh7t62VBwTttfBvu6rs",
  "key6": "4Kg1tjrBsEtcWU45dKyKPScgZMNZ3QMs6eXT6iBe86cB3u8yTWvkxrvobkMBC8zJS5tX4AHixxhoFiBptRnVo1hX",
  "key7": "5t6SfskWRUQGTUENK2TPTfKCdQPeUrLGX2MF3oXe8EaMVeYRxL4ZtkP841JBHrp4wbisukggpcW6G33HExfeZsWj",
  "key8": "GPxk7UmjGx3EUztjSKvA9oZp76RnajsumP9No6vmmzSqGEAboNtyGuzKLK9eFPMGDogZR3kHURm5YWBRt3jFzoY",
  "key9": "4zP5ctkNFtMR8ZSR4NqU3pPeDdi7Vhggfc6znbKx13TGRsjpd36x9E3KdUFXtk1bnNHKMgHpfBxtpUnsGGEwer74",
  "key10": "4roC5BWYyGjw3YwGwMTxgNCw3cscvckLJNHhQgjGCh2iPPBQBr8zxhEEpAUCzYTYXVioP76e9N1D3mKaipxBCjcz",
  "key11": "62oqveVyB4Ahs3d5i5KMS3X6nY7BqnmrZZFZS6LGsV6BaPpVzb3bg6DBJZq4jbTj3kw26bpfGtaEHgGQSa7Ya9a",
  "key12": "3WLzjPtuwcy3939Uw67objNSudpwqsEwx1j1qpiZmegfxUHCbkDNJFhL3NrK15GVBF7MT93AySKvSdjX451u7Ce9",
  "key13": "5KmPngibXyFSs258SR9bKKmEG7ZKx8L3VAJJQ4JuWhj7HNPqpTqv8xP5M44jhes4UUQYDW7CvQmYqC7zy9GkfHSo",
  "key14": "4CrPKT89S7Y6Yrb4WAGiawx1Uz5r5Z9Wr57H6dcHu9jyGUTNnZ4xThmXMLmbXXxDR6PrG9R1pug64x1bzZi3Zoqx",
  "key15": "4atEdkRFyZkbaKLXC8Uo4FYvxJuM3JcamzBgvpansqVfgA6c7Bmhubf9fPBBirgN1cPFEDbxVZPCmaY6wB2511Mv",
  "key16": "4JQDALPv9J5rtaZWFMUpvuQcDQwaHM9PTdSqFuJVuPTrSX46r6LVx5sFqk9FmXWS2kh5TovSe3SX92DWYLUPXxm",
  "key17": "ZKoqQxrzHGXdnK7JdyWStvGpZZHoyvXA43UTfKu5poVoZJFx5LyEJBFqi7kwiPMtHj6b6uLodgV3SWvouzAcrGt",
  "key18": "2EhsHcpQz5z5R5zJssV2WQ7yuy6dMJbcMUFJPXkH7RNfjaG9PdZVqKgk8fPJBoTVJ4RZoCJ6XkFej2pqcppQUj8M",
  "key19": "2roB1FoGY3sSJEpsfM4Km954DYpXpdPg1rTE2PiBCujqpDdD7dBvZ7EVBEXf43B464QGtsH35zJNGpiheMuyvUF3",
  "key20": "4rgrWdbqtga5z1VWfaSPdtstmp95C65eBdo2GSx334t8UgBCnAG8mczdkpVycxsc1r3ErcmRf8Rq47Wejw7pBhzA",
  "key21": "2DM4AaZ3Xhek6NAXmpAYPPsCUGhwP5TmkNQrewvdgLERxYBv88WF3gEbgBn3KznZ5ZmNaSRXmDEQ4LtyzZGxh1mg",
  "key22": "vWUrBuUnhwQhuH2HPHavchY1F99HqfaAcPLNUbPP3SM2xctfQy2Ty9aKNLzPdeEu8G8aVLZheKXAewhFio1Cqco",
  "key23": "5dfRthBdCnUB2DGLkdUdFtvheuoSMVWkztVBjQpqquMrxjKZZ377FLbvyhPK3qycZuaPTrs9Tdss3YaH4dxJoXhj",
  "key24": "2jtETMUxoYe6ThrsAy22KEYwU8sS68QCYdthhKjrzMuburQYszeDDDiDsvTSdBdbA8BFuqSe8x1xd7fLJgc4n9hv",
  "key25": "3Tsca88ddeRmvu2vGRrjEPgqL4n1SqhHCvL4Gg4tRPCT9UUP1RjkVdyAtLgySXEA76YUhfnHLrrSqzyrPsWi72QD",
  "key26": "4P78hUV54jg3RUPXXuWVKzUTgthkGq6wSNie3j7zSxBBmHDdskNh5cNveZCzUuAM6XoKYi7NoPKDEVuWMeKPSAzZ",
  "key27": "2VVwdTfaWvBnUivirt1n7f2EzDcQvSSoBxAmL1MJiz7Jt7e4P3dL655YG64ZsDEabjTtFtYjY8pmAaXNhFUrhhSq",
  "key28": "Y9JDJYwqbn68jCch9xiax3ms2RGf9gnALb3uPfrxfwv9ijfyMk3YxKzrv1oCWVUnqUjtaR7V8zsNueBQQ5ncBpE",
  "key29": "U5BDGr9NNzYmMJsVVvJmAPob3unGpjrvYmu3A7WU3zpn1VJPGGPqKD9GTv1q8GkyrUme3Zw6ERr7tdi6YmB7Qbz",
  "key30": "4nDS47U9vyK3rPH1FBy2VVCh7mEW4oYf8LSePA5nb5fHNARD8UPZBXzgCiXmXPJLua2WdyN6bC4spQcmJtuL9HUC",
  "key31": "2H43hy5hqnNcW3eHv6Ah1H4BoGmwQZrhQBSyUsk3ajJ8z65yfeZncac6bWK1ZzZMwrTg5JsVVv3s58m4XiaXQRDs",
  "key32": "3V3k18XQkxEmXSjBzRrUEYbkhpHoucbcNAWSwzMErtbfG7epLHYA3zGauC3Z1NJdZyDy5pZ2Kf3Xv2jD5VpbyF2K",
  "key33": "2jfy1uSfWfn7Ayp87m5cspEgT9TrKihJj6G4KUwkGz3ciwRgmxZ8jnJ2RXVNJboghfvuv8mKaMEYTfyfAi5M5AnQ",
  "key34": "3ZyMYktCPxgPpjKAF4BU8gikr7morZVjQwqJfkTEhfazQJt6okjMzKzPTP7naniyb1pu7LuDgTrSw87A5y773TuS",
  "key35": "2yLqsRzSUCGcvTwCw9oRCMMSU1PYvrSjKMRjFkZnscEzaQyuHTthpmBQTEFkf5uVpoaaiPXuzgAVTspsiG1Nt76i",
  "key36": "2fVxjgbeevAPhbW8nmanFQWLbTgzoVyVASf5bn1wxncepRoEzJLbPgGRmyd9dy5gJNwc6szq1hYwvp1bLQf4EVPt",
  "key37": "5x3A6QKFNQQ63XEz9pGQnBBdFG1SyJqHYWFigvs5nAvhJrBKwXG7EAJfSYCgQ2YuRnfE9MB2Q9eRDZhpnDy4MH3K",
  "key38": "3QCLxrJvMTN9MSyzhK1U8hsrEvU59ncUA6LNoJr6hkEXaSFJMPdN4ybViAQ9nWSgwcB3BqKZb6oir5yuqLCJqQLc",
  "key39": "3S4katKB7PzwiDrS1UAqbSrvvsrREG8CmTc4FC9M4NHUXJjHNsEHKX6zQdRqYrAPoibpN2KdVLDU8iTNJVjkk1ev",
  "key40": "3SARj2uQMbCEnxqmkmoZbtKEibU3Qu3eYscvoC8PrdHDgZQV3dmN2ngXSME3ji2nr4TKe5mXUrrBFtaDsy2xhX5s",
  "key41": "4Hqhv9cN885fFS1FK3K2ZB65BawX8iBHzfvz4rutBaCTcia8uii74C7F5eYP3pB4VPAN55y7AxjYmJ13frLJepFF",
  "key42": "543dsd36p3x3RF95So7p6SZmTETB9V9uRiPoVyj9piq56t2YgXTZwYd7RbTMed9fZK6D1AcxTw1RzLhBiJJW9DhK",
  "key43": "2TBft9iZhBJDk9u1mwLLxDb8FYWGwBLBB7kmhNQg73dkds4H76FtZb3GGS29FaN62yVAwe6biS9bFTCFFHHwWV2m",
  "key44": "2JB3tDRnR8HqK4FqhGHKFVkbceYrFAF5fXdMhNdw6v5APiPwoi5VNUXLcYYB1bLngjQReS6cZJTgVC1Zwf9R7H8G",
  "key45": "54jzqp9ZiqThMjiUM4THCHpRd1oojk1N8hJWUNNk4mH6MGnn5JdtkxfuzWPTkBNrGwDNbcnpcoJpmmVvXFze9VRR",
  "key46": "2U8FJ6iejhBPcaLxuVyW2SyaYWLFnLGaNqReQ4irZExFTzGEgQ7hEyfcR4o2sbaMkULnGVbnQPcTLr7k3f1zSFo8",
  "key47": "2tbHS7Aj1nRMrfVxxZgMEKx8Y3jdoLf8jSr2ePbnKR32s2JiUDyPmnF1G7zMjC9LJMef6TyXpFek5mLw9yJxjqCH"
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
