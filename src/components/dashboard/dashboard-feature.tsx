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
    "2x5xjTCQuXYJgqmVfZybmDzCXGX24Qn9fpubeccTeYukdLwZHgraZqN4x6vHrBBxvGopEaQnUi9QH5WuThamfMh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "476YjeYifraWsBWV2L3dUxj127P4ajMXH9fy9gAeeSY9AQmic285CPZRCitDbQzGinK15x5rurKpSJBEaBMTMawJ",
  "key1": "529QkcJSVuUWXAEGvSdhqWQBUKyfVXuUSgKa2HJ5Dpi653utWEAy5dSNnQFckq2V4Pr6njnBHJDKoaeEYt3q6X9n",
  "key2": "5hQBL3djGqmhucEQ4uHY2YkpwS6BQNtpYyEJRn46sLE5dwb7XSTYtc79xGovzRVQ1gsNkqUxuuk4LpaSWLHcq6Qt",
  "key3": "4E6NtejspHVhCEDMU2RFwfiX4G2NRQBQvSH6mzqGT63JjdAXL6XA7EVwMpNC1dXWD2xV54y2bAumVdAZq4s3HJ8",
  "key4": "2TjQDh1v6aeJu6rwsFpLjcMtxHWtj7n1icgi4VAe9uRcKBVHaaq25MFcbYt8KJpZ9k9H3ZQSRbqywXqDL1Pp4sKw",
  "key5": "2P5cS623QYD1sHJeF5QUJb3qaC6VdqczH7wJeqJFRd9ZxWbocriG5CueAvHx2X5Q21SyDqNr1fT9Z1LEZYAdQ79h",
  "key6": "qTEJ5Zj5QKBgxbV3vgmhpZcJ5UmMyTtTqWSzV3LWvMzAdNuH4aZ7LKp3AvDLcxxY8Xn4nvWXGdsDZFr7iQdSk5f",
  "key7": "4RfAer1qFMPnPfmbsCps93FePyRoTFoNn4uuGDeY5xAtGW16bNAMCpHEP8jw8YaisfJsrpSWRz2RjcrvRggCfSkM",
  "key8": "3s6fdpgwWMBiPojvrEA9etLgKWxy9nxEmkYdNDTetudYmnhsF1x8fdNt5YYnoA4LyBvWrK7GARCnE3ZAGvMGQFpi",
  "key9": "SX3hy6uEmNrdZwJT4UCd1d4DSw7McZ5SVKMK46n4hXGFuUjuRgBSfvVykL16ziyuj7EejcsCruciPCMX2CZx8B5",
  "key10": "5TtMHgwf7dwSugRJMHV57JZXuJdqnRDYcnDjEbBCxCi5JNYvZqFFLsSrC84PCwKzWT26HNu6rmjzc8hTwoofb1HH",
  "key11": "4juqQbCbwB2NzCrEUBi9XpkeNFBKyYZhiXKguvNGWtHzqhegx8uzvvkrG76tq5RM4MPiPzS4jwFTHAERVzfsVZWn",
  "key12": "kEWYgyHxMU8G42YPtttiMyT4LU1F5e16DEbmHi7Z7KeCjo83pDUGC5WrRjswzaXyxpJXYfTSjMTVm2HHmv8cBZh",
  "key13": "2KFvWja5UEWDe5jEfExFLNoe62VSsjTV3yz9FXy6uaBE295RJoaEX73b66JNjCrLDu4KN4B3LJpDYaDnqYKH9QBQ",
  "key14": "5b35qAgLqPucw245399u91Zu5gTjmYzfVoqEMLy3PSwv5QuH9pVVSuvXm7qN7G35UdvoMiVb8EjyPAygm4cs2t9M",
  "key15": "4CJHdPFZYZVH9MvZc68B8AgvTV7te8LfTDA4HuTfffxXZeMnkpccjebRGWHJ7wcJxmAAnPGr1QTNbbY359R9fB64",
  "key16": "51a9uiSHW4xzUaw4FraEMZUaoS9SjvddA6XY3NumTSwCsUpJPytsAPdV8L2BK5PabYoFyEXppxDZouPGox39wTPU",
  "key17": "3oKNDP6VXUUCcP46jorbJs1gwNmhpXeZshQzrnSGG8qYHvijWSUm9Emj544PfqqgNu7ZiKj6w42jnMtiXMQsEDGF",
  "key18": "3qcjsijsg6Bzepueq1bmY37Qo1gDfFj6Q2fRVf3uM8wGFQkHECDWjBydN44ByHcL4EvFvVvymu6tCax1rYqzcgyg",
  "key19": "XjGqLtS4mUwxayTVePpAnXJdk4Xr8qJNCMRg4f5TWCt5MsNtyNan6qoNVZZwKGonA7mByRKgdGVEvi3vJ2dwzUk",
  "key20": "5qB3sD3aFJvBT4vvYFwMro3HVNWdu77eoZyv2Y8tZEoSpvtjUXhhn2yKidWBhMJYQwEGF94Po59hdvnoVvr1wnRP",
  "key21": "1PrN4hTpzUSqgB9LuaySPrgvtUWiieQjMz5hkWpSXh8PqLGaGC8h5oebJuUt11c6HKt3TL4oLjvP23WVvNvkCQ",
  "key22": "2W2eD8LV8ceshEnZQfXnQbcNarfEWMKDGMmmDqMHAY59KE9Xn3sEYiJQCaUDNQV6TTbCwpWve6fkhAo12TgUeaCk",
  "key23": "5zVCkSpEisefRgn1rGVy7vn6KbNGJp518G94fevdAdRYwjobmvT1qqcCywACewMNpoPq2996rQEcoVeJD7zkcf7T",
  "key24": "2DK1zddRPRvv5RtgeQU6BBzCovET2dnRVJ1mtfAwfsWTC5njuqiDbop9bd2da1FrUrx3db1Hp69f485BRcnKKpjG",
  "key25": "2WiDUAyw1YBQZ6i6C52DzRdtqScHMhB8gp2nPrzXMPZ6m4H91dYy1f5ipW3ArWYkTZpw6tveV17Y1RPiQTMgim8P",
  "key26": "4gpno2LWpnHn2WZTqMJzH3EmPtriHUxL8NJTNLBF4tPdHJD7e1hFbBYVmZcfBbUpay3MuTTZSLRfXSAV8r8tuL34",
  "key27": "2m2RuRkZSxJjvAB4jM9Nbf1x4oCeKdrHqMacyFWBh7UjXQ5WfR3195TvDYpPu6E9GdWFdsEvLuZYh6WzmZu6cheJ",
  "key28": "bxtAvzgEdkw4igoxmesFDr4kbfkCXRmW7RCaWpcwfExYaTFz9taNkfgH8YtuQk22LwxXVU1ffEQgmHQykyLSMXT",
  "key29": "4gLyD2J85jgou9XV91RfoZmnc6zYTzT7WGBGjVYqMVAEf6YLEdG22tqaJ1m3R9MxS2iTRHWtsU97LDCQxnFayyPZ",
  "key30": "4U6e73Y41ZqFaQ1YadK7Dn5nuQWgonk3qKx6AMg3zjSS9nwuNqhdQSQ1byMEkBc7drg8HzbWwErEMV9gmXUL7u4F",
  "key31": "sa2Kspc66hurpJYdit48gLsoxJpwz674QsCxwbjeLeWY6xa6NMLanG3yuQ1sJJwCxVntNNn3t72dUYGu8oKG3Rc"
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
