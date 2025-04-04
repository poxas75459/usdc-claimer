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
    "67EWrvACv3xJcXXmucs4bMKwJdBkvAGazpJxv4ZZ7s2AfGyAHNDiWMnTWnsQ3EBQtw3nnSYDikDqiTvetzNHzisi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UmRfX5kWVjgzE58i9M6p5B9vZdJdHnG6jJzkBK6D2XpWgPFqFxzvhnzNdT3DQk8MM6tVY5qWa2qZfrfu4gEkrjM",
  "key1": "5PAwxX1w6JQGWatS4neodHEXKYby3qwGJhez6ZHyCYMCVG3koZ8ueF6D3h5rnP9TNyun691aeai2XT2GbssC4PYm",
  "key2": "34D9QJVBt63DyMeLUQxohoUnQ5vR5vac5e34hc3bwFR86Y6jtXWfeUPBBjKM6qAd1gvruEBcrNRiaD8JZhdt7KeD",
  "key3": "2FDrNUV72bFCpab87iHv7rQup8WZTMW1baxXvzNm5HPS7ddairBrSaRyKk7KNXLvTt3bfndWcb3Nik3FLejHJQh7",
  "key4": "TC7b6MZHCVRWtWCj5DVyWS6npYDbf9s64DLwA9wWccAsLYQwk5voRhqUp6YYgFAaBC2siKfkR4TfQUVVbY2pJJT",
  "key5": "2sCjXqD2nq2NtBdMrKhBrv1y2AdbZT4M9tK2QyTvXwX5Y75VyLYCoV2TZyQom5T8AWKoSpG2FjYnWbTxFFAXPSwK",
  "key6": "W4bs3kCk5Brfn4ZuY3MqyZRzxT7shrkTJaB5yuxHsbw2d2HWT6Y9QfBPDw8zFodRf6vwuvPhYBzg1rHWVhZqZVe",
  "key7": "2UYc4WLg5jUzMzYmhaJPWGMJmi5g3Lk3cYo5zakabXioe6xPEAjfGEYH9WZnb6z26NYTuqjGkcTPmPUAqdri9Sqc",
  "key8": "3SqAA2a5i6XrwxMYYp4qdi27X5XxZWEphCUo1Y6D8gjxf4YAZ6x4dsGiohLNdaJkeN3o1dU8HWntukCuETggmf8E",
  "key9": "SE1DCXGBE9q7jUcV3ufwHPE6ebn4GzSHbSvibx5CGJgzEMtyBcB5dogk81Fnzn2hnarFPGJVWTYweXB89yFfgPA",
  "key10": "243AJaUT9pAm3xDk4x7B7zzDqMXsveyJhMABCFgYy7XW1PuJJWBj9pmbvoyUZuTPmM74eqXLBj1AK6H6MVLP9zPN",
  "key11": "L4CDEf6jsr6uZ4vZP62kTuamVSz8bS6zK97Drq9xA1aRVNojCKnbFdnUUVuVCnv1mTGWJh9KSP7TecX3cX51hdh",
  "key12": "43ndaC8MXsPuqD58snmwaEVkqAssqbEtKVmCG14gZedr7yiocHkQrzAHZeFCuFqRaAqFGhvkz8x55bee4nxDwYfX",
  "key13": "4K8VPjnBdrwFxArmx5KymSVDnj2LZmKXmP8c2HpTzUM734eHcEzcQhJHCxCRppAt74yUqKpyb589SskB1Kdpi7LL",
  "key14": "3nJRrukGymTcCYbGrmaTNocPoSMongqUEHBrJ49Yg2a9QNCsNU2QcdotfkWmSQRrpCdFFX2rvh19nMy1oykRmEpY",
  "key15": "3qAyCPXgXoSDUptdXkmwNmPnuFfvFt29T7DY7rR8NuRVMnuM8Vr4oUaBHswfY6JaEdAiVLJnCr3TLpHss78nBhXp",
  "key16": "4WAuYLGWtmd2r62r2FFZss17tMzc5PfFootHdrt5ZxzncRRa8Y5MV3a3aVrdtDdqGUci2NeunveoR7mKZpW7CLEh",
  "key17": "3Ykhip4e6jX212F75oGFVqkDVh6tW1cRi4mZLtBjsvtdGKAaWa77yWFFX3JDkC4iUraA36wtqueFsJTa49NCT7Kg",
  "key18": "4eVDpP1tNQBkpndcfjBDPkGSLVsurA7wZQu8vBjLRzAjhw8Get5PVRPYPp9wNVvh2GXkv3u651cP28eswT9EXCc9",
  "key19": "4t4dD8pKDt36VBV6Na23YhcUP1L44W9a6XXekVu33cMfcPPPyfGjdABLjYU1Z4CecRCzAgNQZDTXxbfEMuTVovoY",
  "key20": "5UrH9XchnEmRdBdAkjSDv6UD5pX2hWivd4qVq7tnfyUaiW5wL3a9nrLumD3TW6eNjNRP3Tg5UfKbsNZw2Pn5ad7c",
  "key21": "fgc6rkWsBgLVvnXYegnDrmU3CqZDFPMi1jBfAtZkvbWcJh93djJZKeFWjopfPXm5KRPKPMstBr3SSfQTcMfj7RG",
  "key22": "5Xo5uj1XisaJXRZ6YJsjYxTthZ28XRYXMKA7n5Cu58cAzMVUpiQH1Y7C8mKQ9FuBYtvUZqzVasiz1S2CqhJfp2hX",
  "key23": "58vvSmXabmTciEX5upnZ28NgP4NCVTgPdUJtSoyJ3ePeAuR5uRK5SewWuvXRpikZ1XqkHU5e2criiAugV6Ss4HFz",
  "key24": "4dhHVkc7a5RbqQ3oEJD53FZgvZbPoHpqW2Nvk8jvUrXdsNWcontLYucvg74k8skRxLpSt4J8rjondygaK1nHo1Kc",
  "key25": "5DoUFdkhRJbG6J2fecVZU5Z3pJk4qsrYxEKNkftuCg6yj3M2gtiy6FvvdmDwr9UcRHUJvMtH9eGr4BZtuNLq4Fcz",
  "key26": "5fYSNHhPNwYKz9ct7Nwt1cJMBFG55ZMBboVCnoaq4bsiGs7TesgSXeCnhHsNRcPhENoTV8NzSnTbTpK7bJWo6EZo",
  "key27": "2qYNDyXWGfjf9r7a7FstcM73tCikEZKfznM9GQzJzAeubZVftdqJVnG4esFwzGkXxMjegKq43exmqmwrCgA81wRH",
  "key28": "2rtnKEqQkNbsDR5hWByz2yPdhLNDYxp6aBHeiBXmVR17FBWystcWkGkJ9JXuxZJGjppjGNEfQki7GGkTtTHpWvsz",
  "key29": "5V1CxyuTXGHugh2Gqd1nkSA6hXGLkvrySMrVYvTVX4ignR15x9xm9SMxc2BVrag4EXV2Xdhx5FA3ULxXSer2MEfw",
  "key30": "2VfKp9LpxCcx5hEwrPoLNXs3NbkxGKQeNrqDnPyLK8LY31UeRZuSHDW4kqp8nKUoMMB9a1wL9vs5MtR46n7USiV6",
  "key31": "3rq7JwYrENJnNHYvQb9g4x5daL3ghWcT8akcEEgSqHiwyzXJg1ThXiYVp21pcbgTZSyPxbeaRKpQyUPzViQcryXQ",
  "key32": "5EUQXVKzUy2wCbCEiBgLLoZRKhYCzmkdXcMXY6EaVbD65QBaTZBy2VZxZVAnn1562AXnEqyNpwMJN2zJLHYYVQ8F",
  "key33": "4X5FePDGUJEhCTeiEU8gwFyHZpg4zNpk5BD6d8HdLsh6T4Nodw5bWFuew5W6FTf84GP5WL29CF1UKpVgm65okJtB",
  "key34": "rUR4p8vCta4QWa8cEVB5Rn2LNZYeqN1fzfMnaxG1vCUGzYz9xektF33iyZX5qZHsRMSJ9pYjh2oi6X2wYCyuERP",
  "key35": "3taK4LySfhoGraKh9d3FyKDf1KR661P8i5GYwTo8GTLNC2Rnb3N9PJbCXqAC1DWsMMkTHG9Yn9hVzFxsT28VRacm",
  "key36": "4wtsuJP5KaZ1VeVcmcTc13ZKjKtHxRrF3htmRpxzCypjgTBFT1zqFubJhs4DBQaNncRvKPGuRd6w9zPU1dJttpPx",
  "key37": "3KUMWAQg6ozHTbJDgbW9PikM83wUDn1PRsh9fGCAJzKM8VBjornTSHSWJ9JPSiqrxWKnaex8Cd6KyDaqzqKLX5fU",
  "key38": "34ZKvToUsgQk6Q85GycjSkwdLsDbcMULihrck5wqLWtnWFrrUgK95kJj4sUZGRTNiSNdfpm6UfVQyjiSzRm6eyyH",
  "key39": "tZULnFWHLg2oEckd1WtQWGGHQ84jkWX4F3pq3fA8jta2dXbAeJ4Lc97ciTDkTxZRw7AYercRgDqSn15kB5Bvvb7",
  "key40": "2fmAiSPjtkrXVsUCpFu44V5APVrtSB1KA2ZHBku7VsZRQXXeWgmb1o5eNYaSWRMxTayJJZCkpry9fyTibLQH1t3Y",
  "key41": "2qKqjs5xKwon89W9xA1SSYL6qGsViJm6aGhBQLj7WShNWWBJn1SQYKsufw4RLKDtWs4CvEeKuJ7CaqyrGfRutCMd",
  "key42": "4HmokchC8NVdjLZN9uQoa7WDCZLdc38xTu3Vk7cfiiiXta51Gt7ivVoX7RtiNLqWqvHTF1fShz5NB3ro3pa84ze2",
  "key43": "2BPpHCEFtv3qtVnR8Mp82SchTz7EqwriqQZ7tCtLfBQMEVFZMU58HjRAQK9YtWxxMwtRuWrVMjMGcw4qCFZ8gaNx",
  "key44": "29D1J58iPjUPWSwJ6dDe89KdCwN5XDQREzozwDeeZP8QgLfqDHSanQErNiWpZtF5HxK8HHyGwC9sAZvcYuHvmQHQ",
  "key45": "2wyiuRYYM2rYGfFEF4fm4sihbehDLvrjKDUHGG7yzdmDSGhV52jbvoSJJJPg1FCseeWm4yUirknFBEaWrjwWXWmS",
  "key46": "2GQj7xxiur2MuPxbEEZPZKhvWwYjN1odXoZFoceDZ1PWJiUuzs4xa2nTXYzw657UXenFLLhDh5nwoWB79XyB3NdY"
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
