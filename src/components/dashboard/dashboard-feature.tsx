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
    "3Ni6aPb7Tm4rvUaQbyixQ7jaCWHJaUR3jhTUiCLcN31xBCAHcAwwF5CSZnqrc5cYMRsXbzL5KTf1E1nA7nsf37Th"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mXFS28B3LUT2ocx9nbpnEdpjQnNWBCZJPyQ8TpaXaZ38N8BLNtV5yFXaiTHLdrfeG7SvRyWRxqXzXkh9z6NEunR",
  "key1": "3knrvbU3XoyyNyQS4DYXgMAkLsfzxoqzH9sbMRbeShPp27PnWP687beXeqmQSgJHpxXSPesHE6dxv5BgcLVq4wi5",
  "key2": "4xQizpckjmabWiuTVKxzqaCqrRNn2pj5KgvbEEj5YF5LMioGBo881QNrVgXNHUrCg9V7REAcJDhFPes1iRuLu5MF",
  "key3": "2Na5sa2uPK7drGJYVA2t46AzUqpyWymuPHNfz3BLeQSbXHSxNUuqPASuhqQa2hA2JLJ8bkoX6cxzNj4bq7tFMzhs",
  "key4": "5fSaYgYtuuqmhUkHZfrkVxMmsXUQrUCD5mCkxxKBe8Ssjwqr8PH4CCrazikm5KRDeFA5iLxVoCSGT5affx1yKTb6",
  "key5": "eAajFwqqFNAmPnqVJKBGUWcGDWg6yQZ8ijvno13wdrrZhrb9tbWnAZJZLTbdNpWeH6PC1i1o3GjRfHSJmKvow6k",
  "key6": "3EhG3Se2wLwnsxvQ1izQz79RgRepQ7PFuQ8nDii6K9buXhrndEf6uHWXYqaD5JzGUYkPgMkx3vEiFw2mCjfauUDZ",
  "key7": "2oLFHBzitNV6V92ubfCwQcPLM5QxA9af9WmD89Nr5rADg8qPm4igsVb7FiTXNdNawxZpfJFHojnhkxJAfQQfC9Gg",
  "key8": "2PQ6JjCj6Y5gpW4WCFs1bEoUjhN573S73Y6MnTGgjmLSqGjhDxLVF11hLsvFBe7tkt6EteMXuVLfWKURVy9sh5p",
  "key9": "4kv2Wy6fZQUbWv9MxMPNpqDQh4PqHugeytkw2NwihFFtEsvhAteAJmKUXRnF7LMXdJpgXWXka4ZihtVHCbAtKrPv",
  "key10": "19mxfZhnTHErc482sMpi3m4eop2B8wi9U7rjCSP3WqXBYb9RQMQuTcMgYtCwu57wWza4gojC6JrMLFjCHXNWXsz",
  "key11": "57dkwAhhEU28vrFLrALhDPkUbjbE4TyWhZoctNev7wTsUsw6zQy9G1sVvRuFPAvrVjN4AkAi8pQc7VGzivGzXoEr",
  "key12": "mjXHdH9YhTrwsXn4fapFX2xbAbcG5Ujnk8Jgczygpw9EMy8P9z86cyKDzkzzXPXrLg1YYA8yHgieH2tt6uHoXcr",
  "key13": "2jS7hNNLMQBiXcMgwS3WxLFpFVZF2bgT3XNTnbJAkYEfBcXsJaadHvsjXgNiutAcGwRGVT3F9QGZFMAqPPLPp9T1",
  "key14": "3LR15oM5FxCvB14vp5oV8dFm7fiDHMcksWSCudLKg2woa9KbUBdLzQ4Y9VJffEr31YYWDYJomhztLYKtSmntbCW5",
  "key15": "P1Ch6pZ2dEJgSYssp7P9Rdq2vt1pryEtjw93kVyPJTMAcnJSFHtWyg66j4kJK5RoWmaHCss2uMc8c7jRg9CJBEV",
  "key16": "4p9rBchRKhGBE2NcY2hTi5LJH5LSVpER8NV2fP376q3p13GmQa9pafkQb9XyWYGWCkSn2bj1whkexDx3Ttfa7rnN",
  "key17": "49YnTb8CxFZaDfK35h6KujhLnwAhc7icJaZFCnSvgQGCczm9EEoAsE7RrmBuRPYWu942UJj8JrCRFsshV7fN3F7i",
  "key18": "45dvYPbmqNYnbWrBix5EbfgdMF9nR45u8unLp8opd6WRmdSgcFNRuzxnCMvNwGTWL5kUJm1Z61wATwrXw1jqyVZ7",
  "key19": "3wZjuNLwYnRMPkEjKMuzkUkR3x8qpAgUpDVtK4ZFRUYtFxiECBcxfQcuEwSCYJ8Q1KPQY8RuCughGqmAfzAjT3Bj",
  "key20": "3kDiwQecDEJbCHx7cV6REz9tqjrJNQZgTk3T4TDvBB8tuFjyi3kpZJVv9KS1NfFdrdtCMV2za3iFbgGnuKxWhdUy",
  "key21": "5f7gbjhDeTiTMXsgGR4fpNNZad2LkpjocKQn2g3wEyzXbtTUbKgWuGsFBUDCnJ9tMhzc1DJ4cW6rcfX3zbCkUUnX",
  "key22": "2MD5vYb5CRJ7SMEmBHP8WWeUbSqdrUrVa6C94Ca9Wymo7a1CX3wMu8oHuCp2hi6aSBfu6QsqwuDd7tdSWEc1onkH",
  "key23": "1L71KqqYGHq4kGFUkimVQjJuH7Kd5WGsV6hAurPoW9r3icg77BwuU3Kvp8KVucm9oRWvywMCFhNqVsofRRNKZXM",
  "key24": "543Ys9Ft1w1crPcbbTr7oMjjwYbFLwLQGc6BKfDTu4nq5HjzHtPPVhimg9nQVo3ELV9wS1ufm1jVdNomLexxSWTo",
  "key25": "5QUkSKq4M6o4DtvqbC3PKpLRGnPVVLJ9C8xWsL2ksLsVnDKY1BFDRuZYV2byaWbggHckhP5oQD5A8Kqas8nxgUYp",
  "key26": "32R1y1K6fFzjp6vpynL6BQ9Rc66zFSXce1ZBvqQHoCaPYrsScmvJy5vGjUgG2YciHgHSLaUS2BaNLkbe3379sWT6",
  "key27": "5hhgoVD6ssHiAZ1rZrCh47WNhMjrd1axyPwT1AQGDYw2qgUWh7GJQeQeos5MNcRXyLUuEia196Ggc72ThYA5zfx7",
  "key28": "5AxFmVhSpNvFbanfPqPgE5LLDt1eB787WuF9qE1M7pYvrsX3M2UDMwzFq8cyn2j514hDFSiKxPQPzLXyC7WXgdwj",
  "key29": "4ttsAx4t189XQttWDg5bL55r6VwcajLwJxYKZQizQTiqH9dF5YXEeagARQpmwooe78HcE4i97cguUmGGGd6afcvK",
  "key30": "1vpJie52Lph1cCx4Xn2ishShyse7hW4qEbm288wLxUWXuJm2wrsrJ2uXsVTqQBMuzcT2sTQapLLzUA3pr1qrSpc",
  "key31": "5f8hZE6PFzMFRT2ruwL9atQDoLqkZQWMjPEDACC2keAie6VcA9LmJuFN22AmVKmnXuFQjje81YbfPs7n2iKjABrn",
  "key32": "b9WSfUS7cZMVecGaGCFcFR5RpitfqtPqpHob2CDBVV97g5vCKtwMqaHXuQ2C2XQstUTuWMYg3Ram5C7opomatSo",
  "key33": "4CEf1M9ASBptp5tpDhX6f94bu6xioFPRDDtyvw8MYTkukUrpnmDNDgDcxn8xucT9n5htpmLwCDD1CNdWsi8u7o7c",
  "key34": "5B7BmtMf3hrxuNoY4uHJqGAJTwn1Qw4aQRfJpkBeMECvry57haJwqkT7sxGx458z89kAUjntup8ju2W9pBH7viKA"
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
