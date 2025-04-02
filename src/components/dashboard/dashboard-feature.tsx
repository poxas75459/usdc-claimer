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
    "3qec4TUA7rYPtr2TYvWFrxTE7J5jSFq6fusaMw18tqJMaXr9mznTtWMCRaHJbknejsKLuy3rYvMYT9qGNk238fve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36y7eh3PWwm2qTDsegMpLzNcJRfHs8kCw2UEnVGSVkT7cgDfyAhNRe9jV1HGa59cvFknkArRPo9LGpfLAd5bd5EY",
  "key1": "25okTKWT9dJgULxUz8xEBRh3gnWKcRyFqDkYx8pTxBJLo9vTLpzZbzbETMXuFwYZn5y5zG4mUK4NRB9q3psXL78W",
  "key2": "2x26E5fX4ASkaqrpGQo63rriNKT6HwezuJJUdTHmpivrRR9m5GEUEYYktEMB7YbZWqQKYEfUuTajzpbg3o1dHzjC",
  "key3": "HFAfgmYVX6Z26fXeauSxR2m2FYzBMYpCjVg7EjRJB3cniAexAMbtZaAFTu2rGqQ7WEX2fXn382w6hQ7fHeprgdr",
  "key4": "4bSwGPKQRrYzhg5dhW2DYJqdxyM8Wk4jioPNgKXCdJ38hHqc7T1B5x9VDueusFENF33AqPnMt8B6v55TgCKek3Bk",
  "key5": "4xpSe8YvA8j4hBvjivGRLwFEoE4p7WwmNDhof88s5cHjApyTggDz49nVU4fYDG3xjBpwcgnGeamBpBvuu5LkWUiV",
  "key6": "3PKw4wu76mu4GXiRHokXVBJoLZUUpQBLreoMeiSz2TPZgU5jxYr7sk2WdURsCvba27LDs5cPaVzoHbvWtJeGiEkM",
  "key7": "umMuVfhDGLKQsG52W3VGfvN8mXUzeNit4wEpi9TiW2c7PRV2JwnVaZJ2VvRka2K3Py3ZQJET88YtT4xWBYnkvSg",
  "key8": "4yk7PKp7z79cjs7swVWS22qnQgNeCQR9G9h6ovmksVmSFka2chiH8omj11B3fgNPkkC5ctrgUjnW5JmmmRTP3DiX",
  "key9": "51kQErrje838mrenP1VMVaHWz1TzJpQBmmXqJoFKmwMVkwivMLFpjk5ZasCDirb6eEWXso98XvXXvXXZG6BgD1Uo",
  "key10": "22GXrNfPUPZFHVK5NVByJoER5xw7tkdRz4bBaMNMdPSCeRSKrn4KMDfwmD4AbgUosZQpvEgpayrFW3p4cY6WeRGJ",
  "key11": "4gsaBTcrqu9PE13SysjbMoQHFav66Zv6mHZ1JxpvbcAZb8PV8B9HhYgfGiH2Xzkch5ch4hacd1w862PpqHPRJhtX",
  "key12": "P1TfCRUQT9C53wCAx1Cn6zLkxbrib4hxjCpXs7GdEQKDJ9gz8XExvJAyvMPkqE4egao927zFby4EHPnXS4cG8i8",
  "key13": "61SpgndRM3MUxCAPrpn4KXoMExHL6zvwrG7kgDGdoAPgm3uAi81ThnCW5xyz7v5zFLWxC6DD3qA9kZ4ngrDMNuFX",
  "key14": "TdVr7yANXUW2iL6h5DZsHLTePjudRR53g7aQS5DiCzGAQXRhxgckh3dbLKac4eQA1iqezdfnzBm7VCQKjzyCtG2",
  "key15": "5B1P6uxunCtTcKwLf4XhJCDuki2jbk4VDWX9rTAujDQH94e1hBNjGJHpMvu32S2spkRVLsVvVEfnHHNo2synHXkN",
  "key16": "2ofewzNhRNaYbLWi15cA47vYyY9gp6hJ2LSA59EYUQmf3iJJEJFyKRTobyNepS4vcBND82ztdyzkV8LZYADFnitJ",
  "key17": "3EdJTA5Zn39pcc15RUNzhkuGnfJwTnjwr4VVhtArsEDwfwKJxvDSvZJjG5SWLzZvpYVjKw6dYEPtURfju8Him6RY",
  "key18": "3WW46xXtGQpgKmxwu2SR9F7FnSY5fQi11RtyrbwsDpbWu8zrTh7mZXvHK2Z3ezevrAYJu7oGFnQisDPGgDRaozBg",
  "key19": "3K8ELkPJWxjZcgyxi6ant8MbjCnkXQcB9ZE77zHqcpHvVCKkyX3C3p6eTdXNUqioRhuLETnfrshVzYMHJTWnGmqS",
  "key20": "5ryvzfrcjD4dnGDwZTUoeSZYSv5HZiaLG6xCFJLRnCYZ1HPkQ6uPmL5vV6k6DWKMx46XwF9v2tdt8K7kkxCGVBEi",
  "key21": "4V1ia33SbeHhqZ5iaemNBpZYCrPAxCHaMr2cPxv4U7MKGHkrmkmctEwQ4ZSTxje7fGJFAX7hA9bwvkzwfXTQFYwt",
  "key22": "3Yv9V2PGFEKWXZR6Xtt8gV5zq4KWV9JXv1qkrx8c17GLFbpxpkcRfxqCRsm1MzzDCCy4Zb1eeaJVVAv61qc5waiw",
  "key23": "3Dn2ANZFc4RED27fcBHyibEEELKVKW27Dyb5w1PEWMdRkrZmrD8XUv3PB1PQiicPFaNT8fS6UkLYfjJjG9HoVjNc",
  "key24": "47sBqUVTJesGdrXkVdArqyVcgW51n2ZTm1R5jjCWXvTiCkWKuwiEmpV2rQHmE8yQ9hU4rxJun73GHwQdCUpjWZkm",
  "key25": "S5tgaJJ8wxjKXkFqLu9pazgHQWaWzdJdko7sUgfHaZRQDCCbbMHVnXud2Kns2ydGC1tw6tN9gWcU9DzK8j3GdY1",
  "key26": "5npawnMoXw1Saoy2q9VTTZNiVhPrXednZ2xPzWfJgyigU2Q9jM6BytzvxGdnS2oVRVGsG2wJyHnjfHfvCqF69Xwy",
  "key27": "5rffxzuNPWbS76ECHcBXtRpt9ZhpKWGnkWPpXa5zSWQiXGXpV1eSyMpjiYKPS6k5r1GTUegSfjMmErfTyQDkxifg",
  "key28": "3FxaSkczgBfrURD7UnvC7e6XCd6zY5oPM3pBGocqC7eHtYqc3fx6Qg5B3mrdw4tf7k9tQAUDcvDDAkq7bBApEoZ9",
  "key29": "2vKPVBy7wXfmJsjBmMsBaiiesxdP3QU6MmKn8GZYWUqqipnFNdNAW6aunvUu1WYrXr1TBaB479MH6qfj8eQ1UfZq",
  "key30": "4wZdivkiy9XGhS5BfZYYoCe9oUM7vLjpjcm28LTorZ77C4ubrqVqCLCT5dLwqyWfkYnBNz4bTm3mStF287YYKNdk",
  "key31": "2F9XapCZ4Seqj6DsJekpZnRTmTvbSCssBBdj3iKmJmXgxc3N3RfZjQxTdxXBK51iQH2f6UkABbxpotJKwURkH1aH",
  "key32": "3doptzvpJFLurpD9htUnuRjH17snpcbz91u9iPfytSnVZa4HYiseMcMnEMMWjKaMVn3MDu6KW369g4er1JdrSDFh",
  "key33": "yQ7kU93X2sQUQem5GLP2Hrsj1xpgsFc2ZFZYaGc2kHB1z4GVSpKfVAdDthJ6JM8MNPsxaUbA3Bvurzn42Fqc27A",
  "key34": "3CXuNbn9Cc2CvM1HoMo21eP1PjCind13A8qdCQeDeFuSsC2TDvwMSJza6AHX7D5ApEmeGmuh96KpXSLvRHvs2D5i",
  "key35": "4yFMVhbLXmwJbPkdArVfjmKbMi2M5tGbASXUbJR7PTqvWQPmea73YyAX1KFhrmdVoxVBd928cTWwXeT87mCoNiRo",
  "key36": "25QQTJoSATbyzef5rMSoQkV4CEoFHZRhQiwNCkq78cVg8KVswgqh4PjdkEe6VyBenkvppxCdQiKWK7C8S3FaGFEH"
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
