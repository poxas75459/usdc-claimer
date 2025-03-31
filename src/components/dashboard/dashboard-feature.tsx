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
    "4Lt4umSgRtttk8mNyh9WcMToofLvm4uVdGWGqp8VozMqFeQYZTUqh79r8Wd86ZRYTymX8JfPcnAPe53MUsXTk4QC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A6U2Muu4FNtx3XRz2uGxiUw4iBh7sNgAtfgQTGxPGv6yDLbDJ7dpU62g428Zc3hYBQtdkQPv2mk8FUfwRe2TzEw",
  "key1": "53Wf6nGTp3htdH6Rim56SEMMJA9KWBwc8XakVXXV2FTttaEQMYN9HVgWtRhKvy37HTW7XzXQZd34PZuNM3H6XE2J",
  "key2": "3fvDvU2bQxtLQ8hvw2vWo3oyD2CRaKMENvorvnU55uEgSSV69G7w6K4QswwFP29fyjfkSvHyQWnbnmWmTUuYnKc3",
  "key3": "5uY95nVAjiEUjBsLWy3iX7x76XMwTdhbqJd4N3MSpvPvgBSyiUXPjzpL9hibpjhuydZETCupsVnikhYvMqyjmUk5",
  "key4": "3VburmFzQQXVkbDJn4i2BB2QWgm2UGyV4RjhPixK82wm8oakPcJAz91EH96KRhQZtJsZzFdQYkpHi97fmX7ogoX3",
  "key5": "5jF5upghyK5b9HR8KnNzLs6DbLr5trs4jyckPwGgKqtJoCE5UX6JrGkef4Fm278oZ9kG69WLexUVs4TXbZG6JdVz",
  "key6": "5Skou4JZVQJpgEfs8z5hQuWEiors1WrEWTBCwUU7A5LKzfR65YEMJbRB82CNfPvKXNnjnEVhnez8bpufvfaJPAdw",
  "key7": "4yfgzg9gT34wLFkej2r2SYC5pPvvGQGoCFASqb2sPenxqHAf2R7UqzjHKiF523ZnB5HRaw8mobX4YuSYJVQLvVQB",
  "key8": "17Fi9F8NQ8yna551Eop7KgNEToKeYsPkDmFGfEJ7rXCBLXx4LQNqUSWeTF6kNoP25KktZvbz25kz5tNiSH8kRAV",
  "key9": "4qTXGmy3LLhEo5YhHy2XLPGYdkE22zs3HEMg4HJViDJD8XSSCLzaeKNmUzvKmLDUJv7SU9Rc8KU3eHq4RYmDuWjo",
  "key10": "3wTokjL9mSzVS8oLeTKaca5fJTFNXz5hTtuD4e8YUP4sH5oKkNoSW7ocZYb2Jfe6SJjisjKLwnt43YoW4tgLmDDh",
  "key11": "2yTu9WoLBepbnt1Sx5WfJttmAbeHrEZyoPkvUaGaP9cPALe9i5mNbQXyBCsMVcYgV2hwzvufvYc3njm1HLEjx9L9",
  "key12": "rCdufxbGmX64REVGtEheDqUcgACsHL1gzc4g97XTZr35jr4qB21P1SWRcukDKVUGgxk3agfCzwthoYrPYLuSxpH",
  "key13": "VEbhsFsJ869sVGASrBvBkCJHJdPgBNoDj52iU5ESxcAeGoQ8v6oQJLiRioUNM7rKBUk6yGH9hvo8MQ6aAi9mcwW",
  "key14": "2C7LhXNxJy75zveFRqKNStbVwteshZ81kmJQoQNybvvntq4S98TvFGrMvr9DsSmdECsQJhpBedyEPEM7SBYuAhCJ",
  "key15": "2o2MgvYcjbB2zkRKX2PBsZxbvb6VtNVzYdF71GRUmhn6ZaqZSmDgh9S4oSPgDSZevwajiyzYXinhWgccrZ3nW1y8",
  "key16": "3eanwoWXXRKavzenECMZPDPxAXMuWrfKmxCGVRhi9MDSKB91TG1vfGWH5bEEZ1eUc7VwpbZWkudr8ycGK32VzNj",
  "key17": "BsAuffk9Bcs4XNUWszDdthDSjjyntdFutiuBoLRAAugn6Xt8LDiVgfv6usLH41HsaVnyoKKVTkrCWNWvvSEeybU",
  "key18": "5sMRaoVeap7pgUkH6sexwX3ZF4qzEt446ZtvgxWxBgrpkBmWf3r7sFYPJ6wtKeW5NkWThznCYRA8zb4XeydZKCZg",
  "key19": "58BMahA43Wr6wvPKS9p6LrniEW9rwVLztj8hzq7ADFL7F1cLyFvAD82m4GbHEH2fMC1yC7EhfUjrWHMpHcrCP5Sx",
  "key20": "5S1xqUvdfDqj2f2z3GtgqXaPRSEiGvVMBrd3miA8BKqxEJE33YFaEd6vLY55xGQgfGaTLss6majfKzYE3Cq9UPq4",
  "key21": "2Eva4D2UCC8ukP6ccyPmxo4Gzb5Ec15ExRXVZXCFg1AGANaVuUo1HtFnrgPddhbdkX3fCh9NcpLKj2Wvt6s3B8fd",
  "key22": "33kBX6eUzxkERvqkDxxDhXDN57nkWMDRU9PBGQW1hpJHS2NRZSMQU36CurMVpztpvxHAVPKRCkxFTeHmk8JvRV27",
  "key23": "354QrpKW1VqJLCQS1XjoFjJo76Phf7fVtaZ6ZdyYptMb3VeknPv851eqd3YEkTERp4oe3RPwBcGpQQE9EZ1MvU4Q",
  "key24": "2wDEFA2JiyT5RPRqgyuhkPoTCRUL44wnxFQYLKEXztLT3fbv8KhHvzCTy1QrBou7BihT3XWryZsGBpuq3YAdYfG7",
  "key25": "27ybyfhwm8fMtTSQFHdGTiXmiL46yut3QreMFbKam7Trk3j3WUtPYDypFYaVScFkYD9Nawh2Uz7HtiMq9tU6B1w6",
  "key26": "4FHN85mRbgVz233bCJkwpFKaEsEiYy6f228Tu7GuXqmR8jSftgmdopyZsjkW7RDWvHBeXgjedbFStLtQpPXmjTq5",
  "key27": "38d8sbax74efF8MT47UAw6iZRmiUJQmVa6S46Zr5dtDyaWrQGnmizH6M35bfeD2nuNMxqtq2YLNx2UK9G9aQHkvZ",
  "key28": "28sJ83owS4v5uxUW7hjeyCgek95qWzDJ9Z9kUtBvq7zxS6y6khESAtHhFTEjGRVVucpGZfNGPUggPqEF5FeeR7Tj",
  "key29": "7Zx4U1QPJ4AbWmi8wKCdXhZuFTphJUFBrUEzhuSrgUL1hYi2HMhwK4sSmMnoZ83kTE9t4NJUftxpneVxZ29Dyxf",
  "key30": "5dkwh2XA6xcjyur2LaND3gVdm57xyWT4ZGJU5Cmaw6QMWR8XWK4tZCNByrxdShGtN35QHiVWfXzReSETGhsh8YRQ",
  "key31": "3cGXMbaMa9aCTe6oP9jZvvuzwbAprxQ8zdaEnftYj7bZY3xnadG6bGFGbEq1iZg6AMeyCEWfMSLsUietxxV6uYaK",
  "key32": "3ACRhiU1YSayaAXkror43PubuAA5Miyg1SQZMmH4dokXGn5kQKekAxg5CNDfpPWmDuGUmFTgsMRSm2TTqGs1yTFP",
  "key33": "5tWBqhrBHbgBcQ1p74QkgxGhLnUVVz9734BGBkPSefJonvVVWwscjYPiUe4eNUZJUMiXFsUU93YE77LGocmDvmWK"
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
