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
    "3NqsrSjpXeusR4FToeUzy6w9er4RUqhzwGrZSKappoQaoCyjJMgQNYMpabznMqYksuTs63CPVFWCMCnMdNfrK2G1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uyUJgjbTFoCmRumkj683YiQMFjV7es8PTBNk93q2YTmCsCny7zRaMytQLMMLgDAqekjsAu4Uwm2jz6azgVSvSQP",
  "key1": "5tLk5sH2vnWmegqXZN3BekV7nKNd7yjfjy65QtEcq4bLEEDJkRhshFZ3GxvPnwPuEqMbuDm5cnDNaqEPmqja9rxc",
  "key2": "5PpMg1t26wTy5rYhsV6DrEUNBSSSKhZnLCXvKWnqmT44xmqxQE8bDzkv5dFTjbUsLvKorpGy2p1m7H9PjfW2PtgY",
  "key3": "2sUUM2vR3wezQQRu1hFZTYeS9HAoYTrduDo6PjzLUUGQh5kXj61GcXLdc9SD7oSndj2eh98vRaoPka53mAHrFnWd",
  "key4": "95FM5673Td8DQDnkx59AeUWLSutj5kL8EZppUew8z32ChKhEMGLwpgeW4xzSbYzscswHwYbtPD8CA6uNiqHLxtb",
  "key5": "3xytBbguwGhomESz6qJE9KrYknEivq438s8vQdc9UZLRYGZvn6y29MunYZWKyDPG72MYVXeBntpNV9ns2xT4tnyD",
  "key6": "CGUJQcaZD4oLmYXwu7Rt14qHs3NviVtStks4FNXDX2nMJRFB42tSuXJNc4cciQTmGHPfmaz9TccFeqaNCnvZtH3",
  "key7": "4mykmpGNDEKiZDXFnHsXPxCQmtXz1hxo2kVeHLun1Ysv9bchWoX2kPa51jPRnzrT4pJW6xP3hDN4JHFpyDi6j2GK",
  "key8": "2aVGDfx84nqntMcz4d9EEN4YyoDuhnKspeoryV2YQpLw9hSDYv4kcoUnq3QuVsZifT4HmGnDyAuptRqXdgx4NTh1",
  "key9": "26C2J5awgCVM3bDKeqiyX9yPp7Y7N61d7PaAxtoGwM4mTVj3Bg25hJz9bWNDs6ZuvbUtM2ziDK5gP428EqaVyw6V",
  "key10": "4U8zkU4uGaa9SWYcfqDxtSm4aB7Dh1eoJ35pCctUvhEBdoGSibxCAmsoZaKT5ApwVZ48CFZ2nic5VtkB1MzMC3pW",
  "key11": "4u4ikacKG95dLmR8i71UZBWLg2zQm8GGpKPtMVTXK4XZZMVzdob4k11pzJhxfttX8vCxDTZMYzTGftH2u1T4kDaC",
  "key12": "7VK8MLnivVXUSA2YmwpEhEHm21HVCi83LEKCk3MZdme24AWCHFRBUdfcRF3cAUWswTr4UpGqfTzSce8ZqneUswX",
  "key13": "3EpEXZ6g7ht3BtapJQLy5q6VJ3AxbZqr3vY1nDC5vf76zYqf6Dast9SBEBBUzzfksGeLLjzx7HBQUkkRR2bXcGAS",
  "key14": "vDW2BiaVMAhGLK3UWD7geuPMXCWqRabjuJ9iwEtEosJSExBzqMeuKwgJLa8QnLEfT9VesGuivCV5rysvhSNq4iv",
  "key15": "42LfbAjE7TYf6sVpHAwmeiPMv3DZpQizzcb1aCmEtFHi43V12fLdyXv7nhFj1PQXQvZyhydwQFFvqp3ueatz1Sbf",
  "key16": "2o5oz5EENF8gdZWADdXZbrEzSKgarHNWYHsPKCVLyx4ZLDuVLTEMCTeJ61G3x2T1o9PnBtRSf4D3Av1hgVrfnodx",
  "key17": "3NvurCimvR7EmFKxp44epe7EzDDw7uYCkskEbCjE8AWft4aFXRAzQ9FpJtW72hvCd4zQLoPkzkPYtL2TuSX7gLUd",
  "key18": "2WLL6bMaM2ydk2y3epPAGXyWRSeDSahHKE1hEMJH7Kx528mnrMfAkFW1wfyVNYTjbUqpxCZt6jhaA3GNgcqUsbKy",
  "key19": "5hHLmHpwHJDSwex9xCZVJ2o9eF8XC3BfQi2BWJ1ft8bQ6dj9HNRcHjzsA13nenGQj4MTdzoABTcN9KBJLNiGfByY",
  "key20": "4ifWjVjr2ftyeJxpc5xLMa8FyLtUbBZgFpHDWkrcYbrsthCZbuFH72wWrSAqvPh8vhu4YwGdWQ1347TJEit9gTBK",
  "key21": "5UJHgTBA1urYUTjTGnf8rLnHeQk6LNhGLEQduNYMoopu3uUc3fMXXiduwJqDhavPDWJfGs36u9iYCbHncCGT2scX",
  "key22": "5qK1XLEEiYYnju6ZWuaaeVhuuq7wuhKvvcTUQbKyWpoAqbPDBc7bSJoY8hMt1ucPbTPuRy4GDYG5C4mpX5BeYt3t",
  "key23": "63oBDKA1xPt5mX91bLYfDq8khiYojYTW3inkhNinW5PVru47vfEVZd8yjHDvS92vnxZ26nNjELHtNERHeSU63cmB",
  "key24": "QDQAg7aSeFL2wCbducrYipyLyd6Jy6fEVFrQh3g8WKP2Tw2vkhT2cUovDkShm9GyTGptJp1fi2ECRqKuSNNAb3J",
  "key25": "eM1RCoCPwh27ARG3EBdMrMHgZ4N7kpPhqFAFEVcMUafuik4L4ryzjVNuM8o9LXDu2SyM4km2gNWYiKjxyQ8U86k",
  "key26": "52zBrAyTXhJyWZJWEYghL6eEGEvs7HzxydgnsMwv7hWrUwKKd4nf18cBTvsoJDBhuFBzyVEfYuriySR3vrN5zRPH",
  "key27": "z6VFXpFvdUmYEGbtmzENw8mftHafALj3qhBzTLPuYZ6gK3m3VaptaRnk5sgr3UmLEi2ozzbLjHAhj5VSLGMHAuc",
  "key28": "3ASvWnfD6X5MYaPchqkiYdaitUWG4SRLuM1MSEWEA9w7XuCPKEuvgXwAHnJQ2RyCKemoMDNWbzruZh6iY7GUNJA7",
  "key29": "NT7YoRCYmkSDRJcmyCcY5YkLzKM35W4U1CEoWGGcqN2tbJCDuY8oAHt3QUcrY66kbGgcXCuh5jqHNyDphrprB96",
  "key30": "2bHTUAMUGHpbUUrR8sAQAHqcbcjyDbRw9NKA9nWQydyNGM5Fn1gHh9wjSHTPejMKKLWyFCpDmUshZw5oD3UXJwQw",
  "key31": "3zKQvA49xpes9kVbSEayPGozNihg3CgxmL4M4uCLz98sq8WZLjayNe3nKVx9ju7yQG3mK2isAtEfwfU8uiNEnnb5",
  "key32": "498bXh572HULGWErScGus2s8HB8p5gNgAGqcVX9EQL5STdLSpYRaVB7zuFxTZabMpdemPh5PRzibDRgzL99bNQcU",
  "key33": "2PWXZRT2Svn73839LeLDyS8pUZvVXNqX3VVhp8WyJcu2VNzvgzUpy9hPpv3FU8qLuhohSUm7ubp7Bq6uRumEALsL",
  "key34": "4xSkPy6BnTCSKE5cb6KAWqvZxrSLK18gukPmSzJdLZV6xfdcCBgeMZ8nk2U9Hoj9K3cubFVZdzbHYixVi1oA2yRr",
  "key35": "222spCeov8MxyYtecuhBG8E42HcePYMsAMChi2pXDdTtLvuoZ5pTwthfUM9WuzZDBZMfxMXX9nMTtZteBDCb7YhF",
  "key36": "3ARKPR3fpxhxuEcRLXhooG2cGPBsJX8XEQBCBtRhTg9yLUzSSMwVW759nqVCZ33s7YQ1VnY8iRcxQh9YLj3Kut6g",
  "key37": "52eu7EJF2vxAfR1rRU6KUfnLJUnq1EZ7XdztkM2sN1gKqMLWSDTuQ6x3y7Fow69ZwGaEB9zx8LoSAgjJ7Nb8GSVM",
  "key38": "4zReNVjgW89GyaLi3c1iuxMpREyB1dLxMEbhB494usr4bs7o2xD8Sc6rZMqqNJ3VMzcfCr4FumiC8xspu4jGG64",
  "key39": "5EmEzpruzNx67weH91LERDzvfjSpX5RahqASHKab5GbJKhRHJ8YAbSSYAdpBVsTgPcfgGKCTFoeFpFuAocrAwm9q",
  "key40": "TaiZi7W8h73ZxzhdFKmHa3ndeV6sr5k2L9y9dfaadpXGwpLhCSFkogA7rrmUMoARMruEHuYxGxVb3kdYMCfNwyF",
  "key41": "3eAtCofedAusZwD98SVSzrgFV38qsas8GrvXYi6MkojynbGRuUpbSkjdtD1MV3kzpXXEVKWgVFy3nC1yNssUndRT",
  "key42": "4WHenLwsmZ6o5LKbfy84Y9arteNo6QKK8eF55pSsoFq6wL3znsqWWjCsBrWUhy7xmPUxMxcxfMwix4thRt12QSCU",
  "key43": "2MpjsyDLRRjUKMF1SrrwH14d2aUym8rQaPh31v9X3hjB1HUeScFZjkCGJT1igbgzoQA9CcAtMhbZFGu1qfnXM7iD",
  "key44": "1yfYogexxn1UaXSQa5EJo3ixZHsZYPtf6GUQaKsD5LEueb1AdpgbTXDxhBFAt8ppHdVw17JfNJEcY1EPYvxfoYd",
  "key45": "BAztMQqRhguJambrfgmSsmkjLeWF11A6kioz32QLXkDr7sWPu4C4NJjoreXCEF3E5RT2DCoRzwSY1vLPjqJd1u9",
  "key46": "sT8NieqxX2xuGvzwxgUzFWBisZoH111uxHJXkq4otfS18CGphYtK2Eo938SaqxZ1THgTCXBrxKSLa1xYAfHNZ1S",
  "key47": "5oVijC5pKpWqDAG1RygPmcD5XvStgfK56GehARHFT342pVMkCpoe9cb3nEHfzS29zDV8mi756M2wKu6mZu8oTqQM",
  "key48": "2efjuhZVXgSDZJZgC7hYr1M5DZESDkTEnvAG96TswoB7iHzy4MXn8DnhEPm2Ns1uADyU5d7o8P6cYg3U45cqwbE2",
  "key49": "3j5uAGjsnsGDL3Jy3vwZnvQvVxsRhVAj3WEYEaU6qhPjbavmCtahyCaQZDB7TpxMPSo4NtL7hKNQtw5f8zNhE5F2"
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
