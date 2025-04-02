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
    "4FijiMsmcTA9wSrLFYW6cGzxToyrn26ETGBhHBrpMJrF4HqN121iaaa6bTzqGGnubxWegraLPWXX1YkGgNV31QQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q5sPTBjSuVGqQNaZuYzxK8uPpkXW8mM78a7aPAXVQ8ktbWh5gQHyAQ6qSoo7wfTP7KBjW4hNvuYSGqexw86moDG",
  "key1": "4aJrpK7ZCy6NZXPcarjsAgrdTXbqXELgdDE2rpbBs95wqXqkA8YmpojM6F6kL8JL38NYEbAy1mG9UFPDFDZwDZTo",
  "key2": "2m9nAPsrW62Q8JcAFdnYrN3onqPPBbK4XupWffaCWYHd75axskn7ia1BTEjuPUkYsR1J54YcQ6JyV38V6eNrZY1b",
  "key3": "4twXcS219y8uH6wjpNN1VdyQurw3uyyEBvZM3LxZW4vmqSNDs7dzRwuA46pryWX97byQkZXceBdvGq6d3rAMEThS",
  "key4": "2HG6S5oeyktP3rd5RAoQYxqwuyjPobdnwvsDQpjAmfWropp8h52dptgzZzgVyApK1tWZD8MdE9nKEQJzkHWghSmi",
  "key5": "L56MTdzynmi7eTxWV2ojF8HZNunLhpm6aJgvBqmZCjHHq1sZojub61AK3EQQFWNJBvgNzoB2moRUE5SLXfitG4y",
  "key6": "S5o6pce2v92xSYhbXtZhMT24PLWShSi3M7EVmY1NyUX6AZWfCnSZFVvs9XMkg5J9YXiM7uJjVR2V6psMHekA2QG",
  "key7": "4Pf3UQtrf2cw9iSCu5EugDRD6AufMAUQgvwtw8KNcVLrcm9JADhFz8TFZHhN4fYQRhU1D7GseVXbesqbbrSAHpQN",
  "key8": "4MKMAC14gvEQ1zLs2n9JFN5ELSobxbiCHG2LacGpKbtkpTrzziTT9VwmpncbEKj74VwDsjnLJgTyqjjjsCEhHzJg",
  "key9": "32vqiNLGjVtnhUmUYdUN6Aq5x2fJpGwdrjffmsbKMkK18oMWfBneysnNst8J1btDr4NH8YZF7Vy8QrykxPtmLHBX",
  "key10": "4DnbSnty6YzHEiBhDGE8k9wzHU6WyQEoDiHpPqtE3AcQKPsJN5dAcoa9xoGncr42zkf3wAn4sfb9WubGUaFgSxxZ",
  "key11": "3AWZSpyyHheNUDD5G4ocfmXKHhHfc2gwj1U4GssaWds6pB5192PBfVbMUk7yq4pAHzq6JTXpeaQt7S6YvFnF7Ay2",
  "key12": "2R2c5udzjnfwYV5QGZrBeD6SCCTKLohXi29t9aPtmTpXZz4u7YnDSshNquJNT469cqERXuimchfdj42MTx3DDXu2",
  "key13": "vEV6H3j27nc2TpDRza3LJQ3D66oty5sZ2rhbL9wpMSHbffMHynmo9QbFanDv9TUgwVN1ohye4UHJJQaQw1aaVR6",
  "key14": "3Tdj4D8XNRXbm1BncnUHaFQ9qeryBnxkyig4sHGsrSjhNm4g9GWyGaQFyRokfB6xB2NM1bvdSRSkMUgRAB7ioJgg",
  "key15": "4JXKmScpeybjf7icLAFZPaWoicqT9Xo1k9f2GSZxLpbd4YUVeJiT5PjCaCaw6FkuP7tsFVAXwkFQaZzdzoX1gDtb",
  "key16": "5ooTFpTtgnfp82gk8aURZMxsMFZDPc3eNKZKRufkTBjVx8JsQYP99KqXSQkP5sZ4FjJWPCFAHTovvUNdGR8Hk9hX",
  "key17": "5KDUd5djjc8NV3nKALKa1SPVTjw66qLEFSwvV8zsL7g99YxRThepmZh89QdYsTAvccyNPWyawh8jjJgMVzt64e9w",
  "key18": "54vyAFKuT9DysnijxwPTuozrECCy2ZUjbqw9uaoLJxCb5pyE7YMehYE6iu8NtMpzbyKfyJzLYoqUXf2Nr4UbzSWt",
  "key19": "4R2fYWHjkFMJrESVtLW9P1YdoWEPBk4DTLkT7zBUcioRKozy7dZx7TZWTJ9EfN5quj891k3rUPiJUjCyb66cciBj",
  "key20": "4vMXPX8GRMCn5NyBqRXbtdLEECEw4bKtC7S14rzMXW3hNJNjdsJzW5aZcThb6uSRwuTSLUiPHmgovNSrBw9G86ve",
  "key21": "3zx4kphiFz85brZiLek5DM1R21ebnRQNTs9f5gTEhEjzWUp9jjW92acWRnaQtPArJagaxEt4rEReJ8fiJ7avUQEo",
  "key22": "3QFH6sG6t1nk4pqG4eAQzV2JCUzXtqrmyQBmVuaNYrzcnP5TsMi2g8adFLcV6z7neuACMjivcMmcfPDo3seEtHAX",
  "key23": "3rPDQwRgZDWFEfmM88s44NVyczYVft4M924zVGVSiqW33c792kySq5k3Gr8vD9Gm8Z8Cqvm6XYE1mw8dwPkdgAgx",
  "key24": "5ZhJXVPegavTaTdiBkpnKAqAnar6bxtMJ9VpXkTyMHVa3Zs1eJDXejR3JAP5hZmi2FbANqfZSS5iAtX5o8HiyNQq",
  "key25": "33BfrxQFGMZ8vc8ZmWdDGUF7w17q1uThdMc3MdVWEyZe1GD6nFE25ip9DD5M9pzvkkK7nHMLEDym6eC2jpsQRrFt",
  "key26": "5Rw5hp8vYqLxussowtDDnQwVsariZ4xpFm3nM9S5HXZ4KpTqSU6sXVZ5QM7c3HyhcmYEfzfTdxvwnBtRaXVuxRAN",
  "key27": "2cmDj3HEAPUt4XXBFn5dxvG8yyNEseS8y8AoQG8i9LskupPwWcR1Bw22VVc6WiceXJFnxbGzHCBJYGs97qVtQw3U",
  "key28": "5GcXBAM6gTkJs36L5okTQbWsiCLGip1YkbjzuBUobpj8TB4NwRtRrckBx2MERFjLJSUZPUfyTz73qeizJyFNLFnP",
  "key29": "59PcjHmXkKnnDkw5k4dU8hK6jQBBmHAUCvcEWTR8unmjgtosMW6JRYz7F1rbV52ot7gPHT2kzXNSaQMDtHVDZKH5",
  "key30": "yQe8cefTYSeYcmM5UPfMbgx4oGBu5WzyDqP5715gQxVMFp1LUbDyx6hhtjx6pGvitFxEyr2U7hhArNoSyiQ1WDh",
  "key31": "2CDgP6DEQ8Puzeao3mDj3Y1Ur9ECw36dbJDUdbCvQhcVa2FLN5aQs28BL3ENxY1vj9zZuN8xZhW9mTvemHQUnMVx",
  "key32": "3NHwabfkNesYmzmqDwwdTAStBDW67Cs6DgtjCaxDBdUG4iavSfuSJhgi452C36izyKHaiFZFguhxCZr826cqbVfs",
  "key33": "2EfSu415FjfsU9Va4QHKsnCRvLhBTdXohKYuU6D7WsysNYZddpR9M4FcW2BHEY9MnMK7ExBcFiRmWdZMbGrWkY9n",
  "key34": "5NzRXdQgbL6ykfxkZ7jS2gYKsM7xsftmStcDZ2r19pAFQD6pxeCQyAdeAouFuJqdNtAPhf7Dd4fpR8GEHgyR83sG"
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
