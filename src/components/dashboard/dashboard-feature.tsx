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
    "4nrsHjatfFSpJvqjN7XqzXHGudw4fnq6bdZyPgWskFk5NDdH8h9nYo3LoZG6FYVmNER3CfEgwxHBodzz1i2uz6Gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Smk9EQ6RgPbnFJtXN6wswvHC5mbSs67jgd5doZN3wVjX2aXzEe4nn9zznbXy7gUkuA9epUxCf7u48aULnkdjvS3",
  "key1": "zjAMZcUhFVzD8kUnipCVG4chajx2yhyZQ3YHCbAs6h3aFit9L1uHAwTXr4GnhiV9VLkgr3bBgUdBmHW9LJn1o86",
  "key2": "2ipA7CcnKNKeMmLDdit3DLBaYKJ8ym84LA5Ubz7YoJhdxatATpwCHcf532SAwLJdVwSSXBaqfFohiVBfgp3fjhhn",
  "key3": "45gMQDfweXkXNw49cTcwtd84nrwsRNXqiaDs6jPgDfgZg1LjLw5PcXzpbAx2ZRbFwoaBcJr5rXMn3npMFd1yXQJj",
  "key4": "4hVxKcCHg3ZY8dwDgfMFbjVB7NgW9mvyBHNBnZCQtS8MrLUXw43HbFDjBzJXDKtLYGrAoJfmF2qcf6J9EWC3hsVH",
  "key5": "62ams1mbvQ5YYRe3zkLABhDqyVgPZDKPEZYUb8wK7wGBB5Wtj7LXZj7JZ3xCMWfG3FyXr5eUiF8Cbknsb6tb3HvY",
  "key6": "3NLJnD6WGcyatwyiRWN9vWzd13i9Mae9kqPzbEPPZqMYDrYL96E21DHSy7Eh9LYbzHd1vdbHvCvaN6teyFgSCNmM",
  "key7": "5FM5r5vpYBnZspqrGCJPG3NCVdj5nbNSeq133fW16diq4M24WCBHvZ2QZYLuWvY2G5iTF1F7DoREUqvVhNaqBTFf",
  "key8": "51oLE4XBiMkxKK7EmpoZnZCLsec6LDLKLtiWB6YJm23hVfjZh32rJHi2TNpg1BmWhPP5YzqLCVBoF4LQkyYRFBpQ",
  "key9": "62ZNzyDohNkK9YbZCT52Z5HNxC6EuFovkxVa5iGMpSngDCQRm9kB1uARkQ1U2QPshvoEw3nsyXM5QnNuiawVjkDK",
  "key10": "5LVw2EfZrCBKSQfb5EJCbjzeaFtCV9nkRLWwgDfW2xpEoaTPNFj4DagpJmNFDWR3BdAhWTvdmbn5WCQppxraEGL",
  "key11": "2WAsstbbq7sxtBGoTKK4EbGKCNMM783qJRh3z5bJfqf4rEthHRi7zoy6DuxioNqMNp8KRxPRH3CTrPDLuBtWSTPH",
  "key12": "4WextyueX8kjeJWU5kajdSrku36FHsDJQc5U5UxUrkMAZ62UWPnsfPk8fKrenjuUD6PpaLQuDmNAHCiGNfPRv7NQ",
  "key13": "21uxQVp16Z334EU4BWK2SVLWZCnqKAgVkzJU4qjxVoLZT6r48RfQWoFHRDcRRYjZScbP21z6E9TMrPtGcAAPWyyb",
  "key14": "3QDWmauo5RmJhfKjz4aD2avaVEFfCh9moPFao2vEMsoieRuapMybmTGG3UHpaYacdiwjPzPYGcNAVmV5N6StWSew",
  "key15": "agCDf8PrLW1ni8SjfbRtoaHfLoMkacCZLY4Hj3bpsF3piRkiXZzUKD7tzy8u6WjVdkqgvq7kbRcMsrb4sTn93Jy",
  "key16": "37RMVLDpTgLcHWEoEfyaP8Ajfukts3gXXzr2yfkmdvRcxbqitKXyWtae9SSKDN87HUrhsZ53my3oDFxqAeFMNFKV",
  "key17": "2XBRkEwZw1ovk1r99KvfSg7rSc2RcXasK1MamWkLT2JMiVdM74x5wgbuDKwyfzZCud3n8Wmc9vH9tsW733sMBpZf",
  "key18": "4GoRvVTZZFAbxdNBsk6tKEJif8MG2go3q8SKeFMN7iZd3A7rFVGpzeDAandCyK1nA3rMyvQD7YtAN3ktamMjcq5e",
  "key19": "4RtLX1r7xyavi2tNqfaDQaBsUizYyC1RHb7gSBoVALSVw16D5kCT7tmcrBj7oP2Ew6LRoumjKueJhPtfHR8mybvi",
  "key20": "4AJvoPpG7G3u7MTSQD1CpZaEV3RcnmxiGgNwZ6bAvsHTynLCVbFmdn1pD4GnribAwGzBHmuK6G2JgyXbxWzwv6XR",
  "key21": "4TRJXGbqBPEVVgGmK1Jo893bHJnC6UmZA12gvMZBfMHSUWzRFZtn6zGygFhVx5EnQ4dXMWTpiGurN3Wi4d2a2X2m",
  "key22": "2fpoDmtjW7uDTecQesxniaVDzh5sDtLFFjwFV22NB8X76e1yAtLhw7kAFsfsdmni8xWdSs9CG8yX5q2Pk68cBATj",
  "key23": "4D4u5nPeRiiB4xj1bwY67XQzVCQ1z21aRopYmALKx2WzUVPVsQTBBq75MSYgpYE8s7pvzMhqi8GNVsVsLbWW4C5w",
  "key24": "4xqtbrMbqePbLNWESE6eYoFm2SQnSPqhoRhRLnTPtbha2ex5qaEmkautPywyqg8jm4NeHKhxrM2vJKQNc8Syac2",
  "key25": "hDbC6cuMQZUrbQ1yjkZug7SVyJTiNCUtXUyL1nPYVrxszsF6FLZp9ydeNUqn6yRh4yBEfnMRMULaJUeaphK6EyH",
  "key26": "4taCFU4CxeWHqd2GMxJxYsh1htopM291eje6tuKSojKgcp6cehyGzX8NrxBRrXBV4oyxsQQn5V1UiisJWJoGW5EB",
  "key27": "4xEqoxquzCuaMPPM1mo1dmYQ68t9Sbsh2G1jS6dESLce3VH5mJDMQ1WYZXXxgDL6zXd9HvkDBEC6Qe3iePs96G96",
  "key28": "3uQ5rrdzkBV2NwSBsnQPcbc5JhcjCPkwyhTayspMPp4N68dZV9vxRDRD3iPYMKNqsT7Knz3F6PW2s7YiLRzn2YJU",
  "key29": "3arTcHUUMDVosVhghGsF7r8PnMGALiKEJferXeLpMpR7A11LvRwGqXtU6zPLc62ndetHCksmJdbsF5a5SpetRpPm",
  "key30": "2W4ipH9UiRi45QDcKncbJpTM8viFNn9PG6cdegKeetut88zkCm3yzQLkXCG29j7R1ZrFsLsFwQ8DpZFWo4vk4xp8",
  "key31": "3PnGnSsajwncTkvofKPjCz4mVN15WeD3rrF2ih3TG9uadWb7NBsg8iX8FcjLwQhyUtoyJp677H9e6tZyGwCKJBsh",
  "key32": "2MPcVHcUbALx8fXM2JDDRwYPttLfNTWVXTM2CnukBdwZPKU2C7Z2mvHd1iietQsrEEKV7sUpQsWQNxSHa59LGgE2",
  "key33": "3UQ2HBeFsJe5vS3zUxJMQcGv738UQY7HjYqRyqDY8yxpvFtnJtSaWUXuNWGovMYxcCLDAS1oFYyV8kfnRvRVthJc",
  "key34": "5imyEYT6QWWSL47HRxEkvVkA1pXcwKuutBFFoCx4PkDAZgEUnPzkcDjrLrtkaiyoUCEzwr64TMg1LFnvcdxvo4N",
  "key35": "3PWg3atMb8BJThw7pgmXDyvVU22iooiH3aK8LfnrP5p6g3TXsdyjF5sk41F9pJoVFkWcnPHHCfW4hWSBgrNVc3vh",
  "key36": "66x4F24iQS8TffE5RRW9jT2ChFfohW8pG11ug3R1djwz6T17NFA1smGqFz2TehAUPt6TfNaNgn1WqKw9GfUvrUju",
  "key37": "XeMVakoQm6mv8SHR7gVRjmg2pEgNQ1dFo23DhPc1e5mj1Ui2U3h8UUXbjHuSQ2wLc3EKEWVsSmQigxr4X6Wu9Tj",
  "key38": "35wBaAkFhLGKEviRTfVdnf81Ua8PDY3PmowaF6eaQrsgSAsRj4ygWQ6oPWVvosHZW1ZWoSS8nidxFTHSc64iFxyq",
  "key39": "2e5hCmqQBvo8feVQk8tnHLUttYTjuJH8c1MXRC6U2VF6UAHGdQLU8t396VNXrkvv3z52rpgHKUMxsVmi4VAvrn5B",
  "key40": "3EfQKNEKnNgs7TLWcjF8nNP6ZPEva12ey9nHUkqKn6NAK6vfP3SjKY5uj3f6onrewPAwm9YHLGWUFJZR1xCYDT4j",
  "key41": "4oEvD78LGskzeV7HpjBC1F2G1nCNwJN5G4SAkGDDk4rK5vHXN3y3Tg35hchZiu6g8SiYweMRASHNxk9ja3NCgfY9",
  "key42": "2ARNPLTuj9NUVuhdQM88oH9Nk83ffFKU7Rt1aTuVg6FGXbQuA8R8dT4iWoobk91zAhP2QMxKjRamDfq9WMuzXJLH",
  "key43": "4xh1ypCh8DKj6xZsWtnMpWLY5gxjnrRVnPsW7tqrry13ddU79pGawLZBsW5eib3aQyUmAuqFGmZk4PveRw1TBCow",
  "key44": "5bKbHhNFuirFxyQfCDWzSmNhWCKqd6KuRpPUF5Dmuyk9TSnMN5o2Qrye4N3NfFB6BZY1TQbHJoNyu2wXfVGQb1A4",
  "key45": "4sVpy768rsGUZGB1xMQoVfYRXM4m4NFHKXbS4LRPogVQK6KzENGnJ9CYbBZsbCgCFRx8Em1jKidYN1UVkyngu9iQ",
  "key46": "4ZUSNtpiGnEfmxucYrenuACesPJMo4KJzEWMGdTkNa7L5iR98NhLYKfKiKgJDBVhwnyMJGhcdxT87LEkj5jqoCvJ",
  "key47": "44NjsuH62Yg4EL2xNhBoPh7BF8XCEvi7BhsZfaP9P4UbKBfwaHKVyVwUsgW8R1GBqYxTd8Rk72HhurDTfivMDzJR",
  "key48": "4XHnLdUJM64KZE9uByFeAjPUkoYAjJFC8TxMcGqwwHWrQb2EokE6Gh4T9VudMhqkQt8WSCV5JxM4xULXTXirZBGq"
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
