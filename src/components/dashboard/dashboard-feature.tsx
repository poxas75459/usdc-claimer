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
    "B4qXtnEEp6T6MhNvmVxGWpTmP4CwnEZ7QLBPPTJnUAFKYXJqpc1g2NQ2xniGHKBgNG919kYsFZ72cNCAixWpBgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4riNaU5bDQc5XAbzirkHCQThtYpPsdgndDSAXMGsynQAxswH5B4RgVMGX7i7jHn9FEaWVXDAud5W93uYFkBfVgMT",
  "key1": "4EPB8syeGSMz3ZzL7exEoG7VnBbuSd6yGohAJg1opL5RygeRe9hJrsCfUddERx18BJs8ySFErTLdNKtTiENnuSuh",
  "key2": "4pmoCFUZ2TGfK18udnQAqxsy6fvAdaWWfVNSMAbYpLV7GKmJjtjYHPaiqae5ufWC7cNDFWYutU8NRw14mUju8Zin",
  "key3": "gjhXE9NUxQzt8mpFJCA1FGWpm82jBf2cVpg4dpM8nkf9QmHeTodQ9YehCGYXvex2HzzGo1Mpvibv6bTvMqvwapj",
  "key4": "4SBePHYA84uXgQnM1coXZo1eNckBM4eYGsCxBhHYw3Ar68baN3f9SvorzLkEs6tdUgi9YUKtthGBrs4zWfrHTX3Z",
  "key5": "4Us5tmQTF4abto9ueLg7yxTvRYxb2THNN93TFyATX2ktn39Jjr1QZunzGwymRJ4bZh4XrWKMKQtrmbGyiMrvedyD",
  "key6": "hkx1WN8Uezw7WFUzzRt19F1B2HRUWW1mPZrzqxeU2CsXDTL3RXNHJ9kSjo4HYLB5eizYiTC3bwq3GDzf2yAXk1J",
  "key7": "2P2bcjaAZcEzts2LYMLajEFP3UpdGGf6fWqWKgMxJ7K2a8SNvTqp5QVXU2o7w8Ar8QopA1DWA44etfrM5eGTRCXZ",
  "key8": "5uhqkX6SUoxjJcdL64Nd28LGSqTpkTgeLSDvooMifi1MvC9PAZXzW5jS8RycvX74CEjFKi9rUxjSF5SRWePHoYFF",
  "key9": "3pcGn6NhGtzs3kvqZizgSiFqAMS7pvVdBDkmzQrByiRU6QFMbiezs6fF34keSfRPiKivpfdwz8ySPVpZ27n3VtA3",
  "key10": "4Bvt8GCXqSKzn4hwN4vBesEdr78P93a2jJUJRNsWGibmWhU15aT7Y5R63WdpnmkHs4ZGZtV9KzbnuxnwZJsMS8Wr",
  "key11": "2cEcDHvVGnLoEgQC4kRfnMtzt96tTLXsGN5KR3ZLEUfFGeSym3a5f7U6sEsevgDrdEA654jckpKQQEtrZWsmvTZD",
  "key12": "3Rtyw1HUEZ625pPWrYDQNogwwJj5sMbMTDbmQbBDsbUhKAQPwLdns5zU6NKDxwapixDwoCKna3JHNJaq2nZSE6At",
  "key13": "4MDrw4Tr9cYXNDnAqmiyhS21STYXeTQkqfNoXSrcsvkERbcQneZRWCx69yx1gyeqLV1q1E4Nk9GEth2LqsVx5Rjr",
  "key14": "3ymVywbUGnkxQ69s5mMRZRFEi1S3Y6xfuzy5pZNMTrraA9MJDsrmmYCUjdo2BegGDMe34mbo422DXYBfWwtJ8qZq",
  "key15": "5sQTz4pFAxifmPzaoS6GFoxMwoGkMgVf5QhqC5ZUHg1r4faRN73RcBoH6TJaX6zxQYcNU2RTmHzw9ZJLAzc9fjrG",
  "key16": "58YEdkLUsV7LtWYAZe2jLtapnLZNv6J1ifaHyiTYy8Y2kez4gqQ6Rn285MMjWPVWLKcE7jV8MXKfpsmQZXQgqYtS",
  "key17": "m3egqWiAzjcpjbv9aS9VDczewD59JQon7atdDQCQykhSV1vttC1sbPKHL3p8YaJdcSa2pqXpKj7xEHvywwwWVNe",
  "key18": "2A49DxvbkLXDFAjBdK6TnDb4mWqWRoeDfpombeeRQqkyFoS4kBsxK1bt32181cATYAzJ997a6tW9xmuRyjefKrRs",
  "key19": "JsDgVVPSpEVAkW8wNSwLyWLBv2nqovs7HoysyLhA3QVPoKXXUKE73jy9oAeEqEToyP35BPgSHaGzVP6VSGGoXrX",
  "key20": "23Jv5tF4b9LKNVrTCD5Aeu8SSkUFJJvPgSJQmi1L9Nk8gux3tRW3a4qNU6gSs5b19Q6HVYcw9SrLxbnwVHCvEnjc",
  "key21": "5azbMA85rgKDufSKTz5qsVh3pQTz67NkrX9N4qBUy556wicvkgqC14fAMNCSwSDKn6xn8QaEP9pApJbd1TJtvqsy",
  "key22": "PhdqrsKbjpNhGdtunYxHKqDTwjjGwko6W5UN6U1P8c77Rhs5AV1JgDcGDQNZcd6CcjQQ2KWNQMwYFyDsdB33zzK",
  "key23": "55eaR5TqjNoQBpmQeAw1TDjMftaatPgRVLShC1wkZndmGqp752zjNdbPuzKUizqMFpL6pcwEiLUC8YtpqxJ3a6rv",
  "key24": "33wVABXMwfGkuvy3qGnjHaVWh1623s741N9q582iEUPsRZZGq1BRq2J2g2XZZBNDCG4qCoHprxFaVqobExyXZmhm",
  "key25": "V9pVCh8PC1mbRTrTGQo7NRjTUcQqBdTMie3cLnAWZWpwJdwgtyPwV8cVvgkfioasDrqJJLG53dLswMNH3YNirPz"
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
