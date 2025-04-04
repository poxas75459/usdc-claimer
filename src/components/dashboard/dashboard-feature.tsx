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
    "oLQXPfoV38PK2HKbaNhicHBNajFZzN6kCnNn26Wm8rA8Wy4pQEUfGcFTWZ7MfuqqeDa6PRN2sbCUJKhKdFyVcAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YN2p4axPGb8AbK1B5EEsCMqwsyB5HLiooi4jjyf1wdDQ4gLHZ4DfrDaxKLQLfm82Lvz3WiqP27TH5LG95NudvK6",
  "key1": "29K38ARyj67qAxiQnkyRfkBQfwynns7QRWKz6ERLST9fSeA6ByEYRZUBzy9pg17Fb7UX4tAR92JYzfWX757W6Mgh",
  "key2": "4ddy2BreWzSPdog6fQsAwFmoJtmMgxqnQwqLkad5QibafxxKELtewDYrmLunsytBP7CVAb4UTRrY5NvkzR5CroxW",
  "key3": "54RX1CZWWJohE9Vr7j3NYkEuDQLAdJjvTM8ko1vZJLLb3yxvyDUuJ1c3EEdkQ3PFM3QSFQNE1iU7vLBFvfTsfL7i",
  "key4": "o8dj9AYQdefiNwDrFYbvkLvRYfp29HhBPhykAzLnPkbeJUJe6JK8e4tVXRqewCbvZqouHj5sKoHUZa9JkMpoUaQ",
  "key5": "5sC6oaTSk6Ex4bNvcfHWeoCosfBakvGoXRipVodd38x2F23Ej8kerXdptKbjpQJXYBMGDJTeVW86S7p1HJPYgKE8",
  "key6": "3m4TFQnKMbsCUsrN897VSCbMG1eGS3jTcEmzZowSkdgCq717Bp5DNpDgrFFDTe1WbcdcCznmoh94Eq5pVUorV1A7",
  "key7": "5p7upWEZJkkrbZQwsedsvobjkJ3KoJY4nWhGxi6GwwWLqKUfuK3VDmAfhoQNJsehF5BZtKmmzpV72eyAjxhE79dZ",
  "key8": "3VNHjDqjfmVrPhyDRo9cAXMoAUGsqwjAcrqaZzB1Ep5Dgbe46cFLKW1nWrmyLduJxvPFkq8DPma3kCuNtWeruvVt",
  "key9": "3v1JoaPS9dWg3nHodwjcpbpCGydquLE4z67wtqtuu3GFEaHXriTmc5dPABxhCzXYwi2gErj729pp1PFL4aFbRQNU",
  "key10": "8kbWJcyxGLvfvQ4TCD5vboTXZvAZoC5k1vRDiyarofqXKvvJbo3KfqHtepoDBHoPUcXZCn32MiMxsdHKzVcNrKj",
  "key11": "4bqidSspzbfmcXyZqFTgEsJBkPGs1LrtyVVYtXH2CeYvSXwJVy1WW9h7fxoQ6Cherds7GPqeigMZFdVooiGpkS4C",
  "key12": "1gZgaYcKKDvcW3FdHcW6GjpVdfYuQn5W7kzcDJiVmjCKqvpQKnR9dT284y8n5ZQ7FWqG7ZZQrPKEmwPggmV5TbJ",
  "key13": "2Gz9UbR5tTmJQEBtDqeYW4Bh4xU7EgVZ1f68qRrTbaGs3iTgn5H1tnuM2RUf7ogfaCBc5cYmqkt4EtMYDtcapxSF",
  "key14": "4exzz12N8tUjy8omhDviD1vouV1973RJotHze1MWp4ikB9rrVFWJfuhNDGTbGBmkVy9wXZbUoqZPWg2dnE2zvYoZ",
  "key15": "3mv7ioL4tyLwaPFhWSA2v6e8VxnDuKWDA5F23Uv49ByxzUnxBg9dVXQqHN3Efi9jb1mQwfd2rSD68geETzUA3mDY",
  "key16": "5SBCjxcU3cfuuyApNx1sQCUbyJq2jCw7T1AWXuFEckaA6ctnJBqZbMPshvfRGjxAaoNkmkuqb3385VGEXiGGpsLs",
  "key17": "2MDpBE67hanqikL1MMjR5oymfxMzeWQiUfEX3tuGGPGYpFLj42z7Hu8RUVQbStmdc3P7TbYWskLDRzUxELm538Ei",
  "key18": "56EwJzHpbcaWXeMsRg6HqPLQWT3hQB6Z5Gt5wZhJBCMDps1hFEs3yVkntrCcBaNMvmvLUSHCG6Fz8ExATv3sV3Sj",
  "key19": "UY74Jfp2kicXx56mvotU2Mk1hJAphDjB1kiDtbY2EHq9mjJs1bejtkhbd9LRBjuuqcNFQadnVfavCXesPEbMNhE",
  "key20": "4UXFkv2sV714HDgbjaRCzqifyog31qbXQKmnQSwMXY16zWsKuj4sQMnMnyTv8bDSE6ZcSx19JQ8NunyX6bL4HTqZ",
  "key21": "5wSSzHHPWJRNSgizJrpH8WXZxG7y3vqjqWtdyBPCTcYHFWq4q96eTAm16PVjxLDSaqTt7g99cW1ohgjmTzpeTnu",
  "key22": "33VwQaPKGD5nHyrg5oaqawF2WDrwUQWEgkBa6UUedWwjs8TsjMf1mdC6WCi82tqCVfnQ9LmEgmuGjwcNzpHYbtoH",
  "key23": "2qz6Q3iKZ5Np9eqghErRTb4NY1fuDUBrY7bGmZ3nmNjXY56gP5fbaHscgiCc2UAr8ocgikMtrHMj8jMN6xYt3VZ6",
  "key24": "iesrm4GkCY4Ra8vVf7Uv4Hc3Nz4puz32KffMf9CANGm69srKVSHdcwXdc2cDUqmdv1X7p2EkAR3Nkq1Btq9hRUf",
  "key25": "2ZjjDwnKLzFK2NGg35z3n5T9T4zq6XB8kkdG2RAnfGJYhBuMD2RB1ukP4mUFBQ2A9SSCtFgEijEaaqMJMqbH4YeD",
  "key26": "2fwRS6DXZKc2nq4vhfZ7R4kFnKF8Ec52meLE2QbRHdYgup7YbWLjybku53S4oZ79dYZTEZ44pCjLSTSjc9Cj5zVi",
  "key27": "34XDPgC2qJQX2mvCjdzfPQpNUoKF7ewTvV1Cn7vvsk8q3sjYkGEVajZMaFuHJ6sTot3nJfJAxfc343AdjL3R2zyc",
  "key28": "pHu7s91H3KaKZBUdT4nM72ZfQKNCpRhFVGuBVMFYtD9BiTnMDA6ztKjqdNTgNmx4UyckUmGGJJpCFrfXFLodi15",
  "key29": "5AjDxAsyqBemHtJzSckVCc4aq2EXfg1TwJhm9EgA8eAMC4mDAwPLL9nKa6t5RQuwZb8ao5K1EpcqogwAMdRWr3pv",
  "key30": "4JMpCTpJM4SUvT6TrGVSTeHEL21RA16Jvv1ywACgZRhopbmLrsj1QSwG9h2xH9U4TRjo4FQdMVu8o3vN6QBr6VYq",
  "key31": "3UyvdnAFW71JTuAAhZfa98vGXpyECUSZSSgoFPYTRGeGDiR6U9WuJoN73y2yo7aXCxpY8qHc6vkEHUATpJbjGHaE",
  "key32": "4yGSiHiXZ87Zd9g5XVn8EvHRnST8Mbu7xX2yLmgpsQXfA6WRCSwFzjYmwVhonvdX1Ezwe2LUZ3LYpEonMaMhZH96",
  "key33": "4So6Q9tkToXG6NgYFtyYQQkJWyHJyPGFLYudNKfa3ch9Vuj5LYRnifbcpWk5YFBrEohdMe9Scp8kkMwnp7vYULpg",
  "key34": "3thgWjJWR8XEN82WYXa6DaGAiKrSUDR4Z79AXhKRHn6zfcfYJN2NFzF3q8wmChqghuws2Me7uSQNk6xG5EtphFLx",
  "key35": "sysWwvm9336fMFfY7hbY583pc4gKHpEzdkBvVjn9ULHjj5dGuLFEJPVsPLmFXfF25WTdat6UuXzpUSdDpdtA2ya",
  "key36": "vNXBaU3QNErHtKqc5SD9TqYYShAzo9SXMLQeNjDE8NFvjwvCGbMSBNkw73New6XXuYN4AR439GsChb5Fr9qUt1H",
  "key37": "3x424YgoYJoX6goMuCPSonpqd1RFxdb9Qa6gfUASweot1qJPyUR6upmr4KDWRHzWiBPqjJNGSwSxuPtG3qGCoa44",
  "key38": "31kFy4qZ3mHYkqtqHAw7gZeeLB5yrucVxsYDSTBbDbmYpXog3Yfaz9aD9DnU1ZsHSs85X7EiAVNPx84CLiyBhRgF",
  "key39": "2JU7DUX1R36LLpyNmyJSbsENRKLdL6E7s872UKoFBVnQFVuHGhKnrCB2zxrJjuPB3Lwq64muqUuGEn3HANW5DZkk",
  "key40": "67MmUM8mfWGyXXCyHyR92JoNirxvWPvcotiHyUC3qMHn9DsTXr6qSVtx9fdNq5zMLZKAs2BmM9bpL8FuLTrERRcZ",
  "key41": "38LgCNUpLmrgYMkakzDHWD4HM1wSVhaLGQNEqJE27UiKkaPeK96pjEyj4BaH7nZdXkqvfNtPpzcPmexAqaRiKmbu",
  "key42": "4B6A5XC8yHP3Te1V3gRZw6Zu4P7LEraEPGKy6nsXZzrnM9JKYPVibouQEsucQgVJ5iLFP6GV8KbZJvBra2ZFYup4",
  "key43": "2Lp5VdkCuxrRAKQfhf2bvzMw6ZkQi3F12cDj8NtJ8eVnK8QQeN1Ap2WS2jJjjqf8BQ37QixA37Dn41fbKHUXGVej",
  "key44": "2r3oXaXDrv6wTpzvFHJTaacEhKnaCNkV2c3dgoN8niynxC7oScggByf5ZmppFWXp7oVgZGFrqes7DPNiArTHvC9b",
  "key45": "2NaiWPH4LazR5zxHUQgLVNiuJaydsyrPxig48KC4FSayG1Ets1XEdK7b6EU3H9w19WphquewK8zN73k3ii4nNxy6",
  "key46": "5G8YXToYpLGCd7aQxZZnopB6JL8juSBeQPGJ42QXyiMrUoa1dPU6JVKoYfsLTjUxAMXZ2Bk3AqXUQ47UzSVnnsjt",
  "key47": "5WsSwM3qZ86igD99MKqt8ii3mcwYqzd3uWMmhSs5ADr8SyB5af53r5R6sUKGoLUhWgBVsz5xNpNG6kQFoed5KoTx",
  "key48": "3SMC77vdhETnBydrm8UQB37TJRaATGcgdqpwjeUqY6hkkqXuMWZxcQA1wStrJkgq73GG75DXge8aqTP8aBjJFsGd",
  "key49": "2mrQfVHrGkPtqpv38C58AXtc7bD5CnD5uQjMaufDED4fWKWxsXURi8Wt1YWhZNzt2ShZpoMyXSK5gv3MehuQjj17"
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
