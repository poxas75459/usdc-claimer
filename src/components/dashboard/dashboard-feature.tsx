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
    "2f6tD1kKaSA36QNkyqVNh5Fbufr3yeMcTzutD11Bcu641X5fPEwSVLZvTkyY9fRofMwatf3NibJSyZc5L6sBDSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gD9v1XaPqTVDE6EtC7bEG27cpXD35fuVEbt51vF4XKLBtR7Pyo8RjZWDjoQ28KRD2wtHEzswDrkrsGvQqWMHEbg",
  "key1": "44N2Y8Q5bKU2iByxFk1ETuVjJ1xzcDSbyMMdayPAt6E3BEvxjj2vcJaZSF7mGUNKz5rRb2awBy4QRfihkMj35jgg",
  "key2": "32V794o9jaJVr6hH35DeMUn3UFC4GGg7f6ghoYNtaa72zPETHshhY6DCyJWhotd6PUP53nAUHfatkuyQ6a7SG9YA",
  "key3": "4cePT2eW9MtuWVr7QEuBnyHjyu1vAiQ6Gfu9Hy7hQSMT6U4z3phcXtQHSGjttXgPFyNJRuY2XtNaZHcNRNPj3fKE",
  "key4": "44tCGGcqmCuUFd827T1aq38jMsyz3XjUZFNahcaDAc7YZPdVsEF1k2M5DMKEnYutCC7YUSAKzC3M6Cz2rQFFBNKs",
  "key5": "3n4oQXj2E59FxadyvWZ6XgNeD55wRrp5FCwUQAehVf9ZP5pUUA1pfMdCNC6CHKpTw2SnFdteD7RYJTkYzLuTH84X",
  "key6": "2ohbPxdiNF7RYkM1Q5cwDDvYHs1Qqm5MboioF7JTrXr92eG9spYMTuqgS2g3YMr5wVpVRgGYFaWaHAQut9RNrWLp",
  "key7": "NUMZazXTNpq4fSaoxXqu8s5wNeZQeYSJvE77U7hyfnMHdMQVKR2CXa8e1gz3tQWGX6aKMGHqyGYrsaPLKVVYcL2",
  "key8": "2XWYyukZQwwGu35LQAk1qm8jmwVpb6VXSUPQtWPLXffWZfsuSRbj2Gp74uo4tF3CB8cffp5V7Btd81Rjxz6cbPB3",
  "key9": "VSZiDjnbrv7BNp4naopndQzZmB66owgAiA4dDndkTnWoopwx4xv9P9KegyMh3Pmg62SQAoK1EL9gkgLGfNXC6HN",
  "key10": "4eeneW9uzGYD4HPjAqcirHK9DbfzyYKvX4Qj3s924fe3WoCcjDv28j2AXaCoXNAGnqHLxfNBTDHcN86Yb97nHXHA",
  "key11": "4MWJ4Q9fjE92rbtt2CpGLXYY5oAEVKw1iFVKJk7AnqFsqDK7pnxp3omJfXcYtob9DD7TFZHqiYfefo6H3X9X5QKg",
  "key12": "3aYhcDhSPrxCAfVekVzQbWk8cRa6Wp1k8xQLJ3VxUpTgVAYHnuwuFxkmKigLGhBYEM1XRm3LZxkVWFk2whTEZZUz",
  "key13": "3ArGAGTGyqMZ65NrpjFUq6pBCRjJCTJf5xanJX6EQvWFbb5HMbnZ43mufgLRNMgVVqGtLJW5nW5nPZKp6vgQdrGW",
  "key14": "SbLfngGNtk6zUh3hHzCyHt7XAmjoj1uZ82KPB4rcKh8gotj3jv9CuKwjoMKwATrmGHWVpj63qzdEQg8UL3UvjtK",
  "key15": "CFmmCGxMjCGUHSiXj6Zduv8JRBgAYsUgYdstPJukF67pHrnGXU2gza2cF8qV8YmhVg6Zxt2Y8554AxbMLS5UXnd",
  "key16": "49ZVKmx7A5ziXteRHPnsFidrNKxbsYP3LX1N3XuVCiDzGNXqMvioHnAs2Nm5Y2h7sosrKiZJo6jaA1J7naFGSVQk",
  "key17": "5jYGATwzG3g9EVso1zMCPWKQRhFEP8mZUX6mNib7rzfEyWrzWyidnw5mqfF46f1k2S5Mir5b2ND6WFseYhYNtLp3",
  "key18": "5Tug2rwGkWnxFRy4kcKmXvgL4TTs2uVRdMfDqqDynpc3gRNi8c5Q95aWq8wA94Damq6EYL4jf6x6GH93WVW1fMMU",
  "key19": "4fA6wPBG5X77KSGLX1tAh2XVkKL99F5KiiMznCALNPpFf3w1K2r6dJXYbGXkZZfAxoBaxdE1mVBNbNXjfJKFkDWW",
  "key20": "SNkPXFeGXs44e93fRZdW6BzicC4xxssxK5QV9N8kXeLD6YjN91Qm4iZ7QJGxKQBnegQiBuQ7zxzdD14cCiStRKo",
  "key21": "45QKQ5F3bSpG3QpFCL6dmR5biqxC3NgZTYkycVpE6Rfvsm6vLqvUwz5TPKEjC54ZwUQr5UiVrSdKVqzjZFifFGv8",
  "key22": "2btfqHyVDcjarCdarRKiAfeRS7VF4UMUpjCQSXHAKuA7qMkS311CfaGYKho6T8F6jmdi5svXTpyrs6CpJJDECQx4",
  "key23": "46kHkSZhPDnnG6pcxZHyXJFKDtrJERAepn5nLvbzNFhc6M1PyL214KdJS5RnuuEjNt7e2BTuLfMJrfnv4vJLL7ZY",
  "key24": "3ymE9o9uDHApo4H2Wy8EZMqcqRvaEyDi34BgCaBdE2LpKWkqV4QtG6CiAjN47D4qCMjJuUPN7xQtg8PJVm8ySWF3",
  "key25": "2sBW76NBf5Ps1T5abczZZsFpv3wSUZ4tZwEX459G4BnMCGhcr4a3qJxtbaEzmRmP5n8QZuoUceaEpHKQcVmFZH3M",
  "key26": "LzP6oLG8SHYsYDy9D3bnA5yT8MQMohseqPUryCp7tmXtkhspRrij2JoYwFrRwNk1swRWUPfxcRAhoprmXhGEHrk",
  "key27": "4ABBu5Z34et5VUovmfuoF3YvsRFv14RW9HvyPLmbCLHFNx4GQ5o4VWYDievAadhHHAsrUCiEpjb91gYxbM4wcMem",
  "key28": "3cY5WSS29C9NrdCyfkUygbn9pRArUBG8sHcdptmAv17tgovFuLknFu95Bt5m4metaHXpfJ4UqZvN9Cykyf68cuyT",
  "key29": "39FogbZ5X6G1mwuyHWNPNjiPkKDVFTvw9qvT2a4KgA5UtwCMgbkCjA3PBa78d4ngrAnoWvgxjRXKMGHXX8n4TicX",
  "key30": "47mRCCWmEzSQZ3oc5Zu6zKnEZHC5YZDiMbDerv9nmxd4PM8USLRU4gzVPv9n7XJ6uVpWZAZY6x7kLCPnEZpSk6t9",
  "key31": "3tj7ia7T2m5wxMViBsNPRWv4jZbYpvnbqKn3pFZUTQRHphGkUHV315LQwhvzY4ardSADjjhnYyBbXHH7Y72NQR9M",
  "key32": "E7eV835bUfZinhqeP7frDBkKwFR4qV6CiWtH88CctaM112qrTPoi8cvK5rCJJXeotPoLCRA4xUu8ZwCD58THumg",
  "key33": "23uDjwb17Hk7YNeUWFiFt4w5CD2g7gHQmJ7Q7XLfkn7URPCxwXG3YdBZBwb5Qu1BfnxwWMjA3PLBbSfzWBfPravA",
  "key34": "31Uvpin9jFJvvdYjgNNnNG1azMvz7sQCcYcVvkyaBWUmuKDPQtbKgqCwPZMEiWcsnMegFZ771oSRUmoZNniHDJr",
  "key35": "2QgFazBbQbfsYWnQToSaPtVEJW515JkimEsD6mM3JFDaxknicVZMUU9jU7YP3zwNj2xD8W7txKbtVUTqz7P25UiX",
  "key36": "2TwWaVEMsj4q9UarrQwVxE8nBqC4NoydphMLNiGAbVjKhmazniMrB5p4AWkdbghkdxNDV1jZd1exKzNMLthap4Kg",
  "key37": "5gutJwmMMChz28gvcETdYT3JX8aaESqc9gEXCqDZg7zZgHHFSdz4UbcRESbTXb3DHoTpRvwhFGCRJUnWGR9PGB1c"
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
