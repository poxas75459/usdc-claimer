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
    "3fdu62JhmW8yZXLCojh2fWdEXVZUyhe739sYKHmKTQZuPQYmZLU933YFeyrVS5YneV5D91go8VPUTX3RUUhUJeqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zUup4xqNGdBkgcu2ZzpsWAwFT2UKUp3tYs5SDABsnhCGZhbhyPvEdMUnxuzUaFykncdB35Bqmkk7z8aL2VaoeGd",
  "key1": "5fFve4EYHwShRHMMDEB6V9NKhYp9cHoNRptFDLuaRJRvQkQa3WwAksSoneV5aNSxtZ7RxX6RESUxQ9PuHuASfKYf",
  "key2": "agQd2DHacxZg4Pr8MgCtthu4gXpbTByFYm2GrC1WX2VcZmQP5ABpE6NUmnEv5G9LKCAWkFFgc4WEMkcNdkdQuLq",
  "key3": "2H7LUd3UT3jxBCenqxBWc6y4iXwhvFGSRbxqYHXXWhyE9X4xyB7P7YBNNZ4VqJQ2mxGYwU1DyXHKLj5afoihHEJw",
  "key4": "3LRYduwMWzPzBZzK7X34tnhp5CmCtrDt5hAEB9i4acU9BsBaEbon9tYKfVbbzsXFApDYhpz7fZe9XGZJm18gAEhA",
  "key5": "4EW6aY6hNTtv4R9gtdAH7w1Cd2UeVqmNmiPCGzYFcsiFseiz5Lv4LjWkv5jKGNrsezaeWy1mM5byqHX7KCRpj6J3",
  "key6": "5KmwWh91qQobRxYSU4Yti9J8Xq3Aru5dfUt9onh9QYkLooL9SVaLMoPB7tXui1m8wCciyb4uqHqooAoLkkq1MBsG",
  "key7": "28963EAGMDiDBEVAK84G4dVq8zArEZmCqbAAnnQp2YXWehvFbq5DhP9PpRYEcZBeAA8jBzYBh4b3XjVF4GR3gAUh",
  "key8": "3UoLHThmadEvQngrRvfXXLKJ5JpBXkVUxPJZM6YXcrFxa41Bm3ih5JNpZPBRaMRf6aAVhFwgf5C8c1A6DkGfDBWs",
  "key9": "VvNdBcmRLSJowqcz1qjKs53TnRQ2ZS7QcC8pX68LizxPiSRgSQQv2XPDuRrUts9UdEyHecTnrpFfNSPsq16RM7F",
  "key10": "2WWNw6SeXcYMHaoAk1T2FeL6GEcza7q2pcKvAnknT3Db9QMPB6UL66YoGnd3M3p3nMat3grgxLwKfdayi7uHVeN",
  "key11": "3apEUg2TcZUMNU1hTSQW94QA3fofrwi3U33CuU9VHYrQsPWF7iec3LouQkDszqs9EW5HgxcFH3DQToxdwL2RNgQ7",
  "key12": "3Xxm1EdbCk2qaJ9BfQbyqinN9LsAVGoxHVWnsbyv1B5Zgt91YugGJyzVTWHLV5wa84gozFf4VWzzrVV7SQdua9gb",
  "key13": "5kLaabFQpvyhsJ8VEzE3eT5najP5wP4pLQSLsjksYFXebgo5BjzCbSTAtDY4TSypiRdvg4qpjUr1jwK4McnzSCfW",
  "key14": "2U3K7NMHeKkMdCB8Z47Hg4Q9U2QiitT3YhjHK9qrVAhiECwUmCNgVoycHtxSUooi687yD8SB23FYpugcGHPncrNG",
  "key15": "2i8w6AVd8hgQPgu1SCcKkdWKxwipGmXw1YWhBcsK1w1dCvvyULa2NXek4cyA3gbAaChfxYS9B2AZofgX6ZfF65Fj",
  "key16": "QGMsC9TGmgRcwXyohscSjdX9sCPigRZaiRC928mSUEXL3or56Xc8iD4XcUS8zBVsaebou7SVvXynTrDpyuquNht",
  "key17": "38u1dypmUzoCgx5wpvPAUvKiypJE48vJMUAkyCx6KW4XXAE4L6k2rhamzDCyGqbNTqkQ9xyQQZF18c5iFEXwvY2A",
  "key18": "3G28p4ZL9aUxXFSDFgd1R9apQ3eNBTLwZHiytJMAWhjMw5nEMMw5NKDrSnDV7Z5mYU2pTyJFoBXsT3aeiVpPv7An",
  "key19": "4cV44kvi1svFqEv3Gi846JnpGujxxaPCEwtsHWqC4x3yodpdazJLJCaq6tcxF515cNT73AdipXFe6cvwQpSirBo7",
  "key20": "4VCL9cJvgVpfDYQJcjtSY9EHK6fUtJkRKK6dmcbeeSBHoZWY3DX29Rm3M46hifbzLCbNJWSvXYRezNbrCc377rc3",
  "key21": "3tkNPRCBuM2qyQZ8Rw1z51GReqdcA5euEVS4CUBBj4Z2TTW8KLPe2bbF9JDUE6JFrYtuoaZ8s5awVjjfKgNzMG4u",
  "key22": "2D8GeG8oU2PwLhzTbN2yC8Y6TVNgwB7B7zxvmUuxjhMWP2M3fhZMUgmaKZqy2Ly5Zsq5gJ2ev9da4M7fns1E4pyj",
  "key23": "5WJL73MZ2CyXP2o954CcxzfKeA4TKuqGR4BHDsHNo1qqaYmf2W1RvRtXbQEGEESrmpofezCPEXx8cMqRrEMdUX8F",
  "key24": "4H2nhzrqnHcYiLedaQLdadGY9Xt7qJsUTmb8oStSXAw77ZgPZmaSdGSreQGoPBkxXgqVezr2oJkPq1CQTX6NRkFm",
  "key25": "4EycJtsEfF87CGRo8QSzJHZTNNJ5FMqEYaNpcj3zGebbarEkjXaqufgtELL8aDfAcK6oymVwUbfEiERWc9VNqich",
  "key26": "4zGjvwiugCnfkqLWgXvGKWET8ahosXdTs2KGBnxvjQfXrYMJrRgaLmWJJ8SK3ggq1L3iTzZvz6BHUH6fWq9DnBfc",
  "key27": "49hbHhFVqv27Q46C5Ggq991kQyTcS3NgBGrcQ9sXZzUkR5yYwkjoWdTWPh9gbAvbgyFKNDXbMzHiH5xrdAHGSVFL",
  "key28": "5A9ybYteKUcWqbQKTUisPFBx6tVqrADqHQxmsDxPZuqb8xL7eQ67peZof941XtCQGoEr47bRgngwE1Me8ZhdWFZ6",
  "key29": "2wdDNB5AySseEP8MTVDGaqYigTgnfhL3ffkAwFHPsytPuSRcLswcYadZbm198gzi3fssXGD554aK9zTeeFNRLwRy",
  "key30": "oThHFCmbvdwq1FnHQR3ddzMWvrYPDuf4zDUvksp3JjZzvU9iywfRkFYrUnAByj2UtVS6x7KBQkTE9QyzLLYq1c1",
  "key31": "57Keao7acGqewLVMJDaevzZNckwi3UdAVQhZL8GysdVeL4RDAsBjk81pg6w6fDXRkExrJqGq43yWZDsYWTWw9Jvg",
  "key32": "fxjN2VKyHea71MnQVeL9C5WJuCnL2banARpYHLRYzMuJX4omaYjN7ggQSprG3AukeTJWGEG2uTJ6PrdXCArnCcz",
  "key33": "hgGobhP9Y1ucq5v4NHHT7aXRTYyXq9Hb56W7W973HVpgGPQrEui5huavubQHTAXmEj5tj28jKdQJTLttEoummPZ",
  "key34": "35Zt2N9z9vv3vPtdxL9mQ1HgaYgfjjfABvG2Gv2L9Ksk6iUQB36CL29tFthPgFYdrpVSjLdeGT8hyr32MHF1utaj",
  "key35": "2JH8ZGcmGiBFVCc5hT8oK7M79C91ndp6nkZ4iSC4u5YHA1EV7N77Sk9QxKzDFHc5YpbY7Jw592MhTx2CCcpr4YB1",
  "key36": "2UTw6T6eBxeVgiyxNfYLCq2vCFb66kuucNq6s1Uf4zBAH3bZqqdpx9aFPRMiZuLNuBVbMFEXDoci8mRabca4WPrY",
  "key37": "22HhePs47Yqyg7a2P4DGq59Mk9jRV6wRVbbDyVyQXhgzKqEwrV3h4tpaV1MRgeou1dzxauPginmFxn3mZaKn1hzS",
  "key38": "41n6BnxrqoQ9H14jXfmawA9hHbvaH1FJtKrpoyJaJPY89ugxgVamB1nLn8y1Y3VobvGM9H1UeFkWMm4SGvsHzC7z",
  "key39": "3KRkbMmYpVA3Pjy4rbiEf98111wusqgdjvMJ8Rz5NH7PGW2FmG45nVXk1ueVP8mHbDsF5y9DpfJXH2yP7Uacu71y",
  "key40": "4DHKDsyr3T5pjo9hhvxXvP6fHaLA25Nvqz3aM6i1wBZ1TYzt7znNqce4jv2TQq4yvcFCKxmtYDK7e1MvkTghEQnX",
  "key41": "2ZF4YfsjQjKS7Z6jBYoNWzrX98Z2qGAcVUzK1bHMsiZRmNFiZ7e6HfwtQicYyPVTnLZ1w5LRUNDQSwysQ1oGthCp",
  "key42": "24MDU7NcaRzZPqR5zW2qhKQsX2sjyP9aRCzCuxZnsmUaZCz3fC6WKf15L4QDtbHW19nWQ4mzALjpAEKxq7qG87NZ",
  "key43": "RCAoMvELpWCPiXwVCrhjHKZ8DXVSCVaLgZz1aRMeJAgFhD9qw5qiSSufyAYrJeMukNu5yLhLZAsT5YSE7if7aHZ",
  "key44": "61Wr1LZAkhS5K3Uz2vqSRB4tRXaQx8XV7AN3VjKK1Un6reJEZTc1Cj9F5z7AcPeRPvmabJLrEdLg8e2z6KHAyJDH",
  "key45": "5sMW2Lz9CsSRFo6SkNgkzJCrpC1HoD14FJmsgfrgN2Q5miEL74FkPsxUEUCS4Yb9QQdM2bdrcnNbMP2XFeEfbAUA",
  "key46": "2nq54xpUDQWdaSPaLtEJJYMazpP1ePKgXmZ9JBGMt2B55N9YATZD82TBhebFgQ38z7d4xW6dQHzcwHSpmcG5J3Kn"
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
