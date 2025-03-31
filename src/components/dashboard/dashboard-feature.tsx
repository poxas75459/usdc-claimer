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
    "4zh7Gzffukf2T7bz7kr4RzUgrFnimSq2RbKG4xFdJjxqxZHnwAW6k4h6pr4gDJnskTSmNmkN57QrjEAZGqRiuEy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dtrBguJqJyF4YFZrHvg78J2dxFRii2egCphM4cNVgffCcwNE6caPi5D5cBeVZJhT53GqVATvqSBDT7AZzY7yS21",
  "key1": "2yGDhwWPdhxaKYHDpfZkSM1KkZk3rNutanAunZJNKQNbnjGwuScCgwPWwHqwoahC2AH2Ussyt3f3y3UpUBdeUotX",
  "key2": "PH1odiC9DhmKYEvfJvaEudUHz3QXtJDmV6tDfJgtLUdbN57nZjNvGNvQkR1D2BV3A3erY5w2G1FpRsiwFiDES8d",
  "key3": "2bEodu2h9Z9GexLFSnUDxgNd2mMf23LjUpvyDefRcLUem6EdDq9A7Jdd1b4PSwnb8WdNVpruNWBBj54avsEvcBHH",
  "key4": "2EWAgSYwF3e2F9Z3c9NjSw53sdPpZoFB6sADdRLZm2qiFMvzC2GaHF21hJhUDBLSTSs6dx8hArPCRXQmPekfPvuj",
  "key5": "28QrpSCTPkfmRDFqhDLu3aY8QeqzdSVkpptd3h43dnsnxv2eYo9P743tYpaSCSLmW2LPdubAPVSKc97SpKUdZRPd",
  "key6": "xKsjmVgzr91Kamg5N6hQqG9kEZFoWDGmDKuytVXGc5uNACYqNSfgjf1KuUbEjDb2D4N9XbmTA3ynZ5LKR6dAP8f",
  "key7": "Qqz67CKQuiLjUaMFQCCp7ysBDav61kY1nVDJ8BT3Lh9FXcRCjgxK9sGSuBgWyn3xrfoF7JMFBWbpbk7QZfnqPKr",
  "key8": "5twvqWMsuEdgWw8xBGjkne5kvp6m1F9Ng95czKboRRSK2M3HG1Z14saNMGUTAKiAFs1CG2QQu3A5ByEqpAd7Xq3Y",
  "key9": "HQYjZrknnrfmeiVKvcDXmk1NTCZpyhftibFPifDwqv8UqvXGGVXiiSmXm5TecsNxQ76p8Kzob28VRzWXZoZ5LYp",
  "key10": "52tWPHEF1y7eWMGhsrF6XP9yfj5uUCwpYTaPXQnbrhyNRwVP7XVs7XYiVGDo3iZjSgsK7LVtTKcifoMGGuqbKKPC",
  "key11": "5rDyUhWz251Mru6yFJrfqLCw3tKGe37QozdtBfRraWxi3P5MPzhZPFVCib544cx6oWpDZLG5WbU7oNwUKAquVY3",
  "key12": "2FpjoSTK4LNYv9T9rBG9NavSfG5YX26K94iL4JQMFGZXmFdvmAcN8aqzhP3DtUjBuY5T4nTZh6L6ht5PnFoWicK5",
  "key13": "34J7e5o8V6X9Ypd4gkC4x6BsZwbgBMECZvTsMiGW4gqvCfvA9AsnpY2BPTg1WeBwz43TmZhaGBo89MrXWz6FHiZZ",
  "key14": "CkqUxsGpLgvSYxWHTAZ2WtQnvkp9Co227S9gVLizgvEhH85BLDxs2frhQSXwcyB9qUXHFDoByAgu2o6o4mMsnxv",
  "key15": "3m33QQr7gavEJn1pNHknP4h4PCg1ALRhCpR62dwFU8LeLLWAQUq9WHb4ADUsDYdDiFfUxGj2tuAWZCd1MTN3Tbz5",
  "key16": "2NK2W2QLeTQk3uA6evDQdhEREN8y78YKzVuXFkyAYcwD8DWbbEYUrDD6ZWtiRRG47TAgu87ivJXGxy3qGcsKAie9",
  "key17": "5kDqKsAxfbm9A7gAyvx2BAxdpPjYHzKYGxbitosUx52g7JL1TsbYTDkTZxwJzD2DMedZC8VMmLa3d3oVSu7RkYPv",
  "key18": "57As5qAk7cDJ2sp3bSos5UJuW2iYdZuVaewiHueQVzKFxevCvD4bU2tfCe1tFzqjGh13fSM6vofWm2iGyzFkZ5VB",
  "key19": "19s4VeQaX5BjX6rHEiNpRZTpvt5JVjUei8DYC74Q1Zt3LNK5DjqtmRXpXD6ZUuG7ZRRRTjwBdoBU7AXDyCnqh7h",
  "key20": "kaAxVVZo6mbGyJRKeiV2WAddHytTb3JzdQL42hw524sZ2mC9mob7qQJALtu3djPum2aTkj4ov7gDMTaxZAAT7ay",
  "key21": "3saWpC9NQbfh7WVhKwvUpw8b4HKXdk3Dquwtz7B71EYhMCRViuVkszNGawvFwHcwaV7HkxrtsvPYiBkhpB9hLErQ",
  "key22": "4PhkkiYbpw6UfywLEFLCDh8pToiVTxQd9zL1R9axo5sqt9iM4DsnaE2xpWGG86pf4a1S4nnSogSLj2PeqUWsJGRE",
  "key23": "utK2VwqJZPc9ux8VkjQrzFpzBymh6SemAyeSFx7zUnFVwNeJmek3bQWNMi3pWR24uaAyg3ivUp7QUKAQNSsdMaq",
  "key24": "2CCTaUA6RbmGdmURNEoxghxUGYQTbWkv1N8MzniY3eJXNTTgPjsh1fo8XqAW2xteCC7B4gMasL2NQsA9Kqkrfmfi",
  "key25": "3zc7kmTeMkU2FUZ5mMhG89d5XPX4qsVvffAn3a34VDvBDCM7xWH3vdXmb6duE1bz4fJVThUp7asVG7xUmdQk6NSq",
  "key26": "4wnDCL7rbuyXw1HcdTsC5tXiZnHdUSh9U4jpxtUReuV5c92uwJNy1ZrmWoSXrTWecHa8KHBapg5MZuMGa2fLrMSt",
  "key27": "qiDehsrmMswYjGGP6vAdz4KaDP9Gqe9YGRJ6EznpqyfCtVUSZaMUUu7fZ7RAGPL3mNucpxt2S1RZJf551KTrJwE",
  "key28": "4pwLTPof7x2ugHz5AhsBxYQTF2goQhEDVZwsjiskAvkEqnqEKShoGtZVAkmvNugC88fjZ8ifHG8LJgs6bujhGSPz",
  "key29": "5SbBCco3kSYGXU12EbE3rC3scDNevDUHHE3sJ5dJN9Tcgvn3dk7z8fibRNw1SJQ4Zt6usP3xUGbu4g3ToBeRnkDR",
  "key30": "45iWMji4fSqBEWU9Q4J7bLMsB69ZLk7QpqPgapYcDY6o5u4GtSHVkgT2XVPt2VZfoP5dSJiX3iV26UKUKxDXT3Yk",
  "key31": "5uX2H6Z6Q8fm8ZXRP7jtjgj53cDdgnPhoGnqiKNYjJhJcfynHPEwTXedSUZfXCstcFPCuTQ8oq4Tm2oyaiaf347n",
  "key32": "4a3tRbiGJYexr71rhDFuM3UULZQahRVDKFUpYzFPzHANsi3hwDMtWg7YhGeEW3rtiroAidqTXeXngHRzxKd5pm48",
  "key33": "3WXRQLGjf94pajw3KfVBaNULmSgHHFao1fjoFFpdSFcNi4exNoqnLBsNJ28XJwHKxk9SZqoEtzvnd9pi6fsJhMz6",
  "key34": "4wNaY3MrNZqARbrANDy8eKzPifFabwjJqkrgcGMFGFo46MYXqtFiyXEJNqwBKrVZ93KwqmYGCBMPnAstTc6pHLTo",
  "key35": "4QAHXdn6EwAy1UahJzuhWt86AZtoQLemA8yhHZkhDXmfrRcEk2KELCeXV7G22mGxiSBZpXkMGJvnDpiZTxHot8tP",
  "key36": "3rX5wyfaVzEZhqjRNcuSLxv2K6bDnPLns8z9iDw8CWJcyK7sWShpk4VmJgFfi2iGqPYnedsXb7ggrwaJj4tsPJNS",
  "key37": "4vcf46hDZ3TrazRsayBKVRFTgB4ztJAxcnatzD2vB7SQPQEuSrm1RgUPvPrbP9t8sRRkEAzxwrcTFuAmbxpdpYro",
  "key38": "2VdBWTz1SfjbEDDJTcRzUCEHEWJDDBeXeQpYg5Ht2P8HDQQJoqhs4RiHGd24jDqyoeennCozzrp17YqMYqiyAv47",
  "key39": "vvzdFpLP2BBuguFmnyQgFpRrzUnarq5UtL8QJfHWQo4Zojs8wVDzPPmVEGP9EbQYZCZ57WtJxjvZsaJvbUuycNy",
  "key40": "46xVV2gPD2eRbbcLwqasYgLDeask8sEjxqVa9APWwMBfVSoY2Kr9uuBzuyUcXV2fRUodNujsp2hAJmoX7zhnRJFk",
  "key41": "5CCpz5exzQTaMDtHRYxzVuq4ZmPyAwDPWiCFaiGj9rtES6vDxX8ywx3JmNWMAGESfevTqD462GwkamP4tcWPvFga",
  "key42": "4Ef1JzegCKB8At6392ffmLADzbjpqZ4HfDBpgVS4x1efFfMxTDNQKb86Kb36RdpRGunzGc5uhfC4QVMpQNCgkJnV",
  "key43": "2sSg3fzepWP66vqN5oNd1K9BAvz4GhPn1kPfeBzm8izMdWaZm7dxaR9ZqPKMo87rAihRtZinMASyxTAtbx8tfxo9",
  "key44": "4kkdasVoLF4bzHjJiXS5o9rWA8CZGXoJSSyop4wMJC1fCAo6uABN9AHaRREr5gRucfs7r2jzvjNPgcsufBkrnYKf",
  "key45": "2T5PrLChuva5muhnTekAkEHCxqUQNUqWVin6RN6pKwyAzWkL5YQD3wVKNQja1xNM66BzcJopp2WGWV8Cnz7HwmBu",
  "key46": "5KPRPUQiboda9y4GYnPS48C1JZHQrcNesLZqsXJVmL9kXZzTswM8ognJ19twsHvqLa6zLt47eJ6qJHGxQ25oAcKu",
  "key47": "4nb7NjkGhjrrMeE9kQy9iF2miFKYcNFkqJVnQCPnPwiB398ECNF9kGz3gVmfuCxMYmxtB4CBFE2uGXZ7RyURifdp",
  "key48": "2WHKfqBjPKxhxZaUT9mQTeyAw2eLkqwdegJL5K5rU2oRjowmEmJVHpGJq9UCbRa87HBxTgmg2Q7hwadWdW6Yqed4"
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
