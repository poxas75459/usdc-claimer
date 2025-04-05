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
    "2etB9CAgQCAqdMrg21Cxvt6eSpjSooW1MKKvgYb1Nxfs5QdP6Mbo8dFp1XX24VCBdARZm97rKwPbprdXzXHP93eC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jd5rZuNnoJEnjqRer6e8nt1EBge26ifkmL3MMy8cSZaPhZB3GepMVEzWfCLNj1fPTQFkWtvpSKR2AZngQ51NPLU",
  "key1": "4ux5xtNCg3NYcezTukf5zpnKhD2uUgo59N15qUBf6Nz6sgfQAZnuaFBUnRa3cGeR97cYLfjzShjGJw5mHAFf92hs",
  "key2": "5twMdMDtun8bbEatLoe49iod5tvQVtivQcsZtF6vWw7ARrbkK7889C6vG9zQrepis5tCpxm9JtGo4PhELncibPy3",
  "key3": "4dmztqnh4ZrQ6AnxrMok6DJea33DQhajuWphFP1poMmrzcYNAq7AsFQmzURrz42TRDk9yLqZ5WcwLnm3XtqDMeuP",
  "key4": "5MBFRa5HHYpkmV9NssiBFackgDfijyUXGXMY8y3bJZykcnNNZgaFhuR7AR6rifhWmQM1rAowj32MkYNbqxaNweu5",
  "key5": "4if8QEcWJ3XZHxhugWBaPTFgdZVSLHYTFGBGWdpACMk5VvcywZ4dVbPUshSnn9939tP5gPnJvMjbXTcsGin27eWo",
  "key6": "2mX2YzECp4RgS6WJMRXXc9utaaP5tjoEWjQyvMzpAxZ1dKeuGEk9JJoLuMonfkfKZgwvYCk1nvfoZZxVmFb5eexj",
  "key7": "v7KY9dbNvTAqjRnpP2KR6a3PyGssqAbVNzXos4p2BnQ46yysfzazcocEWQ4AnmPWpMtHZzHHDgYYtVGBvHzxPJs",
  "key8": "5xwecAyM26FAqtsvkfxjrtgwnmJJWK4iLmLxfPc7E1tJnqRCtDgfv2unnfAEJiF3UGoNxwfTqst9RA6HtcBCnAJw",
  "key9": "2AWMXQrkYZiBzbZ5VPHLuBHuJHH4cXwLXUzHZu7BNv6CVULymknjCdadchELoD9K1r79sYF1fKDPqSAZZCgU7Z8P",
  "key10": "5Ypa1JsUnSoYZ5yYqPGJfEQ6Nd94DioWS9UaF3Jb1c7ts65A8v16p6y4HJKBetYBw7wBiHY63ZpHyCjMvJLzN7AF",
  "key11": "5uKC65eewXjiTyKyWD372BbivVhXk8Km3huwGAdL62hNjnquVEihSh6D2DtMV9jGhX8sAZ6gBGxHjghgK89NLdmy",
  "key12": "4P19TBCw5hkHoTvteaeJvLiY33MipYXVzigrQgYDCMWuaFaKubhEVLb2m3HBUK2P5TkM3UgSFBrSZavHGTrWM7ui",
  "key13": "eXkWP3aMrb49mazYv3GjQPGmUagU3drQyaSMoDrki753gVYfzMH8gzdCFwNrFC9FyqyVHL7mi2CTpB8rtakFbze",
  "key14": "skKVQfN6j3nwCbff1D8tyJnJpRkpf7bTDHCWgMJoHgCrzo5VtfBFVYQshoRADQuiXZQ9AmH7mgjaBZWm24giSRz",
  "key15": "33upcW8i2STPuoZkj5ps1DWgQqdVskosRXSTj2pUwxV65psrv8HCgojRTDvgzjpfWyH5qRFZh9Njp1EFgmtXsGnR",
  "key16": "o47miCMPGNXYkxUjho1XDRSpMK1sEc6KrJDDQi3yP2b4ozWqYx5npuCFP8LvBDjwrDiS41NuNN14Zm8P2UArqpy",
  "key17": "4i84oaFi7aJ4okfBHrVtJw2E8NfLcFMyTsExtUQx129pjdcpmu8akRywyEZ6f9Mh4nim3tfoxxG8ppkrzaDf1bBm",
  "key18": "3rmkLvuV8rXrsNHtJkhhhkCEmyiY8pCk4J5HWU3NCP57uQvyqgzyzjHSiP4MjiuySkMMFPhUXJ3fi35Kgg7XoQPw",
  "key19": "Ff5bbxzCPePaRE6h1jGH1HztUkfxmhve216riRqR5GhKUX9TVQzvCAzhboSdBt7tT1jtp6KGqe1qfwWNrkKyW63",
  "key20": "2t2QqDSfEhjr2EcZtA3eV3MeMoX6GCf7UhMJPntQ5vUAUXJB3xPijvxJvBcAXyUMcpJ7y8wrBnqF9fu1VmsCDXXB",
  "key21": "TeoSfsMR4rx6ZS5HkVpgJTnCqjDx3N5vkz46RxNrH6F2LZE14UMYs3MzLsLwi44Qyjooq9KS2NksnpLB2xbD4Vo",
  "key22": "5cGjNE5k6DCXcoCv3CssLutUmmooAu8wF3Gv1aasTzfYMC5BcRdHBKMtTkgQ3NUGkJYNg4XQsbNgfCnSeAH2wWe4",
  "key23": "27mGntaAtrKWUM9HfkpTQ2vdMtqvKsxJewsGR8jkEVuVB3ohQCU3shbEiJt4Wbe4qNjnSdUJQGGEhrtx9NpY7Ash",
  "key24": "5swUV9NYoYg1rwYBjevFapML8WPUeKNLkmPMjURsnkqfWULTEccswbTchdQLoeHea29N6UaFuw37yGknRwnvdufb",
  "key25": "5KhNX3HwTR4nh9zZRkeMTdY3cQnhozcyqJH8s1B5tcPPLq5CZMexdiYzHcmA6Vab7PEyKi3jm74KvUYPSa4WhqS5",
  "key26": "53TeVP1jmK23dRHKT4ccT8czDonDpzuWhykbrR7uwzNehfyCNUknGAKqknNL9r7xMHRsqB3QXaMVj6ueEcU2bbRm",
  "key27": "YtzJ4kQVjmxHgDDpN1UmtFsiiRVdyLv9s3r2BMgAreNUqWg9Ek8QUk2yjsMmRwRFMACrQYoeuJ7PbhUwsjHtKVt",
  "key28": "DfUWoUmkjKGGpK9GEoQYskSf2BXTKpfkKJPjxhdDrLbNktuNYZa9hLiAwYqCvNZybsRjssQtwx9h27EWoPA3eS3",
  "key29": "2PHqKs9GeZi3vZ7yAq2EgqjQHkzknrimLBQrZyiuopmMZKDDc4paBiUVy1DpoSWr4v2jk7n5LoNj6yUibxuyXo8w",
  "key30": "5tZxPsNeDripuYx78fp14XJBvtF5mnaS5yR7Lcd47kmq4gAqJ7QEiZsBu7mBtx3goXpYANPNsgARLnVkdDC55qY4",
  "key31": "2x95ETem4L7ZgDD18KNBsksCGXNQfQGD9MME41dHbvSprej8CMyqh3BVjundJquLN5NPBVtt9fwer3jwChHbMNEE",
  "key32": "4xJ6ycZ5eJBaNy5KxEne9e4TiUmLmVkTm4zUxJiLUhGjzgre2oFBQin1iGo6sJAWFSSyfPxnALBA1b2ayMpYiCNf",
  "key33": "5iHniBJyV8h37V9UH31xviN9Wui95sdUEYkwsLrH7N3cA3tah8nAaeRfL8iEn4S8cs32JQR2m8nRhLe9jkgXQG1b",
  "key34": "3p1VschVvz3kiVk9AVqTKMmwbiidWYuCVFu5FUXe3CpPSrKULCtahYPevDGbufk2Npww3qizq8MgK8vKWa751bod",
  "key35": "5TnCFcNSJ4BFLJsrHQnZmNq5sbc7kDAUGa7dQEhwCdRXsjdF2rTsnMns5a6cBzjfVwj3v785KCavYFyCsGsQXu1b",
  "key36": "VLhzvcde6xWHv54kUkW4DZy1DM4kELVFTQEipJ8Ni4J7yczXMXZbAWwwMEr1sjqPYbGoazwgKuENKAaWqTMWMTV",
  "key37": "5mngUW2vd84hzGiAkP84NFzWCDKR4Focp7simCYfatmJ4n9g8cTc5miNoSLrzWoZjzZH6xfWXoVsvz1cpGE8ntWi",
  "key38": "2NQg7qTYQ7akfBdd6T4VzbFd8p4TunRzV7tpASNeoVmYvqHtdQyQ3AQ91n2AYjEHc1zbjm7r6MhZrLQ4sUtX7wDq",
  "key39": "5VpCySW3Mwb7rHbb2EfdpzkktKM16oKF9JuEL6tvEsqznMUts1ppiypYXi6zoUCD5whY81KivUpjbzCaxy3NtsWm",
  "key40": "R7VWnkTvWZLW1c2sU4EPAP2XM9ZLS6MLdhemKYgK28mu4oJhdFiJPjkG7C9jCzLR5jXrKNYFmMH2tc2S4QpM6dt",
  "key41": "F4TmgRZWvf63ERrTQmn5yjwkSQ5tC6YVV13YB7EdtW7iMcGGpZU46ajiEbAwq8NC64HwHgprnXjBrdknECdYxmr",
  "key42": "4oyRB6yHhZZB592Yq7PytvQbsQj9vx4GrEZU8hhvvBdEqL7pMk8GWvNK42XWip8C1P5M9Qe2iqKyesMSbAa6JT91",
  "key43": "5Utd5Qxokpfrq9S3S95s6rxZQkifC8F9KTpeygqAD2XQZeYDaPWPiVVZ9KtiS3VGJNecK2cuZRuGPTVFQRHehGBy",
  "key44": "3jZ6P8qRdgLc4Z2nwCMdNqKyezrRVX3HWNDkLG7JDph6qJ5qLbbcBV9eku2qAbR1cmuyJXLtRNWsuPcK6jfMyN6o",
  "key45": "5ddBWCLXt9xyBAN9KAtuQWbaUQQ2fFT2uahvTHKjz32uNTxBViM7vLefrsoPy5qrimDjwR45NMJMqhnLjMsQ9hVm",
  "key46": "286DyLLAsYDGZWxzHCi2dHaBxKHF6FwdyVqAGUAx5BjxVTn2Z3Lcix1Qsebciiq1QXDR4WJgACEML7om6hxPLDzP"
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
