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
    "4pCNmGYf7ct7si9YGTEYzZv6PkgqaSAfj7Wgb7izx6DNphQY6pF97aFtvHJKwrfAK1zJeYp4Bt3KetCz18HRJHRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UBoFxiCT6vPAmU9f3b9uRnzGvVdkLjnyabAubtjJjK5GrruoL7pTpvhktrRYXknWp9Ubafv9bcBQScRDdbZHinL",
  "key1": "48W9VbyZarsrmznZFxmThhK4mBgZMSPq2crZ3V3ucRqmYQEgggmM6mNQLYJvr8W3E6gxTuoem6HpQw8Ujp82vp6E",
  "key2": "4Xa5dTvEoXKj7w4TXwm9FS9Rjc1fxBPCQkxV6m68ua8ckvXGrqVAFiQob84FKodKXesnUzNQCJicKq7Xwh4rEuJ1",
  "key3": "63NgGsHx61XgriYLTYvJiEWpKXTphXpLVtG8gyQLZ7REzrsP3PQiPypSPRhFRB1Fgr4KF5JHWtixwWYxfzpkat6g",
  "key4": "5Tsv5j5R66xdFeBBWhm8psJsSuBf7queAKebrJU1f82ec62UNSdvheAszAJgPZpfaT8Uk1g7gKgqEBkwLCh1MvSx",
  "key5": "2o13WuXQdk6fkgy8AYqp3kfcqkfNZbNpK14E7PQ641eLUkirAautXWm4gsqE6GBBzU5htHAgRdfpsYG9gBwrQU4t",
  "key6": "3dHwPjS3AhB3aHNZNYBvXZRY4k2sRwJoqyakpmSex7PxwjRdFTAajvKhYANmgzcMb92Q4tYYEbsiUbn2DaM9spnw",
  "key7": "NDVpRRNJYEVKUAH7FEapYbeDxNVVAbYv6hZBjB5uGjPaok3tV3K3UpLLJ4jL9XymhUXmQXZpzFWumRQy6nJmLAV",
  "key8": "4W3fRdqRxG95hSJgk2ZF8dPjQwQ8b5ScjUrpm7mRPyh7WsPEZczL42mR9wN97XEETMnmVweZKmBnDVBk77u4Hspm",
  "key9": "2nVfu8y9QjFLB7RbUkuiahYsfHKs3dxoH5SsZoqFmrSeboddno2khP6qv4tKfzoSF1LxWbvZC7vhXxXZ1xaqfLfU",
  "key10": "2hx4Mc4oWVFgu7QUwNjCrgiUJp33TgPqaKJYz8vKZzTgtjwe8EA5YSZfK1EjLQ8V3TtF6R4A3b1nMBtsDTKcnQKV",
  "key11": "tvhw8sKQ7r5utacdFzq3887ddzk93Y44MuEQfy3D4CKMPLv4tqMzk4Mkq1WSUqEasmVZmEJzAFRzmsHwdYufxDz",
  "key12": "61FGZy1z85Wp8RPDcbHeJapoHyMsgRGYUGgQnzueNsxER9GVjQsZiivSx6n7Hxvdw3VDqrAdLfiV7jTTgQ47XhXn",
  "key13": "31g8A3tuKe3acSAk59gkZvDmaGjwkXmt4NTu1ae73NyMFzmzSgpwV3oRFfswDMnKmMzj1bsovUkm1PfZN2tnj7ga",
  "key14": "2HJJePYTqAWa85vo63CAJy1fSZwCAZkjY4L26Tt7KAc54YHqLG994pi5epaZabiRPDdiXPCsKmR8vdpwcmNM4Xqz",
  "key15": "YhXx83YuqEbstcJr2yzgjCSyY4ADGbm2J3kqScRQPMzbChexNUKPhZJPZQKyauMqrhAQRSeFbKN3mgGo3GbEy3G",
  "key16": "5aQWe2WHZ39CckXs2RcUCGB6vwpXaNQyhc87KH94Ha6tk4ZRApx692js86CtZn6escWJkGGPhAZ11coRkGShyqFP",
  "key17": "f1jH72PkEwWGS5QQpYbtG4ULRGq7j7CE4BoKfYAPTNrvA5Z7QYUPXjf35DKDTCyr91S8haWV4UHMik4dScYqxN1",
  "key18": "4d8JXBUdKsTeyNhDkzFXeMo9ehMjmZkvdhD4TS2jgbCBLKuapVFgCt3raNfz7Qb8qoib5YAJSFGFvn4mSnBLk8eY",
  "key19": "2zk5HArPjBYWw2m8MwwQK3ZP9DWMXCxxUaai23PgwBF5iXe7b942pBTLusK4Rm8omyqz8NNqjHoBqy4nqzU84d3L",
  "key20": "3pztfgNPbEHaJ91opwDVKrQFDtH3GK28Uq2NDwum9R3VAtrXwW38adQtEhVHBehPx1UfuSUWgZJmBwJ4N9448bqY",
  "key21": "66rse8uPtn3jJNVFKqYj9CWMkDeu6qwGDBYNjD6LhFvxHcqb7wgHck4A4NLxThtJoVdsj5DBYGBGDss3g8gfxL6z",
  "key22": "2JgBnJ9zo9FYnUuhH9DA8pMvf8mtN1iZrhM4vduYvQWu5u66P8hnkVUDYoV2r7xqqkXFJHLfAUBuGU3CC5UT2cCz",
  "key23": "3AKoWeTXV1sAprVSLqmDVyBjcsLkkup4DoEJEvESYsqZzAEaXQPPeJRSiG1ACHqkPefsRyUB3z1rjykn25adgi27",
  "key24": "51PKm7HXv7qPgy3iNAdi69MN2GD1pNwBFPi9edjSGWhZpghQQQ3YFATXdv6aHsTgZWgLi27RmpcZn2bVeapJqqfW",
  "key25": "XQoECAWUk4HQ14WEuqoW4Tv4Tw26648QGvSYyHr5xtcW1NNH8Xm3bLTq4FbEtbek71xUzA2hx21XrAgSvqVTiuD",
  "key26": "4PDYJRhQqjCtrJ9PUxeSFWoGULyoJfCtJbU4FU4GxZAmnMjQfF44PrPcaZK7ZmtDsVqnerV1u6FE82sFWWEgtLGZ",
  "key27": "5v6k6gvzxPk6d4RRHjK5KVT8tKtydTm1rrQcweS7cFrXakePsfrGYNzEeukYbZ1f5JiABhskirvMD9pgckSB7ddh",
  "key28": "5BqC7sbQPxrYEhjaNoyYqUqpx3dVUEZWKjXTTyQxPbkRfxfvbfMXS9gTM2dGdKqVZjvRQBDk17D3J1ifhXjQwyyV",
  "key29": "531Wkh4KkptDsSKLHkTJnSEyNyyA4DD54HM9tMCjiyEusAKn2wwpSsFW88erFBBbgpYmbeiaBftwXn6dBQeYxWFf",
  "key30": "3nwg9SUi3RN5vFkfEaecrzusBqNtVGdDhTUKvDmftQdKC46XNcQCASK5yqHWPnV5Spqp3pG5TTz1YUotaQJzD6TL",
  "key31": "4rpoKGKMsonuhjTybdDN7sZnC2f5arpNrpx33RN7sfxpTeqk1V81mNxtJSQBu8DMPqEL2rv69eeaqxGuWMowYhdF"
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
