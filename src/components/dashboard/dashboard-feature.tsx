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
    "59k4Go377xJRx8UA9sj7AcntZ8Sd85Ptaw6aAGg9QQTfupzVezfeiAmZ3N2JyfmCTQrrQjCvt1Mt5Y6eYpUf4kvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mku3GghK24mVLMQzDDV1P4QrUEzqAFqwCDVpz85ncZzT4MWjnM9vxKj1MQbACwewtUoUvKPTkgVN3afMCYvevA1",
  "key1": "281HfKCjVknLqip2WSjhDAsPxw2rxeovS4ZZkEKo4Kb8jqqtSEHvcNYAucPCxR49U9eBXuBHFmWeVtchK4eJUijn",
  "key2": "5gs6sCfPe4S9Ke7h1u75b5aNAdRpwA1F382YGFtVi4EHzLi4zryJavEVT97K82qD33R3HadSjSRcUJtnRYgEZ1TP",
  "key3": "3TwHTqfqSXJiZfCt5VVw81Kx6Q5Rj68VgcbigHeTEiu5TzUKWCmmBhHkbYPQ75SqaMnzSHM9577c9x9BYd2oXJAy",
  "key4": "5hGzUjcVeDM4zCPKN3JjhtNoMZmmmT6ZFRBgYYByVnZkWE8L8tewvHn8FJeqrttS7GUeypqy6M8MjM524p717hGb",
  "key5": "j7x3U584JRm2ShR8mnG9THp7pDftEirR8dbYZdzbck6FPCuxwuym3PPrrkfsuT1JkBKzaimFUt2hLyoLT7AoY7L",
  "key6": "38LtKFRiedCboAD4QAwfw1LhYR93xDbADWc1ZwdzhsD8eokyCzuNmDDBohytTozUDCCw997XpbXhWwQeMFu5hXPq",
  "key7": "46VUa6osaV83mwH5ZF1ja3Y5oftQumxTcBD7AxC4ik5okQ1i9SDn7xcqNLiBpzCmkdzqdjPqKpReG6xk4twJKWiS",
  "key8": "2ERbm2Q8a4u4sQAyHXYGXwtxuaJ9CoHLYms1sU3x1KNan5WMpF4oF3hHKwPrH8xQGpGM2mny3YjqzWRdbQAfbor8",
  "key9": "5JWcNqPmk1KntgKWDPavKJ5vLVdPb1Bu33RBSKAGsW6eN4B4tTRyKg1DDChvvZRvYmjaiK1bWHh9Qsd2EnCjXsAB",
  "key10": "27t72bc8SxavtTpRjTFv4ZXBuNJ7yHMMcxCPnr88qZJwiaYMMXb1GUnXcZ8ZK9MVCj9hjqTnRCz9AaM8WrGmAS4N",
  "key11": "3uzzbSgqtXuKPYDvhN8pPrzezDVUKAuvPD9rgfFoqMTootTbS6azr9N7vM2yeReeZLWeJ6j1CXEei6b6tZgD2Eph",
  "key12": "5UDjfbqGzj5DzQBX4x87xM6GeZ15eKKEBu7Xf4nxfuCZ21L3zxkywfYhtGjKoGKbKdnwa1Es9MpH1pVSyDxSZa3K",
  "key13": "2dXmtX5oCnKGD5tUChahKDoYZVjeoFdkksa2cAreP3DDC4y4FhRscjWvnPkmb5yDNFfVtZN9EJqn9ejdnYUny8u7",
  "key14": "24fYw5RnPwm1nzaJBNDL5YRTK9voJLh7zVyisqS8nDGscTzPXoBBdUTiHsxTkjKjd7p5NfTDmr4Mh8hK8qhJ3PFR",
  "key15": "3T6eKjgRamju6ffTKTrtsuHJySsrkDz2tgaQSXNRSn3DAyKa2yRgxvmUVHzyMgrDXsGRxURvMcPcTdzYTVWVuGCV",
  "key16": "5BK2wePgWy4DZunbXW4BJ4ToVjpv1Dmd3AUxr4hKwMRAX2ibQ75JSFRAYo5c6uK4QNFZ7F3Db3Wenjx1zfysma8E",
  "key17": "54Pe9DsKcNmDS1ouEYkcfdaT1fXJmDS9JkDzRXHqML6PLCawgnpt6j81WtXs5wbUjpnoY4X1rde8cADS2EJtSP7v",
  "key18": "2bstmA9ECyKEc9HnDnmtPFibzgxBoesBQr4ESvxRyhDC8mCQjJtGAu427JUN3XjdqscDhy1KJxfKYLYTUvijGuk6",
  "key19": "4T1a61w6HjyGc9sWePPm4qPQT4EoPcZgTiptyuYBdRqkUmEhAeoMyj5PQwas41A34RzxJcpjHxvzDjNb1ytTABiC",
  "key20": "4HuHXdyCJR6FzqK9bf1v1xNLPLZafcTruQ3BFR19Q77BvtBraKdUV91EVUGofwMg7b56zJE2YqQjPsuBXbSEeaNQ",
  "key21": "2atPniEhvCU2gtaozh3WaYXxvo387gNFzQ6BtqM3CoJZZ3GrsNWA7ZrLBCmKcmnoQ5XnBdAWVM2bqepmNCVWGRES",
  "key22": "35yZFsWqP6CXNpzfd68Q9VeJkEWcMW7AbCHRotso8nbhLgQQ149CC7GRRSLRhvGQPhtUpvASpxhnmgTJMe1uYdta",
  "key23": "2hCpwDeWT7MEQoXzGTeWDr8WVAipypJ7Xb61Qr2wNUJFSP9F25LBbvjnS3j3uHRydicVbyM4AKdCjmddYwhBWVaK",
  "key24": "5Bs5Sdkhpxp1NVg6xNfyoSdERHzz3Roz3ewKgmVGFuJHFnMkYPWioX6uNFPVmAbNUfM3xJsf1zYoHT3XHdEjXwUc",
  "key25": "5JGgy19f4VSe6UkDXSbuyMnMi7oYnxXAYmUbcm3n9mwUk22oKRAyUSShutqchPYdEkp9afvYeydMLkCtD1sYSvvm",
  "key26": "5AckkKm2jBC6QaansZco1bSoZ92VmSnJaYn2pPfPbMPLMAV7ggN59Gt8TYtCDAYRWkMMagL6taNYeZauTmxfqcVJ",
  "key27": "3yKDXzZE3DVpUp4DSVkWzzb3dWH9VGGG9xgN62y8WcEfsmWQwgRiAQVnXMyNiVnd29RDoCzLYiem7ABrxVADDeD7",
  "key28": "5PYmPQKvULBrPbEKmP3hfjxorUDdJZs9RivomtmNiYvAqzwYijAXZ7fTC3grp3dtgC7EcqmDM1bTiXP54RhmrZJb",
  "key29": "5eGf7Q86Tv46wqRWTT9BJee2ZBJb7TTuzFYW25EL8hiipBpDrP5g2Q7Ad1WNExPwgnSY9egJ9Q9vGNcyVoqqgUGj",
  "key30": "2WAoEdhcaSVtjVwDQoKgSYYj4ZNyD4rTBPN4TBzaUfdXmaUMRD5AmRhv2JQmjK83mwu3krmnWLabQJvUuGGd4KxH",
  "key31": "2WtgcxsVkqmQvU9Hykhfe22moktAVm3xzyuUBeG2JeZ392okZYsx4V66vBXqd2KXRy6zkXo5iXpyXVYHNP5gTeRN",
  "key32": "3DEy7bkVZnEsXC2sHiXesdCMif8B3gZFL6jFKT3CTXUpd1w8KrXW2CE8iUX13RQAa5Tk3YJfi8KJLK5VNQtemjkC",
  "key33": "2MtVPA9kSmLn9oFWiFNHhy5Cdd8nDB8cY3oAguJpCD63mXmcuhe64z1p3CYUYLf4sm26UHEv9L8XG5BuY8jqXRuj",
  "key34": "2sm21VZhPvDaX294gvjy4RD5MZ4Xf1aJNXooKAD7e9Sh85kVjHNT4yiF65Z83qpuKdXfwU9hP93vsuBRQLS9ZvA3",
  "key35": "2MxAv6W9zvfcurgQPJzCjfi7XVNweZb9SyGMkc296nF5hFt3czxDP3kK8DHrZkXQWJ4JVNX82icok2cMMcHbePQs",
  "key36": "4Ke4Gjm93VSMCfLCCTV8fnzSWvUYQUo8R7eBjW44pYhB3DRVaQK8dcbiKUgsFGhvoxcRfTZPz5mwK68y2tn3AZDT"
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
