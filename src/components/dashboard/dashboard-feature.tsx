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
    "Vysv9nyCscJFYcZh764R9gtDMRcWSF5xfDqF35CJMZ2QbTkYWe5SV2RyY94gvvsG4jNTx5JF7qFiHMzponUB9ig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34uvR9v5WrcphYT1qtw4E3vbEjXySp8By2akpG5CcVbvY4zmKVvEo2eV8XHbxnFUZtg7boQ2jPkWcq9mf4VTgDSY",
  "key1": "62tP266CNudFC7Y7bxekgSnjm7kP71AES5GcRnSARaVcADqd6LsEqXDyvGBckVtA9RA5T6FwKn1jUthPHvmdiioh",
  "key2": "64byrthp9p2jNgKB1S2KbzjU2ehqVBFKDgUi9j8ix8Ncov89GhRZmBUS9VhyA8r7U15gGRwjbXmeLY71hccAicrY",
  "key3": "4FtWr9Qru6nrXRKYSwNLr6Uwo5Fc3HTwqvQ1mzkZB2441GFiKngTZjc6GTugxBAYBMg5NfdLvPqaG4uNL57Qwho2",
  "key4": "2bjYQ4t75NZMBGh7JY4WrPfpFV2G59S6kuHnh6LRNEtH4JQ7aDFobZFT8QDS3KSnkKScRxB9xCchGt1smw6vqK7E",
  "key5": "3GaCTvNiQooqx3NBi1nCrUMitMPC2PfhhtJ3GAJ7ed7Pj2rakpb1PjDUTbHBTZEbEhhcy4sSakX9qLsNd1ftzWMr",
  "key6": "3raTofacWA6JpjPfzt3729gruVNdi8fLYm5vVdoC1SQjALXfT4tkdp3L2uj9LZL6asYFE9dGwYwAMWSeW2wYpeAa",
  "key7": "3TKHdEsEMv12tCST4J7YQMUjEPQyK63BVNgGFr4rFAWpqvhd74A3n7Yx9e8tH1rMrRZYuSvrkNPAxHXuDX9MkkaV",
  "key8": "5hzX1QTS4i51QA1811HVzAzpsWHnKBiGH6YFMrqLb5FXhHoHvH2L3kZPTNeRoXGxP5TxWc2dNCL7SbGQJ3UhkbUe",
  "key9": "B5iSmFxeYTvSeUQEW2J1hEWVYur4ZdGoLcSptCmzWwtBWcKTks84gNBXd3eV6nGwk9NR6gs7QoYKToex5mhSnpD",
  "key10": "3u6WzP1CZXzxXZudvvFuDHeb9zuUaLL9JurVRgsvwhCvf4yUVz61jJEy6Ci4CUDMtHUrvMnz2QHzy9gakJPm1LRt",
  "key11": "H5QFAuyBeSAWDPK2nocExBuZ3eNWRDuyUwMdz9z39HsLRRzw6qUw6L13M3Z8w2THgrkeKvkQYMAgxVp8g3RGzKw",
  "key12": "5B9ZexMKEcqnQSTeTwjhVzKGP1qk4jgQNvNVofDJAEyhvuYGrZg4J4hXWttS2WheLz27JEssZRmB65WmLnogbszi",
  "key13": "zeYiGMSxL3RSbRWCbDuDaErnvDPDhmdTTBbcMLyKKReqDfyzcfRPCJioC9FmzpDmwhHJDAaxZURFnKYFUnKoBeG",
  "key14": "5MrCLbaiMUxz8K3R333ZmzLgYn5yQDK2PiZuukUd1VzWgxtgCMMUTUi8xzRVQewTiPYeS9w4wcnVpco8nzCUMx38",
  "key15": "2dJVwVd8wjeEf8sB3ZJr7kbDcg8t1bQ74Wp74rEGZmKUC5CKhQb8mDjQXM45FdD28HXEBTYAjaGd7ADMpWinHe7P",
  "key16": "4X1bYrP6URDrgzm4a83AEq7u88KT24sCbnQ9KLe6XQCpTgvVPreN2dETjW8GYkKEtfx1DByK2yz8ZywEaAFeKMgP",
  "key17": "3k8mSNhH9EJE93Uad5fAiHck5FQpPz1hd2boSsbxeVvNdPuXRv4sA6PEsSDX7eRWjiZYLJpsfPX7CLVs8MPwwQrJ",
  "key18": "4eQWVrJbPdnfoynd1PEyV3rq9jJ4QPEhuLsb3Bo25T7Tw1G3sFyqkSCFG63FGbwi22UNjpJYt88q1ZUJE2WmLoak",
  "key19": "3KG7eExrE4aWgRnreth3CGed2qvyH3ZVTc2EtPTSLHDV2WhBLgdtM8NhCxH5PS2PoLF7SaN3kBnUNFSGtdpnVRFv",
  "key20": "24ti5t2BcNcKMB8yZ7sdCLKPuQSEP2bMpTN8WG5Z9qkKyhenUsTiUL1UPcA46vs3pxoBiKdoKWR9ECtHyWFgJxyg",
  "key21": "hw5ERfVJyBHndVWgQUqZzT2xqCBpU1zhF4aAMFTEpVraL22FZEfjoQ7jtSfeadx6czPev8EKdT3vfkHxffXxs7k",
  "key22": "3yB28TRNEsZgXMaeYEGsrQk2uemgXkxFdD6v6aoLPB63CCHkgHusK6XDe5Qnm6mK2e3JFTN4ECcy1dQ4ABMxoyh",
  "key23": "3eBCnvEnsYUBJTtQM4KzW79oWwq9UfUZLCyxe1di2bzjQXFMXQ4cwshRUnZsgvbRNnVmVSFaq1DL6mCyF5ZSaLMv",
  "key24": "PMqqf3eBq9uqmWjSph2GW7U5q2Gbd7zUWBaHUT6ymqNxhE7cRymbuTE1Q26F3z8RmKNaLEwNkAyTCq9QsexrYTZ",
  "key25": "4S9Pou6nyn87t8KVZo5dw4Xr4HV4PF3TA2TiC6G3TD6yVpSPdJ3eEcgutTepUH1H1Bhbg1vFrWivgepALbXTGZaw",
  "key26": "3GHDUNyscunafT13wRqdEnqfKknBUUCeRHU9xTXN2jKe33UKZJVSLjuRgmQJGCeE16SqPtNUorHBkefSMCafkE51",
  "key27": "ZQoi4Jfv3NNBSVGgzchzhZm74nPnaHSvqtnTpjkSWKEwiVBcknHR5PgEPygLzTdGTPy8AX3Ch8j7VidHvj8LNGF",
  "key28": "66Jy2mfgfiSZGrxcvv2n3R7SceVw2nWKHpmVUaHfnBsAe5o4pw8TWJvB1KsgmuN7jqk9wsy4tSvHCTgQrQzifZQj",
  "key29": "5gK88LtusPGnMBvpRztxtyi7z6cTkmAHdGSznobcNaY9zsjZTTE4d2kkWW9TjtwPVr6YKoYTgwdMZ41opbfaD6uC",
  "key30": "2N8BsJRdjULhKGcrmQ9Rif6Jpcszy7t87DmZ3MEKPGeSish4trMr6GhT3nGrxL9cT7fpiGNfmM8oAnLaosbFu7Bu",
  "key31": "3PeyMrzTTqN9hvRXYZ6xyFrpVbmn5Bw2jb9yBgte8o9Lwmp2iJ3zxTv3tVDy6Pir4yqk1z8sc9Jvsf5CmeZEwnw6",
  "key32": "5yhY7NpGLSAn5EuGkHpBFruQvW5SSVy6Yrh8Hyo55jptGv2LTab2azovYECv1iqAgLxVsNCdgGaRhm4cpiXsCvgq",
  "key33": "P9Hoh7TgdUuNz2H3HdMifbZ6UTrL487Ay5HxctGYfNtZZ23nb4knn5Uk9mt9jZxq8hFH8uMrQeh9dPaEaYq1cj8",
  "key34": "5s423zb1EUkiMAhhakTXv6WFT9Da7gGUZ2uR4Z5LA4kPME7N5CF43p8LAsTHbKUBACiJVpHy76buDwtWFAkmKHf8",
  "key35": "s7CLfrTdXJatLWdvMjbVQkfGAJFRsPZssCAyU2dGTm9A8bw1FznXeKgnfUtJoW5M5HTXr4mGea3V8j1CmPKVEoj",
  "key36": "5sNoMyRWHzxrcMcdtCRpGg95s7FGoRiT7yvVzL4m4wMoyHVC2JKm4e6XhgjjtjuihpobYMjqESrrBwGimDZ3CFiB",
  "key37": "KfS3WdfpPUqCgUzkbjYNKCQGGdd4kYNX3rS2mvtpGJymtETBroHnfujMJXhnwD53JeMV7gDSW85e43nkFder1xR",
  "key38": "QerwnkPoXvxnqt7dNeGTcNEhd9rVjoj6x7DGPMXC87HHaY5GuAjox9byWWjVJ8HtZ2sVfjdkhKHttbdGFhdycWq",
  "key39": "3VjFRAJ3LjkY6x517GpDa5xaTnZQWkNsbS3smjvxe9m4pCnRJY8wURtndKYCcujWNvDsXSi5tLk5MgzmukoxSH3j"
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
