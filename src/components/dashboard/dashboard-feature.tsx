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
    "3wxeMvrMtmDMmL2HmJRuTxMWE863z5ker47sdTB8wLaHTWbbFuTUHnHhiWxBV14pvjTSqVzMAyunguMB8krV4NNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53KG2QDWtpVwTvApKARE93BbRTaNMbijgCbaUQBcCtfrJXK9Wh9jnK89ckGYvryEcydMtFfjwKyoepC3hTzeiBTR",
  "key1": "4tEmkv7jG31aVWzoqPubWk47K1BL8VVCMuWCrJYjBUtVFx2tpXQ2Fe9Bb1jtU2bvaFdF5FkN4gUwgvF34Rhc8Ena",
  "key2": "3FTPqJ1WZKUXqV2ggQq5cWJeugfjiNQovmNfuJi7sAp64AJRVJaRMWWTqq1JX6BnWcjUHsXrkxFj4rFFa2emSSC7",
  "key3": "s6g5i9dFY79mdrVR7dokVqRpxq4kx9jEAtbybuU4wid9dTLNMY1DKM9BGibKo9GAx3kkubQqobCELUDoM4Vm251",
  "key4": "31GHahmjNvUHoAMYron88rXR97Xfez1e6jzLiFEtiFdVPaXkWV9QSJxR1aj5SJ5i6z8tmDt66mmd1PRWAkEeC7GT",
  "key5": "4EwYTFPxNLEnAuTMkwttrvnvVVpumoak8i9petSoM7KwCTsviwT7vkDHZ3aMSHEryWQn7oE486Tp79ACydWEVFJ6",
  "key6": "62k5uVwCDTXVGznkPUTgau6D8ZCY48NGKrYWry3zLy3UmaZS4fEtQnjo2fWpmMadpoUDwCPftRLtzPvWdKLhRoUK",
  "key7": "5YhjWLqwwjbJBX9EXX3YbYaLnrbbxuTxnnH7dNagAmAjMs81XnjomapE9R7HA7ADWdymBcfbH2SSoxWWL8fM4Zn5",
  "key8": "2aYK3oooCNvnyDYJJmpU7KmWntonuG3UzN25udHH14YmWGNdcQh1GekU6ULYcFNTtr7WFsRHsXwsq24yb81AQYMk",
  "key9": "itLFxqdbnf1wcGVjBw3LRag9FRjDUnKUJnwns23yKMz5R6EwBw5McqnuS5mYjWWLSRAG83usqkLmjvf7BLDMVB8",
  "key10": "5jm4rFP9jgzKsuMsowzRhQ7N8kxk6o1EDtn2uwboQMLeCF2SPzcofzydxXNnnFQ19rUVnVbEs2sns7BQeUWwtoCC",
  "key11": "43woRLhJaChkRms8xKXcRtYeS66kMtx69UscpusuLSdongxcDc6vFcnkLkFxnZfX3XhxUgQkmK3UhJX5PerEzmsB",
  "key12": "3Yr4DWiwioS6Vjy5zHg2ECT9wEoRJLapDNAwZhieQHSmxv5nBdjMK3Tc97GdP6xLBVYXRqzMMtReL27bGwRduGmn",
  "key13": "4XpP4CqTLhq3kxtDup5GG5UtUbfHyF8tXvELuAKBYAmJvNVg5NKZefQQNUKSrPuaSkxDozG9SRXiE2Cy1inXEMKF",
  "key14": "2PoxwK53YrCHNrKUZNUQJ9bEd8BRXFT9GVyjQPWRXJYtBtD8jQzoSLWBKSJahVBeBMCWeNbakwvxsDe3kjs7ynw4",
  "key15": "2m71cDNQMuTkCZD3HcMzpQRvSJzvp1BMaAeUgQjVdWajMJo6CV7zpwaic8UFLCCRKVNEJrVKEfvXfLWFuPT2PuSU",
  "key16": "45pW1bw1tHdvALoAW7kvuFByEkqFdTDpwCDxPhyifsBKgqTKThzrmNGu3UkA3eHoipcoLVkHLRwaD6RBbHEQF7BF",
  "key17": "3a9xjupZnhYg5zwsF32GMrVbFKN7cE45x4etsWkrvCYxtzCHHB1A4HHyAuRAjsTDqvnftAd747bNEuwevm37Y4sf",
  "key18": "3hg9eo5TKhCVrQEAvhoFRDkoz68S9c25Vsov9j5UYP1kR7W6joiKZKfbcCKyW6UqJZcvUN8PCTathKTk7CDgU1Lo",
  "key19": "3oYWdEhjywxvpXo2ENiXWdgXcwwj5eMbuxxCXy4cRXFzGhKB6GAGcTBzf3GhrP3JLj2m9azx3f5ZwsEMgHnSxJhk",
  "key20": "4ekm97MscDkWzzKNS3FVDk82FBYfHBFzNzZBU5bjAnW4Gz5TnCKLS4FXwFomzg4wBfLPyWdSj3H8uhm6d33Bfti7",
  "key21": "5PL48MZqR3HXqai1GwPhwmg4ytbL92odz8eLqG1gtweFGgUUBviEnuEPoWWacUnmeLt9AjVgqV1x1LMnNHvsEBkg",
  "key22": "v5aUxy2HanuqwYfY4oeGbDWxZVbmRYDJCKqyttgC5aUtDtXbbyqwf5KNDrzLQABr6B7suF2Cun2NqxH3rKKmmwb",
  "key23": "c4hDrd3sUfbvdt3rv2gKkF2BptNtLwyPHArLTtckZGkFBW9dXqyqeHt1uaQqjubf2yARNjEPF8SproqsEwvM849",
  "key24": "3naDQ1By4BCQxeV1SLcN2gr74wvmtunwowU3RRH3bF5yifEepZ1M3ueMZUHscstNpa1Xx3n8jLzB22Bnf1Mtbc79",
  "key25": "4AUwheL4oTCS8TnXQo3tLksc5sZQr2FcEnL8pbKjPRRq1A1GVBHtbUTHAHpJqbMoUJcEWrpC6SwRTqmBd9i3ntmT",
  "key26": "4edVguemrcvmRDYdZ5EVESHoMmsSuyJMSDu6RNoy1JQ4hTGhuqbjewPXHunbyNy5ESXhe3mGz7Z5FjW52FYLi2iz",
  "key27": "5SYigUBr8mvTWUxhMkES7gxkthmEWHzhjybCRH47tLEbSM59QwdttJ7c1q1HfNcPgrcr63W6jd5XTbEaxN4vP6hb",
  "key28": "3fvdoCY3VP6BK7TysT1DLCpxAgbVK1xhJqBSPgLb8QWD3JPH2k4g2Vtm5AaFExFnT3dvUHP7gSuGwPfshfYVux4f",
  "key29": "Lt872mxQUaw1gCetcq44QBfgai4EybhP2MmQWJZMt8CCagkrFkMYsz9eaSJqKRMUBtUTzVeMvt8W6URQKH4PdMP",
  "key30": "3h8icTBDBZkaTs1Jx7mqNJtJTNxX1ugPMzyhcLrLEfLe2HbTirw9gViy6QtXGiEJFvX9rwfSQFpg2x9Bq6yB5ybH",
  "key31": "31rQF81rHT7snsA75cmmBsYguZaQh7JM7QSyczVfctJgohNJumZe7GRNu8so4FZcJPiX6Y2Uq3foJJHX2tB7k1Sb",
  "key32": "3KHx6g5kxpdRU6CpyuwUkzHvP8qdkWziuz4ow9mUCfYZJ5D7de88hi6J697KdEyMqbACbZWDt2pdErMz6BmurEJe",
  "key33": "59tU517soSYN3pDbpQxNYiUug5Z52vZenXh2JYLuob2icvHPRmLaVYPUMMTHvPWMqEuivtkRX9iKueB2zN1EMbRd",
  "key34": "3EJtMtLV68tgBVmHZ83xjMRjczdjTdvMk1RRE2NZtKBUgKrX46paoi2JLVcrSLj2DBP4n81Kg9Xyn347jD5G5iR7"
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
