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
    "2YRVC67unUboGUCj4aN176ngGVTxrtMeBzZfhe8ifcQ1vNjNV4z6SdaqQeMa7a1wjCwzatrGk19UDqVVdJwEnEa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jT8oWVaM2MLgQ5WzYgE5TsX5ZLcETWYmYC4eHVj5w7QAN69sZ423ZqBi1i76zns8MgySh9AryFcHU8sK7L2jJTf",
  "key1": "2y4iqZnrHs1qzHkBCzU1B8aYF9NNLzGbnNCZZF3C8xdB4EvhPoFiGzioAKT6ixp2phGwzVWfJmDR54wt13cniCPU",
  "key2": "D9KMHepXiwAr8Kkn465Ysu8zjWhbr6B8JaKU3fjc6osYcmZ3NaWZxXQfRxdzWjs45wAMJ8a72kmgvwQHYZ2ki7b",
  "key3": "3bYw1QgeFqsk28qwqTqJziiNsHLYdbWPdDCEc2zSz63DwUtqFSxeZH7WuY1Au1X63PYobifNo85YvQKEfrM7RWzF",
  "key4": "afs5zeUtgJxMfUeMZqSg1aBqM8dThx7bN1yeiTdftENHMe6G35ZST7PekDVyAizzKrYk9Pb3wV11ieFZ3VhK8Kf",
  "key5": "42ygq9dFq6rbb98QECgeXEo8z7ci7bdh4TfZBUR5v74YAT6xcpGP2YgoW5qDc8gfnBRdw1KJvVyEuFPsNqmuMRKt",
  "key6": "26MbDiCfpgxs7qCDVAi8vHuMcMNgyX1E6HEcmidtD7EQ4wntN71CNE5iEbJn9KuEB3kbE8RepFiH87BtpXASZNND",
  "key7": "37nRFt4YU7gLHtWKTENwbg5vbgEhDkbVWNNt3k1uLhLHWGGfswfnLmAYva5iRepdfhKqxgdMQos8pHr43ztoyJvY",
  "key8": "2x4M71hSptQbmJkfeArKdj4vptR59SBFMwbqx3f1PdkkXK8xHff2LMkUYJnaF5pZKXzSBu9zWhopJESssw35ntHV",
  "key9": "FUNwGErhNY19Ke4MKPhajYK47ri99k1e42TVPmh99N7pMUmXiCTzSpVEChw98kAaUE7qBph1Pw3MCEFGTq3znHX",
  "key10": "5Zr1ny5hhcY1YmN5U4uwAUK91PAiei6CRbyhc9ZXypTV32BPzH779WLVKw9afqcYUsKWC7Pzn2egSBqCCxgFLfZ3",
  "key11": "2oyui4evp8XJsAi8rDBxkcm69t5ijvambhUm5rjZNYKpn81QqbvrowHEuWgodHSA5uHa8wLFFz7kmBatZ8xCCTW",
  "key12": "3xDKX7XkMS97EmVFqCQ2w3aSRA3HfwWMsKvRGWRNZKscUn4xsRsd2NY9uW8pJ4NMbBoHjjkWJttoXy3idmufUr81",
  "key13": "62T8d2wiwaCb4WaHdjKyiCJ8Ko1MLCWoBf1NnnhxkUpHC3PgoqYrDRrBLuKAvLhnC1t9VQYWaPXTuFm7C2mzDEpr",
  "key14": "2UaibZM5jhE1ndJNZF1xZKfvrnu9vMMiB61asBHApe8UMVGxgRiHg3XPix5X3zWghgvL4vMG7k1cNzvSUHDAJMvM",
  "key15": "44r4NAoxWNtx6UJyJequQBafSm3zygUUfQpj5kTcrY6dsts2g6ijH6YPSVtmgta8ucKrmozK5Kq96bxTxpmhNbZk",
  "key16": "3uhshPj6d1NMVMmuYd2uqoVJUw7qTqovj2hy8L8g763HJZNh3Ma8VVeeXnuQcnBL6eQGxpTEWSzxnq4xDaS8MEoj",
  "key17": "4YJtMKve1or5XoJC1JubxugwRqtmN2UxNJbJPu274EhYihgf4Vk2y63ygbpmwTjDshkzb7VPcJ7LHU2DCdiDbUrB",
  "key18": "3DCXes97cuqVALFCNuvpJcs9wstJu4RNUSJd28svZYdTrRzXHPyGcN1hwGVqSFfewArfwSSNh54oDQLAtoxt4pNf",
  "key19": "2UW67zAdT1ZkE1yhuMjXZtYJKKf4dPxxWhdd2N8D8FnMN5qj4LCdoyV41wHKsHHqvTZ9xrHZDHSkbpdXnCCE2wxN",
  "key20": "5FgMzsQQHGM4YuU2FnavZoTLBHdPk4zkpHDUGHCUk5cgSe2GzEB3aG9hJQn9BmjVirbk2V8ruDb7QZwxRahaERve",
  "key21": "4tzquktJaXKmCJV5vU83LXbtbLmEPav2wzHKmAGYK87gT8evds753aNRW8uEMy1C84ELXghL6NErwD3oS5rzLhoQ",
  "key22": "58nNbkbsHyKkomZbyHsUArjUhDXVxyNBQF9XLmKPD7Dvunuj6NekdfXDWsb47ZNrAVzkcNp4MUQfcLsqgGFLb4w",
  "key23": "5CuvqpFWPQH7mcUotB5S6EvFsMECeooQ3r5jYvKWdrackiWk6ysg5P23p7pFSLyyXyxU2UjwWybiLXFFdiPDdPA1",
  "key24": "2aAPBtXwmzVMxeHbcZnSG6x2Yjb9Fg6uKvMzoNgLDiaSZn9mL7ELLMHD44i57bQUADyNxTWQW6ezjShntuuMhYw2",
  "key25": "5PPprAnQb4KU6ndk1zCb1kjHKsxoi9itTtvAcjs4gHjJ3QP31aQ1yHw36XQ2yo3MXKxBPB4RSgAuFD8QVa2E2D7v",
  "key26": "4w5jFVYHNtyZyTxKy3GNSxBfsSHYxxNmJKRKarwbGmUFRWbbPz2HSE2nDN9MrqrXjsJdqM6MLVQu1nXH74e9yKia",
  "key27": "5E37dZE2tDdm7N1hRPr921MtGxDTiXs7pA4kKK8PsaCC1xMwCeYzKQxu6oUmsdH4W4m54Pmktmut8RgFaryxg258",
  "key28": "4x2QzNkgckvD5aGr4RQo2c4JCiAEerYqsYKiyo9JmXBNLxEabJX7QTnM7i7g4291mgMUyaryR6tT7y33Fs8PGRtn",
  "key29": "5uR8Wo9ynf33iZWog5yT1MAZhvDT1uVpVNjVaUrudxADzhggYhMeimmtA6bEP7LttmjYwHNeyPAmgWhX2FjxNKFa",
  "key30": "2y4pgyAoUhvoCYJpGbdwsrwqGHMNapCx8SCQm1PZdfnMB9gL15q27xKg6Q2rj2r6G6YGFSikn4TcNdbFCE86osmW",
  "key31": "2PL8afE46kWwap9sNRFmVyHTThn7ZDmcscX4UYdGEXa1fu3S4khn3R6mw4fC1EdkhTfXruhjT3Zb124Xte7AqH6w"
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
