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
    "M9BEntiVbnaqUsrYJiSHgR6h2jAoctzw4UMrBMXVx82xVhqYYTjhB5QV7T8DNgQfvMuzP9AUHfB4v5csPrSXuhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L1Tir8nrscYar9nS7opHTfGrmpAQN5hcDYeDLaSW1VUL2YJzjkaPqmnDuBphJsmL2ppyVoHZ4eLuDtBAJoxkfye",
  "key1": "5iCMUwQxLboetD5j9MtdP1hjzFHhP87C8u2NWDZr9F6RisPevxF1qr5VAwCGhPggj8iXmQbSnkjvQtqL8AmEjiAa",
  "key2": "3TRcBc3CrjG2RBM37wmAx2Vm5v8CtWpv3BYJXG8Wcmbiw3JxmauFXRx6FTiPnFXJFgi1WKZeTa8XhUPxBoh3FzRA",
  "key3": "2GWnKxgQFQ5bXCr6Le2C85C8WMsxTRiJsn6qPQy9GcdGa6LDX5n68eaAiM7yRsg7c754XvpqBq7Yu9pGn3QicFtD",
  "key4": "66RvtoNL2iTDfze1UpqxdfgN9aRxXNY8D5wbANqm26dcAQw5dKXJoqhAvdx3XnLYStFCL4YYdtL4ueX8V55S8Wea",
  "key5": "jkx2L4TinBXdpRSDeA2XcwcVMPNLCZZyZcBFQHyHjA4L1ReQHsK7qysRHDceqbQBatE1SLmtQXJsvvNcahZgewd",
  "key6": "DqrZV2djmVMQvFzojcp17Lt2mo61axQtnCtUP5za5XPszBHsoo4zQ5QzR35NoYuZJ2A9g1gLdwvXb3r3ZnVJXXU",
  "key7": "4MxYvxnd4L8DMuGpkByZ1iM9LxpUjWQ4Ef8FrmsW2qzgBJHwDB72r3hxYL7heKsDCSoBHWBFbtxAHTQn8WXnt9SH",
  "key8": "5T89UhSjK7QAqNbVc2W42aR7CVe8qdbVuyPZ88DRmdS1UfWKqV674K2tTpJfhU9yL1sHrksoQytRdeeVfngE6DXq",
  "key9": "4LvA3W3VNqLqG4RFesx8htPWyddNorvTeHDFczP1su3aSTBbaAK1RMQAymk6Ee72L7LitbYZZ18mf2dwwHssEyDn",
  "key10": "SsLumeMDSsgFUwP6FetaHHmvkCynMykUZoF56EfiMESBgLnx2WqrkHYBMQCnvgczBpEqZjMGgy3LoUQncBn1GFw",
  "key11": "27odsY6z83Cj7LhpYAccj7GamMuHQVyqE9SR8A5CdxP2BRGhxcW1u3YYXm8zHCprGPibxfPYRsJAaY1Mj5cA5DPG",
  "key12": "DQHAnbiVtyB93UdkBxxFhpcCJD1VbmL3Nz6LHzKEAJsQH79aa1P6G2xmQQNHnALmmnXystEFgm3o6pxM82P1PyE",
  "key13": "5x1SiqGpcBqHASfufRFntkRdj2NdFppGLY7EssVuWWZG17n8MoeGt98SsyPhSb27tZKWLC2u3EjkayoHbkzKWEVq",
  "key14": "5SYWtyT5m4AMhEZCCRcR68PtH7g22qZ9JN8i1YFpNnNHuK7spyERzm9f1MShGJG2Thj6iRLzLMh7SoaRAGKg6n5p",
  "key15": "5bAWKEoM4DbYFzMxduJEaqxxgqgvd6fsWs6TMgStGXrCXmGHihy9EqpDtc7Z4WfdjH8RnVanksJnKGB2Z1hY4LP6",
  "key16": "3WonvzqqfJxmfwgjYVvvLiwVaUwwwUg4T1FGXtPKK2U44S5xsygb3czXFtuXMVdwdqwTZjqaypgfG39x2kZf7vNu",
  "key17": "4feNSAoE1CWYcwZnKL2H6EEX2ZWNemFsaRwE8AUrr56x4W8gAJJAkQFWaRHzBthkL7aiDhWpcg8Yw4J3HQi4NsoK",
  "key18": "a6JqQyqbY3Sf8A9nNA2C7bui2ZCHwNtSYnFuJDvTBu5ZETYpb3rkJV7kD2TZzmutWdDgEBjE9MH7ZGPJ55SxQ8K",
  "key19": "3Z7m5b3BAJjXP6efaJXQN7C9cy74z22xJr2XxM5REG3n3fPPF1LQwo5ynCCgoJeAvQ76vTs7qCYMvJVjKB34qPyo",
  "key20": "5iJbBiZnXC1htp1Rtf8TvuKbQtiZoEXzorj7TsHN6RiNGZvtcX1iwTsBqyuzp4xt8qyQg7GVLVWneMh6gFnAEUFT",
  "key21": "3kCBaprDCDhNUHhzgbFukMxwng6HBFv4eqhQ3HssewGGrgoiEyc75Mwzxto1cjGnEKPPBV8txGcEMnef5DUHa5NY",
  "key22": "2DmFJYMpPtrwE63UrwemNdcA4FKD4oMCqnvkCi38z6oKiVYm6aj4zfaqPDM6xonaWNZq8a71XTFHrPw5Vsrbdy4R",
  "key23": "3imbAszmpFmAVZGJyYKqma2kxkCdhnpUHiY9RXSJQKhGoQ3rFWQVCzfd8MQRBtE1fn51tXLYq7RkpGG6EumoR6vr",
  "key24": "2icjQqf6dXDi7x8uy4fVjTNt2c9EJoGJvYokfDEsevW7dHmPhwmLNzmWJcrrpFM8ZaFQNDFFMEvT6A5QiXxCtti9",
  "key25": "4wp6Sk96vjhL7sFvCR8bPireZnNToFzax7u366qyiDYLggrTgZeth5hjA1WgKRt6NfLkRWYQnofBQgLVo81X5hkx",
  "key26": "TCTgaBv9jdGxzpPitgx8tzwEEsdTm4MotjUd2wxuTMBZ1esATZRG6JC1kARxRosK44FTpB8TDzgQdvJmXm8ccEX",
  "key27": "5nF5kY6oDKJF164scaftUUfPPXNJCfnjZ2qsrZV8HfYmHVMX8STHzGtfLFJrRzhhfr24r6h4s6GdyhPrP1mCUyQf",
  "key28": "5TH1qQ58PqUJrt47KxHL6XT4vZDJ6V1ZCoX3BY9y6ijVDhweeJmvwijTnDGBrMDykHdheoetFP1jtGfWQfxJvJFY"
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
