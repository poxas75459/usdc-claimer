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
    "4rrQXsjs1nZWbqWc8AL4gPVr4yXZAxKPsyqWWAgW6VLt1qsaKxZ4ZYZC2tCPCMnZFtoZKcWmben64ReDjEZUGbLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37v1BeQRuUrMZhTY3E5kdRvC3aD9Krd8TLwV3G9YCPMbTzVgnwTbzoRA6QcKpSUmDcYavRXtvxbs3TpbGWPfQsiJ",
  "key1": "3cwrsTE8AoWRZyMKJJyUrfQhSW96Z8DeNaiDnPSdg12WPN1M32dNHnkAmPMhN44rAUYKQK4h1mYmZ7262ABku4qG",
  "key2": "4BUwjge9UnMFLFkh9avF4LuF9KKpkgedkYG4iXpTz8UXSFaqgrgwKBzKp7Fr6SHWpRRvPiJnt82n7dHabtN4BVr6",
  "key3": "59Pex4JBb3YBxgj5riimPMt55as9DTHu6C1x1KxwP4aKs3HPxZLjFjTnYKiUUqCy3D2kYc1B8uFae7Bj9B758wqz",
  "key4": "2svUsHaiiYJ45i5sHBkfT5kt4DkzYTK8zzWgnX4bt8PmTausmRbtMY9f4afowbJYpsReQupwsDqqVqyXGcih1dvZ",
  "key5": "2JJcm3TRb5YLejitx2M5GPLKTT8fZyj11aY31Y2KJmMunQSt66gwSY8B4ESirnjqhu9WtmhQfXegrrBHQNib6PW7",
  "key6": "4jQ6LbJU55NTsCTDAPhy1AVzSU6kDYEpNeSJgQx6bX5u6gUnxCZZYhL91zhH2JQNdMoaPaWGLRnytQ8qMQi7Lz33",
  "key7": "r6GDrVM1Cf7ACJqzdsK4nX2LBPB1HoFJTAEuVbJJ7KSkKbHVXMVj7uoBHro9CLh7sfRLA7TNVZ7EQUU17ci3aUY",
  "key8": "2eZfC6Mw1gXwFNZM9j6UbHzfqGA858FKF2r2YbvqY4HVTxqA5rpRfoz41mbXGTi3VDNXGAZHoHF7bsWm4azuQAoQ",
  "key9": "24i4skT7sFLnv97BnVPxrssZG85N3vqeq41R4ZUQCXceEKCGr5iXnQKnRUyvBzEEWHKh5jUBwXk412WxrVqKDCnR",
  "key10": "3yuk9fkA8xpbPVeaQTPWXynxo74apYh3cfeBHY48cU7r4JWMuxsAPozN68nKZUruUAz56QRn1NUoUPjUxRe8CzAy",
  "key11": "5ZMUDYtqis24ftpTWJVCTHCnPPbShwzvGu4kWe7uqSfQaXsUSfPo5CWzib4qdMmAv5z5uVkkn9ELY76uUnreknbp",
  "key12": "2o3hBJQiLiBDDrxgbv62pdAX9F3biRTrxMBQzFbechUAA9TxVUKW2dFhwnQhTLuQMGu3Q44z3KouaRCiuJae6rbU",
  "key13": "5hQC1MZijsXY8Z2Rn2PupgNo8i7LahAo8b7gSvboaVwACtvndFrGWzDPqHiZvHhP3pTf7P61LDZZnwhJAAr9ejhT",
  "key14": "c9JNrszindeCXZmC6PyyYsRn8qnQmED1pD3zLLhjmcAwYTE9KrymxHnKHBqtT5ZJwELN2aeRZR4wF5xEbaKi1H5",
  "key15": "5bQtkQjDNuNgUC9dq1UbqsnXTt1iU72a6PHpvFYfwdhNW5gJUtwA6UrVTNwbEgbtXeEXPzhLFy9bKa2P2pcv44Nm",
  "key16": "4tsEthZCnzbjpRyUsZAyck2593TjAi6niyzRnVW25dd5RpePiDDJMDNiWbnJGLSzLwBJxnMutEVS5R9m6J3sYrsN",
  "key17": "2WbVP1Px4oTxr3JVuApuSknVAypsz9JTWB6Khomr2ea7TvrQ7wugQCd42PJXNfP3ngYy2xpf2LVgKLb71eQyBKCW",
  "key18": "5vNyDfG4fxdinQp1RgWn8pjdauPhJsStxpGZGcMykzftV1ded2gjR3JSPrNeUNF6hqdLgQkTYztKZgFanHkUoqpe",
  "key19": "WSP178zAxsEGAEWfqnzZjS1rQuPVeh2oTs8gFnDXzgWzwV5qRy48XyDPUTh3L8UiHFzMYeJoa7PWmv3qV4qJJMf",
  "key20": "2dArLueWzUcgCZ6CWBPLQRadDkjgPAwiiozu3h2kjtvhbT2mChmuN2uokPiaaD1ujAUDFLk6iTRfqWfiuHkyQHxe",
  "key21": "5HhADxSQ5Q8Y7sNYNi5LjJzQQxG4oUFqk3aFMmK7UizgmLQPGPhfFXsRj9haQRzRdywSQjvvx7PZgP4RJc1oLYZ6",
  "key22": "61EtpJioSLUxzS68tn86ve4XDeHK8KMCuB26XN2VSyttNY6mwWq6QsnjXrueQ37B6TjjwTKesynFQ9KoWUhqQvcC",
  "key23": "MXqS1EAuLBkhQDFTZ7MbkPwBkxjrWSiwyDvX1sUTYJ3rPmRoKX3PYfnM7XeMvTYHHjQudzAJNjCNA4tn4wQdpbT",
  "key24": "hgyi2rG83UWD3cCnYV7uiJcMQs2MZkRQq4ZaAGYsP7D1pkeHFofahkLnBAjug1jo1SeU1UFRzP6Lq4jXMEghsAx",
  "key25": "5CQShutvqnTgbJuRLtkYjX533uoxs6g2PczpUKALzgEMhaek1JfZQE13F3ATQPPFmEPmxFNn7sJtcD9NM9nz1sxf",
  "key26": "2dAMkD3WCyP9Y3ZZrbLEy8vStwkUJFjhMvphhbhHdg8NY9Jt8k6EYaKEXh4Ufifo2zWgFyvbYHCsh2gS94wR7PQ5",
  "key27": "3s6JYuX9LADXrdCvPoa8RRJMStvuqBuJVCeJB4FdYXU9xGR7fHUUTMbpXi6Da8NijBWcm4REHDx6zimWNQtrD8ik",
  "key28": "4DKD7HFY3w1VbCfk4tXJhbkqcPAscgRLnt1QgsDkGdG1ZCi2nZmP1QjZukTpoEHafTGBUqACG489TdJystiEjUAX",
  "key29": "5Z1koeSTnmiNyGc4fr6r79s5U1DYEjBgB8obDbWpGmwHKGqxDi7UVBD8nSvUADrbTSbimTsJqiN6uK8do8mqjREP",
  "key30": "4Er7wGAKZmTqwPkgLzWRzyM1hxApTdHb8Zifj53JSNReyeYbKakpKpXGedcGoP4g37jeBR7PoAwPEcnBAFZLWzg8",
  "key31": "2KoqGfg7mb3Hww77MxSMX8HB7qUiwLsEbHSNa41JYbQ1ttq5kRw6aic7Rc8br3NWJbPTTKHpnM7g3m2rJwgg9CeU",
  "key32": "2fAPkMpB53GaJ6TCrJQ1tpZvje66puaJCnJ2425b7rGw8tqE23McDamBsRTB4NvpG3jQsEsBwGrF18oint4mCJJ8",
  "key33": "WyFSnx6DqQmdV6qa4TAWm6mEdqygYEJVQGkJvAE2SCDE5xT9sBJrQE7WZBNQNrg6Tz9dGTFW17ooAheq7pj3rnt",
  "key34": "2Hzk9LUecVAFeqrpjV9DN4TTwH6AvM5REUHXu5z14oVXrUKLP34N5BbLhJVghnquU78L4jfrkCehSh8fmsACdADR",
  "key35": "3mbt1dg2MgjXtJNY21QMBbBXSNGyBD3d2NSF1PEpEQgX2fDBewZxGL5J5xAGkzijNJ8Yn85NhViqz2vSVpH2RHnG",
  "key36": "63JSMkJ2apyD8mxpGby4fX5LGebQa4dgXUXcPwnD3i26f6UurzYb55FTY9jt8wDfbziMzEQ8kAbmccVWuxDvAMbs"
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
