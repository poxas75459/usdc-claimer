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
    "2vdKNiEWAC3p4a5sTRpNAWeKgdEHRyJCQbuxJw9V4dHfJKVLzieG6YJUhfEJqP61QpgZazpemSWpmBxaLUeAsdJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Njo88vWhiSw43Bs8xTFt2sLbLvvj5sntDKvHDcthbJneBwQnrrxpzf38pPKEbJVPe83MMdtt5AMhSe7TxghETGz",
  "key1": "34EMJQfZ7jcpHr3tbxFnYKNxaftwvN3iLYxCrw16A3NA2M8hj7HEt9Z6hVN8HtLpNESQ9GYsb8DSFi5VoBe8VMhv",
  "key2": "2ywyydWAaPCdmpGN5fXKqd7T7HM46Ne9iTxjTunmVmmKZJqZbP6xEgFTvMUNCGmZftnSUNdM8DgwexcHzQ2Xm9NR",
  "key3": "5Ty8yst8XMk6SUvpoZv87DFyQEhdCjmHtuLJkCtmiN1KLHNcNZRUtBAVAzi2NdcSUj7BdrNgaSx7J4UJumrYraQz",
  "key4": "yRrgjXTZSrNXHFXiPCZptzwAEH6JRMRWBWifatdXZ7ETsYAsyE26zGXyAAam1DgddQG4ttmzBwdaqgUpvARmbsb",
  "key5": "4BPX5g8DKEucS3ZFhKRqM95tDZTAEzcwEiqr8iDzp1jqrCFjSZqhetYUZMLyogGqdJjyvRn1vwvJQpn3VFJihhs1",
  "key6": "xdX5FkLHq5ZLvCoRXgsiLuer8HijDTUTjn8njapU6ttqWYCAk6bXKhcuEn3QafmYhHSZu68bzN6aheUh8G1yscQ",
  "key7": "2QMghR4K9ZsQAS5EUnxFDaTncmqXBhLxUEQkfvcfEywKE8xuXFRaoNqrXxqEGx6ZA9ncy8YWqcYt7oxJ3QpoGGEf",
  "key8": "5Hs6AkssdBPjgV2bU75NbnPxhHKVRvr8UHr3fEibARmjGmC4Y51xmkAEXoLnpf38zMLKtmQgvfACiGzjqweQ7ZEr",
  "key9": "5S4WDEstsFfbxVNNShgUh6tv6b9FcTcGCGGYuQ73Ei6SZdnQXfKirowmFRzymGdf4JeSjMhyZJaQuLUSRCc4Pu6p",
  "key10": "26nsTygYiXyJesSaExFd7vEsocyWbE2NczKTUcjoJpQzjCQdGuVFFd8Pbe4ENLaoxXTkN8PpCzbKvLfFdpAx5sRg",
  "key11": "4R74XKDdwkHHb3UwTGftn2nrjhWCQRcQpwxpS2qwUnRypGwsD7wjtGdBMmgtc6fh1qRaZ4zrNPsLYw7yj8sUDiMu",
  "key12": "3rQKjpqgPE6yDKDB2yBYiP9qyXUBMrWRyviQz46sDZmUdYeB9khbpkH4QfeF3pxM9JcFVzMXsrEFtpKGZE1QBHf7",
  "key13": "ra1pdV4FMb5vHiWs2icTM9J5TLuVjy3aDLU41EV64b2cJZH5Ue7zHgZrb2HfEmmGzMTwwXfWUTRq7MzMVViuMrm",
  "key14": "35RbKGzWn3rrQBcyoXK6t23ieiwQbNdnexKXk9XxUyiBpGKfdRUfRSt8eiyzgiupQv4ejSEhYs5kH6NvSfk1kNZp",
  "key15": "5yaJ4DCMcT1d259TQYzwakYqmNiNfJdA6FCWNN8sZf5kf3WpNd9YMky8stF5peKWam8UoxtRQoQAS76PuBYVoVm9",
  "key16": "CU7oiMm17LFuiU7WtgnnRoELdt4A27dLjAHJieHPhr8aeC3qQe19ButDq34bEUSXapuGPt7mQEEHNg9wemJhXnG",
  "key17": "59fnzUGGkmjyD4JLtmchjKE95e4fYY1C6pFcFLsse1xt3TwiyG8NbANV6nZr8jK1SWRM5KYsctTG5meHJJ7A7ro2",
  "key18": "35g2RCrRivrQLXdEV2H7Cvzsw7TJ6TwbWgrLtDspDH4NPdAwMos8i7nxjR1xjo6CSXEN38HFQVUkCuXKiu75CpAu",
  "key19": "2T73pd8RE7tBDZ8yGLZAH6rg9tfcwvSTkziv755PyppRkzvc17NwkLEte7e24pqbCbkHAL4a6R35XXeuj6cEWzNd",
  "key20": "2mM58Q1UCUiDLnN8S4GMuCQQZqLEGwX5z9dexv7SfsNgys3yPMEiNft4CuphQFmQBFyHAQmqkXodsUTVGrRB9wSL",
  "key21": "pzzTjKedpQLtcJkhe7yv9ZutLeJT5z82JFQyheEJcUHzuNirBTyF1fcmd9iPUb6uTHUyagp8xjXgyjvgUQdYUgz",
  "key22": "YUAQckxbux8EJYbC5kxdc68pE16NbbgW1ddvKPVvCUURyLgLse14GWDxb85q6mjUW2xZxjA9ejkgcv2LPxy3eWk",
  "key23": "4PTcxAzSdq3zLUmuzNqkSonunBQcqjwGS1zK4Q2mKsaL2tXkGCDtw3f6SBDWth5DKDEdD7AtQjynuDNGdeMSkfHf",
  "key24": "3h46ixhwstG4pU3qvF3G7TQPtBndKVeGPShDi1wicZTjLHtLWLQ7jp8eQFTDgU35fMid1iZ64roWnLBTLvHNGCZy",
  "key25": "XWyQrRDkHFvShaCrxyqKjw5DL2Q5xB94gMPNe6ijrosN8LEagvGvA8emvSjVJpj41w7EKMR8dktjkbEbsYtb9f8",
  "key26": "47WNisGD2ddXdqycSGX1DGxoZyu4Hi7d1YYHvAPAbR1d8uE5M1M6kzDQEBoFmGvHYPMPS6JfSsUYC1VmUet3uDED",
  "key27": "5UD5YScpUj863B1sCDUypQTJHCgtcE7hWF1pZf5zsaoFUp9kyN4QTkoX1BxJe6s3ACwqBgBGgzw8Uqt8eEp1bJ2r",
  "key28": "5v2VbuVY712fpvyN8tAkSwfZJmVL6mry8Xi4EKx5evYwqtJFVuBsrVpukNTyGvBGcteLzvE4v4kGcotoPFEXbGJY",
  "key29": "25aA2u2JLu553Vy454pRZr3iShJTPcaimeGtzGs7ekhGdC8mhENKaZJpBPmuChr2tomLS5VHKKDrFdrAWnv515Xs",
  "key30": "4Qm1QdXgD8FAAo98xpQdFc1DFDWnX2EgTqEneYu53rCixsaVVRqu9YJUKqp6UGHFwPJEq3ZEqsfPoSJm8mfm4kFb",
  "key31": "2ub2tS3XLTCXCPatBmiD9eeBFT3bHJGeon4QWETCLuZaHwrGhrRQXpaxM8hJfJom776a1at5qFZMuZ3HpPWxdbn2",
  "key32": "3vh4idBz4b638koDQWEwjQLDomZ7UPcZkSnBraXcEUdCcs2WxZjMGr3SBCg6eChDpVsvCKNZEc5GsD4kAXa2uTam",
  "key33": "5PEZatkwGe7FQSFQYugRF2yX7j7irqnXt6EXSWLkMzi5WwKMGPYCVJ3SCw7Kj4hwopjZjSU7YM1uD1k7iCH2pq5",
  "key34": "3o4mC7P8QbCWgCAPM5gzxwy9CYHByfAZXg3DFhnVzNoCBSBhNvBHMGdFDZZ8sT4QebVLHJFVv9TuQyaCMcVHperz"
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
