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
    "2neoZZ2bgZAvmQzYR22NrVwnA6irpsfGJyvMHv83Th1ux7Deu45qVAKkkviuRJDzK8tp21hEfUXGmWF9TXpfbjh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uJgRPxn4jzVqb5yB5hVuXYx8QRjgKsD7kNHdp44AH5bk48woKHNWVA1b2MmzQDYfx7HcPJBJ5zBC44sKZxiPbPG",
  "key1": "3bY1o98rV7ijA6PdiwPLCEvgVQAy54yH1kke2XwvTtxFwt75MNbmeCWC3As8tyo6sLWeEnLcD2NRFB11EMc6JgxD",
  "key2": "4kNPvWxFbdjGfvb6qdeiQUrhLT7No8uNvQd8ZZJpWihjZba3HjTi1Wm8oqrGaJ2ZSeFpCNDgGPyRTw9a2vUxbPVf",
  "key3": "2o579pKh9qtmPZUKAjUSBiSbNJJA6J1WZohyqJ22niLQaAuJaa3uFA5uFgt41qg9qLBJPRWbcTW9PndnCbsa2ZVr",
  "key4": "4cuzfyUibCm9iAYPdQ2xLv6cYpqekgrc6qN6n1vNmrcGB2hMrQSJe8ZZiqe4A3X6vAuqLp9CH8hUy2fcVXv3eEbP",
  "key5": "2T7ATi8hjaPyeHnPJepyfethHftQK1eNBLj3qt19Gq2eaU8BnCUjw9yGE9rTwvFziefVpmeivCn1BzVkPd94Ufog",
  "key6": "5Y2k16yNnuynRvV6g2dLokVy2dNYeYAqSyDYeCwXkMTgULy39b6KYd1wZoD5LyokfgcGBkMcmUZGaVbJBxwJXEWZ",
  "key7": "2fvr2AYYvu9BBdrY8dwbFnhnojky91X67jQUhqQhPaumj2kezyyjyN7ES2nb3Q9Yt7EaQ4FUCuE2cou8kadKG4gw",
  "key8": "2bY1goZpAP3RR544x5UmVmaAr2sWE59PoxjrUdGTzQSDcXzuTaacmZ8sLqZjjrTPxvvo166xUJD41fY1ggyhMqyu",
  "key9": "37MECSgWVW72afYawD39MiukLjaqTX6Xkbb7P6EihMkPJpbKH53U4yqZjRqiEGKvNV5btMspJ7oWTn5opzyeaxQP",
  "key10": "54MYfhZpyojuzMfzyg3wRLJaS534gdwGuRdjzebfUpQGqZVBGpcPTU1E7jN44sPpcPZTh1b6XxB2Pd8ghfqzGxH1",
  "key11": "3drvNdg4faSqZeMg7WyWrQ7dtb7fhSC7189FHmV463grCGc9e8EfygfpUYGrN1CxJdUvXqDyqk24bawgoArhykKi",
  "key12": "3NBFCm2Ni1NM73kSHe2bhZc3VbUdw6rhGaxKQf5R2sBDhudFhwJxrtRNNiZyR2451TvoAQRwEVTVv5Fth7SnjCgu",
  "key13": "3PvXcSLE1fFVpBhQB7rvupdGwqGB3ANweGJsdxRdCmDyvJTfowTXnum1YrUwrGNSJdoVuBHYxNiMwPNuH5FmsKBk",
  "key14": "3xu9T9qbkXbcgTBmfVQoMyYAosTVY7CYqrirTDdLHJXSd1aaSKH4NvsriX6SBvAdb6PvpfyhCw37TFaMWbDVoGJj",
  "key15": "5QSNH9E6sLd8AJNcZc2WE49ize5ZiUefzu7m8A3XWYvUsgHhWTfoZkRHnRuCTpRrUCuJL9RnMg1G39GiNiCKvSMB",
  "key16": "5HXf2UL9JHc5GgCYCVMyMdCovkSpkoSCcFP8uXQFdaGhtR8NjoLnjmgTGHWy3NeNfM2pww78vK1QZYzrbHbacX8n",
  "key17": "5eNmrYTDBtVQ8F9Tw2BHJX66y9qRnzLLEopwvmNDTfFgBCTTw9Hu2MRf2HLovxrA42eMpfE2HB1THfY8Ad16L2ob",
  "key18": "35Vd6E7NxzQ9L33Pi8R6mVY8aZUHgR5c4GxCVvavRj69KrXp72fbL8ypb87PKSbsV1Pbb2suemzi4Utcoqx3hwVt",
  "key19": "V1s5VWHCHPwtqegjjaDFGJDPtpC8eyM4iLgSqBXfyB9pVGa3AfKZ1KhfmUiwi75Y9PMFCWXCMptRsMPFkhkentg",
  "key20": "35JsBfBCggJF2aaXPRRSypdKS1zzH85P7DiKSqUCJqpuqZ3MWi6qFowMEo8gHMRjZhCvsp1PnsRLCL4nxi4aWxMw",
  "key21": "3HXyg9DUyrc9b5CRBeKMkQ9USdmQw4xJw1GgF7Tp9vTxeSD2H5Tv9weCRTMHsfYVhKSmLTJh2A3fGbcS9oPNMy2o",
  "key22": "23pnv4qyGVcGZJ8qtuXrn5uYLqYXBMcMdsP4Uj8yx6hrC7dHYqVdbdUsXsiEhhsb4HTsCcxZTaRvjKmCN45vAB4a",
  "key23": "4LbpQ1khYdwXp25HHxzh1m42YUY6HwvNNganqE5GMhpSGbJvKfsKF1T8A6rLBVmjD9mwjcTuDSXHTiDD1HHFKdKk",
  "key24": "3qAEBYUNVQgsRR6kEfx1Dn5bt7P4xs99LFzurnTXynke728YcP6zmgVYWPFA8NNW8PWV8SRABkmFGLZVq2BYfFpW",
  "key25": "2MfZ424F8sfjjQ432zxBK4zoAWpzV9UNMojvHccqjx9fKS1fLoLderi9qVWwQur7QPqW2HL5sRbFpWpRqfbGH6Mv",
  "key26": "5Xr22f4EpC8nRRfY3MNmq3LUnHiS5qEWyRthDccF8pNUDsaTLwNYsVvyi4UeM4iUDrVAJ8Fw5L4fHAffWAnBpkNY",
  "key27": "5wjsBWvtHKuCKxNMxNJYacJDJCNakh6RJno6hgrGQEjniazSNny3DiTAqTu7juKmgZKkWrCR33MWHxQcm4P3wfdo",
  "key28": "uBvhhJ6jsr9pAyhFi7B9SXzFD78P6VxRfNsKinnNvP8DT1rZJ8h3fSmWs7R5nyrnsfeEtR4E4w1Gv7CXtuNtjsX",
  "key29": "5EDdgKijQZimQBqmRNqQEdEyK3GxXbMhC9e1TjrXcDubhaeQX2MrSwKaNhqzad6kKjuqbxboSPd2dj9bVEUqaZZf",
  "key30": "5sVa873q7exRKsG8ATVGRXRXmHBkPRS9H6x2wgpwdZ4rt7pBroTgYLgTa1haFqsixhr1uP2UcyJgGRA4xNb1oGjf",
  "key31": "23AFL16drS8wQPn4AMD96AGozyUp1BPJqzrg67phTTsJ4rzKW293JQKDjGRFsVWzcxES66affMC9wd8tmSTfXf2i"
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
