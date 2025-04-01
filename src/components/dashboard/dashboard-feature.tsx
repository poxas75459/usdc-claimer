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
    "3f9ikjDdtqRdyh4iDbpSaiRH6EgDCvFKHbGxNePXU6Z7ZRVNgf4AxYK1oyNetBgoXaSMQDGqvKWn7r3yzS4roU8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48S5khRBKAPiF5Tq45JavfejT78W4LJyesfpAQ821TZPNyXHM5eR8tQf4SvwahdaZE7nL1SuiUfDFfSCG7ehhuYS",
  "key1": "3jwPfqxF9BMC5XQjGpdoNw1HwnD5Uf1T2cXchD1UhDXJpa3fbDwUmmLKJGKpi3XgYmXs49nebtDgWnpiFPhnVYGQ",
  "key2": "4dbDiBkEfubXRb6fzXwRuGD4yMAw2zC2TttRL3eeBzvEEgyvvk7Kpjdb7KCoXAvHY8W7pVYd97FDAWSzVg48FZFY",
  "key3": "MSG5p1YPfT5rkYAFCXufDvMpyQSSSSWcSPoQrrGaFyZR358tLkSXaNEe5HiQBV1jAbKMeqt6fgFd6mgTeDea8y6",
  "key4": "4brEmeNsK4nEaLQ5g9wfLTaFXDpQcezbfsHdRiZFykKmRkf4T3fjtWVu1dEmfvcyCgjCNzupZ1BpTwQFKufTEnod",
  "key5": "yf4H5kMG39D85gPiHYKJ3xzkj3s4hXuAZW8zAxDK9SUQTXVFzN43umQ6ouTmV7HMw2gGjvHeULBxnCmohnUrYMv",
  "key6": "35aGtjwaXKj9HL9j3K7kMuyJntEBLCtrgJHigaz5jKYb2cwA99RzDT3NK8Xod5thH5LksnDincF7Ad2oviovgtTd",
  "key7": "2sMvxy87LuqVtmVxSD5sTVfr1vhRxvRauixR1T94YcNupGNdXooR4eEhV6HDZGixYsQ1GjtjyT2UN1hz1LfJHhyX",
  "key8": "3LJG7FaMpqxNfv2j3QLP33rDoAaCBML8WKmbkiBNLCc1CQJeqniEfckDFBScWdAKAxcmNro6ZKDGdCFNMmfGnaz4",
  "key9": "3xoBK7bhbgukkNNwKpmYQwtcSP5JGCtkzFWmhaxhHanp4bqgsAVSSeAKJzXHWqfwpU6V9NdCJwe2rWfZ6sVJrGDd",
  "key10": "49FCaL3G7v2enBkqiV49VLbARBFk6sk6x7rgExQFSVpqd5RzbM2SESgr65wxd2C74FRYyDQPTqz24aG9ZjCCgSK3",
  "key11": "3dU3o5p9beEkUsch9gQpw18iTccjYpJFVUE321PZ4nUS6XM4v9EF6F2FpsKA3AXygUMtr5vGzERMiAGu5uSVGf3S",
  "key12": "aH6tMnMms2Yx5Pu2GjYR6scJhif8REWSHAGXwmThxxARhVfFZZMhgqHJ85y5geVvUztZPegAaAnQtPNqWubWRh5",
  "key13": "SjZo5XpaN35ozzHMDoh9KsHLVjh2JAroXSmt4jLUPZKbLD5J5cirCgZiwXkYc4D1o2udpg54ASMrNctho77e8vA",
  "key14": "5P4pKbbNuZgdWP8a5xQjASW9ciknAoYxLUCzq8Riq1WCQA4yA8kkWPAe43q3e2M3whgVKhH8ysDGnr66WwgZFz7y",
  "key15": "SUkqNRLs13S3EypzzajYdkFiFLWj2ZGYMRY2SU5NVBgtdNq7GSV5nPqjuz2BNrcxbJAmFemMehnWzULqNyXoP5x",
  "key16": "43GZZkFm57Nc1rAB8VJEJUqYEkMZHisti1ughdcJ7p214pFH7QdohsQ24qHwxRfjUumAPerAxe7GThjcCEMz2StX",
  "key17": "mhMgp9pKnZyDXneX26byHgXWZTMLDZQf4Zge6Fb3777AD6mchfnBU2SMvbPHPMZmWz3ecycbSzzD2xxGv1s48Kb",
  "key18": "3PVifM2b2ioqfKmfsEyypKFxRqubgARjrSuz9xjkQsjnyeyZbURc9CZSbLrC5YKD6DG68VwABwLaeH2rXRJNSWba",
  "key19": "2p38vmsgvs3kqwW3jKHcmouWEToLAT1xnZgU66E5X3fcHfwEnfbEY5BWavxK34aHwHAFWM5rNNEpm4Bd6wSUySAX",
  "key20": "5whKJdhCcMRstrP1pGA2DTcpLhiqA3TrAMro52YxTxkvnxbD5HppPTrV1or1KdXvrqbeUQ6YXdyL9DBYu9r7itcp",
  "key21": "4DXMN5mmPUKm4TJywkGWV6cd3fxQQuZY8pgUbusAfCjhiJgy5PCAa5GpX3DAjKeYnX3zujUsd4o5xBmCZGJES8fA",
  "key22": "67eYgsT9XmyEL1wCmo6ce6wizXGZfAMVjZTqo3Go3xNYZ7eh4jWeZVQJt91H6VsynL1d7DbcgaozZeZqFCtVmuhC",
  "key23": "3AeTALfAaDP7mSHgQf2jmtopfuFopmmpfrwLbKb6jw6PzLdY8ucz3qLZZTMHVvFVoQeFs1tr9xqpYBZgee25R5XL",
  "key24": "5kMCoXRkYGMKEvHL64w3j2ZYykkaXiAGNfQEBnZuvh2F4AC8riQjL42PhcLw86eFCuVP7zjp2JLucyrRw6qqhgan",
  "key25": "5UtBERUrgZTwJsQTZL7uNVWugMrK3QCjHqdqCLoaaqwfJ4nVmvc4MypacTGyAL3v7HK1iYKZ3keMQCMNoYC3893g",
  "key26": "fT26PiszGBiaKHrJZSNEP9ZUKjuWYPgGtFwxeL8TVpmaYwtiVv96hsBN6DyyKPRsBAGKQ7SqT9zXaTxHJBBvmrY",
  "key27": "4Nw1jQNDy4WCmED5i4buN2qsE3AeFRvZjcweVcNzHQkaVXVkSW3hqTsy2ANCWrRWYVoaY77QmgBFeLHChQZ6tV8f",
  "key28": "jtzSV5pkxcxfkErPUaqqJjcADisgrY8oqhG63U9EnpdccLGq1BXA6DnuUmLC6jtNg9Kzs7C9WDDemXP6FfMrmmE",
  "key29": "aRgeF8pEtSLLsErYs2cff7owQXGTEPhTZZFgCTRwLG1F5ZgXuq5CkYjMzMQooHurAhbo327EcsaAVb3TbFUVBqu",
  "key30": "e2Ui4mAoeoAZAsLpDfDVvc5pQQWrysCLEqvRaaZ1eErUpupnb9YsW1gXU6CUPNC3Pwh6FFbLNySy6JmErnG72vH",
  "key31": "55KgEwFWrkrS5NbTVV3pT6rSDHAFKVSGhmB1oQkYCUXH2UcuDBB3qjDFjGR5SHHrcgXaLBUo2M7itdK9PWYr2J3q",
  "key32": "2kfDFzMJFEUG5hkbTHk5Q3f6imhm9cosC1wuBFkqb7Mi8tHzWQxYq9hBx2WegxvQShvpU5YbrZp2Lk1PFuqU4Rxd",
  "key33": "36vZjqoqhNpbPfymmHMPNQZuvDBMbrZ2sJPPkm7y3T5XPsJxx951HCs9MyK46HoRwGQUCh1rc8Kv6TQT4pHxMam6",
  "key34": "3XMLKvNmg6JN8mK7BuYgjtzZDf23qs8B6rHypea9U6moSuhGeWxFmkfDMaJdHi5ALXPSgcxms8d8s9BeyASphkop",
  "key35": "387qADUcT6Gsg9gDJQSmzNnxpkAqBNy3B6Fd3qKgnpirrJHYRT8Z2ZdiNyx26xNbARt2aTA3eSZFEXZA5BXwR3f1",
  "key36": "DoBqBYPdb8oorPkvxNqrkwV525REejyD22w7ig2tzKwSqCAcrLum9NsjLx4nAZPhxJvmwL1yduaehynanjMQYNp",
  "key37": "5dfkJR71Rp8HCKeh4mi2jhsNHfShbAm9fx3gFH73Pqf4i9rwajCo1VB5LLDFguAvye6WKx7UuVppPyHWb5ajiwH4",
  "key38": "2CkRG52iE1NuJsjXyg5u9H14mW3BGitgKY6Ba6bvN5vvUySEiEs5kz1AQtELhm694epdBAF13sGgJ9bfb7rNaEh4",
  "key39": "4BMcno7XPESRiQ1CYyPJCHgKbrnK5brwi4MCZE34EgnBWazWQZDpE3hqa6TpAYsLhcetk9sbQRdhLAf8N7XQW8px",
  "key40": "ShuWtjeRGW2udEXbtyAFiPpFfFqizUCAzCB94yt1jTRs4KUMHDZR5mafYVvfBFAMYSKSMzey56RFbjiviaVZk4f",
  "key41": "66hpTxU8cxwDcsvUNDn3zzV2TUfxwFjNqUyoQniTGZFqoKSuUQuxRkF9f2H3pEgSQwoXhwD6wccN2Yc6fZu277tk",
  "key42": "9cA635Be3NewAJk7iGnj5DF2Gv8c1BfHkSreBEC1wuHt4YqbVyaPxJd3duk1XT9CZaCkhPfS6nLeFyEs2qGCuUV",
  "key43": "2X22gjzNqVKc2iJnfNpfYcCR2sU1mxBqPR3kQySTpFvQwZu6NRfHFTC4EzYL8dtq7LHGihkgrJyBjuNkZL4HFbDL",
  "key44": "4DfJ6jv3bJVcGNSruB4mAFb8ZsgcJhBcVDdodbafnDG6i182J3Gtrb3GkLbqTf5aEG8HamUyR4CYurb7J5mqeJPr",
  "key45": "5325jp5sW3at54LTDYSFsHddbfw22TzsiYGdsuvRLJ4QPbPiU5c7p1qZBFRnVQ8Nv9YSGmb2qHNrzXdsSmsZ7J31"
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
