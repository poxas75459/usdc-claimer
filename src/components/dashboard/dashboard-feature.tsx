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
    "51rXvWAQjVVmSCeNX1zSQcXYKDNH16rWhkxyRwb7zeE5KEabHoJQkZd8Ss8EhENaj96MNNKERJwWeEZZVXKK9mGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oad7hd5dDEyuoYWcn1JxhxB6KKF2KL9rbSKyCeeVV5TTyEd7F6R67egHubriyNLYkCAtnssZnkRp8KyH3Qu8GrH",
  "key1": "2aajdk4XeD1Ry9DVx3rDqJ4JGqXdJqaVTjvqYTZeMLdsS19rfF5Qo6HQWq6UXMWr9PzV65NdoSC34wXZKwabiogJ",
  "key2": "3FkzzDcgvYW5dvYN7RmwBLqTi3gcsai9qMUmPEqiGixREAoD8xPQZ18LAn33NFyoKXLLAXprDxRfnkYk2TDuHsqB",
  "key3": "izfN69qQWStxJQnieWzzCSWbQhxrVNazA7dcyBienwLtYJ25QxrUYnnVjSquSBLujFgb82gkSChQqQ93FBf6SRT",
  "key4": "DiMx9TTaG6uMnSu6YAzCmdfVmBgVAgeBUCtFGpPAvXE5VdvWJLwCsC26cisE2o6U2fWEDMkUaxFGEAdF686HkgW",
  "key5": "2JbdwJTTioXuqm8F6cUx8xKAdxU2j9F1Y3M5VRFouqV6mumZvJuouU5bhT8k8LncfMcxynCb4o3HkyB1Y17iM9jE",
  "key6": "4eDe6owP99F2dVywNvzdZGPq9ToBbA71xvJ4nWrPrF2ridrGZVNDF9mCpQvywvAim4iimtvTFVa3Zr2ErWe5kcPs",
  "key7": "4LAjcWeYyXoFLewBHGxRASrqFyquZoFkmDJbF9cFSxDwx12Un6VVDm34KCdxjfaSFuXhahPRYcXSQcif8N2fjGJs",
  "key8": "4FDsiGpmjshgccXQ5D9TSC2hGjertQDLULJguBbcgQF9nLBakbtukoYPZ1gH6aYDCQEkBFQXJxdvUYEDrZsG9AvN",
  "key9": "3BRbhuQwMHUCEt9vL3p5aHVMjm2VPVhyQrFP3MgrKnYgfmhoy4GWerB54xBN1tx8U7hNqaFE1nTtSTj31xuinRD6",
  "key10": "2URzgwtuhYGY1ubHBk4wJSVUfHM1wYpWRG7oLhFjMizeja3uVRuFxX4tCXfbjKmVX7NTG4G9jAyWXNSXpWLVxGoj",
  "key11": "5hV9FFu6ZM7k1NdcdQHXt8P4yo2yAP5AjmP4Y1uozu4Zk9AN3pqW6fuiZY8wHnzpnzrySddBCZ9NmXXo18A45Qto",
  "key12": "58fL7nWgEams9C1G2DgbrVg3NT99JxoGH6jucqQ8mvCNdYDxfNivZHLjNmngcZzjUhmvyP6E1QdUkbrCshPjvB9C",
  "key13": "598hQFEpryAXZyNvyVzvDYMhND5VN5TAnDVD2Kqgc9X3Jz32BfJQ1RnebBJEHdMrEPm4GidKyLEH227gjJBYo8Q3",
  "key14": "549P8s7CLo6cKx92thnYTBFzrMqiaMhj9NZyNrVpRiYqvhC19C8kAyFHenfPwgYeA9miwfk9eDsCLEPAUbepXM3C",
  "key15": "3jntf3bBuy9QBhjRwqFp9Pd6xro52QcdNe47UKU5tcuR9GXtA9obK9jA2UtoB3fRDUZvqK1mbYkN8Av5xfcNEtta",
  "key16": "2imTbtd2BKY7K5A3hB8XUijBfezhafMWwpebQdf4T5EDuWSpfSLgBy6JZ21SDBkYZ3QeJaQXkNaJVHuD5NY74nfw",
  "key17": "4agH2j57gyzqAqrZziza8JV5RL9bvdXUdLK6mhHaRiWVFiNDqciJz1wrvhn7c1xy9PF2isUVTcXYjRKNQ9j27mmV",
  "key18": "2mbjWFPFY4vQa1HXRPq8MQajBG3borQpe4J33JSZBjDJvRbQZpNZYhWsW5MRU48SDiP6t3nmi28daNz8d6aedGGX",
  "key19": "4rwGKkwai7D3kpMm8in1sKbAtimtcmqH29pQEQ2vXNMm3PuCSnVaPntaTZNagjRnTgfHRqK5TcBR3xVWEYUxkfJH",
  "key20": "4HS6Vgd9ueZMHzB2LkN7fLLF4xgwVnx1p18i7nSgDnzVmejQGLdqAhB54c68UoDyM123gQihguJdZtE5kQhTY56X",
  "key21": "61e31FLZ15n6shXhd5MzPCtYyN9HhjHAFqbCEnMTAVTo1viVCUQtHYGZKkwquVNcGo2w9WWw7jompPXp3h9aThA1",
  "key22": "4dsZKW6QzEpaZrM4AfS2EJgvUFX4pgZa2vnYZqaAQWp2TUwDf6cmn59zyPezL6WEbJwgLXFmG7cDKhtSuvni8QBj",
  "key23": "5dazqTg4o5y6Kp2akyBkV3cnWgBe5y8BaUARVwU9vuxjfc2jrYmRjqLzTHc7EUmC9fxPghyv6yoBnNMntUtGK6fY",
  "key24": "2auDQj7VyWLDsaonUXRPM4RfvZWpYFi5voPBLuom7t6jxjSD7AiiZqrfa8b4hurjhrTbtnfPmV2Fr8FCW4hVEMrD",
  "key25": "4sfJa8GqZDyNZeqQ3VnwQPYXyM9bb7ZKi5erhzaRZSMANwBt14Zj3rpRESd3b3nLJFMzErwTdGEpF45ci2Kii3s7",
  "key26": "2WsQquZvMxnWcoGRbeqCby2VicyhXTaFJVVap7KcsuwgTEqDMmNiZ8a9uiz73tK5poK5gtWivR7CPZa3fDxAYv1K",
  "key27": "2BxKU5gue6vdhsWo4r4cYEft38syMqfuefjCnyJyd8LU99bztT5myaVJNRE11rVrT1S4eUFtJfFLQsjk4HozHTDE",
  "key28": "57Xc7A2xvYwD9Q5FejcwB6L1saf7JXTttofdjbAfRqBDnJbY24b5ymP7bz2qAXg6tWgbbx82othwJoaGuEWax2Wj",
  "key29": "45cP9ubgN6zxiDVRWU8cnzpnU4Be4RuVEwEFMqh25uuctbAqa5tKa5jsjuMRPBbt7h5mcbCayJ75CkyCrqSVqE7o",
  "key30": "5RaZ8dzSpXRmpiv5kPzA7WgfTLX35r2zuvdqC8ewhwGxB9LaYB8dK5XLeM7GXsQGz29w4ABx9FJ6L25s27Ec9amV",
  "key31": "4uctZS4f5u89FcQ4KsAHBiXBbqVSDtq1YsXz1v38LQe3NnJWDtsqxLeubYym9fz16WQyUNSRAog4niRubjL4R7t3",
  "key32": "jYTevvTfmoYrefxSeo3CcKMg7w5iTaCjoYYKZbmWtn75bGrwBiAQTqDbpJMTyXE6WWQi9SHyFsKJs84iLSm5pKM",
  "key33": "4ZbTHzGYN4mjeMLTLwJXsybTbWiriZrswMhbV7EFaqBFyALEbmKuC1yamf28Lq6UbNRixe58D15yzMnS1SiXW6vR",
  "key34": "5GgvBqEKZLo1sFpw7abhVWYDRYfHooPYgx4xKCbMSGaGFRm5hvn4emV9or25SE3hckjwB5mQZ5Ls1f9CaAGhexpf",
  "key35": "4T1TvY13gLmfMFhJ4NVJAdsYdcGusW4w8N6djicRBJD2SVBpxfSZd29NqTpqdLSucEEYGMccQ8m3eUk6qeFgLSoL"
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
