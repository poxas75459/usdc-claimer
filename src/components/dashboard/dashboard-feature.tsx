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
    "5VfmJV1wRF9UWMZxSmjiq2qfR12oS9VCGaNwiG4VsK5VNWpv41dhuGuucXTjmrYCZWinbxLPDjWSALYxKVFFjT99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u8jYG7jzEH9Maed42EVYghcFgpRJhvkgiUoNcLstZmBkwdyrvs3XDJBW87kcSfuN1svvct79aD143d6tt5N2Tn",
  "key1": "42YrzNntsgPMVH5UYBE9LTJ4nhjdCPWn7Fqk1qRhAx97qsYGbVH4H74hxrT1Nf8N6cbVhQBuSLht3nY5uJm62Hgs",
  "key2": "89n8uURA6EecxHjDgX5jiQq8kvbGUoir4t4WT9H5Awx59Q7EPexMieudeLfozehdwg7uuH82o47n36vcAuhc4yj",
  "key3": "3wrDmSRrtw8UE2wq1W44BhrwWmsm8SYoC3NEGzS8zHfMJk4rKTXRp2XbHgQKYvAJpTh359omynzxhFTdjaCcjqxh",
  "key4": "5VQR5iixhz5cWxjx19JXToud5ULZKajVnKeXfJ3PTp6LV2bYXY1i8deaQXW5xAxGPkX59A6tNjnHvYbPGf1nxp4U",
  "key5": "2B5TwvfqvUqitCjycG21cUFdaPw8BMBEUdw3yeNCxcGDrnyyQoRzTtu2cnzPj4Q3yW9ZAN5LynnGJZF633ajsa6e",
  "key6": "2ZXAf4adaZ8gZZQ2jJNV96r6wKDNeLbyN5qVR7Gz8hDHiZnAZfex5bjr5FVBReubXY5dUNFMqo3Memie15kjC3rs",
  "key7": "45KW8jpzZS6k2PR5oUSzoKLRVrhDGihGnpJfkbnnfn7FGKdXmbby3RNCLXcSRbg3RCRiyfomFkjnXjAGKYdiZyZ",
  "key8": "4ShJDbkPVFGs6hwjPMYcLKVCuSiJi8xJHEdUHczVkXJoZqzr6g18RzjgjeDDfApsrb9GTF2Uz27kgSWamVh62f1Z",
  "key9": "5Uc2VJk4H3uqjbjLtdp21eaXhpWCrj4Zpc3yrcbFyAPGbRmoah1D9tVUtYk6jCsTx3WVfr9v6fWjEdL2bBUVgMwR",
  "key10": "65qnANJaT1GdLzgEfm58mj92nFnBf2CYaXvmAoWC6cvisubfeVmbJtaN3qEDuSL7xxjtsSbnFWSt7QTWR9mJzY2f",
  "key11": "4XuMba926duE6PQCnngbUiSiw8E3LmrCxREA6DcjGkcZCMCb2CQSYQ4M6qJU9QgQWKV9yTBP7jctDqSqG1rVC5Jj",
  "key12": "GkUinvZmviUBPm28cnJ6vxHqSM4ZaejP7xVbtg6sg3yovGoybC97qL9HN4HuGHFUsekNvrLC6MbWh7FsqH92T2o",
  "key13": "312Cj7vDh6VExwfQgChfLMCy48P8QqT3VXjAYZSnrSocLiTESqXp1vBHKTKDfav7LUWh7mbHWXuGwyihyNedBLLk",
  "key14": "2hoL7hLTNMKA2JybYNZJJ448y98KPovfsNdKWbgYdXydBzNcnbcx1gHNxHYkUw5Dbn6PA1Aae7g5qqvqaUuadtTD",
  "key15": "3XVZhUXMDcPmH3yfbQ8eKB8XByugzsepMFtMP2WxVVbJZLzZ9iE7PkmhcHSfDJVdwXmiSx3ybszLbuC1mqVyeAVv",
  "key16": "5dg9UVJcATnijHsAd6j3pqZiMvHw2Nc7Xh2vb9Jjj1odgY598FWRte2xSHzpFGXb4MYToVQAVvK3zzxNyesfxap6",
  "key17": "xB8kwCAsFEDpHCpsNf9EdfoDiwz6y2rvvKMnkEbLPgsdysZnaKCiWZTY24arctsdDz1GYL6pCboFPpGUj7gXCG8",
  "key18": "yYzHQeLj7V1oFtdmUyucDgkk5Cr4tKs7kbwKBLcwMqLqh3oCfapTA6yUhwE3diWwTLgrsGHcUPhgWBP9W46iZUc",
  "key19": "4ys5v4i1VMYj5wHuqp8qS8CdGM27zTrKkKHoHtjLxnHYM5QzZfkyaRczdYYrFs6HWwZuStjYV7iKDfaWP4NxEBDw",
  "key20": "5LXbRRdURksNdSR6gLX8N93ozGMcB3qNwHCE2hRccJDLyXQofSxGgSAyce9RTiBJKiNiJzX94wq4AYAsm2jAJ2Py",
  "key21": "gV7fo6usU1DNzjLeVak9j6RASvxWzk2Gqiu9P7uVza97txLTnytJDCcyBWMkgPrmS88L6JNDwBpQEhRnANaTj2N",
  "key22": "3GZZXc33MWXuPntCv1ALEc2xQwFH9PExqaj2YrMbawm8WCBzsym2HWJ4X9uymXsdTSNtCwbCjXKm1tcS6MYntjqM",
  "key23": "5TsfQFtDP36cTcW2Zhg6KWrUkWSG6HM515XMd8xD42MiPULqM1PBqgDVoQHhQ9xZCYSLPhAMECNkb7eyf97jDcoX",
  "key24": "4DNHEdbakGSGrGxcVV9gWG1A4tVdU5Utsdxxv67aFtcTb3fg3ZxxB43FnR7KGSp1BEFscSbq5zWqNMcGGjS4Jmpb"
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
