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
    "4Q8PBCcAikdVH5f47e1EmwmSgtKy6cyodg5GtSL5qkBZCRxt5gy8vWNrJHSyEAuW2V6E2J5EXQWLs5cjE1V42xz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25juRSsrX1HB9e1LgrgtyTA5eWAuyPYTmTjdTP8Sue3oPBsRUmU9QYiaTcKdRSZ9C2ebfzMoo5xrmDMemKT7hV5K",
  "key1": "36atmEML6oVyjy1DyqXrPfE1KUT3LVobtL6S53hF4FCe8536n4btrJF3qzkzFy94ChjkoWuKxeLr6PqjE9RirTNq",
  "key2": "2CixbD3WrHsWFU6mWpdUQrD5Uu6czqU616n2fguYDYMoJ3V2kX6o8WEUM4PRZpx3x2qQFFv6XS8PT9RJMZmr7Y99",
  "key3": "QHvU54h3UucBNKiiA31fNUkjdkicatNBnqrWgqHNve6bKp1umpLgoVD1Wn8XEdWczEAE6BeUUUZo1NayxNWrJvf",
  "key4": "2YkrPF7k8wkhS2B9ZMjWAVF1jhbT5rSuMkFLVDvBYotSV2xdRj679A5P1uzjWGgw8Zhx8aaUYuby1Ue3PY1yS31N",
  "key5": "4d8sHtvBysVwqAF1YA6faAejX91dxiBButNZfP5nQHjSs9pmX8mFaDt1bqFLo5DutohmRAJN15BNhh5dvL2ihQ3d",
  "key6": "2VXiZbd3GZouEQJWgdbAPyPZu1qnTzBrnFvMTKVYQBkMmb8WHggZ29oENUgcuuVvcmrMz6ndoWPCbCx7LLdgoFnx",
  "key7": "44jum86GQKbacN5fMsJC9t22WknFaHXQ8g3uStoAJqneGkAQ6yxAo7Pjem38RQFVT3ikLfZLBPpkQuxoS96sE22S",
  "key8": "5ktw7TnpddcobGEQ14e79ym8tisqdHuKFmP1iv5yJ2g6cTEq4HnwurwUnueQa138aRZuUG5t4iPaueCU6asa8qL8",
  "key9": "BzQcyVoqfosdCpdVE6UASH24g6cbTxezxqK8ifRvPG62CmB1upwDfHYo54r8HDKZs2QoPAYb8Zby7zzPdeQVpwE",
  "key10": "55bLYb3heqFt32zF2Qqmzzc5KYURJA5WmURr946bsXG8hnruMoxg2b51gffGhpUyHYUpHNaCmUJ8e7oNpP3ZnWJN",
  "key11": "3ErxRdVnnaaRw4aqAfsN1mu41SdgRF1XL3uXGCg3YdXs6ry9o4Xiyx4H838CmWBSRojhyhneDyYvvpaFcLaYDpyX",
  "key12": "3YqkZb1g3SE8N1i66j8bpgcdWzva5PQnLvddRj3yXUX1swnDkieV8AaqSrBvRMEcizXAptrSCXCuEBP48xb7b2fK",
  "key13": "4U18KzCC61MUQCd793gTst8S8zV8SyuUrPHCUQHwSJycy5c6e5dtYBjZrq87ppurCRtzfPRtuh5FYzTnDhxdhzzv",
  "key14": "2EFd1omPz7Zam84sF46oxiZsG2qi5wpwKDoc4rm8qnC1BfnXioiZCKkCu3hxanm3VVVoErj5kVYGn2JABPHDSjUR",
  "key15": "2Wf8catiAWNAYwoa3Dz23iEi5sX5VXNiWKG1K2FVhNzShmNvApxt3EBCqqn12gdWJU5ozFriUWbyF7WLf7LBHLNh",
  "key16": "5cNa86jkF1rjhut2cW2GJxBBg6e2HmUkUFanPpmb2Nr4wSJb7b9Psn2aEy8e8ZUBD6s5ruDfKdhv6hu9DaiefjMv",
  "key17": "2UrZRz7t1UqrMEZ4hVqu2syofG9CFB8oyFa5HeHY58rEuNFXyY9fM2MMFFj9yNEk9cmpUp4GUqdeJ2UepAvoH7iZ",
  "key18": "2kh3cAKqrHqdH7yQeVJnALuhvuJNN3Tcz24prFhNXfMtRWkYeVV1ZzdX5WxQENJVe9USbDBQ67YXZCygZU9RoctX",
  "key19": "3tsiPhMCJifFeB8zFrsfbHpHgEYc6W6e7HR3mEdZeqJTgyy3KKN7HofzDeVJRkfE8MhVFpXq5mF1bAtCkUxQooMx",
  "key20": "4RFaS5XAY4YZKrB28p5iWzKP6eQRcJtfTjmcz2Zd1nhp9wLprVKKr4mWwwLfv6piCtScTvjueSsVhY1uZhvV2o3P",
  "key21": "igyBXpjvbu3R8L7LejshDTY8UwDxqWV3eyuSj1h5WMgHddwwWH7TfdKPD8vniU8UVkcfnDMHe4U1UdmaneYyo4j",
  "key22": "5i5g5L4wQp9diJD6wfeBWzHnSdj25v9u1P8CiDB7QsvpEM3xSUoSZ4mMszJEobNYwNhuwVoqrX7FWskhYpLNNA3W",
  "key23": "47Phpjp1n8yHdEiMvNMV5hJaPaVdyz9qRg8zkhaaxYi87kkjtccmbWy7xLdVLmL93JdQNc2K7ghbppyU7o1Vi6Hq",
  "key24": "3eP7VGsBEHnnoVyg2FnsKjwxeWvpXciBWfLzCuRNYKKcVqA8TeeY7tRaAkS7uGBL3apJJsLFvQCDVHfwXGEN58hN",
  "key25": "29H8FhHWkb39gJQLGTHv67Sfdzf2anCBitUPNfgZK8r4YhUDzyojCLh2VCbBdu5R7AuNh8Kb8jsFHpSFAndsGuem",
  "key26": "5y6nicDdagXinsr83wZneeSmhngf6yzVfP2H6Ncn7heoCz54sZTeaqkpLQxGCJTCv12urBeUXGf7LwhHuDZrnEaL",
  "key27": "5BqK6FE69dv8e4La7KBqja3hhbrxLZ49Mw6sCbATMRsvWDvQir7XuA8AgzqsnnvFYPTjVWjDCmBo2eeEbU11sXAK",
  "key28": "2Y1rCEGo2ERPhp2UksWfd1gJCFF56gmPd88YcJRa47D43gWgZcupY8CCEUEaNzSbWN17WJw5UwPbpiBR1cSgzdN8",
  "key29": "UaBmFc2gC6C9567SnNaEEBbpxZD6nbgq21YT8iiFJg68dUqpwWa72rqvUqEKT7D1ExEDzHLjBUUJWiWLTm4wqWW",
  "key30": "bResNrA7handrfGbc7NotUfEYB7PFmcJqKarZ7Zhc9yyncL7QHKUNAmXkS9PNKWQaBLR4j2ggi3cwrETa3QhaDH",
  "key31": "5cpQK8ammPk2xozoRWMS7WPGdWpLN3z45davpTpYixKp8P1jCvhroigfkh47gc7gqy6rMcTEmi2E1p4WstauxsYi",
  "key32": "37dChzQ9ido5uHX7NWuv2Bxjr1s4LGUmT2iGJWgbF8mDgkLxaAQ9yfZfKf9SfwiV1DnePuzxYDDRmUmbor64eQ7Z",
  "key33": "573TVpT7J8JnnK65K4aPLZqiJMBb3253oc8q8gVoqqoXhxc9E5UBUFGbWkYo9GjH68BEoFH1KqoQoS6kFdPJ4ZNv",
  "key34": "4h9kpFsmqHptrQDDHvMgePw9NmaeBhwL1TZF9bjb9kcpRakmSrhqw7F3JwmqhceHDuPtCsHqCZX7Xkm1ci3PqTsN",
  "key35": "5myj6Huv8JYL1mEKFWhCZou1cfXKeHcHQ7dZWmtFd7e7H3XRehi2YT8Eij8kTKmZy2kLU2WBniqCTr3m67QddYoB",
  "key36": "2Yg5Xvp4vLvtw1tXrXDhoousmWzf8wycq7j5omcsuxdiBHhRVRPLBjnQ2jqigKhY1USFyDC51EiKsRCPtvfgX27i",
  "key37": "tXso6Po6ncSr11GBvRRLYADxpo8GfXuEkmhtM6GBDVJcNa6xbXYd1FQJkDp7jBZzxk6MuUiN4bHAqBLuJqz18pH",
  "key38": "5euB23AqKMLNhnNQzZM2EBgHkpKxNSCJkrseBusU7KyzzJaH3hSvcxZQUWfc6WzfYaUidNtFZGGdFVMhjr14Uexr",
  "key39": "3Y1MtNVydVXBhdBf88dFvwChnuHimyYH6bdP3Cd31kqPRPd28Xo85zhdj1WBfrnWdVV8UQcYrPTYSgzfRv9SLo1S",
  "key40": "4DmptTV38c1BMFaCYTJcY8fR7biJrFgyYheoNGwFByaCqK2W5JjbWeU72e7VLw87fTbpfjQJkKjHqzfC6xj21tpN"
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
