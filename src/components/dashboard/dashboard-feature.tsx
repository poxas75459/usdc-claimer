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
    "64mF4bHXGtBgHf1Yqdg5NdXfsKe3F1GZmYWoGfudzEd3aRv5pAioVQ7wveCsWmXcSBBQGwuUuzjVYER7Ja8EB5Dt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oXziCW1csKJTgw4sCnpnYA6PnRtz69M5ZYAbn1JFzsmfGFybNJ6GECZzphoorAGoaMYiiyjVWXfsiv9JxPpZuwB",
  "key1": "4BFDENT91Ceb2CcNEACFx68ZCXY4hxuGoDmfuS2YUsT4XMi6qjrBZv2dB7p3aT91FHoRF6MZEciwzQKBQVBxWoTr",
  "key2": "5rWtSTrnUvDhkrTSGRSL1tjMjCWB5Lubj3pVZJZQpc4TeScexbp67bjVK5uD7UjEBtPSPLBKBic4Y8gJDWYbBtK3",
  "key3": "XbqHxvcxwgPvML2afobT87jvLXZNzuxe2YNWCA1CxU5rWH9qpSCz1jdsFLCzESVCz9Ziuyv1UTcYs42D9KN9LdL",
  "key4": "Hkdz6SPSgev4SwtuajqLMTodqStUkPSjzEdoFBF6govkpNkfXza8W3fp14f3Tjh3B3LTFtfsTiNCWrNy2ugocas",
  "key5": "3Yk9V3bgdKoCAzb6SyHfPjPUvZRq5bpN2zvxvkaJqbqZ8nA2X5wQBG52JbVEWMLdKP8taiXbfqZgQwWgyLEm41kA",
  "key6": "3MYYZsL99WKZ5tJM47kLpgnhDNufmQVDq2NoKxiAmQTwRThhyBShrqeTKqiymDLyD3fKB9sFKUTQSuGdfwCgMAQt",
  "key7": "4ER8WcCo9Yy9QHFnKuAwvEauEnKv9pHmCaAr1eaqdS51KAeEMeeCxTTc5rAJsdY1pT1q3PKZ3QCFNTddU4SPPFhq",
  "key8": "5jkoQW4DWYWeZWdhWnymtzxWdNg4cfP6Snb6oQRKPYVPua1SZqWPWmtAe1LqJeFfUvJX124p4E3NFAo3WjVEtUob",
  "key9": "4pmkeA2cgmPgZViBeycAuMBE88ogajqvX6kheH4JswUtu8bRLP8ni7XF2WJiVyvMNarJHSQfeYDeucnzfiupbFsS",
  "key10": "K6cVycHt8XpbKTmjPDb2js7tmw1dqN82ULK4XyYMveNXpBX4Njcd6raReBmCT81qhgyFRvUANoAoKNLM2HHkckn",
  "key11": "2aiW3hWWVpDNxdoARyWiGcspWkfN68NezJwte956TciLZKKfVZuAG7THKph7aqWR81oUM9YLZFAFveoazuTDzHad",
  "key12": "2fXhbJ3zf7aH7xSiFKBdCYbc44Zc1Q4SuPkxyof8rUnEZRTPpBW8ihgRrW8HkTdDfUfSmnvURnNmfvb1dqTqUvzJ",
  "key13": "3pp6iUbbBmfLsrPRdJYyRxop8fn8QvSY8kaCkYxieND17MpsjwJbfFAuNxdtggUYRxxGVneGXNaFFwVEkmCPCTs1",
  "key14": "3fncaFHpJNEouKRmazR5NLdGVFZ8fC25myHGQcWDbh992B2WwkY3yG61KfdcT8A1gmimhDLqDG5hdYfmWh8bw8ZM",
  "key15": "V6bGch6ecrL6psQ9Xm2ELBni45TdhaTPjivLRe1SApgVQ59tBUKe1LEC5mnTLHEeumZyMS4ZVjWf1sHoL7zGpqy",
  "key16": "3wFFQDS3F5r1qDbzAruzrgZ7UGTkiBwoHDW89chMyupmyR3mseYgNG7ANVH2fyawVd5YwQMx6dQES41Vc2w8JxTZ",
  "key17": "6rGDiDcxX3UxPGK9v2FSazjNGRcAtj2z66wSqTeFFJdr3ygM6i9mZJwaGvLRPvCwHVau2u88PV8ScAyUWDrgQrM",
  "key18": "3YGrUYn3ggP6dehtptRWJMNnUG7NZVZD6nsKYJjC6AuiLqtKHEnqC3UWiChAtUpCrAx1v5yo5HAVpBMCqG2XGeEu",
  "key19": "3CqpFKnMpm2P5dwo5aWhge5GcaBBCWQ2NBNRS1nj3UoEvXSUw4pxLhdHNnCqzEo2A5h4RapYqeREwhazhvVEEao9",
  "key20": "54Zz4HTLRHxTJhWMV4igcGDv5DZw79ZLEcH3NhnJ6mfnPU9YUWgwBvQtkZS2a8vTZPgUMrh5xfYMXEJU5Jg4aaZg",
  "key21": "2jXRB3ZUnhTAHfgDSsjDwCm3gAW7yU11p1kZ5mBzkASGg6hpTnpjDcSZC6wAdnniFi6hW5SBsth5cCA9PYHtG5u7",
  "key22": "5btsuDinJdisXh2v6FR3AVzss5br9BsGZygS8JXSDdPqP8bmfS7LEwp5CFZWLPBb6tjiAcjaBo1gXkV4ABRTom9x",
  "key23": "2Z9A8NFcAnNMs5mcDJpzHWJAQG2kYo1C4t5NAmGYmPTvdGEC5J1b9WSzmaLkkgTSSaeRwath2HmJLSGZTaoaLYNe",
  "key24": "VkbXc3F2LBhT3bq1CPBJRbeURPfxXF5QWGFFnadd4gDrtVgGikkdzHveCjM1Yx4r2SP48Vs6mDCHaTQM6pFSEiy",
  "key25": "2MQ5ReXxWjFja2PfgFAM94snWfehm6Kss24jJhqd5m3ejM8P3s4v3ajC7VFjeQFHi6YHjFy66PTPfsMDuz1CpwSE",
  "key26": "45mtG6fS8nhMkyMBXwMe2Vj7mp6HHfrRW475DX9X8ieh1w8vkfUdVohkLUgNts9LWAwwPF9gg6W9bnvVacctMyFj",
  "key27": "4YiQkbJGDt5fp1RwJuLHypJUNqNWkbsjuVg2ddqQjEvKWtXa4jbNRgVKLTsn5yf4uTvjMmfMmVTh2qkF2zBAFTWN",
  "key28": "4tZcUR4BDcSmEipvtVLnvtfRUDpz1EJJfjfvSD5yrktGcpe3pxw8Mdetc17NH1v6pXMiRZZoXerHHiaaA5XFXmj3",
  "key29": "4h9XtU4eHup6w4Qks2orfZwx6YSPZYFjgyDnr6xfix5KtcPBiXwteB6wPyz3co5UGyXXzAHd9svKz99qLUDn8YL3",
  "key30": "4HwTs5qhW7ev8V4yWS5GWZUHRXJepAx6cZrJ5ZbymCGVynfy8xy9yMaHwtvx6wG6pPftaytMTM4bnMN3cpwbg33F",
  "key31": "3yUGbZke1i3C51inKWGdSpxQsjkJzmGz8BpqkYBycKbSsrNzTtwdhcezLQY8s8FKo4bCGyCAzLYLkUtayGkVYqwZ",
  "key32": "44yKWewfuopPKUNcX7uog5xpEFAQB2E2vEYRLi4n3h6GgJHdAU4fWvBgEwMQZDzgi5YeLXjoNdcdM7zZh3FhNsH5",
  "key33": "4uAQnLJphfhYrph9HvDPLWDzEcx2wcoHJUKkgybihT7kFbxhukJ9gAE6JxV3FyJuCL48ZzuQP3wKL2JuqXmiYysy",
  "key34": "amTqqMkTsbMvuQGGrBmWLX2iNDnuHBksXfEG3V7ZQte1obfE1YiWNdZXWwV22c4aBvbnaYJUpnsVVkGjUthe9gt",
  "key35": "4o6BZcUguggsDL2DK4K6Rvgxqsfg8E63u6VZrRRYTBLGQaPkjgLfHuFdiuToKCSggmUT2C3Pos4oUMXCrh7M1LYc",
  "key36": "4GVxsWRhFinGNo6EGxK7uT1k1zHwXdLadYyTksrAFoywFTE9Eq4xmT3nqJoTDWtTFfxK93bNQSqMh6fNXS54wE89"
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
