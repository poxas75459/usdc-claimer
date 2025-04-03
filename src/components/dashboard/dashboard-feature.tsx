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
    "3qx3EbWZKk85o4jceYXEzBxvvTqxUXnDGRNjcEFtfpPLC2jhMMFj6PE8W91F4oYe1oVCWMk6UppqSGqbKg4fVd6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K4XhVTKr9MkuFHusfoTRmWWYxdwcPLVFPzrRp6GbeUxNoGx7gZNA9amzBms6nF3aA85yjuvKmPrtsHbDp1f1wbP",
  "key1": "59kC7498uKwYMvwf9c781mJTGaNuQyGxdjjeeSkpw431ndebR67PqSKw6HzSE33UvUMJXkw3Wy2xXAToyAPsYnwZ",
  "key2": "xZn7Pc89UorSVEnTMBm6pDXRcSmEccXAzphGJdorSwQJexdCzLrkzcdWjnfpzQ42fiLU7zKhXyVnBwX9To6AE8n",
  "key3": "4qTAMn4vH5mL9Vtx5gW82Ww43mSWyVgFasUCGzSjWJ75eSvSmzFe3shRfmbKqoPuP3bKGBxM5iAE2DDKNvcAJWKe",
  "key4": "Hj3fmBBxAjFiChBY7p2mfgLpsajzHTLqrt7VqQrmLVrR9HzKkuRH3nC55zS5bkKrtjtavFjX3Xx2o3ZLYrMedbs",
  "key5": "2W3ESib6hm7jddvTiSsUnNq4NbhqMKZmm5cqBa4dx9LKwsm8jnGh5Nt5kwNyshEyHftARBrgDfUFWJ3trHPwgFaF",
  "key6": "3yoa7n7RxW4j7S9v5tw2ZE2as2WgmKcoWJATijam4JpjtfKxpwzsB9J54a5ffG3Dh1rJRSdRiSpnjhbYB2egYsnP",
  "key7": "4TQZcuyZEoYJodJvSjf19VV97GPjNCJ8yXfvWv2TFx8P9TQrWpTXT8MrRE5ZzFUm7aq9mffczHx2CRPcy6iNaNAw",
  "key8": "49YyJYTx1VBnNtw9bYXeLUpgXCBnGZ4f4o34Y6pG4HvnUn5xShegmsCobPtuACj68j7C9fdJrHnd4Ry6AWV47eGM",
  "key9": "4PmTsGJhKnPsCG62JuFbaug9pDgVNoRGetHX63qxEUHzbwmiGPmJ6GfVhAmjr5YkBpscYAnfoyRN8kfpPhede7u3",
  "key10": "4Jg3UeGeHyQ9SVpPf8pSPNkzp1GtS5Sc3rfKrwzJHxmJSQhH53fFXHNuGju7V7tGcPUtAHDRhBwRddx58cW853jX",
  "key11": "25288SvP2gYPdAcPXcrHjS5e4ruvv9fbbyf2qK986AmKMeMwmWhsyZQ36bU57pawtpW4wdTWog8erHrqQcCRdkcM",
  "key12": "eFDrzwZTXuH5QjksZjPZpXT4LEbvZM4gT98hnU4YUDzGWdj3Rbdr5vV1o5Jg4asEdMKgWzRQdJQvco7qt7rAFpR",
  "key13": "61PTQSg9r3FnyKX6eCRhb8PV6ZaWuXCq1cxH7BBpScCVnbC45bGEmpbsYcGZFFfpGLFtgh88vQgnNY4sriD48szh",
  "key14": "58TSzoxV8SHdF7bQvj9RNFCtkTMTqAAejKHHzyMm85wvYpXQMQakCNSrsptqnBsG5s3h1YpCYBXsMwKDKZF8aY5r",
  "key15": "3pwLXefDpPfVdzra9pkS2MhAcnGwFMRsc1CfsySrYZwvrsXRUr3w5qW7EbdUzsDUJWRiHjzkxZzqGLXAmJrrg5VT",
  "key16": "44oxgicbx7LnXB22wxjLCDcpcgqFu4bJeK3vDy5RdwokabTdPRFic2wANy28RhUvSX5ZdKqhqQ76s19J6WBBMpL1",
  "key17": "25J3V6tfYnZTZisWzxW2LwxMCWHoWWSTrvd7fTnGEsMuiUwiZrZqWRF41N6C3Ltwrxh7kcYjHd7qRnGcuKyN5iZD",
  "key18": "3pUCo46R94JXK2Zka4o5vvFPiM5osacvqSFozXsoU9zmH2ABeBPAFsqcNtAdD9az9bA8QWJDvJa3y8HD7tZPD1ee",
  "key19": "pAX15WWd5GqPhkkkuaSngG7NztWNdQ5NB8BLge4MECg4uJspG7U5DdtT97X21HU4p8ZYLLYvjuSreibVFJk1obY",
  "key20": "2nLxnWrS21T3DckL7uxMmJEw8aNcCmPP4wzBg2xrfD5r9yFvHAWjdHdnuSrtUN78djpnHGK8eZKkpwiYyz2wiW17",
  "key21": "5NessLpuYN8cv2aARtjLCHAdiW5hVKdwkbdU78fA1aWAYBeSZUfCL9Snxp9EVaoPqkmLAeAFrZWGxufFXekNYudE",
  "key22": "5twGy1VNAX79DiJjkEgVA8aH4ZPZyV99UkmF3B5tMcMXAovoxwbfwkc9iD5CSuTtrveML1jEdULBVtH94yPy4NGU",
  "key23": "54m26tSkypsAAeEcWPGRhANpETbYVZD4yzqyErZwbuBmDKTmMGbiqmY33wMr1rnnMwRhFhR9KpnRkbFuuq3gDsny",
  "key24": "3PicM1qfba1gDjqenWSM1s9zrR9UtFu5xsTUqZjPG2GEJUYyezmrMSy9BHvsbMp5778iW1qcraxsEoCUuEC9k99w"
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
