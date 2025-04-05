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
    "8Vi3FGyYP5C7oCN4wXFm1ji4CzoS8vGHd4KqyHZyNvjPt6TgLsUzu7VVsuSnBhMX8VXpUfCiZbLcRy1NctJfASH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oDLppzUU7SFkKQj7wyKiQwYroXoGEknEvVNryfCaVadmYLCL8SKoZgksoFFS3VvWvXkjoHApwZ8ipvUHrLYY6WU",
  "key1": "46PfKzZrDvTFaFX9UUx9Kh5Mnjo1AKiwRfbYCfCwpT2xXkz8SditKEweuZhWhG7ZdkrzhimBudbWEt8yaSRsaTfG",
  "key2": "2vD7bvefnoAMq6EVvpTuNqCSJEjuMdTCCdxTfxfZBVKCS3xqjCnfeCUGMAEHy56Gmb8uTG5mb8synTXPG3UGHGfh",
  "key3": "qMk1a7PzpeUXL39yLsHAb3RVuLaVnoarjDsub5PqYvH68MB1fZ5tgHBsnqhGtk7qtKiXhJas7e1MH63qJmh7BEQ",
  "key4": "tKKeRQAYFF6QgVU5RSJj6RsrGHtJ3L4QpZHcQt5PkgZZDvfCPM7eMY96RcafL4bU9g3TL7uqa4fNNrn1qRjqswc",
  "key5": "4KEvr7ajtj5LNMX7PgXkgvw1czFHHgnGSBZKBzyD8G62LoLpgURdJfKjqd2NfFhNEg9pGotDuwH1zgSj1EUiUCYT",
  "key6": "4Kh8iMT3DBM8rw6d1wjbQUpEpBKFVpdJvya8teZQq2RtK1dndUciL4bvdqpFFLLvmxy39rx94tNWqB5qXzw5xAsT",
  "key7": "4qEsVxP3Wbuc5cXGsVRfVz3Dfj3JmADaxJnyeMkUVfLFwThJ3hgjWJXyDTvUZaKZPncLmSusVz6CwYUEeHMZB6cN",
  "key8": "5PHNwFqFhmephAw7L3Ki234ZPNfJ7hoPj1U5d4gWHiuysAYpfMpAv1w815kR2icSuLh8VVYXFL1bmL3nNX3Sk3D9",
  "key9": "3mtpjmnZrfZaZdMuXSp81NuvbRd23R14Dt9wRV5WiuQ7KsszSpRjJ1QNXJzc96zyLFNWFYp8wvKSuskX3xUQDAfH",
  "key10": "2cGecTASx2UQPXhDcbG4eBhhrC3tHbRJccgz9HAm39BGPsFDdSazaVuhoDJuj31Rn6tUHzbv5drdUYVkmMAKZ3it",
  "key11": "5c8QaF5GRfMsShqDqTB4D5JzNEaLb3CkosyP5FSxUe69xPEduqhnDoqv7aJjs4nnA7TRSzVRdoWG26fGWzVp1hmx",
  "key12": "47QAExV4oWV5k2dGoy9ArKgPKAqoKGoSkF4tnJzP8KgCktW4ujSM9CY4CtaBJFDVGowukxP3fNAQirA87C3byxKG",
  "key13": "5ZtYwEmc6z3sN8cuM7qeYjietEf33hvwT8S35trBqaJmi5td5BKRds97CVpst2qcMbJTY98RuETshDkQTtTqeiG3",
  "key14": "3qTStRYA8YppV6EBApUi3yKeUirf2v6u9wsaFFXRiiAEVS4yWijKExep5SbNPWikuhxfSXV2NDSXvFgebizrAXbR",
  "key15": "332q1MpZxVfSKwoLSkcHsPQsFPrn18JUSNCzNQWVPkn2g3MYHb9LvrBtwKBD6H1Ut1kwPTqkWGSG8e6TD5TrSAhA",
  "key16": "3fTLXmhoJvHh2G87XciZ11yqN3SyXJZ8Nh2i6zagVWarnjtWDJbC2Ew2YJMiJW2Nty99aa8GhSWNJARfxBFZSBwe",
  "key17": "4TeyAsvcdGxQvFZeibtfmQvxDz9XWMEjRJZz7RAz1oFDszkD9q3zUmeN1Go3kqR2ocUr1z7EZenYPXYdqNp5xR6P",
  "key18": "4Kq1s9Ud3CJLnCefzwTGcaGACFzmFeaEZ4fvbYv7qWAknASRKErqYhLa4NJq2gi1B7vP1TASeYfCS3ygYVFyHf9n",
  "key19": "zEUHiL49SwXqkamw4AtFKiwFawtfrrpEU7fPMWZrh5oGJfPNKjrB7iJsrCgXrBodAaV8caUfLyxY5XQuf4GrQGT",
  "key20": "4X5soaMrpTdKhJfdpRFAZQ4Uc1sQTXRadKQ6CETnBQJumX2G74idqf4waTRU6foUFssD3cwggqVGPEQDC8N66xHx",
  "key21": "2AG6j67RNqw7obMHnXq6d494wdnFf6KXLyLg51CV6j6znzEVQkC3EApvuUjbarB2rQoENLGT31R1GtaTotrpwzhM",
  "key22": "4iKHWX2yTHyXHyzFnaFRvfQYSWWAZmDXPgEA1iMXD4ZSACBTaSoF82Pzyiewmy8jB9Q56Q5XRKGxQhRKoV4BHjwf",
  "key23": "3hJeojaNrY5pbuG4gjkf4zREQa6b3QtjfRxfQWtsNMHNsSk5P2t2t5eaMRtbLjUCzUYYbCe4g7y8Fws636j3HD6j",
  "key24": "5XZ8GEnpwp4YdvkqTKisiSc9Kb8pbox881S6cgUX8wePEZ2yop4e2CDfzgYzyMmBR8WQtqMZtwZrp49jDTbGqfVD",
  "key25": "2iYGVdc8WUJvxQW7Bkvaj9uhvFE4N2ZptPTkH3ryJrJnkr3SznTVW4GA23ZnfosHiXTATje1qzgBjFGvpcbpnQrR",
  "key26": "57etsqNskboZbSJJnWgrzBKcyMFtN35ZyjHic7DbM7np156kEZZ3EFXG5meRkdDjwLYGxvEV6Bes9Jp4jDNhRYUx",
  "key27": "2YN51BqUFh5367L6D96R7wukZfLVnw7qEnft7Gev3cgj9Rj9FD8UtmBrwCQvPEWRbYfPbEzxgzsHSB9T5JBpJ1df",
  "key28": "24tN33Bdt7Bzvhu29SoJa3XejEMknCHjXPEzEyeDr8r8C8Aod8NURx4zKaw2vvfnnzh5eT7Fck6fwZd7y3XLDwY6",
  "key29": "56NiNbUGfE455qGRshrJi6FFLpsMU8GrtMzAzTw5HGSE2Sa3S4BdWFdPozgkorW1GCEh6bHntT8FrjhrcoHmeBDU",
  "key30": "3Nv84JU72PDGHDgYVpU9to7vkQVE4JUWv4xM617ee5E1Bxh4AWwx6wVWEsVuDRg6H5Ms8tWJCsgHuHtsACveMJ43",
  "key31": "4jkkjNb8fPCSmvDR8LXMBtP8zhmcTNtjxjL4k5nHhY6ggi5Cr9xLQZHEKn9H2bNw2ZESkvxpmhVuzDigA8a1NxmS",
  "key32": "2ho3rF2AnXeyWhy4XGmnT1L8AedxDVxJm4xNWfuzxjZaWUbLs8srt814J5NGd46vRR2aQiBgnj3QiroWucMihrn2",
  "key33": "5oGm7gy2iu2J5jfwEX6T9UcooQVmTFrwusekCSqmPSh6bBQcwdwRfFx1o2tYxPFSdD3ETQxLhLGw44BZPYP3qDYT"
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
