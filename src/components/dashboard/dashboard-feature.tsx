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
    "3ozQM4Tx8QY7r67mi8rPEB7q34VSuDvRi1stJDf96Pw64jpCYTUxmrFsnNJ8VFyTbjN7kEs3Wcv9aUJvLPnVSUDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yX8kNxANPi3xvr9cJyqCsDYBsatugdX4iNsDsqDYpP6wNe4X6ycNuFS87tGRHAFj46AHuJ2Ysk9Dbscf7Sxrd95",
  "key1": "38BSmxct2ZHPuPPsmBY1VK6g55Xvggkq6J1TPnynu5p8q91B7cyxMZTTawyxWfpM41JDoQAFpK4ujMyVxfbFmtCu",
  "key2": "3oeqUr87ATpVyd4cPrvUSYCZwghyCKQJXQmCQViGgXN5mTW9EYMoXtmLXYUcqc62TT5QJuuwfYAnhpoHTAQMvBBK",
  "key3": "2EHHQ8XS3mU1W64YzdayZ3wK3HRYxL1bVzGpFq9KyKc2DG3S6ybDsmFBgeoduwFQRUPqAimZ9KP2Awk49578Na6g",
  "key4": "5SbNVtYGgnpvnjaE6aQHsmtUxevHy4u4Fov3MiZN6E1uPbMR4DqcNBbK1gxcrmQ6FFGt2XhXKu9CBJzi1zKbsNhE",
  "key5": "3ABAykeEBNzHjMYQEHgcmpDa4rSSabitcMZL9mxxPoFiWdUmPVsZWroic3LP6H11AhbDJbAgjjz38ceZ2Xu2jtdD",
  "key6": "5QMvu1FmfA2VHMy9Z37iqQLYzsoJ1kLNtuCzVQHrA8tbDrn2UpaJB4pWVHMS8HTvfs6TvtFKvCFFUft68paT4FV5",
  "key7": "4UxVr7sdk3UXpaqzfDQuUVfDT1YxXvQBrML9DFDfXjFYguTwsk21E3jrrXNnhC85ExsTixZkaqifnwoz1wLFQ7UX",
  "key8": "2wkjyimtxBUdmZsYvW9UR45zZkuBeftNPKTV8eYT6YnNPjZqrhCkZbKooCf8Tr7FarUqnfAacF89AjtndspFrkzB",
  "key9": "4tRH83cjK8QgN3KubC1mpT3FFpdqbeSmFQJBiUSPYw5EBAuaLjG9WsFHh9QDm7ZWxXnDPvjSBP4qJW9Tzpufxxf7",
  "key10": "nBPTfKfmvLUXKd12vfvXT9iJQ51ScWa2R63XmDPUuU57De9Y1X5ubqHNMskAEYZCT7BDeigpmuN6dLXXjEpvgnQ",
  "key11": "4rUdBLzers2RTkkTQV8Sfj9Jz7LVPXbbD1Ae7sRtNxsiMdGWrVekXRewrcyU4m2RusfND86fhNmTF2vww8jJ9cyG",
  "key12": "4j2ZPbJ7vGVbSdWdotR5WfzWwdUpxxSAv2cx9GormqgkXapUuU37oiHxi4Sfozq8i4oxDWhbA6dupbXj3rYLZ54X",
  "key13": "4kH2Z81SFCwFfXQizxLQoRJHivW5HunVNBETJN7hvCWxBPYyhxw9mC65H4r8gRyUHCetSXtSjkR7e9jrC6TCyVwR",
  "key14": "39CyjsNCsj9JjbXkSDTxcbVvMUe4GqjULo165XoJG6JAUfy9f72NzWitjxfUTo93wjNz4Bo6RKsMSNkgQBZs4cFx",
  "key15": "2wvLCKbavxqoij6koRriA516fcDa7Ap8omi1QTuLfpU5f9xk1QoZmquLFRjdhwnh1RRqDn245AXUExTKECYaAHPX",
  "key16": "3aVaTMFSocwzmrvhPhWsQ98wDn4jda1UWhWfxoHoYkoKzFTmLqaSQ53uG4wh9pFMZhS1VnNhNAPiMn4ryKeBer9D",
  "key17": "5vPoCCUUxkCGnGBY4Ej6HtXiUrXbMnVhujGJ3JB6Rd9YrbdZHHSyxQJnLyPQBTiH6ZXvFGAYZcE1z1UoahiZJvco",
  "key18": "57SMyhEiVZPffPHiHTok649HPesNZhYqp6sEwLczvEV1AbdrVVB85oeMsgR2z5ahcgnBZQoV2P4yppMU6SDqfNgs",
  "key19": "4HhZrEfeVpW3dAEck2xDfE22cDQ89zNMGRoArmywtVFbok3WwF8Srnoe5JfVH7vpNFpPJMmrDZryi5zw9rn8vxtG",
  "key20": "uuCmSNcQLzbrsPyg5DoLhxy2iMUGSjryd5NELB5gXc8T9Q83P7CzHwvJwm63zYgEA3vwQVpA4R16FdSe1b1GWMH",
  "key21": "2LtaUcnFdzntqkHtZYmcrcua8w9ievATLFR5UmV73dxa1QXKbFtrQRrQJvY9EihYdanHyRgnbBmB5tS9sRGJ4dk4",
  "key22": "2w12kVApkKvCEhyjLEDDsCypymjrJSs9S4M9JGSYXUTvEDma8ujZcprFou7iU2D3FMFRYtkrGDR9V97eTKSsCKbk",
  "key23": "RezQ2WKgnaUatgwhTbYugKDNtgjFnFftuToYBP7aPthSLxBX4pLT5iBt7eEextTi7uTnDMn5VyKFGHjpvmhik8T",
  "key24": "4gN45HdLoTtS5nKPQMRpQEC8biUpZG5yGuvL7yDEePQqWJmU97YdoEQ2W9W9YgbKmaEtC6VQu9DE2HzugetiEfND",
  "key25": "4invmD3edfTBGSb5ucrBDyBMkg1pXMjoAmBDnoLrRz2BqxowJWQeK48hDu5tNhmCjMtk8iMLvo6WhTcDUX8K4fQV",
  "key26": "5WsgjZaoa962LSynoqbNiXKKHcgpmzumrQ5mJ9DPgByCW4Zk4qAkHZaRX9CTS8QUBp57PCHE1mmohbCthffvWbwB",
  "key27": "3vfbLrNgW83CrHfCo5gkj3ZJyc3E1fKSD3cLE8PP8RTue1MzYzq3dV2wNFsjabDsPz13LtLQFxg7auxq9tcLqtDr",
  "key28": "22JwBNekdDUv8NwMjcExpe1PUP2H8o7Abj6934LYjfKZuQDCBcdywJuqRE5TvUG2aAiC7JLYZmWxm8M4DJD6XL5r",
  "key29": "4J4jg6Afnf4HrGqScLvNyjgVYBibpBuU5nnAuwgT6NxbMVQ3cFwuCqVUyT5UY2r5RvHAaUimFwxo1TLj7oQNG99x",
  "key30": "acg1ymCFeLsW6F3FP6g6ijCnBpVbn7FSt45Q3BjDyrzfFLmvsi9Vju92zuovjQap6gjiTbdxzJ4n7UjxCE9FiS7",
  "key31": "369ZELkWzvnRTyRGQkSDp8tk5rnWRZPi6qwJjNxXaT1rS17CneUYWhpshvDUUKsTHh3qmcqXj4oQpTJyWWRZffft",
  "key32": "23TDuPfDVgVQtNnyA4TBuLkh7kwfkgZSThGMeojdxfRYS4jByXezteDE8tvr13wtXyNdKnuL8MXPRvV8PFWsRrp6",
  "key33": "3mbFm7L7qgHHegPDYhC2w2XsYvLihTdJRN53FFHaSy4T2d3TMtnrfK2CBJcqFktAk1BrQwBsLdN5xDiNBZmU8bHN",
  "key34": "4ZbgPADj6xLWcizATkzD68W6fcG9RQmhMNPnjp6SjpkrW2vBAthLSfSTuZGJ9ZEhjdTGPajwJGW2sfskWxMVrZ2k"
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
