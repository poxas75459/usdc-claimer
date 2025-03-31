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
    "66N9EUY78s8Q38kwteeYaZZn12vswVTh5dHxzRegyc7PeWccrDHULKjJHzw3h6ESgCbec1SQtiriRaGSHXGFAbkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nox62BmZD57p5R2t9yQqub6HxBErNszx3pYkhg6tuwBjND12go2XNBUL1aPeCeqjQhNiAZWK5SGKJDz8j5xvucZ",
  "key1": "No1rBbXAeu2drUF51uXn5xakm4TEugryqtcMkVtnjJvs9px7SYkv3tBAbNr2dwdN5g4vu4HfViRWSPUzgo9KSAQ",
  "key2": "3MdLmP94BBgsdBfCYCevcvGUL9BHaMxmLErDi6EBN5UBD7csy9VWUMCBdkEetf273qXKJgB8AS6aowsUqG8mRgMy",
  "key3": "YeGKXAM4RiPT5D62oYDbNXQLdTsNFraLvmaR7istNWL8tkkume5dWr4Brq1b2W3m2faW6Dqc6FtsDUz8Bu7BJ6T",
  "key4": "33PRM8yudARd2DmUsWEE6mUWyDMwJobKHqL5v3NeuYtv9GhBowTyyQxHKgkQ95A1nXmujFPy4SRaigevTe6LwuZ7",
  "key5": "2KwpcHXWD7d2bvgZaV7RLXtpQJ2w9Xc2XuHdiWiLxQG5aP5Wa2hnSRYKsphiL1b2trYeY779p6LyLeGJu8kQhLX3",
  "key6": "VADp9cpxSGvAjvyeqgVdHCNGCUpgPaVXAtAqZTFTGhRXzVyyjpGbKRy4w8ZA3mmAmu9NDtL8dzzW7qYKzXE3kXQ",
  "key7": "oGVnetPkgdgXfW5iHRrnPW34uewbP4LxBUcqGGdc7MScP9BqHr66U8vLVbobRSPfDxjwHx6MG68kx1RGHw9TgDS",
  "key8": "5KwjwZZe4AxnyHRh3yPgyt1uZDbZsinbbqnEXCYnbnsM9Euw9WtQG5wZCUEuEg6zQzzn1dcVEQnGGG7w2HQYfZGQ",
  "key9": "4Sj9yag462xRUPjvUyzjpoAT6HXaJTswSPbsow8josaAN8toNXLM9rbFtnenjNQN5mHjBs3o33w1g6J4PnGyy6Ta",
  "key10": "3zL9oxwfuYzobwovt2dih2ZTYEPozuiHRLtKPhBhkk823WUfrQ1rRkgoRN6ANp825aLcvNm1MBeVZ4kHYsryGp1S",
  "key11": "2KxqCo2wUW284tdoP1x8Sses6pS8KJSD5GTHp1TXxTzf8Pi65b4bKRFU9y4GHrQW4iv27MqT8YDYFXVVDXU34pY9",
  "key12": "t6Cyjz5AeW5PemdXii7bsCxd4RMbkcFnn8W9M8tRrjW2Dp1L1bxhdNQP9poqjBU7ax5odzxbRsVuAmSGdZv23wW",
  "key13": "4jta8uG7ZitYaoybTvW11mFU9HvVcqbvauYVTFbNVzbpED3mz5nobMrr9YLX6KUnancnSX6znExNBVWiAaGFjStm",
  "key14": "5gBCZfqXhBfL8R9WVuruC8HTAgPJBexaj8ceh3uZzUD8MS2hVzMpfBaAPqTTeCPo18tMzYvQZWEvGtpsP8n8xDVe",
  "key15": "4HZXGesERrfQaxbdHr6NQovZ2kN2T84c7ScY1VqXBW3gekzBMgh2GUTggiwgULypGRhASz3BkDEo4g44fyywKGse",
  "key16": "55LAabQPSpk5CmWbrGi5PEwP7kRLr1Lmd4Rcjy7XSSPPBQsK2n2aUQaxKoumSLdusjCepW2FDfkBTVbJqHmUvkFS",
  "key17": "UEkQLSwqgSQwjvP1v1t2BL64mZB1qjReDmijNPzd7kwQsUYNH6XbWso6Hx7UQNuGmsqr7RFtzGSTCjZsRCYvGEU",
  "key18": "5Akt5g8Jbu1JnvpTMVzCLam7A14FbXbdVG1sprvBMUv5DBqvahkXWDthhGDyCfFjevKEfTjAypwDE4THDfTU4gsi",
  "key19": "Dkv3PyZuS5hPhmi8JVgbMXNSxnCLKZXEwg4CiVeTiwSfA9ZmBoR3XecTKDDNMhT4FrtdrGTkuLhRQ7GCXodVRrA",
  "key20": "36hx4miS3zhe5LRuuPyNzox9Vs9QN76a1GGLKZ6cNtLyD31pE1TZJ4qXvg8yMWchLbA3Cnwv1ML2DhWPwRN7xSY7",
  "key21": "2yh7FZ27CZy2PUaUe8uxS5mLjnPPMxRZDqaSCrhtpKR6NFKHbDsicaCEEcScwj6yGzs5fY9LMVTC61BuBPgb8GBq",
  "key22": "5F74nuWd1P1YHbbnpkcaQXxQjk3dYuqBz939Ytu81m9HaSEXPFpgYT1MQdE9FeUdX9pK12c9VYGYA6qQwcXq65x9",
  "key23": "2SDFCmHdSriFLc1ejwYatuYiGAiy23dirybz3nH5hPSdoLBNDWZBXFv11B3JMxXhbp7nC4XHutn8coGUTiJ2Axnd",
  "key24": "XLoZebooYnyAemdTpwKst4HXZQCaeQiJHrnduzuafiu26adLP7KqP9aRikfhsKrpFyTxRNi5y5K7dti5ibok4H9",
  "key25": "N1xr2Q6U9zvhPG6fv7XeB5sSMwHWCG2FMagWyf4G4crw6ygT3YJBzyVoaYvaZQ4CcgRUumquzeRxHHaGeunuBeN",
  "key26": "4vL1BK1RT7zXBETZ4uqqXiwui4Nhxq7L7qbpg9dy9hDSiR95EyAShqJc7BRGCfBR4cCKQXfsY4UzVAiAMrirqfbY",
  "key27": "3VjJpWMaeLeQokLMnaeXVUZ5VBEWrAEmnuKndtSLH2pcpwDpuWc26aFBBuZUMn1vsBCMeqdSX2qLKTjowkbTiAqu",
  "key28": "3KALjd6xbssWa2cyVVSS2zEHouz5bcNXnos6hjhb71sXuRNPZs3zhfM1z2KJLr18Az7nvZw2T7ZDNPwyq9pvy1ne",
  "key29": "4gK4kmGbpwFwNTqBhfgSeKQvUUJEPSV2QL61HSepYJRQTio6CANE1oJG2nEKoJUiPhQFDUQqpXXTz8wuM2veq8qn",
  "key30": "bcX6QoRHeCj9eqpEgfpuEWwengoUaGeu8FZBpjk8BfMW1mse3SBDoxmuQU52XrT53JAmNNWekNym71uiBYsQ4KC",
  "key31": "2L7Lcdk6UeTMFduB8i4ow7R6sFn4Vp6QpNWJpzbatbb7dKHahft4mm2K5Tv7BRAjzGwhsf65ekCYvTA5EYjrneNJ",
  "key32": "4A1PMMVCYiErXhzHVRxa3CRnKVUczjiB5CvRHUfMf2AgDXjtH67QcCHyYWaYX3ANdeN3rFiYEEaCxnN2hhr3yzY9"
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
