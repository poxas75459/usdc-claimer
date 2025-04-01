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
    "iYAgosg9zAu9kBTrSaNfRNJCGyPgMvCs7TWHw68LkoNFuep9pH9iEW4uaan2EcohuaMuT8bRhGd1FSgZZsEqxXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ezooBu7gMaTH9db4pKXAbJs8BMs2xaBBb93cU9KEiJpmqE6jHo8xxxSjWL3sg5MB5Z6NLsBurBmeLV5oVMkppgs",
  "key1": "2CpxuMAXLg8S7h5JZjhHZbkJUYc8KSh6kWG9kDi2W6xBpazG9tKKtpuqE9No7bqi9xqucRCz3XxFvbGmeF4i2R4D",
  "key2": "2cnXtePC8JHWtBMYH8SHu3FawPfkz3rNeKZk6NZEwibGT7yrWYYzS3yNSJwPARhYxdfSHAGHQExWRnkApHF9h4SV",
  "key3": "2Yn5LCSoMx75sh2VhcePq6NvqiWSwJnRk4x22oa9ZL4H7iMQuXE8NYn5PDPZo6EHvHmVaNrRHs5CL2GHj6Ww7i32",
  "key4": "5B68zpmPcxRfaTKNrn6r9QMPV7gENj2nM5tQybH8ajjkpqF4m2Fc5DPLyt9RZi2ydPtnkJ8MtQE178Z3PmdNTGvr",
  "key5": "46kFMEwjgNPJiAvvjh9fcNqDZCh7VXr1iMEQA64T25PXxAg6QunooB4nXUiVwC2c4j5Tg8nS1K9S11VhGH8n8qcp",
  "key6": "DWeYY3MHPdHjtmeXgkJxAyxa3oUwMGo57zGaZnq3nQ8xD5aTi6XyTmF2QsiVVkFehQ6RpEgyLYASZDP3Mi1kFRq",
  "key7": "2VdM17Xmf5HkCGHXMHWGffFDYj1vx33FirJybEgo6x8DSE6Yg2eXLxG9qdRQssR6GHuyXqCNq1VWYpxszmyizBkj",
  "key8": "2HB5Ar1CqCbqKQtUnvTomS1A7D9sJiNo3ifMf6s3mDC8HqSGHk5eVfmNdC2eMAuzzocTum45vAM7YTwL5Pqt7F1F",
  "key9": "48fUtM9DvTWK8e6ZEZdVjwiwsj24Vv21Ndv1vNqRi897qybgNSFJywa1uEVtUyjPfUMjnmUqR4WLQStPYiNNZr1G",
  "key10": "5rYNbSQabtnQe4PccBkmFiRDWxerKSueNAPBhtWASqR1xW6X89QfgkE4CopgrmtdyS6K36eWu8MgSetuGZkqXApn",
  "key11": "2pLCn6Lt6kdQ5ubJZSmjxzomLR5Bi5VoqugJV12GeHabMK2HRPtMD5qbv6nYnsRtDEko2dsFejJmgMTZUJvAuyW6",
  "key12": "5i7R7DjLKzqjcmBb5vV36iQD3Gt1TicKyerzMautVqbR5Wk5A2Wu8q4CmNSSUxRp51JQUTpBwzqHEpnFJ6vftijD",
  "key13": "dUrhXtowPkR7QvRydJ1woqNcHAUJYDsoTnqBXxFzqjAV9AGkUbpsoFf4iWtey2SNyJBfp2o9KWuh9BSo5uLEkHq",
  "key14": "bA4w4Vv1fWCZgn74gucxLrFL744gSqR9UrDjgqym5bbEG7uCmUdYMxNxqhzm4u22JffoZwmzUkkgC3MHTdtZshr",
  "key15": "gZRbXtMVaWxkvegG4Gadpryxyh4fN3fRmVCJv9Z5JcqhJH2FhtsS7HjuL8WRcEWTMpgg5Xpq5QvPJ2ZcHCQvgNS",
  "key16": "3YneFAAK7nWFRCWyeHRz3FziNAjygcWH3G8nb5CpvFTg4dc2D5KZAnFAiTz9KaiRH7ZTHb9Cc7EGnbqU9jKdTVqM",
  "key17": "bSR3LCWnSLTrd9KXopWNFB9kED3yt81NCyQTNE9ueqNtBqmo6cG3eQF6mWVCSZWE2kPNBGxXyTTLcUXYZnpDhLQ",
  "key18": "5HxzU3KRrb16vS1QLMihRXv7v9LPayjVsxCSBYPHkbC7LG8vUpAVu8UECsejPz2xEwDsRg1AK5fzCkpnzJAFvVLD",
  "key19": "3tMMAs5PTnjVMWUqBvjFeyGjNJXpCZDmtjujHo2ge44ju679oeUW8cDo5goXP9djZbJLc5asbxaffhUCLQYhCpL4",
  "key20": "2ojGSsNqjnRwP1Cnba2J2oHZPwiXzdtRSaYoSPY62Z3qVy4TGQ4qgrWURoVXDeqL6jwjysj24opm1F71uhSAEfwi",
  "key21": "4vCvTaCiCpvpc3X6rquehW16LoBdJjUnAkVP9y7xd62aa6xjTDuBaGypECw5xd87GyRRvJbATY1qcsCHRjnN3dWk",
  "key22": "42hTUXK4ygDYnMrm5sMe9xjYgxXcMbvkyuwQbDQcjZ2LKDjEtCXjJ5rp8sBUftJvQAJWWwNmQphcCs9YXCuqMjFr",
  "key23": "2K796YHR3jsaHqCC9SpdBLiLnybXuuJSSMDTUXr8EKF6yJuQKrMkTXBKXZYSoXR7mDia2tnnYzBFeayVz4My46hs",
  "key24": "D9vMNke82a9rB2v5rMrY6iEamqPpGEJvNahTpWkZrmaFqZYBL11gq34QBy81cvGQmnLZJumzh5z7dj2go2j9ueQ",
  "key25": "412iYDHTrwYJvGfrFmEScjTAzcw2sowPF7phNeee3DjhvPJs17SfUtzceThatUPgk57mfjvt2EGwQDGJyKePvRdN",
  "key26": "TnbTiKaCEnXcZUptuA8WE1ud6Bjok89iW4P9L1rhUMbxt4141AB94oDTdf1zV4GCjQqD1kJgZKMhtbAuTLixYUA",
  "key27": "HLrBnfBYb3to4CQB7UUFifX3yhsBYVi57BcfFxH1uJQ38tdDNpLTHQBupv6n1dRGV8vTNe3pJDfhFS2FuL9BXES",
  "key28": "2VUz1BAGm4rnqwtR4wbDFAnrk23JmztxL2qBw922kkvrjmhScQssyyDwpPf3k2WBqxTufzDGm5XDKJ1xxW5orLbK",
  "key29": "2gx5XLAoDqRUJXKjdstB6ZY16oco2Q5NmN4EWRK1qdwosGYj7PBtbPKEQ1FLLbisCsPq1WPchLSuPpqS2uxrbJTc",
  "key30": "2xpiWEZiU8Jehekf4eEYMVXXkavogpNSt8sBgw2UVtDioHcmXnFDGz7P546bNd7DBtujZ22zf1Gv41M7kNG8rQ1",
  "key31": "2Cx4saeAcs3D6tHHuyJtwiJaqRjY7tjaSnZpQrLzYNZikTu9DiMrRbQpZwDhvVqVjToZHykv8QTTmp3xhNYJWTi5",
  "key32": "4HpqFMJDf7CU7CWHLRUkr3cAaeJPb9Fb9gQsMCQdr9txNvjUZPN6BbA6Cs5eFVFtHXAWT9asDX2Yo77LaN2M438Q",
  "key33": "3166yjGkpaNWzGn7xjmLQpASFyL8wFM8DZSvTmWm2mDuqwjQv4koG68q19yRnFmYqfi3hZPARQvYA5NQJ7oTZHKq",
  "key34": "JZXQcAweDGi7FN4GAE6kpDAxZewzWMyLwj86esZwNpJXCQDkHJAUpmau5f2U9bErjqacpdgNe5XM5aRvzW3Gai2",
  "key35": "r6VtJGjxAZFQD7tcmeF9kEF3FXrMiibe2hFX8avLMURiQ1r1mUwt8iaVtQJ1ivcns1EWLVPhvSabWNHBUXMD1P5",
  "key36": "5dC9yv7Can4u9dmp995bEKGeN4Z2Gx273xmiT5HdNYjt1Qz7VfEZ4NTMUhcegnAqjSvPLN2EBLgG728U6JaxRnRP",
  "key37": "2wG3CGK9nXbcsXFVNeD3TBrtvsUaZrcUv35A3xufbeauLnK7tAoa6gH4tLKffzF5oK4wJ9Uv4v7FdeYoLkyRY8TG"
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
