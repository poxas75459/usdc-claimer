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
    "8qXHUu5RvVgDjCLpRCkuvLZfGFxzVZvq49CtkgFFiGDYnxEtSYKeJyQeasgBNKf4L5HBRabQuwidNg1gS9niMLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eBw9VFVMVpojQL7XWtn4JAMpqJKcDSG1orLXJvo3eDeMwHTQG6cBiKx5cTEvtuDuuhdB3aWTiFkG3RxorEEoyxk",
  "key1": "3AdtzToC3ArRe77BUNcWtzdXQs4KbWX9DK98nLndFGGKYVxZTodCbaaK8Le7Au2XJgReoFeYZdsU91asSMLPoZaU",
  "key2": "5gPrY3UcjScXAQY6QYYSnpEvs1HuC5kAVvTcDSAgbHVURyfpR3kY8GLzcexGaEFiXxkBMAzwNTonp7xrgRN2ARUx",
  "key3": "jaUnBJd8MkY8REQX4rPqrcmVxRS3pjeT8ewQ9bdd97LD9V4ASyXttVW4XzVPuiS5DcMgRiNbk4qZBrThrugXUW5",
  "key4": "4oUPFbyqACyw8DfjWXEGECJsRou59ydRe3ukxRfHZpn9F2fKgGpjDeUC5XwrSxVp8VxsxuXZM84V9JavAR9dXerD",
  "key5": "665PTLtHcbPmbNSfYx9YxDp6kd3ck2HepX8TAEPZMFk7o9gYZhrpn6iDnanTANBos4Yqe5PFStEKbJvSBRndzvSj",
  "key6": "4bPYfTzzGDL8gSuS8NuPDdtu4m5VB9eWuUzuQt79L8Adt5u3mKfciKPokMNMsmeHL2jgB2nvuAGkLqQ3rCpikSm7",
  "key7": "3ntsdkD1QTAWgabJdre7mvb2jvMuUsmvt4AH7bXa79CTLDhXH3jrox8samLYw6w5PogqfofKtoa6dJMAct85oooM",
  "key8": "2NXLjYsAmd4mzeLxALiKcu8HELdjNF22bjiBVUrkgrpx217ihMw2ddByx8eXWcduKs4yzTG4RvfZQF6aGjyckieh",
  "key9": "3NzcUQVmzrR9xuAA7FLPkk5hZGEf1mSLXrjwpSccZuTgAzysZE3H9HFNR3n9HHwm1gJ33kLD4rCKMwh9wV9URpqx",
  "key10": "4BbTcdHVBBq3TJMJYVwKZsTNcysN7c8uS2mgEG49Qs3rXzLCDzq8KSwj2HsrVNDLM22AanC5XtweHz3MGcGgxDAb",
  "key11": "nigrjFH9tNsEFZYFtGax6cEZboqDBbpFUGwPf7MQXpdLYjwTEQcDJmfDYpnxVgSsm9AUyW32KexsgoYkfC3FACm",
  "key12": "4L5g2zT6PgU8A1wACRFd2VcMyf3TPEyo6hfG9WFXzPtCMAyMvqnAwk6RLQMC1y4FeyECLHon1LnZyQ9DUt2t4oHY",
  "key13": "4MCURThVmaBrWnjqhxw2Nsksi776WNJm8CGb95GSwgThdhMdM8SMQmRujkZcnX7i5QHxudNVr4ZmzHmiM5nepjne",
  "key14": "4mjGxaHnggJcHZqj7U9fcSgNftokSofwUXtVYWKiGEbnfAikr88NoxzkEPrBcL9qpezkaqVzEyk7NZQskMv8yTWs",
  "key15": "271P2VxJvsxM4xufddGntCEWXgLAkXpv9zZoauBV4Fojya1kiEv6yxVpzfm7PWhvdUF3oRdAb2CgJT8pwfmLEmV6",
  "key16": "666orebhNuh6FVNsRbTB6AvxQmAjtmnKxoj1m545oc2tm6GJggRjB7aGatrptEuX1RR21tGCVwU3DgwGzxKtn39j",
  "key17": "5JCKUAD7G2rpGoZnb9UcqkpvzQqTMwmkX47kCxiMtrVQB9ZY9wcLPQ9gF8yiJKz8bSi2edzecbFSJj8V2PQsULnz",
  "key18": "3yRWTbh3bjyNa7x4X3C6HbYCU4KD8TJFnMuTevQW323jbGoT49Dx6sbKPLLQ3CCp7Nw5AVFJcXGYvKzNseRJqgrS",
  "key19": "5R4haC7FGvgws4CRxube2sqwXZ7LoJszE78qVDX3jtG2WcLkj467Lqy4hDBDuY38fQQdzP5PAXTDL9Nr5mpqeGYi",
  "key20": "5YzUuWaxoyHroe7HiiTs5mgrBZB5BdMqocDxmDzsWgPSuZMdWwaCAWNMaU7gjiYH5gdZLf3kf4xC5gSD7zr8kWjY",
  "key21": "2qj3coNcDjHAZ66TqnH84d4NG6m3FFNY1wNkC7MYYpVZVLxHw9fjH1CR5hsvqsj4AN6NKvhW8oqtzBLeF7GSN183",
  "key22": "RP9jVubaWcjCD5wTSBRatQtpRiUftyZPLkzyqaNJqGJ4XUTowgYjJCWLvdFFwGZSLHGwBpLRuJzMYzmedDqRvuZ",
  "key23": "5eVsVT39mknLf1Ddkdh1ivgtsm2o3K8qYxTHGFt7czqNa2hvTKB3pCdfcQhj3eKHds2z9V7W44ecyNkjwUZYPQiZ",
  "key24": "4vgJF1MG6mWqjMJ87h1dbfiYM61nR38jhpMBYuF19Vxtga27Qwq5iq5Bk2PZkVhMeLRVUDuq6ismChfcET434rLA",
  "key25": "21j5sZs6FSas137v5zB6vvEe6Ai2LVY9LVenVfJw2cFSYsCED6hMCsyvkSjMnioYZzMPubvLrVTY8oKFXjFg2Ne2",
  "key26": "2WF7NWecLXn6NzqPxqTAf9WdEVNRv9hHpnVBk6fh6qYPRqPZtd9tD6xWEYpuabn29j8Ldt4GxuFq8KmNcJiq4suC",
  "key27": "5A8NoHpK3MHf5GvKDk6yYdYX9PXV78urzx8TXLPSW8NwNFAsT82A5iykEXS33yPWUHHo9hURswDAsp2eEpNxXubA",
  "key28": "4FA1umhmQbtobSyYxJMUX1GXpFqAuiQSUioE9mCi9TkQ5fiNEkHVWdPdaSTHDTXSqkTWDs3Rm6f7wfnCAwNWLHgX",
  "key29": "4SKYkR8Qe1Gg2CN4MrQdpSJvetSDt33hfekrSC8Vxf8i57578R2HAu7jpnfmavqsFYHGtvEYrbmACnZBJeCC6DM2",
  "key30": "5rEgtXTCTPG4mqvNpWnP4Q3mq5KhpgjRNwvubJJorCexeThkpKR16eeVJAGfJVqiZ5rxEVUdXrC9ZoWBgWCABnSm",
  "key31": "2KJLCHWxCAt4fNDDjWEnqGvsnBGGjvoWqxvSwsmc9u8Kx3STf3LGzLz3b5erxPDFFXkVVhW38sbTDbSYtbhrYJz9",
  "key32": "4jDjeL5qjfiCHiVo9v5tiRVQQQaFVzLteHcaVL5zPscbUbAALQuTVCnDvqmc4QVPo9wFxjG4TFmkt4XUoU5SAVke",
  "key33": "66LF8oJQkQntXf7JDU1XFbf5utstmqmPG3YnYK4NMAWJ954y53pJfcJwjqh9Yo1VVpC8P1rd8Qf4j6PBxMa29xJX",
  "key34": "28y81SDtaScRZ9aZPrRCahsXVqcPEWEFjeV2xgP9NZMmfHfFWSGEXrMe7egmr7HcwV3t3ocavBzympa9YVAzkQ9g"
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
