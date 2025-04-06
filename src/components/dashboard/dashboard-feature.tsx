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
    "4NSYYyX6hJKWupZfotagUb3yTEAN6UBeaqjxcP5vEA8Nj48HmUE3oVMCdUrCshSrm17DMiDcLC65QRFCiGTvxLq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tBmmB8QAUMNRXWzdFjECioSc9bNRTUHawUUxYyToJGvtnQEPBh4Vi7ceqopBZY9QscVKuYMgjEUjrZmf6SvEHTu",
  "key1": "4azBXjpKSKd6GfrMv4gYgt162mAoVJWsHAbrqXCaEeUnnLuh3c27cfTGDeHcGRNDHgUos33JVZFhbM2XXVura9Zr",
  "key2": "2qq1ogAqnvk83wRuYwhCftZ6h1AC7p64PHMn8JkSXfXFAfMXkaVzYKiZpFuVrdzmhftnjmtExmC4WCpfVHPUW4ZH",
  "key3": "5FEfhVB6QRcEtCrbQURcBFfsTqLy5fM7TnnPDwnSPJUdFbnuDi8secpvhh2JU1AT5PFQcYv5XLcTzztEB9uSdbV1",
  "key4": "4zYNC89jomkQDj1GL6BXSrDPwmgqYHzPnBX4DpJzNx2tf6FCrwo3MAt91651HHuKPtvkgN8qtygmfzFbvv1QoNYD",
  "key5": "3nMLFxiNrh7vJMnfrS3bfU7uUsh36fuK5c1wJ6m2uRbk6H4yPRZVH3WnTJBfPs7eUjWPNQXMwwXydARycJbq8ZAn",
  "key6": "3Z7uTY4jrVPdUSKSp7E8du6MECnKbc8C9WdciH7tL5dWBCBYFgED3wHb6p38zGv822keyFT58mvunZqsZMwP1kBC",
  "key7": "5YtGdSMknDV9s9qVLbnvF9ifT5Y1foBaaJFDjWyBTykQgVcJNRPs8LX71xzzf1fuoQEftkSn6DZACwoe4SkKz3H1",
  "key8": "2PhEzyBkHtZ6FWWbx2RS3anzNLUbbLmpTJo24ZStgJJZ5SuEFiXybpf8NJR7SiP5GYrAom2piatXhW1SLKt6SYmN",
  "key9": "4nWQk7BGc6LCzwQ3VTZnZ3Cvz3MT5FzshqXExrzf8Mx3w4pTJgLjujKSS69qvanxQdSk7Mb4hfR8DkzVDdt888mP",
  "key10": "3MBP6KCGJBPJmjRMqUVWZ2sGcb8S3KLooNqEr6TxYPFGu815bMgS4oAFQYcMYmRxNjrN9VeFuw626tW6KSTjyHKi",
  "key11": "2qqvuxNweAJBjVoLVYXMG2C6Q1cW34dWG5K8N3rbixAwuraeGkmkdojVUPuA1k1L7q988gRRLtuhHd48EiYu3Whq",
  "key12": "5wmCmvJWpzd1twqS6j6Lbcrytb7pPh9nBY4PB2jYNcbZ39s2CmX5MTAak1cn3JgdnJmNYodAw3eDJTrwsAasAjzw",
  "key13": "3zpSkSySNrBwgqmzax9SzcfYRTjGfaq5fTcwHaFoe74jkWuyPVyatq6jn1q4uHA5xhd48QHoQ6LVxvjrWjCGMyjP",
  "key14": "4hKxYj33tC1KTS3uDWkLzgWmg3YSMweb5HiXBBSMn9JmBcuwGz8bF45okDNwcbHNmWMuDAVppNvUM3HphJWbuZiR",
  "key15": "2xgkf4d54Lf1YcTQZwAvX219fh3nPVm1ULg5fY6faz2r93XboA6CkJMdGWtVPM9F7C9UwpdevpK6V9SH2m58nAha",
  "key16": "4yRqhmgJZE1VicYq2Yy999mueEtFmeg2kzov1Bfig45YGN7JGSUBkVJFc4T4weMqUNztrBhAAqLSCyi43z76ULAE",
  "key17": "44zWzW38aHaikzQB5QvDJfn7Miof73B8A529SK7qDaXWAWCspJtJPQk94GcexuL2NPCXxKuPYNVKWbVME2ygTqMY",
  "key18": "51Bp3SJXQtjUsZmGEF3FJHs511LEUdJqbKFxwYKRafy3UFDw8WJskVRXzcCJXe7d3vSKD7zi28SJ9hYQUwYbMcZr",
  "key19": "3pJE8Rn9wDSfCb1YzpxM2Vfc8FJKvYQGLYRdAm2sN5P53nkiF3nFAYEfpfsUuN1ovFjGogg1bSz8X9Nha47ckQEW",
  "key20": "2a4rBMYf85LHgGkXvV7kVrQTZPEpEyxm2Q8oFZvSZ7wTXbErRYW7K9yFa8an33ayQh8cqq9QFMkmkWYtFChUVx6G",
  "key21": "ZMscwciPKTjLxZKKwuwKmZpc8izyN11U1NqQeGEBf6SaR952RGacV5MKmPUvAkkT4YMoTNAUn2VAarmasS7DumU",
  "key22": "5PtpcsqTRAESB74sNQANuosfoi6zLRuSDJnuZonpXSNUfBTy7CAJUeLZUWfgaXzBpjrJT5PAwbyWqLobdk7aXhxB",
  "key23": "4RFbXQpiijwFciN9fLWMgK8knagacd9JnUkUDux1xU9kBoYJcnAGM9QqFmRTiD1vLrcRQFQj8fMwrXeg1ubbr9DU",
  "key24": "49s2j8SACZgM2sN5jQ3y2MVW7sn5VgDS63qc9AaRqjeh37zXwCqkaoVXABz2uMJpSmqetKK5uZnhdDEadKfJF7nn",
  "key25": "4vMAYv6sbJpfgMpgwC8QVde3Sbi7BpLr9dnwbNMYpazmNaFU6Yd6NpZrRELfYoRcTDHkauwz83FyXU2bW3RC93Yt",
  "key26": "2vztxkjeg7HR5ApvsM4oaRuVfAXe9xi6v31DkZ4T5pXfxrdAhuo8HzKZGvF8WZ91oBHnt7xkLzfVMf7NVfATUnTe",
  "key27": "5a5oQ9VRCxCa87C9YBQ42HyjEwZEAmGwVqg4dkQnmnUCceDfNgQHFS6BNb1FLCgEXWkY4fE1SKZX29NLjCTHq67Q",
  "key28": "4oapgKta6SGLPYfzhtBLJGyRfHJJbE6U3jhhu2BzvAbDVoBSYpib9r5FNb27RXfys6TxHw8nRVLUHLT3abKVvFt",
  "key29": "Z2eB6K3xQLKSBH7xfzh9TrtaWGE4fQS2YiVmQK5mH3tDsfNAHJkhvrQvtidm3kZtwK1v9MAHPDEgrh2EktHao7Z",
  "key30": "2G3zQXUpB68niyDXegXWJhDL996BzkAcpNZq5pJUkw75EgrKreWjyeTvAP7TxzvV8JNJyYwGHugCG4KVHgtbDX84",
  "key31": "QjCFAJ6j3YDWx6p9mtrc6ARvnb6wcpFQTAaM2TKqR6uHHRTnj9Vjw6mR9FZNse6kUMSgpiV9DECyEEBUTPuMTg7",
  "key32": "daTTqfBGtcokuaGbFi5DR5DV985NYB6cuTLTKY4WnHXvLKatRnkVubSLq2bRVCZmBnY4VMLSRFuFKeXkDUH9SZM",
  "key33": "25HH2Rr8DamTC5gZCMDwQRGwJdBA5xx3GRvYVEAfvrED3H9JSQ7RF4RfTV3FEDowSa5ArYzbaxpAeAQeCmipNGPS",
  "key34": "3FcwdTd6RvERfyCGzQbp7DxJwbUbBVRYZvrRy5Msw33j6puRhMkdTr7nR4TovpumkJC2a6k8bpZUQo4AzN3ovqZU",
  "key35": "3mYDSpt91Uc7AijUbAWFhrSCoKPsLk4A8LDzwufDcJyCW8YKFEYpDkFXhtDYD98jiZEJ5HQoVpjqKpur8WfweWxF",
  "key36": "A2rtxAfXhavcfoV13Pw1DyExNorvex185j1ivvipAF75SkT4zm2H1ahYGqVqkPatEwutsFUfXUtybEqYEYHMixj",
  "key37": "qN1JmcgWgy1LZeoBgJUym5WbEoapDeKrewiym28aHuBau8ARfntEaZEQCyp5r7dbbo714hhaW4DawsLCmmidxSF",
  "key38": "4Bxx5GMQFjbf6kBXDeK9rXQ1L4PVU8rtg4A5AbJEmB2A21ep9prHpEQykNB6dgfyLeN3E5zakYUR5EMxXkqJAjHc",
  "key39": "4JiULW92cZko9Urwd7xuiC7QHnYFTkQXX15EMCJYBY5WR2eoTffeXVuMMCZCF9mD9797nruhdEii4NuJrMT6Z5gj",
  "key40": "5Exhqa7UsmikjUmhGETpA67FXfCtVsqjiaGLgrEcovU9Dk7TZEs993sc4jT1LZQRUqwxnZ2gsWoiJ7zNV5gtGQ7a",
  "key41": "48trR3cCsjdWbhEf3DMo9BkrthrmFEcg6t9JXZus9YokmBQnFUasNjhXEhFcsDRDBH5dpCD3WFkgrJfXqL49MX2b",
  "key42": "3dzUVWWkL3AVBytCtbmuLojt8DVZTBWCWK6jGLbWWpLEJE68oq5dsbxNbrySNVJ91fdGtozU6gWP3TXDKYw1qKvT",
  "key43": "657q2N7EyFWWqUkL9crfhqbCxr99icEaL5rL2D8rf8TkuH6T8HoCvujfDQwN42eJfX3rqknVZD7EBrKtduM2HFu5",
  "key44": "4NkNkQmLLzNAaUZcKsDq5sQoXoAysWSUfi5GXpCGVGokPRpH3x9t1aGFEtsXwaZKCHegWdSKDrzmpPEEF5gs6wPu",
  "key45": "27DNQMNnrheWFFyrHsoVoBhDYfveCEdw66sAMm9TZYiVLsvb2GpwBHR4znkcVGxHM1ygdkrMLT6k3rcFiX61NP6W",
  "key46": "443p2CeXBh8qi4XRxNn4H4fAFdhuw5GTE1gN6ZiGVw7N2qQ4uRj9fp7b3YzigqHxtwXtqqF3KrXcJ6NeyyuKohWm",
  "key47": "4GetBeWzrs6MELHF6he6dHV8UFhVMDpC16e6eTWnawmDuXYcYpZWpcdRVQdToN9sbJfABRw6GSHPt9HaKNL95C4q",
  "key48": "4u6EX9Y7Po2sB6UzUBGTpyMCqkSDTg6bzVkktgKgUjXHZxw5xL65wUjj4WPUiBm5XLnsuyHSfaoJbeQDMM6sniaq",
  "key49": "41tPyu1nkKpQ8pYeENtr6XkAsCzNnnfm1aeEdm343AJJgfTAN63PecfmYaJXQwaRjEzpUKokARXYhM2gm5mBb3FD"
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
