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
    "4ieD8wNw1QozVba42yXXk75CbAT9Y7E81K8vuS42ADPdsuDtHTqWCZteCXpUbuNM71FttoU8vHMkjd91jqQJGdDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KPLKv6vJCcFndhTwL7EwcUnmpgwY554Wxue6NQ9jauEYasfYMttGLoVESDUbhr12kvEJc16fgWdoXeq2DCWZg2b",
  "key1": "2SZPparaFjgunSxyRDB4XwSe29y2SH3W6TAstLPMozt3LFMGZ8p3YAg9mQYSyWJ78Gq3AiidT44yF3CjrH7xonTf",
  "key2": "47BWB2WKPQFczJ1DL4nNK2RKkpt8sRveefngC2JDzuaDyMHUeD5t5aKpgaV9t5QSnnbzyfZicQW9EtpQpZxhvV9B",
  "key3": "3VT3YinYkAMM9ZvLq2SQPEPAGWV2qNSVWZ8ePtJukPvgBKH1cbv5BthezH9yEyN6eaXbjrzNm7YxmRaWW98jmQwT",
  "key4": "5EvryTQiNZrboMQFSzxvKhhJmtS7UzixTtceb66hAhjrAy2rbC5kuJCC1pEGrTCAC5TTWgP9acxq2pynyNNNK4fe",
  "key5": "2mTYC5Tmtrq8UdTeoKWzraT7wP27bhPErwd4kLP92oduqaTLsnoWyQvnPP27LEfrVRWTBVqPs2DMQnMzByfrB7t7",
  "key6": "pUQ2uferCgT1z8eW3dh37vBvRMPboyvSszZzh7jyc2JQatgxqUKKP8xaE7LAQD5eQARi8nYoSaS4ZJTbP7fgB1q",
  "key7": "34qsZUB5jnofbjBt6jwv6QKQt8t1uYHJSQDZThZtY4unFVK6NHuNyjc3UnrjNuouHkhjxSyUhertcqsJcyKtv1nc",
  "key8": "4SVjYVF7TbqUpAE8vaKNzj6mf9GZGCj64pBS6d9Zvsa6AwJGa4p9UPtLcbnPvagBmqEU1hXbv1SYQUaG3G2LBMQe",
  "key9": "3shVDGD9qW2fhQT6Wrs7sRBq2Pm7sstFnAL52csCGCSuF83MeHxd28b3Pwu28HSwyX1YA59ckTdpds9UDv2kFGhe",
  "key10": "4hjCShXb1hvY7QYJBjrBs65VDwhcfzFhCDKqJHkophdmNWiNnyN1HNKAgotQdApgEDFPQabpBVUY3prVHNLfHzko",
  "key11": "4mQydWWXjshmCZu2YGmVBi8sSdQM5XARJaEhgoCZQrk5RiLZKhPq8qAoKokxYh9XhH6s2zJ3ZTMTHQPGr3kUrS3J",
  "key12": "4BQvrbY5SLHmGz5dAQywDExYkiCQZ3D49CbwPgaYe65dGEoip8odfsAhZQuj8Rs5bvsXFWhTXoerBmgPicDqnR4y",
  "key13": "4XSqsjG1VmVsvNmBkzhN9ZCxSGfxSBDnHk1S8dJMkpv6p6V7RYpA7CR7LgfCaG1HxZK2irXYEfqcganP6ubCJRXt",
  "key14": "5URCavfmEvpVZgeq8atCJtEdXcDRrVcYTU9ZKYVt2GPkdwdzFPLb4syAzd32u3WTuXXyUvNEC1na7Nc49vw2G46u",
  "key15": "5Xaf4B6ZkUN1fV6ysTBMHU5gA7D3nbdLXbxAPT9qmsqDTuRTovFUsdT7fqsRXbnvCkFBKX9s6LXB8Degn5pK4xTt",
  "key16": "5D4sMqkbsgPGC49sTJBMGWJgyxZtRY5rufeWHjbpLwc6c87XCdoFGvQKp6z9fYCBuTEumXxVSM7czvqajrcNAudw",
  "key17": "2TKMuXXdBTJKEtqFBMmU7gedXYgSQoZkEzzjwrw4gtcKT7SYFj9E54Ds9UKHbRBiGhWoRhXs31Rog6doHvxqhs4z",
  "key18": "5iDcPLXqWeHWH3tTVrTjfzFDm2shHKiP2WHzVofJmkMHPn5XbrzpGdjswrYXS7NJ8j9wKf9bZnZxnGKXZ6WpcqVn",
  "key19": "53crDw7Qpkz9MzbQXt8sXaiVnQvqW2a7wxxNEvqYedtctTXEEnBvNnM7jgztzHg44i36QaWvJLHR21KEDvikL5vd",
  "key20": "4AFGB6NiA4BMFW3Vo48UFM1f7cigUzt41JBZzDFSCGro5nSyWCvHnULNACXmEHG8h1Znn5apC4Ri5A4NnJXiJ2KR",
  "key21": "3B45EabFUM4eyL4S7W6cFtPb1SmXpuuFpohckDw5EHKW8qaUFHbSSbcjHWUsKTRxuMybe2nxuhtZbZd1H7DNd4hQ",
  "key22": "DcjRDp3yHanmZUZ8M25eS4Ppbsv3PWS82cSJbm5DWsk1XKved2pDx9ftZGJsBx7wVJgSpXsBuiZEAnmPEUHosaK",
  "key23": "5NCrPxSzm3Xg2jNiKfzoGSF1AtwrLdvLkinA7xNcHt8JF9PXMwRbhnooYpsjCYXyksFyV6eX8ZPeQTgyxiM3sFQ7",
  "key24": "64HfGPxb32DQbHbsMERLJ6stmqHgW6hVwAhwysxvGYVHCJrswPKXUgF6chrbaUQ3qwEiVrBCZ2vaLa7Q9n36BLUt",
  "key25": "5AeFaY3oYKzyM8PB8RMuM1wHbCPY12tYmXRgKZTFE9wbHhBHww5gaf3WdeBZkJuU7ZLySzjDx62tfNvGmqaZDkRs",
  "key26": "3PyipBK9XozApZ8cW3ZCoz3MDCAC4G2pD7CGSjy7gFuN6CtsqBy69ZjyXsxugrhFTr4ExDG5Nh1AQobTw1us1W65",
  "key27": "2EwCb6hpYPuhdbPgXAikkmLZNzmdq4eoczq4foXu3ADf7ktffMEywnoeSk2Nxg8uMgkAETPJJAqJdViVKcDfosae",
  "key28": "4pV6o5p7AfhbVyBn2e1oasLek8SQ6BtVPE9HyzzjNVmjghB6v8XEJGTTJHe1d3tpaF4twHH7eSZgMv6N3cuhYbuS",
  "key29": "2GiFRcSUm7gmEqr5mJBFBeamQuNtHVb8HZQxTHe8PZJ8WV23JFbyg568xg26PkMRsAMPe4QjejnzGKdVEcScwkbR",
  "key30": "fwUfB8DJ9XSdGSFKGdtLSxDvYKmanbbhNceyT5kQno5NW1V6fGSP2BK3qrVfdiC4MExzv7fbw1ofo97xP9DoxrC",
  "key31": "2SqGmRPuLCwL946k3Fa5YWgpyAfD9ZHFiMiZBMzjrDo4pzsHzqLaf15Zs4tR3C1Eg69ZjmaMnJhw9qZfKx2htVDU",
  "key32": "3EGmqVQf97rtb49ay8LKHC89MH4VReWCQJeTp3xe2oXg1iJZuLrpnFb3tivYoymzYwAViPjEP2ub3YHGiTudRPtf",
  "key33": "5bJBqq3E3rRytmwBNTM5jvko9pcAf51eMqiXh7RiM8qBoxVK5JQYi82jiJj9KaGSNy5ZtjH5geN9vQXnxtZKnC3P",
  "key34": "3DRgcBavt9C2YCfPszmwuZAZCMBd6X2Ec4gkfhmPZncxXTVhS1WX1yaJX17Z1gScyfqHmnBN659JviFC9Eqz78Pw",
  "key35": "LjHYjV1ha4auZ7GBfrVZ4PcKzNm8TxuZZrwmos15EG5X5BW81HPKSm3wPPxWHMK7L9jY1bWes17GJKYKR5YzXur",
  "key36": "3x6SKkUrUrGaMytSYJzJUADwHjcR7JEaYXcG8kNozJ39EnMcGG6R1ogNpG3iEXYnFCZai1wtfRbjSV7hkKVkjWTV",
  "key37": "2Gn93pTMcCNDiErjS9pPW48fC3k3rYXHdnMLyF178FQDcZqtcZnzdEJP58NpHDt9Tcye4gMpYVyKnVm6a15tn686",
  "key38": "2pty1fCXivQpTexjdUfGkxjHTdn5s8sS9deSJ8MLyYVNnMrLZb1VijhgJ3J3c2mE57mkoZRJXQ3uWtTA7zj6nZhV",
  "key39": "3wMy8HFHteZeG8soWGc81RH5CVzvXR2iaBYxwLUGG16aBR9UmNV9Qc1GkR3rqbPpDvzf11jqAw2RxJoa3g5FMJKE",
  "key40": "37jQWxeeZZsK26xNgVm7WLBqrTxd3CQQ75N57S6ivKQYhRkCAn4VUncB3db4uRhH9sUPoFgxGVGXMv4muCrt4zwv",
  "key41": "NQQNsK3swiMw3jfqkU9MYWaigPGHcooSP8zWwzPwaLyJKpE2Y9nzFWhqUqmbdGvEDp4eHindwEiknB2DoEifUr3",
  "key42": "2ew9JzGncVTEsFS9NUqKdXtWSVXMqyady8xmLozAjc9bKGmtnBs2ujD1VZCG7QisEW3ApcNexA9gmAPnMPhheFbh",
  "key43": "37ijWahCjLdkAzqk751BWYQmsyDRGvtRyqXtyAU3EKUcMvnwSndfvxMbspUjJjpmtCcpBiRFvBYMg5J7ZUeJjVUT",
  "key44": "3rsLuPNFQsHss17HhGFyHtVRDQkC4T6KKcAVz6MeDsS33S12MdTWaLcP8eXiMBrxCRBHrU7eCGPiZijWcaLEo3as",
  "key45": "39NbKooRVmJaKMzgQ6wsuV4CNgL1HZhKeLDhJjazadXaYcq3zbLwDa4i49tVUK4Wx4MHVXnzExPbDWYduucqrWmC",
  "key46": "325bbu5BbsEK4U1M7TpebnrpjGw4dizNi4b3Y57FdCoRhPEDdGkBDUAEaFnTTxoNHztWxosSk9SxCbbLDh6EvTd7"
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
