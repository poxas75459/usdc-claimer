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
    "51CdYoSdRwNG8fGNNoAtBwyb4VM9vxuVP8zKit1G27ceSHzeuMWHKA2cgrXEo9AxVdWWN13hGWL9LR6GL84d5MtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "568wuX49s3eTUKF3er3RbomK9pqdvU9EcGDm8wS5oaCDCrXjYPQyUDpBasiQ5yMvF3dxtGLsVo5bSKZNphRppwhb",
  "key1": "HigGoZqTaHejKGqAm9XMJG9wcrSgksAi3B6jPyiUCmAvp3MEq1e8aCqJo4WyQhEnSz5nuMVJsuncFiUu321Va4W",
  "key2": "4spUZvuQzhJQNaw4kmn6ok678ZArzS3aYu1CPoaDy6eKhckFUxGoLkoB3ejZW8nwntAkYPFswLbDDR1rC19P4Jyk",
  "key3": "2fRzSP6QC3gs2syezXek9kyqLEcVNxXYTwSp2jGoZFUbZ7vWZhb1GY6i7wxYXLV5Mf96G7CQhpdNwKikYsnavwrk",
  "key4": "4CLSgDCTZprgb4CHVwHb8fNrwYVn41TNzmKHnQw5srhSA1QcDGRfHLr5xmxBWCjQDtt4Vc5W62zSvLj7kpFJtYjc",
  "key5": "3w1h7X8hc6578N66oDmsAWTUzDQqvbAV9wRRojLjfz8NnwAajMY1yizBiboE7tYKeEgxwDa8hiaVce2HzkvZRBMQ",
  "key6": "42Hkj3tbMcUvyS4XBMHGhcu2Jw7eqmzHiQzj3AEXm61b2d7kAFYeg6Zq1eNtee4VJGuPsump8SHUdSrtqvZLE1rB",
  "key7": "RrXot4i5xMXnNiCwnA2WQnqMJWstEWtZjZvyqg1T3mbvHeW1M2dzSPaHaRStGUuWz1kn23g8d6J8fyXNoPX1aZJ",
  "key8": "3Vkb2haXpYmsYgzEEntyTdXxo1dusaxPQXyzaSqzHfVzCa5S2R4KjfZwF3QcBpKaKGvDvfWGUsmcCSAcbcoceZqE",
  "key9": "3hNH1jvXz8ANmdxgVMW2Xm55cCqErRZuZqAW9zMtbMXzA7RQ26KfvbKmpwwcx39eDxoQ5aMmCwkp5qVahf158otH",
  "key10": "5GWJPMVHR1QhmzTui5FYZnXLaw9ojuLeJBgD7BV1R8h88XoEAV4us9EfC13CgqzKDJBT1R3s4nwPyGoJYBRd39c1",
  "key11": "3Ypm4qotECjx4yS3QKn1y8MxqbqLd7xfEHQ1bSZEGCfvtWK1aeTTG88hJLMwy8Wxttnzbmv3LbVtDrumNw4qGhPg",
  "key12": "3fn8LY4Qk88dvneAT8wexx5Pwg6jcs5xZAv2NGfuScK5UFHcskGHLZ8s4W37EJsaQS1DgWRPozDfKi5TAzMi79nW",
  "key13": "Gee2LNnk1vp13pXb3qrfJehusizo1tBfBdmgfirXozH1QdHyrodzQoHXLLH5Gi4VjpLrLNcWkvU3hG9bm6FhLbW",
  "key14": "5qQQCMdvF7RVzFZmDsQyP4mUpUjuz7hwPKSZpYcvNEh1Q15G5n6aGFZoTzQiUAndFucG2XcsSdbQFgPPUtn7bRKc",
  "key15": "2h6qjwnu2kNQexai2hURfhePfqL8eEotqBeYhkvpkvMcHhkdBruEMnVyYMz235fVSiczbGw8cF6RrdBZDkoicUsv",
  "key16": "3pEr8TNihhba8Tdp6Kub3UCLXK4P2oytHPquy1TfsgPX6MHaQCwCshi9WzjvB6bxP2MmJkgLzvMmf9Mbx9rc1To3",
  "key17": "2JgMSSaDCPaH3En5CBh7YgE9RHTdJ3Axk9eAKZFHCtxR8H14ytMGYHq7syM2w7DoWmoeToXhK8Et8jnd3FsKP8cr",
  "key18": "kGj8bBDMMeEF4DNARnS1BQMSRQMDY7YuhHoLwYujgZQxmeB5ZHMPcUfRMgkScQDtWpZgrNGopGGj5yqhE4tdfaH",
  "key19": "4khZ3fTve318hnQKKeDCafEv5MxEcvKAVgNYtssYyE5JxuRdUAKgxWyXoHdZTvSyeTXowKS5mXMUQzcouaP4MPHa",
  "key20": "2ncVZSTaUa1SrhgZCR3xTAG9U5geRXGNYj1XyR9cN1xkjLHDctzrk6vjH4nUncnX4yHhv9TntPqxoroqyXTjzEiz",
  "key21": "2rphNkbxjFQNwM3jYsvnKB8UeAMi998dRVL7yiezL8wtxNDFvph5rVStNxNphkpP54PTcu332DWBh8jTDdpBV5p",
  "key22": "2xPNm9Et4yYcHykkcTNYmwnQCoR6pNJjchseTcZSjNPHGa82ygG8J2esuSayr2RZrRLddWxXx8czTb4EcrauKz7d",
  "key23": "YV5cCQJN8w1Kmgm7yYpdFYynRsxK7PEdQkkNbXe5n32vTBXKJr7vRdRDgBcq6mYRhaUW8CAXNi5MWYxJdxUAbAm",
  "key24": "cMB35oBduKFFZ82Np3s4D2enoiRWFtBx8eYCTA6q8LsqPDyji5xd31TpFuhpchUbLWgc6ZvzaoZiDNckKyeeS97",
  "key25": "4w5FBH3YJGbUMqg59HK9dLsmEAwQkBEyzGF6KEMXzY13Z3NFCefWvqKgYyecgQbxkoqPsrm8gRy3TrkDvHR3Fjrc",
  "key26": "3uXnVRttPb1hgpgzMV9JfQdMfZmDJQDgqQDF6cQDMEBwu7Y6ACM64SatDREoR21UssQ1cckFu4oU2JQ6oHuqCezo",
  "key27": "2UbnmMwaYBsQM1PvAk5peWj7cawctAiqPMZgzaUEGNpozQ1beXUuhKAkdQSHF8ifg6gGPCyaQ4tw2ghDhyMCDwqq",
  "key28": "4akw87cwZPPQUguvRLBeFJKAK2uhKZtvV21FFMsz9WLirFX8ap4aHt8DTytPjhw3FKmVpyeFenzdoMmkZm3yuegh",
  "key29": "2WBjpHAKdt8vJzHQkSswypriueNgXPuHZXuhTFxRkr92MkkoM7qy4T59HKCp1XY3ojG1Pxkc5MX4zzmuVfn3y5np",
  "key30": "23hEsLS7ArEBAB2uFvxiJFntRhhYUDLbbkuw3rJvuqiGZCndNmkiZaSpPXyQH6eDn2YidkNTxLsZafYPAWioAUPr",
  "key31": "3R3utHbVTSpdbgSJnV4B3A9bw5wxyE4zC2YKcKBebGF73Q5LG5QUgpk3ncf2cLMCbphe3FLZ5o6c2VJD9Rokh1A9",
  "key32": "AL44YVtu9hn5V77PfU6hPStTEAZox7fqcY75Hpuz2ZDQJFLw3Vm1tbvQ4rVEj2vc1RpYtWVcrU6dXxyekAuv7t8",
  "key33": "4Ep5s82YMnA3uzVYQA1NqmLu3GTjMu2wQXin8qvSZo1rY9KzZjXnrJY6FevEFsTcK4ces6PbbuTkA7TgEAQiSuUR",
  "key34": "4Gaw5pttGwCYNAizBiHdL5CkKz8wtfeuRm4ygdAxkNuTxBQ2xF2dAFRde794JtB8jgTgExiqHBQzv7EPHa1PfBgt",
  "key35": "fCj6gMFksdHAraZs1PXMgS5jiJqZ69RaYLzLJ5yDbS8DRDuXEPsYjVCtwZbnng9vcy5h2PuCxbXuHQ8Ng7QDCeG",
  "key36": "4Ev4XnL5ySUA6vQQ6prBiysXK76R2gWiko5HX5RLXLWYkJMn9mzNE3cat1nqND9zKjZfvdukF7iieJV2sJk6qfx",
  "key37": "25M4xJKmVEFeEJ2L69PFUJETG3MaktmJTjmVpmiWHksCDmayxQ5qx2sCN8Ja2rLzpjfci31AYqAQy4cftTcuwvx9",
  "key38": "2ugoBvYSYicP57RKPURYqRMCTvW4qsCqPov6PxR7EBGMjRNC7tYhHj3N9jKCLVNFTBMDXSBVATZZ58TPHAE1MtzC",
  "key39": "3vyFDbk2xyW9f4SnXpiGqmgbqjndA6Tewr2HvBMEHmPyHimRTB1tmaK5V8EELGevRSUhQDKywp6V29khzdsqvhC3",
  "key40": "5vnia35fw68BZLoYNaqT7f57jb3DsUf4rBsL4DVn1xQjnYMVTPT779BVA2EbM4ogpeEwLgf5gHD7t8pptpPToPpk",
  "key41": "32dGHYrh7qF4SYMnqJ4g1czrZftAmokwWsLVFdwJHLePwy6xkhDbnD6tMYeYLoP926TrU4pLTgxrRP2w15Pef8qn",
  "key42": "3iFsoo1ZWeYc7S6SN8nPN9tX9hAMZvypMcAGZ8mV9WoYF65JzpTufpYPLfUqg8GKw8Akuce4eKNkGmiGdn62iqa5",
  "key43": "2S5jEwHW8HUvYozavMNzxhfp1opwFduSfxtWqPdcmVrQyGoye8y5PVYzqAYfPLRDu5tHLtFGvq12Lz4kZvyk7QLZ",
  "key44": "4dHRnzEPhPPAg68kGbtJoMJTj6njpmxZ9KGNAwxtjn35t1Z86LRmykJKaEnwMLhkXz7hM4xgoQNiciGEvebheYYC",
  "key45": "2JpSJ6W6GTxT4SQYrS2LktS3FS6LJPhderLM7xoF4rsmBnFZH4b1fWaph8efB8o5uxJbhvLxqBXQuEb9hF6G3YLi"
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
