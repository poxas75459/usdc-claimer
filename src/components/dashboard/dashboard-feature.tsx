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
    "2fN4QJkKzqgUaL2P6ecYA8NEnfy5xCWm26AGTLj51B2GoLhDUUgQA6bC7MfTcTj4BBmxkkMdpixi1USUqVn3daDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PkZmudb6yfw9GhWguEGww9J7qY9AhVAhuYxykHFQ6Tm1FiMzRWuDaRa5AHZFCt6SqWX2NZ5z7tJxdiZ9wPMBT94",
  "key1": "5n4zJCQ7mGTvyZTwU9D8UJddipfgtvFmDEzVWfTAmMjGUmvTeTvq79XF3ZYosYcZgHD9WStQhxuDFF3vGuDtPK63",
  "key2": "35eoWZgPLZJ8tTZvFEv4gMfRDpYxaT6rw24NVjnXcm4pBTdvYqxTvtGLQg9qcmvHnM92v76jU1jujj9wqWHqGg9K",
  "key3": "4NqSxDk8qPrU5EovxPCefruzMuRnnBuqRWfarfopciNGdAsJ8CV8KGxcEUNtfiZpCNJeQaKoeibPtDb4Vu586M64",
  "key4": "4U4rPBc4h4kStBSJKAE6zUTRVpsTp1sTYBCa2iqdDECja2qCSqj2Jxq11SihDVmGo5mu6bvjQz7h61uJErUsLb5r",
  "key5": "3nBBXGXQ4fbRbFGoCjxGZa8m5ybPqmHegCqVuHFYYSyEHFmpW8eAHXpPYyzTXBPjjStj34NVVLL7PGzTfNjiNTjd",
  "key6": "4LznDNe2hCHsd5WezkZRef1y3Wrg8oyxH6cN4Wam35bWc41owFJKbfic9K4ZH2CACT2sBsGNzHKjk12Ec5Y4pRfd",
  "key7": "2ZACXAvjgSifKFGpiipsAm8NGmFpvDYYRZdixGV3DapCSmaGrvL7Z8Fov46QQ3fiveKVEBvxnPYaHRByY2nKh2dp",
  "key8": "2nX4QJKRf8TDaozu53eDbwPtTjWd9JiwV6AU5K3DV6D3PXgR4ja5m2AwCD4JR6JefqQjDBsFKCuea7qQxdYhxpEg",
  "key9": "EdstrgWsgB9dKawbGkCTe3S4gLesMft58SBiTi92ugbpo3AVqC2AWeGUsJZPAF6ERaV6nWfMEWQQm2uoWDP15Qt",
  "key10": "56RL9J5KgKHCGxr6MEjgk4FGaU5Y7ycsJFPxj1zCPt6XJbKtWmpKfSrXtToeVZwRxbBmS5qfxsczFe63cWYZGHq7",
  "key11": "3xoiZDv9ca1ktNyzfkfv636BqbWdGLztpj8fBSy6BGdsu3e7pZigiRsGnXuRisC7EHPyRECGzDKX9dLYaYUNQg2u",
  "key12": "CM61bDtELqap8jZVhgJwCqR3SXh355EbkdfGPX1KTEGQ2yk6gP4e3yYBMK9PfRhoGzB1Kyjc5dHRXVfRQWWN935",
  "key13": "2EPxonVBdRMqgaHrgBRaktH8Wpcy67UoHuZk6xy58WKmEEtXzY36Y91QnSKCDq8BBJHEjqHtax6mazvfim3Cqum7",
  "key14": "3VuisRChThjdMXuCiVdiNrtHi4vqH1kGwNzS3t6eLu7JgC8F86y5XQt1JVLhQadApYifnYmnV9Zjtb177fnAFjwg",
  "key15": "5dr5x2JzSPuMosB736eqHB5nxCCjmaGJFy54yyYgHZomZXmort2UJdaqmrxdEy5LtVzRyK56gWLHLLeKDgD2GXJA",
  "key16": "5kSBtQDnuixPMud6LVthD5DQmFVuV3B2vwHgAFo5B6sN6x5rNRcnBr8XUaxvxGj9XGqDBsgncy5b4BDUCtFiQ1w9",
  "key17": "4VMmueQzhnkJyS5NVRA2CUF6DWPsMFrJRUP2zpPTUe4HASiJRjY2hYsEXit9muGFn4xVibXSN2p773RqUmbG3YKg",
  "key18": "3diUZ97xjNAf7QiNSG8pAfF1JxrFafz2YX6FaoQsWT2mszS6CV7TAYSTY4WqDj67utwogt3V9Yi5ymkZSMQ6v5S6",
  "key19": "4M1kuWcUAiAPWthU2PKq8b9138o62b8YWzqnZSS6byLrzrecstqvk4A6uyCrWteur7rsRg7vSg7DuA5R7q9HYnUt",
  "key20": "3afoFQXPdGdT4sW3xzDk9GNAbSMrZLMgZ9QaNytk9YyZHB4CjFGx2329WLSxomewY7cxdX5wG59qNrMMCdkREsKX",
  "key21": "w8CEbDkBhEdb3Dt35jHV9gYPc4UcAqnRswE1d5XRhwDzx3XLTpkmxmu2hX1XXmdwWB4K2ZQ9ptGjPca8SDdBefE",
  "key22": "2NAJ8A7prcNr4kXjcWHHKBCcBPqXYXiJ5wiJh6gpXwsSKbDZGTJSVTTWZVYYtJErXpGZJ41XFLMffGirq57MAaNs",
  "key23": "4dtpAKNM3xW94uChi3LLst5QjESfkoytdE1DAPDWHQwXasxkYAFoWBhtr2VXdTwHkZ7rkdnpuXgjXLVyqjtQYfTt",
  "key24": "27WRMepgCVRX6gu14iNJkk6ucmm2X3o6qanxR8LCqppfTuKibNwfRey6zTNtzQWxWztn1Yc7xctZTgYmymAif8PC",
  "key25": "5jCFuVqQdtn9ERWUjGmMmBiQESJKM1WPT7nVMvsVWdns6E5BZXPnDmuKdEV6SKkWpYysVymdEWWtwzP2qUC1va9K",
  "key26": "5ksdDgM2TGEdQoFqoKDpGoGwHY4MJhEejLo621pXdVuPL9r2C3nd6HLT7auP5yERrJGQuaCQExXkr1pCJqtXgAuk",
  "key27": "VuNXHHrsfXjEeCwWXQZyVNYzKp4uU3axik5pMDPEQ1Gi7EuAZ21SqvrQbjB7JmvP3cM3K7xabbY8eGS8hem8Ppu",
  "key28": "2YUbVC3rVDdJsX7uXvFsfNYwbSf2xaV6ZvTWNs2wedTnTiQi2cuu312DGGZDdvE4xvQ4rXxTLtLoTFFfFU5E8kVz",
  "key29": "4eHQkoH63jQBeKnLPRDzH7d4FLBK9BFf7YiRyss7oHN4KdELsroW1DN6L5eUUx8RmCyNUiqzbB6NxkKGD2xMBn3N",
  "key30": "vV2VR6YsZHFeGQ524sZ3XnFGwY2kseMY1UEPPQPkAh4H7LxtX2n5seAoUCFdgdcJQczAdsnosNxcM8HAcGtNX2F"
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
