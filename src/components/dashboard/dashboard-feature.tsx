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
    "5D4gFgPzTt5f9tJ79wpUiyhWPTKbsB99WcostCw65Z56DSSMe7LftFJissURA35M3JFGpbrRm8rkecfLAZ31ENo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CSthgQ1EKpXZY8gP3v5TsDtYoSetEx4X4p9YiBi31d9rgGFdrLXqip3k4fnF4vFLRsRP5NazstwxR44YJdPFED7",
  "key1": "59kEhgHry3VibiVmKMeudbwu7xanX6r5vjz2J7U88xMYKeqUz8poifpi45fRek9iCNvDK2Wdq3zUZGxL9ABjr2RN",
  "key2": "4HSaKRCX1DsKXLmbPvP9VrHB1L7hvAFNPZiqifEyHiDRh2Up8BSshqKT1iHwpE3P7e29TU2j8BUMiWKU9Dr9pzJp",
  "key3": "3Htn4JB9meakK5oTyq3n3p4kfgvx9zQf2URkF973wVumJgD6GCJht9a5JpwRbWcrm8ttRTVFNuH4G2q3aJTAAXEH",
  "key4": "aRU5iN8Jpp7dLZa1N8kJCaezHXya99woiY1LeHSoxvW5Z44yD1JEWYsEXkL3yEnifeCcYWAenJqTY4EMN33qu47",
  "key5": "41bZFKFDGqXuVezA4joGRCN9QVmT1RjcqrzcserNi3UAeduqVFS7U75Uonm4kX9285JUtqNQPuXq2YKbmZh4gKbP",
  "key6": "AAYZL2EC7Vam2hcsHy9rA9BkrYyELgi28JJnzxek8MhLzubmx2emQ3iRtHis82hkWA354fjHwgvQYcxCfYW5KBm",
  "key7": "3iydLxeX3BPDRmUKSqVQd5H6H8ybQCRhGNxmso4Q9KUSgL4tpK3j6F5r1QQnvq2kVxvTNXkQSer2sU9H5Qym5aew",
  "key8": "4soPXpedvZjaiVjUDWdDF8ZkfVYUYztvceGrK4E3fea4MGkkKPRhj6yEd9yJUZmdNBJs25TBNLEjBYQbKzUakidW",
  "key9": "3gfi3mhxX14C98FxcVFtcM9kRPzqAJ71hFnZbfquecU6RaLUesCuCa7agbejH4H5wnh3XwYBk3RxQeS2rax7WVKG",
  "key10": "4GeWLhFt9HkT2bKw399B2jrwRGt8UiFPgHkfmfpcPaZH72KU753qfAAiis1PntSvnaP3U4mZ5wRQfWLrtxJ1ZiBz",
  "key11": "3vTwho7uaRvwNXs6fwqkp4v6Rzyphmb8g3WVT21PJ1WC1x3ZVZsR9Dvd6TzHvhgSJRkjfoQJC9o1HqUuKHpYayGs",
  "key12": "DF59wyb5rvdhf2aAGTzGkgfVqwYcQGaN4t9ibiJ5tfGZmFUmFLEnk7pMT3a79QuiFx3mJQ4Nbc252jvMcwbF5Qd",
  "key13": "2Mdg4bwrzv2LtK7WAo2iUKXkBMr6zfLGScvRCfZKWrBfprShEviTqGjW3EyuUgXH1gcjvMxxtAu7ELw19X4ibrmY",
  "key14": "3mhZMiauefWBLtthnwtRNMhphYx1xufvgHUmiUrM6Y6oBGJP3XKHqwLmHVi6m9veuoEHEX2B9CdhqD3f6cyE9iBk",
  "key15": "48f2J9oUFq82u3nj1hSjF75tMhk3qvEWciZdVzALby2NfRZrqKfi725wzc4ftk8zVLxMCGeSCC4D1BmVXkhC5Ncq",
  "key16": "3Lf91mVYG1KFkjmwuuzYY7bnULzTfP8oiTjKqUDyVNK3i65XVyzeebapSABPNYRPX7xMYR5YmyMQkLaAywhxCfR9",
  "key17": "EiLKiVRYtkgoTwm3pkZDj9oWVD4jmbywqDUPvJVhtt8pjkbVJy9hEZqyMKa99paUZywG2WztJGo5DRKpZPzCExc",
  "key18": "46SHmczEQqUWDyy3ss3xnHrP95W7shRpg3eb1R5CMRA63ZS9yPFajXGdp1x3Lu7ZtGGvEKAAbrTw29QbFCT5WXvP",
  "key19": "3gwE2hpA7ptWTP8PzmrjvdpVr28M6wDDxTSgazm3Zze5LujwuZi9afDpA17ASqCz3iMKTqbLiSq5UfsgarqCotcJ",
  "key20": "2R6FUfUy9LF2jbdjLvEQ6ttof35Hmhn7nH26BX11yHNpd7hqko3WTaFBzB5bZhoVsFh7eeeEFuvCVu8FRQJJT4CU",
  "key21": "5gMJMLm75oHDQ4wRxraJQKDsaFMkLCKQAHEQTb9sPgiUhexuNjUwjMuRytNwt8ispfXEDWYzL8WbFZhgCG4XsUu5",
  "key22": "4cg4ugaE3R7aLCRcg6PM3o7Jbc8symZd1qMzdWBLeNdvZ13rso97bxuz7L2TPxSiDddEK9HYKEG7ENDqT5bpv8k1",
  "key23": "UXLNKbtEzCuH9oNAKkFt2G8yNJwhqV93J9Y9Q1UzeMgcUMrk2H6Rqy5dzirRDTjEvibtq6cTtFN7NB97vQDPd9m",
  "key24": "NEAwoAGm1rHGa8aga1kVfoRV99brQEMzR2HWEatzH3kD2FRHaFEZWZDjKtjzdu2RzBkkXM6bZoAikc9ZAjxAXQm",
  "key25": "3VLnvpJkTqpi6WaqsWwqQirJ3zc2c2ib1wqj61EckXv3oANCyxGoChLQDd3HhXwiYrYE7xF3gnW9QEiy5UvzN8Tq",
  "key26": "2YvdkduLmkRZi7jDXYs2niWViqyrYHTmXY8r4fEMYFRVEuVuhGTHXiUSLoWDQxHMqoSnUwYCWRzW6SiJ8HSV1H7L",
  "key27": "3W11d5mfdonpBwMh8ofkjZESVkJKgQkzKGhj8s6WP9PXdNquS53ASvKo7B5p7Ffu1NP9fXxitxX86VGUJf7VsJmk",
  "key28": "WQKAfm9tLPmTGiMcXqWufMbs8M73TTr1qsaJQe39cdm4DvLypNikns4gW5VE8iS4Z2yEFPziHdk3QFi8aG9Q7cV",
  "key29": "5nVmjfiThUit8JxQp4X6vJaWgaXnKGyVHxrMpdkLA4ehKDKuuwomh8ToBxCG8sFJuT21iT4RZi95c59pbiB4t1Yx",
  "key30": "5vd9Vafw457ThoUeytB8e8cCRDoV5E9uhhv9tEdGSrDv64XBtxKhMRFd3NRQ31uDLrtKVQPFe79LeWTLpxvUvtNX",
  "key31": "27kBgCF4GQFYHKxGdnVURCqPJz56JJdW6kJkaoU1XSjNC85ZH8asWBs9pbjjf2gVRA5fN8uEwZHUZFJMYUayS4vF",
  "key32": "4vmgvpQxoa6sYxxtxJDcXjmsTpfkHKuWHYrDC2WfhwrSCQh9W1h4175A4QsceFgW2PLGAGSxrmGidvnVrKNZVGsV",
  "key33": "R7Hw3dun6VeF2qMatG2frtMynKY3u9qE1iJhMZzVuP82a7dexFbjUnQLrxaVdS2eZdrLsEzK88hAG9MeSsTLLrf"
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
