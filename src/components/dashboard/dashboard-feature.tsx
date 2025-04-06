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
    "3LHzrA1ybtFpHLEc4XyA5V4j1nRjRnEoBKkzZa4MpemnrGARBnUdZoia7PEQvt9uPJHoP86hRVA5bfpqe18hneW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zh5mLsNXzUNBoP6RjJMCf8znZgA7vFTbesxViuYX5S9RtEsyCavkxt9K65dKi22hEWLWkqdaaETj6mtZApxygAw",
  "key1": "3NKtUVyJbkVHTZVh82TWZ1QzEyWVuGKFDpBS2PY5gfpiSe3tohAzPwDapur2iUCAjmvhPBQe4pgeKKgrTmGLeKk9",
  "key2": "4a7ffXY4kcnu34Ap75KTtY5kPrtJiN6NCSd5p7wnR5WFiQ775kRK3JFisVJNQjXZ2pvtwGobGQQygsveAvk7dqGL",
  "key3": "4HKJ55nGvJB2cdG3i8gmJK24qUDwax41toz3pUrxXeWtTdEHS6LzDm4q7cR6TCY9m8T4ELvYG9RLDSwiWNwc5K7f",
  "key4": "9j7dcCqqf4gKKxonQESXARN2h1vJqP39ELLRZq96Psd9ykpYg7jQbQpKVwvXYo9jqQvuU3vd42Thfn7dB5oWAp9",
  "key5": "3QJfjyzANECw1m4GyQk4TJe4de6RECNg4C9f2Q12PF5TR8C1FSPZwrsxLo24fQquazSL15KgKoS6LSveHxQ8LQ8d",
  "key6": "4vqgdaP9mJqHdd8Z4fkdLUkUGVYjcywSHHN6esNMzA6tf3szKhcMfELYoPaGU5Wnc3roQumuq3j1qLwmZWHL8Pq8",
  "key7": "3DUCwQMvg93J1PR9nL25rWMdU6MTMMS3R6ne6h696x4m5eJ6WLoVjxRaXYPzVqQYBx1VVmX1WosNw7j9X4BWzJWt",
  "key8": "5FAPYNd8BKVzgWAgkLxpB1HJN3PHE26RGhYZdZXptgiQGGqejhy7pjVuK5oXcDmrP5GU3T1oGS8rJ82c5cTWLftK",
  "key9": "A7m26eKLTcYaypisgPvfJFVf7FVYxxPYTRdSP4hay5LJYKrCf7TppAoMHDwJGKSnozPb6ARNahMcMrxpke3KdvP",
  "key10": "5ABQ5UJLx9MFtvLotP3hPopAY4jJemscrBMCCKWGfQ5asStX9U1vtXZXEuL11qNBpkNWYzPGh6kaHDvHSE4YKsLn",
  "key11": "4gQ8KXMZqbF8CrxZveTQCmmiYNjcjcQ7oGm8UmC882raTN6mLqNkFQyGTFv4rF6FX5ngrcb2RcQti3C16QcgbEas",
  "key12": "eHgTmrV3U49ESgsWcUsCa6MVvBjeaGxHLY1diWxPJHn2LH8ZTPUbrxRxsePZaRu8mV2BQL5TehBnDu7zeLu3nm4",
  "key13": "2nvDMvUAsjT8hmKykHwDbxRVybRxg92xh65uCSCCUR8cc6ioNeCAzPabQnMe5Rwq1FZ8EVDfvGXM9FVF3Cru7muM",
  "key14": "xoaLyegAD3wyK8cV6bGbVfUjgCqMC677uSm5YZ7ggLUSDCTAKiPEBdz8Ao5iqWQFEUxvyi6Kidw2L2R2ipsdcmt",
  "key15": "3ka6FUrPuoKJ1zugD7taKs2ii9sWTiBYB4waYJ1SekrSoAXcyB8NeKck5sUmfH4eYoeY57m6fy7fGgVR2Rm2ENak",
  "key16": "AzyGqum7dewPMMvZYCemMq7WPTSjz8GosyKM9VLSmti7cKmHXdtBtKxD55tKWKxqRXgT9w2F6rnHcxRMK9TrHwW",
  "key17": "2NiAobREjwTdpHzgNNW9xcFcJP5vBNyZWrmBFtWYjx3YTJUTrPGcMpsi8JiY3kzLz74THrJbBpTpYH2CekTT7LKR",
  "key18": "Bw1PFxPZX6wYKdFuR8CYQDjo75nZX3iQsYT7XD4AEB3KsN2yXrYddaiVswvSPG1NGHJctnFojv58BfSu3aDhQC1",
  "key19": "5cpzE6udSvnh5LgyjKpcWjSqQM2umLJXLtFRGyVc5aMUvmexAq5taMpJJy1EtVKBRgRbZu4kXcZM8QR9na6MGY84",
  "key20": "3brUViF1tLwn4n1QiMx3rVMaC3XhJ61WFrNVpTgTcUtRvmTK8Cw2KxeC8DVwTpJuLe3332WAYxDdcM74rj4ZMr53",
  "key21": "R1y9A8AhuNRe8WR6B6Mtr1HYgJMY5vdPWVUrc5mrK9kxFDKtpcrFEyU7bdTFh69fDt8vR2omukPcnYs3V484Gm7",
  "key22": "5u2p1BCseTyCC9JzrNdBoRzsgHECbjQRWSdAqsVxaYP1NA4aMumfKoiazHJPhV65sMgicdwSBUKicoSFoMPjFZH3",
  "key23": "yBCVJv4KpGwzJsoBGtfE14ke1G4JAZQPA1yg3SwirGJEnFNsLKvYqipy8Pm7APqGWJryDJC3bo3Sgo8QTQjESuv",
  "key24": "2CPJW3fSuLbPUK5hX2yaKMm4qytFW4CtB9PRtL7uw2q34cVUfehZPaWjeMTyAe7M57UZjCCRmVHRnrzKQWikQ4nN",
  "key25": "2cBbW8ycEj4cKRVhSsgQdLGShkGpCjoxN3Li4WcTUdamdg14Bi4zMQvtPQohkkECxZc32nNVj6gREbpjaxxZPPk2",
  "key26": "5rZzzDqfWD2JeqcSdZiBjswfLquCCfVdErjjNbhrpev5xCzuMWsB2kcfKS6HmsaWRZWASjABGF3CLuzuDDSQ7jAn",
  "key27": "2WiYxAij8tenTvNjohrAxFMF7LSTUY2h2ATTMwT2bQ9HtNNHBJRpx34eGhoqFydyR7PMXJheifHoWYhnQcHucbLD",
  "key28": "s9u4A5ixYLAheRCNE98o9ZLsbFzF4s26w7kcJ84oqUT1PW6KHgywxeyHcVAVXiofWMW38bZtRjS5w7QRhtXZz42",
  "key29": "4oBXb99NL99cbVSSiyBqi45i75oCm3b1rva6uoqmt9Bf51RFLXVPFB9QmJwEMtQuhi9mrVKhfmUhTKZk97UjTGL8",
  "key30": "5DNkCyCQ1L6sviiTqdL1j2juLRG5wrPq7ZxjYsEyWXrDgtu2but77z91GennYQKebA2FpGqpmitGe1owMWGN7cSN",
  "key31": "2kwk6FufhJVNKykmAntJzEHWbQaHbxEZc2EHtr8GPvDXyKr1rQLYusYUpK9Tu6JjTzoWnoFtUFTyz2byvi3wPL2F",
  "key32": "5NTVrmGL4485L1qti5cstsW75zZZRFWjufniwiBaPoFrWeqX2MPk3DWPsqHky8zaAnKRuKKmTpKJj8sCxmyuWH1o",
  "key33": "35B2Gp4BiqVTUQ1QyEEP1SUfoyap3gxWa5PbgdxTUEjyTF1jtFRzmqetzZBykEgrW6NiwksorK3UvtfQYRbzrvzV",
  "key34": "5ngcnEMSUf8n42LV2D35ARNiBLWE3irTGDcwH7WRJVk55Z48X7fo4b4vBZ8FcN7USG9DrdWNUw8tYaagvCGxQgoj",
  "key35": "LqKiyZ3uFtd178FmWdNMnPojxTPoD8ALLjPPW5pm4k7Se4BcUqqP5p6fuenBuTwgTUbS3N9fmzog5e7EQ4neXkL",
  "key36": "3fELndW1SK7cWeQqcZjHJqLGHVruJGp6xN7BY4YNnKkSN6LAzH2pARqqtgSWbFN5U58J9FkMyDKCpFuqTGYcam96",
  "key37": "5u1UDhS4RF1Dn1tiqZWAHikd4L6obUGxzPoH76752Fphg8acJE9hrvu6CP9LcJhDE7MSdTPPiSK2WpbHWL6bXKoo",
  "key38": "4hq6jCokGktf6fKuNmaat3dGwbSqQr9i94ksgHmSfu2jrre47KzqzBF7yTsbqrekoiUwaUthkCQbDHu6fpLQ87W1",
  "key39": "2wiNNL22vizJSriTtMsFMSWxrvXpAsE86x2AUTf91CVygxGRP4nPNGTzYCwk2jgw7mUFGT1iZZxJwjLRLdk1n2x",
  "key40": "2abKXL4mVHbb3pmiCS8e5pqm2Rr9BEhcvrqiwDvu8ThSNsMDi3kQvqE7Dyadu7epGyyMyKJAvDmfhrXeQabCXfL5",
  "key41": "5aqB5YBvRgAp1zatwxu7n2BWbyF1JSEUSxcJaQwg82Mf86wymTjf1jvQJCeDzGcEk3vfM92z5TdgVNpyfUfm3hs7",
  "key42": "KvxMvb5wss1QDLv7D97oxZSSuhR4RK6UoYXmyEHPhdaAXRHnucfdbc4rBH1RP25r7nHFqwcRcJTYjYQrb1GAW9U",
  "key43": "BMvewCR3RQMwXiE1pPxaWhivg32Hd3PWd2GgWsKSyCkfMT43heBGD651YekpGQrXHGE9LLwZqWzrNsoAyJRHjmY",
  "key44": "5WiAFbTea1DyfH9ZTDdiwos2mL8BBQNSdKgVMk4viJVFtcafxuBh5quLvA71TcNjuw16AJ3f1pNeYzuAVx463FXL",
  "key45": "2yBmKnu21f6ivi5m6a57qSdbD38ZTPvsqvkrfPokaijjwZtDDeJEzKj5CzL33ypf2fuQsKXbN7ecJ8qjDAsCuZR5"
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
