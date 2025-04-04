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
    "CC6HCZgWbAUZFcXYZWqVJi9VHsqUq5y4E9qWLw6SzVLJzVW7vhQAyGaqQfxAbJdK3d26pThuf9Nit5DnPNFzvn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r9s2RzRXz9APQTQJ6KxJjWrn2kV8iNKkZdpw3PSarJmVBmKYDaJjr2sBbqRvAb5kjY75quq7AUXJKJtrYaUJbCD",
  "key1": "5HUXmbZodupqHbF4S7NWg5GX4wCrx4yrDawZ4za8SFDiG6NfjAJ81Pr2jTUPyiCyYtGNvKnBbeBMSUNaFAvadWua",
  "key2": "3KntYRWWERAcj5nDANmjYp64x59erWjYAnCpc63eSkW86GQzceehcLv71EdCVLPSxdUiEnUXgJVsAFHyWCxzNkoo",
  "key3": "2mQWXF63D8TpznvGCp5QiinPr7RGX79qNP867y2Ly8BW1ri2JNQ1RqfqUuZHchhqokYCHUQ2MVWfqRMqW38C56Mf",
  "key4": "5etmNUES6p3frBnF9hGp1E87rXMRHrehKXSiNThqYPo6ugmJyCjgZ15HWAWM4mEWCCgdqKtpkuNzYxPfbE3WVoD3",
  "key5": "4CWVLaA2ZRfqbGKbhiq2naXnL47ceXry1BEz4eTTdJazNLc2WTx8qUacLCJFmm4d7nDwTQSRBNt83zZuQNcELymv",
  "key6": "EGUVJyJ23uNWiCvgT45hxZ6rMq194t16YhTrdUawECe7KXBrRJQALWiUABDqPgfUsm8LiVHE9jEex28eBith8nz",
  "key7": "21ksY32A8K3WiEjNX3WizuMx9EKJCyyHMzj1FtWMVWaZZ6hrjhhF7dbsgodTSSjh834KLkENTWWkJWUo2f5vqCnK",
  "key8": "3pu9AnLYzX9A7uwcASSMmWYJUXgsvtfv8FonSbVwjEHEVueycoD8c6Cf2QX2izmPZTTrK63YhV7skYgeF6iXpHF5",
  "key9": "5eFAtMvqyVMwvApKGvmn2XVtBKH4HCTpo1LkpXBTUM53eiuMMFQJmDWPj7sG4KhDr9bkXNhRqbyorHsVhPSK6g95",
  "key10": "rBiw1e4kr1vSLDzyL1hHiTtfSmUXYZDow1Kc24wDoqQYCVc3QczEgEM9zqJER4NEkg9nM5dJQyxAnNbaJxVxeEf",
  "key11": "2JaLYKgV7r5xVe1R2DWdRtGt1CV7vU3bLXD7uvjTknjh3q4pgUD3vV34HfeLZPrXzFEvvqhbas5GBHAoEmSTuCyp",
  "key12": "3Xf5CFtGGug4xPHdcQJ4piP1Z1xyK3fTECyzJRyq7cs6kvUwKiufguihR3J4M787A9agV2a5suc5tanNvhS9c1sc",
  "key13": "3PFRTGNQ1x49Nf1Kx9F6UuNNerwGxd2Bshtj61khdG1zPptiBaCURQCaLTmWxRpvxLYJRnBmWvB51uANCJWJLDEA",
  "key14": "2Fr3acrgnuaR1ispmCtzVuuUT45J1STomyrVjuhBK1LZ5uWzhtWEKnNrQ3gkQ6cN9PpsTiGZcz5HBznYYgdjhk3R",
  "key15": "7saSDHE2UcbZFwBSZ5AEp8xSUxo3NcBWc5saDz1azUPw1VCNuX6j7wMU4VwiewPNrLdHpiUNwdY1DuQQVN1yKB1",
  "key16": "51BBhkp5zpXd2p5ihBJ8ZNedVEc3URt4Wt1yFMzyoykWy5XF3S29GZC9v7F3LoaDZPkbFD3N5z6kpiSLupgxQwA",
  "key17": "CsYZCVkN7hxy9mpA7APobgMWBCbSg73CsbAdMYy2hmqYbeRAMcwDaou3QL6TqK4WrJp3pbkmXFLVCjtNWtKdewp",
  "key18": "2kEdbEwbUWwpsm5M5sywz8ZyT3yMCd4QLQYfphjaEgsB7o19DRiDMmCqusHwf1ckvmssRwhB4p1BoXaaCCo8aHSw",
  "key19": "2Ba7ak9dZ7uyuULAbEenGP7wq4C4JwxWYcgghq23qAdMV1V5fs1GwqqgSwVYRA6GRtGPLwDjqHdGY5xdQ1jsQWPw",
  "key20": "61LYvkRjZEuZeLJVNLQ887dhdpzfKYv8P4sqymNs73TafQ27JsT8p7cDh3xW7RxPKAtuHXHuZVqbm5ch5MHViGgF",
  "key21": "4J6ztgm3yJZBeDudmrKouJiMG957zRQhVaRRvxg7yv834hchGn4yeKQSnck3xq3rJfENR2MYwP7tewMz2FJA39me",
  "key22": "5Bqo9WtMF8hPZznv2WVF1RrJpAGAT6U6dnSDDVBvwgd7AJciGwcByheCPv7QJwSyRgkyDituo9qivBt9jEDtppha",
  "key23": "5vn7JPJ9vVV5jxiWkNosJNJCohZwu3DQ6BawEpZ3m2xa7vqa2rLC24nnM9kvzCrKwHvbYrACgVgCvjoPnesYxnmF",
  "key24": "onNXpW41MwEihsqS77wUwny63WGwpouJyf3RLQCwd1m39CykqoHgpnZ4RWiz2Z1QrF6HUoPpmwD2836sarovswk"
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
