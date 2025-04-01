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
    "3cna2VwDhhdX6CHKtYSTCNVUnarBxhcU2id1Za9BVLQJFRks4U5HHdcJrZcucUnvpBSVLNVtYQTec3sJZS52wT18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VP6gkgCPanhNnuTP1rz7oqstnBTtU72wvWEqEYgR6uWjLmy12cMVXiJVhXd7cQrWvyawx6tfX2kkZHtLFbSQWqu",
  "key1": "29iWo15vJDRgqqV1waR4pTwwDoixLUFhfteGUXagGuWPGV29PyAYXSR7aPGVyZBLfCU6N5VoWgbAAYtmzLKCRdrB",
  "key2": "5GfkFYtgNPJ1wMNv6rcC5RNAdEyN444ge7Zxqsp8nYsH1n7Zd54rdXMVGPQhAkrpMCvxQ6mVTVckBTGzLFPw7Dx7",
  "key3": "4uXNjyJY6EB9cdSYQiUw1f5xh2byY8SQuKsW1hyXARdv2oGsWY1o7RwGn1c8PTANiAzCLKpyr72zNbMYhdvHvm8d",
  "key4": "4HZ7KUchvZmVe3LQnv1WRjEA2dxi2GXrpTDPwe5LeqYxQSsZyQhx4Q92FAqikYxY3878H2MKnsumzde5AFXBfyoK",
  "key5": "5WjaAB52QbjPPggTFvWTWXYbj7SgnWFr23NgXdwfaHFmYMiCzroj8v4x6mcsGAbGpKBXxRFWmf84awVrm3RWad7q",
  "key6": "57URTN5PzNDPUgM6SAfRbsZdWp5UEAt7PpRg1k8ZaxeFq1vWg2eHgHSTJtyaimEG5P3u5rLsvMeM6bqfCT3CL22n",
  "key7": "23MMpG8NYLzfB6crG2uEnAbUsk3iJdNsjs6HGA3bpGeR7NjsfbEqZizcsg8ZPs1pmkWEDp8hqNnPjrCRB6bLfMAM",
  "key8": "44EHujiq8kbo8omerbp64Y7otMyfqaLtkpu3G1qFXgZqM3HxNYzsRqFkFd9mBJFzLLbuCPVjXTSC735QYzPh3SyK",
  "key9": "4pGKHZmTCj7qs9YYbP6JB7F9joCLMYoUpk4PbcvKi3UvkbjJ6LbjJyVL9YPHRhzsAMtirDDXPvCdNxKSapEG6BXK",
  "key10": "2UKLZbWMUa1EGFBgYKfDnCwh8w5ZHMBqMfQMnaw3UmVsQEuXfcPoLTNnWyow8r2af2jABk2s9Qi9Y3TFwMucbypS",
  "key11": "56bdyGtjKP2itF7NLZc27uEHBX3ycteTb2Uwot59MFdtsHKVte9TaiQitdv5W5EXfBz1xBdy8vvDyXWK11Kviy3i",
  "key12": "2fwNdxmhkeDNvQZKQieg9zsTdQ5B4jzVydgqMSWmzCmLwEaXsum9s7oZiRwxHCr3GUT5iAMfZUwhjWobGiBzM6Nj",
  "key13": "4FCYdjPqRrMJRY8Hy6Hx1nhGgJ2oRft5nQ7p7ChwSBxEcR2Ci4BEpdn2rG9a5iWKfQRZzB2TjX9CFSj91KMAjCoK",
  "key14": "ub4ZwjcNiPVWTHCphX9gPAX8yzrnjXVXfFgdAbgo7Af8d7e4zRZk3Hi5AYV2bGqpSCbijnfdNwBdpgt2SLLdpM9",
  "key15": "46aD1zq7UZ1BKYtE4w4eCArwCSKzPfPJ7i4f3qAFrt1Lmoz2fwja7yVSzBJAe9ihXuap9hspvoFs3o2caBmvqZA5",
  "key16": "5Z9KTYX44y2BWrbdMUHwWbxFTvX2T8tqK2R89jLJiVQmCkMgaXmYXNrydApXyRRxoRcdd5HPj7apRxcnH9q172Uf",
  "key17": "658D8GjaYi5mrqUahCdGR7MbyoD7syAWMGaZfRWbF6QoXz8sqS5Tzikui9XBLdHMMeP6h3DN8xy9SGjw4DBUNN3a",
  "key18": "3cRbej2Jgnie6HKrKLjWvqR9af2g7U7HHxnXPnGxz6hyCK56cnqSWEbP7ge1EfanAJnjCdy7yNybzMaZBqXFL8eD",
  "key19": "2LjFR6SXxvvj42oikyj5aSqsoVSQqwSHMjG3RqEMXbvxTVYi2SWcBH74tovGSAajNyme969gpYKnjtH31rrdiZZX",
  "key20": "5T26fm8wVyhTeX1qusXhRVDbaM8m54zpPMM7RBPuLvCtsLA9TQYo4kkAUscNKcxRQcn3KxtMJVTzsKja25qUpZoR",
  "key21": "2BGwsTeLUgC8L7b9cGHworyt1LQxfWZ5BNWX8ASr3NBojMZkzj3R6GRNYSjJouYQwkCs4PCtv21qsq9s8bGEpsfQ",
  "key22": "2FWRTCbWR4zpYfb7751wv9qbiGn76qNxg9gR1Drhme4JLMQceB7k2PmfnJB8PukUkXCnXWdAcNLuqjM7wR4nRmwN",
  "key23": "2wVWwjsp8jCyUiRqhKpjxSwMP348zgiRKouUjnxgCKcoed5PnMLWLNPfxTX6E1jjhSQrdkmpLdgymxhVoGJYTdPL",
  "key24": "4Mq5B5E3cgDTgn8VBkiifjLrtsevnLSuTM3H79zL22meUmEBXLWG77dxq8sahXEfifhZ4cxs9CHyCL9FV7jYVrrH",
  "key25": "2bxZr7hufeB21VnFjL67ps2MCwkPvmnPrhuEpek9dFvL22bJPnJsR9WQL3hJNdffB2DVaAKUmdccKZo3vViCrMpC",
  "key26": "FnYra7vCAVqHiimepbqdvKqfwg12AumoYugAxMU7egfphGajkdBfPxonsVtJXQuPSdUoHdeVK8FDV9NaaF6mzpr",
  "key27": "3YfK73XcWyyksiLtbGMLUNzhAghitA7vU54ffCuKGvFQxZbZPSFeiEAHCVPwA4vVpfP6q1M5aXe7eQdRF5NW3nqP",
  "key28": "3vYR8W8bdbDA1eQN9E9eGh7wrfVCPCWMR1gyH4u6NRjcviJuUGiJXH7728X6ninxJjenZir8JMQTvjQDmt7Za7n",
  "key29": "2Se9vdKVpss3hruWe7CMRhB8sPvg1K3LqVTMhoa9biGqmCcte4GtiadF5g7fAMu6rLGuYNkUq8CZXecMuMbSqkem",
  "key30": "4Ef1hAhh8Wyk5ts8XyM7fQtq43KJFXj1gj31iF64MHG5b5maUUSDo2jddt9soZsub4MGuhKRqHuVnqMEfiQQXUiC",
  "key31": "4wXb6uQ3PmnNXyJ4LkcY9DLrndRFkbsBGNFm2Fp1BkB1aAVu3yeCGZC69P379p4hWk749c4wWkG12fMXfsJUsP5T",
  "key32": "2vXjFYnQn8eMbDF1c7Jwtd9gHZTUboYiz7P7Moz2RiqKmjBKHH4mJkfb6ASUR8uSR4qowCLrHHvfA5seCRBWuypC",
  "key33": "3GqZSdrL2WRsZPkAsP1RghFqzxXsNARqdQmDVcqLR1En1T7ExTQAYW7AGPEprwWborgToBL7Dpzt21B9weDoWjJx",
  "key34": "2QfsTjJzRg14Ctvpeh5CeACzSHV3FQSCckpXVow1iMB55pb3q4Gspx1HhBJby1j7fa5Dc3nmVH3VULNZ21pKwVqF"
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
