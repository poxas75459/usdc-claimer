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
    "4W9oVMpCrLZUiBMK4YQBnp5qXjXEMWzwoUJ56g2m8R16ifDZSrdKAURmC79VbFejT6iGksFQBvWVp576nikAb1AB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SrkPVpJDUaSoyrP43gAKSpiLBxXwgzz9Ea95TLCrz7iaJFSaefoPYPuLWD9cFhvrh9Ce1EHKfL5kTJzJmt2VaRk",
  "key1": "3ytUV2dJwZSyBGpsvQzRuqLLoLx85Vc1xdv1p5JDtXbpqLV7okDCaZysY54v8pJaYtLiZ7Rko3PbS2GMagRwqqyz",
  "key2": "5tcuyvDfi1sNexCZX8jYS9BNp8nZo9qGwCgY9yKfT3MXUCcvLisY1QbUfmfUETbujmYCXXDgkmhVzUnKapWBUsRV",
  "key3": "3T83Zjmgf3aohhXK4gDD3ZtsWTxut8TcLwaQNpfgr14u7S7VvatRsbctc2sHvZn9zVC5jdTcE3G97dLDNDL1y2mk",
  "key4": "41UiKnNc8UzDxCJuL1gwj5trQ7BFRzfAuJYxqU627QDcFBdfQZpycyTnaYcCbuHLUyRKK51ArjoRXhCnJpCcNAML",
  "key5": "5CVyu1wCTyh9LqtczU6CVeFvcGXmWTkMwsPqujWXe36HG2cCKSGUMuA4UvMG3K9LAp2HU9PNeTvWV4rJneGbJuUz",
  "key6": "67HZg2FqP9rxxjqQbXxnevpCfpFZAjmuXL8B6iskrnJNXMxHATRNFjnemBc4u5SZD7xFPami7kYeEtJKWKooWwQN",
  "key7": "5UFs8meVVpiAsK4hcHNxZXoaGfwWcAfj1VgpU8N6RVsWzSLY6E7LRpCeM4u33VjCLkNCYEsP8HYSiJ6oBMRQYG32",
  "key8": "959bFPv1KYSbajZWMCbjVofZN1E6C2iVmDvzRovNi2ZsUi1b2czPhQxyBVwVbyzRtHGqK5wRTGD1PAP6rhgL7PK",
  "key9": "4Gxdm4PmA4BkXdGypJRJMc3XFikyAADFmv7G5rtXyLCPVRxbvHUdgCc7hQECWTEU4qkJzeSpXftWNvsFd9dQK4j4",
  "key10": "35zn9X8ytYc6WKXhSQPiwVBwqo5BpCYe2GnMdmKFD5asZw9cuNKAENjWj7ckaxg5eT4ttm2dYVCRzsyEua4fi8ue",
  "key11": "4wnTZQXd66zYrmwowKErqN1pNpRb7UtBriQuYa33sQRnntZZASUcVa69Q7bwDyPhSu2PxCVD1NcHiPB5uubYsA6i",
  "key12": "ZWcK7tJt1ahvEkynzKMySPKnta7ifCstwMqG1K8Fuw3EKZZqm2B2CTMaz4UVcW9Xj8y1Gk4HBNBsKzZxkmWLGEp",
  "key13": "UeFdmhPoGpx2YdvtFA5W5Rk8xjeMjQZxKtVhJEfgPLU6X1PJMUzfcFPeUrhB3xmwthtFEyzveLVmcTwTXYmJ2RP",
  "key14": "5YWuQxuoV45t5U5NchQprcLrxiqmvCVjrJVaH9vzRVazERQr3tAMgVQru81RNBSyyoqvCv2DT4tZthhNTY6p1Sji",
  "key15": "4uTXQEGRa6MXuBRejtHhWU2ed8SMDMvpUFzCyQKHG2AgPUmaCpT7grQgc7TcoAXoUu5qnLLrM6Ch9CxpewtwpQ9Z",
  "key16": "5MX99jz42fR9cQjt5HBtVhDQYJTurjNZG5pCAMbHJa5VJh6PgTbcsd2EUB9osq8YG17HGSUbKqCHw4aNqEkAw4KB",
  "key17": "7DNAyxsj6vzfDV8tr1P2LvLuKD8bHpjrRW16cWUCWvwy3AX5W7kGyGnNJS3mT1uBH22xsKK258w5gfC7CL8s88Z",
  "key18": "5KK4RfJHb45RLo1gc6yhAUFkANXpk73B3fpC1yzY6acujZ3iigzEKZSGgTAP93vncbX5yWFdkxdxwzmpxYR6PXaH",
  "key19": "4uGc6pcqp6v6aBmnGC1evWMmWEcjmCvtSw5gGWoceUwQj7e6TP7jDr3JKfzf2ENfs9EksXvwcyhhfKzCZKShVy8y",
  "key20": "2WHpskYp2n9esFt8i7QpD9cMNfM6eUFurB1QqGYgCNFB3pQjck7yK8JrA4XU2dy2ToTg1HJfxQ17svedfxriCKMe",
  "key21": "qKLz8TmoYX74MrJA9hbg8UyHxuJ6Esj8dxyjY1mXGdRNhemkBGi8SejfsYavzJVoj893568J3MaJfP3S6ih5JMN",
  "key22": "mYrqiijxU9VVKxLvgSnYHApY5LDN9U7HZiFVZbJA6oEqYfaaV81mTMDs5UJukfLPQAeTTkpXK8yKHKxcGPacmZq",
  "key23": "59UXCwtdG27CjXhKptWZp9qjpvCdTNDPUuob9KSecxYVucSZ5SLLXdwpWMyTs5PQUas9vHJx5mhM7Vnt6wpwXwQy",
  "key24": "3kSQjuTFk5H8GQij2etYU6ubgbkQXUPiTrZ3zut3CiX5NmGmC92PWcJjtqkSM8q12GotwvMfXTvr8nUjZMu1f9VT",
  "key25": "sbudmazkGDtrBzMcYZKfQWVnAwSR5ox9hx6TD2vW2LHfnN9DcxMHgunn2nW8yuPGsJTrvAoRknYTfiQ8jKuvKm2",
  "key26": "4Ng3DUinaZYmp8WiGwN64NSnZWueWg7TghY37HZvB3kciX1uv1e7ZdytTSeJoG8ShbHAnSAkuRetXGXXuG3hfAt3",
  "key27": "4mLKh4zTx8GMcUoizcRzr81UrDw24ao14fSX1HcwLXJCe7JKWkTQRyeEUYmmansbjf2NtMPUaFmXB4hk8gwzDtCi",
  "key28": "38mbkRRueo5YcbuW5SnyqdVnCqaHyESwUrSizJmnZZiAkd3PdpND2MyBkoyWEkknNAouZj1MacqLQEf2aVoMMvZE",
  "key29": "3YjUBAKSYzFVSaP3AE232w4ouq76a24ckfFj3uYg4Z5dDwjzLciqjmT3X8rSZ2o9BmaodeR6kbnMWxEdeWfSc5Sd",
  "key30": "59aG7ApucN3NKKH5ze4HAFKMRaRkbzrLX1bscnyAUTpXokwqgtfevqt5drYyCHzCc66Wfr9T2enNNnYmoLSDWeDo",
  "key31": "8teZgtkYTEaxBaUPedjruLNQV9suejZXGMsqTZVnmXRf8QwYtQ2ZWjCQGZd5avWT9a5UmxpUPo6gmr21ZKT6H1P",
  "key32": "t3eJfZDGkkya6KdCY9kntFzEncq5g8qoax6fkNa37J1aKUyznXQvaYeyzovn6fCLN56hJYLwGYNiWrr9G4tQPMc"
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
