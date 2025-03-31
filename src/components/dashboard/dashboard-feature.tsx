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
    "5SYhcwD6HcUQfqzkSg26wxiF9cZZrKJtABNN8koEEDjKSkTtqYWdBJsmSURRXnzd1jV5GYSp24jsaGE9LbAnw7FM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C2bBBsjHU2gBNFyL9DMkejGGkHz7MP8zTLsouKDD19s8LuPEYunDan93GW8xze4VafLtPaizhgyFvaAJ6t3pPUX",
  "key1": "2JAH2Rbkn1NfZMP2LBiyzq195QuBm6694LeCiuaSLDHWWX56o5aY7apj48VWqwQPSiXaEWcvcgH4GYZBWLqof673",
  "key2": "2LcB4N5pr6X4ACE3GQGqNXy5FEry26PmAmfu3g34nkZfHkPfFzryPYJv3dwUaxQWEEmakc5C5GEvAbHhwLjtRLau",
  "key3": "2HtYkqR9unpGAHU44E1WCQUbDnLrU5aP5fQcLHHaWzFwhUA8VEJgF5uev2TpTFqPj2npTBeb2QHSstrkYnxe5j7y",
  "key4": "4sHztsyfaXLi7L3HLnSzg7XPXALeXAXnMoNaqWx48qFJHXDb5rVHM8rJ1psrxVDpz59tguy8D3aTFHTYuxVnAmiM",
  "key5": "5gtV4rcayAhsHZS8kvwo24mvLHH5YMF43csP2iQzZAcNvxLmt2FkVwxYHvdrpRfX8MjFtJq8LjsyH6gw9dFfcuGx",
  "key6": "22tofJHisXyjKMDMCaVchLGqoYxrnhUMP1asPgMr3dAmCpgmj1xdTG4xLuGobz9DkjNf1PD3PDb6gPhfT78bPdvb",
  "key7": "3tBxVFv4Yn1C1EZDUcKx7J2ohWpTcVQ4KgfWcDuQ8KxmL8Lqt6RiQ6vCJAKEDjhjyEUXVbrrTfXE4NJDAfEokUxg",
  "key8": "tuZBAqhFbTtVjDiVZrJrurxGpgPeF43kaWrV9ntTGY4MstS4nFNcqHPtoGea5ZpPN5wHiR3htpbjmTuSDdRCzUv",
  "key9": "2pxLaDCJiP8gjQAV9YrF9nqPg7xUBypzbgintEZRgBA49y5SZRKHEc1XpHyVN2Cnpyrw5f7TYZGWEw62rc8D4rCS",
  "key10": "K3RLUz7rjvNBkYsLZpihmS5iEabc7LcLNNVLW7cWwWduShGkyheauzu22KAqrXi1yp6FbL1UGmnrzNBL7ZBWZK1",
  "key11": "2H8cARJFgtnjCejTiVFJpfsUJV7G6Jn3NLgQgrhdFsTCAvJapD9sDkcSxmYGnoh6QrfXSF5xkTLBCJbgoo4ST6cA",
  "key12": "5VFNQt8LaFp14tX6FRM9eNxE8gYQ8q2uziwaNTowVjj3BUuQZi5m1vKgVAhL2nnJWUCTjLsnkDd1PJQv9w6XkQ4v",
  "key13": "HAzg3bnPJQscqyirjkw78mDUXKTC6U3rn3pujMLVtCpUL7m21EQ8CEy3FqddpVtPSXeVk792SS6p5QfhuryDmr5",
  "key14": "5Fa8sUtSUW78ktH35o8vq35a7XYDScgVhZAJM1PQkBYyu9wKPcSa2h85ZS4bXEb8c7HpGMU97fi5UKUuipKfecnY",
  "key15": "6SHBHa3AHvBK5VxDsmW2wFnop3Cz9HCq7qCxs3krd6maACBzuFY2zwKgpB5Pem7S3EM5VHLTV1662FMPVvxySQL",
  "key16": "r99ZV8Sb1KHqHBnaJnQ1VmrTB4FxWYw4fKAf9KZ6oqFRJAKFCz2PBy7KnFYFfwncyMmUURwAHgJC4sYQrHTTfTn",
  "key17": "3BjzyRfuYgR38td9b253sq6hD4KaQUaWncgxGB2CbiXRrLMexzgQmeGASXrGbhM2RvD3t42dNm17wGxPmJJC48tV",
  "key18": "2kHH2MDfDA5ZGiKMSTjhvs19LyMYUSHe2Uy41KJBpqtkW6N1DEvEP5vvBQ3vgKhXq3x4PhLt5RF1QqVEZknH3P11",
  "key19": "nLcdWaG9obp6PAaLM6y3Fc9KvJY7Nqh821m1niVGx8YUeg7byAaji6HPkZZqEg5B7UMYxj8DMBjvtYfZ7m73quV",
  "key20": "27jJX4RRTamqoLqWRYEG6SkPynKeLw3QmjcbLY67AvCLBaSCk8skik2Qd3fB9eqGWiU3K6TxWWi6o2W1R4oBDvki",
  "key21": "5LzFiuCG6mB7Nwetn9TGfd1LHWGcccbLw18pu5hoHgEt1aY7qF5anbQrAScWqSSkucyhQZYPz79sVUMH3Qrpkf2A",
  "key22": "4fWQPQrV4n1HuGDMiKMZzHHL8jny4xiDRYrV9uYeyqCF8prfmd8ZwdMGLg7m4r1avpjkNhXKwkbvJFgmmFqKbyBq",
  "key23": "3aWWZHh12fXnQiN5zE7oZp4Zsf3btQFN72iN3RPHAsAW7tUZfxgr3gWQbY7eahsG19bLDNRaQEUSCdZWkh46bzrX",
  "key24": "4WvTogWWLJDbVrW4oohA8QkLtNihnXuBCS2QLZaaepPEbfANd7N7wquXsHTRrbrtQZVodCwRND39Fn3SXZTnMGJw",
  "key25": "5YgBapJUmMLkudm3jm5kH11ftaZp5D7JcDx497aTLHvuTuBD42BS8uoabqH824GRmCnQbnhVXXDZJQExzUNsnztJ",
  "key26": "2RTirPDLTf4f4J8jL2A7qEBVG2ARnLC4RoCFme2BgYzRf4xUKipTYmWnnkTbh41vKRyPwqtKrNb9y8q6yACWQTKH",
  "key27": "3YajniGiobP3szNVkucQoZ5Mf7jiycSsqy84PyQnmfbpEyn4pJghKvF7h82yXNE7HbQXTUJY3NhXFkJNZ1JnndWV",
  "key28": "482uKATxWmRNSuAFWwHaoePwYbqf58uTnP8XBUYRj7XXpwqKR2qh5kBNZxe3CQ7reK45nMhPg2e2xm5HCEguUpFY",
  "key29": "2eTQ8SZpJi14C86jdTAjNxakzp9L84otddgQgQZ6G4uuAqimJKUq34WLxui1yYg16dQvt77qCV69KMohzF6oPiZF",
  "key30": "3GZ3tD7oWdJsj2fPdCkvtBiC4ufhHXSFcdqy9ronEFzqky1W4BtWZ3uNTaTLUS7pVETJ4FCi6FMUuc6b7b3YPkXL",
  "key31": "47hXn7cv83eQGHrCBACQjjVHWeLUtUAx7nmXWmXNuRLGPAM29L6AhbU2i1qSFDqQqoEkqZomjEQz5LREwL9NHowL",
  "key32": "r63NExT2QTiAZZaUqWMEjLCnYEfRx7AcwCw3k5n7JKctz2exYYj1jD9gDs3U7fsZZYqoCJ6yEyZp97scpEEkFev",
  "key33": "3TJQfKBr3sBrQ6m1KnRzTfGVPLmxq5fWQNFk1TxUNR1xEqu4MW2kHK7tfQJTCLrWMM6NyxXC522gQu6RnZVxessq"
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
