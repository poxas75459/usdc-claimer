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
    "4GjRzmAhvoprgm7s1U3nvxtYmrBmZprt3uYyCVYmmA6ZGtSfZ7Yf96MVxSg4x1zrcp2xxcgrfkjQ7GACXuBL2W9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24PispxQGjLyPpGvBnX9jw2w1bvh91RhMdjza4CzDgGEnbjqv5GqMbniGRmWhAk4LhtLrVGwgGDDsDqhMrdo49b1",
  "key1": "3XojPSNxuxprkDn1Uivi9qsvH5LDVsmqgw8oz623u2Gv83SVoxjYYvKqVrPoPZBsmpzH7b7MMJdxAG9gYVYsefFY",
  "key2": "1eU2Jwy6VL6jHJT4RbJ7jNgRCjwt62KpiLMrrHYDWuTqgYS59SyVxNxiftXKDApp6uYnEZawcQZyeRKmPkk3wgm",
  "key3": "5YwvaUWR6ijqw4ok5fLpNA4V39g2HsjZkepgNbDLEwtapUTixuX9EMsGJgGXu5j96A5Y8mRVm45Rcw4Mzo1sxtW7",
  "key4": "4snzStnrhCA13ab985NdZeSbMvUb2pK22hvSuRQtoNx61kyUvT87HcwtUDKuMtKUu3Sm9EhL6LNP7BArCFspL4La",
  "key5": "4nCpF222Vrqix5yjms21qqD7DWAF9Wbu2SLG5tjTCYcga5U6a5ptBkWcTQiVyNLMyoS9nxTZTsGaXkonDgbn587G",
  "key6": "5kphCyRmvt3R3goNV2EpYN9f61ArZovoTd1toCfU2ZHqpdLJLgvq5cLhYr81rf516SWHTDBmaQLBdW8WcYWWfCv7",
  "key7": "3Xu2EFbzeZNYYWPBsXNiVsxa1ti4tFvZLUGW9mWtz1JW6iWkQ7gv48W27ZU6y94qumBB6hJyE4U6cKCZDsdyPrwS",
  "key8": "zTAaRP4By4C2MJLbU2QbiFWJH2hLhDmCYMZyJeRnZ9pwCrJiozXcRdEkHqgxEW299Kjms7cNsUvCmWQ6Le93BUv",
  "key9": "4Lgj1HZPNx8CRVao1WvEHPxALxBzukgUrZGpAxafLmt732CVmEMh759nvTACJUEvTbHAY3dxVpyGKFEL4bX5XtFn",
  "key10": "671x3WoNz78J5GuFAe4FhtGjrbZ67se5RsstqXX8RpYcvimDewYqdrt7fRrJDtkAepaaH1U5wQZwDDwoF8mVchaw",
  "key11": "3pBcN22zmPhTAkNr2TEnQXDbuCArtQ4BcqrgN3c1i4dLRd56ZCR8SYbgYg2qNuKK46hzBUGWXnsbvzqYEvphCxJW",
  "key12": "2t4oqKEkrp5WebFmSxjVMm6XpE1e3K1YkdtDT4F5zNAGS3sX43qmiJb7DcNioyACo97mLWDkJvmFgocxq4xVi5RL",
  "key13": "5TaUDKeXWaq2KkAKXmtnekDt7DjRfGmxDt5qsGYWbBSANDqQ2Pmtj5YETCEFQCfZZe4U196vkjijQWJiiTUvHVmM",
  "key14": "611GvYocJ5fq43zMYsfFSVQN3CSCL9YmWJQUi9UJFmxDe2xLVpsVzqUiZy6MH7pJNQiQWi7sDMaZ1Knd7CQs7xEa",
  "key15": "3wqEfY7Kj85hp8wZuN4qNF13j9P1zqXxF5pJvoiLn4g7jqydxXf5myTJdwuFWot9SArDXjAWDbY2ow5vtiZbKRG1",
  "key16": "17bmHALVALTPptQLVrVxN4pHPpqBe7M5QBPqEXSiDG8CKqZ8mDjZkqXKSKegkXAfFZm8do6hJ6weixDX9WvKGHn",
  "key17": "2teePrkPLAPraZctDuFyVHnPkrTmZBt8cXeS7xqtXpmuY8fDBySJyysC4Wyqqk5GLQ7byX7ukU9TQi5HPoGnpHtE",
  "key18": "4nADJ2mVduAMfjbMb1G2EbCKKVB151gyhGdBF96vjBDtiMsaNpr9aH35na3nzpCiZGNFQ2fTte1vr4wAPpjVijka",
  "key19": "3DsTEyamVhzHksXfYB8R2yqYwFPLpyna52Tyi5p2TKCmLksBBiUSqE5F3gVPvjuhfaNAtgNwCt1H3hmr69crjE7Q",
  "key20": "2TensGj6HawrTiHBnDdXmRnJL6rQ3WdHusc5FQb5bvQFVcVfQxVrcbKu45VNEiyK7vTF3kxxCtcWRFyfTs5sbNMd",
  "key21": "YWvDKNQxqf8CngP8mnTdGEmm87eBCzNFraESN8qKzCE3uxviH1roDqzorA5WjkkfPP4ThpKKCA9KoNDiJppi6g5",
  "key22": "4K92zWP4cqjVLrFXhGawsw9xHx4h1L4b9phhRjH6aLUu873Fv5peS3g9PjixoNq697Nz26dXStsKCr5JdduUzrYY",
  "key23": "4ZSPWy8cV9tCsg67GrULGkef1dnWHLaFx1STx3d2xLB7jwQ1kAuX8Yo4WWam5S1HJKGW3VPrw5fDyzE87qdqY9B7",
  "key24": "gVWgnnPjG9T49Pdtjhy6xztKegb5EDSXa6eoj94mKEvNUNwWQz9eBMkB5mHq8RGxRypxPzYZHLoeDPEnkPhb3Si",
  "key25": "5FMMhcfA9EiSipQ6fYZiLzcyyJyvqzzrUDWiAG8hGzJTvyUE2VrXE9uaU485aYqtSAZvsHCvk1B7yaqcNpttLcgA",
  "key26": "2Gf9sekGpbA1osKyVPaM7RXT4KBzbfujQMpJN795UfFRB3MgSe9G9R7fZa4xyUKDSn4Zk3s5SHCVq8GqUdRTMdS",
  "key27": "5c1KTqwXZ7EoZ8FR8YqFbboWe7awW8XKt7WjnWtqU5HsrCDqQzRszrjBYxELeM25KqkY4Vyhdt5LyhhDbgRhB746",
  "key28": "4VZzZmgS18t1MpN5Set3dLPPinh9NoaETLZeQsd8qpZYep2dNND7Cn3fmEsCYbdSYkUt7Y39HmSYiSR9WtCVychc",
  "key29": "4QtFE94NUb2p31QowKeBPNbPfi8wy75pcLJnpTFtSUmVn8oF4dEzqRmkgQnixq4D4FwygWyzEVH2uPvKW6D6jhfg",
  "key30": "5uRLeV9GfccpTqQYxRZq55e6RzRb9SMvNsoSHTigZmznFo18NvjcujAwdcvfnj5uuL7jQpfPYGgEADkqWUaWPXKe",
  "key31": "5Cj66FM15LzAdqeYyC8zNRVWHkruT6DwFPBZrQrbxxXfdKJXp8zVFqYQK2ChGYKzzntCMpVD3xcRR4MhPZUaGHLV",
  "key32": "2FeCUoG2WzTcNx6BPCjSk8uFU1Y5kmNYap3Z5VhS4ev43zLqT5unoFnx9PiZtRWJKaQw6vDzuhtecNh4ri9WYv6Z",
  "key33": "2ADPZDtgzPpihyDUZscLSGBEZigjRfkVbgx5gmpK5xJZus9DrXcap38yc2oSvhkSiC7YShvKEgfNsNZRJYL9Tkbq"
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
