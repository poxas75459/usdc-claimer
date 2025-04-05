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
    "2sdKEvWU598UnhZdm2kWGhwVroa12mCNfVkwbWFxgqkzvCe4Bb3N9UUXfB2uutskWnQca2Tfy1VawxAD7HyhTgit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gVo56Szp9PFvm746CC36T2XjVRZCzVofxDi2qkfZJA7d4iWCx3zq1iwcDeDzZmb26HUjkhbXKj7UncgM5ERz98c",
  "key1": "5jhYj3wqDoTHe2Qk5nN8jNpi8Rq3uUXSBejJkm2Lk7StjT94ntyoiocZHsAdYeCZHrnZxAVYuT6uKkkzUAsHAX8j",
  "key2": "43HDajRz3D8iLoVc4m1dZWoZYVKXzdsjxYZnnaibSW9AfW9tfmc4eLfBXu1eYA7crTXtFqvEA9E2Z4PTaBtpF21Y",
  "key3": "3QGG7bM8114D9YwR3LvF9T4KpJRbUBaXvdLacFCvCP29ZDZZpAkZuqZ99v3PEfrrD5pAExhrscQLUJLZQ3SyMhAn",
  "key4": "2eqqwj1F4Ni8Losu8W7hXubbi4eMzTx3ugwwNXS3xPUxVAtM4UYY9qeMYpR9QX69qYFkuXTSi97gLbWULyJhK97h",
  "key5": "3AEpsWkxwnpVWKzcVb3CEQLPTeAQaejvR6ehpAgKRrF6sax4pYgDY6tcU2qZppgrtp4sBGUrPQQFZqqtZ7CzkL9z",
  "key6": "w75EJvBqB387RRu2QXCKcL6YmRagAuGx5x3XAsebE41pttrWYGZJX44Cwwu3sBfQUYn7P1nV68ooefUb5TD2TMw",
  "key7": "3NMpP9rMzukd8tan2xH8LgzxjdkcCKEqZvxYtpqMu4iQ3fi4x6mwSQZuUfRxZsPA5AfjitQatx4g33nhGgs6YdFP",
  "key8": "4TnHBjEF9U2F6W95KA3CbZACw6KLnHyzUy19g2f8VXjWRyKvMWPC6VK5Nizqc71kN3eVbRbBi1DSYmoYq3XxFnAb",
  "key9": "8gMcjQjGv1j5SP7WHndATku3pQofGYWY83edkFVmWthsagRkd2hB4SiE7WK2isuRKaubPmGsTcUQATCj2ZiYBLm",
  "key10": "28zXJgFvesGS5Qvbktooi1r2pewYuNoAE3KCi3KPh6gcb9spUbqYHYDJTykVFbruczYKsPNTojDP3r1Vc22J2Biw",
  "key11": "4G4SyyoTiAgKuMpCrukjxCRerW69u8LuHuae8G2sjm5PGSvF4ewN42f23m19EmWJyCzpLVyd6rZt2XN9kxiFTpfj",
  "key12": "4uTJdx6EbhYqnbF2Lt6SmMR8S189r8R6JZYd2wePVfsUCyK1gC7aSKiFSjxgrx1r2YQZPGdGWwjtywAmTatayBdu",
  "key13": "62FwfWPhG8hnuxox63Wh2SuDv1aA6SuPmTTrALJ2jRvRkiyHbguecXHs1yN4eGU3zt3YuuKD15jvXiDccXXhB25S",
  "key14": "27MrML5qZCz2b8qHQCmeKuPdAxXHc6wcnNmHgdjqbLnRTa9iyTwvcibiH3FToxXenqt3hX2y7DsNA36xcgQLWYgY",
  "key15": "5bKYh62TrASMz26QkYexxX19nAKxgsDwtzG2bCzPoPnkJ5wFEE3ZAqAHteePB14yAiHp7XNRMfMtfHTz3rx5VgaJ",
  "key16": "2rBTGEChQzA1jisdprWUga8X5nxdUM8CVKnaa8nkza466Ap7wXdzrPQJYhv5EoeEmRUStG2zXeb2ZgaBtWqUtomc",
  "key17": "SRfuotEVqYFfdgNCtwA35ExZMkJNSznaE2sa5fesh3jtS8AkLxY7CDY4rvREQ6yZQRrnya4aUbiyvkA2pSefMBL",
  "key18": "5D3USt3ApHBwfjjUZnenqmSNthnvsKZsYWqk9A5LBPWek7vfsbvLqtDJZwDkhVuk1aFi6JwDpRdtBMSbqrWpc8sf",
  "key19": "645UK2ppPGV6uvAYPLmLYpdN7snneYMw8iENbEpub7RxPyfosRe6WixShg7pGVb9spWSNHpZqahA5efcTReyUqG3",
  "key20": "4S8oEC3pDGyL1nE4Jhx23fJBVBTZ7JfngQve6cY79k3d94xf7VZ51uyEANbyJkCewXWtuccfQcqkxfd5NbbQ9y2L",
  "key21": "4sbsrVNyNJ7Q23y9XMnd37Shzp9YrBN52hJVUeJZR7bZyi2CfbTi5mLH7beM17M29ZCrXnUJycb7uZ46SfeRr1vB",
  "key22": "5TYmiWHt42gjgyVTzwD3KxBMHg1mvA5kGMfa2GKa3yQA5uAUZTuzPFFmJQjsQEBLtjS6BkFHpbGwc6fgoexQ6hgq",
  "key23": "4xCmMZ6FRbqhGZEwKmjNeqaR784LwNKMGk9RB76w46PUyW4irkjUdpXA6KZwNCSgPChjXAP7VD9idyCQJMbyVNGP",
  "key24": "3Jjfb87GqwWq4r9NHAuhQAF7Ypn8SceHLyyTT1HqU4RZfftV4nPN7SUR4nbSQYQW6a9nJMVPa6BmUMVZKJpDVM1U",
  "key25": "2bkNzuy6gJhjgK1cHQkxg7m1ELfTB7iZaRPvPfVd7RqXcSg61pMgt55bEeCWJDCZr56V9fE4LTnAjxVFYoUwbzKu",
  "key26": "2jdN6w7BWzWeJPcfrJDwjDjxRgtEPCs68FDrwtYenQwCGmTmw1pwgRXQ9FYV7YCXcysgENDyy8oXfaNC8p5tdq3x",
  "key27": "4HPpw58mxijZfDbCqVrTKrKeaWgdNM6KXCs7yydKKnDCaHctzvSdunKPHKoD8zrjfQHU69v9Lz4LtNdD2tduE38e",
  "key28": "3juPp3GuwwGA2QmA4YeAnhsfbwmBvkBuQ3W8qDCiP7Q8rBKS2S2TanhCY2nWxcM5RX9dFYFFF4AvqN6tgk5KgVJP",
  "key29": "3XxDbUBhRP8Cu89RAj45Dehoog5z7kTG1PeeNEhUo8MEa3xQQrgxYvqkXea6tH8ZY15y6PsTWJetJktVbkQn5P4m",
  "key30": "4G2a8qpYezdZuVbL67jKopscXFmWZPpiLJTMobwSckFBnEwETfqCH7NBuaU2C3htrQXboexvG3pbWU2DjFQzZWS5",
  "key31": "hyqiXBMzJiGR8v8GN6EFgkksGqENGQfjHEXgWdwPT6ug6ggqyRSaBuQFCbfEZ3WgmkcdhFjkbJPiXy9mqtshthq",
  "key32": "2FXckaaUbHjn3hKoFurcjkNT3hF95cE1tjkmojieLq2rXdWR9hu3M3MpjvskE9QwFdDedk8evxi7KnpUnheTgUZN",
  "key33": "3A8dTH2JT8rjxm54Q3ijTBQdR4jYWYhYcDXHJfaFqmiGHsbCtcYSEtPR7YeRagGDVLcw9tWAUxvMfu84b2bFNLhi",
  "key34": "5af6spMMysUJy1ykHqm1Jw2RUK9ggUAvsgdWPGUuMdbhXkh9JDgkonZSSRGzksRLeKr1jDrZMM5LVh2kWVcybUVa",
  "key35": "PjX9sawuF5d8PZykfaPwsFR3AKpYWLfGajPRSXW2kXjfvQ53FBFB3fQ4juMjivuQBzqAi9QFtWig1McQ8P87uCi",
  "key36": "3sjgdfLAXmqNPhpkKgqDHSLcv3HR2dmNzHTa96vfY98ivEBN2GFwdJy48U7n1UDnZYLFvBe8ue7ePTaFqMAm6TSd",
  "key37": "3HQHSKJViADH5ZQbke5t5m4FXVTzNchrUajbvkdCWZrRFhVwqBVREoQEnp2yDGtPLVTdzcuRiahPD8bWy85taHoh",
  "key38": "5k62T7r62uGNbpCKHR1hgrtTKhi22FWMgNxAPsDsMUojG8GpRKM6rUqM2K6mnWwFMdjgKzwWgKpTLP7GojC1X3iz",
  "key39": "4WhpYG3Aqy328dPvh8GgU6Co7UzbST7pBMdHtQXWkFW1FP5jhMciVMpDmX1HFywhM4XmrAF4oQWM69auddiM4MhQ",
  "key40": "5sErf4X2uCtweo4y64t1pLsTxuwiiKTrKpUWEH1ppEkWRqHpL9aneF5axaYfVF6WpnFWp1YjqCJKr2uU7e5dwFzL",
  "key41": "3Gt51hawdjMHxGvwnK1REWTUCoYLNRdZbHmqgpWFwidAYxa8cLA6Bpmohs7hKZpunULwYwokmz7oga7HLWznU7zy",
  "key42": "43piC69EjEFeUP2fh16cxiftYG65za6HiDNcXnq5ShcQb8dduqFxcnHNxHBfAUSXkrkSo443A1ob5YcdQLBJdrNj",
  "key43": "244DT1b5x5ZfLdpz5qbTKAuj9XH8YqR4NF1SLJuaDizz6jSs1Ld77zMPDDLtdAxw4pkXk4oPXWPfPbDceFzkgRAJ",
  "key44": "46X9BqxCPgt2EB6Ebein4QvPx2kp6wWW2EacTKcg5E1wFLEXApmMs6ZEwi7MYLfvEm5E5quNQHrMPWhMaAiFehnf",
  "key45": "r4HVzfJhHvC9iWXjYUp2A36PXSGeyPc9yh4a5Ergp1JohQ2EDfeupsTVygBZtpENxSwBSLykXqqXtCnTGM9qjhw"
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
