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
    "5gvCGvyeoWXs3m86VGeKw6gWNaRKfotg9uuqSQRA7gAKLwcRv2akoFhbTt2RTzQWNpdG5TvYRR48i6QBqWPyeD73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lt1ef6PbZdT6WEwDo3DXhpZjDnraT2tGeBqSFe4odd1ToECwCpJd4B11wkjbcFtvQMzrgL9b6GPRKJLZzgL63t9",
  "key1": "2UogrWrLPrNJWG2jryimA8JGVfUz9QBjY7efDcCmntYvW4vQbbgMpFm87qD5g5pQr3EHq3Zc5buGhog1rqxUkL1E",
  "key2": "2Zv58ktMtnwEZ2MjgUjy8Y86ZUvwMcPtrCMCKKddUDdWDxNAJTYj7DaK83zjqFpJchXrXqFErYm7hrRJfqx42Cfi",
  "key3": "5f26tjgzzG86c842yNewgPW1eGvYGtv4dYvgAnJ5W2oKevZjEmKiFTbihXPMBdBM21AfDUShGCoU9hr883hz1zra",
  "key4": "Zsbg9qfTm7HcseoTYL3KTmUhfQbAMFLTFSsSE4r7d33tmBZuh9D3GcX4XBdV9mkFWKmLUhB34tFWQso26Cuv5fw",
  "key5": "4Zw3dhynde7gFSVQGHbRFaSvZWoS2SjVWx79H593LjcpGPzcu8iDjtCWomDDB1FmjH4BH2P4uSTS2rseoSiuD9sL",
  "key6": "2EGbDnL8abMvAafsrC9NGy9Mwn6FgFjDZNrRaXZ5baZh1WcvmXBt26gbtnw2iVQFjp8isJVyS48q1SdXrVdaRoyK",
  "key7": "5M4w85Cdzb4krsPu5Tf2qTHHLx9nTdtNZYUpYjcFxNsTDSMY62Fds9fmU6PySTQWSuxip78LwcNKkTZAWxGzdFvD",
  "key8": "25ZnJR98HreSeFm3HGahjrcfZSticgTjrWWuVbX3YbdDEKiAw2bGeQzMwS5Dk5FJks2c7NFyVqUA4pzg85L5sF3Y",
  "key9": "3mJpTPSbaBdSfjAyrDdWfPuM4mBdTXLbo6n1zX2yrAAZ1YhNq59W55sMjLz24EgnwTdTK1UfcQPU7QbcCayhZrUv",
  "key10": "3SsGPKgooehERd5NMQqwFLSjqfqMt4LqzgkQSWSyK1Ga2VqrFEWXw83notJ26CHYnRqMGAPvKszzXJG9HiNg3qZ9",
  "key11": "45n2eaxN4VbSYGdkQuQaC6AdyXWtw5XshbemPZo3jkuK3yS8hevuLmvfWYantne1qecE9Dyn8fCH4UrRX8ZXvGhV",
  "key12": "eqZythQyiYFkucEEnAmaxX1XGsJQDQsGANw6vzKTcMTLAKjPRjCQ8hyTakWj4n1BVNQL51q4AtLUu392UEuFfPr",
  "key13": "2bXpMo81ivnXpSHN9tKpE8fnuiEA6sMy9RCfbEheDounKSoXW8TF7emGtUuvzeYX36gZmepHrMU1dMbpeKbF7zaC",
  "key14": "6Qoi7nTMVmevUAM84gW9rffqwxdfTZbvawXztwj764s4hzEz22Wzpzuj13N7GoYxCVoJddVEa6PwA3UtsgocXu5",
  "key15": "3X2LFyzx2KtSR3U9koLEG6LxDgetCbnXPYS3UcyVZ1mppz9f4Rtb93MhJgVkyijuRF7mM6eCnNdGoBwj7LXsPeBJ",
  "key16": "5G35R618CAjppRWkrBmiZfx4bfZV2Adrpsnb7QyoMAzuYWHf2PUP35R8haDo75bdyw1QYnTQ8s7nMcvwGY9qEBLT",
  "key17": "4X1Dr8mepxKHrUdbsX98NtMKsHgY8FENVzNMzYKGnKVwmFBASjHfXDiVdRrzvo3pPFYatj8LE79odDDH9Pndbjwo",
  "key18": "2hppqr4wAVjxavJYraUxnJWTkarj8RPD3mPa4yJT9j5yApcg1jGVaGpg4H5VGTXkew14anUcjFhRs7y9raufYYvo",
  "key19": "2heQzPvoLJs78wSVA9pkhqn3Gn8vaWJ5j6rPKVfvSxAUWW3VqPzEhRjmBS5h7SxYe2aubjVpKMyXb7Rbzp7CvUSv",
  "key20": "4ueCiJPtKBxdKkASnqyYhxxFkhzbRBnW5yAL3VNcD6AqAvY3gCBCJE9mQjvZQZ3TEs7V55cTyzkhL2riCdgzANAj",
  "key21": "3UVkjfWoL4V6BPNJs9xKPvst2NPA3fQudZsJ1zatMeRnoKWgAii7qNDbZxH5yULovrZ27NaPJtxnjDQauGe1ST53",
  "key22": "4qAxsVsonj5vhnvaRwJavJsiGH5Tf2h86EjKatWt7i75Po4NVJmRxUL2c5dEigSMvBZEoYjfhyaKnxZAShu6Q9VP",
  "key23": "3qHffKRBQA4VeJ896atRVT7yyMaDb5sdQqnAdjkN2hZFnToHj26YRpzA4cFfs3t1KcBD32abZYjuGTT7wKyn5RyL",
  "key24": "53CgFmpmibYqHhYcGmb5FPAviRqJb5VJBY7rNVxzF7P9h3cW9kk1qMrzmj6EJAWPcBWB2yC3SgpPH8sKxYE1Mg5S",
  "key25": "2hJ3395ohczES6JeZMTWZxwftRAMZ4rFuHRjTL85SUP8497JJAaRges6QYLRUSdbAsHgguTUNJ7jSAwCha4tF6rD",
  "key26": "5Fmv5ob6bmMiqpscEK54nWkkMk4NQFTwhy9NfArM1K8mzv7bHm8xLcVC83vLsMbGpQgZZFo29cZeCYhP2gdqFpPF",
  "key27": "5tFwnxopTEqT5wgCzdnrnQmFW5fCX24ybaXwNBA5rAqtLnZWSuvUXYiTLYsDdLXkXaYm1YNQXdPbxmFUYopUDHuE",
  "key28": "4GJhADy8982StETXDTP5bYbQwdec2dCEVNBKV1SsgfngQdxjEKJQ5RXufzFv3bGhynLKQxCgCveiPRNsN6CySgCg",
  "key29": "25P15dYhxWSn2u4hMYz1kpsrYHtSQBEqvZTebp76q4PuNcKAHYNCbf1ty52v9AQJx4pjrogtU11t1DqDPGpPCQNS",
  "key30": "2TfT3nWSeNznVC8mxF2zmcSSP1U78xXTZi7Wwmky7Y92oTSKVeTwSSnmV92us5QMAKJnJhYpkfdb8ie1iuxVhjsM",
  "key31": "2u2ELBLj9tEJwpquyoBdzLPsRyX2VKu1cA5JLanDzjheMfs2drJ3pi3g6SUxnYwjzVo4EK5XCZWogVKDE2hnUWHo",
  "key32": "3iRVP9YKMPodygD9bpxc8bKgnHvV9sB8zDt5fYKFSTQXQTEsKjfwsi2KySBThtNHN868hJdQhwEzZKz2Qjg1aPj",
  "key33": "3RkLnGWLBvUPiN73ZpbqzBZXLePj2JMR3m1BekGjgdGdwbBnPzUY1RU6SbSEXJc3WrjRReENRuJ2zxLnAZSG1PsQ",
  "key34": "3hzyRQJcyEp9vZnSF9Po2ot8tM7ifE4gh26nDPudjrCkHa6ges6UXLqRPKqpofFexxPitC4iEtVPDdB9ARx3TCfc",
  "key35": "xjikpVKuHhyPDHkKprPDNT2s1QcB3wFQfuQ4hfwoKypC92kNKbYBqa6JHF7PmAPn4yUzsAjDRN5SXgzZ8RZPcu6",
  "key36": "4d7ACiq4yySa7CyD5tjzcw9a4GJ7vSnhny3ZJp9D9uzYvLhDPcxnWx38M867onJp72xbaoedy9kzCVbAxKQWjE3F",
  "key37": "238N2ke2xtUNnK1Kw2kwUH2RL1jmY38SguRTirL6AnEQ1JgkSagTFPbKJAbhYQDX5jfyMwyNiNtfygyvNvyYrWsW",
  "key38": "BqtGCdE8xUKoRRowhgMnkgat4mdH3GsrqbVZf5WkDXyFE2FRB83QJuSotEwBoXRQJx1CNs68NePsDfTbkyrWUDo",
  "key39": "3V4yZs7zAwiUfJ4X3wvYoGpQLM36Tgm73mh8HbcXxAeBvcGsfFFjuwx5w75w5k9jYYhTgqCEHdswHvqGPVxajSth",
  "key40": "2iNSBubwoJn9jAJifhgZWajmEHx6MCGdABjXKLe2qkwoHYYk6vkmBeF5sguSc7cXcYyXajgAwwbjYB6PFivKcFos",
  "key41": "3jEQ4f6Sd9PqzMauR8M6k8h56Xu7LxFr8CWsCudiaD5KshS2C5coR5xWoVJL7nX4ajgtMUQmX4Y4W2LgX4uAi6WZ",
  "key42": "3E5LdVWEVJoouZLxnQinMyboKudKZdfrXmLVKJwDgx8hW84MPLCkQS71HnGeKENT1mPTD1tJ9GUnxazM5CHJ7fdb",
  "key43": "64dN5Zmq2p3XqTPzWJJx65mBoCWSv7RxCq2fdMy2euyJJFt9F4MULgjCYsTgYNNCcQzHa954KQyvSW68F9SUnCtE"
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
