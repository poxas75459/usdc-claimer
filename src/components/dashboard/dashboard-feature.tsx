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
    "2sXwAx8bwYmLYEtxYSHQw89aBeB2aARdhYARGtGqRVCqxkrkmJnWCU29fcB4GoNyKpTULw3JxZngdgztddZmfpH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aX2Ha6q1kpBXZeCtyKQc4nwZ58tF6q3scJQDvndeWAJLEEoBhkaNBAYmosrq8XpfhcHTj1exFsemZkyKQjCvgS",
  "key1": "xJwVr3EcxH9iMz7E1UByUbKxYmFbnGwjjsEnxjT4NicV1Favpwfk9n5uWLu5ifU2CUtwZGy1kBRiuFXRk8oFB5k",
  "key2": "4zj4r8DRxHwvyikhKj5HLBjSMBtkwQQ2DN68PRoMLYHDejUPFEsUVZCrh3RFLEp7XATaS3XvyPYwkNXgziyV4MTQ",
  "key3": "29cSVxSAGGdoPfkgMU5eL4fYHZnZmpAAuV3SvsCKzehTVdiRHdUvkofS6SG5EzcvXqWZyDpVPeNVX2yCZPLYVCNH",
  "key4": "3ZvLBRhXuML66ZR2F5kmFx3ZLV1ijQ6dCKENVo8FRiqU6ZsZKg9ygxYPhAv5Byek9wn2u3YUJHTZGAeuxJ4gtwbw",
  "key5": "DSvZHqDgZDvJC891apT4p4iUcsTkaTUraxppdtFhfrKnpwUSMbeBBAbPQpuZeQRKPmY1EyJuETVVEW2bc7TPv6d",
  "key6": "3249nemcdz6j2UZArft92fpdZ5DxT8KgLSqJBv4gzWav1KZqje32GEFMiqGnC1KexkbZUbdmyyBy7CTjCNPrKHRC",
  "key7": "4aZBhpRYRyka8DjnxS3gjjrj9estu7aX3pKepHHwzmq2QomYt1JprxdxnMoupjktorZjWhJ4ciCnUtQA2CLA6E2W",
  "key8": "23Wjg33Y4cF2shA1ZHx35Brgyt7zZPNEitLseEhWMKJd8VHGtKGTzfo7HP8MZwkxy4pux4uuC4r2xyFqdoVQvEys",
  "key9": "3Xr6WuMYAFf8QL8pCiz4N9VNDMpsLzn4SwoXfi182J5Z3amxc8pnf6VXHws6oKCkdsHsGrQjS7xbaxh3GTCcSshD",
  "key10": "4sR41GNNeGCL8kZofNF3SFv6Aa6XeussmjmNfcznxYQwkiSaWAi1zd7X5VpmVpgn4MbTRVAamVWUHVhG34Fcd9VD",
  "key11": "3R7yvST1uPzvwtJUh6hmnq8iid6bMsyv6VmtRd7juGXFuSJPNyqdPoQJGxhpt5LbMtrHrtMfHMaEY9vy9Aaxsjbc",
  "key12": "5Ki46AghD77q7gwe6eBBxmViA7fNnJsFrBhVShbdd13t36rkKXNTuEcoZFBvctPpLrTdrQfqU7feURTi1eFdzBeH",
  "key13": "2UW8tJzN9iY3b9Hi5A5s69TXZYbNvEjhxYXAnVDLqfz6cjiukPYFXTUVVk9mAY4yHzEWPbzCZ1PABPDrxMtfdtGY",
  "key14": "3BSFT5q6p8d3FFLbamKSa5VjrsTb6fYVCcVgL2dBMEiXecECKoCPfaPf5gqP8YZHgy9FCibchUwoukKZeyEJWYNx",
  "key15": "22Uc2VCAwTcJcb7bhGczpgCZGKovPZxqNYt2BVxzD5dAocHkogcJ6ds4D1xtDWjkcRQacCRLk5CqXh4kfUHMswro",
  "key16": "aXQdEUJDxWYdBnjSUaSUPGakDjeyHXCjEB7Rq2Ejbdb1Yj79AeuKCNLDf8Y1X7PGkzUAffhYZKkah3iVaaN1AGp",
  "key17": "2yrxb2UTpzKz9wZfcg926TdoqtwdUiMisXn4bKo58cowpGg416EGmX73o6E5SCAqGMfJYToNSjuwwp9qCaxfbKrG",
  "key18": "25mnZ6yMGg9Ux1h9wJJkh2R1woTBczfhATY9duWJdrcTH6gfDEtfutmCKebuEWoBSzjswwmm1zFQ5rszt8cE9Qer",
  "key19": "3jYqMDHDUEMd5dGWqo3pqMKrzFtcdBo9Dh35pF51VA8BbaDNv7CPbQ3sETRcTcqVnRoyMHpzDXKnFsi7ZMPRg5JQ",
  "key20": "4wgUukgJNVxtFSY4QLgN61gvWjNSfLV76KzTXiBiZsZHsVCLNtyjJ1aTd5mkSUCdHnT1djHLho2NPU4ZypofKgsP",
  "key21": "34xhTiN26pXE1sXZrGqePaDpMQ7tdoJKHWewXsNpnm1TFQw4bsgey8iQjKTbSud8Rx6CAk2iTHvLidoMmySMidy2",
  "key22": "3cjTAsWn21hcNAX53z4ne9DxdR4VYU1TkwGBKyHyxx8w6bgTQw9puUDAty4Ug643GjWY39DKdxTXcfKN3siVnpmW",
  "key23": "4rBnY5oy4YB3jjYfRfPzg1HE9E8wiMBVGKhfeq1VazAsNNHwmYuXnbDhrBHR4g4BuCS9vGkHudJFT3dEuvvcpXka",
  "key24": "2VAV81tehdbGKrNu9fvZNAWgpzC6t9hwKNJxjZ9TaKwybFkTpC9WW7wgu94JWeVbURLHy9DzXQmoGKwtZHn4V2Ff",
  "key25": "3u841VeDiu62VHhovcYGCH2o7vZzgEECCSNeT4nMqs5BAGUsv1ZgXX4aPorrPywScDSB7KP19moKMQLtBAnKodfw",
  "key26": "66y6HmBNvT361QPKJCCD4WSkgqD4jTDbjk2GwFZaz4GfwCN87V4d7mAYP6RTh6V1g7Re9TP78HQPahRMHiH3V5pd",
  "key27": "4LzoVuzzfU64Lnojh6RYg4N4JdVaeKcz3YxP3ijLVVu134qGty3i635A6bvcdcsiY9kRTThMeyuhsRdCyTHbu8JG",
  "key28": "4NQ5o69z93qTqiwY88v9ahUC8m9RxK5ty3Jes9mmqh9cBrucgh3jLFKVuD82Lu6a7dwchWPCyWhj7RVmFtTCxaRX",
  "key29": "2hbFAWzJEvDSCazECNfn2cSy3J2zXfJk8ZifXmQNdqo2jnw4gd51VguwBv19RarY1sdBYJfJ4c2PDFrnxv3goEyn",
  "key30": "55vxkjLiRy1D6pVv6tkHox7YYEzNYkQkh1bbdGJjTwiN4qYcqczNxX9HAf5yRb7xuYaUm4KkHJSmq2Wac4qvR5Hy",
  "key31": "2UQ6XgQDkYpSKv59qW7YRsstv3X4tmaYSApmWLfzDoAARrj3fmzRzojVTLqDknqHRt2G2ADqvFtWJbVVw9KA3yYC",
  "key32": "2u7t7a3UEkUQUSD6xwrVDScHzkmDv9xaod8Nfjbt1XBamBRgfiTAZjBBRNjXnja1zFktbxxvwNd83ryeUgXsPXmL",
  "key33": "eaXkwkKADUWBa6xHwzvY4ef5Hhy2sUtZPtzD1kK3KkYXbt9Ryo2QCkVzHPyePj2k1dkPeEeMMyi6DW5MgZY7Xwb",
  "key34": "5bAgaLZiYH2cjWdrbWtL7Jy2eWQxXNhpTi9YYQnUJNo2epac8JQHDCHfyfZfMPYfq57KUf1RJaNnbNfY7tyoFmdE",
  "key35": "4QgCUAoKDnHZ3sk1g1CvKvwqRJoMPES8h2G7E9VN3Hp8rbHo8j53eyGkmbSMswVdMs2Dvev7n99GB2enC6rArUjj",
  "key36": "3nkZKBrvBupRHhG78ji9TVCxqr4xBsb6yFQ2Xzrhudn5vLZYytoiPbNGXigQJzDTxboYKsBLgut8WdAEyq3DUMnj",
  "key37": "3rbuaAuEcnMA5TjQzq32kRpZBHUhH3ePj4d8tHhaeAXCQxaiHg3FP4iPyfZ4px7HwBBbHtBg7FthWauWg2W3Am5E",
  "key38": "4Lpb9Zj2UuD1JEvy3Wysc41vSBdeYfi9TLYxej7bnEiSoogwa38JTR6VLKgdPSHALCPEGQaUuR1nC2sV9trMhSvj",
  "key39": "D8X3ZLnUNmptxKgebbdJL995ySVyFdEaK3wLPN3SzLKpazAsrSMGn7VU9cotDotVmhe2a5z71sdr6AhZomiGM3a",
  "key40": "4bY6jXZCsiD6cQ4p19XFTipnLLTcjjivyNUiCzrgNPGvyCFHSYQffEsupAzgSf31yjfLGaSxtS7jkkpthjxQPx12",
  "key41": "1AjLRTeKgMyScLBTDeBKmNAEeC7ReWfFMK94PGFeWycSXW6NxNcjkt9u9FuMQu8wDAg1984WyxFWvgUBtUnURV3",
  "key42": "5iav1Hc4EsKXdJcnfvwsxCjxGA76urdfkibn5TzjTFrYv4gomYHz98fMW8AFa7FwRPop8fbDLu6YQSd8sXi7XqDa",
  "key43": "2XkwgE1GKysh5mpVzMdPmRT56RRNh2NYoEEGVJyKVGL8cujksAYwr8UFH9JkzffU2TLHPtNctt4MNQ1A7EJcCZKn"
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
