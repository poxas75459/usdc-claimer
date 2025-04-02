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
    "597gnAuZv3aWMGMPaSv76v7rdNbnmXiQ2ZQRZo877CvSqFHAmdJEy5ZcU2pnadtnVbermjWJhZ7R2fygEK9ya2jr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51XUtWUiQ9hmDUV4vmJQSUALHetqCWrDppkNVHBo2o629vJLj4KD9tXDTQtkB9VsXzHFm1XYbpupjaBZWHW86Azk",
  "key1": "3Hbos7kW5m8DfhrcXdN3W5HV9LHDjyoShDymdE5UVCmQS4ebEf96oQ7DhFjL6qFRzTt7gQGy66nykqPBewY9Zk9v",
  "key2": "tSxfxTfHX36cvxzBnNHKbEsyzwCzkqr7fXc7PRaYNnfBi89pkfUsVU6D3CHP8EUvewfKqCF1FuCeiGS49Gx3BM2",
  "key3": "8P7paKy98TrKvWgqpFDmVaN2SuiAitkSpMbjTcgu96pmTif3wQGrpcJtoNLTM4JdxqHAconZAu2qz6UuCWeiAX3",
  "key4": "4eijQfPiyqLE8ZTPKunphar2vngKnfy6z1JZeha3x5a6i4LgkvV4EvcqheBevWdRHWTwyfTVSSbMva5EgkNcaLSF",
  "key5": "443q2qzouB6HQjvzkruf8Kw4yko2zZTgKp44mVvee4rg1Zio1fSjUZTEdUne7xCspDhdqpAtiMFH7HQAzbJSWL52",
  "key6": "48BzFCpzob8xmkUiCZXSfroGCXLkfjbxisJXPXr3UZAEuw4GurXnRnKFAkNgacpMW6JbAVwCiqDb16MjDem4mViB",
  "key7": "4qn9NMueWHFP72xnBJjZcxqxmAKjkmdfAdYsAbiGF237JMRuidvbeRu3SXkxmP8LJhTLUqdqgmQhY73w2fV7NrmA",
  "key8": "kVf3Hhv7jePQ9UrGUdNYtovmJ5RGwrvbtdyPKakjcX3FzMBCN7JygHmXejHGgtGNCFYcS7mkhbwLekKb5Q1EErK",
  "key9": "5Sp1cReA1L1qCoExaLzujR5SUrffpqjzvTLena3KeejDN6VK38FfZxx3VGsG4f3ufno9xyqUZ6KhMfU3Yo2PS69u",
  "key10": "59iVhRceb1zsvRWLgxFRD4Mnrwt3LPxP3zeLQ9v6XqZmckaHsCU8U7kE1Lqbk6Pc3VS7xSUVbXXM4VPNCPh9iyZU",
  "key11": "2dqYgezsJ6KFczobbcm2ch4WrjSVRjDrXcczX2u6Tzfc8T7FNv1yu1wXwkEiUNFKRayJ1XtXy1fkFMzANdyd4r4g",
  "key12": "5uYEw7b6GWkjb5KQkFi1RSEsH4pkyjzBvoLr7BGzbjeVJ3W5gTbcauHzhaSoAtUThiLuj4K65VMYA5kdx3znpq5A",
  "key13": "57afG7TQVerTAbyFnzxtn45AJVyKZtYj8mdQi9pKn26za7FkKDyjFKbPvwR8wnkZnoabgbH1Wmhaaq5sxfWr6wv5",
  "key14": "28CGkRb2NqbGuEX8bgT4RCJWRMp3biscCC1CbKURd4owA4urwHnfxsT4fAstF7556CPSBwJ86gKQgfpUFMEL51LJ",
  "key15": "2MQoszTZLHiMz5YSNtV3JwzMvYaQy3bHu4YCNuJ7z62NyMjD8ABRwhfPFsz35aJEy12cGB4XYzPKxykvbrhGwUBH",
  "key16": "6LSWXdfjSGpe3ZNw48mShWZEWK2Q6jj5paTnedzp3Dbmua5sPgJrMdFoKBrAya6aLES46kQRyUaBZrivQp9unS9",
  "key17": "oFDCq2MXBbnoCY5vkey3L95Crgo5N5BddvzyQyTWkn6CVXcmR7ujH7xYuCTvaB3qgHCZapvpcYBQ5Q44h92Yrv8",
  "key18": "2AQzBeL8PcuVCwRCngrRqRgfJXcmzE3PgTCifTvyja4TB4NPiGRxsg5PF7NXRCbBrzBccbfRW8KMuZ2YX4vS5vRk",
  "key19": "3KiWF1URgwDqohULfDSapiV7WWs21gT28QhTDyzUc71m3q1MZ6KuaDHBRUp4rADTnnMXDqEyYixqWB88woq267is",
  "key20": "cQcayrYpNH8x2Um4Jm2qxJ4jaY8d4Wp3a7XyaH62DQmHzUt5D6vQ6bnyoo7Ci2WiULmuXP6g5CGioZgopwE2yXC",
  "key21": "5KCDhuLvR1nYuLF5S25Tq1eZaeKuM82KuSUyiAa6BB7FWkjfGQvuWbxadZPCJELMAd9pgPVqvcnSyQqjdshvPKEF",
  "key22": "5eSyMdZcN4b3i9jCkDVnuYVRR7EnKMm2TitbS1w42HVfkQyoNh1ir5zzTbSzm4wFUt1nP2XmKpUovLcFG5HDDdfw",
  "key23": "UtHbVHaAFokGopH2juViW35xG7Vvd4g7M69QZ78NsmV7mafUJhDnsu3T1YgbRvYwQmVmH1bZZxDujx4d3en2Jwr",
  "key24": "3xxDGtfzMAwmqZWY2FnvJRpoeYNJtmbszyxC69md8tM3qBwbzWRnjxabUZc4Lvh9i5ehF8HJaLEqHZirogSEVNiw",
  "key25": "4t8PefdgBUJ8bZvm3Lk3mkhGt9McAPVeFCRqBPJZPTeMBVe5eDiTd2GkQHSQ2JnpRyAuLsQDriMTM665MDPMu7wb",
  "key26": "4sPEaKkPaTUJ2MBv7cXQw8ehQeZu4TrdDuXti4MELxFqeLURHMxVUfJCiXAK5yhqNrtF75CNdy9wjqwJzLJnSwGq",
  "key27": "8wCN2NTycDUtFzfB6g3ZA6k6Y1u7twTmNLFwA2KCa9WfbbiHoyA2XaePeEp1EiHiKgd3pdVVaZpirGiaG36iN81",
  "key28": "kqEiUVxUNWFJebf2QKd9vQAnhA32J8u4arM7JaJfYzMCbTK5Y2K23ECEsJqjuq8L8Kzhs1jmJrpGEVLmpmu9JBF",
  "key29": "5vTRj2VfGPt5ep7DKpdg8wyvtrCVMyQsZDkRjrAfT767oYn3vMERnnBqLyeZTfZWVRHKZoLf1F3ZbWQ4rF3a1Hnr",
  "key30": "3F8YSDjz5wgCjseTYKY38dLEdNB4BfYhZqig6rKwR2xMEf8xoX1BDZScqmoTLRKmY2ty2KAaTXsWPRmpeuWDRkhS",
  "key31": "2k8DP56CAiefYBPPaPuzjMf723demddtZ4A83uETEQF7TTfYuBvsNtw6zXCN4H5FbSsoAin345gYCYx8BBBng2kH",
  "key32": "5B5Mj4qFKaS43sjM74ZgyNUhfT6agj7gEMsbgbh4biwcyvHQwCivYFaHToW5v5vib3651z1igxtrQrK4Wb134TYF",
  "key33": "575xZ4VQLowmZWeLSQ9Xp9vTYzP8NbQWe2CLtM7cV54aCCmeC33opAyfMKLnG5q7x6eMF248spwWdpDLi5LKeVK1",
  "key34": "3RoVmjcThAAb5VgpAGc3dvSEqfAeURSGCSKTsnDZVwxdiKE8pG8QYBcLt77ihGtauteCowNqtkpM2uWGyuWpQQKR",
  "key35": "3HNkQcsSUEdi6QGTiRupd27MBwues3Wqhm8EeVxM5oMQ61VX7JN65wFniPhBhLCDbNarSEhpkAWe1ZnyftDBSPuW",
  "key36": "3rsGLEpSSrfUZMeqyJPhxGMXixA2SAkVdjSckFEv1rLgd9DFmMi3iRYhySG4uhkGJi25NDeKDFBwWrZjkSPZpSy7",
  "key37": "tqdWUs8whPXyVaDHrJiPpsUPau9dm8SFZmVi37y8SQ8r9gdR5tiG5YyA7xSmBXt3xvTxB7H2rNes1tkCYbuu7tP",
  "key38": "eMJ8FK4Fr3kNeefWN7KzKwtZf3B7zn5bShA7DCKYNkykKCbkaMVzJfywiPqZk6kbQ9nH6nGUFq31M62WKf1EcHq",
  "key39": "431JRitusuwT9JipLkZmKV6ZR5LmSweu1sqxuPT3XkX4otSKV8Sj2M2F6oe1MWcXvsRkuo34x5c7mEuNJb3J9brP",
  "key40": "5tAv8KBy1nGTrJVhBdzB2rgYX5dYXBLidaqy1ALmh2P4rFo1xmdR8d8N1Fyguc3DoG9Aojj2Vo3cgbhTKqJtvhBx",
  "key41": "2RGQBv9j8Fv4ssgTzgruMTu6L1wCHn3aQ6LhMRHr9Efgx4XRgw5VaiaMEMz9hxSeC67kvn8XD6o4VPEY9DBRp6Le",
  "key42": "28zHG1JRaEnhzyNtViEMGp6jJUCdpR35V7qXhuQcc2MYzjNytepdCMha4Lh8GZ62yUj3qMXcd69YYpB4SErm7J5p",
  "key43": "41qWm4StCQ9qXfVdHqgUZZtEL4u4iEYW1w1Vobtau71YKbx4QkLaKseoSw5UFgAGFboatWwGg5QrHg4KxScXbPB5",
  "key44": "3HEtUX7cvUsJftmJxtunb5fZTkh1pMdZcdBUQaE7zEL1PZ7uudLT78eFtJs2wDXHaqoZAjtxdmw8keKy89QaEueA",
  "key45": "4H2ZepnDJk4DiqP8NFsnekGSkyjK1fwNES2AyYt4YgP4sA4mWRGcYLPyAZYDANoojnStCvYLHQQTFNNcFzAMVnUk",
  "key46": "4TnuKqEAAEKrbCmc2EQL3qxrSzfWNjvYkrxm6FwEun1NXv7RwKR8SZD7m2EQpKRvgNACUnT9XocmMZgn1EySLKSg"
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
