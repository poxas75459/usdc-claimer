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
    "4Sqw7b5y6so5MZtLhG4hw4bdTVCNsD7Zv8gnb5DyGcP9u2UdJtBKccH1a2WkFw3tvGc4SCajgRUiQRNfT3gzR6vr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58fub7VzafrfaebQsSxENf4p1qieVzW6Xqzw2iXEWWU1y7DCzhikbRnSopbNvXCejaoKJywm7rMgNMi3mW1LpVjT",
  "key1": "5YdYfxS7GZusTkqJL1ZRMh1MSgWjq6yuk9kRyykvVNQnhHmuC1Ype6qy44EZUmpWpadJNtnFntnjV8TxAc1APoP9",
  "key2": "4ozDNnRC15ov8GxZCdXRKErx1qKXr5MVXzMWu73muvmp4Xd6kwegRqCzTpU1UGjX4p9dca3L66sZqjPJwQnyBieJ",
  "key3": "5umPnUTwUZQqUoCHPUnTsS4VgdJ56mhdAhqXvhU8HcXcpE3kKBevvmP4Wn88jeKawgL1dTktFbsazn8US7QrHQfg",
  "key4": "5aUFAyzZMLQpHn4NTfb27J9PSArsZQRQQLgbGNp9WjLcLwHcZUHiaJc4z4ePuJupUNQfRy2T5cz7YG2FqTcTWa5E",
  "key5": "3PSd8SZeo1kfvJFv7sHzY7QaAojzkHSdxxe5XtQoPcDGZAPF7hTSpDEfMadEagfJkrUQjiSkMqwaCDGDFjipGMgv",
  "key6": "2eq8piybduo6gs8HGBYqkQYGJAfNCkWHqFeAsz5MB6mh6Uo4i7S6bF9mQPSx7a2rMedtCfm4kaCHSruGai9Q2mvj",
  "key7": "5s7HqkxvRCLn3swghiCt4LBmwyxas2ysErZ8uSA8umXRQWvtkSsTXYEXq7gDDtp6TxutbnhAzo5hgCWysU4YWxKj",
  "key8": "t7KfX9Fh6jSkTTUKKqTyHNt1DeVER2hK12KVVVwZGYwAxNN8yRvAZqcaMqsmpCcW66LCn7WqZFBM3Pa43X2mmPX",
  "key9": "4eudQAzqUsii1RZ7v3xg7z5GLx3NWxPJ8SErv7pEn84ntZitC6rrAqvWYvxDz9kbuN1bSqnKRAWxfuKUvQ6T6cSF",
  "key10": "ysCejqBgaY8FPuok9yk5YT3uC8bnvRw2pQPij8mwQpwBb9nVbhtEwNCkrFHZZJwRUEG2767x47qHBcu432y719a",
  "key11": "29sErCvoNMwy1K5bgyW6znViGiXm12LB1qkZkv4mHH5io9q5ULuVvjfagP5WgfpemWsV22m3F1pgsvn4xm7U1ufD",
  "key12": "3qWLJJsEfMYbNS3xfoNdzpwQtaHAKucgzXwCZR5TMiBFocL1jgCaRJaWvxXMK4w4F3aWr4w3BoWpbjzrZWUHs1Ak",
  "key13": "4fMXCXRRbny6NRN8krQqBLKbP42yc43P2dkMkefLUCqJnSAaegYKscys8yaahc14DpJYas3gXFFeuJBswftuHp2p",
  "key14": "tmYgm4TTrXT93ZqbdKLbPxJPMj7aKoLEVVAjqiyJ2TNBTKJaMmecskLiqrZit8psPvFr4FmSVsSkpRKX4C8ddUS",
  "key15": "8Kyo5gyuWVGgMozQVSocBJb8gyWw6Tm28z9W4xDmvqkJTHi7xByBNroVK89XpPGdgSRYZPrPkX3wdzkiwTS8hrx",
  "key16": "3RnwkorzWGVVnDYcExkZzgwuS4CtKQGiyN7uyURqC9Y7xPnFgEfroLUTV9TGdtmMaFyZN2Mjw8q3NeSfMBDojKmM",
  "key17": "4ePoAssL5JDMSnGV8XJXhwhRGFe8APCXUUeXMFULGdKmCcyxWPGj1pCcDei9cDSfQFpcPief7xahR4nZkYDiBoiu",
  "key18": "562adhKLQufDNoLeZpgU2WnQL9JUdeyp5Cx8XrbwMfQyTgn6gPwpFEkpTwwvqNVvmrStR2VoBMxJEwvxUCjy7VyZ",
  "key19": "1Ct5oNHxQ4pbMHKLkBgSNFhyUCnM4k1kN84nKvvrTMxgmv3wxawK2MoFaejo4WJWZEu5gRoXth9iQfKmxpWYpU8",
  "key20": "3VSNgQMas4DEDWbWZ9XxFEQiLTUhGHYKyqqerJGvk95djjWbn6Eb65ftaHLAuvCBPam8qAM6SK41MzuWEpUCPLNm",
  "key21": "5qoVXTWLyEhaz3L4zamonbPgXL3y2acnMqR4yoUKKSqdMdxrPnfoMkwYzE2xyC2uzjKKkX9dTSxPwbxb1sVfK3Zc",
  "key22": "356vkbywGinDUEzNFDqqd2moQ7KSHke8eqETAfQc6RbZ9oesjraQzEas3BVqqQwvhVfCLpyUUMWU2Fc947HRrh9H",
  "key23": "ojFjQLs6VCUMYykNFmijVwUiAqNTi32JYyLcj6YsaE6yyWMXV5UjTAZkdE59ebx8Keb5SKZZs7DDSRKXbj4wEBP",
  "key24": "pw1JG1R4xKkqmLVk1HeTinaLN2FxyYiEGZ8mzWexyHb5MHvqVvEmFg1ubaE1ZyLgxqm1uTtnA24ifKgrQLxCUoj",
  "key25": "2ZFFiBLTyuYLJ3NEzumJapVQAptdQv8cMPEYSxyJapfN2BT44vvqv9WMAEGKUgUGvsScujUc4gT63kSCKL2BDQMr",
  "key26": "64S8GKCxva6u4FmXctgXaDuYXe3sWEJsCX5KwZy5Ynen6Bqeo8J1Q3b8tQfXJ4rNhES5hFdN7FyUAPR1rmupiBus",
  "key27": "3a5cMwXF1m2FqjnGzfG2v1Axzr2bHLQXszmsxdbByj3AejcP7QbZYfQj86tVmVYirfiE1vGyUUbJa3aQtgRbppDH",
  "key28": "495Wk6x53snGjHFnvEtQTs1Ypbi2cobGKcKyCCyFybicqUAQMqfEoinsUVmro8XCy8Fo78imkMpfDioxquXEqWKs",
  "key29": "43hvyq85hX3aWHyp4GVMVRfZ7GSE5NEjBhQPyKZzeYDdpa6x2uErKRL1hbwzQnzZDSZxKUBYbEWnmxSGLFssEisE",
  "key30": "38A4UdFpsn8G8wYNwuUKk1GC56F6KNEGuxT1NnWGci6cFWanZMfoxhUfDTnCAjDFsWATHaPWjt3HaioZDNYH6kLe",
  "key31": "5nm94PtWTC3MKeDr1bzutdksgFJ6CizQn8MBei3ERBEVMCvEeUSqK8kCL1Pb16VcL5QxzswFk3dyPvav9gw2Amr9",
  "key32": "5SQEn7TiJXJsAGjaEKQ1rZL1Z3RAsoRA4SfE7UNqB9tLywVZExxS43dTTNWacaHUDbr2skQR7L2gjcZnMG57UDCV",
  "key33": "2ZMwh3QZSapMWpnhL79kfzc1PL1nh4GMamdTnvunPfcr3dPqV86oX5xJBznR759bLibVnsn9p22uN7CsCDTgd4ya",
  "key34": "28CCp69RCa2LR7zTK7zzoEKni8L25c1VMWQkcYbeVjnjTu5XeC21nLz5reMKEFmMDRiRSdmmYquoKuZB2MBLpwrf",
  "key35": "4AQcJoi8wzLwY5iYbR4ndJEkWxdQFZQYvSWR82nPHybU3VNgAVN5aoNXQ7pSoSTvfLeGFqSQZJks5Zg8cfGvxqhr",
  "key36": "5tLLepXMkiaVwSAa1ARipUDYuLYsxoPm9kaFWoCYp666GGCasfRd8cw9baMaSJ2p6CLPrTxxVP4rwbz3Dk5XcXS7"
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
