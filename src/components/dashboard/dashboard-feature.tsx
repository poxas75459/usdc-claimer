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
    "21MzPSxXC3keAF1YPmMxh6sSWA8YBog5chhHgr9rHQPGPcgPGNV5Hmdcr2RU3E5dnNb4mCesyAH4d44TpHPUJnTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ca6dw12FTC8t7CHBEEKUPmCpVHKM3A6s4RZAZopRhk1gm9zA6JwBiXWUtzK6LKKrXcHoaXYbKDv1MAkTXSELTJx",
  "key1": "4EjCUGuW7wMNupDjumvM23souK7AFV4VwuPvNTckXwXfnbEkpg76e7z4ZnWRthS5ooELLv28fV6dXQPpUzzuhKwJ",
  "key2": "2k8MCA7yz1f3urTMUuXTph9Zb4xQyBvefTejbUtXzixFJBpvvb7R4ncFQgYn4uwn48bzEpBbvoJi3QzQjG1xMSx1",
  "key3": "HYTnFbRfUAqR4ACVP2GSyUfRbrcy5ff47BV6SkPFCXaqTuAeyNz5fCWmXRCCbh1C4CjtChGcsA1jZuxLt7jo56B",
  "key4": "3ujCjCfg3mdUSNQYo897VAWWMfc1yaPApFRf4u6HJEvYNr15bQRAzx5xcE7REbFe9SHHXq97FGAub6CmvdmH7UFK",
  "key5": "4DYVu4ZWwXaRbzwFXML3ma1ctwSd8XK7u5pN1QqwrGyUvFM31KmmDAXEWkFU3SrRZjQTq7UWvTAJDvjPdmwEU4BJ",
  "key6": "3Wr2Lo5iu8PtNSp3ph7YmQ2GYDD8cLY93EpwRXSzJJYPXqe2FWEWxPSZebw31sqfg1Ufw8KqiWDzvkw17HVTqfyW",
  "key7": "5SvbC7N4rwVKAEc5XeGGr9as1KgAZCef6riCV8k4hNsuNcyVXkR4fmFM8oSYbUBtKWbHDvUgcSA5SzmqXf69y2JS",
  "key8": "3mrUs5eW9n7ArqnNpBRuN3ERL1T2yUhVkRz5siYuyj5QJa4ajkBJ2eThh4FBZ3ZjsGXZ8Zv8PyjFJ3QSFfM1AdAV",
  "key9": "45HnkwScj92dxmot868jSaAK7qNRmVq9EEkqZHaYDf5CEoosjya8to2ox2mtnhMtVdFPHhDA5VXcigvWkg6dLqrr",
  "key10": "5U3G2cfeZYSiAgiLSZio5jcMsDtGvPdAq9ciKGzWPpkfFmih9F4qo5p9xyYTsMnqBHXqwq1mafoTVdDGg4E2f1tN",
  "key11": "Jab24GmTsJYHonM31dVobCH8oxvt26s6hADcdWsitTR4fJzhvUeeseS9rAx9sbm6j8sN1mmdJCpA6bg65zpvpkm",
  "key12": "MGLq6BuFvbPaFHDpJCxpZQ7VkgBEAH3ZqKLEUBrdVkfNiuFoRT5PSYePM9C4T1nSi9Xjvwgi71FdTzK81JTj3rr",
  "key13": "5tUJEzgdCFcnvnVbs2TncYdMFywLqKNV5FXLaod1vWvHxZzD8zBpzt6vx1AMjfH3dhYxpmVekfhfQibXydqyM3yy",
  "key14": "2v2gnon8a5GJEaK1TnARV1dnu6xNpqBLeELag3NSTnANcqu19grUeL9Jdg4NgxW5cfGvSzDnwqZwdK1ouRMezVrV",
  "key15": "3PWFhNk2PmWQqGA2jRpfBQUkzGHpLwE7Ed7tBfxaAmJ1ZxK4wdGsb7d4wRVigQgzUXYCBcLX3GSHi8wfbsMp53Mb",
  "key16": "248CseZFcqE5eqi3aHRQgxuDzkSMD24sBkf2pkAgUuA6hTTSpa4UB3qouwDwEBS4cLTCABjp7jURhdLQPBmGHh4g",
  "key17": "4rjEViq3bTDfqe9UtDNTrhQfpo8XndXkNyFycXLiPoZ3pr4x4J4GbrRrZb45XoNDgVXMnKn3zkdpRxccyn7AYLew",
  "key18": "2hJPmHdnr3CnGiWXbkbfBDfntEsCgMgeHZuzMPDeH1q8Xn5VAuib3uV1Gc9N6CubBVns13r58eiYYzNoRhytcVQo",
  "key19": "4it59kHdMSLKSfLnQr6n3L2Apo5oKpvhKpHZjLTWmjSyF79woSeRQdjnLYuNWufpgrkjMZ4bwSysozQ3MZKf64Jq",
  "key20": "5z48pbAai7SnfUvxLscfbuBKJZQC9EAS2kakgEFci8EpgwVaMKqJfALjay8akXGfQhSgqCE2LLDYLcyCsd3dDgb8",
  "key21": "5A64dA63bi21rEJDN1KFSgSD7SPtzpUZ7fkHPPpqp4U6xhoQ69vpCsfuSsbaSsT2KjGy7mkNz2qx1DJMFpLHpwPp",
  "key22": "4XQVq6dfdDqG9xFZMmUkp8TVB8MPrNx9RuiYnttgT9f8ipCWKDTtNP8S6GEYgA1HYCjHwrzbjCcu21E1RiVpP76o",
  "key23": "21DdPLsBPxDv781wvTRHZk9qdiSzb3YKG5MEogxjRfF6LVKQhsjmmt9XrmN22utMrCPvCRuHQqL3s2o1S3gb1DYt",
  "key24": "Ti96czpbboAugEMsvHNeLC8o28RqD8NkcS44RU3K6R8fZW9Np3k1kMo6HXHzZMo5H9MzyoF5n7wLmkB2Jxr1nAi",
  "key25": "5UwFDyeXynvQ2u9uaTUZUhnfGDe3hge84XmkFK4QGpBCo7m4SG7bgT5opPYD3frDCFMJoXedmwQfeqEvPNhGKThp",
  "key26": "4UKKogieQZhjkrPVqejhsGyvHdmRahxdXPhE4DzneCBfaZwDGwfBRvvLTJWH54FVHsK7tx3A6NqMfrp8rssQj9UY",
  "key27": "ajWLScrienmNMDvdEQSJcN4Xa8qcDk3UA71xchjWcaH1E9BWtR8xLACMWzHAMFbfr8aMuA4iGes1jtCbVWmVKB5",
  "key28": "5cEegCiFecTPRQQWtW2iSPJcDzhSrK1c4PZzeKBs8EPK9mUEvEZxadvJQZf85iC6Jym3135a5oLspzvRq8yaZFEa",
  "key29": "4HED9pptU9RLFpPXFmjoyhpiRswXMNaMbTgfE1JtUU3zmnbyyUoecvdgM6a59iHgfjK1BsGP58uMrxtPAzFiv1Mj",
  "key30": "5gExnF1bvHx9WGCzmuUt2bSZnzS8H827jd8jKEcYQ1tZgaTyuA34yVvXYbfk4DqUZCMtXcfGvEbJXY6BH5dkKm5W",
  "key31": "zEf5EndyoUKUs25Q7Y1gZQo8XSXPvf9auyQvXa8oWRFBv4zGT3zJ97WubLmDaoJBHPwFaEVca49GpFJxA1Sfjrk",
  "key32": "bWdZdL12f7qMzWGmvyL2yejWSdWFrpu56JeRojH7uyFkComK7ykzWZEVyMWTefmVfLWNiyLXDK7SBpHYH1MB7Fn",
  "key33": "3K6C89q8M8eMH46qMpsvZfdV2PzZMvbgVHVFNq1rQsapR9Y9xRZBtFMZ6BpWySdeN3jBSqpqMeXU7qC7JUbdeFAA",
  "key34": "NTVjNbKew3ryxN8CDBQzuWLwRZiFXGUEFwvdyLazWPZzNFBkSU7jnsG3srtSUaCRr8XLgu6JUgrbDA51MkgjpFk",
  "key35": "2MfkodTn4vc2y98XUeQvSjbd7kZM3gGMmTcdW8ea4moiuT9HWn1xLQrukgeXJXHdgWWRLKofZwHC9FW4dKuuA7jq",
  "key36": "3k8kmp9QKTrKShRZJpkhFtko1Rhazo6HVRmWXQtexKs5XbcPJpdz7aWUymYrru7V36ZVxUpAsvVPPeWZ4vwizd88",
  "key37": "4e4erqmiSsn68NJ28MFBeEoqDA1cvnip1jxfmsB3rvLrrBfHcWpfen1rqCDiAjxCUobRvU2FUNWEAr53e6ML6Z4n",
  "key38": "vjHhZRhvgzuZ2J2eun6vLTuEypPrE4XsJajMkDwhbykAVmp7HzziJuo3h47EMSruZuGUEjv9xYemJWNx4EfTKvQ",
  "key39": "nVBh8hSodntkPYSwd24CEfcmrFETrU9JVcQxiahhap1is2FT29dqU3tcDBe1fy7E1LqQykJVSaJTEKRm4Az4efs",
  "key40": "51PhRGoqayaPa2Z555t2vaqyxLb7CnX9P3h6PJaf79GRFQYNiJee84Ggmkq5saRD8LtVomydNXmmieK3R1WoF8zt",
  "key41": "2fByU77X8xeAr5SdcJXsUv2nT4w86sU1VTcQGeE38MM4TBqRue7WNWkd2C9Z11rJpwvCyb7BJgfo6jNF1TZwu76D",
  "key42": "49XSSz723Fv72BRUYHUZRuNfVEp4eoWGjkuau6YVXvdXF71KgTxuz9PBA3g43H9ZUdUAWSWT8tQvwj6G22KLygT7",
  "key43": "eF5We89V4wG2UxoDwWfCuhn7Tv1Jep8DiPVhmgoXzhWivksqSHw7GMNqgPannUi7oUCgc6MSg6UsBNaEmaA56Ts",
  "key44": "5rkqEzHQjy2rf4FzbwJSW4ypt6omB8w7rmrjQd1pDxcj8JMMPNYeBXwsza94zJpm8Akcd1UTgNuoPsM54XZ2i4Nj",
  "key45": "4qwuMX6qEt2ATUViZsKESExzuJzgsagMpcyDAZK7uNN3PMpJ4LxNXbUVdwemSNA1mdaXs5atsbzhWACGAY9TefkX",
  "key46": "3sjz1FPgPCyV9uVHdEgdpFv6H8uYAfkV5cLHk7z2cSb9QCbm9ttSQz2bhceFWRFw9n2TEijqbFxsxAdUJ4NqdYwA",
  "key47": "4GBwd4okxz3ZLgiL4roJ4GWnaMWcRvaZJPzEyBkQhkoJzPahGh1gLH5EztEwEDqFEFoQdU3HqGHDC7jiMUWsGHMJ",
  "key48": "2doAbukmMoj5DsAYSg7ibe9JhFZhdLBSG1mu94ugAnN7TEbt7DnmMwvNwexBwSbWuFDRYdsP7FyLfaunfWwAUZ9d"
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
