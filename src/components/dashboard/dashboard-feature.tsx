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
    "3eWEyoeMPVLDW9EHcyMGprMMwwKvhSHyshazdUX7A8Dse8L7GMrUAL94Emae6AFfRh4avkwB1cmqJ13qhTfGEUXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ku82yxiLoPqcufKL14jsgAvN32LrNMNqGmxrxLBLG2xhinCAZAoxyL5a9Ez2gEH8F4kVzETepoeYac5dWgYoCd6",
  "key1": "QhE18eJUKVhjBoN35G6nfnJHYURHEB6AVfsYDQ4jhrL2919YdypW6Fqf9uEEBzFpfcaFmsV8RuginmZSSccacJY",
  "key2": "2grJMT85Tx1uwG7Zg2w4AeYLANLM23r7BoRUyyDvZW6TYgykxBdNEiJdu4gUR1zrHSoBcNJVghorRJxJh1Jrxnq1",
  "key3": "2NvHjtJfcsBCaJaSXYBkMhGxTBXQo1F96qYv1L7V91z4Q6RjgKUubLSgbX4QrRnybiWmWhnTYhD34zzrfgR9WzU4",
  "key4": "5f8QHpwZ261rZ6XobW75rZ3wRePdNDqr9yGvpUAk5HjKu4SRzqGwWtr3XCgyQVezsZ61T7rTt7QmnDZ9zdzk7rnS",
  "key5": "5s7pPjJRQDwg2jx7wtQSbZz5xUrgRn2F98Ukqg1g2A7hGbPSCpr3xPindEimb5V9ADxEc7mfevKNAWUCxQmM36MN",
  "key6": "42vtpSSPy7xGCLFJEXtHKj3n6t8qkz5mjXRhWTFWBZXjkcTEix4sHKrJBVRSXResqFTdrWG5kZJ7mDRHhqr7UDRh",
  "key7": "61jfMLSygxScwhdR8jjxWDVbWaWFQpQybbKsFEQbQCGPHVur245CNJGYbjYgL54tQ1Fa7ZG5P3QuFRvrW7PeXWpR",
  "key8": "4hmsZYTuH3suJxgerNJe4Fpwhkz7kcRrafucLg8g7J4rH6jrgEV7m7PZLy93zV8ghmfNNPhrup9t9YXNzZZrcPMd",
  "key9": "4EvX24qVEyxLEe5rdTspdd2cEg9YSgAh1MJ9RMYHP53RRN2EBbHRDajvi796CB1LCQQ2MM2deoDNryEVKoohpKuq",
  "key10": "aKfCP5HLnG7UGJD8MVaNriYV2nmWG4deM8JTfpLZ5xWpyD1UMz9RhQVL8w14JScm4q2A6aNF6zaj9RXsvsVzJ8C",
  "key11": "vcGgd2wHUToPug8vfQrmPbeRYTGq729FziVqp8enQPZRHWf7i1iLRRWxbTDjLve8NMLT5y3CB4tsJsNHSuvSep1",
  "key12": "2Kt5XDRDNJyydu3MnRanJagDj7bxNZYJUzkcLJMcKYxyDUhrHS1aB9u8zK27juh1SE3uHnFJjFuSDJYQ3fHEeBSe",
  "key13": "2eucJ9LPsUTY3wmmpxkTRFBMY6LSzw4nm69xtdwoLqWxWr9AUNV7svyQ75iWY6vNwk7sFcHLv1yHKLhGoHXuWrZm",
  "key14": "5yEewT1z3RXPbkj4YxdixeCVCqCBSsXftn9PXbZc2AShxAai62yvYHMMJ1JyMiZoN4PZETF75hVHdAhY3Lne5Skr",
  "key15": "2vbxRR47xcozB4EEhLhmv9jg2rmrN3Np5UAKwP4Z2KRhSZqNHHs9DnwYq2cEiSqNKaWBbsbyXLeG29zeVcFkkkMZ",
  "key16": "3iZgp3toVeFZiPVxsygp7Cv4hcGJ5hV899JGWUnGRGwvTdAjd5j2vmcD4NZ2pN778VsptaLwKDvu6kj81B6crQTf",
  "key17": "4mEd4fu36jhSTG2HFhHRGTGTjfkAMU8Kyg5DWCEbV8r7nwAK9oLVQq2Yf4p3ZeRyoFGbdXXkr79EkvZLbmwumtCN",
  "key18": "484ms2kiLFPaNXuu7HyBpb6kqNsz1bgVeqJg3dJPsE1TWcX5JAoUFAUoo118kaBTa7Z7kx3KXpduND4h1ZxEYJZr",
  "key19": "E4S5xFUnLDBozeRfAGrFz2Eb4CHgy6P5Tn6wTkHFDKUWoHdDrc1beuakA1jQ7FUxzPcX4LGsqGpGgYmwjbrKjNM",
  "key20": "45Z8xF2y5uRPmGxj382PmEbCHdDdcjxxpTdQPmZA3wXdK2iP2NLm5yYUQbX4MVqb8mEysapVJd3xuyLcqv3uNmak",
  "key21": "2u2xhGoPEjY2sKeWax9XZ2hZgwsY7TYNvK77WLzyQWGg5eJZR97MRtszLYvSPbHEiBEoWndBLhxFsb9Sbyan8izr",
  "key22": "5ML1XarbGQQ69ERH2RUBqss32jvJLUaBau9rnk7UmjejL1aCjvA341rnWdZikpbEUgqfsYqQCLpYd49UTDQBuKzp",
  "key23": "4FYnCYeQdj1V9f5SG1drictT1DKeYBwfcF3zKTkW4auEGAHcBr3EsXJdXQ7XLrcBZHSeiVYjrSV7JSX8tiPKZBT4",
  "key24": "5fxVPTGUwUiyUqc7qv2us2D3YwotJt7pnrn64FqcQqViztUyqgyumnLGmQ82J1vruU8mMHRkWmZaJC8Boxwe8YUw",
  "key25": "wByGmKGR2g7C16sUamo8Y4vNtaWz9mKmy19xU1wQYrVstQMva1duVcUXjbpE9nFPqLwJ4zs1Dyy5MbSC7s4tEBs",
  "key26": "aGz6sjoqarM74fwyUYZBfcq2NWMsZ8X72Smh5qmJdisa7H1AuLGh22UvMtKY14svNz7s6DnqSvWgkTVWJu4auDv",
  "key27": "w59b6avrrATxbxiPjtQXeviFK6TGDrJYcws4KmZQ8YBb95Bz5TGyUuRBrRKAtnoV3uBqswsw18E9WMPuk1LEsQx",
  "key28": "2UeQxPjoMBXtyZFUMVNjfQLD169wuFNGWGtzcwQbnY9k988CwPj2AXXRUq63jtT36CShNqmTMYQyCd2AuX1eh7VD",
  "key29": "d6TNwyqaRD9r77zjebpmi9gK2vXr71UemgXDB4LGNKBuJmtpQCSzP2nCigVXFPkW9AXxPAkXVc9YL8z6Efpnn5s",
  "key30": "2DwGsJKTRzmqo7NKrjGT3JDYa5ZPeJBQQiJYQiEbH6yP6x6uxnGLnj4Sg7ussgFyCQCKphayrHxKThbB6gig72Cf",
  "key31": "xDh6WU5vSEzDQ8u9iCYYJ6E3pSniV7okza7BejcrKqtYE8pdMNesUd9dWvy2XCsrzn6ZQ8ha4WuxFUdhgvCLTv6",
  "key32": "4Umn5AERQh9mvrpPYB4LAG62rp79MvbUf4YudXH1DEPMsm8ipVoByfLqv8VkRY4yR3zLUW7dWawds4Ph5NFyCKjN",
  "key33": "29cH1ixbQJfmseEYJnMiBytUWK2EJXHdKU2LEknRczPpPn5ADi9ggQFrmGwQ3iAfSyfh3RXBwJvPtqmsP7HYtPe3",
  "key34": "2diqx5yqJUKV758WAqHzqaTV6UPAzPokFagThZXR7sYbQvgNZbNUqdF36eDBjx6Pc7PgVUvTFc6mFVPQcwRXwM48",
  "key35": "3UM7Ncog17JViCnWVvVQdEv3V2Z6ypzmfvhm2yq82E8PReN6qrQ43KCX6nJyMNB9v3hUrpRvZt6KqYjezyMjrNzy",
  "key36": "5M4cFGWBDNNfECjb3n4TkauPcgahKXPHMfu18RQkpGcd6bNPRGzZXgjU4hR4EHs8ej3o7MiAQd368gWz9dSiweY1",
  "key37": "3Cr2ppkpZ2kRz6B4i6EP5GW5B3FquKy4U2iSNfHCCVXxvTVDv2cat4tK6T5byY2PEjDPQUG4ZwdPdD1regyP7ZK4",
  "key38": "4vLHYQfjCyfnM4iCrtz5BW6XCE3VL4kaQNitAp9qRVM2Xu4dzbx9sBK5kGXduTKB1L9qkyzFd5PiTvZGUyrWuZi3",
  "key39": "2uetFF9ao4cjxoK2Q5PD8sBPtuEzQjhajkFFi6Fh2iaSv5h2zgucihhp9Z39c6YAwGHbR4Y6kz14Ea3BzRVcRXpD",
  "key40": "4zebLiRjGVgA6U9597cfvsN8waJCxoJuYkW2AYsViwBq8o93aAo4LR71ukcBPp3TK9kdqX4Ua9Egt6QhFLfic3Xn",
  "key41": "2njq67JHLBTa1hbT5pkE8ycv2H2QwrUSpc1gQuDFoHyEkNtVdb4HPM4XShR7CrcxBvRvEMfs5FUDo9mfZmFY5HN1",
  "key42": "4UZinFdF5p2DGKJHnYKYxU6VF8nHdrsMEPgAUuX29qNTHn6Ur3zGRu7tz2WuS9W39w2T3o9GxYJmiNVkHGhdgfis",
  "key43": "3hoj7TSExmZVdUQoAu9kTF394RqJXKYSafqHUN1zyAvxtzKdAWs8R7h2967gmUtSwy5h4tRArYogVNpe93Q9g3g6",
  "key44": "rLxVojUUiz7R9kAmAZcY9kPStxUjtX4NJV2WGTf6no9vk8VTUiLUB9USkhZs6r1CyBpMzp2hTrunMwYXfHCnZAp",
  "key45": "4jxikr4ZxqFCFVBvKkBY3PLLRYY8UPXASvwefq983Z9u3KopvxRdBX2tWXKbtpr5Q5mEFvHzVonXidQyjZQDw3Wh",
  "key46": "2LbWQwfS6SqcrQyhvXruraHzbDv6J1tyusDff7VgqW2JS4Rykc7GvaxdcmQG91iwN3XBRPgkqF4n8HeDpJSoYivo",
  "key47": "kvnHTVXijXeCMQGJRS8iCVndTgCqY1p64BiYSAXksigbNyARUHz1QJGorZKBrCZceuGEBkaf6q4QW6pYKXMwZaz",
  "key48": "2cEwLc3nGCCHoSvYVCKnX8YJx5iiM6X2cWQ7mSvW965LG93ES5UWoLo5Kxuu3kQk5Hfwtkj6Q4o2MQbBtX5mB2j3",
  "key49": "3xTG62FmdVSaJS6izdvgGUhjxNULSyZhNh4xLXika4ia6HaZiBrozX8FBXZk5sEGDbN7RuE331c7CZHoVh5GpT3J"
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
