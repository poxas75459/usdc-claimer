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
    "XTsMStX6DqwtZSruQYad5AwxVsA7Zr2minXeifJkGEVi5GsnFP6HpkXTcR5KrTPaz2Gsh7uBWYoxNi4LAHQCSFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ubz7KS2AQfmkHBj13j4fFvW2jeZngi3dtST93hQ8WogeFDbpEUBcf1qtgtjDyaa1rwK9Wns6XHHccKqFvEWNAei",
  "key1": "5Z1JhM8tK8aXcBA88i8p1umFqkD97VRiHEry341xPQmiC2zDejS9pZL1ueUtb1znDPyN4xsRXtKmBvHfwZBLbJmE",
  "key2": "2miSGsHq68V3C25Fc6ecaPuokBdUu9AH4xHavGenx3bmu4QnsZK4sg1iYk7TLtq7D68hiZHvCk6RFmE1xcvpmmvm",
  "key3": "2p1j6LaC5AeXsAESxWp4CQ9ykvaT1AvVsgAcBucWqkZzBZb93P3pR9ce1RAPgGXkqtFeyJ313qyyKCqcwNxfnqzF",
  "key4": "3Coj93F4EC9e6eCxWiziPh19X3S33PuSQXbXYCnvHx7J2ryjhAYothqcmFTGZUg8v4icM63TmxwWS3TdgY4Ae8LW",
  "key5": "1wF61BiDZ2Qf4bQNYFM7zQyzpS5Crzb8JZBprHVGERD1Qkmt96uNKjsxLJQAcmcEQPjYZZEBXAK6sCWki7W34a4",
  "key6": "KABJiiXrJiuZRKv3tHnnP64tW3Emb6tN1UNdvxnR5Mkk2eUME3smbM2Kx1jHDnRvab6R2Wxtfn9AozfUuMU2o26",
  "key7": "5q8rhGf1MkuQs7RmXLy7BwCGiCZP8cWH4DCeo6AjNdLJqawxwa7EWMWwqbR7B5wmdSVCRM7wmVb9bfutoC8JUbmN",
  "key8": "si2NqQ7MUegFpcbrboS9rt8o2yW5vh2EvbP1nmK3ayVMiLWEq9dUYJ18asTx95g93c4P4HDs2sGQ1UrTVi3xq7J",
  "key9": "rCQt2FJu9cUfxrt68wfJXgp2DKXbitp7EY1cCKusXpHmxBfCaYpkLVCXL23AnbfETpRazDQXmpmMAAcqsbg7tPg",
  "key10": "e7STNdeSJqExPdvXJTAFNYWyanBpZsPDJzB35mJAEwju6s9NrusYsMYcFhgnFa2YeMwvUghgWGEoa9jeR9iCXk4",
  "key11": "2XnGXduC9RbZs6rrGCgneEaUAkw7RKPwCmtUEEm6XiKZ88sAKTqCAPS2bLCX5pcAaCbdY6QzhHATUipZW52VWxTK",
  "key12": "5RXpSADpTAXqKxPb25nP9N4Zn58meaJDzAH4jg9CaV7RtvaDB7fz84KgSQfRuu4fEzaKXiBRVm4h8jK1mix9f2Ac",
  "key13": "p2rgd8CTsoTeA2D6MB7houQq6YNYbsRTi8YnsepJ7VtszFe8NBMGGpnbUWFXQywkav4MNPHBcbNF1PHzH2XRJFf",
  "key14": "55zXAbN9PioiuLJZroGVfoevCwBbnHmCBDM9x7sU5P6WwKW16NUfckKteZaPseoMcqDJ4MPy4rmUc3v6MQRUgUXY",
  "key15": "4PrX4bdYHvComQoetBR5weQESZne4p8yQBBBh2mrwMJKx3XQtpr1y1DKpoDx8ynwEQMJbXdxmsnfw3duU99HhWzn",
  "key16": "5Hz6i4vqe4ULUnppxMupC4XuUzaMSfkktVkMyV5rX2AqUz9eoWVMdoarukGpVGBQPJ96Z2d88EeMD1PwaefY2WgV",
  "key17": "JkvAZkrvAZgyJkJfMiqCUxnqfGpH1jM58cwB1b6PMTivqqasaUGVdPoscmE5h9epubANksijaGF91NuyPhB8UU7",
  "key18": "8LsNMDRtJod1qaDxPXKqW9RRsGa3PkAJ8dVVyrka86E65u5RKfAZW3rKCHV4dwC6857xnqWYfaDHrcdP8zhuLYm",
  "key19": "4ZGBXkELytpRVsRjLJWEsCsZWdfQAA1EgnvifeAnkhJAyCMtYCcJJsnckghQ7eHwKNUjAPNqNKN3jvLn5cg1n7bo",
  "key20": "27kxQ5sh4MHFCdTQK8786y9KZJc1zhJmxYuH2jZLdKomfWj391T8YHZgDZpXqnKY1Xkyjawye3Ne5o819vXY9zSv",
  "key21": "4EYuQJSLhSKEogn7TxV8LDBjfa72UA1NoWKjnUc8mWqeBCHJ1Y2Lp3usQ5PktDP2p6dx1JtF8Z8fzsrdfyGsvnUY",
  "key22": "4Ah18y7SaZRugg1eRMvF8Y7fwQf57WWXWug856zQjWvzKh6bF2wSfKgcdntLhsLnNymG7MTrbeBp34TZLpW32ym8",
  "key23": "2aeJng2ryXz9GTD3wEgUxXnMWJZv1vrvCV7tyM9FkwCjJMZPTqeyfFWa9nNHeN4MfUBKUr72sX9LKk82xEMrKE1g",
  "key24": "ghEgSvjo81Mjhu1c75SVv1zBLSz34UufRvAVCWCY3eQmSbFRrpkXWuEk3Ls1VrfD4rf14uqF6EW1u6dE3C7Wakg",
  "key25": "2435kcnXT6XDzFtErS1745UKcWkF6aMHBAZCMHobMvd2G6cZgGBxosU6yiqAvLkrtTh4GwHTL7fh7AF57A7kNtp9",
  "key26": "obDBZCBVd8oGAvTXwKkjbziRXkH5JeoW7SdeD9z8pQ35BT2EMaGyjZLqfELbQKjzCEWLa5LWpWRHJgjNmTuYH1D",
  "key27": "3K2czYKmPqCg2zMtVBu62H4Tk65PzMNa9sHwDLAHqTotxynM85Soj8xPzZhxacrwyvze36atjaiuVZDvUTjZ2sAp",
  "key28": "v8S8KQqx1vfNyz3gnRkM6QqQqf547MwEZTxevgsmrRfPtqijmNosmR3eKoFPo5v1KsE67ZUyEBFCUEAKV9HEkgq",
  "key29": "3ufqgoMea9g8AqcUezKnvEDUjdYA7tMmUPoS7Zh7i8kJ8KHiKKJVnhKKaB4smNyXvw4eL9YJ5FgQqvG3VuVzGDYt",
  "key30": "FmhxkeoVfX2smR2Rc44F1RTpcYSUhi5UpUxpuf1bVWCyN7AT1znBSysPSrvUbzVS5nHLQFosLqLt8tdzKEcTJTE",
  "key31": "AoYrpmHWpX6oLnCtVf6Xb6mYwFogNfzYyhE3X6epZnC512j6D8yuW998iGNneSqv11DF2E38kn3D17gE4gYfRMY",
  "key32": "2qm6tVcxuFuTW7imDt6eyX6aqdvkRUNoptUbz2Rz2XYJHsVYpwic3h3ocVCJrZEqL4dPbqhwLjSub5tqPomQkNNs",
  "key33": "4veGfU4BjTaQ16VRhKzaERrCudVZPcpo5ACETqquP7mg8oPy3dTcZER8me5RyZvdPFWFLGd2LFCM4YyhkYLjEuyn",
  "key34": "3ZSRrxezWZtn9ifCeWzkq8xkivenVYdkgvh2EPG6K4xeLtQJSNp7eGJYwMsmAvukQmxqUQHJ5gFuJUof1Rh8E1rS",
  "key35": "4ortZ2SyubT663S7qu3iSdFGBRh5WZVvGRMubSW9c8HHcthGaHix1t2BXUVcwXr9mnTP8pgB9r7tfpg7cWw5wjG8",
  "key36": "3Wg5GMvpbffRczBWXDjJr3WHHWMYMtZn9GissCF6QmsenT7bGRKpeFxmp5WpahM1AMGX48eMoUmgUWkAGdNvN9Xz",
  "key37": "273oZgeQAQeC4wL9JBd1yLvzfw3pBuqh2DD2tCLY4T9o3MSqRLVpgGpA9bLaJiwemMS2esxyGYUeRTNnDhM7yhv1",
  "key38": "2JaqifT1MgpzUs7KRhVd6tLyPECebWYs8TnQ3eTCs2wsym9fpTTGi4KMgDefJ4kjzxNUBiFZAg8V669fF27uEcV5",
  "key39": "3HncHpjzKpLQADni2883k59ECyE3nmKdHWTaQXGMNZ6gbEjS9JBqBVdL6Ktunxfs9eoxK3JDMNXC46zgeWQDGRG5",
  "key40": "3FtC22XZfsPfpi2ukxEckGtPHGdTtQzzw1xkhQJD4LS8zWK1ZRUPn4amoaSF8mKesvrWa6JAyoG61rpERDj8rK9Y",
  "key41": "5JhXaZkZ2f3A3zbshpVLBW53nMQ8KfbENXGKqiemRsmPZNHgofhbpEXBbTpgaEiErBuAALNtmHj2zkwCQZCNqi7v",
  "key42": "Qo91XY4P1okvbAWwYgLjNkHqdLczMMykJgxL5z4j67JFRf4kkgnQK2oJCHCEtFP8QPLmA3hR1uNmuMPwUG3dnrf",
  "key43": "38xd3Nf7etwD4VavCVELTFDrkfqtpeir8hTYwhmVKJsPF61sGchK5reznq1ZMjQFek8GGsCyVAhsnUNzfyPKMR7t",
  "key44": "52Dukino43heLX6AxTUuWqPvuRDnhNHjXGQz28vG1quPShqq7rrSvTkacRYPP7MsE3yroGWsubTYUrGaGRwSXyXB",
  "key45": "3HsMUMsK2STaLxoW9Dg76UXo4cc5TbCa4AjEcsw7LSeHAYdRpYPLtzPQDwBf3CJgAF3N2WbtV5cNEUMoKJ2fyv6Q",
  "key46": "jjJx6Pqp4DVZomVJ7Ehcwc7PuEy1KsQUrgSNX5JsMVw2kZMFh6UVn695mnuFiwka1mWiQNaRyugH7w92PrYEuEM",
  "key47": "4ax2QnCEomRUAwAhP7ju7j5LzHcXV9F1UTrRDaLGdN7kx6LWzSGEu5rmVX9ERUpoaQprVMmSsQnFqNVaRPTCNwMV",
  "key48": "36a4jba2GidPyjckaBJfXp2853UFbHAyX1KpVPMnNrvXv3a9Bz6AFVGLeCePYbyCdUmA4y4WjktEXhBbaWkiguoA"
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
