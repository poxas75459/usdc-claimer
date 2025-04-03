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
    "4BeT8WTN8JiSfAzxm7xsVCCx9tfp9avc85L9FDMzYC3iCSAGxbzJxHsghVjkyZRHKfXTVWBRQVNQHHJUKyZ3CWAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46KQfyW1eRsVafR6f2jxUTMRgXwapD7T6tZZhpaXNj1iu1V7Ra1JRtsvEvBaW6iqoJULbEhBZaQX19F8Z7cB59Wh",
  "key1": "4bThavLNLe6aVaVfdpMfzE5jiNdSow7i7v2ESVP9frwz7Q2MvX1qdV5yxQCwqgDoJghGniJEaP6YQixjJ66xNyZH",
  "key2": "1dYHKpQgCnCixALxN85ULBycjRQ1YnQFQgd5cR4wf3V4J39zSS45Yf739ABP1LQHEmTGA2Lye2eUCcFTdu7ru3e",
  "key3": "3hGZEgH1G4mQCff8vPYDWa6PA653qswECJqNf6EjzZKYLkKpNy6d962zymvy7h8DYxEhXAaCc3BYX6jd7e3LT4n1",
  "key4": "5YuAfZnyr9Dur1N9UcZEurmuCqxDUbffVtk3Bb2jqEiygybApEC1M64k2gna2tVGC1PsHimhqaNqieNKL3XZhcY8",
  "key5": "asM4soB7DyW8FpVhYMdpzAxtAgeJjEjU3PZecjkjAwZc2E1FG6VVTedQ7UtNL5X7J42RUShegT3ygawwWrDN3za",
  "key6": "3wry4xnAJWuNQVHcPTeLKRB3SwMzk8DH37w3ZvgdVFwkRkartGBrNFFKFE6QEXADxD9QYiokVque2QSn7yvYxJNC",
  "key7": "muXeiqRxYrq2MEbRYVgLfW1vcmpr7Anib9Vn9jSd3AJxb529JvB57YQyA3f3MzKGqmb2efUmp5S7v2ocmo7ZVR2",
  "key8": "TfFJ9ZvQM3SVEdZjF2P2gwFy6oNHQM8oF3ShRgZJ9gASNfgqjVmeDG4ZcBX3p1AMFEYMWyjj8sykob43mLMRhNy",
  "key9": "3X3atg5dyWZJMQPvfcTGVL1d4Auw1NrTVhzf5PNvRAzUbjFS8CSkNpuLZFMFfbNkPdsu5JHAk12K21Y6aSgXNUWN",
  "key10": "4pQk52RPEt1TasFFnYMyAQkAyWgoDG7qjwjSqZEgbq8cNPG97PF6Ez7mKSKBxs6cByeJ1Hg4fZYSZrNpBKcwWAJk",
  "key11": "3pERmX3sNGXDU2Zfp8m1PSBwdsqZdogwdo5f5Ty3hUMAiKbXqgTTWxNbg8dYSFkyeDzV2gZ7jR8heGnKk7hk5MJ8",
  "key12": "3aErDQrr8wPorVVbjadFpD1cU74BBGpMfD8jPRHsVGwtkXkEfi4ZRZvXPfW68kb6igp5rRs8WHnmejbtD8YrgK36",
  "key13": "5ivCDDDCrnu6PycdSFVmsK8X5y2nMnsKqLzFp4om5c9Q89QyyGDXF8hyDNfJspt32UmvwJVU2wGZRWQ7r2Q1FbsY",
  "key14": "5DXrEwpGbjEckEde9rHaZNR4TjfXKzMjSxabacCJ3cgLxQH8kqfUP1X7UoMrzXCuiXFd7X4tTyn5faWDF68t4UZJ",
  "key15": "5BaXbXS2bMEzJRHPNjcWuf24rdfEhsivPNoQoB63S8XanZ6KRX47VsmP1btatvtJxWPutj2CjUamZzjFwUuHTMLW",
  "key16": "AcZypKx9g9wvf3ivcjWBxNoZ7RVpfgsLQ2EshQJf385LW3v6u4UU8MatU1q5PZKCb9KaAoFfi8vbk3MMcS7TeM1",
  "key17": "31KWw2F3T2PvcWdXeyx76jMe9ZDSHLv7agxvN8af4P2u9Jsu35WtcxHZT6k1wzFFGGsaXAUqwyLsAV7hTudrg9Df",
  "key18": "4aY3vB9hfyfaJfnzLdhq1MRkTxMuN1unwjXTNF81gfqmfbX1asukXg4STchpKrGz9zipdMFfCunKWvrf8HkX6crG",
  "key19": "3E8yrY1TS7dNzPWtz9Mt3N5KVgdQSBY8nUi5fQeesWx6SQMZBiE6Q6jMNP326vndMboqK3K5TGN3sVqQt9Whxgty",
  "key20": "4PXNkAUmBeUU8iTfNtCXuVD2YnLXLbFAAy1VzkZRANLwg9znDVSxdvFYpPvMTzWqy6dTRFD8RwHkyi2SWfGwFCcT",
  "key21": "5Kuo8cm7S5KGbYRb9sFMAsVSjKXqTDLnXSvBMbcTetY4anwiBevKr1MmpRjx9HCMLU1p6x8DxJjf3gDMrPtQgfp",
  "key22": "jx2LnFohkbmktaWsyq9eqEsCfPmedRHoTfDNN2dRepMadkG8jLAeo5dg53UTkFRJPwHrnAtNg95eX5ANMLi1cx5",
  "key23": "4DHxBW3Xtnr3rAXSNRw8xk6Thf1sBQF1THsKkB5EQmWRiEer1aYErBqsnbiFJ8H5sEY23r5yUoTYS7PefXBK7mU8",
  "key24": "2bAccXPQTdwtAWKAfCn3XwgaeoCxy5EMZN37XnXJoAzkiS7TmbwyVfZQiE9U9ffskydkwHfsUBuAiXYr1fyENNYx",
  "key25": "4UWgAPWamwVxDurfpf4egYeW3EKq3TECwbprFiQVd5JLQxxUU3mcxfSiyGoC8jrHQTvWe5bhjkquTd2d1TEJnXZb",
  "key26": "3B7Cw9PKRNi8zfvLYKGpEbPYoG9UECUkHcARXwS9saQVQyhZxYZEeVphRxkx84yDGhpiqkSJJWG1Mzy5ifpnYZwC",
  "key27": "pHwUUBmcS9vSNxh2uS8yySxAkaPWTc5WmhRuE6wDUtdqRRc9GP9P5sCHw72X9Pb61KNN1ouYV4LMGKyLo4ib5u8"
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
