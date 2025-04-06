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
    "2h27SHAzEDfD8hHfBXuX1mbscu73DF2XWRKzFKNsRRMbHSUrwTsZMWU9krUD7gAfcrN8yMPX466fRW5wtj715E67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9TQMdwqmGeNBdLnWBcsxY8CpdCs1rpWGAG8mT4vrkheJcc5c5JaHLYqNXbnjoKUUhLNyFkufsEPDu9v5dbCdzg5",
  "key1": "3YvKQ8ED5hBwAVt6RZUsyn13SZqHQk7kD9iXfqmyUYMke1KukJ2roroSz6PdKRE7AFDZ9zmhsH4SoKiCNuYjuVbV",
  "key2": "3XrL4VyauamS9pksaoCYy7bZARbZPzwWbWe4UPtpvEBkZEFY3RMcp54rSZhJfbFuY1mKrjDxhVrTMB3XzSrHRcmN",
  "key3": "2GrLpcZ5SCqbWKpikuGXCWCzjBzbmazBBnj5cCranMh4omS4XQSQ59xayYGvXAezegoDsoZDSH5dbjLaeVBMy9tG",
  "key4": "3R2K39inc8CF5FZ6jkkGE5JzhsyuUm3TfMeyZZSryvxF1dHv1HHLxtPzzQemKaFsg49Ru1mjpMViwXjajHPYiShi",
  "key5": "XeEx9q56Rb1vJVXjokrNNwPCanVKGXYNRHNx7xLp9hCuEfSm6zZvF7nAEfjBxeA4qcykZx1xyWjafW9wojZmTmL",
  "key6": "PJLfrTg7v79WJMJQg7ZsWYPgLQoZSAtzzwBrmGTS5m6s3Ev9hfxY2BwCpKVJ4tpwYVjK2qdK1jJmijyxaa8mnav",
  "key7": "36Mq5pnar2pwMKagzGNWkWRVM8viC4pbbTZQBQbA9ijd2CTdULCXw3wqWiaqg9jFBB119P51quhuXzU3VKkt8n28",
  "key8": "3Es8YLCFj1od5ap8G1cP8wXtbWhmXEqfY3uKnprqkuBFhfq4dbStHXJG3HN6qcSv1yNC9YktFtqwGaJ31ac4vt8r",
  "key9": "3fSqdngFKDZrpxAk7vumCZzmb4ZmdYEsW8rTNm32fXvHD57hFpNXxvykTdHmbBioaKrYe61z99AqMjdqxqP6bgek",
  "key10": "3EcWK3xcXACeWpHHGvwE65uCiyv8Ho27PcyyLV3bjKfzVRz1ioNzVuDbjcp2y9xiqxFf3irvvAvkyFwR8JS3HEpo",
  "key11": "5BPHnh2yLcvNjJ4J3FhMQJFEtAMcH4D7wkzHt84ANdhzifWDtzKBPnkSisvWH1k3bgqiMAxibdRJKWgQeB7Z5uZJ",
  "key12": "3t9fACY8XDhToPcs163z5Ks1hMNWfH9rJnBUUNuTcKNH1ziYetBkGb6B6fyLEr8tNbo9UjJsvJS1yNw9iKQ9EMgH",
  "key13": "2pGTEsAAE1qBVyhiCqfF2vkpjtY8WWPzxfYVmMXXKmeNucvWbPXfdZM5ZyAiAVkiNZEcTAqsyxFL5V4Hpxq5PCNC",
  "key14": "Fjo8HWGibo28nHdGjs6DcR5Qa7fKc5Y2fccunin8zj8xQJg6wCgefVDR9Q1FYDffsquNpUpb26ZEX8UYB2Qet8M",
  "key15": "4ecZD6acpqxTEHq9JEmAnjdbDBxvEELPGihvW9KfiV2J85dPpT1dtfAHi7UERHHpf4u4BjXpXVbDNfXZnLeLRVYs",
  "key16": "5SVMfAPFgk2rHH7PB7mRqbgA1THQ3EajUCRSNFos9d2zUZa1o3R8mEEjaiFZWt6HrGkuzvCUfQXUv1yrwvu5rKJb",
  "key17": "5J58AgeA5vjBTJSRZZ6QQUXSww1JgPPPYZpmMyR3vhJARMc3EsqawftfeYV699zGUwvq4iryg3gxsZV2vSHUYszT",
  "key18": "WhrDe72jhKspYnm2MaL2FNPBgA14XKUcbhCKVivWAsdpoaamsY8W19FraH1E7QFDDVNVQBos7vVz3zuLV9RDwPk",
  "key19": "ZKTk34eB9Ywp2RC5Xb37PUb4aRJic1Dy9rVrYG5vSVsmv7VZ1K9wn7GWRRaqQ1pMxXr2R33nAHA3FWF6HhH1D6f",
  "key20": "5EzofNwGXQzTPPzivaY8RYnkkcFsEdF9AS1m4ndR5jAaduG3Hnf8BBJrKbc1T4gb45Cif3uMczeeWNghhxB7FHxy",
  "key21": "TVQS5BXDx22TaGtrrCQoZk1SHz6hwz9DhBs8UhQNYM3Dvus5nhNgCDs9L1AEn47PY49NsniUoQVCNoiLUGLNpk7",
  "key22": "55WpUNeaKjBwdJvzohTpH7h8S4ZAjSeMpm9gYxdoFeHWztq6NmQiR3RkubFX26X1rhDBW7CeiqByWAkS9MU8w6Qd",
  "key23": "2pyQovoFYgWsgWVTvZt5Ek7U26MaVeBvEDeaPGQYhWbTogLKS8T9nPRUadZkfM39Fu6BNDiyea469QPCQG1aoMSt",
  "key24": "25RX9LQeCj2XjtKFrNDT1Rz8Zs9dL951GthEPp4NLuZ7yJyzyiCfFtFuAy6poPjQj1gK3GdYJ2vNGLZS445E98ZF",
  "key25": "eogCXLN1kY67tg2VpRRvuSHvEfNRej4QAS5qxjoxxpSzgbFRCrYnQYnwWLoSQWrVbx19SYjWNAju9jQy9ZtTtGG",
  "key26": "2oo7FuDWY6oCiHEi4zvwKBsJtV37QmSXw4Y2R8inZrBsvLW1EC8jKxy16YA7oeuZGmojhxpGX3K8QrgQNGTJ7No5",
  "key27": "3hteg8RLaNQgktzzud19FgioDum3W74gZQMxeYRY9AktH5tfvCr4Ghkbgt5XVy7mVenU9JT16tLdvN5bZ22i2Upz",
  "key28": "5fi6EucEV9bEJCVNjoUBK1TRXTABfek2PVTRt1pdPSyZ9bN95y3js5QXskFKsCUZp9VSReiexAXqiqYKqwqpVhVt",
  "key29": "2AVmxvm7oJALjqxaVACSDzpZ2Za8FVWwCFt2s4pd6bnee9rouo6urxZL9daQnbXmnEtQcWMW1W3mJgWvCW6ma9Tr",
  "key30": "3UcwCgQXuv5oL7BYa6nnR9efaavHw6z6BodMcd24ToerKXrXyudLfD2v2hUn73Ns5hQwmnJ3SfUoh6Wm73ML7vQY",
  "key31": "jzPLRRpaL3JCkZJAaMd9foyfYM1TawajaPEYKjLLwHY83nrorRgCTD4vNMtgsLaMPkoNyaTUvZYvd7nd75xAAeP",
  "key32": "3xL9eJM2fikkoRMxAnrYiY2k97SayZSJX2pKSEiW2boG1dWz8RhTM5YQi4czq7jwv9S63hBJd1i8yhj4WBcnFJsF"
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
