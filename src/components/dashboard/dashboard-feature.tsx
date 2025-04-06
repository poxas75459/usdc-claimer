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
    "5EkmjaMNfUVKih7CrVeDbpv4HoYTR66BaM4K28phx2CysZQkUwFnDTnxtfuiwhsJ5SgRhrh8WizRbnx34DPhm3LK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z79VXCpXrbGr6ohxTa7tA7dnNJ8knWHtZFv417mLKd3HTizpfPbTd9adWcgQVVj7S9t4Fteyd6CMmDKK2RiSqHp",
  "key1": "2xkFeNzGbBttj2DfTCszt59bX6qnXainnNbViwC57MFcsbp3NMHRLBthEX8xtujiVABnf15Whk3kWN989ZST994z",
  "key2": "3ksyFxrFJ7Vj7Hzi93yc9BJqZaSM7DMqgbtwtKLsW77F4dok8PutdKLQJpTQ4Qxmm64mChvBNGsdXv2Rx2PY9NHp",
  "key3": "24ZeMWzajJPWtBB9U4E8mc5vBo6NRBEhYhzEc2evVkrFaFGGoKMqHjqc3JHcbkfqp9ety6ZS7SpT5JCC9yxy9vPU",
  "key4": "krZfa9kAJTjJgQimgCzeP2QrpcCvP8ULHcs71vMgjuwuZGtqM2zBbsogsynz4YxdSUkhKNbJLrUfGJbkkMFF8c5",
  "key5": "66Yz5oLZgbHSY1rsDUZs2PKKAsk2MgDZGUFd6a9jnAGebCWE24HYbBDe6GRgckNvbPZZh3PaHQow4cjEdBfADQBk",
  "key6": "2WZXJadJdy9mKAL6neLQr1UMrecxXhVVEZEKQH1ypA8y9robz4stkXpvAbVj4Nw2eXCjEhhFzoSaa7nTtLuRMSGo",
  "key7": "41qCcGeGmRYguS5cveGADFqiSrYfNn3hLSfRT5MGyG4qsVcAdLFivGHbLPeTHYwn7s8iQRTrehMp9JaqnnSex1c4",
  "key8": "2D4d8nFgVYUmyU7bpFfg7e24nnhZGhLV3NSeDKRZwy21AQdDaABURBD3WPFkDnzfD5FNDL1VBRhXfhGRm6FhdLJs",
  "key9": "2dWfG2xK1unZK4hYPNtECFkLpfsV5FCFdNusiBn2xvxMrcNNaH5xZpeHEFSrpJvEjn21YmCKbJ99aBWb47HtnDaS",
  "key10": "3HExuBYWwNgMcHzPa3qNj4XrBqR7LZ78DEqYgBA2RuWUSM2xAKWmrRAifNNXFYuq1cYUcGACFw9DMBa38VRvMeX8",
  "key11": "2hpmUvcFA4S9AtT9y1iz8dMBtFDTwk8Pvqo36RZLXcYXM5wa6Gi86YX3H1c2Vx7wfK8y6LHEAHFovDgDVewhP7j6",
  "key12": "59d1HTLFiMTKwx7UaAtniGm67gzC6PfrqWS5oUSwRqmPnw3QXXnayxu5V2UoV2rqM74b3RW297agNavZTeN5X5yQ",
  "key13": "5nZRoeVmEMrmomMEvx2pYo9d6yMHGJaVdLqWirJCY2GrefQ3nMVoo1gRpgGzrCsUyDSd7EcPChyjUozykFk85ts",
  "key14": "27eiWkLsPoXou2rexLrz4GKg3gDvi2wH2FTZ2czxQbnEEtFETC3soRA6wTMtPAkNTcAihQkcjvEokePHN36zCbE1",
  "key15": "2Rm37EfN7uCg7ihNFYipFu2DDX8pMCWrb87tcXeQyfAEXAf7HZebpksoAd8VJc52xHD8Y2cFpHpRNRmEF77LiFeD",
  "key16": "5u8M15v1RkViwAM7DF2GmA2Tx3iTXtE1SMa2cLm8w8SMGHBVisXqVGJSEwKj6hdbev1wEuz9UYitLcMsYRh6Aagw",
  "key17": "2Q4jNCAbsfAZN6utcBXzRBYrB7JjssZG52y3wpw8be13jTaTPANHwm6dYnymhy9PnAbZBFdxoyPMKwf1uKbwMAv7",
  "key18": "3LNu9daquETV9xDbbxF9qu92PgMUAVfsxR3YSfiVEXedCbRcgfSjCKodjhKQ5H5ajMhL1XLsb3TQCth6UQPaPfDg",
  "key19": "4Y9ztjioQRmtW97yvoBfP7y5u1QLN8bKYYaaoZKuX9aideK1c449bfgK3dqDbj2bMzBWidrvPKTvq8BXJ2w8kSzD",
  "key20": "XnBe1exFLHyXwfLiyNUdHxUFdPN4p5LqknZJYfT1LGYbdkzBhYqQd7GBZo6WNNeaumqmUvmaxj33EHBeTLtbohN",
  "key21": "4Yea9zJU8mrHQaN4cbiSUHzSh27nszvntD8dAh8dHAmuHps9UnDpsoHuaCWaMPKDWN6Pkq4vkNH8eBhcJPDoSUs2",
  "key22": "5i6KYi9t9j5Z5ykN7zY1AAsUiktHqP1vSpGHf78KpKYkMMEPDgVfK6eUvBKqMtJyDucbjWdoAsh9ossNfKj1FHy1",
  "key23": "5NMfbGntWFxcqfxJqQbT5siq54y9yXfSf49GkPFXqhc4CHdae3FiDmd6XnXjngMgQ9fPvFsVquJqhqCwphgSTgCv",
  "key24": "5YNkYketKFDLaUHUbMoCnTeefNZNNQfX3hHwRjAc1SBwymrS3qvxjZ4Hb6kFeAznfgkixQWDcTyys7UP6zJvvzv",
  "key25": "2paEWQUMt9AfS53jDu2GbEFtj33fheRLnMety2Gk3zoJKBPzDXdsznncdQwUQADL5MAETxYrpfMaK2iCQS2JTk4S",
  "key26": "5jeDS4E6RAtHkxnz47dYimX619sn8SVZmXuTfVUTHmV1WbKn44uv9NmmATFYf2k9Qc96XagSYKLhq7wvmpdXkAgF",
  "key27": "4gwvVX6orDr5v6sThCP6amPipuFWUca4QJ7rRKwMLPSAM5dkiiXtMhHdh7MszimQCg1mnPBvPT6xia4XurYmcorE",
  "key28": "39XZW1MdoqKvwPxgB3p2HspgwkdgznTG5Yskba2neozSLoo7VbWujC9rrsC81Um5Nhsp7vPkoqfLmDsVhqmy1caz",
  "key29": "3cTsJ9WSbg8ct92mTWa8PPxESDfP4brrnHdUJYPRqByR3Nzc7Jz3C4ZLSrv7sKR3YxoC2M6uyEcPRptvXCcfkpoy",
  "key30": "2m7ngLLP5Fc4s5mpaPitK7o2XMZRqWeu5DFroSyuzDpiSfmXP4dHNesyGx1PaJ9wqdN9RqPdhGE4X7tv1coNhFRT",
  "key31": "4vcQgkJ1uj2fvBowEbYwPihkGwrNA9u1N9shTMz3a2bJd9haShbYiSpqw3z9PoTEiSoftdD1gQoZ2rWhiZeUS4NP",
  "key32": "3uhPXm1EGSqB3Knqfsi8Bf9VzrzTdADdctxUuLE1bnA1YeXyPJ8XLods8DPbGXRvjKabyFivYbz8LRwvaUD4V3s2"
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
