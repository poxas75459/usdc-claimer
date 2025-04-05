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
    "3Yu1BFtnKxYAWLwNpwfrjxbgKUHi23iDwyXuUvoziyu5DRj1bgRBxGmUfQoyEKzY1CGTjCuumhEFJMh4zcNBECGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tZy8yryVSHuRpLrMmPBvMykdc2E4JmVXVQc1zCr6ZwfJAd4sdqoQZ5v1pjLSxFWU9PkWLNNN1yceKnqhqy3oMX2",
  "key1": "3BMbxKZcNzJK9yKK3QgRfVVwkBAF5Vh8DJmnkwRvrW47gpMdPqnPn82ifNrBCqyNtyzWZv83C1BahV1oT4Mwn5t",
  "key2": "2Ms33wUTrPatbepufKH6GEhW1sNwhUQEQXxRsQHEY6iSkUgBHNTQDkfHs6FrrLaXYGacgbh96iC6bfLVMBFodraY",
  "key3": "4PsFYJEjwnXmACKXE12hhmU7YZmStdLBvqwpojiShehZ6ucx6Paj8ADWa8N5rEnTikCFJDpDajAq7BjMjFL18UGJ",
  "key4": "4bNXuKEdw2dBgecXDNgJpJEErtoKPKt7QQm9prdFdXXdrM7Dyv2P2Y1HEWWgxHPRg9NGv5nRMZQGy1xzMWDCs73E",
  "key5": "fqcHEbo9KhiC7gWvMdjxF7FckRvXPa3WhpoimSVPFivhXvUnwfVM1oAgoQmZJAydDU8Sq2jzTgbsaUxRCAj7z1Q",
  "key6": "4Ssr6EyLPNmz9hhG75gcEehUyd5NhT3WMxd5DVjVfVhT3sD7r2zWcfg4gAm5oLaGW2RRBgrxk6AB6mFfM2odb9aU",
  "key7": "4SZBnu84qB5rZuLVrsm3RkmuKcFxneRWxz1DSxsBQNhrPKBhj2NnvRZRpYCZpGwiQZkADioQiCySKJNkg9nDBRCR",
  "key8": "44k7mJS8379SSfj2LoPHBBiPevL79DMEXxJVsdXPYeGcU1nqqUN3g6SgyhD5bpZG2FJnQZZZ5ivmnjye2vVHHJWb",
  "key9": "4xYzMufRvfF8KHkmDR7SD1DULqBtNZTxyUcTWDDUEaSPHw3L8dWKGWachFoiisb9JkB7JGamY7FVPfXSUQJyiaSN",
  "key10": "2puRhiH6Nvi1oAWsVHbwk1KGbCScbDjFZkdaVQr9tkatJk6vqaCnJZprvqaZrWzqUR7H62eosV8K8TubNd7J3zLe",
  "key11": "4n1nQd5zCTpuakwa62u9YwdioLFtZP1i96m4gnxgRgNQhbdz8XNZ9VTni9ZBedR5icNFxyKETF4cHZUZjURk2z8S",
  "key12": "3ZRAkPRJS4KFvyZ97sMAAmnapAm9qQatXoEiisr7aQTK6jGHCXLyPCpgCr5aufx4vDeqMzCQY4K9HQSDMcbZys4a",
  "key13": "9xmiaCSQGdJEAcn7ENFKD861imPdKed779icB1zuTaFK2Zwd3vu64FAMBL1vE9rMypKbUPkh6eoQ2YghPKY3boL",
  "key14": "3kdVNgdBJLDzzyX5nTf7XGjaEJSAz5YJ1T3RTb7HYuYGtbBrLTFJH9m1968vBS5kH7qwgXUxWGkDwUPVhohCF1qg",
  "key15": "4eTFxFekAGzNtzvLU2f8kxx8vtV35YFAE4JVUKLicMq5k31papmMvWZgMMJLLp54zzN7FHJTgAAgvRsG8EXuYMef",
  "key16": "3Pcynx2sSwEqL28a5Cnqqte8E2z7bGEkcfBsVNXtSHCd7a8QjhvwwtK5UKeJ9HA9X8hsj3484jdq5i8P9KsKrUAa",
  "key17": "4TVoJKyJX11uah9MCcAMoVhAjUyhUY638yz3jKvV2FFeBgWvM1bHvKXiGyKT1XKHzxGrEz59E46ccYEJNfQQHp5V",
  "key18": "4ELVSmJQFAtViyM1qikbtFut9kDTGFT7vCnTamT4ndhVC4xoQtMZv5pGSCePAEQUFwjHtr1929GwYiFSAbTcYYDb",
  "key19": "3D6wS8e8VJdHk6rzULDy4UASAb738pksTJwx7SUXDV1J1zn3esCtQf3KySsmSHgkBY8gQzY9Ao2wAHyo3fkwyCRt",
  "key20": "5qgncsfS5SuBZawAo9nCB3do1wpvRGXTYYvSHvZbpD7E8SnQE1rXu8x2iKdTghdC6xDmehu7h1vQTLHVJ7C63VmQ",
  "key21": "57s54FQqByyCZaszgqAxsbFU6P5suMhyxEApg83swYdKE1fhGCq72C9tKk1y1q7rpJMegrFg8WzVhSrBAeSihM53",
  "key22": "5MpNju5g2MsmoFz32cA4DTYEQQvfZi8AxCxYvP6NNsGUnghH3S7GDPhQo9GSfr5aH9ysfzrvS8vRs1vnSzrdK5Ft",
  "key23": "gTSrdVAWYJfa5K2KS5qcurrqfuf1Hk2NmtNspjg75GkgKfxSYr538nkqm81owJkTBbfoP6KxeGM1kr5oZWpUXVd",
  "key24": "3DFW7kV6PfvEsMVBfB1HwyLbAdAaVwMeeq5j7stNDDhQLakqAB8xi2RE3EUa1PYbcLh58z1wE7A2MjLsH1ecWuPw",
  "key25": "3mCwQYGnDGhgM8wq8vws9CAEg3AvVYbKCUFtjixq7ivQoqjoVFUSxjCqS1avajhddbpRWSV7eso6a4rL69SdAeKV",
  "key26": "Fg5ndf12GmVKTBNpRAMM5f6bBqGiaDcw6YAXPv771MGGVzyuaQESjHWfVs4tsZswp67Tyu5Uo8aW5QF6UepaA7B",
  "key27": "4gatmczkZL5vAevst2aL3WRDF5p3WEVG37FtayKKSvjrP745dCrwrtxtfXQFvV8G87Xd2Hf4kojKffCXiJJqE947",
  "key28": "3cuUcqtb2j73BJeg6pBckQuRoV92ehL1HTeZtBGSND8meo4TC5ZJ5vd5fUVbofqhjcrECRXMRTk6meB24iYxAn7D"
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
