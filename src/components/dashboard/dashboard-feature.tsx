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
    "3UTNCzdDRSEh47FAQxj6nEFYoWTM5EXFvcUr7SyESRwryNmNcsGd6L1jLCiY42FNzuNE3s1iebwxEALmumtEBffL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "78DezoHfYV2pHK8EFaX8vJhdFAg6uz2JFm3fmUboEYoVfZY66HYEoS3BoQmpe8kWVtjWXCJbmYxXBcey28Gf57a",
  "key1": "2Pd7NyfLS3Tk3oyvhSiUDmwmD5juyzMiFiiaXTJQrKoC5ZTnCC89Ne2MYEZKTBWaRYpowQ7ssoFGCFU1J6nk1pW4",
  "key2": "2wTcxVw1r7pqNQBvn8F5cQa16UsokkkzdKrCtt2AZQ3DCMBeBdTya52v6EitWnUz2JDLhPtSt4XnN7G4GaqNye99",
  "key3": "bmcbBMfr5gunNc5xHDiHCDSk7hZskp8nVYovShhLBEqnfQkV2q5Zqvbp1xj6NDQpk6zeJgbeMzJTB9kXuaTgL4B",
  "key4": "2hN8XbSbo9veeHkUyUG6ziphL1MKFBzBeNDSd2ZVYbXNMeT8YysLFXzNoFp3ini5GRPYZg8KYzq9wVNJHjTFgRT4",
  "key5": "2mj4hRwr7CNowxZ9akAFZpDetseqdLH7aRp5a9PbgCpf5xyPaasCNs172zDjCsrG6jYtT7zGR8cWkKecWcRVn7r3",
  "key6": "4ttVv1F8jkqzjPZ3ZyQxH71hcbYJnCtURVhAf1QiCRBYequnYuWgUwwE5CTwkcWrgA4Z1AR1k9ZFZCA9Bazjoq1k",
  "key7": "2gQEAun88Efa2qjcwHZLwxuK6PBeD1PkoUmKFGVvEdeQR21ZFsYzz8C28HP6Ne9nKPYLXhoRrZG1mZserxphJUYx",
  "key8": "4wRNCr6px7PzmgnvXbYWmXdsHr6BjmhiHTaFgfVCfHZ5T4LqSZMG5PTRyjUcxmfVcqpR99afbE2duC3GPNw2btzA",
  "key9": "34BP5MMmFpromYsnkLGCRKvctFgT34mEoG4aZo7aDfkdguHFANvrL7DpWcBWxwtZVU9HQwqDd5X7WAvPhESs2qjC",
  "key10": "2rT8p2MBivg4jgJ51si7Mu64EEvww45J3Z1dCFP4yALBfk93Yx2Sxf5hKFtX3ky4FeymccGLbjBQFvbAYtSQWihz",
  "key11": "5gjgv9VqybqGEgJxLXdUcyHcnojgndnoU7oBkmWyHwGTQKMiEyueeiBYaWKtGQfABwNVy3YMNC6hcjU5tWhf4di1",
  "key12": "5vArugucW9wTkhKKqegm3mNm1AJwW3ENFMFM2KUJMnMkGtGjL7YAbUzGv5n2iSFyfchaE1ADoDSJBcthfxexf9UH",
  "key13": "5YP3BeULa6a3LsVD2GVkrN8kDkZRZTWoHY3qvE2FcCN35rmnqgZx98y6m6GUH3aECm5Q8HngUd5d5JnhEAsaqVQj",
  "key14": "6xRKcWEBYiLfqefT7kWVJcfYKSasxsRfaUqAfmr3yXvERFGf4mwdmbNr85cVUiVJ2DYhkYC7VB3o924hdZMQHXG",
  "key15": "2cJ7ZGWyxDiEUAVK78VwJxSXKBnj7dps4mdkPnKBSPuFiGeKQaFKUCSfXFNh1MMLLwqASuAmWBeLHUHoQ7bmnKKa",
  "key16": "4xRUdeT8RTBu7phQHXCPu1kwYHjRiLRzXQK1u2TBS1UGNbxHSUqN5BQUZgVQuDSA1uSPKkkVgm8NLFHVbYzNhNsC",
  "key17": "4QsngSg1r1h9mRVUnXZmzuKWdkmHjc9fF5eAXGk5rX3VVwzSAeimmBFEwj9HgELcd3CyhxaPDhMKMhr5fhAHSjDS",
  "key18": "48CjBbZEHSY2eUJzGanT1sTpPXW8jhVqUuX3EcKcPUoDF7qPP9eAKxMFqvz7tPFLTTYENh4UB22FnPJHrUeCGTW9",
  "key19": "63jXfmVB1Yu2NPWNGgXAhZ8SFzeXqSq5wBSQ5yw5yAcD5Kr8BLEWTJ9qqXcY5U1WXmJyHygAtA5QF8ZxqpSxfWKg",
  "key20": "5W9Wobn9mqRRd2bRjrhBGznKctmkAHvAeHaszJNiecU22xyA8aBHME4mDiYVsSor2dJWooKbnyqwNjFQpHWeSCn2",
  "key21": "447r9CUXbgX2LXQgNnJoY1oF8nW5pGwxP5bVe19K3fuPpy6uEPGNFGWs8LExFS6eSqVD8v96FDcKEnujw5ZPUpLx",
  "key22": "5R7PXWkUGeAzteqvSdCRbUFxzQiriwhq5cM9cFmhBvdnzBid5LMiwZ3ZnjW1fEvRg6uNmXCMxNkCQUZ6nZdAK8BF",
  "key23": "4i7ReooYwGMHqkHgRbrXYNLG38fLM4MsVCSV1Wdxp6aHdRVJdtXNskbmybEQz1Jrjo3NcRhAtxfuTgLePeEt6nvc",
  "key24": "58CwGerd9UyZAXN7XzYveNHtNEAYFJjk1wyXd1fuZffKG8nm8ZrL8zqesnYhCk72aLtyhKL9PATzUvT9xF8riESf",
  "key25": "2VbjXoT2ZJDPP3cnyV1kbY35nkSw75cSpMN7pzu1nVHa8iYUbWd2YkoToweVApS6jxsn64jHxJQG9FUnP3HF8cqN",
  "key26": "58vW6awm9QhtBQRcafgceKRabxVB2gv1WpScGxGzYC3m6jPiM6uP1a8kx6ub11f7ARv1pnhLzLQaurF5vanwePVq",
  "key27": "5vAvpLi95mFYmTdt9NPWptgsL28vMAPkMihxkzBQw4fkJuZbUHXQszDvKKak8NiPpzTwq7dCpjbTsdb2TMaUD7QK",
  "key28": "4C2ZGX5RUnz1mk5zi1iTpK3umczAPdeDZd3rew8qKAEQvwSJqFjHt1dH9d8zHS4Vpmzn4NGuN67oqydsx7xzrpQZ",
  "key29": "5Eja7kNYio5MMD4F688byEhuHnxZT5qqrFEJ5xoYJmrq2YcJeZKXpGaEdXyG1reYPHApVDPno3jKhtFhry9Xz5xa",
  "key30": "5wJKHNUMmWnTSxznnTKn3d1JBiXzjUxXM2cPvePPBjmbN7636JvJYzkjyYfNnf62Ydb9FRE343HAgntG8MomtDwE",
  "key31": "4tAAZ1iCQU93dveqFDqmaju5XZwMsseNZwud7KNy1JSZZYNYq5RA7CCkXQxQNKZ2n4CcEHMrAJqXp3vukkJA8nQr",
  "key32": "39RxLnjjto53j6VMBSjNyDLcSRjdfnnU7h3zjr8Wp58Kx3fTxf66B4yLoUTPpsHcN6GAC4BfVXK5PHAnAdYvxc4V",
  "key33": "3yteJ4wzVmkJz7uBZbt8rfapp3x4LWkbWQk9xbXnxhkRPh3KtDgBzE4xkCHySXHLKquFc3CMnQgjQhU1yhGqCCrX",
  "key34": "2HvWuKVM3CSJVqxago24yAC3nbSyb5RSHkrT4ZfYaouaSgZwYjmvYU3MmAQJpn5HoS2sZJuZ8iCURzvDStQxR9HA",
  "key35": "4HXHfeEjq9E7GeMSF1UtVUbrWHYCGqGxoLxiZAa7bECRkiVrkQ7XDRS8YH6kPSWFJTAFwhZbymQbimw3AZc9CV1u",
  "key36": "5ipvw3qTrDBQ6PdzRCXaKEA19FEhDwYyNCynbk9pUb259e2kMAifP3dSym1nCwMQYngx7iaCd1KfV6HizuVigUAL",
  "key37": "RgaRaJrd8XQ1VTwYmtW3tjyUzYQW9dkHy1RmBHBWAqCMP7PvCbXvT29X2D4vYybsbrFopc3EZWXBM2PTscvX1Ya",
  "key38": "Rm9hfPqmFyg9fuiPjqrPzCfSZwx8LawrHvn4tabupbtTbAaB1uPxdHWFeRYEHeJ5vJo36baLsJwfYsDFgxtyENB",
  "key39": "599iYH2Saciwh2i39AcENL6dkogdpUK9oW8MAiVkEq2PXJQaBWwQfN63H4bBNA7HGCMXS4FHP5DgUH7Yikb83dDB",
  "key40": "2uo33S5zshqjogQkzefCKf9vnmrRTPjK8LpM4eybD4d3RGMtfKVABE8zqYtAmobbTk7hhqZJxKFsyHsALNCptJw8",
  "key41": "3w1wvjcmBxnNpHrSPe28deFPPVgweU97ZrdxT5bqusjskfVJvKGkFMjyzNGiBhqfMPwextjj8Hq4yWaSnM4ENDKt",
  "key42": "2u27Ea4PAdAk517CR4iN8rap6xrJQHvcYQ8WXZ5P6Dxmp3DSkcejGbuxEJRVKas57q67xT41K9uDnsFLMPLPC9DA",
  "key43": "3qjWNsLR7RSeNBwruB4GKrZfjatYtHvjYThz8C6T7qE5iq44YmE9NR2cnMrFJScrbCS3NY7wjGqFEd47G6SSGFMC",
  "key44": "3wkxaU6GBgFa5kTJRmuuBqbg7YtSoUbHatmnKMYLY5Gdd2iX5qu28C7W59egBFPVKbnSn3UB1Wfo2iS4Z4BzrHr8",
  "key45": "4sduje4uVCMM27YrDFtrz7sUmnMxNXZirPwEnjPHLKiEjCvckUFSCqSEPJoCK1UZCddBaqRnpkr6pPbttSSVg1k2",
  "key46": "3oZLuR7SCVEPFaYm1fzQ7tLHHtVbv7TBNprsr1V3m8boYQW4kqdgVBsUFpMVHWL3TMbhpTGbMDrnDZendcFjbkQD"
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
