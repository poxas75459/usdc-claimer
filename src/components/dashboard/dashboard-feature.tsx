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
    "4Boc7SAr7snFqkkXfpuhNJoNyQrB4UCEbYe7hj84Esmb1DGw6iF6u3ePwaM4aazNmAGzVmpGKNQkNpfx8nVB49cT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45nXPJASkd9sEyf4bQYbE2aiVbUWrprVtQckBVsPZHUQtbYTyM15SzLBdSpYiNL2HyEjmV9XBxrhoxkfJDLTQRm",
  "key1": "2pmPqoLuZRa8iqxuh55CxkTxFQkS6gfaCSRhURVTx7hfRPorttqjhNx41mpvLaQSWGDSPUPaWPanD2GGxiEcoti4",
  "key2": "47sYDNbrhtz86srSLZqXTA3GmvND7aJY3Tktr2SrQA1ZTjeigN2JcniDpLtv9X6D6H7X8qFNZtWBgbFt1PibRY5n",
  "key3": "5TJK7ALa8koGetLMCkAM1xVv23gMGmu5wik1omadrJwhdLpRATaBMyLxsRp8EPJ7oe2vc2zRibBT3azCzTFDn2mw",
  "key4": "5PGbahaxmSaf8BCC1mqrge8qGA7JG6GadvSyNmTWh5bdozEdSDmraC35ruLDgsz6UgNb6MthCbzK5ERtns6XrDkh",
  "key5": "3XL4QHdFK6ymBya8QiSvwvHdiBwHJXpxbbqhg9r2U5tdiHQSRZQDUxEVNJnwJcBj6coh834BZefc8PUopNnaTh6G",
  "key6": "3Vusg6LMpeVwaoDJdEbSNBMfbVWerea7e2JuYcyNdA1YJizrJFARixnDyX52JHK3wTAGDVwSHE6wNjWMb7hsXArL",
  "key7": "2nDa7T3gKxrhwk5VYC2i6dRK6PktBx5SsFGDPWgUPqU7KD1jTWrZNP1TZxeywrEj3c73sP7fvfBBbHFuiYNnmN5G",
  "key8": "25mV8mLu59CBvH3qPPrM2LayLRLktLqer393HyQjz9S1wwTCQDaBoyD7guSZG9McCgeaLJArdWJC5MmeBYtEW2wq",
  "key9": "56xZZ4xSShoXvzaziHYYNc99wKANuTgkKs5qWFbK84vJceDYpS5JKkgWR3NtTcA9LYjcsFCj6tN1TwVmPvpXHxCK",
  "key10": "4ti6iC9fZnZotdzS191bwfCnRmcmitotkXBbRNUFfowhwL7np6sCgpDePaFSGPdBsNJTSc4dkuMeb5hVLaikeabD",
  "key11": "pUXCt9ws5Fz5GLMXNdu52hcCB9FvX1bxFpHjcQBZx6mQWAsybrMSA8448LymF3y7dJDri3Sioho1jJCUq3WCg1j",
  "key12": "38pedkrPYwrWuCXGbF3wx8yn2Ya1bdjbwMnS823MtUBfmTyqqQdyHrzAUUhUsEyjRNa4aAqt91VvwuGnoGfKs2JJ",
  "key13": "2uZpCmcgXphBjLnHE1JcRtqAEWcCBaMchb1oPsbim1ruQrei3x1CyfLeNFPRPsNGDr1Vv1PvjhWw9z45xzHNf3Dp",
  "key14": "4KxSQ7WdMpFBpC1ummy7sPyce96h51UXXntMuZdhKJ3D3Q9vD8UcEzcNYXaVnYpDAhYixuNESyrGnC1HmiVKe1hZ",
  "key15": "5XKNePJ5EPp1i3RAdN1nJ6APbyyhdQhzJGUEjRAV9Tsv4AQFkcpdkv6mmiGjwdP7pEajKo6E9nRsjJP5dHYPN1rx",
  "key16": "52DqxqYA1RPc6rGnqdZXtXMxGMAV2LPUppok9Un8EgK7MgiPGJATEBxH8D1JmfySmqh6TyML9Bxj43Ep3PSLKLuh",
  "key17": "3v6gauTPpAmZnMDHkoQCFvNNbNXDaJHKYC4e8jgYAeFNfbjQXFmGjb9kfDtAHLikr53hktsrC3MxMkpgXG4yTXe9",
  "key18": "2GEXQV7WJr6W6UX4FxyCVN1k6iAcWRaQmYXzbguMZ3MX8ECdeb76jGA65gEJy7HTRodacvZK8TXpzWvC1ncM6yw3",
  "key19": "SeHDPxt9LGNNV8m4cZG3Z4cz2q2xmfHUwiSq5on7sfaooMidSQwUysrU3rtonCB1gUDDQPTLJ5K8ekWejYRyVHq",
  "key20": "39MLTQoJH1BMK6CVhW1wwvuUZM8uzoqyHGQnyPjXT5iiDccWC8bryGz6kVLKScKC5trAiEiBQbvVqT3aDxMw977G",
  "key21": "869LAbKnobAFFffprgP1qYJW4BAzVLeVQh9Q52qyqYqqWEWW6KSt5938ctAotcdyw8Uo8H8MT5F55tMcc7yMvQy",
  "key22": "fypaHjAvwTzTd8CiGh6wnfUb7RmpxPTrYkQfVrMDbzTcwkMDpT14KULqs1CTaMk4PMZ2dNYmoknGxQhaS74fTnQ",
  "key23": "Ryno5ZGWqFZApErHTRvfYhY9fYktAHu2cZFWRhdGUboZCj7J31K2dnvNuHrRt8tNk3mqTAtdVkRWf48LLoZDUe8",
  "key24": "2cwa74zq47H5Je1jn5JZtQjQ13q6ScboJM6uHzV5yF3Dpmd4EWezTDDf8D48atByhkmfztGos9pQkuYGPSGANCg4",
  "key25": "E42uwx4UZycYymHkuogXfLRY3nRhk2aY2z6mSCL88VbEbEdhRiW1UZigUG8khvAiB3NCmqLUFvHqbqsKfHLP7j5",
  "key26": "4UnT3dfHzw31bQJbEVdjk5P4PNdGPwydsY9Dxkq8w3AQNh7s3z2Lxi5nFdxaAgsBfvAMiGtdikMXwQZo2V1xMst4",
  "key27": "21MzhQuPBNE7aqLejp2ntSb8LmdaMYzRihLSkAWg3TLRUnc8BTi9Wt61xySxisGo935vCdFTH3i3MrUnLaNvGh15",
  "key28": "fHi3x3uJPWDoUE2xx97ELbvo36MbcHdrcXQkjHKxskGtvXvt2kvVPCoFm3cTkq3ud9BHXJwhQVXtVWV1CY292hi",
  "key29": "2JbUX6T94RkQ2cYYWxyBTx3n7o4pWyc6i3GM3XFRxRuYn8yoRtFoqZa14xSiADF78ZKvwSmg3jxVvLhopL5XxLzg",
  "key30": "47AevxyDSPDJFWPFc7u13jZLmV3b6afi4AarY4mRbqmShZCZzAgp92ieMTw9oFd1BU6JoYS3Uc31wZBjSegQiuuF",
  "key31": "45ZkgjQBnNkHBYKTp2Qmhk6pq9JVpNbU8QmShmowmLnvZg6Wv9hEFmKB5giagWMfKXtMJU3vw9n2Wzhc95unJBcW",
  "key32": "3yJmruRpRtTvpqiXKHX2ypo8eScdFRmYupcPMvWBePjnWZT6W49xMGQJKKKwLX3iPfq5AELJBqDy1UoU8tg4vcFv",
  "key33": "3MVeRQ9bB98bjonPsERrsb77xcBwtAC11EXctJWJFFHLMZzbRfCczCFUsMu2YYPh3C6BCqA9vEtp8UTafRwb4wf6",
  "key34": "57frABxtVpLonT1WiTFbpHEKvZP94LhXEMAMTqggG8fyYVCkWiu3Ca4BiD9uwky5NW2sL4p3Z4eLn8w5sXAsZzm2",
  "key35": "4yxSKcmLxjCq4fkwvBnm2YLKe1fWSBP24jzcoo88ZXSffaeVBmvWgf96yfXZLRfNNhoGxEnbcwpvQs9hniRimDym",
  "key36": "4CQddaD4LuXPdJanZZ1vnmCEfJHuA8mttZq3Z4MXPUfA7qEo7hVECfuCn5UsFoYCVHnEWcYGKYU9HJaP3JYrdvu2",
  "key37": "3XQDpEncpKhzDs4AWnpsKeercC4XWFtowMe32uZhmwXhaNBk2mZwpZAM3Xp2nXSgxB7wsgyKh6A8HQgEc1jTgsV9",
  "key38": "4dwZFcpa6NvoevBBBrsU3BgxWbgdnu3zZF4vvu2gSESavethT4o9QHKnkMue61w2BWveSCybvdH7tSWx429DVJ1R",
  "key39": "64Z1tNfQd2wjg8vBzdJuM8JLfRBpaLZTBrregZywG6Gajj1MjBTxCYN19PW63BN1zYp8eSrHv6hZvNs49Xz4QE41",
  "key40": "5ExnErF222JGYd7MCxEKgfUNmGMAkwz3wCh2AeUpuwm1ZPPRT7ucsy3stwe2AYrvnAsCpRVLT3ftC9ijA87f5bv1",
  "key41": "4xot2CxHGGzehtqetW4Qn8vJx9xTtVq4JzLi7dKyDUqLK4MxWvwK2PPY2Qc1w3hyb5A9sWsFXUo3WxqGHGHB26uk"
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
