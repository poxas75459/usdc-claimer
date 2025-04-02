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
    "5cwHk4pd5AA6LYMxCdv8UTKzaFeDhJKXSpw5BG5Au1WrVTL3ZwpDLnAXXqdeVeVsTH9eGd4DQqi5rgJUMnELQzwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tadi7RYJ3RfV1fn1acAsi5Lb5fQh5e8j6hRqFLfpJdtt72srLnHhnmRNPMLWKdTZgbR3PU92cXyu6rV3vVC69Bb",
  "key1": "2uJAM1M3aPbPGqgHrP5gYYwLLYyL5LuoZs53PqN1pSYSqaJfGDbyL7B2AayxzusRfaCcK2fFYRt9uEtzd9zSp8BH",
  "key2": "2ht97vh7cF3mBWMiYrtHxeJkZ9Wek3xE8C9VURQHz9YUpxr6C6e8ntqJiLs47EbauXs4ucp2Svi6PSvRunZfW28A",
  "key3": "46tkmV9yHsR9ucMhLhUpD9rDPF4EkCJJRDViBNS2WLNzUuez6XG7i4izdoEKP2a2j2rb2Yqz17Nn3w2mvDQSgGhv",
  "key4": "5ax62wqNRKPBY2jvm49pk6nnJ5KMMWEsQ7siCfRmgVd4jhaF7gEN13DR5ChuA4DjqmwF5Bt96GGyQpq1aCx56b6R",
  "key5": "D2jT8ZRoj3cPkKSRYEkqex8bpuHVA17aXLtkPKRFrSkEe2YkHwzYynSfL8N4UqFAzutgMGAzaAS89sBkYamVdeu",
  "key6": "2nJRzDwPzvXBQoeyCeeEseTPaPC2QmQ458SVXCb9kTiU3J9VRNUBWwS8TVHvWHG36RyFa4wRidfGCfWi36Bn7PwW",
  "key7": "SDYTQBoQEeT8CJQVpht8DeAL2Bo8GWLumf4anvFwCRWMVEU92qi8NBbxc6vgkCWpKLLXoPHfc8gb717sJK2Mfn5",
  "key8": "2Ekb9hkF2PKmqUptXT6nAUAj7Wedh1GKkd7Gg92xvLKNzndQRiEE4M9Wu5eJbmAVozRXZem2ZtTD9UdQVPqnHX7b",
  "key9": "4nxBs5vkfbYp5C4p41LgGohFbqrfSkryE9Xgj8PjYtCv459mwH4KgBEddNLEjWmyNDeHgVV99dkJJ4dn5FwCnncH",
  "key10": "4LtbsSmFVaMxskYHzjLjTXp5WFMZ9bmvinVnpya1GLVyfaCgKg5mHAJMyxYPV4QWBcufJ9Vwj9VYcmtuNdoJTFur",
  "key11": "4EpCxARZxvsxagGeBQgQa96E8iLoang3qwa9C13AP1iTMedA5QpF5WtBHw3mofZrjdgw9CFeWbBeuhqqwYTh4Zpe",
  "key12": "2LdRJ9mxSy3udrjjWniipWxoxmVuLnqpwBkxXmACac5gD18hMkr85mjnDFcSNTH4t1Lj4tUb45PPsKvJzTskMRuV",
  "key13": "4SgSrcvATeaoGAmrqpWhr9SsEGtQiK1TCRXwvPTr2RQ8CLYHNWdzzKiKjeyPvbxGteHoG6Mq7oXoaMyYgGZ8teYa",
  "key14": "5daJwiXqqdSSri1h7FP74YbVjZy1vHyV7WRd4ZffuutMm59dFfeGmNSi2mXqc8c1RpFmEeer1D9HzW3RfsGHizPF",
  "key15": "4FUQxwgxM3jtX4fscrFN16MHbzdioGsvRNURYAMRA2bfHQi6TLfavvEubm3DZToDwVmHUYTj3pYK92sE5H1rjWQN",
  "key16": "2Ff5VHaRSfVPNt3MdiExnPmgqQkYAmLLN9b3qcW54vWJdF1FUCiyM5msanRSezY57CmpoTScvgSKqK9SuuK1d5WM",
  "key17": "BaZnGjto9dXjNqvXbTMwpyvnJsyNtLkLtWjKVcxHt537gqLiiRLUtaYEozf9CQ5PR5LQhYjzHMFJ46pN1xGGWtJ",
  "key18": "31i5Rd17VoM3ZgGNtEsssQgTPci6WB9Fzg6ZrRzWaCW4jBauB58WmiFTb9BF75rxDsJWyBoXRRQsr4jJWM9vdjd4",
  "key19": "3uchF9Swt5ZDzzyHXcgtFoCkjsviHfHfrP4nuz8mcvL3CXctrjvQuRdCA5JpKWGqVpyznT4vZqfoMaDYvERe86AD",
  "key20": "2yrs2mMPzxLx5D6kstVRpja886m8M1DCHsviHqoVE3tFjh1zvhvTfzBQjy6uq7u4fe6k8S2gDQD7VixonBMkWb7i",
  "key21": "mXPPUNR6Sc7obH4K47ZBRzxG5g82y1uxfmdWkGwxb22PKXCQDfdKZhiEeWTkkBFM5xqXYxYdxDSGXtDovquQZxv",
  "key22": "2EcA8fuzJcbaMUxJQP3G5tt9EgFcVrZjfAh466meUNpNPQgG6m6MF6cc3R2sahjwXxttAZLMkmQxJL7Gef3kYmST",
  "key23": "ry5rRkp9EhEk9GZDfeMh5x6F2toteq8wzt6cmFZDJfZSxZV1iuahrBsz6w82XrennEHDxjtnJ5uBRW7jZQ57DKf",
  "key24": "5pSpcJjGKc25iikLq25mPh6uS7DrsxfwB5712rh3UowJGzgSrPM731Gb7W6KtEBNUr5DoHvSmZoM2sVRLPNWcqDh",
  "key25": "32AwfEQq7FkiTJQNG8VwJUzRhh1UcXfShf3J2Ts9hvYM4kbWk8sv7XJPiaECVusK7b3jSDMj3foYBqFdJ7pqWdW7",
  "key26": "rrrPbZXso82d3HigDhs6rjfb4y77y6Tqzje2ime9ZtWSFj33xEHvJWwnVquTHFpgsjxeF7MJyGfw2HDten4fiM4",
  "key27": "3uyubXyUpHFBy1uxXmMWrh2QzHbYLkZAAoiqjRBeLnkk5U81ECnKcTYi8h8Gx6gTzWXcoDiz3Rv6mELugkCHzPfm",
  "key28": "2eJDeDCt4ajNBVquh76iq931yVtEUcTKJUfQSsc6Y9LvgFKfcmwHckqfda6emqcPGitE6mBu2Zma24VEjZBYoPk2"
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
