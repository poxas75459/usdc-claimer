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
    "2fNr3m7D5mfiKd6N3FWCGhwpfiXjco55ZamquCpda3vWwaEFDoxyp1qATSESraMwXqodsJkED97HtaB8VC7to7dL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h926v5u6GckmqiERW2Q8i6TfSxV6XGjB4pyZMhg72xeVycN3REkeG5iUT9YvmS2q42wYjyPtDcrMZxiiAC32Hw8",
  "key1": "2btiQDWVsCPJUNETnyrSsZan7kXCsVDZhmVfz1vhnhEwKXdwpjkZk2dz28FfmMF9Vzdakw4T6oWnbb62oyENJDdK",
  "key2": "2xWqsH8YvpyEvdUCPF9PHggkH1um5j7YFyuaxWR1qpXPszehSXCFpZnxU8wukPbP8oJ4K2Evu3L1bccBXASDv2oc",
  "key3": "4nEmutaNDpCTFGfWyRhf9XC9AcvxQFf731PSVyzsVm3TYTv1YkRWKBJbRY8hjtRZBEMPr7nWmnPqBqkWd9UV2Df7",
  "key4": "615TwfBeacbWcFixUrphHPPiPG8dnfxP63UGoG6eyAUpKHfH7iRxzufQVzrLTzU27Hrqq9R77mwib3hs1NWmyauH",
  "key5": "5dmbUdUKyy8ASNBfHqogpXzWuwqaSL4Aog2tZQMzR7u649VLheZq2H6Ejb8MKzkUSR6b8ZJpPSzqyMoeuntbu7UC",
  "key6": "5xLqbXsRDERrdPM4bN8jaj56h1M5N1q97kqc4qTXpL9jXPcrF3aWnrYw2gVTEbWy9a2nWJuXZxcK3PSwTpUGbEUj",
  "key7": "2BwRrKUSgtw8PvxzuGjKmvMczrKug1KoJMVBecNeounCxx9UoBXbDvmewbidQcqH8wNFUceA1Hvwwi5ziCfkz5Y4",
  "key8": "4FQr7iyfaoxJTjoGqKhLHVGeq8sXgekXWAZrxjaiu739ZCC2DpVDfhq49haXPaQ8pV1SQGonvLvjpCJ8jMjvaeeY",
  "key9": "3WVir8jgWhV21xTzUM2Axt8qenVCNf6MLT24E5FPqaqghyicZrFAr6Whw8cQScU1EG8SiHZPPe81t2Hzihos9WxQ",
  "key10": "3Nfm4Xt1ijvD1ijBsMrmyBV6LNNjuYeyuYejSiCXt5pA4ACaPZi9ypnaaXZhZKKAXmqfd1VKZSJputmC77bn1uof",
  "key11": "5xKbihpd7aysbApwv8ejUsi2qLwA9YGuSU8hpkH7uVF7bYGDng4sdtt2Xeoq5bzuQ2xQS4TrN27YFuBn3efdp2sU",
  "key12": "45czpA2oQfAjsvB3HeAtb62cTLcBrH64gvvLLJgkWFAMottBFFfT5mwEz7DVMR7CzGnJHk8TcY4s3zGBj2JcBgwh",
  "key13": "4E1Gp3KMazkE6Wkty37aH49FqDNPZnUoRwRdyLM6AZJBQPTqWnYcP3r5Kbq3kB3cXMeyhG9hiQU6Zg1XFYgo1iVG",
  "key14": "4zo1SivdXRMj122Cr5tmecShgoANRjwmwXufeHDNFgkoBSMd2xPAFmUjWMQXjnYoS1Ttse8Q84rjZRRpUmeKKU1z",
  "key15": "4huVJvz9JSsYeMnErxoN7VoDSXc1hEQ2GokzWzSKUyZEoPpDCPYyR86ReXg5aAFZ6M71NF7UDjUxyYG6142uEWQ7",
  "key16": "bKYKWshzYSzxkYhwraS8A2NgKdvTT5L5p8NTniSKZqQexseeKPbRmNj6gEUaDgNAMtYXzckEsaregD4k9PRkKQi",
  "key17": "2TzPsfJ8QuyvFxyKmzeYQTbDCFX8SeYi9mufzf3XwmpxzDMpxsvrPCBW4jzcK97HjzPTUJsZ3CzJRZvhYtwMJduX",
  "key18": "4Kw2oFmVLAGSKZi9oe4hKNN3PbqFB39GuTMxWxe4wRdAMngcQ8fiiR8m2uk4A1Y1WzNs44D2CpYZxiWW4Mb1Hc9q",
  "key19": "2Z7X15sY8hyec5fRq68BycjBfpK8d1niP2EhbCqKdGLSmWKU6N735PXzysCHKQsetoV2hwyJSmjrUYin1YPa8Wi1",
  "key20": "5qfXwX2THicJxom9CzncApotd9zy2mDnqErq29XJN5v6Xm7QVwDGXqkTguW7fQyg9vF1xoiLMex6ttJPjyKh3x4G",
  "key21": "28vS7TJzuubCrDq7v6TMeGoFutU1WKgyHDC2zeFEKLmN9EnoMzKc4J4cdsJGZjgsGvF5nQW7fTPk1JPK5B9djxmn",
  "key22": "4WSHLUvj3TzWXDXsQbucGHqK6qDhkv6bDg2bHTQdKrXEo41ue8Jx3H24uTnsauUduskhsBcx9jUpbk8QvHTidtop",
  "key23": "64ri3QztgCzR9qAWcnLhYkVXfbddAG22yG2F7Cu5ziSLKcWnjZHmjyKHRdyGPaUkGZzCdQEPBwqTWXXuJUJtCZ6z",
  "key24": "44Sh834WXJqDCsgeQWKUmRkFQhQYYXQfm7RwmJas68exccNvfhiWPbLLg77ZS2LmaBhpEgJnG12Bxfa7yPEMReDB",
  "key25": "4vvkvCv2Y5ijaoZj6MsbVRJByHpoJMD1v6LYXsWZghY7zQbs4XNkfQxMY8yeAdAeLiJYNZGvnqpqeE9fkwUbqtfT",
  "key26": "15ZkEuVumk7YedGwWCRnrcHH2WZdYYCwyzfbr6bmdHTFHUfDM7JXpsJZuP8Vdf9fYF1ZRd6aMSC138xmdDSWKu2",
  "key27": "57vt3miMyXQyEep7PqecLDrwK81y1g7SnH8WGKg3ZVSgWFP7XsvJLUmPLZhCrHGAsLouLVPeN5KZ2tWLjUWj8E6J",
  "key28": "3TVDhdp728JZ5BPzJnrh5FEGspSFLNQtvonPLkoqmn9eBhMSQ7s9zF1LDPnLhGFY5ohxyb3XV1G1AmPT3Acc8rsW",
  "key29": "3S43op5bRuN1Psb4uNUictpsj5Zv5izRFB8Z2ubsenerVZrReUUWiQ3Qss3mXncx2NtbE98MAKLXGoyyKWMnz8sb",
  "key30": "3AYqg68gx1f4x8xYfWAhvrSWLK5EoXaujJ56mGsNvVUpmoxX6LMf4dVmiNSuH9Le59ozX7yihmLjGukwtCHi3jxZ",
  "key31": "3aYEAF9GCxCaxR1bRzUzNwcdE1EWLyk6gHQwumw9u51QLji9F8sWXdPBh51DkMCMfgpaMJAGzad7cuVFvwVRa9mb",
  "key32": "5xVpLrUs7WEsHq3Q4cZDz52F8iELRf9yfyjZ8MNGrGR4LsLkAYtTepsFkD98VF15oh9iTCkRuuA1fQUiYWKEnqMd",
  "key33": "29mkcFRAhxVNC4iePSPnQjJ7hksiqfTD1fXbCD9UB9RHbw5UJTHEAT7rQQMnUQ9B8wwvr9wcMRvBJEUHcpBCuMMN",
  "key34": "3r99jaPUhrGatX4ntVNUDueNysXCquTkxYNQY757ye3oc19zFbFtVPtQ4ZX1XBV1NxxS4EkZVb14jrmBWhq6zUeK",
  "key35": "2TapL4KeQR6ytchFovgW9uigyy5MdtQDujVWd7Fuc4WA4g2SV267yPRvYakqUe4dByv8tV9aK59AYhVEa2SFGfQJ",
  "key36": "3eBHyoo8rqdZeiUve2ovjVt4P9Fdae3pUfb952KrnWpjgPGe6Do44gH2jDXbq2VKNejFTfE88aAYyzLNDrnmJzeR",
  "key37": "5t5AyFtT46r959pwWZan8StxRJU4Q3Ni7Yo5FB7iZUsf3aejVusLnsHiFcvbv1WBziYG2erscGwGKoFZ1rSA9Bka"
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
