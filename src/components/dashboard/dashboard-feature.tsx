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
    "3RpJz7iSkDtSxQqKasoSUh9cMWMWZZbbftRBsKvMHurE8cAucvBNRRoN2W7ESGWGxneKB4UmN2UhsS5FLH1mhqb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jvMdrTwWrQJQk6tJoqsCqGSLgeqrN5xUhiAJJtFGyfpRj2qHCJJa3zdmEUEHM5iMXWFbjf4ss5BxHJjAoFe21Rs",
  "key1": "4yF3qQv1gngVw8kNqfx6BtV6JJFSU6tKHSBRcoLUmsQ1xb3yw95vszRo2redZMvV41UuddEMsD1Xn31NkyL5Vcwo",
  "key2": "4CGSx4ctxAbjW2LpHHwUD9JKUdbuWcdq3iYdcRiRC6AeV1qNTn6AYyRbMSEhynAgpyo2tcQYbyzAJfVw5ZW8BAAH",
  "key3": "We7Ji1tKct8n9ci9H1Fv8e2nkVPT5Bh8eJd11jw3Qe3MjJHZ6KKWBDciqxzNLjdi7Cbiwg3eKnUgjmKDi1EcJJA",
  "key4": "3qe4BbsuzrxtZuUf9r6XJoJvcNcJ4UhNdn1wZQmwYxVYJzdZsVtWg829Mvcv2dW4PPoNty3nHCjUs9VEk6Frhjn",
  "key5": "Xatb5GkK4iPtM4ua2R8ABinmHfqZDzD9H9xHaecrMzbwRECpNah4sB5FzkQXmQrMifHfTwFizogLQFJ8x3gCyrH",
  "key6": "GJe1gGwkmCCVjZ5XCrG4UpHz7vB8yRrjmDVDYFtL96sfo8wdpeKsy6V5DFnxvjc37FPS375xeAiC2JWaFyE7iV4",
  "key7": "5fKnavPqEShe37eDLNK2RWyXk1XWB66tX1zUKpj7RW66i6A6LUzGtTwDDxuVt2Ljm9orUC5rSbCwix7Jxrb1pVcF",
  "key8": "5TVd1UyMNARNbtHkweLyPa2zZCV4gVs6CAqgUVjUuSCN6ypDDmBGb7a2vWLzBbvdARLYLKATotJHRUWYETfb37ME",
  "key9": "4aF4aeCHFHqsMjJQqvDVYoPf2t6SZgxGQS5AuaWLxrN222kBW5xKr2mf37HTQNceiSHKPCMWqhLjYQibbZMtQQQB",
  "key10": "5SBBWNENwpGdEFgCj3VNhHw5AH8Q8hoZAU7fQCWGT4paBEKDteVe8X7GvSxuHaHZDxiQm1c8LZF64hAeUY14gh7A",
  "key11": "5M2cCw8juG1oFBDehkaf6wvfmt56Jzo5bFXPddAGb4rjHPMQVn2pk8iyypdSRAvUhXgxaEcgiKWQCBq6iZ5tTL4x",
  "key12": "2ZuDQAuFzQ3hHv2GGA7bitYd2X7vsbrjALEdACT1fHcJ61WaMwqdThUUhvB7ePbmk4oRbVnK6kjdSsKaNdizoMMK",
  "key13": "3u93o1USkUMDbrpju4eamcJK72n9y4MrAdLvQAckxJ5BzZtdPkhKaZSPXVoVbecrssDbA67C56CtLJu19V3CmqVQ",
  "key14": "5TTVkLzvaABJXjrYpk673imWNMimQydZ3fXurBGhKki9FC9QBbd7h8Vr3AQvLcedp3xETJxmHyqrCB7jBbVBpcNV",
  "key15": "2d8LQoq4N858KW7fbd6AjBDZFaUS3oVguZfKjir8vmdLacsrP7C9dGbdcpRuCb2W5woAFicvjLoL1Eb9srQc3pyu",
  "key16": "5STXCLoft1ZhEkmG6pevi8RmQAaRhb2ByZgd2PsKkBskwzheYRPcbAGvpkGeDk8Wrhuzr6NBirYZhgBEnBEMDW7a",
  "key17": "4PqHqL9nDY5CtPKEwVtwGrM3Sdbeedf3P7SsGQiw9p2iJYzfZVC22E62qQNx2pFFbBvcSWCM8yEu129LZZZ3sfA3",
  "key18": "3upJ6GoUgpSEQFBRAzfRW1DdFvrn9kvdD4nXn7vFRea2eK7ndqDoNmKMKW7YRUMpFvXjuqNkHu8ivS5d5YFaAtbQ",
  "key19": "3CFG375GBdtXsJeBMUtXaqWP2PrCuEueYjPCMict5nmNymMRL5b61MvDQLySqPbvCZ55Z3j5wzAeorqDCCUbHc4",
  "key20": "2ZZdJb13t6GAC6A29bwe4ipikVsBfVyZuRgb6yTeLvSRcCg3BbyrrPNGD4oqwi5U8Qc9c3fHQRjz1AFkWVCBUFDh",
  "key21": "4f3B2XfsNSsEATaSwVud5JZkVseFkp33Y4dyKqyq29db7eUoNNNJ3YBRhrhXuyZGrhsUp4uqqrsQfUcMzVjfRVbs",
  "key22": "5txJTijj32YKoD8C6PP4F5QgxEhwA9tGQsvnDxqBfZCLnXQHFF6uypJirBT2Y7xfq4cEBscxBiT4zJTqTEjmyUqe",
  "key23": "3fZsE9xMMbzkmJSRzmZoFEQZ1bRAVpiwAYRh9f8QQ43yB2811J7KirN5865VjFcduCbchyjhpoekPqHZ3wpS5ZJb",
  "key24": "2G6Vf4exHqmi4xQZDMzAGuLKgC3djXJ6BjDChuebnGRfUAWDYgevkkE49WQLZXvizfiZZWyytr95Us85FP3r1f6L",
  "key25": "3FGKDJC3G1ciHPSEAmU32NT8R24gWc4todRNRkTxcroB3NafafHyDRjEgsddbhNUN32r1J4fW4ay6p8nTmyPG5N8",
  "key26": "2YcffAyWoEaxsYpQwUWqiHv8SWtonAKTpfwHbNzwvBRqbFfCqSroaygaeVUgxsJjsEGodyeUciA3YbXWSkVEhUSF",
  "key27": "hrwag2rmHpRNwyaiAPaHmnccBAbWqjbKHtPrbm3GQZjA5MSexVhXCJHNW3PX1S6Hy747sxqjTqvaNZ27p3G9LH3",
  "key28": "RD2DZu8yDYxShZ1m2UeqGufNs1wS67jWdq7trndnN3z4pSYkRs6R7DPc9h8CdZXXx13DpTpsrogyGkBgoZ4bkze",
  "key29": "F11iYKF74UrCNBzgSSxT9TmXHjZExXZvNqJuGqiAjSwqLqJSW7GcjuBSH6yGQFvhpatvJqyqCDb5qLst3m6eTHA"
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
