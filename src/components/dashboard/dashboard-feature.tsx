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
    "4rdQT4TnfuHZ6nke9hisnpXHC3WxjYcpGnt1eQGAsD39Ef1cNqHkT8EhvNudp5aCJ5zaANXj6DSQDJs9EAQW4znZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48vrSBMg8EzHkX8oZ435gCRkKYRytABuBdkZX7Pec1QptCGg5Xsqbm4bBRjEuR71eW9mcmGMJnNS3G4K6KBLFuVR",
  "key1": "5ZNHuektpDNLMku1CuuePdukNDzPENDLvnaFqcQ2bxqVXKdRhpHkSDvBAJ1vi9XxCGbbAhcsvg2VeSTLGbfpE79K",
  "key2": "4QRPP9dQeNhMEowAosMYHKMAUyzJ5BprgBByH46vAcKkdYXiTmfcNqPy7XY9aPffUEnLHKndeHySZvivL4KwNHMa",
  "key3": "i5vcVjAN4R2yoxCBEFeHz863SzGjzNFM6Jxjs9xGgvnVywqT8MrfzVAFZsLpxLZcCZS5b9iR77vSmiqLECSMnAq",
  "key4": "2UiSzjX7jnNcm5Z8zAKoCp5Dmv8mR8dtLTYbZrdre4FdoXkNUJXhFYq1qdmefyen16e18Y7qbd6NtrnDEDo9TvyS",
  "key5": "4gYSKbrb3te4PDZqLFR9eFFCuqxknSEZhmn3bMRwiBDVot7DDDeR5itwNUk5zMLLZDySRaSXhKrYePZUttYyg1xe",
  "key6": "5HUVhNFHHWgkK7ShDVaVTJqrBNP9DSGPFRSt3cWzbmyBTBoyCVkyUCjqVTZL1qWq592JLPhqjLnbezSCfN2p2UWT",
  "key7": "2gctPa6XiKynhr3hbr9o78MaqMKyNVVEBhaGUS2AvE1p7KE3DnyGiZGgpd4uh6V97xnkYDjiEmwwPBxS6k5DanJN",
  "key8": "4JGVtHxtBTVs9j6KnRXgtoRvBEZL6BbHzwXLareBomJP1JnCSNopktx9nVTqSwdx1Ywsf1egFPE5sj6TYSjZMtZY",
  "key9": "DkMrJ5z764k9A2t6TfGr3nSTb7XiyLvoGRoP7jLi41qynQ3NbmGMdSuDMkFPTKBfEjm1s7Ssck5r6PgpRdv8PFh",
  "key10": "3NvxLKnTEJYBkeAQr8ZH1XqGpV2n2SpcH4MpCCNG7QShvtFL4xGcFNJYMqwpfh8HmLptgB1hUBpcHh5erQiN5v97",
  "key11": "pY1nfDMPsLaobqCxCNostNF1MnnzuhwJZHAmeQwbyXkucEFf3xwesPeYqPYcFmzRNKMkCG242Azvi35JXdzDMno",
  "key12": "ohMGBiFxjoQokK14BkN11kBUTrySiqYNtchjKiWk3a2YuzvekRsE44JCqjC8JMv138uyYstGCJQf4U5huTS2hrX",
  "key13": "2gpjekWYmuN6yVMcQM8t33P8hQ8BAz1ZAGvdVXubBNTKHjeBdCo4axfxuRJaSV6aJbmWgvZwuzEmywW8JEdtyqPi",
  "key14": "5dFSq1j1WweonwpSfNgsr7VUfB5UkkKo1RdCmBDuMqo8D7PFgy5CgwRYcqBUgcPmWYVAjffgRWiyzAwXcsK9wi7V",
  "key15": "4zMcvFiD6K5uVjYD3cpVR4F2HQxWMYSpNU9xBoJfdYD9spdwUSRxwi3YurdknX6mNswCpismFbkLQ5UvpWsUZa6D",
  "key16": "bA2wj8shGiEdLHJjTHaskazEfRHpmNNmq8Pij9tvgHwjyxSupGF2JjPT4JrPvYvGmEQkRV2D69kf7e6FVf2g5xX",
  "key17": "aiNLoYhcZzjiZRJQFmaCceNCnbcWnDEzEBVMRyTbayyyZTtCG1MoLkqGH8MnxPSDaYa63a6Mb6aZD2TZymbvzcJ",
  "key18": "5NnSDpsc9yqJ7v9hfheW9QBbNBBJByF24VVF3YLQuwpfcFUUo1PKvLU8AiyFXurTXdu825NwBGWDoDLXQuSQcur3",
  "key19": "269yS238nk5RdxpEBvK8PgSH23kPhgccGzd2fQLre9j3AAuyarQ7nMpU71hgdF4kimxN6oPpgCqW5ucmqDddmNTK",
  "key20": "4JFCn1PcR78NQZbF4qEKDExtTBFfgv81QHc8KFaJLzwmheYkejM87ozEVHvsnzFevyyaGBXYDhQ9z6tW812ZxmYB",
  "key21": "31Utq3WmB3r43ZfSEiABBKJkpKzmQQeoV4XpWmYPYrWpokAsfbwj7LtUk93RiqEzijfKbB9AmrD1TsQT7RkULBJy",
  "key22": "nT4VLueZJkoeATVcJAG3PKm9m8LFMU4hCrJSn4BL7nj5eXcQbq1W2S9ggHKBgtzKdk1gCGwv2KbRpyC36oCuD1q",
  "key23": "2YdAAz8F7n2HD2EDuJYEZayCoLQ9Jtnd7fof8MJf49J5ix4utZpCqzxF3u5S3XBFy6h1PBzij3Fb2qBCReXmGiS7",
  "key24": "2ZC1MTRCbbeCVt1n8fp4quvTKpJioFKkL6SuvsjDPWXn4HFQKGhRzaocmYRUPzT3m6jq1Dc5K69mEpDm3pUX8KSu",
  "key25": "5S3HmZJZDrV1edsaZvupDoLaacdUKTLk1Ysb1Z6kPnwcaHr6Gdh3D7ZriovEQpQ6bPKTMd6rfwpDE2uaLrMtMWVo"
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
