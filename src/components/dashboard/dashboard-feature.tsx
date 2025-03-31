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
    "3TnqpPsgVw5Rv5mydQ5Wfepi1jKzjcbrm9oWBnuBPAD3jouEHPGWPBrneU7htPECDxuVR9Fbar1jYbCKTtzVTXsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NjM25VsDDYkAHdt5MSoUNzWE7crrzmHScSkbLbjmTdfBS5S5QZAcDHGgxKBVRwLVkWCxERPCoW3LCLeZLNCiq3w",
  "key1": "2S7kL8XHF4YgPMWh8DeXPrQb1ibGbXL68oBJFgrGF1VzFdLgc1rT7JdLDYcrG16siKPvpU4Bir3Yecm5FM1HgRHU",
  "key2": "2oTD43ATAZNA1h35cWpoBFAmvDnCAcrbyC3ao5DFPRyN9cstxgGgvrzqcUZ24upnpkkfuFdgGB1MMjzTBkibv3eG",
  "key3": "2kvnRC5So6RZKedyyiWGzGA5f197JmrTB1NdLoEhuLr9qPCYaChoH1zs5TDcZpgezxDbTuef8dHUrSohPMgmLosH",
  "key4": "yDPF36ZjjeVuBbpZtfbXxeh3ob2cjhAJc8LYjx8PCczCjsbd2shqG5NEv675Gigw5VaeRAkEMmXviSaJn9qSrBw",
  "key5": "5aDuhwa2jSfqBhCFQYVmXiLMmLSAYoXhmXEJ3G6uDkoGaCDCu4JJ8RBHKqn2eGVjgi4wfESPSfL9dp1xmmWgSpEM",
  "key6": "v2qNz7fYjAaFgMfejRL6RTeHAKjaoFHxKdL6YKyz9pWwkmC2n8dfG4JH4ArUCEvAsKCQHmn2j2JKbHdqhcPLRTj",
  "key7": "2cFFgNkqCueyCiLYxDDpU4Bfkj8bosMNdhpc63AxkWLUjq8kXbrY4Q8aSwho7eMQdrbR7RR6zumnbDoB29K2FSj3",
  "key8": "5H95hpBY8ZYkz4hTeQZUGqEaZ4zXwetjqi1FXDjgE7TASrEEeWsaX1HUyaETMSytqAA9iuKLc2xGNQSwLtkj4Ye9",
  "key9": "2dVjKD7fAznbQ9j2nRbcwcWSYtH4HJ6m9MxwPwKaYH6BhiCgKcPa9Y51Y6byBh9bzVQsBT3etWnGy1bo1SJKimHf",
  "key10": "4m5cRLS2zz4tchoovFcBzMHYF9sWQwT42kJPy1Wbfac1u8QkvLcX5h9goTgeo1z9sTp3CxBMzdQGsad3J78ioz43",
  "key11": "3Ee3Yf7pEJ1mybTgnEXJLme7N35wtJgRcLZFwRw5qqJaBYGmJZWyrKQrwjx3PKfmdukP1LWiHAFQKi9NCFhHU46",
  "key12": "4q5VnENAhc8UoegX8Fxjar75AifaMteEL2WQSBrbAMSnk8C7SSPBxL6nUGbLKYkrXJheQSV3y5bDhCtm2uRJDPvQ",
  "key13": "3baghz35BytEz9zKWc7ypXsWH3LWrUyZkEK527pzydBcTkFDLSpfBtM5H3LNdaLatuWCJduVk5bvTEpH9oBBvo8j",
  "key14": "3jwhV4shvAUV8rDVbUP8b84932VHBas2fNTwqSaQNjuWKLEur8CxtBNKH8heCMcSgYJfw3bYx7pYEAXNmtPAfekL",
  "key15": "4FeXtGkNEfKwuse9qCFCxK6JSBz9qAv5R9vnVDnn6ssXDJ1zNrN3QC1yuUL24K5RABUBnQHCCjHCE2yZYg5tQc65",
  "key16": "63ALYSYpXicC21jgD9CQoEg5Z88TaZzDs7JgDFeVrGFaKpgzqMDVSosk8m22CUKyEuEinNMrDDZMDL9HBY63b1KQ",
  "key17": "3Rk1Bq98RXCk3BLZz23a4xsmXMFSwS6tHLbvF1aBN9LFoaSeCtdDs9zPPXuFv18uKuy8jTMQwfQxrHQ92xbW91A3",
  "key18": "2HWMhjjhSE1xsuRYCNXBQXLgAUyC4eeuA8BcZCQ9Dj9ikP5hux7mUgYBQ1qvV7cqkP61Gpp1Wp2hXbpN6vTiMcY1",
  "key19": "5oakmGTTTDvYoWFDcvebexczV6Qwb7vQfjgKvVhrJwBF4BQp73XUha8C7hRCcw6ccavWXVEeGCdY9YLkYMosmJZx",
  "key20": "5BYwUdm4LXxfZWnAsBVsk7p17y9ysDk2nVWFRb46y9gH9fkDnH5Y9Vx61ZgMVDZg6FDwY6S3Hrh3AP5yFRE1u8AW",
  "key21": "2KNTZ8EKkpVsDD5nKmXDenUs7VqmEi2v9AVWsRUrA7ErinzwS5U8RxyzSuiuvrUuQXr6MT1k8JAHCK77z5CJUYKp",
  "key22": "5GFucUgiYekGZpwqyCmCQXzZ9JtGHtF5JaFjWHoojksVhPySCqHbAaeh51hFPVFZFexRcUC2iVcBbY4vi1sAdWho",
  "key23": "3rJPAnKmCbKcHFZXPWWXCDCtcrfhA8qMQYkQoz4QKm2smn2dPKJmYFMHfKNTiZd1kvw83wqrzVrFAubxwfL5DBzt",
  "key24": "g7ETtrs9p9CQSUmjgZZBPTyS2miCEjNzDhW2j7V4AxJAuTEmHdwXEUTEDzxPERRLKUAxNaAnwfbBvjaYbEj5DYf",
  "key25": "5exC8yMp9VZN2aBssssLgU7LZp9Dt9JwjmwqST7gPQ9hRbZiyTmvBCushJM435ajY6qDMGfdt3CLMTu7mwD9BAnM",
  "key26": "2giruTuqUzCwf62vMHn61sSmpiQjvxVFgGwzZPatz4BdY8UCGPePC3wgB4b6yoYvUSzFn4crWS24eGywvtPbZJqs",
  "key27": "2woURpoHsAFbjTqAXDEqFZHvxnYvy7v3giFPGMeSESk58DgcbDkikLap8rWVs7csK1cXFPqGxwcDoPcBdexD8MTR",
  "key28": "48M9Bwzg3KroacrguPMjXcV3BS77aWLEhVabft2L7UxN7NsPNprwVXor6pkMq7TLLo7JqztrroPV8JugwJ7YGdiZ",
  "key29": "Vi627PyGwy58UHhYT6yKtVUeK1XAALBSYPETonQZoo91QRGwyZfZpfwnmTB1iqq1nYmoNevHqksbVHWMZhqwiBa"
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
