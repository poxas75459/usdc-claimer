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
    "2KvyEfyKULjy76rkAyKDrBy7G2LDHNLfG9fojYUCPzDmjrMN3NBoMB6z7S5r8jdMiCKN8QKJiBJC7YhwDv62tYDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XTuBQsDdf9c7iejS1N18p2RX3uTZW51ZsUucL9h7CbRAPiwA4gExkWLi4wQxCgJiMfBybcxwsoSNGC2DY51ktF4",
  "key1": "5Ag2eXMag4Abks9asSqB5aju1EA9GuCh3XBdjjPpPgQCaBYgN1ENt6x8snBbZUyWuYtf1KhHDFzct4ZR8HeKts5o",
  "key2": "3qULcbrqQGrfqh7NExb1rCfGH6pTY8RC9hTebH7Zf49jffP8BS1jLVy5pddMvfJs2t7UV52pm4CdoDTpFmZQXc8S",
  "key3": "yn6C8NiVouNpqziyvN5W1114dYmpKyTxgjUoo9S2Fm9v2732Ah6myvZtu2CqSGADoS8BayJy5FEAQzLNrCreZt9",
  "key4": "4CU1NPFeyPjB1LYNgKaNh5Tan6Jfac6hLjcy34TAsaukEwGaLDdBacTFPb315CJnXy2bnfawQG9ox5gzox1NK2pu",
  "key5": "3aYc6FhrJB34MEQNqw8ZuQ1zzwnPasE1dUsadfrbbLgp8JRyjh3GuqksGmHmghMi5q3qCgMivzMP6i4s4DDFGDmo",
  "key6": "3yK6ee8b25ZRGAT8f3hDLp6qt4TpcY64jTFMhFMKqtDRsGjzbp7pVCx1o18w7ERg22q5XrGQjZAKvGdDbqaSVsEh",
  "key7": "zixp4cr47o2eK3eqM27wWBRejcfh9XSyGgp8y3uCQhiJPaSPaGUaWswA2t97fQangYyrrH6dc7RuhEmeiMJFSSE",
  "key8": "246jQbnmuP2mubTqJ8aGGPVjidpqoq6T735Rqg6Eniw6s6PAsYQ26qyxGgFHtSiPkstPPVdxjqN3MQk7erCsLeGy",
  "key9": "4sCHvNk9BfSApBXbfuKoPdyjBnMAKb5wqpxeTiDL3G9Ci88Wtt5s2uo6mWypKJ5rxbxsaCC258aFx76M8Q8duDJP",
  "key10": "2Ww5tkLbvSEof73frh7puLyLdUhNBb4XcijoHoN1etwDcu8AdmLKZgCzRUHQiTCAiZMTZEPro2hTLpDsXqyDpPMC",
  "key11": "3jTStvLoqgSTkiMBnaBpTM9vMFNnPPbEjmeaBWJNi2mMgQ92GvWDFgDo3A9EvB5NGPyqv3drbtBkuRD2G4dyTrhg",
  "key12": "48kfFnyAFfJNQnfZTotXwh4NnseFKaaGJ36rfHPksHch6C4Fs6xnbhwZWvppHcZZyYBPi6bwYvieyrivGYTEoX8r",
  "key13": "65aQZJyPn5XuPt9VnJzavt7kDJ3bGVdF9y8fApB9f4p21WhfYosYcaj9kaxC5Nnwy4KkyU5hY616Zb7XyLrqiLt5",
  "key14": "WBx8KUMTZcFDLL7SQHW3C5s1mX3eQDxe4LYVH6AG3AYEFxxi7n9yVqfoomLiZ8qrzgkj5BPJhG98zNgyroYDDsh",
  "key15": "3i6p95ApVEFAF6VefvrVjUdbLbavfyNduqrp2hxoWbLC92V9dYdNjuNzYtiG9x4QijhxBvjFNC5sdgudse8JneGn",
  "key16": "2X9hW7q1xjXRG9ss8qHVte39SkAsFcG6R7jurBq1QPxd47cekLtkn5rqZAC25eJaz1MV91kn4Fn6ghr7PC3L6RF9",
  "key17": "5pjXE9NmFUtvWhUv6Tc31kqaP1DtBmvq3b3pvzVWzveUSRUWBM9sPpATrA68LQhYiFAveVeXEBGxfjaEsswrDuSa",
  "key18": "4GgdLctSMUMkuei2QrSov7mi5fNJ5WudVBsJYPJNXnuXEgGDNyZhgXrXKKjwFENXvT4obVc8xfieHUTadKMTnkLW",
  "key19": "4zk6zLUm6on9omDf1Px6XPYz1eeS3dXjhQLywKqCpoz6rQ5BxR2K5t8KT3VaXuziVSNn9GHEvDE4b2yirZWjLnFK",
  "key20": "2HLeh2AD9szFauEzWycAZ7EML9Fh1uba9LsgFjtKomu1pFZKEXV9KyNcjjky9Rp2P99pLkeGtLySWLnzYVUgfVgb",
  "key21": "2LVokgMBLJhvsoVHnzPvgzQXfccjD4hVPCvTS8wgeMr2wMBveap4DdP84C4M2rAe6rG3qRurYMSVuD3NqjruCZUA",
  "key22": "J6L7zdHjHVKfEFD9793us8G6nP49jPY6jG9HaS1JdpSRVf9LRANFErDaCDsRcHHoHrgHDABAVWjsiy8yqqXME2S",
  "key23": "3XcWv2YWpWeewqoa2KKBjdLYKiUzpLTeTxwzX1RkQvUE2Xq7DmFfUYMqMkUgKQ9uv1giWZ4xmwsRwzkyzFGx8TXm",
  "key24": "5u3A5dZG16Y8n4QMMFUFNW1vPDDaktLGNxYQYviQoakPcXXJjQErg3cNAXAqkbUdcyFkUeTKFJA4GKEaL5xTP58z",
  "key25": "3kdCrfQvzQW5hRe1JxUKXmU327XB8hJFC2UxFf9vFcHV2TqGd49edE2ze4AyubeGakeAm14JCQd71Jf8cvSUr5G",
  "key26": "3GPPQcNxEesQGzuWk3RreVtuRNTC5o7XGe7B6enMEKcuLdcNBSMJ9NP2p2hG1hN1sy3kdsCzgPsZopSSFvRkRfL3",
  "key27": "2Psr2MNJgf9XNAs2rRUPEUdyAaui6rKUQgaEoPHCr9MWfpYVJMycpADCYc2zNxVuY6baW9ubgXUKh6oFR4bqmsxd",
  "key28": "5K6bR9rDGENuHqzcqWGMCDLHx2KMFvtg1bdb2UH1XArx4oiqgXzDE4akX8pWYuEQG1EKLj2Tx1Ks1DzDb2sssqMQ",
  "key29": "HNbNNEfNgwJRQ2MGMTPoNpZ8Gg4GSzxmbP8V7eJb3pxrx3MSfKu7v8xkfG6ki89pcuWH8jUEGqf7eHUpac64eGu",
  "key30": "xJTWuVgT2gvC1xdF7EsEgrDpxrJSKAA7ps3HVPoDtmggX1tQG43svLRa3v3ApsfiJ6Pvs92M3HzHDyS9iMECa6K",
  "key31": "4hBpQsN31ghU7FiamV6GFcvSkNoYPU77nRGA1ZuxK75TahVbGo6BvDfLuazhsV2P62Mk2A8adJwZNqjhekxfADLD",
  "key32": "47HHpZ6L5GpLKpECU8Wvcx4YWSuCqnYcijeHsERd8SYBXuABG3pYf2MNbAFUafbdbPdHkYuuCBPXJ7kW1g6cKPGx",
  "key33": "6qpq9fgEJPa11QCMvfGGc5G5veuyqFGggSzYuP3LTtkAPsHGPfDMfuKBcepnUSsBecTfdiSQaZNgv1zv6qWZomC",
  "key34": "5ajk8f6Y4irZAP3JPbD3rEiUScREdo3CU6iHuCrbqRLD4wW2E6f7UrRWpwZ4r9aFhz8zThu6M16tcdiTjKprRsYt",
  "key35": "3KcJLVStE8dPxoo3f5wtQoEJomDgELvzGXPFU6bMaA7PJLVu6HEHyKA7BuuSxyQQUzkMBcgwtZtoktdRyHa5dbtU",
  "key36": "3VcfGknKP2wdJXtH415sCtqPY3LVX8XLEA6ZiBAMV4yvgqn32XyFfTySQxoFi2TBW9eJNL6ebqrhxfDwav6PoAAr",
  "key37": "43aWCG1Ca9RmiMgwmpbx7QccUcyJDajkKYRDbaHeS6c5FC8kQGLDzBAN38Ck4JnofKfg92gX8FpuzZArDNoXXy4i",
  "key38": "4EWfDqND77UX9x9Z8QNQZTytUYDa36Kp5U2waGwHFRvM5KAFK9XDNXFwqEcfn4CCVhiDskRqNSSWA46pT7p6MQaR",
  "key39": "F2pdKnKKL8m6hUzdKiboUpFbayJZUx4aZFezd675Jhat1Z9LLqQui4xpxzUtaZmn2uXihoRx5irFxygsfnPjVAZ",
  "key40": "5shnZcENyYg69BEbazVVr9bNjFro7Zk4pTXa9sC29kJHiA5s1Ssqrumv89XDPRAUEPuo2wGviUwcJpyVMsLw3RNt",
  "key41": "fx4ySuxLQevNQuXxbnSXuN9FYtwZJUHafSmix1SzWjTRiUx7RZHvpeY3cwupbfdWnBNv2qxwWaeHYn3iS6AaaUq",
  "key42": "4G33Cy45xiciQbvht35EcevTPY4Z8JjXAgojQVSw4s8tfkDWk3rdFkwfV99vuKL71sa2CPwG2NhBakhdj64vPUgi",
  "key43": "21SHofuNX6YAH25CA6r8jLuo8qABN1w3XYwHjxhpnxPvoXRUQFVp4CXguDeNoTUGNRmzUAaE5fKq56bpP1fNQSkB",
  "key44": "uNvzffzGiGrKvdQ1T5fCy4m6nPWTqABzmBpQxXc5bdX7ru1EKGe8PnUdkU566XBMxfvtaCjSMc6AUSv5ANrQmaS",
  "key45": "eA1fh8UZUFBYXUTkL4Lqrt7QzT94tXtL27LwLjqhyCR4TwEndMULpSZUvCX8wmq3rK8a1BCDbibfc5kdVp56uab",
  "key46": "5YdEBRsAYHvd4dmPxoVb7hZsDSyFA3syqNK9Cu6TejhWjLENAUG5f1mNFFziYitA46z4WUcWa1w5EjpeVNvp2kxy",
  "key47": "47m3vFgwEjq6BmJATNADgW5hDBW6bq77pqcVx6iTrt9umTJ1NiVqPfoWhxhig38SQGbKTeW3wbriGBBeDWQHHjb"
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
