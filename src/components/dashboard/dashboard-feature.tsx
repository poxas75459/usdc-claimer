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
    "zfbFu7zPSr3t2YdN8ENj8iWCAYo2B2xko1rtc1yXdaeejGZYohkrWazhThNHydmjEaoPX5wd75Vj6WvPFZxow39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jNR9tEpU8ejVR3z5NmDW6Lh1KfgSEUwRHMRz2TdTfy77XwSyJzWSH7pDPkJm1hwngvwSNvfhpADq7zEpZWg1wbi",
  "key1": "3UWf8hkxappFr8VVnQW95ZaaFFDJfcvo59BvN5nfoh8LWF7U1jYAczEC1W8KkgqDFoTbuoMeGvFRFV94XdKY6nsR",
  "key2": "2DkvT4gdgbjEozTGmqCszdiwcZRESqwN5X4zwss56AfM3cxJWornXPjF8SGatn6kDmy4UDCgD7puQ4kRfFAY5KWC",
  "key3": "2J74Ns3aN1SNrhP14hX8XXyWgzWZS42Q8ku29QGBzRLngFwDKYuLkeQ1JrKCxuY3hmKtvg5vZeejuPLo4VGa8CaV",
  "key4": "58cnFHjdb5fuiKCPZ2oBayKYNYJDhwbCYC1M1SZZRAT2sRk67DTG28ogD67tEVFFBt2HTV9ZWeU6mxrAnVwGb2gz",
  "key5": "5RGvhTiQ3AoLg2nTvi6ZVqVNdudK9Nr9hvfELVLTVAUKPweGFnNt74pJ7oYwoHWeYe8CBPTzWxsP9Wyb1NQPjTYL",
  "key6": "5YEJspKsGmH1ow6d1RG1kqYr2geehdWEuSVDCdx1FVoRwmSzhT4QXouVXHEVYACrcXuijRmFGQciPsWQWDeM5Mpq",
  "key7": "5SNnDWQPBPFuBKFdCvuFm7QsAwhxohrjjRyUKGWjXiwvkyUuT2gQ1x8eoyeZYdhPzkuNmavEPdLvQ7WZ5GqwjPpE",
  "key8": "2Y6hupA6e366EQLbydHWfSuagtiGi3mrmRWKvjWayvvtU5cHFswSu7otxpy3UauUNRTpfutmAePzzyRyTE8gmaeY",
  "key9": "2C11DKSZ9AG7ETpxKvU4dEkrLzK4AWedecfL7MUsQwnw2WJWPQbXxHNSZr5CHzLo1vgqsepW2gJXLKqGksYAn7jp",
  "key10": "5gdCMhhnAbPvAE4dgpZLVY2eBNEk32HvDifEu3ELNQsS6KHg6MuWQKYP1gVnmTC1z9BgWjzggEaauc62JgFQf4Wt",
  "key11": "5HG2AiEhaiTNGFDwwYddGrCR4eXF6PmR8fyTxjbmtrpzXuCPTWSTtPRxCUBnV4awLktqFtNr3whb3ZGpBaCrxvzQ",
  "key12": "5X7ATcs7ju9VnrEj3ffdP8uWMz96ZB5nXW8hdMNACiCy9rJFxzkE27SVcMFnK2orR4BdEYmgBCqWtSwnMdVTdUYZ",
  "key13": "4YHPrVRacBKPwYF8kNSgbtVg5qrb7dSzguyMs9bvLR16Z15chEhC3zgxfyFE9XHFkxMFnuiB6wAnap66MoiTqC3y",
  "key14": "3Q3jdHoLHnvDM7iZugbUHcdLHXc6Z3GfVt71WboPxHJ6jLTyG7j1vicrdDiHVKCKGnFR2mFH4vPA1bbZ5k4wxbVY",
  "key15": "3qqq4CGfqKFQEFtRHuZqjdujbpsjxiPApmChq2h8JYjUdSnDCgMmXpNifi1XexRFWE2ZSqhSrwzuK9K5HcvcneJH",
  "key16": "2t8JAF2AcC1DegNjUzBnMrjToXWHWhD1VVYN1a6DuP5CY96jiuqQiUCHriU311L9MtDLMj3qcV7o2BBiL4VB61j1",
  "key17": "51mszeay3Kc6Qu9XdxifUVuz5Prg3kFMJfnr59knpemRG9DW5HMp1vRBpCFs1ApNfr1CcPEapsf31zt3gZgkb8s2",
  "key18": "2t7cGZc3Rg2Qe2BmUF9P4w2T2APttFRaP4DyJjWvLYxph2ps4J9wFT6hoYjJP3FhyE9hmBXy84TTLFZ62wjm2D35",
  "key19": "3GaCknQuawcyxRRvL4CzKHA6L4wSpPeEop2aN3QUqppzMyw4FUmkdSHEU17SVxaQCLvDx1jQgAxePHF1xGudCXyc",
  "key20": "3MYXqguzbigMeobZ5nALPSSLYwy8Jc2gHMiv26nCe1VDiHK9q7N9KQErVHmdHHej5SSZyMLyFzC9KjZby3S8KbEg",
  "key21": "2WBMqGijk9dUa1qhjtQFP81Ju13vqRdF2euw9YSk3hNv3v9hjR3efbqpPYAN1scsgE8pfcV9dKNyBP1nA7mgw65j",
  "key22": "4178NUrsEHyut8rHbN9XqT4u8L3Xf94sqwW6NoJXM8utZ4n5aJhPHc1FCwceWDVM9hFT4G37qXy5ATdUTSVCsShM",
  "key23": "39BBNYhBpp63UxvG3nc9fpNtoJNAkTSeBdwQEcirQ2STFikHcrzYWWYSCn5gK7scT4nHibLMKg7zoYEyegEyCWuw",
  "key24": "mK4aLNqVvjk8vdj2uHpJ8eeGQSfasNrK1eC2Ntr9Xt7kMu7GBVuRG56CN24ouEdiMAYcqTBB5sqgqcaJuRxUFuY",
  "key25": "57zAqih58L5C8baDwuH1z3LEgRrZ2u22vQxRqRaNMk4S7hFAMRbnCN2nBwwSrEjuFVcrPLT3wYqdYqJVyY1jBHzA",
  "key26": "NHE2CX8L6vuKhrDz3eC9B5LxG8Ta3MeWejNpMbXWsBbzZJjmPDufonYx9PiC1EciLniWKR4mQdaq9dnTA9gZxJQ",
  "key27": "3yN15tMbwA6oSVaa4kndUYxzDtVia5JJDAXAQRs49EaoE2GD1EPyEoVgDvnxFmXxwvmzV4pxEe6pWLVyFwbySTWB",
  "key28": "2rxJyp6whmbi6t81fzv8s8442aTwNosoWNyWyWX9KfSwcDCo4fm45NzYGnBYSUMCa4xFWqQAV3QMbSdeRJMgZ6Wt",
  "key29": "65E4Bn7amdXfW4reQBp6BYLiiC3kzBkWfQ3k1LpTxPXuCTRjeEVu4ZHZ2i3EhHwNjb5K2F8Y8MBcrTTMvCWxfLbw",
  "key30": "39cXjX68UvHkRfWAhmfJbD8wWRKmsaZLgMGDm8g3qVhoX122qo7KDKQf4iTWR2WqHYFDrPy9LexU7etbi1JNMb2b",
  "key31": "2FgK5tpzNJEkTQEEy3detG4PX6zXNVc7PXgg1nnh9hiCxQRKqRrpqK7NfcsaR4BqtTAgzDHi4NeJawyGMGpnop7J",
  "key32": "2qVjnn5CZTbVubMZjAQpPtDjz7b5xXMv4rB4cvKpWs6z61neARUmfteSTM4vsXxVfu8EoCe7qxvLdm5guE8VHaRo",
  "key33": "cGYbZkoSgBoam9XXJgp1Zo8C8B4hK4BBKBCmMvC4hvPs1FpfczWHRdHtLGG1LBkrNF7VT9jNKX5EqYsh8Vk2yjX",
  "key34": "5rKLT45QQm7WAvKnyHmpiV7BoS8n8bERRnwoAAP1FLGSooWgY2ndBNLESGJqyBjP8DUU7THmMgDG5c2dzyipCnYT",
  "key35": "5MS9BifRQgw1ewGhbgr6h5awEPboYedkMEVZ1TkRrF7qheHVPysfPY9P53vVxiBDAx2uciu67N6uL2uGRZJCSnZs",
  "key36": "yvCpc2ijLXJWg2jhv9zptJVdLoCfH2zo32pWddqbZNTaW76M3TThMrUcwLeTaYjxxjpsUG2sY9TtGtE3AZyvPFN",
  "key37": "gar7v9A7mdbzZctsUfnbFnYjz7mKjY4HCT2hQr9bbWF2E5MiZ5CCSgpcCvVZytmZi5Roc62Ji41CjwuX8LnEzAt",
  "key38": "FNPhJjEHXyXGvQw4ZcN3uyRvXK1XR9eNEb3fmEQkcroDa8g4KxNXBokHie5N11VzJNsv5QZWu9zgV8CsTMUvvQp",
  "key39": "58PPS7ZUmKcv6gGeCAB5MdQCW3nKruvapSefR4joH5p6fixpPwHseyexA2jDGLTuzWRcsmkAqLrJEydt3sQfpwRJ",
  "key40": "5WskhWNbkvg21w21mvtFnnY6cBKDr2Qk9vUdd8wrC7oaPtRGzL9oYpciqBzTjK6E5gWTLVYJUfb88JDjjNKc6XBr",
  "key41": "5FnjuNjtu3PaWiTz3wcVwEJ8aLreLvs4wWKq42zFfB32C74LZSuK8FX26ncY8QmqbTt7BFSxZ1e9FpcxEgv8AobS",
  "key42": "58ztaTdVBdZHo4LicYQktBRKAjn7eBQNVxp47YiaMjDzsJUa5yKmHnipk8FV8Abv4GWy223r774sg4eAQXk7qp7t",
  "key43": "3tW4KGBy9ghg6KFdzZMcC78cBotpTxW2Uocab3QhrQvzEqUrLfFUkv8SNB2fc4RUfR3XWPinnUHFm7Ha7uxv6qHG",
  "key44": "5doiNtVZD39iJGuuFs5fVVpFJdQaymBwZs3dZyPq3XxSB8BHAzAMrgsqzjBF3LeDhXRhMwhQ7jJUTLW3rB9tusta",
  "key45": "5XNYx9BE2BnXqxnkB35ncWpkZ9nFwYNEo8mEdikeKoNA6jUfjCb4NsYdHA9ev6hn382fTftdZhXXfFFMdAekP6Vf"
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
