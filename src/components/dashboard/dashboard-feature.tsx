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
    "4AmTuPnnZgi6LeN4d13cFKaVSZ87AhUDDHravepzZ5NNJYtsKCamRHGUSL52WMqcDZqJUnjQKSVYRWrz5RAVf9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BGd1NojKyLzYp6fE2hZ4kZBKV6qP5bJ6SXpJZkfWFrNWmbgDXXENSpVRQWKALnZ83q8tJayhBpe4VGWWp9qaASD",
  "key1": "3sDuG2qdfgkYDmS5Np8EmsAhU3kVQVqAomrRnVQMFsbqdsyX2Hg7ur7Ad9rK6L1FtzzdM6UgWqMZmzBvQad7hzoK",
  "key2": "3eUGH6vjTexxT35UMX7JaxZ8thZVYmhNBRKFtxrUiidgybcNrc9szr688WjWgcbbP7pMtNP8NQBxKgdAaQcszgoR",
  "key3": "3Z2AgewpHxiygBFP9sVzG26s4CN3rAFsp22hdr6pnB1BbQbCuH3aJ9sLxeBLAdws1rM8rvG2kLn2aY7gTvPh7xXN",
  "key4": "55zSXd947T86DRvtAK7kXxxELzx7LYMwateZyEHY6svj5UpnXbNDwLb6SzNpjHW3SYhHvYsKLYo4x7dVqNUHSRcb",
  "key5": "3jgVtepAE3HDAC2Rb1SCzmi5mbwDM3qctjnJYDbMjma3PKQCcs7trXfL7riz5dYWtYE81AYsSYAVwyoHav58JsCg",
  "key6": "2WkUDGaa26KXUgxneF9fUtBgcy3scX9uTz5M3g7T2WHbCX4NonuXBW5E2R2t1cznjY6DNTUeA4UHAYcQX3NRaSS",
  "key7": "hFkeyiP2GjBM4BhT372iqyG1NY5Jau5Ui1Nf18RvzG1kbi2WnFj9LKoGuC2G8sJ7zGkxQh483E7KNp8JA5qJDuX",
  "key8": "4tkUd7avoZYTypJ3puYrpCqwELaxuPqqmQYDVVhTiUEHUAmHbCXWgFuXCH2GatDgDeV1HeguHYNkgCCu4vX4pdTo",
  "key9": "ZQKoQ4VqnHzSbaPrvtauyoAAPYyzLtHbcpkcFA1BsZGjiuHYvLZvs5gvRCTtyBFGMyQWa2CxzSDZZEENKfTk427",
  "key10": "3C3H4a6imxdiAGyZsE5BJQVY52cvPzke9rAN9TGVZ1ZVtrU96BxSwyPf9HRG5u6HntUjgdkoDj2y4gG7Q741qKei",
  "key11": "5ZkUmm4nVXcx45BMCgYEkxaLG6eHjAyfzGH9gQenCSfJRk6auc1Z6bSqxZNm8GgrTPWGkt7hSLC8T5zDMUkqGnVZ",
  "key12": "5SPieszduuHK3pYoteZs1FGSwdPKLxnc3oaaUohPiezP6GJm7Rbc518YnqG5jwRuWnmUKY8EPKNcKJENtMvLgxhT",
  "key13": "5KdP2ZJ27gT5sT28ciX4rYqQivfxi5yV1J1E1ZfjTaxXYzhQrkPZp3ufd1D3XTKLdz8ZipgHoUJ92UgnTL8B3Loi",
  "key14": "2Lk7eu34dRHqJMfFEawitXcy5inv8Xd2VTf9tB2FfZh2xwhHJia89jwQ2Xhm9TfwWCo25oso2pjhvzFuwm5VzoQM",
  "key15": "3CpBphMgKTQPgtYkvcVr4Fyz3s5T1i7HqpRbWH7sJcyXeEsW2Hzkzk5AyCFn1XsGXT5KA5gwRshvTNf9cw97Ku5c",
  "key16": "5GNj8Cq5rjgVZxGLyfpwN1FZGWPvA8nBUfnhPi2rzAuarEWWwKyc7QtMDgRaH2KeeVxurfgmH22RmsxTo7eGCuCa",
  "key17": "5F7JWoyq2Ugg4yugbrqb87VxFQ54wCiD1uYoUXoZQPdMYjpq54j9PBVm8HyZxnJdjs5fDp16FHQxXqAxatnhTkEc",
  "key18": "21H6JGTY7s8svhP1kB6rde1LkCP7JfV9rfxABfcn5RSZdL2xJy6fVSqYLy9xe4sAE5eccykikiBBpyrXjXUZYyPC",
  "key19": "DzvAPtgpyAn9w9k2biV9nXWgzV4KvymKEe7AuvYPAr4APFhpwucX7ivBgMgL8GMMqyPJY9pMFL6zqWjLe8e7F5Q",
  "key20": "5xKC3Zji4YphgCJQdD43yjZwqKjgbVvuUWB99Aw1Cu1GGHLP7G36Fy8yNi2TVVX6ztyd6M6q6QS54WvTrv6JCvvL",
  "key21": "S8EkVmfZvjvbr5JsW444VTf3f6auFSQubmMhME7zkGzWrj3W84FNVqMHgxDLGXS1wuvM4KiZxAw1Kzqs6fhAWCQ",
  "key22": "2t9hRaZZaXuGMcbkAKbq7oNmSwk2hawcR3UYce1RXFvRMDunefQqTepLv2avFg7qvhsVK73eKpbcF4G992kt2niC",
  "key23": "5q6QYQT5UFo2rLBdqF3J5aq8Tz5SdkySuN8SzHLqiULcwgkLk9Cc2bpCq9LHaShMLTgg4qSLhGJe9rb7QvWN3Djn",
  "key24": "43XiEZZAgXyXPiy7zjyCrBSXFh94kvE4kYxFpdy4Nn4F8MyiZz8xm2pRZq1uVzu3Ysqa5Ja6wpGweMzat5U2ovhW",
  "key25": "3VLvNkFyfD86tBKTjpQZTVq3R8b5NiRPfAWCHh166Sbg97a6TCXgKyEktA5KiabeYdvcvWj76338KAHicw3JyUpp",
  "key26": "5GZ49px3zmBKTSQpGnkbPmfxLqkrTvw4MC8BGhULVGsX6tasccUCmoUDCj9XiuG4LbVRGXKgzKQZ1fFQUVcegJSE",
  "key27": "UYDWTi82Y36EhXXCXiwx1bXLxw1NpUQxQKak3HExazwycoqnyNvw5xoqpCt9xe6a8TaxWboK8CMZbRHrM72Pvos",
  "key28": "2bEXc6XpR6PcjWKExEzxKVNxhUr79reZwnucHhxtmuuyLieYxw5qrbadjTuUT6qBWwhvnLjo3DUg9q35t3wiPPPw",
  "key29": "48MhNXDbsaE2rDrnjRMVwLzGX8G1HGCNUXyTMvV8DkPUhTB2Dq8yVHcCRqW7h4XAjvLoyeYQzbSmQFSR88e9g2DY",
  "key30": "g1UWVzGyPQjbtasLsytDuhJfs6oorgwkBbHh862GBgX2UogtZmsUjXKXJ9GK1Cc4hyWMowsApZkCasRVWRmj5p5",
  "key31": "28bWvd6bveXJzBKA5SNRL8VK7a3w5CErCXAWMBqEBySr1ofVRwKhTXCpdpQSJ4HQYt5GUL1YwqEoHwRVL2PeUjbP",
  "key32": "8pMaZFZnkPqm1uVampGdKvsAZP4P9F4VphBuHQci158oDt2M4ScQNhUXT9riNxz4nebh17sRKXYS9rzAgush3pA",
  "key33": "3QUxJJ2aBtKBeYrJ7u4MA4SJUsJpQw2fqZS4U6UhdzwNim5wfnArWHEiWj3HFV5Kyx9f4MiUfxuFbuuxh5hr2Axm",
  "key34": "53bgj3pv9gvCpReaSAuCZfCCV4TXMpbTWAUgNGEu3qkWoetqBmQHLShuDqxj9qbcpqc2E3yTVcBawpa1VdyvwiCJ",
  "key35": "AQPUWdmiAKzxaj3P9z59MGnvfy1qZDJUJdFoYdJntwP7i1d8VsXv1SUDZVT9mRNRDgufdJKAYjSqZqNBVstxzRk"
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
