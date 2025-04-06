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
    "5c4wuV7R4XFDPL2iUYSBa86AzHbBwQDhQGwf3xr9uMi82NY5nydgkwba3VmYyJJZGYeg2GWTpsUTycYTW7sG1F2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TQBXrH58DHicaJwGndUnHTrRsCTdnthjGu29K9kthCBfSox6kRRuj7DqJmttnEFZeAujTb9aDoocBnnrzktNXgw",
  "key1": "5gUFFn6Aw4sD9qywoyBBbxoR1GLawSat44fgNRr2B4VVdrCBJ2nJfgYJpwBjaZ55Cjw2iDGRxfSPGf1x7oruXLKW",
  "key2": "5VcvBzWkboakhmZQ4KSzG4zyvmc1KCYe4cEGZ1MiYkMmf9Fg88pjZWkXkqnERRN5PgtecQ9mzJvCiuytkQ6yWs3y",
  "key3": "4wzhNzEjM2WLkz5gsMvTaXyyxiicFVbc94QUrj3DNC13yb1Q7QQ38CxSs9NkgeqBKZkntZzwWjSogWcH9Mpqyrf1",
  "key4": "5aJ2Wnw8JFpc3ScXzwuPCw3ikqJjdcuHcpfc2ytAr3koX3HFaDnmHwGo4SpeZ12xfw37wDRpGXkwurUPHigSGDJQ",
  "key5": "5psVEqGLxMaTBndWGo7w1YXfw55h66975XjkLQmWStJEubucrc56FbtmmFHGdQDsqb5U1KKvnq92FjtYMUXLQUtA",
  "key6": "5EPHeHj5FYg2guCGrYFbFn2k68RNyT3SxGkPQnqgEqh1ELYoUvLC7tW2MBZMRx39bNHoiUUDWDW67Fqau7of847P",
  "key7": "d5QPW92rdwiAv5eJHsY9uN6Y98eDdCCw7FscFNV7CixoXXMzGwSHRFUew5jCQ8mNL6Q1eVRZchZsAmTYqE3dwk3",
  "key8": "2K4Ln7jeNuV4rDXm6QtexMgDmkFeEG59bWtTcnKycct2NGg3HG3EsHZvrAn8yVFY7Q7Sver6KBazbheXraZ489uD",
  "key9": "4myWvvJkf6eLd61wnhfzA4ohoWSciVMafgtPKqgQyWNEhec5z4VdAt76D2xPDMZL3xFcWaFhbsX3mvn4PXhtFaj7",
  "key10": "4Wg1ivHZS6FWZR6P7R7GwUzkFnuwkcjemTRakb5e3JgYnAk4fkPSbfZsUqUkUV1KmZoMr1sMgs1XaSiN4pMgbqUh",
  "key11": "2dq59cCp3Yrj7WHWjVxeNs2f93Wr5ersAUZjqGvsDQ5pYqHgpovgt4h87d324bhuByLc4fqKa8voCKfGbRomefsT",
  "key12": "4sathmW6vjH3tpvYqtsXSraHSxmn5PctfDzzo7ZizKZ8LbxRFq4uFQCoMqK3LmvH3tAFwpd5h65pwfcLeNz9PF9B",
  "key13": "3Db6VQ1poUPotqu5RGsH2aHyxDQe5CggnLPnJQjQ74XuSSrsCC9pUPnTCyEfppK3xPH67sFPCGwqiFCr7aCW8tRy",
  "key14": "3r1YRCkkeSmzuSE5JaQpu2231fu6A523CX6Qmx9cdE6dtXd2Vrr38dk2g1F5pyUznTqZNNFTeoaNVjMgQ9HmrHiq",
  "key15": "5srkDEJgKMsS6hRoDpjgL6sSVG7AL3zvsPFh1UHdEKFtFuwjN4t6K35dWjMzu3fXPmormryWT3Q387DyPbpgTrQ3",
  "key16": "54TpTrCmdrcEzZjtUJCMSe9NiookkCDEhiSyifVLxfwrKoVhP2krCMJnMnmmUdSiUYy8iZJtAMdGMaQtNjE2thQZ",
  "key17": "23Au8z4Y5KNDuA6Vq8cur5ZDyZ53yoKTiERiopE2nfz467nxsaUYasjPsJuBxBWbSuu8vwmFzsisVNPEHgeFzoXg",
  "key18": "3tYkj8SQhTrf8pa7hZscuvQw2urVcoLL9iuvBkkU1dEdvQDeyjRdcXZAWW9NS1R2iiPTKSCiJjnkd1PtiioQdzyg",
  "key19": "5iHpUvT2tqNYkaZdMNeyEhKdrEpiksTczJSn4TsHvwRjcDmNNtmrJX5EHWu2okoRNwUCue5Mg172ez4zEwmNaRLy",
  "key20": "3EmSEZhkpe6bEgz6BdCgiTygLkFQK2h5esdPYzvCjqVcfsvi7JZb7bmCTfokZVahsvFzu2Cwu4g6Apyrn4LwVLiy",
  "key21": "biD3Cw4X832hFMa5fJTXQETwdRNXSQg1xnABxB7rT867b27JHam32Qu3Vom61NdUPcP98BQAS4D1BPiUSqkoUji",
  "key22": "2Q2kznT74HcziCUfnKu7iCMNaYrt4wZJzs2FeWLYGncLot9DE9PWvJvUmSb26iF1A2ZPewF8aGz4b7VovUPS9yaD",
  "key23": "d7HQAGKGHdpK686XTDihEJ6wCSKTVmMfk59RZ5JdoWdmC8hgo5ymyRdcm6yZUS3h7sHUKQZqqb2rtMYYjm9w8qX",
  "key24": "2WEbJ2RgzMP7onS1FX1kxEeV35awJHWu4K8YSLJq1JoJ5e22aEajiZ53GKAXspR4pQH5Do8YeGLnpuGgWPL5WicG",
  "key25": "ZuSykrWcHCeD3rkKn6NeayvwGX8grva6YfRt5KFMsBDkA9DpvNUz5EXFLbfWpKw7T42kdvcr5QCnb6LwDnS8n1n",
  "key26": "2jmAQM6WbqB49fJud5244DnoprfWARuWTHuRbyxjmoAV4mbMrncttUbHhNfaY6pPQeDcfUKQa8B3pZwtpn4iipTb",
  "key27": "5TDCRzj6UVBwrW3GGiThgpq99TzgnWuhLM6MjwL2BUg8ZFs5e2iAfJjvNafmxgacTAL15k1KR7rNNJqZteE7HHKD",
  "key28": "5EsrqKKFi24LsCt2XC5aCPujMmhNnnT79f3aWDZrBkC5SvYBLk59FdrSeJb2PaveomMPWDUsYtfsDfmEhnoFDezp",
  "key29": "5TqyPnYxZAB7L2F8oiiUya8gfD4B7rwqRzbmrCQ6ZijwuphxWx3LSUYLhLkbZqDeCdpESsiKR59RT91hjhU5gQsk",
  "key30": "3SA8W6oqGdobpLXWNGW8g7EPkwpkeXkRefhYnur49sRjSn4tGro92V9mjirZj92qsSRU6Qs44pnxjeAxzXesZpup",
  "key31": "5LfQstALMXug6dnrm7BVwc2VL6mzsd8adzHMDiaE1w7NqS7MT1VvecJpBP2FUYYUwskJWBCN5TiCPdsNwn5Yht4D",
  "key32": "4jNSd9bxPoNpvjeciarPtPb4syfhCrANkAAWZeZ92F5rYzfbEsbavq6hw7z4Vr7SsbYXv6PSYu2ZS7tfB4mrAdt3",
  "key33": "4H4nmuGMGVDeMDQT95dFi1CrFDGiVafya5QEch3ozpohTxq1e5G6NTGJdSJ5diTWVGLJA7r9jhL3xG9FXEpx7Y3J",
  "key34": "4KRnvGKRUjKk3T7Nvq449nYeMWgXFWkuLQDNquVVvUPEpeVtPEweARi5QV6SwbknTKmeJTX39bJ6gTVYb8CGMtoj",
  "key35": "5aDg37bSwjxVMdtthcKufQjmBiUPuEYwTpEhMiyc9pLj1JnNxwrRmjFXM3MxoHydgHLM6XdnBPGGphrn4fjtcvJn",
  "key36": "xSqBTSUhjwWLhXqdbQ2UgAcQv6Uz1zywbxxY5vPWGvMFw2mzfyesymUu1K6ycAHAEYTL3CUBspnrcknc6ZD8UuN",
  "key37": "372ZMN2vfuBWgZPYc4MjFoFRdefr6yoynAZzNwAzwctZztnC2yKnakYWRra66ATjyu3q2NxxyqMQZCCE7n1Fx4bP",
  "key38": "5YdS1RxUL4VcdRQmZMDQaU9jYQyGH8atsJPvj4wXswnbvQXg3FzbyvPBuybjmxwFnrDPFJ8e7BzhH7Mon2GazLmo",
  "key39": "SWNvYfHWvu4zzrqrCSzsKVvPmACca6jAo9Dcg2J1DBCzsFnGA6Pb5bmpESwSMtYEXxZzX68YWXgnzyTTBA8BELx",
  "key40": "63T8KjY93Vh3u2SuydLbiuBMKUodtJUDAtgy1PdpxLxpYWCkECcFktWZ2SxHubnWiKypVdfqhZ9tEd7Hej6hah5g",
  "key41": "3cLCAM4nr4jmAt9fjxrb5eCPRb8odFQcutTY5KhDTkLBcXyZCqFcmB6vVUBejTQWguBGa9RagQeham9XfbGg3arr",
  "key42": "3BycJkJfqQxPbn7nk4iW9cT9tNunMpgvUWEGB76H18bomedKj8earvnsUQYrFuMKFnJAAJcizZWpgFSXir82MGHd",
  "key43": "34qVo4cFvsD5HMumPbKqUa4QWQKJqoeChNpujqEmKJqiXfG1wUD7ALtwGvYHNPczL6f2cJYfdidinVMQ7SwVQ8H5",
  "key44": "5MBU9Gjz5bDQNJMnGQABd6pGXN5aGtPb9iBYAv4beHUDUkWGerXYURHdTCyu7cwgmidBqds8SfqiBWKDJpT5NkXy",
  "key45": "43z9RszEy9HPbDT4wukUkSHeHiJvQCb9H4sacBn1qfvAmvKRXy6vW5svBCzaNDzFQyYkJ6Hgbp71rM3z8CSLWeAG",
  "key46": "2RKoVVeFQWoMoLRjF41VTdchsRMnEUP3xSkSreCuomDTuhv57aYAp98hksGJz7wmK3koyy1GmvKA5sPb5FrZH2JP"
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
