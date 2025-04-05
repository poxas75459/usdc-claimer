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
    "3YqFZv7gMcDgk7eT6gr7eak3Px8USwPq1ZaiENdVfg4ixaZLtbwTg1optvBRsHy4xLbR54ZjqNUYF8Apz5Y6drEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MT4bMHuhHyH6AQFVcLpBf15TE7u1ncnUuZpmjjhTAPnYUEoQE9e9rkkRRR1MYBiqGjpGFm4Yh8MTgeHkgXVt1sL",
  "key1": "N5nhTyRXnuToWYU7GhBEfwpV3Whep3NNSoBsu8e5nLNaziQXE8PBPjNECh3tbv7nAtDdjzPub5CgRpLssH2UN9Q",
  "key2": "oY9e72o4Va4bQa4SdjCPAoZfwdBXDdjRTrsTAYnz6Npzo2cGzbUhWDc2YaMtVeEqwcxe5nyJfQTSGefLN8rxwwu",
  "key3": "4EMhKVo1uv3sD1Mn4kQFmy4xHYqx2Xd8C7Ci6FkR1xkYjCTkM7adPjXLKiHzia47fdWotVEQhKL9vrZLWL4P9fds",
  "key4": "2thqn6wt4qpZmFmmMtkDQwEhRqT19Npmt28P2yRYSaEU5ZSgNZJ564oPy7MgyKmLkcDHYRsrYT6kPdR3XkPgUoK1",
  "key5": "2zHhm36bdEUx2FJuFimWSD1a2aWENGKaeqMHGGKg2xvNcCGcd8GTk6G5CYECUJQ72JaL66R8vTwhPn56oxpN1kcp",
  "key6": "5Zyf5kJLV3keVBRQxCEJEiUoyREDSR2TsySnLuY8MHg5YEYaaUon9SfgSL5Fz534e3BfpdRcT9vrX8EtNkDsJHiZ",
  "key7": "iDAN8v6Hp5NvavWFTevw4M5PV2zjcbWK7oEBu7ZEJh3ER7Tvd8f2kk1HmR8rVXC6BZALw1suhCbRSsju3u7saSX",
  "key8": "4BKCfDNKua1PLjoUHBggNmhH1DZWR72YparhnX25UbF6ZTAd5JdY76jc4d2CdSWqueW9mMvhGPTY7UfWrvhE79xg",
  "key9": "5MSxhMh2gofx3LFN6n9bnvGAAxFrcNyVH25EtBybVvE5y6ccqEodfvRS3F89GhvX5tTj1pma33siN6jNLqiixuDu",
  "key10": "4PNR2UmHKbCiQ1Sbp8DaVZeSM5LjKi7k2SGn4rYsmjjq4aJxCVHRTNvVZeaEqthk8VboBvhdNLzL9cXxs2mqJAFs",
  "key11": "4PxayubmkL8Tu78e1bnjCRcYMCYW5n4Ua7ybR6A8JGFr5UmAy3dSm1LtT3NKfckZxjWagpfLEVMWGBCsP7URGFFf",
  "key12": "9uyeHW6wfHtQmc85yTnc8xWcY2aRbgFFWAFSASmgN8dMQ7yonR1EHMq38K7pwZYojhgQSgrTELYSxu9aLWTtPog",
  "key13": "3T7yswN9xJedTvdxGRmBDH1bNPnt59suyzSNdg8MYiCBFDihBs1RWKvvU1TXBuo5biMkhFkHQMimd3EG4xEWz7Rs",
  "key14": "3qoyyjiiZ2JtfHd7GT39aVcU9t4JUg4GB2KasPawzJfX8qwjPwsSsSLy9QMcqrKjUjmTBPrp6Ahgd6mfMerardMm",
  "key15": "fVeNXPRe5wgLZaCDxnv3EKffxgEzJ8hKJcHk2t3VpCDCNT9zueeUe6SrfjkaFjGKSfZjFGY6YQhd78aZKpz1FZv",
  "key16": "3DL2N5tTcrn7LZoKU73JraAxXGmNDAzkMQmrsAJ1tcg5DZcCmGkkwzsAYbNTkjed6jTFjbQgWLaNPXmP4CDSDr9A",
  "key17": "3LEu1kxw27C7VhCbiTU6KHGUQbyme1GtQHAuZePoUHQApg65NahM9PCrV6uS1X4JjsGz6FqDx3oRcrvkk9DtH7wo",
  "key18": "2T7PbKxvNF35bz3xRkDbR1FAdCGSCayQrUELyRbsdQeaqNpmccncoM9RTec2gEk4vLQqWifzvKhxsAWrEVmuj7jq",
  "key19": "3YqFWjmjNJr4ZRyKgT5YScHT6wTia6FC6tQt7H2qKVTPiUbRj5mnKJ4GoJMvSqgFZRyMpzZf6zyAUUEfLNTx15Tu",
  "key20": "451DH6sqxpwbBVZvauZQLgLypmjHirhT9yt3XBdum2obnF8cmPc8RMxZxSD3JzPEbzayGcpMZyF3EaJMbJrYWYfZ",
  "key21": "29e3q5Xg1LmiZvZjG2uMWCNNckqZ48E8piAD4BxuAADCXjdq5T5XW2X2h3W27dWWEQgZEofZHALUFCoQ9n2dF1Z3",
  "key22": "avuETwc9f2AZ16DhgfXUq1VLwempbPYWG8PbYSbZcmcNCTKxKyTRobpWA6q7hppJ2waWdiYcASRAkHucJbnfsMm",
  "key23": "44YNTqA9bqt3H1WAkgRTM3vdhQ7bd2BTdJbbn7bp4UXHCAyLwEQwnszzEVdr3fWNgpT3kXy3SxWyDg1oQpDG1fyS",
  "key24": "5kY9LVt8aKNQVWHY6KveLXrzQSCGhA6YyE6pswjXKTWimQHBM1juFpFVYyGr5XjEHVk1nUfbrgMskrgALoK2SfnY"
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
