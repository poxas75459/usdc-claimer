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
    "53MrkFrLW3nfSE9qAKo9TSuvScV4zcDyWi5KrDEGEJo4RRbhX4TRfjjhhh37YgZtGJr8CJdTAKuennqvesGuB9rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DfKfcbQ7r4utTwyh5Saafy7i1ceYD4iQBRjK7qfKQ2bdn8VknLq8JC5R7RwRmB4scEaw4wqzsWCPf9ggEXYua1b",
  "key1": "5QuYGqHzvmc6GDLCvDcwkeTKayAEXKjBTeDxgtdismQ7fgUtbC4EBvvRyRdzpedqi1psubLSNNUychn54hXnKFMm",
  "key2": "458zhsPd2EKwKiFGUGDJ5tzurTweHCHK3E42k6b5su6n7wtUbhedra9MWkiKJ8Y1zmueRAkWe6AxFDZvj9Utg4Dw",
  "key3": "4CSfDT4A3eqgrSh1rqkxip2KpFYdC5GP5ELTkNpJ6DzS7xALgZdgYRkasAWSLutPijmQmH3JwfnJZPhhBR3A82J7",
  "key4": "d9fHaYnumdFFDY49REeUNJNPcU2m1rF1UjjaYJ42MUqSVejaA9qTFiLJjqYULV85UwYKiLCxo5Wc7NxqZz9GVFJ",
  "key5": "3ogzUPwTw5wn8ZapyMoi39vQwQpFKjUVuv6XwL8cW6dZiAefSEE96ysR9hY7deoU8Xwv21QyZAJ9tDi9YN6q38PE",
  "key6": "imV597zW1Tgxz639V1QFAz72RzhAQ2bHRT7fjjL4VFsLPWBw51P5WoKFPczN3BWVdpE383Cp4TPzyE3sRixCTcy",
  "key7": "4Bpqs7SnkRMgAmzXxsiBDNaLPrfXdg6UoVYGKRiiWwdeLSyjSjzqqTSgeNvnaEet6UKFax8XTe51jHsRtxCb2zgy",
  "key8": "3aMtX4mcHKZa1TEzGXSkrA6RpPXar9L4AEw5AkQhw6gdSghZpQ274WcseQHUn6esz7A5yS9NdjQK4A6qUjJKQbcL",
  "key9": "4A8JtWVSfBAVrF9oSsY5NnZh6Tqh88CtoFkS1g6nLQajyxeakbFeqsrdw87Jb49xSuzg6k2sipCZZSMkUMU6xidQ",
  "key10": "4vQtbNybKewKySJratzCrw3KoHZjHrZiTU448h9jy66u7cePwo3KbQk27kA8KibDkgry34erFGNY3nF8Mthfh2r1",
  "key11": "3a5juawRKS9HoohjBAVyrWP9oDSnCgzkozUDdcRCXygV6BXLhQNPmhFC8dPgcBVP7w9Xkx6dXM9RjBfiYQZ1fGq2",
  "key12": "3iiPEG18p9PhBvBioEWvEnX7Kj89NyCxnsxMgDRbQSsRr1zBtQpiL6j2KH7KZbbji62BdoMvsyoLftfAbgi3VAww",
  "key13": "4nXNJwsxUBPA6gk8GwTXWyk2e7ExsvLUG3JBNkAccteqGzxsVMqvphH6zFopmSeGTJixxpTNj4E6sZZLKppPJkQX",
  "key14": "3zxKaTUJN2nbf37RpjjoKzjCBwWwFjRSbSRpJfmVwTBsQr3zhsp5cLoT3Mxya3RgTNkFwdnMFFa1pRsY3kwhz6Jy",
  "key15": "5JbuEbyTJBivTxxDmcWoru2xSDXaRYceAt67Qz4hrL3gyJXD5SQB2EYAwQTrsNCTW3gTtVnPhG4mgY9DuwjSEjcc",
  "key16": "4e9Cg534nDnz9kePrNyNKfMUansCuXLC49i1dsVUtWGgaF1NsovrRVDX7deobqxpz1qfzvLcz1p85ripPUL2qtc8",
  "key17": "3Gm5KEsT72ctCgdeaNFzvSnpoyHDBp8MYBrwXkw4dVts9A7jF8aSw3LEerShpvaKuy7L8U9LwoTkhEsnKGbJ8W2c",
  "key18": "3RX1uVyDmapGrNQPe5cEowLwdGP5JdRdgXqBCvBdqeYrZgdFgVGmHp2KjPoM38TBMHa1H5rtTxupfBwBuMVpGJL8",
  "key19": "3ZgUSErG1Hs6n8bJR4tUa9zQBpSrwsTuyRNwEMpJhqJ5FL8kusLiaWxnszc2n8vSS3WU7YkKXEq496mWbRJrvQKq",
  "key20": "2U5rhNz3MTtM5mS2bTu3VhYvhZ79cBpzoo1s58ZvixfKkzfCXErQBqym5iyMq1YbTtQ2oi3f9hoiW2oh1sLp5E6g",
  "key21": "2syBZVyVL6C4AHmXr8rnTcECKJ8p89U8CkxJceCAXVtvC68CD7USkipq2naKBsDv3L7r5tGnxAZ2edLSPi8y8k8M",
  "key22": "5Rkn5zSpWtcWpu9mDA7o5gZv9NqYX7PuYE5YZ4g3j9YoPcsJkHVUTbVRYXjH9vPaznGV1AwEQJ2RWgRmN5ZaFF7U",
  "key23": "2wXrTXhMPBvdajxdLpENcDGzHNyEry5tBFDhteKrh52UUdGnK79ZQ6FATQNoV4TJTeg4wDDDAnYSaGprD1RMX7LF",
  "key24": "49y83oA1VKjXDVngVKfa6rWC5oVpraSvT3Jt9sg6hoPU6VdmYcK3MkzrdKBACmv4Vg8cJDFNskYtKiRmrxMHsuyP",
  "key25": "573qTG8ahgfAqS2rEm8TCx8w7sikL23d7EJ36cvXqhnUPZ8sT8LquaGkwQWaJB7nHibMq6jMRnDsJoodVX7nukm4",
  "key26": "2E4xjQQmNWPok93RfZ8VUTSvQPwAFTCTgfb3HkD49Vx83zTnYu8nr2XiEJC1bP5TsBZooYrDfjq8vMtAGY1Wk8Tq",
  "key27": "5DCj2hUk1jYjmTsRU2H61QjVRoirCvvchezkBUBgAf7PLQYveTHSZ92hD6sWcpZHy4T7fjWnMJzwHUajus2pduVG",
  "key28": "nXG4KekhRnMGWhLi3F8x41GWZqgcZpDHoBXPEHiU8cpi6bm8YJchKEhKnDM7BQ4iP36Pk2LSchWTFcLXeXbaavg",
  "key29": "298z3KP9zVKhyGkiNqqMrQVAWBkeBBj3pdeSyFkWXdj5rveiUw2HczyRyfZMKker5wnNAajoaxZ53vbZTuWbWeTt",
  "key30": "28rQj8m6KWAJUQDD3djTxmseUDEUcr2iLYhVoTP5L27VL8MzgDy5espEYEyf1DHcn27BYehU9DehtwFear4jQ7t3",
  "key31": "5orrhAPGb6yLYjxQdkhTypPz2fgMfETRnaZfDHmwdLymNz1eXBbyB9GNj58nu1L9t4zj4LtUr55bZQmaJBN2nDt",
  "key32": "4m6GgRaDqjMHVFXoJxzdeZFKTmQ2QPa5VXnMWUMbbpQCfXWUeL5Qzz3uyr1mNbJgTsjSVbafcv5gq2qQzPQiCH86",
  "key33": "4mpRci5Qgb2uEmorCFY6TzYp7HLvUXotwBXgLp45NhUt43Z8Wg5amxGLSsskdfuVrPv7tbtcJwgrhCEh4hpjkMPk",
  "key34": "4v2ehAb5u3YroEYmzRFXHvHdcyt6KVDKL1Yyvvm2Koi2SHPz18HfA4zW5yBeKMFDhM4BJBrPsWobw8drzRXDj9UA",
  "key35": "5wZ686GD3UGpzjTr1jDp1h4hyAzJhLb5SCexnVw5MZurV4aGmFfFvD5t4qCFPj5sjzmvmEh9CVUqzbXKhVsZgX75",
  "key36": "53km9BrSuAyAq45pgKkT1toN6pTERNZPM1jN9xemDRu5Nk7SCYLN3fm67tqtTtkQhA6pvHom9E8nABqbkVQPpA3f",
  "key37": "3ki1xbYL8VFmeyTWZRrdADGwLY9U7zh3Vvwdxer4oTCSS2VpQTBsCHveUKKj3BmB6XGDda4FLamtQMKX1FA7N4gz",
  "key38": "2zEjBW1afbw2q5XFyAKGFnGjnHsyc9gkMPUp523xGceSmYHKBuw61geBZF893QtV26rHtvtiz1DN2nC5XQwHeo5r",
  "key39": "RhC8rkqLQ9RoV5mXyhBaVjGBzhaRgjhUYHTTAtHujGG6M4DDmL94YcuPAexqTuekMdmzTke4AEobdtemqhz6F6W",
  "key40": "52mLmvASZNChDqMy8Ti7FVne6ob7GiF711ww2VJxk1U2wJQvbrXw1at4zUk5uGaHK4WFAxWGr3crGFcHJt2SDy2s",
  "key41": "3bkJPPKRgLvgtzdX1fU44wzRAq9BsWCzxwEhW3Tb7dFW5L4jMgmh2yCcqwLyjbwtC1Zg1MFznGqe7eqSa6q5U7Ek",
  "key42": "24VcfKvaen7WEMaVUdNg1whvzmTuDHJryBGN9H4vVMDgRBSkEShts23EWwM7oc4HJoaePoTjx77vCVmt7DprXNDb",
  "key43": "58bGaapuKXdVWwBNyQMXhhNdGSE1nXEC7Fv63Dx2vkNmEBjr4pmuoLxFe364gg7AjqPudSepPx1nbGd6eBK4kdW6",
  "key44": "3czkqZMP8rhq4Wa67uHqq91ofUZ3t3xYvPJCNUXwMuiJLdVZ1PP8fEq1Z92NXKHejs7N67CbkpuXSRj7tK8MLcdd",
  "key45": "4retZY3A6PuLn2tY4G8hwW1xVGAxeoT5q5nTGd2whQ6rESE1pUAP9hfoCkCfQBPZwhM1Ae8cxyaV9o9kcgyvUGpF",
  "key46": "4iemtB14eak3GbFoEyvR2oNYJ1EaDMvMpjrAPZCzXyQ3rZMHcNkKK3Z1t4NrkqJ6EuKmbS3xZ1fUrD3To7rNPifd"
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
