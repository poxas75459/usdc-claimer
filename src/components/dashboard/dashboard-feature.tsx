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
    "3bua7zFnT6EvRD45TJGbLdkymnWbCzTuSFm1zfQGyqW79JitTynJbEKQASNPsywC1JpTtYj6tUkUhv47Ey6WvHpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X2t4tzaFTAqM1JBwruFoVWVhddGaMKzk2bn323s5UBi5KZGzNFcghYvgdMnWWgphNSeqQaLKQamtxFesMxtbHPY",
  "key1": "4DKHPYcynNHuSZz3kt3edhmowgg4zmGMyKKgPyrsmGNGTvG4sqTjjQFB1P5CLd7pUrv1w2vvSR4fq2TnZfk4gtgG",
  "key2": "3feZQt2GWSzz3rYYAYbq3pnt4LSjaLFkMUg7pDLzcAihhVfHMHg2ZNzpTZyMY89udNGuLdwsUrxHEEWwp1Xk7fyB",
  "key3": "8PxaqcjkDkSyauxLEaJwBEC6KHBUBZ59YrUH74XNR8mvLTtjnTTYQVuMEMitHUQW33F1RfZDph73gBFCrAHW2rt",
  "key4": "633aw7Pia8y7MSeMS1NkEnxApShDNoit4zWv6U5F1jSjqH8bZKs7a2vokxgWezeGkfoVk6wgzyCr5ZuD3MvcLxfg",
  "key5": "2H83r31vtp3dQPSMCFL4rXGL4TTesxUnoYt2V6nvrn1CaFkW6qHsx7JrWfKphG4emrRaVMEcY28Pnj9tgZ6m2gif",
  "key6": "4gzScunnyfh8YEFLXjE2NjUJM9277h4Kc5TddWhQcxoVvCY79F4eDP1dxProBZWQrPCde9Vn6haroiSyKxyG1tQV",
  "key7": "5893grFsEWTcjQzXFwy4jfnrSgPUDF1XHEFPwuyuaHDcDZQd2vrV8wVy8kPWkBfUe2x5fJ8v5cfaZCRvbqDnwdC7",
  "key8": "5LfT9z2NomcDFVWDcvqyeWaiKgpFivHmGR9H9mUogBSReCufMz2tt2E45ZS52hsneuQsN5Z92QqN68C4tjGQ3aEr",
  "key9": "5EJzhBBY3QrkSYLHUMzWuH3vX2hHvzo2pGo7ZVZKgKKYMNBNPFa8hzJg3NtAk1EAdSgLH9RkYBHXWH9bnsrr6CTt",
  "key10": "6RZHkuETSX1LRiU6UFEVA3z7gXuKEULMMHgtptxKPNW8p5RxJv5U1Ca7rpqAmozNbvJwmzwqVCRf6EW1NfzWuXc",
  "key11": "3a8nxAnrtpQ2Ap3MUAQKdB1v6doyxegPLaY4gThe5aryBF7ipe97sHXooXiDSSdVVBVkcc9MRSZZNLWLXnmQWG9v",
  "key12": "4UpkrQU7WHQUMM3vR7jCuVaps9ixczHptMQvCAaEaWKGiprQNjRETUVAy5mZGkabGy5t5W7TMzJuUpJqMACaDs2q",
  "key13": "fuSUz4wjHpxVYYb3BDpe5pSVBpKEUCgs8hwKZ8rQTtjkgBmoN34tWbrAuQ45KtGxgDgjamb3QgMZwJKhXoPcQ3p",
  "key14": "45vHhdQyR64MZpeKCNwmHNPfqoN4R2JUVnZV2Tb5JCLKykQ4mXRFtdpANhtJNTxJsFoM3E5TREbrUTsmVjfLDrwF",
  "key15": "4Ut8ZoyJGvTarUh25JbefVnXkxTXoxyNbFjwZ4Hq4dDLo5wMHzdjzJifRt9uS2jHm2Cb3rcPbBudEFxk8wR94V1Z",
  "key16": "4q7qXoNKvU4ZspsT8WoUZ2nK5r1CpUmVTeX5gRRj6iMRjpfAWYSYWMhWX8K6mXgXbungqciStWGpHfgD5Zm7krTm",
  "key17": "3uFLjgCJw948qwSYMnGn17CwrfEGDTjfsBkad3LF6zfvr3S8sPNhkff7XxmBfS4KQjkX7n1zSCNPWLsEkcGcX38T",
  "key18": "58MJ9z8vXQZK95KQtkvJSci7ZvxmFB1kHQpeqe8JJRbfajCc2L8qJCy8KoMt8j1bAwg3tW3rpLgaiZpYwCGXuyVc",
  "key19": "5dnVs7EZV4pnwhZQX4MTtrGKBhQ5618iSpHzEE4zzosK58MTJ2abhecDBCtZrWyjTvmU9Yrz3vJxrnTBm1pf6uui",
  "key20": "2baAvFXRif9bZDJTRrWr895DTu9k1BXGfFXhYgRVWmq8RA95zBceGYHedYkofEcwUyJ7jmD6rcjau4ZhUcxJ118X",
  "key21": "4VKYxhedrKs68vNX6QqEE9wXDZUhZUQMs4W8SvBCzbyFnqpQBfeocpuSFAoNjw4qp55k8aVvt4HdbLYVFYtAuLSu",
  "key22": "4jHTM3oBCTZHSSnWscyPuQW3BeTz88EQLLrCt9CoWfM4pSnBp1P3jQNhAvX4p4R2ffR4dw7MHARGKXZPUyWPY2UE",
  "key23": "43cnSixbdan11ouiLJ6LjWPDNQWhWBRNeEgoGbDCEqjUGKCJunw2ey48uPH99K2HgHDaEFMkX8UutGjuH2RxGeUe",
  "key24": "621teX4pDqg84xHocQJVT2PD2uX9LymM2Fs2As9qSbgAcT3PiRhUUvRNhQP6V8jDnsahJ2LnJW9nd7jwNfYDCYyB",
  "key25": "UkE8os93gRVRmBpbEJm6HbyvoDWfTaXKM7WM6J8ouf4gsYmGTorZqBz6nG2PiYhHJsrrjfyYFt7r25giSM73hVT",
  "key26": "4cAGEeaVhc4MFj6M5RzqaCYiBp8qazZoHERgs75YLyVBqsuzgjq5AzJj2r5zeqe2V1zTd6szbotZtUd5nU6uCZr3",
  "key27": "5JJ9r4kFrhCtiNRKcUfsbuEHUv2XAuHgXKFGTWmj93FB5KQYAjwRPQ6pqsbLH6zNiFP6rcXxwBb5rVGMNQYPiWQX",
  "key28": "Y8R3iHkrrT3b9Ls1PaBZNsiBLU67hUjaBWcDJrrW7MWodASrxKjpmfABb4unUqrFeQQDihn9szSriXeHXanw7Sq",
  "key29": "FeughjEbytG3RJvFWoisVv5xJAVqq8Fj59Re9mFBiSYCGwmabV969ZQkKCM8TYdL1dcMonEXJuhmAqF2eUwsPjx",
  "key30": "38k7sKNNagcCUahvJmGcrFDoAv4D5m6rwUrHov3V3U5sxpemBjPQazcJqkYbn8aFYo2hUDisgoAXsbYYkNkG9UM5",
  "key31": "5kbMJVpwkpGjpDUtZBe2VYXU3khM7Sou9cdBiUjWYo8QRtRrT7Au3x8bPLWg4ZQdWsPMdR1q7PJ9A3tc1UpgJr5e",
  "key32": "4yCnzFXTaFWrGC9dqcj5tsoRCQHifnKHVoJ6HjdcgkR3MdkxwH7xevg5DzNVbuEY1BghYU1c3CdCb3FWhZZ8zuMf",
  "key33": "5iL2HKC1xoVvCKsEWtB2AnVCwD9jZv4D1qNPuJi3dHwG7hN3HVzjLH1cQEbB6mEUpVux6nVyUqNgetWUW6CvtKaG",
  "key34": "5X5jTuXNgpiQpYosJWocQgJjLipJkpDbVokGHwzAX5c7wvsXVmjcjT7EoKQEbAxqTeR5wwZJnwAXKcR68T2sHoN1",
  "key35": "261icSxbon6KiNWLxYBmH3iwDg3xXcqVLLAkc9ydTiFE3wDpAX5nGkBvWcWpaUREK7dHYLjigZ9mBFfonoyzc8ma",
  "key36": "dMauZqRZ5weeEdG7otfRtCpEY5XCnPiHiiaWSt4ymFMFVN3b2gRsgrmF4sZt7hLvawG2qbFgNDtBm5VckEi25sk",
  "key37": "3eXso9ZFScq4sJN5LUpJReH3Yu5MoF3HH134PECq6dX1feqVUrjrmLksBnuJEi1LBMzR2G497eafQxC5Xkz9AB3Q"
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
