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
    "2VHoJznUqfCvNtS6c2BpXdnJM7tjfxvLfU68cRKJDvqdSNF4rDYXXoKqw3Vi6ZrXB1fJixMi7x9k9A4taho9Nf1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5feepDuZcTLJhPZb5zEs2zhGpw1tmagihLA162rmcuLfxFaja6F4M5p9yPtupkbrmxJk4Cc3Y2CrNpDHiWxroasW",
  "key1": "4hWX8JP3AfQukwqooWudLuUHceJdVHZBnWDjgfpS5goPSDsJSErPGQxYHtqVn8rBKh6ZKHDcNoAC1rd746hVFNqm",
  "key2": "Ybfhv3o7R1uVWKpdvd4bE46SisooayrjjZB5gJxDAZsLKKEHAshsqftdoEBGmVBGmb9abDNzQ1sJtU5ta21uuev",
  "key3": "5MYtbgGK9qUJsm4CPnGjDeKnkyxybbjahoWVP7qobV6ahRduudXnQAUmtG37LsFk2DfvsERKXcvpr5D8oR4oftJL",
  "key4": "5mQCcF3PwYbKJZYDfPvnJ6uvWWkqrVeqhA5JyzB8JSbMmwAZaQQxqpSE4ZHLqNuPhhRhUyQrV6xRGebxc4S22SdS",
  "key5": "58SxAc9qXzzjswWM1C4nFivpzRo2oFqrniWNq116QoCrjDxHqgRZoqywySZighBWa99SE8q2iXVfM6thqazAvMf8",
  "key6": "3gyEJAM8BNND25Y9fpW3QXx5UyqhgpaprSnHZt4ausgitGbHBb7K8UV9vHCBXBheQZM6heXXXArkJJsywD5hcBEA",
  "key7": "2VPZEaVKUdEtvSmEu5rQcp6PrFqD81YJhoBYMkfJwFRvcefy2YT4cXVLBoEUXQr1mAFv1F7EdAJBQcTydNhP7T6n",
  "key8": "5Y5egQvLVoPXednujfu6jkZs5EQbfGhk5kBY4SxQRK6usepXPEdfo7A82LcXNM6UhtogydVVexuTQkCdY9JnJdRq",
  "key9": "4xf4BkdRPVCBc2cKTC9qCVZ1tWYQdc6P7qWZTscazpN9XjPXbfppJ8EtAJDB1qXmahP61SVQ9HqsnNELoMXG2day",
  "key10": "5fc3NsxTsL8Kg9CHPiA4ihHHjPCz9bVF1bbZizCaA8JVcGUDu7AEEnDkgpf7DMA1diC9GB85cZ5J7P7b8HehT3ro",
  "key11": "2KRg3yyUAa9ra2Rk4XMGsiWAhzuHhT4Np6XdvwzCCcyNJyNbGW8E9pg2oP3uFHW3XnPZ3LgXczo5fFLvDpV5K5b1",
  "key12": "2i3QFYxcPxPyBKJ46MierBaGPncNBq1kxaTuLN1jgxvHUcuzBUbp2sLvxd4noVZEMQzihYAJ4Y2QpuRQzvevTdDT",
  "key13": "45Dn6nUXypFHSEYng7CB9LVtHbCQz3ovbUjGCK4NwCSHKJxZbRyqNHKMm2qJoYNHvN6kv9egJVPBS38M64VK7tg3",
  "key14": "2VWgbxz26v8Wdgfqs3pExfDW7XzLhREhQFy6UNcy54De9mq1bTVBPgCfnb68bbASeRQZ6S8wTy4ZCt214Wps36jf",
  "key15": "3FWD5FThBvZZnZb61yNtowmCgCa9Ub4MMzo3RSnzPKBTsBZRrSr2ceLx4MkTGTRee9CmK4XyTncthAxuxUPoyKUi",
  "key16": "5qsKJdRV2dBAwa5JjCyCrCQEPtfnQUn7chgqjcfu2bJ3Dfar9PSqky2qZE2JSzgSJn8y5JSyprqrg7yXWfW846wM",
  "key17": "FR6JLoS5o6G4tTaFcttBQ9zGA3vo8J9L7hNyBhB3AKcXKo9bCyHknKHxAqo93ZjLz6VMi2JKQDzi7MFdDgjvged",
  "key18": "2Pd1ZmBD45ri8A47iL5WS3Ecf1qfrDro3Cmh3SjTCMUw6P2ZiG5fFRNUnn9VvF62YTVrDhv3MiiQtFjTohUV9XC1",
  "key19": "4b6hkF4LGFASt2sLcDqZbnFiWUvAZ9EFk1DjKvx5HbXe3oLCdaEXZZ1ajy6Gy4hK6JAXK3JT2uhyfgdtXhUizgQ",
  "key20": "24Pk25uLQb3UaUt4EDdBkHmr7TkMnHSUKXXQKRBNTTNdQ3kXRJoLrAzCKUEXwiAJwnKsr7U7bKJnVqypBeXob57x",
  "key21": "49per6uHuMQqAinBvkiJ6XLJaFRpMkpdvHcCTfgsxEYg4rcKCUL8GA98SthTt5sTmdX2kXJuoJq34atbahRpxCnn",
  "key22": "4rZXxwoqjjnrewRsNZdAojNpwhi11cNTUvekdMJxDJvFjmbHYwu6TEThvSvAteP1t2DZteXYHAg5DHn2JTKLfDYE",
  "key23": "3Qhij9kdX1ptqaAjQ8p1vhfSmu1YqYNdUMG3h3mrTVJeUoW11615HpFTHUWjoHov4Eb5iepbRG6CWsNrBCTtFtY6",
  "key24": "4k9fwzZjbXeXvDc3do3phgo8koWZvG8DHSum3MCrRan6xC9rkamb4PA7iPwvJtAApHaMYqnh542BHCeMNK5s8JvS",
  "key25": "5ccZowfSkUJoTEKexzdPBsJinLnYTG4m8D8irfURdbfQSkmKk1oRyggJNA77fMjF7kJBGnphazniBhs9XEKkFPRe",
  "key26": "24rZCVGussv5ZJ36aiUMC4T9gAZKn7TCS4wgBq4QswbVFG44amffiwMJpHvhAp6o3VFsh7mi57JSa7u3qWDteZWr",
  "key27": "2CZBRazqx1sMr6VFUTFwAMNpbPYHMiYL2K5RvFHg79oQD1NSkzrTDZar6bNQ5bho4VDYgYU1PJZEqT7CqecpAPmk"
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
