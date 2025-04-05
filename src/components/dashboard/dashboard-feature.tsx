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
    "243Zp2zEYPXawtqo8HHHzdjkbXiMdbi8XutSTrLDaJUw2AQBhX499wNfw8s9kACtR1WF47goZGvDg8bJyDEMZy18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CzqU1YeV94iQTE6Fs4Lh3P5nwDHYHBZGFBrEHADKGCJuSJA3iHdiNNMAkqjDN9C5Z2mvHSpCLcbKzQhcUpu6cea",
  "key1": "644PPAn12YkezfcN98gXRMpRMzTRoZEr7HHc2uY2EzCRBg72gzMiktitH1pR6oAQwoTSuWeHZDu6wpPBHidwZy8W",
  "key2": "5AtKdNpiFERnHDEhPnnTufrLkx2WRr1oRjJA5mMPoa6zn2L4VSJYQNXx6K1cwmNMZDn45JrzhLaxMM4V3kRrcCr2",
  "key3": "2ncaGQo2AYZJz4d7hwPaEE8pCPe6syzjG8Gf3b3TsESPZpckh982yFmZHE9YXKoAqTWfrHcC8xYp1ADEt3245qCX",
  "key4": "36zCFFt5UhtJTMPcrafGmS3DURadHecFo9hPxBvCXhUik4zpkxvsk56gtC9sgLG7cA7TrwpH2riBagv6AU8EjyXA",
  "key5": "5zZPimQpNdoaipGCMEJsRMZ246S11dKyxiuTJY1P1wXu3r8WZWJZ3uAMkydKeXFW9pBjsauCRo9ZnytyJCrCqqVU",
  "key6": "2m2tbZc5d5MHEZDVWJ7JBqmg4qASHFquwtZ17io5ezNSFjiEo2SHyTKPr11oePuJoMdj2nTyTXaKJz6oHgiAkP1H",
  "key7": "5qL4Jw9VF3HZFaQ5VP5QTvJv6mrHrcdEg7PcUZPGRWsS4HS8aRGYzUsP7YCcN5vfDjuKC5gvDjYuAncXN5DRbxPa",
  "key8": "uUvprqG6yGfKZmqfPSXuZKV8a3FqtwNGZTxhx82QMAhM29kSMZDQQDqW7hF2DZqhrJAmY16Nuzi6Sk1Cpdpjjoc",
  "key9": "4p7dw7icoog1rZWA9yrrPbZom99jfQvQa27SN6o4AkzF2PEb7axCL39x2z1jZR7DeF7zBaEYqYnN6sfHDVK8uhA4",
  "key10": "RsfYLfFGSkP72P9VgKpet8AWsevAwtFG5tprowX9SHxSa9F83WSRjWb3dYdtpH3x3uYqBfBMLLHDroXA43aGPRo",
  "key11": "2UQxLVmtDKD2eCiu9fpiJKCTvXGy61q2MPfzdpGMcVDBtTYNDXs7pRV1hg5d3hBN8iJZyJRsQd7dkD7UVkjvUY4E",
  "key12": "kaT4HAnPQskjDuJfwsS46fgdFz68duW9fr4Kuz3KxHH9KrStQM92x4MQwXp5bxv48JWPUr7bKPPac1kFBqqSBx3",
  "key13": "XNp7HFWN9XEfkogyHQfXmv9CvUJhvxqHKujQBgfFRSx7L3sgeAcBxgQSjh8RuV678HNBWq5gvmabiQWMtyiCTio",
  "key14": "5fpMPYahq21UdZgnVDNNsMC59XxKk4fXaYG7834efRJeVpbc2zqpZq1Tkv7Q2fi9qBvtFHwMr5aUddut2jyTwzJE",
  "key15": "5raRmtBPnzHqaBnbp84zU5v6VnQwTFuqQAa72Uxi56ZUoPLfPytDvSfUKaCKz3QgRPYzCPpiYqYLXLvUMLGAF1v4",
  "key16": "4nCfu97KYRGHxTCEJgqapfJUDSSoGdtUjhkmZgEyW1oEwSE3hMNzHgsGNGvRNfUfxE26ueLiwfHpt2Rr4LS84vFd",
  "key17": "23JsTWn2szmjFoE29TQ4GDPbxgFqt72e7QzY1xAq9WoTPAPJGxxTMSzNhc2uZJEXS47pQKq1TYT9aaYSsBPx3rj5",
  "key18": "4n796gHmWwr5VUSrtEnvZwnjv29T23YBkqntQtwQLdTtJiMKhxUUpi6tTqdCERc3x3weeVQZPbmiBeQoWdaJRw6L",
  "key19": "36RMzHcV7VsoNU9kBJvnLyZGqT3hT22cL4ZJ4hugR43e5mF6QhgFPuy7QspX4XexJPSoke9SxrUwKj4fCM9YUohv",
  "key20": "5dchooFjEzA4muxQN6uFqUgxFfVG22QMThV7tAy2FunK5SirzEw88gRyQXjjKaD5MpSbXseZQTseyouw9APs45Bh",
  "key21": "TMKSRWBLEGYzGmKFVjvUAUkoyfB2qEyqAF4Nkp11xWjwPjs8Pi33HbiP3SqynWCmEuzHpZirPf3JLWaujdTe84f",
  "key22": "4XZmX1spw3SHr45S1StAfchwJUkGAit4hnLmj5Pp5x2giTqu6sJy273z5xBLYj162SKRswKVMcDYdQJ1FSGQ1Kgd",
  "key23": "3K683jxTTwLJeDMAAVndnDes4ZC9pE7FyFa5si72xSMqsa8KATgK1Z8zkiDH4mwfWZEopvkyEEPoZ8B4RBjnfjrX",
  "key24": "2wik9vHAzr4cdmQpecyN64d2Z83dxGuR84cJGwLsREa8bgidw1mBwvcyYC2YYzrWTP3KoYckMkxX5maPrqoKVhzA",
  "key25": "32VuaAGX6gUPGrwX4E9nFgGoon175hpqH1MSH2bkSNotDD1NyxaHJzKiEQWH1htYTzEci6BsrCDsLqgXwREwm9uS",
  "key26": "2WoGwcXHGfQHRr53cazNqiN2Yib5aWKDPwgE19xCpBWHWVKyhaqShYFq5Q8U7ypH4k4eSFEa5EMRMpWXGGvvPDTe",
  "key27": "3S5TkKBZpaL31SMLNVVQrVVpYEY228BvmRLNY82PuLzSVEnpAGNj1Xac6xcJgbe8cabhfsWxXntxqvHewYaQu1z4"
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
