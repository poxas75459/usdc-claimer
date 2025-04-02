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
    "5V88zbeNjpFzdTM13uZ1pnWmjmBQS3dwHCVb971frGGeafXbr5WKTnrq5Hi5EGJPXycN2EZ3MGA48VwKnZabNw58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MPVjksZx7wWieSFuBry2VrJs2qZkXcpxJVS1vsd5a4BNPiyDxujLvJG8Mu1eR596dNg7J5ce2uicaXWrMXNdmx5",
  "key1": "2LuhpM5yPhwe9pXB4paL41LJZBWNceFuY31prGcnUmu4MLnTdLYXnWJSp8yuAn5XmpGE4m4GYeNppaBUgKVEEu6c",
  "key2": "57ESNqWtFWTm7SgjA8y4YVpNKXGxnKZmCVnJ5FxpJWmC5cJ6gqhkA5fZD3J3kWBseso9C2N9nPStgoyUJmESPn9A",
  "key3": "41sMgDmHvVPEFA3bEDc92NCmrrsnVbARsyzUhjP3k5qZEmQPgDvd8BMEokxByvAyD37fyqNMyoh3NjdRhFzbHouc",
  "key4": "2uF1CQuT9vq2hLggMwHhkDo9YNPHufG6U7r7g5LhPmy6ki6e7hddpfPQ5woUtXiop4qzGmAFVCzobks2WwRe1TmW",
  "key5": "2rW6aC3da7vXwACRHCayimMpz4hwdTcoGFKhtmJDsJL3Aqnm18ykqq4rWhYf6FEtBFxn3YzGDQsVqHEXZXrEoKWL",
  "key6": "2DfhL5NXELnbHrfXukfH9dJtWZyiX6JmaWL9yNRUgmL8gbAoM1w9ych5jqNahW6WJkAkNo3h6qyhnBe4Tau1dbkG",
  "key7": "3rWqSoGP28bKXE7vjDtw5gLv5BYXeABCHWiG8rfmaagkxaWVye7GShR7WWPByFD9zRS7D7rVjGU4pfGmdTa7Hnkw",
  "key8": "59RVmfEH25q6wnV4PitTQscs7fqM7nTWJ8KgETT3Kh34noYZL4eoZf4Unz3VF9k4yZVcCJ2ZxT9pdimKGfgNBmTf",
  "key9": "27psKukmfKLK6B54sbXefd5bJmRBVM4wQFxvfRT4TWsWrbJbYnq7xZaAwadTniUaV3hfe9piwRLXB5dwkHHARqfT",
  "key10": "48tkMi2jbG76akzQpaJPBMkMHUJCDPHCXBNgdFYK5N3JmS4iVMcbn9sUMf5ann3Y4dmJnpzAGfmxp4DZ8h83njAu",
  "key11": "5k9XzxFnpyx47mrLKaTRrHhtB4JpvSMkLLwiLFyY29KammA4tVaMqCrQSdQQTzrnLHdJV2psGyTtUmvRr3VkxG8T",
  "key12": "5yuJAmDBhnQH5Rm1LYRMWAS93RtQ9uMWBV199a76ypATTiaq3gs5CUZQ8omojinTKHVm2nq9xkLhjbfd7kVA9Rjy",
  "key13": "5UHtScad91t8cMc4jrbgKks1KXPAuvWwtYhb82AjcNrdPxchxctAT8vFUGdNHmeWZngAaSdd3zxTMqQHAPkTmt4j",
  "key14": "4rxPHECjU96feDsxXoPQs7ZkfT3H7kA8C3JZn3VNwscQ7SL4qDNE9VwmBy6SdQFy8ZCs9N3JkDDb1UE78zrJA4Nt",
  "key15": "2ijqHUEK7FS43DtwTWk3HthbMm6bGA29gPfJ11Gc3HDhhLSHdS9pXcvmdQBqT73LYfqa9QYJjN3JTDcLV15DFTkS",
  "key16": "5gfRYfkmzS8N3jbyJn5NkmEnZ8V8gvGbSSsLpSqKE2vR4P29A8nXxZCA2tT3c188nRNk9Nhh2PaPRurA5r3TAL7B",
  "key17": "5tr4UtuaB7B7jeFAUzWfZy8zopYKmTb46aR3ArvqCh4NCzaof3jKwt1rofSpPNHMLp5KDAEJVGaGw7W6gxnM5RUK",
  "key18": "LjD1BNuVXq4SwNJFmW5CRhYJLKAPPqey2MNBcpka1Bvhq6ucNowvJX9GVcMq8C3bzkLf98D9MKSKTrNd3TMHytj",
  "key19": "3BFNvhqggqQ7EEg2LzEUU4sUQENmQZK9UZM5EAo5172TQmmMpDxti6JPqtEsYfgR71P1tZfVew8Vp3p3yHJ7wzhg",
  "key20": "5fgA5nYqNYdZRndZdQztALRchZUw9W4YfrkAFxj3tX1BTFr3RP8QHhh88FeNsEcYwKWKKxsiEE4FpWD4ycGavLsx",
  "key21": "ke2AXey6SAtAY4vCuKJwVRswLySq7on6SKETykMFd3NkULD4AkR7Mc8GBxAvkwwd94HyapXeLWot2FJ1RnPqHBm",
  "key22": "vyDMLMLiZPnsq5z35xCVhrDbCwtAfvp9gXCMoUbVmnbCee8whqRHqP2Ja4h9RvFELMLoo3XCcVamwdxWURTCxyg",
  "key23": "aj7sdeQqzkfxRjQj34PKj8vazNjvu596yfqWVkPiYj2N5UBiNwcpcwfZuTYqKNyEttMjUzDgorFYxZDRZwuKEAP",
  "key24": "AkZt5vquRMBHajpZjJPXrSfr9oZ1fx7b3hmCDQj5YnE1n73V68V89ExqWUy4NtcfhZxKjnPbAMyc9vcAfnrh5fj",
  "key25": "47XaQU5MJrQunuwwuQJCz8iRVpxvFG6g7Vifx2M6W6w3r31iXDHN1uwoKcRXee6QFApQLkAc35sPMRdRZx57drwx",
  "key26": "pEZWZ4qfqJQ1xBtYMtGyq2mipHjjK8MyHTRLUHvL5NBpXd8Q16L7raix1MyYzfjPveUguVK4J5oQKiXMC71EFDL",
  "key27": "3L5Gu4DkLEGnC4vJBpUJWy3nmnd8WyXP5prZzN7m4DFxJsuxwtVhdk9KuygsemsY5XYnPocUytS6TqJ9zwo5Bwf9",
  "key28": "5WBZP3DRwKm8V9v63BHWj6x1ct2sMhXAS8qm1kAn3s6eDJJwVW2yryGAGZ2d16WXeYWpVA1JS9E45JzrusAoxk2B",
  "key29": "2R2wHAMyfJwwxSGfh8ZJFb2K7n8LhkNERSH947R2X7n82o3Spgf45TVLkkzMdSws9JFeMtvXb9zd18r7LH44dZZs",
  "key30": "2xeA4FfD2RukZECeV2W2YQ3Aj4NqDnPfZoujyujvb1tz4vPiVgoUdVoLUA4zxY9jQn3Ya35vv2E3XDndLpgD5LL6",
  "key31": "37eYgzYpHb75zAKbDrkwJhiyj1HxkLgPaKVTqzhJhTvixs1FuZMQS3TTFKY2LHgmVogQxmbDrsFqnUw6b7TJivpL",
  "key32": "3nea2Ejqf6SpPMVFv4hEbbspMigFYT7zZ3x1kYMDjjdRR3SmFZV5ACLcK6pVW3BRQLygZJ3HJydKb6Gaco6Mt8iy",
  "key33": "66jRH5UbZyjLcYUzctu3hwMSWsMg78cESjgY42cshsnR7Fdqc4cH6Go7jmBi5rZHbDPPzNsK7ftogsWtYnJSHPM7"
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
