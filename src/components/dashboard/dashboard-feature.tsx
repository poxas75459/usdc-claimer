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
    "xj4bumugvq9Hmf5ULARVyaAr6dWjA9pVouy43oi6S4s9PoVrcJYHSU2vbuYjPPnE2fNiuT8KT3yA9cXuQa2UE8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZdjG1hvRvx81RsggeQjh2jT19rHhMPWPyWDHKkDBCT8hsqinHBVtChpCVz9SZjQt2xKzfsWFjcLhdhcCa7e5sDZ",
  "key1": "2hcUFj3jR5zyVV5LstEn8kj3nhUjgPtKDu7mXspjYaVMSUmWjCNvSiA22giG4u1NcKPF5wghtr1NyKaqsGuPPaHQ",
  "key2": "3rvp1S8DCAEaUiBxrqAF8SEETKpjBFyX2v8ftw75UMYsCQDynhqS342oZCb9tmhPT5b1gDir6h2QHmuvHwuam8HR",
  "key3": "YSfcK1aud7XSLUwjj12LqXoTwLvByviH8QSTBuKTcpNtYkmGi8ssy4GuGq5sGLzCTipesVCoJisdhsmgYwXq4f2",
  "key4": "aSjeVDnKxtVTNwjZaVBsUZfEunxBrTz2ceRZdrMU5grxhirZ4wUqPg2AA71wePEb5fqRrNHiLb7PG8hkR5jPPBG",
  "key5": "62rvP17BTsz1768Uv9o6VvkZw7oAq3UeGeEzaQ3MxWAmyHwd96nYr39T1iVKmsBcMBEDg3xdm8pmQhsSmJWNnxBv",
  "key6": "3XtX4u627yJD2jC13KVsrCABxTZB58wjb8WCLni6oTsH2uWSj4TyyRv7AD58NZv4AeHrXTndnPezppBhv4xt9E7a",
  "key7": "2vgDCCsunDyHDbBjR3PtqadEiRoZP87ihrtgykB6Fx3CPh2QWrRP6mZ6xAba59JmUoHy8GLR9u9eXm4QMWMQHLue",
  "key8": "32MHBwfS3jpXP57bFQHg8pzD8pZeNqTreea5XBysLKDdcJCL9sgFQEcPi9vPLeYDd5kN115nZkZPPEeerwtFKP6u",
  "key9": "cJYbbEJu3MEp31w1gCKWzg8SFU8Z994chzPUeGVn6nxfswWHVzX33sWeMk28VvbYgNcCTxNVjmn3UoWwo5xdWCR",
  "key10": "36baJiLMqrL2LBkf7Z8QF6nRUUQ7sDu5CKAmrY1tUwvWWAHrQ17DhQZ59ojES3w4GnEp9uh42Se3AG5ESMSM58Q6",
  "key11": "RRmE4eDj3zBrKGbppGkiWRkTi3hcjRa5wMJgKywJ7ipwKW8HQqtYupG7hNvWnjQYQNC4uT1pPpckaSNYgySMvTe",
  "key12": "5k3EKPFudF2kfvv5kWnvUwnMsNHkeCCgsW3yLiybAeN1NiRPg1TuF5WmU1cN3epTMsucrmxvwsGyofTnSjNHMsnm",
  "key13": "4yceuvQSr58mV1QaL9ZLAveTPmT5FNVg38hhxeeoZCTvQtESvwiuJACmazLHZATDJjWx9TuTsprHGo5pNURcehKi",
  "key14": "5SfcX7K4uJFgD68BNSfP41CLdYh4mTf8Ebq5StsEBuuEfdkzHyc8G7mrNm6HePx91dV73Jvo41RGiL8yW1acrkv5",
  "key15": "3MSuMPTkFvVoBRsKjgwzoeaXe2f1mfgKj3YdC9DynnRtXUftJB8viD5vc1d2a2K8GHeNnN6hguiAFfGyE3DFdY1B",
  "key16": "238sGhn19Bgu1uK6c1qSFsAwzWwQ9QLnYv5PWQg3eSeprSAi7AZQAo5jYVsYUkiRMxPUsuuMPR9erT8ZDMXHcXGc",
  "key17": "VehFZDhogXFRsNmPxUawGRdv2wLUR23metyqooLtAmtCGRrGgJdMpQ6iFmT7Hmk9tMzHarqxb5W6yGz2RmLmYKZ",
  "key18": "5np3Sdm54CXw6d5AJ6bdjYPbrkW21qMGCrVUCTzvcQVVffyL5Ya638cRe3XhaZMw4C6v7ND186fjoGvFcUXVpjt6",
  "key19": "3KDKFUS1VGHuCv7t2QTPAuQ2XN4RdhmFie6TowQHxTJbj2w2qmdEgAGH9SDQmSLMokkVyHwtGJnpaYVo3Fd2ZgJS",
  "key20": "2pFtWNi9Es9oxs8ncWMAWyDsQ4xVeYFbtQme38QYqr9844gRrM1b3WUH5Qq5jhWpbKxjxC35Rg1Da8derD1SA8Pb",
  "key21": "3fgMFUezVFQmVJ91eCzMVNf9MgfiiDpFhHWqNpbUC3fTKoddyoA5xBXvThDQwZXgSt8JwNXtY61ezxpUev8yzZpA",
  "key22": "4qcGNcM2Vww43yZDKtz3UpSvTcRLabrfwb19wYUvdojmJBZrsMmPkUhRTSJuwzPUJTMKsoGjy3dfibSZc9WLTsvv",
  "key23": "3ZWmyzHQJ7ECoaVBXRhmXgwaCfNbKfcKwTivEuEMffjHrccSy3B4fWFkLTxa24gDFDynpz271d2aUS1B8U2BxYqA",
  "key24": "64Vpp42ms5VECFhcxTcJsC69CL5k1VrhymDSZhxyNVM7uhiB33imXr4RvCdd9X8LQ9vVarZXMqg2Z6p93omkMsgP",
  "key25": "2XqXXf6FfjkJRuatC8Dv5U8gCaikJU7oP4crBe2gB1vkKSKJ95cGYqVUo7yUkeyHF2ER5ScDgan8Brf8bVgFmfWm",
  "key26": "4SapKtbksaxqwJruBYQ7iHQJ8hftAqdD24LevpCnhTrCpbMnRGvE9p3AMPxLPsQvA2YFqAvdoyuQ2zryo7DhFKqE",
  "key27": "4rerbw4uAzLjjAfjktUGUsCH1uSFSsppjficn7uw9RyzzxeVPrBFMFhxQUDpo4F8WHSbHphtnCho9hX9GXGbzKFq",
  "key28": "3BVFs8Sp7TGzdvpHb8t6EWWdb8UnZ8zjjP9monzSAVXP6T6bD78tXTbUCpWFqhya2QCr85ZvLx7YZUcC8dATYAsK",
  "key29": "2MnMjVQTAxDDBfGBsYW5nhEmGgaF6y9TAi6GWvf6seFqL6Gf7vXEWdUtmDwziytZw82JcbWLp4veKZ7jK7LsTruH",
  "key30": "5tW9J1NoSrXa8d3QZpnT1JLt5AhFJ9AfDgcaSbT4vkQdP8TS1oGgTgNmy8ZdTd7u5q5EX21btuAzvQDvM5esyB81",
  "key31": "XXS75EduAyJ6fkhsX3wsUqZZafGGPMPvFPsQf2y7joiyAqyn3vm1pnmQSyDLBEjUCyj51m4BrUBAy9X6b2CQZDo",
  "key32": "3VeHfhAri8b9oaeB29VjdWSTCXcJKtzZ49opTDVDm1YeQc3FvtbZFh6ET81zuVLiYn14fDWgQrZkh5isdZCXQgYH",
  "key33": "2DXjFGAiDSAQSF2S9Hgd6Rwp4KhdiJD65baQ7j3wRo7RJZyyMtAcnAsgUkBpztMFeJZWaAUpwPHhjLTfq2AMBy35",
  "key34": "22QSg4prhkMvD9Pm92W9wxcAVGdcGco3WohgYEpkADxqDiLpDyN8ybTXSdV4dtExd8gnbrGV1B5a9kkPVmvuZfYF",
  "key35": "3SHMjFnoMPsNyRtiMVeBRi5VSx3Wnz1qcEbgUQ34EpStgKRmVLMUkCjUDRSWJTPDZzhnB63jpGgAkJxgvRsZKPex",
  "key36": "5U2SQ5PjmXrcUt1se6Zxa3yBzH9ZoP3GNjCKM6hjpRX7qjgnggyZeAtfWoUdfhC3Jz9XT7fc3L3SPZz3ZW6kBAVe",
  "key37": "2gq549mhwjDbchpnprxF9MQQpQW41gZdnFpMjh2UrThCrzw1xPYhDkZcRWcUHB9vact9VQDretVZw9RFBnihEGve",
  "key38": "2gW4C2dKVYBSeCchtDCbgqXSDVpx7mYUBGw37odsrDMScUrjiABm1cHhaDVWXiaMKAdCMke9oNc9itYWYjcq639k",
  "key39": "25LRsU3wqD27dLkon17FyJN9TZL7zjbEQbBaWZHrbrUPRmvMnLQ3i33ihTmfZzNHg8Nzrv2LhFqqBPju3aXMV4yJ",
  "key40": "2BipRi1rfowfG8yiQZHocT2HaijVxSN9J4BsCD4EH53efPgGpGiR9isk5d8M1Qc5KeBJQDfwh1psBkDqUqTQ2D1A",
  "key41": "jKa8qGkvDqjuFgLUBRM4Dq1sDfRXa4BiurxhvyxKWKmLaqYHkxtKpsiwuyUfRDfG75ErnUpcCt4fqL6MZdF6AcA",
  "key42": "2vZ1dsLYBfgQfM53KVpR98qo4GnDWG92KfG1cX5BiUAZPGFEKgPKbfrW65gvYfhJ1Y2ef4iwHb21PMTbpWSqL9zm"
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
