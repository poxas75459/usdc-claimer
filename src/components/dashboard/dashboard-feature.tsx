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
    "3NUpoiUX2R1zmPcAZBfJ39BFRQCu8QWUkJvPvZxUHsiggFNLYasyf141TAoWdZ4Q8wHPhUcH2kiGfwt8FVsb2CmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pNDwwf7f8oJE9yE6GznNmTyKkaCRV6firTjJk9oXXWGHhihMQx2wDPbLeePAJyDgmbVootk3JbgKf816NwZTYzE",
  "key1": "nnE2pPDZ8SR9VXDwnQBeguiBmDBhdmf4TYeSpt8sShXH5fvXjMkUp2gBLryxvYk88B5LpJTxu7rAKm8JrcBZKak",
  "key2": "2km7RDaXTVcAtooBiNVaAnM1Z8Us4bzEKztRmUMTkjJA8gqexfUNYn7wi1CcV6qpfYHPSW6EPwDeeY6sSvXCFuWU",
  "key3": "2Y4SKK5zVcNZ6YxakMKuB67DGz8DGcfXw3uBupgTmEBzDva3KHFn6uzbzFFUtAVPHWeBLvPzsc3jbR1gapF2MQct",
  "key4": "3LC9sKwK2HzzUntT5WuQgwyprSbEDAbuBge49xXuXkJN61FC1ukRamNCkNAo7fqFmNKvGDDV4uCiyWDYoCzD1i82",
  "key5": "5KUT4vmxwLANYLGyqhpGvSAzFyQMJiWALqsxYT5ikBBsPv5QgZUEUcpec8X5VK6KNnTqvaS4pHbbp5cFQd6NVqRu",
  "key6": "4HHUcrSytc7S9vQ7cRJfcLF66iuycWPAiM5FXe3SZTEZcbkD8eEkScDnCnEDK9ahh2a684zC1Lfh2w8pjwHxT44v",
  "key7": "2CzyQ8H7SSwSzzZqzevy2DBZiTEuzuboJvhvc2KDJ35eZPwpneyAhSNZ9nU3kTNjMnq5XSTVJAuGr8Dnw1KjBVBo",
  "key8": "2jTpuNLJbqVdFQMuSxhUXMUXUBnFtYBUvbsmB4kbgJ5X4tXU6Hyc3Jnvqvsq3HT1HRHP1azDJqhM2xUScdS31wJM",
  "key9": "4i1ubgrBJBLgijLhdgnBzAyjdj5Wv6HFXAt6PgWDKWPtpsKkDM9CNB2xL7BZ9rAb83cFVei3Axcaie6KVtWv7CQr",
  "key10": "3izg5k9dVB7cFP3a9PzxfYLZ5axSp47YxtqS3gfscLjisxM98cy2xWW342CKhm1d8ob8gh1qV4rEKQTSoDT1iPEK",
  "key11": "371dUdiKVKZyWGbm3zTkvdKXeZu7xHF8Jp2kUCgNAnvrZmwxjofCDrzc41dw4LtVSoYaG3eRAQdoZRHdtMu7E1Az",
  "key12": "p9JRbiCXbYaHGmZv4aLjihxou554zLpdFAVC2DMDbiHEVxN2i8jhfpTDcx1RYqeLjSPQX4ETkW82FSq23tMNRnP",
  "key13": "2cpgmbn3ASMJQPXurEKPnzjEyWBoDMn1tg18zCTV6HxNEFrUJzUBZHV6pdfXMWTWmCFJmEsEWRFzpdQZvXykVBcJ",
  "key14": "2kpxsPNmhDMUK2pTt2wVrVrvtuMfa15PvagX83YuyzZtBrFZQnmBZMQcVtyEGccGQ5QQLWkowv3APt88stAv99Ag",
  "key15": "LJSE4n92Tqc59zvG2nEAPRG6pdoDw8wkz47wz1f2hkYEEQAqMxBG3FWYohBRficJv6njiC8jCtxbS8me8fM6Gvm",
  "key16": "4UEm5gtSeT8GfD2QFB4jcQaPdRFTqqQRpfDfAR24dXUepz5Zg8PxqsuwA66sbAE8eJHSGdNLUWnLeXC2jejrqLFw",
  "key17": "4ka8VvomcQmv5AkfTpg9T5yXQFTt6FBmkqvMGm3Gk5oVQsVDFPJYASKDJpDG7HhB9Yi8TUsbfXXCQUHjSWRmk687",
  "key18": "veGKXwBQiiW6sgwcYY4HqGuN7KeYjrmVGUfRPJNfYnDWxzziu3rnp47whSnvawUEHMx6iNMjdgd8ZTYPgX1bhBu",
  "key19": "3oSai9xQB2HKQx8pscgSnH3Lqs3CqRtg1MS64NbgNwRcXcfawmthhCYTtjGkQr5QcBGy2RbUkpfauFRsfF97Rwvi",
  "key20": "3fHHK8B1vjs8aNUsMi7YVYRax6cFTqHaW8Bm2PBq3n4FMhrKyd376FkHpe2AUaJrVhjAQxSRwYVgCWPohwrmftpH",
  "key21": "2nHdJDgSwNk9oPZjBWVfP8SSZghPx73yGLs1S3bpHRaBEoni7Ppo9j61RmjwwTJ4mXZg8aZcXKFN8nTYK7cas4Hw",
  "key22": "rzar8ykQ8YLmpDd3YdTLZPgiZyCDWhiMNVaa6GN86at79TKP69EDgEHuxBdiDyFYis3gXpYpihC3eW9TRQgzH6Y",
  "key23": "3jCTax5kwNLKS33kEKfMEofFaZo3KavwPKWjdpYHbHDb5ybzJhNpcNc7BkmRHDMt4Jqp1eWWXyUGc9BPMtjMpCpB",
  "key24": "6uwwKjuHjBdBVXvEg6yAcW64KESQGqTF9VEo5C5R1qqvvLCXqkRXCmW6x2jdiZU1fnmCEPLQXBejoP9Q4nRGnrg",
  "key25": "32Fw6EpABK9tA5UemBNEvVqtXnzmYdBbaeDpPvbY7Y9VgbQMx9mmpVYjZq1bN475iaZ8B4YetrouLaeaKVLuamTQ",
  "key26": "4XseFiewk8L9caX6RsdxWVRMRVLbTXgoZwruqcZ9x4RNVe1G68Q7KfykpKu2XKx6a1m5o8p9SYrAf9Ne46cErzRX",
  "key27": "2M9rjEeZCWLJUpGrLdyY2BcdfcqupXfKbetwdgAeSMqPDudx5vUJA6k6NY4crxa7KLwcd7aGxuhvv5tmqreFmsKM",
  "key28": "3hjS7HQ6DSCcfMZMqhCYnj63aKYxrou6PRzT1o5GCcZxtAQ56hFy1PNtxEx5N9jU3zRFeTtGYvomn3bt9NfHGwws",
  "key29": "2HvBiCdtAXjfv3UJ7dW3WmZmPKLqLVbqCohJhMvVs2hL8f6fgJSggjoR8oxhki1WEwAgWdWZviNcAknXLbTj1qaN",
  "key30": "5iPWsJdbCZQb5JVBrT6D2hMzvourDy8YkwEzVq7YnjNaUziD51ybVU8tMV91wBZFffU2CDam82JFPUVk7XuAut4Z"
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
