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
    "3gP8VDhtUKSe6XQb7oyLmtB6bzRUM9qeqr9hgrHyHzNQUqqEPH2vcASeyPHrvFubUNDEU9TfCUABEbMrz4eJa1G3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ere8MpzU2hTB8J29SqkBnMd8PxK698UBuUDiwAf256Uc23K71tKrxZ1nmp4gBtYkG9EQidDMcyKcN2W65nJ1KCj",
  "key1": "4rQCqe4PXjryDF2sENBjVk5n7sBryMJxdaUqwMHgoBQMkeakXeRcoevSK48gQ1UCFZud885bjCBEjyoVhCgMUGa2",
  "key2": "4Z3rVNMU5EvyHcxvYPqRWvBvMRiZY3kjgBsGPmuABERqpiZw9PPKLEWi7LM5vyotEwFanGmMhAPPqigttxz4skA6",
  "key3": "2vnkYw4YtsYt4KfoJmRbj4gRNtteLPrrs8KRq6SqWnPjJoGmUd7MKLJZYzUPkpcMiAZmcNs2BGdLA9qtt4rFSJCE",
  "key4": "5ZSRJwBjUrRmzJYxUuWAWRtjrBKYBYs4BpWQyzMVQtqe7QNKpF6mqBREg7TrHsqJCM6k6LgMxFGGnffUdoLfb3zs",
  "key5": "4utEiniT9Lyo2ccKc2yrqWYAGt6QhEnF2mpBBQyZbQLPWKew5h9nnxV7vkM34pnthr4nTGxbdaKGuxur5s8PKQF9",
  "key6": "29ZUJcwvHSqsFg5yQRVtNVUAjc7hL9WNdYWiHZK41trAhqNSjyjc9xDWjGcYvJ3QRbNgk6W79o6RBY8onAkTadwU",
  "key7": "4hs4sBwSDoNPLfwHCoTKyjUVPpsjMD4gr4muNGakH1QJEx4Ky3pukanPkz23ibL9JnbBKvyTZ3t7vbZuYTKu4hbn",
  "key8": "EgkBZQysFXZEwwPcJkiszjqaKPwcBPrP1cMYmGVx87jUS2VPCio9EFLm1x1NsSfdrM4ngCXZGWjwqGUTsoczPuq",
  "key9": "ZWo8Cj4tWPoMVczKvbcCvLWUMWueXctfDjsadZgxeESBT54nkBhx9vMMHShqgQY1EZ2CMTDeKSkXueGtcmx4nW1",
  "key10": "2VEddpzTTZe2bpvspq34y5r4DnBJaMfPTJDbkEbGsvFcg8sEhEffMaW2WD8mWCLdi4fi6UgSwBxp35YXvPMan3qe",
  "key11": "4zJkNrTLCgCSC3BPy3N86GSpX2qiSHYfJDDx8Ufut35z91V66WXUYRPmQNkrU1P71dzEfJeKEZery2HGb8Pw1KUd",
  "key12": "2BtNmcFzvecrTFzbDEy3zDw8wPDDh8FufyybV5JU6CyNtDqt9YdfKAG2arQuZyYZ4yUbZyAdQpEWdSD1sJEQELVq",
  "key13": "3yaoWEjMBpR8kHLYgxb9Y4TTtjFKMNcnC1SnZ9wizh9NxC32HDRBXQ6J3qVR5nhkh1sC5ro874jAwRb5WpTueci9",
  "key14": "4jZbvTbENcFf3EyWsR1N3dpZ9eXWMPqSaWEDMaF4zxuVNNf3jJxwMnPcSxn84wb4SaBPo1D8Tb2sKX6UkdUgAEYX",
  "key15": "5g63EsgCH2AFdWBtJwD3dRhZbQTxC22tW8VhZhwsqeUHNjApiyAewdeJJ38wEuKpx6JczG8cEDjMzcC1sTMqCrGP",
  "key16": "4fnYSAMgWbdZUSFNAJYBP1XGe9rFcQ11X6BazDVNgGDSNpKtFRZWHeoapco2pYnLS6B1VBQXvb3SRqbx2jD21udR",
  "key17": "jBnJYH5p2zTVKMDTYXP7Ss6QVVCWrhL592suE9hndiz3UYGEWEdVxTzFvr3NjjVgEJV1ebFjQ1EzGd2mn3bqxR1",
  "key18": "5kUi3GCogNbYizHdzPtwJ5Rodshir9ULcQMkcM5nZWvvFL7Uw9vfEY537D7eDeLUbPM6qySeZ2JiXSH3PYXvXJF5",
  "key19": "4LA1tqp34Jrq7ATcLVruYmgpgafbn8ULW7wPNdSuDs8seYESbLFByqdwza6QDpVdy5gVLheuhKYoALVA6MKS8AvM",
  "key20": "28XW8aJ4ZoiDZ7Kthtjy56248ePjYbso6u3vMRUtDN7vncB6APMQEh258ZuxPbZT2shueE9V1SR5BCRKzMzHGUp2",
  "key21": "3B5ug8Wf8CdqMDqPLPea1hgH7Wx3mwnuf5xURpGVuHAKycoav6YTEKLaxm5PToyb6yHLh4NM1Nx18mUXQxynE9Tv",
  "key22": "xb5jV7fW47bTWyi9whBsDDrY66peHcm2MAwDKhgmVNY8x3poVxBeW2jWx2XWDEx7BcMkcnBuFYRm4YXvPAG4Spx",
  "key23": "3RLZqUTnJpLAVxy8g9Rw75koRJbGFqHA1TZLFjGqJDUPkLaoYxbMfbAWknQYTxAcN8GaYMp5oq9TaxeyQLnUjnMw",
  "key24": "2wxneRVW5ABReFZ1jqgg9ypkXoJhyGkrXVpgKCPtm3hdLNGwkkcuxCKMifUNHDn2Lw6YZMPHMyUYpTs7zW7uRnc1",
  "key25": "2dcVvqi813u8mN9swjs54WgkVWQroXN3tosBPHLJhVoZ1G3TConVXs1wdFrWABGrSnF6sA4e7nWvSUXx57tcZNgi"
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
