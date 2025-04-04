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
    "3Be28k4TJ9kPskrQUY3zgHmKubEm9GYLCEnvf5ad77tJDRMvytkV23RXrF1eANvRcSbrzvdbKC83qZkgh6pirfRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ipS76X9MvhjFfsdAsm4UGSjgR6bUceGvXknby1WeQZvcN51oCQMnqJa6p6mx7nccbtxLNSC5DW5pUGQG2Zvv1Sc",
  "key1": "3DE3pQNQrRcZhFyUcJeMePvzezwuHm1pqaQFSWZrE6jfDURV4vCdU8K5cxeFoSsg5gsem8jupQf9VsFHsvKukAjT",
  "key2": "5dmnkxwRRZThXWvupASj6EDji4SvJt2A2RSns7Cf21Wt8MhhmsRH4wgJtR1CHmy4j1ZiBp3T6M8YxAdEBeZK9xep",
  "key3": "2oY9JahLgN4XLhn9A9P3zwUFajcAkANGpvdcQxvMLe9pQNixiuN8HPasAAZHFLoz4YqiQ8kGHzbjidrN2MA6ebw4",
  "key4": "47eQkTB45AqGJqJwZfc7oUEu7gQyG9uePjaLi9VJoKqtixGmqDB8uAVyQ6MQTNnmb2v2MVSvp9mZEPJEu4kLDag",
  "key5": "5cXeH5KqtJAUxebpq2ZQxoxHvjfQQtRnhurovecZK6k9sJFWvEBYFGHGiEnxdpZrfpxwCJq8KjK4qbxj2ovNhJak",
  "key6": "3iCA1s7yxyhuqMSrBk4zHED8bftc8E9uKjziyNoNTsXYd4NaYbw64bydVur6CKm1rE1GJfNY6uqWx2LVM2g2CQTE",
  "key7": "3KpUnc8RYw6zm8PpmDNGznSQBF1ogp5LJp9L8FDyeUkqSgEyarDhemsHYJvnTgK89xEwobEJSurJkgPyMu2tEYqp",
  "key8": "4bdKn4K2vtdohHdCBtv2mFvS33b3emSKkD7AcsQybUizJ2mQxynVbqiihZRZ2CQFsPziqV65t2K8WpkzKNKkZf5L",
  "key9": "3qPPVMSjEPzgjscBpKBCHzw8Kascxdcm7Nd1faC7azKepwpsvn13eoNzCvwLfq2xYXDUUd6RRJm7WD378SHW4iKw",
  "key10": "3a9GTFXmSAsZwfQWjMCVooaYVBQUtK1BkumhxQdRavbc7kj61euYVam3rRDMwMkzu34sQnUnWoE7tH9Ghtb6ZXbk",
  "key11": "3zu69vqztbhTkzcezpNQKi4Abtz18R9hFz78izjtpSwDLpXjJwkkD1Rivj9eribX5YfPKpMnKBuXjrmwkH4p6dMc",
  "key12": "2FmzxT6VMUQWQpz7yHUovKjVYKMVNff1WMBeLe94EGBQfwuHeqGPrgsgLQj7K11meCpR5WgmW1VJ936ngdyZPggh",
  "key13": "4xDSm9e8vwEhFuhoR2acds8Noys8Q7c1BE64UyVu5UxdDeDr4MFc3oa3ViXcWfTsQ1Rw1FpJRYqgStU71VVp3syX",
  "key14": "4dbnRrCiBjwhUexeCMeYuRW5YJeGmx8wgy83reYqq6edKkttZgSTNEf8Ck1mDZ4Tg5gt7xNqVgD9BWA3CC3pYisM",
  "key15": "2KfXMjaVCudVT6TAtRraNr2uqKooCWZaRCJPNxzPaanfSNFvz6M7RQKG9FtFpoyd9XzjcYJxMWap9Qr1BgLaC12n",
  "key16": "521DptFJZhtNPherVUCUuARunFrdZ6MeG9VCEMCik6GbQeW4tjMEc9cHD7EpccGWNzTy7MqB5Ue2yJgjiwFRFgnD",
  "key17": "5wHRi9ZBfUKFu7HMq6sV5J5sFBhGYiGDniwPKhPqLcRiqL883uaWwe6sMdPcNENXjmvW1rq1ae1PDmP4gt5bJ6yP",
  "key18": "2BMTVLpW9PRyhMS8CUDrnxt7bq4J1aFmAZfWMB2EsoDcNPKF3uehCLKjgf1YLAyugfy9HD9MrtSKpuqe5h7n2pkz",
  "key19": "4RYW3LTuqkcLr9rJWzng4ahX8HLiDg9FXpD9wJWwfkQaaGBNAyKxwjcPb3obSmzVmpASRXiBk1sbEyfFUgFKRm9W",
  "key20": "5UvZYpKEem6tDyvyh1CL6wYgckYizZbcA274q4jh4XoZMXsab6JiQzhdD2sxtzGAXxJTQUbB48hQzSjL3fVTqoBi",
  "key21": "2TZjQn7PcXb2igpmL9inJnbQgFrnpxfS6YSHD8ttN4Rb4XpzrfrzcM8Z4vcdZbdHFBwX56RiZDKMoFnoQctpoXU7",
  "key22": "5XagmaaDQUQMDVhJrQ4UWehSXmZbYMqHA6RdJfETbxiZe2BEDCbVMLYARE12pHU946pgsjpKvRgsjUe5my7U61R5",
  "key23": "PUmhq8r85qCokQea9wcZL8u9YYHEpowJ8VSvth2nJbn1F973G5syW2FA3EAg77N5KYtffcwZRcZ76s8GhNPNcSX",
  "key24": "56nSE2aCYZaC5DSLroaWmkg2k5oGkzvuToj4K7Y8RPdkYyYhDaU7aa73SKARAX1W319tkfdMh5fefnvgYDsQMvmC",
  "key25": "2vKpwQUZwLj79sdjFQgABpaGA4i4KW7ndhB5uiJhhEvQg2zrxPdmEdwm7hLqsteD7NENJ1SLA1dNo3xuUKunFzah",
  "key26": "eKjiJaPGSBWsF18S2uTD1MPFPT6Pta9BGxTzHxwTK76JDbPtMxdEyLb4ezREbaZKzYe2GKa8ANMXD4eWCxj72T5",
  "key27": "5zTXAYXnNvAYpvWmVVnrcbjNwfYNjHirU1mFTqaqq1zPnqrG9jLnEZuhuubQqku7iqYVhXh4hqpvqXohis5avXU6",
  "key28": "2mLEwgrhxfyuJRWw2RRdqHGyUYAoGDJgXszY5KNW4fpeJ23f6CqQgcCLGETvLnnvDHj1DVteTLo9XyrNVwqQS5hy",
  "key29": "6DiaQxUxTSxZfEE9doprP4Pf6KPpSPoBu5RArHSjSeJ3HNfe85q5JK6cUE3VUJ1JxrRz1jroEmQgycZa13T9zAt",
  "key30": "ef2hZUbfktYtbAotaErGVSzKpRCxTUyMTMJipK833Kxkeu4CCAqgiiLJNPPNJeFBhCaTWB9bVK1yLmmVZ2UmKA2",
  "key31": "5z8F6PDBchWET9N698tW4A64yc5QUparQT51GriXi9FjDDETzmFGYtm7zZ5kHRdDERz24sM4nCFeL1gdvdNVRPNG"
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
