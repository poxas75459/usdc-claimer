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
    "KMARKgVaf6cURJkYPM7jkFDDm3nRC1tJbEib5vhSZwNxALjchufbAknfpSiozcH3BZab1xFb9UtB6zMmEgVR286"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fktJoFhEXAUxE8tSavkMrqT2aRYEyU5GJ2N5jibD93J6bYGUGYu98ppoTL9xs7KYrssibWbpHKp3ZXhYquCVCa5",
  "key1": "4YdiGswY7jZmtzbhYRsZYumtsNJaS7uxp8GiUNLEMK1XNdpHADKWagjYzkV3T5CLKPjhczVUFyQLb4WtPMtDKELB",
  "key2": "2Biy8oyjSQ1qv2QDUfQ8tU2hK5URuwLxAuBBMBEhfNrdV3rDo54zMfSEVJGMnXE7tNoQK9mr7rqtqeU1vteKkDf3",
  "key3": "3kPwFAogX7kzos9PC9UjRZpZrD57fD4MXSvg3KsoB7CtQkjjGRURtskpgB4R8CNzAsiNtzmFXgxF8dgR9m3VU5wQ",
  "key4": "mthUoCN9RSLnJgBSD9wRSJSCbs9TbU6cRzc4nbEpjwwsce6zB5GjMaZajFhGcq6gWoktbJ9RM7vcEZUCDRTszV8",
  "key5": "377GPR1KHEgw1CRvRgaxiUjE8u3aazHhCwweq4RNGZszmSTWotySdQSeA2S2bf5QLSVKZRWcJLTZKU1RBBVe2pjB",
  "key6": "432WDPJBNfVrgWhFPPw7nTxvvFQS4NSpdeJq3DhNW6dsjAaw18DB7FvzmraZrHesvFXp2Nxu43ZxDVhTKDQpdwHx",
  "key7": "24AaNvQRRcF1BCnZCRE6Bc5X5h4aLdXVjFTUEwyPNRobjNTEL2KUuLLxxqmMUizLE8EcWXpVVDAZq263d7nfbp5b",
  "key8": "4tG9rDuWWthufb9cs6uDPmAjmmoWT4m3fvsFhz3PoCSDxRni8Y6G6wgVxKiLdySzDuzXrB1wm2zyRfK68djNQ7eU",
  "key9": "6376nD4JjmZBnuhLBzLVZGeDW3HfPxq4szuw8fY6paBV2TcN9dLii1A2XP4fxvcSacvcoucw66k3RmiiiqBf3bBq",
  "key10": "4sHnHmUJpUJYAKGBfzhxShkkjMwHFvmjNMcj7W6UFdzaK5vhqYKrfFVhXqtphrAS6cnPCWh13PTDrCdeHw1Tr9BC",
  "key11": "3t2yUhtXrLd15UGXijYGy4cu4Lj4XqskLRnTC86KvzpUvNQvdw4p2tvgWz6Rq2QixUxbjTeuQPtQs18tc6U8cDtV",
  "key12": "4TBgJYWHxmhxSMmmGd9GgreyvpmFhgdKmAvCzdZGpvWygpn4Q1iW64kRfxAQbeV7WUBjfngocAEMfCL6TD39WMy1",
  "key13": "5oFP79ysUFgHUjp1dK6LF1nV9hcJKUVEyko8BgoNEYknaY2MK5yrUhE1WzppX35hCp2pXMg2tiGi2eABXxtdbsZb",
  "key14": "3hdGne1yazdCnJt8Jhy13BJWAdZ2kGggLXT5UsRa7ZiQr5yTSSa7iWSEZZ9PEow7ZEWXSzUXwCscAshguam6yun2",
  "key15": "66zRSn7PadpA5E9JTF8qVTw5Q5Mox8MqPc2pfipyyNh8o4YsDUfhW6xzzvEC7FzFda7LLUHjqUuqmD48YikuRCNQ",
  "key16": "5RazKSChg11hdMxrZvDf9cu8iSm9N6Y2qDPEj2ifnJaJGh8B6XUC8HWdzmhM7NvqJP9upYVq7ToHHqPyov5SGPrj",
  "key17": "3Mcsh3FMqTYji6J62NQM72AdFxHDUmwXgUQShGJk73818WFZD358FwVwZubauq5rXzRtSPuennDHKWeuMfDrEGp3",
  "key18": "25Q7LZuU2XpiSSfUBDzCySKBnrfZ4LjrwqUXxZhVi28ZizJU2YzoybMdC17TaL3SK73LtSRUmYVGrxFD5CezgmLc",
  "key19": "5gDUtBksno4zT9kjAocvwcTdSFsp77s6K326VhBBAgtEQSqhmojet7ohKeA4dzkYUfFph5rmeP1iEx5vVcRwxNqm",
  "key20": "3Xx4zjdXdvdorZbasVQYAJMFMNvMaezWgaf8CXWnydQCiVgs2zvMQujv6Qxed3ZGp61Uhbc48v9feTZqknNCPfDM",
  "key21": "59kFM1GzqRfKcNrs3iLxSRm8q59soWtAgePx9BGzVYN76hfY7JsRY5nuiNZeZkhbvZ5vWLGJAMEuhW6cNJY3Yzdc",
  "key22": "4z9CG16QQ1ZYEtJafci4XybK28tHs9tNP1dwr1XFMTZ1xukir7bNAwrQg9783rowP3KLmwjowCXESG5PKiHxfKxT",
  "key23": "4GKFPH17RSktq5DthGY2Axoes8mD6T2cSgfLg1s1drwCTNkBwibMwxTUwqZs2dhX1qLC9rWt1AtmcnXYpFFsxadJ",
  "key24": "3vKMsta2pFh9atLXXLqqpxqNdQK9onzZszrgWV7EcmH2pc8QjkTF1izLCY24nQu3KPFGaBA89NxxFRjbQJ9QxVNa",
  "key25": "2b2zWygQRSUq4fV8daprYqAvQQqejcUVN5L4kRPnttikX5dg89zzqwthqHTZmp39E862nwPFkZuUmCarrn389QFL",
  "key26": "4vqNnYDfabTns2A8qhXmAv5ccY3Fdz8eMsCwooVZKkGtyU61MXJnpbYz8s34XPdRuGvZDPR72r6hdGJMtk1jffGE",
  "key27": "QdFtzmHHZsNWav3pmpp2TFptj8bLuemzJw6FzzfaWEKng6C73tQS5j74XdQebLrimuabYi85nSNSbDL7tGgAhu3",
  "key28": "4hLM5xNmnafKZvmEVYAsyWcB3hsB4nzRtAB1U5zbBtR5enYeuJvpogqYVg9LhwRfi7m62pY8RqDW8hQXyDxxb3EH",
  "key29": "3JhdSnqnjDjkfFATd5M4MjjzocvG5WcCpoGHuCjaE57SqeKZLiq5Go6uAjqbpsKHGaoiy3bgSoRKYMziibGENnKQ",
  "key30": "4P4YBWhAN7BHvBwQmBo4Cqg856UjACNVssekfM7BymbyyeL8N5gVaFr6iYhrhuCQUnZhBcyh9F56o8gqmMgW1kVy",
  "key31": "1ooe8sNWyM839MGzBc6cZPF8dTeKu5cfhsSvBBvuZG7ZiuSCVC7nVQeF5jpeemXWanvDoCmnG7LDPQxaT188RFA",
  "key32": "2idBS1K4WHmBZfC955Z2rbzSVr3J2o3yEBm8gUwDiGeGcim4cznqUfedobHgV3hM3fLCPLhgmt7qoPsvAahCgrQK",
  "key33": "FEEoW59BmzwPAcBXSg8TmPh4XoeY7u3u9V1VNxQxmLDonqcfJfR8WzVRJmsZKgkMk54sgA4Sk39kNcBcrc4Va52",
  "key34": "5gnZJTGXYf9jJZBFMqP6ykATQUCEM7p44u9qaVbzBnooxiVNYPbT3z47RUp7F52DU4VQvWwPbfan7SvYZJ5rgbRF",
  "key35": "G6u4myJkKsK2zENWL8ZyBJY73PhnmXy9CQWWbvmHx2AWv1gmV1shZGPriRkJsjr1QqmXN6eG95UfaxqvkpFbvyF",
  "key36": "3rzVyKHhUYXNrBNWsmA6V16NwYytiELdyPxGsKfPEPnYoXdZ4AoLDdDaCnhhdB3XR9tGwR4NfvwmpGT2fL3XjUDo",
  "key37": "oDYwBMGzjV1rfC6ccZwRaQdQPHuQdPS51nyzTT52GrdWMbjnm1s1PkXwfLSaruBM5AygntrW76rpFCQtgNfFnBX",
  "key38": "3xK3gkuTxk5cyLzudRZu15A5UwHKUbjFyLwg16H9tHkJDqKANT6Eg7PQv1zG9KUsom7NByjLwg9XJT4ZwrbjzHK3",
  "key39": "3UUwpLHLStdD6KbNjZzycWn318uYJV9eeESfG1uwd1ySJ6sAr6ZRPGXRJ2VKhH1ZDH4jk1ULEvGYFBF94efg8Rcx",
  "key40": "5YH5T8Ni9h37YhMbnc2tYUEdwutuzNJKURF9LPt69adap2HkhS7JnqxLW4osfuSBCyjT449gqYGYY4viQu9f6fo3",
  "key41": "5vGxAeX3aU9mD6mmytDu5aDHMPfGiz6kaxaDeDQM7MQnRdpxYmBUstR7hsvuDWbzEETdepHPhzj5tpbAG98Av2Nd",
  "key42": "25MSaDhCaDpPVw4HZLXdykAoMjn1db1XyT9yCUuzZEWGEe8UCmDWphjcTmbYgFwAWWnHNmueEBkmre7NRXWS1fS1",
  "key43": "2Q9bfqvzP1StKxsS6NWrtDoBnQB1ckGFvF82S3kJce2bRt2UytTj6LN5UaeUqoWk2s4EHaHxBc3XB4JsATrYtXNe",
  "key44": "3QrQG3nSZYQq3qiKVcQoCASCnYKbq6TeUPySoDkvK9Zev2kuPmsSWeVYiGPLXv2p5WEidwo5vT9K69tcQp3FYqoc",
  "key45": "TPzfuegyyM5boHShYXPejSQ6HHY6deRWtrcmASZH9bDzJ44LEfHh4ZmYXGXbgG1QyG73eg43EAWfzgBr2g34znf"
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
