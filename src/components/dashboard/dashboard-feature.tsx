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
    "59S17xB4GhuAb8LaeDR8BYda8vz7zj3NdXpPmLxXWqJkxhv9x2da9XAUfMpLXPGfmK2qg8dsNY4oL1wSYfH4QKKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42bE9HfbGLFnRQU77pK5XNU5VCpacwikfuWeTeGHQ2LDvWxH32TuKrZjdQqBSiH8GyWYAvVQcbujj1UtVGz8yAd6",
  "key1": "3pcLHn3oq8ozm1SYnJ6hA1Fwmi7VWte3nKQhVzgzNQGQ7tCiqqte5mRQD6ZL1SM4gk543oXYuPXx7u1B3V4cgk95",
  "key2": "3S984G35jb58M7XyLLEthdsnyUCNifr3y7ZbnzT5nhoeqpySHxrZF78BLLr8inyD35HxBxQvRbnrbRA2AoBFuxrJ",
  "key3": "5KSiHS69yVdrpkR41ScgMjSzdiLnTabLoJGTwMLo2j7FNEneFYFb7tkfzBR9C3GTnRbFf5xipzoovqF9jKooge2i",
  "key4": "5DFNRkvxHEQasCvkqyJQZZPWdgaZetAAPToaenaveW4Ad1vFcuYPhnoXAM7cU2zLHitq8RYz331N1JT4w66sZZpY",
  "key5": "3yHL4cf7oYW8rvpHL2QjjZH93nScpbmguWQp4ceXVeVBCwr7mMGjDGRwBMQEs1PhdvoatfjtE7bGr9KeDGXsmyvJ",
  "key6": "3qKt4oGNe1KJquMMKsQWAMrFduVxFmSkQ5q3mio4VzcDjGXJijE8enReZU1wp9EXHR4r5xTAGh6vZaSYRjkY4tUZ",
  "key7": "5kTyBjoCnbSHz8NV5gT8b58A6H6ezVHVGk6F7zenyzfXAqcrkJ5bPjbu7sfK75WxNey4UBSjdQhBB6zz7gy24dMX",
  "key8": "5vNo5uXhFjTa3XVLG8sNMRFFxnA1NsVaNgKtcRSnD1ZEPY6rmzm2eFWo6MgStjs9XRa7F6yHEq7FF1nRKJ698bY3",
  "key9": "3SmUoLsngkEwiN7Zf9DDKJuXtdhehxNR5jjCNPRub7UEVi2p7Bwz3fRmPMB3uXvfguxd8u2KkPyoCtPah1YWYeE3",
  "key10": "4TktV4tnQPd3tSovGMAVBW9g3h3xwu2aqnbGMZy5b1jY6dWQLhu6rrgarsYibDGJMmxfm9trC32GUSuT7tji9MM6",
  "key11": "2GB5sUQVc4nmA2hARfbCDZtzsium3chqpk3V4AcxGF473sDPN4fE2QMXQMuhzeFZa24kLWWGwHADD5oc9osbMv9T",
  "key12": "rN4VkrrmKgy6cQbRJyw42cBQ3ngZWeRMH2pP1GZhpLLVZXWHbsGreQy5ZptkRVDYvtBtDjTcQtaDPrLKDdDgTQi",
  "key13": "4mZVxiWC3Krkwmfd2ZnzkuwcUjV19ZkPF1aovUiNZB13PtrmUs2WJySfNu9qY4acaXtkXjPxujZxzSr2DQhyQSYE",
  "key14": "3pLJWbeUTvRV3hdyWjGVuZZXL1bmWFHPPU8reKCy8SwXAFvszV7iDudbjsLNTApdWjHusiJxHwPb9jAWWfrM4r6B",
  "key15": "2SCaZeGpjUN8ZZZBsyz6eQLSDNwRdL1jknmerJJ1beJw47aoKbH69CK8CApHC9omnDjcvdRU4HkrsWkeKsHwm8LQ",
  "key16": "ht6iXJWkdoREyCe4on7rMELUizHgmc9uE3d2iBvLa2w7ZuV6YpNEGAAC45mmHKeRcmY3AQbEUEwd6848RTWPcL6",
  "key17": "5EpRU7TShNjzYo54Zc6h6hueJ8QMwZVfXzJV9UeJNxGJEwoYuDCrGjBdDUzTw3MmzVrRedt9D4Pb7tUi8uD9s5jd",
  "key18": "415WvZrHPV9sBZuuCTc8orGWfbRrnGjViEqsviGeg9rf8q8rkW3qAs6dz75hgmzBWeyR3ho7KgPp6ph9Nmr2ayu4",
  "key19": "3tNeaio8BiQ9uWLhkgJiPrBtwzBfRiKSPoRGbhnAtvyjJK3jkHwZGcZKWGxc5Vx5gdBjMhVN14NwXZJcqkRb1cMj",
  "key20": "46XKwBvixo5FERwFofsgjLWmjVmLdwz2Pn7UcwkmFtoXToNqkasWv3f8zrHJQAM4wAuDEyW7pRhVno8RriFZULwR",
  "key21": "2DfqgyBXJHuG2JFUsUJMhBcfmTLUoQo3GTKcdVGHF4vL5b98inc1KZ16zEru3eB5HdFwqGcc3GLp6gRHUZNqjxv6",
  "key22": "3mnNXM4bx3Wb2EwZGaNchMmv3cvsXj9b26XKvGiiwXnh3jres5i5Ep2vSriBJw8d13nHARyumW6VsyYYGj393qec",
  "key23": "2qG9vWjM8q8r5DTCW61XLX9e6XpWdWWoiuAf5p8S1r425qaFsuixTXpNPXVogreUgebVMtqLgF1UrVCe31jwLp9U",
  "key24": "2umxu7wUJ8ZpRXWccTDcgd14zAZQcUgCwGJ6fwmv3TAoyiqrYWPh7gyj4Vg2fnYGdMxWuADrPM44BS8FwHyxWxQ",
  "key25": "2TVsRYC7hr4hxznFRaA5vCNkQYtMshoDPRqQYEQtM5c5MR32Tcj6K2ZLe2d8mRejxQrqjGc9zTKX7HtXJKr2y2hE",
  "key26": "2C7KWCAToP2Jkxvuu9fpKzARFN1CqziexZR21m57uDkfEvEGRBdFrpD1Qgbmt4pGsFwkEvCfT8FiLMFxwMzv6QL",
  "key27": "4qKkAxbBKNGaw5rti9GdBNgGGTQtLEc3hH9TW7onbciYJXEdnEPwFEaRUBkC38xugcFhdCopdofztwtzVmRBYwgv",
  "key28": "2YUf6jYaL7juJvSDygfv6xYvknQHxsYTVCG8otgjQtpwaKp75vXJghh5AjTHDidmWDyrGWviiqNKyfJXekozbXn",
  "key29": "YZJ1imxLopEMDpNi3j3fmWxSRZ1YsmEckkuDH7734c7hLoHy3hriKQUJP91CjDk1y2NqPb7LvdZQv8sSRQk9Znz"
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
