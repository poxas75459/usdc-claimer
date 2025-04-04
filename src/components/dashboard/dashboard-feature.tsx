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
    "4g6BMiTpchvNFQQNBh9ifHWskiAMsTCrGdZyrUqCGyjbGETFMPkLRCDsgRcT947sDfgPymDH1w76usCZVVo18wFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64cqcyJsWiHzWLGiiXGTyNyNwXSg2v15Uqy2tMLexDikpzeLjzfhRrg5GHZ4keVeRZBMqPBmCLPcdQEVwHU6Z5tY",
  "key1": "3Xn9p2TbXRd2ysDgvPcD6Az12a8uRUCcjecapS2fMghRkJX38FEBy6MsUxRJgCAR3Mkt46QY8AjMXtareiVa2ZTp",
  "key2": "2DSBZAd3nRbjNY894q57SmDC2uHzGWfFGVzoe4xFnq93QaMp8micUvP9fzonieA2PuDG6dGe5yqEyCcEaGCoG7mR",
  "key3": "jw3umJHN2XDQ3Bgo4d6rGB12eevC9YnSH9g2mUZb9VLrdnjQ5zatLGTD3GLe1kyM9RxummdT9YADXi5xnRe95yM",
  "key4": "5vfx6UbfVoywBNoCZQJPGfWJw9rh9nj2mVTkxby3KVDuu2TEDiyu9pXUgefUr9BDDCaDPrn8GtUntXBmqwwNEH1v",
  "key5": "1gwXtEg8oquDtGiKmd2het7UNNuR6Aw5VhnNPUEswzA7ZRUmzKENr72LoxeogcoYXMqUp5e3CDEL8aB62HHdU3w",
  "key6": "2CDLVQZLF3LdLkaZubdjQ2vrDdL6N6QpX1EVrWYnHYnNnDrN8LV7qzT8bedU1mXx1LfL67c2EzK9ZWRNBQNpy9NW",
  "key7": "4UdA6gw7vGULSz31bEqNGcDYFPducFDUNeGVzUJR9z6ACF288Z3Q6VFJ2kY5X4AeAo7dteLsUiuuLzaZ5Db8rytf",
  "key8": "3Ah9VUCiRS61hQz9ixYEQHNV7HK2pCSvfMcUTw1x12VSjsuqvk4QrQuktCDtwYXKaeMRsSbuttyVmvCxAeMWdGxf",
  "key9": "vTsPLCUgrbvQAHyM4qMdoZvNMXxviPXvDFjoTU2JCu2VVB4f3N8raU7We7cpfJyQmB31sEW6pniykvoWZgTXoff",
  "key10": "5JNHNemsKuo3GC3q3ufRmfxmRedo3G5WdCL6RCiQF4PLaEUk49URH53Y4oLtZqqrB5CJs2NTdHDZ6uBmDRargBki",
  "key11": "45WEhzXn4MzUKdjneyTPDJj9E9Ae7xWYECWP9j982nDwEmN6xT4rZiDvTbQB3Crv3JSDLGf3FLJY5cxBhkcT7qiu",
  "key12": "2WiBu6WaagzJMMed2JwSWNE5cj9K4VrwSu3taXyuixFFU7xQtrAauD6zc2cennWddhk7FmEh5xpKuNZVLbgmR4Zw",
  "key13": "51WoGkQ7DPmq7ypePcBYB3gVfGoaGuMQYawEUa1W32U4ocwmHfVUhFLBfFrziQ9rvAzWw8pLAHXi2R88vpzG8rHF",
  "key14": "3pgxtdiVX6Na7kXPyMSFB3AbLhs5mbG4JY4SWppqeym85oPZCkwg87NFGTXqMErAh34Ev8DSXCCS4GS8ap5zWMYg",
  "key15": "S4yF3R7qSF7ZmTetAoFdY8GWS6xcLeZBmBNKdRgA5u87WDBJ9vmibeMhhJrTNdxSqPwS1fkfUKRMz7uCoS8Q1HE",
  "key16": "2EWq8DVSUd4ZhofHKa8XuBbaGKGqiQjYtYe4uMCeKDTbZPFFmtgyUdyvqq6JHyrGauoKf9NThAFMMQx8SD9k1VwG",
  "key17": "3ZUFmKAP82VubjvJdNNjkXTmkR634kcq81cw8SBSKGFjxxKtQRZ5u7WH8cTDLjmE4zHMvw6n4cyZ7oHADEUU14Wx",
  "key18": "64ee7GDasruy8dj6BGj67BA1tAwvQkRLkGdVk2UvxakVR5huijfj9jaq17yHZXStuMi83h8NFcWd75bDqMjRZB7b",
  "key19": "41f9HdgMrJa9bEK8pZeUEDc8SAgwtUCN5MsU9qgaVqoBt1p1f74CKnHSmxtQhF27TEnoBV1rRWxXkwug1XVtJ4nk",
  "key20": "2yg95YkkvhvgQH4iRwKaz3K68SWB9KHMhDkTkhzCg6KvLCUE6Sz2x9EDwCxamis4BgovigZeiU22gFSjkbVuqvvc",
  "key21": "4Tj34WMVLfDaYA11Gf3PfMdb7Nr5mg7EwNAbx9QcN6F1qum2NekuBo8kar1wHvoRAEieUJte1BnhkaYyXhAHoCA1",
  "key22": "3ptEhyoKdTXDiBH6ey6HUtyEgs4TT5FKC3sB7iskpY63PRTRw1XdtDj93ZyAzHofpGG3d53gYoHmKB5Dc9EKXswx",
  "key23": "5FBKyvuZR3rYebXE9SSbpaZfK3XA22YTf9Chh4y46ed79HrVZakyeaQzqHpo63qYEEFj6zGPRFbeRjGELkHyY24s",
  "key24": "4bsrAmyiYQpGhojztNGMSwbzLg3cqqvEeN6nEVDNRBzWdz7sNJiJz2kTQKsv7V46ptFFx6ufGSH2oHzKoi2jQoGN",
  "key25": "34capyXm2t4HrNh8Z7c5Liuxd67H6NGumWDF4v2rSZvq6bfhL5uQ4kXjzzRzvertUdUREJfyrM9LRutyC7TvFt3",
  "key26": "5qvHfFcnFdH5a5286QkUPPhtR7tjeZqZ3Pzw8bNdoC3DcQCuCA4aHSr4MMHDVYBzrBqyqqdwe52DRH3erX3FUw5w",
  "key27": "fQ63fZTSBFacJty2u9AeL8oBnS4iiiSFYLtGLJ4jhoCt8yChhFAPsqk4cnqnXtZPNbZpkzbJzSvyjRLYKThur3z",
  "key28": "41sY1NqFvK1mBLYQeLtjNRBLUjCigZRHTWU6qanjKVLJ3VrUvL6EtNqY6VYgBkvHUw8Ybx83GkvxdnZQipqabVqv"
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
