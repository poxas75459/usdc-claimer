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
    "5ZmacaY4yYSC4ZK6aUu9SKTeToTu3Uy9gPcMaAjb8r1FseaxhXer8fY3Z7RE4Vip1kQ74A2ZBacLqyFZQFZ6tgCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5epoXGvGFJxB63rvy5NbKf1RiTJnDhUof4LBysKSXcPw9VTjCBpievRL9n26uhfeZsmBU2CfQU3fknJKFwB2mr2e",
  "key1": "2pMHyQ8tLFVnyxFrnGDJNuREt4q6oUkxsGAKMoDoTTH2xcu7fSp3pG4boPMMZKF6uXv7Ap319EMea8hNMW7UbYjF",
  "key2": "4VWA8LXL2M6Db2mQ4ixT82VmHawwmEoRMT6AyntwbBE2kbEcDBY7azr9Tm6kNMq9j5DFnb9xKcP2AkfJnvX9x5Ms",
  "key3": "6yhevXexPZJAZEL7excomcT5fxiZ2b1vxuccUS2NLqFGSaon3sGmmcWb7UDFMoJDU8CcJd5y9U1DXG2ck1sZSzo",
  "key4": "58Wbx2HC28jmzDQMfY4KTgxV3n6gxYFdcG8CdtsSfuMB15QUuD55XMZ9oZPPyP3LNyTgaV6ZDBLMyxz9QFytSjA9",
  "key5": "472wDVSnTqe9KyumDDbGuDcJYT74SxdBfFcFUbUfwYdm6Btyptq39JHfERhd2Vxwszsjff6jdaGDRhMNsMoTwDy7",
  "key6": "2WiBYuRS24kECJqneeS9hiXnkuRqvpWxPfqcymeo3jE9gQ9NxA6wqhweviih43VwA1XcbpNzn1Pum1yNESRwD7KU",
  "key7": "4uPc4Y7a28nWFCk8PPecFeJuPjZiLthy61ADKiDmQ5kRJgGYkU7k6urWYEezHypYT5PNAP1j6cH1x7koLRRS8MU1",
  "key8": "5m4BWE9YgMBe2Nv5LamzFTocjPxHg1MM9o3KHV9MH6LSwzi5E21PTLh1aHrmHKPPLdLn64yYnvqVowBFD7A63HVZ",
  "key9": "4BCb2SuRCndUJMfUNzokC2ihmRv1mQ5ifTrvr29gaiwJcNyupyFAuuLUy4VA3dddJRHJ47UjCEaY7CQ1ya8pBRQG",
  "key10": "5zaTCZbXEvsiXMgErL4NY5XEb2KL6vd6U7fZ8RHsfFJwYxrEasWGF9uwMmcF28n9cfv4CTMzvGmo9432QGbCx782",
  "key11": "2jEAnHhSyHgVPXwsVtvuZkKxTjRjxgFh4AGsq84o6gpCXxAoub5Ngv94Y42458gZFKzn2JdnSRspbqd3SuNeMp4V",
  "key12": "5Phk3npH8wMFipiZBFisXq8kxBcvpoz1meSCU9G7Z1pyKwpNrRqZgupWnzNJ7YYaouWk3i6raBzFKsWLxBwmYnNL",
  "key13": "4gWovonbizyyV8bDtkvP2nQDrWYMjAffningtxZndAdjDxdbDcfQFqNYRG74YhAPzda53QbYHWbHy3thBnu5qmK1",
  "key14": "5c1oSr7WoLSW9byEt32pf9JkjMjTRKnVfMnpq6a8KUVLkgS81ZfF9gpn29mCgMHAqjV4TZXmSFJAfj3zkGNiNzEL",
  "key15": "3vPmu9wpR7CGsKsVgENy2UV1Y2CDjMtepqo3yeSb6bPqNH3CMfhK5t2dwcthquJ66DyYSKqHftqtyGVKDFQJUfS7",
  "key16": "5fHhcuhQf6gJR86XF5Q5viXEDGanMyY6zUghbpkYwXpgjsdC2d9AUfcHo9DwEeyvf5gkTudrcuojWTHCZf7sGQRB",
  "key17": "4mJPn1pFdFk1ZaJH3mfRidbvTPEXf9peAMtQqgTEYtqD9dqEhVJymVSjPq7yAAPwYpmYXcP95VAxyM62WgUYtceN",
  "key18": "5s2oV4DqPdcWz2jLSEWgnYVoXuY1AtSnJvmX2DDn7ABUoQ5gqdSDJzTFC749SdMG4eaNZ8XLkPZuW17WJFzh29qe",
  "key19": "65dujMSoLXe3q3tYU51ocUFV7YtmEyJP339P1Js1gqJqL579fmceS5XXjrjRVmmZHshLwWV7ubHcDEHgqsduWnEA",
  "key20": "BLTYK5X2ovpAsTDrudeSn2iEiZmcGzJMTbTEaSC5gfLmBtteLJR722MbJeBnaTsrDza65WbWQYGsz998jWXtLCf",
  "key21": "FhnGZPg9PnvSDSUmEB5q8eMhBhiW498EvecdDnbPYHtotvR8Kajpw6zhVG9mwNK5dPUfyVxFTK5GJGK7RchLc4D",
  "key22": "NveRqt8CxxC6Ft3SAQMKuNZvT9Nxrb5odYE1eBCjTPWLKMrM3PnmHUVGoxxJEqVGrDjcRQjPJ8ttRNsbJLTg4zQ",
  "key23": "R9iq9KWXAycrgCYd8qRfqq4fU1BQC7VBPTqeAQ3UAGRkYpvt9Dsa7GqAkqwy7BD9KAN6fQ3e7r1jRaHXZFEqjJG",
  "key24": "4CF4zKriHCtYB9w3Zu13Sw5Ytrnry8yVmTamPEiggeRq7XsERStFE1riYG6ZUhi4KHAGu54orBmmU7VaZUuYV2oQ",
  "key25": "5bSj2jPBoorfw9uKkbHiSDPjGbp1M8sVFf3zwdTeA4hm41evDNBWhgr51FF9aHHCaA6XmopqkTmDgtPFmP3h6Ldj",
  "key26": "5bbfiDbYUKtr2rHtKwSuTHqH8iNkBBaDFNPgtFhEjYFZREAr5ddQPrUmCX18RGSvKstauPv8MrNzyzfVRE3JhZkP",
  "key27": "2udP4YxNr4jNHcZKK4yyGRJ5TTUF9GLfkokznTqt9AxGGUR6VwU6BrUKZQa8mgWhGWxgRLzzjFPRJoZ4DzZfLDE6",
  "key28": "FzdUTqPKDLQ2XUmD3xWGwhr77ZnC9mMUHuqLAyqeF7QBigKvJBcDtJy6HBBykVVowtgbQF2KDdv4WbPdeLGmCPW",
  "key29": "2cw35kyLUkqXoTbKfEY4aafvHMsPXaXFMN7yRKLuynAzfwhvVn4Xr3zeLyim5cAhfQjTTAYUpwxUUW2LrYF5uJ2C",
  "key30": "kCPVsR3b5wCmaYieTLGscapBbc5opttZo6qL6yiiDh4Yrrh9gxTkcCawnFYSt3SQHNr76GJaFg5eA4LRubkqpLx",
  "key31": "3oKvmsbMPf5VHK8TrZkmEfenVDgZXSvYxXqs9GAycQKephZJ66che6w24BZYuaE8i858vE2xGhaDDi8ji1dwYkAW",
  "key32": "3aeoDAEBcWMYXKhCPHXSCpZdb7sb8KXUYj5aoptXkeJrRyv1a24raHyw4vMk7tdASQ9SoVNLsvf6955zRdtoRsb3",
  "key33": "XCrHmDfzSN2qZg7DfPFmFvFmLjkeF9ZFwSjy4dZaHzGXiqBci8qSXagYHceSVv7k1b9Rb6zsdY773XDwezgEHCT",
  "key34": "8JSXdqTBDFJr68Fn7vfuGwRNaaskctySyuXHQub2313dRP1k6FgPf7NG7PGP1PpD3BuiFZGwowcw32WJeqiGxju",
  "key35": "5xKgC6ihnBQbeJp648uyA4UKwUbrs5PgTXFpCmN6hd6WZkcisXqPgUV9giA2PUMv6kHvX6AfjeRncsvrgFtyk69m",
  "key36": "5SaiqnvZ5GssLqGLmaFYa56gxkpwUu8mVLX8NmwiRPyJGemEriLW9bzerhTJNZ8E94UzxrFgU5ZudQpx9WHszsz2",
  "key37": "3DitcdBBNehavLngy5KkaBWHeb5pgouJpCRHkkvpi9iRSqLrHEQaYgupFYCpwthonDBJKzwvnrdN71rVWoRms12P",
  "key38": "Mm2oJhGK7nWeKQ7kcaBFvZXy1RsrsJ8EyctRbUVf3qA6i1YXVvcg8Nj1xfsHXbb41rMvEjvt4TfFf6XQJYfp7Dn",
  "key39": "4mTayUS25axiCHLiJuCn6thTRstu21EPDFc7A6ESDtcS1JV7Z2e52VpcpYQQkyGisJpjJXBpSJTxBxXNyuJAo2By",
  "key40": "466BBdYsTLPcUbA9xvAa6asX8BJfeZB5H9AfiGTBNH3NLqDCPgeXEAtbpsRGohQQtvCB6xpE3xhJx6DPops2YSky",
  "key41": "48KPZeJSok5GWxF3eop5kx2MUYmeCYzG1tki2jtiSm2ACp8jZanXwe3RfwFvbvGsHz38N9MXCodZCBjhjBEyiR9f"
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
