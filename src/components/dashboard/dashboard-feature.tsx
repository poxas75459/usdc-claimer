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
    "2u5NibCfJckk1AymCy4umCFRrvSJR6U1DdckTHvatzjJVv2j9Va55mJsqRa1fnfu8XG6uCgHFr9csFAduo2TGfkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t1MmRPA9p87Z1EXMh3aBcR4k3ctaZUn5B7mveuSLFk2MEkzvJXSYrUnC7vaHVpXMkmeRNQq88i5FKUqbu64m1b",
  "key1": "3e1MKTbuboFkrQfkFQrKGU2uJmCghYee4DLgRP1r39M1htjTbTwPapjVX1oj9BFaUtKATJByzALmARQ7SxxwTDL1",
  "key2": "2LPCma2qJUqA8Feknr2JTY6jceNbK7N3Bx1EvuP1RGu5CWLBgTqVmUbpEEpBdKBE2rZqRHw5a5jRDuRo7QyCwEmD",
  "key3": "4W2fzmXfwyUUXZkN4yhjwk6qxixeLJnmCmrKZsYxrDzunhKe1rtrtGUjETHrscaD5eCsa4a1CdtBkY5Jr54JhDXn",
  "key4": "2RPUmCwkdeP7Dq39ij79jUL72U7hpqD6SrNn5acrjzX2vvfpXe2BGq2yJLDX61TYfR2AquMjJdDWfGbxTdWabhCj",
  "key5": "5Gs3Z81PkgzLYJXGHZauVDUG4aDAtZwFKQ4FTUfhjNHF6THUEcqjejCjKgnA23vjTagFfys4dr7E5PdmzjTPLufx",
  "key6": "35M1KeF2WY412PotStUd1cS9i8WZRU1tv4PnsGky8q6Ajh6B4DGbKmG9euCtyoWDBK6Zh3v3HerkDfakicfDmHg7",
  "key7": "5H8S28LT6mn5b3ZcwadhY1ZrtrNCwuBMA4sg1BUiAprFmCB8wNmwNLBLpshF9oyeEzxGcoy4b5uKH6hgbJ7gYe8g",
  "key8": "5EMtkbj3CditCAejWt6siua8KrgrPmsEyarGAFjsMudYdbVXPH2emeddSBKQpFJRYg1q9JteugwHzHqFSASutfCB",
  "key9": "5t8tCsZa7Tc9RvsRWzvGPHtRrKaC2ircGL8a4RjyS83rMucu1Js8aSmPTZfoeuvzR8SXnAS1jQ1UAj1KeQziArj5",
  "key10": "2GxnFBhpm5JtqZAm8m3ZrXh7oKDjradsHofMjtk1B9CQCmDzN8fnesQ5E15xvJZihvY4E7UzW7n5gTo97Aq8uKG9",
  "key11": "5bZk7o5czCRavnpvpEiLPbNj9uGMj76jgbP27ArqPG2FmtHXubgjK4bcicv4RMEa6ajK24isHr8XhDoi2a7DbCMc",
  "key12": "5PzPNivfbRpL9F1kTBSYWB8TSHw1nZkwb9fUuBb4mUWygxzpAzkNTEWXt1KaMdtXcDnH8qoAKZWzr5ZBhEYEsSgn",
  "key13": "2tC9s3wazR7kM2wBtnD1XTM7fTCViVgPHQNCHqeunZ7uWS82AFydVS5C4mhFYxbrYt4JufVakhMXZErNWz51imAV",
  "key14": "3PoMAykFwLXAT4udPXFtMstqts9aNrDWawVXf9svs2qyrc6x43EV9eouQHV3ZU93p5mrwY3nUo94oFdsf3gddeVu",
  "key15": "5XKPtBqcg7vvK2WtzffhKr9pUiEGUB5NWq11phXm4edWm6jPf4X2nhSvynpEhPvf8n5s8mb53X2H4VWXjb4inruu",
  "key16": "2DiDeZqSewUXCD97WQSNovcvzg5vSz3ZNXELhAt46832hUZaBVCsMUgreeN7ooMdau7NpwQGwgcTZLn8xPCj897H",
  "key17": "2suR7Rc6fv9E4geHcxumkDyNA4g4anHAcJ4ozALecxwP2aLdx4MLq5SZmumDgu6qRYKDsE8QmonoZboiQc5XyXgw",
  "key18": "2DKMz1bSj4MFVaqFmy6BhkGyofxtyGtog9qP7zLu6KbArwngNK3SA6eGCg4RTxyZmPcpgAVHPURKm7aZseBtkDga",
  "key19": "5W5seAKUeQYBbx5E2LwzHgDPXsfSg4LHZC8piyEqPHMQQuAVi1xn2f6Bn9HVGGcvJdbbwmTakhzTivDReF82pxKn",
  "key20": "3iWeSsY1rVHZBfhHg9QoGuTeZFBke5KKHDpwpwi92M6Jh6MzsywvHjqDgymqgWc1tXs6yJ9iX1HLLY8dB1QnFDb7",
  "key21": "5WA6r1xiQahKijLnzmgyPqLb3U7RRkbxtEEW6xekPni8AKGx9sKChCjPPZT9jwb8jq3gixjgLqkW5D3eEHvadtm6",
  "key22": "4TyfXti781JaM13P3XHufAWj78MBb96bHx4uGiWpqNur51ZUpxFGBHVp4h6Q7iv4VsFBTUZp5wzrmuUPB5KGVief",
  "key23": "4BR9iH4dYgVgErVgDrKKbxvn9r1MPSwKy8vkwofkyP3GvdaMG9t3aJGkLN7Rvn97YqwYoRxLgaeP5mw4R1TXgjjX",
  "key24": "3cMeQ682SUV71pAFan6FVn3jUfiQ1r8MXHpjq4Hr2Kr38e3S2iH6NMYo6kMqtvFdNrFjm2toBYbGdE7WZjEkAUBM",
  "key25": "shyWQ4sdm4WsxcxMyRghU61mnCH1cy2VN6Y4tbuiq3ziCWtH5r77eJYdE8s7VBXY3Dk8mvrJ65McRyeSAXsU1Je",
  "key26": "3b8B2n6yNR9NuCjeQ6oZ8rMDe3FH5vptKbPJSZyspLjcrym9r2HgrRZBNFkXZr4KrQ1dJ5pqDpXXkLfS3M8pAzUV",
  "key27": "4moq6ggTU6Ew1w3Jnu37j9K244YbNbjhFWFNXofEHjmMwnbf5DMkh447m99s2XafAYA27ttcyRVJkugK4z8FBj6d",
  "key28": "24kgbYkAgcQbBVpuM5robm9dAmLerTkqXN5PJoYyvWJooDqaXJtJQfYtzkL2Zffnt5db9xj22fFUgRZvvdfAHuBM",
  "key29": "2XBuyhzCMCzrpiJhpdVRZLcDgio2BtiPG8VDYk391KehCR5retiiQemnpaYm5JAiR2hGpo8gPRusVa1k3mw1KQuS",
  "key30": "2SbKWJ4TcZuSpM8KbEFrHHm9uTjk8kqvqQ8aGqaLteBzrS5W7vvmfaZ1mUsh4Shgi9xY9BRT92BVAtPDW4TW3exm",
  "key31": "4GVMMuCsrvy1HtwDFnm587mhKNYXodPY6x8zTYy7J4P8saAnnuRLDMBL7AW1ymy2d7xzXcuRmmMYy7KmTN9Kwxus",
  "key32": "4ZSUrP385svW5nMjQrpTwaxYhrMJ6akQQAUNPznBwQLNitFrGj2nUeqhtT2PHUkzfWFJ9F3QMuWH8KxGcsaqzRNx",
  "key33": "33pGqH3Gbazp9yQ6iEoi225qekCwiRATgqCbcmpnQiX8AiN9SaGgmd7Pwm2rcocCjGH2GcH3Ea1PwnpC5kLWxBiS",
  "key34": "4ragb9EhLVtGvm45uaamkr3xFRNyG1RAmAiRzsa6z2FYS3oCNTMCcY62wFzTmbLhLrkXZMmzr2dQYhAw9AhCqhxY",
  "key35": "3Sy9vwWjKDNpPFKdkqgDAQomVCxNLzreDYxodAEbgn9D2WpyupGETfJpHX77tpcu6vwB55AmmStnruiWCj1BDZNY",
  "key36": "54ZdUfw6Jb4yM7MCDYEVssu6gWJCfuy8uoHHkkm33xAiGUvQZaou3UpGo2BW3zofVhG3uMZGs31SKnzGcjUSyYw7",
  "key37": "4AeqaCLbpRaSJryJiYGLCnXc9829ysp2YFKp9WK3rm6Wo69i3tddw1LdQNLB7gYGpsNDHEaWAC6RGjRjgXj8vYPa",
  "key38": "vHBh1feJ3DYp9sPszeKjvaKywTjVJ9hTJUZFDvsYh9hDpvsuGBcXjvxddJWCqR3i4y3QrW2Ynr85T8P3SBhgi9C",
  "key39": "4h75369BHzi2RNWsCFWDvkbs1vWk7k9JeHjanQbdiyoMYoRkjsEdLEvASHqDVjFZQbd6sRus7yeMLcSMeL3x3k7F",
  "key40": "3jQ1jW3YmGeHMgNoWFt86WP86yyqrJfE4yrHiRRGk4AWzsbRzAc6KhTxCo1fLLurhp7xKb4mikiM13kpGa7k4REy",
  "key41": "2ddnEA8LiJe59RhuZMRXUFnjG6FTg3ZR6CFuj8NPX5TtY878ooYaHKyzCg4qkB7XPuxz4w35kfm7EDQsnL1df8Em",
  "key42": "47N3yj3r2xQUkDX9y1FcewJAM16GVfT1iBqc1qZNY88tDjRM2scE2XhexeERYoosuhnBKjW1zE6rX6s2LsYctTM7",
  "key43": "3LhRmP8KVRQ5Mi6xQJjnuN7zk9iANr9WaiEFcUtjZ6stm3z5fpGRkcEbnrzf5eWwc3Pmcut6uGA4VfDBJM1M1K9p"
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
