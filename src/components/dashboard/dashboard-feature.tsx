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
    "9xHAbKGTNZbJKWkZFrrfDGPsmxCfrXprfQbmdod6s8N41zfTMPdA48vuCsfFK5VPFXhbpRpQiagbHSuMky8mAMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TV2yt6McfMdyaBP2FxpyguawGQ2FwQgNFPK8BH9W4yz3EX3GuZA7CSRNA1EKanWvSFUmHpp3igUNAucFExeVnzt",
  "key1": "2WmWXXwPJ4E8twoLviYxxgqtzLEiffE1emAPpHHexXruorjEGYWFmiXJ3Nu8AJ9E2ppdeugsJ8UBKZ9AMoSHEAGL",
  "key2": "PxZia5P9GzQpqf9QEHWdqn6K3pm7qmWUstAjuMv6Hq2MYyAUR69YCQEVp1knZLTwFsBJHitbvSnj71JrYwb9TDC",
  "key3": "3s1ct6oWbSwc9LsJd6b9kR92NZxrdCYxVPYfaMZRvBiideyQde3pzmZfzmMuF5GAZEUXnQn7fqmrW7kZFC1Noqe5",
  "key4": "5B3i8esaips5gUzFUdSM4FhpLU9za5UZmxbhW8RpyXMm8ECnv2XofcWnkfNQhrk2b8FU68ET73iGuZNwZqzwwzZx",
  "key5": "5Xa4tbnZhzyvsSo86Km8r6njfZcXEapM3pPtc6LrmtShSgYcxX6kLrK5Hgsr2UkZZGRkW7fTYkYeo8foSGbhFYMX",
  "key6": "5TZgnVTXFSVfuEQtM1zBv4swgXG3baWDk29YAomvsVR7mnAxASjJ6ucjFMiJusRAEjEBHLm7Yk3ivoEkAYBmAD3",
  "key7": "5uvtDBcuVWSQPCgPCSwuDtWeLAkN8C3eAA6qgCH1V7x32w6G1YGHXUuCgz8i5PUqSMwD6aifBwESTkSJEHJM4Uy8",
  "key8": "3zptkMtMMDsXfz9zeHrcEQWGehoqnL5guFzM7cHdBVofyXDW6UjbNhhTW2RnPgSFcJYANLc6g3XFCr35r4qag3Wp",
  "key9": "4AB6HjeR2NHWMZEgE2QTxqKy1oubtM15VKxxP9JgGRYhZkZHtWwiPYXZic8Wzk6KDLQJ7v472txaVeotesQjK88S",
  "key10": "GepUwPJdvvtBHGTx4jdye564caxk5mniMCdSP4LY8ub7YCuT4mRyojMuF5oiu8YtWfmVoPAh7ts67p7hNci6REi",
  "key11": "4dHgp7k9rQ77xnJ7nPeGs3rtGCWpdMtwNAmYfnD5RFFq7K4QbQrb9Gzrgu9SSUhmrfoRwJESKHUYCSEDuFzLojHh",
  "key12": "2ChjFRoreW22yJoPf55DTNn8KbwpMtT3AamqyxbQF9B8P6xRgfKccFtQwR2LdyHsSGi6KokGwDYmnb1WLpoKzsee",
  "key13": "5Rw7226Xahq1wM9t7ryGrfVr5Ks9sSRqnzXus5aUNeyr8HyPuheivsgxwmBAxLbd8tLnCtRQQjjLnDSCR5GseiSN",
  "key14": "5JTXMAF9HR4Gq2mmzNis2AX54gQYL8feC8n6cTmgqfQHjafXhiWv3FixcHbNtLkeDZDis4W2e1aK8f7QsUZL73Md",
  "key15": "21tqhWrr1WUzg2WDmTKqs69VG25yBZe1KDGFKCzDH6EXQcduR4YkR69MjK8aVUunwLod5LW4Qd7ZcCpbTkHKtVuV",
  "key16": "5TZVGPEVaYqGwiem2NeQGWUckA97hqbYyYjejzQRLan7tAj6JyDK15539KE47q9x8mzLuB8zz1zH6g2KAenno8M9",
  "key17": "2TZCbLX42T2dZ3PMBSmzeNRDSPwgGZxP284BV5HSFK5WarFriTAdcdkNvnN5jjovpVv1yh4t5qi6VyM99A7pWQkF",
  "key18": "2iCHAnsouuNeY9n936uWY3KJN52BaCfue5tx7dofzqBTCQkr73inVcg5DbuAmxux9Q26U4WrG6uginTXLL67CMNu",
  "key19": "3NkpKQ471CuqxMpfTynnc8DSyXcGrY9mxhCwzFmPVb2oZ3KWcWqYo1WJPq3EtFLkF6mHw7SNURwptvpfuzbyEYiH",
  "key20": "3vGyKgJxu9cLZ9XRyJXjJU46JS3RnjJ8eLtPmWXQ4E4CEMuwyHoKmeAhZSmyaj3xsXDCAMNzN3pvBLV73N5paC9A",
  "key21": "VNvsVLff1cpenMzAVQPHh1D7TERv4iThAtmfFmXH8KyDsgiHpeKNmJpPTA6uyNKyMkW5d57AjgzV2QGJ542ndyV",
  "key22": "5khUmEcXshw1uw7bo2exdkENGdw8cL2rSHZkdNC3K4JZCEEhEUqBm4qrAeZKe5C4jDs7PFeW69UqNMt7Zc2H4TCQ",
  "key23": "3jou3PwrPUaK6YhvjmCkpTHLmRGjwFapfBRQitwaAXKHxFoCRBK3HzyJDNCGJ78CHTSv5Wz3ctw8fX1vhd5CeTUX",
  "key24": "iLEW9YbQ1X77wdu68Moc9RzNMvZEfVuLP6H5pvhgzeaPCAgkmrD4ZNK4PrbSCKGxFbCnWSipqXM8D4kyUSdBawx",
  "key25": "3rYLg5rFRhR888FRywWqGmsg1UoLDpdFhy1Gky2v9rXGc1MgMHoBHMY8Xs7TXwnqRVjPsgd2N12KV5Unuhh5eQSQ",
  "key26": "25KDRd5wV3xeQgQ2kJ2UMfd4YHyHurSSkxrbHjQKRDGHa9psskf3M1WnQW2xnGB65oLMZoexq5SgR7CJ5y2oHdg3",
  "key27": "4ZCxnxEC8sfdDA1ktWqPoDLrfzTEfe1fuSFhb3UsGHiMVuTRGNQ8HWMPdR2t8AFJ7F5pxy4aYXsx6iTBsWSPyHHg",
  "key28": "3jQ8HexAGTdxsk78bEEqu766zdmAkjCqJjga1ZYnzi3Ed7DRdBNKWJM5KGybHzqGAEuoccHEb4bZMRSmuLwGMNSm",
  "key29": "3CMazbYEFznBPVSoYfWYKUZEjDShoeJK43tdsywJhb1iHfULHDvXUQAMDswsJaCQt4aAiUJPNy2DGRm4uG2MQqEq",
  "key30": "5GNvC4paYTsgGgHr4A9N6qMMc29iRQ8fk39nYVjDikSfNynrwhXRnU4TjqXqaCdBxGtSR3iJgMTUywqEoG5NM1bX",
  "key31": "3TzJTBx18NhinzZ1sou4ELctiyBHTV4V46c3W7AKFmr3mi56vugPY9xYgUSeicai2X4VGKrPyyciJJRRWzdpCx4P",
  "key32": "5oEDLEeGax9NykJ49NS8K9Vr1sSWedAue96SMmqYXketroXYWqNQ2eP34dQL6oHkt24NLjUddkpJhKfP6fqugyPU",
  "key33": "5UgxTfWmJXCQiMYDPUzJpTL775AqMyFpTaN77X9nAWHCgoH9rnKKWp2P8rcWcxeUkUy3jDS8qdStGwG3NfrLNxBn",
  "key34": "4mEi1SnufNssjcTSuKfsybi5oytPCr3WRbyFhLDan38pfKb6EkVfiRGPHaHKz5GgNBiQQUvPczdCETzNkNowGZMU",
  "key35": "2uPCoyTwfjPDd4hR8fhZeWuHBHq8E63ELRy8w6PDUjRm6NaEZkbuBUaB4yK5qvpwXS5agaqhgurdNdwjvWazVgCS",
  "key36": "65NV4bSqQLRqdz235MVDyhqJq2SmwoGfdXCAWaRGqfTAg3Ezs2o3sa226BJi6Da2MxkmMJW2MXJDABbYwApkqyGV",
  "key37": "DzQhRYzZhMx6MhUf3WFP4SfEEfQoTPRSaT3WDVa2WM444Y1qgnaCfhYTYZcA4YfbCG6XhNRo67ZhzwjHb5qDr9x",
  "key38": "57oCoMnrrcwPwxd1V3FrMgoxzJymPdXbN7gHsrDjto5WvKwKnpAH2MXdq6vHXU8dn9e7TEt7pcUdaaroZbfLqM3N",
  "key39": "3V1YvDiRPVkkz9cfC5i26XCrYcznq79rwwHmzCfoZPSS4fLHFFn6ChxA7FTLHjYK3ib4ZA2GpYRs8YxVu6CHzDiM",
  "key40": "4J7N6VqxA4wWVEZWzapEyuQxNK1WG89XnSUJfty6gK3ZNiGqx1cHUSC46DL4BtotxFHWM2kEUEjXeoGpHwop54UA",
  "key41": "2zqqzCroauAusNx6oMG6qCdGf1dq5tEvHMeqvwK6wHu8RmJzMTDeZMeuVyLzHxdvyYDPt1VT2x39kcbh4LqGwNS8",
  "key42": "28heBnFV8zEK6gM26mBHw9Qpghsq5CSrxZFfV5TksF3sJNoeq3Enn8hoV81MfdA3XeoEVNcRkbiPjpDBXtbo9YF9"
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
