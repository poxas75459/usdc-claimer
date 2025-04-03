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
    "3ueWHfdPM5ZhoerMKErX8PYN3asBkYLLJTyxtZ8trWkw2B523sd4CykXBowE3PmAXRqS9tAigPVgDMgBiGdgLusJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r62xWoBfgjmGqj1svyje14KiCiZ3YNiSHpTLnsC5cJLidwiQZTaK73r37DxGNnLEf6Xg2eH6WatbyzC2g7VpnDA",
  "key1": "mt2GuKbTWh6ZMX2gMSvY3b6dvGDoe4QNSAUjLgGJoAmupzXbuquzMnJwtNuwjeU1nmEFEVCkhPL3evEWYxecwZ9",
  "key2": "5h2ub996TNXDCndARVUubA2czerVLBBH4axnHrJJ2R9C6BDHMLe3jvXN5kNd7U7wgwxdnBxYw4oa7rtgGDoGV39z",
  "key3": "48eZNiePqwyLpCx1Ca3Pdi29k6Ysr2rZFNuLrWewo1Fgj3wEShCNQ6upZtBkCWESATyttKMPhUagboarb9JWwDMq",
  "key4": "5kByBWEV94K76WMTk689ET9jg5MG8vBzgaQbmx8BM2aiwcQQMzddqYYmRHRQ66fDNGULxbwSdqzN6RjmjS1a7dZq",
  "key5": "osSDqr8e9zxMuVaJEYMdGpEJJr9gt3eY2372RR3BH1de9d2p4pkJ8kU7TY4jpWXwzSVML3uopFR3FDcPGqrX5WD",
  "key6": "ar3NKxurRZ2H3TL3EhLxYrEXS1xLzYp6akcbvQvjrEjTZh3zgiKdFMZSvgQTCFDSS7AJMFqEJeyAkt6YkDMJXrn",
  "key7": "4AzABHQY9EFh3dpfXsC9UWJixFZwb6pMU4diCgA3QJvWAGTgrVcg53HQKCDacFXdqq3ZhQRXmY2ELotoJcyYh9y9",
  "key8": "5Xx7iFogobT9L6vCLosjx8UUbDeqGMLBFYfS8n17eW51k7Xb956QgafLgsLnRDpmTsgDoS4Q8CDeg1qjuMQFb1Lb",
  "key9": "2VN6pUmXoHQAJBRcikG9iHt4ZW7ubomDnE57ZthbAZV48iaDf7DF9nqBfdKHx5Ym9sMkvCsSyAinCmgo5m8MS8Uu",
  "key10": "4G9EvjY2A6aUKC3twa4Hhjztgpb5SzHxCftVMVTQhT6JGQ4ByXESxjb4BQ3354JNoKcFmEzYMW9affTvLcVCPBds",
  "key11": "3zBpUVL9F87iCkFnsaXYE98fXCWJzYwGrYjmaAhN41yM4xxxRif9Jp2J7sMKouBpWCsW7QMhDQpZUgokq2GfYrLH",
  "key12": "2odVqTG7iwL99QSH2ivZSL7FuHohXEMjmLCBhcECNTkoeAhSa5L87nLLKxTcdBiSZKGgewdbQ68sVZs2tUjFmjSE",
  "key13": "2sJdgLsBz7XieXuw33eXaqbihRrWiw2o7Y2VRqqgMqj9vzFXW43wk87NfHiCodScfjUpVx8qDedCyFAqknqoPyxh",
  "key14": "2YjWN5qT5d49UaxUvfh95GxJqHDprS53fQWbqwAhhvrVSAVzNiWh9bMnT4XC3aGs5uLLKqLLEeTGqG7ehE9A8qFQ",
  "key15": "2xF4EP3Ebc182Pb7nrbfdvXdgjsS6LZVUuhS3HxAyhqeeFBftw737uDUuMoXbeeBQ89hqawhvuRCjXJSY33XVu81",
  "key16": "3cNCYaPfsbfuUB8ssvk6uvPvdBhdfEmkqc5Pyai4htzp74MnV3N7JerWeybUnGRNJWstmxWF8GiSbDqhypKcmagp",
  "key17": "43FqWReaJUKD4zhBH9kVtTogmJanNZQRwJSwxCiebfsD7npQxir2D8JChU8928FzQCALqrh48AwWj5gCfw8dMD8j",
  "key18": "3XQ71REdCMDoGpJmTqk6TkPfeNVmG6YuMk7kfrkY4aXMApK2EqwHDxKQzbRkrLigirYRiiWwnhVMTCCWvgHQKWaa",
  "key19": "4uWkypxkVjvfKjgJDUTzj4kRLj8uQ28qBDE56iXscrLp423rjSixUzif7HWqupsM1653GwkvCQFciwXCjXrKbJpV",
  "key20": "hRhbNp56RFZEnJRZSrZ9q4wv8MhD6BnajJuCsgwUjyTWUwetN7MpjudRqSXPYjSP8wckTbiPFxzhXFrf4YXYKJX",
  "key21": "2r7YYwCQURGTMf9eGL5N1k55MxhRLfuoGwZeuE7mT2VX19fBKbcTgTSBYrKYHTPfSGy9i9dwSBhyBdUK6GjQyVYo",
  "key22": "3dznPfB8jkN8nZ9X7ddcobapTHEbUyayDP2Wnv1tNqUfW2yVmijmpQ7WbTbqUN6Dc35BhsKc5R8Q1RziixALs4dA",
  "key23": "skxirx5Qr5VJZ56s5gtQcKxiNsZhvjibJgdWvrHT9epoLPueH5TPoBbXfANpFucHQhkWZsWVHbiAurmEzhFeiKM",
  "key24": "RBi52BFZenSQkUnrAjiBxdv4eQhFcLpujAbj7QiLj9jZMjCqAfXQyYNSLWWL1k3AgNfvePE7NfURVzNeJBauKSD",
  "key25": "2TzReHuja5HL2xVhjwrHnswgkAxrbPmoEdmntbAyP2guHHJFiRvq9E4bCLoX5wpmJepKKparpZA1NutMNpjrfT1W",
  "key26": "5HoxmcgXE4j2wwuurK62xNR9oKpyCiA7pFMWUCyWakJFjJtAGDmi6cSGGJrhPCsPooV7aRvc2nDLTCZCiQ5Xfyec",
  "key27": "5SQPDQSdSxHYMa63ijdR3U4QJmLgV3R8xAYjAzm72HV8YtbgFZVNyRCJzGPnB5PW2RFEjEXRw6VLkYBAMrULzzp1",
  "key28": "4yahCmd8X423LY9k7cEMZh91Hkce53eLp9CK4aba2gTVHrS2JSoiQU5Em4BJ5ZjUCE3BBgm3YuAXhGMKuG5aspXo",
  "key29": "32fusgMUxwfQCCe6TCJPbLXCT2ZVyDWrrr1M2b4AAaX31WrQyPHCZYJgXY5jUnRj8i5oVGvhSma5MGzE2waj1YZ7",
  "key30": "Fh4hCcRBBuLZYwN3bivg7Dx3mMcdAGu3ZcQ3Co6C44LeXjs57LSHcZkDgXcVH2bvV8FVu3gc4qNErFdoVnZLdoJ",
  "key31": "j2nCoBkVe1czt4qhZgNfettjGvo4geAfZEdvr6KjuqsX37ikD4Xajr7gfPqE2ECznmpAV3r7btczAbgCz4aYe9Y",
  "key32": "2aLQKSEWz532Fjmkp67dQewLFkHMu6Tg3YNrTpp2opqqzKGd1XExLjnnjKWpoY6aNNGUokZAyFxLKTyoruKhDCGH",
  "key33": "5gaeXzSYYgh8gtnzMNJxYRak9DzKK8gcWbAB6mzNYMj21axnSDtr7Aez1MLTucgxUK52Au4hjcrsM8PN9SuEMr88",
  "key34": "QRVtCWZKKPqjqGwVXwnAef5e2rsgKZyVWwBZsfsLsVR9XStZRVNWNzMxbDsTLJqY2Gis3EnjWPysjpyLFXCQdun",
  "key35": "5X1BCRKTQxP9XovHjSR8oBg21mJy821e5uVmeVz8LyzeQUtEwhCv7g8bakuodPe3XykygGZiPYDyJ6SzuCb6F4BR",
  "key36": "4G9JdtLsrjZrBQ3d9tSkMFSoCgJ7WocyziK2sChZ7yXuZRatZ8Csk1L1QAvecG2cXRTnBPaFTjvziHaCQ1xuVqhv",
  "key37": "3FtvtM1bKXFtpLKsjMVbAxGqGrNtqnKDecZUmmyXEwixec7nvvdotmME6KW9XpSaC1EQfJPHdHZb5tm57cGpfp8L",
  "key38": "3q8i4aD6fKine3dh59ChoDs6cjw87uwMDFJpftxRBeVAqb9GSUWGX7HE9KJb51sP9AaiSxdNHQGLtZiB4KP7FZJX",
  "key39": "5JoySC1gXHZZJA1KXBYgMQ4sAByee9hHS6tFn2qYdm4VCmgv2yHSa9Ad2zrdy3GNEdgyfUyG799Rb7Ab2ifjo5BX",
  "key40": "2V63UMqgd5keVq6M9CZmk7eXBcWLY5JWRJ7vjG28QgRVrKRQaKEtf4cWAyqFRtfAioK6Qm9wmQNK89gvf44piHgA",
  "key41": "8RqwNfbGQMvb9S1Pgvyx8rp8AJFyqqzK2fnkLXu9UQPG2iw1EcKnUirZAVUMU6vyNZpLT8ESYSnzRvNVRGKhjyj",
  "key42": "2qjycAu6cF9C3kDqzG1BepKmJJtHMwoENYxe9YyM2S5kofgGaCGi11N7zcW5aXW7T9DDBkuGnTagNG8k6QaCAREt",
  "key43": "5DU7DTbswyPVujGPp7q9MrXvtJo3xPxERHgXQRH9Nk8eX6utzQiyU6RFbkFcuYGkrhTthXqxvy2fvvYsitJNiGR8",
  "key44": "4rvTftJrhabN5g4cG7hmMosGVCKqS4WPnqqbky7o7C8nBcTnhWVL8mCjsBt2uinGjS8pNW4QbWFuX5Rr4oa9aeDt",
  "key45": "tEBtzGcLEuhoTtrk12JUZvwumkkQz8N4UkXUfEcD9eTrL51Ywfy5yUL285A7WcuQsU1LCuevGqu7krE5hVEL1xx",
  "key46": "3euZovmM3hPUBBzArt9QKtCU3yd9HezDbstMu9EJp73hgov4sKyPGEmfz34Hp1H26Skh6KtjGg3V6Xx92u2PGX2v"
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
