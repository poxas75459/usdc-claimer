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
    "2Sh83ydWcHzT3BNs1TNFEJLDiaHTizibWVqp3rFJ4hybKPywL2hRXA1AycBr9eyxeNAL1tPjvTvcb1pguprjHJDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YfYdXJnMwVtMzDUaBWFmCMrR5Cx91HCduzk1etaxe2ru1saLpZ6ojBeZSDPMJtKicXYVnrL6wC1QuuUC86XmKzw",
  "key1": "J6XEkQzUEtg6LisqTFbD2cggV8E4XLXT4HcPDBWSBRom4DYtUWvYD7o6yB3yjeyoWqRz8bNJfXqgpXEgUoW8YJx",
  "key2": "5kVWGjx9EHCYyjq14cPR2TvgeZmEPH9kVdQ8uvWQMah2g6Tv4qhZRAx4PUff3g2yT9pRgGBxLwPmXwqmPd9B5dSM",
  "key3": "3itZdMcVEZKJnTaa8NSSQCky9wnKVJ9yfjXaqM5kesFEXBVvr1WzPzehePc7didnAp8VRmrvfi2RSkLD9rGSEb7m",
  "key4": "5RdjBpeTTGbk8o6mmN19LymoZTShCEj83fKVJcmGPffcEJZusvh6y1GqdyBkZGrFMtMqzDzwFyFCt955Y2Yqb1V9",
  "key5": "4YMHzhGZ1vYmBoqUyvjxm79Tn1PLe7DFbsr7XhYVPpEqKLfwaGfwivcduRiJ2hcyqvdZqMznNuEf6YXtWtGMStij",
  "key6": "4X2qhLQV2qwZeV42uCisLaWp2amRqgTKgMdjv6JZ96AzurEvTCLF11oMcbJ6vvaL42H6TRoACwFBSAdwq8C6qDjN",
  "key7": "3KuHQixtaTxzELRvcLzXYG8tS3iYocWpTTFjhVeaNfz3iT2xkNVUt3L6o44r2kEYJGYJ7EeemZEcU2vgJt6f3SYe",
  "key8": "MjQ4hsdFUzGTeSUL3AV5aGnZLPxjvkkypJVT81N2Xt9ioidVwkmLgTTdoGCnPaJApTpabWzK1uVmixkq6umG4tu",
  "key9": "3eU1jdTfhTP53tTPik2YXVtFK6ibdz2cGUsmUyMppr4MhzXsC9gRzw2JMnUVzdN2GM3EKoeFpWBnm54QWz4wyM3L",
  "key10": "3p6fLU6U5fwMQcYSejSPfdr8fCLg34VUENVFWB1W4Vuzt7A2383fgWwJzNYVwpyM1FBFQzwJ59jq87XoM5fhjfdB",
  "key11": "3f5NcmcPFccbYrSnVfE7BXxbt7ztc1XBMASJij98EqvKoZ8YuPDckQmzqYwzyX3XmC6ghZRPg6Y3zXi3q7WKFfYF",
  "key12": "2btsfxEAPMpnsZJ275SZK4BrKqDnT7RBJsaV1p8DvtckKgpKyV5KZE2h6xupDT9igC1wRrnvUmK4ABFXLG4sSVrW",
  "key13": "W6qksysdogm4KUcAyN29DEcHPYDyTjBtUw4o8Wmr66Bf3N8w6zVvL2yDDij2yDFPM2JiqHFV1R6Pz69T489mSBn",
  "key14": "2WUEXfDdHBWPqMbsQTmeREFQDRFVLzEdSxvC91iewDVJXJS8jF7V6U8xB8ZLfd9qWEFddDcsqzxRR7KzwL7KpMtJ",
  "key15": "5GTZb4hwhmw8kNKHEVnSsBt5h3pbacJbDwMJCD7ti821D2uMLtiKFrUa8un2D4Z8ABqzQhBRZ6XQqnfnozEUKA7P",
  "key16": "23Ye8vXPWR57pE5co4FW3StxNdDkpkDbpm7VupAZKr1cxB3TeSa7p3v77VbMDMZN3iWdmVsWXsdEcctSYqM7qVcW",
  "key17": "3ShLQYLhrSbG1cs2k9dm7r3CSmW78DQW2Qc1JNhKBUye9DaSD3EKmfaSDRURLqA5z56JSh8FmpAEmsraFGxxPPDo",
  "key18": "5npFdLd9rVsUj1zthtYaRRYGor8ByEgJoxf7HZHvWynYn2AGKxED1TgNuNr4LpHGLw3qxqGrPE7odxprbX5xh8HH",
  "key19": "3roZdc7LSdAFd5P9mrXQLCPNR69TTTXr9RVFzd3EhBNNvctzvB1MJ35To8sH9dwu2sgCM7CHq3824ZBzuF2WjDkY",
  "key20": "58QDTg9RYGHU8djbAVaqHxcH8kirLxju2EsqmdNScsA6hRxepjXGj9KTW9ovdiKEd4HSGfoUSdEUPkwJbcQotWfD",
  "key21": "5BPeRW9JWoG4encKqsKevUmcjuPmuoVmbRL8VJxGbU3Dk1JndYyfqarJfmURAY2g4RcdysBTSGoUvJHGbxgaXVZh",
  "key22": "476Sszhur5NbC195GRFbHZF8MChQ5KdeordmuYvC456FCrTn1zGe3dPSNbiWDjNUWiFU7PycJbVaxEnVoeJttzz3",
  "key23": "3jYJNTaZkW4Jp4GE7LAh5RvdWMFDqt5L25hnaP1TMtdHsfGma4a2jJEs9PWqhiaChgpX56sXU6sihSF8jCi7e7MP",
  "key24": "5y3ijdjZmQjpLTSyr5YHfyMb7zhchFgRVLcghVau4iGhdQsKy6MD6kfsUQpMtaBZxriL8Vm5ManbHfz9KcFrhcRZ",
  "key25": "65qZu5xvpEovLbWpJhVWTsF6XxpB3emy1iSPzEfNmzLpBVnqwmD4QA6jhoFQkxQvCkAMAu4TNz64wmw8S89wf2sn",
  "key26": "5b45gPL32gX5itGBpdf4wXEtCnVN3kkgRQadBbF6X5KrokCiLA2ybzztNQmYXUcLKNcpuu2e5vQqbkEtxc91YD6X",
  "key27": "2qDHLjRCGWywmv6jqvTsW17wgkW3WLdCvUwDNzyHqHkKr92GSsW1Z1QbRCFWnUzxCAdpK4PL5zi2Vmn19wZuNtgV",
  "key28": "4RXPcc9yzaAFMQLC4Q3ipfWcXkpx92Yz5DWk9X7kbJxCFntAPaAHBPAK78eimfyJsYEJuh5gns3AESXY6YceJjk8",
  "key29": "3UmjxT9XK5ke1oF34GB8QMaBiXkhBhWbM2bKcZsnoFfyXHd2ozpTrkmH5xPQKBvYj8tKWKqwfsTGqPSf6FVMmbiw",
  "key30": "cnd3w7CUwhBDyuSqYqbFa4kkmkg8VVTv14durtJz4osS2CM3Jv93QxnWzLZCChAQSuUEHrsZC7aJYGP5Ak7bqKq",
  "key31": "3cGK7GQ5tHBjveFPC5asiKTR91hDK8wXNtmVphTYAo16Qp7rVYFTYEmXB1NJxNwDBxxV8zECWn4ymMkGtjCPnSMy",
  "key32": "3GYSpUSmk8viRESuCAko2pSiw1XRjQ5rJqTvrtj8NaM3G5epRnMXdAodBBZD9bWcm2VgmSW6dD9jJNafxx5CyKY8",
  "key33": "5yrFhAwyMjpsfgFNK1uGmuKEV8wnUhvihhL3iGXPEMD2YGLKJuxzKhpCKTP5EFrdyc7aCK8SqnSrbESRAaV87TAt",
  "key34": "2nJXcDHPvkNx4akWMyNxDfxqeJrSUKnAJDcocFgUNHp9sV8nDaj9awTodp2jcYP8ehCtb4UJT3FQuZfVvzgK8N1E",
  "key35": "4mVpWQQ2iErjp6sja2kVq7Bn9YYkJXZVneouRenP3VY1GhDK5qN5NLPVjBBKBYC3Zz5sAukm3BPbZLdAcXnhu75i",
  "key36": "3E1qbLHGFjjWk5S7CDwW493YwbZzDDe8xmAmQweBo9GnaTcdFbRgsDZYUBVJzDHyeBV1o7eAotKxBXyTdLVZFXSd",
  "key37": "4PrkdFZyC8J8mzkkTjfTMCPFyBvvgtchFeqZrPVX6eApDgKCMNjBqWzBcMFv9xnQGUB4axhLithc9d5aPyt1mxkd",
  "key38": "4gG23xzdmju4SFDH389jGpaKP1BQVTssYUtMxV9Ns677zRNfgWpfEBr1Ny8dH6C6DvE8iYxBBayxKrf3sBjEnWw2",
  "key39": "21U6NbcrMNksrfiP9i1vRMuTchHgSKmugT14dhvWp2ck9THNxtZfifDvCRxAE31gLmTpgxndziw1FeBvHzzpHcvh",
  "key40": "2jK5nLbwphSMrqQFJyx3T4uFX5izo3665X5sZBccknVEwYHcMHXQCfCUfsfT2UqmrDQTSKDSt4poZaqEo3xLXQJU",
  "key41": "5pDr78jQUuvhhgQnDjeADeSCoVNUwoKJ5iDo5MMB7xz1ueWRMqRBAaptBdGseeGziY1ysQT9WUFb3W3q275YFBrn",
  "key42": "31ngneZJaMhdUW4FtkL2xeaVuyhY5BDT9pQi4Cj8SL3HhRiQc1MwJnxsJyJSFpNngeNXq6LodUTMcqg5SpueK7Ci"
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
