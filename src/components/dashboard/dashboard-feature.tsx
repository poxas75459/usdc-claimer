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
    "5odf5feLZzAgyznCkZBhGCBRfUaekuX9mNfobGn15cf7vbo6URiFXaZPsb4uVW5PuBmXVDsMYioY9GrjgtmfJNbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eJ7axfzsW3CN1DEYaZU972QLHbC1TzUKwjBetXi8eZfCrq9xQWbPLAMG1fSRMNjkWzAg68LUQAvvFdJorDoqSye",
  "key1": "5Tr98X6dn2z3nXC1CoCQEEW4WCZFq5HwrisGkXtDb7XSRcb1BFysgFsb1hPkPEuQLAgJuSGWjzVr1RsL44Sf2REA",
  "key2": "4yx6A9MiWKYbNpogUrAjzNKUkMxH1d3XCQ9xBUiMj4VxdVZr7nteKxRSxHL7sSZUsj1SbegE4rhccT8mkpHU71P",
  "key3": "3mcHaYmxrfiy46ZMhhLLKNmESRwG1fjNHCX5hpvSwGoeqqkpFjUBSdafYC1EdeSvakvUVs8MvNmWWPa1vPPBQn9z",
  "key4": "4btkrDC3xvMAPQLFD6SDiPA5buQCLfAheaXf8oMcxpSb574sfNNoUXtz2QBmKi4MMFxM6avTD3ZJc8vo3dFYNb3P",
  "key5": "4tWcAHYFGg8rBXBjXoqWMugK7V9wh2rm24Z8EFabFf2FjDE8Sr6WLhhJDURi57cPvJ28r23MUHJggiQnY5zNAS1c",
  "key6": "5ukB6ynEqajEeNN1eKRk545cQFJfwgYyvPf5uuKDvUZfru1zujTSFQzh7Vqozqru34aBWRNP1ebCdAordPFihyXb",
  "key7": "5sJEhb5Smqgv2x42dWHwWEGU5pJhd7FDA46tBNu6GBqxjCtWKjZqesx3yvS6xms5xYiLUi6MDphbSHNA5EoypR71",
  "key8": "VxBiNFqEqzC3HkcYe9TFH7qNt7LUbKaKTR1XgDDePPuHUGm3ktCj4rA5PdB3p8UXJG9N2c2RiQrgGUjqnNq6dJ7",
  "key9": "45HuWJ7Lvpdpkvko7xPrvJttxwFZYy9HaW3ATnSXbnR9T2V798RwNpKH6QGQnko2eMt9pCC9cb42W4HAvuCvrgoo",
  "key10": "hfB6HYHYSt2usWmRvcXpXYSdLoNKkff5yNktoSBBHVNA9wUDqZJeQpG8qvCtxckxb5ERYnBR1qwEBA5mxwEuaxc",
  "key11": "EEX3fZ7H1Y47nhpwai7ZUMEBKUR5gFu6LR7UeGr7iHoxZHPizoMhLqTnrHMNM5cbCrDGZ9EFu5QbvqrtE2M4kUq",
  "key12": "3GqEF3rCyJWDpFzPJNtcwAUJdiy1azDFgpzxuyipPbM9yZYF1vC289Pgq2kaCBcJgv9HVbTKMPFb4FdiXGgnsjm",
  "key13": "3w7yA4Yspua7VdrdiCEY6j5AM3RY4J7TQ74zQxTjQ8veW5z38LeF4hPNpYDMHyhmB6hvUAXXpsP88Dmn5dw73xej",
  "key14": "GbL99SrBZCEX286PPhg2FzYPjDXbPVbYUZ3mvrxp8EKfAYB7CmyA3FbUmxJcT2E9jNJh2FhAU453KH2gnnvRtaB",
  "key15": "4AHmRvfS9wWYfFKKMwPrB4kvFskJkaiXhVagGAF9Dx9XWebhaNbM4YJRc3B6LP5qEQWJq7xXwqE9CqFnVw9X5BPH",
  "key16": "kUermt6rB5WCYt5GNPRuxjjQ8tanMyoZKgh4aJRFicuY5swvYgfrkVNkUVgh5ZekASqZWbYSUVAbndrYmNMXE7n",
  "key17": "5GX8Qepu1wkq7jyKNoV7ux4j9R9MERmUHfWKvzboRb2u4UDezrb6T6vL15tYHHbWZK8s2QgN4v7HvQ2opzZxAY7R",
  "key18": "59qrMMMeXBwvU57eQDsmk2fM7rypGiaYtFHyvy2Qskc2zh1jLBuMPyfwurXeFDfSpND7hippq32nKKkY7VggTBVm",
  "key19": "66YLEpxRvtZxTGRWqRVv9VjvQA8YD5vhYxNddr983oHadP99Qg8abu4haCdXeFdbsW4LfdWEyEz4qxio2Yiu99La",
  "key20": "2CoE89xvoTJXEVUFx5yJAaLWGpLqH1ASYaQyZCzzc5aQhFMQvJz6sBiDjiVGCy2xNXEULZFW9UhSUMKRygsRndme",
  "key21": "4Sdz9MRiadzrVXaWtc4j7xDhTJ2o8YWRhFoSobvTKRowkjMqDyRcoHByrLr8V19F8xyCRspZKWLzsUiVJjJ6SA4G",
  "key22": "5xwEGPPPrLJeygXiNdL937rygcqGxibzzStErkSeBJoZJJkV8TVDAPxipdXp6bPJPXQR43nwa1ziyDQRLw3n6Ppb",
  "key23": "jdda5Hx4pmV2SMDXShRf7BkeY1Rw96auXFgRyXAWYXcHoGyJmnBh3u6qp5WemjFjFqkoaUAaVJuwgWzQpmsrKck",
  "key24": "5RaVeM5typSQmXb7x19EvGic2cG9zzfqoJ2VFP27JmHbepZx94FujALpK1oAeycv4TKtXXJGitAXReMCvQ3ff7Kg"
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
