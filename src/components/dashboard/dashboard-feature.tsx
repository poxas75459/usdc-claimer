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
    "3UV3AYMT8HuFiqHcFEPmARXZWKrziAPYdnMTwzSsUEjtrFtXRJiu7fCvzWdny6NyeTytDFGqqL5pvQGY6rmErY7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cmG7r21V8sz6RsDV5PyYatwpQehGH7yqCxXHwS5qFB59ecrSCF84M1Terfaw38V85yD4suVA2A6UPYqf9y8WJmc",
  "key1": "3LgtfKE67Y5TSUmwfWLtsop74N6APSXX5EGaXYyCWejDEgSjzSNVEERcLY92ZnxGGV8agccL61JRjFkt3fX4zeKd",
  "key2": "429ok2aro79XtQLTBi7TZ6cYn9Gy5RmQAaiFdS4yTUtMNZhRXmFVSrJJKpfqZMntZaNGXJC4KJJpTTPizMqLNHDK",
  "key3": "2sbo3ijGLJvrUvkQemaijyeiubwqFd5fXDGGFMSCqEEC9SYSMzs31JSsi9S4Sewbt4LwYak56pafkTzaziT5yee9",
  "key4": "5xqqPAhjnA6RiWnp8Sd61dC1NKM1rNStAn1JhjZv2y5iCo9fE9nknEZZuTp3hH9xqsK1nNEE7VFi2GXTJK5VSknH",
  "key5": "4qrEhCYUyVfk71cL8uQ1mBAw2GPD6oiWJ1Mq1uj8FwpfK9qGWFhQdxQZGBRn6rY5y8nB4cg641z8F5GGFKXdFgP1",
  "key6": "34F6onppYUyUch4b1AAvn6iebFsL7L84y7HBeyyhK1icwZYLBzk4xhxDTC52TxEuRQkDGpbC2XquonmgrHqx7RFD",
  "key7": "XCVWB4ZRYgPUxoVisHpXhZyctvH7ycpJUW2d78ZNn89QJrWeckLZyNkAJy8ovNDTUChUsMWVyZ2wF5wTdSJLKBA",
  "key8": "2J3GmzC3jMmNfKwPn27ngEKFkWrg8ddiWPww43AXCVGxbgJwLfbcEq4FQwjmSZjXpXW8kc4QGv11TgG5P8eUNjQC",
  "key9": "4J2MV7fqbsYwE8ic5NF5P6gTPMu88fbbzDiD8E9rutUAeoD1fbvPyrepMrAqcikeu6S8fXMYu8DkLuyMEWgoCzkJ",
  "key10": "45Ko8V4R2nxJ2e2j71wVZ3qVXmyxSdQJGL7Ujou5ysuZrFB1axKq8CWeFANtgtkkcrLVy7fV7i2SEuoy13XpwWBy",
  "key11": "5qnu6iu8QciH6ZcuhMDs9fCqERj9Rn8VvnyBpVMY6tqE6SqKbGG3WbynML93MpnbhRmRZjgB2k8mHzgxRw7VjpAD",
  "key12": "3axqEvCVi9Se8EoaxW2VYJ9e8tAr5KSL124je9AM7UACLB4uns25cpLmVHeJXh9Awkkgqs5tUxG5zRVN71Hq8wLJ",
  "key13": "3WD8SeWchExWXzuRW2HDR1L2yjXt5nn6ybYGkYq9gkU8KuXrpMaCdpT1Ed2g5MxknUd9GMtxE7YDTUii78vJqMdV",
  "key14": "5ZLRB2NXBE59oZ3Np34PDBqRCmtqcsDJ8ZPxuSUwXqpzf6FnRuKvQj5MaigyxaAvCwucit3iL9werok5joFbe3ML",
  "key15": "38iZi8dR6C1LMrQMULHzomqSMJcS6Pk5xkSWTDYpFYpHq5mVGXw7sE4MgSj8D5yGUPr9egfv1gCm53aHESNw4fMP",
  "key16": "3hX8JoqUjmnAAop8o34KJG9GkTcF5x6Ykg7xQSoKi969EHkqRra7uzgoJaRxDmSHLqz2cxEo59KoRi6StboHvj1i",
  "key17": "4he9Sn4HuJ5kiAuSDideY8qkufHYwUxVrNVTGBccLNJizYsK2D9P6kybzFR5fQG19HkMC12JZHZwd7C9TWXEWZoN",
  "key18": "4xbJMTKLf3jNxrNFRJVJCf7azEMbtwmeE9ig21iNRJ1eQAgDGvizvXHMGDcGRTcKtdxARVQGrVtNZYP3RiXT63Vz",
  "key19": "xeYmKgLQVpi4Yjm4b5dymHRjcGLFsQ7EBEWZ5NfzF2wKkm6GcpWAAGBKdGacAMLbcUVnv8JwUXmUz664ctRvC3N",
  "key20": "4EhT6P6PxzNdVcYbQw7hgi5PBtUaWdXu7LcjKwmjeUYnhwCL5ww8WFdHdUeJe7UTpEG9hrkSRegePAr5RAmbe7Ar",
  "key21": "4oTrj5CNfLscVjsip81ft2trEfNNt3n5WHSLv7VqNjMhH6Lza9SwcZAmjyJeWqoqZFv2SXKGLUUScQS4eAbirGEY",
  "key22": "2iTHTwbAXYvnLsBSEoudhW7DqfHLUcAYwz4qX6Cf7CqMLx97LrAqLB7P46qkfmib1MytqfHeWETPrX2JJpFhTTpq",
  "key23": "67WZdms5w7LxcoAmWwvoSc2DWCke1C9rTtN2MRwVTJ8hB4xizL8HBUnjpBKrCXZRkTt7nKHB7gVtaKUsMKPKhBux",
  "key24": "2F4T1z5EsidMEx8pD5eBs3vXagkuDVQxoqDQmyrumqJLmwaobHx2ceFpxkNnhE9bvNfP5WAEYnStnVSaFMZrmNBx",
  "key25": "4D62oFmhNbYeWEhPRVcJ2EydPMNdu9Hm67A63GNtefbc1oJP9wHreb8mToG2i8ZeB5RtT3S8CQbtzNkhHdLr6xJc",
  "key26": "67etCABkBUTi5LsctAVs6URWy59uLxCYo74AL49mv2qoX2FHqpVFHusw5dJHtYSqJYZqxGVF6eJj8oYnTUzwE7P8",
  "key27": "3iTRLDQe786KcwTG422kwHk6kFDE8HBUMSPjF1WATCDuyGu3sMxgrYm84rV7sTnVKVmNW58cwZzyUmUHtkMRcXDk",
  "key28": "653kNN4J8WehMA3jfLExJGfJjBK2THdqBVvnagK145LHYcaf2JXAKz4TqUdCYgPzfWUZfJ5bpW4SZF3U57etgpg1",
  "key29": "5fVfBzydGT6qYsXmXYh7sSHhza7WNogC9Ezx9LUJPX2WsfmWAp48JA4MEMA6ewdCMoVhuSCCCj9ZXhzF2g4qtJAb",
  "key30": "7pPAGpSwpDgTsaHG9c2AbzctkA89jPi99TEnmiggA1q7XSWp1gmQqiBrtHcWNXjxFRuhmMugF8rZEfcg858HkCo",
  "key31": "NoftenpEWsqgxgtgQfyRvTGDgdxPGPX8nigy3yHGxxnmB3aB2RvTJPjGjq9doYR5dVbnSTXwHeorK6XyWi1GbPM",
  "key32": "3EKmNheCDpH5bsNdQuZTERtDiDUJ8ygoCv96Ke9Ho5hnNcRK6HqgAj6Pe4xqpvMJbUjsSHYcBw79n28LihGBrhwj"
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
