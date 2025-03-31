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
    "48q9kGZcHwXCaKso97DVEe28PZAFYm9QAZP1ASWgF2HN5JcRg8KxfswGrNr2QxmZ7HYSGpquZUgLxj2yvsonJMGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qv7Xd8QD4FAUq1K6ZyLgj4KNcNvkAaMiS7nynM98dJRDmYK7p49bUcchrxaWyaRzchrUYLzuNxhZ5tYbDsU2kEi",
  "key1": "5UUX2G1CNfqsCVV7HbC6KvVPhHLDWuPXtnHoG2XX31BXChHGBLykNqWrv85qy6HRmQ1DBdXQ3iCQyKscxgkw6VuL",
  "key2": "2ZREWgTCeTjdLJV7cEdGSapfQw4A1czPs7RY14esCmdFjYT6WqCSTxJvxERtjQk5gsZ4XuPVAVuw1eVwav8gNkC1",
  "key3": "29DgN2ob5XSXSKxhNjEK5vwoFZo15XDXPtiYR4JAfS8spS9ENGhFuwonG6DxZVbrP4LVRfhYwByo8mrdUcmn5CnF",
  "key4": "pJriGT5ehSwye8Pzde6LncJLhw7kVZpe46BZ9xjAfbdQFJEjvyjHAgBVtqL9cpPstxcbNxwcxnNh7nWeUjtj6Cf",
  "key5": "4P44Gb4x54ZBP11bj4nBG4TYgkquJxKC4whAstjiQEVtQwWNe9NkQYXqM18ftM5QtBDSXNahZrKDW7prQBbQiHk4",
  "key6": "dCczkrucwyFT6TnpkQgmQriwhMvfvw4MnxqZVhEcS6cfED6vifbGXiMRyoipGV7P9zGPpeVrrVVbhJqtvxPHkE3",
  "key7": "5vH6r6jEBtYAVpdQFhKYZqEqyreVvVSucoarBZmbuW1MT71bib4Mtkt59yx8HLTt9u8M7Sr8zYPdpXKAqkjRBoQE",
  "key8": "3aeNPCQs7ibs4X2pxzQdWskJQdA5SYGxmAC5TbswGR2fqZGzs6fhrNjq4AbnX398b2QxtfbfxU7CnBffAyFG9uQf",
  "key9": "54CiZgu8bUUftY6Xx7Zm47cBr2PJBD8mz2uX1h7MXA6CcTJpaf2c7mdnvyVnrZZJ93uhgvfjU8fPNDyH83p1fbE7",
  "key10": "rMbkGomXpEkyMFnfRFybnhAd1wbJwVzzad2HcPsnoz9hgt7mcCvTKdo8kqZ2AkRMJSZ94Ha6XCuqUr6wvRLHCgK",
  "key11": "5pLYGJhv2JkeN1jevA8ukytYGcGYiQWY6LG5NUWz4iU29btwq9ybNUD9a3Ja9YD5YHLaifC1Czueic2LNNEd6AiP",
  "key12": "3AvKsjAnTTWff46PMrYCY26YaXfHUGC6ivX22e6isogUotFxtmjANjwyCmCFhZwQHAKooK4bZL5BDduYBhhTQzh2",
  "key13": "4tTxuMCG2GU9Hmrk9fPVa4uyeiZfnYpzfRzBUEa6gn5jN8KmxqcdKgJGXNqdBkQecguJSJPdr3LTEvQVdE7enwiR",
  "key14": "4Qqk2JzEbzgEpLcWHgnNVbuBNPL8yGrg4cx4m6hoGncyeXPf3RiMiENnhXRaq3DJBCTj41KbYj6KH4PTP4hbPrhf",
  "key15": "3zb7x5dGmRDAd2kp9ehn3b2KXBWMTNbZHZrFbT4Uj33Cv9dhLWA5yDj2GxtgzRkKhcjZfsXyEvh1B3KQoC6iwTB1",
  "key16": "2dhq3HhkRVFisYGA5qdybMDhDQv3kpAdRSDV47z8mqcgg9UbeBAsPaDcrwkAdetr69brmZnnbwQbZ4kwdnWV6WJq",
  "key17": "46bH8HmNG47UBsDyyNFGjELzay2PDV3dK973AfGUroq2qucmajbTURF15djh1wPsJXCY8C1JP5fkr8L7CKHLFAyc",
  "key18": "3wf528tSj1ZhDRRtw1kPuXuH7eb5JrjkSaAiYaygnbLQYfmvGt7ZuJkacSoPpFoC7MENuLeew7Azr7eQ1xF2X551",
  "key19": "2JKRUDuxzR9QtSFcUKUS7BFS6ASwExgw2Up15sQZWWDBADDf9BdkVpfd5fW91nVDbDjLogWVsSgk1KQWrszN7zP1",
  "key20": "5NYmUpHfcXSmUz4wB324HFfMpM11HQwivHBRkacBckdPnoDjTHLBtLjh87n6JSsi14N3fAws79abbWmG7XdTABdK",
  "key21": "2hQb4Wkg7spEXkzecg9d6UZZrdiwDMn3MGh2SsoLnqSmmyrxuS9uvf4eKUZpAdyYAJ7ZhPUCNynecEkikBFg34ej",
  "key22": "65LvA7J5jZ3u5H1esG44WvSmL1rzEXdGjoZFPCnG8mLqZckmHBb3Sg2KVRdNP3eQdGQonkSWGa8EN4yrn3cu2X1g",
  "key23": "pvPBGnnsAsRRfnKNYCfiDvK4Y18e6Pv6agfTzddCkSFXDsg6yZgkYBR3fjSGqWjB3vy4XBLZqZU5p8eGNZReCzi",
  "key24": "4RinzNNcqviN7xdPAFwP387Et3y8dR4nVwDA5VkXKMUjVXXywjhmLU8tZdyUD6eFPXmnn7DZXD6eN4UYHQ46CnFC"
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
