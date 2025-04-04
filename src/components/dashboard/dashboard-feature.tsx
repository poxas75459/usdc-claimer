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
    "5VxGvTw6abM2iR8dwaKcn4SvPT1oPh4Nx15sPb9TkcSovFRQ69DhxV4idXwGofgtcKhsc5xtXQuhUUE76cAo4BA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aaNG26sXiqR65prqWtyyorWJgdQHSGLAWbE9YNy21Hk4RUQ9kphJ9ZM4k3kqJhFQG4zfqBbYZbgWnoWWaaULQpJ",
  "key1": "2bypruQHQsoNHc1c8rbSAk3DKwr5HsxJKF7fmh3NPuf6qFuTutNfxAtkyS4tDGPb6mG6i1h5x4BKE6rSHRwrF7N6",
  "key2": "2cVcRfUE9BQr2nxyny4asV4fVSN3cHWtG7kaa3R8RemLDhxXQU4ZAcDLsp2ZynKtg4KgbckvtK5Zt96tpwPK77Up",
  "key3": "2qjXfNNy44vpva7KPiBQtzZvMbgtfX2E5tHcvjtvkbU9xS5ZhaXihjnsidjkiuAfCcMeNFo11ufChmQevpv9VKKk",
  "key4": "5E48GioehwYE8QHJSzUxZT2fZGn2mtM3czRWb4jEJimof3Wo3rxvWL8JtcR7WDYevMUMEc1guWXGwzGqSawL1Dc7",
  "key5": "6rC3equy6dEX5AFDiJuN5AtxZnxpdHLefAcK3CRLFDWiQEp9hF6ymq4XRBTYpDKaE4GgcjQxRurz1CL66ye29U8",
  "key6": "5hRchY5ybRs1JH2bcTUCH7PVW6KWa2Hdhqb5uvTMYKX8EjZ6JRJcX3FN4sozH3SNoHYdhJMqVe4M3KQqk5TdNZUc",
  "key7": "3zAffo9rqAGkHvM3u4tGHmE6Mnnd7L2WmvKfBunqdWWjjaKKbjLv37o8HMEr6H5JSotkV9gQDWpEqpc62xWwiLhX",
  "key8": "uMVKgFCpQ2GebU7NajJP9zTSMo8s5FdiLnHNgtGxNziWaBYyxGE8Kk9MLuJAAUL9ut5cjNPFA4q6pPbPPBVSViC",
  "key9": "3Ldi7sDQ6LuR4Ts36sgC5YiA5T9Jroy2gSaW8HV8xJCEY7ywLfXDC4DAtLhUL9mppy5TucRCsXM6A4ZvjW9D3bfV",
  "key10": "3sdZvYuwH9w2jjP1HBpr2pu9ccgGBoM7dW5PnpiSebB8GHNtGPwXPz5LdZ2rzymkvqS8LrVibzCJ2iRdwSdL2bcP",
  "key11": "5zzoHp5FEgCP85D6nhsaf3oCKs5dLZXiPsTUsZ9Gnz2MeUoa1zJM7o3N1FVG6ySmRetAZshqoeV9ciZwQJeAKTXZ",
  "key12": "fZuW1QBi4PnMrTAHENRdK9c1QJAnfbbXwPBBm2ZqQ5nsvQDwo7aBttQA2fnbVDTBbnHtnbxxncUXdehf77W3m5s",
  "key13": "3V1paTGyzpfMgVRxJ9JdGQwi8WxtQrUagomGabr9SN6X4JNnMgRmXUBvnGarJMW1i1e9VDQgobpQkT4dmxngBQSf",
  "key14": "5RK5BRTUi4RnkWLEj4iAgHmgaPJqqT1UTq3g4fAqCryXyDyTohYHfr9gz4F3giE8e6WbBVa16hv7NiAMbdrYuJnd",
  "key15": "YTLkqAHnu3H36QitUibBhoJemc2sLTaUcfE5huSDGDhXeradWwXG68mPhJWpvaRret3v8rYC2wf9YaPZPek8VSX",
  "key16": "4CYp29KXTnTZrLxo7NqaaFNrd8PmuJhS9ub2HdVqXjohqYrLtLKcFdpMnh6YJWD4yw2qBkuaVm2kCp5cNN2jBPo9",
  "key17": "48faon7C1WYh8Dj6nH97R7pgy3jqa5mb34YFR7Ran6mKPwjSz5aF8masxVwK7FTjB3W6zxNShCTGdXc1c53oTqzg",
  "key18": "4CSPF5q2z1PTtevDckTuL2ArFwDYzkDZFsHpVhvki6DMe2hMo551PKRnBRZ9F2DBMdcWW71YeQKqwGUYk5D5fFVy",
  "key19": "2pb3HrnxjhEeHvwBdH3Whx26PkLzeFLXFYSQBqpJpCZC4uCo7K77ACfBz5RiS8BZhmF4im62oT3osGYhGbSb895a",
  "key20": "2arJjNFCSKyyd2hHAtL8jtdyH2HjSTmY3AN6BaHiQKSVppAUbLd1sLpfopTgYFdSKVbVTzoavCQLYzoevhhbpMBd",
  "key21": "79yJyzkRVLSr6Ay6T83MMGJx97CgDiaVkJ2X5cfUpC7Qc7RYefMoNXrA4PATGAU73ygpAcAQobkd74LG5x5rujp",
  "key22": "2Hu2Xt43hQGinFPDMbfNhQk23shiTaoeKaxWtjikUnse6uraEZRGu8maqFrW46hGpwWQ69UD7ub4mf95WqzPfT6A",
  "key23": "iBQ2ghkh7xemw4wBiQyW3zznLWawoBdC8GQTa8pDGRhvg7oKYqb6NAbDMuZAt8rwr8WVpFFHPUYtt1oXyb5Yghz",
  "key24": "4VvkGASGS4vC2fQAsNUDceozCJ4HAsU6CvhCx3CZXTzxMNaVCjeigSedAET83wrYfii5MW2NsEQ14ZV34ysaJj6M",
  "key25": "KuCeEkHtfsqWkC3wJU7zETT18h5bHRBNnGejF8h4e2X5TH4c6dp6w8tSoSzqimDq5nZ4DVTxn7VCbPPqUUNB981",
  "key26": "3HNtPbCvW59kkGNEkp59AxcBTKc9MbGDSGnWgChhPvR4UUWD2EMZTUHJXpFinTqytQW1iqj6PKjJfsEaNZzCkHnS",
  "key27": "2e4BozmGj9osiszWUMdNfC6RWFwovX7oPFVShQUvq2SbUQjHXcMqhmjLXGsmjQkxhaCNJzXCVvGVMopGjeTaDcSr",
  "key28": "3ErDrKK3MTimvamxqd51rF4gZ2Q8dY75Ua2trwTsmo9fRBNvpCzyQ3k64xkANs281vxMkfE1SpbrjSLNuZuaPNAX",
  "key29": "2K3CaVVBmBVsscpY4EjbMvBU68a28NARXZnABW8rxbAoxEFHjkXZdGjjpXcLSn8DdVdxNyVQsjuutte5jLbwScoH",
  "key30": "57c4qUeH2Dpoho2Hq7pd4cN5s2H6TyQygLZi8joNg66WrFty81nyRRYPfsW8HuCTRCY3XyaCSbHhGYc2fZaN3G8M",
  "key31": "ced5w6ZPgA1sX7rrygWPxGa2aER9EFVC6xHH242vaTKWmeUky4GS7cSPBCpZrFEfjmpcpjBWuBYeLDbW3xqXkne",
  "key32": "3wPG3ZcccdagnD49kCPuUNzaLDEEVcSYi7sr3Gc8Uko3KXmnY19RPwe7HWdNNcerGY3eB2e6s6v8tSSyYxvtKTAW",
  "key33": "67VLoxTBEq13NJ299LdHbQZGRGFvUUPj879a1BtJJzZ7vfEggVJpQ1r3GKQf6W8CG1t54ALtgiWkV38s8AG9yCmw",
  "key34": "3S6j3cUVmVKUqytmnptubD9334H2Ns4y1xGxwjJfcta9QDgD5i54Vwyh8gJU8XTp1Lag9eCzZqW4hUPSpjMhYY9F",
  "key35": "5MACtTRk5EwUVFBrsxjEdUPxqsNx491tLicGKPrQtCSoitvzh1sPA3m1EifuKvdn7SvAsnY89LpAK74JD4Aaxf1p",
  "key36": "4RYG4vTMmH8mWMtTf3YtrPpWwTJyNCXRQZBH9x8mm4MjHvCQDigsbkWN3dGHHqyd83ukyWT5Q8kDHNZqWiSBCKPH",
  "key37": "4Hmn6a2eZqi2FwB1GmcMkrj4baXG8CiZWTu4YHaRhWHxob4o5DYwpTKFV9rdbABucpHayiEEiFL1wcavpeNTS9rS",
  "key38": "5RPQ1AcripyxzV5RN5kW7pYtQKYGTvurpmQD53JviyWwdoc8ocNWeQsYouND1yr7dza2csanUpDfxXaJM2NRwppc",
  "key39": "2ra2rLhXRYgsVnSKJGFhMCCAaNXJmAUP1enq4LZPiEfn7ZBcFs85SNvXXP9aLBbEEGG38q1nWHGtF6XXA2fjcAqx",
  "key40": "fW1yFNu8RzeRiVEgKMSuij8nXQEps4J4hRYxnUJdS2huMjF3yf72cHmhSyon6kUXfBvNgCMqdvrqjGNeaTtzoTf"
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
