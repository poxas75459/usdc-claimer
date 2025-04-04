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
    "5835q7MRbbZicf7EXZeTnDFTsHhjhDK3fmqsbpaDY4yFVKU8F52kh82T3EAggyUSwSaFy1Th6B4pXLc1HkmaoYpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NeHcVstdoBwRY95DLmsvgzwkYsWQ8rsjuVBn5tRkUcLAnhaZhwy25ZHJ4ZeFyXHYhLtEdyi64S1ZhxP6vwcGRE2",
  "key1": "KLtE8Cs1k7bcHwLa6yACYTh23qGrgMZbkwsxwnnkeVWMAyehNikfkPQtG9TUoC3Z7NjrJC5AP2dAi9tqP8ZYuVa",
  "key2": "3eTyrc9aL6icRAxnq6RDpFhYi4DNMTr1iwL1QiP1jqUykNgsTdht3k3dsaW4BzpU3MS6H72PvoQdej2RYt3psovs",
  "key3": "2xPdGk7h14nP2eJvdjc7X3XPLRu295FwQPHGursmrnQUNSvAdCWk5kYjKxxujnBihL1Qft56rFjNthCo9bRhNY8s",
  "key4": "3hSod7oghUDFjCaXXqVJHph8yPYeQuDhQrRLZLk3Wf6PEUbJ4hWmAoB4SdSpswaQVq9Au51i1LD7vt4LrTrerPUP",
  "key5": "5HRGUiMZfTSNCH9ZX5d4i5YdVb5c6yGMrrHCyfeSXzeSovyBRpbALnE77r68MmcgFUDZbst7rxvB3bcZrw7eB6Wu",
  "key6": "3vz26WPU8XgtMPXac7ycMdrUDey3HBAVWCNY9qDi3wxypUtUaSm2j78SM5NPyEsSfNqFGRh5wsaXAaHyve9W9ddW",
  "key7": "2mvvtzdcdjwf9cTAeCWcxgFGYEp3b9yWC37EVgicZqRpQDiwMRcFPD4bx8XzQRt3w4FdZHyt2LXRQKqpv5aQx3KH",
  "key8": "5jaSe6JzEBQTJe6gQLh9PqddStF2b9W6UvLDMjsvNgXKdtLoyvAbNziL9JnhME8ksBWs34V82aoa782u2xvCL75C",
  "key9": "3TzpDDhS9xic8jLjh7VnycBTGfufwuRsSHV7a9tdp2GJQDPQV7pj96VLYKTPygK8sTBPsbwemSiAC9LqJRsxHyYL",
  "key10": "3cFXr4FTZgggqXP8ec7dfCZc17PGG3KDjDUJWnkA7N4rcRKarRNnabdQAWTURmhVwtvY77PbHn8w2SNp6A2K3CNe",
  "key11": "4djJXiPGqS9qDir7yJxHurN1pfq1oiWSZ2v3S5ntW5cvyf35Bro6k1F6sAv43BMVvthtL9SvjWPBRywzKGQAVit6",
  "key12": "5JuBbyeEspsm3G5ZRYVHzLs6SDS6h15WrF3k9Rzb4uioYQXSCMMneQyMhouKfE7JakS8C1MohXPJ8LYBr513dKjY",
  "key13": "24FQL8j4Uwe3ZqQsrFwxCGeBXm2YunpGeSDCSPKC2jYZnnC7gRX2KmcKEcQ8r2raLc37Ufx4aXRZa4uqJSNdrU8v",
  "key14": "12A78QaVDBPx4ChBzvzLeBAWFwXeqxtAg36BN2aD61dAGRetERjvisy8uyomHRnun4M4jwcM4rnGCNrrNbhk19He",
  "key15": "2HGVyyGi1Mitt4CHgTZx9z9srbnMYvn4iU4g84xUZWYKKrywuyfi8WDA5R9bhoS12V2jA4NpW8wDns8bW3YASG4W",
  "key16": "3kiKpQbxzPBa6LkS19AnLz7dbpih7be6hCsgswAeHhkD23WZuBREfmeWqDKTwYxv2AfkbW7v2LVtpkLRMqWn1RP6",
  "key17": "5yp64v5FYrP3YzvrkGbrECpgu2myQb7qrfqdv4FgUDaeUGRYh53CxS35V3WGh7xwpMTrLuaLLTfTiMqXkJ8Uz8t4",
  "key18": "5TxZbs7xjYZdxzTdnPGqZbisaq41m2LNWsdBWrwzsWXY3uX2NDAKZYwtRGKWKKXaUhQsPKpeFQtzhvfpCLoLzpLw",
  "key19": "4NcZtSynvi7ej6P4vHfrsUAk7sSmUSWDSZSNNZzKL3qkddFZPGrirLeg8CDWczFWE1ayqAt6kjYuUURFGQxVCPYG",
  "key20": "2KF8NvGubZoztpz4U14PwaYiVcdJgV3RvyW7CTNy1SN1GF87sRjzDCBwE3TJ2eVnBdjxWhR5Cnf2qHogcaqvU1i2",
  "key21": "5TCtU9xciEffvLUqm1oCCxFtbUtvrQH2jnAKBgteiaTGwBQ7DeLi6Jw2kmqUg5SksN1HaeYrDCSmTJNiX9Wvf59D",
  "key22": "4tqhd6NS6zNstBzHAacQXH4yzBaFnJpuX53Qe4S4ZDnYTiXAwXzhHvgiec83xV9vRH5YvgdGe14645Fnd7J8QUXP",
  "key23": "XyP1A4ywP4Yqo8mQFdwk89nho5PYgDQh3VuEoTBRWt1jaoBBtFe3hz9PW9KGxQ3g8jCFEJmkberv2VWwRSs6XUo",
  "key24": "3wzKimaUDkjoAav8VGLQ2HW6cYEdJ9jxnhnWMm9kziG1oDgEh4PMawZKjNnoKuU6hQLpDddyQtDdHTC9BPL5ezeK",
  "key25": "8MoeCKDyEnuo4JH76MFAA2kHuYxNeAWrZEXy9yvGYrc5JbrQvDcomAUDhk6vwfz6tKnJtM9CV8GYHCRrC1dFnto",
  "key26": "Z9bEYY7RAXL62aUZcPM8mQfkQx9ne4j4poXniP1PrTcHSS1AvtnJKjoemsNwTXZ7XoAYpKezKhgBAumvD1HR7x5",
  "key27": "56EK4ue7ApJHHvxN1yDMe5QFkGxNE296BXwk5R1FyfonciyCERxJWnzf5HNJuuPii3jWPQbMUfpx9fB1teomKDjA",
  "key28": "5TZTR6ZiUKkfDTTcP7z4V9PxDwCrBQRLbS6dKDmRPagLgjmj5P2xaWiZYBaiFrpEPEEKSEmGTgr6pdQUkZ6YWqcG",
  "key29": "5N2wpcYRRWUXfqDmvDcWBevM6MfoKNvBioaUaRpzsYX7mJHrCCUtpB2GpB18U9g5BPdKmDynCL9TKK87uqgLZXQn",
  "key30": "5ZLs6BD5qQTpoCcNnkxuvX6AfSwBEaXzPk7rA8nWdPU1NidV9A6DSBFVPXUzQ8An4iY6fQpNrXxzQ8zkFMrc4ECF",
  "key31": "2xJMzFuM7Da7PySyhy3v2JKh473Zu8qbvahDTTCGw7R5z1kGq7SH2DoGTBcBsBAKzMCnVnsARBupNuJHXvY9vxG8",
  "key32": "2QDk6wwhYAw962LUMGbWdJEa5fVt681Saof7mfafgSh8VoCGWCJjzhJ6oeTjXJPgdjbuAnheStnjsPHD7Hgtkkjq",
  "key33": "2NbxqM8RVfxQTKxc8PDXtqEvZVTLxRnb1WTZvmSs7jSCwygKuGMurmiRbGMW2mq1S5YAS9gDVFqfSLBDre3gfsnr",
  "key34": "5Ccptpr2jAnsVQ6soBiZbsF96yPrVUfsj4u1AG9LkmktQfqSZpQ52jDFzPpQ1aL1fTdgtHaKWzqdsjTbnWcsY8K2",
  "key35": "59ApkiyBbcy2G3iud2ZPBQZm3oKg4yUwCvXRrw68jHHoHjuhziwvd5q6HYjMudzzqR8qg9bGG3VXwkScd2ruaazC",
  "key36": "oAksvpVnVEv4zQaD9r45tUgRoZMqywdPkVozERp1eNHG1BL6jL3q48ikiDk5PHcBDEsJrj3eD4SN6J9aRtt5inn",
  "key37": "2d6So1NmgafU3iy9Wr5oMXPcwrmcNr1HhJ8qQQ4xMewm1pNMc3meWt8RF7gZMWedSsi6VHmd83hjeo8EWK43bYQd",
  "key38": "RPA4gNTks34cKwHzcdwx2NPQS9gLASmYusoBtyQ5KshogoqwEUjs27sivxaFgjYkH9GHnCmiGtzjLK18r9sTh9d",
  "key39": "2tAPJxqk73pm5LKL25D5uEfZQjm9gBrkg4xmEgRHXdticw3yeNRTan1QCHByZpRs2SggniiYYBcsBuJtWkbzTKDf"
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
