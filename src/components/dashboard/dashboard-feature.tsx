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
    "2m3hFTEBrRBDjoBxFohXJNB8tuaTKnH97FYsNmEUrGQRFEdvNHvLW7uG8Sr8TBPwgfmAsAToAa8wKRPVpf8Em1xy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j8KvSZqLXmH23aED5Eih9QjzZ31R4xLF4hNmkM398ye837XnxdCH6BZFwCL71DB2ExGfT3m4JvWUoKnVqnNBoL",
  "key1": "3BXsmQt8W2g3tdnt5KGWA7vctVcWWv4FmN1MNygeM8AARmuPRiPZ75UgwSYJb3EXC4pznqrjniLUvEpnHuhkBYzJ",
  "key2": "4kcDCBR3iZ9nkaFnvAt7omCM8wycqkNMPv54uWcBJiN6U8a1QMuMMRg2quPquu3TV337DnTowMh1PqkAvj1hzhZe",
  "key3": "313EqDLoENJcCoSUoCwpL4Uob8j4Ujx6AX1ep7Ge1kY5D9t8sQ5djjHBheL5nC6sSdZC36azyc7pNfU8DKaXjJj8",
  "key4": "23LoPH3fa6ExPaSk7fK1ypshLNzZebRpHoqr5YRGgVw8gsrp8S1XNNq9pdd17sZtumWgxeRk7oytQoWz1fQSAFBh",
  "key5": "4P37N7ngr78yH6fcA9niu3zTgRuZ6zt5pGfh4PuRGFRLLC5TxQLfkpYYC323oK8rKBKD45HTZraUXUiJ7bKW9kgM",
  "key6": "3T9PHjvRX9HKKjHhh4nQsZWoTso3HAYfMkhyG14JayLNAiXSnfuc4ewRBzGXoYwHqq5zYiYN42JhrJFxHQ46NXnZ",
  "key7": "mAyofEA5yY8gB8o2HviZLKpmc9escsHUF4eTLfMk75X8UJmREqBaMwR49EmoU8rJujY22hw4DkbQ9sEDp2GiTFs",
  "key8": "hXx9Nxu2HzcTmuKR27qmUVnQG9nTKqEuaGXWwMusVVUSjKDjSG2Wno219pDLL6eJmoBbHGtbQZhWrWQyCas2JSL",
  "key9": "4t6FhtYWfkPFRYFRrjZhsPu2Px1jxmb7T3iQjT6UVLzgj9YyNauNL2afLfhaBHA9iEJMVh1rhWKp1qhCi7VMPT4n",
  "key10": "4qDTgTTcrS9LAWQfD4Yx35s6vzPJKBsmNujMGN4zKc95rni2wse9M7rhJR7R1CZmeYMuzWK4ufwHz6VodRyFXdK",
  "key11": "3HCQSF97ipNjAnBqaLZj8SFNhU9eusyk4Dm1r2dBhxvus6LDmTWGKxefdPt1XDQ7sHMU2hbCVVDv4yrmq7Mq7MSX",
  "key12": "4LW3HTgRRFjMyse4o6HV7txAx8hNHdCuqCpfNYEZiDEghwycm28yJvJycenvuw7tSYGTK4iraT6DuErn6zWzAGxM",
  "key13": "4CfakJAebKEKvpQ3LrieU1yct6wU29KqT9J428CDrKPrYtu7Uc3qn6YrypMi4wH2zjLWocyepZLTuyo33161zztd",
  "key14": "8ACyyNBYtNHx9mprbbJiAAxETpYXu2qEE7hAbr2Y8nXB9ZrQdb4RHR4ytoSbXDX6XM4XLTfhQNi7STruomoS9qS",
  "key15": "2cCDRb59yNj2183yYet7EVXnsTVFtbY9hUVQqci2wXjbR6vZgCra9otUbwGmskTUWPA5NW3jNzez9vPn6eV4w8Bu",
  "key16": "2sEoGfsiLhst8y6WWwUCcKnmueYWnnAygEq2cCJsJ7rqGMsTdBPjnbgdojVd1HZ6gCE5FHm4Y65b13cgvbc6Nsgm",
  "key17": "3oaZUXPqX2zENr6EmKLWwspBJo42oSGvA7a9DzXz7g6Pv2uP4C2rQvWMpjafLjb9X1RPLmbgXPqwDvBhFMx9SYuJ",
  "key18": "3j9ed3bjhh35mWjhBXQBPp2F7kRSDXXVo1fD9TspZ8GLYqzkAuDrQrswFEmd2uKouXy2xyZmPTeW9senzxXykbva",
  "key19": "4W9WVba9PsYyNG5RiRiLfSvNHz2haPJv9z9ger8fUMHQV63b5ya9cWcYWcQP2aSB2YmTeUmQMPfoFd1fqT3FiCuE",
  "key20": "3MEwww9wCoZEdgsfx7ZfPn5hbsMwtt3YFkeW5jqn7rwKJg1bvTQXAdREsw4AYHhsJC5cqKgP32JUb9pyZMAr3CNv",
  "key21": "64QTCXJCPhnq4nm43awGuaNCuUmYAnaafEFHu3wfBuxzpqfepYn1i6FEggoa4zTM8ZTG9hGj9p3PCUtAfv4W2XJ3",
  "key22": "2num94Rj6B5Brk4oGrrtyUhwmXLEWuqYoDYb1HerdbJtD7hGU4m3tNAhFiFyA6m1ezmfrVFasW9wNwqNguN3yy2R",
  "key23": "2yD6sMtm9WV35YiBUwLvuVQ4YvaM6EVWHRZPMWfeXsf9r1c2gF4CZh1yEWveEY8e7PJ8pCsN6bnz1RctFrhKEniS",
  "key24": "4dLXxzF8CTL5AbMdmtExyXkRXU8FSPkwevwgcZd2s9mFrKR9f5MnRH7XG9Yj4Aa5W6TCU6TDKHgTagjavWkQJeHC",
  "key25": "3DRMPczqykwQnbGUJFKGLVmiLmvFXwEFcdJHFHAU2fe5gYm4Ht8ACotxBm8yM3V4ZwfSeacA8QgkvdG8nsSx3hie",
  "key26": "3UTVbKvW9i3eGvRHfchCNiTffEnS45NjS7qtkBJb3qnmgQFtcj5FzSTBYLqzjaWYfK746vYw8PmgKLGMPwkBtbxp",
  "key27": "5SbJ5Tm5HksjjENvsfFV25CG3F2Q5WQ3cWGoKNAMjTEiorTdVNPwsvJhimSTXrteHutjN26sUX6NJnHkENsPE4qm",
  "key28": "4iD9SWVzNq5QzmPjykRGHEW2ZsdxrVHd2VQzd5jqFEJTNbbjkvMo6gZNVvNy92uxduBsgKeZdPQrTPimCRmQVpXo",
  "key29": "2vM4fzSayVN36fMp9qf3yF8S6tN2TzapceLhC8tsgKH4Lim6R629JerTe49jAAqWiqUZfj6ZMPvoHLLCgYjtc9N5",
  "key30": "5LPYx2sogSz5uB7M4528B5MFWXMYXQAcD2jXaFxfwayytEmoKBP9DUEhpS4a5fzStYtmWrULRENwepcMQc7FXPnH",
  "key31": "61C4ZTXbkzjDAgW4FBnuA9CRSuGqzy8DFNSfA7y9X8r4jfG1cVRRQ6CiKmSCxEnyPJnFLrdgdiSq5ZXJ8BUXRWc",
  "key32": "5182HHDC8SxYcLR2HXCkGp9HFNCzmfCcq1nw3Gtw23bHYcf9uRxWKsnXi71xC2nUumqkzRyVZAJqkrHkoq1SuCpS",
  "key33": "2e6tswCVSnijj1xSRBBSaymCVr8EGN6eZAYGKCgNiZxbpJDFneKtJDaGjBeR7aCgXHkBagYLB5NohWysiGUGpiLB",
  "key34": "3iDwHB2t3fJcvx4GE2RikyPsZbNkXEbuBYubNGFSpQaLnCPkyemZaivQmaYZjoudZ7VMpdhXmgLnAq7mwvPyhytQ"
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
