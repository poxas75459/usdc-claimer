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
    "2qTBR3bYEeqyqjKip8Nu7jP7AQ7y7hYNuGYaWHcR9jPtHCTcCBPxHoUFZijCmBaR3GKPggGGc9Ujo8fVQQ4npYoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F9p2Ur98vurzEjXQJaLSwqbSWmbcczQkXk4C97BZE2YY9ZGybPurZsSbhivLnCodxQDYTDmkW7eMzhkFphzcU8n",
  "key1": "2Yrqk5r5hEyqP39AGpJtnSjHab8UzEfqCCDQjgGb48XGi4XS2MVCUpxToMKjH7YGhxxLEcvWNdqPYDakqqhRskTN",
  "key2": "neNm2BKkLMAVn9udCcT6pu1yXJRqShjJhbizsHRHhLqW8MCLm4RGu6Sbw4BFDto6XFYRv8t9H9EnXm1RguiEgDE",
  "key3": "4yXahdG9LzsQGRqAZVfwRA3VTRJBGdgXjXVdHsVhe5BDAuJw3nNoG84xfwCLag6mKM9tviySVpt3q1LJ2YSSeQuo",
  "key4": "5AYV4ZhqqWWPC5TrvNBQ9KgPxCZkKNJLTGVc44HrYKe7stUXyBEvdp5uBBPQMXc1kTUMxCaGfjvfzmZUf3Dr5k41",
  "key5": "26yw44ykP4UTnL6FLutJoU8yQqEpK7faXUkfTpyjuo1SVmrvtEXWBkMpSaLSiQEVXqHmPKhEwaWobKyxuzRo8j69",
  "key6": "2twXRL8bzpHmsNtV1hjqCpgANQ5h8nSoZ7SGGmdYrjX7ijakGk2TLRR4pYAYXm2tqwFBmjrQVUhyjAF9fTkBJWXW",
  "key7": "3pMhvPKH61mwSmxpGWzXhJTTekxxp5nEYocpcwndB8Mu5ajzvpvvyWgyzyV7ARJ4iEdRQGzpiWwtQkExhsQimh82",
  "key8": "54e9hRxUrrBaShA3T4mtCeY51HKyTRMpNS2VXQHd3XWJzWcRpZSYoGTydMrYKCeV5SXpuNjXpdCuPu2of3eaTnbY",
  "key9": "2d7n6c29nFN1Cyt7Ur2Fo5RZgYLZWzFuoUtFfejVCBo2HwkmdqqGABmzLaomsBCGoTLPidSJCXy15QDgMob2o53d",
  "key10": "2sZxWoHrZCq1K7mGDYqPXCKTo3e71yHeKPHpCKpRBxo1oFqyhocnFpPY7Q2VXh1h6HzJqT9cyjjJbtaokteqUWmJ",
  "key11": "5T62u2SQQ96KASZaLw8fR4HcUFX5iPGMU3zecU1i7eWgSibv3TV9phTZrAEQpuLryHENGsGskySyuypE3yjGz7qt",
  "key12": "28m99P1UkoCJsxnXvXBX5Gij4UfAakczrEx9usaZU9tgV6emQt34wfRBpcjeDwpMmaDMhKjKDmfURQSMViJN46cr",
  "key13": "2tNj5KZ7EPoejPeBEUjarYG5gJiiXU2RTQR1MPeqk9tz5rHYLgAyGLamkNBcaFSFBubYENZz6B9A68m1c3HWELLM",
  "key14": "2uzxFebjC2Ru8TiJnARGEa3K4s14AxAt9BNUd9PkV2WQKfesWNSevyRRTSS5bJ743qLjRdfBq6XrqMFdAU6zbeGA",
  "key15": "3tFXfAg8B32q2ggqiPspJ7VCdDprcDbovJB7KLAGbfYJTZyb2mG9C3J7uYajDqw4gCMMBdeF4rBvYHmthbNJkxkZ",
  "key16": "3jpk62bnhCvN5iyrSXUF3NSpG7B41dn58Ymok1ACoT7uNKApYmCvAAHoM8d3EkazR5t9SVi98NaumyEFCMzVCVWk",
  "key17": "39mdawRzWwP9yMhnqid7mXrSaKfuTumLGV1VVTV7Jwpn2byPLvMNA5bxN5vqTizwBJ2b44zosojmhujzdjNb7jpv",
  "key18": "5Q8uzYwxP6umJDgAm3hoPQcHus15SyLGwR1bUKNt9xGPX9hRSV6Zfn2YffkeWRh4DbdAbt9QU8erLCgdVx86rrM2",
  "key19": "2uB3QVhbdQvPrmes48dhjMLG6uXnoqBh6LDCRsG7LxajuzQd5B4JbdQRczSCpegY6BSyRUbTdpU5KW2UexCC4PY1",
  "key20": "4bxrAXEy1TPdHm5rJ3rT2PC7KwJZWjh31ccSpHjRFoT5KwptmW3vUR4veLmHDtj9oPkZcdv8T9Se3qQnsJhuBfCF",
  "key21": "5BMd12UP1d3jxgAUYsXozjwgyBRRoA8NQHPfB9Zyrz3YtuzCw1MVspBpFL4bqsbA8PAwerj7mHcRF8zFZaJN5kh",
  "key22": "62x5JeC4dzXxew4zJvuEqPeoAPVRxWaWPYhnTs4S24EpCmThBNd7c2aVReEbuGVE99HouLe4JHnnWZGrAUVcnZeF",
  "key23": "2dE5qCfWcCEXNPLcaR3tSZLYjFhmvuUvtq9sHhC2suoJt7Qja5ucncciCwqAw9zCjAK5ijGmpY1yhxCFwYJ6GSdp",
  "key24": "3z2QEbZ4PjdeJhiY5nUNNVDWAiY1WqnLUakQs5V39DRAnZR19GYKZZSRmuAK2bLFa7YixncYQDUyvxetxacQUwKX",
  "key25": "AKPLXEZwersmAWb3VpBavw6LA9sTheR2e1nXjaWPAjHDhY89BisfRBbdGAbHuzSWuNXPgvAjLzUBWAMj4fLcYou",
  "key26": "5nJjL8rk5JjCqxfLMTPmscG8FhLUmPoCAEvUhR3P42oi78WYK1thpirbsQtttAw9svesnMSDjTyFfVumqPksQfTH",
  "key27": "5JDKeNgxVcBTyWZgEXMqAyEB75puseGgqCNu4iqeW9TNGLF452dDfBzKEE4R4dNaJERtFySiMsG9fDtUA1ryKNym",
  "key28": "4j9k1n4kpneWQVeLBmKcfPqt6psGkNWfEu7xVQyTMmAfkvbCwS5mZszUDuvqk4rtusKBtw6Hew6KUntopaihxZCx",
  "key29": "5j9y7mqB3xNeEvv6NYontUAURhLw47ZuQNWMwaz4uCZupGDSqe234iWU5xaLsaRudANrQTL73aba2AbDw7tJ7Vqj",
  "key30": "27ZeucM1ssUCeLx74iPgRFU9S2w2sZ1Y4mUDNGKi7XmtDoGATgxEQW7VgSZYpLYhJ3L7U49UNctrc8nn5CHHT6wZ",
  "key31": "2fPFY7vQd1YxS5gxnCDjjGxxR7PbzLcaMF8HdLFRxcsWaf1T2ouCwZAeYyUFo2pBhyh6GhPWLQGH8bA6GeHQo4dH",
  "key32": "3kMTGn9oJxVSfjA6rF6evKXFbFFpQKfyqiTpswAa7PF5cKaBkP5oiQoeX95Ed8feEsdquUaDCKKyR3zu3NXA5sx8",
  "key33": "1b789838a8CACPP6oNtv2Cg19rhQxSyPcnFsCaZo1v9WJqpjEYLAPvoxkxhyRec5Cv6JXiHmbpQmVNuRszLjcfc",
  "key34": "3rf7u8TyFFV3D3qvtnPmhHrQp75NTbrnw2HtYt98vLxRtcUiQJoRYzB76o9dQcyuRU2EPEpi9pdeZPPZUmTLqKKA",
  "key35": "4DzxXx9fxnTzM8ebf2beJCWsMajVnX7d7mEorFRMDCZDY6Wo59eEGBVL4p8zNzwdU1K4QquVDSjnAah8DwupL6Mq",
  "key36": "38TLwx47e81ho1XtVyCE6bU5dWUj78epqWAhf2gRAvaDnF88sorUHsi5oDyCrfxLvbuFAtbxHfTtnfu6UVKeTnSC",
  "key37": "2GpMNcUNfLEAjKvWEWZ1pszKj1vuZrG4T9XKPCk2CAKRsJA2tgmw1XFzksickXMs65pyJtpQxjGNppxpLZhBnGzN",
  "key38": "21TFhrnJL3eWqC6dSjtMmz4Wa3JA3iVJwyvAfxzsc13wiftZg2YHX9gbhpefiRQbJ3TgiZ1zo82Qdy2vwAHxysDh",
  "key39": "4CPAGPpqm2tsnLuXSuLZQWvxwPTA3UyKqUdZR29V4tJJsXREuKAmafNTErwNRXxbeDzVMUcYoJK9mjcZKYfwGnvq",
  "key40": "22QkieX9ArkLEcZgyhWY9FrM24mFTGu5KKA9a55kdPxYub8Mqjn9WX3i8gt6TsznSzuFubdF2wV6hfBoCXAcrbSj",
  "key41": "xLf9XTcHCNTUhp9oCpDvfv3YMsV4HfYoak14ZU9d8av6Rfwa7cwMiGLCHcFCaKaW7LbfQsnPoqRQBXaUDiaHcSw",
  "key42": "66HGZmVCeo8f9z7y7w9CEXA55zJuNgAuubXMwCnjs5SBVvsH7iSAF9bZbJVq97firw5NntNign3Fms9DG6khVFs5",
  "key43": "7JBer8N72HggtQH2zoGURPq111bTtStEh2D7RBN3APREDwcHmbMHq1GGCHQVrzt1Bf44h344v8swLgreReaqfWS",
  "key44": "bLPDrz2mo7VPJJmZowgMnrk9qGPsiymEp3extxm3exe9WHWDPZzLrTfW9oKLaNM4AiAfBPCMPJQeJkjv5HXgsLP"
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
