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
    "2mdqerbswS38F2W3HZKHNYkyUCgJsbc1kgFiVBcUjUPFR84Yg8xhEcVqkYwYH4b3uCzEerAs7jrzty7zNMzxSRdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64w2ZUatXRibUMs51oHQsswtiGWy7jDwTJWh5ptpedfgunRxz4zqSZk74Nm2JxDefgMYBAHtrEGBbAHuR7SuUGuV",
  "key1": "4v633xDmpX4CNdHdWkx7SCWhdXSvFDwqJH1pXk2BtCiC7TjK1W8dTv9ZnaTziq9rcofKm7Bzwy4Dy743DpXoRCqd",
  "key2": "3TE72ABt5PxZKTxmrhwexJtSa9x7cAJLxZRo1ttMFNa2sjVcEcoFQVCF3RBbBnisvxDLmtyGJE17EfwjD9ZUVWNG",
  "key3": "5PV8qJwPAc7UVD9QY9GeaZA6ZaC1QWe6QzHMmoue8vVwC4JMJhskDnzJTYnMxsEWMmgLFAWbkVA8ngcd5fUHrRDX",
  "key4": "2YnHkSDL6cVQh4VmThoiJvrUpKHhYP94uZ2tRRyHDZk5srpWyrbLNLZTYkqyhEe6HsW3BnuGZ8vj3DBb8tBF5jZ3",
  "key5": "2hZ77Q3YVyp67ssKsfh3RC7ohJgM2UABySH3jrqGLkrW39zKa9LKuj6u96hTkQ2WmPe3MWMxFMMYvcwXNDEdH4u8",
  "key6": "XR7TpLCjbJStzV2hGcR9EQJLdZ3ZVMVjiLffgoWGsUyHYhNoTpWwVJFm9amjKHsHmYiz5WwF6Zc3wJsRGciWnYu",
  "key7": "3dwGb3M51HCVePZzqqpBTTL5Rz65U6LyZbKjBozYjYNsuuBdTJVg29qgvUgFJDFsLum17bFCa3YgpfxtLKW6APQE",
  "key8": "KUBY6bYdqNmDoAemUEhX5ZGiYuvCqZkbg3ZGfDWzHgSoEKr2j6migQu2jaqWyPS5fJ7Uue7AGggtea6tgvtLaYa",
  "key9": "pHqQN89Rs4Be6vNPTyDgWnXupGH7dFyoowFMyAtjGgAQ2JXoEPtNsqXmEbAc5y2FfXLJMCj5XFvafvfuna8rccL",
  "key10": "5U7BnEDJfVk4rRzDKHyvgxjHjw9nfRhvbu7995Y3ZpYZoTtDkT9DkQPrMyWhLis2zmRqgcVspbxCwfR5bdCqjsEa",
  "key11": "4waxeJQmk9ftqoFQ1ULXg19LGQaAGsncgX8NW4BH9MQmwvzUd6ZSc8uqzLnTBpGtngY39cinKWaJPfo3vTMG5JmQ",
  "key12": "nx8YEQvpUXJed47sWqTy5LAFWu4z3gUcCYbqQgyW5r9KHYM6DTo51w2JPRvYZNJYm2FKqnqXxSeHSRYdWkxaMyg",
  "key13": "skRb8BFuejMfGcDu1qJhBdPELPT9D3BjRxqn8ccFuhqTaJpS51RyqLAsBUL1GJbH9NNgHFst85KBiVNm64Tx1eX",
  "key14": "3CwLNe2fU9eSDoSMrcNfpFNk7rQ9AzUqJUZahb4qQvSmTM4FKmjUEyonYuEq6ZpHv1qBgrShvp6bvK8ve9BQ4f1s",
  "key15": "5oKqygzjpJQeVY9YrntjVeERZ39KtSwLVUsrxAsnbwvNe7mrJd7Yu7rxFJG4xJadpUZgHfNkh6mgDZ7tYVhViCRU",
  "key16": "3gwwbZr3JddWJZ7s1uQXXyG5YEppmDaVMUkEC8NwF67DWspRKRrYwceZV2pri5B6C5FUobcKz2JM8NuwJ1hmpaMd",
  "key17": "5YvgieVMFVQSct4od3pH4yWHxE3kZiNvckU9ey317BrjmM7xcXtDbVQeuhCU33KeYHou4Bowh7cfL5eokViGjnmu",
  "key18": "gTwvXfrMMYyzD9dFLDJY95s2d1VpQ7CMVAiv5f3ppG3hGDtGeFAgYF7MTNHYvtcXasrQxxxgKoghGwezia9Ni3u",
  "key19": "4cVdMo8TsnPDF8DkDAxrtH7jzFkm3uQMwCZaHwMHtvuV4J2ATqznjjmxBRpcGYCFbkrXkCX9uxpQTauQWgP3dNPZ",
  "key20": "eHg3eTXV6RNRDERrjjLtCkS5E25tMfrfUY9eM9B8zyuH8QCV5PqnvurRjxAfdeimV5XVvLujWYmMK8gvVpzezov",
  "key21": "2RShKff1b5ozcaf4KRwnUkEmGoVb1mCnV2Vk2uwwRfRYSdJwLaxC78XBuYfs54to5s7vodRDAwV9NgV4RftiQQit",
  "key22": "4beeqFHwxsag6a3AsnFG5rB7yYt8d4nHFYmZ6DTigNTywu8us6P4czPbtwUTyMeXeP5pucw37eer9fF1BEyMrQMs",
  "key23": "Vrfrg7ZWGHQitLo7ghEMwRojcMkaMstMrhT8khpq9h3m5eYZRwprFypELBuZ2mPSt1HcjqGxfTmESMk7ae3y8B3",
  "key24": "yBze2egeT94ipRgqa4kyQN1iBEpHMxLaRiegD3bFiVAkFs5f6kdM2n73EvTJccPwkvgr7UEDTBws2B7FaY5Y975",
  "key25": "5xstjisfUf5hXNfwDiRpAbrrczS1uBecPpj7t6cyF3WoCT3KqEn7WMQsxHroza6iociH3QpAVjhJwZxtnepKTD3b",
  "key26": "5jxtE11fS51YFcAykybKhqj4TDbxc8vaP9wU2NDig9wYT9FXmMgJtaXfbxCSuZaHHnY2rJbdW18JGQDtiLN1h32E",
  "key27": "4LrVGu4mUMqptqpz6f3FJXMSBU1yncbRMizjTfW2aeoHHKWZUeiWKFmriRjY3DmJivNRBpxo1qWaeT2TjdzN8kPS",
  "key28": "2p1GmNHqkM24yaHrS1hXN9KpmDGRHKsXosou9R7ic9ckEXuvPfwJetcSUv12gPGRraK1Q38qJhMMpmkMaHZSmJB6",
  "key29": "2akfNL77Dbzg7gjx3YRXEm86z3BdkQsomjFf2fmsKwxuh4a7bFd31ioLavxwK982TpiYpd6rTZbNNp4jXLYa7CbD",
  "key30": "5sz9k5tDd5YWQXsmdvtarxwT4E8dzmhnFrdiY2pHBKe5epRG6hZJetigBR57WGAVsuSm62iJp9z7yyxvwq5p4zwn",
  "key31": "3NRAReE4HJ7j59NSXVQ1e1tXt8EfCg36vTrAqE8kpZhgY7BneNkHV1EkNRfAncfyFqra7UPiWnoHsCJFHJWmCmPJ",
  "key32": "2FAxBK2dgD3RP7Ajd9JC6kKkFgnKRv9DbZ9AyzZ8mEPTkc3XTioVeSGaSycVLkyiCiMkpQyMzXgpRazPi2V2aQom",
  "key33": "AkpHK6xXpG6wfe5gWC6WPeWsNe6qwLQCxbXSpiAjAk97NqX4Uhm5W3J1D8mQTNHkw7wfP12oBZsQcumKmYmdpaw",
  "key34": "FVQ5P6pWT2Wa3iWR3YSsRxdgNsok1xfRkwhnQZFHbX9LKRFaLGWYcUUs5ZztDgdAJnUWrksbh4XALxdQ6pDKyi6",
  "key35": "5NcoSJBNF5dXbxw4qdcYmmfTEWNjNBXagsF8oJ6HDgo1znKgtnM8hK85eeoZeCJd44Vm3YPW1LQiJ2Z4DUCvTPyW",
  "key36": "5Qunv9XNTkNi9bWtsSNJJUZA5oYmBnLhFda395pJrUhVhhVVD8SKtir1oBreyj7SzZPG9B7BjgTnLQ61QvY2i8Cf",
  "key37": "2tU56sXfc6Ka75UKdypUJ5wo96jf4iYB57CYXCpCSjxvQxN1wWbzktzgoEM6EaLmVBnT765JoBRW7kZXbAa3sar7",
  "key38": "57b1uEAqdUuYpafoiSiaTquUBHATLVADoEjFzfpWf5FRjyW6cHi3YH7mc7yosF9221Mm8GLMS89M3ugBse6U2Uxj",
  "key39": "BipdaFQqkkyGRoe38vYTox3jjqt5M6N6Gw9rhuDCZxXJUGmcPRGVchBzifwNGeebRBHaVpbqzWKKebb48F4pBpb",
  "key40": "5EP66pz8ivgUKyjdBvfsw2wmgjT4ft37Hf41b6EpTFYLNAvGTUzjv6V4mpDhCPteQvM4sToGytun9Lt3kQyn97QZ",
  "key41": "4msfkA9NbgXskB2K6XyXNGXMwENEskYiR2nhuAaxKAbMSuBcPsJRtGjp5Tpd4i8UJ2dxSRyxE7JSM9xRj8amCSeD",
  "key42": "3Cy7rfQzQusXbsoAnuhxQpjKovrtx5AueAdrxbejnkaVD79pJss7DQ55xPzBZuwEJat1Vy8DZcgptyTzTebzxaf1",
  "key43": "2PYjDeYq1diRckJDJ7EdEvFyhoPURsZ6ksbYZC79qJaQd9LCDVgNY6gg8KHtKRCpyHVMFhKXKrm6XpaNMekT6Azw",
  "key44": "TtDZUn7EeRmnU7qXgm6Estn1RQ5h6pcoCqQMGV5CFNxP4iLjZ8UsE7vW3gB77DiMPy2UYqpXE7WpNgZavcrkQaY",
  "key45": "4GNtvYXSRWbq5NWsmtW8EmmYkzeyYSVVULmo5Wg7HiosAVxBLYbp4BbnAjMsNPqaMmeJegYX1mzKK8Rwqz6mwBUo",
  "key46": "5w18NWue7Y9AABkKNxg4YN16TBpE2LGsDiT81PpH4mu42JfQrAdYaXdfBpCw87uAXm7tPDSgCSuZjGFPtie6bkHk"
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
