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
    "2ENTAYABibuB3cBC6X9TVaNdyDuCWp7FVLgtUXvsGjho98buSFENdmQFY7SQQ4ah5aBLCZ3RqxWEYJbhCjUtwyed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t5hjyzPcToUxA7Yyrdn6YvRLGv2AJmAisVA3YP7A2RoMReN7rsY5BSLzKqiqNijQ1HUnnQKRyzzP5hMWvFUiyPH",
  "key1": "5qm54zFXwqYocFQo1gxnMTJHeppwjFMJrDRk3YJM9F8jmpiwrVEqDQ5KW8KW6viEGzWV1UnaYBGCiVqNQQEHBRvP",
  "key2": "42cpDBcS3E55bZySTQFuTfZy8wZqWznR49zEQNcnLCuVE8P5L6oeB6vLzhQXypW3os1Mf7N3c6Qgw9oi5X5Sk4Hc",
  "key3": "4xKQyxxudyzARdHqrPUhhtPADacV71rcUhZL64YYPNzXxVYLBsiSY2RkPWHhby6JRczbpQ2cVdcaP65vhxpbAxEt",
  "key4": "5xnCS5WuAkczpCG4b2BauwCB8gB9JCPAvZbXpYt38WEpFsb8v8iLgMoA3Wr4PVqqupuMQMLSHxMeGvEpfggh8vb5",
  "key5": "4zU19Mr44p9hAYGRZ41LGLfp9AAPrqXdaHtPnn6Xv4jkxthGRi54z3doisFXj2zVwXAgMiLRUY17YvqfeARY8Ukh",
  "key6": "3WkA5HAmMqcnFeqMKvkd6Nq7PGRYyavaa1PwZrq1MEUxWsHincfpZjCQHhVWo926M12G33ZDJcEGP9iAwnkC37Pk",
  "key7": "4FTCS2wjqveRm6kx3ZsPcM4cuVViF9kBtjmB2EKtkaeh81cGccTHKmifvonwU7yKTvVML5j1E1kmrCcUE5wqTyzE",
  "key8": "4BcjgZWUMRLSxQBCTxRYJyLg3erv2P4HPH2VHQZxAh96sgXTdRndaSqJx5CAiUWGNEHsVAuew853uQwBeKb1f56u",
  "key9": "4ESRUXteZh2wF2EXLNqBB9AYhbD7g1z89jvjioot5LfHs5wuw62QnUFx4MEq7Uc9KYAgsou4UZhTGsrEi6wnGJSD",
  "key10": "3sASNywZT6XpsNf4ihyujXFQyhmvy8XYNrJzobJtTwDzBmJ1iD9MBySVv8DirgBFKhi4GiS1pJkVAhYx7QL9n3yx",
  "key11": "2f73HJbTHVvbwyg2toHMmxgYJvqdP4ZzST9uHrRexuhxUWspvsqtySavpX79UM9a7z4ix33MshjXaSDH4JMkMo3c",
  "key12": "fV783sxJe5s7jxAfLfhXiGVSCUVA4QYEx841V7AYcxCACk9R5DLTfCkBdLWy1WKLubtcqDNFXVga9aj7uFKf16D",
  "key13": "4c2cMRBCsusyosNZ9fcSJmkMkgamhhukedq6qffgCpbk9aaUCKUsqxnqwnDgDf46CgtbznrqnxHtY7RHYtMAjvY1",
  "key14": "2G6kzoDz3aVe2SEsiFY4cebmmA44Q8WRuH5bH2BPryMzhhZaRBYqDL5jHj1Bgb3QPunF6btbSC7Q5BaGUZtEr6bZ",
  "key15": "4hoWN5QMSHi6WN8vuU4mHoJfQNPLcjwVtDUsngpoKFVpka3xhLhtYzWNby6VBDohanUfnzwEK4DRSqy2nM82fbjV",
  "key16": "4o4ymJKJ6WF7e7GZzSqsGwUHQYP7hCkvtK4R9gBwEikqHQvPGpFQ2haHto7k93w1dt4kuxZCEPos6kmsoDoJE5JZ",
  "key17": "tTX8KnGPxAsX7GhmQ57KoXtpZ3JW54yS6jebQNPjkSfjaDxnJiS1DDp7xKKQRLahNtEvmkUgEKaiZpXjy5yesHa",
  "key18": "4EQStaipNpBvcKuaescxSx1wjhdcAgARaE11auL1dy665sUufE4JvTdk8dHM93dfwqcCEaiu9b9ZSRFYdhzdg2NR",
  "key19": "4EpWWHob7HC6LJ9suFtCAeSPjngExHpCnshvDrLkoBDEsp1JkaDzSP6n8gtBQgvhasCFwn2nrxh5RGbHDHXojDqM",
  "key20": "2Myq9UngRSbPZYfPgUE4KtXdAUvanPbHJdRXQuK6tDZo5arigv64AaifDLjtEvL6Dg4FmBAPdhSxb2Hs8vhd3QtP",
  "key21": "4WeoRkcGmMcytjBDEFDwXryuNJEzVsCNzR3g14xQkMMMVCopgkCWPTso6JjbxMxeg6QGt3C2AG7tEr3EZab5RHqm",
  "key22": "3vQYeDV1dBYnQSsGbTLQqELTVdvrXYkbouHu9C363yxJHq6LCrB3j554BdRRwLnDvgGByXuhPdHEREp2SSAHWKX7",
  "key23": "PCH6Naxeutb7BcqpfXbpfh7z9rfcPYttkqw2naR1wTmx8ChiNkgAXfRqrmqgN9EBfx4tquSRuJ63mAmH3kbQ2C5",
  "key24": "3odjZ3eTqi8daAVG7nev6bP4GxFcYEo8W8vsCQnL84QWVNX5pVzxaMzUrXRiutHL7VU7pJkT5nGpJsACKLZhN1Gb",
  "key25": "2qHsyqvezd13FwPrGQ2DaYZzch6k6n2o9oBHrQDwkcQEMAyv6hUmKDH875GabKQHFjwyhgjmndM79hdWwCaEPiJV",
  "key26": "5bzXV79VeAnx5jF7B1c3sdvqkaeSZ8tMeGvWkY2HXoJrGP8CGKtdtsbWuUuSm6vVtbivGgbKU6hp5bNct8ZwfnJC",
  "key27": "2ryNfUamnV7TAaEzHEjcVxmCxkhppiKPTSEfRquLFefqrehXXNHT8ec7pZCcgRcWMQnCk6uvP4eQE7gqGrdnND5K",
  "key28": "4r6THDrCWs5CsMKJMvziFPZWRpRzrW9KLixoqLTMY4KKBPftjLHyoTFW1Bs4E3kjeLSJWudBjhT5o9QG7Z7hxiok",
  "key29": "579SEm5HwEEW1wQHj9aP6FRFULwX2KoSnAT2cxHZbjyN5gzgJThyTVHFoC2BiedPruC64BguSSFFSVUrHN98NwCe",
  "key30": "4W6SKWNDQC5cMnAAFGub9zqQBw8Tg4CMcWJESWA2tU9ndEnan4S2yurXBNwanSKhW7A7pajeABFEEZSKdACTz4S5",
  "key31": "4bMaVgUPNyfnuHepi5ziE9UzmXVDzwtoCpLugffou6ZU8NGSbBHUKntN2kYr5YMvKGXLHzsV4mABKvX7YZD6Lrwo",
  "key32": "3AXYuZeHojAWW3TB7jFJbx5zuXfbk77A9MiGtXy3nBr7kEW5bLEeWns8ZUXL2CaP1GxtmnHMVGXrAv3KeycxgoAE",
  "key33": "4xTTtfPSqqGrY2tcuVFNvGR2XF3V5JCTkw1zfiA7vfinVSrj87UF6sgRShGjGvzVY5NQ78nE2tBg5LkTLYkg5nvn",
  "key34": "66xnKmn8VUZiq92ayjPHnfJTBW4SYYADbyNMYUcdVqSNtBFcUm2fFDHC8gxKd24wz5VaiwhbrMJCmkNR5b76LAre",
  "key35": "29q44bCBHSB7QyvJd32YYtvg9yGzChdQiGvJddXzE9C9wgNNx2mC9oxiZQJM1HgGwpYN6ybL5qaF2twMa62EYeoo",
  "key36": "4Jms6uFjbQHKpsH7bbxrLfhFr8SMW7Y4CLcTn22pECNHwos8mMUVCzxJdgbsUxufK7LwCDv3iSib1aKhM5Mtepjv",
  "key37": "P95XakC1GDDAKwWvK1CHMvRKU3cQijdqE637e9D6j5DoC6Bhx7E4rdBjKr6m3D3oDqsNxahxnSUyML8DCaAizm5",
  "key38": "2rDAcjkzWGKVBACWKji21BiZBHukSyZYy5YNrtxgGkok6ySKXZSGk2xtMa8rwEUtTT8fNdsZsLuLh8evhsQwjt7t",
  "key39": "28HZtkcdN11GzRBuXrKddQLZyJMVjUv5ujRoEGcjFRmRKt1iiaYdUT2X3yr4ABrKLPX4CMu2TdWyf6UAH7JQf9R2",
  "key40": "25gJFQCdz6YwNR91drSuk61BUHqH7TWfJqK58ssQzv9BRxjw9Mpnj7Dm2byR4zbfBQ7JGSNTr7v3Kp9dDfmfLhKm"
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
