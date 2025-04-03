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
    "hycTW9PXXZ7Z2pAy9BWCRDbfqoAkEr9aZXeGk3gKUFp23MbXcERNeDfu7frhvHu36zDVPGzYjoxxUmnUcVSnvsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GU93WKSLwRSqDtG2oSFsgiaw6u51JJNLZcuRzJ7oW8D6gGFYC39FJvzWjX8bzhmQ2kKLMNkcr4SHaWRxP9rLtDz",
  "key1": "3zqvsFfjSZyxZCapvDCQXxFfkopY8drNnB6s3pfhBg5UQDs6PcF2XEQLH6pHzJbHN1y5SSFqanPiqDFth2eV9G4x",
  "key2": "4KAjGzDFe6FevzprUeLEcHp32YAgdTYQbPDwPwvXEmutgfQnb5wKtuRXJSLAMGcgbk41o2XEYjbeyrbApbPefWXP",
  "key3": "471jgpiuiaEVsVqiPzgAupRjJuqaZyQxTYgXRZasXwZLYTPGZsUs9p98MXsZKMX2kHtG7hep5tueBLUQhdiu9Gci",
  "key4": "4QmEAXqBi9dnH6NGLoiNgMbyTyA1ECsbNvg9hAPR6o2CKDhFXoC4Utc8SxC8EkGK3NQqYhtqgJiLLQ25KxqZwjd1",
  "key5": "5KL7UR6upQVxBSkwQfxqnJniMYffVAvay7eFU8PeakcRh2aWf2KHP3AozTnqdQDJrNaze26GRAh51pVvHsrmfLqr",
  "key6": "3A1VZefN9LzgDgrdrCBPj9WShY4q8Avv3bqvxfF3sg2T4Y6qVY6sNUZA1ZTSZQeG8zm1EhXPiL4o4gSfStgE1vUQ",
  "key7": "5xBnCns1zr1Wv1CwCPEKZjn3whtzRy2rXMqcMhrBRUjhKXVNGCsbbnmdr2Y99FzrqbBw1EobjuqAXeFU8Mr6PWDi",
  "key8": "RJ9LVmS8mW2ntq23n5HvjLsCiZ2T5Yt4y5S5i6BM4bEr2RX3HKCAyohpdpxU6v5eKi99ysYtGFajq1BjQfbf62q",
  "key9": "2ZDfpwEJjFTE8FrpHnsJxRKPY9ins3nvzgjVNt1iFDiYUEE8qMSHB1fzxNnGhgaNe2r4bSBN4BKWCBjQntmCNkmm",
  "key10": "51HdtVhY6XMcGxY9sahzdk2DhbCtBYqsQi8upoThhJ2aCT3E3BcT3UyA7XrqeH6VN3nJ3xNXChwQmUrhk1r8PbSv",
  "key11": "5yrWhqcyZLvgxdqqJcNhhSRFymEtrvwbrqcjcepe1JNXMS7STFA19eVkKVGBZ1zyBFDK2wJ7xbZcGwvoMf1PBEYi",
  "key12": "5SmmYnXKcPHvbHVidyUEgPpFCubrz7XyXCzEYufTFdAqS7cp1MCJ18SCFZTbxWu32Kn2LtiVHFePL2j9fBmWqXUm",
  "key13": "5ZtUgRofF9ELzwJTUE5PeVKkv6o5afVcVkdD9gUTsByjTNcnaCgckRH7r62y5Dis5FNDan7btwLLmWYidqUdksmU",
  "key14": "WAYgEGGJhBteD7xPV5UFtV114erx9p8g9JSuutatphAeo7eB4TCNjoimLy6iyc7r8ya3EHzQ29LTheHdq26NQRT",
  "key15": "jmu6csFN1pF2K5ZkFV9xRp29P758bHZgQcumuGSVsfLmHpsaWtPFo51KsjUhqu5aFA4hrv3BNJEWYhdYv8gUWcp",
  "key16": "3EsxHZEqzzWutCjRfhWvgUSjBd6J5pCVetPKM83C7Tecwap7vJZXeH6oq1PsiipreFeTmeQiCTMsTJ9iyA5Jxzfs",
  "key17": "5xBuUXZAUqqkBDxZXHpsLHJ8XnPEN2mBN8aVbrhzhJLdArwNcoNS7RkqRYx7cdZHCoKRQ9cZ36sVKfmdrmYYoRBR",
  "key18": "4sH8ndq6ce3hnZgLkp2gNxGAJCvYMpTU4r36tsw2XUvqp3CXd8YPUtoKykjZ5GjE7d8qtPnbArN78VGi1D6vf1r",
  "key19": "SDEzGfR2fGVYp89sqWVpVbYzGr6io6mKMfTvP9vaa26ep7DtFgGfrcmgwtdTobtZwKKfMKMUyQbxkh82a154LHP",
  "key20": "3EvKKmRa3pG1b6thFFGHdwduHHMMz9eYfsRS9WLHxHHPdvJag6SMYHZQTYVSRsbZ8oAeJzRVjkW4U6BwdcYyAntU",
  "key21": "i6UcPcsfi9xQmZLQQiL7A3kiJUyrmKHib7fsKHModvoEZSxMjJTbrcgVBYbtvgJknauhGoKgJzavaRbYT1GFBt1",
  "key22": "98yPRxQi7zr9v1cmVbAc7HMbjB5dT1cnzsmDpWFEfnF6jUBj6w9CVspvhtAzqTv5LVx6mvgs59WYprGp4H1Tn5d",
  "key23": "2zDX9UWuQppqtiw5yDNMaDxJ3zTPuTnuzwb4AZRrkeLVaa7oNCDnk5PqwhyB6oC8G1qcjPwAvM9okaaCva3Rw7TW",
  "key24": "5GMC1GBsuCZ4k18JzvADxdPrEG6e6mpgvkDbGgoh8E1JdYVcY4XtXKtv2UT4VBR8PjY9khY4vZbSUkr4nFHh3Ghr",
  "key25": "29CyPwrUXfCrwdara75DdoishZYC3Q1pvxYdTonvENcZeXpEFnsySYf7BqgSuLzSUAVcR7x5EHMx2heza7mArPND",
  "key26": "2R3TFbAEATJWb8jEMuvMm32qmFuoHKnUAKDxRwSj9CrMy8Vd6t1br6ZxYztXvr4XfUXPB7FG5CvuvqZdKX6xxME",
  "key27": "2XXPxekKrtEQWpy88Wavrm4DnnBccdYEuHdTYRbHWLNy59nv2AR128opNAwH9WKdAh9bman7KhjoEqj9sYQTpZ9V",
  "key28": "zrUVynU1NfG6XBLM2vPYHb618P2cAvbsPTr2tK7oFt4jQPFDvubQZi1ESaQq33721iNSCfabGQ7pQV2GLYA6Fkk",
  "key29": "3eLC1M8f1gMaqJ9ndYn1UHiGjsuW3gCY3WtygyfXw75su2L6vP4jXufYHM6RW2XkNYnFXEf4eFw9Gyvr7vMewSrk",
  "key30": "2EBYQ7ddZm8oJmLsS1aGotPyeNqQxZGQAByLz6L5K5hvwAsoWMYAQPh4C21cMofyW3Yug7v6riN4D3aH9G9934mZ",
  "key31": "5LyyUAboZtsE9X3dxWxu93x69uFuSqd8nPNU7MuQmau8nBydFDzsr2SRtryr57Q9WPxM3YR4WojZu1GNZQgQfqoi",
  "key32": "4YH5fMN1DpWPdEHp6MGgQ4iiYzGLKMmKEHWEkSsikEY3EzwpCR5UvPWBwvRdLQZYMdPabTmUgA2RE4u8sEwshKuG",
  "key33": "44SXFLsdKcoMaw9M9nyVdexskf9LVSYrAR2FUtiN6NJtCYUUhMV25KausJUDxX2bAUkUJuC6DbTgMDZu8g7k61k3",
  "key34": "4VGVkJFq79pHxsoeCCj6qmcTZG9MezovtRKfRw2o1Pj1oApzjizBqQPaxqNeih6GmLWAwd1bAigA8PnoBFjYgJmJ",
  "key35": "2BYBfv3hGMajQwsJHm6o1zVekKmVCyAouopxy8capcBWW3yv5H4HbKMTovZmpEGPorihpVCLRE3R9NMuYmhqm8LR",
  "key36": "5qHHbXiq3jLAWcD3wBdzh6MSW8DrVf7veBKBcME68jVWNrFmWzzEKp3LAYTk4aHEjoD6AT5PJCcvutke6LAZxqjx",
  "key37": "2vzuANxcc66Bu8EjDSGvFtCSLP69kmnyiVecDnx9NoA349GtMZqm1fgd8H2Ln9TRYZL7fEt9ELwRyvYp3UKkaNNX",
  "key38": "WjdudCNUeViucHW1EK5zohmzUXihp9Q4RibQA4eunZcfhvnwc5qU7bEnq73Tj3dZneYknY72tF9KhmwyFsTZrwk",
  "key39": "4ijUfBgafBiV1VQmPUSrUpz14GfzjtzmFetiiZVne8o3tQr4KrFLSBPx9nht7E6wFfmFwVMxzLrDxgVNXQK7dXpe",
  "key40": "3jqR8Uurut3K6fYVKarRUqhZMrtXHXLyfVx2Mkq3aggziyexT77iWmSGUQ2paxfukqXRTySsRH79q5JDvrnYG8uy",
  "key41": "DtBtgJXqAKtGXWXLgrQFn9SgF1MinpQrqmb5htD2tsVd6dDLLcb5R4DtRtt4aieZntHBTyAy6LDeZvcfwjBgS57",
  "key42": "KVkycyvmocYJLJCe5usLRLUoxACPePWbLYmdMS9byZpQLCNyBo6F1C3tu3HQGFytk7v9E1ja18WSqgMqJ3Ld2fV",
  "key43": "3bCHi8xs1npWxSJhgc4okDwExtyjgutvuvPb4mgHxiNkncyaBhFGYBb2FfkAvzTW8SNUWvD1Keyg5tQ1UKEHoqzn"
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
