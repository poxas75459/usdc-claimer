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
    "3KjDJ8i3BQ58Cxo1LVvKbq95SRUFkRDbiXwic2zUBj2zBG7tGMhkBUqTWTPMg2axhMbPFjtTHnN4irnA4vuix5tw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QH4a7wi5qRrKPJfytMNKUbN5gJzv9THhzFtBfoTzHnbFvGUvSHn2Bduac7H1NjETdo9kEhJZPMeNzpi8iRpAfZg",
  "key1": "3G4g4NqTmiH3YjiDLhwg1ckk2fjvywoVbKP5urxxqytKaRVbPvVL5uNYD5DKRqNxuVGxPmzqDWZmoGGCKEWs6XAd",
  "key2": "3PGNithzEjLvScaYJ6BdpVgboE7FNFcfKkXBiPgmWtEhs5m9gYNhwi9vpucWYSHEHb99JEQiQFCP3o21Wge9jis",
  "key3": "2HeJSFqvoQTN7z62SKuig2V9fPzuXeYGVnsuueQgX8foqGfCMYbGZCU4KRGr6SQxMJWsz1ojmDfVseHG9LHsaW6W",
  "key4": "5NDZrehCePrnKWWmRddCYu75PRkNmegSbTBWUXAFqKbfEBLusKhwFpdHaC3sjELz6ZSGz1nuJyGiUzZWQt3Q2WJt",
  "key5": "4enaDrmDtu9RNKcDokr3P7isBSNijPAU6YhdDzGD3Ffd5USwztoDJy1aTnPyqaRaLMd5uKZZ4k6cb9uE2Chs1iFi",
  "key6": "3pKgcjCY8NznoshsgHACiviqH449AKneWUpx1oVPHX15wVXbG1wR6g9nVt3QStMM7LLVz33qRiiMyvxjXMvhFVNN",
  "key7": "Nn6NW4jxjAyMMqixxbUoyZWx19SQdWeTE7qKU645XbMBLjnfcqDTGMdfnDqAHh27dMS3Pi2XZKdhq7EtLgozPUU",
  "key8": "4SxbE7jp2TRZD4NrzDZPK1Ts2zJuykrqquJLnfarGJAT4Cyb2QYNnySAZxTkx3UtJ8c84i1GwivakMhzh4o34wPH",
  "key9": "3G6eMdcqZYz2G4YGMRqY6oh2KaK8vkvjbo2QoJewH51mPp6Co6LDPZF8sBZ5qbVUSKwGGc7w6vEf1gCeR9s7h2Zr",
  "key10": "2Lamc7MiZTwDzga91VLuvsM9MHheHYQF8Ej9F18pzKg33ja5719cc9zBs5unyR6y31GC6xeynMJopPqUvcvuiapK",
  "key11": "3SvNugRpcnwLcHPV85v6joJSaXNj3K3tCHXVmz7Fx9euDPaF7JuBFgfah7XF1H5PXr6B15PAzNeCU8svSvurc5n2",
  "key12": "4DLTCgcxoWhsqVm3WqPfHD38cDqZymk23NLY1WXgHQHQe2tGVdiaAmxqSoD2rv96Dp924HzZgPAWcvX2nScjuahH",
  "key13": "8BRM41yGzHetTE7y5yxKbPbobdpEgb7cUraHTYNLLzSQ8e1bhKrnTSkL8T5K9pLrKR9jf89SViSNeFU2L2vZoTD",
  "key14": "XkQ8Hg79rJ7uHpguSJ8aRP6mBYZCWGjtcHrTKfp2eeGWZfVMTVL5dgpvrJ51chSMaRPj5S1eJgBB3aT14fFXE7z",
  "key15": "3p8th8cc51N5iKrX2GBNLZd5S2bHfWatCjFSsR5tj8rtfiqBq4AUSwRK9SyEKvoE8YFVuJ6Hh83YXZyAjP6hCEUL",
  "key16": "2KDdCDhPh57w8dNfmo6X3KM4UdU81M7J94rz7Akmk9kghq7pxyhQhVVGtnoK3J1eYSBNqT4Lv8DDdxtAv6MxYPJ7",
  "key17": "46V2HyfskUZDPamC6Hp3A8LtBemUUCykqjZzBEsDLr4eJMtyrEy5ZYPnsGaBbnBWedo9mu9BKo2LPJ8oSFmEWwdV",
  "key18": "1c5fagR1JH9MFbSuCa5wvfGkX1S9q7H6vYBazLYeL7yUTTJmjCoUJisJBmAinQTQStv2756j486ojjWZsTkqziq",
  "key19": "3vKu1BA6AtbsBex1tQnf3bHm9jeoWMzfyeVxYMnqyS9qHwR4TUb1Msm8s1iLrUjtvciYQBHce4CSxvU8YhhjvLBv",
  "key20": "5127bYzpscs6EKUKdQXZNxCkxwJeXNQi9mxbe5QEkmjAvi6927HHSLUDJhi8TAkfqkQYJmTS41V6gnVXXTrKzr7U",
  "key21": "58BKmNy1KWGgGjrHz7gXtvs9rGFVSWiVfEvhcBnutY8kpWXSh1vn1CDFCM2LwWSDUnS3N3gtSsrD5ZymGU9A2s7j",
  "key22": "2twCTuBEHxm2jEWvQ2rC4VqAwthwcFY8MGdacaJ6PMSvvGzrT1JJtsCz9jrnyaMU4MTxb7eoM2FcLrpnuFzjTczs",
  "key23": "dECn22F77mVoz871S51m1LeLMUe2MhDKTeJNHyqXDdmDND7XK3nokt5VQARb1EBvqWiAi3GD2ejS18rmY3WLhCw",
  "key24": "2PBNd74Dodni8JvB5wbBnASXNbfJfxDSUSNJWRK5TXZKJLBCHgqczUPedmdofZMXQ11Ke9uHexekRYE9adc5s2pm",
  "key25": "2YotV71Gyi9fygwehq51sz4TjBn7a1UmGTcjNjxwK5BEssC1MaCbrR4K91bgueMrF3uwrrCpi7jEeY7RtKLxpTvS",
  "key26": "EagAYkmmHjtmRqNbQHuZyLse27qUVWgoQZCVGNQXEztDhb8RSDnEFJYHfZbSokkNAWPspEAg3tcwZMQZkVvx6Dg",
  "key27": "3ubwtUJYD2Bh6Zcx1N6wdA3kK3soqXCsH25NbNB1KnymkL3hwKd4g5wmecg4MmQGA6Ptd18qHhBnEBGJfsKVACUp",
  "key28": "3b4snQ1SrogQMmGg3VMcM3xdsEbyuCU9eRYg4PadyVVYC7h77kq6eFC84TCbDXe1u6YG1ptcx2iN4rjrNyDz2VbR",
  "key29": "5emFh3v1NoYMmxMAfm75hu3dKi4u1dzoDUz2357eQ1g73fiVuj2PNv5JCziogJJ1wVkZxbx1YZe8EnDD3BUtb3ox",
  "key30": "2TnQBRN7AifAyMsK19qPUSA4tj18gKghdaQZ3wncvYxjruQmJUGtRLk7xXc1czeMqduYrPe9gke7Cfwj1CPKxSfV",
  "key31": "32mG6XpnggAkkkn6oYymwDDa63cfitin9ZEHghgwtgAb7wehbVPLaWBMGGivqx69teAnMuUp9tT3GUt1xQY7sRb8",
  "key32": "3PKQRvAHRYsbwwo6aiKWvYN4LHHinmVPxYSfBg4pQkKiPF8gDeFqki7aBhDUQmEgaTXSJ9gZh7WpugZBHDGPn9kC",
  "key33": "3bmfJRLrVdsnSwjccS1T2BFjvFFhtS1ok4Le8GMe13VA8enknFoVFRXJ31cTpLjFe7YS9R93P2AG5rKf6Ngzpj9K",
  "key34": "4NUWRSUf7FKrgp6v1trTJpdjNakF9e1dH9L62pnrJ5n56RvBKdB8N4fEiF4hC5n3tarAkVUZgWi4U3f2zBzRVTPh",
  "key35": "3iFDUcoiWrCWb3Y1Ky9iNNhgHWYNvX65i3RRbUY5Rn7RvAsEi4n8HQmCNmHiczzbrqrAxsY8xpSNZrEH2ZcPBfi9",
  "key36": "3MWEcKqojnN66ikwWqpLxs2Ui7qhC5HUdNr1QqwnUkN2VXcNqdUchGC3XXWezdzVgEudkF6vNSeZnvgY1CuWkQa3",
  "key37": "wzBSdAxVprcAijgcMijMHm6NXjmtY6Pjr9FZdykcYCmR5zWGqSFmJv6pciX933WeVyzNdBzc36x6hJuBfxHvX1S",
  "key38": "23mmVzC2TkntAX4RY8etw4yfEvPHkGNzTZvqZjGEsHDxfmt9fpVGigwMk3ArK39SuubN2ZhQBxQjYmq9s28oWoTp",
  "key39": "tgrGVE6QLGMDrG1BRbPMpcb4SpMCGP7kqsQtex3JjrGeGYWLDsFzACMdBzH8PfBQPPK1xbAXzcJMivwMDJoq3aj",
  "key40": "5j7bSWR62kuV62AA6CRHMzX8ybbMaVJCgcKgD8oexGg9ACC3TDp1pQy9jm3DE4dM9yY2rkXZknaeDiLkM6E5QwyT",
  "key41": "FB7b2NsVct6PMB1FdnAHz4vDgu9UPMZKhCfMhfe1siqqWR4jLm6zeDHNFFkEaHMGZjDYFiSYwYcgp5PJAgtsjdm",
  "key42": "2pwZKf65CoGsmDXmXxpmESy1F4nMG5oDWFH47yaWCEpMxgJDTabKVfG7mWxsMjNvUCWfihNVj7e1wJmmsLvAGomE",
  "key43": "2EPvYK1sifUeCXJ3sTNd2joSbG7SGijnpRMUG1R4egTe2tAiVJ1JnKqMBW6Rqpoj3pNQycgikFxm37Jsj1wvd9cB",
  "key44": "aUXKtyBdxxRm2915ceWDwvTwJxqysGoUUo4F1eVgqj9cS6MUCwh8SADS926P3LN9CjwFZkXUNU72xjDPp6AC6dX",
  "key45": "2mg8ncVib5T86DPaXyfh1RY6iTd4n4Ja5u5BCR51Gmq9ZVovWj3DngCYYdmYpY4V7L7LtmB3gSsNBDjduHgQsaiK",
  "key46": "51dc5cSSJT7GdcUKPHPtakYudTQALDdobkxCwS4Km67op2EPeFmYN9pf8BccZYpfKvLP9MpMYHk14VHePLuzZApQ",
  "key47": "5yyz7GLskyoQavUUf7SiKzka7BvJSDWjCpWhgtw8pyf7XkzDsT7CvyCx5eZWdbCa1y8hU3VduHCrc8uLy49nTLZP",
  "key48": "5mbob18MxPSWijswyAV6eRitocCFpy5GbEvcDQDBgTYtkbwQHyqfga2jktcV4UWhMMBQBkQWFMnJ6ub11sXVFVY7"
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
