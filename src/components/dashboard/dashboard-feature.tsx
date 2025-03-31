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
    "35tJ7nHMgVB1zipS6j94FfCooJppqd575qm6Pu6QrGofr6xfi2PXygxVV8JYgkbit9Vd25SQ9MMG6aLUt3ru6RCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M3fbmNnx3kBRRm4jDGxf63WR25BZWX3V886Y8aEyqgMGTMHxZ1MejdCUwnhoL27zi1LDe7USmTrPKa5RvvWxiFs",
  "key1": "5cuG49RJ5xtdbx99Lv5JTguAeEyXmovMCxBMXvQjB9tJhFWJn5SonT7x4UoMdKDc5PQweEAVWXZqUMrdKQ1qfH2r",
  "key2": "36CXbda3uodhTcWaL6QTJCnjcygyxzV4m6yuPY7NL9SVFG3pvqFdEfFE79srBounTSbW3W2ywsjSxw8M236gs6C9",
  "key3": "2NrAFPi6av198N2pXNUExSmoSHcBjMdf9VM9BVZMucUbTixzE5eGmzctrA7k7YaGkHSYmLQr5op192scPLcLtw6S",
  "key4": "2t4NUHRCMDx1XbLsjoywC8bFGV9emfF2w12YqNK5tq5fVLFynernEShW8yvq3jVBbpeXt9JRQ4MRydyKKBGpkEiL",
  "key5": "4xWpxceABx4HDosuRXdMi2y3JHB2ruNijtVWC2CGA66y6BvstCkboLHreiSXrKmpUJpGBg73r6wWMRvnehFUcLwb",
  "key6": "56HZCPnqanbebmQQ8mEE3cQczbPbj9ZcmmvzAi8XfEJanhXzSAHzTLYY5KTWzyWzwmZukMeoW2JQ2gcBLyRfLoff",
  "key7": "2YjA4sSJ3YriosE5CV5tEaaY9BqizH1inYjn1CcigJzijTjUTDgvqChqS5W3gKKCN2Utb5uXGJq9ucDiJnSFTr7s",
  "key8": "5yf9ZGLdA2nTsc56Yxq2wGkXhxQjYRVsCFAcscVT5FFk3Bz6PfCjzfA6u1MZSSCc9gcuY4do9eJwf8vZCbFpBzua",
  "key9": "2sedHNPbBmi75TP9p5tDsr2wBkLqxyYN5Nenrk4gj7anUeHUJ1ovU2SkJuVPpQ1JXJSUWGVWUqKeWQnoZmJkGQsV",
  "key10": "dEgugQ5u4jNudaSu2puz2thsWWR8KpCASDUd7G89ZSZ7j72NJ1bhoKcjjbNGhq5nRgs2upbq5ejoUMX3tmwYAzF",
  "key11": "4tMkAhNADgyr5psGwss2ebf66gh2YSVW96XPNCtwDiatMDnNxEzAEk8bjyfRQGeBEUngstLH5UNG6vx2v4NLQ8gW",
  "key12": "4sRfedMhDoXLqZPF1KLkxRKHRfZsH31vEiaFa1XEhL947E5cn3yjp9a2jocWgpBnJJ4njT3LgGLEREXsXFzEHWkY",
  "key13": "4CizeKmUfpTgDrdpGxahZvnE1agP9CMXswHJG4afkdbXGMLXSdmGpNqtUi1Xf6DE5jQpcJJAxJavu1WJb4xKd81a",
  "key14": "5Aip9ZgTZZrfdGjP1wqfBAwBB6N9HzjtuHfwW1uKMFB5kX6jw721QNQ2hgzwrm1UEoSzYiaK6XoBfiuFGKVggbnp",
  "key15": "4qjrRiPACHiirun7bmyuVqJgnpEWwS9govSoziCwV1T7zuC4roekmNhtcCwAHWyAUVfYwCuziDa4m8RsdL36BHc1",
  "key16": "4dZVD3Ha6UHJTEQArptVhnXykxYQ6h2SSYMpmJNg8thCvY97QUQeUEy6nUdam1qpktDk9isdq9BHMiPu3K9Z3JNP",
  "key17": "X7ZpeF1fDQB9n3t8k3u2PnVhe8Ui2hU2k67fsiYCcVFKmUSEJSxnXtbfRsDXgDPSDGH4pJH3h9JUAD9w3FY4wVf",
  "key18": "5gkiFc1NTyTfQHAYhqRcxAYvP5z62SNsu1pJUX9yxChJXAy8JQfrpcdsNwNPF87MKumUFogW8VPmpbYKLSTusQPT",
  "key19": "2x71qLoHiBVGhV11Pw7AuuzcSQhRTkQxEaLdtWydsaacbchZonRuHChbXkJ1p4CoE2PeQYDea9oXk9WPQLFQb9oh",
  "key20": "3r1BBgKMB49ESYHEnE3pDTy9YzDYQBSdRiuY9tH7nWjx4x1M317Rjtux3QunFDDAAJpxfcz6q1z582q9Df1ZmJCA",
  "key21": "4yz2XPjS7fYiMxGM9Lwpyj68uZi8KUN2mmGyL2VRs6fm9KhPxEx1aAuaE2eqfwjZZ95JUUfq493oh9HAVXBK3web",
  "key22": "tEaxYmsxFb9jxcCrCuwahJjzkPuKP8WjCfrJAMDAVLm1qheAXK8cdXivnBpn89deQobbY9rRtEACkhmn796FGM9",
  "key23": "2jETQLiHXmidJAWq3tNAe8h8ppy41bRpgaqxg8wJ8JtwPrNTsW1kMFBVooP8Wm6PTGo1G3eUfE1dEPYFVDKHjuvC",
  "key24": "39iVekQvb96iRRAjwshUkczqp1FKHpq24m4veCZyJXvj7ifEtbpNN4Kaotqgjyab9hPUAnRbNdSnAeTeEt442GQ3",
  "key25": "2F6bTNoo5UyvFKgiRMNgbYiUrkQLG646d4HXc2j59ZtigoAfdwRk5ZnAWEW3pT5i9g6tCaVXntt8G9wj5F2Hav4g",
  "key26": "A1HCa5n4ABJ1RTcrejWM38gSJoU1D8BCMom1UMbZo5MPWj3arVksQfskdwaaEZKMyV3BCoiMvto4CpNA2raXWGk",
  "key27": "4rr71ZBLjqRxuRD1Az9pA3NERt8qgMnfqKqCVddkQ1hgDMrRSy24anU8AdfZF1wEREm1PYVHPBwYpvNARymQifQJ",
  "key28": "HQKDayo57uJrrtRBRZTyPndmvQw2Hq1AHiDm1AJbNUJjXKoZnNTMYmmXcX5KotzbxjV49p1tBkTWse1Jfiq7qA8",
  "key29": "3cysrUPLqHD63kvYHhSJqDHeZ8jNxzim98dEd64qyX1N73hwJC4Nw3fsNBRk8FtsAPcmamLESxAviLkeGtrjCaA1",
  "key30": "2UJiLXbhdCj6q6CeEaeqhatnV9zuRiEyHrLTUeo9EgdZkNUZfS34LdbJ11k9uAZkj55M3SsjDsh56woWVW3ha55W",
  "key31": "3Hfd6NjfR7x2GPuFxboZVDjzX6E4HLEPkg3Nh96Kzp8ZswPcV3Amphyj4okEPaNVeQ9MfQHf2vwQAr5EPEEBCWSn",
  "key32": "AbdNM1Zax2W4NCHZyZqbu31X7pnvx4Hhs7W3gYbcw65syXV8eJW3qCkBMpJxxsUUZmVAFD4kwzqtCcMfKRsmK86",
  "key33": "3smUm4bGk7Q3JnwUhixTRWw8xj3HJaxodd9toXbvF4VosVxmR2nZctfM4MCgvEoYTg2JtDi22DbNE6zAhTpX7CDh",
  "key34": "3WTibSmoJUyBn2iZn5vfdo1RzacQWZxZnT8V1xyfB3gGargvAx2p3imELC74e7nC7fbqNG2indXgABQWbPeZvMrv",
  "key35": "3hfx7AeQaY7PGssZXHpcXQpCiU2XNbggp5S3cv6aUDskpbwCHzouGWaY3hWpSJ8F8qGfrg6ZeETYpjPdC5HTvfzZ",
  "key36": "5QSu4kKL5jBieLGX54MVTVqFxqKbrVAZ1LNtwFHuVHA7CMWRUNTpsAaxAAnE8niVSWwQrxbocdN7j94z5anZ6VwY",
  "key37": "28wMRDacKJtTDx5UjX5dHHNWDWpP6DFyCX8U7nYJCuFVwDFEwcxJSo5a5L3G9HdUL3hd6Q91wczLJLRcytXnzs38",
  "key38": "yzCenbLukaEbj5pkNyidLvqSu1GiQw9ifSfDrTdCvPu85wvT5nzRLYBn1t23Yhdmo6Vs3fvYrqFQRBvAc9TniTK",
  "key39": "nycLoez9yrGX1LRgMa6g4uQqZmPaDGQ4opeys4PQ6M9hWkeG6wyYRan2vKhgUHsUnouXcLp4FpGp5sL2ab6qLdG",
  "key40": "TBVxxHfJQKyAyk8rNgbjqNtrtK1tA11KxdGgQWo5gWtbyFkifCkJT648CMLbKKcZW9Vc5RCPGET2pd56k9UWuC5",
  "key41": "2ewC41xReYoaaJSYXCXpvKa1oJHfY9R5rN6eM314NRVRavGC8EFdqCko32qbdQN1A76ojvrvmeRxpgp1nxFa3A9F",
  "key42": "Totm4zHcTizcvVnDGc6jXh1UgebVojLJK9adQSivaPDjNtqp3swjoqcu16QXEuEYuEnk33avPHAzEDESvmQPrc9",
  "key43": "5iE6YWJzrLptvBPPaqHLzNQMKHr5oweMQHohNDAxYqKCVsHv9mBrL55DoTz3jyLwS1Bm4i5Mkw9diNKBBJrroWVn"
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
