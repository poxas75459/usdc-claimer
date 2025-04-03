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
    "SpmaMbKVPH3m159SmbRiCznYStaYQrmJcjAcomBXZuLpDVXCw8isS4LaRhnG3Uccv8KXb6FhBEBNZz9BLTaafdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45kpu7NwwZrzs5ifruxCKszunph59JE4kejNTq6JcXsad5wnekjU9a1cgqtMVRaakBh37hC1kcpLGy3xZBDykDek",
  "key1": "3Sd8XPEwD9ij4rvoyqcvymmzh3wMZMg7vADUUgmab5WQfV3QmJLHt3hMMCfjVGgcu7cwYYVjeajuF3fNqyjhW98x",
  "key2": "4yCWxeRb46y3mgA6a8vT4WSmY9hmmCqEbxKx3pESovBjPJCGd6J8DMQArJi9vdFoCvWPtfQReZp6sp7WgqrtoRZF",
  "key3": "38MKdxixNd67LhNQ362h9QKawSG7n5qyRp8rkNRHGH8FHyqtdKUgpPV65kqjWuJx3oQCbiZw7CnyxkUi2yPJADdj",
  "key4": "uUbC52XQRbVgcn4eYB88uet248mCe175wnfigAYFCe85mzJoDUPQhFmZbi87Gd9o9LitwVs8CSyjo2fyAaGe3vo",
  "key5": "4DdsEmCJof5VUmNusQ8AHeuceisstUjDGTRpPu9VctJW2ygb7ffd4ZZjXLUv7zwGh2jDUwhgFw4SdNz8J6cBSvxP",
  "key6": "4UFRMFp3LLEhfjNYbCD2BNEsuugmKUfWgcm5niDa1kLgS7JxPCbcFp3UFG5Rj2fNeLj2QQXGmAwt3Ns25khRJAVX",
  "key7": "4bPLxqGZM7Mhmu1AuAi4gEASdhYkcsXw7HTruhY81DuKkeNPsN9JPL7deLXZipQjocpUXHAPYePrD2EPqQqtWEGQ",
  "key8": "BG7PNWkaf8HaGFkdsmGfeFwM3V1fsfEzWHFnEYhJgS2W8rGurNkAWF4XtSsnzakosXc4DFuTZTU5sBinepKVqQE",
  "key9": "3tSeYpbbgbe1z46MfeAk3vgRzWz8XpyiGSGHf8B1M6mSJgsqSkcXyoaraQZVneMUds335rNfLSNga4qgrTWmvemh",
  "key10": "sgtFAcdvrbp2cvTDx38ZHAJuQceJmxjTDcFsmWxDPWPQQLuL4tQLAgJq72gJrg8CxofXm3bj5QrgxEAN5bT4Je4",
  "key11": "5X1JMME1YG4EfLxjMooz3Bcbb34FDXWRJqozKiAGBPGwfxiyZo7Lti92JLb5dSxcLntzKAMhwYnuMzeXZDrwhSXk",
  "key12": "341yYcHggb3g3SE1BDwDGzCHH6kbiVH3TKuYgsAW9Rthqy6NBiPkzh644ydMwBhhZ348oc8n6vHiYFbHGQXwx9CA",
  "key13": "4s87joQAio9VetE7VHKDoMMXC4pPpuboQMgvJ533XR2xAdWfgPjGVwYrZuShQ6Ao41uin2bnxsZnTciUjLbFYyvC",
  "key14": "2kzDmjmK9q4Jwv7MRajfGqB1kJYHH46ZDQWCuhECTK12UiGLf97A5mDh2gRKvtVTGwuSEpELhQhQMNid3Ud8t9Ke",
  "key15": "24A1SS7UzfYWUF2fAnovhxefcmUc4XuDkEE2JFFkCf3qPGXCaKyiH5Tektn3cFMVguXrbnXeZsgk8WVYnnPs4Yxj",
  "key16": "5mDiAz7vPpMBfPi4n3x8HTQkNAwKDZ6wT9ywbakMtZDcvtxLeVGPYDFvNoYwp8vxZdGKwXtZ2UbqopQg6VfKWjvs",
  "key17": "2jJ58nGApPzgoYzhM1dDKYm7UecqFKx5st2puYuCvBsXwUVREqeGgiP4nNLnKfAsrA3wKa1UfqmMeiBP4cSPtvWE",
  "key18": "uvvNNvDDFBTJ3mP2vDtzr2dYEnNDmsABRJ9HwBfgKxv8m8TRDgw4bw1Je815KFoBBxASZ5YZarawr2BjSZAt3nj",
  "key19": "2JQjxAETFjyPBS2VHSCNvJ8Fi9kXEuAvwChZHVDTwchiQpcMFZf2QhGdoR5KiQGpb9GdP46gKLJLkzyLj1kzJ5m8",
  "key20": "5yDSp2aiKpDux4MipqogrgAgUbnFE9risdZoY6FmCALB44htXv5orrN4MmDteAuiV4oc6nw1df896Xj6PyKvcBR4",
  "key21": "5VQNNZFbiGxWh2b1BvxeyCCh5qiFYwxrQ52rivKQb8torpQ1qVAM9rwU7djCkC8HZ9AFTRNAFZVSkmKFPy1c1Qo2",
  "key22": "5nJQ3ryqdnhRqQSUuUHnaR2iMQhDbb3tT2KN8NRCSt4TXVcUSJKbZvJZCritmF7GP5C6uZuc2Hbb7BGXjyMJ8FRK",
  "key23": "3m5B12hkYvatK2g5LNL6Li3JqvdqcjQGaJ3QEBw92ExSaQeAo5KNyRWguzzPaiWowKiNbHheWa5NL8Eokqzm3kex",
  "key24": "3oRFvJeB52nBaiPp8LYg5Rd3kSNtogJtj544ZduHzvfcUDFcu7gfSXt4urb3EPaMYX6Xp98opan2JKDLp4PisLmo",
  "key25": "5dJmaUGrEp3D9VnGGyq6ktAqcdV3W1BSWTwVaxt2jnSnCJGjVStrsJgut4md6Za9CyGLGWieWs47egh6KXVHxfrg",
  "key26": "5evPxrEzg1WJpepD9vXnvAv9ps3Cj7376638Q4aPGs1dHmGypV1Yn7iezVD1wMVdEwUqvBGTqvS9zrj7y7a5j9We",
  "key27": "3aZaGXQfZZXTt7ZPHGPu9WPkbiBQWRRRRTNMuQ1HLNbBQMP41BX9ByAjeyoG71qKBBgpUkQ6JTwxpQnLR6pUP8ht",
  "key28": "Ne3ZbFUBBkNBVEVkSdxqPGevdgqTmJDHPWyBSGvdZ5RM9xMWRc286mEqauxxoLFxbKDpuwJX4VxtMYXZMDgAAtZ",
  "key29": "59kS2ExJNJq5m9eXcYMYyHpJoiXznsbheRr3bGU7Pg7YUthenbeGnE9krQvGXhoZayGjWRWuGf65B7aS6YEM7ReU",
  "key30": "45NRWyZD41mpP28PrgxWHNb63QdyrRXKSykgByuWa7FujJ973kicRr7fR34Pan81oFfWeGGWkvnTnsJGfx2fNf6u",
  "key31": "5hEPohGUVrAHtNsWWafQT6RxbTL7d9iKzypFfnAgkP291YXu2TEJg9niSxubTKNNvptf3sCFwbzU5rH799MzwX8A",
  "key32": "fLe1wyYqJrnGYh6JX1kzAxgEfXZgyJY4AMS3Q1WFfJGhfJjbhBpkfTgv6ovoN1c3vL9Ku1LVkAXMwm3q6uWWKVa",
  "key33": "4haWg7W2ftAn9bH3T2kpp3qYbRCzCxSfCpnUEKHiT7WwjWvzqkcg1CQhirGX4KE7EXD8YW2t4aikozyrMPSMbsHn",
  "key34": "2VAMx8U6RSTURTNyEbsMD6DUSR8AFs497x2kKaBYRYPYfNjvtYPyqH5CKRkjWQvpn9ELKCEVic1WWVpY7YJu9qJZ"
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
