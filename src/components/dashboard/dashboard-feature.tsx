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
    "22wh9dFJrQnXCq8QTxjkALwbav774MV8DKGA5nAuCeLiHwXd7pGAeVrRuE14w2JLHSoo3Ehsjt9Zo8uTviPNwDF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21RCXCif72enaHpw2WQrrLtnknbWdMEXoqdDnrauzKeGKN6mTbd6f8wu8BGcyN9pnrYbxUMzPfHaQwAhPC3Sm2jY",
  "key1": "sH9y6RwrXYUSYW2UtqB839eumvvmSUVJYKr19qbDRPddaXyJAGY2Bdjw4ozCB9dDmHuD3VDGBiwYCkE35fG54h2",
  "key2": "nJDWywiUnDkiNoG2LfUaHNR99mQ4tFhCeGesMiXtsbFmty39TKUUdJ6mvattHkqVSTSRfiXCRRavsNqAUTqvWxj",
  "key3": "61XENN3oHYqAsjwxfiE8cXTD2dj1wncJaYbuwLisgDAGtAYg66cH4uxRBvoCPNYQuiEnhNDL7r3WaoQS1bd2TauA",
  "key4": "39RFARTvvPE1sir9Rg6MZXvyZHNTAfA8f58im8mUM8sQdCyjm8Y7fUanjoWVhWRv29fjJNzTzqxFJHQ74ytjWHiW",
  "key5": "3F32CmupeU5AYWqH4GegUivv5K5YCKFVDqxqaWQKs21XjZ8Z49hnWNxSfmTvWRY57MNPLrMSZrJSWZBnprLUvnD5",
  "key6": "3mpYg76ZecHS9nBQuHeeU6EMwARRP1Vim7XoB44KrPNYjSBFQyrmDTMNoFbrm75oYfg2uM5b9ZeZ24RmAZUP73Wy",
  "key7": "5VpGvau9pTbXFC9JCpwFUuM5fKnha5R8G5vrKN1RXJj8pZive7QwaWNApmbV2WLrQRBvr94kJsxfGDvVGNb9GaT6",
  "key8": "29nTQQtVC5sodxWqifin5fWLibRaafTA5bAaJ5LzdYv4EEwnhEzHNLe74ENmNxgE2uRXK1xoxqocNzoisnPa2znj",
  "key9": "3SzGv6DRWtv8ymNZ1SFUEMb45rJfRMYcNFQE5Ap8FWEffyoG9ca6qtsNvsw6fpBbtLFdNM4rJLuCmFrosLDMd3kM",
  "key10": "5pPfMkZAR44tMdGvfxpMaKbCdpwXn51s3LxmCq3XJBGPzi6UU3p6LW8XoFAeNCp7UE44GeMfCGyP7CjrWT5Bk4pT",
  "key11": "64ce3PvojDygzGLTN3h2wvsSrXFpEcKdsS8LiNLyLBMWjmfx4NzQCtNPWVwZfQyssnwDfRuAbn2nPfu3hAyeTRT",
  "key12": "283TVfnerekLaNRwAyDiLeqvrmGAxpxFmdA1wH3tnQBPcT5VRoV8NK9yLNhGTEVUBja9p82RhP6bgYqRr1LUBy6k",
  "key13": "2FcfTMEGUXsBde9dp2QdVg4UXCRhx1PXtm8UxUXmthCvxFB1S6xR9eiuiiAjbroRkXqBSUdFvgWAcfvEnwhUk362",
  "key14": "4KQ8z6pzH4CbJLUGo12R9JE9seuhKPUf7FguL42sn3qZPnDV29NBTC9aVvSCRwdFQV3MU5nif5FVuVUFckMHojzp",
  "key15": "2TnN2Jhh7SWbfw9PKaxQo44NLQndAJ8D9yWfBczNGhLSABNGfpmDq4aoHdVTzX7i3tTGeMXrwMUezqxNCc5qiQPQ",
  "key16": "3bStF6x2MNLxFetPzH4m7v3Ba1aHkMGPhsr6CaeqmwYeeJEmA1n3UavPQXG7UndYQc2Rtb4Ww4PBNaC1gp63pLVg",
  "key17": "xHoiabmquhbqqx5QHudGH22YcLePhX8PpAaw6zEBt5GKcch9qALE7yVt9hbiRwGVorkgikES8Bp6ccUgDHDYgpR",
  "key18": "3yHPbkb262fhy4uWoDFaHbYxdnhNG6Qfq44xtbLxNkDkxJVbHL6QG6Lh5HuGmCwgJEYokfaAhiX5rkR9uvBuVbUP",
  "key19": "kqbNyfiYGeFNwLhoDFpJbrfCSBb7Cwiadwk3C3ypTp2AZUXvnSupxNusiY4Ai6zFd3GpkVJ9LZCZJi3xEdzdioY",
  "key20": "53DvjxjVFyzdHw1e5KktUo2s2qE6wpeCVr7L9cSUCbKXX5knHPbhherbVh6GUwxs3QSmoxEDLCYSnHgKwj4xgfX2",
  "key21": "4Ghau4ArUACYfpUsu2tRE17fvb4sbnDxu2yn2hPQwx4A8d7ZRTu3ST7g7UR2FvQNPsKkJwLQpCAMb4g6sZXjV8ep",
  "key22": "5wVitfYXK1Gcd3x6B8xh6GcoXWz873tzs84kHTEfGEv86kcY2YMhYszndAKuib65aBjZcYibzsmfZVWKJnLYZWsj",
  "key23": "tvyzti8GQsTHthgM1hwCxqyN64WeQA5SqpPdA2eq5RXtGNwSAPjMGnnXAubLE6MKLFsYEx6eNkyE9erGi5PndTf",
  "key24": "5Xf7iUx1ATUsi8kxqAd6XYCe7twcR4DoWyR71B75htYo7jnWx7tbtJwqfZUW2yipXDDcFvwidzFkerwdggT1HnzV",
  "key25": "5VyznUyoPUXqjYQYuUYRkv5d1BQHJRfZYQgBGYiqsCH8bovR43Gs7JALiorAexKPCFk13LZQWSnuGbmLmZ8X7qDU",
  "key26": "4i3kqib2SpADhBvdHGbo52QRSF2D2ZSbYCPqvpcEqarbBzFasYRsXThKjmBy7pbPKA3sz6mHQpJaxztm5ncZtu3M",
  "key27": "76i1RGN69PMy5avR4RS3yJD5mGuNKa6RQGrXvXPg6U2QMkTJmum1A1iX2y6qKTyFeaiDVKxBZf2XFoFEXXZULJW",
  "key28": "5wiq85pj14D7Dv4tkJ1UpxcFBiSkSuB5VskHa8ForBsiQ4gp4cry1b4mgQhoCiPU6Sj3U4akghXkB7hkpwHndZPJ",
  "key29": "i4dF22YNuHeLQJLYbhosu7VFe4j2NFxLpdapKpvJJQhyzMPkzD1nhB2tqGryZmcUS31Poxn6CayNU7QRPLNvtXU",
  "key30": "4G7H39LqpT5FE7sSQq9aVKGdJ9xNUVBWnY1D9Z6WfKmfM8Vnnt4WkEuB7gDMgjbbUjVNdH5Ymub1wwvh66paDnLe",
  "key31": "5yP7k2CFH9GS6EELZegfLBnrdTmASYe2uaFdDaXcJfYQA1uhgbgb692cG41EiWNcBNc2Db5Q5c9BjzS2TPV9WM1e",
  "key32": "3SDQ9AD3aDNyd5Q6ANAR4rBXLYecJ3T8rqVPDy5Ev7W2trf3nkcXUbViBV7SFHYVswx787b8bWXvPRqfcsWsdi5E",
  "key33": "3AX7qmd1Nhw9JJmHpZQREGc1VYbq1kPH3acLPf6rufPZ3yXqjGB9dfpcVEzCfQ5drwDJxGuaGjSBGMukCffuBNsN",
  "key34": "3f5rbAJc68qEQL2UbhfvV3ob6sw8iinLTceWEhivxi9xR8TSxhi4vYyRwjy6Rvoeq4LLtDY42sidx8DczJmzqJJs",
  "key35": "2S3RcCaVGCxakb2peR6gEBhXK52fUcRsemhSnfaKqyrtjESoUYu9wiQoss884JK4RaSg9VjD93yivwHNTFJuStnj",
  "key36": "2e8KwdeybLA5XJWwPKnLk4e3X2EWHvjrZLW8TcquYHV8abrM7YRPZZpxk3HV88gc4rWpceCKTAq7A7jxC4gWxtpw",
  "key37": "5n2sUFMnL6jPpz9ZWYCbewByxJ3ofdGJJjdZH3PwJhv6AkWhyNUATuQVQMhZbLnB8cAXTwLtfyw1a43RxHSgR1fV",
  "key38": "2VMqZjzSLRa2e4L3E6SouaAXMRzTeez9YDKjZdMbdJFrWEHCL48CjBkXPXBEt5yiGyjsf32GY6m4uwUohmrSjk4u",
  "key39": "2wNx42skof6vC5bF86aScRXfCWi1BvC3SzXVct3PnnqLRrgZSNNoKsncae3z5xytFTGgLZC1t2v5DMWTEx6LYLdU",
  "key40": "T8XFJic5oco7cayecxGVZJaLrNsd1VK4yVUvCVat95TRm55QWmLK5xf393xW3dKQgKKyHnEHaVLzQpxxmq3iB7a",
  "key41": "roHg31wr5AS6XXkCvzsH2Tb5ask14xnFNqXj26WfyDGwVvaHWGT6FadAeUv7b2Jgy4ziTU2D8Y4tvjSNEFCYmGZ",
  "key42": "5JMGTSJsrkS3KpJDTXiigFNMhsjEiHUSYUsScWmfH3DmypZMwRxAGYeh7xkLbLDGAXkrMQuEGAtfqhBbpdVXpMam",
  "key43": "3xYq6xQGLZVX7vz81vWpqrQLR6fWK4Ew6zb7FsSNKGzbG3b1BCqFRThAFjETUWgJ4Fkk7di3A5kpFHLhxxJZxVbt",
  "key44": "2KFEZhcWe3inqecGomVSKVDXKR9EeTTxU9WjmcabPhwDGXgHzXDKma2MABB9KTUkJaDvFjuLesdyHc52J8naD9B",
  "key45": "2s2zVJqffZxgU7CpKVkdbNZvxT7Kth1H8ZLFpSgXZkLB6JMvzsTtMPQcqqoRdS7GvbEQwmKvurA8nVFNHVuDcJDY",
  "key46": "5qNzRsovsW5gDLaE1S5xUkNUaJNqnUb5Bac977GkrLYv6U3vQpPyHjHZMG3ihxb39uUxLNdQPd58zMPeQNfwnp7a"
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
