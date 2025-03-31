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
    "YToG1EPVP4EztZrCSM6syTdv4zeMq5yJV7sUeqnNA6TFZzEciPkMvx1e6dXwhP3SaSxtaYt4babqckxe6isBjDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24KUXzDzFnAwa1t75qdBW6d4VQWCrGPbWs1um2wDFdxQex3WaGoowtW7ZrptRczdCX1CCUTTTqeSumwAUq93nMAN",
  "key1": "5bfq336SqHpfXVAs8GTQs1vbuhT6NfXHvBpRrDxFvK5YwB36CyRvPoTr3cfkcSnrKuhP1ZYBYD2YgnGLDoetZ3Gs",
  "key2": "4jNvkvGhnLaXA7xNKJffNNFWjpa8Bo9xtoDyJSrt6hu9dGstBHttTmzeoSYRVxDiVwrhgrB6GuhH8otvwhZ4vdTm",
  "key3": "4MChXM5dAZQPkpNd32Qsuze8vLMbcKzPAcXt5t8kF1U934AbkAa9ViT1qsV2miGFWQQeSB4yYfWsrrQxwyT7wr64",
  "key4": "5NuGSGYntFiAzGVxRpEkKXcNeEYFekGAw2k9uF9wjMr7eVxbKtubJNpcKQgCivBsxmQeEY8cvQhGkosZaDgcQqRY",
  "key5": "53efh347d1d5HuV4ox8qvwGm2pCUqdgPCACNmXg4V2wMrJF8ovb6ZN73GoUPQj8qRVYFhbH6PnRCEzPCY9S8TyUA",
  "key6": "5YCAGzSZwoLJRnFkWSkQ73DqjX1tTiAq3883hs3F2w69i1tJkSScVrZKSLxNnqMSeUW3VrFz1rASzx18RdBBKvzX",
  "key7": "2PB9ZhehgwyQNGP6H8TxRCk53vwFiiJkA75et9u2Xn3GiFjCeobfei1sHsD9eXnPSDSpGvgAo2zp6c8kFNuCnqsW",
  "key8": "4YBhB8gSmDHJMwbzzJDFaw2zaeTBJBMPz5q9HgYJZwpok7YA9Y59riinS4dSFKmiyqd14nj6HqcanrWbKNtkcx19",
  "key9": "5rR3hk1Sg4GJxbFgiarXFEJfCUGHPiZKXvmiRjfgkn49hYREqvyBcYDAJ6uE5nUwdDXnjgVubhcTxLWuAws2gXrc",
  "key10": "2cbmfQZHkFzmuRJQLU4LmNpYkP6vQYBy7mwPaRJdyFmETJBYgf2JiCaYgcKuXjyC3aKsWdmUwwnUJVk2evKTRmd7",
  "key11": "ZkVzWwhCdUfRWN5x97H5viuFx3WmDRV5NCZMyU3PwzquiLiquZJ5xr7uDtFEkKCRwkdf6HqJHgYwmZLvvfdod16",
  "key12": "3onWVFLb1z2UsWVACuVakzqtyiGTPFWMGKEncq1nzpP17TdpRY2Yk56xHXsn69JQnXtQFbjaXBKzT7TJ6bnLKXYE",
  "key13": "Ud9Rc24Kod1Yz7Ac7dLfqCsYJw1ABTK4U36rwnVRcifzJpkcPaNzxGrJjMiVwyw9GDDXxgQu71kXhSJCpMxzh4Z",
  "key14": "zAuV87PDR89b88Kyy6MmK5QesK9Gc3X3JYYe3tRXifcSuK7fKjtMnpADukU3PX2kuUt8cBbcPkgLsbyG5RKYDYX",
  "key15": "4ifviVMF5JxyVqLcwb5ZYLu7tGWfDJhk5fAGhoab4yv6iisoyyuRoLmneZGy4VGhMAfCWdcSpWwfnhmqGWckZ2Je",
  "key16": "62rLzbxPEyqPVwmfbjYNMLpnfeRcXKUKQnGmJxHALfpi2q6ZKQ54sNzHN4ExJF1F65uDF7RDt2A4NnzNx4nEjfRg",
  "key17": "66DsDY1mnWSdcot15zgNdPJyB7gtGggrsHh9fAiHbhEAEbrB3KooMxv87yAVbdrbAC25JJg3Dh8zhfWcHBAcbVhi",
  "key18": "489XKLiLNs4UUQawmHW92erAzWRvsTWSVnLoHUXiXDfSNqWKSnSVj9Smrmm9uNYPVoCBqyREXRQnHv15aup4J4p5",
  "key19": "4hgtUMWiwRh8VNEvcAmme7Z718BQaNsTTUwULThwDXbeoi4V56CgDEUabTE8iEDx6BhX9U37sczNk9h6xw58hrtN",
  "key20": "43tEhR1Btn7pk4n8nvtS9Luw9CRcDecScJCvFJ56dJoaFPuAEaCTD8MaqYiXGVMPmykDDg2tVe8z6u1wqj7fJmC9",
  "key21": "3XKA52FVAMzxTPKZKh8GiBroqxdJXqDftAGau8nooPwx59PBkvc9VZaCEUwEDmnhGnVtZb8ZAEJygFGXxKU3mL4N",
  "key22": "5iH4hkZrAexif8VAwcpBULDQVCY44FFxWd9uMqAcBbeBg26tKgj99FDq7LQsuKhnLKTCYEUrvMzqeN2ZXDt6xzV8",
  "key23": "5ncS8yy8pAkDtsvVqxKon8DtZXYsfRgjyLvf65C7oHBpQsgwdet62MZCCXs3qN8eTrSCytgNrg7Qo17F9GYaspXG",
  "key24": "5NMDoHafVqCHPvVej85BZNM5hWQ5n3rnPe59UmdE8xLodkNeZqEEmCkBF9dm9zRNDKjKZgqeUSA3t1PpsvqG9NFc",
  "key25": "56qZYAycyS6gpmxLXeiTdFLP5WZoSEFpVSEB3ppieLRgDqA9XLym1p7G8GBCMTKpKJRV4k4jjabSkMuaCnLwTtfe",
  "key26": "642pRDcMiWjQAwRZWZMvpH7dJaKAKN8mDGmrWQzS71AGsoRgdSjpVo1AsmaK2UfSSBnhQ42EDgNHhfvHyh4UGZ5j",
  "key27": "3YQKVdWCBVNKdKo71BPW1fZwcmVKLxvmhNkarAMqnSMKcEcV15GCtFpu31wwwsaujuubW8vArcEyioN9SVgHTE6X",
  "key28": "5daFrijxnb3eLXYBW3prH3TuDwiPdksEAZNbA3QPiD3vPbWUSBrV7jF1Wr8VLGwj2VRg366EaenzLgNiYpmjgMag",
  "key29": "55z5svdwQScu19DmNAqDuXvfuz28txc5jtEafV4kZhMUYwNrQ1w87w1Qc19Z5YuFY9Ttgp1t6MfdTmQVnC6oJNi5",
  "key30": "uAPy9RszzuTDuq3z23DJbky2c5ufLsqAVSVvQziy39UKwznzN1boFMLBhVijVpZ6MPqQGhja3Dy9FXQ5FSpdgwY",
  "key31": "3Uc3C9bAntpKuuzLL1uLdHWC7LEnhMgFCdgwGFgzfZvQ338zp9BbiZyKqbiMwBe5fnFdahYBzjqpVCADB9SQoxFU",
  "key32": "BFA9oJD9WWmqeKtj6kGaaEe1RjJxXYVrxeqAZX4Rcv85B1rFvMUfaCwieYKU5HetC1wUvKfBjpT9UrM8xG6Mc3n",
  "key33": "3EcqTiBD6AhdWeV2tXdTcRhScb8m5iE46zy3hFJyYeGuEkqQbQGSQHj7tumrBwe6JTQzwXNN4MhqCxMJ1s4aTYBM",
  "key34": "5vGcMgxbwAnb3FVy6cDYnqR69vZ8x5mqXrX9fvxCTZRmdL4jdByAHb75q94ymcRXDoELsLVec4fg61urgnNFuVZz",
  "key35": "5965P7cWTxrDQe9SC7YAngy5nrs7iptUiDuW33G6R4pgTVD2m9d9V2fN4HANZHyu5bbPrbC2rKrhpZqP4m6Gwfku",
  "key36": "2gctc7RFSddbXNGknBAaBsK6GcnaTmmXWxo1JpTMS6p9fUjbsoLENZ9QkFiiCqQpGU4mhkSwEw62y9cNZ7nnAL5U",
  "key37": "2d64yfHDoPJ85cvJkptH4vcdjgnmzRRcaZToGFKM7RhsNevUbzn78iRtQhtGLdobR2GTjgc7X5yqYuWTowfCKdbG",
  "key38": "BaPFcafRj6JdUfJqBuNSAqfVvViW6aESXUfDAbhusDvJaVSb7pPDqyQiWQSgpDdqHXNDBSSbL5hex8pUmAvf4Lv",
  "key39": "4rj9MfFCRtP1PGVf3usphd35fg5jKXByQ7irkACmTX6deMMxh6U1GECoVsDAr3FzeykLeTdGdxkBmhNVXRSy9EHD",
  "key40": "61gVf6cLtxLXxTirzyVhbxyHm1sqZDLNLBXZJtwEXiXzfrhTtv8jz78jnqgp7LigLjD1zTAjo1YkympXDRNe1zJq",
  "key41": "4v7TvSdFaG5Xgqw9ZGzeEgnXHVt7qsofDsioNU1peQHwVWr3WtjKrp92omyLB1rRV4PyRA9V2Epe5kr5g68GYQ66",
  "key42": "5nczT6Ezt2gRN4oNVVv9i2CjwS24PypYdP9ze5U2xikutvEQ5EvZpwLkWG41K3gRrShUSTGpvqsBWnk1at6oGeSo",
  "key43": "nNt415JiimQw2YuhiTp8gZ2uggi6HfXCMfS4zpxbmTbwiHWK5jmrFAuenSDyiCpzWRjT71nATyM2osKo3LVrPpn",
  "key44": "4tC9E1ssTTq4NBh6ktqzTQYyrdEE5hQTeECM8D1Vo8sJyyKL7Cqp2Q7XG1MThL4ok9GFncZTznDeKdrQf9UDS7JG",
  "key45": "3uKP3FDz51wrBuKPsfPdarPfYNqMEyLtvoQn52rQQv1C73pXVj3wSzxAP5HRphLYTnG27s7wiJwgEF3x6fyXh8SF",
  "key46": "5X5hn55kQx929Hjq6PdQpMtshHPBgQWt1RexSeSoUd852Bd6vkKc4KmCGDkVxYNnihnvm4B69bRThnatoRY6s6od",
  "key47": "5oPz6XDeDmRibCKpcpG941hdj5yTDS7gEbxYTXtpzyZKTxbtriA9KwJN2Ns1meUPHUjigk7oi63RUPRU72KRXSdb",
  "key48": "5AjF7qV3DXFXmefaa6xjx1bAp1wKCVSReqBYBkjBWiFAndf5xdDXE6Dk7hUVkq91oNGomVdyHywpLg8fLuubzcDF",
  "key49": "2brU3w5SR31sRxjS5z2TYgjHbruKwgK5t8VrNNvW55ari8zA74J77KFu3evZMiBeVm3HEfRwK9iehcWj5ncPNZYp"
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
