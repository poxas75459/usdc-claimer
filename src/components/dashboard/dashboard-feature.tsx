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
    "2w8yJXWkEseQz3k1HUyxrWK8z9waUkpX7rLD8StTmi2C9DU8aKxuXBCVwB6DRVpk6CjA2XtLFvo2s9tAnJZzLKXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EVn18VyoWTwKQ6zLNFQieqFLabuYEd3DiiAdF95TszAEG8NzTAfpjpaFMT4piDRQrNE5o8gKm1kqGJXxaA61TT5",
  "key1": "2uohWDc2HyJxCJiVZp5i5uHCXudWFCttt2v9YuSZHhFPKcBLmSq7Em6iY5zgRZtdDvaPxmX9HzD4NWCg6HsY3pZo",
  "key2": "5DxBdRvXGfPcUCHLZYnsrZPV8DDCDtP13EM1rAba6zYCFPuKKZpDeyzETWdLA6Qa4WSnuoG7CU6PLPH1mYRzRCpj",
  "key3": "vVztEH762eQBByPUMcSchRsu2FPzLsCsbCBfzWLc69zvNxMP8zzAaE57YyMtEdbtdhMCpJb1AnVYzZR2tzG9yUK",
  "key4": "JHXN7yBu4Hzj4gWbK7ZAu32CjvSJuUGRqMmE5TLRiY8k7NrAgih46QXzh7a3j4hHAXKrGDj8xTym2qCpkrj7JEe",
  "key5": "2z9fRKHYbDs46jCwnTfJVuZWp4MBAX3iF6MP4h5ckC6kuKHmhUuoZ7EMnW2gU6zvZXzHPtWU17cMn7rTUU6HDYFi",
  "key6": "3YFknRssRmpmRiAce59tzGjxTvztn8AYGdmdwv47fiSBfwuUcKMoDgMf4xyo24iwyu12xSGur5fcsLBaSsHw6Yaw",
  "key7": "32hHXvQ9ByAGvqox5Z33zEVraqiHkDBsu5diW6vdKfCztAJmqKjP6vLKwct99d85LfM1xgiaQMPbNUnSaJocChtw",
  "key8": "4jQuvchop9YYfyTHQE2QjTp8okFQ1RTAoMnngV2P1QvCLhV63ez4Qd8ERYA3TXoheETcxWq2sbRGLQPKfCkLsEyT",
  "key9": "sArdCVve1DN9EhSjNFYgRvzhizDVkSyXokFC6z7LyF2YfpBVHJc7R2ycKL2DhHn6gH6EjWA9QFASQpCwTzSsEmK",
  "key10": "2LE4r6aZdSC6mKqz3jhC6TgkSmeA3NG96DqATidQik83Ucff1cezxv5CF8SbGDd4Ti3tNgwEZPgYuvvo75MehzCi",
  "key11": "54NsUcCoENUo2uPEfjgPYkY7gNKPRWMNMw1B7DDCMcFPpy4RmkYAFpHcBwicn9VwYUh1tH3CSvVLwB7PYZcRL7WY",
  "key12": "35J37uyrwkXnY8jURziqZa4WdecSLcXRjxjkWPLYHUbVPDb618wvbzM328nYqnJue1XiHVrWRosmBiugeY8pmKCB",
  "key13": "3VTsWEMrCXp13RZHqSdkJ4g5ipv3KaPx7vE8zLs1SFrfJ1DfRKRpAhLnYu5fvRbsBeLRdRRgp5PpcAYBm95z9tRn",
  "key14": "4m8ocEFqiSuB1DFcUwT9G6zwNKy59Sp7TvkmK3fhFBToQEizcHNJRshUYQqEDErR5zF2jm93KnRfcehM4vHG8mJh",
  "key15": "fDUWkv2pVC7P7p5E3Pabqhpgrkh27mZAEL2GjUPRvpxGDyKiiWqNS4LLFp9LZR4Aqa3xGdZKbhsiVwBGw3LLxaB",
  "key16": "5Dx5PBD9JJPokM5nKEHLPvZHtN6jBccs57dGXycm6pfc7QoppLtbkrk7idYCXQVnGeYt1R1va3gW5d7NgZrJECup",
  "key17": "4TswpPGLvGH65o83SXrp89ZheYTFxFh4Gy7rHZoVbCcXhGhMG24ZQNwhYdmbqJSY6NgSfkc6Hz8ecRGKASKgTYuX",
  "key18": "2djVz9h62E61ykJgmFUWovTXLW6CagvDLmyMUq5ZSCdzaX2qtCjgS4spj6zNAiDuvPNCNLpgetVMTZ4Yxov8UiLH",
  "key19": "c4jyYUrJ84u9tYWtcuL6MsNRuNFzTTN9gfZHQUzErsaFrdYwdGDYzrDjUMvxLSU11nwTgSXTRKJPAnN92vXXvkT",
  "key20": "52hUr7f5YeZ6mnvj77RnD8j43KNUraYE5EAY1wSvUMcq84LSyNRdsdnuQGvPZvMRX1otStoY87BtNRVhq7JqzHPK",
  "key21": "4eLM9DrxjjUWW6NpFnEgPXbK6e1a2yzU7iD66hsaVVf8kE9qu7sQ1hE2W1V1J5vFup2agHuYWExsfyU7ByRc62gn",
  "key22": "5KfhYDCxriZzzv567MYfmtCYDuzEaBnsfecSTkPqBNEWwZ6TWdU4Vki5mXhi3WS31SrHhoxsz6F7qpYCsCMWXHP5",
  "key23": "cJy5C8FqpMmXn9VMusYUUJchKKAtBcrubUUDSvLvCW6Dodtaayehp6CXrgp44T4t2puVLH8pUp5vecC475CFxgq",
  "key24": "5tjJKCE3p8DeJ7ZNxLeNWuJpc347hbF4Typ8u7a7LxyffUz8sq1sV4d6JsWDrjfiieB5a9y6gdkAbNHWeqsZA8xN",
  "key25": "4wuwEFYMBtqMirCPCCXHzZnVstZmUvjeb6M7Xriib9FXULtTQZENEf2bWxJzMc59BHSoJEqFFHdg4nQuzbJhMTxm",
  "key26": "51Fr5fL9VoN55NE93an23tCAYNernnSjq46XypQ3vBNGsVhu9KF3wjAp56ufHsp7F49q2tovarXAa2ugX7DwjM8h",
  "key27": "5ESdejBnKmUpNrjdbCDe9NjVChEpEMkzGc6Xbg12e15r9daJnsaqdHuFMiGjpsbsm4VUqRK6gpMQMzhDqAebTVZc"
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
