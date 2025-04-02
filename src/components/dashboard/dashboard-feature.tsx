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
    "62ARoFrfqcKxJrBnvtzm9hdLDtHk9BjgafYSVNAW98rCBjHLXs5MXx8VASJAPvtMDTtYzAFsc9CYyH59P4ikYEmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TntgBMm2C6ZgV2iCDrb6yHvhAW2yekL3wJF2hYhmnXWVY2urxJpdEdsFAnbYmaNyq999jCq9wUgJu9zS78V3STk",
  "key1": "5yked6niLRCAK7mV1tYL8XMfnw1HbR5jfms6xjq627yhbJr3QwXEtUD6cMk4KVMjD9GW7rby2XrqqieLzwW4YsT4",
  "key2": "3uVbRdBux7EzXowCcdnUde3n5vtH36f2nRbWcbHQgbFaUjWwV93rpw6HxTjJSubL738ZToFSZshm51Ra9qfaaUEf",
  "key3": "rwBuScUkfLCAuqCtd6XWAcPEu85mpa87bNDsQWYufsyvUTP7E9fCMabRBxKGCqFJrwRGZHj1CJ5FsXLKoJ1ubzA",
  "key4": "49rJeyNE2Dzztu4G87hRDTJdtHTNpaRSG3UHRmMQVDg8tnFUwWR9MJ9HCPRSJ9eC6rWNU2YTZi6xYepVKekxKrEJ",
  "key5": "672oi22in8jArGh29xYcg199m1mHEBeAwkoK3WGYffhyCQQKsNLca3Viw1wKDNhvhKEStfKQ2HVwm2xR8d3v7AiE",
  "key6": "2sZwqgj9MiXDogLcStPfJwjZ5ezC9TsZ4K9nbLZdkvJBmxyq2AqsjG88LtAH2ZakAmPaa8UdzurPxrPFFT3zdesY",
  "key7": "6E7j4yeTvUsNWVaF46zogaBy2asYzN1mx6MnWxPK9mHuNrukmHi4LdBCPss24MwmDAvQZw3fUpagQi8tsA2E8cN",
  "key8": "Bob3TDFxNi4zaUwza2v6qDfMxYuteSc3UXAbvYmPPN6NYPKEjfbthy3VFwJH62SQSePXJYjaRReyf1HgxXA3s1r",
  "key9": "BaxdMWijdRXoNQWLLRZ6LCrspPFQByBhzhLnwjrrPQXgKDHmVCEBkYrkTM1W7brpHoTiZqUwAkWP2XvZJ4goXKP",
  "key10": "vZJuYYhFxb3sa2BDKYNSo74YBdEh2snz558a9VAJVFicNDzpmW6schtCbkPogsHTxKDUAw5vzMrNNLgjtjcDR4c",
  "key11": "vzSqzeS52fo7kWvodzKmq3L5XUDJKFbUAuToGp2QVWCsv9kdR3zFcFBFCjoqregkSgQ1XR9ZyNZ1CDvzh1kZAaj",
  "key12": "51GamYoR4j4PDPGtNprBJEDLVcRTpvunaG6thxu4C7ygFv3yJBRcAZPjzieqynXTxGa7aWVuff7Y3FspF9MNQBog",
  "key13": "2yJkU11qMYQpwfTdzbkpUuJZA3Vbo8JbXEDqaWKtaCtaioicv2Xm8n5kTvjsrnGZqNwDgExV1iTcQQuFv592EAuf",
  "key14": "3hfCxepNw9DgvPH6tTEu6syDNNxvPxygXZvmgQgLqJ69hQbacvFynhkwow8kG7Gd1SHwDCq5bjc5ZyzCM1Xna4Qg",
  "key15": "5WpRcFQx9T9TSVXE2pDvyjjbQKmdbMyPi2XLZMA6tycTgKcWwNtYbpCvYFoM5orfD4j3FYTbY75rggiZN458FCfp",
  "key16": "2R3phYRBqKwdofCupWEaUVMbQVkJnoofGLx2ZQqvZtZ3xdnxN89Yng2NpeCi8o5D9D1Yfo7X2nUsJJ5zYWKoYv6r",
  "key17": "4QQVc2ZhfBXYDBi83jfeqwvzH9RBxhh89SAUX4D4MU1vzPmewexM2iQKaiu6bSHfLhGXgviajAAHxdDbMQZZR6FE",
  "key18": "2xZ5LueeCyP5J6SbQmpNoAvUgp7dreMqvLBtXQ9tcFrV1FVRdDzmdaLWGwRnNp72UcZ3dYjvtadau93sCcQnSw1n",
  "key19": "4tCusRQFkUsSVR79BmKjJG1giu2v5muXAbboWZRu7fGzWxzDtuxowYjvoF94TtzH18q1YesNoKtU8JEQG9ruK16p",
  "key20": "29upq3cd6i1LbQSeSy1AFwv2GEHDpEe3PswLSYTqaYRRBhYQeogZf4DyaLZCL3RFdbtaX5Nwu8FoDdtnhaofnE9c",
  "key21": "2RqmwGhBZkdMqSySX9CXAPuoyZmZ5SiA7Q3X66dQG5fq6gdziNfARhVHiRqtdhtHWbMXX2RfuQbGfDtJKHD4BCPi",
  "key22": "LMFCNHKnWhzhM47rKvVmWSrL9geyRYMTMZkoHN2r4g8Fk1s9yT3MAG3HoQZiSJ3XWy8yV4aXrXN9cpPTk9j7F3r",
  "key23": "4eyc2YMJgRsStZt7v8CSvJTzHVr7KQ7FFxEcZ4yy3hPJpjioD3Ws1Kp9etnDnvpvFUoEsg8EeCrGDXkv7HfURzJZ",
  "key24": "5F2CTjx9sat7ejT6a6XVZrdZhjczGrPKswDibE65Kqon26P5QUdTCaazBjvvmx67DDoM6ECvzMn9zqwtZX1exwhr"
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
