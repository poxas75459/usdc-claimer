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
    "3zBMHEjMqj5zBB9PQQPbK2w3ZJxYoxvafB8kmfJMb1KwZhgvVxSG16rb7ZydXoLpH2pspyd2Nf1aPcMdvsPVPc4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WribtuocNNYqwrzugZw9MQnnThiF9Dx2ZZf5KE4QsjzewDxgYVCzzjtdsCMvek5JsqunXyGKc9sbFg294qYhFvE",
  "key1": "3kY8krSF5Z5NkszT9zmXFF5jdahx525T5HLkjSZeKcgkatFL37rC4ouhX34krw1yUvR5iGXyKw9FUUXTjWTCGyJg",
  "key2": "3DzUpab62VDaoJsALVrkGwguWi4CTAFkuhtis4zysBvDWZuTVwVpMJpH7fHy36EhzQxgPpMWWwaK5Bmm8znMTtPA",
  "key3": "5taUfaePfCE9eeMPZBgym1trNF7igiEcpbW6eT26breVbheKuHJPRVuK3mBTK1j1Rq6315dgAWGgGabcSg9SfAo4",
  "key4": "3tCFxJjbRe7gtL28FtGjTFzFQ5S9g1RBe25wLoYhAJk5S9ZVSEZ2egHdEr6UqU61ZWqH4LGNgRkZaMLYKC6cLZns",
  "key5": "42i2HVJWyLFMbxbPHA7hAn6d2eG3qc1UFomYko1qUtqPyMawjpbk9WWoGYcd1iAR4LC34WGLQYtJfKhJm2E3NBZ9",
  "key6": "2m9th9rMWvQRDwvgaMCd1zPw8edmKgLsdTJk7PMogoqaZcJh2eKKJN7AfjAZG89rSvvoJMLacTp5TyAhEoJMPUjH",
  "key7": "5vRvj7DLTKnjDg73AjuKyzxRhjmXwSKzGrvPKEbWbkGYEvoQT8BzgUGXAa35pGaG5YxvGYGTJZyYP1WqSJ5fT6vo",
  "key8": "5NNz5tQKrgq543d5a2VRgYYfXooUy9WbAcWkWkMh84qCXvR26cfM2UCHAx9AFmVTaF655bVzY6vEBc6uHokPcKq6",
  "key9": "5e56t6YpnP4UhKahrSpBmDqsCQTXbH2caJPNfM5kfQCTZQ6YDSBoQyXTFhEPhwnrhCd8GdqqYXodrtypRx3eXJak",
  "key10": "5gWTcna1tLYHkE8vyrQiqYUjuts2qWHagM123dp5f2YPJ9B7VFhHMRUSQy3fkKZddmWKmvxrEkP2wFJMZLZrZYyC",
  "key11": "2XXhrcP8ZwkBhEbTMTmo4pZbDwonAvR3nQzPhnE96tSQN387qKur4zuMtFDDLAoSNRra1hvGhLvJVTW3BiZxdmxG",
  "key12": "4SdbFcXVVCRcZCkSvvXZBpozx2W6oraLq8uA1QadGrjLsxc3mAQKHgvsFKdoSDf64zyvZVDadsXsQ4jACzmJPp52",
  "key13": "4HmrTE111jJjEcoMkjRWzT3MUgvXwJWG4zoTCaz3UMeKX7WSeV3Wh7kMY13vAGdmXvTZzRx69FU9iZYZEwrRu4n1",
  "key14": "5XAjKKKGCp532mx6FxDzGeaoy724dvo3BmDnuzE7h2eceqNBq59Tx4YggVsguoQAXNR3SCSFcdt9d9EmTftbBNp3",
  "key15": "Vdr3E4F6vgRZChyMPj2vYnFskhEpUcHYgMVn7EaXik9JUGUdw8E3tDTjRbm2jwDBQ8CtmaKrEQiqB21NdfAovgy",
  "key16": "VDTp94qddjZFR8KVhJqdS5MAThSbqPvs5XoiLCaStLJYhN83HYWFun9aCHmxEVmX3JDvoanyVjVofzhpMbXMDa3",
  "key17": "55iNF2VEZwDixSkU8gzztNat64HqQ8CSCkU6JiMkQnD1zC878EhKGVa4WApnGv88KgeQF6kSPofMQUahvDfUfXWA",
  "key18": "pmoAddBveNTMj4sKuS2RXVaZ9QJYUd2g3HX39vYBQ162JSU9RGucnpqZfHWP3bSGVSuxb3b2LqEtDpTKbSHae8a",
  "key19": "4YJwLRE8CVhs3brNHXW8eaDc4BNxd26pvMwyMvb3YhMXirgh5cqA859fRccCHmYmUew4esnPn6huaC4Jvmt1KcF7",
  "key20": "GMXZTiCraFtio38AvGecJXmnNCTPKMKs937FmqJpwoGcc6prB9Hp3uxaoZj2gZggkXzUtxnxXo5wHLf5LAvNdKB",
  "key21": "q9uidVy1EnnPwoeKvLmUFLvpGkpUnfXR6ZMQTfJfSMC4RS4nPzj4BABQ7GWKGu1GszcH2Q9Y9h2aoLsZJqT3EGe",
  "key22": "4imeLe3QTaFKKMnL2LfHjz6MPmsPqQhSJApCuPLjSjZBC4uJLUNJK9rx5NwWjnjCqtcAh6isGFxWMpHHsuqCzWpV",
  "key23": "24DRz2t2R6WLPAeoTFfNPkqmHSBHK5uycj4XYnXfemjSmA88nfbgQX5ZLw4BzZ9v1b4qHUeC5YYLbnQioodSq1Qg",
  "key24": "5iRSfXQtEnKY4bZCph8fMBcTXsqJc5SPLxYDiFLVWtvVWqDWJfQKiPf9oqSiNE3UqxxoBi7t4uPHmrdogtw4WJtG",
  "key25": "5sPFL2pdUKRJunB4YWY52PeiKnDEZuUFquhxvAjL1wKHKRNbB7MPqvAJMskCbwDko7uSQ25dm8NjUHJSAbGmdobP",
  "key26": "55hwx5pwvKMQ2mGHQyGqM96rq64kVeCdfM6mHr8KMtX2VXunuEnYfp6bAXhGVKYY4s2BMtfHd8icW2w7RRUGQj4X",
  "key27": "cFyVTGBXynxFHJxte75fw1eqcp6S4idzCMupF2dXi97bKKgovCFcM1Hd5Yn6HAh11uCSGuFB1oz5wGTeDPXUz2c",
  "key28": "55pzAJftHTXt4iCynur9Bqx1exmS17gvLoAfBCoqrkM33r3udysmPZB5BsZwNzynTBpgsHPXVkD4TdEEyt3R8snS",
  "key29": "56XiNSvrXvaguie6EFtWxMNAPMgLwXQEL1xGv99sUWaLeQ1qmfVSFQMDfuiKomxj5k6wePp2iC1mq5ahfmJp9RzU",
  "key30": "QRH7SvNhYYiU2LRCpLRjXpkVjxzfhJSAWueHJYVWAmxHXuAdSEFy3BmAx7m6M67bUAypNjtXEgmTdqkPKtnzLET",
  "key31": "3ZSP5JNm93KeH2kQAkeB2mUjiu5JgQPETWQpGAnucEbVU1Cztn2hA6odtbG4xxaMcYeswuV7HvEL25dx9ofaUCp8",
  "key32": "2AChdLZTZ49z1VtYx4NYgELbYDRgBDod66DteJMcFzAg1inhgUpaRFhS6WQoMdEV1VhnT9KwPwDKUgcdQSTE5NuC",
  "key33": "5dCRFTGtEMJCN2id21YT3BP9NNCvkeJdRdH8rEbWePn7xj6Bg6JhSjpxMkWcFdGfkCoPqXJRJg14Ke7XxF4EnWEP",
  "key34": "4qjf9avi6GENufQCPqrmZP7yH3cZmK8BsBFA4Kyw88YK5cws7ibMDE8jqP41bnNWsRF9U9K8nen983BeXM2y6AGv",
  "key35": "4VpSjN7bxBMha1SRbnSwNCMD8MfwwRbXmipo7wAG4zf6QjUe5qymoKTQV2NPiFNgDsQHzCZh12nL5QC5iSpGASBu",
  "key36": "57rCSVxbDaarGmcj8bCcLg6SttUouhmDZSQNCTad9djRT5cnkwLqxxw4A24MhsFYm7wKn6WASiRYrw2aGbRSx4Yr",
  "key37": "3DLcCwsP1y4JkvezCwg91NSSnVu16KHVrRfH5moYXyjDfyyPkzrxCqiSf79vQDDHkN9Vfdhfx2hw8wmruHAk3etr",
  "key38": "4zn9SUp29CeLvuCbmnS9RAN4AyR8YWLd36ksF45BQB7XS8CTeLw3MPe7G7Bo9MGZEKCh2JAge4LwHWdAKTxwmFvg",
  "key39": "2m179ZipRHzzUULW6uv5LsGTQierKnHxacQhqwTxNW52buqCP9ZpT4orkojmBEvpt3x8ZRotEoVZwwgkLj3ja8gj",
  "key40": "3xp2QVrubWjf5U1ZhVFishQ442jjv1XsksJ5KdGetnTDiz3ofn1bzZ7kKPoiBKns154SQXcvSk1SiCD8RiGXTCK6",
  "key41": "SeziN1Vn6A8EJvWqR3pt4ySB9xZXfNsRT9s9nhZjf36ECVCLAfi3F6tvk9zLxjaaEy7ABZoNbEpevcGQpREr4Rz",
  "key42": "v5jE1CMdhBfUEHnG6cAGfsKE2Ev4fAmtsvaEnjWZDouA5hx2FmhMD9rrxsiuNbkwv4jf7knErGgMK9LCBKe8GWs",
  "key43": "xixLYcgfvnVh9SQpaXZSs3huhUYKkQwGaoeUS8kxyJpmvHXrjFhHxbxymvkf5xmTxdjG35SVgMg6LFuFC2CgA1Y"
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
