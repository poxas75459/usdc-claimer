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
    "3zY8gm3aXptCoiqRzDnGHy7St4pTcF8uCrVSmjtdjHFaQh74tRk1zCBxyCHQEnV7LeLP8cfJr9w1PWqX6ahwGiAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jTg7kUr7tngiEbDreS1VZmWs2iicWxHRkpzdQtw8U7XZe2Sq5E6VNxtUQZXXjNemTAWo1XuvxuEmQXWybytCd56",
  "key1": "3dJGYtjsKvu5hRCS85WHnkNK9G4NC8QsZr7YAA8DLSZPtvFVkLWiLDe2EarTneMgiC4Pi8uRrazXqr5TdQ3ZW6nq",
  "key2": "3EbLDMZYk6YUBfRm1rDfzmRDY1NyHwcJnS3oeuPe987v3cALCuVvsm6PbsxX2Fnp8kw62Ekd4tJaufqYJGvbbqZt",
  "key3": "3ThXht2iV1ZVZnwv6psy4T2jZ1pqMux3CVG1jspLycBM4cdqYxxtVKVYJ4Vjkk1ZP2xcXkbyTWuYRhLx72sh5XYw",
  "key4": "2DaLdQC7fCA8jvZ6dKEHmifhStvivbLZKuomy736tgyZYAYJgGGyVCAQ72oaZSmkW8r1GULayDqTAcCPiZUQu1CW",
  "key5": "5QDuTGwkKmaAzNTcnXj52wJ2VaJKPrRbQJFmsYxAav5CwVNRBsC96rHRPqAmfEaXtEHNEypaf5U2AQwgYnAmwaqW",
  "key6": "4QsQwiXp4UCU1kCHpGB6JjRCXUGrGyxvw4Wag16FWGmbuTUNqrNnfscov69Tg9CnAMYXq1U3BxLir5CrywgedGdn",
  "key7": "4Aa4FEVmuPCrFUwoesydnJNY2xEMgvVMmeVZMrv93yb3Rpr7D8gCMYSi7N1fqB9SoustZbdBWjtoRXFW5qjPwnR5",
  "key8": "2Bj4jPPw2oX1Peb3L9QeUA8fLnQfaThmG5eZYL5iM2y3veTsDcw94nnc2QFJJGrT4SSv7H4fapKupEM2w8abdZeg",
  "key9": "3v2hhxm52tLZME1qnBZVpabjUZrnTYJzvdgkUw7e3QyxcSMiCCy2rggjLFXQZ9f9jFjxzbYJdDqwcK4Rs5BZF6pY",
  "key10": "4sX4sKuK9eJYamZJ4YQSN144Tqgb23DeDPNmb1eMPX1v6EH2rVm3LSfRRgYeDviPwgjHGD6c422qDQrUBqfqNCLG",
  "key11": "3uPHeHc24d1yz9WbpAurvnBTzo4WWorWytArShQ2E92e95aRV2B2EwRDZMSiu3Gf61E1bSZE8xieSbqCqEvKdGNa",
  "key12": "34omyB9ZUM4NCaUF8986NVyBchdwsivuiXE9w3N54wVXh4PmvCK4hTocoU2Fj45hPXihjbWyCi19rZmfyLFGToP",
  "key13": "419AecmprcJYvqmqr7j9tLJQ5N9NK6X5qcpYo3z5hUavHV4NysZAwmN1BULSfbYBALBzXquQqa5GGVYUsdaVU7er",
  "key14": "6LHqRCr3SJ4Qd8nLS5vq5yw9aQrMCj99PtN5yaWwZV8vDxuMvfPqrN3aShG2yk2sTzusXqqbGvh8Hwm5paqjXsk",
  "key15": "21ZNNSSRXdFdUuwYKH5iszyRqeJmTTTWFy5nQwvN1o44KtCVkGc32TUkiTvgt4oAF996NN6Xkjs55S7C5PcFuCy2",
  "key16": "V1gGzofZrx9USR6QLKPkZemmFKmZpi4J9NUPzXXx8fcGLbGbNhWWJQ5VAQdjGFobCktESWywxe2TebaYVsNjkNy",
  "key17": "4zdB9i793m8aoPpDUSpAxJnzSMF84aJLmzr3RzQNPmRZBcuJjLVA7du39EMEH5CeB9g8cekkmqso4NgSzNCZM1XD",
  "key18": "fFMoA6SntCV47LSDAwzaavcj5yMLbbkyTaLquib9B1kodns916jea381R6nubRxpweGQezMs18tDtjqJVdwmAH3",
  "key19": "EDNqmTPn2cjfFYMM537vERPjZUg43hYWivotE1Z1oTPfgZY16K5RKwKYUqySz1a3ocKBAEGAnJzdrYsqpgyhdsa",
  "key20": "5n5c78fuPQMhxMWXhQAdb6PhhpcbuRRLoQALovAfKXJVETDkqpiBNQdupQLqegTuMcBRkZF6Gfj4oBJ2VVk8HSRh",
  "key21": "CDaHgJZcqY45g4AvyAnGgESerbJgSkgJus988LLbexQB2ENukqAC8MKLFo54x9ybzVifjb3Tf72KP4bbv5JyL7M",
  "key22": "3dBsDGoJMkifaSGP9JfPu9d7gRMSYFTRrXzgSh8ACxPaZWj8eHvnDcahLNFQMC3oL4UGtMyXEnfGs42b3iAkcPT",
  "key23": "DkMEVRYn1NikRhkhXUDtiT9xusxsNashXcpqndDBy3juEN4Ytq5tHvdqsJ9MAN7ZxsWwqtd4Vgo1N4RRM5hAhBY",
  "key24": "53Cu3VPh8XEgg2HqnF5J8KveygYkSZHt99ZvQRJC6CrqwL93Jup4FqrMbyTWyUDXX4kRnaAU3zfUMuU19SRegNQY",
  "key25": "5LrqSSzdRuwxsM43mFqqs1ki8Db2ev1EZxaRATMyk4PV5hcCR7or3p9qa2igADJvK28KEQFBsi5G3h9Q4k5qUoNQ",
  "key26": "qNDzUKS67Qy3NgJiwRwxEMm8YQRSPFSs6v1Ge1haDiHxKaLYPSTtB1ReE1D97Lp3fbG4S7No1HtR3Jpk2dunoao",
  "key27": "3oztejefLkdSamW9VCMWjhoLXKk2LtY8Km5Q7Y5jKuWgS2LHYLFH7gUkd4xSmmwdNmoMJa6mdoN261f1y8F4KmVk",
  "key28": "5dv5xG99Fbp2S8buT1MN7aHHdGN88JNmjaizvbE93cNLR2XASz24AyPzWjm2NmZLj2FmzEnFeDmeP1U569etwhTy",
  "key29": "5pNsfXA6W8r5HShr7fimKsjbasdf1jzELkvavskHZs8Rh2Ma5EC22c81X5kKSB2Rr4DJbSyPrFVVpRtcPgsMxvb8",
  "key30": "qAjyX1uz5XAkF11gUHvvKCCmxLavxTtdrMGru49beFe6qyG9cvF5wyvzrHwgjMj8iLHYZ5WukZPFhkhERvSiMy5",
  "key31": "KEvsxcJNVaWYQui2rrLQ5zKbaVTBGwncuN8jdkGQVNiCTyQRSEsRipU4hsrpy5eewjsX5RYHsTbQxcRcBpVUneP",
  "key32": "4N3S8s4N6XbvhmbXZEyFCB4FUhpjGr4bQXnvbYXJwUD3BQ7wqR8QGzdFsPFANnLwAeeyK3PpbsBBBaQ1TSz7myT4",
  "key33": "2L42Qg4vv2hxV1UTAA19rCnpuYDpfohSyWiCKtnEWSjT6GqYDQM3wghkoFhEZhR1mTMs2few8DdeP1eBAsAFYswy",
  "key34": "2jpfcsBxiNjyfeCHVyZQA1zRvyeBrXVFodL1197oAhaAgdSbYzWczWUznmEYSPqTa9ESAT3hrH4YELZ7RzAcxaR1",
  "key35": "Aod7CxrPs9kwSJB76CDSe8Ax5AToY7stE5P1q1QU5aun6z638Bg2nBQCc4F4EpTNbYrMxHLyzXpKiq22PQHc9QY",
  "key36": "5hPf736o7HY31qEm34J3uqpjnTy4wADDbtkBcTqFWeNRrRrBjTPkPBWpBmP2X82gwzDTmZg6TAsPg571kFvR9nKD",
  "key37": "4eEFzDFofEo3zGaJtFKewhXSNfvdxUxRkEgmXRsAuSJHVUfcFhJubVnzPYbkkoB1nzcqKmQmKyM3F1kYMxo7c96i",
  "key38": "5LV5eNHh41B31PNyzzWfGJc5LQrL7L3zDouc4H699xgHaBH8Bx56rgTwmwb9JgNVp2V8SDDY8ocjQeHBqno9TS75",
  "key39": "4VdydTP9i3SVs5s2rYLbtYnPK8k8irRdGvbpLSBuerj3QZbYoB6vHYqgcSU85PbURaZLoxxxcpk7XfLV8vrm5hyo",
  "key40": "5mxDNxAV1Nw6z5RgdzV7xm4CmAwNL9nDuA6S9BKpisAWWSUQTCEFx3sg49WBGwMcxCiKH1fgkCRuBG3pjwA83MG8",
  "key41": "QJ6DdSUSV4Cvr4VXvxjrMXe9MiUzdBpdawBhmUKRNv6X6wTZmCBKhXJWtXKTzZZcDRK8W9vzYFq9zhi2NGBTC7b",
  "key42": "Qf6WrdLM7XZvCFB3CNrAbAa8nfskLSG7w24EKAsuhpMJycnqhMyPpZ5hDPiaWoJuu378ZZyLFo52fv1KuwoAnPQ",
  "key43": "36G5VS3tZcyNSiY6KWxmUiDLBqhgxC7RLffrmbFSUF1DUuZpnbfaCsDqqN2rmzBqa7B6rb4qJ5uwhHeqApLXWFBU",
  "key44": "4us59fY3A4mrg9vvfhrMCqLMLzogVZhAsqN1rDHahrKA3wmBhwwcQSJrCQ4zms8JwsGEo7noAq2RQqgTrrD5FwmM",
  "key45": "5pyhRwzuEASoPRsZM5CUji3D5XXVFgvsZfK74cFR6nMNTo4Z9UBLFHwCHosERb9imAoi7oyKa1gcoCgduh4TkLrX",
  "key46": "5LaMiMn6s4qWuzyqFZCDKv5oKByDn6ZPv52e2gHswwizYPjte1BHp14PqMUaLgpoerP3ge5PCwijywkDWm58XHvA",
  "key47": "3d4GgTqF5uw5kC6Cr4jZo3d4gSfGqgLi9FbYPK3mTMSoGxpAkjkpSTi7QPjPBCcWP9TNAwabrLGE2x7NDd65are9",
  "key48": "4Rd1Y12jF4RVfwZKkKfneCpe3mdM6jxz3HyWgKryKYVpVxSiqpHVXD79nasWCBQSEbtZ2qrHqwSSPWFp1B1m5C3c"
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
