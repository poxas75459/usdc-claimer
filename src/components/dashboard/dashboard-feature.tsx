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
    "4fmPu9JyK7Hk31buXPKNoPSrdCaFnNmwA15B5SKoEh5NqzmcvgMbn9rqg2ZH8fv6D1yY6v8fCZQUYJwHbumzr4yd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ceBUMsiWit6ESiLmLsfWP8BQa2v8XzXvZEWRaMYKgRU692TXbg2YYTYKpBe5ZhJKyFrcdDsY2WyFgacyhXLkcpz",
  "key1": "3jdQ7cXK9mY26TZ8WESETRopuasTNz8P9K164PtNhLs2Q6NHTRKP5jknxcu9eK3VBQUZzwCPH3LE7PG4sTwqVxhV",
  "key2": "3TimuqH9cNkgHsQo9iJnqXd2uwDmBaigN6ryYNm2eqCXA7fwF9nwm5A86FFmW8fEtPFh8qasvmivjbtP9q2E6ZKA",
  "key3": "5ihEHbVPVY4mhXzAdYS3enXUGVZUBLuTBumyo1ZkRfUKRUNHHEpYV77SXMn5qbaNcPpcn979V37Fd3khRiBkYXrz",
  "key4": "5eAo9fZxqS72p8NYWoiEdWFFhPAXQj7uaaCY8PmpvhVzGxynjHM2Tupb7yQUSPsa4XNr6YX5DZqBvTj8YCndGTe5",
  "key5": "4SUeqWRKA1rhuuPkV35ZeMhCwX5zAeod9MV2vdrcdanhRMVTAnSud9YmWcj29xPJB4hLBDF8HPV5SW5R4p3H9FW",
  "key6": "3jjd1aGKgkoLwThton5R3dpdTv93HtFiGLdhQzbBLf7c8tFXDSJ4uVcV9mkRVVEujHtpEpfSvQF859MWVzgNp4MK",
  "key7": "EJcm8rGN6ebXXF2E7bdtJKAzZBUapJDwZy6DCSiKCNiMqStmo6BopVEs1xhgpQyDtQAiU7G76KEEXpBVUwgVkRi",
  "key8": "2WDM1iFJRWwXdAVGZyd9MvH1PmqhWBVGyPTZUHrzzj1ErmByMz6rnBXiNZyFiuFY5SBRsWF71t6oao37fzEfZSqQ",
  "key9": "5vjQsJ3kHDKAzJyvKTJT6NmYsJeJzfnfDcDsVRkEKp1G7uG1HCFWRJcLEyN711jkfR2ZgR55fuYTQR8NZrgMJZaK",
  "key10": "HkCZNLWNatV64xbCJ9hxaPvcXeVQwUuinfSwbDRWFiQXM7C6e2zRYssyDeqghDumxNG6R3Rftuom9nu5oRAGUQJ",
  "key11": "4T27dX1GHXcnp5NtXua7CG5Ffivg5YNUMhnAiCcxcA9fEFvEaHaHs5WY9Ma888Uvug8iC431RA5qxqfZh6GELTdC",
  "key12": "5SE3HvK7NXhAz1kasXM1jk5RjVVXSB1aBpFD6Gxtt1k7Naat7SFF567FAxyK2KegdwuMs8ApKbeDg8a8qDNxvHM7",
  "key13": "K5CNC12hFCZiM2JY5Xts4NnQyiLsXTCHtVqLiSNs6PzZCoKvpLRfGDE5oeE9ME4bjivkdTXaddtwmLoLdJ9bpyV",
  "key14": "3P66TTKD8TMARtUW7Hxx74WEfy8pMKtY7Zxc7DVLaDs1NyqE9cYtEskP42LaJZDYt6YfGEnRv8pLmAAEVAVUPrAf",
  "key15": "41svDb3a8xM5zS1qAm8r13LzNy5BDhig5ZwQRc9nmwF4wR7MfHpVMUobPzgYymMftar1wW4jStF3EVQByKHnmEKp",
  "key16": "4Cre28miHSWWUtTZR63g9gtVYV6ygDMdMsZvzuXvkL1rGPJQy8rkZbtZmWH5HEvRE2AKb2eEe5sJ2MGFKEbKFFY6",
  "key17": "4cd9aYtLTD7jiso4vZUcEqyEVgCncQeQszDxAeB7Bk2hX4PDs3ZK3B5jkuuLmhHWtTeaame77pdfCk3QsfXkPpR",
  "key18": "2cdn3BPtyV3QZVTTKfMrcsYtcnfm2S3zwtqL95ozN95brKAstUEjF1s5dUcdn9fHzZn3DoAjT4ieAuBbHCvYeG6F",
  "key19": "3BybK8aKU9QvCidJ2Feo4uMo9mgNBuPUmL1f2mBiSnKVDJjkU7Qvg8KN6CagRKntbA87gMzMQZudts9rFRS8MVei",
  "key20": "1ZpK7Dnp3DsHXojoYUjq8NMPaRKBw7kDjkuXJpGAvsDWpzrBDnxJ5hC2JPF2YbpkWF3m2ogjY914vGhbxD1QVfd",
  "key21": "5D7YVUjxQq65kqArh5dUb8TqetjpDyEYWtduuegPLNP4JRjehRAGvftKCuLy45qwvEY1h1EnLs6bGdWWh9t2Zsad",
  "key22": "243JJhr37AVhieoPLXdN4mdLzvZFa1zai2PL1djwwmYtsaBV45PxKwQdNMWVBTbBtqhSzaj9X8p25Nw8gK8P11i2",
  "key23": "5tv82eu8YYkC5ZNkyHz41EiytwuBvjwP1BUmZ6Dr3seedxCesq9y6HsS5kotNF4wAjPRt3uHhPetcp4Bca2XkyG8",
  "key24": "65k9CpCqCZHummCiLWPvQyeC6pwex1eyjYBv8rTBF6hR8EMZJzq7nSnh6MV6R7LRXuertt5jHUPCAkTV7tDrucSk",
  "key25": "4Vp5iDcxrpexEYUsVrMHoWDHGeGEuvFkaVc6FdBdLjKqUGc9XBUBNVmHwqppME2yVnnKenKG4Kyj3NFr8YSfxpQv",
  "key26": "5vAm8kb1pcMui1MQ5m7rvRaGj6bNj4d4JpKBDyWuo57idWZa8WLbskJhYtBncMAQ56UgXbEgrdsog6BHX3Q8LFic",
  "key27": "5CKeFUvMcerJrtvWuhXTmQHCX4QxJDSYXkRdARcWb9JRy1vjBDkKGAWefH9uX3YrKNXjK1KcoXu6UvHCA8Urf3jw",
  "key28": "2Voq6gv7hcnuTMYqYPwunzGi2DKghNxmKjp9Kmm4YKRj9ptSJaAV6TCtzmCrEfFPPY5AvJ5MAK1wSLwQZwF5ApC",
  "key29": "3EQrqSWeZt3SHdFzuXBkaQKJYo8adF24PWppiyiGSPQAkhsn29Yp6qxsq1M9Npocv6qhzLgYJA6pPj4tnpJ3Cfo5",
  "key30": "27GzFWwppJrSA5YKCUQ9TdDjW6DxaQpyiMTtMKjsGD6WVQQkq6pjS4A2xPJd3TfmKj4Gtjpv77XpypdPzcDXVQp3",
  "key31": "53SbiKVJ2M6Nu1VSWENd91tz8eLeit82mWff9TwktheRYTxhD29aDSivb5D9RC3eTvTA44nowonVJrvVw6jrWBWt",
  "key32": "56ZjGrPCB8qvCGST5LMYza6j6Re4ojfarqoMXB2M1bnUf4qcDabX13J4VRcBD2X6gYWMubGZ4roHck5eTV9jCy63",
  "key33": "4gjHXyGVG8JHmaJzxL6PvNLdwffFKyKWRkpuuK6FP2fqvybMD3kx5GateJkCXUJi1g2EQFHfMLiXoyWx2KR8MSn5",
  "key34": "3FVUcKk7uH9PriN4ZRvvFe1RUj89Pz8g5jWUdM7uXgKJC5KBPofZSjJuETa5VCjARV3nXYieGxtB5wXdd6o6p2LU",
  "key35": "2LvTnkEf9A6GLguVrtLuzuSTpq7k2LKyQYdiwr8Hx9fakeQ99MtCdM19VobaQLy3nKnBYacZiytc1bZXDg5oaD2d",
  "key36": "4fmtBnU8dWdRkwECPyPrzuY8KUwwU2mu343RQhbpMekzuxGcnahF2NXHMMsjR8J6mnH8C8NK3P87gUNDFJYCNpgx",
  "key37": "59fAXuwwTV8SsdGZ5bk7V3QumBmzHLVnL56wfsF4oKekfNurmhdC9wivU4QFCXACa2W9MwDU3tqJemtLE4fAUJVU",
  "key38": "2LyqUg1WtM3diU2HFRHLCLS1g84eNEZQ9xUcMfDRNBMekX7YbVRzAVHX55LvCghMN19UHXyuVdwACnLBhcsf6CMk",
  "key39": "2KN8kSzDoESAkVX36Pgpk824ujUVYH8FnaWoF3kMZ1s6d5dXgXYYZWSdT5exwijukakuwoet2PSBbr3xXBCbWprQ",
  "key40": "3D3HXieJW5xZQixXC4Q1gY8Xs4EYiR6ecX5rNTG93e5eozvc3aELR3gFkyHfiTRo5oyLg11BksJqcYP7NKqQoTGm"
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
