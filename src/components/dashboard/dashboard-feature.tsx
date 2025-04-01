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
    "3rPfAzgAJSL8k9Ji69MmZ1JPf9o6EAs5ey7WS2FDFFdCn2AK6q6hGtmNFGaPmDHGiyz2viCeUA1QHSJFh3hWx67t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ASi6PPX5VbUGZB5Aybd5VawprwBaVCTum1d5Pv8ESEfmXvi94QqHMDrSKgfgkQwAakavy3W1NENNX9J4pY9ewwH",
  "key1": "XMT3qUqBnSuLq3zBiyPwjN3J89QRFxMFZwgMNy3m9NET1ij1cqRemZ8VMBuiBqZKYzcsoPPrUYQJdozYMofX5YM",
  "key2": "2xbDnn8Z6v1EANuLA21bQPdL1s9MeLNhDN91xU1ZXGh4uAhyVM7b4BPf5NyR5Vco4Qey1daCLNzEUhcLMoVZk54U",
  "key3": "4tTKFjdYLis5rKh9cpCRRq2adeb9WUvG2jeARoNpZ147DfUJWJwo4ur9JEP14F8mxgNTqg9C9649pua1ZuUVUUVX",
  "key4": "4ks5qo9bx6p4ihbArws8C7LJTDhs1AaBKZ4udkmwqzMTesGrpeyNrX1E2fgmdtHDPKgXuaHH2q5RYNqamC5xH5cs",
  "key5": "3L6X1mqY7rTbWzAfYyakWMcziSWM137nWLxeF7C2HxfkVS95m8eUwwKJUQtsyXj1tYQaQ7Yq4NLnXJkvc2qrHSj9",
  "key6": "3zGnvbkXJbSNMWbnANCmkWfDGBhoByve3pMhSvJ4UR4Jdkz3MK2JyCyaWAFqVP9RJgQAMtryw8MoSMECbxuNhRsx",
  "key7": "2WBmx5ZbsD4uqNzvy9YF3ET9eCFLU1z9cLEfhZiAUarHdsDm8DbzqypTaLQwkDUMsyjNgY4y9TMgtfRZ7EuuUWRx",
  "key8": "YYdCX22QhkevaXVaC7GhpHWNdM7PWWNc8SN5nHj8T3pdrv6dqgFAutR6B57wuaCn7YBuwVDzVneoGSUKvfFJ6q7",
  "key9": "53GZiDYtqQTSdgKWfF2r9hXtsYAued2MviduR8T21cVXgfYGkC7DCTyqu5vipTAFV6UY5FgHegE4tne7Sp3bptUw",
  "key10": "2uCWdu13MJedh7qgc5kXLjfge6gt5bSPNjeaoFDMG9JexmX3su6Crccb2QuD1RnBnToCirXdqAHUN2jyVMByBxoD",
  "key11": "4Qi2G4YDFyZAUNbdWxPKP79VP63hKQQgNdzLNhRCrc3hAjs8xMVj7s7SYSXxQ24wCNU8Yar8327CnjprZtjTib5T",
  "key12": "4Zyu4hstxAv8MsayU6j79A5vw6MxBbLi734kPpf7i4LydnK2QnAPVBFvFV93MwCvV19mcx7Wg6vm7hXEbqZtruKi",
  "key13": "3UQ3HCRRdeeJv4xtK6YhXpvTnZpVX25FmjnvXBpi2JGV8dhiHTXRpQfY13wxSyWXP11ZPaSAjse2bk76wL1up63Z",
  "key14": "5naANqcFWXBfTC5LEwbMgZRapQs8nmqYuF1DqYyMnBP7tMPN6Ea56ptdEomYyjTy69gsriu2Hp2UzvszU6zMHYTa",
  "key15": "3ZFSWFJmtYLrNb6v43fo7KNETT2fRiJPUfyeZbT243ifww7CBnbzbnsKUjW8d9kP5aiBDypUqnPxwpVJwcgz3A3P",
  "key16": "2KbD37xerp47eDpsAAm4LZ1jUM588piXvCecnJ4C8385r5y8a84va79EMGrYAXRMfJ1sb1AFZaNGawquJVSsogRv",
  "key17": "5zfwUjGnbZoMpHbHGHzhgqvH91z3iCTrNLCZxzLUMSb8bXsvk4mJasroKjXZY4MXcxCCCXANfMc8bkhRML8GVwpr",
  "key18": "3t6RN5VaLJENwTo7WvzzQyvyx5h529Ty5guJwrAhT2RcfN2D8Vq1YCKVo7vPnWNRBYYoq2YTgnn9qSw7gP6J2Hd7",
  "key19": "3Gaeca4iqoi2SxtS88DN3T2G2xsAqzLjUygnknN1X6xtkKzJs5LUW4c6JqLCd8f4RZQmcssH1bXzkxvjTZBVLyxc",
  "key20": "34LfzaRwA9NVapGfy6EW6NqFgATzqBrmCELSSZUhRTEN3WosoEAeoVeaVpRt8Vt2jaShRwsqRpui26tiFfKBie26",
  "key21": "5ty2Y7C8NNwnVJXZ7Ng4hC1YFTqeFVXBEuuBvbyrzL9YHbPgJv6eu2fMnB8YPgmGh9bcr4sD8p1NiZNFwy9aZgBX",
  "key22": "5tXnPBZU7yKNvuYtSxADeEYeb2Tq2tDy6MrXc4st9Lk87E2Rnp5Hu8cqJpHHyQR3yXWDUWFjhqjmLMVBXXjnksVL",
  "key23": "LA7YDuS1SxzF17s2vLYAT5fG9YxFaccVX8UnD92xz2Maw9wYBKirkFhYCuD4dN1Y6wymbntaKnUupkEwpGtxtCx",
  "key24": "5yRPHKcSTNikVndRu8fxe4tZTjjNpPLiKPf6TZMWWRgxv3eNE4xhq6SyGBM7ijT1Sqvb1jYXCQV5BwxcZR8tASvF",
  "key25": "q3n8sViXsw8R9Dt4ttBtcHy11U45TiFvgipzkKyDGZujtPd9KztXNPaUckS5XApXDGQxn6y8Xo2xNr5eHWSuZgM",
  "key26": "2CKoEp2YSR4vL9ntM1oqMb2ndbVv3RVWErnyaeJW9cXTgvMLCLtok2azQxQ4yVUSFt7XjYnn9MXywCK581KY9sTb",
  "key27": "4VYeXZ1fPrgd9vUoie9zYQd6M4vvtVitaeyLYaqNCSSwvye82R9xUbUmLyxtMHgRbC71T4vsrS7ZCEuZC1yDm6Ve",
  "key28": "2kj28Y8RHHoRMY1958VFaa3PU6yjfW5UYKtMyE3q4DyQoALhq5dHpsP1PJeRQ73umBwBebhUsSFBT3CU5zrW99Bb",
  "key29": "3TenStSZ5ob972uXVsck843RTTPAf6362RJwFDraLbWWsWgdP9jPYLT8vtEBPvvBM91KiQi4jEwomEgz72DQTfxm",
  "key30": "35YDrs1VrtpzTTu7MtriPji67Gb3j3V1NsS8H4rfKbzjZU8WCUPMwFB58fWRaCmbjVnoRcSJDYWZfQ5Hdqdvphwq",
  "key31": "3HEAWP3C28pJ7R5vSq5G3RWMQMgJrvfSnJCnDze4QywKXqfHHQUMD9542YPvR5S5nV5iWn5Dmyp4kS9kKUBEwyvU",
  "key32": "3Z7vgTMGNk4pWbigTzDUsHTFMRgAbUpA3R9sirH4Ms3f8Zc4LeH6RcguUQCWdz1GsD3JpS49EcY1HVgjPMt283CR",
  "key33": "65tHu7fv8JsqkrRNUbCNYmrAs9SpwYWcLJZ3iJJuGhfbaj2HponTX8WV4ybTqtG1WMYFK1X6KPSEcLq5paahGNMT",
  "key34": "44X2Vj4UUnV1FfnBthd56HGvyXyeQdPiNdAKGaJ1QqW4o8NgguYzaJ1U2XYJAtWw5ygcvnZ146YU7hcSq2tyTVwy",
  "key35": "5384FEfodbQGnPxQ2zDCxeW2nkEs3NvxD2TWkcdErgHXqsKMAntteb7a4vJFjKxtYUovUDRDutBFnkNrzTgTTbqQ",
  "key36": "3gd737sTQisTuP49wDVHumCiy4bKw8wRFSPQ6NcakkqDJfJ9qmwfcuX8yoPiMs2S8v8NFMbV5E6hLoPDiBut88CE",
  "key37": "2DLixE6zu6xjsfsosDt3jdViN3goTAh8o7Jbxfqz75wxh4j6GDAfFY3eU2k2oc8JZpFp9pyatTfseuXRryfbfapY",
  "key38": "5qvERngHkrqX8t9e7GDU4oB8Z61oEQDorUGyo7i5uCFTEPNroTezT7zRSCKpTXtLVc37dYkx7NvXaUpNuro6AZNN",
  "key39": "4rdzwY2eoaiYShYpfkQF3zhhZwKSNLiidVdRpa89nynS5a5xxHWp9hTuASt63spMvH6TfpyjenHsc6MpTvExPL3q",
  "key40": "5BQe5gfRy9zL3qRbUgFoPw9Ru7euzRLyjNvjzeyXjFwaPCUCR5rDJa2gqGdoJmb3HuRtrTLaJDoEfEtPnSwYYZa4",
  "key41": "3diL95Kn65tKJx8EAiquPMr1Pq7X17zGM1vVirni8iZjbYn5ZNN9kPgHUsvDtPqJvNYdvk5nLVQfPLNLRnzegHs",
  "key42": "3vb2wcubQTcCUWkEA7hqN7hczDfF48W9DjzboosKRTAKciDmQCzWruds67k5uMvj3AUmyJoXr94t5zJSC2o1PXpC",
  "key43": "3HpXtagQV8qALyexnFkLN4i8zUrerdhMTuPkkyLqJPjKHXSKiMMT5kwqGmvBWSMZ5Dp6cdZTAGuXEfGUBT7LrUVx",
  "key44": "42veSJiwjJGT43BrrZs2n4dcPS3xSHW6DTHqzDM23BHZndpd44Mf8PdVLiKKnMHUfQAQSPp95ZZmFxdDartKUw3k",
  "key45": "4rXM4P5gBTf3x1Z4gyS9T1hVtFQCuzicCPA3WiwUEAtzyKDGaDQL5EMhhQaLfi7zZuLDEsBbPrQiVVuupFPuxswu",
  "key46": "5N6FKWfFEBouE8dkdW4ewAsYgFQawo9GjkKNzpVwQGRj58vCdq5PhcYUtfWrMRNxYiSH6c1pEH5yRyVN85k16mFF",
  "key47": "3zQWnPqsTKcY7XXGiVNaVk57keT2yKyHnV3CCqxSBSuQnHwFhfuSvyswjhk33voaZ5Px9Hr8EtbYkWL7QP52TmUc",
  "key48": "5rmFLeQ851Pzc9QZg2A7scE5juVxoAet7BjnqSGV87Htcr7BtpaDLTn5fzkqsxPKjiPqkLusJmFTcByKXzp29LE9",
  "key49": "4wCkUJ4rd8Nyyoa1aVfgLv6oypufBjLcUrr262z2KD6st3NBbKDZBXpdVu6qA6mLyU3qA2PmcV9dw4d29hCSZoLi"
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
