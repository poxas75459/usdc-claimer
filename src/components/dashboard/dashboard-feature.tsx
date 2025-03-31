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
    "zJx3QWzxGZNjoTwfMK3VSLUKRYUYqCM9GzD756JCVEx1ibWC7R6FgGr3MBV1mBSRDefsFmtMzi1XTDzmTFR7VMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JvMUzjcNiyYqTTF2ta5LEpAoNkhRvFhoBw28sBozKk9BvrFTv8AfyLqJuANUpKR3UW3MpPJi9srQRw1YBfiqG7V",
  "key1": "5uBWARQB8DdQxRNMdwmauMMzEU2LJCjK8RQcEPdg1cW6YXsmuzbR1CnAXexxWHfjK99k3xJL7imRJg1LD6yySihM",
  "key2": "5DKhJRnx5KycxuoxmFyXrQurwL14BytHN2RgRi1QNGp1oqsfi4povFcrjbmn72uDJbyBFHG5tvEjRVYgfTNiYv1c",
  "key3": "5P8m8otXRQu5bV9aDiPJEfUFAN2Mkp1jGHg88an9xZ7GhReGrGF5gm13M5YnjS4AqbG1FzUA2cF51ShTsBHJ6fx5",
  "key4": "41umdsx3mrbAKNWR2xmrUdcG87BXXX4XTbFQtNJyrPZEGgvFf76ZWyZYXbUEUkzRWcKJNd9Ujf7YppmoSJNHorpN",
  "key5": "4xe15zqyjxqiQhRuL3DG2jcXPdgcGbPRgZpV7f5iFqWD9BzyxNFMkdpLv7FRfTMMd8yVo4dDcBrKPVHa8eq2AwLf",
  "key6": "34wu8tTQYnvSRNHRpbwKHbnd9Xub4rpxNvbAetR2vDBzk5d7jyQcLeMFZd3TbZbQLjjFgunm4DH493mcPWACqX4P",
  "key7": "5TfZnwjp9Cw4PmQ3bXbw1yrdp5DGmUnnaADAyKR8LSpUsxWCGbM1KV7ghgqeVWd9Xnjzz6L9ZEtUQXuLarViYEnR",
  "key8": "4vsHJoGVDfexDYo856TQfCQREkXQhXw4qnzHxf4171zv11npbH3dfgeTaEWShKdKqL3SEmvxJ4unBso9cECWi9SA",
  "key9": "Z7YceppZoBAau7B1wUN23YpGDHRhbJhPTCCmr4G794YAXKgtUTUypqfj4Dw7kesSAHJ9nDEsh3maJYr2ZJyNN8C",
  "key10": "QBhdxZYupqmFu865cA8825dK8urU4kAehACTu4AxwP2Me6f7h29bpVdhNTYjuv8UAWKTKszJZCHAU8zKiG8WFhS",
  "key11": "4hFazcoRDYMmw7odKoyA4VQS5JWeULqg7r9JtLUj6F2ueMDs398EGGhPiqHoTTyDdC6qCm9dxmEYNdEpkWq8recS",
  "key12": "r4cTZrXh7T7p9UVZkpJ3etxGRYoD2KKorCFrdcMrzQSyRXRQ7tpXmnxnRJLLk7nUgBHUV465SUMtrw42TG3cwjY",
  "key13": "5kwNxu7bYbPqErgX4w6oZXZaFEbYmg1ngYWRmnFf4hbdQAnGDdH6MADk4uiQX1DEANYpfhN1e5iuro2Aypgy8iub",
  "key14": "3WEMhnKUv61ozDZei29kbDFRfd8RixHUPgbNR6TKCdpSkFBNQikQYknFgdGzLE5ZWeQEVLKLhMuH9Cgr3Yip9xgB",
  "key15": "49FWuyZjRKHBQtaa4WKDUXLpYFiHW1isFvgPwWjsQPnbHKbgzAbfUhHVMDguNPUTkSDvPbLyNULrLVedrSwrqkp4",
  "key16": "4XvaigKp1ixTRxhVCpQQuj4gSoSwJaUqZeLCdHiciXksqELV8QadPkGaap57iX6bYyBjunfMiwrzGTF4RDGuvSEg",
  "key17": "2aB3nNGniEWAYudcDQXMc4h1eboeApbmd7fpEgr8mExMVC3DsbwCRQ6vtSHDXXtCpL1idjcKSqsNNQR757ngzULK",
  "key18": "2icSvojUcYZhGAFGRrbT9TVrkZaLh834wr8KSCCGgwFW3GLa7HCrGg4eMNVxFBSFxQ8aLAQWtpsNRtchqjyYNxxC",
  "key19": "4E3GnT8WPy8toPyqwP4Lr3MYkoDouNXpnwHHoCiLPWnKYoYbAHt6t7k9L3FcFPsY4K4kTZndv1bGSX9d4PsnLB6x",
  "key20": "43UvJKXSoXHyU3xCaFpKcNo7LZFhZjzTabeRnmGLXKeiHyV4W5f3FKoguXHTePYuTkS6S6fe6FEqGraiFihdnUGY",
  "key21": "22CSngsuz3YyT4UJhWRXj8J8wUHVoXVmxpKHw6kdAzgbn794GKearSRTDAeReKgVEaYvjCAjhh7dBbjuddvvZbS2",
  "key22": "CCVvBaju8vpb2qAVuS1awJeR6TqBTkKdJugk7WG8sxbYpCYry9ZeV4327LLZ6qRQy9vbtqRFFso3imiHcKYbkMM",
  "key23": "4kru3KzjvFzbFc1Jxtk7JPEqWbotmfCsvRswPbYsktpPXY6SBkVHtVLghKub8k1LHMBitSe86cRSDPhU8Dy2QKE3",
  "key24": "3ZNNKw7iJvayGpmxyH8rf1gCcPpkRNxTSCUb3sxzUPXNKhSa5rza8SfsEFh2k1BPKn5Tg2R7bGtb51MqsZLNMoht",
  "key25": "4sdT5U76MeMMgbcqXv6UdLPzmezQCLeqXxKyhcEVgkbtPPUP4uVxzrDcF9PMP6jWZWUoYfYBAhm6f2VZBUW15dUh",
  "key26": "4zSMtbtaqgNwEed9MgirwfMDkq4J5S2xfvr6FCm2d4SXMbuHuA12DNRttmWytNzM4WVDGmSoVuMjgEnX8aAqtpmN",
  "key27": "QxT3XrC8aHqTpGJwKQDQQq6WSdQYSFBnMakkfgyNSo4EqjKeejR4XzJ63bbbMxu1WLTDuEBicqhquTMiK4GHput",
  "key28": "2GCEhmC1Y9BrCGb7BubFKQRVyH4gkdpoK9y3pRYpRmUg3m47od3Bm8NQGuNANkqWw7v3TSYSi2NM3V1hbiFrA61U",
  "key29": "4mZL8zWSQwbgRB5VpHBCEgLZaievNpKLErWbhBdQXSCVy1f76bFh7Rz7PPETX9mqX25Sj9w8venwndiBqtzwnqmu",
  "key30": "5heZg1Dg8yEg64soszvkRMfmZWEGiV4MmYSdjFLPeBXDKezwc2tnhn7iVeXsnEWVpGR8kDeVHfqdRV9TnAqxQvMk"
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
