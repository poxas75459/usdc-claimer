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
    "6kQeNRzqnpStiRggJZibhRE42KzHZgcBPa7dbe5T1D1z9e94RShPVteco6hH8XNG6tWFMuPCDFRFcu29dbr4LXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ss7NgEo2LkCJZzu1yWQNc4MPuHfVDKMtH3GX5x6zKRtFN5kG9cQqdNuQdthFyJSsaLoWePjf7We1S2tk3T7jwCn",
  "key1": "4Jwgis17mUb76JgydxVCizzr91u3kPD1hQStidT7BDePYSpidepweCNBfQw9jpxCqe5Yfp6Xv2rrs2dyu3W9nsXW",
  "key2": "5D1AL69KGcsEXD6wuBgxapbh3zutZHgLxgL5K77vbaMdVjeDYVrggcihQC7rnfqvGskzmKw4m4Zz6Vm6oB4e7UBS",
  "key3": "594wzyzo7JekxHrkZccAYh15NP6HdXHjVVvfDEdCqQU9fuLM97xD6iMGGKMxEFgwPzHEJ7XR1yJTvnHxCGfoDTGU",
  "key4": "2AgPuBzJQdPonqU1fGic66GMPLnJpSd3NfMA2QfVPQLEtn5AVHnmdYonRvbBR9i2j6GddFSvWtViMEQx881XTPoc",
  "key5": "5hzCvFyvuU3ns34vyMoPkJvfFqAiKV1CKZrFywqP4YLAATZAtKFhbwH1ETDLYG98tf6CGCog4BZVXhdkXqo21HAL",
  "key6": "284pnVu7CpHuZgdTfz3xLyD3sYo5SVEYDA6hgYe9PqiohEepzMiZs9vooEshc7forsZc6AvK7ubnkwTJk9AP9Txy",
  "key7": "444KdnhkfWd1t9PVktG6LM6oND8AgY5cvEzqYvCugt76aq5p5ZjRSPufL1dUNRfUUqJG6Nk34RdPL7g5dgMeCHih",
  "key8": "3pkujxfiRAArSbCKPp7vNcpNq3oFFB8KCThBohQpXkpLDXqKQZ66psV42pXDfiuQzZ3RA4BCiVU5pKL8cqnbYGGe",
  "key9": "4DigwzoCPFszPwFZkvsC9zfg8U2MZGfSzvV97CGisQ3DrWe2LvJCo9ymNk5WgijLP7Xn91kLBgUGRfqp3MSdTfBn",
  "key10": "5z94dNYdScHqL1K6sWhxJytDMDticE8whSkDozQERKk1QbpT7W9sFGX4tqEq6eqeZwgYeoxqZe9UfDh5rQczVe4y",
  "key11": "3WGQJ4ZUyRsMFhnyFJkPnUNcuAGRPYspzqzhLfkpD9r6TBHXRRVyvkytxQzdgh1wPjUnam3fp8ndGDoy7iQLa9oi",
  "key12": "1n1m4AnhLc7uv6BopmnGqqxAWv3CAdYKyepet3FkkMvjzyT4GJ9H9kNUpnTwDvu3VLaDsBGQpNWfM3NcKEtrFWe",
  "key13": "2fs6uZPUfLwuXU7Eag16BfPareqYph55MpR5nwE9J2H45dggi25Tv2yz5KKxgjw7qLaZSPkN2Ay95hEcokchS4fA",
  "key14": "2KtoGZFiBqycuqfzoozNowtVudNGimfUAFdWWRsM36s8Kfei96G1wFiDNMsYim6MGpXo7PYWp4qh7dzRqwAhtYv3",
  "key15": "2S7Vt6Rc9pkvzZ1yQGDQTwZ6Kx3pQi4ewUDfrvSo6uDAzziWRqcVBeeb16ciqAz6jCQPiW8x2SYPzexK6gcD8CKJ",
  "key16": "49qxdNEacGhwQmV8MGp36AiekyLxeF64GqjGHazgn2581nTucVy11tXSTst3AP5gVMWkLXcWF8RhgQJH2kJ4t7s3",
  "key17": "3HuBb4vG2CWYGYHdhgo8rb7Y84WbvvoQoSwP5K6qqmh9XWJZZ9h4tGkQpEa3DzV82YSLVrqzPX1wQtkLSRAczjEn",
  "key18": "Dx8Q1DDsBzL31Mgp1VEPzraPuSgbfcrqTxk8FrcN4PxrobMRZBtwQfNBv8x9v8Q1ACytHwiqX7rkG2rhvHDHvB8",
  "key19": "41fAXuZBq87CTRCzkixZAXQFNhQBC1DptybQ4A6VwaKqZJybvhUJcUc8NSojohXfXA6uV9csXRrRT19FFVMArW7J",
  "key20": "2eDswY4FtVtJRgVkheUEJGLMzEhvA59BsEAfNDDszdGbcv8GctYpXwHL8akukV4iWStwK87MfBuouN1u8iy9W6zz",
  "key21": "3qosDQ6k4MT3PXiEK8kvXJNPNi2hF8oU9AD96CFTsXWeFmptzqVS8mjHtiym17BcEAtrF16WPZQMNkPHRsVX3iV1",
  "key22": "25U6ciR2ptwabUiuDrTJwvRPDjacBEACJhXDXWJsYqUpRvnF2wGY9fktCiZNtSQtGWgHFBNuC6sQ6TCwnDLYTcM4",
  "key23": "xPh7znBqcCv7FqYo9dchojGgQKj8xxH6hYffa6TWeD7fnRwYCQbLvgvwFxnXWRqEa6jkUPSZtfVBQ5gXdusD2jE",
  "key24": "4yjJfW2imWDioAYQLLEoAm99dR8j2wjyG17qBWYuFPsBgFABHNhVvgkXYXtv96os6zqiWfpvD8aw7GQGsjHNcnuY",
  "key25": "2LK7NsxepLh7x7cRioa3YojMZiqZTX9DCrfRk6sUBm9ksSB8AKbJKrZUyYZhAZNvjCYjywE9HzVrVK4QppzEHZAG",
  "key26": "5zJH7y6mWvx5xj7fcVxBvE88t9deJ7XuschuTtN9Pf9vsCCVZAemd4HKkePrApTysWszK6614KXF5t3MDkF3LVS",
  "key27": "5SHMcg2DNhGdyNVwPq9p94GvRS9sTsaenMypb8iD3So6YCZY1nPmkgobUdsXXNcc886beU98YsYrFaw3NdqcpLG8",
  "key28": "4w4b3jns4xg8i2NhtEocJf5UJGjwHx4j6qCdyDeeBYsaU7KNRTkbqVRKkmXbVU5sHXYcLcJovkcBQhCHCtdyQinU",
  "key29": "28RH9XuGU3si112bx4v7KiXooNpUBsjnSGCmrLNiLAo2jnzvyAgTz74YHxMeGwso6BjXevLqMZV7PL9d59tJTud8",
  "key30": "Dq2h1y2ruyGjU5HzLqMff3W19cFikpaor3CgaNFoqKrYGvn6g3j9chhBvKuFxt3oUPz5yS29EXneqJqudkBnYaT",
  "key31": "5KdwH87LkidC47WaBdhbPsvVt6M8CfBWeGZM9FvNvjX9JJbFjYTzZxPd4QoXJmW2hkAbHDcnfUthpSYB3y33VTJB",
  "key32": "4xDoamtH4ypXm1gT73kQGZrtnN34vvJNGqdBsT8TUTdhvknmn3mqWwt6JYbicP4no3e34cfSkGWGsyLwtB1C4Dbs",
  "key33": "35KSMgTWeCRHtZjkCvJcNpVDBCqGzdcFLGr5AMEDdJNkjdqVd2ftR3YmVs1Vy2qAdM8uj1rJHxjWDHg52YCG73Zq",
  "key34": "5cBr5aPeJXAcqjzftxEMNJ1uMJKj1wAZb7qvvagpawJJAfsQ4zPLmvqGTw23qBoBLFZ8spJiSYDNwxdimCkQ2R15",
  "key35": "5NbYHyAp22hTcDKVgiT9BEzJncVJLQ4Wn4g7DS2pwUkK122PZ7e38GaNZTTvi8S4uJJL1BtLCcABsBST3DJySoLy",
  "key36": "4riU2v4VD1qu1BT3hspPchX5UpXENyaf6eWSJsxjVpgVjQ2MZT7KZS5zWdjmzAQhL6FoJ38nj1neCEWPRR37UyLS",
  "key37": "49Q94QTXWYLY1NrsBiEfM7ibySEzVp6535kaQ7MnRA8zP9gLW3g825DmS2BSCBbXEJxQKh8ncp1xDKe4TZi7Qbwt",
  "key38": "63NPv8EqVfScmLXfTQqLvSSnRGdiuUpCp8EpVmTaXmv7V2AN3zVMqv8iNq4MhbXgH5UL8wE6RJW6jwsmfJ8Rb7dm",
  "key39": "36ggLxHx2vr6nwSU6U2GU5gnGEjetfpaqFM3arGpjKfTaCUX6cdwvsX8gKNLjACJYgya6fSBgdscDkgCHpH7m8NJ",
  "key40": "dzkDodVhU4eSJPzvjAvSAiNHkjKaW3JCr9xXaQtYRK9yKv7SkNn2UcmMxhyoVwcGoometYu8hQRQ119XaFDAfiA"
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
