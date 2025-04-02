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
    "5VMeGt2nWvEBep9kbPoLTBW8u6WT4dGHAh29rtYTWoasPmTW7BP9eLsDrcMkT5cv6Ye5YNNHpBsPAWsyYdfD1FiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Y2Z7Zr8HxEgt4QzWvMCGGrWeReomzcDqT6pF7oKaUKXn6RmqXzWSCnqv2q31rhsSi681dRgjxeQJEU4H2B8eaP",
  "key1": "3udceTktFzxvr8t9KRp4tV5msJzk34tbDTUNzY7CkPApgmJrfKasU6w1EPerae4PK7xDkczhtYoLiETucvBQYreo",
  "key2": "5wBWvNpKGnQQUR7dpS88KJfbFSG5BKut5qso2DPznUTtnk3VGXqD8pvcPv2YFVMzs7roccbtBfoUShFjHscynstV",
  "key3": "AB2eTUjsdmDcxjLm4QcvwqUs97mujnMBqGm8BTVX8kJMefTeYtrYqvRkLezw61fvPNfMzKCPjYYMXykmZDD16Xa",
  "key4": "21vSDsH43QGsh5LjhokWSpc8Z8KfAnMW2Pdxyz1TeRKAPouYRhkSLjk1Ah1AZ3SUP8KSKbLDnw6RJ2wNsBeXoVvc",
  "key5": "3P5vnDZdAD33Qw74ioJ7gtRjFfQMC7PxzZh522vbxUZSxS1GDSLTay5epBMvRwX4s4ganpitgdCRuShEjKRe5Zka",
  "key6": "BYMi5sssZevNY4c9Xnnc8dajGePmiSKTduEiN22EjieHQwrrxDD73w127qwHjtLxxcDf7N1oxxqeJvRB75Co8Xo",
  "key7": "1kXGAPQTr5pGYoimepQhaGf2GLCAT6fdTe1Wfv2mpA4CXp7CfRDXt1tiQgMtZWJaTiLxtWCNtnBSNmoD6791NRd",
  "key8": "jDgJHY9pJiKwg1P7yn8CXvpJVkeahhZ8uYwkXtMJgzXdqBh1caSsihNJN8FNsHmQBqCSXiSiasSnJKsJUyXjUQu",
  "key9": "3WzTXtjLrmDARy47VRQHL2miB5UHgnnguMKFDTx86RdrGKPcLYdmnq7EenF6NLz4TYJstGEFaKRocPuSANu7zVgr",
  "key10": "4hSCcGDJ7AfLMkNdVkYqnjoNFQDN48Co73APBTc87qUozxRiFpDPVfpq7qmqPmU6yUZ8XzzLo7QhZfDPu332583R",
  "key11": "2jeyd8nqgFk6Y2kMY4yE8m8QS5PAwwMxDvqRY1hHLBvypNrc3QQybrLpXye1jkS9EznBBAitAAmyub2tv4F9agh",
  "key12": "2aumw6o4qMJCSMBV6RP6yDM5b3RW7toMvfGvAQTzvkTd6fet46Dpc3ZzxYDTqRA9BJ1Gke4V3pqqbSQ9UH8CqckV",
  "key13": "2mQ6K5vrjLEKD9QJsgrxeAe39SgJykj6vGtgVa9Fas9VtBitaFUMkwporJyk1o2Snd6FgHXgkJnGVUY6Zx6cjEzc",
  "key14": "38fVz1UPEU8dmhrCoMqK8RyS1WVzWLpfgwbfFzEGi7GuQwiqqNpyj3ZWrQmaqvjXMfbupf6afkv9tLegQDiEDBw6",
  "key15": "4Woa4XY5m9R5YLm3wDmKpux3oRCy1MAG2uEjMnDPJ1PcSZPzBXEK3SWprMiYu3hyotHjpyYCD3f8hZtbYEaYYxGJ",
  "key16": "3RZjSEaXFfmocxGLuaq2ZdrtHtsEt4evAvaizmdMSjWrAEdUFqBoJH2vUSRpUgJnCvfo2bPH4qu2f9mYFhJXtj69",
  "key17": "2999eV2RnciDt2sGjvh2taG7a66UALz94A5jEtUBRSS9C88bSfXRYbVFh9ZeFiCXnsPktabdraSGNGg2H5ms6tNB",
  "key18": "2ZKiDpbekG1vhWpVW1qDwqXKApyjNBiMpNAtpUZJHRvUVTwyXD6PgATZtDzXeBSe4MrE9oncxfbj87ufYywcgsT4",
  "key19": "4Ke4R8dRzvP1znPXcN9Stj8DT5a8dgFpG7xVSa7xoTyx34uS54KcQQGLu6LnbuKFacKkbUTkcXNrfwznEbVA5fFf",
  "key20": "2ZpBL2sKiHn35QQV9p68XhWLcGV5hbxf6dnkUQBzgHmzpL8an3z8KTKofsfFdKzRbPH9K2NY4r6GcW8nm6MrBKix",
  "key21": "5NqZKbHYJFNQiG4bcSjB9DFcr54KALujDR4XnLaDVdTMzMPyWYRCsTZ7nzA4QXYgZdoJXnkXPChFJacGYZ8SxX2e",
  "key22": "2JLw4LKMjkukhFVbTzXfESXmuhK5Gc5PLtNiKiqDwQkFQ4yePSUv7Y9P5QV4HF5GRgcYoJyg61ieZCfULMvWq1kC",
  "key23": "4hhhiri5kVz4j9XHCiExQpdA1sREJojYv7rpZ6rv4S6kWQ5cnwD4fLzLtrFv7SEv3Zw1JVG5xCDrjwckEENsCHix",
  "key24": "qzKM2VYX2kz56skZHKivfPi1pQVcjG19pMNHPsi8YnCfayBTnVpa35mRHWDKKQ3En3M5qJ5tHhDX6UNFmN29BMK",
  "key25": "2G4Ho2zZTz57SPFzkUZmpdKuJjJdoi2S5Xb4BrxtWwcDdCefeJDH5e5KM3aWJBbNSC4hzZ93m9Tyn1BKGjNW1Y4j",
  "key26": "3qCWYSE2Nz2CmMjKD3VFCiLdm71YWRnSD5zbi3ENnNBeBijd9t15Uvnf8RPrF9rriv3H2ZL4KAiQMP3Z4fTDe3rM",
  "key27": "2ujWLy4ZTHSSgKbUpVBUjwjeMq8R9WHgYX2KbyXC6SJP1KBvc8vEP7Z9n7LkHdQruMED8PTp9aZRY6kXeiGpjkdv",
  "key28": "M3b5D87fB183xNprgMXhUZZkfj35c2uoW1AQ5UZbQm1emfhDh7dF45p916Yxx13HB4fn7yhiBxZ1xkzaFLk8Kr1",
  "key29": "UgpirMV2KjaQbNJ5YgUJ7HugDmTLHwUNYpy9mHMAPgmRGNJnXKzDnD5dJhJaPD4wcESrEdS8H5qrS5TjyuUWny4",
  "key30": "4CfSEhNPwBirfCMvaNiubb3LtQKm56otd7bLL57NA9bgVYjGNpoHta874wa4b4KrnFpsZ1ep1tsCAVmr7vZLF9t2",
  "key31": "wTi4ZKQXmwk8ZwSMkrrTieqwP3LmWVm92jEHs3KvnYfzv1uxcNfifJ2XiEjUQ2jqk7sSd2ZdBkubYxVAWpGSP5F",
  "key32": "Th3puvvaDA6KtqrHT1z8fh2uwd5ii2DM8T91yx6WEpRKwKRU8Xvwaoz9yWYU8TWkoufWMkFTyVXm1yuyRmbCBfn",
  "key33": "46126jymATyeH4EZsdx76CWjVHiKPD4mQ5catR3voi1rLbNY9Ay8FWQafe1DQDWARRX4bMPaEnCiFKoD8uBkPQJn",
  "key34": "3mDqXeD9T7i1Eys6JSTpmjw9co2pCKEz3jg4gKZqhsUsvTAwT4ikRsUhwTynBeJ1d4FuF4u3h6UZ9iCUNBpFt6vE",
  "key35": "2f1EPPjcA7EhPsFDDW2K26fy6LkLmhKUNjEZwCmuGuyHHiBSbQcD7ioQvyobni1q78Dc1GxQ12D7cjF35pqrm4bu",
  "key36": "2haSKu7SQ3ovQ2srytxPJGNUgqWJ7NCsBA3wLkgBUBkTfv3imEstthgtZ4FhGibQyDnueiKDvHcwLFW2R9Yc6zuJ",
  "key37": "5uLuAHV7ererQUoXkY2SMFWinJJHu7YG9NQt7QuVXTQB9tX2jNrpW9Rmwf4ExTPBN1KcDVF7rpdTxd2YryRuQqAu",
  "key38": "3Vx29tX56HYcBzgz4tCBzr1EmTM8TC5KcGcERsQaK2XnDR6njGiqht3gQcHzGXMdsEtPPDFVASBkEo2AKS7ZFgwW",
  "key39": "4xQz23Mfhi6hZAZAt8fyvAM9wyEod38Q5UoV6TmPqGwSSudjXwfka6wBz4LzDsHpRoqTzwuS5zFMvJthU7joRxy6",
  "key40": "5TTMiX6DEUHsUR6shjJ3xrtWHQiAUXYfAQRUcmsifuzV5vZN5j7DDVQLfkGd4EkjwMSYXcdTCuLbbQV9BgMPPTLi",
  "key41": "4hxG8H9bULj871kEHLLinVaRAffNhFm3FnqmNm3A3oRMaw4ipcaiUMokzm7AUarfDhda5iWb2DLeMGWBkvz6oEt",
  "key42": "WCmTqbcKL1n6Rq4NgyG5nTNLaNjF6AqRkMiSM76wzzEQkVuvksYK53AWnRcUsoqhhXNXRJr1sJqgEZyhSaFNUxG",
  "key43": "4oyvCgpR9pdjZzzxdF6Qg1DSMMuoyJnqN6V98mrLEgZZNBzch4K5u2ygkw3uLr1nV889ytvbtSChYiDYWVkYd8oK",
  "key44": "ecTriX3oDDfqZbDA7gDySJ8r8TcKocUzioky7hqXSCB1bWWcW8mUKaHr9RcY9Js67XFYqcXfTpmmUYWskNz26iK",
  "key45": "2uRLApim8kWojVe8ikSwADwcP3E7G2EssNAvoNf4Sw728GrxzgMCLJ9U6XiwYkbv8RMSYGPHZmbm7xR6GYMdToi8",
  "key46": "3uiaZDtvAbNHjFdZrHyBc2ccRTthapGfeVeM3QZNmXrJfe998exmPfQ2cyz4U9UgFtBdjt3U4tPmZdXQmYBzP1qb",
  "key47": "5pD2zLAzKdk1CKutywrAaVMHFe2L24Mi53GRMsBSiBrgRpfv6G6dk2bepSEY5ndBQoqwRRcpvykjCeLCqb3njDwo",
  "key48": "2uakYMjUcMbAHrXiazv9GCh75YhT4riozVWwta3yUznnDEoe1FCVBBfM9YcE5ANuGGNbfhhAJDjqJ6e1eQzGVaLw"
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
