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
    "etb2cVwic6JD6DwP9sEKct2hKhSbUo9B4QcXKKwADHBXkLZmLGVNv1LkvXvDAw8NxqxMAj5ubwjUTmz9xn35uwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EPmUVSXZDGB6BmD2K4CPbXovDLQaPmgvkAG7JGb5CNoDE51VGXEWhEwbdiPzqFxp7MUuSySTsQx5KVmB1nenJf1",
  "key1": "5ekPhjr2ydvKsHeMNeMv4MXa4EN77azNZCDjGpymqLyUPU8oizTb1UZ3NVbg3Kf9ZGtahUCeytLUSR6ixKKkbw4z",
  "key2": "dZUT7MX1s1FYKwAdfY2F4qFedK5xiki59MzgFgQTJzoWrnAihpZnRFSpDna5HrPimvcCFvLDfSfZTBNYRSM9TYo",
  "key3": "5wbGBJts3s34fRffW9HtUGiAAMDk9DTbmsphCrd9Mfo9fCPx9GooM822qkhYmVjPKnHo3crSssVUg3EWcwM8TosP",
  "key4": "2817LyyHZ8F3nTxMLtbGH57HX9rg9ye1mE6UZN9wSQf7vmLHmssnSUzgwaYRAc3UXioVNeYTGm3Xfq2rSSZ4NDjc",
  "key5": "4aK8A8EdVor9sMNYfcRQXvJZTiNLLeH67fd9CQuwDQDgxCmSc25KYaMWnWLWahXK3fiJzLEwA8W1gyRzDx7pmnB9",
  "key6": "3H8aVgcSngYXnLAbQHnQ8tKQLigqtuXFfgoDf1ZF764sqff1r7ZUUwm1kLyqfd4YQvdMRNbXbf3ntADQgbrFi7Aq",
  "key7": "4ZP6EjGx7YtsaYKiZJhYQX6W6SaE74ayxGadrj2Z14JZoc7sBHUWdg55QLPubkJYJrHL95nYoZusfKd1QjkzVzAZ",
  "key8": "5uFpszCaeE8KFqP9ZQNzfukigSvwVJkGnK1fZpnTvXVGompy37y7kuUtXau3DBbzRYwR5Pqy4ZJ1gDsydgZLZ9m7",
  "key9": "5g8SaKCWX9yqpuS75jLHAarVeiu5gemBPKCubcRc8swyY4XzR61wrL4s8gAG4XikxCsXvU7fzaYziudEc2ri3vwj",
  "key10": "4n7K3VisCmwbQqfKkwdGqhHuCn4ACJfx5gGMh6Xm4bpQR9gaG6Adox356aJzMbkNGfP79mkAkX6LoTRvniSpC4Cr",
  "key11": "4bY2UM5NYz57ksqHFqox8FsFD8zyh7HQNbYdoAGeLBJ5uVy273mwZKW8pqD9X7uoejPGsBU7FUHPpR34DvLETrM7",
  "key12": "3kYmjQfonUfP6gkDToyWg2Y3syt6BFsgBqKwQfvEhJzbbTY3MQoq5xfmSP7MPnii64suTo6r1pfZA94PGNU8e72u",
  "key13": "3n8fkt8AuFDbw8M9FwvQ2jSsajhgzfbscae4KSnFzSCq4jzrGeVHc3GYXo8fhYBy344wXjJqPFgU47VS4CuBJtb6",
  "key14": "4bU6L4Ahwhhjc2aGkMaXNgrN28cBrbXnJQezo4ZMB1X5yDNUuqbhh9NqqbhVrfTGmSbvNFDwkoDJUHNAeJbp18kR",
  "key15": "4hyiiRq8TjgRSoXXHUkBoByattyLm9JGByv6qqHkH8Ri2LtpFy1MT3jFdfYfy9zM8xes6Jcr98fY6deVG5xLyxog",
  "key16": "9NGsb2EZJ1RfnYt4JhydQTkFf1a3zK9e6aLydrBVt8x5RQCozHyG8cVbBqrzSmP71tU6gHpMmsBcJUmi3eaVJxx",
  "key17": "5MRQgG5hF6KzJz3icxkGxX3DMRtu83K8jTrfNL67tNisVzSBVcZdQqLGkxF2VeJvYZ31m2qedH4LDh8SF55hPeC1",
  "key18": "24Fa5HwvFV8T1st7P71LfuATxw7zePSr1HHzEic1wv3vQa792Cxf45bs2sfeUeMovRsuxYBaCwhPN9GrUtTTqCpP",
  "key19": "3HFfHWofDMEXrETAZkirmuJiVs4GiWLGvAU4NpBnNJ1rEZd8iw6MDyzi5HQGwhXfQf7Qi8XFd6gHhJp9rizbdx7L",
  "key20": "VEPsHd9t33UJCSEnTjeKjjq4RLkzRqzbeo6mMphJMHkFbkoWLJcCG4CzbRzyAfaADCcKqroHvcpBqL8oPkLKsVj",
  "key21": "5xh7n9UBPisLxYNu92vSpZjdSyn5wSJi8BsYq4TamnspiFUzuyHjdHZ7UBmRoAjdLiCjhP2651B8K9szPLBvLB95",
  "key22": "4ByBd684svv8Hyj4eqooaauMwVP9HKW97XiVhWgfNF9EMc1fefuzFwTZjeiA9XcfAtmukPB4roFtjLsYqCHBNpsq",
  "key23": "4pqSaPU8oPXxqX58dgHhsc7VDTZTMpz8YTQ2TVPUrbAuCAKfQACZpkxwVF22g6dSdVSBpGttMwjLbYJPd5GFdvAy",
  "key24": "2Cm11PJAjohg4zH7Ezmt3og1yxG5bQ1V3CrgUg3WXo4ceYoZB14a6w8pEy5sxQbnM7JzAmANefF42TEeaM8cgBdz",
  "key25": "43FB8TmTTBRGzXvCkfXpMFBvtZAktp7FbkxqoD7F3Xwe7PiALyyyyEVqyPLSxeg1cKWiJLDJedmgwimZdJqyCqdx",
  "key26": "42KugiAK7ycJnmygZzw7zsD5wTWZAQGL7Fnzymzo96YEvYj1FNvfncBmLQ3BrwjT9Nhid5CDZNPaxR15EpM8cDfM",
  "key27": "2XiFsuytmoBa3YSH78BQk8msoxb2mYQVbtXXReeHzpB6r8Kx68mFarU5BMPf5yP6Yzuiz5ZWyu8eneB2MxDB478S",
  "key28": "3QkD7d3DrGqURS7u67HshvMCC98ooZWHZ3MEyyNnF5JipnmrdGWFPwJvBbJMprnbzyjFETfN8J8YhqwMfNpqFNJk",
  "key29": "3BXGWBY1QCYMzSJtngsy23XQgySSSMF4TMZpjxA1VqmvwLcdsGPE2ghHiVkZ1MX5A5T7tyKe2jztGs3xWw5b5h6B",
  "key30": "2DXhyvLnwHpcfSQW6dhiAGVoe65x8jxBCufaP3oKwE2JhZ8AuU41PdN1xYmRTcBLbbcjWaJQ6N75R18PsJ44N23",
  "key31": "5t4JywKRVyFfoUz4kWQWL5u61XBUvY7VZyqUnqh8JVJdmPMtwzzCxzidPHAZCe86iNoJBaxeonVQBd4dAeeGHjxp",
  "key32": "4QwEJyzRabJzRtXA7viZuyhB5Vhy5iZQ6cY778tmBU69b257q1cEUuxvQ4iP67f8i69cVUvvmshz7wGQGDhAXu8Y",
  "key33": "kRP6RNcbidZedZZ86qZkrsBp1ZaZ2edALhoZnNvxQZ1oC85Xjp6Ev5zJQQq5dDntrK5XcWHA3qrbRpENQFx81Gh",
  "key34": "5ok9pNL7JrDdVZmsjcCWQEniLzBf2ucmj9smPLG9CedxtXJjrtYK2h36JFPFDK8bAQC54KvTtwys9JBUXMtmmS4U",
  "key35": "3JtuScVCrCd9Wh8JRRxR8xx5b9EwWydhJeUcNVTXLRPod2juo5NqV6xzXUHNqgZmnH7ME39jVGzV7Cj3JfMsY1X1"
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
