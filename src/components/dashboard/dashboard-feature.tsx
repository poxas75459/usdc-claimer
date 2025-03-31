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
    "2z7vf2ztRygX3LivHh1bThNVmzW61WUSvNQoaxeR5h6DZuTPdMXFNBRsPmi72CGqrBDHVXBn6JtTTeBfzo93KaH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HzgJDS7KFghSunBRC9God6XzSbeUgMjsJMzMU6fKZu8uUye13556UekBS2Q2GZbSQDeyrEZZGGZrSJKm27kT7ji",
  "key1": "54jfnVMrJ4ku3pXGfWteVhGDvhaobXJJ8YLiDwKcBpYumZMo1PfPbok6EZGToYtKETjsgBzRHXWs48n7uGBHHKg7",
  "key2": "5eF41rLN2zxXbKmRQASmLgMezc7sLvxRCV2auyJbprFwikGq1di8eLUeH4dNsBUkYhSYetPY5TZhhY6Y5oyWqy2Y",
  "key3": "29fh7kq5B27Gd3P1TEt8i7f5WeAiXHRKsAY9ih4iT54RSst9ZckQWE8CiyHhRhi2bXdeMcNBR2aCt1pjizvC76r7",
  "key4": "29iMZGCtGYvbUky13iuRehGB7uBX6HCzhr36u1of7gS7DudM5rQDnfb7VEwMBy676Fq26k7UcubRq6YUGb5JPC7k",
  "key5": "XVnaXEqTJ15aFyccixH3fHEieyBb5LDXsuaNymsPQ4eRdABsmcXDWCyzxsMocsHuhKsyjtttqZDrKshVr9RtCcC",
  "key6": "3tmQRQqzE6BTkf3HEcNYLV3jG1GhyRpvQdXk8v5wdhks1oJ1ez31d7W37zNFU58kXrqWYrEa8oiHgekn8mce4Jvj",
  "key7": "5KYv7xUqbE9P4YNioaKYJMeddH9QLXiW3GQM7ZoNqXcAYE4q2EpAxXyyCESvfsMwJJBhavKyXdtJxSem9wxYR5wu",
  "key8": "2pE4SWKeBcK3FfaRgQSZAazENexdj1AMDom8RNBVv5Sydm6NvGHyZBS9v3RbL5AqF8UEq46qZ2FgYw5ZsvhZ4ZrY",
  "key9": "2xsawSTfgLSnVwnjfcDX2hCYsNzTKRd52CsnXSjteJpkQoUcTTHHht3KRrshmQsu9KQYFChU8bMPFgp8Ri8rmBxv",
  "key10": "fkWP3wkGUvoxg2rQTcYyNcAjA3UrTDSmKeKsh7oJJWuz2TCT6CyxKEvuUtMcx55YicjEbEnyZ4jDZueucmS5Q3n",
  "key11": "iUvTVhVjp7ecPWRramaxwgf1a8fjigSYbFvTsn4oTrDjGsZdWcvwZgUrjE4GrmB4pzgcj4Rh4aYFYKXzQaohcB5",
  "key12": "3BLWo3hxUshaQUUo4RH5GPQEvh52KjqbNXp9BtEjuMEQqX7AQzM46QYo1Q4eTfMmUYTeyYdvbXTKVbfBah7cXWv2",
  "key13": "5BEQWiVM3T1bhNyruRU7uq1HPHXE6fK4mVwTACBsFvxkGVsVADTaVQPjvpCWPZjUZr4s8CNBDUSJzquGjuF1Ji8h",
  "key14": "2fonmDcJPq5YPRbBxmp9JN73ivpg2ejE5MTEpj38YcDUrkDavv1sYTPLR4dQEukkZ626DXw9xnAQoo33tG1KzhEF",
  "key15": "5adAJpzZR9SkNyFac5PLaB1XKJptedBLBz9diz474hpcn3PkPQdSJoqpzw8q9QJcNWN28zg8K3EvnQEs63WU9Qc2",
  "key16": "2TuoPiSG7XgfmuJdDrmkieRA32qPWFjSPwbEhfupd7KpVW5uRNASggv5G2qnPaSYMgpLdoj7koV8VCLKBZipaHzm",
  "key17": "2JSG7g4QCpDTfhboHFvLZLvcBMxS54wfCLU2T9SbXaLmeakFHrDfjZqVGh61Zzt4Ppp7hkcYYKtyYh91CBGr7QS9",
  "key18": "2tsrSkYdE7uiKM2DXBhBqqajD4fUMLgE6WHEQnX2j4JnLMJdZzjsGyNeWohXAEApfGSmHi1jx6gcDuLtuJymYkfk",
  "key19": "5qgj8b99hput9v3CyTqVAm7JQDsRW3mVfBzsLGk9vCiFQcpF67EpkQKzCebVjyToxMj7uMbw1BFuQG8CeUU48Gyu",
  "key20": "5zw3cMTh94CCcWBAmMz3rtJxWfW7ZZDNppTBtSDRzMAnGSBt3939HwNZY5QcB3kTC7HZyzasw4PQn5g6NMpWe5AD",
  "key21": "3Web2tQUsaEn8p2MnnpJg1axmhDbndvw6oyLZTW4sKsiUtmspYxNTtf9Fy6R5oYMbjgqkr57yAFCAjVBaaXEvY98",
  "key22": "54LL2LRYZQwLkHqnTffEgDbrsLWRLcN8Dr8sCaF8nB8wJKACWJfzfe4wdPcLXKCummvqQNNA9nhLdMgGfE8JQxqN",
  "key23": "5zGErVb5VVLiUuUPS2hNyT1J8YsxTnyBFCEQs4Q6DLRUhYrNudnm5eVmuFHKHj6gAiiUJPiMQueFxbu3fYw4AH8c",
  "key24": "2wTEoVCRBxCNsj7NVLKzWERmX8iVTKLxjYxaNXbd9LrQvDJuZBcBHWqPomMt1NdL8m67V7hh77VWtFEyyPwM9ybT",
  "key25": "4tLetLdGFnRzFw5GN75hXNJAdHUP1e37mvBSvxFxFMJ5AKWNrTJDeWUJbqUCQxDRP4inNGnBW4VNHkEGRCqMrbfG",
  "key26": "5hymEFEF78KGMceSEXfwoK957NBtNZKVzjdWMzVeYDaUQfLWSSnwWf4igcxBe9UTMEm2GqE479hsPxNAR7k2Nf9A",
  "key27": "gx4ZnGXz575bv6ezfzBZAA1KUpWStLmRQa6KSJfBdxar1hdSVzqtah4mWo6WkFxKhcKdH8XPcVCxw857s76DiNA",
  "key28": "4do63cw1ZtdM8ocPFWpxWnRSXQ29dVgYhc5CkcRPo9ehEmUxNg8RQuNXoppWVY3Ptjx8jwHYdstXEFcJPyqrVyJe",
  "key29": "5qbRJufiUGGbm21WwRyndnQLzPaH5eFYdJvgLiuGAn7tF5L5FuyzFYniEmhpAPoL647sjEmmZErjPAEuZJURHFFc",
  "key30": "nrzzSk7K2ka1DTCnbgCbvBF7aCGvGCqfab5A482Qbx7YkBeDyuqLZWVnFojnstw1cq25yT5exujHubqiU23TVQV",
  "key31": "3YWX3kBQ9p6xmMESYYg6ftTMF6n3X5hiUfHto5fFybT2F1DXHKr56tWRbZ3ARnDXNdZDjoT1xp2kECujiGc6K3Tt",
  "key32": "dgTKfPDTuuGspLLFCkABMQyXT1UqwJ9BrBkBz3CyCdwT92iJAf6fnWR35t37NCGLJGAHLsNQ7hZWacHnLfwDNNN",
  "key33": "2YxpL8Bdp8M5rimCqYc3p1R7DjxxCs1y2kjRZx8nCTTnTnMjbV5vwAYQjZYYmuWe7EPNqXbDwWffm1UDsK9L8XVS",
  "key34": "5Bxmema4fG23KA1BjgUFDb89LPLkpLrkMNDuxZkniiKZ6XKKErbRoXYzRhcWYRyTWEsqiJdJmqCr8b5nbSKQhNnH"
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
