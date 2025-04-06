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
    "2JzpxdgXRWPmWWP7HiHUpJhEBbSwHnCL8HkLvbUPAzmvTYkAR8hWp4fm3k2gcwBVWiR11571eySLLKuFfwrjvndE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PVhLHBFi2kBwZGdUgXzd1DvavR3NUBc3QRH19psyrNY8U1ty3T3wZTggib5qpKhaDrtEqezBZUPznhyjvmkBtKe",
  "key1": "5cwvX5kbGMjB1tPpMvvS9hmduJ849h12jGdWsXWYkwGVZ7drEMigCDKcbi5QaKaW6fiGckgsq1zgewc3cBDDfCmt",
  "key2": "3qRte5uwTFP593ZjMrNWmSGQpemewRxLsLq2uo8zUth1C3UrnE59kCi3499GWyVsGFivjv3J87oKYcCqbxd6kbSW",
  "key3": "3CyjcNrxgrM4a5ZA4kVTZDa3hvqLoPGvsChqDzb9uP3usPWQs2kWbey1f4jMXEH1GCHeaHsvTLJpWMVJhFZjqETA",
  "key4": "5UCh5UhM1i25HKJZfthgScyt5tZ4q2tSCga1igtAT2SgDohDmj3F1FNZvZT8hDpo3LHXHAMtCLHrPHuJHZ53fL9a",
  "key5": "4haWkMbPsCZzpQyikBdp5j8Vtnx6cUGrHNHs9uM2LmCp7qZrvRD4Zf6ySTXx4udiSHTkcM8QiDNW3SjsYyyQ51Y4",
  "key6": "3v6Xr22cFTfo88upSwcdMWW7wdKgqC4ZSPAZ997dhbu3zHKtrnz3ehatH7TJqm46EqoDeP9YSEagoFeQEyi4KwxC",
  "key7": "5NswDsARTvY7VzbtrQxzu5bcX92YTuTUNn16prvHdBfqDpbJ1r9puaFos39z1Ni7VDZgq6WLaYHj281RRPCrUksd",
  "key8": "iD1tGH2osG9bYdjotNxSwhcmEFAXWSSpU3RMHGASimDEvTL84BAWj3HXv4cYZEizNwyMfje6QWkEvgXdBD4fF3Z",
  "key9": "65u2qR55imetaeytdPWM2HRdTDSRXtBTCZE5qgvL8BDtJrivxQriEuwECjkHNe7moLBiMrRDJemPppjX2bqgoiR7",
  "key10": "k81tBVbFdS6CBhLqJLe7rTex638TKPMVhAFw6j8kCvGMnq2yFnp4ZRsLVQ9ecoQf5eghhxgmQFFbrU7qCqNpsjf",
  "key11": "5FNNiXDwpRBdKxQhdk7r3KdeTM1UssU1JwQWso5wVVg6VTgjw69dntnciABZ3wPN6v3Saa6FGK937r8jbJ5Z14mU",
  "key12": "3FTxk8ZRCSDx5iXHtg7ykKsYRkU9b4DjYrhQQHAapD4YaYNckaAkfGDNgHXna7o6QTTm7EXXA5ySo3mQQL22QKWg",
  "key13": "FnhGFm3zbjYqsmqDn1eSLQ8rD3Wgj2ooATYCukbkkaVZ7wkA2yUW6QMCEVZNikUz5ugYotSg6HjCpuwbYuQBDcj",
  "key14": "33e9qfjP1od36F4JCnV1t2AJXgTnSG44eifmkHNLEx9ZkocoU4DKCRrJtn84Xg8TLPU2cEPTyWTwo4eUHhm66WER",
  "key15": "3YNv7mt1aSX18dF7otph4pHVFP7TkQ1YdLygpaJRQ41e64FyPNBmE4BZh1viCTFBgvTZ156PpG99skY7M9yG5Lbx",
  "key16": "4EFkx6HptBVShV1Q623kevRFd25ZN1WvS36NPtnyLNAmhqeyvSUhgz8nbGcX71eFGSWBiGxqhfSUbT7NqVqLuMaT",
  "key17": "c5L4W6cZMv74nBz2y2hrQ4z8tvhvvUFmXhPs6rxa3baQ9dHwDWnqTFBWoz5G3ionBxqNzJYUabcqVZSkHVVvLJi",
  "key18": "2Mn5mujfUYiUizjTZADth7ij7RTN7vPh9SgXDLmEq75CY8bhE6W8w87JHMTu6SAvaa4FzEoQisSrES3DboTJcaLd",
  "key19": "2pu7pQZe3ZecLPv1KBSykpxoBrgYhmYtbXgpQe4XyEqrUL8bME2xxhL7YNy6jdcz2N9ne3pAbGxxn3xDMj6y4cX6",
  "key20": "vMAmALT8TR4rcCbUEjGtgnRR4xqN5pie2qirAzvVf52G1rYBZTqpfB1zdpymYuS9DJP8bQ3Jh9saJtx5UBuTtKT",
  "key21": "YYCEr79DA57EG4Gz8mm8VGHMBbenEyYRKC76ZYgfwrC2epkSsRcXPUbsTVMAnYVJyCm2SZQNNk6cPhZpENEwiAB",
  "key22": "5bAQVNfzj7utQnPTo3b5rU4PYuvjrJ3cyxTbJrzs7KqnJudzWfSpDvNVgg4ayiiMsgJTouAxfD5sQkWjnXYRLLCU",
  "key23": "3YL3pp9XzGN5zvMcKKsrDqsnrzruPsxmT4qX3oDEFwzWuYSasqLkV9e5Su8SrMyjkhWi72dXEhp8Pu9A1zgF4n1W",
  "key24": "4WoABPzKfAmbQ6qha6MucRmo7tkKPaTLu5i6v5vymm6B1p5JHn5fhMVKGP8Sj7AuDsWgMnoLkvkdDtVLYd7uDUUs",
  "key25": "4ZbMPjgbKLb3u2fvxWBcG1UcwdyALTuHLNooof924omzTQMntr5LuNHvfAxfDBUTR8EjZiQcUDqbDjfop7LRgNuN",
  "key26": "UKg83TdemGjZnXoq9KZfYaQAwnQDT8M5PeTLxyaj1CyRqnJ7sELhedKEMUxG9jabAQdGMj9SQtxQMjLiZKsJdJc",
  "key27": "zipM4y2M6QA9R5o4vtd8deB2k4Sc9EVd3TF8pivFYc38d3h5pwGdhe1kytMxFy22gaHjDYdWHVYtrwDHhqSG6is",
  "key28": "rfaSgTYPxMLXqH2x6nSHfkaiMaRSQ64jXgxx944n3uhbUJsNWq3aavpeppnxT4Mw92MkVsqLEgQh7Pb14baYmt3",
  "key29": "256v4VzXGBuQba8zZVDMgmujJkjuL5TxuBLVgM7K1GZgKGP5k81LCVvE4vzNkCXTbVYxjYEE1oWyMJCHVNSCg3k8",
  "key30": "2GDWjGWmaqKYPk8ufzzqFjkoGvXo2eGWeDY5xHZxP9tp2h5qVvCgwJGLyMasJ1LwaeK6zfx3KW9McLS8F91Cqtrp",
  "key31": "4Gj8cgp5MvqFAAmywyi6YHB236b4VPTt38eQ1EeJPdqEMbaz49nzWpr2aicGNk2NSBkpht63nAsYsQkhpHjdo7nZ",
  "key32": "5nKqvsUEaRVuFeMeksEa2MRf4Jxdzy6wP7okbwyb5z23b8b2Jt5p94DvkQzuwuBfHfjDiAzd7JLPz7jZdF4nKXYs",
  "key33": "4t41wujU6cy2mBYNKKqjRJCLgD6eWnKVRsQtz5NctLpUkbKDAxPY6bkBgGxp92VE5QYor7k6tCMwBoajfcctEF3A",
  "key34": "4epNTeDZesZh2QkmsuRXLs7rUFdaejhftGB42GDX2sNkVg2j3HeuBa6cxTojcLCV4KNngm7eMT2wJFuvCP2itCDn",
  "key35": "4nsyfCNXA6HSWjZnTvSeTx3gvvBuBvLcVXKvEQU5rdu3Vih4wnqxe4RT8dVmjqePCNm7XSL4XgYoiXVZ4wikvnRY",
  "key36": "2admRUEV8PE1ieybbE4RYtua17A2TjvBqTHtytpdADRbdm5dUwxKR7TRfbd9aDKzRE8uALbgt2SQPsBZSAHfQo6N",
  "key37": "5GwCkbG18TvxgxbiimYVgquxwhL3S22K1HChe1YtUcQbMToBuvAvvWEV5jGP94R8FHR3evPj6jgscudckb6uwiep",
  "key38": "5xPC2xpu9bohJkdqdmMPGGnz1Cm7Gbi5p8N7mEM9hR1epQdNE6AjU8AEp2BGNgtAte65Hi6kB6nmvpLPyYhLHsUC",
  "key39": "3M9Lo6yGGGMoGyQiFTtum1ypQsytJ7c1UHwZoSut5aHyBH85nrDAPJR5PVuKo3d8t53iEWLj38cjnByPaB22TtSJ",
  "key40": "2x277DkaVNhM1DJ8aBbMi1RncA37ZPyQdw7g9T2eoHhCuCiSy7X7KdD23cisPJRR7dSoepFDwZrUtrE3CUSZYMvg",
  "key41": "4p4oG1Vsw65kFUoi4jT11CxZrjyGVkgzDtxn1WVd6Ye1S7bJ8V7x6oZWDDk2G7rTkUc7khvPtmS1yt57xwLwLzVM",
  "key42": "sUWXMmkirTds4LoY8PvbHjZnAaTBs9Jq9vNYTiBUSyKd2BRvcySfVAMdWLnHEdiqrkjg9eqrKo1Bm94JjMGdUvu",
  "key43": "2N3JCXiX9q2bqpxUh96ZtradYn9pTMdajHUXBNE13Q89Uo5HTXCeeKonx9Ugm3xrRSugmUiLp5fjm28dsPGjuDgv",
  "key44": "4JAUaqZoJB51GDNdGEpjHVZLaHTChRBxcA4RevpNbVtQfoZaQBp6SdZPaNkiH5wQz171uBgVwY179t7HebKP5UBB",
  "key45": "4UEzLtrXCDcdn1k4gTbGbyEJ9qyiw3erbSahEKireZBRD427isS4k5u2jvEWaGF6W1YuWTcZbbFLefCTnZYV61CW",
  "key46": "3kuFJQAAmpVTPB2t652o1iCgq8diMd2NTYhM4VKenfGbzRUu9b4UAhEWN3aJMhfCXs2dTQs1L6nRn6vSMwWbDG32",
  "key47": "RorDdMZTda5FpqbnBgadkAL3HMqJtqQbLKcABZMi5g1hbX4ZwGK3956pHMPPfuRJcSigBEg629vJ2riRXVqZXq7"
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
