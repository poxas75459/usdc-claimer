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
    "9ydDHV3mL6ee4GbzsjhW9u6ix34GCgbsZ24gLnN2vFwww4S2yJGC7wd9oGFfGVmiUrCBfXPnPUvbTxdurRv3dbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mo5F2MfDXep2bsESKCyLT7Wrf4vnZcc8qLmHP2qrHJ8w2goxVB2GF8p43J68m4LbM2AWnFGuwtnjDPBeMeT9rxn",
  "key1": "HGqvsa6TT8ZrpUywr6RhT1QjLoWEFydmhMyC48ijM4Egf416Kh51q76PfBmWpnuMudzss1ySsUwNJZ7b1VUtZoF",
  "key2": "5bu2HGWJmehxQVJTq8AtJEqsFtKgGe6oe428cgnnGq5kxbVSU15wLPjL3PGGhG98WdzaLcrPd2JCgqXRJNGW4tEV",
  "key3": "5fa3D8uixxU8xVRrdEmd61UUxRRxpVzZCmFFzyPifsz3SAFi2bdMvRUn2f3fFnqz8yqQSum6iKWyDY56VJMoF2LC",
  "key4": "5aZD8mHjXSi4KpDZmu9hLayTyVSqbTx4iT4ggHFTKy74ogjQqBAUEHsvgWJnZhPr7DgRPnDJY7Z3eCQRTPVVWDuo",
  "key5": "2Aqy5wHYFTYwy6KzUE8wGyepJcJywaqjjXggAHvJ3tMRWi4VWScXRkHuSL44HeGzJ4wnKwUW7FvnkDfLw6YKRB8b",
  "key6": "5KbAgtavdQyjSMs6D2znqCbP8hL6SdyTBSVorLbrSLMSPY1qg6yyFZqEcQFsCT4BD7C4Jra6ngzW1yxep6aN5sQV",
  "key7": "3vwBV3STMkYamTiKacXB7A9VRsogS8eQhCP47Ukk9SyhFTKyTLaDrpbUwHT9A6yoEimebuUJcB4pUXK8fhXRLgHD",
  "key8": "5vmZsLQuzw2ZppL9VMaJGrDF45xdJVSGfTHHN2iqgZ2evNLipppSxdV213CSAfg41x9KUw2tysbbLxjWSyrE8c6x",
  "key9": "5rLGVMuRCKdzm1SCKGcdAw3eG33UgJZPDU1nbW9k68Sa7cH7DMqdAZTKNbhYSrrNgoyxShi5TV1jz3VNQ4UjcqE9",
  "key10": "3ZS7iuhy1pL7RCcJCP5K1mnoVhNZKZ8vnmNcurGRh4UyoEC2fgDHf3YZGvFgxyCRU7AwbwpSVooEEow3ditcsA1X",
  "key11": "3vYPHfZnSiKyBF8LLfc21TcUo8rZJZS3BraPNzCmeohWy2f1zeHZ84QGKu1BZ9QEZBKcZ6NEwppzJ4jWmtXricXG",
  "key12": "4MCiCd7yNjzmPVCiWXkCiu7qT1Tg39AMbfV5BAR523iAT5ogHb4LZ6ih6ZPco9tUunRWaHuSJEXYzatuBeTik9Si",
  "key13": "ZtZpKU6yZvw8v8prnH9EEtTq44tp1AqG9NCNQ2UVJqpCCNfZvpuZfTijt6swZpgRJXTjNC4JpSDEnbqm7GkqJKk",
  "key14": "3To9ffaCm7aZ28icfGssNxb2Cmqh7NuHJ7Dt6SCe1b7tMMiVdJBpmCoHt1RCvWCSJjMk5oTm8LtUi3Fgrd8KKuwM",
  "key15": "39ehM7cfCJLkxbAigB52UiPcvi37wzpwMtrgyRhru54nEyun7YZ46FzeMpm36wiME3wDeTx3dSWZCnYvVwxXriCU",
  "key16": "3L3eN5DANkmq2ZCZ8iGM3kDb6aHWNcXhHRTyu19yUvPdbyxJTREBrMVd5j23u9gtrShyGoifrZBaxchhsbkedFb5",
  "key17": "3ANwYdfR69YNbzMDbaPtNwNff11H7NoqeUWons4TAi86ak5REst7DTSGznLCtaxFGkcx3Jm6wbTQjmCPNckt77aG",
  "key18": "5Cf6wsRF1zDZuVZmqtyYTnHZV16DXxyb7hPNZ6bK6U7LMmzMRpejcgdVB2T18xLpRj44apH93jXAMpUyS7w54t68",
  "key19": "4qtRT13e4XJMXpeqbEB94Meavr7nZ2g5swzBny8dg2GAzsJFQUHbSLQgfp8UxRJZL523pXRnkY1Hwodr8W4H4eNP",
  "key20": "5MS9MXb8rUtYr84iiAH3FNh8JC2Nhmste9dp6xYbJCJgBZT5ULHoFQLRjSmMyN8veEThugVy2R3QTrWxBMuFHQ2a",
  "key21": "53GgFQvgqjZj1EqMLfUPnRMm33HdvMp7qNEMqb2R32YnGBBacjSVCr8SiWBbmLEQZueJk8FHZsVZHGChCGS3vUf4",
  "key22": "xdT4dX3isn9FqUJUMsjuY23TH9787df5UxFXLUe3M2qUcVjoTPTxneYkqs6r8rgdAzZF2dQ8nQ7ojYdK966W4u3",
  "key23": "ruCDmBcjP1FyQB1Y3ncvsQfLJenB9Mj5GJ6D7DwsqwECaXTE2YWPcrrX5kUQnJq2zyEERLNkD6J68jfJzh8iNrm",
  "key24": "5zgBw6xBFcmYBH4QJ9LumtMF5h51SBqwYbhEdMkQNEL24PJNU5K3Ah83wntzG5bYmfA1w3ja4YS1dzLfBVYGmY25",
  "key25": "2KjzHc392NFU4U1RPdQ6rjHTkZMJWVu5dj7dHrXvRvuH3nNh5a99B62mDqy278pxc8VZZf6Sa8tbdhWE5ASMGAVG",
  "key26": "62sbVz2oGt5AVkb3bk2M96cxjytu5SxiUn1oi1pkjDwakpNkDmTvsZKYE1LdWwhHtSLGD8JN1tkKnSrKTbGmYkQL",
  "key27": "5qn4fGUPjnkxfpVBGM8HSanirp1SEPTRA9xEdKCqeB3EgGBuVxJWtpxqJhjhDfDeP6AUFPCz9g4MGL7Xg9x2EdF3",
  "key28": "4LsrauCHNZx8wbGPsAPUnbpKuFL8WeK5TvVjTwhzH6rWxDRpP1ERSiLYmuufq6F7v4zT7GFNtvdp655BHfi1CoKi",
  "key29": "Yri8ZaM6FhHgZXTsRN3EhLf4UVuPpPiR9NMenkQLqEC5fQr5jbmoTgahSdGCQ4BfmsdTtW1RsgBBmeimb9RydmW",
  "key30": "27dctdJvdFndQ47B45BGT1Qa1pSpyQofEgV8CM8Z5ATALWRpD2pAGj7NeQDBcqqi6pAWC18zPtobVChyKCqtCx3K",
  "key31": "Q8SdHuarSghe2qQ3YWSP8ZeommjGBqrkDUkVZVYDcXWWBDuLjtqSep1KxvsoyBuLTm8XHaLpGiXiH1a33nXFHPy",
  "key32": "2matgjnm5ZMDTd4xd8F3U3Kaez9TBAfZ1HpJXmtQ4adrcuTwc2mPGmkB37MVyJELAeSGRdKJ2Wz3Ec56WdNMm6cx",
  "key33": "28hH39De4pFLrVBaQYe1AgAwo8NzBf37MGcPBzgpmLqx2JemrCW6viJa7QQmLZPtbR6tzPTDWtH5CjzsaAHgACvj",
  "key34": "32XC3oxMg9AnMedBgsjEoAphKukGRRaLRKU1qpC2gXzDTSdCbCQbKFC26U4fUZRsVrf9scNhX613R8in6TwAqCmS",
  "key35": "2RJqo4yqz6Cw1NwTZ1un7X95cMKvs1UVHqUwm4nnScuFnLbyQgDAqSs4mTwNRZ6nWmxgCnuBXWMwWmhkoPTp1Ee7",
  "key36": "5vVuTxSxrfaDb5mq9kucazHbsVHQvWdvFioLGJGrhKTengyQgzFZmcFAkAkbJReV7Hzgy41pE31uzddK58wcgXqM",
  "key37": "5jTzeAM8kb4zxxGtk2eBn5DH2PWhBzEsro7EFoZr4fdUVYcJFxMr5VARXFFsL6P3MuDJDLWjQzTr4yS1QX5CYy1n"
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
