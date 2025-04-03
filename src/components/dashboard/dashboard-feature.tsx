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
    "5w7gybmAfkbbZJf7xXJRc3JxQpiqr5KJmMRR8peGipapSczd5yBpLa1FAhMhExsePGqjuWeAEyox3SjG53dqa4VV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FqTYca3pMcU5Atv3iJw7oAhvstRmqg1D8GJpE2oEBeTP4C2cjxTwgjHc29iwZvdJqTXcQM3bGXNzJxnvJPP4THR",
  "key1": "3LjVkNGmaZnE5ZRt4esSZMcKKdoZYTz4Q5eLkjvkpEq4FefXeVfNgT78ZV6reUP1SbLVaH7idm8TJ57Jn9MKBPZC",
  "key2": "4Yy7hbDPumcNmxQ55M9PApBaCEokPtPX2t1uQxsdQtU6jXPfAkZ7bLGY5pPySUy4eVtN5fqC15a3yHFxdcQTZ2eC",
  "key3": "3NSqYR3Anu5xaYhYsxJvMY4gwS8oY47HgVHLyfV34fZgq8G9uvyGWd3jGWMxpbJFjrWD7WtBtDqV62hi98QVAWYo",
  "key4": "3CAk4ma3haHCZjJ4GSzWtd5kuoksYH9SRGfrhNJPxkEsG38wkHa3JedQdWZ5gQVXPvQVmvDidd1LptVSsJMc6N3z",
  "key5": "2AiZFmoE27Vv82NWRM5acTZw6Y5cwso2HSW1yKp29o51Nq2Pxp74LpBU5qf6oDrWFyYmcjWsJe5Bqo5owpBhxVrU",
  "key6": "2pV5p3b3Hr6FuukMdUQb1Up7jKVDb6ibu889i3XAWEhpg2rqZxUi4wnKqbi6cKABUzzdSDy5WVhZDJFzZBXSiJTz",
  "key7": "Te3mYad4mp46wcN5s7gCs32pPg6RdaWdWdaCGb4yaJ5xDaYk2ajaynX97bvv27STydD69fp4swg2juqPX1ULF6S",
  "key8": "3Hy7LnC9V3nnT8wnBmEWPdnZHQHe9LxjuRjAQ3AG46p3b4wciTP4uwfZX7hjEuzNuoe6V7d1iTuWc8EsqbBRCKCh",
  "key9": "XbCa4hdXw6BNBMCrTAJgE4y552HpFzFQSC1Cnh3tMWXfDAQkhG3QUPNjUsxiT16nQUPomFxVZtnvDtX3sKSvqN9",
  "key10": "2JDP9q6XcgyZYQX8FRopecwgFNmCbqjQrTErmvB4JmB2vuevHe5e1gKZRxksyme4SUJeVC4DK3gz1kiXLNw5x2EC",
  "key11": "S9Rea7BZhT64y7uHk2eDGEB5dwejPgrzVen5hV6awfMXe5AcoWYsRFjhccu54yi6eKRJ2aVEVCJkaEBuGS2WNDU",
  "key12": "5dcgqYgggMqDwmu6NC3mjW6yuYhEN2BaZjTJ235tguq6HGGJ9rXLQ3hosZjuz6voWktMttdGz51FdBTJ4PhdPZcG",
  "key13": "45o7c5n3qJSdFTXiCMjZPiBCN6iaSCoWA4eaLruSPNG6WBT44gXD7SYzG7tD6ontWXzqyMSWkC8wTuXQRazGH1C6",
  "key14": "3St3mCUBFJeAxDyJbzQy4HhWd6Nwp4mesztFtbdh7LBWtf92oWCeqR78EZTSGsHjyqVRJVZXmwujoS5oVPVhxFW3",
  "key15": "4ruhYRX9VjiZt7RoAjG6nAFf3wovCkf19YecvdiLQMrC4demB4PjCnWCMED6KeRkUtauRPSAPyX6itXrCkconR99",
  "key16": "ibB3QHwteGKj6SUTmL5KEhL1a3k84P7BbLTC6bpoC2sJh36wAU2vtyrCBvEmNdoJPHJg3geDKbxau9btcyC4L9T",
  "key17": "4vdzMZFGxZ9aYuCR6g1dKnnpBwj1YVmRen2pQLWHskF4cfUsmhCoFq9vchnvXkdN77Scu44tqpSshZEpC2MS9q41",
  "key18": "6oLsspZsM9GxpZ94CN5kBekwJ3ruwZVdnXuHx8yfEhDnP7bKDXLTpMS2BrdX1YiKHnGr9mfr7V1dACR6obiQ2VM",
  "key19": "4X59Z9uLtbjVHgdMKGJ58prU9psLeGCCWMfStvLRd8fGhufN8xJw1h3WsV6SoP5My3FxS8Y8Uw1DXsqtsYV8QKNs",
  "key20": "NVxmytwvQLPkKiKL1XPpu8Sde9n9UBcpLA7wHQWD1VoDVi27aAWVGqF32E1UmRQewctCtpsQd97zDYpRkXpTsBc",
  "key21": "3REQCqQT3ZzQNdERw6fHSXLPtez3bb6d3B4HtryMEE22QyaWRkZ56yBGV1PmBAFAFqdVHquJ3cPm99WxqMh1eDKt",
  "key22": "253kLvoTQqPcAwECGsWXxWpq1rzkmvpTgJAoQCmRZs9wPe716HuQPUEqdJfhmHSkkDaJ9oZvE1KwXd5QcRuJjbEt",
  "key23": "4p7Y5AuMmUcW1aRvQQLmVfCCY2BV9VwvXnwYjNFmAcXBB8kePaTpL684AZKqnrcKkf4iAgeNFU17RB21c4PdTGpP",
  "key24": "3uw4ay49tsmEHPAADur5bJHrnRw7LD95jTokn6LZHMDpM1aYAeRWUnL856PPo2P24mUE7GZ9R6Q5QHATED2PAepL",
  "key25": "NWmnR4K9NMkKW1NJe9wL4afDtpYKG3USQjPKuxWvvvawCtnsLMbcUaJYXGU6WhApSSjYr6YQhty1mbfDmzKUya1",
  "key26": "2SxyZas46wMyh5BZ4pbp8runf4a7X4jVk5zuduTFFQYjNvH7as9hsVy2JSVMJGaykeLP4snT3r9F7NQb5v8neQ49",
  "key27": "31aYU3Y6riTFaCdPVERtmkjLQUaU2jt52CxkR4N2ndthdo6Gg84HdceZpJMbeyVxVrmYZghpLXzVNKyaVSJEboS6",
  "key28": "5J3hC6sVaKwfeGNixpqdLGL5E8puyYZBcpNGyk9BF1p9S91ZpXfBhTAkRpNnDCuzSjnGceNSmAfH1LbkTwDqceHw",
  "key29": "2wQrrgG9TYygzio2LTJE2jWbHsFgpbqMvkzKZhTFvJSi1vLno3STwcdqW8EdfDCuMMwqFWQ7fUyQ65cqDH4LoSuv",
  "key30": "5f6D5WJ7Xq9LCvL6A2mzLqv96uV9Wvf2BzX1bFotUbwhADkp35LrrB22mq8VnZ1cRtevhBcx37C9wwftkU9GFdbc",
  "key31": "58JuFdCRGc2DKQctGZ73iDMEL7RJjL9KjqM1dXC6sopXUKsH8bU7GhBz5Wc8BF2y85MtmnLqARqufWNjXr9qXEoN",
  "key32": "4wDMfjipaMDfMzanLZhX1y77reCJLMRPRfkmuP5ux3S2B5YoyoFhertNNadnQvzNgd8GUX73dxZB2dRkoAxLrp3Z",
  "key33": "3GibsAq8aLrrKoYMKZDMQ5XZYN4XTP7GwLrsDwNmPPGaKt1Y6GxsZEvXrPpMMWNiAv4ydJRuUf79EpgrGfxxgdYX",
  "key34": "2HhHyJ9xwWDcho4euLvVWQV32qKstexEcRocJkhkXo1JSKyy4A2vi1kSs9RgMxduEZW1wh7X5vQz3Gag1CSFbfWG",
  "key35": "3c2x9r3FJWW54Tbjt9Dvhwd9sR9iAQLeeFJ6BeZFjJ3N9zx6wk5qo3YKAvoxFah1ssggaxdCMwQy63yoPubRDwJq",
  "key36": "5iTP6w3nSUkrSEK3Kotbn6pNYqinuUXrUQDfEtihRohr73Af2SaZm81i7mKQFBJRpemaPChR3ckpYhsXPGEcbamN",
  "key37": "56Mf3ysD5HWJT2FgQ5ESdPCGCAcyaMchiEqXDjF1qkTcqtZMir3mKu6c2eEf5378jjUTTpsW3vHLg252rMdEdiF1",
  "key38": "EZ6b14RMBLpAh5qR7BEo4EBXiNBW5RPmZHRmZvTcq2PMMp2h6QDamiLwYW72iR5yCNnDWoucci8wPSN44316yUo",
  "key39": "UrFXxwtkAoHzTJ1cDPqS5bXUuTKVomqv1MntRcVVHV6j7fNrvnhvNbNuQXF1BH6E93mq3wYya3KB9MdjVPPbxCG",
  "key40": "TRfRGCJa1Rc2dZaGBQCr4Pu3MzjyP4PErL6yrpbhkUZ2XCM15nBWykAZ9fCJepKdT99xARVteijrb1Tv7H3Tt2P"
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
