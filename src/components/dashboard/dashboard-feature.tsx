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
    "3PonDeWyVo4CvnVdfY8EjK18348SW5hUvppwPeGzmJkpaajhjqkv7dsCRebSrcQhqrriaLsz6VXK5mBCiyWBLrZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CDa2CyFfUbXJEHvZXRKBeuXbsAaogJG2bWucPKyPPbn9XonDHF61i2eftSazGmMtbYBdrdwyMjwmpLDTXmEZB7f",
  "key1": "25qJRQ3mUD8PTFYXFSZWs5DpsoasfzjaV2gcY4pogc8Yi94f4V1eysvU3wN8yGbk5YTyZmZUjAPTDbfhnN4xdxFW",
  "key2": "2dmQDkm8pTsR4MY9xjLFbuxqiu8feQuYLVQFZvxYyztT24LBRkgtZj3u2TsbRatHeXpk9XEzeghSndkv4VafuFnA",
  "key3": "5Th52oQHXkfamWsQqCZuDF4PgYR5uwb65p9w22GbDCN3afNQiX8zvPboCyHNNwnhyR15VaP9Khd1pe5jLfDcjJQS",
  "key4": "2tdwtXuJMiM7pnc1hFn1T9M8q1r194mfb4eFUVZUvV8jpquJzxBBJqLgpDYtHWjndNVaAcQweu9nSRaAXkTkfJEv",
  "key5": "3X6ZUfjUn6g6UMtDD7NxTxJY97zpu5F9x2SCrxFmCEmWDDfzeq37Dwctr4xJ8Y1SAL5W4b9mod9mw4Qn6mMSw9HN",
  "key6": "3HEFHBhUruVCuA1PCtzvKYDJrc5y4rASzWZxVQDnsRLa3cqsPgC3ZtWh7ZFUrDnMWior334tXmKGvJ6KDBRhqJEa",
  "key7": "2gvpXqGRKCSquJzupee1hppZTjEdi2xmaLk3zfznMtFVePmQCZjAFuokDiCuTGZMTUdJdtsJQ9f9cghnyfPsQewt",
  "key8": "34p2fKWEgWgoNKQBrgRHvuuc5Eij6DWezZyqLiamdwxDsxPuKEHg352uUwvLakJ7DSbzviesb8JP4y4teveEUn9c",
  "key9": "32AziDFd1WUmUvyPH9Bgfxi2pVkuybyPFvQdFSWYjt2cNegBZqy4qWz1KGE3mo2rE7ZHFJ7q8jPeoEHpRqoFMeSS",
  "key10": "2d7rYJMPd9dgaDTT94hhWfhP3BoRBryGF4PJf54BJcyUmR612jZq3RqrGFJgt1Eem8SVZRATAKANhphifMdHXZ5v",
  "key11": "3c5qMuVoXvuA5fwLt31aakQ5qxw2aEHtXMS3kc4ZpGsdR9RpqdWNWF6JajR9iPcMDx3hwSbeqbmfphLwTAU6zAhe",
  "key12": "5DF9h43ik41GFBgck7TWH7NNEeW4NQEFgD6ThGUBR97edbLzHEs8H5DfmEY6KvuWGFsfiTDK7jfM66tLE5A2QVBh",
  "key13": "2DJwsUqCLGrxm2MDzBi1cm2czdAeK6qgvviSDCerW1b8JA8Bq1REtdad1iLmsR6WLYHtmF6nm7cnBsrpy6mp5HWC",
  "key14": "2k67W17zMvjgUnMFj1TBTdkan7oHPLAz2HZJK14u5SaeGJkobG3Xn37Ea3cgsxWQoX6X21DyPbK47txjLpqGtxXF",
  "key15": "hqEsViG2tJkzoEvq4mwnHa1sRaeYTuyyanPqGPprjRBNhDbyiZKunmtaMpyLE3ppnW8EzMYJLphvUrWXvWMZGw5",
  "key16": "47ZAL41fjvfjE4ZfNTh9wcxjLSHWrmvuzkeDj9ZVRTr5EfJxnALUuLcdEHJh4YPF7jJUNjQPAU4hBQso48Y7oR3L",
  "key17": "kBerGXgmZX61wAQg4yo8RXDBz97e9efMogkHvCGJ7mwAKEDL6dgoYw7XJjKVngG9gApp1W5Uym6q2JYuXaY5o3u",
  "key18": "4ctYeXmCtd8GUf9TmZ7eGqceniK4JMPBqPb2p54Tez1qwbBhRafk6HWJuZtNdh4dsbmgBBJQRZmUSHMB9hMgZn7Z",
  "key19": "4V5pfQbQi8jjLY6gbbbodqCM7Tr3ENEV9ivzkSS1MvPhvRV9F7hzDfLbnxbdWJr24EgR9H3u8NDT6VRHrG9KLMxo",
  "key20": "4wvj1UoxUKtZcyUVNHcd29VeFsUveCZRhm5yWHzksd8T5cazFCJReGBE9SHKcr149VbnPeTtpiaj1ziXNhKYWS6f",
  "key21": "24C1hxELCvD4EwJQuUq3JQ9HE9bkb1RVkajsL8TcN8tfRAQRN5MgdPduyFVsxzt71RymB2c4KySUHTyWcsGaT9bc",
  "key22": "3hNBbLCsVHYzhdyQE7ikQ9yMULamtkykkSztxKwG3znYSxwfrtLAEQdCNdMf98M3Ha97vgoQCNFK4pyoanT2QWBX",
  "key23": "4pTk2N5ix1Wgd7iXNfPaMnrdGS7Ev1U4K9KwkhMwctFtkVa7DgxUtXo4grupo7xWrBYSUaXphkrdmgJaKJSRDtPL",
  "key24": "2p9g3Nv4D4u9mDJr3itfecXWNYDuECP7EhWSkFFjVeAT1rDeNXt3cSbFhMqEn3oeSbnisDgcwksZWZJRhpYwrPND",
  "key25": "3a7GGhSANZYehs8TYmjLsejxuqEtjnGsYVcT8PNj1MLQWF5VbR3eWzfXTfnBPFQhxYEm9Fb3kHVp58HWw4GGcHAm",
  "key26": "34iVyiemTktpWeaBhwf3VK864BEHv17uYc85cGw1cWLzjoBdNYdfGzstVfjfbUFZ73F1wCoUK9MX2roYxwH7JNa2",
  "key27": "4eFEnvz5VgFYroLm72THfNrX97UmvENQQnBUfXxEnwpXrjjcLax5ZSgrCSWyxfmEAFYbQ6oQBaw2VPN9rAmQHe3e",
  "key28": "4uNvRt5j2bATnQeuy9QiLNrrGZC9QhU8ppTuX3z4u7KpToZgyC8piw74smni4sSQSpmXZMecc242by2LftoahohZ",
  "key29": "mxN7dgxTnA4JMJgsT5XJKGB1xqVegTgetYdN7xg319PaEzc6s4B5sXurqB3yAAZyeswKiQpTLVYMnhx7FN21xqH",
  "key30": "44UZoRqzT4SbRyxUpN586NBDZGyRr1VCRKVrUYEuAVqm7au1qfSz1egPmL1aFHWtWDbQFE6HgXiMUHBgm9dy85PQ",
  "key31": "4gpSngbweUxLtG8PGyNq5xT5PQ1oExGFwcuoigPwmJQyJqnMLeAtx3yLA7tYKtUPoFiyxZrDypm8u1AXk3Y5TpWm"
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
