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
    "5ynPXJAfn8BmaUM48SqwyopktVgjCbaopGi89sPrWKacjAcRxevaZzZzZxZoA3vFteMpVJjfLqXK9VVnE18hgDHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rtSdx7kcR1B2j9qvk8on3ffMPEspKr9KNEehFFHmRd4KaDUxwwkMoFKNBpKCjzPvMVBoPM7JiWKJtK9PHhtorEn",
  "key1": "5WcfxNF5SuL9iMMcNJnqBszjseXRj58cmRPBMAqSkekt8DVSKzEV73jeAUJsVkRZCkxQoqBJUmek5YcEHRUobbfd",
  "key2": "3vmx9qXzmeoNg3YDbSvP6cQT1ydErcDWypn6AjPKmojMgk88DnvytVrzjLgCc8JMV43WZKs3Fo8XaV4pnVuZJ7hY",
  "key3": "3GY3SF7bKvjAvNpfPob55dvi3LQuMbmapsxphkCqdyCzfMrcMvW41EmCRuYwtcnEQBP6foAc76f5gZzJkgc8UX5R",
  "key4": "54Px8VS77bHxFK62wouMLw9NYB1K1cV9kESCdTUANb1SZ9qeWX7qDjH2RVt4yScdP8z2DsYDHUqXfe2hUnsbJr98",
  "key5": "4vrrRknHHrLxPtEutBv4ALZUhtpBCz9dyhMkq1dXBEZj4fyaYMCcvGWHkQX3KuZRvRwMeQfcLnh2gCFxNJW9NJHt",
  "key6": "3uKsLebwsqffk8j5S3qQyuC3pZWkuAG4WkgwSTRMnwmAmLbnKib7gZapaXv6N6z8Zt28eY7Vmr55tBKym7icVjYE",
  "key7": "2mbqF6Dz7rpeHaTwbunSsqAAd5qLi4K2coqGR3zCeChtkS8GuEcJxWojvKquTGxdNqvUVUabZm39c9i6rw6vwzAN",
  "key8": "5EAEQBXHmjcTinYLRCPkjYqdZeBgq6jtsudGU9iSwYRGRN8qFkoT8Fd3z8Ny6QDGspgCFNRZTFpPTZR44mYovCou",
  "key9": "4kEQb7PhowCmVZsWi57TtqoK9m6YqF4rrUyoeznnyhmR3m2NvsyobeZqUZzBnQgMJW1SA44qZP6j9Ud8nsrNo511",
  "key10": "56GrrM68Hxj31wSnGC1hZ7ryLHXJ5e4cN9Xuqxj5kUXM3rWCjrR6J69kDrqBMcWRfm7Sejj7Jo4TtefrnEZosyqw",
  "key11": "2jWodWCwAYHGDLBWRGpSw5gxNc8yFEZFAwSAL3eqjzKR8mEaxoCzR7EisxPYQ1RNpMWftj4KDMCKxMbvw1dPRkJU",
  "key12": "5EYsKvDxo4j1dvR6KCFsE2a4EF536tuWtJzFzthFGSQue1JLryYRdw85WdYCVgxuBSVB1AnKFbCLKo2CqNaVH1YY",
  "key13": "5sjTuyYwzaEbjHNi2V5qua4f9AUyyRzzdQgPmpgWroRy8wieujDfjru49nsfGixBfbMkrQWb9cx97mdMFf3n6fi3",
  "key14": "5reGYyTtVpMcqRFREbHRCyUvbeXkZvmx7NgN3NWhvzd2exXw8hwkXcGZ7uyeNAWi6zFNTJ86uQiQ7wqAn2vtaKkg",
  "key15": "44enk5tPmA8kGSUKNPQz7pPe5RaKwRYwTmYcS2nA1jdiqkxjgnNspD65CxbVhL8QMbwMU4eTZNeCy3nUXPp81H5M",
  "key16": "4dnWL2z9jii2RCK6g5VVd9xEGKS3BxMVVdv75m9qxrC8cymxBjuuNvbap8pJhFT5uud9G1wth22sKC9mKyVRogPm",
  "key17": "2rMkpdgpbBkDtDAPBtVRZr8Czvjdm8hUxz4bkrjyjoQK3sDSxj28C9rXBtbafmnCvz8dBdTooMh6c88Pm4rUkqnR",
  "key18": "2KBJZQzrLtq4gYVPXfJi8cpLBL4MiGaBdxLHvUfYrb1S5DWz2yxDef3QsF6iwtdKkhqB86BDMFBwBbq7mQpGgDdh",
  "key19": "2DqqnPHvwhf5D77b8dnJZhTpX5Mxj9sBBJ6is9EbfD8jpLFwuhdTpAdFhozRcshHcc3tbhZxmdG5UepVJdSCjLsj",
  "key20": "3g81nRqNZeTiA91wFCVYrC7fSEh33N6oiYZ15CNFSAduTbznRuh4Fng4GU1B6NtuCgqzc4uWn1JBSR7YMEYtTypx",
  "key21": "4qFCVaK3JjGmWeYTeeYVfojKcCWyMtz4t7USUiM7sscqwmTBLK9jsbx5gbPJFxJ5xXipUXr9TVGRzR6hb3GEbaxs",
  "key22": "4JZT5vfCvcocsu1dUhMTXiDBmu4KBxPySn9CZ9xDbRcbEwQbPfqUQAXijEsAdLSzXBAqhgfTszNgug15tQwK8arY",
  "key23": "NS4YA7DNhqZTEgZ2L4S77sYnECFA6jvwCn5booLveYG8z9oGJajK3Z4fjjkFqu2VcWtKLqZbNAvMcUmYL5SqK6W",
  "key24": "2XTNkgFo5pCz5ekodseJHqSukgyx27YXx4WEhJzLec3scTKu3YRr3g9oicRJ33e2KKwNE3u1KioYUnde14RQ1s4Y"
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
