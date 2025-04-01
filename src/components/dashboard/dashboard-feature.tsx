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
    "4SQeXwVQhXE52dfbKSpuh6BQtYogBuMWWuhLj23CVXyYXkrHeGA9pZYj8HfzvPP6PTZuJtksFjMbVqdnvp5Lw3sV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D2LV6giv1YCayvrYMWHs7mLCW4Z4T96jEbihDs2XZ5VUtaucN7tfuKaJJZCFZu8wtAcCuGFHSA4gBWXb7pE6tty",
  "key1": "5P8kWmmCyfBdeMcebApNpSYgYsLbmzG8HD6UUoPC7SYjJpMnFutjUoyzQbrmmqq1VMaMgqkMGTJAaJibQNsftWLx",
  "key2": "5H974pFNLnw8JUenU2YSBweiryNSUmajEF7jWDyHjKxuNxDqMS3So1zYaUnRcxnShXxpgzn3ooixnB96rRinTtqb",
  "key3": "4xhyRP847ZefgqtvR4Mka3fUm3MgSiHWQed9kNqNHzLDv9xLPeeYPUXqvGBnAyv9VWgfh2EpSs7tDbgBeWx1Na7u",
  "key4": "3Q7J4RXofTaN3aeuZic3r1245b54qtWo5ZvZnBxWNNJeLnmeqtA7aJjeHXzRRwooEtm5RG4PTmJyz8TK8kJSLC35",
  "key5": "4CAkGcFe2ywzY9m2vShRfSjJkozGx85e161Dt1wfru69nVUY4vDJxBvH3PbSZJpb3C29xH6UZo4VkPgxQgDnn56Y",
  "key6": "3QpuFKijXnemRP9sY9dEoVGTmkbKshBbVXRrToSRm1dC6tmBdkRn92k7HrYEi2GSzvPeUE3MGz9esaDkdBsBdkRE",
  "key7": "y6fY7vgZ6jnXgoZMwzR96S1AKyhHR9nLmCTrNJf2QsJLo8sYLn1bo3BxMHno8RExwDMA3Zb9oPTzDUWGXnEFANL",
  "key8": "4RndyMTYN2GxMPxGhN3SfRunBk3ZZc8E6wM4ewLGtXcFExirS78ckxvxNVTH69nitSo4RGeJs2AnonVQUf3qCMKv",
  "key9": "DeDw2zstkP3kqNGX81JYfTW6jmBmmX5ML7XDFX5xmefroEyfNeYXWNC9VfG3cTZ2Jg83LLZ7LrGHN5tHyz3MdBn",
  "key10": "2zTkA27zwwdCpp6n4WX9PzFWau18PKfrUge5pYxar4P6UjxTHtfg3TcaEko5jRWawsqFeA9yz4PChERPQ6ZEJP9H",
  "key11": "27ZxxooYDZYMWMsQJNYpjDmHVmYnqcm2vZBLc78AeazhFSCuN8PyjcdtzwtwRHCukMJW5A8jgAL2xjAMU2EZkCim",
  "key12": "67NjQSjhateyKaSxsNiARVosixJSBN2JgbAeGJEVvM65D4H6KxtRwBUHixoztYPvkgBJdyEdpjL22pNqcv1vgH9c",
  "key13": "2s5sRg117ChWiU2cdXAvh9xzRjK49jcGaxEoFJwEeP5LkN3a5Mcm9s2zmFiWd5HtMrJXuSifEnfSphJ8Nh2ys53U",
  "key14": "2WdKFMVktTALJNEwcijyUuMgDR1pDcSvKkhyr6fTjU7oER16aVK598hSNU8ciKqc384jAr97pih5Pw1APcjszk5C",
  "key15": "5S19j3LFjyHbZR72GJGYkBqMfAGVutN37kMHAnwQBz6SG4seQzEawSAuK2tqepZ8EyqEbYWPEL7q3sMeWtvjGrdA",
  "key16": "2sGpfV6pM24wrUp9hDTKDdvE5MBRHPLiM6eDnQ8T4Cb2T4jFVaFkz2py3LG4ATZLk5zZ1w9ykNi4Qp8g8XcLaqW2",
  "key17": "4mRw7ipFdf1f1YNMxoxPhxtDSHN8UrADUmhXR6PVfGoLDa7rd87B4XEmyXWmPY6z2j2XUe4MiR3cMpyJddWSLXQ",
  "key18": "3Na4wnPufMEG2MHtAcMnEBcXinWL52evYEaNXxZbfo4H8KaE4ahdYxhXSt7kcVdvurUVhDN3Ui9FaZrFrFqJgBrv",
  "key19": "5Vi2q3iBev9fG7VRGkPLEDHzPAsADtUFpaVpjMLrVkiuCQ4zEHXFz7tBpRhLiYLLNi8WQgYsWGrJqGgwt1hNGX49",
  "key20": "4Jgf8YtXpKF6kh5Zg8UdBpM8eGGP1mTykWtiP3Ew7AXuvtpVDcoGk9eN4GJuf3FXS19ShCs8iXNrpn3AtFTRCnyT",
  "key21": "53DPJcghp2BwHzaQdUwXuS6agEBur6CqPvM8nBZW9NTxAa53wqXroMMTPzwAkmPf7xTVPH26o5XJVy5qijPP4nGj",
  "key22": "4EMuktKaf1Y7revLxai9o1Z5TPiZMc74D4H4Kc91NqbtCyB4aSpCJMb87NnfmayyEZfjP7Ajjqs4PBwjXozseoat",
  "key23": "267oQ7TkXzcG8Ax97KNRU9ekt9uGqDaxb6KjaGrQ43rs2zgt5b2J8ZwFheS2DT1RGjrFQsoC5T6gT6C98te4Pf9u",
  "key24": "66coxpQxoJC1h2nt6iT6qSwXU3iHkKr1wfJFEhDx7BGuhs34cqVv225Nd8qvb1wCdYneBGjmVRAQiF9AosB6YyHL",
  "key25": "2qqPi9vo8GYQKJQ9XLCfv6voE2jHfHGVquZxFZNJTBn7rVdHPymnVJquiEivSQjQN9ec8dXntCMgQ7N8ETSXaekd",
  "key26": "XP6r6Q65NHbzyMPgUnPEJkEwQ29hZZkaV6HrG5YG8v8wfa8wovyqkpSAkvdykUewDcie5uXdNED2upsUuVZacEG",
  "key27": "3h9d3Ukt6Uc5KqhXzbsJJKFmduAitLuwHm8ZtE3TszLq5SxUu6xCLNd7HEPzfWBEZAXhzAYHraMFDRmZNfM3WU9M",
  "key28": "3ppHTFsUYJ6TA1KQumj2TukenHkBPTJWYCTY2XwvEG1HzNskEpHTyLit6Q5uHXQmaAemMu9BMVR55dSoGMzc5Wpn",
  "key29": "fvB9B5vJS5fze16qHtQJxXNM3hCcL9dmxD1UcE5rGMCYd3PUwYv5WXZh7eSaVWgaPfm5fiXx9F4PiYtaeajW65H",
  "key30": "2E5PG1SKqh3jp9e5xWUEeWkDo8KNyfTxna9VbcPYksDixnyXKecjvVoRWdwqTgaYcjYwVgbzJNboEikhDVdN8adj",
  "key31": "eboJWZuv5YGqzwz8ypVze8ERkbEZVCPza58ZzEL3gpy3mWcsp7AbuYkuiGLzDXPFvokLouuHZLPdDYQTEqEzsPJ",
  "key32": "5GokqMZ9UfF4q2miMjRQBhBwoBW9UjwsLxPFcSg3FZDLZvqToHz7t1w1QXBiaAZv7xAT66sodf3gvuzd4FFAEZjN",
  "key33": "4jT63aLrRZXtcVweyY4X2YuRPc828hwG4Ft6sxQCAdLjhZUGkXVNKgXo9f6efMLF7CxBdygjdvx4MeiwH53k32oG",
  "key34": "2kGuFfco2KDropogrM9bm17hWynLrWJpbbn9bTfrW8LZnG4HpS88f8hW9QD66T7SDqi9ctpPeTCg629Ay16gNefN",
  "key35": "5vosEboU7GFZi6QL2dBiEaVQ3UCDVMHPc2buwKzz9URCncyHqbCdY4cLm8d8wr91saDUTMb38DzYNu86YDc3wqnW",
  "key36": "xELDEnfe6CmECK98P2Mjj1Td481VVkpzwY78XrEWcDd6v9gxyLQdDqE1ZMEEjyAgmpTJ1eGCPiL89i1nmmRGJdK",
  "key37": "5KTiCWWAejS711UWxz9xNemZACbcsFpQXF6Nywv7vbZiRsVrizmKNpEynBmfnLreEUTyDZywTprDPZy7QeXa54ws",
  "key38": "5x89eFmy4K4f5UsxJEGhiM6kaVZZ6Cgr5KVkrBz9cQ627cMS8H5wEbT3ho9iL4fShWTH9uZ7oX1R8cjq6T2o5EY3",
  "key39": "29G4V2wz7KNowB7tKVajvSFJvbhEmrH6wpxqt8TLXstGSqSE8HLaK9Fx3KQkLu62MHfFHXm9HcrQocrxJfaQqNt5",
  "key40": "3zzZfQzzwdrTLFvH9RpMxvcnq4L8iVPNRcRhpuMJME33DU7maYQ3rCGDhzqhj6zfDKQ7VF6iKHHfgqEv2Xxo63ES",
  "key41": "HAUN8a2X6BH8cdhtRNyUEqq9HQ2S8s2AY2Sogfrd8i6oNmZXBuHuNa71fXRJNEH7YY1LjVK2beZTqG8sfoih8C4",
  "key42": "5QEDwd1R8NZqHLV8hKR1Wr3VYqo6UNLx3uUteziSPDfY1VJ3dhA3oSRM3p7cecUHisLbkqqzCjUeSZccmxJjrxU4"
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
