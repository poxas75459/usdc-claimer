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
    "5EQz9WX5MVkxc8LqxjUXBtcbvtYhLmoHPDEnVvqG3QVg4VzMbKkb15LrPArdKzaqLVTytBMajgFCG7bNDvRFQeox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48RCRj9Y9YvfzheLkuFpP3mF6ebL9mexD2AyTZxwMeN28CReWoCvrnqvpyHXUfg5act5jbmJSbmMyek1obuEWJUP",
  "key1": "5LpbRius3MCgdmvuQfT1ts4jRgp9btkFwBVuE5AAbj7j4CL2LaXC87i4K9C8cFRcwdUjXJZUQibsgfpJ8X97bzYj",
  "key2": "4rgJsDRCD9FaHPrPVhWMwZbeTggM6FZUaqJpL2E9ruQpgKKrqDHE8Uvz6D1SNc81KDFcJ5pxCqFXpJKVNxUUghdV",
  "key3": "2mf3qEu4bXSLtsiMGV9y5j9oG6f2mmqDzaFjJDqRjrmWvN8g3ThPySXkmhmQChwA3wSfm7WV75Q86sHvXsNQWBWK",
  "key4": "4PJj4dnPWePdz2BVgSuJwwXEnJ2upKCeJWTh5gPJEjW4rNmKf4qrjoqKwxZpNpP7eo3rePYjwDhDyKPeYuAZVCG8",
  "key5": "3sarjEBRmcmTpAkv7LwaSW4UwHVSDM1QoDcgJk5mrt2awV3zeTQCkXmi2wu2Z4Bg71tKaxJGFiLYB9F93XFJJCD1",
  "key6": "57d6pb2bz3E39oueWfCpJTwyiBpryBrn1XckN3y2eKU9rwKN5L11TqrXLyUjCoESEe6kxdBWV8g9Gqfo9BFUxQky",
  "key7": "3YwpejHq8iTyLRUsSX9Wd4r1k3KAEKfBUhYUbahSjp3qNkMcXFsj9iAG88BmcBYn2Pr9rgbbKpg2qpXmkbzqJwR1",
  "key8": "3XZ34v94KeKrf7jCzsaon9rZ4n649WRqSnvimYmf43K1v5tFwxYqucLhSo636NhFhj4aTzDDCqPtJbtbxRyu1vRE",
  "key9": "4dTmvMEdsXbREyoetZjjwT4QNcvfzr3qA12dBPEJucEgR1viR93kgpSygzgP8kRtJTFVHcKcnsRzqqWVX5Zyki8j",
  "key10": "5RBuWcF5x8L11pTkEwNGzZ3zmoRNFqGhddLXS9Szoaq9WNYqQpmx5PTDjRZr2oW9knCoL4TuGpguUr6XuwGGN4vJ",
  "key11": "31gpsFumRiQoMo6MavQ1oG55A6kNYEhy71qP2jrb8cVf83CAEhFmqK6S7GLsQEF48w5o8mXk9ehH1dxaAHAXue9N",
  "key12": "3GcykBQqNxPu4dB51aSrpRe6PDhmtMgMkvuN8mep1sRbe5YtLgLQKTmeWthd41x4jmEHG6T5HoniHd9KyBmjZHqs",
  "key13": "63D7PL8MXAAPrhEkLdNqBNbx88kJVW7U7X1Rh8gS4tuNqyDtMhk8gYibu9KpAnYbxVNYdStpu3zxzr8eysgv8VzH",
  "key14": "4RmDZHhePKVTupNRyHVSy6QVBiJqLgo5qsZhwro3J31Jkuu5uk59opjitfHd3qwt93K261UiDBDm3MUucajZxnNJ",
  "key15": "4ZYGkv7w4Eok2zCzRqQzaUWLPkFMnUAbKnpa8GGmXrjbicwkcdeRjrQ8YbrXJw9Pcf41mjXDkGaCXnU9t6YRg5mB",
  "key16": "4rM69cXoiHP4oMfCpneaTQ1ywqfjrQjWT8PhAQtswSpvNs2kDYMojtWjSga4BDGwjmoAss9XM7Ud6LQadN3qFA54",
  "key17": "4v7n9CCRZVLqAMYSmxJy5SJJBm7xayEENGGwxD9ZoTefpxQKDmVADjxMMV99CgNoGPnAvJpav8R9qrhQi8SYjZyb",
  "key18": "2SYufsQJtvguBpsaPLw8pcapN6WMTZN9dXJpD485fzieVmc2SukR3f9vuga6QNEAJq57q2p5dRL4fM4Y4LjYX698",
  "key19": "wbki8doLrRjpQVuGhgSjwitiPFXHFgaaBFuC7WB7VLsNacTAiQ54MsCX3HRD49DkvatYkN5bVyRQFRYQNQmgpsa",
  "key20": "5SybyitMAbx5gqNsxcpExhp3tz4JFr4C7gFdENQzkCCiLnzvBZeyActE4SrAShPePuDQDkGLFAYxztnio7UJvUKF",
  "key21": "4PewehGFzzkFuxGpqi1sKKyWFz6q26TeK2cUJhJNJZxTvWHUPk6sc2KRJyu7uAXRzsRaK4HgWR4sqrVXw3Pt5Ciq",
  "key22": "3d3wbo78maP15zwtC64i1GhxSXdf9oYjreJ3irMwytb3vsjsNr7QgzSEoUmUpvGxTtPpNLLDxuWwizJ8ZSpzpnjv",
  "key23": "2CWU658PEVbKv7gWayVYRDrxiUYHRbtoHYX2GAaU3GFfVZ9uLfb26Rer1wvQa1EGvuZFMsN3PnxxNFjeMtmburFx",
  "key24": "92nnDyVcqewddWu5iHipwdsfhirCTtLe6QdYEYKwnVR7r7teosSbkvmgNZCKYwgNets7hecsMk9ewssvguvE9zy",
  "key25": "2iee8DQo7u3SkxzY2GxZuLn6JUzTDiVfp398STMqeLxDzNgPdbgXzPJKk4a4umnqsFiCw1dJVAM198SBzVUswmFn",
  "key26": "4cPDzckt9hHhhfc7VzUptteWyndLPxtbxJT6gQ1rLioHicvMqigQaVMMWxtzwFFPWzinJo8LRkzLXmmKnvkpyswn",
  "key27": "r8jhfX2s6c6EKaVx5gSfs5aM17HTyVbp4P5aXHHqnCvK8Gnn2LtPiUcoDhGkFi7EBreMLe4A6MqXnTJojwAiHdm",
  "key28": "XBzBLervdCCeGu1E5gFQZYEZ8cKM2ub3DR1T6wVL6q32B55h1sNfj1oKiaXJ5ugXCPRdiRrMhNDnrRFQBKakgp8",
  "key29": "671vLNSqZxtk3gMKEQaGnMfTZ9fASkuzGx5iXukEat5uSJxutnQmZLcmT58jHM8JS9qgHWhhJNvPfRdqBiT7F84A",
  "key30": "5R1hB1DS5vuk6w74U77WVnX83Dr9RkEjGmNwnWiXEnV8ThgijmXB28eDMHCh15hgs3TD13hegVymcEBmZs1zMAKr",
  "key31": "3ALJ4ddhaSYRdELH6Xg3nxVVm4Hfnxfp9YMuo67fApK5HPTubxEufCEwAy3abiLdiitAmPkdb8iuoHeBxovdDLKr",
  "key32": "4ZgpoJcbH2oRH3CPS9CQzavideWH4HN3BJsjNRjvUKfPVGoyAcqP3iovyVUZyqpQ2AWdQxViXbjYXPZsyGjWwR34",
  "key33": "zFPcyMG68dkeCBDy2WaZ4CozbSkygbVytmchBYmo5hkycbUvUXdRBEAvf8uuw687MkSKSvotYeRxNwJWema6TkD",
  "key34": "3ZaVCUKTimrWmCvvs45eKGart94va1LeAX6eKUiPyJLfkGStfa6Go6Y1GKbn3k3CB14AvTr1ZXYBp4aij1B237Ho",
  "key35": "56qD3dVPct3g3SaPNFDMPRTvAF3aCdSHUVMFv2bFmuEuFjc2Cd9jM3XpZ49qmus5kBkd7aoUqzuj9UnHY8sCcqXa",
  "key36": "5WfqsL1QbeLLwJWq25S4Luv9TC3DXmmZYyAPX9H2TGtwpvJTBG4xS99ieJT2sZpJSwPQ5GvgcSEryHxbu9XnFHNU",
  "key37": "48ig1tABPSQS2GzKnHQz2w4peLV8278BJ5Gva2DAhaNe3gD47973QUFaByAHvSoBo6kcd1W6Q9HB1EXir7yAY6D3",
  "key38": "35uiADho6CzLtCfVu9Py33HNBH8zhT2mQ2N4PACnESWyP1V7pudpiCF8jH97MKn6Q3rdUMRmFYYJZuTHS7gaCz6",
  "key39": "3RcbgcR5mVyxidhw7qWyRG6fZvuFxdpLExoFFESjAmtDGSASQeoSiznGWLYnYJQXNgYCxC7z3njC6DtVxL4V4t3z",
  "key40": "46Ga2Ej4zv8Qg9J7e1UBcgktQKUr91qYBJv7y6tfFVnEm31A3LqsLB2xmacvJh9LUiciKJRaUhYozqyvAKni6N97",
  "key41": "4166P49PjWcKNCyjHo3qGVMenWKo1rF1v4csQcMfXCgj5RViyn5P81vPWpq559BddmrCnQ8VDLM25aNjDFZfcBGC",
  "key42": "5ceH6yQZy93KRWj7BMpfQMqh8owUeYsCdwtD1VGVufjK4qcAZmtYmiDYGjPo6XhaBD2bwAevt3da5yHHN1bUfAX9",
  "key43": "32Eo3MZ5N4AMuHwTeUpHWqyzKbZnwKcywBCSkNo97JLytW6QqopqdHp856vQNLJ8VRZSKhXSibsCjyLc2ZEZTPUH",
  "key44": "9Ntk91vRRWF2FJupaoP81cLhJYpfXh6a3wXdA5ZKCYYhcYQ6MrTdy9ahmcr69dVmTVha83Sg7gteRfC5WaFgkRT"
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
