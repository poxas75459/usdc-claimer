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
    "2ou5zbwQ1cFfqp9GDQnihxGchnHcCPHgWEsBFp9dCm1dYrRasiARPbidLomaxjjoVbzQv69GPgqosLUzMbYsutvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hkJWG4WiedTubTwd2K4Hjxe7PrX894DesreQC32Rk6WLWdHY18h8CfLLHWmk2i31KrAhREHjgEjxw2kcV6DZLQa",
  "key1": "2KnoCAXvmk1NS5ffWQyPwFhKj4dAUBmZDmoyZj7hfQaH55U3NiQwonJyDRE9efkPLimbTd8rBVX8dSDFE9GVoQAU",
  "key2": "41gSXvyx6A4e57Tztt5oUM46CHRkUXQikHwQ9WjVRU5MJtJQoBLq6USK9pK94prNL8GvMMhP3ooqyb4RmD8Yr9VB",
  "key3": "67ZtmhaQaFtTeRQJh8rttk9hMqg4Ep2bWeCBqXvw4nRNq6WpJ3ceDcUsixjbL5PJJDvEVbaZiZ3jW4owbtwxLoQV",
  "key4": "2byNQsJ7HhpuWgSCitWnwrmAJDGX5hdtDfocDZa4zVZY9Nugw5avyZfEd2mntsyPCLLokiuRkMT7hGaUT9HfcSMy",
  "key5": "2e68QPtVpxUu71ABgmoqNNX3i72NyMJGFmgBdNa3KZ8w3zf5GTsjAsGJMTDEbzkaKkF7ZASqhv9Udx8mtwg68R4r",
  "key6": "4w5spQMnD2rKG16hoAUjaTV7n7hCnYtRT1a5HM9dUF5HYpgqe99ihzf2vmNM5BH3KhUCNEmNxFJAYKGbDmcAEVPH",
  "key7": "5jzNuJe2WLmJouwLtTUiXwF1tEnY6bmNnrGJL9sexSUSXYHqcqfPzDwSnzU8XAgjATD5epTaoY5qtyzEE4tqX36j",
  "key8": "4nukBGnkNbXow9DQYu5qZNVvw3C7Nu4Z45rnxuBKbZRFCjSpgGBjhPoBvRM9kkVVLRKYXAkaoTAG4AJiDbp91xxn",
  "key9": "5kw5sJmjcr6yvDUA1my4sP3FW7NCYmUFohCvmf1UYLXK5RNFb9oxxAoLBfW71qTyDRRTcxC857W32nKsLymBA2UA",
  "key10": "aALe1pKJz3woSAgmTaZpTwuu4XGDGQLePDvA1B9F2PZ1EeSmvgTe5QA5oRX9qBDCRE4XQPrQtbx6chxxLacoMXi",
  "key11": "2uv2MwteVpZs657HeASU165nbHiFqTQd8KyDRhrJtpHzk4ScTqCuH3ddwCLKTPwzR1fBdMQ1G8wn2xdQyKN97nY3",
  "key12": "busvY5LUjQHCZEW3CDr2DqehrFHrRPZKTCWKzPQkQ29D4xiop3eJY6hiG6MN4UVYbaSRxmcinCifP4NzPCC6eCa",
  "key13": "3jRiPeMcDb75Xp7T1N3yi8hNX7D2u89Q7vTbAKnX42hDBryHVaYB8zvVkGEJXbu7syLX4K7wcbwrK4GUvoVxeqE3",
  "key14": "3QgtxCtRRKezQnqeBQ1CXnCihqqJK7JtibDygwtiDThYTqJBd5KBu8Je2s8NCwegRNHA56DhmAAbwjsG7RBxp7S9",
  "key15": "4WGh4J2NgwPa3VnVLs8BbZpLwt9YGoXkRY9f3FMczxfWq3CpdYtbZx9swB4J1JyotbCfAppPwYyQkQpjM2JT7mse",
  "key16": "35c8LkZKn7Dw7DTvCVbQWp9mgEruskbWLiFs9gL7haPoVbrsqXiP7xz1tFZqWFA7aCbKCZheu9WVTBu9y3MrnPHY",
  "key17": "4cPzZcBLZ2PLokfZ7REHd2yw6cW3zmqNLKMRi5Q1SozBaM4kVA4PeHadGsuba5NjZprAbMY4FosD2B1vrf3FVexN",
  "key18": "5wC4dpA4C1WrbyZejVDzbaWiQuatEPP4NhKarinRfxKc67NhtyDhyquTsZtYYbiztYHt85QvFKsL9tiLxsLNmauN",
  "key19": "3qH5NDDKmaCLUs4EpNyNngq4axjv1Vdum3eqEEZczEi15UgqgXXFhpmvS8m6FtGEbW6HkKhGhuqtCZWQxofE1Rrf",
  "key20": "4wA6PzFcSMrs6uQw9XrQ61pkgY2H4sw52P8s7fwayqRpWmmYvUjQVxGVEW6Cf8mnKVpMAFb21oGW1mD2nubLijs2",
  "key21": "3MXRioz3dk7nyB6Jbs3141CiKhNaXRiFgym8jc66Q8FHMVJmMbPHxxCY9Y5UKh2NHfKJmbbAdaxxuJzVJYyHd89o",
  "key22": "4mwQDmwLj5bzxeD7mP9xfQPTrg3HoA3J5Rg7BcE2LrgcP9sbULQRusDHkFtaeZyTS9hJAw5s8RFva4wgymkAFv9h",
  "key23": "5xsUUuUqtSqhyXzccwsoumSVNcwHb3ogLXigYGzfA2SeypYVjbvfiwW2kXncfiHzqMTAEBdZXjFq5b47ZhjxVE31",
  "key24": "cWzZG9ACeyfzmqkhWAEd4Y9eSVCdERRFgnK1BzoeMXXWzJEZns4bxPdoPs8RfwcHF9j4biz3TN7MRfM78VpMrmK",
  "key25": "4stfm4pFfMWQV9s74LxcSUwE1LMDdfs27se8cSVjEorvMVQtFvY5mraoHHDRgssjwTexn59LJZzEQfu9Si5bVMKU",
  "key26": "26FzrTXQNabhveB7UrsoMfTZ6vQY8hF5ui6RsJ3XnvWgq3kSv9om4DwYrvSnyYssiYnsL4X1qR6nQnexmieFCQzL",
  "key27": "2o8U4KWmX1CdQ7fUZ1W3Y4Ubd2YrM5hK6uge7aW7y7HDZpYNQ9wUJZWT8R7e4Ez5fwkQ39a6ZyTsxPw2yNmVBFAh",
  "key28": "5SYdjK1QXBFoSFsoGz5hQ5ocSnBTDc3N2xKDLgTArzUJCFNx5YHkFvBn7qAF5iaUeMF6ResRvbXNb9xrijrBN6uc",
  "key29": "5ZVCE66u9ouKyA4WzAPpXRTzbqfaGULRHTAr3rVupnb9NJwwpXeMPoMYPrmB9REdJpwsYoiiL5fAeWNa5exdcJ7T",
  "key30": "2KUT91MNBNSjQP5HmXQ7MwWYqn8u6ohZ5BhTfWo2vRLCAA7FLuo24nJaC9tdbDyco11TPn8MpCeiDAKvss6BmjQE",
  "key31": "4nGZoMZSMcFWgExjeLz4M36iKmGQxPbkTcxujxe8ShEwzQxDvXyqje1CdMxRtuzWDDbbo1nnZsGjy6Yh3DBocTuH",
  "key32": "5VHcamocD3HRxAeyMtPWuEoN1DBbbrbPZQiCiFAzbbtWWo4kFWEdnzcxBhpzA8Yoy9gWt4i8jRwJvz3faEVvcvUv",
  "key33": "1n4QhEFmKroRrgntSiR3XwMokG9TadHk2Mmp5KRdhnPZ7pD4eLjBs6KbKfLvtzySqRGas1FqZAov7rn2WTovcek"
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
