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
    "5cfjsXR7NDexVRxgRi38dEbYYXcmAsfrRj3rS8bjxbtHejhEw35LBznAcappi5CRLag1Zyykp1XVWxR9XFCKrZH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tcg3XcyAfLNTFnWQKFb1g6Xq9nQm8tAov1UgBEq2tCw6qtxwukUoq4Vdv82fi3jJDXAKnvbL4FmxFdeZJxNMrui",
  "key1": "28AQLZyVddhPAwHshVrx2qpcyfP36zZmHBQMZ6mLY1tBcPvXAovuzCpH1HXy6DDfTSksCYiSeto5RguqSMdyzYYK",
  "key2": "47q1jRVU8Qi9eXivXYqbBxbbShnFi2MmU5sRg9d9UBMoCJc5PvMxMSZrdTzJNv1NJsWgrYD2aPg3BnBgXhNq897M",
  "key3": "4rNrHokVCRzbC1rbezQQ3jBMXSgCBXCECVrYj3BwzA4pkUgW5qKWmuGogB7125iJxnohLkaMNJ7wRzPrPxAKbA5u",
  "key4": "4sNYsU8ra4ZqkAevFsjF1ATUFb5eHW39qzfP79uu6pvgiBpPhuRFsUSwcu5U7GvmZNzRoT8HQBfiC2KYRdxBVC3U",
  "key5": "5JPmtumXbGY5d6yNRJpsMFRZQL1tVVtTeXyRwqgnQqVUDM8ZAr8hvHp4jyPYz3nS467XXP4VDQA1g9khgBrKdrH8",
  "key6": "3FVq57AeuunRvsAiujQ7mzPkejVSdoQDf2p8tRBs7isbDm7xV2tdBWosqFitn5RKd5m7vzg6hoyYnLvMYqVgy6zp",
  "key7": "4C8RrasoZw5hbLv3aYWrzWpiDxtsorhicKTia55ec4GbVxsyureFvG9xGwrX9dSxhUVZJKXJTaBWJiweULRzgWS7",
  "key8": "5VHyrcjsHTip7zFxxFgHv3yMt5X8hxFgkLvxVzLdsUok6Rw29TNadPycqXCCv73NpB2CY3pUDA5KyJ4g4S76Tzq8",
  "key9": "4CY5LbAJwXVC4wFpswySTe5MRRHgVZXbHVqZcCfELSsY38ujJECHeTBWqT47HSyuEg2EJ9v89f3o2Af64qph1JgV",
  "key10": "2Gcyk85AGMqqnzCAUqwnzPUDEmH2QgVWrj49zkRa8eb8UmvJq69ToEb4CY91NJmYS3oA6SxCt8QvC82mknwbAEAL",
  "key11": "4WQSGimHBgZUMaoKrznEY6Qvegxzozf1pT6itPM4NeXhwnws4BpEz26Q6y4XV5zD4RpKQSNgLnhZ4a2fr1dxCB1W",
  "key12": "34dY159WYu3ygmDCtdMLndnPa4YWxgcYBKrNPvFhA3QpVp4HFTdaHB7DD6yG8gNhL3pnUZtMAvYonUpuSv5reWMg",
  "key13": "3vC3c54GC33JwiR6YjPNMQP7wZbrdqTZi8qDXnhPjQspXscjsWsb8CW8wReZtNmeaVyYXoqt5V6YVLxPX6jwHNUA",
  "key14": "bx7hGhFp3ajAV2HSw3gJogVrmyFRb1qkZi7r2PYe4v9gg2esy8ESChCbQzW6NHmPCicH3TVFPMZyc8aQGeV74nA",
  "key15": "5YbWSPkNWs2ghsNJAGKQ4ASw6QyJa6ybJX8fkb7wvAoR5YUzqeuULY5foh6FsgpVYKq5xtjJAWMdS8W3vCYgzqWF",
  "key16": "4QysZpysRweNphFfgrPPGSLTwMv4k3HNeMtrqq71qwvw6jzn4q4QZSzR53qmfvb257ZmRhnCdd1cxmfzwvaAFmYs",
  "key17": "5oU9uCU2eevAWp3RyZPnVHRiBrecz9PkMqMTk3qCf64WbXs6YgxL7aATSb7JUFK5cEV2UsPzZkkSYXFqdsQjvE1B",
  "key18": "d2rfQD48LhtiXMfWL8SWwYzSPFzvHoEcKkNGWhLoBQgHkfoMGEGJzZ8on8qWutmVMuZsKAkJRR3sxn5SS81Lrag",
  "key19": "yxCn4ReMhsfK5jn2pjc8ksbu36BYj6KXhLGVzWPHNimQuKdNzZb9GyvRx8RGb31kKGZ2i6d3kkGzx9PNi4ye2yc",
  "key20": "4g8jdLfv3Loqoac5cY275KZA683ap8YiNn3zSvYH8ZawY8ezvKHj49keFSTwCFJeXCNp6VyvutF8eecKRnCVPmnr",
  "key21": "29xxYayrt3iqt3Ykqg41JwGYue6ETzKJpd8RcjgKHaogiLPiDxF8A3hcT592jPvJGaWqHPL22pPR3fWNY2SP9v27",
  "key22": "3dFZw2R6KKB6DEkUWpCdnnno5MDjGEgs7jEHSMYJ8FkwF69aEDLf762Eq6etXyGLdteErGn8Xkj7Mts2BJRuQLE1",
  "key23": "4HdDKiStuSJnAYnqiuR93Epxr358S6pYkvQGB6XbhYahBDffhZrkTf8XoFiSHCabN7ojQWJXBTHg1D6k3xwqea3Z",
  "key24": "RZm8P5jRx6Bc2JcadVwc21Cp7mtVMc4M8safJCsTG9D93nv51bgjcHjZAYzvvfBihfLVQMBPVW8AyYgUyMiu4GK",
  "key25": "2fNXeoxLoW8MByPRsfK8RokbVYHrutPPsbLX9SiKaSyVH4aePVEoeiVHJkPKxYkVekz2ZpuMJwSmU8eipiE1RQpz",
  "key26": "2t4PzHYfAUuE212uqFRUjKVVm6k47ew3Vh6bHKdouY1GSNtqK5pzj3ej9cFFVytFxAE2dsFEC67kkbtNG2fxYhhy",
  "key27": "4eBEpqNhondWXut4eBQBEzGiD6imkrhZJKvHqvPZ6MgHvFpfEXrwqAZifZbYD4yjiSRzS6racpUjeutwfWpRAcmq",
  "key28": "3dsGFqMy7A95vvKjmWwVQPTkMybt4z2qkuPk8ngYRCLeHE8dYA4w5vztHuF9mxXWKQT3RUSz5TKGYUJ5y5NyMyvm",
  "key29": "exUzF6PnMr7ZMGPrr8uabzgAXgdatniUsPYH8HyWzpR2ZGmtFHhjuBxRtPArvXCe3dSwFaUXxkY329rS3SrStCf",
  "key30": "ndUca7tTdh1ZEeiaeHML1g47TvwbStU1DYVGDBsP3sLbxLwDbNkUy5ALHR2T6ahoT2pMJZhz4RhrDxUqhFGeMk4",
  "key31": "4GG4Trf88q8qWc6DzRHqxY57AcbTLBC29MgxST7ZjQ9FhnyFcHWkSytJ2htJPTfjSDvEwFMDf9Z8Z1wsLj6GC3Bn",
  "key32": "5grs4pdC6stYdkgiCCKGy9op9SEQiHrsaK7yGdjo58bDAiqxNbnQFwS9EGRmaBEaj7MtMhDJeoT8HdTJVVkcXhwu"
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
