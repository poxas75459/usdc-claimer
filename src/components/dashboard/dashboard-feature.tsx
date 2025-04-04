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
    "4eGkxKGXq7dQ4uJ7HNnc9VXh1hSwV2zGzks8BwcoHEkgaxneERbv17QavnZVXJZwUbwQdvxnyeRoRKPridBft8a3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62nSQaLcWCLv1skDunCmar1J2d35EPeg3E1Jowk47FegZ4DHwF83u1gr9wRwNa7BYZp55DrWgjsaPqL6kGYaHnWp",
  "key1": "5snj5KWEjMSJwVVq7BMNBvtkN7P1MSXVwhVt2V5pmcj9h38psf8EKQYb22Qf6JuYeLBbMWVBnB5zMdrmQXz29SPs",
  "key2": "4K3gfpc7SP2Nmic7AQeot9BSGVjzogdQrGbV6qhUA4uXLUhgwdGmAgNfVjivfVvgzhiyysFJPjcDXGxcdDFcqRpR",
  "key3": "5dB4U9ESyo9A9aj4eewgxeij4yXBRBELDnmh28mybSofYsD2SDD5tWqwjTJLy45XLMc24e7wnbro6QGenWWSF8dQ",
  "key4": "3b82tXdyCskGgzVmZKH9doiTG6Eivradx54gLp9ixH7coYVMsAP3YxasgJdbCqLxEdYrytH2f6WHW44dUGpA8kRX",
  "key5": "3SjJ1rFmjscDeUjVQMt9wzzYUq8HkukRUHjBMXEDtxCPoN7dvZgCakNUZFyjiB3CLypgD957YrB3tXHdTGeLVYZE",
  "key6": "2fjczCJzPyPxaKQdPzYvqFbFCJzpwu37qH5DCfDztyv8jPzxh8TSA1kzG1whiV8Pc8sd1AbLUG6NvFiPfHwEgrC",
  "key7": "2aLHA8wb3xVfCeNL2ZN1bnHmq6EDTs9VRGdfPp8DiWBWv9iEobTEy8snpEBHA6zyznph1Bfod2ZJZfreoDYzn6C9",
  "key8": "hNRyPRQQFvpJV9BS182W9eFUNw6cwtfUsmXhqrbgr7ezUXWaamNjxsePLvfZRfcFnLKqDQz97128qomCDmaekQ5",
  "key9": "3RxaWBCuqmkygRKy9ifaeKkgPzvXHa8dHmy2E5i7wSfQ3TfvkCivSLH2v9pURYUsssc3Xg6TYDAffkE6TDQnUZFj",
  "key10": "MsecJphnmWZUyQjte99JjGYdkYteUi2h5HrxSkHwtG5ieiqZk7LsJbUbzxopSnJhUrhZrtZk1mosw2GmCE5DbEX",
  "key11": "Wrxf9LshJ9rKPULBU7sfhpoBF6zvg9NAd23HFckTeGjXJ2FYFmN3jEbhbFUYdhoAGPRZpeKdmsJfTp3Vb6xSXzW",
  "key12": "byAWCjfECDe2Ju5CzS9m4ErXfi7umBPBf8zBG2xPJEJqhzUyfjA61cCW3Vx16RZV198dfNLBUgKVC1TppScSyCY",
  "key13": "3JY16fAQB3RzCCqzvnpbYzDaCS4oS7PSZ5o73knXMXUvp9Y1qGh2zcemwjBY5Wz6F93s5LgaEHxdhpi2L98VANoN",
  "key14": "tCLAhMUNmFTjkn2RSBFHznkCFaJuExp9wD4ybj9un5i9q8gNfxX1kGw9y5EsRhGQRSFZTDqnEWH5f3rVjY5TAcK",
  "key15": "J6z2wob3gxK4FgbHh9QWj4PsAbVNWnh4sqHk7Ygh36g6WodunhTZbzj9g2ZEgyZbhL8GUAEjbfQ1LRQRXGcfwYZ",
  "key16": "4RbGt29jYXkKTrv7tPpfay6mgv6dwD99yYFhw2b2bGiQYKzP1TNBmL8FJuWAbER6jjhHUHcBiE4eRsnRK9hv1UP9",
  "key17": "25BMs5Auv4zcg6Ca6YsESt8w7paGuHCZrKKTrsqE3neknRbMbRDFJrfhYsRzGSY9Yd8siP6uf3XoYjrh7XgcSn1p",
  "key18": "3mcQLfGrw2J7jw9Zn3EY7kE5EU9UHtemA6dbgbRL4mRjzuQvmPUyPdS2GhwcJ4SYkiBBk4eieGmNVJPexTXuGw7G",
  "key19": "WBtcNgLzCQ63DWXRXVUWX3Xcvf2n4ojRD89k73GPX37hoZcKXNMRaj5CYfTWER6wF2Zfqa17ooxbdYQZeVdutCb",
  "key20": "5AhjGVDAmp69MgruTXCvtgPyYPRv85CwthNszkpA2BG6YJKH8digVh2SqHmAv2jcMMQ8GFjnBGNtpnVJ2irPtqnm",
  "key21": "3qmqhHYwqzHU2VHTs5u54XPYqhT2X3vccgYcxefLqcSpLJs1qHeHo4C9DZZbrY2Xf9taKzxqRtpsYafZ9NFtYvz8",
  "key22": "3yu8nPhSCQi3ivNfzUFYEbGJiStLQPnAimQgRYvHw9WJuZeEQZuHFmtXHyEad5j2RiiDUcTPpVHK6PgNUhFSYj3V",
  "key23": "298DUspB8dRbVfXZWSCTPSv2oLuD1QsXyP9rKe4LmAjdaWzhESQpD3Y5Dgzt6gRp7QtAJ4roW6JMRAtb23DjxYWJ",
  "key24": "2mNkgqVAWWpDmb1EAYhsNdkkeyw7nWVgjB28JYQxXtTnGMk7SEKdYWFYqrVEMvdJDzUEpUgXKE3QWfcmtcfyBEBA",
  "key25": "59NJBfdA3JLmFgVto3NESLpfqcdPgxwm8T1rxqqigefg9K8xiH22FPKZGoRUhcASK5WsRayUsv1xmfBJKaW7qoot",
  "key26": "2vhSFVwfNsPTCKNKqWcYQcmtRpwwWUVfy4euwgSAMRGjxcTo3jKjxbQZ1xWmaZJhbt3AV2KRUPPZrJ7U2ZysDwY6",
  "key27": "2Cdfs9AbPfcqLJbk7mxeL2memNY36HvaJG694pe58Ci3N1D3JyT4Pt2oh965ADHMzXTE1cwaq9WpyVteFUib523f",
  "key28": "5Pz1prF7br4HPy3bcvERa96GDHe2yVABqRVQNt3LzSy1GCbfDuGR2eK3GkfkPUsngmmkqZRSzY1k36FWy9WUEtWp",
  "key29": "24rm6svDKMj4TcKuv5aic7ouxifSfJpUewEC3dZSQc5Em38qmvyB3mZi3LUGtenuJZBJ2KjqAdDMntdDpK9DdWh2",
  "key30": "3v5crn5h3upqfiH2Gy7VLd2izgJsonKmf4ji7hCaTyvWrqzwb6WbpvaEEssdF8vTaDMYmcn1undBCpDSEqLEvdKo",
  "key31": "5jCWErq9JcTy2JWkx2rs8fhnvaWQ5qRmM95zH1TP5Tgz5QdLJnTp3Kf7Zaa2JSVBQZB1yMuAfGVa57SnD5Ghqyu5",
  "key32": "49FvS3FpkVmyULkwNgMKGhsCCkKLCSrtR84pgVRZ1kYWu4KhP7iqkDXhZCVFa9Pt6efAn9jmxY5gzcF7dtRQ6RSD",
  "key33": "5Ttj2V5HTEdHCzTUYpzM1aPjDuWjacY9DiPREY1Vc6Bkpger33TXEjk93UVPpMJe9v9fSkDiCmzDF6JXhXXwC4Mp",
  "key34": "yHcv2xhU4Eauyi5ebdjCjyk1tYVkomcyCi7pBJ7mmJDTbLhWyUtu5GtWfeu7SsBrxFCCbDJicdP17DY7KiVoJdH",
  "key35": "3QqVEAEvjiEzgHq5KpFkW4ra16JuRqcPjD1DD3uj9mPfE2xBamx4FTn1ba4889iCyKC3Bz33vkDCrniLQ46d8yN8",
  "key36": "5GMir9JZBdDmyW2UfFEMMkxc6KDrrZREgxf178EBpxMzdTKULJmjH5CmkAxEBGcou91RXDyHMupiLcQTtX2rLeR3",
  "key37": "4LF9WG3EfHFxqojVmTJZyXNvXdinrcVQi1Sty7v9mJGviYYnR9NFodExQHMZAGuuZrkxRqsUBJ8T61FssyDBFLTs",
  "key38": "4rdf8WFoua8H7PTrqHyMoGGQyq9ZPPiEXrPKTK9Sn6qAsxoeYrAfideYgd4dXdaEjMJqZwpXArmBkiuyfpJ568on",
  "key39": "3PyD8fR8eEVe8jDjPhXMbe2PTCR5sBcXpSxwckXkPBJwHVa9yCWwyLsAYfxzk71YGTugf5apuqHZZ99PbgPkxt9L",
  "key40": "56FCoyYJKftu7DXcvAxy1Hyo49LBLhMiDV1XmxruZHYwvWwoofPEy4xwvLvsLTQRJ59qvWUsn6QMDXi9uYMYgkpi",
  "key41": "5MpcBkrEgg8raMftxHegonSjxeqGuB2tN22yEymE7DkDnTAxTq1GUcvDPG82NY4h4h3GBuRAnpfHnEoMY7d4RcqB",
  "key42": "5CU9DGkfTDd2o2nGYAcbUEA7L9oxYEiZeSqk36tRWDrQHjX4ossQ8aHizE4GWzW3hf5T3fpAqeE6hZcsFG1HY6FS",
  "key43": "37GnPi2gJ7FV6UKrVD4CeZoH2WyvZ7n8RuahxPWa9sDGQW8NNkQmazgvkamDsP8ArKRbBxuSqUcxWhh7GbjxhAd2",
  "key44": "5BLg7UvqBTthb2RUPMVbYgv8mkXv3HurFeAhP8CCvtaMx4oNUYupehUfp7rvs6TdXQx2A9ib1XjV6VbFSH7XQPBS"
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
