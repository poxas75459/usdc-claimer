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
    "wBH5wRhzpjeFdDYNrPwH1CLRjZU7ES7zEcxgH2h2255aEhTfCVNUsbuRZpyHA1RTWxCyjkSXFXkqPxsXL2rCYxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PzkYFNi65XGHv7kYnN6abmf6WqgbJAUpzwEj2SXhtYPcuEdC8jQYWRPZPYyS31ZBjpjWdVD7tVnxYoi2b1QzXg5",
  "key1": "52wVe9hEYEYSCQh6BLyLCuUW8UK7ENsxCkkv6XhMkET4DrqySXp3X3LkCMEaiotxhd7k76rFmNmtsmuftEhhqYuT",
  "key2": "4Vs3bxLCKzNZAApusfPhfDP5MUWjQrBu6QMZdMLX2GYmy4wAzebLFpjs5RjDvfZwH2kBp7tYxDnRiq2tjyXknsx3",
  "key3": "54DGLiznjyW5YFoXuF3r8uqizg1iFu3nmT8ofwSY1B3GHhMMUE2teG9bWqWph6PeGY6xj8hjQN3S8erpMvHHbsEE",
  "key4": "24ANvPBz5SbTorojWgYrvL5xLLVoXaQ27gYqpusWAVF868Sm8jzZ5moyWzkN1QJ9LzRfPh9X8ssht6q7it36CuaF",
  "key5": "4mH5MRGQCXWYbQZsc4XNVBSjiQsaAXeLVTRqxFMyg5V9kuhYMhs9XMf72ahWXMpYLBZP5oasyVdP3ESEtBpVryeB",
  "key6": "iZpUbnRwGKdS5J3b9upY51gddUHFY5qzgyXHNgSPDAW52SvH8RyY9mdYtsPQXgSuETRk7CW1ReECfwxvD2kE9JV",
  "key7": "4f74WMLPbw2Cnzh5AM35tVk3anM5rTHYzw4yzZbzhAwwLXDZ814pZkionAHXEpJDTPMXw7xVm1qxQ3oDMtCYimEs",
  "key8": "bNAQQYYiHE9ogtt6C2wMECJunehmwGYTMTErhbfnAd2MN5sQW4HW1HN2Lw159T5Di68PmFiAesSXPELwj6LHe7Q",
  "key9": "4UdXyjBPp2zSkui7XhRuCdpd7U6N22rVx3duK9MPsanhmk3q4YhRCRf1sYyppnmJG2EYLBETNQg9pqUyzTE8mXDh",
  "key10": "3HBhS9ApGVWkdYC3JXvtGRdmKuPypytBJghWfayxKNmEDX6rMzwrFtsHvHh3YCThpov1RkyANseRgsAW65sN6pRc",
  "key11": "4BtS267qRts7tR1um45Tsd9H9YnxNzjKyMc4ViZGFknZSrCdb33zx3ELzT547Nr7xneriKgJwYnCbzrxtuPivxox",
  "key12": "um6ibhVv3HP9w1R6FfH8LPpSe3H8BBW5miVs6pitdDeenY6hsm3jnyjDJkuekRY6PEZ5eRPaEuwuiowK3KMGZVm",
  "key13": "47ZbZ98K3P6ZqKqjPMBCQqP1jAs5jn7FeM9A9a9SYNCYTf5JcYSV1w4YsormH8D1pBeMAnCS7DEi7m59ukac7snQ",
  "key14": "3NzhDhbBk5TKnau8tE9gnftUn2VBHBUexPc1SDJqaQf5aKmqV9nKzEhfwZXcPhC4gvC83dyupk4upcxqvPm3FXuj",
  "key15": "NQnNCuYxhvC7ar4GNiYtySRHSV5agc3fpXgcGDghF9iqxu7BK1hWnxy2Ty6VvknZwNNXArhmesRY4zGp2E8XnUZ",
  "key16": "2k5C8ZCs1p8oN6EDunsSyWHoTTx8k7RVQxNTmVubkXKxyZhZpbhirWCbkcoczg3h7jGXtmqppGHoj7LM6yawtYyk",
  "key17": "2hX1LE2xcRbsquiTdTQP8wpJBQNRrumEQcPJhrf1M4B1xH71nx9iH2xKqQdu1x6rUKjT4D2aj1t2tEpA5b1Z4AZL",
  "key18": "s17YqCovBWpeejrmotK16mSeBHEkhfQuYLR8jQFbnKNC9MnccgeG3Z65NApXA8XcCndGdX2evYyJjXJ1igBHi4N",
  "key19": "2TwKPUN89SGVcoaXw6BX7qNYGXQL762NB8XwyXzUMsyxmmQEFBaGpJm9aktUSPJ2nxg9i88qE1ddS7Hhij4SeVrU",
  "key20": "5uSXFhqEWTfB3EvWx8agsoCCEuJL7pyM6JVjJHM8dt6gV2FCi5zhoEhKEJScyxm5XPxWP6QX6Sehzj19FQ324j4a",
  "key21": "QXmihWRQ98EteEfVTeBrf6Wkb3zXHwZMuC1hsqTFcv9DYRczvfNk3QjEdiwLpedCVdv6x4rmwWB35D58Mdbv8RD",
  "key22": "3w6yoSXAepmgUeV5JaTdafwPPZKqCfyw3v1eWgYVyy4XR3X9rnqFJHHzTbzcxjYDhsv48CTomtTPo4mApLin42eX",
  "key23": "4B2AVbBvShj3csqxYb8kVxS3kq3kydAU2kWUcuJnMSRdRj3K7xKynYDr5FdcF92Ufpkit6Af4UjCRYfmEMTC2XFn",
  "key24": "4jL3zPuEV92Y2pjR1nPB59YauAaphmw2R8wvfajZmLMAJR6KGtexTSxMzDdeCYukMUrF9ZjK2ddfrBsxwu7BKi7r",
  "key25": "64qBMmmy6JTLazKWPWof3dRCiMNC79SekxSLvnuCYBPdeaVJ1mzf7cG4NivgNF7ZdSPz1BZ2oZoSVLSJM3BfTJa6",
  "key26": "Ub1w87HnUkMMX52ossUGRiYNWUzvAMbVEf1Fs4VoXPR8gTP8Mia1C6v98dMh2bv8qWyKvKSfGM1d5kgj5H8msbf",
  "key27": "3khtNJfLG8d5mMapZ87yRCLQ648LnLhppXw763SETKvPJsZAQoTrtyiiwRoCekAiGNRctDuyX7TVmqe6boUREghm",
  "key28": "LpvgtVahhaRSRwgXCnj2n35T4AspxEay1aQJWYSQup29PNmMqQmUhdosa65qXsGtnGBdVK7GFQswFKU4RmCjrpR",
  "key29": "4zWCzBo8suBoHcNttdsRjT5CEoxcnfMQU4Hnbx8okDRsBwsNHU4MKAQk9fjnQr2iGhTGngsqb2YWu7pWB32qDkw3",
  "key30": "32b93pNq5Nt5gasyxKo86UDWuG8yUnRFTntoVphUV8ufQLbKHsuv3QYUE5L9FdsLjmsR1jLgqGYC6NLSTwZjjBAy",
  "key31": "59TbDx5ZiVfUM5vRuRTErof9phE5nJwLFRmz24iAQqmkja9JR1bsB4mmxxzV2bCBjrXStsFVXxowtTHBQ5yRo7mV",
  "key32": "2Hg8nQ9LEJBzJGo2HzkNNo1eoRpJEqoayY6xnv9h3dXJPRrmMeNHFpz2ctb6GnT7oyXktreAwUdgJGLcwEzJocNa",
  "key33": "USL5VHovFG1B7SQZWvMPbK5ZGDBcrEiYgFpi6D9tqKkjeD6o3vJspjYS73XgYac8Ey311HLmbU15KPUttk6C5Th",
  "key34": "55b65TQeiTmXGY8qoJPm8fZZLHpewDbtUyzySkFzTYgur73ej3xuBhd1UVDw8hJ23TctYR6W6nQK2kKAuUa5BHz2"
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
