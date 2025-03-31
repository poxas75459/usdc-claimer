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
    "zja4ydeEqB1G23Aq3S4SodFRz4gTUXehtA78pGixdrwSyWtvVn69EQAkjWGuGhEiByrSi2osQNAPQpXJN2NQbaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W6zfDd2yYCZaXci68FJ8vEEqh2yrU1nB8VuT3v3Av5sDTANoDu8qCKtLzbimHx7UtpTYxFFJ15sExG8PmCgSXZL",
  "key1": "65N3mY3biU6KKHPaySSLxLKumu7N9T7RfqLRJtMRzGUqJmuuidkcrDNUcCiWvbHvT2FbLkvEmM78vMuLkna7YM4M",
  "key2": "5nHvAhbDbccVKnph1GRXynWyQXgDQvFjwBqSc32hUbmWrJQz6wMFtbEHt73dYrC2EzUqzGuNmeyCfbu77xXoiEhe",
  "key3": "4og3e26UBt9ZTugMknwA2dk8V96okSpnPseUYET7hE9APkwERz2SZaKSmQUEAdGWeU71WCeBNzdazZGZf33YByb5",
  "key4": "2qjEW6Fk38MgVJtmUNDHLC178HrXz7VGwoofQxGr533QTSnjDqhkyFk5QbhudUZb66bVRfxBHjnYhgxBVWh1zJny",
  "key5": "2zzXkYHxVtf7pMbZQYBWTJjwSPaLaHhk6tSSXEDpGVm6td7c2bpYg5qTqGkuLK9jA2Rod9zv73jHZLPoxe93nMxi",
  "key6": "Cn8o2jnr9xgXWLdiGUvAiNSRzhLwzsQqU2jrqJQjtvFn9P2V4wNkYsmtpDqVvk1C2gcZGq9VHVArFjJsWAhXej2",
  "key7": "4YCkQAnZkCS5qkJ8L8biWiqGf3ecxP6NJhU2EPW68rwc9y722nyvfDRheLFGk9QSLj9PDJ85WDdAKFgxe2oafYWU",
  "key8": "5wT5bGoVWmw5G92TSu111yXxiKuvzf7uiTSz8G7GEWWfY7jsatedh4fXJAQyrmj413QUT1FaSh9umcgpdPcA3ngN",
  "key9": "QGAmaC58EjkVyaQnx8XntF2W9i9Pg4AxdL8p63t8eZXtFrb6ACEVfg4gMWZZShtParabMrKsjnjj4SE4VUxvgQn",
  "key10": "89Lr77dDcTKQ24VzHD25sH7xqLap8h48VE5ez9o5LftofYotXd7SJrvNuEXPooVy56uUWaKA1jmNXgS8mwoCycH",
  "key11": "3A7TPCwTRxXJJB5ifjDreuUFXzaaLQcLmmLcq7GTZAYh3rQktuKfgTsVq7cmWxcjEaoqTEhYNwaVcYwXAZVoNTMP",
  "key12": "41ckf9LJVtZYj6NZ5agsUKECwqFWGzcxayaEDYnjCyaHLSeoGyXL4fUV5ue6nV7qknxYTmVrM3Ap7XJJYxYuKa71",
  "key13": "2jSCEtBcZuA2pWZvoBEPYi3t4N1cnZu9mLNsajqEdKmrEz6TnjgRKsKrG4W4uFV3N17BVXf2Mr4UQThrnKUGa35r",
  "key14": "bzpaS2Fx1YmymxU8XpxCrWwemGfBeSvU2C74c1TUjiU2ikqdz7yFvQyVBKHjXx8UKNCJbwkLWu6yVHBdnSbZ5LE",
  "key15": "5nfin8W5YSWVinhG1VuyXzdw5xViM6cVoYah3wLdVbzJUbRLBUXm9TV6dGhpP1ZSkJ6mwdi9tCUUD2dXhqwUxyAZ",
  "key16": "5j4HEZS27mSgkcokaMZEaBijhuNicQcSLojWcK2aENKDKwyKyofKp3RP7CEVH5m8DC96nzwhVgU9BNUcTvZjEKhF",
  "key17": "5sYxXbcpeEYsdJ8o3r3ikUJwQCHiS6Wi4AcKaMg5xEgi1fGHNDzF2aucvgXbucPNhffDdzaiWRu1kNGhM46LW8pY",
  "key18": "3Bf6h1XiGzdZB5WPchVYofMHW9YiHGpDa1jrptYTpnfxmRsJYFjLGav7SeXec3JjbWijUbTnceJFKedFbaEqNxb",
  "key19": "LFJ3SzqavDUH7N6zzHAJtNmTYMen1cAqK6KqE6ty9ubVuNhKFeJeXmTmhiH8FK47fLQLF6g9QG81AzDdjRPVwVh",
  "key20": "3bknEb1pZekfk2w2d4Ty5Gruy6PeCam2qyhxaR4bh2UGBaJg6XSWDdNiSaidV4B64bGSdpwAdvsCDQQWCRpKqGP7",
  "key21": "TeTzdtx23oNoXF51DvsWVMDNsAU297r9zdvbrRh2W8PTkCaujkjEo6dZwQ9T3sDU7hr3DgEkLhwYNjMtQnEGtKy",
  "key22": "5HWAYAJBjHeeEFmXTk5HK2hfT1yMNY5YY1XC23jWMEjGB3k9wUYM6UVxVNKoE6KpSuX5YPB9SvLMGVJhubK4ekkD",
  "key23": "5K7KrmbeK2EHhQ3JY2Lu59U3cJ6njr4pPExf7i9LHGjedFPe2UXGTd9NBhd6mjvmay1NUCiX85t6TkjKxjzW7Qro",
  "key24": "5gEXkZnQU5mFceJ694zWaHPMiYuGR1BsDo8ChwJaDwMVK231wTqDXL3Ynjd9D2iH9hsx7wAziN8SsTMmkXFEwnB2"
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
