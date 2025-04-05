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
    "5GqF1wjK3jiuwsYXKsg5VCq7MJB46oPffbHg3fws1MWdiyunwcSUDouBhou6bjRVaDsZkVewT9r3jgAJfaRpFMHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H5CE39YGE3QZ1Cwu7AwxWcDN4qiN4SHsppAqqN7hR4Qq8M5KEmYbXk1n4SBy9NifcT4sZmcdsbLK3TmNYxKNfKh",
  "key1": "2qJLwvU3YRGMqi2eCe6LdWWXqtuGUd4jjJS7duY4qb1SJSSTbrek8xzwrA2SiH9C3y3ftGMRj1bEdvmvZapqm3kd",
  "key2": "5p1PqbUNVsLXh9RoCeZPHcyFhJayx2QmWPcuL9J5yRVJVKnpq43wdQRisbH4nMPQW8WDSQ3EJ95fNKmt6kznS3H1",
  "key3": "5sFPXCrpBBDfTW5aGREMUHNrsj3vPb9eQzs5yh8ra4fENzLUEph3VngekRL6RB8sH9xHgpHUPaREsY2Ree5erC1A",
  "key4": "2v4n5bzacadwKft49jvuT79uV6QfUQYB7BxwjxRjJfUZCMzbTEMuCKKxFxMdysDoTevpfbQSATELsgrez2XoSrtD",
  "key5": "B15nHPVnLjWEqRaXm7mH5RHDnJBmWGwCr7PPL1oeToiAPNGWjaH5mCLPmq9e42H3Y3PLNSum6PE97r8NRqJP8XY",
  "key6": "5MZGMcV6GC7NJwEVoHh1Ks8akdWmpjCGoEPwFDFqzN5F2QisxyfHv8nZLyLbRs2TnoxD21SAubtmYg7Vsqe23nU7",
  "key7": "2peegC6XyTZR7hW5A7VaZ1dSQ8tVC8sz7wKiC62sCNAEhJqFyi8bp2wo4Huia1Ln3erLNzhb37V6J51e7LFFnHay",
  "key8": "5jvd2Kkcp26gGYkQw5vW9gjAPm2vZUZLepajmNyWqamYwdJQuW83YNpPrMP8hcoc3FZrFh44R53dBKoRTXu9BG7m",
  "key9": "2dvevVBihnT7ei7yuNqJXxvfZgmPpmfYiJY7tLHWP216PtG1KDAk7YyveD2XbnVDcb436sk3VDz7XbkWuto8Puj4",
  "key10": "T9fyRAG756HydgZjy3Q34LzBKpcfPAQ743w4fSXoPpYjGmcoiKcw2zssfnGRpN1V8FaEv6f2RMwb1xEsh3etRox",
  "key11": "3EKJQwGTnVN3YGm5DZBJn6yhqhnvb7pzkURYwLDEagY3ssANF2F8R34fWzBaJQNBYMGQYnxd3wQZuLy6DAC6MzsE",
  "key12": "3qEWzxQWNQnrgHUNVhn48ZjhRmAaVVCac3TXYz43RMSR2xzV3Gtmtd1WStmvsdcMfcHxdjvP6VDQzReKpAdgQTcP",
  "key13": "3KCMQpeUStYjivd6mkZkvPw3xPVDD95qCyapX3RSpDG21yT2zJKbHbUpRiUXkM6CTQNEJNe1cGLo5qtW3FsMpTEQ",
  "key14": "5WpcethQ2KqcTrr6GgXN6Fuoj24ktb8a7cEDVArDzVFc7AMboCHmKLw7qqi9DbuxNPsWsDq1o6RkZZSYjxYSSwZ2",
  "key15": "2tCUQE91sVDPEpE75vvidzmny9Z28B4aN5EAkJNLtyoayxuR791J4wZ75zj7cP8RVvG4uZzHhz2Y3ZsVVbqJBh9g",
  "key16": "dkpmZhkpEzyvSB31Mzjokv2A8TAeHFdb7fy884pQZVNQDNoW2bWffTzPJcyfavwBzpUomED2Dnou3GiCCAV5j2i",
  "key17": "5XiwK3n4JBESVa6aQStHjHKe8sDi3p4hZzmu4omxxghRJZLzYDWDD7x8wCYQJYFAh9BiMBJ2o3bYKhFgxbws2pBH",
  "key18": "4gqrcZ7wEArpYHnApzgUyN935cY451H93wDL9Xcx7iDK4QSEGrcMtD2cnRGYPoHUfgBeS1qX7iSisURV9FoFsCGg",
  "key19": "LXNeyd7dRnNGoxEVWNDdxCUAyma1MYXBv8nRCQNwrmHVQMeHSDLXfx9Uh3BqLsdBZxHtMHFRbGXjrJGjPCuZZhY",
  "key20": "2djBuvxE6RMzF8oxgx9jSqUwF3uJ9BjDpvEeXBk6pYSvaz9s3uksimcpKeo1nEMEo81sJSZLbYKM9N5qpZHzeaKU",
  "key21": "4wLamQ39K3TLzFRteuerhzAv7fbXzDbeBe2vfSiUR1tXVVdtjdZyRamKYkmfSnuU3igjogS7d49j5Tru8gz3ZV4k",
  "key22": "3ZXbtPNGucgfEAXsnsz35GiszVLg8D2YjRnyBNMEenjog8y6pPh5aFQC6WtEHG8Tug6oZ2LCWggJnxYoMJt2JVDU",
  "key23": "vjE3zfEkbf25yVAU7p6Lc5ipvYWwAZMyeLNkPs9nFU9V7AcP3rM2ZAawAFTLvzufuiupbbGZ4xjbtXRaJnV9Zfz",
  "key24": "4AoasBbgovbPDL7u5KZ7GPAn2zPgeVhAR9zfLFpwFcibEH1Bz3a8Go9e3nhVuqRFptT6E6vBEsJDGyYkLJtL3ESB",
  "key25": "2jC9v3izfbD9yGtbGyWF59sCa8p7i3N3EbUg4u1eAj7C3zbRvfbEdwP9Bj2wDcj69AZ75CSnUPYKUUgeNiJHCU7n",
  "key26": "2genBDwBH7xDvpK6G3J67YGF9SpRkZKjw92CsTJy9fEoHsuWjeT6FYsjfx2XiGW2NGTKFrZDYZxbtGRpSp4b8dU4",
  "key27": "54LyPdGKB618zVQYvqH7Gdg4woDwtJhCAJgeEeDY7D7ugAJVXdJBmEqMYsBda92YkmWqsUa8CzZAbrwyYRJXNs6j",
  "key28": "48NdLtdt8wtRuFSgf2Fm49Ey3LzHUZQAeTZ76QjV858fJZ6MNUyQ7pinDFj7aQog53ZBm5zRbCNPRrG6HkCBeZ1B",
  "key29": "5eCdPgqktptnnFdzZXpwmpjui3psxQWpeeK8F7hYAg1DPAF1xr9jvCHGJHeKD7zxpBuw5CCTyUm2S8mQzwWAQ3E1"
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
