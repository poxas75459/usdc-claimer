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
    "3FEhmvFuTwWtr34DqV7D7R2BuK5BHnuEfHk6nyCVYZpfmkFhobFcbEHMQdAoyx5ESarKMDcPpwhpB3AKWyfrAJnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TheYvtDz7jG7HpR3Dm7gGUdTFXFm6Hos7M4cd5S5HRDdrjqQnoENeEStKmB71FEGBS5C9Qe8GVeQDED6tmqxniG",
  "key1": "5nv6QbLcoQVQPSpo1ehbbmoDgY7WW1hKJBasP69oAzCJgeqagFh9bVQjku9g5zQJRKy4n4711wWH16nMNkpMgAU2",
  "key2": "2KUGh6szrgh86Ervot3kAHvECVfmqKgTMUwNDiVQzzCFbXkBtQKsCgNsAV7DDST4535wpgimJpHPwXHUAfJ3bwrK",
  "key3": "5Cmx5bMEzttsGfDhDpdpGqFSAGYcefnU4ifvSDfLzZiV6eyJn46f6f7sWhjQWMHQby9LqsoMT58hfoBRqEyNk4aQ",
  "key4": "DLjwCuNWwi2fCRxS183NaLParNvmwkXev1kPDA9hicw9ga2zd79bT6WATCac9EBZKxKNCfduMFAKaz8aM9yUwH3",
  "key5": "3NApgy8gjoViDKKDjHj6gSawTvmosZvRzkZb5XaRqvmTkvEjdzDvfeWWcHdNChXMcjC9BM4oKCnxuzJgu9U1mqbG",
  "key6": "5aFpqiFnJsLcTEykjYnEYQQMnqAxGPPCDTpDSeC6pAT4wh69w5D5o9WLARMPT1hyqCGYxqYwUoggxgS5hcWd2ShU",
  "key7": "2X9cNuhWuZjDAjrpvjVze5qu2W42p39ftoWujQYA1gRKny1QEY2USdSabK9sLURFcRBVBXo3Jx8zKnFCwHNtm4Qu",
  "key8": "4rx3BzGMywFwkVHbGfZ7Dc4ZHqZhBzCmgXMEFYD32Y8t8LebrcNnEyRKeNvyAsX9GmwKptgo9b2zau7tE3pmAkdQ",
  "key9": "5nfYCRz3nyqppNKYmEySCD8SkBMDC3qyn4qoxJGQaRXMuDPJb4qEAjexwLpg7m4hncQdasvhtejmm16XC49dyFoA",
  "key10": "9ciiBALEiHBVMc8aH3PRwsx34WPqz8CH1XxRLSxwWVuHD4bSPdgxmLiBowxdAcPJCj9kFYUSTYTvYrrpdSFZbLw",
  "key11": "2KMeY9wQ6bNCTzopQRbjiaLrmcgQ1HcVhhGsBZbQuyPQ9wRHpYQhwca4aXZUhpcvyhWvgbDaswXkmtDzN3BRUYsm",
  "key12": "4pArKsGB4tP5MBiWsMp2pQXhSAmLBRkCfMVEMUzZvUDCcuSiZVeFVtpnJLTkLYN99fDc9tUCu24hxeZxMypqajnF",
  "key13": "Gpam88fjZXztfim7T8vJiuP6WHKstxCTUJKCYo5JC4q3gGEgtjFvL2LkHoWCuUktbPxVZVjXyb4TEwnCTgw7M5o",
  "key14": "3ekRnPTDf9StRZmy9NA3vPfuaaRmcEnYNhBufjg4iuv46XDSK3u72iwRhqWjGyXPT44kvfz2b3duP2wP6gFZ3ZU7",
  "key15": "2BgdAgzG4BctakEy68GnsCHpMGk9J5YKGpHFAjFpnokbX3CQZuBUwjPoqX1wn5jH27ePaby6eQ98ejzRSGEx43sb",
  "key16": "3yx3g1wEdPzfqgsShzjsmZDCg3pAncEMTfpJP7ezotHivca1EybrKrnB7iuJ57i38cmoAzgbGsYDb2VZ9SZBQQit",
  "key17": "58AUQxkWw4tYyKZd5Cmn7SYpihRGyzeYfTDhQxu9GmgajQc6kVGkjas8eMUgLf7xYnv15DT2WEQDSJMHByV7GBiJ",
  "key18": "5tKhLcMCFpkYBNSK8hiNimhqdcW53kdjRPoipwLpWdn3LFUJBuZscKy31rEBdZBnWeXAFDJBcYkQCDQmdcXYDTtg",
  "key19": "4nNXfXBEV944Lj5HNdZAf3LYWhqsfw27jNyu1PVbgKDR7QYdsThA7eFQ4PuNWpECWY9n7VjgMudDyLa1DSzR1Adu",
  "key20": "NWPiivAmbAXJNhwhSePEh2U4oyr6xk4iPbj3fXHv5wVUsYS94jW8HsuAySv4dRNXVuXi4fMtiVywo7JQ2j1NbTK",
  "key21": "2M1CC1ZDtSmCgWyR9o5V6qbwyFpQtQpXhhYuB2rwJR96e6rPVTUup8Fz5WM8hTtnsGgSmgtXUYTnSpUBGLFwvKTd",
  "key22": "27QNDv1D4StjJ6YdrZDsD7CzA2w7jdz4Z52qNZwDzY8rcaTzF99XeUGQDZi9qmvCxYCxwfrytnTasdtEEbPK4cBX",
  "key23": "Wk23St2MKr5o2nsbdq4U7UxG89LgMSHpPr5g8ARhvzgMBV4Wm8Z1AiJjz7r6AR1vMQw12UQbNWrybEcPVmfw3Bf",
  "key24": "3Q269wVzwxrDCzu7YZLCN7WPg4LoBkHVmwKA5qKVi4ST3m1iHC64SmfhKsr96izyEwDWTe8toyP8Ny9WjAZeFVdV",
  "key25": "3J6EjgG2vqt8toh9mwwJ8zXvWQkfLMU2jePBXpjYXS1KxhqF6FewjB4Wsao4QWafwsw2dfPQuBVeCZnzRN2kqbx8",
  "key26": "455e7m33iqpYxKm28owDRMtApFJTBDT7WMXV9NqEQGjtMKxJiw5wA7qKuT18Ddbm4ZmXeWDpbqDRMhTm4XsSbo8t",
  "key27": "LxBCm3NDVxCsmKGqKC2bJi5no6tQ9sRPJfmSacLJrt16f1As7ZyoYFCmqu7nvFczaTvCeNckNywzMrJ5YR1ddt8",
  "key28": "2f4eh7Z823HMcGzB6gQteDhGDqj2VSQu3gpQD8ynBvP7x6yUctmCWFgadCwCGm3TRm2HHycAsy7PNhTuG2NfViQ8",
  "key29": "2LBCk1u5uC2425dt21JVDtmhTKpkd7q9vnCZn4C4koHVC24HtRPAjqBGZ94BAhVeFXhG5HaNWptjuzEeamMdL21d",
  "key30": "3VRdHUmWCzAttFBacSPHLuPFWkA7heeQ3iRjxZumzzfSGD9vA64e6spoKu3ufYJ9s2jXii6PTn9hhTvgMuwe4afj"
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
