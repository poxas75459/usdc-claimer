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
    "hmXA3jqBYRRtoPbEDGGpvt9GDjvBuRXovtPYbNMWa7WjqiwS1aG35rGsojc3mCbCc6Z6gL7ZvduafXZ51nXPP6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HmtYT9vcr1jExkskiXa649sZjqSobJxAviHW3U2tJRpxACqyyGTRQ79ammmgZm72pBETvVhAF6SJEDFpN3FofeX",
  "key1": "5eVNvBhn8TVVqEN3egJv9FpZ9w6Rbf3cEBV2rDrazZR2Hr1TC1rGoHiUY6iyNMQjDmfupdSfRJZg72nbbEkN8L4z",
  "key2": "5ihm221uTGCTC8fscGCqd3JeKX1YetGsRgyJcifecSdEJ9Z7uYKojpNXVdGCzv16nZ8mrj9U2F6QFWdz8uUyLyVM",
  "key3": "2V5j8E3Szkv3NidHv3AwfvDgFmS6KDossZBd6rSwFmUE3dyKYm2rAvWr5X22bTqK6PSc8D3nZpb2go5DrPpd7KmQ",
  "key4": "5CyJHxasAPwtihzeLvHWgvYo5VdMuivwhfwEyjZxEQ9eJ8mZHQ8AAJrSpCf3TTdUy3EwWLBdG3rfetPsv4jybFXL",
  "key5": "5ZTGX2CnwVpc5tUq8xvuDpsd9LwXdnYEKH9cw2ZeMPhJeJhD2zCPczPapKyaLNpbGGvf9Bxg6AH7QFVFA1DEQU6C",
  "key6": "VYvv6fKupktXnbqwb5JfdQfXvRGJ3wvLdSAaaKWgvtBpm1p7ksc7tKkVDGSxfh9X7mcFnB5yR2rRKYh1eAGBnmX",
  "key7": "48QLPbJuYWygYHqUv6CcQkitJkWkFPVvBsXCGn28scWeyreg61Qkh5XvC7ZvkNe95JwzSTTEG62g9Gf1V4fv4DEW",
  "key8": "2fwUURTtSspo8363yuzWmX8yXDN1SkBZfL7ajC6YsQHG75okfU63hGNCoCF1ZkzHLaK25G3yomb5KSNZAxWSUUxK",
  "key9": "4G3MeUEwmrKWstMcSin5RCHrbGSxCNjbr4Kpb4qycDeaNM1j345vf4xv5bHfDwDEQ3sj376ujxo4PDGaxR2Ah9K2",
  "key10": "g4cwXBarfd92AMtWCZozihrGivKmUVNVnzRwYHjrRJPLcV8mPpVCbKoQYkgnUAnCWfwm38pdJzqTavVqz1mPG4Z",
  "key11": "4rFsho4SZKETMPDjP41V8AErp1UN5mB5v3gBtMdSzKyjUoAV46BuMEHrgvH8MhjMK9BHuoxAEg732cHvPq1cJ26d",
  "key12": "3EEBbAm3TVHKdAowXmwKBaWP9RSQH4tbZpPyPWgUNC9fqkkH6fafqYxpR9JNixr733b8A4i13BDQyEq8PsK4zEUZ",
  "key13": "3ibmBmo5PuFbJXQrKyLdPfdwm8yR9D1tfSm4TLTvqwgzNwJvvr5NzjnKFnWigkY7LoQ1Ay4GgAkKPUbmpZdB6pYq",
  "key14": "5NfB5uzVdEdTFwBaWg1zUWL1HkzSCRTLxMmpxUsVGphLcRzQqEB2rkfdsnZ5NoLvLnEr6p76RD77kQ5i3hxeuTfG",
  "key15": "cr1EFa8fECDc5gcvTmFNtonMTLunG8s5rABYGBZphnMihnrVDtwykPYr1DUtmGRuCbKZh5fqeyKEHUcoi8mLojc",
  "key16": "2RoUszum5Bvcn8hw2L8M6wVsYefQuw5ZVsvnm1ZF1u1RYPvuo2vBk7PcbxxyzAyCxVJ7BPHTLimp7kYsSm1Y2xCq",
  "key17": "5mdod4kEV82F8H5FBAn5YE7MJxYb5DGc7ngiZbhSA65biJhY3cW6j7mDTjMhgHc1zXQciK2ydp6ay5MNWvWoDk4V",
  "key18": "27nDMnoDRKPQvixnqtcwrkGSFSFCQYjDTV9NkJEtS8EpiBhJkJqpqzdJ97KcMrDe53RePNX99xKz3p4Pw2d45fyR",
  "key19": "4g9xEAChyy4JF9P4DrguJGDieZyr8N3JuQuxUn2MfqjiJtCBCJuHELgJMa2pJkbKhoYp6isvWP4CGyLZQiQLjroK",
  "key20": "395qr1Gcw4kMxJnR9JjzE1Bf7E44kjiYa3iUCFbtsqZYheEeks5dJmFiH9RMJ4Dv1tsxvnFYXMJfXUpdGQsBsx8U",
  "key21": "2LA2g8Ke3Lkv3kwPuR15ut4Ce43po7ipvUdK8PScAq6NUZpVxZvXuGExoDzhbPzpwEQedP794tWw11Xdu5NBKQEW",
  "key22": "5cwSdyMxoTXuuZuMF1JHmrfgeg3mrppgP4pLpHDP2p3jz9ByEi9g6msJa9ECuA6Bamb9vhMrvmQAX8nLidL7cu6Q",
  "key23": "5BTKPkugSTqagJptkDGnPaW2DNRznMrFWBMymrqwULoaEUCEYTxEJJcxxbAvH46XpG6TdwKkkkWGsFRSoTcjyZgP",
  "key24": "QhG2xGEmYDzxLPjZNgFCjo8aB1xAMaK2F2ZSNgeBbN1g8gb4QcFG6XmhDmEwrXAkn8Fvr9qFB4KDvSt58y8V1jb",
  "key25": "4ZCJdcvezLVhvk1TWpXfcveHDMuDBTAgEZMtbXVUx5ccxsLB2CFKruhE2GL9aCRTopKvBg5uZLTS77odDEqtbUFG",
  "key26": "3ynigRUpttxyXKimVRa8SJ3KgNd53YZmCxEZe9Ebqy3U7afAksmPujfGU7dgvJfuGyL55BGZGMAyTcaFQiquA1Cw",
  "key27": "5T8jwMjtoPZFURpb98JJHM2rDYFiHLJdgSNBTc9WVza5Q7MUGXJd3DBxXW5Ao15Ax3zJuuVTK1sRtE8FhezJr4UB",
  "key28": "ZVMYcgdJbqwVYc8q5xrtz9MfvbtQszoWoeJzsg1xtPAAXeaxWhBWrLY8MFKe5bRvbQHG2LXfgQytZQdX9og1dHu",
  "key29": "35Bt627yqcLtTpyLj1FVb8ficxtkg9tdoBQa3SHyFK5eJynY95qT494L5uF1vyHZ6QGEzBoMHgCwyAp4U2kU5ucf",
  "key30": "4sa2fBqanaR7cV93UPDj4jq3rRNLQtYzRYyKMVtzefuBqBk2P7LXu5PzPmWUDxUyFXYLW1oeLVNHNjP92YK2AnpD",
  "key31": "5VUoH2afPpEd1i1bNedg6KRBeLpi7CEZAx9hcsdUoB8JNPFdVd3G66DCdBECKrw5XTuQdpYq6ivuhnVNuW4251F8",
  "key32": "2ZHbimiQ4LmLPmWqGX8PfQcLjuh4RT1HUoFqmfz52aKkEmqDFg9CCH3sz5fb1XTZtKQMbof92obWN8Fao2Ni8Mq7",
  "key33": "3nPdF9QbTxDgF7ECAVYwi2XDENW5P7nHaM4pXYPsW8qMfQmR4nhADh682HzsYoeCQi7segz496YAp3V2yJAEmpd2",
  "key34": "3SCrZJjZmBWwa3Agk3uFd1d14uP2Zfewv3N4TURZhAfhoGEGjnGT9QDt6TgJnQzrHQ3qdSDFZkTcGu98P82x7imq",
  "key35": "4qQnkieVkVVbDsbxLaCHTVWihjwxMp8Dh57ePPRHZ1pynEPdKGTDVLjjmGo7oaK8EtUdH4HE2vr5LERQmDwjBVi8",
  "key36": "3EkX7B8Gv7cKiGzW4EgoAmBq4QbUcPnLNzK6M63pfpcX235Cx1UUDjFEHKmmsVL723q8ofVGmLnk8S5F3FQCAkWt",
  "key37": "5QeTqNMj59icSwo1QHc15e6wFo3zrhBhnmKtdhZTxHJGoiGyLeSP6KsyPboRw1Uf9vToWHcCg3mxQoqgRjFHEHHr",
  "key38": "2k47X6ZJnAJmvRbxbVLj1GaPK4xgB7x4J3CPzJEcLiwsdmT7EFcXgCqoHz4ycbjgkxWFpv7VdYsLnCDB1z4CuHgs",
  "key39": "5jhpTAQLNPTx4DTurJw328R8uJMTZkDrh385kiubiW9X7FtELDz2d5VqQWHeErZ1BouGgWFtMchwpxcjZQpY5ZZy",
  "key40": "2tVmami6W5X6qwHE2GgdqPwkA2rSY7e2qZgE4aQYWMdDxufk12Ln7od3fwfnjDiJnVhyPbZMn8pUV6mjS8jxyvoJ",
  "key41": "4LaMFkQuX8wERnCgZ9CDqAnV3TYqVwzJnRHzBypGyJuu12nG8nFLYDuWfto9Y9cTMHzS9YUfZREGtShMCefuYk4T",
  "key42": "5GEHnpiC5qu8muXguRzaWHUTCuTN2PQESPHRUJBHoFwLjTX7ttA7DSEFDy8z1vNPwT83o6p2pFYnbpkbA1Ft4Sgy",
  "key43": "5MTvdGb7dZAPJNVvLbpYWAsFva6tZu8PFSbZW6k1bk9PPej18t8hEBUMqHWuo4UGqXnsrSvoWxRbUy9f6nTYNxzo",
  "key44": "5WM9GFL8gwNMg9ShDZyTvQqSZvTiytqoxY165MCWXoDk9iNpLnXZXktGYJ51JDELSbWrpZp8VG3HZjPi4X4cqaiU",
  "key45": "5AqmfsQP6qzkrtyBXiPnaF9qZe3RTmyLhjKw6hJta4m4Av1sxpt58tZ3jFoatKU6oUpkL6bEWGdFZkdZpLEKAyh3"
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
