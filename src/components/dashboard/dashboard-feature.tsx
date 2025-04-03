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
    "oApeKtwmnYuG2BQCKHYjQRARTMfo5r6CAwxM8nLJgPTzMpWWBRcTL3ucEyBNwHhQ7QZLH7sVRXXp7xMPgDy4iGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZVnisb3sELyJJxjQkYXqzj2aYdqvLtSdhpKbZvD9G87NWRyHsoZu2tAEShAJqR4sQTPyHrssotBTY7WAAg8oFnG",
  "key1": "2pV1KCetG29tpnN1xHS3crfJ1S4xxFdKavogXU321NFPGwFFGhZZmZrr6TQ4Hx8poUM5nGkSL3eWqMEWGfFoXJuY",
  "key2": "63RjjLz9SdDVCsSt7uKCHhXZFGYkKzNdX6GbBG8sQ5Kyw8VgRrUFm13W5vztBpc9ZvamPdGvVVkBZR9xh5ku4Ric",
  "key3": "j8wUBexVZE5HZmRAEibopmsHKWcYRrzosfYAkgdkvsi5ta8GnoRk5yxu1wrq1DNkYtQMrVaF9K3UiP2LQtAurMs",
  "key4": "2Fd5jsDJKRbmYA3XqpWrb6XVUCXhjgYsen7y391fYto6gsbeKGXwUTiw4uDqe6L18FrYkESpRhxzvBDBH1GJK9Ef",
  "key5": "3sgzMY1g8SE6c5u6AcCBEUs5qJfem619pmWw2pjtN9WiR99ojcxx1L3XVG3vixthEEa9poXMHCu8qu7jKdnwaki2",
  "key6": "2uGw9sbwhjPb9xZWqeBYwUycwsPb8qL7Jy5xv1S5PFobG3QTmrMeRrSvwzG4wCYd56F3GPeJT8gz2ovH98xp6fQN",
  "key7": "4FaU2cNNbmAuFpwPxUFrFqcbKH7K6b5ZkJy8MyjzwsCXZvMVBhWs7YPoPfgvuHkXqtoF13AaN6Xkz5RBgvyh7uKu",
  "key8": "3RrXSzdXBPQkKA3Ua6rqW4dBX6UxtRkkPZNGqJGicPDyjB3vyutjLfaq1nShW8XFE6fgFkn2T3VtRkAb3yLtCiUj",
  "key9": "5A7JKcNzFySKiTJmcthCBwgg4R4FR8K211buzLwrpHxum3f2xjsntJHQZoejrjG6FfN35JMSX25xy23XZW5pdshn",
  "key10": "5hQsWYw4wgpr3azhR4p44MQyTxjdtE4W8JEawAbqTViRgYXaZUMUKdD5mDiTD7TZ2uyG4PeBy2YrTMWLQQxFXTrM",
  "key11": "2o5ZzaeA6fGJ68gFb3huDDJ1FDbPWpBx4M4joDpTQW91PGgQXMLmHpnC62TXNE9ErSKtxJ8VYoTF1dW8tvBk3i3c",
  "key12": "4euzRK1mYVJdJ34Q8bzsegoVaSym31cdrQuXZGsEkYwZMwBykTP6qqfwPzRS7fTDpRLP8MRktTscgSwVFHucNS32",
  "key13": "3VPZFymdCcrrreeQYuq3LHCRc3SFYq1cZziFxSA8y6sMm2VDVnof2E6PB21kCXBMh3ryR3mVRhYMFccSSRKHYCLY",
  "key14": "4VURC2HsbrdhdFVhwZuwWqdVGfCSRGHqmNs4GMume9j88AtXAJnGc75SkncWKiT1q59KS97SW9EC3gPUzZpdHW8r",
  "key15": "414QB5fCvXRK8iKa4KciqgL5qMGajCmSasuSj7J6d8ASdPPL2oNiqx4fxv2XX68nh5zDunEup3AzkgbcckAK6cUS",
  "key16": "Boy2o4uwNaeAhpL7RumqYj291Md6Q72uEwBZw9PFyLWHvqj5xDqCANu68Jduk7CchFAbpKjBz6VHM16Wk6HXGoX",
  "key17": "4oYeEGgMvMT6thJh3U8Uck4C7ZhrjUjYLrrQ5GFqK9wuuJL1wt3A5cMpZwLUaDxAWsJ9q4k1muCjae1yP4orL2tt",
  "key18": "3aaTiwmN1kECiCGQ5bFdo8cmfU3oDBRuGYmxdMoHgKA2DqgWu1opFGAG8Myxzu8XGs4Gss8GzTjJtyyTZ4YeumPm",
  "key19": "2zpABnEbojFSqyP4P4GRtrZBW2WrJjYhHSENN8LC9ju6r15KHCz6eL5q8jWAyFUCYqxk2Fdvsp5f2DxbWpVrpi1w",
  "key20": "2NAuFgmX7X4JKAoybwCxBzPiR4EPgZV529HdVzbkPEMesMuLM7k6o12AegELUxW9xDK7qpWPzGChaa4wqwrpqurG",
  "key21": "2pA5yVHaoQAyJ58huGEdHkxq7NXYTeQzxrfZemR7L3nMPfQtaTrRV4qNWowJTAnmbquRobnGDkx5djhd1KYNuR5h",
  "key22": "3jTc6RC4K4rjRdmjUneiU9wE38WF6Vhs2zymdDzdQjrzMKvuNgkrvF3DtmunP3bxp6ykXuTk2JJgAssv2BTFCHTk",
  "key23": "7TYsktM8mPBRvfHDvUxoPp9sVv5goo8No4TtdAdhek79t9k2o47YF1uZMt8qWpm4Zfcb8KY6J7dWmnokm8PuodX",
  "key24": "2Jabrp8xEnHRY6QGe2HqFQudS8zKDJX5PMLGHegXHEeQyo3fSR3CBdap8mvpWUngHvzvC4Ja9VzqnBjrKeE9dUBp",
  "key25": "5VgEUmGBVzUJXix6NDdTGY9mdeuBGtj7qUb8G7XjUSwkeXXtj3WB2yiU2d7AuTsMqCwy17h19Qr8XcqcMHHWXLiG",
  "key26": "2AdY6hRZaiq9jFbexjpV9QEGfYhefJEsXcFYwopjjEQt6M9AkCqk4GsqEmg8MHcJCLjGcvJaHjWz3MjRfJEG7QVf",
  "key27": "5yh9RsM2PaKx7Pashax44WYArSaZVF8FjUXJJtwMi9vo84bQN8D1x3jMhEWpJ5iyQVgr5ou1EkoE1qJ4KCVD6TK9",
  "key28": "3JbjKGqj3tC86xYrsBbz3H8sUK4W4VkPy6mvKqKxNcyNmUbmrWNbieVkCQ268WehBpkv74UqL1weUSnsGmM5uQKN",
  "key29": "4Tn847tRfpZ154uZMT3ZHAsKKd8fisQyKdobqr2SSP51RBd5Q9XvrFdv8ZGPdWbc1vr6eQbJTNu5zmTMP5Zm1cAf",
  "key30": "4afhJkXp3ZUzEJRCkrerg9xMjgpPXfBk4nmEcih5r7ZbKpQBuZvpFhb6wiJ4s9jSC6192stxNqtv3amH7eEZLjdy",
  "key31": "5awe6iFuanK7sPgqUCUPZnNDPHnd8Xw4uYdPNbvFsKaM2RWE1TouhttR85LMuNNaac9cgBh1PpoLxdrdYEYB4ubR",
  "key32": "3yTrdLmHKgwja5f7FAj9QNdXbJpQnCpaRAEEFiF22oLfXbHMUQtiaA2CWzQQro2UrNuEbM3Zic2mYdm3FigeBGHM",
  "key33": "5u7ZXP6yLNUSgjeDw3e2R2yGF3YR6y2fWiJ932syXLtSD8eKCUU5xSRb5uwHQmDG8ExMyDiJK7ZiXYsCrZ73yF4g",
  "key34": "3bRYwk75CpwXbCHf3xFivjqbUiEVrUwrgoiueQWYdK5E2LvaRkLYxrLkPzSAa3MLLdaepieSzSNvfnkWu17pK4R1"
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
