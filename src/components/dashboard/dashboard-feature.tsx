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
    "67ZN9wx8eknrVmPGvfufNSdF7oQXkjx1j1v7a543df8SEsZqaYsvSR58n3eMsMw5b8AtWoJ5nQ8Nsov5j35fGCfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kz4No3P3CFgHuUGMqjPNUifRN1j6w3k6h4QfnATFB4xUREWhsXrwBkAnouMF1WSQDT2rPGmr3YjXhKLfFsej3kC",
  "key1": "2dC84Bb5DAyroDT3VRvmbJYcEgqk8suoCCoC9oB3KHZezynKBWuL57D6X4jDuFnvhnZ4MgvhhtrXH7kD12FR63KX",
  "key2": "3G6MWqHSrC9FMDb6otYAC1RQwkz2eMGwob6ZFXZJ2J8HP6rj2Rju9Prw8zko5M3DXBGgRsyX5y3MBDWjHzKpEoXF",
  "key3": "61Crs3yuZB8j9VoiC5q5pUD5BkNPQzVbmfwr9oKkLJSjKciGcLDDbcTfsCzydhdjmB4XuJmDWaz6yMBLjyyaqAxz",
  "key4": "oiF1wzRi4Vc1BKvMF18LFuzTRwHdZgAGkg8kAsd9rrsZf5gVL2cLeJ2HbSVqQ6WQgpPw5bxiiz6NFmMhAduEfEF",
  "key5": "5Kec56UZBPcq3a8ceigWf7GfnrMvofZrwkzmEqi9EjiWwkZS46e9A4bDuwZXJpYdN17zbuhBZzYqDyXWobVt39oq",
  "key6": "2A1on2cdQCf9zv7bhF2538R6nih6iY1eDpBfqcYcz2X6jiurXjq2pfbpsuYBJxLKFC7BMPzLNFLCnnE6zsNT2okY",
  "key7": "5N5ManhRDKYFZqcdEvXBtnKC4DxkRBYfkGnidJuTqoNarzMXKHBQtn2YieLsGNUBdkgV4fcdbE371S8b9QEU7tsF",
  "key8": "BMaNTiTdy3GPmBXHedWbVb7XboCghx7SaQ8ZE88khReuyYWz1QmPqy2fpSo1BSSLVk7zh4ZmvQtMLhJi1aZGLbq",
  "key9": "5Y97zxn8T3voT3duR5Pj7GDQwRayxSH31uG4YM5uuNQBvVFT1JLPby25a9o5PcZxNMzqAP3M5Pkcg8viLTbrSSXz",
  "key10": "24xTvgLi1nqa47fNPyr47Ha3VWX7YBdCkN6DqF2Gc2MSkPe61nkB89XxTwG2ut5zoQWZ9AdGBcUYRZ4BRuYD7D78",
  "key11": "5sc76fMs6eptT72GiFpvWAqc6qT6zK5u9ay1sTC4KwffWiF6btRtcczTgcEBnjeFRXZcMPc4bmBWzhsPvWQNCcfY",
  "key12": "27bJTpgrKw55sCR5ALYcXY5FWqXiDtk72fNSieDbUAevPYfBPNxb7ECsZjonZYAEh26yn2Xg4cEw2HAuYXZKn9yx",
  "key13": "46GYiJqYjF6qVagFWXD5iAC9uCy1WyHEaHooa3fuAUZmtL8WF2ZaRtzzJB3WxSSUx6UB3WrjqQ6KGPU8vJnkhNa",
  "key14": "272mDtFKg7QXx7y8bWKCjBX9entLWiURNtfaTxhzvdvkSXCw4djRsN23VXBTSNJGJXYgcX6ZXyzQKUCWA7YFWnZP",
  "key15": "5T6DQiprnASn5Bg3MoK3mq7JoFkSALyQCG45RV8McG79HrgLpX6g3tTEB5B4nYGNZtkhbFMLVtFvBSKiZWPgviqE",
  "key16": "29NJMsxQWnCK8WFxTom7ZJKwrvfpehE7bd9oJ9anCHHz11o8H7ybC7qVPx1z3TBCcNfmfczpRabRSQE5MuyxRKuz",
  "key17": "i9i8beUETLR4voMtrK56mqjxDpC7mSohvHmVsisSzUHfJkTWg1jGQVyTEuHMnwitxA9YhZYvXYGi2vC3AAti2yZ",
  "key18": "HdkUQKr1gihoqfFjAWt3wmEJocxVYoey7akuqmscrjWmQUmtGrat2v1AoGSiyjsHn9m6Z2hKTveFEMWEkQuNArv",
  "key19": "3UsfFEfYKCGoQ9f6vGYGS5Tr8tyHx857F4qrkdNVpS3wHiveG1u87SQxfWfFG3h4gkFaoEXATMbY5C4bLDAxD8ff",
  "key20": "2vLue6VGyyCPxKo7hPT6wikC5VZvDdiiWCCGb9b3g8ywZnPJg1jxqyfMzVbaieBbMiMQcnqwRGYsipr31zZgkjxb",
  "key21": "5m3e7Bp819ddcq7BWXGJNB1EHTJygK4wwpn8vy1ouq4ktPaptnJSHiyj5Gp9onahHcfUUo9Z6xoJd1qmD111oXH3",
  "key22": "c6pT1BcvhRj8PG1CpdgDB5jBS1JN8BKVGZu54JYd92FZupT6byqzFedGVEepdcvhdH7wz7S457rcq6JaaLdL2Um",
  "key23": "3L7YQNysf3gi2SqQJXbsZUvp2KGN8PDMDQ6qdVXvjrXxaijnu16mfgPGzc2jE3M2S2Ske46c3U5X7H6EBnnuvmv2",
  "key24": "4Roiafd9M2b8bFY4GYd4yKVU4zGs8JHESEHS6duovwPvmaYfLrguRW7pt2bLJeMZavRvPU2W2gdi1dL5JUDm5v18",
  "key25": "5HZVVdxHerh38D9r78UKqCCEBS9ZAwojAvpb7SUkzdDChkqXFhcnGUuGR5WhvcJupbgLVr7maqykmtw8pTdYd9Jq",
  "key26": "64uLUqW26Hjbg2dnsrZDA1e5aFUWG9AQkr1oB2caBPyL2eXSNzjQ6JJjXpHFYrKN44iYQh5MpqjUteGyhLgVqDCn",
  "key27": "65fULcDrkdS5SszjgYcPgTFJBeAtvEDtroYF13LbknB3128R7FzYGysZrpZ2742jNqCSS4fdRehkPS9WWZmyLVve",
  "key28": "3wX9udo5Zn15g2zYKPWDsZQ13EAC7XGVt5ALsh8N466ZKS1qLESufMkVq7KYvDBi957ujbFbSDg5c1Nfv1C5Aesv",
  "key29": "HtxiGWEyStgpiNeMXcGGHzHqqEzKWHkvQeikwCTXPxAD5xokkT7v6qgSo69CcxjsMRkJVmHARxYvotTbs59vpEF",
  "key30": "44fhuWicszQ3gFiTTv3wunQPFCzRsEeKoCbVZ9p4HCpqNddnqR2RLg2gBkKZ8WG2kXADod7fZuEMwNk2C4qR2z1j",
  "key31": "2jYyqGugAsYyVymsDcWTFojc4RomBMY1xjKjEB8ETMd9Z4zFYfRfQw8msxmZPm16LtXRS5RFVvn4gYSqMYkUZmrG",
  "key32": "2NX2ALZVeULwAUUqQrmMmWYrNMN7WPGnSfTvewbFzjUbgV5dQbUabHKB8XitEFC4pd9RkbN8177NAaZiDjxAbP5k",
  "key33": "47zQVo9FRfH3SakKastp3rBUFQJhiZkBJpQ1bxUShehxM31JAZqkYrE85keHVhumh1Q8kBJZ389DURuQm6iPsxDD",
  "key34": "66VpADpggDrqdFJ9p1gJfdJ547bRtFusubSHXDCBSLCFhiMa5J7ywCQj6tobvzndFnw6ijYY4Ld9HpT6GSC1ZF1U",
  "key35": "3nAuJjzxrxjgZVhhLfjiBDpir5aLVPWsnGeRWvN5MhEaJT8PxQ5u21JrtCmZEpJfvShebQnTXAXQFSmKuckFJTuK"
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
