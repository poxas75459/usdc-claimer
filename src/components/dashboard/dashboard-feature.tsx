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
    "5a8RQHWxWxDCAAqxf1qtuYRGuSr1srkhRpxys2tKFvFX32JkfmuxR12heshy72G4uSJGpVGv7xxdmwEpLpZ9Tbnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LMVvT4sMn6xpNqA3dukuNHw8Ku1Y6ZXcUydE9oHquBjLvzhRfoSdGK1tpiFbUNkh2RurhfK1c1pKdbQVWD2fk8i",
  "key1": "2t8Ce6cLy6iCcu7EuNCEZQnfdHh3hPLf7CfCoCWqdxwxDyycHG5G5P1DsFwVGxsVgvFoyMSoTCsCjwWydT2Ucp55",
  "key2": "5M4vPJuwmspM8AegF6BhW7v3Q2EcuhNnPvR7aLsbcaf7S3CFAP392AhFzYFLHJ2W4Z4AKidi98rrkoRGndpQzAg3",
  "key3": "omt6QRfZtkcVJeaq98t613fiFPhBGocDFGJk4KBcnmVz7KFVq9QsHTYmSqsAFe9jANUC6tLh7nPygPFK9Tc5Get",
  "key4": "2wqcKfjhoZA452mWdTbyYDd8PaZVkJs5wWpo7bQa6YWoyRk8jRWCRmSewxX5xg6t14DZMUTF6JT5L7h42tfJJaYk",
  "key5": "4B3fBTFtXThMYEMzngwMETeeXyXi4aNGAKMzKWjs6uEGo8iSLLyXh44KwVdPC3XHDfDoZcPmbXoQAbqYamrynhBG",
  "key6": "5WCaYizJLPfZNvLX8yXgXab7Q8odERC4D9o4cGPVNKP3SkfRDX4qNwxTi2GqUvtrpj8ZP6HqhdgTNXzLj6jZwHAs",
  "key7": "5wQqP5yV1fiYLJVn3fPntWiC4RD7MKGdmYgnLaAUufwJJQXDBQbboyQ8Lu3jUvjVGytbAFyhufN5Gy7DnwqBWP1a",
  "key8": "gFUhMoqB6jUWZJC2BT4kZbmZaztBfG2JkPfDo2xQ9MXM9yNWf2iYYaDjc9bUn2MNHybfJPsDjQqBpxDB9PXFyQF",
  "key9": "3SXpx6BLTZsusP4sZV7QSiVA4m9LqWgmCGtTm1boVdK5zn7qXSsyL8G9T2TzA3XEYA6XjEmnBGyHGiWyoEmrQsAB",
  "key10": "2bA43X9LBjDeotg1RDnheRUFjJ1XPtS3AHjq1yS3N2ixwawfDcjF9Pg2DhNDYo7oSqzZrirAafKa2Kzu5mcnoRsE",
  "key11": "CZEBJpzn7ep5sc26UTga192a5C6mAuoxU4L8Yui9WbK6N7SpKTe4eQ6SL4kQVv6DbPTBkM1eF4KzDMVxrn1aQ9z",
  "key12": "3nXoCEzYFKaohj3uauBbq3MrprpaiHTTL4jRhF3KCaLXDPQvFwDdPkrDa3yhxLfeP1e3Gru6qztYdsu2iZSg7YFW",
  "key13": "63ZRFcqzj9czUh8ymAK1kLjix88VkqSwjyB9oBT8FmrJ9q2E2nuqd15YnRDdkkThdtVwVqM9wkdmG3ocjT94UH7Q",
  "key14": "33PmwABnwxoQezMzpvm4iYcYvrxyebnqQ3jjhgHYPcNSiHx4Syk5US4xj367RTjrrNK6JzQeuREYkaxYSuyJAvTn",
  "key15": "1FqPJcctwairZJmBFh5qDzp5i3N3fSnWM4GmE35d4U9wvfpL4LafHSYTamZebQ4wwNNWej755ykuxMRibmuTucq",
  "key16": "rwYPBenPtkwDYQrQoUrAAuHXAzNDeko86oRPxR59iMW49zLUxgoDLBXFMp9otunVbeVm5ZTUZpmdnptDySU3WJq",
  "key17": "5x1UYKTPDcc9kT6KNRVKE1ZR1ZYyoa9hh7uNYsVWmfoTT5j2LeDtxC8bqLJcY5nh7wqN9MdRS5gEETduo1bdUCAW",
  "key18": "44KAvkWQNxyfMDznFhLLyw5GVQDw5nWT476P1LfnAWWU5t1mSCezPoUaHPD9jTY4cXtmZuimC1PxEBu9uvucFs1k",
  "key19": "4S93F57JNuFDYh1B73f5uoQ56VrmTef6znhdEmnAf1oULn9v3VZG8RLfJCVUiVVMcGCnxY11cYhbLW4vBdLATRr3",
  "key20": "5UvyVxJHXzZSjtmEXvE597kZK5a3v4dEjMSVTKHCuZs2AAGWmc5MfzJqyeuWu5ewmz55W84qR1ASJ9r9pDo1jwKC",
  "key21": "45n9s6iMyzAxDgXGD6zYkjxcdKLqMH39KJrJcrYgm5BYTcez9hU8rct5PDUDtvceZtmDjuHPEry9rcgNAoCGvCqU",
  "key22": "4WAYqsfTJWebTTn5EAnxXYCsQ5oQhGgAdP1BxMJYio951ix4MTWbMvKjPxQ5iQ9r7wKq5iHRw6rxaAv1XKx2ne99",
  "key23": "2By464xnNoZpsAEDseHAbjtCq9vhmzTqTZ7A31BvPiwyM4ECWQuhPAcn83PTzHycFuGJJY1MupsFiwawSbmrUC5w",
  "key24": "3zQPw3NmAPWS9o2HVEHWMg2Tt3icHaZiEAzN88aBoTUaHieAAxneWEbKgK8ZJEwuomJm5DygTnHnpG1XGE2bV7A2",
  "key25": "2rHSCXMgJkCjaX7VDhPVTy8MzggRWp8UkFvMZydwkirxmiFg3Ax6pNBJod3dJhXJtJh2ysgLyxTLjsPrv8U32i2a",
  "key26": "47mEc3r4YzwdHvxtbNaWPD38NjS8YqzxkWVfwAoun9hqR76ybeEvmwciPND4ErfcuXR5APhwFwW2huPpEohd74WM",
  "key27": "3bNUGMVEZgHdEw6Q8VVWMzBvD1FULaTBnAfZopDnkiu6HPcRWexDs7V74AjUSad2CTaNDZXw318D32gjaXbuYqnh",
  "key28": "2SZDGzcX3mFhPeFJ5iWwGCfYDNpHnKGtYcQSGqievzCgx7E1uxbwmxyx3W6V4HDLgsm9mwrvkMaL1qo2jgEWeLDB",
  "key29": "3cVavhbftPmjzKcru2CuarxYzboJkHhEVWvjsqPea3Zb2qowsVXY6sKWHBPxGsUQU1JNiHAsB1i3rQgEHoF1MLh3",
  "key30": "3B3APRMkW6V9ijiKJEh5YjefiQT4PayUKLm4y93FgqMFSs5jvQEx59H8js71T2DzTvr2NzQHQSoR76gvR3s9s1wX",
  "key31": "4wt4tMdjRAqYt2MvTHf1pvwBhvcQEvEUF2P3xZusdphBsF8spafPY5wvGxiBGQRpmnPbLfYBeDkdgcqGaQGfWhzu",
  "key32": "47s1QXKnAzS9mZSsrrvfpbF6wZ8x3fyMEsz85js11siFuq9fhVSy4ARqEQfWQwjUhTNeH2ALkkv2DTwT251inSEu",
  "key33": "5YsWLQ9vkwqm314pjcqu4mo896c3Shwo6kaHUu78LzNeZ5ZnQz4Gbui1MEQtPmybziX3UgpYySJW8rSxTnoXHakt",
  "key34": "4sokWaPo1pcsHCZghWprnrEhEShfWxsJTG453nCAeyiZfhw42zSwAFXGyVmELbpcMU25eEKTPp2Xnzfj9kn77rFy",
  "key35": "6152tnXcL6nJs3kcVKjGtZRhjKrbCogCWZhV7PgWWzN8Jygfe2xBYAc5y2NUeYZmcSgv8Sbu5dax5sYCMFWuYD7Q",
  "key36": "xWQfidWybSZzDLGeUFcY44Tq9bGykDQjPA99f749gXC8UcNrMMzH27aWBBCbzU6EhyvcyUMUFsuApoSDYMFKYNs"
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
