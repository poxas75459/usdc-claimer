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
    "4C8RJakTxN41Nae53XXfcg8Rvx9H5SC4EyGDoKBKn4Y4d2cKNZUTBx1573gL6FNYZtrZfDT24T7GxVrXv6yCzfS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x4N4uc4zyFLAREV9XUqEFYsh3EqYSavNPw1m5qC7KETbqrf4ywLt37ygUY3CGW21iCx8xEwSPGrkgUD8YpnMBBp",
  "key1": "4sKHd1cAoRcaykKxMnjANmnbbhH1yEZ3gEUzU8SXG5FYjxJtzC4uTEfxrVnccyv7E3bgicVg8gxPDfjzhfjnensS",
  "key2": "2NH8k9c3sYZwibKaiHQSoMNNkNfX7eKEdYvQHoXLWifdF6qkq4WVm8UScyzJ9ncSybRjpLSu8ekqkZyT31RhtfoZ",
  "key3": "2YLoo4FupUcx9bYaTUn5X7vT1ffVdQjnsRyj6iRgd1FitK8ntJUESBC7pu9uRGtcMMHXbY2bhN15yrCMkcj9cvW9",
  "key4": "3g33HLMVHqyKD6XiDNgiYWwA3hufb9VpCnDkahEaXCxVbtNwWHqF1D81XT356wpXzmccJPpME1bQPyhGykd6jUAq",
  "key5": "3DGA4ZCQaDyhFUyFUAvmvmmsCEd589tHB96CHcJ6GUyULZdGmDxRvCBmdeLfSymqKTy1nZevKbgc8f8fNvD6ZULp",
  "key6": "mJcmSKqHYwt8Ar66VMEffJUH5acZXG5uBpFtEZ9JasZUJpGGnsNvmqsXdNxpFw3dLg6G8pewPakSeApk38KyaGz",
  "key7": "4NauSsxfBFCUDQf7uah9EZCt9nUQDeZi8KKChEnBKEJvMu4NCbJQkRw17Ghy91ihGyWQhuaNN6xyGcxUiSpPQRDG",
  "key8": "3bSeL8o5XxpsrUqEAFUKXLoAc6GmQjRGNF9PH9t9XLt29geaSLhb54up5qWEjyQmr4H6tMER8iUUs1QyrhivrG36",
  "key9": "2osdh5ueMYYEjX8P51nxoCvmL19uC8UdvQ7juMhcSciq39z99mrzExGeUucc14TCm5T5xbpfKvUQdrMFXJjbSQoB",
  "key10": "5JxYzyt35ofBQkVXjYP4YKNsAK1qAVpeWrEuAeLBnodvKa7V8BaHEXGzXTvGitrRahYww3dASTWQVQ3QCi3HczPu",
  "key11": "3j6Ms7KTBiQ1MoWN4gSJfZSNcwAsfUJHmkNHXHenAqb6Rrpdim5mXEsrPfm9WWwbUaHKEMxhC1oJ7YLWzqrrqgrD",
  "key12": "3ycXGNR5YpMCmqwxEGuyNhMcJHCxJqMz6QkheHsRpBiYV9YeAzu21tYuPBjhn8DajkSNwq8b33pPhkijNM4mgFVF",
  "key13": "5AeyCzZvZxp2C31bqR9gcziBNMWXxXh5SEZzCoeVW9RjAsuvvLxasiHZVFdX1djXCNVJjV3bHRty5BSFgiNgrcnL",
  "key14": "3HLwADhxaP5DcJrmfhwCw4Lc3DAgp2bUaMrby1En9JgBaFbq5Bykf2hpVJxfvCgtJR5F7hKG6iokgCyGe8NA5E6D",
  "key15": "4AdzX4TevGCgTSBs2f48N5o4dE9Yth7HXLA3LDQjp4gWgbbYUTPjqMDvSyBneU5QusUpQXupKCZSBrEmNzxeh9u2",
  "key16": "3NtVhnmS1oGphNh89EkEuKdxosoPVPMbtyKLYEPApwzSniggyfRGaXGNHNMwLDeYNWtTMT5hy6FLE7oW1LKoknvY",
  "key17": "5YWzanQeJS484UbZ55vQoDNWT8LSzThsFvuUavpDcNqazcGAynhHPyaxFcLRGPmUaqWk9aAEtmmqLUMekB9ai1m4",
  "key18": "2bxA4nTQdAZc7phUmrWo29AiyBqRYhq4Wy5HvpHy6jGzheZmyfaDvb1g7fC6g83cQ9bbXoFDbfkV5GGNuKtrTf9x",
  "key19": "s4J4346gakZYJ1YBGXGEBuqLgHSAmUh7YgLgiz49cJnTvP2VaMBC7irXUQET8gN2a8Tk1HbTL8ZbujYxyXcQzSn",
  "key20": "22WzQ22Ye3AgKNr6SFj3GBCwpwiikrrYH3PAweHUDuR8hzeeEv41GiedSu93dFkYvJrLsw2ML5pXEmnJmConXE2d",
  "key21": "ijAnmCQ7K5QUFQngu6g8iBpPYAWzHQwGteDvcAzAwYJfkVjW4g2cyuWoy4rxzXNs5MD65n99CBTorkL9cCWGq8y",
  "key22": "5E9CxiuauwwAHAUHZ45E52Py3HPqqtTwCdToAPXQod6rPQUQtGLFkGTMavx8vA2VRbXebsaZh8wjGJuGqqzUg88n",
  "key23": "4M959WWnitAP9NUjTy2yLNB3rRddT6LHcEBP6tR2TeDnxGvQaoLCvX6BgEDvSbtWeQd79g6fS2upz75Qf73FN2xV",
  "key24": "4U3i8hoDrr4WfUJcCPtz6ZGwQkmVD2YjmwTxVEb4x2r6UqsgpnVSubATERc2HufY5LYuXD1SNKbwNzrnVfZTbpFs",
  "key25": "32mGCkU8u7LgZ8qA41MiziD6ggwQeYxAN9AMzFbbCsgSCu93VLkpZH9ZCo6u65yLEtWTrq74rLw4rAsgBe8ttPvy",
  "key26": "3qzXqpAFeQ9fJu8xWnBKCDtcHrmNwcpjDGty3jR58s7BXuddRUvjguaVJp3PySoWL8U5kR6WZaQbtavbqt6vxiKS"
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
