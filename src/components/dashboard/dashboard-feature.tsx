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
    "25k5LhqmMdjQKCAbWdqoRrYnJDJDwZepPUbjeHKW8bfwsUuvHrBPKi97PmoUkHC68Y69vAxfuHrP5CYhvUrJWGGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gESwoES7tCZ79kC1t5iHZ7NHjoqjoVedVtnSix2ZH32S3BykhuQk1BZ1U6ivQZefwebV1C7eyWgrt7wCnNJ4H6Q",
  "key1": "2KEFQ8vpVoXo52NnbocypjVqQXbPzuVz44TeYSvKcpwdbfEMzxafGFE65ZnkJTgejiFXsBwsVKjyLZt2grEkgmXe",
  "key2": "4wmqdQEBrnMtW1C7Uany9ASvyYTR1JY3i4YoJBJyz5dSVgTeJVq2ZoyVfXtrLdFsuv2ZBtktQj15BN89nnyn7B3m",
  "key3": "5RbqrgEsnVKT6X348j8MCBKPN8Z1aiHo8WgwizmcPpqpTvtnWQt3UHcYA7mXAGiJ6TVJBVgerv3QuNqJuDh1WVTS",
  "key4": "iGtA5MaK3B13FXrBUrsjx5FfBLFnbnHSGyCadMwyndfFPXqSqsGA29cYJJopbf76RJ3aYK1UERmcxSSZf9iPuvL",
  "key5": "kCegajJh8CJTMcg9P5GchVR1bt7XgFSXVKE6yt1upLD7rLv5Kc8VSpnZSXHeWgGcjfDdbWJJQRGKnrkmEdL938V",
  "key6": "31wqNAYpo4D6AMDp9EJi5mjWs7b7ikUedsC5evkfBR7brNc8k9PPZjtB9qcxKt5m8947iycUhmwVtZjoxT2jGJE2",
  "key7": "52q5MYzp43zyDqoRhEc7tsFeSzF99crFifYeHD7ExrYvyiS2aLnEwqiRUtYiV5QSraRpjQ9jJhRRttvwKjfrMFnH",
  "key8": "2hC5qp1YUEdkbHcdbg9qx8KuscWQEVz9pBR79A9z6Lu3i9bx2Y8sqUqi1yycGtJQcBih35yCrbpwpf34FeWDTVf5",
  "key9": "2dMJ9HxLmsmi5xN3MjNHr9NFx4x9hxD3qHkL4TGZNaPJYUhdgKzp9jw7ao8wQQe4cHVMptxJgpsz9Geab6FEMrbZ",
  "key10": "5Y3kopRofP4QsKXCXVvjLoFDfZZSqyUNXhPgt7mKXeJSNjcheVopHDdFoxMidFmsNztiF5M5cXrBEfdoqauynzf2",
  "key11": "27a6EQTmpV9E8NbCF3f4BoREwSEHmS1HNuYFuXXAPHmRMzXnL3aMUzG7zfQ2deCyHXJr4bweG3r1XRr5e6aKPCYD",
  "key12": "415Qi8NiPpBS5U45J11egfVGkAWrZpbSCGwv28bjtt8oveeaFagjVYJ4YdwNNKstziggYdxhFG6JmaDFBm5YUxJM",
  "key13": "7ebNvdBTN6wwC4AgzSXjAnyP14cugyGd7CVD6mrbhJYxTiMBDnjsvsF1SoRKydJF4obNB58BYin4Cz3xtm9n4QB",
  "key14": "2Y4QZukhnakdpftyErP8Wo8Z69tjVaGDQqAMwMUeEKA1pR8AUVwZ5BSWErmwMG1e7JktCDc28MKeVz7zqFHRb1Ru",
  "key15": "5tsnTZ4oXDAkRihk24yHsTGM9RTufs4eEzkjU2F1vNmkpo2rq7BUVrJJ1SXzmaGEEfJLmxVVYhtxfy1xta2d8xJC",
  "key16": "ndhWZ83jSZwvGjTyrTHkWLSHoKYUYWRVQtKEUbYpKRDhqmbNnfVrqnaG2YnDvQ3jrTpZWypK225ECxpcECoqT59",
  "key17": "EEsB8zD9HFyQZ7Y3Uyk1Kyx4U6kFvc6rwNFhfR7bESTNHWyEVvKWTCRFjrv8f973pCXxjTiJgysqtTm5EGnrMkK",
  "key18": "5znbEEz2CUkv3ce6axBNbWmL6P7pnfi1vMwYNb19rTEGRwThguEUSXRGu1ZobnZ5gLsM44CE3ngEtzrL1GLwBxbk",
  "key19": "4BGcHeooTefvaKMfNXuAGGsqWxaWVCF9aAkfR4agLqNs5GFEPduqVNmLqqL8kj28K5SqfyNFjNrXZbgwgau3PwPr",
  "key20": "4ACYdrsv1U7Qzg7Qm9qnbi2MNaahWo4mo3dTbfquQjHaebzFsQE5uS8cyAp3QBcwiA1roWTdnn1huXjjEAGnM3vT",
  "key21": "37VkYLEfCKKbHwXF5SX4U3G4qe9ML5kaPpxEaVNgNxdEqjHfkzSb5UAGpEEy56HXXbqLA7aYeLRoQE3mgaAFZfbL",
  "key22": "4SEX4B6uAfP2U4MbyVZF414X1HZS6oRj6AQr1RjbL3pVmvvFcbPUDNm7y9xVFqb7CSoMzQ1TyxaFnbxi15CWhmCB",
  "key23": "2ixWq8LvcBPJYR6rjw4BU2KrBNck9LFbcE3N8ghKNTLPaUMujyQGgUJFa7JZVPNx7ZNge2yeAabakdJg23d9mmvu",
  "key24": "uTwYgMnjPUsRtkjW6TG5DdpsXYB2748jykiPGC2g3D22pSayyoRpyReC3KaqWrBXc34EgSDyYpMvoS1pzEGA94u",
  "key25": "2saes4TTP2aQzHtRSh6BPAaNNtyuvJh219fQyRF5NW5sLotBs1RGSU5fnb151QNTWDDqesURY9L9rKTxpQhV5NoV",
  "key26": "4XEvr6TYQWpjoPuAm6w4UD3dDpsGJhirwB6yKz7KN2gNi9vCKsW8WwTrBpvomvDEpm6vmHHa7MKgrZu5CbzLnUcw",
  "key27": "3MjYg8a4gYnK56YC4MgdGfZ3EGNcywqES1pJtakUaP5ivqXiHJZF6fWXzgVvv1vMs3iJqSv5PBc6jcgAFgwyFgui",
  "key28": "5EPvpJbazaFPJeRz8wy1vrPyvCM8z68puV4JBuHSxCaLQ23LSTCgL5oqqbKr3WmgQxKS5A8v63Vq28TGX8t3xcwX",
  "key29": "2fmHzC7TzVFSJs6nHG5RNGgxVECTwswkrMSSAtgxouyNYHu6WVDyapcC4mwoQ2HVJwgzZyNzSz9BPAUQRxnmW9mu",
  "key30": "61FPUzLiksjDi71A2CD5w2rx4aAxfWXd5QDNEjs6z5AveFJv3FRArsguLeDn1xKQ8f7oPcv6ejKf96vfTGWDdLhE",
  "key31": "bH9EihiCbXwVMRNfXgo4za7jq7j4vRtcV4235qshYj7gwQ7JCjwyEhooBcH4h1GmD1sor7ACvKt2gbFkMkj4rme",
  "key32": "563VBzeV5pCpDHef69iYyiFM3QQdqbnKjkaM6v1o1iWWuJWwrHFzQnTw9xWZRDqFnRosYbkkdcPdSQipsK9kdiyv",
  "key33": "5kixCTZg6j5PJmfJyACVbScKVYhwNj3AkvwxiiKhhVohiXRo3g3SsRzJJtw3gemZ9eEThnFGEsg1saQCT3CBgzED",
  "key34": "5uibMvuhfEppxnEvCUhP9GZ68Rd6sMopNXjsNWcAxv7JwGXXe7AVeV9jG2Zc3J96sCFKupP2d7EYS4VopGxboazy",
  "key35": "2QBMgPWsrGqoJvzcFWuTLSS9mhmXAW9e5nSqr8HyrfV62e4P63FmsTdSP9Lg1vuHFvuSkaa3aqEQF7fJbTvPSSTf",
  "key36": "4x7vsEg1FGRszdsTC5kCx2SLKJLfgTSKXyvWfrFZ9cUiu9vi3cyd1yDYuwekT74hXJAj1Ph4b18whVytx2Q5JWU9",
  "key37": "4Yc3rf86fg84vV4fmrGRjNhxQkgUVkvu4vbJoTz2VtnXfnF9PUUw2UPihE8YzLTogNntdSBG5ovdkMu3EEHBYDmz",
  "key38": "HhUQxEYKtC4usR1mPAtL5YycygDPj2rRgTDh6Tsgm7YscC5b52BgYrwYpSQZMdFj2m15EmSfiKXr3K96jEZXq9Z",
  "key39": "4oNaDjMKBSjgJb4GT4tggjmtNowBfyXgRWXfHTZcL3UuBHXfRiznDXMkh6g13ScNBeTffEnNUEfrfAKJXd3TXMYJ",
  "key40": "3K5tBHyij2ArTcwQbd3R4mnxgk6kwZzQc54mPG1aYW8hVKvdCmDSZZ7uSquL3ppgudvV3ZywfQHCRRuNM7JATqRu",
  "key41": "2Nx1saYeBwt1axJ5X2huZUZMgvHfeFm8mAAMYtYp1L9PM39Ap4KMCKSq68imt3WaakZGzMn64WRscKofxjYZPedy",
  "key42": "4cfhcJg7HsEdFU2yN8iR6EKCpPWyE3Qs9ZbsjEBFRmXX2keq1CsyNMVQDCrDhSszDhTEg7TH4sxxqn3uRXixKHL4",
  "key43": "3GvXadmvMX76q81LKWsgti7AMkDNGcXLSM4Aph3tQ9FDQBqH5ieCTX959MH6ZXcYxecFfob43dDEkdbkUvxpE2kR",
  "key44": "4UQvbB1cgRPfS7SY3nzaP5mxK1vYmXS4bWDt4k1zyVBTKcCGSqLdx2YVFmAwDCvmmCj3bWRA2AhUepvT8y53hTZt",
  "key45": "2JmAWAiiL5QfYRTd5tsuJMG17QBuKgFkSPrxCzKGgRh7qNQwDi291C8QnmdWqk5WnMyZSa6SSuzB68UuRLJ6umYT",
  "key46": "25ER3anAkEAxkaDsk2kNp7HeEwdLXrpfRAoH4cbCrH21ZembjSGRgND1UnrY2qjschP3tfDW2cSTLFrAdmToj2Re"
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
