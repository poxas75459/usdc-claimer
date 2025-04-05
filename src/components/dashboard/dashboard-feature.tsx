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
    "2N9qmFWwusRUAijXpFk4YoqxCbSnwB7EAQtzhGjh42cStMjqfqeycUKBiWFgwjRqY5aUG9GfBhQGSSnC6Zn2WzzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y3gqFygSeVT7Q2e9fUUk6BX39VoRNS69PybsAzXMepWP9D2Qy3d3gR6U7gsMbJrZNnE5rEwHvYsWctyr9BhH5YL",
  "key1": "fchH3LxxjHUhpfxEsZQodrkpKuhJVTVMH1B12fJjR19V6kxuuMcvfg9HyUfJDQu4xRt2wrekpyDiTkvB7fQGtZU",
  "key2": "MU57jVj6oD4HawF3GUExk98vX4D6gAwcWFUUsUUbDQb6LqfB3c9VhZGVBnSs3jAx5JfdaUHb8igyozs28d6zsfh",
  "key3": "3DJHn6QqCQAamQmedLb6MsTMEJaNz4p1gyZnVJZdN5GyXPByQ87pgMagZusjzEVq6ML9E6jJ9vb6NKDS4FGY3RBX",
  "key4": "4PmMVWVn6PWg5CvKr2AhDEWStL4eyRCSbu9JoX7ouCNHH96Pd7LJnWQmC7KkrjUo28ZG9SivQViHCcfAdQM8NXV4",
  "key5": "4y5fRJniXEMNen1JqGZvAFHPUVDmLuw1Xp6mPfkBp732wMb8pHJNcpRXeLNRLTwZqhDxGu575qRBrC3yBbZjTkRq",
  "key6": "5bHkcWvqb4wgcAw8EHMVRqfUd2nBo3RfywRCq15nAWwoHYhgkiFdgXp7gj1at2ZEGwsEHRdzLa7nerGmt9PVwe48",
  "key7": "4DtrMPFebA15UhZxyh396t7YK8mXix9Z4KohXVqoN6o3RdfraKDEmq9TR8gpXNwxLDUqK8XxcgsA9q4rvdcBXmvL",
  "key8": "5juEf82aAShCLmfYVb9cDzHi4mefDJ17XNXPG2e7YqzNzJ2Gyp9RBKT1iufjggZkzFHB9V5eQMAW5F6aCkk2Lyti",
  "key9": "vY5ri29VBqFBnHw8HLRSN1jcSed99sWzuAx3veRD4tWaXEY47hTRvpWdsGTqALqtipgaS2BvVkLv2dPpmqAgYvt",
  "key10": "2x9xLJJPVaSCSP3MUcp1XW6BhAjVnrAh75eHaq1NePcVdMGWMNzc3DupRRTnL8efHgiVm7WZKeGoX5uJ4KTyNp3S",
  "key11": "MEnNxzRzbxwYDBvj87r2oV8f7cBenkrAQDVeDQs6kBdRqALiGyXUXh2hawVeMZogFyKgcsLgdmwZu3vc2gSR95m",
  "key12": "5HagpdYuWXmVuAPVyY2tQrMQgHKmL7q3RZgNXUKK7Lr47UQL7uMegDXGijpsFj5yC4d8EXXPbKL1uZfSowaraifx",
  "key13": "4ZwWndRnpjkXchqVGar4x323zDYkGbXohQgsogiZ6mEDhhvZAGneibCeAREucsnrahYpy6667TxHkhSAgCES8Mod",
  "key14": "4DAAhweZ6mkXh83KHDuvE9Fu6ds1JgVY9XcDVoDKjny9xGEeFgm8DRusmEmD5yb9QZ1GVnNSTG1BEdgYLvkJkcSv",
  "key15": "3cJArgDXGTHgdi3rvXuZe6vvus1XDyKU2YKjdxC4JrgGjkyHdLkHGZq5sqvv6uBxB3aYSES3xpqBqCipvtkWpcLe",
  "key16": "4SYvgioDrararWL1WJi8H7i1zSWyv69Lv37uRfmWRhcXnmrJ6pUK41MpHGyGDdjLLe8jmp41nR6pPybMYL6x4r7c",
  "key17": "34d5U8HZrkuztHu5B4pZZzUmLZK1C8E3SpLhAsrjxyByn7oKdjJwjmUw9cE1Bv85Qjqc5BUoDpGAYJDfhX7pqYQi",
  "key18": "e7wHG4yxCaBaogeHBaRNWKG5vsQp72pDzYcaSVibkRCP36KV7yjtA5aLRxMwuHnpZRszpQ9cqThNw54owfGetng",
  "key19": "5eXn9q58XeG8zmwBYpsamJAcLrE7spu9eDSJVUsGH4ET5Z8HQn2CYnGdba6eSVgUAtiB3HjHvfgSQ7ZT9XcVQJmC",
  "key20": "66tygrNZhVUyMfMBQmQ2aULeYwERXdpRwAX4uQAiJJVzHG9MEa83Qz5jd4YvBXGPj7QbAYQ3KmcxnTdux2ncU8bv",
  "key21": "5cHH4GpneaotKhbVqNiSGx8x1zYHtYu13fmcobV1nZNo76yjHgq9KU3yT9NGPonpaCV5wvd22afUfAho4hUTEdvt",
  "key22": "5tjCRAntLKxytFQqkrhSvSiVrBsRhYNHiquH9Jyr8D5HqwxbtV96P6Z94Sp7V6z1AZLEbskA8AhX6hcs6JV98pnL",
  "key23": "5jKtzCxQrZM6mwujmvAjNSNRU3Tqda1SmyDkLDpB3qz2xe4MVJrhUEfTXtcVRp1xEu3Gv1ftBRTc54uoxtH5Y255",
  "key24": "2g2xzspZWeovTUDNRYuANpVyZbvBXQaQMv1bQZyJ6337AQgrR8KJmJBntp35kq7BXqhesrXmM4hv5hU8s7icBpAq",
  "key25": "5EPHneXF3wjG3VSCuhKYVtLHYjkgaJzPwarm5yWuwe26MC4KKn4xw71qC4Hp2jHLQ1w6mkp4B1s5rzhFKVVC2D1s",
  "key26": "57MCSituu5neXD3gZuGFX6qw3oLyEVKp4aU2m9hFZjjZPJkAvVxN4L2mK36sonA63NEHNwYMxqNqYf23qkKcdaKb",
  "key27": "48RpQtBZ4jDCFMYg89nYoapPZEhKwaNC72kvWsVodBnyGnS7t9D3jKyYA5jiTWdzKaNVxnFj8AgCEKzXUhd5r64D",
  "key28": "63eEbTtsqpKUU5cEjXimdpdKKkeC64hLkCJ8xq8bMpunNHaGprEyLrgBboLpqcnjxjHn5xsy9KpnA43sFAx7mwVD",
  "key29": "fWXFeEYCt9fXm3ewnZWSELsymRVY4Sph88rAeGvWVi85err9YUmpGt5qkeFPMS23dCkUNMkNinAwbcoMbi6TrN9",
  "key30": "3qQcYzKfHAmDsrdze5hC8Lse4BUYN3wcQY8p8HXfLYaBBWC4cSa5zUQ71Xp4fxRyLgHk5otq3XREFZYsDQs1KNK2",
  "key31": "43Qn3GR9wSyqrnU1rmvbG8sxAmWJNzYPQf4zN5eSJLte2DrS4aR2MshMCygMNSGjHMJNVpxwEJXxPzGjwV6p93aH",
  "key32": "2VE3Xpjw8b4mzFYEdncawAp62JuJ1okmgeE1tVPJRYNrp8G2AwvWhirC7ex1rJf3dnuBH9rWvXE2fgWnXH3hhSbG",
  "key33": "66nrwAeXMMVg7kPpM1PRn4tFtNyQsehDkJKkoHR7yaaHUmtQJSYQFBJ4HoviMATXGBDNMbirXoAaDUskz1n1wtYC",
  "key34": "4Vs428QwyS6DBcxuWoRF2jhn2kb7W57mKLeqekoJZF7o9BVoXfa74urT7h8ALtCphyHGyLWxwbLtwtBkAwqRnn4Q",
  "key35": "3vSzsDtvPHyz7GeQUoHBJYJMsZ71pdivaSNcR93EBDkcz9o5SfrQrMiusA4NV66QVF6vFdQrAN3ztdqbxsygsiH5",
  "key36": "5FVYnWaP4UmbXShgG4iuwk1Bo1EhGNyh24kJzjwjAed5NV6Yia5CqNcrsT4RUdJeTQyqpCg4oXyzxytaGKTzBoS2",
  "key37": "4htidYFjMQLaLJ9gw9Vpsx4YuwYM9WX4Ke4eruBhhQQTqGW3SsX6Qft5XgWQ561wwrKP8rVmgPHhuL7iFib36ctq",
  "key38": "4dmpw88khYhpdrYMdBL2ZZnRg8xmvE9qU8tHnjHX2zF11mgDDbHiSCGdnUNHqg3pDfNQ2YByxymJoRNmdmf2PUrQ",
  "key39": "rqWEL8kkHfJJwGGeQUaPJ9PhjWWqH5RY72846cuYrT2ixbaRUPMqWdn5G3fihk4cguJzRXScGV68xgB6unEpjSX",
  "key40": "3q1csghgPgutLtPKVHTDsDdjxfpZ7xUM8pr9Ew28jFWJXD716cxZHoatpwsT6n1JKUf84HV3cS5tXh1JHCg7qyd5",
  "key41": "2KNRo7CU4pxrSP2YSTTTohfGq7LF3kTK6VCWqhPT47VfgGWMRYDDnWMiNdjuXRK18GStDBJ4nbCebCF48jKkgsD9",
  "key42": "5kKyFf1EUhL4rmCb1dBo97M9HxwVgxNZ1S94M3eJamtVnTsvJhndE9YKLX8WeMKMirAQARgEHQSUjXga562b5y6u",
  "key43": "278bQahehtW69bHiP3XYLzC8fM1yNge9r6WfAvfTykietUT2Puhyw9LDfBFcp8p8TcWus1HRpau2VCz9pisf4omw",
  "key44": "3Dw3jqNvkAf19WBi3xX8cdQS3XcLEqWmpDZxoFksW6TfuYtCRQ4YcgbD8nDbycXuGCgUwVpeqFz8tqsJu9tgRydo",
  "key45": "5vW9q2Z4w4aQiwKt2nAZHwq4uVS3evWC8pPL5u8zxrLp5GXWbovjaCn8rgTeNtjHaHbFf66jazHeC7k1y6XpHoxx",
  "key46": "4SEfQdy9GFboWLLJbNN1ZWx1pt6VH1Pf8hsMnxULdeFHvNxveMyqoen8Ww8Bn7oq91AnSFtgCGzkekmAzkepqAUm",
  "key47": "eAQN695wuJnvudLm3XDd6P5NLWhCn6MJ8fiBae6TjqSE5qeMYjEUhGkvmnXickGfbJJGubStLd6wxst3LQggZqa"
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
