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
    "4MDFn7NSpydFu6gJnBzJmQWsry9UnSNfLFPeYHAvxnnb5XVK2KDg7tB7p9MkweWeG7qobdSuvyhkx58WVfwrgjAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CCgwaD7ARULxn9CyABy2jVnkvAjCMsC8ahEFRt2XpmUuK3Mf9Q311ZpNGZeRvgoSqyZrYxNAJLyNUduMLJtTNEp",
  "key1": "2tZ9VqPdw3ajRWJ4fkFzkq3F8aBbeh6kn5vHpBYoogC7BQ6HE8GxPdikZ2aa3QRxUiXW1KKMn2HBuYuej4w2SoJq",
  "key2": "uaVQwVEjGEdns7majizMiKy8pHKrYa7pLmyQZKRY7gSJEKjMWEwBgf5ZRLh3xapzrdyvWN5zJndrt2XG6VKkNju",
  "key3": "4nnaUuowtS8r26ymoeAnfxMjXKZcmMebf673c8jEZ4kfted7XXpmkPkvrZGGgoFebEPoNs1LrLMwsJfDRezC38CW",
  "key4": "43C9BRft8ZJBmA7m3xxgFiXM3RBbYAPyaHUpktuihvQNT3uRgiw7zbNQZHuVGUBPqrBxrzW7mDKZTNWdvjakmWYa",
  "key5": "5Mjn3FeEu3LCgnQLjYx1ebYtgp6NF1UhXeVv9Sj1FjnJoZ2dDCmweVj8q9RX8fowfPEBJsYRcMqWX8d3LaaPiL2L",
  "key6": "3Yc1HWrXiW3PrXmSfbpmz3tzY59tDQKAZRXUVLfs7tLDp4SGEhwCUMmeiPzZaeAud4vYMZLcX3TaankF1WAJfpHZ",
  "key7": "5DHz7LZdJKJL3fGupTFNVxP8kDZuxqWF2XYFXGHBavzw2jkNTXyN2XaPSDUMWtXLdkc1RPozo71GHvRTvdUFTKnU",
  "key8": "5E6LSNDspGhPzAesd66v3RhTyh1zUbnatVXwgNVMyqtXgHsfouCyQvYUxDfJMnZZsZwdQn9of8Mb9zhDN1JHgW4Y",
  "key9": "4bPrTZSVxh2WHLVs7WCVJjaqPeCY4TCUyMM4NFdbSE8oX9zCSvSkhKeHQCPRpsKR8x2WZh6K5akdiGbk471ysCi1",
  "key10": "4YzNQMdfUsWGSNubgTVVQJPcoLWAaxyYMBjoCVoxZgow86oYNYsmG1zHhjiH38xhQAJx47ndqiXbrpPLoFZ8BttC",
  "key11": "5tvzBgneVo2X7o1MD8cqYVDQozj3mCG4W3X5jftbXbqBsxUUv4vagWTT7UUpQd15nqC6WyUECJ2VvZ8srdKWgQ95",
  "key12": "DiFCzUyDjui8ouUCh5R5mQmwApkdEYDFM3FgcjQKZz7H6KQDdHkvskGdJwJy3uwC9S3bvonzHdjHR7vUsQ6xz1u",
  "key13": "36eCaK3nSDdbtR5fcnwse8EGMq3cUAqPTf7MBYSuSHPs3RbYqUPJHFBnWge2Xph8KD3qLdqyJkeQhCD2kRUz66wZ",
  "key14": "5JjtPLViAxTMEpZkfQvhxz9zBFeqFmYfWVMLTWRvRv7mSr1vhCQTM5qqaJQeQDeF4JSifcyS92ZgiWDQpWjKTjrs",
  "key15": "7vTmC4Fmipgkm7aD7tzq865oUex8dBWSbMtujiewhQKyHMsphy49ScPKoamc8DtRkxPmpJ6ctni8aAfChm9PoL2",
  "key16": "xJuYz7LjHZk54H4o47d7FrefPQtG22Ko2RdtWZbESisETGyzwBcKWnpK6mv9ZJiTxjNT52uZYf4VoA3XhwVmntV",
  "key17": "4AYuscBoM742SoXcjXJ5rDnWt4zZN6XJUJ8iLaneV59KCoeqMzMjGFvs8XbkZNxfpjf2iCLXRLMKUEA62waU5QwJ",
  "key18": "2eAnWiAoufzWm8YUvj9onFFLJ6Xi6Y2h96jJFHsNyVkLahNcdRUQc6XPzJRD9TPJJe1JqrF65hStPk5FszJn4Y3n",
  "key19": "3tF188chsKVE2QtjHtQv2vA51429ed9a5zwJq34X2LyTyr3DtaR9RfQ9bAFXyLkffkGCXgr2Bb87WMCYN8GPH5Tj",
  "key20": "RSvoLDKpvmEZwLu4fjGDUAM1hnacRtRw7UoDENfqdamGvQxhqRKeueNE33zdBDmaGRHoWLG4Usj9b27Ssjo64cg",
  "key21": "4GvCw3ob3gbzX1S7DiPtZhdg1fpUHMGrnbPjU5g3ZCBgjmDhm93hM4ZMASefNnsayxRToRMKUoF6NLaTcsibsZnx",
  "key22": "3wtVNYtA6bNJYn6o3CFHH4LJNC9FQBWVnP8EeSamnWnGdkXuKLXc4bwmZBpeewxZFgza4oaadBFYuMdMXaMai4k3",
  "key23": "5wZVWLB4YSTg5xYA4T5mbHPZkfZVEBRRfpPLXDE5Z9u2QGAAS8LYjB7KbPeJ1tLRXvbKuPtspfoHH2LbtmeW8jDw",
  "key24": "4Tu276whW7V4ntE2kVhaw7CdxBngkuURPd7nZiUaqPViYHz7cRuoVow1VqtPDAVdtFb2oMn99o4SzymqtmbeEZNj",
  "key25": "2DvtHo9NSGBW9GGKPCF17s9YS4unAUQjGEZ4CgVin5FvKpczicNHwMBbJzKDPtBKqafjpQA18q4md45tRHn1112v",
  "key26": "4awpurmwrVhXAzjUmrGkTuDZSaBy6WJbXiniE5STKaVErBaf6EdS5aK6aeQwKjnvjsmbXdZxi5zAsiYkmnd7myQq",
  "key27": "21WXqf42VK6DAVBMPt1xh8itxweq2WjwrTTXHtEgV7S4Mc8kW2YXkVGhMm5KRnDDsWiZAUhgHmipraWdWLfgB8Vp",
  "key28": "53UvwpgBEhPzNnbhJ2QTgNAoRQAiPpau5KJMGR2Nt53uGvea3cYvcDj7i9i5wjvCeQReNfMb46yKWdN321SUp7Sp",
  "key29": "4gkzdunEJgDY1gW1bWe7FgFuqRxDnwrWTJRQvGb567J8vRsM41KkBKhp2rcfqSdNS6DCKWUauaC8V4C5tMyQR1cr",
  "key30": "2qQa8Z9KVKrSgJCsJ4GHXG78Ktk4oiqu27sWyr4HLzBW7Wa1pJioyZDwsb99tfeNuo3a57UQFA6dP3paMgVW2wdN",
  "key31": "4tDmhGHTt25m1bTmRnPnWG3bnR7KsbLURv2ckngwiK1HGe6xYE4kGb4F83DX8JMQbgkFT6VZwWFnVBqQ9m1mSePJ"
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
