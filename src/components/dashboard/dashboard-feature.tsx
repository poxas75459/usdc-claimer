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
    "4m78TE1jnQymFjXSnmeybJHuSKtj7NFaZSjiHV8DTcXkDbLCbYnSRjeSMte5tVNaH11gEEdRbr1QNYM8UKPv57dd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G72t95Xd48ARZWVPAhdgFECvqNymgaWW3sxjR4cR3TazoNy2dbuD2oLN7MTKkv6epvRmGMsUefi15xEswMe1vuw",
  "key1": "MZwymmYQB8AMDgi6Vk6XDqmegQBeSKcyWkuQ7uoAnsunfnGxbvrYWYYrRtdXDRuG9UsB89TPnVZtNrCzPYgR9Wh",
  "key2": "ZT82dJwTafKtiTawrHXAvZFReNW6zH8h7oQaqQAHn1Txyt7AsdoNssMxA2FJt1oT5zTWBN9G8KiD8nn1sJkxQaJ",
  "key3": "2VnkqND9zW8PmBuxqnbS1h6vV6C6XfDE6Y7UFGsqyWjb6D3ZS16q6n98T2DKGaPwr3iKmJ1Mb7N2jyufebHAstdT",
  "key4": "2ynt26oBEJJtbxo5usqeM6eRDscsYTJ8woiU9GFFUaDZLrgCfCxYFempxdx2i3Vg2i7CuyWk3vkyrMZtWMM1wnQ7",
  "key5": "kHmAxdkrnH6m9pvLDRx6vKB4cvrcgF6oqwA8ri5kUWmRnVhq4TpR3q2jwH3XmE4Cq2WmBsDEmsL3enX4zyQL44c",
  "key6": "5bRZXn5xrej6LFkFxuehffA4riPGm3BXPfhg1nxanp3jiGSUD3EYNdXriFdsiGgQRaGLptFfPCw8dfAsaduY8wmp",
  "key7": "4hujKTaZuZ9AqMtan1pCz4zrK4p7a8SgRRzvbgAwjXwKXLYDJsMLzXLS3ANaeQuvwvdnnPi5NQdybgtYyGHfUMbA",
  "key8": "561L5dyqV6MX4E4F81KBuULbadw3eQy1ttXu76MrGAhaP8v3nHTvnrbuwx23J6E8TEgj6yY6AKjjmVSjcGkH6UcK",
  "key9": "4iqCbUBWNrWRmkDxqDydJbKhVPu939wVGVKYdDvtBSX1U2PtZ58ko9WJuCuYnNGHK2cBF43xPDH9ZvqqKaGqXouW",
  "key10": "2tafxZxvkasY5fk7TxpTcMBq1FyLiwwurcpZtv6k5ipscCEKFi8h2qo7YPKoVzwPiAEnem76x6JTZZQ5ypYmddZ5",
  "key11": "BzSCNMrEoWfowfYz1TihCLdXji8h6urxRshJ7Y3DH9a3cQvB3cEwz1ncnFaNvpuStYwBVYYv63KZqqBVzzxJMQn",
  "key12": "4jxXCSbaEJ65sGshAc6NBwSyKS1KyZkoa9LfNg6ernTjtD8RPbWvuLciLMAtHehGakhaAeGht2kTyYHiAR4zpP7a",
  "key13": "4W2syCsGhVRAxaW3wbcgXi62Gk8djBfKLYyZmAaVADq8ByTmbYoR1YxYjdeGe8P4BLSM5BZxUyzZMPfzAq3zR4Qo",
  "key14": "2w1ZNSucKdEpjqFFWebhmtQtDZjsdNgxifEX6mmi5A9bTmsxsXamwDC9YMm1yYoGMnn1siATcZXR1yAfeP3e6Bcj",
  "key15": "XNSXQWuF3XHLEEwYHUdbXxDAm9HhHNgHVhgYFMyBCtUzQ9tYvKT76hEuXU1GVaUdN3fagVPgwBkGS4iHCaQtyn7",
  "key16": "65kj8cSe6nNrrAxRoPYM389sxrvQS181ThpMwm6YmUcH4r4zoWFqTxtXRgvs3rG6cjM8oZXeLD91gukxPozk8JrX",
  "key17": "3FDgjMzcFJshFyhNuyPeAudoMqHXintnMFxmqRCk1qXRZQHCXLHHrtUm2FpU7XCzzSqs6SGN1FX6LRx8QEf1vQWN",
  "key18": "4mPQwiQeToqpNZaJjbfsQzXQUxzZ4KHLHCPGyKGBwTEaukp9yxuu1YoqxKunTy2ShU9HUWd2cXgz3rDDsmwC2Z3S",
  "key19": "3iNPDiS672TpcGwijVxStbt8mms4oZ9mg7NFCf3LyhPSaWz19PxmYFtSKZwBj91u9HA6QBZpcnQeYAsfsx1XDJaJ",
  "key20": "s7Z5ZQTUku4wFv9qt6doGyej4Cnuaq1cMoJU8UadNce39W4x7VRQuNBXYkKFKn6ogzSwyoqfRx3cCCk1P8g8RT8",
  "key21": "Jfz2Yv3XTTnHo58UniptycKqXenY3EzeWxqWK3vvdLFeA9cRzndAMtrW65sffrEjxGAFmAQVB4PvbA4do9G3coy",
  "key22": "2nT2jd6YnCQaLLt31TLyQXpJd2wHpzAJkHTEMCmvC32GXPVQEshBdwnj8nwYndpH55UGHmXpQSAKBUvyicW5VQDq",
  "key23": "3YrJGFRWLm9cuSCXzyumnEYC1zLLS9ASQ3rmtE5LyRCPhZbUyGdKWXLzjv7C4Jb5Sgmuvi7qdREKPuaapSze3CQs",
  "key24": "2cJH9W32rVV4XKCTEdbb7hecv6yvpqd24phcCWmvhUHZnB2fCmuC2waqffWLQsDBvBbwyA4QZMCqfSx7nEBQMCNX",
  "key25": "58Bu9A2zq3whvXa2KeZCmJjysnvYDG9ye4ScDfg1CL195bwQemim6gSdA6JNKTU6NLW449L4Cev2q6ckgXoNgaEy",
  "key26": "RdmWC7rj8sRb5bpYJbvqC9PTNMfZnZ2GxmwePHoCejPBQdvoBgq7gPqQhme8GUVGu5LeNBqUbG4iG4TTN362d8V",
  "key27": "4iLfeY1uusyoTCPibnTF8cxDmShGjmzKnoVSwNATPJLY4prMb49Ei2k3BqjQUZ1p7aUDLVAbnL1duAcXYLpXkBmQ",
  "key28": "Pak6DccGJVTZzDMdoQ1SdN4eAHpKokwHkrZUFtmddhj7cvQdvCZTc1YsKk4BeJ8KprvYertZfbEpbkmtUyRR8vW",
  "key29": "2sUDpW61Mc4dLRRmv16r1SEvnLkXriBnKVUR1uwSiKQnEDqXhtMsE2Sb3wx5XnndyAvJTZZN8S9UL7Mh2TpRb4Gj",
  "key30": "2dNDxvYnQgk36gyuypba1iFBkesBCKvBipEuHgAYQmrX32wWKBV4LhJ7sXgvGd9MhDzK9mXxuwTp1wbqrBEryeMf",
  "key31": "2MCfBXMAkEfgWi8ckM9yxgjMdZjjoT3RjpV8XDDeW2R6hDu7TCtRkrFwVgzSAsdyvhC1sgcbxQbiExeyjudPEaeP"
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
