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
    "4tjAYXMk4oYnAvHMHZEyEMQsUvbruL49mRNWcSeUHQ1WsN7A7n9Weo49wKo3ouiXnHwoS3gg3vCf1yH3PJHi6Eyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "678XV3HWbpgRbckdn2GYNWQnDEKXCZ8KrzeY7g5AVDzix7NeFU19QiCUr65VoeTFZbHXj1piuPHXYpnvoYG29HRx",
  "key1": "2mopzMr7PM6zpyPmfDwCFb5syB81iEki6U1RqDRfEeAtEfUGSEsKPwQbkMz7uhC1qLMpz9xGV97SrEbfiwk9mp9b",
  "key2": "2Jmo3akejs1dyVRNNx2dqzti2mukUvZwgnsrZWyZbuGqTN9UBr7BTH6gNmvDVtpcpaTvK38Tf9n1NSjnJmEsJLu4",
  "key3": "2T6HNuhRwkM5bneKNPa6GNv51jnKmX3Tugw7bXbn4sMFUcQDk4F682Pzov9UpgFBKqJEprxYUYDSVkED8rpQhWWC",
  "key4": "2mwaqKFezX12Cs7ZgsvdLK3LVU6p72cAE1FLsxJxBWopgF8iVMYkyf56FbmtkJvzS3VKVN9ogBvrSUVJaN2mq62B",
  "key5": "2xfUwuhgg5BvnrHi6mRmBPWFaK8yLHD37KX5mLSvvi13V9LSiysAqBkn99oP9RPfK92Pkuw72Adu9KrmTYDzhcWu",
  "key6": "4Ge4DoTngEA7hna9UBnUE6t2G6FUc7py9grBLjThaEFBKkGiFCxpNpDxBTpkudNfqd7TTLHL1qW84CEoe7Bd8jPk",
  "key7": "4DUiFvW9zmDaKooPE7EukK5Brfh82TyNmP6X1xpRq7gRjWyQw7x3XAomqtxJjSfsjAf2FDJQhS5bge7XjSs3YSKf",
  "key8": "FLcrL5LhVsVC2t3qqnhvgzq9bKvGoq1Md8uPW5WrbahZjTymtZ4ro3QYuzj7eY1BqnnkN3SyBryDv4Sd4GNFdve",
  "key9": "5rJwDnyquuUAbNGtuDzA4m2qdxGZPtYgT8o3JgngSwbN2MT2UqKTJxf87rS9NF34gDy2hyY1nFSjBws4zRjSefmh",
  "key10": "5cLa4f8qUi5Zi2a1mggJsSDbYPR5v5vfPT38oc6h3N2ewQUarSgMoZnLS8g6KjAPCPqbxRTiJDm26bNiPHPVKnog",
  "key11": "BC5kPFdGmmRYND4dT2rmxBv4EeEPRR8hSxFoCghk21rDqb6YwEpvJZsDQ6apiqDpF28jdkjhFknsVDb46ggNNUx",
  "key12": "3K5TAmkpMEpMxfz3RdE6f7VBimJWrLCHwmKHPvDE3ZziwV1RrveANjSAdzzd4Px5gjzzbj58hTTx93FnkcjFXQHn",
  "key13": "48jxrRqbSqVWxjY5CjSB9ZCURTiqvFYaQzWq6mYGXp2hdcyr1M4AFJLoDTKLEmojp9xXwQbR9ek2Zzio3sx1PKSR",
  "key14": "3KBXDNGWY9q3iqWSG1FjFjsinZ1SLPPiuPmR8Lksso1GxcPduU2LStqJn788dq2x5Y5gsPrEjmf6seSyL2EuN8dj",
  "key15": "4nZ2Cn5FrbU2iEykoi6qDXVo1jKp47XyfK9SrhCRUpaoeRVxQw2vVPTpc4bevHzkybxpTY5F1sNJxmRYmDeQPh77",
  "key16": "3et5qsxTgFhFfhfdqmqSfUKDqz7yNw3Fre8MmgF2dhvsAwDC9YH67RDqv7AfNBoCCZ3cPrLAkxNK887pTMmytMLS",
  "key17": "2nCbnJhTPYoc3rtenc1CptYdcK9ZbpawhTT718JHWWrZTZBvyqipxPA83hW4QekQoDP815auEAdMUrFJSZ9f8K8e",
  "key18": "4FPwGYBbT4V4d9kj6Q7jSt2Y1Qj9Ad8LgsJsAdeVCuc9jBcABsgW6EJtxvqfwBGodh4McFp66DBwV5bqCCVN9gwz",
  "key19": "3ecTJVJQHihPRFBJaMgHVMrZo4eZieBa59t5yGwijFEwPiJRiHdkjGoBcbCPw1GwD6DUFqumnVbeThcRwgrhiYgj",
  "key20": "4SPyqtbiZ552U99TiEcmzxPMxKuBZA6rLE2pDUuGZoEv1eXFfzpToehKFiC8eug43PQGi1MLNcNwHzuTFHNJ2GZm",
  "key21": "2eGDz9ANTennLUYGpSysFp1d44EukPmpWAPFrrre9hrftnDdMipEjiiecaUTTdyq1y3cdv3iGTrKGx6eCme5Q33E",
  "key22": "2r6F5KJVeWkvV268a39HXwLykrdNDiFHTNYMmbWuJcH1GFtdnfkoCrL3xk8qrgG3uuhKjskRLE1tR1RzcmEobjah",
  "key23": "5Ewjx6CBopCyQYb5niM3ZFr8kxHpCc56YEwuEEvjTbCFbVBUnD6eA2gwpTdvCxGTLh3iDFNsxUBFXqo9oWqpdNCG",
  "key24": "4S4pj6KVqgTDDKqkoVdg54eNxf9Y5KD5K2xckf4apZC5FmpYBrczS3PgZCAbYL6RQ326cLMeFWCqWSTdWjazdE5q",
  "key25": "4PD2NFoVBycuPu4sjM5Kwin4gP24oQ2f81JysTn4NXP4Snk2gFrNKRXu5NhpfMrCXSEqsRqQEqjDpD8y4Gcuo8Xr",
  "key26": "5MiVw1CEw5Ww3483hULUzDrkb5WsKU7QdSb5t22pq4WLj28VKmwYyXAvd3GZTKmFuAtMxqNboz4LajGhhGc1H5qG",
  "key27": "5jHtMxXpdzWqRwVmG1SLEoF5sBa7ms1ULotfGQar4HHtsH3c17xH34xCVwnDopX5rZejmCv7MAeF85nHFdEcwkV3",
  "key28": "4rh6T2sDTv3RQUbpcUkkJcNwzMfBPiXhNtUqxvzddLWRGCxcWc9LZ3Eq3HSC2iiwoLJhsxk7mhbFZDM37f9PYMRL",
  "key29": "64nZR6dMxpKzAJDPNngBDHd8bknP1nXihvuEdvEU1PkXFx2uup4z1JLTeWVCvwccHyYqh6NtkadwDo9zg8EBz2pN",
  "key30": "573CDZXCQkUuBt4gg8KysSyU8goxbQNR1mZstRUuws8jLjavGzr4K9r2oBp9rLmK3K8pYXGBVawKmBZY7QXH6aWb",
  "key31": "cYQrEUvA51RQEMN8cRvHiNBpZ39BKBTFaS6Rg5r7DPtXoquhY8zd4zxnDLWtajvSKkryMGJr4TFwJHA558Dhv42",
  "key32": "5aLcpHY9MXzexQTPopxXGXydHC5KojY66JCWipqmdZ1WvyJYHMYmNzfdxhnXmXW2sq4v6CT8P1DCQNEnZsvfKBtA",
  "key33": "mV9CSnPb3aWwvUwnKzCHbDhjHbkhMD4JMws7iqzzeZsC1xz4VBeCa7jGbCoFH7GZLbTqxH9PeGw6Qv5LQhrE8LY",
  "key34": "3T6fDuZzuDH8eJ3uxExF3axXU8KdqX25rjgmKYNC4DNbPHNjs5T3BqqpxSDmkFzZd1e6YPvr8s8LJcQ9tTDumbm1",
  "key35": "5mu6Upk73FcTStcsDQG1xzbskXwvRQZKErYYGb3G1vnCFFbqfWU1krpPMMczXxVB4H8VYJ8fWdFVfb1zmmVE8UuF",
  "key36": "4pGFGigJMotc3UUkRG1pb3oaFeFMjgdffxbUFBdPNxFS1EQ2LSLyxc1rQmKaR4qwtA45DuAjsZrjeVnU1NqBNi4y",
  "key37": "5A2rffedHi76G7GRWJahodJyrVG1S6zsLYa1FMESd4C4CJaGW2XTB7uYFRtyaQ2mjEpJ9Gnw5cdZ9tnsKX7ocMqR",
  "key38": "4Jg29n8yTWGFtHuyf7G98gZ3Ea8hD4J94jW8oCvUoAPtA5gqTyAsNbEFLZDQam52zknpNSvuWb3ui7dskvBQRXgp",
  "key39": "3beEmzNXznDhf1bEc8UcoWxNTuKsARLCtN3hexXa5WjYZaP2UBveSWYiYfqHRMVLvCqTQe642t2MH9cSh5s3fzY3",
  "key40": "5HjJCNKrQLCFigm2okqjpk7rJcZAtuLPhzypiJvx1RJ64q8f2W8FUbNeajgCTkwKethwuai2kGhGAErkNnTHRti",
  "key41": "2NX6k2YPen5Xvc7nYwNfwRmmbPiFACdA4zE1EFV8n4PLRefheSLxgPpyruKbp4frV9X3b5RfGKeVsiip32UB7HRS",
  "key42": "3XcsMh67n9owGpoaJaJohA3WiP5WgQXtRmJqPEBpLCH5gx6V9rYy4HXN8G8XQQyRMQi7xdficc8nowWR5caM2HQ9",
  "key43": "2VH6CJZrkYjd6fDAE4cHoLEdf5WxzKrGMPrhg5XwmbGcf9y1sptHVzkoFqpZgZ86TvNazknBhAfmM5zQcc4uRdcj",
  "key44": "2JA6oLeVHXZHGWp49LbbHYNm6opQ2xfcE2HTiNW6pipbz8i49W1LnTkLfnoZuBRpKYWnmjLdRhtK6po5UPTc3EDe"
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
