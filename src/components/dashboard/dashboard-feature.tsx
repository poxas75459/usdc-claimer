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
    "ZnZQdBVGmdy9dA7ZfmcNAyW3VUn1EMoxJk5s4bKYcmXacC6bTSX4byq37wPfAwsfMW2BL9fMUA3nQUgbpYi9mVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vCwvnEBGeGLmwpvuvCYQPSDYmxxcckbHYZ4XCexwfkJKWygB6GAnMoJ1gx7EjwB1eHFQECLaG84XQq4AwxqzFhw",
  "key1": "3yUSTFcizW3Rv7mgUVXuWz5nG9YAEfEro7BmhMk6GiRLyvS8dSVhyTv1cjFKyPQG18TXJXWPv9NqfmaJSMLStgWL",
  "key2": "3ndb2rCpBCwvjC9kC6CvWrq1maDeQbuBicnrz86k6N6B8grfEFe5trsGV8gcYNhpYWZZy1EaoS1mY9puC4UxHxbp",
  "key3": "5XHXcdUbfpY8oDGej5wrn48tkaQQ5cXYqpQyEyVP8ziVgeuu3R2jNhxwwN7y7vrYuH1QnXFKf7bpwjHNyAuTDpPW",
  "key4": "2Ph99GZjinBrMGQJUZ2rkyYmYmxhizqkBK94oPHZwmV7RMAivYzMpuWpmqRrDVz7udoAUjsZdyVixk2drXz1SyRt",
  "key5": "3khCYAhbG6bEW3jcNjSu1NXjLbWk4VmsSKpRMX2gDWeNm4uqaVjvkQ333aAHahpAK6QTBkgPA9hdtzphgaAPexGP",
  "key6": "59atGQimkpwrqRMMYM45XjG5MMpV3T3XktvtkKYD1UB4b8aAnbRxzUYHomUpndSbiYVXJZU1c2zjaPnetxJuGjzu",
  "key7": "2kP9xyx9NorSoVJt1a93x3DgcEGMTgtzS8W3yJfgcz6m6QDXrC93ZT8sZWM69MVcdvLS9mMPSP9ocQK8pcDyyn9t",
  "key8": "64U3B7i1xf3KdgrzVupVU1nzXbTYP2bKh4VNnoch6ksq4u9uyy4WMkitNiXku3htojG61pUysLubY1WbiMYz6buH",
  "key9": "AYdZayqd1KwcHBQdidjxQN3cUBz7eNJu9TU9C2iKJBU9ZDAS8RZPFY6siJf4hHTDcN3PeVKtSa929muogmsHDe6",
  "key10": "3MHPodetQckfJzNVCGLA5J25hxzjxmjoydNQwXXQ3PEc24t76PMPYTvHAKAVYEqrXfqn24PQE2kY6J5v2NwF6V4f",
  "key11": "2MacHUXKTK4qK5WcWQtZZYP6m8vuUCsiZqNVut3E4oJcAfuyFALGmPNoS85wj6H48pJV7M9ZU3iPfcvVkhCHRBUA",
  "key12": "29GRttK6m83msCPUKU1aTYY458yc5upPmxKbuqzxKbpHcqnWQ3ZiDk7M77fbnMvmsCbigSxwdGGCBCypX7iEuYTK",
  "key13": "2pcY8ZvSqaxgVN2ZXqm6w7FQF1XCHAhfwVzZ7MGYuFnCWVqztQPsUxrds9jhMSrxHKivxqHbGR9rTVZBEGQxjZ53",
  "key14": "3vrovwc1DTV73nKCvT5bcrJddCTGxEcsC4aXKB21chpNz85ENM4Ay32mbSmFDchuXQfehxeMpriNb66ghGhNCc2i",
  "key15": "tYWThkkP7CjnSGkUUzeqAdH25Bgr4JTPkrgDNb6njGf3yoGCghziL1yWvxKAhau3mPajHGf4JkHHjQWxsWvUL7K",
  "key16": "2JLB3K8Skb93s4sRvYzinbujfbkV9BY8cf9k4gNgxY9aUa7CBmPxVCoLybm31EVSr4stb7Zy9zgSdFY38yubwoER",
  "key17": "2TXC3EDZcJBnTTtAjdNDigvj9tJeVaz8jVZojw1bMSMNxh8kXBkx8fQLASTDbzWtfvDAbxjMZHeaNp7M4cc23D9Y",
  "key18": "sFfYYHJPYr1Aq1Xn7uVQe3Q7HwJTMQqeGpzthESbMQeAf3YenCF3P1r8XRWTAoXnbbSn3f7DFjkZ6TMCqxPhWEb",
  "key19": "MFnSvxh3CgPaYegpUqb7e7bptopEqTZAAmGdZbBQ9EQHyvcRZYtQDtmssqtaBthsLe8WnVnSRGk71xCQyo3KVXQ",
  "key20": "2qQzxFvBUgAQqu2kwCfr3kCoMTdLNq8CwodGo2Gx6TUXaGLr7FTAnWHwJ1g4YdGMRvVCn4Z7r8ur3EWMvPHhx616",
  "key21": "9XB4vYqJ3HEzyhfsAhGsmJy1WZZJi8Pq4WwYWApHpQcZrkGvSm15pMdjzi1AAgZyMYhithyghxLseof3nEGppkQ",
  "key22": "4ogds2dgNW7qa3oyQ93jeURiFkpn69RkwkJjoGB4XvsasgijY5CGRA3sLVUHkT3aete4LJwkuEKdBD2W1xWhkraW",
  "key23": "3kQ7fG31eNN5e6q2dDLfkPzgL552j1Vi5R141e1YBXpnzBDAXKrp9pwqUqnCw5gftxv9kWLwq4TvMoXpC5dFidQk",
  "key24": "3JTAgsyaBUfixDK4xTCA92txqLwNFGKPmTRTuXcDcBn9xuC3R3tJzi6h1nzaWc9QbWWjFM2WXm6kpbvpQujo8j7N",
  "key25": "3obXLG3rVpK334fDRVhNDyGZWX6SYKUSXErnvmxar5pW7E9hgkbDHQVaDAKx1e3kcbrbLG4Ekv2jtin5Xkj1FTbV",
  "key26": "3Y1jvDvXB1BJiHTuQ6h61WqUR5tJvJsLkF4SRd47bDE7ciPy3p4zBdyYTMQXzVSvrBHF7FJwqZQy5cx7ucQ1Adcd",
  "key27": "5f3X8nKmENvHnrwA3JPwFfPVtowHVYBeTXh7PsTTtUBfk6hKwxdQbnh8mR5r6r6wHnP6ZvNv6F7MQU1xvnmAyGvG",
  "key28": "5U19ETaoPjc82HCFz1LGzg2czD2pmSf6nAuiyEka1nS5yrpTRTX9vADQ3vp3RKn46137jSFSHB1wiiuzKFMWSr42",
  "key29": "4swhzFimfJoqjvWXxpCfh9quux7wYu5CN6ZHurwfkTjfSyGfQzgFgmBeNZmhMJgRjGeP3JKhWUt69hRacmhPpeb",
  "key30": "2j7LuKbeYWX9uEpFt8yHxTjxVxyyRwrTZVtyRstyF64A7hmLzMSri8ep44AHaF1G9GaYMAjAmnwfqzkb2QGZ5qNX",
  "key31": "4s7j7nJ7eEvAoDV8e9i7s9vmRmwynAq5qVmPNbGDNJqzt2ekz9h2p18s8TyL8gbfpSmhPVqKWLHNLJuBvtH98Cxi",
  "key32": "5AmVftT8CwaAqryunNSqRARQPVPWfMqPeQdaezcxMtgqchBr2kW5kyB7cso9gtv1FCPqrSrg6xvR23XA7yCapDq3",
  "key33": "3YX4WpS9T32MwwwBDhAd2KEHAH9NbAcoM4f3LnDo7svnzczbbwUkpqBAZPcYCTtMNJerrGzevsWR17HCcYPJPdcZ",
  "key34": "3iAUnpg5rnT85AZhmEbnBngcV25RMRk9YV8mT1kn7qCUurmygD6ZUvPuEuo21GfxqENQnezzhy9LETLndvVXszxC",
  "key35": "3HTX4rdKn1gmFCKVbGB93fMuuHcUQheKxHtWFSaXytiXPVciqsuNScF5DmRu1RVtuqYnTbQxYWBXTUqgSFQH4yE1",
  "key36": "2cd9HTPCjk846myH8scG3DNF93oe92K29zbawK2J1cnFJWxJEUgaajZfADe66K6idR47v73y46SDmnpgac8LxBoY",
  "key37": "2QCHXQXWZW1h6FLeqWNcFX99m31YbZhFbYenQMbNz7dW4EMJP8KtcDYzXgevzNJwRt6Y4fSjUQ2hHxF4LiP28nyX",
  "key38": "2swBToyn1zaPoTuq6chSDT8SWJtJphmdU5LLdiXCLda4M61ojRVM73ow7CHgC6vkDDH6Xuvfv626b9SefqFR6th2",
  "key39": "5EPQcFoiaE1CYJvvQJQjWC2LJK7iQizQAoQRSXjLTtcbuae8EiBkG8zF2GVcZ7Qkd1GjHW5te95HKQPn57SU5LZw"
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
