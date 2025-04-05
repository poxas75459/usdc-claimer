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
    "2f5j92EvjtxQ9wSnMVge8PwF5eVcJppD9Sz99Rk3yrQgffVSCUnVNkrf6BDGrneXoZj9357JN2Exz1y7qeMHQLb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5REAJAD6XnRRnP4N8b6SUrzmodU1bARi4kRxk4Xu9WSyTr1qxpATB7d8PNqaiTfiHW81L8nRkiA6Gu3x8td5uYwE",
  "key1": "4ZtT64xFxPHKhxUGfDLaFCrwkixqKz2VngeDZ3HWgoWS7bo4NagTHRdfprFEcg3gPJL1AC4DVZTDd7c8yHLU3bb7",
  "key2": "3UzrKiurC79ykcWgmuve5kaLJfSb7RwUfYRdYMVsd9PHrg4gWYzP3bBnJKoBnbEPN9MTUFZmaZ5nG2xdVi2oGgQE",
  "key3": "m8tN96xMzXET137QbpmWJtZgQqERLpX7CsYGGTAWPsCFb94wdQ9HdHY9ABttidiG4NArmm3iLPUvGd9txsF22Cp",
  "key4": "wQDvtPSJVSoABmBwU4kMwiJqeHB13WdR9icWH1EpwcBqCRYDRNm4sXfAknuiCZuJbGWH5iXkPHaTDbewwEhJHGA",
  "key5": "2skm33b6SVd8N4vjNYhw935ReceyR9FJMTLYX3wAf2ftCLUs2DUG2w1rTosUqXiv7u38jSwHnyh1o5RrQ9ctys1C",
  "key6": "4ooZWAZX8rYS7hHVvnsHbLu2qqt6HV4iZEQMqA1oZHEKyncDU4W4VEXzUJD5PYY1CYNMPG5dq5v2bb3KH6tjqpLJ",
  "key7": "5JwZGvCgUm1AUgmGiHesFh4itUYMK7S7rT5SBd26o5u69j9BJVkpzKW2zbk4rqsrKng4Nq4Gfs2RGoG4iHzWbFqk",
  "key8": "4Lh2syNBZyWZ35EMX375vPHmEVDpqG3khojrLKsodJaEdi4KAE1sBB5bjzQvJudMFg8THmz1DeLnwFNVRFr6P3YX",
  "key9": "5mfhor7u7BFcsd6ZDmMbvcEUnVKNt6enXQu14MdmL84iycJLkvUzqENnPD8gRsLXppp4WrWQfSWN8P6A6uSMWXAh",
  "key10": "3WAanwKU89sdqJ9CqMfzFoqEzUF6tJAbstqzXjAfWrRiDu7M1K3EaTmSgsw9idekk5MCsMQRvVgMGMHiHBd4AT4M",
  "key11": "4GVF2oKgxWUVWFBjdKMe1b5wfUfY8oGyPHoWbdc1ZiKVxqbw3EcJAud1JpRnstegn5vNvNC4D7uArRFPBBQByYpt",
  "key12": "3kNcbmNirAq2KjK6JWCTNDA8FJXG2QByyqeBmkJfwoo2opsRbpopTfd8vz4z5Y4mVaCQpwXcZpTC93wMTpzGqbbS",
  "key13": "4woAybRQnt3bUN3txTVf8EJuZjSSSdMkpsQhuMRVUeRcijZpadMXFL1nAPaN9w8TfGrYWNxP2b8zs8yrKVDe1qok",
  "key14": "44QoWu3UrPgJBRm6WQ4e9GY2EHCFdexBF2jmxn12o7Me8JACF5tNUPtfqF22phRXcWqaLU1v1YbbvohU4SDBAvEt",
  "key15": "595WYTUrki466vpWvm6DQXtAejuyftm6nKotqdzz5bUZzNpmfnaGrHeQfFsmp2cjdvoHaHC8eiDnnxnMJY92wV1a",
  "key16": "5unpqfLoT64PfBL1LhqMm6RgQyXDdSP9w4AEjgXB9xAuGEsxJyUnSRMrt8B5Pe48nx3dkLMBoJZNBjnfoeJXWu99",
  "key17": "4r5yzToYQYhi3bHstmc9EWfud9EkGvNW4is2ivtasCKZVPRPjktTrArbVWCFkgvrvzDc1gvnHfPYiYa12AcCTNpW",
  "key18": "5nK7tu9ka5JSisNpPaG5nAVAqzbSbMwnyWrgn4MkLfwJG75Y9WtwAW1ZtC3vw4acb3XdSG5QBoXUfXwyG3Vn12AW",
  "key19": "43AEXygpaYWxmsMsa61rE9vKfo8yUZ98Yi8R5T63m7118psg2dYyfKu6Hsfj5d8PJF5FYCW8sZqq2BPwYdUQUwML",
  "key20": "3Bo3VwXxiY3GWoKhHjsrWweY2FktVS2EKZfwnqzJXemF26suUAuJkBPyC8pAzbrAXaqMVouj6a7FvXaNheB6p4XT",
  "key21": "3yipCv6aXDMbAXF9oH1vKc72RBUfJJAqqzZ8VWY8zBbwwx33x6jom79Zf462DhVUqVetFDaamXpM3rw1sDDi7gMP",
  "key22": "4wuwgqKsecPPU3xihMQsAaHV4t6dFUYmuTsdi7eeENPc8KSFB8u52Dht1mb491EJQwq5cjNqPghYhhVoHfu25jP7",
  "key23": "5JenhH7eJ8LwafrKT9MMVetUMXmou6VsMyNEs7QmWBtqPuUCYEP5Xddom8sDjt8AMDwXjPCzsJiL6GcYeDZsvE1y",
  "key24": "3R3NaWRdpWsDNYRBSqzqaNMBaxjBKwLrF4afz6WQKqVZyQvRfWfivxrh1ymiytZDRGh7TRYeCWhJdtaGb4VygLEQ",
  "key25": "3vUxoQW2YCmykmZFARB924Vsffc6Z5yuJ1mQj2zYJkCEca1VBTrf8wKhNnBM8bW8fRd3eM8qzA7t5fxtJ2riaxeR",
  "key26": "44ZeyGBDztqUhMG8HthrCe62qTUhuszr3ZoKKu8xDGdEVGVwFce1XgtK5UFXpTnmRYtvHxxaJPSwxYtzkpF6BzbF",
  "key27": "GrzE6wfHcTDhWVBxMXxt7TB9oZTe29fsc74AfzPGBGXXZmihqXCUaJruURtrPaWonvjbdhoxqt9JCKdaiFkB8uJ",
  "key28": "5ZyS33kXXuVaRZ4M7tacK9dBDLjCSS7Mtmuya5Qdy6vP72meyDQX9aVCiSTtjH2AQciyqzYEAqqe2nLGyBhajzG1",
  "key29": "3pdXED67Am94RZKo33EaqBmEdeED2ZEQAR4rsN4JRNaqYZwkvXULLSzLadwdZWfcTykHQFgqZnC9VBMCAJmjyjr6",
  "key30": "UAc45iWzgSitfAJG6FnScEExHbcdVY7Bhdk3oTQeoZJEDgcdeGzuU8YRhVGL98F4uvYJEJ3Yj9xcUCC3tMAfwZc",
  "key31": "4p9bKd2w52fW1vGRELeinjyBPbQjqZHVjTSZFuo9xCReU1vJEeP1DiBC7xAjW5UMVA45EAcqVysKwvyAoWyyAueM",
  "key32": "4oJdv6irpXuwC13d9imz35uunR5zMMic3EdJqdkYgWrMrcbY92DNi5vzd1mQVaNHzYnQVAf9wCNgyR2AkjrNX3C1",
  "key33": "3pqD6vQWR7eMFDYEhtyXCggTXzyf2AYPTAFFPTMm7Efmuhdd3ApMc7xfFtgtKW3nzAkweCVCsZYQA7rV6feKx2Zw",
  "key34": "5CZ6zQjHo1vvqaTaizu1qAcJXD2ww7qWLtnQxoXpt5bAcnRxrWpSsP42zbvdDVwKjhLe7MyAAtYSF7gQ7wjwYUWA",
  "key35": "5AcNqrMbw7wu3Sx7jS84aXGa4734jejbu9RyDUUkaSoy2B9vfWjshzLRdqzZXSs1KoCJiRVftHGX6MZ6caLa7EdD",
  "key36": "8Dh77ugWXVG3UiSvRfRLnrNE4hBgqJp984tvf59UGb3BZ8saHeeTU55V4z97yWVminwKHPzVEfAQtroid42EakM",
  "key37": "4vnZLuugyH1WTTLgHFaH81yFSFw3iYvtLZG2dyjPFnRFVfQF7KGBYjVcG5Y8PGhWstPXWG4hgMGuaGsH1FWFnzM2",
  "key38": "2UMJwpZJzvxWtEFVRzhX1kC4g9Whj9kaSLUwzpvEgZVbUcPWBQkTckPNBP59tQ3NMNbw815F74oBAbQuGBrrAjXR"
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
