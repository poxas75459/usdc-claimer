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
    "2NV7PvDLWRBtYbQT4ejNJQybs5TYzcCH7PTGrEr1mijUJcpG4AvYXRBeHqp4hp6GJ1nt4mZPQtsNMFYsCaju9o14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qMw4YrAEjsxaPTBxPwY25UcRffHf767QPwx1wx3EnY5GDXdzVV7W7Ta6ZaFfdKgym66eNp8f9eUun3yc8hYGdwG",
  "key1": "ZSHj1y7nWSEUeBExCsyYEt7tqiECdLae6hZxhyLREK31Y1NQFT29LvPpT6Y2fwpRp5qAjigZPCbMHTxmXkQGRTB",
  "key2": "5CtaRbMMPfYF6rVND6TfndRCax8Y23WZkfWFo9bnmfDB4GEdtCU73vDenNR5xV8uQwpHeUrmrVUganxfcu2enT2S",
  "key3": "2bicaJkx2wLQtKbMH3gjvHENdknJoYR8jUoGonMKhi4RcxTT364HuoWo7c7zLuzEYSkhsxFWGDboTkthu6PxWhZq",
  "key4": "4nmEAkZVYTZyxiFc9p9KipFzbNdUGAMNSDnifbW113bfe9qQcYxXXxDGFmpDtUa7VRH7Ly78BJ2kBWzejYX6if2m",
  "key5": "5EMhkujHW6yR2ws79RtHzbVgfZXaK65JCZ2kkoHJxiueLnfLexxL1Gd6PBGsuf3mhVDeZgL16vqL4QnwJTKvyzg4",
  "key6": "2SNiQ2VwfcsafaCrL2kCxfAKW3ATYHTCDFkmUCoSd4FKuTpLAgbxNCqkrCa5vmuW2EAkP4WiBfsespbyXHSyFp9s",
  "key7": "k1wywKjgF3k5KYuBRcQxk62jdskREX6RGAbcUvpN55ewWcjWnhgakb2eNfjycDUU4P8bZxWPbuWt2N2jyMXXoMv",
  "key8": "2YwrsXGJpPpbx6Jpu9nTqkNcurP4aQwmdFnonw3WuvyHobkVLRwuwaDwsf26AoojratBYMjuWnXxg9L5HhzEeKA2",
  "key9": "3gyzkD7MijFSGvEJzVPbhyq6AJqXaneZ31ZCkeKTyNJTJfsFP39ASgHtNyPsKs8MEqYGxFuX6JKLfkAzebrKUPgP",
  "key10": "4QviM8cBEeuTVaAAJwYnx28Bhb4zL92BXpUnbfVGUXGY8TcU4ErksLLyQCvtSnSuByY5jfyZcidyHmAuqUg8HR5m",
  "key11": "VDhCHPUdsv8khU1Vbu9bVpJsjMBYdKzCHc2WqfUmYFrdv9breg3wpSou2WELfTE9eLtsQJiPMNBmfD7Rao3KkrX",
  "key12": "3grirKeiyHY321AkyxkyeZGLM8n7YroVWxKYFrbQVS2VMX6h8B764ZoAVN45mgEbppUrMRPsh1cKFRzC6g1tctou",
  "key13": "bo864LgSmLj1UW2KE4MbxwzSHhgqmjfxTV8UVqk2SGt4TsGtqZMpURaFHotQE8RRQkUMjjQ11VPPRALEGSZWn5y",
  "key14": "3vQzukHQWLx9iWJiGffhhcWxYH7hkvnUiSrCBpj8uzyX5aBFnn3KunPSUMLCz7GzkxbMtMLHJKMtQBGvGMbP78x3",
  "key15": "dGAKjQXm7WxcMsKDo5rKgTmTtx8Q9FyQndzoENikaAXWqNyLsMQBA9gXpYejhpSYNqX8aJmr9aFz6X8uLZjVtwd",
  "key16": "5D4iHaZjA2XisV71uwpudYueerZfHEj6GLu1Mhe7z8sp69DnbVuVCUmrSELWspenwVn8oaKF5Vz3NAWe3nZeXGh8",
  "key17": "4BQnymwRaKx1szk5QmzHXoVmg9wcGL4y53X4PRKi79469BVAKVVhiAyuRmjF5T9r9BXHwHFWUzEwfEEe8qrXT9y1",
  "key18": "2EFQ64Rgv9sApH9C9ane9i7VMSHHfs2AExDLQfzHVuakFCugJwHLCA3bSGT8L15rE9zxENrdSXXhXeXbpCuZVeqN",
  "key19": "2qjKS7qF7V3Mb9HepJj337kkJwZWrgkfVsRcYKigbp6cf5m9w8e6Frs1K18LHsU19YBGeTqFgJvwCoWc3FnpYvZU",
  "key20": "4K2iSRziEnHcXmVMuLtf4e9xQ236HQcmFG9P2EpFmJ2F1kRdmowDy4qVp34Ra7ZNGo4CcsHsvGBatvvdap9cCP62",
  "key21": "8MYTf7YbVJJ5R77BVoR75ATKmExbf8zL9tkxKDfaEHpczMg5NUAHsDAhi15QDZ8Cm5KePoZwxJZKY6WcqVzcQhy",
  "key22": "ij6G44FZcb6vQD8Xe4tCPTGTjnLF6wkNb5dQMDX9hHkuSkCY51JPL7GsHCXHnFk2Dqp2dMnBTkcJTQokBnnREPf",
  "key23": "26nnPkQN1XJjR4HTRE8CvGq6QTQEpYg4TrRHcp2iwgPoXqrtdj81K6bxpoxCYfsQuDh3FA9FZBoFkbj98X9GDZtn",
  "key24": "3Gfds9q5mMY4Q9WedVmMA19hPNfLn2tpEb34MWzWnM3mas4NnELT7XhHunHeYKxHq2KkirPSieqkaoGxWrQLrYCr",
  "key25": "gQfLdz1j3CAAbX8WbDhehRFN1WNKsQRd9JKdpa5GBhSqMCJZjgD9LSTTNXAjatcuUzxuRAa7WQheSaE8T9oxGEM",
  "key26": "2XsYxufm3SHiyVYzLBBqKxypFH4xKAgQWrpoq4t3WB41DkHM4XEeJ7uVjAfYSRpvv1eNBa6aagvfnb3Z4qDp96R8",
  "key27": "2p8pgGVVB6xbzLFsnhn6F7DJW1GGLBpHsSKjKFRZuD4yydQFzCZa5Eg98QjJB3V5FW2WhRJpo7gTQi9B97Wirnyh"
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
