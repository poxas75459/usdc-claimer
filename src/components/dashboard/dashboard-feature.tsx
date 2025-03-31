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
    "3nB6ixnvy6QEVYhvgP3okmq56jTLTek2Wh5qfhePGjrU8umxNhm27XjAT9jtqpNXoNiKaCXFVQwY9sbSDmXg7SM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HzN5rWRCsnhW3cuUktBUVnuJdyP161nurxd5G3sfoxNHMpV3moqsd2YHzkMzKMLUsFYUGD7HGmtYnXZ82H9qshQ",
  "key1": "3W1U3om4K67qykpWC9D47GjbCu2Dm5tn1iWiZX4wAzvkooGFCHvZfsSAqSA8dugqQ9dwdbANr3YUqSzccJBXcDTk",
  "key2": "2WVJ9iYkCt7pcmBH9yf4s5zqTDrWdhLW2bNXjP9uLnTUYQ8QdpzeHqXipQFGFfPjkajGbWXqzccq1H17t3NARMmU",
  "key3": "5obycpBpJ9mFqWg2yUBYHpzpF7QAogUXDg3YCSvjWGzksdYtxvsF1GioFc5V21zEbcXfXMeQCGbXtDmEKyYMTMWG",
  "key4": "hdvsKfiwJxhzFAdoJGZgrf6HALyVxKob7jswtc6gdN9gNDCXPHw8vRZP1yAXwj5nodvUkDBiKsyMR5oN9yqDj2s",
  "key5": "S7uo3F16xwhVw2VwBJUQCerwK6QfphLYvjnfP8MDpbmr2L2MiGyxFg4ycYCtSd9MGJtahvcNqKWLRrhjcbYZtHA",
  "key6": "2EEXTyJsQChSqYRbvs9WW7jFX8YmWvUYmDoe3fva2G8BmfXktntGC2wxz9quhbaZWu6Ju5ukYnEH4UjxSCMWkwsh",
  "key7": "bVKLLcVBuK2xyCHRdrFtYcd9zpCM3iJ5ay9kxdiKrdrRSMcAqok3GredaGbR7qE6NUxWbgQuS8VrzE8kEhwKuvX",
  "key8": "3x18S76kcyvfPt8VjU8HRR84R4e7vai6N8ph91zA4GdgpETRZ4hb9XcndqGStrVf9NG9dPU8QrBSaphVUjmvVAy3",
  "key9": "3q99Tqx8dbB6LKZJuFL9VoFs42JDCup8orymtzzde7dmF4if2BsqzPYBJmr1kPETnjz1Ykfh4cLsg5NqggEvtikA",
  "key10": "4cJoXJnk83iY2CNBqHQWySg1rGSk1ycw1m3gxMepkfswEtjkzajMLSuJQNUEKkhXnizu9d9noLCmz7hR2PvTRpdX",
  "key11": "5bpdDV3r89rVBqUPxBwWJXJuHiiZJN5F74eAK8ws54x7DiSwhzfjPTNiUU1wpAmBn5FVq2Ke1UE52wNnQSigChnk",
  "key12": "2KponRgq5jrQvEs7PFgo432zx6ZPfiKhmVtuxTAQoCfahZYukbwZDtdiTdGUMs1yeX1m9jAkcDq1f2gNxTvWquvR",
  "key13": "i8VVSrDhFAQRMyeynVTeVTz8yDQucZGMk1USYpPHnWeD9oKHFb5sz9kYNeQZa2VFagEanrf96GWnNfGHgReAmFE",
  "key14": "4EjkwmDo1CcaYUQUVuCq2HH6CLURsMoKvVDinZ9i18CnAyy4eGynjsWBdZGwjxpUWzLLUky14VHgbuCjuRA3iRRU",
  "key15": "3wGFHh6i6PCbZNVfpTLVg4BZDqH1fiVTFLA57yzatMCo8tyHib8AitqJicou4iZpBeaXNVW6jbwdFJG2Ktm7id89",
  "key16": "5PcykFfobPMTrXQ7Fa48KCwLUqLck2Gpa18fPsb7FTQFnU4yRWzY9A7D8G68cFDsoVHMXi4aKrfjwPTZ3wm2Yfrx",
  "key17": "if4LcaHHaovbwHhakKQ3dtmRPGgAbdtAXdx9oyDR7T8D9BTM6od3JZiD32Xb9pvmkYbxEYYMDHULxLLBNamY3pm",
  "key18": "2vEVoA6VjfZfSb7yXdnSe6UUzvWXLhDtX5h4MiPeEDYGAeNT1pAR1qM2yDVvBrp98QThj1qD9gPtixRNRfeTutuj",
  "key19": "Jfio3sdxpkpdGKBjZwpzqcMg4NCchTuKRD7aLkGkqKRzqA8qpAwi9SGvuuEdxyGHmqfdqKpP3BpB9zyrhCe1Fqo",
  "key20": "4ZPrFgikjNrpirkyVgFppxtWDeMb8WDSCb5fYcptEb8Vpmovxx7mp3x8912PzyWeHqLZpZ4tfwy2F65xKcbh3dA8",
  "key21": "43yYRqK2jjL2tWqDYBf68L5JScFpDvm9M8nQ3FrEw9L6LdGhMznkw8JxBYjnKCNTySqvei4ZWHc6223cBu5NWLBa",
  "key22": "4tuFVgNRi47yuLAth9SffrqsniYSj7PG8PQBYcL1vhZ4sSMPnJpTLHiUnC2DGNgwg6JoJ9i1r5L3C8qmeEJRzwEU",
  "key23": "4gqbMHgLpG6xLuVWWrgQYjw7A9BbnxdLe84Zt3nTSYJHUscrRssTCUFcVmptpRH5eEJLWnr528jWhYbwZSRV1Vfm",
  "key24": "4uxpB8ZpqweoXsMFX5fT3kDfP3SEueL9FUpUg9U7m26QCsomQ7EjSFifz99rKD7RBywUuMkXit1yxpDBc8bn4PfZ",
  "key25": "2QDsJSuHdczapZyn7djfxDQh6KcX6no1hnHsMAUHPGceBr5R9rWHQ3kvXdB3oy63AbZhzNQ47PoyW2vdA6HzTJVH",
  "key26": "2XtT7LdUGdnzhBfxyHR6YeAyH3gYTVGQt5ncH25kCtpxKAs7knDgXJJnNgiia3YKuhgVA169w5V9rsfuNeVYAyBA",
  "key27": "2qsi7AVNXwfJ5t3JBrRCjympbLDs7qcKmN8TPxP67zfxV3RLedmHYP7hkSgV7bbLvepMHpNixoqemkx6F4YDUApe",
  "key28": "2pAe2dyydRETV2L5KcfNsXwLhts2RoiTGzTeukTyApzh724wqkKE6kK5i5zMeTvVFDWXCeSsGxtziWt5Bvhgt5Sq",
  "key29": "2pjrXPM7y2PAsaJtzJaUzqSFWy2ipKP8pnA4NGpLPT3XtgmePmWc5v6GUfhbZBhAJ2YACSAX2yDJTRCD4pfARwey",
  "key30": "2Dd6hipLMJKpwpv8By6WCS2yvzmNBPWJRHVovBrZYsJvuvAe7WQ1MHD5t37nM1uviEFFp25W9NaJk5K6wvZ57pLd",
  "key31": "5iLrefYL2YgaNGCQ95pC8hRbtSPGEBDZfGkBSDGnbEUvtqQQrUXZxQsnFEGdQQBKk67WQhY3e6Kh5wjYFa7msXd5",
  "key32": "2dKWDeZnfFcq54P2VhN2kCSMGh9mCi2psgzdGUVqyFKqx9Tms8KTgGEuRd1MvDGvES1F4ANj4wNpvnhSx4Cvinsc",
  "key33": "583f8qM1nYq448hxNd5JXZWgiciSWvCJs4XBU9aBrcwWZrfP3sfFq2AkCW8u8fe8oUhcxSHJgZTj86MApQiMDhG6",
  "key34": "28zfbrdoKsLfyB2ayH3jy8eLARHSwgkx8pam4JYxu4yLBKQNkvayoGy8ZD8NECeNqBZjrZV9V4bV4nFFdMgUy4sC",
  "key35": "42RARJAHZ3mYGGprjgA91TgAce3QhpTWLx8ng2wUJe9fQb5h4He2mxuDmH6w5VMSrM23FjhtzwiAbKeY2dpVDQ5Q",
  "key36": "2nFcZ9wYCzgf5rzBF4TmR5J7iNyUQ6uwz47tTrViracK5nefm4RW3ZVj59piynEUp37XRN5srfXmTxochUxGQPaD",
  "key37": "5PZVPZnRLzNqS8LpsfM6FzKJHNB8ZMoBTsjXTiiqoxyniFLzuDX47PBwnGEUyQ7GUaMGN5zUJKS7z6H3TsQHpTHS"
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
