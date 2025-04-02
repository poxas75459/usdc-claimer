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
    "3uaYUZtCptJwYBzhV4oDxL2bbowLQvFfza4TUcbbuNcj3hDm4QkMEUEmJ4iuVV7h4cQ4oXpQMSWkE5TBjH3qMLvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fbagwh3yKwm8GdSLYPwfPQBDSHENEm9iQru35n93vg8EU8kG1dnxeYGxDWYUsoSSPXwuKiu5KBhJ9PD62SUQk5i",
  "key1": "5NcvvLwdbkve4gVF5rmzd2s59G1joUhAYVgjGd5dHWfALNVf2dJkX76muH7ZcPgjLaSNtY9q14CVQDHWTUR5H3wY",
  "key2": "5KsupiH8zLDgLDsk2K2sgyKDoAaemNfubsp4tCPuAnvRyNSkR92JAy6Dy3FpicGaNjqTBJ7rV47rBXG5mCvoCcC6",
  "key3": "WgdWgYcZSctK1L5vm7nHYeZY51EHTmmdjsHV5CGN28ooQSi7Wu9CB1DnN1JfUWLGE7vxkWs8ioL3yJYVDiQ9WyE",
  "key4": "3GeDJQ6DD2XwCkgRNgF2mfK4vKfbWGcdmQgtbuWvrZcU1UKrGMUnZ8LAXfH5XYCXk1zGraasZGnUtMMNChZ32h47",
  "key5": "4wr19dHqGkki2M9KyU8b6kZVu9a4f8r4nBS3UfZnCffzviszPo24ZkKNt9dD8Hj1VcGm3y8UPmE3Lr8AJ5mrWMn",
  "key6": "5dB6YNFPgNaMAaUeTBZX82YR1znrgMbx5ZzZFW7XY4b4KjNHSZ3UR1aLWBR8EQSb6uC3TquutyurtKLDr4HHBH42",
  "key7": "3MN5wiwpd94iaSk8fpQmoytrLyuW4aCo3LZSeYwJboD2MCnJdD9JzMvKndu76kYCEk5fQCg8b5vKgYKdqmxxeAmB",
  "key8": "2rHwBFygNUFts6KRSuD2CQn51koMgaSgDCrtd3g3TvwR3vtGNf15E7iifH1JxkthEn9b11HveLSWC6TjaNp76D5s",
  "key9": "4Ck3ShwQ9vxx4hig5jxiR93DGno8Dbgn6RvhiDRrpzvKHExByByX6oTfcdCsgZ9npf1psXEFUFdhu86ND8iL6Ryn",
  "key10": "4AVBtvMQN1EiFbNsPKjwHKL5AJ7BR6Z9NvV6bUXHYQXys4hFwabcexusjL2wepT7jqNYAUJatLjxxNSEry7j9uuU",
  "key11": "QJTEyh3mWFskduiWojh7L1Qpep7oXWZExwcGYVW8VSMwbDWq4SeEAYPjWSvsYUG4Af8rXke5u92DWWMHm6w7uaM",
  "key12": "2WXbaiUSRQhiJUsPArnDXriEqZw3rC6jhbmRVCeVxDwjCj5YVejX4DhBFCnXfRoqCHY9v3tggS334UL1u2njCFJi",
  "key13": "2wkK8MUtvAbev6i746fUF8HcjRZuQxNF1Mv89aD3ASRnULwKnaJCE1KJg56cS1Yv5KmBZxK8L6yCMN2iM9gAUz3P",
  "key14": "8y4wztPRTWk969aNoSZD4aoFav48Fon3rdkWvFCx6PBXAHZm4xyoAvJPLXsaej3rwbahUZ4MQSxzYGTC8CHgoqf",
  "key15": "4Ha7NdR1TMJYLnQp2VMLdcnqd4WrCmaff2GJY4V1UBZXGCR2MrKHoh6p7biPbL56JeBypHeVzLubvL58SkKuLqND",
  "key16": "evsr92VBHK46Qv2hXDpQ4LbYbYitnV926fp5qEdCJqXkKMr2NwiACoaUvqYUN4LVBaU3GbYssbi9RMbdJBbmG6f",
  "key17": "4HnYciHuqCh8McD4NEqkkZUGHUQCjg3cHfFAoXcoy6MRsbzvB2SEJbw8kCMXQ2xUvvEyhx2Akk5NVAGz5DCrRCfD",
  "key18": "56XqA4STnFnM7u1MdzrJTTH81Z5HCW81P53wzpmMaBLJR3DoqfqkcA2qHaENST9bx3hf6g81CQ6dUWWzMh7s4NdL",
  "key19": "53DYhcQGREfnH9o13ea5z6yCvwyALdNF46pB9vAms9MyJiRA2XpHCeYogvAkXUn4qohFdzv3UHH7NDMwZmmZ7s7j",
  "key20": "44EEwDYHDJ5D5tkAjvhgcMiFRN4ZuK56NnGwBf2qsFLXR9opsgnEXqQPZ7w2Ldvu7bKsPsFeCFHnoEUsvBf7zWXU",
  "key21": "3ADWdn9kq2NXbf47tVayFUzLhCFW2YGKtCRvePwxQv4e21f4DcuPbRVaxMcWpyYwMocPkAXJJjRjwjHXVkcSMRdb",
  "key22": "QbixL41xQ4CotaMVCHr7iYfaVGhbQmyARYXWX2WvuHfdeSZp4gQt2GHvAEPnt5GnkcHCQ2F6BbLN91eMN8hHoqb",
  "key23": "2XrgYvzfTCQ6gGEBcz7iyceo51YqX9JkRVLHwVYgtLU6N4dbi2XZ7bQ2MJ6Xz1UfrY1J4HrM85XjQjM4gtgdgQuX",
  "key24": "2MgTNnszRNw9xeiYGdanDJCA2Wu6MtWDkMAuvEuHikaUkMCuut9NewrUbgABk57TmZ5ucjnZ7i7ZzoUGQfG5u4qn",
  "key25": "5Caa1SQ6mgvHbjw2RDFt5iAwprZRNQFLbWfUJ62pz9cUbWNv8qWpuxsytViu7NC5D4gMihv4TjYKDo1qXVzxDutM",
  "key26": "5LM6LJgRejPZfm3gofpsSPgHSPCymaLpiHdgERRsKuo5ny9K9jF9zrgNZJG5irr3M3Wxho6srm7pC3CXmkovDiyh",
  "key27": "5vLmJMiBr5jc2zjB8QxtH9cCuwr6VGFnET79Qpd5QyeGAJRz5EvaJXaUdCW12yN7jhfA1vbSCpJQrzBQHrXgRGfU",
  "key28": "61jK8XS6n7kmXPnjChASZjqdAZ27rqra7n3fctNcsKdisy1w7hmUodBAfz5oZaSFrFctCoqaLtfoM7ra8ZprUEAE",
  "key29": "2GjYi3U3fXVyn7XyeTZQK9CFryC5QfyrbJ8t3EnGLtFGrXzGkfHAEpX2C3Q3iJdGHqau5Sgnmx3xAddAHLGTvwxW",
  "key30": "4kTipWg3rBEuXjBbFBJXoAxfycjePaTGBQnXy767osZWLE3FpxPoDDr76cbMgmqzpdedR2MyYr92RymVwAQy4441",
  "key31": "2yjQG7PeXxzyPvM1z7DvCZ1XkHFZwPLDPdJs9aWT4zca7hgPXCgrsn6MaRHf7EKeHhXwhTQKM6RkJYBq8npetfCN",
  "key32": "4mytJW6oQykQPdUay6NXmmFdATiSgqFco5dFw3dkdCcEm5q6wEirRpphEQgjn7jxErg2jqizsCjNoCDEUvghyYka",
  "key33": "4aFaqmN7GrmEazQ5fc5aBoG95Hxv1iBG93idfrN2EuaGGcNSN5Tgq6PadJdCAsHVhafHatKkF4XfTbTGrQeNAcRk",
  "key34": "389oVowBzTtuAme1KEd3za7FqXiE7A9zwjvLx9DDxHbgKyWruASchsirDDEHunqfMj6XhqE7XyrsaAycW52bXpLP",
  "key35": "3rTKULWwqNkoykvEVXRVK1wAKPJjsKtPNqYyaGSDhUcSdbrHCLzbCX3G6rp27DixJKHNLRH4Uuj6oqVJe9tsKPvr",
  "key36": "3CZJqmanUTomHKNfqqdDoPnceTp7BanE3bXRSQSFYDFFrYmmLiXRJBRXGo7Hi8BGpZXku3qToLJNkQHfo9CF8Gje",
  "key37": "5zmR6jRfxyUw5UV7C6nfHQTYZgniV4on9fzba4khDkcXdymCfib3r6GdQT7ujFs2ScmKFXnuArNN8nkPwJNtkgXE",
  "key38": "31ow5ErgKqYf5C8kqwAbPUBCh9pr4YRttqEVDQuVjvAJZkHQVsuQnREsCS6AxDh4xai9tZYCFBeY9Q8GCd1dAeYj",
  "key39": "5TYJEUeewWdh7WxfAqgZe1VSfdonkP1xouk2fSeNUQVhk1ZVGPGQavX29qMn7D2GhiYkkGRj8XUqnzLV5Kw6dtp1",
  "key40": "3wx3iJHAnUAWN89KyQmpGSnEVKMcfSaVKoU8zBNz5iABxzu6GWwHGoPAojM9sxrgbyuhRYKzfUSfg4cZ3A9kmKEk"
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
