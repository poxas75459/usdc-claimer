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
    "Jg7NpDD1ic7q7aRr8tqRdcwA1cns6ZhLZRgCrQzV7WNRj7GtZvjjxEFatZLXw7xZUkTwvidPSq8MKkDvMMh4LLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cAFLhyiinoEBbV5MaLLEKSBtHkXKwRXDCPg78Eu5kvznDWc14dd2xAFoxzK3vaMhECdPfgBLz38BjeDZNcq8rfs",
  "key1": "4WDpcLWS4PaGKVca3Wqss3AFMdMix8Gh5CUKdg4opmPUGMfcBWPLobaTjTey5X55NqAHanDf1JjKwaRZ5WgASip",
  "key2": "29BRzcq9BPg31nyfkqzeiW2h3Vg7LzoQ6vgzSD9383r2pFmk72H6dLoVpkBd4hcPfg43QdF5bR8GkhPe8FZDMGP5",
  "key3": "64NxebZNQtqzfArhABma4jzbds8hjtwGf4akYFgaFoVdLd1kM2mZzc26RetsnUr2VynfyfyZZsEhsLkpiTp2GVCZ",
  "key4": "3EGhYE2oUKnXTHaoF7APUvYhk7pxRYSrD6G1jjhorZycqs6WxQfhgAkkzDptkdGwXq4oenouZN3PeLGuAgwEDbAk",
  "key5": "45RDGry89R2LYyLs2QM9oPFGUVpM7peZMDYDbdivs4wudXUY25DbTYpowbwkHVafTjgmg9gAwjQg2xykui4rpWLM",
  "key6": "3tD162AcDEBvL2asvxzwWNNUbaqn5ZVJZJ654m98HVpRp7uevs75uEvwZ2Nmw8wkAwF6sTYEyhAM2QCLnmhNjLqV",
  "key7": "3uiB33621sj16AW2DxXGJmCEEUyZRhyrJzpqVSYNMSDHn4TCEQ4no3cHhS65NwxEWhN3sMC9waNiJF8APemBteY5",
  "key8": "5v7eA79tzDWaDEnbv6s9GY6XAkhh8RxdrtadEgfAd2URabmHNqLJ8RoueGHn3UqCxcs7ifhgC5NZPmkC2a12Vefs",
  "key9": "5UtmWFM8gUL1pyT23mP5bupR3T4dUSiUUa6iK1eYnaAQeZQ6pnDynuH8Rn3bMNPNtGhdcdBMA1ht5s7gwkYN3zC7",
  "key10": "pK1KYP9cdxUMcUQtZj6a64nvT4vRGzz6sN9xt92NSURa8jGvFGHktgicEpzm7SAhFMC72xrQ5SNTuNaKrzXJqE5",
  "key11": "42HhhCT7NQvwXzK8tLrwU7EBpyGEd8a5g77wV7D86SPM43jSDFdKncyMak6tPFZhUNLhqApuN5JcaB2Ljcd8QDvx",
  "key12": "3HVkyBKNzhHfwWMQTarkJTJGkqqQ7QzU3Xu4mi89ifeN7FRXVPMyuaiJbSwQy4pKJQubjbAqLK9xPF9zpRTReWYS",
  "key13": "3cfzKD2YaHnXJYDuCXbQKHGA5DjGewAJ5R8CFQLz8H8tbsQRhweUZwkAHVqcUjpYFQ1AKxt4YcpgLBuk8oSJ6nzd",
  "key14": "2r7KWXJjSkY24BsCxnZR1Q3QcSpjs29e4CkwbnG8UGYgyDaeBN26weoUw7EyVu6WSqxraD9VyX1nnP42bRL8WNgU",
  "key15": "2aNefY62X8WVduSwZ1HeNUQtDTixpKb1gvF34nyYYkn6xsga4UiHUEQhmpJbphQKVum4FnRFiWiUD5MUEwdz8V2t",
  "key16": "3PPBR3zNgfWknj5Aix3UHpycF2hqQT8tZkeeDd7xY7CpwXR7Fjrb1gTHzjHkSATn7BKBQwXkC6Epo1JeXFPPcMZE",
  "key17": "5F5binhHFPXNHuU6jwcBQKEpWn2r8GmpWrRyFPZeoSYANKw9gEZmSMx4oGcAW1mKMeFsrwTpwF7L8ZjEdFh7kaci",
  "key18": "4xnxNyw6V2ndxQ9ifdoKyuJS9Eoi4o8LeFLyK9RNyNDQmmazD7TYVxJrGUns42AKr7w8BM1mfH3SnhKEsnzMV9yn",
  "key19": "5AexsrrLaqN969gJquEj51FNtxB3tCNGEStwvtoyFgMEgynT7uDJtzjycfb2pXG32Ppvtvr3Cig7zG8YWShx2YWg",
  "key20": "rxBFw9Ls9E8xvEBT6tHE2EPAqsSYt5pX8K6g56LwxeNPgRJMmy3JAKK58aws6rKXtiPfdJzhcgac7SQdtT9q9Tq",
  "key21": "3wsw5EVbCKzkPSnXtY3znmfcxZ44KgiXXQTTfbbU8m1CiXNHJwY5cac2j7VnJYRRfGNU3mtQ85BzvK88GqFvSgDq",
  "key22": "2nigungVr8zJe46r6fseVZ2FxgWY5Ccdd3PtcK1GZidqchM55mMDiA6vh5Wa6dGY9xopHLDUonFZFmXXDnFJ8wEK",
  "key23": "2eBE2mtrXTyWHPYtD1wFaW11pwYjm7CyXypUxpivV7Ug4opus6BWzChw37yrMWh3zcFBimGYmL5TLSPN8TPgwKLk",
  "key24": "4RamWKZfnBbqzrg6aBkeFFhM6p18NbugGNsjK9GkavrYKqbBCeSdeEvh9UsKLtqYZsfFwBkwVc3ENEk8AZ9mB3x4",
  "key25": "4YyTXdeX3fUqMyYGwgjAvZTupU1VVLi3aQHEYMhxdBeuSxxf6A2ZedsCZ9GwwbATWAV6LJjmqw5GJ7c8R9CbyAdc",
  "key26": "5JdQQCx74i7aVXS3zEcoCxaCPYx85vqp8qX6JXn4bTAm4uUuMxDdW5DtvQpguNdBGyTJqkqLnztbJo9jJj3QejnH",
  "key27": "2goLKdVgqvi5fdiKL6DKMvUb1211ND3uBa4mL4M28y7Q698fYH84Uff5sXcgmVsMjFVuUP2XB5xgt2kPxLk5b3Xd",
  "key28": "3EVdKsgnVj6QhpGwcRyXqXXpKAwrwDh4nAr9NeiRthPkfw4TomNiZ9Zgh1xwdXjAqwfrGRWLmbr11XXNYMTk21WX",
  "key29": "39QyuYyr5rb7yQExTje7nvCyzEMeHDKtdeGfN5WbThFxMxjZoDRTp7yRANWyjv2tm9JsYd5awEq4WNX6ThS3aCHs",
  "key30": "2FP1dS8DmBNgq1L7AMKmdYwt5S7Nqkr24Dm1AWbRyJJ9A8BcJf7b5sRMTW2DANnuzsRNQYwmJbWu2fFs58i7Hsae",
  "key31": "47dCdAjPGrx7aVqWQ8V2TWCTaxpVMx3AHuLXGrykTAeqBYR2ykEkY4qERLQbFXHrTxH9AXM4mF2wvBRwP9a81G3",
  "key32": "2cA6fzg6AUcDhb38zj9eERzEMp3Fsyr5AUKkBnhyKPhL5ew22Wqkk9Nqj9RrdPBBWDYwcYE7towZEARruggYdEoy",
  "key33": "3YRbknwVYfP3w3gTHrqgN43c3ncModFmWPRqhtMAKQhESzVzRLpivdCZMUADKbF7gAPNA87JCaMpQU79AqZmqtzB",
  "key34": "3rUgqvjQa5ActQS25DCmiphL11BfFSWBn54F2E5PxsKS7Hte2gyb7uaFAjdQzwnCg4LrHpM3GqZJ4j8NVnjhXm1G",
  "key35": "4hbGYFmek4XqfDKk4BEhuwRpQVwFzMm8airVXWyoGTqRkGFD3HprLYHon5tEd1WdBem7PwkjbayLNvXfNiENdpfj",
  "key36": "3tnkoCMNaYqTZXyfxpPTHi28mAgehku5abpBn4ojnvc7h3YHGrt8qpRDb5B6QfPE2cZLk8MqCVpa286muQaf3HH4",
  "key37": "5CCq1thgncUgE5Bm16Rgz1RK5bMcFhoJ6KpCSXkPxUhYv2qLcj42Jxv8BgtmTmvnk3mstfqvK5ZKLv3jdNchvvR8",
  "key38": "53oF72zKahs6SaK4mc959BBJ4CiidLYru7bZjUoGh9kGKyHXroDLinBFxdrEf87VsbN3f6jzX5tFuSBXjxBPsmH2",
  "key39": "5PDRsPqVxHUMAVUqWQ8eqqnLKuGHEh3LMGz5H8eUMPVgZiJrpTzTJqnH2QLZ3V66FBSs5AA2trfWmTCPMsk79ecv",
  "key40": "5f4d14QZAf9kqDDodco2jaKkBokLGbBSqTxR5CAmJ653s2erz7oUvATXG7Y153BfKYibsVD9kkFSJtcH1hA9Du4e",
  "key41": "82q8nNmVXvQx3nx96ddtZqYQ2BxPrzcmEtxL3tkmViN8cyVxBvLi4K2TGfhxUjF2nuYugDEpRJ9kd3eBtDqfSa8",
  "key42": "4pGxUYfN5utjGzJu7f8XMchVJeYWSRSo4tc9cpDj8GvY5Azdzn9m6Z7QYWxxPFXEgkSUZ6J6rgL8HAsfmWee5tKY",
  "key43": "2hM2shAYEsncAc1tR5QZuA97rveBVFuR55GNdVFH6ABjiRAtYtKDu235pHwzd3qs84K7E9g7GpH7D6D5PpPXTQBH",
  "key44": "2x1CQy5TyX2mgPNZ5L6e7D9hPzLXAYkQXHTUwXDuJRtRYaFdwhiEbqmCAtVuF8LNWZWkHfyMdrSvLDnJbFTywomH",
  "key45": "3JcAeTFscpusNdQbLCDdoBe8Kkr2khpr6yhhLBhfhKVGhSwjzvYcc1fDQgBKVq6DVcUK8nTV5f44SURDqMPRBjb6",
  "key46": "5KMP4W5U1znTp1aoDWmdtHdRoWrRz4gZxn6pEy4VneXEddQB1D8XzNZ8AjQ7VDdLyt1F3idDjbBKt4CW3CwRY7f3",
  "key47": "hi2UAxkSZffHniEFZw9GGd3wWob1racwP72a2V2vjHhwnEZZahcHGN8QRzP3SkCEnPZZ6w3HSafdAkj19G4iHbv",
  "key48": "59tg5YqKof1f3gqWzDFk76izmhNfgjRbeazwzHxN4JiWesAiWS5JcDPKcWm4uJJrrJoRPRBQCZGxfjAa2a4zLKy8",
  "key49": "2T3hEFKnLvW7tRfVx53xZtWVzGQu3nXVtCcctm998Wj8xjEZBzZc55S95d9TMEqhWwNvGujveRkgukYA29Vp2owv"
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
