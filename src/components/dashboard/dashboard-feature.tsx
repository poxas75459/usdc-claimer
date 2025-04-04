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
    "uE9mJKg5a61SnfEyMrYUPDQsqWMm8fJoHFpf77jztBsCoF5B9N3zETGmWFhAzts1wKADn1gLWHan3qeX51eFFfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vBwbiD4YaUxoZrkDrtr6YYqBWvbbd1TYwJYTgby8Htvjk5MtT3FxMMEfa65JovVtcgBhob8shkfiRqWMVPb1u3f",
  "key1": "5sCe96GiCnGMFj69Xoj3y121XketPPiZYvvpnXEfq6tQUJukoF3xghiweQJSDPSfcn5UFgNgjZTN3dSJJHeFv2x2",
  "key2": "2jDmPVvRKdxqT7k5RTFBGqvwpGxRoAB2JZnKdmKZ8pD4aRVMF2zMoNedLig8xdQfxgiWHeQi41QCqkpY8N7AML3U",
  "key3": "58zirrCtL9DF1HbMaP94TUQFZC28bAVzqbJ8hVR3jzGQuTAvUahqXX5NPWFLz894EzBuPY8DuH3raaJbsUsMWDzW",
  "key4": "5XKKTfXmK9oMY1KQvKTX8HnGHNR5u1qMpWh24gxueuvzKMkxVYNJYAKD8Ar8LTdGkwjXCBHnE7j1tktiPdkCEt77",
  "key5": "26cRke1RxrD6N8WPHCEmn9bTVqtaW32vAkGh8WTk2muUiAGHEoZSdHkdt7mGTbmQDqzUjiVSHMAxQc2sjbT9CxNn",
  "key6": "514DKGSRTeK7GEdy3pTbH4WNnnaT18La3URzpKVvzR9CitXtKTjKwvbmpJiRakGVAifBcnvU1r6io4RjK3u8eddk",
  "key7": "5iuggbgCDAh5TvhabcdbQ3a9hWAYBgB73UdBPkGaPH6XCJY7RDRvPVufixfvYXLhhpqLRGBGni3vdbr237Lh6Cfg",
  "key8": "5Jao4p3tzA3JoWnokw9Xmd5mBmo2Ej1UPrQy4fUtsTtbq3YGUySNSs4rcpbRbMv5Pw2gWs26EUoWJJN2mR7VwGU5",
  "key9": "F5C1t4etP7pwn2i67EzBfXcBcJkNjHWYraWdebs8CNmtQEnNfnBRYmeVJ8zn9juPP8QnMjEp5TkHNS9cq9T7NEp",
  "key10": "26ZMMzWqQw6E92hDaCBiALpfhzRecwc3PouvDfqLTgnSDhjYKcEk11hVXS35UWTHjreZEmDWabKwiAcV6C3DzXCB",
  "key11": "58ouvT5KPP9nDfe9XnNfpEeEduSrQHuD4KKxK2Nw4JY2egbFeKesuYFzmeRKDtQ1yNvncW4LgvYc86DRCRNk42b9",
  "key12": "43qg3n5kqYnTaEVSg6s9rigPwqViWkD6rT3i2k7EH2FdjA9n5YiD4AurtKQ5cVsTd8nG1ohwyU3qipufQfXFAJre",
  "key13": "2xJBZa5jeDR7uKXhriAX13WhxLvgGMo95jPNR1Bo2LgrsuvUmbQH2k9VGn5YuRuBnRZc476ysLoSy564k2stNo97",
  "key14": "5wo3eZuN7Rq22WJBe6zxiH1zZdHKGmeW3XvqXsFxk1K7aK6Wxrrj4puKxHZjqgQhH61gMmMBtqrPZP5dCRcFYWTz",
  "key15": "5cPnkq5bHdFBZnQoSsdXobWKs6XcuwR1TCaKykUUayVafKKCznCnVuhNAvPXpDy9xyhMM8RGet9wEizN7ZgUqhdG",
  "key16": "5PPXEcfUBRWQtvGRwudSSLbLWyj9PBc3LEuEuhxMi9N92WZQfZjoGKRQ1yLmnR7CwW5CQPa6aFa1HpufJnigwZnC",
  "key17": "PhWAn2tZMDiQFWW9pQaGaDTuBbMwXdTwzHwwcLfDYGbsLkHrJ9wtYN9NzR2UzVoVmy3SmbXuqAwVeGDLzi3HzbT",
  "key18": "53diottMp3mbdHATNu8VWqvuky2ieGYC7iogT5YA9y1BUeJFtr5tc63hxsdVy4JS8wCodmUWTty2cmB2D1FpMYBN",
  "key19": "3SXe1v2isTi1fj3tz9pwun6QBpY5CXEKiBDG18Bj1gG4UPwm7ssbZ2Fb8LSRyhaEq1Cfmddyjnyqf2Fq6Lr878pw",
  "key20": "5NEH2GZK5UZRAnY4BR8gMRNT3PK8NbbQJs91nyuhKXA2G1afKjDrdw9L71UzmbzJ1ASMzdbNZ9ZdSsg72xwMnUWM",
  "key21": "43aF712we6aHqifc7jWbCSBAE8vyyENWYccrtjvRbArvogLFgSDaBL9o34BJfSYMAb56WQ75cZi5XQirTeCxG3H8",
  "key22": "s7SVaeWqqFhci34yDT4d2Deky5ATNUcd6ooZjKpbuMRg9ZshECXY6JTbVTMaoxaGtAc8GQ3qUj4HzsFcMNfunQM",
  "key23": "8N6VTohg5DQxzNSjzpKb7txqnMBQfCtShXrCkrh6yLR6dDCAZGexhTW1nSLY3rKLrNpcXBbKnciFkYUArAGGjdN",
  "key24": "2DbEpJNLiqssozT2abiGSLWxbxHJ6gAsf2aEVfzurijtUpMygnU5GqgfmHDC7GzK2WCQde6gjPViSz1LXetR9F1C",
  "key25": "33CH7fmUCVcnnAHTi1w5iiYeS6r132sWeXNtAC8MRnU7cd72gGMe7CnzPKF2odNb4kszc8JVK8fXkCPKhy1wPEvo",
  "key26": "5YCn8Jhpes54fCUCZGPryuqMspGPz67LEdx6AZMU8Zaa8K2zAUcPLNZZxg9txEci1V6f6YMX9gQjTASfxhVe74yt",
  "key27": "25ZCGMqUNzYZPbyayc27cbUd2bQP96HwS19iKa91AGzDdFxLEKG6CNoT2u6t5ctQQPRPHFVFn2syZigMMHXaH36E",
  "key28": "3Pc4vxSbBgbjcghobZLSJ1xtjvcuFjefTaXc9HLYAMMqAkYS5MVhHyTGoGyozgS5EfkZD5aSQESeYrSugrFXcZ12",
  "key29": "66LLgKKMTnjA4f4pDsp1wBdf9pBwucxc5Bk9ExLcoMALkf9yQpTRsUoRGG69AWVRRiW9TDBkXLtoH71VFSpyz3t1",
  "key30": "2RiMg8WSgnqwqbw4M9gXky77ToW47qnsxHxTWA7BJLTghgDzwLiDaGwzbZXPAJXJgHkezH9fZB7vyHLyb4TN5cPU",
  "key31": "4fCidu1quJMmged2jP7TRWLRHi8jnrtwPy3o4L9hzuB6x4UYw48dZ4ToyMftt2CwHaHPrvse18mR2Ze3B9nUFn5T",
  "key32": "22vp9812Nc8UkxPuYTXjzRcWXPwHEayNgT3zXgteX84bBQPFUhmNrmZBnge8cgj1jxRFyrEiEX1NBRQGb2pFjboh",
  "key33": "3bC3eHQ6o6znDHchSEWgbqhTazgnFpg1zbCrU6NANc2xSSAkAScuu2GEHrjsgf9Wt4raPBoXMvwdtXFTrRkLB8bQ",
  "key34": "WSyMMcpjRhzQL7dgFRnnjxoYf1fb7A6LbjB2iiu4RvNchgZ43LcHx9wKUR9tKntCGbJQwASg4BMV8F4te4xqMUZ",
  "key35": "3WZR9ZRtDNg5Wjvtvzbh4cbSbnFSiA6UeWq89W2YZUoQU1FAskM1KDXeJjvTpLJrkaaZ15DhudXJcpjxNytHj3CW",
  "key36": "3YvA7jyiCj2hg1a8DkH887N2asbaMUcXPoRE8rNvfLngPNXCqUXBV1pHhYLXrTnZMvw1AhTqeAZVrrFDXp5Gk4Ld",
  "key37": "3XSHJmfvDzxrdGSVQ2mQtbunzFYdWiF81nVBii7qvLJYZDWSAda4nNKLqF2TQPifQ8YHTJHKhVkf9SfbJBPPnkcw",
  "key38": "UXhDsnsVu5ben8un3niqx7nnexuKjhYneKqa6ZK1cX3RdoATxN77rWJXRpJBimB3VGSVobaGqDrCE12crSk9kLC"
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
