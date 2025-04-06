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
    "oi54zBbqSTwRZb55TSftmm5oATUshEBturEtwm5hqpg9yikgPfUcDiQrwZxneK4VqfDCgHWYoFkeqWFdPwBvkPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FsMz2x4FtRFcNpFRwmgW2cyLmdK2oHZMpPacS2XD42eNVzVEBJEfVZxerTKaASeumWcyGj9khDzEjsDUu7NW1d",
  "key1": "4Xo5Db8KZkboEA4nYs79wGzSSLjscUmLjG7tsjvvtiRnezqsQmQH7Sx3pHyXzktpLJS5LfqyS9GqTKk5YVppEbAH",
  "key2": "ju3RuS9FYWyVwqTCNUGBaLjZ7o1JnHJEK3GoW3rHPazo6B9jmcRCvuC1KgVaDbcjTtHfwqj7NT8e6gRyZsWph2y",
  "key3": "3HqfuJFLN8W8VC8hQv7C9MtCFM74YgMQfhHNnhaXY7sS3wcXvR9koUdsRd39pzUSuB7BHhh874nFmVMAJcisVaAM",
  "key4": "5uwKSsxWiLtgVcxEU8fX7xhPua8qRURAkDwWe9DVokJFh8HEyeC5fwRyCCGHgTT4PGYZR6j2cD6BxH75chPfEKW9",
  "key5": "3GDFB8girFKAuvB3gPEp1v46iGJTSRAHcvpPFoHoYjGfTMb3dySQkEFun2oVuG7BGkA9EkAFSRbivKrQ9PFm1iDr",
  "key6": "5ae1jr8kMiQkS6pdFrqBXceVurDYfmphydKdjUt3TqGpig7RREyW11b4WFrzfTkvSudS25b6uwfeARyS5kMHTnv8",
  "key7": "5KW9U4CEgbUvvc11EohED23tzgo4nUL5gUZrdcRQrMTguHG416G62b3rYbme3a9LUwtetr83Doc1woZHYPBg3VZU",
  "key8": "65qBcbE4wuBrmpfkkc74n2zpQDzMZrXxeSs1hxc4MnKVSgSCcK7QPxsAQFXawsvctoLecij2VEmJY39xwjLZgYUM",
  "key9": "35QN1o36yTx78nZKk5K18d6YYWEPMJRerBMYYPjteMTMaC3Q7CykE6syuMjfK2MGo8tvQZqWLEeErQX4mmD5cPAD",
  "key10": "664gEcRuJ2bT7PKJvyD3raTccmbXt4fCXM9yULxj8DsdoYihzHeviXhvN9sQLAp7UyVy1TwSSuUyBUbSN4bTpLe5",
  "key11": "5Gt4JCCZsYeVXftrpEuKLxtz9zNb5r9zzfRv2wB3Tn3D4hMvuffmtGJqxogMfAMFDmgaosRSrpdYn84GTYGMmjDB",
  "key12": "4wa4nUKpyviFYeYLKM8jXrbfFA44vbWWNvM6agwABj32NF7VcpcVet7dkBtRCMjabkaq1MbNtppdN9CGMGnTC6HN",
  "key13": "4QgxqHjiFWuCPJTbfTv1DjA5XaYpbbiwU82qMBksSLEcgq9HCEMv1YoEn8W6nMgnBo2E65BvoorkpaoaZHyYoQpa",
  "key14": "54GXJTkRJnwG5sVNcefuptuFwcinkeRV8k1KJAxyNmAAEyKjd2tHVFUntu1mMrVhRGw7GS9tW8Nr4qmcrySzFp69",
  "key15": "35v3mT7WJ5MhphaWYcKPuovvBN5J7G2TEfffmmm2aCwyErwQVqE2zbAEzaUr39UNJtKuePowfdnGMAdmZff5yTXF",
  "key16": "4btxA6KNUqy9rPFZKr7gjJss7BZizqj1Vv6aZJkXBdvm8E6xShx95xEhswVf2WknUbxq1ZE64nHSHwEWPJccYWoJ",
  "key17": "3brzuXpbkNvKMw5Suwz2EnvJoRNP6tnY2tFTGnqsLtsnAibid7tVRtHqMoXMBNt2vPwRhv7VDg12C87FZqsWrDHJ",
  "key18": "s7XjD4EsKULUxTuobZGkuhGNqyMzWwQePTn4WgQWLiELzULdY7AW3a88cnhx95hYbYefjpLPxdqkUQvzomwLQov",
  "key19": "4QwwSo5571NAPx7t34dKffsqLZg6Vke2oDAVvj8uQcv3cdpGM6nRhEeCgfNAp9jCXQ5aPsvfu7ybCMAXKw87Juag",
  "key20": "3NUYW8DZ8XeSy7EP4uYJPNVe6kcUb3MGSZbvTC5wqcnfby8Cu9BvoHnsEvaP1xQR52VLVUbA3Qdot77R5GitNHSx",
  "key21": "2c3e7yRgTuWSwpRC51svZVBGnik3KjPsk2FQbPeGWyHtcYp98r9Bq7ja7Y2FxxCXS8AGYvwfRsJxkw2NCE6CmyYi",
  "key22": "3UrovNAeSjwiGDP4fH88LtFVnwPP3QyGGPyYnFg6VVb6yLuAoC6VmcCCpzuVCfjCtM4gehSnw1TEwTq6QRfAEhaX",
  "key23": "5JfD8TRwoMLmUwkE1NWD1eiSk22Q1ZVnCwcSoYLoDxtnby2EF3kz3WyPDg2PDax9c9PJka7YNPafDhSsSFxfhDGt",
  "key24": "5NU1QFjgkVNMsKwds5M3uHYiLgeuKT6gftHA1J798Z742NMM5ar7U7ZoWnn2ZwnE7DE3dmVoHXqk2PyGjThF743v",
  "key25": "3zXTJkSwLqYXK4KXD8aZa4BjGkQ8P9bkYQimnsyh86PH3g9qPBuudALx29ppkwubDAKoPE8v29aDSFEdVa22Fqhp",
  "key26": "hjhwgS5KWJKc877ZarKeMt9Q3GaDvAvb9i7CnpFai4mL22zfPEjiQWuJAQADVCTuDDDWwHPfGucyEVQ4Fe6F2z7",
  "key27": "45nmpoiotMvmneEuJStesHcZQaBh7V9ifQ2kepTqfqWPAEiEWxzoBdgWEyDKWypmn9Q8wHfCT6cGn8Hb6MoFF1Mp",
  "key28": "r7FjqAFGU9gExaEXkZsAt9wEEEDfD1c9UEPv4WRox3vYkM5kf8xgzjwZ7YB9tjcCYEnX153G6zJTJcCLk7VxFTs",
  "key29": "4VjgQQFuBqfLFNdXNqLb5NhcoJ9E6tTsbSfo7cgH8akT5YeNBzSbakbYCXRxMKbd5McjDR16RqAyenYyA8dP2bxq",
  "key30": "3xZvDQsAsQ8FnE17u1W8krt7ZrRp5BQxWK2uxmruYyNmVoboFEUiaeGW1inHWXaoNovB1bxeCdjzvepJbKeK35VB",
  "key31": "3yvHnWDg5m9yRihzPjQn9AuNUvV9BSyV6H3WZae2STG4qLcKgLdZdeWQAV9myj396UNCeUJ4spPEzEsTRK1xUs4c",
  "key32": "2bag6s7SdYwxbynmFQxaUh63pSRR61z2UK6Es2mfTJnNZafGvYAxtEY7XbDGYER6wSnYh1er7GyVSSEjH2vJaDRG",
  "key33": "3VvpZzWF6d2chUBCkH66Rd99e4UX6efZvKL4fhTk2WPxhDkiACtqDTEvq1NEzKa54ERepeeP1DNsRxiZjEkMzEhT",
  "key34": "fsbyTTmsUjC1MbemtgsDjrvCXi5pwuBaKdnefCSq9F7GnVSySob7tkdcvVxuPBDZtmMBEdhDQVaxuXjB5mqZaX3",
  "key35": "2F46ksaJxJ4FrLbYYt8geknJK84LJ9Z2x6cCwotaeDdL4r6ge8hA6Z7RgkH8pPDtxtTCVm4zqFa26hwkW2z8PC4p",
  "key36": "5XihGjeXFi2jYHKTbRR7MCG1LMtxCx2xNpQNjvpjbKzstPFoNBKFEdpb5g9qBwGnhfKbPKcWtLvpVqgH3rW15Ggx",
  "key37": "5w6tWtUbc5DJYBFWaVasvcaVYYME64ZzwmZ23cRDiTLFueVgV4UKJB7xM8njVq7bytkmguV5ACCTSCobCVk3gCJ2",
  "key38": "4ygEM5v34gfydDMtQgqh1Xh9zuH9iaSTpr6mmV6EnmtZbQK6Ye29kqFQtfYYUDqvq2kNiW5Vuq2p8qhPioim8tHy",
  "key39": "2sgLjdhxFpBGLT5Jn1QANYfSBvV9fFaqJa3L1XTzGFzZcfMHsrQhDxwZkKSn4rUQLHZeMZnAYNDsuywzma77NNrm",
  "key40": "4nQtxjsqCvaKbJnqMwQuJTq58YWPPcnBTwzjXZXYtBiMSgkYHxWAgwgfZeA23fBeJKpjFJCXx3Nvdvequx3wvFVR",
  "key41": "5SYy7KqnrEvyLGv8QBY2RZ8oFdpqqgYgoX9mh2h7wP56Y4DFa1zvakumdbcoaDi8JsFPKDaMuL8xghjXrBqDR8BV",
  "key42": "65XsxwpuP7niTjG4WTwAmvjen1jEcrRiPWtQ3ay4okCzsbY4nkLprwYukP2WYSEQnarzooJCmFsLhAXDCEj4UK2C",
  "key43": "Qv16E1MW56oTG6MjbPmyR3bG2HkCmC5wTJpN7WSBe9WG6CNrPL8FsY1SPxDXD7dKpmEYhf7Ya4X3okGtLAujtbs",
  "key44": "3v4xbGfa1eBMjTn8A3rP5FFe6y768hEthpr853AoV7MpV7WMvc5QhZDg2RZY7iniYcYi8B3dSDKixGNf2ribZK5b",
  "key45": "3cM6CopEBAZvLihJApwbmGjpmJe8HpsxasCKc7hx45mS8754tb4sba8Xn94hjTEYg4X2oBh4EP9yyjNExMy4EsnA"
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
