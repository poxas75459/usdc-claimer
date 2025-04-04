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
    "4NwUidxzqAUGuWwx3pcu9twgFbFDr7Fmfkz1dD1TcWnRKUm7zepave7tzKbuEUA3GXivsDxsc6RVoZHaXDWS6GwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PkZLSUe93X9k8taXsUFsPidUvZqD2ofTq2U6HvcY38utDakyFg7Z4cNhHErQGyFdYCPivm1ywsrxNG8D5yFTvUz",
  "key1": "57pB8yuNVKnsDPpGpaoVx9UG1dsDg2uL43KipBhd71C45dPkxAvRL82F2ygYNMdK6vb8TSPDi5Vv8SrWNffW2QBz",
  "key2": "Q5ffvdAsQW5pEGwyZZuMtMTAPt1uKGNNhamtHbHfdQeoVQqWGnnQLYegt5i6YwKZGYJYjbLQtsVK8TQzZL88AQ4",
  "key3": "4gu5LD2JFr4jmwCtMqTYZfUrn66iWzBYJCo1aJo1jxqrcoXmQXnCMxEZper7EkF47vkdmVHCUkSskDTcYwTLbRnE",
  "key4": "33Rnukb7Mo1EYt7uqxij6skvhXyaXQpokDsRbrYFjPAp6CfGa4UBA6dUR1GnLoygXjM5fkZJEBWFR1N6CFh4QqSV",
  "key5": "imoiSsWE5eCAb1KBWW6UzHgQ2usetSenSVDPQnHtW7DcWxbvQ95rRBdVnWtCyWJp75X5REnWyko5muH4832qWP9",
  "key6": "SBQswabd9xneK5gxJkd9B9cH8pZt8jfdDbys2yzo1SsM2pm4S5fSTZAVwqHqbxc4fzPLUVwy5Vpn18yXgsq9XhL",
  "key7": "3fsq3ZPRjs3ZNptKaTKxK3BeW6pZjMdDfBHPt2MVUPXhaMHg43LwkBRXmuxbaRVeKQB3KByEr7EiHW11Zh2qkFTG",
  "key8": "2KDUusmYR5dod9yfSZwgEyqsiGCCXsqCAMYVVvHtWg2jg73kGAbYzHDtuZKY8CjqaLkq264qaAdoLDf78sxNswmk",
  "key9": "NsZzmzxQVbdojKtoXfm6UPU3dpq4hWoMQK21SQKDYB8U8ETzYSGGJupMgRdW4kBoA48P8TX57EddR5x6Xft3STG",
  "key10": "8JHKFj7h25RqX2bvHCwz3cZdCHLAgbNfUbdV5u9PoA58tB5KQPQLKe8GrKQNtaCav7eR6Dr8eWbrChgi7JFkwFd",
  "key11": "KnT4BwZycFwydV58eaGFnx85MU7jNPEk7ocSXbpKvyJ73jkWA9zWh3motYqRBv1MXbgnVUvuB6vkahGHdGmqiQF",
  "key12": "mpf1HV6auwdLwsRcao1svET6MBhe5NTr7HBpPKC9pcTDUdCjGVQ2eMqNxyPCmUwqYDJivVM4Yn7XLvc1TZJnKL4",
  "key13": "2xpJr5L6o9c5n4G9jru2Z6t52TUWBEReJ7avTpaAfafKak7hfi4aAhyEzXpjdH7WUrfHXA71CuLXm5ECdFWLmzY1",
  "key14": "4TW4yVgcL2DAmdZ4p62CW4ZS7eqCYa55rzNfLBf7EQ1YJWsP2U54uYtVMCaGYcGEogsFKgWnLjqDMeA7zrTim1NC",
  "key15": "ZBw91wDPoduHaTcjTnxu9wFVpKNuoHi1D9pNgN3De8To4pWs2JM8up6LfoRuSer14w7Wf9et3GXf73Cur5aMGfi",
  "key16": "3c4pgFYnfsfykJNfQqYdYp7dF55D3hnvFCtVm98SNo6xRHXpqjmiRbTn3hTm9KiUF4EPcod37Q37xb6S6HWkjPMR",
  "key17": "3KQ168qCHDMS54m7FAm8hNhxTcdsqijt8vHgsuMAjpS95E47LSxSrvVaGiYPR933JnpX6z1VXjTG4VcNQtSVaXPG",
  "key18": "5ZPpLAAPueVcX8fGUCTV2SGgQ46jVEC4CLzsuoumnyDLtZA3TrSPCupQBjv8WpdJKybHyMARnqiFJcecjSUdncHY",
  "key19": "56p1apccJV7DksLADPn9Fr37FLYEEB8NVBu1YRUse983SSabG2wAN47iuvKKPo3AyWWykskwwK2XRneVCJ6wM6qw",
  "key20": "3t2YV5un89p3eMCLZGC5VgxtHSm927Eb4yVgYWJdjdZwUirXVibAiPXhmQdQAsinNsY6ELvU9ZXWBvRtoTXuVrWn",
  "key21": "az1Y5yvmH88nhVVNK6624Bzx9fBpQWagLMbQgeJHgCC8tM85hwCUoXpzvs9U1DpawjMVgzfoocq3sLQVpKFEHih",
  "key22": "56GPuvTASEcMrcVCCRwa4bs21w5oEfV7vjdyw1HRNQTSSGtf4W58YNWCF2CxjoiVKvadmdh7PotQjAQeo5ivoM1i",
  "key23": "3yKig72NTzTbHdSU98NWWNs9T8YW5rTHoNeCZcwA5XRTpfkJk9VjM1zpVcmsgyKWRKXn7vXYdwqFS7evzPYK3gbs",
  "key24": "41AhNKSQq8nnXKFzPtfYF2pzE2nevpXkfutn5bwKpam6zHNUP2pxw6C1cDZ9n8NPCFCzDiwgQizTjc6PR3nWtekh",
  "key25": "KQcpU5JtFJqBnbxVrUDLNv3SiS8Nj84dYYydxF4WMwYGYqzEZznD51vKNmK2iba5PJrHtAK79F3jmq9HdrLXpgD",
  "key26": "4UdUU3zw9NMBLBFEYs2syKutbt67rq3qP43NKtBkoZCaMBKiUTcioRFYbmYKDaomqAvX1iYeMCWk8YkQHq7feid9",
  "key27": "PKyVzBrS6Uc72N3qJAf8MNNTj6hTq6xECXyEWHH7HwkAF8KjKxvJ7EPW7sfh5iTiH4EpFTG9E7WXqWvhz3mja8C",
  "key28": "2yxjvjyPZ1RHDiChSzXmWqTUed2j8cFk66suPRpDdTU2rLQKPBKi2vQuB7zmUs4w1eLK1r5BAYFU4cUzAoJiHBuq",
  "key29": "3zcpGscbPzwQLq4SAPYhfk9B3AcRibxXAJmyGkEcYASihoM3StMxiuAmA12Rb8ah9TwLNHHhehKt7Q2pTtUcj68a",
  "key30": "2khXJXMc1qXKc5Pxf7v6BFX6mh3xmUf4PpWoQ8EM5MAeBenFHuPKPRzyGAPVZBQmun8TYCsQkGALg4BAhndpokor",
  "key31": "33oTfKnoQtJWnBxbo9s3GvVJcbFygBPVo9TtRiQbykfG7FADq2XdRybnKHs2x7ZjLNR6ZMBUaPpm8Ur7myxNyMZr",
  "key32": "3GqqmVMAwjQpbiz4JWqLiRtNhVboq23bCksJJD6miJkRvCwGpCM1ikwTCGcr9txyXQUnyB5qMt7ZdW2Urp5JJ4fN",
  "key33": "5nvy3W9PVXEXfn5YKNPv7Qvdjsdzpnj7QZXKSZaX9PKbNv38sDRt1ZB3Vzm95YD65m4qjCjDw3ak63Wos7UBFtPY",
  "key34": "2VpzzBJpYqd6jTPY1PrNWdwBPfX21jnb6VmBdr9wwaxLKty1q9swP62LgM8rjXmDbYXdMepqrQQbGd3rcwWtsXyT",
  "key35": "5wTXcK1quoT1hqusSCQFuBU4mhs7NTP3mSUKMWLyLqdhdeNqaFnw5xF868QLEii5LaxUDC7fVr2wa49TxzTkX9qr",
  "key36": "33rJT7soBko6bFEh3grBLZxFQMkdwj8QQAdyavMxJHeLyc43Uvikjkp94soGnnkenhwezqtY5Rq6Zijz6XTbLFpz",
  "key37": "nFiT91bEV8UDedGkWGGUEcxEhfVTtCBEkSFebrw6dANyFi2XLLaxEehHt4CSRoPXndoN5Ye4UM6SuxtHJGJ7Jpy",
  "key38": "3R3o3yPdSetnytZv4MaDiXQB4E2DiMRMHCMpbWP1pUDZZuL8BfRgpwGtdNvgMegUQ6XHcxSu2F6rCiLkmyuipdha",
  "key39": "58XkNhx5sUyGu6xz9Qe9NTHvusCxNPMSpooXtDf6CTdJDK88gD6c7ZNJvpYmB6NqW9U4V6nuThHYuCdmzWPRz2d4",
  "key40": "D5fFCjXHBvwMX7rFTs7KtH467bLMczt4Kj9j48bp6nbqgnucpPTWK7r4AmvBahTpW2ZksuLYW1ZAHBxHyRVkXe4",
  "key41": "4JgwVZf65aiDg4sCjfwKXUyNmNEAWjfMaAzTbdAqXNCBVGDAVqCab37Pny96psNepFuMgFRPeEUuXgKoZRHNwhjM",
  "key42": "27wCDmbYruwywBEWsYubh2VUTcjDQC9i7Ca4fDuzGDTpyxLadvWWPbA7t15xqp5FtmMvmsy9V4LNmP8xowSgjrdn",
  "key43": "4WgaS6HmDDwjqSWQ9PdhJz4R5Wvn5wkAyc14w9USGpWfmDzVxVdeWvdC7e6w27t9fifHbdF4xJPrjuuyc6R4SmT2",
  "key44": "5WEymSgiea5wDhu3DGqruc6AvgLApcc5hqU2awTW4zQ5UciAoBTDAzyciXt7tvhTPUpTsU87U8jYn4mR95UDfLdj",
  "key45": "2jrwjm64qipknciADi8fw2774VLpNpgABXKMDZ9yvXZRdkVGBa36tZF6JofU6rj2j9sS2yMRf8pxEEk2B5ow3csq",
  "key46": "5Pd3St8g1KiSeKznnL7L7eFANqjYagbYNBQ3idvVfdX6AP6gpNd68GKDDF2u3E3cc7fHdsAimUjvVcey9k793Ed",
  "key47": "2WGwc5Kpauxxe7R4JUhSrXb8ce2C99pKpyw5VU2tdVpvhnEacuCWe3WFs2bQYHL5aFwwdw8Ckin6LEpdv93PgeVc"
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
