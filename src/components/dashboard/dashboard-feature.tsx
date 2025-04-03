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
    "59DaCbPHcx4eJeAoCDxREiLkdMvutpoYZE14QxLpPduJNymxjhRJxyCK7r6o9XtSgs1Ag54cdFrWFGRKeppbQmPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YnKMgjhDRbez5ht4K1syPCiEADdAgQ9vnZz8qQDE2VTQje16H3iyaowzz8Xe89Prfj2FFZuS293F2q73LiJwghy",
  "key1": "2cyJVpMm6dWu3j5HgYrx36yZLnW9FeYjWh88Ro4jH61e3AWAqyrqrtEHqUWmHSU5cBJVxAfTnBjade6iPhxtoFFN",
  "key2": "URCWxNfzfqqrij4HTrz3XM9XZmGqU1bSQKA5KxfuAhv8hWwaL1wVJv2NJRBA5gtRUqCFofHybhgGyq45VECCBXN",
  "key3": "2qhHJwwvUiJu63TzJjaaGohEf4AXZyYYCXdyfDxsx4Y1DbzSAaHVpPfMK4toKeowzJQGDanUS5FhqfRe7i41vNaZ",
  "key4": "3hj2y53ZrifspkbQ9UM7ds1njVoWj9J3wEWEEYAZt3atE2tHS4uWN7AytQciWngKXY889Rui3Kt93ApQkyWB92fG",
  "key5": "2cN552McpP3vYrZG6KCitufgveRoVKMjnEAGwN2upA3sRPSxCQcpTwLhKTuwsjxF3rnf9BBrKYk1GB9W2fmGJmKp",
  "key6": "32uVfxRjP5n1Fk18wYG6PsWyeA6FJhcrg5TfMeM9Us7RuKyK25ZMULgs7S67JVS869VcARkywWZnzivJ8HTCV76K",
  "key7": "56BHDXnovg6GNDedQsti9sbQMkYtRbjvj4CxmL4ZUs6dGk8XfohotYJVrVp29Lv19YRwv8sdmvFZrjL9Z8QNj1nS",
  "key8": "5KsCXVeEbbVWvBfGS1MZU2696XnNM2zddkddyVzerKeF6xGFuYcExj8wx3BW39z9dkLvXyKrtECPZRXpchP9Rr24",
  "key9": "47yTFgoudSJ6nDBgSXDVSatVjNoQha5dEv8oQLfc58xuFTTYtnJavaBHE8D5kKta2AgwdYgnjmPpBhxtU86TDU2z",
  "key10": "WjKWqtiadS259vHNZ95ZgVURS69djNzCbkxSAbG9NweeLwzgKnh3ywCcA6PkRTEDPanGSdgaL2zEHqzCDtL3kLK",
  "key11": "5YJYJvpef3PNZnDEUP83Qk55qMtKrN8tLbebtiF9BXq6cMXsun1Q6zLvzEgWvToNo4jeA5QnBFEC14rwEyfcMp2X",
  "key12": "4mGihmMyPnK4fPsCc2nt97GbLLHTGK3ckaA9N6kZ6jKpFgsi9QWNgmhrqDGtagRDgLwThS5hP8z1Mxdcw3oyJcUi",
  "key13": "5WsbVsTDZYXGLArR8vxhfbWvVMVBfHBhLCRrfvCCR71zN8ATWKb3uEvLoBxxr4HGATeSWvpKq2zdiFpQS3VtaNut",
  "key14": "3H9zSumTsXxhkocwDM7EzrEmKd8BoLV7AWrFFN55qkGZwhjnrVb54EpFzUAhZotFW4YThz3K2sFT2x5EgoiNngtA",
  "key15": "2cZbvPEJLERucLE65Fu26rCLeBnAk491zTuyuBYJSsKqC7szGr47Z95KLNzHySYma9QrkEZq9Hjtp6s3Fn34sFoW",
  "key16": "54T3bNfpWNLBC3LpM1CfxvJyHmHkRUA1BT7GvG8n4aTCnUq48np9D67h6sFayK6LT6PGBe6BkY4kfTA4LaSqd3gj",
  "key17": "5U7NmTq8c7mwbTo9MAtRgkMNDZFUYQ4Fe4uefoJxveD9PKPrXi8SZaG1r3fNe9ReWbgWrRuNbU238dPuAtRMAXSu",
  "key18": "23bVWdZWp5GyWBEnXf8amSoMBY5c6zbRHr22ukanWDKdPvcUCmQftZoKxfngVDwhhTgGYcsbjZqqECTA7AeuNWL8",
  "key19": "aAqqeoejkadEKqesbDMBVaNfq9UiA5oCEqsmgHzctjPwo7oey6EPLcQ7f7GrtmxmGhiknsFAekkmDs8BrzFNLWH",
  "key20": "2hWPAC9RXSHD2mvLHis6PR24KJYbkZf9dh9Z4RkCfd3zRcNAkVzunqLieiEL1EerLWMePmrJ3nG7PTxuv3eoh8fZ",
  "key21": "P8T1NPkGzp1jjNTQNBu3hR6kdoyEDMXifyR6PgwGrey7eocKrxUJ9T96WYdudoVWWFWzXjg7tvenWukt8BaSrUa",
  "key22": "3KNELmxmhtCYTMxRi1fLodZTmLpx4jeTfudLNWvXGBjDmd1qWHX37AEVbV5Zmbask6KNSyEyKGuBM7DnwMxeE9sY",
  "key23": "5errzxgFNSuVhnerANBnBcGzvnU4WbJyLaRR8a1ZJWhgaFsHaWchUKyz65LjnQPWSPaDuuaPKPvvYe5AKTiSDXpu",
  "key24": "FunGd6eBmbPhyHXAkgQbRrnWehcqWGWt9JQkvNcVFu18SJzkLxAJs6nsRvucavfbL1fwPe2odVyCYHTp6paStMK",
  "key25": "2FtUzsVo69BEB6UPRxUhVERbxDiFF88G98jYry9rjTscSUUVaqwaWejw7Vtcp4UKeaioAXwS538PS2ir565YkTtq",
  "key26": "5cWTF7C5h8hd7ULcdnxdj93yav6DPCcpDAXsrK4GMR84hVRie5yAUUnokmQQFagwQnUXLRLMyjPd8PLLfqJSdVJ2",
  "key27": "4yKUJVEriieYfiEjoJD2xDyW5LG4RfrENFENo3MrfYxNV9sQ2pontvoqWiccqtGqm6M5jLV2u3xkezJsgCFohwNi",
  "key28": "27K1Mr7X1FUHotp8ThD6WaNsgL4UKNMsi7dfJs5R1P3DB3nSrZTvMmXw635NH2AyR5xQXMVfFXxeCkogsp7uqEUt",
  "key29": "62xXaDkeo5SgjwSpbGLPgcsZ9snySwSqhVdR4dnzmKpWntXL4pSbSSbjPqb2wcFVWMYKAg33HGGhSJSq59RjgyAE",
  "key30": "vH5sihioTFnvJhZVZQkaZEn2iAvY3waMxnsB1WdSAfMdH8q11zHM7jQHWm22eG8hHFNrix3XVxUbKZqMdGdDF63",
  "key31": "QW3PT272xBVHwsBQKnBKgtZkPMKy3sPnZGFdTtBUhHHtLdSNhAgV5VYTpxC8yaTHrrq4y4m8WyEhCPFRbADmSpF",
  "key32": "5ogq4xYfzGK9r81abA5fW2UBRMaVQ8He5AG1roKMK4U2RECSTzcQ3bPqyuV5pJAohapd4FmCmi2fpbeyqzUF5fCc",
  "key33": "2QjrN6xCZKjVWshuBSFrFVqAUUvoBWc5VBrGUPRc16QW35iboR83FVhoEtw8fAyggCttDh4afbuNu3WD4QWa88of",
  "key34": "399qehZkJyKCdsUYXch2VD2fJG9JqtvYjLTG8raQUTfdhEPJZKZCMbBvqDX13r7hdoydikmLeGV5tBvoErPqHETA",
  "key35": "WtN9c1ijvH8v672rGrwL5mLZHRrbvgTB11HZiRGFkSehsqsXp8s4NxefNo8GJRph4Tak6vqDuhRtc7WCN8xzFHB",
  "key36": "57ezvJ2eg4Wp3eNWSPYMzbpYFn2vTLYgDwYPeNthsZWg8WGEWKjQo2yYqgdfbMq8f46snzDEqucbFxD9y1DgAHEC",
  "key37": "35adirTBf4uM1QEF389PcgZhddAp7NtKZyMvhhnMvPSiCQEU3HhhFjYF9HhepNBWGf9GVzrNfsWg7bxCUSqSfcmw",
  "key38": "26GUUBs6risBgmCmcDuWv6XSHFQ3FTiUXhSu7nqpBcotzyNQskHUAcWxxc43MD7U5Ne8fUdtYTr1MqW4a4zbbvpx",
  "key39": "3USbKPNnU5HqRcLLWenGaBfwKfxYK3gQZJCVh3ywRRJXujST3SKMPnmiUTCoF6NgTMWsD4yN4KkjR72xQS8g7Ro7",
  "key40": "2dwPmN3Wyc1PACSquvJTqdW8H7kuKFCjY8yDYsya7YyhcxSJt4ZxfbvQYHFu87b2WpgeeuKexK82KSgx4ZERvfmt",
  "key41": "3qDFqFiRsMCppSfcdHZSkDWX5hBCq8sVhHAz36Y5hVuQGAcFVQpk4B71bDNKAXbXQ21MjAcnTsUHNgDZP2Vp75gp",
  "key42": "2GFesGpNrEaacbRQoNVwpfm72jw3XG15VPAQwVFqoQ53mJBziYjny2Jrr3cZyiGRL6pzhZPT8JP61XgNsC3ue9nx",
  "key43": "66dNPFjR14VMD5MJ68tqznqAkMPbtrR87AJrh8BTynRDQhhnnEZZc8qXr2xBn6AkLG8Y2vxdnvE4ojyoXXeW95QK"
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
