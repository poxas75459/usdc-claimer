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
    "2mgx9GqQJkxANGNxDEcpwUz1RsNE2rFcpC6zSXLzaH7LTuD6xmNYhdJJvfCybAbTHMwJ6fcox1DTEH8RHSFzvtdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r8DPyi7PWidyyKjRmfdh3aqUUksutqeoY9WhfTkHE6AnxRZepnzUkrWggL6CrXtCrXidae6LkbuTFQcznbnuW6u",
  "key1": "2rp3rs8uHdGwBBC8fjm6HG5D2urYgNRcgDkwjGHwJ69JCe3KgwiqiY4zAu64d98RkKk8QHcppB3ytZ3uQBp4bF6m",
  "key2": "45ecy89SnXuUCa7CvZqy1gfmu3wM335Pqx9Xi1y7xupkTcmhmQcdcKpryoEaykomRiLi5JUbinTnq9J1RW5Hr5op",
  "key3": "5jstorK8czi3LnSBEw3cakgisa3r8goq5xqzoE3uu3Th99iNbjojnURPtMk2HEyqXaFUBgSygCX6pprVoZpc8UKs",
  "key4": "2ASK2M16f9DeYVAWf2ge3dWt8P7mA8k8jUnwEcT13FoY7iZXdvv5vCtwvUHtHCvhX5Xis4XUGmE24NKg9wXTHA1X",
  "key5": "3yieCHAatn7aC7Rq6BwMdSrpdRJqASvuHfbx7UK6yKo9EwiDbp3WiBQE7MLhiUZscKKFF5NfzDhFCMfyqrj49dwn",
  "key6": "2K1W4TZXsLmsaDMDv4LZLW3yAF7wDY22qTrYdSpadMVmhCAvTF7g7hNox4d82NwemUGBbuMAf13h3TJnkRmKyBnb",
  "key7": "4ad69UqZANwrtZzpVqmqRNWvUpckw171GqratM4jFAdA5RUEtrcJghKBWKJWv4D9QuGrKySobUL3rGYzCffuSs9",
  "key8": "4PSbrNWqGgLugkWtxN9Y4iEJaNGWtw5Joy5Kd5TASaooHkguoCYWXfNJ5XQ9dZLnZDq19w1MKFWs3DK2wzjfFEHc",
  "key9": "euKPx8PDRCVkZsLuqjQHaYr5q5j8T7LSrrVsedVJQ7FfJjYKPUSUU7ZCvjEgfYc5pBcVhMcVwY8FxuevaBetFBj",
  "key10": "51D2kKV26gEmwpDzr1vxiu5q1o6nnuGNP61NpvSjhNviey4BwkawEpYBMeZWCY6VbEBMssZnrfiwHZ6ayTB5k9JU",
  "key11": "51WqchiH4SjXSBVcPQTjMBiUC56ZJKoiJmvWoMhgHa41ajf7Y8bYkMmd3ioAGiEDFBjpo71xfkzBoVTNEXtbEe5W",
  "key12": "4ytbBaTo2Nqcbn2Vce5a2a5zkgxj4SCkQ9DZLi27sGE3nAhDzGzX1g2PJeuidTo75QxpRvJRztJWXxDUuhUTQNT4",
  "key13": "5PDNwjD96yTzzL2KLggzuAGZvGnHYDqGLJ1zh8KggxBZVw4WwvDpX7vDSoLMgRQsZNq9A5B94yNDiq2bVRowRiLh",
  "key14": "WAKPD1ruWGEz9QEJfCjH2GJAABzf21saQsG6NX1eaZwecHdVaP6d3FXzq4uD7TukQfPBPWo75ZFghmNcjXqFuBD",
  "key15": "4pEz7XdbJqL3y7AiRvEUAAkQJFoKNeHttz1t8uYngQW19vTtqTGGrY1gegRpgkC9z9nhbxLBnGuh85X6xr6ogYQZ",
  "key16": "XcPNJmA34LVyFRE5UBhozejYnjsekbppcAjPUUHCQThSPmNHs3Vp3pTYxqAaYpXjTFHNPQo2hHVt72TkGHiweNt",
  "key17": "5JoG3fndZHMfPHgQigFa4unsQApazsBQy5HeZ6wn8LEg4emqjLG75GoTXJAPjT4geGKrgV2G9KM2NYWBRzFVDDXp",
  "key18": "493H8MTvha2nzUNgZy8K7m5Wp1ygBN14S5evc7JR2fZXiYuUrtzy1arTsfs5qH5XiGfi7kowiPZj3BRgY3Ss1oiH",
  "key19": "k4fbJ6QFZemm6GAHxVm1ZqU1aFemMGfrZ5rPmqBo8wY9g6XwBDHxaq3E5Yseo8JABcJn1AAYQCyJ55t4o8EwDkp",
  "key20": "2E58bG1fqwpabs13MZpHSLFmfx9Fo6kfXib9dirQRaZvmvzVrgTFrx5HEKnedzcSXRK2ipnnjXe4jsFs1jrVZDdV",
  "key21": "8woFHcNWhPpXJXPeN73GbSL8eh8GqVZydU2AU7yJ1AJytAGfKe9SzdtxWrZvPZjPAjqALeg6J5iKriBZFVQMYvU",
  "key22": "3qUBfcwmmgZpP9ZUMt3VJqeEds6r61Uf5cs8krqiU62v4Aa5zVxDeHBx2Cozit2MbpyS9hXGZWYb21oJk7rncQhE",
  "key23": "5m46gx2EnM9Jqo7gnfb1naGKrYZ6DQQcpjPLEdxENB4oqwL7i17cnjUMkPg6MGjuuJpxm37UTVgijxm2zhK1CXGc",
  "key24": "4V6oWvTX57rEuwGYgnMxNMRNEQ3GmCkTu9mdhqg2CYGTxRqwrAg3cgzvbyd5zCuDzSVCZ44pVcJL3VoFTsMfUMtE",
  "key25": "4gLrtGaKWUAomgnA92uQZzbtSDXagEhQ4kqLqa5epvVXxBKzdZSy2jwLaGquvBZCbfohesycqRa5BTJVo2vBdd7v",
  "key26": "5c76DGsNiNE1UfeDiwaVjQRbv6mDRy5CqAXUvE5FDwrDwa9tB8n24sfobALBpeRG7Ru6gJzk1UwmYcsYiC2qGTyd",
  "key27": "5SimpuqQyAcvY1Bu3jMSAB6GYrYxb4yLxJq3rDFqe2S7sEhG6N1KmZvDpnVibV78GJ5KNzJJz26F1o2rSiJyJ4Z1",
  "key28": "4Tud5VLziYy5Eq9M7pYKGev5J8tJh5bi6NH52cvCCZZXiTcGT9zhBH1wNtnqqhHmM6zrDm1QLZid7YVCPz9ggzok",
  "key29": "2wdDna4yRpnqiuuX27S595cGt1rpqQUaVyd2VYD3Jdp7F6Lr6hjipvJ97NTrKVmY179AwVJhpPqDj8idPtZQ2s8T",
  "key30": "3JvWvsjScsdez5CFqsu6jftZNonCwhUtx7fKhkzZrpVru7GEBxezwrf6UYcDtYxAhq7EgGZ99MATaFdVq7moo98D"
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
