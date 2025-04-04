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
    "3JFEQxcoNmcpayhCB9jbHxn4sJ8eRGjywACDBgNrKozNw1FwSPDW1KX95K2wUKbAASsv24zHbTnzeE38A5eYDRSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NXrD44ueqhkzbFqVSJCQ11C43iGCaShADqGSduMSTe3W9s9usRyJQLvEMqxZs1kTWCSkR8BwUs3VLHHW5EMewQG",
  "key1": "62brE3TxavQwwd4BBHEu1sCLt4J4sGtEqEdtCtuwVqECg5ART7N3UysjCr51drspao7LhNE7wVdUJTiJDFHGkzSi",
  "key2": "5fynrxXyAQ5ErARntiGgNTstcLVswiCW2rZsULiZLshTRxbvAuV6FewaDAycgbBZW1yomYYE5NiF17u12XePW6xz",
  "key3": "3mSKTdQYjtBhMr93JsEQUbrJ7MR6fyMkFZTqaPq2KwvDU9kakNAL9WGj1Vwo35TG3C61wRDyeK72x5ci3HmcxskH",
  "key4": "47rsPZpqs4mu5aVjAB3RJhyCsamJQyJv3f4TbFsfUcesN2JzPijf9B25JL1KPGEB7bK7nsRtXXNAoJs5HcZ6CKHu",
  "key5": "5h3YDUjCkoyeYfTsq1qDkcipezQWQMTHeTsZRMKAgUwAHZWy8HSBPTW19kydQ4txnqN3pApe2VpbWspQCJxt5uqk",
  "key6": "5WZcq9z49hjW9mW7jqRPrSdJZuBeqBjzou9JoDDXL7YveXrCEY9yZejBuY7NrQ6rBb9V3rPs4do8pyGPHVNNKXJM",
  "key7": "4yUwaeDuMMhpAzvvbEf2cbxB5xZTWRvm57UQ9nux97qYQdDC6mEE3AYna3JMSyGF11qFrHuAuWNdLTf4THDem12E",
  "key8": "jDQYcEGaYcMa67Ka1ASSJNRDQbPbngYohWdVkVqRQH1of5Wa6s2htopVZAa9zqR1nV8nosqS5S37d7XoY2mN8kY",
  "key9": "4VCB4EE8a1yzMgAxzrrjjVwemYBbztMAJE8KrFmM8CGcdBioP7vZs9UbXfjtQrRT4raLsHt56PJFLo2Uh6zSqRtM",
  "key10": "2GP8gWE8fXi7URV1TwCWTdToTTu4ZwizHXBQUiyAfBxYKdaK7V8RFyxUZkQkCMCfdcoHbdgBveHTvTsPRy7qyRyn",
  "key11": "2Uao7zJ6bEehZxE5ds9PHr2fCrhC1GEswDxkdETyobFHTJw7S4WgvRgowiV92dbFMhCLxtnSz6NJf7xCKZ7PFcTV",
  "key12": "51FXf7Xx2rw29GtwSpMNX2mUsfHyHGb9EbSDgMMzLuj9p57U5M7JSTTeKieAkg7UF7kremL7at7ErPBmH7Viakzy",
  "key13": "rcAcdhYKMdbf4wtnoXzCwf1c3n8F1GZEWqKzJPxi6WTC4ttyyLHJy3of2eVa5FdaCfsFTmRpSVKu8QAqtatf4Cp",
  "key14": "3N8eSxT1gfPww5VUEM6ccE4MmjshvdJ1TaXG7uocB9dkhFSA6sH48981XeggHa1vPbJM8yMFpuDcTDm6HEuWuUxq",
  "key15": "248qhsTRm3aCS6nFaty92tajN94fojqw3vqeCoyN4Z5twXwcnMadnWJz4CgmqTCXPdf5AbBPu7SV8tAJw58MioKi",
  "key16": "2Ce2iZWJB1hWHz1UGD6qz9VE8vi6dw5aKVS32Z4X5XdhMkqCtypbF47MzAFiUFdRL1qt8P9e3nJzzx33wJi7TWMs",
  "key17": "2JR4MUKn8qrw2GsjtoZWyXJLtSu6CgQvTtZfyHeqBLKoxG3vHyueX3EdcZ2sd2oMSH3QYCveWBkhEhRmMUWBgu71",
  "key18": "58eSvujbjvFy43JWXzSHeotn8oN5tn9HnFcn22FmpMB8mrVJkH1m1mK5XpfKNEP5LYwk9mmZ1GChoZoDkT4KoM1H",
  "key19": "r37fYTtmtUkeCd4muFGnyocg3ATtaPB5m9Fw6dd1K5nz2fWZ2bZYawx9nnoiu5A6CRUSiAWmPm55jY59FjoghpV",
  "key20": "236mQgPVAt54aFWzSSh8g8eSLS5ycZHRGhBn4pfiW2V13VMQQo9Gf5cca8v4SoG9o1RSUKcTTp8mEwr1mYcqDhFQ",
  "key21": "49EAKqVMKoz1ejdKxNUjixc3a5iywFHfQmzTPMbH5VnhfYDU2pRHd5pSFaDVJCkggj48uZCTm3PhNzqme4aGpofE",
  "key22": "4sKKw8qNXuMF2zf8ku3xpymhtuX6DEsPYodbDWoGfedpbQVAJ9c2Gr27kGUdTuRJbnboc4zAJ88XGhV7trKtKZpk",
  "key23": "4LhC1drgQKtJhrwn7jU8YpFMB8kPBNS4sYwUu5oNDtwfamdTsPKjEiMaTu6aqfkZkbRWQmehU8VoXjc3kFojc4Ui",
  "key24": "2T2hwtRHUYvTZN1aj8ezqikwPP3MEoa8VQ5mGsswwMccCraE9K33mrKieuCPjcSuui8sf6ZR6dwQS2jdjdRaY3ZN",
  "key25": "eznFqh4vMGRyb2cWycjFv91FkgB4FXRQsbXga8rJVWi2yQ1WJhtVUxjSAsu8cBsQLC6CN1cDVNtZxKUHq6FkCZc",
  "key26": "42imAot4Qk2KgNZFBUB9pBJrGtRvZdWbL7CS5A32BRHxZJFZzpmN8soj6ABvEmEtWRfLptjzWwxFLMbrkufVS2Zm",
  "key27": "3UokdZPLAVwbWnuqWtggxKyaA8m8KwuGAoYGm9vJszkAWyrGDa3yz6et6DK4VHezfkudrRRrvBui6wocnKs6JY95",
  "key28": "5Q1e76uBcXD7zZrSvQGMY6rPubpUb9gDXMabAyrDu5u6YFxxaiiFQagu8r6Z1XWk3yqig9XqNtbswiK5ZroDBuLv",
  "key29": "5LQShUo7SDrRaYpJ8FdQ8nHFMijuYWtMqdraesF7CPw5Fjvuqs9LYgQ4JvCZcz3mpYqsp8NekoFKgXrKmELkTTz1",
  "key30": "3pBFvx2ZpRAeFvJ2WtCdaxoHDYb5qBckcJ9kLxjrrixuYJznbTJwoRUEN9nbTKHHLBghsKg5pvuGTMpvC2P6HHg7",
  "key31": "2zHbPnAtTcrmsvzkakLuFz4NG9Zaq5Co2aBBvEowofm4RZCLoN4tmBsezdNQVdJL2tUPRC4URLEWEdGUqrebxZLr",
  "key32": "3miU68hKw5jVUCDfU691hHbkeNDSTe4Janspp5wfqWqxsvgizWSnJjJrVZCn7q4pkttxWAd7j7L6KXZ9Py8icFGZ",
  "key33": "5hegGmrVuixAcTdkANT3sjZhJGt2kxMctHprwZ4Lq8jXZGyVfDX1MBzvzmZtme6NJ6v27upaHrHHeFZeZvuE3yvb",
  "key34": "5jVmo5wiGvkELKHTZfzrojn4RTsoG8JZydMQvLRCrwdFDyQ1mHQkPEhJWYYARVE6J2wcj34UZJkaGgCNNkoF6GS7"
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
