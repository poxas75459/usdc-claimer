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
    "4bqCLJLqHeM4ohrwh7YF8hE2FAbR6iaTueJpWzs4Z2X89FEVVKSzXRDoBhbv4trc1adTfMxgY1DdR459fwG8TiJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ViN6TJspqiAXchsTX8FtWwNEhgvHk2cTrYVqxRedRzrkgVg5fUWWXYSjfJMt44o3C4neY3okGdVywVSR71QRerj",
  "key1": "624jNnvHbSbaN5eCPxs7aqDQXzdjh9Pw9qwJouTH6SBypJk9bVvjSLKtJbvnVKF8jXzeuJ1KG3sLLGY9u89UQoMj",
  "key2": "42nYFnyHecH6XiskymdesuRyxxfTY7tsyv8Ks7TD8G3MGkxKiAxnBZK2tjWyEe3zuFG2WU6k6uUi2YeJuw6mtGSy",
  "key3": "CagNZdkEyKCuAg2QLWQDc9rgDStRHja42nNuFQx2zayVq36wmEd1Z1TGKDGSh3wjN1iLvPMBbfqGDKNgDDTay8B",
  "key4": "3g4RYtZWx12ctHHJaMtMYjra8ukveARGDabwT95adFHqeVKTmQY2SDmfKn2HfCtcHTARvVe6vv4ypTvmNLGEmJJi",
  "key5": "3RD6uEoo4UiQPM2dmgo5HsWu7NTtP2L7ado4zi2ENgNVTDvwLHS6bt493KdmppCjwtu3gEBG6GT35njafU2nQH1x",
  "key6": "28HCdN59zwe3RmZKyUFMkMT3jcCmRJpLSDRfWtXAKPfr9vgHPJJxmUFuH3BQyAsKykLzAwSYhx4ykx8VtzZifxwP",
  "key7": "afVFKHFXXvWkCpMw99RcwbFJY7KBoAimELY4KoLypydw6w4wJmnzUYTCRYV41vFzdFdUHBLzQZYcGjRzboaZgWX",
  "key8": "4Wc8AHR4EwBaLGgHYwkdW5jtiZ8yzTTBx457zqniLzc87n563yvukMi1eREa8Tys95ohmciFKXzapBqAUqeKzfGY",
  "key9": "2uW2FXDjVQWdFS6VRXtjEqnn7oZiaV6gk2sYf6JgtFNPC8x8vXzXBPwcEmjdG7xuviwgajTLakKgCHAJHWV19own",
  "key10": "5wyjBGKbfv1bt8uh8TaorK1YVJ8vpWiFSEvTvCXRNfS28czWV97RxE2LBrX2jDh4XNxN6ByNZNnHTPMnnFjvLSHU",
  "key11": "ZZKft16YBSQSUabnevY5JrBJAeiEs9jsUdYiCjZUPsTRYptUm3TaroExiQG8uG5hE1Nxd9cYHGK67NLKJ7bN34z",
  "key12": "29M4u2WK1nsZHpQrAJVWJXt8qkWtbzWUqSn74UvK6wEiHK3cRhFocW2vi8RpiQJfnbXMdkG91sxpLnCP2PcYELYr",
  "key13": "5pxkGSD958m7jNxm7De3uwoGYBTfVoTgQagJkLehdssduhejREVTS3YeBFSN5ad41bcDq5EAEwKpJJipp9onCFw7",
  "key14": "UfxBRAXT4KksSxNqtoFuf4KAT4Z9yN6PoxeKgsHEJdMRG6uCUiXTziEHq2BWqi2VpNxQ7GtTUBLj8w6orWTpkoN",
  "key15": "5kTif3KMhVJMScPWhtr3mJhcNYTm2NvDkqUC82sf3cZTAuJbHcFViuS2dwWt7dPDJYcfepfGU3tGCZB5LqHheizV",
  "key16": "25oxEvsJofj4EgGdNXdJmyYV6s5myTyPdwWKzpFdGuSLT5pHNeXnjBHLMJk82k2BpRSnZgphJ2GZvrb7CirHyufx",
  "key17": "4i3hmYowU8ev7A5jvCQSUze9RoKsUhBTWF9aNVNX7y79m6QYscZWKccoLxzDg4zeJ4dcM53TAfV4x2Gz2nUALSaH",
  "key18": "TaMyKiHNG2cedimFkQtvepbzuftHTshW7VpzwsY5Jy7SAUcY7wYZs21gPSKRVWsKPoDEWCycLpeB6UD2Nu9Rxox",
  "key19": "63LmHfUqNG8NZ7pDLbzfTdmsTXcpeX2ypY3A5YzFoi7iVaTUN2sdwQBfisCHSzrjVNi56UB6F3eX6ad3eHCUkJgX",
  "key20": "4b9QFRU11VaWYBuCjZ4AigYAnEaegxTs8Sw9FPMaKayXyyuqtsgJ3QxrWo6LnC1rSJ4maU7WDcFQKD1fMSXWpuZt",
  "key21": "UqyJiqRJwA5CfBv8RR37hx3TjpVcMsLeoQMkX7kkusRSrdAQbAEkGwwj3wGFZH4SQ1gJYsRiguaaErGckWGmmVu",
  "key22": "4Gn6f41GWnirD93QfkbTVp1nUUqAenQcxLGvfv3LTHDCRQTRxLPbss8fvSzbAodeyks5HfsNQUy8n7KQHAEiJXp",
  "key23": "2NRFTHxm3KadaygyvQQ667QPLscBzikdmTy5waXgbpTd5Mt1wXK4MUMm5MDHFL3KCYgQ571KaP9azazjzjwmU3Ad",
  "key24": "4iYGw5LDa9yLD1epeYGpTSChK1hQpaenGk33vDtzwfRoQFkEF8zdMPW3H5ibV4qTK9uqLKJP4FfB5MHfFkKWPuPw",
  "key25": "RRMnGn42K4kAHHBnZfVMF4RY6F7K6EP8g8tng9Sbgh17dSWbd28ELPjksmG1aSF5N8U6xkF76MhiBveznF3fck5",
  "key26": "2wAbH3biVmU13CM7JbKHSNPP5ky13WgR82dD8PWxwn9Zi5dsez586QvFpNTz3MztGgk3cd2MynxeVNs5fCiSccTw",
  "key27": "2etjAG8nYtE9GoQTdoi5SdWmDxdUvkjN1HyPwj7AEtA2BgJP9TBXoEoBEP1vftLtMULq9A5x6SmwKneuprUVgU1",
  "key28": "3YPqjjk8zT8U1hbmWGbYazPVuGbfg4ECwB3sp3eZ89ipsYuqKVSbK2VhF7jNmfpjU9zuwv1qVCqHAKRgcEZU9Nfy",
  "key29": "3W9fKEEm2nrJto8F4HXN1UcHtifppbLHP5SPow9q9XaZDTteZsRbakgSuC5DLpDjPRPUV7uzARRznsVNhbZZYwsL"
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
