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
    "2vXT2wUid2LvUAjWbp8tfgXFp3YvvS6hfMLMYTecb2oth7ZHZBLFYBrseCqVCy8J1XzLM2emMR4XNNGmr74ckkR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xm73xJKVNiBeTgHC3za9pxJaRwV68vVgau8uZYV1KwKB6EGf5eVLxs2RC7fUPrEFfQPbqoDdYNWmbZtXMopYHsn",
  "key1": "L9cx3MnZHmC5rtcFXi7hRZZ8rEWqbAhxWZaXzczwzJiYCuwFB8syFbLcSsP5Fmyto4JiuvX5gW6NUNVg7YcrzsE",
  "key2": "JKpcKrJk6xJ6yifTJRwCaU2cuRLboGvJQFYcpA2d4ue8xE6fD7zRuDXB7Us3Mhw5zVuw8xw3WfBSwNm5C7mLpHy",
  "key3": "5YsYBGtHiLrRZXNj15R9BJEYjm1HVEPEjWpWpYJBwkAZdcTBnJC2wRfovxsSf9JMPorNYSq9TG6hBN5R8hYP6muw",
  "key4": "5eMCnNWDbWWuY3u7wJMaEfiZ7APC1TVmEwDGwTSYp9oU9RYps6T1SuWoDDoTwy4qvBhxUeuHGEvccBS9MTBWzc26",
  "key5": "TT7aRx25ztd4KCM7JgrmBZjoATHoGYoXaSpScKTNDHwRDeKRNr5CTRAqkN4r9to8pfowe7ySo6QKTZYHcETfWDv",
  "key6": "2N5Au9XZdtSTMT6ChqC3bHYmDpHyjzsC6ir4cvJZ3Bdi8nYNztjTtTkCZ6osSpbtVxoKCUNCwsrGy8P1kB5LWstc",
  "key7": "3bV7XZS98Nk5GJRVHwZEMf5aCFVMHbcPmDTXUGf9Ke1tJ4pJFEppnrCGtk8Srzt6GXvbhce23hSR7MGoWwqa4haT",
  "key8": "5FQUxhBWjoSGugYCt7oYqMiBBcpqsFrQkAbV5eC2W1bvkJCryDWUKwab5vmJCTLfebSNqi2MAR12vnhmpaWFVC6N",
  "key9": "2TGRtEYvf7TL7yYxSJatHUptaYgcv9UdmiRrRt1EqWz3tzy91fhzSwa5as7oRwUf3z8mFu8yMHw1VWzdbCvp8GCG",
  "key10": "56CmC25gUBGXpU3P2fJ6ZyqT2BqHM7dPkJKn1BLx2rYR58bzcCp2YBu6ANJDNojARdS6H851JabfRpf82AmtjuAJ",
  "key11": "2g9ZTCTpdWDKp2knaZTampD8uM6cF3EvXowg9HkM1u7an8XP4i1B52GysYneFz6wKfoNz2usc63uazyQ4KszvMvn",
  "key12": "5zSZBN5QMDo8YkAWjzDxjJoggtAFuEJXf9W9diwRS5RKVjvjhoEaz7uJPwGHU3r7Ff8BXKHLwg6B8hQq28UakDRg",
  "key13": "3TxCg2wSjpmaCYdirpKE9fQYPCGjUrDg12hDV6Avc4cPEB5vohbwfmZUgCVguLFqE8mcXUmACZg7JdF883Cn9Z6t",
  "key14": "66pMgJAhgL7orhNxe7zeQaCHgs6JT8cpPCJcnTXDc5hxZiZRpNiHYQQSUjNEaqcrdcuBrweGP5QgfWceoRYWpq2i",
  "key15": "m8bDXWQXBcEjYXjrjNt4b864r3nHRQZ5CXbxDHLLcsaHxAiq85SWeesChUJJUWkSgHV5P9YQdAL1PfCdgznCeLe",
  "key16": "5gUybF4jv6Zy5gchQUGyvjy7yanfPPxKGaH2jQ5VJksiUpy9hFX94RwVsuzD1TKRnCkdQmAowopQLjpXt6i3zCag",
  "key17": "4Y3kbaG1YshQYP8YYsZrbmgaSbWkbWsWPLNbhCHBRSbUYh7NGUcYAjAnpS6mvNaKF6fXyg6zQwkmBjKL493Ryonv",
  "key18": "4xAbQ5Z1CeeBeKMUPKWuP7McTP4Mi1euviLYLQRpktVarCPKqEkLYSccrBC2iSDxa3hJwyFpbbEom5GzTmXV3aqM",
  "key19": "t3WfkyJvStQ7gNG8qYBRUrk5hcGiDKNqYYVpm5Mpc9gxcABPj2qDF3Lz9bwMj1YBUg16s4qa9JS1RddSGpqJmsL",
  "key20": "3Mo64fT6KbFuqWfZ4mwakrT6R21JZgHnn8YKhNULkuncDLLSEAKKPTij26wHrDYFLQHthgwKcG2jTmFaZHpnkFt9",
  "key21": "612Uvhkg8LTF7TPouvdpZtNZqG9AXwNKedx8EmLe38m9xfc513xPBtrxr4vsXhQRsVotZYvzituL2Axo75eVMbhp",
  "key22": "5mHLyfFNfkmMvChJkGUTzNfGGuUPaTQJpWek7o3FH95oBgp7XGd1MxiUb8sMzXtpWM9peMsWYENm8ejFrSnsMXfF",
  "key23": "3HqbSmFRgjCs8KHxBsXs7fae7Xbh88BWCyJ1h96J6L6Lx34Y8sNHcipTwhfQ13D4cNfHi4Pb6ghBysmTEb3tv7Xf",
  "key24": "5vxmQzbFdYRxx6BoMPhHZbWkCY2Z2XQH6DuEhyBVC24bsmzR5HEYnESSn7mLAUmbxttoUjG6Fo1Xwyq9bDs5jkRZ",
  "key25": "2VEupQrsL4xmQMHAXbCTjDXtyggS6YhtYBezL58LUo6K8ULLFwnVxyGQDHqHz5dmvJpr8EAPpFUcPcsfJhCzMAFA",
  "key26": "2hYAmraGwe11M1cjWVBm53gASHV35ARhysYwaU319C1XAnULuYobgdXKFaVQz5ZhUNKV7aJsBQKntim7n5tmaX25",
  "key27": "3xVt1XT2t6mDYdSpWguJXvtc2LXtk1ELmbn28RPFmHv7NRc79ek92i8giE9MYCt9DxtXmdwSLWzthbNYX6TidUB3",
  "key28": "3qSnWpsrB28Yi4gWYqS5fhe7Fh3PsVmpKsaS22z3SP6YHhnqmfKq2b3HH2ZW9C3y8F9xNiMzyZdManX9bh6im6ZR",
  "key29": "e2DfBur9zT5gcSFKf1T2oVu6dU3UJpfVgDHMawFnQ8XtTGGeRc7vrjTb3LojyZ6MDhiTu2zUKGWDyDxnJkuDchy",
  "key30": "5X13bzSVngpDAhdV4ShrXCavZbtdwdKKQ4TbgFkGS8ETB7kLonre9Qd4Fz9Q9kLxRzje17GQEJvXJwejade8CRLP",
  "key31": "2TCnA5TUwYeyb7vQxFbwSLKau2BZeeCn7vthAEiS9NkVHahtDc3fptQaM2p7hKZqTY7CZdBAhcKwYMLvCWrjrMbv",
  "key32": "2HxLCoJfjbPc5YE3Fpk2rjKjJMvCzHNrzQtbs1H91JZ2G5J7Aqyqr3o924MSxJLF2JhxK2yUx59CfcpBQix2TeD3",
  "key33": "2C8hTfuAJbc27F22uNTqpbioZbSAAWVe52hyeQ51UsUzqzLGGRkYQfTEkZR7doHZvJrVgwoLcGC2W7ANBRrZbWy4",
  "key34": "3mbRngsQPEGSAfibKEKpqkvqHjiqPGitGaZ8y93z3g5rgKtZjd3M8Njq8Kcf3Bh7D7g2r49NRG9pmvLCLqd7MfEM",
  "key35": "4gnr7Q3Yi93wM1LMxSNpC82YjpqyYNBt5tynLx3q15uCMD3ZyiV1iT3q3JopbJNC5kMxii528ACnPXiSwUAz8idR",
  "key36": "45n3KdwnT9PZ4Z7HhrFX86g1gxxeNJrL5RbBgDNndcBDLhctrfdo436Q3YBoaJdhKD9br9txxFmkvSgHB12zfFXB",
  "key37": "4oxMqVDEmfr17o4yBVBfGNDVYJQqrCUN3X8futp2qzUVbskeWEdK1DE7behChDD8o1T1VTmQJwaaobMrpic3ezWh",
  "key38": "4JvWHZ7pp6Xajipo1XncmGXTvtbMcDqShHP7VAhuDE1grPTbgs6d6hn4jdUiancUGQiksTejLMXXuxicpN8GkTXx",
  "key39": "84f3TeshqSUAMBKZE8U7r8MdihYsR4KFEvZzQeT3DbQdKqTkzzQxvs8SffebmatEdkfUZYfGhyTqs5gTbvSQzLc",
  "key40": "4epsNsdy7jAgDEEhAmqEWLDpFj4FXtjzXnAnjfjfwTGVJe2yYcTXBGcWpvBzppPZvWmLp7YDYKdSqDAYMyFRgZgo",
  "key41": "3VH5fkLKHXjsiyrADvqD4PFTNV9KZxDaGhzn7QHSfG7r9b6TRUh9P8qkfgzjHWhRbVTLNaajA6xvDS2AF1kNvsHo",
  "key42": "4wvfttTu61hUuL2X2LVnu2NsbQatTLSpho4vFvhrjKCPjdWxmc5BWjTRBK9GspEU4c94voHdNxS6etiqQpS6YZ6U",
  "key43": "3cehTjF86vQbVCzvGnP83SL1t5QJznkc5pJFS5WxQNDFD7qenAN1pL866R9LD5KUjy3foeLyMkNK3Zypw77TLSUE"
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
