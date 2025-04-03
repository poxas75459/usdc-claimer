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
    "3NNtsm8pruyY5UksbUBDhtsXXtxnwPJhhtkpQVQBFpfwJrw2GddqinuV2origWMQxBQJ716aJeK5iS26kv1ueq3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LD6HMpvBKuZoDiaCmjyCdraaB9529v8rAc8ir6Q1AfoMXvqZiYxvzmDm3sL6Zz4MweTrg7hFRRpBbUUo65pBYKM",
  "key1": "36vZyY5hieBcKXs3ZopXAw5BtFnroZj6hbmGGsTNgBGw65kCU261b8wtDS5po1nKNr4TpkTh1rHX43VLSxoH4WW6",
  "key2": "qSL3VcA47ZqeyWmwrkEqZh5Y8F6L2FUbmHyzuqoNCZJJUrEYYvi4AT6w4XM9KNXJ5tFpgW4MBffW2xUA1ZpPju8",
  "key3": "2YMZYZdD9EpFiDcZr67rRF19FYLFZc4q6QEit5D3J8F3XL5Mszh6wY5HiUEiioNSkpAbGYRFXuRnLL2C91659wim",
  "key4": "3juRZ41FJki3NRVTopRCd1r3QGc9YPguGcg6JwMXEAYqs2UXDsgVnncJHUNek1DSsGSo3PQjfTfCfckvPCATrniZ",
  "key5": "24Qspymmxqg32NMKF3nKrFH3HSbdo4ijncT3iRMyrwJR2hzVSFE59T1bvp542DQz3oXc684DoZPwU4j8B4i76tKF",
  "key6": "pAJCcF6PuompocNmziTSH4iDJGEQ662xg9e6NEKCo7A4aFFi7ZYQTRQWveC2MnQP1jn6vc6uBYBQTzrCLpuAPKf",
  "key7": "3k6rVqwnh34pdVdoTDkT8CDGGLP1pcgJ5wX5Xv1WPx4g2rxowtWRgqfkgKtjg6gt4Xmmy9iXEk99bnSxyFAdVL39",
  "key8": "4vEax57eND9CoLg8aDg8S3pK7JFQMmX5XTKo5eTqHNsAyMs22gL14EzzcxQVh6whpBrpU4x5rxzdgAeDede7Zg2g",
  "key9": "46Q6a6o25ggeRZrPt32UWUssr9vGyUsZMKeq38o6np2xpnVzvP753xxzC1jnpeYqRYxyE1ry6dAhvWQ1yZmE5Tcw",
  "key10": "5BjtqrDxdsBgZsJ24ipUKQgZtnPxu752kW6uiVHfNiGdB8f1sDHWqKovdjA9r2jtx3NgKjBzD6iJU5w7z4wRE5Ue",
  "key11": "4Q2tkPvsM2QyL79SPbsb16g7zLt2edebk2sHJERWQEtrbsA4x6wz4etvmc994xaXhRYXmzgbE1xZU1JvEpMkLuLK",
  "key12": "5ysLDczXE7GYfnp5CyiQdpJgC4ZaEJqgcXYtoLJngDfu1xwqE8qnMZXf32CysztE5ZKfHi1ZeJYK1PoAieum2K5s",
  "key13": "4EUP7Ay3oA6u1iA43ZWSqdUQg7sSAfmjJFQvxnXD5LKeQoTRPtg6ZaPFRDmF8ENTYJgQ5Rv1RLQhvb8Xk9tSzNjn",
  "key14": "2s6Z9u99rpP2tNBmvrZeDWj87mrQVEQBv7tHLD6PVXHL5Mu7hZQzW274jGitADdcgLEoEoebksQMwAetwt3r5KM1",
  "key15": "2aF7Uz392GYdeu725HwNqqhE1XEwPq2WiaDAYPA3GNNHQUPXBRxpaZY5UEGLfKjczDSc7GHRLcpboECs4ukRvnc2",
  "key16": "1zspfrErXDuxdijqiuB6sZS2eRu1tY2wFz2bEnvaZWbeL13aD5ezYcaxCHcLid6AcmtSxYv9g1KrjXnyqiQW1aU",
  "key17": "2CDD93NDPpQMgAcexnbTkqVHwUjmZqTYUmTTpFqayoqvfXcLWKatJaNqFDpfHmG6adrigiEU1cTkWRuchWD6BM38",
  "key18": "2s2X6m5mryGakb7PcZ1g9ThDPXFy8RQQnSaMcuHhvK6V6t4gnreWHJaPQ4u8R2ALCyoLXfVK5NuqiJfSwt39iwpW",
  "key19": "4HmF5c3SgZoqLvDGM4pWAj2ahiWcteyLQTYzVaZy7f2j9m7vzLgDcHfvAFYUdS54wFStSbyaxTkZT6eYZg5ZwCqR",
  "key20": "5Nrjup7Sc3hcunqqkNzG9mEaKkPA4kzeZYYiFF6twxrXg8fVoX9aAScnckVMSoUeMWT9VbfdRFGP774BWdNEuTSA",
  "key21": "Wz7WNr8nDYugfVyZYNQ8tLpZkExzczA3wMkHCUWf5KkXJr28UneraBFmDUVjt2NBoLTU8he4fetZEgHCUUfoASX",
  "key22": "4b4ULWZJM49TCgfvxhrY7LNMd4boMManx1KF9mrUp3Hzph7AoYFgAYSZxtzEicWxh6zT4Y7xqtBM4ucvgEpHRrge",
  "key23": "4AukLuHk1sXXgMmGV3sLfvktFcfP3FZRBu41KqpbzhTPRPy3GNVuLTWGNvJJXWWyqwvPPCspKDEfyY1EegdXnLvm",
  "key24": "5T7WRMgtiofpn5DD2rG35eACTKf9bZ5bRg94AgyPhqhfizBTPqJTKTExn88J92o28RLzPym7Jb1UFr6z6z1Yfce4",
  "key25": "4LV94GWF1uJ1kvQNtVWjpszfrJFAMrtGVB1DYxcnAg7hKcH3pNECukZVCH5FGiaS7DBUEK9um1ThPydFJ3TNsBc1",
  "key26": "61E7Hxqyc5z4vsGY1GAbQAJnABwYw9NJTz98qvwH8ZVJrhkNk8WjPZ2Pna4TXKMuRRjNBQvyyWTWXgEvrtrj1LBd",
  "key27": "3ViZ3UDRTRpazGPuZ2ozEWpEMY1X5zaWaAtdVCfWGpBH8jaxWeZe1isRVnis877sHrHZtiCkvquXbTtdDG5TSivp",
  "key28": "5XVPJ87XdWCPmY22h622oEpCQ5aNofnqqwNXdFQujSA1cotxxwnC5MHwfrBqdiMyyT7TTiaYqjMMNPxaRiGAsVdS",
  "key29": "2hAV2YV8bbJUnNEx161xbukt3Khirhf72DnJSzYQ4JE2tSQgV6xgkR1Nbm1329wX6Xrf8hD9vhAvqRvRWs9UFkFc",
  "key30": "UD6VzCMnGJmo9vpFW1u7H5TFzxda2gYTiPYUi9Kf1Np9cqiT9qPuTRs2yHnW3hZxxMJKrfR8M4FJ1oubkNYvHsx",
  "key31": "3111WimeoLqS1aTju1btW7uetpndDQxeGL8xwHUWggz6PMMiYcfGYzDGc3qEWCNkNsksUn8AgP8CvxyD1UKvgxM5",
  "key32": "2tadZGPeu67tBDMGYHPMpUYN5t4qo8gXQULaG1eVqEFbdx3NUtRas1xLfNFeYMEJjSmEAN25k1sfPmteJz8AS67Z",
  "key33": "5WvjgnUbCN7GevPUwtcggjhigSyxJiurarGWB5JfQafgtUtJbRUzKtWVRUJ44H5zFTKP8QFcvAWdvPb5VmztAFSr",
  "key34": "2YiDGZjCVXUecQoiWmNFP6krTHqptcgjVjPgvesdbYbAbegmNhPkK82YPKwbccXnUpmc4CCVzKAHhi6gt1nG3DJf",
  "key35": "ECKDywvPjBgSSAPppdFRL854XYgDvAbiTG7iaFUp7E3jC5F884Jt2r2CMJT2MAcEQfmpMwf3j5GVVTqA46EYYSW",
  "key36": "51UFQuoJFT8Y88FutcNRUvJMdQZSbNpDKeLsaHKswPe8dsEaS1CarYA4mpakCPt5dhaKuPhjGVMCebo2uRj6VaRR",
  "key37": "5T5rzGKLXGESikbfwW8sb9a4CBqgGixDwFyDEbmdyr3kJU31X2LqsW9hL9CywcTc29WoSqrxtacijXZJ7CZooyYb",
  "key38": "f8hbdgYF3knYCzP64Puf3pe4MYRMWiAywQsWVpf4khRSUGzayo9DBBQufFzcjhqwyr4Zfyh1yJLXX65nssUxSL2",
  "key39": "5y1xQCY9bYmjKnTxgUZfSwTgw91hbPa9cTeXNuMhW34jGib4ugQ2X4qXySDMnTBWLWsVtF66sx55rN14QV9t98VU",
  "key40": "3odD6AWX7YAUu4stcB43mjdQ5r437BfN2t6ZjVeyKjV7x2mGqCttup7oKL7vubMsvWBAyH3sErJACjzqjC8RxMRD",
  "key41": "5nKjchbJeTWbNQTA9gMDjUPKzxXySx1McxUfwwzi2hm5n3J9cUu5hhiM1TEfcfiDFR7D7qVmL2RAfckCwkUx26f9",
  "key42": "5uJHxsJgZK1U138Ut16Jwqa9z9ywkBmhT38eRQiDdA89aMa8xF2WRvrqXQbjfHLE17CCGUs8nGMoNykmjmMpuZXT",
  "key43": "4BUSUdnhaiMi7Z7YSQF9RwrDKgKSK7hVWhyfncABeFMz8cMfEUhkQmWEtUQRRDwaS5kAnYd4aTAx2aRmpyVqBXY7",
  "key44": "9SDuRKtNMqT7ceYtu3vj6M79nKeudhDnvtSvwnMWnvMDaambKttDfMA6dk25BFHeDiDU3LxTMHbWxJkQyuweb7j",
  "key45": "2sbNyAW5fTNW8QGiFgj8UU9KRUqqSks5Qss6Sh39YhmYrKwEBXRx92FM9RQkus8eTUyAjwFJHLzfThByf2JiRVXS",
  "key46": "3ZnmWd6b9PXSduWs18e8CpKv2wwMSPmFZ1gYV7XT1nJGcmL9BdPb7MvdD9zwBZA3Ea845BVynwqLo6qEWapbaY9B",
  "key47": "23LqysUZLwchrd2YjrWbPjkbqVqBQgE19TzzfXvfmMnDqsFLi9FnyfHsKQM3AGX1HZSjyWaeDLJY3n8urMWc9s5Z"
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
