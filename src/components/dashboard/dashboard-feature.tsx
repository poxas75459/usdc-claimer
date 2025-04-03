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
    "4N4qmWEBq4h8VibJ7kSoLkDFfCGXsJQ2FqHB8knPK8CxSU449UwnL59VFkWKuBhXUreJVCknXGnRysTEh9bKs2WX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ySznEHnb6HcptMTUvjTkig3xwrGvKhK4SuHnACXepkJW7TtgCxKfobiLPN4LgSwcpQ7PYr3DBkJwWB1cYKYGZWr",
  "key1": "4fU8MeMUsomxy4Uzn2pEsqVj6S59KVHaa78qSWFn7GF9Nt182LQMUGqs1RuS1RwihCoZTkc6Kf9zqfFft8p7seu",
  "key2": "295MPqvGzH9MDYDsCYF2vhk43U5k4q8W86wXBNFoiBHPgw2RBzBoJdch4Tv5BL6AdS9gnE5qnYyD5KaGLTwLbFuP",
  "key3": "2n6ipbXgxWK5ebFJTmNd7vNiKn5uf49YN5REr3WZrdd4au8hfATyoakDcWvzWS8jWRA3j3sRWZyXPvULBW6NaBhU",
  "key4": "K2ZwFfP6PK3VNgVqzkWJDEQ38GHZRmppVcDz51APjpfN8gy8CG4382eMxTYCNx1zkSANTXKPxHUH7UCikigwEQu",
  "key5": "5pAsS5fmJgHf1AoWxYHiskxYXBDWXdptpLmC6HBsvVd4wqsMNUvmhuypwmF2CsQD5B5B21G3tLUCXLTtVodEr7Jq",
  "key6": "3f2nZpq2xfFjfRptFF9gDNKuFFirhZUenBTLqzHzb3R8WhAjMgaQEaMRcY4CED7ViBUXrqYeSdgmxGJLHf57HdDD",
  "key7": "2hEc8MR7QHcu5tonH2zpNurquNmuDAPUvahn4QJuaCgWFDWuNjjcLQAWr9sDi9rwDDb9qJJ138yPk13DMeQWKRLN",
  "key8": "2eQe6C9uNqeRfg4oqycVEV1nawC8bBaM9Nkutp4BTajWTMDe549y64ybj8qt6hNHDhCfeHinSQJNtMoRMvLndtv",
  "key9": "5QSWXiWJcP5SjVC4LzCTtoUuBJV3k4yatgq1wEeNwfzccZ55dNWAvzzcSWKnvcUWicUxEchZ7QeCfdzHPAg7oN4A",
  "key10": "5kantpog1FT5oUcdEfu4gJh4nWcNocgD1ioifTockfq4Hn9EjrjwBiReR1NwgKtREo3NCHZAvSiZSSW9UKijzoeu",
  "key11": "5s8kyyC8UvjLdfMuqvuAd3QkDnkUWjJQ267GWXHDxYpGnULEUWKHrv6qEB9fH8cjZgg69gs3HjxUiQfw6b8yFFEL",
  "key12": "4AYZ9nBRxHEpieRhtydUhkZRwmdHsoGP8ATLEJdb7dzzgXUqYVEqRfFvwtaYCBGCoiCBE5HAsn8NrsToZWM8a1BN",
  "key13": "4trcYzNf36Q29Pg8RMwgdx2q6saMohNzMAieREhxy7eyACqnjg4ZCnawxbQPUbe6bUDDkgjzGYW4jUK4h9oxv1eM",
  "key14": "4ENEReA1nMvnW335fWp9HjNNWj3RxNPwrqW535E2osK7VnuwKLReqHExBcRmMU6AvRvhU3n5YjoqoAmTUuaJQhxT",
  "key15": "3fyit1PC3CNv6fkEMTUdL3SmEVfuLk6WNnjvVwuoBekbXaXbgdiJDSR8AF1Qi2Cty8CrZsVr3mTDvwnzfnXwjCbc",
  "key16": "3zYvMySp8UzyhnbEnKVBbKtTBb8qdLwer5jnkQVNTL2W9bSH38mxrx4vsHDHDDtseXgBZyuJQ8WLzghqqaoQ1CwD",
  "key17": "CGdKu8rpwWL9NeAEReMcu1Pfk98hNYQVGr4EJHQ24DUHsdMByR3xEtYZC1K1aTfHi9qRC714mV7d6MjUJ5FwkF2",
  "key18": "5ztvgdfWsyCVAeA1GHyR7iPpasgzhwr2hrdB5sm49bvzPgjBED5tmBSUaBAb7CmPH2Jv1y2QEHKRinapkYGJye99",
  "key19": "2sVyYhVcoRbJairqCsKq4auDxq6D5S2zxe5PXVCWv5rVxB9ATd4Z8vXfZ2pfUtBA5Yicy4Z8uusdimkyVrBaqKXB",
  "key20": "259ox9dwJm1gFx3kMS5ZwNV8bLaA6PepUMxKM1qh3HPLWM76PniGnRDW4mPwu6iUeGSSr3M17WKmJ14e2mWoV3Cp",
  "key21": "25UL1vacaXNoUBoS3mx6APD4xsjekWYxZ4S2H5oLyCrCoNfEncXdCQLRhGU82jrBUGuzS8uy93y56AjptELh5nWm",
  "key22": "2v612DiwUCLe9EiYmYR6T3JDRYDhKsjDpH8LSLGHwa52eer4s4C5tH2bb13xqLQyc6ttu4DbCWPZqUE175MCm9of",
  "key23": "3PpfiausbEgTYniP2UF63Un99Kd8R7MiQkkbuajUwqFbrtG7dKo1qk7dC93hizq92Fg8PDukDV5qsQi6ThZ6XpNd",
  "key24": "3eD3ggTyRuSLQHtGk5veAjMw1L72CpAvhBhWw8rSqGyfzoYX4BVuBm4RCWFUcb5Sas3HsPGrBMhG4zFJEQ4vVnNF",
  "key25": "2VazU3MwbCN2spjBNFLtXT9bhhyFcW7J8a4jVXzQjycCsccmTZQWmf8uXbZAaPB466RtGxZJwrS8Jxzb3Y24ztXG",
  "key26": "3jABebHjs6TSDKU1y8xsMDa7DRKV1mUh7VuYmnnNAbSoFXR9gD9pyLWGQ2G4y4vTG9YktWY1pdNfkhvFm6hNzXoQ",
  "key27": "4ndL8iBWZfRgBHDvuSf2Qpz8rbZVcQaEVx9uUNAxahvBSFRwkyXye3Vm9xTjLN8dNuHyuRW5WRVFD76ZRVurQMms",
  "key28": "9xKFPyAQ6NwaXqDrcfh3TiNUm6peeZprpTsbGfQCLPQcKcy7u7rgUvmCX2ELDUM9aso8jpntqxhECJqFopnhrb2",
  "key29": "38Fy35BFJyMNEA4GZ8Xy135FURmv7ATZJRRwuwUt3kCQ9Jrre1Ag7GoSMfhPspcHDED2f8q2hh8x74NZ8Ea6EBwn",
  "key30": "CmWUC6bwiQucgWBJqSAe32GW8fiPk3XPvtayEzAkyaNWPbHshKWMSr3EW96nrAmkTQ7rJ2L57q7j1kgb817BCKj",
  "key31": "2LW1XKCEHLhdnqq62q7QicMFPNtVkRxGWYziCYCTb38AR1Uh6ZVo4k6nWZex1f3zFGPfpbkoJeNGwAkFffsYgAsd",
  "key32": "4Q2sdfhSoe46WfYD81ysNhgzSLdduecmDcMoPugHDe48zzSsXuTLUySjGitcrGk4RtHquegVJcWV7WGhkhz2Qqdr",
  "key33": "2Zg2wpngNwGrY2ShAAjvUruwDnKcU9fBEdJUrbZjTbmih7t5bqirdHsh36X8JyKfGZB2txogMFnGR1GVXYzRiwUB",
  "key34": "2f5FbGkjy7acP96TAzvTc9BQKLr9HjH6iNpER8WzPLveCgPKfFKkHCFHDYN73hYt1wfysxvvaiDvToENxBNtGEr5",
  "key35": "52FF8BqCdQa8fNA1ckh3Yei7vcLKQvv9wYBq8DXvJXoo5AZepoYatoSLXjGeNs5ZrH7PFgLZ9timztxPCTxHvCq6",
  "key36": "2f8haqPs5mm611x7scr4tYgEWwYnHQniiRPmVMtarETDHWo1TesCxENmkSvPBy8AgeUVJbnHmSJJ8Q4kd2KtibyU",
  "key37": "5Yy2tSKo1Lhc7oQZXBLAGiV1253hUjdFwtRvHYRshqVHzjdR32JsTpGaJf8qP67m8AtSn32puHWeU5NGSUhQDn2w",
  "key38": "5dZX8HAVgwLoP3qQLb77NXQ27LMeKKwSYXyMDksw6MsvuAegTNXeYnwk3B8qJS1CyUK9hmoQYTW9PXWWaHvCqfZv",
  "key39": "33XbHzuisrcPyCrKpFCrAsegj3uqAGFrDzyt3xpz8Tthu7utiF8UKjqt32xji2LFpsFtGrJ4FWaPo62KfLybQy9d",
  "key40": "44rgvT85GLWAgN3th4Kbfnw29E2iDJaHLFuRwbwCLq7T5CwRs2qwdTuhXhF3Cb5McFuFWa2SrqQZb37izxccKrHw",
  "key41": "2YLeKjy7i7atfJLPNBm9HJoxghefXwqDk8UbmpaW9eBqMFB4UZBSrW5CxKSu1P8sJ1BG6GQDDgMzDQXhw92XbPDB",
  "key42": "49T6rpzR5PY1xB7GHeeUZ7UfAHczScuhTxcyggy7cDyTcdDNSkVN7LuMmCVksSvRt45TNcmpWa8phLA2gBLHwu25",
  "key43": "4QNVnztNKWXyvt1Bt8GaCeUx2xFajwvgkv1B7Ss6jSXYiJcFCU3HzHckBU7gcsieCJDp5hZMUBWJhgGeypiPwjN9",
  "key44": "4BRd7yjb17F3AvPUMSzB58ntPpoHZS69ZkrRi99kbLpGLbsyiik1aGQNQZPThEpBYxbzFhHReFAjSFiyjLNsVBXa",
  "key45": "4oxn4TAJiHVrDDQqPygCYjytRnaJAreqTnHCCVGPS7ewYsKFBQiXfPDZ14dK22BcrN9PPmkJFaBZWQv3pA77EQsr",
  "key46": "oAUsAfwZNUJL8rx75Qkw1ivM61kd4p4EXsWkyKPzXEumuZuqGAqkCQMs5xjAttdhJ3xfe9Wt54dTUWUXXRmXt32",
  "key47": "wbEFeovR8GRkAq7oKoXE2FYPpkVqSroPKx9DRydPTN56hEey5V59bE1vRFCzvFkhFCUxSPbeEUFkcxgz6pK9Q2r"
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
