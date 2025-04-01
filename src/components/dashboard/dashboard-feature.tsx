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
    "2sGDzGdvdrHQngLwCfYPXCTT2iHGHHXpsgbAYNDXrvTTkb1BX7QPnLXkMjmwJHvpgEAFKaHU7DXw1nSMv38utqBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WsjsSxgZmHzEDTGySr31a1XHQ2yrTKvR74vvCJQokQ3BRbwMy6dwaYiwL5pjV8LqzemtnhMj7CVJLwpj52NN7j5",
  "key1": "4ATvbA3iR3porvJZoWakuRv9Qmyxn4wsuipxMPeHptDR3PbeEYA7GdQid9bpkzRqK4p11Z3gbGGZU8b3hXmgVnzr",
  "key2": "pD6xUXSjEWFZmhTfCn5zqZgPVB8mdfcLgimuzXei1vec7EWWAHEyw8RNUq8iHtAHjMYg3thqvJ6VVh1qXiAPxkV",
  "key3": "KbiJAHGp4qwsGYnXvQjmdFzH58ZVreJ4TctRMnkntDRwn3BG4syGiV1vYzQbsqS68NYShcxqUzQ2Gycb3oaByuG",
  "key4": "5kDo4isC2W3PYM3qYsyVGa2GQFvcNf5SZyPjxrfNNiLAukogo9Mwu1d4i2TsoePJtpous4Y7DAZPpF3xxLtD1Hn3",
  "key5": "3oAMgv6qyfi6LKcnb2pSMfTmJ1SJq3BDaYjX11FvoBpURV3hjhbNLtCgCotbbQuLkokqzWDVuhF24DBUwCySFXhV",
  "key6": "4tgSwsyMSqTRjUL4ekkcdV1Z1VwB4J679A7C5GrhzZ1msKn9VCTSPoUmVQZkSdmCVJ4RKcDipmQAB63tyWHpoB9w",
  "key7": "m4ypE6bYj8Mg9jSYLYrkShrdD1W2vTKtZ9Xdv6VVqKeomgwPprpsiu73XEz9Bnb8maTZPGgSCMaCJF9FySKqUcT",
  "key8": "44DmrW65N91W3PskRgYWrR2YC5EzGwT9SDxKWNSCQdvib2TudWQjAy9Ah43BtmDek7PZCqSey5ZqxTCpEmvdirbQ",
  "key9": "3SS5cLE8ZGce9EL38Gz7PmRAu4pK7dTpLsu9WdvcPbr6BPFccFc4WzungMn5YgeGcN89wS5GkucHH9ovTSFd8HN7",
  "key10": "4Mxv1K2FyjU9Q4uwyLtrHMwNdWaaDmeqcZ9ZHDnhxcBoX9fMqGgDW7BSERLdVzsTWJE33MJVEVUDofG5744H5VK",
  "key11": "WWuQnKEP7qdP69vNSHNxdidtj3jmrHjt6P7Ni4NS5EVAhey38sXkhmSdyijmezDVYwngApmLPiReMyzpCt11fwv",
  "key12": "dxu5B7YDUckGpErkvW45dmw7KZ11yuDtQGVjTjPQfAkzC1WjQZk1Kyx1Ryp6Cntn2rdGxA22dSsrtK4WaevKqCE",
  "key13": "4LQTzjzoydLTD5rS5HxjAYfveb8k4UDZKRVpB1abh37PVLw9Rjf6qJawnbAhHfnYC3u2NvNje4VkXNZk5jXTqYUM",
  "key14": "tajSoZUrDb9gJeUj1Ni8Yrn3By5ByhNwtaduP3tExeq734tzAgcorUdt7wT23bEESAPKVYkRRf8RimpePvw6P3D",
  "key15": "4DnVERuqpmYNoKcthEFYrixTQqtdY85h72hNcxnJGQPywo8MBhXxGSjtVuvuM3tPKmJ1XFT93DETpTNQJkYGSXF2",
  "key16": "4iGkFmVnbdFT9b7BS3oEnD87a1YnVVqVwtjL4XgiwZWtyY1HMJSKui1ZD6s5LwF8RV7FRS5YDTM5Yk4zuCDnPBt5",
  "key17": "4qYgJYFnauUVxx8mfKDueeo5H16XQPdSpPnEYbWWL53ZKeLbDhd85bctouccgCny8rw3vqZE6LrGxMqWdhiRzGRx",
  "key18": "2FsBJ5uJxhTu4mpiLAZhqtqfSihw8iYM8VU1xkDfiyU5ZHkQvgi8EudQ7rtw9mFrvGQMY9nSXBBbBUoMh8UMjvXL",
  "key19": "mf6pBPk8jeYVPr7TspUG7o5VxMZkUx2SPJKiy19QK8napJNzBZZqkncy12Pj17cviAP5pCHcdNxao3ewJS32Vqo",
  "key20": "4Bdgx9ZSg7MwKNc2uaTvHdbJjDjPdazqkLcRQVC756rYSKxya2kH7WQPGnA4F6Pgdy1TacbHTz84h8cVo3yNVGBF",
  "key21": "474PmJzLPKcSeFjWMwkhp4KoZuTxubzDRq4gyc2iyhnMvkfQo5pTkFZKAchFvzGd9CEWxTMWzmzKVXnSLoJ6vJYC",
  "key22": "4rPoCf6Dqq7FmjMxYJ3Q3NxzwiYTsiumrW1RZhoz85rKiJQpFYNof76GgakgPyAAX2RBvfKc2e1ihkDkgpFYY1WQ",
  "key23": "5fiMwb4NYV8Xo7pw1s9y1tBm7HpCamfFpT5gC9SFFXW3g4zv2y2vwUUpnioU6GpdrQ4pukXahNMQhvHLiDycNXym",
  "key24": "4LC5N6PqYe4fN1JbToWf12B7tetjALpdFEwZ8xRHYUV1JfwLg76nQhgCSB5M3pjNaJengZoC1uS3r9t4wV6fPgEL",
  "key25": "2Rs68SB4kWuXufz4K9LWB8Neh1yUDCHr14hPHP82zAvvsYh9rv7N4Z1mnGKsQC5vd3SLgAjHxY4v1jv79zdEFFth",
  "key26": "4YZp5tKKp6ARHdpx4JWdnivYbfER3XY42Fm2Xvn83PdgTT1nFUi83LjW2bvKFPHYDc2uSHngnAtskqHeZbes8iLd",
  "key27": "5hHTsr6cmdq5pFTbUFrugRj9HyWcdD1SqtPD2ZXzjv7ia79Wd7yZNGiGYTJYzymjRiTMpwYMk7fVwYDcYhoehGwE",
  "key28": "XyugK4j1EBvvnTnoxfkYvDAQtsNJ7uWwAtVZK9cmhGi2R2Vsp35CUNz2CZztqe8nPAGMaRqVptgVwKWfaJzvwku",
  "key29": "29wvMPvC8Zb5CyUhb6qRCg9Z5jguK8ZJLbXLPNxRV4rFq6VcXSsp7FoDsapns57FrZGWtWfAT3pJY1spuEVz4qyq",
  "key30": "uUA7nh672iYymrYgwf3y5wQZwojgFGQfppH6GoJxp8hpojX9aNZ4a4ucGYWe4EmhetrTPQahE3etZAzM4M6rrEf",
  "key31": "33DngCPnzMrbA75NWzxXgcmdBBetQGDPYC7C45pCQy9ACKDnQMLbKBkXx53hrmN6cEwiqeHHM17cKh8kQXpM9kKu"
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
