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
    "2pLZ431DeNmmpJYxzg9RqAbn8QaxHvjYFBKxdECBfvmHGXzpy6CYdKJhoPxBTEeDMfLxaxUxcrfhosVqP3MRdDvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KFhdPZfvzoQArgy4iKZvxYXHaYGunKM2dMhR9TQtxKpQjGcyYwVpiNAZhwemppn2mi9NYnNBvNAs8iUQevYr8ik",
  "key1": "48K4okdvPVKxZWR1L55JSZEBbTQ7ENzETfRapxHEs9bN5ThQfh5s2kLL8KUPnRwPeEFJgpE8zs6sHHLiegGoMjfu",
  "key2": "USR2y37X5bN1mtojp2xSZqJYjrkENQchkjeajiU6sFsQyrGtpGtrER5w9qnUXaP6KTVpaYw8qVo9DSuuz7LLq2g",
  "key3": "25VvHPU4r39r1MHvk4mgKPDWXHt6ejuZd4ZfWpvfrg9XpC7fRusEUuLBGzsL5qM8bVLcC9Xt7qabyQ4wTSjYLJj3",
  "key4": "55z7NGRJHVmbm4nN7iRmRu2Ss58YxDprpT4imk9Pmcz69FMsGEZcVwZUfPRJ3MCdKMYpXWZF45nYta6DyYe5USXp",
  "key5": "52PUAmbSM9a4AN2RqxXAjJDJAYgvhfAXu1q2vSiKVBqP382nXbvkLS5Rr5YamJ7zq7hdEaPBQwYBAqP66shxSCCD",
  "key6": "3CNn4XkfWpDLg2Z9NPsjsFPXdN3Xh2vWLRgRfgQA9cQFczrHjEDLbHtsDLjTTUz4h839Q5GTzw5CPmtCw4GKiPLa",
  "key7": "5yAaKqwHqJ3RzppAiMnDhPohcDaWF7b3BfTeUEzMrRBxt6Nrhpzbb9MwLJQq8iX2phshE1deE9ELqB9SkV9boJfE",
  "key8": "33FKycwYyzbR9rdZar9BMPZYgVk64BQrRezvLmvvZczvsvy4s2Xg3s72LMVJHgNbLRGPxZ8hKw2RytvKuJyzP6k6",
  "key9": "3ggXq9Lw73yAoSKDciZyGe6CML7WCBFUKJMWzPUrL2p9iCgiWTi5SSfC58y2pyXg7VYrWwet5KBxMSdPoMeyGtWo",
  "key10": "5pyjiW8zjKdLxtCcFSsjyzjUmYVk5D9gG9BVHNZzuiz2R5rZnCzEzzr51JBF4B3Cdc8tm4h1KjLrcfc1daG7rwd5",
  "key11": "5SLFKomh2MRDqRpG5NLwxur4tScCeAr3jWvwYrJWfXoBYs12tvD8V3uarcLw8UJcfhnjPG8tahoAwjwQL5xUaAJc",
  "key12": "4mK1n3n9nnfcuu9xJGtYGkeJiHmHf7Wp8JynSkUFKWyjLWzgs8TKfeaixQxPeALLMpVVwpw58HJ1444kkV8n8uGL",
  "key13": "2ubjEUmUgceP9wuZn4v61Vk2aS3CaEKhYXWixQ9n8pb4r8viYBR6jPJDRLYopEbix8N28kbg5b99E5gigLrZrtPD",
  "key14": "4twxT3pCTyPCUTmwLTBhbNyvYsHRRjFHNCKZGqyz6NNoihMm9UXxYvKwA7YhP4BzPifxpe2K3FxjE6mpAkn3fTnC",
  "key15": "h5rYjN6btv2q286wQFM5fhy6QLG1c7hTD3qfbvzQ1VdEj2cqGico4815PCibTfmbBk3XARfCu1o5F4vwdrMujbS",
  "key16": "USuQapffxanM1LRPEZca9QouUtvtjmAm7onfSSEqaoQyqr8Kmqt2q4eSi8AjikGDfMTUVnL7Toonj99bRzFSFWM",
  "key17": "AZfcDnxx9yhUPCafoQqJPyD7mYvRSEJNdV4moAZfxxtNZCTXAWEmLSp4P1ZYG6r1hEPRL7oWbtBBpGjvUrffptV",
  "key18": "5au7t12PYggWhwan3neXQhdRbuf8Y3KDxFhnMA798MyCfos5AGGfgS55dCZgYuTnV7Gwvc7F8AP97gnKJACdHJGe",
  "key19": "2xJSWwSjcNaFLu4ZDZobrw1Y6vLGbn8yqxBWLnrxLYW8K8qGTTQMoL49EiP1rRPFdmRd1xMJXZj5z9QdGNe8HKqW",
  "key20": "42eBvMbeiUWMdmfcKWAAronEXj7WQuZc2Z4NGCrviY9ChL2uLDRWJF5GBZqz5w3YJYXVXAb2bTMsJfghZpbwrBDK",
  "key21": "5NweWJiDHcoeyYpa2iPVLNDSFHjuu9p3vPM3KyZfu7ZL4yB9W6EXgK1iymrehbKk9Nt59GnJHaujRGBYMAHGFVQ",
  "key22": "3pGoLmNeBhAqSC4ETp2bZ6AK52BwrHgdpYSiiX6cfeXNAhwHCUHDAWfVR4PA7jo27Uurc26KnZieUAuKSXkEkqQZ",
  "key23": "211K2k8UbUEyZfLmvbPxYerf6RdQnCHVzj99SmZTzB1XkeCFziFJqRkn4y3nDz1yKoHAfAXaYseWCzfq93RNoS1P",
  "key24": "53zVcaxEzdik47Mpy3mETSX4rWomqK8CH6rsuKGaDNbaScqekczYhdeHw9vqJbMK7C3kmvpQASRJ59kFvHshREb5",
  "key25": "3dGEd4omDznfz5fFGoZUN8YEMritbq1ne92yEk3bBEYT6FcT7q8iU8NDs13Nn9Qic35MtTBSsLupGFh2o8VVzSSM",
  "key26": "57g4Ftf9vx11d3yr2byHirnq6yNgY2nMK7sy1MPmbqqh9h2wa6UPGpkK31HHfN3r6HDPSbD8qasA9yoiAP3fpkLn",
  "key27": "3YCtnzCyTG25XcrGRs8q2DyMNLCi47iwkrXrvJAXQRcJadAUgtCvBmzJDVYdRwZBnEEcPxrf4tvTHWqZ64kDVqiQ",
  "key28": "4fq4t6ttYYWdLZGKCwioPGQFMdo1TRXGSkiMuJA1UMFc37inMhqipBqriDhoVgjLKS4eNYFrcALFuGB7bYeiGmpt",
  "key29": "4VLLUL8rS647ebsG2eoF4LFAKUTpibbw8ahidfe4bvs14oFi1D6XNMQMqz8a4P5AzV8s2kJ4fnZzWqmbBy3AwoRV",
  "key30": "rLUhW6NiBVf3zAwTSVvxmDR22beugyMbRPwDSC1DWxdNWxwEQVFBJw7NiyrYATD4TsLn4RDWthUmwisjYnC4vr3",
  "key31": "2e8Fn5HUygDj4m7gJtoQvwwHZUcEfDpF7rFAAA3SQT4wVTCwAdqhAiwYj5ePkQ1v5gGyohGS4HySuxWkyu9Dgz6f",
  "key32": "nDNST6nmrqaBna9kzxYjv3JsA5CzRXaarKLMzpQAUmakzWgtPxgkvD8o8kaFA8Me4a42jcadPce4NsML9frVL4E",
  "key33": "2npgVR7vprLNrPg8oxQqppvDiv1FArzN9AJhczpSJczfGX9PxnZDAF8AZADGrhTYENGaUNUEna6GgY7qfLZDDVST",
  "key34": "4ByrhrNwbqxiVmRcn5UebVC1nWScjhka1d3cqUN1YYhNhDhbSVkNptB73hiWLszmU1ZzKe7CVhpe7j5RBHyF8GzS",
  "key35": "4W3QWRZU66xZUeWkWA61SbWVY9eTCpZzgGWNfMNj9ybDvwLhb8ePaTYdpcLWvADjw65Y9sF8BB3MXM642SyWPsqZ",
  "key36": "21RSyawZoL3EQdypPUJDWTghT1no2eToysZCr1YqDfbjLqXgiq6uuafVRfZRGxBejrftQWyS47QWNUkrnFSsqXuk",
  "key37": "5A6htwdCz2yVbop8L8yjNMd8ZtZYxNovSJH49zy3fMkZXBKRtb4N41gNBrdYJxkU8QeZ6529QgS5D5NNrdEWGHbP",
  "key38": "2ktWTVhxtmmjd2RDdHDRwdQxZXxHknfD1o9vimDob7WBmQU1xSb3cZnEmyQSLFJ71FtB5Mh6sLF4ZAmSiBTkXRsB",
  "key39": "5SoJTWUn3RbdurKF23opTyvXgwAD6yVFSoBonfz1smx75291vDKdTUNGuFQy7DjwNpFJkWwbd7pzBpNxDtguXYKn",
  "key40": "2QdgyPRbTJAUtnU8pDTm7z5F3Kppw9xuv1niBRhFRibEJM3JNWptY4trCQ7xQDy8k9qPCxy64dVhrMAKGKhe2rNU",
  "key41": "3pHUzqYHQREBVNXzM7WRYzA32ZVw7SG2JPZmWT5YU2MRxs4YHGtsVrvq3zbkiLtWEGmqrWsd4z3Q71mSddb7Hjem",
  "key42": "5cncc9tRqZo85YFDEu9Ev9s69dd3T4gLkJxo1gm486Px1Kqkj2v5dt9uBpaEWHfXmfYehTRhCSzwguhhHfGtZCVT",
  "key43": "1TLKBXzj2j7Z7kMhzdR9jcMxiLrpqGmMP8dfjdFaQpzjqzQKrSQZoWCyGHr4gR8gHkH38j8HoNCcWPaohWSGRy6",
  "key44": "UFnaL1L6moN9D76d2TKrpw4qZARkn6arNa5CTyUphSnyjXUKUpT1XBdVtWiDWdFJzvEw25kqqVDUvdzwV592A1u",
  "key45": "5j24skgRBT3LkKJT9hSE1n6FYXjkPDFaGjoskEJNEaDxUpuVt4pvWERPeXsWUSbKGRVCf5wENAPXMhd6D4dewHyX",
  "key46": "4zBgSGnqTxEYwuALvjKAjNoBKiyk2NA4Nk6mPrVGWfKmmyZBV88VWZFyWnYrgYmV5VtwqCMocTKgj8Diyfo1AXh7",
  "key47": "594aHbMzEDREEdrSLkHNEGV6h4oGqc59zMxC7H24Mv1MS8rTvk5UB3oEJTvuf4vpbBXT2aesLoMACZT2y1dANw8c",
  "key48": "2pakfP1TG1A4xSV2if5pCNoqUYYNEB72MgnLK58ZF3sLZjSMPwArLvCAucqbkkejRQ8X6ts2GrMMKPtXKVUHGAsE"
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
