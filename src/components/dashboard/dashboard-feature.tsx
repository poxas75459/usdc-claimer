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
    "2oRwsQtq9vqnRW4Wvcgac88Vq6qLDThavm8NDxHEk3YLLWTUyu5t1M15dY5eQmShaLnKx3ypESqiYjiEb3ed6gK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45sKFTEkSFMA4Tm7pPJuadAibxm6N1uiaGMfnLyJpMBFFweiaeqwTxiiFk63sWLHH4YUsSWdiL6VBWSDdKqCYHRE",
  "key1": "3kATAiYZF2xtJ8TtcTEcW9KnSaB87BitiuyLz93z7bBXTH6XNvEzsjdR1sTEhqbjcrSWW8gz1pPniFv1iR7wcm9j",
  "key2": "5G6HTRK6rPeWPNXD45CXyCPnQj6r332aoGNiCo7tUUWk1zfH9Nrcriofv59XwGk6Wkj3MYQAZ7Y9czGjNkwSYfch",
  "key3": "3xg7FXZJhVzJxtUwxJq4SHwHXUtgvdKsp1rLvFMGVWtDhppUb5ZurnNgG8NQCZUBrncP4MQ42Vnx8QYUbnuoiJe5",
  "key4": "5tquHzcxZYN68ZYKhHTrcCbjMLtLgaVsUwCGqwD7WU8Ku5wdAtt3BiaRJspGqMWbQh1UZz6vfihnXC2wGzZ6MTjn",
  "key5": "2Dy9iqcNo3Rb5ttSmV8kXhrSnzAWsUitsg8EKqD2x1xabeCDTFx2TPdeekdEcReqj3qg3KLRWWxRQS7iF2Kf4ym9",
  "key6": "3Pw1HFWi49xFHZn1YFqkuQv7pmt9Bg92TXZ26pg4zgcxkAVZXKzjEcc4hB32NdZ8aQbmdLp8oiT9XRJ4scHVxW1",
  "key7": "5rnSgeFcV2gBVoTAKkgb4WFGCS8VU3gXF2v49ft4RAh4SyzJPg62m5zYtiEmWLwXq4GvxYtBr2ebgnMp13dk3HRz",
  "key8": "3VQw4QEkkWfwsYRermKtTDjtLegEWUtGyQcgFmHhABNEcB34wyADS3ii66yKypQaFNxvuRtEQE84dF7nSHzJo9F3",
  "key9": "eHc8P7v7tKVtVrKC5uS8KVwTnckjYrtHGh9Rn9f2rnPdQZzYerwt2izG4N7EYJhssz2VfuM5e8Eh6riuirrv2Ar",
  "key10": "5rocsJXfzMcQWwCvv3M34cUpeXKAJwBcUih3K3VHk2UsFAQ8Gf7HtmPKTFkZczWVPSE7WKCmv9tyMAb9wbHag2A3",
  "key11": "2BYe1CVGKKnuhyLG6pgKUK4tYzf6wVHz6qeRrisKnWoR5DfM83HWarbEHvBhyhubj9gawFSU9BdfbbE6SHKGGnZA",
  "key12": "3uL2CcTyecEGfezXEJ3CB4Bjcyoip1wYpLJqjh3J9JEie9yW3ZK46dKPQpf4urXvpbxFRDBYQ1b7rgwXTqYLSGgG",
  "key13": "4YK1n51gL36uLGwiQewMratD4u1HQgc9uVZo1dmEusUgr9XMJ4cd9jynQXkMKzFshzush89F64ohRq3MZMR1NqU5",
  "key14": "3Tc7pTp2Di218WKDt9yqGrikhYtSykRA5GVwmK58rhcmCA5YUDy1NmuBCKfiWYcBmcrivPRpc1QjV4KeJupmzP29",
  "key15": "5oR9bCaViVR1JGi5zFoG3TU8B2tWU3mQKz7kDHbR6WqEsd2PW64SBDR9oYSqmToRHh4BPmBHqfhndN7qj21Hq5Bm",
  "key16": "3boPR5Gn7EvHxt5QLAa5DxLvD2nGiHugP19N5zaMvhiMqHWyWiMKgCvRh13H2UxBukKUs6S4bMZgB8nsZDcm6wQA",
  "key17": "26je7dQxBjSYeqUuC832wWkifEbKawb85vjr5rDvMLP61uTz8UoMsizqjEugYzERic5Mb8ykvR3k2S9mVQJg5quK",
  "key18": "38bphumMzNAUj9tVQoPUhX1xoa5j9KhAtzFoBzje9JQKx9ryogY5fNrrXqCafyfjdRi3HM8JjjXaK9vJc6YK1TWj",
  "key19": "C3fHQS4jm1HfCRhonkE7DMKtngPTStqDGtmUvc5Y1xvw6pWTx4QSsykB4oWAp94Sshgq7RpNxZeBxDip2Xy4bRZ",
  "key20": "36UomddiSy4S3XhSzR5gjiGcemi1HuUk6bxmJykHe3FC3Mmvagh2ymzHYyK1yXvy8QQnX4RkP9PeSMGximAZH8QA",
  "key21": "2oavaBH1fiQaDDakoeMA1CDThiitLxep1XuS4TQUSbDzv84PR9Pxgi6fQ7yatxhsh5vzBkhpWAknoFmjzdFTSrsn",
  "key22": "4wEJsjj4pJ68Mkecd6J7ceTxCETVaV1UXJoyYrRpqZoEDdTZSdo2fSTd2C7yDXq5cr111qFm2M4bG6oeAfbu4CTK",
  "key23": "3rgt8m19id9qy6FYBLX8XJZTSD2fTu8NC3JawCywvxLnVwqvnFZMayb9Gw2KEEQrqBJvKEJJbkQUTigkuaK7uyDZ",
  "key24": "PcairKQ9brRWrBmCJwf13Lo2ahcdwsSCn5s3CpswbKCa4Yi23NpQR8nNLmVTo37yWJmgzn8mTWTu79uaaFQN8rA",
  "key25": "5uzS4E6yJAieC9H6oxqBXE8dH3URD7cwQMLT2wyBf7znVzogjcaUsCayBCXRrxCDGzgNtsjnZFA4KnKVA43PhLhK",
  "key26": "5gDCGmCW2GJHFz3iGj1bAJDXDEai5E9v2PhVtPMUqt1o2ig3sL7KSpc1KjCXFtm2RtnZu3YN8xfdpoVQF1R7ZYTm",
  "key27": "5JQ23UDqxUW68qLr8bCMufqMT9xyMJNjPzTCcUxTiwj2dtY6tgbB8mrajE6PgPArAmcfHj54QVrGgivLcL4aJFyP",
  "key28": "QPAhP1geuvMonJmxHVydkxmPYKFuyttGG1Nrfvu1PCS1TZiVrPYSCnwzCsjjXxHxYQtunHQVmZRpyqLa2taTg29",
  "key29": "4BBViuxmwCFhXg8DgY62MwciNFcNsZ7gkZmrm6KJk5HjbYZUCimyCCXtXAGK9bafgsQstE7a32SrgsybMDwi1zqy",
  "key30": "9sf5KNwhJXqqgzfbu1UMax4817gbTSZx8Zv8gtWWoXJLR5rzZAK384pELPa4u6yQ7PPNwWg14FNc3eVjrZdq26c",
  "key31": "5c1YpuvZQm8SQNWF4MvxfHz7MW5zncDeJbfwcHZ3Kxh9NkK3o7DKQZcc91TgXHfuS3KcetLA2Hdavm2gV6zqZq5d",
  "key32": "4LDZp9LQNS6Mk6tdjXnFUA8Ciu8eYYMLfCDtgVHBupPu3ft8cq55vMuRJ4HjmFWvCzwTXbJPWiNdtXpLmTboLA7F",
  "key33": "3gW2e2SHfqxbrJ5MmpCECiq2PUKopS49pYdoDXEqmLH4mUhJhRcEHg8FP8Cw52KGz3erCVBhALCp2ZDAXX6pdGYS",
  "key34": "5XfdzWKY2kf2ekB3a3jgfNwfogvBYEPTsc5RPnfeYx4jZejteeJ4LEARTrb76TttuZ6nFJZacC1KcVPefd9GoKvb",
  "key35": "5NSveoWn3uNYE7xwDFFhbXk8DFUXf5GGLEZfYAzsnSfuvd65GsqKEso5rU9X6EKea4PszvZVRPhMLrQQ6CEQCnjZ",
  "key36": "4qwfiSM12YsRtgwZe1S2pa2CkjfiZXp3qGxcADL1LQmvZavrH37cGpRDVNivoFid8QHDUdeV6zcVCEDRwrcXTS5R",
  "key37": "5KjtCjKnoUNXgC8FDTLjcet1nmW2KURedKJZrbRmwtBVwLkbUX89vZDGhwvfrCqbk29B2ZeaFguWgxRXpTmY1dB7",
  "key38": "21k7rdcotdh2b2YHvFARov4JgRbHfCfaEtD99dmmgGgtmTsJuqiK7ezeFGJWc6tGzEjfrcRDJaF229SaSDGKxr83",
  "key39": "3xtpMJ7vJZrqnnf7eXJxWpZM6xbivPhbbPtCFqAHM63LMwz3G7HPCWf7qM8GAwH2NiKoPFKb5Mu6epCtrQK6syPN",
  "key40": "5PiPCLemRvvafrLiPmT12i9k76vyxhGF9wL3BJM7h6uXvPEGQU1SCK67mBBbwu9CLT59WoH8eabSUCq8c45V1nrj",
  "key41": "3paZ2u5C6wyoCd7p3TtHbXmb1k57fznCripvG5KsiVsrSY6qSoyEhKYkRJoQpfmRrot2yvafiaya9qGiUMnmVNb9",
  "key42": "SC1eJ9V9GQUpoSDxCCb5cKWQXt51TfRrWDyWDjwebx7VsThf9YkHDmaNFECZX9XmTt8SZwEwRWWY1oW5bAP2r2y",
  "key43": "4CA7oSqfBw1EB43v8KYewr9e3YQbeY1dBprZXqo3DCLAx97dpBih2EerXJsSTtHZEBhX2aMMGdG9L1eWJRR5nXtt",
  "key44": "5oEQMtX5BHzf48KjYAmWJFDJihaXXSv9ZM5mBmtqJxjUDWnAcTSUuCLXqwDqTTwA4hQJeuKgFcAouHRWD1VtYcrt",
  "key45": "iLBSeu3TdSzyotwsNNpetTfa3KmArUgsmch7k6EZYgTeVDG1Yq9LWZhPbaeQw7mhtBWFKGCZ6vd4NQx4tKzGPWW",
  "key46": "5E5tR99tuASpGFUyutPT2kHANkjeSPvxvVfTdWXd2utzFUcRHmgDUetwe6bh9giZoPXf3BUq1cHDQVsJ5SJ2qa7K"
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
