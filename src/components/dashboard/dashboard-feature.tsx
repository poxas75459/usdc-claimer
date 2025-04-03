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
    "4EDkrr55FADHUGtmnzWDhwCpjdf92Tehzya6YDcJoedmwKUNDQnhjDhZCVcQFh22TeWShVoxm4NyUs2yocrR7mjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kHtNYRAHMz7UZptsSZrTvxpcUFSQqYeopPQhua3hQKpFmmyRNUKG7eeRDynY94Q9Ptc4JG2Vk5nRQBdUVnwCxJj",
  "key1": "2EEZ7FwaoGTQ51fTs6UCNShkzkngxoJ2TAGFF8Y9fL97ieYy5XStoZRyGNcnW6XGdda8efnCZiZieZaYJcfF8xo1",
  "key2": "5nBuuP5SxHjBxwCFM83uVP9fZhdDsiZ2GWQpQZXBYyVD64m715s8r2kML7QFTatVR1AZUe9LQw26Nby1UvnjzomF",
  "key3": "hy6XfQUq51q5EZdhUSyX9y483j6h9RqGC6th7SkkTSSq59tNSjjcwmotKAezosw82wZqjfoHBfdyTTWHj4kjy3t",
  "key4": "47qQHj5TJCh4zwhbt7sMai4Vna8pL5SUahW1CW1WjpqfpziYbbgcLnDTAheJt7sMXpefMvtPo6uV2Ujz8ZXgca6N",
  "key5": "3hedauXEi7yU4ATQzqreN2zr9dvCijG7ZM1j6yRMNamy4zNErmv3Dz8WZVRXUF5LmzV8jupZUmscym1QAgp4GN6i",
  "key6": "UmGBkUdfzKVxpwun6wkL5aXZADpCVboQiusjs6RBxcEFDTeWYg7c1pgrXEsgMogT3enf3u7HnoA1DDsev221Jeh",
  "key7": "3UguPJT38DKHBoCwQHMkxum9qnfdb2wCnGC4rNnpsNpJCiJx44Z9GN2yzdX2UUF3CFWax4Xvzs3vPMRfvA6QahZW",
  "key8": "2tgjvrFiqQ3wBbqtKF9FirrTVZjEF4j167DUnGr9CGAGst4MGYHvGbE3EZVij7xbbAxYt5YmbyTAmf2HNEfAB1f9",
  "key9": "39aa8cuRC33pGuhJ7ydv2yuht2rZQEP89GqJtVkv1gdeuRbE6wWgeFTZokzhMEhgBhKBUUs2hBvmNsNh7DLdNVvJ",
  "key10": "5axZiECjionSFi3Pfg9cAFTZg7AdDsfpfP6jG5bfuLdb6wWFXgHAQB2i8grJhbVVxTsSWnnpq9VWYK5pjGfBRkcB",
  "key11": "qVHEHkAb7C8xhzYyWzTJQtmwEgZqsdAEu8hPwxzUeFR2vSyaPp4X1DTt55e14bMBFZj8WhE7bLnSwyJD8BwCUAN",
  "key12": "4BXNJvU2crfmWFnb754HKarAdhBpbb2LkgMHfYVqaj2H2LQzqHA9pzTeBmjxzSBYgMVQB5r1bm1S6gKJryGDSieh",
  "key13": "5iiwLT4pMTvBbDU4fVYqFfXQd62an93A3fErPkgCiFuGxaDFjm1B2LrY1Hkxhkp7btbSh9kF4HZEQCHAfyVA7Jc8",
  "key14": "ptfKjBESkBFJgegVwc6KQD5ENm6PevobSL7UmKg1NQCBwM7a26rKzXanvUQ2BDPudWgPAV6Yiw7moasByptGeHZ",
  "key15": "5JpraYSowRvJCsK2TmaRf4kkxWHi4GyzhM93CUioeQAfkfgxM1BnrVerFDwCdDX7mx44P8ybJBAF1nBM1YSwTf8G",
  "key16": "2dQzVa1PFnJCoJtwyeGBoE7aqDLJJU9Z8EdsSL6BeRVz3AXmWbg84xZJzS9QeLXGGcqYk7r9Ua483REwu7TWgX3u",
  "key17": "4M7Gt9N9rB4t2rtXNSsVe4UjXareHVTsx11twMx7YG6zmqKUcNku5LxvJoaPY8pFP51r8kX1UuG1LqJrcE1AhuEA",
  "key18": "5fwMT9vtwKmmt9riqdCbkNEbnUQP2edfB71uWvKzC9AKKMNfkuRmHyBsDuQUErwrYmatPwEfecM733XZVH3UxJq4",
  "key19": "5kafRMc1quYrooXdPiQ1C6Uib3WaccPJD9Qiy5DxSLg3GWHQm3bbnzL6a8ENfugkgCUVw8PYbjgbzjmrW11HadJu",
  "key20": "2kWLjZCSomU45catTQXAQpBRgANSdP5CkVQWreQdtmJMbcJ3r6gbpSNRgij4W9sztXStj9Z45jwdXrGenDkBDCGT",
  "key21": "35QdUoyv8NBr3vx6G12LGufddnzvZhx7TNSvnnaipsBcd4HMvLVf2AZ5wzg3iNVkGb5zjba3snKLwdHcAGks727g",
  "key22": "krxipchpc9e3JBYCZEChr4zfLo52xbfDe8jHpv7E1fPmYoGtjF383WhDYxnCB2xiacoHeDJ1PyG2WiqBdCRfPpN",
  "key23": "HXAWuwQb4TxUMedaN1J5ounGqkbHCjUrKkLiV4nhmK2aSjeZjbdVGbyywFVsNFK5VPNcMtkM2abu6pogSkfoaV1",
  "key24": "t1E2GeoPJeuMfEH6uqVynmumiKQJ4bS4AroZZ55sdf53QTRg8U87MpxLYdx45rrEtPQu4D2rMfsFcNHvC5u9SNs",
  "key25": "5MCcbvx8chCJmENorTX5T9EoTZBSzVA65P3xmDXMWBwtyJVwD5kGTfPm3xC76RrtHtySQUSa2sdMSXwhqf5mL9vc",
  "key26": "4jTpytdY9BNNM9TcWufkpPty1dzS6MDMsEHuWpHCi8goXgY211Umo7ui8ikapRXaqXZyrY3w2HzeitMywqJovmxZ",
  "key27": "5qkUHn4MJjK6NWWRF2KLpvDMPjDBsat2A1A4bUtDsD81PmrEd83m48DwWQSaGVmVz5zBovB2pSZK45DFtiUZX1va",
  "key28": "2BZkE2kijDJiVzpnhcAnqFbL9vHGxmJLXHUtSTwhBoqsP7zN9DBdQMChmookZFMc4C6J9xQap1cGgxQve4ej7Poy",
  "key29": "5CseUXHVL2dgMN7bM5npiobnWefVKyUKVWdnijZWnVvkKtzKjU8z9uxK2aD8EfPT519RSvoF2REh6TKBHiq1awa5",
  "key30": "2W5sjoXFxcDAFQeeZBSR3U3EXSPaBmNAnqpRmsG9CoqUKGLrkcQoKvp9tbWY9LMfe9bgKE8iUpx3N4QKNugitjq2",
  "key31": "5a1konddvLfvitriK1RwR5MAknHmPPoYYLoEP2q75jBpdUJzVLrrGPH6zkMHmzKfZtAPT78Ugp7yGfgu7ZhbmDPh",
  "key32": "24U5hAgpECgWEhJuCiPmTP7dnaKUfetLsVJ4HhGprEidb8qNq41ETB6L5gza4mTV85dQNHd7dC2YptQdpeWwxasC",
  "key33": "9ornGaE9MHn3Q4CdrSxzj3NLFQU6ZtVsRCC6ZbQnib3UiRvcvfW4fZCtncixyNZxDyJfE2XyNprA6SZv6a1naHr",
  "key34": "3J1B5GhAB7V1j8dHDEEqEHUt5aGsgpZkZ4q7W57CBopugcPuQegn5UHiLCTVqiHL7DqPyoZpq1cdNrrN6pnLzhce",
  "key35": "5tEzZdQQVwZLLUjN8N7Ref4zoGY3yVJ8Ro17BJrw5Z5tDQHeSQE4uRVpHD4uHzyfmSD97Rn5TP4ZTjKSSwLRySYb",
  "key36": "5Qb4zbZEjwh7KVarJ65qVnWaP7wjPcd6q9wXU8jAqpDrM2S2tUAFhXjNidxXhhmjWbwSUdciN1Y2B8mi6PMWfCSj",
  "key37": "3zVSuBWxF3pezxL1LSP6WtiCdjchS3TzpJkSsiV81zcy61dVbd1denZs18s6E3axT6cACofY6JtZEGwvon4HWpbD",
  "key38": "2ewiAAJRAh8VgnUDfF74rg7asV4udcDGXbygd5T39FsaDs5rcFKQNkgS6qWqkvPkL79DXHG4WDAZdfa4D1m5hsR7",
  "key39": "2SFBwF9Tbnx9kMAFx5qmXBjDJ8NnBSvGBsKsf5zvcA1jgpqeXYwZZeKkkr6X8JkswUgR7Yysjv8xcJCVEZHEWH1C"
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
