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
    "TKTs1xNoFdShukVSUjbk1ip3gcbZtJS1GByhKGxsaFN8KBr1mRXEneoLDL4ri64aU5J9BQP5AJ6W4s318Ey6XyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fjStuYsHC4eKgt4BbQagyNmhiuAQpN3txvP6gGkn5ZjpkutsmSn6qPErKzyKhSe8G7n3AjXs7zd3Z3t5JbsaRzR",
  "key1": "5TYVg7UcfJUY42HSLJJ9Jdt1541g84yWmQBXtpiisztadrgb6se84icbSuxWokd8DFmvpJws4J9cunSskv5SuHjm",
  "key2": "2BjWskq9cYCt7dDHdBxwaqhUUG8mUzuEJKAX1t5XMX4bxemRCHYEVTDhsnv2SqK12uv6pF6ie7G532nUzzX1XqkP",
  "key3": "2txbh1UMAYTdWq5EBQNV2jHW7eM7HJymEM4nytPAgtgax972ToJbcjrfj3134eyHp5t1WyzXj19GDkv95ySupJL8",
  "key4": "2r7SdtwaiFK4xkzRGvBJHJevWfA6xkBGtFMwnmbcPjFb7KMH2udD9dBWs2nWnNmKM3bWtb9dJez6L7Xcum4bjzrh",
  "key5": "gN3warbZYUsUtQHbN64nySzqtNuuMZgL7FPmHsvnWPEfB7XnroNMSaccHvnLSXnZfcFDn8obR7YaaKz1EFJSkL8",
  "key6": "2sitUCagBm6P5EpSMVrxZrRyv8JqVyAHpWQT4C86xRg3gv2TfNQUJgDtvWvoMvhZX4b4sSRDYqZLWntrVF5e7gu1",
  "key7": "3WRf3r2YGVrjPvVCoDFaisTYN2S8aEbSZtc5kPVd5BCBPZ6jGmdytuisZMJSuhCkjPTuAiqRW2MsxL9KhMg225Nt",
  "key8": "3MXnSJ8KNLUujEcHjSk2D8LiYkvqG4fxwfGUJsJJiWQBGdGU33g21VLNEXK44aXEwBhpX8LzGeDCpfWdpJjPME1Z",
  "key9": "tqEz9dGU7wnwa6a2GmuZ8rPcx8A74iCKuVJdWcS53RzFhPHvcX6xnM7fd55wtF3ELjRRm3HE5YBNh66Gfdya7MP",
  "key10": "4spxojrNq7qyYCgc6h5RptTvTdHoyYUTThFBkgycyUwem8PAWuKPiQtPyB6V1utGapqxmu7vaTJpTPnbJ99Rp5xs",
  "key11": "UjLSDnUMAabtyqSntFgWbuSYTrimNP9TFMco7aBs5abYZxpCGvxR3gVAkVkt2MiqC6okNEbYcX4GBB9u6Mownuo",
  "key12": "4kcVTi7utteu11SMTQviQBQRQVsNKCNvfKxYSQNuu9tm18vYw3U7TmWnraivBJigib7yuVrKQEQ9xKzbbNc5YGD8",
  "key13": "3YuTDjuSviqqghvEUWekmzyXEYySeYgH8Lyo241R525P4i8qAyhKRR9HjJbexjAN3PPAnvEwdT34HPjgxYaRCtBr",
  "key14": "23GggbAt8eTPduMPV7thxM5HTXAjGdbBSEMcFZyTANvXbNd75VNQbjzkdmLaLfqPgSZTNwSjvHS79Bpm7u6mr7NF",
  "key15": "3EKoE1B26i4dJnQY3RAeLdbMopzhtiPwHVGCgDJFHCf6eUeeZR5TDbTJBrZDKQzYdVsCqCM2RbvgukJs83r3mTcg",
  "key16": "3nA8G94WGyvJzJT4oiD2kZjMLESMyYmLxd4MAqTux3doi7WsGLKr99YTZAKpqJrPPga9rG1NBkMH8Av1MkoC7wiM",
  "key17": "5rnTuUR5zrQMLtT2hUuCbgiF9qgDpzcYvS8piPWnsqUdNZrHsenQHJXQQ675wvskyXmNtYySd2otbmVereiuMAdS",
  "key18": "3dMsgay3fEjvVCjNfHHuq8wB5XPFWHam2kENh2FQFnuLURdwDLrX5HM85sUMpBq48ccJJGAYnkoiFS6cb5MR3fne",
  "key19": "CjH9Fnqi6TMGEgXrRoUsi1Bk81MoN2jkWPddYW36BZ6MdJoEQSjyed8DmaxnBFWid3xvojY2yHTnAtrqGv14QSw",
  "key20": "3J55UwusTctY5fQgc5FJRsc1QEDqXrB1Mrs8dmpjKJDT4wmEmazhc25p811WDHkCgj2bE3sc1znS4bior2qo2hwG",
  "key21": "2uaWLuwpoAaL6mrCsv9e2doVNZ83BXrJHthMzAGuptTiEpT4FUymNXez1wWyvrGeaBkpEwj56v8CBwbBRcQtZxHU",
  "key22": "2JJGLRoNgfZAZqMKuKVuMPvJ2U3htZxfrYY2n8nxmyHoVpEmd7is41P674vLFwnzUF33XJuRyHWed3F7cpUXwirV",
  "key23": "3KTLHo6itVfNY4mQVbf8mpw3tRwGmnKsSC5yAJgVkkuvVq42Ctdtio3LaDEQukTJFPgiDUhoUTEm4GxZFwUD3RKK",
  "key24": "633VFUkun5XhY3nzV2uePXChYU3H1gbYtFSKwZXGFAgVRQDjxCiwAkBa4cWiX88HrGPE3659zQTV9HM2HF7kYkBo",
  "key25": "eX9VxDG4KpJ7fStKY5JzhkvELKHkp9twd1ZRDGdwMQWwHh8rPeyzceQw4iiDn69CDMMsPbAZCsq48baKEAzi2sZ",
  "key26": "399Toq8JazsrWnqaTdQSFqhs3GfFr9fqkTauYgJtrThy2bBcdS9XkB3a277tzgWmwgd7AxiD8JZrU8Dw6r8pAcoj",
  "key27": "5jDJYK2LXqAJNMa8Y8D4vVtLTcfToR2WH3JfrSEkrkoeczSEZcQQf4XgezudvbCoyGkCnfpjvWj5D4LCrScWv89X",
  "key28": "4ppBWbseb1KDL3fwJoYKh6KeFBunfS9u1WAGd1nEv8sGHerUA49japnerTfRagcEofEzh2aYpZTiswHhE8an1FaW",
  "key29": "4XftASCySsUWwagn1fZjCGCveWJsWik3hJmZWCBQaPAGku4rhzxTym6T2LRbgfM7Phw7aDGLWD2L7hMXGbXyRbuE",
  "key30": "SvuS3JAMbfeFBXJthuB2EqS7TKg7cfXmLG49ci9CZK3HqkGRy2f3KFSeUmJEPXUtP7AheMcqV3xH9FgZjwRz3Cd",
  "key31": "3hJsjZk1v5VgPTjR1p9aSpwpRtXrRfX1Aph2GbcwPkyUpxx6yJM3cmRa58i83i5g5n7aDrC8kAqpTVmpBBxDXnF3"
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
