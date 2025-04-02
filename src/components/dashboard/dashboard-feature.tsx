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
    "4H45JYFo3VhcoDAP6bnua8S4KDu6Skydc4LcDvtUPsuMFHP82BX513fRDWZguaupFhnN1sLqYv6gD7ooY1H2cZhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AM1u3DZM16xoHYNQz4KKbeJpubRD3F4D5o195fNYjMoM1B6fuhe65fkVHvbLxqaGf9wEZfd8zsfjrSS8nP5F8vu",
  "key1": "TZsHbpgHuTPu4L2MPYia8fA9oW9UMpRbpAuefrZHkJTLuwYAhU4ekKN4Dhezc1DuNMeDmYsErAMDxMM1Hus4gwo",
  "key2": "5Q4e6pq2nynBYauPAPZHrqgWywd1xFiX2p2DNKKprS9rJajaY8JeBDwVhJfRXaKy2qEcVJ6DufdwSMrBG1vuw1D6",
  "key3": "4Pzj1DHeQSvaRQWemKwgXpdVkohP4yww54jDvh5UZj9TgwSTZuw3oiN826S6Wui8d1vtEEVWLQs3jq47kBUJR3wd",
  "key4": "3wFKbksvaCTYiWwSNidTAtJeP7AZDb29zA1VEeUwnGkHVgLYVEWvwutEa9WNrA63KAbJHkURTG4g2jxKUfsgY4Br",
  "key5": "3b2Ss51tcyR5bjVyTmG4e4ts3wio15JZMsRo1wHrESpRvj84V3Q1E2CPgWnsaZ5ASUE7uREuXoTku9GSuhGEF5rb",
  "key6": "4SjLLniqjtyRTQZUhhHCPamLG7nxC8qvh9WtfL1FXQH7ooxEzbvDreQhB6SC1HCkCEtEp3nMLuF8U6b42cVtPEhf",
  "key7": "5UnBWoWh87dkKPBzNtsL1gUJc2u6BthxD4SiSzinUunehTQBexwbsLadgpA4qQax2zz9TAkyvVTgXDkd8KkgvZp3",
  "key8": "sd4Z1D1za7Y4RVXxWmWRSnePRK4xF6Lj1jSwzpQrd92X8XpzSAGkM62wRoBbQbbBzMFLjiuKQTeuyYEegJCwaxr",
  "key9": "31oXU2knY7Hs9gFZ6uJkt2uFygApXF2UvQpHKWmic9ovPhv1nhXaneEGgJB9TG5NGba8nHcK1Q84fsiqyCwMsZPQ",
  "key10": "47Wr5QkeQs4KrrSMXWmADgfCU9iAhB3Hi3W6FPdWqirFwrkW1FrjpVUWNCpVCnsF9cPksRDgao1vMc3QhLHs3nks",
  "key11": "bVS8hVAw3b7EoKgumM1RrRGkAc1H8pMsD5gfNYyeExyDDGaDq1ctvG8pmYj7o7JeWi6HUgP9ifxwB1mEFwe3eJN",
  "key12": "aZd6r8wSuNgPw7uejUoNWiELbDstgvMFGDNj6hECJKDeq1hc8BftvopJsLNZeSEbhkG3Bjem34VA335NH9XcHdE",
  "key13": "64hCQhdVQCMRNnPxqJLK53uf45EZFdQ2KrSC8ofV652VABZ5945K8jL5jHoMGboKsMmzFxQ8KzA5h6aeKyu9MjqQ",
  "key14": "4f4ZXVaB4uszT6AbNf6tJ1MTLrwnyf49EuSFvJz2E7sZxfngaZZ4zEeoG4DJy5zwapxLRFYw4puPgepKqz9E4WhA",
  "key15": "KxtroMV6NRkPdFyaeNNrDECdimMWJcbggjDKbYmgc5YCo7t8fMeHTLTTse4ki3LUAEbFXoCjdp72krzYPMzMn7g",
  "key16": "65bJ3GDjvwkkSGyPDVosQNJcnqLjJtCs4U2qqtVc3oz9TfYBNhZP2HVJZU2WfkfKPoXenRm3hcrpx1T5fCD4pmHx",
  "key17": "5AG9QiG6ZQY4aYucpMeyGqLRXwzTcdY6BcYmGesgeuLX5Qra6doukvejmwaGsWszyNsHPNijg3MmuRGv4ScJTpqm",
  "key18": "5oEVihmjDvrf6YifftpPQwKYAadTSiJkbWVViWV7mSbFcx3GWje56GfqAWLHkj8sMz3661Xw53FVoYaydxG23mJv",
  "key19": "2vbF5P4SjATx7sAijbXA1vXvihcBPW9M8N6LaAoa7a3x8Pu16eEkSVU17d9nGeKVwKzc6kj4PM1NNnPY5gLCdQjc",
  "key20": "5776GhrjByJ8p1xXTfqx54T6kTWBaL2eSj2pfxpavg6fYhv64zQWztUg8NmWWgF6sPp1iK786AXjhCN8r1Px3L4E",
  "key21": "5mSoJHy4Aa34civgAbdVB5XQmLCFjXUGVZisfRVZ49qAVU27UV895jDh2V6DbRxawk2kJN8gou1f5jJTgcGVpsef",
  "key22": "2Hdf4JMLVPyaG2GnRQLmnPvMg992ds4r7jRZwF1baQhetbqfCe8C4WukzDYvybj1Dc9qWeYtvDwidSm4brFHbWiu",
  "key23": "3wXhTK7WHmYhj615ydMMQHsR5Ck8coibJiGGJYLUgUGTWK5zXkCQQvGYXnqYwiwbN5KHcXNPhN2p6bma6eSdyMwG",
  "key24": "2AvMgw7s3wtkHf9QBeYmDNAmwGCa4c3U1jSHyduJ5RJpGWG3Y4jaYbjtLp2V3jUNxJt7xBRyAr4PmbVvgqzwpz2F",
  "key25": "35u9AQeT52di1Lo4FGuy8ugaR1jYFgLQHUdhSZvEHc1fq1t8pgZTDmXE6Jqk1r7EZqJoPczF6c1sVVSqn8LbhYiD"
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
