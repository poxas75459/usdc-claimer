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
    "63qvcMqLohrRwGtNSPtp9SoLoRp56mCNKYa8rydSh37KHRFL5EYj5ftCCaU3XDype2eWEsJ9ZzgzYqUn63eN3jDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E2Zs3NQvRPko8gsMyVAcxiJpRDqeUaL1rVvGeFxK8gin8qfLjcm2jteXZeBVNhP75LPEeUJ4zNNXmjppfAEaFct",
  "key1": "5Ye8txEHq5KW4bSU7bShFuXtvRzq94q1ufLUEDYS6bboFefgHSDb7tjxEostBW96RYWUyUVFYmqidAZMaVBeAGgS",
  "key2": "2iSdoPee2kSegXDwtBjLsuKHWxbEfLBMxdGV3YJc1fxCHktZJnP3dUsxXrUtdmM7ytSNFnnnxci14fQWWrE3fNma",
  "key3": "2ogU7KrCiEpbgRKJ9zxEByXgv2Hay7HQCxxv2VxvrgRvAq3ZEFZK4AwhX4i49EESZtNMCYgYgkPx54WmGxDamqyt",
  "key4": "2QqP943NB13ELBCs7iJaZ19HJuWCAU5RDrZz1mSCBbg3WhgxL817ohfaZXK1vuAbyHspacywFkv4mpyjfRHMhcT7",
  "key5": "7U8zGzZYxWYwfyDbdzEUK6kDqDKiSTZ5zPGTBvFtYTrVHMfSRTP9CFgmcnDJFZ2jA2Mkx3G2M3WnXPXYT87r3di",
  "key6": "37daU6E9io1EhMPm1KDwQHX4JQWzQuhGQi6488tWiEXMabiduFxMKQNUzpQi1N3Wb9iWDVPz4yqXXTb1nZrD1e1i",
  "key7": "4VXyt1fZ7K6ghqbno2VKzU5DvuEg5wtT83CsbTAcXrP6iXWKEA6aLLsAjtE2DTm84pukLxvSWoWrmGkN9UkHdcVX",
  "key8": "2CWhPHRW4CrXg8XkDtQW3UwmeNGrpnw3aghbbdJs2RJP6TjA4hJyGNtySHde29uKJeJA9EGkh3dadLVjAkQJxR2c",
  "key9": "5jgKjweNM9RsFFn7DbCwAu8kiZHd9RwLNpwGPiYqDL3L8mVdQrcwWunwsj38M22FkaS9rtqjhdtXqM1XBFjsKyqK",
  "key10": "5oX3P2aGUNFnncBSZ93wyTGNqyxh2RWGJyT9MKaQ4gtmH1hEaV1Ps2qDd5jXzukiZY5ZD5uSZMRXaERDTJ2JKQzb",
  "key11": "5dnQmEvpcgGikGifE1Mqgzd8mt5mqRTJWGvepDgwUkUprqpE9fTeeNz1iyFNTGDBpF3nKGhSGd6rLVyjVFmWpVJj",
  "key12": "2boA8iURT2x2w8ckAHnrbGWJG6czyMv5MMSe2Xuc1pYQb9V8ofTAfxgobAqd3esmpXKBQ4o87nYQ1fKNvZiiTu9u",
  "key13": "5EcGQugb91begocTY78zDaYBM9SuKHdNEJzfPWuEA6JLcuQVRQojcamZEHwfQDGCA8Wi2X47RAJFZxRyYg6iFVZv",
  "key14": "4qH8bqrj6MRqPqf7bMUcCcoEGucyVwAi72MGEgeyCc2rJpzv5EpkDRksFzeFrF4D1D4raVjpvNMzduVYSbiTkKi8",
  "key15": "2fWkNRwUApALsNuMYiKuvna3RjCX5nECjkVgSyaDTvofsiG7bmqgxnDmxScNjXZDmtv555p3ehtjMv1WEtw9J7Ev",
  "key16": "3HafyWg5CJyqfTpgUSt9VwZbQNYCDgwaQZNuAG1j9pTc1J5vPXuhEs47HawFYJKQK12zxKpabq3agfKe3ZsEMqxz",
  "key17": "quXVjfRp344cGHkFRfM77nVgKE6gBzaYWzypbQvuk3cxUUtmYrbYQRAy8JfLhKymVozGoe3Q4tGtXM9G1DQM5ya",
  "key18": "41N1dp1xfmrx96HBvvsNLA4McMxEJpbeX1cE2h8YJefaq4rtp7xRHWEVxVHWiKWRnfGykFXeAUdrkLMgxUj8FQst",
  "key19": "rQMd7UDkLYYvjkP2pFFuQcMxxa2ydCTRsaokNaUgiQRxJQtJm6FJJDsTZzXGuLTqQ57Sj3c1ouUdCpSixs8buex",
  "key20": "3ZzF18jZc7sUiHXojdgBXQJE5T821Ku2h5VhS6rwghU8PQfk65AoNdonPp88MfL4nNWC8cJavWtixRQrwrwhSUJb",
  "key21": "23D2Qe7EwFdDRAyZ3k9QZjDDbQA3PdHzZ9NMi6uDAMqBYJB9ona1TS2XvASc23isFB4R2nXkKjb6XqxgtonUiKxx",
  "key22": "5g15pZMQmg7oC9BBrNVy33Lj4WnYJRUssyuehS9bXBcpma3eJeKk37EuBW8WDbEVyFrNGGM8hD3yHHXeKGHRQZCG",
  "key23": "yTje9KzL3tYuLV6AmfShtEtAuBMXoEYi7Rbiw8ARDC6n4eLck3nfPhdMdjah1qaD54CKfKBoNfJ74ms3n3cnbF1",
  "key24": "5HygvBGewK8Xr6XPEwRrNMLe2q5y1vuzkwa3R3KyuhshWFZvBW6QWTGmE7J74hUE4R2gebwDEG6wNCtUq39nA9d6"
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
