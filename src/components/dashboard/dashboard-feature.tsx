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
    "3gRuYGrArXwKXaQ6Lq8NkB5ePrwvgJtdMzPM8e8KKfJEzbGMpFrkxZj5aGn5AU6F1NdnFJ7LC4n9Z4QGUhH61o5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KPTzMAiCU1M4TBomkNWryLvx4XVvnvpnjkdEifUvkeVNWm6xz9AZfYKYCYvbYNedNKoHvEdH5qqme961Eapec7h",
  "key1": "3o27DYBWoULryJXLUNRkB4gZLJToRg5tXxZC9LhNJL1KGvVmCgPi8tWgRg6h7f6NFebBtTwoDY7q6eajx4LhF2sY",
  "key2": "3mCU6M1RqYouR1xQwkGP9Hg9pT9LdCQFRmTUmNhwG6vTafieUZ2nt3PfkiumN6Fs62BvEgGbnAVrdDDzjNFg41Z",
  "key3": "5CzSX8VvgVJamtcVAwcyFydDRUwTvHvKkpoqS7SaUXd1ehuhvbUmSQzdcKswfJKtRA9fd4tAFXDH1fHz6Ywhr4YM",
  "key4": "5igGiLX5PBuWVMS1XPbTju6AS8imRFXB1gsA4yLVzNJVESxi1BFAKQu8rm6CoZhn63Cu3Ct7xVK1HD7YUTSVwM3U",
  "key5": "4izArV3VQ1ttYKS2EQFS7b4VxXBivLY9m9D3KSKh7a2bwsvHWjDcQ4PkhobaxHMFoaR4bagUCdxRe9mjcMsTYFGm",
  "key6": "uJhWX4XHZjZUYyCDbum4P3b6BzddNXFKzTiB8GQj84uZwQ67vBVbx6KXTRFnkc6LrqSsFXkkaQw2auvH5EC7s9A",
  "key7": "3PRsMv2oNPp7E2Q3Kv4Fe7ZdjMNobLxPxT7weQwGHgXTTsN338TPDjJVzLunCA2z3ANaWCeN7zGFJTScKp7fteXV",
  "key8": "5wfcgcPR5TEzAQPeHn77Ygojy4nhVED6mGRHsNskwkGzDFV1PH6Ls2GrCPVYWfDWZ7NZW6UPusK5DHhUe4C4tD7h",
  "key9": "2a4DQyoTYfqaj5shK2hiqbp9hB3tJpDDWRUnweoRS3jZ4EGxxAmZ9CoJRg5LQqiPUvpD9ppygtgHizV86SUeuNZM",
  "key10": "3wofxa2SHjMHgw6cNHTdmLqsMy4BRb2YNcK6v6t3RzaZeFYidnGaCBNF38ygJ75X38iQZRktbCgdNMaTrH3AcCa3",
  "key11": "5p1T3ZUJ92UQtyUDUG2sUyWSvND5kiEBH1WRV2Uxxs9ASQBCtjzA7ScYUnWDuaQDYKVRNnxEDTHaXX5pskEHnfBc",
  "key12": "5jy9NGYewMBvFAHAPykoyE4HV51CAeuMoNCQJSSCtDAGo27AvrFzkJysUD8iGqKPnbjwip1nLwkwERRRoVjbkq1m",
  "key13": "nNjXgTwCuUfhX36K7rDKDXvRyH3DNBH6ttTt68joY5G5mKbX7zKRUEMiPK3SBbVykUoE7Wu2zTvSBi4ev7bASqz",
  "key14": "64kPWxsMgDbDCwJeuYrodtAA8BRDPhzb2gRnsJEozB2SLEz1Eypga7btAQMDemv79FzwkqcSELUjQzWJej34h4KT",
  "key15": "2iQTp58TeoL2khUM2wRXLG53ZxjekC6kxoHi36Hpyk8qvBhF84Ym3iGDrnXzphaRHm31YRSxrx3A4i3x9gAzq2Hs",
  "key16": "DoeFcQMakEBMKdqfKXfT7bpghUZ1ZehWL2vYHC7ynNn51KfbwTHSvGrWUzRGBqbdoMwp38881TvCHYtYg8vW1SM",
  "key17": "tFQxaVy1i31h43eboJVkyLVjrCVqwcGWdRctAZkN5SyBhvCCWPi2RJWwNWwTKwEUyWfkZRSfwjp6r3HhfCUP1vU",
  "key18": "2pPfsUv77kgKtvdwKEy2Bbo3ytfbGwtJC7JiAhi7syQqaxVqdAfeNePyeQLPcX4uC57NhBawu8YAaB2oPeEdJBaE",
  "key19": "3vkGqXNujoGDi96MutjwD5PQE6qjG1mpWYmQcVVmFHQCoM2dRa1EShfxBR839waYyEmKzH94VDYYBwvVy9CYo4vd",
  "key20": "4Pxnph81cNRj1uurmxsAVig557qGkCnn4FFyCqSR5qrAXUmDuYgfQHfhxNh5F1QmKCFuz2FQ3TPRorUcb7rs9zB4",
  "key21": "4K31NXWV6QahEGPVRkV7a7LTUmTGjUbKwKZsUApgBsadLXfMRQFmQNBLQTksJNeVynBJLaNL5EK5kh6Eat9acGyW",
  "key22": "fsqcxqzacy3XR7CfjywhnTFCrbuD7fAqZEBN2H1nE92nQ2y6TuY7z77NyqFUjhKdSKK8VqGxvWf4cSVfKfL3uPJ",
  "key23": "4twWzMThHwgAxkCKrqdtm6Q6YcoDcKBRtYF4GzE1qihUL9jmfrTa1S1C37jfVBR2NaQqcsBGENQ5WZmJHYtq6x4a",
  "key24": "4geEoiyu379LzA8o8vf9vfqfnKKmNMEMWAYqpGoGKZnpnziteuEVAc2ijoLF3MyuqDb1HNjfh83nc6tRJTKyWQ3K",
  "key25": "4gpU8Y7FgTU57VZBaUqgy4dT4TGtNwSbo5xScuTbDZwm3JBp5QDukJiPiJb3pyHEZ7WYJPbdQxEx432UQYCGd7aa",
  "key26": "X75sepYCspxqjYyNemU3NJPQxrQ8EHX31SEmWss2T9zV3bPATBdBrwCiU29Bw2HJrE9BQ56H5Z8hk6uuXhxewH1",
  "key27": "3axU7QNU8En26VYkJVEA8UZAqQshV8H4afrFxjo5t8BfXbS9pSHTutHEahS4NT7HjVWz8tNEYjFXZ89ucXrKcPMc",
  "key28": "5mFTeSLZurc9ZqRmv7SzhjpfbgmGeQb951C18SwEzk448XtpXKut3Zw1da1EjESyUzFa98CumDoxKRspiQcDxuzR",
  "key29": "3kFtDsdUgCXRyKHwTfgUpsUPS9dsfy4JdAcs5fAaDaFQEvvth3cnwHwsTEQrnCRwmL8iaLR6EuWK8H7MMjyQwwBF",
  "key30": "2GCKTQNonjfPsaoC1FXPPzGtHtDP62jcyEgPdc3FDRHdJ7G7ataQ42g9xSodqxvW9S8Qr3tEXmykw8HjixEwPVRg",
  "key31": "5ZCrQQNkSUARRq646b43wZRiKg3QRZRATZ8XgdTkfzTrsx7VSJr1KSV5qdRjJmo1UHc4MaHeA1LR6HfeGv8SDmGZ",
  "key32": "2qtZqxGNXafVvLkNm78E5vwucDMgDHQguHpPXDRUohH8iAzNrNktHUqtYjnPL1D5ZxMmjDt5Mj7ByKC3CYcs5zfk",
  "key33": "4EWsisGdkfEjEhjFbDJymHKZQJi1ZogR8HEuHFyN3RgNYzgqFvx9yHizpX3bAQTqsyRorbQFJaaaiAPWm4F6TRZd",
  "key34": "4x6Mo3RLNVD7dFhpY9YAnshhVnnqoEqfoBZkWKb4JD6Z5ej4sPBk5mC9JmnEUKVMoooLqVMoL7mJa12w62uapvbv",
  "key35": "2rLS27QkzZzSUGNXFw7qMRHTn8Eioi6jm6hGpuQt6qot8icGuP8v2mccEAnQBmRgyckcSSk26aYK2k1io8ixvrqU",
  "key36": "32Mj9dkVeArJ955io54xvkBjckK1u8JJcyGcPQ7cD9RzTqRAb6XmX7WYqSqp1ksVUrwCWdXCRJuQvgL8pnwkUq9Y"
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
