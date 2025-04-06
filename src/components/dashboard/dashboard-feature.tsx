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
    "2RtPRKvu7u9hVKwaRketeys3TEpLhgxiAaqDNnYjSSiBhFr7HRhHcZJvyN34Kj2xR6myxWiHYsCDigPh4msY8y4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ofPkCsTzCnPs6ezBoMWAienzdyiHVWn1q3wh17eaGnF78RB75vBDYwfUPbz7X1maJo6TemEv1i1iMfgQEvNRBvB",
  "key1": "2iehjg55stc5Th8p6CwGMCWscaXYgjHV8NX3sgFarCjBPvpLAxcVpPyoi1y1Tmvrsrnvuu5WAZ2sdjyKuPCsKc5X",
  "key2": "4TuvanjvpS79vFmdXsAnthNd4PwQb7mvNV7VVXM5FPYL6TJKTJky4TjXh3moLfQFPEKXqQWz7QFgTdtTv6vuvMJ7",
  "key3": "5UMN95FLXEEpZYLPcbk2sQsuHPDrUXCzJ6AFTEoY3fT4Rigaow4ftrxxpejdPuUvD2DgwyQit3X1tbdsHEesjLM8",
  "key4": "GQrCYdKviwW8KRwzDmRq1cdRBAYfbH5meKAhrabtCtPfFp3HoanQJ2SkAReFGtjkSsyqtTyekw9dAyKPhWRHzwV",
  "key5": "2MGq2EwQWsi9D2g3fHvaCWAGzeKf845e9xw8ZfvBnDQgtJUPTeWL6sAdtBn7hqih4HUQfCPxsN9PJ7SkuStzu5yF",
  "key6": "4GedyPEkLQuPQ2qiPddj3pRSppfUuDfJ1MME5QQyDBnz6F8asuipkQ6JQvr7gm5daJUhhTtXvX5d7gFyU2Y53TEP",
  "key7": "4DNqJwRUgMnSFBfXu1gC3Yn29bmNKYwUy2BpQnVUaGbxqk3GpdFFPfDZ5QBGCnjqgrJZuLmj9ZwgzPnPfZUdvixG",
  "key8": "3yJ3NCSWAwvnudeaFaZkRmfd6Wwd4Uo8f72uNkDdVdbbfiGoM5R4nd6wwzskJgVyTCCuFPSUhRf6j6cYKT8oom86",
  "key9": "2VKu2JFEwRn3XriVQwY8KrH3i7714wSCjP5MPG352zkNmexQVKqzzeX8QkNLVs7S3QyMKRY8XRcHJzyv2ewQhzTM",
  "key10": "4TgKqtgCgUbZQaKUM6f59tUfFKJQPbsqzHWmR4932q7vRovPdpv4RBXfhQ2jqXQrnVySbmvyDaspNGH9ki8rURPH",
  "key11": "3DWWhkyg9VdnjzhDBCmBXx9HaUtiKZk4dLERxLHuy2ZPsjH6LDCGwRtsd8poTBFTccLhEbJ1RPjpfRuj3nrAFMTA",
  "key12": "5EaBPyNpJk1NY8omi9Lvp3rshZSz4H5EjFwbA4HSXbP4gRym5fDhjJczk6e45Py6yp4kv8UUWwSsowjfuFVBiami",
  "key13": "4pvQnaAa9MTySrFt4Zt62go3DrhXufRLAeFFK91rhcUgPxkZ1RicfvXJwZzUKYmUKnVEtyJV5nkEGqdFcrYSLjQL",
  "key14": "5fw5dJLF8njdkHSPwHxi2i98aDLqDTDEpsNMp8JAj6Uy9rnB4TRgUkky2MG8NmEWKi84T3CFGBU6umdftKu94xFR",
  "key15": "4Gyvn1qErp7mgjQLWtj2PbT2rCn1gjanfyxGMTDxJyYNFjCBtAoe7XTB2GPMn5crRmEUYqFnsZqvfs2EYCAydV2k",
  "key16": "3H25PpyysuvdxxFPe7WhPBFrK8CpEdDCQYCLJVCZmWcWyJEp3UymxrFM9vdUmPjKa5HrjZt4LNJ5x6vmKZxSuSXe",
  "key17": "UDERUtkGT6bFrxoEifRphTurWTBstyJKquNgKsFsL3rLmutYyFVtqvm6uPFgFVicwsbLThVcLxbW4dqmxHVmBzA",
  "key18": "38PoXKygVJrc8Yf5UmPypWrPTwiEsYr2JoLKFwLmkiZ2AxumqexK6pkaxfRKw5y7Yh1aeoXeigihDYkrYs2CTP8W",
  "key19": "3okfyvcasm9EgxhkLru6pk4ut4Y26UeWggreHGUAST8mEkHcjeH4FtahrfaY29ENYU44RSBnE6kKMcidAvBRkBBM",
  "key20": "46sqMjUXMrnVJfAuUy3Xsk3HvNtPZKswUHzxygk2APfSJuseGuydCKgPf2nXfeAhKUxVYZE7o8usDhNGNMLZo37W",
  "key21": "4AhWX4w2XKGsUcYTqeoR5hYwargftupCUEUuxqXECmGQtPT6iEJqYJaaoJYFKvP3bj9zP17DcMrbfV37uXr8d9iV",
  "key22": "2FhamvnjFiAJqtieJd69rvFaegTJHJDGXd67aXuhdN7NUSsoyuMBz7uhPGeG8JjwZbhbRj2bp4PAnSB2hD192QvD",
  "key23": "3zP3R7FGH4DG5xgSPm7HwLnfrcse3woNHWtMq54kNEQ6ohmnh3jYdMWFFmLrxQD6xWt4vzcbGSaM1LPfMouKwBLH",
  "key24": "4yGCynnEfUMnGkqMNYMzC3RYHtajuA3j2T9ANyCU33CZsrR57eYWTPLDgBHofGys8rKYdtK2uVgrpvaTiwRTVtLJ",
  "key25": "4dSwpz3N4yrTrkaZo9KDQTw86jDVKbFYGL7xtq8pvoDKCBNU3tvx7oLq7ku2tVXuo9S8K8tMbRyWoEFAkuiuGVAo",
  "key26": "sD8rMuBxhwj5JDbuGNbYbdZGyyjjDgNDFZ5BHnf1RFFqvoUvu83TNv2WZqqVSuvZswB5287y1QcLz3G6JoaLQeX",
  "key27": "4nDB4Y7CooUydiLK94sHGsCVuUDFQ8a3FfMgAGsGcpFWGcf7Z5tSb1oEixvxqfbBBwUEo8SyiiiJWgJcncR5kJZQ",
  "key28": "2HmZwJyurZJUaGvWhJcAi6yxUzoXdn7j33cEsAQRsXaEdDzLj21CTjNP48ZGFie3Ap8ZScw6LY1n1hZRY5tEyHao",
  "key29": "2LRZR8JjYoscAZSGqSdNREiEJmaJ6NvzSAUuPmhnL8MSRvfmFXKxcraQ5TMJSzLxEV5d74VaANBBndsovbYRDCX4",
  "key30": "5eJ8M2J4XVvL14cnJdYENVT1M5Bmfsh31VYWexQZEkns5BJ33HbHxXnpotybTeRaYRjUDZ1udqiDieJbFBSVhKtn",
  "key31": "3UtTmgxW9exfw9hi1yWa62onBiPd71hwJaASkrxg9adHE5QDb6iaMNwrJbzkFGzemnuM1uFJoMMVjTFFgf26D9wL",
  "key32": "36oR2grtCq6n2LSZob4dGdHFSUo5qpw1eyx78swrN2f7568TPzCdMDWJiDrthTSx62iLy7TnkBaLRRrt62kBmYJV",
  "key33": "2ePnNQvce7GdExuCsw3N4FpgH79Fb1bQabDiVz4yZkGcb6RHFkND2Hd3CdGAisiW3sEtUgYaiSzVp2ogiYGRWBe4",
  "key34": "BUdxLsFZoHyDyNdRSHkFWCmQRXeeTEXJgYpRCPtfDYrH7VdDjHRMcYZqxFQrw9n86Cp2yAVXSEhXDiyWuXCbeLw",
  "key35": "5HDWcD6qW1EhSqyrMaqgBL2mG4J4Fwmugm8sPTLXGLNNQgosC8c2c1vzoDKUD1CFR3J3ym5cSGjbK1mg9rUzdq7k",
  "key36": "3bMkdnT7PEdE9qdFZmJqokGdxKakaGLQsZjdHMSCZQCHnVkqbNs4dxy7JUmaiLzZf7LP6YM9wsZKV7XnTLUVs4Dv",
  "key37": "5rLEYgaVXc5AAbhdnqRyiTA5mHvveGxWAB5WNGWRjNUUuwGr7EUYyDnE3AGZa1KPNkJxqrX7vggUp7LhmxY9dDW3",
  "key38": "GywJiPZkSNsuERVTbdaYU2BpkT2GbYHqYXS2uhh1Qpo5bTwXywMXPqYB9mysgxz13kkaMA4NE3HBqRfxqL4S4jX",
  "key39": "2JXCGyYM5NpGo5QEtdDJ9iS9WaK5ouYPzC551WYPvAE4Xkd2pGdEGUyMri7fBrNSyGVz2TPm6haEQwxZZZJoicTt",
  "key40": "3Pa9u9jAySzjP3MU8R1dBZaKByXHeLAEZccP9ZFsfD729PY6UTBt2HPJ2THGzV6bJyPvmEF7f3tnXA4RJAdPW95n",
  "key41": "4Gv7bFJ21Uu8hVXfght8b9y4pKRPxzZuzjnHF1vCsaWctGUuuoVGysZkvzNyXJE3Bk9ipwr5mH4HgHSkiRVEBBn2",
  "key42": "27ksQA6eAuiBSiXP2xZP551id59obrZkbu1GQJ5jbChtz4CM5N1vTByfPe6SLk3HeBy7NbA1SPreg31vNdYCrh8F",
  "key43": "2obwbyH7f5KxHMGsaLMJ2vr84mBBK6coneth16kExNXarx6schR1pqGtMor2MWnL2q6y78uqaiX2iFnTHbFnLrya",
  "key44": "2cVQQjRUCyRiHmBMaVKGix5ZJVix8xzE9Q6BFwHigP6i9f7QemqTn6LzM9xccd4g2inYr2oKkAMsk8ukuQmdQF2s",
  "key45": "L6YHHcLUjiwPL1dJCdjK2T4rVgZX5iPtf9AAuVj3YowP4Tt2K75etaoFTGhSxyyGJ7bjSKVyK4Zz5fUaRjsPAW3",
  "key46": "3xxg7BNHJ1ip5hjWYGbYbrkVBMowmYPwNoDkxxfq9Z66RNJKL1pZpS4WgwhcZBGgiDEf4yKrci8XcjweAN7UN5Gj",
  "key47": "5dKB95WYXhmXNAJomNKgQ86CZPyVxGNFADHrxXBRBzd8uHqWYvrDag9hbP59amQTTZg7o1W9556C9BseQ1aBLxwi",
  "key48": "4a8oHLZbM6p3rGhamDj6ABjMzhwtUDfnNQSo65ufWgTRPzPjPSLXNCVQyA4XwgPRKQQa8CvKX3m7hZQaqqCkUNDS",
  "key49": "ebmTet732aZYbBwFLH27ZyLKKRCah25tVrwiGVMerF23noEX6koNzffMjQmN1whMk7AiQ9u4dC3bUFv9JtKZ82V"
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
