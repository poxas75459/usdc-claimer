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
    "3KJ7HskEqMTHMXPAJU4AUeRdMTBC48XSFThiPCZsLhwu9B5ocGbKJTszHXHSVNrtYGtxDKvVbNE4adHFHWwVcXF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H58YNgqPuKKz3GN7uRDC7BnwmuXMkBBoHDx2iCW16HyiHXoCN2V7iUEBbvNBVjwUiDbiyPyCNEXDtnh6Znsv2K9",
  "key1": "2T13NxjMHHWy958W2XP4f4n1MvJA4vMjFBZEkaVAjDDZsVgTt6ZwaCXbQXnBcX3VwesDG3Qqrs5W7hCGriKjQscp",
  "key2": "2j4iBzfAzRa1Kmq9APVozeH8cr13nHfynHi1UUsr1og4B8KYQhpmV1eLWESHXF2s9qWNAxgoEk5EJudEGzkL3tTq",
  "key3": "nSgX4hUzn2Bwkt6vmUCc69UV13ptS63ZzD6gqDfMd8MfNHqBEGx7xHjDhM7KJ7yBH6iBZ6NHftHjxvTAgJB2guW",
  "key4": "1FQVtMVGB6M3uyCD9SC4DWKwsekFktxTpjLytueLbg9CbWgyMNCG6qk2M3VydcAZ1SqQt31sggGinSW8WGwKiiP",
  "key5": "4kCGFjXd1q7dH6Tph3QZ1RQkeSqfz1Ev4YLzQCeg2t447RLQYA6rPhTTuo2v58GFkXsStsTHBzYDGJ15MEJxa4bV",
  "key6": "3cxKcNkbD3FuQRXNUrDqT7tstuEbCq1uveLwnG8YZPvUUkvnj9vAKCn4avUJWFRgoWtgHSXwhDj8SecPwfW35q6E",
  "key7": "2LvDb9WCqgd75S6YUdnuPTSKGVbREYC6yjWrjXizGJyEXGwQiwfjMyiUFTeqr2c7QP69EkcPDbYfsYeM3gVf2JQ9",
  "key8": "5txxVmjKrtDLNcT4NXmSSVL34rGCjdibEJdLafdCbVVLL5gUjddZkfr7A95J7Fss4ZeoTEdQdDv6MTkimA2CbYcL",
  "key9": "2cwsQLmF2JNYD1p2P1JmATYc8bSgBeTPa1viXt4Fm291grtoGvLRj1oeQgfLxbuL6protmwyiSoWrPnU7bcpVfrY",
  "key10": "z7zwwzD639Q7xuUoXRBL1Arg5ZT9MPwoWEVQ6gqwRzdX6DnuQMmrrd4aAyftYTaHCGyiyEE6T7jNbWpV2K5SQDw",
  "key11": "2eUrZt4hDBH1Rhtg4JxjJHxZBiJW9MKTGbe4QYtqX22GTFPN8BtghrhBJziPKEC9LEc4bUxbNEswqcKXpwWPU9Nz",
  "key12": "2YGCghZb2duDe3KZAp4vBmYjAGBduGvsjCkwBnSDv6LZ77P371WzT8qQCBKLE14M2GEZJQk9YKW71Pjrix4gZiaA",
  "key13": "39cALYCMpmmrNJd9Q7oxW3Zcbz8wFxuKPnN8iyymaNp96v42sQy7nNBnjtGqNfcZSviHTrgs64WoxxDJ3f8n5VVq",
  "key14": "4pLj8dDNqk49jFpKVMDpV9um8QERP3umcc2uEde7aKa9k4Mvpb6Krfpmx7kpywgYD8os8xBgmpNPpE887fzDohZf",
  "key15": "2KHLEPpKHtVLQZUWQznK7LnYfhxymJ63E3e32E3QasHhyjeVhme9DZsysVnkwG4TAvAE6GHbBRomLwKS2cf3LLRR",
  "key16": "3aV397JmTbERKxb6CxqQnjgZszEwMjLibWLgDT7ht4if9KShawg8LDPhizicgK4P2M7v9CHDbUpPjWS1eqDL638f",
  "key17": "5EN5z26wxsoisvy74q1gCo4ZJYCuZ3DDmfoAbfDTW7aBu5pkjFCybbqtS9nCzreBM8pV4QhYtisJ2ACtEe6XTsqW",
  "key18": "3Wmfof5jiARsUSiuTWx1KDbTRk5MdD9T86QtcCKSujMPoqppXnuzmzUZNEShGBGy39hY3Vb1GRHxdnVPBbkfFdh3",
  "key19": "5HLe3Cgkfpn248H3krhJdJBevzMiR71wBH1ECZpHprysjqfJ2Jp7m8ed2DgbHfikm9EKHKp6CzpRhCfZwhZqJUa2",
  "key20": "2HBYBkzeR2bLXPLYuwL7hEZNUr4fJkEFfTp9dcpCLe6Qzc6mpiGF9oPevSBWa1io1U991XedEHPUbfhpobkJw7nD",
  "key21": "5RKHZBZrRkz5sKXg3bwUWqGoP3zyab3b9RDJfCDX9teFAT8pvcRN5LNLRr2gJAcMAYB6Nu6h829ejbaGsMJrnvtq",
  "key22": "2cVQ5ReCyJVeGouXVbGLLyczgLStraMDyTuTe1hyzzCkmGmFxSkskq1c169ZTaGNPLq3NaUeVgpjbW3ucMSudq65",
  "key23": "2z4rZGUbZuveMwdcuzpWoc73rmqp8ej5uc8GNEkv2U7Pkn8JJ7oNNNFhqUWvEMpBhzcKGHyuGwz9AiNCfwjpciU6",
  "key24": "22QmGcNHMrgsYhwBUo8hdHxQZ6UN4Mu3TJpdxuekSsVscxMBaa1RbyuyBuTPnE7k2Rt1TwnuQCLCzfHr128CNzFj",
  "key25": "zxexz9jYsg3HoD6uvrRXdmgTQZxRoyxb3bpBKJKNa4aG8JqdwVDoEijpEX2xGSBP3WZBx9dw4wc6oAsUXxBrmRi",
  "key26": "4zTg9Fz7ZCpKRrkAZR3HD1wiHQYnSrDeFjnwSHWkkEkRrf4cpeZtFt4hcJCyJDi5CZPZuSgzgzuSd3xpuz6cxJHQ",
  "key27": "gNEhtkdV1vEfUZaRA7pA9JdoE7uKMQ32Gub8LcVNCwKHbrXDi6BshAv3tvBL9Hbe1wXndjuNZTwb54HJxKMoRRH",
  "key28": "48vkiBuwqgYCUca3hNj5tS9tUhwgCB99Exzu872mmTtqQPY7K5HET62Boknrn7RJT2w7v6S8r8Qog6XAuhkMtf5B",
  "key29": "5JGuW8vEX2DD6MCV6kcEEt7UdQyuozg75kBuHcx2yVzjYSw4LT8ZsoUHYn91pXWnsEcUcPcPWRmZNnkq5uhLdy95",
  "key30": "5iAdtpKCKh7QZFdXT1BjgSEfvbyxZYq9QXNinRi5vWpnHcLCEM2GxqhcKXKk1RquVbJ1Zeb267r169qWbzKxPfys",
  "key31": "5s789bdViegUCiULFTjuZSckoNzKZcUNbMGBRZ8y61Fg7Zat3MeDQr2vvabTB6ncgtKbJeZZFKE9B5Caez3ryGf7",
  "key32": "3Lg6taCMDo2k5XHMaKAdmrVpW8e3caweEZLNpbLPED7eRfJbznvZXTCzeHLUaD2jCh4saGKvCceBdPEhQiPZNX7H",
  "key33": "5i2Ec6dYzqXdDe77UBsGdHDjXHSFWkFWamRuts6oFUkfoC3KqqwseTdBNNu9TUpfXPBeY6Ra5iZvXHwkvzHMa5wK",
  "key34": "4W8wUzQuR7Mek2igd1AwWLH8Rkfie8p5uW2BoA4qqf9w21GrXFLC5mHgUgVKVGQfd1eFJUyuCABxN1i6f7ZGpXBB",
  "key35": "3UG54bKK85ZVzJxkQ3LN8anbKupz5fzi2JPrT5XuCuvhCgiDXH9gh1gvg3krNFJoeEB2CZtNfyiWmQ31ntPYkafz",
  "key36": "3hcrbWiCRwnFj495XwAiRXp9z1hCKqfvJPzpXG9ffiBDTMhyWbcVzrB5ehHJrN6PnTLi8MsY3DYyKtZdEY5n8rLG",
  "key37": "24Fr8D8qbAPTXRUL8FXgXcMQ9kiJqNZzM6kb143hUYxTzaSMBLcg8JcyLNpqjxxez9PfVRkaWhfhEuBU8ozxpWSb",
  "key38": "5cBW2Gpi3ykyL3sb479DPrvmu5ZCvxJ2VPnQRPwNNoya2JiQEdry2gMeYFC7QEfB8MNQohKS87oRvwJsQX8YTymN",
  "key39": "4f1UNhG5s7J4rQnrcbxFMHeR8mF3sRGjrkuhWofa8kd7vJNSd5xbdrrzvqqHNjwAcPi2w4ZK4K7U13z4t2BZXZmU",
  "key40": "2oTVWTvHjNraBCLxrnV33gYnicBpvUJQEYRVuCWxEqcCC8J81F5yncG51y6fCP9rEfksekHjz2HdRncoBMTdMXHP",
  "key41": "5cK3VbE77B3fCQbToR1s6e8oeir9gZKY62oBYvuiF6BVweUeKooyjTb8zwsoqZjWxim2h313cQEQSszE53vLFZsY",
  "key42": "4YP2cM37GMgpBGejP8eeR37QUgsQFYM5tsiBaB1A7eEK1q9yDx57dU6pPBFgn5oTBtr3PhyAWYEv2gPRZaXfUAWa",
  "key43": "59mhsyMh56w7cyAJdnEtQo6xCVKtNtniz15afcwy4VrsiVK4P7vA2ePWMqKwkiwoorhY7FeY2Q2pbVzLzgxxJiqe",
  "key44": "5JmPbUKjSGXbBti3Ugiyz4MwijB3PHngPzyPjgJQnkpd4TZK4uj2XJncWQgNxsPzqdfKP48oRpBRwH6FTEdKAoms",
  "key45": "3GJbRzFYZVTX24gdrYMjLmJhnkCGP6wwhoqTVWyZ6Ttxd7Rj5E1e75beT7WkzpQZK1bjdNScKwpWDH5TAByVhJt8",
  "key46": "3TRx2QKvUX31jaChyDh48bZFV8cxQHHRE5vQcUCneC9EksRQKXc754xtysDgVD8wP4zHZzo9T9QvZCR7AcNf4JiV",
  "key47": "R2WA3qjFDawEecwMNvyKUNVLpxacmFg4Gc7G4yoCFxdK7ui14DBZsZKrSHWy1wBQZdbRfm9jaVQF2xeFvDrerWq",
  "key48": "4Gbi9VsB6ELz8g1HdvwhdkLqJMbj6dbuKRoLjqLCttpgnooFrtxtHVxThRzHTzB6HHtp9a8jD7ZgfKboYTtdNaMQ",
  "key49": "psqJXRA69vjVQomsxfKA7CS8QraAtGKpCrcdAgiAprMvyE5PJBD62Who1hGHq4Ly7TLw6NFAJaA8x768ohqMLxn"
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
