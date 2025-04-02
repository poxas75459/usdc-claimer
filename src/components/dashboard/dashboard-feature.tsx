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
    "hEz7UFJZwNhUTy2kkpKEZYbaA9Fof3DmzADLs8AZ6fH92Uyhn4sSZHzKwr9EQ8Z4qRfGYGJ1rmMGyxgP3XXwKxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XyfVsBu1Awkn5rLP2ZAmmAg22XHqykuPjPYtdwSw3LDGBSzFQQkVpC51QcEdbpsPj8e7dQDf55tFavVwcb3eHf",
  "key1": "2hK2MNHw8gHjH9AKtLBHPF38jSvwfATvJrKGZtgx632veVRygztsWgz3kupNqpgkJDH1HjM1yKr7Qdoxge8bsHmb",
  "key2": "2o8js3jKrFLisZm7dXu788GEJG8bdKt2oDvaDHLauREy4P4oKGuVJPDhfNEgUkf6vDqBr4iN1Z3uNL4ZGodecxfF",
  "key3": "wUTgnTXVQWzrARQ76t9tf6hvgawpcMh4jgVQcHKAQYTRHBmioa1ikDaWXNEpt7ZV1ovfSav7kySGDCjxdQaSTuw",
  "key4": "4vF2x8ReF6ZPMn4aJ9wxMvm9c5WjWMcsesNenDx5xgR1uG3oL2k8MoSSDM6SkZdCusjd9ABmxJup3962W7g6HNv",
  "key5": "4im6YcygRq8wNaezjEfE6zGVp96ynbigNRd7Z4vRiToNoDu7rrEidYVR57GWuEcdczzEPCjArgWpyCGnnaPknAZk",
  "key6": "2EkZBJAHjLH9TkKuKgLdW2QLzN7fmqd85LNUMvKQfAiv6qgNLmdQgAcbDyVhpv8fCfjwTiq85jzGyN6mdofFuUxW",
  "key7": "xwFhrQeaPpEdiFsarb9yRZaAHWP79GnPPVQMAkyhya51YF5GfKHkPm6VxLEZvdW1YeJQabiGGZDUkZ9LE9UcZC6",
  "key8": "GpeKvySgg2WXpiQzQ89vs45pKNUL7TshF4ADm6Dv5ZCV4VQ1cBodn82mQQeVPW8xu1DpceXt7qx71KF8hTWP5dJ",
  "key9": "UfLFraZ2hcyWX3LN6woXMUQjFsHV1dRkBZD4sDseoDo4eBwWuzCcTQZHzUCz3DQTsNzY4SLMpiZRcuStWnnfTi2",
  "key10": "3CGzhDjEFu81dVkwwEsNqWPjroFV5SxKXmYH43c6otaZbw1JBFFiuvm6SvSxCVeu6nBi4nDojLcjTYm7XS38bZw9",
  "key11": "32iR8XZbHRGEPESLD54M7cDognontDuVbg2ym8MhRTpteMinXmsr7enejeLrFYRrFuGsYzjq87PdXv9UfSqRWwGv",
  "key12": "W35myjTRJNU5A7Ad3LKaPUPT1cLefLufiER7eh7ewnwU5g3e6SFyttsdVB2ubNRJAnZik7rjpkZMUudTCnsHhz5",
  "key13": "2uptjER8cieQWJ2vrDD8XAqa3Qgmu3bFk97HRw91iafQZLXWKWYh9zpVs1CPQ6eqH3N92tsiVHF2wNv4Sij8jLDN",
  "key14": "47SwM2k8N61t4kkd4jJL8HDeqeMkqFFRxJVsCwYKtn1iqWGWFVcau821My5QJKGHs8UkvG6HmiP3McNm66Aju8DF",
  "key15": "4d43xiNBRD1WktP1WXhHQzRZeUYcdZVyvAmi5jC4gmYzUQTDV8Y5QxyvgL4hwkzAQpigugQM8rMcTN9Q3f9Gu43i",
  "key16": "3UoTim5jdLXYHDfe2ytQszZaZqyEunkX3dc3Y1VVaDHHZYqoySjxXFw32rL5mxdZpDNCFhdGyN9oKHFxccDtAR47",
  "key17": "aGvtrmUFY1pBtrKdbb9EXXbtRs6WcozkgNQMj7kPeCeVFHwGGqYz3D7qrjqd9GH82pwGZENMaknMp9HEjPC747P",
  "key18": "3RRvqryoPJL7ztQYSb6mS7ENzkonuGAoYaWzymXz4EUtEt5rnpPmx1UoA2bTLWGBd3mXm6cMsh6wYhxxXuR2G6Q",
  "key19": "59xPTt9scZqzqybKz5A9DbZBoMyxJsJyoMaoewpSpjHiqSUowPAesJpuVKVGDFHJSHFcNdRu2XLaMvUsUtGWdZ7T",
  "key20": "3gKvx9bgdcK5sG3HB1NmyrLnHCx7jHVpxwSh2Cjmk87Sh6eCVR7yoShZMrqtwibNuMxwuWem5FVbX2kQGyuP4eh7",
  "key21": "2cShuNmN3CCqs8FGj5Fk8GJZfqfGBUWdpzdKxdXYZPiJ1QnaJtyYwJyk7o6CZNQaZmM618wQth4My8sbdMxoTfbc",
  "key22": "2jKgcauvfdz1hDjEzCfNcg8Ynb4cJqz3sTKDSE7FhfkR8e1Z6FSLSL2paKnK2YPyFiwWGFx9DvE4Caz5BBxVJKpx",
  "key23": "2a88XsmebPy1uK5zHFD8csbczbqzUpJjrnrHiZ8iaips5wSF2Uj31yCgxLH9jSy589mweHTZuN9Ja48h21qQyvK4",
  "key24": "2qxmwKHMs3SMMDP2qM37ccqs6sd3FgRamX5B3X8UbMeigcT6msG3gUGg1fsUd1951PDTi4eS8pHukpEZq6reEyZb",
  "key25": "49aFd7iwYN3EwADxqwPWqrTWJR7mUKV55iCHm6XsgzyMfMfYSeVekEtp5aqfx1SfUptiz6KGEb4vF6oN7eZi9Mrm",
  "key26": "2mxEW2C6YxaksY7Ha16mNQn4uHBf7xuLf3roEi2rzHxUiyh9foq1JTagqK2gNA64junS8o3Q7rm4hBrnsYsuRTuy",
  "key27": "2Mpt5vgajRiZgzEDpUYj2qdX4nLyKt2e6CzVWfxXC1gCjxjsucuJTTmEot8bU1RLcVy6vGFJrn1yVBGPHrVAntbb",
  "key28": "3cRzbBBcb7Spt7jMn1CvRrFHqj94A86MyVXBzy3mwny8yWJFd8quwLKao2fFbBvFkm6CotdAQDNLR9a1LJLtkRXk",
  "key29": "5XvbLy1fFMzivXcekkaDsxKaRAHUDSdTb9dTQNDFJEC6enHFZhVGrmo6MPb5sCLXq6X73dxnwv8NE4hZS7DZompA",
  "key30": "5ioCvyE7P1Lg4NhRh4uKkcEYBdo4kBAueSschTmfp6Z3CU4QDJrY18gySQ8oTfAXTp1YTDxAgEAcsmXRTECWdhaT",
  "key31": "2isWrVg51dk15SWroTrFDgGdJauJoSKyUPjagAvsfnjQQksvMs5z1x74YoTmcWmaWTALnoM7dczyrBCqbqJo4RLk",
  "key32": "3ARGgyc77EHry1rTbR4AC9LSR9XkVx6V3EGtcCnoPBpYWVkT92XqdWQNcgfqs1Zib6AMQQGmYhaecgrkM6E3bMYM",
  "key33": "2s88kbChtsHUpvVHRPvK1tvgB5Nt2BUTYsjLHrYjFRwjfFRdVdBMNvbSf2jq121qMjVKKoT9uvxKRBvVKj93h2Ke",
  "key34": "2z1gSns4tHynEU23MsesdicHbCsT4cjQBDsjo7HZJ9W9cgFkSeixfagkyYaW8gB9k7EzCnjDwwshB4sbgd4DhpPZ",
  "key35": "d3p2TcjRFT9UMDQEyrDCExgeLTkjd9HYCumqqLixQ8wKh78kkSAsahB93AfCzNiDr1JQfSexDgQ9APBrsSRESKr",
  "key36": "2XQggjYu5QA5yTosLu12VQdne4NgygDrgT6wjiUtNuzwmHP5J9zjU5nBziCGHUCkHhmtv4e54peLo6CLgKmK4TdZ",
  "key37": "3cj3V9RrCXeDoGRgY36EJHsAfqzDxspCoh5eb9wybS4NZGNox65r1Bt5XQvDcQxLUTnvhorxZyV6dB3uK8kkvKdF",
  "key38": "2CpqmQeXrVEcNxk13yaNhHjaiYd9QTiL21denoZozVgmKBXrFeefpccCaokqRsfwKFfP2KRQePfF8DBu9Nif98oM",
  "key39": "28GhT2h2TPMhkYrHDbNas5wU5G86bNpKEY7hE3crkKq1Fr3E3hw1CFtpRH5qRAqxB8bcYJ4Ab6EK9XbecLATTqCW",
  "key40": "2wMfNf2TGBv3645xCcyLkfcnZHikwj1xTJtvpwvAGGrAv1u4SZymg5jafSWfuJxX9XhmkucG8zPka77nbJCwUvAj",
  "key41": "42RugEqZRET2esrbXtxZAbmbhQCnVRzVLK7LvKn6yT3Q9LddF1mPmDmkFmv9qbVDtAHRjLF2Tp71Ai8QtUo7u1HF",
  "key42": "312u56JyT11qtPKhuqQFJVCvqyv6KPtxaqAHshDhoA8rR86Enw8rTmVPdLzEPBXGwRoUjcgiTwCNyeCs3XQnvhnP",
  "key43": "4HHo8a1KMwRv5eBtemRu1aNkssYQzRmLjGtz4Da1FGZ3MZZMWTo1WVzKXLw3UD2H3mS3vZVcqqKyDZrimnxMCSQH",
  "key44": "63f9iFau7h8pHRFHMZYfj7qzNqwNtH3CJQBktis8r3VPxk7A9DSNoqiiYfegRWvDdvSRANkur5RZR5A2bqpYWi1h",
  "key45": "42ypyTT2WVBuTsx2uAipsuzoYkzYPAupTNLsPDnfdEjqqjysqMLs435JG6AnqmDsWC9TQBUs3rbWPgU6BUWS1KeM",
  "key46": "51NS212XZzYDgukXixKfQREgYLS3rqSDEB6nMszdkN3CpMoBrjKiXCpeN49GNyZoTYF1eCKBEuyTJRGS61nhTAAy",
  "key47": "26bPyXTd1ydRo8GkfF1XXr5m4kJmg1JHQFCE96JnuBwNXPqJED5K6DRukphzEQDT5YG6RZ8WMNmt75WH9PjQ2zyV",
  "key48": "nC3KS5emLPzi1sgYD8e7nWmhToFhp5fU9i3X56WNxW7WXuSoBmpaE4iaaCZQDobURVSSKVjwhWwmZrRcXgjBrdP"
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
