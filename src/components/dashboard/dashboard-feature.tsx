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
    "42yrJbpzwjxRY6HuvKBnK4EtJPNJrcWFYhGaJrQVAgEGFbzbsxRazCsdYv5Qgk3XdeUHwpt1pr9ysmEsrBeDsyas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25q7FXgFhBgJMikVQqkxFmERoUhtA2bJCP6Q4aR6a2ApfS7ADkxx5Sp645BwM9ZMYwkK6HNBnZqxv5YN7XJJj6Yj",
  "key1": "5fZ6tkgXYAQA6d6kSaYuyXUk5LZehTAxW1vMpcVEEhUJk31wVmNTZwGZrx4qf2G1h2Aj22zLvzjteQJNFnQ3BVhe",
  "key2": "5G5kz7o9GCaCGUZz4jCuCC4a17RpirdjusXtcq36BgXi67H5GruMVpZckD1siFgGL2nkFkPtnPTao4yfopyiYn4T",
  "key3": "qrngmJdXeEs15ja6TBV3TcGcXN38BeHTJMm3kc5Mtax8686q6fbFrppNpuwmafRwJtcMJjPE3UwTZ4VoJczBtk4",
  "key4": "2DX4woVNjUoN2uMBC1nEa2Nm2M9fbpyhxsFReChT2VQmtp6igr6Y8aqz6hneUUSotUJ29kBS5V3u4VK9zYREsAyJ",
  "key5": "4PAfUyKXPGPVrdyLMgUnqQEYCZqqYXSDa3Uuad4q2zMJGMkKp1GcwTNW6wUB7qpdfyUjpZmS4pnuZpyhKioV9aoz",
  "key6": "2ghjKWz4gaS6Kr9aDqJmKYjhNz1oJAiJmLYnn4VrLMjngwFpturvRc1Z9YTL4deh7rrVKSgYiUiFvquyj9i9Yx1N",
  "key7": "3tnkgrRbPiLUUVrKrpj78uGmhdVfE2MNi88no7oKLc7qAMZgStcA1vNMC6AqiGxa2nNtHJHH53wFS5sLQdKudXjr",
  "key8": "67SzgpQBrtBasRyXuRhh1BdEXejLLU18t68eG1MKbHCfaBr9PEGXzMeVQLyiW4XbV2GwZeZBjM2gL8YcDCUn2XSq",
  "key9": "3Vb76cyzLM56agdzRjmCV5hu47p4Kc5cXbGW9wv3Uud3tBN2PDj3wzT58AEWTLLHW4KAgev79awYTeFoauqXWyjk",
  "key10": "38Cmd54LfMqDapbaWr7Njybku2ZoNHVLZmSUh8LQXR1ytE1SpKinEmHFUHuxaCzsk4SHZGELtLYG1Ga1tfcXbVvc",
  "key11": "5zJ2yhkSiXFZ2Vidj3pxgtJteSm3KM9KqFcFrNJoX1As4dxV8nMv6xQifrLR2nEcLiV8LonSkoD1EQrBFsd2suBd",
  "key12": "4ZWxvx8y1tVqinPMDD8i2ko8h8HTDr4eM4326i2ijs3ZUHhkxwRHDQDmphqqx8Kpw8ho9CX3c88rhz7nNqzv3UUs",
  "key13": "5Y2XcCmCZp9JbpmBi6Jj9fedzZbggrCDaxdVyRmDZmHbwBw7XMdXkr86xseUreusnwkCAgxZaRpiqSLdYgNqArFk",
  "key14": "AXSY8PZ94vMZNh6EDdUCXC82oyrxWVdX7hjERNweSUJt7tNoN53r6iHBEkowhTQg6zkN6bnVPzBn3TpKRVonaRJ",
  "key15": "2dRWC5zwhUjCeffQ1GvG3L2Ps2ehJcYsH4jx3FpKfpbeyKnxgCT6dJzjza24QnV7JXnrEhw9dELj7mGm7GPu8QJr",
  "key16": "53zzdppFgzB8VenWP3wjhAM2brmZTpHMtUAWJDnrBYJuoNcwMVa9fnuaFv19fGHc7G6xhdUb4hDj8BAtSaXbVdTq",
  "key17": "3Dh8TXhSEagGWz1zRkJe75CCn6WsobikR8kcxYoeoQLzQjx9GENq6yUtCxY2bT2dG6YuhvVVgefV6tqeGV14BvQQ",
  "key18": "58Jhz49vKyTKNaFNCU5yxTP3dcZqkh5ypQJdrkNoabhLrTSj4Ab8kkWg5KDCFFynpsZndqcoUiDo1cUXfGJUCZVf",
  "key19": "MYJ48cVgqpN3GeJBonWsiaacJ2vLhsJLej57D6mS1QnqsxiG26b2fx8qu7ZzEh1WyfGcUBLyxeaDqJtUcT1jh31",
  "key20": "5PaAbDEgySMuo6au8WLzJFYRPNznWRoNC6wsmRWpLZErf1AuhQoBc2sbq61JvYxZiPfob43a6b85vcuW2vFoW37d",
  "key21": "4e5ZFy6H2J5NQtZTQCvr9UqpqQK1ieargbPMgj1jHJDGfzethDkLmvSWBT1rfKRZSrzWXfe5CYkZNocKidMhmEYe",
  "key22": "3sdMthtGeDy959vLsTY6fBrdvgjopfXSMWcf9BNZsJ6rjT7WAaw8YLD4L7SKTsJjaXnEpuGt8vmyAyScrdg2RWRg",
  "key23": "4N8CAxXGa6iT14X5G39Qe3RSbDPndvvE3UGGR6QdKhuHJvrCnSeZVPPD5K626KDVBnqFmQxe1TFsscNPC3Qk9nZd",
  "key24": "5jxi3PBEa4P9xmkoMXmap8xvUJ2Pxd5nQZiDaC8Dds8btBevgZNWDXg5m62iR4nUbttdSbd9vA87qznTc3NNxW7U",
  "key25": "2uUsuYA8BgKaABZ4KVHvS9N18KuyYXSEkXfPf1WMoWvuFWkVZGefabAauV4wAtrkkWu7wSrPaPNiEsN6oHBNtVBK",
  "key26": "67grJKhfkbwXvEcFz7Syqz2gHuK7CbBKtpJPJxbDc2BJCizy3Y7M7edQne4pKNvPBFXjDXQkEvMPGqDr1XfHATCi",
  "key27": "2gcm7YamcitggNtGfVPG9T5oVjXfj8zv9bu3oq27racpkyDmRKYFoHMzbRHwu6Wa9Tc6ECZ7ci7Bw3CfBsESHA4Y",
  "key28": "4NNn1KzKijudpT6Yp8vu2S7TsCSQbwGvCtKdw4dCxcexe1WjWzNu5xQBNaQarma3nmWpm8Sz6jKP3NAsLUqgvx8e",
  "key29": "5qgfFkAu42fyCLXiJhtbLxm9BergfLmoAWmecVxa5jgseAyK5VCnKCaMaUGE9HmxnTjzv4eoBgrTsGRTL2NhW2Rw"
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
