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
    "5xKg1JT9hywHmUgdH5yTcRhTH6Gz4t7mCj8JeW5zWF9YaQnvZRhEq9TTrpdePuLC4a6tyTz4W79gRHdr6WXCLMJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HsUptZ8Nf2eVobms89vAzaDPnHfPArVJiQroE5s9ZDxyAKFnkLcXHLJtE7RhBZk9KUBhawmJb99opG5nZHGppB4",
  "key1": "57DTf6dW4ZkdZ2eUFHJFfh4B8TgEn16qUFcEqFtTD4zVcDLhZtDGwNWkefk7HEyKBrfme5n3k6GFXdVVnFjRbUDb",
  "key2": "2Co6p1cB4Hw1eANUoLj2abFwBAGBPLmAeEDMt8cCseqGYwMYD7TTE8UBDGjVap6UeTzGSjMpHkgRonK13fjkxm5k",
  "key3": "2Z2KsRDCoAN9xi7Po8pzAr4jHK3oZeMLdwaWjfXFYmAMaVwojWq4cFbkngkfqx9tay1r7Kuj7eyyvWgRypnFfDh2",
  "key4": "3SxXzc4HGhkZfupJT5FPGx8GuUvAHLyyqSBkvhC4ayv9yMh88wtdpMYPPL91NQPULzUHprDQkzMVmF2EFbn3rEsb",
  "key5": "3fDDkxNqDT74DosGX9PRs5R5LUmQAQwDBWt7Bzn6NjHfBdu58yqNMi5YZYFxSGrUVwLi4pTdhgUmrtaFCWcaK1Uk",
  "key6": "2P2wRaoQFEF2tLDk4Kc9KsDXVEWVdXyjagpod8QodaVU1WHsbVgUsiHK3FUU4AnbEG2w1dqS57oRKddyjDqxtRqM",
  "key7": "ZgcxKkJoyJjWETHVJLNU6gbVnUXqFMkSv3SVLrH4Xtygk2dmN38e4tLUmb7oZbjmK7KcP3Fm3bgpwKuAEPir2BN",
  "key8": "sNL8MqVKunAKhKoEkXJXEig6rbLhVVYBxY2VMCTGLARr5i9rUQDAAUJvDorTtRN4YRFHHSSHNkZ8ptH68rFjyZK",
  "key9": "2i22DAnh4LsdoRkgmChkUGZuidunZnEMwzvNX8cdB3wvdSATURxduKNhBn7UZma6UYkwupU6fLozKW5ULLaC2Ycm",
  "key10": "41t5icda9KW5vFxMKDtHoJuQ3jxFBq2zrUi14uVBbyRgqU3bwUHFJRsozqYA6wEFQqvFkdKAHxeVSdK8dmsA7JjC",
  "key11": "3mPdPg4Z1hnisvd3zVAzGv2y8jmFKNHWN5J897kZHw9H1cZxSbYDRFDHJgGzDXBCFLZXkkRvCH3TF11sZqyaHCA7",
  "key12": "25GBD6F2xUDS4oGC3BFerQAdvEA5EYg4aXhru3oEqtn2zeJfiPKxs9VLCe7UcnnpoAKBYdTPQRovC63CsZnLUndi",
  "key13": "4ZJMGUnvAEDbd6mSaixrkUjF4wChxPvVtsdJmiF35PEVcSUYm6kLw9p8jDJs3UfMHGvctrLoRc4tywLkw6kTATyX",
  "key14": "5uCJ6HvNWSjssFtbg9jA9qTBKfbrLeN4XBuz3Xt4YYVpoj5REJzAiFxeDQmtuuw88c4uNKxqq7xEXKzv17QeZD57",
  "key15": "bxnV9bU8ob4YG825Lp96xHmP9vtak6Fg7U4zHkvxTzm5saVpAiVdES8LbMvcCG6BG3UYFxvPt9Bx7p6posHTPZ6",
  "key16": "4S6ncWPaug6ECvLsmUz5CWd5fmWsPFKMFkmSJMXxbBeyVFFkSitmfPwo3XfgKKiP8qTCzmYqjiBTJijpxrr7LR2p",
  "key17": "3ChQ7mT9gwECFGKv6TjzbkYGSXehHcRx6wS6fLHTSxsePiEXAvrmucVsHp4gBBBoq5FkF9BJ9s5TF9fvAn2PXhkX",
  "key18": "2Y2FuMWHmm1G2rHSQmxJNq5T5Uo4EGjUHyjPGVHxQAY4DJ5xuTTRt2Dx3uNSLfK6RsT3ob3qB4BvzPFTo1rGz4U",
  "key19": "459gcosSmWWddSZbbBFybEFJqAkoEsmhJ4VNCQLF4HEDMEGp6FvLze7ive8paGruW7jwfs5TjRM2GqTCAiLDDTwc",
  "key20": "Cq1iUU8mEL5dCJnGtgXBu2mWXcWeS8YuA25o5515631SYfsXZQHCXixiC5un6HvSCQqSrMUnWRmuTJKSvs71Ehi",
  "key21": "RaSYxCpeQzdpkXkpWdTgDBd3oVVwRs556Bq46bMkKGuBH4wezGh6xRrZq53Y8R94BM4Y9Hc94t4w9cBVbFXQ2iZ",
  "key22": "JnPJzfhm2oCdo9hcH8mN5NNjGaCiXv35StUJBmiYaKxDqYVNZNA9ekvUTXXGaCVv7dm95qdqPWXxxipHdrDCYKr",
  "key23": "6DBcqbFJkEFLdFAKV1LrZ8gzMpBhGrXvKsooV676Fs7ayVhWVKYn9NkaR5yqc5zMAwYZqre7vuD1VxpdA3FvjbW",
  "key24": "5KxfTHtxcDCJyZtdveAD7egSd7qFz4fR1EnrTwi5Pu5fNsuzCqBDZTsQGgupisuUXanDhNCstPTCwHnzJntE48xp"
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
