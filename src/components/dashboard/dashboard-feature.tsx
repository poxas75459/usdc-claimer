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
    "44PSmZLAHajA2TYjUVqzchaqdUVRqrWZweYThELy499M8VrLGJMkomk7zfuCzw3tVSaZbPN7Sx8meVW9TFjCjuxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PSJVLko1Z4ZGNsEawYsoaGX5tLYiKdtS17ZBgVaCGSnWR6eLpCnELmXXT3VDLU7N25qfetwPXe6UDxVRAVbGVDX",
  "key1": "3AKK83qzjwvgE159oVun7XP4Snv2gzVRb2859ejgGwh7ARGgFR6hab1K5cYD3QFrjizn4ae8p4CtGTRmq6F2Tafk",
  "key2": "4yzewWi8dCYjjrDjb7xXvkTjrDvzYDkRgAaK39PyZKBowyKWKH3UnTS3A4WrMaQdn3yrfiQJUrNXmwnFmSNmF4u9",
  "key3": "3oxttYEtpo8zvhbXyTLMufP1riBTNXrCeJ36ko8JztgNvoknTFFGeVV7QAfHsMU6ncctXnNLft48wVw9CL47ARAp",
  "key4": "67VZbS4LZE5co4DJKqXiSEPe95JjAEu3socwu7CAG8ou8T7nxu8qBDjSk2edjmgW7YgG31nD4EeMvo6mtwTxdRrE",
  "key5": "39jq6o6ngC5hkcCf4vbwHCFeSsNK8NqD34yP4Lv3VwJVQPMDGqU65VGBqKTZDAbGsLRp2b1ZLc2ZnWrF7WqyuLD8",
  "key6": "4DkC1dTNCNtz1n9u9NiUkHApkDPHgkQio7UypujHL68LxUFpkvGepR8SNYkXug8KZdsx4gTMEZVTxAELn7pswHTC",
  "key7": "3mBuSYZ6oKKGKL7bHAzoe9vt5b79z3RjpzThgWdTDJtVr9sdLZBsggZEUouXZ97VgCYMvSRnYVuZCeuQRbWpKBBH",
  "key8": "Ze6Zh3gGHF5o5pQ8heG6jBXZftycDwaXJ7DooLWgYystpukM3MrTnx8VZyL6trF4BALkPftUTBnCBAMuS8cQKB1",
  "key9": "o7NyscDjTnnxYdtM11Fjmxz3gEg7ze1euLaMJonULJx8gNFrsVLpgegNpxWgpwNioNRvatxnMdgVbLbuiPJWGNJ",
  "key10": "4gHLZJ1b93sDZ4fPMawbP6H2hsR3ecT2K4MGUFq3eZoZ4yxjcfdT82rFNYREUAp6SedPH5APiq6yNhXR1JHDnSdb",
  "key11": "5qVdRzXsfu2WWNqA369AENyoYvwoo2kZ5zK3ZQPkqPAJuw9aQw1ESL1PfdoovHYak3vTzUxhiktBcKfUU4BcxduN",
  "key12": "QW4wzU2ejMXgztYLYNUZUxC5e2VcEYZs7VdAH9TK6nJwL7V8oQ8MxVCAjt1aZChhaipt9ZcJv8k1KNAkdxmhYeC",
  "key13": "3Co1bWsNtf83ufK4ufEz4tVBmRdD6tEHYtZd7M4iGzFHfYEpzAsx1XytLYZJZe3EsdZAbNDosUCPDT5RBAjjakzF",
  "key14": "ei2ZtmH1Dv3GpNkJ88vQxavER9A11Xq6rMNrJSMrLkUqLQnPBf9hUddv8u89MiQh2MzDGqvhRbDfMtBMzbPAjoh",
  "key15": "2dhPMfrS2cHrVguBRHNRf4MHLcTXURf7dg1qjstjA1U1AcCTxv5cQQoNy5p46rngoHDU4Q2Msg6QTnfV8iuT9HVH",
  "key16": "4sKwdsL9xRY2fRbjhcMsMsx66VP82rM2fgSdGkKqVGgqxjpBCXrW9TJvAA8XPwG6w85wcB5aRsM6kJFjuAjfdhWA",
  "key17": "42iXv9es6ZerhCsBMdQX97erf2cEfTjK3jJkCvbTimmU1gaQswDXT9bkmHc9zUBvFCa8K9emKyWjsqHdhzii8YdN",
  "key18": "5rF6jHL3cfL2i3WPFF7TG6YRRQ2qsYZp3XKEuwDC9Fj8YrJF4arXBemDd78GsKxP2aP248jDBCxUE1ji9UW7Nxok",
  "key19": "mvuPybr8t5g7zGyGFsLffPQzCzW439jdLAKajcvDF8NZCZvWSh6jAurwtqkaeV1WymPMdYuSBXfdLCuj5WvAnKn",
  "key20": "2z1ndEAywZAo4EHk1eFE3TYL3VxkbCaU6Gdficj3F4pRGzaXqh7M9CEQ1aGrG5o6GmpdojyacF47Z8JvE7fXYEAD",
  "key21": "2YGiEHar1VMSCTWKgy71M9Tc4UMg26qtM3zQ74NCY6XAzcMfuucHraLwfSnwRVYFLGuARz8y7AqMmZn9y54wfWZh",
  "key22": "5GfRWummRFg9LZWwoidMAZm3SvoPBQXWMMsHaJ6JkEU4CXWr2ZC8rQpCqxWdrCY4EjwBKo45P2n33LxJKTLeCjsC",
  "key23": "3a6whpLxVZKs3KDuZHWgouNRabzrRhWExGatyHfWixLUc7PDnpUGXAk2bkFs5wgngtrF1Fcd7apARP5VHQTC69tP",
  "key24": "2sByEJfyA6KZvrKvoSQ45RXU1df7KQvjmAtBovWQpU3SNmKhHALJDX2Sv6YVi44wQJNhsN6fBY2MhsQoT8YWi1NP",
  "key25": "2yg3jcLumkBZR75BivUMuzEPchVMh7VGi1yUsWWjEw55Q57BUFQAdR1gupbMjZNxSnYZY5gAeF4wCFX4nPvNwRu",
  "key26": "XTmcV8fDYqDY58nbfjxAdq798nYMw3xw7KofppnesnAEqQbfKQoTrACNSvGQ88SXksaDygfHLBgstcDDi3rys5H",
  "key27": "3XYo7C96u7BLw8v4dWetWmphwfPnoTCwswEYjfMf5533nbPE44eY6XcHvEziJx6PEQuKDoWT6HeywUshD7yPLYPR",
  "key28": "gn33BM8ycuyehANYsGQjzwiF3fb97kqYsTdJnheG6z1BpV1aSVQWyLxPS8Xh3MHNp3NQ5gPGqwX6Lfxy5niUFVh",
  "key29": "4TjBVvaFbX1Y4JJsd7pdVWA4MNufGsn356cPcuv9CDmiXSFPWPQkuW58WtSZCBge3K2bhzevLaTTn2wkEKWYcMPh",
  "key30": "2cPjBC6AvgJ24SwqRRWShmr8nM44XTrPUc5VXVJE2KmVF1yhbsf4nDnNrBw1fapvqZn3swbJAFwqCmq6MWGe3pbp",
  "key31": "4RfHXysqhYMgVnYQJ15KJVcJWzUsHa7AwEY1TakA5zcptqpYmwmswdkgvmJBC6cbC53NSxxJ8kzGbFzcikBsXdrP",
  "key32": "mLFwznFJ16bbYFmdTUWU2K4H7mswt6arHahR6QYrQmEYtSKJdRzqqaNSQ5Fg9sn5Xs1kBTed1f4XHC9688qwcmu",
  "key33": "2ZQv9rHeycGwYPen2368KGKBz2kGt53dP8Waq2cGseE6AFbG9FmBmnZ4tcv1AmQtZBHoRvYWTJfBEo7dSdx5hhxQ",
  "key34": "4eBwouTDAcKLxnEyVkWCvNLW4FgUXvB795ZSuFgxfi1oquYAVmJG4HdDJD3AxPmSHGFuzwUAWBoAoRsyo1LcimtM"
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
