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
    "3pjWqwtzem3PhhuEUmpG9TjWuNKvoLiMnqUGnLfNTNuYDznzzPipfTLQ5eX4JTh7qqJV98GD6K3sfeY9yeZ4oPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aSL5k18okgfCSfRW36P2nG2KHfMx2NgtRgcWTnNz8u53oEprdp9KWdoEA6VFs4fNgtLmSGEA7tYB3xGSnxNSzBs",
  "key1": "5cDm4daYrCo474idncz5SStyyXc3m7oX68VPoz37ozsrPT4RaWcpTqUJtCFQRnm5Pe9v6MTBytMuDeVbLKJFSSsh",
  "key2": "3A5ZvnNeWbz2XqKS64brXNWhsq2F5U9szA4rSjLFhU4PWWnvWMtq8ycX2bYBoxN7BsquouNtooV3uE7SqqhXukkn",
  "key3": "cpUCHrLrj3iefx1YWchmsF6r2JH31tj5ojDdZ9YNU2weiSe7tSEh91K3AZJcp9Hha9puHcBR9iPKKNR7Y9Hyqi9",
  "key4": "3jQeP6Zkevubhb5fyEgNy8SZNPUq3eYF5brWY6V3bMJ1cmPWExZ4i7NNH4CzUBNLaJvMDtQ3eaLafAgdbvG6X29X",
  "key5": "2dyLSAjJdcFP9Nrf6EJu6amRe3J3VBxHLMp6dj2UgNnnXDJUp9jG98iMUGfGbccqYEjqWrjDJx2xSUwHx3kqpLdt",
  "key6": "4ZvUHa1NAYHdWwHm2GJktHsSLRTVw3FdTvfRx1xToJT5qq8MhwwxuQzWykgiyEqvGzz7KBVLWB92mDBp8BonaF4u",
  "key7": "2Tq5JRdwiDwo9PbVLDwZ41YCsNeFp3SbF5W7XAJzU56Fh9ATKsqfnuyDAT79Gnv2jUbXG51KKZzvYmHhfii2Smrh",
  "key8": "3YcaHm7FcLgzxKNmiEHs6rgFyjLqCjW1FqqYjnFTRzBXTzqbffaF7PBarkQJA4MnRsu63hnkUT828zA9MzzVwWoe",
  "key9": "67c3JNoR7ixf1Q8fENa6mqaMEprv3wrBoMFj9fEnQszKNA4sm7oXF1XrYCcxDxa6Hsqy374c4iq5BLzznzygnUEr",
  "key10": "3hk7kE4o1wWoQtJkWnPZZ9YtKdLnLXZT67HAaAbVK6HttGrNid79sXqQWaanr5oxcfpTbtiR6MHTRb6t9wu1m1zR",
  "key11": "5oAkKocNuCGVv7mqYrbnhJoFTsahTUwCsKtfc7kkkVKcRhgBtBmMUvxPGpDEABLfDdwqx1R2942hxxZpewbUp3yx",
  "key12": "3Gv2LakuqAa5BPVURzkSXc7ALQQznAi9nXAQoStQN4x2SAN3G59mrv79jw2ucuFwGLdFPsmd9WW1wyGrUdZ2jzE2",
  "key13": "bimtuT13G56RFdAKPNymA77WyQHsXB4YQN4SSA9F9YQJ41BUzKPmDxVQWBota52y8rmwxGDsjRCgSfkJW5g8y7V",
  "key14": "qYTZRtW1cVWH9H8w8DD9qmQhEMi3Fb8jhFZg3PhpKidNgkLAWKwdk61BhwqgsSQ3zUHnwdzdFEMrukBhsAFcjg9",
  "key15": "cC754zmvbPZLL74wVhP64opFqxFTqxF638VoyaK46ee7rgvDDJanYbSkdNpgzE1PvSLCxdcempMmCUkxuYS3Zzn",
  "key16": "R1eoWr4oZcWWDoaCFhsxMLGQJ7xM5ijTjXSn1ug9LKg2r9Bm7MPEMZAcTSmk2qHdU77fVCWynLsveZDEGPUyVPm",
  "key17": "GgzZi9rod8kAAsjNsEfTgomvVpQU3XYY5kH6e98nk4W21cAUWRijjLo9Tt8hvJsSZi3HWJqeuHsPBA3QJDgAfQY",
  "key18": "5dGP3cTi3o4ccKr4CEewkdo87uRLVdx4gB7eWPHVDiEt2oxE59cVBmpY16zPkT6YRjuyiPsCWQkPshVtAjFgbS5p",
  "key19": "4mge6wguW7pz3Y4ByTjn85oVmT5YJ2XpdYB8GzvoWadLncdWL9jABhmWkFsRhrjtR44q3gdRLz38e4jdMPqyQd9z",
  "key20": "5iBS2zRXurBBVo1MaBubspmF311WF1KEpHsxj7rdvZSyDygYiYuBpygw2sNHjGyxzcS3GzhsyKom5duP2nLq4Tqy",
  "key21": "akUrvtPRQu6SyA82ZBUb2efEeA913hBH3A8EoYbCT42axyi2bwZmQvjQvFXhJot4hizXm53eXPYzxFG14Jcqb2r",
  "key22": "5FjCV6SFezWKbe22wa7vqG5KsqLyX2SzdSTGt2Xcdg5dEVvDPDS9sw53YwB4dwSuTYZfS4F6ZmSLo94NY654VUPw",
  "key23": "Vwt71yegYU2gFouterjCFyYKsKawm64BmK2udK7fuc8NgLNEpi7mFrmvnyobEQD9qsvvuMCoVEvzTeZdECZGfxc",
  "key24": "3gwBSCZj31wKUjiyWWUDBZkqAUcHhtAQ5gtqAoDVoDT2RR8WgEwVi6FGbUqNkv2a1m9a4aavP4gGX1HprhqepKZ1",
  "key25": "5VKCLiVbmYyCS7r5BzPbM7u9qd83w1AzNtvLYUX5oSakCjBksxbXhnC5yTaXySF57B8tWLn1gG89rLUmzSWXs6GV",
  "key26": "4X9hLAviCBecBPhvfPMzHPZvbwC9ghUFjyDrKeLkkBkP6frCih3NpgS6EMZCF5VCruxW1S5TpwBfpNLM7iN6h7gk",
  "key27": "5f2VpAUP79NLpq7hVsX19jMtq8rWuYnuh3ujCee4Es3dJeJqEh3VpZQDwc8ov4Ai8xJ5o4SR6qA3XorwD3D4wdeu",
  "key28": "293mUrRbhyQJyUPXPgQvGdfj398diTgxMUN2Zpn4ZgD7Pq4VbcG18MrGswwFSPjX9dGvcQ8SL4eEJJ4cBrQ33Fbu",
  "key29": "5jfMAFoyfqcqvQgZneayoxYgsP491256zqDqB5exB6ZJhpuCaD2Rfvn6TXLDLg9j5Hn2XiRY664KTcKgwL98qnLt",
  "key30": "PUXo8MDmQU9ALHMDftMdFGtcUkzXzeQGhTCojtMcS63hmpWRZutpNKCSiQWLqUZN14D6mLx17uMFKSGVWNue45N",
  "key31": "5uhEBkFZTtP4bhDfqQJpaNcSZCttUmGkBW2CsBb4oon55fkBXqQJjzn9QEUopaxgwErwUyGACKrTUVroVEcfVpQY",
  "key32": "4as9xR2KmjhjQKbq7FVnWfpNHVqpxRBqfyRmR8dj381RAJAFEQ2v297AbkbCxhBkFewKiFiZcGWRuEYnXTGQuYx9",
  "key33": "KwYWLfg4jTF7gNoBaq1sDZNYSvwnojtFxPzoiDUm8ZPuL318CcKqf9irHm3FYZPQwDCsMqnofBnMxT4WGkZTDQy",
  "key34": "4EaDydVPKhJnZLAMt1YbJUw3rQsScJqsEXtVXmwbcVuegiLA2pw9UP8MpVs4bREowkz15FkCGN8Lr8MSgtDWcn8q",
  "key35": "3AUQUccm7erw47vaK66qcsKpBkkUpSBsTotHiVwKb3bwRiLnDNsipyG2Q7gjCKsGZdZdxTmbPBmvr84hECpgaKoX",
  "key36": "2ZfVSsoVZ1PRknrSh3bKqfCDKQxSNY4hjWtJu8WQbExXLCJxKftwiZZGerg4UgsP5SjJxHwu8puyRb731NzG1gGw",
  "key37": "5jdg31U5DBYNJowHDpTY6dMZVfphCneH89fjUh7HfvVZgQZK6chkmBkE5kuAg5UwcQBGDg6GutZmHZk9cuhc2ipF",
  "key38": "5XvkPPUnRmDUD9KZYyxFmTKPRQS7ThE11TMxqd8dCgha7ZBRisWxgtP2cr7WCizcShtcCjgE9MWxpLgrKfYPTZsD",
  "key39": "2oMemk9v7yyNmGsgvRhQE5DrefDnaTMwYpEH5gZT3QBcmVaYuMTMos4JVp8HjZo9zMGaw2dnP3ZSTsXYn2gT7KJf",
  "key40": "DGMBUcLafp1kNtgBiAsRU7L1SgzRi3vK9teFTTFisHqp44jF3h3Dh7kZxymAFqCQrVUgqM24AmXh8ahVSPGA8ST",
  "key41": "5zF31W8PQij3aWrc3VmbhFekwXR7DRMaSaE9r7184zfYn7efpYpcAc7AS3JfvwYh2ciMy9iu6quuzGWbDx9ZVU2s",
  "key42": "29K7ES1L8de31qGTBCQaFQYDpw31N6hArHJQ3XpR7uepKai98gXF7Gmb4eJpxnppVHGENnyKzRSiy8HN8tyXvRmh",
  "key43": "2iZJLpAABXzYor11ta8pACeRLW8KQDDxpvAcZtZpwsYVrH1XmxPy9inWyyh3zoFuscbK7rK8xavWJeqmo4T2GbXj",
  "key44": "yB85uP52UrMEJMQGq1cukkREPJqy5Gw8ctfqzZY8tjgojtt3DqxE13H4zVCPs1GrFptjH3qACpmvvjTgTNgJJwd",
  "key45": "2pysFBQiVXjbsTNwKbEWBnedShWrAna8GRdH7jnBCn1PKHwXnYd7dqJyY1JgxfSh7rWHgKbfgweEvvH6YfGP4CTi",
  "key46": "4TT3wcUruJrNpfgCfuSNUF97y8XjHki4oYyBqqcpVGayF58d7q7gAHQ1RDLMNJpFTDga3pnUFSHbeBhXoBrmdHjo"
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
