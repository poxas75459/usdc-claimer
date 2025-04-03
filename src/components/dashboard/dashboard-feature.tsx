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
    "5Q4RgDJaEMTPRdixuGyd8SSTDBQA5wSXcPbV94B4hu29RyctMrNSiZyiEeLys9SUCB3qkTHtKNmPdcxYMtSGhcgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38gNV7quRTN71g1kczZWcwGXFx89yiEwvQZo5nW3R6TzbDGf7YQApb6pvz3hN4hV1VueUw6uRcBdBJxerBKjYBqg",
  "key1": "58DaRZDpmHd2veuu1tw8m1mv46xdgtx1XHWGKCe2suYwDAtomUkwkx8wH1J9cKNpWxm3w3yc5r9BqHyrLFZmp4sB",
  "key2": "hyeg1qvSo3fqmyqcn5HaeoFxec9veFCJj3GejTbY1GAqG7VP3CTj4ENndbQhXeFYG4JfeScASsaHFdUzox8kxGT",
  "key3": "46YR11RFmiwyH1CqbLps7RxPSnAEm3epranuzZNgLwN383L4faxuESwt1AXpjscY6QFaHdyH4SBevDqrgjSEA4x1",
  "key4": "5AqPfgL3zhMFc3A5E7XhqkFHbozKmhTLYgYR7AgyHXPUkrB8fWdtWdFEH8rKfJ9c3LrfxsDh4De4TMf9qzvdSk6y",
  "key5": "5rWBar7WZybBnRdfLhZ2hVSMvBWRKpWtzb7KpFBGUEgjXyJf4xMWdZKSMJTQVj3d1L2KAD9UYCPzXY5uYq5RfydK",
  "key6": "58yFMz6gP7jmjrWxSQpNvLD8jiZLtPMZUq7aTijKb9WCWFQW9unvhP8bmUNeZyDLKqpDoWoNThYv84zEL3Bx4Fw1",
  "key7": "yV1PHcAkA2X3gpEAKSMAfQJ3wt3pF7cTANU6QTuhoV2AEdKRMa7cv3uqL6jUk7wD8TtamV5zgDnwx9rbCQH5Knt",
  "key8": "iPH81SuWoM86aZX5HKnvffgcrEmP4wNtbGcTx8V8YfMoSFMQ1usC3ci9grMMPhEgjDkuX4jdGEQVAvZoDqtxgTG",
  "key9": "5m8QJd4ytR6BN4m3oanQMvLQS312pkToxpLXyWvAN74LdhXW6HimDWgzH1bGambcvW1GQu7d8spio6aSRdjwEWpb",
  "key10": "24LQUhwGnuDbB8U3AZuEf95aG7skffG3491rfPW8osR3853VJyTtiGpoXK4f197xpnq5JrMQDAi5opm1Q7jxyZXU",
  "key11": "RBDTvnAX4uNKKhkXFfYcwgKQ1umtpcsMS4ndTWc9QakQc8moXUHUeiZRfTYYbB5QxTS8KNd7dP9owEsWxZ6VkU5",
  "key12": "4VzTahHyDrvwVWWGUdRaDaGbTw7Yh6M7hmi31bEsrrqBzAxMrSPJj3WEGQCqzvrVV4t9GoeNBHG1bdCzJifCj527",
  "key13": "5RqaoovXVSnGwbjMMqtpgEQo2rQZZmWoLUbfRxB3ghVhrkpHc776TWGvieRjeE1yaRtXuPcsBu8x51t27egpPJJY",
  "key14": "2rHsRHngUaAVcRbUBndnRh6xNC2xJzaJN9aeteJ4ph2UxxykjGLgxEDNnNBfBGnXrFTKH3skUpU6C4huQy4NSTw7",
  "key15": "2gYFULkRgzmXv7Vx7HAVQMkGDqoQNJ8H8761hxrYH7cPDDx8YjNGKCk1wX3VG4B84PBxmMhjfeRKBBXD73PoEpCZ",
  "key16": "nf4NCzqxESqNAzfiKH2fDdxRQgc9id8byuSjt9nEYK72K1VSCpF5NSnsPw4ofkMfFEHAc2PwtXqgkUn1NRtjU3P",
  "key17": "4ttX6Ty9ktmSR6JD2JVgv4CEZ1SwG9aUSJ8MDhKdFFMmuF2V8mTxUZYw1Q7A88PicztqcWoAXhvQcvy51mJwt9ou",
  "key18": "5rawEsfUdxafFC9ow2XTAMV4VnD2nyfwsVtr88WMxDYRNN3pZPvp91E37GmsRDT59Burq1HD8huVfSfjnrr4TUJy",
  "key19": "2UGTCjTuddqqBG2w4DZMC4LNTr5eG69ogoDUF7H9uwgEzQa2tD6V4EtZLnBPFr61EvSMHXT1p4z39D96mH79ZYG9",
  "key20": "op4q9KSGmhRmhJepZVnmtBwKCt9R1gL64Akgzje6GQmE8fio9oVq7Vk1ynVsh3sfox9kuF1xJweQCB1NQcF3Tib",
  "key21": "3Dwhue8JDSGECFd8rKBtqEdWegTkz367kEStxcBdw8mtKbhfVYHZjobWA2ezV2fY27DdLwtDBVFJsVMZhV3Ahdeb",
  "key22": "5PVDfFoqppDXZkyZgPmZPbAuREy9oi4c78fMzcg25hKggJHEF74YyYScKvWPHFMy7uPUuEnWzF9n5K1rgtQx5uaa",
  "key23": "AWMgxyHkVooouDiWDYFWezCc9n9bo6TU2LkW32r7fkCqVi4Ho92zVz1GFRXQot6whgaxLcW1zQrPPrxV221MqvH",
  "key24": "3GohntCMxDC7PrgZXJvGYbKWX5FBkrys1mBqeYUpyKcfkgrLxNJP1nzcFRYL9nHSrirNguogHYkkrRGATTUiEL3A",
  "key25": "4LLKGyKVLbAUXJvJ9RJUXhofrkvWzPazZNrwmxM1BsmjrLQC6pWJeATqj6MQ6GbPXsSxixbWg5H9VbQcwKtZeWaL",
  "key26": "45JkkNUy5pJ3wvUVh2Z6JN8xqT9vddUdLYETQ15ou1jxybE9vCSEaeGU3ziyhndizhDoGpyrdBDUiEUuNBU5KyLc",
  "key27": "5MH6zPpWAEjcC2Zju3oJL6em8GTxXigo1ZiqGwTQrCoBtbr85AjSskB46EHE9BEGa6CfhFkAYARsQqRf6NEBjGZZ",
  "key28": "5NKWMprG3v6nAFk1pgVQrPzcveDtAsTdbeuibYTTkt3PBuAALakoNknG3FhSB2tTyN9qmkb5v6rJqHV56wjta8Jv",
  "key29": "fgMxxdm4bUPLCWKPdeBfi4Y7FFSe2Kb7uMtxL3yKNW6DxQSJNwC6AjZP3Dwh5zM3Efdpe48pBuEteiWPSp8mey1",
  "key30": "3SL2b5iCYch7ZhkqF4mDYjkHHFz8K9Lw5E6iqGAvfuZchDFW6ubUZXHSDiXv44WsDV1mzgtiX14um8aULRsrNtUo",
  "key31": "53TSS2vG2q9G3KqJqVYFJ9tuDRGyESeUi5dTEjNBjXjmWxbQwRPoMJyoCDKqDVuAW8KRoSBX3YRoyUWW3mBHufwN",
  "key32": "3uw2QsBYRZBzTCBMxG1ZBNwsiGfGt9aoLyL3z5gvqpc5rN5iSXRgAeMgmjJN63ipEPyJi5SxB9Ak1a4gK9THjMLk",
  "key33": "4UzqDyWfRwhYTajC3SooTnLyPNAScDoSkaJ29cycVB92tdc9uyz7wqxyS2vYKFCGEHk31BHyr8M7rXiu1ZxHwpDs",
  "key34": "5Bf5GZzfnUymQR9FFtiWjEWmV79jadMafiepMUyZ9vgcGVzNAucg2dmEUHdqRfNHq47oLEf3M6u4iECCt8WRJBbg",
  "key35": "35o3dxFzHg62GG6rR2NBMHJiEot4CrepuBFt4FYUTtcFedQDJ9jAAvRgDAwh21UxLTTykVFTBHG3g53gjP3VtRjx",
  "key36": "QoGYPsUM1NRPs2sN6xe5fTLAhMJEmhYyg1CgdiL28uWHX3A8KzLUHzV3Rny7zbdgfsX5uGzVVLNa3qnR9xfE4DN",
  "key37": "61VhZJho2QkTBxLNZnWpx2R3WnZvCybiS1sKsZeooGLEi53wuixNRBjBeZZgHKWYchNUZqUqwp9d6wThbaaZRtjT",
  "key38": "33kS55ADCpXSdrDAEqwUSDmz8uCGmhwWfxAm9Y4akwGZHqSQ2DZeqRWFAuRhhHFz5cExu48K6SjRitnUahU8cCJk",
  "key39": "ULdHSCBBavjAuCjQ7SEgpm5sSfXPkvPDewwRLGQovtiqRLQz5zZfeEoz4PnD1hCeusn6NAj9becHua2U8cmcsUY",
  "key40": "5SfE8DpSNA7ThuCq5oRnGm31F39ep3fzYNw1AXX1vdr4zPvT3epiMLv3QZUEozet37bXNMFxfLt3kSRr2TeNuUqH",
  "key41": "5BAeU35SUiTBK1ceCw4rK6MnkHTqgKfWkkyp1kqC364MeZox9tbDvCi4ZRE5Ur9ERK8mW8ARznBvxPt3Yn3r5Ba9",
  "key42": "2CayiefMU9J84zw7fAgtAUjTWeuVw4CcKrDSgJkoGUqgrjR3q3zyzQpHyv9GA5EdbrVzS6ZSJpCefBRBthmhuN9n",
  "key43": "3tkM4aBh5UcU8rq1fg3zJZAQAZp1VKGP9JTY2JRfufZ4SYEUpM3iVRM4s6cXpGeSkXehwtmn2qEPKwcgA5AqWtLX",
  "key44": "5cdCJG5Z4oGeh31JvYdhMii68PregfdFamaWQSrTTF9QajADhg1RsCk8L6X6eFETcqgEX7AGpkw4bLJcKTZbi2VG",
  "key45": "36PssTwdknGEnDDBJ68sXbY66ky5E5U9tQW6sKcbZY3JfavbNFDqS6V6Qd6SKv47pubdD1DUjT7nwLtaTVFVitcT",
  "key46": "4gUk5CtTC142VqSAJbyyHvqkXXU6PKxzq3SE1G8vgkD2A1Svqu15TcmaynWCG7U549rzAYyNwA5UiVcsrfEPRKsv"
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
