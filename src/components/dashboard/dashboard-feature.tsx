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
    "5AcyX59gaqtxhKaNZ1d4DHJEGnKkV3mR97T2fTY4GccXqhwvFgKMZbmSHcaJaQxUPhTKmcPpaWJD4dWnLyEzZMib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NGCehiyYB2PUTudTqXMxC9ouM2sf8nqeSbqKMYUEwV5oRwY9WHofJQDbSx62mAzwHz6RJpysZKGSr6vwpPT1nDQ",
  "key1": "4VX14iTjHRcbetGJ5X4zEeaZSN5mQmqUZSG3qFkjbiPrRff1xMCvVMsGFG2uoYjWdzr7b4JkxFGwVNgg4cu44fid",
  "key2": "48BDkXVobDVXCK4MPfpjTLKB99cTxa6afp8Krg1esHG1cc6ygkK4GpeNrtduuErkGVWz67b31u3BJKrF3YiM1zkD",
  "key3": "3X51wJrShqXj8pMLqZvYkPhaHcwKbUHrin94vd8cbPJc2hWCw5wY7k9eFu7xd7qiTYvyevmYsXeU63RMGp3dFdng",
  "key4": "5kJ8RctSRe9DBLC58KgTZ2gEXkWBc78piZUdkFYXMpJP5ScCQYy4us2u9uBJevf7eqBAc57B7BQcnxAoFkVojKBM",
  "key5": "5ZGqpN9n8tbe1Sb5oReg3MTeSBcBQzEoobryYMrH6o5nn52PmCD5rs4uMkNed9jys8npchoUVjTZnAoJXRpYrhj2",
  "key6": "4DnweZY4DNzY1dT6gxrVwjNuGE9y2u1gYa92uX2aCoVhRRjbZdzSZxzLuEHc42cvzWPMHNnJa8oEYhyWAcrozBnU",
  "key7": "2VYRL7ri6L3NYv6B8rmuD7EwPVRgttpnCSkrNpFCVreJxTdJpb4u59aR2VGoMXoaABhP6vGdD7X439aAW51rXV4e",
  "key8": "3xkCfiUBV77uyGi3a4eGDwmGuWczdV1VWTWt6ycdRNzAu2KTSJSwNrDZsr5pmGdhJkVfv9wSup2NFimLffkFXohn",
  "key9": "2Bpo1QADWZEjVhs8qK9YDa4Hcx64bLTUbYxGEwR58cnNhM1MxQShJxWH94JHAv4cCKBdWnj6ahWK9XC4NANLAMT2",
  "key10": "4wfpZsXzZHmcwf2XENMhAvWcHUdhXLJYKA2tZ55evTxX3hsVouAHp3ouf5MhETHR8EgsVQR4zUm9NuJkVwqx1BXS",
  "key11": "4nhSNEYrAM2d3y7gruwES5KfHW2r3Yxcht7nwWDpfEkTHEtsgR3h58uCNKfegqKvedqMRSTGdDSRnxU4xzQoPrYP",
  "key12": "5Sa2mRU76zxYjguc9KFGLHAufBVAntXmHVw4KvHgK7MVHJHe27oF7GtGASKf4xeg2Qs3DUkNJHH2QagnH1boH5AR",
  "key13": "5YhomCzm9UsS6He82DAe1E2q1vHSHxZs4JNxJFzeYYh2E7CNAEccBbMXLr8QpS4G6NiuTKPk6xWS62wYPFpHg3Pq",
  "key14": "5Ym1fpMjCbs8o5LPruoQJEWp8T6rgJNAeGz5pp3he1Lf5X7nUwXkb1K2yDjkM8S6iNNty6RVBPdmgycQKZNaqFp8",
  "key15": "51Yea2HTRp5r2Vb7nsZdtkuigvsYBVANqV4QRqhjVWPs36BQUT97BjzC9GYtviGZoGgqN1uStng2d8VoiLNRubd6",
  "key16": "PaV4sRm3E1BNqGTkyiYHewZ2uFvd6PXkmAE9m5qVwtH81DLhPeSnBnmfiR9xyR9RN1gLjcuDFC8gVmGMx8Xqndy",
  "key17": "2UJQe11rx65NGWrmK7yEaVTJJKGDacutvtFKsXgUxo573pCeqRdXCgkEcx4J3Uugf5bDEkSxvqyLV8aZje6G9nSh",
  "key18": "4EdLcZSHXZyb7Cf7CcfubJTBhvAZASzpQfqcoFQduqGUBjn6TpaHjBT1429XzER5kdsdVqDPyA4tQoFHUCMfvDFu",
  "key19": "3FafkpmVjrbDKFVjpKZvgEqmG5KmLn13haLTitdf9tSq6BmsuJ7rqYvYHw5kzGsNASDmAwVxdzVGRfbPxmPSVJhS",
  "key20": "26USwy2fHa9QWdqiNxP3cydvLf9jBvGprE8RbHzE7V3zsxrFVLwHVTRNuvyHidEDKZkpoE7zwdUmWsboFyiGVqpW",
  "key21": "23pCWEEejVzuQ4dHaPDYwWR6zkdMiefBjkWLhJApWXDeZ3wtPVKf3sbn6gFapw9YDRruK9sz1Zs8QWCk7KTLA27Y",
  "key22": "oSJRBEvTPEmpNACDgbArQZitsySZ4A6fPjpVopkRsnzfCfGvD43kWpkXaNP24jPXw97kcYbxmUbuabZ7SwibBzn",
  "key23": "2JHBvKGWTXtJaksgvp7j6rDAccFskXYcoqUbScKWJt3CqQf1D6ZvPu5pKyekAfFYkyHZs1MNthni1J6NyMVQV4K3",
  "key24": "3JzJqR4yFgyK5UVcJH3pUY93VMkeaXBMFWQ7QgrmsMcmNSXLpkJbLtp4UFh7jhKp5FTVpFSBTTFLehJKeyW1LEu",
  "key25": "2mwDACzZR63fyqg6dbvjo5hi1pumkMUwYaVQChW7Zd3pAVzG13ce49qpFUDzGTYLoctvBwYHgPv2E4XSohf4zwgu",
  "key26": "3FRE4fjdN8JSyELtRWHmw1EbmLFXvNuAoRFQFGaHu72JXg8Sy5Kv967HYAvjUMCqC5mRfgFK6jNz3LbztTnwDyLc",
  "key27": "5FvLURWcAAbXiDS4KjwNHDE9FcrXarP1QJNkvk8gGwVsfR9xQ7saq4v17s2ua7ungfgM2bRFPpMwqHnX9BK4BexC",
  "key28": "3ceSAhtYoemRVkZHreuznMrMawpFWxVm5MRKCuAQzdtNrAjJyUmHRqEAFnTFAHLcvq1K8w86LPf3jcmsdJxamsMs",
  "key29": "3vJcWMWKPfuaAoZ69fGLHche2YCu5VKiQaeL2yzzvoErXWKsZqLgtj9Hm53AsFPQoqv8aBYUgPeHAxbK8CYEaWLY",
  "key30": "4aUXHPpxb9WLpn7wKPoyt4RHFTJ5KKvSSkt54zeDg1PAVHWJ9J2Y3VWtWsarooA9XTT6RXkZWDLhMiAq6sYb7SXx",
  "key31": "5i7LK2Rnmii5ToCB7KTPkxtm8jNRiftkXREW4KM5Ps3NvP89NVJXMb9CoS3bxPWvEfq6YpdJ4u8VEXr5manhHCkc",
  "key32": "2DvRi8gmXb376fr278y6qnxNTb8g6z4XwysNF4vKjU8w7d2cdQjkaXoAveuPVV1d2CkMaKTC18oRbxy7cWsN3qcb",
  "key33": "3twAp3HPQWNX189di7S9pmPv6W6xWQGJa8YMKWoCy8gJds38F3CmtKmaCLTCJBuPk3uQxjc8NYxTNg8PG1HDK9dq",
  "key34": "ZNbvi9uhtp7vMEhEkB1kjXrgMDGRSMcoYLHQvBQWFfymuSdNout7zehVWWfCHy2d184jnp6MXLHKwFH6GpMDS4h",
  "key35": "xCJqaKu8Cyg2XVA4SUjptaZ1nvzwJoAPE3JBz6qUhzAkWVpoAHtdMsKw3tJJp7zBN7pC9JsjbkRtQqqFxyeqd9a",
  "key36": "3WTHzVk9dxNjYKo6H1qqHxw4tz4qJmSBMkNTPVNu4vR15YLnnWwfZLSkpzSZEt4iAZGrNRQo7FQQ8Q9UD4kP7U39",
  "key37": "2RoD3kFSWaB31qSL5r8oBkeXzCC9x2Fb9ocEW2exAJz5am9AK2M1wEX4XmBwhj6nEW1JbU9duYtojyrM1ujzR8aD",
  "key38": "4DQ2vN5EmoK8pgub9nA4CQvkAe9o1BrZk6mthVu6r6qxP6vrvSRLi6vwvwwarmX7PEigqqudTo9FQWeVVP5j8dfF",
  "key39": "4Xf5tQyMQytT5BGvPnZdqJDCuFZ2XGtRFJ1uJfXkUiFGX7agv2RB2zrd5fBH49qUBof6KXYqD66doetati8mpLDh",
  "key40": "CX5pHZVaDnnUqA7WhRxTfVPXzGxvxoBoYcaPyphLX1niHwcVavm4yKATneZTn8iatNFXLhtTdZLV3Kn44KUm4qD",
  "key41": "52Vcrn1eQLYsyC9UAXPWbjYGyQQjbpwJMn5J1mDu26kzHqFEK5cHpXju5GEx34irnH8NCqMafNrqrycRsbwvttPE",
  "key42": "5DXpFSnSoDcDXerfUmZkA8aKaZGgyBEc4b1K5ybx79C7HFTmAvRtthMPFuNayDwfiBm56qcA7rEqgPLQHR5bZx9",
  "key43": "SizPSabTd96hFFASwAGfMMQkobEcm7UVgX6tmbrxqRrHe31rVqe5msNzZoQVgDvq58FEMcN6FCZtWDtTGJvm6qj",
  "key44": "4MGorcJU2M6UD4SyibHJUvJFEvkjWjwXquTMHqjqLipnxyHmVPwhE99k9Ak7CT8PVxAJrU16eBDQyXgfUrC9rxGM",
  "key45": "mLPU7Jo33SERumbSJMiocfdnDU4ddoTxaGZcbdHzsN3emYtW2eVHeKcJwo5kfxBmv59nbeoitoHknZs4CstU4dT"
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
