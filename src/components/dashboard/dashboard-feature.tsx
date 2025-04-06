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
    "358td2jd98o3JxX6yMX4tjbuiZ4QY3RYo8AGPnFDyXKP4HMzyfJqoVzT8Wsn8AMRcCVVAHguNuJVs5r3QdgfgoJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P8zVLY7YXsgMsqeh4nbV79uju35oA1tWSho3fUzJngGtHkfEJjCyQfVQuGEKydwEraDxGJ3rem4wkmPHruyDEHW",
  "key1": "D4RfTQDoyi52Q61RoBvJPevTD8nM4QPw6yj9NNPRH4RhP1WDqTCm9zg4KvH5pcKzorFfLsvfqQL6F64fatwTbfX",
  "key2": "9ax8h9s7mfmZcZg6TpT7QvL5RYMZb77f9NTwju5cYH3UnTTGSsqPrTQLq6J44HmsyvzQBVg9DhXPCSL16g1qRZ8",
  "key3": "5LqVEZ3CCgrDTBcVB1WwQ274akLqTLq7bsTRFC4a6isAovdeeM8xLy5drC8p5f71HFvheNr4PK9SwYcsEDyG3yoW",
  "key4": "3SLjvbqXXwREMPEHSGnPFMBypa8k5Smj1DVQR5dnViMGDm5h9Mkjy3PNkWzq1baMkaCQ39bi58g4DLHo6VUEa48t",
  "key5": "5fpZxrLKvNkGGWiDUgzNwRfXVMtu1HihAMj78gfe3HqnDzspS62YvxPy8VaWMcXmi4zrZmWnLnwFy2RKfrVPTgNN",
  "key6": "5fzVnKz3nKYheJ2y2EWKJLyucbE79vv8k4yACmRUmYJGjwdbahCkU8U382Y9rzJcnsVZgxRSn4E9KK4bVH5QshdG",
  "key7": "Z4vHeb6hFe2UKpzWAx7emdv7ceskSzuh71D7XMekZCqZZXz7g76o3kYmJvwvy4jFvmYaQ4eHprAsZcqgSPDH92x",
  "key8": "3yRpdyYg2jzTzzGPrwpUqrBh27GnDsH5XUEDqi59g6WzSEMrJE6zfcy2dE8uQYWJBCnbunx9bdwv1dedsLomECmE",
  "key9": "53Ft9XjbpAiddShMkY2BXkoBkyv6FurNUbJMTLjsmcKhzWcy2WGYjztvCqSVKUqAvaayy6NmMmPx4gkWWrMVWvMo",
  "key10": "Eg6qFW21PbgHsVBbG9BYzirEBzUnmid9VZLnzg556VJVJ3j1F5AoS7AZzgMvfeGPzrrtiRAmqrGraq8B51q391y",
  "key11": "5pxXMmMYProavpH4s7u1FeZM1KsnEwFMPrsWzrRW1Y6jRz5H9hocU1NC6PimUM4gsxt4tVKG5UpRtfaYRFTVZ6R7",
  "key12": "2kqL2GbLkTQoRSv4Lh5kX9ers2Tv2JbJqQd1nBf5hWrCfdMxRJEMJ3mGdSS7LnMCmm1bsZzvtgw4q8DyyDdjh22r",
  "key13": "4tAostad6MKfxbCbjG4a95tFG6e4dVwkXixAF7YwtDMkNw7XmYNLVDysoRv8RmDxJwo8D3TaKV9YQHtsHD8gm1M3",
  "key14": "4tfiNKPmrHhsX1dLmWVxTU96BGr2qRPcPVoZErxMR9AXVxa8jmXeuaSUumdxoWr2P93R9cgYnvSfWo2WhKXZEbgk",
  "key15": "2es1hQUBhbj256q1cBxRZkSNXvXZf5ct6toSV9SXg8mrVpiP7KajuY627UNdGRtxRcaJpxXq6WPvPoqPkXGqP4rq",
  "key16": "3X2jvYX1uzJb6mC46HD9DX5zECJoThr59iG3HtWMEfkyMJLoMeiSYsm4edXVpqW4AphLKHQJPZyHNAte3kMZ9pt5",
  "key17": "3qDrpXbwWsYWTuDEJVbNVTVd4HjzxHPLXiYQr2Z2guvecYcQD1mTKeV5r9cLEP2vKHVAXW5GdHY7htJ2p4Zd8JKR",
  "key18": "5iBSJF9w7HhQeZxgrCNkhYYMAGhD8X39wukUrRn4HXuBTZqoaJeZecjGXBSJpkNTuuh4iNAUejxR2oQrpC33RmVu",
  "key19": "4PVLWHw8yBgZCksKNGuC4LhUiJmpNMako3Qqhm7YHCsctDaeRP9gXgVcAFoZf5WwHMa2rC1aru3iYCwwrvDAQrWz",
  "key20": "eVTBzv2w2SVP74HeGhx3Xsu6HJEynq4aZ5RV26Xv2LaRcyFidnS2VuEkWdTDcNdnPFSv9jWjHW9ASa4jtRqAQfk",
  "key21": "625PGHsorJxhaqVfb5bF1iHxZs65wGwmkPwpgEQzNNidRmM1pFKWGGrSCTQC5scyhrdLrXEAtUoSxwLAL2m5yw8S",
  "key22": "4TZXhU9Kjpziq7KxNkMTSay3Rjjz4PLRjcT3rmY28B2VuPzZGMNkPtZRimPBdxjAfNcvWYeoyU2A4U84rXyHZXc",
  "key23": "5ykevSFEmWaRDj9evK4BYgZi1LaCYqvmHc1eP5xbkYoaTVfGjaqE9szSD2H8EPpeq7fR4BzWyEp9c4RAKeb7jZG8",
  "key24": "3yTw1XSN9ViLbvGq3w8uH35EiPiUgDru8St8H3mmdRDVPMjTUqbuBosdaFtdAc1o8mVVyVdqDcBbhGKwnu3NRB9q",
  "key25": "25mjA3M7Jpw9e1WU3iRG8anCYNf3jb5rfHiqB7NRnr6wAjEYoMzXg3mwcFWAvnA9nERW9BEwXATbuAnLWT5teLNX",
  "key26": "FNB9tCYcLQdoz1prVeF6qp5NP2yvPka26d3uPXVsEyceN3hLvqd9ARZeZfoN2uCB3C9c9cxSFZaLd6gBcvq673c",
  "key27": "3gHQoJEMEezjiSvhGrZy3E7GY6nwnZwz6DJoEEYzTN9DU5McrbiEMYeqF4et8xauQwb1YgbkVvzHrEBf1ebbuiJG",
  "key28": "8ZVcJzGj4SahRC7tVEAdnstCmcxE5w79Z9xiXzsMw7BiPs5StWd5wkkjUGjFv45Aom2G5YWbZvKBJL74fixegRz",
  "key29": "39cRCiDrjs1HJvVy4vPT1bD5SU2NFUbPSeAcCQ2uEznJgE3KozjZtyDpAZrCMcPhhixJCmCNwkMoDzkmLHutGS1r",
  "key30": "3PEnA4fPpQCjcHeVQQexn86Hr6GsbAR2Bczg9ZXFoYxiEJatnXkn6L2aYNddXL3CMsY4fybGrGosTTnunAi1jw8s",
  "key31": "3Esoeq2wR55dWSmTJJFdyKXtxeABMuvXB3uFkZYtUCZqqUufidpywcFQaysqqDjEQFJQNvZQcCK6skemoPARRewd",
  "key32": "2Uju8xAWSvQZcdPAjwcvEDephS9zbSKhjRAtywMuLVxTCJmuKkMGk5hWFUpWX8rz9j7CfwH5uauyrwvWQMCCxEBa"
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
