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
    "57qnjjXdWwWapWnHbzxPFiUdMF2kksjvBf6FQ5w8ph5wNpuTQghNQCEb5BpPPUZGBXBVpuaub1cj8JUsqa634RJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZdgGyUtFyidBA3kWcGHcMEHnkkUjxtTBbzkqikxWd64rCFEehmZhnLMiqTzmcQx1YpKLcWfUMvcXEizhtfqwuWu",
  "key1": "4rAnE1iFirM7os1Ro9crDxSHcjhyeHtmFUggtLmu9gpBNAKMycfbkEQMT2NeRerPkutxMDd5MSmzcc9FcquS9QGw",
  "key2": "3AAqDBwnkjzYPJ9henJKtx7vrHq1PHps68uSsPe9F1RTdY6jCUMpVo1bcJXNCT783wT2tNrUszm9kpMqrwPCQi1H",
  "key3": "3CuXrKWHFbZieFuRiNRBbbgR8z7KecSyymLuP2WLAj6hPC6U8UvSn2TwJRd6r1fiM7pkkgeh2Mzr8mnRvgkfphZX",
  "key4": "2HUsN7egRAjmpuF9c4TBeofSt7hDoJCbkARDZgP2F1rS3w7ugf9gph9YuRVx5Fmfikevq29VpY3DBmwX3bDMkKAD",
  "key5": "2CSrRTXzaQgAuHcLigAR4GyzQAUoVCRFog2eeTSYYsFBhG16sfRoPouce9ZDBTS6yZfawQYPNb1ppgJtet5392Y3",
  "key6": "w3cHZn824UbVhWdL4Ha9rzdzmeVDD3FAVrZBTUJZrAL3BJLa39FYTHLw2FuGKpvXmNtHWyV8VGUNZC53wiBtoMe",
  "key7": "5XJHHavMGGY7LWVhZWYaotRrGE4ABScjhGySbm5XF394XYW2FdEJDEG8Tkg9VaZHAv73zSuSGxNeVaXL8qbeqcY6",
  "key8": "5Gi9JgAD4xpypUVKMfXsZg1PBiaSmpdWD6kKGFk9YkviGv2KJQNiUGwMembfXBxBc1UYD7FR73yaUdSLkBykGZz5",
  "key9": "3XmsCJGBAcKTH3bV1QaqtkbXJeESwAjC6KgRYwXeGzU3jfa8t9j9BvvdHSH7xyBELXet1uFTij7A8vdXmATjQ8BQ",
  "key10": "3N4ogs8wD4MFu4wrmVEco2SZ66P972Ur5gn21fKYY4n9wzhXQLHnsjCEUcu7Buz3rnqAdBcdY571Srgh3HECJJdd",
  "key11": "5keRsheEwwUs5e6LbMCVHHxRuxxcTe4H9opAip6razTwVagm5jSa4wXMyDHcP3K3MZpF1iAXKekY7xgsH3nMQNC4",
  "key12": "JMScSyLuJa394VR3xyPiFGr8DVPYZ5BhnCP84uZSfaS84FtsKQ6ZtRh7UaizHArYpg6vYCfzavbvfRrGYaL4EzS",
  "key13": "4iFydFFzik3dzS94voepJyp3jm9soTBVtFn9Mr2UKNzTuDg6tEobx9QBTVVhHKSssan5k9uh7jmvixujzjcU8Vpx",
  "key14": "3H2WbgozZeo3codNLazTeo67TUM4SYjE3DLxqA8Utd9ChaBCYdmipfVaFd9hwyrbmzThFx54NTe4aQdKhEZ2HRCv",
  "key15": "2398NsouB4ddcWogAVHDzqZobd72FjYn7cv41hXE2AsBwjcnYAysQBEnU3L52xax3mU57sUDcjCg44x3K2vYTged",
  "key16": "4bVPHB7mSmGPLftKwjwm2fX4HBXw8G788FFap1mzMR15ocAVRvM3JJCeExMxkvakYGcbvEtFz1j4pHsQRiBBSnYk",
  "key17": "3dmpzmacR7QiR9DYuJCwRsGaeDDo2sdaNbzhCi6Pd7VSVrT4smeas5yh43v851CXjLraCdaVyP62Vn99VUBsRUAw",
  "key18": "2tgNCe4NbGnc2Z5hWr7euRQGFGpoLbmXspJ86tDNWPTsKnurii1t4tPdXB8S6j7RnPaKmvUyS21J83x7y13MjbRe",
  "key19": "4JX3DXsTH228jeJdfmPbFkZmQyh5Tm7VbpYtAQEhxc6jY97yUepHFQ3XdTz4hP8ujveoBND5hLj1YBVPsjHHdxVU",
  "key20": "5f2k1NH11egHAf1Z525XHkbK6eFQSa3ZFXLLr5pfnsm6k6PAecEZnSdbgUNEAqqGtF4QFYV1xpwNttZ15ndzu1Ge",
  "key21": "5DAn1d2Gatgx5qHjpYtSGTDvFafyKUvz9mCSLGJzqzYjeLST75muGK7wNYy7xzcJ4gCjj3ik1CdjrFFTKfry7vhn",
  "key22": "sWS5rsGaYKtugfHF8htUb2dQiBTp2BueccFPQak4cGT6hSs1CE3Bi3AcnXtbDthwLkL5Ya9eaE3EXuTWM93UeFe",
  "key23": "4FbnvzMcC6EBnFDymyQKBZjnymb5GvAvWZodzSm8zypEFLVXSFZCYCU394xtj3qae4J53SfhxwHFicxtsuFjERM5",
  "key24": "2yo4NoNixEWHSy1we899wSji36s46TMcrPeoN9XVi9eoFLNmpWR9bPE2LKsJFLDYJvXxjbw8RYVn9qKxQLAY6KLt",
  "key25": "mmjegmNnRA5hJ9kWjX7NKDYGEXZitGPD6uPdX9SghCYvKFkLD6Qg9Jusj39pKhj4baGzfNrgzaddHtQPfpFxUmP",
  "key26": "dH8M3paAwhdN1WRMj2zeAbFmBq31LdDdKjYWD2R9c4PgTyghYe6P1WkGx2HQrUz8c1fV8JNjNj5kmhCMU72cNwM",
  "key27": "43XS7E8UkVgkRjf77si1pEs5TCAbHq4Cp9RgtP9Q2KxJgKHxMG1wkUrLAEFU86TuBVDCbD39r7qM61Pr9zjhFLje",
  "key28": "BBxbxN1hzjdvfNndrmmaQRzUuMEAY4HT6hPJXh7smGQxL4tasQ91pqXF44xxAveRXp5GRcZgSWsYddvosCh9a5R",
  "key29": "2xXqcSpEeAvkrXoauEe72D96dcDSY1X6vMZSyyjKWTq8agKHdaKVowqBVt3XBPvaYcqXdCpVjZSYBHyigD3iGJ2J",
  "key30": "4uYEUTDH8eKQd9J4MpBiMGJPNjdPczpCjWKMkQh8DF4TCdvAGnQ7vWtQcDgPiWrgCsqw6HKhMP6CNvLkZEb571XZ",
  "key31": "zK95sncpY8gdG1pF8HMeX18f2iHpaxgETBwjHHcVFcL88Ejvzs9YdCKuz1cZwf13mjNVbUGgpjh8EeVEWQAdd1A",
  "key32": "56YUPwqmbEQCT3LiRTFb2a1aGfyNaWtfA2FNnkEHoXUuHDgdAhzYPXeY4L5GBdhMKXatGFjyD4YbdP5soCNWoQ4i"
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
