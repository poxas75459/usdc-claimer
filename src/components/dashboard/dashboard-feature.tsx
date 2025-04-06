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
    "aGWuQc5J4Ew5WiJCsc2kLUHoxMPhFNtcm7dWhMJWgiTeFUpPtLXZxmB1unShWL6MTCtmshpepudVYseKRC2X25U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L76t8oWdtTuAdoK3gofqc7R9dmRjBRfqR5g2n7PcE2zv6tuGiGjtXxUr4TVriea12JAFzPsNXcQsPKcWYB2o4Cy",
  "key1": "27gBa6BA9GitsRxtYR2hj9qgwYWxtmY9goPRXbffJzQgZnLFCvHoj3wWmydfp5jztfUwbXwkPfcQDfLkk6iNLDb4",
  "key2": "2hstMdLGB96dK877cVLhRCSnUpkNJniRK2wQahQVkYbTHHfe697QPaRPdPygjVJEDieAURxnxXAEL7XULupxgrM7",
  "key3": "oXrAsYm5bLSuH9Y6LrbZdqyTi8niGtVsBJpUaFAwtFxGdarkskkUGEj7HxKjkqcJsU5MtZP9YQHBox7BTZfyFJv",
  "key4": "4AtP7sguCndLN8gdRphe5WVLduBA25dAFCYTJf91YWCa8cDuP2zdHh4kMKG3qLLCatTBFqVmFY9XtYkDYyymim6i",
  "key5": "2hTJtFYZSLRAdFGuZfFL2qW6PcD1KDHmDmhamU9k1tdr3AHk1iHf5kT76X13R2JmCidvaZ5uzVeZBizKHZScr3je",
  "key6": "5E8bzHyQ7KwEcWiap2JvCkEHnmEWru93zEZ3DwjYuxKVuMdvH2sU4NwbCSERL8sSTkEXB3PmrLXEHdH1oKdDfiLn",
  "key7": "3ASj3z9sbgJS5nNPEvdLL7keMLicJ7z3VLen5Qhx6hErDsL4EvuLcJ6DY4bYUXmLDD8Ab1EzXQLHFnut3ZBsZqDf",
  "key8": "mUiEGsE6zER8ZDUgm3zhFh3YJNN6UCr5RoFFSRULwp3vgmEABdE26x3Wtf6ghwuRNHTKDSqHNEzp5JDkXB1rpTX",
  "key9": "4ZnMQMepdhAmJEjFmW2zf18hUe2pwgepxTf6vXggqK1nBzymXCpE63XkQpqEBoEJEVEqx2uQFrD6Sq5JVSwmh92V",
  "key10": "4fvwU6u8cJF6k7pafexRuitG4BnnxkPnPEgspGjxagJ4R1ro1vakcQhfRZTaSCiH4Sj9LEbCN2PaYY74nb5eF2i",
  "key11": "3are2eTJtS8pdmGXs6RNSekz727pDDeUf9DePqrf6SFVie2p1U58qwMtirBTXy8kXccGCRYHA6vNothpsXtriCw7",
  "key12": "2KXbekfLv7KwaVQ3UghJV8bQUnjwVTHFWanK1nQbEsNmo4j2FheMqEemBcs3L1q2D2gNbTAMj3QraYqQxJbDEgGr",
  "key13": "4dSjnpSBXxKb9RwYngtWoK1WKbTNrkBY7DEnw7vUbUnADwgF5t7LiTNnxVCwRVMEUTnax6zhsJBVZynLuufaWdv1",
  "key14": "3WKprpaYmCacL2DfptaBkqGEZKZE4Dr9AVvmPB3Mehc5kWxCWbfa9roeKboax839rr32Ncka3y9BReimzvkMZvUN",
  "key15": "2SYXuBHqsxaZtzUmXjWuoiHJxpnnWM7PacEqJZ5GwChyd4bJPVPgDFD61aWg4yEm19gpTBkydMseduAUqGh4gvta",
  "key16": "46CtC1MgQzRhZbmojSVzJP5ny2v4JuL6uNzGcDrzDw5XV4c6rBgPD52UiwNFCpsj1vXzRH1JgNiwoKTxVAx9HWSu",
  "key17": "S6XAxNWrmTS2Ad8C7iYNomkrioZbzzsjZtFyu3doYwX41niiTCMCww1Gg8ynCosKuZRaZ8KqZF6rhLkAg2TceoR",
  "key18": "3R6HHA5L3f2785tJL5afcRewSFhBD9zivoBnPaDrZipYvU9Wyyb4tC1avEdnyvJU2yHzJ7WDcDAYkNXkCkwGnpEZ",
  "key19": "4KxR99FY1Xb3H1V1SrdaLooVRyrZigqd7d6RbctfeaGXaFzTBmKesvaRmtNfgXGrTKyjj9dcpoceYTSVqctfd3Zw",
  "key20": "48owQEyf4WdCmcsNengqhuAyDo8zYvsfbvgg2L3536Kbz5azKWxUy8G5coQSrjQuyJ9DjqLZn7tjpzLn3pBgns9n",
  "key21": "5Ahqn9Ci5YcFYTc8czZebmzbQhRwhDn4WCNPFscvgjwc9jgMB4QabKNUkmZAatKiSKecPEPJrZdczTtCmtEbDUc5",
  "key22": "2eYawF9bHZv7CR4m7z4rvRTkYJHWUcvZFgkoVVSRNf1K91o6NvQRrihnAdfTtxqx34u71RxKoh8oQyNk4EbBxsKE",
  "key23": "jLPBHJnLiv1YiBAs2yaPVKCd6iFo9HFLf6gUtxuhsF5dnt2iVLyyEfagTrhZxfWZPxTsjGb73ZYm9feGQGV9ta3",
  "key24": "3bnG4uHphK9WVNUT2r5Js1uaBHSey5yHdRTwbkLuo7vifBLf92AGkwdXnUgoo1o9MnDWCChH2RnA7sKUiFbpDkiz",
  "key25": "44MdpbRAAS8cSHprd615ZLJKLiuzmgEUANKNP6k8dcioUYB5PqmMLx5p8WbvgidAKzZFhMeVAozd1bikThhBDh65",
  "key26": "5dpMDydd7THX7ik5KiUhsqoSSzWktCzERaRUvn8M24CfbbEdKoyvHoJq5yxBsg4upmB8LuXS8EHWDUiPkWVEchjo",
  "key27": "5UBezwhM1xLy4jZDhwkDyXtitTNpvmHEAe1M5bWgSJ9Jqc5Yrb9fJSu6L7U89UJbAktk4Fy3TvpdCeMjLAqwcXs9",
  "key28": "5ipSonwpXcmtUdMuY3g11jy3RmoYYLXEP2GXRACTF6HDr8VScfx4hCFeFd7A7L7sQaakFpdmw7SCLdA67S9GvUPd",
  "key29": "61hFZwMHUCctCgiXYUN3ggZ2D3EP1g3Gcu2Rzn4mfvYEJ8Yr6vbq6ct4DTTPKsjEVHyZxwhXzGSxPm8ryax484VG",
  "key30": "3DWBc3uc3Nu3v8fVARsopFzWTWqUrtb9ynoH57Php9JdE6SykyTnPY5816HY8ixBdVL9WmN2jPvaPSUQWjgaEc8c",
  "key31": "3v7K6LXVZFH1fmEAkvhasm2dn3b98TEyuRaBBFr4sFHUpdhGS7EkYCE8LW7EPsZUy9H35Txyp32jcYGG8DrgxFU5",
  "key32": "2F6B3Stj8wGdvXRc3HsXRQAnKKLzw6oFfujvRhceXsn8yyRxT65pJ3jUgXCxEHBsNsEBL8hJpwZEHMw5rRFwwWRS",
  "key33": "24QGZopGjLF5MP6x5R5uASXQm8Ajy2SmxGrrYDeUohwaWr9SixzXQGQsWP8Gzwq3vGtKt3HYr5mGeDWMXm7tB9Ds",
  "key34": "2CGLZ6R7zhUTmDg2bfdzxHFSgDGAPshcUd8Tezt6WBazEzVu6hH5kKRq8pkRSe2ZSE1ZVsJoa2kSMeFXmf2ovA49",
  "key35": "3B6wLohT72X4kdfZ6JdN78yZHZufShiDmMtAUzM51HP2Ro5BMiLr71J73bSsm8bJFK8LqoibaziDJ9oXsnWkoHNC",
  "key36": "4CRcafhqiSZihhMaMmGCfjk9W6wgYF2Q4JYuEQUMtbHafiJK2WDWRVwbp6LaaXYAbp9BU3yCt1rYeWcg9FbG6BaE",
  "key37": "3z5b2NJCMwer8w5JjNEL6LYW4tWdHNrGhMuwixyJ8iTrAybE9rcJifg6M6u38xqnVmN3T2AhMpEB7k6RJ1UitSfw",
  "key38": "4xktHCKNF3aYkZgH5HC36n9uDS4WkSrZZ8UdgBHKSuxsD5nZBjZdQ5gqtYLgXjSf3e9BAVQ1X8MDBEDUtDPRC5vF",
  "key39": "MWMUGrnbv8GZ2k5hbhqa9LWAQWKbvwHfzKATF4wFz3QHb7RUNNxvsoHjqukDWo6V1jiDva2hUWZfx9J3t5PvLJe",
  "key40": "xVwNCbuqYFMvrKL8gEoDRVuoiGUG1ikMVSCgA6qyhrg4skUk783mBemN94WEvFqvaK6aMT8ojVaKPv7XqbgNBVr",
  "key41": "5MvuxtBe6P5JjD3Hn6mYYLcNSyhCqxNqUwMx69bdEYqHFoM8NvjuYgeKjZHySQRxrNLE8J4GnhcH2Fnihym8tmSD",
  "key42": "5rQHnGLLkLwJEKEwgEVKF7ZrqUaipLFf7bRmKvzgcY4WA7qGzH4W9gEmNkqQfhQy8LPf1Y1mBbrunvFFRc4jrggE",
  "key43": "5TDWFEqvmQrf5LPMQmKoW9wyybDpz1VVPfzFhwVTLLpw6gC1cCZVch8TSkUh21X7Qmm4CxgAnQWuiRc4bd5DjmRA",
  "key44": "3ECqfrJCEKv7fzhMgPDid4vFwV1f5ysfE5acqToGCsf7NJGNPdWFowJFJsQnackr55Jwgfk6LN8xsoSqnMpPFqMB",
  "key45": "26kJA7cm2VjpXiiX8cnAca49K59JLUmGh9EfYxJpNMJBbqy2qcvH16QsaLtuXwzQWqQjBbc3h2fYksgUfKSVZ645",
  "key46": "3AQhCTo1imLe9FZoLGHBEvpeTEudViozKtrhaPep6nwu3uzXSoLBe6nMBcxKjXX3mNUxmLH4Pfy3Rcv8R6b4QHQZ",
  "key47": "4BZyc3P7FQ6kXcVBfVotmDStu4H1eufWFrtcraLj53cK1K1DGehYTCW6YytZ9HigDajvo51PyPHBPBkoxMpxMtF7",
  "key48": "3hAPwzi9TS1pz4rSZqMyg1weKLjhHhUoBTowiLmxaDBnGJnJJCP2s6mSVkirbaahWDjqc4YwfMcmvG5WFoffLH58",
  "key49": "4Xd5GYSgbc6CRWTde7irQfZqyaa5816kM39fSvd9B17JCRb1pf1B29PnuSYfY5R2NibxoD86e2ov6gqLCMWT4UeD"
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
