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
    "2Lo3NQ9ugpNnWfz8eUUS3nU84dDwGexs82muZNx9JFy8FRixLbxH2obJRx6VXmaEVduup33ZpSie8zW7FTASFJj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4abPfHZMxcK9yUUogzyGHkaEv23dtCL6TA3GB1F6Ze2oTQ6aRTXLHYHZDpDyDjCRvtxX4pKbSfwGFvYHZigZLuyH",
  "key1": "34YhfXvwdNESNMEWyxxEZA2wMNa3piuJ1vYDbKhYi7efQQvehWwQ8sYBCSJFYNg225ZxDrzVgP29xzZXdBKNjPez",
  "key2": "62gvHsTXCM3tLKUeJ7amkQB9G8qHr32vDwwpHwihLyD7c2ABeUqSBH1LgvMqfWPMLrW3QcR5TMHTjSx6scLVBYuS",
  "key3": "5QVorUWwNtf52Jvuuqxcgi4Q5QpuWHjfCoA6EXf8CH3ByB2HBS7L9fFKGdHtQV4Nv7U6CwtkfGv43Zfj1YqZVwwS",
  "key4": "4DX9WRVSLxpW6w9Rdgwb8EntiPmTjNDMbhHiaxBXbNaebwFRcCVRKs5yiJAFNz7YzPPZMcBUH5e7iFiGKeN22YXi",
  "key5": "529s6Lav5K7joTccTUSKTtpAa3QWQg9JSEjcmEF9Adz2S7RF5RHyTTY6LhKCkZrbt5gj6iaFUZP9LrPkgcG479aV",
  "key6": "3fg2Mkc1nfyuL94RTv3FDniS2dMBNojzPRjNnBSLCuXH9fjWGgBw8UgxGZJ4iLnepaRJmLPSdaSTWveScMj7o1tK",
  "key7": "53fRde84HhuwtkZJ7P1goQcKzAZCJwrvFqVU73zVknkdY5LUysvkgcVXJi3rYUwF2sFC7LgpsfhEzLihvRsZwQdL",
  "key8": "2BithGVSSZf52Sz57Zo2Kx2i2cqhJ6F4Aq7K8yzn94VEc37g8vszSSimG4CcaPbboEQFMJBFyHjq2vKFN8rgKtmL",
  "key9": "2ebtHpYNrjSdrCMSvbfJ6qCc6p22HyJB27xEySRwSrVBaGMDjmuYCz3JsvJ5yHyTVZLSRvUxVQUFzRsVeLswfrB8",
  "key10": "5ZBbEAPrg8TJWYxxYD5VAnFV7caS3M3GVuhMpTPHdQkSGhbbb5qZpXftimfQKQ472RbmM6C7dn2Y5zBtjpWYaop3",
  "key11": "2L7UmNb1dTp1evbpqcM6gj4iWDja2c9pLeZm8PBK2MPSBhRx5cV1ufcTr2YzZKDBdUFP2UfrhZugNdTYmKyhXNGf",
  "key12": "53h4b3QZ9W4foedMokzHdmM2oPLsiaPkd5YzpVDHQADyYDyVNLsV95NTBnvKCFVkJnzH9DCHCo3p3i6tXGKNLKFn",
  "key13": "849Vt8v4ZjBRk3H3Q8DFFLCBoQPSzwKE1ynUjfy8pdR51ApQraEGtPRs6oMsf4dvctAzjtGLivMqQ3DZUnZrbnR",
  "key14": "dnLNqshNKCNJJXPGnmJTzepbWSbQDZFgkq9cTPMPMLjG9xoRz2tmMCvMHvdvTvSFdc4Pc2CQ5gCDMGNKCYoz9Hz",
  "key15": "23ovT5nrCic15iyvw37EKy5Bo4aDgC3RBzteNRCqZwZviVPwUYEpiMje5DVpVskkyNdPcmNFaYMUsWubhgacj5Ya",
  "key16": "3SGorbpKy6Uk1TqBoyArv41kXwqqkMeTWZjmH8PDrfXtavL56pJr5Qm2sLi5gEFgYmzcakGfs1Ec1JbU7uxquRKi",
  "key17": "66vBftxyPPnT2rP8QnEkMwKocrECMUnN5bBftdpa8Fn57fLhjcxVuSEnho3JCcKD7cbhUrCVX3gbKQCwLZGkDs5T",
  "key18": "65tZcZ6ohnRrQh4ASw6rcxKpasfC9NnRaiBzzw41UkQk1JpjECbzCv3EvTwuzjtviN53tR3to8nS6zbsKwFqaSzd",
  "key19": "3pzrJvdXRvggToP8NTY9yNPHR6noTZaHGgZyytwU7fD4HnPNvQfAqXzdeGxnQZriFeUC571nVRLdA63zt5792i8o",
  "key20": "Byz26zbTcGEDGN1uwUcWyWpfAUFLLtquLS9GVbG1XYBcABucFoYNedBBpKsTaHi3HaDvAtkHrR7QF5oLKv786Vn",
  "key21": "YG7j1ZZBc8Qu3DY1YXxaVW4eYjW9D2q83QRzGLCATT1qnT8zZXL6boCaEWLFfmkQuwJsiPtsynatTAfW9vqxZjF",
  "key22": "5LbZGXyUXBSgqEa1J8nnjsKFBnB9xCxDGWrJn3JSMSNpYCzQZMG7Q5PNE1JQ7R7C8rqs3Pcz7tHtybkkWvfGGJn1",
  "key23": "dMPnR4h3GCtHnauCE5C5EzgsLCoUbjCgcNbQkG3Xzn8tG5mkHDbttQ5BAVGFZn4gsfH6mFvEfcKm9wESzGk1xCs",
  "key24": "Du62KQu9dNtfLP26BoKKs1pZXT9VUDjtdQGzsuBhs4TCgCr73AXjoT3mAchMcWibu6nrYBLZ7RNZjjvdsLmJUce",
  "key25": "2kkXsHgXPktcJzuqYhnxBfV95ZxarERSWdgJQmiq4wpGniGQtwy71Fjc5wVGEAz7Lw7EwNksP6wt8VCcgqKshkuL"
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
