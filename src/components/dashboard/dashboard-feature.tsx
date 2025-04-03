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
    "RKM2Bn4yQWK2fmxkBH6Xq2175bJ1HuXMHmRz8JXNMhRz7mqABUszkGK2TqpYaWqjaspy93NMWo5UgP9vRnb2zL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TDQgaYDHuQTfcJZNJrQetDdBMVXfynxD295Y8K7tDQCeRZKjGdxy5QdyELEwaQyNJohDKR6ejHWnZvASDF15yNz",
  "key1": "4iZ2qetca6DDQn1tJuqjeRRYS3HVaVCYPXuGwwWVES23WG3WDQRJhFAZNdQZyrMzVi799bXQKgNnaTzp132cnpPR",
  "key2": "3D9ngPKWhQ5Kn4yTPDmHf7moUFRYxC1AnDiLwgF6BeHTvqRp7HNqVdQ6PkDWWiBLWjiFufbYEj9yejUxsgU4XQBB",
  "key3": "RKLWrnrKz6g9zQWDcqdiYTvdq9z6T3F5WzQYseNhHry8eqi29cKb1cJ5ZGB42pBoZb7QZgUUiHxB7y5quucGULh",
  "key4": "347bTqCxd9YR9JkkviCPgtdMKKpq5hbA7mxuiJHhxT6q1eREHFRFwQa1BGzDE6q1bV6NR9QbpVasuzSihMF4dLrY",
  "key5": "4p7enjkUE5TG3Z6TkvDCTjkZnZuLxTQmXVP1AghYKRFGZbc3ZS9JLKAXAk7XfxYpFTAw5n5NkkdhAr9bJx5TPFhd",
  "key6": "shi29MWv8DiJhpvxeHDZxq5x7J2qTHVkqgmkh6pSqc9Y5kXyG8FM6DVqEDYfxDUfaKc9R6U2XC5c5TewZvqb1jG",
  "key7": "kreDD4LE7SKZSoxx9EXvf6PwopgcowXcAmmDRFGupRUGxD23gp7BtNYNBDiWUdPXSpPv98ynRBo1MUPKHRrTp7s",
  "key8": "2z8gKhwHxz6n76x2MLaH59iYUXHSu3wbFJX1R2WNcYPinuLcUU8XuuWS9hgU31YCcaaU7UdCHA7mkehdUk4MuyRx",
  "key9": "3UoGdaRT7Ur3fxMf5E4x7VfAh5B5ByDWmMxZXfUjQQqxK1ws4G11iX9zstWe763u6NAWApdsFJENxRB7rhLicHSo",
  "key10": "5nGZzMuXxCwN9wwxETiJZsMZShWQaBbNz2tcrtQ6ibSfbYzBQ8KqJPWuhgG5SHqzVeJpHbrJEUz2R4Zt7cwayhBX",
  "key11": "4BzALAhWVjAHi6zLn6eQFTabbiEKrshyE3SoMoeq8Q1dMNJhNpBwufpoQ2r5ZKjj29NxPd1y7vKz6VB4j59FCyyg",
  "key12": "2auadzMgVed6LtgoGL4EPQqbY5jvE7mJgMpoWCnnLv486pQnhUyJkYGo7Gc93LLQwuex2wKFQmeM7S9WSAWsCVSh",
  "key13": "rjANR2efFPbmhocuYtabGyttcjspMGR1YA8L65op3qrMVAUgQeHSfTceibFF1Jnyd6W2xAQFJXdk4AbyAzGbH5F",
  "key14": "4sajm64gN2QoBDomqanwbvyPMsSs2nPLGnepMHuBq5AuLnMfHb4FPFgYst6F5q5tVbC5KseTvKghQ71aVSFCMEny",
  "key15": "4KFXWbfZCVjJH9cudnnebV2PzPnnTCQP9KuzsjNmABpMsZuVri84ishnXamqukg1XTVcLEYa5Qb5wCafkSgfZmEZ",
  "key16": "5qh1iRLLMw1cJF1bZefAvXC1P76qCXsQuZYcyxbSfeJs8hJNjWMTsz4meugrZmC4irac94bYpAt7iQK4fKZXuKLT",
  "key17": "3bnpnGio5EBcSngcmHpL49bXFXprgGbjdpGYMgERRxtgGAFQMufUuqf5RsfwZv58khcxJjuTqeA8WvBhcqFiXo6m",
  "key18": "23UKSUGBLTjqaCn9xsE4G6Lg9TTUofRXMfx4gvLe5cEVKmRhjvzdkPCDKKTFUsZWLYX31iWYGbwHuwe1ao9dpNxf",
  "key19": "5UFG1M8yocioToVyJ282MiiGBTs2yfmQTt97SgBtMBbFRuUSoxAwzLrCgCr2n6P88tJKJGH1jSUn7W8yPy8PAXqy",
  "key20": "3jpm8ckMkWnEEHcfCLPeivvT7fRGrGEUPqaS2SZimZhsQdtEUPF5sKYrCy34v7jaaJW99aikUGxheESbEbffaoxp",
  "key21": "5qE3hjZCwEVRdk4Rt8o2NVWmUEELqKEvk569k1hSctUcaREagTXGV3TmhuRkQQYV7ySBrpetCKCDrkz4DAy8p62C",
  "key22": "3YFmJMZ76oApkbZJQ3LSW5nsdXDtdzHETt3JsLSurdNHnsGb2ZFddcqwphbo2Upndwa5yUDGtEcGYRoVW9KHamSE",
  "key23": "4anueLQPjuCjmcptUQsFnLugfzqFkTZkxDLoXbjb5PbdugoAo2g5AiUxmSmXsjS12JWimBNeSbcRj3Lmp8S3Accs",
  "key24": "32qib6DK3pmyzi8j7moSXkeJD4hTWH1wBGvDuomWpVwe884FR8GTV39TbhVJHUYb48BHyphFNuTDkH6iamb2R9Cs",
  "key25": "3Xu73wvTddE3S2EW5sM5tLpW3Qf9dxA1JmfVchF7L3ga2Korq92j8sUcfjPo2LyTgU14P7s7zNmfdFhL8rWdnQ1u",
  "key26": "jrdwGsTFjCzYFrT5PVesJAgFwdjXwnNVMXSTkBdTSiwWXjSEpFoCXNGhf7VL9gu8yatPCQXvpifY8Qm53tTXsHC",
  "key27": "5joL7o4DW9sG38ZuVhBrpnDv77D3K8iLbhUq1Nv3WnZdRFD5Veo82FtbXgdMzbXb2GCnBLeRCcYHt83TxwSJ2mE2"
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
