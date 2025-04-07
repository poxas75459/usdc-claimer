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
    "gyUkCsykuKxaySKo9mkmjyEm6sjvwELSHvu62CEFRyY3kfUZ3zxeB72SMENszcsTCU8GFJtQEYizyLzrA6Sh3W5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q32Gp5mgH9TGbHppRtF4oStc5uieyzWN9pRF37ZjyzGZbNuJoXzvhtuoyk58n5qYJpJxRvAoDRjpfCTWqxXnYej",
  "key1": "DDsJFnP3txpCUPJXy1fiVRg3hvToaBBEAWnXt8Dap7kPtnq6VeY6FD7f9ZwS4pQgyYeCJtfu4r9RvYzQyipxBKq",
  "key2": "4nX7xAuXFfzpgjkDjM1uBu2ofz1kMz9vvbPDNdjumeHrrk4zqk9RrPQo41cNr1hUHjt4r2KQjZzLqax8HfKNcsjb",
  "key3": "5kvaXoNFjPXTgscXD2vjjgtkTFvXdP7tZxgD7Qp97a6XtBr6r3CPMkUY6Tr4tJji8i4pX9aWXFHBWYFESR77b9nZ",
  "key4": "2Qa1pvhRVJKaT5UtN5ExQKG3TPZ1adUnfVfi9jCDuaYfLwCVVibihxLcTjpwWRCe293Pqwkp8NT4o6u1m3ogmbes",
  "key5": "4RCLgWGqxYQ1zDsj24dgEdFsyYpDsEc8N948SKwjaW1UMYbAcXd69ZUgidQytBnJDv4ktDdtyqNd8RKBEUPjF7KW",
  "key6": "5bH8vTDhNiNvYXoJypVUtAkQpxV1fJnrPHchEV3Dc9nHEZHTubChrgwgAkyRjgxG6fDHC1iUDuDxjPxLkZYV1PML",
  "key7": "iUzuKUfRtXCxkNghLdctG8Ma9iLqUDGL5ttkamUtYq1LyMWTF3RqRGz2DnTymFfaW5TN6pfGAj29u1oiA4CFSnJ",
  "key8": "2GF14VZX9Sz82mVJxwe3cYyqK9pTCABANmeKWCAVkwPyeHmvpc8c9ihaMFCrHBpCdhewz3mfJTrAKfXETeBWYSYC",
  "key9": "3dB1S55GfjucWq1rp2gtGgCmHyR4jjX4HpeZYm2oQJH6b3Mcq77qC9JxqU3FKSLQrbNpNcLL4e2mAEtqRmxhwduW",
  "key10": "3LM28TBFb81xzdjgbyDFGdGzkLy9MNhN8uX2Xnzdfvjwp7U6dpJZdppWoavqJpCyUSfoTf2fcKrZmcJDL16dsM8a",
  "key11": "2VJHP9qgS7f3w6yrxzgkfJbmdzgfEg9gRfCUWyxiQjr2zxkKy2e3XFvhxM73dDNbrDEJAEzXg2CJ7xD8urj8j5kw",
  "key12": "3RZvCmiQ7xzqHSXaWnhLCzTC5cSfXcxbrni3TCjpYBVm4nwHdgFQJtRV2kNGiZtFPeWPsjQUSfi6zEavkU2AYkPd",
  "key13": "4dY6T4TQ9Y17TNjHNFgXvbtbcfLyAMBLLVFWHAtdEEPzR4cLvTJ441o68o9x2sp9Tyv5UjtjEMq1oKuMcAw2rUSj",
  "key14": "5trh4BAGJEipVrTDcw3URtQ4UFZWW8QTkYMEVPJxLPbCdTkVbSndorYRLXZm3w9XxBjeSgTNajw6s6hSdzaK9UyG",
  "key15": "3ckSDiPMmQJs2m9yJPzzYMnRFww94EJmbCiZ33v1WPrUNT49ZA88SXtn19AUMTALP4J4m394RQ6XUkvgkgP27wp8",
  "key16": "LjaxBBj24FEUjcwYUe5EVeMPKtvasjTXNsTGqo63yAEBBVpToyTo8Q9FTU6dspkPGzY9hJsPw4pcDAAUzA9J5VY",
  "key17": "4LkckkesRCYthUFykMexKTWorib7kbPHAaeBkG4A9VQxVJbo4ye9v2vqa85y8X8HoFhweFGCGBMqp9k7uvfYsTij",
  "key18": "4a6evrsdBLtWvofsLGf2jvVS7a9L7nz2oxV5MdEfkwQL1QTPBesriVhiYy9Q9Bd9ApvNeKGNZNQJeB1DhwrnbbEP",
  "key19": "4kn5i4kZc3c5k2JoXEG5UuTEGvubyNjfAkHZsrHfSHrtaBdzRDmGJkboeKWNnsrHYVGHeyCfBDWq5mw7tuAr4Yjq",
  "key20": "4D4MYrFR4ycTCF96NLSnd7FvcgxYEbDUsB6BVb8cRw4sn17v7WNshAroBM8dQfSFFPugEBfxRDxNGiYYH6mPfFKb",
  "key21": "5YRdCyeFrZsE6SL8yk1h65fwuif7jAVY6kJ94BWnRgUxQsuKpRENqTECVz6iD3fLCGJoG7kUEBnzqTLEmfRJnfG5",
  "key22": "62HvVpoZNh9NrmMGMA9vKE7Af1GmLqky9qV4p7mgeeW7SqV7QzBQcMChh5UCfj3JQ3sts5Kqwggek4vqpkb45sFZ",
  "key23": "62XXZxzPFN5bRssazpzUWeZNmNFSCUNH3jAnHZK8HvVdEsRBPM4JkpufJa27Pjkdqxy9HserAraJSE2vfPLJpJbm",
  "key24": "5M6EPDavLMco7FwD9wD1SHLYvMcPHNCNmLuJMx5pqxtjxfsP7ipykyanpiJpwJAnW9KXkPXicppnb9LPD4STjVDw",
  "key25": "5iEYxMQRsNQinZ1FgTVwsPcAmdU4Nr4QBzeJ8NUVJ6iQcstBSfTg3ZS94VteShjVgQ56MRTG7ZPWGrYsbkaHCP8v",
  "key26": "hkLYQcKApgsX3kSr6ZcDP7yLA4ZDL3GeFx4Juvf4R2FkzpWXBtAkudLZ8xNtqEV3oKFPpLrjqrDC1neq8Vse2Hx",
  "key27": "WU7e8bajSyrNPfJbt6ijP8NAk611UN5BLb4WbrNYnbb59ATRRc6APcqzm5smZEFrNb7RpaDoHmjr8bjsiBqhcAV",
  "key28": "65XSznHU77qam42uJNfUpkBcCLW3ofizuqC61mcD39qisWTSiudp7iNHznz1qDs4qP5xJR3Rzg6BKYENjz4C9vDw",
  "key29": "34H6qi5CUpLZPu5acgt1ddWPAa99HGJNd3pCxJELNrEZ3ShPGEagY7nSNphHBpANtUnnLdz2M5WGgyM4TFbzZMZK",
  "key30": "4yTUfdeDtmhAvcZ8wmwJyHyLxw4EDvmievWJq6sGsUHgJFYF2piJGaGzDCFspYV7cw9YM1NYDcQYgksYnpm1QVHr",
  "key31": "5iRzagfNxa7s9W3WD8SWvKD4nZPvAc8YSWjbmkVbcDS4E7cXSZYDB3AZXrFxFXsbwscvDCiTB2oZMguKp3ZjKLmj",
  "key32": "1mb1KayRY1fGP232PH2bGUAfoyJ6HEkxNDqpDSrHDPgkWeaUF8kJBuu8cL9rCsJDEnAPNKg3GBP6Py1aoBZDcyq",
  "key33": "3LCUPGpc4TDJpVMgFfJpuZgP9ruNcrsyNVQe5mc4jJHmNSnRCUjiXPgEqKgrP49PcZ33pcJ2TL9soRy76x6sTdA7",
  "key34": "5YZKNB8bBJipzc8HhGrenQwR2AGQTAMbrdKzzMbgBui71jM9wgHsw1LdwvutLU8wKD7CcZzcZtTZxKSoRFPFXhvd",
  "key35": "3hnLtY37e8gPTMSDTuFU6PPatDqwjuJS6FeLQu3PYmsoptFevSyGqsyzAGCB39EVvxWb6mXMoi48qsvBW8JswRdA"
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
