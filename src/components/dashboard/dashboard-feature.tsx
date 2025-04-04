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
    "3naE6dDDs3A48hYPxnNtnux2zRYK3jquW7gxk4Kw6q3dprmakhbUUhbxq58tdjWW8kimXUgujbkrTqczzvaUYA2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RKv1G7eDxexz4nsAVbrRmLPqS2yPu1yFaw7nanNBipkzMpo1NT2EWdXYtezVXZveEQPLLEpDpPAawZEX5XtRgdy",
  "key1": "3DpS2rgofDccA8yoF8DYyyVbUM9h16FyiRjqSN9EXv9ufLoQBYxFtAjjnehJkDutVQbLi3rgyshg42VEcDANiFvA",
  "key2": "25VC4PWuwgk3ZvNbLSJwgvZQ39wV8Br8eYzn65Fi4mtZjQRoNsgddY2kJQVg9HNo9b8ZhSbsXBL3f8mJYVbsGZwZ",
  "key3": "5KPbFyvRwES4S1ZCk9JaiwCxobBVUfMohKTKQuNs5MjgaJD62qrKUUGCHMRHzxwCvzViu8fCcM22RBRM7sPeZ1dZ",
  "key4": "27M32K9DrGob1tKvaZAtjG1zEWU3LaffLwABvcGHJsCmUgLsevEiAohYhpmWq7okqAoijG4PzLUDXjGoDBKnvhbS",
  "key5": "3dqiLHqSZfCxSKcL4H2hzBsqWdcKk9JkiHSkzkTc2s1sC4Mr8EJapxq3gXEWf7mjJ2rhoS43KsA4fB8pSoXf7paA",
  "key6": "YPaZtdPKY9oq6aezQuKFz88rq4XYb85cXkpniqSMKeRw6n68owex4LepxxjoVuTnTvkjXHHJj8RRHYb3UX4ZKHg",
  "key7": "4VcquqoWSXeb6Pb6DAivhfCguNiPijm4y766Bwh7Cy1rHQzd2kDGZSJVW8t95SCGffW1fuDt1mK5Z6FxWMNpTKoG",
  "key8": "1293Wad9mf85Rg1TD5sP2FuBWG6E78Pagzdg3rxc1s14kJ3ttveHbrf1YSZTi5sjgQxZ2M8HsbgCiVe1A2TuFsku",
  "key9": "mpu41mK4ng2pWdarsDsGaJCRpv6X8gv6hHoZBoaEcbgfadqv5jVvEktyK3aUUj4KNJ1vcrpren8ZS1hH1oYUARL",
  "key10": "3Mbx8wEsQcRxjQAsWEsrY4aim1V4CVXo5dmFmTa5r5XngC67642TBqsZuBWB8qu3tUP4ozntKb6EgodCbgWkknPi",
  "key11": "3Fkbjga7NzeA9cr7k315sPNoKbb5KgsDUKMa7V9zKXmFMxpDLWWwFbvKpuzuSBmqKb5fjWinUqDfiYVSGWYvxkrj",
  "key12": "66hvpYRnBjzjbS8yyGDjAxA6iWeYuCCMFW1FAYTGxMDb1afNsYn8sADTtVVZgLfQ4UPGM78ZqWqwv9q9L7y1TNuk",
  "key13": "1VZVkbzpkhKq5QGWeqPVc6jB3QTPQSgD2gMPy5vUKrqX3s5NFU2inRtWtGQX2M6RUk9htnRnCR2wTBNiEY1zpYB",
  "key14": "5jpetmrPugdqmoEm8QJGhPTxJVqiAcap1kqdGC8oJQBw4nYnoPzfurxX7RyYE3A4MCqyrrpUNDPeushcHf3D9149",
  "key15": "CX71E8VK4sHXQUzQL6pChgLqipV771SKZTqvHALJCcJgSr9oSJ6wxUWhYF4suE4h9tqrVSgnCJ1jWy8JtQLuZ3L",
  "key16": "5HT785VzVqNSPF6dfKJS7Eaj62hCCZmij1qW3PzGg1AAgJQmUH9QahTxRkn9bsBn5CF4tGCCWRUkVBDd3jZAyReL",
  "key17": "3KcXukhtUsVoR49HwoA9bfK2w9BZcy8QnVm74rysFzsW45iqgu9sBMctbyoTbNoH5Ko32KRRNce7PFehKKiUZ4ix",
  "key18": "36gFrryADaJA6pwaGtjn6EWgTP95fe9yp4au6jPeWx7xp9jyu6ST7ko5offiijQKhzUPvq4cHimBXzaQYpwbHqMJ",
  "key19": "QaZHKg3Yi4DLP3NAmyL8SeVXCS13c6oAgi8nW3mPGx2Q3pL9SvuQoLSQ7iKoBsZ9NjmkQuBt3UbEoA53JURzJc8",
  "key20": "3j1rd32kWz9aB2Sj8vKjBMAcWo3tHFewjniwe4NaaPSA7cRvvL2oFBUqnEgqdJuLtScrnFpc7Qj3cJXTcYhUxU2E",
  "key21": "34oWp5PumHNcWGxUSb8D24DxUxv54qwu7ZPXvcxGMWPUSL72VN7bSNuAz2iKFUo6pgnhvQqRgEc6UnuozVeMaQxf",
  "key22": "3gLHnGYRzPTLXkd2UfDQD5YoU7S9qXtpZXtKxHRUX9ud6pBG2kosbcX6uDmQ5PBaM99hxUe9c5NzYBtnQX32BGwP",
  "key23": "3LYDupmTQsKr34A5oDUiKr7cCSFFH5qPXotjDjf9R5GjzB5pyHsZ86rUuNxUjtzNE7i17rhsGX5wtcBCPg8S1JBp",
  "key24": "b6Y8iqs8rtvmb9z4KhaVnCVSG5HiX1ujyNYY4fSDuF7L9japMKeaQFirRCAeDKFwPHLPhpyv18bsR4KTiHpQ7ZM",
  "key25": "5aAsVqgUKGHoKMu9f6QxhoKqb5RmUJwumBf3CRy1wRiSrNLqyBuZCRF9GCKcNsSRBqabibEkcZFi99A622xXnqJM",
  "key26": "2x7uBeY6trtTL5SXVAgmp8NmmzXGKpCS6REamD5kHswgGt7QcNjdFsCn96M88C74TyeYJQq5Fru32CfNpNSR6Rxn",
  "key27": "5r7v9QMCdnGuu3Gj3CQQyEiACnEvi2H8DSDvSaXb43NwTNF8e2zjXgtRJBqFVvgd3JhupPbpdAnpNAtXcq1x4VBC",
  "key28": "2Z2SftepGN2M8KVxRPoHuaZFBZGuJcrXxCdgK4jGbEJQ1uoSMTypHoWPrYfEWC5jD52L7tpC5YADJnscq4b5b2kx",
  "key29": "28pPVFFQriv6z3QNsyj6QduQNcsB5Jo3WiomCiFAciJn2NvWWsxMdnxGsSaqEpN5w73HjUp439E3mrxJ3sZvDGdy",
  "key30": "29hL8zZrNXBWLYyBFrp4TdPxv7k31oeTvVdRkgzjdsMvfjU7eUBUsdFw3TsHniQwD5fRHAUWpDwQimD8r3yPSRJR",
  "key31": "5AabM9dTF8frKC4rGXiq6c6vV7hsVwwUAHakxuhK7sLPSMTUCcqTdFFBkUrvdsVd7WHZW8q6Np5Pcy2VmQHDzkXo",
  "key32": "4DuF2n4hVTcMJooF9vzns57esjpgDEMRrzRd8uVDNAvf4PbLUXeTx4eBYBvBuua6YBDEP49awQf1fPDeVETYf1hF",
  "key33": "3zYm1s8eC1r69t921AHUYhsKKiHVxLVXCJGtic3YKcXZCW4eGimKK6D1k9d1LKFDNytXyDadeD9NKAPGnD5pMp1p",
  "key34": "5dCkCkWUtvpTBaFsiEieXX9qWydTYVfjerngi6iZXu6rChjRRTZHwgmMQJqyhkGNUUt4MGf2vpFiQSHDkphqrXQq",
  "key35": "4EB3ysfzRHt2XgXCfKS7Fj6DzK5suMVLpULbmJJx77MKWcVQgz3VJxMEzxPUqVgJk557UVAxk8KbGGG6N9JsdeUx",
  "key36": "2VTJN86DvJaB3mnwKTyhHBXD2wg4k8K1uHTZ7JaiLmyikLtLnE5e6AUM9KGPjhYvD8prdSs7qBU3cVkt18kkwbY9"
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
