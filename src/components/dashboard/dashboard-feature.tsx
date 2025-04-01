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
    "2qbJYLhw6Rgz3HqowNp6mgaDyyWZjRBMK1EaoKb9h29G1itgKD8RPtBWyH7cxAigqLCs4LYoyBaKr81yx7xYVA8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mVgxdhvdyH8mmkisCeHvMkVs1BARcobqRsgAqZncMYpG66bjq7q6fnA32mZ7c68PyxKCZAZCXZGiWVZ5uniRusb",
  "key1": "5CdVzjGGLToL7MvJV3tao6oaawLob5Uif7rUHeS17J469Zv5zFbkTEpQ4G2dZh9SdKqPB5z41a62YFbEQAwozVV8",
  "key2": "NKV5mEHrCjtUFmEfC6MEGoEhrDa4xFHXD4CfjYYHeZgTUm3QR8gS31pYNmdh8nLBpcVo9eNWidPMY4RFKVZjJjb",
  "key3": "zsYDHPwSJPrbT5weERh3BavAC4P4PPKR1GnUPxUjh6EZ9KcaPe7Qzo7yJKQUHFbKMVna3PX37cjxMgvRnwqwSxp",
  "key4": "35YYTkMEx1rmxTwNStQU24h8AkhtgeHDJDqE8LVTmx7fBq1TLTiDnHrFFKfgFFeKkHLMrhha1LkLc4g5gYfrJPPQ",
  "key5": "41kZHE3Ytj1ALLFfoQCbemsJ8ywPQWkF3cCEnSPsHnsDGDa3xyg4tebp5ovyYPHX8hGzhKaQ7Ri6DesD7XEJ1s3L",
  "key6": "yQJCW1EVi6MPGGF3jMUfjEnQY3StCXh5yJ5RijNfzEY1RWYvJKCVNk4WS134NwqUL2zEQ7PAGTJo92SQBJkdPKe",
  "key7": "5DnmVfqKXs6SYimqLRF1ujwYorFqYXPcZX1C214oeGddoLPVSpWZGoBEiwmKtMzavpNa6ihnWShg47txZJNcAQDy",
  "key8": "2UMmRmPvG53as32hR6QL6Cu6EfJCe3tPKvHrjLujSDWWfxKLo4NwcMrBMYJgtzpaAeQzGURRrHwVVdXcr1RWqeZN",
  "key9": "5Ucs1NbQgMnTC4VbD2Mr7rArYnD6KGg4BVgUZNteNi2KVKAQrtxNm15QbFWXgEscsm5rt9VeiAw8FovgEFFnKUCF",
  "key10": "5v3XBapRvhRuSVdrwfBEVaXA6dZfoktJHatdDHehQrEFurpyvkmFy8GNT2Pupzm3wakuFgdSWYK7cfJWwCjwaXfq",
  "key11": "5gGoXr5LwTdNp1gG2E9beGNECpkLN46iniWxSGhQArBAaBd2BogWSDtRVhcRYAbiPp3qx3PAMo4UBZhR6ptU7xrU",
  "key12": "3vnjM3x1p4hdu6QSqjkWihTG7gRsPmUQVte3CfTEFnLsTxzfbdTndU92XqdnDjxZXusgYBHK7WNr26TQJtbbVfCU",
  "key13": "4cfjxKyFtnuPECSDQWqxhBSdbnR9QdXWWNbmkM6VvF5tjaZCR1MVnGHjK5SUK4iFQWQmMQdywu9vP5gBLvfwA8v3",
  "key14": "px3sYBNADrz44Lc7MGaUhsGJhNvNwX67zhwcjzpcHCKYMQmHZ74SpYQYJ5aa8PsodVvKti7thrpWUgDW6uimAs2",
  "key15": "5FBmYvFVgzJC3aLeM6PF74UGJfRGBpHKVQRjPe1M1HmWVUV8obadKUZe9gCTcAytraifuhKsfyR6Jt6vJFnEhJxU",
  "key16": "3VYJeyDxcs6p2GD7QEAy6zUiKwjyEWVtptEXJYNNkLMfh98PX9dyAJNrKVjDEYPEsTZFaqqRSXuaVEawEBEn1w5Q",
  "key17": "3Nw8M2Jwp4YvCZqzkgxvJrkqRdFg2aqpNXzEgV3LgEx1Ys8LQqTwRoqCcsEujSfQRvMLXAhvv6dxuA7j5Fo1Msen",
  "key18": "y8ekq7VEWS7QsZwnJX6bsSTrXqmmyLfzbHmdSNB4F4HSGA17fB7c9QkAQ44of2q1Hs1YGXyHPUU83un7KS57Nge",
  "key19": "5LqoPRkyaSo7CaDXQadSDvMF54n8bngccHCjCefDzpGSGaEBUAPMKVdzsNeDpbQ5j7ZqRwk62XbbcZqCRG8rjnde",
  "key20": "59rbe4RcA92RepXLy52sg6HeUy7ZGTCkN642znLE6iHb9T1GwRJxXZMb47v6CcrA7it8ULNH5NG5DtgDhQZhrspT",
  "key21": "2eAVRKYDkXpsJA7tCwzUWuVZNEE4YDqR1qEanqkgy8ht8MdRCdziHmiARJJgdTyGhLL7m9hjsJbQaYjtshjs8Wcq",
  "key22": "2fXSbiH5HjQADRcK1K7hrmaRhHzmbwaR2KJcHzmEQJEzdB9g1qrQNiNU3qLjggyywejEHxkQZNWDRoVopoAWw5gx",
  "key23": "4UmmJFEkuLArdF7tXR1wD4VfqVECpDh38F24xwwbLjDHYAAEGS4ervakG1d1SAXZkZX3WbMP4nxq3vyoG6ijBMow",
  "key24": "4XS1S6nJqNqAfGCKCLnWCwxVdygm929Lsqcy3Rp9rirTWe61R6L22pPwwciBPdk722Bb1skwRjfGdidihCgzgR9e",
  "key25": "67MHRLCuEERn7yzdaRxoewaHhVUbx5Kf6FUF99pDZmAMQCZq5oefQwLPmGqoMNzYWsuCMyDLeZFQPEH9xyFFDPfw",
  "key26": "2zt9yg73EbfDk82MtUwTAfCkiDLuhd8oyD1SNkKrj72hkCHsotspWBv8VsTTFpxq2RVL1hLHHJpcdsgjf1dAaoYh",
  "key27": "5yUmE1wHhxrzrSB5AbBTp743Sitgt3PV4T7hTprhMijyG3zVV3XBj5HC2AsbUp7TUn7qY33dVM7HWQEh1GDP5cSa",
  "key28": "ukbfXtwoexqrWZNPdoUBkdG12d7At1Vst7HM3V63ZEQ4a6xU8KMzeoU568Lz2mYv4ZSSc6CtypY3gXvEqG5wUHf",
  "key29": "4HV8SUaZn2Y9LCWzoviUgdw7s6EzTcxU35yyAQv3jqYn2XDNuV4hsSALcrLdUpvvsdieUQQ6jqyEVg8QfGtyeXRC",
  "key30": "CmM1w8fcgBevQm6oC5Qe2kRCtYPi4RUVBkiEFsrNEk3dvzKu6fGpSXasLJakzzPi8CyzEwneMNvd3AYfD5VDcbE",
  "key31": "63F2S9jfRFJrbpXKb4TrCqAM1jxG2evDX3Sh7Jro9YYh6H9apsN7R8c4BoPSxCpGMyc1yAh33Bq5rQXWookRcWDX",
  "key32": "3sjgGVyPo3XtHT8eFX6mdXE8YSzY5Uwz5iAwTkMuNDeg7MHoK1z5Kq3aUXCy8wcWFBAKD6zwfJ4XcTW3cWhPCruA",
  "key33": "5N1FnhWHgamBJYCpmcCZzQwJWPFi5aJ3hKyv9Tt9RGRLny2J4CM5NvKTSJHMZe2hD3PjFqrVJeQWVt683qGirWV6",
  "key34": "2vNgXM31fAAEksci1E8vE3zSpsgw6XApRAtpeH6RB5k3Bh6Us3EZniu8My7zKBjteMpgYf1Yvd9jYYVP5WfBgBiH",
  "key35": "67Q5rcfyhMyGETZDpsPFhwHQwphV93NEGbkAiUSnEfX4DTLqK6SFnVTbNCjGweacpzD32CpTMTVGSPGtCr9QihLp",
  "key36": "64MvBGq1qdah8tmAFomxVhNCaNzYWuLvu1k6gQz5DX3SLsLCr6EAx8kfqPeqKAspnircznDBEJa2BSg3anU9S9ec"
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
