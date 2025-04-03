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
    "5m2w2LCs21fRmCT7nBMfRyrqky1cmg8Jo8WPs7CJyTt7tMfQN6aQ25L9Pyo35VVUEaV513FQbUD2m1dtXTErX9Kr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4afzUD5ETXz3HYctxW6xk8XMTqk2Tg1iyiRWN8jyXgLaRmr9KaVordRHK5QXQb8NR9568a1H7xMqew8Sn6qRKM6j",
  "key1": "5jo56wcN7NfMZnUHDBcSXNzp1g4rZVKJUdY4ByHJ7XfmB1hHmjvZFGmqxL9TE3r9wwyaZCvucrrpAcPLSZ6t6rTz",
  "key2": "62TGMJwMuP2XPpHBW26uo5SkgkaPShvU1UShvC9QZNfXbXsiaZ1LJoLSVJWH9ZdtJyPGjaimuTzSVmCMP4ytvtSa",
  "key3": "5SQ4nPHprsC9489m13jyGYqbXtPZF85KbrawBTnSr9y28aXWxfijc1wkFkUjhnecPoNMExPYGtyZouzdHEcdeHcS",
  "key4": "4X3ywh42FPv9xpg38ooKMeEqyJgQcdGySY6Yw34L9zJD68c5AYB62ry7r4JBeMJVTLa2C27Jw3r69tyQDLN6yRYz",
  "key5": "48qfkfT9oHXB39uzF4CWsxfVBaaZgCNQZX4LrhwVh3kJfjMet8HTseUxYgCBrjH8ypwryM6HRhyJvjm9S7TapfVv",
  "key6": "1U1yW9eXg95oyZJwu9ZJqYibheKxqVsfMSSdYKJqYiUazivFpweLas811TFJAszaLww4yWy556SKyv7Y6fVurJE",
  "key7": "3j7MdiHjyESFzg7sfPhLX57Wi7d88RiTCCCc2VeaPqBPHNRGU5gbQB4xCLcgvFECyHRAwVHfyHnUkpJDSAk33hMs",
  "key8": "22AA7PTyMJsRjYKMBNV2WmwgYJoETCCeWuAcxcRtf5tfqPRsJy5b5Q9HBM68TdvKGpPEesLV6WRbRMo8JtTgV7DW",
  "key9": "7DLMwx2cLeFDqEtiD1oRZAoJDhtiJtg6ikU67oR3skp2e7kidSEmsySaUZQf1YzBUBjZsDkgZ7XakTz34G4wMT3",
  "key10": "3XqQPA5MVZobDgNx4eupEpGaLaiX713fknesazG6mRgumM8gkQLH1QCLHbc1AazaYm4zzPzXZXa5vke4qzyUQMZT",
  "key11": "51CVuM4GNjLnuwYckWR1USrTCWXGxpxmprYTgyGroFEZmSh9pdiZimNBx5pJiU7Pq3fgLqvvagJqrhumfrdDLpce",
  "key12": "mThcwuofpKfhiBqJbQ9125NUm9oK6SsA8vHnw7t9gACFDpt2Y1e4ohugptTN5whf373N7okDQkDJt9hniC4odtB",
  "key13": "4rc2mZ5mqFkeaipDDnH3hZaC5euD3Y4ENVHVCqLRRVjdf8NNNLfGnxB1zLjf1WmqBuzQvW6tjXzhxFEa7imi5Za5",
  "key14": "539hySPhvTrTzkCMF3eftkzGSjH8k1jLfNkVqDQt6D4QT91JsDbnhnfGj9HhLnC67sKWoPXLNYT8vR2o1xbJCnDU",
  "key15": "3sohNpXLwrJhTWYX6EhXH9RRc4a1iZEQsSexFgyw3ub99DFSPcYhbWPdsgcVK1tr5S4mZgvBJ6TBE1naSjXRa1FT",
  "key16": "33XMKuJtQg4CvMEkaE7UPaRufXVuQtVkTv52mVXgcewtzXjrfBXbTTMJzi7FamKRZDPuo1ejwBFuZt2STvS5JSj6",
  "key17": "4ZoTcp9s7QgVsXy43rfafkrK3YF5bPqxG7PcXDw4hpx6SJYP3Z2n8wzoRhfd4xoBdgCyfWWCJ9FEDytBtLRBwTin",
  "key18": "3gUxit4t6ErzhQDgzu3obchteaU9HHXudFn1UrU29G7UHXj3E2GJe7pRdRX8NWtwyoXBea2NpW9eyLa4MgBr42KW",
  "key19": "5usY8sCQTVPg5UeaonW2LShJfXmDfkGqRK6TdyrXy3VmucwAyZCBbJ8Ub1hrcM98BFrks2HK3c43EWM7jDSRUgfL",
  "key20": "W5HzSVvvPPaxDy3M4asgbvKfax9BeURVd86QGAseu7z1yxxLLPjY8hXwAdpNKrdBz8jbQ4RmhQcqxNBnEKRL9Nf",
  "key21": "VxGSPbQHuW9DtzAjTCdDKwBoQvdcXWX1vbrVtg3XDMRBME7froMHMJhkKMxbHbPThAna1vZH4mY82fPLXDQThqk",
  "key22": "3BFbvjpWFovKYKo7zHMqgYx8bnkDdhtT2U59jJWc5r1L3omC2of4gsVbVhYUxVraCE5rM11UnrKska1Z6ZqY91rB",
  "key23": "4D5twLwiJtzD18tb4tLP6YpfzDFWL9M74Gt6n5McAVrgFCTnmQP8zKDNTPeggPipurcENcebUsgLSV22aDfhKbfY",
  "key24": "5MvSwMmYX3j7kcRXkSB4osX2TMGSV2jvEcEk5MfYyTaau4vSj9d3GTPnzo2x9UroTQPXAFNAS3N6w1WB3zf5ntgW",
  "key25": "3DESupwxNBT1MaufajDtzWmhkZq3wD8BuVWCcChJVoPgGhRpqXKQQn964SRJu5WMJgqoUKU7WgYr4PQVF78GN3Cx",
  "key26": "4JhvRkfbtQhwNJhy1ihPHs5sLUtifaDoXXFZ8nBg7ua4SCoX3XeWChG3gqiawsoPeraWCYqxr3bJXzzPjrDe3Mbi",
  "key27": "3aXHgTYr6s8TD8T9ToRXS4PEu6ksWZp797x4kJjHPfFExMhWwcaNvSg9DjXL1WktzJBiLC3KYqakwkN6X2Ah2FYz",
  "key28": "4NA5YkDnSx7Bm1m8Bv5rwdanRM3ZZhTDuu4eYvEWx13GbHTZXZ7ZniXyZKLSstCk1HHuoCP1wsM9o5YEY1sGH23R",
  "key29": "5vRFunFQGjRxW5BURWzRTzowYyCZotttrXXAzAvDEz2NSWoL5jEUtuUU6gWqEL6LhEUBXGNnQ5U7LAhsebcWszQB",
  "key30": "1gHDLVDGsYVxaZejukw2b4DKqbMBGcWHg6B3kUw3QTtrhTC4BE891FhN2MqA8c2QNYx4cGTd1sfYf5WrSwv4N5W",
  "key31": "5QZd8ynMYCq1NsSEvzmrdNYbz5tKPDHXQBHRauVNbWFYouvcki1u6y6bV2wLhc3kBQ4qTwiXkaEwfm62emaBWvSw",
  "key32": "3bgcqFVVxvD4bVVQvdwponcPLojN1nZZp9Kh2HF4zfEbGMj4176Z6XaDNPEbu2YjFUYFX1NZvG82H3vDtUbXJVQN",
  "key33": "yYZREhBia63j4Ee1Z2jFX1pgg2sUeehyZWyugQ7CWsPfe3QLUCTsVwxYErJS2ojGjyYncQQc381AZYKf6zPAWPR",
  "key34": "4LZ3Enknd9zUc3sPUuxEanSFUAGE5YYX748ZipQVBHPxrgZToymi7hZWMfDLebhHKNvLmRELX3nxwoocD4xWKBEW",
  "key35": "5eJkBTfk38HWQxy9uoUxwdZyUf5UFm8X6Gpg9f58vzqYEJmF9wWBAY6gHzXG3FDLj16uBHeBaw9rBixGaFLZ3zMs",
  "key36": "cY9tmsZ4adNBauDpqAm3uJkVyqCoHzDEXcyRzN8KZjJAoY3xFiukDWqNJHHU4gE2BqV94JM6mbhR6aH1eSu82oW",
  "key37": "3yDJszimMD366oMZYe9BS3i5pevpc7d8YDYs2kkAKdZGGLuEcQ6tckj7hSz2KKkoGgs2BrztNVnNhqz9y5mMGUCU",
  "key38": "5GPn5tVj5WT6CoQCjfciywq4PPHYNBTE15kPoWjcDfaFoQwPZ9dZ6tt8TCxDMabHMZvj6zj3mFBFC6bHDfTPkD31",
  "key39": "2Pjfp5MTw8ppmyu5f8Qp5gAvTpcCaybBtRD8yqN48SUxQ6W93gMY2dN4nXrmaRX2JraiiwNywaJ2pqJRPunfSRMM",
  "key40": "3pfJQ2EsKFaHijBXnhS1PhTQAGujRDmWQd2JB7qJdTiPUP5qzkPDvhVxBMW1DxwuGqKqeVko2b1QUC1jAoXoRk6T",
  "key41": "Rp986GputcyRxpB6fWhMEZCN2JiETUj8LfDDm4ovsLiCQoH56MBaCeHjAwuexpR5xzdwyZgtyKoAvnxTUvq4C3h",
  "key42": "2PAPKV1WXx4swG53a99vVdgpn6fBHNxa9fjFPRbNGiCWvPKvuMgd3aUL5zgQMdycxVQchPcDJHfHkhuy5fVhCiAP",
  "key43": "4Ks7Rx3RnfptjsFRdv55B9MVEDFjJuZBFeZPSADXAXNA5sJxuS75k8CAaTE9tcrbHkJYCAApK2xWYSHU2oThT7Tc",
  "key44": "2FDMZpz94hsBnim56hb4i6KNkVxGDMGngyyjw1MJJRWgSZTCU4mvbigNCY6S3YE81mRd9igcTsdkcBBugR7XpMpP",
  "key45": "3TAgyGwYMWPYTkZKs45SrwP3rXStq8FjZukGLNYNVnnUpr4rmep1M5Vhhcd62dSZ4iwjwvsr9kcgCbvdYihuUD2r"
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
