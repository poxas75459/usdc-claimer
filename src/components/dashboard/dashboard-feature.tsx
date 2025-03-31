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
    "25nvGp2SZwyX83U6a6iLmEEhfCqTZvnyegj7KdKpLuv74XrUm1iWjYdUgr3g4SSfM7Txvxj1C7KxQHofJ5yoWe77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dbuUZ2ZkGwLKuEuqR2RsAcWFrvkRH3ThJovzhwiQ9wppoRV8ZT14tdS4Q5vjLrqtthkoMgpKQfePAwVrJXDUxZr",
  "key1": "5U22mq3cvfKT9V5WXeVTX6Uf7EQzwfJieH261u8zHwMJGremWrA8TA5R4mPWSLakhpNhMFp4Ss7UowAFzbAUVMif",
  "key2": "4dKvFzKDPiwPhXTu4B2fRnLAG9jr3fVLencQ2mf7RgcTU1qdv7mrCkpy3QDacTJ8kwxnP4ZXBPQHzRZk77XG6wjD",
  "key3": "25z19KsCD5jCXMC2M4SDkbrf22AYEmwduhdMT3FYx74kSVRUyDuYwvcPYZ2XhBTTu8GXJpQngAeCpDwGd2GfFc7N",
  "key4": "4EBERQvEdmmi15rM7ENZpEDs4W56ZuDUU5qukGTu2v7qyUoNid7SE4xfcZfa9Tr1mnsYnpcJPM1yhFu9e1KQmpx1",
  "key5": "2AotD7s9qQk2jjoGcQXzoowE68KgH94JyXYfeADHEoFijVChyx7k9eMkPRXWkCEJY7XXTsFXVBgRH36mU2RkPpkB",
  "key6": "49rUTkRZbHsYqDdGag11TDbEo536HVj2wjHUsHa4gpCkSAShdqCfdAaipQFUPhWYkcu8T7umwGHMSZYuzu5m9R5f",
  "key7": "3NMTjJRzub9w7qL51qjMmogh6EV3JgBfnyJBcWRZ7qcfg3mNvka4B6WgRwxmUZZJrYij2hryoxdf5xHjrSi1R3a3",
  "key8": "46SuV8cv1RWznYvLRc5XTechaY9Du3qeK1JGudBziNzAxVckwkFfF9AxUGhf2B8QyAXCKujAR6Btvgsm4mE1N7sG",
  "key9": "57JwFfHXoAezMZxHFHTNt6TW9QtmqhghKjRK8Cndnc53NhiE3rWi4a42zErSBuUvHn8EXhJKdtSUXBp3Hppmkx4Q",
  "key10": "ftBx7ZJ7nL2tv9rMpzgwLaXnr7YfQ44CUxc6VxSbnjTGfp4Vp9m4YeTpD9Dg2UkZnJaLjGJ9FSjkxtKGf9wV3oY",
  "key11": "2C235C69WTmi1Ek5b9ywv9RmcekzznrLJGrXjFDaUKbo4eFRGRVnR6gsBgZcuyDVDqjiQWexNjpwoc8vJVhQ2JZv",
  "key12": "4D8F4MazvAWq2rEch8dT8hT9pqamfJHzcRmeY51S9oex4SXkmLJ9ZAVwkvQeU9RTz1jpz61kfqRVjcJX4GRSVm5N",
  "key13": "49vc1XPbBXgnyqEiy6FieujzTHWUzxtuQA9H45FsXYQZ8KGrzBJ2NTdYMW88KbtnLq5w3YpL1X61ywZh3mD6Gq4M",
  "key14": "4FhTHiH6cbRg1xP3eptNfYyjFiH3aFiRsX6qY6hq6GqY4QYbq7jnqe2Sz1vo8ywE9wqfPcWq6vpUaAoyG8hLc6cb",
  "key15": "puB8vgF1pcGT3CUzTdvEaqASqwE1gWYLKjDBWqZnT3ERwJN1DWNM6ieybJoEoyKdeUvctAmtQN8myhvW5sqKzVQ",
  "key16": "4nu3NUskpq7Eep1wnxrspC8SN24YJD2mmyoeBueJFJNugMPvkFeQJGtEgMus2QToDreE6bZ7d1xshzZUfotZG9AL",
  "key17": "2yNLp5Yj7WXmenMWj7UtQHCjRprbmfbjumcRdDyBp5i5AfS7WcQ1jftfKfasqbUxWiCpqxK4hGhdnA26b1pGwrBx",
  "key18": "2ziBaNFpjTdJGsMUWNwMyanNmnqAQWoXGRsh4mSM5w1okRz9uLge8hUDXuwnwY2myTC42yVucgdskSZ6vMTW2BZ",
  "key19": "5ZeFMKJ9nSyvTxSjZHj7JriURFpr1JoEJ9FaXm7enRe353LubFzN7VoqGqkZEdiQt3eRg2eG1E6nMrRKWUErQ9YW",
  "key20": "5vBDK6MBasZjUscMYTiYKqW4qaEThS8NY9t6aPxAeJ5yAKY4EoqGPMUFVvPFY9RKLsXP1uwByUKJJ5Zjmv95oBzP",
  "key21": "4QFWS6iC4XXH9ohcAM5Y1Yv8RujZPYLViMN1TP1FLaAKPQvpJ5JvNpv8LpCmuCy3pAvCtRZ8b4AGxJ2X3cErHMu6",
  "key22": "5kDa1mMaJubJhWKJqJnN5CqP2vb2swj9mgm9DRs5RYHPeZJHZ4GFgQMpMQiAbLUdvMsUK3NAdMsXwE87eZKH5U7B",
  "key23": "5oD38ijw2LUnwv4Wj9X4csMYpy7yEh38W5YahpnNfzMCC4WvcNBMjsNAmY8mN88wmvT5qbjJXVofntEYwXNgsF1x",
  "key24": "5BJtLr63kdDcrxBgyc4KSrM28GCPza1noRxmmxthC8RRytgXtFqiiBaKb3z52SaTbZGrrGbjaYAZh8Y3CC6twkKt",
  "key25": "3FPD2jitNBVCsSJ81qSYoWFkdstidiYy9wbDQnDAxW13guG6eT7w2f3VQ1mNaEjykt4Lj8wgUk5FFYUgU5aqC5aQ",
  "key26": "LYWXoRdqyCce9AfDGmPg1bK388tGzmWd3dgtYRJ7dwKcLf6T1F5yqhXwVcXDiyGEVBjYYr39m1DF5n9QLk7n3yY",
  "key27": "55fFGdhRssSkxz1a3tudPuThdodvDMv9KgFhBd5b3aTy1VvNNr1pHQ65pVdN9Fe33jBr2dts3DuExy2nrLoaRusC",
  "key28": "61HH9nDCRrntKtN2trX2k1dk9PrNG8H2eVk6a9KBSibDPPrrH7giFj6UANGg5nbJHSSxpBJGG8YDSBRnEn5ZYxe2",
  "key29": "2VMe86vXQhh5MMi9rdF6bQHggNgEcCyFbfGCuHrz9PLtoTB9akpPdxpdXjABtCuPvoQBgtbzN6JA2ynCy9EN75eW",
  "key30": "Dd5jvhcqqWGxxCgYe23HAVHrknsZBjPY197yJGedCoo2J7zSfbrjHggwz5o4yqoZmqdd4A927DUnnFD7MZWtG2n",
  "key31": "5nQdJwMnnNGbxQEiMzpRoFVPZWaC8HLfE1YXXpL7QkyrGjUXH7h3SrAUJrc3cMPct6RSSn8oYMQu9snshSF8vUjS",
  "key32": "7NFkgChyhNrYXzYdy7MvqjwnUGL3vcq1PZAuwCWuqBT8K2ziJXJfSmGJjnGaZrmeirXSZLmxgaNrRNyLk1g4hyS"
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
