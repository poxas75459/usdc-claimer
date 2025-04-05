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
    "2DSKwWbW5s844MYzGHL9ku7CXqSpsAJyfksPPnXZaSe7grhtGCXd4rh8QZX4M7i3GqjTd5HtZamrJJ1ivUBvTHHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U6Sdr5SVygFixDoTaNUN3RWcdgJwGx9geXaMuAX22ML5uRXbBSowxNp1RMCTP8ZaRmwfzAStyqHE4heGZRTR6zw",
  "key1": "2woSeBw1HM5DDKbggHvnCP8mkwzm1gMv3LnVWSXXmFX9iP72aaGaQALSmjnDcmotbNQYjjyzp3mmsDuEAKZzUT4G",
  "key2": "2F4AYU9vkpHb7AfyUB4P2tYjcD5RwVQNwzwrMug9JLFbk48fdxu5HmWNXERasgU35YTJcRUiieQTsdEJyj5M6Nbu",
  "key3": "im975frjXqaAJGh8jBbbdCtwx4kLQZNDCWfhjBUaHWh7na1jXWtXVhCTofZ11oDnY77VVafY6jMwx9iV177hJHd",
  "key4": "CoJSApc2pbQgEBSEvNFmY5etefppnRQo7M1NRbskEYBsSxgrx6hQHFqbbMPZrBmvjwBqBvj2WAGhGRPQGQ4nxs5",
  "key5": "5T5ms4Gf3W7vgzrQ5uE6ZtnsF2wQUdxqUV5oG2rarfRZ3CShZcnTopVKXdNWCu4vJZXsx22qMDiXTEa1NsMgwYg8",
  "key6": "yUZrdRV8tPaEwuYrfPPPDqqprac1g9CxK5xZwLM7Zw2Fokbbe63nBJvGW2cEghxJxg2EqyxEfHs2sxrpyGizyS9",
  "key7": "45LFC1a4jCBTxuyhrMeMbbSQ8TrvgT9isHBq5scqQCAx6aw3Vc2tTSroqAwkh1UD6jtJK39C5HLHibgXohckbogp",
  "key8": "4v4h3WG2Hkv3jJGh4CZw2nVNGPt9qVPscSsAPWT2BihsN6ZwiKxkrGEw6c1qcvjnZLk18jpUHpaPuxEz8hxHNUZD",
  "key9": "4zKXisxWa5TwGirtzeF9vKU1xhvtCQFChsRevTwM8usdhBad2JnUv4pr3y7tMSHaxqBXYGjVVrtEWcAEpiyrNEnt",
  "key10": "2ni8SGxZPSLvhCKZ5wNsifcZsRzddJW9zcFJvq4Tjtk3xLbt4MA6DdwWsQUDhHDpNQbRf4mEfaur4nLSeLatLVdR",
  "key11": "4stXV9tyN4yTZvHTwH8VEPLEnFWSzsjcT2SzQecavrhvtqnMFqzmrnDC3nW36U5uXGjayCww4m1Cq8xLJswsuCYY",
  "key12": "5wJzx2UMceh8XZD23SXer47YPhW4MJH6Yi1jzTmY1A3C555ATsidBjzFDfRqUFSFJ8QJ7rFvTdDMEMU3qYKfHrbE",
  "key13": "4naxM3RNRtc3FNCjQ82LPRyQaqQYzt9pGjnQArnzpNcUCTUwYECn6S7A6ja9TpUjWTHPT5gzQpCGrMmAbJwyLDUE",
  "key14": "2ftqBRYFewudjLGSz2yKrALEkifkBzaBsw9GkYgKFHPnn57cpNfCZA2weYNtEVrN95z4qqGM18YkSqm7V5jEgxRq",
  "key15": "3CZVWVUvg1AZGZWfQDZkc1YdH9LiBkWEwPDtJwQyZZDFJwdv6YsbF7336CqWYHFViJ5DHTrQxbQ79RePNjpxzo5d",
  "key16": "2daPhRYntR1PYh4w6DgHvWRykAQtGJR6arp6TLfB1KAXuqKh9XA6dFCRLPLbLEed5EcTh5FbkQnsdSHaqu7xnK3n",
  "key17": "38Nwq2kbdm2UQsQ8ZbzvXiRF2pRfkdwKXoF8F6nGBisPHAYEDaF9nQ1W6Ap3iJHHBvni8Q4qZfBj1jXxm33X7P2T",
  "key18": "3QjbtV4wrxkLe87Rgk8g6kKz6z3UWBBSVZZWxdT32EQzRLtR5YToHn8pvEqaAWiKxREKm4zSgHDXKxDeBVRoW9kz",
  "key19": "3i1U79JC2vTMv6bmxkk8SwhcoLNfrKraK2Xc3Mg9USLoNrWsQc4S4f2VDopLJY1h3YJ8tm6qKAaUh9R6oryZ3EHe",
  "key20": "gBvK7SJJtYMLXmQC4WbcrcMaWsESz9Vys9vSZ2L335ofzonwSU9oPrZXmmHExi4tg3wBTM9HS4zDdA7VYw7vAk9",
  "key21": "3d6hekzem44L5Gd7UyZAcGkbpxtGmqVPUdVEPqeGcUKeNVetPv156gaLH3U3u8dx256FduESGs5aqSYTixyCmQxd",
  "key22": "5B4wasdwNU49uXWZZcJm8JWtDE5bj8Bd9bH67y3LxXGoV67rW6dCVsY5C2ZbeA8Q2mghdFQCcz5BGWiuzUyvfgAy",
  "key23": "2B1t3NnoLyV9ogwHmLKZ7GSrvXAaJZuY5Hbw9Vats6u8YutYcQbazvgJVxih7n62Z65sf6uyeXtVjTZ2JscuyPqb",
  "key24": "2nL8EdX1jzuxrVBujRtEezvmeHZSnwS9LHmoCJKssYgrTPa2bS6oQr6AmtuzZjoih9FsKq2zt5U6eve3HtmoJMjf",
  "key25": "52tK59JEGN8XVsfSXEh1RzmF4ZPN62LYWQ2xvGz51RRTQFgEzcU4TDD5KZAU39tChLqXuahGiq4r7pyMrQQ6SnK2",
  "key26": "3vhjuFnwChBza8kczqw4cd4KFkksmZ6arsb8a7u13Ea3PmtXVy8SWktQdHZEoEoB6M6rahBqvXjVCLwK6x3WfCoK",
  "key27": "2QdvXwsg44SzJVDPAphJDhsPNsSj18yG14grEiPC5U4wmBhqGvHTug4brWpEobogm1nuqey3oVWeiiTuSDPFKZng",
  "key28": "5eDuY1tuJZWpuqsid93EhqtcRrvP6hcYeRb4VR8DLCuqdcGaEwrYcnwt4J5VFU2nd71sfiYT754rjNriX8HUK9g8",
  "key29": "4c6BwR2YERrQbDyLVRgznWSGNMuLVGEfaECBFsXcjbcEWszKFwhborxhWVWEPy3aJYpxm7i5rDB12TEiEYN9g2Vn",
  "key30": "5yaV98qDFYWftKez3yFzUsxSH4AcjNh78gVWxVJLC7pCFvUsUJLwd1GB44cGZhHa3acao84bWSVpnnyUnTTzi1nF",
  "key31": "5Fm72ZLB87xTz1obr9G4pF6iQ86YW8UNvDYWrXnGpNLLuhYNsi6GUMvrJ3jkUsrN6Pn95vdzH6MjeWc969pE4qXi",
  "key32": "5NGvqCxeALJyj4Sy31eFC94aG4p6JcnY4sKWt5TRQMzKGWqAAYLz5cyZWr2WsJJXRWVfhvVcwZfd7JSqesy7KgVt",
  "key33": "MUCneeGNdWPLkFXW9N3EngzWKDb9NhfwTQwkvQaJA9XnGz9BBJvGgvhaCoXgHsgZVaSmirjQVNqMsDWBhPWtWZF",
  "key34": "4jkUCZjgY8k2TDEa5MA9C7MFGJGtLNeSouuy4gx6JfUnGmtXZJpC78NTgs8XxoVce13JoYMFC8CCNz47KsLohYbf",
  "key35": "2AKTrAyjWGXuahtyVkZVj4DVp52x4Xc4e8eRnmQrfhP14EpejzkD2ge5pNxZUrf6A4QqKWiePmLFdocTGKFDr72F",
  "key36": "3b8RbtWmCGe8s5BuKpDdrDF3fStdiuRinPUu7bZZsNWNvZvvULiugBUodLp49kBkTjr7wjB75FDWH8j7XvrvDzFJ",
  "key37": "2iMZeZ4MmnMRQmEnhEc5yv2ZmtNDte4CEkWUET5vHm4UYPNVaf2Gm6Nvm67UWSvSvhWpKieXow4R4HginmBUGarX",
  "key38": "3ToNkS2yBeeJKer4TzByWpedGrw3QjfoLQzuHDS7yEMnwSDNX9fg53KsdVWHpTjuBxX5ddybCh6tVDVRABuf5wL8",
  "key39": "45XyJU6wC1fNmwx4rw9fdwSgZVuAknqFkJY3AtfLqtu6ipWwBULpP4xzssa2WZsLpnihZq9TKmJBF39XbiD38zMb",
  "key40": "62K7S7Qqq949Gc6oDgsutanges27hYhNtfZ8CHsMwo2y3FbeTQnf3cJx2EtiUkc1pxdPGtZ6qofvxFSEQouSKSn8",
  "key41": "5v6jy8jxwHbxwu6sr7PnxaqjiTth17qfmKi86fyaQttH7KAGpWNnAECLMEnC45LKCDj37y4rFiwQDz95JmXDiHQi",
  "key42": "27ZBppiYRrhwMnrs16UmGk4PkqL3cYk8izJW5YdoJths6Bbkro7SK6VUMw2pcEzhPam3yrdT4gm8AGwVCyyYPmCU",
  "key43": "5SgRvs4tX8MVSg8Cx1o3bZWvr8TGfW5j9xsNRzKdcn8eUGjz56nuPhsGbC6ChX7rxfRxjTZgEXkqMCSfEfzhYYyT",
  "key44": "7j3HJ6nsxVjg2LunnwRsCDj3rZBZc6RK1kRKxb5kjsakJM1ZDbqCpg62p9kD5UWqKfirCqCQQ81ZdkB2ws4EvXS",
  "key45": "3xkCRrurDkcufVsMtwoBJNuK8FVPHLDVQPof2H78ycr5ibWNUXhEq3hrCLKwJhdk9fdDarWqUJfkZLDXf5zgerj7",
  "key46": "5U79EjF9Xe2kLrqiaHKn8WCKr4oadxgwUsvaKqMyrBdmP7a119B9HsjkUeVW3r23X1fzas9stQMYzSRC95Puxbed",
  "key47": "25YdT3nTgkxVCWDKAyBSAGZ6Ne4K78BBiAoVmZsRJnxCyVSVHDKctWagMJ7RKQBozFbTEjpY8WiTJw9qFaZsprSz",
  "key48": "EEguAeqCi9qStBmvteiPLGg9BxUx5igG8pvSzFofkcyeaSNAVhEyTSFCW4DnJkBc5czFvL2NYgGdWa8RU1Wx6GD",
  "key49": "5Tu6zJ3J8G44fP5DdYWzdBBiBZDzwQDf5MvPxzuXrYtKMbnhtGwcJUjSdErNzmVUEsQYK87Et9Jf1mTv8ptV4Vr5"
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
