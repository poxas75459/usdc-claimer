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
    "3TCccjKQXNuGTmjbTErxGFaEDRQzgnsYFAiQaJ8jFnLWNerT2rNYQmkRd4joNmF1LrQned8bSHGnrWWFwTcGQvzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KfsY8XwHPzeC3r6k2CarXJrJisWbcAYfQyhZ3TQDsh3mxeZFFYnXaY32cQGFbfp4BCULYtzorsMCp61vdpur8T4",
  "key1": "66YYh6NeLXAJb5Ymkw7t2nk2wSqc6fJHbKEkW3mCz6q5LQ751m1W46MKybTJC1N6dm7kog7rjMtwQEjKa4nRWRDP",
  "key2": "2J5uxozr4QQWH1zP6PqVkmprLWtyUpWonY19YPTzcFq6MHHpEmByEJdXMmhxzF6VscSaeZS5x5uZTJ6dd5hdTiuJ",
  "key3": "5GXw67bo6mJ59gyQarSCYsdJbe2t8pNLxZkHEMFV7rF1xKfNXiMy2w1NpJ1jy7PwwR7hyW6edvhx3Lue7v5Q4X8D",
  "key4": "55GtxaFrMGedNuwGXviPdruQt9bkiwdg7VqSWAmyTh8Cy1mpMkkBNhEhTZXLEnDZVqtJqHev4Ut5N2UwFRs4WEUc",
  "key5": "qgV1YMryKdgrWnQYKpLcDe7U7pjLbCwWEGuH25kXwHBdP6p8n3oPWHBAVpiNcQstpgSNHBLooZF4nzNqhLcSEXf",
  "key6": "4ZMBovWAbLTmUTegc13SscPcK8jcdgXp8r5rXc2EPyFgPuLzz4ZkzvUtVhRwYMwMoTffVvffWXsMrwMQwQVyr1Jo",
  "key7": "4y35jGjnno26v3HZQLjmV8hfYxgUJ5avjeJKGTe8iYs28vzLzWu2JmgDg3gLqZpCvZkBLmRX88GHpzYLGuk4jfvx",
  "key8": "4FBvG4rDwPNoxVdzMhPeut3ucDm7V9SgRGwQuPd6YSX5HN9raoF2MEx93hDQNGVN1gRfbD5k8piJt1F7cb44o8DM",
  "key9": "e1qV8UfZBCcNWJxMExMGi2mTqN7JQaKDcLuWxpzAXabN7wHAm6v1UJMXaYL7SYnQDKjY97A8BN89z414dbwLzJQ",
  "key10": "jq9pyydsBWdfwsJcfjz2UiEMhFNZspkRF4RdkPzGVmc7Q1b437zcoeKZ7h84er2nAM7RjhfU9U7Rhqeg42yKGgN",
  "key11": "3cKQWAjtyNkdfsHpFUm3uHJHwkJqVz9Ygoov5tmMvkyzyS1xEd9c6o6dCYrACQtmBJ1xaUKbQDoMJZyhaeGJ9meP",
  "key12": "3QkCMvJxWvVyuMJD7iZ9Puwtzn3DgpbjYvZH3gDj2KU6ZqKNsjdPL5YzbaHLrMo3om12JsYbdneTQnDKS8nk8tmU",
  "key13": "3fSR92VTSsPRbbvF4GXJ7kDqaMKudo8cRK7ggJrVs3jWwxZ7QZD2YqpzUcZbhdaEBKDnmLoqT7ps9qqj6pgNZoSm",
  "key14": "8y5hXwLCbGJi99MycU3cETEjBUSX8YYBc8921MK5Eyb65wrCSUBGpmvZ5LyojBjsRkM6c6bhdo52p2i5A8Z98nb",
  "key15": "5FFS91sS8yTTcNkeGiSUAmpGb5xzjxnzUJcMPrHueDaqJz7SfMemAdHtFBetCCLsPmJHPi7h1Q3qJvDN1AtnD3L9",
  "key16": "3yfHaNiThay9X6cmaMGJX77vTh1TknuHFKEVqU1dXaqKKVNu2XLh5CduNc8BpqXBpQPgzH3QNWUE5zzbjwbMvyto",
  "key17": "3fsxtXqT3QQ1wB3MHPNApZgQFsrGBj4tg3kqjhgCDUFgYp6wCFHBGfyB7nCfAt2kWYT5tyPcB5N7ywz6diMP5M1g",
  "key18": "3UzfDZ2ZAJ13UBFybugTSWLtHCS6m4BW7TL5KD984nFfTwQFqgNrgBzY9oxBdVyLQcgMVoSrKS4HYd7H2PMoYJwB",
  "key19": "38xQLmLTyduuQ3k3HWx47nYXpxMVyFQ66xyspjGE8TH6LLRyGz82MxjtwRS1WrvBwhUuCPN546riGTefonZNiEAq",
  "key20": "4pEsNZNZqbKVocQF5qgWUAiSD4Qr7d4Nw1GFxvHaCPTvp2QHfMwNNtqQqXuu3gGkZmi2avJMyJBpQ3SdyZg7mrMY",
  "key21": "5ntyPeR2xxJwFMiC9MEcntYRtiW7oj1im7FV7b7sDiRUFcGBqW4t8vm4i2qFDZstvFznnLsopQotL1QRRoiWkzen",
  "key22": "5P7vf4fq2jaUDpbim9TfrwRVmnqwFcdCmDh78SMTJuRyW7wgeA84qX4ocfagKJMabnCvH8xemy6haYUG4YxqW8XU",
  "key23": "2SwhRWoczbwhRLF9zHinxq129bebH6GWyVVem3SJqfPejehdhkXLFGo6eFWw51tjSYm4ffbDknSsX29j3ysZSUwU",
  "key24": "U82RdTqZ3rCd4E2dtem6LdgQxFVKDtEJu8aL5pHnnCcNDYTphsfjvQ8z4tdpLsiEvuANsLGcHCg1cu1zL89cDZH",
  "key25": "3KBkH5cAQ3VNsioEZRfxoSDuvuw7a38V57jk57ehW4EKnJoV4bmztb9CFhNBsU5t8iMKhzn6mnMC9c3wiJRBmQkp",
  "key26": "2v6NYk3nmvfKEWYD5i92HzuTLgnA3tMW2pBZ1TsVWXLthn5EPcbLLnKBKiqzgQZ96BgfZiyPradqJX4brBQE7kRx",
  "key27": "3eiXhRdQhzLAd2YM1ooNw49SsPuNdrN4BS8TVkoaUe5FozqJED9NxTBUFVwrQhY6AT4cuxqxNwq1ooAy2izTMY6n",
  "key28": "3grnvAUqJKuqzqGkXrRGThTfzdj2o6sVZXWa8MxKpa3n1SgVtFmiA2bcZ4RWShyEpGiUifvTZ1yRvrQnfuh4NGfj",
  "key29": "YBWtCVzsqjs26RNx5sLZDJKajeS79kz7hag4K9V2WBqADGBMm5DCEza8AipyRQXnpn4BoPisxy9KUQXgthC6tyV",
  "key30": "RUBVwkRc6m4XUUKNcV17HPobC5putJjCXaM7Q496j31KcjjochiBRZcgx7veSbpwkaUqhvJpqEYzMPBGjewcBxj",
  "key31": "29ZRrcmuoRWErycxfiKi3CbAVSYdb8Dt9oHsFpDHUwXinugV4BF8RbSsmGad43u3mvasMookBv3CJi3Wbqyg6inh",
  "key32": "CSBwGgRikqBdwAwwFznzieFyRc5VGGUuv5KZR4nuBc9Y8FgC3a4aqokyQ6nPQ16jhxY6okyswCvqiXBo4rZARws",
  "key33": "4UbuKjHVByYZZZn8GbonPNhUn5aMH1HzjMAND6A9pLaUEPdCdop7bREhp7XeNJUjX4wVC3QEWefEWxPCDC2NCpEP",
  "key34": "sGQmmoWsmYCcweSZ1pY1whDkwFdo8rYuspWTvy96XLhCLib7L28JSHBta9uMzHvbkCJTorf6hddXYQDRkzuEt78",
  "key35": "4VfCgHGrvE5zU3PCSS5VbZs1c9B5k7kFSbHtx4FkEzdgghHL511XUNSh5WFcsQhFVayJsRpAJHoXG6QHHaDYqVpc",
  "key36": "3zfXLhWefgAvo22gtErdqr27tUgeqHnom9qskDWy9TTswkPcSkVuzRs1gRBFYCV6aFwBGjJR32k9RT6XmkakNmPv",
  "key37": "4DFSoV594Ng6RYAJexQhdcXod8Xuia91bBBRVDiD2is6uXU23cWSPUcUosopeVny6S8nM6D7FWJFx573NsUYUe2d",
  "key38": "3A1cCxXRPXu7SgBYHtJin7FzVEhY5C6naxSbX9U1m8h1uEXdtfh22eB2n4PyjpPSw93P2WP69Wm89k3GfRVCKsUh",
  "key39": "5vz7BH754FcKpfThCrXAxp5a47WRcEJ57VDvX66GiHXmgc2i2ekZ3Fi8zTrxdBGTA5gAHfifot1ux6scu8bMVS22",
  "key40": "5YCoFY9K2FgnFE2WZCWZwiRqbHx18T6dx5gEBDPDSZEptjh8AFUPCU7Ak5G7CeFNNgUhrvDoif8sp9T1Zxn2FCGW",
  "key41": "2NQaTbKe8BwJfvpUzeVgm8t1mSWPfabMGQWatLtH3RG5BLycrpeoFepP1TdSsPPV41BbJYSh5u9wp4JBwqPyjK2S",
  "key42": "214RZLM7jnXpWyovmKZNYhbNqStHpd2J4Us4o1u5L2FvpKDHWFTacidfWAJv5nPSkVo8rPwJoAzNJzTagLNESNm1",
  "key43": "5JoBAfwPrUWGiLicVCma6QKs7zxbDqSwjJEP6jezWTcw7GKWiiPfYtjsS2crq8Ka18TW74RW4q6CvC9jteBACVSS"
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
