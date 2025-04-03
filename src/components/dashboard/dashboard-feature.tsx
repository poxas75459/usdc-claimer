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
    "3a1eUXS8Nh6WYHhKEfBZuGnkAwoQaKYJvCeezhV6MqoxKg67UZF5Y6NXgTEN3vh9355rNYskZci6zE59ot6AGQKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CNsnRuEpGbWx2BucgsjBjMhzUtEKqPCYYnA96Jknp9pAnCcpgscrHQ43iUBR3p511RGrhggvaeAmhb52YEoCRUT",
  "key1": "4RHZcsmPwAHSbCXWnkofTznS9XG8FzBRY1C9WYETjxo7sAqMRBBZYqgru3RS4MrHcSY4WZpodGSVMrt11Gtnpthw",
  "key2": "3fcMpoSqcNcQ1mehiTyNcNTRBCrQD5q7PkPhtFVKgegWTnBdbszjuhcV875Cc4cczhbipz3CZ7iELgNSJx6WTCDw",
  "key3": "2c2zik3oHxsQ8qNZZDbRFCQuWVH2JMfw7LNnp4wDg6wTjQMg42ctsSmHvooZiWMiCBrYStiv2fYHoR5BaFKqBjax",
  "key4": "4z86NzjqPS7KzBAMggfgndMhwYFkQUEjwn6C84mEAaaD43Q58RgP1yr6crgDrXbJ9eW43HhqLY4q6GbmgLSvMAV9",
  "key5": "2cVxgLVPqRb544XMt8Khm48f6PBBDEvbCUNnCDqFSwAVaHWHevEuMgzA3QLEswJB2gyjSPXecqX4xJhuK2wUpnoN",
  "key6": "mP3mETRVx1zJVJA8DzVpWfPMA8fbm4UYmziPjyD1mLszphj5UEYokNJrv42NnTxq1VJN8MSayw2WpxWpNxmFKra",
  "key7": "4wjGoJeakv72r7Ka4aRm3httN9Ym1qX6aZ3PGKapGXwXbzu6guqh2HvHZbdHdhv5psN1aB7ZD7VeEquQGqAE3fqA",
  "key8": "5ttMvWDMi5zzRNz6p6R7PUZH2NRECEZLTwTXKee3XbP2U2EkZrfiyzYvmpJMf7V67fNox6o1fxf6VdTW82z9wnag",
  "key9": "k8e8qeMsfSwtP8Ad9taeTHzxwcef5Quosf2o9MgddMQiWVuzubHFE9ReAFzpnmqhoNqQSuAziigkgHCW1E57yyg",
  "key10": "4u9hJ13b1yYALM4iaHx4R74WSsvGEh7Y8z2YGx5u59FQNB6pJgxGK7Ymn7kZqMrreUHWVuZe5D46dDooApGXyKzP",
  "key11": "3R3j1Tn3bKiFrMzzWjrkzrVwL94vshdeXp98DY8cHsK8ryvDJCJnSPnFig4QRLipTYG3CmNvhJ8Mm6u56RJxppCJ",
  "key12": "3YJSq5zwBDfTheSQefB6cYESC2QXdzq7muiiKRPkgCRfmrga8o8Fqe4nRifvcv7jWwxb5SRj4QFLcHmo1VwgqCi9",
  "key13": "2hUvTTophptwxLntSu7twE1jsb8i1x7uhBvtKXoxKQhVbkuTqgynpoGkPHL1Fknp4ZeLCsyEYvML91XomCpEGmJg",
  "key14": "2gMXqk6UqpiTinjyuD6p7vytt3Bbphqqr4S91RMatBiY64DXdnpqhJZe4pyXhZcn43N3LV1HkEPBr7kQppzvGkqx",
  "key15": "3MC9KevbqMSi2BzyQLoBYUhq4zbZZuncaHDRuvDGD28ask5WitWL7UQiiSqEzD6UxppHeoYiFpSPpUTxDp9k7t7d",
  "key16": "56mGMmCssNSUrU8Xxqy9BLTjqzspHvCWTnN1uxY5WKrB7g9T1nUPsncc1HAxaHHUkNPW5wyKKFfbubT4q81nR5J8",
  "key17": "2npvy2A2WUxZ1Hbt2dBydJ6j6HDC6ycxboQSBqXNNt5JUW7ZntYyuDdCpeSssENo9MbWnuEC13bpsZKX2sPmRcHa",
  "key18": "35ANLX23FkceVv2krgdkSaTGdhGRdxqQjpfR2mrTE7v5ZJGuydhKkiipT1xpiRd8rjyAs56eFThUUA4JpLSUGzHy",
  "key19": "4PjobeaJtDzUru92YLDJotPBnrwrHBn79nBHboeRgVdRkUxKVCMxmKxnKwMirugGzBV2cTFzKHrEL4YuDdyPAyzP",
  "key20": "5tzJmHD4pP9pjqe3d2ecYXdUrExFmvN8ycA6s4KcJ8sh3m2VePj5aVnLrfVntWceViKAVhUTMyhzwjJjiBJcL5aP",
  "key21": "3iaiU6XTWRCKtEC3jXtUtwGc36XjyLTnRVRf8jjNR5BgBexEV3FKVNK3o1kBspLTkHVWS2edpoF1Jsz4TzfbxHCf",
  "key22": "2YFvt8DotUJCvcH6negsf2BKp6Aiztb9oEukr5H8MVJdUxaWpSdFDdwRRUHQwrNfzUt4yeyqz7JVeid9WgGr8DSb",
  "key23": "3KdB5TkLW75ZsoLUzXzSM6FPymDbj4N1rHQFfptr3mi8qF5vQWKDLpu5bQPdwU7WpmaqkimRps7uyyTDqJt54osq",
  "key24": "WCEqhvQ6JrjEfoXJtdyr1Ry4C2Ux8qbDFPbQ85UWUKM8ziuvZTFgfhUe3KJP5DJXhmFKDAkq8nvq6ugbaqTA8nU",
  "key25": "5WB2tkdMgfpJ2LZuzBg5T1LiLD7isLX8TQj4wrKTqbuFe1CQGKD7a2ZnPPCyJiXux8EWtAFDcztoTHZtr7Ms1tTA",
  "key26": "5cBDRn8t9UysWNi5SU2iAkEkSEBNptaR4piuaCyaEtNVuL6qXoLzEW6tES7bjuk6N9ZaAN2avGuis5hEXUsypUcL",
  "key27": "5XNmZDRA3wQvvaPZbm2Uj1NYUUeTyUhVFt5TTzHrQ4Qa8quix2hhHUv3vfpsSRC16NQvyDi2R46S9rQsdHBy3Bdt",
  "key28": "21fpf8PtmkRwhwehRUNrMLGMEgdxsuvLMcKEfz1kKazCsy8vVgy3F811ZGdgSRqoDxXSmsGKy3Yx9mYMKUCZHoHs",
  "key29": "3K9HjC8e7ZKeMscmiP3VemN55AidptbkfywWDoAnzZ87WRJWXPFCeRhPZcRGf7x8M1AYEJHCDHN7W82Jvmi6TVnd",
  "key30": "4agwAKyGhw8phLCAUTtyhKdwPKBd1UFKqL7fgBHW12u7Jsoeoo4fBEGTsbwUX1k5WZNcHt56aoDw7x7KQwPAdj1n",
  "key31": "2ePXCC7XXSNejz15JY8TCZhwWm3oGgfszjEb8cLkhhcDxano1Xbe1oQRA87vRReWLm6RnjJXuNB6rcCYJMrB7NAi",
  "key32": "vxdqUBM4QEEfsxGwE1fyJz2Zm5Su6GRBFGNQ1RrvobMYwvpBMRPTh5U1GizZGNdzzjbjzHW4qeFc4kTg3Qp2KZU",
  "key33": "2D5Z8UJ8YCyHFJQzHUyurFQ2QqY8rM91zQwsjmzSCMinR3kb7LSBtqMkCxdbpSFTaX9TQH62nK3ncnUbJFcUuNrg",
  "key34": "2w1du7efErBHcAiQCmypPvU76S1NbemTdW9dnpcfQg9fcHRJJxqa47Ht4FRgVcNL39iiyPz4c5tLuWC1vWNDinho",
  "key35": "3hRZFBqMjhuemzvL2sEVLcx9SRBgyxXfVrH5NVL9EmdXmjvCQ9Z5GeuXSCrvwsuSdd8XZzMN53WU6HLp2duL5fW1",
  "key36": "2ZQsjdWS4a2HcMxjc2jt1Pjcc53TQmPNTpxsk16G7CaKxxhA2LZ6YmNxth8uisjS3xHFJmjWriW51rKmhW6ASXB9",
  "key37": "2XfGfk8q5j9a5XF4ML4oBQsvEadRS6oVJDXyVJEA7WyoCKFL5UyZGpJa28nd8QVeChmJ4DCVMevRZFgnd1MDQTqZ",
  "key38": "3TKbdnGDzNQKRumenyu8oahhHdKWY56hQrQAh6A8sqqADzGD4Q1SUQQtMSAYZgMZa3JSMERoCHhSkU1X42rU3WRu",
  "key39": "yCbtE9N5fjtbaUzfPU2r2fCk4LN94x2AJWLVmSXYRQneew1uaGde6idkQ7fRQZiAugKH4FG1oFMDTDN76vsN1CB",
  "key40": "43FXfPkJSae1wSgBzKG68rWrKnRZsKwgpdP8WJESMRuASN3Z85HAbbc1Gk6gfJCArEsswnwBbvtMKDt15NvP9LAk",
  "key41": "3PPt41TFTr8ZK7UdU3KdcU81kgXBZjLQB72RvmqFwDyyhcKkGA4pzrd7uX4dXo26JK2NTAfteaqYCUZJV5MVyawE"
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
