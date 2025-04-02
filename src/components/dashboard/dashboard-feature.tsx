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
    "328Cs7FX4efWuXt8UBj2eRsX8EgTvFQycAithjdvGjGjiqpojrrgZqHea4o3sBJRD287bEquA4UTK5rgZpat4xuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39gDptJsf33pSyFya2uMxG6hMEYPe17HwtX9czdYnq1nyoP6sN2DhZQkcrYNvPPUUQzmBzUPr6GHruKt9vn6cxFv",
  "key1": "5LLgEAEU6xtr7oLDtWLLyCYkzJYsymnvujkSygaYj451i5snrrZf1oLFYjzkCPw72v5nnfw4kTWLF9WfWfh3rrDJ",
  "key2": "5ETprvngTpMLLMoEUD73s3zaQMQwd3x85Thbk4E2kjZCd6QeqQ3QAVgtnn2KUUm7G2NGjmyFCFGzUtceCxkWWVdS",
  "key3": "5VwyEkc5etay3UYFiQo5vKQjRLbFwURPuWRQPZKPcELKgtfZEbHgwC7MMcHqXpSyCwb3SQ8qnc6F78eAafmHJapU",
  "key4": "Ls3FRZxQ5vsMoQkdmReqFjZ1xuC5ZQBLrZqLhF37dsvpp7Q95sYH2yw5Yu8NmoP4UPdaKCuakfq8qaH1YWqJk86",
  "key5": "3vVuXZE499w6DJWK2MTcgmDPiynTCj8kxNPft5A7gG58ra4PnjGPp1T1DgMbXUcPSm54S7NdMtztFrmKQmCeHkw6",
  "key6": "i8MZCp5hZSGuaAU8GgUgpma9eZNG9yXmbnhj1ZLaGL6xzWV6dPLRYtWurGXG5fG98M9yacPB3dN1ByTE3u9oaJV",
  "key7": "4azB2N6QxJvvAABENp4tMRGF4o9ty2hY5HmL2CuMrYmivq9bEEQnqZsLjGuoNKZs1Rh2bfdcdngXjWiBHTWjy5Wv",
  "key8": "4G4PFfkSE2Do8ai8seEbXCgbh72oppDa3xA9j7TUYak2F3QB7EE999znrVDrmXQtrtJwwH3bPqgECxqtDMxHtX71",
  "key9": "4GMjwvzEgvuq1jD7kFAWjLdQfnrds2HBmNJ6sZR3hmJw6thBd8xSqUh9cZUxGQFHCV8wRWyL7d3xSeCS6dCHyuDb",
  "key10": "1ztUWjcVZ24zao1DZNaWmZhgvP25mJvSGEKPfbJBpwWKzPVNK6vpqQEx6V5NKZ1xVBzvU6ARCfeHwNdRuoBqjA3",
  "key11": "3hH3DNBoapaUoKi3CvgHy7UR8pnNWiGTu9W7UcDLSXZ1rStGsc7q2JZhZNH6aGhP1nApnNwHqhBPRHsvqbWsuH4M",
  "key12": "2equHZK7NaFaRnrc8gxAtTpPvvbbVS7uLjwe1VQAH5BoHyP5eUjxX7TVSAEJNFYQEDt5PWUizkTtQYSFbNgHG3Rb",
  "key13": "BoJUhDRKdCDEMGjgyVEQjFserbLDcAmEgztVqxqdYBmLa5d2eGnaszC8jfPhEjUArcaaJ8S8tR9yZAqQ9bsWJgY",
  "key14": "2A2P7sr2ZEbzWciBaM1z2YNgUUTRdGrscveczCv27r3X1Em7bwt83qm4tDupqG2u9AqhERanAiUzLqzFFeoCEfSj",
  "key15": "5ZnxWC5acus8PGxMXeTzb7AmBSsVjMtp7NLDPsLAsksmVQKxUXRBnqTs9afqGBa2CKtvEchyCXPvtMCYnuTWNDzn",
  "key16": "11ACUQYzCn5qgnxhBm3Ybg7BFH1thooamiScyiARKobqWVCGqHNqFCsE7SyF9kf417KhxxyX4sFPMDneNdrvvz8",
  "key17": "4KkReEwKqjFPnsXFJ2jRHhEvF4dBNmzXNitFG6G1B46CftQN7NLuPjgPYociSjMCjoNMUieBBJfJvbzfDcQfsV1n",
  "key18": "4mCJxHUAikmBQvM2WqAQvxu5DvuRmXdEx58MSf54zkndgjoc3oqSh3QauuTiQNeHsLYHLXJQwS9dkDQxbW6HQNJv",
  "key19": "5mFCYZtkjmdWV9ytpSn6Qztutqf8pc5vBfvLYWuoB5CTErDxHQgBhgTVjdP32Rjk5seTJv3ohtt2gSLV6c7njBrq",
  "key20": "LNdgfkRLYtVTWbW4veLKY7HAsfGnqxtALyzDeBFDGbxREcBZujd1biL3uheQphjjYJgZSyScXDx3DJG2apLJUBm",
  "key21": "2soJUhBcZbQV3xR1bpC9iEszxAHMEWovHydvNUHDjJpBi2yRM6Whf1txKFsrMoSSfLzkE7tNqKSki8STtVmKgycM",
  "key22": "etFBP3fEcx4krg43Cp8n75yd2vjFiNXAgNvhVdpJykPnYnBsy6fJxvgQPcxQQHVcAWG7QWpzTW6icSnmWFN6rSH",
  "key23": "zKyksXaDP615aczrKdUTFUSKjpQKhd9HnTPjVjzWNCqwgQj5CWhfabykEaDkNRkAUEe98rBSwZNEgws7AYpyMaT",
  "key24": "39ebu1pjQSZKP6yAznbvAKdpqT9TXs8Yfbz8xix1K6ESLT8e8J1FovktXrhK3ShtuESLbmGsYJ7tuG4ER36kEUhH",
  "key25": "p1QL1Wz3FEQZrzv97ReMgUYt2tjsCsn2YRa84wzDpHScCw6yaKz3SVACs4UvtNpV2RTmhoPkWttPqYne7WPqB32",
  "key26": "hiE5CdDt485iRpXMtGCRj8bZie5dVU4zu6NSRTeRq4Gngtp2JKEXRASp1U3EVNCWTBQuS5v9ZC5MEeP94pUhNat",
  "key27": "5kPPLsSR33akdgFr4REuS71oHpwKfejp8naoAtyYMy76mWFsyzx5hk1cMNXpKzpyFAKjzkiPAHmd8rKBP6hVuDgd",
  "key28": "2fvjvdAqyPAc7q5g4KzATopJvkdASBkCHLrEfw3VNJRpKc3MnbYgmvssKUekkvetNxpbn9oRGdeue2q1S1q4tCcP",
  "key29": "HkBkLKYQj4WDKnvwZeoacWxhh37vPUXcmgj3F7XraLJ1gXDjovNF7MqattdjZVCT4SqD3HtRFFrfJeLoaVtVtzk",
  "key30": "tJNqSXu7BQhhaLup5uLYM8w3DkJ9LDygU19UmUYdhAvfvMeheGVxCv4vJB1P9uKMhRfDiEKCxyGQzPvV9DDpcqm",
  "key31": "28iyk8Yu3APtW9pMTLrP6BUsnMosnAZX6vogFvsch4WkrpqWQ6n929FfZbutk81Grdr6miU9doKYHAk5agktnkXV",
  "key32": "VAdoML4ZUYJG2L6gH3Zhiypw1rFzHxcv2pUVmoLSyR4jAxSPT3mEtKp1s7LzQ1BZKqcLgVk25rGLt52a3rcLsbG",
  "key33": "NmbzRgVLvnyTCqaRjm5cbRrim16ChsmomvCFD8FAQr4FLpV1yauSL3giNofMExMzo5MQYCL1zRhwp1GAQXEcsBx",
  "key34": "cRrnYjrpGiJBqNAR3hC8VQ2v4kYt3h78B9wLovsHd4bxUpvbXguGbZdjJVkQxHycNAiT1JVMix9h2bmaJNZbbb3",
  "key35": "53T1D7vu2Fp1jzmFXhpz23eL68FC44vRtSSGZEd2wFiDwQN6cnLRZrKN4GZzVkxcxt6gR9tsvfyTV2JJWEnrvVdM",
  "key36": "QFDNpJ9FPg8bLADtQnaYKCrKiqJWBW42GKFsJL9Qu7ufDW5ZWT7Ra8cpJ1oDu5Eck8hczhYCbYnFFLpXnqbhz5r",
  "key37": "QYjNUBxFrk939g8uPgF5RRN1e6gx71bzyoGBtckTCXscZjWp4x4JXuC9ijKNehiDfM2u2BacYT4mia3uWTXAiFF",
  "key38": "3iKUipxGxX8XnuhSZ8qa6twBCXLa5mycxmksmYfPpa8FK9WQShB9bi4ZcZaEDgPm6HrxTNBj3E61NkCALGLzwULY",
  "key39": "61bY6TkDK2J1GPZHo3VJ5uWu4JwCEVK6t6iWwvMJreFAHBbjU1oCwDrafK2N2CRVcP6NmRAFzv3jC5MsAzPMiCoM",
  "key40": "2VTBbTonyYxNaDimo2ZeBjk3h7yy9DVNyvarVGWQAhJZtwZ7xXcma65URXWiFBEXCYjoZccgjrMGim2o4arSxJGZ",
  "key41": "3rq4EUVhDwkqtVaFcuS431yB1Tyt24eNYHJTTMphRTtMDVBwHCL5WwupWxSXdcA7Mzs1e3QFT8S7waLwWmDBNpuF",
  "key42": "5G9Lq7ahqbFq9R7Qv6oQePNsBd989wtHPcUkrvTP8xk4t4zai6u9bcibZixx9EsRGYNbxQCueicmeMMHMaUgkM4C",
  "key43": "5TJS2AQwSNgguprHURTC8xchAFax9ZYFbNALEUeVBWoRYN6E5A1YLBXA3KeNb9zfCmmYFeteiYhpJwAiEsMyf41Q",
  "key44": "6brA4pXEzppXVJatFjcPCHKoaBMzXV9QCEyhs7ji1k2Tz1RwWQRa4KFDTBFvJXsAL5vwZbmN27WZKRPai82HUkR",
  "key45": "3yPNMnUYbsu9nZucZJvyt2u1epS899sKqPFYvrFHPQ73U5yUuS3HFdWov7cUdxtYNR8PPZqUJ9SgXdZiBVWb8Ugi",
  "key46": "27MRRSpd2DbbBsRiHkzRvuHZNcN6hs2HLydyvYwkhRHcVU3vYdZLjiNpnR487YSKtTxxyTvren9uF8qLTFNec9u5"
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
