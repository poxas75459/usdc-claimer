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
    "5zRkZZGKFVSHbf8p9N2vLFq39o96vdxPQ8nCDsorgDxJEoF9QuCwcXanY5S82sbKXQ6Xg9X4KUtVeCjrwqXaGd7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tNq1fV5FMA38ts16okyzwUpmqybyyEpdu3S54V1964gFwhceFWqXsBQobFrmwnkLcAeRekkXzZg6B3pEwnAeTZ4",
  "key1": "5wHjfNxu6B66iWxSuUTGJrTmLM45oXPpGbkDLzM1QJNGa4sPHKTADHkn2JLNBudyEu9hMFuyy7KmtEs5eyM6y3J4",
  "key2": "2C9KgfTEbzBm1dV1iTbdu3gVfqYLEdMV9FEPsNT1fuHCredtAcvvs6RW4N8eYEDBE7ZA269rnuHPhtYG9kWdY5Gi",
  "key3": "5PX3LZGw1xAMW76aCjz9JFHSDUQQXzopJteCr66w3ZsgKN36acvTeR5zjqHPkGbB55kcNnz2rCV94Ny75svwEVm9",
  "key4": "Czh3yBPFs1kYh3ojtGknfUBcdrWyCZ6rSCpVgPnijLp22EqSD7t2Mk3XqST9gDv4EaVKEXgn4DA2QEJjBtFDZDL",
  "key5": "4rzXLDcc5sgsXoB1g4KqhU4XXpnuKpUeqPoFgyL1DQtpbYNTxupyxJJssNLDW7ixw9TSzSkwHsrQfCdHvb882wV7",
  "key6": "Hu5K4fME1BMGirczAmmFr27yGS3JpLvkUVJKENsd1JNLYUKqckc9Yx2m97tgDAXPnsLdUMdZourv1Fx85F1iky4",
  "key7": "5B4exSTVWSV8Khe8nLWUhTAkXnvUEipLhG9sHgSbrc5F7pt5iWhVQUevKgXEUqKG12wVmQJro6nWnVFtxQmrKTKn",
  "key8": "2CebXaeW4E5wNY3rrmsdxLjszd4yEToerrk88BrCXuB9tpAfJAfrm3uBLWTyLx9GbvgVwJAWAmPRRSM1jebGTMco",
  "key9": "4BXZmT8acw9P2HvnB9DnembQhPLoRj7d3s2ANmMfYiYkP9s7v1TEJ7YTMWtAtbsFEfWtNyRJGwpwinv1BVwFw2t9",
  "key10": "2o7K4C2PrLpmxQvEhvWi1dVqKDX67vAKjAv7SRnav98Yg5TYLMxwUkn2K5gtFwJCGLqGrfBFmP7eqdcUQaUHXuuX",
  "key11": "2q9JLiVLLauHNr42GS8CDSBBjA8ek2aiG37Zo12TvkQErYtxWckruBjjwbgVBTcCEV44w257stP6rGWNjQ9jXAZD",
  "key12": "28ahS4WaBjLHesxPRbAHDkSABsU4idMAVp4fecH8HgmWGvMnbiXCfGCYqTT4RwH4pbBU7r8rxP5Sdw856Vv6syqv",
  "key13": "5roA4AShHM722TCKFJEgnjE1q9G3rCkNjYMukx2rqit6ceUEKT8hVfXbovxxkLhV6q2B6WEhTghrXoLYpNZDjHJ5",
  "key14": "rtNymW4XezbWZ3khqVLSJ4yCcPFcNMBqKjba8F9vehMQVtFtYoFEA1khNtpGz92usYjB68FWB7wo8XZYN3q1rhx",
  "key15": "3q1QPrcwsgmJCJ2SjLYiNCgm3RwdwUfTaaSWFzo73BgxkzP7UEP2vj4EYMrs3P75BCSewM4hf149xzVCx5GUyn7",
  "key16": "4ATSJggCBDjmcR1PP4qmcskUnqkVhXnHax2PuePYyCsNU1K74WnFQx7fZfCxpGqKRrjFsA8u2dG4ChfKkrMQyQXK",
  "key17": "5Ff5NHZvZcRZJqC3FeiQeo2qL6HUr4hUDiT5s97ni9DvVkPam1ybRUPLSRSiLvPqzc2GSr9YcfvfzJSZ6C3UN5Ko",
  "key18": "122sELbTuWSmwXJYC7iGmjQkq2yJMABHVMuR95XyuJxtJ57Cf27f6QhwjCVFR3nPi6MewDeyRQZFPugnYWBeB5Hf",
  "key19": "3FKFPARPJfVGTCPCCLZpeUQxjgeBuEdUURY1qc72GB5G6QAhZ7qD7fyuYvmn2wXAy4vQMoXBErhs9Vxw882nWwGb",
  "key20": "2yz5BqiTE2o3Qdhe55c7JAuNrUTvB9p3g2ddH58xhL4ujgHZBqTvx2bhBCKxuBWSEEEnEbX3ZKjodohKucCXkvFC",
  "key21": "4yjS5oxV2HXFEKcnqXwGkv2QUpvpe2caSuh9PF7RRiDwfFzCTbeWVYWCQ8HrWBGnxKREx6HT36d9SuVt8MdhA54k",
  "key22": "2w3DjsG9CMUbMJ4SUYTwPyw61REpYX89jh7j7Y3Gy6Ky6khteqS1vs1BToKirv2MZvGjLA5dxLF4JUHN5PwRYvrM",
  "key23": "5gx1CpXXMHgDQ5weccjz7vh9dJCtTi7x1ghaWMD9CD69KcMnRPh4RNxf1xuaeSFDvTYDjyQS6fAXiHqDzEJczGoh",
  "key24": "iEsJRjzWn78L3CksMDuuyi77P4J75L1mNR78WtpzjJQYNEQoEJwiJDmJGtExxSRNzfKa9jm54wkEA1WFwbbd5cV",
  "key25": "25zK2575mYVmCQWGECTPEFzHBFHHMgwCDG2ELsQTBR3rVk2KXq22Yo1rS6FpCPhKUnheMKTtznP7jxF2ukU3Fc4w",
  "key26": "2s5zAGe91WGQjdB7c7TA7DfS7ReNbnUSAWDwedv32AiSUSiDDXKKfvp8kkikts73S3qhhr4uRnc1pgfN841qZ7Hi"
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
