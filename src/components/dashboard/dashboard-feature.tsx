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
    "3eia4FChzGopCfvrXcgQb6A7eF4y9WZu1a1bxFNQwzkGSRAoec3rzDZ1PE29upd8eopaTt6hEWA7v9k8Lkex5RAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45K1oqiaEJ3rKPiE7zHfU3mehkV7A1pEL2eyi8BaQQngHio6Wh84cKbZhwrwiDWVNeGTCaWc4eHVLoE4JvvnyAap",
  "key1": "2fFo3aoeY77MLPCQc2Y7GWHmX4JucvAq897rGKacHdk3hPQ5zADR4ZfxhUygiL2rJyBm1LN3142QfJzhHi7EksiB",
  "key2": "6oGZQ4pWJSetDoQ2C6irjMjo1z3r44Jnh5sqz9ECULbqeYaWjjCdi7x8fY8z7kzcFQE63rE6avMxupWYpEmiBey",
  "key3": "GQwYhu2n69rhCSjEEjaw1SFd5mzuipcixhzFCQ913XECyAB7VdfhP3b38y33i7Z9dzJHjBwKAWXhAq1At1NkBWW",
  "key4": "aoHWKWfEbXSsLYEsjVdD8xWyauo28S7pB1qSrhpAiPtLH6uhHQmxegsYuyMXsbBetfkoYNscC91XNGu4RTSX8vP",
  "key5": "2oBbbkD18EwZiwU5N66g9gxGnwxAz7JQ773XQsk9ajdFd7Br5KyT83snUXMHF5xhi4xF4pdaS5koJUvPq5L7EvGN",
  "key6": "3z1A8vUFcCXULR4ranYQptTEJDp8uXn3BeupbG6bg92CPXyWhVp1dAWySuXLY3wDJYvAqX2sXqg5FNmcqeo6bKz9",
  "key7": "3kEkB79etk39dQJi1WVMgxYNvj8xcVjAJ5EUG5A2N3Dujv9nEhxZLog8TxG2sACYo4ron5hakCWJV6zWyf7hYFiA",
  "key8": "45HzsC3N6TGubkqLEzw5Ly78CC4iaf3bf1yNwFLmL36MNz5SHHviy7J2upYWnJVUcuJ1bnGewsexVPSGySiGuY7W",
  "key9": "5erXrW5yhjVt4ZnpALt9E25XcuK3HzGrPAMYVVFy9novnmnW7MrZ1mGnstad2pjn43uJtuf4RpB6Fya1YMc56RuK",
  "key10": "4ncnAkkBnggUvYkgGHv9HGunSALYw51Rh9rZHYVaryMWpznWLVo1RyfskYgcXpREBX5MVoaskoYmVZb9TLX2k1CQ",
  "key11": "BRVESkicUG1r95SwMtapUFCDFySiEwhekJguwVb8HHRESDijejTbTSC7SszbvTRcE9gXv7MiWacdpheXVQ9Jbdf",
  "key12": "54GV2umBnWtSMjvekySbmwmdE2iZQK8emMKELaqfhbyCm3bhvGNCcuGiAjxvyzin9BTLoe5BpTMeybgbJLQ49GNH",
  "key13": "2aHLCJyGwfYrseNyn1vukg5ackm4ksnnvyH21bk74exHn4fUF1ZSMtfSZimnoBPhx5dHhuC2DRyj1CEm7syPYPPP",
  "key14": "2BQRwpyncTrmW3FDEEaBc2FikV3FfXigyeZe9fTMHsuucRQBRqgn1Ce67Dk81rGkFwFb8hUPH3gaAowvY1MNJDLL",
  "key15": "5cQKxAyfkBAjF818PABr1sYe1aoGAzqYfMpcXedFX4jWDi2HSUVahANxoyQrJAPSxXPhyqHVrYt8kTbLh3Uk9fZN",
  "key16": "3e6LUo66h5AWrgwN3UFmtb5jd8UpJkRcq8UMYDMvnhMzUVAbYo7jYLBBepbVopgX6hiKmbKvvnAiT9Rwg9V6Zn73",
  "key17": "27wef3Xpuy7dFvCQx2vrFMy6LZEEgrbRHn7ZTENFvNXPChWczNHc3ysczsFrxYeTzt9Tnru7qhxhmWgzEg8SNA7g",
  "key18": "35DUBeWJFw1fafRuA6cV9GEarhL5NE2E8PNTNj68KfxskQaaGWa9Sm8E6eqBvWJd9xiWDHjBrFejCcLN35GeZ9rx",
  "key19": "3LHZ3MTq3fcXnAJ1rs6BbaQwn47qSmwiXr23vXTUp5M36jCaPwhMRfZtuF6t6vH8B1eXFzG4hDfBWFFcwoe9qy7i",
  "key20": "czBvPym8E8cS27zgeRTBbv52TsVAFFiJ8ryc6THzfxAvK57MqC1osbS5bo3WYsUf1xdrD3TXZ4eAm23oTaLR8m7",
  "key21": "64HUtEcQvCwB9sUVsNuQ3KMmbBFGWCSWii6sCTirsPRoa437ocgCcBT1zRTyyG52qh8znYn76MtgSqPAcfgycH4w",
  "key22": "5C75ibLWC2xF5LtpNbHVUPkTrpZoM1XynhwsKmT3xtGTKjn5hAmiJpRXfmgHfVMZbdUQQjGZhzKRMt9m6UHnJHPh",
  "key23": "4FgsQZNQHJ3HuL1sXPcAEK6vxufvjByHcXdfRxfA7qLTGPTwTbkqjhUzHkaTu7cyczEAHDR4GUGgy74BcNyosCB6",
  "key24": "33VJkP8S2NZW3xwonQkq57umJcuAtkdECx9Pqdh7ASG7dQmUyC3BKVh4spz52dWPzjAwZS1es6fD8ZJKUFmtjmes",
  "key25": "4PV9BhaJe6bniyTcND9MRdKPL7nUNnqXdbsM3wiCADGzu9jNyJWdjpPSNwQGUJ2i1TPY8HewsNJPUAEaWnYaG2nR",
  "key26": "2Kc2RSz8HKFvbyrDBDsz2C7rkpFxBZBBnB51jrXySf3ZAwNA3p5BmzfkeKjMD9QceNwGpWmaSNkayK8QShSUsgS3",
  "key27": "2rb8H4xbfLi4fzWt948Ej1XfKaJfynjv1vnnNigGiB4A9qfHyiL72eBt6ChXFNBT1XiWEp6NMtCvBKeTN4HGrmLo",
  "key28": "3hRwwtprRcMz3sBCa9gHRCLVnvweeuhbwicUMpNNe2eYwy3gLHqEjY7SvMb2mGC7YM1t1wRZxEbrN5M5SsHsCvjE",
  "key29": "4DY633m9qgV9sJmYvZXi1vkWPDfsvYdn2YbfPNR8QHa18Rdiomqqt5ujQgJHr28XucFyy6AEbtS8mry9XZ6t9Erg",
  "key30": "3oPbENkDPLQYpenFCFfyYyUeVikueTdRgNh8RANYNDuhRhF4fSh9dMqrEANKYCF29rMSub5uJNJnyQzsKEsncWZR",
  "key31": "527iVN6zyGzrE7DWhJ9SPNGASABSznoKp5U8Nfi8DnXwXVxk3ctwJ89f424GDCL2suiQB9aQG6ZH8NfGXGoJLhRs",
  "key32": "UcXTKvitYeL4gw1j3oWYja5YwtXhti7rji84YeKXcb8wYZVJPSPMx4fbN8uwSEndDMsqRRtm5Xc5FDxenJ8CKFR",
  "key33": "3aKJrdQYna53nFAj2rij6eCxgcJc6zSjNTWaftaCa2DZ5nH5bPjkXtvbnep2ejiDESuuETv83Z3LpixV4aY1zYii",
  "key34": "fy9paxheA9CA4efxVnwijmDaF2Eo8Z3hSR5XbsXhewEhnsUwosjJi6aTRxcEvStdRNyijXC2yNawEBFTYX9Zu8v",
  "key35": "6URZT8fJCH4mZBQ5NwChva7jeRZtwy5jTUuXgfpkVm2d3gCvXHh9Mv7je1Z2pcbv7ZnebRZ3mzn1g3b7G2tHcZX",
  "key36": "43whVfLAWDn64KVp75BpMWQzBGnW8Trpg9tH3WnUD6Qmvxpm5DNgqEoRs7XgZHhXiWf4yv7yAXkoszziBJtd8wkp",
  "key37": "59fvZtW2Zr4LqYHx88y8xGigGC3pMKD8Nb76cfUayJApMDDETYdEBxsmDfzRTBCSiARmDLMughyD2gB2tPzze7cA"
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
