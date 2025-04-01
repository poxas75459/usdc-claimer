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
    "2GVakmdm8Uj56NYe4h1xDRdFpACeaHghbwGTe7yJ1BXzmNDZW7w6nfJGMdbezCbteXUNrSdDjt5ydqQTZLxXMYFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xX5ZYKRzFZK7zwg8BBAzG233QyjLNSPVtVdUf591hXMbwKt5HLU8odYiECjZ916uwkoAap2hjf2ccgQmpbazbLn",
  "key1": "2W62yYw5UdbAW4nCKzDGwjrBs5LHsDe4WbbApgo6k9hX5GGvM9gtbyqKaE3DCotmAbXNeTxhEV9SHNLAxhyMTyZH",
  "key2": "3VNnBD6ZKSPiMfdtoHQjJ2tABLgaxo5mSnA4BxWgA3frW9An6Zn4WKkYBJNJo3QTSkFywb32Jhj6xD47Z528JzhD",
  "key3": "2JwhcW4esMjWAvoFXoo6D91oSKYn21TT17cdr4pnB4MMroSVGM4RjGM8VydMvRABVWaYrYduhujGjcPgtXXUSyvx",
  "key4": "fcEdAXLUqeQ7yNni1d5UswSVirkgFgw62dqRm52HhntRFwvwBgvTgNqZo1dz4Pi8YuaBSZ5Gv6Gr9JwTqcMbZjX",
  "key5": "444qoGMrZ87H7cUs2Nv82gsmHHXLBsmF3erjmVvnpCtmzmVcn4oARgzfZVRs49YSZ1pFXsVEdvyng3Xq6Caw9r1q",
  "key6": "5BJ9jsSzcXLvkHngeGGfiYJ51Ukq2iPAuAWdtgJeuYdvDqkZpifjm2gaaxrZaRPWQWvGKgi6BkLWTou1QcYAxyPZ",
  "key7": "5WPCt5xLbYt6eMN5fZSzNCVDazCrGhTLS5U2ydeptz4BF9vTt98HQZCxRrCK2DriGSRoHVzv9B5eEXXVbV38bj6q",
  "key8": "5w18n3i2CDZ76KsoGFRV6PtdWfDF9iY3JNJZJN47nUoSyRmMFSpmYJTyStRbDTaDR5ZgXzvGqDWRk7uDEJCzZDBK",
  "key9": "herLQbEKGgwwTd4Eqma4jmJaB6gStX8oj29bcEG1Ux1ZeVYNHCRkdeNvdPviLppuiqngTwcRV4qz79dpTph5Mdo",
  "key10": "AbW6YSUzXnHpCoqc4Z4pheLbMjtJy2Rb7mfKgPVffhGtpzKB3LAib6HdmwgLSQiK7tP9GnvtLPaXooavFT272N7",
  "key11": "5MyLdWRzFBB1sBs8wLgUFftfG4VwiwiAjuxjHuHnJDtLfPvWYq4mjh62XY8MqHo9Br9mu2pQh5ARCYW1hKwxxvux",
  "key12": "7Zk5Bjy4YUXzH4hbWte32SoGxLDk6Xu5VDLAvrVsrPyJn9ojKMD3q3G8w2XhCnUK85UXzJ6EXCNzYbJK8cGiRXj",
  "key13": "4k1HpzGC6V5DLwP631yBKXBFaMiXFn36L694uya8JpZbg1s4qWAH5oHjSupiHSAKfn2uW6cG56rwFcAoa9RVbG25",
  "key14": "6CqZy4DGQtXsmEf6uyUEt51hLTC3YUhpEoHkED7zzBncJNv9SFqpwKvgFY3H9SrVtKd5i55tYpmDRaGuTUeMHxa",
  "key15": "4SS23VxJth4ohjZhXC8AaikJD91QUekCQaTZPTcrAfhjRW38tJDM8iyExkiUwwDbkEf6D8nskAUkrbH1dAZiRUWj",
  "key16": "39PXHEp6AvBAzRWLRP9kmPrBU1yK2rn6HLEo7hbbRxqbvaDN69ZjHtTxqUSxgQT5QMv5nLUNxQMsMfzJALWnfV7B",
  "key17": "PRzTRdNZyU8JQsTAnQtVYP174CH3rck3KYJwC4RfGncN3Qaq5JUVixksEBwBGq7cC5oypP6sfXpVtDrScJvFkQj",
  "key18": "3QPHMCR1Yz4HenkoiMJ8bkGpdHB12vWNyqLvM2VQGh6z7vq4BehLtDsmRW3qn6zMc5Ks6KKsQWQcXfgARo65bk71",
  "key19": "59tpdSPfPYkxHVR7BG6N6UtC8AvWQDg2CDTba5DJ3WcYCJaUx1keYk4AkuCeufu7bx6hRE4ahE3eAtCikYWoEcir",
  "key20": "62LkyutaUi1RwSnqNAsh525avnTMFYRaJSzq4g9w5HpY5ZNRfmd9Gkw622RocfLoBwmcRkaTT52QQb6fRDStq6gM",
  "key21": "Uotv2hB5Vog54mKt1u4hjE9gW8RbzEtJCi5Nj8W9XVVwfjJa7DCvB62bBXKPrQ8Kv7cgBkfDjobNSAaAi2w3xBw",
  "key22": "2X4kAdjTqMLzqeNHt4NBZJa5v1uGSenpocxfHQnoG23VDg8kBqeJhhm1BeV6yziQTnWxvdRqfPXmu72UfPdUAGsP",
  "key23": "3SytgcnJz3iEjtFtM4GahMRUWfixQYPsD4krpMeLATSxAnyMiWVtAdUGT66Nq4pjTEHPuXRbYh6qz7NUs64u4Zhh",
  "key24": "2SMpZa98LLcHuSnW5jumxX4ucUfBXQKiGWb3g6TWgekWUB3XakFQFy7h17huvZTRGHyDkya4pNqok5SWoMRKtupV",
  "key25": "4x31k9KozQwmcFgAWieCtdxYFUhnJbQPWgqsEserurzR944QM2LRFpoC67kZot9S5VpnDXLuYbxRmHggTk4V1xMM",
  "key26": "3an7USzvpXg86xwuDoAXH11sJL4e1UY8JNFhTSUDgzDMZj2DFCSzgK6jH1169dKTLv6RYdzhe8u4JZUd7uKAe4sh",
  "key27": "2AfhykvKuSTLbxUQKLcnZFzGt3hP3jgT1WFN4UDefGJ9Qz2ruje3vYyiZeuXjxPgNRrwxawVQb2eMsaqdqKVQc7k",
  "key28": "4TzDqSQKhdHc79zEjmyAJnx8v3mBt66GaYat6x8rUfCH3AW6kyX2UWt2kF2X7ejpYbwRPAuib6P7PtR4SyEAWiyW"
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
