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
    "4W2rntnSoDK5HxBzqKtP5TMs8ruHuFj3QKU3BxcashBeFTDB5XQ59HqHzQdts9BjaW281a36VSyEPPZ8uqYD2zXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z3h5qnGZ6Fevfo2Nyb6k9zzg6TgUynkvuZ5QjpipYhzsQVThitVYxpErTC83DwSerLGwVvBsaFSa13yhv55qHbN",
  "key1": "3HyxeksTbm9q3xDRA8Uh6Xi3nMZCRk47pHn5mYAx1sQujYj9VcyrMi4UEJBPaYkRpeMWeeDDkr2u9KsVxqmQzbYG",
  "key2": "4G4qKsZLJ4BqXf2jpDSigXVHW6fUWAp5Cmtq9W8mwY4MyTGye662gerqrfWN8NnRgbRLSmuGJ6T2iwucB6cbtmaN",
  "key3": "47oZwuHtjUxjMrtYqM2mQ8vuTFG3a7BJhxyfkQN68XCfsT8iUrj7yR3zBaexgHnvbNzkZJdiP34pNR29rfBtd77",
  "key4": "TSB7Fy9BZRpXzwJAYZZs6UHqGg5Kb2NsjjeJRUGrLXAAwgJfpbEx751uu1G6Jy63yfNkkzGLMofk3LUymARfaUj",
  "key5": "2WtZFuJNC274WgbXMgUh1N6XbTLk8JLQtrkYKHGrs1WFHuwLyTGkq6PW4QVhURLRowAwNqnAM9dKFGeyqzSuYpnv",
  "key6": "tL1zv5KRbxA3h7U21yj6uv9BrVsSWKJAYwTh6QNYPnUoEgqXGd7gK71rF7an6SpqrjvdF64UhzGVURThkpxPiGq",
  "key7": "4ZYGMyCcP66m4k4a7VLcBxLP2kNWTVtsHo1wuviEs7xLcCSbvawAPrHooCvEX3mZpuDKHUXR5vRBGuKodQB38iju",
  "key8": "FgGydz8JMfrrVRqv28HTtobT94F6U2CazL15yQ25JxprYjm8bFxsSnaT9VGUQmouAqSQzL6NWU9NmfWaDxnd9qW",
  "key9": "5rEDBqhkRGzNexttrUSnFAZ1pXYeV6Y1DHEZEgvqTdyL3PvmZyds6YqU1grG1NSReRMWgDApqvCKwCzL2Y2gaeq8",
  "key10": "3X7yCChv6zyJgDNNgZeDA5STE9Lt6qEx6hdRwc5BRW8LK1KkbsUNfZSPaPLRfWPFCzfchMaHBxr3dm7KCQXWXi52",
  "key11": "CUf77UXX3utcaU9G8k4rrBYh2drVKz8S9VwPupMZ6gU1XmrTSXvS2LHtTGCPth3VA5CjaiJrNDtYNANgn1HVBws",
  "key12": "VXi8DoBaw4THxaEkskueKAMj1UPxARekwCPUNypyNua6sktvzk3F4skRFVx56ZdqM8iJ5tXgNshi4jMLB579cRn",
  "key13": "4KZXeNtAxHX59CQ3DMdxSFweFeGUbnym745ZTUwmvtgFEXfuH3exKxYNFQSKKN8n3uLK7TrsUFyB7U6ZxZoonsZL",
  "key14": "5wjzkTfwyD1qGpCJsybjXWWeFibiYMGJtHQULbA5Lqs4kHRDH8py6wCp9xsaPrGxZwzofVZ1Vnp49t6nn1JqJdPS",
  "key15": "3ZC7wv8VdqGSs6g37dtZbafZN7rXHNzH5nHUqcGavNoP4X577awyzLQgwCJB3nm96XSJRFEYxzZBGatQPLSJmsG1",
  "key16": "2Lj6i4pKm79Sv5Kyv382mzrY74iuKufrzdT8t7WAT6TCqN2RfirBvaQLQ3hybaBp4smwAMvmk2DoY2VH8N8aHN8w",
  "key17": "5kDjuoXH4bJDNRgeAZ7iyevBgDrbeybHMNMC1baEar33G7u79coprL6zeai1A9R7xNKFSdnGBaNda3xRE7viVK3w",
  "key18": "3EXBskXSpJRiDdwoYR4oRdFzR8EvAHH3uohf4LCg5SS2UMtPxaApyqEzHYxhQG8PV3DPFec2UG8Yc8KJNCtsaFC4",
  "key19": "ZN32acczPFR8oCuSsXVNXWFCb7z8yMmZiHDdDLun8a4TfEbvhv4XVorawa92VM5fb7gZnc2m9NdPUdeqp5FsMa2",
  "key20": "EF3sovFDDSh195md9ETS5Lvnae1wTWKgmXSrZGP4GuKq7ugH87om1jiFWarZdtdGrXWTmREkqAPx34ttPgMG6mZ",
  "key21": "4U6yZNrgBWJUAcYJdd633KQXjvJ3z1PJiWBweTdZKJ49NkXvHCHv9sLvVxZrpAdWG7dEHdcCMVwXEDcKuaL659ag",
  "key22": "3iEr2hdZgYK4JxqqctdvYirJw34Z6TZsZR5sCJCAxeuVSnMpem72DFzoWdD73NYRb3RuhrqLzFM9T8ieYrnqJCtD",
  "key23": "dxFEk7PwxMJqaYiv3crwmQGDRF72EXuWNaWoCvrneMnDKMjRJo9ncKV4G6J4cQsyRnJmvRR4WXdnoDMsQkqia34",
  "key24": "2JmrXreT1AoACS72P5Gg6qeY92xmFvLS511471DmDYJGA4ByMnHzhzNb2Z1aP7EL6MQ3LmQY23xXVsagDTvq4bX5",
  "key25": "5n821cjGt2UPzZqVMDFB7wBNRtBevPUkKpAKWgTSVWUYGWwVKoSp1Es67fRZkdch4LKsZdmzBs6TSKkw8WkAgYe9",
  "key26": "4BrqaTrE5m2Pug9tPHVHzJuKWX9gDmPdfrdv9DfULPh2gzFynKpRhy2BQbBE4fPncgo6rHZWk51vhzKa1AZ483RV",
  "key27": "5qD474ZVEgxEHoGLX6iYguM6CbWpa9CwXMQptRswUL3fAxNReSDETNDr9fkrGiwBsHrsk3uMbA5jYmN8ZXDvuFhf",
  "key28": "3a3BUTNRHd9Yuzc8y8qUzFQSMqQGExxR24kunLvkLBo2JxjXafSEX3D6gpWhwuRdNwwXQKpZTx6vXuwpRT6AwqkE",
  "key29": "3DJoFHcVvFyanDvBouMV1kfFz7brNxSyURLsc5eGHLKAMx5B6zDGpQR2QdJm2dgCUpDvVKd4K57RhezmgEQRs36E",
  "key30": "2L4g1QM6nEV1gFE75ytT2gJiaXP5bHdRsb11ZADC3sjhdtH6Abao8qyfT7XvWTrsE9e95eezKmmoZpPREjTVEAUA",
  "key31": "2xtenavUAjE6Hqgh3tiMu8Kij2xPofccVgxRavGbyrmFMwTaSgE3j7yRvhYugWDNpAGa4dQWFSV1sgGzwDHUku3f",
  "key32": "3BMvFnFFL3mkaqjaP846MCxg7RpSMUfwq1zrjZncGXjYLJsHt4ca6FassjHuk69coNg5t9MdbFm5fNy3dF1gSsBi",
  "key33": "2kZoYTUcuQFEG9v3ruudEziGxoFctzhKxDjdxWDRsRdraoSEua3BNrLnw3qrcykG7ayY1rVuzWF6qPfvVVwmJpdd",
  "key34": "5jeWhTE4xSyEVHKFLPRyQ2FoCBhYz86dprj6QCNVkve6hEMjXF1qKUSmh4KhMq7k981ZJZGYzZ5hkYfzznninGK1",
  "key35": "64D4VGe56TF81xyKn2HyknEUc4ACyYqume65AZB1tDQ9gdpa46zQW2mekgmtepfzo7t8VcpF2qSEBDpED3miviW8",
  "key36": "2d8h2QSsWD36Zq2eZbF9h8E4qzw9zeDdEKRWiFNh57jkVoP5G111Yj6zNTs1bnuKo7tNbcB1w52fhLjGrkf4p2Lu",
  "key37": "3eeukuQQPF2sojpsew1uUJ6e4apvkNCGTcTnArwsrbn8BnJ3Lx5mztnMAAqCZs2WtnZNeny4qHsoZDN76exLMHAX",
  "key38": "2AQtFZHad9k5M4QrsanA9jC8QHaEeZD1gAyivoMGuV3cLZaKNcPakaYkBCLe1MvEnjhYYdWHdvhUGWWdpUP9RUCP",
  "key39": "CJbRfMup8APq4AyBETRQ1mSyjPkc9H2iVLmjdA26YrxuGbiAGhoiQbgAU3sc5K25ZPmSsUVSL2k8Dzqq7A1K1f2",
  "key40": "4ziU94xReFZYxqZ1J5C5ouN9zfaibHdmH5LrcvvUzvjq2PCHnqAinoUBhr1nafnVysqgwbuwMy5bbmYkrnj17eKG"
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
