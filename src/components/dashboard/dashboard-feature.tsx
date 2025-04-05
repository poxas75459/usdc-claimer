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
    "mZhe75gDPAFvMzW4EobXZCiLK5MEBEqUHEaa2enCwSoFd1pafgs898pM1vhSnsT4vGh7PzrBRE8uJ6HZ4Qw1nwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "voHXZCiKncjZu8brYG3pcWdK5eQVnrMb8WDsVwG6MYNx7N7kKmAYXYPy4rqE3cTn22b5N9sSUYnUNuWDRWXvWmi",
  "key1": "3RLZmNYD4UjCWFJHKEfohgW5x31H2s93JYHQ2GndGaECGpfqBRvLqVmfcct2SjYtdwkq3MbC2oXmPS8Q4Nde7GUY",
  "key2": "3RsodG6sYYDRfXykquYHWo6y97hFcQtz6aRJ5Np4hFCy5SZe994gefPNyMfikarkroqNbrWamSVZZ89qNbQJ3de6",
  "key3": "4Mg4CDF6cniZbEcE5EEM8rxhW1Ji1w2tepTCF4hgjLDbtRh7LUZ7ZmPKRV4hUFNy2L653jaG351qjNU2cbSTz95y",
  "key4": "59sJPvXwjupLA2kfsDYXjoJZj99tguMur95M5Nv7iExZ9WnPfJxCgRk9vtFpyTdEZwFqm5m83urDFBuDpZKd7Z5P",
  "key5": "5RaLVmYgDdSZCtZA4npbs5EQRHDN6d3en78VWcxq4VTEy6NjUAbvZN2itXmm49B3Wn8p9ogt862Gk7YzPSjhavb4",
  "key6": "3gxMrGsKtSyAiwsH7k3WteDrbcTSCBYv7KdQsoLoMKsP3kTU8EBVBMB8kDHmLHdiyfeXDCsPWxq62cMcC2ydcUZd",
  "key7": "3gRRqvd91oXuqBMWUnMwkyWBp8XWYnToofxtaLETM8wLLXsLHdTJHe1ywT1cLu2KcQQW1zb5VWENySkE3uyiL7wq",
  "key8": "BX7cpxxo7BCuer6YrucDCgmazXWyKRbHjP7BvRK2NPcqeqvzc8uS7TnJsJVfhwcxufvHh3Fpy4ByTa1SeUdRdbY",
  "key9": "5jW4bHDPjBi3w8SHJsVq3GwZN6c4zCc9ZBYTFvQwK694J8815AfVX8gZwVXFBuDDjhrPXb2exMTotQWyzieiU15R",
  "key10": "wN3aPwbaE8Z5r2Wy1s52K9o5HsRo3vWCXLgUCQcTeqQtS5CpfzNjVDY5xsihPWSSpgsh2AezpLBX3Fs8CRHuxDd",
  "key11": "3fohpu25bzp1LKGtyoHp9xE1sXAuewXu7uo41zCRkbubfQmh4T9EhHbvdpZSVtDSLJiijPBxYVLtzCcUUbaMeDY9",
  "key12": "z9BMq22nvXMPBJn2har1wPYLtADj7x4QuzvHfsKFRSMyH38fwzmJboDwYPgJbWo6CBTV5SjttTDyL3pC8SsXscE",
  "key13": "2CVm4HUDY5Sq57yHBaDkKCLNNaotU4sDbydCBWLdSMAgwV3KaWPmq5bBpPrSrXFFY7Qbf834gr6D3zuLN1uTWKQ9",
  "key14": "2XbqxACXzy4CHDbCZ6Bk7RMeKJFwoEWVEP97pkXT9d8YfVWvcSpDKMTmKkA3xShpgEGtrNFC3RGY1YjA2YaT2uYe",
  "key15": "5vVEhMxWNrjogkuPd1MdxmayauU6N8BEoEvf68UZoAatat9ynyvfGgpFkb5ruXyRsf3be3Hzgi8AX8e5cbSinLJs",
  "key16": "5XLnhhzSVWJpvgKjhvMqrGu55wdKnS6XwRtYECMgVFR9QZNuefRSmApQTRhzGZFqMSMbPUcBFugHesEU4micVtZ3",
  "key17": "3qYVLSoWqm9Ro4cFnE81f73kAW2BMbFxqboge5CzCTMwUb5siodZSkZMVTGpfYXMTgerTrdhKCQReY5VtHSKTFeW",
  "key18": "5TNEhd1wXNXFFBiJLLRXMS51rDf4x1aeFoQvUyB7ySw6op9VHC5B3XJ7y55afJqheFDCLV2xyY2BqUJz6Xgk1Pmh",
  "key19": "5t1QwxnoZ8GQVYDJCtwi3VWrqpydjqyPp3UWrc91sDFsJbJg2scSkSjEgStTMr23c7EMH7VtQNXs1nyfL66XZSUY",
  "key20": "em9u7UzJCF8XBPSZnB5Ps2aEdfPEcKESH1Q2UpCmauBxZkNZLXEqUS8Pis9589uEZuBd5LoG4uChxXTWVUiMGJq",
  "key21": "2bvPT3v2kHhac3CtWUD6MAXz9Akd38gwoGTHG23kdRTf9Cj4H7nQVXeUmwqiMpXjm3ZuFYn1pYkfE1coyXitjme2",
  "key22": "3FScUS9NG4XUqFs2Ebzydai8bPUuTYFVXNDkWZLkx61fP695iiYTobcBjw1auNwEGiFh2stkThvk4Zm5diAkzKnY",
  "key23": "2RLY48q488kmm52ydAH86z9YChBa1ut4W7Sw3BSxBcaVeaDwoYXxCe4fDH4DfFQWzuUqnS1L9PfJcihprdiNcvMz",
  "key24": "4zCnCHzCjuSvMFPnzPL7xKTBuKCGxuPMYW1czSfmhDtmWMoAfNt6xo5aJe2wNrPA7mydUfXG3gkDTTe2MacGrypH",
  "key25": "2yj4rGhMHe1Xb4HtftrwETZYu88KQVHDLHBJKGW9asF21xS6kEoawSuUBVXMggkBc5nDFXnKdUsDe5XRuc3EgSb6"
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
