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
    "5uGjHMY4fBshHa2E7HtCNJr7gZSdZfTQJcgoUNzoJQJjgH1RS7y7VEv25sMpLe6Lo7UKNCsgCiwgXkjzQtYB7NPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2288VhPckLZixXtkXmrfXLBz5Xm6cCQNSy34oCHAGFGtkkvec2GBUTuYkqvTEyB6vFH8FZziexEzT53xFTov3366",
  "key1": "U8CZbSxFsUvjgBQCBbh92Njt5Mtnj8EzXdLqTYxDwFg9NCWxzQx4fVDtVJyNzjsS4D1BuBn13KXAtbjWXCcYJR9",
  "key2": "3Zh5n5aGxMEAte2qCQP2MPRwjfoQyAL49kkTKdTzcYS4dEDbr6tB6p3McwiiSrZMek9WGEsqrFe3Aj1j7jY1yEXb",
  "key3": "599S71DBHouqaCgWb1y9TEgJc4dZZABQ2HKE4nnBNCDjMgDJLdZim9BZqGAJAToRtav7dfbAg4vghZFmXgsNJG7P",
  "key4": "3PLoMzCqpDEWmZYq6k3pPv34VjUsgJZnuAhQfVUsCdqMT4tMAwXqBkkATMuonYFnShqem1RsUcP8wo5iBRkTnzx4",
  "key5": "4V81E1frwexcKWDSdbENKZHq1bSmo9h7MgnLabao3zp7uq1EET2qxrSEWMZkSt5meaDop8y2pobpK3J5CY1XUUw",
  "key6": "238wcnoENWMJA2afwbBG5C4wtsNdDiBQgfyskLwkh3J3A9JTXqd15qAbVMXgNttaFVzRndCuJmiPWR12V8fq8fKX",
  "key7": "4JaU8YupAADzuCLi4YUiEJi13BHebDimiiVoheohtnUjgyZLq23YTZfGLnfLTnRN2cQV3GZcYnDfZHnznJuQzRFd",
  "key8": "57RzYpPL3GfjZdWvMH4tFXP48KdHD1fF2uykTmWt7a6FyKcUfJM352SkvVJa6sSZ8Wuno8MErpYmQoZp9dh9AGeW",
  "key9": "QrtEDkDB2Ve55bSB7nTZmsgGgz3Y2st3JXzF8Yog4ZYMyT7ZZEEyEu4XefuGbA9jSatDMdqRosWbpFVtVXhMnHo",
  "key10": "34C9fzTBNt5N7vY8YDBsDJcwrhjrr9EaVjtQWkTyt7QXQyg8bEQCbDQQbPNt4w8Kht3d7vjLYJzE2NebjNy81aE1",
  "key11": "4PFjgDXBdh9TefsDi8iRUMbRtKFMjsvYoyfSLTxtG15dK83CcUEM4X5wKZXVSick8ma6Ru1e44AVdcLEYxe9Bz6X",
  "key12": "5UMhL7skAndJ7hvy6cEFVvTaP6QxSnWaaJ5yR4Ew5DHFMFzQeJ5tGE7MuxTtNMzyFXWgNtBh6MpDRsvKj24puiU",
  "key13": "3HzS1sJD6i8cvxWXysFhBs1HFws17SXgmwFTyXdJSdQeUFyAXftgQ6VgXfmo5awfUpTcbTVZipk96u893TiiVcne",
  "key14": "3f3Lp9tjD8cyVYKamNGos8NV71L9Urp7aGjK7V86zjyz2wr4cUXEUFTeszFF7NGiiVMPowEWBWefyd68qW4y9g1m",
  "key15": "3zZDkgkaFuaBN32iUXdqbrKqB6kavvv8WFrKXXaDR5izkXN1yPcFjsWr76ZB78ZafZSoFRG9T5jNh4v3abFQ8sqP",
  "key16": "3aPhj5NVDunHjJs1uJPBQwaZtMsiqgPQ1xNvnCCXd8Mkd77K8FR731weN4xnDq9Tj31GRK4pznSxvrZ2kEMgx4iV",
  "key17": "5aJjRaVVv68mZ9mkU2KEEGDZARrZSqrHRpL4r8sVqjSriV4Cs8PhCYxtgPhw8v8t2qUh1PXcFmSUk8oStCQafKoY",
  "key18": "42fxGzbL8bwW5a7sT9WYGYnzuP4isfL3nwpDGjc68MAXxYEPKT4GMr4WCxhQdMntWttnPtAV55J5RpY2ahWyhPUN",
  "key19": "4JFit6o4ypRd7dTYqhikRzyoG35Gj9jpTuPQvofvSnKAdMaghE1X6uL2sEgMwGEm56sMiFdGcWT3prm5QuLKmxyJ",
  "key20": "oPwJQfM56pgp4hih4dvgKakpfhq8SyViu8F31LtmQZprzGeGd5JMGCXYZ6WApfPdy3o2Q8QESS4CkXBeKZCVcxX",
  "key21": "5wqKsxWxFpKsjYs14W7NtSWPuqFfAWcJ8xSFMCt45C6vUK7LfVrYi6be1LvqmyCnHwRaBNP6RjrHREGDreraM6GH",
  "key22": "ES29et3JzdB5u4mgpcMR296bXUoKcHoPohyXZpivNyVPrYAs496KzKb87u4PRkxwLKNjgTCa5syfNT2YAV1fiG1",
  "key23": "3d4ZccHFU87hUqkRsaYkqWuuJyP3Ab5bUZv5sBDK9ZxicS9Kg429BADtiL5sEVE25D36wK6BuePWEt2Hi33QqWby",
  "key24": "h7keGonrEmoK1zFfiXv5v8UsNQFFzwQMJFkmQsUTeDR4xNU9L3Z21NW7JtfiQNpPxBr4RXa82jPFG7ebCkjN69r",
  "key25": "4dDAA9C4abKXe9XeszBMn9mv7sh7bvzt3Vf1khcup1WbZZM4HgkNATbPF2ABW1EwogbPubnwjSB4jJSBJ7k9xP34",
  "key26": "5v1Dz3HtDrudz7bRWXkCUivYa1WPahi2jndMuF2ufmjNAXJSaqMHkdb8Sj6beK7z7oSSWhwBfoPfniDEruBnhNSz",
  "key27": "3WskHdgf2w5TjcQiaRhKAiFArSrGM5Ds6WrJj3qz8ZSZUY7KXg25fivzYc1UTWRTAsNZikY7VCgTtLU1xvVBLXbH",
  "key28": "4T2qMconpLWpcdkFcGRo5e8CFSHqWZNyc8NbC2yLJfFktkdVcshzijkGGFHzQkEk2MTsRYya1HLCPLwJw44CfL3k",
  "key29": "D7hcn8CEW7o85qeUQKZLMXaduLbetjZeE72C2PofvxyP5NUuTVmPRxDX2RJcwYVADVWet6rTmnb8Zgd5hcR44Ps",
  "key30": "4UH2KGKm26QH3ZqqXoXaqPtumDrLT7V5maL16RDRfwzZHmD3aWa5g23t8MdZKRNu19EMnbhqubowxbVPrG1SGU87",
  "key31": "yrHyjGsubS56KWXoHKb44rshmgyM6P5XCi12qL7r5Dc9STs1yYhV3CpTG7M5gwaaGnFQakrfkJnSDv7cvFwvPTx",
  "key32": "3ZQ6aitcweqLszmDEaoecZPwEAsfWgou5nJin16BfvnnFFyUpAxBFtYi83P6JrSKgEBD5TYnRFSQwtXXDonGHYh2",
  "key33": "2G7jn34CuKxz8UyqWpViqiM2jbTneub7sW8xCDpCQ9GYohftHK51wP9mVXQEn9igssXwAJBZjJ6tXwr62Gy5YnwV",
  "key34": "4nHW3biHcFRhzuLEdu3ERUTupr4ZGXXdNVS796VHhUoJu32tXKYLosZgDVb4AUXYz9Rb6BuC4yg8YAVkEjZrZgQD",
  "key35": "5WNefr2ajctkWVSZnr23TWVJtuvTZB1TtKtEUtFowJXwfmmr6FE5K71vivzASNAFASMHS6Rgt2dFCtm7vdb1UE6f",
  "key36": "3wUoZwaAjGaSbZuoDUrYxdgnXzv4SiiurDBVV7qYU3DxUw1VCi82qBfRyoAUvnYVNzHg9N2Yfkh8wBQ9RdTGUvty",
  "key37": "5yTaneYjNDnVDuzepsRjrvwVPo89UdPPf3nhzjTLhrXcdxr9BtYBy4t6XXNzZPoFzvrs7RncVsTWhECpvGpERax8",
  "key38": "655qmXAV9mEoRXihn3uNdWmd1kM47zoHqrdsQgzksnEjD4KHLyjVQYfvcrVpZ4GzgZhrDpDNepK53PcpwbLS2xwZ",
  "key39": "2vq36XLpXeVPeeHsox5BARBC8yFnv1JbhY4kJ72YB4tyepZKQFWnyCYx1TWQaQX7KSsCo1aRFEwie2vmrGUaxKGr"
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
