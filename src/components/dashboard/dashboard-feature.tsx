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
    "2vxzjzwN3vrQQoym8RMHJkq6UumH5TUeike1xdcu9hUCHCCrFWZuAQ8hEf4jmaYEsUVRYx52z7ZgZMisQ9MAb3of"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wUtnP99aAiigVr25uUgsLHLyPxSHBsjbi1qUSaYkafxBT8UeGMncsXRifcHbf6WDdKBvY5YcsfeyoK2LjbTiM1p",
  "key1": "KdAmDg9KFS24h51hnnNbpC4P9VEsnUWuPYJKbEKGpnEDPR5buCHJW7iWEmdRUHvae2yCWnmRCSnwQUmsz9LFuZ3",
  "key2": "4S8iPQnJ3fKfo5nMyNtF57cY5YfjweVo5ztcNFKwszyYFPaaSePLfbovWWN9H8toGkNRagkvbK1YrU6rGHhS7jik",
  "key3": "4U2bUMLgKzJP8LEW9wZg9dWm2CV1UrJNYh65z2ibg9wTHGrn6Vx8CHsuCGiUKj5D5wVK8q6qd3NDvw9nsmpbQ5j3",
  "key4": "4qjRFsRhtfJXi5kjhBNwTo6e6LMmT45Li7Dp5njAhebqq7BffWCzso7fYVqGEKxDQthqf1YN9Wofidn7je1vNdWw",
  "key5": "59szG1r6q5CK8GkX2hhPBiXSm9oZ6mnbfsNtoJSW4riBJQLZwNmnVBPLShAjDZxaBq6WjfeK5fVhkPJaynrMzELH",
  "key6": "5gY4WbPz3XzsDsHSzWyMWJcD5Di1nmUeNB3mN5LMbB6shvQzdBoUSCePDSrkBDHAjc8knfMV6Aciuq7jHXMHh59x",
  "key7": "3Q6YRRvxh6CGe3ph6yTJ1JfzXQakxtucPTGHtsMqPi6pU6s7HuFmsNoR1kP5QQ7Dw86yybBSFtqigNW2aY5a6vsQ",
  "key8": "3GaNhuGvvJYf1o1hwoDkjjDy8qBmVLcn4QdMLXvDJRTt9WCQdQUtfrorx8upHGnayJKrU5NQUDzNySJnH2B8D7Es",
  "key9": "4oo3wqt29ifUhFuTdpeB9rdVhcRsaB5KNgK6BYhF9v8tYirDeHqJRuiUsFn9SSPfWgpuZECH9Kqvhbx3jpGvy6z6",
  "key10": "3wheE4y3m1gyuDGgWB5zRPhtDEAY9aUN6KAxd5NP4XnbsmMh1bevJ4HGReEJ57yP1DgdTkLH88kywEo2RkgnZmSD",
  "key11": "sZf2vqQJb9SbNGGhQUv1aZuNsbkJSL6zapi4zikXuWZHZXQHUDAPsoKDxQY4NqbNo6P4VJ8EeJATswx4msZ6Swg",
  "key12": "3r98sZcrYEjZFe8QWPgMPvy1BCmpomf83xNH7yk3S5EmgubE9QQxtVf7oavh3HDj2ax61xZwhbakqaWVTn3oyejc",
  "key13": "5wvqpnsmTWV4VyQTrbw7MFJTawLJmVtTkVSDZjWbRppAYuskyZpXjG9RgAGpRq4agroaG2PEeist6XZtCkcLEALr",
  "key14": "5qjRjDtc3XMENytWykiaVuVs9j6ZVLKYw1RCMyH8aPfkVFWRvc2xtxTwvJUBbbH4ddaxTU5EiLHPbh1Qu3nwWCve",
  "key15": "52HTcFJUt2ht8tsd18wCmyXt63AXLoXA665sUCELvH2V6sWJ4iwme69REvHnzqeU3Aq2kHtW4xpJSZMBV4WwCAkU",
  "key16": "5JdtTC76JGcSnL8U4xgu3oF3jcgKZbkCFxhJGNhn26iVr6f1Xgaou3bbcNRhepimvLNnsKdV5qrWFyMmM1Q9VvGx",
  "key17": "3H7gCxdhxKaeC92imeFNyCuzdhBHTDNe6QsqPWZz1escgVkrvn72CesNVqS6yyH2q1YSn5virY1CcTxrmm2dAJci",
  "key18": "4wzRa7dCDycGZvwcVhYJZRQ5xJhpexLujrqufvfQphPNZRB2aVDa8utukDHGWpmXajedtgd5ZrJvWqp9zju6oKs8",
  "key19": "2gNA6oaWkBUhK4KaBdv9yLzdFVa4mY2cNGWSyU5xhGfksDh1FvA9uaY1ueXxkKegs2NrT5aBUpQxWvZUPvmAVGUQ",
  "key20": "67N1XbdMEVdGnXVnt55f9jji1F1VGXdb87AiG3PzUtUS25THLpvhQ9NRBWkcTDucVrXyKpGHzyWo7EbW6fnAkAWZ",
  "key21": "5igngsmTguVhCH39e1GZGTz1vQZJAUMT9FG5epCFdvUyotgdoqsfWsxghAzPmz3aytNoD3wRWReT4JRWnKxnj5Hz",
  "key22": "4LwSeYwAcQ8ona21WPxapZXHWaAmaMRh4L81GRvX8PBce4S2m9ry88aaEUYkPnXJjHQLhBGqUQJ3pp7WkbCoN8AF",
  "key23": "4Aq25SJ7FqDqJdxKBBfsqrXRmhv3g9ry1PYShgPGVjFeeDi5dBDwewwKFJs91JxnYnf1uhjzrmK7MnHzqLoCtgkt",
  "key24": "5QhMcKA2SuSRfHCG5cAw3fyUGWiZruxGpK2tpkt4yNdm3VST6VBq84NYoziPZdroqwhsbLS3zjzzSZYq1iw3wyX9",
  "key25": "2kqE1ZB6azzrXcYJnZxg4qKkfGrNV8WAN2KsxJdZVpRG6SPDCpVxXhyjNtAQT2b1uMDLWRNPR4pSofBKi7J3w87f",
  "key26": "5cSknGxJX9nmfazsvGowfHnox4TomEESNan8NzLja93pvVHMKqTu537mBkaAf7QHkUbV3PKGPMKxi1gHm9SrkKMb",
  "key27": "4PCofUptSKR3sxQmBPBkFkjSBetEw5rgbJ3Jr9rbWDGjf44Z3ZnX6zsx3vAyYASss5nQvGXJasQHL6RjxdgCKSXz"
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
