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
    "4JAs8rJspBXwFdgAAD6y9nXiC4PoJRMUdJBM32gUyMp3EcYThZVoccr2TBNyMaogjrWnrBFCG9jwAg9oyz5115cu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W1Zpg3AxTXSxhg361fWopX92s8npFmSbgNCCu5Z9WqQwyk9kHTwhf2qyuwpk7yXyBy6Ui9Gxc3mNG3145Qi68wC",
  "key1": "gqhmvS7GZVjetdkDw4V2Ax9AGr4BsUXXJe9xmNgShBdoazsz6cVrEpLKbvYtkaj3N6mkExj6TLTEEfEPRp3j2y8",
  "key2": "2yAYZpTQ2rZVpzp3aNLM1bapZi62LGxv79YRtxjiK7nA2K1wP2g2oSHi4FQeT9sH777PWr4DUX7ZUqCZQYx5S18B",
  "key3": "26Xy1CWU8SmELAobjaEZ4i4PjdJgPpdPXH6sPKnhZh9wTC41vkMo4ncnoXavyTBhEAEtZEj85wjpaFsKSUuR9tBm",
  "key4": "2NscLge74LvbAYq6QiWQcurFUdzqd7djijG97b1eFX7ohvgTHyvy3zemUwLzpuZnB3S1wjjENDVkEavVYV2wXV5H",
  "key5": "2q4m7Yss4cjSs5z8BLJeCs59WSwfoUr92MB2P2Jwink7dpbhpVJcutprdN5KQQTTj1imseQiBpPf2x7RpscDrcyi",
  "key6": "4xNXW4VozeeH8iAZjonZMXf2rWwnKgtVuy6aPhSUkNjNvsh2Kp9pTKUwmwRf7wqBxPpK9nZVBkLHoNXztrq5GR96",
  "key7": "2eRTMDw5ozJPjiqvKqHEaEHr5fMpzKVBXTy69DU4j5P8ZVevgLXD6fKAz38jknLK7FxQLuXyWjEGqHpBeQqBLWEL",
  "key8": "5w45otov5rVQdHBpdDouHe9BHm7e1m4eRxPdo4DQ2T164zCbMRkLCeJhDMUFwVNTthTxtnBLqcz3HaLKsS3He3r4",
  "key9": "3681XfwAi6274Sr91WAMmroKKhPyyaavsiFBbJgN5EizSEoZCBoK72NMoPL1FKnutcnQHQVtagM22nMyEnq7XPvL",
  "key10": "3XD6xszmWQa98tbhtQ6KtBa8HPXVdtgf5vgGDERc1RB1Jcu4UWoagHmryz3h2P3CcwFwNu9JvRdjt9VP7ABfQC6H",
  "key11": "3QAfCLT1TyKfxXvT6CM3mWjrfCnHRC9fD1YWdKeAdncsFg8WXqU9Vhwv2xzKzaAoK2cXHF7vGUNLroL45MZRAQrG",
  "key12": "wz8UhDFYe1WmnZqq8RhXhvfUkdDYzZGkanfaJRLvinqWR3GUYg9hNPd5NaHNFNenYcLLEC6qZcB9nYYWvTmfq1K",
  "key13": "4yxLaffLti3WGnJ3Rbj8dSj7wwj47rirQAddWZ8DSEWC3c94ksfULgiZMVopfQVjkJAnMtLzCP73X7woSJ16prng",
  "key14": "2bcWcXVnCHuWS5McVmRETDvfHQocKEBE5UXp3fPKgKErm81cEY23X4MHatsXjvPfm4iqL5tSnTn3323MdRWQcUoo",
  "key15": "5bvFN94TyLaAqBpTCjv1LANmvojAY9srsviAjLMWUAmTjptQweA6n1W3KMXPQDoqfXF8bXeijeXTxPcMuXLFQLge",
  "key16": "2eS5QAiB5KsrdEJNAMkqiPvzFhJJ8d7wGrye5RMtkKhigrc7UURxK5QbidY4fN8BYXnDAuGazCg6FVBHX2haJ6og",
  "key17": "3WDMGWJEvDqjkzWF4wHxSycLp5KKXtqenyGKhmZaSbjU6fRjotNdKS9qCKRyr9QnZQB9JYks9hbggKfiPSf8G2Ta",
  "key18": "2gREF57ctZTXAojcun2sQjiqAFwbLgBzpk81n5SMyFHxaNMZqmaB1YV3RxSbLautGghULgkfJeERdos8c7VcrvrU",
  "key19": "25W8dQKNF6HfE19GyCQCeRTQsHCV1HVgyKYWAPPBNWSJeVeeyujwkXm3pC23Wv66d7D7XDNroh6t77HX3qfieDYt",
  "key20": "5oRk69jGM71om2ChK9Zrywk8TJ72KgQdh5EWjioMtDoc99BaAkB1a1QeSgL4RJZX9PsWcwcUQJ2jdEUoM1mqf4Km",
  "key21": "4VxD6iCbmhoy8dmtpZNMKZpryhZ58TiAP75e5oneKH6iFNcJvu23iJHZmYsGPFqcQGF2vkwJKe9HEpFKcus9QArQ",
  "key22": "2bvNFqAUAVtzPDrKenXxJ7RqSqbVDEp3STLytMryh1KLHyfBN4Zy3rTLbwM2AnAJXH4kTHTZrCuEgA8WaGB2KgHa",
  "key23": "hPXAtBybQii29n8FxN2xx6buFB1kJnEa2saXKfDMaYXfm5E2q232AVpd9xdCqNRSbX37AgagDzJbCjZ3AxDL1UY",
  "key24": "4nGikTo9ggKMagKqyk8QWzsziyTFPYzG2wsgUcRqR59cjUrcDNN74WUbQWRndePJcChYENZxqgssxggG5FvPabbo",
  "key25": "Pb8DKhu2T84oWf89M266gr4TZ4wrCXvPApuYfZ3FHGSDsFuSYqyJFQFATuszW5R9jmguPBxfgVPxcrDooY3KF7u",
  "key26": "4fyyCcQN7RXVHFcKZc5pgP1qXoAmwBQiqm4hdDXVcT2CafFBbXebNcEwDJkaxuEebCMtn63iEeh7HexDBBa7xM1b",
  "key27": "4AfbeM43nYjuQvNg4on5QBdhWByw6dHkW7nVMHxniqSDvwKFxMGAzeckaujMAmqgsebQBKND3GDS83755eJAgngp",
  "key28": "4HRqiTrhJhmbkEayKZWuQzYXrsPZ1CP2W9KEykp7XEtFVH6ffAas7XYQMPdcibAttnFfsiXmyTmQkYtZAktD9DKq",
  "key29": "2DnBVKQfn4ZUPg8Zoo4LeGWpxXY6C6NSDgcMKCtiafz9RkPGRcLdDLLPSsYC1vXafsRBvdWzJCLxfDBBRvSBgxeN",
  "key30": "36gd2dzQZD75Ygv1c6mjMdJeFgTUmDXnJBTLGkbr41w5B8DG9svRwsmMrj6NLWnXCPaLCHTzm7rCgGhGMaCg7X84",
  "key31": "3JYCDWJEBrXSWfRWKpTnNpYDPuW4dADcbAwDkxo2me6DgoyiUecE8wz6gNkiD6HjUbRVHa4dwPAJcyjD5s8BcX9C",
  "key32": "4P2sq8KWgtzy8Tf6LUF6B3eX1PfR2vSUUtu59h3K1kVatU2aMfGdXQLJ6yvk3s42CVAUEVaW2LjrdUrquRqUp7mF",
  "key33": "3oAvEkhDZz4xbyRRHdfXT9GUT9A1uf9TH58WCEas3YvAtM3ppaB8cznPtmMqpD1yftkRHv7pvh5ZTwZvSzMfAHQe",
  "key34": "Lux61NDodjBpAZVRVSYqUzAMKRoS92DHEpcRFvjTNo9q99LBnvsEFw3spvDUbmUFUmH9WL6rkJ4EPYFnFt57V8E",
  "key35": "3TfnYfiuUs5uwo5tinptRkMfCYAQVYxZmAHtLYBPGTgCHAyZyJSn95VyeKH9pJduGZXLVQiPK8JdfijnHFEdw4oK",
  "key36": "4rhG6zgZkoxv4a4N3U61TgVyqW5bnoPbCuXfKrf8icMCZwddFHA24GDV3modQrC4ouMZ87V95CG6VahjqGQzz3z",
  "key37": "5RWu8Qo2hZj46qAfphsJnrk1UQC6uDXVNo7V2xcEzQzVnnyFVWbr4kPhLN9K3qEdsbSo8mBFcgniFiMXuX6iGRwA",
  "key38": "63BUDKvDcyAVku97YQ2VQQMgnegg3HwGDFgcJ2Mo4hFpztZswutUbvfVzaptvDBg8sTFFcHK7nDKNE3h97Dw4SKz",
  "key39": "5WX8eLAp1HAtkFojwuJeR7gFtQczNAn3ZwWo5boHcLJ5nPfydgbpSKCzrPUhZm5u24VTihVYSkbyyDT3N3STfFf4",
  "key40": "4YaxgEXkCm6s6p8BoNEJ5oY6qHim6peDfduYEy8D5W7psr3PtvgEi7WQVVboFJsUvKTwTjC88mw6zi5EKUxW1BDm",
  "key41": "4ikVRfWyAykdymtWdiP5utpVwxWZtyadfMsPk6rf3jLNDp588gmAESruBkVw5s3NW6XKFLdKrzWEdBGBxkioyviW",
  "key42": "3UFYzMxbM5KEAUdzkCVRhoHro4nqLHmrH9peeFukrfT3jojSnCAFFV9DSdpNY1cRaZd1N4erfU4NbXcA7HW5eNTD"
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
