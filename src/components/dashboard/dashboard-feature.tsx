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
    "5FK49k7WMBFkmFsHYTuFXTXayEYEPfd9VLHhATFqE3tRs2HwxEd9XzCNqJbFHNprXZr9uDsdhXdd4Wwp1vBX2cY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64rjJQ6bCXceEhHxUECeHLvVXG9MUSLTZt2vLty9FYb4qnhZsE5s9P98hFGNH6bezdK9FM4BkXtUBUeyegratAoj",
  "key1": "43KhKUz1cXaf6B7gCecnM4Jb9u7tHtoc1hbTz3DsZdxetATgwMLohxhMgcPP3E2dofEnQ6ob2rur5oUxpa1Shsjx",
  "key2": "gbcWeuZyCxrnAUpCSo5HRKDi8F84h88mzHHXH9nN4BZyiqcDpJzi4Qyw5o2WUaLPGYWjTHZ1sBvcJPN4fiiMTvx",
  "key3": "pHoHHbTkdmcMtS4RiZwcGkLozhGiL69v9ioavvsSprwPwBVJPPrjSqv5wRhpq3zdGCX4MPEPk9rv72duqi64fvs",
  "key4": "4ZezKyGvRsLVXfRhwU2xyNKrCeAcshxf4HdCP1FqKSQyfkHz24QXQeNM1Pp76ZZ2o5Fo3tnpeCfQa74u2ZA9NSjG",
  "key5": "21QrT2iNevgs9m5jo47Dbdkr8h5LRJfYUMk3MJgMsmBLSwyCPfEBPcfJx4rTcofE9acH5JQz5nnpvPrsmVaxvN3H",
  "key6": "2URbCqWFYS59oTfs8y1BKusjygdhYPAVq8jY4wJEbypCpa268QaWLkWDu16KMXzQN1hShQuHG92PZ55GFGdDFcc2",
  "key7": "3NuDpwvaTnqR1E5MyJfUyVeyuVEChDpowxJ1Yeo6JJ39TjJzJP84PgwRa9REs35erZxqQNVJyqKz6ehyrkLkdkLC",
  "key8": "4UDE73msmmWgF3TuxBXuoFcAQctU3vicHhs2NpyqLhq8gH1NBd9ehfFiZJrQZqfDykZha9FJjeGJBdjaLK7hGJiq",
  "key9": "5VYGb6aa6qyjoffq4yExibR3NX1c6CwQpbH4nkimdBpwoLmT1URosTzb8dZ9yzqMGd83dxagaKPbX1XstHZrfoY6",
  "key10": "5EczSytGj1GnVhVNCxtmQyamZ9cJ6kVYzucY64bZQ1NtuDP4LANtXipJv7Nm5k92yEkxycYwYN6WAzcEgSjbzsK4",
  "key11": "WKKFpRhxYA8wgVFzP5hgRc2EPZKQ4nkpjiGmWsE2FU5FaMS1g5rnSkuZHAvbur7mGf2gwyNn1HhsJqwbZFe8uKv",
  "key12": "21WcRoQ9fFCWhG84o3ShqRThQXXgnj2396mBszhdmG3BSkYJKqZqyTGRbiGUX9P9f9DPK6WaY3FWbrWDhhXNC2ub",
  "key13": "5PMNKp523KpPQWxWkEbtmHLuWnQQqiQHDjKJKii1aiMnDPvJ4zmqowDA2eh54RSmyvKuNBqLPfGLjS2Gw1F6FLZ8",
  "key14": "5toSJkjk4HSKbbjbEoN8VEpAe4D5UUjzLqJ3aD7KQo5NVgzekZfacTVJ2nmrXp6vXPpfJsczt68E5mLTFXApDrt8",
  "key15": "4WVb1rtqwUv278QJMqm7WhGanHJyAXQXCvCBvm6AqDe3FGDfTQiijemt5ajSCdy1bUQHrSw3aRrqAgoDPdmY8CUF",
  "key16": "iqJ9qA3vgDD6CihB9AuKXQRmmP6boCDsc49WfXps4rH1PFPFpWDqgJKUyhxErPgfr6MfFB7a8wswssoXRkMJGDf",
  "key17": "5NK2x81GgCwqEsKPSUq8LPZBRWq8984Zw9yCdZDGxwXw6dcKShJy8rvoGLCT4zHKMsGVRFqMPiQs7xQJ6GjcbJpQ",
  "key18": "2255JZz1Wh1g9xWBPh2isrqkBLFkKDWPZzVN78C8kWJcPw8eXiWD27aySD83PUEcbSqjWrqoSDbnDpHufiGYHMnu",
  "key19": "fKMyoEMDBNE64cX7jpsWmbZjuXGjzrU5QEkKmnA6oaitVJf18EKXXqCDjxARKWoVrMYoPx3yfoxsv83jKAvvsgj",
  "key20": "4mtBF1adSfXNDj7nKwafcYNA89sFWuTaNcihvFMkiydmL9YZFANPWazeC2M24Pn997nd5vzuxWRZRsGDX2WNA3gt",
  "key21": "4yohEzWduoenkE4dc283H8FP7XQwLq5b4FcrLtSdg4V7bBq469icGKUHScBvVp112c75q9nPi99w9cudBSJcwBKy",
  "key22": "3ZXfisjnRdghAafzeGXKGPBj1qv2TyWzRK2Uy639qpB2ZsEK9byFi5oyCL6tECEzstEh9uBvVNYMpwoSRM4yL4o6",
  "key23": "4eJkUWpudGZvvmmWuDnwxto81SoxtshAsupqYcEJNiyYfobuv9LbNP1CcY1VitPu1KESsjQffV1v6zGXeZU5ZBxL",
  "key24": "jYPy5ZoZy2hTngNU3HWsXyDruuTLkxBW5ZwGn7YuYakvbkEUjBTP58NwTo6izx7ECjVkxfmzXKzCcPxA5zi2uh2",
  "key25": "jQ2ULipvBhmqEZ66NMibA7CsMr8JXaUdwKLxgRehQ9EqeJMLHaqYind4jZzqYZ5Hw4jYWCkhJKEHbkpUff8Rzv3",
  "key26": "3RxV2pcKGjUL4SDQwH5FtXtSEmnQpezbz6djb6EiYRC8ouBYAVgttKRnVVgBLwk7NYWk3T8bWPNhepsGXSz5sMCA",
  "key27": "2CRd4Jar312qxox8A26GBJFzezJTAuaPwAXiuSSAje7FREJfBDNVYWtWgaAHWDdrfWc5BbjxhLTeV6YpQUgaLXdE",
  "key28": "3CRyNjhPNdnRueKabzBmFvCJyQ3TPmowAStjpqy68XyNY1o38MgharK5vyD2FjmT7RTJQJhgtpVXi3rig62Qgdgz",
  "key29": "3TvQukdkT75LHMWzNm2h8ESJrqy4qgjxhxDNmrQJrzixheDuWL7NgQJTTDGQVC7TQqkd3CtBcvoVG9pLkJG4GV9r",
  "key30": "1jecZ6EbQgvq3VNxq7g8FbwMyFaPE3JSmVspYTDKMiGiph71W127HDVafZ8LqqNxRuTkTu7KdLLCf2FA71yU4zg",
  "key31": "MudjdMeBxoGWHtjJWxXxmpeUp9T9jXSH3RVN6hCcZYAwNitEhJeUexHWYHmfj1HuwvRE1g2kfZjnYVXiKYNSawF",
  "key32": "4yAibx2MEStgBniZEoAnaTNSbTf5wLw3oLDPUQEu6ZrAz7d9YPfc2jjuPDiy7qDtJ3Ut3q6MPPkEwARo4LqJHkrk",
  "key33": "4DUoZZWupwtXtXgSLcxbCMFCWfZC9314335K1s5H2mHErndg8bnTc5kQPYd1gyRbNKs5b3DM8v9ZwCS7RdhPcXPK",
  "key34": "5fyruc4UgWqfSVwUXJkgTgLwu9DHGfGBpBvSkd9NEp1Uf1WCekG4spckb386saBF7mdsRQB1hDpcHpZ7qsq1iSft",
  "key35": "3PriMNMDKrcZLxAdRDffBTNJH3KrTym1T5wBvctKa1RhRwUW5Cy2RQXE6b1EQcKFmuRvtUqVFBHmqAZLHNj5gAD4",
  "key36": "3qz7DzX7C91Hy2eYp2S2DvkjBE52rFt6gDWN15wx5XvNkQryCH3cPrA2DUSa5rgHw5jp9LFipdXRtMgKFZ6zyAty",
  "key37": "4Mv4XMvBz3xecaJZYy1evkAxWiFpgEaNUfLE1HbzTngy1jiLNUwmGoxkwp1m8ccE1rCrLwMC8uY8mmqCSuieWdWp",
  "key38": "3Pc18ByReHXZVQDqGoZXo7nDz5eC6sv6tXBM8VAxQ3CkTpooTZsX5E7m2jBtT7gbUvgqpUWhvcbiVctcPTcg4vXC",
  "key39": "pA5NqFWZ3RLrgurDgiYeyYJyrsjBLJZokn8foMiam81faGPkV13NENrcVAeZj2zBdrXv7APgm6WtcQUt1HNZkk4",
  "key40": "5TafEXYDJoNhDh4wrPfd5VyNMLW3ogNLAuXta2j15S1dnyJAFCajXV8iSJnRaukoEFszQfzVEBzaDyFzN5k5UaM5",
  "key41": "5dWivbCf3yMMAAYWfojNieYf4J5pbRvtWYoBHvqcctnjPQ7smTajo74ygPWrH6krbozSQgKuqy5LRhzjKa65S1NZ",
  "key42": "3zqkdwfrdhCSnjV8shZfinVQMmodu51dVXkUWkMGbM3exEeciaLmjmZQFYFdPcJaELp7iV7j4arBxcqnCHkqtokQ",
  "key43": "yXMR7id81zfTmXBaoMk9Qeb6JTbxr8utimhSPKym8BzCQW6GW1DDvUG93EfL2s7WxjryX8zuszX4DPduYXXc89e",
  "key44": "3XVyNt8qZ52jEvzyM7ahWLwTJbozxaiuVstGSyLg4tU4ffFguKTA8tJAEv63FR1X6ApyPy9xVvrFzbg9n5JoX9Dg",
  "key45": "4ogctF7nwvC4pqf3B2U7EEWyaxgBDrcTNH2oQRaSuFhzKtRUDVyEf6nPxgi7kbAwewNBXN7tkXTWXL4xDbQQPrw7"
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
