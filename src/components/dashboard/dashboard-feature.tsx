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
    "YErfwkRncwoFjzaurU76whoZrRYnCyGdkJgm6d3WTDQ6dMQBPf6TQ5p3N31bNFDZ1yrijcpUGgYnKpnzo9jfr91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62HEcA3wgH5zPi4RXENBybVtBKYuQaSAgEwPgn2c2HSquDuALW7txMoYHVYMb5aKoNuYSg5LAGjQsyhqTZ376NN7",
  "key1": "EdmB5ZhYCtiU3Fw8xH9wiePXkGyzS9wycfqTJhnxcAAmjhxkdHB23DQMxRffY6TV27u8jgowxfaCoRJsPJ8ucYz",
  "key2": "rurVeDvTuVU4EnDNKhGrkyjyDpVNko5TFjVhLA2LZQWGfX3i8uxf6uiS8WhT92wfdqUmYdywCeyqGEzkX8fjqm2",
  "key3": "2r1WBvr3Mn5SsFGrSWNyjQ1XaMpEVCNVQhC1ZpwqMxFcsBjaofPLq6AkbQmi9JHYdKrGmGa4Nbk42Ge5T7j6r2iw",
  "key4": "3j2d3RcmJ9dQv2TWocDgkxFrRY9sPC1AS73mCBra9G1sq7MhoCyuejU4fHxeDprkBeoqMCBf6enh8FCjq9xWJdnd",
  "key5": "5eEyBzS7Q8VdxznqLDgyLXGesNpE6JMdFjwYnZ7Mr7z2UJqkYpxLizcE5wDVAtQ4hFDPKnqQpQ3s8s845AqZuCf3",
  "key6": "5cbpvSaL6B2EnuStCV5UpkfYjrw5DDdi2kDHrKFMP8xBje8BPjk5XyE1fPXPDpUzZxP5uBaeaNsEy8NwHNDaa6aG",
  "key7": "5LrfxSM8jyNQ9DkQrDoH5YnPk1AA4NnCrN4b1haZEtaswhevm3A8fdnNZikA3zjenNPQDg63UdTdDd7FtQyDhzAZ",
  "key8": "3sFxgK7714vPH2d3qDwfwgoB7WtX8NZkPFGtJFZjhtsLxp3Zr9HK3wAg4uf6ka3qV7zH1sGTy24QNDQRTm8zsZL5",
  "key9": "5tNyABVp5rPxhJVDPUw1ezDV6xtgiX69T5P9jNB6Y6vn21eQqe8Wpfv8dwPapPVtWT9erbqSWT4GfHSPserBqeDM",
  "key10": "5ywE4c1hvBqrn5oCjMmx8CU7g9bZqLbGvvuEJtmgj1Q719U8nREDUMgvf1woy5f7QBhTtfs9HxmCLQ3AvPX3icQg",
  "key11": "4ssKrmr11pfxtz1borra9GbEbZjFaB3gAVjCGkTpZV1Sj83PEF6es5VAavqpnduJCy4PNCgJqYdjqarzmPmpwvNa",
  "key12": "4d9gvxPtaMEUDY8yEoYqJywgUVPDgz2GwWqC3tg6e3frP5sH1rVRxT9AUzJqukQCZ7QKuv5bXRPXgb9sRswWrgwp",
  "key13": "2DyeJ3KTVNk1VLGLm1pTvAuVdeXbwuBXo4STELk9utcmqCnSiRJZ8KftDx7fUUWoPZLdXtH2jYYERAkRMtk5T14A",
  "key14": "36atbWm4J4zNLwz5AMqNtNc8kmeuQyHb7L2rEysiEyEcz4MHcBzX7vqNbMNXrxsSHGFiwVeTF7RPtSZed5K1eKL",
  "key15": "5zVVDQgn6DXVNt8aGQaui5eGBjg8oNRi1TddJXtyBN12xKLdcKTodjJRC5ZpDiduEF8RqDoABfmd7BokRwZNooyJ",
  "key16": "5fccPqs8a1VquYLVE72GsaZetpnV7NmoaoZLQ2hMdHMcmTFhUv3uyJ9biZktEwCstZNJRJVAaH92f9Gn5RTdzq8k",
  "key17": "gM17jgcGaaNGAfrMk9oPR7bnDEkTBqq7i8QZKqjDTn1paUgHBcWNhGzKkf9GoBQuAFTnmH7QzEni13kRUcdgvPi",
  "key18": "532d8yzigU7WGC3SeHG8B3ZPaLWEvGkZ98aRePjD9DwT6RN1pMB32wV9H1fcdHwkV1mNyg7nGmgLbEbuig3T5oJq",
  "key19": "3hTeHTuGNVunKqr7raNgE19a6CcfvRUyVZwjKmm8Pg9wy6LznG6egJJeLePXKJmqgkymDSyZfhMrZR3icrZWNyp7",
  "key20": "4xok1HN8tmhfsWG5SKyMhz2UJpkmCLShfaLhbhheeuuwq8oKieC3sg4nm7Y1o16ZUyBDjHurKQKZA6skMQuWJKuy",
  "key21": "3YDX7xVXWbP9vdzgW9mKG7aAMdqfgxVZFCajuJ1t7AemrvDQfZPdTC3HS2MtGEWt9q7SiRojDCxMfmiYy73sPa8v",
  "key22": "3YN3RBnJhdfjSCoiPTAQN4CSD7xQosazKpsyX9wwdrTFdb7ofXhprAM6iR3KoomazpFrnQZ2c4UquRFt7y2VwVSQ",
  "key23": "63Wsjb7kg56ZEGHQa812f3fYFXoysDjRrDAbDTczz4SSFJVddrbLu6hQ15w4TPbCzdwTCr8m5mwx8y7ajAXwqLxA",
  "key24": "43bMmNUxQDVjo5gC5A94HgVj4Cbb6BRU35F641wYxoPJm2z2RetWzUHJDEVEH3FAYWeEh5sjdvVFqqRyVUSGhuvq",
  "key25": "5WJChGXUSpJbApW2gRSYEHxr7snPawfxrAjvLEvSTMKYDpwXVRATLGiX1tS12TNz2w2Cz41DARPLzJb1pGg8BZVi"
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
