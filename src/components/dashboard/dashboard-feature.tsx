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
    "3hE6fjk8LYNpR7WFPCn7UDL3JNL1kDesrqSr8MFL6zT71YBfQwEDYEhJPXY2iVDY916fkYnzn9GpffRv9rToWwEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PpXaBt9uLrYZcjV3FbQD5iwJgoGQVKgJQrXY8yw8Xmwyt8MZp74i63EviHy5WGpcANWurbAu2SuUQbhDT4ijhej",
  "key1": "2HYy8uzXZQwKw6qCPuTrcdisnJiP3Q1fcAyH2RF1HGeMvxRFkiKUyBg3eWDtyiwsTLzVdpfqc3mKjDDi4cq2PRBx",
  "key2": "5MXmscckNQeJZKpEvEfZoxPWBabTpVrDPm4aLTruPhe27zg9eB8B3kgwFoVZVDmb1RshCUH4RHBhjShEnjeCzWBf",
  "key3": "24MYd9WDPRdyiCabKdNaytpba3HLPjfWH2TeZzm7SiN9itsqteyQhThg1ixDqKw6QizjWY8h5UCMxUhDAULxrj4P",
  "key4": "2STLNkU1opqv6zUb6k33ik4eVedk9BfqBo7515evmhCkuHXA8zcGsHuzRN7bVUFHEiuidrGiezHy9g9kHAAjjZsL",
  "key5": "2YMrCyXsFYbK7V3vFoYa58sKkft7uNiAY22jfdmMNwRvVgVoPmaAvWgiWjWmmLYaczbRPzHBu417wZtfPwnBQGJs",
  "key6": "2iTkN2vcKqm46BYV1dRDUAncDgSgX7YRgc8VxJJnPQoUmMVYdetXGbHdHWwupRYEqJYckfegiP1X9G6cEFheuVG",
  "key7": "4gMeDZKRf8taH5cc4VXmF1SGVo4sVaCs69YRMew3EFoT4vGdhrJX5eQVkkpH5WweMXskagm12YczS5TwEyFeXipB",
  "key8": "3eUenrYxfq1QCsA46g7vMWTt4u2RDepJggUoKfS7tFAB9wFSMmSYQrGLf3oAzzJxV1tswLqtDj5NHzyxiiACVKhj",
  "key9": "fefTWJGHGv37esPbp615AKLff67tAbLvp2mFjaWLe6aMYU4ZU8KLwC8eEok5GXwaqApQUdbce18G9VtyFjxLDsh",
  "key10": "3WpV9GyRPXakXuJbfv7TcyU1o4H9jo3U2uwT8ZWSUT6CajNExNRkHTzEAL62fxx4LMW9jvMT4gkojqFhMJR1GuF7",
  "key11": "5GVLSybzsvA6UVefdbPfZohyiEC5oTkRTRH2Fxp795LaMRA7K1qa8rZD4RPQ6DYLu8D3njdoTH44rrLtovoibYmj",
  "key12": "5mp9N6TTrquFNTyc5j5krFYfCcpu6j6oVbJaWTq3GNoEETgAFyD7vdpn3k98W35GgrFmeoD94MRGNpYvGi3dd9iq",
  "key13": "2bWTMSJckmfoso4s1Fx7tiKj59756GVpVpLKWA9Fkp7F9f1BJCAesc25cmCXgTWdy54srLD86uc5xnUyq47mmGTc",
  "key14": "36B1PszAFSGRm5YX4f5aYtVMPn4X8hwZLCiUuYNGU5HizMpabzFt2TJ5EKepkRsF6bfgrHW1hVtyhvY9bE3S9MAi",
  "key15": "3mGy9zFBfW7bYfiQhVs9cpRopZnrfFf5FCVCKWTFaVCU38grDzG48M6mbH9rwotPqbo5BoFGqE18cXxrhMPJSeT8",
  "key16": "5NFdQQ36tnfbMbHEMHSY93YE41nsoQdgnxhUdmuBwAdTbG7EJipLXnC83pNip3cmk8UJS2RBhcg9JuJmTxPRTcvG",
  "key17": "4c9rTbYvm1bv3j9AvGG2kif3RJfZJWWbsqEm1pfSXL9xyVBFpabTPmTTb1DdDs1uaACBiqANP9iukFyZ2B8zs29r",
  "key18": "5QnVzvooSiC8e1TsdU8y6M9yqg2jQ2AKiZzHPxfXQFuvvHBcoRauWaWjXmR5twysTRwiuMsYCTqaSDrAbGNxEkk9",
  "key19": "VuYSkoVNimBiRGWMyKoqQMNnfUYkprdNJ5FjMxCUdrTurpPhW34KAc34LFcuCkNNPSG4UqsK2HkJ7r7toi7fLcz",
  "key20": "QBxsfpJTisbcuc4EVtFN3JP3PvYf9JxuU99iP1PnoRLCj5SowhKRSNGiTUWdr7Qkc1dX3sxyoe8MLqm3Kphp7Mx",
  "key21": "XmKp2R3H5ogNLimjxt5RFcKnFNcJQB5QPA2bRxo6XnaFcJndeLrpsSd9cRKkgMhoWqMJnm1EYhM4G9bfhQqjgKB",
  "key22": "5AsiSZuWgztKuuCaxre44vQ81NhjaiMBxy4oBmMhDPqG5Tip6R6VqNA319z7KM5tVSiGpGofMNjZvqk8uvo4WZvv",
  "key23": "5nqV9PWPnsER4XBneFqM42KZw549XkidiD85iwqt7W18CbmfjHcJx5ix6sUP59phXiZYi9st6fwjTb6NWcPXBNqD",
  "key24": "5tAWWcsdcGXkogGt7zcYmt3capCCEAijxWu6CaZYkkod1XBepCWcxYQMUVCi8QLnLSq28EAuRuhw2EKPScSHkA2a",
  "key25": "3JKymjxkaRY1Qv5YU5pgY2Gfgs2T6zzXteFNgbZ1g4o1GDh1bX86LcBfZ1wM6i5W4nGo9ZxBQjG5SWM8wPBAB4NQ",
  "key26": "QkaSoWgkpFGxgskTY5DPqjKGwxz26F4KiWbnS6rLknntbfDkF66qvJGLaQz85j2DX2nnQzwLKEKUGxePGbvEw7Q",
  "key27": "3QQcd3VQkfdzoMichTmVXp5ePhUcivJt7uKE7VSya5V3XBvB81YhrTJDk9mv9shamgq27XWrW3Ezh37Favd6dQdp",
  "key28": "sNNB4fXQpsfm6rdNZDyTvbBGYxDgWu8xAF8KY1zdLrp8vnGXyn3iYEyuzeKEvDPTagj61eY33gQn8TQGoqZR6zz",
  "key29": "2xfo6NAxRiSBtwvn6yw2H6MSuZyFCibrDAG2iz9DQnApTJ6PNbQGqgbULMZDydQteWqoHqnHFiJfADM7i5X5zRLB",
  "key30": "232a4No2qRx7yMccTUHDiSEyqJbrb5AkBuwNy7PesqnYoMsKh55wbQHYK54AR4y2ncEG1toaebYyoe8EmDENL8W3",
  "key31": "4MHhXfJbS3geeVQ1qsftawQMbXUN4DadUFBLiJ1Vxhdck3HJo6tdrHiFJEu17MwD7KfepbGmZgQ1Fb2RQDig65Ak",
  "key32": "3eYCuuBAXvCBCF1nDQ2Zx9BZhn7uSmoVj8fZPDeXnYPcrvxQyDPQ6WXU44LK6QV5hfAiF1DBYVEdWChPRJxincJw",
  "key33": "SwUCLaZbGAw3HKi94CakKQ5d2LHxXXzY92itycNw3AUSaXmSvASzgCUNxxaUjQdvCu2CuA3k9SM4CTxtBjpGadr",
  "key34": "5QhxJi2VjjYDXP1Bz4rjH3J6XKSvhNchzoMM8a2WtCb6N4BYxWv85aAWFBvbKWPTS7ymRHUAsTMgrUjRFApcNa1P",
  "key35": "3MKbXbgUur6FVhbx9sk113YsRbgFcihGMdyi63tEbVD174ApExeFMnj7UUsU9QidjsisG2DZHeeJX1q5upPYEBor",
  "key36": "3a6j1NsSX55TwEBTifqnzgKkw6uoPZyMt2Vj3Ji97dyc6JyaVVszXVRVogbfG23p2dKjBXNKPQ1BQNaaiyNkKYUG",
  "key37": "5urtXXTkUmyyYVDrSDRbcz7k6nYSP8fWo7WCyMufGG9EY7cqiybDUEJQ5dFxdNKUgjCyqRA5Gd3os2s6n6g6Qqbb",
  "key38": "gy6z56pioVw2cjXTQ6LQAYSdLQjzbStxvCZeoSuCxXPF9KSBB1LFwADnPKceKJVV32SSqhbooXnkfH9jE2Qxahe",
  "key39": "Gw3He9stq4E4iYw2ZGVpfBK23Ps1drAdv3YkqhgXb14n7ybd4od8tnLeKS9sxcDCQzn49JspLUwNSSWinGTBhKJ",
  "key40": "3vKVU4EMdan9GPTVRP29VQUBbqQZfHzPtKTDvpdGtiaXCDcBwAcoDqwLzYh7f7nSZTLaHw2rbnVuCtSSco3UHwmJ",
  "key41": "34hQsLSdZN5fgzGL1kg4ChpJBczssUj84Kma4jLk4oRFMmFRUJgYq4bNwJUNcDiWTwMTGEn4VUfmp7phcm1u1oGF",
  "key42": "2y9ij5hG7RVmYka9NfVSVSf7WTja5bRJ6D3qXWVUHEjHjLFkiszYw55Xph5621j673G9yoznVCs5DFHygF2kStai",
  "key43": "4oSoEqs8pj31BMA63d4q6WeeoyZaEP7vcWgR3fuimsszb8FkhShLnguPAQW74W26G7Y8wPgVW82HfsP6x35bGgVu",
  "key44": "QUT3g1Rsg7KiF5oDodbt5KCLmqLSdkrxssE8efpYd7fkSfCN9WM5c87SaBuS3GX16hDUAHqmnh9xowctJYEWZCH",
  "key45": "3ZmhPEBYrrxZnW2k8wZfeycNKqoFUfrGc9Z3B25kPLXUJS7UjGPQVR2QdntoqxTEBhgyvmAYbLKBoYuKGjULu4e3",
  "key46": "2VNP6kpzuZVj4Bt1AZ8nmTTPobKTPHg3GEhQ5p9MnhYNz1Dvxk6dCdbEiwpzBBuusmbmdpaedjKudGymc2miJdXw",
  "key47": "joqqWKNP3aAKpF6nVi4BQkzSuuj1ZuwaRQjtUfWXaDcUfZZ55TaAd1Eip2Nxx4YS7eWNEvhEfATDsh4fdcegzYY"
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
