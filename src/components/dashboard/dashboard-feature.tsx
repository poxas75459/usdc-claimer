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
    "2DrkTXqkdXPZgLMPCZDTKfJYvzgSm3XtZucvfYh9dvU9PtzvumWVv5vA5Lxaqsbdky5WpkYDkRfhVCHm2r3wJpxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BKf3kSi3f9syuXeykyGqNJ4ZtDJMwcoxf6w4Fz3LGHjAnBaRa2VzRk6HraQ2hEUxhJuyKQgCDH8bKPFBXjEeZyK",
  "key1": "2e2N9p5cDHkRo94HHRQJxQuKsMq8hrCbtWT673LvwDFu9t2vCFkqJ6evrsrCHWVBLWE2HBTAc9sc9wMHzfPYwQUo",
  "key2": "25pWNDTfDMGjfCurfbmuEAybXNN8VLHRGZ2K81MYhg4RbZsrPn5YG4KwCbXpo9kgfXS8ZDqUWJh8gid8U56bhpVo",
  "key3": "29FPk7kBBHPBRG5MpNnbMvx66v75xKPeF9bAhhES73TK2zM3nyfuEB5AGKCBTo4csaWd2Hw8KQJmZRiBuZTsyM4X",
  "key4": "4b6TuibEhJQ4gPHFqejMCi6WxokZQipjDd8qiSFm22je7BhrDtinuLxzrvK4uwbn2fNiswPQDY4VU2WRciJmgtgs",
  "key5": "43DaEUHXv2HHq9hPiRk75hAVqJK1NqViZaKLqx7cUVeEeSfBvwvGPfSFhXom3y3CynVzqTkyyVphwiDkhyhAHmhn",
  "key6": "yTkzkna7gGSL2qL35X8C3ViJSynVZw7Eiax2tx4qENXe3jLNZQ99rP1PRKwogjGAczVj5LajdYZQr76vEjHkert",
  "key7": "5ZNukCj5x29qccZffKmhBGMae5Q6MXvdTJve8c2Ey4Aet4j3ePjuU5ttf1wigPtGbm7FnrLaoPubyaKTbn9iDkLX",
  "key8": "uqY9uvUyjnYNt6jkj46oWGF5BzkWk7bo9MtWcQVSrHKWifKYGUbQrbds2xDdHcd56qj4iyDirV2oLRmD2NPgABZ",
  "key9": "4dDFZL7aw2tv4BrejfwvEqYKwFtfwginoaLRYcettBm3VtqtEE65k2qar3G55kwwYjKvJCR4oRTCKkDL7DExiYV6",
  "key10": "4psKCauDKGsaSSX2FTXjYJtbJUGHWgoirsWXsr5W6T2J7o4rkyMTDF2RE3yDbfXzT6cnF2S3NQeqSoZseJZSsLc1",
  "key11": "4J7nLV8jc4vgU4aKfmVF3ThK3fu2oHFCaUXTZGAWfbbsT6N3o78PVHUcfGJfnzhCcRg9ECWE2WutxudMXM49RxNu",
  "key12": "62ybxMKYXd5sXDvA8hYtEaU9aFEbEjkeZvJbvkNjiuMATfH2UKq2UwLhRVF53rR9KogErwynJ46sueiASRZkhLxw",
  "key13": "Tgo6hJXjjiocvmDth6kbsT1hN5N6NZCxTdgesohnBeWSAHUKhqq2oQ6MdiDo8zc4pG8fEeTCDTUEtneQL92uvYw",
  "key14": "r8ab4sJ98Eg7iE7BATu8CZExpusZQUn9nu5mqXE3zShXSE6zpqtnShxQhKGvT3MVb82NVKPjDS8QFSGCZLamx73",
  "key15": "5WNCgQ5NLaPu6wNKAErrtC6zArjGHjyqYYvH1PWWiTqAmrSW4htDjB5Y66fK2iBXyuQiyuUM8SV727ASMEeTXg7K",
  "key16": "3HgR354mHE41sgDwLM1W9nWShc5LiQuYEz9EmLnubLToCx9ucYd81CJFCtb6cWYLEVF65mAoTcBgYHYT2NDuo8G4",
  "key17": "3iKnC9xAPhWrhJhsegFPyqxffotyJHdWx4ZhSXcWwjFJ5W3mo3iiPYyFpiBeTT1ZfwZ2DeLQncpF2t63KNGhipzB",
  "key18": "431Hmi4cLd6ejKWdibyZEpNjZTNyDsHJbU7J5qeXx8ERoBnaoLggjzXB8NRwqwg6yGN1nxJkpRvu7ukEAyW9Sadm",
  "key19": "5RdwwsH5X4UYpGyxdDTTTBaxWs4KdQq1EPiq8ByEU87nUDPX3ELYRJe6vnNjV3yG92pa2SeKmvUYbXiTMzX2eAsd",
  "key20": "4UrpgXYaVyZuMTQLcRZGkQ2ZQKcgAWYjBSBvXu91eUfmuindwZsyZwRSNYagN8pJj1bDTscPyqvPmyDwSeuzsd5L",
  "key21": "4wxU4tTmFmA4MueVqpU8eYau5qpMdfghDXoVfHBjRJWqp2tqwZTKpuPMEJ6hCqe7o2ArzKKR9G7d4u7pBkpDKekE",
  "key22": "33AWnJZdDoj7aK59RLJgFd4tv56qkvVriZAwDS7qtHrQYjRvU75c2PcpR7H2iBZxNmxhztS3mUJoDgwrLLVrVfyd",
  "key23": "51DnxJ4fpsPNDdiQdmSnCk7tAM7WqGy8QiVyhadmXU7sF4LRopi8Ln2RrJp4o3zSQTVFTmXnYZP2wfyZokvNPhqa",
  "key24": "4Ws2AJgnDa6h5JhuznN8sey4Y1ACJuEnPKjhMHDJJK8Kqv9Q3mxf8y1bjrpTCHZ6ZXVLcAVSu2LmDQRb6c4dxEXw",
  "key25": "5GeiM4UCSSAENE5dMcYxMSakASKTENSEVwG2g6sTSoVN7aikAoCjjens7LM8w3SDyBftSCWjhMnqBfFDKysonHmT",
  "key26": "2xnmdQLDxStEgaeWyZMYrx7UgwHrVXz8j7iX2QiuVWxtDtCKJwSQn3hZhuE1hotT4EaJQa4e3CEZCLiczA9uLDG8",
  "key27": "3XoGAoYnVC2Jj5cMUNxyyXCVCTBmhsjWh7TDMDPcwRWikfTESsEyETFGo3bxpC1dM57dEs9Aq2TSo6aSz66Ur936",
  "key28": "SS9wjJHWhEz14qjHDS85ptgWngQdenDncuHVfHqKeUNLoipCABkpbMGKeU1xZ1NMuaHC1zuFDzQmcrv9yWdjprJ",
  "key29": "39vmyYB766SsoTgzYMvt7181YLGZj4uyiJbMLKNgSPs3xCf2Sy81ERVXWbdQBFSYF3JkzVJzPe7gVTbAWLFrpQv9",
  "key30": "4tqY8RasE3JhYFramHXuPnzJaqz11QuZ4as7jrne1Gz4sYYg1c3gibNaqRjU9aWrrS2PjsPJJsgonb55zkrBf9ZE",
  "key31": "2upjg8brAsPcwPVzrieCughotVv4aJ4T6weEqJ4wdS7CRAX2tynSoYSQLKy4Aon9jNyiDgcxFxhgnL1SgsgmGaht",
  "key32": "5p9MwuEJWw6iRs1pgtEJVrxzRDth4Cfwbc1FRC4Qy1QZdXy4yoRZDfRdmw7qjoWWoi2Bsb6v2jgAyguGvVAnmvT4",
  "key33": "4yVo57xoPCMXcsr7ERLpmVik3HZdWzWxy5GJmWdEDhFYWU7qh2qQYevMW5s4SXvkA7CNtHVa1p7PeeZAKHJZ8aSi",
  "key34": "2b98bWcaT8eXPQDtKAytUqixCeVPPwDkDtQhh3R1JJPLSCR4kQzgcsyhq6ed1oobfhr1bJFs4ZuCsA2FPxQLspcu",
  "key35": "4ajNU3QHorAPnV8ajTSMDreUYW8J9vJ5CC8jryp1Su2Fts3G2ZdZbTcaXA7vicTfnWbsU19wNxjna2dA37pj8nqt",
  "key36": "593tdnGzDJbkLMsZEP67Hccr3RWFdmmzSn4s6iAcubV1ff5sMg9g5KtqLv4iWecaQygYBRGhLwUKnv73e8hZ7muJ",
  "key37": "5t1XBSmJe24fSkLTBJyVbTxPfaSv1xjUCuLkVRxKhsZcoJ4D352S9BasvgQUVSi5aA32yjcYUhJHhwY7bejHvzj6",
  "key38": "Y6jTCCAxWhTr6NsCGUT8J4ZVCnHEXAQErFtSNhUUeWXK1L8FnffBZAi3ZHqnnbYcCsbSBG2SHieNHSPQnRzPbZn",
  "key39": "3dRE8r1ag2c7DdBUNYF7b7ioXHGNsjz3oHydzWcn8gy22cxSuBeZdUUgc6fauQGNDU9bXtehx3MDX7XriXHixYSu",
  "key40": "2q9iWD2iBEEyDXt7hXUzLdTvRWfUfhJwbTk5gkLfn5ykfxSDs9ve4fUqWkvWSj5dp3k1ZrtSekn1c1fzgv25mG6S",
  "key41": "2LG6rXgxFgjYtB6CFGn4bmwhps3K419YjB52wCgrGgr4ceyy99mUai4p6cHFcgoRR74w437JP7oD8VE5mTSvDBkC",
  "key42": "2f3FeGVe52nq4NnNoef7t3gVXytMDTvNy8TYp5wdkx18G2LrGWvCtVZcutKDwvKD2bCbBvzxzD222DqEWTuUELe5",
  "key43": "5oi2QTaVM1t5pGh46aLKqqHtF7Ejkwwv5cAvrJfaLeGUysFdBWkVd4ZT7BasUgZiD2JBtV54shsn33dMok6gBBQL"
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
