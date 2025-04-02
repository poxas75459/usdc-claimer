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
    "5z4d2HVXyWYrRgt4svQQtHhGSiEGyNL6Rsj2xvm8UjmG3KCmm3FVLCyyg8bfkpTqNDbicYHJ4w17Ez8LLU5i5gdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bbx8SH8YUd62t8PLv4DazhseW4AKV5EVT6YWqrAXWjh8Vx4FNT5xGyFzBQviLPUddRWjiu6KATN659G3Tmafpt",
  "key1": "3JcS3aoMBbiq9uKV7fCtsugc27u9txNXBduevKJXdo8BRMTnRKyUNenZc9TNhaKn4NpvXz6rCnhNS5iyAfKWkB5F",
  "key2": "4WHmxuHgfUyhWVeEjdQTcJaaowuoNLz4mSrCHDkt6HyqaVUkjduyjkMz7FT8ZQeJz2o1ZFH6jmtntN3emMnHdKjv",
  "key3": "5mLWWxfabVYQyWPtzV51sDa1eCog6yAgCwBv4RkB3BDzZzkJ6hB6a7bTL71td91ZasWUNLYEbNTQs7AFL2MNSBY2",
  "key4": "2KSi2BkdKdY4KKHhXS37cY8bbenzRsqjvXemjHiPbvmgXgxN4dFY29ZrSDoxDDYHQ4bxoL7GmX6c9eyTzyJcMciv",
  "key5": "3HhQjbJoXqqxs3pQmT9ZZy9S1kMWEYQUJENXGyJSNtccVF4YT8VdpKYmowQBfQHYvnCEht1zMvGa27MUeoc2CmNi",
  "key6": "5Rea9Q7Wed3tdzYA5hqSfEtkNVTtqnELUBHw5rc8Uk3agN9fGAamS3mk8GXVB1VE99xSKbiQbmovFkEMJAN35NJn",
  "key7": "TcDJ8Psx42NG5YBR2RseCmr2C7xiGQG1souzUKgtizvmETisbnQaYdZUpFcVgY4vD8ULmP7mFmg1fp27Yob8uRc",
  "key8": "4qNsV1gTHRL2GME9Kp5kFqjkNcSk5GSVECEtXqSeafFy7JA1yjfwpjyH6cqU5snwhsZJ5zhuSCR6Cmzuhgio3PK5",
  "key9": "4k4fgs7gjrnd4U8DDxsvWvsWxvsgzxDx71CGzBChWvZj4Bxg9Q3A4D1fkHNPPS4TTV2mp3wW5UvTjkVETKM13ZrD",
  "key10": "3iD81LfM8nsz2rbvkerbfJsLpjgfbZ3CaydtM6b78qizdMGkVmcr73mPQLGSFRGf2tJyTEp8mMsVJxcbNSuA492Q",
  "key11": "3mY8YMSbMWEu5APFHFDY2QVF3N7bQY3bKwaA5Xmed1j2rtDhSe6haRHXVbq1wsiZNzp3U8Mj9DgHFdG8cXEBDVYq",
  "key12": "c9RUymZ56C8snELrAmt5Kk77oeuCa6g7nsAoSNDF7nXknF29NEkQMJbUwqG5XttPHoj8FAeRrXvpTw9fW2xNQ8e",
  "key13": "2TpcVkU5muf71k4SSGeUyC1fJm8heSSWvQJVcFBwCyv4jz7sn6zFCbQFCMRF2y2VHXbmofkXUEtNDJvFRA4c68zA",
  "key14": "oTgCu19gPiFTRVANG6tmfngdGixKCVvZJ6dJxXFUL5eFPkwy7SC8brrwNUjHZQyrGZTjA1gA5mxk1idkF6S9qV9",
  "key15": "3FE4c8XPDPRHPTYkPx4vEWHwhszaikFbetGUHLzUu33mv8JeJdA6HVKZQ198dF6wfrr4vkefqKugebCGENUySqFM",
  "key16": "2tNSUSActG3U4dmhdWZ7Aea6HkW8Pq682jWpQ825EZuqyhn7wdUBkxE8dhyrzFpVtQ2MzBKg6Hghuyrv7LUJQbTg",
  "key17": "wnk74EpJ7K2bq4UsTqqAGU6ntx7gk7HPf5MGzfoqVKBThWZWfWftrpwuxoiEGj8eNm3KvrU72Yu9f5x53Ne48wT",
  "key18": "3Z1aLmCf7xm64pt6dMHcFEsxQiHT7ovxgcgkdhiJjsQNkQFKhRG9v4bqceeLXPQF33CASVcsF4xG7sXUwaqqXKzY",
  "key19": "3EpEPkR52q72Y7y4BTxH1Px8jxym46NFXEp4Zgsk6X8KQm52HCsERK4w7vreEWFJD8MztSmUBYDqpiabWiwcYwpt",
  "key20": "54jZdy6Tq7suT4pyTkD2VydRzo8NZpHiRFrB2TufkMLCfCnMo61C6ZFpV25CwSpcCzvqWdVdkQSDAtBvMUHowaF8",
  "key21": "3PJUXkfwKK73geCxtz78DQQMhhjN2XrxBaYEzZffmzFsBTH7cH3ks1z9BR1nemjNK2hm8rgMzr7xacjKaCCP1QxN",
  "key22": "3RgeQNYA7Q22PFef6BfckJA1HXh4TMHDetQzb3bMQpzLr6mYmrpbAnGTU7pdBWHXuW3aTBA1EXh7FVjRRGqdi394",
  "key23": "2JFQ9abzZBZJ3fMvmogth3pH4dgPwpZfpuM13kybrVp8h7jbdfYiMxgPHJL7qjPdZ9xE1VUFyAqi5WpELyidPWGD",
  "key24": "29KgudULnkqQPDtLKquBkVwDtv1mCcj61dK4ebVqoqMsAREksdmkQsc8muxdRU2xPRQVjZ8LyXjU24nrdwo4PPbB",
  "key25": "5Ykv2PcVUebtEM1TkPD5ZPgysrARZ7e2eMB4AkYgH6M7WnFJ1EEZXQzrPMSGS1kgLhzUGopUKSMQL4aZnS3MRaDe"
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
