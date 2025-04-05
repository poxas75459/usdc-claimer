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
    "4DLN4PnMLKrpNGi4naoJLGqaxn1SaNy9ERWEQfDXhvZobZjFauzkN4zMbSRLZaxDNcBwj93xD8BgztDWuB1RWF54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QGsPbkHwR8XYpMQkQDYoGPVZQ5szEcJCSN2TsSNkTossTAHkdHqeMJWQNqE23MC1k2rjnp8VW5JzGvwzqPYpyxr",
  "key1": "5YWEqfb7o8cvpqQMSLB15RoQ9XBmkyrXnuTeMSdXAAefNoSXyR9tQhLfShMS2EXBkZWLyWrSKWwKNnGyD2vQDBXu",
  "key2": "AP2zpnQhjpZCCqgmR9mc9AFk3qrvZzL1aVw5kPCe83RtvgTUJvCsRLXjHpekqvfP6MvwWB3d33kAFYKRv6yyQnd",
  "key3": "2yxAqfn6kYBqnp3c3zabhvguyX1LCtToCT478SELkGosS5kVugRppVwwyoQZwSvhX3Jm89djdbN6AuXULrW2uP5Y",
  "key4": "5wYef6PTLk4CBJKwooKCr3CdpCMqs3tfQ93bxKEnjFA2EfcDpVxDLGzNcC6HiPNBhDbW26v6wLMh3CCadnborGWe",
  "key5": "5AH4LUXp2poQ7qggJVGGc7BgXxExQfU6irqzZVWuy5f7PfM58BJXegjUmXZCufgXjeTxuJe4pqSaqJCnb7KYSwrf",
  "key6": "5U9caq1UvgKfqrMxifgmgPub45QQk9bcNCbyUCoYs8cAPg4UAzYBwYVnykxrA3gmVFYVwCf3WcQToRTLdxASbg3V",
  "key7": "4PxL7KPFsPrr6XQQbRApJoicFEHLYusTY834NdXuE2QppyR32ttjm3Rd1kk6J6jiJgiC9sUb2g7R3k7WnVRE2QZS",
  "key8": "MDyCHxEUaL5eJk96R1hu8JUs2e9kyGXpgjtXpGuMHaXBfP985RZuZwrvM1VHNiJxpNeBUZopC8AZCnz8bMBQqhM",
  "key9": "5vQ2uJsZZ17ubAXK9RERY69XJmoUCz7mZWPayPrcS8qB2K8GXug3bL9sBcbnTnuGqLR32BfvyDMygmtTAcXKJGjg",
  "key10": "fRpD1j7aEcbWmPkF83HYiKJdJiEPuMaw6fk1njHB6cxjwL5soBnJjQuuoQ3pDJuH9XRvBRe4Hv9LribrmtJY4Am",
  "key11": "4AjMfupXwCPNKANQX1ismkdkEeLhMBimaNqBCbKaFNK5gvAzxZWoQS5QV9hbGem2TgfM3mg8RhBNHXPt8Gx3bLSZ",
  "key12": "2oeFFk1MvdcW9BJHicZqRgBdBu3UqxP7m9bNgcCwTpVNi1iZYiRe44nsZhLyevqcBYPGWRy72iqkh3saG6St8YuW",
  "key13": "7fafxFkUjx216qwkXpUg7A72DHyJQzDm9qKEgSZkQJrBDsxDnXvgUctYnNQZa4CHrrmnPADNsrgGSpwxK8ieyTQ",
  "key14": "r3EVsuD5S5XnujkFa7eGoGXgkFj6Pw4UWDwNFWvRMGBkMJJqvUFLrQjSJdHPSNHUdAKL9dwWK4LCwoz9eEgW1Zx",
  "key15": "33HUutaY9WZpHeHgFgquqMcpmBrQ75Wrvcw8jThXiJKLp1JfjpFYxLfma5W6PoJm7N8WGwcBzHG1ayFEJbVycgWT",
  "key16": "3pZMtUjwui4q7rjwgtn9M7jEU9K8WNKjJxkpxrrrPUyP7JG7nKBkwGPHufyRHRzL6cs9DCtk8Zyc3tUa24S2ps6U",
  "key17": "2fv4JSh9JZztXFBZrLqXvEyMU4LyKJE4SLWd9yvQhrm5UXisjxePJXuvDmKhkevHTSfcDHa9QCoDMoiWvq8edwFT",
  "key18": "1JfFzu66p44aVKWmgNXcWZ7H3BJBmUN9wmqyr7TMK37nryUXK9qtorSKJqYUzBckQnwJ9UPfyka1tEK4qp8fwPv",
  "key19": "eGgNJz9dWDnvbN7Q4Uj3ivg6fk4PJVy5ft26jgzLuFVnYpZPXsQNEjv47G8V2ixGpQnUXtuT5qh3wyDeaPdxvKY",
  "key20": "25uSKgN1ir8HybuFU7numgxuGeCYfuH6HG1mzC55tbh2AjJeSSLsDCA3sNqP6REtjtNAzDjwefDw8DHyvdkGoc6A",
  "key21": "25PDKv2k2GV6PxnqhW9yPYqcCxfNCPCxRhWd7ZWANSyRefHr3E27SzRY3byECpiKoqgJj63KGLaNC5vXwxHx8Zgr",
  "key22": "2t9EbUKVqDsuxEWJ7QpbEcPkj381fo4jqgHmysY449SkYnDeVR1wXomJLdJ4Zga9foPkegcy8wTd482t1PPsGTBN",
  "key23": "4eANuy3rjC4WcKSzB1ZdwqwDS4f1oacTxhUXHbAnx2V7ERPzTQLa5JQjaduDGS3VEGTizC8qJSNzio1bZfCcWu6H",
  "key24": "hXcRVSAHmCnxn6MeDoqtrLgoNYJ7A6aH8N3zvk9auwEeEYE7adk7xrp1aEYNLwVf3Y2wshbr4a23MA4atbaVFv5",
  "key25": "2ezdG8UyeFgHzhWyYwqMLCfdgYiAMy6B2cCMeLMWguwnvtkKFFg8DboukkimHBB7VqRgBtz2ds3J9zzbYXAjwoV3",
  "key26": "44iVgfFJ23tA2ciinc372cCZhrEkifFiRm9Lw7WA8siy5VqEFtKBRAqAamnBxoHy45aQuicMMrwmxJWhxJLmZpsj",
  "key27": "3VJbEUpbScv3wqbN6gUesE4U1UrPghx6Fjv2nVYyUuC1dmDNS4gHXE9v6WigxeNooFN6sb4S1z6iBQevuRj45B7N",
  "key28": "3vNknzTPzvqxoiUjbvuYk2WP7khQNdSwFCNbVDaFBHPv1QAorH4xDZjJQdqg7CDFXYiZ5guLehj8cmXjPsVNKWug",
  "key29": "EVjRFEAhWNdBV36jZAnxCTkMuJsK5SAGnpcrC1eEzyeHMEC2hs9DAkaMSTDXStXpNdvE8WHWpqAnZUi7rk7y911",
  "key30": "2uUYwKRjv1p8UiXLmsAqAwY4mcGaUpbX4okL8NgEdQGe48rEpm1ecAsFNj1gYJtDo7ucuwagKNFj2u3PWtjYFd94",
  "key31": "66bioCstidye86jLZJ1LGfnpN9yBWxKQcsmQ78eTNcC5DQQLrg4eKqmueQ74rNTYqrzffStDNcyQeqBq3QTDPc8Z",
  "key32": "4i5GKU1JxdhmAYFc5TzT7HCcK3d8cCjTRPZWmR3maNb4rcf6a9riG1gZuvzHFh7njH8rphoUmpvJAoCWXRcq8BV7",
  "key33": "5c4cVJsLpKzzUpHskP7PRVua5PEumAhQGSugbB8nbX65xP4rCi6A5yGuUrmzRbeGcYsFVzLFLbRuK3XiKiSpz7Gh",
  "key34": "b3fGtRQVAXv7oRHvHad5cUpfGQjQYRcbNmtZEg3WwARMmjcEtHPq5fhesZjY6SYQaJAXz49UJxRh9gDPNkMZWGJ",
  "key35": "5F2hbQuyAVToLbnyikKyWHT9RVXfy4K2BzsSaoeESQv5sdbRdvaJcbKyAJ5XF8aoydrBgp8d8Mwh7aiTspkUxymi"
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
