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
    "3djQCKVSY1UcRHkDA54JQwPr6L9bk7ZLWyY3vELu4iATVjmLCkgiKVr2sLexqf5eRbbS6sAv4NQZHhntYhwx2qTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rs4WmE6KxcSaHhE1TA4ZHdTbDKYHTpXZrcgVx28sfQ4P6QLHPwTpwiAzDuhLz8MQNoy38czxFPeQK7N5CacXBpw",
  "key1": "4adtnf8YWg2J6LPJdJ6qehSM1EJzeXH3NL4eCjam2mUvPbAyM2GMVCorLJpXk3yehBP6h7MWstU72pdGzStQph9b",
  "key2": "2dcDKdU73rXYmAs6Lw4aG9rspTkKMT56H5c8XNsKZCG3p3AzwcAWWrFkY54x4MCqkLwHorgJtRo5vgxUb4iZDp68",
  "key3": "63FjUwztNDnsqaEbRw2spg2WVibcj2iEFd7FJQxmNYTWUCJ998firKVc1Ygv2NiZLAFBUoamNMcAk7SUM335bVgU",
  "key4": "9ApRMETE6xSoNtHXtY8DQyBdbvNgciL9WWJXKdTB6qnwyoFsHVdHTUUrF5tjkCNAGqLRGpKD5SYFyjnt1KzUPkR",
  "key5": "53iGNaENnqVfbKw35ADaTSLAo7EnRXWzaNMSmkjqy58GdnyV1dEbUej9Sob9zQVEee6QhSU7qPLigxN2TYcufgq8",
  "key6": "3US9C3NGfLY94FdhwGrfGKm1M61ydgo2usN7PTEix9VWZzp9wZWE663JSfo5nw8iAxR5ysyDAMiP8Yj6URq2ieWU",
  "key7": "4N4Ke8Q6EqU2B8GAtyxq9RamxRBiGqBtLWom6vfGdHNPhSxNavPhqhwKjKmabDs8Tsn8M27d8swT89Y19zSZJGTP",
  "key8": "FxRSy4hFqMLgK8FPvZJARJdoDkTCuNRBmTyYCsyZVM5SfGZhf6wY3kdSE89H2wcN3d9dpe4ayWYYmQxBKgrBZ2j",
  "key9": "hGzU3JF4EaR1VFadTLkiLLVxrbQb9qhfCA3MeUwqanPw4CVQLTp48ijHsbeSXWJRzHWBzbYRjEKwE19JRUUy8Ps",
  "key10": "5RKxjF6GpLa4EakXj1WgGd758o5CFkr2j235mZYPs1mjmCA74Ynu9JttWnzvJeo7D79Mi2sVSB7T1K9zGcr8aYAq",
  "key11": "5LeTivabEjRJyxPsA3Y1qssPdS5SN9vCjm9ALGVW5eoA6EYS1JfvHZ49KKu5XDo2TY3zjunE41wJSiF7cSbrjh7x",
  "key12": "3dNXwzuYji6Zr8z3TGzbnePEYpM5R5CBYpwzo3Tuccg5rkkiRn3SQgzwQEzAfXZkqBe4TsvKvKVktuvwuaXFehsM",
  "key13": "5Hg9D7eBV8DqjNsDn6Pmiu6SmnV3A3JBcn9kTJoH2ERmPZnYVHLyag7TDdwiQoC6SyBT4a35ho8PorTjcaSLzFrE",
  "key14": "2pcVJk2AF1rKqPisWpYyzMWB7H44nGUscBSWiQdsnLapa363qxB4v4FEuvmM996ydEiV4nHwYPZhyuuP7neK9y5m",
  "key15": "ppgxhHCfTC1C1JMcLfYyKnAjybx4JMW3woY9kG2mp6eWWRagqnxgHySYZ3qSibjYpNZagYij6YzgP2qvSNus6QQ",
  "key16": "33AiMK4Pmv2kuGsBhQ6YBqApoE8bMZg33wWkb7LLrKRNMyS121vpkaVw49a68ydfkLgLMWXeW7wbq8hToYt6ouPH",
  "key17": "5vDrToABaRpHKb7gTC7MoCX6RJUMhRASBoJyTGiWsQc5VJgEVHKnPRWnfNRht7NvUDz9R4WXZquYLqvdY3BrZzfC",
  "key18": "3SHfCAZGzQqDPb2cX98GpNXPFpWnBp9jQti3JJSYXn8csqo17PCZGrFAP5xkkbPEK17RHh6oYryWKdA12w1kcu8g",
  "key19": "4orcyNiSLdzoT9CUPtf1kud9foTQZS1QKJSgHbf4Bppg3swnif5xNDNK9hTQsZqWVLtGSiYiWy6tKfDUuR3set8g",
  "key20": "4M9LW2QTukfX31maFa9RtTR3NrLYcYWNmFrbKxEBgVebGt7j6hqJGaFncR7MgJntWqFxaojjAAaoJhheq7QxkkZk",
  "key21": "3Ve2q9uVxUZoyu7SCPbnBehqQ89uKsq4cWC3vwYBXpG4KCv1SzhpQkMamovUBuqwWawH9f2UoWVXKGe1U2m3W4yy",
  "key22": "ddUMt4CTU56QLFCAcxaU9Qipn96Zkf5wwTnZXadKVyvDPHQg3msPMpyNydN1FjuxN5zHhZp69sFKdvfS31Fwb9c",
  "key23": "2w56iBJXGerR75bXU6auPHEhTEaqBZxFwvnur2yeJnm4F3KWiu52fPUjVC8bzextqfHsftUrFEuTNKhhHjTWdWfj",
  "key24": "4y4jZKPWLvGu3Q1HrzTvBriUrS26VDSrohG9NGyMmR3CFf2AnxGfJpRnTtsAcHDrCVJRavHSRSD3yAzKkD6H8xB",
  "key25": "4uZsh6RoCmkccnZrgGU4HVyFHXmXYneSZGcgfLXo2LT1Fox6vESi1hoDoKdYpVF9QrdyWWHKrymjqGVbtpm67TjV",
  "key26": "4WTnTT4j13jjSJz9wJFn19dx8WqaT73JW6SXXxofjVpWCyVfsv8iz5CdVa8XqTdMoyHnUkL9SZdPomiTHysmgRsA",
  "key27": "2zmVu25vkpSDotZB7qXegHjHMPLpcu3ycewvJxf5jfFm7YXD9wD5azcQaSdCvU5eQGBSxdRkKicHzmdRDis5UzZH",
  "key28": "35cX2UL3EVedvMtrNPS5JU714k4VYEubV1iqGsguAiE3vZBGgbHN3KMmQ4x9bH9uLnW5djJFErUi4rj3v9796Ci2",
  "key29": "3JdNjRMBo7dphDZUqp8BmzTouLqLJHEcDXkeLbwPMZS4f421z7dhgNH9FCSYoFHZwT6toxLz54cUtyt7LQFDuWeB",
  "key30": "Tb8yQFWa4ENaHV7vEkP6qGgR6qXnj3Uujysyd45mXTFNLGYPukSCecaGaVuzRRKkvMvPkAz2vYNFWTocYRQjgaZ",
  "key31": "66qZ4NLWB1CdJ2Y9nqpqUNt4rGFxAFuwLZNEXM7cJJJT9BrHPxBz8kzdCXSigBoBM8SEYZNavqEQmKAvudncQJXR",
  "key32": "4nTAsGD2BvcsjMgsfQGHxuaxtWSWmVnG91XPmNFEn1W7uLtDFbpjiTKBzQ6YfrdH7pfZaJGJWtor7k5ZMLrHUnWz",
  "key33": "28JvVhDNg8fxb5EsAmKXHycXcwkRDmUL44c1nb17YfenSUzxT8gphSHo3BHR4f2LEy6G122PLoh5zowFgybVawcQ",
  "key34": "V2FU7dy5inhLDqEsHxtbkx1Zr9QDSuGZqoie6yKhrZLqM3Rc3JRTVL4h6AFAC5JGRV8J3jqxtYNoSmcWDZAwm7b",
  "key35": "M66gFi3LnHHPKMXemUjz4bKV5wNDGG6j4dLE5Y9uGD7LLGugVMqgYC3XuXUuECaor1HEkiK1jGFt4rqL4TvqYey",
  "key36": "3YQ8n6h9ScpMkxoxrzSuxAsjZrwQyPA2ovqNu5QeqokEgujFopWVyWFa4SvmPeehWw1uFpjgYpzJEFYiBLdYZUcc",
  "key37": "38WrfoHdwReEaRTtvdqy7gXCNJznRdwsTVSL5fXwNkGGriJU72ScqSVag6YPVFDXZhw5LrAcHpLajDAUKPQoanp7",
  "key38": "2e1Utddk1kM5u1dk9qGTiQJ9wjMYg4MHAVE8wrC4GVm7FkGYy8Jznop7AekF4xbSnhpuvWsfkRpWT8nN8xXfC3mj",
  "key39": "3ASFnAbFL2bSMTgVwPDbEym8HwVqvFEDzcJS6AC4rp3NYEXAsWfbv4H6WX3prfqLjMbqAu7UdyfCLHLX3K7UbeKe",
  "key40": "i9775mJhLFoxxih5odSyGKPiRLm9QvcmtZa9nvKYyrb7rrgAq7gjbNXkR2yhZEXqJ9Fv6tBRJMQPYqXT8RNmS25",
  "key41": "23zzw2uk3V173oZt9nWbpFAvVfiAcGMtgt7NNfc3akY6f4rRDA5z2kYUtrqJ1HYkAqSgA9p1mDxCD8WaKpg2ZTo9"
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
