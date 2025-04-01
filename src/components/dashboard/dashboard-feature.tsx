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
    "3XkXtQnqcNwz2Sz8tofWJ6Fwo3HQwpYhVKiU4pcytbXeqf42W313puz5ctpjf8icxjJbKRokCRbSwyhyEyGX3S61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WMjZmY9yPp9quwvtAxEJYuncjkePez7osEqBZzdFdn8P3JFCMCMdoZmGGs3tgVAV7Vg5GF5x3VgjmfC1qdipgYh",
  "key1": "33W3HLVcYepZjwFghZwc7U9ezhwNyPwRQQ1DYSQZ1xvENwRw5PJyVns1HAHYk8LjFNrG31FciTHuw13g7roCX7Sm",
  "key2": "2kUJEj93XbLWNuHw8RZdGwJ4KUg2iwCQmPwdjrEmSFtKrQC4ecAUWiKzuFdLpGLVPnzkVN4rKmgYkoHXuChrBSGr",
  "key3": "fkRt9td7D4j2KW97hdZBEruzpGkSw71L5zVLjX7QPWQdyZhcZZzSrjmQUPn3UopZnZj3a1G7gazac4Nd56y9Qh5",
  "key4": "4o7e4Nz48DQpX5GL9xwq6WG6LWEYwTTffymzSCC9MDn8tPEXxhyFj3h7Yfwwp9rVu8xKrEQDwnzoPDvYmJnsK2xv",
  "key5": "SrQkV92nVJFjLcxRP4rsMdbEjJbcjeRa2NitwesCG67YnGpKK6YpjE1vurR8nagLs9KhjqZtyNxMDSo2KeJGT5k",
  "key6": "2abGjwC8rYHceDzyg7Wwmm1HvzyGZ75aYSZmjnQSfuGLSUb2khYXfxWjZRgJz3P7byd2oiFnuuErGpUP3YejAd7q",
  "key7": "5EDuDaSNxRN8wnJ6XridsCF6EFNdLZ5avrVKBnHHtveCUmystsDRfRp6YqxLY6ntomBRqvrWitxvQ7KSW7CYggYN",
  "key8": "vbPCJGMexM1KqCLn6BUszTjis2WEPNVvMLejxonPN3ZYMQoxrPNedq7m13UxSrqFqiMvLSTgEkrdWGf3rmo47a4",
  "key9": "4WVBYvgtzZQpraGYBsMiborGjxdK9nHrUsLeGmCZL42v3wj4n57Qe6epcF54eLtJE4F4wpALPX3PkVLXQKr7iWY1",
  "key10": "KmKYbi3u69iscf7NQWWeXm5bwAH12GYLPShiXQR4iaHsZqRsgdJVn8xP15tjCEx9G9ocv1Az1XZzy7e34iZjWCA",
  "key11": "2XBL6SJ1rJVRuDnVf4fccXJyNQSGm3GNuCnXhmQg8vSNKD3BmRc8SLZN8Ca9ywrYS5UnivNapXgp85BbdNU3yGbj",
  "key12": "46ypD5gC8rndMCYX4zbmiveLaz6nQ3n3bPAteDHjp7MrEqvKZB1anwxDLHWhceSNPs5zAgQJBWr3EsnR3LmKmSwF",
  "key13": "3BcffN924Q3Pyv77xfoHNRygRJxLY1GfuukjuZw9zHsYX95AxmJTSrJnxbhEn3RkijxLZWLeJhEdC682tx6yUGED",
  "key14": "4FCyp1TZCged3JHWosZQGVVA14YzmtcWuv2xj5Mqn67oxpSkwCPJEZWxaVFz214wjtc23ujzTCJToFb6Dj9Wfb55",
  "key15": "4rmDCpmL9yzfQVftcCaJCyJbGC7wtjWfyrppCjtydWAV2n3eN9spZTKgGsGEH78ntregx2HwCGepJox1pb5sXHZZ",
  "key16": "5t5YXhwh8YWoZmphUPBbg5tkkYaBztTNB9RBUDQWSyz7AkEEzQMSFxRLdeVnFPbsmhtr2gKkMqGo9D6JYHCNZRWG",
  "key17": "MC3So2ceNBZMe3ZTwH8bmidXpVS85qPGJDb9QK3JxhmWZtp8wCGQEbtk2xicYCX6kwqAPKCKvRwVpFwkZEm9tWm",
  "key18": "47fzZ8SuqTzwKk9E2eo62CGaG8EQJhgDqpoUF7zZGBQy6vjzjMnz1JCY1776fkh4hkPN8o9wXNWkQnX8or4RqicZ",
  "key19": "3GBcVAZxbRBWbnAwWpL7je18yeBQbwNFKNFaX1MezyGzgXGETE3xUSptKF5njRbqDiMRBrmwzttBxw8FqmqryXX2",
  "key20": "4gPFeCaYfV8BgsFLs7jYxx2pSpQ8VbqtYGoTK9zMTgKgzCFLFjhHx79cF2LX81Rj5soGtfNtsE9ERV8TpqTnoyZ1",
  "key21": "4C8NL77A5P4tA7nZ5LRhkmbszio3fWysVbh9kLTeD32516z17gNWe2JD67dXgzg1UXccYGLQ2mJ3fbnXbYTBjuDf",
  "key22": "5kZiSRrqVaFE23VFUsdNGxi7NWRB9wvNpUaexqeDEC9oGJp3wCfEhV1JWHt3auZkxgAwiFbzCBoA3DU2DA537Te1",
  "key23": "4GjftmUTPaUs5n4grBRtS75ofmTT9BNbX3XRDWtKKVxgJJ1KXGpFSMEsuN5ACzLeStKwEoMQm4yZYsfTjxeu9Kyj",
  "key24": "Z7D5JkK6S1b4uvhL36goE5QW9r2NyShL29JjuNkucdjGDzCao3Adfm6BZcJTJTZAYA7cNCnUrWh62m2Pd9uxKN7"
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
