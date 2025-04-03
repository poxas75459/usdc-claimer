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
    "2yhBKo2a5piU9W7gUUViVpcherz2Abb4kqM8j6kFmvB6oo6JwP5y8VQ6ZjvKc2EhNgDszAt2CCxk765Y17yfjLc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "huBfMe9m5EZdvBv8CcGYb26YUUYyHNJHqynRNy3ggjhJx3KTuDxsh1E8zVLsXkeD1zcZFpDbfZRtZoohT82xuG3",
  "key1": "2jpkaHoAn6JejEvgbu77VZryDZCQsdbtgYHHxFxybpKg3AtNDHWCqhMgvjJeRctTfg9L8HEUmgz34cMenbVE5JBL",
  "key2": "vwFTyPwzQ7zEeDL2jUwotU3KadbS8TJNW6E9rqVUxhtdRBv5crpPT4N643XzooxXUYyYDz6MHfoE3pkwrHM5bcT",
  "key3": "Y4qP9M3vtEHSHXLUhXtWC3t6iJpypKjypp4or9tPSgsYuXYpEJDLJ65RypZba9vdB7agsqrVUNDxuoHJvY2AGkX",
  "key4": "7FSL2U6gLVbqfUtLn8cjMCyU9EL4YRwegNiwUrfgQvugcJuP1eZcNWQTdpHym8o4e6CttCTzQhqamUNPEygJ8ER",
  "key5": "2d37qG14LGt9RwCco92vZfKvKan53ZY86cVcWNzmvJHYYhEP6ez4Ukcf7iW955TCcZZzFEhHHUKrogLPXCCJyXft",
  "key6": "4G6fsk59W4iQonK3Xm516YsrMNkqeyNHbzREjiKy1iQuDQbeDCsr7hgcVYmAEySPE5cWinRqqzPPFppduSxLqZ6g",
  "key7": "3gQjLRQKUTFmXi16YDGj3nhQqG4pM8MFEV6mWv7eo76Z8Wb4VhwznDNEi7CpzrSvgPkdP8AkuZi4rAN8Sk8Wte3t",
  "key8": "44CypuhRrop6EovynctP2jNcfE1Eqhu4x79MEPMP92UinDpjFCxTqxXYroXioxXToZWRDFJTq1EwvCvD6KxMACNY",
  "key9": "TWfinFe5EXYC7XEwKJUXKDYZca9TaMHHZp23JeCvstNLs69QUspya1fdBf4YQbzDdLtTpA7BFtAiCawf2j2HC1J",
  "key10": "2tQDx4UqyTwLbqVFr3gPFW4TYmk9MAEaiuR1L4WfbnxudUHTvmh8ADoHR51yMiGtzR9dQWV9jQ8wJeHBppvPAYX6",
  "key11": "5cChYeJK4p8JVzU3xEN7B4fXTWShrW8v56Myab5v8CuQi2HkBgLNbio3USuHBZXrM97s44DYh4FChpxphGPrjS8H",
  "key12": "3Y6iLAFPnEto9bfvBdTFChWHZ9ktQyb8vvy2s2hXWgF3uyN7iw5H1u8siZ612sVq4Y3wCyW3HpcgyVBMvqwZtmWR",
  "key13": "341JmsoyvMKR3raqaW7qvUWjrvT5T3qgVADJhj8JdcxPu14tRTmMukAwwQMSErD64GyktqCw8VUbfBjptczFThdY",
  "key14": "4CeYZ3VXgF3uuwLjHpYtzNS1r2U3cp6raYA7snwAehiuPM4zyXvms4LpKn12LRbm4KzzzfdJAcCwCz6LZkmogQE1",
  "key15": "n7B8gSqZEFdntPVWeFX2ZhyfjDMEox9V4XNrmi4eA4VsFY6nMxLxE59RM6hqL6a7p5BkBT9qp29Ja4GpMvJta51",
  "key16": "4MjK9uUCTUndzapo3koaeT3USkshjXKbTToJJPZ2Ev8HfMNDnRAjFAqWe32RQQjeyMiUsSvWohT1znSBuUAA6Y6A",
  "key17": "3gNxtL1YDnmTGbeqszCHA7dbH18zcj4SwqkESySmwSNbNr52KKtZEr32FbnHNuQMmVgqoS7edrDMB8u8nxa6LQ8u",
  "key18": "5Xfi2sf8nJgfyCiaWByfY2d1YPH3ExeeTKUrvgpHqx23fzMx5qXzdHzXyWdD25Zb5Wp1qiPd5PhFA1hNEti4QyqW",
  "key19": "5ACJgjgcyj2H1k1WkzSGigncXY68BegpL1Na6MBTL95dmw8reNhvQs68NHBfNxmfhHaX847jqfbhadz1TXHBJgz9",
  "key20": "SoLiraNNyMHV952NunXnuGFqABnv1jp9TqmuJzX32FrbfTxhg2rgWob5iPVoX6XWYHSzV875CfAwCT19wT9WJCy",
  "key21": "5BPZdDjcwqz2jSsorLwcV1oCCzzmR132oU6GeLrUCdJGV99q4PxWUj3YG5Heys78jNjN4tPk72rSLLJbvNowsNZH",
  "key22": "2R4qnYFiaAQZjH4ZdEDCRhu1csUNGnzwNBGYRoKPpHrTn2tzEkUn4FgxfguKzGbVRN6pHFRKqAzxLS7CqYcKU6UN",
  "key23": "3pQfmFqHevWh5cz6LSqDvZE6SsLiHhAWrYsnyH85aa44SiD3nQYeQETHxwYMhFca2GQytBiPYSLYKSGY1adkAnCZ",
  "key24": "T4nLP2SgDZBvu7uQcBF3B6buD4mgcesdXqB8ak1YpZ4CicwVFNTLPJ69rBYXFTba3C6AYxBSYkYT7eNSFPC6HuC",
  "key25": "5D5Q3ErDJTDmvZayyEZbk77TKTubVa716uXvpxneW379oifSbFZAn7EtQocWBKEG4hoXTiKV6b68evB1qTKMJ5yJ",
  "key26": "57kYH3NtrExK4BFkhPkuSvqXmVYJogPaE9oPFfkAueeLQHD1nhFe7JMpnHki1docT9ZhjvQUS84idqpqaeaZkhSg",
  "key27": "5tJHhW2gVFVKMLb35YbrcLSdNhnrDzZrsYVKWQ7JRqrxFa7bNzNvoG8udrkkgFFNkMVshUe79FTTuTqAPxbJCoa2",
  "key28": "4xurFMpZ2MFfJ2detVnUj3KgUECD91Sox7zYkuLhB2GiQ9W8f9Ct2EJKmPetRdzamwfp2zqfpB9mZunJAFRSEkab",
  "key29": "3aZXc57j4UWS7Twx36EU9W41PELSodAgWMWQoqFCLGf4385p8EiJ8HMwhieg7qk5mHntGTeNxFmPpN1D4DfxE9Sg",
  "key30": "3YGNK5Mc1u7vmRhwmYzs4NFfvkWGPRv5SGDivmsC8fzSBKstcwdejMRxAipSGTDNk3fLsPN4jvCzfAgEWsJxTNFQ",
  "key31": "UTHnEyQ8xCEthf7BP5agQjU38Xr4QrRNd49JDhxUZr7AkLoRYfpKbfD8DjPbZeMSMy94d2ydW7TVeCFWtFHazU4",
  "key32": "3Qc3N5N497ebHHV7ScDTy5TJFJ4npSYnuEK1xyzGwrRNzc5bpJ5bSrHTRZafaBHK2szgcNP7MARW6VEStrkjhRfh",
  "key33": "LCh23sBb7j3mAEF5ySZRt41c1TPPjEh1gnvQ2G2iGaNtFKULS4TnRuGYSCgTWCzpFe9Q1qs9u12vABfcZBuzDy7",
  "key34": "5MZ5fqALJyYoamyu5SW2DJyX8FfydRSXzBKD9HK41SiKWc8keEmz6rvzeqTu9h4HDVSsUxAjB174gJSt7gQcV4R",
  "key35": "4CiW9eNevGAX74cCForZSX8b886L1Rk5t8QS8on7KjtEEw5mgPj7B4CciKLktcUtvY7nxNwd3kUvLypjWv2skAbq",
  "key36": "5DKy9oSE1QVW7kE7dRaA7fqpujxgTucrzKuXxBNpsgrxBjrw8QMyhiYZfmfqBAEn5kY35TX69WRVoWcSU7hYb8SG",
  "key37": "5ee4JY6AqGVP946K4m5Bfjq7D3wM98CJBm8Rnd4MpQLQi8fMiwUzPkmJqjksoLDsKzXpRG9FA391m38rZHaTEpAv",
  "key38": "4Sm2MctdS7dvFDa26rf9ie2qR4LfEyZ6wWtaLTuDMnmZQLc4ASKtpPAQYQHBFYj2TnX6Q1DwY566TXLcmChLTDy3",
  "key39": "3DoxaTEimXpyZCGt2UHdmrcSC7LbHwEUaeXJDPV2wGMXFhzKv8NTodUa7ou5H9NFx26WiWkVcgXn8AmsDsnxy1TG",
  "key40": "5fgFpEp16H8NQrtG3UDecLqM1aYjAqW2avESY47a9qQYZEqRxRqLVcSNUBre4j3z58FgNR42uZp5Y7too6sV7Lqe",
  "key41": "2StTho1ZbejQ5PqehGGqAykwXpKp6aUc3bpH18QzdJuJcrxzrcX6KP9vsPtVY24RJtHavR5g5Vr6XYtpoiCwWe6i",
  "key42": "2ELLSPXUqe8VRg4Gibt8f8QQfSwFXRQAnZ4vEaTL8D6Pw4zTBVnfpWmVVc4gZkgjPQhvZwBTTJUf2jFpX6STDhTF",
  "key43": "3AbwtdtNoj3fkxGAhwZcx5q7Q8HvRLXMjRwDp1xaUS44mfYdo1AyaD8A6PG4ggNy1tkRVbMTSUnYWKPBdGWCKaDH",
  "key44": "25TjYKriRf9pEPxHi2ge5hQXiUhKFfXBRSuiKgj47xJv2rHDj44qsKCjFgvpy9N3rXfLhkdLjcTf4JpEFBJK93ft",
  "key45": "TGcX6a8PsJtjdeD1PFML1tf21obTAoJ2vfEQgZR1GDLzsgGrjzE2rjRYT3WyYEqtN9BuWpWua1WPBsrBimQbYj7",
  "key46": "45JeDqeog7CWP6zSwU91RvNDsLan6wveXknq8Ty6mtx6SK8jgWqN4m93Nhk5o5naNna1FJB9QoAaZBPBzfc9Hp25",
  "key47": "2fQqxED3J1yRd1ffcbnTLXT8CR2SrcrzQzCETWRuqgsAmDA9xqh7fLKQaCLwAEY3cgDEJChn2zs53mypEdcRSAhr"
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
