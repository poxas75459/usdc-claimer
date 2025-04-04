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
    "21yNwEb2cMXo6zASU1zPi4WNbLsYuuxNBLznxnkjBQ7LyDqNZqGcFegeupVs6zY1EwF8bUGKYX9kpaWoiDugFxjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qQnqF6risSCViaGCPcNjnMPAeKuwFbhEB9LfuUtUyjoFbkCmt3YSKD34i97LXQup5mbeC25SyqymMkPdCvJmmzZ",
  "key1": "5c7kUjRFsoJ2odDJbsmUN6WzeFToLbXUbrdgB8HjuDKZEzPacgdAGzCaGDrKan7YZVXUStcDgwdBdeRTm4CXGyTZ",
  "key2": "4DgZxUyPg3NuTnQgniaze1xxA5XLwMctnjA8btEbWhorjg8FomqLrAupgxGbyQvbFsTawankDoY9AMtnVYZ9basV",
  "key3": "2H6ifz7wqrPRJGLzwoNfeTeVknk3CoTWBS2uQYfRbRCT5J8asx8mPsxk5HY7Hyymi5QYrYrwAw66VLUQNUYJBTi7",
  "key4": "4ircWzDjxvMjqPek22AbgFUpSmnjdYYwxk6frDdefT4btvSgHNGjv3UQQKjCGVjqUeJQwHzVZZhvvVaTnPCXLsc2",
  "key5": "5ddCaY6gqvascZPPHyGWLKX88uvVuyd5Kju64k46HGXEVeBTExdjGDe5ynYpb6sgDbZKycQreh7UBjhNpKrT9vhx",
  "key6": "2t9HvVtYw5oDdTUK1jnsANB1zPsQtWhY8qWEpXXGRPy51JnsRXXmJoVrZA3mm6zscxWv6pKHY2iyLxgso9UqL99g",
  "key7": "4MXo1imRGDQGpLSa3GodLQudxQRMDMdaVXB3j4vDSzT615HZ9chS9wVFdK9jtF4si4yAzsPiYe3QwLeb1XPXZVHV",
  "key8": "59BNBx81SRu5QhtFJMizXoig1JVudoouU8js2KRNn8HiViiU9HQ8sRa8d6fQqT7DmMBh2HBq6oodJKe9YGV7rz6F",
  "key9": "3ZenCj7yf56BbptcY2PnsrCagkY1JrsqLsJXBnNByhKszGn1vxvVe3rpwjdYo2rvfCX58RzDfTdc38wT72N5pd7q",
  "key10": "56wFFyytok7pJmkoLm3d5NtuvHvRngMsjLGXpD8mhcvGogawZjFgCgxJz7kNEyvDgQiBRTcbHr9YQjpFhuiCPsUC",
  "key11": "JhcA4Fho51WudALDqgKxRLZL4pKDqcnQHiKK8jJH2UARxqnrnTGJPzmCvuZfw8j3LNXtbFs5LGXbCs25HWjVMVV",
  "key12": "4Kv4dtbLXxAqySKvy686tEX76yu78QkLAs33d1pn3JhhVC2CYRa9XqNoH8woVTr6QtbA8mAvKGG8fZEEGzDQ2QEp",
  "key13": "3VyiXUXvyWyV4hb6Nk2tyvf34eNg8Rh1DesDQxdi5TE6mbV8UuYJq2HPWtdRHfczp6ZhJMdAopSeaDTQGAUrDXyD",
  "key14": "MyPcsXiZw7Hkoegnq7xPnAfTCCk8AGzuQLnvhNFBhG2iW26DkuwNb2nAZ7AtUzPTJGwroRJLPzPYfJmbnN1cWJt",
  "key15": "2xijitmp51YKW3L7Ae3CGB4gqyAsmSE4FTKQRbjs2u4mjoMM37jmdGrCCKMqvFC2dJKjY5iGfWukYbwZXJSkkpT6",
  "key16": "3E1efKpaxFNgmgw8YJuD5XZQrffb3Yr2hGEiNUWV4VqJXz63LTzXX2HBWi79mQjQjJCcuhfjwANHZ6ZRwV2o1p5f",
  "key17": "2JDvNS1YRgi8J55Ntvhku2pPo5tHr3SKRMUpTqb8KRiVLDy28kECxHeppJkz7qvXYp7z1f6ATc87A55JvU1BR8vp",
  "key18": "zEJ6mkWUB9BKa5j9WQcGcceUPL7nWH1BCsuJ7kFsvXuytCCYQ19DwNn4oYQyC6fUHMBWEiGSfKMA3At7AYxvczv",
  "key19": "Rm3AgRxbm4whxLjfWeBZvArLttu1ogfzVfiDcxuWmEumwsc89L7FBH9X1qHqZdzNfPPffkLCGaG1XdH5tkwJaJ1",
  "key20": "4nt4ukrRu8pYTPeb3eW161YgTYuR97ibJSke4E21pSWFLLXEZAv9GPynApLPujApW8xheWDqVB1V4hRRREXhh4ui",
  "key21": "24WaJv8pUPUL7L1Z7maFDF6CRJEh3N8AWShgmaWv1zPEHcUJFb7vEM9go3qJa8csH7nejD4uRUkG3mQGzqnyouvq",
  "key22": "44bw3Mpe5DrPM9xBQX2dus9cwbTKY3Rg5RVNxF1RgHCXevaFZzYwyrYuMQmiUW1jBpUrVPwsbGmxB8dXpc9RQwkE",
  "key23": "2ngYL3V2uVN283VN5ucgBz3KpfBbQK2LYBPTg3LzyvcjMWGvoHx6K3fKyPsSXzpYpKemHnELhPnxb1mpcrg2Vo97",
  "key24": "2VvcqH7zjQndAXP9sJ7PtNoeRNE2rXBS2a4ETepMJvarSEn5oHEcWXuDqcJEwrUhgbC2WxFRW56V17E5BKjRqfMo",
  "key25": "5Fn2QAGTPyQDEXxzw7aE39Y25MwSnPzeUiYQhkp4dfXWgXg9fesubhkR2Fk8cG8uHyZHobmWZ8poXzs6daF9EhM6",
  "key26": "2vo3RFd4FiUV7XtqHFfi14NSK9Xtwkeua4TL7WquU7izX4PwU39frnBmwyryzbmdqn8DDSF4jrUaKNhUASfCGx4M",
  "key27": "GXy4u1Ap2dCK5g61iLdbxbGSzbmEyzc84mkAmKCgtmkApWoHjZx7UqVD2tru7yTdSdYx16T9sqnZ5uRmwjE1CRd",
  "key28": "Pju7cKQfovbPPkxBqKde5ht3BpkUEHm28L7Ac3CAajp6VU8bNGKUmoXzSxF65eu1hfm6tZgr7yfZrMK5eET3oaQ",
  "key29": "3SezazJ5kwT8SiPWQCzRjFs52tgFVWr7v3qLCdirudTmtD6RBmZjiKBqKpMgPCi7wgzggPBFSN6LCoLEooCZVbr1",
  "key30": "7gQ1PKB8SWJx5adgD7VoRa4QnEP3SoQnz5fxFnCCrFKuF9AaBxAwJ8VLc2SksChqz1VkA6FqR4Z7MbjJW5anNJ5",
  "key31": "2foAN8EYZQPZLUsaBVaVLBq4TghagDXyXfpKAZXoaeAKfdr7UyjZQb9UttVAMvqLvAj7fRs9Kuwa1Xcs2HLYtRC6",
  "key32": "2DzQsWTHMu9CeB4iCoZTpwxgBKRHjyas2jjevjbZDLbuBNqdv1zXujuEyCvo7DTLxUZ1zaeBbTZTxzEnmnPZ1UBf",
  "key33": "339ssfsLcKpfi9jyH5QjqKzvThS9ZKijD3xdnikE9wYXMKzKMDUovMXokMi7sjKjsQtAAWSBkVZHmwxxX9v9vbxb",
  "key34": "2go3QDXUKpBhZD4MHk7zeWr9pqbkBJSGxojmGTE1c4NbWVgHj5WDK4TQGiLj2VbHMCUfzryYLJg43HfxfAkJGE77",
  "key35": "KkRvHNGodqL1zQdKxLxxDHgrHGAEP9vLAQZGCfjZQjDt2mcKqSJSv7kS7Muarq4fHtsQJxZTQoNRLmM7LMB8RPv",
  "key36": "5Ku97AmDEBT8pWBN6awHuo1dZFR48m8FMW57UEgYSXvn4RoCoKeFz25tLYXWj8c8ug3LafSfFm1uvtNQseHrofc6",
  "key37": "3TefexHTV1wVDgyKP5ZquLDrSehr5RF8pXdiRdJ9CST3cRVF9mKcCZWVuC1aJi1EK6Jii8vymJTvqhSBbo4zvKQa",
  "key38": "BUia56g762o7H2bEDcrQG1M1JWmksnoLimRVT16SW3bJfq1Yf4WUA4DCJwuY3fF3mRDZKbW8pav3dbZXTmT58hp",
  "key39": "4NjFAoHcjuzoQ4cMj2dhuFbDMWcW3EahbywB2Zfz4Sm7e7LCbjXKzG4mdoyxuTKKoAFYi4ZCHS9g8rDXyQ1YaHus",
  "key40": "36t4TZrn53aGYwZEuNgUpAiXTBqzhns7mTscuaAHJdepARgyZ8nc5oq65reKkoycH9YqTBzDmGF2eV9bGBEBVHbf",
  "key41": "2AtxiMUKUA8Ht1RZDt55TnzmDGWpK9bSxacLZSSdriHUNjAZif2H2wQrNoQ3zy5fBZssM5LcaVaF3qpfqFBAQ4UG"
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
