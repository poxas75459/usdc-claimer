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
    "2dtAKgmcgMHSX7UdGdgTpNE31pUgqg3J85CuknoBj6P3D5tvCPsoJSMPEhsybe5roa2cuiCwRyk6tEVit6EFX9Ea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FSneEpdNVb1YNK79y7GiWo9NcmLbGG17QBeRuz7m2Jdp8Cs2fp7kjswJek7bDN7V8Nw3XHoi4dSomJzMH5UXSiF",
  "key1": "55urCDrJ1VjxXjkJ1jSMtywFzUh1jSFdYH3FkQEjvvpf1cLf859dkHhKqEbwGRJXLQ2o5jaHZdvwHVTV6f7AJMoH",
  "key2": "5VKWode86vcrMyeUy2AUBmbFEtLEH6jyYAYEJRXUbBoZZTV8u9H9PKMDMkPQwarYSShVtMcEQQkqFmAdZAeCFwFq",
  "key3": "27bzxYvnvgqgE1JowrYw9XiUaux1jFvxqwfM5DLk6co5n85Kwc26icum5akwUj6mDXj3Xq6NGQq2Z9qcrAEiNisU",
  "key4": "WTHMYPckBtuFXtLBimNzvizBCJFiwgmvjKpaHpn2VyxvtonpFPCKKShQ8DnuPADab4AfFCP9CHpHogcMd1N2LDR",
  "key5": "n6aDHRYXHfRi9Ci7bGshfVMtZCULMN1qQgohavFmjtTSeUGF9fkqz1fXQtUEQPJcSG81eSVQ32XjeDKLvkqqvsj",
  "key6": "wC19v32PeaC7bfP98iVtG4iqJDoBxByYiHLehjPM1yRdpSQZSnNFJjPofQrLv8XutZ8mxreMpZwSb3BtuS4m1qb",
  "key7": "4BEyw8VBV8xmk2T2A7iwH9WBsqVggty8XWwpng22Potqb8u93Fd6XL6RDDscaaxz5xEjDmfFvGEq6jw3tbgebKbc",
  "key8": "4J62ktDdHekfyh2HdGHBHUUkJC8QcWvs4E7AuA4xtpKEud4PWEWSmRnH5U8zQrJWq8vEQKeWCC17YBCZbLd3L8AE",
  "key9": "3PQMeVqk8DuGP2zQsDZdJfRasMQTqkXSyGo2FzoCNFXsaeAu2nAm5NLaULpcQ1YSbpCqu7XzBbBt8TtgnEtDm2g7",
  "key10": "3jXYjo5pZHEkziHjsBMnN8Vj7P9mT8XKu5Zb8qhUh3vwNhfGoEUcxyPREgfje2uKMwtrPN7DmzNCC44LZk6D8Upm",
  "key11": "3o7AZBQzx1ZDqo9wJTPw1L5FFGcBdLAE4Q6V87ubsyVHSKGas9EZ6y7RtzFG3tq4Z1vwSEDUM3so8u8CPrWVZ92G",
  "key12": "39Z2xZdMtM3atyR27BxyibZdpFotWjdh5i7nVjdsPX2t76ipbFE1AFSUaV4FP6AaAspEZgT5aZa81N89pYWHJ363",
  "key13": "2F1JTu8Y7yHXmwQLYWPKmuhJ66YcxwBVmBREe7ajaQyoTEiShmn96GNBGNzXahYmY7jZCQqQhsQ34xkVGHszrd4f",
  "key14": "5Kh4vxAbeuVjXWP2L4sP6a5bsxerDmMPniLQejW4pJrNQAPSs7tJYrjeA8b8a2CaHijoT5XEUU69FxRq8P3fk1zF",
  "key15": "3TvKQUSDQGZMpMPosRfreGrwAgqU64ZDFd9bM49mAeZTg1G2p75xp4cM5psAMtF4romp3FNQEn8oE1onTy2mMg9x",
  "key16": "2VWQgMv3MZCKKYhv7qZCSEcPaKAHQ6R5Ey5u2pH8WTCw4n2xyWgDQAqbRTdxibnHyDyvkBhRKevV1KW7L1qamwy8",
  "key17": "EZo4NoRTCFScFaPFAVT56jtZUg4F5vt4DxJMcqyTbfMGwm3N5DrRGbQwUQcpsQSR3acmUU7BHqCUaH3PCViUMi7",
  "key18": "3hXRHusyKv6mccR85XEkzWtyDHNUhpZdsiSV5PWWqQWeouEUoqv9ssGonQ3eAwRYZ9rU4VxQsjhRSnnEvhz8V4x8",
  "key19": "jLERA653rYUsepDdSG4K31XLTjHabmDBdSjx4TqYHvtK7sQHhmCGYAMqhw6FjZfw8C7LHzSoWn7jc5iy5REvukb",
  "key20": "643Co6SAV6mbtpmnithWFgUXi6ijH9bpmD7BpGLnxYHpqxcVbariWJ5Y96hvj23myo3WYm7V8EzRdx8vQDSoDmkg",
  "key21": "5HD5iaVjnXSTpRy1pE3vT6CEBdcJssEtSHnKHADBjSQx8NDaFVBd4X9oP97ox9MkZBzqjRUx7tqzW6nMk6rhtkWm",
  "key22": "3SHHjcFkDVwznFJ2QhTRQT1tWqo5jcPoTk34FKEwB8sWzf94Ym6wfd6LvGWnZNHWabWqpXectcyGW9mCURG5k624",
  "key23": "2fDPcoXWUofEdwf8dL9iHG2EiL89tEyorVemyWePC4iCRahbKmQJcBrihFwyyTxzbksBkq3m644cLPKidvDeWRtd",
  "key24": "2gbT7XeAv27yhhmZ2pEVj3E9AUsQFunyJC7PLYLoDfB4UkGTFJSjf5nbr9SVCUYdr7d7eXCYUQZ7tjwccATCkXfq",
  "key25": "nfaYX2y7bdudf1VUnu8xKhYY1Xc2yjHrVMA7G1baeb741HMzqddnvktqhW34qnrepjWAjHRpsQq6gLHnoMEQRy3",
  "key26": "4D5RXc18Hs1SR6YeuSuD3XXsoqoGwfb4LhCtxRZ6sjmntZUfrbuZySC6T6SKxho1qzrmhRtfnFmj7EkVZTXE1fTG",
  "key27": "41RrxFhX5rPrBSP72nWLNthLJ9owHujvSbEKnHjQKkh2rn8zj7T44myfHgYR5PFEw89Q2Dk5Rq5BdKgNRNgqVyKs",
  "key28": "52VP8zNHNQror6aryXUt9P4igXQhkKRk1CFjLRNTHFbBpG1DSwYAtG1AfTtiNB89L546VvsF5BR3hbeBXfyd5n71",
  "key29": "5WV94uLtTJHZTZzP18ub2QyT3qt8QEYCqHCNwQNBYzG37GvLvcYWrbJnvH8gFcY2kLrz7aVrUQbPWFQMebq1qnZv",
  "key30": "fCLrJ2cUtYjp58GQNCayTQnDCBQrx3QYGr5h8pjQv7VtJhETsX4JUB3QJ9PPwLhuzDhWv8cVxtp6ziePVQzHK1P",
  "key31": "5mRHdvHPpDRaAzjnu7S6GHNbT7uBcdGgSXFU7z2kdWvnMn8Yu5Xb77cHieUTpJwzZKsq1ZGWAX6fHnkeiaBotVQH",
  "key32": "HYThyG9qSPu2HoNkfKTbw6KZtdhSTJujY2AbjjCV8DwzMrhNMgHMEXihzzxQ9stVU3Eif5qatUACCEus45HRSM4",
  "key33": "38c8cJTuQEd9DbG15Y4xoJHaDF2CmPtdZKaCb4o9DAHFK242ZvQoxj7wzYsVAs6APXpSQM9rtundn4ETjrYMnotv",
  "key34": "3k3yHg8hZSZZseoqqXUTUVnxF1GpUZSHYcm8tRrbLcDmMvsksmgXvixPQPH2Q6Ty7ALjLdV9FBCuQcHL4BadyF6L",
  "key35": "3S8XFpUGxr9S4wgVXdSRB7vi2sTiNxFw7VXf3qiFXUUCRVNTf9R5purV6cCsmC32Fn2VNcKpuPaT2Bx2BMErscJE",
  "key36": "45dTvKBFTQuiDxthWSTpvjNpNzx8zJHMr6W2FXqiUBTRDfN5jqefmNs5Kzau4oWoYBoBkugRyemDYNabuc7X5FRc",
  "key37": "3R5ua4yWnDaM75a8YSxq4Wf6CZh1BbBEj4CUapNoBjTHxdYNLnPd9btayQmozcDkzs8urLGMSpphMPUTTe7b237w",
  "key38": "2ks2ZEVBdnjzq32PLqRnd8nixonEAkNnHF1ua1zRczTtpyTk1b3wc5gnmQJh4vZHwD3e3Wf15JcrPZXQyZcc5mYM",
  "key39": "5ETcX74XizjFGmmnQWcGVcZEyHqrhvuHSMj3wSamvCXtmLztjhxRX9T1pj64mZ7x34y6Szy3ndKD7yiKBzSjorsv",
  "key40": "5GZNwv1MJWVMvWzk3yutyPcBP6Xifr9RAgYV2oUmsJrkzauRyhZHaB4vjrfghqiugxQR3hgMLqWFD5Saxaz8ifA7"
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
