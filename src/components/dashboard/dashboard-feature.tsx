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
    "2odGqBLzp2cC13KYHV2YvBqwdpEmUuJ2cHCexDfiUKL4d2HuykshJ4ojK13BJcAktSSqa6UdzSqW7FdcvLs2q96c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n3f4yNP6VGdvWamUjS9xMjrxb6eQbGHKpFTkQTHWuXz3xUBspBheKff8zeiFkUbqisLq9HmbhuS5zAbKmceDM9W",
  "key1": "6UaiVgkAbJnLi8DuX7VktyiohAUVyqgmoUsmsAsWud52e8hjTPwrBA1PZBNcRxKAfGr24M9qQXQNEts9mwK3SHV",
  "key2": "j7ESfgmYqiMuHUsYxWGoKMZZCEMGMDgueqBbXQySGoYmG2dfX7xRKW2BnanFejvaa1Jf9tzzZatXi4SBjrJS1DB",
  "key3": "56EvXDqPAvHzEJUGrXWwP4QYLiBKSJLthrgRipayzyZ47bpZTmMa5w765vqMuibyTdzbKSgJAMkttxFEFR6jFHsK",
  "key4": "2d21ukS8J56VrRH3rSBiHCKAet3K5TCCy9pBpYcv4WtSvZjffdMyers473G1SWVt2SYnLYUQWfGF1CjjyMkGDnPx",
  "key5": "2Q2sWuZ6bvCcQ5sdaXU83XdEQ4GrMiHpyVDUkwTi8VeoV1HEGQL8kccPm3LCVWTrorjMdK5Avu9pwySJNMumgaNN",
  "key6": "3QDVtWW6DR2CqseLTvx54dab6Ld1YGpqTExE9akcyFR83kS9t93aGDFDFkFm5TcNYpVXKvSfydx1cfPmbQNjeeSt",
  "key7": "5zhu395fy6jEaoqpqiTdGm2GNRZKwagQSpnFWqvxSznrURWQSZoXiudkRcavGzo41UytE1XmckoFhR5nhBcaB5bR",
  "key8": "4Xso5uiteGhW9iRjB3EQATwm18etDrCANc7UT7F4RMahhYjS5dp6Ce5Rkoo6Be8vD3Wr9vMNqSTwFZfEVScT2ivN",
  "key9": "5AYbLcHENofzeKRfXWJMkfktLBzkoWWcxhMhiCSLck2DqVYwoRxbFPU84ByNo3UWJkeM3XmLuqhKGX49cqMEs785",
  "key10": "3cEq6k4PXRi5cievxzkAKMrDaZTZD2A8ig1az68JXP7f1CXUMu9RAwWLHKeBw9cPQNDzvfzdNF88gYNrK1ZrGHGQ",
  "key11": "2VX2ZQi3tcPgMtcFgoa2QFsA7FnimYRYDDtFMsWQXcgvUQ6FMjpbVHfHoxsUAS5Ew3omRnsaMByNbdkWvyXr44BN",
  "key12": "2HiyNJ4yvVNLRf7tmBwKUdN14CCWCRqP8z95LSZxCHo74GBNt2NarZcDW7xBc6CYJUggNZXvKZ29rMPXRdgDEAV",
  "key13": "2MoxpikDHA99KmWMUEm9PNq7rf5HgAtGDKV1RrDyRHRUpYs7v3KnChAfhT8Xv7uHZS6PPCsEySThWpY2nsUrFDNW",
  "key14": "2qHeydhzJwNTGf6qKo7agv7DfN8jpAvnLrLt34XxoeBoriaDWKoz4HvJL3ZzriM1e3xY3BkfT9i95bR7TXkhJx8Y",
  "key15": "2Dk8U7tiTrzMLJM7GVQBaHdCqVqLwZ647XKQwpNWBFv9V3yB6cKqnLYntWNWyB2tmxNLGNBxHnBf3R1nfWjr6Ekd",
  "key16": "2z6hh9Ev5wiKqki94ASg1MTQS1Jyo4tGC9BiZmPTFrQsKdNDLT1dcC3oSWJWQWPrA3VFguw93hTnTayf4jYjPXTi",
  "key17": "5VbMjpAVYV4PLKEF5NuydqpV5LSAeXovTCu6wQ4am9ggHJe7TafmaivpRayXchBmuJtZeibnpE1wXVxk6TdkHdv5",
  "key18": "rHB7pYSSRAiX6abitnqfijS8qvfNkwPAErJRjcDkVrjPkWpwYuM1cVegb2yCfWUnVtAC2m3ckbNGmv3PbVSMw1e",
  "key19": "57bFARFYVsF8QU6MYV2izkCbFdxSTDu4BsmA2QCvVAsQQfNaWVzAdHPT81hfFLioyHzuKLRKZ2WGLNWzQvPC7koZ",
  "key20": "3w2wGtALxxxUrTHnes63s7w1ABM1a2a15TUg99PWV4Wsuh7sU2CMEtHnn4dw4gHhD7nUssoN6XaWM74XrJKGucJY",
  "key21": "GhRGBAQJ8YNa559tfFGMveBwBCWHTcHeKWxgKBpVCeUQYsPV5K2efCxhAeRfXq9SQ5J7VHunpha4nD7yEWjGydS",
  "key22": "31PMWuRrYcbRt8wbiyrAhDMqwT1sgFjbub4aYD921vLzT9a4nTwjFYQLUtbyiscBdATdu9uGQ1CXLwLB3koriBgg",
  "key23": "xvefHv1571gEnmn3wTjs5CSihPa62gbnkDqmHBZuMbSGSLZnKxXDnXPgyk6x2xr7hZbebGwGxN27dFs9Fa35xNf",
  "key24": "2qBTN8eY9CQXyij8wmZW4psDDwivpMw5ySH1XkXrbXttc31EJqnb5Ccy2bzRzQukUUDi6fuApyws77TXq4V2tQBA",
  "key25": "5TDqge5kPTW9eWAFiKpGyQ6HmYLkuygt4xfLvDm7D3M9sRKJwNnKzavPKJ6rNce15xodwaq6VGQYsEgbGoEKPBbV",
  "key26": "4jayjNafMQjNXgE4C9jqJWvGQyvfMraM5mcrHxHek8V2Wfj2C9WWA4s9Brp3zQnZjGNsFJRUZmbCwowB2n2C6Fnt",
  "key27": "k2k9L7XH3NHqwvmBt5185Y9dFm9q6A8zsgpVUvZjbZjPgm5ZdQjPa1jXEEQyvE6aNoixW8aCYp9ejzaQcYZC19q",
  "key28": "2jPWRWqjVcz6gvjDgcEisTGryZ2tHuHUAr6QWRB3VJCKGqkHrTbTzavUzqrkuyFPusSNsQYxPhjYY7NmXRPSm66j",
  "key29": "4XrUBkG5USwMrmNwe7UeiJ2rA1Vuj4QRjvHyzvSjogANm9XEwGsNkvRa1iyke2RunzWpso3X9t778VQJ3tonWSc8",
  "key30": "fTphNnU6y8APbTH91WKLiJXFsW6HmX4xibuQcEN7EzvPvpPEiBrp9gyLNkFNmV8JRVVUjP6nqkLV3vPbtxieuDW",
  "key31": "2pSXzPtxsHp5g2zDbvrGa9BKUknWC7fgFjmSbYW4SExvX3FtG1ntqgxyvAquqRHchsCMAQKeLG866HkYYCmPHS1u",
  "key32": "3jiEQAWtfCefjcNbgXKZf6g5VoDqT788WYxSjumJHh2b58xMW7UL5vHCvYuVx1N1A2nM6m1EBxN1GHE6rC5EhZDd",
  "key33": "mk5TpZ4REg1fJp5xHjWSEN4r5TZadGFgBTdZdrstEBsGfVz3qJvpea5GG3rsPNhGVeBHhPK5BVhcrADAFWnKFnn",
  "key34": "29LUJf4H9RpERrkPhLMC1xaWPsF1zi2gSiYT7oSV3LifidrnFPARAb3w9CoP8PELvqqjBX7yccQ3QLYZoD2hNHGK",
  "key35": "5RKjfPzKqcpjjHmAWZM58aBgSHjyLfwTEddg7kJ1Wxk9EKMLNoxBH2ByBRbnukYbkVtubWWdHZYVN1y1pP9cENHL",
  "key36": "3A38giW38yTKX2XV3Z2rfpckK1Ujpfo1zzFsiVtuxijMJWMba4e9gxgAyLRG6gdcGC8boTH2VR1FtkdDyiRRPesR",
  "key37": "2j4TEfd8XKaPZVbe378vWHEnzkAuXU7LgL2j4pWLtGHE36QusoSiytan3o4ZXYqsRq2ZYHBNDgUVGfyawqcwXg3e"
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
