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
    "4jAvdBz8E9oxmD46mL6V1mnt1DkdWVbCNn3SDNjBHiGapXdeKh2cdg7igmdQ46oW7ctciz4VQF5rxh9LKor2uGBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bapRudHcvp6msEcvbMkUqbNPt51WfB7H7xxE7c7csa2JheByV7zjYcUJcBCJzk7sbHqVZrygkmYCswT6ktwv5tC",
  "key1": "4zjQoRLPh1BTAnEqDobmjmp4QjVE8SJfNysuQp9Wz6SvspEzHiiemTrumT6wgwhsmFrw7aw9jRNBARCWVqueVczy",
  "key2": "5dFD9fbZNE1NmM5h1DdzLkFt8Wz7oMAwjiwxEqovHXbPUNmMnRBnMFKoiNiRLgA5etjpPAn13eeq1wX2XSfSh2Je",
  "key3": "xf3PinhoQKDCPR9qTJpAdH2jXmNQQwvopUhLJCrfwBSQiAa7uhsGCheXm4EDcXJMV8tYd3nXSuY4dbuwXfDMfEA",
  "key4": "4ehxLftq5DNcr2B6xexjgdaPkRfgaPkZFsJQ7GRrk5spdF1VxJjwtofadAbwpQQqx5Z2nXupHa2YnD9kLZzc7cDJ",
  "key5": "5RmQFyKsz6EgJwgA2Fq1LRGiBmU3w5XjFq8CwaTpLRHx1k7hDPd5yE6ENd4JxK7iAVY1mNKRttZRLfeNkPyC7vyd",
  "key6": "4sBrMNxNeK2kRLYgf23becUrvYUgoMYM1HJz5z6gaM3CwK4NAFpLa3rv7fuV6NhiRtSeKJX3i6d2Dp983krC7vVH",
  "key7": "4CbhpKyd86mdJCpbahWf5CuooCxPPBZbLZ7bi8mASD9KLvLG9JPWxpm4ephsewWNXZwgXwMjLmuFizjAS1SivNaB",
  "key8": "2J9hkHLjDEFZH4gicz6oib62rE5RjFViHW2kTCFE2r4A2uRNYRebZW38UH5xcXaLanMinsq88aWvibpAZAfR1NWv",
  "key9": "4BbSQQLGbvdhGkbs4XwouFJ5JpkFqqHqzyRirUswgQ87ZsiGmyeynDxmKUXUWsuDzK3AVkWkqwBdJQHJPqfYqmbK",
  "key10": "fLyQRBTFZ3sC6ydiZwXLYDNqg4K6oTgpUebScdg24pkMP7GAGQFvHSKzB2S6HAcfztYuLtFufNcAowNQZTPm4A4",
  "key11": "4g1JcyoPTeJ6S43xrjDf7s5U4uh9uWzoXpe4zoW7qN6bGRBtWY9yppiPb9enEru2XZm8AGHV6sgMTv83pt3PL9CK",
  "key12": "4uctyvdChy56h4vQKaP5mKmVtnUAFkJk2D2zGYbBnWoQz7vwa7QE6w44qC2amwaPayi7u92AEB3S4YSawrvoXYdM",
  "key13": "3tGneT6ovpfJEpqV8TUMzpKLboWz4r1Pra35oJbDqAK49ujaHLVqcoCZAF2rZ9xEwVTLo3tXSANANXcWoCHUJ5Kj",
  "key14": "6WiyXNAqYC7qyrBpW9HFJJRAB3Y5HbDWitnsMqkwrBAvnbU8HADu5eEkmMceH3iGSwx38xqMbvoTAhrAorpLPiD",
  "key15": "5GVFupPgaH6euDkNBpkXaFiAB3G3DuvcPpgHzG4oLumDDWxMp4RKc19QKCQTqfeKsrtjRig29ayD2sDznt4agEBJ",
  "key16": "CTdNwPsDtCp2ywpyFj38ezYDU3cxNh82VSRReyTdRfsuPcQHQGvoJtLZoD9Fp5fty9uAMeFv69TS1654xRuxv7V",
  "key17": "5RArYhuYfijP6P5gsQqdpEqLtUNAg3Wsxz8yKeHf54axEi6EdBbhP8J6KgFBKLtabVwiWrdxSVgs9CtJdr1ZHx89",
  "key18": "3Xth1H7SEhGrXAWYvArxdEAmuvmTYYwSGT9C2HZWdt1rKpsu51Jsnremxf1fEdxgMY1XCsm78zshzhMFrPQLo8Sb",
  "key19": "352ntuodmbz6Xo1qABmdYQd8MR89CqHXkw3g7EddUdiVh2JdsGjAyi9HK6sXNa8BNqKdMnZzsCJ5z1yfkjiJ8AcL",
  "key20": "27Xh7dBzWGj3cjB4YQodXBYonNYjkEJBc5hEqsHn2oGtnbad2LSero5iEWw7Xvsp8GDy8YGXExThJNhDCBYzYVH9",
  "key21": "35B5r54Cpw82ryCbQLRM2aVjGxHQ3sYfTkhLHg9tauCSLJPoZGLbQmo9WeEXmY8Btc22iwPZnzFFL2N1Rt4p8VgM",
  "key22": "285UbHLHnMRMTn3MZnu8AxSZUPyYuj1LCboq5EqRfDsb36un5Gq4Ci3RSAV29XHggd4mq5qAhJygoEJZt5y9kCHX",
  "key23": "shyDjWtqs87WtLXLgD7xUPX2jUiWUwwy7SpCHZxoJZ8z1PpReBiPnC397c5H2mzA3syH9fP4itxSdGRke1CtYrb",
  "key24": "58zJkA3g8Bp4SzRACTv7rFR2pXMAoSsMFuAsBCuZDPsc7SMvEYEceQN5RtCHPB7k91ZS2ZGfQzRCWd7c71H8dJCz",
  "key25": "2deg42WRHjJL1g6unMfRRRK929tGGzmzwRGThU5BEu9rrLfcDGBc1BPGj6z3sh7b3Ht5AAmCUae7e7uqH7HRWsxY",
  "key26": "3shDoGCup7qmRRXJsxr5rqFiHKvosvbU8Cp5wBq5YKhKXF6zb5TZt9hNr7avrrbcdMqYBZXTND16xBDCeKJQh7f6",
  "key27": "4SQGtkXcjaevcmiUF8UxmLidhNNpwoZF2Ue49LfN5W47CF9DdkbWvCn8Z2bDkByz6s1MwERiUYHdcfk7d2QbrDkt",
  "key28": "5ynDCwoWNcfV1hByS59gfuKAxpUAk3LESsxgGUZsmjwikrhTvrsud5odrLDHJmyQukwUk8YrKbQmyMXvshj95omU",
  "key29": "3KKgCR9H9XuiV5YWd3ffHgWcx5APcfMGN8y5QLXGegR9DRQbdJHVq8yj1FHkARf5vGrcr6onW2rBaySU672wfcJv",
  "key30": "4JixFHTfudoehGLgwcDvrF3E8ML8JBohcWXiRguzzNAtg5ZikkAVpjbs3vZu6SiFZ6izWxJXwhwQ9DHxSWxNRoCo",
  "key31": "4eZ1oGRhZLfT7ASY5j2rRhy8LhbDvYWrp7SmMj9nhejfsesMxqtyZt1K14eD1Zbu1QeTXbmQz6THdTQb9FxdTX26",
  "key32": "2j2GxVu2teMrQKvFeddmhJoqkaDeb4SVpbmcSWFUkAVAdmviUwCheK2E3udSVgKtDcrw7qqPJXwPDmzBXCg5KxQ",
  "key33": "4U3zP7ZtFj6HxpxYs1PjFPMwS2KYK92ikoiRN4wLCzfCVAPGDShfReky2xcKGFvXLcYijFhsCjyhcYg2ChkQvGJM",
  "key34": "3tTEkpXz9h1LZYCeeTMFFXj2ieG6a5KiJ4szfiiKeBzWNCRcZ4KcoDcLGEsTWrJ4DoqztVHjXfnihjh3rHk3W56a",
  "key35": "3nqz8MZXCcRCwDiSBCzQYReTJURg8AGsmaU5awWQp2xbiiLHEuXCokB1guCKmLDdetJWZzXzTYWcKG35dvGHnTPy",
  "key36": "4znsbUW37bqw1F7GMtCxK5PCB76UFCGJ2dxLABdQzxEro31NDyLAYao1HwGLYrZTSGqkr8qFRo9Jg6uv7zGsjNwT",
  "key37": "542xaYzMCnErGw5FhGc5HYBWKDHLdxKKSwFxALDEKtJkN38oE8juHhjZWWhf8G1hBPavdb7gsAoY2FMzqC3dNSts",
  "key38": "22NmpZQvvUeyx2HhHqZyYj5dJ7Fe5ZkArUdogZYSxWGyGkUwa29cydTPC2FpFTS5JVs7kDQgHm28G5SvExdobZx5",
  "key39": "5EkCBs75pmABmp3qrSwtpvAJXAQqzNdxJ8XUKuqHCLuwYPGwLyBnoBu83hG7zC1hvbtaHpAfk3tkRhW7q1H4xHS6"
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
