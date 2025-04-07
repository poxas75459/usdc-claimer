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
    "4mCb7yfXAdGrvaMa4jx6ujm87gyy4VmFntsMfDWCTxVNigS4hueUibE1JVBcisnRQsQCmR6eBuMcax9MzUDWtCji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33kL1tXqNjXNZN7sfYTqWQH7yPLFFr1bi2UFDNgA7afcebPJ3KWMz89fALEtzefGGuLj47TAMoQ5AjTvocvqeBzk",
  "key1": "4nkvSy3irgtG1jNz9TqdisSAHZdjJFd71eF9FshJXsHDzDuym56Vw9VzrTvThc1fZaSg5ugoYgaTNU1bBFhyoht9",
  "key2": "23UGn5e7vFS36Ufjbgxn6C21FGRh7KKsE5rtHjfcYf5XbVDVqmEgQ9KWRNqc3iU5azx5J6MGapJMpVxycUYKmob3",
  "key3": "5EmohK6J679RktURBAvDUtxhsKp1QU6dfyKE4VjhhrdYwTaMBojKspVXutdLmktL6EpWRC3bBf11LiyfToPL5i3g",
  "key4": "2FzTcDVfZXsE4ymHKuSUf13K9TXv73TyHLDai7SJKy9RB5Du3SaoCZo8cfv76eiTk46VLK4H7CSo53fE3YctLzx7",
  "key5": "46EuEdgQayERVj1iQbGLc4XSZgwCuHiu3KiNtLnraP6St8QpYtBjnbYexXd7Bdn7XXjnzrrWvVmGP9fGcJN1NWej",
  "key6": "41vdPzfNJSUu6dRHkB95t3YSHSzZA9nAThiUh98uq6RMcoGX3SgY2xoPNj9fhgZ1T9BFHT5UuVXwja2Sk5NonaYA",
  "key7": "wUfV7b7j3Du2ZbbD7b3zBLahmPq66exKPSRoB62A1AcRNGrV3NuHea2hj29Whi3DwrhGoTUkPqq9CQ77XsatNNg",
  "key8": "2bQtJTA1Ldz5auQgsNYmvfKxWoNwdg84QTybBgFBztPNiSzzmUg4EdU1DeStKf4ZDTpDAmBga5xy83gWkpCfZ1XT",
  "key9": "5xAZM8tvzKGdU8wstY9eBZ7i4v8d11GRWvCWzFJHw1NYsQKLFAsqj9B9FmW78badxgBmtbAGUfQrWwNxZG7J2Mad",
  "key10": "44LtKYs1oTVYwaeUcjBsE93mxE3HuzZGWy2TkHdNzbe1ApjpuLAAgQb1h3CAtDAr2u7tYewFSew2HekSAyvJCFzn",
  "key11": "NpDEx18m89m68zFsWD9BpimzKmjoFWW2n6JCSsbfCsTR6u9WojcngLKvv1oP3gYe64AfpR8Zh1q1BfWW7GxJ4x3",
  "key12": "4CXKERewCSYXvBBxTivvsu8QAPn2Kjj7GiPDmHGjFRtzyU4qxtNu7tC3P7f1SGMYjYVaZZgpoKuNME7XnMwxHFZ9",
  "key13": "3hq9R14i1rDQ4as6ppWvu9DV2NsJJkGriGNG1Ng2PSbC1tnWXGWBvW7GLqErQLQu2LHuSJ4VjNk5PoRXLMV3XYQQ",
  "key14": "3rEw5iGJ1J1cB1qfB4ZrjTxoQo41hSQFrZv6idn4rhEkMEY4RXZeXqgpdN14xKcmAa7ssTjaQqACvSpEQBwkSnua",
  "key15": "62mr2Mk7vRumfEduNFVdfaov3kwKt93hVhbJdUjsb8AWY5Demtan8wvD5V7ZrojxWQt3mKrieooJfZCurrBUSRq8",
  "key16": "3XwLbRyFFmfY9TQYWU42rpUkFotpsx4tkPBwJjAPC7wG331Bh31ZCdJ8AprAk71SZ7Narb47ySnLD8T8gG2V3Sqp",
  "key17": "4ibphq1ZPySsWbX5PpkHHHddc2Qc4zcwZRzWC7onsjDsaQhmcxvvr5q9h55uG1fmcqmXtvKgSPquaNkQdCJ9a9tw",
  "key18": "4dUUaH5xc5SUmvnNZhGq9T6JkvrHFTTANhPhk87ZymSRYteW6fHffzq716cLTnDau52CWinM9TstKinKbcj4LBme",
  "key19": "41ay1f9woTgDKeW731QapehqqCcyX7X4p4jCVXhMsB9Pos4BbGtNoQSbMi1PBPvQt4XsZ51g3KSsubxmMxQaWPnw",
  "key20": "5FoHavTjtk95c4dU7P9gra3sTzUiFAqt9smpCT5SH5i4Cforgyp85b6Czc1p9ib9T3fgxvrx3XTeXQ9sS8gR3Fyk",
  "key21": "2dneEDU67cwVZFuf7hA2nDB4VtPnAJPcJ4iFL3EYWeX1EFUxT1isczF4g4F1awwS29VG8LUzZXDsjBuoJXXwN4TT",
  "key22": "5kWSZkvfj62eq3b3Pvf33ZdKnyU5RGbabNrG8pUiot6PQ4NUriBjG58fTm5So1CED2MohgdFNyoNwd2jSzComfno",
  "key23": "2BVnpyZ6fa4b2b43wSP92y69LS8X4n2XbmrishA5W1FnXwkXiqPizuVq5DqrypHiUohDxkXFAQuHJiLMbp6Va6ZM",
  "key24": "k3QH2pJAzMnmpuPZvdSgrTzpf6smUsaQkqNXkGxJNw1fph7R6DfPwCxWGzp6fRJUX3CLHoctNtC2Ga27p6DXDvQ",
  "key25": "3Uqbjs3EhDtLT514NwfzYw4MQQKgvz6tDXdQb1xDWF8GzMq1nhRpnQ34TGf7pTqN6ZUYXpKodAK1VBdPLqrJawuo",
  "key26": "Bonp9ujfEG8eYCuryKFSCzV2WfqqooHe6EmvsnY3Q9A7i9wZB9M1Q6KNoGY5Z5K4LDdb6EknKzQZcQyuxJUi1Bm",
  "key27": "4Hd2qMDsCwDZAsVDZgHewje6kRjV4XhLACFKYgJ4kXoRXgMZHZsCMryB2BQ9UDARogk6pjse7DWtyFPSUSuoG1us",
  "key28": "5Sb9eeMf8HpPDekTJKYBuQhMHfpJ9T24761NVwAE7mhRVgGiAALRftK4cQjGLJVwxNS4tJQuAZWnuXSZK2pVF9Eb",
  "key29": "3WGPuMLueTCtcUWGNL9Q5HgThCvMSk6inTqvp42PFVkM1hpRjqUcFNYLF8s1yh5kJTnNph9HnRjBFEmkuGLyg159",
  "key30": "57gptDpibHJUg4Dcx6ZqQjPuaxzivvYjjuhqKAbqQxpLiEPQXnyoYXKUwXwKDC3hBWgQxipSYfKWB92FFKHNBfbX",
  "key31": "5LJm4vboGeQKaYhpKUjWueByyzken5ztHwejUD6jmyURxHV5zmojnEn2SrP8mL4K5SkrRw57nmLRtqFm8vSUaMNF",
  "key32": "kqYEvLd3TeXNNtmj6mMhzBBnFttHAycw5BuFmKxB5dmhZspEq1rtwPtAHVbpRQn8mUE5RgX1wrsS2WgYVjD14R3"
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
