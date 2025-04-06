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
    "3BNvDJxbXw2udgTH4uSLXHGPYSgUdan8o5wefj75RR5QxjNEVt9abodZWRn3Ci3srci1suGYpeeLyrQNRhKofv2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tvyfWwvdLxAqJJqPYh2zPR9MMDEwkZZM36aiF1duFVwXkBWQC6aHywAoku6BLLKMJAbBPsj3KFCAmaA4wj8E4gD",
  "key1": "2456KtXYnEpBmX12VgJsWTu2iMGdhmWJzZG69fJ3HJsQxEtbvGwwftJLyggAN7jgANB2NG2VewXxXt3PzXBW6BK1",
  "key2": "4VoAwBhr9PtzyEJN2kpUPnx4MCM3eoUrTegtw9qHCpDHp5zusaGfvPLWg6gtyhTPwYb1wWGXWdSSH9x81n849znm",
  "key3": "21FQgkrdGNYfMMBuM9GyEzs4FGQkuK5Bpq8fQgFgcBJhagtxFiCdWBH1RTWTha15dmSZGixuLgR81nbNRJjXJZzA",
  "key4": "5nU6dUQjdEw4H1VK4p81gKcbj4UjyrDtLrtteQD9FBses35ouinEMkGKrPhycrcedRANTKEFyszYQaE4v24Pen1W",
  "key5": "KNdcAoF5oRd2dMkF6FAVsApeifzRr54BLPFdWYTtH5qxcW2ME2nCRtc3E6tfCzmmVqvAmH533tfzurwZSUaMyhy",
  "key6": "4cLzdj9Fw8YNLbsppcqXPwMnt18PP7DaqqSao1rHCnBYZJJcM9JPu6GoCsUufHNAYeM6y8B8YmkgdCHkf4qYbwZR",
  "key7": "65LNLc8EmPyQueBX7pxkJVqBbodUQFRink9hfEfk1Gobp4AXJdR5BD1tcsEuL2Sb91bcywyw3i9twLK8hDtt9k2h",
  "key8": "3vqvqNhA8MAkBzVTCRGxdCJ3B1ZA9Hes5exQNeJsShPp4vdtKJWoGuC5sxMLmmfSPN5uxfepWCwugUM5hgdJiZRD",
  "key9": "eeK3hHeeRkBM8zdAECbeExigPVH2FUe8WH8ue8HKACxCz2MBoAzvGyssBZLFG72YMCSfFsgtbN38v1Qv2V9qZ4z",
  "key10": "5XA6u7KHososjF4vEMccBevDsTf3hbN4qK7N41h1vxdB4HGu5p9HPrAWex8nLSqrUydbnWffCuy2d1Jb4eCzUZSJ",
  "key11": "4Cch4DMkoN7DVn8eVLXpv7qYRN8o49A556AR5fqCyZ4PGdfXSEnHHC6ouQ7UbKWjjz7QknjEMp2nDcD5LBtPJdm7",
  "key12": "2t86Ue3nzgsvYKCzUWQfQCL8WbZoPsace8RCPU2iZgcHUkUPd9Kt5Xj5Guvgx74X5nnBjAvd22CAsQNv5QjBMsWj",
  "key13": "54cdrCAy7xx5wvG7nEyxs65iiPryot42vph4okwfarSXdys5Xa7kRVWXJSc9TYeDMdvHfdG2Y4dzNMkBrdwFZX8D",
  "key14": "3zatJ2mj1JmwWL6Uu5GSqfsZUPnGajs8je4G9aCtzRF4cK4AaSGf5MnoF7vHLd9gWNg3Roy9oE3gKDqsgp3pmiNf",
  "key15": "2L41KMwpXNZDhhVxu1VmWCfshx9fLHQeAm4wpFtcQjzrp9NCAmp1HHqGqEke7xAbnjHVbhJtFSvAuWwced9cu6K1",
  "key16": "3Mb9RmoD4rdr4QMdA4wAn8MDoVRMqZTGxjNQUpj8Wg91CREr8dayDahhcjUND9gKHKzdwUJxPjJSE8nBprM7pPwQ",
  "key17": "2mWyL4PQnyRjsCw5VSVW8fZJGkfaaHX4e8L6oGtzn1XWeTYGTvnUZfKVd7qJz9PMry7TrXoTSYcuYo6pCeJtiGK4",
  "key18": "4VqaA9pGbo1PDgsDRNRKx9skGzrbuZEA8RXk1H8B8qgVqHqKDQq8ACgNQ4Nj1KnTQpLK1hfECzHsRWz6sCnC8Caz",
  "key19": "3kkws4f3PjzPENVoNiTsqBcrAJnUAUGesS4B5hVSBUvhsLCTDWapstWp8VrWGd1UTEeRrsu35cxkG73SyGrQy7jK",
  "key20": "4S9poiDtBx7ifttRMRhNxyg5Ue2U7jCkXU5TSrK12yQQ6YpJWX37bZQL65ebDB4iCKUqbw2eCWD3ZXftbu2M3QV2",
  "key21": "3AyaydhpxaEYgdKQ5UaiUnN6rZE9hAhD6FycfisjDpD4ot1728SPJWfdqWiXccePNNKbURTPpyWpqy3RpD9qdX9C",
  "key22": "2zbigyQHj4z1kQ3wxAg3gFjSkB7b4bo9dJKWNeAa2Aaz3cEkaXSQ5KVhAnsyyvhzqGS7FTttaS63wHYzq8jL3kZi",
  "key23": "53Dad2qekABmvNonLdoZ6bArYZKqWUkhHGMHeWoWyKbUGMh28CnM9dPaVfJ78eq5z9qVEURXDYJpSZrJG2mcU5UE",
  "key24": "2hxXNbWgqJ1hHyba47uAGxJ191V9X2oEubEmMdpkgph3gK2ksThJLMfZ45VYr1uB17ft39S8FdpUyfh6GTiJm7S1",
  "key25": "3S7Zk6Y61pHemTBh5d7J3g1iSE4ErkwrMaJYdVsS8dwYZ8S4mWgmaoj53AnosVB19rL2w4Vsou8k7yqqziqpWvyy",
  "key26": "5v5TawnDh7UfEYs7xrSXjWtax1fPPFdmdxuA5y22K9sxrUqQBRc22MFzMXAQufPL6VxUtYH9SVcMHAJiQENyMVee",
  "key27": "5vVi7EUbtqMuymaTVCfGdGTzp3FA8dUv41AxXTZxLoysLnrRpxMFydPtKXs9uSm8EyQ3beAmrekWAWRyb1pMVXC1",
  "key28": "SuQCnBDAoEBtPGNMnSUpP3oTxdbiz5MKbrxC4XLMFGZwD1D9PtMQZaWZnKTUPt5tWsVqyurGkQVoFQPafRW1fnJ",
  "key29": "3Zi4FaR8L6jX9WpH5CSEDuXw5K5VMemZTN3CiPx5s42JPS3N9gYR32Y5gUWLGU8xTrvmT7g1jg53xPLjUzwfHbzw",
  "key30": "4vwptRv2w8tc9nJaJB4VcEvPJAic4VZvapVeoR4Yordnc8MJVxzciwD2vUjDT2HbwPa64Ay1PVrgPVN6dWybj3gJ"
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
