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
    "4Jdw35QrbSHXEYfyeAQa9WsxUWcXu5C8MtVYwQkS3gxLUJzsHmEK3ZZeRKxNKYcM1mgkTaDmsmsUW57zQp2HNccZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23kB5jHi5iQvytKUUEPi5j2Bg7ZF8S7Gc1Sn2wSLEAGNzURQkxLUHyUGa21GmnFa8jUXwZvKxp6RLrkW37RhuioJ",
  "key1": "65pASC1jJPm5EYfHpTy9LQyzj76K5H7gB1tUhoZuB8BEkNoxneWuojkTnjPyfpy5Cv1qx2As4NLAp2mp8tHzgR8U",
  "key2": "4NmQg3DrjBXtYo34SFyTH1bVe46fzNyqkmXJmZuYdbaHCk19T6D5F3D285kLGPshQU9aysPJ7pqkk8H1PiCzXkfQ",
  "key3": "5kmPbosiMCMDnrQr9Hfn38PYUcsQZfNmLrT48AjLgFQ83fwSZdV7U1pBNFazxc4snssNE1ZmLxRua27hbM4drRHo",
  "key4": "23mN8TPG5mnm7J5AXj2tPPZkXBGYRu3U8Lu2mLvSXhFp4GGqM37n4sw1hEgjuYkQWn41npy8TjyqQkQ1acithE6N",
  "key5": "4ExHcN2FNiKb69c2xmmKTkGCwWf85KTCEvbgSrF5jP9hLbzQAXQTQnpDitoQgzywY5wR2BC5RkNRttPFTi2uJ2WW",
  "key6": "3MU23zvzLSfSaYZxUYN8bniwLetAfWbTG8RMuFXcMKZqAJPp8CXVjU3CEbbo8XqxQVZYgA3Gg49bJh9uqxEHXqYR",
  "key7": "2Suq9k3fU9gXwT5vkC2sjCUAkzhqWEhBhmAr142onb3fqQdQmWSSrZ2NNHD5biSmjVxDe2whXzDtP7MWyHPMZzCN",
  "key8": "24nF4j14LjRSgVxR42hNGhvxpyx5qopfyAju67RKBnpqVRJwhEkKKVXrnQateanDtPwJtJjWpn7MypuxWBJhMeZH",
  "key9": "2NZy2wq9dFFHM35TJtoyUZcssUnkpeQufupC7AYCUUDAw5WzrNrSi8q6gsWpC7kFXntok26sGX4gniefLc5h8KWv",
  "key10": "4kDLmgj67gfm7wTQLDtcrn2BbiiQC4yu8BG8BDCGLSwhVxGHu4vgKP1tsFLwddxf8ajPahAnWXqGsjX5dLzxiDxw",
  "key11": "5c7BhUBm6RFooiAnJKLHgHwRay6Be7ZymBNgdExfUcqBWKSTWKXrbUkpuX6Qfyb4pNUTtak5BhYBbyPaPkuXR47L",
  "key12": "2Q28agCBvWQLUZzDFf8q74iK3mznDzfjqRsPGYR3Us1T7o1M61Ln28YpiG5b5ynExDMAjrsLKjd3LNdT3MTR8d2e",
  "key13": "3omFkGLrSPb7SpTgbjgQMyzgzhb9DtcwdDuNFTzqxdbKdh5bj9EDPPfejMWQCufFZmoAbaduXVTVnVMFStEdmLrH",
  "key14": "4J67fTp1o54q1EejJ53eBBRyyE6qHy6eKQSYm5FTctJswLHpsRENbK2tsofNignUdvgq4dbHi37jxkwgb3KpnZVe",
  "key15": "4ggCQ6XL2zQGndv6CDzjcg8sn4zYs87751r3yAhnrfoQSNBNdB8PBTPuAbxe63K48b1DWbGpbsYeVXAnJqMkPmaH",
  "key16": "j5o9h2AHLok3SJEj9EHfCAdsjZ2WumvyJGc4q9WtG7SkvHMcXEY6gSn7LkLibkDGmkU1mb51pQJvyF8QyonT9Ba",
  "key17": "m2wB7YhNVsVefg59mFzWwc6cypib8Qc4cTfcbXDUyU1Ynk2HyJoZNbuzt9zXX3ygDdndiypeRPbbJRQa6vh3b9t",
  "key18": "fBKkdEaB7qCpCCTbGZTjRAK8scMkhWQGyUpNK6EayMVscbRd9YYAG2yRF2QTdkh8LLdXe2KsWKz5Pg9PmB942oQ",
  "key19": "4J18yuaYGKND7WzqNrVQMCS5gGdX2NNiwXyBbPiSHdveTrA7mqyGiS637KgwKuDDnDv8mfhUEJo7ZtpbDpu8QK5o",
  "key20": "5qgrTvvp9RLA1ibsERQ3VqVPMn3gNe8DvWu8Mvn7XMUgDWTWvMzwnyUpAnqwAreuvLr4PzhsHEEXqdAcCP3nTyqX",
  "key21": "2Er68sSGA9QohCLsmKRgPz4qsqihztzy86uL77dEyBvGshv9i9mSkdkKsETd7M37yYRinRL96mot4ptkps57DNVv",
  "key22": "3wBxfsZq96DknkQDohrkvsHLUDef6FqwerNLpxA5uBLFJ2vvMExnwqrX5qBfffX3pSgyNf8WBgp9uerLQE8beN2E",
  "key23": "2KwFy7a6vTuH1K73AAiGfPRMjwMDkaZkHAjMhJiEbm2fwEVCwAqN2z4aDAhgrkd3oERxqAh3u17n8TqhFJRUFQgJ",
  "key24": "5nNfdGD3SdN3qbp4VqZiqDfD2Zss4BqErz7MnD1rdv1dDJu3rp6qQQNvSxeMAxcA3AM6sUp8JxEAthDEGAKLbdC7",
  "key25": "2C6aYCRgjccdnHUA8W8iiv8JMm4fS14tLoJLiHkvVBnXBqBX48ktEpXtUrYjYxzfaEMHfePNADTGnpbtucXphTY6"
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
