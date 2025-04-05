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
    "3tpWV8kFbGfGwH4RdpYeTWRdc4VzF2tAb479gaMsjHsEHU4bWZvbEJSwBMpGtyxHK5hTNDKBcBX2SZbt5FSoD6hk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nVDaib8obW5rKujkMEjb9Femf9YVXi88uT6twsgMtMipaoJa8fbAi8cMivoCfM8yj46dkZtUKTwKKUcURPDagEt",
  "key1": "2SX3kmbHXgCsXtVGyMp4DfqXadNKeSs1v7x4kLJmZMUTU8dDfKZgSBLHg3RxgHsckh9FqpXiuCd759eLMe4gLWHf",
  "key2": "5aygosoaZzLdmGd6muVPTaiV81fi3fR4mVJSC5weGRBYHQ6uzMSSzPqSm4onNSs8bEQF4bD3p5w275sFTFMzXBgr",
  "key3": "ufG5VXyKDJTRkygFURu1KJQHLLvfWGEw9RZcQhmMstLZQQJiSATZhTFbzk1G6qPpd42GrLzT2Lj3osCv5FU6srv",
  "key4": "2k9ZYdeTjrCSc8AyTcsqPUAkoQYvPDeV58S9mQnaeWBMDhy2uuMe851bAq9N92Ng9u28DWy5cvt6diYo9qeT9Lrg",
  "key5": "2N22PhcePsgRjMYXCg8gxgYtfcYuprf9E6WYLyYsufPhwUsKzLKor7Le9HDjs2owyFfwuvXP5sfwMHizRsKrfGxR",
  "key6": "5aLmTXvVuLYn8uQAt2rGj4hRDTbu38amD9opNF6EABwwde83qbxnjduscruLLDkRtFZpeLjoJNAMWzKbhM9VtM2w",
  "key7": "cL5WwhG9cyMSbmBNDXdK5CwRJuu9hRQ4QqV8hoi5qF7TStsLJ85VQ4PJtmiJb27nCorj3kWwsJz5mfY1AVxSiYP",
  "key8": "23raeMmj2j9oxmEcGZ7Ao6wAENfKW7FSFAREsAATw3LvPtqq3ArVS5UHLqrVT7xgULuGE73qVeuK35wvwyptPaCJ",
  "key9": "QmSLeGXHnTAW46wWzYh2raAwWvAeHfKR87TnrzEN9rwW6j6Ea24mFMd5BZ42hvatpuaJkSHpS2KLcKxXiwnwqFW",
  "key10": "3G5mx9JynagQ9Y7uxtXoFg6ZKRop2S5rf2t9amvUqTqRuKubVZtPBtvrUz9NaQH1gSGZBRbJFbkia8xL57DjnRaH",
  "key11": "41BRH5CNzusNxbTZXYNoRUTmprVvJ7hU2hSKEb2h124nhSixSytAT1HvKyyXS6TEDFR6DQaQ4LF9hFiNSCEJUo6y",
  "key12": "5E5CD6AXKj7f9oTTmmQPp4kzPY5LqPu8ohffWdP5esT5kzK17dTT5oqgSLKc6BLtTcK2ibiBh8pFoLUS8ZTCd1ha",
  "key13": "3rfEddxPfbK99zhm19ZeLXRSm7j5V2kZCcBKCKyehvkmiM7go2AiRN9hYuzJ3RYgvfHyFxW7CxzwUFx4xAkmJBg2",
  "key14": "mTKtb32Zz1NCJZcE1YfCDiszW7Lu55U372D43AEmnKo5WmeX93hy5AZEYM8ZumBKQ3J8YasK9wLKK9QQXFCyy8H",
  "key15": "3snVTcTS8XgNwzqV9BSyybJp51HR1ExLE3YiHLfBd2HxARkB6PRD2QY2pGE3c95nohvNU3zihbi7xSmgHhwRbK1F",
  "key16": "Xe3eJzBytkHU9NpEo3LDNf21QcgauuREpjUJHHbqcGAgfkpoxLxZ8JqoCBvsnBiH5D2E5GwCkTjhEtkRcTvqK4x",
  "key17": "B3356RdKUJXnHtaUq3TwuKDRvbsNECAPLr95YovdQF4Twfb9ZcXPAXfJWCemspSbPkSUKDSzQZWanEmFh8U2qmA",
  "key18": "57UyMpwbUJ1x27RWFs7ZtwXH4GD1UWSjBhQbmH5HXYVQwXSULdykGxe25nr3z1T9eqFHh4CDCqFLnEUPwe6jd3eN",
  "key19": "3eKMQFBmUtqhAYaKZBBCpvy7xY6ivpn6M1VCoZeZhNAqmZQhU1Z3wBsQbGvWYssq9n1GYdGMvhEsqGZ9N2n3GtQ2",
  "key20": "2kdSCtx58bTZmxUSv8pVDFHTp4uxnoShbuBUMKZnDz4yHTrqbhsZ9Go2JpUuk2AyERW3Rs3F6dJaWcEzcisBjhs",
  "key21": "2b9GvpRrjcPmZJKLu4Y3mwccxaxKXuYFvrtT1iQwhN5FDwkmPenLv9nYEDrVhX5wA6N3vrbx6dfwTAz6egGuk5f",
  "key22": "3ErEuyroNz3XJAe3KFpJdyYs3SEgcZL1bGHuDAeVoyGewzGs4ysDmPRk8JSwfoZzvKpzPTrWUQ2HnpNKpSyV4QoS",
  "key23": "5QfkkJBDanRCtn1sKLvW8ZYDW2YsVXFQufSKyctQisevrUz53r6i4t1MGb4UMokts7AfNvYFyBiKtDiwSKh8Pg45",
  "key24": "5wehbmN4iPYURJ9EjL8x6UJL8rAEcvgp3LAz1QMPP3BiaXxs6HcaqQGHPwByav6g1AZcgrmSwJrvNr7VxSCC4L78",
  "key25": "4P95wEBxvJkWtRJ6M7jQaJWC5rTVFKe1oGwZGkXc2YixC4Qj9pZrRoW7TUtnLZGDdzhXqcXpwGJF9krGBCfaayUq",
  "key26": "46VQWtYptxibMoTAjLzokfRzSxyuoWAeZugFpkzyAfSh2CTCxQrvkA9uDmGmndHFyfdefnX1WyAuoLaNPKVEch6r",
  "key27": "3dFc6vZnCDnVMiTYbP9jjeadmpZBy3uzerhUKUk9JJR26JYNLEFJPPM92R5cm3xgDTT3eeP7VpRHkPU6LeKeRAzB",
  "key28": "KGDqsHbzGqjnWDwUBNiFqs88nhfGpbzTz2FGDGL3AQP5rRgiAXXP35FXE7cncwn9aRk55sKkaZBL6cyQitX5K9f",
  "key29": "2ov7zHiXWFD88j8pWwYdLVPBpzB1LCH6oV6u6EY3E5t7FnciSu2MoNzLv3Unc4M4YjcX6BYTDAwSsiQqC9V79wQ3",
  "key30": "3MZBXHGgHTofhStVyJCx2HPTEea28WtYZrVa2qV4v9yd7DnfUEgXeqhVBs3WR4Ks2aL8Cy9Lfmw6jqYkYQZj8f3R",
  "key31": "3VvFpbQXy5C88iWpkYc3aphcPSBybZU856CCxgCS7Ezgq6WwHXmEZxfgLt2csoHECi4JgX4iArbDrxJQuLktMtsv",
  "key32": "5Lf1bGddcFtfmiL5fYBercRfDxVbzcoNux5A3wvKraS8wPch8MAgMdxAnWPs6JPzyCxnr6TJAZV1XfmE2PioTRKq",
  "key33": "5YqVymCmyMEdwY9gzxMcEcLJVSyL9QdpKihJbkMQS5CP99mErKsPvXKWHZsw9TdzkBQjy3Z9dKZA7U6H2DRjyHG2",
  "key34": "37yZVRdXYiZvbx8p15wgATZh8YKgG1Cu4Zi338ZK7EQ7QpVRbrNaHBZWJVNZb49A3Nq1FFWPX2sh9QpbXPpSqhsx",
  "key35": "5iovuDpBu2GNeCSdSc2Wc4PtqJVGoY7oJq5c8UAnnA6NxRcWXkAVDC3PMtUPfDGvLcWCigHjzEmMaqBMV7Anv3rA",
  "key36": "4shjp8i4YGZwNKNL8QXJJvtfwGd5KGXUmr2634nLhussBW9FRMxpPNwBanif6D7Q9e34uonDDZvf8FQ2xFwbgsTh",
  "key37": "2wgDVJfa4sUpVXA3GmDXy5TyvVWpat2pvomxUPzyU1MyobUHqFQQGXD27vygZ4LafpA4vCAEVzqQfAmGbUA8BYMa",
  "key38": "63NTKkwvoYtYCxTBx9vRmByDKJjGHLyDpxUZinEGNBykkR6TNapXCayNRJkrFoGR7s5879nfiMYn1xt9UwSWyxTQ",
  "key39": "2Jae3kDxQdCUbbkdK2FQsRDWjR8srELV4RbFAkexVh4CsadSKsc8Vt3sgWAXbc22uoyTfhYbturyvxGq7CfvjciY",
  "key40": "3hspqo6qWNxWaPPZC7tj5R4jkohJ4BvY5ABi1V8Mz9E8agtg1Z4Q31ceGbDLa45PXytxqiDWKTSju5ZQqxQoAPBK",
  "key41": "26mhx2kpLqkTfnq4EFJxDb3HjF8MyJuNLW2UApERUvmwzJ4MEydaPb7LKjZEa74KwVk1eKgCfGyxCUCRmCwbRBvT",
  "key42": "5EvTG6215D7bebCdKHQR8aT94bJxTsPmbCDLq1XxrnTWNRJJSuCESkRpEv6E4g9uBjQHwpMzELXS5AjvytT4wnNy",
  "key43": "zQ4BdghjAFJ8WyrgRzbiyc8orb8rGdbgKub4UZijT39HGk8V6dD5pcDwJDdt1HdvCCqtG6ivcjsrZXgLup3i9or",
  "key44": "feqwHyu9paxTrUHGfp6S2R7ZuqXcMg2GJ72FmQVdAVRe1MKJqRALZvzJxgKxyhJojw2UFAu6QjFNS7humyFy4Q6"
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
