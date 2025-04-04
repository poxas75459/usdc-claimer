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
    "5KfiPpRrzK4oUq7wzxDLVkE8kqfvHmUEEs73Tdas3WBwJHYAzgA3t1PqiJDHEcZc2ciRJ913Xqwq4vB3RjyBMH2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nc7JVy5pPFye6zykQd48pU4fr3btekHCtUucUKUdWBaHoqZ3YmCbgwi5nU22Lk79eQYdnQ3YWAWrezGV7ZNeohH",
  "key1": "RsjJ7FwExVMSxRrbHFiTwLJWYhNzDFxKmjvoT5Ssbw8yksQsxdQvvajJqPq1hWvXcXifU743MbmNzUpoY5MpuCR",
  "key2": "2EJa7jLPrdEqBoB2Pw6JCxVFEuJDGfsjhYgfkZ5ZqWnuLKN4RdYw2tLTjX9Jjcy8gg5yVGZsoENBv7vMoH8VmUAB",
  "key3": "24PT5GsgKVbFKGznxzxfDAYQNvc56YKeRtnaoCDX4UCzBJxZ3GGjwCTsm5Y56TSCP6ex1mKjtX6XZ9WdrQGuJaAt",
  "key4": "56r8aphT7ZQdZddcs1LR9bdq2LpEkZmt5RkkpFNihWaDm8fy9MucrShKZe9sfTyP8Ud9RCqiB9nkJw4UhZRv2xAS",
  "key5": "5SbMYiC9aVAWDwZPvsW6GJprXN1NSxQFsCtedefjhyGJBGMixeLm6REhAikZAdbyQ333iK6xRXF6PAhprWUWDCxv",
  "key6": "2ae7sLYekHxNszEjZ1AW3hAK3VtuCGkLrGw9D3S4uuJfyfhLWYKPuruo5cXpTtY6nAAR2Er6SztNhjQF9CncsJCF",
  "key7": "2E6D3pj8mKKjJVJJwCQx4hz57eNgrggTkNmrMPG11YcEvpfPzS2jiNRvrDchZdNvBnTFK185FHCJPJZ5j42y94dG",
  "key8": "2uFZYxkKGAfHWP33RCLngrQqgWEDzv3x1DjbpmdakbTGn12cCwjixn87AkMuHD81bxygMrntyQYq3TN9gURxJY7m",
  "key9": "4boDrJKA8krjkcTqEGQ74gU925jfZic8bndwkiWw4ELEv3KR16kkDj2tyxAES7GLtDBo7f1P4mqBHzuFcpm4shYD",
  "key10": "M8vnebm2RTD2MWVsxziZQ86ysUJ9Y4nYigzRyRCagm3YfufFALTTGQmnGRLizaiTqp6EeJiT99EB5ZfuxuP4aud",
  "key11": "2LSKXtnXEL9MxhQ25jW6H8Rq9HaG8THcYhRN7tLbC9rM1k2FdmfscGoU4RpZVf7TmevEhx4dMD4J8CJh1mPSHEkm",
  "key12": "n3z66BAroKqNtypd3otLhb78wcRxfj94sinZKhSJTVUwR1DTHb4XVvpDS19HnBgzGPhgALr3WUeHeYr28Q5u3Zg",
  "key13": "2Bv63QoWsDHzqGDySEkyBgPgFRgsZbhL5tw2Bn9v3P5koBs5h3VigKegwas6fqjWiZkD8xHft641essorzJapkhS",
  "key14": "3us1BfFko6DmbpkRJ4eWjjiqJGBgi6DbvJzvop4x82wWkBRtaxtr1FoxXGciVmN9inb2okZo3WXsfPuYdZazC9TX",
  "key15": "v6VaYgqSenksVqi8vrt18bEAn2kQnCf3Mc4wSMnQExDeAmwF3SfZZQM9aQ2ny3CjHtjFW6WVPqfXzABC8jq65Vr",
  "key16": "2dPFSqi5AoPdLfbdqa2k7CLa8Ng3TedgdiksVK5qRDKeTLWGFvavJipAW9qYDGDHC4k4NzRjdHTUYUoLz1GiFJri",
  "key17": "3pcY7TWsig7fBPU4NmwqX3QoWe1nMDC4D4nnzryhp8LEjcb3WE2UjFBZmo7QuTDoZWHbUQ155yT6KGZXk79pvGbA",
  "key18": "7BCcUBam1mfLVGNzdaS11L7Ym8LxL9oJz14wxz1jfeB1rp3iRtMBp95D4Gi5HYLiZanrP8PdyPmtqup4fZXvxaN",
  "key19": "3erKHfVKPqJ5RK6NjgnhdDtQLHgHDecfJHgsJP1T1VSfQoHUZ4wBj9eCWBB4AcpVAovACDMRzhs5887QtHjfTtHs",
  "key20": "NaYQJq2QZc9UZR9G5a81zUuLXhjzvWCHLtiJ9WX57UcZ1kR8AaCSysG4wVhu1Df6346LTtK3ArYrB4xw5P5Cuah",
  "key21": "45gCw7b3viyckgSqpKSPG1iX3cnRLhWXS15rx7FHxKjeNyybRCv8pLzxL8eeR9jXcFm47itdRFNgddYvcYHaDjpV",
  "key22": "2QHzL9Js7vABwP2ceZrnsZrcisY7PxuXQKGA3ZjH3sbbpEaH2XxZQyyvyGy3hoRs2PYXMswgmsRcgD3RiozGCQBk",
  "key23": "2AGsYLsddYKNZ9PT4aJwx78HbrJ2aCABoALDcMPdJyu37dpMVzixVD6cGerGj4pLBPL7jezXwFV8PsikwQ6p6sBA",
  "key24": "2oNJh4sBagHNr1ZXFZ53nKPkrHCqkjhyGs9BK3QkxVBWLy8ySPY4mWVWtdNeczu1GwLaoWBDd4ybJ1qYbPCi4vbf",
  "key25": "5cD7iKa2pGa9VowrAvqG8G3ZzRkYks7PRENbpLqfU92sX8qNGZkcnX7EkJXef4DuSR2jw8rc5BHEFV1uPQQT2HV3",
  "key26": "3AKo8rMqsk3ZkPntEKKMqjzoF2rT3Gh46tQXxKNFRfVvcDJL7jPrs8Pft4W9SEBgHgwBctVD8M24MnzmNVnomBQB",
  "key27": "27ZQ2pdLU8yJGE1xWTasqWD4ee7arT7pJFKXpZuX3cJhK28dbXqomvTb8aus34m2hXtY8SHbDfLKLuwdFXy6FkGA",
  "key28": "3Q3pbuih3VBmPUB1iaoL5LECZqmgsf1VmqaGGbUFyfAASebWp9DybsaGMVVKZAKScasY1d1E75w2QtBJnkBR1UVP",
  "key29": "36g8fzxwc18ZVEFMrA3a9CxtVc9mg3qVqxHZt7vJUwJU5JPGPdoq3sCVfcijQeb5BAHSM9hU4Lwu3BGYph3CW6pz",
  "key30": "tABXJ6LovYes7VUs3sfG6b4irzq4Xne2LuU7RTu64gazQADT3HvV6JHuMJWjVnE39VRNdJFkhxgQjBXCSG93Byx",
  "key31": "MxzPCbs4Q4T91AtTB1tb7esCPxNP3UZimkQTNywsB7ZEfirbDMvRzZwc28jGPkbouHLD3h993dZDVhug82vyane",
  "key32": "377KLdhrU3nbya3GgR3TnW6Ta9zAqr5rifUPzurc8SPRCtzSizTgHeik6AcbQzMPiAqiE1sguYANbEtq87YXpGb4",
  "key33": "634CPAavVXnjv7UbUqJaWby8FkCyJrvoZgXp9MJJ5yimFaLEEv2UEtow5sqiJwo5CJH6xxN3Rrp1NtFLwUnPSQ1v",
  "key34": "3xuv3NFriwnoS8HuebA3oPWqo1WVVhKH6Bq2hHtRZ8Ewvyt8e1Uy9UxKvk8vBy1C5k1rtaWCgxvKUW3N8dFRiCar",
  "key35": "DADREP3aaYA5gnrrPKihmu2eK6kLUwdFqoUZ5hAhGD8WJmJCpXEBPuwcaN6NvVHiHu8ezd7ySnwxncZMq5Bijmq",
  "key36": "2Bm3MXh1eKDvCSuLkP3f2PzekHrRA2gmwiSNdBBXEAZUxfeBVjXFWgptXHfUExVvVktnaCUerv8z86x464PhWdfy",
  "key37": "4gMyzDT3S4KMb39QyPf9NwyDLPFw94otH9Ac5M7VU4EixsvyxyxKMMB5Q5RR4mH97i5YCAjbQ91nqTjD9GchTpAu",
  "key38": "2zk66uEqy83axhwh6HMZNAnMq36X9BqMTuehuNGcJ1E3q4Ma77tpTAcHjYyCQ1Ps94nb2MPayuHxB5irzRztj2Jh",
  "key39": "5qLRba8m3Q2rFHjZqqXoqbdViYWRFheWLGp8THSEqUkRiB8KBU2co1n7AkPacwjwmvec9qZd28wTFidHhkLoAnhm",
  "key40": "2NfNLSk7TcDD3Ks477A2FTnuYh3SrsedrgkGby44DPFLc2UDfGWbhPovZw1ejmq7FnCQJJLdnfCSUSqSDLbRk3ng"
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
