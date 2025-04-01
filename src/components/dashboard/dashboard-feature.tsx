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
    "2MUF6QkR6fauJXbZkGp4UgZcKfJt7ttBtYAgFRSjq7A4nZFmye9fgEcgTN6mDzontRdvNiCwUfx7XyCmQLhXut2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DNL84UBnBggFr1FQXbPgbgueNu3swf3h5AGnbmpogw1W5HohHKHxePjpx8mCmC13aQtB8HdGAgzQExhkefQWPa",
  "key1": "2zRPAwcECaE197VsDaiZryVRc6RQXgm3m6HkLj8JxUZx51qMZTcoUub5z7hE21aXPRU8XY5pxM1NxnsCsPcoCA7a",
  "key2": "66DzkpgPPPqpeECR4tcEktyp6XoifEsCmcN358dD3KnfY9HzyW65WzE8wFaz2pBFkKWShRh6dsNJpHZnLh2AG7cq",
  "key3": "2ro6DqLWGXsNPV6GuAxgBX13oearWacAqDZpxBa5eXLn8yNMiPSW6Es1WjCFjRcy3rbazvWASuQKps5mifVbk8FB",
  "key4": "2qhEr7QKXzez7TqdtTtWmSvjAzkhizDXivZmTwpAcTUGWieyfqc3yPVN1g2FjgpDjam3WAc5uuqKYzszrUJQNMCS",
  "key5": "5Qv9aPbwFFLjEQ5JFRNL5RdeRuMT3ypUNYXuqQ8TUbP9sdDzkrw1t84HDULaQhssVjMRjjktCgbEbSG6DhAKqmup",
  "key6": "5dCd8eTivQE7Y9syvG9ne6MYV2pnxHyWCAV2sDSCKw3hAP37VP6ZsuTS814EMs9Dsj5MTu8LqjTPsJRXx3qJiuA",
  "key7": "4EVF5KzmrkEmgaEVvBrfZQt3RFGmRxtok78CsXsiRnYf5utoa1mBuYPRuTWiXi1hGQnaULfNvZuUxqHiwFgMVBeK",
  "key8": "3jy2cF9PokzDj5CBbh4BrBvz5qAaF62bZd9rouSnpkppboed19pr71xJyLefQjADJ7Vi7c6mKitq16v7H3wr1Gc7",
  "key9": "2MrpEVwEXHfFq6gdCh5c9B6U8bG4UJNGtUt8AFHUwUcazBgiPCPrJLQhQn7MnerDuHZoeFfLyDTPs82cp1TNBBgB",
  "key10": "2BPoQQ9y3X7WiruEH8nzB1xkY31jCb3rsX1ox5Z4nyhxH6JT1a87HGfaxEaz5eEbwNVdCiBHXVVPPmoBBmXgbNZx",
  "key11": "5a4eArhbeRRF5rNM6EMRkvqa9krzrjZGgQfgUpTWx69zGLaZUaTtiYbSMXmcq7oTb2A9Hxc7WZn89aLS83VfGN2L",
  "key12": "2ytsZ9S8bd1Zanu9BGQUgZRXE32nuQ3dEJCuRo5Jkpi6GPrGPrpBkQhK2gtHLSaau19sKm1mtGgoydLN9999Fabk",
  "key13": "3oBY4dT6mBG8CczbbrnU2ty5zTrwPqBwTaTRpAMMH23ZHkaT98xg3L3aoqLaTdfESr5n8F47DCFAhKSnAghXdhC",
  "key14": "2uQdKG1JxoCTXfn3HEHizPPDa2uarv2cjUTdmaXckrDmYS6bLLAfGK44TpZEtbLzF8zYnQneSTwvK1PoAJXBJN2B",
  "key15": "2uf6ijqLRHNYjoc7516m4iVF3FCNkobZp448jAsucbisLmKweQu3uLfDzXVxZCkRJBp7KepZHmzCUbWQGkc4vU27",
  "key16": "39Npbo9N86rQUj3RPwLeZvK8RrhsWgZp5fScbAG4ti37hvht1y9jor5Hpk55HRWcHWwg8c3mGpK5kqJbVC9ECshs",
  "key17": "4DaNWA2Eb8D1bRcAYMpwV4giW43HR3Y9TNok69b3fhnCsgRJc58Wc3KPJPkHiHXQ58gbeeXxPA5hShEA4U14aGcR",
  "key18": "2pdHRcJvycoEBB2ev7qSfPY9DcgeC4chzgEq1wKeTRpDJFHASkXi91LQhzpZFMKeaGL7TWbyF5hCviDvc72Eypt",
  "key19": "5MQMxytTwp8rSu9qPCzsJNe6naEJCVNpdruK9EMXxWVe7zE3PuyYqqZLAfNf5VhpPHbJGAdoGZJLyYACdJnNEEqT",
  "key20": "5toamScktKzPHDGvY6weYQ2e3Re93Lnr8gKKvBNeDxBhLLpq2DKWASNhWpYFTjeqjmbqXtXL5oEiQP4hy93jXu2y",
  "key21": "4waUiqRqrW4LTm6GHzu7taJCfPSwY194T2Pp1wRXq3bFExLGTPLMKcjqTxvP8pUBCjE3X3i3BkC3TjLvSrkYyKM9",
  "key22": "5dbgBjRfbmEXpEnMT47DkJLFR5bR97PmdF27CGoseqmwtcnFmhCA6itBDhLwG3cS6XUEYYHvZYiKkJHYxysf1RTL",
  "key23": "B9zAJQ3vancsgzFdMU2ZRWdn79mc5nC86SZnA2qitYfwBKpwZ1VLSKdg87R2k78xB7bvpcrtNMPwgpKS7DSYLZq",
  "key24": "3yU7ig9YHmFuYnN9FRALMT8gJhTvwjKYVe3ca6Zz3dFwuARvjHkHcCh4ZBb7MC9tpuwd9eXQ9Cp2xYwb8qXF5Ckd",
  "key25": "2CwPbHkNtaT88tVJRLUje8A4SPRRsoR1w34QGe2iWVHCMbvXTYL96Bnj91PaUtiVMS8qiEKrMQGvBGgQ6haFCTCH",
  "key26": "5pwHVCwB9nfpGcAmc4JZYNtdqftHa6M9Mpo72k7wu8Ey83CCcuTcaWVntXsqybFeUomwk6vJ3gBcaHDaE3sSUADE",
  "key27": "4peDjnW7zcWb5YTUUiRKXKF5oWepM2mARx4rgwReuaTz1NsT7rpFnqzN38Gvm39MWYAyjDWSXJ9awUY4jpJ2dH4s",
  "key28": "3w8v14f3zsVY8AdkQzawaGYaqojFZbEDxXHAKjvjmwH4J9k9yVndvtcNwvQ9zdQJiZABrWUVXzqvLd8T23m856UM",
  "key29": "4wfmvMYofp8a74snwCyiYwrDrcfQ3oB2TxmaSgvuoMT3in39fHtsYDkCj7yVYtCSkd48PbVXPLN8kbUsjZH5u11G",
  "key30": "3tzsjhDYoWr2mttXCzhyWFsfvRY7wpvDyF47rnL6cQErpaLJexGRGjydBDv4SQy9Rmf8HMejWCkX87uT6QKPyEGK",
  "key31": "5CQZsoAXN5t6d6xKqr1GTjjAkpAuKx65F1r1WYj2jimkbsE7wYm8qyy4j3JYT9KZUN1mVkgkvGeVs6EGBN7yMKAN",
  "key32": "sHR6zu1KpgRqXh4SRgsAM89Ls5zaY3EMNXCC9jcqpPfqDqHAyY4rkYccUq8h8pofN9bz4nJLRAv1WFvKf32PeCm",
  "key33": "2tJsipeJAQys6X1q5Z7yYCNykZs3V815e33o2zvwhPXZj3NxUbzBHsRNrmU7dJAhn34iTKi3oSGNBNUxyqcV9WhP",
  "key34": "3zUgyA51ZDreBHtPnb9nYEhMZimrtKsUnj3K6jMnow7LZT15M7G8QU24MUrJukCJKHTuBhhDWboSWQ16ht6yKfs",
  "key35": "2ECi2BBc949tSy4yMQWoj36nco1wX7NeAVPgyiSpp2LdGpM4tMpGErsRB5Q1svzaVcVhyPqg1Djxy4cxihSkAFaz",
  "key36": "2ZS31cQFftSivM4aZS5HTddm9s1xVBq9ps5ryCdRJe2QmfjmdLys4Ww1aMjSJHYMZnsGY49jwgjnd7EhyE1HayNi",
  "key37": "4VgsjNMjY69pGDx44fr2RGVgSuasZJkcQMe6ErbRhD55EDhGPdkJbQNkS1jcFr1FM2Skzs6gPq2ULfdDy2AEMrWb",
  "key38": "4qUuTAcqx4RPGJnuoL3d4uBzd8Jse3RFkZBAToe85EVJTdJNacJfgs8LjRYwMaxDBgK5bKnsRovLQAdJvnSCS3i9",
  "key39": "4FFC8AjoyKfJTHGUPPxWWSiWa3A6xPz7BFM4C782AfcmErtxjypz4WCa4MKfq4SsyX2v8xyNPWpa7YLgVcA16hk5",
  "key40": "1Yk2DMDdVf2fNpk5shR8vTt1HCGJkC6TxJtsqZHwUKHoSAJ92MuZp14gb2pg2LwRix3ZkirHhC4AATTaxEwyJis",
  "key41": "591C5h7PVLdzsj9GCekDT1CgtYXMR1QmQXE9pLaxFaNH3rEmYUZpcwU6ZW135SnZJ7QujfXQRLYGD79dAiLc7q9n",
  "key42": "38PmALQt16nxGx3v1DX1aQyvpkSV5HR999M3JWe5E3vzJ725hNxdWQnytDYAPfSUUBEbSc2UrRbFSuM35fiyNskw",
  "key43": "2e7tAZmXFm1xuTDfHd2yBLCDgd5XqGmyjE6Y6JKLpoBadoMcwCmYoyDBxn8qxa6CJvsuLZ1DnEtNnuLBY7uXXoA5",
  "key44": "2ugBFk6EiSknZpQ131r1eRfbzGUxMGwfHV3tqqFfa8MzmeTrgkbeYn71pohNPeAqxdMWpGM41qZT8K3AKqo7CjBt",
  "key45": "vVFMYnrjkMaGhXzyoSdTFqYagZE6jB3Erw896Gm2qm6yCtnbz9GuGt2hD1KMSPncbhMBuSDrucTXXQQwcfH2Joa",
  "key46": "2E23JrN73TpYGncHNap9cCwnaRUqrYK37ok2ZncS96jTmVwegcsqk5KscGuNdjG9aAm2Ko6xKNgktWtdCD72BhJc",
  "key47": "X1aiqTtV4WHdW8LnhAzg1f9nBLB1BKkmJtxrHh72cBs4jEYcjUw2dVMBoeELQPPhKZyi4RCw8RSxKw2CZPdBw3u",
  "key48": "vBwhYtBJoH5b8vnBTwnkdqGSCzLthByMgTQXqMbSbRXktzzkKokkGs6QmhzMELRWVXYAn9RyRh2wz5GMUj1YrDE"
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
