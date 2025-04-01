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
    "1Gq1tEotBwu39ZpHdw1JPsy44duY5aymegUqD22TKcNWHC1BEnDbH2MJD1yXTayjpszPwuUxDdUSGoRMPy8fT1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y8HZJbADw6XJmGczCaKyb8CcaA9wZbKcFtYo7DHajq6bg9m9dMyAgPCH2VhLDowgnFrPCrmXp1UPiJ4s9FjnLeA",
  "key1": "3uQteeZtKmDQDZRLTKbpaHBR3WTsTbj8AXmrAiUahTtDFV68PFLdXG8Cj8Crngp4rq9LVQa64PZmaYranrmJRJFW",
  "key2": "4EtbBAqSPQYZ4nvZCeLFCHn2j55tmGFfchubCTugK4MGqJAoR1xjvJHf4xSZrvwJjs5xk2WMoXQT33cJeLUwSoTE",
  "key3": "2DTfHDwMVpdiZimfQLBKDLJhietSGbgdpypFHzSnojjzJdy6QHc8ghBDpoBX7W7esoLL2qKb9WCk3a9Ec1rCsQ2Q",
  "key4": "8pMyGhrGoH8o4EFbvjVssEsY2pBjVavrRYCvmdcTaF5uNmahBxDYQWx556AWd62aGnKD2y1JvfvwJakzZ2qeXsd",
  "key5": "32ceKu3xfT63P61JbW7XfY54XoGcPeMGZCHxvSJKJhPVVjKWDsaePLPaz6BqBBFoPqr13SaA1js9sEbqg9aTy17E",
  "key6": "4uQn8whyWnhwNHEjFXGBGtvX6RoyNxByeLSF5EPXCsyvqc4peteAMm1krLqNu78dai2rDzr1ztoY4doWPLeLNgHB",
  "key7": "3DWrQqPZRSEFTZgGtdT6Sg7LPGetEyeuai9JDTigSmoyoz77SQbpBNC7BSNPb9WdbHRV4AkBAm8SLzGgv91GVDxk",
  "key8": "djmGxpbkh2mtLoFxY6Ym2Bn7HpGRhawjqG7b6SxK13KwohGrXGR9SyMRoqh8otsF73xEgTxLBcpxrqf9RmPF6vR",
  "key9": "cahRqTxak8MpEypNu3VfsQfGwwoVPJYwDEtwG5GJ6266sogmzZ7kMmjHDJ4xS1SvkwDYjznmqrfxYqp4SRjbvWu",
  "key10": "ee3TPqm7NNMRG6UUbStfzBymiQu7RxeHJXLVE7VCBGEPf8Wgwip3gAaAUgV2vtNAHY5rY684rz2J7iq8ckAMbwH",
  "key11": "61ouEatHAts4uHgpXzgbExowRYSX9zW1nnEt7a8XhUBQbVtvmmLKvR4xSZEWGCHGc2gEhPPM7FXR6sMonAaLN6vF",
  "key12": "2nVJJ2xevRyQint9U7VVXCURXt58qSNXRFNowxxoKhEse1Ui6sdcXw2HYrHomv5oWVZTEWkYK1TPPXCnPNsBTGJW",
  "key13": "3CQMngaFnPdiYgzojiRrYf3PyHrGGkm5KWMwCxvhwo6imoAntaWuGEVTiL76QpoBzcBCHqgtvDeQt24smzSvhhY5",
  "key14": "CpdXUsPuqvNn4EPZLSj5Ct5EfFCRti53xYqec9AomfzmmAo9dDMSN8jXxVRiZrHkgM5TQSjWJLeTP3UCm6sterz",
  "key15": "4EV4xaay2gbm3xQkDuGDJoKkcbmZWtjBp1aCwqHF4TpJ9eAPBeVC4j3ibB67R1Yiqr7X8tFUpNQDEL6ZaTkfbnZR",
  "key16": "4k8QqgmNeZN56LABw7AzC3syo772Nk2MxLB8NifbrL58HQsvJiiWo6XuVEZhv23gQqbcXFx6AvVJsVmBtF7YfWY1",
  "key17": "2AvLMnmL2xtRse3De6fUFDGcPYdcnsFgnW4FEx7KV6LJpa7BmqrQ818j7Jcq9GDEZyxHnKVH53PnBsrjBNiVf1TZ",
  "key18": "XGXqpngSkMppxBsedytJV2fEunKeUvtModSwEBeoStPggAfiNbpPVM6tdv9QPyZQdRueuD7qDmYtE5cN7BnAZrj",
  "key19": "2nFAFPAdi4MnNyNaVJLCr7RoLm6oGx4RV66afE7iXCeAfHn3ewBHDqSdxMpjyqDzyChw5LteZ2SMQ4L83DkCKp2Y",
  "key20": "2cPzrnpLaqapumxPKJGTMEFUxFZn4m394S6BuGhVK9nqwfBWFyBZgvzRrLT2RSK6QanDMKi6oebCM8XLE6SGX24H",
  "key21": "4ep1ZdTr3CufBo5GaCg7gCDdspiJpX2W3jWB8fPVLLhhDYBTdzYY81GG9zVqSFSRdGTbKiqVYPVRBejRZy4CVhaV",
  "key22": "pGiiWRBkLmcPMHuN22VTjR4gjrTtEG7V9yQN7h9Y5aRAJdt9Qj8kZfqsCo2caueH3XsCjwSfccz5wuw6rPVC4VD",
  "key23": "46sMB8vL4uEnXeh3bjmaiRpTdFdMYwSRgZipoxxP7nLnMMAPytQBGXgGK2PLSWV1HaPDA4cChS4sfBqPiexkyWxn",
  "key24": "5dgyZPQBttLYfikCx43W11C175hF5ZwqaJ9K35BVhZJYommcLVRfsNEz71rGL8t1XxJry9PsXw6sxmTUenFD4VHp",
  "key25": "55MZ25bmud26yD7BpUCcxqA79g8hjsmerLRpPsvzYoQcQATLU249fY8P9JW9gvQKQEJBttEKH5AuBfwF1q8pM8M8",
  "key26": "2ypzMwPYRozvzcsJVb3GYiNxiXSSM1ASnjNH8zDvoZQ2VtxRP97pvEismkZV1XWs7Ar24CM8SQZncuFPaQjUowxi",
  "key27": "iRGVcdm344nNd2oYu7rpV2y6BP5xDovCmrJWm3NdxmR2ePqJJdk7rUR2xpjekVfKiSEQAwXusgMN6vD4omvmgnL",
  "key28": "3nnBHMGHtSh4aeGLSoSMPHK1bo7nzJFTtcJGar99sBYkNH4CL59LBf4xyQ5WFpwiBx5G6GUdZ3Q6mUPQqpCY66hb",
  "key29": "2YA42n3qNEdSibrzqF1vDigTETXVhMpLHBi7tZfPDFXamSUBetWNFxhiiLzL2QbyKdhFjoG68yiNdwSEVgwZhPb3",
  "key30": "2rrSbr6GG4ezPEkDGX3gtQMvGWgaZtK18PNguxnySh8agCXZ5zXZaTZypa4brsTrd7uvHQjdAUgqUZEvZBaKU6bQ",
  "key31": "5L6xDWCfwqLjkDyJBfkLBZ44nJyqLgUmRQCV1xbJRQHN2waLUkRi9SPdfUbQQCbF7yXBmNazHdXFHaWcuRTwcmFh",
  "key32": "4weaFHYwNT9ZKMnMibRtGnWGqRLX7ByiSKMpe1Ne3r9tkuTZNAtCntLfXGAeifMhZEzkxKFeLUZbhvKXBEnFZnAn",
  "key33": "CfYFEd2hxw4oYgaBovfmgbuHaR1nFbbwXpCxZXv3nHtyb5u2U1Ggvm8YKQyjeqsq8Te8iVDRTQyGgHi7Bkmysx3",
  "key34": "3xppewU5xJAzw8vuJiQP1HGMFLHtgUTXtSdPbhFh4txCdvnHWBivfyZNgy9GuHjzFP2sCGE5c5zQMAGCwEQsWbbh",
  "key35": "eW1pEw7qnn4BdBQfSBLiUeyo6MYb4dycms4QB9hJmj6FH2PNXhKjsvK6NDERkKc6i2GhMo3ahP8Nsg1tdtkf32T",
  "key36": "5x1W3GLUKPG3NWbrkFsCSi59EqsafoHRGbA2DAnhmJqaNecF72yBKcyFCKmC71RfE5zJJyZKdVuMek8j2RE75ypH",
  "key37": "4BzBpuEv9tUeKu6SvdVsFQj3P7AZQjS5VBANWL5mcEHhL3RpHM9NW3Q3fYUYpzvRfECP9ch5E7X7ppUMf9GNDfZx",
  "key38": "67QxniEJV9RHfryFSBZt8dEucVSKDZUAybG54FP8fA13DXiNBrA86QZqzzyyT1M6jRtWtFwoN3uWTvWLjNPusfuS",
  "key39": "2kSu7ZQLYabEaiSCJM1z67kARGAcHo4MSuWdq9hpCvwAjTiFBYYwxDAZNLDwJ1RjQWpEKqzuYRNMfP7YwCvWphkg",
  "key40": "5VafEZTSHUMx49uS5KgyzVLLKsSrQe4NT6dfgPsuuJwhx9XaY1ArzFoMgBGuSkbbsECVDkXkpKRu26GtgCGGRut",
  "key41": "GRBUkxhiw6Nudwxk3RRVqciju3iHCRrJvCYVNtTPx7kUkQFoZgfpg1h4NqSj1VVkXk9MpokamCB7Hmx94ibGjtm",
  "key42": "TR88tWQBya1NmftQD52zcxMhn6dFhWw1zvyU6YeRZgWi7NbjHfsPWUGka46Xe8s7dJZpdtyGY8VU9gChJ5x79LT",
  "key43": "eK19utna2usDF1QUnFzz7MFoQYhkxBF1Djw43iJEH4yvdujgVE3WQhcm4HAQNaSVUaH31NJVyyCXGo9QuhJ1zeJ",
  "key44": "ioq8mBDDZKbAnXwb45ARPkx4C487Ko8i8LPEKTwCbTxeVAkYWbZrbSGi9CUUvvjy2enTg5DDPwq8ZMJWAiyyGbf",
  "key45": "pYPEShzXEYoAjx6sA9DgWoVbhhwStvsEcXFq6oxS8vm3nmowGcSnr2iC3mUuJxAmrKLZJsnzQft1SRg7Chx8SiR",
  "key46": "j777MYcptsEXHVWgCfh4QhgxjdFh4ousc6GTqwZkg1EocpFPu8Sk9QtgwdB1KL1oyeW6FVHrQ7rFSdKbSZoApPY"
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
