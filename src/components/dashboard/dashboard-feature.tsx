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
    "4BRJxi5fP5UFnBxRAjjxChuUAdMwrPQ5bjk5oXuGTEHcNjtvj8DkrqasgfsuotZscG2Lwj3hd37XhLCqShNUYiKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Sgf2RKAki9TZxTJGXvbzpvFCd14n5Yc4atFuVBBSUEDvMTYyoDf4AWP3rgoE8THANLVKkT2SgmxwU7x5RdjaEz",
  "key1": "KC4Fp1hN9SymNzxQKMkUM7GUaTCpS9fvtUSpcXPJr3Htnqrxk5DVXMJcUjXB2cFZfJvzbXxMWA3VtKhbfhXXHSq",
  "key2": "oZkb41LHojuFZz1NVZcBEj3397Lpq5NCZbqm5qHEAYsuuJpS4rXXUAyuwbQeSmznHPmCXtQSfjidDfxGGAChJvg",
  "key3": "5bp8Pf5bAAgYWAEgocpFuYL3sdhmtPV7sDAUg5GjZodS3BFYS4vc6N1jw9uAXU9Rgeo2ZfzPJRwtRxFPTydyPxN8",
  "key4": "4KbSS5gxnhjKRVqB4rFcWQUC1N6VGuVwuXWu2tPvfs2rqsuUzcn7EZLRTqTCgpCs7Sp1dbiVZfzsqCFJGUYTDFbm",
  "key5": "5GEZUcTyMoNBNoee1FndvUHwbtV1ao9W6EgNhj3Z8Py3W8XV1ZxyaSWzD4b8nC6eg513ZGQ7snKmMgCSdsggcMkP",
  "key6": "wYRQj56PpMXm3dqfPBzR4ncpAjML5mwBUavFKZ7vaBUWHBBLTpABnjuBJ6ivJupB4PXpNQeEbEn28XBfJ9VcaVK",
  "key7": "4fafvU5bNtKy6vLC58nFBVqWFpxmAzQz7hcdxn5s5oFmZszyrxW9W9yRQZ19mcwkJzdjBQgRJtJFDnc5AgmrDk4h",
  "key8": "5wh4ZWPQ7NB9YcTea5UrtZ4PHvQsYJ5evYamVjVL1FNH3A6Kvka5N3ETZB5cXQRhnQyQZHdyEYcnXi1UKyG1DSc7",
  "key9": "UN9w2DUWwUd9W2d7Za54pcEViooNdgEPV5MgqrDejgeZBBKw3cxhGwypnYQ6JHzsUq3WgU6wxASkqroXvQk8aey",
  "key10": "4AF6qHg7FKeLztHpev3a9SHxfMf5WjP75zPqBbhD8VsazGHgRJS28sEPiaLYUjw8b6DWr2EhUutwVpUCHseCAKom",
  "key11": "NSu9xMRjSkcqMsU17FZvWTDibRDxSeWLCECRRRQdTe6fjrXmNjxorWTiv4jdkToxNtrfnbq7DWUsNhhMFNeDDBg",
  "key12": "59Yw9UFCohGt26FrSqDSNxMHjQpM4PFopmtFS4TJsdBxz9ov16ZjAMDUyoYV82bddBk87KW1HqRKaFS94KDMoB8p",
  "key13": "3EFdQ8opJcWjusKG6hDXQSDM9nTAsZNXaUKpgaL9M2ncFJp276JdBhFX44Mg87R3rHiJadPfeMFU7FKb8F8z6y58",
  "key14": "3PW6TvLt8xtpGKyVznBCgnDCJ67zyT1z8KSVXK9qN42ofMXSzc1qGi3xbEkrib72MX3gRtfF1VtSYb9QyFuCgjCt",
  "key15": "iR7nVnvgiiHLLkjWkbkKCZrFzKizYVxLuRPUQGWVXdkx3QwJe9K7YqcwNCm94TzN7tnYLPgjbno5yFadUFS9Tf6",
  "key16": "2CpWdxxG8pgTXE5WoZq6ZcoBFQhcyLuJFXQ9gXexChftoMVbrvpH2iXDdWbYstHxWsHcAcNPhbdScTuXZx2GCZ6j",
  "key17": "4oQSfU4gMx5LymguVvdpBYCvio2LPeLDLkcAoxYxq2a76FFRmoqbehox3Vdti11j6jrs5SdfnLH1MGXCTASUeFU4",
  "key18": "p7HmafakRGoeBAqk4jHQRrYXYhQawwFwcm68D2BaBK9YAo7i1fNdV2XZ7Gvhmw37kxtmmdxXRnUhkAaGrQH8bD7",
  "key19": "5tdB7CHLnDXHj2aTMxBcu4xkoDyyPfMSethaX7akBnnrA4Nug4iZYpE2prPiroB6JCuC792AHWhtRuhPHvuH4q2A",
  "key20": "2HBcpXUV3bLQq8PgpgJLFdMZPnaogi3BJi4eWpGSkHfMRHUQDMR5EFRv7qF7a6cRQ5eDTfNBmsHB4r37b8V863N7",
  "key21": "4Z9QAgJBiEber5fvHwAgUGXFsRf1tAVZTsJTBcS5dDXZykvnQQ2QvGQ8EU9nXuRoxrWG8RLh9r1LJRMFgxGgYbnr",
  "key22": "3KsNStvVgJ1yH6x4WFwM6XCecKpMXo2kx3znMWgxJV3s3i4bVFAMPys1QWNjnDwZ5scDQU57fNMHS5uZAsp7ZYnd",
  "key23": "4H5BTHkYK41xQke89S9qjiFZtF5rZ2USPyPfbZzhCoXs3hFadMZ4kpb3bJr3LjK5BoMRrnPHLSGErdKJFZ3qXzJV",
  "key24": "3mnxxsGSt2kPxTPc1GpJ4DEBrwk4MWG6cvaw3hKeBRJz9nkCkVj5JsmkiXXQAo4B3VLnX4ckiXc6uYnFi1VHw5pQ",
  "key25": "3NNEtNX2ZFqZxPFCap64TYqt4fzPDtPCkSt4v3XBu3nexZPWfrBV3YHErX1iPCYJUQUiHqCpd1v1w5HTM1YdTzjK",
  "key26": "2sB2a3Qtc2WKHbJSwvLUvY88W5PD39vzfoLAh6UAuXK5LdHXWx1g9DAMMiBvYY21wQcV3uodk2kcbr7YdLZqRJUq",
  "key27": "3Xv6vuuCpCF1yTw2UKXSLn8B6GWi4oH9xPrJkoYZXBr3Fc6YNcQGkvHG3k4iTsLL3uqf8jMdP8GQGve4GwfjsQnL",
  "key28": "5meodsct97EjMrTqjJZgwScN4Zh1gL6hQriyaTEfyWSXKQU1QdEWNseh7VcZN4q4sFmqmMKq6Gh7WPRHCTUV2dqL",
  "key29": "CYsHnVUcD858ndkjkyk6PxECDQU5gsib6Ya2uJeBVQrVNUZYeM9ieVsnAjdg1PuRQEgeQk5Z4Hqx8zenD8hQaF6",
  "key30": "4xQ6H5GWwZGDzdLEr4yMP5weauYWP2G44jb38YzWxwZK24qJacYQcrRJvfpNHGxjR3n39qDXeAtBebuJDEngxyaS",
  "key31": "64w73U4c75zUWXrHg2w1cxo5nCmRXSxyoM8CVN5KFLK8meDkZE35Vjc2s7NjinyGWhE6krEerxsF1miiub4NHHkf",
  "key32": "4Ft8Sva8vM4c29hASaMAcDtzPADCq2Yi3evhGDL27TJq8Lii2BVesJosZWLestqApyPdcx4WcvsLgN1RHud8XhkH",
  "key33": "65qv7kFABaGcmrW11wwns5y1Em9Z4ohLzBahTwqfd6caAKHRjZjeD5V1vJ6QdpgGLBEANdRAAZAuKVkneDZqryCu",
  "key34": "2C64M7qiQHrxid27pXCUGvHWEFsG2xvus6q2Pc68A947KfDHAoT69YiEH51RZ2Y2NZbQFSMqs41Mwakf8hvgoxSm",
  "key35": "3yfVjVzhqdhjtCpHMadrnKwaMNLGx2huenJGHuajeamsgRWf3roTmRtYfKFtMhcwupu8Ys4gBQMcYEYNgZkNdznK",
  "key36": "2bYxNpFoSQRbmugZBj3nWnPA7YstoAe4yjF24FWhz6792phtddx6gPXEWr13M512EKdLa6kbXNYBeEKjJ6DJ3tZs",
  "key37": "2oPNmysc461oebPEUZHegitq5Ew1NdqxUZ8nYdmjV2x38ViVEf1hqPWfMMAaBYMLsWM3DvY5ZvnbDSEKyE1d4836",
  "key38": "5v85tQQCYYfjjo17LfkJoDRvq9WfgHDz9jY6ayZ9ucB1goCKv7pChhRpertjcgaZjoXgQPUojp6wAwzXgnxi4y5a",
  "key39": "5ojP5pHwyTChuAHLRF1ZadKYTDPSTf6iW9ZVL1SR8Nkvj36bZ2MdpfVaLTf7rtyWKL8JLEAn1pLzf5yWwGvZXnKP",
  "key40": "3kAy1cyUiv1V1GA3tpgLXfEqUhSgNUACYuQFvJXGZkHnmtwy5eKhHJ2drFr6jNN2xJqv2uzpofAMDTH93HfyjaAA",
  "key41": "3uMCK5iWDHwzGtGDTtNN8bCYSwT45dmryaKxyQpRyGcrdxEjdjB3mfnp1ZUpmzMMnKZvZpn5QhRUKKjiPxptQqT1",
  "key42": "3Tfczet5Bn3QXWXGa6Fj2YXisyKG4YZo5dMGi1Lc4GjCG9ZmbigQSwwmTBh9xNLM9LcfvJRX9qisD4nP7SgZqSmg",
  "key43": "56kZxPKa3zMbiBdSC6srythw6N5vv7oxHqCQ7kPoRThzyAmzcQwmVakKAbEs3GUVY2MH84VJLNY5qYiqGSvyVL7j",
  "key44": "39L1sjVt7EPPdpCSb2YPVxsQ8LC8LRMyhh4shRq9PPg2QhYhsqPksqBaNVaX4Y3EeFhFzM6iesf6Ux8VYSMGsJZv",
  "key45": "5Wb4iy2Hx6Qg3Kbm5N9LyUgvyyzRqU3DzVfKfQsti2Tw1ziuSpYmRpKVCcruyMqSoK8QtgvsSXeVtYsgSNTMacqc",
  "key46": "3v2GfTwkvJ8LTWTrUp9WNgrdNAc2dEbi3Jc8kz6ML6GX2x6sUEMq5HNW5yyMJzBGAZ4hcNbDDNVZqHkxM5wbbFgZ",
  "key47": "3tyim8XwTD3euzEKykijMySGZCrb6w1uSpuC9wMRCkDtqYGmgbfueMq59huBiJsQTJwhsiMpyF7y6u4AzjsFs2cF",
  "key48": "3mkeSDXQA7XQBnYWZJjqrEUqnQo9vtpYaWqh4ztQSGgBfLPo3RQB144BYi4mDNeMakYJFmn2HqACXSpz89HgDTLP",
  "key49": "4hyqdkceG68KZqmW4soqHH8GhUf8XW8sdjELa8tdBEMCJPEsy7Nbd4AwsmPdgacN1ZBUmtyPdaebwqPidVKbyVK9"
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
