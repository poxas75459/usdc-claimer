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
    "5KGpJgCQQEuJAHnyHyLPxvSE5s5AdsksMeMHxns6w2BfC1XTkjkPcuvRqMomAHo4Bju48cXYBFuqqwULew79YnLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nrpcqqU38y7wSrVQcqKzCP7ytkPqtJeecK1tP2AKcP3KSMy3mAzHCujrup4h2ibWQJzybvSj6jpQ4rPrvboE21S",
  "key1": "2G7AxMv4SRXh9fmie45MTUrVCvvuRBhJXbrW7xFvBDLnmbWLNpXJuyZU14fBiiHRM2zjQwKiusKc9raD2fyz9U5H",
  "key2": "5rBRa5FF5WR27siz7RwSbLsduXcCHCdoXhpzVTq8qeWu4xDXCm6EbXuxWHYPztXFUbbTYMVGibqsse3MyignkX72",
  "key3": "66nQ54zc4b7J9Vet6nbj6HhX2RNKE4qidohHD9kXq7J5NkF2kGkykWL3TjtQjro7PUxNB99VXtpSqzJE9ayMRq5v",
  "key4": "5ZxAvsvCyRmMrwrzgGuu69JB2LoTc1UJjpxxi1RCuEAQWnSp66y5TLKCVWkKzPXhV8swgsvPzXjmtfchKrntc9nk",
  "key5": "qXCMsMUqbbxzQYsrqRWTQ4yXbnBCKRs4eR3VdZVEf9GHiKe7cU8T37LPn1kAWNDLrKbTHpQxBeQwKqeuoirtAJ9",
  "key6": "3pYUwfb9KSGtuGWt1SPibPvYx2bTv8CpW1UkHRFtAW7j8ZdsaTiyQfYQi6AYfVfHV2eJYf5aSXC3gqU8oSdkXf2v",
  "key7": "5kHyBaLbC1Bs6ZDvQ2FN2xBy3eD2wRiEBhYsirAA4aR4kNJdqeyCeLp4BE37YQF7dkXGEtMJPCmCMqHV1GGomFBr",
  "key8": "4WYNnqNkZLWc8XKHD1VymCingdv5Fn1wtQWkGKuaQiFyoedgHtySWQ5P8xeC3ih5FnVHnv3WbNHiCht99G3hzpyX",
  "key9": "bFXyG3QNczWga81aSo538WFQ9vCR8dCrXLzs3R79Cye83fqrRGbC4743DMGwLYY6tWP8trJb5buBwubBzrnzVMr",
  "key10": "hbbFionEHFyfiNEtYJRz1NtXuwyVvhnaLASDRo1vkEdpe8HDWsFCoWdgE4R6RJgVuW86SrW4JmigLT5CYS3X2GL",
  "key11": "2JqJt7H2nZFSLL9zzhpUYYpTeNeQRuiZsYFuFft26BMgKruzBGH5Wn6amt1x8G1azi8cbAUkQ7ycaRyiiYsL23zT",
  "key12": "67nVMZEmP9jyTNiSz4YWqYivA96myxcqEdwkaGVyhfLQbLgut57zJuLzhhdXMspF3TxKoBr615rV2NCn8wQiZQ9g",
  "key13": "27aKyrca2RtCbw2iUSq8fZaNQ1KR8mqvV2Wju3iLPeuW8EWM4cSUTRb1MJUpsw9m1prTeiwnGhFwXAX1iJhMNbXa",
  "key14": "256YjKYyyKbv33LtmwNfg6WHrFtPp1Zb4K9Ve3rWeJ7HEMPxGZZL3WaLcgFscFyLYzGr9Unz5kS4dEEcq3uNGBot",
  "key15": "5mLST8yJnBDsoKcoKeJX28SzYv6qAhgcrYQAYacEEzpEQG6RyWnRxfDkJVNpeNZC9MquL2XxD7ssUvDFRJEbdgbH",
  "key16": "4u1W4rWq2ynAJzPXuzpx7VbKKDXbXEd5NfyqbhRUQEz2ES91chQwoGnH6a1pLrJsSN9mU4FXbZMteASLzHU3cxBj",
  "key17": "35D5sWz4w4skpQLFcjKgY9h3oQSKxnousLb9N6mjPo7xQydaBez9vzA88KHjAn2j8ujai8XDdT8ue28y1re8hsPU",
  "key18": "4G7Gso6ow7gkSzPaL1AfrLsxnSGic9CMJTVJnf4bRo4S6sLBRaZma2j25t1b5JVhpEhwzhnp95uifH2amXe6xWnX",
  "key19": "4NFxZYEKLgJoXPw5NKp4Mv25aYHTxrgNRFU4WBEKRhM5WqoG47xU21n26j5NY85LUr4kJftDYwwBLGLk7LRd3758",
  "key20": "JWfk7vygrofx8767CMJiH2jf1ZUpDaq9BQT7Wj626PseURVKJZXjGHxbwYEMEVwgP9voSzQN9a3JF1ykM5b67oR",
  "key21": "5vtVuymifZvyKU2tpkipnm8moN8Fywu9STESkbEnPN4NEwziLCah18xfQcNGqrVjQPuddRLoqqY6CohXFtnb7cpq",
  "key22": "4a2c2bjeN85zv189PMp6TG2QdgbyneXau9Qnz4e93M5LcV8Euoy9jeWLx4soSwCz9kn7Fw4p1HWMSjCVL87EqzGQ",
  "key23": "4fVtUj5cYGCyGigHuGeoyx7XxLnxyTshHNd8fduCS7EvoPM3Y2XBSN3LbL8D8dFUwFdNzTKuGVvx7Buvfmzh9QUM",
  "key24": "4L7zQqqJa7Xj8FVLcmrWK6fWwoQ5UKqtCHHgtWnyMykrHpM4BDn1w3dMpwnbqMzNdYLQAvgX5eCsfeaPsFt3K9eU",
  "key25": "2ePvLQg41uJ5C3CzepD4oj5uQn7NYgDFeGbcx6cWkYDakUfwqhUoHwAWh3zN8wyQBG8g5mK28T1HhfcVTEoNTLvQ"
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
