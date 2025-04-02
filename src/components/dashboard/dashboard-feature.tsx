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
    "4MjwK9JWqpvK2G6xs5QVqiWv3SoJhDx4qrczfHideBNJfhSfHwFkvddwyaWgCPmXyQmn2cs8vv6bF1rVZhtB6YD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EBAfDZHbx7smKtTi8qR2U9S4X1hWtt77ELZxXMfZwiNNNjYvoi4L681UvMCm7XP1z1r1Lmv3m4i9Aru64ST9JAY",
  "key1": "KKqQgb6zJZfvNJ3NZyi8ejCazE4WsBGadiT41jdJRYCN68UyoWxzZyLc66G3EyUBNN7dSoddrQYzasqyHeQ8Mc1",
  "key2": "3THpAFZ8SDftFjoFDTcNL6vemVbruZZjoq1HYGwisAoRv2uPq2WiGScyNr1Kax8Nvi5nQQe3rL1iUSMEJREhzECK",
  "key3": "nJEPwSqNopYn3U2wh3vtzGmpLt2NqqeGLpjz3RrmgQxGtS4K4ouUJdKVqJrjUGEYypyM5oVZNm6D3vuP12FkmUS",
  "key4": "mLYXqJiK93UCzboDawhoecVxu7R9YaDaHYvES3uiHvwErokMRN7YamW7X6jYVe8m2cW9w3oPqD4UpxB5Ci4XLEB",
  "key5": "5Gsk93j217NbjAsMaucqaiQwe42Tb9XGukBq2r8B1siu6BMjbM3VM4xQ57Xpv3hg4XSaqCGRFCEZ6CPfhJSBstNT",
  "key6": "2mEgBTc4dFWq9bG3VLJBhmfw2EYE751mzVKwV2mBVeAnF5LJA7vbWiHZVPtxh8cwVff8mtJffc6dPVP4XwbPT2uK",
  "key7": "23aezggdWSUdYxp6BAwhW6kfnFvnNdPF5adsPfVZ8uBiGhUgoWmx5tKEUEPVfwaxQ2DUdnE12a7dAKzfrn3cm5LU",
  "key8": "1qLStQ8oXFtuG6v5zx7p7zx9D35CLZuXwJHQxdcee5kBuoeyiajQPyBudMrTqEhcEGfQyNgg7pJFLP21TTA3d6K",
  "key9": "4tk6C5pr25ceCXn5Peb3cFASF5nNKRRfCUUJ61e63seiT2iKdkbpGan68USr5V5TGqvoKmBXnMnLmukWxPzX6Jae",
  "key10": "3FYDYfshmCyibruwwoa3mGnuYywGYmp9XeKquYYXUS6JeX7rYVYdM9sdkBDLmSVTzPf1oe5g2cUbnK3oUpGBjbgv",
  "key11": "2KfT7591uZs8E2Fwo5tzjEQtbS88HUs8iQaW5VueKsUDbgaK9FabVxaXbbjR8imKf2ZbaKp33Ktsfowu1CihBWhT",
  "key12": "5iC8WDrxwAx7HjzTNwapyaQcNsAhyXWFMH944N3arokeRAtc6eQAWoKRLCenxTQZxJiTqPPFuWRfpXJisgjTRyaV",
  "key13": "2VeFYU15pgH6cFcQZzpb9HsUAXpoeKM4r5zeqsLxgYhU496bqriU38c91UfK5a6i2mB2477BnM3cRCmcMzU1CXwJ",
  "key14": "ZUhXL63Gq6rFLZ85maaH9FHuuNDmiNRvVJoYE2gzFLzWppjDKPJ4v3UWLrCLF2YjyEW2fyieryCoYqy33DiRtuu",
  "key15": "3xgQr9Y3ZgkR4SjHsuGfZoR6CfNToGQeihEmcPgEFn4ZwghUAunZpgTFgGigP5TnZawXkNLSFrXT38cCdAbDT8PJ",
  "key16": "4NLjG6gpjEXav5oVpUu4SRcWzWh7BWTTDrdg9gXSu2RLJqVBnvHucXz51m8FZtkCKgwhQjn9v747cB9cPgXs3GsL",
  "key17": "MkfWSNoXLRuSdVyPg7HJ8FSnRCL1xYpWa5wNT2fJVpkjDybWHWZbWbuMnXdNNrafRAZ2SKteAvkLgxC7Rvb8FGM",
  "key18": "DoqCJwKENVHHWwLYeQiedvNWWqb6eVt3sBPSsy7xcA36GrfKzweqhVLSqdL41rp1sJKwVJvGca1ZszsbTqZdwxj",
  "key19": "3QgmQ2JXzpvT4QpEmxtqNFntpA88LzJ7eH7fwP56DqdTLpnkTgF9c4dVFaqHjWXTw4Cjw5UV4otChM67G1eBZy5m",
  "key20": "2mNw4RuuiMg6dcHnvZ4UHJ5xTvsq1gR63EVYirsmiRjh6tBTuEg7VJgA8dLGPymeeHPdmxVFoqYAY59J4rEL4wQK",
  "key21": "38qetx9pe5EbsA5tiCgkuaP5V7EUBLSMJox5smy138Z8q5RULmEcQEhx8dajsKfBAMqp6RB29WS7XCSiYjQN8BPb",
  "key22": "4YQhfSKeLKTa54VNqE33Tp6wdrgn39giyXbtZdUny3jT2aFxVssJq89i5mPN6KUrL3DQZJP8rcXtv99NchHYmMJB",
  "key23": "YtR6k1qaXUgPg7BZo3en7k6BuiYwucJe62fkcnjqPGV3r9SfvQ6iS2oU8Jqvrmz8cNJmFw7GaS3aRSmcQfLyKh2",
  "key24": "5YL5VGRDjM5HDcvXGd9p3MEikro1dXuSKuecz7HkQ96m8GqtdotQAGwpnDjiCsPHgbG6sEbbBtBi4ubnKjwJMuBL"
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
