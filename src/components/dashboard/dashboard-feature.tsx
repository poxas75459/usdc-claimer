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
    "5Mt2WGMVprrWdnTfhJ3zSMdgHLvX2GApKdpmLB7LkRkMgB54UBEy1eTY6hUzqbbVBYhrz3MEb7NMWhyiCsbXRVDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6rqgRG8Hg6eZYDYTxxmu4xd4NC4VMtqxi384sat97nSuWBBxHPxB63YQeDhDaBzWhvdrUJKEFMtpGyPfDLBHVsf",
  "key1": "64AVzn6sVLnaZVXd165t3dY6mFtoSu4vWUQC95D2DazsBBehueaNx2JxkbDJBGNCJy685NwZFhzVbbTGULbqFTnx",
  "key2": "55JtkLZehr3peFnUALj7NPUBEhb1THABwYo8fgc3AEbg5ZKuTpAaZCUE5esPSdkgzE5n1pp1iPCnBwWjSF4zJ2Ho",
  "key3": "2ezXAB9CS5DAJ44kZLh6o5fdjhgz212K2iQm7T4He3iRkBYqSsGZW6htVDDFqyn8qms2DNaDwU83Qd83QToFsA3o",
  "key4": "pjjhsUJsPWADPVKhmS656RNude66PUt1UgDcuk34sbhqvNM9D85YzrTaXDfVMZEzERktaxSWgFf824XvNrc1GKB",
  "key5": "3uNGP7LPsiA9E8eU676PN7WVdr3FENEH654Dd5Km1VCZYXR5qD12DyKhigBHE1AXnMs6zfbfvZzQqW1fmgxm3q7Z",
  "key6": "qAHxe6jrkURi33mrVWQzTXqtCpkSQiU6EvjQurVCaQEc8Wnyvgatcp5qRNmNix7qVYzTEn5nVTzJ8WBTRawTCKY",
  "key7": "4qBKeGiSgDRcoeqDtStYgMtZu1S8bY2JAfhUt4TrVBmdPULMcrUu1Xc1rMruEkmb1PvRUwwB3uW5a2WVocj6nUG6",
  "key8": "3cTsNKj9fbgwiHw7CsiyMz8h4fMsr6ahh5vhSRyV3iVHispE2hxNCSW7zDnzBU8mzPPsuSpantwDz7ZnTJZZjwaG",
  "key9": "3xhBe5hqREzfMjPCFJdBKGPLetJMw7dJLVsKvyWuH4BxpxtEi1jHRG1ohShf61eXfeTVch2ysZmUHUQypKpWAjVs",
  "key10": "5xgDxwQf7tjgjKYnwXV9QpJBxoURSE3RcxZMa2HnHgPMgQgUNoCdQ8uHjYTqETkWFkww8vw56LM3s8HCEANjziy9",
  "key11": "4Evpf9Z4UvnkdHiv7U1uqBrrGgxsXYAXGvzgwp1ZBj1h9cmHkEsJygWwwaE8a5iFhxVV8Btrj7a6Fy9RhuEBHqju",
  "key12": "AUMohF9BA91kqAWEC2S2hpbp4YufoAGykzTPfdctEHCSNzgNLh7nL6L2yUcKwe2dNT2uBZKPfoGcGvPMnS2Qc7f",
  "key13": "2rtt7rVBbojQ235MTrLtcx1jX3KsRz5vzH38wSpKDp7HmAwC1w3f8HGgCz13i6BeLkkKExNNPQavCgfw4RYYAR6V",
  "key14": "4bjk7Y8rWDRV6hWiXsrPE5pHgVauscDNf5UFUMw6E8XfojYyDncmUq8pe52bD318PMuU4SqFrkK4n2WvRKZudcrs",
  "key15": "rHnvVihaxPaLiBquR7ywWDrSyL26AMNCgrACFfSbEbvxmznaQSDEJrz7LbJzNchMiRftPkdPCJWfnkVaZMoGpRq",
  "key16": "2Ft4N54LDjXf2sL5dVGVRH3YofD6gRDfaaJ8piewUNEd4WJBmXJqdAjwuzJKSQxNVwwq4Ub2XFbKYGky4vGXLNPY",
  "key17": "227DSujJg4EDT23JV9m2bWnU4KpFV3UC6JHPZBXKSge5BGLVzSbVbntG7XQ5uyTEg6DNxjRGC32aAhBPBRgsEFJF",
  "key18": "5N9jzHo8Fng4pjjTcGEYawArbxjVtNsib7HDm3CNcXc6GJ3PnAyiV8a18JBrk1KAr37fhJL5MJuLiYvpQQ861PKe",
  "key19": "4C1vLvT3RXJeqwyQyEnMEfx4HVUSNcgzRvKz91sej3i3V9M6gfwgSF4ptfJGUTWxDfAMtB5uh6hDiTDCPBhZg289",
  "key20": "27XXvJxftRVFJTmDqs7CYFUwmLHGCm9zH9yW5DkKQytfHcsUrUbA1ez8nRTpBc9He5rExcdC4PTzukTota7qJUgA",
  "key21": "XfHY2GrBExhaRRqpoahn7kGYemgGASpxtPupCyKzjdasKJUoW2CjCUs8AyxdjK1B7aXvtqVxMa6Ufu9yf6eyLT4",
  "key22": "2Hn8njzT9aszkVKC1Dxh8TKPW1n64tBu7rPKyiUTcnEuyXkcHqNkkWFV9vzETRHxzKrVwCrxJhcZNcxC7r5c1ZF5",
  "key23": "3wieeLDMymMW8x7mtLUZTyQiKAFEtLk58YtqHf2RC3Sx9AUxyfVDKWKDaZqVQa7PzJvKD7tkB8ohp52YgCovXyXU",
  "key24": "4BpcKzK6SS4TxzWVcQD8Sj9eeo2vRPr7eZfiHPX8gVZwEC1DejgZwwZNd9P3i5GM97qtoFLBiMr8MENHmqZsDbD6",
  "key25": "USFEMdYAytPjKtB2vfT4bn9QShuXyYgB16Cv2Q45hXzyz657CVk7a7uVzXA4vQDFjfNCbvp3vKv1b4GqZVfZadN",
  "key26": "2qzqdxwrf3baFJREGysJ4xygr5uKvfe1oovw2CEDcrFydrvRECXP4fHvbkYPqhE57r5BfNWtJnxMXDpj2LVTfoEU",
  "key27": "oKNaxLrCT5LFRzygfTyM8FzLj3pjyugkQ7ebxsgiprugqjmkGwap6zE7ZWmbw2HkKrcTRv2i5ZcjUh7ZijiabdU",
  "key28": "jXmc8WVDRCmr1s2cw35v5WZdSArTbUPsFo4W8kMiAwJcpp2wjbS5XGxZnmvibWj84wFHtADQq6TRN38TRYiWSpK",
  "key29": "4z6qnHuMsr6voeLbaNq13au2zc1z8N4QTi8iMCufPgYqvfpyNTxFAmnAL9CuWJnqMuUVzw1HnjJ1wcTpCAVE3nhm",
  "key30": "GMJheCrZZPPSqgwh3iGv67cbAt2UZr6s5pSrcmxvyA7gW5WatGZ5Fhhq5r1w4YTnXeAdW3LwzPhMeuDjcegGRHD",
  "key31": "2GTcYseWL25hUyCxod1bptaV1rtCewoGaxFbi49FPAM5MikTZbwxTKifduNHzf5RcoRswygpKNSiqNjyU5KzSwi1",
  "key32": "4gWaC3UH3NhatAE4qzbNKi3NJyxaHriEGspT6X52FWh3hu1yHBRHx4RhhhvDR9E7k7Ys7MTXVgWeNezk53NvLgXB",
  "key33": "2bTqBj1uKJeApSqJ3LAdHrQnGAcGZBbXdr3ARRqEe7TAjV2w6oBL8c5jXWg7tS8RXc6G17EcdLynt2wuum4aoi9X"
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
