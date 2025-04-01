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
    "s27m6No5vQKKPwma8YSmyR9VCXefZGedwCTL5idjLCEJRPfz5mtVMCwRXkhzjZyAEdCLNifoL44NzBszZpQdT8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gvozhENdDPX2zi4geyA2Z8sH8ZMF6XuHo2418osGPr5Pg2XwhrxvsHLR5htRhrzvfA6C425auPeqox9kqSpRbzc",
  "key1": "3AVjXYrdwkxr2bJqHHMU9f9cQp4zTwRKqYDQ2coaiYz7F8u5ckgZciqYFmAZnWf9oybqLF889Yx6Zdt4B11Kdksv",
  "key2": "3DbzUzzQAHnnYSdXuBfN7REjn4SWnDFs8B69vvFSRuZxLQ75KJKM8LGjov5zjQr828gpZSEGF8pFw4of1aVSMg7e",
  "key3": "4CDd7xdbQYPGzgaPGgmY8W6jSQ19v6fmd1s69Nu3SFVpYhB5NWVbs81gCcvitccqD99oqEbvFex757oJ7BY7qnwU",
  "key4": "AppJXd3oTcKrxCshcLfmWTDC148pVaJJUWYjn4eKmsrsRsQKCYQics69qHqcKE8ndRHJ6TjA5VnF7vY7dhbg9Me",
  "key5": "55yiWQZPfwQonxA9F1zfB71HCwHyZSM1coAtMgwjLB9WoqHvn7EX3bDkr8Xwh7rxGBEM7BT3anTAsDLjNodBjpEG",
  "key6": "2Y98qhsSSByaFUz8p76mof2iooKNZyQpVFkn6k7KZkTUyQmzjeAviMfU4xxuxwFfK6ts2mfLHG3LUdAayQS7wxbP",
  "key7": "4sWRHighd33wCG9pd4S6sQDvT82mfiX9cho8rUbrMGYnDvSLBwRu5gDHwNhs9csMHahRQ5XDM6YhdipGnueHQXV9",
  "key8": "41YENVjj57RPHS7RwGiYJLxXtcWPhdPWunjKaBrqeaNuuoY36Qm98FVfHQSJJkmxBWEfkFPRkzHU72T43AEzKLEC",
  "key9": "5ZZb4Xfdka7hoxw56D28uN6hr9NX8BobSczDL91NkuGgUmHKxxuxxLhemLHk4ibu4oQGE8ybwksBfsKTzKdR8ma9",
  "key10": "4bLjYPEKpqEgq7nC9qvHohSzL3NXF33rnwdxcVkoViAqaCty19RUo4P8N7hJW5mLWegHDQia1m1ZZZf6TtJCDYZR",
  "key11": "41dTuMQqn8RH665XUJCcZhkB7pnR6Y6kZMLRNC5QnXFxjWQp8tUn8ZzbUrnojqmcJMutks3wbPVTwvyCoac7i8Lc",
  "key12": "5KATM4cgemACiZmphM45gqqBVVCGZAkGXhJVgwGExQihDdd7wyn532CzkL48Juwg4tFVgkUiUkvhLCrMorJSz4RJ",
  "key13": "2i2gsR1NisDTjwEF68aNy9hLWmQHeKzmJEX4fjtMtcppJhpvpmPC3btAuwGDj9mD7kHQbD3Tp3kTu5SrjeaDa4Ju",
  "key14": "47nTzpMLbnvrqX1uHFWoBDbMb3tYmZzRt35NSVgPMCRWMLvhoCg93wCT5kAmXwGeRQGt2YmY1SRgYSgh4xjQBKwE",
  "key15": "2SXu8yefeDFDy6W2F4ydbpQ9UFXub9pC3YdtahuKAPBqgkyxvRncrEo6YDUcKyxhdmuzXBinnSjHh57NJmJx2jkw",
  "key16": "56tPzF7n3A1t8i3ArJiUFfSAicQjSJFBTwjnV8RQQ2gS3ro8iHpZikXURPfPUfqB9UkqRz76c4EikukLFLJuobgR",
  "key17": "4o2JbJb79RC8fRDAekYfLmYGgoXFUppS8NnPN77bjhURS74Ttrq4vVAkgJ9MPewoBFTf5G91MHcHux3jjfucKpTq",
  "key18": "4bJdKfqo91DSb5BaFJc7AGxqbMnfFfFBhcu2cf3uTr2hZ8MSjiVD64xy6kiv13C3UtCsWtTdaxC9jApQUfhdQMGJ",
  "key19": "5zMHybisSdC21SSM5DZhUmFFxF372ZxvS4zZNAyuUbpsdpzTgMeV6Q9UsK6EnAmcdUYyV3qTcd5j5oR9W1E68Rxr",
  "key20": "3DXvbwKVm7GyEy5ZwcYA87bAzqo6vukuPyMM8AXZEhRzavujJpVBBvcqnz57Y29Sp2akzVKB6KXWDoXd5muWxEYG",
  "key21": "3mTuo3ULHUTnpbt4KJf7r99Sp7R2UU2Rc4hyTSLxKi3RSncMkDNZiD8sf7ziD3kM9PGtMg9NV1W9dAEK7HY2WTPR",
  "key22": "eoE7JMUGGg85aQ2HpBxQ2qAgSn8YJsrjngj6q9U7MYL1k8ySitW16LzhgcXZWQtETB8WMWcxwo33ZLTsKW6JnqL",
  "key23": "5NV4MuSoemPpZFd82urhN8ezbTEPYtkY2Y8zgRcxSbN6ceDABjAkvfEs79jjNrBMCWqqTnFitBJxrB8cXBWR8YZn",
  "key24": "2ofg8DkoXTK1w6xnNYJMuCj4Dye9GXxQsTeEwxNEMfVNFG1WvpQKFHgfQSUjSzoHw6oYqMQDvVGoDEXz3i74D534",
  "key25": "4o98CqMj3NmTaf9Q9465XUNcs1Ntf6DmQE3S9ELBjyek3h8iemQugsHTDej2mXbQdPmzg1Nz8JgR3HxhHGMtqdQw",
  "key26": "A16gExgstKUWdKqmKdnARdthpHBehfDxUyjSm2CLdnAKuZo7kAZyyhUdUwxZA7RVfU71w9UV1Ncpduwq5JZAt8L",
  "key27": "3zRukm5edLLVXZQrdRuHAe3SNE3wmhp3hPF8KqrkwCghnmFp2RcfLMr3RHk8HBDrSerSJXW2Kp7Ymn7TYPorJudK",
  "key28": "5DNBwSSv7MT1HLX9k6DE9R3KGrEWm4EpTzdichmR1e48sWScgBJwqmBkFXjen4jphTZjV4wB1zVbYQuYpQYumfEV",
  "key29": "5f7VqmoUzDeixoq8MQXurY362L2wXWcRtSCKqQL4VTFHXwyRHJ3PHBHku61hFfRUMMy3iRX2HCjks5jVK3Zhyqfm",
  "key30": "CWtrReSwMBZNKuSUsNW5XpSJC1j2ABCysnGWSGMNE6EfK1Ybe3ZLzaMAMRA4BW1np77C6DXqA5Yiu3RX6QAPA6E",
  "key31": "3gKTwKBhWMnwXQ7c6qSFuy4tgkWj7vGs179fusJW5o37gxRHEM5WjZFNJVnxC9zwEQpQ8FZPXysHTxkFuVjhZbma",
  "key32": "66oKtKd7KKV59aCQKk8Z7sispm4hbBeydUARd5P9KE1dJv71YXt1noWFfaxsYP1qTnEmZ8qiDiZunfBqCRJsUaUa",
  "key33": "3mrLhvNzzwd22esLDPPv56PPgMYiugsC1bGDcG2X6ZuHLeT6FvQoWFMS4vg3mcsjnWEbEiwJFaRM6BVcw4K7oHNU",
  "key34": "5Qvw3nhyMpUSCVcQ9oWe6vRZs2nn2yKi154sBePDdqHFR2ud591jXMwptwqdCc4RbeVoXJTwshsWwW3QEb7wha8a",
  "key35": "5LiiEsJxoMGqPdt6WjHUP87aBiwUQZuapBUAuSjgWjzN1a6eueztytWXzFqN2ZVNkcWtc24KKxiG5PXdqCxPHpZP",
  "key36": "ee1jmaMFbopFoJF4NeNmU8SMaZR93Vdx48cZTZweRzgDPQMnaXVw1uDuNKdusHjj21p2kv3kMMm5cyxZtgTAy3D",
  "key37": "43fk8W567B4btDVdaz4rWh6RDfpgUoeuYRNtdQRiLDs1DSqKt9Kar7Sj866n9ezkCZNp76EdYb4sK2upPfEtL2Vt",
  "key38": "XZJwsJs9BJsnUHv58w8TZGqoUUwkBeLriHLZBmPqudGLVsndGQSPhVAVgwpgKMowi9E3vjJ7m95gWsbaWHXAmfz",
  "key39": "3VBsaRPLhc4tkuMGK47R7tZmk2YC1kjKQqjRVA5FQMFok97AYyqiiGWQNqRa1A6ZxNqfodVwT56G4UR8xtjK8CBZ",
  "key40": "2a2qdKU5A7FjP1dABgizkxFvoqgxx7KvqjkAg1sEeNyMBCaAixZyRc7urErSCdK3kbbchJxGjzP4y49xBzMTF5Xg",
  "key41": "mauGczNpTkUBcpmapVXWAWu56pqMkKtNprjhitCrRvYyx1zhaE4fJjuverGJQbJd5UZkLpUL4zCprWkdYRZMxgE",
  "key42": "5SqRyX4r6LQk2PNyi2KWMETtGN3XpSFryGag9nQ3g99Aca3SnzQ6TFLMEHvjwcGDtj5rZKGrD3GoRvueq2Wee6ez",
  "key43": "5t2TRRGuwPtigqZBpLPQoCHAgPCZsuSLVJPPYWADpTVqMDut9svwgnCsAtmU2xiTstArChhiNUFNeYep8xSaJqvA",
  "key44": "42nCSZKiSptoZA8t8LH2UNhiVp3iJeeUjj2SzZ1oNGhBMR7MZQtG8fNoqenrYFcgsp8deNEMsNYJ2S3Si9QWPc8b",
  "key45": "5KeSc8zoVESgofbPsc1mcHJWcten2LjNbfUGdydbmrLx1TdbRnqGUgFdX93sJMdJP8dTfFVzm1JvAduudSoou46v",
  "key46": "dfpEskVmJyg3ge8UoL8KNLHaHLU71CeiUPLcWqLKAtpHbLP4T2zH93WyNWkgsUH4icY4ebQ4CPUaNh9bzbNZnsP",
  "key47": "9WhiJBqpDzQXsARVKLsro9E9RZCYmaFY7fyAhk55g8JP5PdkSt9g4hT6urs7fxJsTgPVT1jLTDzgLhbqAkbhK6A",
  "key48": "fCE7eVQmsRCW4YYAboxzfgJYyi3qJddrwBkVnjSjzEDJLN9cuaPZ6ehwEBuYyebZ2G8qkJS8p9yokBwxog8roxt",
  "key49": "3C577Ajuh14h5E1nFAiJp4jG54HUvGUGhdTr9z4xFcRkr3qv6Qp8mSP8QAHdHKnLp5r1kFbZ87P2fmeutSsTgWvx"
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
