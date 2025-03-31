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
    "AsYHm1W7StQ7Ngsz4BLX3PugD6dmDcqGRtJFa4E6hXmGvYUEwpFSsoB1HND5HPFbyeyrieyeD6kdfsmc8oX2GSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WXEysewMiiyQ8BBJBeCsCKCbv8pK6np86hRt9zzRa6jBzt6WNPTL4wQdoJysyYWiZwMp5LebM6efY5kSFhHVQYW",
  "key1": "279xWZmvLmJ1H31mx3ZVSehJBaFARNhbHyD4Y94aAGAGs42x4JaczcwXKJoYx7YSYfP4shLj8c2TzW4RvvMjnVYy",
  "key2": "4sMaCiQzNf9Uniqw3Rko5ujp8ZTwuQ214p7vvCCZZqfFp2ntmDWPGqNwhRL13zJkz2rrztfpNnXMe2e3dhfkNGxs",
  "key3": "59DBPD5PLdxZL8xZYMnpAArJqqM4F9GihBjBTBpRHTdpUaNrYCqhVDtQG8jUdMkNZuCyU8DPUro41QA6RfCpZm7Q",
  "key4": "3r1jb3USBRDZmnbhoJnKX5xLeq9J4YY4Lm2x89GEfVbdKMwxTU5PsaBZtihVkDzTqTcrGDDkEoQEipwVcs3DeKpb",
  "key5": "3HyESrjrCpVYH9pcci715HqMvqRPmTEwiVG5nht1Fr5xwHT6wmJKwnPA6mJkedG1zy4YFw7oZKVeb4EFtNcj6akZ",
  "key6": "4o3hzD6G9Zg4AhgiZLQqyxsrCexUQjczgzB4Ae8G8HQe3x6a4W1PQLjfpuqfYZmE5JkZZSVAU8xpQUJPYAAfDSLZ",
  "key7": "JWCsZJDPUA2w1xmXzEx4eDeHwqAmYTJ2Sm663qfyNpPaXAv7wrrtqrgUmrnXCQDYxSURHKn9BTC8R6V41dcZHqd",
  "key8": "UoyhtjWoeSPf4sgMnTZL8AnfjcMiewm3hr9k8Q6DYJtArm3D67B4MLNa5b5WY5wmWXtvyGjU5xHbmg31RXVxxh2",
  "key9": "3NZiJ682632Zo5Uz82zKzsZT1JhoYb1o29cJrtrPibp4K1V4bz8B1v2faetRd2AYogjYCmjrrMksf2MrHovNT9rB",
  "key10": "4reKpPHt17goerGPpkYr7Yb6hTrG4H2G5MghHqvYxwRDkrqiTvXyBWxkXLtmNLjM16NjgdGpP6Cffv4BzC2LPeg6",
  "key11": "2EKsujZZJXpqtAgTeED8JBgfeQAQo9n1vVKmJRnTGgeqZ2m1uZyjw4ZY5zVs2HNKNu8iMX1UcYTddCRgCpyUa3qB",
  "key12": "5nEu5rcvVZuBhAgCb9srqGn7BzE1TjsEzRKF8BvQ6jnCdV4updSUTNmSBAAsuzyRpPbgj3qjo1yRVkbYncTzSUNb",
  "key13": "34aHatSfH7aTje4VqZtRk62LfJvwXocRvoWZWkDHK5nS7GjYAAxK2FrLwKHkHENZiE9Q8nE38rf3YeRq8S52yHzm",
  "key14": "385pEiiQwjxbyw6XFPmFm1v9fkyfrTJJf3mhTtZ5YS9YATVcfyqUUFo1KjVVn3niHUxdF5wCUsFtbTZGoWjLEhTj",
  "key15": "5aWTJQ9W9gksuJ787tvoVyp82Nt2dkAVsNv3Fc79KRghQqXnLW84T5XyM2DANh1J5k4rvzB3Bcq8pTwPowNFpc5g",
  "key16": "6obD1QYdJ3Yq67VXZq5o3r4cjRLLPzy6rKX53v7kUfnJqLqGYXHY9b7oHCYrbcG6uSmqoAq3d3JZNb8DrBYX8LL",
  "key17": "2H2Q7ToLxLzW5Fsas3LCuziyTHiWT5CuseThmqd3oeVwyTZrcTupHQJBdeTBfutnnB3Wpfxh2yQzn685YZZ9XhrK",
  "key18": "53kGhndzw9DDBfBprsP8EZ2d7Ds7jrW7DTsCnHBbnPR1MLy5yQQE4jmPg4GkE7zeUH6o68Wg2yN1atGjp1syeVko",
  "key19": "23GaKZ7u34bDoJwaDbAMz1Hz24sAZcBiMHwauyKLx4wwq4zJyiZGEQhuVbw51ng2VFi6hzMMUhr8GXZrwS3Qkf2b",
  "key20": "3BspAkrQ582AYEC43krSmJJUMZ8z99Fyb2mny3qSd9z2hi5Umr934woRYvumLm12PK17zFjZuV8Bc58hyfJKqScW",
  "key21": "M7XC7T24xAfRC1gHCXRBYG4SmSrNChGqM7TGkRiYBGhFx2jyDcGZoHP1s52v9EE9cSCq9CZoR5gmxqnMJxRJ3wF",
  "key22": "2sJGeBWzy78rKbuVCNyUnSQJtSsdAqftXe9SeddWMME8C3PqWfLiMDNYtJW5N1ckGSPEqrTeQ9g6FRFBnR1HHFMn",
  "key23": "2kXFXRZTSKTevD2KBFG3iozsP1MzSfWbX2926S1zkxeMhSoL4WJgXF4G2f62GWPiCCLZAAfhV7jm9pkjTmAQVurm",
  "key24": "2L7HDXhcsPHujN5HyoNbFjLuoBiuVUHrVu7oFDYtsUgmGFmtCQfsZVnG31ibqmA9jfCYXyCwNDtoh3tBhNWCvXVK",
  "key25": "yVeRtrB4Ji1fUoVW8qqha7Cbyn6UpAJZW7FDGqoroTMgY6F2T4EcrCYgQT2cAm5E3gZx8pnaxgRQcrVAsgRLpMw",
  "key26": "4mACSz2PXs891EN7TPNMroZHiFqxfKxYUAnorkTWeXqvgJAaSJVyJXjEb7qmTQNF5K7RJbD9WRtHM424eP1nLhqw",
  "key27": "my9TCVatFuY5APfYwSvVNNbR5eaa4SptpyxrhUacw1ya976SnndBHWr6uNDAELJB6DhvJLrzFCiJBEtKWuhg5mt",
  "key28": "5sX2qdq7h3p48Yu1akiJLJkQrbMLq5THZaGTedArTxUa4hPQyoxDFcodh9bTTgFcoddzwQ2btkkFxLuMqosT98s4",
  "key29": "496UFm8Pq25rFkSqkyVmmmSxsseGSdYUHPiMDAt3d9P5yXFp8agn1cYD5zkeqxbnbkgsjxzu2UGJSVHGxktqgjmh",
  "key30": "53qJAEkMG5QwoHUpT798NLqfXyZYcRHJnKfDsGqxtvLHmRP5sZUfA71xPfgTuG5ZZKHYVx3TkNFRxsir4ZvTEPhX",
  "key31": "4yPE8La9N9SbnpEoamajzRPRSq2GgFgpLRZu91t6LdWjNWF8DtrphPAYfckCQZLwjweYizvyf9FRnupkfsR1LzJm",
  "key32": "18Y676s3PrM1BL9cPjFRY675VN1hPw6kADtghFxRtMNHTDqa4g829a5jFDmETC6srQnZhcxugZPP4tCo1cNSfJi",
  "key33": "ipJaD3Pce3fyohSwxvf6cAw3SKE1UWYVBXJDYax3pf5JQcVSiS4eff8nQv8uaNvNVh44cKUExKYy7ENRdDM2oko",
  "key34": "39b6NKbRwJcrN3xrYE5jQEFws9fhnj3pk5zVFHAXsSZHGvrnFFRmG2edhE1fAje9viRQicCvvXyKnaYEfJTcVnow",
  "key35": "AkUQWqVFcxJSZBkcsRGqiWGgyc1u7HrdZLrFAuVuSGbpvAMgrLLauq6khhL1pw3kpyHoTVUSur85hN1QepUvzYd",
  "key36": "3jm11nDCrKJVcLD51imQtci5crB681bQnPTwSULbMjRDyH9vEJATEcznYFEjWjqNghe3QkG9evevhw5KY7JmUyC3",
  "key37": "5v6mjU9d73jpBaoBUzcx9m7dYCy7dWtYyPXwaispo2EUPfy3b2EgGLnRnczh8e3ksQ4EiDqbyZDBk2AQW6AXr936",
  "key38": "43aCPbMLKEX5xfr7gnnCy118iNRXzhahcDSC4Y9p7dB7uAt2umKXFn73nLy7TnnpqnnQavu9me8WdDBYox4ovEkz",
  "key39": "3Mn6TBWkLsbQFvX9sLHTu4WGR3BgTqpEpp2ViT7n1nJWBBgWHBfe9rDvSJxvDCc4du8aVGHGLaXvQenqjScWenFB",
  "key40": "3eY1n8ZUdKLDVpwg9qcGpdFNMegNhzgN96D2z2MRWg7B7Fewe8iByE86Hik9a5wEHMYcNvLmocESoNCgo3zqqbxM",
  "key41": "X5Rq6VyLpT9oBA9RZZE72WYEP848pAN61mkVvC2srmCH8cEYMcDc2WXrVTDghyXzDUxHeVyTL6ddHbj2WLhCxZ4",
  "key42": "2TuBWj2CjvKC66f4VCZy5shKNEorMqEz4982SAhw6qpXCvLVDUoMcN6gt1mdxdtcQ4uyzFP3FnCXeQc8YBkqb25K",
  "key43": "VpWUqVsiFCSoUUYsMa7pid5e5VhA9Jr4nLwjuMANLkCbENSS4XRBUnWgXtJgxs62aZTMzcJgWemCAKTTGB8RX1D",
  "key44": "2gAAfcC9jkcfnT53PBCPBwxuos5rtJuomB6aKqyVdRmT1wyVarcq8TUR5h4ebYEdBA8iXe9wvtieu9XcuY51LAUN",
  "key45": "BuSfrJqop3DfprYz9gYSPhTm1WniZVE7fwo9BWWNraPx6N5TwEBM9mFqhemBrCFUfUgAp6b1WuhkE8GS1kyttkY",
  "key46": "2Q4REACwCsebkzrYYSSQ5pAXgSdDoxVggeEd52Bxq7o53p3inW7gWkJDCFCPv2XZFWxqHftGT9W6CQ2F5e5xpjma",
  "key47": "g5UShK7FYeAZtxyosrPpwnx6GYtNmLhm3YSfwHh3bzzyyJaju7eUrk2VjH1TFLSsebXKbfxP7KiAACocpbjMgEu"
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
