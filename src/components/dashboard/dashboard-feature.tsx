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
    "nCtKcRKdYMUGj8WAGa2MqJiLmbc5LRp9qzrv7Dg7HqXCG35v4apXC9cmCAMqtPv6Xpy8G9Po1FqgshqX36tnt3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rhZ95ZUsdQMSYrRuW3NSAH2nEdU6J4ao8q82rpK5Z5kJTJCD1zS24mmDg3r8KK11dcAxgqCisEH3Zxb796nnDsn",
  "key1": "3uaQqTQYaxRz57UgdyhR5zFJupGthcvgdVE1ZsZWYrD7uxdViLSSRKWjmuXqWMWSeghy1Um1JsY8hQMtqAjuKhEn",
  "key2": "5upUA4S4rf5SxRFYhn3ppKbqAwApLKT6VYeEq9KcTR9pBLYE79Wu9E2VaHKtrkaVEwhm7RpH2xj6XUwqGeD6BScG",
  "key3": "3MPNxYQe9Df5KapHKxVGZD6duCUEkUBEnzCoC2RCCRAY2JcsWDwKKjuDpuC6a1QMPsLJnuhpZbm9N9ubpGFvzFj3",
  "key4": "3axEmRfdFRNtFiTB5L4ZFVwhq85GR76Ts2c72eBHsWHys1HTxSh1DuEEhsNN7BoJH8TNFsDJfizHYdAzu2wc3FP1",
  "key5": "4hnh7MHsDZJ5AAZWfwmYqKG9yFdnsQRMqDcap1BESQzTkTiu5PimCWYamV2S7PJaAx5PHAvMaG2vh1Tn1nVEfjVy",
  "key6": "4sRHDfw7wqkfBjBR9rYFwQ7zALuKbJGGX8bSHGyRtPmGyu2FKKZE8e1dgKxi3p89Lynf3yG9fLy4SoGWiqxqKgZc",
  "key7": "35J3G8ZaqskJ1j2mP1sAZpgbimXg7NAtUmKfLepueP2WTRWg8GVYqaNZDMdXtkdjUpUGEP7sGRatLq3Ahi6uNARa",
  "key8": "2AeyYkevneVzXWK78mJHZH8DG8vcHyKKQrR8u4Psbr29WzZDA9c8ETj2G3LRBmoxsmQR6K3dnXoJYTbpTReSJaZp",
  "key9": "5HyGFsRAq6X9QFDPxDdg7n95os1GwrvwZPDfaHSzanQMD5mamYnDbNHfgHr7i8Qu88PpR4SkSbgZ9Heg3w4dQ9B7",
  "key10": "66ShwH3cZGZMWLVszaTKErsvdg2CiDaCEVvhdXEg7p3YHpK4A1XPbLTjF5BqVTV43nWWGZUC1s4dKE5bkX6q3Kug",
  "key11": "3i1zvRw7EvCRYNSTnnF4Gd633BTCZkV6m62UMvnwdybUdVAgxSi7boSzJ1cWGT6egyYshiANLHVXgFEZ7rpkW1Em",
  "key12": "43jb7MXRyczLkZaHJAWNKfcdUCnDQFKtVTn7L6wywGYZmGShi3B2PzQj9kXdUKmK3kXgzSfSdKY9eiroD3cHGKND",
  "key13": "65x2v6svTeBpukyC48GZvJR7XLkJKmswMqkKTeA18KG4h98EtqsAqH4ZtF3mmNVDa8j74PVQpC5tbsWhrAmXRvnz",
  "key14": "H8Xk3CZU1vFvpu3aD4uFDfpv4m4629Dts1GqasnxhVJc3EZz82KTVsMp4eqSWA4fitQxpDX1gboFMXRgzHz614f",
  "key15": "82u14ibxjH7hJsa94cPgVfF2dupdJF22kpAPjYKEXQtzcEtjJfJs12z3afyKKw3E8be21oFHwdznJtrfWPUqD3X",
  "key16": "4Co8bzcX33YhkF7dCmxnHLWB4ivZLLhBHJ72TRm89p2nEn4R9kzaqyEEGtnN5QjQZajmnfw6y8MiGGn5c5EFpPAF",
  "key17": "5yWh85j6wvmq4hQiRftfpWcUaYL8odvTeWKiLvCKBFmhRVbw2KCUQrPiyE3s2Uuni6ay9QBf53dLhzF3Vyb6hcJt",
  "key18": "4eMzLKWZAzpaeDMxGxfhScYBNojXgyFKt4nqENsCutconYBerLsJbp1LUrSpdNJqSmjwsE6w5r6pVMXCZGi8zEdE",
  "key19": "3syzVMrMdtua7392M6QG9iQX3MkTdCWmVCWzkuCAWSe4CX13bp1rshLsWgLkKjkgeCA6AzrHBvyEmYLysiGHipFN",
  "key20": "2oxAr7yDHuHpuUF5LkkEg6DRViTjbyWJgkgiwH91r8Qkfr2Rdz9JrXJUrWXBaXebQUA2C7u3RRCjtJbFVcwCPc1s",
  "key21": "3zEdgj3EyRvVUgKp9KAAp3MTibftt1mhwJt85ikKg3EzUpopN6PzJBCQnkRCLvvHDz8WtimWgQkS5NRXJQaqbFi3",
  "key22": "5UVw85c7qc9VfBdYfhjoBMx4iTj5fgxqc8c6hnwZRJABL6n9dVXH3fbTSA4AoS1cYjZNdn3vqjLYHSEZYAMWvEED",
  "key23": "2mKvcDNWGSDBPV12JgxujktbAYH297DsPGa2p3pdmxzdaAB41PZqqT4JRB3HHSzTTEykdtEww1aXQKb3ZTNBchXE",
  "key24": "5uo5DpayAJCpwGjxLacaquG7nVW7Wt2R5dNARqAL4HKxDpNwN3cejEXpwHtsz8QtEKPCEKGxxQWgGrD7rVYJHP45",
  "key25": "2BPGP39R3mHB38poHrcm45HRh3Z66EBr5m8X2EAMYLxKRM5FkUXWfifL2wJ8m6rXWa8Yd7TFZrumQTBL7ViPBLEW",
  "key26": "2pe9gR3sdUe8b7GbLMytsXdPJhmUvriWyimfrBoNQz92iqSd6HJsEso8g51psF1mMP48gLu6TNF7wW9MkWZyARaB",
  "key27": "dmoxCunxMkq1fsMfPdJybTQV3347bG5iQLw1cJJh2gBPW8qgXxbgA3WnSQEe3RCQjRDDUMbaFMxPvowPYAMsMkW",
  "key28": "zWGdXMH19Hmf9HsKa9uF7EHZJDWHvXJE19qvTSovHgSnWKjk7rkbRYReFxhyqeaotz8iXSPzEy6th1GNx5Jdwwj",
  "key29": "5FbuJ6XX3g8Ckytox65qYdMb6atYWaHNjoYPhQrDDycH23NdbPsePnWojw91oPsTy4sEcWb62jpJmoPYHBxGVY3x"
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
