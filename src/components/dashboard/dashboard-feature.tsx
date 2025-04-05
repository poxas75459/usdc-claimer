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
    "3PMjGkJKZn1wYm4NJJEm5V3a37W35WQsNcGXdKq9z1MD6poQv5fLoMmUprngy5emPDvuoQ7Mt7jK5ji9XZy9YW95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65ZaRbHpV6RbzRrfvvf1hyrZUbh8wwWyANe2eweWdxbV478DCoLvzMq3SvYfYihGyYEvEasvNRxaYBZ65nNvzP5S",
  "key1": "62xs8vkTX2hdpkVtynoW1JUJRKssaiUFYzhTDoi6QGmZqtV1pLuHWA8FutGRYKBwYYrHCHwgoE7WpRp79S16XGHL",
  "key2": "YZYwacS97ntdbXQN7xW71g6fLX4GkuqnzvC9KKfPhGbUzFFvbyj11VwcpzkS3jcZAz5hGoLRqT4QhvYm6ZeCsU8",
  "key3": "2CSiqYoj4Fkq2UVGmYMibSD2M5xj7DmTnxSXfVhqCseLHiPMDuh1EKQcpM1itZCb5papHxX9HYWdXgSpCwKonLR8",
  "key4": "52JeWcCesiaC6LVMfJ5vfyY1H3h8pwWYXvGUw2MTuZQdtfUvfDBcd7eBJQYxpGCBuCvejaoirWYrH6BvyJcHtvEL",
  "key5": "4ZnT2PnX24HSMhL4XxMr2m6QHfNMxJUgjkuZBS8a9DUYfGu9pTvXWF9JPCaVSetDeth4TNo1WsonUzQNFi8Kh2pa",
  "key6": "6GdL3qFjnb3uxgWe7C6BBsskfMcNctUkJB6h5ugffyCkQChSFsKzqxk1JLJbSc6hKGosxiUb7kpmAfFkGE2Un4M",
  "key7": "33ut2DJFwdtspE1ZatiMoQQvuGMdDJbkNptwmfYXRYeW8wANBXEN7LofUY8E892EUnTrR9K6BYbjmb91ufkmzZTr",
  "key8": "3Vz1c4SRmFrLnvuj3wxZ753CcTr7hwv3rdNngHr6mPKoBJPKfp7KJBt121DEHamaKq1hjBaUwDUPhjfYJgvEvXtC",
  "key9": "2AuxNSjxqVwvr4rbA4o1zYsY3UyNTvKzGvYSrmUPryrpVZSUZpULRh7p4Gednm5p359R3uofkrZtFn9zZ7zaXGm9",
  "key10": "3oAMCnbErTC13euVKAW35yxyQRiQBu27LdaYPDKXsvBh93Fj9GsjPzdhvknuCAwyfaSvczJnuBFVhK6khk4ELvyx",
  "key11": "2u2vtRzjass2nUUbZ4MNRa3JGJv9fPFjhLejQortcG1jwyAJqfZSheoL8xTTLswVmh3Gapx5XiGFAkHPrytCzVYp",
  "key12": "5pP4nfNwsN7WyF5C6ADy22az54rTqXZN47btGpPEm6zo9zidBFRSysjBHRadKLCVmmXudfhigbQkVcvfjQKxtyff",
  "key13": "RseB4CnDv46Mmq6a85s4S6PDGTZVTahraKTntjH349SNrLkgCnGYLM93ysUeWWhPRdjW6yKVsMqHPsMoQSrz7Rg",
  "key14": "az91oAytzceqNzPgdR2PbeFvR2jP22uTkm6C3Pv47Qe5a53iTaSzLWHpLzPhFUfYdQJDGBn9ZvTaDB7nkGu6LyA",
  "key15": "5B6fVC125KNZwsBgLscahugSehYQ5r64wYt3GXmkQQDsGSmPd2qz6vedFDKzWdMdPgM2qfS9yARkYJuUtDXnz1sb",
  "key16": "51WVjdYhZT9MD9CSF4JNQzLGWaif7r4v4gd19oVbLJUjTGzEThZq2zZKas2xQKNXc1pkhisd5E4vBEcE167211jV",
  "key17": "3RTJNgmeSDDYuMPhmZxFb2Kq9i4Lz7JkbdrBshoGpMe827mGVm8wSZPUozc2WvxTsVbEtu3Ek8VLBnhvL78kT2MD",
  "key18": "24WTR4L8GUWoN9oyTnkp6XpGgrn5J6mCo5EFHS4W9EeYJjHbrGqLPC6Ks7jvwMNSuFsb36zGzFk9uGFc1UVXpmh5",
  "key19": "31NP2tdZL7HoGBqzH6hrDf5ZPdPSd6TUECxNpAA6FRSJTir37rEGZ4sJBSJ7EkvDbcsCcKEu6pnfpVF5Q1KMeduQ",
  "key20": "3gLiudd8gGRmS67VzW95oPuyxuFjpSeguJQLEb43Hjg6jxj37qa6rdHDTmCAoE7yMeCawdqMFbUgR2DguqMy3XpT",
  "key21": "4jDR5XKDRG5v5ZM77DxHpRGHBe5q7PVqwTMFxgnwVAVqRBwFM5pKXa2Q5wJsiTXmH6ZfDP4Pk42Xh4iT6s1zyJ2J",
  "key22": "5BvP8DXeYigYxQJJU6isDAHZQN3s8wKzDUbiXXQ8WPGowBiSLBUAWT2Ff6sEPuWoBd2woFHFktRf8HL334z7cM9W",
  "key23": "3PysdZVjDsfNJvTmbu8Mu12UDXMwJ2DU4LbH1SP3JzdL7oaupFbAggQapnDKg63ZW3SRCntgv68PYWJjxqz9aTUo",
  "key24": "5myLBeFZRNGm833sBYfdnTg9Er9sS27rNy2chMP7dnY3q4PV5UHE38YThhLPHTAp8PfW8VKxE4pMqb93tcZ5qVp7",
  "key25": "3re43RDqfRyGeKzy69SwfAbacc2fEScEL1MSPN6d55yfS16zdKcU1VA9MDkfi39Yqz7yp5zXJQwvtHar2fnRnCm5",
  "key26": "5P3uPmANKEgobN7fqCh1qrb2AqWzJzNXa8DYA3KTC2iz7Uz7stYCN4A7FhM9y8RPPCs15K5p8hxhiCHng3wbET3r",
  "key27": "5a4QYtNStAAP9yh9D9yhVsk3HiBBw8dCfFNu5yi3PoyVr53BjYxNmwBhSzrXKw51oKjhzEJQyqVwuTXv2B7mUFWv",
  "key28": "4YdDc7VC9MKuNFKnJ1ZueA3R3pY1q2dUppszZrTeNsM8CdAk6jgxHhtfYUhkQxFJd4SEujFCT2vWbMyWFLEuAYws"
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
