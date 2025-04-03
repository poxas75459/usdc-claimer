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
    "63byJzKHWWjDHBrfEjmcreKCd776rm3FwfmxRJHZsMBuqWDJYL64HyYBq5WQ3ieBuQBLK1DCB8KrZh36eKvBQ1Pg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52qr5mYFEyj2UQfDuyokWovjpeqf6m5guhgXvpvrk8xEy6JM1QAc7QGpAXVhL65W4YpyyZSHzyKa4PDvW1Vf1nrw",
  "key1": "31eLbKpzfUt7xnPDCNnbi5pwLhwX3FmA7VEp1QPHu59qzBi2DLd3NzvZHGEfbKRJWzf6CsHhF2TZiYdxWksURmor",
  "key2": "2D4K6zNJBXduLYhkEZzLUoWk5SMafoQBfTPQPr8qt7enKcNyVMFL5bx13u8At62QtdNCp2GRZ4vP4zhiUXFE3jne",
  "key3": "3eMjnwrY64GLGa7aqVXqfhD9JwKixjLiQKSn57Br7a2yDKaKt3Fk96DzkNDqceBBnpbXhWCgsmyGjA7mMs67Lut7",
  "key4": "42RAMYwoSUf9FgrbEsfHMm8Qe9qyNYRAFMcNrAwtHeh4fREdaLZhKT6BiMpHC1RBE95n7KC6KY3WBq4vm9xozmPg",
  "key5": "5GnFagFrxjF9kBvLZfPKD9XmZKpngQU5WKaRYqsNWa51cLi4iD53Dke558hSwP3docLRDuo1unUCGaGxEYXV9dcx",
  "key6": "5goPTVmfXyLoV9ALEKhaGB19ppVU1dHWWP91nAr54Q72N6KyrbZdc99WmM9sY8ZdFiGrqiwXE1iobKgrK77mWavs",
  "key7": "7nuLmXWaLxFpZe1mf8gLGfwfnYSFJvnpeejgBAcbSmHoXRQBTojNNrtAHdPu4S4vMX8EtAaoYWspxUCKxpq2KZ3",
  "key8": "3FpkZcnxhL1GKBYbNyhdP8pjqBBnmSHudNYvwHarNFvMAF68nPMkTTmZ6K7UEmywgskLEKbhVnPaPK7EdukpSxqY",
  "key9": "5Ko6QPKUrgFXwD11t5tzJGVjfEiKKXrYha2XpgD4XWRaa8s2qLwdYLt9CCB5Br38xGJ4X5HMpbSEjpDW6M6LLx6V",
  "key10": "2T9LFMNdmXqAoRLLzay4A94etvtKwpRZcsc1mnt1PogaxBhyVMpGFoW9QaYutm3JxttdPS3wdMS9cfVdwq2AfUHD",
  "key11": "4pzpRbLWgQmN1ntysDzogp8jsJeC5qcdtgQQUzEUyeusyskT86szrgkHzYea8J59SKFTVTryi5UFmFhqpHw841Q5",
  "key12": "3VmhjaQFWFbVuPKWW4JhgMXGoqp9hcx83MWvJe5NYvpchkRQtxA9tqq68YuGmrTLrTojo88i1LSpnUjPGYkm3bPz",
  "key13": "4Gwr37N7xRazXX6RHqQeCcbazvBJhsGErBm9vBtu5HjC1GiQAwpHmsd65TRrd9CnYff3nEwNUWAwRiFH9v2gTktr",
  "key14": "3kLgQ9En1PoeesqrdQw1n5xMS6eMetxKj8CQumjHyRQfpzyjRRX6xMi6mzHXFQJkfCj9WKK2zSkRQyb2s8NZ4ptG",
  "key15": "5AwShKQzVFWo4XsdhegkfGzn3VSDBZR28t2HmtVrGfWcriaFmifJAqWRViHjzS1pJLM45uVNgY655FXTSaaR1GCj",
  "key16": "28NLYfy5Kn7rNEEGGHQvjjv6G45BzMqeMuJDc2KybW3aQAQTTN7Wiu3ArEmZpm3wEYtYSFS6n43BHU8869nBVrZ6",
  "key17": "3SNaK3Nh4un7yVnwAa25kDZdPVNnFGJNhZ1JrQQ6Xvvo8kCmshHJBbhwbkZEDoHDNYL4B3xFJWpGRyitZGr1mvBQ",
  "key18": "2jZJim2SB7vLQBkZ84tgUrAqK5Ww26iv3uk2xprXZKdKf3bgX6AWDb3yoAy82tpnefopMu28EyEJLSU4wbdVhkgg",
  "key19": "2jpC8ZGZZ3vx1hsVn3ad9t4XWVriFHrWAMTwKGreeUZQQcfMZiKdzEbkectueWDqB2uwjikZEQwaQXjjyJFZiCj6",
  "key20": "2cj89ReoDZxwbmqmm7EWt6xzWqM3SRKE4c75pQn4B2e2QSxiZ1gfAwRFDm3tvRwgMFWVdPa8rX3oWwUUWcZGqCqR",
  "key21": "4Ebk3ZDM8d6AbHSrzk1iaUyo8r2HXrWfLhrY3RixgSFbtCmpmBZVcuaHpvtfCShUtG7uvwU73xRct1vBKfuvBhe",
  "key22": "3Hyioh2eBgsWzDD1YGcvndLauCjJeqq2p4EZ2J8ESpfRRuCmEdbbBLhbHTZvBFt2829nQuaar5WphaZcQGoAywcE",
  "key23": "24UuaEX5PP9z7oakCCm3qQx6tVCq1XVPVV26VCJteRicp2RWUduuScTfWwi2ftbLZ2zGGncFWTYqpBVPg4V4fff7",
  "key24": "566XdaxshU2JeEuYRqG98zmrWSd4HyfEaGzJ8XL4HFCDUZrshi4HLm6BL4NB7XwCFcpz2P7rRv4tMiP7YUZtdB2p",
  "key25": "41MJbyzCxwcY5seA2XJA8r7jUqYUg4om71d99tMF5Wn8rkAU3ZZoSd7WKtjN2Y1TQ3Stnm9DyYb5c5yqPfN6phf9",
  "key26": "wPbqRhihF3WXk5gsLeBVdzCUEHTwpthxaD84u5nAx7DVpd32EaNQqicJTHzUUBBS8yasB2APt6awVXwqspFqFPq",
  "key27": "4mRrMUnNTbF4UCEKTmpPyuuNgGZFLEEMzSe95529iSpwKUiNPMZMA8TTGaQyjdGKN5bAB6n6wCFz3ZwNsFCSf4bE",
  "key28": "4Dseh2WvxMfugxiZNp6phaixKhaWfTeuteLefkijK1oaGiemQ2JcTgdyFyyutSUw4qixLFyABfoVm5wW53iPcddT",
  "key29": "3cWxNgpr8pGG3UzZhfCywS9o5ngwNPpSrvh3P5gJiNsc82jNWYeynPSz5pQCQbhMM1sS7hQZHeWpKNR9HuUucXFD",
  "key30": "pY2DSQtuQSQYMgnhG3VK8bRR7zZvBaNvQZZ7u7t3rT7uao2cqvUx1D1X3EaKdT3QbFSCwvfUuH7yS1C4YD3Ptki",
  "key31": "48H3gFtGTH2UYpuPeBgRM7gud6ZkfEoCAfWF458JmaNxXF24JB3DKxU8YQP4XZKbyKB25YW6QU5HQPsHV9pfRtDb",
  "key32": "2dG9sZ2TcZ2USnsc9rFpvTxc2vJ5N58MLKVamygb6QsdhKrpAg8BRGzZyBVKEUdRLNao1JX7KJYYSgwaK4hqFtTN",
  "key33": "5zvEu7ff9ek8pXfCK4pSF45FoFeHTvRPA34HzWwz19G6uc8oTnuVN9YGaNzny9hmfbQMkVEBNxZ31zaXJhsF1mst",
  "key34": "3BXiwSTdq1FFs5EwD32KgAKsNXn7zdCjdGScFWQ2ED8hZNL6quwwkCR46Mm5UyB3erBgKCZ2tLggjejB6JWtrkQR",
  "key35": "bCoSGUnodmRLZyJL6pVcKqoecS7ts8oBzFWjF8KCpnD84Qnq16p31RaorQzi3rtL6nfmGhPXBVF3ntHoAQXswQH",
  "key36": "3W3PGffSyeYFXvbwnn5weZygR3yaVW1n4dF7Ja86ne7JLgY2bT2PqVG5VAP7Di7kwFWFWFD68m2FptixfDBkNkQ",
  "key37": "4QK4UVyUGPMq6GGrQ71VXz2qeQ7ARBaJXBaZbs5B9PeBEYf28P2CYpEcjwwPhW4cRRVHpHj2evmUF9r8FgQwNA7c",
  "key38": "32Zxg9PW5jAcnu7yQHeX2xonRDKUnD3o7nTgSPjcamFXPUbzNjr7qLd6wnRNwkTJJQpivDa9UuaKhJwGaDMBao53",
  "key39": "2fdWpx1HJBr5EPyDGitUqpCnZno4YHdxtXRRbRSVVH6nZMX7wPHpWNfUubwHC7DfuaT6LHn6bbcvK3pbk9biVSp2",
  "key40": "am2ZnV5keuy3kR8dL9qgxvwbmrceVyzVSiXm9zdhTnduEgg8T71mSNXmaxvKDWhag3Go2yWmHgQeuCANPeJ4USr",
  "key41": "iazJcTUAqpcxwDx5wZ34uDVWG9Ud6nAS3Mfqb9YzVBm18hLH2ug9zhKhN4CGomv3sDi9wsFBwnLnRmNvZCqEQc2",
  "key42": "gwTz17FSKK7FaAnJPhPjipDMj9oVU8fyGoEDgYxpNB7PbvYsf2LaiB3DiYpxrm1yiyvhFiNwJ8fpwBAhj5moszw",
  "key43": "5JfCVmf1siPCSzjFsmd9yc6jXNwNw2aPnipWtqX61q37Tqmj9dFqYPeRb8zqv9QayRYchCGFPE2cgMnndRsioQoz",
  "key44": "5iKTQqbwqS4k6QD2Z5TFbfwDmDF4B3T51PquYB9iRd7hi3LXSLqUMAt6nNnUDyq3VBkdvKHZsCfHbJnb8hH37yGP"
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
