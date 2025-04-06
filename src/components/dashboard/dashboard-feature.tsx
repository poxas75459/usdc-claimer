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
    "3aYrAzkTxX7wa8ESRLm6P8AqyVpJQnwDTMstf4wq6G44YLWuA2oB2Gq5zeqYceC538gXxepiHeyQkUBPhpw8Mk8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vq1H32wSY4RWsfjasB9v76gDcXt4CWYiGECzhWxr8yhemwQ9RbZeTwPXdVHLQciUdHEk3rqjaUtw5dbN2L3rwqE",
  "key1": "3TrfeHStYdaDRwggkU5HpkthYGZFjq75dGDoRtdQuh4mka3QTTB1wNqC3JPRvLga7Nqdbo8rs7meYkHLQpKhiGg3",
  "key2": "3Wrd5Kv19BX9fSUqz8snNtWUX5ZrCtZ8jwXqY2S2q4wqr3dAndwWSZnNDAFJguAdWhRsXtQERBmeUxx7as3FS46K",
  "key3": "2JxUQEdnPV9DJq6jnt7hwLu2uegTiBMmkyEy9XVqM1gXMmP4SwoN9qbdjY9Nq9Wtv1c4rBGgUf2QyTjU2SH2aTLA",
  "key4": "h675JQy5WPUb9gDsjK2VkaqEGQU33R9rYEj7PMNWswoV6q1MgdZZVrGXGWK7xq36982ybpUvH3Cc8XZjBwB8Fdh",
  "key5": "3NXfDQU7Mk9AHgwpxWigjPi5sLoWi2mUgVsHNJhybEo4UrJveebwqJnpUBdFDBRRUkZNDxg8toq9WP9W9sgs7PkK",
  "key6": "5yZMruQ1d74WzM1dZkhVU4Lnuaze26sZ63exeRsipbb5XNJDQFNLbciXGTh6FEzWhKCaFqePFhkDonfykFEXzVkq",
  "key7": "4z9z95bAMjdUQXrVMmFiZwsc7ffknXFdk6zsQT3TGpz9B1qgwceHywScMTtHhcCiFGe1ieo7mKxAWEGFMAdwhu9X",
  "key8": "4b66Gceu8U5dCwLfoEBEWfFxjcWxyCAqu5eWcEf4s6gNqyNwKQm2VABqDtQGuiNuP9MNmw2piU9seimccQQUhjZp",
  "key9": "5Uma2CBc4oJ8F1yivFo1XeNL22pZEa38mTUAvcG7XWBdDHjGf9V1VT6cSqbaNYAQYPwLr4ma4UhXDja6M6tB9Tfe",
  "key10": "4QkYozKTiZzNwU84Ushr8jc7eSH4x8xdJVmhaansVXHP8VwuHxJ1cm4eWgYfxWW9p6RakPJK2WjzAvDDa9fmayGj",
  "key11": "cK22qFU9MJBYAifc3C6mrQWvKQujpJbsJAmkGy48pGZXSogfEnzmVH2VVbcHfZDRaFFR5SNF6dnYrGduJPKo39y",
  "key12": "pWPepdSn5c7jDVhpL8kx4v9tnn6GCizy28ozUb1EnSex141ab9u3RmXkvR8R89UNEokhM2pDpJkrVc9RG8KXbS3",
  "key13": "2RzrXpPpfXuDeQSQjfFNvEaDxEGE92eHVJ3ceUZEfGQp5Ad2gbiLJ17XqpDmK3dvHBzSqGbrgzgqv77mcoG9B5f",
  "key14": "3Se4Akijy6uXkXa97acTnTHTAWEmw1DY2K9wXLpUpqb41ey3TBXmV4ccBcpgN4GW9CRoAVVBkaYVUWHvy6kLNdMg",
  "key15": "52kKCieiayeQHaapPdwNngysUr6dPGAAmcbdcH3ju5FWbbcatXwuyxGRskaWwQMnC9KPRDBg8Y9KXfdjuRKuxTXz",
  "key16": "5prZqEhkXsC3VTsjANWDuvSMHHbAKnWeBo2tgKAR5sLFsN39oW1jV3GivCPqRUsDBbXsik8xtQ6mQgiTxhFQZakb",
  "key17": "3im1txZPMXmmaHKbZ6zmQaDdF4fD2Pcyzjj5uLVRJYS63gci2hTvAm7Zcbp57APw2pp1BFqtdakrptHwLoqr3nxS",
  "key18": "2vQAdRFSioUQypnCNuLENbcRXnwU2bDBJ7UQ5qTZsC7w93V1PMjrGv3bR1Uww3JFtgJ3DgGV4YheAcLxgENQZL8T",
  "key19": "2ZtMcJVG9yDEPdJ4mTr1tLYuuwAbTAmJDjzYmDBt2BSWzpo3gNVoxQxLEUFbbkFEvXK4frKVvAuTYLrCJ78wWxsM",
  "key20": "4UGoNZ6en7KWKfhJGoenFJHbhrMPW1LzJ4tWYgjbJtMiCdFkJufseLQA6E8aGxSJoeYEjnVeDrqFPpYeHGjhLKWX",
  "key21": "VW7rUVJCoLCQaRd43Vyzn9UEAmDqpMW3MSAHhcUvQqyvSNt7LRRrrJPMnEzrDMFL1CqDKaLSWXJXTokUa6ZT8Td",
  "key22": "4p95KD2K5u2Vaw8y86bFVuWCHQB7mktXYfrwMJNHJu99g8Kon7vVZDvqdd4qyZmNiTqaH73MAZxJEfW7uxYYVUVM",
  "key23": "3rq2TmtzCqZMDpUrNWSPC4RgzJ5ndKHwT2F8fsK9G6drWDebqYZeRbfJzWESmKUrpzknntXa6GzNby6Pgh7dwJq6",
  "key24": "3fC5e5SLL8bNviNFCqBsttLYFXXuDiXr2RzzbvradsXgUrZpDo4J9C6ULqmn3d3cfqZUnTq3CHZhght5zqTrjG31",
  "key25": "3S8MUKQcbM9ERMa3DSfGMkLj9Vvmq31fUwkg1upQ9Dj8YyUWEYf6sMp2xHyWVV1mh3SYmtapSih9NxSCnWtvhG9U",
  "key26": "4KMcMb3tLi86HKXCzmqDRd3dwY5h4YZstrGc8RWnpoTmfd4waHuq99Mi8RRfgLXUTKctVeKqETLpSpsEsdk9NctL",
  "key27": "4cMim4HvpY1GwYgfRSdeKGqmB3HqxRGRfFRQSAJfoLk3R5A439SrHQwoGYbcw5iMUjm3TYxhiEam8GwEY4BYr2Xq",
  "key28": "AGCkuKkTY2Mb4iFzei3pa3phKFez3hFRas6i3TTRbkcTHe1gmRVbbWx3YzpfhMjQfPmJeSrNuyKYjfuKMoAz7BQ",
  "key29": "4oj5mJ7cDbMQFRimjSiShH1tXAfqFzo64cpuPZKuUqLQ68o134GjibUfvxG2VKkN8PNd6RmLcKwZQsbdTSeS2p8a",
  "key30": "2WWkwPB8w6NENa55EhHaicdgTyoNCDJP4k8kmEhpTxARCcZfiHzk5uJRNeW3t3P3mgGxRkAZbDnwreSS2XDa2Dak",
  "key31": "5dEFbHdUPFNpQBFkbYszCoWaVLkXefGPGWj6F8QaxoyQ57ZtsJWhXeZSvJy9fgRz5i5WjkVqLZFzGyDAZ5eXyJ5t",
  "key32": "2tQuhvrWwdZ1dSXZFk4pzgN2yjWY5tGXdbaeoaT7pXzmr92DoSrS7Lwt5EorjKNXwtPgLfJ6bxKzCnJAvsfU7y2K",
  "key33": "4ALAxCsDkjztYmjeTQrW9Qun17N7NKDDc9fUy8qCtQ4cpJgxBYkHbNTD6dRMWw9zmyfqe6qPSC1i1isDKabQb49m",
  "key34": "YUMRMYnZrFw5YzM7EthahoiZVvzQW8xqgMEDm4HsSnDT5ofC1cuUk8yhhpkgW4praze3gTjuAShUwvBSnBHaVym",
  "key35": "5kDMXto7T8TwsghVaucnXebW88pFDbCSYVz2d3pzthsDAPmhx9nbugpABhxJxqUsP4s5gzob6iv2yUYRTQSW4uCA",
  "key36": "3DWX1SaYZeLjtkNfuJ8zU7iUydsDWKXZixxogbTe5U24VMHWksvVprtDLgHJtEFB344zuswD9HfHahXxZEeT7Mg8",
  "key37": "4uaFQz7Px5FZ4VnPWmXQVThfZG3xaK7aKj8LHdnKFoY311QRTLtnDFY5toUSi35TtZ16xv1GujXAPS6s3d4ZkVLZ",
  "key38": "2RAS82ifqosb3z1nxQ9YWBThd3ZGVmTvB63qBvNywFFgxtNHmrej14wSHDzmgWCtFfeauAdAk9TL196bDwzgFN74"
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
