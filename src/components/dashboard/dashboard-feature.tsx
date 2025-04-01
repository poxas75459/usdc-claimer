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
    "AeAE2MbojSJxLK4yjnE2RrjMwyXnHvynKw4Xh8WtE9QYz5SHnBCP2moorAJWd4qLy7J1fDAknLBCKueSw2XzcBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YfnmSDwPXn8VgA5WxBmD9kqe5jtZcuFtPUcWcPMuo8yT9hMUk6eERAamFf42R3fsLvvTPWfMwoXgbLJyeN7LAWE",
  "key1": "4nYXpYkasPJLLe3BxfzbzBfY2z6uD6UrzQ5M7yExktsAgUnxCce556yGzbWuGoarRFnQYiofwNmMUwkUxhBbVmDR",
  "key2": "3smERbX8H3D2dnxRbNEQJw3ep7vfGYViczErsGXCuqi3cefinhxZ17FyY9kKFLrk3Ua7fn4ri2bZGPrx9uAndgTv",
  "key3": "2Ztq4BxzjzpLr9AvR1ix2wxmHL6q9RZLjX1DyTqiv6wxggc6gxAzYZtKtEbc17EEYEw3amwRVDBukHxBBjFzuZU5",
  "key4": "33jrZ5GHezJDTEx1QWNVP3c9rMLkxqkPzyJqrCvLpPnWvC6yNzVHd1GDhAKJDM8kSJw2s8XRyUiQFNuFrPZnr3yC",
  "key5": "2RwcPuCtM71FGVfNxk6CkqBwqpbQyBpHfJfCZkgLheQzdCxhwArLLa6TVcFbLPjKiLVCCJhTJt1U47CtQ3zDupDQ",
  "key6": "4zWJHPxiFL6dVPm28sDcL5Qu717x4BFYuCyzmZ4Jmejyz3YhvRAg25rgEN9aEydWXU4s6MfYKEwNvo419qnvvMHi",
  "key7": "25oKPPVH3ZJHjbkqd4zPyvgfA7oBq4AU2dWhqH25ye2tkSfJ8fdP3okRULpbdpdgLwjRDeAw2E9MDcH5y7rjapbS",
  "key8": "5ykrXfQxek6PmBe5aiecDkBSrLfdqcMvBDhoUFvTGeVXLfb7dZS8Np6ZpoyCdo1FxMZVbKtiwhfbhFkkGNkmb23y",
  "key9": "22foaH8p8PTUj1gQyGMaZBcytmEFEAxXpoMK7eusoySUsj6CS7AgzsWhimpWXVs7HkYXH8VVWQTxNmVCbxS92cFR",
  "key10": "36e5rNvkeR4Yt3PzKLRFuNgafdb4fXhDSde5KB8fpQhE7pM6oPqEoeS8qFY93vdXztNRePHx6Sn2w7RjnoBu4moL",
  "key11": "3M73gE4GXLqR536qUpiVK8ibDhhq2RVACXKixVHxHD9TxjSZDv2r3RSCK8KzHpAitWGj4TWGi5mhsSxBDxqW4uMJ",
  "key12": "2GSt888LMSeYhQ6x6bynaPR9iPXETvnpEGTE1n1ocYXp9FYnTndkoPogbd7VZtW2cxtPpg2up9LZpwctrtEz1xkX",
  "key13": "BsVGyEyk7sKwVM8nQWiP4qKeMjgNu8fVwHU42tumwryHn5K9Rip1wDdZPUAf8XARDBz23ajdVvduQcNimfoqgBy",
  "key14": "2ABrLutE8H6eHKaAFMpYxv5jVDP3TJs87HM4y8SG4WxCK9LZJxx1c9vx4PDvAGZ4eM88pCjnUacLSsb5QgvcFQBs",
  "key15": "5h3YcbemSnZonCv5BgprWZECaFdm3xJgZJ93qifxWoog1JTjAvD9kP5JtizZwYjSstTWFFeSXdqy2aU5jMboA6x4",
  "key16": "3pPHnmYLZvrGmvu8yFQKuU6U5hnEnxHqFsAYVdKbKZMSTWJUbMhka8M5eMZUvNLV8qgJyXBZFnLhPqhgY9HuT3YT",
  "key17": "2ifbZVmKPh2AKhmZC9gmHGetPL2eHeh57S11BDzGtxgXgLnaTMLrWvtfgjGP3FWG9H22RdZqgZydD7KxQcx9jomP",
  "key18": "67btdZ8FJUhcKWybDE1B89nT3Tmn92Fvg2sqNnaa3my5T3vdZ1v2nk5pF5MxFDK7ir3UMUrFQKyfk2JhQDDBUX9R",
  "key19": "28ndwmnAZuMTBGWEYNRrYgYpWXRPJah5wjXALqvDvkkHztGJrVVxC5umJ9sWsHxYctZf5AJ7rKH5t1kUvKppfBVV",
  "key20": "2ACPd94P4hU9rF4GLvZ1yxAMhTwQJvn1Dz7VNhj8Wj8KocdPyxM63RSa6rdfeByKoYb2QoF4bwwWRtz68349oMde",
  "key21": "3YsmAekk3NgFiqqVb2p9R8hau9XqGn4sVdVTNLF2KwxVS6b2B9T9ChZSWL2Jqmt3DkyqTwE6tsqRRgNuwZZEKper",
  "key22": "43Qm4eNq82KPLdbBG4EiBZYEgL9sks3yRu3s5cSogaBZ7CTWzTFJsuSA8uCjzLKfnFiFw7izoguskBCTP2AiyREr",
  "key23": "rKBJ5DjVtkgF34X38kHCmQ3GciZJ8VpMpDbfDJKcQUDCYoBxBwuLxaFrkVD8WviLnHoT6ckemN5C6kT8VhYbCKU",
  "key24": "2SsfQG54NabERKHsDWboN4RqaT1QtVwVw8dUUKjf5wMYWCzHH8R4RNdYKv3G1n6FtJT2poSrBbbFoi1ETYUo9n8x",
  "key25": "3QwDtugo9gNcuJr9ThJa18RDwRpYw9dV1LmJ4r7sXDz1CvinZN86xTQabx3pdDhNwUoS15FVPEPowDt4nRe4qx9q",
  "key26": "518iW4VFz6sipJShPwpzC1gEtSMN4bis2Q85ta56cBucLNnUEwdmfPAZPPDnTncssGinf52mztJpbN6iot2dCwNg",
  "key27": "3jgkjaxG5UEX2zLagKdQFBULXqiuAekucNWeWzhwY3suVHA7S1w4E2vwtJq5yCEkE1ZNgfg3HPZcD65D2dzitDT8",
  "key28": "5X7UMY3j6ACq1rwNmeydQZpbbDK2wyfhUiM1kfJowoohxsneyWf1HrhEaqbbkedpgBartTWdVbYaSKdbF1vHy1bP",
  "key29": "5DotNTFqtQthHoEBe8LDL3zZ2baVoscRdWcoEHxy5Z5AeW5uii1AE47xPodUUFFiNLKpeqjtUKjdkPFsPLb3wYs9",
  "key30": "42JxnPRwaYic2MiSoLEjQRFT7k1pJ97YmAANtDq3Gsh6cCTbWcTVNAPyFkqL1MEG7hZ8nLUFKDsYrCoSV9nR3MXu",
  "key31": "2zZG2uX2bGBRfVtnusEJwV9RQjH1ABgpm99ojLMx26LKH2LMAsizWZdLVLSSEZ4DK8scjfpwqb1ETmPtYSuCqXGZ",
  "key32": "3wJRBwVnr1ojxQLrg2BpKaWHJS4e2i9wP1qUJjTbzc1G9SvRtcMLYLtaZeh4Zrnp7AzbdnTiZNeNBbsBJTyeJxcN",
  "key33": "4drHBWxeRZmQgF7izMYq4EmqGfro1Tw9JdTKbxRFVDhxPPwtYq6Rz7FemnVwZtXfxCiEEbTbKdvVDYGGsww8MoNr",
  "key34": "Xc2DamJMEjU6f7WAke1SWnR5EJWeavrECdbWp2mDFr9e3R9wbwzbrsdPFwwddk29dQ8knnzYxNPTEEYcWsQfeuo",
  "key35": "2JkssVBMhVPLcY9dN42F7Z9LmF6ngpF8bfYoPez3QRJHcB73b5yx1AuHrmSDk2FqH4B1hDJDAwsMJdjTS4r1McVw",
  "key36": "4q6qKDGmEY3nSgiBGz2nJJhqw9HaNV3itNVSNL4n5AvtRHoXcVkzFAzgzo2kUy3amKTZU2A5PU7TXf5RsXFRzwc8",
  "key37": "dYgZTJsraqUSKecKsqdasBn8nFCnHKfxTATtuVUkasBuWvA27LPxz9YU7JC8NxJzSJsTmYS4JUCWn3QrKK3CPgP",
  "key38": "2TcRS78TXaZq54bbeWSGeRTkvAoDqvXp8tMZH2PkR1A6cMS7nvGZZ1HKwbQGrY7ecbSZQddJTnRQBXajXcRMBdtf",
  "key39": "sRTfcVUMYsMydTzVRxwAVNwwKmkUrYoCFWuo9VUKpgrBkxsDXzkpFFUzE1uEQucFAn468sLoHymaGRo8M2UjEd9",
  "key40": "21oBZAn99akiTuMnWj3cHNMSkQj7MxUqHLfWyygVE9DdrGs9WBXtyw9VRTndwCYGn1XkCt1PNJ3YQKUvzTLfyn3U",
  "key41": "53ZFjBeeKXoUAkbh3VgF2xprU5NRKxAKLuv8oXrVeE6t4rATQ9ZrvAi2ieE1r8TgCptZDt8ytVs7vPadvyW9Q4jn",
  "key42": "5pgNd3NYCxNwaoYgXDhYXawNmrQoBNzjY95NYeQRd4R8BGDgSyqQCHW7B6GwPNwnq5o1oGdyxYFjN6XUHGrMfmV9",
  "key43": "3c3UPrVKyvUfrTxfiDC8HQnxgR12nSkgzqz5Ko8qcwFpKYDzyMQKL29B3eX7TrBsMNYvDBfw4ZDTGE3pLZwj44n1",
  "key44": "2vNmS3MjV1mb6D59MUh9nHztPjw2FryYKZrqj5nCPX7v4u1517wELUi8Rg4V7H1Ca5BipZitt1oZCa4vJoVcSNbb",
  "key45": "3QEdmyzSZg1QjFa6XiK4AATB3ZhMBqUFaMFhxWx2EAV1dcGFUFYo8LuNgsJCTnWVg94KzQazxaA9WtTgrEqePTvp",
  "key46": "24UG9T3GWnCcwFmBQo7tjA5hPx7QQ42DJSG7uD4dszHhMT1qjKuJnjUyB98GkXwLpory5hco5hu6PDNEzhJZNBVy"
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
