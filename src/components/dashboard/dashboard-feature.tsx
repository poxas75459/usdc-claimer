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
    "3oeLsuSTf9PwyWvTKSZkJ74esHBgbgmLaKn8JLhEcUFTMNhpvtmiNbkcM8ZezZvnhsfMCtGZWqzBobMwpxqgzz2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qny9d5VMhkrJLYdYMdoUZPPsyqTi3r25kyYpaJb1xHSqUjG1peJCsGXhoaW7svWD5rYarNLLasGXaUcrbyjd4rK",
  "key1": "5BsMTosfqAiig1pTJh6rgZk6TpcETRAs5954zYzdMzfEXzuQRzEZJNyUHzSMEYnTdJ1fxQ4o4Ge9MDyLuFuPJbfy",
  "key2": "2D5cFkvpmq8YB8j3A7fTugSbXPNpkTxV9XYAmxbG7VGq1CvKaJErbruWVGDhkfPwH2DkcGTA2ZzuCdWnyfswPVrn",
  "key3": "44Xy9Qc2p4GthgoSCJ4DYMqW64ikDM9TWs3P9hfkTVrhXAmSRXqc1cnfiuadkihVccW8nvkjyTKuivQZstLvbLbC",
  "key4": "4TMweJYDjs2VDcCkGmRjN8n7ZvfohgWXWwyfeyrfJ6a7JL4hj6cP8XcDBPMhkU7PP16G5Vx8XZ4gGhsXQKUukHiz",
  "key5": "5FpK2S6jghWu3seyVtzmA7FsNFQgvKD7WavwjNBujysJXpESd8rFRrUDe4pBC8f55zCz8cUCxyYQ3iyjbu4oQQ7p",
  "key6": "3Vapd4DznJFr43UfsA2bW27kcoRSVeDaTFmRc8U2LGwubkKisCv9A32QkE53xYUynrEr9HscNRFhs64sCoTPqr6e",
  "key7": "47XQQxctrBWHLt7DU5oXTh1WF4faGAv749UDNZJ6S8FmZuscVvNaCMFHQV9arAgwFG9bzA8yQQXwDNJpvLxEKEHs",
  "key8": "5bt3BMteK9oYURQrzdSWBt13mY8butmZ18JmXhVfpjxyALx34iaW6Uandk1BztHGj8HyYgru8Hz4NYPmgThTramL",
  "key9": "28WdukUuDbNNhrAKNGvxewA2DYTDG46bCEnwggHUxhbW8mFdDuV2a2uVK2Kt3FCjScKay5HPKy8Xevphtw8gGHZC",
  "key10": "3iNFRF2H8YwYiR1TaXYF6wFQoMNDBGVZXKA1GzZbjfVJRGZTcJEfUutenYbHEjM14zM6a88BrFfSWMMJyFfwcTuU",
  "key11": "YM3megQoRqVxjpx3REYdcdMfYxPEQzLwwN7ceD4otBcH3nLkiFv1wiLND9jZNgMSnQUXaCrvTeGLeZaWFPsKNjx",
  "key12": "5BDN1xTTZVE3dad8gqbdfMeXqtQ2u1MHkJtkiaHX79niZm5bis6GxywgkbDSFPnRkYdCUgGqUaUaxuarRU9wTYnu",
  "key13": "4jPY9GRt6ynmnBGDyJaj3Z6pSyLvye8FGckmovrUf9fEKwqFK2FhMEwc8eZR3yRYthQTmStbPYLY4YZxniiTme8g",
  "key14": "3PTQAV8ZdCjt8MrGzG4G3rxouCRPUwrYqwAdxPaz2GcJ5PFhTSCboep2gPJwAxEayouVrmJdoigSobbCsqs3dSjr",
  "key15": "59VvpGJdp8wnAQ1Ww511j52ZrsmtEpNkFFb1s2bQbBbqkWDvHwc9zxgU434v99UCQmWFgVKM6g2X6cnryZRr8RbS",
  "key16": "2kg4r2ATeaVCdpqbRnNgqxkhpAExYFiEBVxKeJ9S4QVwDcK4C3tQpyoBfQmygFKVwdc34C3GSHpX7qTe4UQoBNM2",
  "key17": "4v2tSmJt8bpKaf5FzrWcKXiAnbKHogtMnCocpKMpUVsdTfJXXksRx5bGWYUn1Mi1uDzj3MD9w9ENKKmrKcwQjQAR",
  "key18": "3L1Gw7MLbYivmZYTHWdQkKcVDq5Wu3287i8x6bdgbo64SLXBhktSy7LrpQRMBekgowpaM6WXezZg7sDXTpSihLhN",
  "key19": "4XDW4DUdBVs279NEVFHpfDQsbq12hYnHsLoJNw4bpoV3BvwsspvRzTFTV8VUftWfjc9HoCYKwMfjpDtY72kVRgFj",
  "key20": "3uDkWK4pK8Tx22qkiJdfDjQmE1q7XbZg5h6N8d3vv4YaWpfVxh6o67sFmABEbDTytpnKkE4dhii7TXZAzyFbDM1S",
  "key21": "2F9egDpmy7zSSirDkWw8ng2GP5BWbFJVCr6ZQSoZJr8PoFKyooa5Dk7gqavUqRrWwEHhz7oxsiwteZc8zzvWo1yV",
  "key22": "2qo299eBWVSMZBD88vdY3kHGtuDsJRM5T3BgXQd5E2xisxud2hMPHuWZAxdFfHvhmhdLpQqyJ3vrUfZJEDeM1D4x",
  "key23": "BYF7Q2cRasn51yx6CCCuUSvPUeyTzWQvd8RpM5NiYkAroxe8pf2vvptZhTNbf9GNN84vHfMMV7oQ411TtwPhNnB",
  "key24": "4vDF8oasroHj6Rox8q7ZAJvjju8rjdFUStcVakAjaUED4oGvHu7zuMY1dkitf7cD66w4vS8B52p8jBEv95qCNwGo",
  "key25": "5VMxU2GiKUvWHS5zwgLvMDTBNQwVQmKkQmkatUgqBjVYdM5vceP9q3cmkyRC6jQBfppX4y2iGNS9zN3M2XWREuUU",
  "key26": "3wYu956z7vSDaTrnQXUPRxvXnHR1qURoD5RA6fbB9NC9jUfinnS1CirifimHzBdAFGGLbhgJyoa8LCM82BKSiw7W",
  "key27": "64wXAz4tpYXQ3xwg4nEE8qALBpnYpu7bmWLQf7jAq3jfL6pWfo8vBoKUSNKFKapcEDAfi8sgU4AY5pVM5KwRq2Sa",
  "key28": "26gRUYqFFG8Xa7qFRrMqbfrQZTFiLH8HQfghMtpGEZTewpb47bNGcHyqw8FvnJ4dqDjECDT2KWMuHkH4vaZzy1bC",
  "key29": "4xbYfVAqak1Ssutm8Gm35mYUhqB6349hf7fPf3R65RVdQVLG6JTcFTSUL3E2XkKDYtcMAWBfyTAMaNujJenub8go",
  "key30": "31uQ2tuvWUyvn7L6sMreFJzugDMLxFWWQ8ybqt6ozyUpxjDqdU5yt9JqKpPAPq4cgBxoyRreNiJSHo6JSXtRwrsZ",
  "key31": "4n3WpuZXdmAp1uCBTJizi4mDCYVf3diH3JY7FZYZBAkf4BaY17WajMmsCDwzjH34ZXYcJeUFbGV9dnN3SqkKmGG5",
  "key32": "5w7wppufYQF9FVEXzJwrkdusunv5GKVzwPWgB2RDKe1f9puF2mrLYLD6joLxatL1Z8x78wiQAe5XupPrvZWCchBu",
  "key33": "3GVcvPsxyLQvC1cvxfQv549MLXehjjrbYTWBUFPRcba97J96wo5pxNAmbWwnbczUo6h66DoCrBn7fh8K3aUeRqGM"
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
