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
    "44EUqdUpxeHwwQcTEgz9kki74L6Q7LsCYjvTi9siHDeMjwtCcwePBdM5NT45tQx6cZpuCrqAGiC665pgFS73Heru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rEQ4rRqYShdHDRGWbiG4TYb3Rqia2Mo8LzMdXv2V3u68DebH24qkioAzq49fhXD9XX5euEu6E8nsM9cWJ7V2Umr",
  "key1": "3NvkRgWLyKr4CoFUH6HhmLADoJYot6iAu2LwUKzp3HScQCToCkfaJFoGjJqbtp7iN2uW2kku1PRHg13mNi5ca8M1",
  "key2": "7vdYwaDsr7fCdh3Sr4dbuLRGxVyXbi22ANYWWkHSYvAPuzbdYvvApLsQT9tzywdE2DeutxAx8TAXn7hCopGeTM2",
  "key3": "3Rzbvu6AvkKP3EjU1LrnhDdjM9UPa3C4B4okPnRLUWW5C3S2Vnn97nALdbjo4mpigWgr9eJtSFEntBcppvzRr1x9",
  "key4": "MwHupVd641AxX3SznL2Q9nRcHdrH4kBHBuX85ynfAu2jEQqKHxwVa42j2FreqTyCpfCtxxqfZaUMjZN2xfrgU7D",
  "key5": "5zVHGoa6NiXPNwGWXykLQGh1kM2BYXPqgn8dGUihvHajiFr3Kkh16dMVEgnp4sU8A3pkAdc7DPLZMwyEvLdugd3k",
  "key6": "3NQYUurgbkhmvrJX7vcSVxbD92ytPFpUsG8TFWwLr1XJ2oGqqgsx1U8UauMSbDozhthLjvTQyqnark4nb2L1W2nA",
  "key7": "4jkzyZHiMVMPB6wuiQeGFkuXaSjDQmAAJJssFMeKD61tuoPQEq31kYzLcwcq2XWxEyNpcRy7a5xDPTY2SmTD1Q1d",
  "key8": "552bGYQ9ayTzkdzQv1Bi1DUucCpL4zZq2YTrkwYwgy221BREFfknVGLpDoijGsoRteH1s33dT1Q1ZaHkaZSFNUsA",
  "key9": "5cz8iuu6UeS9xuZmjHFYw2oCu4ffiAq2v91q7H5WdMJgRtMt5hPARRZo2EQd2Arz3f69sXCTP9wB4KG9bEvZ926z",
  "key10": "56gk8FXbJx5sNGhNwMa6Xt8sRxj3d24TzCbmkgzsh217od2ftZGdCDyQYFAY82DPP1A7Z1UALFA1gnruBgLiP8ja",
  "key11": "FhnaQYCUrhzVk1uDY9BLeGJmUy3K5LU1vzmALhqfpo1ZGEZ8jhg6HMMegmqoAYVL7hy9vuRwGidWm8iazoDQFGa",
  "key12": "5N6KpW2g9eoBbkBWUh3vwuqBTTKuBwbZgRVJZCoysUFrrvJRftB9gy1KVfCS7sVJ3iWzb1EmX1yV9tUj5WgWuwu8",
  "key13": "2ShwxiuMnDxQo1qNu4qqcV8YffrdxqejWzxEhHFpgrkrNZZs1Ss9Mk1LQYancvw7AfgLdzeLdYnqLpsKLh6d9JMk",
  "key14": "3nCB2sMyPkX7Lbz9HVEVK68jUXpwT7zkUVPATBksRmRmSDBPCv3hQejJnxeDtsiPB4sxK8hYcWa5SvbA2RbSJYN",
  "key15": "iieCMQw21NxzsLCo88fy7zM5GfaX5iWtDjqgWXwX5S79BqJB2LoRtpMqAJsZqh8UGAsk8WU4fsdDtiS4SeWYCYM",
  "key16": "4srbp3wahKaDHVp6Zux8pa7RobUZRxfWb8ParKUUfKXJrtjZq7ycLC3Tu126mxHc1NGrxAFjGUArzoJHRs5QsC2q",
  "key17": "2WEy8DkXdy2Mi5SjEkvM2YioQaNRWZVofmx5D5FEJxLnN9tYTmNsCMP1erMyWV8hoUu68JWwnaQbYuFLCq3WUqQR",
  "key18": "63XfxUsCA4UxRiaV3U2Fnr7PseYUqXXK1UP9H2RdKd3ceV2NVm5mZCEigSn4fNm6BVH9JTPqYCHkfn9KVvwRVDNf",
  "key19": "2VGetWQr2Wkq4eVew8LA8H9LD7ZFUCf54ej1pr7vLFAy2wUvSbxeD27Jb6KwJxPUH9WvGxxnJrMx2WsNeqqERvkC",
  "key20": "4LYb72x2DGruSnw8XYEQZLUdND8QwqmA7XDhxpRTwGQDFTm4G5JNZpT7hxmPUNmv3D3hASvtN4wLXNjjutZNNoSv",
  "key21": "38x34ET1MWmtaXaiiGHxAJKtQ8uP1heo1bhAgitPXJe4eGv8Rkw4aHMpLcuGFPCYo4W65KHgxY44eAqxvkUzCf6u",
  "key22": "228oUCY41pZ7uuRxVu2iANm38da1fE2oScSpLAS9F9HBQjHYCRCHNrZjiyYwxCXJngqvRqLyFQbjXCUNVpQXvks4",
  "key23": "toUcp8dtQ9dRucztpTip3kDnwLV3cSoXGB8qsAoLbbyujXNbXqFqksG4JGnAi8WH4hNDsKVfqwRJ4qZGJvDGvAJ",
  "key24": "2QDr4ZgmkHuyoF1MPgNUDaGkgNemd1iT61jv1Mz7tmA42hqYY2rhgYzKWzACV5nD1poueun1nmbU3MZBPRrUiu1F",
  "key25": "3Zs3i7Hoz2UDMRTT9J7APfMJ7WFNemoj8B84mM4k13qhXUXQtazbZxKhmxE5pmBsJr8eQoPUT2mzZC7Qoxfy89d6",
  "key26": "47EJW7NAhAk6rN67v7LVuEc7AQzXWybR9KC59CgjFedDcDHJDahq5Whf5jxiGKREFKbavj3xheCtfmcTPmKcrdFa",
  "key27": "4fiuSkpP3EBpttX4Ca5teRNED4uZYso7XV32zvRiPS3bXMxzmjHAJvcxMk7Vjdsr1MtXsWpPqX1PKQr7HcCmuVD2",
  "key28": "5Xx5TZ6npfZjGwqyKWawBZg3uUNafU8K54C3FJXR5G437cCBbsFJdhx1z4qxMvmjnHsinjoTvExKVhpFGaSc5Pwj",
  "key29": "jAs7ZLBQ35XfbQ21928qFdJjZwqdHkaRTgejy92NZ9khsHHjcqp4JnLZWiqe6i5mn3HHAbU5cHdqvLxabnNXZT5",
  "key30": "UYEGrTeQCqpX8af53wtY4qLTbfjctdoukZBE4CNKvcTPi4TbBaArHzTNnjxxaokujcSSVfcxHyPQPQAZZo4ZT8c"
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
