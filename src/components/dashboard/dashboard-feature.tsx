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
    "2TDo4TKkNSDfjyjp9HSyNeFXcLX6peqwiUVTm7H95JxM7RcjV7ukyFSfNHpFyc9tRBUik7kD3gZjAMeJXvVrSo2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CLeL2v82UWPCFbmFSZyfvwcY93nCFckbu2FE2sjVvhBnaH5eXHK7hNqcivQdomGpa9cTGMFhiVzgTeWDyTPMjx9",
  "key1": "4tEtiQnz6fUrLr4soFXqqEA6mCdw6XsaMpdUPbzK1ufeALFZiPhFmxKE675WnuSiXGAaT578oik37KwvNTGbqAE4",
  "key2": "4qzGbasKnJUpkw7T7kN5WoxWmQzBbMu19CgjhrkuFMZqEF4cZ3QRV2gqcjfeMDNVPSbimofvtfK33B72mgPtCoTE",
  "key3": "5rvuKYA1LhiJX99hLRXTbvfrtvR47N9iXmHWSCPDDtTZ2HsHfn6U6zrapnU5SPdx6q2Rvbrgfb2TyeTKsBbnNh13",
  "key4": "3W1EjMqghXuMqhHCmd5RPwGDxHRDrXf1X6ECCLrgCrt6WURgURKEpMLdodoncaEfWyh5iBEq7ZkTZ8RbyRxEkyzk",
  "key5": "4yoPqmXR2Wk8DwDWzeX6uyF6YxodfbRQMV2Lrt7gTzJsfMW3hkkxdpsMdwDwaEbrsve2rznDsRDBon36uvZYEwa7",
  "key6": "3pYHGHzbBt5JCsBdRhREvYW9Qc3VzJYkfzDk2zvFTdUXUG3pqXrC3eH9LQiJ5fhsdvNUFCMKnwPqMbTDZT28u3rx",
  "key7": "S7uxLafBMCimpFDSNbYvhrvKi53R6JawZaMFWajm12HVUHzakLGTVk6tpTyCxk4SkM3y289KWS8Hc9paXg37Uju",
  "key8": "56Y3MgnM9daQNSRB65xSBQ23U5ghPBneJBou1Qc9iVHuJ9g4DHgQgHEKwUdWm9u3VzZCS4ed5VmxGP4uRP6oGyrY",
  "key9": "46QnVgSKa8G9zZYXein9AdxNC9YtCKpSNFa8rgPGSHo7Cwv6tf5CQaCcRRbX4w7ZVdED7snQKdaPPK2pBg339UT8",
  "key10": "55BoQYCEBSdWXX4yQ8PRpUeszH33Jx9BNenMAspv7bas6K5gRWCaXZScXmnvyaRUCZs57DDANo3SKC7mgyuvjegs",
  "key11": "3yMptGXtxsd5mL3iD3GpuabsjC6qjTeTxEPvXAZgvrgchGn4GFWVtxWb24iXheJVEbobKzwPsQ6WdSWbJNNNS1RN",
  "key12": "42A6gRGpoQQTBZoUmkZQxY8QicmU4RUoTDNn8djdAJMyVRS4Mgq6YHP9SPqRTzRoXa7AUJ47aRKgdFw5fFPFQbfg",
  "key13": "5ns539PpamVNWT8jc2UUSWMnibbxTi34taMminacRctuULxHyc1a1f3tsMgwzL3cRTtfi5y4AVJLe4FLEGecYDxo",
  "key14": "36JZKLTZyxZNARwJy4wbiqyE3UAu3YxPRKZf6VeU8otFZ8WGr9UJz5e7kbQosDYKNtcg8fybzdP5GBJ19sUMRDEd",
  "key15": "4LFwCQNmpdynKTcLYBKhPDSBGQgJ8Ag2n3AjF3URMJf5rHe8GY7YCNyYtxbsjz12BeddB654gEFTdKJb8yL8UZx1",
  "key16": "65FHCSrb2dzt8VkzRgRX8Qs2tTj3wbmQQwC7zLecjWWzggHQQjzdS5PCbkxE1ZeqcVG2rKtJXioN63YkUkscidwy",
  "key17": "2v6Tw4Anry7uha1GqgCUp3nBMNtRt8cCVJkTgfCcpg82enizd22WnuEg6ZPJWco6oXrX7gA3PgQTqZRj9hKGvvc9",
  "key18": "h8bB2kDbLjRC2zU5tKvUSzHNnm2Dd2N6HLF7Lbus8jiX7xSeoe1SjSwPgNxr2GzHBixCM6ekiLa4mrrPKEz5kcD",
  "key19": "5nT87FiqzBViGLTCjE1i3RNq3i9KtCrUMzthqj7piMiMzVgaraHaXqJT78QTxxZ1TXDGFNqKDP2o6YH4P4XVKBp6",
  "key20": "3Rw1gyo2DCE8bc6qLKRcmDNt9PqiEp1g8BaxwePm7kguUK5MEnkUezV4A29CRWibcJSW78Ex9csCzA41NLt9tF4f",
  "key21": "2yCZWXY6dAbPgCr84Vyvmi2w7z3rDJa3J3BmF1DC5gXyJPpLcJF5fdUDdwdMaFbJ8kYEvzByipfEJHnLsWuX8arN",
  "key22": "5DojN499pLb4fJhetDqAer9EhcEZbJ1P9AZR5YezU3Qn3HLzsRzum2C1ZQuwAJVe8DjXDdvj3bRLuuGXSjgKQD7p",
  "key23": "3WS5cKQ2Xp9Rbg8zbxXpJMfviaZPdByLgixdpePAFow3QVWm2uYxU3EoSoTn9zHHaStijYzPiK5pzeM4FXqYSBgR",
  "key24": "4HkK4sYkGppNTM4EnM2etVH48N1eL2BjfioxspFxwGXcpc9f9RE4SjvsMDk3rfAxLyzHG1JFqXwF3wUutkjjkvDK",
  "key25": "3gr3FMQgniFCLEnkgB9SVSCVinQQeBJxzVSqD4GQBVJmuQDrCW6tzx6Hhqsf9EuGGfd2AZMisn4CzTZEKNiqjDsd",
  "key26": "523LAdKKhyVxWJzR7X9W34fhUq1XQGmwpKk7KUN9dG4KD5GKoJBJgL3M9mFrsZvABiCs7pionExvEeBrCrp89Ugv"
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
