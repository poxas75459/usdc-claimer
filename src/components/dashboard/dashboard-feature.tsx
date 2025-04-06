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
    "43dtrEovDN42qx7pHA9yJoNr3dvfgJXZCHgBXWgKiTrLbuLN3uwH8GLevqvVp9GxyvsC3cDRLFnXBSWPjARaM4WF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SrnMutuLwevRyo1tdHXLKAb3kNRp57y9ztBwfuMhMzYBV73aS1AkAHbmX2JVByNf1utmkPn1SfR8exquTRBYsGj",
  "key1": "Dd4YyEFiG2aFdyZ4rnCrNRq4ELR7MH7z4ATbB6KSpirh5XqL2yexqaceLEzbqqkW2desfM87BxFJzw7e7X5peVW",
  "key2": "55jjJrRVP6xeBBAwqZqZT8oMMpnGg629PV5v94NMGfoMUvrEsee2aN4qFBeCEwPAwzeC2fqWD3G7SDDMvDXhxpHa",
  "key3": "64vdDZYMVMJPYzVXDxR5jnMKzncBcWQ3fjv62r12Vy4zcrL72R4FdGz4eMGWRHpT1HWwcWAc7QsDgA3sgbZ4FUzN",
  "key4": "4z4cLTuxCPi8yXdYtSY4399aZ8wMgG9M8RZ5S12ZFkoHNMBBUSTdBynvcgjXVLM55q8NEgJn3rDz66uDxi74waEp",
  "key5": "5GC8tkGZ4Lfmv7gWquoZ6rcDCh1RwyKaw2HuHcoWMcxSCNpHCfrAXYjpdCJZkRk7ZLVDVQpBhDSrVqtB32XLVs9u",
  "key6": "4rZYaSVBRQMtdofgT5Jqra7DdVwkr3fbPAGDEQWva9bJdP1DrvF2u7mP1GQSFTXvkYogrwTwgcXJ8vAoppDBwVNc",
  "key7": "Yd9NGxcvdbrWmtgBKN52s96c1GUeJWiw5M9sa5NCDsuNWNcyy68qYwyzchZxZWZZtGLCYeMx1Da6xRXemEJj5ya",
  "key8": "5xB1jYSMNerDyxZbRgHNhdX6ezk4eqvzLMp2cyPkosaAymSBJq5QUwtp8HNTyC68NZz7MPM7EKC777NHJPtK6SgR",
  "key9": "2yFyiovW1ih297J5z2RdTtbZNcFA3UrFE4hHWzCYbu15sr3xdHxAEZCeUHXmG7JaxQwcLxMHMur3jqZyX65GFZPn",
  "key10": "2EWA4aoAFqbPkPJCZhpTbLZudhDdtSiqoyE75kneuQubHTd8TnvEB5a1sAR7xS7jwWwUPU2ZZawsNywWKcE4raTo",
  "key11": "scoCRgnVGRLkTiPqDdyWdDQapZFiELnNZrXAvzWLiSMSA8EmbUeKACZBVEUuD4bibMqKKCvMQthDENxvayb5DgY",
  "key12": "3CMRt3nmLHukAq73SVvbPeEt1QPUGVpo28irNoauc19DkcjioYEhm2PmyxD6jcHHGYyyho8UBHC3eDqZPAjZodF3",
  "key13": "3axaNBtoYXKnjwV36g9AKs2Si3bFYWL34FWC1HjLTpYfLXhXg8AXhg2w9x1cS7Lgw3VDhvLQ7fkjtAtqQidkZ5cF",
  "key14": "65NYE53Br1JYKR62HrCLnY8ECTb39bKoo2Ff6yTAVmudXCibpPViYh8dztqQtjJFeLNWRjzmYTmXF83LWycSqz7y",
  "key15": "62CTm7oaQ3oa3UrbmABWzkGpWnCTMKUvzCTh8ELksji8W2ApFkNuyVg8L6NUVNu71hJw7K2Eurqy7LUrpisG1P7u",
  "key16": "5deuMUcw7ByvY1WRNjDNRvcmPUHuq9wuDdoCf1ayJxSVCkxuLemPtZ7b8E7zjqQbaV4btofeYZYwZ4B8yC3hvLmV",
  "key17": "5zKE3EQqmrvCZ4DYCgub8X4ejh8xDkarRQneZaXhdv5BCJ6R7NPSLnvfaamyxeBizfEoap3WvhMu6bqroJC46w5G",
  "key18": "2CBtqQBRihKXiQaujs4LGkd7ZMRNKMt2NFKKqtWXmc8rfCMwQfRtPwSPPa3Yb1tneHEuaPhKvJpjJaTNVWJAbcju",
  "key19": "3S7jsVf4huc4dUAJYRD5mz4fJWYD3KR9XPWj1bLJ1rYjH2QJ7yc7f9PBFfv8xfEJes2hTCQXoMXwv9CorLY3Cn2D",
  "key20": "67jYvPTjzKxFgLp4YMixJc53Kfm6iW5Z2UrcWtRXAZmSsEuFpj7em9JZjjzrCijxzwRRiJA9HLszw9K1kZRUGCJF",
  "key21": "53M4VzkuzqFN8S1Qx7jDXcWrB1MjJPs32EgFN2A8xxEYZGbJsFaPPBh8tWygBEKSgKnsCZqVkc9QuwQJvB3pirrE",
  "key22": "3W9qDgho4nZLk4EK9cVHYkDZeUs7yGJQmg9ikzfZyE5GSGedqfqvXUMCs3ZrmyrxYhrNh227wpxeXCaT25qVafsh",
  "key23": "667sQFftE7e7JTypkiozEMYPwsBszo4YsAn9jmMEKXV8Eyg4tbkuJZBjCBR5WVqmSWz19si91sfATPEzC6gSggD2",
  "key24": "4gbxbfM2cR7WjuXi7rdJpgbDyjgaPPhEyhDnyMBNx94XXNAQRDvhHA8CfwBPtGtFatHawt3E8LAAqsiEibzV9MKP",
  "key25": "3CaiC5uYAEtHPby1Y8pREp1Jc1AZ4bzUNrGq1EYcqioRZHuTqNALpY3dtbnXdRtDz5xyuHq2nyT6CEyT4xoVN9XV",
  "key26": "2Na57ofivW1XfhARMnrvwir3DbqerYGCcpeaFcpCRhQZGATutwvhHnN9EvBLN3SyVAu4e9bpgobTza8eyhLJP2CB",
  "key27": "5xNT8xP5kwgBFhcnp7Tasnm1bLNzKfAa3Lrch56kMngtqJV4c5FKCgXwYYS3EAbpConfHkYasEnu5UH6DcWgCK8J",
  "key28": "5Q4qyJPpJ8TJ1Tb1Hmi8Cs27n6u2DXv9cQJS8AND2CeJuPwtAwSB73pMRrSXUcqfRiwCowp2uGW5P4npGNkmkLu3",
  "key29": "4ruUzUtovQKoQW48UJ48AoWZSvv6kUBr4YbJdD6FJpfWPQGwDXBtMaMiExb8qYfaofxjGpzRo5wxhRFPmTCzQMLw",
  "key30": "5GEegqipYP4oG9CF3tMt7CPo4D6JCpqwX64badR2F1fBSbA1ifxnRXHjKoCHEG9HBoAkJYaAPTtHQBMwohByZtD3",
  "key31": "4jRP5j19T1BJdoPPY2V9uua95eWT7MXz4LuFVVAismcPP54DgGsC17MtWyjJ9nmgvEX8G12sjZX8YoA412FbWisc",
  "key32": "G4eRBwne7QcPKFiQFXjrJQriHbVH4DXCxXnP5Lk1EiVWThf3nmStkzewW4xPJ9b2optgrnNaLMWCNzSTZmR6mTY",
  "key33": "4Hhdpz7HVP8Gpa9pnDTBJXraNmBHGsbUK4d59ZDXtUs6Ucro8z7ZYZiWKxERzr61H7VPthvSQRbXKgmsFQKGk8Cf",
  "key34": "52z27hcnvkJ2xw6PxTyCWGMgcBdTm9sU2Cr6Xv8Vz4m5ZcsQfihZkfEhngvT3W5tM1p54Di5andHVBmqKJmGmpn6",
  "key35": "4gqBvkA3sKbLPGm4J4SoLEFXnUUJBj4r6wXpQQFkvkoEYPK44p4asFv1gCNHUvSSKuyrT2wKZV7iyiqG3kmsKfD6",
  "key36": "pERfM5kGyBoWpWTXXnbkeKt23fAr13nfDnWiapwuK9rL9hHtJTyuoHrCQ7XdCCSEhjzqqgVLutHDVbn5EaZbVLo",
  "key37": "TLEe8gL19TTHRvD9WwjxouSPPzs69jE2qpfHkfzcYhsWuYzZnCXDQos26egxNKZRqg5xcACPEoSDEHyiaRqSK8k",
  "key38": "2JLU5SP8exUgpWCguDhB3wYbN8yoai48EWu7Uz69CG1u5TPgsm9ERty7okrFg7sFXXMyUrxkKb8hN4VZC3GZjdGX",
  "key39": "3XybmFMX8ctkNiyfhemVHH9okyv3eq2NNUfRZRJ26MRhHJnXLsbEdC19s6S42bh8R59jrLCuQhopoHoJn5nN8Ay7",
  "key40": "tNvruWareEqvFrgnHcNxeXNJC81gmqyEcpW6YVUanLEJH5qh1RrqeJjqAJvQLDbC5Am2EM2rWyRbHGkT5hv9gp1",
  "key41": "4qmJyajM2oVEbVPxVhSKmz9kcttxwAmpd7msmo9o6rhNZjfJqwTagA1ixz3CBLr3RhFXzCTLTu1ktD7Ss1b9Da8h",
  "key42": "445FTiG2LQpnnRdUPGivD8BjJyBoH2knLQ6FmRst8voscijvCzU3FnQgBmK9H8BCfGtPPGNPvePWqvCkN3SxFHkE",
  "key43": "4nVNKpMrVyxQHRwqiJM8ct9Ynggo1KLh4hRyLvgGPDWCWDFBDqYH9bihf13nF84RWH4LE85DkB8VecvJ8HRCBABp",
  "key44": "55qDLLF1rADR59uz3NWPQ9ATXSqMciUDUUEcMTffyFHzMbNfiCCzkgP6xHTPxdUCMmdDn5TdJ1iUBsYeJLHrt25k",
  "key45": "4kb7frnKeZyjoUSd4a4Z7QqMZ74Xeqnz2PKb8ucYdiX3yWgsfABT4AMoPegGZdxF69aT1JQ6ihcKkLKDKyduqtjh",
  "key46": "38CmMsuiFHtzqeokL7BoghHKZSTLBBhYwcBD7e5yxdk4cuMDTuhPiTg6ogniQrGXiDa3UYkho5YquF6RnZybKpv2",
  "key47": "5XSvpQbtZ8owGyPzdgdLWn5THhyVVeE4rqA3yjAdPqBUDKxUR4hj4SkyCr79ypwsbtrDdjFPnuX1g35LLGe2Sy9G",
  "key48": "5VezQGwyZsPmwuUEHkwKjdAsNxW8L1Q1PVWdvcfNGKLhHMgqLiHXZfjQuY7rFLbudjiNob2vRNptmgw5s5GmBfhJ"
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
