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
    "4gagL7Ezw2AKgMGwxMPpp5D3a2TGCkJDPG8YiFxd5M7xruu1jGUaaDiUJ16zzJzT1MMkngWKqAzY3seECB8WZn8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dvrb3SmaEnxLkLVA49xEVmwD7GBK8s8zBvE849vnWpYN8GKeVKCBfEmeE17bxPv8vMH9e1KN6veC21bEs2obX4U",
  "key1": "2yQuejgQNZyfzEhMj1cMCrbKu3HUypfaKpUJmZaoDCqFfoPGDdPq2P5ThocvUoJwNWBLGdD59kvsjdrgBNHdJ2FZ",
  "key2": "2aT77b244LL5PTHHvbRLqhXURpBVCTr7xc4UuNLtKJ1EtsL7TK9zyxi4G8JEyiD9kzeHbitsVeJq13Q9noQBF4XS",
  "key3": "5oYPeY1X64bXt3PUhhy2MedQkb5sFT33AaQ1eSsXj7de2UqBmm588jKrGJtCeDeBrFywgCwFHJjTsr1FGYktKTVe",
  "key4": "57dZ4gSX764jRkM3qL4jXSUyzkEAuujXqQZxTBkqAUoS12rASQ29dAq5SxVd5Gs2mn94CviSzNa4RfFsHShhNmz8",
  "key5": "3po964Dix1jeAyRejrVQkWBzWEgwUWUPSAULuygQn6HTJ3xYt1RyfDRcgYWcQ4Fo3sgP8uX9m2bzaQbrdMVEWU6Y",
  "key6": "4weH9a1VxSSRNE9xv7JqGe8REZeWBg9sdmtvGZ3DyfqJHhfMtZxQRf6FDYt3KL3q6VpJhrGcuukdNZnwXUoB8Jtz",
  "key7": "32mTp5uui5aRToiW43CckhXvVYvjfdNvuPWKzg1WD8k5SrC2GLe5FhaQmrGAFKqaJXCgPzYvXLry2K3ktDL3zcmc",
  "key8": "4UTMRRnXByokHXodsbFSmGeF1QwkJLdQAxYhQq8YfJraBmgja6xMMZQKWUzdEzdyE4gHCv54z3hWb4HWHSBb63pJ",
  "key9": "5rKo3tRqYcUhZo8vUCthw3KJqZoxwofB4CHVzxXZ3eeG5NCej4etYWnoPhgGeTxXzYiCpEsL6DfzLDjUWgkbYFbF",
  "key10": "3CiH2roxhrgYnbFmTS6HfCqjx8u6g5gWJ4xCVZH43zormm6L7Y8eMkWwYk2GxKs4yT9UgrodA16Nka7RgaX7TeWj",
  "key11": "4DPtYsT6H89QzLxuVGVLotM1XbQD6RNnPpLAKbA78NFx54jD3E9y9HFvtn9HfcFLuZboAuWXF4Y9E6MqgCZfZihs",
  "key12": "3pCEGXMzUPqGMaZeZfUkRwmn4Yx9kkXU6mD3Su3UU7KrEVt51Z4qJGZPzwgPoSG8MtiMoqBZqS6bfYS1KycTgNr6",
  "key13": "3qfEPeesnT7BHzpKf4MSDYVViEfhN3w6u2yPNNVLPtmDBe7p1ujKVhmYvrfbQ3y8bPVJ5bDK4aRS2h4FsAGxXLED",
  "key14": "5YSLS73iR6zHV6JNe4sToCfg3oXkqao25FPswPmFLPaAsXDdBvQ36T39UFv2viAX8jamXPPHbQT3FYEqtTRNod3m",
  "key15": "4Vb8xR1g4iQmFaBQYavgnGbM7wrdVH3aGGe5CDemdu7NFuKPqWsSZAaBGz5NZh37V4cLYFxM28r5ZsVmoLR8AyJ2",
  "key16": "3sTBibc7o86TtJ9z9We1EHMht28R4XZnZTwDLTZYBRjh5UNCFvPynR96vecG7VpyjgZBaF8SM8G5Xb645gc59Wcz",
  "key17": "3n72o64Pe6KDDA7YGVSTwjZnnSdRXLweQnMNETkKaApbocRL4kU8jYej9899Yw3m2R4FUzzGLqM1Lx8AifR8NnSe",
  "key18": "56whASGsrTSGHP5xEeV5SMSzxennmPUqMVtdor7dPkdJeZChCE57ZqAoyZVfycPPMvYWykk2MJ1bzUv8D1rGEsyT",
  "key19": "3GsaDJcsjwiqjNTpKHDzANBUVcev6Hbe9ytC66LosRCSd1vydqhSdDZKJMUtFrLx2wLkXkEutsVjVwXiKqSTdDds",
  "key20": "2eGKJzA2FXw1vnKbTywKHv8dBmWSKi7cEoZnckt2Xruc1WXjjsHGsuo85NAxxkEYytdMYTRDR8X9uxrG8g8zx3NU",
  "key21": "2nnWnj6fTYkJcAGyEa5XagpHnbMLaiZ3GXKgbfcWFWhPWHxncdv1viZQ3FdbHHVGCeUogVJZW85a69xthNZJoc92",
  "key22": "4o6V8oTRW56kuPk4XHRZvuVdB63xgpDDKHczFYjhZsHEgkppiDnNdNTExYPPtRNUZzxCU1CKcxNWbDvBLJ88JCHv",
  "key23": "4a77sZPx424D6FGUfaApgiqTFLQVB5t4BrvPccxjJ5ALmX2AaDfFDq3mXoz4qec3hAABcLSXWDAq4LyXqk2y4sRG",
  "key24": "5EzpmUB5aQbTDur1xfDSUi51Ph4yu7qoWapVVS97pDKzNUZgVCBfz14yBa1D9g694sP5gpJq4nF2GCJwa6atwtNP",
  "key25": "2koHzNEjCSphXcEa1hfMp8q7CUNkuKYLmbKFcc75YmXjLBkTt9MZfSw6dzrm3xTy5Ps8ikUU2FZkJ26TcHHo4Gui",
  "key26": "4FPb5tQj1krAgC6hE85xS4LujtSxS5kv6NhUiJxzX9zZx1WCf9Kyngykd7a5zdBvrzvq1dBaiANTN5tJh72Q96gc",
  "key27": "Waec8dhmjPrF7jKD4SJiFy7hCg4Np5qzK1TeLn6emL7F9fSes8By2JBGnP63frinfxcSkLmHtkmfXhqZvR9vCtn",
  "key28": "5iaPRBzXMqahtRvAwHTpU4Cth66xbctnBr1cFBNDYPnZTzBqfEpaX2sFR3je65zmgxXFVJ1fkQ6ozxWd23owf2kk",
  "key29": "5CY46co9TRE1zrPTWCPEN6c99NDPUG4xCT2xxmsByvDgzoZt2KbtVRFfZH8xGUsvwTzxrjERxbytjyxWtevpxMaK",
  "key30": "3skJjVNFhkFaPUQo13UkPQPWLz7LxVbZCqwsEbmm3vDSxmTYe1Mpae8KzPGhcwNSqpmVfw4D2PRsLLEn7cN43niv",
  "key31": "S9aBJdPUB71JjNcrEd9uhQbUxgAvRBHCyFvWtJnoFpTwGvsLugSWtDEHQ3141X9udejvutLiZwLxqwBsyGhBL5V",
  "key32": "4jSEUmCAhRqCRdNyXz1t6zVByZxCbFgbb6Nd1yN7BHDDpUR8tF9csJJrKbMYRe5sDceHut8snRTMN2bAtBHsdGiz",
  "key33": "3dXkKTMp6njR9qi9WNLF6DUKjtjafD3wYVQHeju5ohgCoT1PnvJpssWpHDcgtJZCmxTUKdQftfR3cF758gA25Gv8",
  "key34": "5Qo2dpy4amt1YuCn86Yre85LTdW9K47CCeU1v8VxGZr6r7PVrwd7A9WJgMTKoJZz4QhU8rrP6rgWNMz312BRJa4s",
  "key35": "2CSxqNxC9XGgNE5cU5q5Zj2JfJWpqyVAGZobGvAv7jjXAMdv8nj2Fv8SZTVZBTzPmMuvYRsthfvVf6NKra4FPpYk",
  "key36": "caeoJ3cdqspiJD9iFqb5VqEHXRvbSemDEE5Narf769etUaRF9faNP7R5jv65yJCCm5pxWYz5dkubZBWZ4uTWToq",
  "key37": "4uGWUH2iM8VtheMQr9A1aPz7wXRpZd8w2gT2X6T4CS2Hpotd93Spvxbdram71ZMu6WYZFGc5g41u9Z23tBJ9vYmQ",
  "key38": "23LCyik8CiTRy2BEkHuyvz2fLr65Za5Sinw18E2LhtxanTFiPFDkQcoWDbhTj8QevbnpBoKQgr3eoPYMKL9KKGjA",
  "key39": "3Vu5byf95qmw1d7gYq85QB3LsCuzYhXsPyHX3CYmhYPnBubeXeRsrQgkL9mLwHx94iuAFkGzxAm6Xv11TAwmwsJb",
  "key40": "5YFYQ3RGrQt2eHMHUrCWXnErzBpJb3NCdZq7dLDHgbAreWjH9wmvhmZaRKgXbbciUDo9CN7HQYGtKjM2v76vzg3m",
  "key41": "37ZEmEP1Ab7zWMtUcSrymi9VVjTJavEv54CdEprY5S3cUZAbrDtUoR2FcfLgWxzoy33dq3thidzyPouVEmGbKoTU"
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
