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
    "2va3dLhg1U3phoZrmumbukCNoPBinUPDVK4v1rFSQGk4YzzkAgisUiZhKDdLzioHb21a36Da2f7tdg5mPg6e8SH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34FpbJ6LEPunqiTZXuBYcEumAYUGyBLgVT48sB3Em3cvfdLesQW3CRTHVNdYAVB8MestcFEn7VQ34BcSB4fwWw7D",
  "key1": "4CcYcrqDywwx18KZd8b7h536WPMWxXfSFoNXtLynXq14VkyGTaaTibkonMDADVF8MjKx8FhS6XJgTTtuN5Koh4N8",
  "key2": "5GbAwudWRMuLfRNai9cz7gMzEAk9qR5ZLKQ5C8eGwd1MacpepgYuSU6r54PneQ5ASUjrWZ1MJAYKVj71npb8GbN9",
  "key3": "ccyNxryJA7AVJvZerSwRdFW7PpWVPb18tzD92hqM7YT2MhvwS4rpWtARWgdwhBmMgfM3SGRMfnZJitXFrb2KZfx",
  "key4": "3x1KG8kqUhDgBjSPV6JAT4YJtMQF1mLMSYcaKqcgitw52pn9eMjQ5wPe5Ehnw5NqXpL9orqxnz8Hrgb2x2MeFxZm",
  "key5": "4KHJyyav7B9BRdZ4ctvK2KSkoDvs8gTG6tTU6JbyC2VsrTHjMYEXfLF6q7pPtrsGMXwAD9UqQeRhSLpFzTXk4gWW",
  "key6": "5vvn2zY9husgZU8DUBJiJMCGvRh7MVbkMMBrDLotqvw1i4dq3P7QU5e45qWDDE1aKPiv3hG8GDuwwGLvQnasMRML",
  "key7": "3zjMqCkfbYNqRvYJT6VJfMzv3TH3f2r5xR7aEzPVf7JxnAPzyRHvW4bqMtV2xeo98aqtNQsibVGE3QZwYYwBLEx4",
  "key8": "5SnY2xAijJ6Ss3v8rUx9ZknidcKHuPTZBSvmhiJESxmi1VQJWgebsrWmcneQa5nCmbhoCVtD9qKYiqxUp6YRaB2K",
  "key9": "24R7wbVmRCo9JjXxuNuNDq4Y6EjS73AmDqhgV2bsuJ6rV44CWepyrPGhVRZay7PxMj2gR2PM8i5UNt4YAirecDP4",
  "key10": "2tSXgzdJfPXSg1Pr3sQyEeygRu46euJHmpvY5ywc3B6nBCbgEC3yq96etbZ2enRobkY7QvkJKQt7xErGStrZKguj",
  "key11": "5d9XRpZiwcgMvdR2Q42qBDDCKpcTGi9W1yRd3o4X22tYTDmmXtjt8wgYHSman6fr1Rfs9zbqS5GQAwde8F9zc3p8",
  "key12": "26qDcfegGtVeoYsLTeBmDmSGFM7PgptQPfYS9cUZzEKqqA6HghfJh6MEeTJ8LfbvZeU2YwHdCdfU1r8bLp5ySicB",
  "key13": "43p9EeruFPn5ixkmHdZ2Rw7Zz9t9LzdxzUDCjhkaH5d4MtPQxdi2u1LgBn5LSQpPzMx7UE4WeJARcgFWEVjqJPBp",
  "key14": "4tGymmkadx7xAjZxZ1XkNMk3bAUdMrnVigdDWZGRHR7CsHHbffiJZUTcSxkaMAUjxeARNANgWdhHSZPVQoMEVNHu",
  "key15": "4Cth18dVUUKroeF2VNqjgWDqcRpRsjHADKiBPyQF8LgmgrWM73R2pkphtgGLewH1cUUNq9dmozbP4ZBiG77ou3We",
  "key16": "3Nh9XEnJV9xYZmdmqgE7RhVo3BDrMbes8omXd8nHMrLxFS1Y4ShFoDvnrE5m7mCJ3NXyeg6H3kYkBzTefvva7qcw",
  "key17": "2Qxu3eBGNTxxussb2yqBwzeRBwQt19WPJ2yTzpCxfajoixcX2FHZKJS1VM3bgZLHskAumcWZ9SwEdE6UpUWPHeDN",
  "key18": "5npAMdCnTxe8TEkAVUCSeCmz8irNZcbDxayneJHdWBb24sYvRdei5xCZUCwQ41ERtmBitSTNryyqcRLhUttRrof2",
  "key19": "3N2KUpqDZGAJUVEz8xzXtFAX87kKNFuKHzd5mQg5r42LdYRwpP642DdaoPNcxoSaTjVjoEGQGR4t9sNgLghLAx2u",
  "key20": "2EwU8fyW35PrLdcWBb2H5JHkTCL4EqrkRzNHkxa6bVQmckz5SzjjDM4EBKDJksrUgYcBV37fWnTtNbh4XoidYxcs",
  "key21": "5SqeGVhTSYkPB2wrfmUGZm8u5Zqn9JdBwEFpLh39TKZc3eMUmJ5hpUhnceA8F8g9BCD5MyT1MjhRS1f1zhkMGiPn",
  "key22": "3E6ieU3NSHz8U7DnTTYxyeTM31estiBXc1Y4MVqU2AUUWzYQVsQT642C4pK5hvdR8fDD3JVHYnuibGNrbQwYMk3W",
  "key23": "2KxZ3caXcyVhHsCcYCfx9Jh8Qg9Tcv45wzXGvydsACLXmTorh5WcGTWBss5xwdPtu8K7kKhgZmpRi1YfoswMc1gk",
  "key24": "57wZAPxH3VD1yXEiGvZ3zSHs7PsXESt8FsX2gmbcv7BfmfYiPDMehLFnYzVNdTBeM11X4fCHMBhLe5p7hqQ2ryYy",
  "key25": "4ogZcm9XsyfgBaMG3JmhdQ7tnCfRoU66eraPkaZirXnGdR3CYHKsewv3yfonxJFnU4R6Ls4vhVWdvcdu2a9iuCC3",
  "key26": "3iE1DpvDoQydNKKKYJkZ4MLwHMQVHYoCGusmFN2o88CzpAhFVTnwrm4YRb7DoMSRUmZAQotiYa6q5mVHS9kwEH7v",
  "key27": "5Pf2sAYUaMmfY6PX84qn3osVfj3nFLUMcTki4BFsJM5yGsVEAQxktWCyRkM2sUpVzbo6setX9N1mbeo7aEGECqge",
  "key28": "4BxxRL525gzDXXa66qFoNPUa56eC7WexkqQuNshegbTu8wcgzKfoGQ9cDywAtxadvrbEAPxTC5vkNcc2XrELLa3x",
  "key29": "4cjCFW7xU7rTztDTjf1BrwiPe76jWnBbDfYr4URNno7gsJgd6Qr93saqJDbdEfhXT1w4ECptG7nZ18fZWTw9N8mF",
  "key30": "zJa66vFtMickQVegRnjz1TKEbBno4rbMkwPdUy74KPJqeYSzPPrfRzJrvoUUi9NRqxAeanoxpTPmSJQnNC7u9ZA",
  "key31": "4XrHWde4sW2t743tbS8UVNquJQLsLMeMQLNH5Ln8ge86tZD61nmFCyqpr1N7kzLzxEkNXzF3zThNYq6PDgvahQ21",
  "key32": "5Rjz1NnH6cNE4d31MM1ABur6pmYfQKZKNHkjQ5jE4hJ3ab96eHhnpkpipQxpyTS3c6yMkphqWvYKcRPoUAZyQBv3",
  "key33": "43Q54jFKrxAU7VmEWFLsoW1dVfrdGRZsB7J2T5ujDPnkt1XehnTzFB3KouqunFjumpYrbwD9RckeyPos5o8Us3t1",
  "key34": "4oQxRLqYTZc96UA7K1rQyyA5aQNqCgqDWAdfpZoryUJ1NXPjA375zVELcbpnD7W3HWPtkdfvSgTT5abSQRns4zn6",
  "key35": "D6ADLirLxtq8Nfng2aJGZxWts1UBtT4tx2FpxBb2rw8vw8FksvwgXVcrJ48UYBMdk4Xot593vpvRTxPwssKHArz",
  "key36": "5ZPPHMaGSeUwpXAz1ggVDdZLCVTh5yf8tqjxSvzWDYuPjgob7wiviUenpqUK7gmNmvBpyeKPjFoKSZ7944AhUbSL",
  "key37": "4tRZ9WpGb9rSqFJSVvmgYot8xV24SXog6MtdvJrfqYyEbd4BSyyD4Hnqi5jomGniwaNXmZYZ7wWP41jJGj8Dcime"
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
