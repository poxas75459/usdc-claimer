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
    "5vzb1n4T1ZVgxskrTDXU8CGZRKXwPAmj4wWXahyA78x3Lq5PJKB8XAuLvRoA3ZuR6gLRkP6NGVFZH7P3UujZ23o2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SZfhzn7PPyVEPwPt2BjjfixgChWLUCmeks8W2WLUafqarxifn2M1KPLLRuuWfKX7795XYkWdBevcg6ffrG21LF1",
  "key1": "5L9DrgZcYvfczWSciaKmt1mkG2yfQGqKvo4V9QAtc3JhC2WiAFd14VHUWHyQR5vZAyzBb2JMrLkgjSiWKe9awrnd",
  "key2": "4DrkAPyjsYePwADHrS47JwY3xf8pUqVuUW1R1qDezeu8uogbEyRdCXZPREedcQdU9DWv1FDyf3ZXbhqvRfpemveW",
  "key3": "oz6UAtCkYRZo7gCeMptKyVZF1XqqaBcWjFoUaezvQNjJTxQxwjae1d8k7PZoqa2qoxi6tPswY298JCbzTYxLbNA",
  "key4": "2NCZZBWiJhCyak5GH1GkhcRWVnzUj3H2qQV75V2DvdNRWtSxfYhFY7dBzxAkWR73RwRU8CdU8UHDEd6ZGMS4AxFy",
  "key5": "4YsYW5QSz7RtPzozhJ3XjvDeidgXb1EQT1EMmGEKirHuN2xuP4ksbWSTAJtsvN6MZ2WsQvYvV6iAUJyAWDCJwKx7",
  "key6": "46VfyDF5WoLmgR5kXDgr2uZ6367FNYYh8GDPmQQMDnn6CEtr8A9q7Qynq6wgHVFFAHnVDzHaiP6Ud293awQrWMkx",
  "key7": "EAixzjwn6UtMxzfebxJnnMiCU5z2uY3dayxoepERrSbR3WiX4RqPjYFdPScbEV7h3zhuAv7wGNP8bVbyKfSTRrC",
  "key8": "4vqkg73aXuaZiFxrstersU9pCnvnqN3sitg5iRJKRqC4ScnHsmW4md7sKqEksBaAVGQyKDdA4gTJDJgpVnoBD5BT",
  "key9": "2tV6n8aaK4tm2eJyXkD4ovhXEWVYbyWLnXuDuviJkLtdvCrV8gXbHREw24c55xu9uTvSs1hxcaXM9sfdkTUacBws",
  "key10": "37n5MpuujD54MZVArGFiNYUaoYtaiDM2tvfaJ36EQxrekR886Pk8HHrfpT8tsxFs6RtN8h6725gWbjURXRbbfG1z",
  "key11": "3MrvQ5pHDTGg7AWVDv4RdixEooTZMFYXP3MoURqZTFyDZUrrSUFMUdohWN9aik18xjwDfsbXrLVtjvDyk8Kd4b4S",
  "key12": "3swPUvEwxYM2qGBDindj2uNHWXWbFsMXFrt8gr74jqGbHSkSKzMtHv6EYNRvoG1UUcgEVciJCNguNTGYfvq5SaYR",
  "key13": "3hopjBwCmm4SPBiQ28svk5Gf7kJP185AAKxp3cvD8k49zxwqXJTWSffgZAF55a5JkKUwdaewd9NCHpM7hTW8K5sY",
  "key14": "uVVaYgjA5qjNKGjzQtAT7ft4ttWLGaSudH9pbyKfKTKaYmfQpPrXoKdLKcxMh9D2tha3WbTteSDRhxdzmqQ7Yci",
  "key15": "r7uyRi6yQ6BWonogMf8PDwCBzZAtkMtugEYCsBjrmt563ot3WSQL168GEkwRm2pZFonXNamjgScyDX4iD2nZRhj",
  "key16": "3Lb47T2SANRnsnb9nvqsqmevp51kricovbTnUo8hp5GEijEcr9P7CUf89yHGBTURAg15u4id558fyr8nJVzaqcje",
  "key17": "25pvsAog44vqd8wNdcH4V74d3d2zUHsEY1w6qV2icxhCBeaZnnk4ykchVp2WbehTKFmUW74zPaRBGL1owbjB2H6k",
  "key18": "nADCxHqGuv8j8K3iC9iAPuennFHUknNbsreBTrDkQuBRVcJkwGmyVwpaveEU4HMwxQV6VhfQVoeHdxWcXKte2Za",
  "key19": "3CnxeCeEkaQRoB6zMEVsPBK1FXRLkMpqtHHyHnqW3MN86emQvvF3HQh1jZi52JmFKWabENkLrhnkUqNg723D3YE8",
  "key20": "4JiEfnLaqKMgtZxEyNLszeEeQgE1r4MbqtLSmPxtvYH5U5JVt9Hbq7vCxNRqpkBgFzM5JdxtXhSq3rTnyZGNDTFY",
  "key21": "3GCussNfurSft6crvPAqKcYRin4w9H3rs26nrfbeQ8k9PJiUMJhE59DQnoMhDNy66WQsgJH9ghAKk1BGFT2yx15d",
  "key22": "TAZ6ZPrt6HLqb1V6bMmixgLzyYkFafPDBnRFM1U59YW9c7AiWz2KxrffhDUwW2KiaM4ga4KZbaN99xq5JRUWtQa",
  "key23": "4hfFZEofSGsd5jDGNCLJcU4fKH35ThQfqPMb28q39bJHdseP3QZ33ZJrH7xUrd5LAvCyXrt1Zq5p8q5mn5yJeZXZ",
  "key24": "4RDKV9uZa3kmEMge8mqD8nguAc1oxw1JY7rcNPUY4jgvEwWupd3ja8jRW5Mxnjm3GJgHNtZHcPdbojZnMDijDWY3",
  "key25": "Bv2eMQKb2wPdigdLMfavCsk7ubMML2iXFviMgEiaBWuypbqwtLXL2UYyR8nbYqFKJT64sWRoBF46xZBS2R1Phww",
  "key26": "5E2sxPQzt1uXePnyB1pJHzPoxLH5LZUnGnWUEc5TH162BeZR8zSa1JGt1FmMtz8us138ADKzrEmE8ePQQMvjEMr9",
  "key27": "45oRRwb9JkWEuwK2wiCjJRCrGrV8WHEt288udHsWtBb8hwHikkQT5vgV84WpBNzfPMETUHUjo4n6mx1CaxFi6uYD",
  "key28": "5KA32Y366LyDA9DoFQcdqZBEhnbEezqL9g3bsYGd7sXMbBxRFX9qbe6Tk8HgS7rSLGkhFZzBmifkAYnLH3bnJkrg",
  "key29": "jJnYKAgRYfYkgVp7MbRaifAgzocUAZXbf2o8Cxb4wuREp7BwSGh6A2qhsDthJEqmqXu157MJoMZu2k5N319gqez",
  "key30": "3capoPtXgxoN2YmAHpy2uyRMDMnps2cZcViaUufH3hKU5NLnMuSji59sHWDtbXyvGMCNjLtLgkB2BMujcE6frZ63",
  "key31": "4FuZ7KZn26ewc7qeYLTDuQkjpaB4DQnonrz2BAQj2NDNxcsR8cpvoHuLD7PBpXsJbQEKzJ5bSZKgMp9UccJGS1vz",
  "key32": "2MMz1u4F5aRAcEx4RkKZPGh2GGdUrZzvUWGDrWguX7MWu4ucE93dyzBJTuaPY3cCgEUArYDBaKFzMsaAcNLSZsVj",
  "key33": "4ekHRrKGewVKcTJVE9x5yRu23KqyGCMLgpAb48xzczEdjXAREpzzoWJWbYVchWkwEd3Qi3wKrxBYLwakvUKYE7cy",
  "key34": "2zpWfmcX2TZA4GNk9URD8J3LWDuoYfA8Cv2oqi4u1wCXpwAZ3H4RyvPoiqtwWGAghr8dfD135AvTLottMzpGL1Gy",
  "key35": "3GfTDfSxnZHeJigB7pc4chgtKEjeYjTYw2fK3sQhhBzFfUax6qwwU6JwtueWTu7hhg81W1c888JrFSdTSsXZGpUy"
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
