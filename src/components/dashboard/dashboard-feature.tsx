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
    "LgdnG7maZZRQAaBVdSBuEjQ5iJ5BsLrR6Uv1f9jb1aQKNhYSAyYGY2QBKKARqZcudacXeRhwBCG3ET27K4XGBti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kDSxKXZcszyMucWVUnJdg9kagjriAACKsW3vG7hvKYfaMHs8ftdZhkhF255xuSYyrkaB3sY8PEjUKT3Ymsmsd2D",
  "key1": "4rbpPmjGGU8s17hXke73aE5CDLem3xnuWp7sZweRnXxCXePXZYNAznktThhZNtY3JkzmtdHuXrocd293HTC4P9gT",
  "key2": "3sf8gRRNqxonc5ny77Uvzmaee3qjsFSqg7SH8B2Btf2v667Vw31QDXnyicyqt71aXJiGWi2pQpKDqJ7ZuC9fSpAV",
  "key3": "2r1T8HqQnnaZwjrF32x6uZ9c4nECTZQ5ctiYMichuNfBJvHj3B7qckcTLy39zZV5P8dy251oKfQGEkj576Q5GxR",
  "key4": "2p8RJzxRDiFrs9K47cYsLobfLTLH4QZF7gJUd9mVf4M6CD72uHBz48LMz1wznBwbhTy8fLkNzvBF7cGU9gw65Det",
  "key5": "2Amceo68GpKiWQQRXxxcXGrBUNS2HMCWsxc18grgX34tVbcfXsuC7qinzsfW9Jmazz5zTfX3dwzopVyMeUgNJJLD",
  "key6": "fNNN12MXAPFtUNy9oo5XLMx7GB7FUPTw4DSc3mtqLJfsiX53TGWZgJt5Ti1KH7C5rNxcw2GdE8yQyyBeqPCF1mN",
  "key7": "32AeogXSHR7rQ6kzk8EBXkgMprSrycTjjsGV1G2VT4nSuQN81MrUnKPu44euy7zJERqJU2ohSsQ5MmbMezbmfUsi",
  "key8": "2qRMrGPaRqUqSSWEu6zyCk3ZwvMyCCj5oQPS3HaBaNYDAw2VwDNLcUT37XRqmwcqeYPMQ1vRtpXreqQzjKqfJg3G",
  "key9": "5HU1qgZ9PTkzPsF6RVCdEunfoT2YafJSmUbN96KxYa7CHqz2M9UZpNVFtNirmtfZPS9mVKiqxFrFE2vmjJQFMa3C",
  "key10": "2DFsyTscQ2QzX7QxVNda9yKcU1mWLsA8rHyuXhH3fLByCHEYZ7e5LAnoU2xbTzQMWZsTFjWJ3jpWhT4fAMtg8CrF",
  "key11": "4K5Me2uJHj5XEZGK1wJsKyEXDk1bNq22FHzFL5uYZN3QThhetcrwFHGkvf6LSitayV3NnS2ZGnjQYwXjrkEwtf8j",
  "key12": "3ki55ZKiRbYwTjLhDAX7HigfQLReSuz5ShSzFohBJtEtK5sBdihgYR8eGmSTqcpDT8bFNxoRDQ76t6d6sEoQt4Ak",
  "key13": "2xHr2ByA4NTRivuj1jp5Ss985DD2qfkCYbH2rAfibSaNxdGfLTDCsb5dcnCe1ipLtYmWGqG89bJLXEVfsmTouFoq",
  "key14": "36euaHbmEndjdTjJL58MXJ1tSJi12ckRNm2Qx6RgczY2fiDHBLx1xQEsUURgw5h6dc4U5cMsjvM2Vb1LKNWhQg4a",
  "key15": "5qJPHbQaYPmhpg1iwnUVkemMm31cZYAAcKFZ3mjxjW5c8hXwmQKyVrq47ucfFfeJ2VZ6zA9LWYYdziSuXg6dSDRJ",
  "key16": "66WcnCn6bSUD1kqcHcpNGhkma1ZgZrHZLUTJyHHdLVrQH7yHsrGR6oLsvmSuPdXDJCqqzXzP9abvAv8hVN97pYvK",
  "key17": "4ZnPHKbKUVwrwjNE69nfy9ui6kzT8oeahaCBg7BeaYjckikPUmBKbs12cMkHinCEwKH2pNkg6g3UPTJuBa7bb4Cr",
  "key18": "4eSefGLGKNWNtvaaf4XdygCUPBcK6cH2apKJXQZZMMKxRaXwXEBJzDMWa6a879VoLx58GTnSW6W55CDWBdFctKoK",
  "key19": "2GzMGfohZrGYRSpdYrNFi1ST6kaSee5jn6pzWk4CMFDaFuwAJrutTAAZ4aPMDpR6E2ConuioQKfnNbsJRB3rh7x5",
  "key20": "3DVYQN3rWGkboY3zVctfP97QoVYXPAmyvGbSF7YZCWVVxobJFazAjPxKCCRByRuJjqPb4ijCbE1YgSvhzXHNuLi3",
  "key21": "4tJgY355at5GzSYANDp23oP5N9KL6Fd7odfDBuBUZdR9LKMdnFu9qR9wgYargS18Vr5ok9zS9C3w4ZGTCFXapBVj",
  "key22": "63UgNUWnxazJS5vmQGondUxPyjQ14Zcqkv1tXipSccdSxxwDeV7eFB3nidCLWsdN7Ue8oRVARYqh9xgaye8QMDcU",
  "key23": "3bV468FDN4YEdyWfJGDnhuP9ojQrVR4xi39gK4nXVvW64QYrveYnrpDbWmxBybSkv3jvidaM9JaYqMUgEJ1xVEny",
  "key24": "4yiuBKQec5kQSpE3Dx42w5Q5B5RokVRUrfz57PU61hzy1JS6g7f2j5qVsMa9L4PHgcpoMnFQ7jngTcm3KutbZZix",
  "key25": "32BxY33zuMxpJtDM2Z5RoQ4L2d7j6cQ235FoftRQek5erQHZEn1f9TfZ2o3TvXNFMXx7LsqE7YiyAZuM1Ev2X8NF",
  "key26": "5hQ1griwBLVn3ruASztaqvzw8dwLLqTDjcDwbAi5oEJvnN5dKYKDdhadDApRgZLLdCStfhrtDzgZMDXZqTEDnbEE",
  "key27": "3hDBNuAcxK4w6veD4PfuL3PB6rp1Tkes5Sur3qwVsenaxZydPL9WEFqQSPa2sBWei2YstC42FmoDYm4DM1AkJEwx"
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
