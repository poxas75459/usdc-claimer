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
    "4qsFHhZWFf1v3o6vXnB1p7zGf8e56SWhQzbLngwW6iJyaazPMtwZA9gCxHk4UKedx7zpYcrbAiuNNqrKECT3rLJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fr7zdDefNYca3uzo4K7rcKJpGHKRu7kfBuNBhJqguUy8XXBNaYrdP3wgKpZdVFP8M7aUUggWZpU5VR2ByMa3jmf",
  "key1": "3bDbbuKJanTeVvwJsbyrKszXVLqw2aw5PcYDzq7mAsZKJyRZF2KLqz98xaG6sHLzJZYhkyRJvkjXQGoYjeY4WUPt",
  "key2": "2xkKJxidG7pnfrKjg3UncTYj1VAkqn8V9h333vvyG2jy6fGbupxCxzkiVwCVget1gUuXajjL9PRAEHLTSHuC57ww",
  "key3": "2G23ngbHjTGvqbbrqEXyPz6CHxz7nTtKTc7GNXBFeEaVGwG1uAh81oJestzzUCVKVmVLxbzepp6sPeKGRxU7KYv8",
  "key4": "3WGYqkWUpG9NBJJjsogWbc4EstcXFDcatLqizDxWUvx994yy9N8ewEiDfjBgwNfSkFnbTRXNbZMPaMZ6iGX6sNwG",
  "key5": "e2Wb9bM8cMYFJS2c5Loi278TsXHtZAYq7FE8yReaHWwA669iZnABt7B771rYKuEN5YgUKMycahTAjtRLe89hYwv",
  "key6": "CQmSueAaYbbivgQACMVxRCJEVCM9unqebfB5dcmasfSuR8ehjhdrYXjXhCkpfQXMDZT791bgHRs4GyVLsTBDAdF",
  "key7": "4APkgxF7RxoKWAe9WM1pA1dnPDTLzTEd1jYUzJ6kwHkjz6pucBvyLJhNqugr2iCTHDePiQFJfpMiH4Dzd1bkTrCB",
  "key8": "4LEH9xYAcdcPgPcymyz7CWyvcXPzcV1x5j7a9rVdeQ8Q9sCFiLBZgh2uHfZX6Ys7GhGmRixNL4PoDb3CEEeL13UE",
  "key9": "2b1tFSiR2rAtdpMPLsHKvAZcX4Yir1gRSxDDuBSeAx9APgE67UGT5dBtV6jSTUp9ww8gbphAwRGX3cwF9FJ23xtD",
  "key10": "5FRxaA6b5k89tf8ieaBVUb11PGLWJCzypcNtSJTor7EFsxkp5dY4kwywYqjVSSdQiEJgMfbPKfYVBY3LbS191Egh",
  "key11": "2SoB1SGXsWyzBYWMGLsrrfSE9JveDGruoH4TTZWc44CHkMb7USqGLaS9DSFtg7mGxW6k4SEAAY8kqRqiBuRQuoR2",
  "key12": "SNci1nirgG7gHH5Q2o6Ckp9PvTBkFuNmoZf61MBAmXXaWLvUQYNe4BYqE4Xrhnp7nZPkPoDPzq8k2gvXXpmsvCq",
  "key13": "3BfN62UeBSfHKC8h27z5VjuSANacCRES4fsWvefMFM86YbYZoh31JdS1PuGj8tbvmFw9ZY4GPf1R46EP4wd3j1Mw",
  "key14": "47DNEqQfLVjLy7Cx3FQrkHFVDQPUEQ6jUsWK8vBZDgLBsTmNzCfj28buYN9XtVV4s2utghNBeWv84cavgL9ydPKZ",
  "key15": "5FEbCNkPFst48DQHz6VSdgdzZkeVXLkVJFmFrY3oFV1cGSdtQZRYsD3jcCUt77PdXnhvHYLpGQKSqLWbcvG4K5Pw",
  "key16": "3jT8VH4UQk1vvb7z5GSEYBgCrnCZgWAyhJ3fVh1Vy46UcmPwzzEz8nHHP5WhBR9zY65Q9WJnz5SztmreM8YHMCAZ",
  "key17": "2FEb53Tpi4W1tyCHhByunkTEv59sU1tN229RRNYzmCPwN2yypCJA36L3nXk3XcAwfnhKA9mkjC6x4NJH9qUHYth8",
  "key18": "5YJpNCzkLAHFgdF4JDpJaMn57ow6mSpX4y92TAKoBu9eVCsNzkJuPjE6wSA54NWWKUgqg3gWbMQopRpvhYRSwE36",
  "key19": "4gQZrVf9ukd8mMNG4jQwocCi8X1dyyiXARFoCSsHoZHPzcZvY6dg2vgfJsaQ5SEpZw1FkFkYTnbTFzGivd39VWiV",
  "key20": "5GjSA4ubsLDDzEFffRcq3UwKBduNKf5CdErewHdvMkkgwu2vG92HQtfL6u3Q6iarME9k7NZjQjoeGmjaqBYVmfwt",
  "key21": "51VRBUWgNmEQNywkZPv85UCpPWnY56N933SjXzQZPci5Dr567vALdizxBjXZ7B51jGJfgZEWuXsVNerWFjrNvaJ7",
  "key22": "2wgyJZAp7BjgDtLkn89m2g8dNNjG4aCn3PnkvzEgH6Ccu5wkgYzK2tiTXYNms6aNsfSXQqCbGBq5nbX9yTqkVXby",
  "key23": "5Ez9u8rV67P8RUdS9C1EfuVYjtpe3Qdt8NLhjjNW2RUa6qGoPWqeyPNJvSJ8U3fPpCojPxwH85Y1pDzQdmwri8Bv",
  "key24": "5mRjgbaMQzFiZUR7bhzC1UrSbBu9gLTeQFiy44Ek86N7KXMtJ52a7UqUpzpnUhPyoUXSr11mA8vSJtUTfBNzFvjc",
  "key25": "5DZisLf4tDV5CKNxAAxAnq6n3JKD2ZmPCz2dxEFFMCGxUkQ1qkbTCr6s2fUNH5eLYPicQwQW6wemGGqptwXRw8en",
  "key26": "39UanHrtwhr3PcuTZZkeU6qU6mZ5PmDbib4EY35Fq2G87vicYmT4eaG4nZnDn6rL7VGQcddBpDCKZr9zHY3Hb1bm",
  "key27": "51Dc37pYFoaT3tSKDPgYSYYNNcDyjxQ8znLnDFy7r5smw7j7ataWJtSSANiE5JMP7txrryVcyf2PR2vmQeAjgaqX",
  "key28": "3cmnuVc5FVV2WeF8CDkv79ZZP9TDxWCk4rQf7KUZpCJyRtYFzTa1FSV7MbrWfp8CGEE8Gab3MWuJaS7bNgGVEzHA",
  "key29": "2Vxyfv2zSwJpmsaywnndrLLLnSaSoALwMGpfRJ6M9TmnK88VympbmNtEm4BvFZhJrH3Av1M9KN2Pkb3F7wWSvcue",
  "key30": "56pTKRegatKPF7SfiVzCgWHxicq6XxfykF72tk1evLeLgZRy5SkUgJAm9uTYjcfCNat6JYyK8oCy4AbAnPbcfS7G",
  "key31": "1SnGY7RatcmtjFFG6VmhfVxeWmzWFPKE6hMbne3RjrLUfBGT9iLvj2VmAYWbYJYQfWY4VatjdiVGpPsCkNB3R6u"
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
