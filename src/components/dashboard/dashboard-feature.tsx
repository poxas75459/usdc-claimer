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
    "5Nqvv9BqqXWxX1ZKmbpx5ZWLJqzh1VJAZbavfjXj6MWAnBqNYGWruL9zmE5FqLrB3pcNGNjt5EY8ayb5VW7tVgVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pzzvcVxg2kbUzrZMA9wy9hJgjLkAcvuKk6RqdbetviW1LiG2wX6fGmVWL7VAhn2foS3Mtn8XbuQAvdsDQVR4ou7",
  "key1": "61JWNWjEr8raZBazoEJFzM1fkfq2qTAx1XZkKrY9Ak26nrcW2d9DXuRnJSmdqhKHFJXDZcX72DY9e7cHERUphmZi",
  "key2": "USjgVXKuFpTW1T1heZ1pwVCSCGYywav6DM6rtoSN9FUVc2SWpHmPhUqPbxq7RhHA9tLowiWLdUWcFx2XCJ6iMtb",
  "key3": "21gwGbbxAGJdtHg6ympEyYjn8YdsVjF1uAR3JVDzv3EMv9LmnUspn5E9uxLx4ZzdwC4bYKzVnt2Ax2oYhGA77Qzc",
  "key4": "3AoScX3oqqfiFvGwnXUKSubjsSVfk6ahMgcCsxRKf6w1aizbU1kTspybfwenwDn61XT9fS2dfE9bJ2zJKY5j57ao",
  "key5": "4h4KG9AWGYHGoUVdUogt98uECvMjncovC98Uxn3BpvTpRVT3Au2UPZPWkKRsNdHzNKLMovwAQ2RDBzmaU7JGBL7k",
  "key6": "2rdWjgGWGksTnxkFXpcGiUQVjrPEABAbhygvLDURAqhqgLkcqSEcgGYp24cDsnMpeXiDcv8UCx8mynYRfAihBdNe",
  "key7": "2uLQFJ3rirD5kryWHWfn8nEgM7hxi7Yr5mpfAB7xWUBDPmZk8wq2aT4q2M6zEREuLWjjRnTeFVRCB6baPhucjgMD",
  "key8": "4xd3ytk1cZ4pdqJ1gfg3A254TRuzsmgr9mtamDkEqvhJVsPyeh5dYcSMh51EJx8cw8CfXbWe36vo9c8iGdEiyzVU",
  "key9": "2BKGYtfeiLKFxDMTSS1rXGLsLuh99GXhBS7ZSvooEfJuF5VNcjKP43CNStwKBapCVweNWb4YKpzyxHQX2FDhk9XD",
  "key10": "2b137Db7B11htcgyp9mtS9bLCNtpEGHhqf9b19kFAmuAu3r9aQDUMRDb5T9DDXa9hAjvjdUpij65HJwyXXv7wyJ6",
  "key11": "2jRPiAGWg8nwWbcyUeC2ugDRgEsA6K5CrU3LcZDKmRfUU94cTwuP7MA8J7vusqg23fG78DUhBDCeaTWZWKvhqoUS",
  "key12": "8SjsnGj3Awb56mZtDXHGoAkVE36tJPjTU4ezf7dpYg6JNgL4nCe5uCqVo3rM5yweeanqmKturf8x7WpCBB3w4kU",
  "key13": "8aEgwXW2RwipVE8hE6NtFkCXkzBaB1cYvFGGgZcQi4hwu2veyjt4mc9gpqEtJSmgXhyjUHUgHihWN7aXVmCgPPR",
  "key14": "2Jz6842nvBeDrLU6QGw8UWYWKMfz9RXPDGvb1TiaWkXtbzjLNwYWBu7DNnwDUzVDWsJYfGDaDJdqkfL4vThVdMhj",
  "key15": "4yZDGN9LqZZGfMeDcXaVdLBM26TpyM36kMwEvf6ACSXR4oNNhiJDrFmgU393Ao9NhuCyQiVAemSw9fAXct4xRuLh",
  "key16": "2uKpixSvzVSVbL9RS5GcFidW23UtSLZPFCgGsiN6R5V8xKBqhXq7kZcrC7QfqdJZnjMgs6xCACNx5ZEbZ2kwC2tg",
  "key17": "5UNutV7docheLyngyE9PMJy6xfq5xpSRwJsDKY2uAhkA3d5rY445Rt3mq8ivaXeqgRWo8xduN63HcrAoi2NDLMpk",
  "key18": "4Uf1L2ukQLUmwDiX1geJz6g1oeKJVftMsYXcjW6DUsiQPM6BLZ2gbLmFcvDqcfnSfnm94uCMP1BquxoUM81B9QaH",
  "key19": "2Lkj4tM9smQu5AVLE7ko7t3kGZq3ySFKwLYZsQpTcdJPoqbXepi69hMXhafJCA4Ehnnf3vyMDrd6nbh14h6dAXQS",
  "key20": "4amC7kSnRVhrM8q6FU5N31f1tXVG9b53MDjxiryN2oVJQPAvuzV45baRpXUD6seMEC1ELWnvZZoFckn7hHVM6f4j",
  "key21": "38FdMEzJQ7kVGMsoicazzxTN9EspW8tuN9arqAjMwChH5NNWJPKzKeAXJKDAAVhUQCKDsvp6tgzraXtNcG6ThyPG",
  "key22": "5kcEsY17X4iS81ncrd3CefCCQpHJpeWruvYRmmzDX5LxCUN9rHS3DyvAZLjYRxVYyqVrE7GhpwZe1h6CQ1H7Th81",
  "key23": "fW6wzg9PfkfbxkcG2CXBGA8MM1EbeXHfL43pdTvQkpHK2SYJm9bebmr4p5Gvo9mLU5CTtUp23XpVG8jQ7DcmSNB",
  "key24": "39i3uiSYuN9ZfSex16NuVAtssQMJzy2Zi2zMpKpfXFskyaZvj5h45NBNmYDdVre9AjawqJ67Mk59HvwfeooxNw3C",
  "key25": "2DycxW9eZqK6eYMYisGye2U3kENnQhUHoQVZ53gsfxyBEgk3uPkrkaqKhNFMo9YF79ahV1VJQNnsVHkr87Kk3cPD",
  "key26": "3bQJJ52KEYB4eFbYAGfm53ZjEJzXyEPvBVpCuap3a3PXpyXTTMa8Do6VnmNv1pWxoJz42ttcSo7tc9r1KnzvYyxX",
  "key27": "4jejBYAxR59Muq13NWGmEEdTFUuUXCvTVqTG2TQAEGx3KJAxgcy1JLCmwGFDGKz1svHHkoQrSxNdgmVqHmtz3meA",
  "key28": "4cFcf8PxZFv1PQ3y9vm1NPrKePDBV6hbzvbHBo3nQwp2nma9PraMq88FJN7UgEnS9qseNTzM5o619Er7dawdKePe",
  "key29": "3YhwPRo2v7vfpqaRkedvo8wfUYCycUf8FbHb8HtLRhNoPZiaJYpJP4fVwLoGmVhpVQEDTKwZdmrG8G3GAEZNJBV3",
  "key30": "2wukqSRMCgTjHXtoHCA6FXrGxMVuBw4zGKKAu7WzDUxHZLF3p8msdMb3qTHmgGJ4YhMnAtNDFeBZmFPz7iSreGBb",
  "key31": "JB45hF9VA41XjLFkn5KfQz3ftUDFtH1PKbjF1vbnnzgtc44DGFwFJbxcmUMErpERkbedhELN2aY2RGWPaRxriTV",
  "key32": "2sFAcPMRAHkQHhVWfdzhDZwZSXGLhd2Pyr8mPmUzqCwp79C8j9L3RjFrEVycWoX2FvunHEGfES3BeCESN9PwpyjM",
  "key33": "2uMx23mrW5qGfMw8cNa4LjmdzphjTguZDEXbVFGkT6YS6S7foLW7ZNeQ6z6t3tXWdB9CFitzm6VeE3EbFuHW3FBd",
  "key34": "4WWvuWtx7Tw97b3dnC9KpXMT7HxNavk2msiqpoEajJk19Bo532V8LaKAxXhQNzYLnLDVtB2zg1LG6vt37z3gkJxD",
  "key35": "4dywC9zTkSoE2nqdiB4te4nvNVz7A5G91zFXQVy3c7raqpbNk3CwbyVLVjxmYrU5PpqEs1ptzJwdGH6rCPptXtwT",
  "key36": "Zsm5KUGwn9YV7NNu14xZE29kH2L1a2CDWenXsc8SbZYr6D3fyXShycywGrjfZ7UdC47C7joKrskJQ5dmfxxph69",
  "key37": "27S6nDMDrMmUn4SQbY8E8T4jbjSQ6j8fRo7Me3xLu3NV7q4fHe3X3Cpd76wadL6f4upWrQWn5BaDQ7767KnPXMUm",
  "key38": "64VoJuogEzRrTxhbs8vUKeuCHrB6QdX1kurTAsvxVPcmbP2YtkM52WjnBTUTYehdumTV15B2uuejWBmGbpuvxLnr",
  "key39": "3vkf8Xo3XdRtsaahKyY69cTF7CPsu8SZ8Zu78QMzM5AEnrKdAhZ8c8kim6vsyh2t9uTZv7pKEpa144w5jjxpifaT",
  "key40": "5H9KRPpQ5386iCeGxt7j4iwrQuGX11zgYqKGEmHPhbiocijuCpUejuQ59WDg74YkswnJa9CwsshGVdWNFf2PGnEt",
  "key41": "5nNfYDmvjrN8ztax8NySPYxJ3cfRFeduTU5TP6fAdQEaXnq2GnjwpM9QqYjYj2y6qng5X4rKwdDaBAgf4eL584fV",
  "key42": "4HsgoiZK4zDKCaWxrAzpNH6Z9x2x1G9uVdR8CQkKKgCM8idtNZPbfuuZbxv4ncCCCkVCVscrtahFqZFQNbonKPpU",
  "key43": "3g4DZ6sGU45gRvNobX5Qt8zQDex8uRb3M4DzWQ4J3cU1KNZQf7hdzuUmtpRKKxZtk438Uu28fUCayUnuZveoDT2p",
  "key44": "kjshgJjA2bvo7GrG5Ems8CpKSGwDatm8oJkpzGek9UcsvVscRPzNHEBQLGzoGzuNb7UMmKSkPchCitwmu6VNLxY",
  "key45": "3yPVnv1DCBvFtSNCmV7u5uFYxywMPY23jQPd9CWM4jq4ZGye7XEwAjpxyh23sNz571BLBc6fBWnPfWqw8c4BWRxv"
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
