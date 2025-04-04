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
    "3poubCwvnJPdEdfXcdzfP71S61TAQZQ1HXHxKMEiWrfH2hrvqLZbmi7QgVKskHuLWDzSDCXsd2Wz8mg4NYeydMUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fp6mbCrpka5BaUJ8TXV8CwQzBwjt7gDki8TY2KfKpsxBMAb6XS8mH9f6tiTitFsYAdbdHqYhdDQ7eDr2WGR38jJ",
  "key1": "46wieMs7JoGYPAAMsDhC5Ezx7GJZeTk9bRRq2aNH6gbkpYoTfPbtD9epRPUvudmZap42V39ZuMCAaFw5FbyyaUX4",
  "key2": "4fm1EKc8LcZaN3uxHsoWSSFNG95PiKeRjPbtCAdW5e2KdfvmiCcJqbn7BJbST5XMK1C2CUtWxW6B7ei6S2ztr1pn",
  "key3": "4QJ3Qrfpvy5CLvJWZ4KcqPQjdR2i2ZK1kCU4KS7WcAc6SU9N2BXF7FmWdks7vkn6kCPxZuGQ93VGuQkqASCHpEe9",
  "key4": "2xWH4XkRiJMLE8C2isaAQZfRNhJTEAFojfFpYXV6e8TNHguhW6cRicSWCSqJRAfN42w2VHgfo5KFUiRmr7EFhLsH",
  "key5": "2xhv86LAWqyEMdnu2WhYb4ZiJmE46Pno3pqVCsMATDBGrotnXbomVndHTpp2DjsQ7QmpFdVkVDaeywtRTtxtqeEn",
  "key6": "4HLcCNYwS2wAjPigzCf8cwVSQKLGEFQvF8PfgYiiFyY44R4DcHDLzmk653SERFK38wVBP4uEVekpueCv4xwgRNbu",
  "key7": "2ewUHuiKuwKaBEGoDVkTKKT5Pvci9QmVm3ybk7ZZMF3tuVCKg1fufaAVAgjqTPWtghremX9MrvT8sJt6eF9NXsvw",
  "key8": "2vc3kGuHLfohQQQoWCWYASWFcmCPgM6SQHXpuyupLobKWjWNXiKxRRM5bfKSRpfh1DK5XHQWnvXp4eSpWWoNqtpn",
  "key9": "3eCx4LfwFRGmamJ6tdqBsFHXXLTg21YDiF5aG5vDixbs1XN9x8ptkEwdzEUYNRWmZVj3N6Gy1JDie2oV5ybmUBKb",
  "key10": "23uBEhFfHWJF8AkHanEXREwiMyhSTDEAi9AvPM5meti4N8LQV6NYDmdv9uQ6DATp6dDVWSP1ch8etv1SkziRQgma",
  "key11": "48hgQFcKZ9Bfj6LTqHZD4Evvh8Wb97mkPNtw2uNLcNa9iqjm7koUAC556k6NxUcia3UqsVndmQiqWjm4nCRvxWAd",
  "key12": "cjY2BJpTAAhSfxbTJA24VstJfA1W7ncujgk4X799AWqkpf4N4H2ySQt5QuMNi8rBMSgFSi3Ruek9Qsv1266agVZ",
  "key13": "2mzTDfY5FQcEvWpaC94h4ZfRchNmdYp4dYJKYNF5TARxJhWyArXrKKnL4afeHQxrFmzdJE6CB9qs8nCi9yYFrUoW",
  "key14": "4Swa7wwprBYGFVbSMWeDbYEBoX1MzWxbtmm6vX6Suk61MKWCCtrH9WvB6TaqtsoMCZgyaKDr5NX1Rn1tkuHxREma",
  "key15": "3aLTQGoQLzX4hoyDJg2A23DxkzqwCU3gWRdyrNUTbqeS8boGFHGppqDzNvo7YfXff7MpBprNJTtTUNSMptaQguBW",
  "key16": "zkVHzwXPnsbuV2rbb4nU1oynFgzZuCY81G2czJusVPg5oV6xonU8acU7tFzVTDD5T9pR6NXW5NmuGoyNDNiDVmM",
  "key17": "5QUo5uf4MKbapSdNnQmoP6YgfRu8PTcWePc7hQJRJv3wf31goDi4MY7BKpnRG5io5MHrtvtrhQoJBp32cA3yxnzu",
  "key18": "3rHD4RcgaPHRRNCPmzhPZ3WAyjesQJy4WUtgQUV6YyhPXYyfGhERSdbrsmR3qb9inJoLnANz1YcyFzLJ897B9ycR",
  "key19": "4imZZvL4CxYNRdj5cj2kkfvaKa7yBfQVqGy1JMsP6SnNSKmViW9xZLarMBNEnLsV96HmPkQecJnneHPwkaeLg4UN",
  "key20": "5Ko6zjBPC7FFwQ9MWhp2gZc2vLZgjfEg9Sh7RXJPKHzKwihBjRwp22vzBFmaDrvQPyrzB5HvrvQLbXZTHjBe4zU2",
  "key21": "2RqybHQWgGEYC12dtrYGLMHXnfWvv2Xujn3sHVLnSb48YqWThJf72SSdvnyFkL5p6n6UtFPm9MmFuVPuwjan8e8w",
  "key22": "4TyKimxkcFbJcH67Q4uMmu89ydVRsht5gzvyAR2DfcBSnecbptSHJjbKF9ZdA4G8bYquJnCdEySEwggKFVfzsp4a",
  "key23": "2T9j74B5gBrSxfeFca3pBUxEYGYQ1nem9tx3aTRXipphFtQo38dmVwqL8e9azLee9JiBVqufwxBArw7pGqGWoLBi",
  "key24": "3C47q3TVvw4nprGVtaUcox4SThJxSFbPYVJxmaxM63xdxWYHT7J5Jxqo99T7r7u91HfCWPC92HmLpdPAdzUPyFv3",
  "key25": "4vSRvpgDn9Pg7yovGiM9uAqnnWrxJvzRmQq96BAwfbLmAvfzsZcacpz24g8Wgafpeqtz7RQPVkWvisSNu5uMsJhU",
  "key26": "4g6uxiwgHtAGiy3NnTHTynQXbQdmTQB37JrcPH2SWjkBrVEyQfNG9JbWNtgGhtnXtDJS33VuZWhfRpmFMfcqoP3z",
  "key27": "3UKHHJHcceLDNtUPY3fQFKwiWeADVW4nFnrUbuF3WT6G2kat3aeikwsXxpDv48KsWepDj2wNxbrH2sn3ysHbgGQX",
  "key28": "2eYe4hnhdJDgYZg722bbRPj9gpdo652iaQxFhEkUfJnG4gTt6vR7tgkJ7pMTKy4Agt2JFxVkQZMnLCPtHaEhZb49",
  "key29": "qV6UNK4VKRfeLGGSauNT6ExmTVr4r3Rc5Bdp48uv62pm8ynUqjLAfCzwYRY6cgmLedC4DwYWnzv8p1xhf3KnzN2",
  "key30": "SetPhBDF5JyJfCpZ1JLL5Dw2HwNHkxKdxvM4EGpEpvSLE8UKTSKRvQwEm1NJbAiab3PF3wh4XoFPV6A9KdCLcgW",
  "key31": "5cWhQHtQ5jKk5dh4a9Lon51xxo1H1RjuNKq2V5SByqBYjZMqFSqxjtXcDRxWJvizWkmshtf7Gi6sJCGRsuzbThV6",
  "key32": "5wkh8gYWx3k1XZbvZfA5Ra18zWBjnKqPWNTCjYqSf9GETbStT6gRHes6CQktjWhUgEBaPbjjrzETgNFGwRw5csWy",
  "key33": "3TdN3LhUgAr5q7qhfoTdup5ryxVaYXff2MAhnst3cRi8eeVxp1fDg8vvjvxKGSssjpB5wndrvJL2Azqf4o3Eohur",
  "key34": "3B2pWXcJCN7FXw1WTcrvfCHx8d4z8YQHBu6QLQearbgvLFcscaMzqYv4FVQEisbjvfqjsXtwPqxZ49xAo5e5PYpx",
  "key35": "jBYgSdwezWGYH8DNhXHYKYYxgFWiVJoSZXDyxgPYX2c55U6NkaqtPcBX3iMMbBtkUtrJQccBiU54zbL1KANAphd",
  "key36": "4r6KWnKncMi1pDi31To8byGMcwkPEk6Mc9ryZZJ57UqH7g8j4uFumUyf697icEVCSwk5bRmF6WuWcgXJD22C3A6q",
  "key37": "4Yos3z6qRfbHFkpxCeD74U1jEqQWoFbJGY5AA37a1AEQkv7pTbz884NiuJvXuvZJZxaTrWcGfH6aL4csgWZ63DPx",
  "key38": "4cutGbJU8gKd8snbrGNwQf6VEHZ1VPRGEfLno54QNUWGFfYnGLqrDJKzDZiLKotJrajDKJtpMRXskjaJWqwYvMuA",
  "key39": "378NwJBNvcUkoAgF9HHsfsKdKK7dqeTx34U96oh9uochbbuKz6XuffF1ZbG5VvKn1ytTLQRo924GxMdLsXYApiUZ",
  "key40": "2j3tMKnNpKd6xpE8cxxH1G4syAuJDq3aBsJi11y1mcQH8xSzdSZLFEk5ZhQVg74JkLBTGenScisPjsXEkasq6Aim",
  "key41": "Szz7EWf5mqZuBAgH3ULQ6vfQBd9kFYpbA6G3SXzfmQLpVJdW6rd9LdMWBpdj8CgoeCcopwFseHPkx2kHEMfNYRu",
  "key42": "YK2BbiBMyQwh8N9oX1THWEB8ZsNwSavZW8XJ8sSdVQfmSHuqP4wK4UL6dPhcxHA2hjBhjFqxKeTgPY5f1j9CHjT",
  "key43": "2kGmHzUCpBe8TWLDQg8cE7jiN812RAkDz2WijXPS36w3PrHWaEoUzEZuFpKTaDzVMZVMzVRNFP4DrbVYgZfxB1SR",
  "key44": "458iPUEnViK4R3dsgXy1Eyynyg6tZ4L1fYT8jQwYsyQQbmeSG8mVEynpbDFpVs3ZXJmqBF7nCaMmNYv73GpD8jiN",
  "key45": "513oPJPVWCiwyFwzqG25kvEwXGBp6rpB1yxXza8wmEjvPg8BpgU4CSyw87VC8PMTaGbHH3MZSq3uojod8q2U7q5B",
  "key46": "3gwrtYBDPnK9tEzmkCUitg7KxHqx7yYXjvcYN2jY8hxNcj2WoMAkRWx52cjTPmJkDLiXCvd1NEnU4PHahnQPBgCi",
  "key47": "5o5AGTf3eLArJPoDFCRPZcFwQKDHWLG3iMfMVzhevd5LvGS38nx12DYXg8MQT8ZMFJexGuQZKqARHcPjBU9Jxt3G",
  "key48": "3qKgsJd642aosc9T3MA1bfjo7fMzd5idPnZBFnTfUWva7dEUdgnCHjHy7VcxibPkoBhqNmUZHY3Jm9MPxiUi2Ukk"
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
