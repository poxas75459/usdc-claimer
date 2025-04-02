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
    "5dZ4DwX55SHyJYk69hWcEiAkxtxfcnV9F6ws74V8ZwBYngKwMBvXGnmLCsmN5JemSWpKWsEfHuLR8g3r8HQVRafW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56bFWJ3D9aancJFAK54sNiH8ap9edHS5q9ozTiDC9uqJa2KBfkJAKNe5HZZ6hQd7jxFhauAHDxeHqgZhPkaYjKSX",
  "key1": "51PzEGmktwSmzxuZrEusre9DM8JPe1NBCJcqZKXmQeuhZMc6aA8kXyjhVQmLW7vsFUzDPPj7jGhQdwZK1gJBQ2bQ",
  "key2": "5hfvko6CYtTLGjwKB4fo2F9zEvwJb5AsZXVbVKgiewJ3AMUWuDdb1w46WCc7cDZgZjCXtZKuPy1C6APfExRh1hS9",
  "key3": "43SbwYiGrEppbeVByozvpEmGW3C6UcGQqGSypQnTSKNZYDFGnZtYaUayiCGRYfXYzgk7MAt9URfdU1DoR7C2Mpct",
  "key4": "oLrnE5WYE2PTbJxTBuRhaKzwF5mVb4bufaC6GYg4AEJibDbH7Ep8rfWNw1Mh8isbkWm71cWjYxsEt36hfBKuXSh",
  "key5": "3oTJffNyUH7YimWvsA53rT6Avz5FRAf5RAUHHpbpm1zNfVNauviVzPcsE9Wjjx7bqTMT8ntm41wZU6H5Ch7NBkbL",
  "key6": "3g3pMT4549wvAmD5YXERDL3DmHH57pv4xQaeoddzkTmpR5ofjtGWLXhY6i4qX7cZUddVhFA7DC3Em5Axj7Awf4ji",
  "key7": "2cCR68asNpxFfffEpDycYx7NJ1fXE535VKa8LoAtFuRdC81k8NmnNCTyg16JF4ugm2Cqi7HrtMNKc5zPqTQ4VzAC",
  "key8": "mk6CNcLEH5CfFsZkvnVdQAjUBdcMPhQLEnBvoevatEXuCneE5LVikrFZAAD5VpGvqC44Ra9ZPzmkHq7v4LDRhQd",
  "key9": "5TR3gyNLszmMDBJj3dbJr5x2kG4T6dCZypVXQUCiN76yikqapeZri9zJBYtbU149h8YADvjiC57EZPuzdxbioNNr",
  "key10": "s8b78BSJ9WASSJSp94wUT8HtVx3sY5pwMbidDaH5hzpQNvSu2Nin2eMhZ5L2uqdqRXiNPUJcNxYLWTLwXsKCxi1",
  "key11": "5sPvVHfArgPGYQzbtnVrvHzJ2TGM9oepDT3roeGXevkok7UjBhTEbKXrhoSyYngTrk2jodCBSPyYqzf4J5Ett6fg",
  "key12": "4tydqZWzBmbqPvvT9EGyQ7kVMW55R2u2VNehjwwK5gfiayuK3FocHbwZmzVTM2ZfzdyCn2m6Bdsqix1pCDPdtrRn",
  "key13": "2zGFwGfYqin9M6ap2AfXi5WsUDmYXJWxTfnF79fe8Mo3p7Jh9ZnU7Ss4DXBwNJadGfDjv4RLEqiRgn9HC4nZbeS1",
  "key14": "VLBQCwHXYv4jY3X1uJXHhihJHKvzJERh9PLZRGCipS64qktmpaNTCQywn25FSxTCyDjWJhTaA8LpcjXtFSUKGQE",
  "key15": "4QDzraSt5YPfHH4Z9v7cLknVXL5CeJEP9zDRhh4UYDWXybDuEqsWiaaxuXHhhEF41P4uB22qnsCDoMiVWfxv4emn",
  "key16": "4Qup9jaDX5EMbWfDvzZAFjshtjx2oQWj38KCfkWKPT3PJ8bTGKr15bvPSGTgP5At6JKqQNa3RpXPcrntuvXtJEtM",
  "key17": "L48hjvhhHWeqx4BTduZYCjRqyLE1FCUPdTk575kHQVj37RrbrZZstN9BbMJ75nFZnUVZ5TWDPtSAFx4bt62knb1",
  "key18": "31Uf4exCVQ7kjfzgDBr1Q4wt6eWCUenxKsEZLicoQEnctuwAhKv7jGfkzLSdH1sQToHXcFuaKUGNppnmE2MzaXha",
  "key19": "nPdUajZFGzHNLxvoXB4S15LLgBDXDV3B7QfouquVu9i2eJVw2dcVVSDcLPHLLHpPu9Fxgf4K69HxbPrqus6F2V3",
  "key20": "3NErtMZ9oa28bVz8DL5F7vsPhr4KGBMpFoWtDeNyN9r6bs1MVpmyBTxjPWjcfUvAqbYTq1QxibbhT8qcwvN5zSU5",
  "key21": "5YwtKHFzdgbY7f1XmyLJ8Mn91wbTLzvGNuYrLCcQTWeydTiiiunAW5mj8mLABPdweAQBogeCs9fENayLnotvcDTV",
  "key22": "4LQSuB6RkFFZqcYULx84pQHVEHZmDBxDAs6qj7WM549hEGtJFSKxo4KchMLxYqUsiix8TVvc41czN3bVAooVndd5",
  "key23": "49SuJMbFX9GAhDo2YzfcQwxnGN6NizYMsNHLeD1fAxgBsvjpr6aem8U6RKcTQQUVp2BvZyKqKnsbZ5kB7mBKnvze",
  "key24": "2LS2YB6TKBbj7qQzkidm6ukCTRBqMHaXz6iBfTDDmv94sJBdJYx1URtAsv55yWPh3C2xn2x6mCET5NGGuDq1raCN",
  "key25": "Bupx1KASctukaoJ8Q6o7Xxp9AzC66fRwq87ncyJq3HQW3vbXZ5dPi4acehbSR7fBsVgKK55hySvc4vGLueFy7eT",
  "key26": "3zx8j1uARnejAvpg3TKg39HYG7trT19oSu3Wv8KNVgqQ7KNH6sjRuR8h1msT4F8PKXUMszXAEeXpihFBrAmeJQEq",
  "key27": "nnWGmyNj4gTLVTwDdaACmjxC4FyPnUjDkFWrKSi4xrDiESxLtxrZVDj7tGE8vTq5Y4nCEDeNzoULPqyW733nbF4",
  "key28": "5jBhgS3W4zzDyV6LZJRq69jvgW3mSjPZpymrXzKj3wKkCPL7nUv7BEJ42g9JUf9YREhHTHQArdhG2xxeaRjzXiiT",
  "key29": "3RPpM6ZAyjGu8VZnW9nAB55fRXkSnJ9jt2zNsrcYqJNaqCv4KPKSWSLeycsUGGHTc5bY5XkmWy78mRw6VP7KxDNk",
  "key30": "2fQRa3WQWZja5UXbH6wZE7bGUhLb7MRNj2LSsBFPgdqvTvrMVVYgAqBS8cr5QX7QTWneY8riS7xtygfg9sn81gEm",
  "key31": "4q3fyqCZw9FVKrbBWEM7xZGSbGsHvk1yKtAsDg53vYs9NykEVtpueDfjfvkkYftNz2vfQFtLSeZCax5rn8wkw8iN",
  "key32": "5cfb3sDGfmTdWbC97peNjEEA8QcsrwurqG4gMtXCeKRYSYezHdpVAvroWSDF6EwGKMTMr6evxYnZRAGKkiZtyCgZ",
  "key33": "3SyxBLjobXvH1H1aJjPCus4qFRGjT9WH9WMPsnSRfeHSiMvRizPTBsLsRdPLVkBHz4D3iDfDUfgbN1vw35hR8ntR",
  "key34": "33nKc8j2wHfqyFUBUnEPKi8hwsWnAuJNyzyFDtbZVmfjcBMYqMaYrqoLP7Dc1M86aXtTDVCqoUmcXt9FdRbermxN",
  "key35": "3XV3NAEKXDwydYpimiHCyETKBWjjLvWZgd7y2nAvigvepL1ghPYA8Z2vYuAxRN73KmBjDjZ7cdWgbNfFiZvtW34d",
  "key36": "3GoDhMztPhbTzH4L6ZvAVkmMmLDQiZrNb6W8ZA53hXrmBUL83U5wZP6uZeNHKEDSv8nxt8fSvNWnnTsJQYPwdzdA",
  "key37": "nqA4hzvsvJmpCim9jkJMXpPWJS6YZfesvQDYnxG4hSTFtdCdpN9ucxAYVxva7ZL7nM9nQQ5zEhD91NfytHRL2GN",
  "key38": "2GdnZFshszjATm1GtZLiXAg4hHaT6PHd16UGqmZM5GARi7NFwdiobCAWssgkKdcHm2G7Z8J13jErC9vqfZrMYze6",
  "key39": "VKpzo5fTCix3MWYR86AAo6WVRA7dHYKSmx5cAxuguwwhaa7c1rdU6Eo593YH8tXK3nBd5NFju8HAcjSWEbpg1fD",
  "key40": "4XX538Jd2SGD7F52LGAtqBBokEuXgUan4k5vtLKfX7rvAPe3HzfCaYWUHhY6P7KUUuunfCvuCYJ6BRsJQdniZsoS",
  "key41": "3E8fxPM2xPByuqqV9CLnYHKQV1hJVwsK6VBXnRP9zQVrQyvdpM4HfuHFHvXhR2mZFgAWiugpVbpCy4XE7TXjLUMZ",
  "key42": "5MjRLtYgwWSd6UvaxqH7bN7dETB4FZjChUiWGFUDkYtx9u1btJe27KfRAwVHLi994TPoE5UWWZbK1Yv8MDo4EvXn",
  "key43": "vJfsZt3CL44f6U4haz4fx3vyTDHypVp1qRDDEAyrTsz3GxEy56it6x6QcWJSTSzCsiKW5efG2efGDZwrRNoHUe1",
  "key44": "Kw6Gmrb9zyz9wr7ieiKK2n1A9DR56vrerKMcxTbSJb7sz81u7nzTTxLBDqg5UMJjDsyAQP4ABvTStfVMv4nearQ",
  "key45": "3HR82yuWjFcQb4BkvdDRCEjyvfarQnr7ptkRqgTjPLtZ9234gacHJdmYAFVtC4TnYLyfM5vFy9v7Li4debYAfp2B",
  "key46": "5GXrNFgQ8PEA6XNoNJVh62XhVmEuqzCTaWMNajQmdxhMRgxpTn8frCoKvvdUvsq4tT87H5QGmxAuDapkyKSiFHsM",
  "key47": "3EVAmjXEoebavhLQi1Rq93EnT46U1Qo7mqkgThrU54y8D67omEfyJXnt2RjkpxDUcSsDHEZHUDe9qH8LuenYZ7Et",
  "key48": "FHhW1UK2U1EQS2uxR3hFSpsqQURfF9Cf2LwvL8mXJrpE2Uf1g7yyonwyErBvTt4UqYzs3jxmPUHpdixJGN8PP7H",
  "key49": "5HLNuvViQ7cv3bynFXLee6s1PPpsR3p4PdQytn6oMgvQFu83bScg2bLMa2HcJQfH9eZxLLaA88vsB33ocrsNERE"
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
