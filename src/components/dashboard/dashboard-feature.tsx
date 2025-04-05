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
    "VNbe9APZkHMUjHD2d3LbkNJjptqgFtVXBY5kNh8fNm3mbssVrx8siMdxAjRiGrkbvo3vWqgs7knfskqtcrzf1Mb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VK5DhtfNMWV3NBqKsRYnGyBG5h7hzJwTfjuZh1wVDb6FvxFmveSaLH7awRffymBkS7kgw2RPN5Jypvhtn1UnFXU",
  "key1": "5uMqCoXTkH4o5oXDQ1rLucER8T2nJribBFQ2rfnu2PPNDK5cZoTpwfYS74JbiSTwoiD9ecoW65M49mJ6Ae3kdWSG",
  "key2": "3VUHRRYQtq7NPhoq4C3TFaHCXiypFMoq85Lx43YBkAH99PZgGDMMQr67phXiq7Mg7a3YB8pxnmLrgwHYHqbYLmYB",
  "key3": "3YQA99nbkekGeUajFwSMmzi6eAxKbM99zr7b51Q1pwe2QQ5AKjsT2T2K4vosuPZy6MpePKbNKaPnYHBx8FZ5dPPU",
  "key4": "eJ4ssFzWNs7HjB899HLSogoSa5dD4MVJhoyuRpbinq6jEd83FzMYVPTBrjcWtvWBenSmwqn1o8n3o1VVcZP7uL4",
  "key5": "5G8Ei3R5dGVMoX5uFHUPQbQ8S4EwPEy8ugtJ16oQnfcHmsMkdLQ6CSA9pThiduC1CVPtnYVioNpYnKNybpiTDzrG",
  "key6": "3BMYtMwaxwcDWvsMzxJKoYY6oSqS6mXQQtXqMCmnJhUtYpKhbv7mqtdNwEtyrG9dcg1nk3EhzA4HqYtrNfasuteb",
  "key7": "f5nDdv9HdteAavhJ6NFjG7ytWMBkFJcHUePjkLJmKXQAmD43UjfLXCPijsYHVwPhLLEQHfU5fUAPLwwkoN6RvEH",
  "key8": "37eDkGgFWUW1yTrM4XJm67NenYFizmSsBAXs4cxX2KJ6pZtYJt4DmCg1P1wFqg1dJrji7Fw2VVtBhLsVtKvo2xpv",
  "key9": "QMBNMd9gU1wQkuiM4DGmuck5PFVnaomhEc83Pisp4r8eqBqpP8WcWx8QfyCYUVUxSNo5Ks4PEFhvAXXaPgJQCGo",
  "key10": "3u6LZRkpE573moqFhCT61uxqZ7dT6a4YpmfDj2kKQaJKhYHgkjWwmy4dVoMACCFGMRxyJH9xT9w6JQdrfp1xWhPc",
  "key11": "58eNZYocsGakRMM6fRw6wdEjhkXXLtN52X3977UnYUY5oYHe5eGcby9jvHAxhscW35CNTAGF2ZNidzETFihMxMZM",
  "key12": "4z6esBY41AbTWJVVGiCwtDVFzC2WFK6kBfysFSD6bP8FAgz49Bw5QvDDzG4BgDC1vuBtgn1MdmXBaw2eqfdGvxdT",
  "key13": "4uEWXF7vbBNPqNvnQ8CS5AM4aJ4eysLymu8wr6uLGcLdhnzdCtEYQJcpbhbhFPKsugg7TpTHPViV7tQcaT91BPUx",
  "key14": "4Qmokz4ZNcNZyjnRRuNWm9zGHuDMXZp3YCVD1NSNjt3VNpZthcA4PPMmjPFEANaqWfGHq8hFuZFXG8j4pLG86fCZ",
  "key15": "3iEih3Hz3ZBXq9yrZkZL93WXyLPXSA5qTrsm1fhvC63DauvdJdR8ZrsbwtppqxXBNxXfexQRDvHiyMc4L4mrgDnr",
  "key16": "tLX4WuXwZqqxn8oUXy7YdLrf6YvRE6RChV5sskRvBQVgVdhohfXphByhAHznMfD7ueo9MfEKbMQJhJPMtPwJYvt",
  "key17": "4yvRur7pYLZoghMM4rBDkWRrnfxZEaZzci24vgpJDcKjNC5E1fDs2UVsVRrixijrAqiASoscDCSnt5EdyGSZKvp3",
  "key18": "3ii7xsyxW1zV9kJGwwGDymW5Hfmi1xqDTFab2vEYGU7tKp4uTUCiuTiMFAadgr1NudoYSky3wdWsTvvKdNTojpkS",
  "key19": "3h4JEucQ9KiKoVQgC2PGHi58fRr7gBzpZPvFq8T6P4UxmMchZaNrzBCitqbDH6CL53qALmNvFbC6cPhtnE2jzbTQ",
  "key20": "3hd5SSmiFu2MjxJub2dQoGm7XGiSr54BzTK7hgUSJjKpdmUD2tJ5kByK8S3uzxFjxaB3xaxYD9qxn9frkncnaew",
  "key21": "416pb2LGHuzJYbKX6iRGdBG6CcVGuxE8XfZR6cvGSYkrshQvBjbGgch5LAkCsy2btMkW895DLV56qzQH185EULcQ",
  "key22": "9Y8KD6Rn3Mm5jgyE1WHydqFgtjzR1WK1YfegPidmfiCLTSikUaBqma9yx8xu55UswtZbWYDc4SkMea8UrZDUzkW",
  "key23": "2CmiHPD4eSCgMS2Lz1UxiuWjkVNCUaVDNxj9uq12VqeAvw8weWpmHRihuvxe5rniRXH2fDUAmVMi8aFLkjNkbHm1",
  "key24": "2c8rGwb7xWYgX1jMiVoMYWjoKHzZtAkQoQFEgSv9ti3SnBtDDejaK22oL1WJQ8cmd9f36vgZPA4YBuVupg1a9KmC",
  "key25": "3KWXc6uyGECHkXWM5jzsT4dBPi7PSNzoAdMMswKWzCWrHCGQwhTm51zcGJbDgx1U1e6wAMJqJ9mJ8ByPB1aeoNd9",
  "key26": "DFofo9C6LERn7Ty2cXcXh12nPmN7XUWC15RxzrbSYtcLmaeUNTpbCXQBct7hnMzdS4C4UHe82RncKi6SoKfzWgw",
  "key27": "3BRCQvuZfU6MKxcJ4xFytiMAarBzNUdHt6qtpNjAJ9yVtfGuakz7rMGjyGMgtVREMw2TUPXMJsPXPtFsh7NWkefY",
  "key28": "2u5nWsk9dD6XHdoCvnmCttB2i3oob6DoESpLFox2p7sb34ZtUispmJyKGms7U18XUvHnJJjptUspT3711Vxo6WWM",
  "key29": "5wr6e1Vr4w2sKU6HsQkG1FEymnwU4yjYifSgywaG6syqxCtpZp6EL9tPmoqAjAw3Pgi5gDNDTNUvVZThTLP8QAZK",
  "key30": "58ahGWFD1iKRqowPSdHBeC8PpoCFkKNGsotw9PWjyswPmZLAZLzsmjyvGgphA8UUAtNGhU2FzGknndbpQNBcR6hw",
  "key31": "3ovABHA1EAWnNeLVWbFfjczYC3DdyYCwkKywsKQTqNCCo3CAWMsvrr33LLNk41yBJ4kpQGmDckCd8LmbYon9qAsz",
  "key32": "bodCQunh3unW2TiqXN6fa12f9m56WoCTwVrw1Lr7CiMNvxqDSUypnXdQnTfghwnom8AxuKDxsxqeLxY6GguTPxN",
  "key33": "Y1NPk2bCpfNBnb8TRpX21EUfcXCc59izUYeyWQ7WWdFiabgauTWsdxvgz4YJSwQd21gAztZDagn2x3bEZJ3F9m5",
  "key34": "4o6MFACSJFG8iGShnNsVGMRY73wQuSvVfPSgT7r6zUgRoN7QEoxDhVC6Dgjaf98JZiwRgK9RGoDzR3ULpj8eSwnp",
  "key35": "421rhbJDorRjuCn6b38J3CNUvcEHc3Hxp9PiaND7b1JNxvj4LRdD6AKhccFeqzJjy1pLRvfgjLyYTYEDCbkXyeqW",
  "key36": "2Kif8ABkGS6wLpyRyrnzJRPT4rfy8cfD7FgGfFUahPHEpR8Bdns3cbQTG2FQrkJhWCAgKQBWC5DrBTA9XqqNKWch",
  "key37": "3MSa75naA5n4uUEzuVU5Kp6DZuf1xyjaonNZePTewtWC15h8tHjjLrtVWziKmZcxgFz5bviDksfAHbDAokdtLhhM",
  "key38": "5B6NruaEsg76QVAC1fzSrsr59jcCYRqXS4Rwy82LXq5XaAdK55dnYeapZamR7yDH47GVEXrcL7TRjpNgmWcMMVGZ",
  "key39": "3EqXzGHLWwonSKLM5krpvDdPPczrsdmtkQBG12Lgo1sxwdnPDYjB4Weavgh2uDKKz6u48ds2MtY8fR1XZn5gttiP",
  "key40": "4H9jiC8rnAsCP8YJbg95gHdTBwL9cp3eR6PUbhTgJt16Dny4ATuh5T8BJrU3X2y1kKmakVH1KSk2HS7hE15RE1bU"
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
