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
    "5KHRpX832yw1mL7BUQ98r4yusJQiJ14G9uMvemCR6cYKa5J8kbYbshJSpVAaDS3jr4C3uuXuaTNx99FS443WW2BC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oaxevphT7k2G42eAMicR6SzCvCNqAtpt1KPSwoGd3FWdVqZi7aNGTnd7vs3XPngyi8E4MB7PionpcmHJpFXyUXS",
  "key1": "2rtFBg8yVadw2Ek4a8ESKQXKJMPifJLJn8FGbVgRPaSokWFFGrZkLGxAt3X5B8AFDESXdbBCWb6kNDSxEweQjj9Y",
  "key2": "5Fp6yiuF7qamNfFrRdNEnmVZkWfxdUjCsToKK4h3L8en3GCWozmGNDhWPKaChriT2FKP41ug9WATZBtAdFZFC88u",
  "key3": "mmK87faY3EM8x99Yng4z5aWZEHRvUT3yztF2K3yLWRLUAwPBd9jfYivVxgkn1ngR5ijGLsPpWEoHYk6JxCg23Ms",
  "key4": "ZzpKy6QYKRhXHxfGQWPcyiwHsx8MSBB1AFmzQ9i4UndRFW4i62yxpwPVdPmk2RgdtqCtSJvmr2kkuhrqB2jUhX7",
  "key5": "8Zu1BDYCGZZY4EJ8CdSSEeyReEUNF6LadTw4ouFeoPvTiKVAorD5R4tCaM21dj588ZYSYxrrYvj18xAy2Z9i5vb",
  "key6": "2aeprA3JwPWmC68EXKThCvftuM9SEsbAcWKp8Wbc755m2a4sQbNNXegux2X8Ti5tpj5gdoYRHeBvec8aeLYN1mdb",
  "key7": "5y4BYqnq1516dczEyX4FWxEu4GZ5nzwpB6SMWToTBrsmWKt2CetkX3apifcrcDaAaKCHZF41bmNgXipVUwwvNbzL",
  "key8": "2g55T9GMSCdARAsgYFnJww3LkF7btDTzLx59e26YhXC2NThSJgcWjyHQjvQB4tVQjSEyQkMZiMPBSzH1zLuGxest",
  "key9": "HJbXRePx7Bs5QYQKR7nttWEEzwwR5e6etvvoUjGMYwAgJmFgGHNaSvCza54ssYectKnZcb7Uipf1zdLLRZZ8q6n",
  "key10": "2i736CxrKdUTZE2Qwu3V7n7Gc6RKxW8XCy2Pf4KxRju5LrcPCxsTctRee8Cf44GNF5963jZTWciJq57xV89cNVtk",
  "key11": "2NUe4yXZzg1KJtb6ehWLNPJYxWUAo5cu46v32czYFSHQo1EX9DRWArbeVYFwLLLPVkzZuU86refsafG8S7HM6JQD",
  "key12": "54cKDUqRxVAUNc9vbgqMV2qwGaKsZvsWeUZXdwm9NQuDdWNtz45hnKiZmJMwfeZFNSsLkfmT4kPLxRxTsdBjS53a",
  "key13": "3MFQkUGWYrFqsd8z7njYMksbe1SAyvdy4JMrGbwFyRy93xJycNydHwjhCPDFge8mhRU6DCXKNCQXeaJpWC6NRbMB",
  "key14": "3JaCUNH7Ha3knBRyPF3dGGufxS5zmXykwvHu5zXgUdC4JhG4N9UALBQCwDywzuupsaZ8i1NxHrFQqqEVBgcEwkNX",
  "key15": "4dScsrNgurnf2AMhcHPi7aywNhrHydsLaQ2BC6tgUwfyWDNRogsDHveH1n5UktveeTe4i7j4SA1BqJgA6eYWYQWN",
  "key16": "3ndV9TEmHSsqyMQSJ5xZmH3XGNbchyD9ha6r9QF5RN8jyd44knFNN9NwLeemwwcUv6WmSWV3NnYFRKqrEo6SSTgF",
  "key17": "3XWsQJhiKP9ykr56TR9USR9YEDesnxS6GDFUFXCQVawDNwkeguDJ7qtUsFwiaDEX5hzfDDJevEp2VAwHCETfG1db",
  "key18": "vaBhFTgCeiB5VjoHjHjhpYQq39KJuGGjU6DhmmgHuUb9L1EDVDRhb1mxvZwrdwdzEoFCaKmQrVNRmBXiDdJzsG6",
  "key19": "4vhE8ddiE2AaEvj43pBFt89cxbNamQ2tCvK8pXTBeA59aK7LyeuKz8MhiFJrUQqb8XGwdARHuef67zao69q6nWdN",
  "key20": "3Um5qKwSBUd1CiadZ49jUnnkNNi1Xpq9b3jEAU4Yo6zQwMcpTmtimXu4aYqLj7WhMA6XGsGRVHmmnVyCk3ikDKaR",
  "key21": "62V2WZmQ5xHtnEUszxkq8sUQjuXbnEjEzvRHEwDfE2NHJMNCvQwKWG1HegWeByeBoXKmhd3K4jgRbMoMxseHzn16",
  "key22": "5iXyeBkKru73ivVKSutbTLhTaycuN55WtxwZGvem7JCWtnaVPmNsG1FM6N7FzWq9Ea3wgmJVCSnP2gbrawPGk17C",
  "key23": "VjQ17CawLDUYnxQ4mYJQjkogD3z9kL8ss9bJyDg65jgYUkRrejK24zfY9Hr5KLvda8PBRRgC1APzcmzchY9VdHq",
  "key24": "44J9mNo8HERtfHvFAwVfJRPp4tdbbsxbeiR5X6dxPvFTfeGtZf6XYXp9ktR4jkSWGG6SPURg4qEoPwJexkgampKM",
  "key25": "3DnE6EkQv5aTQdSK5CjPW482szLAQYdZLNtQ6vg4H9TqiBvh6pKkDkmgoTBsN42GKwDsiPEUr8DAbcnk7hnUPbE1",
  "key26": "3Ua817XQRV1iPnZYHLyLjB9iWrs7u3xVbLBaprJinpCpDrhVMMznpv95bLy66D5gUspJdywvYz4NmAwq6VPDxxmz",
  "key27": "3UNBacg5mUMBKfm4yF66qT8HBbA9dEKiNKo5Wvy4qdA6SXhcRKasLmec9A7eBdA8wFX4fBVphAWwUPFFEueZY7WJ",
  "key28": "sARPntDCtq6rAGLUGVfz3Yw2YEuyejutcfUZvHMeY2bxQZQZhdkTHokaWkMZVsqpE2HeFBvTmJtCkcNaEXkxQxp",
  "key29": "q1RfqpSF5sxqTZfiJCudG1CiqFq9WEHKMzwj3LSExvnZQGdEwsyUQyDgUpA77ueUYZdrdmbqwSiyuJP8xoQbN3k",
  "key30": "2VLHkdu3zsf45W3J4kc6bNpvkvB31qE3k5PjkaVozkJ97RB8d9nioJFGaDnaZkFzZHYHNGzt8AQPM4Lm9NpD273V",
  "key31": "5L5xHPoGEiCVgKaKLQ9FTKg2dFoNaBjiBspBTi18NvLsQBy9L3SRALvi1J29gHyLDRt97niKjYxJkcXDyPVey3iL",
  "key32": "4MnUgTQnuRz7T8XBLtvWQuPpX8prPn4jbbHXPq4EW1a9sFnzrEhbZJq8438Mzacu3mfeiobdhbQ3zgNfYYLv3hKC",
  "key33": "57zZDe3RktgsowzhTZWEY21DHagsfkwF8sCG8CiQ4L4YfV2okgMrojiEV6SQ5bgD3Vo4VaoRRXEJNsRzJsqFSBLU",
  "key34": "4YEVTcriBj62j6axwpo9zerJJ6hyYYrhw8NmgPtqLxWxt1odqxzkAeoSVx6xx4Vxy52rd9ADfYxVKue5UTMTP81p",
  "key35": "2H69vTx5y32kAu8NnVWHKZXwT8MHsnQSyUsGMSgLDdBvrAvxh23QYaofchpgV6NCR22VYM9Xversj3gZjzhkRyw3",
  "key36": "2TxKjC14TD5pQBpvBCLnwPCcKTPjZA8dup8sSJN8vTvKYofQkwUDqx2xkfSmRcXMuWWYJqdvo1KwJwrRo3bhSQnu",
  "key37": "uij5Bf5PvjDG6evKpr2myKcW6xyc834bHTZ3vmhE5yFqEHqDQYnG5mRuGqrEoytTPSqq76K4F6uWNAEg6EoL2sM",
  "key38": "DCNpz4UXwXtHiCJwkjJbJmRDXfkP3ahZPYbmsvo5cMYTC6zGo3J4NtxyJF2teM1BKC4cr7LNojXkUBj2huFA8v8",
  "key39": "3g5gkUayLr43Td3c295bfeyq9VcMzqqf7EE29yAURNe1PmC728fqRxWJq3EK7M2ydDTXCmxTf1bTrR55x7st4YHZ",
  "key40": "CepRD8rAcZCv99Jjur8xkLkVD6GeA6cPDDXmvocTztXk9rnXSgJGw3C6zRydUiByGaV1vmeXnoBRkf5chNwFCtk",
  "key41": "5NPPkYwuMWhm9utXp4JtyqVR3muGXfndWocbpxDyfjFikqYfceKYHiej7kwCrPFe635MpgPuXVTnsGa8Gzz2xgGn",
  "key42": "4nmJP2ZNbAkTm3BxhnEBihbtRzcoECkS6fPKEv2UDgoXUUTsVAdAxJusqbfBm3onKy6KTxTnt15f9Kjsm5cEDZeH",
  "key43": "2WK3vczBey4RZCuqgNcRyEz4ipJ7SGpY19wgWjXEBLb4tWF6Bbb8wpDKSKdihAMWy8Bv4JfvUSsFmWYwgothbVhW",
  "key44": "4Bm8AsVqB28AgAJc4vRz4kC8VGtoYBv548SoW6QYY6vDX1BYPPJidDbDGZR8HM8rjXH2SZG4aff5HDxkcXEjmLho",
  "key45": "3G4ayApBfyznQQHkbpGLtX2esicUmwkpychBjfJ3hrYyF9k9as2Wbt9wgmCd9T1qqGyq47fe2nYP9LdVF9VCN94G"
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
