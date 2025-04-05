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
    "4a573TgnvMcwFPeXsEu6u7i33cRzYG3HWyGsoA6FAeY7Ekxs4aBzGceHVYdLGs2tKHCMNWQGdz5wqc4ZK11GUuD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jvgtvoeNjcEhkuJvQSjVxmf74jDY6dbYgcwEJQGvk7srkqt564H5zSc1ofszBhzaRXfiwLaLYyr4kN5SCeiZziA",
  "key1": "3DTvKHGjN6r5z4CYwW64f1QxNWMfJBMcPmzH639AWCt64e9nJ8Q6HsN2Ajf5jRYpd8EUnDpr2KgWvEpESeiJo1n7",
  "key2": "2ioXoUDqRjvFc3DzJZsgJgMQGxwUioDjUFWhsnXanCrBVYf3Bxf5G8xuqdqWGBodG4qymQdZ8uoXmT8Ee8JtChQu",
  "key3": "5afTTM365VhyR8pchm3LcbCz3pYNBbYUCRnjzcU6SKh9oDnGh5wz26aVxf7yvothy86FSr73ZLYUAhh86Mjc8q3x",
  "key4": "5Q1Uu7qz3FY1tzsTPyk9Jx7doZSrWmrb84vCutC5ZN92ofzJZXuqxEUoApJ9uVLFvn5S4yZHKUnEKEXnD493PfQf",
  "key5": "9V52xuZZjdtatU1ASiwYo6MgaYqNhvrSRHYrWgccfxMnGxXdAFyogzN9MmSAfd6DiuzvySb4asfPqx8C8Ya6uoz",
  "key6": "STggXEc38uUXDPFV2nWMtChMGZCjt37XraKs94zRo9G7ggNnzTeePKi1cEpq5o7QjxDSFAf5KfyNQHk7WeSQiWd",
  "key7": "2FGVXYkMBDx2vVWNMAuiZ8poEk5YoksDVfWuTkjFPn4r7NHMxmdDCPpXyCFpNUdjD6PLpbEs1UEgD9i5X5SZayK5",
  "key8": "2gqHSaLEqXpgy61jgEtKScCvwUsNa9TrkhBUVm8fj9yH7vgLuQtbFcHjKi72CnD7oWU8VCZikSZFs2vfYdkmBbF1",
  "key9": "NoLJS5KixGUv9Vmr4XgC8naqU3cKraT7qqtRZom5GDHBJjpMhzvPp6Sp7U4nXYzTTH6wTWfmWFuqdPSM7ZqpomH",
  "key10": "4pJVeaegFF5fgNdMBDFaeuqYC287Lz1SXtP1tAShdLxiJvZ7yGq2enW3UFBKhkFftwAo8kPfCtvWVT2wv2LPzhr",
  "key11": "3WU3avdxFAyUFWPVmVDPAr2txKNUpgAijojeR5mUeM2B2nxjmBbWpE2RTuhMnGjjADh5BYMbRLRxtPSLVKPQRh5g",
  "key12": "3BdhEN22fvTvtt1Ftps7RsejiLVaLgmhrT4dmQ4YQ9DQZ4bhFkWuP4M1JXCCzJcVKQLZq2QqhesLr6HvGU9wGS55",
  "key13": "5CR3hPdYf1KKJcjXkkZtMk9ZHpXsX69EyZMDnjeWrtBv8CcV2mwLuST6RP8iMd7uY3cLj3McWnnFqhYVCja2mJrc",
  "key14": "5PTPxFQVmSSmMvgpmfe1ATMYYgCpETAjRXdSj7q2M9RJ1bGCWzmX6LancmpgNA1a51LB2xMgpqPYRYDBdFwWtrJq",
  "key15": "4yfLSJQaUQDSBhBhS6AK3od4kdoUT9AgWCengNnHGfhm5SCSCF91kL1THgZAskR1E9KP21d66pGvVSJGaTKGudMW",
  "key16": "R8AxWASrJL1ppDqSHfTz1i7Tnw1Ss1RbNhS6agVRvbg94iJZTZgoQqe7jGBuCHRTuMjaUFZ9fGjiTdXnYjCb9nb",
  "key17": "2Y87B1YEULfKy89e91n7XdJrTf3PYCbzyps7W7X2PtUso5nzovneY9Hx5WhPeHsgDMZgTTdox4dTysvjdX1hixQT",
  "key18": "2tKvXStC5ejkQzWjxC7HoWC3vV1yLdcWisThCfjVQXZreEFKp6BR3gQ3soZMhRvDx1p37XsnWhLLc84EFaugPEP4",
  "key19": "3S3HBNxvVCc8oTa1kpPsWjFzZhXf475sgP8UkEs76AMHmWykMeLkyrbzgwoLAGf6TNN2As8LWVEp9zLapVQtUMHv",
  "key20": "4iJSy4nQDrC9GvBLMTdMLTEX14cDRqCNAGkToDnm2tbMQSKtCxENPTPfz3Ng6bbB3P43o7G3K8fb4qXaRNNXzrgo",
  "key21": "2Gp8SXhEfEQwLSaKmB3pXTynTZe4dcJA2W5Fn3GuW6Xk184EGyiUS4AzXoTycFVJSv9vQZRni6S3m5suC3aZahaZ",
  "key22": "52nmrYQz4pKA5jmbth2utYToVmKqsN8xuqzr5qEgNDsZDaHrU6XNfs7b2L6uPpj3aLZD6vgzzpqXBaSeMNqguXDd",
  "key23": "53rm4fU8yGZ1vnPDNeeZNSr4BGo1rV6NPtNqo835tt5extWnMPMU5EKP7ijGMpj3DZ3az8UxQDFphRZVC4QqUZpf",
  "key24": "241zM5MYEYzeL7cgHkPGKV1YKcGEyY78JEBJJBJQckVNgEpUKBwneWgC1EpWvPsYdGi72q7Lc7vMYqBm8BGbrERr"
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
