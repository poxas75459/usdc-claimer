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
    "2gtwpS2m3rA8gttz23WGN3pstvFFyB6z8ksp6MfYwvXRURmKEmFK4tR5aiXjBCdWaSdtf7cqspgPXFVja74CYPfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fkMo9cAY3wUsGJWrdC4pBqJi4qCciJwwY498d61TagPfZnsDg3QPQ7wZxXENLiHxApqiHC5XtyaBxfKf41krHZM",
  "key1": "3pbPFei4Dxhn6K2s3ypT2NNvGDcA99GxAp9fszbZUYpFVwGRkKL41RRqVycwyUW7D8LxvuhM2QZdJ5KVgv1vE9A7",
  "key2": "31n4kgjVaXwBkrJbXKH2wS4UBbFrPaPoAH2qC3HffdPAZRxGs1GSjrcEhXmQYiQowhnVUGMFkjkn3CtKdnt4fydW",
  "key3": "C2dbtVpTRotGCnr3os3k8CvkKhUEsxqKZNPMfFC6Awkvf4sq41LAerA4GeHXoQUdGwtwEoi9vEzV6tQDFY9HWLa",
  "key4": "4nWL6gBbKgGiW9UaC4NEULcPEtARz37TNAJhSycvhYqb9egHucp3c17PfSntcBfSx1fWTkR6JU2LYCmYNtt6SfQu",
  "key5": "66s1r6N5XGjy9T7PvVMXePqmvK5uiZ46tEMv7PQDeju59QLny3cda9G6BnsQ3KQBVVks2c4sDgH7j8WNyH8mV51X",
  "key6": "2u6CHnxr5NptrQPboFFFp1eRErZmZXHyzWeiKdcPcLDHppKLFTLJExgtndeRZyJ1SqMwonnkjRZxx3ykPkJWiDvQ",
  "key7": "4tcTZiZTW28qnkW3YsVjoUjDE1d6Y1j68usFGFVYgBo21yb9AS6kVvo3igzBxPe78YwUgGLbBjjo2SeEhMmGQb8j",
  "key8": "FD414d7WbnWwj2iXBSWMBmPY9HF5VER3GN31CVkJj4ZapkWhgzGAnyMLHgpXWN56SQJrzKdnh2LN33YpLEDdDb9",
  "key9": "5RBTq559Z7Lq1enHuWojaBnZNHYutSWBZ5UWc66FddgDTATmYT3wPJzWyDotiMT1oj9BHG15Np79X76R7ujxaRFt",
  "key10": "oSZM7HL8E2TLAekUAJSboswLmfWhYuiqwBk83P4UbU2xA1UwZM9ywiXDugq4KNvrwTsWRjT4Vt5f6n2FeBW1oDd",
  "key11": "2FDqoM1Qo34z8fmyzLQNwojCZtg61aqRGF1MPLPQRTRTQCTVUNU912B4Sh2zu5xwEHbJdZWtHnN79JzFjMKd8rnn",
  "key12": "5CHTnZHLUJxAUJ9wjt634LxDHCWJNMsUsZWeGw4bLzonCw6qnxW5YSidUYbj3AjkzmukENq4G5cCRmQNfp15k3mp",
  "key13": "4W4EEnb4T6r8tzFUG7LqyYAJnMMXmGX1TBfnGqXWcpzmWSuXFcTKDc2YVd71b91FRYC6axekoA5Lk5WdCJwNJzpP",
  "key14": "2o7J88R4x6ujrZCyGw5VnuurjDjeSGST5DycCW1jw7bDhPKjnCt6TYsFYZXNDtbZMPgu2A2FWzoF8TwMpTqPuuPB",
  "key15": "2zvm8hi7NGBfd752GyQS6eCTcVAtPU6kZD6VtYxaMTJprHf2K8bxff7ei8Z9a9D1GdBmUuAYn3XU7TmmBE8uRX5G",
  "key16": "USJHMSqwER8egrpxcTMaFnEx8CJfYS7ZTucvRomBCb3pxhDh1W2jHfshVQtrvyNMQRrGeUVZxwr82QoNCb8Nu86",
  "key17": "66TuGcaahpha8CbZFtcgRw6g6r3z6TrNxRdEpAdRC83Ykt9N2aiofFAe53Le7h3kchZbPh3ibgAuTk8rJiKjYTwi",
  "key18": "24sgA6jHR18hX6HBtya25Jf7Z4AbrKUyErnAntoYVPGU4gP6h9VXoNM5Q88S2Gx55CyubP8L6Q7CLfHkb9xFvxTW",
  "key19": "2p6KMvDkoPMEUsWQGFtJAujLhd87TsPuDKczVf3SCTNLeHnrafHWYU3vuq8xhcb3v9cUwxFmhbg6TzBcotGVCpFW",
  "key20": "53QDbzm7mKHjgppa4F1dELJiSnAYJfWvY375HpVau24C1jPhVYPcXcPJkc6UXMoziBY5txLuSitN8hA9f3Ttp2ww",
  "key21": "4xRok6DdfjgddoCpCYmA8yiVo3RxfES3G47XZ2YJsm7JHSS1HgmkBQ7ZyDU9NkpDGdGQWvJEdRgYkHFM9XRMt9nR",
  "key22": "45i6E3bo6g1yHZDsFCkV6XDbDuyQJ46wAMY8C6q3qykW5YUPoZA7z2ME1Wz3LXi3LvpwLimbvQYvV3xPyE4eGYUf",
  "key23": "4DiV4Ja1xsnaU5EgG8FCq3CvXhFX4m82msTEvKonvSGdJ7FeJLcxDx6vFsbiMpsp2hppMyYToa4WbUA3wr7hBEPM",
  "key24": "5jfyMRrGyHbERZDPGPy9PQjVhy8zPRbt6qzSZk5EDgK8eBkV9JaB7CeALUSF1Se4ChL7V3SivNaC5KNdxxcVJg7f"
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
