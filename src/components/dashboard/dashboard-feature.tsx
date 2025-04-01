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
    "3D25iC7YyqE3ArkMigj2E7Wy5TrhqH2CiCUFjX3HNuVENs8JdbKYkigF2hTQBzLCVSZEVLkNaCgEPwENXM3dQnQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Czb2QAWeJ3o4eDAAecCJiD8NmGnfGP5QbPMGy4ShcCbYxas8noBgXdEr6Z2d4E1ZjvkJHz13ZSSM2Gv82yX3o4c",
  "key1": "yDBvV5MqM5NNvpK8yFCeB9kVSbj5VpKtLsq11MvSHZP8BA4kGyi9k7U7xF5f3S5kxBy5bUPHVaYsYSkDb5MKRiv",
  "key2": "5KFhkVmovfZh9iPoFuRb1J79nbP5KgeHfoThCa3yZxmq2w6yjRkM5a98pkvMo71nZtkscMaawGLANUKWHCxmD5jp",
  "key3": "3f1gcvkqUasTHdV1mFk1EzFQwufsKkwDoXCY9deBqHYPbRacH1sMWbNrVGziKSFsrSn9Z5uSWUyQXb6C7wL3cbhe",
  "key4": "2W1GuUfhLGdkTDpZz42SU7nPuchEjCh3bh2j3xqPgfEhFfLbpTQdrE3ra1KkUzkiQAwT2RLUHVBidC1WisV7uCU4",
  "key5": "31DPj8SDSPJsomVrV5BLzLwbHg3CFEbZdzYmmcfXSxNjq1EmCqQqYFwuF4qU7aRYhu6XHc5FvsWA3HCYUg9bvC7G",
  "key6": "4VJUxrsKpQQNrzyvzNHbv6Q2xc7umv8PCU9jZA1GxkyNKVSn3Jhtke8i7xE9985oDsMGAFjfo3pnkhzBUoboRRqo",
  "key7": "4c3qrt4iqubDj3JYdDKeHkjYAT8xbWBYTJmM9qo8yEgScNQkbUJ2zrJjmP93ywTrMYKV8dvtqwbrYSMhhbdX8QJB",
  "key8": "3A9ix5B5j9oe3KuBC5avBhLT3Z8doAABwmVCB9W5qr55s2qgbwQd1wm6rqjYzdM2KVQ7x8LYSwSzvcymu2qYoCif",
  "key9": "43EPmVp7Ck69yYUa6Uyu7tdZR82yaZGkt9NpxmhRMWiYAZyhem65cQpu9WQBR5wLrHnuCbLdqWjR3jwa8zRff7SC",
  "key10": "56M2ZZmoF613dLT3hdaaC4JfFLdegJag9j77YBmCKd8PXVSMj8Yo27o6MMcNpJVF5gwzjHkaVcRyQFm6oxxqhYhm",
  "key11": "5qwEJ28gKMaKg3aAS1QkKdE97vsJsQpmc9K2LotaSmtHfFvE2ebAAtGxSMTvuNEiXkHuZgasbxZCJevuf3TNbu9K",
  "key12": "sSne1SxhUhmR8WayEwPpbeHQYt3y8LMzVJtgGhKqzTB5eCdFwX41Z4LzAei31JCCqJuDHHAhyxovPqbK6GfafsY",
  "key13": "2xaJVNWxxqhu2Kc1iJDjyjCGmdRQAto76qhDSbxymvfJw66kWoWZuwDxffjssxumz7uWx2J9V2tQZaVZHLiEeQjv",
  "key14": "3Pq1ungSyhtRwkReLdZPE3LPg9PLFJoCZs3Zu4atNQnTYfmcKYWVXpWoqbjmcaSRWFCz2tYfojTv7HJwtmLVmi7G",
  "key15": "DB89huYvu4sjBr9wf6PyAVAtGSCr9HkH3EN3uqMYBn8hGEZAnd9Qg9Yf7t4My6bapXY5y8DwqYthxAT5XyGj9Gd",
  "key16": "bCE4w7xcCwGw44zFJa5XEjX6Nr2mgGQYrBu5wvDfA5o1p3os1SdRtA5gkYirj7LUp5GFksGpV3x4YQvGdGpCaVf",
  "key17": "3QCX4AAxPWsx8d15a28mvF11S5St7MDPiNMVpsQS9p6C8udK51JbTaSkU3kBfXaNW4H14Nb1iL3R6B6aBjH1nEz8",
  "key18": "2KJyvfm2JQDTLocTxptgt8rzTkKdUiJif4YvvNyxnbUAAcy5BM8cJbEzWo3PSdU6PFzWuMy1djYyNThmTBYkXc2P",
  "key19": "4owbUSpfUbjQDtaoJbZ6VDvaa36DFDfrzXGCCNXWbj81TabY28p5EiH4GpebszzCowAUJrG8gZrQQ4i5UgUU12N8",
  "key20": "Utn4DNuq9ACahsAYQrUiSa5WyL4GCYWPuCS7ss2XdW4uFvoZsrFjottK35siKVBgFRHgrQSBzweofbAtGtQ6jqd",
  "key21": "5UAqdXrfb4puEJ9uQWbaWUKupgukXP317EmWRLAFdHP9Jb2jSyk79ussfSYCLkF1pA6oyBJJRH2kpJesmPdK6ZMe",
  "key22": "5MRTGzswWozAMqW2M2oJ7Vj6SwMwnCwHkeEqxN38deaX4Npg1rebjaXWwhouyGi4LVSVXN3uxc8T4797M4mxnwFb",
  "key23": "44KEqEqt4QLuDbv7WBPrXyoBsyhGwoEjcaU5wnjpHsuZ3gSwhYdXiZnFrZgNkNjKky684pgF8mB2wMLNLx4wpetE",
  "key24": "4ZYnb3gDWYZQdtpXarJY7TCfKeCDfE9ekWsw3CDfJC8urHRzNGLgTAF7qjQcZrvuY676cYKt9E5LNSQo8w93qX5E",
  "key25": "5KBPLub1uKywEajWx7dykgRE2c1kiZtSQH2B9NvLfD3KHz1V7VKtBPYNvUKp3FHFhi3P9btzki27jFb6FkDZv3HU",
  "key26": "4MTAhTjEMMdWKJiiAHWSkkrKauvuPJ8dLPFpJMqra9h8PfCPjLDbW3zAhpuu9npvcdo25gRBGf717HxZ5or6AZyW",
  "key27": "3ipLqJbDZ8V8rsHw7qtC6YRmubQWb7xxSKcbeQDpxJothD1W7DhJPJiQ4ZBBaPJmqmxed9DY2DYsUA7gXSyVozn3",
  "key28": "4dpPmCBLXJsVu8rCVSKPjQfuRw2mngSvFstLgC5pE1camsEY9ZJMmY56DpePKLXJs8FKahti4cBpBGoS5mbyjEmc",
  "key29": "4Kxy6maScsMPTRNY7mgSfsokHdc7R8T3xo6cEYuvHcqFd1uXUUYqtNtrdRqm2cB51biXAFdK7exmifUABi4qTBCy"
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
