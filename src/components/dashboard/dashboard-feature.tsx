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
    "1aMbDMNuwLC6j9n1w9k4zLyFem6oMRFnXd28qiiwm8T14mJLzuz8jt8PrxmFmSQMwM5e54jhoP34Ka4vYKpEipu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uRGEYPXRBtvdBu3U818DSjgDUHyRb7gXFjM1iQmmhmH1sTywRJ2xT7HGs49DgEHeCvgHsyWrg1EgE6YKJpwZ5G5",
  "key1": "5WoFKARNhfnKUkXm5k8KnXodQUAbJMnQPEshosfCtUbLFr3vG8Fw3UGi1QjaUwroF989F7ZL3pEoPDSK193mZiAW",
  "key2": "99nJiSYhrHt8TJ7a8eGipCMCos1WctbgjMZxEEc4Ltdj2a1cx1TGnChkjqYNwoJJnYoZyoxdYG4qLEY3QYBQnRN",
  "key3": "GrWssv6fj3YX6YMoPqoDaeYm3SKduz3ZCNiLha6SA2ZmxVrGCYfKwoLbtwz6yXTXHFX32bCQhzEDjFEjDgEUBcz",
  "key4": "4hrrgVbZJAYzJFdoE4Awp6hFZKSmtD9mQcjY6G58vVW8nq2i3PVka9pvnYemQDzdPX3gBT9BerY33DUYdcxib3KD",
  "key5": "tivrUuAEP4eGP1zEvs3Cyk1wKiS6XU8qx2osMspvSCUpSHf2beDs3Cttv3SxfFhCvifjgqk8BPjYMrCnkQsTyWh",
  "key6": "4Y1daA9remYCZwPX1yJbc5rMdPMj5AxkHm9Mrw43Uafjzuguiga9uoBCCLnEqJ3P3dwt6phMhLzZJx7d9yPN8LFo",
  "key7": "G95wErJb4HvNwpnxLobEbMeDoWcyaFGVt4S5dDyJ7jmGsQWwAMYBLHafaHEFqfdMZBJHRiqh71TDBFo2ETmssJa",
  "key8": "3eefA4n4uqWg23UrFDcbERLyA1Jztd5meEE7UoURWj4pBV2GkmxJjJp2jm9DNg7KLNTN1tAj4LhRQoEjHSiG6BWJ",
  "key9": "4jTRqeuHRi5KKsqdzsRkoeezwAT8caRWyBnf2PXtry4TkHruFQk4sUFBXr2NcA67GZNqBWReYLkiWuqmD8Bnzj4T",
  "key10": "3xpoEU34WEoVwoEYSPHumWn8sycvQ2cnkjbsJ1DbVRAgnCMu5H6UuPyZEx5nMVrXbDfhKfkbYTwdmabGCUfyg1gh",
  "key11": "4wj4Spjo28nkNyHQsJWyZ4b3EV4uVYqqYyLTPzitpsqUtFmhQPd6ciSMvKLBkiqpaEakSnij6Hchx5Rzv6Ss7idi",
  "key12": "66t5sTTD7PgrMmRbHLGqi98ELZDDCc35YEFxdaTMS2KHJWRQbgcHnFRrtxzfjj8SbBjHyXFbUhRchJ7ohnUGuxMM",
  "key13": "2Zu4cToe3Fm4hDC97NRHHXu561C1XVY7tWcv6UhkZGSFtLn7FNSn7bVdLoEk2cNxC2T2gAYuhoVXRbwkC3qtLtaX",
  "key14": "2XQ6eTy3tqvFWVe7K9AzAjAqdaUuny2SYUpegLWjB3yZJCCYCuyhcyC297ATZ2mTM4S5H75FscwtFSSBB4P7c8Sw",
  "key15": "ACbt9aJYNDnuA2oVwdsqsF9N1Ua6wbmA3xwUAMv3veNNvYuuBd8XXYT43h2Z1dKVPgkSuAQoESF96RDTsmyCHrN",
  "key16": "vpFMyaqGsXhhyy6bbNe4G3pmSwakeWiweEeMozmjzFR2tT8o37nJkJzdyMwgFeu5ZPjPVppxPhqs5y5ncrywFz4",
  "key17": "3uxYL4sfGpHszSEE9fEyEYK5xSaL8kh818EAt4kcx1i5S3xWM8RJDqygVRtGtC7frbsKJpLmpuGKyowoauRcFmrH",
  "key18": "4qjz1SpM1zWPwMffdR7JwUW1i2cNs8Zym7Nr1MNWufvogNBUyMyKWqpGxTbytP7VkkL23orJDY3cCL317W6sFUm7",
  "key19": "2VTL8JYN5w9NpfnAiYmZvBfGuznR21AMK6QPx7esCNK6CZK71sUjPmZY114vbAU3SQK8Y4B2fP987EY2nk46GjLC",
  "key20": "5E24biWp2bY26CrD8RqDRG4p4kb18YHvCf74FuQ1cD4pbjZTaTQhLpijrLNEDeR6HKMfTwkKTmw7Udm1SbGwJDEv",
  "key21": "61Wixfytsv3FxK7HpVroueRYUdzWyEe7FhhHKmNDbpgcHuK1MasgNj1WeQ2LJRy93G5m6U5yDhL5pBHYazFiPGCA",
  "key22": "48bXKUVVA4vRDxQs83QqRrr5dZgLZ3bfhR9L9fQUS1ZSCBDMPaWMhmdUnAs2A2kNybKrZLYQUiJk4pfN4pziWFsd",
  "key23": "2ukCK1WiWijMDccRybBGFBrF2KbLcviArbSPpt34mLUoqWGeHntAH4HTQDyJDSBrEuHfu6F8v1iu8xgDrmGReHJ",
  "key24": "2nhCNoQcF477iD1F6UkTdTPDimuwzB2AedBVzN5PpVmrkvAmYpGnqAfTvpDpWgiWEgdJxM6ozswxitxJPpXdaYfE",
  "key25": "5bMP6uLK4rsKnnQNrAiZgHdqbwwCMA5FUGWUkcnCRUuB4deGJBoixYr3pERZ55iD2Dgr8jztdvFv2FcRptfUJWLf",
  "key26": "3QbFeF1LNG6SVJLRbFKf8QgbX5a4TpZdBzyKN8DRbc9p3vtBSx7St3GMmWDUsmoNqyLCgnoafZVmsoTofH3o4b3W",
  "key27": "4gZyYeyCarMdmyVvdTWDABe21NM6nWuUe4ub3w21Vf3TfrYzAU6aGd9QRBmdXCnD5b9y31dhDqNgzD2HwjFQJBbX",
  "key28": "3uU4e6z3JkhC8MtCRcDQXwnu9JLVJGxYLL7FMCghe7SBnMTinawMNLkoAd1B5NPEMULnsq1uNujUvApUTxVSqMfc",
  "key29": "2iV9McRxUvf8Wc1UGcvH1DbHJNPmHvQjPgvwZ7tXeKA17HQinNHQvs7CEhLy8zqE66X7amX6nyhVqfaT8Wny4np8",
  "key30": "4ghT6cuhoyQikQUqnWDrYQMRLx6KjjpuM459Ry1j6ZRAPJySGB2t4PAyNQ3Eje7bvSt2XnDUXEVy8HiDAVvmwz27",
  "key31": "4CuKHPKnGcXqU6NNTJjoGjh3tCGjZYP19aB2faR19Ht1xmTtswZibmnihYn1ExqdGi62Vvb3QQG2WRy2asCx8rUk",
  "key32": "2Dv3bFukprqoT5F2SwaJWctbv3ihRXW4M6AGzLd7rfzRXs73GaAfBFswhDQHxtrK1aeipwZCANTLG2YrXcRQbDWV",
  "key33": "2piWhUxutkXqFQqa11gUebsXBB4fR41E6oNuTvmKNzk9dLay4HE3DdNqauUqMQQJeak3S5jXHBgMBAtx7MHK9NP",
  "key34": "65DMycRW53htk3oBgNSmgo6JpV3dsotJqMvdbHScLchEbqmcV2EMoKDLN5d2YfFmdcKqzGtBJzHPcJD6ki64uaSN",
  "key35": "2N8pjYCpsVqphJ3h8b16qmbzzSAUxi743AjGnFvwmufJKMLNRKJSWw1q4AffG2nmzisyGQPBE7pAVQFdxJBymp8d",
  "key36": "5nnNgXsn2HPyakkTGCxsLW51UmjRC8dbuKnXX49wwVJYFWKxmBNNEnmja1mvT7uPKvkQZyECMrACaFwHGBuGUPbW",
  "key37": "62s2mMRfL6S6e5gtBGSyArX5U3UakgwHpqX8igVWUG8mLCtMuaoDUdu3DBqa8T5xwh5GAjSepiHPdiCNmaLaXJdn",
  "key38": "3ycQH4DMLUSNVpT2Nb69iQSmotTgQj8JQ24euHb8GXxntq4gcsRqZDtXDeqT5U3k7SHKd1wBfe7CxU5SKWWGLs67",
  "key39": "2QXSVutSYUrAkfRM7iLn8P9i1Wc6gSbK52kykE98VTNhorQfZ5cFSxGvyzeR2umcPpmbLXqdyA8Zs5Mst9sKcLx7",
  "key40": "2xv1Sf6oGQv9knogYxRHcufe4tgacCSR8xtQaXLLBF3rZ3rpPRBGVvmSgryg6sSwB5SdWYUi6nZEYugR6fpSJoQK",
  "key41": "qebq6Z8VHkWinUuQLsWr3mpBxtVQwh6JzziCuTQqgD3MCNWRFgTJjDTbgTGnDqTQBxvokuBsnFUwSyt5hXJPYj3",
  "key42": "4VkDGMUAbqTEjF78rFzemrmdhUNvbtXKvsAfzeTNkX827MFWYRtJH9XcmQN5wnGHbmMUxCgDx4puyuNYbXN2aUTe",
  "key43": "37RPj1JBCcsiKsHvaTXZW1LVUuFP9qt32NaFjuMvbQYYi7LDKdFUxzYQPsHV9NWrZU1c2FYCdUys5kMXu62Nk8jy",
  "key44": "5hcY9DSEC9HspJvdGtwcB9yvn7q8bhQadeGZzfHsAv4iQvzwJAhpUwxvgdEZK2NuehPMyka7JtyJmxeZTRetm18P",
  "key45": "559edU62DfQbQJ1qoDecWKSowX3yCuspVK9GhBMVYt3SLMnKLGeTMzicViiitJRP5djAVoBrKKEcqCBnbrP4vdXR",
  "key46": "28uadajqymzKkrsWUcZd36oAAp48kDHg87mjEyZuNriTZ49A9TewMXWZs1yhedxkTfRTxs9umkQhNNK9xb3eiMey",
  "key47": "2H6JSeRDtdSD3ueuGbY3yPDcUEwLLmjYbwnzmXFE7EaRv7wNs8L4VTLA1DFazuk3CT8WN3jXM6ArPPBrvvQeyxXG"
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
