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
    "5wFvTms8EsjfEpRs8AetUH7mf81CYUsHmbaL9Cjkfanc5RtFJwKrxbQ7nUfE4kt5NmrGUHENaw3rHy2Ryvro9Y6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g2Z97tBdeceMBVyJ2AQFri5kHhpdcLJWjpH1ejEacKCpuHCnPTr4u5Q5xWR6UjEKmBzQWT5Q9TaHhc31P9RPc29",
  "key1": "2wJdkqqbdLQmUXwr8sG5TGyCWPMZkcUowZGwuUbwWNk1gdkZ4NEXqjpYNZp74Zgmi2wz9DWBRDWSbC1MD6mXCJp5",
  "key2": "9NwvmwjoSrRbivxfiSeL8R5FCQQ9SJ1n1GXMpk8miB8KH9E641C1NTZpyd7916Kuk6tRNQFQCpMjwhF8AuyfdiY",
  "key3": "3cKb2k9MYRPZ86Ar8NzExwmbyA9qhAj7H8jeNbhNDTTjarXeMs4ByZxRzSwUsepyPuhmdKPp4X2V4YS2WsdKboQ6",
  "key4": "3LbMRC8Gtpd6B4eUNwxUGUTyHy7tAivFgAWKg1R5G45GsgBP8exLSFr3hwKpy2JF3gLx3JwXV8pprUQEz6t9BgvM",
  "key5": "pyspqZGa3d25m7rotYpozJ1gGaN6fxqPduh9jBK7ncAUvXE8YazSnuyyqchwo6B24jXP9bbiGdj4yLz6Ha7tWUm",
  "key6": "4rCYRsjWy5Ttsefns9ksDCRijrTsPUu3emgcnTacFXdJuczMna25wdKcmtumM4H3cES8SvfjX8B3kisUdHNvnaaw",
  "key7": "3ZhovYyzjPnX1irgN7ddfZU2TMF9bvY5FDcboNXSVqNhDrJgrC6ocbuSi1j8gyDZM1wCATbnTP6xAnPnSSvcYcqQ",
  "key8": "3KTXYJkpzG6mzQxRXuBstTjb9Y2SPZRrDRVKvzMu5LjaKmMBrkPz8rGDrTw1jh1YF8wYYMCUQgjztuC3VczU8fFf",
  "key9": "2nxJ2GbuoR7HX2ph8RuM8cCEE8Cg7hDe3GEK7JjxUQmq7WAgEWmumjUtH2m5h3pY51msrEUMASo3bAJ8EDbqQ5rv",
  "key10": "41YEkGCpTAw7fxxiBYWKspGzghPJSvGtSS57qdkxPEdhU19rePfccaDKvRv7KjYnLoLja4WA9b2RHLhjHVweEr7n",
  "key11": "2m3pkKoN27pGdt8wdVZSap9Kr5BPzHfE4iykW4eFoR51SreAye6AjZDyep5uYacV1vYL8bQuzC2prUpiLNkCQuWF",
  "key12": "4dvWchPxEcskPGgz44sorT9SkKsGte6vjE9hDcKrStMKCfm3eAjAvBEFPCviEfkNTaMtH9JE9y6Sw3ZuJJwyw1cL",
  "key13": "26zRwF8tQKNWF1CLxBcVE2H4tqJ7pqULssaX1tfiVT3AREwLBN44dYmV1vxVdnTGhome2F7r7k618z4VSGSUg6rj",
  "key14": "5BG3N1A9tYYcmaJizKrp4SrYRXrHDssvCNAfRaM7yRUTQySpNAsDTrvxv4aK99hf4BtCku2Qh7LG7DYhFEYBDPZf",
  "key15": "iPZhHu2g612eyd4gGmWkKmLbtdG8WpzmPUTTgbe37Y2hLrqH3VMod2kbtqcEVMcjWWJy6wKHBuSLCPTwrPa6u1V",
  "key16": "2Pj3a4hCdwSJwsL5ZGPAd2d3iMoAEe7dk8X2ckWkB8QBKnfn3Pqq895rJvqQUqfTLxTMKYx3G3tc886SnhGoDn1G",
  "key17": "5PDrrkPoX5tc12eQ1k1EsBYN4tqKTnPfiFQFt3Uvc127BT1J9e6J9tUE6dELTtVJFmZqxQBSxy2t4FWHVJAYijCm",
  "key18": "zNo4pC2nK4ScjLStSNRAGzuN2jASqRrKp9pTy4DNyfWRLZ2dTf3eHEpwKDesAY3YisZdzaDrjXoc1459z78EsFD",
  "key19": "4YifHM7g1kEMpajUxS8AQ4ktEJFr8BpBTuGNYdYMU9RkDGttxD5pHSYNqiFJfnT2UraddKJ978JMS7ppc2t92Peg",
  "key20": "3WYyZE5rUet1csFUzL6QqnuWU3vF754n5zD4RfTv8CatkfwBrMAkBoTk6DiwN2mvCCYYeLYwN1zrKQWvWnxm7dMX",
  "key21": "4yMaQcBGJVtV9gUBVhGGvoMkrwzCbH2fGQGLnyEbmDgZVYpX7expn5xMX7BJjnaHueZUTD6nUj9vtxLqwojSkrdW",
  "key22": "5i5EmyJS6j9tQKcErudgeqty6r4ZyMcVHmkwWLfnv6GbfW1e98cdST5A6i8CUjyGghpAhjBFc3QKrcq6jUK3ZnnV",
  "key23": "4M496TkZDMhWj4atGvp3Kh2kR1v125wSzZ7WepjYFWTWeKnuiPzEtCHDhRsmFQFbVMugoNwwBhypVEMqZX2px8MW",
  "key24": "4ChfGwe1uTPUKYGUmgWyqLUcfjmdw2c1vhskYV1MKzjtHE9JcjS1bgNr1ChUayYiyJ1zKG8QdTReJLovdBtP96ZG",
  "key25": "2q7SK9Njex2TdPAiWUqBzAspJHeF2LGYteb1wJzQnTE37FRVyG77sKxNaaFtUWgWqFyKRYRKN5u1KLURbKroV5UA",
  "key26": "4L2JzXAWGEAvbCTRL74Brn152dHaA5cDgEquHf4VmqeNEQgypHEX3fWVjDHcuvHegjuK5Zkn2rYBS5YVPpqNgoNV",
  "key27": "3eP1WJu8oSUy47Wud2N52bpVsP6a7dX95ZeMUbahnPSZQK31ciVNCsQfP9RTxBHhdVmgmaoKBShiBtzXuHqMTNnh",
  "key28": "3SEE34wTHZTFYLnfZpBbpWrWmCqo8wcKhYAkEJNkRUp6SAmHxfcrobhiXeiRiedDbwujpZkJWv2t94joKERYxqAK",
  "key29": "3zyNSTEziaH1gs7oeidwAZ6vH82V4HZoUuisp664jjL414vKWSMLhasJs9GGDVzRKo2GPjAAZjQNFrwFcjxfhwmg",
  "key30": "aoFEtthu8ru7ozQRfM37ktMM86ozQwuSkevDxXcCGcFNWkvzEvWT8utztysprVL8vNgRLKNtRvg9oYfu9DVHKqj",
  "key31": "64NSQ1RWgsJFLMFnqAxJ8W2q4DXwJGxn1Erb8mdM3khKP3AnsbsMsPHTEFHjxuDz5UngfpDkfcKCJYsWbSFrvTAv",
  "key32": "3vgcfk68ZKWUMbj96y398CzptvFW7XBFqa8LWq6Qppe6pZ3GNHcRdoBazeFqdND2npx9aUGjx9WyatZwitDm55kQ",
  "key33": "3Zsokft3AkZr1mgf9yRJPSjw4NxXVmqGhZtwahTQYqYajohHQSsDHAzEu9dwRcukx64Hm6yXprnsuEvJtxxLadU6",
  "key34": "5ctD4YAe7cqXThnFsDKiYiAgpeXQEKWZ7xHLe7jirodNrR6zKGnTPNxmyZRhEiY8rxJXZkX7QdKoB3fQqmxciGfW",
  "key35": "5G5GNiSeWoY17AKXmk9UucQfbiESuGVn1pmsZ2KCjuN1GDoaoDhb1Zh4ZPBnVVCjiRUFF9KMbbuFYs8NStehyyhy",
  "key36": "5YiobGhz55dSXPL8F23FPcp9tdbp9ebP2DcAidNfCjTqJ76AD9mrDBFhxzhZoGPq3wsiWkRHEwS8NtTip2cFibQH",
  "key37": "29K2k7DAkoSFp4UFPjPP28RrMm3c7W9oePLYRERgNto5HKyFLWxN364m7dW1rjrsQak2hkdCr8piHy63UPEE9vwC",
  "key38": "3zgzCWJXzjcjhxKEPUbBia7LdEZaX8paehsxeuiucvFLCRBsMuGDFUGisihCyQLjFU6vdUddkQsjFjJmCGKXW1D1",
  "key39": "4kTPDGnwUnMa6VVTokv4hqrxqcEKxhjeuxAcgs7EyeqJZwzJ6JrkFoZHz4hgm7WRojN9YYBtzDBAAQmYXbacCFhu",
  "key40": "27zKPD5F1zT4n3prvniRTMqYdb329DSS8kWM13D9UeVgWKMo2JeuHeJEWyafx8GS6Q6SVmLdrt9To3DRynxMv5ky",
  "key41": "2kdJ99tNB4AaV1Px9zGDgxNQgzJy5WATHaW66CjZ8fwSuFYKh2cWEnx4oJF8253VDwREqUDvhEiGjNUGizu5uSbD",
  "key42": "5y9qr9N61yrqErFuhUpDkA4pfEEEVAXQ9QKm87RXDkD8iZ5fTP9S7yQZdUC26aCTJzhpwF7YoYUYqMzDurAQEe4V",
  "key43": "4ZzV8iGdCbk8X4bKxQau6kLfJ1JtucuhXU7N1jEvXqJhwCPaQWx9zztJT5GcTikLB9Mo6gh12KawR2DnUXZnxohG",
  "key44": "4p8ckcwehgqatLpbpgqnX2zhAPAMMMJVahn13hkHNj3ckpE6kZ8vQ7nNBXTcV1oBfPdqyPh7Wm4YYtbp4BBX6e3f",
  "key45": "3YepEA5GSoCHqbLXqxeKYaoPWrvphBaMigm5vdk9qoviDDjwx1UYddTRLhLTmWe4Zmry4JmfPmmmq1brD32e2eFc",
  "key46": "3fSo5ua9vjCczJJNcRw3i5wmJm8AYi2qjixZEWKDmehYN15pFro8WHF1shEcVYNL4sD8CGkrbXGnGM3jZFjVccvt",
  "key47": "2MZFkKi3XAaaS7zACHNzoajYzTja6kApgYKJ51dDCBSKa3HooT3zNHno3kybufAkJK9VkqnTgqSKaBRAQDC1EWsV",
  "key48": "52VBobnSa3rW227XoXYjFA521kZEQRtSZBkRSkht2VuSCx57tw1BC3CTsTHP9r6qE9gU27RJt4fmB6Kc1davyhpu",
  "key49": "3p1rvBRJfCFP2Zib1PRghJNgk7CbqAEoVAV28wLJKfCMhv4gRFdzs7SN35hYZLLct7RSZ7bRSaaHj3rr5PKSjVb5"
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
