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
    "3Te2U6NQrJ4rRojF6Z87gkTHaSMH4UXbKFxWG89rncy3tbnE2BYqSvZcUeXnZumSHGbcJZ16JK2Akc3zAoWPAJaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RUngscdWWNjpJuQt7KxXNsUWry3FozUisHmUE74VNYT862Ad8QJ6agovq8VQ4TqkjryaFJTnR821XZhjs5LMuD4",
  "key1": "2xAiSeJuk3ybehxTV3MCMkLDMqMuTduHgezWLyoNWMwtVH2Wj4ZExndcNg6zka61vd5FRUYv918TRgDBmGsysFkz",
  "key2": "2Xmx6y5tm9Z9RZYNatXUNyTdb1h5Ewi6Cs4ACR2MPio9PjHrP9MQQVpqieXoxgDSdbWDbvGYWKnfaCYML7aRoa1n",
  "key3": "5ZrmdMMYaQxHqTyHCoe5TzALRbsCuNyhbqASpoAPtTDGSSfMDGkMhvmvYjRa16aUW8R9qfmzVyX5BtBz2rQeJNFY",
  "key4": "2VeMF9VHAH7i4auVfkycAW2GGwVHgpw3XZr6eMfyqm6R7b8pNAfN2AUaeyfyi4JuHwKQkchHRfkrXAzruX1wRwog",
  "key5": "32AArMmUn4pgSToSTRstn3ky17hWrz125rit8c6QKUtiVZoW7mehD2EAwFV5jnTxm5XihNx6r6BgUtSs49JECVf8",
  "key6": "2wHtiq7axP8LAgxUKFow33SUNcrCwUNpEeRJBUzi2rqAjkGA311JHYtwMRbcyn9Lft8HYiZEeVLoR2JS85LhRft4",
  "key7": "JALqRbvgdLAeqfSkCykCiPoxh19y7aVYdhVmqWuZze3U3t3ivXw2m9uPwREGGLHWYQjBnqgWeUWQtPnCXCvuz52",
  "key8": "gkuEXKGHY4pWAZEn7PQrYkAH811ktDxX1jfLXertusMqF15cMdhKyGRBM1Sp6zndHKc2WkJyBZFZMm2swRcdPie",
  "key9": "eQaeXxdbaNTbgSyTMEGES2keNg1Tov9QeofPoJ7nYK6Bnee2eRBk87zseUkgDr1aUzfzW2BAiQ1ZzvUcLB2pUxZ",
  "key10": "41omq9FCEAKPv1xnKKTTrg5D17CLUUmwhadMtFQiLTa8RT9sNfZXABxdUnR8KzuCfa2NCTEy2VMnMszq4xHCSUUV",
  "key11": "4q9rZhBC87ZqUAsLKin5GgMT2wukXy9Su9p9J6eW1mfhQBiB76R86K2KW9WBWAW21hgq6z4LgqXM6x9bG7TXCbb8",
  "key12": "2kefauBhDmv6uEMVjVjtSFd33xKKa95uchLVQJojet1H1X85ErR6WiCdHH7JZ4NXs1wVTG5DkTc9oSrZSoSqm4ry",
  "key13": "4tNKAF7Sp65inCzvsM8nYEbpvurY8tyRqS6yjEpEgoYeQcjsGFFXo8cj11gvvEYhj6nMzJDm2kiBTmsbPrDTo5Qv",
  "key14": "wmUwbkrnUHinRkPZGkda4bFqjZdziwtHpf9ZbFdGfFcyyarGaV9K9HQcJaCrqtc8iks46jajcLXgA4kf5CMQ7oQ",
  "key15": "2nYHro1SDrNM8Wb9mjRDRuYFyzvXzcgKWDTKebgiaU87NG6myt1wLMoSYQesNRJiM4nCtctmP6nxdkQug2HoS6z2",
  "key16": "5vPSeZcCMrhieCzYtrVAqs5o86SA7WQkR3MCnmxApuEAwBkwACyySBNwz9tc2DZSixRNt4jFgUtXRRm5ic7qiKHR",
  "key17": "5scn7N9rqNDd75NhnpYDz7BYYQFBDGy5QtzWB3sC8t3nPm3MBSwgqr9ig5Bnw1eYWdLWDseQFBuhHpFW2hS3ih1c",
  "key18": "4MTt2W6nVVNaiexLYR4qrLoopbTW51zsBMXSEh9h4XoHNwe8ETMqMfW4ELqLNT8UreyVcmS3wTxyhK4JNgpCixPT",
  "key19": "4ie1st3D7xqbmm5ypUPbhAg1fNoLea3HaAtQ3eBnc9oZDFmQnFPE8ckBU3ga342QhFN3Epb5kfELc5UGBA48UdAY",
  "key20": "5wH2NDQ3ZX898d8t4aah4xFrzW51uAxBSVSLTvKuMKZQm2AKCMJb6W6qxdN7p8CK9b97ELX5hQeK3pw1sJtnMG9o",
  "key21": "4wchbeVYcv2wwVyABmhSKqN1nYK8vMHyFk5QoRZFdA4WVA8u2KBqyFMjYqbFP1uRusZt3zqVYqANkSGw95tRgzeC",
  "key22": "62CbFiP6ooo7NQB8wksmp5x5yr6TVoWWJBhaU1hN7kLMJhYYQx45HgCT5VPqy3SpKJYxSQmcwPaSwNwP3Ugq92Dg",
  "key23": "26EEgBWKwP61akPGi4xwhBKp5ayjZwpC9j7vt4BjvT81DDCsU5BgSXmhKSSQbCM55wkNujw872U6VgCYzYC8Lh38",
  "key24": "2kMELNsUEict28asvXUnBSXn4U12WVcHvs2ZhzuwSLAZyxkE3TMyNeCofgWm3MvcB1my9riC3DLiN1RGp1Uz8LVP",
  "key25": "3ffZwPgnf8QESmVEBEScQPb4rNA9nznEGySHrPVXyyyfVk41fVYhJsLs4PjtsLYxBD9f82i7SS4bTc5LbNLPv45u",
  "key26": "2kUN6SbCB6gujrg47c9kng1hShXFDTFiqEDMHeFKZGENhRTfeZWY9hk2HBxXrE33m8Mn64YnK1WrEipxPPPTRf95",
  "key27": "56f4Wq4njyHdyQtKpxkDU42MyD2vNEPzqqzcgfnkiYSTWytmB1EoNT2yMpNQRxNtEUkNXNKoAbJhVhTL1LLYJ6Db",
  "key28": "5uKN6aAY3tazTBKQfXA8vuMi5khDokzJtu2rRMkeoQvVbVHWcb7P4TGiGwQgVGXSFRRYq2SwKVzoAWz4XEhFQj8A",
  "key29": "29P9g5eGXjuTowkaBToC3SdeEtGmrf6W49frrhoh7aPQ3BmJZMM7Zhj9M2Fond6sgrKTTfwkfw1A14Djto1xrEo6",
  "key30": "5mmwM6Ra5S4V7MfRqxvYihJeJeUAza1Wpk61RASQ51DJPcBF8CDY7g9HRv4tAmJzU9nctUfrNPwzwoSHajomooY1",
  "key31": "4Tao6JFSh8fwtZeLnxVoBSdLKB1mkWAJB6ygqVH3LAW4jSYVdMfqRJASJzakNr9uK51RbdTxaSqViYzTjcfTqdoP",
  "key32": "i2nvgeLqGz34AMevhUj3WuV9UMkxXezxGQu9Zv2MxLrXZ7sfuJYyacsSFG1kkWoMpdhWoyKVi1HjJncAtEJdBWh",
  "key33": "QkTqrf1QBnywXzXobf4xcYnLzvVTUjj86gLWXCyTmyfeuy5BBwrHAszxh9FcHmG2NemEeLY5hFec4B5xXSwCCN8",
  "key34": "SHmXXzyn7ny3W8ba6KVZtfhCaorQGMCUaCZ8qtobHw2KnzWt7LrgEZ7KnditHEkv8h8z8PL36H3V87gvJ8jVuFD",
  "key35": "3JnpyirvKfCqpozSVFYuD2eCSuWbg2x5zVqatE97AJ4BTQs2VvTbHhztWoi2yyXLCW7V2VBkuQZDDpHECDM4ovkJ",
  "key36": "2odyg8R9p3Mpo149SWpcBstHYgwuis9nbBp1YyaCxgu1JDFr3bsdkKJPcBPRAce3wcFHTUw1s4FFooamLDMefKm8",
  "key37": "293bRqRkRZ9YrLGyQa8cRjhoabcYiCosSkHUbAfdXvpADUTjGTBybsU9zG9Nej6EAtFgwshSkpKoYh8BMW7xr24Y",
  "key38": "66s4sHUXX9sia9y8X2kgaCfbnn7gMhGLwgNFgGncVzzesJr9Wn6nY4XvVBgU4D3qDCUhzYQfiSfqu7DkSNtukqE6",
  "key39": "KE1Y2DxwMNDDsdwyAYnPXJBYUmCHsrVUUtx6WtgM1JzoyXajDnYWcZWYRUeXh9sfbqoC5rGMkZaXNjhDNEAKDHQ",
  "key40": "24QfyjFA2e8GjS7FKeoMsgWkKSfTpXzW9oo9AjDj2QmpSStrahATfp3nvY3oJutbfjNTJ5mnpT8ckRp5Q8bCPJcg",
  "key41": "53CWakJvz1kkxaH7pg3nH2iC48abPNcPNYjQ4MWaFSpwFRh4DcrCwa4bhek9TpbjUiqocPiVu4xDtEUmDK6v6t2M",
  "key42": "nHu8P5Uu3UckH1wqDDsMx8jpesrZrf9FS6NmqqftN2uV2bBhbvJFtYM9Bpb4BfkAuEo6wMgHmjD8DvsfUN2MF3G",
  "key43": "4U732Pts3ACggyYVBDueWVpBCE81BNzVJXAjHZHtDJDdYVPGwtvyPpUqMqkjn3kzWpFLQArLRzopYGdWasz7vovH"
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
