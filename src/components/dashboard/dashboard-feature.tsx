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
    "5okRdm5uu1oHRNug3nU2iu65BY7zSuDGtmbCRFjWtXXEPxmZyqfMgvVScWEtNp4bHEL54xGF1Y5J1Wqo6t755F42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kFXMuqxWUShtLRPVMb4txGfKHsMrUmLoRCCe4Sws4TjiVX1ra1jgzULhTDEZk4cYQpiS2CJpnAok8fLLkxvhEw7",
  "key1": "2LmBAAETidM5mWpiNpqZ1vfzLz4s37evBQFFZsrbcjyx99YKpHoW6vpdo8hSNLhpQzgTjd6j4DcfswgQiDWPMqZm",
  "key2": "3B4Y8x8APdsqEHXHyhpjufVPD849Xa8Z4o1piM4Mm3rvuyy12tdEUj193j9hsiPZk1cANVrTKAtqWkfmHr15BdKZ",
  "key3": "2saTtv9fWQ1JU7mMVscftrfqVoKjVMAbwJAbFEs7dFH3mLKhax4e7G33C8UWbT7PLd78xGeoredtqMMMxZkBkmxr",
  "key4": "2VxbEZS8XHVyMVX6gogFx5tswf4DhBn1qJdeEzGN2X3RK4kkViJirMht2iRnKrnwUPWrjy411iU6y3JLoEqZzbs1",
  "key5": "meJc9cNA5fDRsFH9zNT6snEorvAoNv3yGM2kftnopb97JpEEoA8qUunAJtQghKpJED6ivmFkKSEoUkZMVU2Gpfa",
  "key6": "8fEsqi36PQzjgv1X9oeGorbU6KTiL1YEbfGZJACS1nshunvztLdGDW88pz1MPasBgerLyZPf31JNJTq8gL6cFWJ",
  "key7": "3gHWXRxtUrNyTQHJ7amiSTm3hFNziTLLoVYgMhApsT781AiHFJozsewCVXSBvXtUJnhNbeciK5iJ2peNZQc6FHdZ",
  "key8": "ZY4way7mpBJaGcoZdTnawCpo1Zskk3fu42ZyQjNnWoYCkC3WMELKLPYxemZerzpWQfpfHE571giuD2iudbhStmK",
  "key9": "3CWcvyNLsrS5X9RUmaAZmmKvf5nnNaqDtkfRHx4nVkZyAtpDjM4uMVWwtaKZtrrwjpvdaEuWE9YP3WxtUXCmZmp7",
  "key10": "439pjiYK8T5MynSHMZPHPoQKvg8jR6454mNHnniPnGVpegJcLD2nRh9Xwr4dYfuD5xgqB5Fr5YroPRwzsQtWYom6",
  "key11": "3Pm9FR9oeg6Zhg9qN3GR6WxP6dYSXh7bi8Dvywf8G38GJFc79Qz24Y312b2F7nbk1otU6AuynCKJrPaafA8bGVvU",
  "key12": "3ou9FimLPR1LWgVD1kgFRTysqqsvycpYhfR65jQr1JhqKyqTEG71KrfWiDiEta9GV8FVmWa2TBVnpcLUKyhQnmUh",
  "key13": "3saQs8stYYCX8uZWqWDbF6rZdxiPNdfx5LQYn8PdoQnwCXoLspCpj6ipfGub7Q6CeDaPj7CQZp29qqc7w1KnDKqy",
  "key14": "2fMnEzdQVh8tSrHrYYx7gQDRLsHkUvq8T2bS1eB9i6goy18mhVhBmFMPguu4JGC3AYLXFa1zXrrtXC1T47T2aaCZ",
  "key15": "3sWLM9xt489TVftXmMB45X7NZTYxt3zMkjmsxpMCbm83PsvTdvXaqEuPhdxrNPGE4DhThXRoBYHpoRPhueMZ3EVf",
  "key16": "5iFjrwRQsbytReFEc1nWkjDRSFBUujvbiQPaJNwG5wXnU227dZh1HSxTus63S2mZAcKHGhpzPnt5AgXePwaye6Dk",
  "key17": "2yPd3fVdmd2frchZ9A4ZPuwgnFyr9KWYuqjrMQCzE9nWCe2urFdd6tx4zVFjkL7fhRe2sdXRTif5Ju9kRZ2obQ7m",
  "key18": "2kPFjeVFdRUVY8anS7bgYe4s4zXd9QDsBA8ZJEvX3vEbwraThLRUrrHAyGQ9ktyH16HAtTkSYqkA6puV58Bc5wqP",
  "key19": "qdvzH7r6kvxbtVigVqWVfdAZmBphfZi2E2ejnfiYMKcFPF3NVgsGWVXmL8EvAyRjrUhsoPutzbD5kA7ujQTNJYn",
  "key20": "uhpqDRdcKHAbCixJArqsBDozyKXNCwjyPZU9nH5MV6jSji34n3XyqNZ2nKBHkrLQc6QwwEE6wK2deLvdYtARP6S",
  "key21": "3SKTszjQ4MYYqc5RWfReo2EAPxhNCBnwJ1UCHG1hdDBqCzxTDRiguWZSafLcEoZr5xpwHkFBSxByehK3Kz3HLSFX",
  "key22": "FYhcwMVSPoV2cBBQNbVGDnaXhRd5SZVoaRYyNAqEVVPyZjTUgxwfYoADXfQUCwvV28oALYy55hKTMdYuvUtm4aR",
  "key23": "4BHcHuwW3xNxdfQUnH2UWKsmHibN1YE6XEf3PShQT4hBxRTRf8mycPJCoFfVc9iDkTiAkyXo664p8YPSu4EeG9Gj",
  "key24": "3k3jqbdv5xkCKj2SEBDcC2h53XKHgbZmgYNFhrsqi4aUE2218HttBeoRLyhsWKu15qawiM8ZdsPYmDVya4pp7sFh",
  "key25": "5utfKeGAD3cZqMMGtsmSHWLcYHyL5wGxxAe2SJec3AUACBCMVWXL6Ddy82mtKKuqmQPPonz3JcYHS3SCNLjPysTn",
  "key26": "aPSxQ3M4jewbCeTCwMy1UjK2EaQrsjKGjgAFVTgHsD61Em13hk9EWVg33wHw2nBkKyQXjinw2AYERwrxhA2kTFq",
  "key27": "3whxWHKifBNUka1XuXzdbF9dTvxMyzw2KLFAvWLEaWsemCMCcXc82wqKv1XN72ZQCCtNxzuWiVRDfFcPS2dJMzvF",
  "key28": "2QZTvDPQ94eahqGP6zKQyBm3uXGVYQfpx7FoEATyKgEtWBraRoDhbYaMnk5Kba1yywufQkwEQuBezxJH7evQtXa",
  "key29": "4LNqMgrh3f3dAAXqWXPDNo8mZTaqUfUiCyei2y9FzuWmnqfZ2f5ovXXhUZHweRFCLQMHEzSZqtgkzjj2NWMNwHWy",
  "key30": "5FfLeAfmFPHarKNG3KJXbsqrCHRVp9uw2X4BsvvKccQ6Zpv1bcfYnxGKqUbYuJbtAxT7TLYPUfXn4adbRjfbevKq",
  "key31": "2jP3y19CiQMrXoDoZgpbZUFPERHM5Ur3gy2qqsF5n8GDL6EpiGmxihb9KSGy65JgwYQEQNJTw7X13vQfMFbuUD2F",
  "key32": "4fRzMneadrbquqzVJn2ooDTRUqvNPbVeZwzw2Z9TYYptHUV7d9P9jRnG1rcG4WTAxSi8kr3NtpeXULMS7yyuBdSh",
  "key33": "ZmjNGNjNrfAWqyYEh93rDJaxiTc1zCK6WiphsD2dwcFUNgxHABisLUa6kws4W7FUChzZeYs29y6WeXQhgqkBQDL",
  "key34": "5MqqYuf9M2jqV4Rcam2aACv6xiXk293FQ7tHaviaynASPgaMjdsfBv9yoypK26KW16aDVwGETxepPs4DswtrpVDY",
  "key35": "4mYqkNxdMuvBVNniWfZXgK1JfDuUQHwSKevEtK6B1uznsmbZ76NyYZ8YyA9YD1Lv6A8RUY6maKRtPr526pmnTCDZ",
  "key36": "5sfH9w1EXm3AXHDY8oMYJG5eKWYpmc7W4fEmbpbGibJ8sHpAj6CvZUJ1XaPpLyGWkp8WLLCG5PvzdXbKvvGH5SUY",
  "key37": "tZ3WxQfrwykg9stbQJ6n3EsSTiV8HeJfzFPmt5vxXa7xCdW7Wn6ED2etPLAXidNPjuWjEDE1up6W4JSHuVtrnKQ",
  "key38": "2QXj5JDA8Soa9rJFgjGiStJMf72RbTDDyxcGDRmhUgKffWVyjfVAW67EVBWQw93CLuLD3jcNFz8F2SFJe37zmQ9h",
  "key39": "ic2Bt1SvuAdbHhKyV7fdwgdNNzb9p1eGafYjUs5sxLjqTgAgmahZMwgYWpdnjJYfTxmRRM8tAcWa7EXRydHUsYj",
  "key40": "5mDPwYwvedj5t3ugJwFXqpQQZDiVH2YrUZMKfnVhGFg1sqwkbdorirpy6ZfU4CBwQ2sCk4nGe7VurKVbzWSEuYV3",
  "key41": "2Mt5tSz1ZHp5t2L3eSrTG2EorMFwvcBhKCyvXBL6ARBwVbGpgs7FbZcZC2XFYpp8ezGrojjQwcdEpLHgLsiGnfpx",
  "key42": "5HJFq2Nx61rEmR6wUi37NTMTgZqLD2rCk2dTg4aWkB6JSZVtLWhSLKf9xpYFXcXz2Tj5u5DVu92yHKPfP4TGpaou",
  "key43": "5aEtu3qxMquMYYMkAe9fRoB9Uwq5fuW4h7VK9dKgb2fw4znox84tC6UmruYUCGAc3h7eUvXqq5g5GCt8d49E5mfF",
  "key44": "4CRA3ZtLctWc4YH23zspb87oMDCqMSKe31pnRJJtoww8aSFtCUDLYsLnQC9C8ymhnqDgr8xj1kuWLLRZQh4TSpNZ",
  "key45": "2JG3pWVE1U7DT8tT5NYwimxvMHCgBVBrXwwKZh7CXsBSs61DxZXVmq8CnM7TVDWA9EKfkxveo8kc7hgtYdzZPohk",
  "key46": "3Kuds9XKMdNDgaCaTcfbeLTisskvV3u9c7wNJL5QebDzTQkwpvZA9YgfMtVyodCzG5ZQXgYZm4Z2xr2ShYE89a56",
  "key47": "63meMaomYacxKks2bZiG6Ls15Z6vveHcAocpfA4j21shm9yKgngpbmmhCitvN28U7351XWEXervo8MZAtkjRoV1H"
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
