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
    "2uNM3c8ADS6J1nwDXa9Pq8xwtkCwsJAhzEMfMvcQyV2fSZBSzLBTQtX5cmM2tJg8wu8fCAi4sNX19rtRDQjg5ZgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NboMJ5K7dR4gjU5SKqmX9hKzfM4AQ9ou6TQXy1UtbZMPRbWxJ8yu71aPzL6ah3hVjFKaM7wpFmxxsakdB3JhQ5x",
  "key1": "3BHACN4kTckfhrSmhkrBf4R7ZkVgNEfoJE6GU4cn73S4Tbu3EVLKeikK4p4r2ruCCKK835a3UH1L1e5zNYkyR2tX",
  "key2": "2QoTVf64paQ4CUyRAZXUF4g3X5uXqSzq3ETWBBb7ZsMWphW3aGsQruRehSAVrgRDuJJcRiLjgP8CNCNWiEuJcQtA",
  "key3": "5g6An4nwVxwgqBLwZkycqDENHtAhtWcMHwjMMVEV3pfNjrV3NeaXYJwNNprH2smGUUo9pkVjUpUEAfAquzfXNd1E",
  "key4": "UNaGJNJoxPMS1mewZb6Z7rLEa8YLDkZomt9FS7kQEJhnCbADF2NvkKN6kPPx37ThXjuSN1b2tjqwAjxxgKYVgoz",
  "key5": "2oL8FB67dwMgurfMTbWk1dw7Q9Rq55nDrz8zQx5CyxUfabMcn29yTC3dhDD23qe6HzmEcqSd7vQR4GqCLWdyFvzB",
  "key6": "5N73HMcqKCnTZZ2YpY2Y1VzYp2e2XTuNmVjyBeekwRNB1rxceT8T4D9bdXJPhGEdbqzXXbUoNL55QgVFXBEEp3Wb",
  "key7": "gZXik3bX2DerXvGtVMCd7x7vUvs38bbV2zUSyio8GuxVajLFem7stQk6Abu1aGtgNJyqWm959KdzwvPF1neEq51",
  "key8": "2kuYZJWJCYcuZXRYjXN4fjwkAXrKyRqeiAfH6xrSpfm9pCJPWQPiYotG3jyDW6kLic884AsYAZeFUohqsMt5EtLg",
  "key9": "5RBjA8SyojRbM9GQtUSuNhY2eHADkNGyg95zXf3DLC6xK3gzCxYTiKLePaTiPVFSNsrf3vzXkok2uadvVtzVYJwi",
  "key10": "TsfAjAVhqgoRuvRgmCbso7dKdPpS8nTFEfx2HZxKG8t1UQccgoUDxhcQYTRxcywnfGPF9fWouE3KsWZmnLLmePv",
  "key11": "3PBrFVjjE9F6T4v7ZMWsL7z1q5WwPAyfZSRjzzv2jb8wjsV5QiratZa6UKLXi2T5s38bg5BaHszhVGEKxfDYro3h",
  "key12": "2MqwjmiWxmPJQr64fKU9WrYGVK9yCcuXkN1tTvz9uEKcXv1ptaoPhfNNoir7Qtthi8zTc55RtocVk5Vxgj9DomGa",
  "key13": "4cSJFYuc4t5hBKGWsCTQ2UT8wLWuL8fQa371CTGTGUaoyETtAsNn2yFgAFmDRzhFdkgT1vv4bjYZ7bVvDtF5Bq5T",
  "key14": "5pCNfaTEMTFk8EpUm3xcazB1E8ShLVy7sPPRpz9cyD39qBtcU7FeCM8mc8SQ8GaNpzur41yWasHjkWvn8Zm8Y2Xw",
  "key15": "4JRVZvQGtD96LJmw7uFScx83yAE67AhNWDhRnwaygS1uqPkJ6YbsyRtZD4GRb4XHvEdYfzuHuP7csgxyx4HZvHmP",
  "key16": "2kAegPzjz2VKgxfbuMhvQ4M1S8DjiN26QyKkafEsjYypio264AMSY2v6515JEoXWQYoiWQyCtJa1LPCdQ1FMeyG1",
  "key17": "3fiHZcbRPMW5gjL7DyqKiXBGgHJjMydMYqssoyA8178HQCZ9akfcD5mcMF7hAtFvSkUqXkSPtXdSu26kv3Q4rC3T",
  "key18": "55YGkHAUZx3PXRe3cTUCq3vhSChTp9SD9n9C65p4EkQQrGUoDjkSoEfAo1FL4uKDGTxcGZDKyGr6ABijE24pF49H",
  "key19": "4eE6WQLPZiW6ubK7J2p3gPfzgNyG9y3ERrLH9QdsDqcABMnoN4A1BtqrxzyC31SGYiTQDLwhBZXPDu97iNdZnGZZ",
  "key20": "2gFkhyk5CFDELJHiAhN7jPTVDKuLuYDfF66HHEyhiYwWDn96Anyw47322pdj25ofa6VtaPAZgTqPNXrsLdpkMQZQ",
  "key21": "3qsvrBGkKFfgJVi1Gau9E15ZsXh7Er9RDdoVEzCf4nv9TxY3P8cz6G4YEDgZcGNh2q6s5aAKW57ABJ6sYhCnpTT4",
  "key22": "4sh6Cur2Z2Pp2kD7TYNpoQBF5DKVkmCB1piXLYKjmkyRXSviqjjtPySpzbxVGjmghmGSZnP7uETcPivU1qn1XQm4",
  "key23": "zpatjBFZ1zXxi3TY288yhtQTn5u7pasK5swBtg7rnSM2RjBiMiodUpQ9vSNYJTPHwbDgYJRagh1c3oh8nmwiPJP",
  "key24": "2xish2aD2DAAXqDAe4t2eaMZGjfJbKTnd6SCnWTuQfcb3RJA9KdCkwUrUaDYvDbSn3Y5MoCuNThLPFACBEyq9tkx",
  "key25": "32ZoXWBiF9a9uRBd9BUrFa8JyExcVDKs1soxbZxD7xBitKQVLiAdAVc9NokSDdzdMScaxnL8dKX9BxJx9K3vniqi",
  "key26": "4S5JbWvT7f8npfeb7YurDQLALh2PUqSiR7zn6mmdJoiEoyQMHeiZoBtAJ6LvTWz5exera3fpDZF2VqjHSF98wE6V",
  "key27": "2wvpXRBPCw7MmS98N3bsdK5nJpAdun2pVYYdwfo7E2uabRghRW1Fe1F2MULv198Uv5XLWU1AE4xYQvfCFHngKcYb",
  "key28": "4VHiTChbzyYjVYxPBxjTudPbmmiPSPw9D5J1K2bguZgmg3dttqX14JoZenX7WcVaooei9g3iKMnDKJYEUve7SGMU",
  "key29": "3pkyyn1Ah8C4tspyf2rKqtx1Q95uuYV3ycw1Q2g7GibjKpDGkDBbKh849TR88wbVBpkaTbeLSzUrZM9HrGVj3iFY",
  "key30": "5SDefJszeskhqdziEiAbXaoyxgW4YZt2HE654U4YUB6tuGJd6S5gyQMPDNEKDpgYp6MXu7cLZCtTdjxbPNccqaYy",
  "key31": "4AamBXQPaDKN4HUd6x1MAqY8joso2Ho6AkfTL7L7sZjnL11fYt8qo73pyZq36oG5jN5a7s4HAMC6A1txd6aAGv6f",
  "key32": "3f2ZZMYQbEv3H8Bfhdb6ZHKHq1LfyTE3RhQQX6dBy68rrV6pYj9vhgtEt7dGzS9BtNmrm78185RLVncWRfpVNo6V",
  "key33": "3S24reGyPCWEM2NwybJGjzywCjHbMqFeSEEogr7Fzfgzeyr2dP28c4uVySFVmdCtojrHe2mWvpLTqhmprUTa3RNd",
  "key34": "661ycet35tATxAj4o5hd5ZE5t3qXFeZFUcM1qLiuQa97PELtfuFKLvJwVL7tuwtchVNmJzJRSJC4AQ2muu2Qs8TD",
  "key35": "5zbsWX9GyzSL8wMxKCcnud6NwiSmZPXxZvoGSvUz1boyo7k6MHnGEk772qFtXbKuhUD7HJc1vXvpdokk6VsDVAcY",
  "key36": "4vnvLNTjbeACBN6hD1Z4oEJvnj43aaQu8m2b9SspswPCYQouUxZwZErwhuGeifU3m26k7wAmq7moy2Ew3NFLFSS1",
  "key37": "2qumJSutAh8YDDAdyc6sWTTvJ37qH1LQP5wgFkQ4YMXmsAbxdcwxxaXyYUdwqGkHPzc96VmDu2Vogapu65GW6NzA",
  "key38": "53Lqhsjw1KiX2wiNs2gJHExZFuXHUbnJmnHG1LkjR6v26nW6JeRR5D7x6rekKd7KkxSvPy4pCkBS9n1owRNrdcPz",
  "key39": "3GBGvXNJuQMAaxREcKXfNZLR1uPz4BgU3qu1kWLwUENtV6m9K2jMwTP62bt8K7fT4jUdF2HJG8smb1eYB7Z6iW4b"
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
