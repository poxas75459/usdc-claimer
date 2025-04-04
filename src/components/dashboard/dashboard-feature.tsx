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
    "5cvXx3xTw9v7QJbQJNUmnkmWbnjKp1NjurwXHsWovmEvBLWriLREFwKbzBxXrK7EFt5Ai4aQ4zj9KcvL9bfoS84t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i8BV4hbHc3UFDnbCDDbPLQAYNZeuzm65Qt4zPZ3ysetaxuL4HAne7zgEyCpnzuSx4F4XMSeFA24xjWjRGQj2R4j",
  "key1": "3EmUQLV7rr9V9WFCkSRPVWG19GGFi8hyzCvkUc98i3KRufJaQJjXTC1BhfvuEGGbWvR5SbUmsLgv5QvVajoRjQRf",
  "key2": "3VK2F1CbxKhiSr7FxSeuJVprjYbBtyegpdAUQpG8kVGcc4eEg8LpG77LeiefRojHxtSKmm16dcBCiZUYoE5b72ha",
  "key3": "4VJWGyRGkNUrj2btxtaqkkzy35tWZWAcg9itYcmftWTJpzkMbGAbkhEtaFpcZthw3HLXXJnbMaE8XigoiasKZmtF",
  "key4": "53esSX12mcrB9uJQW12vwCU1qNAcj4LEpMcDhXJz9fTAHWXeTZDF7WF9AadoX639fZmUygQWCqQwb4qntUP17Egk",
  "key5": "2QB2SSp6Yn98NxUqtDJ7W4sPyfJrpJmuAWW75UwjiEnKm5zujRGWNqWD762t5QDvPy3KvnSbcXhk8QqT73R7BtcC",
  "key6": "4jan13gG3EL6Tq8sgYz1UXdBRc63mYCyzNmu6K5Pv9XusgWPaRu7XCgwWu3vyzXgTVLczx2XqM8cwLYVGJM1D7N4",
  "key7": "3kbs8GsWSChaKMvo1fAvcv5d8U9iLkZ7YSwGV3q6mHBCpFgpJ3BRuAh3fpnfd9scqqLCYcxdeLMzaQ7odqPQ6gtc",
  "key8": "3WXyGK1fnvFi2PyK1mZhjrrZubB5J2mNSKJKHYUxqPXN6xMtohDEW9KpkmfPmzwMBsJKtwZhMqYPHcEyHjX7CiZj",
  "key9": "XK7S3N2BkTwo6LD69qnjCP6xEABSCJcb9oXNYf1cSTP4tGBdWa2GQNVeKsNxxhBHYDfStDEDQtz4tZnvKjNZWMh",
  "key10": "2GvFkKg1pnDrMMaR8xUEy5VkHY6QSCnnnqPCMmhTEYdiW2E5NF8pdhvhLpq9rhzYiqUhs8fWf9scVoAtHqeFYtT6",
  "key11": "57sRs7qPjux3oZ6sVTtqj748CnAih56kuk3Lbt2yVFz1YYNhtjx51zJZTJ6GkTCE9Bk2fQii19VhNakMVRiXEScv",
  "key12": "3xMn11JE2xTn1j2WFdHKntkaiUjrkp6C2xG4rVVWMhiQ9TdsNKp2gXN7kTtKwe8hUzKzv1DUetkfzzQYB8RKJKA8",
  "key13": "SX7kD1KqtYFSEDEYimLm7EAsdHiJjhNLZ1FuJXf55ypMyPGXsPhcsJPdSw8pqmCUjJmSKfWxGJ7s6CSfejndPWk",
  "key14": "2Qx4tD4JDTdYmQmdYKhvdS3K3QXkVc8xsQwHFzPXbGZ59ZhmSfBrn5aBj9svh2QRjK69wo3apGXgttSr1H7RfcEj",
  "key15": "4Z4PMnarxRmX9m47kx4C3WENKHhPQa5TA5TnqS6QQ7iQseierepKYYRDHiKme8dwn2Gch6YZzit6xg1zzHUEwrBq",
  "key16": "2sh4cmUvqbVzZfZsPSxt7QALohxLdcRFMzdAFgRTW2R2nV6z64AZDebLvyZtrrNfhrPtVZ5Lvrrhjg1xcVqx1uyf",
  "key17": "2guWLbpXcTVoEMC8Afg5yzU62aUvN48YFqC9yL8hQYAVHxEffsLPkReGazLxZT9xEEECRhFvFanWFJoPUfaPKy72",
  "key18": "64aTfZzCxiJH14SSi6TUeJsdpcodBLHo1cmoaubtLJCLUCDJ3xz8MgUzjiY6eAUx72M1nm9nJXcaHJvAEw6snaSa",
  "key19": "2r6MALrZTACYwgZdPdBuWBE32HaD5ZvAoFtdP9a7nfDCNxfCjBRDTC4Ycbw7DBSSVzKc1uwFDA7QdwA8qQhSxsAg",
  "key20": "4riAnvJAWzx24bojJjfAcrKktLfmv9vNFmaTXuakHc9iCUPrNonWKwSKQ9TzbHPqGJYXDR8pxwivtdZ2FoHZn89D",
  "key21": "3aBza64iVSaLTyiqcJ18fzjHVw5HAXxo5xkzx5BrKFxjaLW865fftechQuvDivw6rnAjr8RD4jRXHWHmAYa3vk3c",
  "key22": "5Rnd456bRWLxhvpVFoePZ79UX886xgFhWcUruHmTMjCQcd6FdUQ893pdFZiPR29EYeeXyDW63sVnbMjhsT2h6iBj",
  "key23": "4bF9VNqTPx8asN9QPbjYq8CoLvxCH44KQM5FXzrjZqrR4hJX9Xhaf6DqeRNoCKn93Hrq5y4RiJFCj9tr5oYcrdji",
  "key24": "3y9wV4wApAiL67MixXENQeWVPcH8jhpYxysiS6TzYoXuypNw26NeH1krK5dRDcoVGRBooriBHcTK5XVDfiqQry1H"
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
