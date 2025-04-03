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
    "nvkSYsZdmyPSmR85XEuLBnajJrD3CEG4oNNpqwtNs5aQfCKYsCzmcE41tVxtJhCgPUNVy19J7637N2EhJKrLQfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k4cCfnjaA9mkQEWQJEX9hnNAYVhp6hhhnZsYcw9PKoYgeeEWbLysphDwLpuw5Q4kFqFuga5yY3J6PKL9vfTWfrH",
  "key1": "N9psECtLmw5ewFTSKS5FQq9EGra1KD1kmU8ppAcJJxJke9tEEDYMZSs1ujayXwdc64oNVJvkMJ4wZvA9gEVsJRN",
  "key2": "3QfvKHQfHkn4r9hdyjYU3Aeobce87144AZVuDSsbfnVnAka5vdmoTpCnaPx7ivhQXmD5rM2hMdobzozzq2NG1HY6",
  "key3": "mRnsKo3quTpRvatT6JPYQuZfh17YdwJqPGgb5KxvLLA5K93EYaPNBpG3NzytZQyXj6mQP6TnToYUAMFHt5JxvVW",
  "key4": "A6oPRViaMxmvB8nXA2Qsfe4mddG8qyLyYBca9aZTHcULpDemp1x5W8BG8TebSnymdFgSSDNMD3ie9WefVxh4rkf",
  "key5": "35qc5nXoobQVcDBS8AVY1zooPJ1AXEtemnuYXE6N4Cu2xsR6Wisn3DRNpWiSKtZGahK1FJWjqisCfQ8CYUAP6k5M",
  "key6": "5V4rrKjducoMRWNQSx7oxKi9VDhedqZwbG1MNU3bd7gYEFQ9NQkNv3JPCfiypvPzFCEspRsZYo1dHuTFvz2XTVo5",
  "key7": "33zVViaooYdaWR9BgVnPqZhVWM9rRb8F9PBALs1pTTR4vvJrp2MD57sVJJ9K4y2jVvU4gVsN7rbWD5B82HW4xxxY",
  "key8": "5oDPUEQB4Vc5mhbE7CzuRv25avqgA8XpDnXsMH5FcJ6bxw9CMCwBcHx8gvrWz2tPtULe4FUbiBpN2FFguYDYxoHL",
  "key9": "35AS9jzeYhcWEAACURxLzfnUwX5JTgBxyqyBjQKV29szrWoHPGNpQH8xM8HC2bux3e1BzCAGHAfQmeThMxi7gPcp",
  "key10": "4FPzNXCi5eH9hRWWixUeDS31TRew5d5DtidgxUKn9Hr463i2EHrQfGPVUt3zTJTyXo3SvEcfeHbPoQT7fYUwwh7a",
  "key11": "4oE4CoQ9vudD3DmRTs8FY9c3KUvezcJKf3ihQMJ6N47sJr36euesh1jS6rPK6Hg8VKTa38Jb5q2vAJtADVerZCCy",
  "key12": "mGVX4x31wU48A8weWfvKYwECwRrkjnF6iPTydy8sUVp3HfumzKxxkvMPDJ2t3hVaXwbZYHWgUdUnysMBhP5dbG1",
  "key13": "43T49dqYWnHEnf3HKaE1BmZcpxyrVv6K3eAuPs5YakgiNh9mVLcSpsJbjbVmY4TwvfwtUWMJYRf2rzSqoekNUfyE",
  "key14": "3a3vQ6RXUHgn66a3brFSywtUQS2WFKKPespXTech88jT9Q4oo1ZGguU5UXtU3AyLmLvv1JqbYVv9oQh2rTGnWH2B",
  "key15": "52gGZ2QsPF5VfdktgvjzMsKH3erPddTG3RTMiBckLQwBtstMhswWr2ZhwPPnnjKjDE9GnUKDYQfcsiTpq7C3qmgh",
  "key16": "5b4xJCWfiCjPxSbs1tuGuwfwfHSP3oMibZroDzs5XG93JxGYAmJwLbBXe9b76Y8cw9bEUYXnWopB9WkTaSWJDqKe",
  "key17": "TNSHYscmmmajyxv7xux3R6TaMMKS1PYSTJSJSNL4vQKT6pK2FwiKd1zHctqeCBf6MFy1ghY6DHAZucQjhBrcgV9",
  "key18": "2RAdzjfxrceohvzK1uxtpGFP56f3mMgXUh42Frvf1Uvx2vtfhZA7syu4r4MpoS4XrYHxyuFZo18uVhRhNA5dGCo8",
  "key19": "3Aavd8oeBsSSbXgaNGSzeqpvGAwBmZAdp436fvebc27yVuDkPbXaw6FxQcz5FPzPcf2rPnWqGnuyEvNozSETBcvG",
  "key20": "5X8ezwzxnBVioUxPgMVjuVEgYS1dfTnes9dKBTSdQPwB4JZgxcrU9WYuSS51Y4g5Tro7zZjcX3VzE7vAyBwsxhUF",
  "key21": "54317tLQQ48ZKCfimXPDiV1xkzsHVgCbRZnSHPmzRvKPMhAHnK7Df5HGFWzZrScdJsmRWkwokJX2FFQ1Hipm8vvJ",
  "key22": "xxUVCpFn9HysPAqY2TA5nBVqPsMDKdC3jTe6RKQhTm6rDw2gB9baUcWt7DnS1hMivXrD3PY46noYutD1TYHp2F9",
  "key23": "41GRmFkosMQJ4hRWtH4aZ1NppL9JBk6wmiVSi6HZF32eiCq47vuWhmSbaEJqrucSjkkUhLpckzzGRoNpAWEyuoU3",
  "key24": "4zuudn9bLJEFi7K5Qn8eUqwwYzKEtH7SUPkiFqTXhbbxKVa933zDwW4sd27AFvfbnkvUHHGuGEzH74Ppcyiv2YYU",
  "key25": "2DTDnkeqmWRqbTiaqEe7hGAZHT9gnjizAHxCL9QwP9Y4Xfv2P1p4Pj8TBsQjcka82msfqASNZgM3TaQqA3qzJe2e",
  "key26": "3nmKjcocgJfw6yrLFerVoc7ERPucteZJsyeN77uyXhS8iqHFaLSRFaZSxdpHzNJsj8eMRMybH6yr1iuqHYqfa7KR",
  "key27": "3SWeyTB3cPmR67NeU5LWyAohd7Kprc9iZztS2Aj8KHYmWtbQEp6ZuXDzLE1oRHvZaX3tLe1u226UsmPZ7Du8UU27",
  "key28": "4QU617kJsBK2utMkE5h7SG4Fwny5mY945Sihk6MpkTtZjFcd1GivoSswZ97sD4ACtJutyeqhsbDjNpuY1uTnMqm2",
  "key29": "4uRZTS7GSvTPmeCumAXDMyE4t9N5g8ooNPULt8rqZ3W1uJQLiaz8fE8vBv3PUSPXBTRULapbrvNtk52kvJ7h2G9i",
  "key30": "Y89AfYZ7ut23pnjQZMqAAtGH5aFpPYFJsUz9SqGAig2jKgnuy8kXuGcDaLHy5Bsw9Biwfx7GBM6JWdLVDxXM3Cj",
  "key31": "5xiebJbQ7v2F2St8KE4TxEH36FzWJVWHz3nuXxdJ9h9Lk5Ybb7ULCEcxEpCe2gSBSySHMcWhH2QicgFx45fKV7T1",
  "key32": "121mvUfMxj7XjoF8X1UA7sNw5cqd8x9UJS2D9RafKiEdVS1PijQRAVZ649VeTRWj7HZCYAn2JP2BraAK5d9Rh3Ma",
  "key33": "28tRjqpUvGyrBLftrsrdVzVKUfAbjxsJLBqnMqaC1VacRErkvdyCW54SHdZdKxyWRG1jGq8Mycidobn6Z4eHFEBz",
  "key34": "5WtzeLnYVqt97vK4iLp4ZReYTUDM4JL7f3WzjmmFBRHiNXshcvG6RAawvk2RyLt8pXoXr2WpnTNw1arGJnFXYyM6",
  "key35": "2PymQrKzAFqax3Jme4ukFkEUm3vuDbjxuMYX6gRHD2dx6wNh215DQa9SVmUekSRksGngYXa7cQ9XW4GoJfLUZfMs",
  "key36": "2a8G682FfW8ZwbCPsp1Ph8LvJttpJLQpCpRfxFCvFaGxdxUeqz6m692pppXcJaPMVnLfSTYgjNjgv9w9ZWC9fFRY",
  "key37": "3rifGXgtTMWptBjRHyhCeGRNcE1cxSL6ij7aMLhHJEdhkyHijTMKi6Q1G9YJ5XZhLW3ktVpRzjqkHmkDZSUerBA2",
  "key38": "4EKCvAYyrhrzXVbREMn3Vn61RDbUexe1ym6FvohZY7NPyBg6BXxYAvaXpc37oPypZjdD2ZDatmQeBnSjQzu4J13a",
  "key39": "3MmMVyPRazJbbcE9fVJkZB3FnBFk9Txv8cYArnJRV69sXraAX36CYLA6Jew8Vhia3H6NSYV6JEztKqYA9Z5YHcau",
  "key40": "2ZQ1i9niHbwr8Bji3K6mqTn27SVNvW17g3Q2uqLrWoQmgTvrT6BbiWq1zmv6vz8VrtrQVcUUHe49uhbGYaYPC98c",
  "key41": "3RwxeKxsFTorfgN5JxswcndHpz9VKTsyaiCdhrctU8Ne9Mp6qi6kM17PHqeUQS9oc5c3CCo4eXcZU1mrj2neLnri",
  "key42": "4TCtWSGbF9UujoidBZ389BxZDoRVV9pinS7KnS1GjTR35ACoP1A7bYFDCza1iPQAWiCWUarT2iHqsPzip8AGLnGq",
  "key43": "bQdhiR3oLFWTbRFSDvNJsc1HrKfYNL6goAPiMAt7sUHmRWEX9RaJTkD1GAJ7Z71whYDuBZkwjSRBZBoGaSvjwwo",
  "key44": "3Fw2eKgXrbs2bRWQrnPZR6ZLDEew28ng4dxNG7ZcfM52y4doYUGyPNyYKweKR1ZDCJRteFirE9MykQmr7hHn4vhp",
  "key45": "3S1QtT3xFZXXMrYC1PvDZL5HNAPcDVmouhtA5fn9B7MYuxfeZx37dGume9bzn6tKYdxEqCj3X6fbL14Tw1Y7643k",
  "key46": "49bp7DHWszzoEvr6S98erfumsxcAftZbwtofhgy7FUjVXZxkQyRYwGvF8YcKDkMB2S45hHyz61rvDanx6z7HmNKb"
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
