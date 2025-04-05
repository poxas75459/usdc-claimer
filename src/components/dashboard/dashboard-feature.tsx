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
    "2bgERqTPotDUw7w4LV86eUcSPttTEQ6AaFmsDKykepTwbjauFtJj1vXxwSq4YAic9DCh8eveU3bgBQB789w7oTHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y5Q1Ma6GmeRfTfNMKBqNZG6y3poMNRDepVSciREoufFqFxrWRnZ1mLdX1BmSvygYmSzcrvVQ4KHCmUzSp1hSqKe",
  "key1": "461JrZup4sYboX3doH1Ao8ftYfKpEbxud6ipXdpgXotYxS8RfBzeTg6fcPHJnBaXV7fantkhVWxXdM5JKgGpaCBN",
  "key2": "2mQ3AnAWqDHGuEuzUTX6a5jtJhF9LPd2tpKod8t8yAfrVGAy4HntRt7BwvhvdNJM554kBNYB3dFV15MPwdrCLPAU",
  "key3": "2KFkoMQSXsLRNHFMfrGjGQqead73T4F7ZCncwPpJ6Ec3wGSqEzEBFfaBtZSzrxFThGAZ8wPQ4Pc1oqCGpk5jtcuj",
  "key4": "46qfEGbFx5khCb5NXcDV9QF9wLQSnt44qbfcdbgYHYeAwanfqibGRmXWkV9MNzyZSGv4cibMKY2V9Pj5x7RV36nG",
  "key5": "5yXPxhNr25TUdNwKZ7FBFr3TnvUM7gxp54Yy1Ckttcc5F2fsirAjQDWRN1mP7KqD47YRkdyZ9AcaumhzFEJBJLgM",
  "key6": "4aFujAjDC8GPdpMzDYoN94vb1wD1SptRRs4wsv57FUnN1WSq7SCFXNPKF3XDZeypFRtEZkKNnp6jG2phBh3iXf4q",
  "key7": "3kVJMqgjZ9T7L7ceykw7imW1pQ6Dqk8z34wE25FWqxpS8ycg4QSZ1sRwqGjY9CUfNGP4eBXURrFXS78aYrFL1YAb",
  "key8": "5NwrEfCxB6EoR6J14cpDZw5bvA8SrXmuxyBhyPCJc69gCJeZJkbhR8K3QiPqxrczEEZeT9MC9kZGBkctz8KviM1t",
  "key9": "VoGVgZ4nFr7ZzkMWBgzfjMMCDxrcMcADMgW62eWipgQLX38b7zaW26rr1eXnS8E5fdZtesTw2Gf9C5T22k7L9jS",
  "key10": "4GBtTC15pUJ6s22UCPr2NpjgoCLJNNMYNuSSowa9cET8VaufF352Y655x645TbbBZxDBq6ppx8irEZUSpyfwPhrb",
  "key11": "AHc9zLJcAVawtwPLmsPHYtwp3AssqJZppbzATrHVD8LpVdX9UEgWqTyZAZ8GswsbeXCYn9pzgDeFWMXivHtfWBS",
  "key12": "4AqnsZ2WgSp2XtULNHa4FCreVfJehUp8cwBQrJyk1up7eXgD28DsgtsVJRFXmSZfmsTXKqK29g2LFpRL2jJnSZoJ",
  "key13": "3vQCchr8WcBGqc7L8QQW92Y1kbeUZXcqhrxcHfSTm6KfpkFMXv6AUZ16aF8zzUi8eMndriZTPGvC5WNfsXqBtNtL",
  "key14": "2VmGe5jDoFJwhMN7Nhp4xe9HMTTEnArxRWQ7mfZapogKBfA7aUrLfjcoEmwS5jrM9U1U3t1yFngoFgoNqK8ZaLZ5",
  "key15": "4Dd7pQDF6cQTnRLT6mUKU3TAX5PMegvTkFGfUsZR5dretBwxct5PaLQPo2tUwSNU28JJSbMd6FdAZLifpH4fifhX",
  "key16": "3j7Pgsj3f2BNvnVZCTFgGoHVqMTEajKje9fp9akUpS7PRtmkf1gBqxkjJLu9vVVtxTnWExbqFn1n79ZKpxtWyEV7",
  "key17": "3QBjsbaVZwyi4YRiCeWBUKUxiZrpBG7kXuLPgZSaEZoqqvroioQwjvwBRq8Tdf4dbNzXHJjD5rSh4UnzCYs9yvY1",
  "key18": "4nacDAQVEMfbeqANdByu8MUxvr2axjaKpQU5rS4geNwFHz4rQCcENh1t6SWtjdgnoUDNUn1yk46bWrD69oKAM25H",
  "key19": "4zUe2hSQ8kAfyLEepT1mkNnEanAP5ZobMZSW5BypH1YWKn4gmuEnu674NAoT7XR5mVeD1vYpe2vZTPsEbXr5BvCq",
  "key20": "3u5Wo5o9xAoUw6NhED8Vgi1Jqu9m4o8F468Dv8kz2SCqbLuZqWJmRWmRwfbCvKCLnpiX5QXemAv8xTVMXQVRYkpB",
  "key21": "HpAU1PMZd6zptE128uUpLGwVGsSeqZ4nKB4kC7pBaA6BPLwgBNhixSyFMznpAonAQ5t21gEAfL7vRUy2XAVykNw",
  "key22": "4gDhZw2HjQpAmvEcSCCBV87BPnuEfAA1nuuNT81LKk7HGdFGEYbh4k4WGCUJZvzrgovHRhZaXZe8bkvDdax1kza6",
  "key23": "2zrJbZvabCEi2RXrPYXRRR6d55o46ThnHEEVqdWkXNEcgPsr74jwMZbV5FyYSHATWsYqoJdxNsy5aTWhceKT8Zmr",
  "key24": "4Pf4rm5cAnXbRnNS13AdpGVEnoY4TVDHjCuP4MMJbdgcmax1d3AE2rqjKdpPjfvGgTwzPAeZDNoFcYKaGSz4a69D",
  "key25": "VfxFCGZisiVNSJQhuB8bPQFe4byA9UYsTUwmdAJUuatpnjnqVTBEkXCSQnwXN9EMXLpWZhvvd7Cm22GRRUrFHZc",
  "key26": "NvcYHKbyTLyCT4wFBtMyrSaXmAVV6SSwuQAvxHwYudQof1YyJii9zsQ5SXvoSp92MryhS2p7AagoXjgmtc7Y5CY",
  "key27": "KGDk21L5HoD86NDs1AkaqYpfcGj9GcWXPGaMbq5pCKtku9AaYJqny9RoLSTWyfkFSGhFVX9xeWGzXPx7CNqEUyb",
  "key28": "2sSouR19BysMwVAwEvhckjZJP7htqnvSdDwkorFVuYPB7nYYkuizhbvSoxC3Hm8XZv3uLmzy7UjB3U1CD8S7NgTE",
  "key29": "29nXtE9gyFd68GHx3Z2r2xJ75MzsdJy6xittGdBiriqP6XGKhCNy5yJckfvXJ6A917QuJPcN6i7C9ADwWxfR4qLp",
  "key30": "5y4Ks4B95tfsRrFELjijrwqz2VdMTQ54zrGXoLY2uR4xeQVJ3iViX9S9jozzhULjA2Xp97BWYhGBh6e2wcsVof1V",
  "key31": "5K6VzuorktV3GaryyNd6iScami6uzrYFdHfizxkeFJVu42ULW5B6Lg26xj21LALZUa9XD7QnBaWYWJrY4shiw2rL",
  "key32": "4jD7LcMT41zj3DfBatk6MqXUGomLuuNkHSQNSDPEpbS1ymZJHaugMa6yAzvuJtBzWECWkH2T8bFLBPgvLDPFtetB",
  "key33": "u14fZX1LWFKgCuKD19KzU2QUERfv5eQtXtWBPeQRuzQh6UAMvAV4qoZgo5KzuV6XaSmDhNEwRcwDBQA6dTUqBnB",
  "key34": "5tCiNfrsa6qSxBZLnEmWs1FLXyu8dBuaA4aH4fPRnxX92XNaQ1L6nowebtttUQXt1bZ2YFbUPkQzkXkN4uKf3shk",
  "key35": "2x7WFNKSmhHvUQNpJQhUq72ebgxrLVNbP8imKYmDwK8upfqgfF5rUuGDYHxKa8uEMh1sWnAgduzUXCFYzrWwoAy3",
  "key36": "3dqueLYp3YeWEXrwhDikc4GkqUZi4VX6d12rZLGCpTDYXENDmFQ7omYUFrMB62hDgjfSRo3swcPN7oZPezd6xkcK",
  "key37": "5aZWnphcrQWwjw9ePMhgfzjcQdGg4Ep3F98pQ915U4WUjSyd23z5tHNuYCf6cV68CbUS3DNBG41S8CBdMRMCpSz4",
  "key38": "Uyo6mBxoQyBvGdcTLen3coTBDZ2ywVoqV7MHuhSyCLG7mwnLN1SovMaPG877RUJsRaWwGQeaKiyhDPvipx82DZx",
  "key39": "2mLb7FDq1yuLEwnPvPD9GXnUJdmtooCR8xasTCFV85zzTpc89CeHsyKZH1umUMZMpn5hUCBSpW9NYtrkaa1Fvw1R",
  "key40": "3Je3sxRLBkeVBFTTwXiJg2mZwKJetHAqJkT36B2QVR2Xo5xhCJ4GURNmxHU2BFNCrXgehu3CNY9ZLBoSHuPv45Jc",
  "key41": "5SPGaqxFE1aSnaKamMg1ikqpRwKhTXDGpmUyr6a56RUdebpfpbVhnWA2VTTr8KmemVHtotH5MPdLgRhsYfnLFDBD",
  "key42": "3Q2gW3jDtnuZEiGyBQZo6RtPsdhMrTVXjuhcfDVSXd7Wjo45SrGDVVbs6XajEBaefwF5hC1qPeJqyH39eRYx7SHi",
  "key43": "62x4a9ENtvesNgoVBqn97xNMuSUhWf7zmYz2jZbBcko3Q4vxWsU1gnmdKpN2mTvjS1pDc5Y4VQwVX4s5f4aQTS2n",
  "key44": "5MU9SDefQmJQybpxFvdpbr1191hLTnTvoBf9Qd9cqyjmyykPkwUrVHkgUSUiw5K7ta8B9QAAMatXH29k9TC5kf26",
  "key45": "5kxCoG8cwE5pTeivJ2cSjfM2b9DHoNUYMkfhhJRB9Re1X4R7HWxiRGr6j5oLeG4mWBVrba7jguwozEcao75prUCh",
  "key46": "6MQEatB7cAVmTkuFUufqr4eNLNVd9ycpX8dh6GgEsR6mjwJXvdc6YnmtcNGZf6QkCgNqB1eTtfmkPCBHbuEzQUY",
  "key47": "snH6r7GWG6qCkAP7GEK9BRMB69vawGtwfrNZRFvjk5fPaoaghDRToGHSAYeDj4b5D4edrMDr2Saj1HGLQcW5Y8h",
  "key48": "3QZjsWTf9BpB88FpuMyC4eY8EXNb6Cen8GLtcEzoNFQoPFHF4qiiwgwzmGKUDAf9QyCZJCFHp5qdt9qj723cW8ac",
  "key49": "2ASJEigPiNRDqt51T3qAa9sCsF32r6pTYG18jfHEQ9XXtdAscAqUkVYYVxK589ewZEuHA3hwRjMXwLP9nryXSYtC"
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
