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
    "5PesX72rj2NyC36nzv4L74i7qnf7BLJePcmVXsWbsTLRfg8Ps6rtjLzZDaXkdYbENoYe4ZPjuHPBokGU1G6QmYNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mgLRWV8zf5DSkjTG2i9AbR2YcuZRXYrpbWE8BzdChb7e4yD4f51vH9csJ164w1q5JPNzaBzV9RLy6p4fWqaj6e9",
  "key1": "51kvdTsTHcArAr1c5o61G8kEEw2xfz9NM5bQnqSrM3BwSf7iPSzeemJnRShBj7JfcsrUjQ6r8gmPZ49ZdNEcNZ7c",
  "key2": "3nuw4gJAE2YhrU5JzhvukKkL9WGoaBmDgqFNLuSRkQTSTr4fRGhoG6TxARTdHu93PHwEExLbHWvPVqAYSLpFBSJh",
  "key3": "CrBoBqPzCjQViYzqrC3bHYgyNAq5NumPs26pEA4tB9hMepCKTsu1xiynFiUoZbBfq788SsPvsibngRek1LWuqzZ",
  "key4": "53U5nUmCZKFK8ZZhgugYkNpYu97pJMMpFSrPEiAfbjTw7EKRXpQ1Cqxt668W3wL9v8aqhHDL2kZoSFZY9XLnfo3L",
  "key5": "pYVWZGMFUXRrzZUzEabNgWBgCKzCcDwTn8jNYX137o3QCuU5tVjL5QCEuxrKD45mXhp5v92c6VfPBWQxdzGwxNU",
  "key6": "4SqEjUKVgWp99kRkajSUXyFCu1Vvz7YkVwnV1D45TzF8SgAHveu7Wntkn1tFc4FWnfzvAraXz2s82fKFD4as9PiA",
  "key7": "oQja4Zym3hsJmSifPB1zjpeNMZerP2jrpkKycKTGR2GW7of4XJFraueAUv6ifmEBv2Kqw8vb4mpUC65cs1L92X5",
  "key8": "jyvL7zwfAmhpCnciVgAb9VM4frBjapW39dJTSLpJTnW7TyBbxoE6pYB7KdCXsv7q3pFTYmAv61eD5dQTA8uL5yu",
  "key9": "5coo5DzsP3AvXMF4uCJcmcsWxFoNeCuKLjZRN7SLppTeC4TGaiwXQKcPDPwYsU5DtyEPtRBp88NN9yrajNoZ388B",
  "key10": "3HYBLx1Doj77agZJXL8o6ySKvKat195fCdyHLpUsrMCC7F1My4Mdz5Aay3veDqoeTooutUBm4aU9WhCwMigCAJNd",
  "key11": "4dpah9eEpaS2xTSMFuvKn26VhYvfW6csE2DgVxmr8FbGKtmkdEa7ub4w94G2qM4aorupSW7ikk1KQ2CzRbLAzwux",
  "key12": "4YWUSu5wnfXa49zhYg2Sp3am3YUTTewNyo8WKVFrgKQpvNw9Brm8AzYX5YFAoRc58wzHLSwu3q4bMQziEBrHzwAG",
  "key13": "53XXKC4ojvgDgJoHXB9jzwU4tkGSM4mhHu2UvLNv5LxLmsHFyJzPKMqf8uEiccvdLcjSbZwySzr2nUNv2bfLTjFg",
  "key14": "5NziuzSWUESfCTPVoiKJGQaPmaNa128JXVApGrKLVDdxF89YgTwDdkaFrQ5f82XeVqNdShCySYmXkNKFtqxfhKGp",
  "key15": "zNnt8V4hhm3mDWM2D1QU8KJam4KoFqk7pD4NZenKTFizkqo3p3MZEyXusBdpi8H4E5Rj3bvZiFhxfRo9hFzrdYz",
  "key16": "3Dd6W3ZcUaTSSbh8mQViMTPUUSCqXeKHQCWa6AYGpeFV9xKjefJxibGqva5yeRyV46gcrKASS1omdYtoyc78PJJL",
  "key17": "3QnkDyFVTRCqBfvNVefTGUmCyDDrr7ZdzLLeKedQwmoBhZCvcoJsfQstkmcUK8dXymgBwXenwJ4Qz93jZSGSPLNx",
  "key18": "2RTZFao4aSvTDttaEToC4Q3DAozjV14eW6oyA8kkcE2Lg4iRRPBYkdzDZX9J8c8TFqfoCGreJoeTF5Mfn9nRjANi",
  "key19": "2CVjTsHvBGgCqk5dnPccHomWzPUEueNZPu81WhN2EfW155L3fboDbJhMYwtEb8MtUAWQ6fQkUdqo3sMK5rkxedgt",
  "key20": "3wxw4TfjN4QUqjpPgvcQEkCh61okkPdChCBvjSsPMceghoJEUPs7kKScmpLJeB5WUFW56Ks7ZBvRKywWQkdPXifw",
  "key21": "5Yu8YoGm6eCDisKQK2XwS6Xe1VLjX95e5i48ngLK5zsp3yUYNpFFSGyyd1HUSQiedpa47LdPCSd71NqVV49MwCJ3",
  "key22": "3FnowZWRbxtEGZEQZg4KLdBn9rHRMQr8wjNq7HUTWLDtbo5KwepcRuVnNk8jezmTM5z3LYZszxkBht79uQcZroef",
  "key23": "2EHdZNiCyATWeBKUWYzjMGLEf746PpMBeGreE7FwMcStQR2RkJkzVtTxr8tas9FbpgjsA8vqsNMnNqt8J9r3rYhN",
  "key24": "4XjFjBSK1aq6ae1qL1RkD1sC5nq2qnbnNiaQu9y8E31nVLGjSvkpfjuyTZNoexuH5vVaMM5iV1vTedvBSqXosF98",
  "key25": "5Nr9SHj5bP9NCiQvagzUr4trSMS6y9ocANCb5DX3UVSvo3gzfbcUmkxJ2TZkb1hApEJaWHq3YuthgKXfaEWiuqWZ",
  "key26": "2f5ZXyYvnsKCiY1rWaB77ATrxR7vvW9o3TcdKLpUzVgWHWyfaDScMW6M5pjmSuwpYKL4Jgr4FTqGoykjhY7NdHz1",
  "key27": "3LL17E6WoVnt9dHg2pz5pRyX3vdG297EEHfqBTVFaFrzwbVHM3ScZEpZgAMNxGHjhytG4KAa1yVuVb4TAd3X5QVC"
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
