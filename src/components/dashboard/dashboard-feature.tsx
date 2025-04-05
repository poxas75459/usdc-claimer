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
    "2TC8NQ8zVvGrwUKydKW9c5v3HCkez5wvQpXtgwvB4XL6ndtAWbGrEbPG2XHNLq4HsZ8XggULjUJonBUQz7nFVVL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28NjvqNZ2iUtmS7AD4U6RXfjSQbPadAcW1FGYx4vhs8po3mM5Kaqx8tmhob9DBWykbbb1xntzhu4sHdNAQJZj1wq",
  "key1": "38R35PRFmbG18ubLRNcSw8QF8QyEHEZrsw37si5oThJzKqGZWXqt5Jds7FrYCuM35CoKt8VTofxVUom119XcYGC",
  "key2": "2ipGmbVhT1sTSmbBR97uX1BjSn7FMv7CXc68u5v9tzTkLn9TK9qmsKBKGadpYz4y2S6uo2qkH7sVDxtKCJBZEEHe",
  "key3": "v7SM6jxQJHWTJ6sJcmnMHEf9TdTaUb3W8zjwWvZr4HKzjgoNjavhNzYpg6w64eecLt4PCLS1RrMBenmwhFVjacY",
  "key4": "42YfRuFGj9oNm7QbFSMMa7Te96c7eKsbxjXf5AUWr8CQnqEVvxM6KXsCFXBWp4dhrsyEXQTckqybgB9oRPsszC6r",
  "key5": "5QK756j9ad2D3erqUkqg7hydsxQdyanySteizYUSnqe8hgHjXDQNmsEaLjHzXPBpaWapPCA9aZtxF1eqSd43evja",
  "key6": "3nrUUNHSxM5rxJP1tSKRghMPPDjyaHXe3DcHULp2v4kd8ianTTDKDDWUPU2sAc7TeE7UwXrTz5vuhTuVn5BScZ4m",
  "key7": "5dAM1LYTxfun4U9DHTrqRFbZdgx9wnCxwc3Z42dhNpFxEinfqQx5eAWDs9RT2Yr8zCfaMnN7YhGg686QFzm7Vd8D",
  "key8": "3d95LTPyYbjKH9ZvcZ2t1nXJ3JCM2L7LcBGnu3Rt1sAmDwdqdcf43of5rdvJUfw7V391YMttQhbRDfCqnFQnirk7",
  "key9": "38h34en3uA3QD7y55wHm21dgNmq2Sk5YbRH9UYM4Bi91Wt7rCLsL7DY7XZ8tn7bJcdwxukmUqyN3T3xzwbkiWBrJ",
  "key10": "5pmX7jpHC4HVuJy13UFDeGwd33QtTdJ1jnL42xBpaiLHpqeUAQHqjedcSWk1pfuenmLbhPHxN4vuxgQbkojqNXEm",
  "key11": "2STboH9tYnHs6wBf5zxCHpYGMHr6x9bDFg95fbwvNBbLVJjL5CDFSwm5CSj9KdqyEJnne7FYmBF3RdMqypVg8otU",
  "key12": "3VHQnmz799jpnhqtF9uDMihG4QZBmL7uVAzpmxdHPtp6hKt2oDmaHkBMHFiqwmQw2e2YzQ5tocJqtQiwtcA7UQ8B",
  "key13": "2NZUYp3d64PpNbQPKLVW11nBHb2Jji6kRU11Txm2GwsYVi1aZjqJKtKQCREbbYzRHCrT9t6ohetdhUZBWJhviHjw",
  "key14": "2jeCUijGmFRAqhBYMgdqU1oDHTXwfhTVSH818MCrAjWikFYywbNNLfg6aWB1inbJt8fALWHp28D2djoqH8m1qAZK",
  "key15": "2jiq9ycGV91ZkrGN3fu4j8emJAzVhgcYywBKn8913Qq4fXucdKKap45X87R5end2gGSt4hM4o2wFgUKP9xVE58Wt",
  "key16": "3PVjEFoJgVTKTmMDyFRWag9dDxczT9Qa11kvBVfUhj5om7cixHqkr9BeMWAykZBtPtozMauRDcZmBks1kG6RbByj",
  "key17": "4KpQeFd6Jj3Ck5y4ZHjRM1g731AjYtQuefcRwiwfNeM6kMvYWXKot6nkUVt7ni5oNBo5EXwKSzH1xLdMNRZJAgg6",
  "key18": "3v6qgumjjo1o8F2iRcknxjknBUp7JePYa1W4CAjr4TLJHjBo2L5PWu3wUbGghtf5UzshQjvLyebXXUPXtLb4pB5K",
  "key19": "3fFHLat8M482N3VQm5NdNcN4W9ZtNiHNGhEcQ6zqpiMipjpU9Q3oTJb3aBMpib9vD4roS9dgkGZW3gPC6YREEFvH",
  "key20": "4mM2u2sfeq8yMsqx22Z7jw4LM5JD2XHiDf6Ux7ZiQTiq2f1gDUPLsx715QmhcR2ws6C9MxfZxbfzbKwKi8p5rq5m",
  "key21": "2nGqxhNcfeecZ5uEPQkfwnRgaTLiohE1bwvUsXaaUfhP34RPRTbeuQb3fRjzZwCTp3USuqwgFdzjEHibfYiWByqh",
  "key22": "44Q2HHMDmKwiqmVKM4wNysvXgcfhEX3MEiKWrwtQeEY4M1pCgeE8gqBxUjcfjddAfmUfbT7GR5JWkKfCUxHQQvb7",
  "key23": "5Pwec9H493LueFqd5QzQmHxfR2kfBXJ6o2ZGq4QjM9nmjDLpiJ1qTa96ieRFrWXFe2vtvvTvSUdUYo6sLehncveo",
  "key24": "2pZMpLij15y21rcX8js4NRv7SXDPkfFCYHFBXZoLNu2je3y2JQL6xA4VaSUFqXYeG7BAmCZ9oh1PMFR6A8owDAEH",
  "key25": "5QmSvqbwpGn9p6sQ6rbqLACskyGUhorQau4fhNMk3ojYS1Lhev6qosyd76bCJKc38KPiaamZJu7cXnaawDfc9MBk"
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
