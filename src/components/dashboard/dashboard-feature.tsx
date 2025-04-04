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
    "3Dxp16bSd28nq4iFaYNAZRaL4kujv4KMrwKTZo5YxEKo9Zy6dgUJrUk1CuYx61Zsf3Hy8uPa7NC6cukKupUpaSGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nfuqxyuEWVJqSpr9tDnXdKats27GJqVwzTNttNvkGT2LDBeRTxLU4wVYCiDrtPbGp8af43jsijL2guwaA2VrGtf",
  "key1": "jxKHMe5ntv5KXjGwagCb3qvYJYBfejaz8rbei6QpivSY9xgRNoLzMnKt8bmgzpK88V4EFrQ8rupcxctPDAK6x7X",
  "key2": "YVjVavDLhxPqdsWpcLUXZ85mMVjkLew6LFjP5BwCkxx8MsD5AfNco6o6uyJ6juSoZCBf2cVx37xxWuvEtUNJQmj",
  "key3": "49Bk7K89Peyhoc82g1T2ykpPeggofMyCa5kgrBHkSe5Lj1DyQQCJZLsWXdgYFWXHwwDSVeMAvpSz16EoKfgPDNwK",
  "key4": "2vzFKxtUgUo1HECZG8XBDhyP7ZPAaoaHNWVGvXK8TnXgxnCNLtQhPe6ZiHRTyDma25HvveTYR1CZSGXZzTCyW1z9",
  "key5": "4PMQGTyBTUgW2A63inyXKxYkzUs7PBX6yUMKn6FFHcGtPtTryxnT93CebCTmB7aNPcHF6B3NiCXzw5shGG1F7mb7",
  "key6": "3XeRoHBveb1kA6G9FkpMGR62ZNLUAUpUxUVJetJ8MpG1FJEtLCg86cAtCARs17YZKBbmH5pnh1pYcVjFgrRkcxkc",
  "key7": "2F8XmM7rjD2HMfsAjqwXa8Z5m3QUjtiPGykZN9DHEeHAtHEiViNMgVpHw7oXv6ci8NpWqGQjoe5m3bbEAFjEz46d",
  "key8": "3vcyXHM9JyTX1ovHBCytaFJ5CKm9wzE11KxASDPybUCBpzTMugWmg9bu6QVpCewwdwBcLJEkv537KR9XvZqyLVso",
  "key9": "2RHBprDPsS7W7GnwSu6ik3rZSqrmPGYiMpyEgV31jRFa5ywexFKdsSw6zGPwzd1Sa2SWWkL8mtETcjHWo8U7Dkjw",
  "key10": "vLKRLEErqYxYLUxtob9bazVzYMcaX82kSnkR6MskNiQhWJR6SLPdGg4WxwErqba1USbyaX6HQr6JP92JKYoGJr2",
  "key11": "EwEpbTmukYbgTVLMHptigewLQoNcnrgtSge5ZiFD9L75WW8G45To2kHGhQLfVbezPxP8QmnTDji5Q2MiiUWE7iD",
  "key12": "2nbjfLbzrnrBaDhpvCTGKSsf9rNyEMUgwuTkdP7xDq2xgpZ1aHVhQKar8aiVXxxk66wrqi4Chn1dbf6h2G64HJz8",
  "key13": "5TBb4hP9bniGhYqSSRtxYbQGbeTskDZt7EAoxKNRpoTZRfX9AucNEECPnj47izsC6dvi8isyJAFgHXYLo3JtrbUu",
  "key14": "2MTbk7otBg4AKTQ9boLnuxGWQfuNAvioCWDmGVNMoL7TGqrEabcsdgeHNC9RzycrehCVJhiJA6t43YfmKj8uQNSY",
  "key15": "2JdXNJmh1C8TRYAuuRAfV2mLyzRPTRzRRYTFV4qsgeusoMMUE1Xsib21XDYBZ2dqfzGPaaAR6XDgqtfZMzbX8rL7",
  "key16": "2pNGv6YtJ2kWa8HJ1UQiEovDc5wMjwvXmzobDk9zzCSTEoqsAc5TsnQ5QWYNXDFdbrNGKTXLmd8gTA3cKZAyH9nT",
  "key17": "25eopZmNn8vP8rqv9LbvUFEiwKr58vYzj1KzGDrZndnsGRSy1MAmpMZNdQ1C8oqfVnH734M49Ha4Sb2VRNwCfexe",
  "key18": "5PDEARLmNmLqJ3ZVZHJxWuatyrDHdsHsQ5nxKDyuQztKWXNaNUap3eRTqBqMPHgDBcF5anXCRAbd96AxgRqpw8PE",
  "key19": "5tzqBaZ9PPtSQeKLvYXQSF5SMDdmrZv4ZzEnWnAvmK23rWQeAJeApGqyUvtF9BpjwLPzRzkHvMk8835AkGquH2X3",
  "key20": "2D24T9j5wbMec8775NjBSjhsTjcxhf6kSHSDBG2FCicB1waYFsiv1bxg2Nm9W4aCSXqsEkJE15LTXZ57JzSdRo1E",
  "key21": "3ysJg4yHo6ZZx2x6EaYmvpV5X3vZeiQYsir1ypU1tFR2R5VHbx4Ex7XAD4Px65tyzd5Rs9YuKEANtXXJkFHM5w5q",
  "key22": "3Qgv21XPEaVRdZjhSjGRqzdCN19DQSQJQaFG1NS7cwcGS2wsDtGmkrsCFRVidLTN739HhX5wVRV6dY9N6Z8UHbVM",
  "key23": "2eBsRqYkHsUrgCjD98P3Wyyo5u7hwY3XC2f6cNLgvk3nD83tNPWCxGsSQ1kXDPCDACobUWYVy3twJiUminNyYvHC",
  "key24": "59qb615M1cqMuSaKjpx2jkb7LqXVJWaNgzeRxnLzPrzzWuG56AZ71EHX3jSo3XxKaGW2vkTmGsnLyMTkSBqCktL4",
  "key25": "xbjkF3EELnnmEPcDJT4S9bpKyR5grhExqTPVx11DKvj6FfmhEZFkGxcGEQT7vDJcgabYWUqMfdGVJCTaM1KJ5NB",
  "key26": "5pPSNf4wqLHrnUqjb2p9jbcQ36KunD3qPe5QQ1HjrsZpbbJhJXC6qZ24pTxqJ9PpJ1HurLN6aEjDrvkfJjB2a8XM",
  "key27": "56p7DEv6kXffR7w8QtWq9U1Ne3TkwP8KD1NaLGMGJT4iLFsLvu54UwgS7Giii4x9ScY4HHu53wPhvfj9DsmZzvrj",
  "key28": "3sY9GFUTyuBLKf3aBum4VmZWD76pGZmR9WkeTCU4mXnPbuAsWhomWxbetzTT3gSxMrV5MHjc5AXiREiCDTfsop9u"
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
