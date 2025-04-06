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
    "2j5aN8jjy9Ds4HDNxmcKRx5GoH7o51UJZS7xwwK8YW71zkqEka75NxKcw2qGu8baBczokGBCXSC3TVsYPPToUMLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hjNDEPEBhUe6gMGueXaKJfEDbHULCibmirH5JzpKxTihHePRjjBX7idC2YFMap2EghNXPjjNDT19GxpnhNRbvrz",
  "key1": "tnpSUkS4941D8PT3jf9Aw4GHeg3UABHt6kdtLgrad2BtzGAFbYmt7oCUGX1MCXhLiYxuNpFH3TGhAfbehSa1iwR",
  "key2": "2qNZ5VVDTLp5X6DdJmTubDY2VzYzxSvX9osuUrPWYcokp74K4dps4sanKs6GHaLEnz6ou2wtLQLFbe2J7U4TSxjS",
  "key3": "2fNdMd89kNHsdFueNCnoHv8Ex32k8SABN1w8iG2ePw8TX1uGG3Z79UccJjDTouX9L4eQKMywTFAFdt2JafrhvqGF",
  "key4": "4mjPDd7WDPLkJDdZ7KN4JH5xeEFdS9pYMi9EowaNqZJp31aySPnYFjXfTPL5GARtfesHv4u1t3FaZQuDHTR9xoxh",
  "key5": "4fKCEN5BRRsE4W4e5JyVPHX2n8tbKTMdzqTHSajdeaR9ZsVnGBZAriUxDYynBaEe5786rgukcSS88dLpEErdUqWr",
  "key6": "5WqGpE7sJhKdLvQrJcdNeY2BZZZhLEMF1aPCyYwp1TT2Q6D4axQTR45TFaTPeK6RkvZJUWdfYEgKyRwtNHwqdGAu",
  "key7": "4HqyJNT482m1vySnEp7eXCHnS8cpzF5BU8MfDe5T1S8i1F1PFZ3gCkxEM1D7rjdToLDHGuXczGmEbuTGXMER36xi",
  "key8": "32QAHQyVyRRuFmoTBGuvZbvy7ER4sy2FYyVs2gJECs4hC6QhSdC9dNL4sZfdm9NNh1TknCMnifGrzFFN6s3ocCqb",
  "key9": "2QckqGuvaArsNgTdLKjFZK7q6EdDDD1FUoHMMUv4ugyTYiFjnr9eoxvqGCgkZG4X7eW7K7e5psxvCbQsvDbxWX4F",
  "key10": "fjDeneMyiJEdXPKWLdXxQJfak5kPaEWjKVZJEpLGuocjoSnkpgeJdJCioyYc2C1K2zXWe7r7jGKAnmmrardPr3H",
  "key11": "2vR4Xm8pDKAmZNFN2MpZzyPWCQY3jT9cXi4XapcUwrASuiBunsffCT7onrosPreuQmPDvNbADpaST17H5qYFFePc",
  "key12": "4JKCjmsHKFKhar1ivLztsrMGuTdKa7HEM11qMJPvmRrrZqBTcZEEqPdyq5BNpNpAP2QYJhyU5S1uQT9jJVEC2KL6",
  "key13": "2PCZsfEnR5d64oZb8ma3t7SvzS8WYSTtxurWD4NUYKUFtAqA5j8nRn2SYaitqwYsNcAnztU9Eq1Knsjibi7zJzjC",
  "key14": "sEGozsNYpz4wy2BGxNwpewoHVUYd5cujXqd7XX99YWetbbiNGFHjXGbFbcof9WEt7UZs4Stk3HXZw7QGgZNfPnb",
  "key15": "48iYeSVPjX2B3nceV5RTv2CEyxdJgaHfWbMKiDuHbXBxHbPF3fnmFanWTJWpQJNFVxyfeyNZtLEAajYq4FXSejNK",
  "key16": "2yRbow1UyAVmYMi2mcwpsNbkYyRiapHWs8uKpn9cK8yAAitK3Uu2LsHQprUHrJuYBG7ikKgcjY2CMJnYw9gBuus5",
  "key17": "3vsh1AnRaiauzPgTc6pdmnzsoNyBmpu1MGAaH3Sq1LAtcN7Ef5gNUiTn7rHYNWe3Eu8fZ7zH44v1WUmZXZT9RWrP",
  "key18": "5JqruCwwsMPXGcrcfpyrBhcGjzGwQ3DDmw2DnsvLpjg345er4grjWgcHeQgeXpUic3XrWJcyyPAkGS9SRdykctVm",
  "key19": "4tof1FhhVBQgvfDVFgaRNqQV8UgqaisPTDifBUKKjowNGyjipxuB5wnDMa3e7wsYqLYwvQhzivPZdxmAaccuztzr",
  "key20": "GP35R9GDipvycBW3QUE3krkNDLRSc7eP2EWz4sfzcWjvpj67pTLphWSaFPhUiZ1i38bdZE3AcpgFgEHkAgYoEac",
  "key21": "9Sh6y8ziRdw6q6CeVLwo7A6r6cpNARPcTF1hrjDUY1YVc93k5Qih58kMRjXPG7LXLEqzB78XdSBEscXwWufGJQC",
  "key22": "3NDJ9S3A9cRq5N4VKHeavBk4eHKBRvb9xcEpzabRWSVy4LSZeSrPkXQRGcBEMASpRQLUfGgNbqyMUGUkLHhSAnzw",
  "key23": "5zfjBcb9o7mx1taWuyXWRdP9PhCN5pa2WvvjVNj4J5xtkcT3KYtcQrS8FFYZF42noN3H338fYJa2VWoYiN87uUx3",
  "key24": "hjgnup4PqW9yShn9QpjM3twAbjNSsW227WmCXome2UMjJ4e5AceVeAYvi1EMpdzwMTGCQmVXh7Vuz896KX5dU5D",
  "key25": "2RNqdvxau78wwEdADyZiLcrsnjhxfLrnGoSqTkvqrAYnHTL6rPZboQrLcA9xuFpUTgL3TYotQu83XhQsV118CMH7",
  "key26": "5oGobAjudGyDGtNygYQ6RpHGn2dLGHf8ppMXWg3yTssr9sRrwVAmf9FzCSGV9y7jykvMcZHHQJaGZgNnZYKcNMHh",
  "key27": "Vf3jvbLfQLHS6SxFM1CNq2D9QBCA8xuyxEK3b7WToKZxoN6Gqjxxymx1GQBKhgU6Pm5R5wKkmVJ6EZWNULGfY48"
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
