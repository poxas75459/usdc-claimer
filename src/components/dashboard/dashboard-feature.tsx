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
    "5RDsuucQRhaiiyt3kpHGbQWVPHUkdQ2YmED1ygKvU9wSJohwyx3732f56phonM8hCwkZQ3bxmX8qn4rTUpnaKQFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25bLzx36j5YHNBwQQyWQwaC5rqai68unovKTogTL4KkcD3D87UXjX6tWzDtknFCoy7QfofRKEtZSP8Sfp2gctyug",
  "key1": "5NW53EvARVfVziqNHSq5N7wvFs2pVXJygHW1VdD3xBRrWpmCP4qNqDjxSwLSuc75itQ8yNJBZKU1AxGJcsuRP6Nq",
  "key2": "2RGGGyjroPtSqgWZB2eSDWhzTfXyxhDvaruyyDT5sMHaH38cmrNZdyhcoqEVpDcPRvrP4KRcwNFFszzBT4iN23UZ",
  "key3": "54rZ7xmvW8BRAugiec6rU2XfqygVvwbjgRcnhNu9ftUkVMtudnYnZ7E3mA9QJgmWzCLbdorGDAU3XjCRhzM9AEMp",
  "key4": "4UoZdgveDYqchVe4YpHk8jQz9TDfGAPDqUwsGeWaF5gjUafavX3BUTAkNMSNL7Ugxgrx7ScUfZnyyjzG1GaTREAF",
  "key5": "4kL3Eqaxj1gYmPfhXkGeZgNy2LvsnPJGQ8s8Wgip8VjD7budF7k1vSiSgAj36TvgTqmrNzesjBu2pPhnKMUUE7SS",
  "key6": "4iZxNBpE56XvoxwxdMpU2NwXHLeADs6aJbRNABcPLQpK5xV9vHHUrBZz4JmmfvpyCvpr4yatYsUfzmFgN9ShzkuP",
  "key7": "2ee4xh91hhgd8DRcYQttksD996YrE2aASse3sKVfwzwSwe1QTcmh8otRkBfhCoVHTgWjDyDPUBKdRyLGGcKmLT9L",
  "key8": "5k6LLUcNAotNvFRNkHnan93dnuqNEpidSt1mKqSV8nxmJj8wdcU2ESf8BwYzSx833yNcZ4LXBDczr3gR8RgUuWmo",
  "key9": "6z9iUppcTcbAz2F3u8gvWp6Jddb2TfjGrvhJHAnXCq97SWeBLQNdTYCYZd32twCKFtUYsYQg2C5vU3Xib8dCPqb",
  "key10": "2i4kVCdA1Zqcc4Zidu7zjtQPrf5XgzGoKSWUDBF5vD6aU8b95ADVEmWLeyHSk5StGkdL4bFXwrwNsfz3zxa62gyo",
  "key11": "5PZvWYzK8HnjkDaPDEmFGYLy32EdFKZ3qM7CjYwR4iBKPJuZV3YcjHCs7hx14QkgDUthoKxgKFLEJAFwg5VWQTTh",
  "key12": "5my16oPBcjB5fKqoZfV1mLUhL28r7igG4onRiunmiJhVyZkmwDyF2MsWuMYxwrn2FqQJJwzpqbdsQ7ack7iZRMjj",
  "key13": "3CBPskWf548Tq6pYXHbZSMbUrLEzWYjedUeAk6gYzEZA9m2T8U8n6WTdZmbAzbgB6DipV8VBYcsGzJUvKARQ9gz6",
  "key14": "555bh1muopCWQWnkvboyH73fmNjDEsDL1PyuftpwTJwzd4pu6ciweuWNrjHDKLf47LNm4F6dEaykbf6RefSGLbcN",
  "key15": "zBR5bepbAyihr1PDYYFoCK1CKYBfvcLhndKJwQQS1rnMd3rEWom2HnqaYWAK2B368qRun46AM38WB6xXrd3mJHA",
  "key16": "McDoPCnDSe2ZawxuAQHd5T9p1SbEJ1jDvi1A3CQHCfsJdmnYYk45VzF5s7QnxGXJjSk2WtTs1V4fP57MsLfKJ8Z",
  "key17": "3k4LCuPT5JvKdh453K4s5yYqCndsNwpYAyu2P6jngQ7AQPTc1seUa7uncD9yH16jZWGnRCvEmdhkWjLpxTY4ewXv",
  "key18": "J6awcfDjQnNSaUE4GNgSHQX1GaJLjLwatpaRmEEcxpiHbNGjHCNhmp8zMyRA9Ybtmx66hNnn2oR6f5gDuxVyick",
  "key19": "3pggrtKRU7pFtPFp9iqCW3GUfsxtnr864MD2FsPSDf84CE1v2jZPZ4288Vs5LokRcrxUUfdEp4Lweq9kW9VXpabA",
  "key20": "j4VorTvpaQd253dUZ1nD3HSs5TBmSJoAEhCUJVqpZHrg2zTMZKUnsPbWHEA7qz31k41X7TkHt7tRt4tciDf8Qc9",
  "key21": "4e22pVSifkVWmTqp5pLTb1VBN3FYURHpn5GvYCi4JBeLjd5CX3mkLULZ7A3Xv5Xi8rfDy9rDf8P2f7PXXwUtgTrH",
  "key22": "2JZ4qkzyTb6hEdPDCNHWffzrGP4NXvywj4gbTdTp2WcYLoKUFVmnbJNyz8THpJ4eSKyurNZFUVfCkpyycH9vgaC6",
  "key23": "TB9tcZH3sVNAwZEH5TQ4MUknJcXNBtMR2Y71FJPvsz9rPMdq6F1GD9wj5qXmknVQHAUnFbtdjxcvjurL3pW8j9W",
  "key24": "3mNh6BeMojggp3GHLu85jmPLe2HJsbUA8oyxNMCexUQpkHhwzd2jvafirPvZh6abeq8iq11vJeSWSbovgunrRs2T",
  "key25": "49uCoeRHQXT7X4h8Tuo4nxCEebBdha6ABNcVCRGbFxN7nUYhXwWcQHgbPqT6bFpN1RrsrrfmctdaVVhCUm37m51",
  "key26": "2ZmEp8h5EeNzb3hUHExVa5x6PPYm2gtNRgkH9mvgBcfjA2F5DF92cAEtEwApJEqyN38Fumu9TBEBQGZpcsRFySw2",
  "key27": "32VXQzss1kF8EBxKuNhveZELJ6mvfm399PXou4dNjBVEaniPkaZP9Q7P8tGC2PLSyoE1AieD2CZ9WkRk4VDSXfGQ",
  "key28": "4xHmzEa55efhpFfWJuHYKij4Amk8t6f4tAAwf2r26SK7JcUwdXhANeXbZB5iHZMxjZvpFe5P8taxAP9zStcyLJXi",
  "key29": "2Yv2DJXJXGLg5oe5DWEprhYaCc7tLwQd9KaTKWjQTcYAoFjzhpujRvjWQh7FNuw9XrfwPW8EAknqWuFgdKS9kSPF",
  "key30": "4XwXikQKSW5nrFyqrythfvfWD2Ma5echT1A6x7J9RHK6ADihVCdb3CLrgwaxH1kceww86U7K5TfCgfkEqSnsrt1s",
  "key31": "TZee8hoyymQgYeUg141HVPM2sUXhGiwR8h93SBngM3gPv25CZpBkUzF5fnbS9ZKxD5ZiJtiEh4oA8kERNZWj2sg",
  "key32": "etqz47yDNFhcNxPLwMqSfbBhun3uGSBRMSHYspUURDCj193YrkzqojWuCvoLxJF4HoE1DzEQj28gsWcn8xrSeyo",
  "key33": "58mbDagcxp3q16dDHDXhpnEhJBqyXF2qnMSffjDFZmNeaP7Rodgpyz2CbvC4RNzug3LTYp9uYAu9TxXLcdPvrm94",
  "key34": "3WpbndVVKKNTqn3qwX326YioKfVemshVJDj2wbuBSqmiTxg2U9HHxtY95aaJGWqbb2cUKUF796nXjk6A1R9gw3EP",
  "key35": "4sHjizpNvJ9h9s73F7fnW2d5hc9HkpcrBH6Z66mthjkgnGJwQx6y9hi1LENQJZeFyHvUyeyDMNBDRdVkBD3FzUFd",
  "key36": "2m9VEdUfjVmZWsEyUx6t6TizWk5jBJ6v2VEqrKpWmPgfEREhRc7oA5uJQeTKy4n1kvAukoWKakcAuVMtJiygyxwN",
  "key37": "5vSafk4amEyUHNCwEdmM6gg3EkzWDXnqfvsqCs9LzTKR6rJaSqyfJ85DKqymvEtThdHU6MyasZzAETorPEg21qeD",
  "key38": "Tgj5pzMqzNksw6dVnw5rfWoe6Aa8PToBp8o9ZkjonCvyLQJsrSNMn1S6rsfRptzG9k7EPg2oz17Jd5N31jM8Hq5",
  "key39": "23whUnURpM1AozDe76sTXWJDXuJiMdf21tPuNLi5UB7EhxvMv4w64uRGgf6Y8hrBNvzV62znPvhRTnVBCKtDWiHE",
  "key40": "5bEzEYEmfZvyQ91joguWKzicoMv1y3E158Daa39uwnZ2iwhZWpeNcRdCBdFd2kMhwBd4StQMtcZjGiFHv4gfEqms",
  "key41": "4nALtyb72RWwpSMNiMqAwfEqajTRCJoS73xFJq2fAt745eVjwYgp97B5ciGoci4fmXprXjx59RdYUzVphnPvhQmd",
  "key42": "31jPpfQC32Tt7dXMc3vTtsbgG1kj7WMZHcP4z6oWNbk7eoMcYqyRXG24TmfE4o56aJy9RZ7LweZBqetv9mXHzoUQ",
  "key43": "5bzfnGPFo5mfQB8Vs26qWTGvb5LVQjDXzuyTH1BTzCe7r1USRQnVHas7x23RUxgdnBr1wy54QepoXWbuMi8e1xVC",
  "key44": "3cDg3iDK6iWW2xQ6gT7EbTLTHJ2zwW7etiq5YS2eJ1Dgxu7LUKqUd3Hkss3ii4RquqSMdmDeH34XXUA9GbgDgW5c",
  "key45": "4PfGdqvNM7X5DYZ2piWZTjUCYe9FCLbvHZo5YQbgSazAFsjhU8SURUPBU7LM1rmCUx9baiHKpfTkJ345ddEpraHW",
  "key46": "37uFfNerpq2NEHMZMJDsCHDrD111U9hjJYX6KVJVvdFT2w7PUYWwsGqHDFUftkJ6moJAn5yXyQBChF4oWKt6u9Kj",
  "key47": "3y3QPumBn5Tm7e28Y6v9KTsix456bi6XS2Pv1c9A73n5GQ3B9zss1BCCs8DiTYN1FYD4GYuQmMPQrj1LJ8tPAbvU"
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
