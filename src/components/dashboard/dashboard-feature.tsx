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
    "eEWo1PWAEmqBAgdn1b532FsK6uKaTUJPST4zQXDZHLHSwszTLg9yaCgDGdFVKmvnHiAXdpvZ1Z5UnJWjR78oF7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tjn4zk2Hc6L3NGzyWTCcvYHLqiyxF7fE15qoyvm496TaiFGR4R7bnNjL4zinpo2Y4fSYMZEqm6ZU5cLpcVdCWGv",
  "key1": "44ReRT18JpCwrvo6FkMetCtfbqXN1Teb1BnYrbxm4BPCy5hB84rLAVZMwM7sM6r3bgnmdW3fB9QVRytKMhPvmz2q",
  "key2": "646qH4xZWhBw9bQQ8P9XzabNvEWrvzuKf4zBEj7TCURPcatMhovtKPnE4UNCLXtn9nG6eJZB7tMvYP2WAzFWYYH6",
  "key3": "4rVoXDRXaDiEUSuyM5iMRNs5BVPRx1bFNbvDsfs2wBSxnTaYZk4FyBbPtjik83i1dKxdMgjyKe4rRT6NL5eGnPj4",
  "key4": "2dNkv8pRe9bkoe3hFiD9WZVPvrBq7ZjNn2GEjfGM2PVe5zWDaT9r2Hz2N2kFjbWUabQ7kYzd93mBYwBNHHt3bYQ9",
  "key5": "3McD9pP1kcbc7rkGK8pVjKvtRXK9RNmgonPagXFkekkJ3gawSZoikSWktoorHGVpt8gXh41P11MwXYT7FqBqnFij",
  "key6": "3z2a4EAikZG5EJwYbsXWzZq9aEt4HJuikcXegFgETHVzArfh4nhos2ByRCWUsp7Qyatob4Z2R6s5s1WR3muyeceQ",
  "key7": "4fu4JtJbCnHozELfSKxdNmZ5nJtJLzfYyD8Z3yrt5STkH8Xsh1wxeRtmQ28MvCyEGJrouTVSUtJduTiNVqxMnf5U",
  "key8": "3MwPRLCgMyiLe2U9yM3dXWAEgxYHSp6saQ3PfEjnums5WvR9uawRuwmaeuCC2719X7WPrZRhoHf2MTpq2PiaL4CK",
  "key9": "3BHVw4oMDek8Eo2a7PSM1n4nPz8AUTNS9ehSh617YNUk2QH3o9nB4tX4ytRwSA6jqTcmaguABR9P2KPviMZyiDgN",
  "key10": "5Ev6bqxMB7mZUfyvtS4JVPiuXFfvyCqDM5ZD8kzd3gyWefBCeUXP2Ptu59Pu1n5WYhpkVQ4BWLZtC3zFyZ6QykLR",
  "key11": "24xY4tgkUPLbdcKoq6GByuquD7WCFhMrMUu7jfXKuHDmfrs1aRzv1smJAxAzT3pzbY61RaVebbRjv9WrBPNghiFc",
  "key12": "3iHoLrGii7q9TF39mAHXhsmX6CUE3VaRWbpfp8jR6hHq98NjM7xhAJ6a2SBk1LxztUuiqFY2Wmo9TD2ucV8YQSEp",
  "key13": "7xdu9B8xvvjULXZv6kfS6MsJUT4ALt1Y6kRtriWTPWrvYpgnfjJiAaAVTaVeqccwpgk2SYQRSSXQaNtaoJFSYW2",
  "key14": "4GGaTfwxFEJSo9UrKqbesiSeWdwR5pzhbb4tLFf1NHguQ7s7UBkWdjzA2WFmja8fVGJqDQzSwreAc6vd8N3SJkbD",
  "key15": "5WrdgpicSi76cnYRRbga3DLmsLArpuRTEuv7zHg2cXtJttZ8qVnvDe2dD4ecDowaoKAvj8mzPbNRteAyreTULjAu",
  "key16": "5f17Ak7cQxEBjJZ6Kpw3AR8mzVeMFmwhiVrzRUrsgTdSM2Mom1FcPom3YPM9yA3WSYDR2Lx1FGmnDr2FW5gbe33t",
  "key17": "5mNMzUoTdY4j5PfApffYjvWLdJAKZPEqhGexDvjKTBWZNBtWrcm9Ev11MdT5se5DgXTugFkExyvWyFno7ktWNk34",
  "key18": "hpUmu6BpjK8dDMF5tGLNF96dCVSs1uRbKgXwLhHfsUfg9msET9o72S1mtLmPs2AX9MqRp2t7Ry9oi17SGMff58m",
  "key19": "5DP5XKE81sQYSjYSgLaiH9Jq8JPbPZa5vUq7Y6kXMix4doPgMbpZMua35Ji6dzMnbfKSWKdc6pXYqavCJ8H14aAx",
  "key20": "33pwoAF3DZP4UV3rsGrStXtN19K5usZnmEDc16uwPWgTMBUWHYBtfAqaZhddmBD9wbfUBfE4hcnvpRt2ffXnFuev",
  "key21": "3bHaovpXYKFjAmu88ek4XbwZ4BuduWaSRPnYhK1iws1maegXZx7nFSSckGgLuq49LSgkkqnVaJRmp4okZrK58jDT",
  "key22": "4BJQRRqyL8KY9TVx45WzCFc5mwJisrAXhEdKobaNqrWUW4QD25tT1fe3Z1oB9NhgbTiZ3fqzmNBQxHKse49ahZY6",
  "key23": "By51YFF9akxjTKoJUEr94BUPUGK7iPuGBtdt3iizNrCprUspbWGszADparw3ivFWkjwKirS8ocoda1E3diBuajs",
  "key24": "3fJyjEJ3seu3AH82pG8n6tQuFe5aubC1r7z69ex7A83Me5fTj9HZcrQP9nRvWjrn52kQhbv7ZY5FsPkx5kpgKVzy",
  "key25": "2msNk3mRDLEyWbBzH4HgZnmSumEbcHJ3ijX4PSrWgy4ohDDhmXh6zAaaTBC7cRzyHVXoGvaiyva5dLFMiohggyiF",
  "key26": "5b8TsuB4PAx3CZadbTddoMwJh1b7FvKaKF4oNnetoAFeECNRuw1P81KsUWHwbbuoTjk6FoYYGQdWHP2CyK4dnrqB",
  "key27": "Eji4pUFYw7XW9BZqwQqEp9gU54w1YPfZWWTdvMz1ubdvSC5B3uFJBAge1Nr3Y9rXoc4sbykhSorraLXgksMbRbW",
  "key28": "4erdyEQBYNuJu94yVAifFwxCbuccTjgVkaxubXm89vHf1tNoKCf7RdNLMsRaRHw94JA2xqibbG5Yruxr4b9t171Y",
  "key29": "4AwbG62nmyW7Vk9ny2qgMHN4fcPeLTocm7eEtDRDhbquMFyQrXqd1R2DAgxs5wYZmPa3dwS23gWKtTMNA85aGnhP",
  "key30": "zAEMCtptWfAAaEvvCLUzRJYP8eUt99tx5f2DBLPy1GDzRURVtaHUNTxPHsZfwXraDRQZju7zcQv6GbyeAgy8B44",
  "key31": "rojW6FEzejdHN9fzvxgygs6WFckwqS3nit1muTXJ9UYGsx9nPyFeSoNr3rHYyYDqgYTouTUNEZBuAA9cj16cWnj",
  "key32": "2vGAQ5crCgrqofNuUNfaP7xyaeAjaxBdiEpujJxQYj3WiLqtnMwBdWwS5iwMpgLtJQ2nFPDt7BEeXy1kW6d3d2sk",
  "key33": "2dFENurtTgrJwBsGnvtJYDoB4VBFseXcYiFUD2PdPNVQXScrqZc2gL14GDp48weFpKzLUqnY8J7j6fQu3MeMQm2q"
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
