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
    "5hTYgsB4a6MxAVobCpKS8h258TugsCSfkdKGUX8gunhJnnHMYjbATYT8e65w7m4qtzu2Nh162zrt4Juy5BNVoAwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pcFNjxYgYREggEgqvVPZ3oQDc1NkhqAeSnR2tchKK1eYreNwuDXUpy84KHuZFgRxtXMbPQFoHVS6dkMHB7D27ri",
  "key1": "4JRYuBrkYxPdb6GH49mdtxwJCPxjotFvYMEZ62rxpCiXdRZNrP6XoVzerrgDbfqGev4JWhLUSEuEZkGQ8L1yNdci",
  "key2": "GS2JGSrgy3uc3UShmGcQy6HCmdfE4K9nkyCCQZiShYDWhHMB4ZRBKoNGTQVsHy1Y2k7VNFEjEhVuFkTjQm1mqeq",
  "key3": "4FpashAxTCsd1E15RHYDqoHurgX1yLUxW9X2aWSZ2o8YHnod3ADLqznsLa9cDh4V9TUpeaD4QPKJ8CPAvE6EckMg",
  "key4": "uYmktCQKYqJHFd4e3A1a4xiZJfYiqZu3ib9uS6dKCmzZDZE8yFRgj8AZDy8rbUy42dN3XTPqnVpThb1zsgsBoB9",
  "key5": "4oEqoKFoR79EdvKQtrcCftQmE2DNZQHBzAn37Bqc9QNqCXQaymRNro77YStJ5n8qKjxY6oDLicMuhvCGEMhMWVcj",
  "key6": "2N6SVHSE8UFgYt7XWK2rx9GrUtF5iYubkuUm61LqY9N8g5Z4PJrq1Ucn4X2wzDuByqJFx2iBX3Dog8M5uQ7H6DqC",
  "key7": "eKuj3CmcGzDgmxhn2b2UUgTqCXcnFYfvbw2viA4UiQh1ewpDxVbQ59UZbRAWHcQ3XVz2S2pn6dQag3jDhiBDXPK",
  "key8": "e9QZKGnwMKkESRscbjJEC2u3XuStFhNEPWv9zbj3uJbXshy4KNxBydwPwufd8BadUmySAfjduRRqgoSZNuAAuEr",
  "key9": "5oyvJUxvRNzrjxxJCB7L98Rg2sK9VdrmqrF8nq5sDiGomnSG9ffyjDxcm2KdJUCJYvewd81B7hYdvLGXsJMShsh7",
  "key10": "x9wgyPHF9mUhnpAh4kjwbGEQ9oNAGYaKxjagmRNiFdpuW2TEuHuazZktfZ3LHgijTzFjpbMb9wFjUujzwBmRR7k",
  "key11": "5K7vWhhzXmL5j1AUFyskEN7qX16rXHRemd7cqeFz2oQPHih9b96KE4HWxbyr18Vo8XGwP7rXJUGsFXKTY8MK1qu",
  "key12": "5GUWDQrY2KSaeT2Ank1vkuoYLLWUEgUmMio8nFTEzsWmXVcYyiBvpHnmLrbzswg845NLXSJiv5nSE2LSsSgkBAUS",
  "key13": "s3km9ChVi8jprPv8rWpnaTi8n2c5H6P7nbh57pHUpdJMai63wKuu6MX36Zy3QpKmVNKNe2E24pVpT6cAUUgkrTf",
  "key14": "5HY9FS4xxuPpznamud9H9bHdvihXur9BNQuTReKXooazBkvmqLCWCWnZoqUVeWNBeTC761Ka4ReexpGm6M2eFVjN",
  "key15": "4wLwLopK6LBh5wB96i6oB7mqfVhaGgRJrETw6mnrrJ2G2e6UShZBZGVBR11UeNb6G8R1QDNx7iQUqixGWYWStFAE",
  "key16": "25hJMtqESJjrcfUvkvCNEY8uEEDJSsaMbZ5pPpfZAoBThwcejkHpGqjRYs4Guaj8xZXz2p5nLpy3MYeNkHPr4tK4",
  "key17": "3Pj8r3NRYF53MXUDQwXioMqotobrCqdRz4MH7MBoRB2NupL7SY48bvSYKSVfdZntUZEeYBD1uo2ZisFjrWQJNgjr",
  "key18": "oXbBpMFzFCqTFXrz8u8anJQwdEYG9q2xbXy3ca2p1PKNM6K5313QSabbqFBpf5LxsKmhBWYZbSAmPHAwHvdtvge",
  "key19": "34usJ9hoq82dgxnV67ZTZHZzuUKjqPX47zhY1sKhGfeJwiqKp75NHohNPXyDcxkrCULaV5kWcWt49DAsL3EvkioA",
  "key20": "3hPAPLuDCQrk3YWtPzctQwjj8qmTn6TiJVfzqCcvJLMy2gChduRCKdp13zcQi9A9hou8F5A4NedB2BrzVKkEBvWA",
  "key21": "25G74JGa7SacwMVdrsirmiPJZSDdytrdGPbp6hkpc7RDiRx3ARgkAmoEEVAJuQHx6CxwVMFXQ7NKTCh1hb9CeKgi",
  "key22": "2wJ95mHp4F3tSfmMhF79T2Lc7byKzfMSx9jXdVxPM1NQAGPcZwnyBFCXuR5Y1mo8YZAMsQc1sXNsAFjETVMvafKW",
  "key23": "5eBGWFncZ4gWFxSy5Xn2zZfqdk5zZRSc8iSTLZnbWHU1LtpwNaQ88ZuTxwkiwV6gXApbGibYhGGdcwu64igZxddM",
  "key24": "5sotcXQmfb6ZvziqHUF5YuSU74Hh39upVaRaaFhssBtUX2LxQXq2cGGqw9PfXrrVaqALJwxaZAj5hKhPT3SkJHnx"
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
