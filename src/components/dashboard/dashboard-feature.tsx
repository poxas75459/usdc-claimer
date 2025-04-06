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
    "GqK5etyvcY6Z4S7VedSJA5axsWp9bsaU1AGip1WHBGEyvW7KRDSeqob8mPBspckYmRyU5NLwbRyZvqPqcUWSjNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RaHDGyYFvEEFMBafnG5SEbteig3WrLGT3CYrCGaZF21tALZJsBVsnmo7y7kFSGhy8A38ttDvqEukLidMf1mxUtL",
  "key1": "5cfjyXQxM7w5gpQhACRWRCbau8Z8DnbzoSifPXurxWm1W6Ndg3Nmy829FWPVKmYgR2zdjezyccTFGvhjrBXHHQGq",
  "key2": "4FFbyW54RzRwb2GjAnxvGwnaZpqcBuwU9NzgpzDTcVcJxnEUu4BHn55GvHiNb52sPG6GMmvaWTJSMHf7SsGP44DY",
  "key3": "3va9ckR6jPjfws46nVsAgvpvg5XXEJVW5DxWW6mviAEQydueNXDfhQ41195HeAE7qUh7PRw6TpsSLSgAqK9NrMBD",
  "key4": "25bbd4W5HWc1uFdLWHYHhhhCtVRRhMjWBSf5KrDLNo37dYYjuHvVr6z5SJMjbDTKCneJnL7VtUvyHuTa2qWCHCmv",
  "key5": "67CJuPrHtkhxMUxRiLJmwM8C51RMHD1WYQx1A7zLgoTGJTfDNQT81siJCJKZKJ6w3C9XLodXAvqCecAVBGskAWGq",
  "key6": "52n9MMxHifhSrpYDk1SfWqyeimRHFNEYVQ6mz73ToRnzHZXzsE5wq622NXJXAMRxxS17cLw1WE9oU5317aCFjCH4",
  "key7": "ebYEEzcWV8z9XnqVvbPdEx1MKELYFAZMGQ59Q3yuS6KgbAJKnEz5MB8V8d8WkjD3wgDKtGLdphTaPmFFTAo11Es",
  "key8": "ZjRbv8qKsiiv7T1YJjUKWDB5VUiUsY7JRAahehGaDPwtna4e39FHfPm1fKDHUhr4uVFHDVFs8oNjoZnAEK8jNZR",
  "key9": "4hwYxk4fFVNT1GBTPbVqRaS96Fa8BQmB34rTH8AHmjz2GvrDbdFLSrPCTrcpbQB4FDn933Dxjbygq2wnmZvCYGpK",
  "key10": "42JxTkDCaPCJH4DNabcFNisxkHFXD9qjHiPHtLeRi4phuEbQxmUX2wyJ8NtRiG2HQ17dT5tRPpYgN4QZ4MCDE9t3",
  "key11": "27BX3J3xCrmc6dvxnGBia1pQCPuCrKm6iRfexhUgH1KWuByv5XZhJaY3nSheHqv5pE1fRPdgabuZqEMgsimbTzxB",
  "key12": "L9skQQiFuGtXnZ8aMM2fn9ou2puEYRjodu6gVEKm3UajBL8bdFUQCR3Kfz1yiYzJgE5mKDsUW5giPaExtnYuBBy",
  "key13": "5tX2WPEPBYCpvpnVrNZHGCirbW62AZMvGkje39rFrzSrRDH6SSqc3HPNH3UYmrtN3M2y1rfuY7qezV7BvhhouX8u",
  "key14": "PZueoncVxmCW19pUdrGiUHU8o5xPiuSzwbUBbo7SSsPtoUoKA2QCh8MkVcp2QqccNdMc3er4J72Rpz95scLeysh",
  "key15": "2eCJvV83zh5BGVt7LkZiYK1U5b7DVPP39f4swsuCghk9hLRW2vbsd8x9FbyADqytYE5HTASxacWufdN8WR3fNsLW",
  "key16": "4G1hPLuGk5yV6bAwWsNMnQD3RQkbvK9tPPPH2KvmntV15XHHSjWw9GwiLvSkokywan7wAhZpgoxScesmXYPS7awf",
  "key17": "4ShWPRNTpfTva8WdyWw6FgMnwAEVSpiWm1UPR1CBs3ov6qLFoZbhNhPMQ4gdYQkA8pUFqAeyo5BE5Hs57Uv8n6jA",
  "key18": "2bXHXpC3PwvwCdQptvT2NxVAAPqfWuNovL9gtBzzVR51Zn7unVULm6ZRpKhQV1qLKuZig7Dm1UhZ9L5Pdr2BGa9R",
  "key19": "b863tcDxxbS6u1LXEkdLUThYUEHiiJAwCKLcCEde3RkbG9N5Sf8uSqFGe7RC7emBMw7sq5Dk86bEkcaoYqRHc74",
  "key20": "3M4xReFMTZvXqTaKyAfxPiNaHQZRjq5LiXiBcDowwzL1qNqwv8VRDzqmKe98MmNBWmeFuyFmh7exNrt8kPD4u2bo",
  "key21": "4K3mQa6iQwthnEJ5Rozo2M9puAkG2eE5aaUBjfn8Z7sBS1DfPaSGWRuFrG3SpMYi3otCUqd61etWm5MU7K4qNSLU",
  "key22": "3yUwJFAEfqkCFnSDT26HftFiwEAnaH5ektAGfN2gcd5qY1N5kkpXH8z2uyizx6azZ6b9f6L7sBstKHMr7FDmzEmh",
  "key23": "5UgFmQfuLSBRmP9PPCYUS8FpzzMjanVzrF4DB5q1DBYC6uTmmBiXCpSG8oZ6tp6mwyjJHxvTTqy9PbNuYCFFw48m",
  "key24": "2oLRccUKTFtSUzNH7VrGyg7v2nbMEKeACFTgAzTC62EXTpkoroCXFQqxj55M45Ei9RmYUFBkxWGi7NtxSrWdfbUg",
  "key25": "3d2X6Uq7EDKpaxfugf6YoPmXdrWSCcvjj3BkeCWU7fscUgQT5WmXXCijbr8RK7vCd9yWeCSipLqvex1EhECkC5sr",
  "key26": "35hxPbZURRyf6EkFw7tKhkhbd9gp6FJQzYjT5b7b5gnB3HceeYo986BpnUhdwxZR8NFzdXnScADdP1fXUJVMjYvS",
  "key27": "ueH5xyWD9zYNeEUEcTyevUAe5YTEc8xpHXysdF3T3LYucoSGATgqCm535SJZM5uJfKtme8gy91yxmJB7qwZvac8",
  "key28": "wp8HvTbuANBtEze8A8PzepbDBJzXj5X9znuh2qmexCiP5UYEWRYLhmt24Juv4LbCQ4kp4QyaLvE4BPwtE4kcJsq",
  "key29": "3EkE7PWUo5R4G7ZkojZKtnagagmJ6XPhS1VSErLsKLn5jU7XVjPPtQTCBdg3h25hudvdb1uqJ6NFRMcXwW3HfwyZ",
  "key30": "1e9Duf9f8cr9qfGmu62oY2LRZN1k9L2eTxFWz4xCvWUdp9PjsDcRGC6KW3jDiPw7UWKPMh9jdSqy3BjGcNFqCjD",
  "key31": "5ExFH8Kh8atjVYVTmmk26pZGwYoqvqkzFWJp9E3oduAYhd6JMkNHwe3qUBn5s9MuiDx6cBAC4UEL8E6bMpGgJy8c",
  "key32": "5D5zNkcs2StLpCkSteH9daNhWobL8wsyS3yrTcn6SsQoCzLKqrCJUUAMSByuCfdjrJF4SVtbNZQEXfrLon7iMboV",
  "key33": "hdCY8aZykGLo94HGyM5sdhT1eePozi4tfLCyZEkKvgQkLjnAevmsqbsN6SKG51u1c61Xg2b1F8MpoDPveG4JZ1A",
  "key34": "M7M1SqU9bWC6zkfirH5CpmHQkqFdEtZPQKezPmqE49pCKZodune1Hz6NiLUx2dhPwgv4PZZNRkh3PfGgwbqzPhy"
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
