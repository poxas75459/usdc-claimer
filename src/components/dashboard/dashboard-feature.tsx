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
    "67L6f8gkFePhFiEirHpZxZW4He6KDsAJMJAT7d5wDiUvQMcEUb9kyiTDFijzWVg7Bb3HwZ8aWEKqFEMSWcdcniqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UV2vxBf1Jjsssiy6QtyziYn4MLw2s3xGpX5ddAMAkKQb7p17B4i1xmoKMfDXjeodWToSE263hhGGjfkXx8baitQ",
  "key1": "yzAcVzSqJ5CVufNcC1bmm9VtRC7PLiX94UAjSNa89yirDsfoxfFktS9ostsMUpAjRjkiRm8e3kuV7kAnZnwYFAs",
  "key2": "2no44p6RXptrAR4hiaHUebJchtSEaCoXruwZBcQsWmuAwV8AhFC2NNsVS4vcXLqaDBegpSDmQwagmG7WjkVTe3YF",
  "key3": "4pJcuRjvfJjUf1ucy5QcCtP8spjh5tTa4ivqmNaodP1uMkvUd6r8qGbJWLgAzJUz5pbgEGNaCcueG9JMx7UHacXj",
  "key4": "5zsArXRFVJ9ZkKTF2o2YHe9H59BoWDriBGRCmRTn5ZwZqVyEMe4k5dAMDE3EmvtHrMUYgpsCsWCADZhh23m9Bur7",
  "key5": "5xHFZj4bGjJfz9QX3PrgCHMNM2Hx67uNQLj3HnYFmcHjVoHeU51AAKmMsZJ9BMu7EjWwERUhyJZV3s9fs9Umdd4r",
  "key6": "4g5k4FifdY4RVZyam9uKMJrcg1Nr1HnfffmGSqHTEhS4CkX5G4Xv6rj3jbYokybHzMczYdYWdhp9HPwNMPqFGMyT",
  "key7": "Uncgkeb15s4Wc2feVvyQRL5asTfxPmCGzWKLwjSjubTtwjepzeRb6mEWMVfQHJAwXGGLHcXNqLgi6dkH69fqFxD",
  "key8": "5KogTmR7n9ks7Uo5YTzBBiNnaj55WAPuYeunvJGNGyi8si7TD5VNRx5P1NEQbtpRkfbQbwsyVjMb6attgrdg5GLN",
  "key9": "3KsmD1jr2RfMNMCJphNpvqFzSTNrCPJB9TbTotiLN9h5tBX3zBAv1ZLBL9yT6jE2h4CtCMVnBesn8sWCPrJexTTh",
  "key10": "5Nwzo1Smr1Nwfy79478m5GyAjzxbNSMt6tatBbfeQmp8wrpAKaF2MRDDmYZgrGdYy7twQHKWHhaGMtiwqSfMkUfM",
  "key11": "3cyFnpfwBGxaB4R3KKvmsA2TernR5tKFQXXesQhyDxUCVTukKUdDgzbSbKaA9KP7WkhakDf3HuCRUva8UecKEZWY",
  "key12": "2Hvcc8RGhRKFZH5Qc5id3QrZT6nTN8uzaPjA7SwjxijDGMGkUbZSF4v6pCvFWGdkW1fqdc6hD1N9u3aD8P1VVFCZ",
  "key13": "r8ZB7XViwou8Ei3TseSSfBWkhcvcZcikGGnGqrKCnWG7BeHan25ZKBrq3FxYdPFYynQrZRW4KT2dsdFgBM1YCME",
  "key14": "3B5XijHFxjgbKyceRTYYM72dGxVRwt7C26dMpP9FduBAE6C5rXticMH56yxyFGvtHQu6PQ4A7hULpL4ofnjxc1za",
  "key15": "4d6RhQDLJQWQ8X3AVX2k2YnrhxXsxjcFF1Tr6MA44ctott8ebvwtxkwEEKY1NytDGLrv71yHGsv891KXkTPViRai",
  "key16": "3bxVrXT7PxSKaZGrzgVXNFwSrPUBFdKWwNYA6XWm3f6vz6VXrvjF6tNeCN52d9rsxCm9Yqhj8K3x3CP98qwKKqu",
  "key17": "4LjHE4MP4drGKwR1WRVHDnKeyzDzoCBntFDJtjD5Re2LhykVExGrQM6mWMB42HfKQrYtJ1Rs6D15bGmX7E7BsSWh",
  "key18": "2sn4C7pTLGWjRFLh1CJ7kv4wKjQL4xjY44vVz9WeGACAw8sWLFp4fzjqVKQiyuzV7ie5R3SfF9mBhN9ZBCkeipPo",
  "key19": "5SWwQtJahWJhB7vmHhAWV8bcpatWD8dgPxJLK2YvBUDFjSuSPrDBtqPCFffDGACTvnCrzFMW5Qo7H1A2HEFuoYeU",
  "key20": "2yyCMJpz9PWN7ZB1nZdxVtDnR9KT51inin973L1UDjx4amXqg1LwLetoXqyVfb4wyXHAm6s8pWwtDHKaM6ujJbNw",
  "key21": "5pFeKQFL4h5s7SgS72QzwvQYY6qEVJ1yby86g2hBhFHL2D4nhp5oPGLzK2nKAUrqzsJBi6jJPtD8qUzUNLPCP6Sw",
  "key22": "2EkPwWLVbWZtTiLG4MfdKPppvhsecZGwPD6r6huYzL1Lh6GMsWLMkeUNMHgZgY2gBCBZVYU9X9vmkWQbd56aqXAy",
  "key23": "FiGrDPvLGcgP9QZDoQpjG1sxYgmPibi1ti9BtP1VBxkvab9Xco64Sw4ru32fJgbd8qK7hWZyUcH7P83RGikoNX9",
  "key24": "3jpbaQEt5VVgVpU9TXU6VVkoRYCe1bbY6NsQYRACBXL3csKsNDg1bDtYgSNXnKggW4gnN2CaThR8eQNWHsaXsbxp"
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
