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
    "DVX3FHcGquNG98KDGNNG3rYqSPhAyKQisjnqoUGCCwoEQoY2NW54YS7UJJFhnUhVaUgtCTvudz63pc2wwv2pGnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U62LevT3Bi65vttAFukp3dKmavCQmcoWkucxGdg817mYLxigGwwEhjwrJWzK1pNsRHVN5mqqsRkVBXYjiuShMbS",
  "key1": "3oe8MaqL5XehjA9eV6JbtzXAc6Tj3VHxe5hjXi2bWPtnd6DwGsDP2P56WFxZR7u31EX4yFnrHUoqZ4ygLVGD3XPZ",
  "key2": "4FUgJYZC95Bxs611GAStqeF3EvdPXi6esZ87VKtxZX7jnBFxxk91ZEHKXXdzSXSNhWe2Vq4seMwBMWVFLERe9tRa",
  "key3": "439NHapzF2UcGKwRJ7f8UShiuyd24d9Hufrx6BzZXZY88iieuxnsSVCogeyFsD3WiHWNrPNMBvFU95AEjFpLNiuX",
  "key4": "41c5nDRLArQa85VSyG913CsHRKqMSmjxmoom62u7K9x8XSVHp9At552HYhoikRWBJFVXA4K3DcRKGSPFDjYeC3bY",
  "key5": "5d7XfUq43hEXNcMMnbgTnnT6uQXcpFps9Mk3AAJqDUZHByK8rSeZZE9ggP4NMd5LDKux4j98d2TRGCGaKEmmANxN",
  "key6": "4T4DVUx2KXWkk1Rcc3tZQNDSnL1oFGKpRBA267FW7oaPhxaqyqRbgT1PzMpTxGeMHUxnVupVjQUt4AbrxYhYEjQW",
  "key7": "3d3Dq7pLteAr3xpBuvUxt2Wm4oTrCuSrRfw6J8tdomKSy4cYCDSgb9nXDgvhhwzBWPaSjLbAQRbpZq1DtAVmhBMw",
  "key8": "3FozVghictPocJLHh1amc2P2ffKAZnwpFfrUP1e7i2sf69qHH7rLg1Xny7R2Qa7nyWzzhATMDxhR9iP72Ki6LdPi",
  "key9": "5k21bPEV7FxrMtGcuwXzC9tmfiv8bKmXCNkDgzWqBZueNeVmHaEeRjwUZCnVwTJkWQmdwR41fnBg8qpDTVNp7zpZ",
  "key10": "52KDTWR4ts5y95JgdQZqHnYtDd3pwcRrvQFu5TZk6P8fJg6H6brJ2bRfzVHNWv6xxYqJfh1AnUdUam3mcb7Nf4zf",
  "key11": "54kjfdLW498u1UGJTXzSpakvjtWBNnjyDagc7j7NLgWGy1Dv8K2nKzZjFW2xX6g7W4hRPAYcaJYS7TxkSPVFQmEE",
  "key12": "5AfohBwwywS61D4xHKJj14KUjB5HDocogqQmGKTRhqjAuCKshoQus6P6krwZCJcXbnYBvypbCHetXpwSnRMxW8JW",
  "key13": "4VjuHbbVSYrZk4P8FhFU2cDML5a9teMd69RrB1xMJzWCY1z1a8L21aHYbuqeXvHAiP6Q8JGwNYwaVheVekzCW2mb",
  "key14": "3GAmaRGCxEC2GHAn4Jxc92nAHeTRo4VbTAnESkRt4gQZvX1jLcRPoW8fxKZP4T3UHYMMRmkwxyGpz4xNm3ZmbP2c",
  "key15": "bCfZ3ANioNhrF9rUZPrKRsS7Gccicf5wjNVUHpWsFNNaecMZyzvzJ7tuWs4cUteiuSsjJd95tYyFzpL7jcWRkZR",
  "key16": "4UBvGoaEFQ4Bo5vbjLX74ityk3gMRPwdYVhGc8CvPBSEqnMj7sTeacCaPYvwgg8mg1cWcDSAAEZUP5zooybEy4Gf",
  "key17": "2exq5rGPUGmznU4VCmmrMpFhavgRxUAHs4ipcjbPYX8mcWP3gFB3ELAUopcaWYLHzv21att8UgFZmKQb2YiEG2Zf",
  "key18": "47vyZvBeBYHn1j2S2WRysFAboacF1ZCun58o85bpZBkMG1WF2qhvuDdcmLSaXVRxBSm7ErpSTAkLzxBVKapx7mux",
  "key19": "5TuTE9v2fLkJ6k5kAszaVoXbhq3nyRsMavR38g9bQi3Ufoc1NX8YzdNu1ECDTd5j9H8fQ69nCt7xjDMot7WgsBTr",
  "key20": "2L4qoAvQ7f2yyvdQ5FKDQnFHscosjGvUC1zuHUM3cdbcDGvd1mmEB3VA5FdxigxBadzL3xNf2UixWrBRcNgkb6rg",
  "key21": "63x6iknUNaR9vNWYesaQs3iPJ6fEwbHwxRdXYKFo2AeRFKNXjPWqxfahoznHiujGmAGj1RXVmx7jfSDLYXz3MWDm",
  "key22": "cG6sG3pR7SgYkqFKNij9YGcUwJY8ukKvfPgoG2AvsxZ8FkMehFXJc8tqg5m5ijU57bqUfZMQRzfntBnYeDDkGiV",
  "key23": "HucQvsYUPhpTxVBmDXDrW9jvRH4dfyXAPEJaE8Qm9tQvEbuqBiVxtkNVJf8b7o5ZSBkovhgU2U1P9BqKLvtT1Ex",
  "key24": "PUvYCt21gCgDz2QxKbyvUWu3MhepW423JE4asybvN4GxTfutaxQ3HtZ9dcDjXQxu5sY8A6ebKoHfHdQLDgWY5VE",
  "key25": "4jyyEK1HTr7RkYjdAyQBc6DeuYTipTqpKsjv3Tfg8rsW2vq2msPUJtXEhe2uCTfsDByZveEe8bxtpFfgAU2xQ17e",
  "key26": "E1VfSkeKYWbfXHLioJ4d5aZTDDNqCsJRrfo46wGNWbEHaXWynCzj7WHeSshDBkiCVf4BvxVyUCHBdhebBkKqa1K",
  "key27": "KSxQkpFBcEWNGw8sXRLEcjxHssmsi1h6RZVghBvQzLWu6BKPCJMct7zADb2Gkc1sc1fGVXsWtsHReRm83ATF6in",
  "key28": "FkHVihA1aCtKqfdkZSJuDVqPkepot7CKdn9urCPdJkrkcs9AMtemHjm6CM4Zkj1Fqv2SkCM7AELqhn5QGgvPEre",
  "key29": "3GLxhs9C6bSd2Z7wYzRtuYyJij9741bgEwvu5JyceJkRcxTovjWBw67MuvwqB9aRYZrppSaCpLoKeEbreCTqCjd4",
  "key30": "4WQ64YnVkYXoJbhEYDnHykr8qSNkh8Tf1utDKmcb63cKWiyWPWer9a8KR2YKytXPe4oE81cj7DQo3n4idFFpeJgT",
  "key31": "2g9wYaY7uBbDBcRpZE8w5dL8jXjRGi2cskxGeisp2tP6STEjkWT8GpzrqNrjYjgvaLocPb4ahbYBTZ5HzyXNDvpt",
  "key32": "4WQqop68SwjxkrqqRDkorydwF4fKjTDDouiBn4uQW4weqDgHNsrT8THfZeSoS2Y38aHi5Gj3DuqZC31NajxafW5R",
  "key33": "5brMZzerAwU9xTPpBjNSmab6fT9YdgC5igvCjTL5uDFyXBzK3iLeLdVZ86JCj4fwPSEVhW2jmbwLAdSHXtm4PPmu",
  "key34": "2BHJYeoxoLq8rwMynoQtp3Mh8osAxncKHUCSsxrejy1aQwdTmAB7qi1ELwCtueGU5JuhJ8aWyxVhKzSZ8bznYg37",
  "key35": "5dYsuCkfHnnJimdM6xFauCj4TSMKoCEJauSu8AvV16gkPMvCykYGyMfuDJQFjzkohijHzEkKDYNpHv1EUcX2ZRpS",
  "key36": "5sSuF7moeiFnuwtpMA1Lpk47xayhjotLDUyQ5zjWFUERHyWkr8ydDrg3UYjaA2r1bZ7NKwHPvi8QG8eiAkfdjaRb",
  "key37": "4TR8kUb7zxMD4uyC8BdvY8tudnuUX49pfVfhBRz9Di9SbHmL4huLJpmyqZzWgnrqdbJvNWc9k6aHmxRkcbCoQe1y",
  "key38": "2yfbr794KKGEcPDE86PJCpeUyrQfspgmUuqKfXqMXycFdC2RVmjd51d2UESTTCuwpkzWvEabQGTtoD6XsC1TR7WZ",
  "key39": "4HWTD3jXJvTyiVJBSY92ny2Z2378q9TD5aeY2CJdcW5f1qSUFx5tRua32ycL4p1Z7egyiU6k5psSAujivG3TRNdA",
  "key40": "2dH4J4EoLMENAJKZbC4XqZ1FrpvoSDN8RyQMawzCvsCfkBqqq4abDiE5SpqApBXJ7GAAchuxzjwfctSorteUNV9b",
  "key41": "4dgQiATaQ9MEGzmigWvjD4asDAbkyfrAxHQmJ1BbWEc718j8fiWNs1haJhQL5Rn6NLn4mE2fxQRa2fT7HngiSjtG",
  "key42": "5pMzxaNz2aicpu853aX9UE8HoiFa4PkSVn7Ao6gXoDnC1Exq5JnuKPXSi43g8vfSj3dn1A97HNi76Tw3V6Z8r7e9",
  "key43": "61ChnL1pFTbMzGm8WDoBanpX4Ac8eBo8R2ztTV7RoLmFu7Xb28WG2ArLvW96ruVjUqRFmChdqRcxy57J2kCgTw9S",
  "key44": "5zibBRUiW53nscxiJyXxHkoYmXurZRHCVAALmALHdexYntzU5yXJE6MhiA9quK9L3BGBtrsUg2BhcXBPsvRmzvcF"
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
