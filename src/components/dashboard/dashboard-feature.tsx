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
    "5dXg9QaQs3WfWyhPayroeVoLEcRppKxQT28aqn79gb28Nzzp5Y4TwYLvhMwTo1S5sxqFQNcTGParh1RJmakt42jp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HFwvwhZqx51f6Se9vgKT3eGPFqN5YiKeJiruNoftfkpfTTrWUWUsJvQrG9gj6NvB1ntKwGnH49uJSSb7MDzw2iU",
  "key1": "3RVRcARtM6tqi1ZNmQtzuBiyh2BAHBEsXN3HTQi5QN8iemgR7W1jucScWKRAj9kfRra9yExFrKfY53DNdFnhWZGt",
  "key2": "4LV3cZrZFX41pJWcy283jj5Um3M9DyQUFgAb1mAih8WtreRPZCnavNE8srQY7mbwnyESHhVf1tWvFXBvqPEc5DyR",
  "key3": "4MWXCMkfvCUrb491ea9qonHrzjgPJsVBfHUQhbrQ1hoGrsEm8rmypBpa7DPPQy1EGeRPtGEtDBmvHa3wTrxeyxxh",
  "key4": "2H6fZQ6Zm2yNu4E28ZwZxxin5N9pBTy1YTmqb9t61CKbsz3B9brQpVRcoVe3dfLPd7138KPy282XwBVwVZy24Tu",
  "key5": "5TzPF7HDmLWdjcJfPSfDp8oDKYkmsch65RL1Nky2drdnEo1no2m5DRPG57yBSLJzGAdGUknYU4cwYRCtVvztmjzZ",
  "key6": "3YQxM2RFovQEp1LnnkfAvzDPkC4fs6eqYnX7N5fsRQER7g62cCoMLc76WcQUG1UUKeDYuSaEjBQ56J6Hka26yucb",
  "key7": "3hnLEAmwTFf3XUspVMjWfk8NJ6AStYpa9dXruxA6xoEdeiQxtNSWu3cp9FQXAhE2YemVJS3tdQFUMC1pX2ExjkMV",
  "key8": "4r7hGkmr1KXFuLsPzznpqshXc1a2RUJBRPemCjdY11GUB2ygqERT9BJ1RjqqVxDXK3zX8YX7wbSANkxeRAFzDiKz",
  "key9": "nNpcmSeuVE557Rov7NodKtYBza6y48XNn1rhmDPKoguA45N5GJ97Z4NUfC2nxDanApr94s9tPYygDpo1GZBPpWV",
  "key10": "52TjgJrNdmeMzrfWau4mSXjw2zAZE1VyyW1Xo4SqhYmxhkzrvjTgx5kPXmV7GFPTQasgNEY49ZWDPbjrVudCN96S",
  "key11": "2EC6FoNZVazSFrqdRG4Pw3qFAV9dJZR86HzFwhFzYAf7rjeazWhCpgpGrBgp4NS2dNtDguinHsaxzGxzxVcQ83TG",
  "key12": "5jwYEDxCJv8e1ZkSM68Z3b1bfyPtSJqbQtmsiph1p2VD8gaw9qr1ELPtKtbo5XWr2HQtEw6PUYF1h4Ttx5NGs26E",
  "key13": "2cLYf4AXzzhJebFFmJ9qSPge6gGBJGWABQM6BT3jxHr56Ey6iQoDPp5xkfzN3kob42MDSPtCLY8h6BtSmD2JTBen",
  "key14": "4KugZ5bSH1ZFL6bvMQZ7nBN2DtjXox3BvaK2pWVXXSuYHYjp4D6ZnMPBAbefVyTDNsTgEQwJuZPPweNJReVW4faS",
  "key15": "4z9GQN4xc4U6v6HQHQo2eVT5JpbUqeBpYagbrsopQtMRwPqUzMAmN4zuttPXCtWd6M5g7KRywHpjUoFNzDk3iQxa",
  "key16": "2tfcShYLAgQL9e4SiWYhdVGgbeqEdvEAZfTbZRRBdQF82WC2KcEoHXYyhVo8CWTaZkF4njMJM8kfo4tRXvoMCjMH",
  "key17": "MXLi4VJUMeJy9zX4wwLkK8uk24DDJLQbpN1K3JPx7ZLXmfDpomt7jd7LDbWnRxKNMuieU635GHG4hoMopwU4EPt",
  "key18": "3qxRW9MY26ewK1TrKMHhbzmREz3qmp8Psw597HcC5tD2DCNT7broxHJDqgNVzzoFeMyDU2DARPHNbhfVK6Wn1pfL",
  "key19": "62BiRm4qyY3wCH4FYB3zzPizD7Zr8WSoY4sD3U8tRBqk9e1f1rbvMjfRAtcGcEZcroKMFLuB13hd3hysa12qExZj",
  "key20": "DRwaELCerPVwUPRuJy3ffU4vh7szhsKF4PvNXcSm8Kok9bpp2BQn9wcNGSDFfwdDRa5w1fU8fJCwVm62KiCHrSW",
  "key21": "4JEWfWQ6F8SRxYHhG9teYsppBBjWdyQudkY9sHRXwkgVfwbZYR8XDSF8hsv6ocz9bfhq7Qo8tkLrY8ZJJwxYKEQm",
  "key22": "4bJFn9zkzvW3UG5LAaGNrKcQaZKBcRZaeUeuboS9fesyUxpZkL1EmEzhtpC4dN42mdHiAXnGfHT2XXD2um6jFLhQ",
  "key23": "QT1VuJtcz56VSvVpWYqp2d1Tg6v9JVaFAQK9oocHskGPyFWzk62Y1uwMi4nycja4Medqd5gN2DLnPr66ZH8jCWP",
  "key24": "5yNQr73Kgix2PD3bNiu8GivHtH5xYzc4SKhwp9nWKFMvnFSWdG1SHRydqYSLFM5eg3fgJ1TjZMQr8o24fNYdzqGz",
  "key25": "6tBjzs6vqg7hLD1sjTM9Lh3dvQMgvWyKRJykDnKt4wZ4XZRPq5irMPa8pGZCa84nnG7dWCreP6jwFhywRoxevaG",
  "key26": "5KXy2pXDvF4FjviLHNPENTokfgA97iXTZrP3Y8bjTW6tWmLKqcCCvEfcVKHAhvvnugLKb8NYU7YGTffhtirqNTzc",
  "key27": "43FjDNgVhqiZnY8Q1YoXTPGa49sAnTn81eUbGtaq4NAYLTaK3hKdNUwcn1Gc2hyervKjx54FsnyHFkUGTUAHPnGf",
  "key28": "5b7G4Aw5MVZdsm8rds71n6dZkyhC4pnPQmHeqqqAGTF6YwLc6VusZFZrP3HTAafiejwgUWqnpRyUCHRpNwUn3P8o",
  "key29": "4WmyMYxovEC6eUg5B7KnJi4d7nUbRtodktKeKVMvSeaFSmX4cBK45tJ1MciXwtu2mnhrVTojnX1UjoDc2FsyvvEN",
  "key30": "2FLPBqAit9y5b1Ho6hdFSvBMEheaJTXqFMb9yiEk67GcMvRf8Sh4PcN9c7KP4pXqqJrdMSrLzLRTNR98B5a58gLr",
  "key31": "5spqx9KM3nqBKWteLBv4TrLUYk49THhDuBASaPAxiZGWmYoXKRPbfCMdC2wb7hFRSBuXRT51XDQwqWRyYMCfWw4L",
  "key32": "568LSNL9W4M455ucod356BCd6zGi67Q2o4XdRt3VyJpD8LnqAkyFzK3ku2bkrg2RK4TErMGWZR8LFyHnoVf59f4Z",
  "key33": "4PMCPRU1XTA2ybHnTGEzJzruANKtSiZZgY76sHxPbGh3x3guJ3L69r6GgKK2SZbZKevvtCPKUNmrD4anTgBTCpfN",
  "key34": "3GmWuYrPmKpishUSgoYqxz554h5VfpqKPbAZy44grHauAyeDf4ePgN653S272yUMBcY67rwgLmhyVd1UWrBZyUnJ",
  "key35": "3WMRrHVsTVM6e7d4Rk2NPUBT2vmSj4qrp8PZ8c1y1ENHVD3T6j8o9NvohroKhWWoHkEv9GydwzaqiuGDX1NSfTgC",
  "key36": "3DVbsiehPoZpRizAHH4MNieXoAxrhJe5TALEcVEzngv8E8PPPVVJDthZ99U9JKC57ycn5bq7spB1q6Uj64b6ign7",
  "key37": "3e3CSCS1zPKYoaPaCtKa78ocnP7RqMgBd4wZsWpn7msu9YLQDtEzSNakEvqSKywHJYqYNHwQRH7jXc9xH3KDjaq4",
  "key38": "3uJnLVcUrLcmMC6RcmCjAq8feMDnTEHczZ1vLVVtMYmvf7b6ZxswtZgTD2EK4rQxjYULQq1gvqnjvSKDgwmXUBzX",
  "key39": "2fL5cCx1ACwhRGeVJSLsPQZ9x56jPKJZugXkv6cfyevhQG5xRDMc5jYRnANC7b1hKa4pgoWuKqg54BPHJxLV3TNB",
  "key40": "678F8HKg5JeGBQS1wDbzNNPfehh6JkTSUWrQ42oxWjSdYPhmNFSSMHsjy17K1Ns5QA2aRJoQMQQUJmFFcHjEes7M",
  "key41": "4HepTKYH2AoxWNkMBA1Rvpt1Mkc19xQ9m9S4iQpdzCTaTzCoXvrB5eETv61rt2Y3rX4GZVeorynyyrZ1rHcL5Pmp",
  "key42": "46tyXyzShEt5YHFnyBfFm7ffUFbtTgZzN7iAD9ZDGPhoSkmkPP5eXLYcSqH4ZwbQDYYZgX8DmRUwthR4hWUbCAvP",
  "key43": "4KZPqeDrtUCgVwvjdrtv4iZzyw5zjPUk5gqLdoRTxSBkxRMxa7EH3fEMYs1PDE9T1XbNvZrVPSUuvmtj1Zr58SPP",
  "key44": "23DPswRbC7bFHX2kaBncFXYJLSkCQCs3dwycK2m24a49yMZGNJkSJu5E3mfLGU9V7TwJPKDg6KYcRWDDvi4N6ZBS",
  "key45": "5s9y13LHf9BkjB6zCL2yNZc4x7xLm9HpNXTp5Y1c87D5mRcUEuAEUwhc1uu9WbtTtb1VsmndzDz1sgLPHi5g8HBx",
  "key46": "DW8dNjnxkLDK7hD5Aor2CGXQzvE1p1YK6BniNE5WzdHSbtYnm8mg3bfzg9FtrhstJJ9tZEJ2KNt24p52S7Fp6gP"
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
