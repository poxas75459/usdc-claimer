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
    "2MmvqkVAebbrj5imXqnjgxPF8aQExgTNbCQDQ42iUBUPrgrFsKZH9gcrGmjQMJ19yaySrf3RUQPfxHKQFHdJFVbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CFsS4vFm1S8ZTeQA3ttGT1NpQabeLDVMxbDsbhxDjknaLHdaSmCBtCxpFWZmazjt7N3BXn19J14xo7FCdM7aefb",
  "key1": "2ZdQuWy4Jfff8xZpaJLAgZvCAPDiDyvXiMZPqBqFy1Ki8HwdfLYYHpjeekDrxXQzZxQ88MhXbEPdqQB3tXkPzwJq",
  "key2": "4i1Aum5orwhigSAhZtzYV4H6ppRwf1pGnzqw4Wiov4N8B9DRLzQeZWqywWyidLJ7UgEvSgPMxFMQESpE4dE7afKH",
  "key3": "3DcNVRmjD55UsN5cjpKRCBVmFoJQUTsBKfb7RncFcij6cCL6kLQSsBsWNsBBxabAMsKXRWw7JRrGozpZoGtJWFcB",
  "key4": "3WHbBpPLQGGZZYT2fRZ93GuHBcoLNHFZuu2KN3PYWVQQiYyfbj1WvEn2Mv2EMuynRddqJ3HRCgMXbL16kLjJufqw",
  "key5": "33M3Mum4MVLVmTRfiRyJGL44NA1H1uy4nxY83GFZMKGVsTjDi6yEaBB6njqLw3aNe664dyYnY4U52XSP1xrUvHPY",
  "key6": "24pYpctFXXDxLpzWLwz2aY7vQCFmrZHC88PvqKrcqg8V9WW4APVdfiRQ6vZBy2ui5mMGCTsFAWBzcecZMSa93d6q",
  "key7": "5KABLRUKoz371dzVjaTcbtmBHgzqBDWhDC1fJrkcRjrfgdpMUynbMajU5KyX32dKbiF2eLU2w29M4QDnAP23PKzS",
  "key8": "2nSZhXg1L1ZU3h1X3zXkQfKTEgkjrdW1UM2HFYP5uLfTvxmQKReUUjYwrdguX5Yh8qw32aQGTLxaSV5Wjcj1r21a",
  "key9": "4nMKGhSzKm5murnTQDVE13GjVnugmWYfSCze1dN2VvDXXLYz3dLHLo9n3H83bHtf5W7qvj9idU5ExSZAcZ5eMFgu",
  "key10": "wHpfH4NJSs7PpaT8rCmPSGAmB7GfEnofyqRpr2hs648FKYNELUHA5HkrtYCMW21GQWKRQxNFmLpcfqKBU8Xb3Fi",
  "key11": "56bCi9e82LLvki9dogoS5Czn8eJ13o2nwJaCV5wRNfADPPMoomum7d2PUffDuwTDhNtL7wbCTG2BwvY1sYeH9YmN",
  "key12": "4YUep74z5MZGhhSaQFq6oT84cjTatHqPDFesJMwzSvLYtKZAVCw3iKrFtCZVBYgno4ZKLkYWk2q6GopZqKvhRADy",
  "key13": "4Vnx8upokQmpEGNW87FbqaC68tB9CbcAoNB8YPBG83yovEoEy5ixWJSJ9VCPjoezr5Go4WVu1uPz6m42iA2kWJnA",
  "key14": "5D17iBxu3NhuuH1CKi5nVps5qfL2iEGNK4D7D3x64xf1rz3fNpkDhGQ1Z9SdG8su59FPQsAfRjMBXCWhQWFs9Qtr",
  "key15": "5sjYF3fZECVUa4Ud3oAM6VfEFDUuSgJsmnLbdh78LTXfKzGN8X6qrTrDdsXaepi8jwprHS1R66VHbx6wwuMev7Q3",
  "key16": "QenAd7LR8RS8dL9giGVENZTxh2WxvuLrXXnZnJj6SyK95a99qsJdWeytzbrNApyAS2A3ny9tLEfiiWcpPPTp7ie",
  "key17": "47BDNnZ7GMULNi1gUChFyafkcASjG8tSAqVETcFiDMZdpVwGqmEwNMkkJ7WvfhkWW9dvvKvQfBezduqb41MGXkae",
  "key18": "3dK6Rh1qkAeMb2LVbwABqZ4H5fmWjtenNixBgXzFbR4NDVtnrRLkCnz7phdJqNLy2ZUmjWsCNXimvYWYiz5Yv7rh",
  "key19": "5NG3CeDtSANimrbufuLnWEaCwtafo96FM2wozK1zJHsg8SHcvvNGtmkqc2DM51WVCskQWdEjUcWAoJHzarz7QYGF",
  "key20": "3PgVKvfEVEkHx16WB9vk1HuwRFvQizySXzC52GRpVrW5asrCBQgRMJHxwGmVM2oJD7iEbetuZm9L1VJ9v8RVW1Pe",
  "key21": "5nh39VUeekKSoV8bkmvUdmNb6K9Z4LowqKtmVKAhj4Sx5DVRZwpgfWCVq1JyF5FUCsVQKyNL3HcnUvL848eFa5Rd",
  "key22": "5tPyhVWLKczcgzvkKUwkwFQeJRuJQc6wCvL5LavTXz5Cg1eMd9m1cPX2ffctRpDmCjbKimXkUL9fc7NEEKx7Cthv",
  "key23": "3BL5BvxtQYV6KXWUvbqJ7AkHJGbRg4uWmPNdA8sLaENr8TXW9zRGbigYuLGGZ9LJxmP65i2VLUUrnTvDn9ErxufQ",
  "key24": "2Kk8BPucbYg6kHa4VgQDx5dMHWkeRYsgrcuvQo9KnhgQUb1UnxFD6PZFx3WoG5Ugxbt2FjMY7YQ2cSAmzFawiES7",
  "key25": "uvXsYYnv68QYhbHS1oYe4rA7B4VYV4tPo82C5QS1Fp8uz3rCZJGwnwgtrdF7zDcohyoYnRL4qBfAfzYZ5U7Xko4",
  "key26": "1w7xvKpDdU2hB4YDQStJtmpbZtAEBP4gfmzrHj2UgXgiWV97yfuQa3SFZxUAFgejyEGcUkwJWcPSp7o68rjLwVY",
  "key27": "4Cu8kZLH88NRiEHXpZBu7uT5tV3Z5tCkyQt5ks59yynH2rZuVZkSviguefGQmvX4yr2uMD9i235EivsCn4mhhc6e",
  "key28": "5WbQfo47v8U5b6gZxYFojbTTQyssEAAZ5pJRN7qzNV4at8pKLJKh48PQ5n7avGGBhVeQDG2MpGh577yKKeWAqE3m"
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
