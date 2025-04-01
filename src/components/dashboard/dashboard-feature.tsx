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
    "4TGszLTXkND4w6KEyDkxTSP6B9ABbUh3G1XQAYeKoszaxfbAnj7AXoXqWjvxkr7gGrkYYYdGhkXGYQSSsNBDwhgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dbe4niF5kUQYZUELbT4N6v5md6b5LdyR5i7FyRcEFjQpUtaUY9iJh4gJWLb5kqoSp1FtEFZXiLChAVN7dDkewrR",
  "key1": "339fqsojtXdRPpVzLbjv2zwp12GgW4fRxzoma5zuwTjH6R2owzdJNaLW1p57DfQQzdSfRMnPhL8G4Qgv6s5uHEnt",
  "key2": "xdCPkiYQoox3RL2gS7H6qXZsgKVkiGmn5V8FcnNTFWVWmUjRsaPBFStD64uaA1wvrCoppPS6aeHbtqQerCkyyP6",
  "key3": "66XA5vkLi3NVDgGhmxSw3cjpTc2Fif7bY7vMHevxu8a69R74cpuQAjrKCZgibPcPQZxGzWb3grg2RVWTdN4AdS6",
  "key4": "2v6CNTFBzP2yjPjYBYdK7TJaeJDb2zG2vtDs1EUYHUWtpmChuZ4vn4f5yGYPyy9kCNdds8SbVaZUUuTRvcMnKhiw",
  "key5": "5jzqvx5S4K1xxKEN4EwVrp9hth4ksXEXXCqPPLZ1QcxVEXQE5nSBSFuD45CrVzqKNZ8RWQP5qPrHLc5zbAQJeqqK",
  "key6": "51Nu9Q54FBSeqqmxDAdgQtmTXtCzD6sb9GANukMpT8BtiE9a3jiVxcGeaudFjZjLYGgWFCo7sGTD2GZ72abr8V9v",
  "key7": "4XUs1Vmri6wUgmDvHZphosv3MZuykEvReYUzV5LpG7FhqfLgkDfvFPNZu3MTSmxbKyNLmtxe1koij9muwkhmFVUp",
  "key8": "63oQ4tmBdMxXaVZDQtnkk1hW7ggFGEbYGhg3pu7KR6kvxQfnkn76DmdUKRhrqP3Pepssv7RKBJrq6w9cyAEFeufj",
  "key9": "2Hzq36ngmtmnFqQz7PBSLcn2y418WDXmpNaWgxH8GaRK293YmLcV6poxMue69phY5oK6TzA4kM7TAcb2GidCta8V",
  "key10": "pow9EWVp5CXPeUmMTYaox26gj1K3ozK2jGoEoTGGiXtgbyf9aG591N8tjTeTDEwCCGLn4LFzf68RJQXK4LnDeRB",
  "key11": "mx3DNGvKGr4s9vjwzoRS2zLrczqqfifucabmf68SY3rqwcqMZsdFYjDTup4iHc3CcPrLHuTMJ2uRKYyotU1Kxu1",
  "key12": "5p3kzRbGiQiM6h4PWksws86tczfbYB1PUYLX1vhrHsWAp2gPQHC5mfMx56hQLRM1vhSQcHsBKCvcbdDt3vVE7Cfe",
  "key13": "5gXa8DiN9h6841nq1MuGpPcBaEDAKyVNeMmNwtFsQegUeTWRJfthiWrYKhFyD6mRuYAWKw5SZFnTX85VRbk52AqG",
  "key14": "5ZR3mVt2p6za88n445phtR1isBeNkc9ZBgxeoF8LPfFgGtPsDuMMUy6rdeHb34mnVoWUsuRw48a93Dr8if4xYnWG",
  "key15": "2VVgLjiKLd5PJiycXBF8Xsvuy6jCs6gJjNmZGWGndXw7zpPhDf1aEAnRkd6LYAugAKaqWUHdC9P6cqFtqdmbFmRd",
  "key16": "xjNcCgShg9kK917FGoWuC8ZAcoWr2PQwcnEJSiKpKLD7AE4MxXxaGbJftZE2z7Xs2nC6es49c5cfrRDNMyoBskh",
  "key17": "5stknRr7zuodwZJ63rj33WJNpx4uZrnCXTvu4wpmH3STvQKrnp7qZUqHJxQK2obs1NZpNLDhQ3vMHkFvgumMHTBQ",
  "key18": "218PFMTup9KaxRKxScR4acc4HuqNGFBu1oEqxsJX8dPka58De5x2s4xJA8T39QjxeDvogfyiSgB5Wy3xZgye7XUi",
  "key19": "2UQoqf6JW1rJccYL888T1mtrP5AavJV97ZSfebp3HA7ggrN6LYnSe5kHXFszQ5rgchP7J8nEKSKT2x1wNkFindMQ",
  "key20": "5UaziJMcWwfzr8j7J5gMXGSKvSuNuF9bDQhJDtntoSq4m9Se6oZmhp2HEyRvxn4GEhYuFiLpAAgWtAR3K8o5frMi",
  "key21": "3LAPGZ8fmnqYwwVcEDFncdrvsBqn4UurxKXJtCsqtnvRooL9V6TRs9RvXRkbFf69PjPWR9z7JLe7iTUnKeTvjSdP",
  "key22": "H5QEkP1fDXwWEfR71pD2XCQDk7KDYkxJWmabxDSS5wb55SUvmA2AKGhaqcxFg8fJG9Q6KLJauMo43pyVNZ1Pj32",
  "key23": "4yT3Wrre3ePVjcHQj9xdpnZ7hfe8r1iGzzEAsknJ5LCEaifQLk1VSgcjGDCtiqKjAcJjJUQWUZhbryyJXNKtcW4Y",
  "key24": "NFsP25qt6Wdc8yVVq5naomSGUeTQbNfseAPeLce9nREARF2W27TdS1vyW8H95iKrxFiYxarhW3JRjjT8D6AeyYm",
  "key25": "TeseahhFBX5Sgj47GrjX6sSMmjCL19xwRd1vdggUVAfxE4XHAEdfLYs9LLGDrpBKQ4v3SHuJSY16iahV1SHohbP",
  "key26": "469sPFwMo6DKyFmMRpx9PqcJ8tjJ4FRsCYASXZYKWh9KLAA1AuT5cfjVdqiPKQsSWxjoWZrGAdoCJoismxzpqpmG",
  "key27": "4W4r2LocBPxCAgnjT8mYyuzoY7HvTu8QexAU88rnqxqaZ8pPmTLFvDFzkKRKFxm8nVfc2uu4V2eBCSNCeMPeTLqW",
  "key28": "2XGJ7DYTkb13Q9cg7ddgMD1FNy2GdPYwTvgCqjER2cCz3m9bv3SUtPg1FsuEwbGKkX7Ncf5B2y6cEwPu9y3RzyQX",
  "key29": "3juwLN3fHQWnoy72KvF7J4mmfMdqzsq2GRyTXB5u7fERJhDyLTaJsvuecwPYirbVbQZEmKRFqeLZ9mnWTcFzyjiJ",
  "key30": "3HpXii7AbJ4QJ1R3zifcxVk7dRSmLhX7eZx6agBmwekspVByoaSXzVwerG6nverM1iDJtRyqqsMz7RH5YZ1uaHJD",
  "key31": "hXDPSWk9KK4qjjcW75cYfHpzCRfHTW12drLeG2CJS8qCqBm99h9642Cpk7nbp4qNBNoYWRQf4ABEe7EXWS5NNzz",
  "key32": "BFpamSRk8FzPEk8oWH5mjpXeQ2v1t9Z1tzf2rCcHVHTA5wVemmiYXtgu5SFmKEy9KqGJDTaGQy1vAJRqYJF7LKd",
  "key33": "d7ziKN7S4wc18LU9DivoH55qw8sTxViEcDBzg4MD3be524T3DwU5HSpct8FEvoywASRB8XJXgDowTrC1jFbuzh2",
  "key34": "2jFEUuw8jUKA9CwjPjoRojifJRsoHf6ac2GAGbcogVPHRbzWZxgLV9A4Kaf1o9hUxDx9WNRz4hVDqKFjhxkfwWKo",
  "key35": "4kTs6uBBH2B6NChcnpfY96S7oRJa7GTv1NdpcjrSEVwqt288CjpnhTsmzArsyHaovYEqhGijADcbQ1ZaWbahtXNm",
  "key36": "3dDKW7iL6rZ5pHNxdN8nkEXMiewV2m7XUAuGbChSvXD1JP2DqMSJE8B9UCVmAHDXUuQuMuzmvEA7v6sdtyHQaaJZ",
  "key37": "4zScVbSCgVz6D3teT2whw3SBMp7Duz36LLUJdNXAJNttEQUSzVnUrBYGK2yox7wVQejmARbaQV7Bng6SEgXkTW7A",
  "key38": "fNHMg17A1uY7LJdxzcpV7gccqaSkMi93scCAuL38bxd8ZDJoMaDSxQEKiMbskoyeisML1Z3RxonEkEPmwg5BksB",
  "key39": "3nxK3AoiUz4Yq5BuydZgE3y71PGwczL98hEsZNKyKSP8swwQppCGYXU32jyZrsHRLhMHRouiMxQppjX1Y7Nzsy5d",
  "key40": "2Z48arpdtSyT2eJzyzYomHD22kMbem4AYQt4eCsWZRwGditUKdWaRkT1CmqpCmzb7RemRvLHQ72DuyBhheSv1ZjE",
  "key41": "6JpYC27nyNvnTk7B9yVfpvp8c1DGVjpYt6rdEDFc2LCDet9nhbMbZvgAaUUXsGQyEh7HGGw5GFaWUQed8rPeEkx"
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
