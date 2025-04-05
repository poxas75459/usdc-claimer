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
    "4nUL9DMSCq9zcBPDgo7NJfRc7WkThx93zCHe5q64iEgyKtMRnCGnZxqrdfmp967dynKx7eDrUWidk48bLj3ifmKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rrJJdtGzCdqRtkiacqvqZzoi4nQdn6jqNtAuHi67dBSStyJ6pZnPax6WCjTRWmgSgafwNcKu7hTcVbqoBe9VX8C",
  "key1": "3ZA8thPXf9eY77DEQofN2a4VtZUFAJPDWK1ze241aLy1AsQCqFUrUVBC46ayihbV1XCCUPtoe8UZmxijApoYysFw",
  "key2": "3cfFHzP5hTqXGd5JrZDALVWKZ5szDkPpm2Ff83pRGvLjuRCo2zw9dWr7rGp3Cpfd3qNkfv7yMzVPmhojVBehRkGq",
  "key3": "5GoGHVciHTP9YzQXa1ynuRAZMNUys29BjdKmnMAezkuF7UxjRksSvcjEUx1phnJownCBAtcSHgSicF2B6cZfhfVY",
  "key4": "4BRTDydi2VtsXrp5VhAsjygZnsTQBPEPew6FoRVr4qMEPrUFFgzmLYDfomt2Q5sLarJyccPYhwAiQugPsXFsBFFA",
  "key5": "3zQpon59va9FFAKMpZuB4gWpbiKqZFJRh4t7SGGJLnMdnzWteY8WUJ7zhG15s1kmAbYk3JtNu8zec7AHcqFzboQ5",
  "key6": "5cEVZfmb8C3DQXkHwS8XY4rYWKHv8beumdZF2i98qeSCEywTQY8fLf6fM9eepfMFskHmeNb73LDFZE5oibF9vQF6",
  "key7": "4Xm3PrUxAxj31ZiZs5zfMusSozaL8azjWSAuuCa5AWUjGPRxrNH4WMA74Z3VXQChcynT73tvivyjVbBbpMzd5eZ4",
  "key8": "4TzYYZSyjBjT45e5V34u7p7PAhom95VaqwxYx8ei6TA6cCSbEqvZ9D86RYYqyQZ5BB2h11ceSyQf2TtW9Gy95Hta",
  "key9": "2Uy9ndg4oKtYQGRn56t4yxDMBo8rwyCXz2raxg2w5675mJw7HZfanApwDMkDd2fEcZe5H7xq5nHYZF2NM9PTEfW2",
  "key10": "28MC46fJDGReCmMHnrBzaHt2xMR6HXkjZoUAmLbvzXMj3Z5yqmuC8hwjZvNVjWwg3gyDSh5TzaoPDY7yaR7Ngjzj",
  "key11": "HMEmTHdsjZixXYbBQ8ynsc3nyX7DbCNouT66NjYHPjSqycdkRvc95noRKCDG4bqFJhhtjAJKxrTc2dAayg4hV4E",
  "key12": "J4c2qBTNN3uYKMKWttGD79HcJJBcP6uxN9UvftNiBbpuo157JiAFZEox8suS41yu6v1kRqVQP3TqKfKXSmmKyBh",
  "key13": "3oDQ9wsHqH7iyk7FjgkaV73bEcS1zumBnREtwZVHiF93uuK9za5YyHDU7Y2ScWGMZoSPmzUJoJFMQwZFnZLBKuAs",
  "key14": "4Fe6wiZkoopCQ1Y9TyGpgCrKkbrYjXiyCLidk3QdxEiru5JjKqtoFSELq6H33BEsNF1WgpL8QQT11yCcu5dPpcA3",
  "key15": "3DRVgGjJ8DWTdrbiiiC1fpseENuawRE15MtrkSFMsWKQJGV5DDbmZRvRuKF6SzbraNHxE5QjjAbvaucb8A87Kkpz",
  "key16": "2DzrCzg7zM1haVDTWb3UYVNy1raVEbyF3PC4yXynHHfcS4rjXBS8cvz174HPD2Dg6xizdEAZpJ4wuF1yrZ9gNt25",
  "key17": "4VMMUk9ATben2ubeAgMZeqYur3C3yKtqcz7x5b9x1STj2oFKa13YEaJrYALmJGKF5pMxC1tkDRKDSrpsEXdoeDpp",
  "key18": "hCyUXRSCV6qh9TWEHvsZv3H529LgiVxdE24UHCLe9S8FPJVLVRsbmVycYF7wzd83MGE8A27kuiUBfEZjJLzvxMk",
  "key19": "58BCeyqRuJ3cAruN1VNDwEwVS32rwQuFhRRq8FzML8wpdtANPUsARMyK6xZFH8VhE6P3VWw6LKJobx7ui996FnMX",
  "key20": "2uu7BNLeFNZRLeWq6SmtMi3ycwJYEqBp7EH8mJjPWg6p9nfqEnf9ns3vuNTpf3GWDcpmcCbpJ5hrs21c8x2paLM6",
  "key21": "jwaBgY29eSrEfLVMuXFxsJCpuz6S8KtahUNT3zar8uqLy5fkwY5DaWvACPNLfZ6RLUYtMtQEvHhNT1NrQ7Vmqzc",
  "key22": "3JNJp7wE3qt3knvcmkNNAHQrKZsqRfG6xu7CCTSjP4zBfMrDqGsCoKhCEKNkBhrtBkbvUXPRBZU9T3VXMBE6S6Yz",
  "key23": "2SpkAUHdCEJxRV3hzMoF5zxVeq6C9w6RGADCMhU5sSVpnAptdLkmoUvLGjhkbtX9MUw9cyecqShdcgR39PN3K2UK",
  "key24": "z5nMmruMLckiSUmfgUC6S2M7THThEUz9oNTsSRq5RLK2md5E6kb4raAvTLW9qUau7NPhhcrapGSENejuztXYebZ",
  "key25": "4wQy45cmKadVJXsfbfX8L4nh8BWCe1nY9dytE1fH9duj7MpgFGXT79eCe7mZ56dwwoHLd3ADE3FDZR42xtui9FqN",
  "key26": "52k9LNTgnRsjiUyEkkgEkGkqTqkqpXa91xsSNEAAeAJmw3n43exGpbEBCmJh6ZhurCoAccb6nn2xq1MeXwTUvmJS",
  "key27": "2KskvQhuCyfxToCR9WmS9FhT9UvZ6Xgpv8j4xtJkcJaAEGmd8MUvfXZfiBqxvyjU4SREqFftse7sd33P4ehTKad2"
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
