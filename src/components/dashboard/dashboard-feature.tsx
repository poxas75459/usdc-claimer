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
    "rhg8XGToRKeLt1bfgMUCMJdNtgWykHf8tGyVNKWJmSYwC9Bs6otC4QDHb5yJGMfkrRTYA2T4vnSCLdjcBG6B1kK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xAWms9Vw18wt5WfHPb1iZWyYiYKrzHNxgTiYnZwYTfeZ2UtrzvzFvLvV6H65M6R7FpUPwqWNHa7T9TVLsdhoqMn",
  "key1": "34mzzmCAGHkTAZ86ySD9f8gZrSRf9w4zqG6MTivKghjRShGsg1qRYHgT3CQQdxRDT3dzsU6JyqHK91JUXh7Rm9sv",
  "key2": "4JSsJ8zCZob21Q9bVZ9aq7fNdXNr3CyfEjjpzo98SzQPHYmCfhQif98GNdLoe5Ck98dyv7vSZspiVwdFwYqrEmoZ",
  "key3": "3XvvqUrkez5aozni3zASguWwPeb7VCgmqaMgZKZZ5GT7KqKL2G3iGAYbj1BHUFZM3qtbgz9f5kLnEEDDpFh3BafU",
  "key4": "2Rdww7DgT9avn132eaKT8ZwVzEB5c9N6x6WfFyFRp7bB8916ZdDM2WREuLw2JW2W9rJTuKvdsUHQQWAD3B3Yw5Ys",
  "key5": "2y3zkHkeE97F4tGGWm9Jd1BRcgDvPEmRNe6RTXv62FGrP5WPxPAUnVnhYyeFRQU5C5fkQKiGn2nwqXNupRFkmM9d",
  "key6": "2tHMw6DoqcrWPYibLPXWMV8HZsHYdSkB844p727YPgGxd8p1gPEcSDbCUbGETjviE412NLCiBYznnbxs4RaQhCkd",
  "key7": "2YYUUjdtDiQg8dwPkHvYxgLE68ftjURxCY2PDi9QevB2md65rGoYDzKJs8DFsPsCmWK5JiEo5drN5o2fFrFShyhS",
  "key8": "2VK6nGt6tMUnwtRD9L9FLMLWs6GBwX4B6dHFTg3XZHXSHT7auo2NQA88WfJxVXiojy2PXkLck7UJcNCC2s4Vu15T",
  "key9": "5ucSv5xKi7NHm45DgBr8egj7BSJrP5Csk8LdcnZ5hsLac5RBpd69Nko8Go7PJBQdyG1EuuaTJd9bGejZJqR9m75j",
  "key10": "2MCTBSYwwBEw48ibPWnRSTz4He955YVDcKFZ1H4ZrqnYZPR2Ap46czef3amG7mUS2yhVHAFVSqPUw2YBa59X9xbR",
  "key11": "5jTkLzuGS7XPAnvp4D2gygmQrdw5kJcwJ6LhNhPvPEYSmnNc22ZfkC2fQsADReqcuuAyPqvaQfVhkHmLZTLw5PuU",
  "key12": "37ZL8ZSQBgvRnqQ3HpR2cjHURs8kfgcv2as2RYhrJNZFBv9JnbV7YsRFyJPjum4jxJXwwiC8yEBCscxBGKSLZ9HM",
  "key13": "3U1eCTFajQ7zUVevy8mZrConvekm1R8dN9pKKZTvCwVtcCWKkf62MApBrY48hh3rQsV9Ct8nwqEr8PGWonRzPihB",
  "key14": "4KJ3VqeMPuqjy6bBS1Vw3HQw7kyWe6zEdbbBR2QWpcDeCUm2A4Jw9BSkbduXC3xwxJjPSGevb379Agi6hPk3Zn53",
  "key15": "2f6Pa4hggecRoy7Wdo41VhSCdbyGmztxmXeDMAhiygMt33SPxDhzyDNTym28YZ5fLAvtT9sW8hJGsFo8hg4bCx1z",
  "key16": "3q7As854pD936Frkfgne38FmzTntKvJAmZ9wcfvdt3hpn1A96GEA1WTowrB2ES7kYLeJ5WKgMtrheropEytwe1np",
  "key17": "2bvFqi7Ben4Y5hd7KWLACGACF1YzaRoDK4dtU3uPdkoGrW1bYSQq3sLkvvaAQ2bRhLMBSKLNeL322cYNj27W3EvY",
  "key18": "9FEQbymfFVMXNe8aWm7nWGSEVXm6xdgwB4hUfrQz4Wb7v7ehCdym1hCZaXXyiGZTHA9yB5fVgAWs5GwZ9XAivAg",
  "key19": "43c2ubGbfSqCoHeMmFZJ9SUoaws8FqjbykewhcUfsBDnxWmCyYxfuQccjTLa7nnLeHbLu25aciMPsZr4FxzJNaTc",
  "key20": "48j2LmsBzib5V2NLMdShUaD1MWetLv6qLqsxCuPogrdYjDi7kq2ZzMmn84SB2rSThbUeHRcsyi4RU18vNYx3scUW",
  "key21": "389ZH8ttk8bHQ2Kzk6PEjTmr4s3vdKZiEKuKy94TqEhzX17CHULkiktw2oiKzz1hRY8oYM4FCRFXGFCnUP7hsUwR",
  "key22": "3rE78R2cJxg9ukzahksJ34THhfj3DNnHwCoBTP8dJkVu4aGfn7g4FG81YTH4dKFuk6z17qUEtNDP84ZH7TiYrSBp",
  "key23": "5WoY8Xbj4bZnwkBzQqPVWe9d7QcTEttyy15pWBKYGnYrZQdG1TxJYMf9miKJbXrsnNYXMqZhPCQstrdsvGyZLeVy",
  "key24": "4knzM2qvzzShBkSHY7hKzU4dC1xyHwM3SfkMc1hnitiPNTpYLXdE75uBUyxGrrMaB2Nx5MhMC1T8En5XJjC7X4pU",
  "key25": "3eZJYmx5z46zxc3E6upmzBRTw5T8kGVa57vLQW6s87YymDAwcNYaUxqrossNeNBAQgX7WpdBPSmuUeyRAT4iSiUj",
  "key26": "2D7KDTtNAyjz3yH2S9PcYM1nsnMN8PBnb3rLfNKPciWSUMJ4m4Hhmmo9gfY19YghkJpgJriC3J3YmaokF15ybngc",
  "key27": "3xKVH7jbVBJepJWDgKtAbAv65BW24EQ6FTak25UHodaZbf1EEK1JHFmPS6e7zKsxFELtWPg1tRMPq4YdfCdzG6Kg",
  "key28": "5fVoCoRBLcJaChNJDnFokYyPfjRoYYhMCHGswZwVubVKF1AqHgHG6cDezRo6LSYKLQurcUmdnhMZ8qqF97WKcpfy",
  "key29": "6kNwEsFGvZnreqdPaunRiEcioyj1L1prqCNMS2ccovvFGrbTqYUCXCvEqoC8U8EaCRysLEXnaRa1GSvJDt1a7vy",
  "key30": "LpxtbhkDrianwzusmo29QAU25DJpELUKgw3SM6atvnbQfzHiYXtLY5q9hTYQtHX5w1koRNo2bX6KgwW4Z8F5C64",
  "key31": "z9p1RsL4UKMfM5D1wzRpPZA8kcVG5RZRrf4697L4USNqeMtbpMytFMMnoEhdeceYh1fJR2WKHgpwVrjvSJrbAjk",
  "key32": "42h4bfdoUCnCAkRxzGuWMXYW4tYGx3SV4Eh3a2XjNg1t9wqmB69gk78ahnEdQYvLqV5zuUkY1HUQsgXLyEQSPJuu",
  "key33": "2eXPDPC8bnkBTtkBfQ5upbqmZz6y3EJkP5UMVAbNQW52ZPSTFq5QDT4kfTHuwa4VZX6p7s1YwDVijN8AqfyMECeA",
  "key34": "4eDoSWTvib525j9edNCNN64NkdbpLkpwWJuoMc1JqNh7WwFPhY5588XUhqMGyykgb7qtvWXXoJgJw5urvJkaJ2WE",
  "key35": "xzJxgNtqWDEdXSdCbe5TZeBsBy3AKs5xcPyKzsWpjQ6bqy4ZSPsjWb5FQ4KFBB76hvy3qvMXqntnZBEcNX52jsX"
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
