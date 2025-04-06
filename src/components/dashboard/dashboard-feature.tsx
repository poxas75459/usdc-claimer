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
    "KqKTZwTDGpRf45FYYFiVshLEWCCZyMGoWL5AV3vyZK8aD8CieYJo13nXjunULTHH8oUamuJBb2MWEHW9jT3X4Sv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3scMfNiPB7dM4YNXUWSGb34xbsaew7bFCmZEf2SPU4xJY5VeKbBWzgM2wsRaVtQ6jfPBjtyLnzRoryxumcZYNFns",
  "key1": "2KeQLCSb4fEDk7huGUm4mb97twGk6AEZBsDDPcx5ALi7FEUP9CdRAFbPMotDwxULChBEiRDLSMp4mMMUUk99sFpH",
  "key2": "2TA4PP1LTNoFznHmHBTLQ9Uzcncpm2jcfwZTsr8nsDt26bG6eVC3nCu1VvUDh5RfQBWzFfKvazDmWdc5Zw45yqX",
  "key3": "3C6wN71ceYWuFen3VeAgxJ1ZZq535t9BWY9xFP9g6UUtG4K8sk6Twx56eyjKSgen7bkVeYGs11Q4JrtA15LQcgR4",
  "key4": "5qCbEsVhYXkPguRVxmo5z7mwGH7NwcNBT5C4qNtRhfk8uJxNzf1fGX32Xqn8zpTsKPb6G7VUtGfXpQURRFaCNtpS",
  "key5": "43u5QMosvrsVmeo3ozvSnw3wQSNi19qdBy5UYmqZLXuBoyPHzWAoNkCAqnpGkab4qk2ctm3f2eEq4kLowVMikffB",
  "key6": "4fecHoYL18fjvyxHERigE912QJ6PrzzP8j87JS9zUEnhhzWzt5j3uvzY2mG9fYSfFvonAfiV7oY2QCCguBXyBbx2",
  "key7": "2vRphsJf2ogSGnZxyU5xfRKVwBQEMER2rsGxPv54RkpbBx16WS9wiRZceuQFeY9UyX4SVLKiSiyaMzZbh985kdP7",
  "key8": "4zyUB2iFukaWydYFJwHyXhYb67tgUTTA3s1AqTbEmnmJL1cXymUuLGWWfchJDFrNR4nCjsyieeniBKr5S67N6qG2",
  "key9": "3QVRzJ9x1fmEaQRsJjfvqBNyiiBNixYNHGZ9gjcddQM88xJKh5xVFzSqnbu2t6fMuVf7ECCf6Nahmm7CK94y7TLf",
  "key10": "Raofn3dfcnZ6ufh2rDcsJ4q7Ncikg6wWtHJUY1i6f8pVe2kNN3KDbujKyH9hZA8BFGM3gogUDjwEvSmbQLT8daq",
  "key11": "4nFCz3qKJpgj2yS3RatHoEJCPzXan9WKW8jqQ6RzGdYpDyaVZopvP3Gp7QbTD8WDyxTXftyfUpGCuzq3wQTgmt5D",
  "key12": "226rkWF6DbgtjhfsGnK1kxx733WJBJ51XScMmhbjhB9NrFy5bpN9Nz5s5h91GpaC5ibV1mdQivcWJoi1cZ3FyCyV",
  "key13": "4SjKfuDhQgKZqtskaEz5Z3SceJAmpY71gHBGHQSfxxpk8GUn5QJyhzPTnKpA9FZGhrTe7uP9Lu1XBcas5KgSQkvB",
  "key14": "2tsQfbd2eozD59yBMDgc8vuJKpR7vyEN6sEWKe3FxHoUKpfW2x5GoZKt21nWtrQJw8giuau5eKsghe3hNHZuipMq",
  "key15": "45YMjfn3KYaYEWZtxvcjvoqJAqTGPcYmyJMQjjMK7XA8ufXsJua3186TCGhAoiXdL5cFGmsnRoE343CMx6WMxEQd",
  "key16": "at4zA8gH9d7rWyQaMTzk7nULvcsUxnwSzYJM215LG9i8N49kAhBxVyQhUcNkDfsbssML9wP6ihmNWrxLjgA7LAq",
  "key17": "58eAVmLHzQPsLgP7X7vheT5XkL7J1b6d7VJGM4xkWanNZ5LsYYzDmw7GH8c1xnRkt5tSJWK6YUea8dgYiHzUdNkg",
  "key18": "3JZj3FxCXfCFEhqMWQeQGZh5PbLCcaxe7DzWXdizZp9qD9NR7TnyxWhuFmR5F48Xbf6UUWsC3gRBaxPL8XxvW2rv",
  "key19": "64nh5tYXs8Xcy6ndqKjWM3jLVExecBg8YioXxgtjYJANdo4mdhRvWTgucGvs4MVEKbGWqrQiUdLv79LCMuyh86CL",
  "key20": "5MkaVj7exH3ep9XtmQUBPivnzNhCSKC2wik5XwFHTZ1EcJv4AQ46KstnfhMY9F4exdUa3RCkp459AdtqV41c8Gvj",
  "key21": "5meLqzQykRCynyisjx6o2thtHjG6YoeMph1AN8kMTDS7gWNXtThXjfBWTWdwZcjPDfWhnMeES4zapvUuZYM9c2y9",
  "key22": "5ry9ttsCrRRXsRaZWxCsHg61eTe6NdR3DmEpX5xTiX3Nhr4pirg4e9dSy61Nhj3aoT6pNrvd7tyJqEznSeVNLQeT",
  "key23": "wNcqzCap7YHvjtCKQw8mhFMLSXuLBYosqA2qeU4nk8XwdBnj8bYLBYfmnmMTPJQgM7G2aD8X992J5igNHFczL1E",
  "key24": "5cSm3ckgjMNxTDRNJh7UC4RGke8rX7sCzUBKeSbtZNxvZokofqgG7FY7Do8rZsfp7KicFkQHiqRLPx11CVsUn3E1",
  "key25": "2AttcwiNsGqgCTbisQ8hm3zWBiyoZq3atW7QYqdZucHcgVNteFSjtt3YsUvLUKbsHzdoMhhN97TK5RK5SingR1c9",
  "key26": "1UjDxMg867wAP8tZWS1tLQdmoYyVfi5tag5K4c4rutZ8RdjS9CuG5VhMMFyFpjmdrVJz72xxrMuTbyF4DvRpS4c",
  "key27": "3G6r5tSoxC7qJyxg4V7Kth38tcYLoyiA6JzJqXDtsESp2zpXPswH1LWrvfLU4QEMzqsHRHBPBvFofSJMQo7YKLjr",
  "key28": "4617MJPVr6af5b8mZdW3cgdZ9CqJ2VUiWxSbDzC5cttD63EaLvPS2QoQTbxGx73uYxf81TdbjXReFUHeonAzPtVP",
  "key29": "2WcoKrvLsPXyQhot7oLz5xiUSQTRbhiQ9tMQooLyvnNi1pw91r89WsuwPBiDZx5iYCdQ7QoxK9SS8tDy8qzS1dvK"
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
