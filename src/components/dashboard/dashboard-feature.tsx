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
    "3HvSq52d1efUrhWGCa4onaYEzSV4f2i8Pd9JtHUhj48HaH6XHXWUTm9hNtqUoryWkbsBg9GWeaceHFo7WvujKd61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o8XvXW7GBzx4HJL3rFD3zW3nixMajyjuqnzbH9kG9EP3X88q84mvYHtiqHrwosxUzJFeHydrrzd8Wnb98xR3x51",
  "key1": "4xZQX9H88AP4pLpPY1RgQ9MK45enoBJj8axTqazzLW65KcUm7zwPAtsuEsJKGNdquxhdWZxMgUUuFPCZmXxZrefi",
  "key2": "46rw55unK6yvaG5bpEQ9Dopx3DypiWfNz97CKkDxhnozF2Sk7ssZx8zR7q9V5eNZ6aShD9HviU6BXUe2GaopuD2c",
  "key3": "e6U8RDT2g3NVNBjXXS3ottbdTAFXPRWRgWv26v6nG9C8TMFq7nmqC8y9HasQjrWDnEfza7b6xHAzTUUjkRjVRXa",
  "key4": "m5msfrxCRLVTZLNsnXPN3JdNoXe2Ja6SDvY1rQxL9T3b4LrTneLdj5qpTNkU5cTa3mCcjCAmZb79S5TaBWNvuEv",
  "key5": "yRWGk7WFMpbibpGP23WRDDcv1SLD8nJ9BBCNybM3DTwBjvCXW5j6qcfFJDtq33akt562xzNtDz7mdN9xsezLS59",
  "key6": "4rqFXcgiL2CYFCVpVtQh1nZA4zw6EEPi15rJQbsRBJkMg77YvdxW615Fev2ZBEAuXEeFrRMgvd5cwG72MD3xcnad",
  "key7": "wr4vypwtkzwdxHpbYbjDpLLy6ffqEj2xqRbWebtvTd8Bc9MKYbCAMFTrnDfY58Lxvh28qwneW1V6yxPUDa9Bukm",
  "key8": "5mR9TLPCGUfwsQCGDEg4FWkLkiHBE8vDNmcJ9KqfmL9jsfTLg7uEU63Qe5VKj9j91YXAzKMk5NEbJhoFzpG3W4kW",
  "key9": "52Msq7DvBxSGjq6fy4pxMBqhLsrJRMRmmWMhKEu5QkAtkWLgfRAZ6vqP8opoL8tVRcUq3fcN6xE5GZrVR8v1Vwgf",
  "key10": "5XD93e7fR5doWzfQn3cFZpMKowP6AfDsjmbLiEc7v6XFnqW9UeyrT9ZqhAcs9skitZc7wBj3QSFVBchYv1Ptxzhr",
  "key11": "45iQb5TNVEi6GX1NbRFomdhMjUGAzHBYUuAiNh8zZudnr1hcrLDWdSnWT2rNSouWCJ5b1ouoBnSWTcY4vjAKf2LT",
  "key12": "3yJTcFy5NVAyors865u3GF7hfEbHhojHJCvyESR1VbTwoaHqvcYRmkVhzXabZDacJRrZfdvHYxwWR4wDu21wmb3F",
  "key13": "5eH1z2w8igFWcASELEtBste3zFTzSBndCyxBGDDKGEdWRvyRughWSkXNMkXZtyN75BvWvesCP7SNVALidt33eTc8",
  "key14": "4B6vYk7o2TXgheVk2id3JczrHiYGZGNzC4vs2ccythv7hvFZgWwpNsLNLVJnUAjsP6gjDbzFeML62P7Rxp9VLgY",
  "key15": "3zALAuG8ru97TNxLWstHdxX2qvwv63bcSJiCLNfG2MFvVZyE8iWa4LVtj8XNPYYcB9n1xZTnrEJTjw54QQJ4i9Sz",
  "key16": "48vpMitmToUdQo3QV3NEgBfC11UTzgDFNPGAXauWXUWsvfWYSTYbTkZqhyArrhmp7FctamK8EfYuYhSLdnvXBT7N",
  "key17": "3JFATNkMdk8FWxdQhcFDb8TfHgLJq9wRCiz35zBqUrzTPSDHGevzKiuNAQVhHfA6hrDUTL7oAYYQmciwq1Dz7Qfh",
  "key18": "52yXT1whDhizsinEiY9k3bMFAAEGb9VmriZ8EWREQGvGV8uEgcGSKCAQ58z5eq2q9p5m8KZ8poEHBuQhp1mMiP5k",
  "key19": "3Z6JW552un259ZrSXeJ36mLAxDDnuzbyhyj8zJXZwKqKJJ3zMhfj6zFkmCh1HF947LMb79g8Hz36keZWF6SXQgvF",
  "key20": "2CiZG8vDSShWmQqY7fdw5yXr3wWG1e2stqmi9wWRhL8Pg1s7JoXpGNJxgdDMDxmFw3AaiXGkFKJwS74uuYtWMJkD",
  "key21": "3YApqTdjY3zG6o2veByzuzTPCHfNSr9B3umCPF3MYgQEMYQJfkpvEHn768Z1myBiw3gjzeZ5jppGgQxw76SpauJT",
  "key22": "2s4H2zuWdgYDVWxrEej8Pcs2SedxBAmkMgNrDxAae9dzJSekZsAQv8joUVgEYCbD7msz7s9GMU3y7sXqjA6VPous",
  "key23": "XhrJrNmt5a2efy8G989XqdPQSj4soeQQzdrQDt7gd7oquxt8NjVkudau54588nbWdWKCw2TbUeG6fKQBBG6nSVQ",
  "key24": "31LxasoRxX1oU9cDU7vUfoPNSiZttbwohpQ8R2Do8axau9JZ4ceGrzdRbr8AWHCQpovGjEt9KGqbeoiqreyoBhtb",
  "key25": "5ZbyPexZupwjui1xxePXQVMNEGFRmDs4jMq3T1AWaTm4yExhYT61QDyMxo1pFrdsJEoFTUkKY6eJpVtHQsvkA6cS",
  "key26": "5mxhsYn5FNGhdir8y5gzAAN99kbmg1rWYPyuG46QWcahwcHd8h1CknikeeaYBAb2wELj9hRXJA4yfkmHUW14qxrD",
  "key27": "t2tWujNrydRsUvv5zQRCsRGuvkVPsE23dWq4927MKMuxe1Z44nGPA6EchduEQtqcAwY19H6BF6NYj8dGo7vUCq3",
  "key28": "NzyBubac4ejfoe9vBy5YiXCDZZQU1xtfKQAo4mf2fHaSsaZ4g1pKyTZRVbg8Wha8Yjw66WzanLRFVRcbGJv1J2x",
  "key29": "5a2Gv4EeSkNH3ajvVYrF3gYPYxuWxdnr2wUVYaoSBsnHkwRANUAAqfSm2PsPA5Q4RerpTEHAev2x1JMC1BuRUcq7",
  "key30": "unW2gdjABET9RXzbUtirKnr8shRherHJ9PGJ9M3TUAgaEVWpAzdmydhocwDaa2A1sBXDfLe1ujcsFXLTPKJC7vT",
  "key31": "4kmcrEkuq7CqVLr9a5gJZhsf1K1bj49bkkttdh9SKeVjtttBjJTBH74q6QYLkNY6yWeJB49ZpoXxWV8fKeBhhndV",
  "key32": "5XaPEkJ1QontKdmdbSen97SfJF7UH7PS67LRJsUgtTKsTky1yYHKMYNy9RBwdgMghV2TGA7Dmh1TWs2rj9kPTUqF",
  "key33": "3REJiUAaeueANxmQzaZyRUizNRbwTW5DFmY8P3JfvzpqsKPmZBBkJZgw5fZPtW5Gwk6sYJnH87aGBK22zRQWMnaq",
  "key34": "4d3ywgfZrPAseYDmLhZeDXvQWz5Y2Z8oEJkPkaEDw4DZB8xQq92CMJzDU5cirLSphkH5uBzxUtjtjR8RCbhVTYbD",
  "key35": "5rRdMTDG5EQS6UsMeiUig9mYPM3MdqWy3pemuk87fJXWyaoGB2tK9j8mkX7A3H4f9H83Z5RkVbtkgWmpDsrTudbG",
  "key36": "3nwjPkBgfoitt4qE9Gz6jM3y68rgQgRuFJdgs5HwMz5NhEn4byQkApamXePvJPAjKNGQtCaT7R9YxD6DGSeCDDeo",
  "key37": "Fe17aawXob1Z8eLyV87qCpc889e87NdxmdMGukdtYVmgDNUrfufNFVypV1b7XaXpQmAJzJZhFGdKZcdnd5nNarg",
  "key38": "8XGbJh1Hr9uEXSt18yevp98rBEqpFQvucjEUEhNAsvpsXJQk3447AtCFQRfeLccx1uG3uVA2ocjaAGhiDh6thqq",
  "key39": "3zMrAhGizvsXPDSyZMjEvSJbUoaGDzYLAnUnLZzjdcrx9hMr9BVMsHeQp2w3xfqnAttaqeNFbutg67nRCQReqopB",
  "key40": "2X2FzkahaBMr9Gb3gZCx42yFwfEfM8qQy99yFHndMf7LEoGwxiqUK4wDy1zRXad4raVXdssVPybgQyWPU8p4B4Cd",
  "key41": "2sDyFGLSLbQMBxUvEH7YXcrsMBLutUth28hTJjSMGVH92tDC4uSwaD9daixiREFip3br28qSRkar4dZh7DNE5F4G",
  "key42": "45K97qTTkdswcwdv6GtC9SfoGXEZXWvChHrJELMAFyUUc53Sh6nSB8BPDzr6qQjQkLvA9sdFxhwoZ9jQ9LFkNFHJ",
  "key43": "453Egxp3TGCYJmnfWCeX8QDZXDGcvaYKe83eocUAAj54B3CHkgJLNYr158WSyKh8gr1JotbsvpujhbSUB673kiPD",
  "key44": "4S6tkEhpjVWE6gd1hgHzrQxxEjgFqm4YDDdN9VHfepCDWwmFamuCX8rpUcRu29P6sE1DiZnMoCWywRD7QvXAq71f",
  "key45": "2SgFHxeP6PoLKt4bakXWHBGgTxWABx5jF5dUehkCn4kdyEf3fnT1s6TWbhkxSBcBt2v4zJ5jx3MPBAibH8V1CPMt",
  "key46": "3KNpqSkJyC6BqCaGJtJbrJvpmSWC6vPL5BAS1T6oyvmzaLj1UmJn7YeaGzUfra4fhntSxPhhxruW23t9bxtLb4ME",
  "key47": "4WhpmsuMaaJMHegc8MLtLi1U9aAkQxhu4JA1C73X6dtD7MASwGRvuBkd9UbSJ13wQPzQPP4J4yN99oADhP6fDpzA"
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
