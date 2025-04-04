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
    "3gc5ckAnF1HA1TK9iX8JSLSXKWzauc4y6MMyNrHzGLb7tJyeZEJ1xAy6RU2kX5oqvtBAtg97bbrSUqRMyGt1vxEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d2PzJZVn3Mwr8Za6sUfRiM46AwyCUUdu2gWfyHxeH28aPyeLp7XGnAckDWtBBLRpeqFs7r7EpPUSHbBxcjtBHz9",
  "key1": "4i9QKkkD7FGCb39UJaQECtA3uWmdiKvycFUPgSThGaC4g83B8JeqV2QFoYBfhdQvj1oSWRehEms8kYkF9iAsMG1J",
  "key2": "3WoCGweh9uxjNeKggAVPFaWpDgZMeH9qy3fUeYXQ914LgiT2b1gMGRWY6oG3pbi8FbQw7zs3KokgbUnQshqFWbuH",
  "key3": "Jd48ZuTtKoHVKFEhcLyAkHi5NNWNFLctfHtYwcVXpKjdfK8wD72s3bmGNKfzF4FX1qu4ZPYrctdELJZpMzjdypy",
  "key4": "KK77FNKsX4h8bJbBb4WX6hjfVH274cqpBzLhW2JJBxNu8yZy9zm8kFKCRMYLVk3iXyGycmvQbJ24TdyRW3Wb3Co",
  "key5": "5zjVsrXuJp7KU2VVeHQRbfNLQJvwRe4zzeiNdkGnVDWGu7j6u3Vv64k2wGvd6VKABbZY3JTxXueLUfYZKrHFDwyc",
  "key6": "bX1hNSbDms6u7YuLnQ3PrxWhnsoYcJoqLEWJd4mJjbYSxcFRwh6kWP9UYFW5hE5KMh8QPwGuShjkAyVLzDmvF6W",
  "key7": "QSsQjZzgFQbnxEbaH4v9jPkFJiDowxnqpU7usUS2MuK67ccvkKDqeFNxJj6dFofUdNqFNYr7HUWr7XWeSpJk2sA",
  "key8": "4BbnCNtCZjLeFE3H1hTV6BNi9PM7KCA5vNAvJ1BgpLdhwjsFfAmkiP8p2A49ed2E8GzHwRWsCEeMJgeanjQYtHWF",
  "key9": "wnsSxNnYKgi6UnFed7WRavYpHmZHNVWmeCc4j8BWSBojZRuvU6wuuZn77wqUFrbpwrTBrkWKcaMfXdALfbKGAdv",
  "key10": "359BHcMC6a5MiknJqvgh5t1967zZbn1KZt2hkQVxDKEjN6EvkxriSZuSDAezTyiUr9aenBwYLQ3bgRCUXa5dSv9c",
  "key11": "7Ct3LqnjHgkvVxhdFqG7RHHerEoqWcaCsnznBVv49y47KCYd1x5sYjSdamBD2VHnhJ4fVPSZifXnaGzwkdcKLrB",
  "key12": "28aBV1w8uT5z7WGXjQ3Viu3aHUYEB98TXQBhuZzf15T3r8tCkhMp7wTPCAmFm8mvSK2NuobHUUh2KwruKsFwgcgF",
  "key13": "3F2PaA6kS1tYvpiZ8aJQLunnTu1xqTauYS7Xp9pv52fxvU8uujtLfRiQumg71Lrzk1JSZ1fjbZ3nbwvNg43wFRPF",
  "key14": "5F5AGWDCQckG1UgfxdpbPWkDVbzqShENNWCTiYa8yfxxmpaKYmBSTC5XbBXzbzbLNHah9adRPXUSKZQ99tHpAj3d",
  "key15": "3VG2PtZaxWJ9oNfziSPKxFyGYjq7hHfZDUPzBzeGHpQtaqFMreETeUpU1VCYsKekJgbBwBbdqYXfrdxGn2ruCFG2",
  "key16": "2PFe2FCXkdszbgwf8hBAatondbqtpPAcctNjKsxqeaN6GVD3fr95pCRaio6nPS7W374w5Gt3RoFMtg76GUBK4WcH",
  "key17": "5PeBK6UHcrw19ovsptpYQpyLEadPRQzuuenxfQJ9EMnRwR5ci77DEKVhribj4fLJRzkat3yz2o6czrZMHoLNifyn",
  "key18": "NMrsnVygMWSPhg3VyR7scrSYDMdqZeoD3c87ghhayb5Z7JAgVxyw5nQoV3KjYfTcQg7sc1cXwJin6EmuyKMVdb4",
  "key19": "3YUhNdhAEJP3fAmKiJUH2qKgknXUcj3Pr73ScT63AdDMdEFjYd8RVzrZEjizy2VeC3qbRqgnfCmcQuL6JtpJNu3g",
  "key20": "61C7e35oX25Jm8M9b5pBQju7zSDtkrryeF7bhSHfJuUjs15jSyGe9iqUWB71X6vyt4Kbu55arEyuQsQVwtyPijE2",
  "key21": "ytYzaWq2KUsMrGqxmPjj6Nf4Hso49tkNeeCS5vC9juQNkmu5mzb8sSsFpNjDmftNsZuHrRPAFHS7bbyr5dUPfcs",
  "key22": "5NZmpFUPtpf3KnT4inSZPKnMK5eZjvggePdvAVkuoPAnqcALgH5VJKAoWvUjSZWkFFCVtLpuCTfXQjuE436eiqoV",
  "key23": "2UPiqMAw1t8nmFtZogcfY1oiYSg56TjBym3qNJ5UYDFStnfyKTJWs2UEdxAcrNMt1649idhdhTmV9ispuLE9BFfy",
  "key24": "UHY6dafiyfmTcaYSJYeHC82CaxV8poVSZqMAJS1Cvb4p884AZfrk4ze2tLdPWQSBP7B5kL7Wi1kymU923myuKVU",
  "key25": "3Qn5bnnwVfmAQcamo24krDxbqr2vpF8XrVy5eejPHFjx5W1f91W5L3Hfpn8zR6C8xKSVMvVkRCfqdk1w1vyC2vWX",
  "key26": "5jzubCN3sXNXwJQAtkHkpGJUefBnd4L8JUTYPadJmR6aQi4Ug56ohsXWQZpXraTopaELNqWUi2NeFENXEfkrUuLT",
  "key27": "2iCuFDgQT1a9wT82uJye3G1NJpqSnFKLezjjVdQLom7mqwL14GihTsk3bbowADuNFTvJjLLuzUWW5tBGkatKtgAj",
  "key28": "5ebFNWGcVuivbxvn2cUM9iVZZF9CChAtcxgcSCfvTvTFrrT4esacHJRhKbwv2ws8mdukgaqZW8sD4pWbhRXViwuL",
  "key29": "46SkfQ3Mgsp1BKP2gVypcsBT1vyCrg6M93gDnpoAcMzT4dTj8KzBadSx6qoeZuQujowt9JwShsydv5tKF4MdwTP6",
  "key30": "5Csp9LZgaNynwok9b39twWHc5hJhFHgHf8ftfiXdrXPoXunSWZT44tDf31Q8dT7JrsgkhkyDtJuX2SxBuFbCFu5E",
  "key31": "5N1vkzbTLJ6QfR2NyyqiCtHEdzQkKUrUBmxSNxPPz2s524utyWbQsC7HYXiNNx6pHjSECfVw4q7hMfjU2d2oXVKq",
  "key32": "r64DeS3bd5uTnTdX6qq7Aa3AjRpo2fRwb8B6skVdpPvf8FN7JQhNEzyRGwMECMZoHpYZQxv2Zhcb3sC7odB9gQY"
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
