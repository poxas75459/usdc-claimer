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
    "2G5GBcDYxe4nAH7hbPAzvgEyDFb5VpELJK7sgUvosa3MfnLqLPVkjJtSQHhowgSthwFZSYBEzi9wRPWUPkaHJC2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bQD6pYxGBKx7au37UfLYUXPXSLX2FVtCNnBbn9qxKGJpGzh6UokWVBiuUZFvCR7oEgD3Yw3sWg6VQ2dTiT54HbE",
  "key1": "3cY4aP65YAQsW4XWUaS6FtP754eNr2AyHxdaJKCvLizfWE3zjF6vy7QPG2FfbmnaUcTZhMLUaKhKHhHgpxRY6Txd",
  "key2": "4D2y7L8wof4Xa9VZyUn77LJ4uevknSsJZ5ZhS9qExb6qtCoKJb9uwRAuy4uRZ5otNgFv69W8V25NunBhH1tXoVmv",
  "key3": "52jtk6gxH79XPbPbBhqHunWrtJ2yfyxcqVFDkVtDrBSkafvhcnQjF5vM5aWdiBXHAV3MeKPRa6kBxVRnmce8MiPQ",
  "key4": "4LYcKWsvoYFrUpUJDsQWE3Gsxa1L4xXA8rmb7SpPbiTBnMi1HyEWf6hv2ga8itJF8iurfYEqoN4DZVSnGpRtvoG6",
  "key5": "3vvUnbPybn2eFzHNjffEUvAhNTggQ899wJqnynWzSyabmZt45L66SVCH6LLa9Wz2yLLqFHw19oRrkhL9uyYdJGmN",
  "key6": "3d6AiESKxuVH4bKJKWoy2TZZsa7pfwXQdYpmwZtP1wkjtnZMGZvbANNd1nCFpzdyFCowap1oXqiiHoujFc2ZRNML",
  "key7": "4MDZ34EVegw2BgJuaTPuRkCZGvbutvFhwGVnpD8EQnLpbrjtDpVmNmB3rGQsCY4pXWhJyQWzmacj5AtGCQRz13AF",
  "key8": "ReJMpgk2S2oZpjyhWfUisBzscDuUjbHkEC8Y8jjfEkpDq9KhPyAjQGS8Fi5rh1EC4iYYx92X4Kar5WEGNSJR5Hx",
  "key9": "3B9QNazFevVK5xa11fc4dcTqBeBSMFrBrSzTMKsoYWv7oNUFbZkJCzMwfpewHZwPCsRsUGhonVJK1r7VbjpXSxm2",
  "key10": "3KVDy5pLH9edyxVDrWwY1SoMZebUHLrfiaK1aqKi1xRFY38cesguSQ3uJmh1wtbH8uAMdCM9TMzSEQ6YACpPaRui",
  "key11": "2f2kP3c15Q1FbmCSXMfAG6q5Q2u6DAXczcvT6CK6Qy27B8QCYcTGuBiV958Ye7guFXCME4B9MKoYcmxhz3zFzja7",
  "key12": "2mpLMGmoEHMBJLz7somc4pu2eWapUXVNyvTNawmrJoaqNzpfde6TvBwMFwxND3o6xcUpDa6QEStoxZ3nm6pdYbMk",
  "key13": "1nJf3urHoCxHafGFrxQ94A7mMZjsnVdEHWJKLHk1G7pWdmEXJdGNW7SFj9NixPf35EhqnnPXEGdzt8skb3HyEt6",
  "key14": "4NZybf49Bfi6WsQBzaAkm6oQgeM5DEmcQqDQBWBk7m6sKWWRH2EA6jKR2tbE8h3UjG4piTqtJvMZ2H54gqs8AeKk",
  "key15": "4g9XHqabzYPaWkCpmt8oMVV7wf4KJVMsvoPJRCkkr37LRZB8DZtrkGjmnkDDFyqVEe1BVoJM61UDtSuUfuNK1TDY",
  "key16": "2asPoWpo7S4uPxE4gZmNo2M1VtGEz99ZL1K9YCjU49fRTy3Ne4QxEw4pEu2fwyMjm2GmPzt3MjC3V4mYcFthk3kp",
  "key17": "5K9bxLzBmBN2JN9AbWTtbwb5bueqm9H87tidHLjubGDq5xLUNe2sncAMSx4JF9ucvpuyH4hmQgd3EN7QjVT5u8AU",
  "key18": "2zghZYwwiaWwxQcx5Q32oqtYScMk7SH5ti13TkDhvySwZL679CNA5FjbXVjoB1uGbM8kAuhcm1FQcdWmVHXp1JKV",
  "key19": "21LuYWqFLjpKhFS5vztTu6YBbf7LmDKbrKFQ78ueU5nhBZc9HeCU2RQ9JK26cQ1dpirjfY9KcWNLkRDPE6y6QsNw",
  "key20": "4U1DJKaRkdhcJGgPPjBmotYdsztUsq8dnB8zCUjF22FpHYda3MYpG6GPPiioRwWCPKnxQtDbTC68dqrCpfzZhTAh",
  "key21": "29ta58SLdrbFyRtQF64m1D3gsQSV7a6toEGNowSzj8ngff6nQ71wtE6Lo7vj1deeDF2LnFzP3M9TmMDh1F1JPfgj",
  "key22": "5tVT6Nrvhqv5W8td9efHZy6iPtvwEHLhViGTEp64Q4WUwqB2Qrtp5GuMz3wftcR6HPLS9fNC6S9Dz3yqaF6oeLV8",
  "key23": "64pMj29DMnzvSLnyhLfRzNvkPHdf9aoCA1tvUXTwp82TwQNuc2XSpNhhcqjAnzS4m8gXxv1QGafA4d2MEo4xe7mS",
  "key24": "3czZbHZH4zSQkySd49ep6vMVDBCqhmAX5u5kiJWdemcvw4WLJNe24GZ8XPQHPybVwQUtJqYpJAZT3mcKtATd7u8j",
  "key25": "3AWTAqDKvj2Zv3Ny32jRKiis8baGHXVFrDpxs3mUZv21sePNYNbD56e4Fiha4UUh8j6sqnhYBDVqbq9XpvhD12tr",
  "key26": "zBhsCH9AYEwSLKeofC5KmYh91E43aqKrdCX8eFCQ4tHqZHJ2cvK7PpT76zdCXzTg3YwUkTWpWKfUEnRDVB8hH7z",
  "key27": "24MPv4XHrQWkp2YL71CrFbbJgCfr93PZwmBE5e8XfaG3TriEFsybxrS6x3N7oW7Cqd6QkKaSrAv1ydyyWaoFGhc8",
  "key28": "562bQKzu9x1bgKyg7BewepX6YXoqmjJyi76YcqK94y3jrAUFa2MHxhS4edc3FKox2KSCymjKvMfQyebQAYSLp9m4",
  "key29": "5yvysZLVyJ1hjusQFigWnQor1VELV7nfhDmTDer4zypyzm2bBVMnUJpSchgDbm8JypG2VjpgKPTHj4zqxP7EfYds",
  "key30": "dMTZwpZi4ruBfjNfqaGsJBsXLNp5bK6PDoYmHNKQ2LrTFvegPKfw2umm3Cv88XATaws1Ttj9SJodS59jcLdj19q",
  "key31": "2DsEX3fSrZaZnbUoZcQURpR75HmSAw1hUBR7MuggXZsg2c9jx2GB2Y2a5E47hxp7VmcM4Mrr2pcMGGJWoULrR2Kf",
  "key32": "3AH1X1yEHgb8tK2DFd9sfDEhAYCVacBkijNATYUsP23KBFeS4TXcE6ewJ6qjZJLc3tNXEcRAqMPzJG5wLAfBuXxZ",
  "key33": "28vsYZcfUJiR6bJEdd3xT5q43ajHyLMGMfJsbVd3JasCJdK1SmNw4NPhpieVLvmiE1RpdkcV1jCMTYUn3qFy2Mb1",
  "key34": "3uKiHAdWaXbjNQHMDwE8Atas5fbPjHAFdhLr2K91wBwR8PMiGmQLeJvqz213giM96qsETx1P2GkNx2BW49D82L3z",
  "key35": "31LHydXqkrZJuz722cd382nyCPzmGg3v7HXZoKMFsLXQrU6dRqokvqajtzyEX2t3MPnYqKpv9HHatPxek8p2ZNQH",
  "key36": "3t8L5bSNZY5cHWwQVj7J8YrVcpydStxEMWgPTabYzNH13aYEA3ggEgzHA4cMu2eTA4Rx1xgZWa8vp4wqFEPUWc9i",
  "key37": "5AAHkrsyqDGZBxLdyqxPayGHu9YfQ7WvRibEaTuuKhP9CrEWePRGiiWFH2WKk2uxJ3EGS2pSp98KKFhE9bygb53Q",
  "key38": "5SFTvT7zWtCnYUnzPT59RGLrxdRcuisAfYohPFtiaufwuXJzHzaaakEy2LswYmTHNP3YAKkinhQk1zzt2fbmbqJ4",
  "key39": "5SoAxPQgKGNTgmvnsV86kZJYdGYNfKDDmyu4pYes2sT6FHEsp9ebCUt6fkyotXHrkQBayEc4Gy4ifkLZGEUrhsoR"
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
