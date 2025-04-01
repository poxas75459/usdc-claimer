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
    "2EQF9fs8Dz2tLwqHJY555mGBHJWjon48a7tg9sfwV85T6UsgERmshxbgCzWygL2Vfo84t9BK5c46w4fscPsAdCvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2duL3STH5inGZQmDgBGqGuQBeh4eVTh79WL7YbKSjiKPo33wTrRjvRmgvu9EnKA2TvzU2Vcp2Whz7e6JZ6ykshCG",
  "key1": "4xQz7Ex1MLFPfGXqJmhormyTySVbdBcMCEykKR9mNG5hk6FnGCELbgxXrfUaMbACmtmexYFdSMmutTK9NRLJQ6ym",
  "key2": "5ciJcXCfQrtHwuXbPhFPhC7PAbN7cVXNsSdyeXLGXJKCC8HWKKPuGysJBJrQr5avn5niR2GCpLBZ23bgn5qXfK86",
  "key3": "5oxSDkA89GhWZop7uRrWVvfpdGShqhzwKqMfWwXD6pkUQBECsBJe7KY18jt4oT8wBxLAWHfYaAnPoj1bNiMPKkRa",
  "key4": "4kas1jKnmMkmxNW9mHS9ofuEdzqn5TwGrsHBsS4ZeWTimCUHpyacNtduDgSFehQgVUZZT66JbxcSbqVrLA6R8p7t",
  "key5": "5Ruhk8WLz6jcq6rF5nFZcyvU4oCbbBz3UztnsubsgbH8gJjWGm1sNwnRC9U6bpBWRyQBYD56KvKGwLUXh9vMz7my",
  "key6": "4q6cQuYGgiHJ6XsCtVCPTs8i4ViA7Pf8ug2X1DXa7tejjTGm3fx5DQqaTuGhkc4akXA95Y5WHyZAR6EAqbM7shyR",
  "key7": "556CsmzdX48SGSZuwKEFsyb2EVbii1R6uW812phrbbzsWVrvfm7v13prEGyhSPM6gTDyPAeWf6V6iGH51qqkvHox",
  "key8": "3fD1R8ZKwVL1NzZBBWnt8o9yRhgfmsQ9nKyLMniXE1hx9Uou6H54S2pwm8sg8dATjLu48wEfoD8fNxzNpD1Dvn3Y",
  "key9": "3Pp85ZSRW3fGy4pE7ouuZGNZzFAezLrPJDC6sUuk3zS1z7Qttq2vCS5NXkTsNrA1rWZe8aLYKxiC9WvH3xac56i5",
  "key10": "4q5CZs1CkzdJguJuS7BZngrDeM9zFibVzyEsM8PoWxG89fvA1UydCcHdCLBHwEz71U9c4hmbqZNCGUt4V9uQYdQN",
  "key11": "5fawzgorVyTWpjLRqR6G3pjFkchPud7crpibJv8mAMYzhEUEbJZQ6TCkn3yyQeY53xhXzrDXvzx5aEv7AAzurwo7",
  "key12": "5Up5HCRb958ytbnkhjykex1bEKehhjjUisFQWYp3UmLbVYaeXs5CRY3KxpFwWmNVGsrzEn24LC12fDuf7oKnCuNC",
  "key13": "34DMKhiiBMn3Pv2jRsNSaQuNEZp9y4aCh58NGxp6GEwE8AMHR3FdxiqTcJ6FeGkN9KyPscKrKB7ZXJALiJx6prrB",
  "key14": "42mSZNujGACDRouZox5vMYXD32XhCULkNb9hn9XZUBzqcv2cnpw4Z8WWWDHgy2fwQFJ9Vo8x2hb4P5M6KEo4oM8A",
  "key15": "4T1HgKv28exXPLwE3khFuj128C6ZiXWDkgmU3U8gvfJFzRK59vHkr7Kug6uPLd51pfu4q1c7UQPmJoJuqrn1vsD6",
  "key16": "1e7SJKYMN3nM7wfykBMPrRieBqhiNXM28aEokfH8rYvssJktn9mmL4TVhmNqmoQuRKw2iJQKhs4zJg3CGUP22DC",
  "key17": "4djiX8CPmKDfyp98oA5W1FcxN2cu1eCiBwacEDik8zQixPSeXvMgCK2JA1dBEQBXGRww2szJm8CQKtYAFaZfKyEr",
  "key18": "4EaMxqLki26Aoy6eapQ4xnwn4WxD2wgp7h2Vr9Z6enHuGpBuWS2hDSh3ps3irwdA9WXmNW3LP2JEEFKXh8eSEbSY",
  "key19": "5xoRcSumPhLzDxQc2PTNC48F54S9Ji8wNZeMqQK2uSqgFkvfyz1hQ9KmtjWwLuEEXpoVEjEXwZfEdRQwLowd4TZd",
  "key20": "42VbKfsdwy9rKqVhKLE9u71M2cJweRA2khQNNb8QahJ6jnMi218efoBD6fhvBhR7aiG5TPKxbG1ow4dezZbnBspW",
  "key21": "Anfx8HJCfGoERfehQagXda5rGmpRCFMnLLGYEbvEd75iACnQghZWssZRws8dnufFGuAgTZmwcZtXuyBcGSbNAZH",
  "key22": "4esyRWiFaamMMCvEssj4M9cujW89AGrwXcw7RcniiyxUyjR9Q1CQkXscfGKEazHwHhwoHMJ6Ewxq32CFxGanejBx",
  "key23": "9fpbhsbgVR7wrvqKmc97Ezzwjv46beispduMnNTTCa4eYnDBHzVLnQJmzYw3yAkoufCtranvsHnL4czfx7bZW5y",
  "key24": "2kyMmuAdwcS7hPFWGUFa7RYTPXvH4ZH3FpyPEvvJpN6pcEG1R59GFx7XZ9dJd2qH7jaR4QotFfW8PD8A1sEcPcBx",
  "key25": "5yidZ8Gj8wUviSb3rJ95aN9a4fSFbzfqMjkFLA2hy8RnYVX7kSFYgMSKiLHWcQXFVHWJKuRDVeEF2pXN4g1Eum9s",
  "key26": "3oiMGdiBr3diWwD1p5VwNPN9iBSTYVsZxsVLtEbRA5AFWnBKBMiPEwz9VGXCmx7DsVkBoA7snXVKWZLCVgXhdSkh",
  "key27": "3VfCHG4ZZNZdpMeLtYpuFe51PckAG3T1counYdwprKqxyCjSCYG2zCkXr4uaCShzEhW6AqEZ4tFGPZaJA9s4XGFF",
  "key28": "5WHHcpNm3nLGFWcf4vv9dwLH6CjTxvsGKZDi92rkF6s26A4hnVtZgmBVoEWUxnbZRgEQ6UC4zyZ75kfP3NiGUxUm",
  "key29": "26kkBCShu7vrZHSSRQkzREN3H3hzfs6S2QwNLDsJyF9MfXAkG8KR1QxGd5beUkqSMSVfrzenuH4oSxV5uaLRo5J5",
  "key30": "5WjZzjA5C5TCdUXhiozTLaFKwF7rMmUPJrLHzMMxtyGTHarFCeFyUi5Mm96pP3UzBRZmu69xiqGptBV3iPk8E8Jk",
  "key31": "3r22hak4kGxfadsgzsUVVEBZpeLyyE4PVSVDta9Envq8utVdiMg2mW7NpybhwpKrLnmUTYLCLyecdNWzgrKdQceV",
  "key32": "4MyxSxh5D3KB3cekJGrSZqVyhEPQ9Xy6DJNGSsgMkAJxSCuZACRDwdAzZD5iR3VEK7j2WG7Az6XvBHFbipoQGxrC",
  "key33": "4g9moGmHBFuovqNofoZjhULV1dQm3Uf756f8n8sQ1sJKXsXm7D6JErCXo9QNwsWnBtXZnqqRkCPSAcmTKgAAtHT",
  "key34": "WJB9c3gMagTuUYxGmg3XKybXxaVp62HZqpUADDfNZyNHX6xKT9W8YRM46crbByy3fmDADCHc1TFwMNeyA5WQsAC",
  "key35": "5aydyx4QM9QzMB8sNuQm9ukj7emsNcCvxnJXR5A6PpsGhiJcV9S8vwss3oXfVezpLJgRsfeE95NjL2qKWwqFXUcv",
  "key36": "3baQkiBXjuz7K2yPbw7AEpVxfMuPiDU5AuN2h2hgWMT26XfDp4z5EdoQ87mmnKzvNMf2BQuT1sfN1u8TZ9Hp4rpa",
  "key37": "57NEJxXFEpegjsc5rjP1e8V4SjjPbdrZa7XCyXrNeD9XsbJmdBWWhrYMKeV5X4su8qCvNP1u1RH6SyYhEYNMZ72Z",
  "key38": "3rQV34g99RY2yVmJx9sYJGesn4QvDi6wJT2KBnJxbRowmcAHk3BLrx2aaCyQRevZQHbhSN3yhXEoDvGAi9xHgg6H",
  "key39": "2rBMroEo8wABeFRjqKMDFQasztPVVkabtQTfjGEu1AFyCTEpj6ijmMvxeEtnK83MyhgBGR1ihaa9TPghBjLf5YnR",
  "key40": "2mSgPkFwAkb6cNqm9kz9MbdMuQogRLfp32z8kehoEK3dPG3Ta6NdEofMuS4ZGDqAHs5BwwzTXP95eBZUrMFhWzzf",
  "key41": "m8SeJMV4erbfkGh6ndsTbZ3qeR2VbmrnXQ86g96B5cogNJ5EmkxtBsYJF9JGF8zqKkuyRx6a6Qrw7KWBkun6cxq",
  "key42": "5gnSAqVgPncGszfmFQfWPmPYhxGWkzb6Vq8ah8nM28CkcszjSfeSUJbVNYnDCKidvpkhDGwzKJWoMMni3FtFQzFd",
  "key43": "5BiepSrrNpixYqoXnoNZH1iDqut11ep1PqwqCjpiBDiNwggiP4zsZ2ioaPFVtQVuYuFF1i3vd1dDVm85N8JCXeZ7",
  "key44": "2A2jZfwXxVzZ36QTqv1Ev3FwAuQvHc9Ht1HeYJjanxxAgFipD4gFGf14iBJQaq8VUUzsJBW26nB2h8GKy3LBgSuh",
  "key45": "447s2W9fWQ2U3safPGkBPGeXyTm3CLcL1ffHGVt5QE2iZDJay4WxFNUuXGhcy7yVkqmzjJaFCpxTXUC6R8s34eKd",
  "key46": "3afjMkMJLjrTdsXyYX2BD7C8SDrKRzq9pS7xJXHScPy1EFNXppydvP45GGa5DnSNCBCM9yzh7wWVgd3TxdCSbSyK",
  "key47": "5tJJ8z7AfX8d4BJYw7V4hdnhXgKnpFz3MoZtFHC3Zk4p6qgfLbspV9Q58hyY4gP3h1QARSztKVpDqzqor1HFC1E3",
  "key48": "47kvX5XLcSKiRmmreX3hxuiYA7Dy7yfZLSbU9FWdtUHLCzchW6sYFQB3HTV4gaKmkd5XBzMM6du87tNHj1ivgNLz"
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
