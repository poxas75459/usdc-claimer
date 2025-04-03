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
    "2ukDwcpJ5nKtL5gbqJ7mPeevzDcAtERT8KtTS26opYmxZStGM3A1yKZzXGGS1nR2akr1QcCd7jwhW8Nx91DMYvHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45vz42hDFo95NGPQtT9XRPdrSxwdJhTA1aqdUnYywGt2QqZkNbBQWbpJ7UmMazZk2E3naYqrEAnr6K5eZGayKVbi",
  "key1": "29K7gPQjNH4vP1Z14dar5KbC6C3Gbs1zY2KW3T6mwLZH7RBM1rJnDc5WN3sMFpvcHY1tavvL9JqWiddZZNTkV6WU",
  "key2": "5EXdDN3iW8m8VyAPsQKFj7T6cNjM7VKTj7ihJkt1ZibZgyvTeRa9N47sFtV5ZXYGw8J4rVGATmL5iRDrzP5gZExL",
  "key3": "325YncgFhtewpP77n6rPbQQnmBKot47R4FTrcPed2rniLzvmb3DaVYatXybMN4WxbyjAs9Xv4VccF6oqojC69HxM",
  "key4": "2vq5MHdhgjNhLUAgzEYG3e5wYECtvQ2aQUwCXuNqvuHHe3uomP19qEoGDBsVBDk8KHNSWPMHdiW8DaYtkF4QZVf5",
  "key5": "p5KJKeJZyfVGrJoZR8jvbuZwE6JRdYNTBJCY4kkU5vQWS12sZqfm5HDsEGYDssecM93R8uX2TrEkRyLidVjtzTH",
  "key6": "4g7vTHTTc5X9yBaYe69A8frPb5qehRQh79QDQjevsMXEmVm7ki5qDSYSRmEGtzHu8HrqhjCjehFfJok7ZsDBjJvk",
  "key7": "62Q292d3bpzvNayHRwWQREkwzpNvkWeh2UhpMjnXn1qqWzjqx22y1rrTibc1oNUQjBmJBUC6gwLcQd5EVSAfS9q3",
  "key8": "4gCWq44XxaWUNeSMRAygaFJqQCYTh4rDvUtGNBrbZgmFdgjGUq5ojNK67pijSsrJBaH4QuvJzaRh7vWNo9d6VhQ8",
  "key9": "476QxRXWbCbh7MVpDn1KiEp6zMmXcStt5dwXJ8CSaaUpzxNndMYPj8JB486BzeAVxAa5EvNCcbJJcY3EtHU3NQsi",
  "key10": "5hN3RZYq2DXCpHxwkb981JCTAGys7R7igdPJgCYcrGgSFtumJNM8kTV6gGFS8XNx2oKPZgdJznYCMee2s43WjBKz",
  "key11": "2kRHKouTRAizpwUShD1zpZRmeQXLD8iaSXcBp43cgTd7is8bQA4MpgKCA7SbXJYRX4qvSiVaNQeAXhMkGY9NoqiE",
  "key12": "2L3VtKPeJcEjh7sWti3YXCC2A1efFKyLc1xh78fQm18dZ6vn5NAnbeeWpUe8t9bqnFxxidfnvgKEZ5abRWdkdDED",
  "key13": "58rrZFqXYeoiF4AonN74uvgty9MtKz3uEFrmFymDwuAW36NAmZ3TWNfixAjCtjBuHkJaKvvAC1XGQ55uTVu7khzR",
  "key14": "31aiPG5yPiCFDewKmpXxfgVb4TV76HH7sMRsJ91iWri5VKTGVtUtTaaE5rcksQcZD5Uoefg2eNrrpEA4s9Zx2NEv",
  "key15": "4Lu4kJgLT9SY32k8Cd8ZTFi91qDmJPPJKVgaNduC3QswxMCqgjyWF2wzUFFAcwiHtsXmjidfiqGQcVkBXwXUsxFQ",
  "key16": "2cpFK7xwbyHnQXac7Poinm3MUD194TaxvDkuxdxDYx9S3gzrA5dTUA9vryDmf3kdRvcgJnwhDwQr4wo4UiW9BT61",
  "key17": "2xugMxrsuc9UcGEkHQ52LE4jWAdJoKUdUnXkqvpQsxkEVBeLXXLb5qdu91re7fPsS1xCDWnCDEfKaa8SQT9zdSpw",
  "key18": "4VkonG2C5iwRBQM6UqavZzsjR8MdvyCtdELWpDhLCPmzaF9zad1s1uEeWw68A93UiBLMeRJrws9L4ZUmmmTR1d3P",
  "key19": "4E7CVEngNyokoQ99YZDZVVA6jRBDmnsW4x1jP8yBvvQ15U4oUfdRUHoVdVTvuUnpyJQfP74rg3AoYHjPWS4w39hn",
  "key20": "4DvSgpeWpDmagdMRoycbzaAWrYm4Uz7UsrtswniW4BfHnyezZ9WEnCwYrV2s3W5fPHQBisNgifTHY6WPR7DQowKP",
  "key21": "9RLAFwjfebMR2XmdvRddHdH1QbuUKW8k8WFh4FX5mjvjJoHw8Pyt5B9Gag7x9uPwZ8USfYEdN7NtmZJm52ozG67",
  "key22": "5WHqFSdT79AHPAmU1XxfdY7zEWXAmcgSpPNh2ubvxy664DXN3JWBuBZZ7u5ofcPhcDhgtpPb2cgxHTm7JPSZMkWd",
  "key23": "3GgCALZ3ugVmZLUMPXDNBirLQSNb2BiJXKpAnzrGZ3CxXyWW1B3JuJNCkr6Nm4iMLPiVYQeBGrGpTha3HMeE4KeC",
  "key24": "5tgm5y3ruiXQUHwqRQBSabtCxd8692LqGENdvnH6Ehwc3fJDME5xFRAh13A6FXMAopehdnaZMunAfkWS6Ln25RmL",
  "key25": "2E3DE36cyiWpGQMWWGmAhL85ue9eCGP4Qpb9kng1cbRv7Tkk4BozLL7Ef5gpL1pxwK9H5A5RAeEooft73yu92xpw",
  "key26": "2K3LygcXpqKHtdRB74xySzbJNTpAZqSta8Q9LWYA3VjbdHiDPMHpGecK2syxx5f2HqFps8AMdw5rRf8T1ExUL4kw",
  "key27": "2YKaXi77URr9f8Y66yESHvL7cxg1hXcRyP4UfyCyKCsAycJ2TJ8ymybsjpUXeJyohQ5hfqQki3JafhW9ShTRbgis"
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
