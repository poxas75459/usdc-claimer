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
    "5RmLP3QWG9Widb2yjB1bst5hcVZT9oE97q8cqLD4Mi9RYnGQMXFjy24Tmft7E2SCLUdBaTvNyhwuJv9DCDip7YZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48S5qHyxG7sNufnrYQ6Cv2PmG2sCwe6AwXtqsQU3qfo6NqosoJAea3HVFjE96qN3KeRhMSu65UzUC7JfYoqcmcXi",
  "key1": "etrRuXMx7HGutCCoaDzk1dT2nGVnyDmmzzG6R9DhQavEwmh7j8iDqQrgFj2B7SfrWLFPebnmRY61fac8cSdRa4h",
  "key2": "4x54KVmV71iE8GPFHncunejYCstg55C8kHyL7GGToVABkgb4aCoxiUBaaieSYPF2bQ34TH2S1EPq785Pj88YeDkt",
  "key3": "5MZE6DZDgnoRLCx9UyucPbMfomhxhHB5Gg6m72vJ6C4Ne41oJrZnvqB7wBkHvrv8QY7dpXN9QNMUHsSaBQBf91yF",
  "key4": "4hUaDG5cYLcgdcKC73hRVZ4UrQ5g5k3hGtYwZKUuY3RpThU2X2bhYWdvWmXoMQskbup9Ne4SR8JjiqQt3Qfk8uvi",
  "key5": "A2VP2YVQF1Ei5SZKcowTMVajWWsvkMJf6qhkg8kfEcB71w2RS7xErsuBQ6PF1uinRca3UB1qb1ebR3FL5qMMjzf",
  "key6": "2NFjgQiWs8FW6ENvHS1Si8UfkgfyzDdJ7gim5XJAqqiZ6PWhi7yuqb95Dod2Dz96r9c6LmhhnTKikQ1KUXUydTkJ",
  "key7": "5mLDwTVYDKJsQE8YxUdRRbgVrTx3rqEQ716cAApvovpk54dV7hZxEbrFssYaqp9D5RSxh3PYtdFnHVGYbWCgoEyb",
  "key8": "3k1p43rXP9hep6oAbfhvUGpnimiapaHTyKvc55pzZyYeCeaVGt4dy8QyXhkewtQSoKCMTsjUAzCgNAbNJytDEehF",
  "key9": "2mkHEvY19VV7oU6Jhq5RaVxKaQF8vJBaq1PDbySNd4fp9TevwLYHMPNB545VC5cQVj8B39WYct3F56aEwdPDGgun",
  "key10": "2ueqSwWyaXARXuAMs9oCFLLMxkh7kZ7DjCQFrqVQqP24fkZ9jMyG7HwdPGpRbQkBWe4LLStC9hWFEEhZL6Urf3fa",
  "key11": "48VTVZR8ZJVDfm3wDXozvh25Vnx9WVa4HqWWMHsWkHMserYwU1ezQGv35H6VeHUZ1S1Wfkr4m3h1tvePP2eVrDZK",
  "key12": "4Jsci3bdCUpPXppaQhypo159p6sNETNwm1ibW2BKsL2gMyxSM98ctCJ1niwhvyw6HHvJuftazTkhtY2hWg3yUi1k",
  "key13": "56mzacNi4UfTH4vmthFN7efjAQBRykXDseEQRVjk9KDp4He8UZyFQPpMqa1xcA6H66CcTY9nv7utvtW5CuCaddCg",
  "key14": "2zeuznpXixboyzAucwbHP862uYZGEYRcahvhdrAhVA2ncMTzTxN3B1MxpMToR4bYw3yFgpGdZsPAZne6cVP6yyKP",
  "key15": "55gRqbixkZpQX4xn9GTcHdH1MSN35zLvENNxgJffQELzukKuYi2HHQyjkz5enE59udabSopEcYQbcngKymhMz1WP",
  "key16": "USNz3YhEVHL7tbam38GeNXbZ2W7435br7YENkv7xKwtBqYaFFVhzTiZAhQw3QHpXj6rBrT55uecdP1w8yqe1918",
  "key17": "658LaBUb4JsHc85igQWgYfxSgkjpN3xYxmBpfHCabqJapJn7igZgSBbyQpLCqLynKgGdsCpjdNiNQJqtBMSufusu",
  "key18": "37c8w56NKLXeEZoFDXtynzrTCHfMLssCvnLFmGFMMxYzBGASV3ZkDovSRRGG4G1BtFJ8xzLppykN3emL7ysskREZ",
  "key19": "3CctPwmc6kGtDMNb5hLZ6kEGmzRVHh3EoWymc4dt6sze1Kk2cCFUwXhLLweP68bDe74RwsWPe1DomZBFKzX3Piyt",
  "key20": "3SCydm6soUw3qDGaTQb1ecdepxgmT45rg8uqSZ1N8D4jxt5bnpGjYskRpYbrjyLjidYAWmsonyMegK1x1Wqwh92j",
  "key21": "2b75pRzKbb9dmZFZEUFfLXspyNxDtwjEcRYi9MCXTC21duJo8KVoTnNxgqaxuKZBKaFq8WhbMDnD7URSzgePXej4",
  "key22": "2ZWkxWtYAnJqHr8WiFFvCowPZxYLo99V5jEMLB1RuqmfgHYDqM91yMNTRLNWFapGfh1ugf9LjBdw8n4gFuzX9g5C",
  "key23": "5ctg2YbTxidEm4FrcdDFVBs2carJChG8zFsTgsXywvqQHAhuR7vhGmPpn4JYbj9akP9DRwnibsjWStbTRt3BNjbf",
  "key24": "ajuBuHPFTju2puWa7nCETxSf36MsPpE73DVgnD8TLCNiTMweoqW5ZetSjGDnwJfwruAeyN9oHrggmnXj8XPSNpS",
  "key25": "66kBBFvF2nVeK1xRPwFcyGe5NGpA91rqrka1B9tQKSkUdAbAYrndbrinrXUS7Bon8f6918M7GZZiNq7HCvKt1Rw7",
  "key26": "3HUjLPcd8ryRznUwam32qQw11MyHrUHdkACp2GWaaTaehnkYvRqKVL2R4yJiXzzyj32mHk73YyJV5hfs5o3gvj9D",
  "key27": "5fqPfhdDxVeSuYL4JYLNLHc5SUSjoeByHviJt7sSXGKc3WfKRj5fyCepzJ3E3Z712xbmfdfMN9FXumurN1HM8JAe",
  "key28": "Hyeu8Mx2uVThhN4uam7hPVVY9dXWw8RoMs6sodtdALN4PM83r89fVZUQD75ir7gf3xMj5Udrt2CTm3CVgi3kz7S",
  "key29": "4QgTnQFKvUUkaXeUAAPTY1bBNyKJB6iUAWFrwg3xyxkYNM24bTyRxJKKkM5YjqUHk3ETSTyNnCTSrDrq3vQSWeP",
  "key30": "QWWMc8sCuCxB6QQSAYL53hy3i5obJn2i3YG6xhimG6jyLBeaa5VX1TzNwRxAmnM6J99cHtiWVwqypDwnWtYRLN4",
  "key31": "RPzpraN8DPoiYowBZdw1uEkoxs7xpPtszunBFURcNUFukKXHrqnQETxXLBwG9wMB3ZovnrJ5Xva3qMfNfLpiJM9",
  "key32": "5AP98zQt2v6hYHx8c5adKeVxWrPNfbQuLFxsnVTQm4FpAhyBdbVrG8Xz5HMiZC4bY9gukFFun87tmwYoLv7Ug4sc",
  "key33": "P6BQkYBinV5MDMmpbdPturMwvj9sSS4FjLaMhM2ZtU9KCF4GzoUv7SH5WZ5dhNNxTiWrfLcV32aMkjCyyiaRhAk",
  "key34": "4uNsXEunhdyeQ932EU6LFkxjXTE2o4AN9U83GkgESRxNc3nRdDxkmTsKroWda83XtghVnmUmKsFkuYMwPgjGnLkj",
  "key35": "59AWzveNTdJsHz9bZKaUMJRDfBZHDMGNg147vCazMoMpegKukwYdb39aMnicwXGQJE9TkSuTbrV8iER3x9pKyoNm",
  "key36": "3ZymsPwRgJUrA9eEx1XQW2zMj7sHZkkGQ3qSBCsGfBvw5bdYDjc5idEKwRDmj9MPERQzY94gYj41oo9SmmZbeQhi"
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
