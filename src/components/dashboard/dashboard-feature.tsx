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
    "5XLkYnoc1UwRSt9oLdL7Tr9ZxbkXQfRRNaAT1g4S2km4E7YVg14HSmjkAJJ5T1mcUNQPUGcw8SWBV7edhwQ6peRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DMzHvykPNYTt8nWMe8gt2WbEKBU3t9CjAp18PxBF4sTwmf1xPQo78zv5aJyiMZQwgAbtq9keZGfh7mFqFsvyV2D",
  "key1": "4FwHbo75UHjbi4i2HyhgR5KwWhxG5HFF5tAY8Jw7AikwWaL8er9ciY1JkcyQq9FevNSBQjt3sxMfPRL5r599Fazt",
  "key2": "5VuwAM34G29RiHqTSAK1exd8Tz2K912jFKQiyPZV3VrwyZiecYMfgYF5KVEoXfta9rvPo8tPyGRYrQHmMGSeeyQa",
  "key3": "5MiY4bhKmkLeTn2wagmN4q6fP5y3FqP3qvuKE4Lu3CHbmFVGHjMjUX2LV2FZHpCighY3qt9zUufKKPWjM1KnZZA7",
  "key4": "3CakqLuaSTA3dS9zUnGQTezDjDpkf7BVgcaGJmJ39UAERZ9qS1xiCwFLN5dowrbMNxXTpXjim5AizBA3oEx5VuRK",
  "key5": "2eJC739TrHYk71Qr99G1YjFxKbZRZPTdfgwpTRX6uoj9EPCXhjHphU2yExehBJcjcknurD13mwSY7QabWDFzjb8e",
  "key6": "5VfcyJFUbaE2QR6GsCD2y8iMWNJWFReXoqSSCK2HNBWgmSYfH9qw8MUVuYzeBasYYYtr8p3PjMKHTaXgLzCiQ4Xt",
  "key7": "5uZEz16gzQ3dT5p3rgBVsaRmE5uYGhEJNy589p4gVeKHQDYGkiSAJZzmcGr3iggSSm3EchP9uHaGZ7tKFXo7v9JX",
  "key8": "4J2vt9GmR7ykLukDvUaKMH8YbsujBpLxGzuMuqdkcT2ceD78dDYNw9a7g7ZqU3DjKkRVaVBtNxh4WmZ4jSHQTo9f",
  "key9": "EAfkAP8kEboNA52DWQ22k8zhtSHiVJkmFyezGaLwku77PsSo8cLaHefEdqR2kdyKGbAKmk27qru9NS2EAZa3RBQ",
  "key10": "5f1UhDQMvdQX61ncnY1wuzT336Ep9ov3TrX8UhehJ3NpzSi7hNSPYYZQwQmN5q1VaqfX3Y9PbUTW1NNn2N3YCNdb",
  "key11": "5NbjPnHpdAjfxFe6TWr1mRoDGnk8X8iHZSqV8chnnL9cQkB6FjQemBvS95YdodRosASDtg3Tu8izWZjQLA4NGrcD",
  "key12": "3xuCnL2LJYkHPaw8FGkk5Bs4MfwoK9dffrEh71Uva6dA97kqjdTrKs7furdkJMnpytDKBanfBsbw97yDVjbsWkNT",
  "key13": "5JYvVcQVTRuh2VGTikU73Vdfvn8MSp4AoWn8QwjY1q1n2ZqWBAnjDkPm8Ngahu24jQ8J3CNANyKSLRnZ8MS9xLSi",
  "key14": "4PH2tBCh286moSCP4WAn9wqDywCcuyor45wp6ibp61mmi7kjXFSwzuDVeofqabnZyU4QeDuRWF8QaVF9FXKAXYt6",
  "key15": "4gQLZmoN62wWFg8f74PZqVshmW1URxvPfhimdQmHhWW3K41aWdWvzqQckCY3kmfpj3aqHzK8wZt7w5EQF2v6C7Lg",
  "key16": "DC3E7LHS13as5Ya9998CjQhs4YZWfHkxRsWRiJAHooXwBUbpJfwjiP8hPdMLmD8zhShbH32zvahAbFrmRz9b8xi",
  "key17": "3eAHB43wgXZ3P5JaDRUYgYDaLzrm86asK2ANrW8z6PrNDWX4fv5BzgBQHwjTnTTvAa48G7kUzMYQc4QFnUkLSyb5",
  "key18": "4UPuRJbM9pWrSKzH8vSpM8n2ZTZEVL6L6GTS41u8KnmyB2sF4TBdKm5V3SzEkFqknCxjkS2cMvzYj9tnsLFf4GMP",
  "key19": "Mpa25ZRwpJ9eDAXX1WnuycdkLoqMgQVpDxP72y1sdVvNg8Tax2AbeVvBr3dTzdb4d5knw56fdK9japBJH67e1CW",
  "key20": "2cb2pYNwHHtUUNN9SYgnDosjjMxnKQWU6xAiZBmP4ejztJYnsPY7zXnCBcXfqTF13ZjMpev9FWSenVXcuAHCc3AQ",
  "key21": "yCg8ab7hFBrbFzp4y8nJjND5rSyH5Ji8e7Mgp5NxNUVuTbptkcu6vR96sB3Gcr83xhMnQasKDj3q23MoDYvp25D",
  "key22": "4S4s4tT8KznCqNt36Gm4PpWP8nMZaVM3FfJrtp2nxVR71tH4QG1rEBrEksrdGjzoV31WoVqy1rskJr7NrpQuqn2K",
  "key23": "5RbWAr9mtpP1SoJe3rhebFbDddjMTxCAx1r3GymsJLXmZob4GZ4cacwKjMomwPVX33hnjZAZRGrsoxJHMeKpqNmA",
  "key24": "623rZMe7BBt1T3jbZYr5XRtsfQXeQdCp4eRK4dQwdmRq9YB8PDKGXRnHin5VsggkuHmCmWxZooW5UBesQ2ZJdEr3",
  "key25": "24mnoat2H3VedAMZXRG1HjZ9vXHy8apgyxGtKBLgFGFmu8fnzK11zJtVtz3N53dov4rifTxpwVex74c223dPeBgK",
  "key26": "43ey8ZoioWeimz6SZSWStZSPGWUEPkogkvA3sd56tVkdHzCYYKgxHwbFfH9ahLnCtvoQDJfJ7fd3PjeeTUmfw5Rw",
  "key27": "3XLj2KTDHc1nS7iJDiMmW2B4rR5Es7KanTGKkZt4UiafJsZUwzRrhRHAB5RDK6Mzg9uKRKkJsx3j7EGXsXzscVAn",
  "key28": "2vYQhhMqmLdvzTh7tzC2eufoFuEQnhd6tBDgZ37pzCxCsQGkP5FRj8FsD4urDtkEASWGSUC9X67hqAHTH157kPQz",
  "key29": "NXaXfPqtqVLGVewS2Fobm545yuz1yTkQfsuB71waQv8BtSjYbma1UqwgwumRobDk2bJ1cRBNiBhyPn7gXHoTxg1",
  "key30": "66EY314rjkVbqNfSwhuW5grHsuxdLcRj6AihmdEG37g4wSSkTVFXaLZjzmHCX9yhvGHknCnW4PRXEBzZUhZEe7VF",
  "key31": "CFdzCFVwrDhnvRmm8j8i6rFJkjrttrbsg56rUzvrY8PPJD7jDsHBkPuGq3Ymfz2tL5jxPc3Wx5kpnE1UjBmYbtr",
  "key32": "pfcdGAJiLvL3vQkebHwBZRh8Eur4RM6nEddagdr6HzbcxSHNS4BhqpY2fa5fiGMcDFXWUnS4gfBQuJF1dQX893x",
  "key33": "3xWbRDvJqotTeVq6YAxLciss924vrdzZsp4c5n3T5ce6B9mpEd6W3pfMeg5gNN8LXJEfK58zKrTrW1CWrCKVXVMb",
  "key34": "3Sk7RY5oH1dgnyEyCsTkMLN3NmcWvHzcWcrJZfEaQckvzsSsFx72cGvUVozbmWa1Pah3JNxxwVjKVAZiffwFNJvi",
  "key35": "5aWiURP1td1ZzDhNY9DYaSQXMeKdJj2YQ1yNe8GxEGHgLDhCdHvpzJyjPN5cAww6vJYQmJZnQcLZJvvqt2aWCCpt",
  "key36": "5sq3qKnEopTCvSDVhshEUFxXiENG73CVKey1ENUqfobs9t6kUjGzea23sA8wWrrvqsvPTePe4c5LUYyT1mvtgD85",
  "key37": "VNBu5AMGrwmViUfbm6pG2iLNgKHcSZLPNb5v4XCpUZ33djvfAhxovX297ePVgrT9jgLegyyVALruZ5J9uTYoccB",
  "key38": "62BsoCLDuDnscbeWX4qtCwcWq3nWUJG93rXQSpnqHKKBD3CAkQJUiGrRArBic2FJxnZu4KYSWLjK3JdCfXesDBVY",
  "key39": "5EeXAw23eB5jS3N2itgYfa7oaZ1Bd8VbcVh919Ak393CtALhHnWt3heKSF5KgVdHBcJza5TiGiiztuZ6Qjbxviga",
  "key40": "3yEmVKNXA5TVZurHQ2B61eJsuhYdwCuCpWaaPsiEFFHn7113DKnoW28ByuB3khkKE2WrT88uVSY3NBDUxH3mKG5Z",
  "key41": "2xfLtJ5Fc4ZbsE1ibUQtgA26mnrTiEdiDfi3T1TFk3FFYUyW1jxf2SEgYZmqrci73nAXVteZPtsAkqrxArFpg4sp",
  "key42": "5kSbYQ4KR8kQJtB8Fd9fbXWByiCFfzggmhKMox4mkp42TebAfZiqs6dPEkaHkdZw9VFfW8La75T7kT1V8z9gboXw",
  "key43": "5iTaHY4qFLC7qU91fmm46FDsKCWhKREoR1DQbUxenWdeWKuB2yakNuAwjyPwJn2ALpRZSDTGqytNuwjS34pJC3LZ",
  "key44": "2Uqd7BXftK7b9tpEC2bTMSrfSiBbh6HDycyK58TE5j6rAcKsDH2oRj9yZjJ4JcdNAbkGkqkUbuE127Q7V25Bme2a",
  "key45": "pMmMVKX3dL8ZYXH2yZ6tKE1anAKZJqcpfwZKfwA7HeXyzykvHjUCUNiHd9FZV1Et5TQ1jgP4F7qnmA8CSeVKRDs",
  "key46": "2w7U7iCUPdJMxnet9Z18SAP37ntzL2XBtr2K9Q3pHjY5sXSZojuZGMR7Q6HUD75bNsUWhqaXEF8qb2F6Ne3Vhwfk",
  "key47": "kXkT39f9R4v1KLRPvW9sXXBxCvogsmJjmu89zCHJFGaH4VWGqjKR9VPVjLsg1GUtHfhnUNtBTA1XAXfBUzS69UR",
  "key48": "5hnRzf3HVrbs85NZfVxzd3j3yWjoxhqt7Dwdy7vpwzArysZ23icun4Qe7xsi7Y4fvZWkmr7L4nn6U2Wjx6BYbzBB",
  "key49": "2xBJvaBZVnaS16S8s2MP8Lj4HafAXjfq6XogKYYQwfqp8oFW24nfGNWzMcBfm8wSe7rKZgLeijwWMrRxpcpJmb7G"
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
