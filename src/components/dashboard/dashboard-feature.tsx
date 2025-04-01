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
    "5Mkne6cGxhdZ7gPaPJxiRmP3SrCJ5B1824h84yrru6y8zLNB6KxU9dHPViD3XELuBcHEaTdvyq1bwmRXj3GdCYZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3actnLH97G6jnJUeeKckCLXEZ9fLJRLbYJUiEgX8R3L9yPbEd5C31vuggZxTYCwHT8fkvyj33kdkeDYEGWvi78ic",
  "key1": "3pwjANk9LU6xYMR8MvXzLrDrGx3S7ha7JBULseApVfWjTXYavYdt1uqdvNftvRbUJRgfKd5iuoQns5gq8mGkV8oF",
  "key2": "47zcw5zouPfsYKjPWyHUVKCSo4LeJo98cZDqZ4MZWJAVjEfVgXyxaYpXW4nvs7yNoMR8eUD9HY4TApdMMkcrcWVA",
  "key3": "5ufS7dTZmTbxgVmSVCBHmtUmqK84b43j9s1QbTuh9sdGbkboLpDEK2bwATMcfRXqGeuwM8UHGQP36k82p66UQqev",
  "key4": "5vFb9LvZ2Mhb8UP6Lkd7R6svsErkiMAMUbcG45wvZ2W3H9tZwYoN4SyoZ5WPUcaGgg8F7zn7qAaegjNC1dx95bPM",
  "key5": "6ZPTkx8Qiy5R3FEK1n5sJwEYhgUVx4YtxckG71E9BpSybrS2VcHT6Dyzv8366aUk6Xg86aisnuMc7xn36HaqJ4L",
  "key6": "3U4f4uPaLtoW3ztrq9FM1x5bktXdVPtu97bkN82Paz7EFk1NwbprAMDB2hh7V7s9fdMMXeLJiU31HnLpTr44ppaL",
  "key7": "5pSkQv9oDyFXFeqxDNiTQyxJX3ucrfNaEJbSCeqrj6QqUvrheDhfK6f6bdnp8YG41mN1aG32T5kVxn5RLt2dzXxX",
  "key8": "2rgXryApWrunrvMHFZKahcSP5VuppEb3AdHFfXD9oM8GKsYmp9Q6i5KH4hjafvDgUc9CtyNKCEb46zM4Qiiiaked",
  "key9": "5zs1eUQXrb7LUkgC4WqYYr2z8dR4x4mtAbw83t8KLczRkJSYFDN5VgxtNFsG5QbwgeE3MenHSkWDN6FBUVgPT2Y8",
  "key10": "mfcv8uQFxk7aGwvQQmHFRXyCeV6xums9ttrbinyo7TGPsxMYEeinxkXBwiMVQh2QFzBjL1PQjooQJjgWpyJxg4j",
  "key11": "2jWS7rD9Nu6tydm8YuQcP6V6bTxq2cpix6r1RsYNpnNzGsDLHSaJVenYTjaTsDBwuaRXugL9cFiPz7zNfBd91iFp",
  "key12": "bdsgkE74R3X1aiorGMtCYFj8or6hke7g3YRaT63QHcXePfSJ2czk6WMjpNAzh8Wx8eJx6xPKCQFozK9FxbuTxs5",
  "key13": "hXZEpZ6zNo7YJ3P5xouhrEYEgEzmroJ36wqNLxek3QgKqCZcXkS2TAr5yBeKSshs8EcgH5Fi5ndCm1h5vctjn4J",
  "key14": "xm5d5bceLMTJhjogRMZSKcpFxWhtwdRBhSBPUAK5gTCpznnYXSfgDXmdLidA93hJJSsYzPimUBVYazAC9NBGbXG",
  "key15": "2uoXReUS7Dn44YWVpJrgsTU6F81TcBLK2xXzgSE9NqCswpmwC1N4VR9zTona6G5byFwf2mWDKTt83Gpc6qY8yzrG",
  "key16": "2Q7Ap999osi41xqzv3UDrj3t9SAqP99qRfwqoB6Ez9b3k2nJsFBmwKaczGrHQwQ6T52JJCP1rWv6dbidCGzvnLQV",
  "key17": "3ANTvNh7eyJzc6aFPZ91cAGFx52D3VZx96hgGbLGNWWdsC2fgaTfur6G7fLJg43GXV72hPivpZVjrmvK7G1E4mWP",
  "key18": "3cfPmPWgwhxkaL6bDNEUGGB6GeFrc7SfNfv9ZcCoXippQ7mfQ7D6pTmyXKgc1ZeKQpEmrg29tQEC4Gt8k6qBzVv1",
  "key19": "QZkjr2UqzMAdCDz7AVidHhQ8d6A7J6BAy1GxDYGwELGquqC6gwDa4bzfsuSp2Km1ddnHyJWHTVJm4NVeQATH1YJ",
  "key20": "2j9vivVKsaz2qHCv3U1SsAMqfUQcq9W9wmUrXyB6k2c9QsdZNQ44BdfC6aeJuVH9DNM8FGEmfiCNxdp1QTmbsAKe",
  "key21": "3iUSX9k26Fpzi16DPuo5SBQy1m396cEKTWvkTomcq6AehqrcwEEU6dvmt2taAwSHq7yYwdEvwsbiYqPPJuY5TGjZ",
  "key22": "42tUR4B8ZyNmHkauULC4K25pydnUVbVqiPvYdZG9vQMcYMU293nDSccKQGKrR8wg4taRjywWEQkmGf8xWsGzayTr",
  "key23": "2i79b9wAdTRy2kA2FiaT3RTqAQhqoS1pSsx18rnHNkgZQC88B6y2aZW2fj6AdZwujmUJhTCMKJLxsjJjSmsDGwbX",
  "key24": "43tfRgwewo2Gg2Kvuec392wYXAT3uzBEJnDSccrUYa3G9CeGT3Fqx34Xbd9yNDUNwZST4Sfi2N1fMp9XgEwafS4X",
  "key25": "5vNKY5znTxfrU59CYovKpjAohAweJfxPzGu8Z5hng7gHreZX5MycJN7yHmUP1wTKWcksnVSMxbG8dUCLEyrUjaSB",
  "key26": "4nVXfxCwmE4hPHPPr6STcU2jxiL1JRRLKvk8X9mqCtagdmdxESPLtY3B58dXyCMtKF4SsYFg1xSBULB2TjAuwSCu",
  "key27": "t3GdPMEvhMPamtPYdYZXHzcin7PrR28K1TtXUm4bB8bL64rog7spwPU3fvE437TG6VHeaVRjbbRZnierGbuPyNH",
  "key28": "4pSzJXRZwRmMoNAvL9nLZWq4rw9mEWmtEChLXchnnngXyeJFYLFhDkRzC1ts2KetwhbXDBCh8kSf5hUWVv3P8FmY",
  "key29": "M99ob8qjPryy3GtCX1N9uXhz7RJzqPwZ3EQqxKZ54L4bjT55F6GcUb9tEn4gj7u8gpRf4C8JTejqsvxcztfvpq1",
  "key30": "4mAFnq48bonjX7Kowb9V7YX6oSejmGxwQnHhzSNsXyEihPYk8sAzSxwU25XQJ636PjdXbeBcPLC3c5D2t6cpisxS",
  "key31": "4hzHNW2eET8XDN5obi2GnHaexfEo9FxZaHEBRjgpZXvukyKADCAq7Akmu9HzwWkDUZBmvyH5F1f1DT2Kr6Ex2ftR",
  "key32": "5KapB7nHtc8JMQp6WyF7KJDH6Z2pd34eN7j5E5knWGG3T58MVCHDxSuLPGG9ZZuVzBDeGCLk8c7G6QzrXmWtoVHT",
  "key33": "5C5WRXHBapP8eAouvTb8CEb7EzqfZFBKeKePFUwGaFJaBJfzTucjY4XBkrudvfhXhh9XauXGWhdb7PgczomEix1t",
  "key34": "4jjhdReki6tWPUppY4xZDnYygp3buAgLKZAc9GNDXNdYK1a5YfHEDjcZiwnhgxgi7i8zuzazGdpiJZaq2S2xmB4R",
  "key35": "4XZArnAXGStSv4TwF3wvggFysP6VWwYvPdSpdAyLULrTBswDjkXswfgNigotHccWoNr1tpAM8YpYAA8oiwk1GzKc",
  "key36": "3oHk4XY9wZFoZuu5Rg7rW1GupY9L1eDdyti8YK7cTPQYLbTNPsZJ29jyNvHwPzqe6hzHoKQp66RfwMNVaAHKmmQ",
  "key37": "3J2mdFqK17rrpm3CffKXgqM3JaR5X4M5PrhBM45GJiZwE5jhdmTvyx47P33yGknKuyqhj4BtvmecLGLpd6ELmFMD",
  "key38": "3E4o3xgcrmZ6moD4vPwKjM7hcoBD2yhbnNpQYU6gz5SynAvvFYLHSzBFchVs5v2KHumY2EMDZuzKzoBg9AwuNWV3",
  "key39": "4aWbxsdewMWZPWPsQtuny1Z6DdcP2BDM5KDzVdu4oMcd3h377HmiwZtpGVX3vLvZrUZQCug8auaKQSFAwo9FMLMz",
  "key40": "3k1nTSEE4XCsqVRMVwHZqvTbjW4M7J9mcVAt3V96Aq3dtpZxAWjNom8CoRPx918yFBLimAYUqhV9s1dKHiscjpT3",
  "key41": "3PmpHq5ChmMttsiRqQySCvsfY1ufSpfsc8aPh5r14BMeXGuyJJ774PDJ8icmxrpk3qDjALoswULAVqadAsCz7kVn",
  "key42": "26WDdDhdBjHYdtemDtWEj2vpnoAjCpLF5wqyy8N4KFTd8NuUxixhJSceU99jL3iyqaa1RipdtF65QN39njFaUgXs",
  "key43": "2Xwwdsj6Bx91oA3gUHsicW3fqKV6vqLvrQvgiSGanFYBuoj3g2i3H2Xh477k7DBMdCkNR3srf4cNtkLoqJLjWgd",
  "key44": "2SScg3rpukjDfi83JcAcz2rnzW2p1R4AFKTyzkHPxHuJnPeittc3pJpBnpdiyRqQXYf4xLicDJJobEdYqD8XjpsD",
  "key45": "28CemJNmZ6FkBcBztswkyeH2EJkQaQ1USyMKTeG7CqUpcQcNJHtqMoJQXuYBMFAZr9QPG8qmd3d4KoaFn4AstzJ2"
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
