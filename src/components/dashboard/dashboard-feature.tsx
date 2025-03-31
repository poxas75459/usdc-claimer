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
    "23YfcofGRwoF1tAAjbRXSuzox74HyWzBN3BkmE7yxr1ffRCeijxDC21srnmkmaW14iz4be6bWoswhMX45NLz3zeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cbvYUmzYsX6jxxMfqR1mCwjXBQ59X8fEr3LkXnNXKtxUz57ktnBm2Fv42hUswpHfd94fea3MypvGSpMtr3czeG4",
  "key1": "5zh4iAAudggk5ZjfcmJASn5bnM65eS4NVxWUyB5Lr7L1uZ5RQeZEj7S8HrhvAWrWm7fPgwUzqQpVCMNaNeYYRt2M",
  "key2": "2496JNeqHUFEJrnnY7hcajCVKVPAEWuhMimxeL2Tc3keHrXR5J29nXmVppmj2SZYWSdcZEPYcwtkjoUx4k5tbMrD",
  "key3": "4xWNkFcT4SZfkHQGwR6CFiLdwm8teSmCGK584Q4aZvaG1LhuK7zrEL7DPjCQfuyaS9Rxbqvo6iYQCZs5XzXZ63gM",
  "key4": "5pZAjsd96iM6b5nhZuy47QzNRECsrghASBjEwX2N66Hh1AMEscBT6t9KZ2YJDZCPRrwfvGw9vs4cKTQb35hYyjG1",
  "key5": "4AripqJTfyuMBgCTNtHmmqFCXGF2t2Hn5akMgauBE1G2XVPK6AepzwvhoT1ieKcpwAbrAB7FTmGdKXNPJJTEkpcT",
  "key6": "vFRTHicPz67PcMiUsxUVzeWEyea6iN4TvggLUbK3HY3DXtytcEbPyqNAjzNh9QK8GitrcRf2bhauLoMvdAUuUfE",
  "key7": "xMgiFaku8VnXtU7wDKvZHxyk1HiaEJbntYW38Akhg4bFbhHjb6DJjbRK1uroBfAtSJHZMTuRPN9D3KYzki1Vgsa",
  "key8": "3EcjU5zrvtfxRUm58AU1aEEbHFxPjHydGG9VLH4MBaFYN17HSU7wZxZCRESRPR8pjoVRJvu5ih58EH9JVkjMPBwm",
  "key9": "3NeYciprjPhRxN2Vb4jJoGyu28xVRfMHL26gWWUSt2KbfpR5qFaFMwLKqWUWozqGv9W4nq8Ecnoh35UK8hfWPFem",
  "key10": "5kkC4M8mmtVfHUyVtv2nFzKfcYvrKNM1gSU43H65gWzyJDQp1BLafGN4zvCHYPnp8XAEQvTggnLa9F5gw7Tbs1xQ",
  "key11": "4cvt7rGPiQWyYyVarJXVZZvnkvsukX5vW6o2yLMRXwrqudWzZkt3pYrJQ3ctbuqv2vu4p897xGk6i4GjUbaz3gxY",
  "key12": "4ypeQBPhRCBULDGzhkkwZvFx8Q6XS1jH25Uoq4NuGhR1qgTxBTC3q98nrBFmGm76sAyTAVe8qZJ4tPmDg93p2iVQ",
  "key13": "5Veyi9zmBYwE2wegobumwKe3E8MgkMm5EHocLT1WtCzuwSJ5UbTJyp5gyDLG8tjFjaxFY23DmveTK67gheNrBE6g",
  "key14": "62ZhaN5Lnun6hkVponFAyBjWLq2aYgF3gxg72LKhtUTi98QZUPVgox7W7RjHq31i3pehHaQMT55RvBryFoMVGhMY",
  "key15": "5P93NN46BsbF4AqNpZLpuVxn1wE1TFMmD4TK2QSDtxt1nHZAk8CZw2DwoxW16VL4i9ArNSt8hGCwzHaVw7dfhBsN",
  "key16": "WP11DPAe2BVqNSWh3fuXG1zNe2fP79aaQyWsKmjuMdfHTbL7mNEBx5vqoqXndxfG7525BCEA4CtKjqyGSuxKuWt",
  "key17": "5XWGbWNYrErhDJs1DwE72TCFujAUixgHXAN5KrpRDfroBDcg2k6mH1Ed3FojhwGpXrG7SSPuXM7KTuDTtCeuJ4xg",
  "key18": "hiHRkEaKEv2KrNBJC3coGvWUBaZzfTZrkbBvTBkAHQ7V2oTH153ZwAt3UD2Vzhb3WAy1z8CxtBnN1zFmNrvkbaj",
  "key19": "5Nr9B2Fa4C1nRjchsgrkz7cUqB2vD16aQ2SrzKNhgeSWwE2VMgLf8mvqMvmvnWPk9F7ptiz1YB2sXyXRdC7gxWJE",
  "key20": "3bjY5Au9hyXwNJAM5JrXPPdibJKvCk5Tw6YLYeUDi1cWaQiZtYeXJKU3AuWxfzWJcM4ZZbf1PwRdwNVBJ7RqfAuy",
  "key21": "tdt6Jg2hyotm5c8qvQ1vDPnbuwRVhyvjY2rmC4jvaGMSxK2e6Grnbkx3X3DoUfkpeVjvsumvGCS6gfWb45a6kDe",
  "key22": "2a52JRqEvkZDe7ma1oyC5Ub4okQzefXs4Sm48kedG6mUc4WR8CHhPKUybdytoj2GJqWspa3hC62SoxUtYMUJeFcd",
  "key23": "HxYGMAHzCxPSNgtUCiDwBsU87VhmdJtd2sAvRdujKjioLKviuHwwbMbTFiDQss24T1g97JAkyrraw45FXWnZiHt",
  "key24": "4uCNw8L7YHAuvcA1BQMLNtfayKKEaWX2Recp2iozG1g5ZotA1RPnwKVL5emtFPNUJ6fQKyjFsh4hEEhGJ9R9Q9qb",
  "key25": "4kS2HdGq6SXK2hefBXQFuFYCUqt4w54bByZF8DbxGXMydXLrdAkcLkQSB2zHBrg9sDqEXjM1We7Y56Qz8iBkdbGg",
  "key26": "3i2ao2iQiuwqUirAqtUXKvLiw7sGRfgt9nZyVF1kgC22Sq8JK4BqrgohTmPfZrnSc7Eux61RoStdi7ix2CJPMjK9",
  "key27": "iqtgQcpgU66QHvzUgXfxR86LoE317SKfYGgukgP2P6aip9KPyofbE6LPuFzBZmr3YQym4UmLEz8pGPypmMGhKVQ",
  "key28": "5hQPjvbsm8S5nYhJaxBEuYmpQZ9r3RfKvJcJHZdV7vDRzrHVdZpnkv2gfQnzEJyL85XdzGvt7vbSeyxaCNCCoeA5",
  "key29": "3Lk4KQvvTG2bsFdtEPFC4BkAZ7QwozY51MPjyPq24BTfXDsscmV3wqasHm33u9jLybJHg8ABmed55WPrLmyaiw9Y",
  "key30": "2ndPLUa4wL9g5q1eobgAYddC8aStXyamYnydZ2PQKGoPyNKzi6FocVi5fdKxkGxuZeTxzQj9auYen95TJcYGiB8q",
  "key31": "3aeCSVHNCdpE2MiXXNPm6pL5RftKfkFgaAuQHBEXu3Y1fgir9Sc5NrK1UZNnEPuW8SzNd3HHKpXYhoQZK5dXb6QF",
  "key32": "5tfXLTihU6mNT7tKfNgW9Brg1Ze7sChrv1TC7iqACPCAuTtR9aWmCgodeetHgx9X3cdhzWz6WoH99Cz26Wk4CKyt",
  "key33": "3HwBU4BS81CNPPtatNkiiRfpEmCGnbkC8pafmsiWPT3FiSwsXAT3XARJdo53e8jQCswMJT5PDxfJ9nbfbnBaAcCc",
  "key34": "4mJmMFeikLB41tiUCNpDvzyJaGEXLLdNKk8c6AEibMcngAXZjTzjwaL7rX8Ab4s8jciCfUBmayHrNKGEUFzKeuSt",
  "key35": "2sQhXMnNUiCU5Tx5c6KePFNJwRRNYTzxDtyngga7kfWNZn7yYHju7egAyDsXb7sv58CQwQrBR2eyF2CeicN9RpXt",
  "key36": "KJiAgdmCMA9io3poi1cNy46SwgHPQV6oBoVk6c1AdoSb6JA1u1MxCFkURtjctTWhMPNcjcddD7XVVtKUDmDx7FA",
  "key37": "4AoXpoZqWuzuTVuJ2w7zzNXhDWD281L1GjMcpbVK2GKvJD7wGATpj2mCz42NfqhUCiRzLkUg2nRJLXVN5y54Nmx7",
  "key38": "2yKsC7WcaeAs4bmkgsC1gFzD4GNhyaZUNY1cySozD6mRAmLZ6KuPCwQHfXRkMh8MQcdsUnM65iWxi3mNd4tybm7P",
  "key39": "5pksmz46GhwoBXoiE7gGPWnwQn1SxwgVRLBvMoyzh9HiYgpZjBqL1JEtK6Fvxhpgx2eXR887gpjdZAfqRexjVWST",
  "key40": "5Y6n6Pi5ZUPvdvGTXpkeHiJpVS9CR7VmBBksYAzcN5MD4kjoUzUNjvPLiLT4mrQbUiH4XwnjnQEN5Z9Mhdquw1NN",
  "key41": "r4bPc9N7yFRbmmy9BMdEyfn733Tu4nctQfJi49pqHmub4SVMz2KmjGWv5pXznTd3AdD7CTHdhsNV89tfKHogkis",
  "key42": "4D6ckLcYUeA6iGqmP6gU2oUEpwCJRJVCwiiCe8etcsU89Pf3VX6HuHoBRFirVwdosXxMCZy5EPNMVxHQ4taDs5DV",
  "key43": "3qYLpK1hFeCUyDswrmG2VS5GLFY3C5Rzhi77XJXyBcDHqPBkSvWWAs28hK5V5kkTUAuNvCZKJJtyx1pEJBKuH5ct",
  "key44": "5oL6StoGarz1p7V82ddfVyzBxLd9mfrNyAaJRTb1Xng31A4J8hpQ86SqBFzP7bqQBP64cieBxxuFVZgcD3W325EA"
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
