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
    "4Hp96c9wNkemWMzCis425uquAB5F2BLuzHU5xYwkLRjJwowMmaTzMSsgeobkUrXMmGm9dyfpTEQdc4mPqRw9Yhho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ZoCB4PRsGTGx4Kzn5irsvLPxaQrhyssbgNLDKitRQLroNk64WgCmVy3RBMBiHWXp8gDbUnCBP1yKrN7fStpb8L",
  "key1": "2WksbygMnQTpHW7CnxkLBMSvoHG1d5r6HTCCRPwwAQT9H6JyDUq8ZMT8Jfk2CpoJhmM1qVzpoFXeA9Q1AyGaPaTZ",
  "key2": "5XxXAupKcYA2eXpSL3oTBWoreHA9BnSR1sBHNMJrXrchWW9xYfRn2g4PKbVjDBFwMMm1cY33S2myufUMFBazbMsv",
  "key3": "4t7RJPdXLNq5TQF5x8fMqrkZ5iQBRhfrTqizAbPAESA9PX64U8HfWtHNapERHQwUagyoBE3g7Z3Edy2GgUTMbfzt",
  "key4": "39pHJCH1mwK6QQQMq2UpEGFJbr2JUUR5L8mQ1JTn5a9FmfBJYRfmqRAvRVFqzqvkiCZqdPTJcxzvA1sBy6oWjnH4",
  "key5": "4XFmUMRBkYqHL5A1qgeqRf3bhgmQqhKaS2nMLC1xhb4fFQKPyxWiDdJYcC1mcbVgADT9csnLF4k1EZkBznF5ajHe",
  "key6": "2zVFmDYGq44XX71trJcogxuyg74My317PXPBNy5gPAeTPncDbWuLoaHFjCoWNLz9CtHPzdUtDqAC6nAyaqDW6Mwx",
  "key7": "3WFWJ6zHwXtYuJBdD8mL8Z8mL8hdK1yMpfSbXdNRWMRe9odTCtyE9YFGpaQRz4h56zzm8M7ixgKPoannFJmzPKjV",
  "key8": "dXL7NNfNiYVCvhKzwgyPJs98YoUCcZMNmPQuTB7D9NjsMCE2ukXCATuub8xvMqiqWXQf1KNqKujDfSLL4Hc8rGg",
  "key9": "1GZFK6LwKxc6jFM3GBDnCwekZJU25DWKYaCzT5SkQ9F2pwfaYYPBMi5518rKarV5XdVaE9rF6sxE4UWBgozCxiQ",
  "key10": "5RfEBpEEGDUjKaWuqDrw6DubHPMeiEtAuqpjePFMoRr81hymt5j19uUz3VqDBks2oyYvbSCuB8nxoHLL5GAYVdGT",
  "key11": "4NWMjbVzFzkKsCNB7biufD7SUgGtszPqfn4bRqZvrH6RqosT3yY4t2PzCaciaQgrjvuHbt7aLFMjYQpkrmuJQgnb",
  "key12": "4qLgqAUL8PyjQjNupe7K6ZAC4wLuCvZF4L9dkzZBQEtenPWqhXBs91Eu2esh5UWkbwY3w6UPyqNGVPYchiMUYWfB",
  "key13": "5u28BQye9hrG1YHgUwmwjGbk11pCKrE5iM5rmFYKiGSW8WH6ViWnutnbyeanz66jevmXp6xiafJFmFqxDB6hYg1T",
  "key14": "2f1jfZ4dZA5FSAZStZQbLg2mhYUAPrFepspTyRJ121uivbFyUinKnybtPmx7gn6VmdyE4dArJNkbRXgaLGbB4gL2",
  "key15": "4NXNRbeKN2hVDAVmcLkuum8mLPhY3zrPzgVWKr4nvVpSskHq7429EphD9Rhrj8nPEHhG7mTZYj6HmPbxf8XC7ErM",
  "key16": "3eYPRSyfc9uoqsSJTEN3UAes1e181bdAiKobUwgovMPqS32UihPvxpdUyCfo3X7nZQZwQzRNrBjMhSFg3ZB5Hkar",
  "key17": "3NjizqwhzWnNnDzCqXUsQoLbmREhCdodQWD9sb14PW2gSWs15un4M4NDENTT2Ly2KEMzdu371LbbC7KxzBWDysju",
  "key18": "b14MN4p7MpFMSo8aUh3CAcDkevZBiAii84KLUQcjTA8axHmMxamZg2PvgdMoo3f85uukacJuZqJDNfWZCmR9kC2",
  "key19": "3mEnKQhz8SaG3d1LBTYZQXDEpcf2m1zQbHeescsWRAiETxg6PxdPTRVMncX9D3hWUi36icAJR6Mb41WVo5NQXTLk",
  "key20": "22oh41ZbJGYqdejUSZ8C6by3cBZUtpZJTPfWGHN3Rq8evgfokBZ5LNGKsi6a1cMwrkop9wW41d2Tn2vnXjU53HZL",
  "key21": "3sxxHn5ovmL4qbCjJ2aTn2Ft6SGJ7R9bQxoTxsExmWgyCXzWwbaxaeR4CdhB49nDYmirZqJARvf1vMDQFPUie8LX",
  "key22": "64W3PnU16oKkcmMty39YFsxcMqkSDm8DeRBVibrkXoDNgJRATf2iyY28yYDtZnns23AX1vxkcEdAaCGp53y9q3Nb",
  "key23": "5npAWidXBaZb6Jrcr1KFmxvD8aqgGH6DC4F46VgudFL5Yax63ufRo49UkzMQmAMynoeegjB2jrYnj9K9PSip9zN4",
  "key24": "5yxGCjyUeSSV7HSCby9qEY3CfYnR2RJoAyS2jgtrnAJJH46PkonCRrZL7ByapJVZdjvMmGpHGyEvfWhg5TauhoHy",
  "key25": "3UA64pFvqa18T4Ms5eRRPUMEAWWoFL4Y6GQsJickgoecjn3vssvZjPwJWyGtg6CmnstyeVdanyhZK9k3qp3moWmf",
  "key26": "2WJhMiZPE1vgyuqB2kqnU9dcn9M8TEiVGffguqSsT4rPbAeW8L9ircm7P2wup3XERFChs4PsNiEAWfyGZtyt5AuT",
  "key27": "44siUmcBa9ymBhekApxzQKqyPcFPwPNH3YQD8jFtVF6AFahAqPWxRUwkGrmsctvxoEiXzeafNDzVRA5a9Ug86mvZ",
  "key28": "4LE4Xotr2EV9K8qXxa1RKD3cyhHxMXcRrH7dVnvcwKXVUaRrNs9Tf7dePQ4cPWd4MaW7xdD2RfFXM7xHuQcvuoS1",
  "key29": "23zXVJ71ZJzTzLq3ZkPe5rAo8tN4bKpTH3HSGkNUuiuX6TZf7mGgKtB47JUN49WwcCJE31rZJvby9T9HC2ZyUENU",
  "key30": "5jJcaFpg6czivrGUpekKv1wyw9x6LG2DXFWJmksdxpiXt2b9o2j4xv94YAoBeWkJsr96r7u1VvspGSbVDua4urxA",
  "key31": "3D9gZ9sYyQ52V8JqQRbMKzBGCRt1oUP7yU8mGTH5fQAWgG89S1G1Nc1YJgurRFib7MHAWPymPY8d6wcHce8QxiWE",
  "key32": "3Eh61sfdRjrrwwv88Wq7qJQ6M6keUCMt3a2XnaoxSKxB1u6gVVV72GkycYbW437uoSU8VmKagaW7WBGD6TPW5NsC",
  "key33": "3eUzDxexksAgPr4QuAZrQfvmXioikGnnimPwpiUvwntsVQJoy9Z2koUd5tHYy5jwSQb2TAEpA9FJZx8NHAByBK6e",
  "key34": "2LerfvRPszZF6vRMxrRfTv7aPKL4zrGqCgHiJAdHybSeQXDogGtcSCgVRZiJFSmqehvD1Xr128dN9u3KCFMMwA2U",
  "key35": "5Edvt7eec9soKCS7BnDRvgaYSf9bDW6WdcSALZK6yLWyhpE1LBTS6nMv12BPDt7Y3S4bMAmKJmw2F4dudsKsoAJ6",
  "key36": "5Q34ofavPmMYzFWhMZp4LwrmPm9yB1sMerWF6WTo7qmuUViV6JJzZWzhhjSpN92oTdUiNFqptoW81pBHUWLECmMn",
  "key37": "3Wzv1gb4jgfK1mabaKjPX9WTVqqyZdkjV1vexTHjD991ZfQuUga1J3sowW12jVhKbp5mw3zgsot1xmf8bExCaEeJ",
  "key38": "2zxJ1rc6yTimBAkei4Leq3vUbM3nA8qDPbDdGDaj35hneZpBxbCDXGWcwxi2qsVwtbz1xRaCmqTXcC5EAaSvZrsa",
  "key39": "3WbbKWws3HP8F81iG3pfE67PetgrfpG7WsjUHvyy6M1iiELgrFSNKaexv3yLCWsWeatwsrgywx6WzZf6utwzGggL",
  "key40": "ZbFSxEV46Z8gEU5jfA8nPwqDCeq6T7XdsLLgoyD7K338f8ht8zN5NTRn9rFZ28oQcDJbnLjptWY763NuVJN4rw4",
  "key41": "4wqrvc8BveVndsZfnjKGtCs4NFe9HYex6XLkrnMokHsmbny3sPSYXmBcqbqzbfheAQmgvDixV4p3mX4bgtR1xjGB",
  "key42": "5G7CiKviB5QuYeLAwQ5TqLUQw89Nmfnumnee1yrsaMNAwKHKMhAiHzXe7uBFEc9Kja5PQ1yHMoXpfbQH3EKmJbKw",
  "key43": "2LFg9uVHe4VuVtccMqEXiPBEqRQVipJPom6QGv91FrvC4jEkwRGiGnJr7M89dWvoC3xxVqd1MHmTAx8iWApSfm7L",
  "key44": "47DPHGeDxYe6TkXftgF2xC9EeXhHsrXLt4nkRHPX4ZRnahj9mqXXT41MnNsmkB1UN3X6wD6Pf2sYk6gETMpPJPv2",
  "key45": "4Qr6oaCFLvEDsW8GyQFWj7bboPz5PyhgYifGCTaahUo9rqqLeqfoBHc9tc5tkWyFxzJPhYQr4n8GRUgMbfzsgk6M",
  "key46": "5HQMW9uYPV3jxRHzCDJhcpuWjp6A8PJB8UYCzpt1QcbGgt86AFLNPvsrDmCVMxFt8tszmA6crAgdwWTRQy1WMpM1",
  "key47": "3NX6fbxTKpvqmeBFySKyaz9GmiKzupvhVeniK2UmELH32wwgMKd8g2kBTjjaLdC5tJCC8aPeC6ng3fQPPSM3CKtL",
  "key48": "5ZjRVFfEhqSWQ3t34AVnr2iNntaEy3xaiSSgvARkrVWBA6LGHCzfLqkTWfrukH3TBE8BXeCo5FoDaznNWwQC5Zub",
  "key49": "5kGQmrshGw6eaw3wRo3ZZEmLvtGnqGR7WVVQPcbsbsP4sBNekcXa6Mp7bgRg3JRUiyyhfkr5ewTAmeRVNfyRxdoN"
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
