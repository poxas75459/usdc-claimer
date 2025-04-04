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
    "3MrQmB5mNDjjdDFJqBKtfS4rvQqnvqS6uoArvxdzw7JCfxJBg61ALBNnhG8ZWsEdEQ1wUDYw8Ku6trPhRdfnk3tx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nBjCZjPEkUE9Bb9DnB6BkbGPMhuY7XeeJPHmSfm2g4mFUm7zKZF7E8D6ovrBmEvjMorjVsfz69HeZr3PFdy9vCg",
  "key1": "CVUyvtTsaaF2WK6dZG1pehJBSarKV7BbeaTWbR7DYgaNiLhWzXcySprata5SpDwPppmqkJwSfePXbTQ3sZiRJSr",
  "key2": "24HCGfc9cgfDeyu21vATC4G3N2eMKuc332gS6EgbZDEUtB9dopKCYkuJCYoHNgSwwJrnY4QnEKiSBqiBoLHvCzBF",
  "key3": "2VVJ2ES1SPQ8ipGQpP5FJnezCHLd4g71yaWdYkX3jkh4bkEoh3NqNKi2JqCPay794gCeoLqtQAbHiNr9cde7AaXc",
  "key4": "1hqioDodrw93UvZoZD5Py8yHpmu9okPi6z42jjFucJcDYHXnpULqXanaVnqq2dgwPvSJHBtwz2aoiNFmbJyi7vA",
  "key5": "qeR7HaUjebT3bFSYvAWus3Y2tv59uQ5Z7Su17nTGq6jgwWQ2PSEb3XBNaKcDtc7A7zTS3BV6vi2NN7fyu2pJd5p",
  "key6": "2pv5MBMq3vHL9147H3pj53gZCq3in17hY8gHMjd8bmdnd6M8r7pk2L1A78t9FTQw4BxxJYqEf8XXSetx7C6UjSiL",
  "key7": "4DERyrNYPWC9pkgatHzThCo4CfndsvJtHkE9Wvu1LRDu9RZ6am15tucNpJu1NocXTjaEPzd3Ah6skGtaHDk49deY",
  "key8": "43PT7uUQRSsA48dBrRMABGpUSvWyR6Lio1VKorLSK7T6Y6ksNvYdNKYYXVE5CmEg7pYpvbpkEgs41JxEVNH7oJ9E",
  "key9": "jz9wj1rxYvjDKjRpBpCKsW1JZmpFyN39a4d5EJtE9vN2oLfFL4z7P1vbiiGuyJDpUVkp4ZAX4gtua69qvNUoKFD",
  "key10": "5znZJYjLGLfTJJ617MWas6uH1pCBd5vgsmYDvdUr2RNqZpDhurVqxfAd3i5dpVcWFGjb5LC9t8HTQn6SC1XS2Zh4",
  "key11": "5qbhBPHtwA8FiG6KfRgxdZPfAZgzZjNSnPWt9StwQWLrQatizuoTgqf9DfvVvHJbWRm2c9FZS7Ghiwhcsr1GYZvU",
  "key12": "43SD7f4QbssKqYcSkipBSFNk69MPSJ7pefUMSSkeRUbAGbAR7oNYrEtvCyxvbZKVWsU5MkMWhSNtQv5fHB5dkKtJ",
  "key13": "42N3tsxTG5Yz9GqD9QvqfNXfV8fcW3h7HB4V6pbN421KucH6Qm2jvUaX8tE54AdPA2w5BeqVwRErwah1UtXNEKa",
  "key14": "4unogWwvfNjfXWEPGq9xDeFtajKNpMmDDJ43RTrf1i7hwiLNs4NXuaSZXGg1JaGE488Z4euuABWRPY9hagXvrkwC",
  "key15": "3oYjvoAXzowNeKyXvDhmTqeVmUWH2ZY5Am3MpRXasmFufoPF3BSygXSnkhcvFrU9j78MT4qbkNtc3UdoUGoWGEGW",
  "key16": "q772wKpvB7EUDkPH8wpcqKz6WLj58PkKTzdMJjYxPhtZpAwsXeVmum7tWL5NV4dYsgBp3Ef4qe7cffqtQyKyPjs",
  "key17": "2gq9Em9LAEszCHrA1JVRnu67hBAjkfS9h7kauaKq4eozS5vZ7SquCN7tDZEKt7SZ1cxW9zqTrQHzfzZgawgUcFCo",
  "key18": "2TXuVegd5A8jf6jotrCCXNFzvb61m1Psu7jjjMsNSNTbLASi1yJ5SrAZRnn6xve2FbcRbfiNnDdaSHRrcAWDBV9B",
  "key19": "h5h1x5UjrQv9ySY783GHygtkHd4mtfKvSy2ChyDhTA9BuAswCuDrvH8xsV612cwTFHuBL3x2xAqz3n4Ea4D2nfg",
  "key20": "5175cszTN7VuoNr8PLk9K7cUbvjCwToww4QHdQo2w3G7SAwLrgRsz1sLwZYUrU1XSv4B9hBvmbFFjyaUukqgwHkT",
  "key21": "HYDugujgBPjpWHA17joy1Mk61AhmRxQWnV1E4DLaCuCDHgUzz1HwVXJdHMDmDtFiiu1xtR6QXtMca9CVrCfNgwm",
  "key22": "2tXT9p4i3vzm84cDw6RdxziTouqY863uuBEpjqZkYiVSDmMWPoFmCR68WiruaTYZG2dwbaLMJNJ462f6S2bgFnZu",
  "key23": "2kda4yQps1euj1J7WcMV8NA4qp9dSGQek1erBpeyDuBFpEG5b3MafBo3YJqnPZX94XT5xSc1oyfv6Zn2aTrYUQe4",
  "key24": "2VW1NvX1czjvt5FRbpUnQvv69xs3T9iwP1omAjhPDJfPLtaRe4pf9b2u8ty6Gsy1xCucWdkiwFi4AoXRNsogpGjn"
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
