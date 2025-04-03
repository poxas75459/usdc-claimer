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
    "x5KJs5fun4ZiapntCTLKzNxzNQhkdDo1HKGcddwmhXRPgfj8XXJUkZmaQQSbDM2FrzYnTMWHCzzPxSL4hoeLWEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22rrKeiRA584oNUWPymichNbfgS5zdRDQ65uyYqcAu48R9ciBwPxz5Yp3MGbtMn2xe9n1xRHePp4ktCEJEMR6MVh",
  "key1": "4RwLE9mpERiFCAGgp7uTxVni1gC9ttnGEosoRdbD36usWwXStytNUWUmcd7BanGexeQLFaY1TCj8ALx6sm9zeicw",
  "key2": "2nzn8tPj4juX51TCyvetXFobR7E4X1hqidyAXQJTNpTpKb4NRKQCayicYqDhyMvHrkPbmNGofWkMM3xWeR9gucGC",
  "key3": "4JzvkSDxMzvQJFudzDegpH1yQaubcGwHStRzrGhcSdAH5Apy5sGnu8g9rGt3dEYY8PgxWnDE8ZXmH8zwLL8eCkjL",
  "key4": "5w3CacsbWhQVT42LL6DFp3JMARUzrZRTakg8uh5qy8Ka8vUFZzj9fNvv45spWKCfhVWhYg62G1UUnuSd3MceuNT8",
  "key5": "5WPZB7bzY1eWBsTaAEEaKyWtTvXLZFCvdJCDbZvWYXRaQs8VAeXtpMLSD4TZ5siA9UNbKy8wdCQqSKmivdRHiJU8",
  "key6": "8yEGJCQDMtBS3knma4tyMxMRLRXTaimRTtLp742CaFG8Kzvw1PgvR7oWjM88cCXQrJzgZQHQTW72yqiouWDRGBg",
  "key7": "5ZoKpRe9J5vYk9Nyng724J3p5zRY2ixQeXcMfzkGttF26ELbq7Q2iHMXEhUVs8Y6wS19xikAXrdiABULpyjzEdfG",
  "key8": "2xHrci3Z1ouX6XKH7mNRCHWZhtKy5rDjdKrC4aBLAk8MQdadkP4po9zQxmqfnT2u8ojVd6dohbUXokg3J8FWvp9x",
  "key9": "5Z1qMv2JxYgheE86ygGuGXAVJe9TENiTAhX8qv4kJo8QG6XyrFrq6rgr8SWXx1SFvciTnLz32PLA6jCttGv9LrjU",
  "key10": "5nqS3d4TNh3TYQ5PThaszQzgVTkdCaj998ryP3mwV7NuSC6FhR42xAofFFiTFFeBwiyRKWu8ietkRnD7AupbtM7M",
  "key11": "WhME6Ge4xv2hTb1WbdhXQKseUAnn3hUf5pWsp7jMrbeEWG8LAwHWnuLD8jULfCQ6ZzE1oJN9B6Swy29p5BGLmgQ",
  "key12": "oY5SX7Aa2e97xapdmtESaeAw7Mm9e8S9xxwHcwiY3FC4z36aUXdVY2bNczG6C8sYR9A7HeM99rFiHDVH33PHkjw",
  "key13": "R71naZHz475r5QbmwqWqzMTiXKoJR71SMgwFhBDFaJ14swZY8wUDhTdWA3S17AeMLk6nXBbF6e2f9muKb4gj1SH",
  "key14": "3XB9RpFywSfvpwg9tPw3UR3attug1NDgvr1f549SwW2cPnH2oL8BJ9MWmALBGViZqZscJst8aruyGYEtpc66bEz1",
  "key15": "2Vjjb8t7Uf9f8NHpeeiCgsjJzz3hu5gLGcSiN5eBU3yzv4U54U7NoZZtaGHrMijjU5st3kVQj9Hs9yRcwxxmUjmX",
  "key16": "rnuS3AGT6eZpXnDucrtAqJodBkr6ZrTiWE9uz8TJuhFNw8MHAo9s9huJSkBJGx9erY9ZxMBFHUZWAdfBfLrbYpA",
  "key17": "3U3jfkTRtzFQ3cU92GnhXTLAVUH7fS7gNXtZSpAzq22nibECoTSBzrmYXkagrt2AtVDstQKCdbX25RXcpCEGDHj1",
  "key18": "3ftCwQ72NXwT8Vq4Hc3SSvVWneZV1RZyWVcuuJeqWqJP7GicTXomjEKYgydT9SaXKgrgjwUTm3Rgmy4x9u2jmnLx",
  "key19": "2gqUXpDP2uYSR8Tmof4dAmCSdirJrtXhmMjikum5sWtL8Uy6FcVSb5m5x6nHoWsUv2tEpj6iujo4jnhqpK4kH2Po",
  "key20": "EZhDaZWhQgdbhYspaSws9RsJS6f2tNZcUBsWfFBuEGu6GhqvauKEoFn8xEuZZKA8NZdHTr8oTNi8TPtHok3STmp",
  "key21": "5PEfBW7MR7NjhTiRWPxAuSuoTmfp5cSv7GBxUTwRZS5o9DPKWAbyPFM7tRLZidUo7SFhQGEb13p6DxP2j2drtAc3",
  "key22": "3oLVpKc6kogJPy3631prx9nhBZ9LYN3fP5KmARAAynBgFvaoCqZb36MvbmCyyg7dF9NtsN4jy5vU7MhY3tNi3Y5Y",
  "key23": "5PMXSRzX2B7FptwX3ZbEB2QfhM4viXDRXorqDZMMKeN4ywQoCbHJFqW6wEfioiz9c7KdPmp9E4JFoGb4nTwCtqMU",
  "key24": "5RCKE32MmTmK44ZL3PovGF1QXU1vyVSw7xW8oVsoiPvX7tTVn1dF6oF4uB4kQfJgHmDQEY7VsDpXNHaHEveHkRzh",
  "key25": "2qZhB1dEyGoQgUw7FEaP3WokjrjZWGgRWkaTRKEBEpXSHLQ1rJfgzNbFcC3Kv92HbK5uJReEeX8d4o9ijzLS4jVs",
  "key26": "2DGHXSFhjMZKCHWxNLzR8FmNzTsqGAj74ZfRR4GiHKfAWzW3RCe5qamoDxhPMcccgsDUtHSjLyvCR36HkZWNiSr7",
  "key27": "4akQR8D3Cpxcdtd9S5Boq1nNP28VzwQgKWEWEbGvNv8FZZBsYdc1YVYKeiwsmhEYPFNPBBctxhUvvgKV2yP49FUq",
  "key28": "4jgGCQ9pr7UJwRpUb15fW8cDcirBG9edxRrhX2qtcS1XJCgdRu1cEQ21sgMVCzdJWgZjjwzyRUqJGZ4krwXHHpvN",
  "key29": "4ACne1imse1m8Bx5Bo6bFXmtDUz9cLTCcna8N5dLnydHGaeXH9VkSG1teAY3eoBXvCTsG13sPkQj2qTqZkByeGp3",
  "key30": "5fmLK6y6zZWPftVexTaXXetog35PT2m3H8nDfy9wKBi4heCEojUPxg33ES4Lv3FjyLq33L4sPB34RmY8efGZwxT2",
  "key31": "3ap4urk13iS6KGsCVfxqnAxQbUj1LbenGJyfVwb2B559p5c9vgecvau7847GJ3X36xALzXYGJ8WGvKCcHLoPkoQT",
  "key32": "Wbm6bYF48DfBj95trFx7MuoDwLycwpMbY9bWucNgPz7t5s4Xft1SMnG3tmEEtmRFnAcB9HC3XQnk9chsfD8TEvE"
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
