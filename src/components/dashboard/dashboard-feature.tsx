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
    "4dU7qEydttyqh819ZNVcMZ4rT9sf68tDp5HDBuhwNwHcRaCET1cDY4eZtBRwQTjwTZ3KKmXHBQQsiHDvTnAxHjtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vYqYMEDvJtgrunetSGV2QHWJ9DRrEQfKotsJcqWN9x3vdfrtKMgAijuDe3EVkp5ap2F9hyqzczFNnCiwF73g12B",
  "key1": "4hbfHex7M9GaWYqcPkDZb9cpDoEhHDoQ8b7v3LYGNsrCwXQ86XztpRkmkT4Wn57q8SymQd8yb9j2wkfxsNdBhcRF",
  "key2": "XD5K3UFhJHKus73fZdT9GdxAajE7nBKppoK15SQFVPCVJqz4Mq4jPGXTpeREmmyQaLLG5Rb9ZnGjtiMzpgRxkZs",
  "key3": "4CdRPpxtZq8f8sNjPtuyuLM1o9P8ax6eaR53VxXSnCvnwbzpNnPBPo7a2nJh1LahU1zPDBwTtshgkLUtiLuf4LvC",
  "key4": "2ddSsYzeyWLp9ZBfgF65o5MPmyBjWU3rDgiYnFP9u2Qsy5s1vaDra7UJEq9o9Y6BbdoUhTzBtUbgZKqHe5SA5Ksk",
  "key5": "5bxNm4n94My6duxchjCRo6yV9weA2Bd43yZgkP7ABZ8ZpdWxgTG1vs8oZUk1UUfPzMNZWTLWB36ritGonFvxPY7x",
  "key6": "27wW3ZpjyvKDrpPHFu31rUx55qdxjnRm6Hx8kjRLQb1GJPspKMHvWHgXoWCaXDfQoB39hki8FArzPBVnsDL1bsY5",
  "key7": "2aeFpz42NLAk5afPJbSAS7w8SPY8Hc5ktrDYEtxCJ5WFqu25vEuBW5bovK7othNV7SVBC66e4f1CUMZDXmoLj9Cn",
  "key8": "mmYvg5ZNBycoBraXopQtNABea3eg8JZ8GQUERSg52C96Zy26quny38ueo4UZnBhjaEske5rDUX1ywBbWd9uabuQ",
  "key9": "5rmLLioQT94c1H1EypcofNkJ3JR8WKi1DbWXxYoezJVzde2Z2MdtVArBPwGvftQkW1DRtejzYdB7nyYpTZu5xyrZ",
  "key10": "SBNYX3fWGJgLHdHgfRBaBn6W5Z9Ti9DoqkaxiiKCfQuuuexECzEEfxbqSQpNq1DL2NCaVQKiaq38yabQbryXpg6",
  "key11": "3p1zKTVLEFmLWhkHey1i38NYihdoyQDXZYBhe8uuCTQWTAorVdw8zDbkEKRbfroJio8qUfhGAUWZrEsLbd3vLxSM",
  "key12": "5CkzbpALqkTDnkBmaDZfkrZHEqReeSiydNzgRPeWpiFmcKc4oKzdR93PV5NvqkSWtEjKuTQBhwpbY9LPhwmqwiBu",
  "key13": "BCZJU1b4iFiCWQ93mZBGx9tz7oLRKLkJB3XNUzXpL9cbnqAeT7FiPJNTXsRRL5ynVrqt7QBBnW3xn9EUac2CFqf",
  "key14": "36nNXBphpB9D7RNkPNo2gAVhrFjdvB7P52u8QjMiWnKnZUwtNEWeWLbgbCwYWvsp4n2wtw4hSgTuaVZQqHRHyggw",
  "key15": "29LN4ExMH3ioxTij2kHWEbqzFaEztn5HvUEM9QYZRQMqiVfiQy1bb4vp9rynpuQ98YQx6EHcM5vtTGog6ayhJPh8",
  "key16": "wZXwnVVAgcotZSmbJqjizr7AUGBRHXs3HjdCd72mvoMHKufhW3rSVpXJVaxng44SvcB7DXzmZLrkf1U9SgkAy43",
  "key17": "5LUZqitPr3p225Fq8WpmV5W9b5SezXi7uvndwspBf4UVkSKucwqQGF31gqzLmeHj3sJBGhVVomzwSz5My6nzorw3",
  "key18": "26yBz8RuqwHXKL3MctDffaVB9ytoTVHeaY83RwU3Q5EquVvgBHxHHrKDLiQfu4eBViR7HJrvVqyBvecXdRTVFz3D",
  "key19": "4CVDZE6ydEnHB7VRsxnGeyzy7boVBEWxHEpbjDSQKXRTy13CrCtbmWiVPAzZPjd7vhG2kWycTZseKR9gxTCQEEqb",
  "key20": "XvGbE1TFTRMkhpiFsQZnfw1T6ZGgjQq8MAWnNYwBXFY5q8coqXRJ9Ws9DJ1z2szftMfjmAFLAjDsYLUdTapsBRN",
  "key21": "h9fmm9VSRQCupuNNGTQNaygaP8iK38oFeL34CcTaexvgeHabP4g9uGs886hvMmG8s48DW9SpGi7a9a2XKv26pDc",
  "key22": "5m4XQw6TzfLMgWHbftwt6v95i3ZdVMEhAMQykSUVJ53ovcbZs5gGRzXSEhFeh4xBYTb2P8Rjvn1PerjFZAePyJ1a",
  "key23": "2UkR5CFgMtnJ6eqmXZokDAoCchFJeuspRpW7KvSBmN1tfpECBGpzPJ7M12K3YZy5rgL9yJxHevTCVxUXD8Wi2j43",
  "key24": "4owvh9DgEJRMEJMTifBxvTT9prWVwVmzsn2P7VMCitim96nQZcXPjXGNiUPQ1yQRBBS6Sy6vBwgBj9w3WfJJvsrJ",
  "key25": "4kNEurvXcTj8WYno6Vd2DreHeMvBJyPXjzzJMYyGw4PcetJxUTtnFXSGqh8bX8K1BbzfbBXGCkATbpuhwXWsUUiE",
  "key26": "4fujwsZDoMZUperNip9bVDho5dJ4MHxxyCi97WzjcYC9d1HAxfBnj5pxYBm8vDUiz9oeVn6YJpjTFQz89ED4rDdV",
  "key27": "jBHkbzjHVadkYvvpQo2wBDX3XNwpPhhENQeq35g3xf2GLsq64y73E1GCMcJ8pePdjLWE3P2BSRbUND9Z7R7YNqK",
  "key28": "LQbRiM3YQRh6vVtJaea2aZVKtmoDLTPZFMhVHuJZMisbSZc8z2h2mv6Y1RWJq68Th9VAck6tr3rraDAxbGYmDAm",
  "key29": "3VEAh1jcEz3rqDdwedRZBFUt5uGVBo9nBVfdwMMvtGR7EdyHVSgPCZqouawjZ46Bkk1oWf9JHrEZbZnZpZSoL39T",
  "key30": "S2QMq94t3MempYXcZu9ZaAUb2fVav7re6191b3z2YBQ1kxfMsbXYMQJ7ZGjJAkk5woFEFpzRGZRiK8rVbgu67uW",
  "key31": "2fxS4JNqWxXS5jNSqvu7MCXU4jQU42mowU9Tkj576qdsqjUrTaWrSaBC6NoeBap76Ptyq3UUJm5ueobM9UrsiG3s",
  "key32": "2vkBxXE1cQ5iCFtSANxHN3BpyyFYFZiBpmCSceD7YUa8pgrCGAzy7pFt4gnUWFMhQPBu4zMm7AHBtKSJpxz49VLW",
  "key33": "3VGaMUXRNjGy5CxpFbBhuwBmuryadZD3WUKftFAPSCHUyvvaryVAZJWWZTvSgvL3muVnWz72beHBnZ6TZNHckJ2P",
  "key34": "2hk5nN1VtNLHRZi66hkSRQvX8RVNkeUTJxXE3dV3Aws3CvXUfVJK4B7dFzdLPwc6gKDgRTwczL7Xv3qQm7NWvVTJ",
  "key35": "5NVoVHeXecXXNYRF9Jbzj5getUGYpsS3TYeX2swVqjyECpaziHEbt6LLv5FjCS3CMakTuBUf1UBm8LAw8svW2YPw",
  "key36": "5DZyKdbHX9DXkBn7j48Gx2jWKEyqYMZXxGrixXiXytLRKfE8zFqkohVsvyMrDaqo6W5oogztzwx3Ent5uCAZXc3R",
  "key37": "5tiVLFwuJzdSNKkx7mXbnouQFVPjvgGa31ESdThv4yXpaaatDFa5ahfnVw1PRfFzLL7MAiP3vPgxZVdn53DcVVGJ",
  "key38": "2s36YSyPQWajUQ8SGwv7bYSu71yGZgwSLLKXy2yyuyqak2zHS3RkUREpBuxQQUuGSHutjEkP6K32EBv8M5UJNLcy",
  "key39": "2gDKhPHWJU3ZSjR77qdV1WLVgKNM2XAFAM1CoFUYYRTNmYn9c9oaBWr7jRvuypU9bF9PVxLFg6gpUPX3ALMqbasw",
  "key40": "5Rc7SM73DXCFob6YXhos2PWEg5mpR1TpYTuetxEu5R2A8WrZmaZef7aYZtVngiPbMHyUJ4yvwC2ZP4XwMtS1igKi",
  "key41": "3VVmrE6tmoBUqK7TRB5VeyhnmZGBWhp1cFc2JUGpZQPpLKZfUvEDwvEbYCd2fohjQ7rDu5GHoKFwRtg1LHhW79Hh"
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
