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
    "ZRsaikSQqPYP5Pg9ViqSxxpLucpE5C4FwuH8vmNfZwd9MyAKo4eEWV8qFjj9crNw8v4TFboDb5XRQjB1cw8roxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CdthMN5rxHYVvgvxutan82H9ZGmgRcuX532sm99pUaZWaJgAxWdLMaHkXHjSmMjnuPhUYzjH1GscLZrWsftMjXX",
  "key1": "2y9CKWarKnEgfHDjSLfvJtDMJ3kj5fvjmuBMgCgpvEetrW62Beb8daPfvXbQy5BZuXyE4aKJv1a1CFdQZFEDG12q",
  "key2": "3znEYtWsw5HrGBEXydDHZ6E9ZVVMG8asVpVULwEoPyxEeqFv2wXJDsep3hywgzqPwYWKfXUUfyaZ1pDyCCKTcdqX",
  "key3": "mw6wwCPeDshYPPVm6zR2fAnaJ3ZYrdw8rYPvdUHZ79rShiJGtfV88LNs1JH3xpkZiMLJc7AtVomDnZpno3A7gEh",
  "key4": "324Qxpx2tzSVFyPJsvusacfhyk57zxKBCJnzZQ743NFbGXJfkQUzbz18CbgeQ3Y2fyZmd6oqEBFLDBHbkjA7GAYE",
  "key5": "5LQZjKhdjxyWV8THz23VYU84qRY8JKdXK6TVJ3gcJU9yfmZszsgu4cqwSoZ3mGZdgwp7yRQex1qJs4mZuBRuL2eS",
  "key6": "5F5hdAVJWHQbzoHJii7M7tQJjkGpdMsado1PBDa4Nfxk7muMMKp6v1rJ9cgEhuB5zWAcmYDi7TeyJoJcrQ5BPvmz",
  "key7": "265Sppw5JWuJYyuudWu6TcfjuqyR3qacKDQ8P5XQwkWfjH4Nrq2A3N7nJWtdv9qRQoTujE7F3aKBBh1AJzcPer4a",
  "key8": "2e7TuX4bxnmmrDCdxActticaKhbiMDLEL59Nv6irUgNWiFqf1Ukszc5MaxitT4ePqZBnVBs1o3hssNVCYHsycJCx",
  "key9": "3pqV76g1bqUCs4sgWHbhHpTm3zmEEKjtCVQq793JYfr6wobK4WBN5t7RJcrQyn1iKkcFsFaXjS1dwfvkeu5JKgUL",
  "key10": "3VTWRL4BEee386vmAK2en81RZFXpPoedx695HJdeDKRztDVRTLDzTCrUuJNTkn5dsiigxgD43NLxmZRxCBKAPo6w",
  "key11": "2jFo1uBCNhsrVVTYV6AAiC6XPQsboTqcJVcouBvBMtBGmLmCa6jM7WvPY1uBU1SDPiBEyxu6KxV7GqV1zqmuw2wC",
  "key12": "4BTzVLFQGJ1o3pcgLZ9HHUSR2frt4pWRFaFUzw13hzaHFkmoeZsxm1WAq6g3XoBD6fxNjtmmEasL94QBoGTEXymV",
  "key13": "3SiHt5VVJeTxTmVCS9Y8u32BbMXBTSjFT2HZmzZfh6UWLDpH26uC1vehx8K4dj8aQ7ramE4w99eNMbuJSTQNko3t",
  "key14": "2b5GdZK83K5LAy5GrP4txvHtsiCFEUEMHYXiMwE4ujfukT782R8zGKmtyVd17cPECQ9p1pVo8tVPiVYFW78emHjV",
  "key15": "fLAwTBpZUWNzUTTdnPoHHJVdWBmBWirC3hkwvguamN1yCQYcRF63rJa6Vsm8ZKURw35EQyHK229Xu3YsveNJKix",
  "key16": "3ZGyNov9WKsDJzqpkT5EjXbLmf7XQ7qwBThv1iEzK9vduH2C5gCQEYTQNicFJkUrjds2zwtZocV9Qwhk74WVE8Ki",
  "key17": "qiAaYinvfHmoKYaFy4VhbqGdh66WSW3Zbe3zd6R1CQDBykfup3ptjwyhWEW99RvBKV4C4vWMEFaTDCuW6whJk8z",
  "key18": "4KzV5Q2FJTzMqmDZ1wzQRB64kYTwMZ135eNVnhrSVnuw4VZ3QHccVJK1gNef7PaigV5wvVLhMZMqGfBD16QEkuUR",
  "key19": "4MExj7qW1tttqw91vTku2Fgs3FSxKG52tshCVFPUhixWJn6XNVhhAE5pye1Dz8L1QnnLXut3HgNNgxztR785S4bP",
  "key20": "4yoUKypwUZz3qaBMhHZ31iqJhJwFQ3XtL54ZgYK8Giw2vDW2LhVCQWKQXn4XsSsMDMeQTcVTWisR1yRwXMDCr4Jx",
  "key21": "2wLjQ7FrYtZYhYzVRSrQLYcpfymE2gYib43HGp5RyjnzfzTFhmDHXw1t6qUKxW8kEoe8fMq6fCNuFY4wwhUAbfWJ",
  "key22": "5W4uvh8WjoT9KLkLBgtYxC727Nrhuef6WZ1Vqpbi3WGnx3dkU6mXywMeRQrPKifW5X2Ds3BHehfMsC45SGJM6vMw",
  "key23": "DLW8Cft2i3HcPfgwRoCmnmtTVZy2VYcADppf9SVJYNhj4o2Umqcjhf8dTtjYYvf9fLy3nUCvWpNHczgatP1sUvP",
  "key24": "5X6M89SwfZkHKmapQeWM3MGrZTsDqV1tDCitjdxFhg2VZb3s5a8LrWVPDsHFjLc2ctRV2ehFfEK278Eo71mTNppQ",
  "key25": "2JJedgVid16gmNiX5MZCRcUoAcbswR6iq7u6yMfCoFHsQKbktWCq2j5r79NfV4nHZYAyUfZaLPhGsqRDeCjQGhJP",
  "key26": "4cauYnpJXdA6XAkKyQkPqvFQBAoWokf8nX6hrhJwJMXh2fXsmXm2mbAzkLDapn9ovKDeeF5ihnwBNivPuXYi3BFp",
  "key27": "4xcrffj88SFCpFDdo1pGqbVvupatjGL91bDF88nN6BKWLDCA5TNKSPA22owNiNFzT7DP9C1oJJX5rTJekKU63miB",
  "key28": "5GZE8UcB5n1bLPzpB8qWjsLsaEKo9hUxbqRWaMg4adp4kjYVHU3PJxy42qoiGJuXQSFXoQJFsa4xTmt6ZvNwrVPG",
  "key29": "4Hp7Nix8FHSQi378HEiCYyCvtSxQ61xXXWL5vUX2NMQssa6rbqQCJif3SpsSNfaXyh1btyYfuobqDg4NjgeQTR1r",
  "key30": "5kAJrLPNADVqoS51Phz5rgFFY1wMgc1jQmZexvSWGtUrJyn1ScCt6iqiCbdhpvMe3VhKUmDhMkXVUrbeW8A7KTm9",
  "key31": "5tJP3m4zciaQgAYk1WES3J7Qp26Waep3H3d5J5mEvBKf2h12nMD4tiPZKzJUsanmbcWExoxNxYqSWXTzFXQtaaEv",
  "key32": "5RTK9E4v4r6RyotDDJWYKViUqrhi8po4aZvTL3MbVDPAYzDjHxnGcEaKqzM8XC4RF6PQRwzaTC7QrCfTs5Wdca3F",
  "key33": "36UkjVyiMBiSy6T3EG2AtgwULzFBvfjnLsV8z4nrDEdqKDebTJxEq6xN8E2eEtPDwSMX3rnG7wM9ZMFxoNuvNrNT",
  "key34": "2C6pyZ6EgbcASfyEMGc7BNDUwZB6Trda1bJwX7LMAAbeTD1AubBbhRhTbT1cyNva41fG5KVCMYwoc4nzN7ataQ7k",
  "key35": "2k9AHwjoJ15CHfCbe19tJQkF1Ea17pAHVswzBsLq55DqVa4dX5jaGCjkBEFwAJtk1uXWtGtkR5ohozur9B7K2oKW",
  "key36": "4CgYENUqHWAnWEKNvShLewXZCxDyJUXJz2pT3vt2D91qRAGRjstLBsRkVoZFGbN7h4dDnPv7jxbb4iUS5bLPNVMe",
  "key37": "3WkzkqScyJuiXs2KtRuYjcPuKWDy3ggpWxegorB4w7CYZDe9f8JozcwTipbWooHPTkcb3kGxbrY88Gfm7H3QFJ79"
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
