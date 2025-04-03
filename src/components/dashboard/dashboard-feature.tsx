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
    "5iqgrkgdCw43AububpcYmWZzN7NtdbeqBCs79FtnnN4oajePhLDkBRP1xQMELr9xAsUEvzfLAbzq311DEwLaAgey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ogYr4PpTh73WW6QswjVDtqFeEtiUMrqBF1j7havX59GAF8DN2ipoK5R7uTSnkziqNYd8a9YM64vEbCLfWCPVWXm",
  "key1": "3AMkEna3od4qh4EdyiyGzNsMZc1q33oW1dMdqFnyfncENDAMw6bAGoppRSHT8p9wMHtHEptkndP4ivv8Zsc4AMsh",
  "key2": "2jsUyC7G6kar8HkWd5NQLyjJMVfiFcg2CJKte83QTxNwa7QFZWvWNTKxjYUVv19xBS9cU5y4RPGL3yFMGBbQDXfP",
  "key3": "5HZk5HpZjeNopw65NiU5JQUvLTLULwQqN6cKq8SP461nqGUakATXfsvGHLkqg1bDQXxiDE3cbr7VKUKDHM3nfjky",
  "key4": "yrCY52P7jqokefJMzSW5mq7xrVsrVWAEdPBJqrohJ5wHXKshB5xCvBX3ezkZ7kFgjs9exmGabSupGDimmrBP6Tn",
  "key5": "bGo6Uf35GUVYhHY7uKPmmaHRgB3EksioK8YAkM9YHva4Cvt3wwD6Mq1fErkwek4kP2rRbmT7geZJtbwi7RAz4T4",
  "key6": "5qZQV3qQLWpxsqRCyRTknmrPT6uxdgW1QrFobR8tfYgerXZHeyETCvwyX6cUFg3uj6NgXFRthcRCFNSbDxrMtzox",
  "key7": "4HxXEojyyxoQ1jrD1ribGkjkopvy5ATaiR1PWRtNZHUUBChw6PACMGNGhxVQxif4578jDYd5y9mPjnswoTfUF5iE",
  "key8": "5yU5DJKYYg1xMHByAdP8tDyiVHd4aXrT9JB1jwgiSAyF1SPt2BJiyAFKofFN5FJGeLNjnp6pt6qUKvkfUjbMd7Y8",
  "key9": "4tN9dswAyLoGauwDXZaEXBMDxsVfUEJ1FMMx2S2vAQiXVeqecA2gMhwrxs8usd7fBVVrvH9eVVQQFnhzX41cMGaU",
  "key10": "2uR2pz11CQ1WMGHqqhmCGBG51qkZ3MRK41smcuonHt8gVvnFJgak1YL9B8qtLuVwwd5MunX2deymAYcurrQ8bub5",
  "key11": "FsT2bsyZKmCS8Yx3LTFNmnp8BVWNDKjQ8CRxvu4KjHxsS9VrdQbAT6d3JFRtxPSPiuqqfbUtiANjiZNxXdq3wpP",
  "key12": "3RDzUY5RPZozq2u4HrFRVQF8UvSp17qZFMjJ7R5APZox37WaQ5wf7n1B4nnatchtnNLLKVGQyNMfxssyPRoDSLAH",
  "key13": "3t6qCq2pmmqUP5Y1cJjsDDAncvCV4zcVhNeZSUi5XHMK4k4QEtVcWFrrXTAs27PMdbrKJe9wqCs6jronx7F7p5im",
  "key14": "yJUUCneEENWtcrEukrJ6dNCw7ZSuzDtd45fvNceT3TEhrfXqpWRAzmExRkvNi35uc7LmVUm5i2AGrSZ6cwGJAYJ",
  "key15": "3t9yFBWbQEruz71FQ6tUtr3YY3Gk6hDxSggxqK3ZVzfezgQTopJxkYqWh7rPguLBAoz8ZhViQh2jDYzPoXLvwACT",
  "key16": "5ANCaKnd3DRhuhxVw9GE9kHuhnxk9siFihXWXASzJTE4Gtp5bjcbHeSbPMyadeDm6GwR4ESnMSJc9KZSuZuj83Yc",
  "key17": "25uEcTXVkSGRAt9W6jmkewE2BxiRXBg87q6mEmRHmS53GvvnWKj1QDkUYiyGaRDn75M23VpKJvPyu4khvAvrLLrh",
  "key18": "3cHzCVabFWvf2KfiWyKFx6tuMZhXrDaQGXRNjNEcmmX5B1xqU99ogkxZX2yABfvGic3mRcChUi7uDGv5pbSQNruo",
  "key19": "Xa2izN7GuKgeEJShR94Mb14ecCPZaWBYTEUBMjihuTVyuztjNBMs8MS2UXPnySHrqKt3D9nYVQy7T1VvDapof4k",
  "key20": "24gNNvDd7RHSZAJFvpy1GrYbb6bG7G8fYMxqhKDUXpxFvuEUjoF9VyVxoP5cKSh2cGDPxjyJrKdvH8rjSmNWt5TX",
  "key21": "3uRKbDm8RMUjMKWBPPAHn6bKyaHWcAUfWFHMhfUoGvLgBBvSmreFhbNuahrFhNgfgFEHvD4f2pTkP2bvKaS79atL",
  "key22": "D6NV3heQ6cDiiuctVnmLgMKcxHARGeAQPsEWUwF7wv1CxxPirRxuiAoaavdrYmpQ6QDjm5ndmk7okGWbgoj1knv",
  "key23": "5AqqyuW64PWEnKiH6sUz98k1jTHTkdMr6b35LovMzy8iND1sKuQKsTBx3qnGKHBxAYeNdubAbfDzmGwsqahQsjaQ",
  "key24": "55yUcCx3h1ujwuGCZ4NmNKc8Ci6aygUWqmg3wBt5KcWm1268bnLZvngUWo7WgdfyDYembi9QXZ8mTmS8A1cdejGB",
  "key25": "a7pbzWaWuus3MFU4Mvhhei2V2unMViTRTAjfujHtuajN8m9Cy9TszRc83jk3V2y77cAYPzYJKEWSX954b7n7xNw",
  "key26": "4yyJj1NDTbqn7rTSn8cyfbjXKw9Gf94VCdr5Dc8Jtdm7HJhrR4Sz91j2MgpK7BAufrmTDNPaKF7pcm4ZTMv5k1cc",
  "key27": "q8p3iazWSd54NS3NSDm8yvQ6j4g1JREu8rA9XLVRLbJVchGpFEAaykL9sr4hLewhRhDWhorrTZGTXVb7Wsk72qi",
  "key28": "YiPGsVjaXwpUodCTKWiUusYWJ2q8BbZbB1GJ8ea3xhYa9UKEfCrtpPp3iocH2dDVbHw4qA2H8Z7ZHsfxoK2Dqsz",
  "key29": "4YY1yja8HuUWuAZRWHU3ABQBR8DB4jbupCEEYUZLSYafkq8qfz315pPcUoXuQH6HXo8WtFgWNnQ9tfA9ReHMeood",
  "key30": "4oL3RWZLqt4cXnEMQ41KRw4W9RfoGhjzqYT62RTWEcMuWLSRcRFouv78JSdkob1MGJKtoF8sRe2nvhzzzU7UGLvq",
  "key31": "tCbTfwhpC3twViRkLYtGhBqCUSpBbMXB8jnsiUiCRebTnJgLcYgFACDKVGecA8LVhmzRi3A9TZQEGsiu8twQsof",
  "key32": "5BE1wEvAGd1C8ZSwTt75LmxTyShzxdrmbQrCCARr1cfafYi3trKoRYYoDdmRgzwvAuVt7oeZaSiUnp2Q5wpTXPML",
  "key33": "5fiQUTufZr93q4pFbWst348QPruw9DtA2vQ4K3nEMV82Xui7ag572nZ7gSCzntSWtjE9cHNGQahxZTuTc626d2go",
  "key34": "33UeDfdorwydNHupRvShpaAEiG5WNZ3H9bWHRPPn6LqHsv5cAQRVGgfhFjgQ2nwubr2nPQHfkh7vKgFGo6Hsidtd",
  "key35": "4nYH118k63VGM7R2jC7c2hcxgnXxb2wdHLbDow7iNEec35LnvcZyFGXuK9WjNcHL3XQ1gmQXoL7AnmzGaEanV8fb",
  "key36": "a9mRPiJxhGVRQmzCTbhfCiKuv1k8tDy1Amrq3n6iQHMsfyRkmxrDdDCwJwSkSZAVXiHUgLSNMRoHx6c3bz2C8ur",
  "key37": "gxGHBE9uZ6gL6URqwPNV8dWHRkNaAFvKEF7m8KbqabYNqdzgyEPsdK7W5x7nUqxU3XAFXpKCAnj8QZgcwfsMGRp",
  "key38": "441hcMBPnukke1J9XJuxHWujq43jf7NLVd99yCg8YmUAuhata5WeKL2MYfV9erUszdLPxAGLPFVUFGTVAN93dMJT",
  "key39": "2cBEFk3kgFeAFeTkQpVyFSGnuVNiDUuZvBgQZgijzmXLyT73DCWgaqm22Prxs3eFTwoiSK5GyKRqbpkRMXWWdbwV"
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
