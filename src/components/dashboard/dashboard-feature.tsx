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
    "2LYEWhMp3YjiHTT1cmGQ8qJsWZGX3HHNWQyECu6RtRdEDc8dYpzSTZpUMcywfhuGTb1RfNWovCpkFgidJ1fLd8UR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZPUf9M62VSADj65J7FgzFFZFhSSAubCukYPUimrcbPA3CYFq4Rd8JDMjPjnfxkAaVcZkoF5P5Tx5s4PgANjNdMa",
  "key1": "5apgRHPYgda54R5HrwbQY5WXvqcPBHPgL9XkK8vuu32fnUWdcqAtemvpTXFTkrxjqsP85kgCeX1MkT1Pxr4sjfgo",
  "key2": "49GuGtY3zmct2nKu3zZrcKdLqzyK88i6gVTvR6CQXWkT4noc4Xsp1jVd44fBfNHofUhwvce7iJc2SKdfhhGGe1vB",
  "key3": "K7Rc9RVGzzZJXCvKzH7xuiwFRSTNQMAWj9DoQiEcseK4VmQHMFVVkhvxTyoKtPeR7jW1SrWFe2QA5AMaZjYg76x",
  "key4": "3S5LDkQDNnd4p7mnznTguemvBdJvBfjAQtu1bxJpH4P1k9oSYnWJ4kgaM4sY2q98CDc9Kjv7PSUQRhaXt2pGPGWW",
  "key5": "5zXNAwLzPQYpaULWBYW2FuYpp896Yg2Z5et8ks3McDEzjzCz3GXz139F6hmmQZ6DFhMBZ5kF1BHKjPVZxZ7aovKR",
  "key6": "2LfbJXhs7nmW8eckg2YBmS3PyoGtiYSFvqvdMM2pZVRKFfmcmSUXZHX5k1pbMQq6k6NsdAmcfLq4LX1whCBZg75y",
  "key7": "27NFkvP8bhyqjhnmnVSzxG1TgGPToXpeoDD3QjAmVabVJYLZS2qoKp91wNBeuw4z6fFczNYqrcizLmzbbsMTuzcR",
  "key8": "5gwpZ853akccFjD7FZiC5bNBf9fQQaTvnynJJbQVRmKzzCzwAYWtJmCMLjBjgDwoWKkSzwm75rRDqFg7ti9BrorK",
  "key9": "5nKH7xa4Xv9MUdqbXDXtVVyvC4Z4b2PxoVETsBq6TuTQKfNUMjL2yEZNWkTsZfmNjTBqGyVJCdF9rcabg2y38W2F",
  "key10": "3W1YhaEpqYgM99VnyvxRtDKPhLUv1XVUmZVUSWRcDj7tX5mgvFwBzhS31EcPAK1dHcMGryeZX8mDc7yzCU7LCE64",
  "key11": "5nvYvXEQmmbadwcefr6xuWQotjhpomxPBvRNT6Aqr3CsijD7os3HPkN48awy6YUqF5ymNeZA5QTmgUBVJ8ZN3PiT",
  "key12": "SrntA98nsJEGxHr1YXfrSp5yMegFKu1dNUdR8TqmxzapBhxhP8doAbimN1j2FSBCv6r51UmJdZaAVA7bG2M1Ckn",
  "key13": "4Ehb5aLnSs9kpsjoUjVyAibhj72uspBjPYtJoEW3Kqr7yjEaAvw2aMfigcNaQDtK2HdUb81yrDJJrJRFNjR8w8nt",
  "key14": "5pCDkHjMmy2sMjaSj4dSthMdc2AHtzVXzzbkhUcxzD246kmmnXA1n8NXhLLpKaAZD3ZFRkeZ7bMyzGXohhdxQS3r",
  "key15": "3zzFAagSnphVY7ranZkVfUaVz3nCMzRA68duXs99iteWkW65T8KZZJZQjrCvGKk8GXdJGs659jBto1pnCTm58jDN",
  "key16": "6CxRa2AWMGz4uUvB58BkGvi1fBeHSUWr2VbRQ42isipD1WNLcDyKEfUsFALNtWiQ4wZPFy2N4n2REKHF7yPXNrX",
  "key17": "3sJ2XrYb7ozykJAKvZAsRakLp7sspbvD4B1FAbvSve6UVPkAUBccPQK7YHa6fvGGrNL12uPMYrPqFs3raYKhnovh",
  "key18": "24cjhcmcoEcDKc1qjqQrbpaWbU79HASpCToNp8KaD9SKG2W7H9GDE2vDuFrVbHYwoxp47v4MGpSJGZoUjHp7KxEi",
  "key19": "3SVvGXUMj4ephQKwmB4YFZ5u3CFPjX5Mhs2yxa4bezzw1zfkDAyXWB3GnwLjrykj5i38T1xUmEsfo7c4exAhQioG",
  "key20": "3eDQkBrnmvNsKPvgdFn2qM4GLBwJ7SgjMsy2Yg8rjLMsu8aUG2fKy7qFdXRcobtgwAMcrZHfPTEtJboMftQGWNfk",
  "key21": "41YMWYXAzVu3Cifgg6qFW1xXqcccxpL49gcpw3n9Sa3rUJDwWJv6yo2j6x2gyWJn5Gt5dT3voTZ8Sev3vza5ccDD",
  "key22": "jGDttdV2Vo3eYmmfcGve6BTsFaJEUXwyKxdLanpLBnthuVhaVntohuSbLwXDx6CaXC4Cn9m7Ecuv3GprXnJKRwg",
  "key23": "2kZgPn1WswiXoarw3PbXDEP57o7EWrVKn3YD4qFAEmbGuLG5TRTQNH2Qdfgpbm9f4z41bGHVX3fL5ViehvBTxysR",
  "key24": "3Jb9iLzt5gkaEBoUSXoVaVo446PobB2mHpciY8sLbyaKSju8N3NmhqPDUKQ7Xur14xyRkG7RD4Yu8KSr4vR7HHz1",
  "key25": "5nav6oxAJiNnG6eUH7sUiocjmEZ46UaWZBJu1BgzrD2Cs3u67MXp72JhE9utAx6hkxkYYbPoViGPB5fj4fnVx3cH",
  "key26": "34wJkqNWP1BEFS7oxjmepNroE3e4u8dUquG6L7iMNz8JWJQpJKtAZoEbVkxQ44kUd8W26uiwujNvMvFpVFKQnaax",
  "key27": "4Jf93FbXqVHf86DJNQgqtJeH5d4ehymXFuHGefHXdmhEwisxahHuLSie7of8bhweCK7ytVxCtXUUQErjBahSLfGj",
  "key28": "5vhdQNNhNoUQDXbsBkhJVdjr1GyWWcqmdFWBYPB5T33iW6ugKnwwh4X4cA2h1LXgnL3Nza9h7R7JY7ZfAKpkcWef",
  "key29": "5qQQU7TGZSfVhzdUT9U8YKtFbrVokfUYL5u1KWkkQKL6vJSdtQafswoN6ScwPFZf119fXdzYUPHdxfeTbsquFPM4",
  "key30": "4rab2ywwaVsEBGDBH8yxqxyj4xnDdnE8Sw176KvpbJTua4ZKXRPTVfZ3Z5SMGkjPZsaEDk9EUPh9GnReDbppp9S8",
  "key31": "4UWx2RJzeGRm1empicnq6agCGETYhSE6tyCyTYXY595GJNt7uuYFxWsLHDbtqmbRPEuj5JRwNDLhrmKqQZHJqtJ5",
  "key32": "4j9cCwob2z8CfAzAA6zZyDdPjNskRsffSPrqn7DJTbsTVq8Reg1doLZ9AkQpQw5JqKjpWb17soUt5CVTFa2anxma",
  "key33": "NgkQ5isDfyugSNvfyh1tweBko5YUKWaPUq1jAZEi2pGuqJKgDDR4edTU2tbxgpLRm6ph6MxW2E95xnptevMSwRm",
  "key34": "5UEoA3o3KcFqR2Eeh6nC8d3gHrkWCbeb6zDJ9mZHSgKgCvUmoVQv9TLcwf1LFWoRU3TVKfvdizf5hmsW4ntaxe7m",
  "key35": "126oKcDMVqGFo22wK7bs6K8Wtk2ZVhxLNsFfYuVi2CguCfqGLZfSfrdLkA11sQf1jfUdojpDdREqQKWVNn6cfGqX",
  "key36": "46fDEe7tqEasvmkykg3y2x1jtKh2A9jdfTqqSYFczJiCEuvPu8HCArpStk2zDQKTVvpXaZgGcvTUYEFhLoMpwJJr",
  "key37": "3msLPN1oHJcQxyHMmtHDgXFkbvUQHMqQAgfg4HN3on7v485uEwsFfoiTtMctjyFY4AiEqze4EYNwaXfgJbA2vziQ",
  "key38": "4KYPW2ddrHPetoQG5QsxVFM1Nvr3tZysnzT2xbG7ZL4vM7uRSncfarEjKQsDo3UWgrVwtRm759kenYMq7vM6HooY",
  "key39": "2kAYCfZAueJ5ZfihnGfTa7hyhGQpJuquYoQndqrg8AehnreR9dfpdTfRK364rXgB83nNKfPNVsY8wZzsrSEkrR7V"
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
