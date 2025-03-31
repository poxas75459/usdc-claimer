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
    "5xDereSnaaziPnGVTh6KADxj4Fi6HAyvf3nSzxb8CAexaiULNCrLs2zgJhRhqHtaS2wBm977g1JKAcPQQV3cugqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Qa8LjfbGLDRnhYfLZAW8wKUuw8vQCnezB61v8A8mvRmFoB3mtz2iF96qZgXpA4WB8wAiArCUQy1SpALwDRjEr4",
  "key1": "3QzpPD1Z5qifcHpVdcSFbLfi3piQqAtkkQEyoi95tc87Pe3Vrkuef34yJLX6z5zCC8otf2psKLVECNkXGohqEYbU",
  "key2": "5V7JcKpCtmagTsMcvcjfZjNZYFHFykJHuM5cJpqgiyWdnj9ahVnztzqo5KamZnY3rdKsTaMbMq4WxdTSq8pz6ryf",
  "key3": "4yc46KHNNHSkwZ9EZ56VPDriUeQ45v27i3GNsRP1dcPRbEwGj1K1WjoRCLHKBQizLyPduPoFxHbEsEdkPL4iPGzv",
  "key4": "5s7FkaaWWuy5RMroW34cN2bdK9mVvveHRxthQGNntC63XSVcUAn5xd8p8AVBVF7cXVvbLu4xRDuvVQcYBgm19aEH",
  "key5": "2RZNzTK6rLA5BjC9hwuoJa5uD2n48usZEZtQTiUfaqCABqBmiGzJuror6N8zvpgJUyL9PkkWDz9kHoX1LVtCSN6R",
  "key6": "5EkvRoQi8ExfBP2YjmpW6wTA9s7rMkfcUTgZ3Xcn8T2zdcYrbnAE7KacGwxUMGjNx8beUvJyWGr6dVEJCc7oDQCX",
  "key7": "4hPGMC5dX7mb7PcxJwP2jCBLMGE7Tgd6rcbBESD91pjqTTSRPFt77m72pMUK8RuBmUenwSa5xnCduTwXuU5ECa5Q",
  "key8": "2aXxZXtsPiPYtp64Qy5F14SoZ88M1ycG3jh3EX5Bknw294HsLoAkGZDDJV6jUAzQg64FFJuPdSUvzY4XYmy54Kdv",
  "key9": "3uWXeQidRPqDi92maqL9YVV1dajF76N1FZ72nvz7bvM3EvA7ufiAMxxnZtjbE2RtSC1XD2p2Nvs2WNGpyDDctzNe",
  "key10": "5CqMzAhxZLkmiuuGo7YKZMrsFmnFsNJTwgWChoDo3khA8U4joNHp6vnoHSXmQoqtg7nSt2vkPQWz1z5v3X417rub",
  "key11": "e5oERN9Q4qNBwn6gPWE9SKFAe8tCkk7rp1Y67phdQqEpvTByCvMbtaPVQpZTGt9Zt6KeUJGFJnE3GN8Pe14qtej",
  "key12": "4LhtmXxWbYAi1KfAdnizP7ySbfzFm7hNELjiGDSkTGbKs9B4XjCY8uRzZJfbhpCBFRBdidfxNuSBAhcpjYcBUQRq",
  "key13": "5A4wahVhu9uqKky7xZ6C24sgFAtd6ns4Hz87KqDKMmV2cw9t7YWNRCmkKHvjoJecYUsghmSYcp8ei8wJidwpH7od",
  "key14": "64Tstv75PkuFNkcuWXRN68B6u6k8GCYrX4qb3ZSNDdH6ddi7YFK3UPv8sLZwaaKJRQ1Zf3pSTebA8f2XnJBoMZfk",
  "key15": "28eA1CPXFFrWCG8a58Np3fqniYxgC7xVkpDytpbSdxhtcMGZkHSBfq57hJLxW9xyHdDixEyNuoEbhhPB4sUMco8B",
  "key16": "3diAW1Kb1FNFbWUdG222RGqvXSQenyqZkCDWgC5DeGEehb2GjrRQUrwahmmcqPsMym5FasbbAypGkRCR6NadQwPR",
  "key17": "59HEj7xKjSUHbFiVvYBSConYwRfMbuin5zWDnyeZkb1HFWrNbJYDTAhPkaE77DikfgFsFrZzr35ogTdfBcQC5aKf",
  "key18": "E769fhpiZeFa1jekm9D3azuhn34mL38SAdzZmRXitmVUEEKZH2bnC1XxDuBVA6CTcx8yHKutQK4gkgFotJ2V8PL",
  "key19": "5oaiYUq2N4q9dAB3gymAdscv98SXM9Ah8HZFQAruHLwKhUvWPN9o6X5U4PQiLJLnhyi9sbVZbxg8YhSZiUcWJjhW",
  "key20": "2pjkMcyKRskcbKfMfhZwJBRmpbmWFRycf4kNCMqAwwZTERM5WKjAdk8QHh8uuyBUsydGUy4oqpkLa3zncR2MSPDt",
  "key21": "22mgxDb8EWbb8696GXXbWpbN8fYC2ra59thcYdwZYmDFLs7u1Gno7YsQzy5gJxQKvhneF7QAPDxqWwwKNbiFqHEG",
  "key22": "4uqBvmBLBzKik7dS5woj9Np7VpF4dwTQnhhQtqUJH6YTXDgeFmrijTdKftQejPMCv6Y5QhoegK3vHCuLU3atKas7",
  "key23": "4KrG71YKCqryB1DSeyd5QGqyBzLZqCriAW5Vt6EAo8VwwJTVQNW1mJh6odfmDr9FTxojV2ZvQpUvRSYceN9poVKz",
  "key24": "3ECKvjELipXoAxgBgsHMzkvrDQEuKntUzFjckoG3JDKf6RvoTk1evN7vPhymANUVL7vjN8haoHDtib9rpBhhbM9L",
  "key25": "4Lyjq3iVT2Za3KeyVWANxpK7TCw3hbPJPiLvDRpv1Fe8eCnq4txRaHpEfHbdBxsdz4P92ySztKz87NJkTZk1ZHUH",
  "key26": "32SCiSis97b2Fz4vXSGYtMtAAx7h57KZffBSKF7Ru33mgL4uwnryLqjkkXEYharUVwaAFaVx7VKAGXwaZU7MY1e9",
  "key27": "4Yj52a1phmqYsgoAHDS1DuTkggRUH8PuapGKGahTXNk5cmR8DS1HnEg7rPGCWCGyrZcqrv9NGHSWJ8uFY2kN2SA8",
  "key28": "2X164cHBnHSx2VojrvdxBWDRECHpig7ZFwnLkh12LKLskrF7zrcRNRpvYvSnRNH5WcasiJD4DikLRr7UMcuZYbXj",
  "key29": "V3PPmc5yse9951tSETuxWpe1W3ZJnNeGMJaP9BmRdfQaTEBbKZp2s1CGZa5o87GFKuQXuobAGBw6gYu8fRg3hDe",
  "key30": "2yb2WNZLSk5Ym7B6W2nB3bc3TrdeBgBuCWKoj5unLTd9L5ZVCNxmGrbzEB57vQfo9xQtuwjpoNFUhtsDUEcFZ6CU",
  "key31": "5g567LGzAP8jjo4Y9ytbLt7ckTbU6eYQTN8a9AaCZWLpn6MZgM3CPmYURfQaaQVcKoG59j6nw1LdhYCbZ6BRbb3a",
  "key32": "3jjoBuys8k2E2NcHgxCoNTv7717CsL7KQehqw9Vrv8wu9ebvgz5cmp6ykC5h3kVi1pF2fMjw6Vu3jheRa6k44LS",
  "key33": "5wtB1Xr3F11BTC5oA3au8L9DDiT2Xiea9iU4cP5B376THFEt91MxPkzvZPMtECQhTz4WkWZYsskHGL8JGGvrGNtb",
  "key34": "2oom8X5Q5wHGUB54M3iPMHGgT5xHgT5Dz1sL8CXbxZk1z5D355DvxGNRT2pLcDFgs1z6sp7Vh1pnwHfYWYzoK1R8"
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
