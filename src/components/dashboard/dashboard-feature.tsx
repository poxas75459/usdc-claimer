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
    "2ShkJyVDNsEP2st9yqYgmPkWAxnZ6iagrEFYny2DpQfZQxxU2CMga3DRVPmXPeDmsSTxHobAmzzcdp9VM6QBwAtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GCKfpLvPU1j9MTvYofuYfLTmvEiBa2U8oT7JXR8Z9EinzQSprUqoiNYvJfGhpiKToLTy9ZNiLFU6ri4NWCuSjQ8",
  "key1": "3Tj5DT5ZFL5y9ZEfyu9VT3Tf3GbsW8HRGKoMVZjM9GmmF47rB1ubmXNyPq5tJ5qSRDbivFQvL6j7Ud9BvxK8wGG5",
  "key2": "5unBvqmud8XmrDPMkrna7Y5B2g8CZtr2WcMmY2F1iZ2RtomBT1zSEX6JZ6KLRYLfnq7TUX9w5pgQSknZxXJ8Y2yL",
  "key3": "3zhbm4MFX8nQarm5NAL7hk7gT8xAFraqDKnVxagYy5gFY9WxBuMWY5nkYUSSb8RSYJehhNEiohj9MvcWmVgvqEja",
  "key4": "3GGvkxZebD6mKz3u7kXuQs9iuJ6wfPgqSMFi1tRWqQNG3JZuSYCw3hhUnx6G9AmKvvw1iVmKW36qiW5gHNbu562y",
  "key5": "59yb8TjV8wUXqrT4szhdyLVEGNd4nrsTHhNpgWWa5irnr5bneLiiZgsHWxFMjHj661HLvkmfo3C7zjZVk2smC5vh",
  "key6": "2jLctb1Qdz6FCHZuvyMta1JpFNiaXotdVfVPastkP5oPpyc9QUPNiqS2qnruZj3UMTbk1mJutbujXPuqgqKdt2xk",
  "key7": "gAQucGNKHfBKjDbXjZfahvNrVLRgNNKhkzuduFQp9wEST6uRS58CPj1MSBjppYcR4Arx5YjSTrsUoRn9HWw6yba",
  "key8": "5Zkdem9Hqk1YQd4a7HgU3ZQ77CS5J6yR87eD83PaRtEMBgPf6oaKRSZhCdqdTit8xiNYU7E3n18FS2fYXqkwVGV8",
  "key9": "4etrmQtkBjFBUMKF4cYB5uHasruTrnqqJyWK6QwBxTJqNcf3WiowVAUBHADHW2APsSr14xng9zLC3SQnxTbE4VJx",
  "key10": "2ETroXcHxAHHkJjFgcdcesNGN5ytacYz5hVw2JViM7JSLJLhEvrV1b2VnVCkpJ5D9t23vwPUVhMG13JzNUhTra3C",
  "key11": "a6fKDyBcKjvGiNz4uBPzVKytvy6VBui6CGH9XpDtytLFs8F51WukNpj2G7AEgUmYpKkvLGAM3PZBSXRCkByHU4L",
  "key12": "47oXrkWG9EsUhPDCeyhu96ojbWPZD4RNPiCvf4sMeYinMPnAtxSphu4ozgeYZ78wf7bKjkWT1cG6di1v6Ps66f2X",
  "key13": "2arbZv7Wn7ZJ6KRsvK1mBGcp56HHQ2j98iwixKsygwM94YaX3Z2MbydZq326wQc5FiFHZ7eAfuz1MvEfeNBSm3f6",
  "key14": "4jW8eBa9Zh4y1kPAfuFzkM1C27QWnT2DkwqbX32fgMN8fpPXc8Tpt7K5fJvnVexgFuGEgCV6MN5TJdKKedGKRFHM",
  "key15": "5i7o63ZbVigJuyDFYNe5MZb2S65vL2cchQTMPiz5sXeT7CexnTSvSuVoTuJX36qmhRAnxZpybuTTtAPr1ULWmSFD",
  "key16": "2MsAFYmCGrTFLYm22HemkNhLNP9zSh1HPGMNdakwFxtUXHJWxzJjkaLDTxRKzgmQj729krk9tnRUVsWNFhLpBMF6",
  "key17": "2SnSWX6BbKYRCMRVGEzCLm3byBZNsfySg4n7zh9W45MgKRoFZpiJwzD1cnHnCtZhYzEpA7SXxBB4L41PUsVTgWyh",
  "key18": "2ZaRkWhBDoRv1QRe5v6c4ghrUFTTyyTtgmhyds1J2AJBLSfVxjBb8Tb1P74Q7nQyFH3MgsrMCAHgHMGVtWsVa7WZ",
  "key19": "2VgMCP5YxGSHjobW3gatU8LdLLQKM8qfPbxCm69qtB2d4u9aS8qbwDBDLvMysN4KfUf7n7YPuEZNkJisvVbUc6mm",
  "key20": "5uBMvvP96y9ToSUiwZp8LXBGvzNxgCWnamHdYguaLG1xehGuXpis78gekXUTasEQMcxUo6JNRH9zntPBoSpp8HsV",
  "key21": "2Hbt9y6SzxsvfGQ2b32VKUTULaNsuZcmU1oRdw9zttmnGXMtsXHZrQV3CeBgD9UbNVayw9WLASBDGbtwdSoScLiB",
  "key22": "4phQKKmGkdhTKaSGDh3vAptmqfXopmRx98WUR6HyWxem85HHUHnZ7KTBzKEFsMeRTiGQQBVFG7FKoS1gECpmTQBv",
  "key23": "2D11hSn5de31ycNcx9moJWSVVZFdvo8A1qm7mgrasgBFTuK5x22R5i2fWcKBHTAAmDeQ5AEUraijK245QWevdgnT",
  "key24": "2YHLBjSEkyhxuxJkNyrpXwS9UtVrdHHztWTp1Vu17Po2HW9aGP77nv9sTyw5M3JEf84ii1qcXRU15EZVkaoNXbXT",
  "key25": "H1eB6sxi2kBpcB7KkgEMtgYvFZkkfSsCm6vqK2erJLUQFFkq1yEVjqkLAFsoWNUyAhuiFqtcNfbC7XVa5FPcYNE",
  "key26": "3TiFBexnWFkMf3unNS2wRd63e4eaDPKVXRzxJZ1gy1aA8wyEfYJD7VfFf3S6X2qAXkmtYFypYYDpRY5zTM9bcBfR",
  "key27": "5KxQSFQV4j7JyH3DuBnLHM8E2dfsSeZuUFTRiXM2dhzwRtWnntBrad5R9egQ7gEjwVg58ZqYcxTGVacqE6FXsDAv",
  "key28": "23Z15pMxJDLg6aj6x4TzpPULgXfGH5iiFK5YpdMPFBZwjHGqsXVQnjxUCuWXswfdd4JAUjFTZWWzc9oLtRnjEtSB",
  "key29": "4PHGBi11N37WBnHDN4TAF1TtuTY7iUNE8QTn2W9MVbVFr7U5Dpkg9PUg6yNvNDnY5rv4KH2kbmqC8k81G9FzGfgQ",
  "key30": "2bU9JUBmnQhfAp7EHwb3MgnwdLecX7KgQyiBip94NQWyM5LCm1PQrvcEWV4pX7tpq5eGkb5dc2ZuwvB3xCLNBxy9",
  "key31": "4fDKtX6d2oyhZFZPNwPbnvckKHaESxz3BoKGnZFH55QVpuSJKzqwVn1yHQKqxxF3kasAX4naF116Lksqz7dj9uSz",
  "key32": "5FtF5fDJvdmm3gRpQLZdYteyTsAJjDfWP5QBke6oKikkAcswGr1zWQwyMxcKFuKBtmgJ3ZZ1k8WahrboBW8cKwm2",
  "key33": "42ZbK3uvjgTkNMGv6NCKGoy4pfpj9Q2j4qC1tfaiqs8vn9yvTgZXQzCXk5Q4t4V9ch2vohnZj1TqWGDCBEXc8Hcs",
  "key34": "59a1fUrfA6HmKfviQT5nsPQLWoPuqhAk2m9i6Bh51fkq1u7JDQEnP8yhtDTBNLDGVhZ1QwnSTenTDNomcy9upV8h",
  "key35": "2Eutfa9tYQu5ZK7uZTjpg3Fo49nCritq6E2Tzhj8yc7gy2LuCdRZTrhBst1J2AZfLGP9gXgTR7yrVoHqmVYpdPUV",
  "key36": "534fhQZeMHP2eShgAxA7sRy9xMh3erWDejUhxX9m3nqpAiiBTe2YiW7ZzfZQMboYH749cbg8AWoZVvgwfRRYX2A7",
  "key37": "5NwJ64wZ3XEL7SZFKijFhuVY4ZacJvNS9iycmgaNcwgZRABErB9QE639WKUyQmRobLser7mpDsM32LGigkFETXQS",
  "key38": "4PXvfQXtqoCsxQGwkqeuNtxxEBC33vqbLzabqi9RJ38DFCnEg6cRiyFupSp42V9JFx3or1GvP6d5gnWWJ3azJNRn",
  "key39": "4XM3aNsTeqodBguH7nMjA5ThLpv9s2HaTQygh2upjbLzqjyKQNFdt1FUJgjsykhLkKwR7eX7UXwnF1BnGQhBaN5h",
  "key40": "zybvRLnvUusUXy6scMHHE7JRhrgjFCPRfrTeJRUpwxL51yYXRfCgiJxTvevVgQrxaoVF7NNs3yhjz9UD7WnFDp4",
  "key41": "3wDxRcXnNKPTKiXNZeT5fmwVM7HgdBY5V8VcWmeyHL1eot4sLRaXwRUPBkFGbv4tmKPn2ajnMGFpg23XBWfuqwSW",
  "key42": "21hvrcqzu3gpFXsZbDy2P7WijFp3YRgS7vYMoNVPEiksbri1o68WD4NQNETHduwYyEW46NMZ6RiBnf4duzp7RHfE",
  "key43": "GEZWDZtJTwwcVv6fqFtPFiXygSkaUYMTH2PSnNdox1P9HazZi8umVAFvBCCCstkcimUYn9yncgzNoZZjQwsrJiK"
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
