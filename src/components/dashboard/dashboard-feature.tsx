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
    "2WCJ9hzzqiYNxRdUH8XmsbaYCEmWkohHeGFxMdtg97eTktX1PA9tiVL9G7PhQze3N3EvbTWZgRQV8jFQiKMu63vW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ReS1h8FZB9JXSzpgmUWTXUHRAYp6iHptJGRnMCffMeXDTqBgR5MWRovmizWTCq9WMTT4F7wfuWVQ4a6YxaK1VZ",
  "key1": "2V5DYDk5Tso2RxnZ6Nx4N72o8qudrMCbZU2VmySbCs4drEWAnwb8qeDH7pAvirynqS6wnGgqyJMVdc24c6TEYR8B",
  "key2": "35JvUNmspgja2EVXzA4MTw5zEdHcbQRUZ1aqxgko3Um5d9FSXaTvuMjSpmuWn9VnsDcxasxobazc9tzc34piXeR5",
  "key3": "5EUCNdeBtWSgE96mJWaPiYBsbA8eSRn8Fh38kGPdF9XEDaoyyRDgHCvV355nMQb7efGAamy9mdek5iXdaJUkKatZ",
  "key4": "3rQYMVEvMjCrWWBNHxLv318Zqh4MgDbMCMwV8o2uZ4xSKAdyJaQQ7zxeRXCFvSKmXg2azXpjWL32irpbqba5DSxg",
  "key5": "4jPmyFcaTthxvvLoaamj9xECJaqvMB7bjpN6b8ePzxqYUa4zx9iehKTHVBgagDPSKSSLDFCUk8jVAwco7MrYqTgM",
  "key6": "5YJGqSk7kxDzvJCufyMoSs1FhmPBm6tiz9V4jzAK12aYgyuGcxziygdZGuffqjToLht9xghBKA4zifwVZNRF6bCM",
  "key7": "2QgykH9HpZpkxbtkdxtvzGF5gCgtMkAvx99wkTTrErZfPo3sdH1u8SDYmLwFij2EvZjxKhm34WQ9osX3rxBpQkSs",
  "key8": "21oWL5u1YcdGZ68TrbU1FtuebxfSnhUtayBUtFuTsVFTcbz5AgbMXnpqsPzRnfff3HLqwRqCpdZ6buLYEDD9CZUk",
  "key9": "Mv1AvGDoaCGL9VyXy1FQjq9xBwvhYGdHpibgitzumHT2vZ5ibvKSXYCTkJsRuTwBPaLTeqKLNj7EBcih63UmosL",
  "key10": "4xQ6syvq77X68z5Ayk9ti8VPrn6TNVMN1Cy1KM5P5gciDQXhjk5VK9oN3YmFWCVBixnTFDCtWXZVyqGY5nk3fT5m",
  "key11": "4QFwJ4XCtGg6i4pLCpt9fU18tkuRNydk4YQZng5vHi82y8CqtnTq8Ekw8FN5TR3a3go69D3orB7bma4dhZeRuygs",
  "key12": "Lqmc561DNkF7iaKA5JyUZvde2Lg8mBCdUTjZoxzU6cb5Xvx3g6xm26DAWiXV8cQh5gy5Vbmg7E6fxDpsAeUDwiw",
  "key13": "5QdCTqv49dP3h3o3JQNvtyTRzntSh9uHtfY8k5CYgA9EzopGpbwAtRf14BkCG4Mu29pyc78gDHsDM6pZkBQUtJcg",
  "key14": "4SPWMQQjyjsYs58ufEamdhoQrKSLuHp12N4YSAxByegkYPykYuw2jiLC3GfjBmmQScy2nuKNbVdmAFVAJrK8vPXu",
  "key15": "3RtNtzKMqeixanj1zsnaRiEZQzet3o3rZUiobQhZEM2bAGPfABmwazMzSTLP41SvLRjx9QmfUJDWR1JGEmBaxFuc",
  "key16": "3fA15aC1TDh4K6Vir8xXTTPnseMt57dsbqFcNUBTQeoLXYqyYwrTxRAGfDfSP4CKtxMmAn4u3GafSNAqetjnMrCq",
  "key17": "2JxXYZEk5hZgTbtzefJjoTSMbridB3hPEH8Mxq9Y95FgZUPreczPz9RtHfLtEeqeznuNFQbff45PFCFPSdaygJJ4",
  "key18": "25kUStqmt3eU1jW5CjSRw4w9ynL6jeJLdLhVKHMYrsyCHvwWV58HvA8QNrZY2pe7HdMN3DScrcRYih74hJ8hxwB4",
  "key19": "21VkNZYTyadd6yewbFPdQMBDL88GHt7gJR9EgJ4UXg6EHDwz1pjwb5gJnURi1pH7bMGhxEqZHPRqGNdsfvrqSEzE",
  "key20": "k5dKfnVe1T2Gge7Qxy4mtnSMuFP5r1bbVB9qCMKN75KkePuTSt9EdvERjozjrCcmgn594A8zNDZyxVpRqWABEQk",
  "key21": "2XHXpNpPahT9ErotVsBxRA5rkj95KS5zkro5efoFAyAxjFLGBVPhKJoajCULCXZmmfaPDy8419JXs1W7hesZ9tWp",
  "key22": "4GWb6ZxjZcbwDVNXiodx7JXG7cSuz4pXZFJkcvc9TMYkUZqM2xjezBFDdrq3DK1YjuG4oCxR4vrVazcPktYq8ako",
  "key23": "YSkAGRWdrdKhmnfx4K8RhvfiqV7cRRNyFwGVhquSfQdpzHGrLn25ZFJfgQXbxsrMmCEKfyQHcTNB7sjNRrrboec",
  "key24": "53F7BJdWHEdV4WfSnftB8SVyEzf3BbEWQCb8NBMxe7PN4BmGhL7uquC62J9yB1CwKK89LDPBsRhrQQf9tQNHEZ8d",
  "key25": "5wdgxEkhgwrvVd6E1f4QW1gfs96HcV5QVUiu3Ag4EXxNScHnACp2bLPqNRjC5FZAweyoVTpA4h7ZgRpitKRVx2Jh",
  "key26": "gagEiKbrF6Pmrvzwioxb7UEAuLGh6DPPQLskyLyqDsyT2w2sbTozjswaUksVSp2XFtgx5wPfSmZ2U6ewHtsW8YP",
  "key27": "67Py4aph12ENc5EbaDhjHJ2HgkT1vZ5XJUsKX1hd3Pcxbzvx22ZfV3m1s19dvygYxmYcRJ6sJ9G4X7vRN9C5kE2d",
  "key28": "UgCHP3VbQajUP2AMqhkKii12U8obAdJBzgwDswRhSbWvJrVD3wNwkrdgq5DSej8PC49duRVq96qcnzN59JmVPnh",
  "key29": "cYTCozCiFXe9VWMP4nj1qopSy1oHoRqU7L7FeU3MNwCrwEC8grCCZxXL1QaEdmbDCCkjELwexBqWTohyfAtZBPs",
  "key30": "56GPquMBhYfN4Hd81yxsoqJRJjJx8M6Ng6UpZh5HURL8rzadWqyhfQ4GRfroQi4vFNveecQJhNWvMgM4GL1WnEqY",
  "key31": "5Zr11aG9DyBSBdKndSPQM3bjQKGZs9AhRhNpN2c4tqLFWwiqVgkJA2yzq98p2iUXy2Fck14PHs4b8Ho5dHmNgLWu",
  "key32": "2tWUusaLP6xNkNM5RYPM6G9bLJWGicRe7F6MmiEpLQsfHzdk1McRt5mnWKjX1Mky1d55k8xxZXzkLCSc5H14PyEq",
  "key33": "2fgLQ1agH45MvmXPFyA7rhnunxmTyZ2xU22iTpUd2pBWSD9gX7mdW6rBVb5ANUSzNBhi3o1Bm8WiLbsmHHVsRi1y",
  "key34": "45VqGrHvztv1f2EdY6mDBdujfbShKTEs2KYSVixe78o1R7S8mnw5gynKj2SGBRJAbH1up7ZkWuXA2zJvYwxx5pBC",
  "key35": "42oQ1LLAEv6zR9ZTx3CcdUrRufKc32yibfEcsfhEmXx15fTJ7P5Y54mU9WHvkxeuowWPJtRqTatxoZyq6zE6PfJS",
  "key36": "3cqVpxSCdx433YzTvPEW78PaMb81qNngYyD1YAohLr5hLhGqzvxJQgrsNFRpZmtb5ba3XxQAYvVzUvScECMziZ1a",
  "key37": "2HdWaaa54UCGebmMsXfSEqYkgeWZhjBXKg5ws5nFn2gWg77bkZbMknkAjPFDMJW92HW1owMUnPJQjufPp97uauw8",
  "key38": "4mq5sLn5xtUTsnBcKS1yMhBfp4NyL5W8hZ2UrvZm9KXkr55EKu94SRvKMGfaVTvFrNrpiARsG71z9TdS1fVxp97E",
  "key39": "5LP5i67j19zDzcZWxncc63yL4XkNc8mmKWV6EmzSueNFefyUHUYKpCMm3mAh3KM1XDRBaizjvojBtWHjRKYCWrLy",
  "key40": "3hveULL1W26UFwJ7C42P2yyEtNq4Yc5Np9dx314nQa6VFkxPVu3s32JVWtQxB9RC8XjEgxzVHLVKBkpoqQ8yk6WP",
  "key41": "4e924K4S2znrVHvj4QfYqB1wfrt2Lwt4QzheL93CxtCvKjr3Q9QbjQGQJV8EBenHwRWHk2YqUxW9Rd81d5ad8Pnp"
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
