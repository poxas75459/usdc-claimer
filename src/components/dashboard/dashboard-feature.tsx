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
    "5K6BAsKxfoFKHAdFqohTwVkgrHv5h6DdbpzYocC9Ppq42gNGs2n2rvCYzzteRDWrX8as59ht6b59hfY21b5Y7iEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1EJvKssGg1hQ1XrmYmaD5WFyFmDY7CVMmqyb5p2zs9p4bFgxzJUgxeStXjEwRihMPjJsARUgUmcSmgbwJBKRREe",
  "key1": "4Uuqx3hZPuAjBRmNBJY8CVvm36EQJ8qbVyuYWhCPRAbYnqq9vyTZZafG4VMvQUehpE46Heu9fmhQQtZD6JD1q1d9",
  "key2": "42ge6AaZXWj8kAg2TetcBmBoYADYktFLkVgkmNYbwMYb2Y7vmD14fmz234PP93LpCKA1NkGfno4NafWz5TqyDimf",
  "key3": "2UNZKmFm6NAx11C4XxhEFrDWNLCsPSn6nL1nHBnfyXL5S8bvf7xWZgsR6D7kPckydx1tfrpWUdBnnprz2D1HC3VV",
  "key4": "2GoAZthnsypm2WxNSMsL6mQKN32bfaBpec6y19nMvxnJHQApVE5qqrYTxqZkQa3SAHhhk8b17aVvYMWKmDzgCMnj",
  "key5": "5WTEpz7UW9ZTQN3yA1z8Bu8xaMU2K9dZmM1BBLhGVGsgQ5J2GBsMxULxTtTodd12bMHTPZhJ3YKKdw1W7hh7cdJQ",
  "key6": "5aTgWPzPDmvKwKEaZm3zQaYgtc4VoaUUtFuTzsBEDLAgZZ8TKEc7wYCYuFvqPhXLRT3w3qTUxP5s6qodgwt5tSoZ",
  "key7": "4iTgi7fbv8QdDZc7yDxuJBX5cZkCwjvwvp9DboRDtBxWjtNg8QhwkDynG5eHVSkXGTEQaAncKw3T4VP5pL3m5vAG",
  "key8": "4kAszQj3mxaNyTW7kZQbVJArfNcba9XuLSvQJegZwszCGjeCQT26UZJtq7MuD7eyxggYidLbRfxwupwQWVLeJkaP",
  "key9": "4tiWgFMH32Rh6hw1Tv8ysTGgVDM5kbGFLG7vMdY34tVMW8EZBSbU9Y7fTuRMkjtM8JC9mchmgpVmwmo7EwA3Qmt1",
  "key10": "44nppwmpKKTs4DhdSrRpAy6cvskP96UwnvwzSWSSo12EKSNTyXUqNe7PMsmTUc5hvH8HMfNPAP247bm9ngGFrw7Q",
  "key11": "4XBnwvULg1HwVdNajD4K8UrBbJ45GsLjfn2cscCBbUaWVupCgvgjknpSPnhNcgCvJAtjh9oW8FysGE5z5PsKE7qt",
  "key12": "5oPoCKNEwjEZWXTwxeotD9MYkgAehiyW647MwsieBj5NVHeMbAr9ZbRR2eh8y9muALqfJ1eVgFUzT36vCEdb4zvh",
  "key13": "2fcUBdQzK4oksc9wCCu93JGfrJHnvjpi8SgqxukXeBtchHyev1k9RT8hsM2ashDv2EB5gKhS4TCzN8EgtcL8QUnZ",
  "key14": "5r7LkEnNwUc9JcJnemAkcpByfJSC49sZCH3ky48kazAC2jeshX8thGFzn5tLyyvBi9aWqU1jZYu2GJc4oqPeKQvt",
  "key15": "3Su9QyJ9xpkg6S3aJcBzbDhmuUBexQA9ZuUzxEMzTW8ZnZaG8EbdW4q9thvrwT4DMpQA5PkiardQKimyRXPFJi73",
  "key16": "2Z4ZgUK9YrG7nR2kVdY4kFYu3ke68AhEwRAsbV46z7M2wdm65dqdjxsRNu71begejSM5Dq8KEbbdHHUMSvH8JosJ",
  "key17": "57gqCUa813K6uSwmqztDQqUug4csuNkvn64BwXvvXw5w1Ets8eFkUjY8WRKxvgNh4DvrPCzG1zdoFb79BTjJQeKV",
  "key18": "41WqzWcpHskQGBXrRXuYVkzbzr3GutURG69gjwGFwACTb3MNaaCHsgvK4xifEMUNgY7Y3NULWffnEKgPUJiHReWK",
  "key19": "jAy4hjr82j6ifJQL3PCAS1XiibnsPyxdhLi87fcFsKKYJMPt8oDesQB4eB5xAfYwe1aYyG33wFdr58pxTBqnCTF",
  "key20": "zZPfKBuHj5d5gdNZFTS35Qd3x2utCGMPNJaTjusgiLg4XAWUjcDvFtpgC4jisxUEoNoZ3yKvdnVFubCLEGwL9Ky",
  "key21": "2WJNqdchm9ojXnkJKZ8DJSD6K1pZBNQjUuyCB6Yh51VCDq9WGEMurM16hhn4HQ9QRvczgHXatrA6rxUVVhc2EYJn",
  "key22": "qFLNF6ynX79zxc8BiD9uezA1Y2Xp6JyvcseAEbefPf3ZCHJnc8iZmWtdqeZGZ632cjtuokiLJaYk8enJRXExXe5",
  "key23": "25Fr7UuVRVZi5Bj2ndk5CPHYFKNPHggwHsGUxbWP43YnwiwxLpVRry3qCnqHvkDL4796oNWkqRpoVMvyuG4XMj7o",
  "key24": "2aH9ZWTP7ePzZRCwCEpcTqyuQc3umBEW6YTyEFqZnKzqTFjDGeKyuY71BGZgSsJRSXbsms7BAvUwFdfALVc8ddmy"
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
