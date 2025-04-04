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
    "pW5EQBdxmC8JwGyVDdHf8b7BJVhcz9JZ884GDVi1Z8Q8SvtH8trMHQVTQ6PQUyTmtLeM2tfu5tXrwGPHPHrF7tq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o3sV1EXmYWSXeWpDmabnq4K6kYmtCsZZ5cUj1ye9nY5NPNeTCeUUWgXWZn841XhybSm53Hpzs5T9DPt1h9UXeeA",
  "key1": "55d9EdjgYPsTDguhAUE5S9UUpPeGZCobCAgNFVEgPjiY1gC5V6eA36XNP25rzLELUqPGwkDcREdSkGRWsXZjc5hG",
  "key2": "4MBwgE5v356Nq6F97mBKtxFUabmDQHmYfs9iBysPVbYEPcbbG7JFnokobJWg6etbD4EgFMdH8vW6Y8mVDCTLkjUW",
  "key3": "4Vfty7PsH5d5F3rwkPem4pyQCHWKTRGyjgsSJmrhAbuMV7vV9PW14Bf7r9uVKYptaDoSp7qbt51JJBcykCu8u9c1",
  "key4": "3oXcXEtXtSM9RPKhHtMh7xW22qwjG25eq4jSbFU4zSbH7pJtrRgEQYDfYUQ4J6w45cEbgDsDHTgcH1UgS3nYUZvs",
  "key5": "Q5gAPobf3gmLPgQAn6Ta6pa395QNwRAXzASDJqtn2CAti6EvVgZdtogiDRaiRnUpuKkBGdsojnWmYH3siuUsadd",
  "key6": "iNTBiSNneCsCV2N89xD5SoemrEV2iFiRHDCVATnMk3z2NajgaJvxUyw4MeLudZD6xZyZ7wXaTaCiqspcFc2UNy3",
  "key7": "2N6Hy6XFVvwxDgZULFPgsHRYd8snnKh6MbxWNuw7SbpoSBYBNF8da2MMDLLM4eXWHrmkCAnLLmxMpwF1Ge5hsYg4",
  "key8": "3zy4caddEsXZ5qM69tAFwvoiJsAJzvZDHDtahoiUcT4wUPzSMdKs2BXduTQVDLCgNfH7aZMRSGzJXfoDKr82QfEs",
  "key9": "43fjXAxafwSQJencWnYTeSS48NRRwHGokP5UyNKBuNeHBFu67u9Z38n9YyC5EEmo4dsd3Rv8F8QvyEZRHh6HyQQA",
  "key10": "FUkWmYqDP4bpi7JTisXsVKeQB1NjgLuN57vco5fj7SbSoA2696BDV2XmYdYb2GobAxx8o6aT25976ULmoe5WaLF",
  "key11": "32PpHtbAR67K6Z36jmPxFczMEfkaCRz24k2bXhn4YZc4GA4ZogTZ5xUfG58zbajAD12FsWEShCt8boHkfBnayoxi",
  "key12": "4huHFibhgHmGnnMc8WhFeZRNTRNTXHeJRD9F6w3WK9sdzppnAKP6Q84xLgJYuqyxLaRBDTqchrsPf3x1VDQKVqyW",
  "key13": "2vJxp2a6MhjZtjkbWvdSqnKuSFNXrr67mN7dCtpHeJQ31xrAYDyeTpE4jYwRHcUHQkkYEPMYseHGePx5MdUnRdQo",
  "key14": "4kC6dJEgAHksy5p2FvKSwLSoxudJuuNqwTB7xivUFs9LG8xxAfSdir5haykCndzn4EG5ybNUjZ1m5KrJoW677ZNt",
  "key15": "i5hV2GpYznCgctU14nsj37XVtipWrMeJC1PRyHAFw3eypE24nJvrVJfFTkqyYvrMM9UDcvP8LeL16LhCym8w7Pg",
  "key16": "3SAJecRiZq3BeenTavxL1qbBLmhY66uB5K349651xNU98Cs8AjmJanPMWsgD5iZvhoYva9MZThcPy8XcxaZa3TuR",
  "key17": "3YhpCV3GWq2ar1pj3q4GQSz1qmj68dy4afyL6vvyWPYBspVJpBgJkCjXXuZqB2yERzbkTL2WsjL4PT6RNuYNSLM8",
  "key18": "5tzrE9s5w32Jz9HCfnARoWh888gHmprKrUSLHhRV5boju9wSkwuTjVPasb3ayH5CMwtzWj2thvEd36GfTWE3ZLR7",
  "key19": "5RRFJANEch3coqCsXMsfHFgHm3qo7TVLJJupoTrBgjBn2YEKA638JU9PN1JfBQ1LQyz4er2WaAiMhYMiEQmbD4mu",
  "key20": "5NjJa6DwpeaSSTiPbueN3wtiH1xgv2Fbx4N8hfLifZ3hke6e7TMhf2aUku9KraKm9i9yxrDXheiEbGZ5dVUDcT4C",
  "key21": "4A3o9DPJAy3dqBkuWURqozuibwQyHCWUmTS3pWKdphnHXgtkzg8bZp7XvpohK98QL9NGZtMqjWdaSjHqw2NinLvV",
  "key22": "EXu76HCTFYbhLLeJ7vLCWVCnfHgNh5bdg3eYPEwN9wAhBKWBSXsggFGuVJtWSme1ZkWw7T67QavkVDBjgegCEyM",
  "key23": "64FFUMfFYYXGznhS1uDG5nTgZySYeyXpSL5yBhVXNBWdW21psJiJopRhjYJAsjJkjgyPhPYC7awan1HSSwkanyxQ",
  "key24": "2PSsjqJ8B3s379mNsXc5ZaXdd2WZQkR27yH4UhLMTBXxA429nVD68g3Rv8vWwPEdk8NibqWHHeHKcT4gRKyoucvL",
  "key25": "28i6AwsHCs1CWqwbGpU62zdyx3tZrqQ7Kze7GBoR8wL3Zxg3d9iL8auStRQrWBtxKesrjCSqySvJ7K1xerqhEEHb",
  "key26": "37AFV4jH6ahuFvogExf1Mdg3UtDaQqqA9jKLnzEkjEprQwVR5wHfgM8GDS7URaPschkjzEsRrK1HZV4vdePz9q7g",
  "key27": "Nv9NTX5SyeWvNjMEATGruARFR5eMsk1PoT24MMizWBUSQ1x7pBy74v4kGAUtp7faaMe5UvDowAYj2ujHGtdUeui",
  "key28": "3CLe2VLBL6bKqVZgQoxzWKRcFHQhejMPZxDLY8vR5iTzSe5DqkNxSiyE1L1iyW6PFfQ3BJxcYinedW5AB2Y79G5n",
  "key29": "5VkewsFHGYeoQ91iPuVKTsKPxcyRFUkwGL8sbsTxSYPuyJndkrXMHHtA3j2XcRS3qNBsUsqcfBzDNfjYWHFNvFtu",
  "key30": "2QxoVyjgVNKx8Zo8jJfkHdsSc7EZXE5o92LDDvG8rydZD4q5MgTxc2TtovVwfetwCADvMUSuCCYP8kVyAiip43uP",
  "key31": "2u8k4tqB6e3wZtpodCorxe7V42DJe4V4ZQq58Kmgn95cGqnGRUBCir7G4hp5J54ZpNzz4PQAJVTDTBcNP7WfUiSB",
  "key32": "22BREgnXLB2LvgZLE3qAtugiEMrvWttAqW44KhEgRuNNdfmYE4zuBWBbF5funpWqtoegkRDxwVf25iRzxeCoW4CJ",
  "key33": "2SWQXCDBu3YXFXR6U4zctiDJKfGMZZCZvz1KS3MLwbVFn5gDVNQLqmoD2GsBJwm1vXrgYpvXaa8Hc9zGBD4tr45d",
  "key34": "3iyXke3xyznSiUj8aD1SaCZdcvFzfoEB7TghAAQNzXZm1y63Pscnne9v6RxPnHFYkApBg3HxX5yn6pQu6tnrrDvc",
  "key35": "3TRmLS9iyNMH6otpTdgnGN8KQVRJ7mawtTKCpCdqPbxYqYvYCT6KcGT2LJ2NDFMzdwmB4ykcHp2BVm8HJShLXLnX",
  "key36": "2wzUuW3JA3zJHR4jYPfwC3LcPby6q2Eu2hhrbXrRmK2Ks2rkdwUBo1ggVBS9tPaEC3RjeMcFKbZPSTNuYr5fbToD",
  "key37": "ErAtW4gGHFrbqM6XCcEanysdLUGWgmmfbkGKCKYuwXR9cEHqXyzQwcxbxRTeh5krMTFSf7C55C5j4EESb4jEoK7",
  "key38": "3ygiv1mnLYqYRRbXfFou3uNvi5g7uezcrW6C6U4zYU7S5KudQknoRmiDszoANeN5ez5uUdhMpMPNnpkVaBmw3Pz4",
  "key39": "5m1UJCLQARwrGWsGZUUjFUa1FP37ANy8PbTZe1nt652gStB9UgpGX4xGoFUagry4y3BscYEQPXH1GG632ebMbswi",
  "key40": "uvENXAbNpQKm4mvtau4rGduBWPfc9ksAjfSAG9uek84bBETAGbBAgei3ie8wsR6bQzcMN17kTGLdkUSsY9qWiXt"
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
