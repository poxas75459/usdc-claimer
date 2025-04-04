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
    "5LmhFGQB5fwguwZQ9Dvp1uE4FNzNMGNCBqYxuCBjfEbfcyiixFjocEWDNgCErEbkp89EcEd6X9c5i5NfgzKPmF6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25CVKca8taMWuZSuwkEPzuCDNumAw8u9XiEQzfnki6zBpkvSYgpbePzDQq6Hxz7ZtDNJPmepL7RKx8ZWPQMzcwL2",
  "key1": "o81jgEmtSaynZwJZYPoY8AEpMAuN12GS5xxeqiWHMpiC7RzTa5LCDK8JF5Bwk8MjZEedSGhzu2UGj4WKyozrzjP",
  "key2": "4Rr8aeZtT6RKQyFyKLNjUcofu5AK2K1ciDQxEhKcKLYxnbwfYFX3DSNr52VbM41BWycgpT5hxxgjoxbAsqwD3gTJ",
  "key3": "5uTndoSsBRpKXdeV22X73WPhmAJCyCkVHXeyF7nizK7qgTHGTPkFMcBF5kaL4FSS9XqHgCKGVBGfE91RFLeJxi1Y",
  "key4": "5uGzgG1kAmZQDLung3CPXK44ozUeeGv6Mfyq4qyy4qXpbVponnQX9wLeZ31nh6HXpSMod4WZmGUkW1pWStXpKx7h",
  "key5": "27BR4H14XgH2kdJVZSKEHJxwVtZqrnwNhZFmAaJyUb2iq3eRco24mLEXYb1uM97ozqaBKcp2qdMiPVAXSuTiP4r6",
  "key6": "3NvwUYYZpsVAV7Su2VxbBNRZSGYqHkXQVBvThGDEiNPjdgptvVqV4f57o8QCRahfBjwBeLBQotsQPBioNV7UeqFM",
  "key7": "5WFuCZfMMQ4CLiDVxRekp53WYxf71fVNFhWaPK3MVnLjqRFP3G9Dv1si9kyjNu4DAnsum55J9FcpoW8y4KVH6ERb",
  "key8": "3w1MsY3pkYWWPYu62pcXLonfwJX3Dq8bjDzg4g3dLM8zUYaETcbrBwsjrfTFDDHFUwKJoHMAtjY7xbYkZgB1iSF5",
  "key9": "2rBqwwg6Rb4eAmGDDECftJJqkzF8GL4AVseHuv2m2K3EWrgDYQuUvEUnHBGvGVNNRiDN86Y1Uazy5C7R8yHL2SGq",
  "key10": "2odpwxwYun3t4oKzgGiNjiYwt5do8ZTMVUUR5675JhxTdQaV3kQ2bojqFY3QyX2hzdDcRTb5S9iBs3jcjefFU56S",
  "key11": "3Y1KEmAoTwpXcivpjPcZ5SPifhd3yEFnX3K3PzYRkRi43zNDqCCQhDcfJnrYJPCU3YHutLeydRqznZnvZHaorcmL",
  "key12": "KzzK8xm7jygkDSBvj8rZ3vi7Gx4EPdGdaL8PW4BdZ63qyre2hezxMtFaZHGYty4ZYj7TQ7MnAPSwFVxoV1DbHff",
  "key13": "HLp7dn9ZNzxyfDy7Buay6aUnXzsmYZijGXHfr8Uq21ystrJ7FB6npw127JYpkdQZjMXKP1Wc48H41gZhNjXmNHA",
  "key14": "5stadrw1iiHjUrgZDX5undEZTLaJ5knj2Ai3bD8fqjJghEYokrBJt3jpjz3X6ZWpH1hUzQkamhKS6urdU3fJsnhF",
  "key15": "5WTafUFSCu9QYQbTRvTQJYq8V94NJ54Smdap62D6sbnNT2zYKKV2b2a5YFQxEFLkSA6T1XumAorn5Jx5EngHBWwj",
  "key16": "67dUvcTSDUhT4eXZTbk2j147eYgbWr77evRHiqXWM6U6d7DmhhHGde37qCTgjgww9CgAkg7xHooMRYH4v2YDrgVe",
  "key17": "2Ad1LjjFbCJJX6C1zB9v5Y8a5675xwFoyLNPsDYWwpMJgyBKZTgg4PKPwEoy7d7S4Wq1TfvmpWg1hpqjvgfGmA4A",
  "key18": "4pA7FbhUFZ7Sa51NCBB9RFAtjadPRSrnRqoNgJ7Dvqi2PZvjHGtJjYUHcDuwXLcNwro1wvHoR7fGnAxT46VVdVJV",
  "key19": "3HLQsEj2uSaGqFAWX6h1exR5gvhx7LfsWPRcTA3zDWsR3yb2YzuG3x2wm4TnG7vwJnsZ8W3zF9LNBMQf3Mwuv3XL",
  "key20": "3vDiZepGK9esXrMRaj4AuMDvfuVJrrGZNGt1Es4G4WgHQyj5TqDxnRSb6v8bAmivniZABoWjDDCx9uRch8aigbDW",
  "key21": "2yhprZiusgK3faABcNFS3kmV3mQDKhFiQn3wetPVy87FiJZEkeUfRkFdUrnrcBMg3KdjGcAuYJ8FStJ8QZnhCtMW",
  "key22": "tAPKfpFZVXSNWimk9ohPQmnJdC6JXVGVuRbEhrLnQgrCg1o8XHTir2z5Wm6FWyJNzwpmvHGga5reWjCDEtPCZ6u",
  "key23": "4bKZEH92cDDsMLiWabwxo1WcKT9YjyHLvWAX1tam2xqGRZhPybRXijZvHuTajsPJhM1ejvdavcMvGDiuqk3eLDP7",
  "key24": "4EiNZdewMHuLECRrcpTjyGDuzxdVtj21sqkFDwh7fg6LrPM8HkGek9b55KS2yxRsjoF8jxLhkNnW2jYNfyCkWtmm"
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
