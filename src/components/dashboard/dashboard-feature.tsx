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
    "3EGQUupi3JJBu1MX5pm7YQPixsaVD6HYe9eG6LQ1QM17vnrM5PkM4AiHgoM2XPyUacyKVsNJCxxEEPTNTEzC1PQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SqVnWvmvABaxfUuWqiPMH2jLmFrte8sNnK1zjYN8RWFqMfrzCNiHYwT6gdhgLxjnd3aw5S7Hcs1atiRHCpq5mr6",
  "key1": "GaigPiexMEmcyu9eavsCvYQtFTZyAUr5sXYs4S6tqDTEeJuP92HeNfJy5Vzy66rD5Yxddm9hsBMusGNYL4HUbu6",
  "key2": "5zgadfUcKXjyYtk2gq1vLB6L8W2Ta66PySqCTbh1Hqoik6UtZKUb82miZWVECshd3w26cteBobJSrKGNAG6Xv8tr",
  "key3": "4RQsc8NJZHo9GotE4jzfnkF7VMWG3qEvm7hnVniwm9enWuJZivj9nKhE1UEhJ2L5qCUtLszUYeb3pdDQx3TMXgor",
  "key4": "2SKofGK5YwxSd2YZZsaSvj49XdVa5P6kCJdSmYg9V2WrkkN1km9TAo5sNkXAzMBbVqatHWgeKB2rFS1n9yjxE16v",
  "key5": "62vFExKQg7WqxJR2iFrHZSsvQgtdDt8LB5RHg4ajiuwAvQPrGvbff17NH8SkfUK3JzsGEoQmeJsX8JWhaiLYF7jA",
  "key6": "4wV4FtoBx5rBQZQn362UTdQDTDT28PSEMzR7WbXgfkAyCKgua52gztYkpXZCDhdhCz53DfZhg4K9JaQkQhvZNnRp",
  "key7": "2pH77chb31LMa6pA5pGEEaBqbC9qrgLKdXKCUA5XTfYdoJrCkWcZ6oNJNcf34aVDm4vu1STUbcwWzQGRXmzLk5ER",
  "key8": "39D3TQNrYQ1TjtDZRoMsDrpBTuowUYtdY3LvgTmg2VZKXjhEXstae15WqdP2Y3Gstwnqv3CgYJUxfbFNUtccVJZ6",
  "key9": "5NqhXpdqZQiA9DiXoeU1fC1SepmVgnaQAga7CUgzkwqmtwQ8kJuhMqyrdvpRMpHWQdwjTtH1XazdCLBDi9PFcvje",
  "key10": "67UarXLqdZNo8D3wT7FcyqEnkBDkvZUhrh2o6i43PBQF9ysooGLyyTZTchKXdU4MHDzFq4qnC9S8cNu11kbxDQan",
  "key11": "2bYjAAZt5AAoMCZvteQ679tjN1PQW6Ur27x7BrrRN4QpAtKTU4yHkR3umsXwuyHCKckARNvyZYfHnqdvitTgLYpg",
  "key12": "4WEpYm2dSWK4tNYZaVTUSUii2oVJ3WaLuMVqGtnPSkr7XJCmCgZZNKhshuFPoaMt3FjJ4okHP21zABSAevkKcEgA",
  "key13": "5tkimcHR5RZDtyy5ckgpK1ZKUckSDHLFiJL9315dCEC1keZTnmS9rH7zimmHzEpKBjA8TTb6W16ErspAmXmen5Ww",
  "key14": "37E2ansEGZKRTEm7EVcKQszxTwdxrDwFpzTKi2TKjPwBZc4eenZ4Dz4q6fukydRyQ7KLMU1rscTPgL6kKN9tKabK",
  "key15": "617AeoRrFHemRtZ9K219CwXrbNDRrSjk4FPz193oNp6Pp1whAj4AGTfApZRdw5B1ciFL2KTzAcHdQUCCxD1yPL6X",
  "key16": "z4cuUZQctZ7uscZXGyy8pqQJcboxeg6vP1sRm2zxo7T9JzoKq9judLw7oJsTbTYmo928FoMCsGU1yN8nS3mn687",
  "key17": "2sL4duUr5Pvvsfm8MtXzWy12i77j73sT9RtiAdaA54FDjBMTjvdGMcpyuns2pADGYe57vfFg1etfv5xDr66TK5rN",
  "key18": "3zTxRcK6tDxDawr4SoQVrvDP8EUoMydLyHrm7azQAyofmaZiCjcwjP8JWBUHtDn3myFQ9CsbwH1ZuEDLmnqQUhR7",
  "key19": "3dKkyRQn5nQg7kGYjkcaCr8YCcwTLn6dLdmNUNH7r3yjDfvKjNtoVBdFsZj3Q2zRVQk8LaqRHVx3YkEqfCKQkHUz",
  "key20": "2gCoPTW5pr2CJddMvaxdRTk2aQfrxEfGUwH7cBjpxERdJutSSFqeoeK7SUa9cuAFzxh8zYXy6gemQ6SNFwo4BQkL",
  "key21": "21jUMj5tNrnDac6uS3t2hhsvEoJoeQwgrauYd91wv7JqkPePLsGw78E2LyWPjqkrMRKBRa1LVGawnLCzEK2r5hWn",
  "key22": "5FrbTpTkEUjHdgKDhz1fbjT6XmVYDh3P5DZCdwN7p6mrNciu2r2cCUzr5ebrbgvoTz2DMZMYfQTexkUtPhE6By5Q",
  "key23": "4eF5NCu9U88b4iERVELFMTY9fW3ibhT8kwtbkS9PQa6Qv6jYGn5DHakUASE8WjuU9xTgrrFV9pi2mdFAfBu6wWco",
  "key24": "53uThxVNr62raAqU6JpPYzgqoQBWuob9eHJ9zvRQoyoKCGvHD2Ee5mp3dTTSnEWsKerM96g7XwE5siGiqSDRsFXZ",
  "key25": "5di1Qt6HZxCwcoDBUwX2RKx4vQmnGG6aDUpSBxpWndPZG9hsW2HfgcDhSjKpfVmcWhSehXs6sqp19T3EmfzoceFA",
  "key26": "2VJu2JgbQrjU2smQd7ZwiEkXn9Nj6aSRTQdNZP7VnPMknvf5sP4ga7Xmdvg88pQTf1EfdcTPV7E6hjMVQTgVS3wA",
  "key27": "33X6vFGbM8gjdvmczrJCSTs5chEMSNKzaoJChCEwU9FpSd5HdwRY3DKHFW3mXzZJuse3utMLENrG6X146hZ9wRFQ",
  "key28": "4m7z4SWbaacnDkyhAtdrsT8h8H3TwUtXKLfcJFXtnkTzfSB5LGkou88zYkdXPJRyAWDkekHLFcfpyYcGkJEyMwtc",
  "key29": "5Bfjo6FqHD4wWLbJpwHKTQG1FAQP9ovb93zqxebLD1ebwcLJ1vJXr3EVV9XyoeaUvomTGmx4d8n7CVJQjp5p4kJ8",
  "key30": "3euG3QqLnNWCG1LMqRgKUUipNTh2a3ePvm9sRKnsyrtWP22cYiMmu2Kd5Ab9kbs4ZJwWhsuH7k5bu4b1YDsALVV3",
  "key31": "iQYrfxtgarWNTtAWAMu5zrVJcAnw85iZTNGtPFJYkC7oy4AuqFL5Ley5Vsb7NwKPRQ5dTAgR57hGqSiQYmHf7Yx",
  "key32": "bKpLpbd1kHhsVSEwvhX8FDamSFkwU59cVVChH56N5X1gmojVbu7egvWELRRRS1vFiHaVCFoqbqTak1ayJcGAXte",
  "key33": "2uj6CNvjjvH78Gqd3ikmt8r4TkwmrhFKcyx9cbQQs13s6SoDJgFdN2PcAjbPgeWsqVBiK1G2ySBuWfMhi33FGtq6",
  "key34": "3CKStUh6DbHKe7RRcqmfvJYfMGHSdmr1F8jtChBHjtTKoFaqKM6ePrgAVg8VhXiFhZS7uSsBHgFRMmAyP4AHLS4p",
  "key35": "2hHksKoGG3krcT5y5HqhomRWzsMgw2b8ww1TwQzXeZmxGYDTbum4AAVrpRQiuXpeoQjcZBKmwTPFoW5oa3c6E6kD",
  "key36": "5dn824asZHKU4pWKvBDKyJGQLEjgWU62tzXUEA8EmnobDNzU9Q2Kt3A69M2GpEuubu2nSxD3tww9A7DXd31CDKTJ",
  "key37": "5HD6ybVD6KCrF9keiYZhHV3r7nVGgcsBtqSrVrFSECjnRvAdPxBvUwj38jiGsT6r1Hda4xuzttvRohZV9FanGufK",
  "key38": "3aEPoU3CuVmcmvdS9ZDre4ZQiTcFMXpRPTVfSaLaNrFSuVPL3mSDSdVTjp6HpuxivPn1H35y1vTYSQWSRhvE2SbH",
  "key39": "2n5wPQMxCSKvCkFEzPTJU3pRxeYitQLRa2J1dUoez9rHdV5YJxy9smLXtc3jSiUWG6p5hQDUkNjCy8BvoFpsaHhk",
  "key40": "3QEa52qg7RS1UPHYn9ErduME1q5DfX5pY9pstKRAwxtfCaQ3FfkgEiUbqRmz1Cs4V6m4m5Yc7FQAu6yyg5cLzW5j",
  "key41": "634156FemKK845kSYv9Zs1QzkNVnziekUkq4rdHwHKXJdu85NJzc7QtMYQ5tXuJ6Hu2ERwE1rVzmHpjmDxU82T5",
  "key42": "zVPA85ckojxvFv7UxpEP7uR1tGC7EjojQcZuZq7prqQFFaLmkWighAZjkYrQt6x2RyN9vWVdbusmKgKdqSEinVz",
  "key43": "4tLiTQfFKgtCzH3oNHgoN9ZhDGVxLhZGsABPUsu1mBo3EKgFudGvuVDpDoi3hL6krFAXzbSzvmTHG1FNpkhXDczG",
  "key44": "4KNTzgyKLBVsFpP7uLZ72uuZsJJ6wkYWAzpDSioUqhDaRg9nGppRi5jngLb9DKjbAWTz7Y7VoF9be94wCbxpUvWy"
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
