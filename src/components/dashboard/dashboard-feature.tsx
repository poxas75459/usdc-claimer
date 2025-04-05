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
    "JduEb1k9uHMjtJujih7UQym82hBpuf79G9bZs5tMgFRwX1BoTw2CSKpNihqM7i6YExwfiegVcZpA8qPW97d9gEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XFCVDefnuEUaT1XLP4VjrYk5nnWDG9kYBtyUwFHsJc1xW6yB6tNgbAGdxvBGq5t2NctEUAcjj6a6ihLKzSDp8ft",
  "key1": "4xByUFFn7XjZC3zZ87Lza8hoRFjCij1M8hK9Wju884nuWpJuQMqXw3YMBeKANe7VJFCykxuMtPScDbbp2LSvttEm",
  "key2": "26AvjrfMzJuBUYbmiw5m5usU8bEFFtpShxJeXVxXQ26m6DQazjC8ET2YrUkQ7V5dqpEPivE9XNnaAzXqNhy7oywQ",
  "key3": "2H5ovhzoFKifTg8n7nxZyNSn75yki83Qi3158FLz516vM6Adc34UHeWUikDPm6RNt4Rrjf4ZmDoFFXLvnBVmstBH",
  "key4": "yZRirD4ticzz4WXbn7Y3EpG6PcnAaS2xcv97Fz7x3guycaa9UTawtXiMrpgs1A19QD2xhjcCi4NAB3d1GrFJncX",
  "key5": "4eH7V9vyZ6WXFheVK5bFjmX4E2gZUJSGNUU1Bfdvfq8kRQcoHsWj31Cq3mL3XRrk83VPPGs388a4jgsd5G2xuS83",
  "key6": "5BrXJbWQxr7A29LPAek9H2PNNVs7AhMAtwgWERR3eheFph6pD5Ncn8QR2QGED2PgNXMhNL91EVU72uKYe8zvecBs",
  "key7": "5WLgajADTCMm1SXL2VJ3zMBxxWRpNrPW78EfeH38q4dq6qFmkE2cnHFD7UbpoN2zJAFjSaNSHMwzwXCvDcKC6jN5",
  "key8": "4oc89i2xouVHz77qukvHQdPsQntst9Vhu64xqxXqySnstw4msoyo2Ze7n9WAoYa2YkfsA6fv3mQLxY3AxNyivJXK",
  "key9": "2RjVsGnGGqEuFoqpVMe1MzSx8p9n1F3WDCAoyjxi1LZaFJTxR6LxWfc6hzzm3mL4CxFJyD8cqdYqoHQ3o7PrQBL6",
  "key10": "3pFoSX7X9cidX6sXiqQwQbvyLBRo16NmFEGSTuoznoSiKSRZ3W9KdwN3jyKksEVVGbbCbQbNX5KPdD6YCseFoqmD",
  "key11": "J84n7LbeBjvHBUVfqHaawWuySf1H5gfstzwPLokMrLkbKgqdsGX9gBDZJVmHKSaQKdwkk3XvjxLakZdNKddSGsj",
  "key12": "5UsRp6ktyuETysDWJoHbU7dHJxK8dEqMSxbWsyBjngeXS8dcGd5u2pyVArzYNeAs8jSyc5PXAZ3Fbbwo2przpSMC",
  "key13": "5jRT3gDUYGCovGf7c6Tc42sjNDb7XbV9sydfrfJ5HRDDb3P4qLZPeAHwdNJgfNuNk7ZZCTp2oau7FoQ8s6pE6exG",
  "key14": "4ewobd9AQ6YqsVg4F7YHE5YvUGkiKTZYgptcgX7qufJzcTH3vumrkPkxNPjAf8eybN5McbK5ybS3Fb7dqhFZBfRA",
  "key15": "5n2K9A8YLkXVxCLHqCwYam3MnxYoVmz4fVnxX9vMMkab9JsZpRpHiBmtw7k3Fe2cv3auY8nhURh73jFfvNUXGY5t",
  "key16": "5F53fBu8YaRT6AbAmtqTE5CT9tTBrk5a5ghT1khEasm2mjP84kNRdbPEkazVgLqtMC8ov4V8CjyEW7JRYohkEfLN",
  "key17": "zjVQdneLcrZmxkUUPZg1p43awykDtQExTmnUSEz8P2SjXeqiZBKrdCn6ttAiBJep4DvLnU6tmpjk9R7aXQ9ZyBA",
  "key18": "2TvNa61NaG78odQvJCugTEmwspia7YUreWTgqSDP4etz64FW2q3uzfqMYES7rusdpSa88w52PHvQpTkyhgUNZuPK",
  "key19": "2fWY1KJWLFirBMcNC4dtYv5RKeH6gAq5HAHYQb33GKoLZaePTWFdBfgFcXCJefJ24gW5USNaLQLwzmRuygXpucyQ",
  "key20": "5mhC1Jc6XLunkADy9RpzqNLJyMYiW4jNySkmNGjRQDJ3PC3E15nMtrnsVkzdDa8jgW1G55JQ5ZBAH6ikX7ENiRPw",
  "key21": "3H3XtHpUgMay38L6Yjni48tqNhaFcfg4vLZyGJioam5tG2UAKgAPTkzKpamGkwoRrE4y7SGvBLWrfn2pCPFiJQPD",
  "key22": "4ouGA14oCQfnPfvFbv48x1SyWekY3WnF4Bdccz7Yq1sFPyC4qXHypitD3iLBHM21skjSAHnXcgCZvDsRPAcjRJTS",
  "key23": "3rEUPJR4iC65mcLxxP1vqhNiqNXoj8MzsXxzNPGbY5QzA87qo8asTFJkoQFzARFrmsWsdrZkMnf8fXa54MwjTMQ8",
  "key24": "ZwuFboVDuTtHsYYhcNTUcqHz1egkFAyEnTHaJsQmHscQrJEpdLp99nTmka7SioYJS5DKH1L58WQxhYhPKr7Ki42",
  "key25": "5AkGC64J38RX9QVjkhGKQ2C7DyfCfJ5Wdmr144TNn1EuxzoVZphH4kGiP3VLYs1hRJuUeKHA8UNam1FQtkGRMkwK",
  "key26": "5aLyWXDJUQhW5TmEzbaFjeADjs2W49FmcswSKGdxBATAgSR77yF5tEYhNEEhk4tPmjuVUkJsbwDvMAvZnPpc24yU",
  "key27": "2zFC3b31cLs54HZYRvd94X9MSj1CoQqHshcddTL3LfyDr2zG4b426wUWMAtPAjBo2YtrqefJaupjjvSYcQB6iq9R",
  "key28": "mkmsy9N6wT5eY3GiMFi1N42PZqkeh1Ui7pLnVvc2KbngcrYAZEMch9KRfzpSHxhasv2k6RiDjrRXcKeKNCwkxjk",
  "key29": "ZZ4cJg96FmnxKsoKrYLzDzm66Q3f9AhCJPLfRkKQorNNMev1Uem2xWfizVBhHMeQVupR8dVKuW4oPCuTroQFAox",
  "key30": "66tAJSfdxM9sCku917whrkDMU5GtyFzDKW8y4YZP1hdr5u6wh7d1ynvJNpnUqRibi9Ly9dSqvFTga1SEEx5qYybi",
  "key31": "3ZzFiwh4rAnbKsqv8DZAbWot3rFjPsMgm8LdBPsN1YkKziE4vRoTXWVj3xA1D914dNojjRcykqX9QvUADmixmqw1",
  "key32": "2KSTiTvVHL5JM2zVgdPJujdzQYfv22qRD68EuwhaXXEpPzvXmCBExVbW4VdztxQWUnvN4ffaDvKMnBjnKv6b8v1t",
  "key33": "zAmRGNYn5CHf4HcVpKj1zJt6CCUEZ5i6LcGqj9J9krdPfD2SRbzWNoUhwmjWZYT4VaNFevjgw58H9gPbLpPiSWn",
  "key34": "3aP7i6JTxmbsrVtHpRBVRkY8wvcyW8uEm6ugF1iQvMwYFmdNEsDfRh2JugUtViWEGomnknTWZV1KMgNq8BYQ3qgf",
  "key35": "2yvXxSCwPsNJSfPyAe8w8KwDRrZRkd9M54jfK7r1wjw4ArdnhpiFeDDXVC2V9cJn5uSwinm6NrmeJgWkf2wSPxQS",
  "key36": "2oVwq9VUDNN3s3pjK8ASV4yhe8LfwwixtMzG26nXsabhACWtfMX4CZWXL1x3YFfwhppNTc9ajSijNFKoGxiF4SXW",
  "key37": "rD1c7yUoNSxt9s7G7u4imxyL9CkCL9Nkd1uFiFysvKtjGgBQ4gChZozsT2wbGKfgSb3CnDv8spsnE84Phmqs7Hz",
  "key38": "2Qzg7u7ZypBEZ7fdVWB1yajUCRV1jWWLWSFegtvBU8qb1qj2LMT2BMd7juTwEtLXPhTZkRKHA64wWtKT3ZFMLL4M",
  "key39": "nupk9jkgQWNYSoZonqN84hRnsapWC7Ed8kSqWWuoXhyy1n1b4HwC8xZCREb9Ab3ZZvKwZrra1szVba9LzYt62mz",
  "key40": "yYg2GAParFZRHVNRef1s1PfN7ksDrstr56jaqn1Gbv37zuWKTsenq4PZhyomojfmKSqskTjG7e9NETApQ65ro7u",
  "key41": "3F9JbrEXFRuc5aLzQRHQGeVruRmWCyHgzNJJX2qP79TdRhsiri6Wa73E2fNdMSLkbYpWHrpPEjxguTMeZU3PCtW7",
  "key42": "3F2FZ846G8HmXBCNLbGhwA5kpVMimYb6PUV7j4Aa3tsySFMmttHrj1tmQva88wUe7cDZhKf1Pc6c9dTEcFBzG1Qf",
  "key43": "2kLqKscTNSntuDQuyXWFyRYb1cpWhDa4kUF6RG8HsPXqjTPvyMPKdgNRKWRRVwjF7fKFTDvoVdEDAHdK4xkr1fQT",
  "key44": "261NSnXDtmySSbDj2Evd21kPDdBcdUnJp1G5zdmJGgSqen2vfacKcmnDs3ZWBUiTtirrGvqtTnjN3DE4wKBMudY3",
  "key45": "2jssZXtoqLtjQxfNvmou9zJRFRRss9xSKh2KxiyXgFq3hx8VuRfaP4GsT9vEBNbUEtpZDYEyRJecwbzCe5YaRBRu",
  "key46": "2f4zs8cC5SgDZVCe5rET8ehvD4MgNe9irfY8f3qKA1S35EuZXK18DtmXaE3X7Jg3iNsPef8HDuuMCtfSKQZEWBFX",
  "key47": "4oadKZEikZiijXmjvSUub5y4G2ei2RreFWFooH6fFuRA7wfS2shjJTgNc9erjLjSyyYTvTn2qtinYSZ1uLqJXdsh",
  "key48": "5DWs7cmGddE7qzLC9diXDdxWXKyDxeeADBCwsnGb6L217gnc7Zw7bALt2qespUJrQmURu1qs4K31s1KqMGRGV1Qi"
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
