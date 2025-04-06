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
    "3L3tKBXiBJ3DL4aFkDzredSCXg9CQgippAnmt3QBkovwXg7vMjsaU14RgeXmNZS1tAxrtEFiEbtq7pSG7u7ZpVgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RwUM1ciugz8ZyLYamYA8fE7fzmRkkVFRFttK76MhfHw3xeVh88wzvrQtMBi7NZQfvrmo2MexzxF1ejy4ZLEw7Fe",
  "key1": "3mwHYtwkhxt8CJfPUEypu1ANfw21SqX1vdbUzTvikqNUW4UCxD6tBhb8KX41FBzq89ZJHtDzwoDeLLxTVadzghae",
  "key2": "2jZskg7PNoV9CDk8esrQ3sUo6NJaCe3RHwkH6R3yiAjbCbPecPPN5wx6Py9jJZzjr4cJmpMh6qnK9L326iESoX8D",
  "key3": "37BFxTUkZ7WTRxWxq68VQHKGoUFWZzFnczoq8ejuB5R8F89Eoz78AxrEWw5Q4Ays2gAVUKDc1eh8nCCxGnaXn5bS",
  "key4": "5Q7DD2LbwLmBwDzHMENfLVHoXQE7juahcYM6NHd9X9Sj1pgZFjWLrnfmBzcsquRkroQHAjr8cgKLPHMdArZXisz8",
  "key5": "vUT26e8GdJ9jXPTiVdychj4cVbXALpsPo6vPCnQLtoAQQNcFc6j9aycGj14myH5aX4ww8ahHGwEbrzfnfnzsm4t",
  "key6": "5MP8XzqreULPRjU8Q3Jztx1Yi8pbr9v1xtqCV1GnHbdnXGuLfea9Wmu1Dw3ckqmDF671kQahH2ysx15fRaD2UprV",
  "key7": "52gDqba3AfjurpgH6mmY3qiJYcPzCH6GzaG3xLfcwtDAmLtTsLVskmyHaTSc2sQMyrsaWEkrpRgk6BafAVqe4LUZ",
  "key8": "8As5FCQW9hKvHWGNhWVsDFe2Pxnwud9sDEFzm12ukLqc8j3e6KGKarDK371FUJ2et8oMuHDGZyi83YLYSyJGBWj",
  "key9": "4bAQjW4vhh9RwUGeR8fz1UX26oYX6VsP4x4hPaum57sWaPFVb3s4ueF22U1fzftcWMzvZiHrH3Ny66KfBc772tRn",
  "key10": "29QbL4m6dAKkSuqtRtMGXcviULvm2VVPKG6RHmVdYnte6Z3Xqmgn9ZJprHUvHC3VuCzh2Y94umxSU5P5Lm2iPNGm",
  "key11": "3VpHPWk5xvRCaLQtqGBZTEAGhwW8mMEQwUSsugxJfDkLiHZBdjF5Jd2rj4oXfcPL7EXQySqhxRywx3kwtUfJ1KtL",
  "key12": "46xjiH1YnsD3jYn38oxazWvCtkdBHCBgt6enTL6t8vpYBtJJ18Rqjw1nybTCa16fCvnqZxGksq2UiprrHHnwBe7C",
  "key13": "33JVKLsEwUop4WcPcBTS9VcL6GR8fdygbbNEbmRHQaFjf4yp23m4t6spXmmfKLHa1vAWNcckL35NnRVBGTckAxDw",
  "key14": "2cVPQDJsS2ceaP7Ndp4NFt1M4kkukdQSZuTXmuS5QZmHxaK2C6xdwb2rp5VnkHxgFP81e1T5mAvcen4aTyZxTunP",
  "key15": "2wZUwNWu3emsKwpZjCZn3TKgykc6UqGb2bxx8aEnCi6XkRuM4L2zqZYeCJBNsCY5DWk816WfANHL7sXMRHsanShm",
  "key16": "2yPgs4ZXtPbgzuK4gSujQvfYBAbifhXiGF4P3b4mCbVnVDUsVA4w6i1JEGxtGx5816KZdabLjZmMSTKqiBcUSnpe",
  "key17": "2LVrQBmYFJUE3RxduDJR23EKj5hgEATVGvhN43ooeBAFqadJPfYnmjUkgdzzGZxXPEErMNpniVmGaTEnHcFcDuxf",
  "key18": "5dEm6HV2yUthPnUW3Qhqvxia8tpDuLEgdYp9Ay4fijVLWAu5acKPt14EVdGyYyJXZJnEPNZw9uZUBBpyhH6CYijW",
  "key19": "3dpAdt3cCqVcJQ7RccTyHoHn24MyTjgo73nTNbaG4UaPuyghhk7JiU1oD5HuhNjzWH3wmwwkiqjM9WTyRT7Qsrjn",
  "key20": "NJwARhiodMGNjmaCCmMeJxs1SBKPRCuVeNqpXrnGXbye1CJoKuePfGB79zXHCe8BmAv3EUriMw6DT45Ba6qmdAb",
  "key21": "5ccRB788PRfB4864jC8qkQ5fd9rJiSQqiFMCEqbi7XbgGN5sTZr1oeCGhcDde7YSN44S6rJaLmNSUDagZy7DEV6T",
  "key22": "2ScCDhaGvU15qxEQ8BMsfxyYpbGj5cz3ntzorjaStFvyGCMN2tZaf8y6iS7UTzDvvueLrDDNmFgPeAZj4b5nwn6d",
  "key23": "2q8aoJ3n1WpCwnsHtqy15X7v3fH2E3uyx7cHptD4TGhbZdecoDoukqGk9bicShnDjzosbrN5hCkiN3utR7VYDFPX",
  "key24": "3SG3krrKzVWPyTYpnx2sNPXvtebSEKDH41M61YQ44nbaxVkaKPG6c3RB35orH3saX8bdVSwyNH6eF5fUPqCJNfdE",
  "key25": "3w3NDZ9xr2DiiCLMaDyvqNMYRNva47FcwS2pEv7Qb1t9TUaqFPHNaqHjKd2Mo1UaZ7T6ZfNWzCMzueeHYSFhC6nh",
  "key26": "621a1USaDutk5QLWzsfZxMCBCTkYAGiWdyTPiEiJZTFJeDhKLvx37n5NYTWL3Kcy4Dm2r7TBckb8tuYw7ZfJp6dJ"
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
