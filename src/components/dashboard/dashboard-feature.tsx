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
    "5hWiFHcAycmZTJTQRpt1peuVDuqtfDmMD5RqqSJgi9E6aXLNyoBAnRbjePXyscZnrKETRp1CSFxqHb4PS76aZJHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61dRzAMgq6xtuXTQ2fsgSmKjKx1j1iEZ91MP8EW559pnNNfcBPWsK4GU6obWgNkjvEnhmkhXFJmQuK7ahY2pH4bc",
  "key1": "5AYVBbe77Bn6qLW33VRVKZnjyBUjuSdckPoZ2xbwYc7gGZCg4ANmFnKSADQu8zwJByd2nZ1RTVZndCazQ7E1QS6E",
  "key2": "3YUXJjA9e4mEL4YJ9JFe1ZTA1yar3yfwi1TKLLthaBWygDHgGUSwfgZVGsz6uPcf18MEDzet2GdUXfcbfQqPDZ77",
  "key3": "5bzy2qVkZAvP42r37R2fBJyjpmzgYmzjFnx5Kh9uqMEuJDHngxeUfFpwkeCg6Us5skaEoVdncmmqK8mhywWakT4h",
  "key4": "5QQVghTErsFSBrLDjy61xdfPRuKzrvHrKTEtaV9fmGby6ffJbnkKJrSwU723ocnnivefUVRVgLYnf1oCRsnz981L",
  "key5": "2NyeSBbTGoRn7JKEe2zSzV3J7GKHpdCZSRt1YVSmkGcYftmdLHaP7cBAu761trtP5MVHKCQVQF7kTqogbwnhT3ud",
  "key6": "gT1rJE2C4fSu3NbxezFXxq5F2sHRTSzmpWykeCCazCCu1XEGsWq8N96q6LCbiT6Q1KRRXeCHdgcHzkUBNszqY5T",
  "key7": "2GWfVTaBdqedawX9RQTCW5fVZfk7uoBq8wFpFLCWToSf9ZnHhyqC1CbVZCvECbnSCPvpb3SPvJNwuHAo2PXbV7V7",
  "key8": "29jpFyWue2KwjwgsGtyQ6AjQLnUbB37zq2ukdKeMBaEnvWAzwGrL1pEj1LFtiYMS6Ge1fA6kit8KJPTmN9JH7urK",
  "key9": "3LvZ6LfEEvwZoXXbhwqoD4uiX8g34CoTsGnw8tSRtoeRRHUudTWGHxrJhqk3ffRBsWpqVbsnSTK2YYfPTpVYfK2b",
  "key10": "5gAuEEk1KkgpADZgSeTVaRRUe9ZStn4ksgxAY33XJ52BVgg7QtVF4JHCqWk5zyJM3y1EWEBY9wXtTqsHHa1xPKjH",
  "key11": "2XEmjWUoKVbAhW4AoEw56npzN5CpqsmKrNXZCwCNRcwUA8rvCx3ssHzCX7x3W8GBBU2NmjCsCYHygVb46173YRzg",
  "key12": "5aYkPw9GMRVAif2opjmZ1HAWjRovF9qYQeM84KDN3wAzFgNbrbAX2DKm7jiG2bbG2Humut8uY5x68EkvfGitumht",
  "key13": "4ddfe6QVawDwATUVbuihY5WnuSDPPwkQh1KfkGktbNUSV8yaVXbxxarR8uqNfKspXAUQ3ptmtWTt571RmfrqppH5",
  "key14": "4wKzMLWgpyS2KTYM1tTht7r9Ea6P1wirnR6zVbeUqbmaQfuWywtge7QKLTQXtNWSBVW7Tn1EYnaUW6nYwz848XD6",
  "key15": "5qu4eT67GJiSVARRcN599dUQiFJ4ArSJBXf2Qq4QeB4pTxbWVCRvntmGAq7DedeEnK6s21y2hYyuAKDWvXEg6w5q",
  "key16": "3L1CqceogsB4R2CMdAJqJXmvLg5RAmACfaY3G1G3JfJfw1ahXrFk4RQ4EkgCBwUrkdmnd2kqtiLLSYJVKM82qwP7",
  "key17": "3exSMxjmfBUM2PaPfCC4FZXgv5UCt5SqUCH7Hf7eDBEJHW7JJtiLQLL4JNjrzetmxbr6TZQMNRmEf5fEptfWdKSR",
  "key18": "yXzdJZVK6yWx7oEMSdUU45DA9cU92Xv2bbyMYmA5hbZ2nQcedwUFY37n8JtMDPrAB82cR1ZPnZR2HC3hTGVp6yW",
  "key19": "32Kh6gBVgDgjqDieL4DpoFtkU3EAZrqfsNoSXa8YyNehtSFUTjrcrfJwL9qDF9FFAdyBnoFW7L643cxgTvaj24Ew",
  "key20": "49sEuQNTQrD8n87CeVpqVWvAWWzenpcwRz4EnPtjM1uCA2GmjZMS4b5YJPDfwPMGeb4Qrvr4aDbKXXSfVd1pLYXG",
  "key21": "2cLAttFcSfZ6zAJJtQ4tiE9BkRwGpSJPbNMVHxcxnBkoh2WFGFua4nbjs6yzmw8KUDQ3H5nrEAhXwewdZDTn4qn7",
  "key22": "4uKffDci8wAVdN5hW2s4x7isHZYNMzWB3MAyMWThS5NeyPvp8M32pecKdtPtV7CpNRwCMxyBnvgq5y73ChjFnigG",
  "key23": "5vFeBQNtguyHDM876sLj6irUpEajB4FEuz94kVeVYU1FFuTaLgZgVixEmrskvrVaG5wPrPprJeZy87U1ku61X8Qt",
  "key24": "27PUVbFsBmXHSLawMfysTf1xbXZJhyKQVhqWuTSVpe2bi3Uqou8TFjvXEH3zHZpeHBgsB5pSS2vFLnd8iRTe3CfU",
  "key25": "4iLzBz8z6o4hbPn1YhLjtNyKMq3RznTjZsALb7XSJMBfpaMyNGB8vu4MtDCftKPntNCoFQ4tn3Hi1ymQtWbNsFwW",
  "key26": "34WGfJvRefRSAqAnL8fQMQq6NhRusdkN1aFg8HXMVNXicmfjWk1FYxK2nmc2WyLLjiUQfsL7PASjJt8nEohZstjB",
  "key27": "DS82iz5CQXb1tUXTPJCoC6fimmihmTX2ywk9VbErpxJDR1UhT4H5xQUEVfwpTgJRF3yQrkJg9qtTXnwkrAmgkW8",
  "key28": "2v5cwYtuMFSuLFFa3tpGY3ZSVTXyFh6QutmWTPQvn2mzp395c46QFsyiYftS2YBfpXohe8tk7mDUkRptVakM1bCX",
  "key29": "3PYHxcACzBAacU9C5Dqot35jRtFrT4jJZoGYLhtafQV366Vx3ChQ7mUQe1HgjAZHqfnH2mRop8dsYatozor2CHwR",
  "key30": "2AvaxeqcrfsN7enKGvEYSQdDYR9EK5o4xZBDCJa7T46pA1AxQXyfBtPJAKbqvBUF9zxD9N23ne6tcRSFVminGAiv",
  "key31": "TqMzjtDsFkwYQyPtHAFFQZULAWBLVM8G8r1c9oivFeFkTwfjwsfnSycfMynUkCQAo8DWS5MAYjDb7STjA37pRF4",
  "key32": "4J6d6CQBZSZfo2jVafuvzstfJTsmanZGb1ZMb5fS9fsbmgBt3iAEdDN34t9quugnyAWZHGp86iF3tYTxRhz4bH8R",
  "key33": "3RM221x5Ln7PafVkHqZkWcgKK3ecmrY9cmLJbEFLMrSWhAXoCzoXRQcCo9hFLN95iGEovTdjBGwLJ6edreeDZhTK",
  "key34": "4vrcKFXF4FCAx8jxhZ8ucxuCCqwuzQdMipTftuK67Ap16Ezg5KyeWUGhyCq5bjKjCbQwG6yGN3RipR7TV5zGok85",
  "key35": "3yUJzgcrwtHNkBDpvvhdaamppkDTxUxvwoQT5EhhWERDTiC8hV6agoC5VJR6uPdGjd8jyDLJPPx6EKEifJGfku62",
  "key36": "2MRhZXVo2d2RCmhcnreJu179qBdMyUT9jQzMxJqngQB1KQzBHn9siWhG46uQCJWTwr5ybUQE9cFrTo2oYHDJh2cD",
  "key37": "3gHogyw5xy7cGDP9eiDp7N7FeHovz7wDAXxHvVfHZaMzreuohwdrJcARoe5Geeg4a9uxfg1DWNfXbLedqntU6HT6",
  "key38": "5AKWDCTYKuHSB7ubndJteAc9y7FqbFKY27FmVAXKLeH1ae4cnqRpzmPa4HipJdEzDVTM5XUWpdhRQ42fdAitdpTF",
  "key39": "5d7uWrh3hvqErtHAXiU6FAqr23qMNYxFPkmHVfWwprNG8siqQ4N4PRoiDNwpraK42LoVLZ7eQPbw6cLhWyiXqonr",
  "key40": "4rLUPVrFySFY88pRtMkeJm7mC7iVouwx39yMqJUv2RjEu5iLgvFEtSeMvgkEcouqjusF8wRDPwEKZgC3bUpdxQaN",
  "key41": "61noTKaEinPDdNLKXvrHdXpq9uq7gaL11vy7pApM6aDtFBS9HCGQrQh1BF6hz4EKhj74BAzLzgfxbUC79Gvhrh2h",
  "key42": "3fyqeDgeSuX8mL9F9J1VENCuStQbAh8cYSwYwZvJGFvvmiFuEgLz2gWzD4j3hN7Ja84bTkaq8hi6wcSv3Mf6eS4D",
  "key43": "FXRHhRMRwU859Dk7tany3GjKQAR3vuCdPxBNhkS7175EitBbwFCRXTo9g4Go76EmP3fqvXZdYzSrvKXTokp5NY3"
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
