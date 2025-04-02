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
    "3ct3ArrGqkCKwXEd5HNwV7d5MuV9bQHFWF88aHi2skSaHs94t8YJ5brYgch5nYPYgERX9wWUVj9EjfysK8Gw6zqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55HpBJf7iZ51m3KngUTnVvHZGZRpgCkkLvY567dt29tejjSvbueesEjfKTTNBLG3duBdNt4xxHBB4wgBWzKrpxoe",
  "key1": "57z63BQMPoURnh9JUYHQyYsF7W6aN1nXhtNHrAm68QtSBHjR2KQ7A44bsESXrA3tufzzosxi4o4vJofrB2GQB5n4",
  "key2": "35FGnjT4b4UC1h3DLe8iezTMVFWhZBMPVWvE8vL6LcaVuNhrRS2dChnqYxx4EF9cBtCxHNbUhoYH9EqAQoMqMen1",
  "key3": "678k9wcYqKkuFwnbJcHZUhH5dg3Hy5aJquEX1pfiWNCmox6zawgwTDrKcpqUUdLh7JV7xuxc3qgJVKDHzbqZ9jK5",
  "key4": "4ubMbKBPFP3dAQrPyFuvELx1YjV2bmn5UDXhk78t2i2cpKpGHPL9d4kyRQm1F6QBmzK9JjcCXBzun9bJcBGBek7B",
  "key5": "3hmYvk1Z1tpvQBUvFHiACg3CEZ5c4FvJgNojzkYV2J6qgekzsatQSn2e5hVkN9GMMY4tGA6qDYUKiMsJojSbbKwV",
  "key6": "3JxzVLg5dGYnxAq27exDbgCQvmfAEdoMq1Rv4ckTaCkeGc8SXXSVAmTVsnST9ffAW8Xibm3KBWUdHoig868yRYLP",
  "key7": "3eHFnoU6GGqJTNEuXnmAwWWc9dje8zYaZPYxxPSQoByB4B9E7YjfQ96b79dorhfuj3MnxCTVVp8HQGKBuGm9UzZN",
  "key8": "49bWpXyFGUepi7G9Dec7Zg79iTdmQnV8BWZS4YL1aZ95HDcp2d1EgYqkJqG1zRACYVrsaY2nCewCm3Z8E4cvN1c5",
  "key9": "2cBefkBsoSpkVq2WorLZdt3M2xzWvuft1iADDZ6xyqgbrz8yHCGeY3vx5EJFTxptFh9skSxYsLTKZhf4XG1qnYmd",
  "key10": "3NNcYrdbpmU4GrKnJRdd9osGTHHMMmSuspMMeG79AdabQMu9bBhUbXqE5gTcJ3THai2hAKFB4bDWDbyJPaEYYzNN",
  "key11": "51jDrJs1scVvpDDvaHQKS5fAFxm5qLjxHv1Ho1K3WcS7HWewEJ13RmD4uniLRGAmKwWLgBDPwT2kbamcGR1H7HCh",
  "key12": "3LaSv9sPGH1w6b9cfg1Utn3hbixbG9SZ6R7MSVHJcQQ58hcXLXGLJdyNddxo6r12gh1bu7dwsxADYmyXNYNYThoa",
  "key13": "4vddQ3YVcMCukkWffijdpcy7JpzA7bScZLMwtBNVHfpEedpuKfHFkJqvYxpGZAgmwThd4uGcfrdUAqwfxbGUhrtK",
  "key14": "42qZyEQ1UbHeKHuHRh3irSKLw38hL2bSXk4nE5fxWMgG5eU8CpAVxyYY1DX35iS5Jvarbw3zGnjNnpUjFC3KNk9s",
  "key15": "3AfqsZ2Qcz4XP4hUc8t6LumfkVjWHokroEScrr3sEbKmcgzvWDr3tLzgq6iTKPF1yP5ypcMFkXJicHWRshF9VES8",
  "key16": "54ZzKHzrPaH6QWGJCwTEdPNpHcMQsFhWEbqFuSajW5YiBV3qYQ3jQBCpiBjhir2yH8CFYyJgBfXv83ysqddvjE2m",
  "key17": "Hs3oNs6m1YvTsa2t3j3RuDidMibHiJQcNTt5EYvAoZmV1Zsu6RKwRfvw5FRWWdm5zB33ftwBRpYmM5bTKQ4R6no",
  "key18": "6DV28HUx5b7p57V98FLqM7wcoLcWr4uELwa2iSDeNhys5Ak8pqJrRZb7sVGWCK1gGmEFXk7XEmthS6XSmwdpWE3",
  "key19": "qoZQSBZcuhsWpFvdVS5wx8zGXnSsnhrd4jX43aNmaJTzf6UDjZEbMSf98s4oupE2zLkw2s7KHcFpfQXyV3dQbQX",
  "key20": "AXsFaMH63VH7euE9rtruCMcLXsuPGgwdNEhazXL7KYXhEs6dzTkG4hsVcQyNVfrkB9cyoHDHssxW7gFYEk22pRt",
  "key21": "XiuEi4aZmsp1TGE8Ze2sEwAU8abK8YR5EjV9qzTwks72QYqDyeyZZcTK92HoxgZt4dTzpiFGbX9WQhst5RPJmfK",
  "key22": "5SQBzo9Ns1c2jNTWEysEPowmJLEMBZKhfCudJMK8EkZccmYRx2FLxMJ6m4oHEkvcGJHgsWd9re4JJaiAknBjJHkP",
  "key23": "2b8uoqgPpoM8QfCjSoSuTgxCRuba48JZZtLmApnhCwGyCZwUb4jUJmpxNux3nTAig6cgjkjZEf8JCPwHAe7CLvhk",
  "key24": "2vrptKYyAfJs7sSGNZRJAmS6qMaTJczLEGkgz2jPcE44YdujTnmBeyx17hDBwHxcnSQ8VJS6wLgyPDHYHH6uoLzo",
  "key25": "3w5jEMLAAHb3HbekSWQuqgsU43jhUTdtW2uaUiDzkRcGDedVhe3uyifnL18uzQ3Kmb8ALy89otWwYhcg6m4M1esf",
  "key26": "363N32Cusk6dmvBTf99icXP5WQjwsDy29yxb8q7ZKPaxJZcb5N8rrsDaMWYednkejQQhHqSL8RGUnj2AJZxwTCNL",
  "key27": "2g8zFWdSqwkZ85etmekkQYA8SBijaggVW6oTer1QGneHZJNSEkq2kNUx3rw14TbojN1hTEAkocuNnRr3X9mrmyVd",
  "key28": "5EQnpnrLeNZo857JvFRhQw7FKPUpK6w31GkQTUMo1v2p3wpAxMfcWwSR4M9mkVuwzaTj68fsPwoeLTxbhdRqDdBs",
  "key29": "Ux9g4ygoSkn7MjbXwXJuVEHEsTZeE1xS5ZUoRwDfqhf8WWqeR9HAbW8BjUkSpZRtYZUyGKLJbJJBBSNNXAzBXRK",
  "key30": "33SapSi684JvS92FHRgDQVE43KXNVBNxATMc1CX6zXgNeThmeZVJ97XnzL2S7DnJc98NRT9ZnYFzxeFj9bmWjWYW",
  "key31": "33dj4ALzTVT1PMEshmHoLW7AmpwxHuXZrGBsTTAhQgELuzzpR7GQgGLFq3wt3m1gPrh3G14J6JiMX6Yx3pv3226h",
  "key32": "3MN6SZ4Dgo7q5cB1J2vhdm1AiiiABBjEo4kdzwN3t1EqVTApAFeR7pwju8m5rKsHYyhMuS1SMVuNnm1RMgBznwbp",
  "key33": "3vnz1tn1eepEECG7hB8a9RYqTSAkFs6fPz2LmVddG5h42pZ7jBdQceJjcE4sx5yMb7zpZ2d3PuLv5uCpPrFATED4",
  "key34": "4CSyRrHGruVdZm2wgsN5buAY3yorU3vzmnxGzBjVUMFT2y33C49eXM1RuLGFTJTFubBGxHUHUaEp7FkqLBBZgYU",
  "key35": "3MNaN52zxV9zFnRUQQSDXRGLUn7PajpAff61WDoDnmMALsHNAG7hw95tVcTKw5Sm91M1h88voxpGT1A4MnT4jDHW",
  "key36": "5AdH5RML9L9n1qrDGiRLtZJ5gN8tk5PFJaFRAifT9ThGm95qBcvEpadtdRWaXZPby58EgNR3tndwoPn8gdArM5BG",
  "key37": "3BPwL2Ca7NeTmc3EiCM7duzWzGVQJi7Dsryedy6wZTk2nMZaB537cBkrewmHKRpasxUGHzop3e8T7yLk9hju6qms",
  "key38": "yfbFghxmDajuUizEiyMPpZx1TF7G1fe1SU5V9A6hL7sMAmFzsLLwt518KJMt4oHBBq7xLrazBL2uRyFuwiawbwU",
  "key39": "2KFei3gvZZtBXgs32U3adaHxfXLMi24kuFa8XA5DbruYcsC5oF7TguisKea95TTj2zWkTcTaT8eWxjNqJzAf64Ym",
  "key40": "gT27AqnBjnYLYo4qCpig7vwEgZMmyfSMAaB8XKpiKiU1agM7BoVc8FLTjAyXGd6eC5eM6m89omx3MpCGbe1JShF",
  "key41": "3diYxvRQ28XPEPS33CfQgdXPb3YERLsNepEYje5K5Vr1M27qCtFiG917tPHhse3oU3cHkUFwjamGuaLrfCHBbftZ",
  "key42": "4JVzY6CJm1VEDA5vkgWokoMHehBxExEksQgwPwBojvCkGVUZxvEKxRHk2d8Jm5rr2JUxqtdLuz8YDicYf8weWjEP"
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
