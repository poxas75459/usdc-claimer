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
    "htrC7nwY5kCAMBbk5dfo1Y9ftuN9L3dUXzbTyaTTWa6sqBVNBxpWreN83TMRkPcKQhLkrCyS4e1Zdj8wzgdphW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DjEkmDfP3QVxrgGZvWihHw1TbBMGCy1tdBg74PKpJSUVqkQBYWFUJDrnu6Cfvx6ZPzraW65YnBHTzrdqLwm6897",
  "key1": "mM4EWzWVaqqDRN2PW81qLB4LunCYdYeUxexkCpmuuywadGKq8G6wh9wxVB7CfU3bx2JLtTKZd26KzYCGBzxNSVV",
  "key2": "3LP8k7nhamvDwRUEfuYtq7Rxzqcf67Sbcu6xrrSW15FgHNhcc6DKDV4Ewa8JpkprGRi9D1EHGDxAs8ZdiCDf62z",
  "key3": "3HUQW9L52PhPEQKAwvsauYt4BdwRNLWrerx8cD2jRAbR8zwnYRSTZ9knkGsEw6Q1yFRbqrsr12JyrZZSJzVRRJF4",
  "key4": "5LG1bANL9kkQ5YfLmcxmwD6so3sXR4aoAjtDxZaj8gjqWyebYHRxeg6a7zxNe1HxUnNACqJQrAz31HovMNmvwvb5",
  "key5": "3zU9qkBAqW7XMXAQbX7Q4LbhDQYxxWD9ZiaFA6fMja79Y2rw16oDWBRzbPcTLRLVvj5irdHRZZcWfwnuz9LofJXX",
  "key6": "24HVejngFMymQ5MoXNyG41zzej28zeVqKQ5dPCiGrU1sEQh6E5akhMVEwHc1HEeTH9oHpw7SW1zpb9xURTY6PJhB",
  "key7": "3m9DGkHZL1ss5zzEnUbipLjUiGEx9UdXvZkq2FKrVBDKgLQ2kA1fygCNgcKFs1ZYSDKtqU3Ei3wD61Q3bc4XJ9MG",
  "key8": "5PmnbqHtQWnevRs4dLmiUK4dwWWZ3pyMqvXzKkWde13waceEyJhpPCi1iCwQjWr6qDhRLdVFtYSGvrRnZvHDDfE7",
  "key9": "4dqC65h4C3z8CJ5FVrUnWuF5v2XPkmouQ1qGyy2kXw5xSTnM2W8x4dkSRT2swfoGKMSr1CaGeEkk6bByHCZ1jZ2",
  "key10": "52fcgr868N8hMvhbmWkcriD983Q51qzPBuha96ADTzfRgM1N5wGqoqiBPMydupzwjCZeVBGqGKQBF9wJvzwas13C",
  "key11": "2qgqT5kiMGmxroADLAzh9pkBFqi3udW5cWqELvbSwTsbJNBtjrZPJDw7WZTmwape4z4jZCTSZfxjUCFVTTbGHg1L",
  "key12": "3YwSXyda6uRBEPZiEdr7kSKTbtqBuTue4VBxyWJduxdzaV7LSzygCPs8bNnKViNxcbfyrRDYuy44WV1gdWh4pP4C",
  "key13": "2QRFjAG5ePDWHZu5o9jtFrfuuwT6Vw1kuAG6VR6Riv3uuviT1aXccEq6rfU2zHehccFW1YF4dmnje5SSnhAk7ceJ",
  "key14": "3c23KPY5NuA93E8BSepQVHsmr919GArKY9FoLZmCmN1nReJho26WdL8mzpgNGi11s6xE2VjWBHsix892U2ixs1xn",
  "key15": "512ffKawBFTRZV43m52eMwkzFvcKWrRk3nnJcTTF6WBjzoxphBVjuXACTLgEHfAewtNuJhrTb4iuwTof9u3Ds9wK",
  "key16": "637q6BVQUYzrDcLTRfNXZbmgeTJE4EXnrdUuKJzqb6vERPXNkKRbNg5DJak5crNnGhJ5hcJRyrYcJsGnYEEVr4cq",
  "key17": "2vnMN95Ns9jXEW6KrWbRjYfB7mAwaYQ7Ceyg3S7ZKAk7aiPLZwBiLusexYP9E7g9XNNfmBZggvMNRbit9ySJzZ72",
  "key18": "TESBZhM7dKSLbReAbJBgtC5gGApr8DS13V7fJ1VzBtqSKAu2PJCY9eWR2cu84KGo7EXwpPKtv9khdG91iL3jiY7",
  "key19": "5Sex6zmvjkx1gh3gy8kvBWKqDMao3scGLmq9caoXzpevMkqtsTVpQ8AF8h9BAb7tRZ84xj4QjcyK9Au8hgtUrSP5",
  "key20": "5Sanw9FNaQP5f6VEYDFiNMVND4Wz5EVqMrpyoJxzuuD5wAe9h5Ym1Ec5VqEaTp5WYSdMt1HusnvSQCEY9JrtRyrP",
  "key21": "5neKjmaNncLZpB4vPaVsXz3nDJomQFDqMj16HbppbhdPGaWsLpKc4DrysKSAVuWMZYxXsUP2sptMFssaCx4DkMwk",
  "key22": "iaaVZJKeDeG8kp97gCc19jvhxPer4VwZoH2ye6oj8nqvqmDby12jKt5CvDpPkfxyLiR48xfkFdpokWJcvwj8brf",
  "key23": "2Fu6FT8qHSrfnPziJ9pQBn9AB9bUhSYimKFf9AvdESaXNuU8JLokELAYLmJoSnFUaSMjfVrDm6ZH2rMrASbKiCi2",
  "key24": "2LCbzTbMUGCGdChSgAibsyDvQeSCb2U6kLD9Hf5GPFGKrcTZV9L2o4geuiaSz9n14WygSEmS86j8doXjsANZdTf7",
  "key25": "5YCPVrJJLr6hiYZwGozJQ9obRZ4XCNdJG9jQ2xcmsMSs9dHmpvVFvBjy9ZJy9SKhN4kuXqyWq7bVYcJAhXgSTqfh",
  "key26": "62BUitBs2krxt2Ji3USJdFXNypufHyGr73ngxgo1ewHLeVRXDpjpd5nUQMsqZKsiXPD11NQxFrrB2obZuuH6q6dE",
  "key27": "4LYoJCZuxhb1u4o8FvhfmrUPpCa2d2wtWsur6pPwRNt1jzXZ3TBJoRBWzq3KsrLzywt8W7Hu3BJEQwcBiji4kWBC",
  "key28": "3egojUdtiULeT8TMVhs4BqKM7uBcPFYHRtJqzfs6YQrGnkeTKbKN5fRd8wUeWs5ZuAkLqng9TbkqSwKoimodmG7k",
  "key29": "3oC4sur5dYnxSvASHmfRSNtVF4nzjXLYoJkyF5HAH1xLYghpu5XPGn7qJ7RBbwrCY6SCpvLstDPzYZhp3cH7VwpN",
  "key30": "xRMxPDyrGpdusoGsAK6b55DMcAyxr7iavuESNeNnVvhJ9XbCk8dvNN3TFC7gFAc1EPNnDtbBHicofnpUmXeeRxG",
  "key31": "56nUd3UExdCrp3LypZCFEVmoeQyfABja2aJQALRw46bEge3v367buKzfix8WjJcDA16prCrPJSViGT2TRSyMzg3K",
  "key32": "4kaH9Z56DEpZ6wyowEDxt5ptwv1msCwR2AAC4dPQbLS7U2iVy5cPSSNtvatWTNA1fm6GVNsr5zuVh6eYzzU6U1D5",
  "key33": "4E7uDF1hm6FemnoJhwAXutnnLekiN6FXK7Tn3pzgzDZwQ8waSqwqxowWyWEqvbk7s2ziBZx3STJeJHEM1mhrzt19",
  "key34": "2W5YBSX44qMqemaVXESP9jrCzDY8S1avkNJWdruxBC1jN2KRMvZn2qr4KfWrLUjgSfyRgjXAsRk5E5ocFV9eSZb",
  "key35": "2pWVrE77zpCWUsSGvUiE2ksBqSaWMtNoVbkVxYmpzQVtffuo3ggw8nw3TUMdBjYNQC67wJJPoJN85EsdceXXtJfJ",
  "key36": "3DUmvzw4Tv2tHJNfqRgSgeoNTXMmuzr19yTH2tNh83jrRoB8fnna3axpMHdnxnC2VrwMWrScMKeTkLJ3QiNJfvwW",
  "key37": "3VFSc28EXggsk8ho3BHAxQT7qFBC3jdybacd2HpkQbmEccGnhFnPnjn4uJWXt3wcfQL7PPz32xMhaxhGJ4nZKjin",
  "key38": "4jkeUMiGihKAxobVt1fnWKgZb18fwvyLkJeZ8Ss3Y4XoWSkAb9AwuCEqVqve78t2J9ZQ2aHsRF6av1ytNvQrg9HS",
  "key39": "5UB4h9dbxK7hfNvG7FMjmwSfgEwgC6auaVas1wv49apuXdxVpihpNYdLMaDdgxce4LLxfmFSJtThaNswS3H3Fi59",
  "key40": "XfZ9DKgU96JvcP5wsvAsvjc71PeedHr6YopHdqjwc21TWYHnk24GKY1VpUHQUoyZ1JkhGAru3KHEc3QDaMV6Nk1",
  "key41": "3kNXYNhitqtdxJSawAFgkKXEMeZrBLq4Zt5s9LA2U8gRyW7yuWBUdrBNgAkzjcxhUb9vitxNuFreA2ynnVKzuKEa",
  "key42": "3jpzsZjeVhjaxfrg2vGt32S6vPgscuTVaXjC6M4vyDcNEh8K5rZJ4BEU4QuxHqDMNKVuDFC1tm9UWa7ixMfGEjB6",
  "key43": "35x8xzTJ7NbrQ9NMNRt8NxamVUEApwg56ZfbNz6UNMBJdYRxTeKXZqvKhdCLyUfrW4vDskp2GPSuT7CTLEHxe2es",
  "key44": "4gFpFzRNfD1rshbSDmPpUQnC2rDJwxuAbZ1zLMFXUT5dgDnXB3dzGTJ1qJxiyWHcajQaTryzZajTZofkRrAq8rxe",
  "key45": "2EwPMVvnLFpr5zgoc5bjsBA4nctZ42Qsv1JWekhs166vEA2pBhSBfjn8SZdp2dAYXWThHbZPvx8aL6MNgXSSUtjg",
  "key46": "5jX6XhdDQg7wRuxvp7wjDSY9ZY2LQoWtYLCTiyWdY4aAUBjRyZnWuRKrj1jPKvEMUSJXVDjL2MQwoUh7LEjUAFPz",
  "key47": "5iYoWea3bbuPK7u1Ya4Db8iTXEoQuyLi4RXmcwDww7fB2rH8yVLkd4kLpFTfnBBKPE6FJyoTnxTGQJu6PS5Sgcvx",
  "key48": "5iVD2j7SN3amJdGdc7z5uRZRrQHm9PKdGW9jVscpLZGXv9cthYkTZWFiX3wiKp3VCyjTsBKmXY46zJu6z99LQdGh"
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
