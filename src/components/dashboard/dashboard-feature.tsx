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
    "x8PaJ7jxjmjSvPj5TjqHvbPdFnjbw6VB5TdXJHsgdqLAHrs8X7FfoRAWR79F7p5bzXjfjLWRFnrV99oohmsjYNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SYo42KAfDF1xZFZ96btzRKoGdu7ruBs6Kv2vMk5pTm9CxmLGgjdyzHwe9Xe4nSDPPvNg4z6qMXKf7NX4TksVMik",
  "key1": "GV54nCpHdnwpHzgUWvHo99NcZfGtG6dpQgcbmDxPAbS92e4MvMBF9Zwa4nF7XeUnnFDJPgauR8mDZnezg2n3g58",
  "key2": "TrvZEqTsxZ9rpsGWtZ3918GAQTh2eivaneF3vk7t4mPqT1eWf2VYefXYV2sJcynJdquCLCLYNebYc7ZiZerCtjX",
  "key3": "e2youpQLn9M7rWZmfcxP7sm7KABm2w4kWfBA7b1dwRJ4JFNcVP4cx5UDxR5rKMkYCPZQC9mFcb4GaK4MGZSzLLf",
  "key4": "3CsnKPBLhsHtVrXoZLQviT399Nv15CmWZ3fUBJaYD89XDkAVUWUGpc7mgAqwBAghqwtK36rEGJGciS9R7s2wfSvd",
  "key5": "2ir3Ej9muiQu38JnBEzsyaxNVHLcioYB7uNKhzV5b2GSjRgR7J7ig6MgtmcQbU6mF2QKpbjTCjMHLffpFDuf4oVD",
  "key6": "78mRahAkq5ynybL78ewwr4RV1vcbxinU4ryZe2EJHJQ3e5TkTtYHfsk3F4Wt3Dx7bpNNDDKcEaXPxMNr8dvw616",
  "key7": "54KQKTvCVjTssg1r6EYJ9Hr8gd2Jmnp9rxvnVWcT6fhV8XFJ8U8C4o5mvEkjuRjBsRk1yRnp5A7h7bNsp4XbTSXi",
  "key8": "3aBSWo5fL7bdz5PYQb5xBSKQsRtHLtNhxwKc2TmL22tzoxuUdxeeGx7PNML3UqxyKTvL3rEvh4HDtD63dASdsGKm",
  "key9": "2GWtWdDZmrZ5tUGXrZgD8JXzkF558YCg5yVvUmREji4vzvxQ9CZduVLn89Ee32VRXknLEj26xrJ8hTeYqxC2TquG",
  "key10": "58psYyJc37X6PyKCgU4SR7MJeUdfQh1J3aw7HDeyLKNVMFUaVzr5YEvyjQ2vNAev7uUxh7XMMpdk2xKBNFKyei38",
  "key11": "5WMgtJFoV7TeowB7pTKn7NR7zSrMdgvBVcoEU8ynXVGDofDcXhcFzHY1i9JY6hPKxLYbfj25vLosPfnbDpPo6XkR",
  "key12": "5xCjS97us2KY2VjyrHQAxC2VBM4983HhMMx7rJ5F74kNoKWms1sFd3H8SE3q8NgYW5j1yyGtKStKzjY541wETPm9",
  "key13": "3ukodaK1PevuypcYPdfNQsPdg8mV2jzAez2wDRPHQ8Ub8JVpfBHfsTmWMy1fmcsmp3uBemzU1npiCys97UWu8Z1b",
  "key14": "n3EmskK2GMjQuKjVNXNmkhFhDqCwrvkDK1CT5jakXwWa1yKqtaUfVnnS9XfBUTic4EPYSqiJLqyZrH8KFKtt8PB",
  "key15": "66EHDrvm9Jiz23ufkX6mNpcdgnEBZrp6uf9Gik5PT7M5ac6SDB1fBvyJ7upy7tfhfnz1vuFGZYy6RMPPYgys1wAL",
  "key16": "FohxzkWeBbVoRUeogRH2V9d1q3kriLPjAhcRqLGPknd3M2Y8ou8wGJnztsmQckbBJ5dZMz2CLz8NauUtSHCSrvS",
  "key17": "3fRpkEPu6rF634z83kaFQ3mrxXPNptzwjTdf7fEPkznFuz1DbpmKtWbgeGYnL79CcXLCxYsPVcLTGLfdUGxDeHjS",
  "key18": "5TZS7P1BVaxsdG4iuatqZuru9wPMfV5ED3pee5PaSixFGEgNbk3qvBVLmTVogTnxKZWLXM7drfC9bSStHuDFy4A7",
  "key19": "UvgMNumBcXczMErciYpatrvYm5zCCArw2ydZqqBWHbbEpoGy3xyzFu7dknL3iH52DtHbVcA9ck3gmyR74oEowj9",
  "key20": "3E7HrfT2x7iGCWUR6H26AnXRNyQtc64LU1fkzzQCb8pocq9UpY3B7AF5hSKdHYQD4MfRSbKFb7qeShMfR6zqJckW",
  "key21": "5jv9ACv9uAAyE55GtngLZUu4eFnvtrc79um4E4jbsDPDpBGLPHqRK3NVBPYHbHWLYnpsUKpbQbKdeMvfANGZWnvr",
  "key22": "2GqTLwX7nEWmQBxSQ2s9RbfgV8h56kFCw6cm9RpzKbykmsV2DmWKG9hm4DvkH1CMMrfQEEw2PUsfGx9PWJam1G7x",
  "key23": "4VZskM5R3q23neVFu8EVxCW6dsB6nM6qzzn8gQtDxYg1Aad2XHquc2GcQub5xz49yuq4KQxqqYqNkbUn6HJ8sQHb",
  "key24": "3axsXz2FtWiB1XiJGTNDeU3nmNX4n38XkxrsprmBkKpYmFGCYcxRy5V7zurjsNmBiJkfFrZxBFFQRhpfv4K5zQa5",
  "key25": "2ypEmsfdYthdgNZnEjDxLKW5UkAsKgVNdWGuJLi95h2S68QinS1NQqceJq14Yhp8qA4jBbGbCy5SFSmmNuGP89u8",
  "key26": "2viezKAosXTAynXngef8j6GVdaWEXdYsMtspXUREQ6sDLJQBkDHCniS8Wb1S3KpbhkmJPvwEEZaDs1zx7FksRdji",
  "key27": "Z7oxeVxV1MsFRekvVrmRxEqi9kPTUoJsvFnT2SWDq9niTFzPqYbfRJPFSFdoyMddzJAtsQZ8fTj9TGLTEoooZxX",
  "key28": "61XGMAaRCYW2WjdJf4KmvwDf9SFtAhuUPATXQGpX52MFeoXZqHThmkxW9E3rPoa4FZgiG5iKN3KwNLp5JW2VHXVv",
  "key29": "4FRYBUzMiXK66uMW8qJj7DbviWHGByvS5gDwhFv6iobnYVGXM8CGTEeThLF54geJ1nbmnGWHGUZNEFybJRXUtCPq",
  "key30": "55V8uUw6HK1q7gkuQn28fLaKfRnBHSXUGhn4ZSyiCnWh8Manhzdjtz9tR6UF9kstqKyqV3K4kemyuYnk9WjKGann",
  "key31": "2Xc2YA65BcmUo47dnFQiXAXtTtreZTZbqJtcd5hoF2yKgsZ8cNQ5NfQ5AWWRC2xnw7h6tzCugDBpw5rTBFNxAcGQ",
  "key32": "63iz8LD9tJkdPeenB8jZwL82DNtQCv8ecCCCDoU2SjUF8paGdeApqqj3tx88UB8SU15vW1SdJzY2PRx38ubkEU33",
  "key33": "XD7YcyCBE22yi8VAZQsCZpNKGEM7G8wkmmQu4FXyST8wVPWEuBvZLBeeGy2wjYhBJUkbvo7bhsgyp9qj4pw625d"
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
