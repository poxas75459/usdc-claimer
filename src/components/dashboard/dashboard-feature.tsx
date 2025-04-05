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
    "5DF51a2zu7U5nrqhxB4EypBpngNeXZ4rWgTDHLZTJeiqArjHnBc4WBgnXVSEzZGaN5UBbXB2Jc4dD8fBBXqCbJT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CKjdmdmRTyDHgNpb2hgQBwmZsYssQhxRiV7Qr5jxMgqVjv2sLxmaPg4qraruV1ve4QbPKC8LSbFo6ZBvaww5a7q",
  "key1": "4hqNbRiQ5mAQmbkR8MFPN73PofDhaStdPiyKtTPh2zbqR9w3LtbytaUKGk7AjmEiAVsqxDgmPEd8xVctJdTn2Uyw",
  "key2": "4WBXvSKfNjiehd11G1qNVyuaGUqn2xBt3Qp39SiX9NE4EjLkv5QzgDu3Bz5q3FTAKcvDYaNGw1Pd7vDn6PzFhGGb",
  "key3": "4rA8xauNKEf8rafniF52s3tGsTB6YJtAxmBxKRM8LdfmLEVA1fjwL7FeXLpXvHRsLieuYNwguAnAy6LbejLKN5EE",
  "key4": "4CWHHtQeUq8Mf9eX1EYpAC3scCYzK7N2d1KNG8Wi5kwMMD95QH5LLRkLgiMPyZ6Lak44VkL8C4kVbMwtBQQjushQ",
  "key5": "2vPPGD2daWykpWFdRW4cW8oFLMcvw7LxDRswig6rVNskCWogQJxbpgx8mMoGuVjQcEmFnFtwvZGxboVSHKZnUWgS",
  "key6": "45PwpFWLgnH3or4pCdZJoZdg4DC3c3mEFDMFGfzX5XHfhnTJQTaFPekv1SZApQpjr71DuJsskzkzKp3GK7uQyeBe",
  "key7": "582mn8zniuUTEbVeo9tpGbcm9EYtpEmsEGtGKtVe6GffZXZAcgAsApKS1HYE4gLKtzWtgnxWpJ5AgRrjeHwcqHkR",
  "key8": "YW6ejFS1YdmddhmZEoDS9xQAefd4Ds5nvvNiUhgA3dBW8CeSoDDSuc1TD3u7anVUKT8H1Wht8PQM5XxSPioM43C",
  "key9": "xR63kiAP5ENBUVC1ZwrcQnzLbq5NFVd97LC9K52akrtuh2AWCqeWFJihKtVVAKyCcuLAKSJRjgCjjRo9oAoAoZB",
  "key10": "3mJtXVJKwobyepAXyE1k6WZsRgAXdFMsjwpy5A6y1J99fDF2KE99BmABdNdNExmwLjtdLM24SHUnhpsinjBfoTo5",
  "key11": "58vNHp7z6SkaUwb6ec9e6R9GhqN4iUFz4SCym4fTUqAUz3fRkZC8C4sVgysc6JxJ8XLCKuzSj9LenoLxEwoBsZkA",
  "key12": "EXdP8mLXrtVSfkXUw2Arev1R3H5CA8tmEu4frHwSRHW5GvBW3ynsT9JoJHMqWgKZL35EEAG4mbuzBanbCEUqsqt",
  "key13": "2xzs5mrGPFtzBpRb4xd6t3QGMymzSHBSoMGuDxAGkSMkpvGPdqjcLeVH45EJnF9XK33rtBM3QpeY7gKLdT4hpNyT",
  "key14": "5rdPozsQuktFyH7nMCVp4jwMKWQ31hne6XkQX7nMP6hQRYtJ5yLPcbTRexLbwUBEWtx2NprJyiyNp6tqMwmtW4aV",
  "key15": "5GdZLQpsrsUvyE9Px5pCvgp3sLzUNJkCQfj5qxoUxPNJAGh2tCT3SnmGoT8t2rdzMRFRZYLAnwZCEY5f9EMnSu3e",
  "key16": "2Zizyr2P1K7jx9Ff4VxebBQqDr55jSmH98B7k7uzBNUJTrWdghud7R54KrYdifcCKU9UzsBwLWSBP9xYFCMnCp7u",
  "key17": "3yFmweYUkZHhDGGME43FiyNScHJZsRU4kdrnrhhHaxiS8VGWDdnF2ZmhUY1KQoNQo5tssZuiiwxNG768ZpeKZR6V",
  "key18": "241LZjWyNxrkM4kwoKYSRoW23RyrdVMQkoFEBUrH31TiiKDwEkMZSrBeFSS7tBz8evFMqND6z4k4zyDyaJ1vffn9",
  "key19": "2Yq7YjJ4sjTuUw1JPrsyASujKnjFyegXZj6AJBXUha7nBZ8u9LaMvjWb1CSnRMJDvCPnFoc7Ucnd9WBkM3aVgStY",
  "key20": "4F64eHq8g1uvUHX68AR5SeM6t6ycydHenbT2JeHuaA4wUHVJQwvfCUssRZbujpAgF9M2iM9VU7ipgBQqtSz3XTnx",
  "key21": "21zEXPMrMGkQc86ggvdnNSM6YWZX5kDpgUcQvshVWxHNHG46nTS1XkucMZCMoXzapcU5zwMpcbbqqYWAYbcsvVm2",
  "key22": "55ofz3yNxZo2tHED87WNhHfpSakkBp15siSX4vYWDdycXb4kf3oeeLLdE2eRV2yfrxW1W1HfV3fPu68yYz67LTUP",
  "key23": "4n8oYQKspCUeiLvGwefJR5dR1LnEheGUNg96yJp28wxf1Txz8hQFzmeFF77oTRM5E7ZE5gh1JmVomXiYdDwrsjq4",
  "key24": "2SjcZHLQbNVG8RoiSQApEAfozoPbprw6dRZ8KUkhWLkEKUuj1NvLuYCwH4nUyQB6ES1LtJmV7xULQK61Kerof1oE",
  "key25": "c74CEQU85LW4FAp3yxzesLbBXuupUVAAdU5VWBN9hsg8XBdQusfGMi98paGtudJwEwMUhAXLCz4KmDuUHFsUkFC",
  "key26": "226KFBVZsDtGHc9ByW9C97gAcr6kRuBs6ZbSvA2JicJfdWUPhJJNRWEFKKNCHT94fRN7e77tpDRAE7J8ruT6rFCo",
  "key27": "2bDGDnnV2n5wZWwPUCg1137qFgkdgxhYEfsWPJitR89Ho3xvPEshLBSWi82dCuRdtGtEkevtJJCHBgxLmaRbV1aW",
  "key28": "5VX2ZCQ7xRoueUWSoLs4UZCdCc3zkLTUwt9aKMDvh1rqSRuitFqTm7FuU3jxJQLgNPE3GJqnDPyn3kg5UbLB5DaY",
  "key29": "2QALWeWxjd7YUJPNkBAQFgoMdHN2KNa7dqibmdzV6CZdRbRDLZuCGt8DpF5R9W5bjyM2fTzKEja239w9Py7UXLRy",
  "key30": "i12LCn4pYaDoExVn2ccan7Mjv8mwxs1tQof9a7CfqRKsbA1SNr87Nc7vGmsTSurftLJejekxs4SLFQ8FJ42TbgK",
  "key31": "4EfoQbUJzywL8p11iY3xGguGgYWm6z82H6rK5tQaz5xcrvqddurNGZipJQHDDK4eWP3zRU4Fd2fPpgM9EAbptg54",
  "key32": "3XX1psYupeJwhFQkXUC94qHMg1DEu2DjVP8FyzAKE99CqYcD42cQp6ypgwE5yJBSSfHyQYJMwpd5BwjTtQYoEfmx",
  "key33": "49AsCQeEjtNF6uhrHiGjaMcYUoctguKAfzAtKvGiFirBKjTAu1FyuhBZgBXYGnGvxSJv9n7uw56RZ4Pqa8jpPPir",
  "key34": "W41izdNxMjRMiQZNLcx4NxuKno4UDDKDt4cvUMinANnvKMAsnraH69BUjzPPTxRr2NvvCKBFXgishzDCT7NKWdQ",
  "key35": "2TGFLh8NvfE3bRAAN2uHgFx5aJuPx7fAR7rgcapnH1B7fqkRGYZ3b8tyz8vQu7N4DLEhADs3PVqaFnkBrnKVPzR",
  "key36": "2q1s2cotnhpub6mgnW8QfxjVpWsCN1Gan9MdsVFfm3sdQkjkVXVQoVCjDvBvy8UFjwHVcyo2HW6K9jdUxfWHWVKk",
  "key37": "9BcAgWdj1K7JTX98LWHuprNV5JxWTcm45Fhx3ARLzRHhHMfeWUZv77Ktoo3tBpZFRW5vw4f7LAsiJEdnr8mg3CD",
  "key38": "4cuKrMMvfUS2mmCcx6THQhopTrNLgvi31Fbm9Ri3M4R11N8drns5STP9UjbuL7Jft4zFwsMccvw7TyzePbrZ4F4y",
  "key39": "3j7cP58SRe5oGtLeRVwESmRkWujUFMcnNKWVc9PrFZwRi9mnCxphALVqR8cGhYurYxHCx17wHQ81GUUTgwfqcZCd",
  "key40": "rZeCCkNvgqgHV9pz9PMbapQMCxKdEMG4MSt6usj4YxJFCUMRm9sxAF9oouXbvyX6Wh86cYRFPwHAv8LAHYufDhe",
  "key41": "27yu7EsrnvdcS7PrYyZ35LbxZQwXLw7jfUUxc9Z1cNdFq14UiWefikHQZRM6tPy1xVPrirBUKSebnDVYtnWiNiuG",
  "key42": "4aVPttLkwaFKQQn1T5rT9xLefzQSGLdHZGjudVgYV5KtG3fG1rHkmRF2GRVBWZwjxaeJ48wk9ZrZRQGj8m8NFyw6"
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
