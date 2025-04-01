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
    "faKPSqn6NrGGLneaz2QZgm82iswcDKfSvnYX2tJdudq5JXt7M5LP7yH2o3RAG37M4t2g9sDsmytrhGWwoUZ8NF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F6A7MDQc5DVHrXJdgRyGjYRJ8RLuCGiv3udCgSD7uDXFaoWtaeohFZean1ZNpU6iYi2cuP8boiR5YFKSi73X9bD",
  "key1": "5AhHh9M5XEbL21BZrFKF5iForbbRbjRtatSKh7MVkgGuiBkqYcjkDj1XE7B6wExiWvkdiViNEnubRv3hynSoCmNC",
  "key2": "391nqqExfdFxoHaBMLktAyenTmAdkTakgd1gdiCqFXX1in486FErkG8yRPEHQtWKyMMPCmwbrz2rEX2uZfqAwnbo",
  "key3": "rshRSQURyFHSAghrSuz71VsgXw8FhCxVo82Z9hQsYkFb2zvAB57XqyyTKSsL1bLtL8BoAev7Jmaa9KuZBS8HhCv",
  "key4": "5t8aMCmpzD3UQsTBMAHCaJBpiurBBySxr3GLn5gHaiu4hZBQS8AzM3SzbfJcXfmAyzMV2nxLhuy1cmK5bFvzH3ej",
  "key5": "48HjP1VYNwBsDvF5so2Q67F24bsnmamGqAHdc9vAHNgfLGLWAKAjBtbZdY4QdzenTWcVh65PSuAxjN1WZwCdBVHW",
  "key6": "468U6f4uzfUWb3882qNeKgBMPjrg2uCWskAmeMBdmMFXXgREFueNCs7B4wKFLw4MZ7ZnsUAVGVjhi3fYJgmQR323",
  "key7": "3oCiL98m8mPXyZxRWQCgi2gR2z1M8WjAzvCf8i6T8Jrn7C27T5ZDLvLfjuWce6BTwuaQFpo7bUMpBbH6sbLTzs17",
  "key8": "62rFTGtZKgwdYAgighqYzCrstYGXeD3hwDmywtjcEab2DGQpBYkPZR7S5SLkxgpYJpTZScbmSUKydUJiKzAZ285o",
  "key9": "51s8oZP6g2eiBwRvZG1RkRqD4UKbJQh4BgofaLxVTZZvyVLFFGVaeZTPbviuamS9bCYWKjRJqVoZiJmar1G8cAgh",
  "key10": "34uz8ZveQ8fnuJSZr8jtnqXxGyBWB2y8wcvKYG9UA77SjXkmrfaMxnJuSmCvdw9MMsHE8kQR2wobNqh95UU7u2wN",
  "key11": "qNZMGzyBiumVgeaxazxUoKdBes1TVDqRRLskmHT49ViHgqDoZmX8TmCuZKMmE3nPCrSLgw5nM53c7zufUFSDvBR",
  "key12": "2K3gZcumNEN9EdE5inKaNyHsgPAQk6oMUyzMSeva8dpqvNHXSzUhCGVLW6QvWMfwswRyPFHpmtPAUM9YnrgRTjnA",
  "key13": "3MvRkWoSJ3x4VTwFqLT6UXHTMrZkMJ4dnsAuNrePBASV3VQ4EDAFqLyfdQEug5afbrxZgasRrwuSWucmZn4yQrDb",
  "key14": "5ww9Nem1VexzrZMqqwqwcKs54LvnpSn7PA3sAPfRrf33hTSw499FKVe6z2KHB7AdZQmUusejeuvNEdPNW9pqfEmZ",
  "key15": "S8VpXKpjAP8Kdwh1s6NszXXPdKN4aZ9zdkKhcAp4xee2WYuhNPFnrEAUq29wKyGQwDLN2oCx73jPYwWGS9DAQQ2",
  "key16": "BvZpLLVzRw8CByVWZPMUQvjHSJtLo8bqW1GB1Q2cphktB9XkksFd8JNZfpyaPzcLRscS6dFKLLX87ivifdSsnM7",
  "key17": "3rfySyukKJVxM2yb4s3LYjDH8RAEPLkFZp3uMMawHBmptRTgGc4rqikdiR3P3AsU1Uv5rJQpt2vJ7HZyB4214BNF",
  "key18": "48xAgqp57iMcMRK5SgvCvzoJ1DdMuPqgDDRmq8dENeKam1PNaf8fdmr5P7F2f11prxKZ1wDBZAepAXR9Xy8XC3NY",
  "key19": "57kwZwxcYG8PgFdp7GkFE1JZ19k7bepL4jijwicBSXg6VgJUf1UovC2xNULBAcd25Z5b5EJZWZCc6DUUipyaLHsv",
  "key20": "EE8cQZZWAjTAA1w3hNNFsWtT7Mneii6gLvPLqbKyCGfLM2qFTSjBtrsHWurb352k9j6ZwCcUnqZQxtLvdhBoRWR",
  "key21": "jSHzVEUsLFMGAuRm3pSUq4165bpuuUxgrB6eS39u5LjEdGSpChpNcQrcLBT93aoufE6Hyz38LRQa8T7GNUkcQFi",
  "key22": "2BRJBpUpsSZmdFarpRMUPot6geVHFTaZWicFXkewg8pbrEpfnxbVWtGemAWLN6FpgFXwLQWRePEbztKQTf8XSwzT",
  "key23": "57XLNeNx2nCF5nCMNuTq346U44J9mavZwcF8YoSNBJ9BHd5VwD2tsCXXzXcETyMpYL24Z6dH8FL8wG5YW6XfRbtp",
  "key24": "4eh1HN725W3QoHiuEY5xFeV226iWszT7c9d25Dam4TUiP3PU799eY4ahRQvPzSp99CfCqSFUA1Nbnv1wu6Cetn9M",
  "key25": "5FoqJvbit5Dg5up1q5SDVixbLx2NKDfJDjVuAuDeVgMXRXUbjoaZHxLfSmtzE1pH5QDyt5ydNwf44vUNetyUGC9N",
  "key26": "4Eh1BxNVqfVnvGWDioy3QhVQjT1mLV8PCaV9Tr6kjXftcac37iBH6QAeZuEKBBPb7K2SRx1LpsWK17jZYjsetXCv",
  "key27": "6JLq2w9mWFXsVcS3BgepnaxxicMphm3gbHgWA99hx29e5BRY84j9p1Qia3tpHdSwNXLSwVBmkDS7czFuQenNDrW",
  "key28": "2j4mRoBxCcWnhKAs5AfxfWY3ThM6FCZfvmAxL7ZRq7qgKmhnJaeBP9unpoZX47VQEMFtvdpuVra3vKfvyskGABnS",
  "key29": "56hjZXP3skhmEVVekZcGysMqivffBHBAtuhwXyoML3MWXapw51mFAJRxerRH1GELCccKbF92UDtP62NwpYiqLDjX",
  "key30": "3opumWREoS6RjReykvL2NXMfAjsVNGBoDBEBgGGijEwWAm2aSrWjP58Xubge56XNC7hWvvVNKby4KA2ss9fd7Eeo",
  "key31": "ySqjnxV51o9EiiRW1igRGUfVmUa1EKExexLTdszd23jj7ZrTUPLPr5UkuRhX62dxjghAqqwL58xpxwzDN2kYHgM",
  "key32": "4JPdLf5uadzgpvFfqQi4Tvf6Q9y1ioCNSicKiWc1V1XhfFjCAEgiJxtFweKgan14uuQ8S28BBGNhdCa8CCuq657T",
  "key33": "4uWuBF7BxC3UKkbFBt1DRsmo9zQvE3YcXmRi4i2d3jssuuZg1gScyU2tqUyd7zyv42LDf8vmdfu9F7jxpjMomWTF"
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
