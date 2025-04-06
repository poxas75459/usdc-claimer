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
    "4Jkv1iX8SJKqcqE1EFk9T14fxBKyQHyLxEqS8JLdDNNBU9WF92Xm7gZ8PpDbpLNgLk3kB9m4vVLedqBTYDZMifRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bo1tmRpjjsJWJtvh4Romw9FmYGtDo5q82dzWyHbLf8qMxgVf4Lyu7HwCxRvssBWZGPzXeACk9wYodm1zWzvb2TW",
  "key1": "2An5McYV9Fgur7CaJcjAH3BFEXoQjX8fytUmxtixhkhAJfsNiYPALEkEi1gyavaw9KrM1qMRAry3Kq6jmXN8tFyA",
  "key2": "9srR2yKepc9EmEe5PCJvKm6HRT3Lt2VAWGdVwBqcAGjJoQAbjt2XCYgDhKj9HMu3TANi9AhsM7eJQ4hkES8y77D",
  "key3": "3GxcxjvWkfMpUnVyq4p6Ro8bA4XxuCJXXd3xxTf9Pk5fTqRQb98fwdFc8DCy4muwpxohwU7f9nrZikNrkk9YZAq5",
  "key4": "iT17HY47avEPe2mXz8SxixGsUF3ZvfbG1JX8PVmNp1pUoXHSt6LxDaMskHqTwH8TKecWZFL5c9UsMKo5xW3RF6C",
  "key5": "2yhZQYKvHLiVRbajrnA2dRZEqPmNkeA9tjqyzP7pU6jymj2x39u3pHhEkBX9siiczaSCxiCYGpbQ4zJCZc98Y2Lt",
  "key6": "2Z6aEviyiDpVB2v4cLd6hFzJdPf8cA6jjY5eadAybY9dF5TYf362CY67exog3C3TbEZSJqQj5mmQd2fQLsfusRUH",
  "key7": "2xKM9uLDujj15xaEAxWmseedpZvtFSmUWXxvnNUGpxwvx7RhHHSyNzcNTSLrf76G5SfHY8xyKF8gLHuuutbwXYW2",
  "key8": "2rhcAVfqw9Jj6pCvJ8La6Wb6nZ8KebTzxYGnofFga9bmFdzttDUZh7kGToBSKy6QdxWtJRaHh5n6Gptc2FGBpmh8",
  "key9": "AcGWaKe66Ga5UdpcHCsw2q969Spm6Da4MMNrrifAUEuhMfp8XRMnjNmMyve1ASXURJs8HoHK7q6SGso7Kfib9Gg",
  "key10": "4atD83f5yYQtWMYzRovuCKfxJ1vpMyXRN6DHu5PpU34r4yGBfsBJ1P65Xgfmwt77muWHue1db5kCh5ya7KHssq7A",
  "key11": "g3fKAgFyHDQiCBV5MHCYqfd7v72T487oLRbYM9BMfAJUqnZHVb1fYe1VHrCW6EAuvDwvZ9TuwG7f8T2wUH7bx8k",
  "key12": "3UhgbmQiMskn3MtdcCN6G7rkDPYVQLeSUFFqFZWo74bzXSEEyAPj8g1x8GRsA8szJ4mfJzVXP1gZNvVDzjKk1HT",
  "key13": "3MHY2pdxVgPbEZ2uAgg89RbeL6xQ74QrHJdCaLj4CQ52yrdmuHz7Kh5dvjFairC7SSmAXVstV7rLQ1uqBVamrVKN",
  "key14": "3fUZpeJ6zqqTtccKfXH1s7KxxdqaiaBBAH9mEhyVxG2nLnAuio6r1E6X6Q7JgyNwHsegD541qjBsWi5GkSWUfCD6",
  "key15": "2HSDTjKCsDVWkgRoNazsSgzP1x8U2nfaZjVthDgpQdGKrrhv2YfmeHFWj9AzFCPKAfc6kUGkEq6DG4QQmH2XtKjN",
  "key16": "2M6ct3fc25rpv7i24RTKyeFGiZN7ZxzdBL5rxkhV38GYxbBimEXcGvW3eLd5hA2PTrDJ4fByvUiBhHbHn9XAYVQk",
  "key17": "5NRUCK7EUUegrur2LDaYHeQ7pJQuenCCKzCpi6gqZh9wqNDrAV2HyWgTDi9rsByvu2mNwn1x9Yic3uCyZE1Ujh3M",
  "key18": "4esUy9ETwBQTWFdJxz3zMuRcyKGvxj4yxZRcQmwkaBcTFtEG2u3bN2EKXch1HDiyRK7iJhMaVZgBy6LFyvrdVnjf",
  "key19": "65Qs4qoyQpTNWS574t5nnKhq5VywewRsGmVSZ92oiE92hrrCcsfV5rXhYpwAa5L27duNqEaDW5VGn73xZgJpszdh",
  "key20": "2rCQ8MZdgZW6cvSPBmeR9dcUEJ55powprBmzeYoXJYHc7pwGnnuFZWRRap3Li3u9EKYaXJ3GRWCM6YCnrKKajBhS",
  "key21": "2CsrJBhdFvPYfStur3k28QfW9S6scjdG5GC2PGDmbrg2B3naRbdLBdVFay6RA75reumxLkhLcrnjds2m6whoC5Sw",
  "key22": "26N7h3ZJGYZ6RTmn1Db8p2qzKn1AqpNz46i94Cu9hN6LBs3H4SuoRpaSRg23m2UkaExGaA4PFgKMLoPJeuYZGAxX",
  "key23": "4pVMBgnPVdyq6zDgNfjchmKdkq7ioUvzT6FcypwRhqfvVu4itFriXfZXpRaaVQZmrq5C8ragdkQL3mjLLsUmt2yE",
  "key24": "3eHQ4TWNzfwhRxDNCBdVSWRA5G7wfzCRv8pCuXtV8iDommqZoY8g2QZpir9Gk7tf7BXwaacjA88waiQ6YjJWrzV6",
  "key25": "2osXG8tE9x5M7kdkVuK26N3GffVhMi7kg6FPub2rS5SBzRPmxHMRd5PY5y59755z5RdkCy6sAYFrMvJfuYGvz1xK",
  "key26": "hynu6w3i87tqwzFyCi8SU9dyD5fvcz9DmUUNPsVBtGkKYH835wuqGyn6Uww7tGEvVMVTcuu9A3TJmtLbz2KiSEP",
  "key27": "2aVFfRgounsZmnbaGT5AZEud2n1yu34yi9zmy49SPh226H45Fnw52RGi9NMJ41mHNNtb6YCfe1vo9hWrQ9km7QB5",
  "key28": "43dDQRaS3ULSxCBwW8767nGG3JkdTadDoPjdW8MxJkAu5Ehz6qsBZeg1SDPtZmw2kWBHGwTv6cYYvFquwXzXNYet",
  "key29": "5us4HQNVRsDCys1VegvacnBQbBK3Se4LRr8UfyehnpBhtEFwxR4bRRXk48Z8zUHZdvP7Kk17N5QL7G1Ysga7Aevt",
  "key30": "3FVrxfVdeDQ8fcv4qyNn7SgFbiPoDn6VNkEU5vrgfzygDq3z1wrshJPFoUHJuZeM86iKz86DbpsYh9aNfY9SxQHG",
  "key31": "4hNJrJiaUhkpmzb3CjN7PQhvhhBk227ov3su8CRPsxYNd9AxTqrqMHAW57AZaTQa9a8DGd49zLtv3EJDnZtnsPG1",
  "key32": "2oaJwn411nM3aB5Bah6rQMwcjZKUXj1rzAwpSympJ8MSe6iw959XCfxTkyzKfpQdDEips8rj64BYJWfreztaWhWv"
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
