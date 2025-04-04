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
    "daFt31A6sch57pHKVZJ8TT3rV69zvwfrM1UdZ2hRQB9LPftmd8e3GP4ovZZGk6NSE971Z1pf5mLvr3ZSCZPmoKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GCFrFva8o9XjuBwpn9aBbVmjkaUiKgnU41hkwB1oBRLsx2vMgYo6TxRj15NTBqArvuvvNYLJrhpR7KBLuLim9nW",
  "key1": "41jGBg8fEusqNodUz72r4i9tD4DnosGCrcovvm4Vi8u9jbTyoGP75RckmkY2ngphrxi35qg7jhmCz9sSora2ChPZ",
  "key2": "31Nm1FGp913r43oSZ55KwKvNi1gxTpPnYMDwBBSyjYNjEwyg77hBnm4hCU1jdUtEGkckUQA5yHNeUmqgrH1PZsTu",
  "key3": "312AVgtBZ7y3YhttnobmazntGWtCe3pJWiAYr4weNw4fSeobEdVsiMeH1Ys96W9Si5pzW8wuwqSTEcbswffzvqJv",
  "key4": "53FUXDTMWUyoNn9svEo3vVWYEFAnjbuNQLejVhc3gjEsHbY28LVqtzE47ZBZQRhk8H7vj8UVxQ3pTMWTrGY6virJ",
  "key5": "3h6JpMMnD7cpJpfiD9UdgPQzTKPCQTNvycyLD7YK1CXfHYFbcjLmhWUdzjzdUGyih4bRy6Caf3pxcegSapcnNBaU",
  "key6": "51y3LvyuErefNcxxQ3smkcRAkTjmwvmHqHfYnAkq9tnnGzFBbvBHHq8dpgzsXL6EVJKuimP2Dvms6a4rLrw4hLLz",
  "key7": "2xLAS4S5hM93YTtA1LnUpEdf4TmDBUV2wByJPxxbcKBjhjbn3BYKm2PWVEVGN1Zk3D3XM4LV6ssRGftQyFdXA8aX",
  "key8": "37N97M9izjbZm4JmKcJF6a3ki14PKSVCZNkbsJnuxVfkmf8VtywNmgwr2eLaMoAp6YfPKWQZA31FjNpFf4tk2H7A",
  "key9": "5XXaSaP5A61ZgCuM3T6f74KdeDXU3hSUFvrWZthiiqSG4TGRZrqk53ftePcJxVxsMNMx3c3ng2GmgLBs8UXS9uFM",
  "key10": "2jmGDH1s282Nwz7tVQE6oszHLNb4no6gGJK1tddWbfw6ibbReZ47isbPDDMuQwXaHrMnppJjeShRZEh9rS3WqcmL",
  "key11": "3NMJEaXXYEQjRo9okmTh6u2RcgpDXycousyMoh7Dyucy28oQt91WQbTG91MNGAecepvrFyRxYwHDK8ZfjQBXhph9",
  "key12": "KFn7ymoVB5tekdF8ips4PbtZmgVfPuXXC2kQEGcRz8WAKfJ9xkoXVPuogQzbSRR4HGWgcZkDR5ZS2NEDsSUG8oj",
  "key13": "s279V2BnYjuEPZCXkmxDshzSQN4R1uPFJRxzPekXvJ2jRPA77ChPH3rmSzAvuUn8yENmihxX7Y9FdvRqDoUNb5L",
  "key14": "2aHo4CSZW1a264FP5oNy7UfzBSyMbYHnndoQkjWgAptnVo2tti7W4FRXxJVgyouVcgXy8xBSNMzaB4en7MXXRXaB",
  "key15": "4zjN5Pz3zAJB3qhVoWN5S8MUou1p5Ymwt7ymDLtHDWQ3wvMn3UdD7JHNZioQ1i9baKFAsnRPVtnba8AUBGHzmA7W",
  "key16": "5YpTNWo1oAc6gU3XFs7QtoQgeUgNgdUcx8KMTLTK5he5KfpQ8puwjJL6L8EHar6bdMJnHkfUPHtm5ZmqTrG7A4Ek",
  "key17": "4d9TsPNAxEBvdrywAUHTESQtG85EhnpGzC4Q8z6H2NFVsJ3PNzqAqDYQjzjzgErWVPEREwjWGvsuNhyuxYsYGo74",
  "key18": "2oeXxukWAE1zpw6D7JcjfKoSt3kBauifkwQ1A64xFLnqze3tmsxufTkSBAyu7RuRRvvVVxVgdxp5qutyVAWc4pYH",
  "key19": "2ytdDktw6tmrxwwyRfixzVwRZGU6qdjpwQ2BhL1CEqBAkifyT7bHVkaTFtx1Q5kPXtFzgFLUjMcZ14ZMkpSbDs42",
  "key20": "4xEJX15p51QHrpxr11fmy1ndB1jh5ruHFh2YMSbLjfHz78mRmxBZoPDF2cfpi6GseTAyuMhVssMFJGHrg8eoN44x",
  "key21": "3FwqbBfMzQBF2P4rGxzeLquw18FKspAXTjfk7AMckZaCXpajrZrbLHoZM1JGAHknUkARWXpJ1MQcqg8M9T952u8G",
  "key22": "4qyqK67F5LQ5MCzhfpXG4CmKswSrtubWSVb5FV3vbDcmLuN8coRWuiSdZxL95TFHxQkFDqc7gCY674zL2gmzvBun",
  "key23": "4zPA16b2XKE4ei4UjyvwsXrEM1jTtv7N1pF7zPhVgzNNRFKgKDhNDgPXPDLjEZyLcmYAgFeS85V3GjPf8e5xt4qo",
  "key24": "5xrCYNtZ678gU7Uugke7kxbVyg31jGWSTJeBHRTS7sF12LWAyzQKgkUrK2ZjCjdgAHnTfoaoZw1gyfxrjJ2bgVZM",
  "key25": "5zt9JUMc7SJpmCQSTSxVHKmiiLX2zwkfA76HkxdTsLFpn1Z4anaQ2tNJnBFGX4CGgHAKVK76KkUxq6NtFPzVey8W",
  "key26": "12r4RnCdzprsLMSSC4QHVSm6jd1BkbSs41jEBuEs6gsRGyg1Q8hhLtygiKe2k2UegD6BNSQ2VSbFeFGgjLv4EYu",
  "key27": "51fub4ChaZA4weyqNwprx2N8KxwmSCqRcFqoguSVcDrBjA7FZmuvjreMmV3F2q4y7Sm3So9DpCHW5urmY2DuXRUq",
  "key28": "3EtuYoKUAmy6Qayzun6Qw1HEomoz9h2JTYR1EMde9cYWNSik8ZHewc34mqsdyfw5N1AxCZeMD6dASfa1nrwvuuB9",
  "key29": "5MjSZznitRnKNW3jonyeVr2xc1QxjJQnFEmN9wEq41KvvWwt1r8f543JuwHP2XZRewor3orHe8iwkXFVqgFxbzNK",
  "key30": "22vYKVzczdAETJ1uEAbZEQU6k6UGU6DkhSfkCoaK3QNaG8HESRhsZSLMX23FNPDW3j2teEoE6wTwP7bRq3eJWWkp",
  "key31": "5qza66AcwmmEUjurCjkzeh57woot2mxrnCnrkyJjqvA3ZktPL7LX7Cqsz8LztZBsyvcNaDvfHwGmBe5UpgumuF6E",
  "key32": "5Cm3kp9x244fhEEurw6w2Y1tkW3Ftk1v4LVL28yo2S6p4m4VzdcqZ5kSKSAyKieUx23mR6z9UwYgfMjR57MDx31j",
  "key33": "2acde2h29ndUCRe9t7tnRhWG5XSsTt2yPjEUTFzViN9y4u7wAD8f1FLtL7qw7mJhitzisSUe3NeiPNkPECp18fn9",
  "key34": "2RZ7ATaHCKd1quS21F41Qd9MVMqyszxs4U8YvctSPZcwLBPDALWzvr6fxz3mbge9Cu8dH8b62AFBAmgAsja8z6gK",
  "key35": "5R8BDQkAWyKWt8SHb61v85GhU4vThsZ2K653ozdegh1RHndaBE6d6MD4Syje6ZnhxgbAUsJXyeSmBScEUksBJcCQ",
  "key36": "eBpz9Yk3Mh7Cf3znPgAXPwkxpg1HRnY4rmD2NWnSAoCn3en2iUBTACPUFPQaeBsfHQrZHvcCRkLJ1EYh4ptSUtT",
  "key37": "6iwGQvzcjf5oUiHoyQr9qo4GoZMFayHPHfET9xCzvWonxDo6YHnTmmyvYSwxWA3Seo5j4VAPdRLcvhc62S46zNg"
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
