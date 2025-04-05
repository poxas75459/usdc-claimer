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
    "3tHGqogisCUQiRgGwnqTGp5EQgk6gBUyLBqzUfMt8XGnFVJxsyt1hYZincBVrZaEJcfEFvTrnSyDRDjSUyfpws9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27BBW9L5RVDETZu9zaaNR6JgJfdo4UgG2BJ76ouRVTTpba5ibeX9AFd8QvneQ2AxsVhHBpfvtdbv33BRdwZmKitV",
  "key1": "4BtiyhSL8QDdm3812yAF8zt6H6AUSk9uVYmmHUrZ96Y7SPXwC4QfsT5c5LJ9Hc3Xoq3y9dpnozowyfV3VUBhVrBu",
  "key2": "21rqNLbe8vV7k43bVnF2UzEKkj9rJ1Q2rJMLFPzPXygHBX6dnjZfhCXbbMJPMvRR1V86k5Ck2wWE2UbJugMQUdj9",
  "key3": "5s8DcPfZRQ6YczWo4mfpYaQZq3SSGzzb2GCTkWhaoTxLWponiKn3WWTAJZH3sywnmqty7eeGeQMiVzBbEJs2U8U9",
  "key4": "2M1vQw8HqnHZdGnkeRjMmhA1vFyHj1cm5zgQ6jcjnmq6dr362JhMSBoEyg4inMXJmLTcf71Q1VaujZnZ4obKG4tu",
  "key5": "4DnwhxnQwGD8Sb5FFD7qLJLvWq54HfvYaNdEmiJ3RumnBP9SwEwFW4Pf5NhvkW9VCEUJDhyAJs1Mp4jwskX2vhap",
  "key6": "3n6UrmZcEk9Y3NdoArzxVuzRwH3fCgxWJicYEx5SrvuWkk4xkiDRSb6Mwf4w4MJjPUc7d6gN1fMRFcCmZC6ouSqm",
  "key7": "5niVpp4MnC3o4iCngtJvLTjq2hPeFY2WxcM5sgUA9AoUoKDKGxBtGbPeCsfkhbZMwoTSp8GrpoVCAxLTxYhqJWtG",
  "key8": "3gcgnHExFmuwHGmp7qCf4ThgbvT9MmZFhGMjxury4DyP32oyji1RH1MX1rdWeKEx3F3dCTYctsxiQHW98tfamZVQ",
  "key9": "5UPNmfwbA8rC4Yno8qz4ncspaqo6C1ouS71Qm7LwQaz165e7sysN56oTg6vyHUhUNZ8g3PuaBi3uFmoaQHgTHcXy",
  "key10": "5kn9pu9uhVGfM73qUy2mrtNVuKnZhvhnFqzFicBFqo1H3XabeyUFfdbAdbJDRduCYaZZWuU5ZCbouVohVjgsvLVm",
  "key11": "5iiwgjAsd1CBmWxiQZTGHNswqddHNr9LLYMDcUpW1vD4o9SHPqr7FqZSFq3H8bihjZstKTayiZprwA8ao9pQyQuV",
  "key12": "283ko6YbvLDtXUsZNiX6D9ktxxsyCWBEBGRK2rYnBgRauN8SMKJegmAmjFqyb1RMc6muDXoLWRdY2uhAKc7pHSVS",
  "key13": "xdj7SMXQPh42dUtipXH7818Xyu37Af3F7ufdNiZcyCeyrTy5nGLWb4u9w39Q9Ts1XSkgcqYBbUgLT5oX6T6WQ93",
  "key14": "6PvDLVjejkQmWeSwTFsb6PkRBhWvJJG311VJFYw5sA3y5wS5b7HANjdoWZdcCwMZgQK7cAVkS58apjoruhCJuBQ",
  "key15": "hLPdHytCrK74TGoPznqmqDuAHz5JtTgAN3k6su5Uu5QfQJnX9RuHANKzo8L9gmWbmdtjCKCTyUZSDVhRc7FLoeq",
  "key16": "gvLk2i1TkW4MUzTEt86K7Je4oDyEYgRd2yEFDgZQ436XPAkR5v9uc3wyciPvcPRS7xV7dSk1QbgcP4Bi5ECNwkd",
  "key17": "dgvcoWs92cG8n6SRvHqZiFGrhsG2zxUwTmet4aHKbiYdSNzuSJYxW4S7a786nAJvZSJhzEtbGojAa5KACCWJ9bj",
  "key18": "5wkoCvpG4E7vw4eYhvbd29dMSf82TX9K2FiGj1KtjR1akW7DF7xeG52gxuRUe5FckX6XGTXUNg1GbgcTsE3Uaaam",
  "key19": "4mTqzjqWWJtr5RpVQxh9aTK2A1qCHRjDw7DXdZGDRWR5BpRBTbrYrWZUbrqEojdWPZMgXm1tQgE8hTZALxrCZNeY",
  "key20": "4DrAcB4HvzQaRncNwN7D6ChXb18jbGfGHpEmW9SzNvn5EYEg7xb24rQXwLUPfhBjv1WyR6dF5CsbgTmUcUtEPjrr",
  "key21": "5NXPfsataN5cPyhhHHEMHELPDcZTJbEyZXzJpahASHFNrEFoxeMh5bneCxpQv94wJCDTpNKEzbQLM8Mr4wrqdmYo",
  "key22": "E1ev8KjkSLfdJnbcerbR9xiSrGQtVaQqentix7N1Ajat5DUHZDJxQRQNMYSSG5CkPXGSqFFPo8s9aJN6iMxhWyu",
  "key23": "4Dj7AeVWdu77uYARBfVqh13AigDXRh6wEEYW3hMunAuKSwJ7gHx1FPXJnQprwkB1hhgvpbimZs7vgxCTrLvpCv3F",
  "key24": "eBUYCRpNZDPoE3MnBh894pXcdmNgriUuqh9k4N8maBxz7NQBXoNCWrtC1u61xuiY2f3Zr3XfeXNCpKmnXrrwbw5",
  "key25": "2t6m5Y1RqAbsBi8Rx4qK7P9zXHZpAsJdNkjaw6JEEkQBBsuiNmQYBvTxz6FV7aPNyNL5nSxe3nnHoNfijrMjEvFY",
  "key26": "3v3q7ftEBftXf3EFGiaL2m8WitsbDd8VwbxGEUaXMCpLbZ42Y8Wps39Fq9Lc95cDduRUmVed5a2Gy1KgFuhxTJJV",
  "key27": "2Di2BXTehJq1SYKqy7TW3SfRK8N1yGyMV6pY8WTuwnfvsQStfaN4TGU6tye3ZXBSaaYeCiK1do74sAKtbQHiz6d2",
  "key28": "5cMERyPisJjWhyTJC7EEtxLpvc6TBCbfzBuJ6njHkkToAFFZj2XGKxKCjBQAa92Z3nngQFxENYyTfaAbweUURXiE",
  "key29": "4ia3n4wPHG4cipZyHgKrL2r6JzjhpUH9h4RaRHoK1AmNLxH7ovpifN15TE1fqMbsjURnkq4GYAA115Mu3PdAHq2A",
  "key30": "3yhc5D3ZBgrChSLyLvcmHe7ucXV3r897LBsrgDmqXLSsG6A8jxTXT7v93zF7wYD88r9L4LFxAhsJAiVpGn1QtiJ6",
  "key31": "ewv96okBHvCwTBS595gBoHq9ys5i7AG5mJRr8kgdEwxgtVAvvFhXQHskGhdYmfhcgP4mynJgjerTvcTWWbM6B3C",
  "key32": "2uimX4chigztN1EDJAU5ZgDDG3y4p2uMEemdbyBYE3xsbnk95wmvsLjLMFyeFfvusVCZCaE1eaZcXPsv2rXNrqfo",
  "key33": "w3R5RKubekRTFg9pB25TzzmjtkEdv8jPEHmabBj5gQHDkrcuit7LEugx15rfCYSN93AM7V4sHQ38NswbcEHNrY9",
  "key34": "6WqpJKBkSoniNgocW8Yu2bQzAKmuZ2YNcuVtGwVgekccPRBxrccnKXGtgze2yGcDvKmNVWRM2JXen4j7XWE4NYx",
  "key35": "RLk8sTgsWMnj1MfmEtVBtikSLfnBQApSJx6o6fyTCL7PT8Dj8Dw2hksvGv3VBnbAeP6tMcgCvCKLbqFRAKmGuec",
  "key36": "62tuy5D5NSNe6NE8c9qcKrxcYNNwBykcLw5AZTNSfyqGZBRUhGpTc54Uq2BTddNMrmHjwUqpAumSue86kbGKDgJr",
  "key37": "5KCTXn9dABmKYpTizqKd9CDTTbyziDaLkPUHZAULbFZTqjG5sVs8Rs9p3QnnRUnMk6tHPbubCzcRB3rxcHeQpQYk",
  "key38": "tv4wZr8sLYtZ2QE3UavdDyxJ4VfBabhrMjE3d1pDAcU2N19M8KymvtD7hkT81p5q46iK692GoR2AKCHDWB2p5GU",
  "key39": "3N9bo17fJtjZ4Vw72Yf7GJc4aasv5JxgPbQuyotj5hNf1CiQaEKFLMRGwTRdvtfSGBMDtAj2oDwC4VtrsYBubrHm",
  "key40": "HNRyBZiS8da5GU1YvZyJGVUEmj5tzTVzVHDVcv1uCwusp5ESsto4kp3puUoXtEgAfzMBpCMwuykDp1wUYjSFmwF",
  "key41": "2hi7kJWudworpxw4JTFVTUyX7f8b4vTRVGYjBtuDGS6XWbjhnYvGgank5UbLKrd8Ygdg8b8giMiGPzGYkbCU8TZg",
  "key42": "3RqE1vEUUsPxY245zwYRS4XJMuT6uDAH36cE5oHd8f3d32Qby8NPqe2PST6XK3jtN4eTqDn7srdEpwYoTUfjbfTV",
  "key43": "2EJ1PwTS2xBUJffeeWWrcHBD73NofqQWsPpQuVhgtEox3wyNv2Y4sxfa4seso9sY1xwtGqPSFydevFnE7GfwXaSF",
  "key44": "2ks56WEf6ucKmPSbc2cUBYifcXpEfuuoKxj61qHbyqaohtyrrbPk1Zaw2SHzXJSeKmgYA7v4u6xai1h798q5azwu",
  "key45": "61aQYijMZTDKQfUW1ZiboG4zA1ZSVDMpfdu87TkpYusAU7eM1pKtnTaroiYTTGwxNJZfGUZB6DzFfspmrVPYbRCN",
  "key46": "3QuV8qmcDrHBcHBKtr4JBqehcJa21yi4RRqcwYJqU59YExvyrrJyUvsbNp1HdEucKjs58JQzVEQ75LHdMJjNFHE5",
  "key47": "4uC2rcSCrzBk8wvQSzTer9jPRevz4Wb9dD9P7AvRtp1faMyuhYSuZxdTVW7MA7LozrNdKCpz7qkd8R9iAPMxu754",
  "key48": "3wgREbsWgJNpuoc6bXT5nT2ebpJCzmBWDqBswJuz5NnbkJoXTtvEdHQqNGrisXnZmic9TnF96ceJFpGhJVg6iwm5"
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
