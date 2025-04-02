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
    "2diHzq81Y6oZAxmgUdUJwY6EHHPi6TsZZehCe7R964TsJujxxCxPJWQo8gkr5QL7ConPofRbJFyj6kVkUES6ufyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kv9BW2jWSpCoHWCuLjd3oCMqLLcT7pgwmFcnFG1sf1wQXutt4zJpuexP8M2rq8hzXAohuvGNCqNnnWu8zpGhbxR",
  "key1": "5svGo3MMSDKSQDngV3AGcPvBFwVbMYdmB7W4V6ZpUvGgBgBrUPM9kfnhfhyHHTt1zDr3Cy2L3gzX8QMAG33s6oKS",
  "key2": "4xDRf5zt38S1Zuq8pE3NvhopMPmotKFUTnKWacnuAJAhBmQNbwuQbGktF26otfyDTtQTmcQCvR3XpZ8UCaTv5ZtD",
  "key3": "3q2jJo9EWpPpGAjWqmTqGTKv8vEzLW8ZiHTh3FdtEUff16y9Agzj3xBrvC2j79bp7vs9zasoHsuqz3pTz5WvTCkj",
  "key4": "2LV1ySeNGe4vcFGMt2TKFcqPCjhPgDrpJCEQvaUsHydQHX1EQuSis55LZg4nxMUkAnvcdpCGACjaDJXBttkMSAfc",
  "key5": "wzfC8GgYpGD7SoWAN6qxUg7RCw6JCSNATtsjiDgb4pbfphP3EqUNMfhutvxFF8K4X84P9mT5pSWhx9Q9f9Jw8Xf",
  "key6": "3QGxeocANht4iixqRL4HCsK2UTKEYPW3MgRmu5xpCccqkFkJThAQGqWJCJoptzH3K13sqJBi3FSRD6eee4M8Qge",
  "key7": "2UMLpx4ajroPqRfgnzK3TWyciMNcBrrEFXNRPr7ek6JNdwkYJj8ccFJYA6871W4bhd1D8uhYLFU3uxc8ijYQWQgQ",
  "key8": "WY3CQJ4apeRiF7UwQcaQwDNQyzwRwk447QnvR9LB2sEJBNM15LCDREV9arWHKBiHjuc8iBQubo7uGyCKPsK6DiU",
  "key9": "4vAd6ptZDAZzAUxXZZPbSb9aix6C1f8irJqHFgdHTwNjuHPEZRKATLWBpdBuVbW5he6k5C2KLmA6Ps3Hhsp5ue9B",
  "key10": "ivsjzCahj865VySWXcFLJEt9RbwWxsVbok8UyUymabLoudqkurJRXexZqop3E7fLwzbmGfZTNLpXLTcMRynKRhk",
  "key11": "5AmNqr9BBwe1sjgM7kf8Ckjrs19GEWPoP5jAtgehGMGuGy51Brqky5opKMsuDLDD9r2GM6dv3LnSdJSxm3HAMfuK",
  "key12": "449ADC7aNZtn12DGCGkPbrmFM5ujEtsgyjjjjrhFg8kf1hZzb1tiPrrzKZ3LK2nUBD7V8iHg4tavs9pxSLxnzEMP",
  "key13": "4tLR3qpWASATGg1VAz5FRdrZYp1QtGiYD41GWuqwM453JWKB2pRn9aTKqp6aDrPSiL6XmJ7WTnhXuHv31bBZqS8D",
  "key14": "Tka1SsgPJfVxBSGgdSeX7bUHEXTSciip1XTf1Fb334MVHSHDskWhsBP5R1Mn7B1hZQyXRb1TzBoKppDxifaPtVS",
  "key15": "4GfHFZaaM1zCQKwR8UAzTptRV4pZ4xXsCA4Dx7KZbWbpWpEMCax2d5eZoiFtV6d1cNPJ1CsDGoHrUkhW9qfH6QGn",
  "key16": "28JfogHLj9RwG22jBjmBKMyDoidDVoKC17GKiyo6towCJ2Yfx3PtmZUskkxUvQn4aUkvXjnqCrCSP5ZNbR32E4f1",
  "key17": "5hPfuzowv96khtwTipV73hFetmzMzpp8oeNuzxpJAaPZMJWnuExvVwbbUE32funenAPzBRpWzuFqYGz54ZC3Yzyn",
  "key18": "2rKFdJXLkNqhKUDfB9X8PTHG5TPKNooNHkKjfHMHkCic7nRgb7DvsLpPNGZMEEFn4ihjF38EnUv6ritmHG6ZpYND",
  "key19": "4FaDqRBVW833ywJL1hURUszdCyU7MXJvaDsCdy5U2Yz4ViNgddTFQNevSGpZ4XxNDj6amx9huU4L8BqgMfrzYueZ",
  "key20": "X1CF3PymD84UTYXKMBzZbW3Vzg3tvud6CM9nvqkpAEnpQrJEFM7i7k8fe4JuU3bGBUuYPetcPJa6PSzoUywiKCP",
  "key21": "2yAkGroKwcbBukMncDvTkRrR3qjHbK7AzGZ1ic2Xp1WgELY1KCatcvKzKmmqVsvuM4kbbXprCUoUiCCjFzPhfKk1",
  "key22": "3WGGHBEhrDXbK7BSj8cpHQzHfirRVpPPenVYDz9eRwc5R2nW22sNcCX7F6uQMSQ9sqAX7ajcK72asG2GYQ3D7aeq",
  "key23": "2e5h6Po27kuqKgaiMbDRJSg217YFNAPCy4YL7iEYgWtPEHchcDhChaBVMBP3qnQYKtpaehVUaDRxwf9fzwRbyVLc",
  "key24": "2vg3q4299iWNZY1iNfS1MbhJsCPEZUtubb1EamavaSMoyYv2xMK8VrPPj3n1auc3XNjx27tcn7mV5BXGwFCvdhLt",
  "key25": "4mQLRpzLvzv9PPHEE2v1zuhiJ46AJU1kN6jhvGsDTF6i3RZib8WnFq6eDyMnTfPKHoGfk5MHQgCnEszcMxmuyTJ5",
  "key26": "2opJp6fwdeVjD5PiWPKwmcZK56JS1zfUyGXbq2ztBxZco1vQh3bPx2cuHdwLGtwUYNv3gyafBngRFSYHYwHYyeiG",
  "key27": "2aRk4r7THZmVXAZ6PTUyueTfpXLyoKUCkQba8W9DAZTVJHsh39dmEEWGtLdToq7oXEVJm1chTmicN1ULXMzY8wrF",
  "key28": "5x6BN81yb2JJN54DyroNpeg2VqzvaWgJDyZ9pXJaydcVXiU75hEHGrTYrNjnqHyHVmoybZFnSRmM4ijWkGuJ85jc",
  "key29": "3aZ2G4eXLQQ26i7yGa69pcbJBsejzhdk74KdwSGVN2HmXadvw4K7KpMN6n4CP7USMuDvbJtTjH3MStR2uZc9gNy9",
  "key30": "25hchFZnKBBuNe7pXWoJiYgKvpXt5vnZg6yZhHDacqocbM8XBzaDBqNgQsDtyRrcfMfA7HMeQqHhukHx4fprSwVU",
  "key31": "3JmrCWuVbkQkgfRUzJfr3NXrHpJ9oA6Asj3x7L7j9GUgjKn94cvvTZWmrkKjKcWiVGd6DYhg6CC46CZNQztWSER4",
  "key32": "4NAqZMtRVtjxLggcCFrATB1g6N3ZwES8JpdLJwpfUVRESGXr4BSEiDVFagfb4rxJdgCXM6kYRob5YQfvUnYseUQQ",
  "key33": "32YXGwZzsKSiMUthYWzTCLZVhLugxPYsz7aQDP42L8YpaohMLmxKFoR82UoADN8Ngsg6ZGqDXwBPmzmJKyaSqpBw",
  "key34": "PJDxBcj74zg1YpAgAPAkHYvX5gVxgCyHWz7Jonh6qtqX91vnqyLFeiAmiwSDYPNFHcS9ehyiJLLFMMiiFYiTzdf",
  "key35": "3ZiFMmhy8QqPwmy1e1FTbafhSzBBYpkPEuzHTskFxke6QfS9haBPpxgmb4VUeAdCyGmoGLe834kYrmPd4Grd6TH2",
  "key36": "5rgveLDG58G1cx7unKsUmsQnTuZsFEizKnNHt19qav3Yw32sjZHSBhhRx5dPGYtEv5qWd5NKH31f3XKmZTTW2jmw",
  "key37": "2u4u7T6ELsd2maGGjAerJH8bvMwC4STbVqbzNA7rzeT1XuRkzqfrLcW6z2oJT4GZBFL97tefe4MKgQSgWqYbSQVb",
  "key38": "4dnPgkqQgqjFGN1AYyaDGbjBy69aTWFtjMh4Qmu3T13tSSg6ArdNiJqvVBeww1TD6rGqgTubfARYCi3ykfWWQ1Fj",
  "key39": "2BnWrkxXvmVcPGmdmReRGojbo9LPtgHLaTd7FjcGFzV1yPA7dSB5Ty49s9GMjGCK3111D2DDEZ9snb6hqdqLtP5H",
  "key40": "5oBjkGw5AeEDRdsRbxa4vr3SWPdwKLe8puKHEow34aw4bDaGwZ6f12QukPuPftsqJtVGBDuUrU3rSs6KN6d9hwbF",
  "key41": "61HWJ6VNAVJasUoBbEH5jadqP86wgKCkjp9XQmRinPL3XDtYH1m2w6vVKJaQrfbfKSGmDtkt5TLR6R7Unuk9rEoh",
  "key42": "Wux67idJwuL96fFkzG88PMQ1cjK44dE2x42oRsFNpkkF4DgH8ykGtozdE3xfb7yx8saVPGdWFcEPzbrQQCuoya7",
  "key43": "3jcVQJyfj29AASQcda2GavYz2ykWx57HTJJaQh5PfaKi4Ee9rHXTSWFd7MvhmX8Nz4x51Hg1ZfzwHCmnh6BbWBvS",
  "key44": "46CqaJqW8EnXnpKGhPRC9EVa9xrLX2ktyshBN3gYoDJu2PecPKeCPFaKRxknq3shHfaGq8MKmkrafWtUHsDtew4L",
  "key45": "5GyXLP8W9DwPrgbF3JKrBEVKJNbkPKqxU4AMATj3v1We314V8iEdYqLzz9p7agnLN3gQiQPr1xHvtsjHAYDwpzN1"
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
