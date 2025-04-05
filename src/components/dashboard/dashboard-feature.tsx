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
    "4yXYgeFiWVgpfwsAup5XwE2VywHjgmZhvrBDZuB7p5e3sSv7Up1UfMiiJCZSK5CdCXD6RGkB1xcEgavdkcvp9aoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pJEcsX8gM6d6bXDsNrrFPgMVXLbhtCn6aHo1WHrBrto2iY3Uyxt4fWtNP5xffU8PDtg21VnEY2YkJojcsWRrjH1",
  "key1": "4aV3LZsMPaALcXD5TuvcKC3PSunwS9JG1VtGzwJopeXLaJuYFB6rBy1HDrKTxmLFesu3sKH5RDcsqNGtT7CbThCZ",
  "key2": "4wQqENfsqk298CNZLVqV7bbUqmjtF2xgh2Hz51dPyLzo5cP4NYheseT8WK18dLduEdePRqmzcmjy5RPU4r4zhnAE",
  "key3": "5LaEFMJP47gR5jyendCSW3ibFhLcfip9VP3d2P3wmgQkrvqkgwfzq5W991EGW1jDodFNH6Yhi717BqPTVYP6NnSi",
  "key4": "2uLEK7UBx9mfv5KQSajaDGfGfhJfH4XqHUiwLjNJQYRVKf1fbvm6en5p2HcEhjAryWhAybdobc8hxPSnpC36U3yA",
  "key5": "5YK2As5x5cQKbaq3mf6Afn2r254r3SCqxUJEDMsfw1PTt3MZQwfRPLvnwU5ywniGM8NbX4Zq2unmhp3x7HiHSEsR",
  "key6": "kVJ7EbbyxWGAjZHKYuA6XS6x6GypzJAu1tgr2NWESP2ZA7cQKhVVfqcCqfSsV8HgrYuNC9ZmpeyL6MnZEokwBuL",
  "key7": "2WHGYXNa3auJ1BGa33njLyQ3LryYTCw7DyCvRruCaGEVvRXWFFqhAEcBN5Fmt8rZfA6QhG8xKgMQMUSCW742Np5L",
  "key8": "3rWPVVFP94xJzpKrQb5uikBWsCH8t2sreBgimyhjJc8zoWK8JyrEUoCo1W71H6LJHLALXeRvvJkKss6jPZKLnHg5",
  "key9": "5sLohzTQHSc6mR9HG3VRYLHTo6rb4PtQme3kmeeQJ8bWGDGsothZRpYR334p3o6Quu59yLYPGKh7AwRrf8dyRouj",
  "key10": "64fRcKiirakSJJJGWah9YXfdKfNJC81pv5jTgRL1W58vQfwsbhsYt8cYsRRRUiDjMpSR3uLpXwCF5Hzo8FbhFi11",
  "key11": "3iDvvkYhifCXJuKrwgLTGPewoMS4DtioEjiZgKoVEMZm7xctEy7EPyhDUvrwQke7qPCVZuopZ2PcfUqW6qujgmrv",
  "key12": "3s1sW5VHZZ9BzvYoyiKYv8Pt44rC4oZWXURQcWNpznnPAfsywQb4g1YS1YpmuyX9BWsXzqvju1YuCNeoaPTvbvvq",
  "key13": "4NY7whu4s3SEGXaFjbirLZienTxB79Ef6VTHJ2HvR7FkJEYQe9e44dvX9QSpsuknWfYeWXpzbKiSSBoMzUFNQziP",
  "key14": "576Z81PggHvmpgKNkSNDtVQgrpddSf6C7uWgLoLBhrryWjHNFk61x5TpLw9j9SGP8KLHSuJwnevCeGVyLAVQZD6S",
  "key15": "4Jh1DxKnrDW8KRQoXAWh6ZjNoMvo9YcCAEJzDZD4in5db9aiPCFmwEbCxG5qLNsbF4QLMENt7ubXvYCdtRjmS9Bg",
  "key16": "HXsyNE6KDiLHUpJQyEQbQfTT1XzTLW9Ex6pd2WWwTYgwEHFjmyLpdgVeGGvAeM44VPaAjU4ZG7uQTLMG59jJbJA",
  "key17": "2xDfBhUBXe3mkm8BSuc1BatFJJUBPzrQnweAzPuWnw7dDML5hee6WUYecG61pus5VT3x1NxnnWRBx1GXnzCpjEmb",
  "key18": "4SFsbjzUVhdrqjzfxGXnPxUPPBtRwCdMjnzf1DzSut3nKMh9eZhUy2pHzbby4R3jYxwNWnKesderyPSVYAFiL87m",
  "key19": "VyE46vcPy2JCTzaTDBmSK8HzPm9gw9CS4W6gmQZ16FFEw5sTC1DW5WHwWDvGbfDgJEXacp9SWkL4dt3mLUxEPwN",
  "key20": "67RYcvVj3mJDRSdvr7qdExErtFuVUxfmgpQm1usugXQ7ZopyiKHttAJZQWWMi9eVBbuQGoiHtKXo75NgPtB5U4ua",
  "key21": "3Yc5Z2pPWo1oqKzXBTgvhBmBwS7MxiuCTdGB1VHGh4UCgKYuMWcQQpV8ZK2QFaTj71V6UhoXSPVVNM7buibyWB1a",
  "key22": "2a1K8918VV81PCbR8jSbyTTukPELFFrU6GvHa912VBSQNeittkHXMmWVfavKFbG1GaQqak7LzajNSoRxpYwcNu26",
  "key23": "XXhp2zefMMZS1Evn1njgBDcBRrcBJgFvSBzsmqLByaYzExN1pMuca94y9JpSEHM9YBtKbnsBax2Sg6gXHf7t4dY",
  "key24": "2yvTdzNgJWMvv8bTkBxS3qLpTAmEZCep1qMdWjERvvoB9cZ4tWi5BfoDbGvvidkpk6AKohpEZV7rqEbD4eHrdiik",
  "key25": "44VENwRCrQTFV2VTn3hD4kBj9AEvRnEAdfpjwdaWgCTJjWqbc1f5qCCaLNckWmVRHgnuQrDqurG8PgqYeLkdwiPx"
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
