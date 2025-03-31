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
    "5DmEc3J2tNNWoXhTMm5e5G2pEvNnEyshvEDZrbLizR6YwACW4zRA2BK7bHEBRpfHw338CxHM1PGLSQ1pDpj9h9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28inUCPA8j8jZzaK6Ndn7XuWauvehwJwAsKo5KkRM9AYh3pgMirFdCUJwKtdSSf2NFecitgsTS7kPtDAtWufVAUF",
  "key1": "4ssX4mzSvv1z3BBWmLX4w58rHq6i4Fidd3p3FhjB3YWtmCW8CCs2dJNvL5mDxJ6Dp8g2Thg8J4fBiRdNcxWm8zi5",
  "key2": "4YTmpbAnkStEFnL1gx2rLWGGSDoNQJzBWk2d3uyzEYimeFvpdM7obExpFDW7U8nczeM5nbvayzyvrAiP9ija3U3e",
  "key3": "5dX4Ny23EAUqd5DEM6dAr55afY8qRAmMWXH32NFfNPD6bdfLQCvAFw9nnRtbp2TomTx93Xhwu7nJMaPJdPThkrtA",
  "key4": "3UNj9CJF7pdVne2NZT6hMBEEKAMrc1YXBv1B1cV7CKaxGAoK63SeLLBxonfs2GjrwP989yLPNQ179udKdxUvWSwi",
  "key5": "aZCfWcsfyDMC1imcPVtyzAFuRR6Ktqb2UkpkHkTUjUuQjGaDEF7sMaeWUgwuBptqrHusv6dB11vXrn84y14oH8Z",
  "key6": "4oQdMZbJ7TGmNbhzP4VttxGKZePLJzxBaFJyQ1R11nftiviPUxFFCCEhu2jv6Sfwkz5ey244gDVCY7Btu74VCZPi",
  "key7": "4xrAAYQvMpFTFYdGGP3s7usxcwgd54nB5fQ4WVkxjmiFZ7ZKQ5FoCGhkugSZtUJ2d7fcqxC8WBBbFW1SLbubhvxz",
  "key8": "2e3digGhwBBkdWxkFM69Bih5hFpzypk4cc9HXPUZmTKLd7AFBRvtHwCFhRuethZqJCB6wjnusDzPRTbJ6DDE1kkg",
  "key9": "2Z6U4tJV8y9rr6wABVaeioiX6UjUzBcbtce3HMrA9VFsQj7jc1ehixRnA5EBF9K3zvHxhyzmoQ2YKyA3pFJnNwMF",
  "key10": "2VoBhd1VPBxFpb4zdZaeDZXdXyun1CpJD9tCx4Xy5QsHNBRr4GnrXgHPCHseZR7MkUvKS1mGxoDKpopvBmp5FZv4",
  "key11": "hzBJ3tBXTJK77K3m2yGYBWgmfLwDna3gWnZonZNfCdgZzH266odmvLkS2hq3BUwoJL6pJVBbUXGQz61audE8kYN",
  "key12": "4mbFo5WfV6znTbom9dM5xV5crLFnnY9RNYHqcYkDVRQh1sZDqRkSKFiCA7Dw9GdZYSdUiyzQg6gWyMfyMktgDAeB",
  "key13": "65H1uNeukTgPrXCtDWCME7aT5c8EFKcfQFNTTs2DUwh4m8ZxDL8savXm2zWT8nvkNiuTWn9cCGCygdFpzfMJ5Qgs",
  "key14": "2KiBMiiYHHYC6LexUutWuiRsqPnGQf333usHGAZ8JRZcmDLdot47qDowG74CMcSEycCnmYsTJbMyGENaEAj6Z4KL",
  "key15": "34XoSYvhMP92LgSx94rmg3m8kqta7QwXnGqpbimqLRiHLHtumypFmYyKASon6vsdME8kE1VrWkwfKRzg3Rd317Cc",
  "key16": "37ATGkmL34pgt6Hr83dP4Kvz61BT6bQGN7ZUnSYUmLHxhuuFqGkeCmPGRBN8jBG23PFDaoSNGUYzs5GkxMZZ9pbw",
  "key17": "61jg8v8GMFDeP66R5SN2RExEXZkPN57BdfYWmRpbeN1ov2gYBuLAZ9NbeM1mhBz8ZLvFmGhn3i3hf7sfris1n3oH",
  "key18": "5vjPBWRyJevZEBdAvq8pduDHn84mideQ3gpTngrTPWfcwcKa6Zq5oTvS4keEUt1agZ1dHeQrFjjwVYh2ErjWwDUQ",
  "key19": "3sLMcsmshDnssj8kMJN5mDExHqwN5mcAhxE5Lrjf1xJzfmdxKXFDXZb5nWD1jtZJnSnw4vm8b3sdk3vwAu5CjAin",
  "key20": "4i1ejPeNBtNEDo4R9KB8QZsLZHgNxA7u1kiNPB4YdZLYHPTVxrK3jLcZ8xpwrekeTaxufzVsUEyxGrBizxURCv6u",
  "key21": "4smS5wBPdERZjKuJmG5oPKYG8NoLWZaC3yxcHittms6gUa8occHvrpD8HkoBoyfs5jZ3ATkSMgGegebVNRoGWo16",
  "key22": "3Enuwt2Tatcck8c8KHhxEQ2KUbTvps8EEytK78wL8v99PGY9eGN6HFYr7rVYUpsozDbGEtgddynxZULX4JwPs2G1",
  "key23": "5C5hXnqgseMW9sRYgniVUNRhzrfHR1Apb9mzfUJeVj4FKDWtYJDPt3ireKGCfkNEZ42yLD2xyRjS8P9oekRPWnHZ",
  "key24": "3Biyue22eUz93G9KtvCZVkWQTNMCrD4HiCGpT9ZrDwxTeof2hj3fVdiZs1hpfCh7TEbVRXepJppeDTycPNaoirWJ",
  "key25": "5FsFmZt2rqE5u2k75M3ZDbJq415k8ajv16xgQ5irZ7W2hm4SEFAPRzMoVSgSj7E9fWUbxkLEStb4mdRYbXnqNPb2",
  "key26": "woTD6LXZfoSTosycwfHEvCBBoMFWBb5sytjsbSNvNjFRs3MZGYwNFn7PPKQcNyQacvWDYvU4fwcEJ8uvGT56n4P",
  "key27": "622vP1tAgvzewLmHmUf9ze7ARSrodTAnWDLQA5xQy7gGdLMJwEaTtnN5nz1hkZePxQcNpwoC8ZnLRyTj4pA1qhkC",
  "key28": "5wvHdaFVry5C19L77BvcfRcdeku2oCtpxwALC7oCJtg3tXvvJwjYqYHkvVQz8Y7k5Hsp3voGoRFPzgLToGMQ3fw9",
  "key29": "FJS7xmYfmbfjHoj9ZG7pJUiW51XYZLhVKBAsRyo1B7gyghAwdX67wYQL85zcmWirajJFZr4YmP6sfGaqSbCyMg6",
  "key30": "4SVxHQJeC4fCLvvkPYuXZPhtn6Ab8Khuvn1oQsQL2B5QSU8qWiQWSdN3CfTo2ExZzjrAgjqTeUKSR9eMuiDa9Nzc",
  "key31": "2hFDanxSzB5g453aqRsxWVW18JoXyzeVyX42d3ax2Ni2cUxaPeKRJiQWyhz7oMdvGSqmX43Y5vjNoLWZXWwQ34FM",
  "key32": "5AyC4ggETMZQSSfEdnFfBUKcScQF52s5bXdjst2FSJ6mq6AQGKHk3WZkzHAEXZ12BeRWdjdd5hK8z2wbpam4e7f",
  "key33": "3M7HqGKUFb1Li9FR7zVacD6883UGeJMdTF8HnK7rcNZfvF415798bbixKXKp6xB57D31rbKztZpChXxn9342EtzP",
  "key34": "3rJzyyWVp8vDWMg1LrAgdDTU638xFuRz7njQXrPqeXhwhiERWHAcFzAYHZRsAQQBp6ZigfZHfTdEUYBBAdhkpu4z",
  "key35": "4Z8kdXxbWohc472d7Zz4djW7U6Ptcx3oGgWD8ZeGxGE1FoCwoTM4NybMziM5FzpGoHg9V45Ah1CdEVNxhEehzGi4",
  "key36": "CSmXYnsK1ToGYYfWi6Lh1Fqs2Q2Vf8fxG2ewMGECaAZA7K9d3hU3UXy2VcJx8dwR4VgkQGFtHcF1UYZi1sg2RFF"
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
