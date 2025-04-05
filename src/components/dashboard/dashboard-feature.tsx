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
    "4CZXLT4QenDjwF114E9XFVsgvzQZi8rsiXBWo3WdEE9dBQgcrAP1i4qauXms6SagWkvLhy4tz3ut6gmsj6U19FrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V29f4xmoTPT75e3172o8TME3BKekSiJ1yxvoW75qQsXcxFbBxWXDWUDv5uaHcX5zVQL1fLgw7HFe7B2ZQnt9Rmn",
  "key1": "4NSjusBRmYw2WEcjcWhmtWwHAx9uVf8fH8RVc589GZDe6VZe7WABMcJz2ScRNepzLXwEzMFJv8isL3gvYhXnYUj1",
  "key2": "3SRSDADFTMxiwwij8aK3TLiFzMrSFGG6DfM1srLwhkvGcJsDd4FLtCA8F9695QvBrsAjLwNH7bucBTMmW9FQN6kY",
  "key3": "5Ypv3aGC4xR68Da9ti9oN1f88cxWm9SGD1wmMB1AtdYhGJrXeowyyASXQNbU7hxUR6BsbnVcWLajd8c4MdKWyZun",
  "key4": "MmicmF3QUtd3WQpmXhXDY18KBeaJcuA2ZbyV2qbpMupez4bGesdgFcpQa3Zd1UBsC3gfCFAZo3cyxb5hUETHctP",
  "key5": "ZvWkiWJYYFmW5tQqU54jPmAKHXKjVrwW1VVKsQqboohAWbzcTnB8MzyRyc3mPKJi5zS9MtNCRjXDFdifXdHYAVE",
  "key6": "2pnu4r2XFrxXxwR8HXZpuWim1upAJnTxQoyGk9ALN8ZSL9UY4nwsPgvjbaahFq4rxfKM2u6eaJtfzvdmNXnhTFjS",
  "key7": "2VuTvVpjYSWQ3173hbetgeWAzm6CTricqtmGUcwxKFx6YaE8t7pRznUfnn885CcTiy7u4f2KnHRZNivu3upbXgwP",
  "key8": "4UZZk7m9KYtTH4FFHxCxkuUp8eSZUZpKVk86uiXQ1JwnhhMzvyfBNxiPg4MwnPqpnD9jE1PP9GW8n66W9VEX1AsN",
  "key9": "zQ3B54wZQ9dBHccoj54a6MAsacUkKjpEQRNkAkk8W2vRUuH4LGwZiTcTRtvENrNVsuMFq1eJa39hULMwMtBHXPh",
  "key10": "5YcnT8cptVqxrkCUquKJtRQBQ2af4acxBBRajfDWz9Mkx3xKLrHxiHSd2MhpwuFdBFnzgZGKMwPE9f7nnSgVeTYB",
  "key11": "3Es6w2FP2Y1bHKfuzyJQ72fzfirhYRUoN2Bg8Dh7JFabPe1u5KkQxRhgeaLTQEzzVFFuA8RzV7Nebid8afBaq5UX",
  "key12": "3xXroHb3vn3SePVqxWg5wpHqNkG6P7gE7daFU1TvjSJ7pHC6gPfDcFHpPMDaCXa2YbzamH4txyHds7c3AD9KRNuA",
  "key13": "23X94jG55nBo9hP2B3cNxPJCAjqYY9HxVtAxjfcJZE5Ag6moCmWDUDsvRZ36pgzGD4B9JZ77Er6fVWG6sFfYw9ER",
  "key14": "2pqD7RAidFFBSJNuHPAVBGtXHWN15oh4bSmsDmpBJMC5aLCckPtPPsHNfvxGbuWqBxCkMucDpG5xoXUhQVY5Giw6",
  "key15": "3TWgbknaPo8H6neNCZ825Sn45HD53VUBxJmPPCP4y6ujHEMQUxAAenWWuSZGc7G5WbH1zMMFmUzzTbWFW6edwt8a",
  "key16": "4WK8ZtzZ9CXTMUMFFo6hnhffXwGdegAh49D8mjtXcJNAjtrQTVomrhLV1UhoXejjmA2pVAv1G1KT2TvedqiNUfFA",
  "key17": "3tq8vHDwp4TsXsM7GboLjTPc8xWF39LPe77n3EUwY4XfFgeDpXLduor1mXWR55UtYKherxg4fmzKTXbrk9fm32p",
  "key18": "65cihAWPxkDCVr59Em7SfwcS96X6myK6TX7t19ET1y2sMpb3hm24Yov3KEMB5391E4nS2sYdxHzRcgXbzunCDwvQ",
  "key19": "c3gQLXRbY7zJ1z9QS81MU8k9ZDxAdLNpxkwhKZbdA2KJVUVbjcUyTviDPPfucu5ycxThNqHarWH8haWZo971uEB",
  "key20": "5GaCyGCRwjuE3RziZibLZLN8UE77z3FcpP32xXxr9LKGPZAfnJktK1DGGAe4smXpUG1sUzirw5R222yFocuuM2md",
  "key21": "2hwqiBCTtbxrGQ3XakGWpxRcBy4tYMNdjLzgCsfVxBs2RoLnWxvZSTNHZJgwUSmQ3sRv66NReEfUzygwFuEBUd3i",
  "key22": "4k9bpAJKgCvBwVeHkrbwBC3Nz3DkkVWuq5t4b4RQVNC4EAmux6ouvvWvRJCZwQUQnGKupPt5qXS49A6dUuQcCtHY",
  "key23": "67i29WEyHZp5vMvMC9J4Bj6Z32ZkK2nifZnyFdh2ZH36r8wqhkYBNFxyVyMcaXtYME3QBDGAdwA33xDdhPYVKgMP",
  "key24": "2cRu3nDmvWmg47rchfuX11ypm1DNPh1DG8SQWFMA8n1FQmj3iDYpz8NdKMBsUkSHWFGUYzSyaeKHooNS2iiXZjWm",
  "key25": "vHmwAjh3Rox82g31cgYdQaXGEP9QaiwJ1Uf1uoxofHgKUEFHqKcx99vGgLsUskzGMw1bDo376cjuhPX96NAkaVs",
  "key26": "4QvjPTUyjbiDuTahsjMfohjKni7bccyUVKPiUMRXWzb5CxYq6d2vNK3uG9c2znwXfYQQzS5CvWLjZckHBMsxRweN",
  "key27": "5XrtXhaTMzCL8RiZ2DLBXAKBGfb3fv2T3ZCpY1iFZRmtzVmTM9qSoRdajCsW8rUuTvSPfwJxXVPx3htpf3w7bXrK",
  "key28": "3PxG24qFVUkVcCcgUhRwWcLqmkM4MFootmABLAp5WBsP1JWJVdHkmYea4FXcNTJBeygkYoHUYBX15mTbKCPHYv8T",
  "key29": "gUfRB4TLNvwaq93LrTHjJE2vUpvhXVjtSw2D3DP9L6aHqPM3baZsJAnd4hb7pHi4nUmR8QJMmDsUZbGY9sQ6K4e",
  "key30": "a5JL6MXCnyF6LN6opkehMhDTdeDZRJNycZHDmosLdfVLBLZ3GqhD3aj4Pkdx6d8kDggdBLnhwJNqkLvWee5aMmJ",
  "key31": "3FMfBKrszaHRCscxK4vC73L1mMHKNBBrEKJYrayBPy49Y6zrSfeMwFzoc7LqUgUNfxsybrAGMPQXBRXjZuQV4knh",
  "key32": "2uJJVXEKtgeHwEB9NSxMDW5yp3xT1Nkvnrh9XyPqfeJC18bVyDm49aGoAHtFuStCopk6oWJFCTaHPjPu4BEZFmys",
  "key33": "4rcYM32KZTfHkycuZRL8WNY8Ca87U4Nzp5eEGhis9syTRJbt6D75txYaG4kcgX2QWozzJgSeeYHKzV7Yadk8NPW5",
  "key34": "hEYN4HJQLzeK9cbG2KcKbGc2wrRZJBuaVVPRyJ6tHeeBKsoZDwPNZ3tJg8xhD7rnh8yqzR1MdBVeKFM1vJkKwZv",
  "key35": "3yCvkhqRKhxrgGNYAP1zfw3hgWhciiyrGoto1CDzjE5oBU2KL4ehkWu74nodMQkhkXA7jHowdhMccaXDMvzAanV1",
  "key36": "3n6YkeKQcJLmugCq52kdaxG1BVZnYYSjFjeeA2iAzcrdXq6ffSBsPfvYFg9MdFkjZjTWEEXcqmQECmegVZRGHRAH",
  "key37": "6THYZ5kFbZskg42V3rW3hsWv9yEZHjfbTLtNkXwjSToVin7PNPmSVsLVyjjBFR2zmXbzgt2ogwqdqGEnb5NWQ8f",
  "key38": "5JY4KUTGLH1QhFjtzCjxBPKqhSNjSZEpNdnALvD5oRdn3NAe12VoPsXTYp2Lg49ogcXfWFohvUt6UbJQBFxrSVkp",
  "key39": "3yNmUMFBzM7gTBdNMgCe86o5LzMb8G9FwwPMAPiwjBPirHcw1KnQuh7u3bcGZdpe3XZJcm6p4hy82zrV9gt3fMre",
  "key40": "qAaAb8uizXfwZUjjoiaA1A8qjtKqxNf3a2VuLDya99nRM8UG78W1WXZH3KLis1GjfvdNZoAMNZtzAB3qkewvJBK",
  "key41": "57TsHCayopGQPrc2H2sHPSFsM6AUkirNmd4k9i2BS5BfKDTFMSwj7QKUuWzP7DgwRNK7UZUJ4HEUK26YDBG3K565",
  "key42": "4fSV6B4wGTXC2Dmk2WbwrSSqAgqNdtZjrGJdAAKQJ1s7RsvsCq3qJabJs2DYbYcab3duqbHBi1L8kmpnS3Ejy87f",
  "key43": "2u4BXzVDQ2oCk21L6G8wttvee79xbHKCKdPSwYXxUtNCpViWBbkqKdaZQZL24JgenfAfiUrXL4d1uAiRppRZJEsT",
  "key44": "tAFiowTUtTvGGFXejKNoyR4uxhxj38KpDxe6AZmGwpBVgb69p2xxs5YFxwpq5VgBRezWqQGDDSpZy1BQHydiAqv"
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
