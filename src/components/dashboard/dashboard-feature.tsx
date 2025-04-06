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
    "5f6UwVWjsCorvwRbStw1utM2KFzKBvk8qy3U7QgA8KFgFPeQyMzo1vEeTTcxiNgRdAXo8mTt4pTjXZaSEXC7kTUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HNBtAgtox4xBMxRb8WWcpCSH9eFhviAZZi9uV6khqF887QuGGq3yHYXnUazwotmRYaCXoYtfri9ynmfWtj1Yrbc",
  "key1": "5fEfoypPNsQhSS6Ggb2BUA3Yu9e3QXFRzEVNKt6XFZ5SG522C1gjFZn5jp96jmULBu6v8ee2myzamZYbxKkvT84V",
  "key2": "XYtx2MURM6n5asDJHnFptw7YfNmKz9vX2J1hbpjituvZo7MqfMZesStkcxQAc6cVVuBuQSnRMWtXd3S2BCdWU5j",
  "key3": "4CX3xVBkbcCZZz9dxbYoSTYDTR1Trdhu6V2NhWixKaCBRk2GsF8oG1mdwDz84xeDhbzXtb6jQ15RgWpPsdHw1F3n",
  "key4": "5CjZzLb9gLWnWxae6KehYxRgCHWx9f5YUHroK5Amf1nvSxPukvSa4z5EtuNAcCaTr72cQhoFiw7Dmf5WdsDhKy19",
  "key5": "oCgDDfzP3xuAzT3zJaazQTnCLLrwrTqdWFnJjAHo4v3bDiPsUkzC79nSjRBCTqbfDYg8dEtgbnDZJADED23Z7Jy",
  "key6": "4BznoU7vK9HeeUkuxsbhvth3jtc83UWAAccmF1eseyQGbqwYhVhX3jVyrQWdYskVQ2torBaDjyztUgG6rvnKuP8x",
  "key7": "4RBpYxT21nM4BYALKkuSVLHWfZL81LPhjgz3Cba7mP6Kw4m55LGgDihDiquQDUtRR36BfPZpTbRRa4fuq8BxxfGq",
  "key8": "srMxvo7QsbuHVY2QVToqyKA91nL4JRHQRzSTJYUSPsuqrCPQaA7H4xRgnCnjK7S4E5yczipm73ZopfEHSGbQaFk",
  "key9": "3eTbTW2kxrjLGy9Wr88N2p9z2xDJbnb4RstFKk3SdPGNUegvoPAFnjFhmLg9PvcLzfKJj6Dgc9S9M1bCcRfMp6KP",
  "key10": "4ynJPKb49P6YXxX47czkEG6MfqC5APKDmudnFD8KXh2qoHzDPF7vPcuU5Dk6EDCNmiRpoS48D1VvUKEtb4dqAmWB",
  "key11": "5drX7GeCt1AD3FdqDbNx2p2aUB6oyfgnBA5Lf7D1PtHV7FB9rNMwfwjxFduuSrFeEgHRrEBhdGgnXHdJZ3BixFeE",
  "key12": "2ZYsHf7jWubxcY3uUpQaxyg9t16BzY82Y9aX1C8CAvv6qnPX6MAAoqoMiEyi4S5tgNvkxHw31m85NQetWiHgXxUA",
  "key13": "3AkqffMtMrCJVpscqauFAaFPAr9mgh1gvHvuVPR4KUMGdK1viw8XsAAvJ84ZwMaGcNjNWKQnmkwUUXtEXSgNu7Ka",
  "key14": "U944zZNna9NomZYMqYy4PNm4g5rgeYGjQMRazekTeGqATNzSr2357FykKsm5UeZUPbLqw7Emug43kvGPuc6dAZ3",
  "key15": "3zQbBmNK4uLcErbWFD8aQouCLP85e3VkbJp6ePssj16F9XhTAQmUL3s7r5oBAU4xBVeHBUbynLaWZVw49G6v1Maj",
  "key16": "JGC5DjmWJ9RUVwCLe5G2b29Vtjh17x6J4kQm1T8SSUvQmgY8HrGBmz53HxhxR9e1WZv7DAGhiczvGU54Vy62YHL",
  "key17": "2V52Vccgx2nnbN8g1UDjfY77YBMPS1TFfvrvLMdXqaKrkV16eQmcLjq9EXXmvf9z7X1gzp2JD4b2hmq1s1WM6Mww",
  "key18": "2K1Cf5otHgDiBxyaVm2GJxsJaLhXrtzG79w8YE9DzsfBRnUpTyoJBusWE4TnaadSHriR1A4ZNCct2WizLBKgLtX4",
  "key19": "5hpf64x5t7CbutrqHieD3DY9qXakwcBwXYADHWHqffLSkNi3xoBoKxU1zzywi2nvLPA6poYpRZN4JisjQPyqcUMQ",
  "key20": "43QYUXWGoMKjyDggd4dCegV5ewRCrXNZbCdYCTxp3TeEsqtpbpBDbiW3VKMCVPyLGSF2K2k9wR46ueuntrdqtTuJ",
  "key21": "5Bv2KpbXh34FKBjn6XJGq7BVcoc1Nx4YBNmFZ8pq81MZvdXSaiVUA9JerxydTcmKamXoPDVCixpD1NRtU6Q4gHBb",
  "key22": "2h1PK2GQXSKbucTV7Fvh4aNU2yjSQMPXLS6pLffxi52F9h3XD8LRy16KRBbHgD3EADAq8ryq8VdLfFAh4FuN1U8j",
  "key23": "46T6svogSQSBpySb7MEvYyKHBnZZSsjJZsdsdj2h3sqS84ekRMF1FhMjGqXG1xwqiqL1rGpY6bw2LC7uXK5sEu8D",
  "key24": "5KXteX4h3gerN6qqJUychbtbvYkMGAAm5jQN3QsenCsgvcvZZGPfEdp87bmNJbXzTfWfmDMj36GuUEjtbqZDvUZh",
  "key25": "Aw2TfnrxQLdQsUbwMjZAJBicdDwrt95Hcco4mLwgwf3Q1sEhc6fDu3d8jh8KbfaZJahFXxeaawvTcS5DLVMQPye",
  "key26": "1VYq4KjGU7txT6hxY3Zy7TNTdvbtVCys3N1qkiTxPtJnGxeevVUe3a93GCvJ6k6JnbNn9iFAgMUNmFeVeJXfWxM",
  "key27": "53yoH77jakQ2RmoWsawc3CKgDy9ki56bJttQFBWksZ57sRKLTBMNFnwRgpsrJBVyp9Meh88ZPARRYPEdtP1EZ5WU",
  "key28": "4cBG5RFvKi2YLQ9WN8uUUkbC9VEyLqVnZ8eU2wT18MXZMz3WXKTcpAAC8iTUX9jy6zudmYuhKDKWEFspRjt8sycT",
  "key29": "5MNUeaVWdPkmBzrHKVDQFjwXwDSM4HkQQHMwZKnhs7V5ui3zE5v9nGukoGqwAqy91HiTGCzzYxU4wombGauHnUid",
  "key30": "32htaJqXvLtzo5PXb8bSpt82M8NzDib12T7QUbXozUb1fBksrAqko3B3FuBVnNpRXeNdQJRcsXJyHK7S7dcHtDpv",
  "key31": "4zsv7YTVXPkyvB31vRXbHb8MzYz53ScgXGHTvGJyPsQXSR6Dmyu7C8ZxfDvdxCmTCS91ZgudvK2UDKsLiKiu6m34",
  "key32": "dtd71qC5LWjPqncf4NBYPMzSUGydTgiBWVmfFATeEzsw3T99xeBWWJEetwS72w5eZZqwkQJPMT7Y1cAxtapekf5",
  "key33": "29a83UdreJRnn539oi5bN8VXqhb5kYCoWGH7gB7PReQMyniQczcVSmQxaHsdDTDKmZ2dzKUn6uQU8q274JzTFQsf",
  "key34": "5uLz9NsnhpCZMBVRc3koPPa8GTy9NX3azMyjDyBWThPTc1jGCcU13KtXgLJmugYRcrAmwhnmsBn7f8mGerJFiu7n",
  "key35": "4PSUTT1fTpP2Ua43byVymRkrGWhx3mieNTdduFnY7XrqML28eSkC2STHiZUkEjRVvD55VwS6x6cWMPgSFCNoBgtq",
  "key36": "J1gYjaK7M879sfy6QuAcS93Y7yb2en9eDV8zPdeSEYgmau7uuBp6bDPLrKdJF8a4FJCMZAQYC2p943w9TQP3ZHq",
  "key37": "YJWWcJKCG3uyxrP1enDVQ441tALJd2qdjZ1ZvJmqjTCeLqPcYYWsdH6kB94iKpEHGjwf8oFxhf1bM6jTpWJpU96",
  "key38": "4aVzSyo97NPPhkPkED1XGaixbJHj7UZtNDmGpCL1vz1jcw75BR72cfTzzTuRb4UdyjZfodv1QxQrCWv4ZgULtVZv",
  "key39": "ybHuFFLbqM9y3Tt663rRTXewa6xMy9AGGQrpfsRBc6gcijeoAAduTCV796c5peU8V8zKgjmKFdoepLwYHRA482A",
  "key40": "3oYdFhoKE6RcTsseMcRarhYbSsYsKWEA24auSwBuBpHMvvXMT3GqtbKtxV8GpXgvcN1Hjs1EQkDAKbGgwu2tKAyh"
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
