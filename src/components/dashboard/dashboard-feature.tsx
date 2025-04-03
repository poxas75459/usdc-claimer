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
    "8uQAgchae8BuLfj5QpFDUTTw8YH1UWjyw3ZDYxYhw3VL28a2FdsbtsNKeQLbv4gmzQ7SYe6aKSzKTam8aQ5xK2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BgXxBMAd7jM5dZkSN2zNK53ZgjWaYGwbJSUAK7WqNo1AnwRRRgKFAPhJfGXT8thaJoXK3bQEjCoBtLU7wMogr9n",
  "key1": "5E31GNfcUwLk3yaMemP5dic3QMJNQGsk7ZRjXE4JdkRLu1wx1kpfigQRSLtcAz11kuuaUWMzAZaSxFfPLCY1bijk",
  "key2": "2XUkwu9LRMpT2cVDCu5SHvvzwKx97JU2xdmxRFff8dXufPSSfUj11mzkS6hbBVXtPyZUz1JjWDoytoNeuCDQVkM9",
  "key3": "2aKyjawYHisMCZbR3A6srVcbMYvZ32oFrzAnAYu5TSYARyubTNYNFN4yZan2GS4Y7vmw418XydqmMkxSvC1CWohT",
  "key4": "5L7VJn8s3qXD9EjW3jz8GqFs68oTB2G1prkcGS7agHKgomBYh2n3u1vZ5JpdVYdRyNb24z1BL9pyMvgFGHMKY4BD",
  "key5": "5MY7Q2EedwckPGoCkwDx8f1HiBh2AmkcgWCYLRrDA4GCckGXAcMAkybRwgtUA8dfguRbpFfmzMZLfFfKcm1nvrEB",
  "key6": "4KrmqhQWozHbJ1sk85N5wxF1Tthj19cUY1zDEssU3M98qf1w6gJus9ypadEYRWoTeu1yPDnHwBNxWb5nygASxQFt",
  "key7": "XUhwadskyeTAxWdpYDYELnSozP7Fqtq7V7DYDX7V86Y2HfrybGj2zrhM2UWJBamD5FEAt1Txg9coCCG6GtnBgmj",
  "key8": "2jL7AbmUf5U1NSomtQjkJi8gwdqh128ntjQFJwHixV4kjVzyk2s8aenoo9Jd3FtK5tTQfza1jTNVaDVMe9ifJ6E8",
  "key9": "4owWSgj5xrw2EWkuxjv4Fd8i4YSvMvUiRyDcuWbA726QqZ1nCS6hSYoFJdsWDKwttdBxf5fjwExeZJLc4o8Hhof9",
  "key10": "5PL832K5Fb8NjRm1z59SE2Ey6nJakPeSgAB9RxdNPKEeNM8ocjhSZMBKAGyhq924DXKsY85d3rh4dZZfJgWxDuNi",
  "key11": "3C8YiTqYqTz8ynZMvNMVSqds1cRhw1EQSWHsXyAkBe1tVPmfsnNsKnE4yNd9n2EY9v2tRNW6sdoZuk5V6LN7kkNU",
  "key12": "5GrKVBRmir2N9rbMiFALRnPniJntPAdrZBwe5YVequ2aXHLtVx4ihS61HMXafqXCXbft7SZZdwhGSuCgC5fNNsmu",
  "key13": "4on6D8wVkM2ygQdfgKdfZ8XWoVxu288Ds2DK2hkcJyRmk8M1XLfoFqgtZrF5JnHz8PUb4YFTpsUUa1LiGmdSMNR2",
  "key14": "3vjXNX5gTUyKaUvMm8Pw9CPSzp6sQW76gcRCzBT74yk9CvHeHsqALyBgNPew3ZYiuSvthpbT9xjWYAXYH6pxSr8P",
  "key15": "4VMXFXcBAtozhpWAAoyK8wT4pznjqcuh2M5R6ScsKHa6X5XoUtesqCeU2WrbWBX9YvfVeBNnSHUfQtUgBNh47rSi",
  "key16": "UWi2nMe9tDWZp2YNiUAnMUAyixanwZgDJEVSP48o8nqHrL3GcumX9kK15rK6FrY8ZA65ceK7JvSgzgJa285PtLF",
  "key17": "fPLgb1Aajf8UarrrXhXqdsXBToqbM4vbLri627kiPR9NZNZkRnpinEtG9dw9aj7FozC8dAfL8SSg9DJ5Cp1hJak",
  "key18": "3TNiZCY2wtXVmJXRbBhTwjmMVBcgYni1eGNfd1qzG8NrFoeZnCW7xfdkRpUfKzcPB2UpXdRhUhhVdCXn8HC2EKuk",
  "key19": "4P1yzCCaUTEKRJeVegEHZ4sffEML62F9nMZpa6p74H9T4A5A5RURS4YLZ4oGoiohHzi82iopHvtuUFK7gCj2odmG",
  "key20": "yKYNBLqh9YPic2v4HqSM2sEvEDU2syJDBhTYxu868Awc7hLFwG9xg8m6KWecBuDQsGjsaE4pT6CNYzJamdRTfmt",
  "key21": "28mE6WPcbxhGRwNaYBiaWEHbDg9VhESFpdh4VbqJCugoCoQgtx8A4BpQSwbY3cXC3wTdy7MkRUkXhVvWn7BasqJK",
  "key22": "4UCGvn2jJqdZJHeAB3XDspD18my796zwfzfPxNyivPcVWSqKmaWnm1kNwy3q2veMQKuN9tZpGZq379u84rnh9K9J",
  "key23": "36DBDSDvUdvbGrUSbgSnEnG5NpjhJpupsdTR1oUDMeZufbuHGK29b8K52gAS9memaMP7ZkiXF5XwaACj6Y2GVTFj",
  "key24": "2GDWK9ctQia1dY2dzjT7VEvtY6jz9MrbcKFXZ16Zb2qbfKqDvbNQN3keD3FN3qKxvTmUVYbq1n7JFP8EjWm3nBdp",
  "key25": "23Js8pPXoRTkoZtXVvaLzGqbUhjocPxPbyr15S5hJt4XarFvv6JrJUfGurCasysghhBbpukDCG7DpXAxNCSQM2Yo",
  "key26": "2vhYWj1pFAD2AicDqfsVrjDRvsCeHgYtKb5W1w5FfGm6iEZmKxUAjSEFDcPFYiQhr8eoYajv5mWsdWRiqwXhEBGh",
  "key27": "4xhKvWGVFxZVHbGxwPCpA64E1nFoFmTgWdTecdm2KD8mMynyAakpVuW3cK8xmZMEeYyBtomRZA8zqZDk1XhPrPGy",
  "key28": "66US3ofFx44LoT1QpEkCJECo35CEwHNhQw348EFQXjS8B4TGfTczJKQ816a252axWaeQ3y5bdiiG8DaHEfaC1NcZ",
  "key29": "2eNkSjSmfR2xS8Lh3qPDoRSEUXncEs8NFXNkY4zLzuAM11vkofMe2BKYi82SJCjgmgyVKyqFywurDyoa76FrGqVU",
  "key30": "2YzzFfodQiwNFDDAArJv38SzASDaFroPfRDkvzPpEgw41VCycfNMq2BSQwR4EaQwek8gzzUCotYSiZiDAATYjzQW",
  "key31": "3CQzDBopkBtKL4o7FNsKpndfcyMX3aBTyFZzZ5BpgDWTaezUUGE3iMBCDQ3ezUgAeETUruRKo5uRvhP9qoRosnv8",
  "key32": "4NUgmC3sjPcFEkDFwu2wvUWw365SuNfoxACysttibQHk7eoXCy2GDX1fR5FAZqiheVkXh7SoiCML6c9KiwTYqfMB",
  "key33": "2dVsU5tbUMBQnpNBkjKjVTZBRqr16GJ4YzYzb1fecFkzEDx6LAgauna65heRNqyZsxsAwTug8rAw4cYQS5xbms9z",
  "key34": "5WAC2vU9NnMNGyn8Gck5t9GZHUC5VdPjPVCv38RWuGMYAouota7uLoKEHjbgGPWBnqbRPJTyussM9sqhgN7jJcFi"
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
