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
    "64mb3vfj9VcNhRUGHCWNVJ86g6BFGoN1gRhHz6oKSjkZAGf6X2WUmb9K6kqY8nomUASYWioSAiVBUsLQwNjDbmaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28okct5YmPigKE3UEnYPWRCABx6EnBsSrgLah8Q9nnFcYPSxyfhVzNczqiVh4yF85B1tcGjmXLx61EVu7823NsMy",
  "key1": "3ayN3Lsum2j3tFEkPr25fDThz1ujTetvgwDXZauVPr3xqV5tZvY3bb5GMcU3KrBDNyDx9BLxUVJo1d6yz9jzmK2i",
  "key2": "2WCsBYvxtLkZADhuFCcj6UfNGaWgAHhLjiQKPDvpPKMH1LMFRnXPvR9xjgL9ovYVCy2BkKYYfoqYzScaMnHzo5NP",
  "key3": "4rSox84HQkiPCsjp28uB9TKpRxSJhjKpsaYsSksz7sZGkh3A7jfzDDBdpWg9DEW4xgpsf75FLZR144VVwEvTYTms",
  "key4": "3CHCVfwxzJ7d8AHv8BQ6dHjFSFbWsa99XRYa2LzEoKVqd1VtgjxNza46opTEUJvKTQiyjzzp39rmekdcX5zmDcDo",
  "key5": "4rZ746AgD7jKow76r2Nq2N8ByEhhFfhhrfaCyqRxLh7gDSggHD5ENzuWqXtRik3NVLjPJJXXBjsvoWXNo98muXnE",
  "key6": "CSqk4cPrKxVnpSRdCrfWzV8nhFR4N6VLobutKsCbNe4XaqcAWap1tfoZo8pjEUpUM8XqNpvMjxjfTUcSQdaXw2X",
  "key7": "34mWgvRYSZpd6rgiEQt7m1NwMGGpsY71zu9j2gdDwkVVTWbkacxVYeBaY97JAK1JGdmqQZh7HEAReBuUQyRt723e",
  "key8": "5gsTcPg9dgeL3kb2mH6YXCaScD3WZWqxNK2jiVoArQvo1FfdsrNQ8Xv153ssAJLtGGYxSdhwYM3SAwZmnT1NHerp",
  "key9": "45q45usLRLiKE3D5j716sif9GQSLtGpuQXR41QYUJvC1ztNpK2HyamL2nfKd2FjbbVbcLmbzfGDaJpKykR1YEps7",
  "key10": "57X611WZBqX78T9d1K6veJgoVUWLcw7yaaHTvYj4Ez8pKnpr6MAW9SLz8mtHH57i2xukTY5rq2v5uCLoJYnBmabV",
  "key11": "5D61PwBKC9fa6bjt7AMn4wVWb55eTika2bVcUNKCuN4pCBxfuVtxRst3mhEspD4sFZJLXGKxfyLZh5pqZcMTZdrP",
  "key12": "2Scpxir9CFrWQTRy4v1j6irGtW1yk9A7Y3zZ2ryjEuuXwzzdoas6DeEDWyVkNFHoAHaaNW6PTUM9js5j9DkXUAWU",
  "key13": "xmaKRpUvsUPuMKj59Smgb53RHqnmskw6qUAfA87b8RxoafiBa82WA37mbNkPkTkZbejYfriSk1aFj2kRevsQpXo",
  "key14": "3xeoXezMgjUfY2qfMwG4KTNYB9ymHAcZiA2JuwtTnhiTeZ2eppXghjHZSDGwsXs2hhiYC46ck9sMJeS8ecj6WjQg",
  "key15": "39afqV8gRtdzkM4kzLSu7bcZg6MoDqUdMhpC7PJg7njaoGK8bVjwVHsUrVjPzs4kfbkZFEMSdcuPUCFQfQ9KVKBq",
  "key16": "2i3VWHQFHEdkCcNQLxakXELP8EpzZ9svogvKF5kj1G5LMa7tfCv1dCczQQC95yMqpQbsFqpAv1LnMvWGXG9CXtpU",
  "key17": "2oXS4yFi8jvfeAgpC1u8sT99iHnJWcXnrur32LryAeCTj2auvXEremvQLzPcBbqikrzAreVMX5CJZXi3papNw3sx",
  "key18": "2iZBJXs7d8LCJcs78DfTaEYLtezSrp2hf79rwqNa8Av4Kmmbrh3NU5amzyf9w4cpGK6hG4JdVD9PqMy1Nq3RNrHt",
  "key19": "3nDn8FvGaAq6cVmY5HyznzE9rkqXgXW4YdsUSsmT9Npya1QtA8DXTYPQChhM3yH8kpVTCrV1BKdqvzdJmjDxNsKx",
  "key20": "5eRXmHMxxA5zjGcYPdvSrDKzTkLxGYY1nmUFK86uQ9bDHU9vBvYrf3H5fUNB1TWe2hACwoVTjArPRFMKABNJzjxa",
  "key21": "3CS8Cb3KgpCsEB4mQ97wZfD9jNddSucBj3zT5agVzJzvbkzZck4NgR1G9Ct9q8jj1RpqzRPRKXMJWsYEHcaCEF13",
  "key22": "5wuCAPzGpGq9TpMvgUHcbNFqZUL9FAaL7c93piUfHWBtPn4R96bXm5R7vbkcXaUagqpGBhUZkPF98wkjDS5oBypz",
  "key23": "4Ndi7njhDJvNQcAn4kRBqda3XETSfTrpEYAm2TkJhYeFn1hfzmaADQhxEQ3X5MQgGMUDPtKUvy3bc19QpyvNGxuZ",
  "key24": "5fcoPCEBZ7emTQq6s1q3RMbLCcYc9VYcGqfXusna9j3DmXdV2YndLKWNPVsV7Fi7yXU1Mj1FGQvF4PBDdsTeeiMQ",
  "key25": "tnMuNi4jAoXrzw8PC2Je4qtxytFTbqFVSn21xmX4zK7TSyfjKzpUyfQkc652MbVpSySAkwGYWok2KargYooNQrG",
  "key26": "3YUJg878zJVjY5aCDdtTeYgRw9c2WbUyFZ5gDUZpgLZkJsLucuX6Gs95GA46wRk5ArPy7E7qyiZKM4uJS6XtywVD",
  "key27": "2iCtjZuzMMnpHXEfKm3T67p2uCdCrHpPQ3xTfeqbvPv5xH7BxjSU8xNA7sCi4HHyeu9uJZSyujnjTyVkvBZaVXdE",
  "key28": "3CEEb9dR2QWknBXchSZZhxExG42QtzkdwLrWZKfm4UyH6eEW8cVcsWHoh32uYyuPaNz8JkJ1KopDVGW1z4NYvJaE",
  "key29": "n9Eda8R3ZLzHUDsmGGJr2EC7Vmk5K7iYvJqDMqHSP8bJCQyGvUUL8gYn5r2CP1neCUUCk6zdQt9ZVQ9PhToT4Wb",
  "key30": "335CBz3bwvDb1x1zpzvhxgc8WAsLaR166mbUx1bmZsRizd4YsBWBeCCiFJVLSx5bBK4m54S8BtaSe2a6mLGq9YvN",
  "key31": "23dfsA99mYPkbgez6j48t9a1sqvi1HQ4sv9NNAmskgHvuanV8wXDMGMjx2Q42wSY5wpA6zkHM9BJJKgZoUqveyrN",
  "key32": "4JcxNcE8497A86rPwBokFF9ySKk1Tw9He7qdn1S5f4JEcjzkHAbF2b6zaGRVRTGCPTyo2kzxQWRbKJZue1BxwN4r",
  "key33": "rNkReX5BhvHdD5yTCEZwT4dcEDe8wcNN799EU85wjwiZ78m1TsnSK5oFaACV1VFmRUDZu6QP1hX97WDUh7vjbUd",
  "key34": "2wdTia2qsrSNfdoRW5cmy9zLP3TkEPTuSA82FKkaS3GXpaCzaybEFFtBkPe3kT7Fq1RGcX7q4U7vp4BFnY6ujNWE",
  "key35": "3mKmYigYttBzcoPGSdVrxH56fuxKpj1xKKarTmnQJGcA9prQHExAMwvrmnbEWdaCcFPgG2o8y7woVr1pVEZBNDdM",
  "key36": "3Z9zQR9zukYw4otVnxSuPf5Z7edoRaBoCnYrivC3R7qwPpUGwaMuVP6wcsgvz152b4BwgV1ufo1TiujrNBqFKMLZ",
  "key37": "4Qg8ZkTASc88ecmaY8uryDmkp8n7ad6hXfUcQobc965CARtMtJ4mHet1mcne8fiWSx7NuhFuEdms3asjqunmyTtM",
  "key38": "28X6LApFWi89T6uJ24RvZcdNnfeWdN1wyYEGrZXk66PmmNNFp79AZozSe9Jj4qdng8FQbfcgF2R6ytbUhr4UmYSj",
  "key39": "vTRpKsGSgDQ7oSC3SPmDb2e55DuKNBKZcX88QtEDq2KdLRFq85T11R4cDzesDBB3tTqStafbz1DrpAS2KYR5qnA",
  "key40": "Z87ehiC1pWNFnP5ZZBYUqnF6uZrqgpyMT465Hna4W1dCkLFf9BjYX3aw3vDw65mGdhtpepC4gpe1SHHFCkKDJ1j",
  "key41": "3im8z5ko5ap2bXh3L5Tnbou1DrUubeGhzjibX1TgVaHxZTUc3hgYbg59Enopoo99fhkHroeQ8muF1F3W1jcvEQUC",
  "key42": "3tH1RZgaFccNVQ1DPbiEtNQA4E8WfB4UfDPLDywNeZBocgCaBcG7MSeAEEo5JFCAtj4fT9SoZcg2otfcgjogZbfp",
  "key43": "2D3sTrP71uKpP8epFuRe2JU1UGKMK9JHJGdSVyyXE4EYDThKrKkWBi2ktFvGRPHAnb4jsHekrMB2XNcMXLf594Wk",
  "key44": "9G3Hv29orf5m6Pjm1L5wvdaeceYe5DDx2U7TYdNg9TRmqNVEKHw9fGGtBmHDqjtyQGWCUjp91C4BpcV9PbYsLVq",
  "key45": "3hLabkWofTgjmK1sGKxTQJTgZiKF85STNn6m6bc6iJTSqEAQGSqD8oofS7L4tLJkKAng3LaFt6ZrQrW7jz9TN9Ft",
  "key46": "5TJoh7B6f89xqtAtfSy5ueFBPuAzUfTEfjqrbMhypD556d8J6xgcmtSMUkXukUeRDoNMR9q4DAv8nN9a7ppmSBWv"
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
