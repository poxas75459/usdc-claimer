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
    "2T64L5pcpaSLvg5A6bzeTxzBVkjiHGWRi6eRrn7cw3dcJFqpJv9TNJfjFpzUhNyixFWknuhEA8yvgGua8gTi8SuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Aid4iAymwpHP1f3BaoV751Nm3VdKARYj9bN79p4qfZ5wX8Gozrc8NPHrFBufnWDwxsBKCrDhpbPu2YXqm9Pd7uN",
  "key1": "2eq6qsF4jCue6QCkkLMYFvxv8KFqeSUk7NK9CosXsM1tL281sCM2bWSbF4oQZysnpRefkUaX4QkUmYTj9pTB29Tm",
  "key2": "4QyUqUUDu3hKNPAmZxE3herNJdThFf5pTZhEGgTDQQFsDPaf6zaFRRkpd4V871bdUhJEyqCsb3Cq6oD46Mp2d2hE",
  "key3": "5xnYfdE5zNVt3uH6gwKmf6od5LoJuxDMhWK7ThAneoq3VnbzCaMpMXynry2X6DRsVw4zUhf34cTrviLR2MPMGo4i",
  "key4": "4NgMkPDgednn1X99hytzDuwLCmVcRsf3sdvfbAFR4snUGX15wZ16gAvSMUVsEjaREzBzk6WUzVhWi9hRNr7RzGox",
  "key5": "5XUintmauY719omCLH4KpJ2qvxhthetG33A5Vr6McMwjJNAF7UhpvbbALYFXaWbB9UjJsoEpYcMaYVv6L7ngjiMJ",
  "key6": "TwgaYih7aJdNAxZSVdMk1rFhhkxTnnoLT7QWgGdrcM47jMdnZwoRsL4oqfFw1BUdsPPh9Tx5xaixPDt38sY6Bk9",
  "key7": "499TZJo9BDQ3LHcYXr4NybLntpLfPL9VUM4mjpejepv4kj7o9NQgat84EwwLAkcmzS1EmSLQYavBt9i1BRVRmFzt",
  "key8": "5UAUN85a6Wx3uHQMQ4rBknG8qypy7y4iBtndiAbuMYvLgTHE7RUao2cou6nfRion373CcqRwVKuB5C2X7oMU9WN9",
  "key9": "5PVgyZGe5JhX8S5XtrHLkN2zrpnFQrxYswBQA3mJSTTzQWTAJXPYDxexH8atS37rKACmFkbRjyByYvDx2QppuF78",
  "key10": "2E2qbtfNTWcxqkdJ9kqmztAPwwAkuQgQpswKKNdWmr6rpFo8dbbfxCLCBEVjNDFeGDyQihLFCdsVmsgoYtxKqSu2",
  "key11": "5snQL22kC9NjDc3h4c9w5EB4f8dQC2ZDpvBSqYYV1rJPBETzgc2WtwXes7QfgvUxE6g1Px5UUA9hC8f4XXnhtUi3",
  "key12": "EKUaxTXqitMhfhZTDsR438QbgqRGi9do9KwAPVS2ue3C7h1fdUVPEAWjL7VKGoyesSrEHaUJRfWPiAeHN7M5pQ7",
  "key13": "qfAKjpY6Y3Cy35aEupkeXvnV9mQxXDptiob7KrV7u2Pa2MDW4u9DW6vNLXuiDoonsZaDEtPfFQcjVjUSmiGeo8z",
  "key14": "5Q2qDCj4AdP8EJ8oFzziW3HHqSdXo1uqBcbmktGzbDPT2woxCQoBD6aCZxnPLp5kdHRgwmUYrU36pmaTcLMBmBYe",
  "key15": "2CPPEkAYctjby56mhaYQ7hhoQNuoGVZL9yi7bNLGcVncMAuunPseFpKM5H8pRyDQ68v9qCxPjQsktdZ73dicSq5z",
  "key16": "2qQtHqbfpaze47Pz9hQoUjfn11sJSXDGqGccip3SZaj1DZZnZ1QzNBY4hcMYNuuGByW5PndcnhtEtePNnXabyscu",
  "key17": "4EuQZhCJDdgt31dRFxWvcY7paVzRidQd3naEUP7VTn6aAWhbEzLfTNb4JQKQGwmZtso78KEmsN9MUQW8E6xar6Sp",
  "key18": "LkbjyWC37u8G5gEMmfRCLu2EYZQiPfSaMjCe1Nfatia8oVRRHPytbtHd5jMijJEtk343KZEb4zPt3YZo54pnmvB",
  "key19": "5my7QVPsWvcXddjNxekWwSEwrCSR4DAp7Z8xXXRnskYhuF8rc9SEkpoSbY36CjdJ7eLwb2FHdw8zue2Lp9Fvhqys",
  "key20": "cJ7ah2MLRcbyETXjNp4ZrgZ5mJbfsQDX1MTo894K6FLVoLyCZ3QEVXmujhYuVkTr4oHUKeV9XJrzzTP2cZfuGrz",
  "key21": "3uYg4q1mQUpFCSUt2VB8UF4o6BhVDEKjeUCuocsJuuCQWnkboHhGZhku6YxeVAKATwtXyYUuFwKdEChbcAfTmdud",
  "key22": "HuAviJmCkpJ1cgWa4oPrjGy9XuSrqVbVNp7D9eEKAhEUB6mdZZHg1erHUosstJaxrmC1oMVYy5d4ZRjZXdv8NNk",
  "key23": "2h5ZfML1K7Wrk5ZRrjNNpLA1B3c5QhWxhNLm1mCaqciNdVD64sGfds41E4qhKSg5VgGKWFX7LSxijEmUezneDD2V",
  "key24": "3JdGVwYYyNUrXu8B4TPi4cWKfNHjVAYxgCTpTh7wqDMFLgkbT6L1WA85JPpvfNoQdJEQxac4NKvkcyv9RqX5nrqE",
  "key25": "4o2VbQbtJw18kPU77XjK567JUbbuNrFCmYfsaGjYTXcLMSFJSPdtjJKMMUGw9mqKMLNpubHLpLPsBA7iovKLHN3q",
  "key26": "LTAYesBcaLc4x9mjM5jCxMt4G56gijDgqvQ7wAteDZtQKE2jpiTwLdtSozfQmSrab8RrpD2Gjr9Wx1wSRiAEcPp",
  "key27": "4JWDrSvgm2oizVv3XTCckqafzgeD3tQuXFcDWWFKBdvqPrP5GzoePb4ByHtDrN59fE9jXidkAhm3JvavN3qnW7cX",
  "key28": "24W9i5rgrQ4iWbHncMLTzPJyFPEsBjz5NgpXvxwgLri1tmD5QtPWozCc4NtFHBphkS87JsK6j9rp7YZFy5rRPNqQ",
  "key29": "4JtFMCus3fiXgC6v6aDmEWwowbJETUvmzJ1vQCDuqfwaXXVEfr26oJkUn4cbAn3VaKXgKM5qq2s3YYbVF8kvkhXq"
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
