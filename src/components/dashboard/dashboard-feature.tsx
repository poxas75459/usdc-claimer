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
    "nmDv2v2LxwKjKWnQsHo1HMEJVL9D6nzkixtcbSTKhwm53FwKcBKUJ4AUift6h3k3dMespxGmdqRpX8LqcQS8Bs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q6TXcwU2es2H8KH2p92mXZ9RxqHng59TnW5QweDALpvvsNFAkwenreNvvff7sq5R83hLJFjxcqn1Y9gesAmjKrD",
  "key1": "248zwQJ2FUhkqMp9j6vV4Yqwf7cktLUCYt3hSKiQuHvY5KhnCZGeFnuD3vrX3CGX8Xsr7T84rPZQDbFoHtnSd67s",
  "key2": "44qNKFAjX2rjAJ5ZY4jSNaxmWnwQuLEWwJ4q7zoqXEdbD55PFQySF1rBJjgbGa1RQTPcz4EneHLJcP9SeZ9Pwyk2",
  "key3": "4jTkBqXhg8ku7nL8A13mXLmB2KFk7EmHQn8FtmrkT8hdFHHj6mzrbWPgrmQAHcztRLN5iczw8PBNRpu3LqvXizEW",
  "key4": "2N19n9TkPVkZTppbcd4G1Dj3MKDBpbqD8UPMm5YMoFMCktTiUyG3CEj4N3vQx5w9jKgmTo6deJemZjgw6mCio2ye",
  "key5": "3wZiAjjT4nSuRnrzbWtWBbcHu6sYqznYbKwvBcgporNMmVjhD1462uvgCM8rXeUwUyn3jksfbRK4gJQnrxoqi7a4",
  "key6": "48soNQ6G2xSS76ayN1AL5T5hk3d4kYpyhfDYMb59GaXmAdyHW9SEMS5h5yjREFEa9ANExJj4RSrGuTgi83ucnmwe",
  "key7": "25JMefQ4pm45tq719zGh2uHC4X4S3anDMRvStmqVGpJWtNK4rmNpNKaXz3DSXGyP8Bwy7YyqtuPvWBFFf1m15No2",
  "key8": "4sETh5EMySuGgXeUYEQNhTapjtuvGd8rKZE5rctsWzd6WbHfq8FsoLjoiTVEuLEEy21US6XNJ9ixdyFhkuZ2mYPD",
  "key9": "4Gn53dtR9PEAVn79NnpCghW9FW6SB9BjU8WzSmPVoe1uFQ7fm99s56gdP4ZCQcTxUSJ6dAjkuwmxPTrfjAcKFWhu",
  "key10": "HiT8918nr2JGGQLutrSFsyM1QRSwNLWGwcNDJf3zsMyVD2CY15DsZSn8bTrxL4jtMvWUmU3E4d5pGhkKej7rzQC",
  "key11": "26gM3xXsfkcaQWdetEVGz7u9duTb4Hmht9U57F6npUo3hCaqMhRe8vZCYvzcayyJJijvcvqs978fC2V1Fic2cAf4",
  "key12": "U7EAVpYZ4Pcfv2F6mGjyzUBaSY2UAQqgMYJC4HypdeqKWQPp9AoRwQDxcMNEJZTBXmm2YwDPgqDY89MDTBDxTpH",
  "key13": "2gt8E3AVrog5LL55zhWE9x9KCvgs55a1fTpp1qDzJP3bDWw86G4AcPqXX12fKBegXWPBQ321tmnxKjsqf7BLopaw",
  "key14": "3iEG6QP2WJWSt9HCTmzobbWWBvm8SCunK4ZMKJs9AAeZqSwEJasEhYkToXmztJaf3FSXLDv7TRZjpNPjWeQRJgd5",
  "key15": "4QogTrUJvHtKU6VJaNNzG8Lc2yW1GazccXXurUwCFobUFuHLkCsyuxcvRS7B9RJ2ueimQUvXu3yEm3R5r7uNho2b",
  "key16": "4tYQZ41oZYWu1ufkpvakrrPp92giRRf8UGVz8qEuyMpDXZdJWza5hNUyDbE7x6bvtnVgJcxYrC9qCTiUoqhS6MXG",
  "key17": "2GSHWAWNxLkKWUg3yecc5i5JTGTrfDikmjG6TqTsBZNiE7sa3WQBrR67GVp65VvMHisMbeq5H4b5uSJpdAUQiWDB",
  "key18": "4PXMfFtc1YV79j8urSBUCAmYGZZ6GcyzeSLhguiWT9seiP3UCP4i3xi7c7yTiQhrA7tYpHzRdoo4bwhuJpC4N6xG",
  "key19": "4cEqbh9GU3wegNEvczSL3epBSX89D1b2wfRqMSJyPQqMMz4PwP2p1Eg4LS71aHUcitFyeb9XijEe7LSa6rLppRxA",
  "key20": "61oQAGcXtKVSC6NnA4vica7w2NtoCJMxQwyp3xhNGR9HA4MgcRit1FR73sjytPv4N7PUDkruY12fphhCU7kJtJ12",
  "key21": "3LhmsKSURKvsSvK11JywocQFT5KqyNQwRbADt3PUH4iqK5yfQNHgeVJ8osuMZEpSHpmCzKQYf8FHEdU4hobKnD9A",
  "key22": "5XEhwhU3VM3dzUDHfYJTbwwTvcAFTyzFD1EpYGFy1imWemB66QanExwJaNv6LwL2PtVv6cQLBrqGPRRmY7o2W9bj",
  "key23": "4A9LtKhMCBMQQ3x3JyLDveZtjgw3hmWASgbMKUGpuoBQVBtB7i55vYfzmGuuYvq61ssGHQLM2Bic2pko6vP3JuCZ",
  "key24": "4jExqZwnaK56HRKkeU3pkSEV6a2CNCgV91w46bQHWdbPdZ6b42caUnK11ZvAkyw6FMQWzbt9YG1Z7v3aXV7J4Vzm",
  "key25": "3KczE3mGe7sfieUuYEjmkXJAFGGBTxg9eVjPZQPppj8qQgqSxHo6r53c3NpLb513fgZX95oqxLVQu89bDKBmHXkJ",
  "key26": "33JBCoRi3opyM8NcwjHmKaKUzEDp7w7QLxfTLdPg6mK7BdwBJstRrY2xmqFhdJgEjjWjZ7xnqf1qQFLLi38FWCfw",
  "key27": "aBjXfFY8g1BcGQDMJgfV51PAtC81Bc3VZ8dmqtmKU3cJR2df9x1KYmGug9RW3Q9JMNvRKizB3xgqSvnqem7Er5T",
  "key28": "3JacnHmKN8YJBhxNYKY7XaBXGh9JZrsj12zJcLrR4i2E6b8Vvp1GTseWmmDXyMtYp7SbCkdBUu6Ws4hoe7jetr39",
  "key29": "3HZfYaJoFvuvnsKivSnw55Fsa8uUgiAeWMHf6wrvAnwPD2PDCbcfjjaRvXHH5W7D7w9eDhbHY8Ey5g62QoYMRUVh",
  "key30": "2o78CsftdoeL4qFvamfN1xJBHwMxf3AKUKAzYhT5sKH5sm37LDshbjr3B2q5TeYa4TsGyXCRz5xAHoMBazAzgF5L",
  "key31": "RMFfgwz4yMQ5DnSds1esuNSvZnZJ92oynsPbfYH1cu9gs8tw5qjBSqLhzFHn2Mctp3af9gizX69YRtBKTGLR7cp",
  "key32": "tzu9M7omzpLGjA2e7jk9FDwRkn5WeuQe5uGhejNgE7z3mXMXF6VKbNC2L87Wbvup2pAUHuZZRSp6fSDusMvQmX5",
  "key33": "65whq4W4YpQ3hMapcuTo6bcoUrRXvGoMLwukkNMjm7Ar7gP7Pk3JVMLviF8an9SCZAxHeGBsuZ2Tz87eHC48hmd5"
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
