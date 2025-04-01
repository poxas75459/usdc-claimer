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
    "2D8LywmwbaRefSZpTi4GDoWjJsxQoX4XPBLVZhsc4sFGa6soHey7bym6FdJw3SeFWJH69QHWavAoyCS9XQrZ7Np6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mFS1nrZrq2qoGCsYYzXbLvX2tFa7JngEvMzWeZs6r46PbezMGSwbs7kzb7UE9jyASaUPiuAsbNnvKAc3axFtZXL",
  "key1": "59iMNXJEGRZrj1GvjY4sUrt5mykukHsJdZdWCXmNRs3MbjXsHg95WpiU8tJkVKgcfoGzBTWD8zKfbsagLSt7BxG",
  "key2": "2UnV86nB8CiahTV7NUQ1qLmNET6qVqqdqveBkM3PEiFskj8MACsNwoF6F8GuaMuG6zZNNfTPA9hPg72tsWvQEXok",
  "key3": "4cTW7xqfsTwLqfYkbBokviYPvpFzZpteebPGNbTqMN12mzuyh9brQiJ2h8T8uKpUFXqafMZi2iwSSMXHZMWhci3A",
  "key4": "585dM3E4cFq5pHQbwKog85NJp6BqRhrKahMHzHHkaWjgoWWent7ZWLNm6KZDwpWtzYZsZaQKMqvKDFP27GcocW1E",
  "key5": "2meiCXRLiTxaxhVGosowa5tsVZRPcdGn7A3Jz3LumZ95TbDYcf8QD9qn8R4RjXMrpzCVBZ17aqeJXxsRMQB2Tjg7",
  "key6": "2TLfraUAbn9qw4XZ9pNAERpKjWUXrZQiTQCZ4uv3VVVNRPVgYwSf561TrZJXA8e2wvaPUxX3JpgJxgJsDdbCFyKY",
  "key7": "5u6f6HWLMjAyLCtV6uhGz5JmzfHgk4itwtzpti8QExaMzgdnRUt7NWtR276ytig3WqUyW2V6dpCad9tkLx2KwZ4q",
  "key8": "4qZi7t5b2eeGErmoMaJesHFE1MianUpv3Z6R9dQgeXVDh97BLJuT4BKBEK9DzJnHZBChcwvBnaJ4rTGx5Z2Xztuk",
  "key9": "2FyF8EySzKAka97KPxqU2EK1SZYgjBfEKrkqJfYtam7c6kJBXL9wThqtSERvVzDfoCtnatvDXM9VwMYgNBNuv2SC",
  "key10": "5Eu4WhPMeZmWieipRTHAD6nuspM3BSn5tKGBqaGskg46fmW8NLfSDV4idxTSbXz7joS7GswH7eGFEaNBAEYqHMZy",
  "key11": "5oraQbbNdfxjN42sna8K39JCAR19iieSUvx1AikTGCF9PxqA1j9HTVJNSsmkvkBXTDD6fPhwe9NkjQpfqc4DB5ci",
  "key12": "3AGxYx6qoSVuDwDXqGrtn32DkazFqbsJZPeMQJhDG9qSXcobgfUrxidp7s4NLw81QPe8N9HnqpcCC9BAUe12NZ9P",
  "key13": "4vubBP3z413kNNYixH1mC2tZrwmAoS8RJxcMSLqf8qacdZepKsyPamvv7vSajGhY5JWAG4Jv1YhBCaJQjqKAekLa",
  "key14": "5XmuXEjCu63LvQwWPj1HjVGBAmNnUdfSAE5VZL1GfHKTjdxKM1WAZrogdcaauaA21z41haShhVirFPrJdDmmYJ6x",
  "key15": "yWB58FNw9sukV3cQGcfJFTEKcNL8DD86NJ2BhAQaXXc9M2p8Kr4dL76s3ko3FAfUirTze2rFY7v3iV4zejMxR3o",
  "key16": "2cCmueWgq2pYFbJo96iHLcif4CvSXF8SFeJTrSETSkQnph2U73hs2TMmp9EmBwWxN3QAL4scxG4HjKFNSr6YVa5w",
  "key17": "2ji54vTyobAz3Yw4EMYYPFqNafino4sv5yekZtJ8UUcqyNrpMnK3Gv3sxPkABfP2JuhrbRDjgTYfhuS2j9UbpMWA",
  "key18": "2Qn5oYcncDiXbNn6mSZSQ9SFL4bB6yhdRGkfrs9Q5zoRwj2cuXaDWpdA57QSJqE1fCu15G8heiU1KNap6DUtn7Un",
  "key19": "g449fto7Z2Yp6qKtqZJvFb5Bajfc7UEGmT1fnW6NCfPvNiEbPTt75sXamAn83h66VPLXZzWn28q6uzH3a8146QY",
  "key20": "5TPDFG3FnsJVSb24NF6Rfidxjcrm1qGLsFNcVYZX7kNzruZRWPuQ5jVjCaqV8nXiYVymiDaGVy8LdbpQdK8owTu9",
  "key21": "5EqiTPX15tTAjG2rcHd6Gp1Mvq1CKeUsRT6EMyNMR2tmPwe7AmXvfzdmGcpeChMpxk6zDRkdBkF9tdfGxnpuSMM9",
  "key22": "23b3qq7QF9rm9pDc4kKprkp74ETQ5gG6DPbh5p6z5Yau3ADsLQNkLVoRWJLVWoVo7kQpPYU8KZ9K3Act71uhhUAJ",
  "key23": "4HzNUgcqKVDojmp7A3okuCks7hMgnQbaSMd7XS5ATH4E3jMMixvJwTMhm13dTF3HxzXDiqjREsrivmsprc5HmKUk",
  "key24": "2aNSvjdTeMpjJ28MDdjr2rQugDG2a6Vk2sEtxJrVZs5Wp5NAw3Ewkmpc2JMKFUwCCJH9V2Wwsy5buoyhdbYo8QKn",
  "key25": "5HhJBaNBSVeY2GjqzrNbL8LwU9Sy16vKuSkHPDMX28bNfm6EQaNWMnfvDBqfoFKYdQaTBYdVyZZfos5ot7u7NCgP",
  "key26": "4NRqWUTqsRJ2u2XxafShpSSeCMtWxKsZmnJ22eaeKG62nDs5gsz49ZDmcyCC8bAys8g3afWUfVkoHZ8sP5deChzj",
  "key27": "67UL356mnESAK9Eut2JSF26RBhpYzP9SsU5LwYGPmRuRfdtXeSDx18MQ3tJj5gmavEwU8LpKNZv81nCjFj8zxLFa",
  "key28": "3JyBpyv3vZGx15gEfkcE8xfm6Kamk3iJTcAHHsdQeGHrkWFAXKMRkEttiB1mHBG9DDhKHR4Yv2z8DN75FxYTCfq7",
  "key29": "Ddw4Gn6qsNi8xP2Xne1em6XwdYRznme59nnoQftVWBeZzyepNWpfjd2cNjuwyV2m1gvA588H5HLXz7QEucxtfHQ",
  "key30": "5b3zX3JK22fwbfGawab2jjwjjBfoe8oZWx3xsKrgTsFz5VXymu5ddTP73SvAxQ1UChNsC1Wczjtc8s48izbLHRu9",
  "key31": "41bQ9tayqvaAaCCFqNHAY1qM5tjZiECHcjNmwsbjLVc4jgbTZgcCuEUpNF3b6qPsmeTGvrEyobGFsKfpACRCZtB8",
  "key32": "3fKFEWvJqch4TkHJucSSzQhYpD1as4ijc3ti9Tz595rj4gwTyVvC2uCJdDUEYKULouZ9jSLRAQEWQraHx63bmULx",
  "key33": "636rwSHKGDJyo1U9PGB8x2ypGGuv3hUmmCZYVpKed46y6YuCtiySLvcE6ohdfLFdj2eQTZYSqHw677puVEwshSHy",
  "key34": "3uoWhcnedk3zDrNxt1y1k592Ng7dDcUiUbuUajD5rTx82JAyLQTLnW7ZnXFpvnYgvwxUMTScwmiEjZZjopVVeryk",
  "key35": "5xFWrnAmvMP1oFvCiE4jxD759bcBTgQUnj5riyGjUShqJCgXy2TjpYETBgUuKWrYAVEzeJVvhfZq4xeab5qD2x7n"
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
