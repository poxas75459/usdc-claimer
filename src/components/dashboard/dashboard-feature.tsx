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
    "4URj6H3uMxzwZkFV31CRHz4p2f7LSDgFuzbSZwTkZZApWSQVaDu2p7q4Vrd3oYZif5c8XToMetWpkkDKN1WvS53z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XDvUanaLChsAFjXYPvC21yscuxXieRXvDbw4tgBPif8DVRFw95rdPH6XCY88DA1YSPovKaZu3DuKid4R9x3x8My",
  "key1": "2EYL5RxLnUY4ix7txxXvgrXYW7moLDWePxrCLYBdhZb56gGs7jniV5gdCPFbQYzNvrFKTg711MsXLaX91kS8xNYJ",
  "key2": "5RvKPwXWWrpzHhy7JwcV8M1khfSSV1RSqYRR9YLg4z2i9yF8yEgQ1LZs5bvThpYvF5JeFKP7GAZgiyMLc7jd3Hqs",
  "key3": "4TxCbFPZKyydVSzjr5n81YJeLE2MvCNSzRrPBshJGk4t3akyXPgP3Zbb2oPTMsmDca9Z1TtbFhSEzLMB1UMXyz9U",
  "key4": "4qroBxJfsKQzuuXqV3ahsjA2FKT1etMpm6YYfpPACAvcBxEiUcEdd8pAxRNtTdRapo8GG71gLZ2mQQtMY2UBBvwV",
  "key5": "5TwLv5GRAwmsQzymVAJcrBXPMESv8CqraeCK3NhxSiA5GALr9CwZM4EWg81ubzbsas2EjZczwQ3S6jatdDDvGuy2",
  "key6": "KtFWSmftfCEng8SQHgrdQQcVLZ69fkru9pvXoB9KniDNiYEDZNS41o49x52YKTZh2DkdrXHriCw4NXiLVCvNS5d",
  "key7": "45q7QiwTyciJB6Q6nAB6KyxQ9eBV9E69fyySHrN4TAyV5Aor1BWZFVgKWFTPircGqT1wf6ZZ9B56GdrHGSMR9pjm",
  "key8": "425pEZE32QHejrt7kyg4PMjwvJqkzXr63YcwKjfxDhWgfVVw4XWvRLA5MuSnAahXsBLMnTyqzA37Hjr6A99BxXDk",
  "key9": "2nHwRgDxQFnFe1pvKZckv4Pttu1HE7DqmqCsZzGDkfCrW6VdUMeJD5CTqcnj9h5rF5RBZdiMpQNs5keVr3RTyRza",
  "key10": "5nn3po2cjBdps424c1gcwpQsCs4tV59bBXXrNHN9LrPo4Yq7edZpwr13tVpLZBfpgVjeAqRrqrbNjD7AXzYT8WWk",
  "key11": "36XZ39kjiYYQc9igKQGXTqS12pCCyoNWRY8bKipMSgMpRgWPFC6CpUJxr1pYtdczWaUhDbePFJGtSJmrfWG3Eb11",
  "key12": "23jTqYEmHwt6Je7fRLxXqUiYjhKZD1aD7yaKUdKnvJdBUwZoErnEWHjLdtx3TYDXAyHANBLfrtG5xihEmmfqYovN",
  "key13": "2EKq8zhnpHmdvqfSTZzzqgWXtiVwi8KC3GPiBmbaZsKX5HzqWBwgK6hScowpdRgpAcH5JY6hWYNN2GxXF2njZ5Zq",
  "key14": "4E5NxAgZPMkxqgnRzEwxRNesq1dRELpKFEcWSyyNoai8MrNSLShDdgtHHWHkJ9h2r8TA6rRLJ5B3pn3Ki13wazZg",
  "key15": "4NW6jsWMT9RQETGHPBZfZSRX5mrnXDPTFdrzmUUTbqQ3H44FTXbBUHRTCg7rp5W2qSJzhe6BHRB3jb7nHoxygExH",
  "key16": "5DEpLJdbBtCahdBa36rgxyV13PHwRfb412Pb81sDqpjRUysDd2LfWaXNPXqEhSiGnTzpGSR74gdMBSzMLA2vLJg4",
  "key17": "4JJVjMsSb2FMXHGZnYHGhmB5ZC6GqhMJpB4FZSYQrmC5oybjLBbsnZWmYkcptSFUysu21wNjovHtmae4y3TVM4co",
  "key18": "RCbApS3wiff2k3L3ftZ6YJWWhFsRwMZWJQCf3pBcKF2EihZxx4oEcqQT8zKD8McEr6P9sKRZ37JAJbbHT8afNMG",
  "key19": "5VFktzsZKyw5xoc4iCpLnGRrzAaSMRG3D6iD6pZ3ijvcPjPh6XwXePNNHgY57X4BKYbjDqo8W4V4XYDtrgqdvV9J",
  "key20": "5cxCWDd6VbAP2d8pbPieS34oqcSjKLy7rdGHwGoi7R1WNjTTQ3zrDvbrRtu1xsR9mAthxBYhzb19YGaR4af5QEFo",
  "key21": "U6eaXDPWaZLXgwBkkatKCYbrJSa44jAkG7Wy8HPPpichoFYBAS7t48RCvzyD3MyViAKivmxCZTaWCw2DjF7RDNF",
  "key22": "3phB3jgwWVGjTQHbfTDvnrHR94LtJ9qavPnFBgyucTsdG7VeHWDj4DLWPda7h61CGGZ8JvTcvrYFX97LGGzJ1xyr",
  "key23": "ebZGgdHAYLz1Padj1bLXunpVQEwrdsykGqF5uA4x2nYJF2eHTZW1dX48FT8uMTVkjaFh9CHbPSSQtn4nLFQ18XV",
  "key24": "5ef1nESaGywQ3wdeB1nX6mADYCcPNhYmGmTMKH1XuMHEyEoszXj8DD7hCworxUHMK15bYektsywapQwZ4x8vaZjd",
  "key25": "5Penfzk9JC4kqpCxhSifxccCRSQ96EGcV1zwst4NtUDcEFqjpGLUZddU8XquSqhaMKqLhbSYhVdVB8drmo9Gsso4",
  "key26": "36kKjuEUEwdJhJSiEpbjiMz9akEN5ydfKv1tU5LHcuDRwCVcaVLK8TNjHza4FuPqdSLJByEomyJdCnVaiPXS3sPU",
  "key27": "2UHp1NFgAHHcJ1pVNPP8VtT9WxsE58LFFdRcQavVMbQbMd6z68x7kotA84cF6pKWNrzg4oBEcvPZJqQzY59mUpK2",
  "key28": "5LBDUCsKVjuU17sSPJCAV44Qa3wdZpmBJUr6yy8jGTUPtrAmxUw38nyf6G7TuFYsEXyW8SYkdLQ8gjBHGPfPHhSn",
  "key29": "3kAvKtRKT8JCNqAAzU5fH9kk8i7gCcJDzhh8pGBye6vL1fzCTks7jgGpUNuQg9R6wJ9d8nwRLKUp4nZEhCvmpehv",
  "key30": "4M8iyBMH2fdH9LLUhqwUg1sHiwPmE7T6Sf81pod98C9jBvSrKYQksmJLzdf96Vw9fWDW6eF4uehXqzhuiynCu8Z9",
  "key31": "3R7k5VAefuVDvaP57LJKDSRcxBL7hqyWyu33cobuc1fwhGJPfF8kD9toS17gRvtJXaa98wvT5SFUn5YciEdviM7E",
  "key32": "5cHuQDZsvJdsGZT5ZKZjcFfmAvA6FPS1j7R9ebhf6BDBVLo6HRZmtMS2Rv2xkGmdeN6VL4HwctdtqoZHXmHGx8Xf",
  "key33": "4E6FRRaWpFWYoexy2t7rbFdCDDsWQvj4TeEmPGBtspLpJobJkMtnxA549YEbPZWH1PvBaG6S2iS4tDHE5NyE944K",
  "key34": "5wwZPWHf75XtRXFD5B1QqTpeFJ3nd5kpAbFGdFamBaVNN1E4pPPAaoDzugVRMe454AmZDwjmQSMiuLuhQNPyqCD1",
  "key35": "B1uta6kXhFPkbEExuPB9aDh4fU1gA9TMxqgzJ5oi7Yr2Pe2Qt7QohP6gwfrDf6NkKrN3GAGNQR8hhGAyNUYNDaq",
  "key36": "5o5kwPSoDQ16x5BsWed2uWP9DvMKAy3n3Sp7KGnLCz9FoFjZbZr4wv2e96JRpskXCNBN2gm7uS95PaztwRgwWQBx",
  "key37": "2rPFBmbmVcyDTjhShJNrybccCqMss49zko9uoAdyjujds8X4hto1Fouh7yRAqE9vexBWhD7ExacZJmgzGbNarvY8",
  "key38": "2c9uAi8cTnTPxS451j9MgVM8FL2TMBAUM3oLHDvZN5PaE6BT61JA667GSQ4HqrJe2VNMa6EAkzXrbZY4nqXtAAfN",
  "key39": "jMnaZEeSojjXR3B47grwRny19aEaJ9JK9bkS6jUtj9bTHBfBu5HxJfN3ow26ch6AmyNgWXD2PQMMCgWZ3K7LDvu",
  "key40": "3t8cd3JRBuFZvkYHcbehFyhTkgaXJGMQi5GYLU1Pre5hhYQ9sF1YCWMdSkfGRjvArRBTYR9Xq95aSBdCbK46rUK8",
  "key41": "7YKjg8i1wVBHwRtZvhyRwCw6Kbo1a6mH9uEDJw2zsyXrWNJi3KApxFBDtt2TjvdXRdj1E4XZRTJTE7GnYSqSxFt",
  "key42": "4Fua5o2gD4kP8U7H6sjkSBBCekr9zk5uzL79MBE6PfU3ibKZqpVyrGLixKbMAdCqqEpa9MdVZ9EMqCyiKsQSFAj5",
  "key43": "2n3nyukpMBiDedUwfoZ7Zb9UdKrpuRME2aiPHfAkA9aN7gVLtBsxdbDKdMuwdDn5wu5f94d5LKRMNw6r1Pm4FEMb",
  "key44": "4VrjvsW1FUnjES8Ej5GhPWEAUhkS326ywfTgQK4zKrYnFPJxipgzA4u12uibnRAPTHRKrpf5QckZp8dtVZoz5wwC",
  "key45": "5UxWd3GKuDJz2QpW94GX76njfpfcfzVUKaEGPc3uygdHRqkjEwvb1v9xoWdFzK6HuCQssQShxAmGN4Sq7LLWrBCi",
  "key46": "3ywpXtM4JJeohPeVsavGfyoyGJDybkoHDUaN8FiAocaDK43XT2G2Z9hecVpKKAtnTWPpJh5Xdo5aQ98qBKSGe3GJ",
  "key47": "4XK6xaLLAPvLd7iBNxaZNGn74Ph24NsdCVGkkcAFqw8VUqj6JntA9f4spyFzhpTZMXBGPJGsWcaCSEifgKuRmHsm",
  "key48": "3YrQUk9UfyuJUuGudAyq4m6F4dFnC1UvswuYXVMtJqJ37Pvg8t3TP522DrwCkaHGjQLKUkT6rbeDoRyPbiDfH4hH"
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
