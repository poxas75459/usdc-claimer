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
    "5hsy9vRoVm2YT3bJGVdVY7uBrAkyNAFzWRcNRJ6hGEWCvikmrKsot93nHGY23189WWXJ7zwSS5VGMJsKeEZy4FAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tAmjqmD3GGXn7vuuoJnqwVN7N5oewGsmtyEN1o595xFZatYft9hNWjjK5QgDbFTFmh12D8PaaM2Mej3sxFknomY",
  "key1": "3W4xX3J9apQtfaW5pMrfQbspytME7ZJwFCNv8LU1uTP4cCAeJ4VYevRPrjf48CPeWmAC1hdpvLRyDNS5XmCXguEv",
  "key2": "4Q8tTZ7ijrpSjnKxXtBSodtRZ3PSEZcMuo9bVrY6RWP4hrwihPmUxEZ1gRmXZCn4PTJQR7TjfWoMrtwKspKvi1UE",
  "key3": "4fWfjbAuRaq55CPd42JEBEUn9Gqcm7wmTRyJBnK1htMGwV6ePwUR4AgXU5EinbjSmUPtBYuXWtycDJ4gv1aZEPoU",
  "key4": "4D8ESrMEpFsqP64jmjHULcGAY2nE4kawBsuv6MHuLGXvQRdUU1LzS3D9ftoqSBDrMb2k9yxDawmamp92UgtxcKSJ",
  "key5": "cMv7mTULkLZtY5kxzJXmcGSQm2j2haSsQUhLUMCnBYNLuGCUT7bnKuTmMgqcwt8V4Jokki2zzpzbAXwLuSaKHfA",
  "key6": "4P9NHPGEgkKYFfjjQGG5rKF25VW4aTnDdHZcKpupGZyHUJgY4SxQgkKSW9n3DCTH1N6jiX5TCRBKgU79cjPVMk8y",
  "key7": "4FGqu5KVCuKVh28eiTHvSHVnGD14Di84bn9exE8xDo3eQkQiLTsAHCs1yqJbdJ74LcKssEHyyuPLwz5SvLcmvWyF",
  "key8": "R1HwnnojH19u5CvBb5jzNe94LwK79V7YmdF2zMamtcMd5QueV3a85HqppW7sjq6AD9HJcUxMH7aEMK3F3J6PyCm",
  "key9": "3yRGApf7WvEkffodds8N44gysJNqaehaMoVFsjbbXB8kxMTHW1rbL9ofhmRsBFnFkGjejsyqMLw4qJPUHQvmnGZK",
  "key10": "3NqrM9NcqQab5ZSyhGHZ8TAnrBLQNQ21nGMCp2yxHHjxP4mfn5rNap47R6KLTMrfXBNchjsruERUMNuWt1SC3DaT",
  "key11": "5VtmtMeG3syaC4YGVFkd6qdLiAeADLihY3rzvFRRNzPr293mWEbnuMfPBqL8YyaQcF9uqG8W29PoguVSiee3KcX6",
  "key12": "34Dn442KuRUdKcm8ZuBn24K1Zi4iARacwTDmLwfuKzoyrWj7JonAVE3qPb7Zkmk3kevnCbBarvJ5MLJEuwX11MeA",
  "key13": "2dEqiVE8bLVphjxvv512yc8bkacDA1WQZF7RqLhcmSzUgkoR9YWUDE4C5EzSyTUSFp1Jy8mZd4p1M3Zq18oau4Ex",
  "key14": "258w9pDAbYCvEgqiXh3fGdreCTCEDx2sTYAFa7wo5oy32NficbbpEtxtCeMWwPGQMYC72h6Mg59CQKs4Q2SesYJL",
  "key15": "36Qtsb4TFsmomZkdzvEtHp63RbGqYNsic4DMkLXYNLdBL4295MdpHweFoHApZEup2EMy9ouBHkMyW5vh3Rmqpywk",
  "key16": "WRHoQFTjugkkiUWu5ZHAhtWKvjNDhpKx87kCBmfkx92XL6vVsEpjPS95xbXypAeL1AJAPwAwYVuCEtqM6y3Njk9",
  "key17": "2mo6PSBzN69c9cBBDmSiGovi1NPNNmqGewYmitEKVvV7mGu2KphSshkbD5uzyXkdrVXhuWyEmsWyU6svnsX2ewTb",
  "key18": "66EZo9KDmUEWwgsPpYPxThEXjM7Kt1NyAb1j4mkB8KGqxETR8sUBhJh3grj7gmRD6y9RNJc1WwBYMBu87MpMsjbU",
  "key19": "5TZWP65YjtLacN9kdrqXgAivX9sVUZHceMJNjimX8P99Rnsthq5gG6zktniz6U4Xgrg6JAa2N3tAZw6sNA3kncWo",
  "key20": "2ZSwgzEh51QpyXBhJhAdHvoKe6Vd93UKjQGN3phkfVHUiXxdcZ72KiujjH6TidtW2yV1RF73eqa189sBcEtyWQSo",
  "key21": "2etScH3d8xvrLS5g9ykcLNmzQifHsSwupqgbAVnkAbiYUsDuxV9ahk2rMxw7uPJ2Czjt4V8iSuzkBAFAn5Z52MVh",
  "key22": "2Zy3GqgKQzKGTw3ihyxVjbVLdhhDvS41yhm2ja3yYfsNhZHgp69NCXLihMqydxz5QRWSxmapg7qVyvA1q4s6tWUC",
  "key23": "PSv3WauoQnEzWtPwdrenVvTDCHCqcvhsPCqHx26TbLoQFGp4hNYyUWPrKcvCP1uucawooo21YA5Wis7nx46pXt7",
  "key24": "2kTXmGRx6vp28ic9K4FSB727NMSQfoD8aEyGigG66jJWPraR8WmRxnv8H8D4PtaATa4anXARqxPRQCu13WMxonzR",
  "key25": "5ez5Rcg2rUWbHKjQt9R5YGmXzj64Pu9zCDJLvh7bLNMaY5etwqLzCne2YCKjMH87PS9syG8VmTaDTeQNWJyy6hrU",
  "key26": "W1aPqDkbvYcA5tcKVBMdwZpcGtoyGKG28xBFCaKteV3VHQVv9imeW4jkk5d18CGLZa43FtBD6g43ipprM4LFT9S",
  "key27": "3w4tuzDLriqn1nKrS4GQH3QeTMzrMtCD6A5gGEcUbMWXGMizjeqQRnDqgjUCY5uqBpRSbTAmj2XxdBKnXNqU4VLw",
  "key28": "3pCgTXq9scLnRTArCCNW1Mw8vcqbJg5G736HTfUkT7CJBGYebZs5ronAfTyeo4Re2WJotiDSitGHzoXSHfUFeqwj",
  "key29": "24YZTSBCZG9Q9NJxA2bfFxBAnmiEfCRQbjmakKYQo98dR41ZKEzknVySKBJ4SYDYE4Z2auBFqB1ezbQg15ignd5W",
  "key30": "2L8rbWzxXg5ssShas2YStnuntqjmCyg3anDJv1X9yWq9osiMBygVD9fAZDzmjvYhLcqzjLxNrccBtk3oq447FTV",
  "key31": "5kvcU8YUEiWqTVx6GSgZk6C3KhWAu3Cdtkd4PovZsCzUHakub6VSwQKkht3uxwbcRsATtqcDEqjh1W7XN2dCMi7o",
  "key32": "3zBASCFbvfkJLt1Lo3G3eXECgNypcp8RJ5yFA5GAtf3wcT7MnwiiGLQwB3rMTX6FLFQToJiSYwAwtSsy9bgHHEzX",
  "key33": "3NLCymkM5R81Gz92WSsrWeXtWEhAXRkzfG7PzNyUGYo7UtpGbcJRNm7P72jNPguCH6SdrZMpZNx5fh2n4hgVvGHs",
  "key34": "b8BA2VbrMR2fq2S6zvWdHEZKumkLg1k8BzSqHEmcM1BvF3f47ryPJnXKfiMUHZxWFMJnWSRctqhCRXwe4GQg1fF",
  "key35": "4JwHa1XN1UUV9S5tk9Pc8JYfMuCrw3unie3X6BmqWYBucHtBmNWmHu1dPNJrth1PCiM4wCNVpqdywtA71kofCYBS",
  "key36": "4U3W4cYN5hQaCT5vy7dXoKBUpsWFCfXdrFsVjQVzFKR7x99SFAv9EoLg72zLtugFC6ykFvHAXVDsSj6JiUC2LF6D",
  "key37": "4y88mhX2exFa7W9WqacwrbtrBSP3bXifG92R1WfdnxtXN6jm2Ae6ULxSTzspGnKizbSTP8huzw6HcJCrPNDBwusJ",
  "key38": "2NihskimqNT83XaWKAZThSK4raD7Wu9vQZrQcAmvXqG1NkGWYzeNoqy1noqwRsZufufGzsCP6eTYDWMfh37XuEfR",
  "key39": "2RbNowJkYFFV5yv7FV4rQRjenprbExeGuPiWMcqi6EQcajCr2YeTMvQaRBS5ei4Az4f82bwjECeTWPrD9CRGUZhN",
  "key40": "5mn2opiUpog5P2SCk9cgyf6ZsFL1Ymt5TwUYkiQ9Zv1Ad7qS9GgDP4CpB3VophahCEkxdEDZ9ho5DTbYAt9X1Dh",
  "key41": "5KF6UJMXkwLyfBvXiGuWLVaoSis7rxQRp7umfye4uwu3CTnenSwf3Fw3RUn4tnJZkMwJ2FaHEum74D1KDRVMEd9o",
  "key42": "2uZBPVLehsgRqhLUfjo7tGNx9MZrdrCeWJvWYVv4ujWKCwNhwzVPmfATPHGULZUEasqNgT8CbUksb9ZeWstQw4LU",
  "key43": "3Nuz6nW88QuewWiDTRuKhPEh28Zj4XnmSAQpimtpqbxCd3qd7J8WzUuF4y6FkG9usCYkRjQvZS5MXH5qK7GCfQRk"
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
