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
    "28yPy2XFcQwGuJK8uJeyEDC7XWa2hgroTr4fhXUwHyNhZ7VP4jkdeUawvnREoPgfUrE1iuQ15sKL6XB5ABLDcUjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YWGZE65d45iEzRjwXkyYvnCdGnje7qB2wWk4k2QFCMFvHozLgetSHDnuP6LGaQxXE5WvQyzwcZwDM3rqsbiSR4J",
  "key1": "thogsKC9XwBocLXTtUUbSJWKrsrNESN8uDmRgfaa2VYRpWe1sug2SnZnS6puMz9gkbeKdPmmD3dh9fM8TD3uGXC",
  "key2": "3y1xMNwvvLnCJFCsPMbSCDMJTv3sZook86ohxrXTE2YQY6UQQ4NJox9HyjtCyoVkE8i2BkYDzcSDJjxVCfzdP6ko",
  "key3": "4TwypYBg2zhPNtskDmGjtuocVfHbxGZ1yKDsWpeSS1i43CdMenkMW95FQ4Y85ZNmCNN4ikWzU85PRumAQXMNU8QB",
  "key4": "2eQsXxg6eBNra7WysJkEUxaZ8jn9UTNRCnmM2zb39X6PxvroYYFDwz7XKqa9BiMjNSQg5NtC1Zu4THiGeh3dSzWo",
  "key5": "2De3BRwsZ77NdrNoDdHW2eQYP5G4JRSssovc2mRaHRdnKycgKuKWC8wLH1YJKJWNGjK38o84mETaM1skpcSCd4HP",
  "key6": "3zyfTm9WoZQSBSUGYqJ5ANTdsiin8wnhL6XedqjcnRW6MaQRa3i2i6JdVU81XiAMU5m3NDbHJwGZzCjRQ6eUYcTE",
  "key7": "4h7HPRRD5Ehb3y7jgXSjLA6es5YzvTEuLXXKnz2GMrWzYEt3bnN3h8reb3JWM2uqTBvwVWYhiEatFY6LiZEDZs6j",
  "key8": "m3v5EEfqtCgmNb7PEn5fVvydaToeckj3xFeR8mmQ7r8EAnQtxC5ZhNMp6bHTjftUBbxFF8wfYBiLHxaVoJJBD4c",
  "key9": "5jNLoNmRKnfmf7dgW9Wwyvo7Gku8hcSnPqn8SYd8s89A713Jfn3Xi7JSGHaHw4Xp3AST5kH6xTqvM4z9XW5a2dC8",
  "key10": "4aXizNEwkSdfm4pheqsgiBHsq78qcpqgmEfXoFvKmx3PJKAd23iHbsBGpQ9bsztq3vHEVScW1CNQA5bE2MgBfrvD",
  "key11": "67P6NgeTsCyCjksYJLkJCZjAqH1q5ZajwQitR1pEJXqm95KaDjuPXZNAruNSPeQuS9UDD3vj2ihfL9BQH4dzF6g9",
  "key12": "4yXvH6bmXDYwA2dmtfZeNZ7yXiTUfs7jfodKiR8s1B5HqawMT8Qk7nXzEZYbBrubAgpEawE4UMQbvXw8FAxvotBE",
  "key13": "4yrXXjJscMJK7sw6KKKxrHGi3urwckj16dc81xB1AQ1WnAjLJYD8gjLWkZxg2SCDKSvHa5ygDdnsDkiMQZkbTUi8",
  "key14": "2JXVjHQBTJg5K5NNmypQugCqSanoBE1AmHX2iaW47F7pbfYnbkwaJxHArge93iTd1hHWbiugAY3EJA5ThYRqJVew",
  "key15": "4D9dhEo1WY1VC6SViXNYk2KrjND4RShC8SK11VmfYebyBMqMPtwSCLZyDzowBtNTcGKkVFxnFHyTYRrnr5cUUuEm",
  "key16": "3xfdshNhXEpejxfZWTvoyHb8qsbuFHoSNPvYismXJ5y7JPnN2FV71jsrebu5o1iysAyipGSSa1hSzPTv6TmAScUn",
  "key17": "eeX5zbGdNDQykxNrr1aLRzpxQSMv45gfCjHQ5tAFcDtq2Fe9mWmCbPTn2DYpkapbAcgsDmP57XZbikydRtjCPXQ",
  "key18": "35dT1M9VZ27evm8uUeko6eTuKLX5bzPjPPN66tnSpStKgCBrUb4MD8CvKpx9LfcjtQdRHvKi9uNPq2uhd7rUxMF4",
  "key19": "36bEooc2BNyG7sPGEXgG8UtbZm49KHeeWLpRz2GzNwHdR98tPjP3mzQFkEJbF8GqyuGPP4w5MgMoYr2AWNpUrDmz",
  "key20": "5LRgbUFxNuWUHj5scDhGzcAhQSCMUiSd1vrGQcQgyZ5YRKNy8TQGviyFK2fJANw86SuiFiD4JCGQevwL5tZeCxr7",
  "key21": "wLBEGD3DFZqxYh6c5V2PtCq18rWJMzjD49BaB7tnUDmFkr2Xdttm6bUBSqqnGEkf3gikaTkbDik5pnD7EmuWPiw",
  "key22": "4UHDmUygoANCEHZY3vS5kqyncKUyXgDJJx7MsYYEEVriEaqjFDWchJedsCE6NHmuLG7sqbkNHdxHyDWtPrFB1My5",
  "key23": "5BRH1f1TzSBsUZ9RSLu3huEimhNDiMjrg1irAeZhkfh1paFQudf349XweY8PpnU4AxzhU6L6rKhDqXVa7ewHHXZL",
  "key24": "5kUYA5gcUmyxaXUhToh8VcqH2SMAGXUeiz9LJprr1HgWMDqCYNAn6qyRDesYdKPez4n4MfPhJdthyjUPxLLGE1EW",
  "key25": "4GxnKf7HaEQRFEW6A3tBxr3poPFtw8amhuTso5nQfATBVD4LwxsUFdGrCxLibiuzmyJfD1sauk9VwL7Q94qoDWLV",
  "key26": "2eFisYLobiZ6mtohX1zmZyeWK9Jw6aiDKhx7y3AyaJ6wd6cNKeWwPwdjLWf14n5Q9YrfECpbKJaiqkx8XMBzFa5e",
  "key27": "2se574zjeo8DcQVmmGAhVmYoK5oxVeMpR6hp2cBd8hsWEkJ8WHRQqriKK1pRLDcXc46wyGzGifgXTp7jtbUMTvaC",
  "key28": "3quqHv5PUtTmUcXUB7TnZGBehMeadDKnqcJHNjPjc13DuCiAC1cfLJA8tnuHsmtyVn6UsW7wfv8bkhg6WT29j8LD",
  "key29": "eLvKhJCG3afQKRQ4f9KJqM3U9MsMDajyDJUjFn2uyerZ9iG4MDPfNdqBVXm3w2SWky9ndyuMwNveKkz1RjegRGR",
  "key30": "63WVdGqwiCf3BSJZVzY6wuqv3KbTZ6Xbra5EfbgvsNr9mWwmaGgRXz6t5ZudCrD333cYGbAkuXDKCdUSZdCDDKGE",
  "key31": "4rgGHt9k38qDTVYM1PdjCeyxxEEsYUEU16NexymuRD1yZA8xVgg35ixNS3uhuFktcxMmQCQyCtLqrMnyr9DkYGP6",
  "key32": "2Ry3vV7tijnJ9ti1hsGZVZFaYh1LVEbEjHE6KLpsnDC4Ar5q5UYrU9ZbBQ7bvhLTSyoeMoX6a9Ri8RcstFJiuCr8"
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
