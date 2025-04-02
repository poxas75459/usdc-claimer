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
    "ayPYYWj4HddEYFrUDJ4y4gmZDfjtmpUKUtfqS93mc9igvpRpEoQh1rSN5aoQKtWjUvya2ey8Nay427hfUQFV8Fn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TACTkCnuNfbuhTd8iyaLoYGiY8pccFTAM9ZsPTKvUYzVqLt97eeqNmcTWWqV2sQpEnuYZgbXuDfhMcJhbpWZhDm",
  "key1": "3RtksQj9WL7PCWFF6XRSyiB8nBAmgaJ9Q6tk95HGDVpoX7PxJ6y3WvvFs11xdxgLwivdGCerQEtrzPgPo6NSKkcR",
  "key2": "422wMo77dw5xA2EsEoa1crmzA3dZY5BFjiwZbqj58Npgn1VAZi9yfKPdLmWktaixvZEhCdPdMrVJKdhMmcvXwut6",
  "key3": "ANbRbPj965WzdZ6oqsQ78THF9in6a8W354ZR3YXgm1cbvAW2mLERDErtLJRY27PW1psupeb2VvvxmHJnoEwTnD1",
  "key4": "4diQkK5RnygHeAedugqbDbZzUnVTonx3hPUJCTg8iP1xau3fNC7bWGyWTV3eYGNzaopq4JaEjuZHcz7cTdoQC5nx",
  "key5": "iL81JJL2d4nGzdbjL2ev2CweSVL69u4aiAcVuQAQEfE94tdKqoXFV5xufZCdze6XMyEar8fCVdWj2PXhDLqZ5Jc",
  "key6": "59EkGYPpujSPW1Z9vSSw7omuQTgwSDgMcoD7XPFMGtnwUXDmFqBf7QfbJ1EKj7V12Hg3J96d5hrfmzUQ2Fenze7i",
  "key7": "URDhyDCK6HtecS86xeUtGfA9MbWQeYqRrvCdY8odUB5Ex81oSsg6b7WrGzpt1Stx9GsbSTUPmBMiofgf6z2GwtP",
  "key8": "66yLZnWpfTZkF2BACY5DTyjFEswD3hrLomqqmzBkeG3YefhqZxvsVpbPok5P4csPQ5enVN9CggLQu8j6zRgFgWwj",
  "key9": "3jnr6m35NZ4ibbRHatgusQ7SujNyFkeNj7rQ1Y8V4ZKYxSS2BorvBDTzzfCQKtMehfSQ7hT3pbWBwzGXT4s6XbCk",
  "key10": "2Swn3krNd5yDFkeYW1FL4YvbHjYusDYJsknGZW63BBHKpqMmfiR8MM3yPXcYTpHiLL2spZV2d6dCP7zwmjduXx9m",
  "key11": "2DGnycbL8zcmKFjofyKR144p43eSLTUEdLcvp6aTqcVDB3XyjJAjW62og4futepbcE7wew1eUfPHpZ37XvhzfK2i",
  "key12": "2FhDEgRKuA9xcjfQvx76uGxFYdGuv1mDWtKVVwRDLEorvi5oAHNtoeqJqm2jNz2CGePajbcGwm1D88SLz7TMUGbQ",
  "key13": "5zzuCCZCrALN48SLULaVtALRYowpDb4so3fSi4yJHZgSyQ11vVNrWu3TjWt8Y3W4DJToUy6YrNEod4zAYrJ3uPSA",
  "key14": "2EaqM612zxwX1q4D6vFGHRVkZ7LnsfgE1Vv2g1BhZbHD2XrNHRSxG9NhRTvycuwVysTB76zKJsmQ2KZVYCh1vhPw",
  "key15": "3ap5uyxwZwBXie3FMC1yHmuPj2BjSSE3XyxAvAtXPYEexow6GUkKn8zCZwpYCMXk5e2VASXkcgW9RJJvStn7bRod",
  "key16": "4ifSoawvQeguZJFtfyRJQTaorEqhPs85Nyav4hxHcu7af93VGqyTCGhWLr2F9jqjd23JfKQweUEUhfUE5vUq9KGb",
  "key17": "3YBe5xRRSFXWpPLhEh11xYyqJKTpuS2jCPYoaBLbLej8e2eiA6kkjJHTycvfdqnHr2gvTcBA7PyQVw6CQmYsGT4e",
  "key18": "3Hc2CMcgPr6N2jhuvtnpipoGMH7s3Ugo5Evug9cZ7snsiF1hrV7sKjQTDFuryTowognQqtShGohrKz3A1eXVJqPV",
  "key19": "4sFfa98HWpNGRrxDe4r6qr5PVKK5WyiGrV8kcmEjap7X4Z8AqZMrWgt5ZJgrgpqox7TVg5aHJeoUoKVS7wCVAc7M",
  "key20": "4c6NA7wkBWvK1mAyFuKEAhLH1vAMw59MoattvnyvYqcXjpLvxQoeu8VkHPNDskEwJdMxnkQUPr8XH5cdpc5nBNst",
  "key21": "3mEwD4MHBLTdgFRtkL1zLN44V3vR5q4ydvwpbyg6i1rZEtcMDiG95qfg4iBVjgdjVbNzzxASnFWDx212CaUybJ6V",
  "key22": "RwUWqNhFpS94qqHDiKjZb4S4xCxAfWMJjf42XdsoasQyKj4SLrEGryGcaGp36rKqHjruF6MXAcZGiN5sWRGJBdx",
  "key23": "5bNDSUzawrHjbksUw6rQPiHmFgwTLwpMpwdRQgtq9LVWNUAPrjU8QXAxAU5B6JtkYN7E3pP6LdHU9ZC1no6R4zPe",
  "key24": "54wRYb7tPA1VWAJBNJiBpXvtKYXwn7h68DBqFy3WSvvkJiRHS6oceNcqv2t7UtGBWsEnrnCjUQhVBAc9JDYnPmZf",
  "key25": "3Gh1nz1ZV5h4s81iNjjq9mTsWwanpDttHB7eEzorQTX6GVuX9L45rmumzUEAVzKTFoELEGrZPLv49AYLhtVqbSYt",
  "key26": "5PPPEKvmea46PBxLdqskUHSqkGRGACbZZqo9xAQGbCWAJ1EDsAQWfhtDuCWkJDaXEwcgoo94JfA8skZ7UEXqrF4c",
  "key27": "WzMA3h8aZkkpasMPvF8m16QmdZydGpdbJCHxRjt7MfnYXYKMNnXr8DbhC7uw4CqUxdTkYK1DY86hKSwoVDhPJxi",
  "key28": "2gpKqPnV9jHbCrMT49aZSovMtJmCD8tHofE3CuP36MM9iMnv131G1GD1vdRvNvGyuz73DrEY5qWV1K4GuTJsfhhx",
  "key29": "3fdEMfoJVzmTpXZzAMRjXQ2J9cZv5VqZQpKctcjnerisuLyWrx1twXbo18RhsEjR7RsVYV581pSgbszRdnpV9eWK",
  "key30": "3B2WvLKcKXj4x4CYBJMrGwjA6aRa5UNsYSvxU4MLEbeGwzVU79vEKsgG5ewjxf1ovvoYXUTbrDCtpgcnGwPJ1RBG",
  "key31": "48EcrpiagJB3znZ7SaUaEcjgog4yT1GJAbtDVaEFqceF1UfU6ZzUo9yZZ2D5yBCnGdyzjfYRjAozZHdQh3rSE6Ud",
  "key32": "3zeYxc8jLgzFmW2xmdTYfYuDtFLc5d9YBrCo1fnaVD3uuGU8zWPfyM1HpUyYmNb8enSVaKcBLUhcTng16UX2aiSU"
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
