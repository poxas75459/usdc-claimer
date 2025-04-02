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
    "4BSnHLvscE7Wc4LiLWqmBUsVcf9htHH6Eeus4RFjUpFeQdPaXVdA1fdHYyGVzJfEsmbaMWUr1GHk8368MaGZpkQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WoWHbx5RNivWuWk74dVZuekoViULgYvxL1jMwNowdy9CvyVdHDHspFH7LPNsrzNcFbyjmiXaLmnSYVjbVC1VGKy",
  "key1": "26vzdESCsjinYqG63jTTHgReNBvPJHcqXz9LUtdjftV8uZjY5qPrCEwcqMhkEnd9mGSkMWX7DN3ahqKG6szoDTQs",
  "key2": "3EUzAScubK4XRGWrfXxp6ksube7cJBcvWTHxRKataANWsEBK7yGPHeMG5TskWACekZpS7whvWtj7pP5LqXzXZv1k",
  "key3": "66mK9xhZkoCEBjMdapLgsafHbNziVhGLjYMECmsKEDHpVfveXNVn14x2hnukMxaqShYFNZbUgwnm4eN15HtZWSWY",
  "key4": "4Z65ARXbfHPV2EpQvkoDpXXsiGhQSLo42DgXRAaA1Wow4riNmubMc3rCtgBwnh9bsBfAdZjV6S1YqNdN8eJhRzJ8",
  "key5": "vD1eBRmf8jNPgUANTKT84P4Sge68nuPb76i81pTpsohVFiwToCvRu4vRT2CKjTZGD4zsk83TSe8j6qsAKwFiQjz",
  "key6": "2WNou6efS44ChsEo1XoJh2nDaCU8R6wAucRA72StdB1JMEkLQHXcKztk6H4DzQR6Q4N6wE7sN1YcUGxGzab7SFSM",
  "key7": "524fVBwSThg5Yj2g1HwizbxbP7W4AwH48uh1zRaJNw8hhzgPgPjZVpFJgfDByqCafAWwux2Q7XmKkR21rSEN7U9B",
  "key8": "5oHzDRwua9poVEgpyQDd1cPs8gEumVXyXZhBQ1yKx2CUof5wnHsKrV9C6j8wirPpAySz3KWne9sgRzhMbRunQHKh",
  "key9": "2uiDvFNXGsVfrFnMwL2YAm2Y5UMrtT2qP2bjeZkwpHQMPLPzRGFZ7adZvjGjmSfjyHwpcZjA98d4Srx2kPJWah2N",
  "key10": "5j5xUBbao4C8p8ActFwvVEh77wZg24SWSTnaChFLDRzHojFhdvHJUQ5vkTL2UyVXhGHoBKTXmvfBcZ2VNvfo5WbK",
  "key11": "3Z2cbS3qqoYkUN9jWonT5qD93gsz1AiPBYfjkceL7HWych6aW94WZuny8PZBJ2oZipdM7PSg7Thdd4Tv1rTcpbk5",
  "key12": "65YKXQMXZQ8A75nPH3Uf4Ktb4Bv8JQp2h7fu2dRXUgGaY7ZqB698ZbpFxDoMBHdU7sPgezCNqw8JnSyDoQZ3N7Sx",
  "key13": "3DQy9Xoi2uy2pkSMrMwUAJeeTBusphu3dcCvUYShTjm5x28YXmNa9i4jJYKvrJeFNkxhfQGwhXgUj1hkyPUDy1Ge",
  "key14": "2zZutCArdBvCZPWYSqzS13WKSH15UmvP8iB8oBzXUZLr5kqfLAXBYWNUHTif4EfwLFsjH7rs6xyCwCgx5kc2BKCQ",
  "key15": "2LukwKefMPyQQpKw2Hp4V7gacxcKXBZM38jHZRu62GtcXg9LmZFkhvrugftTAsKaVg21aHsuknPfmbWStiKq7cbT",
  "key16": "3xxiQPTyDuQkwyqwkHHSCrvdr4AFf6kwoXkmE8pD1d8c27M5Rh8b4zXsZ8nf4e3UEBMxREX4sWX5E54e1rdXA18h",
  "key17": "5qhrxHqX6gcTRe2jfD8q1UfQaymWWmfCsnHtx4R3X1oGww3TuQrjsTSa2NFao3zeaUpc59Xf1e3D5iD8hHEu7w6T",
  "key18": "3NCQ1XLNeqJhtFpmfMLHnUdrgunCre4ZBFtMGs4DLb5dSZosJHBQF69cbQgXWnLBwnhTp7pFR1CUvaEJJ5UAqFBr",
  "key19": "53zsVjfDXG9K16zGig76TBvfEeBK9gKt2dcSnkYL1WPnoBsMfUpnRr3axWirWJFvqz8kB7UnjfTeo37WmCB5epSV",
  "key20": "4tLVrRNyuEzgu1aZEiW24GoVipta9DpTJ84weR6qcBC844yiabck38hCXDat61U6LxtHK5vbGgkmuDoQGd3VqvNV",
  "key21": "27kQw8BgWi8cnmppYshsHZHnRGXc2CTur7Z1ZBsF6YXpwNjKWySVJxSz5Ssxk6bLkYgvyTkPfq15jB6isDNUASEA",
  "key22": "5dxdASMio4dji93JrqZYTdL87UYxnzkSDHqsXegidcNFv29o9hKertSmtXqxVguGAmh9gJq3gz3q2KjXKUd4TVRm",
  "key23": "65PztAdxUbJyxdBH3bMi9oiDCY82poWYQ2VWMvH9DSVrb2GGa4nsjEfwvKJkD5d4ojpUZ9MxxW2cjedwd9y7C37w",
  "key24": "5K2E2pQMQFbWtdnRvUKAfqpqNk7Qe1vKwoRaSEMpyoPLFwYUhxSzNo2ngwWeyCLpHb7ojfenh1RZi6vShWnpbfQA",
  "key25": "4bVTDm5MaRyYVyMWBKxYJxa4L8H6MSQGknwi63cN49aMApLmkbZvx4SrWei59r4FBbb9uLwfM3PsPdzSiuxGcWPS",
  "key26": "3zDAEJRugnD8bdBRLNEbwJ2SfDm9arTxPhdi4V91zTKezCSqCuD5jUjCAwPHSDK3V7P1kTccS3ptCsz4YVmbY5D5",
  "key27": "XcQuXcRB8ne7oy9jAk2kjULNbunXdntYeknprMG2QC7oH9Lm4BuzLj2QewH7UGpywRxjaRAhxxENBUrNg8BArfU",
  "key28": "4j3Xq13UudJ3UkseGSagYozfWiVYMDKUdaPzK2ksVZFuTzoJyn2JYPrvqvwDExTkgfNhMgifT44s7WBqKWpVLRmb",
  "key29": "Ph8CaqXRoNrzTf16aRjg5CBaAnnrzyxjgS3bbMzgUFCBi3bT6DpKHjssvBcPebDXh76Qgj8gCi42hg9YYKcjY9r",
  "key30": "5tFB7gyBHfFsw1gtkU3f613saYRgPyYCzPdQSbbMfqpii8FcTK7TnsK8MAyfW62eEsvic7NaJBH4kaFSLbw8cATi",
  "key31": "TrAjuGZarWdDAqyp8fMgScg4zSrKVzwMGEdwzdLFt6domJbikWC6yEBZYUvcA6FhDPPGrS5gKyZRK4rdTgBvheE",
  "key32": "3DkfiVR28jeLSuB3wQn9aWbnGLEDgNS4MNCZ5WcDbVsg9F2fTH7T3yt1swtmXYrZ4nhJJLi8nGZHD6vghz2LEXB8",
  "key33": "2Espxnzf2BJfFpLVn6KCdwiqUsp5dCLvFzFoqiDEWbaEovqnWEyHd57WtsghkhPmntGKNHt41VE4nru1sjrPJDGV",
  "key34": "53aSY7ryBi7XvndkQzRPMkPxJtxMS1vyohnEYSs7bpQiaUA1vhT1m1opiqw2GKsa7jQtmYbzYQMvyUyUHd3B5uQ2",
  "key35": "4h8Poath5g9wu7smnugKc9HC98QwwkSE9Bf3KMiQvWf4LxaBc3wRuGec146zjDqyX4oSawTrj2cceKHEMvVK81Ri",
  "key36": "5k4z1Jb4byMoyq1yPj5i8jPgdnhFQzpsk7gFasazmvZ8vM5TTLvyD3bVu44DFfUJ64X2LHtnCkzvjuU6TUDZCNhc",
  "key37": "5yJjiPiBzEs4joiiq6XuaRcigFViBQorHdwvxi7ehkV6ozLihqVgrgw2RfQDj5yCH6DkdK69tzYZTuqxQgsX5qMX"
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
