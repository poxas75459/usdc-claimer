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
    "2bPVsR5A5BveNVyzYdupJvjQxRBYbfNAhWR7zb6WPxLGoDAmg3YqhGGicptdUAzDU5WtCgZcdZpr91UYVfv6iLE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gdos6XUAcmn4Pud3xfrAyp9HMNvrhneauBukE5KocL9fRQKJKdWkkmnJ1atm57KgcMLU6NZUEmpapgSpZCkRR9V",
  "key1": "2iNHTjqUuVuwUBFZNaMbNZsYSmtowCxTUAVxc1VGZ11W5jkdAJmzjtsTeTZQMDycZ2rrSGpjdB3Vc9fpzDHi8oLT",
  "key2": "nQAZfP9CWRp53xz2we5fk4kFCWHdq9AKkuQDsgNS4iyJD7fb5E5PXjvdKx3pncHt3H8mmTgnsGaXNiPR4CAEnkb",
  "key3": "3KBCKNsixBzeBAjiBVnKduMw78SpwNpkherMAMsnW152XjSMKQVaBbHDS7BGdZGacPyJAK31Kdg8BSdjRUeVfwa2",
  "key4": "4j6ESm49B5sufYGYp16p9n2En9cpZRYf4MMfhQGU8jxq4Z5f2F5jkCWiMVEnL4dnNsXRqkwxN4rFURuDvLx3Dvqo",
  "key5": "4QC2t6Bj9mpny43LZTwj3V7BNnXn86F5ZthrmVJAgAbd6Dr1mfm5wgGWvG1GMh5YvDv8JXdKJyXyeYN3gUx14TUw",
  "key6": "qKcEuAZD3fCqnRUsmH3iBoNXQ6m5uCTtuGkFBZQTxgd9VjFBFJvEe4ciRcEYqonGm29to4Rc6PmLMowEBf8fXij",
  "key7": "44iXDYbWTadnu3Kx4KUqDkHLMB7HWkqfe5rotNV5SmTpHmpk8RbFRGV1iLD6zi4sgv8NWX3fk9EW6Rj8QrQErMoW",
  "key8": "FpVacSjCvQmnBFqdRCAxcZbGLe6apMVFFB2HueSZRsvvPjQAQAapK11Ptwo48zYvT2v8SKyHY1Zs2kP2mpXKsXE",
  "key9": "4xLbbUucJsQgAoqC7yfQF7PUA9WyuebrMqYLhADwgUBJBCwzutg2NKMmHF6PjS8brannP5LCocmsxeY38aYME3md",
  "key10": "oFxeF553NssKXWayimPQyU4goCJTFQJXWM9EagBwko15SiRU8KHAf4dkBJMHdEBWMf7J5NAvwf6JcmNKXaATpUd",
  "key11": "39zjk5unwa1mVGJDYgxVz3JPYdxy6o6zmeKRP5yHZEKNY5BPzNha616rvSqt2dG7CBFzpLStqR3SxWXaZLj2g6HF",
  "key12": "2RDLTMPhGKut7jC1fX1UG5DkFxsdDj5tfAvdg4EUusPe6SymFMeW8PWGiC9fK9EjB7k42ZUMi8D7vLmZ1QYH1T69",
  "key13": "52wrQ1mLzvEg1SZmAwZ4CFz8g3qxgYJCfDrNFuTdJTe3jJNs34Kb15rMUAqdTJYvBCYWGjKazFMaaC5dQLRxj5MX",
  "key14": "345Ffa1cFKg74z5WJJ3ok35Y2T6b7GKcta32BFCtb3GVqdyGY3ZGFT6JKTbw2F4kELbZoVpcSu7wqccg6t5bSvBw",
  "key15": "5UYc7V2GMo2mWRpLjFxoek5v2RRsAfkgiApGd7XWDnpRwW3qs8j9qfLXSk835GAvmrSoqEbXNsTLYoeYDnaKVtiR",
  "key16": "4DJ7r5HjehAxLoQdEad5uvcxpEMYnggmoShMTtSdpYQEP3E3XyrWKgXpmmFk45m7efpqxtJfEFSUJtXkbRBhVeHp",
  "key17": "2VudgSQPVySHgoXuLMAx9veyBVVF1oRQaaFQTNjGqvXgyNm5iGaEvyvMfHbLYyvQwx3rtLHnz5csWTf3B5pmcoyQ",
  "key18": "2DZqeJBymwpkth4QRKPSNCsTy3EVFybHdXsyPEwvssnSTRTJwn3f5gFabM28G89wDSTTaSqTwetKNDRajUg3QP4q",
  "key19": "3Bkqt2r9BsBnkpZBATKuiPuwKfhPKpo7Ea9LoeRgL5YKLmcU2g6QEnAmC6UZVdJJeZJk4UGGLBZQrvVkVUsZYGgC",
  "key20": "3xGE7NAnDUMx61u5aBLiNG8LFGsy1TZTyWddosqWXbb81YWSVJercyV6Sqtf8ozp5PUR3XfQwo4sMMGv3s5nte22",
  "key21": "2EfadxDFRm1WgrNYTKd4YhnwXYnKRTL1ETRHFYFKp8hGrQKiNSwGj93ns3J7dm7VZBDXq8PbQ6ha6TwMjSuJ1E3p",
  "key22": "2p9yS5uKBeD5Yed4PZeKv3AKwV2daByvWY2AhVT9YjuepFuyyCVK6PL9Gv59vZaKEoap6ALDgGMa3QFgNkNdvPAF",
  "key23": "4dqzQmCnwqN17oarw5ww4GvDG8b8ub3aKfNMi7JNAeGmPNxTL49XjnhY6m3HyiMGWYYk2MNhiG6p2bQGYcGG1dMB",
  "key24": "55s7QBwdtCBs4kmYqBXggiEEsCLe33KatkqtciSsTHztQvp7Y2Vkj2bYkwLvFat2Wx2uV1nhwmoR97gXYUyG7yFv",
  "key25": "5ntqPmfuVVRiKC18M9mA1KZyqGYba8FPS5AWagrtHMPFCXtDh4fw36uSwnihoXURTGEu9PJ2NWLtJ4AuasUvvy84",
  "key26": "2ymcpNvqDDhQCSGyG7yzoYbykqHmH2W48uSGQX2w9jZUheHngpyeyrE7FDwJEk7DVfFQip6RgaruZkKZJEt1KPip",
  "key27": "1sddKb9JBTNdszPKx8UTK9hn1yJk9n6fMC6Vq189C6EeDjqoXCwWJw5B8JtUHReJHAJVokjnFwBFsh7981b5Hai",
  "key28": "3XFxzGimZRAMgLsPMpusQE2Y9g4dgof1ZwFf8mWqYLGykWpCBdX9xLJTnGf2rwMmtFPXeKgXnrUbRH5eR5xMzjTw",
  "key29": "2sUcu7iG3bdv1vdZduTmkXN9GykqAaXv8nNVgaSdpE4RzoqHhW2YZeks5kkfgoyaZaNxFhf8mjjGryndhx2Pkqsw",
  "key30": "4VFCyLWXvdWWwgn3EsGpk7bjZqAMUF7UTnSG2gQsnXAJxCgG9ZYGTq1bHbd6nW1Qk8DGAoPvfbdaTkz3ZaYCkzz1",
  "key31": "3LiKBXD3gM3NxwDFixk6QwrV2HcGWnbvsUhNhRFivUddpJ2PpMBe85511KtUg7eNdpx4qD5UL23EDPCsQHFx43Jq"
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
