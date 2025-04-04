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
    "3ab5qDAZdXhp3tqS9KykUsCRoS4dx9xqJHbHTkFXnD5KqugMjSHiAgRVQ9g26Bnw4VawKFMXNP5JjtNG3cAho5QA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fXN97SUn2VaBmGt2uHo1vkY98PjjJvxNfSK7VejHWxpmNdg8RrwcEdmKpay48cizvyjb5eyXojMRFxw8hhVxZPa",
  "key1": "5ArD3Ds1HvWFprikvAnEXVDtJR9H3RScfpbKjWKziyXi67Xnoz515Nee7SEu6KvgXzxtwK9SHkgzwkRrEz4Ee1sr",
  "key2": "2zXkW2kEVc5q8Mka5XVq1qg1YzDruuaFcHiKYRNuKkSVp8T73aGwTqQAhsdkFJGrJG6Mb1NHfQgDEb2LseLxV2u9",
  "key3": "67e1VXF5sYQY3Tp8pbdJsdkmYEoLnANcF47Me2GqhqwqZevN2d8VQzskyHq7B5CWErxDw4zXoyDtHmKpNvCV9Thy",
  "key4": "3Dp5LpXUkhoNnA9mE5tNt5yhBLHBHwv4jfH24EYh6VGJd1LSnBYBrqT9dRN3GmutN5t86kX25j9G91s5occjTuCz",
  "key5": "46o5FAJ9DaLvkYr5cqgkQ9hFCynxnYdRcx7qZU6VdqpSjSkQ69ovjoC6v7DxHkvDyyuR1pcjYivFRXsarizmb8eC",
  "key6": "23AmTdpkVFVcHiBHGy11Czi7fn7TnXWiL6SZYhKVh1xbkrvFVEwB3MjebWYPdYcbofPczkkJLpWrqRvrMyWxzHRd",
  "key7": "3YDyi1pbqXLafSquZfPAghU33XH65JyyEp3tFR3jwmgyFZiKJR9n3kZUogYUZuiPMim7di83YX9TEdTBGWLJwvz6",
  "key8": "5n41vGvKFxPgvbu7yHFxY7CkYAmqS48zWhZa5tGVb17yhM49LYAdQ4yBBA3KBQJxLtnLzomCxBjhLtkK5VPBAo4b",
  "key9": "3VJAMsNsvxbssHAutaa3TyMh58dmJtyZB9Hxr3xXPTXkTsu6v32i9Me61XuMMtPjygh9x1kq4eeUHLT9eRWMFfAU",
  "key10": "2FznUgD8CRWt6SSau6cdSa5Lb458C2a5ag7tfcR4LjHsmgSqjE3zLa6p2wkxYVAV2h2hfuodKQuJYCcmhNY2WaKh",
  "key11": "5GikTHTHcYEFUQ9aeMdopAYyKxB493rUJuWQ9e5j6erVhZ1yajSQ6kVq3GzhRrCb8pXXghfLzbE5HFXcyJyryxUD",
  "key12": "3ZJR4J9HWth97wu6qmwdra4XxqrCEZsG9BtuSfzWGvXt6Ax63N45Z9yyZMpn2rpVAH8UcoUNdALQyjtCy7xH11ds",
  "key13": "2fYY8SiLMk5vKnhDR9nzemsfn6wKvov9nUNkrp6qRwbGfurxJh139HoKDJbk2YJwtgLBALUNAbxkzmvM4W6PjrPf",
  "key14": "6266rD7KUcoro1zNCNy2ACGuhs5LkyjcWP1dUN2eUh5h3PnbJ3VJuDGeMF1fCALhBwLRY7XUGqLTh7hJeckCC1FN",
  "key15": "4CukcA1L6Jv2khcxVWBBphBgVW6L2nMbtWhCz9Um1qmhHZ7nf7f8K1L3vrPwtX4rffvSEzXeGh4Zon7LGdE8yqRx",
  "key16": "3g1XqtpVc65n43yn9dqA9B9usGEb8a7y6e376HDk7QAE1nqsf37s7Dccab1nzWBH5SfAvBDGNZxd72Qecp5rFQSD",
  "key17": "mWBXq3TNLgEYtcZxX63BiN26Fp9pQ2sNzjTeK1N4HdDkHz3PSS9eQzKv9jtafeH5EFBC8iXH4bTovWFBNZmy5oG",
  "key18": "21Abcct5vpCY5enm8Ynure4t5HVF7pkchZoY7DWAJugrEktCFpTCYYGwBgomaFmCGi4ZW96SNXNiJxC9NS4UNoF8",
  "key19": "DMaN62LQLCRNrvedjhxuj3NsP4QycYgcaLYM9gR2UrGJ7RZ3c7Hp1uKzuocWeZoWbjrvWxw8wWwKs3hUFHrJw2B",
  "key20": "X4jSEGcyTmwHBy7iSHevNJ8UD5y2vxFrq56L144qZLYcLSk5Wh1z8Hj7kxEXy3WcoEqFe8Lu1uHfozqvXd3nrDv",
  "key21": "34zMXs7u1U7AQztLdi8f7ngwmzQDo1iAMLgYhRYVNhYtKkZihuKS6avehxrSVR9i5ehYiDnddDpoUaMSQWppqh3n",
  "key22": "3zqYx8pJ361KnWvX5CKsURZn3BCS7GLxUsvBQvBFU7g173j9AgA4nUCk1vjtZdyYZBhcsHhYonQHpEH1H7rU3KUw",
  "key23": "2UcBTnMFdrcgG3fVRfNDQdwwcRhX8gNKKkhLfYXSBpoWohSfzqiUAePbPsjrs41N9EyvThy7VKH8ShAexbJCz36L",
  "key24": "5yVpW2PXLnctpqqHr3fbUoby1ESzP2LeXFC8QQfh3xkY7cEGZxzoZZ13QVDHcVjkQeYUS9fYXHky62T8DNbA5uc4",
  "key25": "624GcREZoDS326oDPRzVLszS6gwynNEZsUthkk3jptvpM9Au1TDfTVHrDcqKpCsdzuiqpdFX9x8Gtr6BTNopSNT",
  "key26": "3TdCsLXVL4gUw8LVvD3vHBJrH9uBBsn6pqYCn7JtGoCtmvz9qEhErzykCNCFVYAGodX44PzLmyr7DHCjfsZNiQ6E",
  "key27": "2RpF2GwE2st9KgPpaNWMe96NMBEyKe3iAPTVm3YLXFJ81LB6vJjmEKhLAMMGC69VLicy7vS4DwfAWNNGMWkv7Nzv",
  "key28": "46495kDemuwTHbUwdACEZrnVPivuBRgE2eY46dW6aNWBdHEWPoH4qvj49zQbyFf9T7E76gBS2nLvLfAT2yxFsbnX",
  "key29": "5fX3S6hkdJzmX1tApfH4A5nCkGBxFRQL2T1cDQn8TdeyMetE25SgfmCbo2Fqj863JcLpg5gCYqgYP7iCFifDBq2Q",
  "key30": "cU6rT88DNejiSSHzrPCQVopE7US4iiGYbLy1hWhoNpYUjqjP3JCMSkwidR3YLAf9BEfKLcJ5e6FmSF5qCniBkLf",
  "key31": "2T98a8HhEedX4mh8csT8eVq6dyywQBw7NsNaHKuS5zXj3NxpkR8iRdbaQJDPAazrsXmF2Fs3RtUJf3ddcMECgc2L"
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
