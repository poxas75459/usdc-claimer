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
    "398xLRyfC6JVfDxi8T4epVXsBLybL3yfeH33HrCn6ES2BcnW6rSyrJyZMkBE9tAj1gxyp4naHfcAGdqhNdpp1ruH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MJazmJDUkvZj9NZctFutZtcaQGQvUw39YwsAT9bgbfc2meRx4S5T7mZPW7Zk9ehwmeemkdkFWPv9My9ysA6CXzA",
  "key1": "4g4tqj4mm7DRCaf47t8qxdcGsqh4P8sT95PdvPUhDjzKVHUzaiopD1xDpDvMDwFbGCXMhVNdhL5SWR64Vd3fVccU",
  "key2": "5AeQirquERRFzjwY8FiuFmFNA5VaYXmuApG7nQaVkxMqt2BcDQwA1FXdz4B8Q3LDF9u2jkZzoSDBnVTPQmxRXjYq",
  "key3": "3LBcsmHBohMxe6XABHzML3kDeY8BJBg6b1qN7XPj6cKRund6A454qvscQ4ckcWtvUphhFsAAnHRhChd8hKST2nYW",
  "key4": "4G57GApum4PfAboRAro7edMh13s8rVFjWDB39m5hRB8sKWDbDBroV72kVgF9cpm6RvNuZSqNBRaQdxMWAy6sjrVA",
  "key5": "4bVxP7C4WHYFYibvv4De7irzQnGZthi2y8StH47x6Xf7e3tnhymT6GWqQmm6RQgTecwd5YPVAnvT9hCzwDYj7U5W",
  "key6": "4L7i19FrcKeC9RktcnU2dPjiD2ugEyG3kvQxR8KsJkEzUCqdAeVnfrxKLsyycxMy7RTsZQmKyR89vQPMhVb6bujk",
  "key7": "4x4CWFYnUCHUNV7CQq6xz8Gxn8QCNy7VdL1vunnJa15nxr81nyvNqV24q9Wzg4JVEk5NxJewnWs653NfZ1cVhXGj",
  "key8": "4V6kzK7d8BYgH5EQqWDAbvjNNZZehadK21zDGCDVsm1jyYcrdKUKSWxD5w2dRum6sgfqGxHQw1m8gFBi5fwrpahm",
  "key9": "4mBqhbf1a2QjiENkSCZmcXPHgRt7qPhf7tDZkBFAH46UQ6bMesVr4M8B7Mb6TbTKBjMv49cJxEYU8jve8vUoSQq7",
  "key10": "QssMryph9fyKuXKZBRENtPpE9XPdogcesT2NcjzGH8pRmsgEG665ptposUhYpxdJ19d6Ruzcx79qBWxzFUUghMV",
  "key11": "czci187YfN36Y3bVBYJiNpxaRw4jdw4y2o5fJGYDvUm7sHTaVPH234xyUnsehcf4gWZW5aH5BXWKqQFtQRgr6P4",
  "key12": "4zjQcPdWFVv6Wf4ghSnzN23tKVfw16Ta2PZZMkqRyEsCVQcQK5ysVKowgniZZPNFiEaAYTCn2WzMLaD1Qt626woz",
  "key13": "2EA8yaGgzQY54jwTXnkAjd5sAt8d2pNpAhHcrvv475F2UbNDAzREff7YZQgxiRFopRm4FwuUDKwtvWw4kxvAExpZ",
  "key14": "53MJf3AbcPZZseMszM5oZ8ojhQb5pB4UkBGen8admWA6dcCpvxtawLN6orZdo7ZUzQk7L15mMpeNcfS9v9XkexrF",
  "key15": "4oWq3hds2hxXKJVUur9QksFneNruszfgnp3rsiRq4Bwqhsp1KbB1fphRq2Dd2UqWtyEZVQUTxh4EdMrkxoknuaYL",
  "key16": "4EEU2nzPEhwop3mE1Yr3RpJNZEas6aLxMnpxkZStPH6jXDYbjF5VjdpWjEJ5wkxsPuHQeL2aFFnNLMmVaH3y1Dw3",
  "key17": "4Z7bShyMtp58umDNXpbqdAHgBqczC1N6DTzjaB4KmmvdwTTdn9GjzbzLYxzQdGXDzHLAn59p8BKtd7YWJtZpQTVG",
  "key18": "hQ3YEGpCy4AniuiYfxk2azsmXKAcMyRdasWrVAyL9yqfsyW1Y7iyLBnqzwDppS6PVME7psnKQed2VVtq9WLjrk3",
  "key19": "5pXmTqFGA1BWou2svtZQT8EXAPbAVeKzh5N4n33P7u8oasoBaWT8c7pcAzMCyGvYoQPEw8ZXTDmPmuahJpewSQb8",
  "key20": "CMVdFMpWLvnVjwCpbu9H6Jd2w6fKESHzyhQgNBsT5FEhfRNohb1vqTxYWz6FVKemjqKytFTdCXGwkJMvt5o61g4",
  "key21": "2SMNKwwzdJCnG4o1KHAb3NJkc8dLQvWo3CTPqhD4m7WgaT7C9vECjtVhqURJJtsBFGbSqoakP8tnK2cJbNZ5NChn",
  "key22": "3zi2eXYrEyH7kvfkFFMJVp8PxkDFMSDeEFoVQEsyzJ53PX3sZJ9eskVWzLxuD3mRL8B7c3gM8PXiJiQbrWP8LoM7",
  "key23": "2mwNJusmCXu5hhqBdwMqPTG1Zq7KHciC1kjYYWfsKxjL9Nb6yfP5psPVYgdyccb8fnq9RUo57w1BfdYP94zUCf6V",
  "key24": "4dd5thhQQM6kGxNcFpir5CFqtTVQrs6fvd5macuBXSD3qr2fh2ufNq1UGv7S9mDqPFWt2ms5CtECcrXsUZ511igx",
  "key25": "2gMZH8nxtGuYbKyw2Lb2v4AsBbkzrmQcT33kiVfoUUtsiGtA2oXNKd74cLyubciqFxorhggWZbXAVvnGR5ikuM1q"
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
