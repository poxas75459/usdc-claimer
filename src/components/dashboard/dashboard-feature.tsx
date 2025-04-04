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
    "37eDMrevKEwbFeZCPmo513qbnLDC9GCkPVVb4w7TcG2C3MNarG8RqiodnnBNt9AatEBnfgqfwhfcb4CQDsoMGkMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XqKBgoGPcSsuwvXvVyLvZueU1zGZeeyM9E7AF2vxvoDmbsMeJs2AboK4YsQFp2QvvXau4xptGZvk2poznp59p5Q",
  "key1": "KqpNtv1rBimdsosioKTcm2Kha5ogqDyeySRSCWgnH5berBo8jsMmV8isN7aDE4iwnW9LcJha8iaNXkgxZ1rBz69",
  "key2": "4GwNFRiZkdmP4H8HoMmrXHME7CBPSSdVAEcbCKmRHJMzUNZPaP4kZeuN7j8GehUaiSDCXixeFhNWYN8RwU1qjGBV",
  "key3": "4fC1pCi6xhxDCjcDTZbZxuwqoPcPHnoRZz2qcganyhHPga8kAVKcwRLcKxVgqei1skQTtsFZFcrgdJBF2h4Tjdkh",
  "key4": "4xNfa11EydiXBxinNng5YNveZf1gkhV1nQs4uTedakDCUK7r71GYBwzUDcAjX9fFRBP7yqAUBD1DfR43P3LDZNia",
  "key5": "5ycdxBGPXKmb9dH3LG7SvJzcHjctK4dGaGnLXjXKEvx5xi2qJFj8Pi6vzzwBWmTbtDV5VvHLWCKHyJFLaecN3v1r",
  "key6": "5SVUYKXuoDHYu5ovJKULNidh1RnDBqEuAjMwDPmPporiGE2mPTw19sTQJGDysTVA1EYyrFJz7stXNXmxmCRSevgX",
  "key7": "5ShpcSK4bmC8KjJfdYuxZp3gwHofDgLBaXfT3avhUsvGZzig394EEJu9HFfazue6NurX5RdHyiMKFoibCLdfqvQF",
  "key8": "5cA51GGqzR6LgMTDkZ823vE1rrcp9kLWQbJYW2Vdcq2c2kouTbN7KLA6x7bTB1fpuusxrypdj31nYx4MdVB9aVqc",
  "key9": "5Vx7JpU7DxRtV27FmeiazBqiVRpsbt3CACGKQGyKtDgfU5SHqKWVoY3jxipGHKntkW1uRzyWPqQXx6Vnev8sXSQ8",
  "key10": "2srXJKkGRT2kiiCieLJBDfAWMRNngARzrPdmfPNgRPGwLUFp27YTEbWsaxpm38bwn9aStX8kHyNxvePBZUJGoC8e",
  "key11": "4YpW4gK5wbTVYGtX1PsCN7s74Wug5GhEVNijZSheQSQo1FQXoTu52WzdzcmSvCCMUdLxug9iBE3Vkd5cBAnuMuQS",
  "key12": "3WUWZaepo3efRVyeGpZsQjBu2BE2SFJS8c4JQoExLH2JLzF2H8eqExUvSMLHJKfvfNc6U1hhGqGK3GFX9EUCUVJT",
  "key13": "516wYVmu7wFdQ22iNygxEyafXmC8Lk6EL2cr8M1xY3HpDsqFW6aVYQBTXS3DL1NQaSJUgwCmFzZLSAh3nWsJzb6S",
  "key14": "3Ba31ZSVhJ7q2CdSE5AQPTSukzaJDKu5JrgBiiDFYyawZSodpbxYNiNLV4ipBdKKJkyGMEvTKbJxMMdqYGwkzJdg",
  "key15": "57RftB6f8NS6KZGGUGCXLNmhnAnFkSZbDWLU2gmehA5sm54326LQ2Xcv4puhaNLaFznYiYvwCXFHQCkodBx361UZ",
  "key16": "3ULbkzZMvCk1TzZJFSp3ACfvUQWGtAvXwsyCbR8Jo7P8hAyQR78dwGArRerDpyfpn8b7VPoMi5M4Gkfcm5bEHM9z",
  "key17": "5WZQAS6VY1RNYx3WABqVBz2vsmTeF1o4iubDNyXYrjvTJutPcxS758cieH9FqPVMS2iGpheUFKMYA7ZJeap2BMcy",
  "key18": "3zj4FiPAzp2DMtsw6AqpyKXjEeGNrRwZnsgh6DR1eTK2HCJKkKVBoCW4zNmGuJHyp39NMBrvHdnuRbm7GVBRQz6J",
  "key19": "2QKCHfiEoBjtScLvneCWTD57QBd8Q1miWb82znbRQkvzZkVjJM9HF6Bvb7y3vjA2eXYdSz1ThmPJG5HooBaREvQu",
  "key20": "4JM4QtEqaBfgrqgaXdnv4evkTHEimuxvEAenWpQYtApejFH1f6yvzP512K52ikpxg6BqgDEJXZX9Pio7CyQaNKGN",
  "key21": "3AXiZCKhD5Zm6iPAoxGaMMgXdC7NnReWLzW8KbufJU62EFzmvAi7KzSvJq3oLSieE8pjU7YBDTwaWQZnJ7Q86pcu",
  "key22": "5hL6ttf23Hubdew5cUbhmxg8UEgwy3ZzJbVrYkkqbKsgK8JKbgsViJW7hXFMjNhnpCv8t9tT1FuMouHmVHcCDQMx",
  "key23": "3uQgFpFtRFtfUf9KHnZWx2MYPQSxZVSAqb5vrYLySUVVLhCKSmr8RF4ZQKWRJjzdYox9AHoMBxR32dnfyT7bFNNf",
  "key24": "3f9KDmkD7bfDx6EQNDs5LHXepmAHr2MRau9AeGK9exxYjiepwN5LJANDmbPCezG984L5KP99QdncLrn7aLV1SaV5",
  "key25": "3kdceiNLxccMdzp2NW19ENQWtDSvkZUGQmPanYgRM8Z15oJ5NkZPeeWoL1FZEsez3wj6FAUwgMfoWGsUtdh85BB9",
  "key26": "4of2UmRj8QecK4BZVtpb8msVoi3VudVXsnpXgvtDJXugKW9GA1C81tmvwP5PpA3DqPKuiR3YTsqdgabWFXtzjr3n",
  "key27": "GE6BB6SNWPWGrwdHmi8tAwh5WmaH3wHdfKQe7FAWrix985rxis7EEyBJZvb9xvh7j7gejNZajaWpKsqxrrFfL9H",
  "key28": "3UVfFFoQWbBNfXSq3CfJT8m9qvJE1yFPCE9X2HgpRV1Jti54vdyxhYKdeDXGhhBEn1C2LqPNh7ffsfJhgGgyqs1B",
  "key29": "4kjtXevCLRM6dPRwUnKg8MD5PdQoBkyfrTPRQpi1kmz4KzHdrT2oKFwrgq2X9Bm1S8JTwhSviyS5NasppxQRYFM1",
  "key30": "3JVKqBrLQDifKmf8UpSrEsjp4YwtmRFGLNXndw3VioGEPSZZwtEJ8HzscWaF9xMaycnKmBimqXJXKkkb1F3QSwmf",
  "key31": "5dCDB4ha7TeuTqXRAWfF9HkppXDoz1iiFsPXvcavbXENSVR8N76MkJmwKeZdHAXGVBrpuvxX6djfzocMM1TSKu1r",
  "key32": "29biFcNa32dhTs6qJEXc1N3ymDjD5c9W74YzLZuKmrJVWtfz1hwmhaNoWMUMAjui6upCEz6j8nkhZfXRMu2c8Tk6",
  "key33": "5xEykMP17SFS9aZJCaBXBXi6QULgJ9FPzTbbUdGsyQdLvqAdHk3QJ6tXMFav1twHWYxnoQ5Bps6RsVdrB5UobyWF",
  "key34": "4aUW3eJcyRCvUvoyjZoSv5mCYTdTU3L3BTPAK6GbqNJ6FSwKhN6vZL7ZxNCzRQ9w9XMzQg1hAuxTrPyWbZHaVtB4",
  "key35": "4tPDkcA3YVgBxsvtCw7tLzGziW4Gvz7RvQ5gPJuXC8jDv6vHmpMU7SRkuBif4kXzBCz8fYr4GjB7ZDWmEhSkeRwv"
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
