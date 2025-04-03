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
    "4GRJWFct93GMe1EqRDer4df3pzCsyT9YpCUdbifNZzdVPpoSHH79SZkUmtjs7eLUeRq8SxuitMkYFKmpkt9sxk4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2twxSygjS28RmcHn6HV5jvNu26NcpB28Vbpqg1zRVNdK3wAvWSw2AvoakjZhwCGxBDNUh3Kxc7TVYuJA3hJz9cBG",
  "key1": "GDH9mRhLSgkH14dDfYfnb9aS3GB65xypo3pomWmrfG97CxWZRTb14s4RxA2RX5mLfqAXLpjjVWkJqiRgKvBRDFz",
  "key2": "Dx6ghMo44gA6iUrmRWMwRAypy7HMnThe3FgAXYqRffbW9FoJ7kEgc55DWGiL6e5R3to6vfofKnNBjk2MNreZW7m",
  "key3": "4QawFBgiysFJAAYTkoMsURz8hGQmepFpRPoPYP8YLsuPqVqFSVzSczMAr4iKwmMALaSH8c6cAFBSguVpTjLu5Evf",
  "key4": "3oKdv36KFGbHYn7QEfSJrvcUqXnXUcZZDBXAKvMdGNQBYgNURf6iZE5Hq3UEL1E7w7W7VNsSm9UA5WMpsVqHC8Gc",
  "key5": "3oe6BoBfXjVoMBhZUjKhgUcCypRL7JFca3QHeYpo3Hvh6SXhdSgCX8bh6cBvVPEyXXWwAQY1FZ38osaaa44CPQJu",
  "key6": "4ePoPDiKdiR1KuKYEcRBPJyfbqAAtmsE9RZMbmwWspzRuoQZuZFxr8Srap28ej2M6nr92iBT72PKDabuR9XBhfbA",
  "key7": "4tHfFouYyc6efKic4t2BBmUpXkoCxKgRpAwnP32zyPeNU3mnEaAkYYrAMg6qAQLc758QR39HCL5cE5BTc1bE9zc9",
  "key8": "5voAnCD6ESrhhSaWUhZosJsQ4RRc1tNKd6NZCktfNc6w2QksGjA1ZmwVLWJFpSMoTDsxnxKGsMgfYwXnWEdBdw7b",
  "key9": "378b64WE6smiNzzgLCsK5rvWWD9jMhCivmMaVrYV97ZGaXrWxg5ve7qBHWVZ68SruteAcv4Gp2c5ppt5u6fePKWG",
  "key10": "3MXe9Phtw8D4Jm3KgFydddK8pXx52MTLF3XmgFRiiCkRdJY3SDhSqHqymKprrdwRCowHzapkr4rf81DCTC3r8x4C",
  "key11": "5TgTVJeeraAsw7TPXA2FLATJf6Vag8qF9ujJ7xYANU75g8sqCMfME3Hdpg9Q9Zd5XLRGbQjDvb4VRnEtgHYewNNr",
  "key12": "3LfTCZc2MftVUru94bzbWQqc89SgkgABnPBA9uVU4P93sTHAMUE7owhV2V8SvAGHENVxEtji8HpXsK79Z1j9aJyE",
  "key13": "5FTTG9dZdxwMbPGq7v8LS4gKZ7xVHbh5fcEaBDSTFL6oCrierxADXa4xRH1zbkhE8bx4pk7zbefdvzunGS2ySfG6",
  "key14": "5GnRm7fnEBJYEjGVhWT8UCeCGLhbKkEGMJzVKeeMirxjsFGwtwj4R9NzCh6JPyZxkCidqUun6HsPwneBUEoHTNXi",
  "key15": "32jVhAPo6Jn99sr9sncX5tBZBgWcM78GojHewgDYUZyNrPQxUjRtv7km4ZEAe9dSue3dqyE2VQKYnsKjifTDuoYw",
  "key16": "4bpvgyCgB4cWvJj5rLvjvLuizTJJfFSgBAkBeGXPbvkMvSSjVTk6gHVBVYpFQtiPpHLHZocsoULx9GAz8AB7GUKe",
  "key17": "5pnEfFjoUSRpHF1MyiKK47dcCW2PAVFXzbz29RUoxc3afniuytPzKxLxQQi7oj1kv4NtHHTasssSr4gXMhbDde3k",
  "key18": "66bsS4pP2U5s6JvgejqHQ8KLZ2G7Hgqfcy6Z51tZEa6Fjw3xMxyh6n16ymuMgT6oE71rDonWvvkyrh57bfdVoEj2",
  "key19": "2UxSFXRPqzCAXTYFuCoYds7j4oUD9Q5iEqLUoj4xHu6f8Y1pUAaVgBnRYjXBBadBVCSawAnrRS7kJXmRgkNKrHUk",
  "key20": "4rvux12uJ4YcAy8JXt9fzb65QSdupuow5AueG1J513EguWVQ4LY3pDQaYkp69UefmKp5KbGWXEDJc3X67WPVMbvf",
  "key21": "48Qwfn2tzH19k9QQYwt9JXDPBUwLzHv6SJtgULpt1Fi18uXPc4PJ4KK5jWszMSaDbrvProEr13geU7Vr9RN946YZ",
  "key22": "4fhEZYtp6pmGtjpVNFXkab9xEuTZ1s7iL8HGQyPBb3tWsKKUJTzkBazTpU9ZBPdD6msCVoXMTYVaWDKiaT5E5Rii",
  "key23": "7vCP8mrK3pPgxYiGy7iE5BSWoExh5QdAUtKqrJicGWha85vBy2pChNp5WXzYAWqsX49HVFT2hTo6hgoZUrRyWPx",
  "key24": "3h5r8BpqroKXXXjxC1ao2fjs5yWPiNCtUszDHn9mGFe2nKfWSUA2AB5y9SayCHuH8NLAteZ2o4AcXcUmogcDsLbe",
  "key25": "2rRCdbedy6KjsVKWyoRaYX4MuJVMvLxoBoBHrppN9tJCSoe5vNbmVtG2uBLc8Bhq4AMoGm8P7yRA6FqWZPtExJ8i",
  "key26": "63QTB3ni3tncYedsmwNr9a6Lou98VbvS7N9YezN1LqwkzJsXm9gJfrrxioJaAiuvgYrXyr4GXedJuUTFiaY3adeW",
  "key27": "244pjE9MnwWa113gmwdpKVvaWYvueE8RtFzRgtbQ5zqBfqzGLSbpNH6fF6AcJj3LnbRX2abCu9Tp6L9Ne8i631Fu",
  "key28": "2vySP8FaCDzzLs9AoEkQqdqAy7B7pjjeawWVGy7TqGvTmHivpoascSrHGtHj6rAA1DUfCabD3rNGz9EGgJV6kWVU",
  "key29": "3g9pRACCHmnu9nTAu2YyZSXAfg4dLLsziR9P6LE8MKmeYv4rZH2pXpJViG7XYzhBKMTzr81JmAbbt5JRLdw23AfD",
  "key30": "5YxDxt7KwBc1sL9CfaF2anngvnyuGcLrMzChqBAVz3JnhPhrqvsf8MB9gjNHsYekHcekL9BWA253baEacNSUE2UL",
  "key31": "4YYPt2rseqzFvJ6wB5QVhwwgnHBQJpYmn8HZUbXgAT5tvtjy42kpLoYfv3vqFR9aQ92jyAwJRxpumjjjiS2k8kaM"
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
