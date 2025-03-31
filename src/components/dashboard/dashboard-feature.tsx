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
    "6PXLQrHzXzGtaCC6gqjUYdYdMf5MwywkeNw2d92y9xhUNuqryDwyAuZwGVQjasqagSyfznVff28aRHS44ej3YES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S4CpqeH3w6mfd6TSiPC7ehzU23tJ3q5BxDyM2ed57VmNMt7GiczyHqWMkjwXVEp51yvGceUmVvDg2mbqN3qGEFS",
  "key1": "2MhCSPpEoD9HBaitgpTbHbgAaSpNnWR6FPfhpgfZURnBgKK6GtGDs7xtdL9zUsFP7yJSRNSNSUC7YE1NqbMMTLda",
  "key2": "QRCL7wj1ETmMNmMhbG1SUdBpE43z2ptTC4GLUZWXqHTxKnhmb2DP4sPkaujgRBCvtmefh28nPuWToZ1wR7qRwMx",
  "key3": "47YgYh1SXYwUnLYvGi6bhNajDTQMZ3ojcWNtAS98EddKSzvgcoVkZ3muTNgH762M7BkSWGBaWMpSYEg7SHx89dWK",
  "key4": "3YwKqn4pradT44iu1L2aSNZY6MxYUgEzC3XkoDxVUEBTC66cHY8zkAKDnZqf5udAMLz1Vaff7dE45q92cXeTrsAd",
  "key5": "5VX5m1kfbQxTyUtq6cCVMfVzQ7FPSSWJ9fXMBcd2eQ61BmhkB4dSXRaqm6yEUw3nSFwVJgfj9ezjRiHTWar4KP8w",
  "key6": "4RZCZwuBGw8DzAZxaDvE2qV7RYKudzc71ukoa1nbkiBLmcGLFq7qr9FvmDM4KrWHzheetHs26Qnf9ytK18qM7PgB",
  "key7": "4n5LLhC7iYzJxyEuFyUK1FR3X3cdsA6LbGD8du8KZ3EKknG4B3gFeuJfKUA4CQLYmubJYAN7GhGC6zjvZXUKcMEz",
  "key8": "49oxKQSFHxXxge1wqWh95FEYrh3VFD66tfqPW7ZkBaiS6iRuRvNPWHvnpYHTRqFyPbSkDW44Tt4KaNjKsosx9CHH",
  "key9": "wksfgJshT1vMuLWXxCSjs6khnEtiXQLFZxfWnBcaCzD9gQQ2w8F9Nqxj5m5hdJbz86iXrvSeQTo9YZvP6hLykuo",
  "key10": "2MQeJngaZgsfeNKUCGCYbiFA4WgtAeufDZGfDdmzpb2TpFNNYp5TK6vyxWpBi7KvkPtwcEXTQhi9nzbtxeGUCAEW",
  "key11": "5yyWCT7RxyaMUFZGUkgMU3zKsxBiUffpovDCqkpMQVMJ1EC8Cczk4Wf8iiGPgrQyj924ZHkhWJ3eQFFCZNwFx9eV",
  "key12": "4LGU1nkhL5ArBUB9XcafwQk8Z2V1HiQ1sYQuvjXkJwjgC7x32b4BMgaYn2o35Zhy67CjAbnUZPCsM6fDjRrbhMxw",
  "key13": "5L4SGW5akgbhzsU3go4v1t8CCtmXG3pkBhLNkNfJsrx9NyXn4Tmk5qWJaEnNd9hwTD8AZNARJqQgXqPZKXgWG7hM",
  "key14": "3F7i2iNxXHLV7VqqHMttjJwt4ExopFfhVDQr9bvzs6Wf3LyHn8zaRY8PVXpzVgYseT2kXPy89dtcQrDHKB4Xzomk",
  "key15": "cbfaCsEBQgfvcBFUUiM1pa7VmXUZBQXQj1aFDC4PxXLPvYd6KVVNSQUXKYGAZnVkwuBKqtWzPu6gy4eCMzDsJGj",
  "key16": "3HnTDXoVeePbp5RzycYsE6TmH1DVW5ZcP4WjPF2VenbBZQA56k9gxGVvw417y6ajPRkyPvKmoYCfGAamixR5yuEK",
  "key17": "3JbMw9pY3c14TktWXh4SFyztZMmhCfQhttG1vkGrsz383xY99JpYoM2joGUGpphh9kurtovTnAhwpEHEeeUNYV8P",
  "key18": "5wLtJ934gxvkC5N8ddprwfxux8nBd5FtkCGzJL8aJ5jPtvLfC1Cih1eiwHro7xymZsAxbW7AqBEfx6MbnJnBPBJE",
  "key19": "3Uivq2r9tY3o8uogBvXvV5KQeiyEh21iLya3qWeAGkrkRFDNW1bSaEa7NZf1FRAF5fdNLy9Mkn6GZDGmJrcdfyHm",
  "key20": "5UFumJusV3M1FvGpy1H36zJ9vHiY6VmkYRipbQqTDgHoG75xQYLzFhMqMVDtSpW99M2cgC4H5sTvt7X1CowrvYDk",
  "key21": "33hqjaNhepj5Re6EbCwRzZZ6HYogD2sTRrqPJZYMxcXEUT1XAKw5Wh2ywTw5L9WV8U7tV4YjCAHLGeMCsXEcjKP5",
  "key22": "366oRUxzsX1Fjz1XhtUDgpPoF2n5FWRmRNiJASkXnMKPorhAdo4LqkX4W2dfCfBeJzxpKK8Z15koseawtLKvDD73",
  "key23": "Xano7Zy4ANhzM1HHJbwq9ypt7jrdq5v1jMu54mKXFSg5r19CiXmcHGbZrMu6ecRp1zvfcVZTgGmqsSvriv5KQSu",
  "key24": "52dZrzUR7egqbGeg9c2N9fyUdwKEdPQepotUQyz9D1R2HebNGrZJJEia3Robsn8F6RFc6gBvfACcrKZpnkFwM3ek",
  "key25": "63QhRqR8jwwn5Z9Km7Vr9UmXfbZSzQ3epNY6Ry4NLWwiNGq9u6snNvW76guiS5cS1bNtdLaBZC6wRDxbv1HhHkLy",
  "key26": "2WKJxF15KhE7TQaCS2XbtSBDTj1yPeBpZFcVtjniqdmhVERzSQnpX6UMWfEqkwBRx4etPdXhquKLiubYkoTV5Lzv",
  "key27": "4FBQ6ejw7r7H1U3GfFhPoM3Zjs8q3QtfV7vEp2raDn3eCjsrfEfPiA8g6DXKa8d8ZRFoRKKqJ9FGr54nHnK3z9ce",
  "key28": "C17cT2ov5st1SUimHv7vi64KJ9bbU2U5qjEyqFJpFi66KTp1BQgEg169on8xWkW3x2r11FkBkxmGFFyTKp7mRS5",
  "key29": "3PbR85AyXAz46sj3KLT2xJQJbHCjEwf6bBGDEpabiB36JHz6kPmpN2fShUfNp9pdoAqDXzjrvrjKHpms433cf8Bi",
  "key30": "5gBThHYKdemN15dDk2hEA5PENH3ob7hMTGYT3NUFV6TwZG5fk7KvC6FfoJx2jfYiSM8y2azV3aQ8GXyvUpgwLvA5",
  "key31": "z43HmvL1zdu8QjqKzY53uSr97LRUG32dRY8wVgsxeqgHgT5MJ59Gtmvu6Jd9SbwT44HxyRCM84rZGsjMmTACgWc",
  "key32": "4ZDf9sCdm29chEX3RsJztU1FYBFQFPEdaxLsXyWXUFCAujSaYiXATHrbZFPBjYgDfL2CN9oULQzqinPk1WXYbK5F",
  "key33": "4w1TzSdj9NvyZgSxbnoAoTzaeBiocdLKXbvuAFujqMdRiqKXkRU3vsPUuafRiwJXpPk2hiKzLpwirzGLSL47FQpj",
  "key34": "g2DVyUyf98yTi8HNkyyDDRsCPTfFzbAweGYKa8be9vE5ua69ArmrybcpcoRjzAvHs7sKU7yvsYVahccn23Gwhxj",
  "key35": "3oANMGAYiAa8qebJ5kzETBNF7XihyhdhwAtn4Fijv2cYVHtAzkPf64v352dY25stvAkjp5ykUMeac5uYwA8gA4R8",
  "key36": "2vDkSVEKApxQqy8NRAve2VSHqTrMzvMku1NQf1Che7jFhfJhVEP8yPXFoGanveYUiMt2UmyeFSHseEtygZ7PXicq",
  "key37": "3LebvKhnHLhuYmooBVgr9KjWKDmKcf9RgYKqckQ5TiKYoSxxa8h6e2NbxwucsEyCF8qVtgiFALSocW3KZjVTnzA7",
  "key38": "58jtuRsK7wU82jjTjRecS1obx4gQqdohwHj7e9rt8QoWPyP4egxYhQMRVCoQS8kTfe48x1ULZnTykYRp9eTisfEQ",
  "key39": "3VdFwMnmMWDsbKWYngbUGwntvJDsmhB23uBWm5akS6sfk2REkMJznXsPhXCfa48M58pgNg3VAh15TUJusNVaSdUJ",
  "key40": "3ozm3Fzenb6h2FDn9rUzR6MYCpLF5z52X3isvqwiVeaYFLbQC2TZWdZTvXc1SpdYQ8Yhmn5c1gcddk27dFCSg97m"
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
