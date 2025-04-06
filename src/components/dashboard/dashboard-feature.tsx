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
    "3JbLcAxuYYvnvHykZMU3Xn3RhcMKxQmpZ6qEumZEGWJtBHYTh81eEaiP7ofcaBBeywbcUK3xNDRMA571bkGgBLvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qjrb7XSvjtN4YHgSFMKTWg35LwEjCs1NYrECMRzQjrgq1MkbenCPv149MXnQdqe2C4wDMXZaLNSfM9zvaxeCwWg",
  "key1": "5esYcY5Jq81b5KRsi6S4NvBt94NXBsDp3Tndua5W3XX172WLoKquxnUGJtMKpGDcRiacpi6vY5dSTm72Nifp9Q2m",
  "key2": "48oxndbZyNj2Bd2G4Lv2hCPW8JdaYRp2ZC91i4NHoJGLh2VNjrUj3e3RRj1MNn9pfaw6qrZ3rqangbbCN2WwjY8i",
  "key3": "32gSc3nG5HxxGUdfKEWxGskPYFoeTQgfZh1ruZtiUZUdyLmvrzJpRNsWoDrSzGSh46hSeYy8Rwqdm6bGx2XKhfFT",
  "key4": "4Cmj1Dn15iFPdqawWMNUo9TxKZXjSJHAq1vSk9djygYFVMqV6G1GkAtLgVAFTKcCLy5a89MyVJDmnNu7LnwRZeie",
  "key5": "2pPoiM9YCQ2DBkAXvWZfzi9i2GYLDKJYZo3nHZw3AjLP8Z28n7zDALkr9FxpRDt39KjraTWG54dtHLPASvGMwhEA",
  "key6": "2TruobyJ8Q7wKnp23Ttam48ZnwN8ofXDoj6BX5NSYEipqQfGr8ChaNViqvJP8NZpEp7h2v5mjs3Qs2bH1AncDGtZ",
  "key7": "kEfrwCP82N1iSGU5Lj6gGRm8UBqmsiPwF433gjNfWHAPFhMWnJpCcyuHjfgPxQcBXp4yV5cwqaY16GDT6Xp1u51",
  "key8": "53DNYCqcYgH1DHb7uEK13Td9Gj2MRoYKad3cXAMfYk5uyTQpeU6UYE51MRUjwNvPmkKP3r1YBS7JEvfZWSoJTpL4",
  "key9": "3J3GNDYv596fMM5NEcdnU4KpWqzuWUSeBfuGBmsf7AybmdtxxakWzrTUJXGoqx8zdVTeTbQazbmPn7yEXxnP9eUn",
  "key10": "3C6Z9ZvV1y1wbDCvc5JbXKwyDxBKdfGnca1hfwaoKgXLNvBVNjUASaEDcBUyLbu8pQe6XTUVgQshpKuA4AHFnXFH",
  "key11": "3zjhJfQd45NUP9zX687fw9QpxXee44FAgzRbPgccH7y3xzm4Myh1axfYeEniffhiK1tjVBuoWQJPcfRonPTcY54n",
  "key12": "2888E8vzsYevyQZ7WQuifzZu3NFjGi2JHVeXyMpyVbjAeiL17koGXvo8kYRAUTmyXtzJioTLacwBKLNPxNb8whqa",
  "key13": "4Anokm2j1vJ1Q7ggFoMfwqubzpYtkdr1DhiQct8NZMCD8e6V1KFdWrMhrJsVJRYVaQ8wSKkxHigZwKEeE3YsDrkE",
  "key14": "4k2FdoURRFsDtanhu8DyHEiGehq3RmKbQ9rNetA5XaSRhf7SQdhVRxmQ25srbigUKpi1Z8WcSomacSXXyzYjhCVe",
  "key15": "5qy86FUeJPSosq8wjeGXkaALXB39yG3tF9nJ15d27HWs4oLFJuUfXfL1F6tvFw8e78nnVfAKiJbNvVt87uSZRGqv",
  "key16": "29YsRHLnweftYd9kGgWDwsihXdYeag4TKzGfkhcBB4jeTUedMWWDXqekgfwCXbSd5gX71j3ZXkotVubqJKgFJPj1",
  "key17": "wooC7kQCGViULC3jTTAnrSUiUJouwA5pZ5Zoerjr3ee4nHoNVzuZU9P4TZ2jCV4NEnX1AJpCwEeEtk1jPGVQebL",
  "key18": "5MuYN15UBZZBcTf7Sae6XHNCei8C2Nn6gjzw5CnSnSkNipwRYZ3fgKabfgfi5bca1yNRJ1LBXng48B2ty9QCn8wy",
  "key19": "4L3CKrMEKGwJFy96kXkeyxSE8e546NT2LcJkN51kbQjvxfH2wt1wDTacb583qS41TXrjgu8fF8swVRyqquWGvo16",
  "key20": "29yPb3fKvvohzqhrLnkTRKKYuzGG18XtQ5X8HxN1tGssuVuG5cktR4R89tGZJjLRB9TsWqCFNuSNuRnq1haVUfM1",
  "key21": "4u3Rf5mxFtAiBF4vMfYh6t6bdqpN6aGYvcbw9hfbtmvyf3V22zj9ohAVtfYdm4yWXdz4VaMRfnYsW9XCtW3n3uMF",
  "key22": "4eCYQWjDjSpkBGDUhfGvw3AdsPKtdqsAGyZ6CQkKjnmH4aReseea1Wf82dJ3GVohDhNBCvDniT1dCmemuG2wwn7R",
  "key23": "3a3ZxucgaQRzzeJaWLZyYzU4FWH9aVUuzv6ereJxA4EnBBWmRtTjFjn3UoRKFcQQ531C4WWuPSLk3zX4EYTRC98k",
  "key24": "5dq7E4tXzXKxP9923DUq8h71EjWm7kKVGGM5A5dE1KoK6vgRwadf8dCaKoetWSU1tif3cjUGqbDeyUUj8UNvvczG",
  "key25": "3HanWRZ7RVoH912Rnuoe2756ujygeCMQdht7rAzBoouS6781KRwEvYiMos4wFJnQsPk3h2SxWeboZ8g7Z4ASD5ry",
  "key26": "YvhmmdWV8zyMhgBG4eocCca6gnuyfheLMSyJor6jPRJWMs172JUxvyfecHCirNzcQHiXCzkbWrMpEETkCMtXtWq",
  "key27": "4SJPa38GHsXZx4GKEswshq1kL3eGrgRa5MenyhcCLeV6yHoDjNSrH1RkY8ptVz1shRDQNgrNY33i487vdTSpeeup",
  "key28": "3nXr83wyM4U3ykjCg9U26tpbpjQofLZ7ieHmYdvDtLB3vhRNWFnQn2ARQdxq4iYX1MtAbfxfK4Km9kxKYW4Dvfdb",
  "key29": "66Yw2dmDPta6GCwUDX2tnMXXwBb9mBSFWoQBPn9eqvkA39taK16yXsg5gVtMpZewHwprzhpKb1qfn9nWMyAP3jJG",
  "key30": "5hbcMDhZNaNojGY2b1ewaNDRcDnqnFhe5HX76FZJhg5BS6TBEbAn3ha2fZFESDi29ue7yvEx8AXdFq392P9B91Ac",
  "key31": "47U59Rv7kZDryVokyiqrqmWE81rtDEmrp89dfTVztZwSihAyyBQAEY7mEN4dben3jf8bwNpRninmD3B5BMqQmDJL",
  "key32": "4R5YNcEHNDBrW1MJvhfVC3TfYoBQzBhk61ZSYrPcYkMXmDR5f94BNCkmnFEAKbmfTwBTdNt2Pxw91etMtDrRQN7H",
  "key33": "5CG9ymjthzfhbt8aq63GwzVKxUFBpva4zkgiRvbkYd7ZB2uwtyoccV4vKDaK52jhgGGX6X94FZYDbr6zWkF7THqQ",
  "key34": "ETmL848EKQRahNNQSEckatUsoYaKfAVjcoozn3AfmBUD1ombmBofyGQP3hMmfmqKywh4rxGhTRF1onDzesPgAyD",
  "key35": "5NcT6pswFQnzUi6879CmpddwCSUE3AjWDiFrBMTrQSCMyKvty1ftGqmYxQHkysrecSzjtx84QPuBKccK2mQqEhsg",
  "key36": "5PPAfquUKMxSBEvrso1FuqZR2An6XvM6jto4hwtspetr2LihfwFaSSkzTWVedsduXfXjBqxVUUC5QG86E7hoLqcG",
  "key37": "5XNaVyfaPFqe7E4TbvVLwFr4CGorXmtYrqga7rPDtSPBu7nFifRTTxUWzbwgYJH2ELWC9bwDpNHQti5GqRn6uzwu",
  "key38": "2PiqpbojR5yPVCYEgPyAkvdazNZDmi6FcjrQAjmtWLSCyAPd1DTakXVkMoxSEQJNJkUpyMYpGPfTmbft3dk3VWrG",
  "key39": "2dorsab1DrxCZxtnMxupixo65BNvoN9imHmAVRuQzL9J5H9rafysxNZZXxznsUVYnxLqba2RDcdbcsuoAhqMcADz",
  "key40": "5SpPwPBWvJNMgRtwiB23XHUPtY8CwE9geFVbpfeEEsvJUMaGZzfbmuMzvYGGv6RuUw6EsZ7u4p5r99SrB8VyYBt4",
  "key41": "5Qk2JffVHyfcKqtVgpB2rtTX2tasQ2cmqHq5duXZNZaFjSCBGgiVkbKh9jFM5Q7syi6pTvtGJAYZ82oawXTcihEW",
  "key42": "3pJcfGjMAxjYmumbkjxnqzDuGfC9hekxUdDPNCNbZHy1d5AhYpAFV5yKH6sHd4euTs5TzZqZ5Sy2q4meGUMih3TR",
  "key43": "2tj3xNiAfCSN28RE8DNDhnKWLHFbjiBAXBjChVhdNFwrjPBVRC2WHApmwrHMjoYgqRtngfcMrPokFnu3w4NAgm9C",
  "key44": "5nysZ5PyxDuCxZqkB7xkAB3GvHaCeK9xzVNQgh9ECrdo4gzUKbNLF1L3TEJEqUduuPya3mZWW7S1B1bW9iswmnju",
  "key45": "4nwQWPbofJVqrjscrHLP7xpU8TM5ZuoknRdgv72crQb4UQeq1Nus1B3jQpvSYPV1DXso8dF8YVF7uoesWzUDRCXD"
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
