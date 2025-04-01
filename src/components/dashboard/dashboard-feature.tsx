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
    "4gjfQC1t11G348uY45niAUJDfbvdFTZqLQccvmJXAghNw5aYTZ8fVhKdLUA9VMscTsgwfFfzmzdGEipTfedFd95c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SvAhHg5QSXdv4ya1FB3mHYYyqLoj43vJVRuAWpWjtVHtFzRqy6ahKRAya3GQms7x5Z2pZ5knzb48xfcX7T4q1TK",
  "key1": "2SkRV5i6iPQTuroXct7ymqiVo1DDJtvRf9WtcRtq25fRXYiqWzXGLJH7LEkGX3xRHZdftD5N7eX6gVs2rPo9XrtB",
  "key2": "5kAAuwjbPiRpTESgy4gR92GBLwAkgKHs3ny1W18zvMYyTy3HzNdimR53SQMmBdHXoH1tdCq18tggwmxP6yg7JVoY",
  "key3": "2yYfBEA6CWjHvqzbBPuHSXC3oKZftAJn5o1WPpEhZQ8SE6oty6XrbLGx4XWhWfV3kFJyaY7PEQt61EUR5NAq4Bv6",
  "key4": "53AdfWCZjM6KbnEQPSYnS6vH5tjujGXGkzsLv45YfWmg5LaJcmJ8dcgheer7wSqHPB3NPVy9iD6LfAGYjYs7e2cz",
  "key5": "49RTmMmze2nTf1DqWnS9sGfAz8KKh2y2YAGWp4JW2mKmronNPJVS4w8C4EJajsd83NZQktofRB5Knm5NVdiFiuV2",
  "key6": "3zATEqSZusS6y1efGpZeqxyR6vk9ESSYUyQG4wcbZHLaJbDcztQJasuwpEe2FGseJ8ULhmCcCmsBNxX6fE4VT6Ld",
  "key7": "2H23EKeneiuU8hWn5FRHnt5FpJ5Fd3dYCZyriuSMZ5muy67tbe3BYv7jKtZM1rXfstjw3SkUNHymoUofTYMpnJdv",
  "key8": "hzV87viTKwTTxbJpygiXKrfpkkZWJyeEY8heEZuCxobbwsLyztCSmNooivS4KwpkhSmuyNHgLkcP3vorC8ZdLia",
  "key9": "4Fc9FgeUmghVgPiQiMo6KT3wu2KWUUKcpz6XK1whoqvsPf2dn8y5dzx7NJtJpv9upYL7NXUZXuZ1ASut9XbqHLjE",
  "key10": "vAv4Qem9ooVoQUSiyQbowycGqA3QhcTWxzMKc4rywkJVhFWtWKoBtpKWCV89oissErgTEJSBhTgGcxewoqrGNJv",
  "key11": "2RjAT4rr5zi7pBFeNEPyYSPtnV8wCGYfse2R64RcVBdDKRvqkSP1GfaTjQgsw2bj5AAT9rQAsXSXhhLrzNEbN29q",
  "key12": "5DJ1NugPAfKhtqEikh33QQGbkvqRT3LGiVhB25hwadDTHBTnGMzKkpgvqiKM1rgAXqgt4iWDFNMRcciWm2JmsgPS",
  "key13": "gyme4YLN1uWnDddKLKRmWs2CFRz1xhKcAsnMfikndXkK4KGSXgXppwPWrwyHfqqyJC8qh4GZJD7p4PMQ9vmh1mr",
  "key14": "5uWbK9P1idPSC8x4SXh7ffmykgSZ5bqpbDSYDJ8iGfgstJMakcp183BbX4m2YYFCwSS5eaAqUEFNmzAvxpex46Ep",
  "key15": "2wCtri4PKB19h3eixZgkGrabeCTm4wZL4rnr3RjhVC67z7HBsnzBakiHYji8tzTEtf4PUKxRxXgfZ2fGSzVt9QrR",
  "key16": "4k79mZERjVQCKxCyFeatyKMUYEp8xqJhppLRMjfQXaGw9AQFRknN4SVtSEopwUx6hjW5FveM6DzNbGx2UVPdi9jx",
  "key17": "41zednVQs3GbzD4j6ACvRQ2qD8AnxJecKfczFNc7q6bJEQ292zVuvMYzpSiEtzLrqnEBDPm4JPqjG36JcoZBA3eC",
  "key18": "444ZfupPq2UWehqavmfkNUGC5JrbM2yPzBGTswt5U5XykdrnBh61mkjGhkhA61D4dtBNNvp8tHNSPieNwaKvH6Wo",
  "key19": "3YVETrgQ436Tm7ZfiuZpqf83zQ6eX1hX2hPezK2isUTRL2A3ebZpXWTKCTXUFKCZQw5Rid8LrPaPKnyVXNo3riDC",
  "key20": "2vnSXg58u2KcA9eirCKrNeZVPZF6j9UBVvmqP7EFrYZpTaskHTtMPmcVNSjuj1BxFhhovhuxH6tY1TipGysp9i28",
  "key21": "4ai5ZKy56GrV11efEskPUsH3i2Q3n1WUCbTKEbhu7ejmasxeVQVkBuSychx5U6zDoyxuFqrpYKDWATZ8rocTqecp",
  "key22": "Z9sHVpDHdWCwFRemMGwV77WFPSq4SPkzuDiC22NnMDsh6yFViUdj1SNhMe3HRRtLQYaGnDmgMmWmMmVARsthn95",
  "key23": "51EN89YYmReNsupLo3ZGrC8S51Q91pUXRYFV44FAkgss9SNa6yzATf9uWWQZYC5EQuMhdXCMqHwR49f68zRJRuUb",
  "key24": "4xNC8UMgn97PegWDKCGPjyyWXYRWu8W7ardB5fwtBbLJiTaasVJLqvmNyhBhERhrqaqwcZgrPQy5WBUWCK2vJCCS",
  "key25": "jrBUvtLYYEmVWhB7tZdFA6WEh2Sr89HQ2oje1jhjTmN1uQV4C4znNzmKSJFXiZWyxJLq3DLzmQupPYfRq7X3TWC",
  "key26": "5igfxFHnhWb28vBwTJh5bG9yrnNceyiGD7A96vuouw2nLxXpXXSnNe21WqTdLYikkEnCk8wpS7X6uk8AP1S451g9",
  "key27": "59wRb3oTWxPTaDf5kpmwmfdiBiQsee1ss4zCjfJFWqikpiwx4Hncnqy4xNkLSPuvd8QsQi4iLqpuNJfQgLsbVLUv",
  "key28": "5WcmK7bhYaDR7MqmL9DhcJBEbuowS9gyokQSJMkBsmDFPmS7MGe2VNiEQdmNCq3umTNGjP6AABNeXKcxUUDYpzaR",
  "key29": "4jSBGKxiN3Htz16cv7h2QZiS8UE2EYZd8VA6zVrtijoLAhxiMqbDdfZPYqBso48rFNSb7YZwZs9z5yGg7PQgLPbg",
  "key30": "PMq6vd62RL5SQN3179cpEKEzQCQH6azUMFn7aoEsDoBXjb7YAtWSNYTe6rUigQGR6B2nFzpuv6P9WRxtZHHY7iD",
  "key31": "4LhkMVyU5GM8R5unQo6jEbUFvoCD3uVnb1NE38HZ7ET2wb8EuZPnUvu6zNHGNqEjDSGfqTpHvvdeYUuWZvvaW3HL",
  "key32": "43r9WWDFk9iz7zPoovZ2S6TWMkP7YEouLjMKciYBnCXmGjNSYX4RQEeNCJvBehDU3xe3PmcX65o3pGaLo5oj9kPn",
  "key33": "4gSSHNLnLx8xHRx6XSFfSDFtryrwCEX2rNfk1vuESa5ZggddscgM54GSEXQpwHb3Vqzq9WHrju1KfMYgtSsvb6f8",
  "key34": "5M1vLPDEZmuXKB3MHR1W2BkQaLbaBSEGJzRwcML4U7PeXJHxU4JuRQMWCfeQm1nLjCvugCaQRL61jsewTMpMZisf",
  "key35": "56ZdUHU19xBt4zU74TMyWfMpodSxsFeCvFYVsx28rYTvxVxey15Av4inPHkXbyidMrtFWFzTCv86kjHhaUV2byWa",
  "key36": "3PiN5aibUSiAhh5hXfWfmDQSHMWc41YW4idZKGRxd5n9CJatXUDcvN9sAEjy9sDw59p9Xr2CBsmKJyKYQYT3Mrvr",
  "key37": "h5XcNCz94akdktAZhZ1LkdhyujHWfDczekx5va8E83uPtZK7EvbeBhbJGsbRXcuxcDSSdNttmRwYPRwd4tcrjuo"
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
