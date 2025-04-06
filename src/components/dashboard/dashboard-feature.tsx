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
    "2Z7UA1FhjcKvTwXmFVanzKkMzUJNTCg8zALESLiWwVJrqojE34geTb865MvCNqyVMVf2gs2HUjpu9nwvuxXEBZLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42DWEzqu5JUYQcuc8DebTVtnL1sSozBcgZnCvfnVtHbejbi2mJKPCMBxEXKHh5U3RJtr341VmzQYsSSPLy8L5DNk",
  "key1": "4oQSqJfHDyhwzoJJF5ZipCBih6qsPfyRspVF7j3s1bo49ZhpemGYj7kNiwAbdDUn3aJ3u5W4t9ybWRW5p9X7Gus3",
  "key2": "5wHQAkwrCyoSZ1ny2SyDAJZjWKiXxeQfps6bEmWnzoZ2Ay52NegiU5qcxN2bHGwVq2vaL5RAemtgBKrwiYEpEtmy",
  "key3": "4Y8YjFuXedmZwNicE1BBP33qYtiEJRHLDjVfwqB8nVcK4MkrgMdN1axpMpe1DCyfciuQEhXmGGwCDKijjFiWsHUM",
  "key4": "5x4kqYh3aWMfwUPTbV9fZoPc46AK4KhBF5hmNKHtyawPaeRNjVedjHp8oB2etkv4YJoZWbovoiRFwHTpJFa3CLtR",
  "key5": "3pz2JyK5ziDvXf2vg86RCyzgWUHJxKQmh5Mb2dbU3AHyKit5Sc7MoWBUE6HfEPBcSEukCVgn9Bnz9QmvbrWKmFhV",
  "key6": "2mzR3nHETv9B8wBhrhUvf7xxyQZLmrMhseGfhU3ZchaUaaf25AF6WYFNqpgmykfoJsKipPQXH1kGUEweHyqrYUgn",
  "key7": "2YQUmcShtEgC5KVZHPREY4te6E8jbpfhEee62WaBw67Pr8v4fmKsDgaMPVYGBaq9yEdhEXYZ8fifo8mGSauNArgA",
  "key8": "2LgkHdxjgDEMZFekEAuLRg3fYQ9bWe4dAH7xqtQvEu4LHsHxkaUt7ZV2vZZxLrsgpin7WmkN7cNvs8mfk4i2o9gc",
  "key9": "5Nd854DVA61q2QEpTzzG5o3nJB3163wCAnRqbTa1dsXbcKr3o3PjhirMZb5d5UnJJCVkefD26L4vMtja7uDGZUcB",
  "key10": "5LidwrRDDiwajzKYGSctCZ7JKWp6RYgqRYhxWM4HD1pKrUA2fxbtPL38GbgeYo3Ypo53iAFhMHp3jQgryTayV4P2",
  "key11": "geUrNjHbEiEZBPF2k8U2mGTRQAYM4eocXsJJCCoui5vXHkg5bduYaLzTMS1Uok2vjHPZCYAtfWR4udJXxQExob7",
  "key12": "66tTo3UD8wc76sfgot7roFEJaZDBNL8WsiBUTCkCXeTSg4FkRi9TKzRzzZEjAP4tgoaj1m2z8DBWfSZiF1Ko8keD",
  "key13": "4QUXaC2LqG16HrQGDYY8BBZDKTmviUhiFpKKaKxXSKS1yyvuc3hpjk8cghHkS88W9so2hQpF8B8MTw6SATkPT8YJ",
  "key14": "3RPGyiBuxTZL1eh96Cev6jDFDhEFKkAdA5FH2eEvNcLFzENT9zZ6pnRzw25TDre8AqYuyoD7KLKjFTK4aWTGxrL5",
  "key15": "7zQDnfag7hM3dMofFZDiGUUMRN5eBz5pH8Stpj5G89M7Y7BT5Mj9pBwE4Ne3msKaw24axgqY7t62B5Gx9eisJ9m",
  "key16": "CPvsUaLRR1Mg9dzsn8zPM5yeDGVnX8oiEaeKLHg7huJEjvHXiJY47QYBu9WyPifi9qBSMvJCjzSdZzzECP74FKz",
  "key17": "4kAhDfkFYyMxb8DaZ3GBMyFVg8tuvzSjMRHrq1byx8RgX17rRJq89ivuABv7XBHbG3tWeTWwpArNocnFai129ZGp",
  "key18": "4oE6rFJJBE1BcHvMRChGHpYGV2b3CDCncs7CZCooQFUxC6fiZ434np4ztEVdKarqkgNjVQDLZMwine66BAwreDvD",
  "key19": "G9Djbaia394GZQL12XAGpKtiHGvZLbHRg6s8neTn6FNJuDxzgM1JU8PtabQkzoNomVqhmwDcHVK28soSb5EQKZN",
  "key20": "2bictE57C9fVTYZJiHhPGNTD3gzjcRQ49K1EFAWEYJLhxsniAJRdf1SHpxMHCWv1S4bt45R6ee6heWpvTJwvCACC",
  "key21": "4NPouDm1wdSHoj3BLJDSKw6Kj7xKaAYP2uBrF6aHg52Epqq1nqXwZRMKDhhr2WJVPEr8xBiYreVsV5LWd9CHGMyc",
  "key22": "oJqutxbvU9Yf7hmh1UV6NJYLk6QqM9ssqQHtb6WiRAKGdEv1wDZDvktf3fbPZsMc6HEHMQWfntgmX9PmEWTh2Fo",
  "key23": "5NBEbedkY1bv6NaWKNeR86rH5FakBfqSE645fsaE4snm2tvHSaghokyPc7BhmeYJeTKmG6RGgQuyy5MEB49rpgL5",
  "key24": "2QU9giXNinK2DL9mg6Jff25Zj2YXYywshX5zT8z5UZGHBLrMmJpL36AUQ9TaNLduWeHmVZAcQceuVSZAGqPj1nq2",
  "key25": "43egnAr8adMy9xrML8TBjrabopq2ES5ig1DJ5pMWw3ZHrLAWuPtdtjTwBusa1ueF3xpFcRwPQ6b9WtaUcXSXukrS",
  "key26": "548z4iXgt74t9UN7AVrSwmE433Vpt5noJUFBGXog1yZsV3Y9gTW9JmFbqNB8omu9bQVDQfdzxW2cg2T5ox2698RZ",
  "key27": "4VHVsHNy5eQ2inuHz6ZnqFzgo8UUp1ewUvC16ThxWbWZvBqJCX4MSyPBE167rnrw12mF4ZDwyMFwxd8cCR5Za1Mo",
  "key28": "4XdJbexVM5oiWVNrebLdUhnwxdcvrevSYG5SujLC8RNgKzRkciof7H84sM7zXBZo6ovMh5t2vtWtxyTjWzNQuk43",
  "key29": "4ibcMyRSLjsw2XmZyJMfNpiW3q3Vhi1L9fzRfjuhmSDeqKvAy5dP3Z9qRWbiqUA5nEp7xatF5o7bhU3mcdWE3nsh",
  "key30": "3vPFd1jxZEH3M7wp1igg1K1qPyzsWcCMsE9nLWrkDHj9nC6JuwVxNvYB3YWoVv4ZdaYk8iNcT7L4NDu3zAKfvVhb",
  "key31": "2gvPwU69mvdb2adhGuacXpjn4qfFp1Pn37CwyKVuzfhbSkiHoxeoWPDz8MufFexSLvWDsbZXDGPtGPMG4nY2PWXH",
  "key32": "Te3b6fcuRQMiGT64ztPrR8TodRJdMMJx4eXwikSgQ6HNCwR2wXcTBqYgJQ7ZnX3Kcs4NU6UffVL8cZ1p6mcpunf"
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
