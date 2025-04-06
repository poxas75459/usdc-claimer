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
    "5vNGsWqi2WVLvnP2Vgi5MbsLw2iGG1x9doyEirxQGsxSfmpsWu57AZMp7E8gPRaZQC4m71Qxu35SNr7mANdi4b3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ngxHhFv3pbnxgQvVHrBpYRTUfMqZe1bqGadBtnQVtbs6kCQv4cikehCXTngCSbyPQaoNKcvgGBhF7pPhKxUzowC",
  "key1": "4XacRCMYoVqZc7BwLBhcX1RBUNLRL5m3RXfrqAETYtmQoMMvougtDkzE9QZXE8YtSs83PmZiUowXMJzUDrJyxcE6",
  "key2": "VrxV6xL67X3kiT1MoHS6P9bBZ4J8AYduhQYWKtno5N2vj5qgUWThZ533kKk6GxzgWttxPPEgMakvsZLUnhYR1Hu",
  "key3": "TFCVUJQsiJ6TN42nhcHTfZm4Zj6cwLHjRk9mqWGvxseKLMxFn3qU8fz4D1msd54tkqWCFABSVxjxkP2BNwaUyF2",
  "key4": "niQ3Yemxjy7gMmA6x1EuMUajJdYCwbymEPsx7gjjUf5Pd81cHeQjtt8jRpct1H13dv2dwu1g6vvJrrdS6iajwmS",
  "key5": "5bKxt2LXboUjdpKRWrejFXaVtkbcpHZKSsSUJAPf9FRonMcPsPoPzEfegsrZmf3FegqbmXAe7FcAYmmKyuLJuzq",
  "key6": "4TuMd7KwAGnnSpwbt1KRbnq74ssDqU2vvud28ofxzbLEFSXBxTGhC6ix1bCurgBKzUV6X9Ar6VwnbwhF1roxZvxM",
  "key7": "5CyMf79GosxgRBDTH2ZLuxUX9RtLCZao7mzQhRaMgFzCDLSSMumrxPAuN6UxdHXwEySmJU9nvj52K9GBW42QzvYN",
  "key8": "4PX7uwcLMug9mV2LsmvALTTvYZnehigTfgJXHf7Vsg1CcAd6rAcXkdiga1ASgRmMTSiTNmhAtrF8NZ47BgQ8yuoi",
  "key9": "yxLXHsaJgbvXMsGFbdub1ZQ9MfLaXCmamtT3ikqohVpLSzvfU2p8xQdH7zGQi3gBaZvqoFWrNgDSDgpZCTTZZEg",
  "key10": "4Sa9X1aBaw5grRVayLNNToxWgMktK11istvZzXVy2jXpAzskjgPbDTKbWeD4jGkpK4NwCsC8PhZxzYqoyFVhugDR",
  "key11": "4CCzqsP8PPBCCLtf5ys3jpiBuVUo3LxBecDkn6QPWhNPAh3DZBEPtreNXD1yvHhddcEXpQJhQgS4p78eGCDZMy86",
  "key12": "5WqxvP232aVThGUxCKWRvs1wvHJDPEQc1b4dzLwHek5GzzjdYMSjeKKA8nvPDrPWYW7jRQhrpH74X3aRY1R7xdUj",
  "key13": "5UAgmFhQNGuwVE2yYHtVRQm4hLbfB3Tjhhv6jKo6ht4Vu2ExLsoXJHY29F3H9cgHKDAtm2yf1pPEvcC4VUnNMnFV",
  "key14": "4JtAnEYSG38bhap9ajg1ffNVGs4ZRhXnHcLReGD7uSza9bAno5ZYYrSz7KoB7U5mbY86psRaUevF3Fc8BCvf6ZvN",
  "key15": "2r8jxqW61aNm2NS9GKsoE1yLC5pFPbYog9qD6ExEf5VRNNTKMw5raNghLSAzQTxtcZDy8if58BWi8BTVn1CtvmsE",
  "key16": "3rp92iPPZ7RbXouuJvoGho7FJ9ydp13Ar1t7ZfRXQ4fTmo37GwERpB51WhFQ5E9YLqSyBcHpkQa1JvRKZQGBwEhv",
  "key17": "3Tecz84qG2buHVvtZJg7KauqSgncRc7jpisAuUvigaKpVbPjgCX32Yw7MAJW15dRGQ3sNb4ETF6bvu7izXwN8zb3",
  "key18": "iKBjgRgzw8fe3VHMWxPFdzDsC3yZV3nz8tzRvdhFT1ZB6Q8jv1PH53C61RPHQ5LqkuTwP4LdELhDKBA545oD26E",
  "key19": "mSHju1pcbz8ARkbnyNGuX9b6tMVojrwsqPpijdvKKw1ifKt7JVhqw4kExqQ6h1KC1JQGQjq8JsYRpJ5UUs3ii9z",
  "key20": "fmeeQjBqytB9XxuiHYGFP7FVu753SXuw9kHVZH5AvUPhwLkaq8WwL1GyoEuvfSSexNPF8vM6SVShojkVBz2rf41",
  "key21": "3ViCrYcwfcM8oDK6uLEskHWqpTfX51esGMmZifQ4Pf8iTDJef5hrULvQTmFB3mgQN6t2mwfhmNu6sJPomE7dyHbo",
  "key22": "5ZPkuaU64UUxEemfMBiLzg39wrotdTAFe6PStamrL87bmuySoDHeULfKweXsP7qQ5S8UgiGHsdZ7a7rSnef8uHpE",
  "key23": "3HRG9dpsHzRppTRdAEpbtd5EiNPihLgFeVNRrr6uk14VuqH9ceZ86XNp865zGGskvxq62d7YK286LwmYPdgACfQH",
  "key24": "hvxhYr95H84Pgc6ainnTUkySedfybjHNJFJBPgrdALpNUGGo2XQnZf27CKJ1BX34UeywebjUzuk4e443uy15xh3",
  "key25": "2pMukNPVSqNTjQkRWy4HcUkohBiVTaBY1RVnhjcLrDAqbLQ77hmv6ax4gLkBfjvK4W7wjyL8K1i1dwmiqmy1mdE9",
  "key26": "5LWiRq1zNtYq88FbYZqNPMMd9E7hPANQ7hptRpT4dXCg9pKSmV2AEcaHk5JLJVGHEJjzNGbB6Y35h65WZUHZWT3t",
  "key27": "YurskTJGTwoGCTVEtr2TkpJRtYRbfPMTmUEmY9Hdobg7CQkoytD891Vva5KbiMPsYwwbku4ftAG3JJWnUqP1hwD",
  "key28": "Bco37AYe6NzJ3xbUrx9QyR3kgNQF8HLqdRRsLDnRJ6az2F92scSox6rHex7fEAE3JkZKKbyghLNKFupaECEaJnH",
  "key29": "5L4VxvwB3ZjjaoG4HYm84Cy5zw7dmQFmSyncz1VDaNmb58cdJ9AxCqJ2eg3CSg6rrvMEHFTJRCnKVTBU7ELoRtYx",
  "key30": "4ns3uEnpzzM1vTYaeKhMcQxkyE2pMSXfdPgHYvZ32rLqeJRMb17sLVSrpyqqj3x45Fn53ghAV7TW3cBfbE7UC2c5",
  "key31": "5SZ4kZoqtmjvNZmitZbTTymMBudqMw4N22XJX9FNvewe29PUhzWL2W2256dqn1UPUxSb71LhueyyYjxGML5dKQgw",
  "key32": "4PeQ531XhsrqWQsLKiKR3yY9ruKtstnzDyiNKHUfyjv6TmSHMTTyhj8s44Vfz3cAovYhbFvDGWFJBrDzdVKPknBw",
  "key33": "2sQR826Uq7TmknBBMSM2MoV78XDCK4M15fPewTkpNsadoJkjY4C3irF1RN69znbd3iveVQ952WK18NQQ1Gy5538U",
  "key34": "2pR7fz46kCjR9pCBxowVMDoVJTrmybCk4QRCf6CUqwAptKjUFZPkt6nNiCW2is9YMyumZUxUYJKxRrsb4CmenZj5",
  "key35": "32viiv2WenMJ36j4cebDdTckjjA4vESd8eQjET3omAimHy6Q8tGnzdNFauo6SmD28ZCQpiNGHy8rNgWv214DqRM4",
  "key36": "5Zq6mRRMA36RrwffDef9M2mBzqDn3XRSbewEkGeNbKysd9XFZyJ5uysdRCnHWLg9A2FEt4bNM7eJ1LrK74QfWfb5",
  "key37": "2rRU16rwpoPv8nghs2pcoLFpTpcd9ZMy19mWNG9jcFWEzMjX9wwzvrExXwfUhKC3QtkG2o5ZNFwVEgtq8DfNrEyc",
  "key38": "5EpeS4ehdqYJDr4uZySsSEZK76fKebi1ymp7fCG7cNE33P921U3oDqrbUWGNRhLwg4PYktPmxG4xtX2vB6um3Ukm",
  "key39": "2HRoQ9FXvJ2cmCeJb5cTbPYz3APgBv8nVU6aqGAg4UxawHvdGhLtaipVdYnXw14wZKid2wdgfGAKyqhEjURmutbH",
  "key40": "ZPCyAmbLs1t79w6rwaLA72Ac6AYLBpx4hoypqb2TiZRrmua329T3jpSu7ZUDupFrnDMjSrLcc6joXTVVzoR2uKQ"
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
