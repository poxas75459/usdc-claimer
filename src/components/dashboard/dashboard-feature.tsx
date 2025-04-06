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
    "YJXP7BeAzDAeCMoQjfAYYyGsHvER6UjQr8w9TMyBB2EUKrb5dMvUmEzMLe9PoguUNkx34BnTDLSBkWtNFcQxsYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gQkRpqzukCpBAcQaVxS3zr7NvEJNze8FdgBK6sJeFaGT8G4TfZ4FU1EWD6UKa6qEwDSrbrdawERHFFhCzzwhAuZ",
  "key1": "3zXBRj6ptUDHGAEgTxEpQTDaFvUKqG7T9PijxUsvnN51Y7wPbBzU7GB2hurLFzgBW4F7duzckecQMFkA7PkgD7y1",
  "key2": "YBp5aDEa9knWhauBv8gJjvjWrpeA1QLch1PBd42Kvde3gzbe2tqAeeeUmXu1mvUCseyY1LJC6ij3mPitMcSQRyX",
  "key3": "4XZLJycfLQt2qWFMDTEqcJiLqGAGskoR93qKt2PjtLP3Y3Y5bGBXn9q5KrLJXUizSHZFCPfZEEYXGZ4ZNbo8BfbK",
  "key4": "2BGSbHqigtbfc9HJJ1nXe2hH5DCC3Pq6Ln5pK3C2n5F86SwMGvh9RACqi9bv4k31jAi7S4H2Uxy6qADHEW7bbQow",
  "key5": "5EXdaH7pg3etgYgVJMfYjY5YPoDh7ssF64X7YZQqtbU1Px9KU9uQW9pJZYrVEmJ5UMf95cN8RK9gpLD8wF2tTuRD",
  "key6": "3DrrMSEFdw744LbjdXtyUjZXuj7oUg8M8LS1FF89Z6Ueew7Qykh2FusJ1tVPafcyJN78CD9KwBa8bHWxhrQLE5N6",
  "key7": "24v2ibRGmqN52Qra2LvGK3c4wiDhNfRRkYTcAZdpykyiwUomXk6ghDr4rkFnrSZN5W56QCQtTZw5oSJiXkWaq3R2",
  "key8": "52Yz7xwqCP6RSHmdHzEpCJof1kEK5HiSx75j65KdwKf5em9HpRNShFuvAKZGt4X57CxFzcn7GBXtyjmGEWBJjeNd",
  "key9": "3jfnDJKdsw3dH5CK7gd1AqWK2xEtnQAsP8hGrCkrPvv79ei8xYaoV4wp2hFb7tAbvxpdWGaFLN4L25YrT6jhLfNJ",
  "key10": "3X9eG4xKeANVUEtCtwoxX6j2MdswfNY1b7Fv2uuiocQXPAoffgoobRUhbCUvtqnkzkxCEnfANjwsubxFtg9qN3iM",
  "key11": "m4mqwnPvBJqLMXFVo7f44G5c2TvhCBnLQ7HXPRv69Rdbj9tfzrrT1Vo117Z2nWEFTEMUFXYHSgdmDqfHwoXEDP2",
  "key12": "5VS3BUH4JTApGJCTFYgj1wUN11PyoV4nDpv2rFXcLdwo37iMm6KLwUyuUGTFWo9Khwv3Ak2xEUQ25mXH7Hz6wAAJ",
  "key13": "3PHY6x2CFZPDzcD5qSffb44V6hMqfndwaPAGxAwTUYxpxsByq1ubtMkPj9zuBm7Uj1r2fG9fCANSDkwNZweepaK",
  "key14": "613E7Gaxt4wj2zTN6TBjF2Q6TFCJPntgM2tVzBgddBFHnMmCXbtyXQ6XovbLLE9TMgweUsvx69nEjXg5auedJ2hr",
  "key15": "6kNLNubojYh2hrXpwDbU6pCVrunW5QcKWB1DFs7Kw46hAz5gqahowJVFP2h5DVMvtmcwg75v1Ro3GU7GgrHboir",
  "key16": "5mhVmTeDGhENupjfwoh9Z1zo5tToT8XjFWdMwF9t7L7SkpUZQZM13cZRzpcV2g3ikx664L6653i98boMhYEGdPwj",
  "key17": "3SUfW2tvmyB8qNWPnG43xwUwDLhiocBMt74Xj5ButY1xkPgdmnZmbt5zg7Z5FwXo2XX9QskfwBLckqLvL117H8b",
  "key18": "5fJym9Cia7aqsrYmpjsjLB6dcQirP4WRHVX24ZSPXiguPx3b6Kg2ihnWUL91icrNvfKx3dsUu2V8LNMLJ7qx1dJ6",
  "key19": "4Y2zHWZVY7GQVg1DP1KQo7Xtuz3LwXtEgqkBDEr78bCFMy1X9yaGcjdsVmJCD72h863TaxdjWNKaAaj2eXRQetco",
  "key20": "JRVv5mTesUqyveeCGwJNGU3GKEuwby5L4jfuZ9A5NBQeooh1Gb1MJvNapPJkrnuohe3X9hfVG42Q3rGEonAQSyg",
  "key21": "2qEC1DJNNNgJZERp6da6Q6VkP3ADGBgy8CcssTR7YjvRurDU1Rjhhr8MszZ2x6tnVPm875bFKsFH2HKQa7WoFm9Z",
  "key22": "4HDLR2wMfCmSc7rzpX8AB1mD2fWfB6yACML5KH27ZV45TZ39AgA5TuozFkQzkwWUZJzcwUfitgQkDqDw6r2YN59Z",
  "key23": "3j1VzJSaMm3myxPhoNSJkfmTqcX7A2McLSEdKLVu1rkkp1yiiszxCBMieaMe5QrEDWk3fV8ZXWJbLZRrLtqZ3pj1",
  "key24": "5KEcKKD9NobWv7zdmjB61LqJ6tfi5D3i7vpyAVzqHeriYty7vEHbnExdTR8Yr2h2P9Lcb2fR4wswNBhDUirz9ggW",
  "key25": "9bgLSHq9n2jLJjj2ao4rqPu2UNXeQDx7LybrVFejqS6duWPtvs1j5QqAq6kYuu3TzkcNZ2Pi3m83Vt8U5fyhKJn",
  "key26": "LuXiJFo76ewikR3wAMKBbdKtVX9BM8RXPmxRfrKvFsx1ewTyFe77fgAbmtTB5wx8wWoprXSAdefTGxd14qmh8Wa",
  "key27": "4VHM2c5Qv6U53HwcVSqTgYhcyTSvyxf5yGQkTxvKJSEdpgZZUsjZvNyTZM2LzhzKZ5RKhmoczWrCcQtgwhnwMcXb",
  "key28": "Yof6sUai6ABy3xT1JT7HjjBgfRzaQJhPH7qtrSv1SqAFWrZUfcEAVjVRPEcF64yg2RhVgbJHbyoZjwNPbRTHHxw",
  "key29": "BWC763ZADiwdjJ9U3c9mqcuXvuC5Luz9y5EHtFxWViRq6bFCzMqxF6AFpsHBwRe2hfRT7pP34xkyYajCnrjSv8o",
  "key30": "2bMCccsteHKEeQdmNJgJapNkc6SPAXPapyMVZaDqqBXsLfo7ZgVmeBT7aNPpciDaxvcVPzno6XL4j971UrerFBzQ",
  "key31": "3f3hyXbW3BSc7waak6NF7ooapCp641qm1QX4XKHYXqhHzAAJLNXuzeRwQgF1xk1YQEDYVbXZMyhLxSbAYprqUCGj",
  "key32": "PGw5o9DQJdghGDH6MKdMAyZnGXXondPTgL6J1sTM1QRRWta7GN6ZVNyVsJwVQz1Qme7993b3kmJgH9p9wiGD2ov",
  "key33": "3zj628gEWfykUToYZ5eGaYLNbLkG4zYUSWuMQsrtRRNu1U5ggShaC9c5DbRFTGqnxusrdWnPh7tCaeJkWE6zsQW3",
  "key34": "2R2Ub1u9UbHQxnpRQNa2DvXNmrN7kXSxLR1ifbrA2UWoeer6FJnX9Yk2Nnsm5zRokwWKi4YDNoa1z3Y2vCqR8Wtk",
  "key35": "5eNphkYRKe8ivveTRFyu3DbJzem4xG8bJK9MxU6akec7pqtcYfeuVjzF32yHMQWz4XotYeMvC4u5BEdXR7yVWyBe",
  "key36": "CycUwKj5rKStfprg24TyRcjJetsn8aKxowZt8ccr16jsSyGqBFk46P5vm3K9G1ro2qEeZXEVmeU4uoLs93TTUBp",
  "key37": "57rVKpcRRS93x9GEeGc73yZsYbMuhRgEfZV1dEhyJ1qCmddZLp4ptYhfm9fuMaYn5haKYf43gPZ9xKykcRpAZ8GU"
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
