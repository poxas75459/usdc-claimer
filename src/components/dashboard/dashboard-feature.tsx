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
    "2g1BPi2PxYgGp8n919t8dB8yJLpHxHXoXESr4ycxm6c1pKDw3AddghJjoYx8XW4NXHBtzfVhUBDnS3ZD9pLsKstn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YF92F2fYcdsdBV9kroGKWifJSJT1C7UCfjJuYcZeGVTVkh1p7PYPfV4ReYBhivEvU7toPXumAxErfx3pJSvC877",
  "key1": "62hNMugqTGfiWeXjQ72F3EigMaXsQDj96P5kDXfgvRi5KL7qhm13YRHvoMRFm313hWJSoHqHZr22f2A6Um8SJ6J9",
  "key2": "3Nd6sRapKp5NgUAWxjLfBLowD9377Kv4nYVje9i1gHbzp2zmLBZx35jjPteN5EhCeHoYYRokuAYhRzwvWbdAVbS9",
  "key3": "4VciAPBdfXje4pznGG1YCQGXDVRNrwmrgLjCfQ2D85r3ve9GMYmUaGd587cwLZBDzvWTLetRb6fxvyHGWehY6daq",
  "key4": "z9NtikchAXgsBLA2WACzVxq6Q89tqfbuA1yX51MM2HjRHcFJqwgmZ7PwSeMTbzYpccHjPJC4mu7prthoFh6QC2W",
  "key5": "tyXNnpFSEHrtJuWBY68AVBbUfeQ9y4KThitC43TK3d4Nb9Pg7yU985NhY65PES48Nfb6RMcYq4zUzf3QQ8p1P5k",
  "key6": "2KzqX86EHZZDY1PRQMhmih8TSKCUFeEvCUcYSKQzuf1o4LfBqG4hLTkbymCteZdMYfG7XYenYzf2XUv3pNSrBCpz",
  "key7": "x83iW3v6JxZtkqS326JrrM3DWH8H3TLj5jwETuWnJzJ3TCugr6VrcN6i7W3s85XgWX7W8Ly7GFTPsDAriHprXgd",
  "key8": "9zg8ddjDA92jUnXQzmYeHn5XGKWNChaRGxHoPfYzqCJtGbDC3ypt4PcAaGSnRD9QYXT5PEF4dEHeZpoT4qZ1DRj",
  "key9": "3fGDAJRBUWW3RzxnDFhTk9WQHUwNv7pFPo1oJ5EFxvwnB5jZ6RWcWR5VDgQzmGKoaxsxKPWDbcZ4kPpXUxkuS36S",
  "key10": "5sNmiLfJvhcnAs4KUq7EwLVKa4Fq83K4rxCtAGxo6rb19Poa87RPU3QPbQBAGDogjaKT1QoXoQ6pD4rtxeLLrSgx",
  "key11": "4tVCLYT23ESeUBmiPyE4k39AxH7DKCYUmCRN3KMQ2JiYKLw2Qm1hfrGjzu35MwRPTnNpEmETpssQxzHgSYGcYWL5",
  "key12": "5HzhTMSEe2hKDnb7Uh2rns79syFG2d3Ww6zVLUmPhbfZ7RdsZp6SgbHWs3MBe4cEVEzxj8di6E7dAD7aXvQ2EkPA",
  "key13": "2SaTy8y5zFkqP7eats2zJBahqTkdYR97BH8DxdRtyRhFKdrdDxnhRUwmVvPyxT8LZrNp7ovKUmnUivQH8vdzfj4k",
  "key14": "5Qw8vTz7tiKDjD2fmmgJSJu9gpQKtrV7ozBfC1SDWrogHw7yxjQaF7UDdbQXkF7jQnMbEQGrBLwd1rtM3ogi4rHg",
  "key15": "3BKU2fMPR6dTj9XQcUjwQJFb5rnqPiJNVg1h7xcXN7qRq8MUYYszLiqKbqCmhUSjHGBMmzbnEpxzMmFmimZPKPKT",
  "key16": "3DVD5VtA7Zxk7segZQAHDczeMAojeMdcLTzewF7bCyTMeFsGRojpxuSYAf6UNPuXEwRJvMBfjZcYcrZxheSwnC5e",
  "key17": "2vd2KovhJNDkgwJt6eaEBoHrTNNiCtgDHd9qGTZjdL5rdpUqYGeTwNC6tNbAMWa9xs5qWdGmfeCR9iNoxo92E9hT",
  "key18": "5mzW7W2MaWzWRPannnFW9U1KGsF6yXHQW5dm7nHsZFQcoDTsdBpJB3hc7WTveGPbYcUD8zK216RMdYNKGU7j4hbL",
  "key19": "3WcWV9R5BSKbH3awx8YLVQwD1eMphoGTE4cmAKvDd4Qh8TeMdeQ2C1di6ymqbBjjg6bBm54dh8yaTgLktXJmiq3s",
  "key20": "4mRSxZbpud5cb2BjJU6LVoqLy5hN7ZUxUfXh5jabTx2WqAqeMddQCzPGYhZMbYMC63c8uvtcHTF65csxfGxBmhvF",
  "key21": "5ddxwFg6G4zhaD2ngVi45NCtUU3iPdiraS8ZatNd2LGRoeTBGr1ji8bYJNxMLT2FSRaBFHtu7va7fNwxrrJYnRPu",
  "key22": "3r9fhV7PbiVmqTPpM83QZphMQ3homAJnuQZuGYLWXLbux3DWRkR9jWge5GQuFjondS9ESNdikzGzxufZz1oSk2At",
  "key23": "4yNmbHyD9eJDda3TSsmxLNXG3R76hHBt4nd4u7GmbMn1dXJJn2sYFC68iE6gwu7Zds3zBRz5iKzpLRy3RnwUwQrv",
  "key24": "2wX6eZndqbQAoDWFLMzM7DMzxkV2mzGMpFBLAwK7EAxNhn55vipCPwmwhs7SLXZ9HhoqC7DH9JTTGq2CYw2hmLJZ",
  "key25": "zBsSGuSfT5hrntpQuBp5kYzcsPXYmAPt4sjWkkZKVPMJwZADhmP82HxasPCK8mP56DckmJtreqxrrwM72CbScuo",
  "key26": "4qsy8hXwK5w5ZZkYps8Ngt3bGC9TVZAQqxhxPnRsQJakasfTdENPwpCcY2sppWxwS1mn5VPq4QescqmSF8FSvf2R",
  "key27": "4wpgLFZy6ygLkXZBFaeSHpEK245dhEBMc6YuTvY9tjxR5NLYeoQNLKk4uU2pbbSUez6rUtXVg9YZbkqqSc8qzceY",
  "key28": "qEBDUMvjRtr3yiSbE4zdPoLZzg5tFnpydLHB9bUEAB6PyLoryU3V34bBLgf1vNwaURCQjTGjkxmYfscSDiUSLR6",
  "key29": "EEHAa8nw6D6CePcNHRa4vAE4s2wY6utSpycpbrJ3ozrHHB9aAZUFrsh3cFmRrBQ82uN3LDi8TopBwvQgTXxxKwd",
  "key30": "4iiUyZGZE2gy4RsaCKReY7EosLWR32WUU7Q4h9pT6wEfAzhzRrBqGBkSLAzufUxPuD1CLZoFKJ4mfasA6qJgtfz7",
  "key31": "5HCpR4jR8HUxHiKuqp7HouXjx6zzR76U38bEi9bExTxJ2nBJQChYYcQkkNy74pvB4d8BnV2yz4RmJP6b127STqis",
  "key32": "455nFPC1jL1dfnqbE1D7rCwGwnZovQGRM7GYEDbSjeFmrCTtoWUvAQgoQeJKM5EctisLj5FWHSBxLovVvR7Abh9d",
  "key33": "4GQnjxwkrGHz7KHWQ3YBrQ4TbQvoqxy3UV84iEsPYuivjomFiz5xjxpvWBWSxqC9iGScNq7qoip3j5ehbeWDmkDb",
  "key34": "4UbMU2Wq7RwcZhjsLUYT2fwx9MGocb2FqhbnfiDRbsL7copdkx4rgkSLu7n15Qcf2P3JBqJsQDfHxabLE6YxeAqJ",
  "key35": "DxPc2tPLc2aC1p5zoGFsZxjn8qe6KPzbz6gftk82M239eiab89gKDcy3WHkDXT7TjXCqZAh7LKghxRKfkjmKTha",
  "key36": "5e1MxLwiqhbLeNQckf9QjcH1p83cYpQdeiKFkKysf2zGDg6rvHPEvzuzcEvYDY89thCXjYcTui8iADHy4Fzwa6Ub",
  "key37": "2VLfze7v3KGTyxyPwDdFhjF5DHJagg51cp6dC2ebPdAaESHyYvLJ4ghXt5DExrXLkLzaZjAmPU2AvRvd7VgUvujy",
  "key38": "56bvqagEMYmCqsK2Gx1wpLDboiRf6qytYn55vBnDZ8Jxo7NXoBRbAjTYByc5hVM4K71FRrTBbgJM8FF5p1p7JQJu",
  "key39": "34nJfMMv5bX9u2peMszXvmAgqyVVsHBABQitcTP28EEWpcJ4meLbVES9hLXqQxSguzv66KWkonpZZFsYChnxMZ3m",
  "key40": "4zgSc19GS6PDx1xJbUD4JtFr98XCX5qeBo9pRmq5nWxuzRBMiG4Zgtt9E42VHbZy6rSKRS5p2CQxrodfdBbqzxm",
  "key41": "4ZzJehN8ZHNWXEBuYEmbj5pSs9pxtCy2RB5q8AZWpTaepKfBxuzG9MGrEyLGep8N46JMoYhHcrKEkkH8CpHnR3so",
  "key42": "2oZyd6bw213SvixtpWWms9PzCMviiuxfMHJqqQYcUqLC2oL3MzrTndmcUZE1fsL4vJdFBgGF8tBTJ2JKFBv5xWsE"
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
