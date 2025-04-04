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
    "ZfT34M8LYN1hPL5FuA87oHLfiXNJRJSBYqBbAJUGhewdCu5KLRJNnzb19GLEVx58JrMKzSefHHaRFkq66qyCGxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kjUrv4C1XjY8AnfJFS95HWL77Qn85yqRFy2x5UkQgdbuYFQu2mUQFADcgBwLjKoRVyPHrdQH16yvFYB5EUQ3PBQ",
  "key1": "4UAjVvA8HMZcxPXgLYHHXZmbqv38KbTYJ66DJDKAVkgQJYMW4WxyVi4JCoGM1SZS3ii6XnTTmo226NSoYLZ4p4EL",
  "key2": "3Gw2qkJ3jofdLZDdZVSZxgVXgWbEx6Vtt6VUA9vUR7eEmiZjd2iyQGvGGhqFpTHfjqRMLaqYpSaNGL8YLnpZMFQB",
  "key3": "2TCEE6fGvRTfA3KqQXTqBZnaQTnqphiLU47RuBsiQWhndnDXYqvgkLfcRmag22n1s5gkDJ3ZWBRSWW2pDk2H4eN5",
  "key4": "3dgSenhjoETC8YEBQeoTmWJXDsntedXPG7KtpUMH8qNkeqgp1Yh2GvWCuV5t6QaGCV4WJB73cpv68uDNF7GK4wik",
  "key5": "5z5frEvQZX2ushNoiaZLLwGQK1J6MxKgXS5Nvjqh6SGkPd5czmoRF7vEB5KLyJZG7JNaceiMwWQC5GBXN9XZoaoU",
  "key6": "KhZxo8FWfvpCg7G1jdQj6qFjZSiBF1cGYHPkwH8oaZjc9SHU4FzdLy9HvmkLJnC5M7zAMVfL64162Y2cn9WVNYH",
  "key7": "VLmNhyuEnMbrJxRoE9J275nPC4zz3ekDsvbqwtiSFouJ12bkvpHbpukyBB2UKJtUcwGn3fwTs2a74KqK76mckY2",
  "key8": "569b3vfWNm26tbyke1V3vKveatrc6tXe9iRrqrqCdD26U3AbhAcB3jcK7SM2DEpET8Sdm6G1jreq315NkvG9XEKW",
  "key9": "28XYoDvzNPzsjcPXL3uocnvYVXhKB5jxRyJzU8MukfcrE84BKJNarMpGJrXC7t7nbAAf2FTjoEVZpoaZHoxf9TF3",
  "key10": "2n8pTq6qV7dfw6XtZm5fCSdXU54X7391VceApoXJLjW5bYknTGHbByaDNufQiCKTPykS13u4XtNP5F9u8pLCmEtb",
  "key11": "4uy3s4Gxu6TLCyuLWxpTfFFNDAZ7s4jqtLSLf6KZEUeEPZy5NB1wm9oPc52bFGGp9igMBfWh1nNcLRJ54UiSpoHx",
  "key12": "9B5wSDTzqdihdMwZKtybnCudvGsYVJsrk6hLfKngy4aX2tY5pnmLMyS774GhFawkvmngJSAUBvrkUPM3FWgSAuH",
  "key13": "5mb8P7igC5kYSZYKGTPckwW3CVAosxAD5RfsYayBaXUVWCxZNgkcPQWLzYYHxaEYoyuQd1P7RSvjj2XeaKDMuCM1",
  "key14": "2Hon7iyw3HoPYCAuYP2BrjiJUak65fEqDEH3LvGF5uQ7fFggT3RH2a6HsfpwezcMbqZ2w5gTbxD5ZC65zf9taFdR",
  "key15": "124NhYxcG9cDuCFvPiJJpf6wivgxabNrP5NiFhSjnbxBtjDo1vid8GTSfR5N3hHxduFkxrJWPCyHYXBkbLvscdHB",
  "key16": "2VtwAB9fraqDQAZAsRi1bZrwhGuwY2ab19X7NjEnbobcsYm3xUVtdco4DYPNUFemccEVfvAwuTkp1iJUR2HiJuFi",
  "key17": "3Rbm7CMfGTPMwbV3HBDd2rgRwHh1QUq9EBoQhthj4NSeJ4peQqjuUpBEKX7JStBb4YZccWJC1wWwyYeYdicqpg9h",
  "key18": "4h6ZQbSe1iupWiqPHecopGnFfN1Rjne1vEtyu1KfMfu92um8UYpfyoe6XEwDby1gfw63Q86emyDAX1MFVhSLmDqw",
  "key19": "ADRUiYdifdfEQpWcZLCyHAqHHHJXLtZDH3EF4vTEPWC7kez5xjsM1kMjEKDjRYS6KuSgxjkhiZeJ76557hRrtzY",
  "key20": "2kPTfVPnWrVjPf8nyFDs3Uxw5J6nSzYgS5xMf19A8fHHSCL82ig6n14cwMLYG77bfi7fiDVQrmCAJATQZ4LGGNmW",
  "key21": "4FHV3Rjiwgq4hiYWCHrfCH4LP8MK2vhzvbLTMP1GZAkfVdB8S3E2xsN2cjXUJ1WvcUXFj2Xa7eZkiXLrtooZzBuo",
  "key22": "57dPkh9cC7Ts97ppyT2Q5WXGK7VPgUHHYQACesdVPPgBxVi9eeh8YKPhHAN5CAB4ZMhFsNqNovdDQ2gkRqUvh5q8",
  "key23": "5BEzFF8B2v8KuKd5qJEdLNMSArsrtKHtxPFmNAB83zWUSeECi2SHE4A7RHLRPiEaHYtm6hdCyzM1mCaptDddeAyA",
  "key24": "42oxKoYr32utzM3oqUsubp9uqYRgAneMJDhP2Jc4eWwuQKfPSrhfYqzPfGfUQuUabWi9aHnZKuteBiPGd6ojjCg1",
  "key25": "C9JoZpXr5eARSgEQLUFBiiQUHCyrBgbRL8ox5RVGue7mAXVCRofeaSoGxXQoG4iXcHgTWMjMpEimiRb687h3J75",
  "key26": "482Pyt431YiYsk1eZ88zZt2apyqy2mR37g7VoKqCMmKPVpwjccwYo7Joy6WgksxhQkpqfKTjCfZkXaJA4BHX8MFr",
  "key27": "GqLNXhJ8mWbPpo97zJQHn2GsbjWY4PAe9rWhbjFCrBeRC8E2dv2HGBHjuuyEmXhDdRR1coYGrAm3itYR9arRj8g",
  "key28": "XET7FHhxyQGrfzua28DWfhXAnvAL7rB53gUHmD8iWU4YJu5EW4jAqeB3Er7kUHpe2HFSFrF8Zs1P46EcPZAPAtW",
  "key29": "4euCuVEEPfQ8bXkvC9Pgtusrjz6QJeLF6Zh5VjohZBKqv25yeamXpUM7oHhMu3TRYkEbHYVFyrB7m9S5tgJqjiJ5",
  "key30": "4Hpc842kHCe1BoAyfXSc3NqNSqZExk6StWFkVmciusAd7RbfTnhtf61MrUijELV26Cz1zZTFcbjC9onrvQsaRsfA",
  "key31": "cTeafsq5b5HbR9JV1mq4WWsd6dWaJmJCBNGv3eNhJYTDPjUQ1QHCrgW7PCdNH5DxpiGB7XUqKPqbkHxCNXPt8vs",
  "key32": "43zYmRuM3SabWShSVGRVbWENiSghUR1XjcCnf3zPjuBYftzJHZhbPGF6YhWB6KnkYstzm8VGizEbDDfhAwmVuiKW",
  "key33": "mSYuT4hv1vAoqDkPuVU1Vmqk8bfRbnm87qNyxbAuoaoU8tYkbYgkvhEkdaN4iM62g8vUvQGX63rBM4BvnskYApU",
  "key34": "3oBgGVeiPiqs5tCWT6mRKKqWpHgfX46YQfcKjvgXFhZYCPCfvbRRfByiXRD6sNK8C6vD9i5oDA4ZFxK1TJ7Gn5To",
  "key35": "3puHEhD4gpuiAFzySVMHB3N4FTPh39GV8V3P7GdRBVhikRAYfzEAH8JGGrDHS7RDFpCL2qmqoGi7gdjxF6FGm6zK",
  "key36": "63DPxwhRuVRznGZyM1j4ULfpDCSFbPtjFHkZwAAs2cZtEdRF5TopWwEQCar7Tm9HRXxExvidpYfddVPRiwTzy6nG"
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
