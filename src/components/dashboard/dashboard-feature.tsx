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
    "r263io9jUPaBeaBHudNTrMFYrbS4hGedRSY63dKBzpwwBmaiZPMYZRTdYMLypYqseayKYd7aNkr7wEU2SJE2HPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pv4tT2Psr3cupSYoghv1UAvWUYhYs5HgJyKjHBZtVp9J6xGmfPCtMzh92ZDWSWVoWwtWKr7PssHK5J2asFWsPsD",
  "key1": "QdxmSMEJybZdnhJYoMrpRZksvL9hZpeb8ULD8K6C496B3pHqitwKYEn9cznhQiBxSD8rJXXJTG5tYibjsA5kCAU",
  "key2": "5UZXWbySYVU87mNYovzJdNS9mFtyE4JZDVzyEERn5kVvXkjrCxCWjykUCwuWFBPk3b4viCTQt9gajTVL8Vxr3ZbD",
  "key3": "sMatk1yMdBTW7da9Fv8vXEy64y5L7zBvYctDvEhuv2j4Z9xDAkQLDfc4sBQALS2VGWwJrUeh5BdBPx2G7UsPMWi",
  "key4": "2h559T2JAqPyVNm1jRaAym3YgnZ6v2B61vbnabpWNCxuyYjJCWraXHm2W6pPxP9RmdWDYcP6kddZZKoucm4CAhap",
  "key5": "3CSDUVmM7tdXidMH83KNwoPTn9CkNh1LxCG7cQ4iZu6kBMrrB3mFtfgXN9mMEF3tF3QsfLtkbKzip1DEkun6SR4Y",
  "key6": "5zEDakDCibZZLnxsPrdFPvxczbjKz1dr74dLL925gVV596RLoWGfLaQsWTcUUMfifpSzkGxU8ZsH3Qsa3HNt44ia",
  "key7": "3PcbzNZ57H6EBnkXeDquDz9SaBbLrMGo9Zd6CA4pAVecaTGadkGxteCvHMFzn6sybcgogRPxPLLVVaGs4vCocroJ",
  "key8": "31vyAw9VEM3tTLCsKoTtHWN3ZFubb9SQZtz2AqU2zYzxHAHEJ3rzcfLB9r73i1tpRMA9Xmxp61BK2xKQTExEZs9W",
  "key9": "2wnzNMYb4Mf1mwUTgiVGYFYcKbDHQPBffr5SStx32D3srPW4BUEX3KCSmwAbtFRbDXaFw9EuiNBekMfkvoh2eFg9",
  "key10": "2ks9qMCCCW5hXJUmnYAGSNyhe5UbK1KfkbuH2yGpWVdEMsuVfgoaNADQTdBwnhtzTEzV6FHgyvwicqDSsi55R5Cy",
  "key11": "2Kxpmu8n7zcqRdHA5mJsfBYgy7wdRzXnTxvr49a4FhBzBH7D9LA1WBLq8WdBHTwTB5vGhn4KzXayGcndhLeP9XsW",
  "key12": "3qH7fg5Q72dGEhMQBTpgDqjLMwLbftRPFfQRhygvCbK4EhLwqFiWhVg4ipTu9u3SHzvjiMbJTaQ2tHaPUjmtvLny",
  "key13": "5dsxqtkGoEVxTNTRqdZiSMHah96TtobHsuQmF4v7bsaxMzS93aCr6CLLyJEMoLSyPk4rHZXV5WpgyAc4hDAh28Sb",
  "key14": "5BkYSwPbzQKqJy8DTgBzpczbuPUH7op68pJgy7BbSsSD9STTWpciqndpTRCSd35wL2YGvc6xNbaaFCnenGRjJmJ9",
  "key15": "4Xm9ZQ8Ktay38VZ7GLBCKBCG5MNotPseLqDDEPa8XeYUMMqzV49h9Zie8hL5SVnyXPcsTsgnZFZsovihJJJhwJ9g",
  "key16": "3kthQKLJ4yDaRNXLGw886ZWGxYtUPd2dbgZ2JitqNi8kzbwjTSdwuoeoSF68szG9AfKiKtXSywthSkZt8nwaL2cS",
  "key17": "61qtw7ybmyq6n9F9TJFyxMZZ4oajBaZ9cDWcxouKiJHefswXvsiHiUcVh91dK8AaFB3B3jWYU4d1LRrKTpujPT89",
  "key18": "3mtcaYS53JkVXCt51hWqG75FeF4S3uVyeAn5pZ6EptPhNDFAny7Yv4D2afc4njyyMQFqpx2rd2aakCLRqcqZbTUJ",
  "key19": "3vKA2twmrAEPDj4NPPnMqqdQhXzcUNZE7wNXRNJzts1w3QzENggefdwfCVcA8mhLNSLFcQVAf8q9Mo8nFwCU5fHD",
  "key20": "3BimBRW9gvqoU7ccJbFnEJro43grRPj8mk2f9jUPtConD8McSpBe3DNFBbwq885MSxKU2xyGPf1ryoieEM239XFK",
  "key21": "3FnhsTVGSLRUBEnB1ZRy7cjgmHrPE4csmN8GntFH5uEtSz7Z22Kz4k23Xpf5Raig3MVPLQsFxSDuqXqRM2Bgv5qn",
  "key22": "hpGVCrfnCwhu1Sg5Dw6KMomYMNQH8xzh1GoMyMXryz1f59Hz768bTRtgVqGcmPg2KkRiokAuCyTzPPodSRMhbVU",
  "key23": "88b9XjQw9jx5gudYUtMcQERv3v6yusNwvtuYSCXoxxvCZTvTsdFUHQrToDRia7kbYe77caYExJeLBmuyP3hNex4",
  "key24": "4Jb7YfjazZQtLzYPkMFzzho6158X4fB1QiRyrqLTmEukehuVcnKyq7Ww4P78dzkntaDVh8oqTf1aZRnBxSVKcsht",
  "key25": "2j9WtZez17KgjPMKRK9tJbhdcDwB2tL6m7EheZy1GkB97cuvGSfWRmboVxH2K2BTPvYyY2GQEGB282yjmX6HwnEi",
  "key26": "47HSWX75nU9cmYUsjtLCyi8tycTTj35TBz1EhP6hDu7wV3eaoorBaw9MTa3N7LBCA1CTT2vdN2RtSKDHbBpse5xv",
  "key27": "3Q1wSEU699WQuLDHJWKh3vBBEoJYgsxWD6DWpSQuaovHDWxMeyFQMQmCyPmVWjcT8MMhQyvADBnLzTeUSnt2Fpg3",
  "key28": "3aLASLZYVqJbu91QwjLjLTuFC5txZ1QDpmRspiabu7EWGzdm7BZcEfJLZeGp3xTW4REsVL8LUZCS2uDk3rL9iaFh",
  "key29": "9Ww7HnBdTVmRwRZ1XZyzj9yTquegLU6x5LdKrjRVFJgnoGCh8zFkn9y4YsFeZKBtWHs8ktwsZmJpbphMpZTMSjj",
  "key30": "4F8UTPSn22vxbDvzY1gK3nixYwss5dATrK4bcjKLt89VLbsgNy7prnzznsg4yb573DpEmQCM1YbTHiN5dbTZWumk",
  "key31": "2Xjz1tvizkRguAMpBBsUzST9wZQmbQvxp7RjsXemrnftN1zgkp3y2nqPMfpYhfzCu1Gdcn2NoHvVtnQCnwfnzkcD",
  "key32": "2GvqDsyZz3tbx3rQFSeMq5r6aAbTbzjShJm7s6aQtvT3W8p8vFvWTsL1MU8TrUkZajkf3mkbWmNVEAfRi49rPRLt",
  "key33": "4pnCQqmBaVMkdMwwgw5YmFJP6zPs5NSMRdfQSFr9xjvAHtgHQnTeDSmyEGZNzTFN2E4vbh5vEuvbbWJPhPPfhXMG",
  "key34": "eZjGkHVVXnqWuvytnXWejeuv3GLg5EN8R8M5CYJU2BNUu1U3NiS28XtiUaLncv6jsE5w7xurzqHBHWtqteLc7Jr",
  "key35": "4b4RtMGVcUFwaxhWqcHdmBtnz3or3ctbCeMdvLP5PLeMhJ4qmxmRDoD82zc5Hqmnkm8FwxnXsRC41vMesZSxRhG4",
  "key36": "5ZbzN2Eqn9K2rQCx6J5tEV4e5XrhckNNzFYR6FDtiZTGNrb6dyqzxLPBLyb5vdZXZwTHP6vznGoiTMdNxRLyhGSD",
  "key37": "2TtReGeBZ2cC4oMUtZDtVRtXVop6nd7dZcrGqy2GVp6rGxTTEwanaMRE1APohqTFeeQZ29qB5HYX8eNEim1YUon4",
  "key38": "5erWCgijCPLUsPTbzyEa4jVVKvQA3RDLavBZ5VCB52bTry6PrsBNt8v6DohWs8ki3X5nzdbqjpdnZ48SZzQ2528u",
  "key39": "w3ydpKhqQqDbVTW1eMMKwTqptsRe4fV2GcAzDCQre2S6M1wEGcNnHFkuJyS4bnfFvSUz9zwQoXTHDR4H1NGkmuZ",
  "key40": "66WYHQcqZrgRh97VYFqHV9TQXnm5UE6VcWnqUEpZRGKvaNr4p8YhEnYyebxbycWespyGS8ayeVx2Vf3Tu2JNQtv2",
  "key41": "4q8JnPotXq1gdW97HQhXaFtkbHoamG6DcqmM12WefCmcPE2U2v7Mas2U8mqXsGjSzGJzxuCnFrQJ8Aj1B46Bw79s",
  "key42": "2oYFg5Q7R1ejNry4hXomXnZrTYZ7Wh8vNbLrBvn8TbAskdjKWi2yvun1gpaTVwsWEvVkRHh1uaW6UaNFy5tH4mto",
  "key43": "4cJtjyrLpJnaFh4AJshZzcXcYcHpxf39jDQsfWgwYi37oJDrGeL7HqVBr4Wuvtb9VFfNG3LfcU3jxhfLduTmHjQ4",
  "key44": "2mX7seQTYr6spPNPCYq2XnXPAsui2NdgirrP2xYSiaHy9HyUMDZg7EU3p3FzCZXCryLB2SDPAENoG6kzrwt28Zaz",
  "key45": "62821D7vDGtYY6YH7qXYEpSzcQY6wEiDFYwNVzPmWPAxfg1K4WsiXYH7TqumGyawDeBTsyrEokTaZi5DZcGxWtV7",
  "key46": "3DdzyXnr8wVaAJnpqMH4o39ynWBsXUAGg4LsNwPQBQ81xgmAUS5UxcrPjmAwKn7ut7kGhWeM6mrRDKuKUVibWoYX",
  "key47": "2h61hSPE5jM3Xv9UwGABeHo88Z9iTztvFXngPBbaDtCYuL8D6bdD2D4XJKGsmtoN7qeRr4s66KuwYP9e92qA6REa",
  "key48": "2e9mrsjMwHpYRhbnLYotd9WW2Z9wsdShV4DbE2zL3v7YzkCyyo5tCSL92qWCf1KH1bTrLjXMTsNPKDAjqFAbpCua"
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
