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
    "5ybuiqUfZdJtqSjAGURS5KUgjJw7qfQ7JV3tgXGheCCFBV7E6Zbfg1uZAphkZ5koNVSb92ZRHgjjGRDnWDtKPhPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U5vQFowdynraHnquioPabi7vZ1pzwofiuxCentMQFBbnuw9n5s6EwV3Qx7h34G4mFB867ybGtDhjM8DZZVDJQUF",
  "key1": "4bLpCVzdcyc4dfx41bWfko4QBJ6q29x8X9LsMQ4seqfFPr27EV27PMRmogsnq2Qc7Y4sPYFBe22gnhVSaVHWTToM",
  "key2": "293RQ7DZhnfEoVMr6BWehY9j86tRDZS7ubJVA9snNrGoSLk7ukcrquAZahvyFrQ5Zxd1KevSJswVchhtzQVSjT3D",
  "key3": "3QyawhXWaTeaqpm1mzUMZX3Hmqy3ctVvX3aU9UpBttDC1b5fds1VD7t698CYHkptXjywacDAtc8aduBRagZt2C6K",
  "key4": "ediHkWBVxnedZPR74evyd3Ayzb1oyjNbkggV1Wyc7catsYFzomVi83CUkNio5xm9q6ErMwAvb4bnihVz9ya5DU5",
  "key5": "DKH54GNL1A3DFZir81TUjVd3hWReWFyCFw6iSE4x8CLbGkdJWJnQVWHRXWWqcv1WXLvAWmQL3bSTRKmQqXHPUos",
  "key6": "5iSTSMxxQUmSh6mQCRvUrL7pSjHAGjVbxmdoMAAhKn5GouuhghTR5cstXFko4WovwJhCCsq2AXgzVisYg2VHwSPA",
  "key7": "48HEruAyAEPBD2ZWErUwXkPtcQSULdEZZ5qhUfsDr2T9FKCRYWCa7yPFxS4EXup7riyZGXvUnupxN2vE65ebQ3cc",
  "key8": "HsRN88u7AWsmrfd8tRpEkmY4VVoiypqn3vGgdH16MWTvkijUcJtAzUxgyCvfFxmVJF7C913mJH75y45RyoUV2Q4",
  "key9": "2TXZeJxF5Rdqf52L6E4VVTUGRnptyPPSK9vUfUr9RgFyf7egyyDmGeAeGEJhhg1y4boDrWJTR78XeeBgcGd6QdC7",
  "key10": "oXLW7sGyBXgE56SQQQtteiU6mxbKKnRMLZntHQztzsF9uXNyKXdYGDPB5XSD6Ly8bJizNF6GPMifBPbdRQTvbvk",
  "key11": "NimDzQt7ZuiZ4raudmzhJxUzZDvoANo5sVta9SexXwBxv53Cp4rBMUA1gBRrpVoBDKNVXumXvkUxcEW9xt7SpUd",
  "key12": "5WpP7i4BEb329ARHu7c6SbXy6L8MrviKryNXTyKWViHvbdSskJk9FAvkk317SjaGCH4cmxRp7LWZFsr5L8Sh7Wxi",
  "key13": "36k3ZRaMGbKGGySNZSDub7usnv2oeW2zDW8BBPF13FKtq43Bdm1tVVHUWPBT4FLrirbp2794MhoxVp29cmihbJ57",
  "key14": "5xfDfnf73d3jrKfRxqYVDtuJVV16L3ogg8wtZccbqae8dpuGCisuGZUE2dqxXEbaNmjrtbNGTBNu8w2F37PCHWSo",
  "key15": "Z5AMEkBPB2o2whazRsjRbYDGayGmB2DG8VejEzqE31Rmdr2dtCA7KCHuMUXRwG8rMZh1ZqZEexWkj9ZLBoTDXCS",
  "key16": "2trp7BMa9gEWnkhFoyfc9VGvWPyeaJmXAVii1h2H1tNSEdiWj2wnQHysVpVaJbuURXdTfRbuByWbSnFb2N2oBkcg",
  "key17": "47XYiTnSEExLuyBcqZ35hgEu1ySbzFGBfgS62gr9oonkApT4XR1WfGsQ7cPiLPVhGBRRgaTZHopQwT7poUhGWrmk",
  "key18": "2zQwPFxT8pAr9zyXkZ5tNknUXQ4UbzoxxaYSpg3Ke8tsi6tYJYzmZ9FJ9kYKbZHmM59YQtTbbSLRWthgN9NRWGP",
  "key19": "3afdJS8uJ9sWtA1d92WrXFEQV6hcbZPFVnbVnAZTUidfyHKZZPmZN3E29mEKo3MmLzUzTb9tVmwWmyCwKZfGPpj4",
  "key20": "4Luo7GPXgPsPBSMpytyFVRhcJnrTL3z9W2vk3zTd4bZwxbW3zrGWzXZwTr5ZS5JWtKgvcVSdXdtRJTjyaDgMkeoN",
  "key21": "4QR3VkwP8zb1JPgV6PkbyeUoWiDy8LyFU6r5ahfvWbfbGAWMZMf2UgQiJPL7QY6z5GwW4NmRF22DPKodJhcmPzcV",
  "key22": "4DysqpWAvmW6yFDtqP4qhiZwfTWTwmVUFaZpEiJcvfk3V6BFuyyrARBpU1BXgMxoqoNxER3iWY2eS2EFpSg3sh9g",
  "key23": "4fYVSDfKM1CmaAa3FnXrWDjagUPinLMbYXB4bN9AYP2eUPree3DMqZ7Moxuukw3wevLUX1su45XoBGd788F1bCSF",
  "key24": "5kpE6bgHHtfCEJoRUxzHiCG3iKswTHdawdkKsmbaQvodPdJeWSowef6afko5b5t5CoZZZFGcMVfxPPDbHov7atuA",
  "key25": "2m4v7dBpHe9VugnJU4y6jJ8Gehn5JuVdocSCoikM4NsgEVMduFob67MRK7DBq5cpXuY8vZnScazuexVtAaPJFCfu",
  "key26": "2XUCq8gByhb3xGdmoSVGf2bZ25dnBAtFPkxBKe8AzTq9HRLUo3HDGtXc2y6iMg5CSFU29XAPoJHE53cKYhceqYBo",
  "key27": "CvBq1urCCgiwz5vuM3d9rDQFuzDe9nFxLfc4V6TPgHpyrN7Vr2Zte5cq3111Vnq6crvhWKbwVodstTTyiURmer6",
  "key28": "3LKbrtz5KAr3HE4Sh2u3Jgvo6vUFNfjB8o4Twp3yc9cZSKe1nxpdnJ3qukt2XKz6F5H3K6tg4cbbT7ZDqKg5CHZT",
  "key29": "jqVP8BXuH52nCPZc6dCLDDsdn3AU5NYkQjvftojkZRZYxBxMmRXK9nLd3aZFyt2N5tipbLaz411cuNYGwvrR2Jw",
  "key30": "37Dpb8SuXPDM4viPSYGEHvNhd65WLdPiC4E9cuVeQpNNzbyN1FYgVtAdwr9vHC6fNUZ1DVXrvCLMfKg4qVVby4PJ",
  "key31": "2FpdG7ng3XvszoJwHpXxVATWnguoYJ4WEFdoEJ9hBGT3jpxRhUfjuD19W963e6Y3yQzJZaXPjFtQzFhgQ4Jcg8FY",
  "key32": "XcvbeXxmX3NtmoYUukoLocizK6fhq96PZc4ARQ29656tusJFEDas4vgyowFQ9dn4bpmJzEdqkggJZT3bejiGcZY",
  "key33": "55tM4CCu3eg8RYkZxCUtZECV265J3tW1a89wkPgjMs8axKfc4qVcqgdLWk7qk3XwvpiRDk5Y5ZDn4dJQati2JiVJ",
  "key34": "56EDFnvekMZ1z4gBf2WJEQT18fcGLecMHQcTzmYPehJfx9AVRxMSnRqPSdhcytwto8m2gjFC6C9gBdstVBoApsg9",
  "key35": "Dav1Xg2LgjK3hc3Tb7jT6ntjD8CddLFDxMqFYx8FS9HDwDnqh7JxQhBYZEmgQsnMzDRf573Jxr7BhWYegwMy64J",
  "key36": "2qXbop9FSFpffxYZUrvWdz7pa5LS7xmNv5CUhxXkhyngnS6VkkRUsn7WGvkYSL4bxa7nF8hikNEM5jcoAkP7bzb9",
  "key37": "3Sd3pTha9dbAbnMtk217ZtFYdbhxYCBbFfX9A2tTWxqJhoWrqXymWMCRaB2nEi7TSqiw9ezxhJS817z7N7XvuUn3"
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
