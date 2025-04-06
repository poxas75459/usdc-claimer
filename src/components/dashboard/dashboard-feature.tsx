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
    "3eDDAMK3SwREqscjr7j7K5rB6gqqLidCMrbjZeJmxfjBbZknKhQwcz5NmawULvajevWCnwqNWfcqS94N7Dnfk8dH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oZyDUhHoMfxTqrf5V8eRaXENum7MYTjs95NVXW9DERs19QFFG3VVmaw8KEUgfiZPiceYCE93XTjBMNQ1cgXRwvy",
  "key1": "5m2xqznq6NcBwHFdUMQmc9ghqZsqPbQxLcUvFamoGnMq5FL5Y8ezSzpxtqLFkGVBu3kFDRc1PpbueR9LnsDmr18H",
  "key2": "5LoYtS8ro8o1c1ydd8xW49JMfnFbvidWvvhaArZcCXoPBDoAr4xT369iDFqg4xfMrWYwtBBqm4FYUcknstCwNkjg",
  "key3": "5SbptJe7gwrzK2kpScirdQ8N9SNHAk25qUvY7iWsHXRTYVWAZPEVXGvACXDseQtqpYwPFfJGhUuyhwXYfsgQ7AYL",
  "key4": "Y8qostHD8ckd1PwWuNxGNZD8NUvgaXhT7VtCBKrA45jwtikfU6zVQ4jSVj2BGpkeQyWHBSfXE3RNuzNYTDzD586",
  "key5": "2LeckTfEhR8dWvXp2dgiqafCPtdHvR7S1hU1RMPNqR7SsFEFy5hkLK2ApeULvgWopc6ac8RJV9PPUCSxtDFbcUQ",
  "key6": "2NXNVuSoyUcNMznitMcdakYc5Jz6BYJPcQtyk4QpWSksxxVMR5cnVHUzbjX5dgsu15sct8cj7rrvu7UX1LVp7k4B",
  "key7": "34XpCM3MdrEFuf9F6WEJFiLSEo13Vf6vLqNqidQCijkpEtiirrLxQcP85CXmKm8sG3gbJ8hfDvn8UpuCJ1FgGtYf",
  "key8": "36mWkPPFi9XXkmNSWZX4Fc3EjgtfasVLh41FGvzNFhRKena48obJE24SwwjgEdBwaXpkRaUxk3kHJNpSefYbiZbS",
  "key9": "4e9HjGyPCu2adiz1LotdjVJEaTtcgNfVwdgqDv7x5TWPGrerLoKizDtS5cjHqxctYoJ1meJSAaAD5qE28hr1Mzkf",
  "key10": "5qKCg9FkbfRhigp1u1x9sWhaz6nvREinqjpwUyuWNH3P2j5b3tMV9sXy46ufcGyrcejk6HxTDEEVev4Wr6FSR39w",
  "key11": "4PnXrXvsCSGricCaKE1gMDXp83FT9Gj16SJxVqPtBeGayeJvHaPQY9mbotYLwT69NnUwRWsuQCKF2cFHNivVMn1q",
  "key12": "63cefJ6wnkDWQDkcwMHQBWF7VsDbgkALhtWfgUfQN7WZdgsVoF4NdJAHKRemB9VYFgTg5aYAjn7koztspuu7sVRi",
  "key13": "3hefNzwx1cwKS6YZFknByMCqVAm1m5FgiCjBsCaWa4dsrtmgVX9XpftkXdujhz5VYVp3GsbVwjGqCH64BV9DMXKK",
  "key14": "55k3DhsDNQRMZt8EYX35CNjXVhrfuU6o4spEvF9NA16Ucyg6kDuDsnPKdZ3gN7RpDrq9N1m5w8WnNPW53ebNJ9kH",
  "key15": "2V8Kw3JDYMtFJPD9Cbk8HWipYHUmSFEzwifVSk2VoyorCUJLn3Mxr3hc6V3jUETJW9NzqZpwnXHh7SZF9eX7xdkg",
  "key16": "2mgtG7nPeCc8Znp2xaEcmMMBkBqv9ShyFJnaKjU39WYGT6qdVLt958jc3NXPy4hW4tFkL63fjvgNbXdTVFPe7y6Y",
  "key17": "3knaZ1Rw4gWQhzq7MRUzBeeEUsddb5DEgV5wTLTZUTFnMH9YAXTzsyQPL3q3ALPhKQkeVcM49nXmgqAR16UzAkQR",
  "key18": "5i6ZDuGjAJi3Qd7MbJ1nThnb4MXqYZXZJhXMNC33eKheMn3MD3EghQv11LHCQ9w3YPcXrgVsxStdrc2D2gKXcPQc",
  "key19": "4AWMaAUtmMraZHhQAc2Zfomc1GpmCf1JEXkFp9kgvTmvfHhAbYgpBwgM56i8uKkz9i2MvStL8CYCNfqwh3A67Akm",
  "key20": "5dp9kcU6ifD8dcYaij7vHnqYHSMgZmWgoZtRYMD3Y3GgZ5srpum6ZeEoUbT63oZw2CAi3H6SDii25myyskgPA165",
  "key21": "3Du3cdRWvFm5XfzJwD1qf41E4xukVCUpBkMtHLSUrCT7ssCHR3CZtyNYtNZAttBAvS5ReLkF1cnEtd2i2SLAyxG4",
  "key22": "438K57GHKJTQCeCgPE8MrrDJzXA7juVsDrFCBS5JUTXKEqN9cGq7GYXKEzw7Ts8WqtBiZh92yPj2jmnoZwpifgnd",
  "key23": "5kKeu1VPtsVe5yAVyfhXf6rkFA7Mkhhf3K9bWCE6JtbJnZX1y7RZQWbLM4VbpGba5BM9NKmppnpsTaMdBp2djide",
  "key24": "5JeJM5oG6DkqSPK9Y9vGcjfJeFCerm5koxynWgubsyxpUauUuVfP7kSPN1pb939Mt1gTGCwfib2qtb9ZbKmH4DWm",
  "key25": "49x67yN5RzBcan1TpjzdP9DEJSBS79yDaYX3hrt1SJ9ep5j7fJnZdfA5Q1qhCa8tYkJ4DtNPuJbvhSCoQBapnUZd",
  "key26": "5o39FgVhBPgJLinTqEtXk7m1y4diEhtuK2av2noJApSqPyee8yM2Ju91jBqbF1V6j9y53zQ5T89yLzuVp7UixS5x",
  "key27": "4G2dRpfKKzptv4XAag7RMPG5JSxPmVYT69aCTgJoa2VsfZKxuTYGphfdECCSMXkFkhVYvERmaZayvaWe1pNyQ8qE",
  "key28": "5opATudhEPGnJi97mhh5JGiiu3vuTK4dFhXcBUA4NZ13ASX35nQoeoNxw54t9s1egJXTLvxV8CSAhvKo1Zt7JAr6",
  "key29": "2iusQ7y9uNWELSURS4hYNiecwPyZ3KpEF4boS2q12EamjrPpbRwLu2FFvriapaqfwJdNLh7TST3qFrbuDS83LvzG"
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
