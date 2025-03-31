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
    "5nSzXoGy7S23AVYiJY1iUNKpoYie5K5TWycUmzJnyt7XyJBHwBeTX1DNX5267uTZ4gdu3uySGKgq4HnZHqS4cQGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hzu1auMnrjx3Pgtwci6DRKn7ZJUzckD6omwQT7sHdVqHB5YHARBXktrX5VEEkdd1Gtmm7XZ87TKpDjjTbAfunFk",
  "key1": "217Stn9eq5GRYoyNTZokAGghCVwWgiWCpB5mcQ2bBQ86sAcsCkzKV5e4iBJsJb8sqerQ1qJCp8g9g7RgnvQY1FvL",
  "key2": "5v7BQZYSRKPPAECz2B4nLcQKtXBY6vTkqKuGpYfiU7XqMGPrPbB4udyabZRQJQJK6vZXvCBPmibHrqo4Tt3fMmrW",
  "key3": "vP1ez5EqrokfChHMEmQW28sMruyHSTcYwgqGVfqyexqFeon4qTa3Cpj9tJN9ApNSfmG8sxHFavk3FSsdvc7Pg8Q",
  "key4": "4vVkJt8zYys3abiadjPQBCW3t7jtSL9HbL4VnUN5ZhGGgtBhfZwKVh2kUcDsSe4cbh7PMNXzX9E9jmmqcjoZ93wT",
  "key5": "2RbyiNwCyqNi5mSUqH9P1yMwiZx654WkL8dWnXFk19r2gKyYW37H1WRciQLUVaYHKw36N6jyhk8j6CXr9Co9FPeD",
  "key6": "5bbvdeFtacxMRLBUbubRWysTrx5PC6ykt83TuZdAAKf2enQQTGRAXZJse1XUeg7KoH4iAKCugfP143e1iJdv4FEN",
  "key7": "2kpMuRkScKJSASy74xv6VW5qp4AGrRh5WRpwovK71KUgdceUmoQzLsskes2VQbBaPAmKVuaVBXM2GKutSRUV7DFC",
  "key8": "wGayQkvgofMc9TN6P8xLSzZJu2kHcnAZ2c7tfYYYCUFjhLK4hqLCtJBBZsFbByaNuKpNZYVgf9CQNkadQAeM2cv",
  "key9": "46mWGh9MS9zKL4z6YfbXq82H8LaQ1zLVLgoAQDJYXygs2TXfusy9NHRbm76XTSopjcYEYXKhKWfsUJKYHr7koW7T",
  "key10": "iyjzW8WrkMsAoC7zkjeWBGRcAhNXNXsQdxxsMzWucaPotgirgCYMMoQzH4Dan4rrP5vG3cRTc7UtC6yipYNk2L8",
  "key11": "3Hu3uxr11bDbjPLXiSo8i75gKVxpWrHpFDjvEqWHKegZWVxCrBL3JA9AjfE6skf43XjvtnP72DqT3Xu6k7jmYvJT",
  "key12": "5yNZTWbW76qA6TS92FayzwhJWuc18912RBtFk8j1tKCNrhAXM8ydTRg9P8EGxycNCgiKAbnMUyaKdpao9PG9ZBMe",
  "key13": "4NppuDAvxfuP5peuKimQTE9Jy4wC2L7ok3Lf4sku6yFiAHA9UAo39VxkFxkYbRCrPcejXWrbSR1UebLcNiRLaipY",
  "key14": "g97D8tVEKjLyb6r8ATKSMXKtPrjvVnKaMshTfXpHkfvNpv3dPFCYukMDRLjhdg9xj4VeXzzQWwxp2YVkrpwDqwK",
  "key15": "4g5bStpYipbFSU2U8oqgVYTW4VqipfKHSfJChpHRKR6v9J6obFZqoSUjMe67Mv8kuemnPSzE71BBEZZEauqa341E",
  "key16": "3ssnukv9YCuUbMwtKLErNd1KQti3XvRVJkAmz8ZowpTyNpc3K3cudP59U83SejupBcsUGi3V5zBVtpu1yKMrNB2J",
  "key17": "67PhGGqzpP2WEhHpiLSW2WooqLXtzmiGhWAFa6bJRoMf3hwsKyfi7FNRmtCWEKAFXNk1483zQ3ywP2b3uHt2pGx",
  "key18": "4QuiSZRHdWXxez8SGp5cPkx9dWPFu4RR3jtjmALkv527QzjqVr6qK3SSQH2Y59WvevjFqmLSm6BEysaBcLVXe1A2",
  "key19": "3ygs4G7JFPYQpQAQXW47BdhdaJbZarjVF8e3U7H6MLWxS7b3qrFnVso2aAzMxWswaaskHXCSssdbDs6zNCEXLXdC",
  "key20": "5zAFbmJ4G4CU8NgxT18mFkvSbxE7bvgDsQL3Vj54wionbaXj2yoeYKwjb34K5XVgf1KrTTy4kcmtCYHTRtQ4uNYN",
  "key21": "5bRZomeQ41csn1pk3hEhREEW17yJWkR5YP93qq1Bf4f4UKyxvMJX7E41vRPxS5iYbCoopJ37HmWqYWQJiB5LtTkC",
  "key22": "3zsTa1nBPCPfbSxcXN9HtcWEW2GHkBPzMSDxhdo9U8MGn7rcQGLt1p2GQEeMvZrwj3xgiQmEtHdb7hkXda2B4xEe",
  "key23": "4HGTVLuiZxvyTJdpeaj6hKpgcFrUR3HwECSFrtGATRXkB73gETfowg5cZGwpH4Ce8Qog7hfcS9vNwBEugTBFnJzy",
  "key24": "4WbXCtxqEhPtAydfe8ebpumqP1wFtLQbNBt28GjqYd11NpJVXHpfccCy4PZc7oFyqrXVv8hrSygJPJUiZmd7DxhW",
  "key25": "2SsUdHQV9GjXiwowbsTLQHkhbMhsQX1xyxXYsmrQQmx7u8qPkAfsUsaUsR2DhG2vCYWXwTVTpG3B8fsmgR9fPeAm",
  "key26": "3JDhhMbeLWSdpVKa2Z1ouzidC1ivPovdr6trmKKxKi7hQP7uk3wsASKyYbFd4dfHLTq3r7rzFDyRMFoijSc5fhkx",
  "key27": "3Gp4udYJKnfP52RApKLZRP2XKV3nNMRgtXGgYzh5Mf5QUrc1x9otTn6pTQkVA5SiQc33SMHnZhn53GGvLSWHVCx4",
  "key28": "7QcXZY3EGtXGWaFw8vHHEQf9pavD2F3XjfSrPAEy3TEMJWVSR89vT1uvSa8cn6WLec5UkisZJ4eRVqmjwWrgcCA",
  "key29": "5gqv8xaSZD1tBsvVuovRnptts4n6nmwp5AApVPb6KXihxG3CPJkF5AuFUr2V831MmRjYAWpSBogjfHUYkxrzhXdR",
  "key30": "4FVzT4t8J26mf6zfU9hiwwy4qwdRMdLV9nvNKpj7ydaGFmS1wfQrTjC8ECNDwdfFr6yGMkZF11YcUBDLw3vaKwAt",
  "key31": "52BBbLQ6dkPHN8EXp6A9PDmjvkuzBNcXtT7Sr5grKwq2w4BMCK7nzgsg6jgk8VffdsFEYgyb3SvDP9G57diAMosD",
  "key32": "Zz56WTVJzCGgCYs1TLBWvenWGVLvgmwjejGi3g1aFQMGFSHgb8GCQX3uxqLMrS7v1cnUJJhuAw3JfcZJymPpnZz",
  "key33": "3RTmMGqmDojVhy7dzFonw1LXdKroVdVrriy6Rg81E5b4tAzYxasVuZyBgQufYNvvaQ9ybk3Uqa5zCsTxZSbHyzZ6",
  "key34": "47NZ3As9fCPTJSVczi6ZFEreKDAMEvYPmjYJVuuw8MvCYSsKSkL3m1RVgmekVKsy9q11mG3riswKSoZ3uxPQj7sK",
  "key35": "39kseN4N9gFJLeaum3pUWKNbWErkKjUhWunvXoMWces78vzTB9GTCZEPiEWVMw22QoUUGhSjSRUtEf4nC2oXWeUp",
  "key36": "2zLmnTF9Xsx58TPBSkZi9fiUJKHAPZ8tExd7QJEzspq4ENMz6XCj1PNmkBdcLbbpEzNwtDQwP1RpVuVhCsg2vVjh",
  "key37": "654FrYoZcddK8J4wjK3bpvYLMW8vGwhj1JdZZkuzRM47fdEdCbyik3eDMtk7avop1PWcCygLHAhEFWrBjJL9zCE9",
  "key38": "4wj3ii9QgKAVigxCZy9QxSTXPEDSY3hwKy1Vt4h3QbuN9ozZFz7GMmFdAzfjXcZ4AK7aJx8EUJy1sjRs3s3ugKyN",
  "key39": "4upz9wHkvTNRUP99cUXu7fnbQXu87NMQnJ3qCKD9GVKv31J7Y97CShsMnFSgoPZj2LWwM2MFUCsZbTg22tUh38df",
  "key40": "3toR2BNRSTKuQiQfH8cqPNkuvjyLCozcgKdFwsCq3eMJTj5EBrbiv4YtRshYbhLQ6nENbQZ7tD1dDaUNvh7yeDs1",
  "key41": "5SFeJyEinz2vFK4Zeyvz3ccMYQso8Uw8SKZuR164PmTFDPAAFcSczETpZrPKCW3iBevvCg5hrC9x44UzxhLShgkz",
  "key42": "46UFiNvQtYHXw9bXJEDNAFQ7uxWheg1V7DfMShJBh4myPnb62UPtVDbWzxUuW9CKFxzXsXJz6PgXuvYNaKBapEry",
  "key43": "53rmfJCq3anoCaQiALzpxnQN4az86hokygEvFB1K1tekQyaTixoNDWVNSijTwoV8bH1oHCJG18r1fQrTpdabb5wG",
  "key44": "3AJ9omzkzyMwzJReY4paN5UAHHkoEqD75DhS2uZ7tRhvGzj7eynMJHCGH1eG6SwvGKA9zU6SYA6Loi19ZKoCbvZj",
  "key45": "LBSNJrbQTySpFJnaQmWEBZxw9JKPJYqMBfBZZ2hEAJobyH2PJv1Xv5t1h1RYVwiYGqy2ywaa48uGCZX7jkK38Wv"
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
