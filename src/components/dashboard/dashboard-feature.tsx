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
    "4FwRUjGFBWWgHtuFmxZ43qf1zFj5RYWBVN6EZDJ6JtKh3smx2wuJiAzVZ2DC95zL1XzgxgQvfpmq7CovzzX5rvdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UqFYjsGvJFpTAQfN8AVUoxE26CBWoR8vPoPx6jSaoK66bicrCBRH7K35coBFis48nT7E2xpHnChWuKA2nHPPwM3",
  "key1": "2XddPw2qVmXGffNiDKSZ4hLWPp79eWh2Ar1ejkL3s9KeUersFSJ7i48c9wEW2W1SUz3RW7WDd8Ey6peoCFVrmzgq",
  "key2": "Gs5WpBP7QfZECPjihmD1uGkRUXtFtQxLzSDDFKmKfGpZCLF1b9QDLPZoMVVxtC6GXKMReKSPRi2cnTCMewVjhpW",
  "key3": "4kTgfhzEBJEHbQeVJiv5dQpiTiVbynAd3ddtenNqgToVfVYXcPoTYajvNjvbf8MMRaWLnYPuWYUpJuL71E2z43yQ",
  "key4": "DpT7hD535DWG9SfsbRCXq67LkkQBvg35aSebuCdJmkA642yvaqhBRs2vG1A9WkndTZD7py3jRpdwbZG44dK9a6A",
  "key5": "2TFFbumdz2yw9Jrv6RTqz6vodnmx1upLduRmNHFK8PzNc8gfYWE8TyAzrQrisnWLahdZXrcjAxVzBYvrHt4B3gMt",
  "key6": "3Thjy4G2wHTXvoBUTFc9bgBqxRPTmGj1d39ryJbtkWLEeuWprndBtitAEr2vV1zMT7wL1WcxFaE4HTFwVMCVqbcx",
  "key7": "3PENGsGEcpsAKMdQSmNYyjyshzs4kgQ4FfZhtT4nUFR3bgbUWWaMCj2RinrT9KvGdJpzgc7tQcrr5FT1EomHnW2o",
  "key8": "2AAsWyhUd4aVJ1DgxzBnK7TU9hUWx9aVdfnTSnQGB4MFVbFL1eWfL8LvuH254bwZu2ojD2bu6mk68kwJvbWum7WG",
  "key9": "2Qrqm8TF9Moe4niPGNw8qGG6rCTwhYkbgjKqhLpo6B4Y6s4Gz6a4YfgqThUopcYBLVAy99BPpnG1eTHomiM3Ab7u",
  "key10": "5C1dFW5Fj9JGzpY4nz5U17E64QVz1b92kQAgXbpG7nj3Uw8Wv1hH597PFNNB1KGJoPVHa97EnjC6TSDjVvouQugs",
  "key11": "scCzeebPSqTHNXtAG4xnq4oC3HnS3huGYLExwVcfNk2EBRvA9e65YtNUNde2CizyS4hi2Tk31z38QtidZFRint2",
  "key12": "3VFhz4PZiP6SHxcWKpRUoucyuG9wkD3ZERutxGLzLkDNP1qaHYFuG8uXKC8h5wr7m8en9rR38c8LzFUezQMK6HjZ",
  "key13": "2ZVKNFscs32426PzaoHBap9Zyz2xDhyZwnbv9GoZvxwjSacgb35RTaT2Pg6PjMQGqLfhxUAQ8zu3T1VdH6RnXRWE",
  "key14": "4BbaXFzECGL9LN4j9VxRmdvSajkSToco1LyrkVUKb6gpjHN41LiBbAWhfGqsaPQPmW2yAoGiv95uEM8NQgsfxD2m",
  "key15": "355y8fhbxpbNdr9YFvtWorQvNbcfspaFhnMPoGmjL2qvr8z5K9jJ7359gFGPNcF5J4LuViT5eJa1YC4VjAodSPMh",
  "key16": "23ePDCFkSn8Pzp63yFaL2PcyfcZ5er6M9aoU5QytTer4WqWzvrmdYLUAmXXmrpL7PZ2roUeHHYzgpbNbt9fFBGav",
  "key17": "5w9oo1pDxcpki7rRXGxXa2ybojwe3f6KYwYe6sqk6MUotWFtjsf9v7UdcDEwBQzj287pS5ymBkGQgQUKqkj2oD93",
  "key18": "NTeMHdejxg3ku8D5TQNJTyXUjxdnw44HhVmTgWi9BtTwCma8D7nmfA6q7YWbBFWjFHDtk5tJkZiVjSHKEFWXztU",
  "key19": "4pckWBkDnA6nzZKdxQzXDEGRVJvRFh4jCXxVfG7otE8X8sPUxKjxeZr1D8xcALD1ECDA1J4SRMyH3fBZKoG6kJ76",
  "key20": "41n4TD5VCbXdYiuAWyrT3ETrWRc9a73vgk2SJf7m4qagcodmmAcZwndw1CenEcksfZLM6E342FWBHMsHDWkSiSzG",
  "key21": "5irwM4HYdnq4JuzTuXMVNW5Js72TqQqw8Cagkv4WQugC9dHaLDVkuvQUbw8egmF3GcL94r6m3e5fsRctGn3aVQ3t",
  "key22": "5Z7nmKo5PLbMXtjuNwQbvUkvADjZMF4KqvQoTWSHsgoaZ2r56enm8785x19qEbwBgxGbZu3rX661b5izkswuNhXS",
  "key23": "22YZMr49cdyDYAB8mKNiZXnr1SzmNcb9SacXkJKEQx6qcoqNqTdb8CBC1xM1TSZocKa6G2rUz6cQTYJEns5GzxYb",
  "key24": "4pjTUWK992jSVvMfBE6VkojfLRpUUesMs2WsyBQZxkHmQ1cRnuqK8Rb6KtahVznVu77WUHYmGAQWLK2SuMNbUimR",
  "key25": "2u8p6rRzMgoEy2ubCcNCf9qG9VEh4tuUtU8FcPQzYGqZKGxrxBSJ118ZaQfaspFLo7esm5cDnY7M1zAm2fnZHqBQ",
  "key26": "4Vsva9dWz6EZyPfv9mLAuwF6Z5nxQimQTyVTY41Ay2QhoFc28EG1f3MDmt2GR5Dpk1JG4quwAa5nbV7NcweQstkv",
  "key27": "36vMQLQBdeLPejWFhdRmriVrvocQZ7HCyvpihWz19vLTjQydDimaQ17MZDrXm92a46Hj9AXnCDg2bs62VYSiYvXY",
  "key28": "gB71xQ7oBxtZn5VVjHgQqrQBbmBgt37BkbkCzEj1FpcxavXKEBgf3Jovhe5YczJDaT6STNwp4UX14vawvvXDwha",
  "key29": "5UbBmEXMnbnz37uaN4u79rhHrxdJscztRZLxwhpxt39muNuchyuMpeNnCqw1r8UfCQK2jk9cSxwnRmjZcaQ7xUcN",
  "key30": "q6bSoDc1rWmBu6FNSbkmZZu6v4z7KH1djZVgu1Snb2dVEarjHQEtoQYjUMc4FRB4ScXT3gTFrTw15NQRxGFdV4k",
  "key31": "38iN8nbiDCZqteRXBLjBqajjc7XQ62beFQJ4oknviD3NvwMByDX79g3eAFniomxZHUBzx7JrcW834v7d6gau1aEW",
  "key32": "38krJxWqLvzLxvmYeuMztTYvETR95gLYyVYdzwthFwCqQzVo2KuBtbDkVSWKSSoi28bhgrQNtpk5ng6qt1Z5HT1y",
  "key33": "47wY1awm9eMGqcegH6Z1visoYcZjM718GLb4BGjWchzMexoSyNCzgr8vTeVXg5cPxWLfyBStw34wtFHyeC9nPeGt",
  "key34": "5kuPrVhWXQ71ENdjWLCZiWsSEgyCRiEMmFKenZSXL1k46yQRwXA6GbD8CaZj2XTcLZpFVFhtdVgeVvDe8GCswA7X",
  "key35": "2aiUcYd1Y3epanvPhBr1SzroooMo8LqP8Y8qy7qrsxFFBPhxqzPeR81YPaeNgHfU5bJxwtteQTUJXVBNyzLZynmb",
  "key36": "4QoG2F9UB3Todhy4FWtFRVbYzr8T3wS4XvbSqeoTQwWrTaLGmBYrn2MnucbjNwBjNM4oQPA14q8tpXnfgXtmtyzH",
  "key37": "4yW7LQC6hWvLxzgH2SgFGYmdQmRLvGTKYpN71Hh7V8yttTqkbPkVyMEmn8ZcwbLsJZLq9xhBkE94KxqAPJZKZFqX",
  "key38": "U6euTmbWZ2Mj685X1pcGu6teYNxWTfrRcfetGpxbdLkxxDBEH6WW8UhNTB6sHyjyM1pg5FtYTiCZABcDrZEdqA7",
  "key39": "5LgJ7ba2of5hwQBhAyE3UkK8LmxgXwLjd2D8mRMsyjZ5JP5fh7n2gWyiby5LPV9xT36KKhUF4ToeCNBodtBHjX9o",
  "key40": "2gpgnWX7YyJQ4W6Z4QNGkPRDYWbcEsdD8ysBVUXRSw7MU3iVR83Mj38mUEu1Hx6BnkQUk6xfEsYrAwvKYse6dHKj",
  "key41": "2Mxea8Pon52NFZFWGCCei77gj9ZrNJtfNpURw499qQ5s9RMnb4jFt5BXiW7a5WeFtDbXAYJ2jetWUxS8YvUcRuYk",
  "key42": "4we1N5k2rGbZdHDK8JoVBbd2wNSFbNGtRaN3GqN2uUeB4EoAeHWSpAfHWREF1qiLSsxgqg7nXXNJjKJU2CDh4RVk",
  "key43": "4vMh9aJFS3XqBwxSgAohJJ3RNPN816FE3yd1ry7t7B28d76t1w1xxnMSoUPLvMEww6GwQB2vPWDM5u1d7ECo5Unv"
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
