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
    "5o6o3SYMfVE5GqjdQYK2Pt3h45LGRPugXRTtcCMk4ieJ1fzvP9f6XxHpXBRXPk7cRAMUaFx9BCnStz7XhqiPKh6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LK7tCkpc8GvRugKQ7tdGC5B6VNWorgWs2ptbaBpAcNsrnqWpZHLGwWqRPeMCJJFj9D3S3tRtRME3kqej2ukMc4W",
  "key1": "QhcTNMc11eup4NCxcPdepctm4bSyPnGPDZS91sysCEkbwaTYbBbHeUxXkiQ8LAe5axPPeCZGjaq4WZNTs8G5JA6",
  "key2": "3G5XrW8zZba3M9Zb7sdAtQPETNUazmJM3VEtW3MZYHbH1tpgSyVxvnc9V4jfU84cFudn6AY8qjSmz7SQ3iw9bwcf",
  "key3": "57Ra7KtJroNZtLZaMf5Tecorf1zxskAF4koXR8yGecCh7nyzGLTBbXvTBC3RUs1hQRvSSWHDAc4wC8TSaSc8NTx8",
  "key4": "5UNpacM5fAwPDCZh1wCrXnVSEdEHUnDDSnyaGYZrNHLY54XXvQtgw2VSJnZY9LtqWNkwNaHbSpxzq1erqHrGq26Q",
  "key5": "62d7346AixSZRgiSqsZ7Y5yHCVU456yC3gyw3dpSnXaGdvNfechP4wkwkPUU8pVrYKDSMGGGrmNbraG4bJ5LNGwU",
  "key6": "4BSBVgfMzSpMhG38i9cp8iJuFLHzgX5R6oUM15nLKke8CjV6EfjQxb5UgHhb2P9pXy7PQoCh4zej6uXdGUZUpvY4",
  "key7": "3xYQZTCQ2XGeGiAhqcnEhYgLWFuB3d6QH3WYvmLgxEgcyrtUtBvhSrzQxf9pQkKe2cgVt3M9Rz7YcYfQDTSYspMP",
  "key8": "3D567dLdF7repHi5F5YioRjwT3w5oc2EAQzhQN7EUYQ5NMWwTSgf2BtuNktmA8PxRtULuHzrHcqtpzZNFdRKR4Cc",
  "key9": "5zk5jRkAyWR34Z5WAEi7MGuWUBFF5Q88q9TC8uFRL827GoQ7HkrZqzp6eBVFCPKK8pNTtYfLsizpB9kzeSPd9Tgc",
  "key10": "3CcDkzVew8tfe8MPrcNQTrhFbdT98YvzhkL4JxnBwJfsWTimKNrWWkNWUobK6bc5Ed21kTdhVF5X6LS5hCjeyuoW",
  "key11": "dysYwKzwnHh5nqjDDoJDoqa1otdsxEh6TSgUVjt83Hfpspn5uSGRWmm6zzK1mjV9Mff5SYjDrr9Dd8VufyPgP8i",
  "key12": "3MhpkFGSL3K3qk8PeTivZ1jCQhebJodLwV3kzftkYYZft4nncRwZyDnTfMCHT2HZqx5bcEhtFCGvgMh2KeuSxscX",
  "key13": "5unBvw58HBu8F7GVEQHw39W4zvYt86ProrbTL6HcJiuTrGChQAPEaxZARyi3CQNrNArUKZDgfcY4VjX1V6NAty1n",
  "key14": "3sLjrGaUb4SRUto9TqBa6HvWicrbA1uaHAsnshRieKMZkMN7ssQeffyHJ96un7cNSy7LM1PSCyiWVBGgY4UKcyys",
  "key15": "ciYcv2W3u1GZW9mmiBgD1kmopr4WYCJDuxDTJMMAJARqk443dzRs4BXkSe5Gapmy4ci9U7TjAWpqtEZ8D5b2Xzv",
  "key16": "4pecrDzfdxDX6cbZirNgDRMTvTZxG2xiWihsYLFQ64WAa9tjmz2PivXMchVmH616q9HegnU7WnxYeP8FMsMtFnfK",
  "key17": "3y8QHHz2HNcoPANGaaVJWgpQEcUhizW8sx1JHG2qAABWPsZALCS6KX8RHqkGrkSsTtiWkaMguyWykJwJQRoBH6EJ",
  "key18": "2cHp8mPkhcnaRv6DRCnDAAAb7pXgyac1zLZfm3aFTZ1NfQkXwqbn972W7ahNrLiu5ptUncUtG4Kh811hV9G5eFfv",
  "key19": "5WW6tdbo7VTnV8YviYNW5PzC6B6wnqLxNGCgH18uRi5TyLQ79fJpzrJMBZYKef5pn1Sfnsu3JoSa75ZCxUp3qEMX",
  "key20": "2PfQBkF7t8SnjUDX1XY9rXfx1PfTCGjQbYV9KYiXJkbdihhU2bChEMqLCvkUNv7ggVpnwDbhrPaMrNzWoJzj85mX",
  "key21": "3fYGzEQ44DB6yJqULvXppoVp2bux4LuVsLD3tNZVA4BzZZnyqCWLWLGJJEJ2dh11B8YZZevzDZZSbEFbiqCRnJeB",
  "key22": "4cjTTN3qJF5ChgFUuhhfruqu2sKBNsw1eV1MG8KtANznD9P8hqkENCMbzA4weLtCWBKX7esrLL7ymbxeWF3b9Wqa",
  "key23": "3VfxkoL1y2Zx1XmaNjVvhZbN4KoFCFbkV1eiLNsMW5jM81Bok4qawbmt2hyrQkzxBhwzc7pT9eKET4EtuNjEswWa",
  "key24": "61xo3hesDWXVbNsvGRv9cNZJ4RLcv1ov8EEwxzAqq1NgLVsZ4ynr22WHiEj4qSuXtJQ9AYXwW8eCAZCks1S4ccFH",
  "key25": "2Fi5w8wZ6bCzLzMCuGPrkbLQUFW8hb6xkMaHXaLH3sR4u7eEqA3hTciKG1ZzP5tLicsdFsPHzedfLeYeY1pzRTeY",
  "key26": "3AS1pcnbTe8aF6NzoKhL5TRTHvFXnHCEJsiGwbUeSSiCvp7qtXLakMUuYnsNvE5WnUiKh7uwwfGBkQEsTJt3sW4i",
  "key27": "4vnREULVU6aCACTg457yrKABkZoZLLxA7cV7cMCQyD1jrfWdbmeA3ZC2j2p77CyjEcicrMAiAM8i7818o71sQzVn",
  "key28": "4nWsakXQ965JeGhv89kQeuEydq4Syk2sc4LUKScKoLYi1SDyUYvuLFoiyG1BtGTZKhBHHnwpx874kAaLpdnPiEtg",
  "key29": "5A88kwbhjnE5D7VRthcWxTkXJzbr2iXhQv7g8z47avmxwCa1hUofZoBMtUmXkyrDxhuPRSQVi7cwaCYHpyz2L7By",
  "key30": "3CB8bNbDHiVGmhqEgEHzZvWKPzEfWDdwo21RJnitvrns1ikLLQkRdgdsLdqvQPtyZ3pAxPrvqJnpLjvWq34EgLsL",
  "key31": "4ijUmvPAJ62eShdKjBLtndHAQyqGaTiwSox4xVs8dbfoF6QS6vTSMJ457ieqSBuAzLjJAq87cLyhENTff6SU6oCr",
  "key32": "2pUnB8HkWPLvbmUi45eabQgk6nYrS8cZQBHCASfHmYRrHEWDHhfMJqYsqdJ5qZue7S47hW9pgSVKTvGJCSTCmTFx"
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
