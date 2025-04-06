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
    "r82wqJGes9Wko7QjCPkF4T7DUnvvQdHbZs1e2md7ToV7fuHqqHoBBxpLzmGJpbibTvyepNySqeRiRQnLmtznsBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "621Gw1NLsbjXcY39NR1y8Qo2XwKkiJHbuMfjwnyXaM8F3D5QkFPngMNwYWCYEwyES3W3D65Vt9XVE558PkiZFvXf",
  "key1": "59L6iWSkBqhvXGTYpkzDG78JAwTH3XZH9brKJNQjgoJG8iKSXWcmGE9YaP3dmuSoJGxuxan3RcDBnFnsPRquvxUE",
  "key2": "55Uhg3gWhVWdXgD9s6sXJp2hxe6fvuM6eoGBiQrnh6rcgDBUY4Xpua9eGTP8L1fagkvecZTwdL3aFKhWSXQPHVyb",
  "key3": "d8rmBHq7KdYoHWcdWp8Tf2qAxaqEN6nRErfjpLUVwTBeh8StzV6UziEgLBRrNhyi3eZxtKiWqq7Z3fZvtGnsEVa",
  "key4": "49JxTDP7WMV4pqKDwdDQYFyrSbBMpTN93XEQFeDZN9KECL6B1frbEShhWnfamUNELtCNoxqbG65kLUh8DTTcMeT6",
  "key5": "23uhxSJPBPN32ZqqRCoy1jFsjEJEHyA291t2NkXMTkVRGyQmwyt2E1nNDbLC3ag2Wvd8ZubhwrwDAdjVC754Ms89",
  "key6": "5mjcbaauCUtGBLvVqQKrCZoqWqxqs5X4Hfy6rCUTN742bQUs3YUy8Scs3HrM1xCFKEDYrSoExx71dodGTz9s5zvZ",
  "key7": "2HRvNyeeHBnHekuxd2xrerQAJrjQw3yHyjGBScBSwLqr9MdrnsVsXKtCyeiSMLcAVV4ZKz7se7NMsSrP7ucKaRY8",
  "key8": "5pZzW4B25wsx3jVusu9EPYjCyo3tqCcRuvBxj6SMZ4q5Cy2T4eVnxSncdT58VQp6rdNu3EZEjrj6ivro9ceZKniQ",
  "key9": "5WHDnMHoewxVaUrEKzJRnrE5kaZdmvinM2HuqhzzocNry8oB1HxkbUSRJUW82E6emZQGtmgwbuTMCzzxCVDr5fKH",
  "key10": "4uLJzv5p94i4tsNT1ynyaRDzW2pXEmKZdZw1yHy36mcn4GG8rrSZXH91NG7UYNFm9JZu3CEszemDHpCWvBbrEsj3",
  "key11": "4VqCn1UReMAnpVfwFTauMvRAaktusR4w3QNiqy8qBXTZsiQdMc7qAp297FyA74EGHi9sqku9G63MaXrssn6YCSEj",
  "key12": "5DxtjBgnmzbP2PYBcNq4VdXX2UQPdvdin6AURW2XdVRQAWFE2UUTrp5tBkzy1chw5Gu8mZPMjA8pyzUGqtgdmgW",
  "key13": "3EZF5KJg6CvWXhijya6GKQG4JeB8qWYF7yNBsDQ6xJGYnPiZrUCVWsnZJ9XPteBmNZRFTZEVNSuVhPDjW4L7BnQc",
  "key14": "3KdqEBKTsJxAvBxATw2bNxAFgyV8NpzC1e2zysnfN7mANgJuG3Z8SV8VuGWebxBnHUZuE4BFDF6wUraTB2g7vsqR",
  "key15": "EdV62QMsaJoS6w1vBD4VxT1VeQiAvip4eQTcGiTD6ycdgKg97ibMySauENATjmneM75TouKwbB6F149uB7xzdUy",
  "key16": "5AMim3W1zSM2Z1t6P1vxJpXboxg9dHfeypLPVmLDPTX8WNXooWUzhsQbWMB68vmBujdrWmzE75Vg7eRYaGCKNqW9",
  "key17": "4CTP5wvDWXXJXxAUWPDZ5CZenAVH2yBRnVfTYxyWdFQbJbc6gv2TYq2e1nfrStRFv5omxKe7kWiAvv6CwEMKnfpU",
  "key18": "2FvA45SLNQ3xsavxeKQiLy5tfg9oNi1c1EN8g5zyKPNZLKbSYENSxi2SEFsxgseg4aKUxRxnAgxMCZgN8BGjBYPQ",
  "key19": "5BoRjv9pusKmsuBtgp3ykhNyuHUip4qFdZ7xv6JaSdxUUmYvknsPNn5azzorZzVctv6ETG4mr6B9QEq74jNJA2dg",
  "key20": "63rxnYCK2EMrfJvNw7iMan4LSEwEAYwemrf7vp6Yc9pLN8GUhzpT1qfLAUDhzfPBXrgXm3z2pPUJgno6i4XdGd4n",
  "key21": "2jSQs1a1kQe6UA3f2T8bma1RL2ZD6wk8H7Xo4wpc1UcoDYqBCo65fQQqNbNUgaPBgntuoyYDwFTycsP7vmLR53Vm",
  "key22": "3fg2hMJvRvf29HekWuju7Ritd6bHDgtEqnS1MWNJ4RJJc1CyeQrgp7vhKUEnbU82x5B1nAwJqaHgXDJYtMC4Ek1m",
  "key23": "3n4LqQsNVknAdentkwcQDceVHzHcVYPqh7T9ZDu4XtXYFSr8DYthhH5im5V9aRpnAm4aD8YftYykqRNW2v3yRSJj",
  "key24": "4Jtataw3Yg2bXb3548pK3Y3YtSdFDv9QmHrMMxfkt4gw4oKGuXFNFf9d3cBood4Y3y1bdPPvoL8xBgBKBraDXu5y",
  "key25": "3TY49gGXA6DcQKpztPKnQpKRsHVvfudH8vsyzbkqxi9DcmNYjYbhTEdiTZGdNDXMb5setudaeHAoZBEjxEBHpAFz",
  "key26": "5gG3KW4QckUchbYgDLn5gt9ami9cbvu6aqFjj4kGHUc31hj2iMVRxtiKf7gWGQgnMqTLcVZB3gF8B1dwyVDWs3aU",
  "key27": "41SHAXMfbr3ujaQdJRkxJiEWmdSa3coRpc6P723jWUfkjuYvpjafsu1AACCK4q7HYU3EakZrqqsyfxHUFmLSJKok",
  "key28": "64hU46vuPL6FQ5g9TXPcv8ZorNadNkmoKoC1cBVT1P3EZnTqEkCaVVtMwjtcpRGTWtrxULmtZLBpZe4LnDXf7AiF",
  "key29": "4nqEGapdkiGHGiWxGVAVUW6v6NwKYBB47nN7bj8maU2jQKXi5BkqqwNFS29j9wXWaVf5wcznWddzBfw34EKn1WM3",
  "key30": "5nmviHUY2kp8LusbmWHVtw82yhxgym41iEJwn3Vm7KpGJHaQqyKaNYMyExYCMG9RDAvUxw8cFs16ZjxwnfdvV2TF",
  "key31": "5nE2rkvnmDaPoCQ6PVkm54Sa6WuAuAdoH18nihbLP3TvEjzGjcxAk6Tx9y57TDTYWcgvhMTNEcBa3JDwfPv4VbJd",
  "key32": "5b1K5HVbKvh4GjwXgAj9w4tmfM1N5RYeMkzeTjwi8udP4isR7VDpbT6eqhFXtVj5nPCLE5PeMFJxrSYHHkUEn1Ts",
  "key33": "2VSZ9iNrTuWQSVqxtJPJZ8rdyApiyTgkVmUvpdATnYkm12pbCxHoGYZmeZs2a9knhqiJstxpfh8uNXvs3RnDLnr",
  "key34": "hTEWEjJL29UmgdwKLCQWcgsonCSGrPkyewoqmUxk1Rg3aGYDdMeB9AGXu7WN5kTzL6wk8kudY4DXm29VQaWGZmq",
  "key35": "RfkEmsjrCadLHnRwTHeLUmxkrGQVYPTez62fd3AaaVsHBKFPSZU9EvpqD8PfJdL6DnLzFtGopNfiwm9dHuUibMF",
  "key36": "4QGVVFFbNJ4omkQTjZxbgdznD78cUpqVkEJb7sVHMYjJFhJ2nEz4iHhDczmUJHMsciamwaDGM7KFNVU9rVjVPjzf",
  "key37": "4YSJXEMh9cJqoGuUYsnE4Acj7K2KRr3c8apKkmNLBpKAbQjzWpw3z1pd25DFJVmfy3KqmqZ88jEeqeGXcq8Az9pv",
  "key38": "3Q4SeFpLGuxk6SzMFbFuS1cth6AXPZEATLFBj7N4Rwx8ZCMeDsxv9zEPLhfNkso4jsNeUQxoFhvQK3yHRAdjwNB9"
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
