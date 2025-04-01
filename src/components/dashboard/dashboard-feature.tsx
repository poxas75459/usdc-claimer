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
    "27spfnHhAzDeiV5yxrtzEyak5akPNmBCbVguW6XifAD4uERU3XQrWZP2iQLSf4v3zdNKsiYQtXMSHtGCctXUSLtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aibEMYyTBEWskzhG4e9TM1pWDkDVxPnJazZTk2dRGYnY5QEbN3hs7c1yEFUoZxqVzgjtdgxwyE4CL5nZkaBJxr8",
  "key1": "2kUGwZ6QjkMo1F2p3QQFLfqTQDn3Nae2KLND1EHnVUpBpN8dbqCBD8gofbfA3vXgHqcp9ux29RzEjsLCpHsCb75w",
  "key2": "67QvVwVcg3hazoy59BFU32zyUwrDuhizKUgcJYPobPLWEjJ2i4NdSjgZBBNMFFu42iZxd7VRZaw7GFTAZH7k8jXT",
  "key3": "aeEyUvtdpVYw4GUT5c4Mtd4SkhCoup4UVEr2pum9tQySgqk2YxBbD6R75d8B9EcMFivevyioTchDJSKdjvcHS9o",
  "key4": "qw7fhDr6WjjsLrQW6ivzW815nddR6avr6sg5Kg6tmw6gHmpCUKSiqVnm76ATqm6fauQfwqrpLE9P87dES5DeofV",
  "key5": "5KjrtJGTU25XLHKNTqhD8ip8zTEKnMeSnndEsE9wyaGb9jbvkDjq8UKV4fiNmY3ApaUgTLZe8K4JdD8XhAaoAdeo",
  "key6": "cjb414fyzFEUGyakUrPNc5EcvMXqVLu1PmVQLUSycMFfk42j4fqZwNvKhbFHn4gC2mqvxbrvriVXbJ7Q8XTxWJp",
  "key7": "25YXGw8GpJddrhVXSxhkTTd2UgSJFqhntcqSmPhgV2z8JRMgW7SseGKTAZPG25Zn4oxrVv6HN9LbiwZPE6fZnu25",
  "key8": "2W3AU6pWtQDrNuUFrYCXcA4MyBSQMuMWUo6NZec3n3fJQcYq1T1fGfqbphUFy5HfRvRSbf6MSAQEqDLMpUoXWSto",
  "key9": "5i48k5iyy1ZFgGe2YKExTCnZkJscnL6wvtBeR4fbtXbxANRLoFrafCEEbuS3N187UT7WebnUEUPPapxRt16qPQsH",
  "key10": "4mCVoA3uwUnz6ScHnJJ88iq3K4dHURRUHdxGgUHQm7Js6E8LRaggNobtvR8d5a7MDgdcxVrRXtRABwUniS5FhcnH",
  "key11": "566ER6fbGrfqgodWegRFc5rrQ3vRrx18UzuEsm7xBEJPwWv7driGLs3oHBoWnjHm7YjCzMMnp2kGgCHbfRpRcZpC",
  "key12": "37L7Wb8qXTJ1AJFYswHB3munZpSxfKyPLiLxhyMVwWgtoNG3snvkpZHkne3mibHWG5iYs4mgQsb6vgwg43avYd3a",
  "key13": "3BgC8PBc78RCHSnR4nqbWZTo2zGCEKfFeAdt7QtZfk1zoGpoKbjuH5i63cHDxMVvmtJS7HS5amYCBSnfG1YfSbh6",
  "key14": "3GJTQJ1xM5TTYz4wpuKCfW28mmZ3PzWjmqqNX8tzTfRABh83jQ4SUn9BhmiSURrUs8vd2QTrN2pYkYjEM7avnJmt",
  "key15": "43BEZtn2zoqBdS8dDia7iRx3DZqzt1DLido5enEWoiikj8VxscsdDtrJ7T5X1KtTRzWPKFGodLYdZPWF7g8yGAF8",
  "key16": "24vA83zvyQtEXFWPePJks6TkUNQb3XFE7e6Ns9USUhquf18oSGduu8n6mKi2519ijgDtwTdXmZXe3KykzE77qzQ9",
  "key17": "2Kzs43Ho1b7y4jEUHemiHv3ijvhjxf6HDHJRg62jWhfVwLe48Z2XcuDd1bDtvMfxUietZtpvVjtEsxAr1d4aqAAg",
  "key18": "gY66ecijPNgvABzQ37iM1nep8oTCGRCmhHsB8yU9WrBXZCC9J5vrJqixAyy9Ehx4zGUN2jQeDKyYZiwsozr64RP",
  "key19": "2JCzW32MnALY8dbGwVjkRib2XVssUQ5HWZhDuRdQrw72VzPA9HPN1zb1yRt4YpxtjJ4Gdkbe3jJJ1FXfFhMXG2kW",
  "key20": "5QA5qivazkgKnzb98fau6gbV8k2k2G2E8RE43WHkvDamqWZ8e982pSb5TNsLEwqJvuhqBHNqdepKcqYqAsmuvmss",
  "key21": "5F1k5pMdz5bieTwvZg17KPmZEoE9fj2CnBM99JfD8VwpFYLuZ6atWKGmACd8aAgwdWokVFvP4VTKKSnrRvQVAYcC",
  "key22": "2HZvVLBVoY7ebzGD7C7RZCTgadsjUF6bBaXSxiEAJmdkCFGiY8x6N9di9kVFwVumNJnJSjvS5btzG3koyCfNGAFQ",
  "key23": "3yag1dZxD4ajq7q5Vrg7hfL2n29B78QNZaKdccmaUwnhWfW8Zz64kEPrbdNYipSwPYyGrWGjFjBcRUzBKRUftKB9",
  "key24": "sZZJCPeTJGxN3g1cystkFgLqwxYCFzuE8gDXmNxphZwHf1LiYkFuN3nWeZuGiAM9TWLoEkjg4UoCrvaigDVhkyM",
  "key25": "2aLeFTVChkiMJYviwAw9ApnpunmyW6BsUiGvZkPVhdbnGch2v8eR83v31c6RGRLUZQ5N3edRpjaMpvqZ6KWu1saJ",
  "key26": "62EwyZyf49pDZy1kcWWz57NkTeyXACqDy6yHtx93vyhPjrjF6ydEp7FsK7N3mHXUtgBZ2mC8Tn6wRCWnm6x1Cyw2",
  "key27": "2TSqNgq8Uws7u2cTskh9hxns3QnENYVyxcD8xN6phZpvm3r5NdzpfT9GETY7xQxBVx8MbYVTPDEBnQuW84dQRDhG",
  "key28": "3zg1QxXnxMtXEArkRpk7ipwbK6b63j2CPUdAxyYYgzyArzz68ZVo8gf2sDp7EodSJawFkFBgCRmtbV5HonLz5g9m",
  "key29": "2mAsBE3JLShz1FUhG15wbgfXvuEetvh4FHH2Ci1UkMxevxhp46QEmVBzJZ6FtqxS6hn6joCQSLytqLcxzq8ZU18f",
  "key30": "2L4vfYQKe3N9vLXpuHYgsBLvtDKqcfqHvcqWsMMSX8DgTECq6NWvJ7ShNz6nWbACLaFKWT2A2WBX315NJspfYB4k",
  "key31": "46aawo2wicF73X4A3iSYeFQB18vQDQGE4KjpC6JDBy5ZPGntP7ZT48ztY9W8p5tpQJNSH1K5FdR7CQauZHhwv2LT",
  "key32": "2sUWQci2eQXdg2TsdsZGGAB8zRnx3o9vtsL6ZKg47SBU45KuG1wuaUT7rnepZkNrFxxbzS143MAziSNNEmsCNj6t",
  "key33": "4C81c34gAvJb54QhrQeYNTBYBHTSYwfizucfgZeekqubyTsY7tSg6kLoYxozWFeR1d7NmbeZzyRkt8uUX842Xjjh",
  "key34": "5Cr7G8R3hFkePnptk8E7DCrUvoXCPQiAK3t4Y3eLUnZvGE6LutEuz7mghNykZduSvWZ7m5ZeFxbBn8B9MkZUFrg4",
  "key35": "42eoz4x1RjzNR6z9yop23USjLxWUUCqTjCGdxAFhfm6onpLW1CsEFnNwuaem66vsFwynyPCKowwujAmBJyoa71ov",
  "key36": "42iDwnVvSPHF9HwWaK7CSK2a2QtqygFph2NtDVk7ZuwjreyXwXDRE66T6Y4uJhbDQso9JnYW4iM7WVYph48ZnKXf",
  "key37": "4fNiMJzdsmk8zaKSxotKhCStT9dghRxRqCmicc15pKyS6i8Q53HFGnsNeYcJYhGZXZZP4uyNsV8QweAcTfAosS1k",
  "key38": "2c3E3kfgCNHJ8YkEZUZbPgEtnPeCZok9BMjwpinJQdEU54mr4mRE8oLA118NbzfeVFxQdoUxyVTiNMPkfu6DYhsL"
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
