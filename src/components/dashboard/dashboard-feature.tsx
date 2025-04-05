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
    "3iXDspviBJHX7oJwypBtcEzQv2aED5jfLhRew384TnzhPxxmyPnWm2otRs8De12j8TA9HEtMwfncCQzkzUj9DmF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36AgHKLrbTCZDm8AX51UzQtUiZwzWdbmQY7EdpSM9A9ZLC5eYNEXGv5iEUpEFmDf9mP8wjyqZrPECbnfJLeZyemJ",
  "key1": "2DSM27hFLzWxEWG4p3pYeMChbZ7LCPVF9nPwz4aicdiRjTksbRXJP5PxLmtGRY8XDEFabpQDXE5fES1nFHatiecA",
  "key2": "3tMTDeiFh1ic85ACqZbjhZgFDtA2V2F6iALVHPQeS6PANxpM4So7wjXgbjghbxSurCaWm5Pn4BWo2KLbAHBNUg6f",
  "key3": "sEF9N9kZSXE7hT26QsXueTa2vyGWHrG7PCvQHjcpfUu7M9myqu9iPzJSEngx4uHS4EMdYLiJdXyUYktydNsxNZh",
  "key4": "3BYQwg43KCvdfH35RVAycpm6R6FLAwPeXkpDPVVhdrMmzYibVPo534q6Cp34EHJovTmxffVauRHcSVAfGCL1xn8d",
  "key5": "Lyv9zkJ7ojUeh5Rs2Yi4WCgZu5LEwVNA6gAnEoULYGvG7KhNXuTFqiQKvaqSqNDVYPs34wQMAxhmsG7kewsC3X4",
  "key6": "4JYCtoJuTV7KtYQ3yxAEXE9LvBmKdoiadLXCXu7Yv5UB4xjpoJXWNny4MzAnVzi8bVdMUM48Mbm9gAw5wg6t7wJb",
  "key7": "hP5kZMALMAsNVYrGgnGaxPK8cXFGxgHRMPPyWK7XYn1br7y9zQnZChTePjkgLBFGqAJhLbAVgxzhoCBBwi5b6Ke",
  "key8": "4eVb5DCLidzRgak5PUfTuPmbTfDJ2KgeFceKQZboKiqP9S7Ahm2uhii7VAtRzBqXGzZa8Zrv3WDR6UkkJFr95hom",
  "key9": "57K8s2FyQCL1kZ1fzC7GC7CLzuajJcVYgTwdNzfHZpAQuqd3ZTjQdoWXLqEUPQJkmW1qETbDe8y6nf2kC1s6nkjP",
  "key10": "49PSxUeJzRNk1oTGKRn1Ft41qrVg8avjSUEpAd918bREQ2ThcSWiZfFic2JhJwSgrwJHChY5Nrv5R48DUfdDk3nm",
  "key11": "3MYbijgbD3oDuo2w2epbpPQ11QXjJNSAtr9E7oLbFCcJvBavu8fz6vpLAkrFNVyiXSQZiTuU5svZR326st6gyv17",
  "key12": "4CxeFKUbV7Gkbb2sRFpSofen881hgdcPfwjnMTVjUGPErp4bh9ApKeqMRtxSLHqMVVUXaC5eyB56zw9uCNE8K9pE",
  "key13": "3b5RNRQk3CEqvAoyF9JgedeaR3NE3Hbb7RAc9JgEDr7fJ9zTFssFqnAPxdewGWtVH5V6S6cM8Fc93nXDidkMMcoJ",
  "key14": "2TfPzXgvwpGG82fHjCbAWAC9yYpTDL5Ligc3s2jE1ttXAhUrFgbc2HV9UJXSjhc15Stfn2wExDGDtvFxNiHFvVv2",
  "key15": "5y6ii1XmRwcL4zG4WYT69pusJcJpBws8HAEie3Z7UFhSB5stptmCeehj5W7Fv4NmTYr5AkGVvUFpLdYtGSQ5LQH6",
  "key16": "4fXJVxszDd8Mo3SDVQZsTUFDrXSMXGUobJk5vEbd49giGKZ4os7Rq3gpt2Xyx5z5eZEkGMDCgoeT7hFtDCa2uVDG",
  "key17": "ZqsApPS9gkpxiHzWsXjuBKKxaLpksKieU27mzc6LhDD15CWD2G9eSNS4CfP7WJboaMaPBU8RJFriFc9Rvp3EVEw",
  "key18": "54dnnBZsPnoSRTHuATbJyxNtYqrkYU7zSVKhdtMT7vcqo7SzVhejiwdmPGQRcsj2QybA5GqZJTDvVZDH4wMqFcYp",
  "key19": "2LyCPddSK76DfS572VYxZJVrEqHB4LpkVmAEx5VEVDigyGwBkn5YtUEyCwZnEcgHjPjs9urPiHEa8UbBqxNUGTp",
  "key20": "wyX7NfmJjWsZMRomWQKJLoZY8E2Kj6JSq9Bk2N484b6pPPnJVoKpZHTodVbqjVyx5LGmsCseRbgKs8Djuq4J4Xu",
  "key21": "2TjUVmQQc6pYBjUBEWrRvXUEACNvKd67uGgRxRJh1kQGtUQbGEvnq4bDHfJ5bL7q9hkkfMaMBup77kB15jBcuc2u",
  "key22": "5XDUsGNBQgGA5WL5ANjC8pJtTvBxpbKJW9dU1sYBYERJtmaE8QFELcrsAuMX7MyC6rc8Ey68zRAL2nMbVswVg5o1",
  "key23": "55U3LbEuPop1Z5RvNYxgT1caKBMDhM9ihAYLGXzgR3WdCi2GHKCUFXLGfM3jB3uCWkphRtY2bnHK7ZDAQcbeomgD",
  "key24": "3ndzmdbimDHGeGMbMGVM5h7LmSK1i8vSyxXbYNjsLM4mKn4Kg56fw8KowdPogWZMpeRuTmpsr7dXGGV1DR5inaLQ",
  "key25": "3YLqZPMKMPuvCUGZjkpUS8vPzG7okLi2PsmHi6enJ1sCfcL3pwDNHX4E8SiwdX1d6R99qCtEgTGQXbhGkGvReb9d",
  "key26": "4GYX5LLBWmdXEz9uAuVTaJGmfNr9X3qPFa8FkgLCkakHvy5nBwAmnDAgNL4ucMqH6iXn7A3PWL1dBRHoBDkaeg82",
  "key27": "RpLa3nrP5bPjN3xnXvKpYeXnGaeQdfzR4EbJMdLxEeAC6YJETrcEn6AnbSyV59TQ8DXUi1zcuMqBxfT8wNjPiBs",
  "key28": "2Gj4s4qFt3hP3EjGPKcHQpfDr6LvsXQ4aBPQhxWpfB6mNfinGcMuHxPrKZL5pL1bgdsTzmT8XgzC2qwZae53gLFC",
  "key29": "2zuZpBdNYRhPobKjob8z3ouwdFFr19U2RMVoSuZhjwwzmtv6HLodTn7SgCdmpkmA2VZgPmUzbxDkqjhdhNMgYYxQ",
  "key30": "3UJFSG2Q5epqMGN7Joowi9V4daMUTh2Q64TGqqPa8Q3UeRKaSXdAdYCSB2HsEPECAWpLW1D3RwhdW2GyFgH5iwbW"
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
