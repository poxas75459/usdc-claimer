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
    "2iLP6ENrL1inQseCtegumX2AkxqqzynAMt7fpDqM5yZLCcgLx32wYeUj6wqydYbtuBaqJASiqPgRLhAFUgBpMcah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KGGf8p7fB4a3ea2QiK1Sy3Nuj3N8RTu2WCesgt5xGRydYNhEcundPDozwC37PvMcttDgV9QZRHqpbfS9ivngEmT",
  "key1": "2VFzhzdVGov3U3ESUhzUTL3aZQSkCyZJDXYw8JzyjJRc1uyYYhEjXhSB7waMNp3HkRbAQNXYHcAeCaxbPemsw5PJ",
  "key2": "2ni7dyGf414N8M86TTJMakqst2vXhkpjsHzxFdmq6RyJnjr4acVkw4fWi7mZS5oqkvKqQV2ykBZ265bVrV4N6cHH",
  "key3": "5sKnprnrxwjYUj6Q8uMGfZTt6hAsVhNa1jD2vctwk6WmmdzdSe9H6dinQkF6Wq8fpfgxUjT7sgzYbcH9cb4SDr2R",
  "key4": "22BnUJq5K5ikqiPKPeYavQuzcVLptM9np6ocQEo7p1L7FNiLjn4mnEUCfAmqLqCEus6Ef27WLHmXZaJxJtGs4Sz4",
  "key5": "2kdqEUheN38oDqJb6gwykrmcwh1XqQoXrpH7SMAHYe8LpovsVPcGHqQgxYqhbZD5S8TCoMkV5Eyg3VN2xgEkMtg6",
  "key6": "K8m9J3UY47w1k5j9K1r4GHgwKnioGS4enAtHYF82gCfexH4mMNTwp3pr4zbycHiLK7LS4KdXnzm74dUkZYTqHbc",
  "key7": "4cHGhrmA8HqRZeP53fkhqLKkGAMBXRvti9nDMFgfRMc3XWpU75eNsJwtZcs787dKqcRpxozQemCeLMD17DquFyyr",
  "key8": "2xmkcwkGdk6Hr5uU7yVBHZ2VSnpwYfZHNxaiyHi64oC8RahWunDVeDppATZSZichfNfuuYaQncVsMzxyFA5iutum",
  "key9": "5pk62V6iHH21Kk4VLECDVrVzGW52cxmhpucjTKvEUZTbMX1uavkodMJAtHQE4QCLBfPEC6wPxgzJRKcq9ibMBDKy",
  "key10": "zA8kgJfGjTUjr6687caqvF3trobdpgH6DP2dnwr6HTqc65Yo32pb24ZSHJoBbAR86QcKJB5fEp4qttw8nxCCxFY",
  "key11": "2iRLJZt5YEifwvxsg9VsqkQMVE92fyk56wDXDKEPCGiF6jXH9YB4LRvVJAQAea8TWdDi1uTLFC7iuMVMqwWK4MjJ",
  "key12": "44jeBhvNE5obQnd7rccNqv4p2sppHt3vUzJwMxYaPSsrdQLJ1mwNM1sD5AoLioFnunnjJKDNVSVSfzk8LWLgZKWN",
  "key13": "3c4bEqUPgzXykYQh7j5REpLWeQECBDdS5cbw1xjjTxkfQRNjTMzUDTYajTdgYSWP6MuoRKuRM46kH2fUQnWmhX9T",
  "key14": "45LdSYJu3cDqPZWSbyJkrCfA92TGSFaN6y52DYV29iVaF9q9erNEJN4ZGwaLqCEN6FGdgbcb9kAg5ybnDwPEiBTH",
  "key15": "T6qt5PJsfG4p3JVdnWLTohrGSUjpiTVPEc9fidQnGjACiVFBaLa1zHa5z1A1rurjiEBkXm3GzPAgVSWegdC2KQy",
  "key16": "268VnDM5RAbv2bHzwE5YRjYVrWsXdWbiBMd2dz3r49Hia1YscoBLnS7eCp7HC98Y3avzu4rN5CRVr6sF9BXQJ1Nw",
  "key17": "4d3iRSvsCxfgZR77qdvEKVLgVW2BaNBNcKJBQ5wnsTVoNEjtFZdVi8ngWmaCm3LDa5HLjzxAP3qqn4yuVP4e5Skf",
  "key18": "2ba6WehEHzFDzP3eSCoS22PmueZUp8TDyd8UWPUgW6RNNJsoRLvGQBsyzCGX3k1DK3XDzgNbmQDL55PT4bBDc4Ub",
  "key19": "2zhYdCFMY58pNTMheBXBGSroiZkPXjWKU8Zm8CZw43S1ahDzEL94jPk1CEkKNCYdkq3jhhCyX2UP57kWW4R6Fc39",
  "key20": "3b2huh65QbjZXKDT5nPeTXFqvfdThEVRW3xJqLsKH8juU2oRKFxwT4Q8YXMmNKD6uP2LBU6XgKaiLsoWBH17yBgn",
  "key21": "46LWvHoqh1Jgnr5zFDjBwW6SqZLc2X7RbtinQQPwEbqpAdxTbti5UFQHXjjRCqnBd7JJL2UYurAn764FPtnQgVgX",
  "key22": "3eskeapnxotajcM3rzgQQEg94fXpC9BWWNb1miZnrXnk3BcxZgkCZEdJP8JX5ZCjLVUQDWx4TfNRYRM9Ss7CWeit",
  "key23": "cXu3U2RzdcZCUMy6zzoENvd25wrn6dUiuE5HfgEZoX9Np4dNUBXqKfG952Dy8PM5wJZ7SzwGLANMTC6jfFsn1AP",
  "key24": "33cBJK77pWi9ptUYYzgwrdvsNqHWca9QaSL5G2JceLapCDrbKiZYvrhoutV8jpc7ApjWQJpffs4hGE2n8P1P9eDy",
  "key25": "3UqYq17aZSnqizfRibUyh5LiyVRLazPfmXzCm9GRrqn76XgTsb4kGLuQhuSvoaNZTazHDf3dte8jE7cMN799CrLL",
  "key26": "66yky7ceMXeLhpBAyuPqWyVM3U2FFzePwmZH4czSsFQSn1zjk5udakgDEz8qrghfrznmJpo6jpMBrkpVWssvpRKC",
  "key27": "2JKGKBGYwYYRxs6VGWvcgHw91xwiZtSKwe34pUTR6FXkf4UceqWQ8thvJFxtc1ZRuGJbvghuU7WKESBzUV2sHscb",
  "key28": "2VUYVTXjP42Z5xWdhkNAby5GDeWXPHvkD3xMH6PQd3gAJtabst6drg31waxCgvbsp6TXh1JqqNrVQEJMUpdWnjBk",
  "key29": "317iy18cSWf9RgYpXxts5DEh37wAr39XTf8BdPwuRT3YUmcSnqVwwfWHvJquGEocsvvmprnVTsABU3V5m7usP9Xq",
  "key30": "66jv3Hhmyzvj3pANeHcWv7m3YTpehtAtXadzNqfDZDHKmNeuhD1gXX3sbNGWqqwT2yq6UmAv6qLwWB7nGZA5drBG",
  "key31": "3xPh6cSQFHdj9TUgxw1gpcMzGS5J9osVncb8EUkiypkwYxrvSNNhdi25B2HZ1VvQ5tRgnC1ib4dikxSvFQhFmMjc",
  "key32": "3ScfcUXCKwUMcNsmqzsohbjbNLMd6bBiKtsZhwpRgYwmSXSZpU2y6eVR1tsN2i7VPTYKRn7aSNzCfNiqS1Z36Uq5",
  "key33": "3QmKChp6Ch7H5UuBjbXfjGJBXmi8mUyAXW3SgBxsGH5VPJfPRVC4114sSDGpysfwfPNY9kxnL5PsySPA8AWwi268",
  "key34": "fBkQgYmexkB8GVTx7xLak3GpnTJoZ4NqVbM4tCyDPp4jbboCqmtcxMvEiciY99KNtqtbEoQNN5PP91rCN5auzfB",
  "key35": "4ctbGYt6bULgHiFUA5vRt8w26MhPzTbJ6yXFJU8CszHYzATeskwk7nAGxWHLUJCsH8Mp78yyBsLTT39mesxiXk9A",
  "key36": "QHu3ofxVuxfGabTSQcgytSxP3fs2CwE6VudgzfnEbPJPdy82KAdsKfFWgXFDcdc41Kc7xuUiEut27n6YmTCL5h5",
  "key37": "4KxfUgWqkQC6ga5fLTCmAA7iLTGtgj6TmyFHZzPP4oY2odX1rEaUbnZcwMqoqMH5xNrn2aEQjz2jfCEfgA7h1uBU",
  "key38": "3yfYPmJYXEeV9sMWnLXKZtzoFta8XEZujJm86ciWSktrfiuK3bhgBvGtKwyBN7NvsxdKfH3ERGb3U6LWda16qagE",
  "key39": "1PsCgi7bo3heqbiERxstE3fqnFyjWG4bann6Qqm3ez731GiTMFHEhigybh1ECZ4XLtqvCxtDNXNrv95t9dyVmoU",
  "key40": "4y6W33BadwpKZMCh624cBMrQm3fCh9cDfhtzkznAiv2ypjF1Vt8RPFUnDzCWz5fuy5cJ6WnXfqfkMhMjSSsgR7db",
  "key41": "Z5ANgYdcQYuD1F8xA97hYAnqy14JMimA4NtQPrgbYiFw5gyov4sEV4BF4FP89eS16umRcBnJMwtoEL4agFPCKKM",
  "key42": "BSgNd8w5TA3ZtvYqw3Bk6NM9D42yEf43GPjoMcd7FXczVzpLDP8EiP2A3aN9V8fqU55aXKQUyQYaFXEUZja82vZ",
  "key43": "5tngrfsuB8Fz9AmBHVj7KeyyKaym5Z3YEUWoRuBN9CpqgMwAcg4YyyWU6szByhxH7dn7kCyD8kBkzQ9fWZfEcikK",
  "key44": "2Je7xHqSPt1c7FQLHJkWT7kwCsp9EnpKmCt5zJgW5nqF4DwrwLVwH7w7szTyGbbtMUvPgcSWuf5w5WqBu3eCHWXT",
  "key45": "2okbcb1DRQ8PQKkpdxZhyw1NrJypRGFVhW2CBcq6XxFu2fEx1ZPvgrvhBF47q68Xiherb3MSbuemkADpq4tNQr48",
  "key46": "245zD4DHEWWQuwnq8fZFovP5H6YMbZVkbUJTHGhH1q4f4XmcAu6nwN7qRX2DbMCrXtDHVZ5rU6EfTb1A1UuXi4qd"
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
