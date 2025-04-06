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
    "4cj8fdFThZqiAhYjUZyVqi7LmjwcaQtnYJCYUrEPNPtqEazGpE9mZTqTFdVQKzw4DuxhyDfMErZbBs9A4V6CZreJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wzTfhxqf36YtxvC9W5fUrFJW9NsqsTeA1ZGBUmEQniFMUFGD3FjX1pRZ2x78Z599frrtQ3uPrkkU42qpFsJGYMf",
  "key1": "2iPtWh9i93HjNjLxuQarf7ChP1NhxsXWV4dBoCiotBd6XxrRaGawYZEoRKTKg9KQJPsAoKAeDMpejM3CKXvixrDP",
  "key2": "29UcLsKiobJoDFkWt3cxLsWyhQMqXcJK33oG1e6gq2oKsUDcv8GgftAEvQ6q82TEuUQ72pfxBugGrAnT8druByU6",
  "key3": "5vAaoq8H1YPvhAJv7E9Er13ZGvWMNfg2a2nzxNs5Z6BLcNBG37rBNYdoRDws97ffaXV7fYuzHyNjrf6MBk6bH2yA",
  "key4": "4chvE3Ekfm5dg5v7J5ceA6DqZm9MBqYVE4w7cPYJB59zUxW5FzzUuDPeKr2wwPBE7nffpK5pqRGS18AA8nsSRMxY",
  "key5": "oUgU9m4QMzZ4La8vffYiPwrF5fRXCDeq9KNMT171ipacNgJw4hUtzQ5KBwTC2oGvJcKtHGouqTyXU4bRMXLodSm",
  "key6": "5GQQpjugRLM7Ka15meC81XMvcj7593snyuSbbVdNuXvKYX86MFbCc5tRsLrLX2ks4TvTGAGwUowuoJkyFRpAcB8Q",
  "key7": "4jNHcPBBRmZv9zsMbExdULeQ9kpZY21Mdf8D2bA1FsAuhLyrxebm4fPG2VhhdYXTFDsnzzQtfg95qNBQu3UzyaVJ",
  "key8": "2m6XmsuAx4ZKBRV8xBBQSe9nos8Kzr8SPRAxTLqEFx1uKb8k5wZ9vXC2bdrRg1W85NE5ZPbzEPsRAzG1ogdgkQsU",
  "key9": "3b79TmZoxSJtDNrEPTwp3AD3SmSCgsR6v3s9PK1nub6ePeaCfaVJ5HSW4DaXNFhqCprB6NFL4cba7rTK2wUfVgVa",
  "key10": "2UkRwavysNh2RER5PVoN9797fb8bWZZtauN9XijqchdFce8mc7DtTT7nJ3X79gNpXfmdiJUYrPgqogDBNeGrwk9J",
  "key11": "3nxM7JubcUuoGjyTtyQijNbbFaVzvWJ8L6J6S2PNCzmyb4CeSm4r3Fnxgksva1VAAHjQzapU7GDmVYFRmAKP4iJk",
  "key12": "LyyyKuhbyf9B54ofpcdkFUS7Qu3T8BG7bLyHiE422jRu5M5uKae5mKiEsrk46bjxkhTuMxxUXUqjB4a2zG6w8Gq",
  "key13": "4Xqdpz2BWo7TkNbERUAMUbqfQjgq3JRB3UynDBAqy4MdRgkp6dWmM7kpUKMS1ZZXhLV5JzPYgKuKqNfvfqvBs18S",
  "key14": "5efJtxvfZhkj68hyY1hdjSv8RspdUiUYgpv9bYp1fBiUcepp7wauDovYLgfYVtM8ykXhnijuh4UjS6hGggCfVbJE",
  "key15": "2ALoxZZiT87owhci5TZP7kJSp6XAsoo8QdUZB7GEKBebPZfKdM52dbyyxmRPXGvyk2NPhHo8woniau5EJD9pkTeB",
  "key16": "53SNk5hcdnMgVE92jJqYDebjrYjC1YDVjVgeeDS8XLxvP2Xb7LZ6pVGVScS3BCv3WEmJ6m8QsFoP43fX7eu5uNTf",
  "key17": "3DnjEZdiZqTFqTgbALmsVg72mAL59dUv7qzGBwDWX1iBMnBRgjcJ8nyus2sWVEvgvVCixea4HmCgPiVdiEUmw73e",
  "key18": "5tqm2dE6i5WCnTHJCuqHEodXa3R5mzjPDaMHjGx5m7hvG5aRJT98TjR1xd7k2ob92Fx9x3gUaRXeBfJzCWTzNv2a",
  "key19": "5c1Ndoqe7SA4ygukN1XQ2omievVieQ9KfWPwqFYoPJGZqakS2J72XGeo2xcC6xTQfeGBGhubb6hfKisFULcD721K",
  "key20": "5PZuihfcn1qEpctv2ufYiRSXSvxeBE4zZGm8jZdLMKgwUEJJ8WrJ9vWeU6GZbmvqtvuhjAp31oJjviA6RkYYQBLX",
  "key21": "4Bn9znpoAv6NRK5Boh3cijBTE9uHfzRHDXXX5WykMXfDtFhD7ziy6D3kTj98S6v7t5M3pbvAXMCGPnaB5bz75zVt",
  "key22": "kPRNFUrpbe2vwwdHZFa27YRYkAFJWvTykBbeMSJvfXmgc5usBF5rE5EeMm5YSnQeonAdgD6PHfTd5iykoUTfof7",
  "key23": "39eu5jY8jpinxdFCowyCNrupy8H78ThKPkuBevFTH9tGu6zv2KEJ1SAa8FZFEA2KNX3UxWhJGGku944nzcgCRWkk",
  "key24": "D698VsxQKx46niWJNX2RDoHUDcri1sDFKp5nDYuSHn3PVP8XZq1fBDyq2Rgrmu7Nf3j2Zyg7yb9PZ2QJgQvtrxY",
  "key25": "mccEvFg6g8NujvigH9RgKwco323Y3fJP43tMyuuMC3EfLEZ7TyE9ffyiuJhE7Zvc1YwW1sBAMk8QWfaJXycJ54o",
  "key26": "2a7Cnbyy8oMCqoBKLuQioELD9jv1z5hCCsDdv8Komta3z7T1SCRAh6zE2ftJ9SKSQnoiWuqSMem2QUNYWN9NcrAX",
  "key27": "4BRawsjex9mFS8ohdi9c4HLAMYKQPRGLZ8xEwFJJEVS38jJuYvjMLmTggaUyqEzf4YMQ9FF4MbYx9Gph7SfnJLf4",
  "key28": "2kyY8STGyTpz6TNPu9oN1hUmbcZAFtSGUaftSZqNm2QY3h38L5XrMLpHk3oog24Lf1KBDtpz9uSLiQsCvKY3GbpM",
  "key29": "2TfJ2rx9z7DhVuKyEh4LW9iRzjcYyR9VCPybhHBdzRmp15S27WU8TBPQp1KgpLb4Zvn5WLp2HXLkKk4DScgFP16R",
  "key30": "2avBRnKxFDuw5JKb5MTaunmAgvGYHW6US4TxKmhAS4vbT2hAgMN6U8Dppa97YwzS6dHpJWFvatuCYsAxrWhFLvVE",
  "key31": "5xDiZ8SVnZcJvtfNLz2ccf3ffqVR4PND2t62PAJbC3SxWnbBFkwwSYSboxFoVDzWkFEN1N5FBGDMJaJk7WajzLm6"
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
