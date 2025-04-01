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
    "4PR7pK8N2RqKHADk8TDjfNYQhHtu2h2amt1KPVVJnmbocNuFLeNL622cGDBoAYQ5WchrSMfndArWQVCih9dHZKwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64fgsEFDAiLxtQVqUX9XmFCHBoZ45W35nn5K9BLYEBibKiEtEtcTzTexQvN4hTp9JjEKns8vwf94j47jwXYLMvcY",
  "key1": "2VU6H2WjMvzbizp9VL1UfkitBne7RPNVYHdSBHmpoESzAeENdyZ1JZZdFF4QyZw6xi1am5oVYAxuSVmBnf3EJw4h",
  "key2": "25dLuVvgZrLDv5urAUwF2hwGkRpnaN1ErUjPWQZQf6GAkMTLb234DGXM21rfHwBsZLM8PrtTzYJzyeaarG7hxwhc",
  "key3": "2E3ZJsv3Wy6XTLEu3uHMfta3ZM16e1JJ6F1enuVYjBjSK39X87m7iffRMvaAT69cTviwR5MntL5np84FmCX7JUFc",
  "key4": "2L1vu7SRFHHJtx3QeMcDkPDpFLZZVUkjVpSvojesqmjzibFxv8jHrzZDyuTgNQdT4Dd6qMpNKrnGhQDPPMrW6Rk",
  "key5": "2maz3NY5ZVjuj6WCcQugkZCwXRdWX7jrzL2NTbzuQb4SmFkBUSVwnQEHXHbQVsqDpRN8wGPHSL27EBCUDKyKYu53",
  "key6": "2Sq3Vh5TNrreNTqCu73yDuDGfh5L5fT5zLsehqtEgh6kiwNLLPj4BYUqZZyDpjcAZ1f3NkzSeaMFK5C9aJoJRCQt",
  "key7": "5LTWWUobVtYS6UpFFKksa3ZcdSKoDGVHKZPDr2zYwo4oXJCVeTDRmuJEV6qUpwqARjnPUto2fdC8wDhwP5GFAcke",
  "key8": "2wHDSVa1y8mYsZ2udgKJ6WwaK4Nej3KTUiWk8sX3eqGxhvTHSp5S5V3Td3ebmE6EYRMCuXz3wzG1XsMBYJQTfzaE",
  "key9": "3MC4FsbyL3dRgWRJCuNsYXxiDP6auzn66wCCDAfjr6iFQJB6UgJS1GAHXddNTvcNBut4icFU1LTspExbDmpfrtjR",
  "key10": "24wyi2SQxgP8Kv8x5o5uT4qjmtUWyvZD9NktyR34LvRFEhWZPhW2DyYsggDLa3rvjcAshPQV3GWYxFfE9DNzAAFH",
  "key11": "4fDFUGqTt4y4GkKdaoXuQR1ph2FBcn1ikfHoHZTn9JXhkqCbVhhB6GKXWTwqMn56nynWbQgf2EGDP84rLBDfj32s",
  "key12": "4nfhYBU9TbUJbZoCP2xZAS9xtFWCnWGCFPwCxbUtuefQ5Vook8P2giksS5Qa2HoQ2kfqtgn3ozHX9hPFrhKGaffg",
  "key13": "EHqT1BHiV3CLc7Hzx9iH5bpkHUCZrycGibCthBkJ6ghwpG2cvdY3Vd1UVARaPAYfVEjHJaAZHnUECV6ZfEkgXBT",
  "key14": "643gsUBhJ3F6zE1BfNq3uFf32r8fnoTBdBp3SKN4Vk6vNavb4VwKNxwCN6e184uWEKmgjWpYhnL4AkMjEZwu4DpX",
  "key15": "kRA4Xd5GjJr72WMp8m7H5DMmMjkxdUeiHFxpdeefVTvTJpHRyBHdNGvQqnWNVnFxqBb9ZPbbkP3hqskuxV3Fh5a",
  "key16": "5Yj2H6jjcjuTnUhkPfe9DxJdQTbFj5NKQqhMHMFWZbqXZT8gPZD3sb6tontqeUuSvNMJfni2FJrpZqVMJjbUDqbQ",
  "key17": "2YLdPtGBk2j5rLPAsNm3oTjoojidaS9JNfhMRfzAqfYGWhF2ZnuXi93SuTzWt392zydK4jxCdZQbQTwmnWgyFxi",
  "key18": "3tToRTnPUshiUJRmYLW2JHhW3A6VVG4tT8JBzx5bUfTW8yQfi1sTo1H5FCaXwZXp3SzNwUB8u7jcFeKLFRGQNnox",
  "key19": "3BYXtMQSXgncgsCsuBtJf3zkyDwxfEeYZx458ApVX8FzDpMxQjWSxpPKiBMLMUsF9aCk5zTfVr8wUtNu54Xi1QCP",
  "key20": "2U2QGzJf7dAr26j5efDN1q6dwXUSLxwPrybmCuL23E9u88KYFgbwwBfzDt7QQJ6fCH9evM51m75vsoEe6rEYBRn1",
  "key21": "XRrcgAJm9PfdBsx2q5wEYdL3QrLN1WpXj9Z6ZyjcSBwg285271xD67AcXTNnz6Bwq2dZFCFRafuUa1963MmMi37",
  "key22": "2KpXiDzGFRzvpU53GDCxDAHN8EnMoogkDjH5vZZsoQgUmxV6GfUU9CfAcg7QcXvsYjeL3iQDGtwvQcQna3YJRzxe",
  "key23": "qNgwRNYhMucCQ6wgzFqERuB1x62ZoiQEPGZLRsMkjCZcCUpV28FWsmxjJHt43kJJZPvLku6wf7QbvUNKjKsMPtk",
  "key24": "4cActbybcBNFTtM5ecoiqcUfG8swh53V68cNxwSyJNNgx4uaMQmuirqR72CNHBwshB6ra3my9PxRsCNhHSFuaAYC",
  "key25": "4itQJQyzijPjrDZG2MGu8vvg5LJgjWQdFsnn3WLP1wfbzdcQmUYLcuroRQXFitXD8Fg64tuVW6QpQNcxa6tjKcUX",
  "key26": "4cmuYzwHhE2w3R5SodxvC1amJNqU9dU77rfGeor9bVBB5eJxbLtCm9UqFCG2A3AsnDmsdgnDJPXjuqAr2uiqfTjj",
  "key27": "34Y1yaunwT4nAPjDtSzHTRbkfHa7RbALT7fBFsrMtkhB6NXpmSPDD4zapetwNzAVxZCcAToDpCm1kjSXX9DCY3Qb",
  "key28": "4hHpH1HSRNFqeWKBr9ieAxe8MPbHvRWTRUg9x1VQnsD7RAM4ov5JicvwiGDRxMoUeZSg8o4rnYMMh8kjcW6F1Mfv",
  "key29": "55mULF8Hab73Bc6ys6RmDRQGKCuXeUnDFrJTT3jcV8wM2HnHLYtg6esJ34ANkks2ptdkvBztBrmBTWd1uerXb6m8",
  "key30": "BKpP6zhZBsC6Q5Kg8GmbCUHiR6zms8MnzM2qgyCRq9w5We46gyAodN9knVLNNkmRKtx2EzmgmW8KLo2VF5ZDZB4",
  "key31": "5eTbKni3niqcxYwrCtXJ6DxxqzVc8QymazCncV9ED2SvkqKsMpMd43nVZ6Hesme23JupKnTU2v9eRkPkiCr4VfN9",
  "key32": "2Pch2wpSjxfxUSmJB72ctREqJo3Rb2sSr7tX3XNLJkoBZUEifynkiANQj1ojzYM1y6t6EdMtNoignF87z2u1Bvaz",
  "key33": "4Wq4goxqGdThMZW4ZKhs61DckAyqoPNUbGZD6awjak7kJbJjpTZbshtPiYBX41nrmdZyG1jFCKbJHRoHWcZKoSSK",
  "key34": "3nGLjkDewbd3Y2ybqBeXNwR8b18ACbpXeQf7odJyyModjZSkWDgxzDRqsnpFkNMq8Tp2KQze5D3yrRqy65vCCJkP",
  "key35": "3gM7XzRXjz9xWjpDyUU2PJBfZx6JRSNRsf9GBXfDdeJkpz2DnkgJj4TMfyb5mzDxssjbPFgm4hpumNpKh2CqcErs",
  "key36": "53oJjxbZAUJCNNKPARozuYPZdLNrZ9ttGTuCoc3Ejkd1DhA1hCy6RxQH26nNhDASg8qo9tLGggqCoqvpeCWEtpfq",
  "key37": "MBwc7tJpyKyeKM9ZDaA786wbJvouRNBc1Zei1mijC7RppY3RMPZJJMMyMV9F8fsrmvmhaUdk5fk9EpwqMtapVWx",
  "key38": "3MU2oLa9bqX31WnaVbW7kRJZ3ChQucurjEZGqECVRgqrnRC4hbCXWSqAudXYwvcDHERQe9sfJsnwBifuCh6R9xWJ",
  "key39": "2RdZVmwPb8qGaAQYuNys943rUs94paJMoJjWAayrD37g1Np3hBqTSovLajkPRR7HKAp5kWtrcDzjkRUzHM1hrg7M",
  "key40": "4VcEPpPsxtbDi9pGZyJcY2VnbWUVEzWDD5DaGaX6UmVtmWYqoNHgoPfgV8GpATyMuMUnwJoh5VaLtz8iQNDGvmXm",
  "key41": "rsPGPaLAqnqRnRRUV12KhgfcioWFay84XtW7UrQ7cYDJ3TwAzYxFzodeXYs3qVPbZhNCWoPy6WCTxKRGT6Te1Kf"
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
