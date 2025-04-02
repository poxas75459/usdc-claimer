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
    "4TbuRmGp6u7cpwjjZCbM9ASGyibV7C6BRDSVLyQ2sjwaCzUB2yPs7HAr9npKLUQPmqSNAs1UzbQ6xP8NhL57dDVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UxERN1CzsdLGdNh45AK7zDGJ3KYvrnvPK3LjLqCtDFSg1E9Q6fyEn1jutB6QqL5NNBPsTR5i5oYe7rVsBBDHVht",
  "key1": "vE6iL2quELvdjhkNs63xNoH7pWN7wDTtKqpHewhDAqJwM1zUee6S8gadufZBkGFYysX5RrQfVRUz4QWfC97nqtU",
  "key2": "3wPU6b6aFAhjhHcErTXq4AqUHVGf8CkSccX1B2117skgzGZ6qU2uJknf9qxBhL8kVjFLy8hdFejoEMe6uvhnKVUe",
  "key3": "vs6aDAPoBdYYpyUmknBoe8Ea6xQ1q8qhda93nLJmoF5LUU3BibD8fTjnDfyKhWEq12t1wSug1oULu2Lu4UPjenA",
  "key4": "4kkAFCkDnGmGdcg3tcePzrKkF8jMo2EfYU2mjf3EHnFs6T9LiJ6HPnhysMzpJUSW7BZ1RmP5u7aJdxKjjhWwsuhk",
  "key5": "4iAjxoFH6u5XkoAXhqS2HNhVzEddTxwBw4qtRDoxtFMDHDAvcWtEB4xtgzdT5EsVv7K6VifedzNuExiikMRhguPr",
  "key6": "3J5UjrK7imJmE4PEKd4BF3PrZNUekiVVWwUkhDEkdM1NVLmuGEL311bervzP5Ucsk3E5bMBCVH7TSzPhWqsamVFm",
  "key7": "44ZAxkVy3nVncN5ZqfgVEsMPFLTGjMJUhQWsqJd6roq2xgLBPQhNe9xuKawpTSTyHYAQnqUeqCbHGGkCqbvutTg7",
  "key8": "iavuPXjqR3U2jaYdhQx8qunaYjzmEV16RRpXcWWLahJsrvUdXKugiR2xd2m1e1yG1adCCXrk6XuBoYcsgfw4L9h",
  "key9": "5cJa5ZhWz6wZaJXExGGnZqmW4fTwu3SmKvy3hpUrVtBGHNJXcasGbGip1LoxwUz7xdXqgQC1hKWifVHt8EtJqLfE",
  "key10": "3M9PvHTCRfkWyZWvZFZsimeJU57tM7nn7P6qpCnRd2zQy3e9hDJPbmrwYxt4zQ3pQVyJr1WirsVuBdbG4Ayg1Jxg",
  "key11": "5RvDeo1dtFzn8FAViwpX9vKzi9jJ89idZVsNtSopWZeAauc23cEJvq8rTRjjet3CiA9sXdiR2gfN2F4fxtN1EXhn",
  "key12": "5HL5D1TM4GQLpTuYeTZrqPTXGThcRwyr15xh2WLJnFWvuuYYef7YrqsGBi9tEBZNFGGpaf1MqjRqgsMzQP2FTGrS",
  "key13": "21CQVrrt94GdPVtKa5tsfsAYLFf2QkJqmzJh86zH5yc9gSWFyx6SgxrSMVhHtoj97vrkumdgqJTNgtrYJdNzRKGa",
  "key14": "5sQoEDgC1z4nZW4bQDxxpVJPLBKsuebGXokrS73BZynVfw8jXsQunz9FPPeFP4gcMz4B4fbjRpc7qSmsXWGq5HQR",
  "key15": "3Xqrq2k76GkPyd4qcJKMNkLJ43L2kapc6uYYQvJaYAPvKP2vADmt9DXSjQcWjEUvDSeCsd6UBxXt6axeK3uHzrcz",
  "key16": "f2YFdb4yW7u7ibUKMSSmqxnG5qaB5Svco6SDLbjRg7tZC4ESvvF3hnD6nVRbFrXNm7wtG6MAer7BnDCAtNvFZWG",
  "key17": "44XjaXTS389AtFwU9URGxEey2rPLquhUrSg2hvLbfB4P2CNJcfDX5we3JkSCUgXQzMx6jPGRv6rc8jeFxUivkYAc",
  "key18": "3YBUCh15ihiFvTRD3HpKF8hSC1V1fh8BhhPPotkgmbf51q28Au4VC2ufFkiDah8uTr6cocPDRX336a6jqj3vXar7",
  "key19": "4u65iPDLUby8MgkHT3sXX9oDEQx6ShUN6Tw6oxUiaPqgvEuxJfFcwTyN9BULjrB2jdDkimZ8F9jS3ofCPtbXqUZr",
  "key20": "3K1W4DSteCDyncndwP9u6s9EWJxLx3mhuQPAXtSq3NbwECw4t83hJdVUheCf5QB6A2PtXeBon4YBWffmhG5Tr3fb",
  "key21": "4wyee1bnijB7cv8yQCdxvbty7exnmtcUNVs8dMzGs8aeH6LFL3mGNizGCAS3HvLW4zk6PxhbwtCiUTHtFsfYU4dG",
  "key22": "58hLaEs6UtDPzz5xeHYqtunmpcC6aCLKMdL2RNoxGGGcEFyGgzHBnAdu2xY15cTJU6kYL25UPpXAJpbFyZwFnJQS",
  "key23": "2kPBDiJpG1GU1sHVGm3MtDLZXnpeM4tAGDHBfmUSoRmMQEWNZJma187s9ctfxtrmpCj7ovyFaWmSUrhnjKUArnwS",
  "key24": "5PWCvCaxFwMzeZBcUjYENgpouo7qrJWx6sjcNbpnyN1fRDBNp4bgK2FyTBzrpdThCEftC2Fux71z5aJhfCwj8egq",
  "key25": "2Dkcekbfg4nf9a14xYVbhJCgZL5mVM9dgijtM1Arsi7iMCiVLFMFPbsifrNKVEvW31aPgAy1GHx5kWXrPXkDQmCY",
  "key26": "4nLYZjW8uSZUVkRWSKEhQopue1qJac8qMvbSLJ6j4EX8tGmcQ9SjimFFKxp4pPiPRhh4Km2Ck4CKLd1Rfv11VUaA"
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
