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
    "2ndKcFzxVSyomQdXHFofe4CXgpJBM4RLz3xPiyJYjeJwWFYfp46JxrSK8CqwMFmb2FLqPekqRNbF4PkSYiuyDh66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jmf87XrwmoUfrQGbHzJ6mCEkhuDcVCVDyrwp6RP7R6N8kd2TmQKppkiu845JNZW9Esk1aHYbz1ecS9KkHJkcdeg",
  "key1": "39PzHqee2VnfdJBymwCMh9SibHDoPznceb1h7aKo9ZDRTUFsNtqrC7mvydJZB3bBDkuEMF2fiyChiGACSpWxmo3v",
  "key2": "3daGjqgiRsfxqTHPFtNd4qdbzY3ComBFbmxPTVRgbgL1LwjjspAQWA58EKY911sVWUP5SkcL9Cii11oxAHis82Zr",
  "key3": "4TymcZCnWVkRuVS64KDPBKYgwLHXVZR8XTBety7nP3Ynn6c5iVcWVah7ckTqGASwwNVr8WJR4a4KMWzB2fGhv2Nr",
  "key4": "4pqa78dn8frJAWinhdKPJKVUYU4mPj53Vhuj1dKbsFubZCUAnzvTiLqyzEUfBgieYhN642EbxpKizD1uiPewTnnE",
  "key5": "2uuxPGWifCDhbiojDe4c56NjkYCP5AMEYyGtMyD1jxx2ry24xmAFYRM8GV1DvdCEz2Nfr1LVtgd9u1k7QZf1xdHg",
  "key6": "44acaohJRxm3UUryK1446aQvEGhhu69opsSFvKfMh5byH3jRowqUKJsgoW15GuhwLyQREW8bCghiViezdti3jhNT",
  "key7": "3eJ8od6bja4nctPBRKvZKzmtFSBoXvecTStqZhyYup19uwvofAkw9mwojU2rzEwgny2EZPvqcU7m9b158xyrjy9U",
  "key8": "2WDpqLohMEp7hwBbnXcqdJiWYkt1UeuZNu5XPTFB85Y53pu6iwiHyNF6fKXgwc9HGw3h6ioTrv4toLuzUm1gLqq8",
  "key9": "87kgT8jXwXvVxiop41VjmT3uZ92wYGgLiTGj8ypQfnH8ue9MyqqGf1eZ1jFqkXwdgEDv2zGbPHqnAAcogm61s8Q",
  "key10": "WJnQDhnHX33SBN3t9TdgWTrXF9Bs6Dbvdeyyps7mSPUCzPEJJxRzTC8C5GzjSMbn3zuGdAynrXRDs85FgHHHK14",
  "key11": "2BeNFvuV8utiDJpSLuj8Y2vhzkyK8mMamo167xz3RYHk94iUwaRUo6hkqc8rpBYEnSYnFhF7b3B1VNokwG7D4iDZ",
  "key12": "2EUPmZT5JTHzYH4rWk1bBaZ9CFFiLsVm5UpWGkWVipDjdVUNkNqxLcbnToC7tTdmENo3iMwfWwbvfjFQxpRSUmuf",
  "key13": "2Puoj4sRrEBJCHTdVaWXfRVVYkSSVXKru9heUys9N6nYRk85R98z65dndPH2EzZS9GnBouPts8tGvwCNUtVXmKip",
  "key14": "4XchskjJGKTzamd7V3yMQdok9VumNtKziSTcqyqAFboWAy3KL4Eur1ksJpNmdkq5S961e76SGC1hbNqabUoCv2b7",
  "key15": "sYepvBh3iVckgXYBGeVKDzuQbMUrBCDn7AGZwKgjU6AxxmV1xCni6DtpVZ8iA3QWQeqtVGg9utxFMsRDycq77cF",
  "key16": "31imvWJyneUoWxWBTwxBTbVQM6HsnDyAyauR3D5bNTT18QXALnFgdTjF6Exs2ZSgAuKc3wx6YfXL1pudcVAKo9iK",
  "key17": "3os3Z1ReEkbiTmYS8wZHksavtcbeWgRY59p7VkutjCTqhodkLaQFhgdyzAZ6aFLvppvcck9Dmz9BPtmeummTAmyb",
  "key18": "4Qs4UQUqiFAnCBFiYA4y4kjUSmoZe2giHeSqA2HuBUdcWdxeDD3fY2KxjQUiTLU59PDgUwWsVRoruPerAG7YqV8H",
  "key19": "5BvXfuGbp1ZQX4vjrZSZVvdHAivi5UmaqPby2by1SxhfYLhiafqFWjSyqHVoLDp97rnkw7r5n5g3shsJUWfZfMvR",
  "key20": "W2V5aXdDMpvmCt1BGTUpUwQADSS7PLc9RosQmrFp7qdwwCpHiAZCmSauYPvbUDW2STNzVZp99vdjoaYgAFwaTRG",
  "key21": "5KzvWBcqBXEtFLjsaYr97GCC8z9KawMqfJvjfeYQPmr6pQbud3gAmJnVZy4aPzM5AyEnVFyp7qo1JoZDraytTzWD",
  "key22": "2uMzqvWsYgWxTJzeZjAaBg2nSByqnVquNN7BsibScPKFXMKUJnCGTz3fYBmurizUaiFpHSx64VNfUZYKZKaSmKTQ",
  "key23": "4f6s9xaGeqj2aEnU73xzCCyhGnoK4yuKxeokDuBZ9ED62uuszyVKvUoLZRC5znPNojCBTGaAySS5gzVWSy5eyHgu",
  "key24": "Jw5vQdiSq4Udrew6mjm2eGoFgyv8N2UieAuRXeXUjtmGFzN33QiWQJUFSdBtP2KHmhphQuVgksVUYCnwTfXD791",
  "key25": "4esuXZxQgG1QQZ7EmwDfZ2WsBvfCwToZjHLyvBCfHHwPHgV5tKJUVDmZr5uu5FXBxk8FJfzG1Bp23Ash79SeJZee",
  "key26": "46pLwfbXr4dACk1fp8HpPyDcRybsXGBb8uxQM3KLi94bx1gxnoyNSZAajKjbAqTjWbDMX5iu4EBfvE5hQdkZsA3g"
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
