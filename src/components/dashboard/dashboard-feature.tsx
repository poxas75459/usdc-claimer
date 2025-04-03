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
    "4xkVd8iq7KvRh8F6AvZLVP3W6tYXhsdcXZEhPV4B9y1hm3BcQfRr5RrYkXX83UWUiJAxYQh8ZmDrhrCE6RpBXWEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Z1e9AAXq8csCURU4ZNAvhzdMQgq8R5td4pHqtzWbzNuCEQRLVQJdyEKqewrLgR87qyXnjdcW56DfvJ6qqda8YH",
  "key1": "59tLvvpVTnmVFzWQm5zHV3fNHmDYb7DW3wA9viY1W7hhPo1XEnDK9GngfZF5dTJTf7CXQ1H4RYH8GCRJPGWuHYGC",
  "key2": "5okW7AwJ8pVWy7Ud6UjQM7qQLtbi26SqdYWKAXtBLakBCsKwVHkSuscNWjQnq8o6at4bnLTxPxstUbHY6Z572PSm",
  "key3": "5JDbuCfSThXzg6umofcmMAxEkwQLwfMX73BTRZrCSZ2rUWwLnoNeg8N3UGn8mJSMq6tAnVqyiNimKXpgbzTLtEgz",
  "key4": "4aUduMknvbtthBny6VKF8LM9WbrPNwMdrLPnei6f26NHePtdmE36TL2sf9BzpdhjhfN4faBxTKef8Hcsq44BAvmt",
  "key5": "2j8WRqRe4Kikv51dJ3T6FJEpC15uZN1CNTqSLDZSywoDv2BmL7vrUvrEVLnacPRePi4KoeEBhqFkbYUdS6J8wpMh",
  "key6": "5NrXJ6Kv525zNPQdBUF6YiReC6oxV7UZqeeuM4KFkxArunidfV94skNRZQcy3B1Ck52Gy5CS16HuVAmnYwP6TEaC",
  "key7": "3zPjTLqkVJzCWen2BHjkKvq5TzUvYTgA8pen1ieh8Xit3tHyePoiU8c3LMZR2L3iqU2HMjkcH3mXVckR6wDfXek6",
  "key8": "36hyr4pUTHEp7MAHXsk7mM51HFxZCAsdxWrHwnEVRkWJDYA2ksHGPYMQ6JeFR7iJQmua9yu5L1hRps2z6bK4yUWW",
  "key9": "5T4dQDE8oU11ZTAYraVQLSW3hySH8HKM3GQkdC23LQ7J3SR1hdWm9Ez56gKLSfnTZUZo6cLFAWegvwrQYUqvk17y",
  "key10": "51GB7zSsiEeyAAY54xYDJXY2vjXHRiC1mufZFZXAZnshah3WLPhbjwjnBSBBn1nH8zSx1ereqjcNr94vR9pSmqaE",
  "key11": "MW58f1U2wr8bfx4u8ZEySdKz6dXy4ms4bYDx6JsCLGPegVLFmv2C7ZGmPXFTL4cBTtJqoifFPfEKVQRShT9xcEv",
  "key12": "2HXwK8nLdbE9HXZSv51WATjDPgMnu3fjwnejDJ8SFxmHYdnjY14MrZCCurw3QWbLtsUEDxiZDoLg2E2rgPJkivjZ",
  "key13": "4K68qJCB77vXDJyZNXxSPtEACz5mzJQMRuvXZPyQByCmYChTt5L11Bb2CwBb2gkfVTksY6pqK88Nfiop5QVLDkVW",
  "key14": "5sELoGqSsX3rXiiSMtUuNdzy1nLWKMv3QeQdCVbu1XvbfM87SrDNinYMPWebUiJWCSmKT4hvYcNVJFNxjFxpnf5n",
  "key15": "2fGEC3gWdfLU2emRVoimR3pweGkyB7ipeE7Gg6pi41NRs1K7gPhYqsiy4PkuCrdhnez9DtfjMe6RMCTBSwt1NErK",
  "key16": "2e8B8A3kHYUL6CNNveMucYZPPK8SzLEdHmCr4mmUrn6qwmyiDAi1ufKofEPBcDRL4MNLfUMk2dMsLp8UfvP5nB9A",
  "key17": "5DBZng5i5XTyQyLduL295RvevXvAbs4nDEdNg7dMutNGrkV9KTPUdMyMVdQHu4cU6nM5CYvwxDL3jMSwngAiU5Vu",
  "key18": "MrHEVLYWjhHWKkEy2QqPWoGxHyYh5obX5nVahDH4f2jYsSmcCGrAFRw2oxdgvgD9ZpUxnzD6pR3PvZHH35F9AG3",
  "key19": "5boj7u69rbGaKqJVPg3AW9N1BsgG6RtZnqXzgALHuaZUgnMgN9KPPx9sVFcjGMBze53WsbVcJyDpw5iNgffP9AEp",
  "key20": "5KGmvvwfFJe1rfvJ56oHiZNkFvcLTSdrhBpvSBjhyWtpLW9gjAhvMnojsYWx4N41dbZGGUYn4jDgGhUnbwEqrki6",
  "key21": "cSvyJ8EoWrw38ktvKfiPzdDT5bbiXhPTuvTcLyBRR2woGEqt8Q6BY4oqCDi2YErjxo5mhkE5groxvAnm56oSb4Q",
  "key22": "qrXqAhCH4asbBDAnD6hhEHCwky6jckPd9aAZY6nKrGiDMvyftJ1MpEpfY2WuAj5KJvTeGG1xnWcu1SE8rUrnFcq",
  "key23": "2hQwugHQSN7f4FYvBYMvSB9Uza3sBUuKNGxn3qHB5T9DaT2Ty72xKyiZzGKkSVDbA7JBoC7XQY31Em8ap1NpgdoL",
  "key24": "3aqt1EYezxBtSVcpuu878g4Tok6RcpVC2dcGnPPGeFdRYipwz2NsNAAvW25r5TeVmnKhfmTb6bctEuYAVeMLePQp",
  "key25": "RYb9N6jJsFmmW5PisUrWqvtgyQ4Z48V1EWRsHHktGa9Zkt8QFYziH9vUJUxBFejRNNzk8vWrpL2hQpNaRsKYMxV",
  "key26": "4Bd2RkaApwpdaG5EyGv3Q5T3Pq4PXR8GePFGccEZaSoUjWHoSNdXWLvDwxTz1fmTVAFLJa2TnuhrJ56HyiuCZwf9",
  "key27": "3TdqsqFyHJVYfwsUcfVPoz8BDhizf3PKeJaXWjYmBKarSrwdZi5BZ6nVqYB4bUUGUwUfi2mGtpeydiRobkfZXQrj",
  "key28": "A1hSePc5Ljiw2JZqsz21qUS61yfPPC1y9JbmQnjL6B2brrro76m6x4S24E9Hgvfcac7rj7BYtkRHnTNRiSHbxMa",
  "key29": "3pjzvZgzsL6LUQudrFpkzsEwiKVU52FwpiyaPQeeK2PwERT2q4QQfvvZeBXdewhBe54SSFnMJKQQRdojUkRPFXWy",
  "key30": "34hqphwb4rpVBnB9WBaN3oMRE14ipZxLTmZtkJ681uU5SJZALhFrbtbntL21Km2b1WaYqF5StK5a3VKJcXwDaRvT",
  "key31": "zoRLAomB7XHnRU9kxBzvbWhi6X81sq7TZwsQGF6iyVXbQSMM3XqHcP5UcuDebmTQ47UTv2qYi12nGw7ESpvBuB9",
  "key32": "4RVaTVripg3dkvp972xiBHFttyLQ2myLhddrEvJDTiXR4ae1mfJHXDkkjafqHAmtwA7apXQghbajJ4M56bJzW2no",
  "key33": "4VmVoH83qY1e22cqc15bY76WZLqGvAYkGLSUMhfmk78LGgXcXuenvayNLPxLwKkT12pCy9YaX363iP2uMnVbQ3Zx",
  "key34": "2qZKrgpRauEJHbTaMPHkbfEDKheSCaLxjkGZ4PhGHjRNNXqZ2brY3UwboETuPCx68d5MnJ2uofNMWa1P5CSQNR2X",
  "key35": "66y64AYE6DeJoTcWiYwrjiG36aYXL9v1Kh23ZYNyGXZxUPc1t8pMCqHRnvp4jsyUYdzbiWmuMvgTiZhbFQtXTBHq",
  "key36": "2ajQMU7dP47ZRVhSDTz6FARi4Ez8fL9vTWkgsHvAw6dxVDpAp6V4znqRSGjJCCeF3GoyGZkRP65QLDtub7TfpXZg",
  "key37": "3xXT1cu8E2KA9KBhYRJLrRb5vGaeGVdHzto6p11DXtniRhmJQFxeLS9Usy1cVvwyj9E8zq716uDXTM32kmF2HYiv",
  "key38": "2n8Gea3iq5KFttRqiKRYRaEv5AVYimrc6vt6p4y443vjfymUJPW2rmF1o1Hp9jzqov4HL5f3FSj5nD5hpAiJBexP",
  "key39": "5kH7sgim84wmmweVA96Saqpzs3zYmLCwvwi9xVzD3GEfpCJVXZdimHwgBZXGTFnFQFPnvAtwJV4EQEssGy2dRx9f",
  "key40": "3Z4bNobZ1cwrC8GVNYsFwBxzBGjxNTux51wVP3ec5BPRZRpriYKTPWhKzVd9KaoubvQnfcS35g4wYzGmNFar5iQG",
  "key41": "ZA5cuAcxtegtty61BFaoCN22hmhHNGARcYYEh8dE6KXAWTRVtWw4BHbZdiwxodkK68eG8LktgY9n1a1idBRjVbU",
  "key42": "58MuoR9VFfcCK7s5pyX7UiK5vueUBQkNU7G7tFd7sMEfBEJ7oQBReSvZ9EXDd1oZ4Zw312doYaEuv37sMtDyC5j8",
  "key43": "34iWK8GRzwxWQU466191KPm8fuJETDEVpQSR4cwxck6bLna3xWkG4kzNbvf9CBCPwcPyFRdvnQ9TfgFyDcPX7m9e",
  "key44": "3Mws4bfXfcunMDttyYFNo5gGKviSyXcBoG6Bova3YLT399p2TS2kGcHga7QV64fTwZEgHXpPKWRkkqrvYKo7Xzeh",
  "key45": "2nnzXzJoqwYLVyApr7sFnGjnA65ACFMvtGU6p4ckhuQRzhZFBSWkVExRhYKsMnqpaapjchYsd3XxKicUAFTawNyS",
  "key46": "3LThmoXaypKkawrtFnkQ85po6vPasRxEKyTiX5RfYKdzzfydsL54FNDNhmVv7HBaNNQdXKDHgAXMU6aZHN3mwSdr",
  "key47": "5YwhaitsCjicpsrqzJBrsZouhiZLExYbJcVaB7zWbnQMGA4DELaWVhAUz8UBtyLEkSEXGa2YBrUhfYABYzGbWSxS",
  "key48": "5V4fS4FcebgCfSgZuSKV3yv9dsqPQ4HTc5q34SpHugwSgTv8wSwXTYdnU86HAWxxnHuFtUJjAuTJdjWuB2uEzZ6D",
  "key49": "5pYuCAtM1dKnQrJJs234kvs7Z3HkyUayd4j2whCcUqtYMEgTsqVMC9r2kVsAbmXkgLZ4jyKA4MHxkb6WncASJx9V"
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
