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
    "5tkSN5uyeiBhmEMaTEfNzcjHTqA3LSEHr1uHTTUKr5jqZnzJp1QuywVn92aoM7WrAzPvGD2JA8a1HEssy6bamp3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KC628vnUgcHKJAQA8o9DLSdUuBkmap9C1QARppJy6QGnjx8GcPx9njJv1KkxZrSe4fXHZVu1SGtAt21xB6paqYd",
  "key1": "63yS57n2AUD8kzz7diUZTwbdu3VJ7LXP8yKKWxK5baRmCg6hbTg72znNJVCURgkXs4MjNFbdNgnLmcGRQYH6susx",
  "key2": "24sgtApd3R5eiVpSwGYsP1PMTJyFQiXmP3zZDBHJKyytA5AA8fuWddhv9WsbaZMdN7vsb7hbMZmLVxsWNoai9eaz",
  "key3": "3CAY7sq47LBokxMbkrSsYhJPo2ahWGi1VbNhTsgr8QHuqiN6LTzsRqWpwAJRgghLq3RjssfYgowLGZYSJ19UM7jN",
  "key4": "5VbLgxaAbpEJhcxnavoCYcpay2GPXFVWigyg5EujbwP8WqCM6oct5PYYoTzsUMnvUVdi12HnhJJzMe3BP2RYx2Ro",
  "key5": "3ZDQbGxieAuShFDsWgGoQUf6CFpo6p3BPFsKTa2Rh9WyZ9p9RHq2imouV6dLsn4smbnoCLpoMrH9ARqwbLrGu4Qr",
  "key6": "3tAYKMfav9qGBjgrcpPkBBZp8kWUDd5XPLGVWjG41JmeN7y6hYQvSBdLmKsCHZiL4syhCYdXjnfKLnmSgAzs9i5v",
  "key7": "5WQAhw3kFDg3tdzhkg7SDrjxuSJWr1K61dGhgxZTDLRWmFxb73JnsL53HuRj9RVm2QVYEhi8XHzEJjTtu5CCqjmR",
  "key8": "5b34B9NCxdZ7N2fGR4R2LtsPq9EGyoAuevqT5f7U4U3Qzg5hetVDHDqLid3UqMqHgByG2uV5c9Cjp6BprVYyRvzq",
  "key9": "3TwR2fL8oVZKieTcn8yYsFoNVpoNjUR9VCHGWCTsMidfZ8z8jeF1Fkj4h2Dz63muWToZGVyjw3eFWq7BkBfLSwMM",
  "key10": "3aYanFmwk62RRZZQ5uDYqE9wwBFjVFmxyx3hDo2QeGYQKgedpQjKfWBEAPoQvAbBt77AQiamXL1VKKJut6c3yGJA",
  "key11": "5YQRRdeuYuMVGvsHRVjTmrfqRN3dZ9uc4oapDbbdPJdEuzducHBg4LRdh7degLkUdTdjyJekuP7uKduVy2XbJPuC",
  "key12": "QPhatMVeHP4WxoKZEh4dJcSyUAuG4Y7GbG88XDKrwf1uTUmxGgak8AiWJbFk32WudxVhCNpQpYtTeyUs7PASmAb",
  "key13": "3FHTTm8MK78JerzpBoT163kZK3Yp5NL5P6yoMMkhfKyZNfLGpHrCCfuNeeD6AR9em5FqHfXsCHaTDaFHfS4AzCpb",
  "key14": "2Nc4FZnEPGceT6R8XsmzUnpuQDzUoVtRAkuu6daK3a3XdbxHSrHFNjJwPetBn1EHrnZLZ4Br9gKifQDnMhCXC1gb",
  "key15": "5cKE8cm43yVpnpXZiKHcJaVfd8M8pejoS3UKCeh6d4NwDbnrdeuNxaLokQyRcvDsgV5wkMPkfP7SeWcvDvBycJCR",
  "key16": "2AX6w97qdtTLgKQDW4rj3PYnPhwG5KocVYKhJ6GRa2wLQsQMDcS4J8SWZNpavb1ZJc1UpaEgbuXfSgAzp2wki3VN",
  "key17": "2oChYY1LYoBa9rB1VCscaUtBmHEehhTheAadwVbGHmuhxQxrtw1LK4MXY5h6p76Qe22SdCo7TXFRZ5Ujq3ZpjtKD",
  "key18": "4YnstTZEp5ResZsCPfzQ1i1hjRjfbGqPaWiWYiU1brNhCrCcbMT9Ycz7v5JDWk4rfQEtwbFketPejYdXLxXXnpoK",
  "key19": "3oTsbzyCnPR2S3dGv7zfxHFHro1qY1hUKQGSpUAXnNoXbx8m9KpvKWnqL493tSWiPTY57BWozYbqCBXhatNkgaBH",
  "key20": "5wMXuaTuZGSRtWVLHc3YbDJxEnHYVqQajbWAh5yHtUSrjCJBT5QzoDHccexCY5fqkp6D3bCouToFxx4JhSxmG6Sn",
  "key21": "3MtiMRXnGrCtsWP95muUBf4grHwTQ7NbwWyGja34Cusj52e6iurLgAVBnDH9JvcJpRzHZ3tTr2aGhw3437aQ3evK",
  "key22": "5LWPq1Zsi3dKF752EsTYeKYVqJ2b2gQ3GdaikAdmMLQ6FNoszQ2oEa11dmHTTjXGywhr8wL5Bh3SaH5PCZG5uyQH",
  "key23": "4NCk8XB25pnBP6pSJmhGbGXoBy5Xe1Jb3g2FcGHchNMjw8JeG6UGTdt1iNjgyQC79zpTeLxHFBwJFdjs4ZgXXKzg",
  "key24": "4MDaEqQNRK2ts7CnSMLnN5J7uSnR7gkgBBEJURdfMkZEotQHdwdiJzcsc7fijqtchRrEkbUPExqGDWRQ1aH1J4gr",
  "key25": "2V89snhX3MdkxCnaSWNUvS22pE1GTma1MWZxhzRFiXNzJJd1wvD6mxhbbhZsm9BqTMJKb5NnJnum2uVWfcNYVHzV",
  "key26": "3vvHuKqzpK2gyBwLu8QEkWq4AtJ179hXUXjC4Vsb79FGr7VBNnfpbxk6ATHYjVkc6w6nQ6JFozftkUhzdvtZJt7o",
  "key27": "4piJvZ1e4QX5wVfijbQAaY49478VEBmTHWAzuaDaJrV2eUhEzjKtqYnxncqX28LY4WMC8e9zTF8NMYgtTGdn9CQC",
  "key28": "2fzDRFNir8swgwrXwPy2cU5UxftjHPK31V5AhkTPmjzeFtBQ8H8jic5WdLrfvaeT52AodE8cQthTjPEUhScw8F8E",
  "key29": "28jESJAgSCDbiKDPGW2KLaaiE1F5DdwhcLnABdcHF3qwPABv2rJY2bsP9hLa8HJKVg5BMPpGFR8mTJyDSSuCjSmq",
  "key30": "4E7MCYsSNZtALPKHLmjG87afUgn81MiYQc4dsEWQ5VhUmPP58BJWRYUwDLDUuSujwVkGhAY9j4mNJ8FkXkWLXVVe",
  "key31": "3L14AQzMGzhtE1pWeYzTktbmrzDGWnjPv5zXv9TSvNZvbkeJd27WD7UBKgECVxLG3GPsRW3ZspiTuVKFcegpEnPu",
  "key32": "56Nk1ZVBh5TaZEugPhfLmxYcEMmVFFymwxnZArn2urUvBcK1tHrU9rCNYVueaP3LbevQkD7RwZwPWAsNMRBuKVXK",
  "key33": "4MAUtUWocoopt4ifP4QBwaVQKao6TpjHa2pnuT9gNPScHLRAPKBb7TnYtEmZjvZaaKdk3wNwE6hkEeuZNpC8yVDV",
  "key34": "4TwKsPaKngiov9tkRmjhsB79eGc65bHemrpCwW8vydv6Ng7EVQWANYcGVpjvUngyuBVMGcaYviPPGBVQ95QMEzwU",
  "key35": "tmwFAkzdE5oArxpLucqwqCz3WowZXvJrWBMEtRBisp6f1aqu2FJhSBV39xU2GFXoUFqwSUDSnuDnz6D5T36D48W",
  "key36": "2nVGeT1Xexqfi6npBRWEUjpoDDxi4yP6E2xf9SukutHTE84bU8gBR3y7PYrrYGF63fUffsHiKk6cPYftmFPQbEB7",
  "key37": "4T64ewBPZVyXLeDZAS8oXrWEmomXhYKDcyKAWRQNabWQE9z6eS61cJisZEDyv74MXxYw7AyXEDue4wtPpoCjqXmR"
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
