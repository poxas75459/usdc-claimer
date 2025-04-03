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
    "5odzRLXkHGH89D3AzyWuXGeC4tUCEiZdbQmEBLZucgRW9eb7o85XccWduBctX74LxYCrpaA7NmLkesapJH3yuGok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PBxjRqY4SX72Yc5sY77HVVUijAJ9PWQTZLnYv1tzHeYq1CnrYLJwFrXStis8oDFS2HjRg3HVB8npp332yW3ffb3",
  "key1": "3ZLagBJgbbkQeyxconYr34YiqvfrwQS8s2mh5uK9QUaXoYuiR9TFozznAfAyJr9A3AsV3Gbr8A9kExoBjaZG5UL1",
  "key2": "W8YCxb1YBpV1BkNi76F8GzbviN846ARzLbNjyRPwUgWb54pqN9fmWdyGwnDDxaKnQqQmRtRLzwTkJ12FQPVybkD",
  "key3": "63Js1Ja1ReRBaRC34mkjSSs5RRrJNPpM6nPVY8Kd18GRZ47vU4BdbMoHsCRwHL1RzzpAjkuWgpbpU6pCMQM6itpb",
  "key4": "2zfJLRQcRdUbKbS3oKo3eTTpoJvoocEmAWQ7SdNJ4VYYRypQVji5HjYNnUtFy6tujSohQyb2EichiTMVi9K2z5uK",
  "key5": "48CwaMwBkTSctqkK9bq1MRvYkAbRJguDWbYUwckyR639RmPQ5iJPtHpx2jHDd2qQNvKKXVQUPMx9TvBPGzmCjJ2G",
  "key6": "HSVj3QC2AGSeZNAF5aCZ3a4wKwDP6rqAoFHbvNCvipZ9UbHJ6MyLHSCiK9kRQJHfGPQrzeKaKH9FjM3Z7wsivVt",
  "key7": "3dQgjwqZfDXeadfoUCHHqVZmBs1uiXrxC7BsZ5PgoCe14qQDagXp89VBw3oSotvdKvGGm3KZ5HV9XXBGyP987ur2",
  "key8": "n5D7EHywECckneHLPAjbe99Sn4Qg5rcCZtchxA82jPC3kQCZ43UJz9aMjrEeM2sRN6Eiv3Mf2Ff8NgdTSs2rNcb",
  "key9": "8CpmpgypAM7xonHA11K6hLmNcqgiiZn6sGtvP1mJjMb9n7cBLpu63YicCmWcJpiH5YJkvLor4jfrDWXNgCRFkbr",
  "key10": "REhmELZThdDyhSVSY5xtfiicQhoHZkAixQETDAv3nEZr41XqpEtt1S78PWZWiHDuVPNz4eewrHCEGKfeRdYwApa",
  "key11": "3ZjSZELVh8ZHHxhKpX1iG1oeEEcKR6nK3GaAwfEXfzt8mRWp5PhrhRRXXkrCBN6fdyFhxMkjG1K8jJM2nceynfz8",
  "key12": "4DmeeutCDr8WUA8vnxxCwtSspFSZ4mqy1kU8nUY6nqZvGTqCBEfiaAkZhTFMyp5viJv4TmHpDtYdWXCSHmjSbuY7",
  "key13": "3k9mP9dXEPNpnJfh7SSFJ7tRYZCQJDXSnsqCzKUdhmYjRbkc5vFvBA59c2W2qyVDWqJt1MSeSQnpajxQW4EAGjC3",
  "key14": "35dpVWzhAzW154kcZCAwUprQ9dDaQvEm8Xnd6uetcumcBxoBSReD5Tnbf7UAN5u8g2PG32u8WqZBovWb9gWBpBd2",
  "key15": "5EvxRd8ungru14ZAo7cSzYeeUqFt5RDRXXSyZmPoNtKau7AmMTwkyRLbDZR8Dvt2oEh7F8etrNxVAqkEPiE7W9Xa",
  "key16": "JmDaavW8nzhmEey7gpDpdV3kxHXqXAFy5YEBfveEKA3unyumAPbhGPpwPnSsy1EXmW9bja9MqSfFxPbpcSf8bcM",
  "key17": "2iP6HZ6r8UisWiv3gpBMzKbkh2BhtXXc6PQhJhyTJ2CbwCANTZsfse2FzJ3n6M5CQCs6dAL5ky6yo2Z8NAgtvEjo",
  "key18": "4sBsZu8Y13iABfYQ1xQ45N2wuwBvkQKuxV479DLJJygjauhzxWjQKfdxGHVd1TUfmHiS8SV81YkgQPs5Aw5xYWdm",
  "key19": "KeUBW4PoNPHcoqoD5jnckKrhR3yj7gfq5PPcP6pGDrSXpCwaFMTg4csWCzM3stJY2SBaJGBmf1siVLmmD9aWJhU",
  "key20": "4Xc59pMzdCFFC1mZNkwr8QJHNLreWRqgThDYFh7HwR3BoBzijusvA1mbYxkjvSVkSi5Y5cWvypNwMeL4DCoG2tFL",
  "key21": "3152SFhrsS7NhCZp2jJhHyGhpeRZDz5NinosZ9hXwcn8t8VZafiKyQZdqzWi2EpwKUmw8obLWTHDUCMX7YAne8AX",
  "key22": "44gy45vtHgJFCi2y5LJGmuM273hYMfRnM5bzZxxoDs6McqS1Sr73BgBntUyxGADkQXY9QHKcjo4CTL4mcYNjTkDs",
  "key23": "4btKjciKBh7oZJx7Hzkme7i2Uc7sJei8sEDBo9N2fPR7KLQNh5ZFKNkGykwceFxyEtY6U588SXJGo9LHDqu4k7sj",
  "key24": "3n7JwHgukCKhD7iCVfMvjB8oYPxZNBn75ydgLRLmj7tU347wyJoQHqccuRMpCvaiLfcSKSEFVkoaXaQgdu1Z4KEo",
  "key25": "rGnPAS1ynbCT45xgbxaMvpGAdAftnv3m1hcF4cwFcxBTDoBkX1veeNm3tpWZFpwiWnrpkJpJ3cFofdFwjLhKfwb",
  "key26": "37eNdQ6PX2Yv3E8hga8VBPSJPihzPfaqYXkQ6Rt2LoLWie4AppkvRCf1EwtLzCe7UehmmawPcC3KgNLd1C7DNgqC",
  "key27": "2x2hPiGTFd5mpDPm1YqkbEYifimegszbBEVr64wK4CrgBeVNXBk3Vaf79Eyp9f7cE9fsAysxMrB84BS9hDu5R2JG",
  "key28": "429mrMU3M6wd3yiQYL5r8AymPcRaiDCrmjPcXnXU6x7psJERUMy4aeAMhddLm3EmLCDLnC5dyQJ1pUPRdnVgdMY5",
  "key29": "2QJnChKKFU6Mz3U5pdQbU7QuQQt3Ycqc3aepT6TLM6cCqsFT7FZoksnmzr8pspJm5CadbKpF4p13fBFM43SDfDmB",
  "key30": "5v9zDecsLFGob2QJrBcw4kBLjysFgnGWtoEjZbo6SUbabv9oRL8cAco6enYe6NFtcoe8dqkJvrhuWPU3PaqEtEwP",
  "key31": "2cPcouxiStxjnUGstLM2ubgYGptNooKmPRniV7tp8Ppc3DNWkj7k19x48vsvahC4gzuhTVcyEWna9626cQg9wTfb",
  "key32": "5iTRW8i9sxxaBsbU7wSmytNgW6P6hZMJGZhKGuFhT6ZUvRhXMcBX6rEVCw84MzM87KLRspLbjUdqg74TdLYiSU4D",
  "key33": "47E7xLo682aTmdh2gQTHhrSGZcHBZac5K2j6tRxVEUcy8wfVskRdj24D1MfaZeRDHWJ9ZucMppA51hTA82fYnuHJ",
  "key34": "5ooQo2yWZWzpKGH9g7yZMMcExvkpJB9gisbUX4prcLp2gzVs1S8sLEpRVWDz1wYELZGYxKMkJU92WPqXpFMQYFqL",
  "key35": "3oP3omy8FTD6tgtcg4PKiugT3UMfzEC1uTdnpG7zY9VFr15n4JBCh4mmztabPKSwi5BKb6WLG5kydf16cxU4PTLW",
  "key36": "eCKjce4V8FohyamCCaA7zYcg1oj3vQwUmg5KffA2h4WSpqvHqJrQmVcxituoTa3NaDBSV7ccWvotVfNxjtzALQH",
  "key37": "5E522h9GHetW9XyAKr2E12wjWMdryycBbXzJMVK6ULWC8uY98SqbqJygefjLqsdMQfh1TeATRzDEqmwWXffzdzXt",
  "key38": "52R9GaVT29ze5yHDURP5h3bwDzyjwvxpeNmZGwKnn1kTobceonWvJpwrBrWvq8wEob5EkTNKqgACcXFmboNonk4x",
  "key39": "2K1EubbUpeL8DUVY8Z8LYM3AZ5heuQWARGZN9gNymBqFewDNo8rwvYFC6qTVmW54k8xoMJmtThyjfdDPsSuuC4u6",
  "key40": "2m1bHfHhSNqW6DZrtaMP9KQJXa71LC4kdw2jz2bVQrv2FGYScy3eUgnfPNxJTyiDPxn5bLkfocrXAiiRd7WxTwp9",
  "key41": "kdzcctbHkWTDPf4qtyVhYAfD4ixRSGAeURBafse7VWdzj9K4VrCAQEuQEBMGkvpG3ahrJudepALWhnfnWr3VgXP",
  "key42": "dYkRcgT1eZbzu952LX4ozk41wqWsL1qvpWXPJL5eRy9CLLmUAsZWewXdABsvmEPptiBFu1ic9k39cj4TV3fJ2Bj",
  "key43": "3K8Kz1eaLP2VK6JecAhszTCuWBwMTna4nKVFYaF3dMWKfa3wprV1WASANKgBfna4fYdi5j9J2kSdNiov1UiVnU6Q",
  "key44": "4VPMNQZ49BPTwm6L2KJr1NdXtYdXnAMrbSE3NqLZUW7AnNj8hHSh6tqb2kpLZ3Mep9k6ytyHNSfZLanpV1RNzFKK",
  "key45": "2xfBVF8m1zervPch625KzRBgQ6znC3yRnkeP2jHDDt3cVLsHQ1br2Szt4UoC5jDTGLp39MYpbDbyir1ezQEiPDQk"
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
