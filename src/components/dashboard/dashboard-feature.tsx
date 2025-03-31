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
    "4gwjoDmv1eGq6DT1y5AMNALJKM6jTUSrTGeN1kxtcdF8Y6pNpeuWPnbfCUqkrNGx5TeNJojYBjhLDaznQeH4313z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hCSQBR9rbReL3kHfAoShJqoNjyK4oUvEQgUmgthW6rk66k31Bp98ecavEHhbm6hG3XQJFPhhJ72bArazig2eMbD",
  "key1": "5SN1R26E7hFRd4miPbBYFJoABKNugueYFvhuUbhfXbfUiaKvv8nSXLGME4PuVj2iCHguV9dcnbKnBvH5V3fJv5qH",
  "key2": "4E92bssk899HTVNGwJbv6Hf8uetqZDETEqPF844frAffimo8rfc2Ava6xbHdcBRLYntyMopQhqpiWnG3imcvscw4",
  "key3": "3b92RQXuY2icknZw4RNuLUcYsJ1MEm2vTNgfYmFTBC4cbHT6eDbAtkYkQHYyU2wRGP6eWAnpMXGw8MVZGU8vfTQq",
  "key4": "2C9XJ272WySpvH7xq3pUaFtGCcGpgomcPqZ5AwjM5vLJcrnQSSkQQPr8ETYGzity21bwShPbPEm52PK2UntMCWyE",
  "key5": "65zZcYug8foagR4GWYKhZY94hfC8qgQ9xV8NXCc7SE2sAwP6sMzr9GXm4Zuov1Bt5kGy2MPwYCby9dpZCkr3Q1bb",
  "key6": "5CC9w88Z79yKQa1peG259hpg2VPACARpJZ3jUBsChWKdP7WHoV6HjY3Jiov6snKohaiHpxaMiocybfcV61JSCpmD",
  "key7": "62N5jpQEpASS5uvWG6E1DBDx4uzJYb4XfpQM6ZPwe7t6CFMXhmNVfTvP73RYyaNtoGTMibpnqvG6XLkEm7uvsw7r",
  "key8": "vU5AGvGfzZWZtFaT2gX1wX62RXunR8MezrbVAYwB89KWq54NWeSRbGfH1M4BKM9QbJGE6dk6tmww2ccudLLvctU",
  "key9": "YVwu8Fxu7Q5HNt224eFBFVUZinYkLQBjwEVtzvkafwqmScynxxkBvv4ihEDQhSzgF8aHeaJEn2uWcwoVYLBUUbf",
  "key10": "3etenvgpE1yLpszEa8RyzqLpaW5WmJn5ZrkUPRAAuH5eEG4sT43YBhBAYPQmVoWdJBa8xnZUFqb25kZRHENJmwYj",
  "key11": "2t6uAobUpKTMU3JdQsSzRTVhHHUK14rrbJ4F3eWxYBqmkqHuLG9uSPuH4DriMpSJY4Sq917Fga1vgvaV31LrtSTf",
  "key12": "5T23H13ATuTmMxYvzrcGS8V9g7dwVcjzYWJmyXRVcvtKnjT8yiZ3PC5iyssn4xmbUKJJBTHFW9QbmHBWCkWQLEPK",
  "key13": "4JaeTATYFg1rD5M5cr59V9o6jvDsuMtWzff4tSDYSCy2poqAzJWSRR3J4pSJ7FhhgrESjg4AC4MkuzcaGSXcGKgt",
  "key14": "5bFw1WmPFaaATNN5Xdx2frpHsJ9vh9TyBoR5cGyqBdrFEBrXyrRsV3WBXuaFWANARHw7s6yD9Nv7KhrKF3FDmfMG",
  "key15": "tvKjWkPhKN6LFkkNbU3yyZUiPVrSj2kkFjp82px1hCmFbdMWQevVDy8318YRfheMxfqFGofeQxbYMatVfFXij93",
  "key16": "5F1NjX4CFYgkZHdjESZgz46Zyn9T5vTRW7qkNWHwGm7C7tbzhLJ8on5oKZVHL3xGo5td1BJe8k6teian1oCTzd29",
  "key17": "5HsjHQqGwrpKRR84GdLAJLcd8p9GfY67tGAcc7yz34w8W6r72deLmSJq6kXRNqULcxSaq8biGP9YrVVRCsgHsmqu",
  "key18": "2nwH7QJiBenVHikDBk9VhR3Gf83pqzDptpEixKh8GxerjxXGprJmUqZbJJR7s1w5uPePYjEJnEgXGn2uRocybdei",
  "key19": "2qv1TQdigfhaqR75p9Lcu2zGUZNCZ2DFgAsCkZpbf4ahSLE9eoexSQYgNo1tT5ZHdChDJ5iM7R8EkzmDTn7HuQ6c",
  "key20": "YPwHG1uVaMqS2Z25hvkxh42eM5oD5PQebtcUfh4P4pV3ixLW11byHqCdkFQL5jj4C9FTRGh73WKEYrhwryFNXyk",
  "key21": "EKj8mmvmxgSvcxn9xoX77koR1aj9mhNGr7DEx6XW3gmnvSHD9RecrX6vVcb4wQWM8JVhpLyMFsBASqp1NtFLY1y",
  "key22": "5ZUggL56KJYz2YyRrN6uXj1x5BZvpJ3sPHT7FK4ZoodkWiQGJHtGbN32b3ed58C6FMCGV9TDxtz8FES2eJiE3mxz",
  "key23": "45cpHfyVhkUzgdwTM4KhzGLrrDzALMmR2xL1EXUQzuEsZRcUFwrXxeeoDG6kamnoUHaDCxMWNMXfpw2aQVoPh8Dn",
  "key24": "2Zk8owtbKTPbNmzZE4NY8gsBFrrfNgp26ufFkta1rrG85BzBLuz3wqtNu7zs9SWTcd34BLyVrAiGxCU3axJdyRLQ",
  "key25": "4pWJ6kfab5y2ikZQM3171chyRiWT1Z8AuyYH4SF8CuVtHMMvAieNUn22NVEto8hCM7WC4HvZdCR4RApvHtymBZ8W",
  "key26": "5Ju55UTppnPiLgFsLnBHwNuuNRcrCFHsUTgCZqUQAYAQCwcsuaFpjZqBDCviti8RdYL7cHZZ8g5NRMgxpzVCKTHR",
  "key27": "4FypUfnxim3EXwyAEaFDXp5DrqawSs2XHMEapqoVnKnpMBgZPAiCvmejQMsx85JiJQVcVfrEJVFCWjFU4HYU8fL2",
  "key28": "HF5c22vaB2y4NdtTxWbgR9shZvEro6oPFiqbuM3qREQWQvog2dvczkZV6t3gBE6KTG3Nj8Vnv85BcHiU34Rii1s",
  "key29": "5e74DhQtaj5D5iuSUdNTnqEPNQ9VqDig6VHqkEPmB1t5KKgwqfLgEbcjs4JG3dunKSznNXfTosHa2SYqgTiCcX4g",
  "key30": "2HUvfPmqJ6FzJwruPv3naWYePSVgx8cSDYYDRTxuxBiC5v44LZ4USMs7CRzkTBpxhRvrGe7dS5PjMeiH2BiJiZ38",
  "key31": "2e6eS4L2fB2G3vLeLccp25rb4VpXK1A9vF8esghYnFv4h5RCCT2HPrtbHjYTKfGCpRubhWeGKysCHyJHYiGxqGjY",
  "key32": "3pcgF4DbYrMd3Y2WunTCn19V4WHEWnA29bpqmBzrmKchLvZhNUQ18jg8ff3nWZHi2arZcqLjFrtoLiotPgzGythJ",
  "key33": "2Evqz9iQXoetbEGGch6xvaZwnU95bRW5XwfcwfdUnr2vN6bsHEMHzbiY6G1sTHWnG1YCp9oKGz8YcEzkj2kBwjKr",
  "key34": "jV9ZLui3mjdzQ2JhXwbCDdFsCVjWgWCGLYzSZ8GX4azii7cvRbdrV9kgmrktA8WoDEeeZ3dwxsjydm6txtS9RSh",
  "key35": "nsQL9RQUGArgPu6DqvRJEK9s2GU4eQg614Pmx7MnpE1ZwLcQJfNKQH2qnkB9jN31iSYYyEFn7dZmTmpgvWeJQyK",
  "key36": "2fanqdfPvZEC3f4KCfxhUAYivDrPdwRtFRLGT8Ynd9XADS5GqLm4ftYGH1CyRHfBMJhVjbDTigMKX6kEMAYZbydG",
  "key37": "5s2GUySaGV1uPSN4aBWZfhDXNXVwQaTbcasEwSpxSxezi2e1964Pe7rtaaMn9tFo195iYw88vGnkXeEF7S9Lm6qW",
  "key38": "3Rwngub4AsVkv4MQ2ofESJdzN4JrJWjVPz99eR9KC8BcVvJ6zJ5JMCXssLeQq1rw792YFm5RWqQ3Aj3XJXbjudGK",
  "key39": "35MtnFGh3BoZavM2jiVXw2po1L7Uaa1BxWNThj6aJa1xwci2eqoKFiyF9Hg3Y9NcZwfwwxXHBUtrnxaGKsNroxd8",
  "key40": "2A9TeK2ppmm1MfBXqQsCGcmHcxihgE2d6tyfh2LALMbhfw4J7ij9af5X71tDYDD4BiNSvD5M3ertUr3qExS51aHN",
  "key41": "4fZ2G4aWcXDUz28ukmcEjnmsvow2vz8b9x6XdQVnNGuj7HWaDSkxNaf4k3nyBaSkj9NsVS6PrxAeqSoxoq6jx8Ap",
  "key42": "ARf44P3ABQKTd5DQPUiSmCoLEcXu6Ex28SW8G6aMz4scFhseiyQkssYDY1jWEFc5Yczfrwyz8Yn9vesHs9mTJXt",
  "key43": "4rCrE52LZA8JRbWz4ywrz5UuTMyfHQFR8ZrLou4W35r8ttzCyUSCtqfC6GmwEJgQ9ahqwXjGVf7usYJahFQyXme9"
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
