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
    "5q3nBQiUgVzv9WaMvKVwFDzz663EbLvFv3ndh3mFvRRum6cEFxxsFMP3BSLXvzVWfyuYbUeUXWBkiYAbEtQzoA7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ErAxB8SJ2VyBTJRjYKBRUMJvdDa4EStmypYMfyZUZiMsVKenKzwJ27wphGPYHmfCzH78iZWGioweP9jkiqCxSUk",
  "key1": "3xSkYSAHrEnMaPsSevZ5s4bu9KTYmJVgpQLoc6ocGJhbZAnyf8EQ24AgntDX5Ko1B9fsrGjxfVhfREjMGiymwE9G",
  "key2": "CtKmRSHH7YCsZiiYz6pFLWeW3kWH8Jf9p5q4phmX78YmiNszGyAbRnG3VPHeK2UKpDwuwGFHteeaLWK3Y3RHjQG",
  "key3": "2ieDRH6E8RxxM4RDfb2dBsuVduk8iyuNZePsejaYsTcpcTMtURzsyR1xZENgG36mAqKT9Rrm6hFJS3Y28ZGs8q3L",
  "key4": "3Capw41ekrcDuqXJ1YNFJzf8nWqpxxG3FikfCMjnoZyYepaXfCn2FYYkVJQB54EBtrMd1qSnnobiNMEeboY5GKgT",
  "key5": "27tEFUu5oPh3unFhrhLEWJ5WY7rto5qEarRWxMnxaAyHQVAeakZTLyJsnF857nPiVX4wLx79nqxULbYvWgGjywdY",
  "key6": "9siMEk84ZGarJAEgHykDZ3xfRhgSmaqQx7duTes5q1UaYnrrxdoYoikqR2rGo7Uwrefg823zuh5qM2X2ZJE2pJ9",
  "key7": "2bE31Kv52dHZA5u2EhDrWC5H9swPJZRARoCuVTzrjaf5TCcpUdURn32cxhkZBKPAz4N5MLbAU4yCKmXiTwXcB3x5",
  "key8": "45AmLo5HaMoVNGfRJNxHtSbmvHK3qDVjcmjAJuopjNcwzdqVs84Pkrx2iKtvYsUyzZ5iodHrY5sG3SZpW1YmqZeh",
  "key9": "5mtDzD2dHkpGgWPe29ELYnvYTD4d1tPJmsUochC5t3cvh4LXFNAKMxgENysKs6MsiE41GqNLotpurs2fPyDuwHUa",
  "key10": "4dmQo3DJoqMjQrz454iKphWpz38y9WnJAYiX385hdLsGtS4uxYhydHAuRkzv1qLr5KQy2HMueEpSYZjTarqwSEFz",
  "key11": "QoM98mnjGp3BQTLST2o7VvqVgEYqZNFcPZSBazGNXUCgfLNVTz4Pqsr7w4PZAJjqL9KqcnJtfzPbzdnQ3sjGcJn",
  "key12": "2i444MntfnLgWtKyopHkB2z14Hfc3dUDVjwcrcim7Gf419wN9kLbmk2nFst5JcpnkaknA15mF1D2kKrT88PjZve6",
  "key13": "5yeQUNv98gdUfaEBN3pEPJ85bVjvuCmyhKzn7GHTfzEbDUk6nRfvKEDXHqkBGS5WDg8375Za9Esu96rZHqwnFUpZ",
  "key14": "5ZKjPXEiZGtaYD4a3fsR1PZ1vq3DCwVbubqsXhFfX4ZKmzNXU5XWtchoMPZEySFi4zvcjL7ijd8VhXurzJK1LN9q",
  "key15": "3Feb679yGvDwN8JJ1qq9CV6qtSFNziAjwrGSctkZc2uYjv2uQZhBcHzPG9397T5eppNiHb4NA4SLhT2sqgvi4Gis",
  "key16": "59CR5GAqNPbiXrnGVpE8j14Hexzy8UAjPDnPQiEk8ncnUqDwf4PDB2LBPdpPvz4ZJAqwVM8YXFX45rkzpxdHSScu",
  "key17": "2rRpjTfLeMi32qZkjmvuCfvxPm4iuiNmn5tp8qXXzEhd4roq75KMkyCzPqQwigCD63QuVk4sJkzw4aTHSanW4SjB",
  "key18": "5CXgApc3ihGfj5gcTv3Fsu4dQ9L4NYc92G1PZtriaacvBcNbZR5tS9YKs2UnDQegya2svHT6ssUUL2GqpvRUnVTv",
  "key19": "3Lc1G6K8K2mhsrgHg8xXyoGNRqd3USwuokM2qUqdetVYWxXpuGecKhC8YV4eLJgJSmgKkjPRpnyVL5fSgo1qu1cu",
  "key20": "5DaZBeprKNDFmYkQgdpzThb9EG3YYP9vgg1C4BojtSoovdBXP5YzG8Q4KV6gYFen8AC6CnVZhvC3XYBCKRdBnYs2",
  "key21": "356LqGVLS3EveXdBeEdgCKL3GoctCjvNnkH4zEx2GWW1CjZhLQdQrCWWqEXieHBUW5PcFMMrb1ewn23jtgCihuQi",
  "key22": "2J2ELw95Q4Yxj9i3xGx7whaioQkmpRpNwTdJLxPQPc6x9m356BRRhbWjLvpBPcFdXxv7Jgxv4jKBYU9nZkMXMhgQ",
  "key23": "3UhBLWgysnnLU8f8wbpDejeF7nXhJMinuuEqwd3FAuyWbzwsrDw2SVBZ9vdi1cWQxro64YDtihMpNXGqYjXaFoig",
  "key24": "gXBYZtaXN1y8Vng7CfEfkDSzS2mghghNaPgDN2ZSnHL5t9sSV78KBEKXRLHJSKZdGa5LCkfStdHnFaxhMNWg2e5",
  "key25": "3AkYBYxV7QuazN1mg7txLA1fY3wS9H23NHE1XyirMzyMr56JocBULSw2sXDNG9sSMfutRthWsFfN6enH23QnjGH9",
  "key26": "4vgAFL9N3eBPTS3EQ9B9RbZk8CPSWd8zZ4guTCjK16B8xkWjYvWn4r8vexVQ5uv14Qq6zopSwfMrVTqoQ6Z6qwGx",
  "key27": "y8jsLuYQYzjhGh5wMupaVj9LNqaZz7bVpEsXzst7oc2kp4UnUZfkG27A8QxwN1rUus4wGwqSzf56d9e5GVLPddx",
  "key28": "2a2SXFwMNkvzVXCys1A5D4S6WKSy8iVsyzNJw3fhWopECaLGsdgE7oyydtRMec2k3o3mj1C5rVNysREFnyctr6M",
  "key29": "2C6yN5zzMKRgZphv8VZ6KX9ev31VdLL6ztStPTNBd1KisdF5qPRQUACyHDkccwriz4LCABjMWMdpz2yDLxGvwr1y",
  "key30": "5FTUDXBq5f9CaKVs4uV4LdprrafPYC7dHBvu8MaL52zjb9aJayFtqHSaa1QptGcZGHrAggLRoh6yUEx9k2sSnTKx",
  "key31": "tbGeMQCFiszaQSBaExSeDMAUqE7PSsFpW68oLUNJZoX3KfUksYaywPWmo1jQ7cYrMF18TTM6j3rJm5QfBxQgCQ5",
  "key32": "67Re8fp1vPT6GAYUsqegF6chhS7uCvcwEKxaNMmW5yEiddoUXJAAQ1MsjzCRSwqAH78YCPkzsdzobExn1zVVoXN2",
  "key33": "bM4PSBcDmLiETYzScKpUMcWJeohTNVKZhLwdm1xy2aGq6sdzB7diYgqS3YmnBqjdfiVMTRAQkHj7Cycg1y6VYG7",
  "key34": "4BUMRjiHKtaq1tfwUQzyyk7YGZH74GeCMR4hfho1YAUus3tXKYEYcxzXWfVhsiFpgPf5AensnPUDe2nQjUYEVjYv",
  "key35": "2K6LRMZRhiHENo8ymfs7hKJh29kR9wuCKS7LbxReFe4StNdgGTt1eoDfiM52knrJHUXb28sDEBAKTJnfBVGPmcLH",
  "key36": "5CA79vhMyd1WEsfw66T2wrUpvagyhq7Wu3RLZdsUb8xGSJYTF9aeyx7wjmuB4TgVxDvPb6p6nq6BLsJqnJKyoF7p",
  "key37": "5RJjejFaEFeMgTvBvRzxev3vTdSzLTvvyugaQ4PfrZzJ4mXrDnbuiVEZvW6GgddV7nuZbbjYE3mwUUnJvXYYaqyQ",
  "key38": "3QW88mNAc7wNB5xC7JgVkf8R4VJE9QuchHZBv4UfkUymhk6GEFAjKsPJ5tNnbWXPFY8Rx6zwauqvNZW5pWh55qwH",
  "key39": "3nHWnaHHc3qMRAFkcHcqErTWnRPZmkifP78S7SUGm7CTjRuBBzfjaYWqR4BrSDpLZ9pMEqyhZZNE7sGM1NAAc538",
  "key40": "2qV45PWpCCtUL2icZQhUfX6BDmnm5AbpTzCgGMNoRRKfWEuRBT4FmiHkMm9hwnz1AgnRA4UWAfGRXPesFksQ1upQ",
  "key41": "3Z4i5Ywi3Fw1JhiYwyb49RKyxmM4CFBawg5Ub5s3RhzJdRkNsNsnFjZeSDEzpSK6peb9fct7m1q3k6GFG7YwdcGK",
  "key42": "5nsrUFjBXwF23cNXr8GtnhEe1534aetNYNwSFymKhufXy8hoHQmVoxw9N1PxZUWqkasLFpCVeRZGZbp79npNrvE8"
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
