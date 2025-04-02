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
    "B8kxJddAc6x8xoeUorATeo9KsvJwZA3rxibgsBdZi7Tu2FsAtTv5YZED398CGP2dGcpTvXGJ7RZHz6magLepN34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38TYyHDjfi88mbdUTdk1PySaTTRcxhJZDez6Hd11aXWCeQ1f5HtZirKbUKZCgNaHuvN8MdHxmZfaEa3TZuJR94ad",
  "key1": "3N8Q6wBUj5w2P7AGe2nEzueaz5coEjdGWBBB2sNixKHUd17X9TTvwxDnRU4aE25uqevdpUfswhzy28QuYKzLF1eh",
  "key2": "2TTPZ5A5EKTt1Ge44ZgDcYpaqcCcfWmfopQu23s9MiEJgqhFG6nXDq9qnmiV5PMRfvXirKaFKmXM8kWUEs6AjxkL",
  "key3": "28vzecSgFnXnS1ZsrJ6B2JF6CmFxD3BKMUnWMqLVJ247nxbjHo1xHenAEvN7FKRSkATEPfWY3mqUVpsiTBWPGhFD",
  "key4": "5kzb8A7caaDRGCwxPT8VaCjHogwdBSt6HYCUS3bQyCCJGXeEukftezKKEW6DknDdwSjrskcfdg2Uf7mBxrvXkoL3",
  "key5": "uqgPAS6CLmyyKiSj3XqrnCTFR9c2m56T59Pg69be8n8VxXH2LGAFcQrJYEhXjyN2Ud8fF3GjZBNLa5wdYvx5D3x",
  "key6": "5WbktjUR99aZQgxKTnFpheVotCQUzFnWzeAFZPqKVYME5heKSaJfKF4oo5xrxyNrxkfysE7XNvnvu9425xtzcdBD",
  "key7": "2qs56nDMLtm1LkSnuiSvEzeA4PSxnbQ4DoXYJz29TRE2KBaHBbcmc7DYJBwmX1y2L92wCwhjh7Juhz72VM46XB3W",
  "key8": "33kgC8UerRQFFAM2frzPLSjni1z8naGLsEYWP7YRctp8CSeqtod2ShJvWNmSjnFNbaiwd4UcEcwRmV9p5ppZVhBX",
  "key9": "5uFqJZdRe6uUx7rFv6hmNqxNScjV5hSArS5o5oksz27ngSgczhvmwHx2Gkttc8bcbFDKQNc5UtdxGZqxjL5UPQRo",
  "key10": "552oZXH1c3RUubEMkCYAabsDBa82F8p5z6qREqEbRhsFxzKJu5r6gKdrSTkeofzxm3WqM1gKJDRWS5pkjvbAjMqF",
  "key11": "4QcjULPds8yMjK8HQdgcAcRNgTbZNEY4Pm4wMSoZgEHisysrh8kNJGdaXthmt3ZUx5mgHXhc7fCVSvk3at5JkUao",
  "key12": "61nG8q1Wdfw1P8yJ94ihE6jwhwgkdgqBepiGMyJ9tjhWXYYbenFpgadK6ysPbQFMVh5y5WQ3Axzoe9hPXmVWu2wE",
  "key13": "4mzTeKe6gLbTdVf29UeE7QkUJkYNthyRvrjk9yoEsCU9bvcbMeVv4rVuyQaHMtFSpArEP6Kxv2A1dpW6dw5WudBB",
  "key14": "3dtDM95aKPABnjczXHv8QdhvsL1EvQ7QUw5MxinnmC3z4RuoEyGGB67Z1P8wMS8ekKSfszz3UNcF4F9aycToTpak",
  "key15": "6sjDayUZUJiGjP5r4wZ3bUuSYLUuZVN7gJbY9wXZ5jwLR1VGjr5GaeFQaiLuqgSnPfgLT6cxesGuVDRKiJZnanS",
  "key16": "5gqJbXgR6Qgeqpr1uqfwAcgYTFPsmktM1URMqRogJqbjmA9d5Z4FAVFoD7LYtTWEZzXZxzRD49v7ikA3fJGSx527",
  "key17": "BC5jnP4Wt6dQ4cgKU1T9VcBxnUhhFtJvqMHGGHmAve12CBkiAddcLF5NcGuykuJijx86MPpDrbefUAuWvdjFy7E",
  "key18": "67UeoCbwuraMQvkXMvkMdSBAJw3vWR7oZpRkAzZqQCmL4qvA4woPNp3zoyUxSE7XUDAerWqv7WNvH8NBWn86Z7rw",
  "key19": "3Un4bEz3cB68pWptNM1tMy8gbxRxh88JBWKxvXLaXM94Cad4VaxHDr1KV8m8gTRnG8Dwp6XBmNQfCmg6bj2s5ZHZ",
  "key20": "2pTi7ZsLSWaJqiLDxjbnzSWaNb4zPRkbSPD5YacFFmxYmY5NuGfcKkaocEvQtDPfaEvhfrYPs3ynpoa8syBGYXsR",
  "key21": "3GHbX46qwwiJQ63UGZXLBBGzEuBD9PpKYhzD6TEWjxJ6QUhQuTryCvHcRQ6R6dMzZJXhcQoRHuUX3CNFiYzR8khB",
  "key22": "2Uiu8oXWuwEDYPKPMYA3EpnwczAf6BwjEqpGgfbHQeMCntpEfT5dc7NmY2DXuZQFh4FNukBbmrmuzGidFzDgkEaG",
  "key23": "27KQMULzqBGbjJQRavNQnUU3mW61XKQb34wxaqhLhJJPqpE2PN3qqFBBbWP5meF8a84CinSJMeSonQU8vMWmMR8z",
  "key24": "2ZqtqTNfNw4QoTf3j7oDFs4sjJBEeQH9SmCxJbTf16rJ3ibh1Q6n6FqRMBnw8gbxuN3JazFPZN8U1wgw8tTtTUEC"
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
