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
    "59qbC9SEToxp2y43JvjzTB41tkK93PxrkAeZTvKtzFsyYP9QZrf7BPQsR7wiYZpL1uZBAaQL4CzMrEs1gZzdfRQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nc2YoU9uuS6xdAdNYSzvaJYopjhCQyARq9cApR46zTFLDJpmqZHshgJEe75Z3j3zDqB54BsRP7CkbPDereiL2d8",
  "key1": "4Q3hg8mMSL94ihDHEPdRGV9ANMQwkk3CU63uac1zpXiP9cWnVmdwjg8oaSW9pWuk3zqSctB6k1zTj99w2RnDvtFC",
  "key2": "2yF1LXCfnHBoDxQ2VuGnz7m25wH5swFQLyGrGW4xQGz8Saz5FfhnJy9gZB8advwfJm1apAzPHBHxJAyWq1FjeeCf",
  "key3": "bJGEjaCDqB5QgRhvhRRScPnFphg5SUp2aED2Kxe43VHtm2PF3nsyvwNJzBXFJK6tEohj7xe6joVj2vCjDAfGVGb",
  "key4": "5sEJ4BeR55JMNYbBbqqYSHiVNRTZ7Kbnvx3fsB4aqnhTESDsKYovDKbHCWQUFA2VA6CBoE4H3r1Y5nwQYh5rfqQ4",
  "key5": "2bsGantAvB2rb8mUe6JjX2T8kEPFYm3DduzJFTep9HNvB6gCy8TU5yKz71Ye9gXuDcKQQ85xvER4LJcdsGU858VF",
  "key6": "5zb4cjmtdJU5UH8CyAu8TU5rLgZhJZa3cHVpNeWqZUpQGJsQivh8u7mjr5szL9kPHtkzMg7cGaDWuzCzAZKHMSqZ",
  "key7": "3emhwbU5D2fd385FZ471iUnJY6rKaMdrtzK18Kj3GUcSXrpAWnytiN68DDaWpZg9aV3Zdc1jNDDEsA9cUsboZy1i",
  "key8": "Joo47soKWrStjXbcN4SkvXEkXRHhBXv5Uko1coBjgAoZsdTNCBvQPp5j29jehNGs9Bucz8xxKTtbzEFj1NJAzCs",
  "key9": "44fbzALwZJAW7g2vDc9EEk4LBFcNKrArA1P6mYgovhYezCFz3qEfb6ac3V59YqEFhyauyj9v7P3a3qjgVhQoTT7o",
  "key10": "5qqAqMoKhPzWoK8nikEmKTNzLPt4V4eE7GTdPZNrvFMNccksViTfDCvr4NRqgrZL3rLMxoJJgU8evtuQN2Pa4orv",
  "key11": "47vDM91gLz5CWxJwTGmDteGn5SXjfV5gANPue4RFi9FBsk4MfkVUeuy7QdPpqV8t4qsHNunnY1N2M5FfgfYXSt86",
  "key12": "3dRo2FPMDCr2Y29PTFvhvYKLSaCrcuV5EgCynjmPCafnM4oKe3tcMtpieN8SFp8GWKgz7u77yrZx2QmWMi1fWxtG",
  "key13": "23zPtsih11QRN5e2FUzMU34VvbsVkJdY2XfUf2vXYrgm9JsXi6n217t2xtCPty9UXZcFrc7dYHkW6nbqmw86mRPF",
  "key14": "5wv1tFNKz94Cmq496ta25indiPj4gC1sUB6E8748nAv6JAmESsahnCYt1ce2xmkjKU9qLSHYiTcVGE8iV3rUdppF",
  "key15": "37Eb9WKFxzhdpqNHiXMP3dAT6psQdUvR4rbxd5fpWP76g8jeKn5E27gAhWW4kXk7KbEGLtNGcQj16wrhkyuhMpNs",
  "key16": "3mX698v1pNyXQFX38zTUgFUDXLh1vCuziteGKdARtZCSb8KGnfHX7w3WpLJhABJwn1qPVumrMcP8fW2XpwxLHxHY",
  "key17": "3Hyp1fQgt8TtFqkyKAvW6KKrs4oHy6WE1T2stJg94fYc2pp9adpc1T6DWACHXnEtdYjbfNEcQLTSR8nL3SrR93dC",
  "key18": "3LJNkxpCn41QKu6AnDAaqJQcFV5FgijeYPvCPgBCSZKX8b8WRAWnycGjWPrAz6fW4wg8oq9rC8DM9tmxDij2KgRD",
  "key19": "2LNHyz5C9NU9jE9CC1rYhghb2oGFfCMNMitoBujsF3UTpmKjr9hH9A1rkcPMhwuBDYV4XsbykUYjJeo796gRByPZ",
  "key20": "3UF4d1wvBRywLnhNqRJ2L4x5CzZeHynyAYTk9hu8yMK1DVBC8D1fhRF4zzG3yQGus5aTNU8GESfgGWeT9Mha9hUL",
  "key21": "5cFbkfBUgNvuzigEDDv9yKCcDR39qQu8R3WcUCeNFHSkeRHWtX6os7VjXGxc4LoojSWHvb9wG3dtwtEZfe8mxigk",
  "key22": "3iwF7A5RSJddbf2UTgRGSQxVegJh8pAeLkh6sk3UDZUiVZRCUcTJUj6zvBwGzGseVTiuR6Gz74HTd2JMFiXgphFH",
  "key23": "5CEpvpCxUGEncU9B6mxa5iYNTg3YSwyo1bBGw64ALNFXaVHf1G95KqNKydBYwf3r69dRDQ927dP9D1yV7hv9wLbi",
  "key24": "Riha6JXfGqzHHLnH46cDRks2TdAzKoHNNcz32unQav2FLCo6bdjQP62DXqz5DvLB6fyBCWF45Rwv2AyugpCp8z3",
  "key25": "5iH4i8NXtgsajccv8ykj7yyK4oyk1srotYnx6jGkThmj7z8TZfDroC5kjjH96sVmynm6EMm4LJ4PKrC2eJu6Va3X",
  "key26": "3agPjJUpNTvwZTvdjnTJwuvX7qBSptMzPkcompQZxkbH7jnscBxmNjgNqXnLekoRmLDoahuxughQ9o91zxx9ngEs",
  "key27": "3mEHBK1CdqHyLWDptsfFeY2tbpGErgoqNdSWcER3A15HaTjEgAH68oBfhTJwgWjsfvCy9F5GvPut7XYvv9XY6XsG",
  "key28": "4Jd7Sh2E9xYVW4yZZWjAxxvWHGuZWeUCu6JMASz1FmV5dBN7Js9enQbP9G3VZbVj5vEcGai9iWK2EUGbTwQ4jFJa",
  "key29": "3nHH2oZLpzHuoa8ZJVNJgMqFttApy8Y2jPFuDZ5poi2QQuTd1CyTfn1iwnJmYS1qVxxRhw8Vspe7Hu89TS988LCF",
  "key30": "2K13dccS1u363oFqcdtRfyjLY1a1Wu1E48WdNwdgRBzTq8haFCVdZwZrsUxBMZDa4FvSoeikeCK5QEk4m6heF9qY",
  "key31": "58ftTyYaE28yZ7n35tt4qTSctXwphUbTye4sAJXwQfouTTcVm4VUcdATGGuFqd39wHiFfcTSsxfrBkg7wvyVoDQi",
  "key32": "4RmJW6fa5f85nGxkjXDLseHLt6Cet99RpbTKrMGFzchRte5aue9tvYY9HNAtv55qrAeY5omV51LwVeq2BuHgJunJ",
  "key33": "4qVE3ABLSNrh6FsJrdr2mWiVdAMSayMVKEgmYrRoYHcDsyABehi6daRg1ZfGgBeGbNybaHWMtRiR4Zh3gZrNA7X2",
  "key34": "3ed434wNzuRx3CaeeqKjXqqAocSWcrbig5iUKZHxfRho5cgXA8wfEpQAcUgXmQk732s3TTtKyajXixNycExDqDhW",
  "key35": "g4xELSmfsfPNj6mtJCYaoANrqy5fJLMWS3dN8k3SgBBuPVcSyXpzR4NBnk6gXfHFDxTkiQ1LRPE9dHDg3ZyY12v",
  "key36": "5ox7yT33cEVBQWkbeZGJ5x8oXpS9NAXPNzzGXmzqWjo5CXQYZ4sJge9X847vRrg7tk49TGNdR16JBChos3s9cEDM",
  "key37": "93eBufxVB7kkqTBftgDRn5vgB9TyaeLE1ZSUqoHit8HwbmZ8KRtChGai6Jeiskr5oDEmpih5aWu8mFYC2ob6aJA",
  "key38": "4Jii4mH2nJYKRvMhq5z6PqSAUtmjXLNaMRFun4zHWCLJmeg8d4eKFXBjWFZbrs6bKfWHfrmLXwUA5VDGrV5zEb4B",
  "key39": "6peXJjM3Tcq9VrSTLYZnDFGT2nM7weKXMDZ2eYGYKUEnq7gh28JgkZ7AXHT947uGyro814VVW4qDtb9R6JAqGUC",
  "key40": "2ddaxFEc53tMpTr9kAW5jmtV82dkkzxPEkU5U3LKFs4MGKjBZL9WgqserQSwKSGZMW1gHYzYrCgSjgYbJNRBFepR",
  "key41": "3nxeMpSBbPUWQS5xrvtpZbBJGPNQQdxMuWKqNBYS9sByspWqmtKz1CP3ctRN5SiH3cGXXbyA8tCaazchrVCUpW6f",
  "key42": "EL7AVPcMh3xpqfRB3E6mUABZfoLRz3HrwSpZHmJg15fEcHQaPP9Rtww6AvB5LkBbsZPoHXcvfEjGUVedqpZCLvh",
  "key43": "3sCaXTWvyfCutjvEbe1zigKKMe5WoLUefYiZ7dQsndxJFHPkjRAwWkv13Uv1dVanb9rFAFagRFc3XNTPQKs5m7Gv"
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
