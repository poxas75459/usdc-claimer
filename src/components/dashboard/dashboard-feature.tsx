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
    "2qXGt5LBLRccAk8ak9BxaCyfEGDk9tAoRtKw7PdLvTeLaHNjzmdJvjsUAc3hWqBYNaohx87b3TEdmeCTNy6hZXwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jT5wZ9VZrKCaET4MfoBwUK5mQTDPikSPDJwiGrq3uxSmoUZZycNLwuDm3EjqpjP18Udq3gecF2bYPew731xZsQg",
  "key1": "5YkaZkcEvbBps1R61az8FTjPDTHjdeQMJDtLY5L4jWyGqQE6JjnDKMEHdDqhM7e38cr8nk3Ah3qLpUYQJEm41Bqn",
  "key2": "eTyda98X7s8HuVywiTuAFa4CRmodieDf8Wc92CnCHAGDbFhiaoEDEmJqmtYhsYd9sNqtcWST5YjVyxHNFvZd5NX",
  "key3": "5T3c3LnUL6H7Nw7pdNQqk1pJFuymhENJsbHycvn7mSKfNnN5hi84L2v6cmLKnAf3KJKcFwuknHPcM3mc8kGxtimR",
  "key4": "4KafxfSiEJJaqiryJnDu3RVMVs56ZUwLmkXBtgtf9297PUutMnutYpiu2WNq45zmbme7RTNwBiQDZfp3wJtrV3KG",
  "key5": "67bcPRe52Mua2xqrfdWVYgMH7odDTHgMcK7Pit78dqS9oxuLRTazEBUdq94AmCcJbuwK4sopJqSSuRe3tN8a2mi5",
  "key6": "4JvKCaseGEU2MYUcxbieZ4cmEwpfeX8Dpt9Z89VxVjG91pg8FDmusoX4SwuwTrGPUmw3cAK1XwPwZxU689RFZwSu",
  "key7": "4igYPfaaNNWDMr7HMNbnTD93bMjVVWnmWFtJvH15JseRdC88w7F2rCG4KScexAZkmwnT9B92YjKA9MUnRs22PhUc",
  "key8": "2qPaEZmv2HJ5eYGUgoMpA84bTiWTeNc478AzvNp4gqiDQ7kmtDbzJyT2ViRSPK52aAWcMJHgY6YqxNPfgeps3gZ1",
  "key9": "zJba1r39GtjPMkiAu9Gww4A5xgkMEbKLnDSWHstgHbrP6vFiEHReAFSTt7Yvgmw5YZHrrGtiCDJFVhQjHZSuhWh",
  "key10": "2kvNXQmfzLWxJ1ZHfB7bAD7xh4jsbh4qB4ctWNvUqbf8qA8YDt4H6QhqyT2nH9mxggMMAeUhqUr6Qqr737haMjCm",
  "key11": "5W3WiiMephk5gqJ6TiZC7JFnfwLw5GouijwGnbzHY2cbUc9xnhgCMg8mL8Zy8TCVpQJCdCX2Ybri3p5cU9nFFVRs",
  "key12": "F2fVz799X6MM8h9KJW2VQDdiDTUdhwfsQoNnNUoc1GtQU7bfDGPPNzkK5CVKTC5AeQq48t9TsY3uYTJxX97ixdq",
  "key13": "Zw8JPZzosLDxiu5zCg752586upjzcpjUYHCkZbyN7W9eAevpVRXKkGhP9sgYYguq495FvoAC8MFHiEGv5F7FoPx",
  "key14": "GvqezLRm93MgxMgs2dhbNRAUfo1ShDkHYJMdQKHGz1ujPuqX3x85x77sfJX87Lvzzpx69KYPtar3gFVnZ67eAsR",
  "key15": "2JbRatvAfRmghKt8oWUg3qVJugUHpQNvmtoq1oD4Nmip8hvh1szQP7ZR8feELdL6zNMZPwGnEKH9g8egxsWWGJrh",
  "key16": "3gAGfeY3PMYiAZcMQshaKd9Kn4yqSSoPFErvERFa2TTayu4r6hKJcLYoUiXmD8FDtatHTrEFb1D9LeNtuxFRiES9",
  "key17": "CwWiHaGdCHM1xEmduE3sD4H7BFEskhdGDGDaQctwG2jSAmHMCVPiZ4z8HFDNAfJgi7rhJNeNPc7FqoQWz28ggXF",
  "key18": "2cMT9zECxCmAJHtpMUyaUbrnLyeavDkPK8uyy6W5t3hXN1EWVYLNhcZs2ewis383npJ7pRxp9kng4kMRtWUpagzQ",
  "key19": "nnKBdzxVNsegzdhd2o9RLMEFNZt6xQYLyWCEE7askmMPu3Qe4tUkP3j2s4jfzvFi6kA6pReNA6RNQdNSp4w9ZQF",
  "key20": "ERmoz29ZjaVAGT6d1B2S2bvq8FPFWsDr6eqJrDiRKUaFVpp9hZVF6LuVm7cDBzufeVxPSYSSZxsmvJLBGHyZePV",
  "key21": "5SbygaR3VcdwuAKQTT84aX5sxWhJpBLQeJF8X8AerMWc8B85GyC356pbQCy9u4NsQUmyfatEMBsDQgKgXYbf2tKN",
  "key22": "2Vwz4ULHYwfyy3po79J5xu6eC2KSy7mW5cfcc3VHiGfPbNydxiP6TpzMEELUGx1HJyhSLyDvroj5AdnAFaGx82Ep",
  "key23": "5S4g2ZBDNUs1UKEK97RZDJzpdGZh8s1FdJ6rpuaqTQuReD9e9KXX39mjVLCk2b5HSMYmTk89TVAS6CtqcR2wuo2P",
  "key24": "3ucpYVx2J6KDVnAUUJk6cFdx3WmgxUSEiusuAHFk1VHJwLAMfrnqb9cU9c6SUKqLgTus6Q2Co6JmZ4aXWufga1v7",
  "key25": "3ocy6GdoGXVRicK3FM1U5Y6WacUMEMLLtMSoL8ZCRWRVNGJeRApQtHRHbPwFcqPCuGH4Y8vRwySpayD4VsfQpH62",
  "key26": "3FNCS1LHQtQJKsEKdaibfRuBhyQGyfU7ontiL2oEiENPJwpvFb6RWCF8F13LL5ER51Hp3XgS3C1axrhEuB5S7fgo",
  "key27": "5JgWtijuSRV9uXrsK1uoREJUSoytHAZczriCfYzDFpjirbKBDNVdLNFvAWUFjodQhKzkdHYFcyoZhwPVoJhkkPFa",
  "key28": "4qT78qjPvmHbtRuTNTELGwJ9sufcrB7iaHxXCb7YUBcrpL3E2goRuH7rdx9r5vKkZ65TQR2wzvhTSFz9cnNDkstN",
  "key29": "mWYQk1ioWHxn4aSZsYJjLH3v8RSmo2QCKTT8EdzipaaEKGEB35xJb43zq1BHodXzR2d8pGoCQ3HRfbLN4CH9tUn",
  "key30": "2dSzKjjLq58WbPo4bSWWCKZ16x2TXWRTzTFgfurEZHFqh2wcpNJFFMMVTYoVMnymHuu3qEZnuY9E8pX47HQve9fe",
  "key31": "5XJzrYAuu33p245zSWwgFwpYfmtC2FNaLbg79aiFAXttjt3LxgcNAGmaY8iyYTnBtWf9dkhFRMqYKKbTPgAgAEYw",
  "key32": "oDZiWdiwwDGAtjXhM2waguXftX52FZq16PjRmxPcwr78G1HpnC8XrR1XLRgnMJkkqrDtHVGmvPDwcawUnUUBofy",
  "key33": "4kQiG6jKSRpCGJxB23U9hmTgA6B2eRrt52vLGs1uVfkXzoXCgkcKHP9itnKDGQxSsjdpfWTuQs5WXGNcKEeHs1yp",
  "key34": "2ZwPR3bdstuiardwzwhueh3m4HKzGM8NV9GHyddEPPPAUjnis9jTz57uizJpczHoFXkm6DnoP3ncLYBH55moED1f",
  "key35": "5uve5qAua1MWCz29H6rwRgPYnPPPdKxiDtKzGtU8zSLdH8ZGRHVuZe4tK3GVU25xmnJyL3dEw81usosgEdKN8SoC",
  "key36": "4qK9RBmxM779KMCynouzvdqMCti3WBPmkpy7TPv3BBaLYPmobtaEJ2n97ocZonAJpYiuNWnrdcqxRmEt43oedbcW",
  "key37": "srefoy2zAiX3Jvru2JhNdmNvhzmd9PCNj3EEd99CXtm9FfYKHnJgumiwis1r6HvUgAi2U5Qtdt76MYitzdybW1t",
  "key38": "nQBvRaZw2WtWzPCAmEBw9mEE9cJeWjynEpQ9P4tJw4nCEFLyDThsk3xaQ7wjy36JfhRW8P5qx6EvzEWDWM2u9sQ",
  "key39": "5DDMd7CWRfz1enMb1HWS6YXfF3c2EF418mi7UEkVDnTZKGKjofKVnTZQNNYRojo3yRwaz8UEPnNbE4SGeYq7WYWM",
  "key40": "3cmTmt2iXUccWSBiNSeR8bfhsQtUeGKUhzoG9yKpNPAhPYkwjn5W4LA7V9UPAWCCfaTqzXoH8cxXxCBbEqVj1waB",
  "key41": "4LrYTAptCCD75K6o9q8FqZ2k8vcHAb3WJV2zfQDNwRs5PK1GJ5ucGRwiiPtw5ZoVKkpbpt21ykwR41ByL4RxHAyN"
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
