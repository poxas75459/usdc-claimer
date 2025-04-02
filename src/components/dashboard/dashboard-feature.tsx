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
    "4gDE9KwWCbXkPMVwRL46aCv1p9oXUzbcXZx7wAn6J8Qm6bGjR7mzAhJUHuVNuH2pJdoZBSJ7QvwH7caHeAjVfKsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ReF5nbRt9NUyWpPMh7NvLbghJa9EAHM4m16d7KRbRXLFykQXRe83Nt8wULRP35X6W5bJLBTgEeENpFsCrGCdpd",
  "key1": "4btRUmgtGT7BZoCwPS6oe42hujGb8u2253S12RyzxjQU4e18CQEgRg4BXUkZnMCMdggvMe2cnUhukyk9eSy2aCxK",
  "key2": "3bekTAY6CArj4WiEAhChAQss7jxKxqLyZ7y5sJvWjQ5GNS51SW6YNEkrVw1TrazSqycEg1f8zmcwEPGYgkQVy8UK",
  "key3": "4skNUVYGxj8WS1AhztfEdbC4TJHkUv2j3J41D65bq8sRCNsU4oUatZiov1iwEaswfEfKwchFH3h7GigGPpw1TH83",
  "key4": "4pHKbgzwX9HeemJE15YJqdiMCqvMUm9UCoAf5eb8zfYSvq9Zayg2UuxWKvaz9UHdAZLCANa43x8AYsUusq46DH89",
  "key5": "3mJjqRunMTTyTs9f4cM1XFb2qp2TiYGTjyok7PX3a88c6Z3vTqyae52k3McGTGdpurH4LfQ9ixVndhjd4uTG7LZn",
  "key6": "sHQrnFvLtUxnRX2b1aVHMpTJh6yrUv774UBYmanqQGwRYxqSq65mhKu6tdDxEZ2yYspWw4HD9qW4athAn7Dbqd2",
  "key7": "3PV46div47uZHaxfMyrhjksQJh1hxs3k6Y1LcHmw19c1b5zsvABgb2T1k94FVRfVrAK8gRmACiQyc46JK5YaiKku",
  "key8": "4GgcwdZTZdrZfbgMkcfkLZ3KYwWQNLga5iQ7j5xG8FYdM3Bps1tEWTCQtsWvaiuxppB2oxBF6hd6vUBSE77P3fFr",
  "key9": "3EmbqmKKgCr1vDuppoynuCi9rcGQdDtQ8SqDrH2MVxh4YnpyPJSTBSehe7e14uAjS8rwEz2azB3Uzu1pvSQBBZwh",
  "key10": "2nxLYF5t7yj5vq77hqeh8dfH1TJLrLau13GU8Ja2FbamGXiQtziYCSbGw6BU6zt5yYGsjeSoYVcPRpNa6UPEAbRo",
  "key11": "4Y2Nthd4Yo3MAV2HkfiiEUpkmNoY5am3LUY6GH9p3fv3VCdjQfvQNvV83oxK37d2TkjNye5hJWfLck3kp7N33v7F",
  "key12": "3h11uPhifLw2QTW5V1kQQj17ijHioUse9iFXuNUUZXe7BdxT1osFVg1GaYcf9xS6EN68wHwDjKoXUy2TBVw8J8z",
  "key13": "4AHbehFMvokmqrX2zoeYyp14Frjt3QwQgDrfDAJKMX38qattvyF1AeMBzwog7cTRYZkB2eBqx1DVE3xiWB6gMNQ5",
  "key14": "2D35NoDYwEp639dMdRXBZXfeU7diJig6AJuCuQGbUAcheH31nPsv8ER6RnrvQTM9V8nonGAKYAGNtMgdXiqnSY4P",
  "key15": "3BTEymvBnBvReXC1HgHBAcL99VUCjwQAvViXVVkKF9JPfQbw1kHFhUZ3XWuNjU6tmXHgB9Qb1N6wDMPY2Eiy3TbX",
  "key16": "5WpzSnxq58TDWJmvcK8RKeiXFSPvDdzubngEFoVfyeawEmeGLe7mQkd27kDSmxk5kyZgusvG3nq9cMhwCoJ6a9Gr",
  "key17": "4nvTRPuQLC3DYZZ4mxCi1SYghLc5zS27w5burpNMVcN49kG5v3wo6umHG8BscQFgywABFs2gRovyMTRP7o2mHPf8",
  "key18": "4k8sfEbuWmX3w5qgxJFMNgJknaiuVhmm5YLUfwvE1XSvxHQobApjujUoUcyQyoJoqV5dNFaW4vajQupWA3theH9Y",
  "key19": "gmAEnaUgxUN8opeTiMSdnAPQrCuwV15xuokZ3wnzV8r4pBUhiCeaz6JrxbXnCbmCynzw2sBdgDMArkfe3x5V9Gh",
  "key20": "LDY9TdsKonCeo5RP3nfLssXTt3YZXAe6TbiyquF9XgUSCK89eSHLmrZwvHMfgo8nq9fauFADtJvTEbk7gguU8aT",
  "key21": "wb83UfoiM5stQVr8FjM3uYYMfoB1dRaPx8Z7x9GfASKe5715VphVHVJmhLQ123fa1qppxVTW1ZqmtGMrMVaBVsD",
  "key22": "2pkPF8hjuiiaTWvXF3YNp3W51LGjDhxHgi9Wo7PPA7DTqhmsEdUoWWh6rGF4m1oiX8CBTQKEZmDkwmXTw7AbJGJ3",
  "key23": "31dFBaZQZQtxuPAsJQkU2iTsGmMQCahDUaUJAgTHowraWRhL9J9HwJ5386haVcUsVSJT2ganyoVbtv5LJJCkLMGG",
  "key24": "2RuMTQKjBppAUAZXJdZ9F4fNctwaRhiYCyaaCTQ8NeM286UTkWvGnqfsxBLghZVGeizsMLWzrxEh18YAsG62wvrz"
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
