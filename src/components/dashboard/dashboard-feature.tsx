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
    "feLxCZFnQxtgRR5N7RMBYsDBdEy7EmMUc9oc2MuY3gUxMFGzTXHzUhZBEGdxUfnDY58mMywagfg516zHAiorDi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dUEFHwNvJt7mMmpFQ9E5RsYkKJvTDTspuTxM3RdrQx6h21au5BETJJdb6hj298EPxxXsjekkLBGKVZQcNDyErdX",
  "key1": "3aGSmwUV4AaSSuyTouMGYBPx5GiBwMG3hjEmkN6F4rfWDDM44XHGdq5bcXNAgfn9VCekDwf3mwBfmtwMky8DkhhG",
  "key2": "3AHNsoBoKvbSZKJbZ2zcWaFEbubRs1QuA5kGQyF7CtMzD9TM3FZSvHhvrdpTGLrUNfWaDktps4ozCmbGbwT68Xmb",
  "key3": "4WhuWuqPeRKZ3J1NFuysgDWKgfbNtvzhDD3CHPxuqo7dog1PRSpNF22PJgUUb5Lr1DqWjdoHdkWwGZ1sRfxxCdBG",
  "key4": "3NzM59uhANQb2yAW5uqPBENaPsqHko35HsLGufjXLu6vM37MLRgnEMPWXDgrrieceQ4CW9xUTjWiATNENGJPNjBw",
  "key5": "31aeCQNymwHyQT8Cb8Y6BmDUvranDLzq9J7gVp1GiUYg8PE3wstB3ihn8pZ5RMaCP9q5RRZx1r6m7zw6rSuNVstj",
  "key6": "2rBeNmWvr6j8tHBpe7SxRxazWjU6qx9GAUEe7NaUH8P5NXaWhHXbB2UNDCAtz3KzpTkNFYjmvkW9rw37BsjF2dvK",
  "key7": "2hmDWFw1YvZhgGx8uemWb9s61GU2XBPnJ4VCaqKxcnm6xeCJmYSR2q8k4vGMTddtxRMUKNQKiQSGwNh7f1jXFjC9",
  "key8": "2BkGqVYiGiQisKfnimnwRJPpz5HnMoYzZysW2ygY33TwbdHrfi5NuvgDMZrnhLNRVvxcoJeDShqD5rLkG7sPnxXk",
  "key9": "4JjmDyYJBJWTUQFcrwQMEmrMFSFbFdoAahYX9iuRqH8rnwp7xmyNGBSKStUKd54kzveqWkQU5MSC8qWcX4z8fbxY",
  "key10": "WyN1BxnwvwQ2psZ3oWME27YNhrtkKm6qrh8xbcLS3ne6Kr5ybkC1xCCEgXg341o9MGWzFJSjdAAW81k9jJm9W46",
  "key11": "2SkbknGaoN86gFrwwZ2sBuFB33yRjqaBSTNbyhHitGKxZobtTyzN8CMkd6upbCmY5BxpmoK2FmBE2fi7qzfCU5ZL",
  "key12": "42KYPfZx8HG52tSzfYQvNC3VCbyw4kEdozQatrzdBKt2xEHpqJjtxmJxbSGWYX6zZyqkxtReC8v2cbkWR9Jn1ud6",
  "key13": "xceSvgBzGXEjD68pWZzSK1vRzwN9CJyR3b7mWJ2bMAao1sWchNoc317zPZcmwf1Mkp18WDusmdu1by5YrmKLee2",
  "key14": "59RVREycKE2uGynEoKzApJnEeTgEMZyPDrP3dvF6mVv8C6yBV2A9ta1jiynr4ZxtFF2aTKEFFYQ6kjkCKxA1yVKg",
  "key15": "aM2K1f9dwDCLbTodnavdmrQpBWUbKT4aSgTLzoUvn28SQyg7HCkXYviqG8Fi4b5N6wety1V6SjwDkvwndovqTSn",
  "key16": "5ps9QUVdNCwCeaaWvyhBV8PbRKjsdEjhpJHTVb9cPWW8kq4riqhPizXkm1rf7N8NykcBZgCAGAWPw9z3KmJfVNy6",
  "key17": "4btGb1tDnNDAjK8HdF896gNF9tGMGrgr48LBjRVwHsyYdp3xviEwkosGfWFR7cpvBmvR4Y8JDKbQ5618DpQzHYsp",
  "key18": "EWhHHezMM2rfY6t6PMUZC46N52Fzry4eE6APVXyVgTxxasmwQdYf9HKBr3SJewUj1eExHR7cnBo9vPeuRNwGaKG",
  "key19": "3XNaXvssA6tmKHbW73y9VBiJuSawUkKHLfwmR21AMTPy14XvBSvTKukNwxkbDzckFWTn5DzDy8WL61KNLeSWTfck",
  "key20": "2dCRzMSVxzc4NJqkYRb3PpFWXz6TvfBYJAmBApdCGGaeya8mP9Yss4axR2ZCr3tvfyymDdrW44Y8ErTx7HzBHpAp",
  "key21": "5vxv6SvDeeGqove2TcqyA7uLdNjJusmKmoPpPESQPafVeZbwi7qZbWmxx9dzsaqjJG99zwxffeHSCr5n4RcVergc",
  "key22": "4iS3QGZ3hNpoH8dFEPomrrSx6w987fjHZGh4FGaTeccCrX6vrELKqdG1NE47YaF2NEeRqiX8R8TDPLWRcAk7cVom",
  "key23": "5gk5uYgv6ATHcMEbRbCaPqPs2665Rmidj3w1VZKueC6sa4Gz4tFD8zVNTddBzr7Ut4ssK4D8XEBcUxHWEkqusNam",
  "key24": "n4LNRz9uNEkyLqsUhGXqRaLDLZy6GzUgzR9S9QUg79Je1ZSNe8Vc47n2FwNg36zj56D3WT3kM7As1ejqirCGidV",
  "key25": "1ZW7SGMpUDetN1GJvzkG13HAagAdvucnmppUns4g1Gi7kWU4PEz275MiD9JKvyf6SqwGN4m2Qh9quWFwSdLXVrW",
  "key26": "3pEcFVsbTnmHbaz3srqxFUx1i2DKPpuop9a1ATuj9J8uyqx6175Yf8spsiy1nyZETHkaN1bWP5wPK4yY9U1LC5hv",
  "key27": "5nSDTPNzPDg5oFcKrZN5i8KDNx39b5qEy9PPUWWYMDZdrAep3yPmGisGh1KhLM9uEgtsdPuzXfWYZMv6vErSB7om",
  "key28": "4e9xmofbcEwnKBzzKVtCiainvwzUeRVdC72CqEJM7YkqqfBfRuHXby2LzWCMN1cW4TA2rA7czsAWHUEx5ZhbgQk3",
  "key29": "44TGLV6uNqXTBmS6KXYfk3mWRtsvxjYCXWQ5qcsVxdUYxGJT9vXw8wmFb4aMHJVmLhwgE4SApTvfCfoDuJgCL8kc",
  "key30": "8JC9gGRM5HDypzFwkDFMiqNVqvKsnZ61AqY8UB1f3ywFX8CqxZErsS9A9iQ7ii3GQj1bxUgt3uMKxGgeZgiKizU",
  "key31": "TLLvZQxKusc5d3dataHex78nqxCTyQ9SsdyEHJCtuqaVMG6c7idhXrr9iqNNxUosqyfn6SEcb31kh2kRZXHKbVr",
  "key32": "54o5d6qV7jPTaNizRFe9JW1Wp5MW5EcPj2QFo5XqEZush47mwShefiko8MMYmaUyp1wci8emyQ1wSNEoiCVJerYW",
  "key33": "58wNigRBprhsKa17enX1mt5XstUVzPSyJz1UioUDSSqeiL9UUkJURTumsnPu1iai5GFFoJk4apwyde5iFRhdGByw",
  "key34": "3M4sMJikTVALSeWZ5bHFo4cUEVMytGK46hMadzofPGLFH1pKTptkfUSA2UYHtW5SxbiDbRgGi1R6qBgrF9vnqsw8",
  "key35": "5867RD5ngePdHQPR6vo3opLcZNgYf3z2h23rVxnfzWEfDmEb5TKDZtnT1FArFKd4ajy13w3zyPK4wdkx3GpJmFBM",
  "key36": "gYkAtwN1Q25Mx1Fv82Q9h1QkrhGKZEjNZWSQaEKoiFHK5xUM7bD11BnBNANi3UzEUDdao3VwLVD2ZUu1iGihppi"
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
