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
    "597m15LNXiffR8WCiC3q12EYjTDt8sC84tE34n9qxFMJs1kQC2bwCHEPe3hKNmNTdn45C4gv4FwDjAGBSkukmw2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CbT1MiXK8aetatVvThgZPpDhox7jCKK9y1b6hhTPyHxDRMw4jwHhSt8JyiEWWSVcvtqrZZrASjNfjF8aXwaELGG",
  "key1": "4tdm7HEGeEHjMe22Z3YCBdjZLCKRjBDoQB7TpoHZo4hjhT49UHmdt6ygZLMxvH4XT6Y1GR23jLveFUbRgemro8ZY",
  "key2": "P6PTN7J6v85jTGShwDE69vrngcidXbrKaYfzeYg6r6Jz3qUDzXhJozS4bYqrNS5VQYkbEyYiCyrYsxV3ummh9G6",
  "key3": "354K1K8u4zwNoEmMCfCVG4fdWWq1YzyCF28W7XHuDfBybJxZSk6yV5TNfEJjNv36ZMm3LERpm6MfhzPDiAC7sN4p",
  "key4": "5DwGsgkGC4hKr9s1XJ7MpEwQcLw9EWbWWoNxXuM2YjhQDPWo4bbWhhz7oEu9nTornsank1qagbNMVxfk8sKPKKqA",
  "key5": "29B5BwhcFSsUpZivoebksCzscZcujmu7n7hU15mkrHsGCQFc5WA2qUZbuosK2N6pxmWrnhJ46Wte5nVxWY5JRKQz",
  "key6": "3Y2qKCh7F72eKZvMQMP31FH2yR8bWtXMrgYf5Tx93X73vPPx5DSqNzZcznKH2chP2RrUXJqTTrbrJgvXQCUNdv1c",
  "key7": "53hM3rCReS399PBZEGDuja55WPANQrpas6mvdZvwniNaeXc7hLyBFDDaP81xeXBZRoY4ZqC4C9ppuPcCkJMi1jni",
  "key8": "4iMWqsjcHaTiF1jEzMmbeHTPWUU1H5JqQhCakr7RTxtpPkcj5Hhtbb8rpjsmMkFK2Kg43bRcKw43nexn7hD6cFKM",
  "key9": "bya1jHhXeQMaVkMx6LnLsDh8JZD5v59Tr6sUEvnPNp1amdR4CshXjjEBaVDjLEVgnWYK3n5HDzrexctzsNGb5Fs",
  "key10": "tNRU7oWvZiuYJx4YA1ZJqFEvM1p3WffngGsWVQys19udUv4f4QCgfcmK3R2bndXGeWPzmFmm4oxMeKRveb8ZEyi",
  "key11": "WoDknavMkGbjpGt7rmdZ3gsbYzP6Mhk2xouxY5AWeWXFMtwpn57zKW9QfH979momnYWh59ZrxETzX4Kfy8FBYUn",
  "key12": "37mP68yzLd5hpLEST5CjFxqsL9kVvyy6tVXSSg9arzHBLZWuQLHNBQZZDHNUH2SztrjAhSNqyte9HGofNSC21b83",
  "key13": "4eRMFb6iDYaFFW3CCSZWqc4Kv222apHZFv21pZMFtnzTVdcVhZe7BT3xhEwAfGm4vtbDGgLGQgRQ8wHxmMgSL1t3",
  "key14": "2GJx4MonS2WxUibsa7avUStrYW4761GwFJtxfC8jHM3HSjjbNcyBbMRCpwemzSMnY8udEhAgXse7i5uvSwMMB7he",
  "key15": "2f2C56VFMzbBaUDr9kpBH6akEUWmgzTHfTkSVrhsELPRvSS7CxGYWqRAJV9yUa9tL8EVGGQhE1JNyWH4CQR56QEd",
  "key16": "2Cje2XwMjfGJe1CJARk66U2RAGZe82Rq99rwu8cQmqMbPCzR3vpD8QU58Qaa5R74MPi5i4RREW72JHthjTpZA4WV",
  "key17": "q4wYJgWkjkzkp12tXsaeaR8MeL1g3z6LYdxSx5MHQRp3iEiz7Ty1PeF3oj5Hbvwk1Qxcq4kwoEm8SC1EKun82Aq",
  "key18": "4ozD9K8iJg1CJ5iLpXxsZTTkJjmHebEojmQVT1eaLJ5JCFXVA7WMnrMjx7fUsj2VjtnanqnZJHZKtj6HisSYVj2B",
  "key19": "2gwcNWXRMWxkNmodhat2upbb7VdQeMZp44zGmzPUPXzjz3ZHGEULWHNQJKKQpcvZyj3QTZAafz9QyijU9Er8YHnk",
  "key20": "3ENoerhkUrfz4qUdzsKSRqmFKifhKcL4VmbjSYjxdZkRGHNzs4YkVcbEyztsP82Zq2EVUVvXQxzEzrkaBgn7hm3N",
  "key21": "4tMgPvGPsP4YLqxqChL8C8GZKfVJyoF63BFGRNb8p4j67L2zQQZNLMHNVR564BLTiXyrzU4K6pbbXicrFEicqbaZ",
  "key22": "5VEgC2cWVg68frTL6rM6NK9PykaKVKHnzjZkPS6Wb8oFjDY4r4ss8VmbhzX2jgWAs45ANBAJdrznmPzu1FtgL2GS",
  "key23": "LWy2Y4GbcYd1vrS48mhr6tVEvYYcx1i7NtnXhKLA5cg73ZWANpjrAqoY2K28h2d1bNxGiADmPHyMXnvHbgLHTBJ",
  "key24": "5hAJJMcpB6UPmeZDDR4VbGH2pK4cqx7awgDcSke6A6TMFWxFjuiD2zZLyDcN5kcbABLerK83ucL7bHsxyYWmGStx",
  "key25": "4DnWjFmBbEBdNG9hpR5dNRA44zDRB3gMeLX4VLc1hyC73UEMfuuyKwtTMMozS1ijyw8hWP9n1wMsTDgrYzW9cQUR",
  "key26": "5DNhLomBFAJuxgVqiS1xYD3x36VQd5xz5CzJFcpb3AYgYJcwAmHFhJm5pZcWpL8gpvWNQeiBmhCC4fowAj7oq4hC",
  "key27": "2shHWT7NCoWfNjmZUUxLXJRYFggEmQyoP7BodR5XpebdR7DLvx72YB5HTFj5ZDSAaCZR9b3GEJi3UV1WpnsDfoqp",
  "key28": "3jW7n7ykZWP5hux371WWwiyjhsPnr2HrNHY5Qfi6YEptf2fkxLS2NAnxjXuf4RKDBWdmmyvbv41gEvTCWkV6nmLB",
  "key29": "3hawuJ96QVgmQSmCUghBogmNkZrznfeJhsEBTTSfgdprHAw1U2inzVcQuzDaRjpdSK6KBMHzoJjCXuybAekHAAzr",
  "key30": "3YD2zqeXbu1sdoVCHBRP2e1txswrkqqBjMmCMj7g8pYQ4JKmxGFSvSggNUPvDYUcZP6SmPSdA6H12G6TeuYDF1Eg",
  "key31": "3oyVV9Vp6WN8qDyubuFKfoK6g9Ft9NDEvaYBN5hJSKTWgZyYjLZVpXndfLBjAQX7W23DNvXPx8mkhoRKE9YG5ADg"
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
