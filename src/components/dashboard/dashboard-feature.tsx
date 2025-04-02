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
    "p5ocw8vFtjZAQjgJuvoq6uVzY1SEAW2A4V9icS1ebuiJmEK74ZnLizQEQwUAZVEALCgkHoNc9FyEAaDmMzZBNLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Z4rCtx64PkLUJdaLSgdVYaHuqzwpt1sFi91xt2AtBsD1UQE4iFXEd5D6NxpkYCNXsMkFgt9zqjZkAfxcQuUn8G",
  "key1": "gS1aL3JozTYkcPyHhcSeWmXeTrARd4EtXNWyWVd7TN5b4tfhpR5btQTHGLDbFwHWCtCKCCnx2YegmCZfKW4vrws",
  "key2": "5kwmmYAmsDi51RZxu5naAacbvtACpCp3Q3xoEoGSP2jwCYDeFDgCsBrNWZLssokrpygZdoQatVXoYLkNu3nzqdde",
  "key3": "599L4oCwcijGe31oVW6c3KaKgph5YuPTw4V26kxtYfooz7rk9SNc4bbAxsWz9ergA44dmZPGDKwT6ABqBqE3B1Cp",
  "key4": "3w24sqazsGsrD6f7rJ3Z645hQXU1avFUtx2WWCXf5Z7YSP64yVTtJmaiwQNeNwEGbSdbtiadpjctmMeMJVzstata",
  "key5": "4dV3iutPxLi89rFFrWUgNAwZSN2LcGcg5NVNGbQ7okAMhHT8t7WzuFYDzHtBjMcTU7vGZQp2dFfnEQjjdZ45A8Uo",
  "key6": "78y9CTrwFq5hxUssVvMfdFqrs1nS4RJj5VBkH3sSyTfkGc9ieFvaw1nphEGPALtJ5j6uorDRZ8Vgh6xV2QkMnr7",
  "key7": "5HP64okwyi9881j8KUeFYQcUc5BrseiP54Gjh9vMFxxNokT565bkgRHKzgob4cCYckxuVVqbyg1pQGTJjbDrdm1",
  "key8": "2cS7oLhPk7ty9BpvanM1nk2SVWBnDjrn5NSnStLzK7ZitQ6wGDBMNGBA9ypRTRUU5AciTbRG97sDXo4DcPqwrY2h",
  "key9": "GLEDtddunreZH2BeKMMQFsw6bmPncPZCjB62RWmSwaeNNVGmwPPiR6VJk49JXK48NgA7LUog799GsMTtPj4w6Rj",
  "key10": "675mqH3yS1PaDs99TDTgPxn75KVfdSyqA3kzjnNgETBcMk3v3ke6hbRNz7FWtYFeTRHcPD5cp7Fpo9bRh1PLnkhv",
  "key11": "4njkhDkYndVrXUHgSKpCVWC2LPhbUBS5mt9nKruXDnnHaVvgKsjAGWmt7iMuuTCC2EiyQi2JpKPY7wccFgRTZp4D",
  "key12": "3XRLW6d5Jzg9MnWfSwAyRSzqK76b1dyNXL43kRVvVVqstJkCtN6ZdKe3PniLSDZwMM8PGTNBDuVTfwCRbyXsouFv",
  "key13": "2nvh3YV7mvrFChUURtGnWU1sHAdqFfAszK9hXSmBaZcyUdfAZc7jNdhAvvWtvTWjok6FKZG6e3gAyPoxLvvs7Gg4",
  "key14": "3ei6WMEr5wjaV1XRETaqEMF3eyrtNxrSGFjoAeomJqxhug1py4NcPKx9GJQr6FSQv5g76orrERpgASAHeqRJGSDB",
  "key15": "31cvrXFbpzA5kkPjgLDstxcmtb5ez4exvypZYjYy8zaARdmwg9DNdt5Giy6pQ8jG9xfW7X3x5nhrccwT6Hw1aaVp",
  "key16": "4p4PTphdhuCqbYgPS1kz4f8HVke4PJmgPWWyPGCg2s1nzAywnWp7YuXTUnBU7qbvvcDwCX4NVWbkdHLUXxJV6DQg",
  "key17": "5f7fZ8XtGQDud71Gkg2s7N4NorQzvmsQbJjZ7JvzfUTbYH4kZiRmQBrqs7UaQKY4D45WrB4aiJyNudJ3N7WY4Dub",
  "key18": "3RR7ZDaBsrP4ErEcdjhHCxHCzgVfPdpxJk4noHnnN4xejFzZVQyScWcJsYfbrcvSYm5g3j9jcnUTs9RHpn4AVe6R",
  "key19": "5ZX52FvdYMAda8mxJXaPA8b4yNEdxy4o4dC7dFf3TX9X6MmwjH7ab9TrnZ2cPRMcDgixj5RzbA9RJWmM9vfZm5Xw",
  "key20": "4CwUiZKRm64oHProVaUPwtmbN7qzKQxRwWUJxgqHD2H7QrZD8xrNGWP1g3AJ7f175RTb8nZLrE8WqKDKeS6uqFbt",
  "key21": "ixNVMmfJzPSpSGvckCE1ZHf7bMYD6D4y7dGcpoTfyD86YKH2XPVUG6T3DAuAqz7whjUiA12HL9EM7LLjecA9uj9",
  "key22": "5HKv43wMkhSwW4paEsbTyUKt77t9qqPZd2tVgDzvfuMz4AjXgxU42ygJ23N3GB9Ln9TXJpGQW59mJBNQiFVJr8mw",
  "key23": "4dJSZDNQvyQVmxCELytSPk9bV6P86iJ5FWBT3NcosCSQ61k1KKZf9UAYrEzxb7kSs1QSnm9vzpjKpvqgUbqEbag9",
  "key24": "uCqthqt5bnKrB65mZJgr4ft4dzsUtGSgJ82EsMP368VgE7cATcpw1s2rUfzRazVPWL3WWdi9F86tZn8zh4YmDfm",
  "key25": "62UXMnMTqCXpGATyQEvV5L5YNsmuAVd9AdSvwud5vpF3C9mXvCoGTp5wCNdvx21CrugXEWbgMNyhKAu3gapDhaHV",
  "key26": "34q6aSTiq2fjmtMPYqNUffnjxAL9CDbhbYpxzgGUJymWoiBHZdYyV57NpQdj5SaNbEuEQTUe9k46JUzD8EAuiCxe"
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
