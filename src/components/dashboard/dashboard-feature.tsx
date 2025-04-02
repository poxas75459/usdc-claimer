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
    "DZ3NGZmZkWtnaDykXZmcKS1hxvGpLT5RTAknm6zQrxArKmWW9VGoMp5NCcsJzkPfcAkSWDZWnh6PBTXbATN5YGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53WxjWN8swkM8jYyeDhiPUhWsxfnDPU2DcnCoF3Gb5k2rnVUEDcfhHkDkh7ek88umovZFNswvgicBHa55qNTyLWo",
  "key1": "45bkS7JngkZSAfUMLyuLwks2q2dPd6MfL9htA6UioSiP2VUcCZSJdHcPfttXwe3rtxmSgbYFxtr41wKRiEn8JYxg",
  "key2": "fNTTTZhVYf5aBJa11uWUvmL65WXDJqswoQHrg1hVPaHXGz4nk8LFCXBKErfuPMqdzphvqVca8jAXQMJjJcR9xVX",
  "key3": "5SH5JZQhZ8dGKfYDdPfoyXfcn33gRbHVXAVDajyYeTWaDGZf5iwefjuPQsxAFcWTi4bQdcvJvPUF6zxt3TEMZSMR",
  "key4": "3jt1s6qwKEAzX1vtfTRsk3FrNzPwCEUJhdeKcsbQgDWRok5t1aL5V62768wMDLpvsUY6NZAXowwCeQZPgYJvUmLs",
  "key5": "22CpkJWgdgNqeXSsk4GiBRs96NntJ6J71XK4jwBoiYYGPfkYP4Sqa5mhbAJGErC5JAXy8WWjRtV1fZf1ciGmSLFS",
  "key6": "3wwgk9ne6Vvk3raCzXzmwZRrwVWD6fz9CEBtzhe7DMNa6kxHwix5LZQR9yHKTZJPZCqoLtfAJmY3SPjrFku2wEZg",
  "key7": "26Wn93iHF69uAsVDZYCWUV2Q7owthN3z3f5dbnZwujhQGSMjxaYNVnUykaytLTW457wCT4pyCdhPQFbuYB1tuMJE",
  "key8": "tnpksQkjLA1r9PZ2H2XKwgroBYBVhUj1z4X9kRYEEtySnBzzGVtKCuYXP1WLdWSEfMz5onYFudUayrw8jwgmWxP",
  "key9": "4GkJSKaGESBRo4G8HkZF31RYpFwQJWnZUBBXVk84gad5dk96jzDVyS9itYDgNjpGWnQb9owUvzRDQow1Z6Ad34qU",
  "key10": "49KFSzFetkcjfXUconKvRMSbjsAoQiRUb8NjMHuaxgQfKGpT7zHLDWVZ8bpueF3VLRZAo1HKV6s1Y9aRPfxH3JMW",
  "key11": "ioqusYwXJLR8Hvok4JuE5TTk64MsR1qXuvg8P1fnXsNtMGf652SkdgCn9MSj8rwGrEbRvs2ptkLCZrwFFNqNH1d",
  "key12": "2ZRf3UuE5yAKgJ7p9AZY53cYSxqhkitGnQGi1hDu2QMUGbjHLo1birpiJ13g7Y9oPXBXxkjBsm3fG6DR2jtQUcmz",
  "key13": "3DdeWgLz8TsmvfAc98mTdrFK1EEKMk1zdebFmEA7eQuU81Mp4yxoNnx59ELch6jkMNSzc17L8cdjgT7UFCYrXqtm",
  "key14": "5M291kJx8g2GLW9uSM6x5BUit7m4TtLR1bp4tw8sAwy99M5EvzN4bXq5nvkXC4WzRmz88no9uNB5SHG1Hbpby8Zw",
  "key15": "2bgxDAjR3HAshBJ1SoCUTzZCmbWNo7gpXbxYF4ub4f5q9fLEsesbckya633BajSvRZ1Qu7c6zvL7ibbkifHMU3Ge",
  "key16": "534rAtV2JRcMTxffGu7jnKeN4tgunHjRSqQQW9f5zdvjacq1PjVQKDteuYcYh7wMpgmMDy2HknDWixrFsqUnEwaF",
  "key17": "5qv6qXM1muQzUjoGoc4MjfPeSrz9oyXbYjvpWJTjHNfCZmUhJhqsAwwGmy9VwYSW6RhCr3jFszqjypW9Ns2r9WDP",
  "key18": "64bCsUWfcQrX99RnS1jFpRtDSi2Q5otyXs1nhYb9dp2Dnv9X8bmHZavuRJCoEEBef2ZBcomJfySEKj53eVDdH4nw",
  "key19": "5MyBe7hGRbi6HMpqtBwfiLYbMuhpEQUxeftPu4EA1no451xthmwxJNbiQiakVrmTfVAXDwSZZUVBp5ziRajqMSrh",
  "key20": "5suuv4JPQU1bZfARiJ24oHUxUUrPEnHnsBmSdSbyqArR3eWoFfT7VukBRNhCMVzAvnNpYWXKjVPcwLMP2jYkpk1x",
  "key21": "3MinZABATCT3J43CvAcPLFbpR9fS1b4CqmLBeoSXSZ7Q4cbDCaEn558xhvwUhofARuCTK5hUyFptnBgM4EiyST4J",
  "key22": "4C3G4PXEScLsj1wvhRGpWD1Cbk6gNzHxoztf3rWLCX53c2A7T7Unkw5RVz8hXTiNsZpKQ53k5igog4ozR7YMqtzN",
  "key23": "5TxnsBeBVoMDW4z4T44YFw8zZwUWBmT24vyAwfATZXJUuCfADkqL9MvuGNrBTe4jtfub9zvJ9RMvq5Wixjboqxq9",
  "key24": "3nNAAgCsXQ13KBmk5xkpazVeuQGkrexQp9kRbzbNo4rLC9S7tKZMdQFaTk5sPfLPBNDLFLBwkQbMd3wdF9kz37Tk",
  "key25": "3kVMDeAGmSrGz9rUpsyrPiMYmH4LD9CBc8nUqWBq7Br7nh4pMLxwqrQzZB1hawnB8zHPq4yAC6YcswP3KNpk8Kyx",
  "key26": "38EN796NuFjuP3K4yHY7JvXsBcfSKxpZ3n1G5PfuiB4RewngJLhwTY3ebnK686vUwKLvS7THTgeA58h2vLLde5jT",
  "key27": "dXciHN6C61ZUBVXH4RN7ZkvUAKjMi1n7qiyiQGSZSCZBHsURvcs2v671MYDtqG7VozuZ8R2dFeA4vSQxgufxTkE",
  "key28": "2e4VDTnDiBtVnMjjSDxfHY7Vy9dssupmRKYGvzupNwCddHfwx81WCFxD4jpnJ71dSCgnG3CeQWtJdEJmJYnvfyTq",
  "key29": "3xPqWsffu8dzupSEa8AQDt1vSsw9UDAbqjhYuVp834jKoaL3wEgpD9BFuFsfH6st97YbdUXq4AqBUtGo6Fg5x6jS",
  "key30": "8jqPDz86uL6WRumCnnwjb1erfW6rncKgwwXehCaAJdscPZrh2QnxS5okYSdMmEkxraWa6ZCHKHG8gDY7QpyJ7uh",
  "key31": "5s7EDWLtPh4VJKQogceyMp4MRTBMLyCxnWprcebTnDa9T6QMNBVzdM9jDkYE3sxSQQVeyTA2AGjMMDra6RuwZTRQ",
  "key32": "5t5TcB7YwTNHaAy2mYodvCkDKW86vFLyfAMZsyzCvhDpFKiZUinVWgLz87Jknhro7c6eh6JKuTaMm33w3oWpoxhK",
  "key33": "2Mi8fLPY6CnvL3ajf3wQo7sV4G5iZFYRRMJR75KpsDvm4998LyFUBUyEe3CU94nQgTk4vE9rELwKm8TbvDUNrB6Y",
  "key34": "T3c8LytgX8M2BgGFUdYrmawm5LbfyN3eiXrL7Aa5h1X3x2kiY1SXTzSxbAdwhxHGZ7wr1wkrK4G5H27S9UwKcb9",
  "key35": "2fUvY1Gam2uUuUWVjdH9UkNF1z3M6BDmuCNoaMNqy5UvJZqZyJvMfK6bFWc8HwjmSdinTYNksQBLbRiepU5W5NJi",
  "key36": "CuUTeLeztbcocMKnC5MARXACT1faEyAesqrguK12M1FMkTfba6dAx7iRnWKx2jzeXzTAbqJMoXezBdvMumYQsw3",
  "key37": "5LNpyXvSKPVDAVWQzPfgfnYPkaSAAAnAvxNjZyyFS38Y4UV5woGHRjAWjZpu4QTJyhh8WtmdqDNJ7qrx6Yq8rVrM",
  "key38": "3MbHiAH1gQrcBBrqd6iZSgAakHWL1TwyxNv37eXDoM1LrDyU8BeNEAnf9yo4B5KBxGd5qzQGTPbnsxf9kiC2jWN7",
  "key39": "4MkKPGSLQ5oY22gLDAvk5nFJ9cTkzeTjawRBEdd97DmmtaACgLBMbxYJ7rURMrKKrnQXGf5cSKqd9M7WdMtqnZY",
  "key40": "1v4XsA6jXfsQi73QzUiWacKDYcbTQR6vVRn9FzeYHcATG7FyuHb82spQbHUDaq2QjnYk1rAxTSdHpnMJ7Gwietd",
  "key41": "34hvaGKrgBWEZyURPHMGCKXZEBWALuFtZKRpjs5MChju5NTtjjtF5AQXVZMnpRhDEEHLGBfo39hcbzL7TweVhT8S",
  "key42": "95gTZdJWotfiWHCBVLQk73QL5HjQpxwekxY9Z8yNrZyHLdd2JMqD9ERnVT7riGQeSf6iVnTXL7QQGqSH8XzVa5u"
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
