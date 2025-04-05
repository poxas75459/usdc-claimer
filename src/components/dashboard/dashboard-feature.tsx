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
    "2jMa3tveNoSM1ZCLivESjmoUhANNrCJ5yd4zXzTN3xXCaZmAmYTqLGKKANVDmEZ84gZJ5f5ydFyMCqx87e1K1vbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vqpJmgFCLehyN2fULJvkYjkJFs42dnaB5TUGzoXTZpWTRhdfnafuGMVi1o3pDASbGNjQi8FhS5hxFApqHfpQpf8",
  "key1": "4bXw9YGWU3CS4dEVAjttumjT47pZoK4c3iSb1cGGSEJtHXYThNTBb1gtRs3edXssfPDkkWzgFnfPhd7iSbkxBYqh",
  "key2": "4LCgH7dWTcjbzMbJAes2tuNZJPE8yzBzfo1wdAA7BZtJhNDhLs5yCCna8Fi6vpRs1oLGKAgS4WsJsD1wBT7TANmm",
  "key3": "2vgTvQWsHj2CocDq9jP586Yk7Qx99HZzhkB2sc23tUbW8Em3UVfzUa6bcJ3L1ej9v5LnE898zGxJcWb6KQu1treh",
  "key4": "3h8BXzzHRQXwJLPRT93WuHnJ2FAjsywa6Khk8eXLHvLWNbJbpkf7pxACq2jBR3ooyHy3J5KXjbax9t2Ynec5nEGT",
  "key5": "GXsaBMR9MeyA6SZiGUfCN6QygEg2zBMSRsvV4qpGDbZ3fPbTVTob9bBkq73v8g5ZTn4uFdwnidR5kNzTREUUDuw",
  "key6": "67RfFNGqsSpkwyvZBf2PwHdPjG6uisss2o97L1mHGwNfMeqkgM7riVvaqW16V7aMc79iRBrEwBzMEG4dYuVdQqsw",
  "key7": "4jFFDZjNuAyePRGt6wFkQNaLqToGqhofu1yMPpoYyZqjUPwydmXwUfHmeNUd1UqcYodUMQogKmk4LYdFFfby86aQ",
  "key8": "4kwrygf9UJaJMwMoEukrE4gtXs7gpB5XdSWYeJrGZoaePTM7sNSSXSqcBh2zfDsbLtAy5NdJDyVskSdwkLqxeSsq",
  "key9": "5CAqYD1PL9QTrVRjFWyA2HNtgyaYDF31f7XZSLjHSuuv2H7t1ZxifDhNQqopVQvuoDfDbHnirBcqexpdVWz89Pj2",
  "key10": "5Yxpnyc1Dc7wkwLPKgAkL4izS8tkaLi9mqonoD5Cqh7boSncu4i5sjtgnAV2wnN3wGTVziBTzJdnUgupPU2XrMUY",
  "key11": "FipiVFCTSGiU4Pqa7rnhTJu7hvh44RbrQULSgWBoNnMmg61j2xsRbNitkqiwck1dMqEt3Aqfsu8dvE8rpi7XkCn",
  "key12": "5vDSostCpk9b3uxRLMnfKLYYgJf6rFp8fjJgaiKQeaMxJ9t85J6WWs5xbXKiLLPuPaL5rPvqjdWfbfVDqKKEHsLx",
  "key13": "gwME7w4NXB4yWbYtHH9nAcyNXXEddRxLqkHLsyFSAnApAtXL8aNaEYNivZdpj3LqDy2XYXM7w51hceXPNPZ8TXE",
  "key14": "guTsneU3Yd1JJh2neae3D3XLc4TLJmBh9Wi9taAEmbyEUdKjSgJNuwsFDC69N6jQyUqxhB5iNRjC7FrNesvd2WD",
  "key15": "4wPJ3JzrQzNmZjJgM8U1LUPJWf5ZMcvzyKiQ1RvSadupTvhffmTZPJ4RHtczfiRynbbNw7NKrhXCxq1BhA5j2jWi",
  "key16": "54QbceSTGJ5MNgg8kRvqkAoFY2VJuK54REeGRdaW5SoQfdEV9BfKhMF5Vau1TrtWeMKJtJBsM4CTuUNADA1biXnu",
  "key17": "2KJ9rDoUkxjksXvUWA7uXomztF9Y931sbKD5wqdEnCKwEQYuTVGfwZ7XRpdHWMSh27JGQ9XFdHyJhs15J5cstn7Q",
  "key18": "3jfQEVMjFjDFkc5fAmKV6reBvjwpDt117phVeMFADpBJyDDKztktCQnPqb8Lyh3z3zMF5Ff2QpepbTG7XnJB8SiL",
  "key19": "4YoFPmUMRJFCLuhxz9XdiVE6zX9ZzpQmdsNucuZA7tHtxhwUpxVutRKMkMqrrfnkDGnauKHMCLekEspEe2mTC64h",
  "key20": "5gQbZvhWziggUHkBWCGC9yguhDpjaFuboM3TqCtR1sDDJ1wNecVG2t5HDDDagAC86xAnoPNhw37uS3awyLSX3yVF",
  "key21": "4sbdDNkM9Cb4rhbeaVCFSf87Uj4pfXDF1pqNbSdkDCA73jMjjCH8fcu1zWTxmJvhE6GNYWg8PhX9QRBt7c5inrim",
  "key22": "5z7LxiP3QBuXvfP6MDbCS66tWNPKhEqdwqWqMdZMeZWDzLbZEi7cqAcqD4EvypctsoyPxtmWE7fqunndHgfCupP6",
  "key23": "5oG7uPota555RxDg1UgRqBrCBxyRH3BnRHgxZdHzKA6u1MMdtXLSSKvnzE2FTj4GCjUETbVRE3c1ez4pUb79QyQi",
  "key24": "5RiahJpgUpXycNWigfVCYWdDB3SHa4ccq1s917MVKUbDVEqdSud1Amb72fnfscFGicM2N5VoZYnLdQhZpwZ8ZWL1",
  "key25": "3pHC2RCdASsZH7QXuFKSeP636X5fcXDVkL34zZ2hb1P5zkhGrRxytyh1SEdcUvKyMvjiMPrJ59Dy1q218vZ2tFbX",
  "key26": "5KtQnDpx7eUU7KEyTQiPjNmhUbuzKnHFGp1f1zhykxgr6TwjTW3MDUitFsrseF4bSbabCDya81QpWrNXxQBy34wb",
  "key27": "5AqGAiahU19gnYyS1KCxSUJrPoBhP8kTwmcBrhkHDAfQKqcxTokzHMgr2CBNyLgbyE2L6Xdjeuh6QtADwHHRKhWn",
  "key28": "HC4snTXa9jiNjDkauF389mzMfeoGSEJpB8q5ruBWgYKQERxxVZvkSUT85f1S7WcS9S4ZTwoH8B55ZsNZF31qGtU",
  "key29": "67HBc72464c4GFC83goGvaRrfcpCSKGeEpwBSveRW1zQ95AFWbtH2jF5KfySmvXpzTVKTJhwwaquTYVjgMckyqJ",
  "key30": "44mScA5SYa5Pai6Ks7DGximXynVnCp6RnLSiCrumovpo1XisdG5UqaJk7U2UMpBMEQmnLY6XEdsF5MMc8bqur1iw",
  "key31": "2uJHQ5fRkQMHt8ZZpevgsqpvMAGduE2tZj5vvBaafsC3xppfUCa5SVnCgGzhBNMqbwXxGSdwCVRDD79azyQ9KYfq",
  "key32": "5Xk2XFQ2CHw6HpcLgsUTfoxZQsDRBnt8XJuqrcJ7hmuqzrvJWv7RvoYpmt4YB3mnSTwCwUeed3jBpE7XoZqrZVan",
  "key33": "wzmjRSyVbk37YzvdhZDjiLkoUoyPRuzzKu1k6p513zjkmfXsqUph5A7aEmZgWMYMDbrhq6RQSbkqoHQt9pSkwA5",
  "key34": "2c5GvpJ5CrE8Up1ShUzZuRCuLiMondpsHJXjFrYYTpJRh5Q7QnroF6QNBNPmNXiAgs1djLhcZXWDstfyPixpcX4Z",
  "key35": "27eUVSomQavceoWCf66xAuoLjS628CPC9arw17jWdZkpuTRk8ttKEsH5u6uyEUcZA3MwoM4fdMerkPTQZwYpcuvd",
  "key36": "51DqhoeqY8dUzez6VQ5nTxkWjeMEPNs4RpNNC3wwKizBAbRb71fzFmKSBtBw5LBabFRwke9b11F9tbGJQyzwDrxj",
  "key37": "3h7StviPKBcigLFJKtdyQb1zU7GEpnF8GMN9EFUrifGPipY4evNHRATZjBjZ2w8TxH8MC25n8yZz7p2o15qbDkEW"
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
