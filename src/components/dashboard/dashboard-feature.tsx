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
    "5pA4JeTZLe7RLALGBxqyfnwXftwQdoczfMmz23ZZMtqsvbQpELGT7QQkeTfQZezkiZhPCwcyfQqSkZzBfPCEwzBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x5fv5H9Xwy4AZjc6N4xDmeR46fyf3mPaaaiswCSpae7gVSmjyrM1dUByB8KurE2THXiL3cLwXTXNVDjiz8KSgFQ",
  "key1": "29VH3odTguGqHjeW5PCuAmysnQMRQBLYv8yaZvLtyti7TWQ89LpTJQYHyHAjdubJHjt1ADA6iac56854g9j57Txi",
  "key2": "6755YPwpLrxXKNJqcMK6wwYGtE79UMaTcL6Wbt7jELPWpRfjnCEFDq4bwQvnLJaxvNCyLvNp1TH4FJkeUQPe4Hnd",
  "key3": "5vto4Xospum4XbcCEiSjXM8eqAesaJ53h1kJrSGjAkjj3McwLbctBeemKoCwQjsXDAPeadoRX493abh61ngqiS5C",
  "key4": "3Gby8QiFESVC9oHw6PVjXguuJNvNmL11FrunhKoebBu9h71ftHJd7DKwHFu3ExiLuAxdPa6R17ttE1MeQFUi79JC",
  "key5": "4aRVgVTw17hjepEP2JUx3doKdcGG1AZce8eetLonKgFjXexyu54y5aX6DJ9SS41ofezUWVZJaK1d29uob6SedDDH",
  "key6": "2x553KmxjLb3CvGZgKXHcX8Q7WrBHgtqN8n43tjxzw4NPhQgcE9J9fmiAD4TZJ9WGpdtfqL5EHu8NUsDrQfWFwGt",
  "key7": "iC6qRKsAYe3BVHs68iYWCkaFWL9KpPVDbGBbAWuRajQR6fE843Qfm7EEqpkPffYbe6rvuJhpitZTtri7yQAHFtd",
  "key8": "5MbAKUWKxoCAoLNR6DnZxCaG3C7VAquqvFTTkN9RbMugFc6StEkuJrf1d8ZvA1jT9Zk6LaJ2JqKnr1WK2tLkQpzE",
  "key9": "4GpzY17ScioJFFDYMeht8NGGHKmtfYTDq4BsY6mtPzijdy4Ek7SqBnBkCzqcmz8XxwoTWNGzdCXDMpk7ft5ftF5k",
  "key10": "5c1RK5bgcqBEE3RUTxjEM1wMNSGaQy6gqjGV2z6w1KrN6C6Eeqd8sga8Xc6x5BQnC4fJc84gwHAKou2tCHpxWK7z",
  "key11": "5AkZ1rbNRiqeDPMmvCUyiWmdbqU1B3BY8xYJi4mBFuMYfB93X8jPD9avLeRdqVZ2dPV98VYnhdvCfwu1H4L6Gvcq",
  "key12": "wmb3jUgDsJYoUQ6Fnqcss9LbQwxtzeJ3BzYDCFQYUU1TDF94n66EYsJAmJfFX4CLXuq5A2aFPWMr9fvfGTzqeEE",
  "key13": "5r72TqGPGngtSY7bFLVefNESikk2YvxMnEXWS9rX8geZt1SQR7Y48VDok26rxMLX8tj2y2ETKqNJeQ7dNKN31VMu",
  "key14": "3uQjYoxA1nmbwNmMRcJyHwRsmWjoRqf9Q8FkM1vrpSUDPDDihnvrgptrrBmM1oNAEqLbTGdiDu7TNzPnxrzryT1",
  "key15": "5KQkuV4ZHmSEW2aX9zZ35pfq3VwULWRwei2JvQA5B2foWS2L4FtREHLizaypM1k5zCGJDjVvDUNT3EEXyHxwo2Tj",
  "key16": "DC7TXVco9DR3TXeFSvo7L4KsZg1vAkENQ3JD59856ZQxca7cxUEkMGvRzcmC9iJFwVZqSzjTpYCYmotg8wLywmh",
  "key17": "5UaTjzeChZcZJfgvRAsA7hgx5r3joi6vjr1r6BdfLuepsz22sQP2Bpm2fBkDUotWyvPDG5XpE8nxsvdusuRr82ZT",
  "key18": "5mFZ8jAHgWroxm9skwZfwUDdKeZDaGpsL8S4ZXUgar2M7xpkXPiGAaGVqbifp5uusnj3XET8pTy6toZzzsnUSg3T",
  "key19": "5s2itc19Fk86sgw4WQprHhsheFJsWXJD6vm8uvnChqp7Wdue7Am6TqmCiCNqFCYSPGr5zvXNm1fkRDzAFC5LScm2",
  "key20": "2xC6aVB38EC7h44XDeV6Az9HGiDGJ96oZpUUQqkXbdMQVfHfuaYzNn284ALgiWn6Za9kSaEwXbetw5Xvph6AtiN9",
  "key21": "21F99W2nu432gxN42kKiwYJQfNj6zdUB4uUQP1vJh2PisyT89qeAXegoNYe6qM3er2iBZHiMdnqYJy3TUvGNiTpa",
  "key22": "4rwdC4fXpVPxsydgwPjBKg2DM5mNaKbzpCHr7zLAmL4PFpHLf9myBWP3iiKKhGPqEd1NiStjfqDh6KvmoJqQaWuT",
  "key23": "2FaQy5NWfjXu9nvPu2LHMG4tw1rnCumCLaCJcEyToR7n5Y9GPHp2VcHiBcw36ghhvsmkAHT8szvcDZ9fVHhbrt6S",
  "key24": "5nrvvmddyLdyA3uh9369zdWauVqDst1DTXXaSbdfyiJojQqoS9Dof93rEB1tCTvkZD1VpyrLB4AzZ1eiMSqRrn6H",
  "key25": "495Hsn7qScAAQvzoEw7MnL2vbaKaw7BWMuVqWp2kNqKpys12G9TA2u2wUoMNJ1MCG4eKfkpwcRxoiMyURY9AqbCc",
  "key26": "29DX67G6cSVS8Ec4Y6sif2cVhcGuveR4GdrdyAAinovnXXAWuBuPAh6KR5mB4DW75t3vGjsoF9rLo3Q4YX9Yf9ke",
  "key27": "2Danei2XQcww6s3uyu8Z92rXJCHxnMqpXY8eZ4HqcFmRJcq8dxt3Qet3vdh29T6QW1uJH5vbJ3yFYUGquDhyzypn",
  "key28": "3ymhJUvdpZZHyUQKUkQMhD3kW3UqMprEaLa3b4yY9YfBpnWWQUNZdYkt3UQnLEp1XprNYUKXyESofXf1kAASwae5",
  "key29": "7vrDA4WEQZXg6amNyTzQ5vn5xtN1LxkKKAaJAPAiduwqfBpQcdECTaRCFZsJk4iwqUN1CCGyQ5jQXfZYmvwzkTE",
  "key30": "2jqizJmeGGpRB5npQfNqisaW6upV92nk6VUqLprvNc37NXrUyBguDWBHfchEA5UZBZcRyqha1Y8NchcYDBCP4w6X",
  "key31": "2aK37U7BtrZjLn9ziGkbhdcRX92wohLUV1ZvMHg682ESZEC3Z2bydzRSrjtJHS2wopiL2AT96azvM1s98jdZy45w",
  "key32": "4MP9krhTdDm5hhYgf8viauvocnkgRy9hsK4KRbvWFrB5yYS6FgVzv4Zp92vrsSMisWVvivoon9KfRKmscaaXjhuP",
  "key33": "4KonPxqqUMH8HDzB1x2outc5so1inGNE2gTHxRTUZSSuGXpDV7AAxgUnjXhrugFNLszjmi858HpYJmN5fmFzQRm7",
  "key34": "49QN4VBF6vgjm1EhoQhwRiuCM6yKrBhGjsEFKsh3u4hstXnveHDzeoe9cDH5rUxa8dFXBjq6TKuazZDfRedc97up"
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
