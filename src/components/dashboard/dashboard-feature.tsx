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
    "3K5pdrCEcw4rK97c4rKF6SF5wAA7uJizhAuz8XiaiDZTHfXnuGbVuhgR2KfXXveLfskyMF8po4RfpmPASPVEE8RU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M2snbcWaBy1GPD9dJHCToQ21RgKeSqXx4DWyNcJg7FUTekN78RWYSh1UPoD4bJaWXsdHAjrZgR65h7CufJvKMam",
  "key1": "2MjPLMyGs5pHdbTNBKx5sTPHC7iJzXdmd4rdYSGQHRZhJcTACY99qYC8wWAtNxJFmbsicrtMLmbsXZojNir8TQMd",
  "key2": "4hTAdy7FrhjVbBynxCwnH77dFuCJTe1ryTykUJoFz7FBHWt9Anxi2mJakt8Ghhpu4VC9xY9NGLKJWECkNEF4JdtQ",
  "key3": "3N9oFyAzdLwHvw8aaiwCJ92XqPoWn6MNpiof3Jat76A1HvWqxWrmGwVK9cWfZnSttmTwyqj235AGecucm8LCkWdg",
  "key4": "sGkupDQgBrgHD6aZFYwEi5pCnUUocyR5pyXK96zuFdBggqpjG6beGkaGcnx93sYDVGP2m1AYQ5oZChj9WLw2WwL",
  "key5": "4DA9c39SiomvAjeSr9XX3usRn4o42Vx4WN7RDbqnqJqioLJvxQ3D6xLWtWgKgsXHoBAchfbJFfk6hV8rEtj1YfYy",
  "key6": "65aJGm6bHdMeGB9QD6mwhhhcC3y97e8m92jJWPsDGoCWazskkP8GiZfm24jAJBbvDxuXHYRtaWc7oPGCdQrDEkVn",
  "key7": "5TUqoSZMjkhNj5NbwUB7xUaMYJNbRYkvQe9SwsR4oYjoeq9uaUHcwty6yJyV1zgaFjoC3WNDp8Br3TS2tGrsRzsv",
  "key8": "5LjsMw9r6b3YkTFZJJNdPwqGv1iKLPrSQ6gWsrB6c1djRr4SU3vnU1UwzYFJLE1JnVDWP9ibay3zT7NbBSKdaALK",
  "key9": "5DdYkrmc66Mr7ao8N6VGVVyRULnoGnTmjhW8VLbYPFG11ipHQFnxKt4pEstd8mVMbJv7kvZFRPxjuBvd6NSqB71n",
  "key10": "4xMNRYUM6RagLQ9y6hij7W9BoDG6vXsvtgwQDkWEr47AC5ysLkjSPmpRshfX2dhe8orSmcKKLNwNxFTTCjxU3T4R",
  "key11": "62hfQcZ725wJcFqPwLwG2nNESnMGsLDziq5dJfwPuKbsvdrmwKWqmYNZpRmoiFbvLvSsEdTb5pTb7istBD3uEavc",
  "key12": "28ZmLYBRJToTQKbuu1JR3Cv7RwQpBLkySSzzFn5ZG7YnArkqymjqS75oCJPXWw1sssYgGdTNRsuyudvmKBqCfPAV",
  "key13": "PJf7iuoH9YHmYiKi91bBsaG567VJjrYRc912Uq6GyCrp2SvPq8daPefWdeL3ca1LAcLR1cpxKxcNcuftLotpoqb",
  "key14": "QYaKptQXuypp4tNsoMwytfAdq3BZmgtdUzJijrt5unSCPo97vXjrgrD5N8ZCPNg6Yp7bTBmhyaTUVp4ZRHtuBbn",
  "key15": "3vYSttCdXsUUhFRAcLh5bizCbekgDUawPveKFopxZRyjpgyvkvL7E72eZsxxZ5TEEY7xU1sRJUfiqrWooByduqY4",
  "key16": "1y7Bfaq5C264hiqNftkcyuJLM9bUZ1qbPr7h3ss5QV4EaXP6uTf2H2bNRPWkYgYuLPzf9bKC1VwBYQ7o3JS4Tqu",
  "key17": "29c7yCuMakEjr5WGUiFQkQhea63QhfoAymU6Su8MX55y9fQ6R889Z6KtQHwmSQ31zVre1BNeEj9k46XPASh3yM8w",
  "key18": "6m1sDPST5V6cNoiwuS3AL3ZMnbAmkprvSJ8P6D1yGmpBTd5X6H6mXdf9JCt51nC3AHcgxJw8fChN2AjHSekEqVJ",
  "key19": "5hBDpxjJRrjYKB4G1wt8hf3V21GG8RPE4qQfbAeRhqPq883frpbDXJJEerivAvyHzez9KRdJnRPLoHYtqYnFh4mn",
  "key20": "5uMkY8bSfutwdyLQa9ufSCGdGLbtEz8umCt4EN4vVXTRhK9XFo8sdieBNhAqSVGhe1uABBuD8F9Pd8fKfJAeBhSn",
  "key21": "5b4ods2PiSZrChfTd4dZH2AxttMnxKYvjXhdHYH28CHPHUmrHPkJVnhpWsyws4Lt4tm7wuY53kRNwx4Z2qKRNREu",
  "key22": "4Jv6dM7gkAY1gU5RdjyUapJFVqTgdznQVcesnDKvvt5CceNdZxyo8TnioGg6SJ3U9riBpxJnfFPMceoezsQnPuGu",
  "key23": "5ehFHCjZ6Ez9QJdSso1kxpU5mkb2fSLqhY8bxnjVLZozsTpCUaAkYCEygtDhjrfvtZbKS53bX1xFbFuB3USg7CNP",
  "key24": "4uozHpSQgCVJcqYVei9zyzfhoG384iDnKjKEiUtqFCNCgSFYZDF6BfB68mRzxUA19aU5NBZ1sZ8frdZqtMgB8inm",
  "key25": "hj65nXungBJmjF2oATVHW1i5ewFKMbH3Boo6eg6QY1LU3dMSZzCQYwAjvmZm87yiWJBPQDZNjdKNZUWsX9Vd1JW",
  "key26": "mJ825TpNHwcKrdBQBpo4mckg5MyQvPnipUnqJKthMgb5vMgr4gFFZJdRWavkFbutXkj8pT23uypc1DaTxKtsFib",
  "key27": "3VDVEMak6krpDfKLzPmcJZeF6gm5kFagtezka7UbYg5caZMzC6HxLwT3UL2QkuwUKagBqzdEKvN4VjH9JCAVqUXH",
  "key28": "4XY7ofLMucAVKuHJzx2LM1GzVq2D9fAJ8pywN6gaAKADxAeo6r7CEUkugURjW63bkGJk5mRfqX32TcRki5xmNCNc",
  "key29": "qnYwoZjbVFx91d8T9pPXFtvGSRxBavRBKfzyksUgHYG1rbdfhjs78ShMacHECLkeBACzho3kP2L6EXuKxc5XZPg",
  "key30": "5KyYa1hNjxveU5G5ATXpRXtAKBMazr69nZPjs3G5jFwBge9BC1SjE9Yc2cDczo5hti34Bp6sy3S74hXV23nUsSvL",
  "key31": "e3T912UXUGsjKi6mEfUEo7BPd2p7t2LULRRm5nTYj2pFi2NAMcmUzxi5PNn5Qm5g6apS3YDopJfC48EWuQTYcYy",
  "key32": "3wwkJSrbRvLcsYR8NC8E4Z3CHUxCRHHB2FjXE1FRUM2UQ9QZLnnLV2GroVygc43kGzqViwT7q198PSocrvXbPhYu",
  "key33": "UViMSuT6An4vbLavwfYmhCf6yuT9EUFm9YESnzv6evziaWMaWFVbCAPYJS5VbnMrCsW7kEu6y613fthjZCQ7xEK",
  "key34": "64khmVcwZH8TMBem99f6M1Z4qUbyoNhhewnUHNRshzjFENQFfgHBMDxiBynKJ2hP7oKUhvRcng42qr8Qe1Ajygfm"
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
