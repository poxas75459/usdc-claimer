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
    "2RmSS2LQBYGWU8RqWL5EuqM9ArphG7CpxxBMvEPKsX63NCqduikYXeLgEZEcSgmFiyMKmPJkiNSoExGPnVJzUmaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31ah2fdcPMfQvzywrXkYR6Di3RienfMozPyM8FfENnh17q9pwgJsJggs46dEuAt3DjHTXyGGQ4ekxfgZeAxJaHgE",
  "key1": "5uJnmooBxpW4Kpj8tdvKD1M4n15gtYhEahtqBWNXHDS2vX5BghRU2khWVDuQM1jZHyRymi5pd8XLLJjXnjitSDU4",
  "key2": "5WUH8B523X6fhCGv7hrbQHDsCB18BooodDXZTbEjW8WZLMh1K9rWPiTj1zFda82qeCf522y4C6swyTiwxLuy5jo9",
  "key3": "3X2yj2ZyCWLP6HtfLjBSagELTNCoG6aokqaKdDDgUB766n2orQuXFDuwRSTSwHbT6G5YXAjTwfWVkRiPHRoV72Qx",
  "key4": "iTr7RXf74fNGYLRvoTqGpgFajxpfdyUTmLniDp6LgKeuSeJiVqKQjdc1Ph483V5HYtjejLGEyT16WXdcdr5ehe3",
  "key5": "DXC5Z3iL1fUZyVYpyevSYZSjjXxi89QajzevZn9un7TSBTm1V8wGgyTYD5gD2Y3Ng3Cs98jrZZeivUQnP8q3oqf",
  "key6": "2pDNBLNZuXzUjHRQQJDCY3CzfWCVCBHsXUnJ3YYT7vogoacFqWVB4xHzmZ8Gc1CEwedAatEhU5n5fD3EzwcaW7sC",
  "key7": "4N8mAqmoSnSXsh9fKx4NBTysi8y3o7svHoBD7tkLmtv3DVbCxr2QQEU4L6Cw4C2h25VokHbY7cZ4MHtgnwpxAZQz",
  "key8": "5y3us4WEtREwnEEddLWSRKQGmjctkm1sLkbTMX938qYV3VNPXXBFaeBcbRkJaYwgEeRpneBy2akEc2CYzUxNvUiA",
  "key9": "3MGt5v2TxSJQpf3w9FgbscohUpch2LEgGVS8kvABcu57atkN4JSzXgNnBaaeSyBpT89CtBwmNTEKnZuJSxzayacX",
  "key10": "5o16gd87M468SspuM8qfy1mJ2aKQxu7JZ9KCRZrXfjY5z1Hvv46puGg3t2WADvwhB146kdokZ8xLwy74jYuKu8dJ",
  "key11": "58uth8FsP6RXrFysxkA3aicMeBxdGzbUxc2Y41WZcKpPvFguWHML9CiFwJXxrwYNt7L6SF22X2UmhvPKbVVUWPTY",
  "key12": "61ydY8r2nAPgtFBxvSfSrcqSFbEHcdf5NU4WAyberWqvXyD4YBbsx9JxzBauzZnwnU81CwR6ZgJuZ1aF7o1VJVwc",
  "key13": "13gQHNngUzmmaFYhV5XkwfPdGoEcoAgS4JQGeoagzgw6woUEPUoM2T7fwZFcCmcjZGt3kQfhCg9961hDMwTvHWD",
  "key14": "5YYYGT55SWC23DucHzzL4k1wfkSAQjdh7BoNkKkYYRvmDUkTGXxw6w7MbQ26YYHecgjtsgi3KzkuLr4SDALqES1i",
  "key15": "55nzAkLQDJy8VX1b4vdRj6rM8JroeKrFWo4CJXJk8WLFJjP6oRL2pn12sCj63xhWRcPfwCpmLHzLZVD8faiwMYbr",
  "key16": "rD64KSUHbjRd7rXy9tpg75AFVaQs1msA1oJNgtsZiQMmUL5rYjyJuc3mMGD1NYhuKW9ALdfrmfgssiDgbuTsEqU",
  "key17": "c8s6ACABapjoiSVRbJKcbawvmSpoMPB6njZXSUg3kQYbNHyuf9CyDX4TTacJTx193gCqHcP4CyzyQ1innR5UwDp",
  "key18": "4J646QhyNmPEkY4FbT32MXu5yseSdW5yBSjPGAwiaziGsMJYfEtFZYjG6ab3YdLwdencoE3RFMyugZ5EwiAQxyk3",
  "key19": "YyjhB6JqYh7VCDppXEf2rQN3L8Hu32NotbHyQkVG4R47yVpZeXnyzGawhTgM2Kjp1iF8seNKEgqi8iyVUUuEYzG",
  "key20": "2ZhZdscJRtQtBs946tHKgh5H8Nf9LsmDVe9roHMSGeXK92FnBqhkMQiJvuM4LQjmaCCwLk19rgNVHxg8SFyaLjaz",
  "key21": "5N1osWWyYmsFGEyEohHsajNPqDJXqYB5wFxG7rB7VgbQPmxpemttu9ZFFw8dJjLPHpeWTeESVysncnk2Re6a69zE",
  "key22": "3Mj1QbFEeu6zDv2UZNRjMmdKrM1SrW3Ag9S7f7EBrtcJLLX4YYERbADjvxwHw2k7WX36mEvP6NnaJ3XsU3fAA6hq",
  "key23": "2EzvxfWM9YDYYDnbta6f29kbgtGRCcziJn7JZBRAqxFGWP6hw2LBBxFg5bi2oW1gcVnbGpX3CwydrapQKpzdtM2H",
  "key24": "PuamQqbiuCvwyMVdtW79iVGHyx4Rq2WyFQdaeFmA7UyVKtnTxo4mbHnQ3MR3tqF4V2iHQp6gkX7CjnK2XRc1in5",
  "key25": "5bRnKFYrieUWKoc7qrkucgoweSZa89CAEHSeP6JppFkUKeLWyASFPpLePZxmL7WgngfG3ymqh2RXTsBsbKrDBVaz",
  "key26": "4ve6mECrajCGxmZVTAnxGgqeimqyfupmbGZkVGRSsexqnYuiUxpMfaNgf5S9usGMR4bsrVBK1uZDbZzH2xDQPB8M",
  "key27": "2RzJt4HY1DCoyWJm9Wk25MfCby9ndzHfvkvPeWgWJQmAzSjKG33KmAnDj1TX5R4q2mYSL8vGWoACFawt2seuodUy",
  "key28": "2YDUNbnKcuybwzj2Ke1akpRZW1rfsiQrqvnQHjRsQz4KcXwd8GpAmvAKP7eCdcpfRW13QJYstCnMti7iBma8uCzo",
  "key29": "58iVo4Um1CNWw5e6RdCqHztyk4fowGU7yAczNHXRggyYesfLFLrAPabDqiCEK6ZshU2VwQp6xgorQZAYzRPLDkjk",
  "key30": "3pGXvhHwQ4uk89o66txZGiKz5fp6jXGUBUPhankRGseuZ8mBo1Ld2fQu1JLsdtrMH3uxfMpQyUg6eqZdHTc9De6s"
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
