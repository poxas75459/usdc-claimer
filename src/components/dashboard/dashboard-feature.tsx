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
    "5viycxVXokVESBRnP5BnBBw6F1sknPzgNN9fFbkM96eTLEUP3WZofMGBatiRjK1p8P2S1qqi6EeRXrJqBFEg2oCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jb7EtFQpz2pjt3KZUc15zj22eK3jGoNK7w2yxiv9rW2YLzWVefU4aUtyu9GsbNbQ4HJduLCcZ9pHDtp9CZ1VCa",
  "key1": "5yAMZSnTiDTiZEaMbA9vNYn7uFbuRDEwFjFobQxs76CLUceuPa5GVY8UJuZxbb91VCMksmFXbrkARvnx2TNrkghR",
  "key2": "2fNrqiqCNRyywEUr9oMA6dXwUr7iQJLujZ577E9gZbvbt57R8T27yFavxaebiJysUzhuiYeEJsiGaRRL613pskrH",
  "key3": "qisijWzwb9PqKTTCWALkyVgmgrhXaSUEkKdBtaEVD3ZboE9XpcYA6id1L4CgT2RZ6QZxJmkkfb1RADvZezkTxAX",
  "key4": "mzPFFsG2ydpuZYWNPxgGSaWodqgbKuyG21KfBMnC6eQ8rMxgACCznPGwFNHrGjAhmaak9qXXZjYwNUsEzLK5pfo",
  "key5": "5FuV6LXuxRsqfSNedKx82j6nw9fNnhrjAvyRtv2vNaPNk2BqVYD3iuJimz1oLt2y5Etw4KwTDJ9yu37hVjXGkTp9",
  "key6": "5Mf74NTq4NtonLz6X3asQgnXgnGmTFd2uK43KTHg4ujnmwoQmhgbK2PZ8a46X9yYDreTb1YD97TnARuJg5Q7jSn",
  "key7": "5HbXwN7LeE3xgd8LfBHoqnnx7tu6zUvi8FhX9Rij4AQGxEezSD2uLcdaxzXwKiKDmJUngxt3tAYVMPT3F7mNVGoK",
  "key8": "3JaxJdoxe7RZghNGpK1LasRgAt2xBD772ofjhkPfyb7es55Uo8HbMK2eWeVfA4Zg51myXHsJvagi7TCTVGmQCm4T",
  "key9": "xwLTnPPQZCuwCo7MjTM1DzYcqLPVd7R6542uPXW9B4KYz6xeLtW9Jihk9wRWpAnebasjrco6SLqEtPquLmD28YC",
  "key10": "5fbKQ2dkenGiMkLNe9vj5Awyz5g8M7b67TbySymeRNaPLAiKvJY2pwpE7AtpYqkFGJj6nD1nViNvtMDD6rsSaGEJ",
  "key11": "2LcDdu3eaSTGeXEozBx6uepcT3e9p47NtMsmjwZkpvS5TEv5gwD4xHqfvVYriQoXmaSYtZXU3WDGPWMADyUgutKK",
  "key12": "67gH2G51xkvkoiYzYchjvRqREkkMbqWZASofany6mZwFpHAbeRSaeStAfoAr1KFE4A1qwRFoR7gRRdXYCxh4FL5D",
  "key13": "3DuW1hCgwXPQErVbQYLdwuBNfYxbMnANWgzGufTBdEgcxqVsQ3PWoqTtjuSenBRhbFrtzT67VvKVshMpkbxM3vGv",
  "key14": "qKNLKb7bz2oMQB4piQSNGBSaNMCEgBwEDpsq1jueEvZJaVEpWYFw2NMWhTe5wJauFNqJ5pCQKK2YjujBaqmLgAL",
  "key15": "5vBRa9uU14Z21EhsPtLGdW4uBdrazpa9v4cj95tfX9oZmGVKM2xwozzTL2f6mVFPVTChz73aHnQ4WGa7e3X2mJU1",
  "key16": "2WHPei1EPuPYmFWCTnUkzqBFnD8hFsfp6NoGeiJydVc1pGJaU6xbetqcQk5dv8xG4LsTQ9Ahqt4nJk3QSMoA3v6z",
  "key17": "Cbkn5QPCgvUFQf7yAd4WdXFRVBprYSnW5KPHtcApuJsVZtAP1QQ9syiBsz8z2MKLB43cAAs6kyrwjdSesUxsKvb",
  "key18": "41mnAmTJFbYBdMBFMVvgXe2tXFHv9J4LgP1tesgg2TX4oZ5yet3JKhczvZvFs4VPeRdLyKn6P7YB3tXJX9SeLjw3",
  "key19": "5La5nWR2UBGo89qjUNnug6dwkXCX7ByRSTGKUnAkNNt34qVXxkoq1v1PgS9CQaENgcadraBMi9vbp5SqRQ2Jsm9",
  "key20": "Jb33dRCFKPDcHvuncazP4AygnwUUprzXAgRLfsWeuWZ3VRS2CzcqYfaAAYwUbG5FJnXHC9N4jUKGfPnzibCxzum",
  "key21": "2SrAB6669D8t7vKtKRPSXC4iJrTqEf8LtSG3K99u3fqnTAtAqWW8m4VGmQoYUphqZJvus7RtFooqExg8f8KMXUB2",
  "key22": "LeTw9NBc2gfUYGtEiTaaqnygW94dGznxmgnebM4aoE2239N9CjoKCgutPfMe3aLbJbSUa5eJDaXYLk282uYLGwU",
  "key23": "2tGApnSb7RWqcnF4PAQccqhuwvVf4gGvN2Wt9MW188R5wiHtePfEyhnbwiHRejXTq1vqyqkTdmwJ3uBDXrykZd5r",
  "key24": "2jPDHnwJE6RWbpPS8xb2ckJdRMKczmNtVwzDUxBnQCabPqo9TnArotG6s7Wee7ArZwV1ujMYhMARoC5M5rQctjtW",
  "key25": "2PFBmYX8zRWgi4oftsi93RMZuZXqiC54RvWKUxCRXSWarUQ3KwF43RADVHQkbrqNk2X9i1zKsdW53NwGCeiBwnEu",
  "key26": "24YLiL8siBNpaSCFtTQ2vXwymbsNNTUwBA8MvWjMs4m2q6GBdKFw8RjbV1fzJVPBAFkXhRVx9VeXv447YRdqN25k"
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
