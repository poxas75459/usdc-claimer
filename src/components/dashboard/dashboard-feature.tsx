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
    "QseMb1a4KqTiDgZxqSVnaZGDHdfQHTFVTs1ozVdFtLkCxmYbFq7RZkVohQ9BAdgUWztcZbgYxGhnL6fqVJ1fXsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62cfk2Dm4Y2VLw2PT3Uf7EP1N9SCgn2gsVs153G26iEHKNcZSwykT6r4zN9vhi6q5byFz77r6BEiTuv7gnj17JyG",
  "key1": "2W7YdbftQa77qHHpgN6dupwZDBX1W1XUfVRnVR8djPNDKyKdee9z1uXfT9X7bFRdYtnsrLrJp4eVUVaiZnLLVm35",
  "key2": "5t2UZSgxgPHTZwY33ZdcEY5RxoTEpphxH3R58KFAFLQW579p2rUGHFEExfErBKGrAbwjnMHvkJA5A1F3ppH4CWaP",
  "key3": "3vQqgUiS7wsbKacdfEmv9MVvGAAqQpGR9kigi1mNVahiSpqmWWDDzUiwzZ4ETBDEph3NtCQpn63t1ZBTKWnqSSzr",
  "key4": "4cbNZnkbFC51KEzyyWLgbCLtqzFTytofvYBCGbgw1DFEU4E8MKbeF93rHJsZcuYwGoQ3hYDz4PS8MU75YELyvCjs",
  "key5": "3Y2wyEbhuKsLy46vRMZ7wGUgPRjXbraDDtGJRBxBCsifugZ51vpUfoEMHKMXJVX9PT4b82kQWFSceizwKAoAuwve",
  "key6": "5oq2vTKk9n1zqWopsQTmJpaHg4sPe9bHpmb25xyTMQUqZghrnYJg83GYgj9LPzEh5MToJigFNa6wgx6MYb6nxeNf",
  "key7": "3fEtasM4hPznioJPPtdqEgRH1gmNLaursxNfSNftGgDjbu1jw8EXPbJuZXRv8FJ8iyGhTtHSYsfx5A3T5cV7hBo",
  "key8": "4BjwbHEvREAmWt7J4BBzTQwk6dn1cS6kfoPvT3vv9FTgVru1srW18a3ZqmBDE2fJjte3RFLyk9FL9NqKEbJzmDVu",
  "key9": "4b5U7H5WcKDwdDpkHP1fiGmQFe9CrtJqFyogkRerEpjrAQ79cc2PS7V3qo9B9BgPN5Syr5oZnoZ9RczDu9wRuPzp",
  "key10": "4dxdh5e5HyfinKMFaaRJTANtffvvsFnZ2e4yCFvsMZRcpAALoCiEGkMn2wypHowumkKaqgRDXNj4Pj2PG9hWdVQF",
  "key11": "4ucRTM5mGPtJjE2ziKRgb9rTfovTRuNL9aRMHR31GzDw2MgbbxoQ2fQMs13qDFJNbTRWoYJiMsUgEbTiZV5XLw4r",
  "key12": "5sj6bcaAi5bfBG9HbwbwJePfvszRtrrBFMh7KeVBSpm9HUHAgdL3QQ3gdydoncs3JN6UyNmePSjppVrhJpWUThr8",
  "key13": "62fcjwPP5pidAmv4bHCXqvFXN8eZD7eKwbhq4RLNhfvYNyDPSjuui2E2jTVTVwXFdUZKVYqTQerQYRfPDQvpt23u",
  "key14": "5J5tuocyQ9d18U5VLYZyx55QetTkz48kAH4yELH3SCYY74Q4npCQAhWfxhgtsHTgYL2jTjBSn5CEbxN5QmNEV3mE",
  "key15": "K769U9rZE1AEmHgXauG43j6mn9oE3NmPKVCeQpBJKmnS73T5YSazYi1B1BKn9M4Jw1ZDEet1zNYhZbwraVZDcvS",
  "key16": "3hGKLxmL3BuCSPFVPnnwAABkseGaYebBQRMP5vTb5bJaaa1ghRgp8SmGKz4FdZDuCQbQ3BQPDQNg6yMVpXZJUQDV",
  "key17": "3Z7JxvbHgaWGy9A78Yevyppf15EhqK9mjqBMrAzfZNgzHyZVJ58uQ88sqbnBu2K9QfEzJ9jpXfuL9WzPykxLP7o5",
  "key18": "5ApBHFMXYnQUgTn9JDKd2qBMgUCEXZXHunchQQEXMxgz6iVNGvZR7dePbsd5FWYS9LYEywTDxXrxwNstRDnPHYzU",
  "key19": "5E6Dr3iAa5scwTD6qaKtADtaxHASejLm3Hh8D4xWuzprzgvqMFQEwUStj5XpB877igGhesSAyMFSfx3o8bstTA5u",
  "key20": "365RbBaAP98hHSPWLsu4XF3mG2obeTrzxhv7bpohbsCkQA2xJdfnX9uhMdgJSs8FgDSFbK2KwFMShGHaz8aSfsHn",
  "key21": "43VFavTQLS1RFHAJypdxD3NxqbKjkRkcRfQn1N4ndJGzVSLmd7HoxNQkiXPpUe5F2gCrjSPr6BkCvaJ5hoZ4s56G",
  "key22": "5GhSLH9iVUXjfanrpXYW9v7dQfqEL96ugyuE1SwBhPxkNp438Z58h3Ed6DHws8bDsM8GzH1AhKjFvqG9y4FrjCbV",
  "key23": "2GNqx1chgimdDj12jZvchcRaJwPrerWoaYcSgqkBSZpQeCCSw4LCEARSFbizYYKivYGgJ6omyJTnkd18WXaDhxJd",
  "key24": "4fKgvAqTQXwagTAesgjKZkbppxa1jzPpXta4LCR8P2HnCC6LFJLGcgJ9AUaE8zP6HiohNmrNuPsaujJzZwwGx4T9",
  "key25": "2DmTg6M3gB64yWW24y1oScYEfxnKbisZSeisRFffEtXgrYQdTp7tA1uu7DQNSETNAM4Huqk26wqp8w1qiePLqyso",
  "key26": "5frjrXwgwHVy4dSzr2RiN1rX73iEuHBJFUsdtjchqggbPzLWmXX3R4yK8YJiTwc3nqHWF7SuHorJYMB7fRrzv8kP",
  "key27": "2jb5CCCbZKkndANK2QmDVaiYYVRZADf45Dw7HZRNNUEaPnnhHCa7TNLE3dRTx9UoY9pK2AoU9Gru5ieZPQkRysYu",
  "key28": "4yQanvhaG5JFjhskq29bVb1mJYV7AT3Yn6rVfv8pG3aZ2UWX3Wyvjop88RkLhrX6My27N2w9cRCceAuTsSVmEqwS",
  "key29": "4gHdbLbJa57nMpMjUvhWKso7Vc9aNhxSfVUiUNjsJPs8n37RW4mEijMFYRcZcJ9VE1EXBuZM9jA55vhps1ihG1jQ",
  "key30": "2pKg9xoLc7bQpx21XpmWvZuKaaemuXtZkvPQc7mnUJpFXrBnbdR5mhKDaKbJawJXG8JStJPSZ7WKpwNmUGTGvEfq"
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
