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
    "5qQfiCP39dUVxntvzFxwYEsiKVQNbEAaqB7L45116L2cyyFPXzYAqT1q28zTHGCmDr6PdQyshAsFC8mBeokXoyXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "492xGpZUFkADG7riiSJfbB1DggWvSd9CB1GBt4RE8btAPwfrxDfHbqGp3NTwsXXXgMzRPrGCAhpCgk2fFUd8xDqG",
  "key1": "2JCn6G2gcwuqPpiyeADdNg9ZMAUhiLd7yHeYn9aQCtNwWMk28Z2wj7khzVBuRos3pWFRvKSpwd5xQGToqDWmtFT8",
  "key2": "QVbBWmQCj2bWDmqkeg6ZXTh6gVmpPkQERP8yYvHcS4Mva7Ruizj7k4vpQdyWYRhV7N4WAsmmr8sSdoxRXsT5B65",
  "key3": "5NDqGKyKujapWYRVtP3AYGnWahmTznzuYL935Wyvf3oEEu9dnc8omhQZhyJnW6B2gRgCs2amb1Rw1rxLrY6DVPhi",
  "key4": "tcyDXn6JtqHqhfiCGy3wovAr5DKqNampUSkeM3wSDpNntYoJKZLV7DYJSAq24TqJKhaH9R81nEyeX23anEPCYFr",
  "key5": "B6DBT68mnXbeeNRHipaxCPVjC9XGvHLX1fjjVcWiy6R1R8X3FFFEQw6jkM2Gx1dSjMTrz72czJSYqFmS3odtBzz",
  "key6": "zecavxQQkq4nFUGWru9fqpjads4HLTngZgWQSDGHCdySLxzr4YfkMCrQh713uLs55Dx6oTm4LYjbGfYFRBb4KTY",
  "key7": "2zrDee7umUFCqrJCctMLcdkv2NJcWYwzVPTG5gkPKtwQTQvqesW21egDaNnSBfngfZfqSEpViSA1Cd7irnoLM7LV",
  "key8": "39b6CyGyKnwRDxEsMurSEJRaeqd93T7GkgcpB32qkhxr5d4NTXq6p2UHZu2txJLuRhjW5qYBWP5mygy54PEj7oZ5",
  "key9": "3hYQ3EDoKauYyVf6pSZzBeDoG3L9yrukcSUYzsWdzboU8kpBQzCT5stdfjxrKMHrGQEs1dj6Fths8kkhxGQohjnm",
  "key10": "3p7McS6Yz4Pf1ScikwZRWAogL8v4RuS7iuNXEL8W92ykWXcy7QEejyFyukzP7zsW3FDWkfdVVa98SY6WQ6AuG6mY",
  "key11": "28Y9wXyfN6F17SrVTPXBrEyHLpfthV4iZG8RVgKpF9hts7L35az37RwVaZzsXok1Fff8MJmLR82Xh4bZeXnZbHjF",
  "key12": "2QcCCxjBi5ct7qGF8SGFbktKMtPTa5xjqMVNaMyggD8ah1ocM1BQtryRSjqzawr4zmtYxj3jZTm6iDYkyPp97qdC",
  "key13": "63nMMEr6SoeGsU99ZT2gNDGhVWTMLbC77gJDNaU31ipoJshse3cjSPqUjStYRTtyo8KkTfSMHQ4Ag7kdwt9MhzCF",
  "key14": "36XexUmCQpM62SkqjAFJm1KxBq1SCLY3a5xfFtWFkcKWxkEtXTQtJPy3wGnUkFeBXnQDEge6YBNKS99DYWo22uPk",
  "key15": "5i5tUjf9W8pfbZm1nbb3zqNmtCfcfdbPLD691eqxYYwcau9FUmggXs85R3KEeimM1pZfetFBXmhCHo6yFTrsFxMd",
  "key16": "4CSwJvZgMfQryNSqmk6cKjUR4GjnsK4TdYdqpa3tngXT9MjtwpXb8L3XkRmLadxNyHqf8GUtCJ65CopNKYVPB6Pq",
  "key17": "4DhNRAvT1NNbBk1cnm7tLTgNz3Gvpvi6iVRvtoVyTJzNN3zEPPK5YLUJPUXTg1zEPtbxYXoHi1E13CPCDjJaahGY",
  "key18": "4L6DGFtXkHVF3uwf2ynDFW7qKeCQaGrGT6ytUZHkACT26xeJ94f86HXH9imMUrvFgdGnoH4MZhVPznbZM4T6a5Md",
  "key19": "3Wj7E6F4pJ8aXYRkBw7FSoScUzcg4swv6FbbNhjG3guA7o8jqvfrFkM8fv33DQnqYA5EAd7Ze4FLL5QCoVh9AXRK",
  "key20": "2fvsPxNQ5QMBX36RGjWgXZY2BDW8iitFBLUHHn4ymo3j6kaZXSRvZeVFNv3KvDpxn4jDYMnUDzAipZ1ow2RPQCvG",
  "key21": "57QV7oDzRzBshaT6weEBWu9oPKS1rByuQtca693AJ2ixuwXBGbQdsvXhVzFeECC8N21nVjyfVVXQJHjMYHc2hJ9v",
  "key22": "57PMM7MdQMoeFVUb1XKAEyfkkcGp2dNmecXnj1vhP5YpaFFA4iAsWXwcaW5cvt5dhsVf3AnVVvdofJt32c7emXWV",
  "key23": "5usJVfjeicHw2F84R3twBfELp8LPCfpmTS1dseoruHDbfSrY6J4RH4YXaMEe7oUxmMBpJkJ3j8vUvPe9asnXYU3V",
  "key24": "4QZsocraMUSbidFh79AoMbLRgXgkt5UVbyUKPFrWsTbzQSXU6e5XXVdHPAy7NzV7ig3HAeoTG7Kz5vBHdcEqwQ1z",
  "key25": "41QPmRo4DHRf9brCQfQMaD8ZqsFrhP7ysmS84nTxGoqjnqEbTJuFTfZVZLNmXP5mTgcpBCCFdK7C9zHp2GwszDqV",
  "key26": "61mZ1GLYm83DPZjUXzKztkkWKRUf11cArCr4Hmza5DBJHeHhZT8mTRj5hGNMNoCboUCJBAPVihAM57XuxBMV7s97",
  "key27": "3PEKkkrEXd3cXtBxwXyrErGxTDrByZxU52Ycp52vMYcoswZBJJ5vZY4KKuJzQqdTrkZtpFAEyS3GRKhG1SMx8vWp",
  "key28": "5RabfSYBd98CkyAs46rdMbv5iesFHWaxtzhmFbbmrP11Hiuupe4W42EJMd7jyRzL81Q5i6so5U8MncFBQzJDxwgj",
  "key29": "5GANuqMadjqhd65NkWSsZsRGTy9sSbdsXF31ADNJ28Y81z4HfHDf6sY4AVAiuFfR1YTuvdgnt3QdCyYJ6xfpcFnW",
  "key30": "3qFtW6j8SgSYAv1yz2u3vYVUTxpGVMi9uiBxqGKzxJaf5TCK2yRLppuny67LRUaNFZGFJjqb7nFUhNrUa8BAX7HP",
  "key31": "NxwPugAqmgv3HVdKvAZVR4NLxEQCQEfBpsgtFRwuavkSY8TWTbRc1z5P8mYdgwAH3boD1DbckSMKiphHZBNGLtW",
  "key32": "384vbpUKpyKAc1PV3XdoapCqy9XMfBk3DmEygNAmzRDbDcoEBKUvbYknxEP4dc1U88Wri8VXNwcDGqn1qzmQc9Tg",
  "key33": "4Mgd55n3Y2gCFdXB77qEvabsgzG44L4pNWvfqN3ZV1jPUC2MYDg1YaNgVAc17QMnH26z92QSqvnqMrSkzsTzSvcA",
  "key34": "dYTTGyTfuzSZ3k8znTtCfM79i2n2pz8uucdoxKoqci9WD14bSSGEgzjupBZYd2TtPCJpEmFkM59BsdYK3XcB9wk",
  "key35": "vETe5zgcEk4uQnKPYHJDYkme4trNRHuUpdAvFQGrpTs4csoupPoQ1r9znYj76H8MogQu2wtpCAXtFBsANJWg7Cx",
  "key36": "QXmMwLBUVgscDhiPRGsm7NVr6DnjE4RzH18u5Vr6eMz8ANvR9YLHox3HaBkGqB9AHCeHA7Z6R1zXVQ6grm6t42k",
  "key37": "4WVMBCrAfbQ4moMXuHzzAinX3Z7BUsTVimC3V3H16nHD6vLsLzpVWQcV2dR4L5Nu6DThVHeyHud6nPNcE64Cd4sM"
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
