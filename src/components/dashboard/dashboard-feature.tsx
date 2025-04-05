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
    "2xLcgxFRcJFMj7JhtTpcGJusjfLjocz9biNvwF8ZiPukYNCvA3GdFAu4g3JgYNFMgxbDfdizh5JYe3oc3qc9nTao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32BNc1BYwHiKZXH1K7kRA2ZjQxd5zScL18YGnQxQ9gCzKnVu2g9tqfG3kvuniUsj2STAv5P3PW4Tj253JjivPz62",
  "key1": "2Ri1yV2K2yUDJyJTvM98insBAag5ZewwQGsWULHZtagCNLiT9Ys7QqQ9vZxDYzTn6hevLzgTKNEN72bbvt4SFtqT",
  "key2": "VERJKzUFg1pZqrHjuvrknjKPg5idmQSvr9r45ijQEECWLenVhJrKxm4mjqdZhT4P6x6jKRy35U7y9NZZHbGZyz5",
  "key3": "5XGk5CkscMxZfX3V8Zy4x1q6nNK4myALF5jonEffhgQ1or1syCQFZFSLgwnWfoyxpoZb2k9226nz9VNZjFHSKgyE",
  "key4": "3dRoAWVg6jwo9yKMkCefKMHbQVL5YHAd2AEG7oEjp8cv6TqTPy6d9p4ZhXjiKjDkaZkMma4MtfVnEgkgWf47ZLQF",
  "key5": "3u5CLBSLJiYdvXANTJbQcUivFZAmEDNuoTVt9pUX8ixxTzDX3nqfyJC5awVjjzx4FzGSKJa8z4be5NPQ7C2EnqZg",
  "key6": "5oRYFUoUUMgvUYnoT3HUbFWqmi7hdz9NniRC5ZFcFk7XMzx8HvYyJ49fa39vaAkLWsbsBACXcUmLB5eFRoJdwzh2",
  "key7": "59EJ8T2BJJ7a36hqLiqwAU7G845t1857d43rBbxb5fpJ88quZaW8qbu33yAHHDdoAEMeyWEuzNnzxsrCHZ2jtAGq",
  "key8": "5iogj5q72vJTSyhw6D7Y64H4SxyLVwABvfvdcPG9H3gHECoZ7xMP87wSMeUkLYky9zwZQWnfKFgKRhhDEgGCH4Jf",
  "key9": "RMfFWN9D47Q5vMey9uE1WJreJ9p1S8BVcXq3xyMgn73dYV6sZJxv9rnLVVHJ6Geko4yWRPMb3CdScPmvdUYhNyV",
  "key10": "3GoTdrsCRAHvFF1LP1F87X41nwuMsjARKg1ae6KktFxGTovEiMpivTQ5jFotoDU7AT7q6u3ZQgbyDi9sbXwrxyBB",
  "key11": "3sJY1THUDmFLkgjbcjXoUrBKBXnqvCBPxvcayN2E14ptuy3LaWsvN77xNmY1ZA6Qq95divBS993czZzVipdWEHqW",
  "key12": "5ngj76zqZ9n5BrquHN9XSevhL3nE36bZasNXvKy5qgCcPJcTE3J9f9D94PTHTPjeNr61EnzZufsssNu4QZRgcLtB",
  "key13": "5xjo8JE8QPsYs7wGonvuWecWGXMWoprPREghhZCp1PD6r1HKNG8cdoZcBwnPAiV4J9bjmh4Kp4L5YfHkhCBVoD3j",
  "key14": "J3umPyfSgaf3WbnoFBrEarPrMooTykGPNv5eRNfnKu5fsjzGNv9NtNdribNMQmLFGjFwHojN9EVivUGyDYDSmXP",
  "key15": "JrGzBthap6Uec3eKBwHksQDUuRDSf2B3fcMxwGYUB2CQHGYS8tdqB8gi8eNMRNdy4Qu4xrPL4gH6BkSVGf7fWxm",
  "key16": "2KQN1txJcPJRfaTqBPPvA37xYvHGEJ7BAjN4cYQgi8RvJvX2Y37ownQ7PrDxtTa4NitQmpfycj5QW9LBvxzYeNwp",
  "key17": "2arAR5yjz98ZQJUxuuBM9Dd2tUcPY3Uh91YuH88UUjpk7Ca3BaCGtrC2w6fPYcz9KY4Qbt3PMUSDYzdxEPgnEEq4",
  "key18": "2Mo88XpHCV8guyTsZMFWVmSsugKncz6w5qJbTnL8ARUWLEiCQq6bPMZCNXoE8uPLZsAfwm5wHW78bL4j61Br3sAt",
  "key19": "4ssxrehM9WPBkPM9z2RSkkp29Zcd6m9gkj7zzaX7ZVMnv2tFyJ421V4vZF4ZB5jhiCcRxZNB2NrYYXXDejYKZUBu",
  "key20": "5x2YA4Vy2Knh2a3sNGuYK9kEuMoFEvP9dbGhp3mNVpCQ3WC6zt7UmRY42TFjhbAiJEfNUoiVXE9srE5Hpu83VK5q",
  "key21": "3LzAiFmAeCbV6ESr4qF5CKmbzhVYbkLiw8pbmAxSpp7ysfVhKCrpeeHS1mU1v7XCi6xdytcFQpEw6uUDzW5oddtG",
  "key22": "4d5BokddJ4PPVJrrdvXDXaLAVuMpJ8WVokzFFoSXDqnzmUfcjyS9QHCkYH5gpARaLn2ZQyaq8bXc694Asij4kUkj",
  "key23": "32syiK9R1xsjhXYDshvvEA9hy529qkrAWvSRSyNXWgXezQDahabzEpvDwiBYqusaeALwUM8LhRsZHFK4wj9Qsv8W",
  "key24": "3XNpvpAeNQ2M4KGBF5HFAfWPGp6kKRGoxt9q6EyJSUSke8ETxyYSj2GJKFohGEKj4n9Rx4FGqw6w2GN9jwaDdocN",
  "key25": "zhGUS6PfmuE2215yat5Se1xTPwVr2wn5hhHNWTgUG8SwWpK6a9vXQvsszCh6mURRFAr4PJZ7AzYTqNSG1eFgZUD",
  "key26": "5jY34bpxppYiwMsWES6MzDarxJvX3XRi2XknfCE24CYrcSY866raE1xv5GXtjy4r2Y2yyxmwEzsb7S9ekgpsvYG4",
  "key27": "MCxMx9JLJ8NDvxsBLn1jAr4uaoeRk9DyGV88abqhkX8JZ8U11xukboQ3aXMvKhV77RZSn1dUcNMSWniirhaALkH",
  "key28": "1opBLFMiTWzm6Brb524zfahzRikDVQSMeCoYofHZofr3AjgHS26NYpcvPFNRnyuXJMLi2iATvQjCxA9NLQ6w3ch",
  "key29": "SAYBWZCZME5gNGJRCwo7wwmL5j6s3H9iNg2LHvuYJ7Rme35DwUYUrjU2KsGSV7pTnws4cWazREcE4KbZ3CxpcJR"
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
