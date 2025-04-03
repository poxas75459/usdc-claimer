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
    "35kLF1rMPgHXGJiPFUAfmxVZiPxuHuVUJ4Fb2dE4nEKudLwixhDcZzwbsVfDTMYV2cej3cf1GyzzRpzZ9xyMt2EC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ub9WEQcoAwzhScZPWdQGH7Abo81EhAydCiAD99M1prdN94Wsgc8cWPyyHUF9QhrZwdNe1yGmNbZGMUufmu8iTmH",
  "key1": "3kjiwR7qhafEtG713da32Vp6yq6JzDWiAvERvhdcD8ChuZPz2wUUAS27YDFFWYTcbEfokNdXSHNqBw5xqz5iKCoY",
  "key2": "2ZRYyzZj2sAoFrejbd76RAGrb67p8NEKXVE3bSZ3uFPWTcBKri7r7jCbhCLpcGqGozRg7L7Baizen2WtuWRt5yeu",
  "key3": "2sF382j6uZHiRiTXe7kj2WNz3N1Lpvhi7RweaeYfz6Q2VViqcEW2Fmwofiu8BLztkGSMJGcqRggdNk8Q2b6iayKr",
  "key4": "5yPopHhnpvZMC6vRUgC2fKPaEHFTQy2F36atAzWJP8sDvh7EehYLC3FgbyjLdrtyVKuvizrKzjFuPcAiZ5tmNYdn",
  "key5": "29cCJBCZY17Ftshn72rMDffuo3QYBYpgjwBC81MGXBHwL9DUWBmkatUWtA57ZnbU4eLjk3MLWpCraydXpPTS7Qz4",
  "key6": "5zBavvTL6st7gu5qCqXWUAiLECVtxCbEMbgMe2AFn776E5JN3GK219213QVyrQTpSKt491DBdBP5LQ62fG58iad7",
  "key7": "c7pzUCJpyxipyiduGBNXUtzrfhx2ZPcyDw5tHgZFz9oyoibganQZM3Whe8v7ypC6nWo6fY68TtnvJFUU83HL7Mu",
  "key8": "3ekrGRJAkNDpkg5cxNVGSXX2Q5Jdv3QSebfmZyRSiYtYRTf1X9LQxk3ivkGeL32JjsqGijUjZraVnZiitGiV4tZZ",
  "key9": "5kT9pNnhXUT3VZB4kmqrLvdXFqEUUGBucYLSKT8pZdud4kmUMtXi4wCG7LDnyTLv9EUSongWAHsAestCJhRWKFSs",
  "key10": "2VvDUKya2td9YAxCijj2oDCUVVtZsaUd66KMQcA1UkrESvpiDhTwb5tBNZesVYDNsoghu6yUb4U9YEowCUHjqDwe",
  "key11": "4n9nbEnXWNS4mWA6Hp2cnwJUjSwedCYShrH5bSuxrDAnKBKU8u4C7v3m9huS4tu3VThJM1H9grTYHQipfRgRL37F",
  "key12": "zdkbLUut9rwGXGt8p1fsKHKVQQDn1CWy8AtEM6CNPeq57YJoNx642Pk7fchrPMeN1fx4jeWnfi6985ikKCooTje",
  "key13": "Zp6Jzg6EHhTQsdA3iyJKNT3S17RW5ZKhyCKgMVM83gLqWh6PbSFyM6TW2TrX8WCsJas2NyQwNaNSMqBFwmL1E8z",
  "key14": "3uZNH2EYGBw8BNgJagNdg8pqGvikzhMFy8RytDPAUmYxPAS44eNDuggpzNEHFhDsTvo29zfD36Xng11Z7NKrA1q",
  "key15": "5D4fq1LQe7dZUNphdgW5cQozXr8YChaK9XbPwXR3fsV8mALyJf8Q4KWR8aS7Kss3zzfHXw8HhmncUUv5TYAoUoFs",
  "key16": "4MG8g6sGWTFQ4crUJax2Z9rFUTZ9QFW4rYKfg1W3D18i1ejzuffEGv5kkrxguEqTApLCrwv7WqwrerhP3Rztrkyj",
  "key17": "jzbTPq5ASbtcCUxgPPtrQMT5e8ZizUyRJSv4q4amgkvYjkWDCFyzeeuzfJueEHoiXqdXYF213u3ehhPJWjtvJj2",
  "key18": "51Z5E83JbXThs7k86NVo6MHi1S31m62zuVgz5JmoBHjZfg7rERFzaLbkVkBf7H2ZrkKHRuGQMoX2JooipoFi3oVU",
  "key19": "4cfF3ZmsAcirx3fqQZGfdkfzmfozVFmSWgZPt4jDAGK5z4DnkeEagXfEcG3VfWgUMP8JQ2b5kQqLDJRqUw8EFYVT",
  "key20": "3z6TwzXt7BkdAUQAey7By47Z5RAwpojR5caWo66J5LvEfHbv7bHXcxMMcGcKe3n8iEbaVzbfMgWmowGXTeRyHEt2",
  "key21": "6624rBUHWDGgTUzEzpVBGyPULjBUEp1MXw2NzfmkmH1oaiXkMorx29KzXitHua6eBoptb4u1AiSmGGeS8Yg9nnpS",
  "key22": "5kohKUmW1UaHix1Tk7XxMMBMjoMVpxq6LiQ8CM4UGp2YedRkZX1szEMghmL4mBRuLEBsFuzYDfJTFtBaf5HqJNST",
  "key23": "iKR86i1oEmBtVAK6K85S27e9KemtJkb7uSPZTNMgW4Rzo33wwGLa5rEMjFhfVg6kxGuco6p4nSDRRJK47orbS3Q",
  "key24": "3sMjE6fmq4YcTARaaLUfkLoqnTgaq4a3se45nM3gynNXTo25LmG664KzadQAKeXFBgmtXvpMAcjgFjkU132vzGXp",
  "key25": "5SjGWKDEWnepZeVwhuKQsW19VqU4V6Pq63LDn8bEQScfkG94EEsuphMqiTqEuwxfTWsbVq3fLogxxjPXMggHfR61",
  "key26": "396P4EQLGgEcFW3aKK5oqtXJEEfF4jNQ3BWcHyNq7fcwAN7gMf5CpJ2Q2vvzr8riTSEByj4G87FuwHzH7kEMgwFb",
  "key27": "5ypbvEH6iMicXJheJn9cndizLs32HhW8MWZxWVV9xYbjCeSuByinZzWXMpSWtnfYgbL3zHb9g8nCT42NVTopoFwg",
  "key28": "2FM8QAwRM3raVE53wUd4t5oRLq2mdzgRSxje3j6eiVMpbXcoM89zTaabbLUnAuXiuaULVuWTfLQrze3msLuZmttN"
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
