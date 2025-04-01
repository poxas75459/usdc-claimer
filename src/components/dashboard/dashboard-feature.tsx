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
    "dRBkTQhNpAQtFFRVy6WiVMyDNvzrKz1uf21WME5DmWApP8tTvNEunLSxNDLeNp3muQmW6MgGymHRyDDG8RRamo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z9yi6zQYv89iASYE3xnALnPgfmcEAaao8Md3fZBHQSb6Esq2dvKZ5RLGUDVqiAb4U8bpxGLcnXzvDpxxPDd6xNY",
  "key1": "2LYV8Z6McCvPoWjvMMXGPx5NQYT7x1Pf9dY9wP7heXFMRbFxVqbA5JZ1rjFBQQoRYhncs3KATerKGnmHpNKJBd26",
  "key2": "4YioffLJGWuxs15GnUvUXyefnoTKeiC5DY9EbCrKbyd28An92JdjXG4TdCdti2b2Jwd3up818Ya5U8gzTSHtyjaE",
  "key3": "2GnuXVs9FuwpQUveVF3Ac7fR3PbfSs8PiA1R25J2VUtUC31bGx1wU2275AW5dh1885GxNjNotqPcMLZwNDyUWGdR",
  "key4": "3937F1Lokk5YKBYVguSMuJFGHXGDz1ggzPeQ69LDGPKToNxzqGaDrHTpcyi7cm75kSaTS5CSue6xRfDGTHaLV816",
  "key5": "27UbLgoUUYuSt1fo3EEfZtmJJiyYAFmiHnP8qp9m8rNudd1Nhc3RPVpE3ePGDAsKhy8gfCNPNT5UK133Sv4noC4j",
  "key6": "3mGEYSs7xfgYAhjrjuTcqmpFCPGxcjqgpLCGysB2CS2zBZ9zZvugUo8bkEAo44dn5LZjmKk8W8va3oeTm21AzyP1",
  "key7": "2oUZ3ox6xYfaVNBBBTow9paHzmN8CExxnNB44Qt6rvzjnkduvjsat1Jd3zSDJSsoj251DVbV87PFWZXXxCRHppmj",
  "key8": "FFjwoDo8JeQgUHRrEmwK9awgXoUWM7vK5ELy95A5ixPKYjDfgC1Em3vjrtAr6C4ddyNz98qvoDe9tV98Y1y8Sf9",
  "key9": "qzSW3jGFyw6orM85ytaq95nr4icFhD5DHWMBXrxtiJMtLnSoavGCn1xye8CAxTFZn6V1ypMhceZx8BYMU2tfm4j",
  "key10": "2MW5G1fzQR9Dzr9fBDMd7uiXzAjJKR4Q8xNp1tH6aMbX5Gf242pcTfRauPdAgKEuZckHq2893yaizkS6bA9XPU5K",
  "key11": "a7WQcoaNfMikgSfECsuG8FLhCj3b2WoHVn1Wu5JLxqhUhiSxEbkSjYsXAsFjSyTzGNPJZdciFkbacr8z8o5JSEV",
  "key12": "3XADJp4EJjphkvLZwdUaMw4QuCRtnrtBEKUdJLKPuJnQe8z4Rkgzmmt119ib7wiPsxeQhjy8YDSw4sHHviscGYHj",
  "key13": "4r29mdUS4FYMAMHCi25HEYjxvy9pAfQfCe4Kho8XxYC1hC4rHUXaVio3b5ozvLx94ijtcBnUdgpY5iJ6hUWEafUu",
  "key14": "P7V4e2HWVmoT6mWfzghFEXfhVMZ4yMkSFtfzVLDciBCauE1133FuTzcyRsddwHPgBvUFtUyJx5bbPfEPCw4n7dx",
  "key15": "3FmesFVJZcBGKwjFjnkxAB9LBoVfc8jsN8rtURigTRwhdFyTi3wSHXrFB2c86LK2vBmM1DQy9isVTG9sACfQkeot",
  "key16": "43aTuNgWizhDpx9Ex63U5eanzDNcbd8mSKUsmx9JSSh4Gsgv9PK5DPcuB69xbT76jAErthaksmEQPWHWLCGGaer2",
  "key17": "66HF5CAFUvBksbtzdJhj6L7TKkKQDgFCwXYykndTHqNFR9WDkAb2Hz3d7t7Ldrutnp8s9J8HWQkC4v5Xw6VWmHAj",
  "key18": "4xZ46oHesCqH154mJoMdjUZ13qUKjU8PRZHkpj5BsoLWxqpi74Edt87Gn2nYbNKUNsGW7p6ZggTN2tJqHMFbahye",
  "key19": "3KkBsc8HhCL465GtHHva37Xf4xir8Gn6xmxLjxR1QK6FwEbnCuQfbcXwhFzSNs1sXDqmT6pcvoBXiu13YSLQdWkM",
  "key20": "3uyFugCTJaeQexRZpN83wwVLHySqqUqxX2AcqbPm2XZGFY6Y69kv761jccpsCaB829wg5PZDaF9CFDJubh8acgCU",
  "key21": "FB1SfBwiXPTtuZ7rUzY77EXMU5pcGeTXHirgD7HVCxCwDqMvjgRkq2ixJEWmrH2hEpLvtS6DXkz8UagjAUamvNS",
  "key22": "5pPGLZ7ELYrp29RFtq2qhimGEPJZNJqnziCp741xURDeKDayiup148bAMrv65Bjz29Q56j6DSyKdWMAz1KAFxEBr",
  "key23": "5jzuSmat61XQyCkfUS5Y6rtZJLEiUq7e3S4zUBWwbYiwHGeA4V8TaCtWJ8jdeRa2UdR88nivYsYyECjrAGuJLmLu",
  "key24": "35V4FKsAXTsLo3oem28hpHRGWPBtPuUnFLzMdcybtd35LQmVsFk6tf1DRfGYx77QNtziooQJnXUoc6wAB5YX2joM",
  "key25": "5JfUM6eeHYJR1JULQXLuCG8d9yLZ5qns3kKQrxyWRoKrzYRxcF6hFz8ew1Ro3QKFt4msVxzqsjvesNUvef1fRmCW",
  "key26": "3xUVUUwzJtXb1xrpDtkPTPFLeXmMF4qqYRzVTY4FQHxC7EbQ2kY6nUBF48WZ6etNVCfGDEFD64ZSEVV5HJ24Q7S1",
  "key27": "62NhiuRNyEAGzm6YcMxyk53y8gmEPSKsZJ1DSFfyfMAoMDxKRqk2NqtJvbJUw9cNQbjZoj6y8zF4rscrAQqFUqj1"
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
