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
    "44PhUsP5p4ghaf5DMrGudDwmwL4kBJo4E6gpEYz4gmwYkFYjryVDNmyzg7ZtEe6mR5bFHLn8caDQrXVBAewZqEQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gTb3nVozFt4hEEZshKcW279aKGNvUyd71rELzMBen8mTU97Di5nejNm94d9ndfnQjE1SnaqcH9eMjuQiCiJEL4M",
  "key1": "2He11bzsowjdwmELaznNXVumdQdqBxJbQjtHUxqsdwKaaSbZ4JVVFF4ACnYGjohrnCTZgjwDXRecfdGWw4Ff4Cbx",
  "key2": "4um1zk31Dd2T8aj71kAg4NZ9uJ1s2ukoWkzbGVXh9GC6xMtU1CfJR1JxyHetqnjdwYFDycC1YtA4yTJW8JFssy94",
  "key3": "o7EnJc6fjRDVYyLskPPoGi1FfG7rvc2n8tErB87yUXKiFsjfhp8k3UrAGwjcAgeGpfPRSwPKoCx4aP5RpR8NwyN",
  "key4": "54CyVLyr3vE4zv54Nf1gMKT7XMH4GNgDiMbFfAPKSR72tMPHJeU4n6idWQgysKAAZqkSCvThQB9CwcRFvgaLTiMJ",
  "key5": "5fVcpWVXz4gvt4EsaZkfi7myY5XvwbjPg9Pe4M5R35hUD5XPh4Bn14cbZ5qjTid1pWTSreX7VU2CbV87b511up7B",
  "key6": "2E3pMa3Cnj255C7D71DvTBuRe7juYeyq3Lwsghhg6rFSpoiXr8jsQv4yNQeGpPf6kLZcbPPqkGZZVbgvAhURaxxk",
  "key7": "5EWnRBghQeS1j3NsRfaZQXHaVDFd9vspSi1ZTxJ8C1QrtA7uiDJJ99DATnPdfRc7MLDH9LKYapZApn5oiGmwsRom",
  "key8": "4DEHmru7W46PQ3DkuGZErpo5EJ48nSQF5GNt8VWfYjXhQKVqGNiyRJuv8o1c8qsZ9ETWq1cqaA7sSS3fmiupZYyt",
  "key9": "4AJnzvwejCjpTi1n8XkXzS8aZ1Amo1iqWY5xBNMPLr9Q4bYou6uth3bhJcK3DgSq3DvdFNPQqVejtnU34mgiBmqK",
  "key10": "5VVtWwEG17an5UactmrqEJgfoNzvRMU4t5GQD1X9s8EhWbME9LTdMMWnGfJXocRXP1uKb25Pk1ZSYpyzqZkAK2sh",
  "key11": "4EBUgfTbUQdKvykxXCH2FKptYZFb1475mLGy7L9ZUqgPKZfP3aVVGvDkR5wuifAsagyGFTwQ6AnjF78Zem9yCyV3",
  "key12": "rGQxhW1YtyCrTn9Jwr36DqiEUsxUcXHmHViqQvnWem7dEFFFcgnkfYTuxY6Y4fGsUgkFJU1yK4sj9nR2VJa32Ln",
  "key13": "5RUzzUbNKXkHvwpVmDomVeRaP14SoiDmp9kyHcJGyEtKCaTrP3uTsGcQeaoTNHDW8BMXg4RvMTu6srPkZLP2aKCn",
  "key14": "54NuvFYJjzRfpSghjUNEZxLXWeA9Fzop2PYT3Ta6FzdKexZ3xkKXsPDYJKXduwGtCFkqSpvbGK3Msn2wWczZZX4Z",
  "key15": "4gv9jxoJpW7Uxrnbi1HNitFSZLeab8KVRq8y1sqs8bqNh1KTFnunbxaFvT9gUF94kj9mKdLvbb1TZZg83cuCnftj",
  "key16": "4BEayAbKeYvR9TahjBbcAgUXkbjfRh25xLNfzMbgsDnXr9YyScijgzN3xL1vZASNWXWc7tasRGeLH8zepMSbbYji",
  "key17": "2rvS2EqmacjWemMpedLZFnqUA9bJEaJuQMQjYsV36RMgxnwqaX52KSG9vwHCNrTVfxupzEDCLdnpYbMqCxLMZ5rY",
  "key18": "2XevBqL583LZWReq71ytZ8Wc6RHP68sAa4e8CwLQSckdcRiCJRwpufn26qJq8bue7pguRK93ExdbSCeT8cpEjsTF",
  "key19": "4eBrHmjUQ19gfgdr9PZLswrNurD5uudZQqqW6HEriB1RcBnLMtGYcb6M78bKBjbaGd6WjZGTa4f5QHQQQBg58cus",
  "key20": "iQTJpWJ3Pj9jhP54gUwHJ8pAtnKYseJQyUH6wbkeBHyyeDn232uZC2dKGtDc5E6X3bPg3psTeDA597PSMZ7Gsq5",
  "key21": "3XkYBdUqDomcUERnbzGgNf8X99Jk9NT2aRUyMRFfRYP68SmxdDUfTqMe2RT6REcJHrs4qXDp6yhpyMUCqVCpoXaK",
  "key22": "5P3J9x3nD4JWJqq8Yyznv7x5coUq2d2yVcBX9HRqfqeupaGdFiL1YdPT3etBwJ9fGcSTLbaMm5WPf74PtXroTYby",
  "key23": "4wuGPL6HwniZQQkYwsSqprEQsTwcKZ3WGeaTYoQ2skPhVCAHPYWsQoBdX4kCvgpqxKUEULifTagZ6UBAz8Kmh8ci",
  "key24": "2ccHLR479VamAxRH3k5nfR1cbh6tkQePA33JQm5HpdcMBcYZKHvb6eXJJsDzqKs2PzSp3ujXWo61bGki8736Yb7J",
  "key25": "31c3syeoX1WRczr7JKdghuHCioB9YY9pdx9VFTjVHeYzh4fURbdk1H4UZAFPNL5MfH5SCHVZCEbwHpiDEfnNDFer"
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
