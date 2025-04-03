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
    "5JzJXDW4iB94kYsSrZCqq855PwWbL7GGN1QuevZdDZ5WzahcbSGkQ3TgwmZeAW3N7JbyDVTfN14HaKy6KLbGmgXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qdSYvcMzPLYnE7zn5kxMjXcUuLbB7Rc9Akunm8RXS3jiKg7NJaDmp8ovmGAQojWegG78tTvKbjDNWjFwz4nHzqq",
  "key1": "4n8ybRZ2SX4wyiuQFsa9x2MwgGc8ZadK7TpGjisZXymusRKjrUgGQSUgZbUqyYW4SbrRHpssZhwr7a1svjbnrLt8",
  "key2": "4L91v5pFxnz5mMd11PuV3HnKUtaR5Td3vKXJJZ4mpAcvpf5rhTaZVvh4MPK97UuEMbKjzhUTdoeq4ToLayUqJnw8",
  "key3": "kSRg5Mhnc1s5kE7jPCJEGHndWSgoQpGcNp9kwaMYHSjYbJUnddUgQ3UcS4JBhysFDgwCbR4Hasrs2c1TMZYBFSS",
  "key4": "42Zpch2uyLqpyxMQjiHrqKa44DsYVgL7U7PrRTSuDQdLduJFyAsCXgeicJ5xiBkqa2LiX9eBunHyWFc2YPGsC8r4",
  "key5": "4rEs28Ybzh1oZF1wVR5uBECmMajA52gQt7upygLCPeY17Rhd1uGRGBMF92VGKd6iLeANHX8vGq9NxvyGW3cMUbMo",
  "key6": "3kK1DPceAqaVGxdw1SLFQs9o43gviFfozxuifPuxqxspS9RiHiyWJnGMQeYFrHsncDdPJHaTT6vWdJWvpe2T7t8C",
  "key7": "2YUZPAkA6BX5CT3VWNW6WbtDvkE1F18MSh1uYcgA6BREjwawUpyQXPFRHsxrQb1zQcNQCKK4sVBoKGUFfs66nA2v",
  "key8": "2SHF6YK5eXN7zFgEkNMY6ZSZcgbS2YLyhPHi9WNTT4bEcCRX76nB6DLxf9GuRuaAcRS9nH6FJVrH14VwzbRVJWoJ",
  "key9": "4hS2N7RNgrk1eubwbyCDyCES1PqCqzEyBALjZvFjK1gskiHznL3biydfyjB6tDoezutFYKjnogJVVAFqjR7YtCEu",
  "key10": "CeA3qe6k7xZesX3aX8nD977oTDakcTmNAPdRGvJFzEr6t6EwGK61uCtV2a41GcTcuieVHjyA22KBDr3fXrNxFEm",
  "key11": "5RRCUxmjrs3veiBJTeVmWBKRmbWJNqQY3vnrLwn1zGz3WdtdCBNZauqW9nMQFqXJULYTiLukqJA9CMxw3yoTQhNG",
  "key12": "2uiMyp9TrhJkBzj6mLn3QHCF9dAvyEMeECqd4HD9Ss6jwCdk5qP2ViDMpEFfxxGntQpHhy1ciPqC3ujFzAs1UpP7",
  "key13": "mjN6BMknBkWFBrVkvxRgAw7yWERRSaYxBxCthMDzQ45nc4gZxCn6Vum8vmarzWZAaQTTbs5qbdef1xgMyyijJyn",
  "key14": "62gQfu771JAqH77J5ysuLQX3RuQgK33RcvF435bP5t6LfELHSG5LhKpGnvrsegZMCL3xV7oY5cznJgBeryvBNqzp",
  "key15": "2j1HzqsQAr6Ceh57aaNUHAcDBCvWgXosFUJdvCcr7AUr7UPKbycevX5TVcYbV4nFuegQewBq8RYrnrTym6iidtru",
  "key16": "4ZXmx6WDxbeqq16FGztPPMHJaEkuLnFEFhvVfNKTJ8KxzZBpqinoAYW3WLUDec1DhmRt6zpAwcU2QeNbS4EStBaR",
  "key17": "5n8nfVWFBvjs7vj1gzSmpvXSHjkPmkL8ZVhQT2DxyhrG8s3co7uPp2FGH1eeULzLSbw4DLtGR8AqEsAe5sUKyeNe",
  "key18": "yXPrMihSSzYSNR77Zov75aC6RrgmbexSBF8ZVcfbb3bonYVwdCqaMsjS44XKyw2zCFMJp4NHA47S41VhYWzts6r",
  "key19": "2hoteNmN4q8ykVxRVwZjiBV5YZfS4L2caYV1T4PdNqh4ktMp4HzXUrLdRZGAmHSrwtSebcs2Rs3vck5qrip9kYba",
  "key20": "5AbTQzGvcVD7KWYakGdnZLJ7x6WZUvAwDkiwojCfuqQ5TV1SwWurE7a9FvoZ1sNyCpx9QAB2h75LcRk54titkJBT",
  "key21": "41Ja7tcFccUb2Jz4QoqebMm3vpEbN58Azg3qui3x9JTL75F2SH1dTjzATLqEBDKn3MvzL3orK1zLcYsWPxmPFNAk",
  "key22": "3XhXa5zQPys5u3tJe8GVKN8k4TEmkxkHmEdNLaZBy2ZQa2U3V1MhpfVy5khXgBFEY6EM18xxebreJsBdW7bWukKJ",
  "key23": "WAfJsLtXCTQU6K32Srwk2khx2kuDdhsTLufx5VJSvdWKjirCTUdckzArPgSEHmd5uewW6Fg8E6b3uXa9Saa4tvq",
  "key24": "2vxNGVJ3fGWVBZvZRzSvPzYUhTVwY9FTSfeL1Ptw3Ah7jn7v4Cqgznh7zfPBEVcFFRCenhm2NHbYH9M1Pw6hyBVF",
  "key25": "3cjBZMLL1PdLBByJMGCoB9DJSC1Qzhx9S19mCu7RbynxddnUHU6k7QHonwNvYPR9JyoaNWXr2ixiLw8SFmV7u1sM",
  "key26": "c6CA4h8txzFaoKHF9R2Rx8zSpvPwFF4YPxiqk3iV6Rerg5jms7ePf9uBWAaCnA77MHwNZNXAaG2aYEjdvtmFBsg",
  "key27": "4NcDtFUmR3j5NTP9rMw3QcnubrQRf59xuLzDe4YKrJg8CzdQn3XUWRRcD25LyZGnmufhW6tbsU7xvdAh9zjwa4Sn",
  "key28": "3sYEds2KcybyFbRTsA5quYgeSMq5Qf68vFScSQZHEGYfwhC752nPEfTH1KKYZmHoei9pbT3bKAWpqArqHyqYUsg1",
  "key29": "2BQA75UdJpSQEEQDQPfZTptR1o5pqY8Uzq3Bu59wNYk7pab1ZUqNqcgkzM1wdWrEcRPk7uaJ3KHiJN34WLdjmZ4c",
  "key30": "5Qt82nZfBaSGoJepXe8gU6rcZwVKxxK5tUGffvgLvkYdhsQWfGtgXdsiS3hgmiYjrCvrjzADPUTJcc81qH892dNM",
  "key31": "4ZMDEbsHRSVYgCUQJVrVeqLdbvstXpL1oaJaCpLpA1oSw6QYyaUmAPAaoDuuHnksDUxvqKGXqANAnxggCytQuGXX",
  "key32": "4V1NiRjDiYMMFSJiwbRfHWKCXHTRTE4LFGoRZqWhDRau6rm6JL8TkX2sgN7WLSVTxeKYSPYZTz15PQ8oXsek8BCq",
  "key33": "3QXmuAtU4mDviZEcuQnLCiWcKpvUgPR48Y8zGcBE9zcjNJcSWdxV4g692WQzqn6qBy9dUhLr3dsrHDvD3L9bMqbX",
  "key34": "4UrrBDXyLu32Rg14zLWesDC95jNyeot33jCNzG2Ef2Vn47SMBn3Rh79UEKsLvLih3GCLFVCtCuTzTCQSrRrJDeW5",
  "key35": "FX1Wv2r3ERNYkNhUZ6nmEA6E4Zj5XZVa4QoePTozmsP9rKTnmjgP5zxDkDwDQj1tT8naf94MnLwrj5NnqucK52Y",
  "key36": "wzLGvgwQyLbVJv9T5y4tjxBi7v9HMGqr9ahzjktPjG6TEfTEm8TxEmKxeVpdfKdjkUMQqmrhssaoNRwNH2H4XN9",
  "key37": "3hvUHvqoruL6jKs9KkSEHkCbx938nb2Fuoyurjc2q8dPnVJztwQikRD8pYPATGk12S2jTfaAUhZzX4bBPts3UUc",
  "key38": "5wqzchLczyygJyJH3BibnWLqrhHJ1Nr3BYMjWobgdXxWVGKUhuf7NVB2jZ8mhnZ7bci9kHLZ52rm3Jf5iKDTzTwj",
  "key39": "a677z49YpouA3j4n74M3f4XwGYwkpgzUdTkXPvTcHzsCzSYnqpAGY1WNPyJyKNmrA7c2vu8YsrGae7b8syDzpJL",
  "key40": "3EFTbX1M5237R2DH15Kjj79xq8uKbktGfCaW41Cvhnb1HG68WeKPjjpEJ1aaMqCPhcQYFDxf8Qz4sNs9u4fsA9J9",
  "key41": "57o6gZttHGeDf4j1r865otmotQ9q8ELFbKmBHDEM149jsvVCRsQyrV77f5xE3fGvomB38FvTicTRtoJRFsH7XSTN"
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
