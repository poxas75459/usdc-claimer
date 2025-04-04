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
    "2dNbGthXJPEFUTfXvGE7ZJEVE7XjeYTFpxgqtNNXTWoGDNnxSWcpkVAP3gkUcKfEP1ijoNPovWk4Vh4sqbqDbwXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2beiWPvzuXtSE68EfmLFAfCDz61azFL22ntDkQACGf2omYCyDeFvMS3BnVzwebgd3sNAtMj9YSmHttkYfPg5ESyt",
  "key1": "2iTjksJYMkRSME3NP4q2MZp9tG8k2iTviaE41ncufT6v7RmgSwtJhZUezGDhpniJTCkDWbpZK7xKkCbrHufUDj8N",
  "key2": "4aMXoWj7WGYz3KfY1whNTrPf2mbNTM2AkMYYtrLFMnTkuUufgtapFZbN2cCAcrXjJP6nZajFKX847uPfMw2UNEqC",
  "key3": "WWTe8QkiHzDcFb4aRm1R4nGwCxq9MDSH3opq4Up4tnARTrnm3FdSg748qqpZyYGXdSNfo9o5fULYUv86WiDnkk5",
  "key4": "3zHDPy5mWgeAfZqmvhKGpixCvV26BsztExrJMnxA3zs7q3NS8A6ffLEFND9uVYRr55SUE32p8jsNjzsBnGzQdFtM",
  "key5": "jSsvFQdXSKN6UsA2DVDcYeefTpFLQrnYZckRL2Fsh2jsTju2rs6xrmEWPkEioWLyK9hh7TzZ1aS3DjxmiVgATzc",
  "key6": "5WH7r4GvUQhMKhYeBtug2QJwk72YLAqrNhAWS6r4gVnGvTvBmHDejfpaCift4UaX9P37UpCZRnPHixCjSR2He3s9",
  "key7": "2CMYXxZBZRG9va961dEtUZWgizrXpPbphoyt2n6iJG6qzfmbqtwHYPD4BsJYsEFqCZ8cdLKBWkpitDbkPYgrYLwo",
  "key8": "4DFX7C8RZU5WDNtjgZHpXuqviRtRQqWGKE2mpVvpZ7fyasgbZwoNa9xkQ6cs4Sac1CmrmZzuCdiYdh5cJzApgC9v",
  "key9": "2nMJVZLdp53qMav22cysZ5MCTnmjeYDUs1trS5kuNN8syiDC9QJ1SfixPbxHaCzhQVJKiFgLgiSegWpQzyYw4N3v",
  "key10": "2daUTSDf3bgCQ42fPfaRHEAwFQ3FoY6ifk3EZCL1wD93xDWw8S3oAWmXyeNAWV4LTkyyZGreC98gAws1Xn1gdT2t",
  "key11": "4rw5bK1zZ5wsuUKLJuUUGa5hbHHrYAeYYUVGJDf8ZuqDb5wvvtM3fHqPTycxMvLw2cY2ihunADezmMmB5UZACnAb",
  "key12": "5vR1eR7mJBiXbC97Lwd2FyJ97zQ3AxtFS9prMTC7NLFUskr4sQciQvcPefNE1pe8jeBBYgdY9NZ3x8SmnSM8vvFF",
  "key13": "2NEBopSN48WkD8g9kDwhh5wARKwSiUWuhx9iBao7eiKtKhSMqtbKRbrij74egEubAEK4o7TfpNvxEiqeNXEa1KSy",
  "key14": "8znWhs1FQeBK3onBWSSMZoD78P13rik3m17Vbv4BNL5eKWZyE14CQdCdfhHi3kx4jxH88qRfDcJDzYZ9Gydn7wA",
  "key15": "HFjdL8gY4LuJfjsb2LUTSDD9gHnD5Ej4j2hqAmW4qj42hCCXGwdbm72fMJXA7GKSPYpyT3SMJQuiN4Hvj2DoDSr",
  "key16": "43CycQtaKQaTkSXCwLcWr1JMdy93WyzobriWN3899xsZ9DeD6k628ANgDFGihKi8U3syyXPBzEPEnKY85y3xGzjk",
  "key17": "53fgc6SRBNgAp2rWhRCiiAVdxGHUE4rGp96yRwzhNbgTFdpTLkaqoTMu4XEsNYj5kbuDqqJobQUjGjz99gFSSPRs",
  "key18": "66zAfJPRga9XUMv1a8deZLhwZAgUeM7KM86cBkQ7RAiQkZCRNEfthEyCqwjsyD5S3VQmSRSrQNwJzE46E6fJ8XTm",
  "key19": "5ySCQ5qmtYr4CdVf51mhEay3sf7pvVhsJ2NVPBCiH7WvmtVgYmBs94EmFESGDkpH6QmDwdtf8hL8pvPCrpRyiRWK",
  "key20": "3S78HL4xiA7okzhWzDjK17MSnjXkWoCj4283HHvwE6evJXjTQEfyyRwFGvETCD3cgneZh6csmiT7pTMAh6x4WiCD",
  "key21": "5bSdwYFwQz1pAhQEPyonRAeHzgcAj1UMRXmErV77tuHmfn15AT7WzSUtnj99UdTvTYqeGHEVgmDXd6AsM2jtgSsN",
  "key22": "5SQYqnVyMJVuxhD2woCsxpQRAb7q8aLYYqgtnHWdkXDLVqpnhPQB3QzqLwe3eeapeRWXPaJo953gsPr1u9byHXMF",
  "key23": "4hCS1f7z3YjVMVZsBd6YB5NwiEY4CPz3gFKbYf6djD1GJaUTGRGZSK3z9ew2kF5Z76NZZxgXwFYP8tosSXyKG8bp",
  "key24": "MUkr1HsX5g7y7XNYhV6qPJZLReoMUBzxnxDEct6Y3EobDwzSrbgjUhH9vg54B577U9bDazJAewmVrxwy3oVfcru",
  "key25": "4YSppRzb5jg5qSw3qXrpuKr6AQUpDo49U4HY12YHoY82dwiQhULadReHTX8NbHgpKosqHzLSowgRX9y3aGk1pWV9",
  "key26": "3biFQC7qMfEZ43nhUgtKGkVtDmCDTyknrsW9iN6XRd2NHsWaKhnxQ3RKqTyEcUxkYQLfC5ZhNSVveuL7nPQKAcTo",
  "key27": "2RW8p2bWshop2ZvAxRMrvdUyUKrts6bJwE3nsqi2HHk1ZttbadRL4dBHiLceena7rBcU9ZnovX31hdiEf2tnMUbv",
  "key28": "55yV2N8ghfzuNyzdxu6NcpJ7hxz7xQK13VoUt65jMKV6UYX3SCAz5M3CaVsraoidrbnQm8zN9LL5oWTXvy83494g",
  "key29": "51Tzyr64mAqvAF9Vto5r9BBo15X7g445SPhjJvWjyoGgSSBu6Yey6iTiYEXKBr9W7j6aVNLfa9BG9WTG7MYpYdRD",
  "key30": "2vMMWL1ChLbBpzuqrPorSYvkHhXsRNdo86CV92QF1DpeuHG3j3tuDrkzcV8tRX9EiqiovVcM9X6Uy8LXRoUmpVKx",
  "key31": "2bfdEbfb1j5avTyUMhVfgfuZvu1Q6iGA8EgmZZZzWPoVpCHsUZNpCx4vHAXszCR1ggPFzQ8UPkPXuyaN3fBJQTLQ",
  "key32": "2FbMY97RfJHeBV8U5zoLAujjE6BmARUbabRZzMST4W5ZF9osfozMjeoV7CA5kUxcDMy45GJ3wnTMFnL8HRQ3JkdP",
  "key33": "3EbPJTSStw1xsSsMnBacgiSCiaq6HtLmDsiz1tMgc6MA5A19TSQGRS4mzkdtGwg15FiiPmGsxaE2zYgdXB2kfuHL",
  "key34": "2qpZXuKUkkuJ8Lg6iNj51mdpXU2Ykp8hYhGNQyHjc54kYSbGKMqQKEtbb3mDbb4Nmvw3ctAPdQKunWV6q6p7FjJx",
  "key35": "5swKSERmRU34qdQpkUAfb3JYLvU7KuTotjBDeZ11axg987EhtSTVkMxVvt6gu4msYHhECEpbyDp7x1NXVh2uXBVw",
  "key36": "o23SzXoBqkLtMKrAVnhGXD22v6wubZY3vqWs6bNQ4gHMJUGheQeD3Z3RuzcJounbGAkFhTPFNHfFsHXVCVVbWwL",
  "key37": "5WiFgpg9uzXT3YSTHAdAr5D7fwx3aSkzJR9LtAGexN4Pk1qznRJE9skPCq52WvtME3aEq6MGrMzpv5WWTSrjMZhh",
  "key38": "LCDiqYKpifysArXoi8uio6V9RJmTzgY3MdaWSFH83BsvdzQNWC8oeotQLSy8cD67UZanbXotnnjp2zZrv9cwUEP",
  "key39": "31cigCi9wjoQJFXhvCfP2BHDH3oWzJ73rvDUUdHpZoXxL6ZXdg88rYGggNGsvu4Cw8k61gQGd25HYjcbXQDTqmn2",
  "key40": "2RkK7yScVAgT7QEQuQKVsCE4rR3vBvbUPuM7PMBF1UxPCKHMUFb5DoD5KbqiGeAET1Qj1QUuqs7ajkePVetvT6HY",
  "key41": "3AVdChMToZebctGv7CrBa9jHFUP1PfHuKZGFae2fang3p5sdyRxdcmW51ZLQmUGMT3BE2WseDRaxdcJ3Yatu5Xaj"
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
