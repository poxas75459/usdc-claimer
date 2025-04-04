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
    "2w7MiCxgCBjsdTYfoTbcPqSpiY2nw2FysXmHbDYReRAdufD3sj2SyzrhXNG8KcNwFEvzXEntuswTJzzgzScJmCLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48LL3aZ7BCmo6S9ZA7i79pnzMwZKAcpLLcPdCBnREDJRFkZ5koEEix5MrugoEvxGweho1aSRqeKQW1QohVe4neEi",
  "key1": "4zH37n4neNYdgvTtLCyMq9EpLibXmpthzLnyP5qs2R7RXSgKsdPzFDe8NzshrUAvPwQ7etniWRMV7RCniNHzawdT",
  "key2": "26Yukv4iKxrBLDGmj9LtjF6m8u8PaXJPDznYK8apkEqcEszP7dFARBwkw8gPFBWgPLhoPSsZPZoVqSDda83uddjr",
  "key3": "66kEdZAvRxMpsiVQcfn8d7SJt7bFwWZYtRqjPe1wQXpN4FdvrmaHbxsrnPC2iWDhJiRorfa2LfYYC4cSTfu4qG1C",
  "key4": "E2bySM2PbcWQomDd1PcY9YPMpDPBKvEYn59EFESCNBiqxPHURPjCLbnZVg7Z7f8vHwzVxzx7Ud9g2XjqGNtvZUJ",
  "key5": "3HqDhRw9MGbspKxKgWKq1YCr53rwxMuNM99bwKK6YKQk2z1q2AyUGscbpjGN8KoaQ29fpmxRyZVk2X1BX2GEaZPK",
  "key6": "2QScitLRy5RN9UmfYLoFGyxkfbBJGMriAbeZYWAJPd5f2Afn5GQ5MFa2MdCoDQndZorC5LJjtzFbVSZ5ZBWyfb1h",
  "key7": "3VNKP2mumtqpHF9NdvPjK2RtYU662q7sVpFLo4dJRSaGDKxdGEJvTeoD2eGCE2NF287fTkHtLYXfzWVm4Hd82hak",
  "key8": "4uN4DRGTGcGfMm5rYFmQsaFPkXoXLCWyERNzCaKJm4Epbb8xNwUzDgNjk6hZo5z9FkaciKK8zdBsKVS9XDSeTNz1",
  "key9": "2v7z5MK1rMh6TTRxiwrZTsShDFfMn75B85nyC9BLPm9QqDWwCHJYgGaw36kSqQFQ4eXvLFgszgrkwVnRex8Ee2VV",
  "key10": "2xCE9VVkFCG9Vq4AQGN1dzVBN2D8CEHVWmXJpaX8g79UPHtdPkWQY26NbNz1aLe6rnUtx8YHETmXZp54jvC5KtPe",
  "key11": "wbX4eohBQNTTWx6p2xt8aLcWnPy92sGWjxAzvT8QgMzfd9neNggaPnauxMpa2XvepgTNpGELFMqp8saW7WSrRnq",
  "key12": "2at39iHVctYqeDTg3huM1UKWu1BewJjTck6kcyuZWSLNd96X77847nk3HzFs9JNuFATshun8z4DGkUUj7uAEncMW",
  "key13": "3yLE6Zmayzke8RsGKAguhxy5264kYqGX7kxhMSqc5HQDULhsFNoHKEmD4yNJ9JmE59Jjg3f7XkuMwYSVq7Y5LEh9",
  "key14": "4QjG6evgAcYBuGcGkBqxXwM3ExLE82P8tYX5vBha9TViY3xsucyrgKdTE2acNeKTmjhRMJ8x8dXmjBR3MMfcEdvK",
  "key15": "NSjyDj53GbcbAbG9Fmt6mqSaHYMugH55umSRvxHAh3qFZHZv42mcLfUbysTairVJqXXiV532vfTpPTmjreyGH3K",
  "key16": "2yqGraH1rRQaRBuxje8CE3aPSVUSkGU4XheJRUrGs1Ypbv4rHdyuhg5PaBJvNasCoETSh6v6y6wxrSWDeUR5zjWU",
  "key17": "3ng92jYP2pW9dFM4tCnznGCLutb49Qy3iCJuAseUNd7rQa8yAvqhVmRuY9wZR48o3CFFBkRUcCt25zgBEGtN2S32",
  "key18": "4qMXbkKRJS2yDWJGjqrQZXEguitG2bHANDYvhnfhxSmSMtbf4ZaXRQKeci9m12YJYEeSMRPKYePGtgBD12rne617",
  "key19": "2TNBpBGA2iMHXpfNNVBsagmaF3Bew4vYMrPqLZqFDgpedP45WtVwdfJqkAjGDYjX11n6bhRpZWgKU1coLTarPNVv",
  "key20": "24g2xvoinnmAZ8yupjE8Quzo9TdMDKYid4B9sNcyddXPYJj9FYWBmKNMUybcCdg2XpApkbDzvxxjfNagpyDEDgjy",
  "key21": "N7eB5SYVmwFohGE9a7B8hTL2vdxZmXr7op36FkdpYA8MtnyeMagtkyKnCELgLdpCReQuxSgkvDUkLfLCxbcamCd",
  "key22": "31x1kBtiWc8Gdvq9gRg9R3BbQwnqpcDUjqNhjbavf1ux43upYBoU75L6bcaGgGT8E857nG9BaYyswEzLK7s9dvRd",
  "key23": "3EB78FnRyD9uto2yxBEyhsdfmRrCfRqrzBLLZqt96UNivuueNqujGFNfLXuEEJgvPKAJZ1EjCUFc4ewAy8Ea1f2M",
  "key24": "3nLgkJ1L8GwXiNQFCoZWD6M55cUWsHWQdtkNghNSNdWDnzTu92YJZWorcADKraf9dgDcEP6FAEg88MKZ5s3UpZhf",
  "key25": "5smUuvKoVGJts7wTixTDXBdE75QxYrbVeJc3q8MGtZZnRuW3VC59qBUNJjjgrBuCHfCxGuCy3oWmkzq3jmrpw9Qz",
  "key26": "5QEp2mUC4YkmkSeDWE5SShSu43vcB97aHeWLbtexU7sgsyD53TtSqeE6BChRCb4cgN6JHXhGjNuowQTVtiF9rRd1",
  "key27": "48XgbH4R4ZpNnqG8biBQ6aGtaSaCVEkoyr4Hkt8MDfNN7sNMKGYiJcP59JARjCB4WsaPR2chgKvba9YtbsDs24xo",
  "key28": "2N5ctdviBDb1GRks6cWee8LWkRnYE6Znwy3a5MjbatARnozuGQeeEGqDPDtAThYFPvZjrMLJFizBay7wwKUSfpa4",
  "key29": "3NHN98x7kFhHig6MJ8QHQhCdjpLMmnLGrsXe5ZxnXfYKmq1Zd2s87zfcxFnYK1hnEmqmZr6F3m6MX8mbZcZrLAse",
  "key30": "2pM77VU5n8b4ezRwCwQASm6Z64Dwg8xJShtTfQdjuHwzPPPxQbQyoRRrPgmjZQ5SuaxgNJz1b14dBqaAuP5iGC7s",
  "key31": "5vFCA8D7XALuyZrctNTbgQHnA9FiKg5mVjhNSkj3zTS7yTuDXwbuf1u2gPZYbLoT1Uth7kvhdeh9oWaEZCWnBnqz",
  "key32": "4AdpoWARVg9VUjKseoz9E7uKudX3ML4TjvxMiFQ32pVHiyUsH8L21GSvY5S6BMmjhwBK1kLhE9ibWQUCdZ1knFtD",
  "key33": "2ykLoZZbMemXggwDLSWpEbbZoXeNKAezLtcK8UZP3mDSyKMZRexEmQrz6XncHUh8nAw9ow5ueqkge5gwmKg3D5RQ",
  "key34": "2Kyc9YwPbXgTXSN7MmraeWhFSyCgdHcDw3WxVTrEef9nxdJNnXe3WS4dgByzRYvwfgcV9UDqTnyYo5kYdHotAdY2",
  "key35": "53ZNPQMm79CSs2NT5Wb3Z6gNjRCY6xGP422522nGcUwiQAzMK6gk85wFpPTMLvZpwnNfERB1ug4U5ZsLy6RU7SBB",
  "key36": "4AL9CBoTLu9PH3jTv4MgnPD3GFqkMpcPyMtYE7CKoQJLXDzrLJQMjxjmavrxmkzfGsHNc74dTn4DyH9ZQKreGcXc",
  "key37": "2r7X4mBZyjQVxuBysjLFsefzg4crnMoNohC3xwzgzjXguDbJzu37ppQKsEvXs6XvaGuc5LSVtiS2B3f6AoVJECjH",
  "key38": "2vtX3rwp9amYHquuPb2meCkp8eRZB4EhFa6aD2icTWKe7iNmMqrEYxokaQn4tct4Nz6TdqrY1hmek5QHchrgxUTP",
  "key39": "4DRdanzXSDwPx7NVaQHDkevxAqWAAAgCm2WjxwRZK6bLGikUWedi2Y58HmMnPmkrYnAzGxhDbjEvz2VJK5gqK8Yp",
  "key40": "41vYtPjQc7wp9iPyotNYco15zNYukvk5rP3P3o8pUhnsqKvAUd4JsroXpSLt21VVenFb5X7dRnosuJ54QtZtMfT5",
  "key41": "3ThaAuLcBEYYvfkv9Vcp4FVBgwctwCFQy1uNDW74cM61vfW8XD6bJsbvsYA6SeWLnE4uSh9zgJ29LA9WfADb9GxJ",
  "key42": "SHqDGBXPBQ9sCYXeihd6qfk6buKSFbPhDxwueb7LEtQjhBKTHHMkWV9mB3ZjG1Skc6UWXmAHmauyXQE7c1Mmr14",
  "key43": "Zby8HXnWes3EX9MJ9XHrx9YBbZtYUY7zxiAG6Zh4xkrowCJ7cjmDsoK8gdxKMMkFnVvNfjA4uMMoE6cuesyd8nK",
  "key44": "23mxqbDWaQ7qnQnHAdtDCoAobJuDCcT9XM5G97TJvCKgyaTH9yrTRujpazpBmMT1jdHqXnn3rWZ8qZBg6jWqw4z3"
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
