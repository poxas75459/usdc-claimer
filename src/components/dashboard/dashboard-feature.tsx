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
    "44qG6EAXsdSgQYJukWppfiNYyA4oGf8DbmXt2wXS2LeYb796d59ZiJQGd1Cp8jj4G5CP6qxAnnTM6hNyw1q4D92A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DRbQpXo61LZJpaab9axtNkegikL8NaBMv7tEz4XXqSGM33TvcYmGNdDtjBC14GjvVYvQBwTLPpExRcYxAK6Xf8a",
  "key1": "3EcXsFpaCKJSCvBgH9gUFu5oeGcRgiy4bb38rmBzMBUh1xuSncfZb3CcYPVBz76QX4Fqpvqtaf796jQk4vATgqph",
  "key2": "2FCekHVojspP8KY8ZsZ39vqhaytxFQFfJwVsVUavWZfKERET8PpzRuHCFVyHsAhSeuJoSdHK6YmTTwgs47i1UCHf",
  "key3": "2PbNLnHW8Zy8LpnXeUYUjgoZeDRAQo36FM2sjvpCL1SKqh1igh1umg7V8pikJk8kYVmY6264myE3fXPiqouzpngQ",
  "key4": "5Nu6ZUvF7WiRYLqggfqUpwbFMQHSjNWufM6LQCZ6nAQ8sXwCpc2p1XqoauUYLCxVso9Dui2ww1RBBvXEToxrMoPJ",
  "key5": "3ozEyMrQxUJ9Jazzd8R3uuoFwaziFCgU3mrhEu98HbtoUHgcem5tVQFCng1GTnc75VGgujJX1epLCLhzUszfAqvB",
  "key6": "5fXjDRo5uB3G3DaAksGHnA6xeWePVePRVZ15tq3FBwquDSgUZ27BZDffLNtajhhSwL4s6cm6KpFnuN9myCrAwteP",
  "key7": "232No94u96W3esWccf8LNdreyM9UPXTdpFjqwSG26xBSC8kvDb7hGr6RgEZPWDh3zbDHr4uYezwC2bbk78sESDnH",
  "key8": "2VcgxuK4x12UdzUMW4MKBVzQwRybRmWSxXXVDaS6b3CU3hhvJtvYDwspa53zcWgfdQbC1Lq3pZwNSqpYQHYXFbig",
  "key9": "uXc899o75Z8RVdE8Th7b9Pwq2qorazPS46Gehsc4NkTRPgZM4g6fCfYaUioYdnGgrqbdfuSAReS8J2LdfJnM6oZ",
  "key10": "23o5NY988cKV28eLijsBgvwiYRBUbX6W1FoxAM5ZGRMWq6MxrMyxZYgsgZ2hfPqgsnuDX6ertjg7SjQ8eanafH9o",
  "key11": "41Y6anoTWPH9xWRPRaMUsyZas1MKDAhAZB5rejN4YHym4PSrfsXpaacsFiLGzuazxk7oRbSDftRq4ncP5o2FLz2v",
  "key12": "3oyLcDd8QPmMvk4XFa4F6mVsCEA6NnzyfzBRi4ToAy7ihF9ZTcSsBKYyNtYXciJp9rf7LN1h8BFV456vNbmHN8HB",
  "key13": "pLghBUQuKvzrYUbCBncTa12UZ487fACU51Cauz2fRRzQouJH1GpuhSeRFeCJi3gTSDwcuFPv3YsrBxUz3v4rZwL",
  "key14": "4MNRpz9LSEjLkmZr95qS62VJwcGeMqNn3GhrvHyEH7kGbZ4aadEXRNfV14xB38FG9vt2Upx3yfpG1ZijDsvpJ3fF",
  "key15": "77enzZ439irDdp9DvZWAud27gXczePz6cEMwRfgNr82jb5ivPm2oXxj7KksiPxeHyoWEohdtJ9ZYV4Y4vjGgzJ1",
  "key16": "2P866A7aBmMwtMthEEfPTTsFozr2qSD18BJL6of7McTYm64H572GzwwmhoGrHcjCPRPG7CPwgh26zcfruamdWkRm",
  "key17": "3h9jM7GBdwWRuV9xR5DCWMLdxjpeb4k1A6dpwJavbvj8ogExJjAW41HbEJP3DyzzM6RpqRYrwRvrde1WyHoQ59kL",
  "key18": "FiDnKu9hvZeJkTe3YC3TuGAXYhCQKQ7Gza8BgEmFHJCBiaT9iDvuE16C6xBSwcpuvmAj9RP8BqxUUZN2JGjEkaM",
  "key19": "5qnhhCbodW2G5z9hVPjU1ENwsjoraPsLkPNGwFitRQBy5r9ssKZFpPy4GVyDedRhHi96WikUnhmzgi43dRaK3zcp",
  "key20": "2QnhVq2Ucca57EUZZuwyB8eFv7zoA7jqpT7wzmd7zN3zyASXQTCSAiN8LGU2qHTPDv5EFfxbnPpnpvAGieahmrky",
  "key21": "5952nxKFQ4RRahRPMdUajN61gVf2ArnADsisVCkGG5Fi2ajg4jGuBJtXRqD3dryNameqtYHoD4fAsSvXHDH1L76o",
  "key22": "5DcD38dDMPcuKeMF6ACj34SQcc2M2E8rAtpGRKpJJ6hVhhMv9apc4Ag9t1sACtfEVGJDeAzmqTA2Z3fYKzNN7PMu",
  "key23": "2pHxJHu1KFBazEWpqcNbTPcEeUBMMwBQGvqzL1Trzeu8YWxispCfNw8JwTdco6jQ55RMT5MxxL1onpFCs13MXRm6",
  "key24": "47Xm6VMCXEkGeYS1uvY2tTXGjnvR6yHyaamhikQpMfbGEZdJnUXeog4W6n4KzK1VupkcaMTpe61SCYDGaHPukbTE",
  "key25": "46xtv4t2vpwEGukMf1BatNYbpcq55bfPkhmXFW27pXr3TXd3mYMixQuuExx1vgr5BsjJ62spixGeLLtDjD3m64WA",
  "key26": "2NeuVgfDJDVpA3FGjcyy19VC8sCCUma7RfSfNdbqBR56qH5EHfkgWQDvdKJFcdkxLBJVpf6ComceHYdKrjrxqxtL",
  "key27": "2FxxnuTGBBigcaAnGiKaScwi2S9UkmfAFitQ4KZ3e1gHqdEE6wisgF1iDpirgn3bNuJ63jAJavw1T9YJ6fdagJ5i",
  "key28": "5JtUNKgJ6z4C1b3rNCT528SJRCZhJW9mwLtFyrkS1pdHdqYAPg7xjrJKcwKpQ8zKTsmMdAZj56tykQ8YzHnr4TVd",
  "key29": "1ePEkC6GEyDqihtuQModW4THvEynGba5YBUcZhdmWG18MKStTrhZ5mZTd2PKFCc2EHDKT6ynGj4w5CJqq5poFQb",
  "key30": "xZqVLi2BuJ5B4vEP5cWAwLjSG9K6N15wssCngsQzvGivN7bAnK12Ee5QaRxVq8CMtn89m5qUPNEVM3Ww1CZq7KF",
  "key31": "3JWpKMXXdjkZL2t8Wa2qnDLHS7eW5ngsZPXdLCrt8DTe7A7rGe2pGr59WJk2ACBp1xHH5ZJhszkrmEveA8Asi6aZ",
  "key32": "3ofuUeB4bXE4ZfgcJRknv9RHq2To2KBPURAbaA5uxEvAfW3LYXmKPtQY1P1VgPHNHVPWa84ZBDtSuvmPF5RJGSUm",
  "key33": "32Xy6EBriwD5roapci45zSKn1vw48K53M2WdDkZFjyZjCNY2EoY44MBqPzCPXGUCaC9LJMyqTkuzbjYWhfBiZ7TJ",
  "key34": "2Bo16hfu7fgqnHzKfAFcQppw9Ya4MA5Y13wQy3sELWjnTyJbGGfeLxBRUnd8q5qnLHXpG1o5PqHthDKg22VoHDj",
  "key35": "4TVs2hvkp7LUDS7ccghPpSGQ6pksVmAAUXqf1VV8FfsPjxMnWehdThnQbTQEs9xN5NpipeR4sKBy8CUtyT33dHew"
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
