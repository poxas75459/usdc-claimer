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
    "2eyYuuVTEP6eibdw4v5yDqNGThNb61SNvkfcbzngFxF9kif8N75Yimo19DVQFjk4igrZrsHgY9T5XNoYgqoBwUCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JkexjdDYsjpueTkvdtS9u1FqxAGC7Qvp5zN8sci1aySpJNCuiMgifMK43akzReSgr7bzubt45tpBTzqpLcj96AM",
  "key1": "5RVZmgwFUwQC1Va8WYuhBbhztF7jr2FYFtBSGAQ4a2ss41j71WCozYN7qetTx4z858HdeKuphHAYvQiCTWsPC1X4",
  "key2": "2MUfXrFsYaGYAQRj5h7GyBVRw8Ek1fj5AUjp5Y7gArwpBcsQGMPpozpRae3RNCfiN9hnQP5oUTKHPrwB4WWwv9ie",
  "key3": "5VqCbtP3ii8z74uZSSReLH3m1RTrEB7ZhrxV2gW2a5uW8mZhb8pdEgiQUq4vJei7Ld4DSWfT9KxqSvAYVpBL7HrQ",
  "key4": "4UkszksSaERVQH7CnKnC1qmjmSAbZ9A1jUf3UuLY2TAxgUv6EQo2ZGUUqcYo5t1eHeaxLnRWEUL8BGB56cPLcWAq",
  "key5": "2UDe1RYHQaBxU12SG1iteLTLdaAD7bR3ary7fwNJ5zgxj3C1SC6fewbnVn3tRhFHMNRk1cFXfbdHMoXX5g7GHW9R",
  "key6": "5kPrsVmu4PGScYzacnqSgXZ526hX2E6zcCajjjDEQzdKpJB9rR8WaDHJW5WEBZGdwUXpbm6XYHLgun2RU6rFZZSK",
  "key7": "4wtYraqvtpVuU4ma9RAYaCQgGKhR6xMKbCfiN9ksQp3WHoDMLYsjzjZV7RcTfLpPdcZHRf3SwYtMt7GQhxt2SfXc",
  "key8": "2aR6vKsbUvT49E1BMtYSjbuf2K5UshRoF14aJYHAU3xtP6QLLiW3svsaiGjsRMLkiFXF2hBqeoc6UkCie3qxKQy6",
  "key9": "2B2QKi4Nv9xyUJdCffJW44A6N8r3hQCYFnrU8cBAejzgzV5KFU91xQNNXnhW3m2RypnfykcVDyMsWaRqpP9g7x2h",
  "key10": "2sM6aH6FBN39UBAvE1inpNjvKodU6yQPimxVXrVcZRNJYV6AUAZuBMhC8rpr3f57nGwYXcVrDxVeDhaUQ5vEvoZX",
  "key11": "61RikBSRhmUAH1TXueBhuYXjojD5xKRP88hfyFc7S7q8gvgmxFMoW2WqX8MfVoNXc3wtKXExatgE4mt96Xx6qRBf",
  "key12": "26Eqsi3AMZ3UAUgNvyvDtxdwhJh9qkHc12TRDZaY76Eefww2MFFgEFCUTmL4UuzEttqoBLTqhC3yJ7HZKbfHpFnW",
  "key13": "4JacRS5KcGKUatM67GSinex1vFnNE8wRGEiwFz5MKp7acRNjzWwGcY8Vvp6hv5jZfxbY87swSQ2gDGXRHvNbopTj",
  "key14": "5QmBS3Yah8Bv27Mg2GkE3KRdkjXWB3yvK1ykravE4KBAMmMjxymivrA77RufhwKU4kM4kqoN7DQC7XA5aXB3zjSm",
  "key15": "6tCNuguifrw1ZcmbsW5SRLTeHkDChX6sRNoXWeD2Q5pAJmRt8pcZ3oFabxejUsLC2vC9WyvxfrSLrrerzWRJbpc",
  "key16": "2ZCT1XtaVpveW7A8cPBbVAAYLb43kmuGDXHRVx9z1aecjvpJHU6sMrLxgUBcuhaXCJD5EZrWK84UzLQqkqFq1cGJ",
  "key17": "28q7QEDWPN4BfaERsMyby1bWPRyMqZKkLwcbfjkcq2Kve9ii2C5ZdjK65rPgTrZMRDeHURMDsL2yjiqHNp6ad3bw",
  "key18": "2Emjusqv3ybibNbsJV7dT1FiWogbJCfpSPuFkFyUZJHahvENCHJpTpdVrSf5yqi68KaxepEmW2HinvkhvrsFUnMX",
  "key19": "2QANfD2jVZBTwhbstsHMYdNkdDjpBKveKYgrMRzh8XbBm32zu355WE887dhHjQKZC3p8GytV1hrSWm9ybEMjBHkc",
  "key20": "FmAe8UmtUa9cDaE3WrfP26y4ouhpZ5gcE2QTQfxyCkyxhS4tEJHJqoB6uPRdeQMTTqBFPjAWRmpNZLdVSspTFtf",
  "key21": "3tXPYM43g5t7MXe6jfsZ1J668BNPAGW4ooSGEqZbTVwBoE8ZiqP7UUHkS8p5if7qefQrv3FFnkwM5pmU69qzUHkg",
  "key22": "2jv6kG6rXYuZjTU385sZm8tSB3km7pJ7hfQP27fMMVyVV8bZ3Z6u75zA3dAeEw5BGqaqdz3CaVWuBKL36EEDgjxH",
  "key23": "4hq7HDCaoPJRd2v1Cq5cVzr2ZbkcvegQyf1jS3ReKSBJuYYcZCZ7CMaSF2c3DLUCDotRgTCWTRbR3t98QsbYKhwt",
  "key24": "5nLyJ9jHMgJREnFWTkmddMeSkFiwXBX1vndZzRREo4HhtqkTn6rDRTeiu5sk5hJYswpsTaQnB9yx8ekoJjgbxW8d",
  "key25": "3vVcC1LimsmoyMJZ9JS85whVirP6prixP5xRAiqasE7c2vxiMf6RuhcWAPqqbsQcab9BG8Kre5pXXrun1fp6PGMU",
  "key26": "45v6Nkn5wE1TcUbwE6zSBxDuEq4MnggppHuoTQSA5Tz6mbMvnt41PpUyGpNLX1dwZTecASepUYmW6FS49DTVjA1f",
  "key27": "4SN3RiHuu4Nq4KMj27hmG4cgqnYqUn6HFYwZupurQFdwscd4YdcquzMAVJg6X8JSXDh2vZL8dafRHF23ZFtMpNHi",
  "key28": "2atoRHfy9qx2LzrjEY1KV8qm7Yfth4BqYBmtyFmackUaqy2zmEdZqHcjLYZ7b1CzDQmFaKGGeUiC3HrSkCxmBHTj",
  "key29": "2zV3V89mzAQpgufrvoqQEPd8P2g1fGpk3AknCvACYkSnhfeqRFoNUK8idJoNNhmvrY9qZaNH5S5AtVLr4msKQRzn",
  "key30": "5fXf97SvGapCeRFSz1Z9WJ2upfNUhAV9XUgTMVYAjLoYi3zNALs7n2Ap9tkLkbMJUb4TpgH4G4jiK3UBJUFruFH7",
  "key31": "3nFjX8FzgEiruWoPNAopGHh2NmHuvRdBPvD3VSX78hUgihmsMnCjpzv5nMDAxhBTRaYuKfJH6BwVwhupQjH2rqfw",
  "key32": "m6FLGkk8VtcL8kzxLzNpvBrDKrtBxPvdzAztMdMA4y1qsHWztqxjs1jmi5NaTo87VGWnN7ePQTwX7fD1sd9ZaJg",
  "key33": "4b9cJPMygxN14enBp78pjwWknNdA3GJqKbb1wwKbncjRQBzXFQ9cf9sXhYumRu5eeUJ6HGe6GhkQzSVCSBHdFasM",
  "key34": "57Tyzrf4T7stdXWEGM93ksXNH7hG5ftBJYus1Rj5GmgsS3p5gC8Ypov1cQ8dkoEsKNzfud1KUyJEWPwqgMSzxHCK",
  "key35": "brHUMb6CC5otP6g9NXoiypXvgbnXpuzDvcQS8WKChFxQmjWFLZjH4tXReKzeRgQ5QVpakTbVY9fzJ4Xy6E7T1PL",
  "key36": "3eBbEzdADXTuJr7BXk4Hs9GsLggBYZaQvvPHzch7o95wtWSjN4HEq7uB2WAbtLCptLE9xevuQe6WWVdLVmKSfM2C",
  "key37": "2vRM2JnYsyMnvLFUQmC8czE8R6B7xMMSW6E7wgpsKNCRdv3rE4xqZQutkpH6c4X9FLy4D2KwTw4XdYV1fF8FwKBo",
  "key38": "2uEhK6zVcFmJ9jtbQcvwmDFYffRSKxVmDyFPRtHntaEbcuefSuf82kiVLZ5ut4gWwfjRnqfBgThpTduya5hPKeTy",
  "key39": "2A5xB44YoSMpTis9X8PKrvf71dVUm6MN9m4Wy2rc2VVHkyHGUbR6to1tUJnANwZDfokBaiKQMiFKAtecKYiDGRyg",
  "key40": "3jD1QYk7Wyx27ACu7hYWNGLrbF3E5Ta7cho7eVd7ZFGxcnqL1JfaM9wdGmof159TtzKm9U2R3cEBDuwchbTmQKuu",
  "key41": "AQxspa3aQqmsppWcxbsXAxxvm5FC8ErL7xqScAsW6cfzYx2RP47EmbereRaxRxDbx2hfjW6q9kEuPdXVnQdcrPH"
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
