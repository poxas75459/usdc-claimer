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
    "5G8jcrxqZRLphY3QTCgYogCkfWwywUBnzPF3hrcc71rGNePK5NvxzxAzn46sA7GSrKPLhPnbVkp7iU7nEHt6g4Pe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PEkr4jAtNqzxayHv23NhyGndcba9DcZxr59jaB7wpnByYZ75cPXjqBHe6ojT2c1KzNo7Coik4LW7n3KGftedZnL",
  "key1": "3vydQtPh9bDch3kMEPKEW81h5iXvfGyJVdhKH82b9HWYVoTM9N9puxxN6J5X1NuSu3uqQkHeAghqcetoMYSGNSHL",
  "key2": "3t6LUPm7jaS4xAbGfNoPnouHpkQzyrBvwJBqHBDqgdPBvv8aJZuS1hQzAfVisk45udS7Ls6TkMKoCtHpYZqX29x8",
  "key3": "BWHZNCyHhaS7FtY27bR78CzairkMRodLgRSdCpqLcVqsyhbBVWv5LShHi6YUU31CsjzHn5Tz3c16RiTC8Bx2RX8",
  "key4": "hNu9wpZZy2GYcJcqygU2RZ7cvviMnmnRemzZTPLrXxYTPyznv7k9DQrnLusLi9AdpiZmVZECGezPs2Gs3tZg12T",
  "key5": "3po4RuYCHJFn7ya84vT6LpXUNnZ7UYvsfK1fktxt1qj2Qfi3KXfiX5Jom8sZ65F7Qetn6gahfuqHz5yPDr6qurLT",
  "key6": "3fGeSLbf7NGQkJNzsazNJQBMzfJmrUgVYBnZovQqDg9r6hFB2KwYWR59stJMdqi2r5mSpuFGFeqEE6VHhxmBjXMz",
  "key7": "2vhdFFEmreSCtnhRk6K9et8HtyZcDjcZMtc94FyiYwsMrLJP3vQi9LFBTHoL5JjN5e19W3PH1aJRT5Jh1SU7JaFn",
  "key8": "3ACR8hsxqDgLzSsiWnbQNAyAG5CC1J5bvk6hR6N3s318NvuWqBeDmN8F3EA2qiVq2ji9zUyNutGbbmGQJrVc5bAu",
  "key9": "2r1yPaAYFPDH3LVm4ReFUYaX99PsdcwN2VsGDaVRYcVLYRToNmmBpJQNciChkjBDDxaFXCqGNg2nH9RQWFqU7xUH",
  "key10": "s2a6XFu951SoVRLUM8eig54XgodqzZnLajztsp7e3C8XMmZiTbu88jEvuMGhkQbQiE8tAmoojxqs4ESNT422TdB",
  "key11": "3MsNZo8dfcyYE2ht3Gx4zWpUngsZE1rrqrYmCGpNUkw8CPqq2sMtbcTEVGETh3mcuyfVKM8VnxeBPoYWh4isGXL1",
  "key12": "2bUKhCUxJgx2rVBCaw8ZUD6KRQic8NW9GJPwF2CKfPhxNaCya3XMvR2JeqciARysKMRXsnKVLkKySpN3mm9A5jjU",
  "key13": "3VCzymhKxrcRjgFAQDAPj53NQjhqY1QZJKbmt4wR85RezvL3NYrWUy7RcezbdLpChvoMmxxPn4RpZuerKhtVLRQR",
  "key14": "483DNno5hEGQwsrNRARYXS47YespnP8TA8KA6BEroFY9wmAY67nHPCzXHJM5AJPWbE9Sv2egCCnTAHLfUJCJUa2K",
  "key15": "2P8azUV69p16AuYCSQhPQ5BU9Gev4PiYheiR5dgrBUhmWgEa65cahBdQUewqvgaDx5mEhE6don94LmQh5wcjwLuj",
  "key16": "4icgPqD4Ssb39wSwhWTdFi1MxKTraM4io5CkpAC9BQzs9vZgLUApXVCDHDp5tDK6WMGR1SfuoS9Vmf6kF7pnULc5",
  "key17": "yZ33KGessjhM4LumpgmgLqe54gWRoWD5dk8R8dXmxCR5g7bxHRZQsq9eTu9Rg6mhd5bpkp3MgnB2iYe1jS95f5p",
  "key18": "2ThPepCyCfwayrB1sv22S9wcWKzULK3q4yGw6QRAqbjZbH4Ne4HtWy7BV57RoyYNPg8WWZPaW2U75D1TrVquuDkJ",
  "key19": "UksRiwZ5HX4QcrwQyTGfe1MCJTNFcytBAe1Czc7wGequNkpbkdQez1g5aJ2oSfgngtt11E1upxnr1FtdHmjVCuk",
  "key20": "5ewnrkajmsqTHLtoP47CVMt1X8S1f67uDHqKhdMFHuZiVErdETTjeBbtBFf7EMqBpnr6AsoG9edTUnNVhVJq1Kh",
  "key21": "1rqwp5NxkpQxWeyjcFmdRxZfyw1866m38To7Tvc199knQA8b3yFEp34K439zFg8jbUs51SVuAazdtvTnNCRJtqw",
  "key22": "M7qJkgovT5Y4xTaFE2PQaFQG1SSgudceWWrb59EJ1BZoNmkNVnFNEKtdGupCmKBgcJuhNoZtKdCcB61Nxm4XpyR",
  "key23": "pKtz62p6rNUx1LUD5BCCjpjyTHdtmkcrbqpwNz586n2tDmsCP9Fyw3Udrp7WdfgKCT8ENvANhoQKesneXoEtL75",
  "key24": "PUfqz2556YqCdWkAW5CB5qvf21tc4Nx3VSny6Tw5eUATNCmL7Yo82P5dy48AJvLvy9EDDjWH2XJx8syyh51nDFt",
  "key25": "4hEc1HWJn2GjWcdhYxrV7uAieSgDzmn87a3EXXeskbMFWhEFNWVJckCxBPP9GhCRS66uftX664cSVuwDsatLs4sd",
  "key26": "uLLvmo8xYjvTZVWZ9nKbVPign7zEaUjFPd9CK1vrYv56TWzStxKLdg2CMpd6nefQDJ3wr7e9EFB7oiF6tuwdXo7",
  "key27": "7YgDbRa2Rb4ec3UXgqrudrWxm4rRkQbLm47HLjjWZ9vpc7S2d54Lzk8sv21HHKitxDesCR6qU5mhKxDmZXq8nBf"
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
