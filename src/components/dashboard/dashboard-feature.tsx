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
    "4uvtsKXnVjPG1VTJ3SwSAQ26ZY6WtNc4zEhruZXPhufPMHfnnparHieXRw2uDA3swPaQHDw454Umz6MUxYmN33Ys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2boM5LJEGHXSskic7LnFeMwMtsbWuyNjT7MBiwU4LT3XaSfF9YEqZDdE6XCoBWWDcnwRtvWiqepDMHfxFVnHbc3N",
  "key1": "euFgzUJcyn2eH32CtQCRivq8SZGbYerBWsnBLPBSm2MkU6FzRDeVUsHUGNnwQPBBhTimusDBV8yo22U5g6aHzJw",
  "key2": "4Lnr8qN1ezd7nhygj4BfDY66dya8YdZDq1KFq5PU3kYH8WRmvqSupgCovCfp3u4BeiN8qibgN9rgP1CFKduYx4zr",
  "key3": "3UdZa25Jk1q7ctQjD9p8AnoffyVUkuZM7i4Kkg6D3DC7h8eZqiXkzoy82BZroT1vauHpcSDKYCLDQi3VXmYVTVkK",
  "key4": "61BqVuDpp5zUVifieKJbdeWq9WYVyj7dSmBX9w3unyArTQeNgh1vuYr5D8DkX1N2QEu8DWrvXH6cyVpCF6LYprKL",
  "key5": "3f5kc6jtZwg99A8LEksqqNSQQosSYm4NsXt5mBKB7aDy3pQQ9znBif96wQeMLpT4FNyC3qwXBphbKXDtUnC3vwmh",
  "key6": "5nAZ6cTMr4qKcTzjJDEQLTDoNVh8wYZqSHiJrv6oFXuLc7azvDGVa1D2RwmP5pF9Pr2NXPKqFRQkm7vX7Dwjg2gQ",
  "key7": "3QjaScFQicfhh4AZEwvmF26odqTBVdEvQWbeJuwxznxfKeZqMTuD7c8W94DbyJQTnG65vKtwRjw4dXQgrqCU6mpi",
  "key8": "2JsaCS8XVj9NNbYR2Ex8gzB2ew6qeYFZsCDp3rQCcoWzwsTLiHZLRaeP5zdpaENMd2xtzB5Rsa2ntv6RAtbhHFv2",
  "key9": "468AAguJHtjqB7B2hTVh3YqXHCcyNrpeWJq9tEvPegQNamGkp3JQCkqZgtTZWQ3nkja9UcXnLXByDh4YijEmFbVG",
  "key10": "2ZAsKpXiRoLPXY9HphePp7rff4kn7AuJXjf2CfAZ91XF2LG79yibd8oJifVXx15LnMmiPkhdTQkicKuZ6trJ9sT7",
  "key11": "5VXhj5byUTYVAcTqCua7JcJNetysKbgWNSsppp3oDSw9MgXLcd7eVM7h6sa3G2kkcHmQHPe41YLuJGeYG84RrBQP",
  "key12": "5bBs6KnY2TSy6iMMyT9k3eNfw2JJC84gRq8JBbp849j5X8A8qrsq2UZV6cXzYmHmB7gNgU5rt9eSeraKJE2WrNbz",
  "key13": "4TYGzzjC2pwt5aXGAVf2dcotdcoLVnyncJCvF8XCwNA5rVpQw4YbX7QFQaKn8PPfDykGiLuGwB6qjHLh2C8jvJxh",
  "key14": "2ABE6NW3HhiHD5ZsZVQ9AGxKpfMsH3N3ojNX7cPv11mfyB4uUfrNP4MFLCPc4UjBm1i6BLGU1JAMankvT2uWppeE",
  "key15": "5j5xXob3q16y28s37kTJF63in3ZMA2H9Mf1hJtoXzBGYd3LUmsjL6TrRDZRQzy6ocSPVBf4SnvKDD1rzDiksP7cj",
  "key16": "46fMZqU7FJFnQQwmNjFbsqQEXqMuU8MPKwgzXkgae3Q1yN81EWGbqSZmFXerTrdE96znb79aUnoGsKDpm87d8imV",
  "key17": "25RPmWut6LXDruoakLYTLGV2S4UfUt8McVpT8VzA4TpNpTEofATJEdbEvGjtBhqkNwANk5zRn1bRsi5JgJ2eiNDn",
  "key18": "5PwDwCBtRprYz37WGvAWjBRFn6m4Jktnaafao5ifeYb1RFLbrgcEVQvuDdwLXxgSnFX6WS9q1WbgePDcMgg1Lp1b",
  "key19": "3qFeweGsVGsxJoixy8BcYHnpHLvBenPA6W1K5vWniZ7FPd9iTfJPuBHhbDvxbDBDbkmVMfVt7nUnyqpv9xid2MA5",
  "key20": "4UNjtVMCC36MiMVuAwMnvTLyTgtEhy2914EWeqZWtzeBWNmWFsD2tYdQcFqckLFqo3Uvn5Rk5L7W6fpVdUA2eSU1",
  "key21": "RPgun2S7nn5A3Wb3nV3yqZquDsaHoUr27UrdSt6scSwRhkLabUoy4B4bjb9UpozBMbHHHLfy8Lfc4KmenpCENf5",
  "key22": "3coNvnu47DMUCUmWceVDuKEfx6gDxKhq93b3eHeff5rq7WJBrCm8b2SUiupUfuqupirQSSbzAQKg2r6ndbbwwGzC",
  "key23": "57vHSjd7MvYqvk9G7MF1mvjME2uFXWDjCjxk6hKPbkjoNeXTfE4rxGRDLB1VwAKsqZRtLHMPbr2iaYbvRS9D4riJ",
  "key24": "tpHoe5r3ZvPA7tK726F2HK55UaB7rxAgGZj9kSrHyJXwGJVqctbuk2ognMKE8YZccDY7KWS78X1cs8t24Peo2mG",
  "key25": "5tNWisQ2rYScEmv737Ak6w44tGYQHswhvT1NZymjr2AmJX8mztkPEpwNyKdeVjZv5fTasZ2yHSrZVJFaHJKQC44G",
  "key26": "3FvqwCMXiz7ckvKiCVXkCQHDGe2HcJCAUqFG6VLrCw5bjaKLq1k6cRgU5ob2SBAyvg9qH6Znn7xK7Ef9g47L47gb",
  "key27": "2mmcWuJJyg2a6uaadNS2WayzaJpVBHFHHXPU7XXdvuBtS94aj9SiuL8wogbA394J4jX4udvCR1tBrzXAxMv6dnNq",
  "key28": "2qmFCGFb3wQEsP5DYFv7rmY7VzyJ8m4Z7mVEUx8BvoqHgVQAfXTPQCd1Jxvr1RFAt3DSgXpTqQVCSHk1a1VCsoDy",
  "key29": "2qtLP58crMxFpfACEyjXE4TdPriC1sxUdw684AZHeRAQqBFMV36ZPg3wdfzwGntwXTe9CVWw8XFFQ6XFPvVvPEeW",
  "key30": "3LwtXiLiBwHJTm8Kbe7ipxftDGXedxKUoWYWteztRvRRTEJHYpXBZKuoM7tu3KJ7zWRCHmeBa2fAMeNVze3dTY9G",
  "key31": "4bBBivbRjBdHfC4nvLecSPzXdSk4iAHVbDQ8PzJvyoJmgQ5aXMdZvueFCBXHpXxbFLsREmknYroz1NXVyxSzeDkx",
  "key32": "24g3AsnW7BuAYUhJG2ukQGhK96zgScmW7QnvX1iTGDjGrtDGddd36pABZFaByoEX44TtebfHwSywwjuUY1QoE4Ek",
  "key33": "67J6Af7hnBwW9WChuMu1ZGLmhFBK6mu2e7Jyk4JhEzGuP9RhHZyJAUizS3e7dGFUENKMkJkmjuPrRKF8iy7qyeSX",
  "key34": "3ZVVMZhWcDhFqdTkKBJf1hatTL9SDMXZz193kbhigaHB16NUHhhsm663muSuNutqciVEJrAzniX5okh4ZsAbv63d",
  "key35": "D8BNWgh1uvZkUiC4HFeLRuqsbNGAFoH1YPN9BxKsapkfdbDny8bcDLoGgQ8YhNYX9eB3v3Z3LFqC5UrN2LCWiNG",
  "key36": "2kx5iiUVvxZkAVSvPeVbcVaD6tQN3Xt8FaHgpHuLKSVJ9H81Rn8eEWgMfpTAo2TFXxXTsvMejsbCJJGA3myYVnso",
  "key37": "2CmFA8Wt43FWtzvnwbyxYpbbHqqHJQ1ku5aJ1GaBH99g2ksxwDUdmXNDfWZY1VFoyWhmMqKypy5mSyHLq1s9PTMr",
  "key38": "5QgBQXJQNC5Nc932QMTab2gi5Qug1FPgSJvesh7oMS4VShoQ7tHfARehHWjJVB2DRYhUC6vaSLRF8QXiwD6Di7FK",
  "key39": "46seWChYx9tBiLxVydaVqED6pmZCwnVwzUjDVoqyGwKKRnxgQDhRSMQ8QSnyJ1VjVUJSSzTytQXk75HZrqpu2Ljb",
  "key40": "2b6YtngpWb7hdhMtRwDzVFEVKiu68NmAy8vWBtEzAw3gk5kdgB2muwhNhf3gsLfp8jQLnHGSWNnzwnsnwG8m83Yj"
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
