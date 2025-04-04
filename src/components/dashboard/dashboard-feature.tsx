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
    "3MZsLVTfWPf55NNdA7KgQdviYe3KD5Jv3xjd7vPvAb3PhEYWgkG6mpa52L668wK8jvGHzF1QrqJxht9jFArmneZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DT4uwcLBo2BGhX2aigCcbVenBdqFUakFEJYJqHCXjptrJpjVMtNADxssiebiso1ezzrctCknkKwvSc4xptVW2QS",
  "key1": "vdfocShHSDSsmxs4JQL9Ca7MaXWpMTBqznnAHNgy4fa5uqM5LTZBu41MBYG6LpPuJkuMYay7YWJAVnm2epjJWP1",
  "key2": "4jeF9SVJu547USkQHJsPaEQJExWPBvL5wNYGmnkEdpfN7mTSNf9AGTP4e2njtDKRBU8SzBs4WZeaXZbwMhRuehTg",
  "key3": "4L3mTdFVu2RFRVfp8gvU7LQaFfagsAPUniD74mbB38in2sGoZ1fAdiU3VAKow6r43MA9USfd6KUxyNYhCD2bMra3",
  "key4": "YGzm5pyeFF1tT8kNqS6R5UA3zYJeAXYDwECz8GYwReF2ZajpqfpfigdJ5fLo3StP9WwyPjj9qJGxqRBi9tGrNrG",
  "key5": "5XA4sWn5TfFdwDt6AFr2SzKW96u9yE6GC5UzBYzznZmncZBGDdHXSKqtKLe7mjNTG6RJWPt4ajjWciw2ZhsAbNEP",
  "key6": "49TKyaj48C4UDKES22SUwjbHpgpBJeTA4uoo8iELWrkcmjxbvAoJmas6iaKaTLFcD6cFFMoGjt24fMaLfMogBoDH",
  "key7": "2AHc6dAUjNSS9K6AapR2rjKUbg47ssgJcUaAKXheg8Tuij3qLHm8fJSLTdojAMuHLHSRGLS9QFSEdMBNW3c2Pm3T",
  "key8": "4kKE1on8LyiA96Pskr3kSeQPaZSp7WcfkWrMFCGw3s5rtq9UC2BW9SGexjqQGP8WzmjWoKgBU1uaxjvSDU7S8gE7",
  "key9": "4qnL4jUTsqsFspRaXkJsfhihMDNiEvoHTmqoWHUju65EcGo4d4zyiMCMtCfw24eGpQqtiP3ykKXUbQDQYTrQCYFq",
  "key10": "38Xtg9QxTfgAPXoSGj8yiGKCRYL7ahans9S9pmqNvrHwaNM2nR1axc9aC5Bj9girLMQdnyhTohAdB7zbpgfpVM9k",
  "key11": "2NzTHh4wtpqm6pdZiqjUiA1DfV9rgVrxv1W5aR9boTByTfAkhQAUvhVw1u9tGAFHscU8wH91vxk5j9Ps3WHyau5E",
  "key12": "5wxCYmzPmLYGoyBqgvD7wmV1BoQ7eyP7QtT7VV38G9MHZVAKEwyhHe1G6dwwEtmc1QzbyhQc2214gFod4cfDW4nn",
  "key13": "5cZ1a6La9fx8fuXsG7So1YBQB9EF4ADgyWWC9urKNXbhVSiPUhxS71Ugjvar7TLtQvrAHxxKGwpyb7yQHpsH1wEM",
  "key14": "5ydJx1EMTsnXfdgbFhvPMGnizfxiahqZP5g69VWGTLp3YK1xyTzUpF14FHY5WVR8zZr759BrtmbXr2DxZ95x64e2",
  "key15": "GsD9mVGT1p1picBSHY4cnhbfm2oySWX8reWMuvBY1avuKQTTPLpHEq9LDeCHa6yJJEG74oHnWSamwAQT3jQaB7v",
  "key16": "AamN1TxmmPGHT6sQMNTdUDVxTvrzoktnG6pMsrTar6y7XX8nYYgv8bsiWpvMtpNi7uqs6EazhNyxRN1twHogRWt",
  "key17": "2Tz2ZUrvrz1tSKLNukAL6yatWp49ZeSGvipEXQiHDAnFvicxAWj4WmzD6YGQMjxMrNWbzpAtaNFEVqTKaH9CFuP2",
  "key18": "2EdFTuKmFqjSaamewV2ajj4c3eB5cv1zHnfGDQfv1ZiN4qsfXmp6AnyjLpsCQpPV8SbPREfAZPj2EjH1uTjN91vA",
  "key19": "jsMRfTM5WSkZPPoonTF191Nap9XCBXBqreDpYKQznB52AJifKtMVHEBLZceeNpEAF8QSyAdLGycPY5ajF9BQ91D",
  "key20": "5X4rwQg6KPnL1C8TmUTxm5KUccJwWJPBjGLMLBVaNmjziUi2bhy5xRB8p6zSmSjXcJGkNqePJe3cWHFu5N7fvvLs",
  "key21": "41LdopWcKNBQrqnuGta3Fp73tLW7rzes3X5Gwc8hmHQhc1p6cdytRcV2CfYXNbiGEtxBeumx7KK2j7ZmEPXmTXd4",
  "key22": "2wg3G9k6o5vuYLMgjqvGhoi198cPyqd4uuaJf4i2dLfBawjkuLt8h5A28z9Hmuux5AQUk2mKqkv9xYSvhNubDocg",
  "key23": "3cxnub6mDLT83Hyj1Tyk9tpvYRBggHxDiQtRwCAPK5sbkLR7PtAWuKU8KG4DTwtYgzJ9HHrZ6XXFTaFjTcXnii38",
  "key24": "2P5tk8zMyPNZo82qwJgW5QW2RAVoAqm2xnREuWnNV5DdFn2ykPSXHfQwRE236QaGcrroehww4GAW6Qp9rnhVxj7k",
  "key25": "2XpsZ7fjdiGj7G8f68tpBDdHGjdjryNWcUedCvsYEJCfMsFmjQk9w3wDijnpNzchaKUP6DFwPJPYdnvQ3gWCtWX5"
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
