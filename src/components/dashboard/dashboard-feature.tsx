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
    "2ar6tjbWyRJxf5soSfVtM1CRTqTBsxiU11PYcr2wvbtGQMqo6rDJUAugdxHjWsyc1LxAZzfKsRuihjaTDVs2gFp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22JqoB68QXi8QXXU5sSqxEB64QgePqdtyWSV4iwDuJqUFgtdmGrZdWdxwWQxF9ZAxok6NG1mVoA673Ub6vsm81wy",
  "key1": "2FM42ftY7evzCWC6SqjsJcZ9r8RDfEHBriArfiwszxUxD7GUN83A3YJ5ZE2H7oRrJPJ1ShCm36jyuxdQ9dKi6KRG",
  "key2": "25cUAbh4umSWtM7yHnwpmWDEJZTKa2EBAmRddC4WGdBToXhnpJ2BQFHCAgKeeqt4W9aiF6LFNKwDSTrCDkxPrNRk",
  "key3": "49b3gQYqQHbHh6VdkBQuxUHxJDA1UWiUAHMi6TwE51y8AYNNgkdt1jQGV4t7E76U4EVxsYjfFfmXiSXF378D45NQ",
  "key4": "5h5XcMZfnunRi95sytuo2yw2drapz9cq9GZH2uidEbYQ9gcagpwWfZEESuJUWunfdseHVRRojHHkWfLDASmTQCmp",
  "key5": "nT2moCrYBHn9rn7mTJgaazN2WngW9PkALVxj64orvy8mfXRKgehDuPPeZoFn1y6c6hW1vyvYgCT8LykwFabLwti",
  "key6": "5eKC6fqTQGGf1ocknt3ztyWVtiCrxzdcRqUbbskMhYh4L7pS6WeCpWHvjseZt8VBsfxmAXm27g4v7ob9xUihyXrU",
  "key7": "56M5oRUCvXYwC71RfpSxvkQWEo4XyfNP8csz7ehrD1NpDCUbTw8tEqEAsH3DZKjtZ9SrFyXNhLewizqhiixVPMpg",
  "key8": "52icS4Rf2LXGEC2pXtt7zdGxJrXZ2mVcrrf28wvLiTEyaaQKPEAx8i69PTQUw2i95rHuRXfs5nnNAbi8CzfaFSb4",
  "key9": "4t3uzpqKHggGq5tv7PfhBXvMfnJkQUgGW2NHQLCVu88snEcdss9LgAdYiZ6kj6w3PtLDjnqej5e2Y9pZBeMzVXBg",
  "key10": "q8et66NMPXq9Cx2m3Tn1dZnjVGe43AAiJTBaaWSSwAoKVr12XdB138CqLSYnmuknQ94hd9RwVdVnxgHoGkbqyrQ",
  "key11": "bcWXNUMJ2Acr1KWy14SAqbTy77Z6t7TTcX7CdodgLC8c6ETLFtiG2ajW3VxzWXU4PUgvTAXrGQD8mZ7Y7S51Hbv",
  "key12": "21Wu48TKNGsmQaeJbaEeNU6MLBwvFkfQqbFa8MCLBTuUNWfmddBDLftrvj9qHHt5Mc5CMxoBbZ1pGQKSYhqSRBNm",
  "key13": "c9WDTaSdAGx2kYC5fsSoaTGi27H58GfrwS7W3v6H5GK54UZKtNux5iYeqGLavbYU2TEDM7eQo1tpHSD3hZ4dnUS",
  "key14": "uyC5hvpK44HV8anFHMUgUn2vzFQD2Dkdh92xXNGsUJaK7KfJuiUG6thosERzBUMAprMfK7KgBFeb34T8pkSGrop",
  "key15": "5ixL64jH5bLbn2mswHxPEiXbJbSe4x8h3s8bFqVJGnxGzSXcnwtVvCqZnx2qMGPK9ifVPriHbX6AeZyFa4YJbS9d",
  "key16": "G417TzgZ9Ntb2MQwHKTGs5GrzC87fCRAzEHyyW7Vi6yjE7MzdpqL6fs9RSLyAwWqqPRWBd4BVtT3f5t1NAtwSiV",
  "key17": "ypsVhZ8K5xTpBp21EGB7n28c4iKTfAYv6jAWg7N7FHJA2Qdr7KrgZuQ1WYkjYz1R9arNG1E1EszELSgMF99vSxk",
  "key18": "4cyJSB363h6u2HFmw9PhR7eb5qpV2qG9u74gprsfNZEkibHNzaWZ6en4VVXC4sXXRLpUm9gFubCLTvm32GDWBvUA",
  "key19": "5PYTmsBMvCDFzSPr1cK3s4d1f5vyNHBNb67NtB4FPAm8wi5knTmYPB95DbdcSSLmYiKnuZVuM8Cg8MUDR1aCw7Pv",
  "key20": "UCJS7kDmCgKB9bJpW8TYLokBgr9oRWtQkupLLpNuT4MKpgDSivT5uZFTqDe4Ks1mn9ufXQyCfBrP3YHaoY7aKL6",
  "key21": "4fepLfv6ksDnRDRZjsFyEFRPRkFwmrQZRSuoh24QZ1dxDBLrzjEzWXGr6ZxQ1MDHstyjh6QSvWbehj7ej9RmRF8r",
  "key22": "4RA4xQ6FvFCy1U19ZZS3JtUzqee1XExGSFth8LUK9JkHrXe9UR6mGaEs9V9ndLAstsv3APHkb4aWARpb4RakQSLt",
  "key23": "5vf9NhzM4m3oceqZwxHW4uFX7bTT5pxBYbCtjaTCuzWv2UHCCiwwvVR7ZGrZyngLUMhbFuX99DurbwQ9pVxaTjpx",
  "key24": "591V21FK65bhAabnLhEjdmMHyTaGcbWRzm2ndboqwcWfMEKHajwWdDbPo3xAuRopyqZSbsTByeQQCHx3EZeBDPzp",
  "key25": "4u7XH7agyfP8B9neHbUVgogtxgbWCtJFLkzH3nwKfCHwUWYy7EfL4XVExeTwHFqDGj72YPhnhBSnB7avX2A5Ff6M",
  "key26": "4fGYktGF1jbqUaQghfmGzzByhTAKR7TemjGW3BbzBE1eWXmaY633ckkZzy9CoUGFn7shuc8ceXWa44wtP7qycCw3",
  "key27": "3EjyhkYgiZ7rERKbP1TXwYdSufpapaogcfYdPV4m6s8xGAHRoKqeWq3YbLCYuJp2WS137vVBYUwA58P8if3G6JrJ",
  "key28": "31MjEtVZEY7PcQMhEG6gFxBD5eHdiFyucGRoTWFShmMb4Jjam2zSgUpuu44dgcb9QZZ4uQ16Aw7mAzRYLbCTvd2J",
  "key29": "HqkUv5QrxQYteFuMMBQTeLRwdWsQAVJ9c1iyfrRviHZZ68njpKpjoSr7BLu19E9FxpjSWh2U6fqgo384LdgJw16",
  "key30": "73TUPdxZaKsELodnewUzX4oszq7NydeTUzGcMtvCLXTVfEe2HqrBTAqup4ped3korapXdPBPcvUZYjt8heJX8xG",
  "key31": "543vUcKx1eUYFTd71xkZApD1aZWfQi4kf13fsHFWzpqkhePqJkq2Ai1eHhHmgKeo43WLP9pcLxcwyryvCTUHUu6y",
  "key32": "5grH94s9XC1Nhg8WuJegYNnDqDUEWvsJ9d9LnxuKQJ9xouct5LbiagwSBFtttzEmKn1k9ZcMYjHRnoF3HKUDqsKE",
  "key33": "2hdRLADHStVxto92c9pq6Zs1zFaQDRwGmmqtBuvYT116Yy6EXJNySFp3CY5du7RFSSYwPn6jA2FUGuChXzeQ97oB",
  "key34": "21eSPVqLho3ZyZt5NwzTQ8nZKi9cfYnKLkGJTkyrEcGvKe1CLbvdPw2BMXrUmiWDtBSvZCbXmh3KGkzzRgR57tgr",
  "key35": "3eSX2BUCwAoYZm2WTbEtDSHC1Tq3JUJYnJiAB8J9Ck4mykmq1ktbUuXxcsPrS1fGaUQefhqZHJTF5HzGeqYSKXec",
  "key36": "3dWeiVUUNiNMiMsgpXDX5PPP3jdQXqrXLqrtuLXSCTCnn5LsNxBgG68qXkeDKUiSP7drgyi9i5y6qBpBrMGtFhLi",
  "key37": "tyqGYKrGUvrtcuaUMRMSaAEYhYeSd6tMrMQMSfTFhS1pSwkaTjXyK6ckJC6DibY5Z3HXRqrVgy9C6HWzuu4rGam",
  "key38": "58ok2vXvnatxvzUYk1CvHb8RP9HbNtvDVApaC72RxHk3SJKVk4zHaqqqKCZV5jybuDttKR9jv4oRaNYXU8fvtshA",
  "key39": "qkyoZ5JXMTnsaM5wZpjuyfW9ybqWeTserLKQtL1fEmhNHZCA398HV9q9pZjzN3oS6YDrHBi43EgRw2bMTLaTFEn",
  "key40": "5dbZsnjjmmgYwMvwBJkQ6ZdVBshshkrLRznrTqLkz28iKB4PnCY7Dk5vxSrJVWK5MdgcpDMtRQVXRDSBFEuFPgse",
  "key41": "P5eDv89owgwQQ5YGiVm82fsMFQxVr42DQVG5oNq7vkaLneYiLE21UpGB5524YX6xMN6UxGcGcDkLRYQUt2Pu8bf",
  "key42": "gE5FB63nfZsnDodERAD15yNcimS9p7j9CfKManTsvmcHGgfjg3NKK6kwmdGD2TpX7ruqw98EMHqfXMPJkPmHfhk",
  "key43": "3DyiXXt2PUYcfhYnbPLpdH5ceR9PJy5Uv21qfJoAqk2dAhZKxLCBapYLKHpcMjLTzaGHNCFEVfaCBWFGNTwbf8Ko"
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
