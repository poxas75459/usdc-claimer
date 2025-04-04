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
    "3xnu4e61xCy338wYHFdsxVLKNXrbWMN7af9z4eSBzhsAe3M4PL8HRowyghCxfFCpSDjNWs2T8V6gGqZKAPktMDjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39jikAbyVwbYFaGkkUfdjxVCWntHpK3nPQ3gjHfdeY8UpBkpHWXNspP1i6UKDXkQij7NsK25SseAiZABz8uqKFdd",
  "key1": "5CxZdnChAoYVGJb2wkqrKskFPHQQ2HeJvFbLWRxNHWqSbG9PptFx4jr2RoXBrypwVF5nTnm2Vwj87ENKb3X8UPGm",
  "key2": "cZx2QWjR3USc7TAMGbPBhNt6UY4n7ihSSrP9963bHeArsGo6cHUp8AQARNGEQ3pUM8KxjeujbV122PHjiXJy5Ke",
  "key3": "2oxAEMoZFapd5jqjGMkHfoKHuVGqCHXUNZEsCm8iNg6EHGgd8symXZFfgJ7ejS1q1gCUx7PAJXd85LXrNyBe5tPm",
  "key4": "2f6omAN3BcRRXYBBfPWSnwCfDznUABwPEMeoK3jG8RFpWPEeatUGE6z2eW2yrADSA1Fbc9UDiPy3Cgj123X9nEzR",
  "key5": "2z1SBcxDnLKPtvSJLUGYR7sh4JTtEDV9fNmYBtFxXrHD2PihB711avNnprEkx1jf6Y1rteNbc7r9QTMcHMADVBpV",
  "key6": "2agYTg1e3mUAbnMTaEp8pgwttA2gAwDqZevQoz3XjN4UugmHmvGB9tsbi7TAMS4grrosm8e4nB9Q6ing2PBFPKEP",
  "key7": "3b3MKAmyXiDYjrwWntRpSouLusKusePus8uXRu8DBK3bKHXaPCSPuWZotw7z7SqZzMTTVSg7StQ5RRCamXGSUbmc",
  "key8": "63k1PXM2pDBWcbNh6MivQL3FUsRuuEYEA1ZmVhvGjjbK1h5b4Tz2sgdP3DyC5BeNJjMZ9YmnLydKLUEm6cv3dCA8",
  "key9": "4c4vRCrk8CNfV6C6pUT2EXq3nz4W3HUDVZrUQTk4pPqfRgDNyncmBAtiggNcqh9j4X7gvneMMdAhebm6TigTG7W7",
  "key10": "ryNqVW3X6kFBRqcr9XG94SzchGYt6B5kDfDjLkWEZX4Ze3vVYv6PhmpBY5hZTSsF8iCNc76JHwxYdF5tmR3nwZJ",
  "key11": "2YtgZSjFRc792iscMCi9wGyEsfgyG7fxqXJnFvB8mvApR2HsMRZLeMsz6Cv5fMZmqn7VT4WduSe573Duwbk6ACxV",
  "key12": "4VgazBWsLZ7Wk7JEm7Rbv12KVgRF6i3FPWu8XQ1ELKVQXFAyBWBhrbukGqBFSyURbQhLu4ThLeEgKBC2D9bqN4V8",
  "key13": "2Ny328RUjxGe75cDVYCw8NNSDSKdxG9E6ebgsruGDA2oG4kLJmYvB2cCaAFXRXPMgUHhrPbLgbU8QsdNtkgkYVNv",
  "key14": "dwRKtt3CZxUzUY4ZyxCmecaTcraFrUm1pb51gVbGgvYHEvs7RXH6X1MCPVDb165Qo7aN5EAbmbwrFXqT46WkhcB",
  "key15": "5DXd8BzFfBfAufShvUbNDZMvA9KYuMbUBWY14mX2NN4csBVTvS2vGMDxReFee6TCSspQwMmvWJQJ5wzkL5cCXpP1",
  "key16": "5pNYaV8HbEe5D6XauYZYQJWASsvBrRxjtJncVxSNQPcnpERfQqViGMiR4vMfFEmJAkXSFjD2GqyekaZzoBKb4Lre",
  "key17": "9Wg3EQ2wweVx3WU1ABQ1hWrAMZyJWqXUkHCszMsGBZ7X8iVxaB9FpAd2McoV7GjUiPWS4Mdvfyt12QXnJuCo18W",
  "key18": "3ABTMN8xiTQbCJGczx2wFdt2TkNFHCHs25F2bxSRc3p1sDU9xCZzm9YWdFHE4ypeqrhj94MLdhVV5LJLgBpFXdUB",
  "key19": "5vDfKjPUUHtNthPGs61LN7Eqi1ZYvTGECnmxSzHczAn7WH9JmJtHxHd2kXjNmRMZQXziWhNzuBYYawvQe8udNac6",
  "key20": "2c8KqZyAqbrUkFB2ojMpsxuVcJvxtmsAo6uakCRmjEyp79N14Qb4cfmkMZ1PrAdJVHnhsYNVK8Wa7WC8hNd1C3b7",
  "key21": "37JMWDfjUnyv3A9vwxbuq3gH6pA2kftpLEx6tPZkdrDtNNW5kCAsixu2c7akKYon8D4gBf1R9pbp3Hy2Zw6FY3Hf",
  "key22": "3rxQShjunHmmfQT3r8aJVooUoBqqHjDodhd4beQgFY4NK1op4sCxwfT7jXLzewbYBKBv1WUa1Y6SEcuUXqnn7182",
  "key23": "3DdTaSPnjGuDWJ5EGRCesvZbhAjkEZ8R6sz1ft9o79y38suXK98zRZdnvZXPbyTwMqhe8JJiYa3NTREx621v6S8H",
  "key24": "2ZZNXFwah29YeFfCbpdEMjNzNeVtnjk6qMAxLQccgNY3NLaG6Ha9fRYY6rvXxRpLybdjxMfgzmAKmtU7LRZ9cr2A",
  "key25": "qoGay1HiSNbGpukCYZDjt4sVBbYZaiRmtZXqmmRe9fBNWw11N4sz5RzKn2sETx84RjFVvz2rCdKYhdHNnNDAQHZ",
  "key26": "5CiJeAVjEhNQcLYQgJjtFVRDtsoXv4upZfsEM9PxGeaPjPiqp3TfbRxrScHPNETBFNcQmv5bWi58wXbR4f8rXVyv",
  "key27": "2q3GXNFqD3YuoTNMv3T5dZXqzLNKxjZGW3AxRdrtTKRiSFBreWiuHS1mWqm4k7aNw5ZpPW3CAQasn5NLDf2SKP5P",
  "key28": "3MseFdw2kZz87SR2HxDfvp8ggcN5v8xRoSqBFKGr1UpfKh7F7eRBvVbC6pTUGn8SV4cvXxm9GTUsrTbcXqo4j3eC",
  "key29": "4Ye9Q4eaxfznQw9Au6hNLD1M8g8wmwkG7t4xe4WzyY8BcGyTuikEXbT2WKCQmiVnh8LyFPmrmKFmuS4Fo83VnD2A",
  "key30": "zrB8gyzMi9WL7F9CN18MdeWvZvrdwnmEuqBL5iw6symbvZ8FDWrH1SB2quCwyUaDaLymMr1ZHxzq1vNRxyTibMG",
  "key31": "3gEgMnPQE7Z6Fea2B6LpJwKfAfSnJ7ZGnJtn2JnkpmJyFW4sW5kHtNq1qWhr1KzHALjGfiBQ5LZH5mj83tZv4Zao",
  "key32": "4PsgSxZQGmjSWs3onZ7zMPy3AGWbB4TJjTCJdCqY1xK3ypWAVCBVNhCYEJPchyRBEa4dekHkaxkh3TjXdL9igZvs",
  "key33": "wb9wQYZQFHSTqQTiQR8BotGrLzhd4J1gjhcpDymgfkXzTYPrz5wUKyg3xeK9GY33UGG1z9ASGmQqzzmRzSVuLgq",
  "key34": "3JvHpfmocCputAB4C99AJszM5vjbnDMEunTDjeGaoaJ5wFPvtZts6zi1bcc79o3gNu59h6AajoiEUtgciMxzsZUG",
  "key35": "25Qzjkhjz1DqXVqVeHuMWypRtqQ8TvgWDptDKW11YPF2vpS9SweZ7Ymj87boybuWm3X7DLk7tgUVdM4gkLHmoV9m",
  "key36": "5LpAHUpYJSP3ZvwhZrXbsqarFFdCs4nKHksRXib7b36yNbgd3YGrVaRjbACzga6Jwr9CRNx3jh2UnzNXULpKXuK2",
  "key37": "jwUksaUR3SXDmqSzEmqAgtWMwnhJCMm96VgECaPhoxriN4ECZq1PkoP4e6xMYERMAuqEwJtzzmaVC9YEhFAkAXh",
  "key38": "3pZxMbePvrPnRiEfDpq66uMKU2PDogyXWjpnZGNWUmXkRuYGhkKjLN35yeo3nk7Mm8Gv1thzEwXrP5y1BXJjf5Zo",
  "key39": "2PLDRfQEEpKu7UjRJ6oJH1axXAPEW22et2zmv6bK8W3aXA7YeBkAyWdG8vHJ5aVWf4E4zYnuPR4c6pFLXnxFVXRK",
  "key40": "2iZezrKzFvtZiw6TyFihjkyUGX7bkWwvPwj2TpMZMX6fcMDAyCpqSr1p9Hsjkap3CAW57J5QzPnzeMgkkMnmdsyK",
  "key41": "P37xgfd852VKCv5sYgNHBhD3e4AXu2t5g8iqVmohpG2hx5QbEKtHXY2GtZLWbJyouWFLc9B5LCEssK1mNMc93ei"
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
