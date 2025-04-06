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
    "5bebKcAMCKjJqn4raXDDqfPQAL5DnDPYh4jFpSD7cNZpAtBVZq6zCMLwJJt8KexpMjUnn62a93M1tWgCfT4g881p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FyKLz5mPs7cECAVY5ZhZ67ZKJ24M1MQkr3sUJbrDXR7CcpaXW7j7DzTUh1qrs58LsL3dKVc311QDSr8knEMx4xK",
  "key1": "4FV3WCkX9GLvyYJreViKaCTN7TbiTrfm5c4wntpmpVVbecpUe659LBnPhhCvsTVfuRfbxR75EGR9f8c1F9WtmJWV",
  "key2": "kx9LFCuVmYoBSeGHxGCboyfrW7y9jT11YfEamFXJSuBoM2ue7QComDpqUyK1gTUNWpRnKaPsWVDewLwT7JsX5wA",
  "key3": "39YYmoJzsud4Cd4XjmcMP7UwWadWJvbDLRB6SZYt1NwcNNALQPRaxQwwcRagS1vk8DAwLLMqYwegR7bR5f8NeVLy",
  "key4": "5ihVX6VHeErimM8FMXbRWCbuHD1gR1Dkoj4BbYbHfWbYPLYpiygZkoD8WRiQq5SiPAVYvSmZBWGtogF4P7NpeG9N",
  "key5": "3ubiPn9VGV4NVTerHcwrfVMkMEwTdAJaNqUa2b1e9wfL7LereQ13rxn6ajBqnjQR5UpXEBucK8TivqDwyCiW68vi",
  "key6": "p8KJiJbdQaKShbfHNXFJEhqP6k1rmUchmC5doYvHjdwUReyx2TEc1mKeiVHvH6Cgh1irfqXZgcvbCvYoBoBsZGD",
  "key7": "272bN4TKyo3gz6zFEtcPqvvbY9U31zutfYMnz6sDDsZJMoGCoh1VkNwJtLLXaZx5uZReRSwTceiCUJCtzhNSNLA3",
  "key8": "YqNoKGYhq2EYRKTatAoYtg5GEt3UTiW1o3jnJ31zSsozaAJ96XTCwbtMUoQuy8FpDdsbCLbqV5Y4FnYDy4cMkoG",
  "key9": "2TV8qMuctYXgYKiL2Y3m5fv4T5VHgro1mAQcncNj4qnsxmAfEZ3TwUHwvriEJHeYaPswePf2P9D2R1YZZmc1gvCK",
  "key10": "3z26g7PauPxcSexFKADiGwRMEetK1c1LVdzUL1wa1DzwQLK5nLCyXu3GMp7hbtSZ4ET3nmeMdczRMYqcFwUHRANs",
  "key11": "4iFQd8nDnwtNzg4Px1BctbxqHZpXuyCKWjiJ3z3HozQ3jDoCzMgoyVjnkSzRVZkpGZaRCUM8JAvwiYmP3Wm8asY5",
  "key12": "3DbGpppYEoTYxkiUDb4GbXsq6ZvQfv1xq5LnLnxnGPiauVqMswZ7LQAiAoNoVk3Jr2baCfYWxHZ61UkFfJ3rwg2n",
  "key13": "47HRGoKrqgxihtF89eRZykqaz5WpnGAYg78Cwa2qG5CAxuK2PsG9D33mtqB5smqoB8macCYmEGBYWRn6sYwj7ETD",
  "key14": "5i3YGsVHhfdggFTxoZJX1MyXHhENd8wJWup7s95BTJztbSybsDwmuHHRxU731WvasUByN4i4pE4SJPJBGtWfhBS1",
  "key15": "4pjYPrRmPvDnjU84pgr3NSLnZ9hfYJTudAqeU9qasTL9HUFcaUuyt49vMDstW9Ju9z23uiAa4ST33VT7Lg2UrGny",
  "key16": "4vJRqHz4pRvAHHcUp4g9hQzx4y7MRxVH64PiViE4KP6V3hyLbZpdPDmgkAiV88kDUjVGuC5sG9ySCWZyi4uwFXi4",
  "key17": "3uFhX98XwxsrRyUirjyzHN1aDaSbAcgMURWJp6xmgbuWf2nz26WNebbNeq9ZDmKUCPjVPDChyLc7g58jrUvWRMKT",
  "key18": "5TQ1y388wA9QpE5gfz69yQJwgu5UbvpmkyBT5aZDRRLt72aZo7oXrNQjvREzyGZi8TCf3P8ufCYYgv1KNsk8278G",
  "key19": "2meUtg47crZ4DXkgGybzN558x6nxLDQvdgwuTyVbZkfbsAvnkeLToHXvEr1tdvKTcfyfeCfWYiBWEySYFPrGzKVS",
  "key20": "25btjWyTJMeqddoyYiJ3yPWQJJNbCFM2R7nSkW52zN1tZmgEt9UhTAaDun1xWRajJxhvDzk3C1rCYw9CT5wvgKiz",
  "key21": "5wjnGnCnqufMb7HYZHRZXEZvr42xSfDReutwvDRyvaT9bDDCdK5oGAU1f9gPPFMuLEN7BNkq79qdGqu8zQrNvYFZ",
  "key22": "3L7HzUDU4zBGf2vHizjEE7na9S3mGV7GZKWgpBa9v97QwTTvobK3Zhkrs8jJGfP9Rkce8DvLiruMuzs61pSUZkxk",
  "key23": "2k6QSJGg8hEnirW6Usz9xESEhkpr4ByF1NeaB9BK8nNZkhdyKSg4VarPw5ic3U7gHd8bzFB2osbZtdPLYFUTvYB9",
  "key24": "2isth9SpBY4eREAFkTf5KhCNA4q2cff6TnTgRjbxDw7Q396k9pqMZG6EBdJKyQAkc8Wbp2Ehda2kS4qesboRGMYW",
  "key25": "2X8zAEbD3wscTdW2M7csphVghwoo15QtFtgK6pSrGJiL79J84En55vfC3CVqtBpdJKuAiVhsaZAK5sHZY1LJk29E",
  "key26": "2sJFxLc1baxNyx21FuCKvjTif2YdhW4S6bK6CfVAs8Jf1qYuKH6kD1Go91FFNLZju8NcppRVRG5bmW7pYHAgNohn",
  "key27": "tdSTedUaiV5uXVw8wT52396xpo4DKShfSbh2x9fDkNZPNqKSgo4oKMCRwpg2CKmJxfD3ziqsoYYiHMao1Sgyyfd",
  "key28": "2wWUQM54KLAJUMwu7LcZZyAra3TPfc15KQqFgKdUaDJtPhR8g5eeMne5TqDmDSvRsrvxjGcitD5VVF9ZXEcEDVbz",
  "key29": "3otHL5KZYq87XckpoJe79RLzYN693VuV7HVi7FMSLYsasXVXi9S3hSitBRod1zeMeGcDxcP9fuVCFnLzdRrfRpP1",
  "key30": "4wmzXLk1YLaPnFsFFy2YWAetdxFQXgQkF1NnWdxpo7DzrFVqqoEGxqpRFw5TKEk2SfMmLhtcNC8RxZf6SihcrLu1",
  "key31": "3RF9LMKSDnw57jHHiFSFMvUpQNXBNhuRd73wFLmV9NW1Ug2YGiBJ6KXaV5n1X1LT8JkWPbmb6ifcq7Ma6XX8L9Uf",
  "key32": "4pa5bw8aucEb2VcnzjwNpipxHEqArr8UAR4yr1nqzJxhBVtUq7inzHao7CeiE1sndcujT1FhEKjftL5raoKNNChv",
  "key33": "TfjSAdkBibRBuCgsCLnD18VNkWT2XW2XpJ4d5fvghuTt5NiGt16D1dADjKaKUFZoCREbHACDmSRjzqNu3deKk7h",
  "key34": "58A5C9pp9khbzsCNGuHthVCvYk2bb2jE8JNrmzqUPUXNdEXF8NdKwfYwF3cHRBeFNiU8nH9yfjxQyGNKorp2HgLS",
  "key35": "2UjAEi3tZi5Wxm3M9wqYxGgRYe63BqaF7yto6HwGsG1boTpERvLaxoQ4aiyMjpFtZvsfzek6dUEoeUrNwnfX5ze1",
  "key36": "UjZHuSLfCab55u89KbQ3H8XJiQ6VKVQyvDjg4c1gynH8M6sDG8U7j9tLf6NLVDbVyyqCtPVc8S2MgHGGncNZ4GN",
  "key37": "SkDr89auGwPkg8pUfkSE6XBfnDCf1GiAApjRERqR6ZLMiG4QcUZeevJveBbNjTQmVFpBGSx8ZM6Zvg9mGQgE9CE",
  "key38": "Pvemhd8XWJ47uQXs4KxQKADbqak6YT8aotg5yD9sB155hRZzCvH5m3a4RfptGt1W9XinduboUeRj5K7VDVvyG9L",
  "key39": "33Mzyd9BLvY7tdEc7ohaXvzvVEwoP1nD3pQosdBPibr5huLzyr9awur2d6ECoRTKTz8EHohZtgWQh7f5drsEE621"
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
