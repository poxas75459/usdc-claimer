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
    "5RgSf6Hi1fE83HA1WvdKjV6qXanXTcne6FqUPceKU3V5RzJnoJUTMbhLA5TCQs3CdRGdfTdgoMxxe2teFGRt5Tid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UuirJcVyu949t9Bu8yUNKNJMMApjNdVkudPGjoET7NznTrepaaGtPK6G1ELf5XmMYW5qifi18UB8wHAoMYdKoTz",
  "key1": "4KgwcxxFTSxHvzzrxLjJYeuGh1BRu7PVovGJpvPq2kwKJ1wyS8KxLdP9da7ZD1RKww8MP5LVsDppJZSJBtkP3xFv",
  "key2": "512nva5DPJuyDNbUvsvQ8QGmiSXLW5kfu1MTF8gZYCf5HEfaRK3wBYmethHdaQbZNmX5a5V4iRpKEihKs6Zo6kLd",
  "key3": "bAWJ6kMYCoPEKbJr4whoJD1CZJ1aNdtYPiFUYyiVZrfZpsR818tAHKq12PvUUEv3CM24RJP2vcXPxVx4JV5cGL6",
  "key4": "wkuZN56Mt9BGQxPA4dVPdG9AQYr2bZQsztBnp73bRjpXLU8pdi8RciUS5BiJ3Q1BQpL9gtH1QEdQLefdrEXH7dk",
  "key5": "262LPgDEufVPzY4AjvzP7YNag3hC3CnTqjMfgscVNRxTPus6XF5YxSM8z2cc9dyEhwSCZBrKE625LxmZQN7z3FZd",
  "key6": "5RVyhdHcG7yED14G4j5snt3GiPx7FaberC5Ny3F9VWt7dd1bTrh75da1ob5AgV4fNNTnetnryHHeapfFoCcBosK9",
  "key7": "3kHFx4s7Tc2knEZWnkzoHgHwPwdS7VMfJRiTXkUPoJddsDq2dN1VnoTzZyBxhewFJtBEWFY4XHTJLMHs2JADhsr8",
  "key8": "RyqQnrrggJ4wuyxXyu2XDXVEbZvgjqNMvFDgTtu2epnE5qgbmgsffTmU2mTWiawvRmnU4Aa7E3spoEDjoBfehrL",
  "key9": "25FM6jrpw1gYGyrZuLA3usicGxRin3ua5GTG7RLzkfHGKRtoYtpuoGhn3tsnP8i2DU1KYQHBNBQ9HPKNUDtbkbSd",
  "key10": "4JQxKMXSSGH2F4yX46C8E112vDYZysPkke1V7TyGd6yyhX6aW39k7k9GEfWqSJs9zXHwbSnKoGzXJ4p7NqKZ3Ffg",
  "key11": "3RoXv8rSj86Anxw7Ln257eepDQMzXyoXZMGMxeQqhuY8uGNCTM7Z4H695dEwxnhYPBG6js8KxusdnB3uUZzF2TUT",
  "key12": "4fGbGxcT1XSFbgDsWonV7JgavMpL8avstQdg6fbqtGkkSaQJRrbu92VYbcQNNZG3zYMb1EUySyPPj2THYwHZ5R9V",
  "key13": "5Lkc2CuSPciQB7EAe6GUKTAnCERM54uWvg5ZeM7VB5CbFHmXb9L1eKL6Q7gWv9fZZKb5nsSLTgxhG7Q3h2jc1Wre",
  "key14": "1QQY75eSMawAM2tphNPD5zrzKox6kNLqU6TZWmwhodLuAiWDSvepGhVnqH8VbsHi6vi4mpGgmFN8hjFP4moV5KF",
  "key15": "4L8j19XTk5fiRvdamhw7cjeGennkfmEpaxmSHcSUMytvWEhEamrBc6s3bMRTV8tyVPrZw4NgWDHiRQJ97YMbuy36",
  "key16": "5HTXLz92Lp8rAGnZLNybRALTWdEKyq3zRa3bKFAVLmkMfGDag84Ek4ECSgFyJeAFq5T6jMuSV2m9HGm2PR8mbkmk",
  "key17": "4Wz7qBMyJWgLu8JN7A47YEV9ijTQsceNGPQP26deYyCu7gndui32LCNtpuixPztz2BxwViFDwER3ec1zcHZpeQJS",
  "key18": "4XfL9fxZraEQCGBsbVpDgFw4jXicw6ywWfmANnLtEcWGy4gFf7KqnKTZiino37RfJrMR4o7ykw9THBduNvNwJXBR",
  "key19": "3qt55XWqSKSNVj6e3JtiGVkhVPLBFxJa99nWDpnUkfsdY9WuGNVYkXdU465Vm8pCFBttNUhYWehVw9k3AD8zxKGH",
  "key20": "2rYsBgdhU5nuWXkdsivgPvw26Z6tveoQNUS2qjdWNirLjG2CVj9D5jCmiFor2sCknWLf1RzbSd5X2CWi1j494XaM",
  "key21": "ZnRZ4k8mrrWeyozfQr37sHnAZmzxVkFBWx61ZaCKyMYEXrwLBnrguZrc7eyaYA8cVAbAWh9ZpHtwottbqXbgG1P",
  "key22": "3hkNmpVAKMdfnqa8rXXQUJA5cZKF1bmDDbWED8hyJUo9PJTj4DD9qxb1RTb1PdVHCRjtCRQAtb6depU7nriufa6e",
  "key23": "3c3ssmS89acHfjA5dhueHvJ8ar8z3K6uPNps5TdkH8pxQsEbjjWgVaRxCXezxDHwJdJbjBumPyWMqkc8w8Lkt24t",
  "key24": "W28fxHKciz3AX3PEKPQC76xDTWJBdUfTfg6goSFdDA4WLvPz4uXJ5LEHeSJeKhWQCCGJSejc7Rv5FRATxxQSUQz",
  "key25": "wCYZbLj67ZrnLMsGJqvEmL4X2XR842gURpsMAyVncsEKJpqnw2fxPWoNMSHn4eGCgQgjYqQivm1CU1i2Jgn1hwU",
  "key26": "37524HxvGKDRuH28rjwSnvmnzH8Mc4KC4GNgTjo3Gdqxy5xsZT5D2dXK9rPpDHJnqUH5dTuqW8MhpGzfcRzVL2UX",
  "key27": "h8E8MBZMDaDc5EqwBNNCRmt7iRboJN4Jt7MdLFXNnRaJeCYurKD5WGN31VpZY5sFEpyQrPU5Bp66JUdDS7ZqTbx",
  "key28": "3x4TG2TUdZgCjt7HrRPtt6ZZvtKi46qWXqari247bDvukccfKMoXDGickcpbZqYPGY9g9v75QhY4CADuEsepHqVd",
  "key29": "4RGVMVqvSXK1hJAzRKrxcSUb8xqmL8ovwJQJoPcGeBa5wu1AkTqcu5bSh6K9fA4cCPQZJW2yRZmuCwUAUPcm3Fnr",
  "key30": "5AqPdpd5NL3QhLRteowVbbxyTZrXNvtKVRappDCUxceFM13wKhQD91nE2oQM2wuZMnLTF4nmEgbrgVhrrqgFydhv",
  "key31": "dMCUAtmsgFekBjNZvyo95KUFPeFogDzaKpp439uYyUEX2KwUYMSegYn988ooQ7TbunRnAjhqBYVK2ctJg6qZQDg",
  "key32": "3PNUXVosEsCKZv2Azf9GRQEFWShBkQTLdgyTsyJzRSU2HgR5XELpyaZ287EU83Gh52aYDbWpDb9ESMipfYz3iCz7",
  "key33": "4SgjpDx772wJzLkhjCYxZdGEXKpJLeh7bduMQtM9RoDWvxAxhH5CUZ383u3YKMCz3YifKhM67Ld4B5HJfoWnSzN8",
  "key34": "67DGGaaQGLNFdoE8zLKMKuTS9VsLbaNeKQkAAa13k8Ruy4UqPjMxEQh4nLjo5auscHcgLeoeMT7hfR6MhsKeqddg",
  "key35": "2XcMGhJRXydvUoigqf9kqLV61YKvZzCoZuMsm2Ab58tWw23fdTHfvx7RYwPpVfvhfgytJPPE3aXy6TUXk1JkcEs1"
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
