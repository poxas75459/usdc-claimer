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
    "5D8Gh2grDhp8JWAWZ6GyqSugWSsFUJzvvZBzNAWMqDkQs862XV85WMxp23ZPSfS1CiafgbkbseXMipeiZc4sJdHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e56L16D78zaiqTbct7wWkLQ55ZPxA4g71whQo1dSz2PvsbHHEu7kDciU1EWkmByu4mZST8ie7sjdidvdNwXL2WD",
  "key1": "s7e7enpmMUphZVARFsEk6D2PfQ9a5EuUgBdq64DmdAEega7nDNd2tpR29J893b9WLz9iCyYsCeNFvtyRhGnLenp",
  "key2": "KtACNo8uTXWdugQEenh74sLKThWn5B5HCNMozXppDteMAN5aVmXGthD4ZsMR9Wb9cDNJqYm38D7bknuxN4BcAVQ",
  "key3": "4arKeBfSUn8Jk2BEujD5kJCdys8ni26VXZh4pNxiwTVMdmnMc7jEkAGJ8vvztRHjaevARTJa8gV2vEa3HkdiiXYq",
  "key4": "4GGqPxbgoSHySw7LBXvM2x9c88qYjXE2CCe21wY4RK1eSDE7GVi8cT5bT9Z2PQMH5kHyWJtoUTqzDLgc5berSEdP",
  "key5": "fdMwrBL34vKhtujL2sPGwv9QGu3KjBasXkNECroL6STPZhMvGQPcmVeYd1NSam7LXM1QcLUyzPqrzzihYeqg3LZ",
  "key6": "sa2Y2eqd71ivhDkPsknjxgHhmvS71jYUhBqd6i1C3pYQQWPpgK8EFByMQU7LhdiaznyJgxoRycSM1f1aZZ2V1gV",
  "key7": "6xCnv23HNfUyLdf2yAgQLRKxdTXiMgukQe7AaJjVUHNQdv7EbBE69hy8vMYfgoSS4ikXDtDJov2jtb31zJ9hoFL",
  "key8": "31ZBxiFd4WV4c5cfxn4v6LQ9k3zzzYmFwLscHSLn7H9QUnz24kgeRRCgWy9nBiVo9BQgC6BMH1QZAQTSjRsh4Rmy",
  "key9": "5RjH3Yt2C8sWuq8B1rwFuR3yex7chxExKAwqnXNUZ8zTBek2PXcipnGWydHvZH2RkZe8FQzmnmhNmaKSnrT7YkVL",
  "key10": "3w1GhXAXoPfLUDxuFjHVYWzj619JMafPqwd9utgYLV48ZmvEuUZK5qperDym4CJspi6JGC6TMm5MTyzYiv9KbZyw",
  "key11": "3JNUKoM8Rxpu4Vwr7ghsDs5kz9xnrK3gwdphqKm7CPtyD3KzcYfAKDXBLSWMH7NXobLfiQiJHb1yYWMatLeddK64",
  "key12": "5biYaHt7gH7NdktPKgtimGfE1XpiD4evrNUqLuf3tWrpiLir3tLcbaUchwxvC87sAQBEXAHPCMJRNNKDtdo5GgZY",
  "key13": "5g6wajVjkMiKUmyNYEoo9PsBEzrQYu7E6GHvJFuQFuMp1Pgyz6WGateSPmTjyjrFCmwguPuX17DGyruKUaesxs27",
  "key14": "2bFbyUAbhUsADwfc54VH9XUbop77F7nR2QosnR7z7pnNGG4bwEJC34Rm7guRHRzc69FB3TsrcxYp3YfLSdpyi7ow",
  "key15": "47pJ1ePSMQfw356vj32twTGVYb3bpUCVULFx6NVcNi5tTbKKUQofkjiLG158LGrSnDToFHPNb95ERrHRBWr8r2bp",
  "key16": "3C83QssK2LSx7GS97bM54a4HtpyCqWzd7rTd7qyTUc4BSJ3EijB7uVK1WLWF1u7C8VDfVbTidU61ubHXz7B7tV7s",
  "key17": "3VhWVVRM1PdfX7wgvYQ5FFA9iiaR74c4Nzk6hLDopsWFYm6Hc9fVWSar7SysoJyk7g5UFX1v2VySwsUFFS12cFxJ",
  "key18": "yWmzFAh7HLytseXXacsrBA8WfmZGVfhvdsU8gpkRkX97VWyGBuZoFbuhS4xKK1gw5bBu8uohtofkJcn8GobHpZG",
  "key19": "5WgYTcfKndQYT3naY6NHwTfRYM9KNEEP6EKdgvp3k5GHWzCL97MHTx9sSKv71BcqQPaWS6Gntwy16xgFGmZU6Vck",
  "key20": "BjLdm7D6vGnMhXyTuU6xa8frUQghpxEwmk7ynvrFnVZa76K3urNk6JiYNR9H6zRjKYCi9hDzRxxUUxqYKiVeTEK",
  "key21": "3Y2MxY89ffKLdEdRYDqDJKFvFFUHtR1zATwnc3zzbg6be4ghHic7Dnk4TNyLkL8b5z4azyNhcp73UDY2G7KUVck7",
  "key22": "3quvLptinTzJzEoLKYKELBMTKdHcwwt6NQPiNVPLUv1ZCSYuy3uN5FieHUCrkpecDDq1rjqiArNosvAHbYDKAET9",
  "key23": "2rXNkJUtdGKfSTXRD3Tbo7Xat4NmYZHNyfYrFoTBLd1nGMT4UAcyuj6pSP6jVuTwPW2fRa4tTSMcUMurcEPFcSVh",
  "key24": "ug8qZygh34Ryk8hDgbuNbaENssosW9NX7nwGmBN9DmLZppRvPWKAjfmLK5Xg1D3nuqsqS7Wpg6SHwkk5TS2DfBa",
  "key25": "2k175q3riqeBTFzX3X8MAVB9jSoTodoDLJC7zHgVgyGvdYo8VQEDGS9fDyMeeZMQ3r7FqsMtTrsXqSiKYEAwaAqV",
  "key26": "5UhaexyhVxXNqv4tMStwYQv2sUKNTYK6cv8sQ4B1Mxp5gjwHtCd6rhriapRZ4oFqAm3KQcsVadjiP9t5t1jSMrMc",
  "key27": "4YNZ7SVVD1PHk1kUbCugtDXY6KtUuyZ5461qVEfqj7FxLYiLK5ygBV7YCJ4BbpnASafUnvZxQQsEutyBgmwxcJbe",
  "key28": "RFQRiJ1ZssgBPTokwpdTv9r61NdtnfdtQ8o6EMhxyeHxRPyyL4CP3iaMdMhJEmqsnL2j5RrheH9BiueMjFDzkqm",
  "key29": "3fJvFxjfGZrGujXaZcT25q2sCsxGtEEvCzKqacajrDDkN5TsrHWhkoRPeon55HwTp6sFCRyifb8BrcbyQBSTLmQ8",
  "key30": "2FwBi8oFHCPYC8JmLFNx33pQfN1L5t2AQU8kBjaGdvU1gBuGa1iBsqSTMbgph5mmZkT8MSTU4fYiajthR1iNMuzS",
  "key31": "38MeGhtTHsdDBL5dMqyzGodBqb1HGGsF4fG8m3HVtCXNqSh61nqufUZqbYegTtPhQSFUXgyZeHpxCqqmus7BxdmQ",
  "key32": "5QaZBr7PgMk98pRNaK3kRnmHQyyoAiVWfp5YcN1WnWbvq6DDVSqFQYXxgLAeZNpnUCqdyURsDwk3JKmW2BS3uZvs",
  "key33": "2rX6CkvUbyA9wyqYCpVrAb5FQRtSyhPK6dvFDiKZFAH5mwsT9hUc1B7NkLKpkZfVxKr3SVxd4tZcMevNVyNWRjxw",
  "key34": "Mz7E3DPjyHPP1B7gFDwMzjDuLkxT2rVDo9HPA3UmytQZ8yRzY71UniAD8c1TYbV62W5C2CeNVUSjWSy9NDr8bRc",
  "key35": "538tPLTsJoUQqVx3mUmx2t8GjpzBv69H1ZA91LyFuMAXxB6a4A2Ttbgu18w9YzUPGmXFU6ZbCWgyipLGJYw8ys55",
  "key36": "3HzM9HZvi2edtgrcDtyeiTHU4GnB4AP6ZmAf8ZEJ4KG8HbxNz8rjmA5WkhUnQ3ZA2WFkYqg3ZUZLPogQVQgM1Rkb",
  "key37": "1rbSge2GQNLnaByMrvonQxBF3h4hUQJz3e6EP6seYVQ6f5u2ndDuoVf9vz2GSht9FGBSGxzVVS68NgXu2GoQ1j7",
  "key38": "pcaNmKbf6TjQXusyELgNYiV1hgXDLBmZKseuRDgQY4U8YoGuMiThost7Gn5CEnj4H9i9giWcLaxLzPxtxRSdVHJ",
  "key39": "4cnwUudR7s95NWeiE8qZ1jNuUBqNavMzVY5pHbRmS4XpEus9t5ULzrmh7VsEAXKyccU7QMipq5QFsJM1jwikiWLK",
  "key40": "3cGejyLMac4XnWJZiMUNu8HFzZPQTiLmAmgkumWynBhDKnDMT6pB3USNqgP3wJSjV2gcPCQPgSx95etrnCV2UgKy",
  "key41": "5DRVozkVjvxW28XCEnWQEtRf4WVZBUS5jSpVZb38TNvgqUPDdzZroErNmsc61QdddsdG4yQ63wXpz6PucasCrALY",
  "key42": "2b3sKFUs5TLf2CnLmjQqNzHk2AQtYDp3s36ZbLpTxp4CfnUbLVn2CPsWh91Cx9FoYmf3zxTMZ9SuijRQVgVSEesL",
  "key43": "3gPzE3caVnEWRMFoQo7q86hmD5iyQw3qLx1jDVR8Bf9hVMgaG9Y3gnt8ufzStpc45fQRpSqKafeb4C2x5B8AbFAi",
  "key44": "2i4cc2FzH9hv5nZVLgTQ3Km918a8RrZ7SxzngQQMXoUPAy9jFy13QWoybivowYQPjbaRYpdqfDLeuraTnVnBFTtn",
  "key45": "imHuQZ4B2eup8tbU5ML8oHodb1fgVX55QPUQaSrexqwpE1SSH76vjmKCxJe58AR7JnF7WJCREBdNtXwgbANKN37",
  "key46": "2XhFN4u1r3L8qPa5yqbype1PcazZonLpbr2j5gWXYTvUFSX7jVcuYdn6QnjBSwDPeLMQLhoNxsBrBCnihUfCYgLc",
  "key47": "NCLX5xf1caB2QTUN9U7zKM1y32qQcjRiady3r9V61d7FTwhBRughJ6kK8Fsqc4K4qFb3vb5XYaW8nFZYFG1dzf6",
  "key48": "5bKjVNmYrq6k245uLFy1uHa25jTrLANQuFFA3snskn6PsRusyCt7bHAru5CQepBuWATauFrSBdyUeqhxnNQnfrHH"
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
