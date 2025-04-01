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
    "4W4Uac2KmYs212SL3ZXVXT9JBkjyRBmPxy88pQKyUMgwAbzvSuxAUU9EPUcMYp77d38E5w5gC4Pi3ub5QFtkxxJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TEKaWyLqXg2ZWwjD5MusUuB9J9b3EtBRkfT2YbxVftH2xm1Dk8RmEQfqfpJ7bAHp6rdTgTNee6QRDM4L6723X5p",
  "key1": "5GQBZfLZBS7Vr74GPcCoA1GSyFx7HqF3pmTpyAVCnGzHKx5zZUjxqnGVhQyHJ89cravGmFWbNYJbczMz1WEmTXud",
  "key2": "CvZeG8YaG4YgDeAeQnH9QvahUgLRAuFfs4ikFgFJKerpCHFiE3i71BqtGWheXUm5UXg7QC9G9eR4TuL4TMUY96D",
  "key3": "2ynPT8xUmJs55iPnxz3S757J8dECVUw6ggii8gstY1CBBAG66CEAtfUzgFNhzHtkQ4iDaFF7LyBmTHJysa8Hb2zB",
  "key4": "4UDqf1nNv6oBuMcoyrQivAjtyy37vwChVsgn5psxkqpjm8AAxi8mMzzJkbSLqPefKVefDBzgiKCLJWiCWUgkZHBG",
  "key5": "3JwScS7vr1ecRRjeAvaqexqxBE3n13YrMaCvdRitq8utY4rMUwbWNiyWddsxaak6BkSg2zhuCam3T8AQJuQrRFJh",
  "key6": "LtnpYjARZkxg22aBVnQRMKturxpHrSHChBymnrwyypVd9EcKmsL7NM5bGTPh19PChPvp5oT3xQ8n5qFqnbW8Mue",
  "key7": "31CotHNmXZAiDAmugWj24rujSGCa4jR3yTVqaMgiLtgA8AEX4U2uq3xgTqXLuBGgBeFF5gskM2fSjVRgCCdSdMRB",
  "key8": "4MzhqnzhozTDaHZfE5vQNtV2qL16R5sKkwiEDXjs7eEGBWdfXGkhprrkZqDYtdCZ5cBAiSPZX2d4KSzEPi9rdZ3R",
  "key9": "61f5ytsS6vf6h2KzuvsGSBjZkDAxPFY8uu8K9vWEYfCe2BUDwGStTsPz5s1sfHfxeTYDz5kd6k1xPm3e1D7h7x2K",
  "key10": "uvHM1MSrYo517HTiaYsrSiUMxNQon7GGMJjzC24dfnB6YYMvFQQCMZVPR77qDQPgfw178XY5xUmgY98zdPFxNBm",
  "key11": "CncSQH69J17CU3RqXfsZq1o76ayVWNT7PBTmbFZhYtArN7h6HeM25cDtdWrpQF5hheFAo3D7kNodBCppNzSBFzu",
  "key12": "2Jd1jfshvBTWUGvSLkUJ4AbAfuGfxJMWNyEQ1d657C5FUCxMNwZwX6paxSuvavgiNR5xP911PbWLczm1G4JskWZj",
  "key13": "27hHa4NQNHE9AZnEVRo8vmmnDhrdsfbTeKqC1q1JQCRKrVbojZ9Xbhc5BWtj2dNZA5PGH2jtbdvUQFSQ9RSL23tF",
  "key14": "2HZ1ntn7w1coEK5cXvsgH6UihEAvRPkrcQsmJFMPAkReCqbLh1aSZmVrQHHWWKGw3h8f7gEVnBAfFB8AmwoKUnmM",
  "key15": "4PZzNZhXTHzHDZP1zv3ar8XUfwc8UgtVJEgznBDQiTQTaQJx9UP9q9VQkcs1kcM58ovaEYcCXi7t1JRfJRmj7Y9X",
  "key16": "3oPthgLyaDJgWfqJtQQwy5VeByHT5FMjubSxJ6jzsmzpaC7vxVziTpqRzJXy46pJ2zmRJVGto1v7b7NKRBzog2Yf",
  "key17": "bovZvaTTD4ifd5fuq9oUZaoH3aqjKrb42PhWSmLcyndpTicFyGedoyKjJBMW6Znfss6fau78n6V41feNJkvqkjw",
  "key18": "2DcXEn4AGFE34VC9s6bJDfbbnxbi7ms19KQxKVVd2tE27RMFUxD1hrMX9PcBkfJdjd5QSQu3c7B1s819QrEvahdc",
  "key19": "2Ror38ujYW4P2cfn9dbv8htXBFWTx8UcKMnRDjTCkVeEM9UstupBcmmrS57e1sR9E4cw54fLbN9J7AubY25wdrko",
  "key20": "3yegeiqiMS62gRMKSBRCwGnDe9ecHHeNi67iFo7psgFiMrGVzkf41bw77NbE4nQv6QutBKD3PS2nS23U6jbX7Eov",
  "key21": "5fNqhpyJNv32W6pFG1XbmHQjwZ7dQoyLgXrrQ9dszKFZDKybMfwuZKss1Krz7Uh12anVXAt7fmRLgtneiCAF6WL1",
  "key22": "2eseQgJGagoiY7jYKaySuHwDx4EMsZMSKe2cL9tjx7Wtte12jjtn2EvD39stjPbuy9MNK8Z8uYgtmC8oFkWCcGVP",
  "key23": "2r8pBtj9kWsbrSzny9nVvwRkorp52T2Be9CHVhEBnmtSkWdTvGv6nCJ8ypyUHqcCxhQV9eUHUsn4NEKy8ZMrcVeg",
  "key24": "2ZTZC6zXdCQQ5JvdgZ6EHYYoWfxqEgim4ophdyaMEuSBHVWi6RjcZHYiczeQP1FM2e7vugSoSzxzzDA7nEAfgyfa",
  "key25": "5HTimEY6iHxRDSB4WBD7RvRzwg3aiWHYGHGYqRSXVpnqDansjpE9rish2qktSVon63Kg5BHxZZFm3HhBf3JjSJLH",
  "key26": "5qkzagP2qpqjkTKkoF4HJGqdSDNeTsYMaJW9dR1SCXGrgVCRCqMbZ4vYcv5s5rxzcmLa3XCzCaS1N7AR3GfbtkmB",
  "key27": "3VJ3Y74h6mYzNVVRQqeDuY5PrVN7xqGrdFtBtCNvSJmeco5E5VuHSFk4R3kRpHppEatwbd6YbzGnGK1aJDh3w5Fh",
  "key28": "HdSumcDjxoRFReifcdUSFnBfKaZgef1XRG7NnXcA5m17jyjw9zP8YDgAoN5hdTVnY7qVQxHtHJB4zykpSfiHHtE",
  "key29": "3RCkRZMsSi3KTvvoDAjDqTsMu76PX97td9GRG2MXoPsnQxzYLNEAQijFpAf4fg25qHxiMAMK2DUESbSbbdshseNx",
  "key30": "5BQCURbKor7GgV7pf54GmSCPAW2m7gznwquSrEHECrJqW9sK5DDESH53Jg5cnjghNgDdfG91ojwEe7UFfWkkK98g",
  "key31": "AMeH6pfANSXipNmKqxjZSHM9Z3HCCSg3JRVcwsm6EwamMApWtc82bbHFK2WaGL4vdhzvY6AYuMW5A2moZSX7gj4",
  "key32": "23aadi41NNTDh6tWu75dc9Xvk6WtrXiztAd9AXNuaeceNovMjRRumZc89QjRfpw8yhYZFzhD6kLdKUNGHVR4b54B"
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
