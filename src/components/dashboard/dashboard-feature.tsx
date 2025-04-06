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
    "5CUE7tzsWQSxTmXG821iifdZtKF7yLxbDbvt36hViYgCTrsq5eEKZbnos2GjD19ChPtCafKLhRwFstx9gdkfF6BR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nU62SgeJaMzZLJXfNyk2q5e71BFGJLxkrBmZEzxFgPQ4N8DMjJWGH6jekUUK9P8QU5qkeJcKLWcpheuAWNZbGpR",
  "key1": "39v3Se6zUUpZqSEH518NSBhLw28LCc2CHg9H37oH1g4VMyTF31amcDzdghEUQ26HEATVerSV2S7v5r3UjudJTrK1",
  "key2": "3QS1RQ2tnCeSyNpupcfFsAYK5fNG3sCPFAmE5cS9Y37XQaYa53wM4BMAyLBjRrsjP9qiKK3Y7CL3p9KeMrsWi2bP",
  "key3": "KW44npJtYMH6hALR883XGXyrHacxLDY548VLEkEMbyGDVb761BPyZYM5a5HB47QWzGRtFznCidjMtB2Cgg6UgmN",
  "key4": "4hqURy2QFHwYcgBg9a5rpaDqwvWkpA7Mq7FqomYhtpkNRd9hdK85rQhmYxfjNdwcmgds7qHJcGXoBJ59wu8Dof1d",
  "key5": "3qatPW2yaXeZzCwieQaXcDVssXTm5XdVVwMxoH2omAhKiHZ9BHGrF58kTQ3j4WPp7pScxss98BNpUZKEKqNf98Nj",
  "key6": "4mAs8sKWStas55ABkUomysfsKLXoV8Xe8m9WS5JFNmKARBTFQJb2wfw7omVb4rgjV1T1KfvTa5NLg3tsbk4tCwp4",
  "key7": "3Kygaz7aePTMjvTRhM5kqWDY3ibQ6tUhCU1hvMLNuBKhQ1S921d28AcTu9mqQvAJe1Npav3G9SotLCiJqNVCfR11",
  "key8": "4rFeUpVPKdVqZDu9rjWZ19zfXwvHCJWKWZ9sRYdLmp1x7mVphqutNu2Efq62hSRg46w279FfmpLbFurntDpdjxUt",
  "key9": "4ejHTwLgFjTa7wrF3Re5mMQr3jTnCzLXpQux1mz94B6zYoUKRw4qihS3YzRWVg9H17QYV3fvcenJwYHW6Hx6e91h",
  "key10": "31oVYYZ6MbaHDE3gQxxqqNwanrgfovmQ5FurnmiR5w9EbL9B7WzAAPR2etPfJMfESASbmyfoo4X9hAfaMq3rBbYB",
  "key11": "25dFaWJQM8TJEPNaMmxSDkkvyiwyX3GrPZuPtbY2XXKzwVgD58AabmniRjQrax5mLeHQLgX3JV2Wb1orxQJaWbQh",
  "key12": "3T57QsqMCd9ANuTBvwKnSzxzS9NtXPmpo3PnsPPGf3U9NV4Q3gj9B82i9UrBb3hX9ZJpTPw7V58AbRQsDrt353wj",
  "key13": "2aquCdE5FFzzxmTm5D3xanWgFkN4hPxQF9ukCmkM8DdkHmgBcPkuz6mBSxnJZJmWCLiQeB5Xc5A2gGm7aCXKZgQg",
  "key14": "3Sky2uaxTZXSDC3BTRfguQF2JZ5N33whu9kBE1ZUEMgCDzFEZ4z6UXtCB3MjxXAnWBxPfSF7HkzRnmSXxVdx73iH",
  "key15": "5jufvY335q4u7h7eHNL6NqvhJtLa8se4KZHi7FQq5umEJhbGGhLVZPPubFEJaFDCxVebEr9gHcDBJLwv3Egah2df",
  "key16": "52zkVacFLJBEABGkfdcHKVZPozptvP1Q2pdNTqUpqkRxDVWkj8zhDP7znLkpUajB27jLmY67fpCxcTtgWwyhD7w7",
  "key17": "5sqx6CWGJ2TzZyhxyZd5QoDnQyqMphCKjW8GA9D85qmuRadfUB9wGWeZBvTa13134d5M1C5NJNP5hcDLFWPpg25p",
  "key18": "32pZrdmKnf1htBBQKEwmrNb2cZY9nv94o7h8ycTGYyNZXSQksXbjtg7yBipAQq7Vv6eL1JnZJftM562VJmRF78Ga",
  "key19": "2NGFS57WtDGFW9L473dsm7uN8Z591xvLi2f9xWh7wuo92MvpFNEoFjzAXwvHDTRAxzx9StyTztC12qNgGfRgKZAK",
  "key20": "4Q9pMEwYdVDN38ZkvKF6nxoonxSGtNLPqdnNE2YbCQh5CdQnVMeNkh8KSKGfX44pSB7jJozbqQhKrYmQEser4Aoq",
  "key21": "2mKrKTbuRaX82QGH8GpbhnuVQkxZMvRm9Fo6vwrctPsEAJ5fD9nEfjNz1BKf569ty73yBsAcmW5MkJdWgVBRD1fT",
  "key22": "23Ya1LxnMv9qENJiXgU4zDS4YybgD8ozDLFVXPn98VdRv7KqpX4hxLmTa52uenyTZAWUbZvQMZxd2FAhyGfYj6yo",
  "key23": "2fqCGQ8aGn5WCxV28Y6AUezg9dGPjL2KXgtRaqJg6JqC7mJkTX284GL1vWW4eicXKNAn124czXWJXkg7zgiT6vAc",
  "key24": "3RyYWjepmMX5qEYrxMKsNfWYYMUjExicjimCxZh2kA8F4vGZP8SqHs4HpCt8bc1Pn2ChY6oGHY7J1F8WCtJG6agY",
  "key25": "62KXzyqyvJaBySJQYupSNKPm4kxTwFV4mG4UseRnEXhiuMzXnaau4BRgsYDFdVNEyBiGqWfGR2W2KrfnUC44oSpD",
  "key26": "38GMxKVNCNyeU4UfnL8CMuQWc26tTjWWoSRB6vSoHdTpDx9Kw2FCUoZod6mZHCQUGX9fUwE1hAJqCLJiE4JSk7AX",
  "key27": "5GgMvpXetkNuuyFqyZbXpZpRZZEd2WQ8xn23rQDbs8D96YHK47vjvQ4828vDHCifGE5LssepXkvZ1xRNjiN3TXhV",
  "key28": "65rgwENnvrbiKbZin5FgUmtBLvUUwYCt9uCyWJvrJLBdJSs1MPkVgRNGya69mGZQgpDM86NUmRwEArKMzsU8AWFp"
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
